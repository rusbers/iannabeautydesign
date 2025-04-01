/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { ChevronRight, Star, Check, Crown } from "lucide-react"
import Link from "next/link"
import { H1, H2, H3 } from "@/components/typography/heading"
import { BodyText } from "@/components/typography/body-text"
import { TextShimmerGold } from "@/components/typography/decorators"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Brushes } from "@/components/icons/brushes"
import { Lashes } from "@/components/icons/lashes"
import { Lips } from "@/components/icons/lips"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ImagesGrid />
    </>
  )
}

const SERVICES = [
  { title: "Powder Brows" },
  { title: "Aquarelle Lips" },
  { title: "Brow & Lash Lamination" },
]

// Reusable Button Component
const Button = ({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string
  variant?: "primary" | "outline"
  className?: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-8 py-4 flex items-center justify-center gap-2 transition-all duration-300 transform max-w-[21.25rem] min-w-44",
        variant === "primary" && "bg-gold-500 text-black hover:bg-gold/90 font-medium",
        variant === "outline" && "border border-gold-500 text-gold-500 hover:bg-gold-500/10",
        className
      )}
    >
      {children}
    </Link>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/background-hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2">
            <Crown className="size-4 text-gold-500" />
            <BodyText className="tracking-[0.1em] font-medium text-gold-500 font-playfair text-base">
              Premium Beauty Services
            </BodyText>
          </div>
        </div>

        {/* Main Heading */}
        <H1 className="mb-10 md:max-w-4xl">
          I Provide <TextShimmerGold>Permanent Makeup</TextShimmerGold> Solutions
        </H1>

        {/* Services List */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-10 md:mb-6">
          {SERVICES.map((service) => (
            <ServiceItem key={service.title} title={service.title} />
          ))}
        </div>

        {/* Description */}
        <BodyText className="max-w-2xl mb-10 ">
          I&apos;ve helped over 1,000 women transform their beauty routine with premium,
          long-lasting results. Experience the art of permanent makeup with Ianna—where precision
          meets perfection.
        </BodyText>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact">Book Now</Button>
          <Button href="/services" variant="outline">
            View Services
          </Button>
        </div>
      </div>
    </section>
  )
}

const ServiceItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 group">
      <Star className="size-4 text-gold-500" />
      <BodyText className="text-foreground">{title}</BodyText>
    </div>
  )
}

type SectionTagProps = {
  className?: string
  children: string
  variant?: "default" | "centered" | "responsive"
}

const SectionTag = ({ className, children, variant = "default" }: SectionTagProps) => (
  <div
    className={cn(
      "flex items-center gap-2",
      variant === "default" && "justify-start",
      variant === "centered" && "justify-center",
      variant === "responsive" && "justify-center lg:justify-start",
      className
    )}
  >
    <div className="h-px w-12 bg-gold-500"></div>
    <span className="text-gold-500 uppercase tracking-[0.2em] text-sm">{children}</span>
    {variant === "centered" && <div className="h-px w-12 bg-gold-500"></div>}
    {variant === "responsive" && <div className="h-px w-12 bg-gold-500 lg:hidden"></div>}
  </div>
)

