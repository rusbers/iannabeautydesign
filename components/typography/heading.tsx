import { cn } from "@/lib/utils"

const BASE_STYLE = "font-playfair text-balance text-foreground !leading-[1.2]"

export const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h1 className={cn(BASE_STYLE, "text-4xl md:text-5xl tracking-wide", className)}>{children}</h1>
  )
}

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h2 className={cn(BASE_STYLE, "text-3xl md:text-4xl tracking-wide", className)}>{children}</h2>
  )
}

export const H3 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h3 className={cn(BASE_STYLE, "text-xl sm:text-2xl leading-snug", className)}>{children}</h3>
  )
}
