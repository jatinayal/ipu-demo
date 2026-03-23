import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { FOOTER_LINKS, SITE_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-40 bg-slate-900 flex-none text-slate-200 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden shrink-0">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white block">
                GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY
              </span>
            </div>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>{SITE_INFO.address}</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>{SITE_INFO.phone}</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>{SITE_INFO.email}</span>
              </p>
            </div>

            <div className="flex space-x-4 pt-2">
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Academics</h3>
            <ul className="space-y-4 text-sm">
              {FOOTER_LINKS.academics.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Research</h3>
            <ul className="space-y-4 text-sm">
              {FOOTER_LINKS.research.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">About</h3>
            <ul className="space-y-4 text-sm">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 flex-col md:flex-row space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Guru Gobind Singh Indraprastha University. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
