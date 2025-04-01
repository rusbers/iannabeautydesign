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
        `inline [--base-color:hsl(var(--gold-500))] [--base-gradient-color:hsl(var(--gold-100))]`,
        className
      )}
      duration={duration}
      as="span"
    >
      {children}
    </TextShimmer>
  )
}
