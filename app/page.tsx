"use client";

import { HomeNavbar } from "@/components/HomeNavbar";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CAMPUS_NEWS, UPCOMING_EVENTS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <HomeNavbar />

      {/* Cinematic Full-Screen Parallax Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 w-full h-screen z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url('https://www.stanford.edu/wp-content/uploads/2023/10/Hero-3-2-2048x1362.jpg')`,
              backgroundAttachment: 'fixed',
            }}
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-black/" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        {/* Fixed Text Layer - Centered University Title */}
        <div className="fixed inset-0 flex flex-col justify-center items-center z-10 px-4 mb-20 md:mb-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <h1
              className="font-serif text-white font-bold leading-[1.05] tracking-tight drop-shadow-2xl max-w-6xl mx-auto"
              style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)' }}
            >
              GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY
            </h1>
          </motion.div>
        </div>

        {/* Scrollable Hero CTA */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="w-full flex flex-col items-center justify-center bg-white text-[#002147] py-2 hover:bg-[#E1F5FE] transition-colors shadow-2xl border-t border-slate-100"
            >
              <span className="text-sm font-bold uppercase tracking-widest font-sans mb-1">
                Explore GGSIPU
              </span>
              <ChevronDown className="h-6 w-6 animate-bounce text-[#002147]" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content wrapper with higher z-index and solid background to cover fixed elements */}
      <div className="relative z-30 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-screen">
        {/* Minimal Mission Section */}
        <SectionWrapper backgroundColor="white" className="!py-32 md:!py-40">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight mb-8"
            >
              A Place for Learning, Discovery, and Innovation.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto"
            >
              GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY is dedicated to finding solutions to big challenges and to preparing students for leadership in a complex world.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Campus News Section (3-col Borderless Grid) */}
        <SectionWrapper backgroundColor="gray" className="border-t border-slate-100">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-16">Campus News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CAMPUS_NEWS.map((news, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="overflow-hidden mb-6 aspect-[4/3] bg-slate-200 w-full relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${news.image})` }}
                  />
                </div>
                <div className="flex-grow">
                  <span className="text-[#002147] text-sm font-bold tracking-widest uppercase mb-3 block">
                    {news.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4 leading-snug group-hover:underline decoration-2 underline-offset-4">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {news.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="/news" className="border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white rounded-none px-8 py-6 text-base uppercase tracking-widest font-bold">
              More News
            </a>
          </div>
        </SectionWrapper>

        {/* Research Impact Stats */}
        <SectionWrapper backgroundColor="white">
          <div className="max-w-6xl mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="py-8 md:py-0 px-4">
                <span className="block text-7xl md:text-8xl font-bold font-serif text-[#002147] mb-4">17</span>
                <span className="block text-xl md:text-2xl text-foreground font-medium">Nobel Laureates currently on faculty</span>
              </div>
              <div className="py-8 md:py-0 px-4">
                <span className="block text-7xl md:text-8xl font-bold font-serif text-[#002147] mb-4">4:1</span>
                <span className="block text-xl md:text-2xl text-foreground font-medium">Student-to-faculty ratio</span>
              </div>
              <div className="py-8 md:py-0 px-4">
                <span className="block text-7xl md:text-8xl font-bold font-serif text-[#002147] mb-4">6K+</span>
                <span className="block text-xl md:text-2xl text-foreground font-medium">Externally sponsored research projects</span>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Full-width Transitional Gateway (Health Care) */}
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center mb-10 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2600&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-xl text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white drop-shadow-md">GGSIPU Health Care</h2>
              <p className="text-xl mb-10 text-white/90 drop-shadow flex-grow">
                Pioneering new ways to diagnose and treat diseases, bringing leading-edge discoveries from the laboratory directly to the patient&apos;s bedside.
              </p>
              <Button className="bg-[#002147] hover:bg-[#001530] text-white rounded-none px-8 py-6 text-base font-bold tracking-widest uppercase">
                Explore Medicine <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events (4-col distinct date squares) */}
        <SectionWrapper backgroundColor="white" className="pt-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-16">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {UPCOMING_EVENTS.map((event, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block border border-slate-200 hover:border-[#002147] transition-colors bg-white hover:shadow-lg p-6 relative"
              >
                {/* Date Square */}
                <div className="absolute -top-6 left-6 bg-[#002147] text-white p-3 text-center min-w-[70px] shadow-md">
                  <span className="block text-xs font-bold uppercase tracking-wider opacity-90">{event.month}</span>
                  <span className="block text-2xl font-serif font-bold">{event.day}</span>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-[#002147] transition-colors line-clamp-3 mb-4 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">
                    {event.time}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </SectionWrapper>

        {/* Human Quote Section */}
        <SectionWrapper backgroundColor="gray" className="py-32">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop"
                alt="Faculty member"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <blockquote className="text-2xl md:text-4xl font-serif italic text-foreground leading-snug mb-8 relative">
                <span className="absolute -top-4 -left-8 text-8xl text-slate-300 font-serif leading-none select-none opacity-50">&ldquo;</span>
                We do not just seek knowledge for its own sake. We seek it to make the world a better, more humane place. That is the true spirit of this institution.
              </blockquote>
              <div>
                <div className="text-lg font-bold font-sans text-foreground">Dr. Sarah Jenkins</div>
                <div className="text-[#002147] uppercase tracking-wider text-sm font-bold mt-1">Professor of Bioengineering</div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Action Footer Callout */}
        <section className="bg-[#002147] text-white py-24 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Take the Next Step</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <Button className="bg-white hover:bg-slate-100 text-[#002147] rounded-none px-8 py-6 text-base font-bold tracking-widest uppercase transition-colors">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002147] rounded-none px-8 py-6 text-base font-bold tracking-widest uppercase transition-colors">
              Visit Campus
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
