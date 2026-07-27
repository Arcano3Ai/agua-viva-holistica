"use client";

import React from "react";
import { motion } from "framer-motion";
import { Feather, Zap, Infinity as InfinityIcon, Eye, Heart, Sprout, Check } from "lucide-react";
import { BENEFITS } from "@/data/holisticData";

const ICON_MAP: Record<string, React.ElementType> = {
  Feather,
  Zap,
  Infinity: InfinityIcon,
  Eye,
  Heart,
  Sprout,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#FAFAF7] relative overflow-hidden">
      {/* Decorative Gold Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#C7A34B]/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-[#7FAE8C]">
            TRANSFORMACIÓN HOLÍSTICA
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E]">
            Beneficios para tu <span className="text-gold-gradient italic font-normal">Vida Diaria</span>
          </h2>
          <p className="font-poppins text-base text-[#2E2E2E]/70 font-light">
            Al integrar nuestras prácticas en tu vida cotidiana, florecen dimensiones profundas de bienestar.
          </p>
        </div>

        {/* Grid of 6 elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((item, idx) => {
            const IconComp = ICON_MAP[item.iconName] || Check;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-[#C7A34B]/20 relative group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#C7A34B]/15 border border-[#C7A34B]/40 flex items-center justify-center text-[#C7A34B] shrink-0 group-hover:bg-[#38B6C8] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                    <IconComp className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-[#7FAE8C]/20 flex items-center justify-center text-[#487455]">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-playfair text-lg font-bold text-[#2E2E2E] group-hover:text-[#38B6C8] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-poppins text-sm text-[#2E2E2E]/75 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
