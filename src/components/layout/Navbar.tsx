"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Eventos", href: "#eventos" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Galería", href: "#galeria" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-navbar py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full border border-[#C7A34B]/40 overflow-hidden bg-white/60 p-0.5 shadow-sm group-hover:border-[#38B6C8] transition-colors">
            <Image
              src="/images/logo.png"
              alt="Agua Viva Holística Logo"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-playfair text-lg font-bold tracking-wider text-[#2E2E2E] group-hover:text-[#38B6C8] transition-colors">
              AGUA VIVA
            </span>
            <span className="font-poppins text-[10px] tracking-[0.25em] text-[#C7A34B] uppercase font-semibold">
              HOLÍSTICA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-poppins text-xs uppercase tracking-widest text-[#2E2E2E]/80 hover:text-[#38B6C8] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A34B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C7A34B] to-[#AA823A] hover:from-[#38B6C8] hover:to-[#2399AC] text-white px-5 py-2.5 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservar Cita</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2E2E2E] hover:text-[#38B6C8] focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FAFAF7]/95 backdrop-blur-xl border-b border-[#C7A34B]/20 shadow-xl overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-poppins text-sm uppercase tracking-wider text-[#2E2E2E] hover:text-[#38B6C8] py-2 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C7A34B] to-[#AA823A] text-white px-5 py-3 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reservar Cita</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
