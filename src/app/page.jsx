import Hero from "@/components/home/Hero";
import Trusted from "@/components/home/Trusted";
import PracticeAreas from "@/components/home/legal-services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TopLawyers from "@/components/home/TopLawyers";
import HowItWorks from "@/components/home/HowItWorks";
import Cities from "@/components/home/Cities";
import Testimonials from "@/components/home/Testimonials";
import LatestBlogs from "@/components/home/LatestBlogs";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <PracticeAreas />
      <WhyChooseUs />
      <TopLawyers />
      <HowItWorks />
      <Cities />
      <Testimonials />
      <LatestBlogs />
      <FAQ />
      <CallToAction />
    </>
  );
}
