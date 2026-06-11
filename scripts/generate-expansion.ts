/**
 * 一次性生成 catalog-expansion.ts（254 条）与 templates-expansion.ts（67 模板）
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

function triple(
  base: string,
  titles: [string, string, string],
  desc: string,
  category: Cat,
  template: string,
): Entry[] {
  return titles.map((title, i) => [`${base}-${i + 1}`, title, desc, category, template]);
}

const biology: Entry[] = [
  ...triple('dna-helix', ['DNA 双螺旋', '基因双链', '核酸螺旋'], '碱基配对双链盘绕', 'biology', 'dna-helix'),
  ...triple('dna-replicate', ['DNA 复制', '半保留复制', '复制叉推进'], '双链解旋逐段复制', 'biology', 'dna-replicate'),
  ...triple('rna-transcribe', ['RNA 转录', 'mRNA 合成', '转录延伸'], 'DNA 模板合成 RNA', 'biology', 'rna-transcribe'),
  ...triple('protein-fold', ['蛋白质折叠', '多肽折叠', '结构域形成'], '氨基酸链折叠成功能构象', 'biology', 'protein-fold'),
  ...triple('cell-membrane', ['细胞膜通道', '离子通道', '膜运输'], '膜蛋白通道开闭转运', 'biology', 'cell-membrane'),
  ...triple('photosynthesis', ['光合作用', '光反应', '碳固定'], '光能转化学能循环', 'biology', 'photosynthesis-lab'),
  ...triple('neuron-pulse', ['动作电位', '神经冲动', '轴突传导'], '膜电位去极化复极化', 'biology', 'neuron-pulse'),
  ...triple('heartbeat-ecg', ['心电图', '心室收缩', '脉搏节律'], '心电 QRS 周期性搏动', 'biology', 'heartbeat-ecg'),
  ...triple('mitosis', ['有丝分裂', '染色体分离', '胞质分裂'], '细胞分裂周期推进', 'biology', 'mitosis-split'),
  ...triple('virus-infect', ['病毒感染', '病毒侵染', '宿主入侵'], '病毒附着穿入复制', 'biology', 'virus-infect'),
  ...triple('enzyme-bind', ['酶促反应', '酶底物复合', '催化循环'], '锁钥结合降低能垒', 'biology', 'enzyme-binding'),
  ...triple('blood-flow', ['血液循环', '动脉血流', '毛细血管交换'], '心脏泵血循环全身', 'biology', 'blood-flow'),
  ...triple('muscle-contract', ['肌肉收缩', '肌丝滑行', '肌节缩短'], '肌动肌球蛋白相对滑动', 'biology', 'muscle-contract'),
  ...triple('bacteria-divide', ['细菌分裂', '二分裂', '菌群增殖'], '原核细胞一分为二', 'biology', 'bacteria-divide'),
  ...triple('osmosis', ['渗透作用', '水分子跨膜', '渗透平衡'], '水沿浓度梯度跨膜', 'biology', 'osmosis-flow'),
];

const cs: Entry[] = [
  ...triple('bubble-sort', ['冒泡排序', '相邻交换', '冒泡上浮'], '相邻元素比较交换', 'cs', 'bubble-sort'),
  ...triple('binary-search', ['二分查找', '折半搜索', '有序查找'], '区间折半逼近目标', 'cs', 'binary-search'),
  ...triple('bfs-expand', ['广度优先', 'BFS 扩散', '层序遍历'], '逐层扩展搜索前沿', 'cs', 'bfs-expand'),
  ...triple('dfs-path', ['深度优先', 'DFS 回溯', '栈式深入'], '沿路径深入再回溯', 'cs', 'dfs-path'),
  ...triple('stack-push', ['栈操作', '压栈弹栈', '后进先出'], '元素压入弹出栈顶', 'cs', 'stack-push'),
  ...triple('queue-flow', ['队列操作', '入队出队', '先进先出'], '队尾入队队首出队', 'cs', 'queue-flow'),
  ...triple('hash-chain', ['哈希表', '链地址法', '冲突消解'], '桶内链表处理冲突', 'cs', 'hash-chain'),
  ...triple('recursion-tree', ['递归树', '分治递归', '调用栈展开'], '递归调用树形展开', 'cs', 'recursion-tree'),
  ...triple('heapify', ['堆化', '优先队列', '堆调整'], '节点下沉上浮维护堆', 'cs', 'heapify'),
  ...triple('graph-edge', ['图遍历', '边松弛', '最短路径'], '边权逐步松弛更新', 'cs', 'graph-edge'),
  ...triple('linked-list', ['链表', '指针链接', '节点插入'], '节点指针串联遍历', 'cs', 'linked-list'),
  ...triple('cache-line', ['缓存命中', 'LRU 替换', '缓存行'], '命中与逐出交替', 'cs', 'cache-line'),
  ...triple('neural-net', ['神经网络', '前向传播', '反向梯度'], '层间信号前向流动', 'cs', 'neural-layers'),
  ['git-merge', 'Git 合并', '分支合并提交', 'cs', 'git-merge'],
];

const optics: Entry[] = [
  ...triple('prism', ['棱镜色散', '白光色散', '折射分光'], '不同波长折射角分离', 'optics', 'prism-dispers'),
  ...triple('grating', ['光栅衍射', '衍射条纹', '夫琅禾费衍射'], '光栅多缝干涉图样', 'optics', 'grating-diffract'),
  ...triple('lens', ['凸透镜', '透镜成像', '焦点汇聚'], '平行光汇聚于焦点', 'optics', 'lens-focus'),
  ...triple('mirror', ['凹面镜', '反射聚焦', '镜面成像'], '反射光线汇聚', 'optics', 'mirror-reflect'),
  ...triple('polar', ['偏振光', '偏振片旋转', '马吕斯定律'], '偏振方向选择性透过', 'optics', 'polarization'),
  ...triple('laser', ['激光腔', '受激辐射', '激光振荡'], '腔内光来回放大', 'optics', 'laser-cavity'),
  ...triple('fiber', ['光纤传输', '全反射导光', '光导纤维'], '纤芯全反射导光', 'optics', 'fiber-tir'),
  ...triple('interf-ring', ['等倾干涉', '牛顿环', '薄膜干涉'], '同心干涉环明暗', 'optics', 'interference-ring'),
  ...triple('thin-film', ['增透膜', '薄膜相位', '多层膜'], '膜厚控制反射相位', 'optics', 'thin-film'),
  ['telescope', '望远镜', '物镜像面组成像', 'optics', 'telescope-focus'],
  ['hologram', '全息重建', '参考光干涉重建', 'optics', 'interference-ring'],
  ['michelson-mirror', '迈克尔逊', '分束干涉仪', 'optics', 'interference-ring'],
];

const earth: Entry[] = [
  ...triple('plate', ['板块俯冲', '俯冲带', '大洋板块'], '板块碰撞俯冲消减', 'earth', 'plate-subduct'),
  ...triple('volcano', ['火山喷发', '岩浆喷发', '火山口'], '岩浆喷出与碎屑', 'earth', 'volcano-erupt'),
  ...triple('seismic', ['地震波', 'P 波传播', 'S 波横波'], '体波与面波传播', 'earth', 'seismic-wave'),
  ...triple('front', ['冷锋过境', '暖锋抬升', '锋面雨带'], '冷暖空气交界推进', 'earth', 'cold-front'),
  ...triple('hurricane', ['飓风眼', '气旋旋转', '台风涡旋'], '低压气旋旋转结构', 'earth', 'hurricane-spin'),
  ...triple('ocean', ['洋流环流', '赤道环流', '温盐环流'], '海水大规模环流', 'earth', 'ocean-gyre'),
  ...triple('glacier', ['冰川运动', '冰河推进', '冰舌延伸'], '重力驱动冰体缓慢流动', 'earth', 'glacier-flow'),
  ...triple('season', ['四季成因', '地轴倾斜', '日照变化'], '地轴倾角导致季节', 'earth', 'season-tilt'),
  ...triple('fault', ['断层滑动', '走滑断层', '地震断层'], '岩层沿断层面错动', 'earth', 'fault-slip'),
  ['groundwater', '地下水', '含水层渗透', 'earth', 'groundwater'],
  ['watershed', '流域汇流', '降水地表汇流', 'earth', 'groundwater'],
];

const music: Entry[] = [
  ...triple('metronome', ['节拍器', '稳定节拍', '节奏器'], '摆锤左右稳定节拍', 'music', 'metronome'),
  ...triple('string-harm', ['弦乐泛音', '驻波泛音', '弦振动'], '弦上驻波与泛音列', 'music', 'string-harmonic'),
  ...triple('drum', ['鼓点节奏', '打击节拍', '底鼓脉冲'], '周期性敲击脉冲', 'music', 'drum-pulse'),
  ...triple('tube', ['管乐共振', '开管闭管', '气柱共振'], '管中驻波共振模', 'music', 'tube-resonance'),
  ...triple('piano', ['钢琴击弦', '琴键击弦', '锤击琴弦'], '琴锤击弦发声', 'music', 'piano-key'),
  ...triple('spectrum', ['频谱瀑布', '频谱分析', '音色频谱'], '频率成分随时间分布', 'music', 'spectrum-fall'),
  ...triple('vibrato', ['揉弦颤音', '音高颤动', '颤音效果'], '音高周期性微扰', 'music', 'vibrato-pitch'),
  ...triple('beat-mix', ['拍频合成', '双音拍频', '拍音'], '相近频率合成拍频', 'music', 'beat-mix'),
  ['conductor', '指挥棒', '指挥挥拍', 'music', 'conductor-wave'],
];

const engineering: Entry[] = [
  ...triple('four-bar', ['四连杆', '曲柄摇杆', '连杆机构'], '四杆闭环传动', 'engineering', 'four-bar-link'),
  ...triple('cam', ['凸轮机构', '凸轮从动', '轮廓传动'], '凸轮推动从动件', 'engineering', 'cam-follower'),
  ...triple('piston', ['活塞冲程', '内燃冲程', '往复运动'], '活塞往复四冲程', 'engineering', 'piston-cycle'),
  ...triple('gear', ['齿轮传动', '齿轮啮合', '齿比传动'], '齿面啮合传递转速', 'engineering', 'gear-train'),
  ...triple('bridge', ['桥梁振动', '悬索振动', '共振模态'], '结构弯曲振动模态', 'engineering', 'bridge-vibrate'),
  ...triple('crane', ['塔吊回转', '起重臂', '吊装回转'], '起重臂回转吊运', 'engineering', 'crane-jib'),
  ...triple('conveyor', ['传送带', '皮带输送', '物料输送'], '皮带连续输送物料', 'engineering', 'conveyor-belt'),
  ...triple('turbine', ['涡轮叶片', '叶轮旋转', '水轮机'], '流体推动叶轮旋转', 'engineering', 'turbine-spin'),
  ['lever-pulley', '杠杆滑轮', '滑轮组提升', 'engineering', 'lever-pulley'],
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

if (all.length !== 254) {
  throw new Error(`Expected 254 expansion entries, got ${all.length}`);
}

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

/** 扩展批次：246 → 500，共 ${all.length} 个 */
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

