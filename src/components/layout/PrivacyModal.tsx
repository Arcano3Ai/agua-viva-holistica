"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2E2E2E]/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-[#FAFAF7] rounded-3xl p-6 sm:p-10 max-w-2xl w-full z-10 shadow-2xl border border-[#C7A34B]/30 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 text-[#2E2E2E]"
            aria-label="Cerrar aviso de privacidad"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6 border-b border-[#C7A34B]/20 pb-4">
            <div className="w-10 h-10 rounded-full bg-[#7FAE8C]/20 text-[#487455] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#2E2E2E]">
                Aviso de Privacidad
              </h3>
              <p className="font-poppins text-xs text-[#7FAE8C]">
                Agua Viva Holística S.A. de C.V.
              </p>
            </div>
          </div>

          <div className="space-y-4 font-poppins text-xs sm:text-sm text-[#2E2E2E]/80 font-light leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
            <p>
              En <strong>Agua Viva Holística</strong>, la confidencialidad y protección de tus datos personales es nuestra máxima prioridad. La información recabada a través de este portal web, formularios de contacto o reservas por WhatsApp será utilizada exclusivamente para brindar los servicios holísticos y comunicarle eventos especiales.
            </p>

            <h4 className="font-playfair font-bold text-[#2E2E2E] text-sm">1. Datos Personales Recabados</h4>
            <p>
              Recabamos nombre completo, teléfono de contacto y correo electrónico únicamente con el propósito de gestionar citas y ofrecer asesoría personalizada.
            </p>

            <h4 className="font-playfair font-bold text-[#2E2E2E] text-sm">2. No Transferencia a Terceros</h4>
            <p>
              Tus datos no serán vendidos, cedidos ni compartidos con ninguna empresa u organización de terceros.
            </p>

            <h4 className="font-playfair font-bold text-[#2E2E2E] text-sm">3. Derechos ARCO</h4>
            <p>
              Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición enviando un correo a <em>contacto@aguavivaholistica.com</em>.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#C7A34B]/20 text-right">
            <button
              onClick={onClose}
              className="bg-[#C7A34B] text-white px-6 py-2.5 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider hover:bg-[#38B6C8] transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
