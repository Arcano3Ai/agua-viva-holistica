"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, Calendar, MessageCircle, Sparkles, Quote, Layers } from "lucide-react";
import Image from "next/image";
import { ServiceItem } from "@/data/holisticData";
import { getAssetPath } from "@/utils/getAssetPath";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa solicitar informes y agendar la experiencia de "${service.title}${
      service.subtitle ? ` — ${service.subtitle}` : ""
    }" en Agua Viva Holística.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2E2E2E]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-[#FAFAF7] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C7A34B]/30 z-10 my-6 scrollbar-thin"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#2E2E2E] flex items-center justify-center shadow-md transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-60 sm:h-72 w-full bg-black/10">
            <Image
              src={getAssetPath(service.image)}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF7] via-[#FAFAF7]/40 to-black/30" />

            {/* Badge floating */}
            {service.badge && (
              <div className="absolute top-4 left-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#C7A34B] via-[#E2BA55] to-[#AA823A] text-white text-xs font-bold uppercase tracking-wider shadow-gold-glow animate-pulse-slow">
                  <Sparkles className="w-3.5 h-3.5" />
                  {service.badge}
                </span>
              </div>
            )}

            {/* Titles overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-col items-start gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A34B] text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <Clock className="w-3.5 h-3.5" />
                  {service.duration}
                </span>
                {service.facilitator && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#487455] border border-[#7FAE8C]/30 text-xs font-semibold shadow-sm">
                    Facilita: {service.facilitator}
                  </span>
                )}
                {service.category && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#38B6C8] border border-[#38B6C8]/30 text-xs font-semibold shadow-sm">
                    {service.category}
                  </span>
                )}
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#2E2E2E] mt-1">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="font-playfair italic text-sm sm:text-base text-[#C7A34B] font-medium">
                  {service.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-7">
            {/* Powerful Quote if present */}
            {service.quote && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#C7A34B]/15 via-white/80 to-[#38B6C8]/10 border border-[#C7A34B]/30 relative shadow-sm">
                <Quote className="w-6 h-6 text-[#C7A34B]/40 mb-1" />
                <p className="font-playfair italic text-base sm:text-lg text-[#2E2E2E] font-medium leading-relaxed">
                  "{service.quote}"
                </p>
              </div>
            )}

            {/* Description */}
            <div>
              <h4 className="font-playfair font-bold text-lg text-[#2E2E2E] mb-2">
                Acerca de esta Experiencia
              </h4>
              <p className="font-poppins text-sm sm:text-base text-[#2E2E2E]/80 font-light leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            {/* Detailed Includes Section ("¿Qué incluye?") */}
            {service.includes && service.includes.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-5 h-5 text-[#C7A34B]" />
                  <h4 className="font-playfair font-bold text-lg text-[#2E2E2E]">
                    ¿Qué incluye la sesión?
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.includes.map((inc, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-4 rounded-2xl bg-white/70 border border-[#C7A34B]/20 shadow-sm flex flex-col justify-start hover:border-[#38B6C8]/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-[#C7A34B] font-playfair font-bold text-sm mb-1.5">
                        <span className="text-xs">✦</span>
                        <span>{inc.title}</span>
                      </div>
                      <p className="font-poppins text-xs text-[#2E2E2E]/75 leading-relaxed font-light">
                        {inc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits List */}
            <div>
              <h4 className="font-playfair font-bold text-base text-[#2E2E2E] mb-3">
                Beneficios Principales
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2E2E2E]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#7FAE8C] shrink-0" />
                    <span className="font-poppins">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-5 border-t border-[#C7A34B]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#2E2E2E]/60 font-poppins text-center sm:text-left">
                Atención personalizada en Apodaca, N.L. Cita previa requerida.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/525584399200?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Apartar por WhatsApp</span>
                </a>

                <a
                  href="#contacto"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C7A34B] to-[#AA823A] hover:from-[#38B6C8] hover:to-[#2399AC] text-white px-6 py-3 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar en Línea</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
