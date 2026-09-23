import type { Metadata } from "next";
import { withCMSMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

const CANONICAL = "https://synergyspineandnerve.com/sitemap/";

const cmsFallbackMetadata: Metadata = {
  title: "Sitemap Synergy Spine and Nerve Center",
  description:
    "Browse the complete sitemap of Synergy Spine and Nerve Center, every page, resource, location guide, and blog post on our website at a glance.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Sitemap Synergy Spine and Nerve Center",
    description:
      "Every page, resource, and blog post at Synergy Spine and Nerve Center.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type LinkItem = { label: string; href: string; children?: LinkItem[] };
type Group = {
  title: string;
  description?: string;
  accent: "blue" | "gold" | "navy";
  items: LinkItem[];
};

const PAGE_GROUPS: Group[] = [
  {
    title: "About Us",
    description: "Meet the team behind Synergy.",
    accent: "blue",
    items: [
      { label: "About Us", href: "/about-us/" },
      { label: "Meet Dr. Brad", href: "/about-us/meet-dr-brad/", children: [
        { label: "Dr. Brad's Full Story", href: "/about-us/meet-dr-brad/dr-brads-full-story/" },
      ] },
      { label: "Meet Austin", href: "/about-us/meet-austin/" },
      { label: "Meet Bert", href: "/about-us/meet-bert/" },
      { label: "Meet Jess", href: "/about-us/meet-jess/" },
      { label: "Meet Kathryn", href: "/about-us/meet-kathryn/" },
    ],
  },
  {
    title: "New Folks",
    description: "Everything you need for your first visit.",
    accent: "gold",
    items: [
      { label: "New Folks", href: "/new-folks/" },
      { label: "First Visit", href: "/new-folks/first-visit/" },
      { label: "NP-Schedule", href: "/new-folks/np-schedule/" },
      { label: "Our Vision", href: "/new-folks/our-vision/" },
      { label: "NP-Thank-You", href: "/np-thank-you/" },
    ],
  },
  {
    title: "Resources",
    description: "Tools, guides, and educational videos.",
    accent: "navy",
    items: [
      { label: "Resources", href: "/resources/" },
      { label: "Adjusting Hours", href: "/resources/adjusting-hours/" },
      { label: "All About Nutrition", href: "/resources/all-about-nutrition/" },
      { label: "All About Spinal Hygiene", href: "/resources/all-about-spinal-hygiene/" },
      { label: "Calendar", href: "/resources/calendar/" },
      { label: "Essential Nutrients", href: "/resources/essential-nutrients-supplements/" },
      { label: "Get Notified", href: "/resources/get-notified/" },
      { label: "Spinal Health Assessment", href: "/resources/improve-your-sha-score/" },
      { label: "Order Supplements", href: "/resources/order-supplements/" },
      { label: "Purchase Supplements", href: "/purchase-supplements-2/" },
      { label: "Videos", href: "/resources/videos/", children: [
        { label: "Promo Videos", href: "/resources/videos/promo-videos/" },
        { label: "Humorous Promo Videos of the Past", href: "/resources/videos/humorous-promo-videos-of-the-past/" },
        { label: "Spinal Hygiene Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Workshop Videos", href: "/resources/videos/workshop-videos/" },
        { label: "Workshop Videos of the Past", href: "/resources/videos/workshop-videos-of-the-past/" },
        { label: "Other Videos", href: "/resources/videos/other-videos/" },
      ] },
    ],
  },
  {
    title: "Chiropractic Education",
    description: "Learn the science behind better health.",
    accent: "blue",
    items: [
      { label: "What is a Subluxation?", href: "/what-is-a-subluxation/" },
      { label: "Nerve Chart", href: "/nerve-chart/" },
      { label: "Degeneration", href: "/degeneration/" },
      { label: "Chiropractic History", href: "/chiropractic-history/" },
      { label: "Chiropractic Research", href: "/chiropractic-research/" },
      { label: "Triune of Care", href: "/triune-of-care/" },
      { label: "Backpack Analogy", href: "/backpack-analogy/" },
      { label: "Helpful Stretches", href: "/helpful-stretches/" },
      { label: "Common Conditions", href: "/common-conditions/", children: [
        { label: "Amyotrophic Lateral Sclerosis (ALS)", href: "/common-conditions/amyotrophic-lateral-sclerosis-als/" },
      ] },
    ],
  },
  {
    title: "Tools & Spinal Hygiene",
    description: "Products and exercises we recommend.",
    accent: "gold",
    items: [
      { label: "30 Second Spinal Hygiene Report Card", href: "/30-second-spinal-hygiene-report-card/" },
      { label: "6 Way Strap", href: "/6-way-strap/" },
      { label: "Mobility Disk for Lower Back", href: "/mobility-disk-for-lower-back/" },
      { label: "Over The Door Traction", href: "/over-the-door-traction/" },
      { label: "Thoracic Roller", href: "/thoracic-roller/" },
      { label: "Traction", href: "/traction/" },
      { label: "Spinal Hygiene Video", href: "/spinal-hygiene-video/" },
      { label: "Use Your Head Video", href: "/use-your-head-video/" },
    ],
  },
  {
    title: "Visit & Connect",
    description: "Book, contact, and explore.",
    accent: "navy",
    items: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/", children: [
        { label: "Chiropractic", href: "/services/chiropractic/", children: [
          { label: "Wellness", href: "/services/chiropractic/wellness/" },
          { label: "Headaches", href: "/services/chiropractic/headaches/" },
          { label: "Migraine", href: "/services/chiropractic/migraine/" },
          { label: "Back Pain", href: "/services/chiropractic/back-pain/" },
          { label: "Neck Pain", href: "/services/chiropractic/neck-pain/" },
          { label: "Radiating Arm/Hand Pain", href: "/services/chiropractic/radiating-arm-hand-pain/" },
          { label: "Radiating Leg/Feet Pain", href: "/services/chiropractic/radiating-leg-feet-pain/" },
          { label: "Shoulder Pain", href: "/services/chiropractic/shoulder-pain/" },
        ] },
        { label: "Massage", href: "/services/massage/", children: [
          { label: "Medical Massage", href: "/services/massage/medical-massage/" },
          { label: "Sports Massage", href: "/services/massage/sports-massage/" },
        ] },
        { label: "Car/Truck Accident Care", href: "/services/car-truck-accident-care/" },
      ] },
      { label: "Schedule", href: "/schedule/" },
      { label: "Booking", href: "/booking/" },
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Testimonials", href: "/testimonials/" },
      { label: "Blog", href: "/blog/" },
      { label: "ROF", href: "/rof/" },
    ],
  },
];

