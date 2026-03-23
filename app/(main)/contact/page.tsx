"use client";

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/Card";
import { MapPin, Phone, Mail, Search, Printer, Copy, Check, ChevronRight } from "lucide-react";
import { SITE_INFO, GGSIPU_CONTACTS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const filteredContacts = GGSIPU_CONTACTS.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.officerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedEntity = GGSIPU_CONTACTS.find((c) => c.id === selectedEntityId);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Reach out to departments, offices, and university authorities across GGSIPU."
        size="md"
      />

      <SectionWrapper backgroundColor="white" className="!py-20 md:!py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Pane: Search & Entity Selection Area */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#002147] mb-2 tracking-tight">Entity Directory</h2>

            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search department, center, or officer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-4 rounded-none border border-slate-300 focus:border-[#002147] focus:ring-1 focus:ring-[#002147] transition-all bg-slate-50 text-foreground font-sans text-base shadow-sm"
              />
            </div>

            {/* Scrollable Suggestion List */}
            <div className="border border-slate-200 bg-white shadow-sm max-h-[500px] overflow-y-auto">
              {filteredContacts.length > 0 ? (
                <ul className="divide-y divide-slate-100">
                  {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                      <button
                        onClick={() => setSelectedEntityId(contact.id)}
                        className={cn(
                          "w-full text-left px-5 py-4 transition-colors hover:bg-[#E1F5FE] focus:outline-none focus:bg-[#E1F5FE] group",
                          selectedEntityId === contact.id ? "bg-[#002147] text-white hover:bg-[#001530]" : "bg-white text-foreground"
                        )}
                      >
                        <div className="flex justify-between items-center pr-2">
                          <div>
                            <div className={cn("font-bold font-sans text-[15px] leading-snug mb-1", selectedEntityId === contact.id ? "text-white" : "text-[#002147]")}>
                              {contact.name}
                            </div>
                            <div className={cn("text-xs tracking-wider uppercase", selectedEntityId === contact.id ? "text-slate-300" : "text-slate-500 group-hover:text-[#002147]")}>
                              {contact.officerName}
                            </div>
                          </div>
                          <ChevronRight className={cn("h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1", selectedEntityId === contact.id ? "text-white translates-x-1" : "text-slate-300")} />
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-center text-slate-500 font-sans">
                  No departments or officers found matching "{searchQuery}".
                </div>
              )}
            </div>
          </div>

          {/* Right Pane: Dynamic Contact Information Section */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-serif font-bold text-[#002147] mb-6 tracking-tight">Contact Information</h2>

            <Card className="min-h-[400px] relative overflow-hidden ggsipu-shadow border-t-4 border-[#002147]">
              <AnimatePresence mode="wait">
                {selectedEntity ? (
                  <motion.div
                    key={selectedEntity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-8 md:p-10 h-full flex flex-col justify-center bg-white"
                  >
                    <div className="mb-8">
                      <span className="text-[#002147] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                        Selected Entity
                      </span>
                      <h3 className="text-3xl font-serif font-bold text-[#002147] leading-tight mb-4">
                        {selectedEntity.name}
                      </h3>
                      <div className="bg-[#E1F5FE] py-3 px-4 inline-block border-l-4 border-[#002147]">
                        <div className="font-bold text-[#002147] text-lg">{selectedEntity.officerName}</div>
                        <div className="text-sm uppercase tracking-wide text-slate-600 font-medium">{selectedEntity.designation}</div>
                      </div>
                    </div>

                    <div className="space-y-6 flex-grow">
                      {/* Phone Element */}
                      <div className="flex items-start group">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mr-4 shrink-0 group-hover:bg-[#E1F5FE] transition-colors border border-slate-100">
                          <Phone className="h-4 w-4 text-[#002147]" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Direct Line</div>
                          <div className="text-lg font-sans text-foreground font-medium">{selectedEntity.phone}</div>
                        </div>
                        <button
                          onClick={() => handleCopy(selectedEntity.phone, "phone")}
                          className="p-2 text-slate-400 hover:text-[#002147] hover:bg-slate-50 transition-colors"
                          title="Copy Phone"
                        >
                          {copiedField === "phone" ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>

                      {/* Fax Element */}
                      <div className="flex items-start group">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mr-4 shrink-0 group-hover:bg-[#E1F5FE] transition-colors border border-slate-100">
                          <Printer className="h-4 w-4 text-[#002147]" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Fax Transmission</div>
                          <div className="text-lg font-sans text-foreground font-medium">{selectedEntity.fax}</div>
                        </div>
                        <button
                          onClick={() => handleCopy(selectedEntity.fax, "fax")}
                          className="p-2 text-slate-400 hover:text-[#002147] hover:bg-slate-50 transition-colors"
                          title="Copy Fax"
                        >
                          {copiedField === "fax" ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>

                      {/* Email Element */}
                      <div className="flex items-start group">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mr-4 shrink-0 group-hover:bg-[#E1F5FE] transition-colors border border-slate-100">
                          <Mail className="h-4 w-4 text-[#002147]" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Electronic Mail</div>
                          <a href={`mailto:${selectedEntity.email}`} className="text-lg font-sans text-[#002147] font-medium hover:underline hover:underline-offset-4 block">
                            {selectedEntity.email}
                          </a>
                        </div>
                        <button
                          onClick={() => handleCopy(selectedEntity.email, "email")}
                          className="p-2 text-slate-400 hover:text-[#002147] hover:bg-slate-50 transition-colors"
                          title="Copy Email"
                        >
                          {copiedField === "email" ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 md:p-12 h-full flex flex-col justify-center bg-slate-50/50"
                  >
                    <div className="text-center max-w-md mx-auto">
                      <div className="w-16 h-16 bg-[#E1F5FE] rounded-full flex items-center justify-center mx-auto mb-6 text-[#002147]">
                        <MapPin className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#002147] mb-3">
                        GGSIPU Main Campus
                      </h3>
                      <p className="text-slate-600 mb-8 font-sans leading-relaxed">
                        Select a department or administrative office from the directory to view direct contact details and officer assignments.
                      </p>
                    </div>

                    <div className="bg-white p-6 border border-slate-200 ggsipu-shadow space-y-4">
                      <div className="flex items-center text-slate-700">
                        <Phone className="h-5 w-5 text-[#002147] mr-4 shrink-0" />
                        <span className="font-medium">General Helpline: +91-11-25302171</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <Printer className="h-5 w-5 text-[#002147] mr-4 shrink-0" />
                        <span className="font-medium">Main Fax: +91-11-25302111</span>
                      </div>
                      <div className="flex items-center text-slate-700">
                        <Mail className="h-5 w-5 text-[#002147] mr-4 shrink-0" />
                        <span className="font-medium text-[#002147]">pro@ipu.ac.in</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

        </div>
      </SectionWrapper>

      {/* Optional: All Contacts Directory (Table View) */}
      <SectionWrapper backgroundColor="gray" className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-[#002147] mb-12">All Contacts Directory</h2>

          <div className="overflow-x-auto bg-white ggsipu-shadow border border-slate-200">
            <table className="w-full text-left font-sans text-sm">
              <thead className="bg-[#002147] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">S.No</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Department / Center</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Officer / Desk</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs hidden md:table-cell">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {GGSIPU_CONTACTS.map((contact, idx) => (
                  <tr
                    key={contact.id}
                    className="hover:bg-[#E1F5FE] transition-colors cursor-pointer group"
                    onClick={() => {
                      setSelectedEntityId(contact.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                  >
                    <td className="px-6 py-5 text-slate-500 font-medium">{idx + 1}</td>
                    <td className="px-6 py-5 font-bold text-[#002147] max-w-[250px] leading-snug">{contact.name}</td>
                    <td className="px-6 py-5">
                      <div className="font-medium text-foreground">{contact.officerName}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{contact.designation}</div>
                    </td>
                    <td className="px-6 py-5 hidden md:table-cell">
                      <div className="text-foreground">{contact.phone}</div>
                      <a href={`mailto:${contact.email}`} className="text-[#002147] hover:underline block mt-1">{contact.email}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
