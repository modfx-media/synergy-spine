/** Default author for all blog posts (current and upcoming). */
export const BLOG_AUTHOR = "Dr. Brad Fackrell";

export type BlogCategory =
  | "Chiropractic Approach"
  | "Chiropractic Care"
  | "Chiropractic Education"
  | "Chiropractic Treatment"
  | "Uncategorized";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** Display date, e.g. "May 30, 2018" */
  date: string;
  /** ISO date for schema/<time>. */
  isoDate: string;
  /** Estimated read time, e.g. "4 min read" */
  readTime: string;
  /** Optional featured image URL. */
  featureImage: string | null;
  intro?: string;
  sections?: { heading: string; body: string[] }[];
  coverAlt?: string;
  cta?: { label: string; href: string };
  source?: "local" | "ranked";
};

export const CATEGORIES: BlogCategory[] = [
  "Chiropractic Approach",
  "Chiropractic Care",
  "Chiropractic Treatment",
];

export function categorySlug(c: BlogCategory): string {
  if (c === "Uncategorized") return "uncategorized";
  return c
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const POSTS: BlogPost[] = [
  {
    slug: "common-driving-mistakes-that-lead-to-auto-injuries",
    title: "Common Driving Mistakes That Lead to Auto Injuries",
    excerpt:
      "Learn everyday habits that raise crash and injury risk, plus when to see a car accident chiropractor in Rio Rancho for pain relief and mobility care.",
    category: "Chiropractic Treatment",
    date: "September 8, 2026",
    isoDate: "2026-09-08",
    readTime: "7 min read",
    featureImage:
      "/blog-images/common-driving-mistakes-that-lead-to-auto-injuries.jpeg",
  },
  {
    slug: "stop-daily-habits-that-trigger-sciatica-pain",
    title: "Stop Daily Habits That Trigger Sciatica Pain",
    excerpt:
      "Learn which everyday moves worsen nerve pain and how sciatica treatment in Rio Rancho can help you stay active with less discomfort.",
    category: "Chiropractic Care",
    date: "September 1, 2026",
    isoDate: "2026-09-01",
    readTime: "8 min read",
    featureImage:
      "/blog-images/stop-daily-habits-that-trigger-sciatica-pain.jpeg",
  },
  {
    slug: "desk-ergonomics-tips-to-ease-low-back-pain-at-work",
    title: "Desk Ergonomics Tips to Ease Low Back Pain at Work",
    excerpt:
      "Set up your chair, monitor, and keyboard to cut low back strain with quick self-tests and advice from a back pain doctor in Rio Rancho.",
    category: "Chiropractic Care",
    date: "August 25, 2026",
    isoDate: "2026-08-25",
    readTime: "5 min read",
    featureImage:
      "/blog-images/desk-ergonomics-tips-to-ease-low-back-pain-at-work.jpeg",
  },
  {
    slug: "rio-rancho-migraine-red-flags-when-to-seek-er-care",
    title: "Rio Rancho Migraine Red Flags: When to Seek ER Care",
    excerpt:
      "Learn urgent migraine warning signs and when to see a migraine doctor in Rio Rancho for sudden severe pain, neuro symptoms, fever, or head injury.",
    category: "Chiropractic Care",
    date: "August 18, 2026",
    isoDate: "2026-08-18",
    readTime: "5 min read",
    featureImage:
      "/blog-images/rio-rancho-migraine-red-flags-when-to-seek-er-care.webp",
  },
  {
    slug: "car-accident-recovery-guide-for-rio-rancho-drivers",
    title: "Car Accident Recovery Guide for Rio Rancho Drivers",
    excerpt:
      "Track key symptoms after a crash, learn when imaging is needed, and when to visit a car accident chiropractor in Rio Rancho for care and relief.",
    category: "Chiropractic Treatment",
    date: "August 11, 2026",
    isoDate: "2026-08-11",
    readTime: "6 min read",
    featureImage:
      "/blog-images/car-accident-recovery-guide-for-rio-rancho-drivers.png",
  },
  {
    slug: "rio-rancho-driving-tips-for-sciatica-pain-relief",
    title: "Rio Rancho Driving Tips for Sciatica Pain Relief",
    excerpt:
      "Set up your car for less back and leg pain with posture, mirrors, and stretch breaks from a sciatica doctor in Rio Rancho for safer driving.",
    category: "Chiropractic Care",
    date: "August 4, 2026",
    isoDate: "2026-08-04",
    readTime: "5 min read",
    featureImage:
      "/blog-images/rio-rancho-driving-tips-for-sciatica-pain-relief.jpg",
  },
  {
    slug: "summer-sports-injury-care-for-bernalillo-families",
    title: "Summer Sports Injury Care for Bernalillo Families",
    excerpt:
      "Keep your family active and pain free with a sports injury chiropractor in Bernalillo, offering evidence-based care to restore mobility and prevent reinjury.",
    category: "Chiropractic Treatment",
    date: "July 21, 2026",
    isoDate: "2026-07-21",
    readTime: "6 min read",
    featureImage:
      "/blog-images/summer-sports-injury-care-for-bernalillo-families.jpg",
  },
  {
    slug: "first-72-hours-after-a-car-accident-what-to-do",
    title: "The First 72 Hours After a Car Accident: What to Do (and What Most People Get Wrong)",
    excerpt:
      "Most auto-injury cases we see did not feel like emergencies at the scene. Here is what to do in the first 72 hours after a collision to protect your recovery, and the mistakes that turn a minor crash into a chronic problem.",
    category: "Chiropractic Treatment",
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    readTime: "5 min read",
    featureImage: "/services/car-truck-accident-care.jpg",
  },
  {
    slug: "medical-massage-vs-spa-massage-which-actually-helps-your-pain",
    title: "Medical Massage vs. Spa Massage: Which One Actually Helps Your Pain?",
    excerpt:
      "Spa massage and medical massage look similar from the outside, but they are built for two very different jobs. Here is how to tell them apart, and how to choose the one that will actually move the needle on your pain.",
    category: "Chiropractic Care",
    date: "June 10, 2026",
    isoDate: "2026-06-10",
    readTime: "4 min read",
    featureImage: "/services/massage/medical-massage.jpg",
  },
  {
    slug: "sitting-is-the-new-sugar-daily-movement-for-a-healthier-spine",
    title: "Sitting Is the New Sugar: Daily Movement for a Healthier Spine",
    excerpt:
      "Sitting eight-plus hours a day quietly wears down your disks, joints, and nerve system, the same way sugar erodes teeth. Here is why movement is non-negotiable, and three habits that fit into any workday.",
    category: "Chiropractic Approach",
    date: "May 30, 2026",
    isoDate: "2026-05-30",
    readTime: "4 min read",
    featureImage: "/blog-images/sitting-is-the-new-sugar-daily-movement-for-a-healthier-spine.webp",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(slug: string): BlogPost[] {
  return POSTS.filter((p) => categorySlug(p.category) === slug);
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return CATEGORIES.find((c) => categorySlug(c) === slug);
}

/** Backwards-compat alias for the older typo */
export const getCategoryByslug = getCategoryBySlug;

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const cur = getPostBySlug(slug);
  if (!cur) return POSTS.slice(0, limit);
  const sameCat = POSTS.filter((p) => p.slug !== slug && p.category === cur.category);
  if (sameCat.length >= limit) return sameCat.slice(0, limit);
  const others = POSTS.filter((p) => p.slug !== slug && p.category !== cur.category);
  return [...sameCat, ...others].slice(0, limit);
}
