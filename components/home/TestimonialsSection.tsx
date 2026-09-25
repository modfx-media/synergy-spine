import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { GoogleReview, GoogleReviewsMeta } from "@/lib/reviews";

const TINTS = ["blue", "gold", "navy"] as const;

const TINT_GRADIENTS = {
  blue: "from-brand-blue to-brand-blueLight",
  gold: "from-brand-gold to-brand-goldSoft",
  navy: "from-brand-navy to-brand-navyDark",
};

function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function TestimonialsSection({
  reviews,
  meta,
}: {
  reviews: GoogleReview[];
  meta: GoogleReviewsMeta;
}) {
  return (
    <section className="relative bg-brand-bg py-24 lg:py-32 px-6 overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none animate-drift"
        style={{ animationDelay: "-7s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:items-end">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand-blue" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Patient Stories
              </p>
            </div>
            <h2 className="section-title mt-5 text-4xl md:text-5xl lg:text-6xl text-brand-navyDark font-semibold leading-[1.05]">
              A word from{" "}
              <span className="italic text-brand-blue">our community</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <div className="rounded-2xl bg-white/60 backdrop-blur ring-1 ring-black/5 p-5 flex items-center gap-4">
              <div className="flex items-center text-brand-gold">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="section-title text-2xl text-brand-navyDark font-semibold leading-none">
                  {meta.rating}
                  <span className="text-base text-brand-textLight font-normal">
                    /5
                  </span>
                </p>
                <p className="text-[12px] text-brand-textLight uppercase tracking-wider mt-1">
                  Based on {meta.reviewCount}+ Google reviews
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="group/marquee relative mt-16 -mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div
            className="flex w-max gap-6 px-6 animate-marquee group-hover/marquee:[animation-play-state:paused]"
            style={{ animationDuration: `${reviews.length * 12}s` }}
          >
            {[...reviews, ...reviews].map((t, i) => {
              const tint = TINT_GRADIENTS[TINTS[i % TINTS.length]];
              const initials = initialsOf(t.name);
              return (
                <figure
                  key={`${t.name}-${i}`}
                  aria-hidden={i >= reviews.length}
                  className="group relative w-[340px] sm:w-[380px] shrink-0 overflow-hidden bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] transition-shadow duration-500 p-8 flex flex-col"
                >
                  {/* Top hover bar */}
                  <div
                    className={`absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r ${tint} rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                    aria-hidden="true"
                  />

                  {/* Big floating quote mark */}
                  <span
                    className={`absolute -top-2 right-6 section-title text-[140px] leading-none select-none bg-gradient-to-br ${tint} bg-clip-text text-transparent opacity-15 group-hover:opacity-30 transition-opacity duration-500`}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-1 text-brand-gold">
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                      <StarIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <blockquote className="relative mt-5 text-brand-text text-[15px] leading-relaxed flex-1 line-clamp-6">
                    {t.quote}
                  </blockquote>

                  <figcaption className="relative mt-8 pt-6 border-t border-black/5 flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${tint} text-white text-sm font-semibold shadow-sm`}
                    >
                      {initials}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-navyDark">
                        {t.name}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-brand-textLight mt-0.5">
                        {t.relativeTime ?? "Posted on Google"}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        <Reveal delay={300} className="mt-14 flex justify-center">
          <Link
            href="/testimonials/"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
          >
            <span className="border-b border-current pb-0.5">
              See more testimonials
            </span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-brand-navyDark/10 group-hover:bg-brand-blue group-hover:text-white group-hover:ring-transparent transition-all">
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
