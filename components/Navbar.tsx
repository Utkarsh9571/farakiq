"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Smooth scroll when landing with hash from another page
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleMobileNavClick = (targetId: string) => {
    setIsOpen(false);
    if (isHome) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Projects", id: "portfolio" },
    { label: "Architecture", id: "architecture" },
    { label: "Pricing", id: "pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="wrap" id="mainNav">
        {isHome ? (
          <a
            href="#top"
            className="brand"
            aria-label="FARAKIQ Homepage"
            onClick={() => setIsOpen(false)}
          >
            <BrandLogo size="sm" asLink={false} />
          </a>
        ) : (
          <Link
            href="/"
            className="brand"
            aria-label="FARAKIQ Homepage"
            onClick={() => setIsOpen(false)}
          >
            <BrandLogo size="sm" asLink={false} />
          </Link>
        )}

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              {isHome ? (
                <a href={`#${item.id}`}>{item.label}</a>
              ) : (
                <Link href={`/#${item.id}`}>{item.label}</Link>
              )}
            </li>
          ))}
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            {isHome ? (
              <a href="#about">About</a>
            ) : (
              <Link href="/#about">About</Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a href="#contact">Contact</a>
            ) : (
              <Link href="/#contact">Contact</Link>
            )}
          </li>
        </ul>

        {isHome ? (
          <a href="#contact" className="btn btn-primary nav-cta">
            Book a call
          </a>
        ) : (
          <Link href="/#contact" className="btn btn-primary nav-cta">
            Book a call
          </Link>
        )}

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-expanded={isOpen}
          aria-controls="mobilePanel"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-panel"
            id="mobilePanel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ display: "flex" }}
          >
            {navItems.map((item) =>
              isHome ? (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleMobileNavClick(item.id)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            {isHome ? (
              <a href="#about" onClick={() => handleMobileNavClick("about")}>
                About
              </a>
            ) : (
              <Link href="/#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            )}
            {isHome ? (
              <a href="#contact" onClick={() => handleMobileNavClick("contact")}>
                Contact
              </a>
            ) : (
              <Link href="/#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            )}
            {isHome ? (
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ marginTop: "14px", width: "100%", justifyContent: "center" }}
                onClick={() => handleMobileNavClick("contact")}
              >
                Book a call
              </a>
            ) : (
              <Link
                href="/#contact"
                className="btn btn-primary"
                style={{ marginTop: "14px", width: "100%", justifyContent: "center" }}
                onClick={() => setIsOpen(false)}
              >
                Book a call
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
