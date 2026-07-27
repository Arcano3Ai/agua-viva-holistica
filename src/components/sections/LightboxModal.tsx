"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/holisticData";
import { getAssetPath } from "@/utils/getAssetPath";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function LightboxModal({ item, onClose }: LightboxModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2E2E2E]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full bg-[#FAFAF7] rounded-3xl overflow-hidden shadow-2xl border border-[#C7A34B]/40 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#2E2E2E] flex items-center justify-center shadow-lg transition-all"
            aria-label="Cerrar vista previa"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Large Image Container */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
            <Image
              src={getAssetPath(item.image)}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Image Title & Category */}
          <div className="p-6 bg-[#FAFAF7] flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A34B]/15 text-[#AA823A] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {item.category}
              </span>
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#2E2E2E] mt-2">
                {item.title}
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