// --- templates ---
const TEMPLATE_BODIES: Record<string, string> = {
    'dna-helix': `.st{stroke:currentColor;stroke-width:1.35;fill:none;stroke-linecap:round}.r{animation:rt VARd linear infinite;transform-origin:12px 12px}@keyframes rt{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><path class="st r" d="M8 4c2 3 2 6 0 9s-2 6 0 9"/><path class="st r" d="M16 4c-2 3-2 6 0 9s2 6 0 9" style="animation-direction:reverse"/><line class="st" x1="9" y1="7" x2="15" y2="8"/><line class="st" x1="9" y1="12" x2="15" y2="11"/><line class="st" x1="9" y1="17" x2="15" y2="16`,
    'dna-replicate': `.f{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.s{animation:un VARd ease-in-out infinite;transform-origin:12px 12px}@keyframes un{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.35)}}</style><path class="f s" d="M6 5v14"/><path class="f s" d="M18 5v14"/><path class="f" d="M6 8h12"/><path class="f" d="M6 12h12"/><path class="f" d="M6 16h12`,
    'rna-transcribe': `.f{stroke:currentColor;stroke-width:1.4;fill:none}.d{stroke:currentColor;stroke-width:1.2;opacity:.35}.p{fill:currentColor;animation:mv VARd linear infinite}@keyframes mv{0%{transform:translate(5px,10px)}100%{transform:translate(18px,10px)}}</style><line class="d" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="8" x2="4" y2="14"/><path class="f" d="M18 8v6"/><circle class="p" cx="0" cy="0" r="1.2`,
    'protein-fold': `.f{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.ch{animation:fd VARd ease-in-out infinite;transform-origin:12px 10px}@keyframes fd{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(35deg)}}</style><path class="f ch" d="M4 14 L8 8 L12 12 L16 6 L20 10`,
    'cell-membrane': `.m{stroke:currentColor;stroke-width:1.5;fill:none;opacity:.4}.g{fill:currentColor;animation:op VARd ease-in-out infinite}@keyframes op{0%,100%{transform:translateX(0);opacity:.3}50%{transform:translateX(2px);opacity:1}}</style><ellipse class="m" cx="12" cy="12" rx="8" ry="5"/><circle class="g" cx="14" cy="12" r="1.5"/><circle class="g" cx="10" cy="12" r="1.5" style="animation-delay:.3s`,
    'photosynthesis-lab': `.f{stroke:currentColor;stroke-width:1.3;fill:none}.s{fill:currentColor;animation:sn VARd linear infinite}.l{animation:ph VARd ease-in-out infinite}@keyframes sn{0%{transform:translate(-2px,4px);opacity:.2}50%{opacity:1}100%{transform:translate(2px,-4px);opacity:.2}}@keyframes ph{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="f" d="M12 18 Q12 10 8 6"/><circle class="s" cx="4" cy="6" r="1.5"/><circle class="f l" cx="12" cy="10" r="2`,
    'neuron-pulse': `.ax{stroke:currentColor;stroke-width:1.5;fill:none}.pl{fill:currentColor;animation:pu VARd linear infinite}@keyframes pu{0%{transform:translate(4px,12px);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(20px,12px);opacity:0}}</style><line class="ax" x1="4" y1="12" x2="20" y2="12"/><circle class="pl" cx="0" cy="0" r="1.4`,
    'heartbeat-ecg': `.ecg{stroke:currentColor;stroke-width:1.5;fill:none;stroke-linecap:round;stroke-dasharray:40;animation:ec VARd linear infinite}@keyframes ec{0%{stroke-dashoffset:40}100%{stroke-dashoffset:0}}</style><path class="ecg" d="M2 12h4l2-4 2 8 2-6 2 4h6`,
    'mitosis-split': `.c{stroke:currentColor;stroke-width:1.4;fill:none}.n{fill:currentColor;animation:sp VARd ease-in-out infinite}@keyframes sp{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}</style><ellipse class="c" cx="12" cy="12" rx="7" ry="4"/><circle class="n" cx="9" cy="12" r="1.2"/><circle class="n" cx="15" cy="12" r="1.2" style="animation-delay:.15s`,
    'virus-infect': `.v{fill:currentColor;animation:at VARd ease-in-out infinite}.h{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}@keyframes at{0%,100%{transform:translate(16px,12px)}50%{transform:translate(8px,12px)}}</style><circle class="h" cx="8" cy="12" r="4"/><circle class="v" cx="0" cy="0" r="1.8"/><line class="v" x1="0" y1="0" x2="2" y2="-2"/><line class="v" x1="0" y1="0" x2="-2" y2="2`,
    'enzyme-binding': `.e{fill:currentColor}.s{fill:currentColor;animation:bd VARd ease-in-out infinite}@keyframes bd{0%,100%{transform:translate(16px,12px)}45%,55%{transform:translate(11px,12px)}}</style><ellipse cx="8" cy="12" rx="4" ry="3" class="e" opacity=".5"/><circle class="s" cx="0" cy="0" r="1.6`,
    'blood-flow': `.p{fill:currentColor;animation:fl VARd linear infinite}.v{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}@keyframes fl{0%{transform:translate(4px,12px)}100%{transform:translate(20px,12px)}}</style><path class="v" d="M4 12c3-2 6 2 8 0s5-2 8 0"/><circle class="p" cx="0" cy="0" r="1.1`,
    'muscle-contract': `.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.z{animation:ct VARd ease-in-out infinite;transform-origin:12px 12px}@keyframes ct{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.7)}}</style><line class="f" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="14" x2="20" y2="14"/><g class="z"><line class="f" x1="8" y1="8" x2="8" y2="16"/><line class="f" x1="16" y1="8" x2="16" y2="16"/></g>`,
    'bacteria-divide': `.b{stroke:currentColor;stroke-width:1.4;fill:none}.d{animation:dv VARd ease-in-out infinite;transform-origin:12px 12px}@keyframes dv{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.4)}}</style><ellipse class="b d" cx="12" cy="12" rx="5" ry="3"/><line class="b" x1="12" y1="9" x2="12" y2="15`,
    'osmosis-flow': `.m{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.w{fill:currentColor;animation:os VARd ease-in-out infinite}@keyframes os{0%,100%{transform:translateX(-2px)}50%{transform:translateX(2px)}}</style><line class="m" x1="12" y1="5" x2="12" y2="19"/><circle class="w" cx="8" cy="12" r="1"/><circle class="w" cx="16" cy="12" r="1.4" style="animation-delay:.2s`,
    'bubble-sort': `.b{fill:currentColor}.b1{animation:s1 VARd ease-in-out infinite}.b2{animation:s2 VARd ease-in-out infinite}.b3{animation:s3 VARd ease-in-out infinite}@keyframes s1{0%,100%{transform:translate(6px,14px)}50%{transform:translate(10px,14px)}}@keyframes s2{0%,100%{transform:translate(10px,10px)}50%{transform:translate(14px,10px)}}@keyframes s3{0%,100%{transform:translate(14px,6px)}50%{transform:translate(10px,6px)}}</style><rect class="b b1" x="0" y="0" width="3" height="6" rx=".5"/><rect class="b b2" x="0" y="0" width="3" height="10" rx=".5"/><rect class="b b3" x="0" y="0" width="3" height="14" rx=".5`,
    'binary-search': `.r{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.m{fill:currentColor;animation:hl VARd ease-in-out infinite}@keyframes hl{0%,100%{transform:translate(4px,12px);opacity:.4}50%{transform:translate(12px,12px);opacity:1}}</style><rect class="r" x="3" y="8" width="18" height="8" rx="1"/><rect class="m" x="0" y="0" width="4" height="6" rx=".5`,
    'bfs-expand': `.n{fill:currentColor;opacity:.35;animation:ex VARd ease-out infinite}.n1{animation-delay:0s}.n2{animation-delay:.15s}.n3{animation-delay:.3s}@keyframes ex{0%{transform:scale(.5);opacity:.2}100%{transform:scale(1.2);opacity:1}}</style><circle class="n n1" cx="12" cy="12" r="2"/><circle class="n n2" cx="7" cy="12" r="1.5"/><circle class="n n3" cx="17" cy="12" r="1.5"/><circle class="n n2" cx="12" cy="7" r="1.5"/><circle class="n n3" cx="12" cy="17" r="1.5`,
    'dfs-path': `.e{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.p{fill:currentColor;animation:df VARd linear infinite}@keyframes df{0%{transform:translate(12px,17px)}33%{transform:translate(12px,12px)}66%{transform:translate(7px,7px)}100%{transform:translate(12px,7px)}}</style><line class="e" x1="12" y1="17" x2="12" y2="12"/><line class="e" x1="12" y1="12" x2="7" y2="7"/><line class="e" x1="7" y1="7" x2="12" y2="7"/><circle class="p" cx="0" cy="0" r="1.5`,
    'stack-push': `.st{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.b{fill:currentColor;animation:ps VARd ease-in-out infinite}@keyframes ps{0%,100%{transform:translate(10px,16px);opacity:1}50%{transform:translate(10px,10px);opacity:1}}</style><rect class="st" x="6" y="6" width="8" height="14" rx="1"/><rect class="b" x="0" y="0" width="6" height="2" rx=".4`,
    'queue-flow': `.q{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.b{fill:currentColor;animation:qu VARd linear infinite}@keyframes qu{0%{transform:translate(5px,12px)}100%{transform:translate(18px,12px)}}</style><line class="q" x1="4" y1="10" x2="20" y2="10"/><line class="q" x1="4" y1="14" x2="20" y2="14"/><rect class="b" x="0" y="0" width="3" height="3" rx=".4`,
    'hash-chain': `.b{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.d{fill:currentColor;animation:ch VARd ease-in-out infinite}@keyframes ch{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><rect class="b" x="5" y="8" width="4" height="8"/><rect class="b" x="10" y="8" width="4" height="8"/><rect class="b" x="15" y="8" width="4" height="8"/><circle class="d" cx="7" cy="11" r="1"/><circle class="d" cx="12" cy="13" r="1"/><circle class="d" cx="17" cy="11" r="1`,
    'recursion-tree': `.e{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.4}.n{fill:currentColor;animation:tw VARd ease-in-out infinite}@keyframes tw{0%,100%{opacity:.4}50%{opacity:1}}</style><line class="e" x1="12" y1="5" x2="7" y2="11"/><line class="e" x1="12" y1="5" x2="17" y2="11"/><line class="e" x1="7" y1="11" x2="5" y2="17"/><line class="e" x1="7" y1="11" x2="9" y2="17"/><circle class="n" cx="12" cy="5" r="1.5`,
    'heapify': `.b{fill:currentColor;animation:hp VARd ease-in-out infinite;transform-origin:12px 14px}@keyframes hp{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}</style><rect x="10" y="6" width="4" height="3" rx=".4" class="b"/><rect x="6" y="11" width="4" height="3" rx=".4" class="b" style="animation-delay:.1s"/><rect x="14" y="11" width="4" height="3" rx=".4" class="b" style="animation-delay:.2s"/><rect x="10" y="16" width="4" height="3" rx=".4" class="b" style="animation-delay:.3s`,
    'graph-edge': `.e{stroke:currentColor;stroke-width:1.3;fill:none;stroke-dasharray:6;animation:ed VARd linear infinite}.n{fill:currentColor}@keyframes ed{0%{stroke-dashoffset:12}100%{stroke-dashoffset:0}}</style><circle class="n" cx="6" cy="12" r="1.8"/><circle class="n" cx="18" cy="8" r="1.8"/><circle class="n" cx="18" cy="16" r="1.8"/><line class="e" x1="6" y1="12" x2="18" y2="8"/><line class="e" x1="6" y1="12" x2="18" y2="16`,
    'linked-list': `.n{fill:currentColor}.a{stroke:currentColor;stroke-width:1.2;fill:none;animation:lk VARd linear infinite}@keyframes lk{0%{stroke-dashoffset:8}100%{stroke-dashoffset:0}}</style><circle class="n" cx="6" cy="12" r="2"/><circle class="n" cx="12" cy="12" r="2"/><circle class="n" cx="18" cy="12" r="2"/><line class="a" x1="8" y1="12" x2="10" y2="12" stroke-dasharray="4"/><line class="a" x1="14" y1="12" x2="16" y2="12" stroke-dasharray="4`,
    'cache-line': `.h{fill:currentColor;opacity:.35;animation:hi VARd ease-in-out infinite}.m{animation:mi VARd ease-in-out infinite}@keyframes hi{0%,100%{opacity:.2}50%{opacity:1}}@keyframes mi{0%,100%{opacity:1}50%{opacity:.2}}</style><rect class="h" x="4" y="8" width="4" height="8" rx=".5"/><rect class="h m" x="10" y="8" width="4" height="8" rx=".5"/><rect class="h" x="16" y="8" width="4" height="8" rx=".5`,
    'neural-layers': `.l{fill:currentColor;opacity:.4;animation:np VARd ease-in-out infinite}.l2{animation-delay:.2s}.l3{animation-delay:.4s}@keyframes np{0%,100%{opacity:.25}50%{opacity:1}}</style><circle class="l" cx="5" cy="8" r="1.2"/><circle class="l" cx="5" cy="16" r="1.2"/><circle class="l l2" cx="12" cy="6" r="1.2"/><circle class="l l2" cx="12" cy="12" r="1.2"/><circle class="l l2" cx="12" cy="18" r="1.2"/><circle class="l l3" cx="19" cy="12" r="1.2`,
    'git-merge': `.b{stroke:currentColor;stroke-width:1.3;fill:none}.c{fill:currentColor;animation:mg VARd ease-in-out infinite}@keyframes mg{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><path class="b" d="M6 6v6a3 3 0 003 3h6"/><path class="b" d="M18 6v6a3 3 0 01-3 3"/><circle class="c" cx="6" cy="6" r="1.5"/><circle class="c" cx="18" cy="6" r="1.5"/><circle class="c" cx="15" cy="18" r="1.5`,
    'prism-dispers': `.p{fill:none;stroke:currentColor;stroke-width:1.3}.r{stroke:currentColor;stroke-width:1.2;animation:ds VARd ease-in-out infinite}@keyframes ds{0%,100%{opacity:.3}50%{opacity:1}}</style><polygon class="p" points="10,6 14,12 10,18 6,12"/><line class="r" x1="2" y1="10" x2="6" y2="12"/><line class="r" x1="14" y1="11" x2="22" y2="9" style="animation-delay:.1s"/><line class="r" x1="14" y1="12" x2="22" y2="12"/><line class="r" x1="14" y1="13" x2="22" y2="15" style="animation-delay:.2s`,
    'grating-diffract': `.g{stroke:currentColor;stroke-width:1.2;opacity:.35}.d{stroke:currentColor;stroke-width:1.2;animation:df VARd ease-in-out infinite}@keyframes df{0%,100%{opacity:.2}50%{opacity:1}}</style><line class="g" x1="10" y1="4" x2="10" y2="20"/><line class="g" x1="12" y1="4" x2="12" y2="20"/><line class="g" x1="14" y1="4" x2="14" y2="20"/><line class="d" x1="2" y1="12" x2="10" y2="12"/><line class="d" x1="14" y1="10" x2="22" y2="8"/><line class="d" x1="14" y1="14" x2="22" y2="16`,
    'lens-focus': `.l{stroke:currentColor;stroke-width:1.4;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:fc VARd ease-in-out infinite}@keyframes fc{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="l" d="M8 5 Q12 12 8 19"/><path class="l" d="M16 5 Q12 12 16 19"/><line class="r" x1="2" y1="9" x2="8" y2="10"/><line class="r" x1="2" y1="15" x2="8" y2="14"/><line class="r" x1="16" y1="10" x2="22" y2="12"/><line class="r" x1="16" y1="14" x2="22" y2="12`,
    'mirror-reflect': `.m{stroke:currentColor;stroke-width:1.5;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:rf VARd ease-in-out infinite}@keyframes rf{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="m" d="M6 18 Q12 6 18 18"/><line class="r" x1="2" y1="8" x2="9" y2="10"/><line class="r" x1="9" y1="10" x2="20" y2="6`,
    'polarization': `.f{stroke:currentColor;stroke-width:1.4;fill:none}.w{animation:pl VARd linear infinite;transform-origin:12px 12px}@keyframes pl{0%{transform:rotate(0deg)}100%{transform:rotate(90deg)}}</style><line class="f" x1="4" y1="12" x2="20" y2="12"/><rect class="f w" x="10" y="8" width="4" height="8" rx=".5`,
    'laser-cavity': `.m{stroke:currentColor;stroke-width:1.4;fill:none;opacity:.35}.b{fill:currentColor;animation:lc VARd linear infinite}@keyframes lc{0%{transform:translate(6px,12px)}100%{transform:translate(18px,12px)}}</style><line class="m" x1="6" y1="8" x2="6" y2="16"/><line class="m" x1="18" y1="8" x2="18" y2="16"/><circle class="b" cx="0" cy="0" r="1.3`,
    'fiber-tir': `.f{stroke:currentColor;stroke-width:1.5;fill:none}.p{fill:currentColor;animation:fi VARd linear infinite}@keyframes fi{0%{transform:translate(4px,6px)}100%{transform:translate(18px,18px)}}</style><path class="f" d="M4 6 Q12 12 4 18"/><circle class="p" cx="0" cy="0" r="1.2`,
    'interference-ring': `.r{stroke:currentColor;stroke-width:1.2;fill:none;animation:rg VARd ease-in-out infinite}@keyframes rg{0%,100%{opacity:.25;transform:scale(.9)}50%{opacity:1;transform:scale(1.05)}}</style><circle class="r" cx="12" cy="12" r="3"/><circle class="r" cx="12" cy="12" r="5" style="animation-delay:.15s"/><circle class="r" cx="12" cy="12" r="7" style="animation-delay:.3s`,
    'thin-film': `.f{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.w{stroke:currentColor;stroke-width:1.2;animation:tm VARd ease-in-out infinite}@keyframes tm{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="f" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="14" x2="20" y2="14"/><line class="w" x1="2" y1="12" x2="10" y2="12"/><line class="w" x1="14" y1="12" x2="22" y2="12`,
    'telescope-focus': `.t{stroke:currentColor;stroke-width:1.4;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:tf VARd ease-in-out infinite}@keyframes tf{0%,100%{opacity:.3}50%{opacity:1}}</style><circle class="t" cx="8" cy="12" r="3"/><line class="t" x1="11" y1="12" x2="18" y2="12"/><line class="r" x1="2" y1="10" x2="5" y2="11"/><line class="r" x1="2" y1="14" x2="5" y2="13"/><line class="r" x1="18" y1="12" x2="22" y2="12`,
    'plate-subduct': `.p{stroke:currentColor;stroke-width:1.4;fill:none;animation:sb VARd ease-in-out infinite;transform-origin:12px 16px}@keyframes sb{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-8deg)}}</style><path class="p" d="M4 16h16"/><path class="p" d="M14 16 L18 8"/><path class="p" d="M10 16 L6 10`,
    'volcano-erupt': `.v{stroke:currentColor;stroke-width:1.4;fill:none}.a{fill:currentColor;animation:er VARd ease-out infinite}@keyframes er{0%,70%{transform:translateY(0);opacity:0}75%{opacity:1}100%{transform:translateY(-6px);opacity:0}}</style><path class="v" d="M8 18 L12 8 L16 18 Z"/><circle class="a" cx="12" cy="10" r="1"/><circle class="a" cx="11" cy="8" r=".8" style="animation-delay:.1s"/><circle class="a" cx="13" cy="7" r=".8" style="animation-delay:.2s`,
    'seismic-wave': `.g{stroke:currentColor;stroke-width:1.25;opacity:.3}.w{stroke:currentColor;stroke-width:1.4;fill:none;stroke-dasharray:8;animation:sw VARd linear infinite}@keyframes sw{0%{stroke-dashoffset:16}100%{stroke-dashoffset:0}}</style><line class="g" x1="2" y1="18" x2="22" y2="18"/><path class="w" d="M4 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0`,
    'cold-front': `.c{stroke:currentColor;stroke-width:1.4;fill:none;animation:cf VARd linear infinite}@keyframes cf{0%{transform:translateX(-2px)}100%{transform:translateX(2px)}}</style><path class="c" d="M4 8 L12 8 L10 18 L18 18"/><path class="c" d="M12 8 L20 12" opacity=".5`,
    'hurricane-spin': `.s{stroke:currentColor;stroke-width:1.3;fill:none;animation:sp VARd linear infinite;transform-origin:12px 12px}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><path class="s" d="M12 6c3 2 4 5 2 8s-5 4-7 2"/><path class="s" d="M12 18c-3-2-4-5-2-8s5-4 7-2"/><circle cx="12" cy="12" r="1.5" fill="currentColor`,
    'ocean-gyre': `.o{stroke:currentColor;stroke-width:1.3;fill:none;animation:gy VARd linear infinite;transform-origin:12px 12px}@keyframes gy{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><ellipse class="o" cx="12" cy="12" rx="8" ry="5"/><ellipse class="o" cx="12" cy="12" rx="5" ry="3" style="animation-direction:reverse`,
    'glacier-flow': `.g{stroke:currentColor;stroke-width:1.4;fill:none;animation:gl VARd ease-in-out infinite}@keyframes gl{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><path class="g" d="M4 10 L10 8 L16 10 L20 14 L16 18 L8 18 Z`,
    'season-tilt': `.e{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.a{stroke:currentColor;stroke-width:1.4;animation:tl VARd ease-in-out infinite;transform-origin:12px 12px}@keyframes tl{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}</style><circle class="e" cx="12" cy="12" r="2"/><line class="a" x1="12" y1="12" x2="12" y2="5"/><ellipse class="e" cx="12" cy="12" rx="9" ry="3`,
    'fault-slip': `.f{stroke:currentColor;stroke-width:1.4;fill:none}.s{animation:sl VARd ease-in-out infinite;transform-origin:12px 12px}@keyframes sl{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><path class="f s" d="M4 10 L20 8"/><path class="f" d="M4 14 L20 16`,
    'groundwater': `.g{stroke:currentColor;stroke-width:1.2;opacity:.35;fill:none}.d{fill:currentColor;animation:gw VARd ease-in-out infinite}@keyframes gw{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><path class="g" d="M4 14 Q12 10 20 14"/><circle class="d" cx="8" cy="15" r="1"/><circle class="d" cx="14" cy="14" r="1.2"/><circle class="d" cx="18" cy="15" r=".9`,
    'metronome': `.m{stroke:currentColor;stroke-width:1.4;fill:none}.p{animation:pe VARd ease-in-out infinite;transform-origin:12px 16px}@keyframes pe{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}</style><line class="m" x1="12" y1="18" x2="12" y2="16"/><line class="p m" x1="12" y1="16" x2="12" y2="6"/><circle cx="12" cy="6" r="1.2" fill="currentColor`,
    'string-harmonic': `.s{stroke:currentColor;stroke-width:1.4;fill:none}.p{fill:currentColor;animation:st VARd ease-in-out infinite}@keyframes st{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><line class="s" x1="4" y1="12" x2="20" y2="12"/><circle class="p" cx="8" cy="12" r="1"/><circle class="p" cx="12" cy="12" r="1.2"/><circle class="p" cx="16" cy="12" r="1`,
    'drum-pulse': `.d{fill:currentColor;animation:dp VARd ease-in-out infinite;transform-origin:12px 14px}@keyframes dp{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}</style><ellipse class="d" cx="12" cy="14" rx="6" ry="2"/><line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" stroke-width="1.4`,
    'tube-resonance': `.t{stroke:currentColor;stroke-width:1.5;fill:none}.w{stroke:currentColor;stroke-width:1.2;animation:rs VARd ease-in-out infinite}@keyframes rs{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}</style><line class="t" x1="8" y1="6" x2="8" y2="18"/><line class="t" x1="16" y1="6" x2="16" y2="18"/><line class="w" x1="8" y1="12" x2="16" y2="12`,
    'piano-key': `.k{fill:currentColor;animation:ky VARd ease-in-out infinite;transform-origin:12px 16px}@keyframes ky{0%,100%{transform:rotate(0deg)}50%{transform:rotate(6deg)}}</style><rect class="k" x="8" y="8" width="8" height="10" rx="1"/><line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" stroke-width="1.4`,
    'spectrum-fall': `.b{fill:currentColor;animation:sf VARd ease-in-out infinite}.b1{animation-delay:0s;height:4px}.b2{animation-delay:.1s;height:8px}.b3{animation-delay:.2s;height:12px}@keyframes sf{0%,100%{opacity:.3}50%{opacity:1}}</style><rect class="b b1" x="6" y="14" width="2" height="4"/><rect class="b b2" x="10" y="10" width="2" height="8"/><rect class="b b3" x="14" y="6" width="2" height="12"/><rect class="b b2" x="18" y="10" width="2" height="8`,
    'vibrato-pitch': `.w{stroke:currentColor;stroke-width:1.4;fill:none;animation:vi VARd ease-in-out infinite;transform-origin:12px 12px}@keyframes vi{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}</style><path class="w" d="M3 12c2-1 4 1 6 0s4-1 6 0 4 1 6 0"/>`,
    'beat-mix': `.w1{stroke:currentColor;stroke-width:1.3;fill:none;animation:b1 VARd ease-in-out infinite}.w2{stroke:currentColor;stroke-width:1.3;fill:none;animation:b2 VARd ease-in-out infinite}@keyframes b1{0%,100%{opacity:.4}50%{opacity:1}}@keyframes b2{0%,100%{opacity:1}50%{opacity:.4}}</style><path class="w1" d="M3 10c2 2 4-2 6 0s4 2 6 0"/><path class="w2" d="M3 14c2-2 4 2 6 0s4-2 6 0`,
    'conductor-wave': `.b{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none;animation:cw VARd ease-in-out infinite;transform-origin:6px 16px}@keyframes cw{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(35deg)}}</style><line class="b" x1="6" y1="16" x2="6" y2="6"/><circle cx="6" cy="5" r="1" fill="currentColor`,
    'four-bar-link': `.l{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.cr{animation:fb VARd ease-in-out infinite;transform-origin:8px 14px}@keyframes fb{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(15deg)}}</style><line class="l" x1="8" y1="14" x2="14" y2="10"/><line class="l cr" x1="8" y1="14" x2="6" y2="8"/><line class="l" x1="14" y1="10" x2="18" y2="14"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="14" cy="10" r="1" fill="currentColor`,
    'cam-follower': `.c{stroke:currentColor;stroke-width:1.4;fill:none}.f{stroke:currentColor;stroke-width:1.4;animation:cf VARd ease-in-out infinite;transform-origin:12px 14px}@keyframes cf{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><circle class="c" cx="12" cy="10" r="4"/><line class="f" x1="12" y1="14" x2="12" y2="18`,
    'piston-cycle': `.p{stroke:currentColor;stroke-width:1.4;fill:none}.r{animation:pc VARd ease-in-out infinite;transform-origin:12px 10px}@keyframes pc{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}</style><rect class="p" x="8" y="6" width="8" height="12" rx="1"/><rect class="p r" x="9" y="8" width="6" height="3" rx=".5"/><line class="p" x1="12" y1="11" x2="12" y2="18`,
    'gear-train': `.g{stroke:currentColor;stroke-width:1.3;fill:none;animation:gr VARd linear infinite;transform-origin:9px 12px}.g2{animation-direction:reverse;transform-origin:15px 12px}@keyframes gr{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="g" cx="9" cy="12" r="4"/><circle class="g g2" cx="15" cy="12" r="3"/><line class="g" x1="9" y1="8" x2="9" y2="16"/><line class="g" x1="5" y1="12" x2="13" y2="12`,
    'bridge-vibrate': `.b{stroke:currentColor;stroke-width:1.4;fill:none;animation:bv VARd ease-in-out infinite;transform-origin:12px 14px}@keyframes bv{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-1)}}</style><path class="b" d="M4 14 Q12 10 20 14"/><line x1="8" y1="14" x2="8" y2="18" stroke="currentColor" stroke-width="1.2"/><line x1="16" y1="14" x2="16" y2="18" stroke="currentColor" stroke-width="1.2"/>`,
    'crane-jib': `.j{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.c{animation:cj VARd ease-in-out infinite;transform-origin:6px 18px}@keyframes cj{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(20deg)}}</style><line class="j" x1="6" y1="18" x2="6" y2="10"/><line class="j c" x1="6" y1="10" x2="18" y2="8"/><line class="j" x1="18" y1="8" x2="18" y2="12"/><circle cx="18" cy="13" r="1.2" fill="currentColor`,
    'conveyor-belt': `.b{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.p{fill:currentColor;animation:cb VARd linear infinite}@keyframes cb{0%{transform:translate(5px,12px)}100%{transform:translate(19px,12px)}}</style><line class="b" x1="4" y1="10" x2="20" y2="10"/><line class="b" x1="4" y1="14" x2="20" y2="14"/><rect class="p" x="0" y="0" width="3" height="3" rx=".4`,
    'turbine-spin': `.b{stroke:currentColor;stroke-width:1.3;fill:none;animation:ts VARd linear infinite;transform-origin:12px 12px}@keyframes ts{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle cx="12" cy="12" r="2" fill="currentColor"/><line class="b" x1="12" y1="12" x2="12" y2="5"/><line class="b" x1="12" y1="12" x2="18" y2="15"/><line class="b" x1="12" y1="12" x2="6" y2="15`,
    'lever-pulley': `.l{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.w{animation:lp VARd ease-in-out infinite;transform-origin:8px 8px}@keyframes lp{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}</style><line class="l w" x1="4" y1="16" x2="16" y2="8"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="16" cy="6" r="2" stroke="currentColor" stroke-width="1.3" fill="none`,
};

