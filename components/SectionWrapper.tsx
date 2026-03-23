import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  backgroundColor?: "white" | "gray" | "red";
  containerSize?: "sm" | "md" | "lg" | "full";
}

export function SectionWrapper({
  className,
  backgroundColor = "white",
  containerSize = "lg",
  children,
  ...props
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-[#E1F5FE]",
    red: "bg-primary text-white",
  };

  const containerClasses = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-full px-0",
  };

  return (
    <section className={cn("py-24 md:py-32", bgClasses[backgroundColor], className)} {...props}>
      <div className={cn("mx-auto px-4 md:px-8", containerClasses[containerSize])}>
        {children}
      </div>
    </section>
  );
}
