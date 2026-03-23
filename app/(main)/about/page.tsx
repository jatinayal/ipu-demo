"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function FadeInView({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Reusable Z-Pattern Block Component
interface ZBlockProps {
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  isImageLeft?: boolean;
  backgroundColor: "white" | "gray";
}

function ZBlock({ title, content, imageUrl, imageAlt, isImageLeft = false, backgroundColor }: ZBlockProps) {
  const contentNode = (
    <div className="flex flex-col justify-center max-w-xl mx-auto md:mx-0 py-8 lg:py-0">
      <h3 className="text-3xl lg:text-4xl font-sans font-bold text-foreground mb-6 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-xl text-muted-foreground font-sans leading-[1.6] mb-10">
        {content}
      </p>
      <div>
        <Button className="bg-[#002147] hover:bg-[#001530] text-white rounded-none px-8 py-6 text-base font-bold tracking-widest uppercase shadow-none hover:shadow-lg transition-all decoration-0 hover:underline underline-offset-4">
          Learn More
        </Button>
      </div>
    </div>
  );

  const imageNode = (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.03]"
        style={{ backgroundImage: `url('${imageUrl}')` }}
        role="img"
        aria-label={imageAlt}
      />
    </div>
  );

  return (
    <SectionWrapper backgroundColor={backgroundColor} containerSize="full" className="!py-0">
      <div className="grid grid-cols-1 py-12 lg:grid-cols-2 lg:min-h-[600px]">
        {/* Mobile: Image always on top. Desktop: Order controlled by props */}
        <div className={cn("order-1 h-full", isImageLeft ? "lg:order-1" : "lg:order-2")}>
          {imageNode}
        </div>
        <div className={cn("order-2 flex px-6 md:px-16 lg:px-24", isImageLeft ? "lg:order-2" : "lg:order-1")}>
          <FadeInView delay={0.2} className="w-full flex">
            {contentNode}
          </FadeInView>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Intro minimal Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-center px-4">
        <FadeInView>
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground mb-8">
            Who We Are
          </h1>
        </FadeInView>
        <FadeInView delay={0.2} className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-[1.6]">
            Since its founding, our university has been a place of purpose. We are shaped by the vision that practical education can solve real-world problems and that cross-disciplinary collaboration is the foundation of breakthrough discoveries.
          </p>
        </FadeInView>
      </section>

      {/* Atmospheric Campus Anchor Image */}
      <section className="w-full max-w-[1700px] mx-auto px-4 md:px-8 pb-32">
        <FadeInView delay={0.3}>
          <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden bg-slate-100">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://www.stanford.edu/wp-content/uploads/2025/05/About-2048x922.jpg')` }}
            />
          </div>
        </FadeInView>
      </section>

      {/* Z-Pattern Story Blocks */}

      <ZBlock
        title="Our Identity & Mission"
        content="Our mission is to expand human knowledge and educate students for a life of purpose, leadership, and service. We believe deeply in the power of an open, inclusive, and diverse community to drive innovation and create a better world for all."
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
        imageAlt="Students collaborating outdoors"
        isImageLeft={false}
        backgroundColor="gray"
      />

      <ZBlock
        title="Academic Excellence"
        content="Seven schools, one collaborative campus. Our unique academic structure encourages students to cross boundaries and explore diverse disciplines. A liberal arts foundation combined with cutting-edge research opportunities ensures a transformative educational journey."
        imageUrl="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2670&auto=format&fit=crop"
        imageAlt="Lecture hall taking notes"
        isImageLeft={true}
        backgroundColor="white"
      />

      <ZBlock
        title="Research Without Borders"
        content="We push the boundaries of human knowledge by empowering interdisciplinary institutes. Here, experts from medicine, engineering, business, and the humanities unite to tackle humanity's most daunting global issues like climate change and artificial intelligence."
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
        imageAlt="Laboratory research scientist"
        isImageLeft={false}
        backgroundColor="gray"
      />

      <ZBlock
        title="A Vibrant Community"
        content="Campus life is defined by intellectual curiosity and active engagement. Students live, learn, and grow together in a residential ecosystem that continually inspires bold ideas, artistic expression, and lifelong friendships."
        imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop"
        imageAlt="Students walking and chatting on campus"
        isImageLeft={true}
        backgroundColor="white"
      />

      <ZBlock
        title="Our History & Legacy"
        content="Founded on a vision of pragmatic, useful education. We began as a tribute to a lost son, transforming grief into an enduring institution dedicated to producing cultured, useful citizens equipped to face the future."
        imageUrl="https://www.stanford.edu/wp-content/uploads/2023/12/20230605_Ziyad_Gawish_N6A3251-2.jpg"
        imageAlt="Historic university building and library"
        isImageLeft={false}
        backgroundColor="gray"
      />

    </>
  );
}
