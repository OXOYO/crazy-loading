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
  'archimedes-spiral': {
    title: '阿基米德螺线',
    description: 'r = aθ 等距螺旋展开',
    category: 'geometry',
  },
  'trefoil-knot': {
    title: '三叶结',
    description: '非平凡纽结闭路追踪',
    category: 'geometry',
  },
  'riemann-rectangles': {
    title: '黎曼和',
    description: '矩形条带逐块逼近积分',
    category: 'calculus',
  },
  'wheel-paradox': {
    title: '轮子悖论',
    description: '同心轮同步滚动标记',
    category: 'mechanics',
  },
  'ladder-limit': {
    title: '夹逼极限',
    description: '上下界阶梯夹逼收敛',
    category: 'calculus',
  },
  'monte-carlo-hit': {
    title: '蒙特卡洛 π',
    description: '随机投点圆内命中计数',
    category: 'statistics',
  },
  'redox-transfer': {
    title: '氧化还原',
    description: '电子在物种间跃迁转移',
    category: 'chemistry',
  },
  'titration-endpoint': {
    title: '滴定终点',
    description: '等当点附近 pH 陡升',
    category: 'chemistry',
  },
  'nmr-flip': {
    title: 'NMR 自旋翻转',
    description: '核磁自旋能级跃迁',
    category: 'chemistry',
  },
  'reaction-diffusion': {
    title: '反应扩散',
    description: '图灵斑图生成与消长',
    category: 'chemistry',
  },
  'magnet-flip': {
    title: '磁偶极翻转',
    description: '磁矩方向周期性反转',
    category: 'electromagnetism',
  },
  'orbital-resonance': {
    title: '轨道共振',
    description: '2:1 周期锁定对齐',
    category: 'astronomy',
  },
  'sprint-dash': {
    title: '短跑冲刺',
    description: '摆臂蹬腿交替加速',
    category: 'sports',
  },
  'basketball-bounce': {
    title: '篮球运球',
    description: '抛物线反弹节奏',
    category: 'sports',
  },
  'soccer-dribble': {
    title: '足球盘带',
    description: '脚背触球推进',
    category: 'sports',
  },
  'swim-freestyle': {
    title: '自由泳',
    description: '划水换气循环',
    category: 'sports',
  },
  'cycle-sprint': {
    title: '公路骑行',
    description: '双轮转动踏频',
    category: 'sports',
  },
  'tennis-volley': {
    title: '网球截击',
    description: '球拍击球过网',
    category: 'sports',
  },
  'ski-slalom': {
    title: '滑雪回转',
    description: '旗门间 S 形滑降',
    category: 'sports',
  },
  'jump-rope': {
    title: '跳绳',
    description: '绳弧跳跃节奏',
    category: 'sports',
  },
  'yoga-tree-pose': {
    title: '瑜伽树式',
    description: '单腿平衡微摆',
    category: 'sports',
  },
  'boxing-jab': {
    title: '拳击刺拳',
    description: '直拳出拳回收',
    category: 'sports',
  },
  'archery-release': {
    title: '射箭发射',
    description: '拉弓释箭飞行',
    category: 'sports',
  },
  'high-jump': {
    title: '背越式跳高',
    description: '过杆抛物弧线',
    category: 'sports',
  },
  'hurdle-race': {
    title: '跨栏冲刺',
    description: '助跑起跳越栏落地',
    category: 'sports',
  },
  'pole-vault': {
    title: '撑竿跳',
    description: '持竿插地过杆下坠',
    category: 'sports',
  },
  'javelin-throw': {
    title: '标枪投掷',
    description: '助跑引臂掷枪飞行',
    category: 'sports',
  },
  'shot-put': {
    title: '铅球投掷',
    description: '旋转推掷铅球抛物',
    category: 'sports',
  },
  'hammer-throw': {
    title: '链球投掷',
    description: '旋转甩链球离手',
    category: 'sports',
  },
  'triple-jump': {
    title: '三级跳远',
    description: '单脚跳跨步跳远',
    category: 'sports',
  },
  'weightlift': {
    title: '举重挺举',
    description: '深蹲起杠过头',
    category: 'sports',
  },
  'volleyball-spike': {
    title: '排球扣球',
    description: '助跑起跳扣球过网',
    category: 'sports',
  },
  'dive-springboard': {
    title: '跳板跳水',
    description: '起跳翻腾入水',
    category: 'sports',
  },
  'fencing-lunge': {
    title: '击剑弓步',
    description: '弓步突刺回收',
    category: 'sports',
  },
  'skateboard-ollie': {
    title: '滑板腾跃',
    description: '踩板起跳落地',
    category: 'sports',
  },
  'rowing-stroke': {
    title: '赛艇划桨',
    description: '抓水拉桨回桨',
    category: 'sports',
  },
  'dna-helix-1': {
    title: 'DNA 双螺旋',
    description: '碱基配对双链盘绕',
    category: 'biology',
  },
  'dna-helix-2': {
    title: '基因双链',
    description: '碱基配对双链盘绕',
    category: 'biology',
  },
  'dna-helix-3': {
    title: '核酸螺旋',
    description: '碱基配对双链盘绕',
    category: 'biology',
  },
  'dna-replicate-1': {
    title: 'DNA 复制',
    description: '双链解旋逐段复制',
    category: 'biology',
  },
  'dna-replicate-2': {
    title: '半保留复制',
    description: '双链解旋逐段复制',
    category: 'biology',
  },
  'dna-replicate-3': {
    title: '复制叉推进',
    description: '双链解旋逐段复制',
    category: 'biology',
  },
  'rna-transcribe-1': {
    title: 'RNA 转录',
    description: 'DNA 模板合成 RNA',
    category: 'biology',
  },
  'rna-transcribe-2': {
    title: 'mRNA 合成',
    description: 'DNA 模板合成 RNA',
    category: 'biology',
  },
  'rna-transcribe-3': {
    title: '转录延伸',
    description: 'DNA 模板合成 RNA',
    category: 'biology',
  },
  'protein-fold-1': {
    title: '蛋白质折叠',
    description: '氨基酸链折叠成功能构象',
    category: 'biology',
  },
  'protein-fold-2': {
    title: '多肽折叠',
    description: '氨基酸链折叠成功能构象',
    category: 'biology',
  },
  'protein-fold-3': {
    title: '结构域形成',
    description: '氨基酸链折叠成功能构象',
    category: 'biology',
  },
  'cell-membrane-1': {
    title: '细胞膜通道',
    description: '膜蛋白通道开闭转运',
    category: 'biology',
  },
  'cell-membrane-2': {
    title: '离子通道',
    description: '膜蛋白通道开闭转运',
    category: 'biology',
  },
  'cell-membrane-3': {
    title: '膜运输',
    description: '膜蛋白通道开闭转运',
    category: 'biology',
  },
  'photosynthesis-1': {
    title: '光合作用',
    description: '光能转化学能循环',
    category: 'biology',
  },
  'photosynthesis-2': {
    title: '光反应',
    description: '光能转化学能循环',
    category: 'biology',
  },
  'photosynthesis-3': {
    title: '碳固定',
    description: '光能转化学能循环',
    category: 'biology',
  },
  'neuron-pulse-1': {
    title: '动作电位',
    description: '膜电位去极化复极化',
    category: 'biology',
  },
  'neuron-pulse-2': {
    title: '神经冲动',
    description: '膜电位去极化复极化',
    category: 'biology',
  },
  'neuron-pulse-3': {
    title: '轴突传导',
    description: '膜电位去极化复极化',
    category: 'biology',
  },
  'heartbeat-ecg-1': {
    title: '心电图',
    description: '心电 QRS 周期性搏动',
    category: 'biology',
  },
  'heartbeat-ecg-2': {
    title: '心室收缩',
    description: '心电 QRS 周期性搏动',
    category: 'biology',
  },
  'heartbeat-ecg-3': {
    title: '脉搏节律',
    description: '心电 QRS 周期性搏动',
    category: 'biology',
  },
  'mitosis-1': {
    title: '有丝分裂',
    description: '细胞分裂周期推进',
    category: 'biology',
  },
  'mitosis-2': {
    title: '染色体分离',
    description: '细胞分裂周期推进',
    category: 'biology',
  },
  'mitosis-3': {
    title: '胞质分裂',
    description: '细胞分裂周期推进',
    category: 'biology',
  },
  'virus-infect-1': {
    title: '病毒感染',
    description: '病毒附着穿入复制',
    category: 'biology',
  },
  'virus-infect-2': {
    title: '病毒侵染',
    description: '病毒附着穿入复制',
    category: 'biology',
  },
  'virus-infect-3': {
    title: '宿主入侵',
    description: '病毒附着穿入复制',
    category: 'biology',
  },
  'enzyme-bind-1': {
    title: '酶促反应',
    description: '锁钥结合降低能垒',
    category: 'biology',
  },
  'enzyme-bind-2': {
    title: '酶底物复合',
    description: '锁钥结合降低能垒',
    category: 'biology',
  },
  'enzyme-bind-3': {
    title: '催化循环',
    description: '锁钥结合降低能垒',
    category: 'biology',
  },
  'blood-flow-1': {
    title: '血液循环',
    description: '心脏泵血循环全身',
    category: 'biology',
  },
  'blood-flow-2': {
    title: '动脉血流',
    description: '心脏泵血循环全身',
    category: 'biology',
  },
  'blood-flow-3': {
    title: '毛细血管交换',
    description: '心脏泵血循环全身',
    category: 'biology',
  },
  'muscle-contract-1': {
    title: '肌肉收缩',
    description: '肌动肌球蛋白相对滑动',
    category: 'biology',
  },
  'muscle-contract-2': {
    title: '肌丝滑行',
    description: '肌动肌球蛋白相对滑动',
    category: 'biology',
  },
  'muscle-contract-3': {
    title: '肌节缩短',
    description: '肌动肌球蛋白相对滑动',
    category: 'biology',
  },
  'bacteria-divide-1': {
    title: '细菌分裂',
    description: '原核细胞一分为二',
    category: 'biology',
  },
  'bacteria-divide-2': {
    title: '二分裂',
    description: '原核细胞一分为二',
    category: 'biology',
  },
  'bacteria-divide-3': {
    title: '菌群增殖',
    description: '原核细胞一分为二',
    category: 'biology',
  },
  'osmosis-1': {
    title: '渗透作用',
    description: '水沿浓度梯度跨膜',
    category: 'biology',
  },
  'osmosis-2': {
    title: '水分子跨膜',
    description: '水沿浓度梯度跨膜',
    category: 'biology',
  },
  'osmosis-3': {
    title: '渗透平衡',
    description: '水沿浓度梯度跨膜',
    category: 'biology',
  },
  'bubble-sort-1': {
    title: '冒泡排序',
    description: '相邻元素比较交换',
    category: 'cs',
  },
  'bubble-sort-2': {
    title: '相邻交换',
    description: '相邻元素比较交换',
    category: 'cs',
  },
  'bubble-sort-3': {
    title: '冒泡上浮',
    description: '相邻元素比较交换',
    category: 'cs',
  },
  'binary-search-1': {
    title: '二分查找',
    description: '区间折半逼近目标',
    category: 'cs',
  },
  'binary-search-2': {
    title: '折半搜索',
    description: '区间折半逼近目标',
    category: 'cs',
  },
  'binary-search-3': {
    title: '有序查找',
    description: '区间折半逼近目标',
    category: 'cs',
  },
  'bfs-expand-1': {
    title: '广度优先',
    description: '逐层扩展搜索前沿',
    category: 'cs',
  },
  'bfs-expand-2': {
    title: 'BFS 扩散',
    description: '逐层扩展搜索前沿',
    category: 'cs',
  },
  'bfs-expand-3': {
    title: '层序遍历',
    description: '逐层扩展搜索前沿',
    category: 'cs',
  },
  'dfs-path-1': {
    title: '深度优先',
    description: '沿路径深入再回溯',
    category: 'cs',
  },
  'dfs-path-2': {
    title: 'DFS 回溯',
    description: '沿路径深入再回溯',
    category: 'cs',
  },
  'dfs-path-3': {
    title: '栈式深入',
    description: '沿路径深入再回溯',
    category: 'cs',
  },
  'stack-push-1': {
    title: '栈操作',
    description: '元素压入弹出栈顶',
    category: 'cs',
  },
  'stack-push-2': {
    title: '压栈弹栈',
    description: '元素压入弹出栈顶',
    category: 'cs',
  },
  'stack-push-3': {
    title: '后进先出',
    description: '元素压入弹出栈顶',
    category: 'cs',
  },
  'queue-flow-1': {
    title: '队列操作',
    description: '队尾入队队首出队',
    category: 'cs',
  },
  'queue-flow-2': {
    title: '入队出队',
    description: '队尾入队队首出队',
    category: 'cs',
  },
  'queue-flow-3': {
    title: '先进先出',
    description: '队尾入队队首出队',
    category: 'cs',
  },
  'hash-chain-1': {
    title: '哈希表',
    description: '桶内链表处理冲突',
    category: 'cs',
  },
  'hash-chain-2': {
    title: '链地址法',
    description: '桶内链表处理冲突',
    category: 'cs',
  },
  'hash-chain-3': {
    title: '冲突消解',
    description: '桶内链表处理冲突',
    category: 'cs',
  },
  'recursion-tree-1': {
    title: '递归树',
    description: '递归调用树形展开',
    category: 'cs',
  },
  'recursion-tree-2': {
    title: '分治递归',
    description: '递归调用树形展开',
    category: 'cs',
  },
  'recursion-tree-3': {
    title: '调用栈展开',
    description: '递归调用树形展开',
    category: 'cs',
  },
  'heapify-1': {
    title: '堆化',
    description: '节点下沉上浮维护堆',
    category: 'cs',
  },
  'heapify-2': {
    title: '优先队列',
    description: '节点下沉上浮维护堆',
    category: 'cs',
  },
  'heapify-3': {
    title: '堆调整',
    description: '节点下沉上浮维护堆',
    category: 'cs',
  },
  'graph-edge-1': {
    title: '图遍历',
    description: '边权逐步松弛更新',
    category: 'cs',
  },
  'graph-edge-2': {
    title: '边松弛',
    description: '边权逐步松弛更新',
    category: 'cs',
  },
  'graph-edge-3': {
    title: '最短路径',
    description: '边权逐步松弛更新',
    category: 'cs',
  },
  'linked-list-1': {
    title: '链表',
    description: '节点指针串联遍历',
    category: 'cs',
  },
  'linked-list-2': {
    title: '指针链接',
    description: '节点指针串联遍历',
    category: 'cs',
  },
  'linked-list-3': {
    title: '节点插入',
    description: '节点指针串联遍历',
    category: 'cs',
  },
  'cache-line-1': {
    title: '缓存命中',
    description: '命中与逐出交替',
    category: 'cs',
  },
  'cache-line-2': {
    title: 'LRU 替换',
    description: '命中与逐出交替',
    category: 'cs',
  },
  'cache-line-3': {
    title: '缓存行',
    description: '命中与逐出交替',
    category: 'cs',
  },
  'neural-net-1': {
    title: '神经网络',
    description: '层间信号前向流动',
    category: 'cs',
  },
  'neural-net-2': {
    title: '前向传播',
    description: '层间信号前向流动',
    category: 'cs',
  },
  'neural-net-3': {
    title: '反向梯度',
    description: '层间信号前向流动',
    category: 'cs',
  },
  'git-merge': {
    title: 'Git 合并',
    description: '分支合并提交',
    category: 'cs',
  },
  'prism-1': {
    title: '棱镜色散',
    description: '不同波长折射角分离',
    category: 'optics',
  },
  'prism-2': {
    title: '白光色散',
    description: '不同波长折射角分离',
    category: 'optics',
  },
  'prism-3': {
    title: '折射分光',
    description: '不同波长折射角分离',
    category: 'optics',
  },
  'grating-1': {
    title: '光栅衍射',
    description: '光栅多缝干涉图样',
    category: 'optics',
  },
  'grating-2': {
    title: '衍射条纹',
    description: '光栅多缝干涉图样',
    category: 'optics',
  },
  'grating-3': {
    title: '夫琅禾费衍射',
    description: '光栅多缝干涉图样',
    category: 'optics',
  },
  'lens-1': {
    title: '凸透镜',
    description: '平行光汇聚于焦点',
    category: 'optics',
  },
  'lens-2': {
    title: '透镜成像',
    description: '平行光汇聚于焦点',
    category: 'optics',
  },
  'lens-3': {
    title: '焦点汇聚',
    description: '平行光汇聚于焦点',
    category: 'optics',
  },
  'mirror-1': {
    title: '凹面镜',
    description: '反射光线汇聚',
    category: 'optics',
  },
  'mirror-2': {
    title: '反射聚焦',
    description: '反射光线汇聚',
    category: 'optics',
  },
  'mirror-3': {
    title: '镜面成像',
    description: '反射光线汇聚',
    category: 'optics',
  },
  'polar-1': {
    title: '偏振光',
    description: '偏振方向选择性透过',
    category: 'optics',
  },
  'polar-2': {
    title: '偏振片旋转',
    description: '偏振方向选择性透过',
    category: 'optics',
  },
  'polar-3': {
    title: '马吕斯定律',
    description: '偏振方向选择性透过',
    category: 'optics',
  },
  'laser-1': {
    title: '激光腔',
    description: '腔内光来回放大',
    category: 'optics',
  },
  'laser-2': {
    title: '受激辐射',
    description: '腔内光来回放大',
    category: 'optics',
  },
  'laser-3': {
    title: '激光振荡',
    description: '腔内光来回放大',
    category: 'optics',
  },
  'fiber-1': {
    title: '光纤传输',
    description: '纤芯全反射导光',
    category: 'optics',
  },
  'fiber-2': {
    title: '全反射导光',
    description: '纤芯全反射导光',
    category: 'optics',
  },
  'fiber-3': {
    title: '光导纤维',
    description: '纤芯全反射导光',
    category: 'optics',
  },
  'interf-ring-1': {
    title: '等倾干涉',
    description: '同心干涉环明暗',
    category: 'optics',
  },
  'interf-ring-2': {
    title: '牛顿环',
    description: '同心干涉环明暗',
    category: 'optics',
  },
  'interf-ring-3': {
    title: '薄膜干涉',
    description: '同心干涉环明暗',
    category: 'optics',
  },
  'thin-film-1': {
    title: '增透膜',
    description: '膜厚控制反射相位',
    category: 'optics',
  },
  'thin-film-2': {
    title: '薄膜相位',
    description: '膜厚控制反射相位',
    category: 'optics',
  },
  'thin-film-3': {
    title: '多层膜',
    description: '膜厚控制反射相位',
    category: 'optics',
  },
  'telescope': {
    title: '望远镜',
    description: '物镜像面组成像',
    category: 'optics',
  },
  'hologram': {
    title: '全息重建',
    description: '参考光干涉重建',
    category: 'optics',
  },
  'michelson-mirror': {
    title: '迈克尔逊',
    description: '分束干涉仪',
    category: 'optics',
  },
  'plate-1': {
    title: '板块俯冲',
    description: '板块碰撞俯冲消减',
    category: 'earth',
  },
  'plate-2': {
    title: '俯冲带',
    description: '板块碰撞俯冲消减',
    category: 'earth',
  },
  'plate-3': {
    title: '大洋板块',
    description: '板块碰撞俯冲消减',
    category: 'earth',
  },
  'volcano-1': {
    title: '火山喷发',
    description: '岩浆喷出与碎屑',
    category: 'earth',
  },
  'volcano-2': {
    title: '岩浆喷发',
    description: '岩浆喷出与碎屑',
    category: 'earth',
  },
  'volcano-3': {
    title: '火山口',
    description: '岩浆喷出与碎屑',
    category: 'earth',
  },
  'seismic-1': {
    title: '地震波',
    description: '体波与面波传播',
    category: 'earth',
  },
  'seismic-2': {
    title: 'P 波传播',
    description: '体波与面波传播',
    category: 'earth',
  },
  'seismic-3': {
    title: 'S 波横波',
    description: '体波与面波传播',
    category: 'earth',
  },
  'front-1': {
    title: '冷锋过境',
    description: '冷暖空气交界推进',
    category: 'earth',
  },
  'front-2': {
    title: '暖锋抬升',
    description: '冷暖空气交界推进',
    category: 'earth',
  },
  'front-3': {
    title: '锋面雨带',
    description: '冷暖空气交界推进',
    category: 'earth',
  },
  'hurricane-1': {
    title: '飓风眼',
    description: '低压气旋旋转结构',
    category: 'earth',
  },
  'hurricane-2': {
    title: '气旋旋转',
    description: '低压气旋旋转结构',
    category: 'earth',
  },
  'hurricane-3': {
    title: '台风涡旋',
    description: '低压气旋旋转结构',
    category: 'earth',
  },
  'ocean-1': {
    title: '洋流环流',
    description: '海水大规模环流',
    category: 'earth',
  },
  'ocean-2': {
    title: '赤道环流',
    description: '海水大规模环流',
    category: 'earth',
  },
  'ocean-3': {
    title: '温盐环流',
    description: '海水大规模环流',
    category: 'earth',
  },
  'glacier-1': {
    title: '冰川运动',
    description: '重力驱动冰体缓慢流动',
    category: 'earth',
  },
  'glacier-2': {
    title: '冰河推进',
    description: '重力驱动冰体缓慢流动',
    category: 'earth',
  },
  'glacier-3': {
    title: '冰舌延伸',
    description: '重力驱动冰体缓慢流动',
    category: 'earth',
  },
  'season-1': {
    title: '四季成因',
    description: '地轴倾角导致季节',
    category: 'earth',
  },
  'season-2': {
    title: '地轴倾斜',
    description: '地轴倾角导致季节',
    category: 'earth',
  },
  'season-3': {
    title: '日照变化',
    description: '地轴倾角导致季节',
    category: 'earth',
  },
  'fault-1': {
    title: '断层滑动',
    description: '岩层沿断层面错动',
    category: 'earth',
  },
  'fault-2': {
    title: '走滑断层',
    description: '岩层沿断层面错动',
    category: 'earth',
  },
  'fault-3': {
    title: '地震断层',
    description: '岩层沿断层面错动',
    category: 'earth',
  },
  'groundwater': {
    title: '地下水',
    description: '含水层渗透',
    category: 'earth',
  },
  'watershed': {
    title: '流域汇流',
    description: '降水地表汇流',
    category: 'earth',
  },
  'metronome-1': {
    title: '节拍器',
    description: '摆锤左右稳定节拍',
    category: 'music',
  },
  'metronome-2': {
    title: '稳定节拍',
    description: '摆锤左右稳定节拍',
    category: 'music',
  },
  'metronome-3': {
    title: '节奏器',
    description: '摆锤左右稳定节拍',
    category: 'music',
  },
  'string-harm-1': {
    title: '弦乐泛音',
    description: '弦上驻波与泛音列',
    category: 'music',
  },
  'string-harm-2': {
    title: '驻波泛音',
    description: '弦上驻波与泛音列',
    category: 'music',
  },
  'string-harm-3': {
    title: '弦振动',
    description: '弦上驻波与泛音列',
    category: 'music',
  },
  'drum-1': {
    title: '鼓点节奏',
    description: '周期性敲击脉冲',
    category: 'music',
  },
  'drum-2': {
    title: '打击节拍',
    description: '周期性敲击脉冲',
    category: 'music',
  },
  'drum-3': {
    title: '底鼓脉冲',
    description: '周期性敲击脉冲',
    category: 'music',
  },
  'tube-1': {
    title: '管乐共振',
    description: '管中驻波共振模',
    category: 'music',
  },
  'tube-2': {
    title: '开管闭管',
    description: '管中驻波共振模',
    category: 'music',
  },
  'tube-3': {
    title: '气柱共振',
    description: '管中驻波共振模',
    category: 'music',
  },
  'piano-1': {
    title: '钢琴击弦',
    description: '琴锤击弦发声',
    category: 'music',
  },
  'piano-2': {
    title: '琴键击弦',
    description: '琴锤击弦发声',
    category: 'music',
  },
  'piano-3': {
    title: '锤击琴弦',
    description: '琴锤击弦发声',
    category: 'music',
  },
  'spectrum-1': {
    title: '频谱瀑布',
    description: '频率成分随时间分布',
    category: 'music',
  },
  'spectrum-2': {
    title: '频谱分析',
    description: '频率成分随时间分布',
    category: 'music',
  },
  'spectrum-3': {
    title: '音色频谱',
    description: '频率成分随时间分布',
    category: 'music',
  },
  'vibrato-1': {
    title: '揉弦颤音',
    description: '音高周期性微扰',
    category: 'music',
  },
  'vibrato-2': {
    title: '音高颤动',
    description: '音高周期性微扰',
    category: 'music',
  },
  'vibrato-3': {
    title: '颤音效果',
    description: '音高周期性微扰',
    category: 'music',
  },
  'beat-mix-1': {
    title: '拍频合成',
    description: '相近频率合成拍频',
    category: 'music',
  },
  'beat-mix-2': {
    title: '双音拍频',
    description: '相近频率合成拍频',
    category: 'music',
  },
  'beat-mix-3': {
    title: '拍音',
    description: '相近频率合成拍频',
    category: 'music',
  },
  'conductor': {
    title: '指挥棒',
    description: '指挥挥拍',
    category: 'music',
  },
  'four-bar-1': {
    title: '四连杆',
    description: '四杆闭环传动',
    category: 'engineering',
  },
  'four-bar-2': {
    title: '曲柄摇杆',
    description: '四杆闭环传动',
    category: 'engineering',
  },
  'four-bar-3': {
    title: '连杆机构',
    description: '四杆闭环传动',
    category: 'engineering',
  },
  'cam-1': {
    title: '凸轮机构',
    description: '凸轮推动从动件',
    category: 'engineering',
  },
  'cam-2': {
    title: '凸轮从动',
    description: '凸轮推动从动件',
    category: 'engineering',
  },
  'cam-3': {
    title: '轮廓传动',
    description: '凸轮推动从动件',
    category: 'engineering',
  },
  'piston-1': {
    title: '活塞冲程',
    description: '活塞往复四冲程',
    category: 'engineering',
  },
  'piston-2': {
    title: '内燃冲程',
    description: '活塞往复四冲程',
    category: 'engineering',
  },
  'piston-3': {
    title: '往复运动',
    description: '活塞往复四冲程',
    category: 'engineering',
  },
  'gear-1': {
    title: '齿轮传动',
    description: '齿面啮合传递转速',
    category: 'engineering',
  },
  'gear-2': {
    title: '齿轮啮合',
    description: '齿面啮合传递转速',
    category: 'engineering',
  },
  'gear-3': {
    title: '齿比传动',
    description: '齿面啮合传递转速',
    category: 'engineering',
  },
  'bridge-1': {
    title: '桥梁振动',
    description: '结构弯曲振动模态',
    category: 'engineering',
  },
  'bridge-2': {
    title: '悬索振动',
    description: '结构弯曲振动模态',
    category: 'engineering',
  },
  'bridge-3': {
    title: '共振模态',
    description: '结构弯曲振动模态',
    category: 'engineering',
  },
  'crane-1': {
    title: '塔吊回转',
    description: '起重臂回转吊运',
    category: 'engineering',
  },
  'crane-2': {
    title: '起重臂',
    description: '起重臂回转吊运',
    category: 'engineering',
  },
  'crane-3': {
    title: '吊装回转',
    description: '起重臂回转吊运',
    category: 'engineering',
  },
  'conveyor-1': {
    title: '传送带',
    description: '皮带连续输送物料',
    category: 'engineering',
  },
  'conveyor-2': {
    title: '皮带输送',
    description: '皮带连续输送物料',
    category: 'engineering',
  },
  'conveyor-3': {
    title: '物料输送',
    description: '皮带连续输送物料',
    category: 'engineering',
  },
  'turbine-1': {
    title: '涡轮叶片',
    description: '流体推动叶轮旋转',
    category: 'engineering',
  },
  'turbine-2': {
    title: '叶轮旋转',
    description: '流体推动叶轮旋转',
    category: 'engineering',
  },
  'turbine-3': {
    title: '水轮机',
    description: '流体推动叶轮旋转',
    category: 'engineering',
  },
  'lever-pulley': {
    title: '杠杆滑轮',
    description: '滑轮组提升',
    category: 'engineering',
  },
  'epsilon-delta': {
    title: 'ε-δ 定义',
    description: '极限严格定义',
    category: 'calculus',
  },
  'rolle-theorem': {
    title: '罗尔定理',
    description: '区间内存在水平切线',
    category: 'calculus',
  },
  'mean-value': {
    title: '拉格朗日中值',
    description: '区间内存在平行切线',
    category: 'calculus',
  },
  'improper-integral': {
    title: '反常积分',
    description: '无穷区间积分收敛',
    category: 'calculus',
  },
  'parametric-curve': {
    title: '参数曲线',
    description: 'x(t),y(t) 参数运动（动画示意）',
    category: 'calculus',
  },
  'unit-circle-trig': {
    title: '单位圆三角',
    description: '三角函数单位圆定义',
    category: 'trigonometry',
  },
  'arcsin-wave': {
    title: '反正弦',
    description: 'arcsin 定义域映射（动画示意）',
    category: 'trigonometry',
  },
  'arccos-wave': {
    title: '反余弦',
    description: 'arccos 值域映射',
    category: 'trigonometry',
  },
  'tan-asymptote': {
    title: '正切渐近线',
    description: 'tan 奇点竖渐近',
    category: 'trigonometry',
  },
  'cot-period': {
    title: '余切周期',
    description: 'cot 周期振荡（动画示意）',
    category: 'trigonometry',
  },
  'sec-amplify': {
    title: '正割放大',
    description: 'sec 振幅放大',
    category: 'trigonometry',
  },
  'csc-inverse': {
    title: '余割倒数',
    description: 'csc 与 sin 倒数（动画示意）',
    category: 'trigonometry',
  },
  'half-angle': {
    title: '半角公式',
    description: 'sin(θ/2) 恒等变换',
    category: 'trigonometry',
  },
  'sum-formula': {
    title: '和差公式',
    description: 'sin(a±b) 展开（动画示意）',
    category: 'trigonometry',
  },
  'desargues': {
    title: '德萨格定理',
    description: '透视三角形共线（动画示意）',
    category: 'geometry',
  },
  'penrose-tile': {
    title: '彭罗斯镶嵌',
    description: '非周期镶嵌铺砌',
    category: 'geometry',
  },
  'delone-tri': {
    title: 'Delaunay 三角',
    description: '空圆三角剖分',
    category: 'geometry',
  },
  'steiner-tree': {
    title: '斯坦纳树',
    description: '最短连接网络（动画示意）',
    category: 'geometry',
  },
  'fractal-tree': {
    title: '分形树',
    description: '递归分支生长（动画示意）',
    category: 'geometry',
  },
  'tessellation': {
    title: '平面镶嵌',
    description: '对称群平铺（动画示意）',
    category: 'geometry',
  },
  'sn1-reaction': {
    title: 'SN1 取代',
    description: '单分子亲核取代',
    category: 'chemistry',
  },
  'sn2-reaction': {
    title: 'SN2 取代',
    description: '双分子背面进攻',
    category: 'chemistry',
  },
  'esterification': {
    title: '酯化反应',
    description: '酸醇脱水成酯',
    category: 'chemistry',
  },
  'hydrolysis': {
    title: '水解反应',
    description: '键断裂加水',
    category: 'chemistry',
  },
  'polymer-chain': {
    title: '聚合反应',
    description: '单体链式增长',
    category: 'chemistry',
  },
  'catalyst-surface': {
    title: '催化表面',
    description: '吸附活化脱附',
    category: 'chemistry',
  },
  'ph-indicator': {
    title: 'pH 指示剂',
    description: '酸碱变色范围',
    category: 'chemistry',
  },
  'galvanic-cell': {
    title: '原电池',
    description: '自发氧化还原电流',
    category: 'chemistry',
  },
  'electrolysis-cell': {
    title: '电解池',
    description: '外加电压驱动',
    category: 'chemistry',
  },
  'chromatography': {
    title: '色谱分离',
    description: '组分沿柱洗脱',
    category: 'chemistry',
  },
  'mass-spec': {
    title: '质谱扫描',
    description: 'm/z 峰扫描',
    category: 'chemistry',
  },
  'ir-spectrum': {
    title: '红外光谱',
    description: '键振动吸收峰（动画示意）',
    category: 'chemistry',
  },
  'wormhole': {
    title: '虫洞',
    description: '时空短程连接',
    category: 'relativity',
  },
  'cosmological-constant': {
    title: '宇宙学常数',
    description: '加速膨胀驱动',
    category: 'relativity',
  },
  'gravitational-redshift': {
    title: '引力红移',
    description: '光子爬出势阱变红（动画示意）',
    category: 'relativity',
  },
  'shapiro-delay': {
    title: '夏皮罗延迟',
    description: '光线引力场延迟',
    category: 'relativity',
  },
  'ergosphere': {
    title: '能层',
    description: '克尔黑洞能层（动画示意）',
    category: 'relativity',
  },
  'penrose-process': {
    title: '彭罗斯过程',
    description: '能层能量提取（动画示意）',
    category: 'relativity',
  },
  'alcubierre': {
    title: '阿库别里驱动',
    description: '曲率驱动气泡（动画示意）',
    category: 'relativity',
  },
  'blandford-znajek': {
    title: 'BZ 过程',
    description: '黑洞磁场能量提取',
    category: 'relativity',
  },
  'naked-singularity': {
    title: '裸奇点',
    description: '无视界奇点（动画示意）',
    category: 'relativity',
  },
  'ads-cft': {
    title: 'AdS/CFT',
    description: '体边界对偶（动画示意）',
    category: 'relativity',
  },
  'exoplanet-transit': {
    title: '系外行星凌日',
    description: '亮度周期性下降（动画示意）',
    category: 'astronomy',
  },
  'habitable-zone': {
    title: '宜居带',
    description: '液态水轨道带（动画示意）',
    category: 'astronomy',
  },
  'tidal-heating': {
    title: '潮汐加热',
    description: '椭圆轨道摩擦生热',
    category: 'astronomy',
  },
  'ring-resonance': {
    title: '环系共振',
    description: '牧羊卫星共振',
    category: 'astronomy',
  },
  'stellar-wind-bubble': {
    title: '恒星风泡',
    description: '星风吹出泡状结构',
    category: 'astronomy',
  },
  'planetary-migration': {
    title: '行星迁移',
    description: '盘力轨道内移（动画示意）',
    category: 'astronomy',
  },
  'dust-disk': {
    title: '原行星盘',
    description: '尘埃盘螺旋结构',
    category: 'astronomy',
  },
  'microlensing': {
    title: '微引力透镜',
    description: '前景星放大背景',
    category: 'astronomy',
  },
  'fast-radio-burst': {
    title: '快速射电暴',
    description: '毫秒射电爆发（动画示意）',
    category: 'astronomy',
  },
  'pulsar-glitch': {
    title: '脉冲星跳变',
    description: '中子星转速突变',
    category: 'astronomy',
  },
  'top-quark': {
    title: '顶夸克',
    description: '最重夸克衰变（动画示意）',
    category: 'quantum',
  },
  'higgs-boson': {
    title: '希格斯玻色子',
    description: '质量赋予机制（动画示意）',
    category: 'quantum',
  },
  'gluon-jet': {
    title: '胶子喷注',
    description: 'QCD 强子化喷流',
    category: 'quantum',
  },
  'muon-g2': {
    title: 'μ 子 g-2',
    description: '反常磁矩进动',
    category: 'quantum',
  },
  'anyon-braid': {
    title: '任意子编织',
    description: '拓扑量子统计',
    category: 'quantum',
  },
  'majorana-zero': {
    title: '马约拉纳零模',
    description: '拓扑零能态（动画示意）',
    category: 'quantum',
  },
  'quantum-dot': {
    title: '量子点',
    description: '受限能级跃迁（动画示意）',
    category: 'quantum',
  },
  'superconduct-qubit': {
    title: '超导量子比特',
    description: '约瑟夫森结振荡',
    category: 'quantum',
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
    sports: 0,
    biology: 0,
    cs: 0,
    optics: 0,
    earth: 0,
    music: 0,
    engineering: 0,
  };

  for (const name of icons) {
    const category = ICON_META[name]?.category;
    if (category) {
      counts[category] += 1;
    }
  }

  return counts;
}

