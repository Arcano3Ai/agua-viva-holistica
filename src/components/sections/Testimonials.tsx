"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/holisticData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonios" className="py-24 bg-[#FAFAF7] relative overflow-hidden">
      {/* Background Soft Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#38B6C8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-[#C7A34B]">
            VOCES DE PAZ
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E]">
            Experiencias de <span className="text-gold-gradient italic font-normal">Nuestra Comunidad</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[340px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-[#C7A34B]/30 max-w-3xl w-full shadow-2xl relative"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-8 w-20 h-20 text-[#C7A34B]/10 pointer-events-none" />

              {/* 5 Stars Rating */}
              <div className="flex items-center gap-1 mb-6 text-[#C7A34B]">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C7A34B] stroke-none" />
                ))}
              </div>

              {/* Comment */}
              <p className="font-poppins text-base sm:text-lg text-[#2E2E2E]/85 font-light italic leading-relaxed mb-8">
                "{TESTIMONIALS[currentIndex].comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-[#C7A34B]/15 pt-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C7A34B]/40 shrink-0 shadow-md">
                  <Image
                    src={TESTIMONIALS[currentIndex].image}
                    alt={TESTIMONIALS[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-[#2E2E2E]">
                    {TESTIMONIALS[currentIndex].name}
                  </h4>
                  <p className="font-poppins text-xs text-[#7FAE8C] font-medium">
                    {TESTIMONIALS[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[#C7A34B]/30 hover:bg-[#38B6C8] hover:text-white hover:border-transparent text-[#2E2E2E] flex items-center justify-center shadow-lg transition-all"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[#C7A34B]/30 hover:bg-[#38B6C8] hover:text-white hover:border-transparent text-[#2E2E2E] flex items-center justify-center shadow-lg transition-all"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[#C7A34B]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al testimonio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
