type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl';

export type GridColumns = Partial<Record<Breakpoint, number>>;

export type GridConfig = {
  gap?: string;
  columns?: GridColumns;
};

const breakpointPrefixes: Record<Breakpoint, string> = {
  base: '',
  sm: 'sm:',
  md: 'md:',
  lg: 'lg:',
  xl: 'xl:',
};

export function buildGridClasses(grid?: GridConfig) {
  const gapClass = grid?.gap ?? '';
  const columns = grid?.columns ?? { base: 1 };

  const columnClasses = Object.entries(columns)
    .filter(([, value]) => typeof value === 'number' && value > 0)
    .map(([breakpoint, value]) => `${breakpointPrefixes[breakpoint as Breakpoint]}grid-cols-${value}`)
    .join(' ');

  return ['grid', gapClass, columnClasses].filter(Boolean).join(' ').trim();
}