const AboutSection = () => {
  return (
    <section className="py-20 container">
      <div className="grid lg:grid-cols-[400px_auto] gap-12 items-center">
        <SectionTag className="lg:hidden" variant="responsive">
          About Me
        </SectionTag>
        {/* Left Column - Image */}
        <div className="relative size-[280px] sm:size-[400px] mx-auto">
          <div className="absolute inset-0 border-2 border-gold-800 transform -translate-x-2 -translate-y-2 rounded-full -z-10"></div>
          <Image src="/Ianna.jpg" fill className="rounded-full" alt="Ianna" />
        </div>

        {/* Right Column - Content */}
        <div>
          <SectionTag aria-hidden className="hidden lg:flex mb-6" variant="responsive">
            About Me
          </SectionTag>

          <H2 className="mb-8 text-center lg:text-left">
            Hi! I&apos;m <span className="text-gold-500">Ianna</span> - Permanent Makeup Artist
          </H2>

          <div className="space-y-4 font-light text-center lg:text-left">
            <BodyText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugiat, fuga tenetur
              quas nulla dignissimos quia optio iusto ullam amet velit minima! Mollitia suscipit
              totam placeat nisi sapiente ea id.
            </BodyText>
            <BodyText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugiat, fuga tenetur
              quas nulla dignissimos quia optio iusto ullam amet velit minima!
            </BodyText>
          </div>

          <Button href="/contact" variant="outline" className="mt-9 mx-auto lg:mx-0">
            Contact Me
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

const ExternalLink = ({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <a
      className={cn(
        "text-secondary-foreground underline underline-offset-[6px] hover:text-gold-500 transition-all duration-300",
        className
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

// Reusable ServiceCard Component
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ElementType
  title: string
  description: string
  href: string
}) => {
  return (
    <li className="flex items-start gap-4">
      <Icon className="shrink-0 size-[3rem]" />
      <div>
        <H3 className="mb-2">{title}</H3>
        <BodyText className="mb-4 max-w-sm">{description}</BodyText>
        <ExternalLink href={href}>See More</ExternalLink>
      </div>
    </li>
  )
}

const SERVICES_DATA = [
  {
    icon: Brushes,
    title: "Powder Brows",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ea?",
    href: "/services/powder-brows",
  },
  {
    icon: Lips,
    title: "Aquarelle Lips",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ea?",
    href: "/services/aquarelle-lips",
  },
  {
    icon: Lashes,
    title: "Brow & Lash Lamination",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ea?",
    href: "/services/brow-lash-lamination",
  },
]

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-white/5">
      <div className="container">
        <H2 className="sr-only">My Services</H2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </ul>
      </div>
    </section>
  )
}

// Pricing Section

const PriceItem = ({
  service,
  price,
  description,
}: {
  service: string
  price: number
  description: string
}) => {
  return (
    <li className="group">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-2">
          <H3 className="text-montserrat font-medium">{service}</H3>
          <div className="flex-1 border-b border-dashed border-gray-700 mx-4" />
        </div>
        <span className="text-xl font-medium">€{price}</span>
      </div>
      <p className="text-gray-400 mt-2 max-w-md">{description}</p>
    </li>
  )
}

const PRICING_DATA = [
  {
    service: "Powder Brows",
    price: 155,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ea?",
  },
  {
    service: "Aquarelle Lips",
    price: 160,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ea?",
  },
  {
    service: "Brow & Lash Lamination",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ea?",
  },
]

const PricingSection = () => {
  return (
    <section className="py-20 bg-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-14 items-center lg:container">
        <div className="max-lg:container lg:pr-0">
          <SectionTag className="mb-4">Pricing</SectionTag>
          <H2 className="mb-12">Services & Price List</H2>
          <div className="max-w-3xl">
            <ul className="grid grid-cols-1 gap-8">
              {PRICING_DATA.map((item) => (
                <PriceItem key={item.service} {...item} />
              ))}
            </ul>
          </div>
          <Button href="/prices" variant="outline" className="mt-12">
            View Full Price List
          </Button>
        </div>
        <div className="relative size-full">
          <div className="absolute inset-0 bg-black/15 z-10"></div>
          <Image
            src="/prices-img.webp"
            alt=""
            fill
            className="w-full h-full object-cover object-right sm:hidden lg:inline-block"
          />
        </div>
      </div>
    </section>
  )
}

// Testimonials Section

const TestimonialCard = ({
  imageSrc,
  name,
  username,
  content,
  timeAgo,
}: {
  imageSrc: string
  name: string
  username: string
  content: string
  timeAgo: string
}) => {
  return (
    <figure className="p-8 bg-white/5 border border-gold-900 backdrop-blur-sm mb-6 flex flex-col">
      <div className="flex items-center gap-4 mb-6">
        {/* TODO Should be NextImage */}
        <img src={imageSrc} alt={name} className="w-12 h-12 object-cover rounded-full" />
        <div>
          <div>{name}</div>
          <div className="text-gold-500 text-sm">{username}</div>
        </div>
      </div>
      <p className="text-secondary-foreground font-light mb-4">{content}</p>
      <div className="text-gold-600 text-sm mt-auto">{timeAgo}</div>
    </figure>
  )
}

const TESTIMONIALS_DATA = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    name: "Sarah Mitchell",
    username: "@sarahm",
    content:
      '"I was nervous about getting powder brows, but Iana made me feel so comfortable. The results are incredible - natural-looking and exactly what I wanted! My morning routine is so much easier now. 💕"',
    timeAgo: "2 weeks ago",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    name: "Emma Thompson",
    username: "@emma.beauty",
    content:
      '"The aquarelle lips procedure was life-changing! Iana is truly an artist. The color is perfect and the shape enhances my natural lips beautifully. No more lipstick needed! ✨"',
    timeAgo: "1 month ago",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80",
    name: "Jessica Lee",
    username: "@jess.lee",
    content:
      '"The brow lamination completely transformed my face! Iana has magic hands. The whole experience was so luxurious, and the results are amazing. My brows look perfect 24/7! 🙌"',
    timeAgo: "1 month ago",
  },
]

const TestimonialsSection = () => {
  return (
    <section className="py-20 container">
      <SectionTag className="mb-4" variant="centered">
        Testimonials
      </SectionTag>
      <H2 className="mb-12 text-center">
        Real Stories, Real <span className="text-gold-500">Results</span>
      </H2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mb-6">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Instagram Link */}
      <ExternalLink className="text-center block" href="https://instagram.com/iannabeauty">
        See more client stories on Instagram
      </ExternalLink>
    </section>
  )
}

const ImagesGrid = () => {
  return (
    <section className="lg:max-w-[1550px] mx-auto lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <a
          href="https://instagram.com/iannabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden "
        >
          <div className="relative aspect-square">
            <Image
              src="/5.jpg"
              alt="Gallery image"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
        <a
          href="https://instagram.com/iannabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden"
        >
          <div className="relative aspect-square">
            <Image
              src="/2.jpg"
              alt="Gallery image"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>

        <a
          href="https://instagram.com/iannabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden col-span-2 row-span-2"
        >
          <div className="relative aspect-square">
            <Image
              src="/4.jpg"
              alt="Gallery image"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
        <a
          href="https://instagram.com/iannabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden "
        >
          <div className="relative aspect-square">
            <Image
              src="/6.jpg"
              alt="Gallery image"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
        <a
          href="https://instagram.com/iannabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden"
        >
          <div className="relative aspect-square">
            <Image
              src="/3.jpg"
              alt="Gallery image"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
        <a
          href="https://instagram.com/iannabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden"
        >
          <div className="relative aspect-square">
            <Image
              src="/7.jpg"
              alt="Gallery image"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
        <a
          href="https://instagram.com/iannabeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden"
        >
          <div className="relative aspect-square">
            <Image
              src="/1.jpg"
              alt="Gallery image"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
