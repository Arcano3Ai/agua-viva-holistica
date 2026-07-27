"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplet, Heart, ShieldCheck, Sun, Flame, Sparkles, Compass } from "lucide-react";
import { TEAM_GUIDES } from "@/data/holisticData";
import { getAssetPath } from "@/utils/getAssetPath";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#FAFAF7] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7FAE8C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38B6C8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* Top Block: Mission & Sanctuary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Sanctuary Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
              <div className="aspect-[4/5] relative w-full">
                <Image
                  src={getAssetPath("/images/about.png")}
                  alt="Santuario Agua Viva Holística"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Glassmorphism Floating Badge */}
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto glass-card p-5 rounded-2xl border border-[#C7A34B]/30 max-w-xs shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#C7A34B]/20 flex items-center justify-center text-[#C7A34B]">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-base font-bold text-[#2E2E2E]">Santuario del Alma</h4>
                    <p className="font-poppins text-xs text-[#7FAE8C] font-medium">Energía, calma & restauración</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Ring Frame */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-[#C7A34B]/30 rounded-full -z-10 hidden sm:block" />
          </motion.div>

          {/* Right Column: Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7FAE8C]/15 border border-[#7FAE8C]/30 text-[#487455]">
              <Sun className="w-3.5 h-3.5" />
              <span className="font-poppins text-xs font-semibold uppercase tracking-wider">
                NUESTRA MISIÓN
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E] leading-tight">
              Un refugio de luz donde el agua fluye y el alma <span className="text-gold-gradient italic font-normal">encuentra su centro</span>.
            </h2>

            {/* Main Text */}
            <p className="font-poppins text-base text-[#2E2E2E]/80 font-light leading-relaxed">
              En <strong className="font-medium text-[#2E2E2E]">Agua Viva Holística</strong> nacimos con el propósito sagrado de ofrecer un espacio de alta frecuencia vibracional para quienes buscan pausar el ruido del mundo exterior y reconectar con su esencia infinita.
            </p>

            <p className="font-poppins text-sm text-[#2E2E2E]/70 font-light leading-relaxed">
              Inspirados en la sabiduría ancestral y la naturaleza del agua —que limpia, nutre y se adapta a la vida— integramos terapias energéticas, sonido sanador, cristales y rituales conscientes.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 rounded-xl border border-[#C7A34B]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#38B6C8]/10 text-[#38B6C8] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-[#2E2E2E]">Seguridad y Respeto</h4>
                  <p className="font-poppins text-xs text-[#2E2E2E]/70 mt-0.5">Entornos éticos y confidenciales para tu proceso.</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-[#C7A34B]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#C7A34B]/10 text-[#C7A34B] shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-sm text-[#2E2E2E]">Sanación Amorosa</h4>
                  <p className="font-poppins text-xs text-[#2E2E2E]/70 mt-0.5">Técnicas integrativas adaptadas a tus necesidades.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Header for Team Guides */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A34B]/15 border border-[#C7A34B]/30 text-[#AA823A]">
            <Flame className="w-3.5 h-3.5 text-[#C7A34B]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-wider">
              NUESTROS GUÍAS & FUNDADORES
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
            Guardianes del <span className="text-gold-gradient italic font-normal">Fuego & la Armonía</span>
          </h2>
        </div>

        {/* Team Guides Grid */}
        <div className="space-y-16">
          {TEAM_GUIDES.map((guide, gIdx) => (
            <motion.div
              key={guide.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: gIdx * 0.2 }}
              className="glass-card rounded-3xl p-8 sm:p-12 border border-[#C7A34B]/30 shadow-2xl relative overflow-hidden bg-hero-gradient"
            >
              {/* Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C7A34B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Guide Images Column */}
                <div className={`lg:col-span-5 grid grid-cols-2 gap-4 ${gIdx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4] group">
                    <Image
                      src={getAssetPath(guide.imageMeditation)}
                      alt={`${guide.name} Sesión`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-center">
                      <span className="font-poppins text-[10px] text-white/90 uppercase tracking-widest font-medium">
                        Presencia & Ritual
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[3/4] group mt-6">
                    <Image
                      src={getAssetPath(guide.imageStaff)}
                      alt={`${guide.name} ${guide.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-center">
                      <span className="font-poppins text-[10px] text-white/90 uppercase tracking-widest font-medium">
                        Sanación & Trabajo
                      </span>
                    </div>
                  </div>
                </div>

                {/* Guide Story Content Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2E2E2E]">
                      {guide.name} <span className="text-gold-gradient italic font-normal">{guide.title}</span>
                    </h3>
                    <p className="font-poppins text-xs text-[#7FAE8C] font-semibold uppercase tracking-widest mt-1">
                      {guide.role}
                    </p>
                  </div>

                  {/* Quote Box */}
                  <blockquote className="border-l-2 border-[#C7A34B] pl-4 italic font-playfair text-base sm:text-lg text-[#2E2E2E]/90 bg-white/40 p-3 rounded-r-xl">
                    "{guide.quote}"
                  </blockquote>

                  {/* Bio Story */}
                  <p className="font-poppins text-sm text-[#2E2E2E]/80 font-light leading-relaxed">
                    {guide.story}
                  </p>

                  {/* Specialties List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-playfair text-sm font-bold text-[#2E2E2E] flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#C7A34B]" />
                      <span>Especialidades & Acompañamiento:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {guide.specialties.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-poppins text-[#2E2E2E]/80">
                          <Sparkles className="w-3.5 h-3.5 text-[#38B6C8] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
