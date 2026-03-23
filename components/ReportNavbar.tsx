"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ChevronDown, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const REPORT_LINKS = [
  { name: "University News", href: "#" },
  { name: "Research & Scholarship", href: "#" },
  { name: "On Campus", href: "#" },
  { name: "Student Experience", href: "#" },
  { name: "Earth & Climate", href: "#" },
];

export function ReportNavbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white border-b-4 border-[#002147] sticky top-0 z-50 flex flex-col font-sans transition-all duration-300">

      {/* Top Utility Bar & Masthead */}
      <div className={cn("flex items-center justify-between px-4 md:px-8 border-b border-slate-200 transition-all duration-300", isScrolled ? "h-14" : "h-20")}>

        {/* Left: Hamburger */}
        <div className="flex-1 flex items-center">
          <button className="flex items-center text-foreground hover:text-[#002147] transition-colors font-bold uppercase tracking-widest text-xs">
            <Menu className="h-6 w-6 mr-2" />
            <span className="hidden md:inline">Menu</span>
          </button>
        </div>

        {/* Center: Masthead */}
        <div className="flex-1 flex justify-center text-center items-center">
          <Link href="/news" className="flex items-center space-x-3 group">
            <div className={cn(
              "rounded-full bg-[#E1F5FE] overflow-hidden shadow-sm border border-slate-100 shrink-0 transition-all duration-300",
              isScrolled ? "h-8 w-8" : "h-10 w-10 md:h-14 md:w-14"
            )}>
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={cn("font-serif font-bold text-[#002147] tracking-tight transition-all duration-300", isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-5xl")}>
              GGSIPU Report
            </span>
          </Link>
        </div>

        {/* Right: Search + Filter */}
        <div className="flex-1 flex items-center justify-end space-x-6 text-sm font-semibold tracking-wide text-foreground">
          <button className="hidden md:flex items-center hover:text-[#002147] transition-colors">
            Show me <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <button className="flex items-center hover:text-[#002147] transition-colors">
            <Search className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Search</span>
          </button>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className={cn("w-full bg-white overflow-x-auto shadow-sm transition-all duration-300", isScrolled ? "h-0 opacity-0 overflow-hidden border-none" : "h-12 border-b border-slate-100 opacity-100")}>
        <div className="flex items-center justify-center space-x-8 min-w-max px-4 h-full mx-auto max-w-7xl">
          {REPORT_LINKS.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-wider text-slate-700 hover:text-[#002147] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            className="flex items-center text-[13px] font-bold uppercase tracking-wider text-[#002147]"
          >
            <Flame className="h-4 w-4 mr-1" /> Trending
          </Link>
        </div>
      </div>

    </header>
  );
}
