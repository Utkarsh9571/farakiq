"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="wrap" id="mainNav">
        <Link href="/" className="brand" aria-label="FARAKIQ Homepage">
          <Image
            src="/farakiq-logo.svg"
            alt="FARAKIQ — We Make The Difference"
            width={160}
            height={30}
            priority
            style={{ width: "auto", height: "28px", display: "block" }}
          />
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#portfolio">Projects</Link>
          </li>
          <li>
            <Link href="/#architecture">Architecture</Link>
          </li>
          <li>
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        <Link href="/#contact" className="btn btn-primary nav-cta">
          Book a call
        </Link>

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ display: "flex", overflow: "hidden" }}
          >
            <Link href="/#services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/#portfolio" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/#architecture" onClick={() => setIsOpen(false)}>
              Architecture
            </Link>
            <Link href="/#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              href="/#contact"
              className="btn btn-primary"
              style={{ marginTop: "14px", width: "100%", justifyContent: "center" }}
              onClick={() => setIsOpen(false)}
            >
              Book a call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
