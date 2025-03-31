/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { ChevronRight, Star, Check, Crown } from "lucide-react"
import Link from "next/link"
import { H1, H2 } from "@/components/typography/heading"
import { BodyText } from "@/components/typography/body-text"
import { TextShimmerGold } from "@/components/typography/decorators"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}

const SERVICES = [
  { title: "Powder Brows" },
  { title: "Aquarelle Lips" },
  { title: "Brow & Lash Lamination" },
]

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
            <Crown className="size-4 text-gold" />
            <BodyText className="tracking-[0.1em] font-medium text-gold font-playfair text-base">
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
          <Link
            href="/contact"
            className="bg-gold text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/90 transition-all duration-300 transform  font-medium max-w-[21.25rem] min-w-44"
          >
            Book Now
          </Link>
          <Link
            href="/services"
            className="border border-gold text-gold px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/10 transition-all duration-300 transform  max-w-[21.25rem] min-w-44"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}

const ServiceItem = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 group">
      <Star className="size-4 text-gold" />
      <BodyText className="text-foreground">{title}</BodyText>
    </div>
  )
}

const SectionTag = ({ className, children }: { className?: string; children: string }) => (
  <div className={cn("flex items-center justify-center lg:justify-start gap-2", className)}>
    <div className="h-px w-12 bg-gold"></div>
    <span className="text-gold uppercase tracking-[0.2em] text-sm">{children}</span>
    <div className="h-px w-12 bg-gold lg:hidden"></div>
  </div>
)

const AboutSection = () => {
  return (
    <section className="py-20 container">
      <div className="grid lg:grid-cols-[400px_auto] gap-12 items-center">
        <SectionTag className="lg:hidden">About Me</SectionTag>
        {/* Left Column - Image */}
        <div className="relative size-[320px] sm:size-[400px] mx-auto">
          <div className="absolute inset-0 border-2 border-gold/50 transform -translate-x-2 -translate-y-2 rounded-full -z-10"></div>
          <Image src="/ianna.jpg" fill className="rounded-full" alt="Ianna" />
        </div>

        {/* Right Column - Content */}
        <div>
          <SectionTag className="hidden lg:flex mb-6">About Me</SectionTag>

          <H2 className="mb-8 text-center lg:text-left">
            Hi! I&apos;m <span className="text-gold">Ianna</span> - Permanent Makeup Artist
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

          <Link
            href="/contact"
            className="border border-gold text-gold px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/10 transition-all duration-300 max-w-[21.25rem] min-w-44 mt-9 mx-auto lg:mx-0"
          >
            Contact Me
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const PriceListSection = () => {
  return (
    <section className="relative py-20 bg-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm">Our Services</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-playfair text-4xl mb-6">
            Investment in Your <span className="text-gold">Beauty</span>
          </h2>
          <p className=" font-light max-w-2xl mx-auto">
            Choose from our range of premium services, each designed to enhance your natural beauty
            and boost your confidence.
          </p>
        </div>

        {/* Price Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Powder Brows */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 bg-white/5 border border-gold/10 backdrop-blur-sm">
              <h3 className="font-playfair text-2xl mb-4">Powder Brows</h3>
              <div className="text-gold text-3xl font-playfair mb-6">$599</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Natural-looking, defined brows</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Customized shape and color</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Touch-up within 6-8 weeks</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Aftercare kit included</span>
                </li>
              </ul>
              <button className="w-full bg-gold text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/90 transition-all duration-300">
                Book Now
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Aquarelle Lips */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 bg-white/5 border border-gold/10 backdrop-blur-sm">
              <h3 className="font-playfair text-2xl mb-4">Aquarelle Lips</h3>
              <div className="text-gold text-3xl font-playfair mb-6">$699</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Full lip color enhancement</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Custom color blending</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Touch-up within 6-8 weeks</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Healing balm included</span>
                </li>
              </ul>
              <button className="w-full bg-gold text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/90 transition-all duration-300">
                Book Now
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Brow & Lash Lamination */}
          <div className="group relative lg:translate-y-0 md:translate-y-0 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 bg-white/5 border border-gold/10 backdrop-blur-sm">
              <h3 className="font-playfair text-2xl mb-4">Brow & Lash Lamination</h3>
              <div className="text-gold text-3xl font-playfair mb-6">$299</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Brow shaping and tinting</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Lash lift and tint</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Nourishing treatment</span>
                </li>
                <li className="flex items-center gap-3 ">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Aftercare instructions</span>
                </li>
              </ul>
              <button className="w-full bg-gold text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/90 transition-all duration-300">
                Book Now
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.2em] text-sm">Client Stories</span>
            <div className="h-px w-12 bg-gold"></div>
          </div>
          <h2 className="font-playfair text-4xl mb-6">
            Real Results, Real <span className="text-gold">Stories</span>
          </h2>
          <p className=" font-light max-w-2xl mx-auto">
            Discover what our clients say about their transformative experiences at IannaBeauty.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Testimonial 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 bg-white/5 border border-gold/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-playfair">Sarah Mitchell</div>
                  <div className="text-gold text-sm">@sarahm</div>
                </div>
              </div>
              <p className=" font-light mb-4">
                "I was nervous about getting powder brows, but Iana made me feel so comfortable. The
                results are incredible - natural-looking and exactly what I wanted! My morning
                routine is so much easier now. 💕"
              </p>
              <div className="text-gold/60 text-sm">2 weeks ago</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 bg-white/5 border border-gold/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-playfair">Emma Thompson</div>
                  <div className="text-gold text-sm">@emma.beauty</div>
                </div>
              </div>
              <p className=" font-light mb-4">
                "The aquarelle lips procedure was life-changing! Iana is truly an artist. The color
                is perfect and the shape enhances my natural lips beautifully. No more lipstick
                needed! ✨"
              </p>
              <div className="text-gold/60 text-sm">1 month ago</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 bg-white/5 border border-gold/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-playfair">Jessica Lee</div>
                  <div className="text-gold text-sm">@jess.lee</div>
                </div>
              </div>
              <p className=" font-light mb-4">
                "The brow lamination completely transformed my face! Iana has magic hands. The whole
                experience was so luxurious, and the results are amazing. My brows look perfect
                24/7! 🙌"
              </p>
              <div className="text-gold/60 text-sm">1 month ago</div>
            </div>
          </div>
        </div>

        {/* Instagram Link */}
        <div className="text-center">
          <a
            href="https://instagram.com/iannabeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors duration-300"
          >
            <span className="font-playfair text-lg">See more client stories on Instagram</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return null
}
