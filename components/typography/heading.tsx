import { cn } from "@/lib/utils"

const BASE_STYLE = "font-playfair "

export const H1 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h1
      className={cn(
        BASE_STYLE,
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.18] tracking-wider",
        className
      )}
    >
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h2
      className={cn(
        BASE_STYLE,
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug tracking-wider",
        className
      )}
    >
      {children}
    </h2>
  )
}

export const H3 = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <h3
      className={cn(
        BASE_STYLE,
        "text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug",
        className
      )}
    >
      {children}
    </h3>
  )
}
