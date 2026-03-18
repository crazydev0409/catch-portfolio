import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { IntelligenceSection } from "@/components/sections/IntelligenceSection";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <IntelligenceSection />
        <ProductPreviewSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
