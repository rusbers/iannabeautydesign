import { ChevronRight, Star, Award, Users, Clock, Check, Crown } from "lucide-react"
import { TextShimmer } from "@/components/motion-primitives/text-shimmer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}

const BACKGROUND_IMAGE =
  "https://images.pexels.com/photos/5177994/pexels-photo-5177994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const SERVICES = [
  { title: "Powder Brows" },
  { title: "Aquarelle Lips" },
  { title: "Brow & Lash Lamination" },
]

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Badge */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <Crown className="size-4 text-gold" />
            <span className="text-gold uppercase tracking-[0.2em] text-base font-medium font-playfair">
              Premium Beauty Services
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 balance-text font-playfair">
          I Provide{" "}
          <TextShimmer
            className="[--base-color:hsl(var(--gold))] [--base-gradient-color:hsl(var(--gold-light))]"
            duration={2}
          >
            Permanent
          </TextShimmer>{" "}
          Makeup Solutions
        </h1>

        {/* Services List */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10 text-white/80">
          {SERVICES.map((service) => (
            <ServiceItem key={service.title} title={service.title} />
          ))}
        </div>

        {/* Description */}
        <p className="text-white/80 text-lg mb-10 max-w-2xl font-light leading-relaxed">
          I’ve helped over 1,000 women transform their beauty routine with premium, long-lasting
          results. Experience the art of permanent makeup with Ianna—where precision meets
          perfection.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-gold text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/services"
            className="border border-gold text-gold px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/10 transition-all duration-300 transform hover:scale-105"
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
      <span className="font-montserrat">{title}</span>
    </div>
  )
}

export const AboutSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-gold/10">
            <Award className="w-12 h-12 text-gold" />
            <div>
              <div className="text-2xl font-playfair text-gold">10+ Years</div>
              <div className="text-white/80 font-light">Experience</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-gold/10">
            <Users className="w-12 h-12 text-gold" />
            <div>
              <div className="text-2xl font-playfair text-gold">2,000+</div>
              <div className="text-white/80 font-light">Happy Clients</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-gold/10">
            <Clock className="w-12 h-12 text-gold" />
            <div>
              <div className="text-2xl font-playfair text-gold">5,000+</div>
              <div className="text-white/80 font-light">Procedures</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-gold/30 transform -translate-x-4 -translate-y-4"></div>
              <div className="relative overflow-hidden">
                {/* TODO: Add image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:pl-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.2em] text-sm">About Me</span>
            </div>

            <h2 className="font-playfair text-4xl mb-8 leading-tight">
              Transforming Beauty with <span className="text-gold">Passion & Precision</span>
            </h2>

            <div className="space-y-6 text-white/80 font-light">
              <p>
                With over a decade of experience in permanent makeup artistry, I've dedicated my
                career to enhancing natural beauty and boosting confidence through precise,
                personalized treatments.
              </p>
              <p>
                My journey began in Europe, where I trained under renowned masters in microblading
                and permanent makeup. Today, I bring that expertise and artistic vision to every
                client, ensuring results that are both beautiful and natural-looking.
              </p>
              <p>
                I believe in continuous education and staying at the forefront of industry
                innovations. My studio is equipped with the latest technology, and I use only
                premium, medical-grade products to ensure the best possible results for my clients.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="border border-gold text-gold px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold/10 transition-all duration-300">
                Read More
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const PriceListSection = () => {
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
          <p className="text-white/80 font-light max-w-2xl mx-auto">
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
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Natural-looking, defined brows</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Customized shape and color</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Touch-up within 6-8 weeks</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
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
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Full lip color enhancement</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Custom color blending</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Touch-up within 6-8 weeks</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
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
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Brow shaping and tinting</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Lash lift and tint</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Nourishing treatment</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
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

export const TestimonialsSection = () => {
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
          <p className="text-white/80 font-light max-w-2xl mx-auto">
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
              <p className="text-white/80 font-light mb-4">
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
              <p className="text-white/80 font-light mb-4">
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
              <p className="text-white/80 font-light mb-4">
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

export const ContactSection = () => {
  return null
}
