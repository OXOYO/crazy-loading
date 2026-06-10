import type { CategoryId } from './categories';
import type { IconMeta } from '../types';

export const ICON_META: Record<string, Omit<IconMeta, 'name'>> = {
  'sine-wave': {
    title: '正弦波',
    description: 'y = sin(x)，相位沿曲线传播（动画示意）',
    category: 'trigonometry',
  },
  'lissajous': {
    title: '利萨如曲线',
    description: 'x = sin(at), y = sin(bt) 参数轨道（动画示意）',
    category: 'geometry',
  },
  'integral-bounds': {
    title: '定积分',
    description: '∫ₐᵇ f(x)dx 积分上下界脉动',
    category: 'calculus',
  },
  'sigma-sum': {
    title: '求和 Σ',
    description: 'Σaₙ 逐项累加',
    category: 'series',
  },
  'pendulum': {
    title: '单摆',
    description: '小角度简谐振动',
    category: 'mechanics',
  },
  'fourier-bars': {
    title: '傅里叶级数',
    description: '谐波分量依次伸缩（动画示意）',
    category: 'series',
  },
  'derivative-dt': {
    title: '时间导数',
    description: 'd/dt 变化率与切线',
    category: 'calculus',
  },
  'golden-spiral': {
    title: '黄金螺旋',
    description: 'φ 对数螺旋展开',
    category: 'geometry',
  },
  'euler-circle': {
    title: '欧拉公式',
    description: 'e^(iθ) 单位圆相位旋转',
    category: 'trigonometry',
  },
  'gaussian-bell': {
    title: '正态分布',
    description: '高斯概率密度钟形曲线（动画示意）',
    category: 'statistics',
  },
  'taylor-series': {
    title: '泰勒级数',
    description: '逐项逼近目标函数（动画示意）',
    category: 'series',
  },
  'exponential-decay': {
    title: '指数衰减',
    description: 'N = N₀e^(-λt) 衰变（动画示意）',
    category: 'physics',
  },
  'logistic-curve': {
    title: 'Logistic 函数',
    description: 'σ(x)=1/(1+e^(-x)) 饱和增长（动画示意）',
    category: 'calculus',
  },
  'kepler-orbit': {
    title: '开普勒轨道',
    description: '行星椭圆轨道运动（动画示意）',
    category: 'astronomy',
  },
  'cycloid': {
    title: '摆线',
    description: '圆滚动边缘点轨迹',
    category: 'geometry',
  },
  'wave-interference': {
    title: '波的干涉',
    description: '两列波相长相消叠加（动画示意）',
    category: 'physics',
  },
  'pythagorean': {
    title: '勾股定理',
    description: 'a² + b² = c²',
    category: 'geometry',
  },
  'harmonic-spring': {
    title: '弹簧振子',
    description: '胡克定律 F = -kx',
    category: 'mechanics',
  },
  'hyperbola': {
    title: '双曲线',
    description: 'x²/a² - y²/b² = 1',
    category: 'geometry',
  },
  'fibonacci-spiral': {
    title: '斐波那契螺旋',
    description: '斐波那契矩形内圆弧',
    category: 'geometry',
  },
  'light-cone': {
    title: '光锥',
    description: '狭义相对论因果光锥（动画示意）',
    category: 'relativity',
  },
  'brownian-motion': {
    title: '布朗运动',
    description: '粒子随机游走（动画示意）',
    category: 'statistics',
  },
  'double-slit': {
    title: '双缝干涉',
    description: '杨氏干涉条纹',
    category: 'quantum',
  },
  'gradient-descent': {
    title: '梯度下降',
    description: '沿 -∇f 迭代求极小',
    category: 'calculus',
  },
  'projectile-arc': {
    title: '抛体运动',
    description: '重力场抛物线轨迹（动画示意）',
    category: 'mechanics',
  },
  'catenary': {
    title: '悬链线',
    description: 'y = a·cosh(x/a)',
    category: 'geometry',
  },
  'qian-xuesen-trajectory': {
    title: '钱学森弹道',
    description: '助推-滑翔式水漂弹道，临近空间跳跃飞行',
    category: 'aerospace',
  },
  'cosine-phase': {
    title: '余弦波',
    description: 'y = cos(x) 相位传播',
    category: 'trigonometry',
  },
  'tangent-slope': {
    title: '正切斜率',
    description: 'tan(x) 斜率突变示意',
    category: 'trigonometry',
  },
  'rose-petals': {
    title: '玫瑰线',
    description: 'r = cos(kθ) 花瓣轨道',
    category: 'geometry',
  },
  'cardioid-path': {
    title: '心形线',
    description: 'r = 1 + cosθ 闭曲线',
    category: 'geometry',
  },
  'lemniscate-eight': {
    title: '双纽线',
    description: '∞ 形伯努利双纽线',
    category: 'geometry',
  },
  'astroid-orbit': {
    title: '星形线',
    description: 'x^(2/3) + y^(2/3) = a^(2/3)',
    category: 'geometry',
  },
  'epicycloid-gear': {
    title: '外摆线',
    description: '大圆上小圆滚动轨迹',
    category: 'geometry',
  },
  'brachistochrone-fast': {
    title: '最速降线',
    description: '重力场最快下降路径',
    category: 'mechanics',
  },
  'isochrone-swing': {
    title: '等时线',
    description: '等时降落曲线',
    category: 'mechanics',
  },
  'parabola-focus': {
    title: '抛物线',
    description: 'y = ax² 焦点反射',
    category: 'geometry',
  },
  'mobius-strip': {
    title: '莫比乌斯带',
    description: '单侧曲面沿带运动',
    category: 'geometry',
  },
  'torus-knot': {
    title: '环面轨道',
    description: '环面参数闭轨道',
    category: 'geometry',
  },
  'voronoi-cell': {
    title: '沃罗诺伊图',
    description: '最近邻区域划分',
    category: 'geometry',
  },
  'pythagorean-tree': {
    title: '勾股树',
    description: '直角三角形递归分叉生长（示意）',
    category: 'geometry',
  },
  'koch-flake': {
    title: '科赫雪花',
    description: '分形边界迭代',
    category: 'chaos',
  },
  'mandelbrot-orbit': {
    title: '曼德博轨道',
    description: '复迭代 z²+c 轨道有界性探测',
    category: 'chaos',
  },
  'bifurcation-logistic': {
    title: '倍周期分叉',
    description: 'Logistic 映射分叉（动画示意）',
    category: 'chaos',
  },
  'lorenz-attractor': {
    title: '洛伦兹吸引子',
    description: '混沌系统轨道示意',
    category: 'chaos',
  },
  'dirac-delta': {
    title: '狄拉克 δ',
    description: '脉冲集中分布（动画示意）',
    category: 'calculus',
  },
  'laplace-transform': {
    title: '拉普拉斯变换',
    description: '时域到 s 域衰减',
    category: 'calculus',
  },
  'stokes-theorem': {
    title: '斯托克斯定理',
    description: '环流与旋度关系（动画示意）',
    category: 'calculus',
  },
  'action-principle': {
    title: '最小作用量',
    description: 'δS = 0 真实路径（动画示意）',
    category: 'mechanics',
  },
  'eigen-resonance': {
    title: '本征共振',
    description: '本征模态振动',
    category: 'series',
  },
  'matrix-rotation': {
    title: '矩阵变换',
    description: '线性变换网格脉动（动画示意）',
    category: 'geometry',
  },
  'regression-fit': {
    title: '线性回归',
    description: '最小二乘拟合直线（动画示意）',
    category: 'statistics',
  },
  'monte-carlo': {
    title: '蒙特卡洛',
    description: '随机采样估计',
    category: 'statistics',
  },
  'markov-chain': {
    title: '马尔可夫链',
    description: '状态转移概率（动画示意）',
    category: 'statistics',
  },
  'central-limit': {
    title: '中心极限',
    description: '样本均值分布趋近正态（钟形示意）',
    category: 'statistics',
  },
  'bayes-update': {
    title: '贝叶斯更新',
    description: '后验概率迭代（动画示意）',
    category: 'statistics',
  },
  'standing-wave': {
    title: '驻波',
    description: '节点与腹点振动（动画示意）',
    category: 'physics',
  },
  'beat-frequency': {
    title: '拍频',
    description: '相近频率合成拍',
    category: 'physics',
  },
  'doppler-effect': {
    title: '多普勒效应',
    description: '相对运动频移（动画示意）',
    category: 'physics',
  },
  'wave-packet': {
    title: '波包',
    description: '群速度与相速度（动画示意）',
    category: 'quantum',
  },
  'schrodinger-cat': {
    title: '薛定谔波包',
    description: 'ψ(x,t) 概率幅波包传播（动画示意）',
    category: 'quantum',
  },
  'tunnel-effect': {
    title: '量子隧穿',
    description: '势垒穿透概率（动画示意）',
    category: 'quantum',
  },
  'spin-precession': {
    title: '自旋进动',
    description: '磁矩拉莫尔进动',
    category: 'quantum',
  },
  'energy-quantum': {
    title: '能级量子化',
    description: 'Eₙ 分立能级跃迁（动画示意）',
    category: 'quantum',
  },
  'pauli-exclusion': {
    title: '泡利不相容',
    description: '费米子能级填充（动画示意）',
    category: 'quantum',
  },
  'maxwell-wave': {
    title: '麦克斯韦波',
    description: '电场磁场交替传播',
    category: 'electromagnetism',
  },
  'faraday-induction': {
    title: '法拉第感应',
    description: '磁通变化感生电动势',
    category: 'electromagnetism',
  },
  'rlc-circuit': {
    title: 'RLC 振荡',
    description: 'LC 谐振电路',
    category: 'electromagnetism',
  },
  'coulomb-field': {
    title: '库仑场',
    description: '点电荷径向场线（动画示意）',
    category: 'electromagnetism',
  },
  'ampere-circulation': {
    title: '安培环路',
    description: '电流产生环形磁场（动画示意）',
    category: 'electromagnetism',
  },
  'magnetic-reconnection': {
    title: '磁重联',
    description: '磁力线断裂重接',
    category: 'electromagnetism',
  },
  'bernoulli-pipe': {
    title: '伯努利管',
    description: '流速增压力降（动画示意）',
    category: 'fluid',
  },
  'navier-vortex': {
    title: '涡旋',
    description: '环量守恒涡旋',
    category: 'fluid',
  },
  'shock-wave': {
    title: '激波',
    description: '超声速压缩波前',
    category: 'fluid',
  },
  'heat-diffusion': {
    title: '热扩散',
    description: '傅里叶热传导（动画示意）',
    category: 'thermodynamics',
  },
  'carnot-engine': {
    title: '卡诺循环',
    description: '可逆热机循环',
    category: 'thermodynamics',
  },
  'entropy-growth': {
    title: '熵增',
    description: '孤立系统无序度上升',
    category: 'thermodynamics',
  },
  'ideal-gas': {
    title: '理想气体',
    description: 'PV = nRT 等温双曲线过程',
    category: 'thermodynamics',
  },
  'rocket-equation': {
    title: '火箭方程',
    description: 'Δv = ve·ln(m₀/m₁)',
    category: 'aerospace',
  },
  'hohmann-transfer': {
    title: '霍曼转移',
    description: '最小能量轨道转移（动画示意）',
    category: 'aerospace',
  },
  'reentry-arc': {
    title: '再入弹道',
    description: '再入大气层加热减速下落',
    category: 'aerospace',
  },
  'satellite-dish': {
    title: '卫星姿态',
    description: '三轴稳定进动',
    category: 'aerospace',
  },
  'orbital-decay': {
    title: '轨道衰减',
    description: '大气阻力降轨（动画示意）',
    category: 'aerospace',
  },
  'solar-sail': {
    title: '太阳帆',
    description: '太阳光压推动帆板加速',
    category: 'aerospace',
  },
  'gravity-assist': {
    title: '引力助推',
    description: '行星引力弹弓双曲线飞越',
    category: 'aerospace',
  },
  'iss-orbit': {
    title: '空间站轨道',
    description: '近地圆轨道周期运动（动画示意）',
    category: 'aerospace',
  },
  'mars-transfer': {
    title: '火星转移',
    description: '地球-火星霍曼最小能量转移轨道（动画示意）',
    category: 'aerospace',
  },
  'moon-orbit': {
    title: '月球轨道',
    description: '开普勒椭圆公转（动画示意）',
    category: 'astronomy',
  },
  'mercury-precession': {
    title: '水星进动',
    description: '近日点相对论进动',
    category: 'astronomy',
  },
  'lagrange-l1': {
    title: '拉格朗日点',
    description: 'L1 点受力强平衡',
    category: 'astronomy',
  },
  'roche-breakup': {
    title: '洛希极限',
    description: '潮汐力撕裂天体',
    category: 'astronomy',
  },
  'tidal-locking': {
    title: '潮汐锁定',
    description: '自转与公转同步',
    category: 'astronomy',
  },
  'planetary-ring': {
    title: '行星环',
    description: '土星环粒子轨道',
    category: 'astronomy',
  },
  'comet-tail': {
    title: '彗星尾',
    description: '太阳风吹拂离子尾',
    category: 'astronomy',
  },
  'asteroid-belt': {
    title: '小行星带',
    description: '火星木星间轨道带小行星群',
    category: 'astronomy',
  },
  'accretion-disk': {
    title: '吸积盘',
    description: '黑洞吸积盘旋转（动画示意）',
    category: 'astronomy',
  },
  'pulsar-beam': {
    title: '脉冲星束',
    description: '磁极扫射脉冲',
    category: 'astronomy',
  },
  'neutron-star': {
    title: '中子星',
    description: '超高密度星体脉动',
    category: 'astronomy',
  },
  'supernova-shock': {
    title: '超新星激波',
    description: '壳层膨胀冲击波',
    category: 'astronomy',
  },
  'solar-flare': {
    title: '太阳耀斑',
    description: '磁能爆发喷流',
    category: 'astronomy',
  },
  'aurora-borealis': {
    title: '极光',
    description: '磁层粒子激发发光',
    category: 'astronomy',
  },
  'gravitational-lens': {
    title: '引力透镜',
    description: '光线弯曲成像',
    category: 'relativity',
  },
  'gravitational-wave': {
    title: '引力波',
    description: '时空涟漪传播',
    category: 'relativity',
  },
  'hubble-flow': {
    title: '哈勃膨胀',
    description: '宇宙均匀膨胀',
    category: 'astronomy',
  },
  'redshift-galaxy': {
    title: '宇宙红移',
    description: '光谱线向长波移动（动画示意）',
    category: 'astronomy',
  },
  'black-hole-shadow': {
    title: '黑洞阴影',
    description: '事件视界周围明亮吸积环阴影',
    category: 'relativity',
  },
  'time-dilation': {
    title: '时间膨胀',
    description: '强引力场或高速运动时钟变慢',
    category: 'relativity',
  },
  'spacetime-curve': {
    title: '时空弯曲',
    description: '质量弯曲测地线',
    category: 'relativity',
  },
  'precession-gyro': {
    title: '陀螺进动',
    description: '角动量方向漂移',
    category: 'mechanics',
  },
  'coupled-oscillator': {
    title: '耦合振子',
    description: '能量在两振子间交换',
    category: 'mechanics',
  },
  'rolling-ball': {
    title: '滚动小球',
    description: '纯滚动动能守恒',
    category: 'mechanics',
  },
  'collision-elastic': {
    title: '弹性碰撞',
    description: '两体弹性碰撞动量交换',
    category: 'mechanics',
  },
  'coriolis-deflect': {
    title: '科里奥利偏转',
    description: '旋转系惯性力（动画示意）',
    category: 'mechanics',
  },
  'kepler-area': {
    title: '面积定律',
    description: '半径矢量扫过等面积（动画示意）',
    category: 'astronomy',
  },
  'three-body': {
    title: '三体问题',
    description: '三体引力混沌轨道（利萨如示意）',
    category: 'mechanics',
  },
  'virial-theorem': {
    title: '维里定理',
    description: '⟨T⟩ 与 ⟨V⟩ 时间平均交换',
    category: 'mechanics',
  },
  'hamilton-flow': {
    title: '哈密顿流',
    description: '相空间保守流（动画示意）',
    category: 'mechanics',
  },
  'poisson-bracket': {
    title: '泊松括号',
    description: '相空间泊松括号流演化',
    category: 'mechanics',
  },
  'noether-symmetry': {
    title: '诺特对称',
    description: '连续对称对应守恒量（动画示意）',
    category: 'mechanics',
  },
  'fourier-transform': {
    title: '傅里叶变换',
    description: '时域波形与频域谱线互转',
    category: 'series',
  },
  'laplace-operator': {
    title: '拉普拉斯算子',
    description: '∇² 势场扩散（动画示意）',
    category: 'calculus',
  },
  'gradient-field': {
    title: '梯度场',
    description: '∇f 最陡上升方向（动画示意）',
    category: 'calculus',
  },
  'curl-field': {
    title: '旋度场',
    description: '∇×F 环流密度（动画示意）',
    category: 'calculus',
  },
  'divergence-field': {
    title: '散度场',
    description: '∇·F 源汇强度（动画示意）',
    category: 'calculus',
  },
  'green-theorem': {
    title: '格林公式',
    description: '区域积分与边界环流（动画示意）',
    category: 'calculus',
  },
  'line-integral': {
    title: '线积分',
    description: '沿曲线累积效应（动画示意）',
    category: 'calculus',
  },
  'surface-integral': {
    title: '面积分',
    description: '曲面积分通量（动画示意）',
    category: 'calculus',
  },
  'volume-integral': {
    title: '体积分',
    description: '体域 Ω 上 ∫∫∫ f dV 填充累积',
    category: 'calculus',
  },
  'limit-process': {
    title: '极限过程',
    description: 'ε-δ 趋近过程（动画示意）',
    category: 'calculus',
  },
  'continuity-wave': {
    title: '连续性',
    description: '无断裂函数传播（动画示意）',
    category: 'calculus',
  },
  'series-converge': {
    title: '级数收敛',
    description: '部分和序列趋近稳定极限',
    category: 'series',
  },
  'power-series': {
    title: '幂级数',
    description: 'Σaₙxⁿ 在收敛半径内逐项收敛',
    category: 'series',
  },
  'zeta-harmonic': {
    title: '调和级数',
    description: 'Σ1/n 项递减但部分和持续攀升发散',
    category: 'series',
  },
  'fourier-sawtooth': {
    title: '锯齿波',
    description: '锯齿波傅里叶合成',
    category: 'series',
  },
  'wavelet-local': {
    title: '小波',
    description: '时频局部化分析（动画示意）',
    category: 'series',
  },
  'hilbert-phase': {
    title: '希尔伯特相',
    description: '解析信号相位',
    category: 'series',
  },
  'nyquist-sampling': {
    title: '奈奎斯特采样',
    description: '采样率与混叠',
    category: 'series',
  },
  'poisson-process': {
    title: '泊松过程',
    description: '稀有事件按泊松率到达',
    category: 'statistics',
  },
  'random-walk-2d': {
    title: '二维随机游走',
    description: '平面布朗路径（动画示意）',
    category: 'statistics',
  },
  'chi-square': {
    title: '卡方分布',
    description: '右偏卡方分布曲线（统计示意）',
    category: 'statistics',
  },
  't-distribution': {
    title: 't 分布',
    description: '厚尾 t 分布曲线（统计示意）',
    category: 'statistics',
  },
  'confidence-band': {
    title: '置信带',
    description: '区间估计覆盖（动画示意）',
    category: 'statistics',
  },
  'hypothesis-test': {
    title: '假设检验',
    description: '显著性阈值判定（动画示意）',
    category: 'statistics',
  },
  'sinh-cosh': {
    title: '双曲函数',
    description: 'sinh/cosh 指数组合',
    category: 'trigonometry',
  },
  'inverse-square': {
    title: '平方反比',
    description: 'F ∝ 1/r² 场衰减（动画示意）',
    category: 'physics',
  },
  'coulomb-oscillator': {
    title: '库仑势',
    description: '1/r 势场轨道（动画示意）',
    category: 'physics',
  },
  'harmonic-quantum': {
    title: '量子谐振子',
    description: '能级等间距跃迁（动画示意）',
    category: 'quantum',
  },
  'zeeman-split': {
    title: '塞曼分裂',
    description: '磁场中谱线塞曼劈裂',
    category: 'quantum',
  },
  'stark-effect': {
    title: '斯塔克效应',
    description: '电场中谱线斯塔克移动',
    category: 'quantum',
  },
  'compton-scatter': {
    title: '康普顿散射',
    description: '光子-电子碰撞波长变长（频移示意）',
    category: 'quantum',
  },
  'photoelectric': {
    title: '光电效应',
    description: '光子激发电子（动画示意）',
    category: 'quantum',
  },
  'bohr-orbit': {
    title: '玻尔轨道',
    description: '量子化角动量轨道（动画示意）',
    category: 'quantum',
  },
  'de-broglie': {
    title: '德布罗意波',
    description: '物质波 λ = h/p（动画示意）',
    category: 'quantum',
  },
  'heisenberg-uncertainty': {
    title: '不确定性',
    description: 'Δx·Δp ≥ ℏ/2（动画示意）',
    category: 'quantum',
  },
  'bell-inequality': {
    title: '贝尔不等式',
    description: '纠缠态违背贝尔不等式',
    category: 'quantum',
  },
  'quantum-entangle': {
    title: '量子纠缠',
    description: '纠缠粒子对关联运动',
    category: 'quantum',
  },
  'bose-einstein': {
    title: '玻色凝聚',
    description: '玻色子宏观量子凝聚（包络示意）',
    category: 'quantum',
  },
  'fermi-surface': {
    title: '费米面',
    description: '零温电子占据的费米等高面',
    category: 'quantum',
  },
  'plasma-oscillation': {
    title: '等离子体振荡',
    description: '集体电荷振荡',
    category: 'physics',
  },
  'langmuir-wave': {
    title: '朗缪尔波',
    description: '等离子体静电波（动画示意）',
    category: 'physics',
  },
  'magnetopause': {
    title: '磁层顶',
    description: '太阳风与磁层边界',
    category: 'physics',
  },
  'solar-wind': {
    title: '太阳风',
    description: '太阳风带电粒子径向流出',
    category: 'astronomy',
  },
  'cosmic-ray': {
    title: '宇宙线',
    description: '高能粒子在大气中级联簇射',
    category: 'astronomy',
  },
  'cmb-ripple': {
    title: '微波背景',
    description: '宇宙微波背景温度涨落波纹',
    category: 'astronomy',
  },
  'dark-matter-halo': {
    title: '暗物质晕',
    description: '星系暗物质晕密度包络',
    category: 'astronomy',
  },
  'dark-energy-exp': {
    title: '暗能量',
    description: '加速膨胀驱动',
    category: 'astronomy',
  },
  'binary-pulsar': {
    title: '双脉冲星',
    description: '引力辐射能量损失',
    category: 'astronomy',
  },
  'eclipse-transit': {
    title: '凌日测光',
    description: '行星遮挡亮度下降（动画示意）',
    category: 'astronomy',
  },
  'radial-velocity': {
    title: '视向速度',
    description: '光谱多普勒测速（动画示意）',
    category: 'astronomy',
  },
  'n-body-chaos': {
    title: 'N 体混沌',
    description: 'N 体引力不可积混沌（参数轨道示意）',
    category: 'chaos',
  },
  'feigenbaum-route': {
    title: '费根鲍姆路径',
    description: '通向混沌道路（动画示意）',
    category: 'chaos',
  },
  'julia-set': {
    title: '朱利亚集',
    description: '朱利亚集边界迭代点逃逸',
    category: 'chaos',
  },
  'cantor-dust': {
    title: '康托尔集',
    description: '反复删去中间三分之一区间',
    category: 'chaos',
  },
  'sierpinski-tri': {
    title: '谢尔宾斯基',
    description: '三角形反复挖空分形',
    category: 'chaos',
  },
  'strange-attractor': {
    title: '奇怪吸引子',
    description: '奇怪吸引子上的非周期轨道',
    category: 'chaos',
  },
  'phase-portrait': {
    title: '相图',
    description: '动力系统轨迹场（动画示意）',
    category: 'chaos',
  },
  'poincare-section': {
    title: '庞加莱截面',
    description: '周期轨道截面点（动画示意）',
    category: 'chaos',
  },
  'van-der-pol': {
    title: '范德波尔',
    description: '自激振荡系统',
    category: 'chaos',
  },
  'duffing-oscillator': {
    title: '杜芬振子',
    description: '非线性刚度振荡',
    category: 'chaos',
  },
  'navier-stokes-t': {
    title: 'NS 方程',
    description: '粘性不可压流体',
    category: 'fluid',
  },
  'reynolds-number': {
    title: '雷诺数',
    description: '层流湍流转变（动画示意）',
    category: 'fluid',
  },
  'boundary-layer': {
    title: '边界层',
    description: '壁面速度梯度（动画示意）',
    category: 'fluid',
  },
  'cavitation-bubble': {
    title: '空化泡',
    description: '低压汽泡溃灭（动画示意）',
    category: 'fluid',
  },
  'tsunami-wave': {
    title: '海啸波',
    description: '浅水长波传播（动画示意）',
    category: 'fluid',
  },
  'kelvin-wave': {
    title: '开尔文波',
    description: '旋转系重力波（动画示意）',
    category: 'fluid',
  },
  'mhd-flux': {
    title: '磁流体',
    description: '导电流体与磁场耦合',
    category: 'fluid',
  },
  'stefan-boltzmann': {
    title: '斯特藩定律',
    description: '热辐射功率 T⁴（动画示意）',
    category: 'thermodynamics',
  },
  'blackbody-spectrum': {
    title: '黑体谱',
    description: '普朗克辐射分布（动画示意）',
    category: 'thermodynamics',
  },
  'clausius-inequality': {
    title: '克劳修斯不等式',
    description: '循环过程熵判据',
    category: 'thermodynamics',
  },
  'maxwell-demon': {
    title: '麦克斯韦妖',
    description: '信息降熵思想实验',
    category: 'thermodynamics',
  },
  'phase-transition': {
    title: '相变',
    description: '临界点序参量突变（动画示意）',
    category: 'thermodynamics',
  },
  'ising-model': {
    title: '伊辛模型',
    description: '自旋格点相变（动画示意）',
    category: 'thermodynamics',
  },
  'landau-level': {
    title: '朗道能级',
    description: '磁场量子化能级（动画示意）',
    category: 'quantum',
  },
  'hall-conductance': {
    title: '霍尔电导',
    description: '霍尔电导量子化平台',
    category: 'quantum',
  },
  'josephson-junction': {
    title: '约瑟夫森结',
    description: '超导相位隧穿（动画示意）',
    category: 'quantum',
  },
  'meissner-effect': {
    title: '迈斯纳效应',
    description: '磁场从超导体排出（动画示意）',
    category: 'electromagnetism',
  },
  'eddy-current': {
    title: '涡电流',
    description: '导体中感应涡旋',
    category: 'electromagnetism',
  },
  'skin-effect': {
    title: '趋肤效应',
    description: '交流电流表面集中（动画示意）',
    category: 'electromagnetism',
  },
  'waveguide-mode': {
    title: '波导模',
    description: '驻波导模场型（动画示意）',
    category: 'electromagnetism',
  },
  'antenna-dipole': {
    title: '偶极天线',
    description: '偶极子振荡向外辐射电磁波',
    category: 'electromagnetism',
  },
  'atom-shells': {
    title: '原子壳层',
    description: 'K/L/M 电子壳层轨道',
    category: 'chemistry',
  },
  'molecular-bond': {
    title: '共价键',
    description: '原子间共享电子对成键',
    category: 'chemistry',
  },
  'benzene-ring': {
    title: '苯环',
    description: '芳香性 π 电子离域',
    category: 'chemistry',
  },
  'crystal-lattice': {
    title: '晶体晶格',
    description: '空间点阵周期性结构',
    category: 'chemistry',
  },
  'p-orbital': {
    title: 'p 轨道',
    description: '哑铃形电子云概率分布',
    category: 'chemistry',
  },
  'ionic-lattice': {
    title: '离子晶体',
    description: '阴阳离子静电吸引晶格',
    category: 'chemistry',
  },
  'sp3-hybrid': {
    title: 'sp³ 杂化',
    description: '四面体杂化轨道成键',
    category: 'chemistry',
  },
  'periodic-cell': {
    title: '周期表元胞',
    description: '元素周期表单格信息',
    category: 'chemistry',
  },
  'lewis-dots': {
    title: '路易斯结构',
    description: '价电子点式表示',
    category: 'chemistry',
  },
  'equilibrium-shift': {
    title: '化学平衡',
    description: '勒夏特列原理双向移动',
    category: 'chemistry',
  },
};

export function countIconsByCategory(
  icons: string[],
): Record<CategoryId, number> {
  const counts: Record<CategoryId, number> = {
    all: icons.length,
    calculus: 0,
    trigonometry: 0,
    geometry: 0,
    series: 0,
    statistics: 0,
    physics: 0,
    mechanics: 0,
    electromagnetism: 0,
    thermodynamics: 0,
    fluid: 0,
    chemistry: 0,
    quantum: 0,
    relativity: 0,
    astronomy: 0,
    aerospace: 0,
    chaos: 0,
  };

  for (const name of icons) {
    const category = ICON_META[name]?.category;
    if (category) {
      counts[category] += 1;
    }
  }

  return counts;
}