const AREA_PAGES: LinkItem[] = [
  { label: "Area We Serve (Overview)", href: "/area-we-serve/" },
  { label: "Chiropractor in Albuquerque, NM", href: "/chiropractor-albuquerque-nm/" },
  { label: "Chiropractor in Bernalillo NM", href: "/chiropractor-bernalillo-nm/" },
  { label: "Chiropractor in Corrales NM", href: "/chiropractor-corrales-nm/" },
  { label: "Chiropractor Casa Colorada NM", href: "/chiropractor-casa-colorada-nm/" },
  { label: "Chiropractor Chilili NM", href: "/chiropractor-chilili-nm/" },
  { label: "Chiropractor Ponderosa NM", href: "/chiropractor-ponderosa-nm/" },
  { label: "Chiropractic Belen NM", href: "/chiropractic-belen-nm/" },
  { label: "Chiropractic Bosque Farms NM", href: "/chiropractic-bosque-farms-nm/" },
  { label: "Chiropractic Canoncito NM", href: "/chiropractic-canoncito-nm/" },
  { label: "Chiropractic Cedar Crest NM", href: "/chiropractic-cedar-crest-nm/" },
  { label: "Chiropractic Cochiti Lake NM", href: "/chiropractic-cochiti-lake-nm/" },
  { label: "Chiropractic Cochiti Pueblo NM", href: "/chiropractic-cochiti-pueblo-nm/" },
  { label: "Chiropractic Edgewood NM", href: "/chiropractic-edgewood-nm/" },
  { label: "Chiropractic El Cerro Mission NM", href: "/chiropractic-el-cerro-mission-nm/" },
  { label: "Chiropractic El Llanito NM", href: "/chiropractic-el-llanito-nm/" },
  { label: "Chiropractic Golden NM", href: "/chiropractic-golden-nm/" },
  { label: "Chiropractic Jarales NM", href: "/chiropractic-jarales-nm/" },
  { label: "Chiropractic Jemez Pueblo NM", href: "/chiropractic-jemez-pueblo-nm/" },
  { label: "Chiropractic Los Lunas NM", href: "/chiropractic-los-lunas-nm/" },
  { label: "Chiropractic Los Ranchos de Albuquerque", href: "/chiropractic-los-ranchos-de-albuquerque/" },
  { label: "Chiropractic Meadow Lake NM", href: "/chiropractic-meadow-lake-nm/" },
  { label: "Chiropractic Moriarty NM", href: "/chiropractic-moriarty-nm/" },
  { label: "Chiropractic North Valley", href: "/chiropractic-north-valley/" },
  { label: "Chiropractic Pena Blanca NM", href: "/chiropractic-pena-blanca-nm/" },
  { label: "Chiropractic Peralta NM", href: "/chiropractic-peralta-nm/" },
  { label: "Chiropractic Placitas NM", href: "/chiropractic-placitas-nm/" },
  { label: "Chiropractic San Felipe Pueblo NM", href: "/chiropractic-san-felipe-pueblo-nm/" },
  { label: "Chiropractic San Ysidro NM", href: "/chiropractic-san-ysidro-nm/" },
  { label: "Chiropractic Sandia Park NM", href: "/chiropractic-sandia-park-nm/" },
  { label: "Chiropractic Santa Ana Pueblo NM", href: "/chiropractic-santa-ana-pueblo-nm/" },
  { label: "Chiropractic South Valley NM", href: "/chiropractic-south-valley-nm/" },
  { label: "Chiropractic Tijeras NM", href: "/chiropractic-tijeras-nm/" },
  { label: "Chiropractic Tome NM", href: "/chiropractic-tome-nm/" },
  { label: "Chiropractic Zia Pueblo NM", href: "/chiropractic-zia-pueblo-nm/" },
];

