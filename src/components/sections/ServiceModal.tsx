"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, CheckCircle2, Calendar } from "lucide-react";
import Image from "next/image";
import { ServiceItem } from "@/data/holisticData";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2E2E2E]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-[#FAFAF7] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#C7A34B]/30 z-10 my-8"
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
          <div className="relative h-56 sm:h-64 w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF7] via-[#FAFAF7]/30 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A34B] text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Clock className="w-3.5 h-3.5" />
                {service.duration}
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#2E2E2E] mt-2">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-poppins text-sm sm:text-base text-[#2E2E2E]/80 font-light leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Benefits */}
            <div>
              <h4 className="font-playfair font-bold text-base text-[#2E2E2E] mb-3">
                Beneficios Principales
              </h4>
              <div className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-[#2E2E2E]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#7FAE8C] shrink-0" />
                    <span className="font-poppins">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#C7A34B]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#2E2E2E]/60 font-poppins">
                Atención personalizada con cita previa.
              </div>
              <a
                href="#contacto"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C7A34B] to-[#AA823A] hover:from-[#38B6C8] hover:to-[#2399AC] text-white px-6 py-3 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar esta Terapia</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
