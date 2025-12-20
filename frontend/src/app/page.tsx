import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Banner } from "@/components/banner/Banner";
import { Staking } from "@/components/staking/Staking";
import { SecondBanner } from "@/components/secondbanner/SecondBanner";
import { Tokenomics } from "@/components/tokenomics/Tokenomics";
import { Roadmap } from "@/components/roadmap/Roadmap";
import { WhyChooseUs } from "@/components/features/WhyChooseUs";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { FAQ } from "@/components/faq/FAQ";
import { NewsArticles } from "@/components/news/NewsArticles";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <SectionHeading
          title="DashPay (DPX) Fast, Borderless Crypto Payments With Built-In Staking"
          subtitle="A utility-first BEP-20 token designed for everyday payments starting from Pakistan and the GCC. Send value in seconds
        and let long-term holders earn staking rewards within the same ecosystem."
        />
        <Banner />
      </section>
      <section id="staking">
        <Staking />
      </section>
      <SecondBanner />
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <Testimonials />
      <section id="faq">
        <FAQ />
      </section>
      <NewsArticles />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
// initializing deployemtns
