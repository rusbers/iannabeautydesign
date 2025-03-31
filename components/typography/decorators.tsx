import { cn } from "@/lib/utils"
import { TextShimmer } from "../motion-primitives/text-shimmer"

export const TextShimmerGold = ({
  children,
  className,
  duration = 2,
}: {
  children: string
  className?: string
  duration?: number
}) => {
  return (
    <TextShimmer
      className={cn(
        `[--base-color:hsl(var(--gold))] [--base-gradient-color:hsl(var(--gold-light))]`,
        className
      )}
      duration={duration}
    >
      {children}
    </TextShimmer>
  )
}
