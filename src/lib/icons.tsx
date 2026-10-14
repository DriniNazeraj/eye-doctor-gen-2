import {
  Activity,
  Aperture,
  Baby,
  CircleDot,
  Eye,
  Glasses,
  ScanLine,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

export const iconMap = {
  eye: Eye,
  baby: Baby,
  scan: ScanLine,
  retina: Aperture,
  cataract: CircleDot,
  glaucoma: Activity,
  lid: Sparkles,
  optical: Glasses,
} as const

export type IconName = keyof typeof iconMap

export function ServiceIcon({
  name,
  className,
}: {
  name: IconName
  className?: string
}) {
  const Icon: LucideIcon = iconMap[name]
  return <Icon className={className ?? "size-5"} strokeWidth={1.75} aria-hidden="true" />
}
