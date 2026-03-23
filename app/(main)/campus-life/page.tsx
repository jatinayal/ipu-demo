"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function FadeInView({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface NavLinkConfig {
  label: string;
  href: string;
}

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  links: NavLinkConfig[];
}

function ImageCard({ image, title, description, links }: ImageCardProps) {
  return (
    <div className="flex flex-col group">
      <div className="overflow-hidden mb-6 w-full aspect-[4/3] bg-slate-200 relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
      <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{title}</h3>
      <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <div className="flex flex-col space-y-3 mt-auto">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="group/link flex items-center text-[#002147] font-bold tracking-wide hover:underline underline-offset-4 decoration-[1.5px]"
          >
            {link.label}
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { number: "600+", label: "Student Organizations" },
  { number: "14,000+", label: "Students living on campus" },
  { number: "80+", label: "Student arts groups" },
];

const ESSENTIALS_CARDS = [
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
    title: "Student Life",
    description: "From student government and Greek life to community service and multicultural centers, there are countless ways to find your people.",
    links: [
      { label: "Student Organizations", href: "#" },
      { label: "Diversity & Inclusion", href: "#" },
      { label: "Public Service", href: "#" },
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop",
    title: "Housing & Dining",
    description: "A vibrant residential system that blends living and learning, complete with world-class dining facilities focused on sustainability and wellness.",
    links: [
      { label: "Residential Education", href: "#" },
      { label: "Dining Options", href: "#" },
      { label: "Housing Assignments", href: "#" },
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    title: "Health & Well-being",
    description: "Comprehensive care and resources dedicated to supporting the physical and mental well-being of every student.",
    links: [
      { label: "Vaden Health Center", href: "#" },
      { label: "Counseling (CAPS)", href: "#" },
      { label: "Recreation & Wellness", href: "#" },
    ]
  }
];

const ARTS_CARDS = [
  {
    image: "https://www.stanford.edu/wp-content/uploads/2022/04/museum.jpg",
    title: "Museums & Galleries",
    description: "Explore word-class collections, contemporary exhibitions, and an outdoor sculpture garden seamlessly woven into the campus landscape.",
    links: [
      { label: "Cantor Arts Center", href: "#" },
      { label: "Anderson Collection", href: "#" },
    ]
  },
  {
    image: "https://www.stanford.edu/wp-content/uploads/2022/04/Arts-District.jpg",
    title: "Performing Arts",
    description: "Experience phenomenal student and professional performances across breathtaking campus venues spanning music, theater, and dance.",
    links: [
      { label: "GGSIPU Live", href: "#" },
      { label: "Department of Music", href: "#" },
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2574&auto=format&fit=crop",
    title: "Creative Expression",
    description: "Makerspaces, studios, and practice rooms are open to all students, regardless of major, to tinker, build, and express themselves.",
    links: [
      { label: "Arts Intensive", href: "#" },
      { label: "Student Arts Grants", href: "#" },
    ]
  }
];

export default function CampusLifePage() {
  return (
    <>
      {/* Intro minimal Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-center px-4">
        <FadeInView>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-8">
            Campus Life
          </h1>
        </FadeInView>
        <FadeInView delay={0.2} className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-[1.6]">
            A vibrant, residential campus where students live, learn, and grow together, surrounded by natural beauty and boundless opportunities.
          </p>
        </FadeInView>
      </section>

      {/* Atmospheric Campus Anchor Image */}
      <section className="w-full max-w-[1700px] mx-auto px-4 md:px-8 pb-32">
        <FadeInView delay={0.3}>
          <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden bg-slate-100 group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-in-out group-hover:scale-[1.02]"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop')` }}
            />
          </div>
        </FadeInView>
      </section>

      {/* Overview Statistics (3-column Borderless) */}
      <SectionWrapper backgroundColor="white" className="!pt-0 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {STATS.map((stat, i) => (
              <FadeInView key={i} delay={i * 0.1} className="py-8 md:py-0 px-4">
                <span className="block text-6xl md:text-7xl font-bold font-serif text-[#002147] mb-4">{stat.number}</span>
                <span className="block text-xl md:text-2xl text-foreground font-medium">{stat.label}</span>
              </FadeInView>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Essentials Section (3-column grid) */}
      <SectionWrapper backgroundColor="gray">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            The GGSIPU Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ESSENTIALS_CARDS.map((card, idx) => (
            <FadeInView key={idx} delay={idx * 0.15} className="h-full">
              <ImageCard {...card} />
            </FadeInView>
          ))}
        </div>
      </SectionWrapper>

      {/* Arts & Culture Section */}
      <SectionWrapper backgroundColor="white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Arts & Culture
          </h2>
          <p className="text-xl text-muted-foreground font-sans leading-relaxed">
            The arts are a fundamental part of a GGSIPU education. We foster a culture where creative expression is celebrated and entirely accessible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ARTS_CARDS.map((card, idx) => (
            <FadeInView key={idx} delay={idx * 0.15} className="h-full">
              <ImageCard {...card} />
            </FadeInView>
          ))}
        </div>
      </SectionWrapper>

      {/* Athletics & Wellness Full Width Gateway */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2669&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <FadeInView delay={0.2} className="max-w-xl text-white">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md">Athletics & Fitness</h2>
            <p className="text-xl mb-10 text-white/90 drop-shadow flex-grow leading-relaxed font-sans">
              Home to the most successful athletic program in NCAA history, we also offer expansive club sports, intramurals, and state-of-the-art recreation facilities for all students.
            </p>
            <div className="flex flex-col space-y-4">
              <Link href="#" className="flex items-center text-white font-bold tracking-widest uppercase hover:text-white/80 transition-colors group">
                GGSIPU Athletics <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#" className="flex items-center text-white font-bold tracking-widest uppercase hover:text-white/80 transition-colors group">
                Recreational & Club Sports <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Getting Around (Asymmetric Section) */}
      <SectionWrapper backgroundColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative bg-white ggsipu-shadow overflow-hidden">
          {/* Mobile Image (shown first on small displays) */}
          <div className="lg:hidden w-full aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506506200949-df8644f002d1?q=80&w=2662&auto=format&fit=crop')` }} />

          {/* Text Content */}
          <div className="lg:col-span-5 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white z-10">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Getting Around
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-10">
                Nicknamed "The Farm," our 8,180-acre campus is expansive but incredibly navigable. Bicycles are the transportation of choice, supported by miles of dedicated bike paths and a free campus shuttle network.
              </p>
              <div className="flex flex-col space-y-4">
                <Link href="#" className="group flex items-center text-[#002147] font-bold tracking-widest uppercase hover:underline underline-offset-4 decoration-2">
                  Campus Maps <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="#" className="group flex items-center text-[#002147] font-bold tracking-widest uppercase hover:underline underline-offset-4 decoration-2">
                  Marguerite Shuttle <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeInView>
          </div>

          {/* Desktop Image Block */}
          <div
            className="hidden lg:block lg:col-span-7 absolute right-0 top-0 bottom-0 w-3/5 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506506200949-df8644f002d1?q=80&w=2662&auto=format&fit=crop')` }}
          />
        </div>
      </SectionWrapper>
    </>
  );
}
