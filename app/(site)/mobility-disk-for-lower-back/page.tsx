import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import VideoPage from "@/components/VideoPage";

const CANONICAL =
  "https://synergyspineandnerve.com/mobility-disk-for-lower-back/";
const VIDEO_ID = "qQ2S4UZTR_s";

const cmsFallbackMetadata: Metadata = {
  title:
    "Mobility Disk for Lower Back Synergy Spine and Nerve Center",
  description:
    "A simple lower back mobility technique using the lumbar mobility disk to greatly decrease episodes of low-back pain and keep your back feeling young.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Mobility Disk for Lower Back",
    description:
      "Simple lumbar mobility technique to decrease low-back pain.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/mobility-disk-for-lower-back", cmsFallbackMetadata);
}

export default function MobilityDiskPage() {
  return (
    <VideoPage
      title="Mobility Disk for Lower Back"
      emphasis="Lower Back"
      eyebrow="Spinal hygiene · Lumbar mobility"
      lead="Watch this video to learn the simple technique for lower back mobility that will greatly decrease episodes of lower back pain and keep your back feeling young."
      videoId={VIDEO_ID}
      videoTitle="Lumbar Mobility Disc Demonstration"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Mobility Disk" },
      ]}
      related={[
        {
          eyebrow: "Stretches",
          label: "Helpful Stretches",
          href: "/helpful-stretches/",
        },
        {
          eyebrow: "Foundation",
          label: "Use Your Head Video",
          href: "/use-your-head-video/",
        },
        {
          eyebrow: "All daily care",
          label: "Spinal Hygiene Videos",
          href: "/resources/videos/spinal-hygiene-videos/",
        },
      ]}
    />
  );
}
