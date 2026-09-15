"use client";

import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  animate?: boolean;
  asLink?: boolean;
  href?: string;
  className?: string;
  replayKey?: number;
}

export default function BrandLogo({
  size = "sm",
  showTagline = false,
  animate = false,
  asLink = true,
  href = "/",
  className = "",
  replayKey = 0,
}: BrandLogoProps) {
  const content = (
    <div
      key={replayKey}
      className={`brand-logo brand-logo-${size} ${className}`}
      aria-label="FARAKIQ — We Make The Difference"
    >
      <div className="brand-logo-text">
        <span className="brand-logo-farak">FARAK</span>
        <span className="brand-logo-iq">
          <span
            className={`brand-logo-i ${animate ? "drop-jump" : ""}`}
            id={animate ? "iLetter" : undefined}
          >
            I
          </span>
          <span className="brand-logo-q">Q</span>
        </span>
      </div>
      {showTagline && (
        <div
          className={`brand-logo-tagline ${animate ? "fade-up" : ""}`}
          id={animate ? "tagline" : undefined}
        >
          WE MAKE THE DIFFERENCE
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href={href} className="brand" aria-label="FARAKIQ Homepage">
        {content}
      </Link>
    );
  }

  return content;
}
