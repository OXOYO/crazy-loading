import type { IconDefinition } from './types.ts';
import { renderIconOverride } from './icon-overrides.ts';
import { renderExpansionTemplate } from './templates-expansion.ts';

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${body}</svg>`;
}

function seed(def: IconDefinition): number {
  return def.seed ?? 1;
}

function dur(def: IconDefinition, base = 1.6): number {
  const s = seed(def);
  return Number((base + (s % 7) * 0.15).toFixed(2));
}

export function renderIcon(def: IconDefinition): string {
  return renderIconBody(def);
}

function renderIconBody(def: IconDefinition): string {
  if (def.customSvg) {
    return def.customSvg;
  }

  const override = renderIconOverride(def);
  if (override) {
    return override;
  }

  const s = seed(def);
  const d = dur(def);

  switch (def.template) {
    case 'sine-wave':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:32;animation:a ${d}s ease-in-out infinite}.p{fill:currentColor;animation:b ${d}s ease-in-out infinite}@keyframes a{0%,100%{stroke-dashoffset:32}50%{stroke-dashoffset:0}}@keyframes b{0%{transform:translate(3px,12px)}50%{transform:translate(12px,${10 - (s % 3)}px)}100%{transform:translate(21px,12px)}}</style><path class="w" d="M3 12c2-${5 + (s % 3)} 4-${5 + (s % 3)} 6 0s4 ${5 + (s % 3)} 6 0 4-${5 + (s % 3)} 6 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'cosine-wave':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:a ${d}s ease-in-out infinite}.p{fill:currentColor;animation:b ${d}s ease-in-out infinite}@keyframes a{0%,100%{transform:translateY(2px)}50%{transform:translateY(-2px)}}@keyframes b{0%{transform:translate(4px,8px)}50%{transform:translate(12px,14px)}100%{transform:translate(20px,8px)}}</style><path class="w" d="M3 12c2 4 4 4 6 0s4-4 6 0 4 4 6 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'lissajous':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:o ${d + 0.4}s linear infinite;transform-origin:12px 12px}@keyframes o{0%{transform:rotate(0deg) translate(${6 + (s % 3)}px) rotate(0deg)}100%{transform:rotate(360deg) translate(${6 + (s % 3)}px) rotate(-360deg)}}</style><ellipse class="c" cx="12" cy="12" rx="${7 + (s % 2)}" ry="${5 + (s % 3)}"/><circle class="p" cx="12" cy="12" r="2"/>`);

    case 'rose-curve':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.4}.p{fill:currentColor;animation:o ${d}s linear infinite;transform-origin:12px 12px}@keyframes o{0%{transform:rotate(0deg) translate(${5 + (s % 4)}px)}100%{transform:rotate(360deg) translate(${5 + (s % 4)}px)}}</style><circle class="r" cx="12" cy="12" r="${4 + (s % 3)}"/><circle class="p" cx="19" cy="12" r="1.75"/>`);

    case 'orbit-circle':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:o ${d}s linear infinite;transform-origin:12px 12px}@keyframes o{0%{transform:rotate(0deg) translate(${6 + (s % 2)}px)}100%{transform:rotate(360deg) translate(${6 + (s % 2)}px)}}</style><circle class="r" cx="12" cy="12" r="${6 + (s % 3)}"/><circle class="p" cx="18" cy="12" r="2"/>`);

    case 'orbit-ellipse':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.c{fill:currentColor}.p{fill:currentColor;animation:e ${d}s linear infinite}@keyframes e{0%{transform:translate(${6 + (s % 2)}px,0)}25%{transform:translate(0,${2 + (s % 2)}px)}50%{transform:translate(-${6 + (s % 2)}px,0)}75%{transform:translate(0,-${2 + (s % 2)}px)}100%{transform:translate(${6 + (s % 2)}px,0)}}</style><ellipse class="r" cx="12" cy="12" rx="${7 + (s % 2)}" ry="${4 + (s % 3)}"/><circle class="c" cx="12" cy="12" r="1.75"/><circle class="p" cx="18" cy="12" r="1.5"/>`);

    case 'pendulum':
      return wrap(`<style>.pv{fill:currentColor}.sw{transform-origin:12px 5px;animation:s ${d}s ease-in-out infinite}.ar{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.bb{fill:currentColor}@keyframes s{0%,100%{transform:rotate(-${24 + (s % 8)}deg)}50%{transform:rotate(${24 + (s % 8)}deg)}}</style><circle class="pv" cx="12" cy="5" r="1.5"/><g class="sw"><line class="ar" x1="12" y1="5" x2="12" y2="17"/><circle class="bb" cx="12" cy="17" r="2.5"/></g>`);

    case 'spring-oscillator':
      return wrap(`<style>.sp{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:st ${d}s ease-in-out infinite;transform-origin:4px 12px}.ms{fill:currentColor;animation:os ${d}s ease-in-out infinite}@keyframes st{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.${15 + (s % 5)})}}@keyframes os{0%,100%{transform:translateX(0)}50%{transform:translateX(${4 + (s % 3)}px)}}</style><path class="sp" d="M4 12h2l1-2 1 4 1-4 1 4 1-4 1 4h2"/><rect class="ms" x="${15 + (s % 2)}" y="9" width="4" height="6" rx="1"/>`);

    case 'exponential-decay':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.b{fill:currentColor;transform-origin:center bottom;animation:dc ${d}s ease-in-out infinite}@keyframes dc{0%,100%{transform:scaleY(1);opacity:1}50%{transform:scaleY(.25);opacity:.3}}</style><path class="c" d="M3 5c3 0 5 2 7 8s4 9 11 9"/><rect class="b" x="4" y="10" width="2" height="8" rx=".5" style="animation-delay:0s"/><rect class="b" x="8" y="12" width="2" height="6" rx=".5" style="animation-delay:.2s"/><rect class="b" x="12" y="14" width="2" height="4" rx=".5" style="animation-delay:.4s"/><rect class="b" x="16" y="16" width="2" height="2" rx=".5" style="animation-delay:.6s"/>`);

    case 'logistic-curve':
      return wrap(`<style>.g{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:28;animation:gr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d}s ease-in-out infinite}@keyframes gr{0%{stroke-dashoffset:28}60%,100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(4px,18px)}60%,100%{transform:translate(18px,8px)}}</style><path class="g" d="M3 18c0-2 2-8 9-8s9 6 9 8"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'gaussian-bell':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:34;animation:dr ${d}s ease-in-out infinite}.s{fill:currentColor;animation:sc ${d}s ease-in-out infinite}@keyframes dr{0%,100%{stroke-dashoffset:34}50%{stroke-dashoffset:0}}@keyframes sc{0%{transform:translate(4px,16px)}50%{transform:translate(12px,7px)}100%{transform:translate(20px,16px)}}</style><path class="b" d="M3 18c2-10 4-12 9-12s7 2 9 12"/><circle class="s" cx="0" cy="0" r="1.75"/>`);

    case 'taylor-series':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:st 2.4s ease-in-out infinite}@keyframes st{0%,100%{opacity:.25}20%,70%{opacity:1}}</style><path class="t" d="M3 17c0-4 3-7 9-7" style="animation-delay:0s"/><path class="t" d="M3 17c1-7 4-10 9-10s6 2 9 5" style="animation-delay:.4s"/><path class="t" d="M3 17c2-10 5-13 9-13s7 3 9 10" style="animation-delay:.8s"/>`);

    case 'fourier-bars':
      return wrap(`<style>.b{fill:currentColor;transform-origin:center bottom;animation:sc ${d}s ease-in-out infinite}@keyframes sc{0%,100%{transform:scaleY(.35);opacity:.35}50%{transform:scaleY(1);opacity:1}}</style><rect class="b" x="3" y="14" width="2.5" height="7" rx=".5" style="animation-delay:0s"/><rect class="b" x="7" y="10" width="2.5" height="11" rx=".5" style="animation-delay:.15s"/><rect class="b" x="11" y="6" width="2.5" height="15" rx=".5" style="animation-delay:.3s"/><rect class="b" x="15" y="10" width="2.5" height="11" rx=".5" style="animation-delay:.45s"/><rect class="b" x="19" y="14" width="2.5" height="7" rx=".5" style="animation-delay:.6s"/>`);

    case 'hyperbola-branch':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1;opacity:.25;stroke-dasharray:2 2}.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:24;animation:rv ${d}s ease-in-out infinite}.p{fill:currentColor;animation:cl ${d}s ease-in-out infinite}@keyframes rv{0%,100%{stroke-dashoffset:24}50%{stroke-dashoffset:0}}@keyframes cl{0%{transform:translate(16px,18px)}50%{transform:translate(10px,10px)}100%{transform:translate(7px,7px)}}</style><line class="a" x1="6" y1="4" x2="20" y2="20"/><path class="b" d="M16 18c-2-4-4-8-9-11"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'parabola-bowl':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;opacity:.45}.p{fill:currentColor;animation:ds ${d}s ease-in-out infinite}@keyframes ds{0%{transform:translate(5px,9px)}50%{transform:translate(12px,15px)}100%{transform:translate(19px,9px)}}</style><path class="b" d="M4 10c2 8 4 10 8 10s6-2 8-10"/><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'projectile-arc':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.p{fill:currentColor;animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%{transform:translate(4px,17px)}25%{transform:translate(9px,9px)}50%{transform:translate(14px,7px)}75%{transform:translate(19px,11px)}100%{transform:translate(4px,17px)}}</style><line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="1.25" opacity=".25"/><path class="a" d="M4 17q5-12 10 0t6-4"/><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'cycloid-roll':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:rl ${d}s linear infinite}.p{fill:currentColor;animation:tr ${d}s linear infinite}@keyframes rl{0%{transform:translate(4px,14px) rotate(0deg)}100%{transform:translate(18px,14px) rotate(360deg)}}@keyframes tr{0%{transform:translate(4px,8px)}50%{transform:translate(14px,8px)}100%{transform:translate(4px,8px)}}</style><path class="t" d="M4 8c3-4 6-4 10 0s6 4 10 0"/><line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" stroke-width="1.25" opacity=".35"/><g class="w"><circle cx="0" cy="0" r="3"/><circle cx="0" cy="-3" r="1.25" fill="currentColor"/></g><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'catenary-sag':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.t{animation:t 2s ease-in-out infinite}.l{animation:l 2s ease-in-out infinite}.a{fill:currentColor}@keyframes t{0%,100%{opacity:1}50%{opacity:0}}@keyframes l{0%,100%{opacity:0}50%{opacity:1}}</style><circle class="a" cx="4" cy="6" r="1.5"/><circle class="a" cx="20" cy="6" r="1.5"/><path class="c t" d="M4 6c4 8 12 8 16 0"/><path class="c l" d="M4 6c4 12 12 12 16 0"/>`);

    case 'gradient-descent':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;opacity:.45}.p{fill:currentColor;animation:ds ${d}s ease-in-out infinite}@keyframes ds{0%{transform:translate(5px,9px)}35%{transform:translate(12px,15px)}55%{transform:translate(16px,11px)}100%{transform:translate(12px,15px)}}</style><path class="b" d="M4 10c2 8 4 10 8 10s6-2 8-10"/><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'wave-interference':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;stroke-linecap:round}.s{stroke-width:1.75;animation:bt ${d}s ease-in-out infinite}@keyframes bt{0%,100%{opacity:.45}50%{opacity:1}}</style><path class="w" d="M3 10c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity=".4"/><path class="w" d="M3 14c2 3 4 3 6 0s4-3 6 0 4 3 6 0" opacity=".4"/><path class="w s" d="M3 12c1.5-5 3-5 4.5 0s3 5 4.5 0 3-5 4.5 0 3 5 4.5 0"/>`);

    case 'standing-wave':
      return wrap(`<style>.n{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.s{stroke-width:1.75;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1)}}</style><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="1" opacity=".25"/><path class="n" d="M3 12h18"/><path class="s" d="M3 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0" fill="none" stroke="currentColor" stroke-linecap="round" style="transform-origin:12px 12px"/>`);

    case 'beat-frequency':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:bt ${d}s ease-in-out infinite}@keyframes bt{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="w" d="M3 12c1-4 2-4 3 0s2 4 3 0 2-4 3 0 2 4 3 0 2-4 3 0 2 4 3 0"/>`);

    case 'doppler-shift':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;stroke-linecap:round}.l{animation:lf ${d}s ease-in-out infinite}.r{animation:rt ${d}s ease-in-out infinite}.p{fill:currentColor}@keyframes lf{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.25)}}@keyframes rt{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.75)}}</style><circle class="p" cx="12" cy="12" r="2"/><path class="w l" d="M3 10c2-2 4-2 6 0"/><path class="w r" d="M15 14c2 2 4 2 6 0"/>`);

    case 'double-slit':
      return wrap(`<style>.b{fill:currentColor;opacity:.7}.f{fill:currentColor;animation:fr ${d}s ease-in-out infinite}@keyframes fr{0%,100%{opacity:.2;transform:scaleY(.5)}50%{opacity:1;transform:scaleY(1)}}</style><rect class="b" x="4" y="4" width="2" height="6" rx=".5"/><rect class="b" x="4" y="14" width="2" height="6" rx=".5"/><rect class="f" x="10" y="6" width="1.5" height="12" rx=".5" style="animation-delay:0s"/><rect class="f" x="13" y="6" width="1.5" height="12" rx=".5" style="animation-delay:.2s"/><rect class="f" x="16" y="6" width="1.5" height="12" rx=".5" style="animation-delay:.4s"/><rect class="f" x="19" y="6" width="1.5" height="12" rx=".5" style="animation-delay:.6s"/>`);

    case 'brownian-motion':
      return wrap(`<style>.p{fill:currentColor;animation:jt 2.2s steps(1,end) infinite}@keyframes jt{0%{transform:translate(12px,12px)}20%{transform:translate(${12 + (s % 3)}px,${10 + (s % 2)}px)}40%{transform:translate(${10 + (s % 2)}px,${14 + (s % 2)}px)}60%{transform:translate(${15 + (s % 2)}px,${13 + (s % 2)}px)}80%{transform:translate(${9 + (s % 2)}px,${11 + (s % 2)}px)}100%{transform:translate(12px,12px)}}</style><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'light-cone':
      return wrap(`<style>.x{stroke:currentColor;stroke-width:1;opacity:.25}.r{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;transform-origin:12px 14px;animation:ex ${d}s ease-in-out infinite}.e{fill:currentColor}@keyframes ex{0%,100%{transform:scaleY(.65);opacity:.35}50%{transform:scaleY(1);opacity:1}}</style><line class="x" x1="12" y1="3" x2="12" y2="21"/><line class="x" x1="4" y1="14" x2="20" y2="14"/><line class="r" x1="12" y1="14" x2="18" y2="5"/><line class="r" x1="12" y1="14" x2="6" y2="5" style="animation-delay:.2s"/><circle class="e" cx="12" cy="14" r="2"/>`);

    case 'pythagorean-pulse':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5}.s{fill:currentColor;animation:pu 1.8s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.25;transform:scale(.85)}50%{opacity:.9;transform:scale(1)}}</style><path class="t" d="M5 18L5 11L12 18Z"/><rect class="s" x="5" y="18" width="7" height="2" rx=".4" style="animation-delay:0s"/><rect class="s" x="3" y="11" width="2" height="7" rx=".4" style="animation-delay:.3s"/><rect class="s" x="12" y="16" width="5" height="5" rx=".4" style="animation-delay:.6s"/>`);

    case 'phasor-rotate':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.g{transform-origin:12px 12px;animation:sp ${d}s linear infinite}.l{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.d{fill:currentColor}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="r" cx="12" cy="12" r="7"/><g class="g"><line class="l" x1="12" y1="12" x2="19" y2="12"/><circle class="d" cx="19" cy="12" r="2"/></g>`);

    case 'field-divergence':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1.25;stroke-linecap:round;animation:dv ${d}s ease-in-out infinite}@keyframes dv{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}</style><circle cx="12" cy="12" r="1.5" fill="currentColor"/><line class="a" x1="12" y1="12" x2="12" y2="5" style="transform-origin:12px 12px"/><line class="a" x1="12" y1="12" x2="18" y2="12" style="animation-delay:.1s"/><line class="a" x1="12" y1="12" x2="12" y2="19" style="animation-delay:.2s"/><line class="a" x1="12" y1="12" x2="6" y2="12" style="animation-delay:.3s"/>`);

    case 'field-curl':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:20;animation:cr ${d}s linear infinite}@keyframes cr{0%{stroke-dashoffset:20}100%{stroke-dashoffset:-20}}</style><path class="a" d="M8 12c0-3 2-5 4-5s4 2 4 5-2 5-4 5"/>`);

    case 'precession-wobble':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1.5;transform-origin:12px 12px;animation:pr ${d}s ease-in-out infinite}.c{fill:currentColor}@keyframes pr{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}</style><circle class="c" cx="12" cy="12" r="2"/><line class="a" x1="12" y1="12" x2="12" y2="5"/><ellipse cx="12" cy="12" rx="7" ry="3" fill="none" stroke="currentColor" stroke-width="1" opacity=".3"/>`);

    case 'skip-glide-trajectory':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.b{fill:currentColor;animation:sg ${d + 0.8}s ease-in-out infinite}.a{fill:currentColor;opacity:.25}@keyframes sg{0%{transform:translate(3px,18px)}20%{transform:translate(8px,6px)}40%{transform:translate(13px,12px)}60%{transform:translate(17px,9px)}80%{transform:translate(20px,14px)}100%{transform:translate(3px,18px)}}</style><path class="a" d="M2 16h20" opacity=".25"/><path class="p" d="M3 18Q7 4 11 8Q14 11 16 9Q18 7 21 16"/><circle class="b" cx="0" cy="0" r="2"/>`);

    case 'hohmann-transfer':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.t{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:18;animation:tr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d}s ease-in-out infinite}@keyframes tr{0%{stroke-dashoffset:18}100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(6px,0)}50%{transform:translate(14px,-4px)}100%{transform:translate(18px,0)}}</style><circle class="o" cx="12" cy="12" r="4"/><circle class="o" cx="12" cy="12" r="8"/><path class="t" d="M6 12c4-8 8-8 12 0"/><circle class="p" cx="6" cy="12" r="1.75"/>`);

    case 'rocket-thrust':
      return wrap(`<style>.h{fill:currentColor}.b{fill:none;stroke:currentColor;stroke-width:1.25}.m{fill:currentColor;transform-origin:11px 15px;animation:ms ${d}s ease-in-out infinite}.f{fill:currentColor;transform-origin:11px 18px;animation:ex ${d}s ease-in-out infinite}.v{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;animation:dv ${d}s ease-in-out infinite}.p{fill:currentColor;opacity:.55;animation:ej ${d}s ease-in-out infinite}@keyframes ms{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.3)}}@keyframes ex{0%,100%{opacity:.3;transform:scaleY(.55)}50%{opacity:1;transform:scaleY(1)}}@keyframes dv{0%,100%{transform:scaleY(.45);opacity:.35}50%{transform:scaleY(1);opacity:1}}@keyframes ej{0%{transform:translate(9px,14px);opacity:0}35%{opacity:.75}100%{transform:translate(9px,21px);opacity:0}}</style><path class="h" d="M10 5 L14 5 L12 8 Z"/><rect class="b" x="10" y="8" width="4" height="5" rx=".5"/><rect class="m" x="10.5" y="13" width="3" height="4" rx=".4"/><rect class="f" x="9" y="18" width="1.5" height="2.5" rx=".3"/><rect class="f" x="12.5" y="18" width="1.5" height="2.5" rx=".3" style="animation-delay:.12s"/><line class="v" x1="19" y1="17" x2="19" y2="7" style="transform-origin:19px 17px"/><polyline class="v" points="17,9 19,6 21,9" fill="none"/><circle class="p" cx="0" cy="0" r=".9"/><circle class="p" cx="0" cy="0" r=".9" style="animation-delay:.5s"/>`);

    case 'gravitational-wave':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:ri ${d}s ease-in-out infinite}@keyframes ri{0%,100%{transform:scale(.9);opacity:.35}50%{transform:scale(1.08);opacity:1}}</style><ellipse class="w" cx="12" cy="12" rx="8" ry="4" style="transform-origin:12px 12px"/><ellipse class="w" cx="12" cy="12" rx="6" ry="5" style="animation-delay:.2s;transform-origin:12px 12px"/>`);

    case 'gravitational-lens':
      return wrap(`<style>.s{fill:currentColor}.b{stroke:currentColor;stroke-width:1.25;fill:none;animation:bn ${d}s ease-in-out infinite}@keyframes bn{0%,100%{opacity:.35;transform:translateY(0)}50%{opacity:1;transform:translateY(1px)}}</style><circle class="s" cx="12" cy="12" r="2.5"/><path class="b" d="M6 8c3 8 9 8 12 0"/><path class="b" d="M6 16c3-8 9-8 12 0" style="animation-delay:.2s"/>`);

    case 'accretion-disk':
      return wrap(`<style>.d{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:16;animation:sp ${d}s linear infinite}.c{fill:currentColor}@keyframes sp{0%{stroke-dashoffset:16}100%{stroke-dashoffset:-16}}</style><circle class="c" cx="12" cy="12" r="2"/><ellipse class="d" cx="12" cy="12" rx="9" ry="3"/>`);

    case 'pulsar-beam':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;transform-origin:12px 12px;animation:sw ${d}s linear infinite}.c{fill:currentColor}@keyframes sw{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="c" cx="12" cy="12" r="2"/><line class="b" x1="12" y1="12" x2="12" y2="3"/><line class="b" x1="12" y1="12" x2="12" y2="21" style="animation-delay:.1s"/>`);

    case 'planetary-ring':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;animation:tu ${d}s linear infinite}.p{fill:currentColor}@keyframes tu{0%{stroke-dashoffset:0}100%{stroke-dashoffset:24}}</style><circle class="p" cx="12" cy="12" r="3"/><ellipse class="r" cx="12" cy="12" rx="9" ry="4" stroke-dasharray="6 3"/>`);

    case 'comet-tail':
      return wrap(`<style>.h{fill:currentColor}.t{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:14;animation:ta ${d}s ease-in-out infinite}@keyframes ta{0%{stroke-dashoffset:14;opacity:.35}100%{stroke-dashoffset:0;opacity:1}}</style><circle class="h" cx="8" cy="10" r="2.5"/><path class="t" d="M10 10c4 1 8 3 14 8"/>`);

    case 'tidal-bulge':
      return wrap(`<style>.p{fill:currentColor}.b{fill:currentColor;animation:td ${d}s ease-in-out infinite}@keyframes td{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.25)}}</style><ellipse class="p" cx="12" cy="12" rx="4" ry="4"/><ellipse class="b" cx="7" cy="12" rx="2" ry="3"/><ellipse class="b" cx="17" cy="12" rx="2" ry="3"/>`);

    case 'aurora-curtain':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:au ${d}s ease-in-out infinite}@keyframes au{0%,100%{opacity:.3;transform:translateY(2px)}50%{opacity:1;transform:translateY(-2px)}}</style><path class="a" d="M4 16c2-8 4-10 6-4s4 8 6 0 4-6 6-2"/>`);

    case 'hubble-expansion':
      return wrap(`<style>.d{fill:currentColor;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{transform:translate(0,0) scale(1);opacity:.35}50%{transform:translate(${1 + (s % 2)}px,-${1 + (s % 2)}px) scale(1.2);opacity:1}}</style><circle class="d" cx="12" cy="12" r="1.5"/><circle class="d" cx="8" cy="14" r="1" style="animation-delay:.2s"/><circle class="d" cx="16" cy="10" r="1" style="animation-delay:.4s"/><circle class="d" cx="10" cy="8" r="1" style="animation-delay:.6s"/>`);

    case 'redshift-spectrum':
      return wrap(`<style>.b{fill:currentColor;animation:sh ${d}s ease-in-out infinite}@keyframes sh{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}</style><rect class="b" x="4" y="10" width="2" height="4" rx=".5"/><rect class="b" x="8" y="9" width="2" height="6" rx=".5" style="animation-delay:.1s"/><rect class="b" x="12" y="8" width="2" height="8" rx=".5" style="animation-delay:.2s"/><rect class="b" x="16" y="7" width="2" height="10" rx=".5" style="animation-delay:.3s"/>`);

    case 'schrodinger-packet':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;animation:dr ${d}s ease-in-out infinite}@keyframes dr{0%,100%{transform:translateX(-2px);opacity:.45}50%{transform:translateX(2px);opacity:1}}</style><path class="w" d="M4 12 C6 9 8 9 10 12 S14 15 18 12 S20 9 20 12"/>`);

    case 'spin-precession':
      return wrap(`<style>.s{fill:currentColor;animation:sp ${d}s linear infinite;transform-origin:12px 12px}.a{stroke:currentColor;stroke-width:1.25;animation:pr ${d * 2}s ease-in-out infinite;transform-origin:12px 12px}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes pr{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(15deg)}}</style><line class="a" x1="12" y1="12" x2="12" y2="5"/><circle class="s" cx="12" cy="5" r="1.5"/>`);

    case 'energy-levels':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.5}.e{fill:currentColor;animation:ju ${d}s ease-in-out infinite}@keyframes ju{0%,100%{transform:translateY(6px)}50%{transform:translateY(-4px)}}</style><line class="l" x1="5" y1="8" x2="19" y2="8"/><line class="l" x1="5" y1="12" x2="19" y2="12"/><line class="l" x1="5" y1="16" x2="19" y2="16"/><circle class="e" cx="12" cy="16" r="1.75"/>`);

    case 'tunnel-barrier':
      return wrap(`<style>.b{fill:currentColor;opacity:.5}.p{fill:currentColor;animation:tn ${d}s ease-in-out infinite}@keyframes tn{0%,100%{transform:translate(4px,12px);opacity:.35}50%{transform:translate(20px,12px);opacity:1}}</style><rect class="b" x="10" y="6" width="4" height="12" rx=".5"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'maxwell-rotate':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.25;transform-origin:12px 12px;animation:rt ${d}s linear infinite}.m{stroke:currentColor;stroke-width:1.25;animation:rt ${d}s linear infinite reverse}@keyframes rt{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity=".3"/><line class="e" x1="6" y1="12" x2="18" y2="12"/><line class="m" x1="12" y1="6" x2="12" y2="18"/>`);

    case 'faraday-loop':
      return wrap(`<style>.l{fill:none;stroke:currentColor;stroke-width:1.5}.f{stroke-dasharray:20;animation:lp ${d}s linear infinite}@keyframes lp{0%{stroke-dashoffset:20}100%{stroke-dashoffset:-20}}</style><rect class="l" x="6" y="7" width="12" height="10" rx="1"/><path class="l f" d="M12 7v-3M12 17v3"/>`);

    case 'rlc-oscillation':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:os ${d}s ease-in-out infinite}@keyframes os{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}</style><path class="w" d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" style="transform-origin:12px 12px"/>`);

    case 'bernoulli-flow':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.n{animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.6)}}</style><path class="p n" d="M3 8h18M3 16h18"/><path class="p" d="M8 8v8M16 8v8" opacity=".35"/>`);

    case 'vortex-flow':
      return wrap(`<style>.v{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:18;animation:sp ${d}s linear infinite}@keyframes sp{0%{stroke-dashoffset:18}100%{stroke-dashoffset:-18}}</style><path class="v" d="M12 12c-4-2-6-6-2-8s8 0 6 4-8 4-4 4"/>`);

    case 'shock-compression':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.5;animation:cp ${d}s ease-in-out infinite}@keyframes cp{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><line class="l" x1="4" y1="8" x2="4" y2="16"/><line class="l" x1="8" y1="9" x2="8" y2="15" style="animation-delay:.1s"/><line class="l" x1="12" y1="10" x2="12" y2="14" style="animation-delay:.2s"/><line class="l" x1="16" y1="11" x2="16" y2="13" style="animation-delay:.3s"/>`);

    case 'heat-diffusion':
      return wrap(`<style>.c{fill:currentColor;animation:df ${d}s ease-in-out infinite}@keyframes df{0%,100%{opacity:.25;r:1.5}50%{opacity:1;r:3}}</style><circle class="c" cx="12" cy="12" r="2"/><circle class="c" cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1" style="animation-delay:.2s"/>`);

    case 'carnot-cycle':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:30;animation:cy ${d}s linear infinite}@keyframes cy{0%{stroke-dashoffset:30}100%{stroke-dashoffset:0}}</style><rect class="c" x="6" y="7" width="12" height="10" rx="1"/>`);

    case 'entropy-spread':
      return wrap(`<style>.p{fill:currentColor;animation:sp ${d}s ease-in-out infinite}@keyframes sp{0%,100%{transform:translate(0,0)}50%{transform:translate(${(s%3)-1}px,${(s%2)}px)}}</style><circle class="p" cx="10" cy="10" r="1.2"/><circle class="p" cx="14" cy="10" r="1.2" style="animation-delay:.1s"/><circle class="p" cx="12" cy="14" r="1.2" style="animation-delay:.2s"/><circle class="p" cx="8" cy="14" r="1.2" style="animation-delay:.3s"/><circle class="p" cx="16" cy="14" r="1.2" style="animation-delay:.4s"/>`);

    case 'monte-carlo':
      return wrap(`<style>.p{fill:currentColor;animation:mc ${d}s steps(1,end) infinite}@keyframes mc{0%{transform:translate(6px,14px)}25%{transform:translate(14px,10px)}50%{transform:translate(10px,16px)}75%{transform:translate(16px,14px)}100%{transform:translate(6px,14px)}}</style><rect x="5" y="7" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.25" opacity=".35"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'markov-chain':
      return wrap(`<style>.n{fill:currentColor}.h{stroke:currentColor;stroke-width:1.25;stroke-dasharray:8;animation:fl ${d}s linear infinite}@keyframes fl{0%{stroke-dashoffset:8}100%{stroke-dashoffset:-8}}</style><circle class="n" cx="7" cy="12" r="2"/><circle class="n" cx="17" cy="12" r="2"/><path class="h" d="M9 12h6" marker-end="none"/>`);

    case 'regression-line':
      return wrap(`<style>.d{fill:currentColor;opacity:.5}.l{stroke:currentColor;stroke-width:1.5;stroke-dasharray:16;animation:dr ${d}s ease-in-out infinite}@keyframes dr{0%{stroke-dashoffset:16}100%{stroke-dashoffset:0}}</style><circle class="d" cx="6" cy="16" r="1.2"/><circle class="d" cx="10" cy="12" r="1.2"/><circle class="d" cx="14" cy="10" r="1.2"/><circle class="d" cx="18" cy="7" r="1.2"/><line class="l" x1="5" y1="17" x2="19" y2="7"/>`);

    case 'bifurcation-fork':
      return wrap(`<style>.t{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.p{animation:fo ${d}s ease-in-out infinite}@keyframes fo{0%,100%{opacity:.35}50%{opacity:1}}</style><line class="t" x1="12" y1="18" x2="12" y2="12"/><line class="t p" x1="12" y1="12" x2="7" y2="6"/><line class="t p" x1="12" y1="12" x2="17" y2="6" style="animation-delay:.2s"/>`);

    case 'mandelbrot-orbit':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:or ${d}s linear infinite}@keyframes or{0%{transform:translate(8px,12px)}25%{transform:translate(14px,10px)}50%{transform:translate(15px,14px)}75%{transform:translate(10px,16px)}100%{transform:translate(8px,12px)}}</style><rect class="o" x="6" y="7" width="12" height="10" rx="1"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'koch-snowflake':
      return wrap(`<style>.k{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:24;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{stroke-dashoffset:24}50%{stroke-dashoffset:0}}</style><path class="k" d="M6 16 L12 7 L18 16 Z"/>`);

    case 'torus-orbit':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:tr ${d}s linear infinite;transform-origin:12px 12px}@keyframes tr{0%{transform:rotate(0deg) translate(7px,0)}100%{transform:rotate(360deg) translate(7px,0)}}</style><ellipse class="o" cx="12" cy="12" rx="8" ry="5"/><circle class="p" cx="19" cy="12" r="1.75"/>`);

    case 'mobius-travel':
      return wrap(`<style>.m{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:20;animation:mv ${d}s linear infinite}.p{fill:currentColor;animation:tr ${d}s linear infinite}@keyframes mv{0%{stroke-dashoffset:20}100%{stroke-dashoffset:-20}}@keyframes tr{0%{transform:translate(5px,12px)}100%{transform:translate(19px,12px)}}</style><path class="m" d="M5 12c4-6 10-6 14 0s-4 6-8 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'brachistochrone':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:26;animation:dr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:sl ${d}s ease-in-out infinite}@keyframes dr{0%{stroke-dashoffset:26}100%{stroke-dashoffset:0}}@keyframes sl{0%{transform:translate(4px,7px)}100%{transform:translate(18px,17px)}}</style><path class="c" d="M4 7c5 12 11 12 16 10"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'isochrone-curve':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.45}.p{fill:currentColor;animation:sw ${d}s ease-in-out infinite}@keyframes sw{0%,100%{transform:translate(6px,10px)}50%{transform:translate(18px,10px)}}</style><path class="c" d="M6 10c4 8 8 8 12 8s4 0 6-8"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'matrix-pulse':
      return wrap(`<style>.c{fill:currentColor;animation:pl ${d}s ease-in-out infinite}@keyframes pl{0%,100%{opacity:.25}50%{opacity:1}}</style><rect class="c" x="6" y="6" width="3" height="3" rx=".4"/><rect class="c" x="11" y="6" width="3" height="3" rx=".4" style="animation-delay:.15s"/><rect class="c" x="6" y="11" width="3" height="3" rx=".4" style="animation-delay:.3s"/><rect class="c" x="11" y="11" width="3" height="3" rx=".4" style="animation-delay:.45s"/>`);

    case 'eigen-resonance':
      return wrap(`<style>.b{fill:currentColor;transform-origin:center bottom;animation:rs ${d}s ease-in-out infinite}@keyframes rs{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}</style><rect class="b" x="8" y="10" width="2" height="8" rx=".5"/><rect class="b" x="14" y="8" width="2" height="10" rx=".5" style="animation-delay:.25s"/>`);

    case 'voronoi-pulse':
      return wrap(`<style>.c{fill:currentColor;opacity:.35;animation:vp ${d}s ease-in-out infinite}@keyframes vp{0%,100%{opacity:.2}50%{opacity:.8}}</style><polygon class="c" points="12,6 16,10 14,16 10,16 8,10"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`);

    case 'action-integral':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.75;stroke-dasharray:22;animation:ac ${d}s ease-in-out infinite}@keyframes ac{0%{stroke-dashoffset:22}100%{stroke-dashoffset:0}}</style><path class="p" d="M4 16c4-10 8-12 12-8s6 8 4 10"/>`);

    case 'dirac-impulse':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.25;opacity:.35}.i{stroke:currentColor;stroke-width:2;animation:im ${d}s ease-in-out infinite}@keyframes im{0%,100%{transform:scaleY(.5);opacity:.35}50%{transform:scaleY(1);opacity:1}}</style><line class="s" x1="5" y1="18" x2="19" y2="18"/><line class="i" x1="12" y1="18" x2="12" y2="6" style="transform-origin:12px 18px"/>`);

    case 'laplace-decay':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;animation:dc ${d}s ease-in-out infinite}@keyframes dc{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="c" d="M3 6c3 10 6 12 10 12s7-2 11-12"/>`);

    case 'stokes-circulation':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:24;animation:ci ${d}s linear infinite}@keyframes ci{0%{stroke-dashoffset:24}100%{stroke-dashoffset:-24}}</style><path class="c" d="M8 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5"/>`);

    case 'spiral-golden':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:42;animation:un ${d}s ease-in-out infinite}@keyframes un{0%{stroke-dashoffset:42}50%{stroke-dashoffset:0}100%{stroke-dashoffset:-42}}</style><path class="s" d="M12 12c0-3 3-3 3 0s-5 5-8 2 1-9 8-6"/>`);

    case 'spiral-fibonacci':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1;opacity:.25}.a{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:30;animation:un 2.2s ease-in-out infinite}@keyframes un{0%{stroke-dashoffset:30}50%{stroke-dashoffset:0}100%{stroke-dashoffset:-30}}</style><rect class="b" x="11" y="11" width="8" height="8"/><path class="a" d="M19 11a8 8 0 0 0-8-8 5 5 0 0 0-5 5 4 4 0 0 0 4 4"/>`);

    case 'epicycloid':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:ep ${d}s linear infinite;transform-origin:12px 12px}@keyframes ep{0%{transform:rotate(0deg) translate(6px)}100%{transform:rotate(360deg) translate(6px)}}</style><circle class="o" cx="12" cy="12" r="7"/><circle class="p" cx="18" cy="12" r="1.75"/>`);

    case 'cardioid-loop':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:28;animation:lp ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d}s linear infinite}@keyframes lp{0%,100%{stroke-dashoffset:28}50%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(16px,12px)}100%{transform:translate(8px,12px)}}</style><path class="c" d="M16 12c0-4-3-6-4-6s-4 2-4 6 2 6 4 6 4-2 4-6z"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'lemniscate':
      return wrap(`<style>.l{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:26;animation:in ${d}s ease-in-out infinite}.p{fill:currentColor;animation:or ${d}s linear infinite}@keyframes in{0%,100%{stroke-dashoffset:26}50%{stroke-dashoffset:0}}@keyframes or{0%{transform:translate(7px,12px)}50%{transform:translate(17px,12px)}100%{transform:translate(7px,12px)}}</style><path class="l" d="M7 12c0-4 5-6 5 0s5 6 5 0 5-6 5 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'astroid-roll':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:30;animation:ro ${d}s linear infinite}@keyframes ro{0%{stroke-dashoffset:30}100%{stroke-dashoffset:-30}}</style><path class="a" d="M12 4c4 0 8 4 8 8s-4 8-8 8-8-4-8-8 4-8 8-8"/>`);

    case 'sigma-sum':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.t{fill:currentColor;animation:bl 1.5s ease-in-out infinite}@keyframes bl{0%,100%{opacity:.2}40%{opacity:1}}</style><path class="s" d="M6 6h10L8 12l8 6H6"/><circle class="t" cx="17" cy="8" r="1.25" style="animation-delay:0s"/><circle class="t" cx="19" cy="12" r="1.25" style="animation-delay:.3s"/><circle class="t" cx="17" cy="16" r="1.25" style="animation-delay:.6s"/>`);

    case 'integral-bounds':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.b{fill:currentColor;animation:pu 1.2s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.25}50%{opacity:1}}</style><rect class="b" x="15" y="4" width="4" height="1.5" rx=".5" style="animation-delay:0s"/><rect class="b" x="15" y="18.5" width="4" height="1.5" rx=".5" style="animation-delay:.6s"/><path class="s" d="M6 4c-1.5 2-2 5-2 8s.5 6 2 8"/><path class="s" d="M14 6v12" opacity=".45"/>`);

    case 'derivative-slope':
      return wrap(`<style>.t{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:fl 1s ease-in-out infinite}.r{fill:none;stroke:currentColor;stroke-width:1.25;stroke-dasharray:18;animation:sp 1.6s linear infinite;transform-origin:12px 12px}@keyframes fl{0%,100%{opacity:.35}50%{opacity:1}}@keyframes sp{0%{stroke-dashoffset:18;transform:rotate(0deg)}100%{stroke-dashoffset:-18;transform:rotate(360deg)}}</style><circle class="r" cx="12" cy="12" r="7"/><line class="t" x1="6" y1="15" x2="9" y2="9"/><line class="t" x1="9" y1="15" x2="12" y2="9"/><line class="t" x1="13" y1="8" x2="17" y2="16"/>`);

    case 'wave-packet':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;animation:pk ${d}s ease-in-out infinite}@keyframes pk{0%,100%{transform:translateX(-3px);opacity:.45}50%{transform:translateX(3px);opacity:1}}</style><path class="w" d="M4 12 C6 8 8 8 10 12 S14 16 18 12 S20 8 20 12"/>`);

    case 'magnetic-reconnection':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.5;animation:rc ${d}s ease-in-out infinite}@keyframes rc{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><path class="l" d="M4 8c4 4 4 8 8 8" fill="none" stroke="currentColor" stroke-width="1.5"/><path class="l" d="M20 8c-4 4-4 8-8 8" fill="none" stroke="currentColor" stroke-width="1.5" style="animation-delay:.2s"/>`);

    case 'solar-flare':
      return wrap(`<style>.c{fill:currentColor}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%,100%{opacity:.25;transform:scaleY(.6)}50%{opacity:1;transform:scaleY(1)}}</style><circle class="c" cx="12" cy="14" r="3"/><line class="f" x1="12" y1="11" x2="12" y2="4"/><line class="f" x1="12" y1="11" x2="16" y2="6" style="animation-delay:.15s"/><line class="f" x1="12" y1="11" x2="8" y2="6" style="animation-delay:.3s"/>`);

    case 'neutron-star':
      return wrap(`<style>.c{fill:currentColor}.r{fill:none;stroke:currentColor;stroke-width:1.25;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.3;transform:scale(.9)}50%{opacity:1;transform:scale(1.05)}}</style><circle class="c" cx="12" cy="12" r="2"/><circle class="r" cx="12" cy="12" r="5" style="transform-origin:12px 12px"/><circle class="r" cx="12" cy="12" r="8" style="animation-delay:.2s;transform-origin:12px 12px"/>`);

    case 'supernova-shell':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.5;transform-origin:12px 12px;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{transform:scale(.45);opacity:1}50%{transform:scale(1.2);opacity:.25}}</style><circle class="s" cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`);

    case 'lagrange-point':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.b{fill:currentColor}.p{fill:currentColor;animation:hb ${d}s ease-in-out infinite}@keyframes hb{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><circle class="b" cx="7" cy="12" r="2"/><circle class="b" cx="17" cy="12" r="1.5"/><circle class="o" cx="12" cy="12" r="4"/><circle class="p" cx="12" cy="8" r="1.25"/>`);

    case 'mercury-precession':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:pr ${d}s linear infinite}@keyframes pr{0%{transform:rotate(0deg) translate(6px,0) rotate(0deg)}100%{transform:rotate(360deg) translate(6px,0) rotate(-360deg)}}</style><ellipse class="o" cx="12" cy="12" rx="7" ry="5"/><circle class="p" cx="18" cy="12" r="1.5" style="transform-origin:12px 12px"/>`);

    case 'roche-limit':
      return wrap(`<style>.p{fill:currentColor}.d{fill:currentColor;animation:br ${d}s ease-in-out infinite}@keyframes br{0%,100%{transform:translate(0,0)}50%{transform:translate(3px,-2px)}}</style><circle class="p" cx="8" cy="12" r="3"/><circle class="d" cx="16" cy="10" r="1.2"/><circle class="d" cx="17" cy="14" r="1" style="animation-delay:.2s"/><circle class="d" cx="15" cy="16" r=".8" style="animation-delay:.4s"/>`);

    case 'lorenz-butterfly':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:bf ${d + 0.6}s ease-in-out infinite}@keyframes bf{0%{transform:translate(6px,12px)}20%{transform:translate(10px,8px)}40%{transform:translate(14px,14px)}60%{transform:translate(17px,10px)}80%{transform:translate(11px,16px)}100%{transform:translate(6px,12px)}}</style><path class="t" d="M6 12c2-3 4-5 6-2s3 5 5 1 3-6 5-3"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'flyby-gravity-assist':
      return wrap(`<style>.p{fill:currentColor}.t{fill:currentColor;animation:fb ${d}s ease-in-out infinite}.h{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}@keyframes fb{0%{transform:translate(3px,16px)}45%{transform:translate(11px,8px)}100%{transform:translate(21px,14px)}}</style><circle class="t" cx="12" cy="12" r="2.5"/><path class="h" d="M3 16c4-8 8-10 14-6"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'ideal-gas-isotherm':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.p{fill:currentColor;animation:mv ${d}s ease-in-out infinite}@keyframes mv{0%{transform:translate(18px,8px)}50%{transform:translate(10px,14px)}100%{transform:translate(6px,18px)}}</style><path class="c" d="M5 18c2-8 6-12 14-10"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'radiation-sail':
      return wrap(`<style>.r{fill:currentColor;animation:ps ${d}s ease-in-out infinite}.p{stroke:currentColor;stroke-width:1.25;animation:ph ${d}s ease-in-out infinite}@keyframes ps{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}@keyframes ph{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="p" x1="4" y1="8" x2="10" y2="12"/><line class="p" x1="4" y1="16" x2="10" y2="12" style="animation-delay:.2s"/><polygon class="r" points="10,12 18,8 18,16"/>`);

    case 'asteroid-belt':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.a{fill:currentColor;animation:ab ${d}s linear infinite}@keyframes ab{0%{transform:rotate(0deg) translate(7px) rotate(0deg)}100%{transform:rotate(360deg) translate(7px) rotate(-360deg)}}</style><ellipse class="o" cx="12" cy="12" rx="9" ry="3"/><circle cx="8" cy="12" r="1" fill="currentColor" opacity=".6"/><circle cx="15" cy="11" r=".8" fill="currentColor" opacity=".6"/><circle class="a" cx="12" cy="12" r="1.25" style="transform-origin:12px 12px"/>`);

    case 'particle-cascade':
      return wrap(`<style>.p{fill:currentColor;animation:cs ${d}s ease-in-out infinite}@keyframes cs{0%{transform:translate(12px,4px);opacity:1}50%{transform:translate(10px,12px);opacity:.8}100%{transform:translate(8px,18px);opacity:.35}}</style><line x1="12" y1="3" x2="12" y2="8" stroke="currentColor" stroke-width="1.25"/><circle class="p" cx="0" cy="0" r="1.5"/><circle cx="14" cy="14" r="1" fill="currentColor" opacity=".5"/><circle cx="6" cy="16" r=".8" fill="currentColor" opacity=".4"/>`);

    case 'radial-particle-wind':
      return wrap(`<style>.s{fill:currentColor}.r{stroke:currentColor;stroke-width:1.25;stroke-linecap:round;animation:wn ${d}s ease-in-out infinite}@keyframes wn{0%{opacity:.25;transform:translateX(0)}100%{opacity:1;transform:translateX(4px)}}</style><circle class="s" cx="5" cy="12" r="2"/><line class="r" x1="8" y1="10" x2="20" y2="8" style="animation-delay:0s"/><line class="r" x1="8" y1="12" x2="20" y2="12" style="animation-delay:.15s"/><line class="r" x1="8" y1="14" x2="20" y2="16" style="animation-delay:.3s"/>`);

    case 'cmb-ripple':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:rp ${d}s ease-in-out infinite}@keyframes rp{0%,100%{transform:scale(1);opacity:.35}50%{transform:scale(1.05);opacity:1}}</style><path class="w" d="M4 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" style="transform-origin:12px 12px"/><path class="w" d="M4 14c2 2 4 2 6 0s4-2 6 0 4 2 6 0" style="animation-delay:.2s;transform-origin:12px 12px"/>`);

    case 'elastic-collision':
      return wrap(`<style>.a,.b{fill:currentColor}.a{animation:cl ${d}s ease-in-out infinite}.b{animation:cr ${d}s ease-in-out infinite}@keyframes cl{0%{transform:translate(5px,14px)}40%{transform:translate(11px,14px)}60%{transform:translate(13px,14px)}100%{transform:translate(18px,14px)}}@keyframes cr{0%{transform:translate(18px,14px)}40%{transform:translate(12px,14px)}60%{transform:translate(10px,14px)}100%{transform:translate(5px,14px)}}</style><circle class="a" cx="0" cy="0" r="2"/><circle class="b" cx="0" cy="0" r="1.75"/>`);

    case 'snell-refraction':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1;opacity:.35}.r{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:rf ${d}s ease-in-out infinite}@keyframes rf{0%,100%{transform:rotate(0deg)}50%{transform:rotate(14deg)}}</style><line class="b" x1="3" y1="12" x2="21" y2="12"/><line x1="8" y1="4" x2="12" y2="12" stroke="currentColor" stroke-width="1.5"/><line class="r" x1="12" y1="12" x2="17" y2="18" style="transform-origin:12px 12px"/>`);

    case 'total-internal-reflection':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1;opacity:.35}.r{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:rt ${d}s ease-in-out infinite}@keyframes rt{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-18deg)}}</style><line class="b" x1="3" y1="14" x2="21" y2="14"/><line x1="10" y1="4" x2="12" y2="14" stroke="currentColor" stroke-width="1.5"/><line class="r" x1="12" y1="14" x2="8" y2="4" style="transform-origin:12px 14px"/>`);

    case 'tokamak-fusion':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5}.p{fill:currentColor;animation:pl ${d}s linear infinite;transform-origin:12px 12px}@keyframes pl{0%{transform:rotate(0deg) translate(5px)}100%{transform:rotate(360deg) translate(5px)}}</style><ellipse class="t" cx="12" cy="12" rx="8" ry="4"/><circle class="p" cx="17" cy="12" r="1.75"/>`);

    case 'cantor-prune':
      return wrap(`<style>.s{fill:currentColor;animation:pr 2s ease-in-out infinite}@keyframes pr{0%,100%{opacity:1;transform:scaleX(1)}50%{opacity:.25;transform:scaleX(.55)}}</style><rect class="s" x="4" y="11" width="16" height="2" rx=".5"/><rect class="s" x="4" y="11" width="5" height="2" rx=".5" style="animation-delay:.2s"/><rect class="s" x="15" y="11" width="5" height="2" rx=".5" style="animation-delay:.4s"/>`);

    case 'fermi-contour':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:24;animation:dr ${d}s ease-in-out infinite}.p{fill:currentColor}@keyframes dr{0%,100%{stroke-dashoffset:24}50%{stroke-dashoffset:0}}</style><path class="c" d="M6 14c2-6 4-8 8-8s6 2 8 8"/><circle class="p" cx="12" cy="14" r="1.5"/>`);

    case 'virial-exchange':
      return wrap(`<style>.k,.p{fill:currentColor;animation:sw ${d}s ease-in-out infinite}.p{animation-direction:reverse}@keyframes sw{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}</style><circle class="k" cx="8" cy="14" r="2" style="animation-delay:0s"/><circle class="p" cx="16" cy="14" r="2"/>`);

    case 'hall-plateau':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.5}.p{fill:currentColor;animation:st ${d}s ease-in-out infinite}@keyframes st{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><line class="s" x1="5" y1="16" x2="19" y2="16"/><line class="s" x1="5" y1="12" x2="19" y2="12"/><line class="s" x1="5" y1="8" x2="19" y2="8"/><rect class="p" x="7" y="10" width="10" height="2" rx=".4"/>`);

    case 'dipole-antenna':
      return wrap(`<style>.p{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:os ${d}s ease-in-out infinite}.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:rd ${d}s ease-in-out infinite}@keyframes os{0%,100%{transform:scaleY(.7)}50%{transform:scaleY(1)}}@keyframes rd{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="p" x1="12" y1="6" x2="12" y2="18" style="transform-origin:12px 12px"/><circle class="w" cx="12" cy="12" r="5"/>`);

    case 'rayleigh-scatter':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.25;animation:sc ${d}s ease-in-out infinite}.p{fill:currentColor}@keyframes sc{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="p" cx="8" cy="14" r="2"/><line class="s" x1="10" y1="12" x2="18" y2="6"/><line class="s" x1="10" y1="14" x2="19" y2="14" style="animation-delay:.15s"/><line class="s" x1="10" y1="16" x2="18" y2="18" style="animation-delay:.3s"/>`);

    case 'oort-cloud-shell':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.c{fill:currentColor;animation:tw ${d}s ease-in-out infinite}@keyframes tw{0%,100%{opacity:.3}50%{opacity:1}}</style><circle class="o" cx="12" cy="12" r="8"/><circle class="c" cx="9" cy="9" r=".8"/><circle class="c" cx="15" cy="10" r=".7" style="animation-delay:.2s"/><circle class="c" cx="13" cy="15" r=".9" style="animation-delay:.4s"/><circle class="c" cx="8" cy="14" r=".6" style="animation-delay:.6s"/>`);

    case 'volume-fill':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.25}.f{fill:currentColor;animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%{opacity:.15;transform:scaleY(.2)}100%{opacity:.7;transform:scaleY(1)}}</style><rect class="b" x="7" y="7" width="10" height="10" rx="1"/><rect class="f" x="8" y="14" width="8" height="2" rx=".4" style="transform-origin:12px 16px"/>`);

    case 'phase-space-flow':
      return wrap(`<style>.f{fill:none;stroke:currentColor;stroke-width:1.25;stroke-dasharray:16;animation:fl ${d}s linear infinite}@keyframes fl{0%{stroke-dashoffset:16}100%{stroke-dashoffset:-16}}</style><path class="f" d="M4 16c3-6 6-8 10-6s5 4 6 8"/><path class="f" d="M5 14c2-3 5-4 8-2" style="animation-delay:.2s"/>`);

    case 'spectral-split':
      return wrap(`<style>.l{fill:currentColor;animation:sp ${d}s ease-in-out infinite}@keyframes sp{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><rect class="l" x="10" y="6" width="1.5" height="12" rx=".4"/><rect class="l" x="12.5" y="6" width="1.5" height="12" rx=".4" style="animation-delay:.15s"/><rect class="l" x="15" y="6" width="1.5" height="12" rx=".4" style="animation-delay:.3s"/>`);

    case 'entangled-pair':
      return wrap(`<style>.a,.b{fill:currentColor;animation:en ${d}s ease-in-out infinite}@keyframes en{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><circle class="a" cx="8" cy="12" r="2"/><circle class="b" cx="16" cy="12" r="2" style="animation:en ${d}s ease-in-out infinite reverse"/><line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" stroke-width="1.25" stroke-dasharray="2 2"/>`);

    case 'double-pendulum':
      return wrap(`<style>.p{fill:currentColor}.a1{transform-origin:12px 5px;animation:s1 ${d}s ease-in-out infinite}.a2{transform-origin:12px 11px;animation:s2 ${d * 0.8}s ease-in-out infinite}.ar{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.bb{fill:currentColor}@keyframes s1{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(25deg)}}@keyframes s2{0%,100%{transform:rotate(30deg)}50%{transform:rotate(-35deg)}}</style><circle class="p" cx="12" cy="5" r="1.25"/><g class="a1"><line class="ar" x1="12" y1="5" x2="12" y2="11"/><g class="a2"><line class="ar" x1="12" y1="11" x2="12" y2="17"/><circle class="bb" cx="12" cy="17" r="2"/></g></g>`);

    case 'sierpinski-fold':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5;animation:fd 2s ease-in-out infinite}@keyframes fd{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="t" d="M6 16 L12 7 L18 16 Z"/><path class="t" d="M9 16 L12 11 L15 16" style="animation-delay:.3s"/>`);

    case 'reentry-blunt':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.25;opacity:.25}.a{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:32;animation:tr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d + 0.4}s ease-in-out infinite}.h{fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;opacity:.25;animation:hm ${d + 0.4}s ease-in-out infinite}@keyframes tr{0%{stroke-dashoffset:32}100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(4px,6px)}100%{transform:translate(19px,17px)}}@keyframes hm{0%,100%{opacity:.15}50%{opacity:.55}}</style><line class="g" x1="3" y1="18" x2="21" y2="18"/><path class="h" d="M4 6 C10 6 13 11 19 17"/><path class="a" d="M4 6 C10 6 13 11 19 17"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'twin-clocks':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.25}.h{stroke:currentColor;stroke-width:1.5;animation:tk ${d}s ease-in-out infinite}@keyframes tk{0%,100%{transform:rotate(0deg)}50%{transform:rotate(24deg)}}</style><circle class="c" cx="8" cy="12" r="3"/><circle class="c" cx="16" cy="12" r="3"/><line class="h" x1="8" y1="12" x2="8" y2="9" style="transform-origin:8px 12px"/><line class="h" x1="16" y1="12" x2="16" y2="9" style="transform-origin:16px 12px;animation-duration:${d * 1.4}s"/>`);

    case 'black-hole-shadow':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.5;animation:pu ${d}s ease-in-out infinite}.d{fill:currentColor}@keyframes pu{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}</style><circle class="d" cx="12" cy="12" r="4"/><circle class="r" cx="12" cy="12" r="7" style="transform-origin:12px 12px"/>`);

    case 'poisson-arrivals':
      return wrap(`<style>.e{fill:currentColor;animation:ar ${d}s ease-in-out infinite}@keyframes ar{0%,80%{opacity:0;transform:scale(.5)}90%,100%{opacity:1;transform:scale(1)}}</style><line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" stroke-width="1.25" opacity=".35"/><circle class="e" cx="8" cy="16" r="1.25" style="animation-delay:0s"/><circle class="e" cx="13" cy="16" r="1.25" style="animation-delay:.5s"/><circle class="e" cx="17" cy="16" r="1.25" style="animation-delay:1s"/>`);

    case 'halo-envelope':
      return wrap(`<style>.h{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.45;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{transform:scale(.95)}50%{transform:scale(1.05)}}</style><circle cx="12" cy="12" r="2" fill="currentColor"/><circle class="h" cx="12" cy="12" r="9" style="transform-origin:12px 12px"/>`);

    case 'harmonic-series':
      return wrap(`<style>.b{fill:currentColor;transform-origin:center bottom;animation:ad 2s ease-in-out infinite}.s{stroke:currentColor;stroke-width:1.25;stroke-dasharray:4 3;opacity:.4}.t{fill:currentColor;animation:up 2s ease-in-out infinite}@keyframes ad{0%,100%{opacity:.35}50%{opacity:1}}@keyframes up{0%{transform:translate(18px,16px)}100%{transform:translate(18px,10px)}}</style><line class="s" x1="4" y1="12" x2="20" y2="12"/><rect class="b" x="5" y="10" width="2" height="8" rx=".4" style="animation-delay:0s"/><rect class="b" x="8" y="12" width="2" height="6" rx=".4" style="animation-delay:.25s"/><rect class="b" x="11" y="13" width="2" height="5" rx=".4" style="animation-delay:.5s"/><rect class="b" x="14" y="14" width="2" height="4" rx=".4" style="animation-delay:.75s"/><circle class="t" cx="0" cy="0" r="1.5"/>`);

    case 'power-series-radius':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.t{fill:currentColor;animation:cv 2s ease-in-out infinite}@keyframes cv{0%{transform:translate(16px,12px);opacity:.35}100%{transform:translate(10px,12px);opacity:1}}</style><circle class="r" cx="12" cy="12" r="7"/><circle class="r" cx="12" cy="12" r="4"/><circle class="t" cx="0" cy="0" r="1.5"/>`);

    case 'series-converge-limit':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.25;stroke-dasharray:3 3;opacity:.45}.p{fill:currentColor;animation:ap 2s ease-in-out infinite}@keyframes ap{0%{transform:translate(5px,16px)}70%{transform:translate(14px,11px)}100%{transform:translate(16px,10px)}}</style><line class="l" x1="4" y1="10" x2="20" y2="10"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'fourier-sawtooth':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;animation:sw ${d}s ease-in-out infinite}@keyframes sw{0%,100%{opacity:.45}50%{opacity:1}}</style><path class="w" d="M3 14 L7 8 L11 14 L15 8 L19 14 L21 14"/>`);

    case 'fourier-spectrum':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;stroke-linecap:round;opacity:.45}.b{fill:currentColor;transform-origin:center bottom;animation:sc ${d}s ease-in-out infinite}@keyframes sc{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}</style><path class="w" d="M3 14c1-4 2-4 3 0s2 4 3 0"/><rect class="b" x="14" y="12" width="2" height="6" rx=".4" style="animation-delay:0s"/><rect class="b" x="17" y="9" width="2" height="9" rx=".4" style="animation-delay:.2s"/><rect class="b" x="20" y="13" width="2" height="5" rx=".4" style="animation-delay:.4s"/>`);

    case 'chi-square-skew':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:sk ${d}s ease-in-out infinite}@keyframes sk{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-8deg)}}</style><path class="b" d="M4 18c2-10 6-14 12-12s6 8 4 12" style="transform-origin:12px 14px"/>`);

    case 't-distribution-wide':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:wd ${d}s ease-in-out infinite}@keyframes wd{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.18)}}</style><path class="b" d="M3 18c1-8 3-11 9-11s8 3 9 11" style="transform-origin:12px 14px"/>`);

    case 'atom-shells':
      return wrap(`<style>.n{fill:currentColor}.s{fill:none;stroke:currentColor;stroke-width:1;opacity:.35}.e{fill:currentColor;transform-origin:12px 12px}.e1{animation:o1 ${d}s linear infinite}.e2{animation:o2 ${d * 1.5}s linear infinite}.e3{animation:o3 ${d * 2}s linear infinite}@keyframes o1{0%{transform:rotate(0deg) translate(4px)}100%{transform:rotate(360deg) translate(4px)}}@keyframes o2{0%{transform:rotate(90deg) translate(6px)}100%{transform:rotate(450deg) translate(6px)}}@keyframes o3{0%{transform:rotate(200deg) translate(8px)}100%{transform:rotate(560deg) translate(8px)}}</style><circle class="n" cx="12" cy="12" r="2"/><circle class="s" cx="12" cy="12" r="5"/><circle class="s" cx="12" cy="12" r="8"/><circle class="e e1" cx="16" cy="12" r="1.25"/><circle class="e e2" cx="12" cy="12" r="1.25"/><circle class="e e3" cx="12" cy="12" r="1.25"/>`);

    case 'molecular-bond':
      return wrap(`<style>.a{fill:currentColor}.b{stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:vb ${d}s ease-in-out infinite}@keyframes vb{0%,100%{transform:scaleX(1);opacity:1}50%{transform:scaleX(1.12);opacity:.55}}</style><circle class="a" cx="7" cy="12" r="2.5"/><circle class="a" cx="17" cy="12" r="2.5"/><line class="b" x1="9.5" y1="12" x2="14.5" y2="12" style="transform-origin:12px 12px"/>`);

    case 'benzene-ring':
      return wrap(`<style>.h{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linejoin:round}.d{animation:rs ${d}s ease-in-out infinite}.i{fill:none;stroke:currentColor;stroke-width:1.25;animation:rs2 ${d}s ease-in-out infinite}@keyframes rs{0%,100%{opacity:.4}50%{opacity:1}}@keyframes rs2{0%,100%{opacity:1}50%{opacity:.35}}</style><path class="h d" d="M12 6 L17 9 L17 15 L12 18 L7 15 L7 9 Z"/><circle class="i" cx="12" cy="12" r="2.5"/>`);

    case 'crystal-lattice':
      return wrap(`<style>.p{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1)}}</style><circle class="p" cx="8" cy="8" r="1.5"/><circle class="p" cx="16" cy="8" r="1.5" style="animation-delay:.15s"/><circle class="p" cx="8" cy="16" r="1.5" style="animation-delay:.3s"/><circle class="p" cx="16" cy="16" r="1.5" style="animation-delay:.45s"/><line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="8" y1="8" x2="8" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="16" y1="8" x2="16" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/>`);

    case 'p-orbital':
      return wrap(`<style>.l{fill:currentColor;transform-origin:12px 12px}.a{animation:la ${d}s ease-in-out infinite}.b{animation:lb ${d}s ease-in-out infinite}@keyframes la{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.75)}}@keyframes lb{0%,100%{opacity:.25;transform:scale(.75)}50%{opacity:1;transform:scale(1)}}</style><ellipse class="l a" cx="8.5" cy="12" rx="2.5" ry="5"/><ellipse class="l b" cx="15.5" cy="12" rx="2.5" ry="5"/>`);

    case 'ionic-lattice':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.25;opacity:.3}.i{stroke:currentColor;stroke-width:1.25;animation:at ${d}s ease-in-out infinite}.m{animation:at2 ${d}s ease-in-out infinite}@keyframes at{0%,100%{transform:translate(0,0)}50%{transform:translate(1px,-1px)}}@keyframes at2{0%,100%{transform:translate(0,0)}50%{transform:translate(-1px,1px)}}</style><line class="c" x1="6" y1="6" x2="18" y2="6"/><line class="c" x1="6" y1="12" x2="18" y2="12"/><line class="c" x1="6" y1="18" x2="18" y2="18"/><line class="c" x1="6" y1="6" x2="6" y2="18"/><line class="c" x1="12" y1="6" x2="12" y2="18"/><line class="c" x1="18" y1="6" x2="18" y2="18"/><g class="i"><line x1="7.5" y1="8.5" x2="7.5" y2="9.5"/><line x1="7" y1="9" x2="8" y2="9"/></g><g class="i" style="animation-delay:.15s"><line x1="13.5" y1="15.5" x2="13.5" y2="16.5"/><line x1="13" y1="16" x2="14" y2="16"/></g><line class="m" x1="13" y1="9" x2="14" y2="9"/><line class="m" x1="7" y1="16" x2="8" y2="16" style="animation-delay:.15s"/>`);

    case 'sp3-hybrid':
      return wrap(`<style>.c{fill:currentColor}.b{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.e{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="c" cx="12" cy="12" r="2"/><line class="b" x1="12" y1="12" x2="12" y2="5"/><line class="b" x1="12" y1="12" x2="17" y2="9"/><line class="b" x1="12" y1="12" x2="17" y2="15"/><line class="b" x1="12" y1="12" x2="7" y2="15"/><circle class="e" cx="12" cy="5" r="1.25" style="animation-delay:0s"/><circle class="e" cx="17" cy="9" r="1.25" style="animation-delay:.15s"/><circle class="e" cx="17" cy="15" r="1.25" style="animation-delay:.3s"/><circle class="e" cx="7" cy="15" r="1.25" style="animation-delay:.45s"/>`);

    case 'periodic-cell':
      return wrap(`<style>.f{fill:none;stroke:currentColor;stroke-width:1.5}.n{fill:currentColor;opacity:.55}.s{fill:none;stroke:currentColor;stroke-width:1.5;animation:gl ${d}s ease-in-out infinite}.c{fill:currentColor}@keyframes gl{0%,100%{opacity:.35;transform:scale(.92)}50%{opacity:1;transform:scale(1)}}</style><rect class="f" x="6" y="6" width="12" height="12" rx="1"/><circle class="n" cx="7.5" cy="8" r=".55"/><circle class="n" cx="8.8" cy="8" r=".55"/><circle class="n" cx="10.1" cy="8" r=".55"/><circle class="n" cx="7.5" cy="9.3" r=".55"/><circle class="n" cx="8.8" cy="9.3" r=".55"/><circle class="n" cx="10.1" cy="9.3" r=".55"/><circle class="s" cx="12" cy="14" r="3.5" style="transform-origin:12px 14px"/><circle class="c" cx="12" cy="14" r="1.25"/>`);

    case 'lewis-dots':
      return wrap(`<style>.c{fill:currentColor}.d{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="c" cx="12" cy="12" r="2"/><circle class="d" cx="12" cy="6" r="1.1" style="animation-delay:0s"/><circle class="d" cx="18" cy="12" r="1.1" style="animation-delay:.2s"/><circle class="d" cx="12" cy="18" r="1.1" style="animation-delay:.4s"/><circle class="d" cx="6" cy="12" r="1.1" style="animation-delay:.6s"/>`);

    case 'equilibrium-shift':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.f{animation:fw ${d}s ease-in-out infinite}.b{animation:bk ${d}s ease-in-out infinite}@keyframes fw{0%,100%{opacity:.35}50%{opacity:1}}@keyframes bk{0%,100%{opacity:1}50%{opacity:.35}}</style><line class="a f" x1="5" y1="12" x2="11" y2="12"/><polyline class="a f" points="9,10 11,12 9,14" fill="none"/><line class="a b" x1="13" y1="12" x2="19" y2="12"/><polyline class="a b" points="15,10 13,12 15,14" fill="none"/>`);

    case 'archimedes-spiral':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;opacity:.45}.p{fill:currentColor;animation:ar ${d + 0.3}s linear infinite;transform-origin:12px 12px}@keyframes ar{0%{transform:rotate(0deg) translate(3px)}100%{transform:rotate(720deg) translate(8px)}}</style><path class="s" d="M12 12c0 0 1-1 2-1s3 1 4 2 2 3 2 5-1 4-3 5-4 2-6 1"/><circle class="p" cx="12" cy="12" r="1.5"/>`);

    case 'trefoil-knot':
      return wrap(`<style>.k{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:36;animation:tr ${d + 0.5}s linear infinite}.p{fill:currentColor;animation:mv ${d + 0.5}s linear infinite}@keyframes tr{0%{stroke-dashoffset:36}100%{stroke-dashoffset:-36}}@keyframes mv{0%{transform:translate(8px,10px)}33%{transform:translate(16px,12px)}66%{transform:translate(10px,16px)}100%{transform:translate(8px,10px)}}</style><path class="k" d="M8 10c2-3 6-4 8-1s-1 6-4 6-5-2-4-5 4-4 7-2"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'riemann-rectangles':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;opacity:.45}.r{fill:currentColor;transform-origin:center bottom;animation:gr ${d}s ease-in-out infinite}@keyframes gr{0%,100%{transform:scaleY(.2);opacity:.25}50%{transform:scaleY(1);opacity:.85}}</style><path class="c" d="M3 18c2-8 5-12 10-10s7 4 8 10"/><rect class="r" x="5" y="12" width="2.5" height="6" rx=".3" style="animation-delay:0s"/><rect class="r" x="8" y="10" width="2.5" height="8" rx=".3" style="animation-delay:.15s"/><rect class="r" x="11" y="8" width="2.5" height="10" rx=".3" style="animation-delay:.3s"/><rect class="r" x="14" y="11" width="2.5" height="7" rx=".3" style="animation-delay:.45s"/>`);

    case 'wheel-paradox':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.g{animation:rl ${d}s linear infinite}.g2{animation:rl2 ${d}s linear infinite}@keyframes rl{0%{transform:translate(5px,16px) rotate(0deg)}100%{transform:translate(17px,16px) rotate(360deg)}}@keyframes rl2{0%{transform:translate(17px,16px) rotate(0deg)}100%{transform:translate(17px,16px) rotate(-540deg)}}</style><line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="1" opacity=".25"/><g class="g"><circle class="w" cx="0" cy="0" r="3"/><line x1="0" y1="-3" x2="0" y2="3" stroke="currentColor" stroke-width="1.25"/></g><g class="g2"><circle class="w" cx="0" cy="0" r="1.75"/><line x1="0" y1="-1.75" x2="0" y2="1.75" stroke="currentColor" stroke-width="1"/></g>`);

    case 'ladder-limit':
      return wrap(`<style>.u{stroke:currentColor;stroke-width:1.25;stroke-dasharray:3 2;opacity:.45}.l{stroke:currentColor;stroke-width:1.25;stroke-dasharray:3 2;opacity:.45}.p{fill:currentColor;animation:sq ${d}s ease-in-out infinite}@keyframes sq{0%,100%{transform:translate(8px,14px)}50%{transform:translate(12px,10px)}}</style><line class="u" x1="4" y1="8" x2="20" y2="8"/><line class="l" x1="4" y1="16" x2="20" y2="16"/><line x1="6" y1="8" x2="6" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="10" y1="8" x2="10" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="14" y1="8" x2="14" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="18" y1="8" x2="18" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'monte-carlo-hit':
      return wrap(`<style>.f{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.d{fill:currentColor;animation:ap ${d}s ease-in-out infinite}.h{animation:hi ${d}s ease-in-out infinite}@keyframes ap{0%,70%{opacity:0;transform:scale(.4)}80%,100%{opacity:.7;transform:scale(1)}}@keyframes hi{0%,70%{opacity:0}80%,100%{opacity:1;transform:scale(1.15)}}</style><rect class="f" x="5" y="5" width="14" height="14" rx="1"/><circle class="f" cx="12" cy="12" r="5.5"/><circle class="d" cx="9" cy="10" r="1" style="animation-delay:0s"/><circle class="d h" cx="14" cy="13" r="1" style="animation-delay:.35s"/><circle class="d" cx="11" cy="15" r="1" style="animation-delay:.7s"/><circle class="d h" cx="13" cy="9" r="1" style="animation-delay:1.05s"/>`);

    case 'redox-transfer':
      return wrap(`<style>.a{fill:currentColor}.l{stroke:currentColor;stroke-width:1.25;opacity:.35}.e{fill:currentColor;animation:jt ${d}s ease-in-out infinite}@keyframes jt{0%{transform:translate(8px,12px);opacity:1}45%{transform:translate(12px,9px);opacity:.5}55%{transform:translate(12px,9px);opacity:.5}100%{transform:translate(16px,12px);opacity:1}}</style><circle class="a" cx="8" cy="12" r="2.5"/><circle class="a" cx="16" cy="12" r="2.5"/><line class="l" x1="10.5" y1="12" x2="13.5" y2="12"/><circle class="e" cx="0" cy="0" r="1.25"/>`);

    case 'titration-endpoint':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;opacity:.35}.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:20;animation:ju ${d}s ease-in-out infinite}.p{fill:currentColor;animation:dr ${d}s ease-in-out infinite}@keyframes ju{0%,100%{stroke-dashoffset:20}50%{stroke-dashoffset:0}}@keyframes dr{0%{transform:translate(6px,16px)}50%{transform:translate(11px,11px)}100%{transform:translate(17px,7px)}}</style><path class="a" d="M4 17c2-2 4-3 6-3s4 1 6 3"/><path class="c" d="M10 14v-7"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'nmr-flip':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.25;opacity:.35}.s{fill:currentColor;animation:fl ${d}s ease-in-out infinite}.n{fill:currentColor;animation:fl ${d}s ease-in-out infinite reverse}@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}</style><line class="m" x1="6" y1="6" x2="6" y2="18"/><line class="m" x1="18" y1="6" x2="18" y2="18"/><circle class="s" cx="6" cy="14" r="1.75"/><circle class="n" cx="18" cy="10" r="1.75"/>`);

    case 'reaction-diffusion':
      return wrap(`<style>.b{fill:currentColor;animation:tu ${d}s ease-in-out infinite}@keyframes tu{0%,100%{opacity:.2;transform:scale(.7)}50%{opacity:1;transform:scale(1)}}</style><circle class="b" cx="8" cy="9" r="2" style="animation-delay:0s"/><circle class="b" cx="15" cy="10" r="1.6" style="animation-delay:.2s"/><circle class="b" cx="11" cy="15" r="2.2" style="animation-delay:.4s"/><circle class="b" cx="16" cy="16" r="1.4" style="animation-delay:.6s"/>`);

    case 'magnet-flip':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.5}.a{stroke:currentColor;stroke-width:2;stroke-linecap:round;animation:mf ${d}s ease-in-out infinite;transform-origin:12px 12px}@keyframes mf{0%,100%{transform:rotate(-70deg)}50%{transform:rotate(70deg)}}</style><rect class="b" x="7" y="8" width="10" height="8" rx="1.5"/><line class="a" x1="12" y1="12" x2="12" y2="5"/><polyline class="a" points="12,5 10,7 14,7" fill="none"/>`);

    case 'orbital-resonance':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:o1 ${d}s linear infinite;transform-origin:12px 12px}.s{fill:currentColor;animation:o2 ${d * 2}s linear infinite;transform-origin:12px 12px}@keyframes o1{0%{transform:rotate(0deg) translate(5px)}100%{transform:rotate(360deg) translate(5px)}}@keyframes o2{0%{transform:rotate(0deg) translate(8px)}100%{transform:rotate(360deg) translate(8px)}}</style><circle class="o" cx="12" cy="12" r="5"/><circle class="o" cx="12" cy="12" r="8"/><circle class="p" cx="12" cy="12" r="1.5"/><circle class="s" cx="12" cy="12" r="1.25"/>`);

    case 'sprint-runner': {
      const ds = dur(def, 0.42);
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.ru{transform-origin:13px 15px;animation:rn ${ds}s linear infinite}.l1{transform-origin:12.5px 14px;animation:lg1 ${ds}s linear infinite}.l2{transform-origin:13.5px 14px;animation:lg2 ${ds}s linear infinite}.a1{transform-origin:13px 10px;animation:ar1 ${ds}s linear infinite}.a2{transform-origin:13px 10px;animation:ar2 ${ds}s linear infinite}.sp{stroke:currentColor;stroke-width:1.25;stroke-linecap:round;opacity:.35;animation:sl ${ds}s linear infinite}@keyframes rn{0%,100%{transform:rotate(20deg) translateY(0)}50%{transform:rotate(20deg) translateY(1px)}}@keyframes lg1{0%,100%{transform:rotate(46deg)}50%{transform:rotate(-58deg)}}@keyframes lg2{0%,100%{transform:rotate(-58deg)}50%{transform:rotate(46deg)}}@keyframes ar1{0%,100%{transform:rotate(-34deg)}50%{transform:rotate(152deg)}}@keyframes ar2{0%,100%{transform:rotate(152deg)}50%{transform:rotate(-34deg)}}@keyframes sl{0%,100%{opacity:.15;transform:translateX(0)}50%{opacity:.55;transform:translateX(-3px)}}</style><line class="sp" x1="2" y1="10" x2="7" y2="10"/><line class="sp" x1="1" y1="13" x2="6" y2="13" style="animation-delay:.06s"/><g class="ru"><circle class="h" cx="13" cy="7" r="1.75"/><line class="f" x1="13" y1="8.5" x2="13" y2="14"/><line class="f l1" x1="12.5" y1="14" x2="12.5" y2="19.5"/><line class="f l2" x1="13.5" y1="14" x2="13.5" y2="19.5"/><line class="f a1" x1="13" y1="10" x2="17" y2="10"/><line class="f a2" x1="13" y1="10" x2="17" y2="10"/></g>`);
    }

    case 'basketball-bounce':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.25;opacity:.3}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.ply{animation:sq ${d}s ease-in-out infinite;transform-origin:11px 17px}.ar{transform-origin:11px 10px;animation:dr ${d}s ease-in-out infinite}.l1{transform-origin:11px 14px;animation:kn ${d}s ease-in-out infinite}.l2{transform-origin:11px 14px;animation:kn ${d}s ease-in-out infinite reverse}.bl{animation:bo ${d}s ease-in-out infinite;transform-origin:13.4px 15px}@keyframes sq{0%,100%{transform:translateY(0)}45%,55%{transform:translateY(1px)}}@keyframes dr{0%,100%{transform:rotate(-36deg)}45%,55%{transform:rotate(16deg)}}@keyframes kn{0%,100%{transform:rotate(-6deg)}45%,55%{transform:rotate(10deg)}}@keyframes bo{0%,100%{transform:translateY(-2px)}45%,55%{transform:translateY(0)}}</style><line class="g" x1="3" y1="18" x2="21" y2="18"/><g class="ply"><circle class="h" cx="11" cy="7" r="1.5"/><line class="f" x1="11" y1="8.5" x2="11" y2="14"/><line class="f l1" x1="11" y1="14" x2="10" y2="18"/><line class="f l2" x1="11" y1="14" x2="12" y2="18"/><line class="f" x1="11" y1="10" x2="9" y2="12"/><g class="ar"><line class="f" x1="11" y1="10" x2="13" y2="14"/><g class="bl"><circle cx="13.4" cy="15" r="1.85" fill="none" stroke="currentColor" stroke-width="1.35"/><path d="M11.55 15h3.7" fill="none" stroke="currentColor" stroke-width=".9" opacity=".5"/></g></g></g>`);

    case 'soccer-dribble':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.25;opacity:.3}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.kg{transform-origin:11px 14px;animation:ki ${d}s ease-in-out infinite}.bl{animation:ro ${d}s ease-in-out infinite;transform-origin:15px 16px}@keyframes ki{0%,100%{transform:rotate(18deg)}40%,60%{transform:rotate(-38deg)}}@keyframes ro{0%,100%{transform:translateX(-4px) rotate(0deg)}50%{transform:translateX(4px) rotate(180deg)}}</style><line class="g" x1="3" y1="18" x2="21" y2="18"/><circle class="h" cx="10" cy="8" r="1.5"/><line class="f" x1="10" y1="9.5" x2="11" y2="14"/><line class="f" x1="11" y1="14" x2="10" y2="18"/><line class="f kg" x1="11" y1="14" x2="15" y2="16"/><line class="f" x1="10" y1="11" x2="8" y2="10"/><line class="f" x1="10" y1="11" x2="12" y2="10"/><g class="bl"><circle cx="15" cy="16" r="2.1" fill="none" stroke="currentColor" stroke-width="1.35"/><polygon points="15,14.9 15.9,15.4 15.6,16.3 14.4,16.3 14.1,15.4" fill="currentColor" opacity=".45"/></g>`);

    case 'swim-crawl':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.ar{transform-origin:8.5px 10.5px;animation:st ${d}s ease-in-out infinite}.rc{transform-origin:9.5px 10.5px;animation:rc ${d}s ease-in-out infinite}.k1{transform-origin:15px 10.5px;animation:kk1 ${d}s ease-in-out infinite}.k2{transform-origin:15px 10.5px;animation:kk2 ${d}s ease-in-out infinite}@keyframes st{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(35deg)}}@keyframes rc{0%,100%{transform:rotate(18deg)}50%{transform:rotate(-22deg)}}@keyframes kk1{0%,100%{transform:rotate(10deg)}50%{transform:rotate(-20deg)}}@keyframes kk2{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(10deg)}}</style><path class="w" d="M2 16c2.5 0 4.5-1 7-1s4.5 1 7 1 4.5-1 7-1"/><circle class="h" cx="7" cy="10" r="1.75"/><line class="f" x1="8.5" y1="10.5" x2="16" y2="10.5"/><line class="f ar" x1="8.5" y1="10.5" x2="4" y2="9"/><line class="f rc" x1="9.5" y1="10.5" x2="12.5" y2="8.5"/><line class="f k1" x1="15" y1="10.5" x2="17.5" y2="12.5"/><line class="f k2" x1="15" y1="10.5" x2="17.5" y2="11.5"/>`);

    case 'cycle-road': {
      const dc = dur(def, 1.15);
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.2;opacity:.3;stroke-linecap:round}.f{stroke:currentColor;stroke-width:1.55;stroke-linecap:round;fill:none}.h{fill:currentColor}.ft{fill:currentColor}.wh{fill:none;stroke:currentColor;stroke-width:1;animation:wh ${dc}s linear infinite}.crk{animation:cr ${dc}s linear infinite;transform-origin:12px 16.5px}@keyframes wh{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes cr{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><line class="g" x1="2" y1="18.5" x2="22" y2="18.5"/><circle class="wh" cx="5" cy="18" r="2.5" style="transform-origin:5px 18px"/><circle class="wh" cx="19" cy="18" r="2.5" style="transform-origin:19px 18px"/><path class="f" d="M5 18 L10 12 L16 10 L19 18"/><line class="f" x1="16" y1="10" x2="17.5" y2="10"/><g class="crk"><line class="f" x1="12" y1="16.5" x2="10.5" y2="15.1"/><circle class="ft" cx="10.5" cy="15.1" r=".95"/><line class="f" x1="12" y1="16.5" x2="13.5" y2="17.9"/><circle class="ft" cx="13.5" cy="17.9" r=".95"/></g><circle class="ft" cx="12" cy="16.5" r=".7"/><circle class="h" cx="12" cy="6.8" r="1.35"/><line class="f" x1="10" y1="11.5" x2="11.5" y2="8"/><line class="f" x1="11.5" y1="8" x2="16.8" y2="10"/><line class="f" x1="10" y1="11.5" x2="12" y2="16.5"/>`);
    }

    case 'tennis-rally': {
      const dt = dur(def, 1.1);
      return wrap(`<style>.n{stroke:currentColor;stroke-width:1;opacity:.35;stroke-dasharray:2 2}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.sw{transform-origin:5px 11px;animation:vl ${dt}s linear infinite}.rk{stroke:currentColor;stroke-width:1.35;fill:none}.bl{fill:currentColor;animation:bl ${dt}s linear infinite;transform-origin:10.5px 8.5px}@keyframes vl{0%,52%,100%{transform:rotate(-28deg)}24%{transform:rotate(40deg)}28%,34%{transform:rotate(40deg)}42%{transform:rotate(10deg)}}@keyframes bl{0%{transform:translate(10px,2.8px);opacity:1}14%{transform:translate(6.5px,2px);opacity:1}24%{transform:translate(1.2px,0.3px);opacity:1}28%,34%{transform:translate(0,0);opacity:1}36%{transform:translate(1.5px,-0.8px);opacity:1}40%{transform:translate(5.5px,-2.6px);opacity:1}44%{transform:translate(9px,-4px);opacity:1}47%{transform:translate(10.5px,-4.5px);opacity:0}48%,99%{transform:translate(10px,2.8px);opacity:0}100%{transform:translate(10px,2.8px);opacity:1}}</style><line class="n" x1="12" y1="4" x2="12" y2="19"/><circle class="h" cx="5" cy="9" r="1.4"/><line class="f" x1="5" y1="10.5" x2="5" y2="15"/><line class="f" x1="5" y1="15" x2="4" y2="18"/><line class="f" x1="5" y1="15" x2="6" y2="18"/><line class="f" x1="5" y1="11" x2="7" y2="12"/><g class="sw"><line class="f" x1="5" y1="11" x2="7.5" y2="10.5"/><line class="f" x1="7.5" y1="10.5" x2="7.5" y2="12.5"/><ellipse class="rk" cx="10" cy="8.5" rx="1.65" ry="2.15"/></g><circle class="bl" cx="10.5" cy="8.5" r="1.3"/>`);
    }

    case 'ski-slalom':
      return wrap(`<style>.fg{stroke:currentColor;stroke-width:1.25;opacity:.4}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.sk{stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.skr{transform-origin:12px 15px;animation:tl ${d}s ease-in-out infinite}@keyframes tl{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}</style><line class="fg" x1="5" y1="8" x2="5" y2="11"/><path class="fg" d="M5 8l2-1"/><line class="fg" x1="19" y1="11" x2="19" y2="14"/><path class="fg" d="M19 11l2-1"/><circle class="h" cx="12" cy="8" r="1.5"/><line class="f" x1="12" y1="9.5" x2="12" y2="14"/><line class="f" x1="10" y1="11" x2="8" y2="8"/><line class="f" x1="14" y1="11" x2="16" y2="8"/><g class="skr"><line class="sk" x1="10" y1="15" x2="7" y2="18"/><line class="sk" x1="14" y1="15" x2="17" y2="18"/></g>`);

    case 'jump-rope':
      return wrap(`<style>.rp{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.tp{animation:ov ${d}s linear infinite}.bt{animation:un ${d}s linear infinite}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.jp{animation:hp ${d}s linear infinite}@keyframes ov{0%,49%{opacity:1}50%,100%{opacity:0}}@keyframes un{0%,49%{opacity:0}50%,100%{opacity:1}}@keyframes hp{0%,49%{transform:translateY(-3px)}50%,100%{transform:translateY(0)}}</style><g class="jp"><circle class="h" cx="12" cy="7.5" r="1.5"/><line class="f" x1="12" y1="9" x2="12" y2="14"/><line class="f" x1="12" y1="14" x2="10" y2="17"/><line class="f" x1="12" y1="14" x2="14" y2="17"/><line class="f" x1="12" y1="10" x2="8" y2="11.5"/><line class="f" x1="12" y1="10" x2="16" y2="11.5"/><path class="rp tp" d="M8 11.5 A4 7.5 0 0 1 16 11.5"/><path class="rp bt" d="M8 11.5 A4 7.5 0 0 0 16 11.5"/></g>`);

    case 'yoga-tree':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.sw{transform-origin:12px 14px;animation:bl ${d}s ease-in-out infinite}@keyframes bl{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}</style><g class="sw"><circle class="h" cx="12" cy="6" r="1.5"/><line class="f" x1="12" y1="7.5" x2="12" y2="14"/><line class="f" x1="12" y1="14" x2="12" y2="19"/><line class="f" x1="12" y1="14" x2="15" y2="19"/><line class="f" x1="15" y1="19" x2="12" y2="15"/><line class="f" x1="12" y1="10" x2="9" y2="5"/><line class="f" x1="12" y1="10" x2="15" y2="5"/></g>`);

    case 'boxing-jab':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.gl{fill:currentColor}.gua{transform-origin:9px 11px;animation:gd ${d}s ease-in-out infinite}.jab{transform-origin:9px 11px;animation:jb ${d}s ease-in-out infinite}@keyframes gd{0%,100%{transform:rotate(28deg)}35%,55%{transform:rotate(18deg)}}@keyframes jb{0%,100%{transform:rotate(-12deg)}35%,55%{transform:rotate(42deg)}}</style><circle class="h" cx="9" cy="8" r="1.75"/><line class="f" x1="9" y1="9.5" x2="9" y2="15"/><line class="f" x1="9" y1="15" x2="8" y2="18"/><line class="f" x1="9" y1="15" x2="10" y2="18"/><g class="gua"><line class="f" x1="9" y1="11" x2="6.5" y2="13"/><circle class="gl" cx="6.5" cy="13" r="1.5"/></g><g class="jab"><line class="f" x1="9" y1="11" x2="14" y2="11"/><circle class="gl" cx="14" cy="11" r="1.5"/></g>`);

    case 'archery-aim':
      return wrap(`<style>.tg{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.st{stroke:currentColor;stroke-width:1;opacity:.35}.bw{stroke:currentColor;stroke-width:1.5;fill:none}.dr{transform-origin:2.5px 10.5px;animation:pl ${d}s ease-in-out infinite}.arr{animation:sh ${d}s ease-in-out infinite;transform-origin:7px 12px}@keyframes pl{0%,100%{transform:rotate(0deg)}45%{transform:rotate(-16deg)}55%{transform:rotate(6deg)}}@keyframes sh{0%,100%{transform:translateX(0)}45%{transform:translateX(-0.5px)}55%,100%{transform:translateX(7px)}}</style><circle class="tg" cx="19" cy="12" r="2.75"/><circle class="tg" cx="19" cy="12" r=".9"/><circle class="h" cx="2.5" cy="8" r="1.35"/><line class="f" x1="2.5" y1="9.5" x2="2.5" y2="13.5"/><line class="f" x1="2.5" y1="13.5" x2="1.5" y2="17.5"/><line class="f" x1="2.5" y1="13.5" x2="3.5" y2="17.5"/><line class="f" x1="2.5" y1="10.5" x2="7" y2="12"/><g class="dr"><line class="f" x1="2.5" y1="10.5" x2="3.8" y2="11.2"/><line class="f" x1="3.8" y1="11.2" x2="5.5" y2="12"/></g><path class="bw" d="M7.5 7.5 Q8.5 12 7.5 16.5"/><line class="st" x1="7" y1="8" x2="7" y2="16"/><g class="arr"><line class="f" x1="7" y1="12" x2="14" y2="12"/><polygon points="14,12 12.5,11.2 12.5,12.8" fill="currentColor"/></g>`);

    case 'high-jump-bar':
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.pt{stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.fig{animation:jv ${d}s ease-in-out infinite;transform-origin:0px 0px}@keyframes jv{0%{transform:translate(4px,13px) rotate(20deg)}28%{transform:translate(8px,11px) rotate(-25deg)}52%{transform:translate(12px,5px) rotate(-88deg)}78%{transform:translate(16px,10px) rotate(-135deg)}100%{transform:translate(19px,13px) rotate(-165deg)}}</style><line class="gd" x1="3" y1="18" x2="21" y2="18"/><line class="pt" x1="7" y1="10" x2="7" y2="18"/><line class="pt" x1="17" y1="10" x2="17" y2="18"/><line class="pt" x1="7" y1="10" x2="17" y2="10"/><g class="fig"><circle class="h" cx="0" cy="-5.5" r="1.4"/><line class="f" x1="0" y1="-4" x2="0" y2="0"/><line class="f" x1="0" y1="-3" x2="-2.5" y2="-1.5"/><line class="f" x1="0" y1="-3" x2="2" y2="-4"/><line class="f" x1="0" y1="0" x2="-2" y2="4.5"/><line class="f" x1="0" y1="0" x2="2" y2="4.5"/></g>`);

    case 'hurdle-sprint': {
      const dh = dur(def, 0.88);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.pt{stroke:currentColor;stroke-width:1.6;stroke-linecap:round}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.fg{stroke:currentColor;stroke-width:1.25;opacity:.28;stroke-linecap:round}.fig{animation:hv ${dh}s linear infinite;transform-origin:0px 0px}@keyframes hv{0%{transform:translate(3px,13px) rotate(24deg)}20%{transform:translate(8px,13px) rotate(30deg)}36%{transform:translate(11.5px,12px) rotate(8deg)}50%{transform:translate(14px,10.2px) rotate(-68deg)}64%{transform:translate(16.5px,12px) rotate(-18deg)}80%{transform:translate(19px,13px) rotate(26deg)}100%{transform:translate(21px,13px) rotate(28deg)}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><line class="fg" x1="19" y1="14.5" x2="19" y2="18"/><line class="fg" x1="21.5" y1="14.5" x2="21.5" y2="18"/><line class="fg" x1="19" y1="14.5" x2="21.5" y2="14.5"/><line class="pt" x1="12.5" y1="13.5" x2="12.5" y2="18"/><line class="pt" x1="15.5" y1="13.5" x2="15.5" y2="18"/><line class="pt" x1="12.5" y1="13.5" x2="15.5" y2="13.5"/><line class="fg" x1="2" y1="11" x2="6" y2="11"/><line class="fg" x1="1" y1="14" x2="5" y2="14"/><g class="fig"><circle class="h" cx="0" cy="-5.2" r="1.35"/><line class="f" x1="0" y1="-3.8" x2="0" y2="0"/><line class="f" x1="0" y1="-2.8" x2="-2.2" y2="-1.2"/><line class="f" x1="0" y1="-2.8" x2="2.4" y2="-3.6"/><line class="f" x1="0" y1="0" x2="-2.5" y2="4.2"/><line class="f" x1="0" y1="0" x2="2.8" y2="3.8"/></g>`);
    }

    case 'pole-vault': {
      const dp = dur(def, 1.05);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.pt{stroke:currentColor;stroke-width:1.6;stroke-linecap:round}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.pl{stroke:currentColor;stroke-width:1.35;stroke-linecap:round;fill:none}.fig{animation:pv ${dp}s ease-in-out infinite;transform-origin:0px 0px}.pole{animation:po ${dp}s ease-in-out infinite;transform-origin:5px 17px}@keyframes pv{0%{transform:translate(3px,13px) rotate(18deg)}22%{transform:translate(7px,13px) rotate(22deg)}38%{transform:translate(9px,11px) rotate(-8deg)}55%{transform:translate(12px,6px) rotate(-92deg)}72%{transform:translate(15px,9px) rotate(-148deg)}88%{transform:translate(18px,12px) rotate(-175deg)}100%{transform:translate(20px,13px) rotate(-178deg)}}@keyframes po{0%,18%{transform:rotate(-8deg)}30%{transform:rotate(-42deg)}48%{transform:rotate(-78deg)}62%{transform:rotate(-95deg)}78%,100%{transform:rotate(-108deg)}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><line class="pt" x1="6" y1="9" x2="6" y2="18"/><line class="pt" x1="16" y1="9" x2="16" y2="18"/><line class="pt" x1="6" y1="9" x2="16" y2="9"/><rect class="gd" x="4.5" y="17" width="2" height="1" rx=".2"/><g class="pole"><line class="pl" x1="5" y1="17" x2="8" y2="4"/></g><g class="fig"><circle class="h" cx="0" cy="-5.2" r="1.35"/><line class="f" x1="0" y1="-3.8" x2="0" y2="0"/><line class="f" x1="0" y1="-2.8" x2="-2" y2="-1"/><line class="f" x1="0" y1="-2.8" x2="2.2" y2="-3.5"/><line class="f" x1="0" y1="0" x2="-2" y2="4.5"/><line class="f" x1="0" y1="0" x2="2" y2="4.5"/></g>`);
    }

    case 'javelin-throw': {
      const dj = dur(def, 1.1);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.fig{animation:th ${dj}s ease-in-out infinite;transform-origin:7px 14px}.jav{animation:fl ${dj}s linear infinite;transform-origin:0px 0px}@keyframes th{0%,100%{transform:rotate(0deg)}18%{transform:rotate(-6deg)}38%{transform:rotate(14deg)}52%{transform:rotate(38deg)}68%{transform:rotate(22deg)}82%{transform:rotate(8deg)}}@keyframes fl{0%,42%{transform:translate(7px,10.5px) rotate(-32deg);opacity:1}48%{transform:translate(7px,10px) rotate(-40deg);opacity:1}54%{transform:translate(9.5px,6px) rotate(-28deg);opacity:1}60%{transform:translate(12px,3px) rotate(-14deg);opacity:1}66%{transform:translate(14.5px,2px) rotate(-2deg);opacity:1}72%{transform:translate(17px,4.5px) rotate(14deg);opacity:1}78%{transform:translate(19px,7.5px) rotate(26deg);opacity:1}84%{transform:translate(21px,10.5px) rotate(34deg);opacity:1}90%{transform:translate(22.5px,12.5px) rotate(40deg);opacity:.35}94%,98%{transform:translate(7px,10.5px) rotate(-32deg);opacity:0}100%{transform:translate(7px,10.5px) rotate(-32deg);opacity:1}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><g class="fig"><circle class="h" cx="7" cy="8" r="1.4"/><line class="f" x1="7" y1="9.5" x2="7" y2="14"/><line class="f" x1="7" y1="14" x2="6" y2="18"/><line class="f" x1="7" y1="14" x2="8.5" y2="18"/><line class="f" x1="7" y1="10.5" x2="4.5" y2="12"/></g><g class="jav"><line class="f" x1="0" y1="0" x2="6.5" y2="-2.2"/><polygon points="6.5,-2.2 5,-3 5,-1.4" fill="currentColor"/></g>`);
    }

    case 'shot-put': {
      const ds = dur(def, 1.2);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.cr{stroke:currentColor;stroke-width:1.25;opacity:.25;fill:none}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.sh{fill:currentColor}.fig{animation:sp ${ds}s ease-in-out infinite;transform-origin:6px 14px}.bl{animation:fl ${ds}s ease-in-out infinite;transform-origin:9px 9px}@keyframes sp{0%,38%{transform:rotate(-12deg)}46%{transform:rotate(32deg)}58%,100%{transform:rotate(14deg)}}@keyframes fl{0%,42%{transform:translate(0,0);opacity:1}46%{transform:translate(0,0);opacity:1}54%{transform:translate(4px,-3.5px);opacity:1}62%{transform:translate(8px,-5.5px);opacity:1}70%{transform:translate(12px,-3px);opacity:1}78%{transform:translate(15.5px,1.5px);opacity:1}86%{transform:translate(18px,4px);opacity:.25}90%,98%{transform:translate(0,0);opacity:0}100%{transform:translate(0,0);opacity:1}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><circle class="cr" cx="6" cy="15" r="3.2"/><g class="fig"><circle class="h" cx="6" cy="8" r="1.4"/><line class="f" x1="6" y1="9.5" x2="6.5" y2="14"/><line class="f" x1="6.5" y1="14" x2="5.5" y2="18"/><line class="f" x1="6.5" y1="14" x2="8" y2="18"/><line class="f" x1="6" y1="10.5" x2="4" y2="11.5"/><line class="f" x1="6" y1="10.5" x2="8.5" y2="10"/></g><circle class="sh bl" cx="9" cy="9" r="1.55"/>`);
    }

    case 'hammer-throw': {
      const dh = dur(def, 1.35);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.hb{fill:currentColor}.w{stroke:currentColor;stroke-width:1.15;stroke-linecap:round}.fig{animation:bd ${dh}s ease-in-out infinite;transform-origin:7px 14px}.ham{animation:sw ${dh}s linear infinite;transform-origin:7px 11px}@keyframes bd{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(8deg)}}@keyframes sw{0%{transform:rotate(-75deg)}100%{transform:rotate(285deg)}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><g class="fig"><circle class="h" cx="7" cy="8" r="1.4"/><line class="f" x1="7" y1="9.5" x2="7" y2="14"/><line class="f" x1="7" y1="14" x2="6" y2="18"/><line class="f" x1="7" y1="14" x2="8.5" y2="18"/><line class="f" x1="7" y1="10.5" x2="5" y2="11.5"/></g><g class="ham"><line class="w" x1="7" y1="11" x2="15" y2="11"/><circle class="hb" cx="15" cy="11" r="1.65"/></g>`);
    }

    case 'triple-jump': {
      const dt = dur(def, 1.15);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.mk{stroke:currentColor;stroke-width:1.1;opacity:.28;stroke-linecap:round}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.fig{animation:tj ${dt}s ease-in-out infinite;transform-origin:0px 0px}@keyframes tj{0%{transform:translate(3px,13px) rotate(18deg)}14%{transform:translate(6.5px,10.5px) rotate(-8deg)}24%{transform:translate(7.5px,13px) rotate(22deg)}34%{transform:translate(10.5px,10px) rotate(-4deg)}46%{transform:translate(11.5px,13px) rotate(20deg)}58%{transform:translate(14.5px,7px) rotate(-72deg)}74%{transform:translate(17.5px,13px) rotate(16deg)}100%{transform:translate(20px,13px) rotate(18deg)}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><line class="mk" x1="7.5" y1="18" x2="7.5" y2="16.5"/><line class="mk" x1="11.5" y1="18" x2="11.5" y2="16.5"/><line class="mk" x1="17.5" y1="18" x2="17.5" y2="16.5"/><g class="fig"><circle class="h" cx="0" cy="-5.2" r="1.35"/><line class="f" x1="0" y1="-3.8" x2="0" y2="0"/><line class="f" x1="0" y1="-2.8" x2="-2.2" y2="-1.2"/><line class="f" x1="0" y1="-2.8" x2="2.2" y2="-3.4"/><line class="f" x1="0" y1="0" x2="-2.5" y2="4.2"/><line class="f" x1="0" y1="0" x2="2.8" y2="3.8"/></g>`);
    }

    case 'weightlift': {
      const dw = dur(def, 1.25);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.pt{stroke:currentColor;stroke-width:1.5;opacity:.3}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.pl{fill:currentColor}.fig{animation:sq ${dw}s ease-in-out infinite;transform-origin:12px 15px}.bar{animation:br ${dw}s ease-in-out infinite;transform-origin:12px 16px}@keyframes sq{0%,100%{transform:translateY(0) scaleY(1)}22%{transform:translateY(1.5px) scaleY(.86)}40%{transform:translateY(-1px) scaleY(1.04)}52%,68%{transform:translateY(-3px) scaleY(1.08)}82%{transform:translateY(0) scaleY(.92)}94%{transform:translateY(1px) scaleY(.88)}}@keyframes br{0%,100%{transform:translateY(0)}22%{transform:translateY(0)}40%{transform:translateY(-4px)}52%,68%{transform:translateY(-10px)}82%{transform:translateY(-4px)}94%{transform:translateY(0)}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><line class="pt" x1="8" y1="18" x2="16" y2="18"/><g class="bar"><line class="f" x1="5" y1="16" x2="19" y2="16"/><circle class="pl" cx="5.5" cy="16" r="1.85"/><circle class="pl" cx="18.5" cy="16" r="1.85"/></g><g class="fig"><circle class="h" cx="12" cy="7.5" r="1.45"/><line class="f" x1="12" y1="9" x2="12" y2="14"/><line class="f" x1="12" y1="14" x2="10" y2="18"/><line class="f" x1="12" y1="14" x2="14" y2="18"/><line class="f" x1="12" y1="10" x2="8" y2="12"/><line class="f" x1="12" y1="10" x2="16" y2="12"/></g>`);
    }

    case 'volleyball-spike': {
      const dv = dur(def, 1.05);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.n{stroke:currentColor;stroke-width:1;opacity:.35;stroke-dasharray:2 2}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.sw{transform-origin:5px 11px;animation:vk ${dv}s ease-in-out infinite}.bl{fill:currentColor;animation:vb ${dv}s ease-in-out infinite;transform-origin:7.5px 8.5px}@keyframes vk{0%,58%,100%{transform:rotate(-20deg)}32%{transform:rotate(48deg)}38%,48%{transform:rotate(48deg)}}@keyframes vb{0%,20%{transform:translate(0,0);opacity:1}28%{transform:translate(.5px,-1.5px);opacity:1}36%{transform:translate(2px,-2.5px);opacity:1}44%{transform:translate(5.5px,-2px);opacity:1}52%{transform:translate(9px,0);opacity:1}60%{transform:translate(11px,2.5px);opacity:.35}64%,98%{transform:translate(0,0);opacity:0}100%{transform:translate(0,0);opacity:1}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><line class="n" x1="12" y1="4" x2="12" y2="19"/><circle class="h" cx="5" cy="9" r="1.4"/><line class="f" x1="5" y1="10.5" x2="5" y2="15"/><line class="f" x1="5" y1="15" x2="4" y2="18"/><line class="f" x1="5" y1="15" x2="6" y2="18"/><line class="f" x1="5" y1="11" x2="7" y2="12"/><g class="sw"><line class="f" x1="5" y1="11" x2="8" y2="8"/><line class="f" x1="8" y1="8" x2="8.5" y2="10.5"/></g><circle class="bl" cx="7.5" cy="8.5" r="1.35"/>`);
    }

    case 'dive-board': {
      const dd = dur(def, 1.1);
      return wrap(`<style>.wv{stroke:currentColor;stroke-width:1.25;opacity:.35;fill:none}.bd{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.pt{stroke:currentColor;stroke-width:1.35;opacity:.35}.fig{animation:dv ${dd}s ease-in-out infinite;transform-origin:0px 0px}.rp{fill:none;stroke:currentColor;stroke-width:1.1;opacity:.45;animation:rw ${dd}s ease-out infinite;transform-origin:17px 18px}.jt{stroke:currentColor;stroke-width:1.2;stroke-linecap:round;opacity:.55}.j1{animation:j1 ${dd}s ease-out infinite}.j2{animation:j2 ${dd}s ease-out infinite}.j3{animation:j3 ${dd}s ease-out infinite}.j4{animation:j4 ${dd}s ease-out infinite}@keyframes dv{0%,10%{transform:translate(6px,7px) rotate(-12deg)}20%{transform:translate(8px,5.5px) rotate(-30deg)}34%{transform:translate(11px,2.5px) rotate(-60deg)}50%{transform:translate(14px,4.5px) rotate(-115deg)}66%{transform:translate(16px,10px) rotate(-160deg)}80%{transform:translate(16.8px,17px) rotate(-178deg)}90%,100%{transform:translate(17px,18.5px) rotate(-182deg)}}@keyframes rw{0%,74%{opacity:0;transform:scale(.35)}78%{opacity:.7;transform:scale(1)}86%{opacity:.45;transform:scale(1.55)}94%,100%{opacity:0;transform:scale(1.9)}}@keyframes j1{0%,76%{opacity:0;transform:translateY(1px) scaleY(.2)}80%{opacity:.8;transform:translateY(0) scaleY(1)}90%{opacity:0;transform:translateY(-3.5px) scaleY(.5)}}@keyframes j2{0%,77%{opacity:0;transform:translateY(1px) scaleY(.2)}81%{opacity:.75;transform:translateY(0) scaleY(1)}91%{opacity:0;transform:translateY(-4px) scaleY(.5)}}@keyframes j3{0%,76%{opacity:0;transform:translateY(1px) scaleY(.2)}80%{opacity:.8;transform:translateY(0) scaleY(1)}90%{opacity:0;transform:translateY(-3.5px) scaleY(.5)}}@keyframes j4{0%,78%{opacity:0;transform:translate(-1px,1px) scale(.4)}82%{opacity:.65;transform:translate(0,0) scale(1)}92%{opacity:0;transform:translate(1.5px,-2.5px) scale(.7)}}</style><path class="wv" d="M2 18c2 0 3-.5 5-.5s3 .5 5 .5 3-.5 5-.5 3 .5 5 .5"/><line class="pt" x1="3" y1="10" x2="3" y2="19"/><line class="bd" x1="3" y1="10" x2="11" y2="9.2"/><g class="fig"><circle class="h" cx="0" cy="-5" r="1.35"/><line class="f" x1="0" y1="-3.6" x2="0" y2="0"/><line class="f" x1="0" y1="-2.6" x2="-2.2" y2="-1"/><line class="f" x1="0" y1="-2.6" x2="2" y2="-3.2"/><line class="f" x1="0" y1="0" x2="-2" y2="3.8"/><line class="f" x1="0" y1="0" x2="2.2" y2="3.5"/></g><ellipse class="rp" cx="17" cy="18" rx="2.2" ry=".85"/><line class="jt j1" x1="15.2" y1="18" x2="14" y2="14.8"/><line class="jt j2" x1="17" y1="18" x2="17" y2="14"/><line class="jt j3" x1="18.8" y1="18" x2="20" y2="14.8"/><line class="jt j4" x1="16" y1="18" x2="14.5" y2="16.2"/>`);
    }

    case 'fence-lunge': {
      const df = dur(def, 0.88);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.msk{fill:none;stroke:currentColor;stroke-width:1.35}.fig{animation:lg ${df}s ease-in-out infinite;transform-origin:7px 15px}.sw{animation:pr ${df}s ease-in-out infinite;transform-origin:8px 10.5px}@keyframes lg{0%,100%{transform:translateX(0) rotate(0deg)}38%{transform:translateX(2.5px) rotate(4deg)}52%{transform:translateX(2.5px) rotate(4deg)}72%{transform:translateX(0) rotate(0deg)}}@keyframes pr{0%,100%{transform:rotate(-8deg)}38%{transform:rotate(6deg) translateX(2px)}52%{transform:rotate(6deg) translateX(2px)}72%{transform:rotate(-8deg)}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><g class="fig"><circle class="h" cx="7" cy="8.5" r="1.35"/><circle class="msk" cx="7" cy="8.5" r="1.85"/><line class="f" x1="7" y1="10" x2="7.5" y2="13.5"/><line class="f" x1="7.5" y1="13.5" x2="9.5" y2="18"/><line class="f" x1="7.5" y1="13.5" x2="5.5" y2="18"/><line class="f" x1="7" y1="11" x2="5.5" y2="12.5"/><g class="sw"><line class="f" x1="7" y1="11" x2="14.5" y2="10.2"/><line class="f" x1="14.5" y1="10.2" x2="16" y2="10"/></g></g>`);
    }

    case 'skate-ollie': {
      const dk = dur(def, 0.95);
      return wrap(`<style>.gd{stroke:currentColor;stroke-width:1.25;opacity:.3}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.bd{stroke:currentColor;stroke-width:1.65;stroke-linecap:round}.wh{fill:currentColor}.ply{animation:ol ${dk}s ease-in-out infinite;transform-origin:12px 16px}@keyframes ol{0%,100%{transform:translate(0,0)}18%{transform:translate(1px,1px)}38%{transform:translate(2.5px,-5px)}52%{transform:translate(3.5px,-5.5px)}68%{transform:translate(5px,-1px)}82%{transform:translate(6px,0)}}</style><line class="gd" x1="2" y1="18" x2="22" y2="18"/><g class="ply"><line class="bd" x1="8" y1="16" x2="16" y2="16"/><circle class="wh" cx="9.5" cy="17" r=".85"/><circle class="wh" cx="14.5" cy="17" r=".85"/><circle class="h" cx="12" cy="10" r="1.35"/><line class="f" x1="12" y1="11.5" x2="12" y2="15"/><line class="f" x1="12" y1="15" x2="10.5" y2="16"/><line class="f" x1="12" y1="15" x2="13.5" y2="16"/><line class="f" x1="12" y1="12.5" x2="9.5" y2="13.5"/><line class="f" x1="12" y1="12.5" x2="14" y2="13"/></g>`);
    }

    case 'row-stroke': {
      const dr = dur(def, 1.05);
      return wrap(`<style>.wv{stroke:currentColor;stroke-width:1.2;opacity:.35;fill:none}.hl{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.h{fill:currentColor}.oar{animation:st ${dr}s ease-in-out infinite;transform-origin:10px 12px}@keyframes st{0%,100%{transform:rotate(38deg)}45%{transform:rotate(-28deg)}}</style><path class="wv" d="M2 17.5c2.5 0 4-.4 6-.4s3.5 .4 6 .4 3.5-.4 6-.4 3.5 .4 5 .4"/><path class="hl" d="M6 15.5 Q12 14.5 18 15.5 L18 16.5 Q12 15.5 6 16.5 Z"/><circle class="h" cx="11" cy="10.5" r="1.3"/><line class="f" x1="11" y1="11.8" x2="11.5" y2="14"/><line class="f" x1="11.5" y1="14" x2="9" y2="15.5"/><line class="f" x1="11.5" y1="14" x2="13.5" y2="15.5"/><g class="oar"><line class="f" x1="10" y1="12" x2="4" y2="10"/><line class="f" x1="10" y1="12" x2="16" y2="14"/></g>`);
    }

    default: {
      const expansion = renderExpansionTemplate(def);
      if (expansion) {
        return expansion;
      }
      return wrap(`<style>.d{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="d" cx="12" cy="12" r="3"/>`);
    }
  }
}
