"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/holisticData";
import LightboxModal from "./LightboxModal";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("Todas");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ["Todas", "Instalaciones", "Ceremonias", "Terapias"];

  const filteredItems =
    activeFilter === "Todas"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-[#38B6C8]">
            ESPACIOS SAGRADOS
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E]">
            Galería de <span className="text-gold-gradient italic font-normal">Armonía & Luz</span>
          </h2>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-[#C7A34B] to-[#AA823A] text-white shadow-md"
                  : "glass-card text-[#2E2E2E]/80 hover:text-[#38B6C8] hover:border-[#38B6C8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg border border-[#C7A34B]/20 break-inside-avoid"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/80 via-[#2E2E2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <span className="text-[10px] uppercase font-poppins tracking-widest text-[#C7A34B] font-semibold">
                          {item.category}
                        </span>
                        <h4 className="font-playfair text-lg font-bold">
                          {item.title}
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
