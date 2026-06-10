import { ICON_CATALOG } from './catalog.ts';
import { renderIcon } from './icon-templates.ts';

const VIEW = 24;
const FRAGMENT_AREA = 28;
const FRAGMENT_MAX_LEN = 20;

type BBox = { minX: number; minY: number; maxX: number; maxY: number };

function emptyBBox(): BBox {
  return { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
}

function mergeBBox(b: BBox, x: number, y: number): void {
  b.minX = Math.min(b.minX, x);
  b.minY = Math.min(b.minY, y);
  b.maxX = Math.max(b.maxX, x);
  b.maxY = Math.max(b.maxY, y);
}

function span(b: BBox) {
  if (!Number.isFinite(b.minX)) return { w: 0, h: 0, area: 0 };
  const w = b.maxX - b.minX;
  const h = b.maxY - b.minY;
  return { w, h, area: w * h };
}

function pathBBox(d: string): BBox {
  const b = emptyBBox();
  let x = 0;
  let y = 0;
  let cmd = '';
  const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) ?? [];
  let i = 0;
  const read = () => Number(tokens[i++]);

  while (i < tokens.length) {
    const t = tokens[i];
    if (/[a-zA-Z]/.test(t)) {
      cmd = t;
      i++;
      continue;
    }
    if (!cmd) {
      i++;
      continue;
    }

    const rel = cmd === cmd.toLowerCase();
    const u = cmd.toUpperCase();

    if (u === 'M') {
      x = rel ? x + read() : read();
      y = rel ? y + read() : read();
      mergeBBox(b, x, y);
      cmd = rel ? 'l' : 'L';
      continue;
    }
    if (u === 'L') {
      x = rel ? x + read() : read();
      y = rel ? y + read() : read();
      mergeBBox(b, x, y);
      continue;
    }
    if (u === 'H') {
      x = rel ? x + read() : read();
      mergeBBox(b, x, y);
      continue;
    }
    if (u === 'V') {
      y = rel ? y + read() : read();
      mergeBBox(b, x, y);
      continue;
    }
    if (u === 'C') {
      const x1 = rel ? x + read() : read();
      const y1 = rel ? y + read() : read();
      const x2 = rel ? x + read() : read();
      const y2 = rel ? y + read() : read();
      x = rel ? x + read() : read();
      y = rel ? y + read() : read();
      mergeBBox(b, x1, y1);
      mergeBBox(b, x2, y2);
      mergeBBox(b, x, y);
      continue;
    }
    if (u === 'Q') {
      const x1 = rel ? x + read() : read();
      const y1 = rel ? y + read() : read();
      x = rel ? x + read() : read();
      y = rel ? y + read() : read();
      mergeBBox(b, x1, y1);
      mergeBBox(b, x, y);
      continue;
    }
    if (u === 'S' || u === 'T') {
      const x2 = rel ? x + read() : read();
      const y2 = rel ? y + read() : read();
      x = rel ? x + read() : read();
      y = rel ? y + read() : read();
      mergeBBox(b, x2, y2);
      mergeBBox(b, x, y);
      continue;
    }
    if (u === 'A') {
      read();
      read();
      read();
      read();
      read();
      x = rel ? x + read() : read();
      y = rel ? y + read() : read();
      mergeBBox(b, x, y);
      continue;
    }
    if (u === 'Z') continue;
    i++;
  }
  return b;
}

function outOfView(b: BBox): boolean {
  return b.minX < -1 || b.minY < -1 || b.maxX > VIEW + 1 || b.maxY > VIEW + 1;
}

type Issue = { id: string; template: string; path: string; reasons: string[] };

function main() {
  const issues: Issue[] = [];

  for (const def of ICON_CATALOG) {
    const svg = renderIcon(def);
    const paths = [...svg.matchAll(/<path[^>]*\bd="([^"]+)"/g)].map((m) => m[1]);
    const pathSpans = paths.map((d) => span(pathBBox(d)));
    const maxArea = Math.max(0, ...pathSpans.map((s) => s.area));
    const hasStructure = /<(?:rect|ellipse|line|circle)\b/.test(svg);

    for (const d of paths) {
      const b = pathBBox(d);
      const s = span(b);
      const reasons: string[] = [];

      if (!Number.isFinite(b.minX)) continue;

      if (outOfView(b)) {
        reasons.push(`越界 [${b.minX.toFixed(1)},${b.minY.toFixed(1)}]-[${b.maxX.toFixed(1)},${b.maxY.toFixed(1)}]`);
      }
      const isLine = /^M[\d.]+ [\d.]+[hHvV]/.test(d) || (s.h < 1.5 && s.w > 6) || (s.w < 1.5 && s.h > 6);
      const isDecor = /z$/i.test(d.trim()) && maxArea > FRAGMENT_AREA * 2;
      const isMinor = s.area < maxArea * 0.45;
      if (
        !isLine &&
        !isDecor &&
        !isMinor &&
        !(hasStructure && s.area < FRAGMENT_AREA) &&
        s.area < FRAGMENT_AREA &&
        d.length < FRAGMENT_MAX_LEN
      ) {
        reasons.push(`碎片路径 ${s.w.toFixed(1)}×${s.h.toFixed(1)}`);
      }

      if (reasons.length) {
        issues.push({
          id: def.id,
          template: def.template,
          path: d.length > 48 ? `${d.slice(0, 48)}…` : d,
          reasons,
        });
      }
    }
  }

  const byIcon = new Map<string, Issue[]>();
  for (const item of issues) {
    if (!byIcon.has(item.id)) byIcon.set(item.id, []);
    byIcon.get(item.id)!.push(item);
  }

  console.log(`# viewBox 裁切排查 (${ICON_CATALOG.length} 个图标)\n`);
  console.log(`## 问题图标 (${byIcon.size} 个)\n`);

  for (const [id, rows] of [...byIcon.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const tpl = rows[0].template;
    const detail = rows.map((r) => `${r.reasons.join('；')} ← ${r.path}`).join('\n    ');
    console.log(`- ${id} [${tpl}]\n    ${detail}`);
  }

  if (byIcon.size) {
    process.exitCode = 1;
    console.log('\n❌ 存在路径裁切/碎片风险');
  } else {
    console.log('\n✅ 路径均在 viewBox 内');
  }
}

main();
