"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  size?: "md" | "lg" | "xl";
}

export function HeroSection({
  title,
  subtitle,
  imageUrl = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
  primaryAction,
  secondaryAction,
  size = "xl"
}: HeroSectionProps) {
  
  const heightClasses = {
    md: "min-h-[40vh]",
    lg: "min-h-[60vh]",
    xl: "min-h-[80vh] md:min-h-[90vh]"
  };

  return (
    <section className={`relative flex items-center justify-center ${heightClasses[size]} w-full overflow-hidden bg-slate-950`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center text-center">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-slate-100 max-w-3xl mb-10 font-medium drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        
        {(primaryAction || secondaryAction) && (
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {primaryAction && (
              <Button size="lg" className="w-full sm:w-auto text-lg" variant="primary">
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" 
                variant="outline"
              >
                {secondaryAction.label}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
