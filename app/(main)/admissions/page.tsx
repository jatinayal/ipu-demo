"use client";

import React, { useEffect, useState, useRef } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Reusable Fade component
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

// CountUp Component for Admission Stats
function CountUpStat({ endValue, label, suffix = "", prefix = "" }: { endValue: number, label: string, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);

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
    <div ref={ref} className="py-8 md:py-0 px-4 flex flex-col items-center justify-center">
      <span className="block text-5xl md:text-7xl font-bold font-serif text-[#002147] mb-4 drop-shadow-sm">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="block text-lg md:text-xl text-foreground font-medium tracking-wide text-center uppercase tracking-widest text-[#002147]/80">
        {label}
      </span>
    </div>
  );
}

// Custom Offset Block for Admission Context
interface AdmissionBlockProps {
  title: string;
  description: string;
  image: string;
  links: { label: string; href: string }[];
  isReversed?: boolean;
  theme?: "light" | "dark";
}

function AdmissionBlock({ title, description, image, links, isReversed = false, theme = "light" }: AdmissionBlockProps) {
  const isDark = theme === "dark";
  
  return (
    <section className={cn("relative w-full overflow-hidden", isDark ? "bg-slate-900 py-16 md:py-24" : "py-16 md:py-32")}>
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
        
        {/* Light Theme Gray Blade Background (Desktop only) */}
        {!isDark && (
          <div 
            className={cn(
              "hidden md:block absolute top-0 bottom-0 bg-[#E1F5FE] z-0",
              isReversed ? "left-0 right-[40%]" : "right-0 left-[40%]"
            )}
          />
        )}

        {/* Mobile: Gray Background falls behind entire block for light theme */}
        {!isDark && (
          <div className="md:hidden absolute inset-0 bg-[#E1F5FE] z-0 top-1/3 bottom-0" />
        )}

        {/* Content Box */}
        <div className={cn(
          "relative z-10 flex flex-col justify-center",
          "md:col-span-5 md:py-16",
          isReversed ? "md:order-2 md:pl-16 lg:pl-28" : "md:order-1 md:pr-16 lg:pr-28"
        )}>
          <FadeInView>
            <h2 className={cn("text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight", isDark ? "text-white" : "text-foreground")}>
              {title}
            </h2>
            <p className={cn("text-lg md:text-xl font-sans leading-relaxed mb-10", isDark ? "text-slate-300" : "text-muted-foreground")}>
              {description}
            </p>
            <div className="flex flex-col space-y-5">
              {links.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className={cn(
                    "group flex items-center font-bold tracking-widest uppercase hover:underline underline-offset-4 decoration-[1.5px] text-sm md:text-base w-fit",
                    isDark ? "text-white decoration-white/50" : "text-[#002147]"
                  )}
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
          "relative z-10 w-full min-h-[400px] md:min-h-[600px] shadow-2xl overflow-hidden",
          "md:col-span-7",
          isReversed ? "md:order-1" : "md:order-2"
        )}>
          <FadeInView delay={0.2} className="w-full h-full">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </FadeInView>
        </div>

      </div>
    </section>
  );
}

