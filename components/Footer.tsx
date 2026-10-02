import Image from "next/image";
import Link from "next/link";

const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_TEL = "+15058912280";
const ADDRESS = "1453 Rio Rancho Blvd-Suite 2, Rio Rancho, NM 87124";
const LOGO_SRC = "/logo.png";

const SITE_LINKS = [
  { label: "About Us", href: "/about-us/" },
  { label: "New Folks", href: "/new-folks/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Area We Serve", href: "/area-we-serve/" },
  { label: "Resources", href: "/resources/" },
  { label: "Blog", href: "/blog/" },
  { label: "Sitemap", href: "/sitemap/" },
];

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Synergy Spine and Nerve Center home">
              <Image
                src={LOGO_SRC}
                alt="Synergy Spine and Nerve Center"
                width={220}
                height={48}
                className="h-12 w-auto"
                unoptimized
              />
            </Link>
            <ul className="mt-6 space-y-3 text-sm text-brand-text">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-start gap-3 hover:text-brand-blue transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 mt-0.5 text-brand-blue shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon className="w-5 h-5 mt-0.5 text-brand-blue shrink-0" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-navy">
              About Us
            </h3>
            <p className="mt-4 text-sm text-brand-textLight leading-relaxed">
              Looking for a chiropractor near Rio Rancho, New Mexico? Synergy
              Spine and Nerve Center is New Mexico&apos;s Premier Chiropractic
              provider.
            </p>
            <Link
              href="/about-us/"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-navy">
              Site Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-text hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-textLight">
            <p>
              &copy; {year} Synergy Spine and Nerve Center. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/sitemap/" className="hover:text-brand-blue transition-colors">
                Sitemap
              </Link>
              <a
                href="https://modfxmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
              >
                POWERED BY MODFXMEDIA
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
