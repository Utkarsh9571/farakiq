import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The requested endpoint does not exist on FARAKIQ. Return to the homepage or explore our core capabilities.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="wrap"
        style={{
          minHeight: "calc(100vh - 72px - 380px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
