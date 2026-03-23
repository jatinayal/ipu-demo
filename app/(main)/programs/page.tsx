"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Search, X, CheckCircle2, ArrowLeft, Download, FileText, ChevronRight } from "lucide-react";
import { GGSIPU_PROGRAMS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Filter schemas generated from data
const DEGREE_TYPES = Array.from(new Set(GGSIPU_PROGRAMS.map(p => p.degreeType)));
const DURATIONS = Array.from(new Set(GGSIPU_PROGRAMS.map(p => p.duration)));
const STREAMS = Array.from(new Set(GGSIPU_PROGRAMS.map(p => p.stream)));

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<{ category: string, value: string }[]>([]);
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  // Cross-filtering logic
  const filteredPrograms = useMemo(() => {
    return GGSIPU_PROGRAMS.filter((program) => {
      const matchSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          program.department.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchFilters = activeFilters.every(filter => {
        if (filter.category === "Degree") return program.degreeType === filter.value;
        if (filter.category === "Duration") return program.duration === filter.value;
        if (filter.category === "Stream") return program.stream === filter.value;
        return true;
      });

      return matchSearch && matchFilters;
    });
  }, [searchQuery, activeFilters]);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters(prev => {
      const exists = prev.find(f => f.category === category && f.value === value);
      if (exists) {
        return prev.filter(f => !(f.category === category && f.value === value));
      } else {
        return [...prev, { category, value }];
      }
    });
  };

  const removeFilter = (category: string, value: string) => {
    setActiveFilters(prev => prev.filter(f => !(f.category === category && f.value === value)));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSearchQuery("");
  };

  const selectedProgram = useMemo(() => {
    return GGSIPU_PROGRAMS.find(p => p.id === selectedProgramId);
  }, [selectedProgramId]);

  return (
    <>
      <HeroSection
        title="Explore Programs"
        subtitle="Discover undergraduate, postgraduate, and professional programs offered at GGSIPU."
        size="md"
      />

      <SectionWrapper backgroundColor="gray" className="!py-16 md:!py-20 min-h-[800px]">
        <div className="max-w-7xl mx-auto">
          
          <AnimatePresence mode="wait">
            {!selectedProgram ? (
              <motion.div
                key="discovery-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Search & Filter Interface */}
                <div className="bg-white p-6 md:p-8 ggsipu-shadow mb-12 sticky top-20 z-20 border border-slate-200">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-6 w-6 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search programs (e.g., BCA, MBA, Engineering...)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 md:py-5 text-lg rounded-none border-2 border-slate-200 focus:border-[#002147] focus:ring-1 focus:ring-[#002147] transition-all bg-slate-50 text-foreground font-sans shadow-sm"
                    />
                  </div>

                  {/* Filter Selectors */}
                  <div className="flex flex-col md:flex-row gap-8 mb-6">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Degree Type</h4>
                      <div className="flex flex-wrap gap-2">
                        {DEGREE_TYPES.map(deg => {
                          const isActive = activeFilters.some(f => f.category === "Degree" && f.value === deg);
                          return (
                            <button
                              key={`deg-${deg}`}
                              onClick={() => toggleFilter("Degree", deg)}
                              className={cn(
                                "px-4 py-2 text-sm font-semibold rounded-full border transition-all",
                                isActive 
                                  ? "bg-[#002147] text-white border-[#002147] shadow-md" 
                                  : "bg-white text-slate-600 border-slate-300 hover:border-[#002147] hover:text-[#002147]"
                              )}
                            >
                              {deg}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Duration</h4>
                      <div className="flex flex-wrap gap-2">
                        {DURATIONS.map(dur => {
                          const isActive = activeFilters.some(f => f.category === "Duration" && f.value === dur);
                          return (
                            <button
                              key={`dur-${dur}`}
                              onClick={() => toggleFilter("Duration", dur)}
                              className={cn(
                                "px-4 py-2 text-sm font-semibold rounded-full border transition-all",
                                isActive 
                                  ? "bg-[#002147] text-white border-[#002147] shadow-md" 
                                  : "bg-white text-slate-600 border-slate-300 hover:border-[#002147] hover:text-[#002147]"
                              )}
                            >
                              {dur}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Stream</h4>
                      <div className="flex flex-wrap gap-2">
                        {STREAMS.map(stream => {
                          const isActive = activeFilters.some(f => f.category === "Stream" && f.value === stream);
                          return (
                            <button
                              key={`stream-${stream}`}
                              onClick={() => toggleFilter("Stream", stream)}
                              className={cn(
                                "px-4 py-2 text-sm font-semibold rounded-full border transition-all",
                                isActive 
                                  ? "bg-[#002147] text-white border-[#002147] shadow-md" 
                                  : "bg-white text-slate-600 border-slate-300 hover:border-[#002147] hover:text-[#002147]"
                              )}
                            >
                              {stream}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Active Filter Bubbles */}
                  {activeFilters.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="text-sm text-slate-500 mr-2">Active Filters:</span>
                      {activeFilters.map(filter => (
                        <span 
                          key={`${filter.category}-${filter.value}`} 
                          className="inline-flex items-center px-3 py-1 bg-[#E1F5FE] text-[#002147] text-xs font-bold rounded-full border border-[#b3e5fc]"
                        >
                          {filter.category}: {filter.value}
                          <button 
                            onClick={() => removeFilter(filter.category, filter.value)}
                            className="ml-2 hover:bg-[#002147] hover:text-white rounded-full p-0.5 transition-colors"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                      <button 
                        onClick={clearAllFilters}
                        className="text-sm text-[#002147] hover:underline font-semibold ml-auto"
                      >
                        Clear All
                      </button>
                    </div>
                  )}
                </div>

                {/* Results Grid */}
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-2xl font-serif font-bold text-[#002147]">
                    {filteredPrograms.length} {filteredPrograms.length === 1 ? "Program" : "Programs"} Found
                  </h3>
                </div>

                {filteredPrograms.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPrograms.map((program, idx) => (
                      <motion.div
                        key={program.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <Card 
                          className="h-full border border-slate-200 hover:border-[#002147] hover:shadow-xl transition-all cursor-pointer flex flex-col overflow-hidden group bg-white"
                          onClick={() => {
                            setSelectedProgramId(program.id);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {/* Program Card Header */}
                          <div className="bg-slate-50 p-6 border-b border-slate-100 group-hover:bg-[#E1F5FE] transition-colors relative">
                            {/* Badges */}
                            <div className="flex gap-2 mb-4 absolute top-6 right-6">
                              {program.tags?.slice(0, 1).map(tag => (
                                <span key={tag} className="bg-[#002147] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 flex items-center">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <span className="text-[#002147] text-xs font-bold uppercase tracking-widest block mb-2">{program.stream}</span>
                            <h3 className="text-2xl font-serif font-bold text-foreground leading-snug pr-16">{program.name}</h3>
                          </div>

                          {/* Program Card Body */}
                          <div className="p-6 flex-grow flex flex-col">
                            <p className="text-slate-600 mb-6 text-sm line-clamp-2 leading-relaxed flex-grow">
                              {program.description}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 text-sm font-semibold border-t border-slate-100 pt-4 mt-auto">
                              <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Degree</span>
                                <span className="text-foreground">{program.degreeType}</span>
                              </div>
                              <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Duration</span>
                                <span className="text-foreground">{program.duration}</span>
                              </div>
                            </div>

                            <div className="mt-6 flex items-center text-[#002147] font-bold text-sm uppercase tracking-widest group-hover:underline decoration-2 underline-offset-4">
                              View Details <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-12 text-center border border-slate-200 shadow-sm">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#002147] mb-2">No Programs Found</h3>
                    <p className="text-slate-600 font-sans mb-6">We couldn't find any programs matching your current filters.</p>
                    <Button onClick={clearAllFilters} variant="outline" className="border-[#002147] text-[#002147] uppercase tracking-widest font-bold">
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="detail-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white"
              >
                {/* Detail View Header */}
                <div className="p-8 md:p-12 border border-slate-200 border-b-0 shadow-sm">
                  <button 
                    onClick={() => setSelectedProgramId(null)}
                    className="flex items-center text-[#002147] hover:text-[#001530] font-bold text-sm uppercase tracking-widest mb-8 hover:-translate-x-1 transition-transform"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Programs
                  </button>

                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#E1F5FE] text-[#002147] text-xs font-bold uppercase tracking-widest px-3 py-1 border border-[#b3e5fc]">
                      {selectedProgram.degreeType}
                    </span>
                    <span className="bg-[#E1F5FE] text-[#002147] text-xs font-bold uppercase tracking-widest px-3 py-1 border border-[#b3e5fc]">
                      {selectedProgram.stream}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#002147] leading-tight mb-6 max-w-4xl">
                    {selectedProgram.name}
                  </h1>

                  <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
                    {selectedProgram.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100 max-w-4xl">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#002147] mr-3 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</div>
                        <div className="font-semibold text-lg text-foreground">{selectedProgram.duration} Full-Time</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#002147] mr-3 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Department</div>
                        <div className="font-semibold text-lg text-foreground">{selectedProgram.department}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detail View Action Bar */}
                <div className="bg-slate-50 p-8 border border-slate-200 border-t-0 flex flex-col sm:flex-row gap-4 flex-wrap">
                  <Button className="bg-[#002147] hover:bg-[#001530] text-white rounded-none px-8 py-6 text-sm font-bold tracking-widest uppercase transition-colors">
                    View Admission Process
                  </Button>
                  <Button variant="outline" className="border-[#002147] text-[#002147] hover:bg-slate-100 rounded-none px-8 py-6 text-sm font-bold tracking-widest uppercase flex items-center">
                    <FileText className="mr-2 h-4 w-4" /> View Eligibility
                  </Button>
                  <Button variant="outline" className="border-[#002147] text-[#002147] hover:bg-slate-100 rounded-none px-8 py-6 text-sm font-bold tracking-widest uppercase flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download Brochure
                  </Button>
                </div>

                {/* Fee Structure Table */}
                <div className="p-8 md:p-12 border border-slate-200 border-t-0 bg-white">
                  <h2 className="text-3xl font-serif font-bold text-[#002147] mb-8">Fee Structure</h2>
                  
                  <div className="overflow-x-auto border border-slate-200 shadow-sm">
                    <table className="w-full text-left font-sans text-sm min-w-[700px]">
                      <thead className="bg-[#002147] text-white">
                        <tr>
                          <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs w-1/2">Particular</th>
                          <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Fee in A.Y. 2024–25</th>
                          <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Fee in A.Y. 2025–26</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-foreground">
                        {selectedProgram.fees.map((feeRow, idx) => (
                          <tr 
                            key={idx} 
                            className={cn(
                              "transition-colors hover:bg-slate-50",
                              feeRow.label.toLowerCase().includes("total") ? "bg-[#E1F5FE] font-bold text-[#002147] text-base hover:bg-[#b3e5fc]" : ""
                            )}
                          >
                            <td className="px-6 py-4">{feeRow.label}</td>
                            <td className="px-6 py-4">{feeRow.year1}</td>
                            <td className="px-6 py-4">{feeRow.year2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 mt-6 italic bg-slate-50 p-4 border-l-4 border-slate-300">
                    * The fee structure is subject to revision annually by the Government of NCT of Delhi / University authorities. Discrepancies may arise and actual fees due could vary slightly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </SectionWrapper>
    </>
  );
}
