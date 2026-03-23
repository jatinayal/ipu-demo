"use client";

import { ReportNavbar } from "@/components/ReportNavbar";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function FadeInView({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Data Models
const TOP_STORY = {
  category: "Health & Medicine",
  title: "New multi-institutional consortium aims to revolutionize mental health care",
  summary: "GGSIPU researchers will co-lead a $50 million effort combining artificial intelligence, precision medicine, and deep phenotyping to personalize mental health interventions at an unprecedented scale.",
  time: "March 22, 2026",
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
};

const SIDE_STORIES = [
  {
    category: "Science & Technology",
    title: "Quantum sensing breakthrough allows monitoring of biological processes at room temperature",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2670&auto=format&fit=crop"
  },
  {
    category: "Campus Life",
    title: "University announces historical expansion of financial aid program for middle-income families",
    time: "Yesterday",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2669&auto=format&fit=crop"
  }
];

const MORE_NEWS = [
  {
    category: "Humanities",
    title: "Uncovering the lost archives of the early Renaissance",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2673&auto=format&fit=crop",
    readTime: "5 min read"
  },
  {
    category: "Earth & Climate",
    title: "How atmospheric rivers are shifting California's ecosystem",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop",
    readTime: "7 min read"
  },
  {
    category: "University Affairs",
    title: "Faculty senate debates new guidelines for generative AI in the classroom",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
    readTime: "3 min read"
  }
];

const IN_THE_NEWS = [
  { outlet: "The New York Times", title: "Why GGSIPU's latest AI model could change everything" },
  { outlet: "The Wall Street Journal", title: "Economic policies proposed by Hoover Institution scholars gain bipartisan traction" },
  { outlet: "The Atlantic", title: "Are we alone? The new array scanning the galaxy for technosignatures" }
];

const VIDEOS = [
  { title: "Inside the world's most powerful X-ray laser facility", image: "https://news.stanford.edu/__data/assets/image/0019/180280/varieties/1024w.jpg" },
  { title: "Commencement 2026 Highlights", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" },
  { title: "Robotics lab develops 'soft touch' surgical robots", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop" }
];

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <ReportNavbar />

      <main className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Editor's Thin Red Divider */}
        <div className="w-full h-1 bg-[#002147] mb-8" />

        {/* Top Stories 1+2 Asymmetrical Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

          {/* Main Hero Story (col 8) */}
          <FadeInView className="lg:col-span-8 group cursor-pointer">
            <div className="overflow-hidden mb-6 aspect-video bg-slate-100">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-in-out group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${TOP_STORY.image})` }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#002147] text-[13px] font-bold uppercase tracking-[0.15em] mb-4">
                {TOP_STORY.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] mb-5 group-hover:text-[#002147] transition-colors">
                {TOP_STORY.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed mb-4 max-w-4xl">
                {TOP_STORY.summary}
              </p>
              <div className="flex items-center text-sm font-semibold text-slate-500 uppercase tracking-widest mt-2">
                <Clock className="w-4 h-4 mr-2" /> {TOP_STORY.time}
              </div>
            </div>
          </FadeInView>

          {/* Side Stack (col 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-10 lg:pl-6 lg:border-l border-slate-200">
            {SIDE_STORIES.map((story, i) => (
              <FadeInView key={i} delay={i * 0.15} className="group cursor-pointer flex flex-col h-full border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                <div className="overflow-hidden mb-4 aspect-[3/2] bg-slate-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${story.image})` }}
                  />
                </div>
                <span className="text-[#002147] text-[11px] font-bold uppercase tracking-[0.15em] mb-3">
                  {story.category}
                </span>
                <h2 className="text-2xl font-serif font-bold text-foreground leading-snug mb-3 group-hover:text-[#002147] transition-colors">
                  {story.title}
                </h2>
                <div className="flex items-center text-xs font-semibold text-slate-500 uppercase tracking-widest mt-auto">
                  <Clock className="w-3 h-3 mr-1.5" /> {story.time}
                </div>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* Thin Divider */}
        <hr className="border-t border-slate-200 mb-16" />

        {/* 3-Column Standard Grid */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground uppercase tracking-widest relative">
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#002147]" />
              Latest News
            </h2>
            <Link href="#" className="hidden md:block text-[#002147] font-bold uppercase text-xs tracking-widest hover:underline underline-offset-4">
              View All News
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            {MORE_NEWS.map((story, i) => (
              <FadeInView key={i} delay={i * 0.1} className="group cursor-pointer">
                <div className="overflow-hidden mb-5 aspect-[4/3] bg-slate-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${story.image})` }}
                  />
                </div>
                <span className="text-[#002147] text-[11px] font-bold uppercase tracking-[0.15em] mb-3 block">
                  {story.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-foreground leading-snug mb-3 group-hover:underline underline-offset-4 decoration-2">
                  {story.title}
                </h3>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-3">
                  {story.readTime}
                </div>
              </FadeInView>
            ))}
          </div>
        </section>
      </main>

      {/* "In the News" Quote + External Links Block */}
      <section className="bg-[#E1F5FE] border-t border-b border-slate-200 py-24 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Quote Block */}
          <FadeInView className="flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Scholar Portrait" />
            </div>
            <blockquote className="text-3xl md:text-5xl font-serif italic text-foreground leading-[1.3] mb-8 text-[#002147]">
              "The speed of algorithmic evolution has outpaced our policy frameworks. We must build ethical guardrails now."
            </blockquote>
            <div className="uppercase tracking-widest text-sm font-bold text-slate-500">
              Dr. Emily Chen, <span className="text-foreground">Human-Centered AI Institute</span>
            </div>
          </FadeInView>

          {/* External Links Block */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-sans font-bold text-foreground uppercase tracking-[0.2em] mb-8 border-b-2 border-[#002147] inline-block pb-2 w-max">
              GGSIPU In The News
            </h2>
            <div className="flex flex-col space-y-6">
              {IN_THE_NEWS.map((news, i) => (
                <FadeInView key={i} delay={i * 0.1} className="group border-b border-slate-200 pb-6 last:border-0">
                  <Link href="#" className="flex flex-col">
                    <span className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2 flex items-center">
                      {news.outlet}
                    </span>
                    <span className="text-2xl font-serif font-medium text-foreground group-hover:text-[#002147] transition-colors flex items-start leading-snug">
                      {news.title}
                      <ArrowUpRight className="ml-3 w-5 h-5 text-slate-400 group-hover:text-[#002147] flex-shrink-0 mt-1" />
                    </span>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Matters Interstitial */}
      <section className="bg-slate-900 text-white py-24 md:py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <span className="text-[#E98300] font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">
              Global Impact Initiative
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Pioneering solutions for a rapidly changing planet.
            </h2>
            <p className="text-lg md:text-2xl text-slate-300 font-sans leading-relaxed mb-12 max-w-3xl mx-auto">
              Through cross-disciplinary collaboration, our researchers are actively developing sustainable technologies to combat climate collapse and preserve biodiversity.
            </p>
            <Button className="bg-[#002147] hover:bg-[#001530] text-white rounded-none px-10 py-7 text-sm md:text-base font-bold tracking-[0.15em] uppercase shadow-none border border-[#002147] hover:border-[#001530] transition-colors">
              Explore Research Matters
            </Button>
          </FadeInView>
        </div>
      </section>

      {/* Stories in Motion (Videos) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-24">
        <h2 className="text-3xl font-serif font-bold text-foreground uppercase tracking-widest relative mb-12">
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#002147]" />
          Stories in Motion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS.map((video, i) => (
            <FadeInView key={i} delay={i * 0.15} className="group cursor-pointer">
              <div className="relative aspect-video bg-slate-100 overflow-hidden mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground leading-snug group-hover:text-[#002147] transition-colors">
                {video.title}
              </h3>
            </FadeInView>
          ))}
        </div>
      </section>

    </div>
  );
}