export default function AdmissionsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Intro minimal Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-center px-4">
        <FadeInView>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-6">
            Admission
          </h1>
        </FadeInView>
        <FadeInView delay={0.2} className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-[1.6]">
            Every year, we assemble a diverse, brilliant cohort of students dedicated to pushing boundaries and building a better future together.
          </p>
        </FadeInView>
      </section>

      {/* Hero Human-Centric Anchor Image (Energetic) */}
      <section className="w-full max-w-[1700px] mx-auto px-4 md:px-8 pb-32">
        <FadeInView delay={0.3}>
          <div className="w-full h-[50vh] md:h-[70vh] relative bg-slate-100 group overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2560&auto=format&fit=crop')` }}
            />
          </div>
        </FadeInView>
      </section>

      {/* Interactive Statistics Grid */}
      <SectionWrapper backgroundColor="white" className="!pt-0 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <CountUpStat endValue={7820} label="Undergraduates" />
            <CountUpStat endValue={9688} label="Graduates" />
            <CountUpStat endValue={77} label="Countries Represented" />
          </div>
        </div>
      </SectionWrapper>

      {/* Pathways - Offset Alternate Blocks */}
      
      {/* 1. Undergraduate (Light Theme, Text Left) */}
      <AdmissionBlock 
        title="Undergraduate Admission"
        description="We evaluate every applicant holistically. We look beyond numbers to understand your drive, your engagement with the world around you, and the unique perspective you will bring to our community."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
        links={[
          { label: "Our Selection Process", href: "#" },
          { label: "Application Deadlines", href: "#" },
          { label: "Requirements & Forms", href: "#" },
          { label: "Campus Tours & Visits", href: "#" }
        ]}
      />

      {/* 2. Graduate (Dark Theme, Image Left, Text Right) */}
      <AdmissionBlock 
        title="Graduate Admission"
        description="Each of our seven schools manages its own admissions process. We seek candidates ready to plunge into deep, interdisciplinary research and emerge as leaders who redefine their fields."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
        isReversed={true}
        theme="dark"
        links={[
          { label: "Find Your Degree Program", href: "#" },
          { label: "Funding Your Education", href: "#" },
          { label: "International Applicants", href: "#" },
          { label: "Postdoctoral Programs", href: "#" }
        ]}
      />

      {/* Financial Aid 2x2 Grid */}
      <SectionWrapper backgroundColor="gray" className="py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Financial Aid</h2>
              <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
                We are committed to making a world-class education affordable. Our aid program is need-blind for U.S. citizens and permanent residents.
              </p>
            </FadeInView>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 max-w-4xl mx-auto">
            <FadeInView delay={0.1} className="text-center bg-white p-12 border-t-4 border-[#002147] shadow-sm">
              <span className="block text-6xl font-serif font-bold text-[#002147] mb-4">80%</span>
              <span className="block text-lg font-sans text-foreground font-medium uppercase tracking-widest">Receive Financial Assistance</span>
            </FadeInView>
            <FadeInView delay={0.2} className="text-center bg-white p-12 border-t-4 border-[#002147] shadow-sm">
              <span className="block text-6xl font-serif font-bold text-[#002147] mb-4">$150K</span>
              <span className="block text-lg font-sans text-foreground font-medium tracking-wide uppercase">Tuition covered for families earning under this limit</span>
            </FadeInView>
            <FadeInView delay={0.3} className="text-center bg-white p-12 border-t-4 border-[#002147] shadow-sm">
              <span className="block text-6xl font-serif font-bold text-[#002147] mb-4">$62K</span>
              <span className="block text-lg font-sans text-foreground font-medium tracking-wide uppercase">Average Annual Scholarship</span>
            </FadeInView>
            <FadeInView delay={0.4} className="text-center bg-white p-12 border-t-4 border-[#002147] shadow-sm">
              <span className="block text-6xl font-serif font-bold text-[#002147] mb-4">0</span>
              <span className="block text-lg font-sans text-foreground font-medium tracking-wide uppercase">Expected borrow to pay for education</span>
            </FadeInView>
          </div>

          <div className="text-center">
            <FadeInView delay={0.5}>
              <Button className="bg-[#002147] hover:bg-[#001530] text-white rounded-none px-12 py-8 text-sm md:text-base font-bold tracking-[0.15em] uppercase shadow-none hover:shadow-xl transition-all">
                More About Financial Aid
              </Button>
            </FadeInView>
          </div>
        </div>
      </SectionWrapper>

      {/* Alternative Pathways Block */}
      <SectionWrapper backgroundColor="white" className="py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Additional Pathways</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-10 md:mb-12">
              Beyond traditional undergraduate and graduate degrees, we offer robust educational options ranging from summer intensive sessions to specialized non-degree professional tracks.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:space-x-12 space-y-4 md:space-y-0 text-left md:text-center">
              <Link href="#" className="group flex items-center md:justify-center text-[#002147] font-bold tracking-widest uppercase hover:underline underline-offset-4 decoration-2 text-sm">
                Summer Session <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#" className="group flex items-center md:justify-center text-[#002147] font-bold tracking-widest uppercase hover:underline underline-offset-4 decoration-2 text-sm">
                Pre-Collegiate Programs <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#" className="group flex items-center md:justify-center text-[#002147] font-bold tracking-widest uppercase hover:underline underline-offset-4 decoration-2 text-sm">
                Non-Degree Programs <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </SectionWrapper>

    </div>
  );
}
