"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Music, Heart } from "lucide-react";
import PrivacyModal from "./PrivacyModal";
import { getAssetPath } from "@/utils/getAssetPath";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#2E2E2E] text-[#FAFAF7] pt-20 pb-12 relative overflow-hidden border-t border-[#C7A34B]/30">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#38B6C8]/10 via-[#C7A34B]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border border-[#C7A34B] bg-white p-0.5 overflow-hidden shadow-md">
                <Image
                  src={getAssetPath("/images/logo.png")}
                  alt="Agua Viva Holística Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-xl font-bold tracking-wider text-white">
                  AGUA VIVA
                </span>
                <span className="font-poppins text-[10px] tracking-[0.25em] text-[#C7A34B] uppercase font-semibold">
                  HOLÍSTICA
                </span>
              </div>
            </Link>

            <p className="font-poppins text-xs text-white/70 font-light leading-relaxed">
              Un espacio sagrado para sanar cuerpo, mente y espíritu. Fluye en paz, restaura tu energía y despierta tu ser supremo.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C7A34B] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#38B6C8] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C7A34B] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#7FAE8C] text-white flex items-center justify-center transition-colors"
                aria-label="Spotify Meditaciones"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-base font-bold text-[#C7A34B] tracking-wider uppercase">
              Navegación
            </h4>
            <ul className="space-y-2.5 font-poppins text-xs text-white/70">
              <li>
                <Link href="#nosotros" className="hover:text-[#38B6C8] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#38B6C8] transition-colors">
                  Servicios & Terapias
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="hover:text-[#38B6C8] transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#eventos" className="hover:text-[#38B6C8] transition-colors">
                  Próximos Eventos
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-[#38B6C8] transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="space-y-4">
            <h4 className="font-playfair text-base font-bold text-[#C7A34B] tracking-wider uppercase">
              Horario de Atención
            </h4>
            <div className="font-poppins text-xs text-white/70 space-y-2">
              <p><strong className="text-white">Lunes a Viernes:</strong> 09:00 - 19:30</p>
              <p><strong className="text-white">Sábados:</strong> 09:00 - 17:00</p>
              <p><strong className="text-white">Domingos:</strong> Ceremonias especiales</p>
            </div>
          </div>

          {/* Location & Legal */}
          <div className="space-y-4">
            <h4 className="font-playfair text-base font-bold text-[#C7A34B] tracking-wider uppercase">
              Ubicación & Legal
            </h4>
            <p className="font-poppins text-xs text-white/70 leading-relaxed">
              Morelos 654, Agua Fría, Apodaca, N.L.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="font-poppins text-xs text-[#38B6C8] hover:text-[#C7A34B] underline transition-colors"
              >
                Aviso de Privacidad
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-poppins text-white/50">
          <p>© {new Date().getFullYear()} Agua Viva Holística. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Fluye, sana y renace con</span>
            <Heart className="w-3.5 h-3.5 text-[#C7A34B] fill-[#C7A34B]" />
          </div>
        </div>
      </div>

      {/* Privacy Notice Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
