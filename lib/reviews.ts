/**
 * Google review types + fallback data for Synergy Spine and Nerve Center.
 * Fallback quotes are real 5-star Google reviews copied verbatim from the
 * Places API. Used only when the live fetch fails or the API key is unset.
 */
export const googleReviewsMeta = {
  rating: 4.9, // FALLBACK_RATING — Google's overall rating
  reviewCount: 90, // FALLBACK_REVIEW_COUNT — Google's total, all stars
  fiveStarCount: 5,
  placeId: "ChIJRRy3B_RwIocRQU5yc89u0Wg",
  reviewsUrl: "https://maps.google.com/?cid=7552939887351189057",
} as const;

export type GoogleReview = {
  quote: string;
  name: string;
  rating: number;
  relativeTime?: string;
};

export type GoogleReviewsMeta = {
  rating: number;
  reviewCount: number;
  fiveStarCount: number;
  placeId: string;
  reviewsUrl: string;
};

export const googleReviews: GoogleReview[] = [
  {
    quote:
      "OMGOODNESS! I walked in with a cane, with everything you can scan with my chronic back. I was rearended in March 2026. He is the only one out of multiple professionals that prayed my neck & found it was convoluted onto of my back. It took 2 visits, recommended probiotics & fish oil +. Now 1 week later, I am no longer walking at a 50 degrees bent over, limping with a cane, out of my mind with unbearable pain, to walking into the office, no cane, minor nerve pain limp, & being treated. This is no joke! Chronic pain with new acute pain for 24 years. Miraculous is the only word. Believe it or not, I'm a walking testimony. I'm a retired nurse & don't trust many. Here I trust.\nNacho, the GoldenDoodle is so intuitive to others pain. He will spend time with the one(s) that need it the most for the day/ hour. He greets, sits majestically, love flows from Brad to every customer. I'm a dog mom. He needs to be a \"Service Dog\" no questions asked. I'm sure he'd pass & a true family pet. Awesome connections. I love him & known him 3 visits. They won't disappoint!",
    name: "Deb Swan",
    rating: 5,
    relativeTime: "a month ago",
  },
  {
    quote:
      "Dr.Brad changed my life! because of him i was able to completely quit taking muscle relaxers, i use to have spasms that would bend my body in half & my migrains reduced to a couple times a year from everyday,i live with bad chronic pain from severe permanent injuries requiring a wheelchair often ,i refer everyone one i can to him,so they can expieriance his amazing gift of healing, i cant reccomend him High enough!He genuinly cares about his patients and makes a custom plan for your body, Not 1 size fits all like other places,giving you a safe gentle adjustment",
    name: "Isabella E",
    rating: 5,
    relativeTime: "5 months ago",
  },
  {
    quote:
      "Can\u2019t appreciate the services I\u2019ve received here enough from both Dr Brad and Austin. Upon walking in I\u2019m always greeted warmly and treated like family. And they do so for all their clients.\n\nI was in a dark spot in my life when I first found this little magical place. I had tons of symptoms that doctors could never diagnose for over a year and was very tired and frustrated being turned away constantly with no answers. I needed to seek out alternative methods to feel better and this was one I don\u2019t regret.\n\nDr Brad spends a lot of time in the first initial assessments to get to know your problems and treat them accordingly. His vast medical knowledge, in-depth initial tests and empathy towards your issues really makes you know you are in the right hands. But he also doesn\u2019t provide you any false sense of hope that perhaps other chiropractic offices might and he creates reasonable goals which you can achieve thru a combination of your own efforts and by coming in for treatments. He provides you the right tools and information to establish a personalized plan over time to help you feel better and meet your goals. If you stick to the plan, I can tell you from actual experience, it works.\n\nEven a year and a half later, there has never been a moment where I've thought to receive similar treatments elsewhere as I feel totally satisfied in the quality of all the care I've received here and will continue to return. I truly feel like it has supplemented me to feel better overall mentally and physically. And for that I am eternally grateful.",
    name: "JenXslvr",
    rating: 5,
    relativeTime: "9 months ago",
  },
  {
    quote:
      "Dr Brad is a very knowledgeable, encouraging and effective chiropractor. I love his holistic approach with incorporating nutrition and exercise. Dr Austin helps with the deep tissue work that needs to be done to compliment my adjustments when needed. He is very skilled and knowledgeable as well.\nHe also is very good with kids and helped my 4 year old who fell and hurt his neck. I would and have recommended Dr Brad to friends and family and trust his expertise!",
    name: "Kendra Bierbaum",
    rating: 5,
    relativeTime: "a year ago",
  },
  {
    quote:
      "My experience with Dr. Brad has been wonderful! When I fist came to see him I was experiencing lower back pain, and right hip discomfort. With only a few visits I started to see an improvement, and feel less pain.\nHe is very knowledgeable and professional. He also takes the time to explain the treatment plan & the process of healing. He and his staff are friendly, and always remind me of my appointments. I would definitely recommend Dr. Brad to all of my friends and family. This has been my best chiropractic experience.",
    name: "Lorena Varley",
    rating: 5,
    relativeTime: "5 years ago",
  },
];

/** The only acceptance test for a card or a JSON-LD review. */
export function isFiveStarReview(review: GoogleReview): boolean {
  return review.rating === 5 && review.quote.trim().length > 0 && review.name.trim().length > 0;
}

export const fiveStarReviews = googleReviews.filter(isFiveStarReview);
