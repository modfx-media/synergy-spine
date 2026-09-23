import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import VideoPage from "@/components/VideoPage";

const CANONICAL = "https://synergyspineandnerve.com/thoracic-roller/";
const VIDEO_ID = "sR1DmFFsQsQ";

const cmsFallbackMetadata: Metadata = {
  title: "Thoracic Roller Synergy Spine and Nerve Center",
  description:
    "Watch the Thoracic Roller demonstration, improve mobility in your upper back, reduce pain and improve health. Part of the Pettibon System of Spinal Hygiene.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Thoracic Roller | Pettibon Spinal Hygiene",
    description:
      "How to use the Thoracic Roller to improve upper-back mobility.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/thoracic-roller", cmsFallbackMetadata);
}

export default function ThoracicRollerPage() {
  return (
    <VideoPage
      title="Thoracic Roller"
      emphasis="Roller"
      eyebrow="Spinal hygiene · Pettibon System"
      lead="Watch this video for instructions on how to use the Thoracic Roller to improve mobility in your upper back, reduce pain and improve health. The Thoracic Roller is part of the Pettibon System of Spinal Hygiene."
      videoId={VIDEO_ID}
      videoTitle="Thoracic Roller Demonstration"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Thoracic Roller" },
      ]}
      related={[
        {
          eyebrow: "Companion device",
          label: "6 Way Strap",
          href: "/6-way-strap/",
        },
        {
          eyebrow: "Companion device",
          label: "Over the Door Traction",
          href: "/over-the-door-traction/",
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
