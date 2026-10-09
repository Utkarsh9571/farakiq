"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const WHATSAPP_PHONE = "917982079125";
const DEFAULT_MESSAGE = "Hi FARAKIQ, I'd like to discuss a project.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        left: "28px",
        zIndex: 99,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      className="whatsapp-btn-wrapper"
    >
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        style={{
          position: "relative",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35), 0 2px 6px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          cursor: "pointer",
        }}
        className="whatsapp-btn"
      >
        {/* Subtle pulsating radar ring */}
        <span
          style={{
            position: "absolute",
            inset: "-3px",
            borderRadius: "50%",
            border: "2px solid rgba(37, 211, 102, 0.45)",
            animation: "wa-pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            pointerEvents: "none",
          }}
        />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          style={{
            filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))",
            transform: "translateY(0.5px)",
          }}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-5.805 1.534zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Online / Active badge dot */}
        <span
          style={{
            position: "absolute",
            top: "1px",
            right: "1px",
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
            border: "2px solid #0A0C0F",
          }}
          title="Online"
        />
      </motion.a>

      {/* Floating Tooltip / Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            style={{
              background: "rgba(20, 24, 31, 0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "var(--text-light)",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.82rem",
              fontWeight: 500,
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            className="whatsapp-tooltip mono"
          >
            <span style={{ color: "#25D366" }}>●</span> Chat on WhatsApp
          </motion.a>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes wa-pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.18);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .whatsapp-btn-wrapper {
            bottom: 20px !important;
            left: 20px !important;
          }
          .whatsapp-btn {
            width: 44px !important;
            height: 44px !important;
          }
          .whatsapp-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
