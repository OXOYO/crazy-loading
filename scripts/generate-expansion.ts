/**
 * 生成 catalog-expansion.ts（扩展批次 catalog）
 * templates-expansion.ts 需手动维护，请勿从此脚本覆盖
 * 运行: npx tsx scripts/generate-expansion.ts
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type Cat =
  | 'biology'
  | 'cs'
  | 'optics'
  | 'earth'
  | 'music'
  | 'engineering'
  | 'calculus'
  | 'trigonometry'
  | 'geometry'
  | 'chemistry'
  | 'relativity'
  | 'astronomy'
  | 'quantum';

type Entry = [string, string, string, Cat, string];

function single(
  id: string,
  title: string,
  desc: string,
  category: Cat,
  template: string,
): Entry {
  return [id, title, desc, category, template];
}

const biology: Entry[] = [
  single('dna-helix', 'DNA 双螺旋', '碱基配对双链盘绕', 'biology', 'dna-helix'),
  single('dna-replicate', 'DNA 复制', '双链解旋逐段复制', 'biology', 'dna-replicate'),
  single('rna-transcribe', 'RNA 转录', 'DNA 模板合成 RNA', 'biology', 'rna-transcribe'),
  single('protein-fold', '蛋白质折叠', '氨基酸链折叠成功能构象', 'biology', 'protein-fold'),
  single('cell-membrane', '细胞膜通道', '膜蛋白通道开闭转运', 'biology', 'cell-membrane'),
  single('photosynthesis', '光合作用', '光能转化学能循环', 'biology', 'photosynthesis-lab'),
  single('neuron-pulse', '动作电位', '膜电位去极化复极化', 'biology', 'neuron-pulse'),
  single('heartbeat-ecg', '心电图', '心电 QRS 周期性搏动', 'biology', 'heartbeat-ecg'),
  single('mitosis', '有丝分裂', '细胞分裂周期推进', 'biology', 'mitosis-split'),
  single('virus-infect', '病毒感染', '病毒附着穿入复制', 'biology', 'virus-infect'),
  single('enzyme-bind', '酶促反应', '锁钥结合降低能垒', 'biology', 'enzyme-binding'),
  single('blood-flow', '血液循环', '心脏泵血循环全身', 'biology', 'blood-flow'),
  single('muscle-contract', '肌肉收缩', '肌动肌球蛋白相对滑动', 'biology', 'muscle-contract'),
  single('bacteria-divide', '细菌分裂', '原核细胞一分为二', 'biology', 'bacteria-divide'),
  single('osmosis', '渗透作用', '水沿浓度梯度跨膜', 'biology', 'osmosis-flow'),
];

const cs: Entry[] = [
  single('bubble-sort', '冒泡排序', '相邻元素比较交换', 'cs', 'bubble-sort'),
  single('binary-search', '二分查找', '区间折半逼近目标', 'cs', 'binary-search'),
  single('bfs-expand', '广度优先', '逐层扩展搜索前沿', 'cs', 'bfs-expand'),
  single('dfs-path', '深度优先', '沿路径深入再回溯', 'cs', 'dfs-path'),
  single('stack-push', '栈操作', '元素压入弹出栈顶', 'cs', 'stack-push'),
  single('queue-flow', '队列操作', '队尾入队队首出队', 'cs', 'queue-flow'),
  single('hash-chain', '哈希表', '桶内链表处理冲突', 'cs', 'hash-chain'),
  single('recursion-tree', '递归树', '递归调用树形展开', 'cs', 'recursion-tree'),
  single('heapify', '堆化', '节点下沉上浮维护堆', 'cs', 'heapify'),
  single('graph-edge', '图遍历', '边权逐步松弛更新', 'cs', 'graph-edge'),
  single('linked-list', '链表', '节点指针串联遍历', 'cs', 'linked-list'),
  single('cache-line', '缓存命中', '命中与逐出交替', 'cs', 'cache-line'),
  single('neural-net', '神经网络', '层间信号前向流动', 'cs', 'neural-layers'),
  single('git-merge', 'Git 合并', '分支合并提交', 'cs', 'git-merge'),
];

const optics: Entry[] = [
  single('prism', '棱镜色散', '不同波长折射角分离', 'optics', 'prism-dispers'),
  single('grating', '光栅衍射', '光栅多缝干涉图样', 'optics', 'grating-diffract'),
  single('lens', '凸透镜', '平行光汇聚于焦点', 'optics', 'lens-focus'),
  single('mirror', '凹面镜', '反射光线汇聚', 'optics', 'mirror-reflect'),
  single('polar', '偏振光', '偏振方向选择性透过', 'optics', 'polarization'),
  single('laser', '激光腔', '腔内光来回放大', 'optics', 'laser-cavity'),
  single('fiber', '光纤传输', '纤芯全反射导光', 'optics', 'fiber-tir'),
  single('interf-ring', '等倾干涉', '同心干涉环明暗', 'optics', 'interference-ring'),
  single('thin-film', '增透膜', '膜厚控制反射相位', 'optics', 'thin-film'),
  single('telescope', '望远镜', '物镜像面组成像', 'optics', 'telescope-focus'),
  single('hologram', '全息重建', '参考光干涉重建', 'optics', 'interference-ring'),
  single('michelson-mirror', '迈克尔逊', '分束干涉仪', 'optics', 'interference-ring'),
];

const earth: Entry[] = [
  single('plate', '板块俯冲', '板块碰撞俯冲消减', 'earth', 'plate-subduct'),
  single('volcano', '火山喷发', '岩浆喷出与碎屑', 'earth', 'volcano-erupt'),
  single('seismic', '地震波', '体波与面波传播', 'earth', 'seismic-wave'),
  single('front', '冷锋过境', '冷暖空气交界推进', 'earth', 'cold-front'),
  single('hurricane', '飓风眼', '低压气旋旋转结构', 'earth', 'hurricane-spin'),
  single('ocean', '洋流环流', '海水大规模环流', 'earth', 'ocean-gyre'),
  single('glacier', '冰川运动', '重力驱动冰体缓慢流动', 'earth', 'glacier-flow'),
  single('season', '四季成因', '地轴倾角导致季节', 'earth', 'season-tilt'),
  single('fault', '断层滑动', '岩层沿断层面错动', 'earth', 'fault-slip'),
  single('groundwater', '地下水', '含水层渗透', 'earth', 'groundwater'),
  single('watershed', '流域汇流', '降水地表汇流', 'earth', 'groundwater'),
];

const music: Entry[] = [
  single('metronome', '节拍器', '摆锤左右稳定节拍', 'music', 'metronome'),
  single('string-harm', '弦乐泛音', '弦上驻波与泛音列', 'music', 'string-harmonic'),
  single('drum', '鼓点节奏', '周期性敲击脉冲', 'music', 'drum-pulse'),
  single('tube', '管乐共振', '管中驻波共振模', 'music', 'tube-resonance'),
  single('piano', '钢琴击弦', '琴锤击弦发声', 'music', 'piano-key'),
  single('spectrum', '频谱瀑布', '频率成分随时间分布', 'music', 'spectrum-fall'),
  single('vibrato', '揉弦颤音', '音高周期性微扰', 'music', 'vibrato-pitch'),
  single('beat-mix', '拍频合成', '相近频率合成拍频', 'music', 'beat-mix'),
  single('conductor', '指挥棒', '指挥挥拍', 'music', 'conductor-wave'),
];

const engineering: Entry[] = [
  single('four-bar', '四连杆', '四杆闭环传动', 'engineering', 'four-bar-link'),
  single('cam', '凸轮机构', '凸轮推动从动件', 'engineering', 'cam-follower'),
  single('piston', '活塞冲程', '活塞往复四冲程', 'engineering', 'piston-cycle'),
  single('gear', '齿轮传动', '齿面啮合传递转速', 'engineering', 'gear-train'),
  single('bridge', '桥梁振动', '结构弯曲振动模态', 'engineering', 'bridge-vibrate'),
  single('crane', '塔吊回转', '起重臂回转吊运', 'engineering', 'crane-jib'),
  single('conveyor', '传送带', '皮带连续输送物料', 'engineering', 'conveyor-belt'),
  single('turbine', '涡轮叶片', '流体推动叶轮旋转', 'engineering', 'turbine-spin'),
  single('lever-pulley', '杠杆滑轮', '滑轮组提升', 'engineering', 'lever-pulley'),
];

const existingExpand: Entry[] = [
  ['epsilon-delta', 'ε-δ 定义', '极限严格定义', 'calculus', 'ladder-limit'],
  ['rolle-theorem', '罗尔定理', '区间内存在水平切线', 'calculus', 'derivative-slope'],
  ['mean-value', '拉格朗日中值', '区间内存在平行切线', 'calculus', 'derivative-slope'],
  ['improper-integral', '反常积分', '无穷区间积分收敛', 'calculus', 'integral-bounds'],
  ['parametric-curve', '参数曲线', 'x(t),y(t) 参数运动', 'calculus', 'lissajous'],
  ['unit-circle-trig', '单位圆三角', '三角函数单位圆定义', 'trigonometry', 'phasor-rotate'],
  ['arcsin-wave', '反正弦', 'arcsin 定义域映射', 'trigonometry', 'sine-wave'],
  ['arccos-wave', '反余弦', 'arccos 值域映射', 'trigonometry', 'cosine-wave'],
  ['tan-asymptote', '正切渐近线', 'tan 奇点竖渐近', 'trigonometry', 'derivative-slope'],
  ['cot-period', '余切周期', 'cot 周期振荡', 'trigonometry', 'sine-wave'],
  ['sec-amplify', '正割放大', 'sec 振幅放大', 'trigonometry', 'cosine-wave'],
  ['csc-inverse', '余割倒数', 'csc 与 sin 倒数', 'trigonometry', 'sine-wave'],
  ['half-angle', '半角公式', 'sin(θ/2) 恒等变换', 'trigonometry', 'beat-frequency'],
  ['sum-formula', '和差公式', 'sin(a±b) 展开', 'trigonometry', 'wave-interference'],
  ['desargues', '德萨格定理', '透视三角形共线', 'geometry', 'matrix-pulse'],
  ['penrose-tile', '彭罗斯镶嵌', '非周期镶嵌铺砌', 'geometry', 'voronoi-pulse'],
  ['delone-tri', 'Delaunay 三角', '空圆三角剖分', 'geometry', 'voronoi-pulse'],
  ['steiner-tree', '斯坦纳树', '最短连接网络', 'geometry', 'bifurcation-fork'],
  ['fractal-tree', '分形树', '递归分支生长', 'geometry', 'bifurcation-fork'],
  ['tessellation', '平面镶嵌', '对称群平铺', 'geometry', 'matrix-pulse'],
  ['sn1-reaction', 'SN1 取代', '单分子亲核取代', 'chemistry', 'molecular-bond'],
  ['sn2-reaction', 'SN2 取代', '双分子背面进攻', 'chemistry', 'molecular-bond'],
  ['esterification', '酯化反应', '酸醇脱水成酯', 'chemistry', 'equilibrium-shift'],
  ['hydrolysis', '水解反应', '键断裂加水', 'chemistry', 'redox-transfer'],
  ['polymer-chain', '聚合反应', '单体链式增长', 'chemistry', 'molecular-bond'],
  ['catalyst-surface', '催化表面', '吸附活化脱附', 'chemistry', 'reaction-diffusion'],
  ['ph-indicator', 'pH 指示剂', '酸碱变色范围', 'chemistry', 'titration-endpoint'],
  ['galvanic-cell', '原电池', '自发氧化还原电流', 'chemistry', 'redox-transfer'],
  ['electrolysis-cell', '电解池', '外加电压驱动', 'chemistry', 'redox-transfer'],
  ['chromatography', '色谱分离', '组分沿柱洗脱', 'chemistry', 'equilibrium-shift'],
  ['mass-spec', '质谱扫描', 'm/z 峰扫描', 'chemistry', 'nmr-flip'],
  ['ir-spectrum', '红外光谱', '键振动吸收峰', 'chemistry', 'fourier-bars'],
  ['wormhole', '虫洞', '时空短程连接', 'relativity', 'gravitational-lens'],
  ['cosmological-constant', '宇宙学常数', '加速膨胀驱动', 'relativity', 'hubble-expansion'],
  ['gravitational-redshift', '引力红移', '光子爬出势阱变红', 'relativity', 'redshift-spectrum'],
  ['shapiro-delay', '夏皮罗延迟', '光线引力场延迟', 'relativity', 'gravitational-lens'],
  ['ergosphere', '能层', '克尔黑洞能层', 'relativity', 'accretion-disk'],
  ['penrose-process', '彭罗斯过程', '能层能量提取', 'relativity', 'accretion-disk'],
  ['alcubierre', '阿库别里驱动', '曲率驱动气泡', 'relativity', 'light-cone'],
  ['blandford-znajek', 'BZ 过程', '黑洞磁场能量提取', 'relativity', 'pulsar-beam'],
  ['naked-singularity', '裸奇点', '无视界奇点', 'relativity', 'dirac-impulse'],
  ['ads-cft', 'AdS/CFT', '体边界对偶', 'relativity', 'light-cone'],
  ['exoplanet-transit', '系外行星凌日', '亮度周期性下降', 'astronomy', 'logistic-curve'],
  ['habitable-zone', '宜居带', '液态水轨道带', 'astronomy', 'orbit-ellipse'],
  ['tidal-heating', '潮汐加热', '椭圆轨道摩擦生热', 'astronomy', 'tidal-bulge'],
  ['ring-resonance', '环系共振', '牧羊卫星共振', 'astronomy', 'orbital-resonance'],
  ['stellar-wind-bubble', '恒星风泡', '星风吹出泡状结构', 'astronomy', 'radial-particle-wind'],
  ['planetary-migration', '行星迁移', '盘力轨道内移', 'astronomy', 'orbit-ellipse'],
  ['dust-disk', '原行星盘', '尘埃盘螺旋结构', 'astronomy', 'spiral-golden'],
  ['microlensing', '微引力透镜', '前景星放大背景', 'astronomy', 'gravitational-lens'],
  ['fast-radio-burst', '快速射电暴', '毫秒射电爆发', 'astronomy', 'dirac-impulse'],
  ['pulsar-glitch', '脉冲星跳变', '中子星转速突变', 'astronomy', 'pulsar-beam'],
  ['top-quark', '顶夸克', '最重夸克衰变', 'quantum', 'exponential-decay'],
  ['higgs-boson', '希格斯玻色子', '质量赋予机制', 'quantum', 'energy-levels'],
  ['gluon-jet', '胶子喷注', 'QCD 强子化喷流', 'quantum', 'particle-cascade'],
  ['muon-g2', 'μ 子 g-2', '反常磁矩进动', 'quantum', 'spin-precession'],
  ['anyon-braid', '任意子编织', '拓扑量子统计', 'quantum', 'trefoil-knot'],
  ['majorana-zero', '马约拉纳零模', '拓扑零能态', 'quantum', 'tunnel-barrier'],
  ['quantum-dot', '量子点', '受限能级跃迁', 'quantum', 'energy-levels'],
  ['superconduct-qubit', '超导量子比特', '约瑟夫森结振荡', 'quantum', 'rlc-oscillation'],
];

const all: Entry[] = [
  ...biology,
  ...cs,
  ...optics,
  ...earth,
  ...music,
  ...engineering,
  ...existingExpand,
];

const EXPANSION_TARGET = all.length;

const catalogTs = `import type { IconCategory, IconDefinition, TemplateName } from './types.ts';

function icon(
  id: string,
  title: string,
  description: string,
  category: IconCategory,
  template: TemplateName,
  seed: number,
): IconDefinition {
  return { id, title, description, category, template, seed };
}

/** 扩展批次：每概念一图标，共 ${all.length} 个 */
export const EXPANSION_CATALOG: IconDefinition[] = [
${all
  .map(
    ([id, title, desc, cat, tpl], i) =>
      `  icon('${id}', '${title}', '${desc}', '${cat}', '${tpl}', ${364 + i}),`,
  )
  .join('\n')}
];
`;

writeFileSync(path.join(__dirname, 'catalog-expansion.ts'), catalogTs, 'utf8');
console.log(`Wrote catalog-expansion.ts (${all.length} icons)`);
console.log('templates-expansion.ts 需手动维护，请勿从此脚本覆盖');
