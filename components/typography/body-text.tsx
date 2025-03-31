import { cn } from "@/lib/utils"

const BASE_CLASS = "font-montserrat text-balance text-secondary-foreground"

export const BodyText = ({
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

// export const BodySmall = ({
//   children,
//   Tag = "p",
//   className,
// }: {
//   children: React.ReactNode
//   Tag?: "p" | "span"
//   className?: string
// }) => {
//   return <Tag className={cn(BASE_CLASS, "text-sm md:text-base", className)}>{children}</Tag>
// }
