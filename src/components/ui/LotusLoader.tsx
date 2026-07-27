"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LotusLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="lotus-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAFAF7] overflow-hidden"
        >
          {/* Subtle water ripple background glow */}
          <div className="absolute inset-0 bg-hero-gradient opacity-60" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Morphing Water Drop to Lotus Container */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Droplet outline */}
              <motion.div
                initial={{ scale: 0.2, opacity: 0, y: -40 }}
                animate={{ scale: [0.3, 1, 0.9, 1], opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-32 h-32 rounded-full border border-[#C7A34B]/30 flex items-center justify-center p-2 shadow-gold-glow">
                  <Image
                    src="/images/logo.png"
                    alt="Agua Viva Holística"
                    width={110}
                    height={110}
                    priority
                    className="object-contain animate-lotus-pulse drop-shadow-md"
                  />
                </div>
              </motion.div>

              {/* Water ripple circles */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: [1, 1.8, 2.4], opacity: [0.6, 0.3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-28 h-28 rounded-full border border-[#38B6C8]/40"
              />
            </div>

            {/* Typography Entrance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-6 text-center"
            >
              <h2 className="font-playfair text-xl tracking-[0.25em] text-[#2E2E2E] font-semibold uppercase">
                Agua Viva
              </h2>
              <p className="font-poppins text-xs tracking-[0.3em] text-[#C7A34B] font-medium mt-1 uppercase">
                Holística
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
