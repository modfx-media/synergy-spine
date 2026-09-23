import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import VideoPage from "@/components/VideoPage";

const CANONICAL =
  "https://synergyspineandnerve.com/use-your-head-video/";
const VIDEO_ID = "uEtdfzxle2c";

const cmsFallbackMetadata: Metadata = {
  title: "Use Your Head Video Synergy Spine and Nerve Center",
  description:
    "The foundation exercise for your spinal hygiene practice. Watch this video to learn how to keep your spine moving every day.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Use Your Head Video | Spinal Hygiene Foundation",
    description:
      "The foundation exercise for daily spinal hygiene.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/use-your-head-video", cmsFallbackMetadata);
}

export default function UseYourHeadVideoPage() {
  return (
    <VideoPage
      title="Use Your Head Video"
      emphasis="Head"
      eyebrow="Spinal hygiene · Foundation exercise"
      lead="This exercise is the foundation for your spinal hygiene. Now that you've watched the Spinal Hygiene Video, you know how important it is to get your spine moving. Watch this video to find out exactly how to do it."
      videoId={VIDEO_ID}
      videoTitle="Use Your Head"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Use Your Head" },
      ]}
      related={[
        {
          eyebrow: "Watch first",
          label: "Spinal Hygiene Video",
          href: "/spinal-hygiene-video/",
        },
        {
          eyebrow: "Daily practice",
          label: "Helpful Stretches",
          href: "/helpful-stretches/",
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
