import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import HeroSection from "@/components/home/HeroSection";
import PrinciplesSection from "@/components/home/PrinciplesSection";
import FeaturesBar from "@/components/home/FeaturesBar";
import DoctorSnippet from "@/components/home/DoctorSnippet";
import VideoSection from "@/components/home/VideoSection";
import HealCTASection from "@/components/home/HealCTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LatestBlogSection from "@/components/home/LatestBlogSection";
import MapSection from "@/components/home/MapSection";
import CTASection from "@/components/home/CTASection";
import HomeLocalIntent from "@/components/home/HomeLocalIntent";
import HomeFaq from "@/components/home/HomeFaq";
import { organizationSchema, SITE_ORIGIN } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve Center",
  },
  description:
    "Looking for a chiropractor in Rio Rancho, NM? Synergy Spine and Nerve Center treats back pain, sciatica, disc herniation, neuropathy, and family care. 20+ years. Call (505) 891-2280.",
  alternates: {
    canonical: `${SITE_ORIGIN}/`,
  },
  openGraph: {
    title: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve",
    description:
      "Evidence-based chiropractic in Rio Rancho. Serving Albuquerque, Corrales, Bernalillo, and the East Mountains.",
    url: `${SITE_ORIGIN}/`,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema(`${SITE_ORIGIN}/`)),
        }}
      />
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <PrinciplesSection />
        <FeaturesBar />
        <DoctorSnippet />
        <HomeLocalIntent />
        <VideoSection />
        <HealCTASection />
        <TestimonialsSection />
        <HomeFaq />
        <LatestBlogSection />
        <CTASection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
