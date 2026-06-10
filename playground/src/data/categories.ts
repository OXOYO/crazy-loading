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

const CATEGORY_LABEL_MAP = Object.fromEntries(
  CATEGORIES.filter((item) => item.id !== 'all').map((item) => [item.id, item.label]),
) as Record<IconCategory, string>;

export function getCategoryLabel(category: IconCategory): string {
  return CATEGORY_LABEL_MAP[category];
}

