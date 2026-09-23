import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import VideoPage from "@/components/VideoPage";

const CANONICAL =
  "https://synergyspineandnerve.com/30-second-spinal-hygiene-report-card/";
const VIDEO_ID = "UAuYYnLuh6U";

const cmsFallbackMetadata: Metadata = {
  title:
    "30-Second Spinal Hygiene Report Card Synergy Spine and Nerve Center",
  description:
    "Do you know if the spinal hygiene you are doing is good enough? Watch this video to give yourself a 30-second Spinal Hygiene Report Card.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "30-Second Spinal Hygiene Report Card",
    description:
      "A 30-second self-check to see whether your spinal hygiene is working.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/30-second-spinal-hygiene-report-card", cmsFallbackMetadata);
}

export default function ReportCardPage() {
  return (
    <VideoPage
      title="30-Second Spinal Hygiene Report Card"
      emphasis="Report Card"
      eyebrow="Self-check · 30 seconds"
      lead="Do you know if the spinal hygiene you are doing is good enough? This video will show you how to give yourself a Spinal Hygiene Report Card in just 30 seconds."
      videoId={VIDEO_ID}
      videoTitle="30 Second Spinal Hygiene Report Card"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Report Card" },
      ]}
      related={[
        {
          eyebrow: "Foundation",
          label: "Spinal Hygiene Video",
          href: "/spinal-hygiene-video/",
        },
        {
          eyebrow: "Education",
          label: "Backpack Analogy",
          href: "/backpack-analogy/",
        },
        {
          eyebrow: "Deeper read",
          label: "Improve Your SHA Score",
          href: "/resources/improve-your-sha-score/",
        },
      ]}
    />
  );
}
