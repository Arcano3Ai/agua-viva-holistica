"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown, Calendar, Compass } from "lucide-react";

import { getAssetPath } from "@/utils/getAssetPath";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Subtle animated water ripples canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for gentle water aura
    const particles: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number }[] = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.15 + 0.05,
      });
    }

    let step = 0;

    const render = () => {
      step += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle wave gradient lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -100) p.x = width + 100;
        if (p.x > width + 100) p.x = -100;
        if (p.y < -100) p.y = height + 100;
        if (p.y > height + 100) p.y = -100;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(56, 182, 200, ${p.alpha})`);
        gradient.addColorStop(0.5, `rgba(199, 163, 75, ${p.alpha * 0.6})`);
        gradient.addColorStop(1, "rgba(250, 250, 247, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-hero-gradient"
    >
      {/* Background Intro Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none z-0"
      >
        <source src={getAssetPath("/assets/videos/videointro.mp4")} type="video/mp4" />
      </video>

      {/* Background Interactive Water Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Decorative Golden Rays Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#38B6C8]/10 via-[#C7A34B]/15 to-[#7FAE8C]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Hero Main Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Centered Logo Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full border border-[#C7A34B]/40 p-2 glass-card shadow-gold-glow flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo Agua Viva Holística"
              width={150}
              height={150}
              priority
              className="object-contain drop-shadow-md"
            />
          </div>
        </motion.div>

        {/* Small Golden Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A34B]/30 bg-white/70 backdrop-blur-md mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C7A34B]" />
          <span className="font-poppins text-xs font-medium uppercase tracking-[0.25em] text-[#C7A34B]">
            Centro de Sanación Holística
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2E2E2E] leading-none mb-6"
        >
          AGUA VIVA <span className="text-gold-gradient font-normal italic">HOLÍSTICA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-poppins text-lg sm:text-xl text-[#2E2E2E]/80 max-w-2xl font-light tracking-wide mb-10 leading-relaxed"
        >
          Un espacio para sanar cuerpo, mente y espíritu.
          <span className="block text-sm text-[#7FAE8C] font-medium mt-1">
            Fluya su ser, despierte su armonía y renazca en serenidad.
          </span>
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Link
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C7A34B] via-[#D3A343] to-[#AA823A] hover:from-[#38B6C8] hover:to-[#2399AC] text-white px-8 py-4 rounded-full font-poppins text-sm font-semibold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Cita</span>
          </Link>

          <Link
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 glass-card hover:bg-white text-[#2E2E2E] hover:text-[#38B6C8] px-8 py-4 rounded-full font-poppins text-sm font-semibold uppercase tracking-widest border border-[#C7A34B]/30 hover:border-[#38B6C8] transition-all duration-300 transform hover:-translate-y-1"
          >
            <Compass className="w-4 h-4 text-[#C7A34B]" />
            <span>Conocer Servicios</span>
          </Link>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 sm:mt-24 flex flex-col items-center"
        >
          <span className="font-poppins text-[10px] uppercase tracking-[0.3em] text-[#2E2E2E]/60 mb-2">
            Descubre la experiencia
          </span>
          <Link href="#nosotros" className="p-2 rounded-full text-[#C7A34B] hover:text-[#38B6C8] animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
