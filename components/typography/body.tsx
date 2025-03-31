import { cn } from "@/lib/utils"

const BASE_CLASS = "font-montserrat text-balance text-white/80"

export const Body = ({
  children,
  Tag = "p",
  className,
}: {
  children: React.ReactNode
  Tag?: "p" | "span"
  className?: string
}) => {
  return <Tag className={cn(BASE_CLASS, "text-lg", className)}>{children}</Tag>
}
export const BodyMedium = ({
  children,
  Tag = "p",
  className,
}: {
  children: React.ReactNode
  Tag?: "p" | "span"
  className?: string
}) => {
  return <Tag className={cn(BASE_CLASS, "text-base", className)}>{children}</Tag>
}
export const BodySmall = ({
  children,
  Tag = "p",
  className,
}: {
  children: React.ReactNode
  Tag?: "p" | "span"
  className?: string
}) => {
  return <Tag className={cn(BASE_CLASS, "text-sm", className)}>{children}</Tag>
}
