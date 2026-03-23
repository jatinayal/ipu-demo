"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, UTILITY_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MainNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col shadow-md">
      {/* Utility Bar - Cardinal Red */}
      <div className="bg-[#002147] text-white text-[13px] py-1.5 px-4 md:px-12 flex justify-end items-center space-x-6 z-50 font-sans w-full relative">
        <div className="hidden md:flex space-x-5">
          {UTILITY_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="hover:underline tracking-wide opacity-90 hover:opacity-100">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-5 pl-5 border-l border-white/20">
          <button className="flex items-center opacity-90 hover:opacity-100 transition-opacity tracking-wide">
            Information for <ChevronDown className="ml-1 h-3 w-3" />
          </button>
          <button className="opacity-90 hover:opacity-100 transition-opacity">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <header className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 md:px-12">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-100 overflow-hidden shadow-sm border border-slate-200 shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif text-[1.85rem] md:text-[2.15rem] font-bold tracking-tight text-[#002147]">
              GGSIPU
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href) && link.href !== '/';
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[15px] font-semibold tracking-wide transition-colors relative py-2 font-sans",
                    isActive ? "text-[#002147]" : "text-foreground hover:text-[#002147]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="mainnav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#002147]"
                      initial={false}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t bg-white"
            >
              <div className="flex flex-col space-y-4 px-4 py-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium border-b pb-2",
                      pathname.startsWith(link.href) ? "text-[#002147]" : "text-foreground hover:text-[#002147]"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 flex flex-col space-y-4">
                  <button className="w-full flex items-center justify-center p-3 border border-border rounded text-[#002147] font-semibold hover:bg-[#E1F5FE] transition-colors">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
