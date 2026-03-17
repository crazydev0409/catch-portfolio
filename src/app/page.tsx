import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { IntelligenceSection } from "@/components/sections/IntelligenceSection";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <IntelligenceSection />
        <ProductPreviewSection />
        <UseCasesSection />
        <RoadmapSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
