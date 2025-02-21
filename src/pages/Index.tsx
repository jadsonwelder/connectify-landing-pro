
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
