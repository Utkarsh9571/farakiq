"use client";

import { useState } from "react";
import Image from "next/image";
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
        <a href="#top" className="brand" aria-label="FARAKIQ Homepage">
          <Image
            src="/farakiq-logo.svg"
            alt="FARAKIQ — We Make The Difference"
            width={160}
            height={30}
            priority
            style={{ width: "auto", height: "28px", display: "block" }}
          />
        </a>

        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#architecture">Architecture</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a href="#contact" className="btn btn-primary nav-cta">
          Book a call
        </a>

        <button
          className="menu-toggle"
          id="menuToggle"
          aria-expanded={isOpen}
          aria-controls="mobilePanel"
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
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#portfolio" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href="#architecture" onClick={() => setIsOpen(false)}>
              Architecture
            </a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
