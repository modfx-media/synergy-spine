import type { MetadataRoute } from "next";
import { POSTS, CATEGORIES, categorySlug } from "@/lib/blog-posts";
import { SERVICES } from "@/lib/programmatic/services";
import { CITIES } from "@/lib/programmatic/cities";
import {
  CHIROPRACTIC_SERVICES,
  MASSAGE_SERVICES,
} from "@/lib/services-catalog";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { toBlogPosts } from "@/lib/ranked/ui";

import { SITE_ORIGIN as BASE_URL } from "@/lib/site";

const RESERVED_PROGRAMMATIC_SLUGS = new Set<string>([
  "chiropractor-albuquerque-nm",
  "chiropractor-bernalillo-nm",
  "chiropractor-casa-colorada-nm",
  "chiropractor-chilili-nm",
  "chiropractor-corrales-nm",
  "chiropractor-ponderosa-nm",
]);

const PRIORITY_1_0 = ["/"];

const PRIORITY_0_9 = [
  "/about-us",
  "/services",
  "/services/chiropractic",
  "/services/massage",
  "/services/car-truck-accident-care",
  "/new-folks",
  "/contact-us",
  "/schedule",
  "/booking",
  "/testimonials",
  "/blog",
];

const PRIORITY_0_8 = [
  "/about-us/meet-dr-brad",
  "/about-us/meet-dr-brad/dr-brads-full-story",
  "/about-us/meet-austin",
  "/about-us/meet-bert",
  "/about-us/meet-jess",
  "/about-us/meet-kathryn",
  "/new-folks/first-visit",
  "/new-folks/our-vision",
  "/new-folks/np-schedule",
  "/what-is-a-subluxation",
  "/nerve-chart",
  "/degeneration",
  "/chiropractic-history",
  "/chiropractic-research",
  "/triune-of-care",
  "/common-conditions",
  "/common-conditions/amyotrophic-lateral-sclerosis-als",
  "/area-we-serve",
  "/neuropathy",
];

const PRIORITY_0_7 = [
  "/resources",
  "/resources/all-about-nutrition",
  "/resources/all-about-spinal-hygiene",
  "/resources/improve-your-sha-score",
  "/resources/essential-nutrients-supplements",
  "/resources/videos",
  "/resources/videos/spinal-hygiene-videos",
  "/resources/videos/workshop-videos",
  "/resources/videos/workshop-videos-of-the-past",
  "/resources/videos/promo-videos",
  "/resources/videos/humorous-promo-videos-of-the-past",
  "/resources/videos/other-videos",
  "/resources/calendar",
  "/resources/get-notified",
  "/resources/order-supplements",
  "/resources/adjusting-hours",
  "/helpful-stretches",
  "/spinal-hygiene-video",
  "/use-your-head-video",
  "/backpack-analogy",
  "/30-second-spinal-hygiene-report-card",
  "/traction",
  "/thoracic-roller",
  "/6-way-strap",
  "/over-the-door-traction",
  "/mobility-disk-for-lower-back",
];

const PRIORITY_0_6 = [
  "/chiropractor-albuquerque-nm",
  "/chiropractor-bernalillo-nm",
  "/chiropractor-corrales-nm",
  "/chiropractor-casa-colorada-nm",
  "/chiropractor-chilili-nm",
  "/chiropractor-ponderosa-nm",
  "/chiropractic-los-lunas-nm",
  "/chiropractic-placitas-nm",
  "/chiropractic-belen-nm",
  "/chiropractic-edgewood-nm",
  "/chiropractic-moriarty-nm",
  "/chiropractic-cedar-crest-nm",
  "/chiropractic-north-valley",
  "/chiropractic-south-valley-nm",
  "/chiropractic-tijeras-nm",
  "/chiropractic-bosque-farms-nm",
  "/chiropractic-canoncito-nm",
  "/chiropractic-cochiti-lake-nm",
  "/chiropractic-cochiti-pueblo-nm",
  "/chiropractic-el-cerro-mission-nm",
  "/chiropractic-el-llanito-nm",
  "/chiropractic-golden-nm",
  "/chiropractic-jarales-nm",
  "/chiropractic-jemez-pueblo-nm",
  "/chiropractic-los-ranchos-de-albuquerque",
  "/chiropractic-meadow-lake-nm",
  "/chiropractic-pena-blanca-nm",
  "/chiropractic-peralta-nm",
  "/chiropractic-san-felipe-pueblo-nm",
  "/chiropractic-san-ysidro-nm",
  "/chiropractic-sandia-park-nm",
  "/chiropractic-santa-ana-pueblo-nm",
  "/chiropractic-tome-nm",
  "/chiropractic-zia-pueblo-nm",
];

const WEEKLY_PATHS = new Set(["/", "/blog", "/schedule"]);

type Entry = MetadataRoute.Sitemap[number];

function withSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

function buildEntries(
  paths: string[],
  priority: number,
  lastModified: Date
): Entry[] {
  return paths.map((path) => ({
    url: `${BASE_URL}${withSlash(path)}`,
    lastModified,
    changeFrequency: WEEKLY_PATHS.has(path) ? "weekly" : "monthly",
    priority,
  }));
}

const POSTS_PER_PAGE = 12;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const published = toBlogPosts(await getPublishedBlogPosts().catch(() => []));
  const listing = published.length ? published : POSTS;

  const blogPostEntries: Entry[] = listing.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}/`,
    lastModified: new Date(p.isoDate),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const categoryEntries: Entry[] = CATEGORIES.map((c) => ({
    url: `${BASE_URL}/category/${categorySlug(c)}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const totalBlogPages = Math.max(1, Math.ceil(listing.length / POSTS_PER_PAGE));
  const blogPaginationEntries: Entry[] = [];
  for (let i = 2; i <= totalBlogPages; i++) {
    blogPaginationEntries.push({
      url: `${BASE_URL}/blog/page/${i}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  const programmaticEntries: Entry[] = [];
  for (const service of SERVICES) {
    for (const city of CITIES) {
      const slug = `${service.slug}-${city.slug}-nm`;
      if (RESERVED_PROGRAMMATIC_SLUGS.has(slug)) continue;
      programmaticEntries.push({
        url: `${BASE_URL}/${slug}/`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  const serviceDetailEntries: Entry[] = [
    ...CHIROPRACTIC_SERVICES.map((s) => ({
      url: `${BASE_URL}/services/chiropractic/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...MASSAGE_SERVICES.map((s) => ({
      url: `${BASE_URL}/services/massage/${s.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    ...buildEntries(PRIORITY_1_0, 1.0, lastModified),
    ...buildEntries(PRIORITY_0_9, 0.9, lastModified),
    ...buildEntries(PRIORITY_0_8, 0.8, lastModified),
    ...buildEntries(PRIORITY_0_7, 0.7, lastModified),
    ...buildEntries(PRIORITY_0_6, 0.6, lastModified),
    ...serviceDetailEntries,
    ...categoryEntries,
    ...blogPaginationEntries,
    ...blogPostEntries,
    ...programmaticEntries,
  ];
}
