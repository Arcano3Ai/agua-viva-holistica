"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gem,
  Compass,
  Sparkles,
  BookOpenCheck,
  HeartHandshake,
  Users,
  Palette,
  Flower2,
  Sun,
  HandHeart,
  ArrowRight,
  Sparkle,
  Eye,
  Clock,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/holisticData";
import ServiceModal from "./ServiceModal";

const ICON_MAP: Record<string, React.ElementType> = {
  Gem,
  Compass,
  Sparkles,
  BookOpenCheck,
  HeartHandshake,
  Users,
  Palette,
  Flower2,
  Sun,
  HandHeart,
  Eye,
  Flame,
};

const CATEGORIES = [
  "Todos",
  "Tarot & Sombra",
  "Energética & Cristales",
  "Ceremonias & Rituales",
  "Arte & Meditación",
] as const;

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices =
    selectedCategory === "Todos"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="servicios" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#38B6C8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C7A34B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A34B]/15 border border-[#C7A34B]/30 text-[#AA823A]">
            <Sparkle className="w-3.5 h-3.5" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              PAQUETES & TERAPIAS EXCLUSIVAS
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E] leading-tight">
            Experiencias de <span className="text-gold-gradient italic font-normal">Sanación & Autoconocimiento</span>
          </h2>
          <p className="font-poppins text-sm sm:text-base text-[#2E2E2E]/75 font-light max-w-2xl mx-auto">
            Cada sesión está diseñada con intención sagrada para restaurar tu paz interior, iluminar tus decisiones y acompañar tu proceso de transformación personal.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#C7A34B] to-[#AA823A] text-white shadow-md scale-105"
                    : "glass-card text-[#2E2E2E]/80 hover:text-[#38B6C8] hover:border-[#38B6C8]/40"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredServices.map((service, idx) => {
              const IconComponent = ICON_MAP[service.iconName] || Sparkles;
              const isFeatured = !!service.featured;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden transition-all duration-500 ${
                    isFeatured
                      ? "border-2 border-[#C7A34B] shadow-gold-glow bg-gradient-to-b from-white/95 via-[#FAF8F3]/90 to-[#FAF5EB] ring-1 ring-[#C7A34B]/30"
                      : "border border-[#C7A34B]/20"
                  }`}
                >
                  {/* Subtle Card Glow on Hover */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-[#38B6C8]/15 to-[#C7A34B]/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  <div>
                    {/* Top Row: Icon and Badge */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300 ${
                          isFeatured
                            ? "bg-gradient-to-br from-[#C7A34B] to-[#AA823A] text-white border-transparent shadow-gold-glow"
                            : "bg-gradient-to-br from-white to-[#FAFAF7] border-[#C7A34B]/30 text-[#C7A34B] group-hover:border-[#38B6C8] group-hover:text-[#38B6C8]"
                        }`}
                      >
                        <IconComponent className="w-7 h-7 stroke-[1.5]" />
                      </div>

                      {/* Prominent Badge */}
                      {service.badge && (
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-poppins font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                            isFeatured
                              ? "bg-gradient-to-r from-[#C7A34B] via-[#E2BA55] to-[#AA823A] text-white shadow-gold-glow animate-pulse-slow"
                              : "bg-[#38B6C8]/15 border border-[#38B6C8]/30 text-[#218F9F]"
                          }`}
                        >
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Category Tag */}
                    {service.category && (
                      <span className="inline-block text-[10px] font-poppins font-semibold uppercase tracking-widest text-[#7FAE8C] mb-1">
                        {service.category}
                      </span>
                    )}

                    {/* Title & Subtitle */}
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#2E2E2E] group-hover:text-[#38B6C8] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="font-playfair italic text-xs sm:text-sm text-[#C7A34B] font-medium mb-2">
                        {service.subtitle}
                      </p>
                    )}

                    {/* Facilitator Badge */}
                    {service.facilitator && (
                      <div className="my-2.5">
                        <span className="inline-block text-[11px] font-poppins font-medium text-[#487455] bg-[#7FAE8C]/15 border border-[#7FAE8C]/25 px-2.5 py-0.5 rounded-full">
                          Facilita: {service.facilitator}
                        </span>
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="font-poppins text-xs sm:text-sm text-[#2E2E2E]/75 font-light leading-relaxed my-3 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Quick Benefits Bullet Preview */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="space-y-1.5 my-4 pt-3 border-t border-[#C7A34B]/15">
                        {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-center gap-2 text-xs font-poppins text-[#2E2E2E]/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A34B] shrink-0" />
                            <span className="truncate">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-[#C7A34B]/15 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 font-poppins text-xs font-semibold text-[#7FAE8C]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className={`inline-flex items-center gap-1.5 font-poppins text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-300 uppercase tracking-wider ${
                        isFeatured
                          ? "bg-gradient-to-r from-[#C7A34B] to-[#AA823A] text-white shadow-sm hover:from-[#38B6C8] hover:to-[#2399AC]"
                          : "text-[#C7A34B] hover:text-[#38B6C8] hover:bg-[#38B6C8]/10"
                      }`}
                    >
                      <span>Ver paquete</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
