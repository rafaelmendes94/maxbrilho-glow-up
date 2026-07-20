import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FloorTypesSection from "@/components/FloorTypesSection";
import ConcentratedFormulaSection from "@/components/ConcentratedFormulaSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import VideoSection from "@/components/VideoSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ConcentratedFormulaSection />
      <FloorTypesSection />
      <BeforeAfterSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ProductsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      
    </main>
  );
};

export default Index;
