"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#38B6C8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#C7A34B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A34B]/15 border border-[#C7A34B]/30 text-[#AA823A]">
            <Sparkle className="w-3.5 h-3.5" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              NUESTROS SERVICIOS
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E]">
            Experiencias de <span className="text-gold-gradient italic font-normal">Sanación Holística</span>
          </h2>
          <p className="font-poppins text-base text-[#2E2E2E]/70 font-light">
            Cada terapia es una invitación a la armonización profunda de tus campos físico, mental, emocional y espiritual.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden border border-[#C7A34B]/20"
              >
                {/* Subtle Card Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#38B6C8]/10 to-[#C7A34B]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div>
                  {/* Linear Gold Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-[#FAFAF7] border border-[#C7A34B]/30 flex items-center justify-center text-[#C7A34B] shadow-sm mb-6 group-hover:border-[#38B6C8] group-hover:text-[#38B6C8] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl font-bold text-[#2E2E2E] group-hover:text-[#38B6C8] transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Facilitator Badge */}
                  {service.facilitator && (
                    <span className="inline-block text-[11px] font-poppins font-medium text-[#7FAE8C] bg-[#7FAE8C]/10 border border-[#7FAE8C]/20 px-2.5 py-0.5 rounded-full mb-3">
                      Guía: {service.facilitator}
                    </span>
                  )}

                  {/* Description */}
                  <p className="font-poppins text-sm text-[#2E2E2E]/75 font-light leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#C7A34B]/15 flex items-center justify-between">
                  <span className="font-poppins text-xs font-medium text-[#7FAE8C]">
                    {service.duration}
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 font-poppins text-xs font-semibold text-[#C7A34B] group-hover:text-[#38B6C8] transition-colors uppercase tracking-wider"
                  >
                    <span>Más información</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
