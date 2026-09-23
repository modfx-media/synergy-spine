import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import VideoPage from "@/components/VideoPage";

const CANONICAL =
  "https://synergyspineandnerve.com/over-the-door-traction/";
const VIDEO_ID = "TbbI9zyWeKE";

const cmsFallbackMetadata: Metadata = {
  title:
    "Over The Door Traction Synergy Spine and Nerve Center",
  description:
    "Watch the Over the Door Traction demonstration, rehydrate the discs in your neck and improve your posture with the Pettibon System of Spinal Hygiene.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Over The Door Traction | Pettibon Spinal Hygiene",
    description:
      "How to use Over the Door Traction to rehydrate cervical discs and improve posture.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/over-the-door-traction", cmsFallbackMetadata);
}

export default function OverTheDoorTractionPage() {
  return (
    <VideoPage
      title="Over the Door Traction"
      emphasis="Traction"
      eyebrow="Spinal hygiene · Pettibon System"
      lead="Watch this video for instructions on how to use the Over the Door Traction to rehydrate the discs in your neck and improve your posture, part of the Pettibon System of Spinal Hygiene."
      videoId={VIDEO_ID}
      videoTitle="Over the Door Traction Demonstration"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Over The Door Traction" },
      ]}
      related={[
        {
          eyebrow: "Companion device",
          label: "6 Way Strap",
          href: "/6-way-strap/",
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
