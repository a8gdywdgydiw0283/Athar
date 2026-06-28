import { setRequestLocale } from "next-intl/server";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Tiers from "@/components/sections/Tiers";
import Process from "@/components/sections/Process";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <main className="min-h-screen bg-athar-black">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Tiers />
      <Process />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
