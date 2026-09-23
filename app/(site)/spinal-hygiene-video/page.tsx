import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import VideoPage from "@/components/VideoPage";

const CANONICAL =
  "https://synergyspineandnerve.com/spinal-hygiene-video/";
const VIDEO_ID = "9wPYA3RWAwI";

const cmsFallbackMetadata: Metadata = {
  title: "Spinal Hygiene Video Synergy Spine and Nerve Center",
  description:
    "What happens to your brain function when you don't have full range of motion in your spine? Watch this video to find out, the foundation of spinal hygiene.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Spinal Hygiene Video | The Foundation",
    description:
      "Why full spinal range of motion is essential for brain function.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/spinal-hygiene-video", cmsFallbackMetadata);
}

export default function SpinalHygieneVideoPage() {
  return (
    <VideoPage
      title="Spinal Hygiene Video"
      emphasis="Hygiene"
      eyebrow="Foundation · Watch first"
      lead="What happens to your brain function when you do not have full range of motion in your spine? Watch this video to find out, and start your daily spinal hygiene practice on the right foot."
      videoId={VIDEO_ID}
      videoTitle="Spinal Hygiene Video"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Spinal Hygiene Video" },
      ]}
      related={[
        {
          eyebrow: "Watch next",
          label: "Use Your Head Video",
          href: "/use-your-head-video/",
        },
        {
          eyebrow: "Daily practice",
          label: "Helpful Stretches",
          href: "/helpful-stretches/",
        },
        {
          eyebrow: "Deeper read",
          label: "All About Spinal Hygiene",
          href: "/resources/all-about-spinal-hygiene/",
        },
      ]}
    />
  );
}
