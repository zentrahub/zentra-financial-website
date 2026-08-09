import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Positioning from "@/components/sections/Positioning";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import AdvisoryApproach from "@/components/sections/AdvisoryApproach";
import SelectiveEngagement from "@/components/sections/SelectiveEngagement";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Expertise />
        <Positioning />
        <WhoWeWorkWith />
        <AdvisoryApproach />
        <SelectiveEngagement />
      </main>
      <Footer />
    </>
  );
}
