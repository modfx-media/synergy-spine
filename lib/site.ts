import type { GoogleReview, GoogleReviewsMeta } from "@/lib/reviews";

// Central production site origin and NAP. Import instead of hardcoding.
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://synergyspineandnerve.com";

export const PRACTICE_NAME = "Synergy Spine and Nerve Center";
export const PHONE_DISPLAY = "(505) 891-2280";
export const PHONE_TEL = "+15058912280";
export const PHONE_E164 = "+1-505-891-2280";
export const EMAIL = "info@synergyspineandnerve.com";

export const STREET_ADDRESS = "1453 Rio Rancho Blvd, Suite 2";
export const ADDRESS_LOCALITY = "Rio Rancho";
export const ADDRESS_REGION = "NM";
export const POSTAL_CODE = "87124";
export const ADDRESS_COUNTRY = "US";
export const GEO = { latitude: 35.2347, longitude: -106.6605 };

export const OPENING_HOURS = [
  { dayOfWeek: "Monday", opens: "08:00", closes: "17:30", label: "Mon 8:00 AM – 5:30 PM" },
  { dayOfWeek: "Tuesday", opens: "13:00", closes: "17:00", label: "Tue 1:00 – 5:00 PM" },
  { dayOfWeek: "Wednesday", opens: "10:00", closes: "17:30", label: "Wed 10:00 AM – 5:30 PM" },
  { dayOfWeek: "Thursday", opens: "13:00", closes: "17:30", label: "Thu 1:00 – 5:30 PM" },
] as const;

export const SAME_AS = [
  "https://www.google.com/maps/place/Synergy+Spine+and+Nerve+Center/@35.2476,-106.6597,15z",
];

export const AREA_SERVED_CITIES = [
  "Rio Rancho",
  "Albuquerque",
  "Corrales",
  "Bernalillo",
  "Placitas",
  "Los Lunas",
  "Belen",
  "Bosque Farms",
  "Edgewood",
  "Cedar Crest",
];

export function organizationSchema(
  pageUrl = `${SITE_ORIGIN}/`,
  liveReviews?: { reviews: GoogleReview[]; meta: GoogleReviewsMeta },
) {
  const fiveStar = liveReviews?.reviews.filter((r) => r.rating === 5) ?? [];
  return {
    "@context": "https://schema.org",
    "@type": ["Chiropractic", "MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_ORIGIN}/#practice`,
    name: PRACTICE_NAME,
    url: SITE_ORIGIN,
    image: `${SITE_ORIGIN}/logo.png`,
    logo: `${SITE_ORIGIN}/logo.png`,
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: "$$",
    medicalSpecialty: "Chiropractic",
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: POSTAL_CODE,
      addressCountry: ADDRESS_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap:
      "https://www.google.com/maps/place/Synergy+Spine+and+Nerve+Center/@35.2476,-106.6597,15z",
    openingHoursSpecification: OPENING_HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: AREA_SERVED_CITIES.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "New Mexico" },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(liveReviews?.meta.rating ?? 4.9),
      bestRating: "5",
      ratingCount: String(liveReviews?.meta.reviewCount ?? 89),
    },
    ...(fiveStar.length > 0
      ? {
          review: fiveStar.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: r.quote,
          })),
        }
      : {}),
    sameAs: SAME_AS,
    mainEntityOfPage: pageUrl,
  };
}