type BlogCategory = {
  category: string;
  href: string;
  posts: { label: string; href: string }[];
};

const BLOG_CATEGORIES: BlogCategory[] = [
  {
    category: "Chiropractic Approach",
    href: "/category/chiropractic-approach/",
    posts: [
      { label: "Three Keys to Finding a Chiropractor in Rio Rancho", href: "/three-keys-to-finding-a-chiropractor-in-rio-rancho/" },
      { label: "Doctored Movie Night", href: "/doctored-movie-night/" },
      { label: "Posture Exercises for Kids", href: "/posture-exercises-for-kids/" },
      { label: "Why You Should Live Like a Chicken?", href: "/why-you-should-live-like-a-chicken/" },
    ],
  },
  {
    category: "Chiropractic Approach | Chiropractic Care",
    href: "/category/chiropractic-approachchiropractic-care/",
    posts: [
      { label: "3 reasons you may need a chiropractor in Rio Rancho", href: "/3-reasons-you-may-need-a-chiropractor-in-rio-rancho/" },
    ],
  },
  {
    category: "Chiropractic Approach | Care | Treatment",
    href: "/category/chiropractic-approachchiropractic-carechiropractic-treatment/",
    posts: [
      { label: "3 Keys to Reducing Inflammation", href: "/3-keys-to-reducing-inflammation/" },
    ],
  },
  {
    category: "Chiropractic Care",
    href: "/category/chiropractic-care/",
    posts: [
      { label: "Why You Should Prevent Arthritis", href: "/why-you-should-prevent-arthritis/" },
      { label: "How to find the best Chiropractor in Rio Rancho?", href: "/how-to-find-the-best-chiropractor-in-rio-rancho/" },
      { label: "4 Tips to Finding the best Chiropractor for you in Rio Rancho", href: "/4-tips-to-finding-the-best-chiropractor-for-you-in-rio-rancho/" },
      { label: "How Chiropractic Care Benefits the Entire Family", href: "/how-chiropractic-care-benefits-the-entire-family/" },
      { label: "SB471-Drugs for New Mexico Chiropractors?", href: "/sb471-drugs-for-new-mexico-chiropractors/" },
      { label: "High Fructose Corn Syrup: Just how bad is it?", href: "/high-fructose-corn-syrup-just-how-bad-is-it/" },
      { label: "Are you Addicted to Sugar?", href: "/are-you-addicted-to-sugar/" },
      { label: "Does Chiropractic Enhance Immune Function?", href: "/does-chiropractic-enhance-immune-function/" },
      { label: "Are Vaccinations Safe?", href: "/are-vaccinations-safe/" },
      { label: "Tips on Backpack Safety for Kids", href: "/tips-on-backpack-safety-for-kids/" },
      { label: "Long Drives and Chiropractic Care", href: "/long-drives-and-chiropractic-care/" },
    ],
  },
  {
    category: "Chiropractic Education",
    href: "/category/chiropractic-education/",
    posts: [
      { label: "Why We Take Better Care of You Than Your Insurance", href: "/why-we-take-better-care-of-you-than-your-insurance/" },
      { label: "Are You Taking Vitamin D?", href: "/are-you-taking-vitamin-d/" },
      { label: "The Essential Nutrient, Vitamin D", href: "/the-essential-nutrient-vitamin-d/" },
      { label: "What is the first thing that comes to mind when you think of liver?", href: "/what-is-the-first-thing-that-comes-to-mind-when-you-think-of-liver/" },
      { label: "Forget Cholesterol, Inflammation is the Real Cause of Heart Disease", href: "/forget-cholesterol-inflammation-is-the-real-cause-of-heart-disease/" },
      { label: "What You Need to Know about Arsenic Found in Rice", href: "/what-you-need-to-know-about-arsenic-found-in-rice/" },
      { label: "Barack Obama on Health Care Plan", href: "/barack-obama-on-health-care-plan/" },
      { label: "Truth About Gluten-Free Foods and Type 1 Diabetes", href: "/truth-about-gluten-free-foods-and-type-1-diabetes/" },
      { label: "Breast Cancer Prevention Tips", href: "/breast-cancer-prevention-tips/" },
      { label: "Symptoms of Hormonal Imbalance in Women", href: "/symptoms-of-hormonal-imbalance-in-women/" },
      { label: "Too Much Texting Linked to Health Risks", href: "/too-much-texting-linked-to-health-risks/" },
    ],
  },
  {
    category: "Chiropractic Treatment",
    href: "/category/chiropractic-treatment/",
    posts: [
      { label: "Chiropractors and Injection for Back Pain", href: "/chiroopractors-and-injection-for-back-pain/" },
      { label: "Melt away your Stress with Chiropractic Care", href: "/melt-away-your-stress-with-chiropractic-care/" },
      { label: "Necessity of Chiropractic Care after a Car Accident", href: "/necessity-of-chiropractic-care-after-a-car-accident/" },
      { label: "Take my Headache Away", href: "/take-my-headache-away/" },
    ],
  },
  {
    category: "Uncategorized",
    href: "/category/uncategorized/",
    posts: [
      { label: "Two Reasons You Should NOT Supplement with Vitamin D", href: "/two-reasons-you-should-not-supplement-with-vitamin-d/" },
      { label: "COVID and FLU Prevention That You Need To Know", href: "/covid-and-flu-prevention-that-you-need-to-know/" },
      { label: "Temporary Closing of Straight Chiropractic", href: "/temporary-closing-of-straight-chiropractic/" },
      { label: "The most important COVID-19 information", href: "/the-most-important-covid-19-information/" },
      { label: "How to Reduce the Risk of Cancer and Heart Disease but NOT Stroke", href: "/how-to-reduce-the-risk-of-cancer-and-heart-disease-but-not-stroke/" },
      { label: "Five Reasons to Quit Sugar Now", href: "/five-reasons-to-quit-sugar-now-2/" },
      { label: "3 Habits to Improve Your Core Strength", href: "/3-habits-to-improve-your-core-strength/" },
      { label: "So You Want to Feel Better?", href: "/so-you-want-to-feel-better/" },
      { label: "Are You Heading Toward an Early Death?", href: "/are-you-heading-toward-an-early-death/" },
      { label: "Please Don't Make this Same Mistake…", href: "/please-dont-make-this-same-mistake/" },
      { label: "Why You Should Do Spinal Hygiene", href: "/why-you-should-do-spinal-hygiene/" },
      { label: "The Healthiest Chocolates Ever", href: "/the-healthiest-chocolates-ever/" },
      { label: "8 Ways to Improve Your SHA Score!", href: "/8-ways-to-improve-your-sha-score/" },
      { label: "The Number One Reason to See a Chiropractor", href: "/the-number-one-reason-to-see-a-chiropractor/" },
      { label: "Symptoms or Causes-Numbness or Functional Restoration", href: "/symptoms-or-causes-numbness-or-functional-restoration/" },
      { label: "Should I get the flu shot?", href: "/should-i-get-the-flu-shot/" },
      { label: "Vaccines: Are They Safe and Effective?", href: "/vaccines-are-they-safe-and-effective/" },
      { label: "It's Not About the Score", href: "/its-not-about-the-score/" },
      { label: "Should We Trust the Drugs We Take?", href: "/should-we-trust-the-drugs-we-take/" },
      { label: "Should You Take Cholesterol Lowering Drugs?", href: "/should-you-take-cholesterol-lowering-drugs/" },
      { label: "Do Painkillers Work for Back Pain?", href: "/do-painkillers-work-for-back-pain/" },
      { label: "Do You Have Movement Deficiency Syndrome?", href: "/do-you-have-movement-deficiency-syndrome/" },
      { label: "Will Exercise Make You Smarter?", href: "/will-exercise-make-you-smarter/" },
      { label: "Should a Chiropractic Adjustment Hurt?", href: "/should-a-chiropractic-adjustment-hurt/" },
      { label: "Should Your Chiropractor Prescribe Drugs?", href: "/should-your-chiropractor-prescribe-drugs/" },
      { label: "Feeling Good Does Not Mean You Are Healthy", href: "/feeling-good-does-not-mean-you-are-healthy/" },
      { label: "New Year, New You Challenge", href: "/new-year-new-you-challenge/" },
      { label: "Did Chiropractic Care Cause Katie May's Death?", href: "/did-chiropractic-care-cause-katie-mays-death/" },
      { label: "How to Make Your Core Strong", href: "/how-to-make-your-core-strong/" },
      { label: "Would You Shoot a Cannon from a Canoe?", href: "/would-you-shoot-a-cannon-from-a-canoe/" },
      { label: "How Many Pushups Can You Do?", href: "/how-many-pushups-can-you-do/" },
      { label: "How Long Does it Take to Brush?", href: "/how-long-does-it-take-to-brush/" },
      { label: "How Do You Compare?", href: "/how-do-you-compare/" },
      { label: "Are You Fit Enough to be President?", href: "/are-you-fit-enough-to-be-president/" },
      { label: "What's Better than a Flu Shot?", href: "/whats-better-than-a-flu-shot/" },
      { label: "What Will Be the Cause of Your Death?", href: "/what-will-be-the-cause-of-your-death/" },
      { label: "The Most Evidence Based Spinal Healthcare Protocol", href: "/the-most-evidence-based-spinal-healthcare-protocol/" },
      { label: "Will Calcium Cause Heart Problems?", href: "/will-calcium-cause-heart-problems/" },
      { label: "Should I Take a Calcium Supplement?", href: "/should-i-take-a-calcium-supplement/" },
      { label: "Use the HRA to Change Your Life", href: "/use-the-hra-to-change-your-life/" },
      { label: "New Year's Resolution?", href: "/new-years-resolution/" },
      { label: "I Got Worms", href: "/i-got-worms/" },
      { label: "Sitting is to the Spine as Sugar is to the Teeth", href: "/sitting-is-to-the-spine-as-sugar-is-to-the-teeth/" },
      { label: "Symptoms or Cause", href: "/symptoms-or-cause/" },
      { label: "Health Tip of the Day: Should I Get The Flu Shot?", href: "/health-tip-of-the-day-should-i-get-the-flu-shot/" },
      { label: "Liquid vs. Gel Cap Fish Oil Which Should I Take?", href: "/liquid-vs-gel-cap-fish-oil-which-should-i-take/" },
      { label: "Try eating this healthy dessert…for breakfast!", href: "/try-eating-this-healthy-dessert-for-breakfast/" },
      { label: "Happy Birthday BJ Palmer", href: "/happy-birthday-bj-palmer/" },
      { label: "Will Calcium Prevent Osteoporosis?", href: "/will-calcium-prevent-osteoporosis/" },
      { label: "Why would you want to take fish oil?", href: "/why-would-you-want-to-take-fish-oil/" },
      { label: "Do you need to take Vitamin D?", href: "/do-you-need-to-take-vitamin-d-2/" },
      { label: "Are Multi Vitamins Essential?", href: "/are-multi-vitamins-essential/" },
      { label: "Why Do You Take That?", href: "/why-do-you-take-that/" },
      { label: "Get Rid of Your Pain", href: "/get-rid-of-your-pain-2/" },
      { label: "Your Yellow Jersey?", href: "/your-yellow-jersey/" },
      { label: "Drug Free Chiropractic SB376", href: "/drug-free-chiropractic-sb376/" },
      { label: "Are You The Special?", href: "/are-you-the-special/" },
      { label: "Why Eat Grass Fed Beef", href: "/why-eat-grass-fed-beef/" },
      { label: "3 Annoying Workplace Habits to Kick", href: "/3-annoying-workplace-habits-to-kick/" },
      { label: "Griego Family, Thank You", href: "/griego-family-thank-you/" },
      { label: "Here's to a great 2012", href: "/heres-to-a-great-2012/" },
      { label: "Merry Christmas", href: "/merry-christmas/" },
    ],
  },
];

