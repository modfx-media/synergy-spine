import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import VideoPage from "@/components/VideoPage";

const CANONICAL = "https://synergyspineandnerve.com/6-way-strap/";
const VIDEO_ID = "RsgxFYDSmJs";

const cmsFallbackMetadata: Metadata = {
  title: "6 Way Strap Synergy Spine and Nerve Center",
  description:
    "Watch the 6-way strap demonstration, improve neck mobility and decrease neck pain and headaches with the Pettibon System of Spinal Hygiene.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "6 Way Strap | Pettibon Spinal Hygiene",
    description:
      "How to use the 6-way strap to improve neck mobility and reduce headaches.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/6-way-strap", cmsFallbackMetadata);
}

export default function SixWayStrapPage() {
  return (
    <VideoPage
      title="6-Way Strap"
      emphasis="Strap"
      eyebrow="Spinal hygiene · Pettibon System"
      lead="Watch this video for instructions on how to use the 6-way strap to improve neck mobility and decrease neck pain and headaches, part of the Pettibon System of Spinal Hygiene."
      videoId={VIDEO_ID}
      videoTitle="6-Way Strap Demonstration"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "6 Way Strap" },
      ]}
      related={[
        {
          eyebrow: "Companion device",
          label: "Over the Door Traction",
          href: "/over-the-door-traction/",
        },
        {
          eyebrow: "Companion device",
          label: "Thoracic Roller",
          href: "/thoracic-roller/",
        },
        {
          eyebrow: "Hub",
          label: "Traction Overview",
          href: "/traction/",
        },
      ]}
    />
  );
}
