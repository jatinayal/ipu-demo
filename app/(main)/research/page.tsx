import { HeroSection } from "@/components/HeroSection";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function ResearchPage() {
  return (
    <>
      <HeroSection
        title="Research & Innovation"
        subtitle="Pushing the boundaries of human knowledge to solve the world's most daunting challenges."
        size="lg"
        imageUrl="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop"
      />
      
      <SectionWrapper backgroundColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">A Culture of Innovation</h2>
            <p className="text-lg text-muted-foreground">
              Research at our university is characterized by an intense culture of cross-disciplinary collaboration. We bring together experts from medicine, engineering, business, law, and the humanities to tackle global issues like climate change, artificial intelligence, and human health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-lg ggsipu-shadow border-t-4 border-primary">
                <h3 className="text-xl font-serif font-semibold mb-3">Interdisciplinary Institutes</h3>
                <p className="text-muted-foreground text-sm">Our 15+ cross-campus institutes connect researchers from all 7 schools to foster breakthrough discoveries.</p>
              </div>
              <div className="bg-white p-6 rounded-lg ggsipu-shadow border-t-4 border-primary">
                <h3 className="text-xl font-serif font-semibold mb-3">Libraries & Archives</h3>
                <p className="text-muted-foreground text-sm">Home to over 9 million volumes and cutting-edge digital resources that preserve human knowledge.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-primary text-white p-8 rounded-lg ggsipu-shadow h-fit">
            <h3 className="text-2xl font-serif font-bold mb-4">Research Impact</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-3xl font-bold mb-1">6,000+</div>
                <div className="text-white/80 text-sm">Externally sponsored projects</div>
              </li>
              <li className="pt-4 border-t border-white/20">
                <div className="text-3xl font-bold mb-1">$1.9B</div>
                <div className="text-white/80 text-sm">Annual research budget</div>
              </li>
              <li className="pt-4 border-t border-white/20">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-white/80 text-sm">Nobel laureates currently on faculty</div>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