const ACCENT = {
  blue: {
    bar: "from-brand-blue to-brand-blueLight",
    dot: "bg-brand-blue",
    label: "text-brand-blue",
    ring: "ring-brand-blue/20",
    hoverBg: "group-hover:bg-brand-blue/8",
  },
  gold: {
    bar: "from-brand-gold to-brand-goldSoft",
    dot: "bg-brand-gold",
    label: "text-brand-navyDark",
    ring: "ring-brand-gold/30",
    hoverBg: "group-hover:bg-brand-gold/10",
  },
  navy: {
    bar: "from-brand-navy to-brand-navyDark",
    dot: "bg-brand-navy",
    label: "text-brand-navy",
    ring: "ring-brand-navy/15",
    hoverBg: "group-hover:bg-brand-navy/8",
  },
};

function PageItem({ item }: { item: LinkItem }) {
  return (
    <li>
      <Link
        href={item.href}
        className="group/link inline-flex items-baseline gap-2 text-[15px] text-brand-text hover:text-brand-blue transition-colors"
      >
        <span
          className="inline-block h-1.5 w-1.5 rounded-full bg-brand-textLight/40 group-hover/link:bg-brand-blue transition-colors"
          aria-hidden="true"
        />
        <span className="border-b border-transparent group-hover/link:border-brand-blue/50 transition-colors">
          {item.label}
        </span>
      </Link>
      {item.children && item.children.length > 0 && (
        <ul className="mt-1.5 ml-5 space-y-1.5">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="group/sub inline-flex items-baseline gap-2 text-[14px] text-brand-textLight hover:text-brand-blue transition-colors"
              >
                <span
                  className="inline-block h-px w-3 bg-brand-textLight/40 group-hover/sub:bg-brand-blue transition-colors"
                  aria-hidden="true"
                />
                <span className="border-b border-transparent group-hover/sub:border-brand-blue/50 transition-colors">
                  {child.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return withCMSMetadata("/sitemap", cmsFallbackMetadata);
}

export default function SitemapPage() {
  const totalPages =
    PAGE_GROUPS.reduce(
      (acc, g) =>
        acc +
        g.items.length +
        g.items.reduce((c, i) => c + (i.children?.length ?? 0), 0),
      0
    ) + AREA_PAGES.length;
  const totalPosts = BLOG_CATEGORIES.reduce((acc, c) => acc + c.posts.length, 0);

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div
            className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full bg-brand-gold/15 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/15 pl-2 pr-4 py-1.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold">
                  <svg className="w-3 h-3 text-brand-navyDark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2z" />
                  </svg>
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em]">
                  Sitemap
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="section-title mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-4xl">
                Every page on{" "}
                <span className="italic text-brand-gold">Synergy</span> at a
                glance.
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-5 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
                Browse all of our pages, resources, location guides, and blog
                posts, neatly organized for easy discovery.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                    Pages
                  </p>
                  <p className="section-title mt-1 text-3xl font-semibold text-white">
                    {totalPages}
                    <span className="text-brand-gold">+</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                    Articles
                  </p>
                  <p className="section-title mt-1 text-3xl font-semibold text-white">
                    {totalPosts}
                    <span className="text-brand-blueLight">+</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                    Categories
                  </p>
                  <p className="section-title mt-1 text-3xl font-semibold text-white">
                    {BLOG_CATEGORIES.length}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Quick jump bar */}
        <nav
          aria-label="Sitemap sections"
          className="sticky top-16 lg:top-20 z-30 bg-white/85 backdrop-blur-lg border-b border-black/5"
        >
          <div className="mx-auto max-w-6xl px-6 py-3 overflow-x-auto">
            <ul className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] whitespace-nowrap">
              <li>
                <a
                  href="#pages"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-bg px-4 py-1.5 text-brand-navyDark hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  Pages
                </a>
              </li>
              <li>
                <a
                  href="#area-we-serve"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-bg px-4 py-1.5 text-brand-navyDark hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  Area We Serve
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-bg px-4 py-1.5 text-brand-navyDark hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-navy" />
                  Blog Articles
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Pages, organized */}
        <section id="pages" className="relative bg-white py-20 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Site Structure
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl lg:text-5xl text-brand-navyDark font-semibold leading-[1.05]">
                All <span className="italic text-brand-blue">pages</span>,
                organized by section.
              </h2>
            </Reveal>

            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAGE_GROUPS.map((group, i) => {
                const a = ACCENT[group.accent];
                return (
                  <Reveal as="li" key={group.title} delay={i * 80}>
                    <article
                      className={`group relative h-full rounded-3xl bg-white p-7 ring-1 ring-black/5 hover:shadow-[0_30px_60px_-25px_rgba(13,35,64,0.25)] hover:-translate-y-1 transition-all duration-500 overflow-hidden`}
                    >
                      <div
                        className={`absolute top-0 left-7 right-7 h-[3px] bg-gradient-to-r ${a.bar} rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                        aria-hidden="true"
                      />
                      <div className="flex items-center gap-2.5">
                        <span className={`inline-block h-2 w-2 rounded-full ${a.dot}`} />
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${a.label}`}>
                          Section
                        </p>
                      </div>
                      <h3 className="section-title mt-2 text-2xl text-brand-navyDark font-semibold">
                        {group.title}
                      </h3>
                      {group.description && (
                        <p className="mt-1 text-[13px] text-brand-textLight">
                          {group.description}
                        </p>
                      )}

                      <ul className="mt-5 space-y-2">
                        {group.items.map((item) => (
                          <PageItem key={item.href} item={item} />
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Area We Serve */}
        <section
          id="area-we-serve"
          className="relative bg-brand-bg py-20 lg:py-24 scroll-mt-32 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0d2340 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-brand-gold/8 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:items-end">
              <Reveal className="lg:col-span-7">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-gold" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-navyDark">
                    Area We Serve
                  </p>
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl lg:text-5xl text-brand-navyDark font-semibold leading-[1.05]">
                  <span className="italic text-brand-blue">{AREA_PAGES.length}</span>{" "}
                  community pages across New Mexico.
                </h2>
              </Reveal>
              <Reveal className="lg:col-span-5" delay={120}>
                <p className="text-brand-textLight leading-relaxed">
                  Find dedicated pages for every neighborhood, pueblo, and
                  village we&apos;re proud to serve.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {AREA_PAGES.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="group/area flex items-center gap-3 rounded-xl bg-white px-4 py-3 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:shadow-[0_10px_25px_-10px_rgba(13,35,64,0.2)] transition-all duration-300"
                    >
                      <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/8 text-brand-blue group-hover/area:bg-brand-blue group-hover/area:text-white transition-colors">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <span className="text-[14px] text-brand-text group-hover/area:text-brand-navyDark transition-colors leading-snug">
                        {p.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Blog Categories */}
        <section
          id="blog"
          className="relative bg-white py-20 lg:py-24 scroll-mt-32 overflow-hidden"
        >
          <div
            className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-navy" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-navy">
                  Blog Articles
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl lg:text-5xl text-brand-navyDark font-semibold leading-[1.05]">
                Comprehensive chiropractic{" "}
                <span className="italic text-brand-blue">resources</span>.
              </h2>
              <p className="mt-4 max-w-2xl text-brand-textLight leading-relaxed">
                Years of evidence-based articles, how-tos, and insights from Dr.
                Brad &mdash; organized by topic.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {BLOG_CATEGORIES.map((cat, i) => (
                <Reveal key={cat.href} delay={i * 60}>
                  <details
                    className="group/details rounded-3xl bg-brand-bg ring-1 ring-black/5 open:ring-brand-blue/30 open:bg-white open:shadow-[0_30px_60px_-30px_rgba(13,35,64,0.2)] transition-all duration-300"
                    open={i === 0}
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6 lg:p-7 select-none">
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue group-open/details:bg-brand-blue group-open/details:text-white transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                          </svg>
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.22em] text-brand-textLight">
                            Category
                          </p>
                          <h3 className="section-title text-xl md:text-2xl text-brand-navyDark font-semibold leading-tight truncate">
                            {cat.category}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-navyDark ring-1 ring-black/5">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          {cat.posts.length} {cat.posts.length === 1 ? "post" : "posts"}
                        </span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/5 text-brand-navyDark group-open/details:bg-brand-blue group-open/details:text-white group-open/details:ring-transparent transition-all">
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-open/details:rotate-180"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>
                    </summary>

                    <div className="px-6 lg:px-7 pb-7 -mt-1">
                      <Link
                        href={cat.href}
                        className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue hover:text-brand-navyDark transition-colors"
                      >
                        <span>View category page</span>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                      <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {cat.posts.map((post) => (
                          <li key={post.href}>
                            <Link
                              href={post.href}
                              className="group/post inline-flex items-baseline gap-2 text-[14px] text-brand-text hover:text-brand-blue transition-colors"
                            >
                              <span
                                className="inline-block h-1.5 w-1.5 rounded-full bg-brand-textLight/40 group-hover/post:bg-brand-blue transition-colors"
                                aria-hidden="true"
                              />
                              <span className="border-b border-transparent group-hover/post:border-brand-blue/50 transition-colors leading-snug">
                                {post.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="relative bg-brand-bg py-20 lg:py-24 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none animate-drift"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -right-32 w-[460px] h-[460px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
            style={{ animationDelay: "-6s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <h2 className="section-title text-3xl md:text-5xl text-brand-navyDark font-semibold leading-[1.05]">
                Can&apos;t find what you&apos;re{" "}
                <span className="italic text-brand-blue">looking for</span>?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-brand-textLight text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                We&apos;re happy to help. Reach out and we&apos;ll point you in
                the right direction.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us/"
                className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors shadow-[0_10px_30px_-10px_rgba(13,35,64,0.5)]"
              >
                <span>Contact Us</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
              <a
                href="tel:+15058912280"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-brand-navyDark/10 group-hover:bg-brand-blue group-hover:text-white group-hover:ring-transparent transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span className="border-b border-transparent group-hover:border-brand-blue transition-colors">
                  Call (505) 891-2280
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