const uniqueTemplates = Object.keys(TEMPLATE_BODIES).sort();
console.log(`New expansion templates: ${uniqueTemplates.length}`);

function closeSvgFragment(body: string): string {
  const trimmed = body.trimEnd();
  if (trimmed.endsWith('/>') || trimmed.endsWith('</g>') || trimmed.endsWith('</style>')) {
    return trimmed;
  }
  return `${trimmed}"/>`;
}

function tplBody(name: string): string {
  const raw =
    TEMPLATE_BODIES[name] ??
    `.d{fill:currentColor;animation:pu VARd ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="d" cx="12" cy="12" r="3`;
  return closeSvgFragment(raw);
}

const templateCases = uniqueTemplates
  .map((name) => {
    const inner = tplBody(name).replace(/VARd/g, '${d}');
    return `    case '${name}':\n      return wrap(\`<style>${inner}\`);`;
  })
  .join('\n\n');

const templatesTs = `import type { IconDefinition } from './types.ts';

function wrap(body: string): string {
  return \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\${body}</svg>\`;
}

function seed(def: IconDefinition): number {
  return def.seed ?? 1;
}

function dur(def: IconDefinition, base = 1.4): number {
  const s = seed(def);
  return Number((base + (s % 7) * 0.12).toFixed(2));
}

/** 扩展模板渲染（67 个） */
export function renderExpansionTemplate(def: IconDefinition): string | null {
  const d = dur(def);

  switch (def.template) {
${templateCases}

    default:
      return null;
  }
}
`;

writeFileSync(path.join(__dirname, 'templates-expansion.ts'), templatesTs, 'utf8');
console.log('Wrote templates-expansion.ts');
