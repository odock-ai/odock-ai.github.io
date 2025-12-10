import {
  BarChart3,
  Boxes,
  Briefcase,
  Activity,
  Gauge,
  Key,
  KeySquare,
  Layers,
  Network,
  Plug,
  Repeat,
  Repeat2,
  Shield,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
} from 'lucide-react';

export const iconMap = {
  BarChart3,
  Boxes,
  Briefcase,
  Activity,
  Gauge,
  Key,
  KeySquare,
  Layers,
  Network,
  Plug,
  Repeat,
  Repeat2,
  Shield,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
} as const;

export type IconName = keyof typeof iconMap;

export function getIconByName(name: string) {
  return iconMap[name as IconName] ?? null;
}
