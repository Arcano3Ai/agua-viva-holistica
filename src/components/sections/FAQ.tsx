"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/holisticData";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAFAF7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7FAE8C]/15 border border-[#7FAE8C]/30 text-[#487455]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
              DUDAS FRECUENTES
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E]">
            Preguntas <span className="text-gold-gradient italic font-normal">Frecuentes</span>
          </h2>
          <p className="font-poppins text-base text-[#2E2E2E]/70 font-light">
            Queremos que te sientas en total calma y certeza antes de iniciar tu experiencia holística.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden border border-[#C7A34B]/20 transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-playfair text-lg font-bold text-[#2E2E2E]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#38B6C8] text-white"
                        : "bg-[#C7A34B]/15 text-[#C7A34B]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 font-poppins text-sm text-[#2E2E2E]/80 font-light leading-relaxed border-t border-[#C7A34B]/10">
                        <p className="mt-3">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
