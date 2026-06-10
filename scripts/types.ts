export const CATEGORIES = [
  { id: 'all', label: '全部' },
  { id: 'calculus', label: '微积分' },
  { id: 'trigonometry', label: '三角函数' },
  { id: 'geometry', label: '几何' },
  { id: 'series', label: '级数与信号' },
  { id: 'statistics', label: '统计' },
  { id: 'physics', label: '物理' },
  { id: 'mechanics', label: '力学' },
  { id: 'electromagnetism', label: '电磁学' },
  { id: 'thermodynamics', label: '热力学' },
  { id: 'fluid', label: '流体力学' },
  { id: 'chemistry', label: '化学' },
  { id: 'quantum', label: '量子' },
  { id: 'relativity', label: '相对论' },
  { id: 'astronomy', label: '天文学' },
  { id: 'aerospace', label: '航天' },
  { id: 'chaos', label: '混沌与分形' },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];
export type IconCategory = Exclude<CategoryId, 'all'>;

export type TemplateName =
  | 'sine-wave'
  | 'cosine-wave'
  | 'lissajous'
  | 'rose-curve'
  | 'orbit-circle'
  | 'orbit-ellipse'
  | 'pendulum'
  | 'spring-oscillator'
  | 'exponential-decay'
  | 'logistic-curve'
  | 'gaussian-bell'
  | 'taylor-series'
  | 'fourier-bars'
  | 'hyperbola-branch'
  | 'parabola-bowl'
  | 'projectile-arc'
  | 'cycloid-roll'
  | 'catenary-sag'
  | 'gradient-descent'
  | 'wave-interference'
  | 'standing-wave'
  | 'beat-frequency'
  | 'doppler-shift'
  | 'double-slit'
  | 'brownian-motion'
  | 'light-cone'
  | 'pythagorean-pulse'
  | 'phasor-rotate'
  | 'field-divergence'
  | 'field-curl'
  | 'precession-wobble'
  | 'skip-glide-trajectory'
  | 'hohmann-transfer'
  | 'rocket-thrust'
  | 'gravitational-wave'
  | 'gravitational-lens'
  | 'accretion-disk'
  | 'pulsar-beam'
  | 'planetary-ring'
  | 'comet-tail'
  | 'tidal-bulge'
  | 'aurora-curtain'
  | 'hubble-expansion'
  | 'redshift-spectrum'
  | 'schrodinger-packet'
  | 'spin-precession'
  | 'energy-levels'
  | 'tunnel-barrier'
  | 'maxwell-rotate'
  | 'faraday-loop'
  | 'rlc-oscillation'
  | 'bernoulli-flow'
  | 'vortex-flow'
  | 'shock-compression'
  | 'heat-diffusion'
  | 'carnot-cycle'
  | 'entropy-spread'
  | 'monte-carlo'
  | 'markov-chain'
  | 'regression-line'
  | 'bifurcation-fork'
  | 'mandelbrot-orbit'
  | 'koch-snowflake'
  | 'torus-orbit'
  | 'mobius-travel'
  | 'brachistochrone'
  | 'isochrone-curve'
  | 'matrix-pulse'
  | 'eigen-resonance'
  | 'voronoi-pulse'
  | 'action-integral'
  | 'dirac-impulse'
  | 'laplace-decay'
  | 'stokes-circulation'
  | 'spiral-golden'
  | 'spiral-fibonacci'
  | 'epicycloid'
  | 'cardioid-loop'
  | 'lemniscate'
  | 'astroid-roll'
  | 'sigma-sum'
  | 'integral-bounds'
  | 'derivative-slope'
  | 'wave-packet'
  | 'magnetic-reconnection'
  | 'solar-flare'
  | 'neutron-star'
  | 'supernova-shell'
  | 'lagrange-point'
  | 'mercury-precession'
  | 'roche-limit'
  | 'lorenz-butterfly'
  | 'flyby-gravity-assist'
  | 'ideal-gas-isotherm'
  | 'radiation-sail'
  | 'asteroid-belt'
  | 'particle-cascade'
  | 'radial-particle-wind'
  | 'cmb-ripple'
  | 'elastic-collision'
  | 'snell-refraction'
  | 'total-internal-reflection'
  | 'tokamak-fusion'
  | 'cantor-prune'
  | 'fermi-contour'
  | 'virial-exchange'
  | 'hall-plateau'
  | 'dipole-antenna'
  | 'rayleigh-scatter'
  | 'oort-cloud-shell'
  | 'volume-fill'
  | 'phase-space-flow'
  | 'spectral-split'
  | 'entangled-pair'
  | 'double-pendulum'
  | 'sierpinski-fold'
  | 'reentry-blunt'
  | 'twin-clocks'
  | 'black-hole-shadow'
  | 'poisson-arrivals'
  | 'halo-envelope'
  | 'harmonic-series'
  | 'power-series-radius'
  | 'series-converge-limit'
  | 'fourier-sawtooth'
  | 'fourier-spectrum'
  | 'chi-square-skew'
  | 't-distribution-wide'
  | 'atom-shells'
  | 'molecular-bond'
  | 'benzene-ring'
  | 'crystal-lattice'
  | 'p-orbital'
  | 'ionic-lattice'
  | 'sp3-hybrid'
  | 'periodic-cell'
  | 'lewis-dots'
  | 'equilibrium-shift'
  | 'custom';

export interface IconDefinition {
  id: string;
  title: string;
  description: string;
  category: IconCategory;
  template: TemplateName;
  seed?: number;
  preserve?: boolean;
  customSvg?: string;
}
