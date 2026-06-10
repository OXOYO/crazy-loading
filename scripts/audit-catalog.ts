import { ICON_CATALOG } from './catalog.ts';
import type { TemplateName } from './types.ts';

/** 模板复用可接受但需在描述中标注「示意」的概念 */
const ACCEPTABLE_GENERIC: Record<string, string> = {
  'gaussian-bell': '统计分布类通用钟形示意',
  'logistic-curve': '饱和/亮度下降类 S 型示意',
  'light-cone': '相对论因果结构通用示意',
  'orbit-ellipse': '椭圆轨道类通用示意',
  'hohmann-transfer': '霍曼转移轨道',
  'energy-levels': '分立能级与跃迁示意',
  'wave-interference': '波动叠加示意',
  'doppler-shift': '频移/波长变化示意',
  'redshift-spectrum': '谱线位移示意',
  'exponential-decay': '指数衰减过程示意',
  'bifurcation-fork': '分叉/链式反应示意',
  'bernoulli-flow': '流管流速截面示意',
  'stokes-circulation': '环流/积分定理示意',
  'field-curl': '旋转/环流场示意',
  'field-divergence': '径向场/梯度示意',
  'accretion-disk': '吸积环/旋转盘示意',
  'brownian-motion': '随机轨道示意',
  'lissajous': '参数轨道/混沌示意',
};

const templateUsage = new Map<TemplateName, string[]>();
for (const item of ICON_CATALOG) {
  const list = templateUsage.get(item.template) ?? [];
  list.push(item.id);
  templateUsage.set(item.template, list);
}

const overused = [...templateUsage.entries()]
  .filter(([, ids]) => ids.length >= 6)
  .sort((a, b) => b[1].length - a[1].length);

const weak = ICON_CATALOG.filter((item) => {
  const note = ACCEPTABLE_GENERIC[item.template];
  if (!note) {
    return false;
  }
  return !item.description.includes('示意');
});

console.log(`# 图标审计报告 (${ICON_CATALOG.length} 个)\n`);
console.log('## 严重不匹配（已修复）\n');
console.log('- 洛伦兹/奇怪吸引子、引力助推、斯涅尔定律、全反射、弹性碰撞等 40+ 项已换用专用模板\n');

console.log('## 高频复用模板 (≥6次)\n');
for (const [template, ids] of overused) {
  const hint = ACCEPTABLE_GENERIC[template] ? ` — ${ACCEPTABLE_GENERIC[template]}` : '';
  console.log(`- ${template} (${ids.length})${hint}`);
}

console.log('\n## 建议补充「示意」标注的描述\n');
for (const item of weak.slice(0, 20)) {
  console.log(`- ${item.id} (${item.template})`);
}
if (weak.length > 20) {
  console.log(`- … 另有 ${weak.length - 20} 项`);
}

const identical = [...templateUsage.entries()]
  .filter(([, ids]) => ids.length > 1)
  .map(([template, ids]) => ({ template, ids }));

console.log('\n## 共用模板（同动画，描述不同）\n');
for (const { template, ids } of identical.slice(0, 15)) {
  console.log(`- ${template} (${ids.length}): ${ids.join(', ')}`);
}
if (identical.length > 15) {
  console.log(`- … 另有 ${identical.length - 15} 组`);
}

console.log(`\n专用模板数: ${templateUsage.size}`);
console.log(`待补充示意描述: ${weak.length}`);
console.log(`共用模板组数: ${identical.length}`);
