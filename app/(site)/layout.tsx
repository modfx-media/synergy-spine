import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";
import BookingProvider from "@/components/booking/BookingProvider";
import BottomBookBar from "@/components/BottomBookBar";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { normalizePath } from "@/lib/cms/paths";
import { cmsConfigured } from "@/lib/cms/queries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve Center",
    template: "%s | Synergy Spine & Nerve, Rio Rancho NM",
  },
  description:
    "Rio Rancho chiropractor for back pain, sciatica, disc, neuropathy, and family care. 20+ years at 1453 Rio Rancho Blvd. Serving Albuquerque, Corrales, and Bernalillo. Call (505) 891-2280.",
  metadataBase: new URL("https://synergyspineandnerve.com"),
  openGraph: {
    title: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve",
    description:
      "Evidence-based chiropractic for spine and nerve pain. Same-week visits. Rio Rancho office serving the Albuquerque metro.",
    url: "https://synergyspineandnerve.com/",
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiropractor in Rio Rancho, NM | Synergy Spine & Nerve",
    description:
      "Chiropractic care in Rio Rancho, NM for back pain, sciatica, discs, and family care.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // DO NOT REMOVE: Google Search Console site verification. Keep permanently.
  verification: {
    google: "dJ3k9kDSyULRLNB670eeUVggenhGH3OTvaZLABGgPAw",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = cmsConfigured() ? (await headers()).get("x-pathname") : null;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <BookingProvider>
          {pathname ? (
            <CMSRoute path={normalizePath(pathname)}>{children}</CMSRoute>
          ) : (
            children
          )}
          <BottomBookBar />
        </BookingProvider>
      </body>
      {/* Google tag (gtag.js) */}
      <Script
        id="ga4-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-QPZT8FNXYE"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-QPZT8FNXYE');
        `}
      </Script>
      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yj6pbasssm");
        `}
      </Script>
      <Script id="knock-knock-config" strategy="afterInteractive">
        {`window.company_id = '6a44c93ffb43c2761ccbc33c';`}
      </Script>
      <Script
        id="knock-knock-widget"
        src="https://api.knock-knockapp.com/widget/widget.js"
        strategy="lazyOnload"
      />
    </html>
  );
}
