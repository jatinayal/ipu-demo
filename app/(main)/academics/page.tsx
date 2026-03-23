"use client";

import React, { useEffect, useState, useRef } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { motion, useInView } from "framer-motion";
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

// CountUp Component
function CountUpStat({ endValue, label, suffix = "" }: { endValue: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = endValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="py-8 md:py-0 px-4 flex flex-col items-center">
      <span className="block text-6xl md:text-7xl font-bold font-serif text-[#002147] mb-4">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="block text-xl md:text-2xl text-foreground font-medium tracking-wide text-center">
        {label}
      </span>
    </div>
  );
}

// Offset Blade Block Component
interface OffsetBlockProps {
  title: string;
  description: string;
  image: string;
  links: { label: string; href: string }[];
  isReversed?: boolean;
}

function OffsetBlock({ title, description, image, links, isReversed = false }: OffsetBlockProps) {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">

        {/* The Light Gray Blade Background (Desktop only) */}
        <div
          className={cn(
            "hidden md:block absolute top-0 bottom-0 bg-[#E1F5FE] z-0",
            isReversed ? "left-0 right-[40%]" : "right-0 left-[40%]"
          )}
        />

        {/* Mobile: Gray Background falls behind entire block */}
        <div className="md:hidden absolute inset-0 bg-[#E1F5FE] z-0 top-1/3 bottom-0" />

        {/* Content Box */}
        <div className={cn(
          "relative z-10 flex flex-col justify-center",
          "md:col-span-5 md:py-16",
          isReversed ? "md:order-2 md:pl-16 lg:pl-24" : "md:order-1 md:pr-16 lg:pr-24"
        )}>
          <FadeInView>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-10">
              {description}
            </p>
            <div className="flex flex-col space-y-4">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group flex items-center text-[#002147] font-bold tracking-widest uppercase hover:underline underline-offset-4 decoration-[1.5px] text-sm md:text-base w-fit"
                >
                  {link.label}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </FadeInView>
        </div>

        {/* Image Box */}
        <div className={cn(
          "relative z-10 w-full min-h-[400px] md:min-h-[600px] shadow-2xl",
          "md:col-span-7",
          isReversed ? "md:order-1" : "md:order-2"
        )}>
          <FadeInView delay={0.2} className="w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </FadeInView>
        </div>

      </div>
    </section>
  );
}

export default function AcademicsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Intro minimal Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-center px-4">
        <FadeInView>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-6">
            Academics
          </h1>
        </FadeInView>
        <FadeInView delay={0.2} className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-[1.6]">
            Preparing students for leadership in a complex world through boundless, cross-disciplinary exploration.
          </p>
        </FadeInView>
      </section>

      {/* Hero Human-Centric Anchor Image */}
      <section className="w-full max-w-[1700px] mx-auto px-4 md:px-8 pb-32">
        <FadeInView delay={0.3}>
          <div className="w-full h-[50vh] md:h-[70vh] relative bg-slate-100">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop')` }}
            />
          </div>
        </FadeInView>
      </section>

      {/* Interactive Statistics Grid */}
      <SectionWrapper backgroundColor="white" className="!pt-0 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <CountUpStat endValue={2300} label="Faculty members" suffix="+" />
            <CountUpStat endValue={200} label="Graduate degree programs" />
            <CountUpStat endValue={7} label="World-class Schools" />
          </div>
        </div>
      </SectionWrapper>

      {/* Pathways - Offset Alternate Blocks */}

      {/* 1. Undergraduate */}
      <OffsetBlock
        title="Undergraduate Studies"
        description="Our undergraduate programs offer a broad, deeply engaging liberal arts foundation paired with unparalleled access to top-tier research faculty. Discover over 65 major fields of study designed to adapt to a changing world."
        image="https://www.stanford.edu/wp-content/uploads/2023/05/20230418_Grayson_Armour_95A0681-2.jpg"
        links={[
          { label: "Majors & Minors", href: "#" },
          { label: "Introductory Seminars", href: "#" },
          { label: "Undergraduate Advising", href: "#" }
        ]}
      />

      {/* 2. Graduate (Reversed) */}
      <OffsetBlock
        title="Graduate Studies"
        description="GGSIPU graduate students work shoulder-to-shoulder with pioneers in their fields. With access to heavily interdisciplinary institutes, our master's and doctoral candidates continually drive global academic paradigms forward."
        image="https://www.stanford.edu/wp-content/uploads/2025/05/20240206_Blue_food_policy_lab_N6A0064.jpg"
        isReversed={true}
        links={[
          { label: "Graduate Programs", href: "#" },
          { label: "Vice Provost for Graduate Education", href: "#" },
          { label: "Postdoctoral Scholars", href: "#" }
        ]}
      />

      {/* 3. Lifelong Learning */}
      <OffsetBlock
        title="Lifelong Learning"
        description="Education does not stop at graduation. We offer extensive continuing education, professional certificates, and pre-college programs tailored for executives, adult learners, and high school students across the globe."
        image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2670&auto=format&fit=crop"
        links={[
          { label: "GGSIPU Continuing Studies", href: "#" },
          { label: "Executive Education", href: "#" },
          { label: "Pre-Collegiate Studies", href: "#" }
        ]}
      />

      {/* Institutional Pivot: Seven Schools */}
      <section className="bg-slate-900 text-white py-32 md:py-48 px-4 text-center mt-20">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
              Seven Schools, One University
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-sans leading-relaxed mb-12 max-w-3xl mx-auto">
              Our academic ecosystem spans Business, Sustainability, Education, Engineering, Humanities & Sciences, Law, and Medicine—all located on a single, highly collaborative campus.
            </p>
            <Button className="bg-[#002147] hover:bg-[#001530] text-white rounded-none px-10 py-7 text-sm md:text-base font-bold tracking-[0.15em] uppercase shadow-none border border-[#002147] hover:border-[#001530] transition-colors">
              Explore Our Schools
            </Button>
          </FadeInView>
        </div>
      </section>

    </div>
  );
}
