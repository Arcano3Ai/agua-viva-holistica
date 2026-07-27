"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#2E2E2E] text-white border border-[#C7A34B]/40 hover:bg-[#38B6C8] flex items-center justify-center shadow-xl transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/525584399200?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20agendar%20una%20cita."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </div>
  );
}
