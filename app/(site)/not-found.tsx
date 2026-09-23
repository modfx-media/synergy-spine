import type { Metadata } from "next"
import Link from "next/link"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 font-serif text-4xl text-brand-navy">We could not find that page</h1>
          <p className="mt-4 text-brand-textLight">
            The link may be out of date. The rest of the site is still here.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
