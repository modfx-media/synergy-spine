"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  variant?: "up" | "fade";
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Tall elements (e.g. full blog articles) can never hit a high threshold when
    // they are taller than the viewport, so use 0 and treat any intersection as shown.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(node);

    // Safety: if the observer never reports (edge cases / older browsers), show content.
    const fallback = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [once]);

  const initial =
    variant === "up"
      ? "opacity-0 translate-y-6"
      : "opacity-0";
  const shown = "opacity-100 translate-y-0";

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? shown : initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
