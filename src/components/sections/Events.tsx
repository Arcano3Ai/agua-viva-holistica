"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Sparkles, Check, X } from "lucide-react";
import { UPCOMING_EVENTS, EventItem } from "@/data/holisticData";

export default function Events() {
  const [bookingEvent, setBookingEvent] = useState<EventItem | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setBookingEvent(null);
    }, 2500);
  };

  return (
    <section id="eventos" className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C7A34B]/15 border border-[#C7A34B]/30 text-[#AA823A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-poppins text-xs font-semibold uppercase tracking-widest">
                COMUNIDAD Y RITUALES
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E]">
              Próximos <span className="text-gold-gradient italic font-normal">Eventos & Círculos</span>
            </h2>
            <p className="font-poppins text-base text-[#2E2E2E]/70 font-light max-w-xl">
              Encuentros transformadores de sincronía y alta vibración en nuestro santuario holístico.
            </p>
          </div>
        </div>

        {/* Horizontal Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {UPCOMING_EVENTS.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col sm:flex-row border border-[#C7A34B]/20 hover:border-[#38B6C8] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* Event Image */}
              <div className="relative sm:w-2/5 h-48 sm:h-auto min-h-[220px]">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C7A34B]/30 shadow-sm">
                  <span className="font-poppins text-xs font-bold text-[#C7A34B]">
                    {evt.price}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 text-xs text-[#38B6C8] font-semibold font-poppins mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{evt.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-playfair text-xl font-bold text-[#2E2E2E] mb-2 leading-snug">
                    {evt.title}
                  </h3>

                  {/* Description */}
                  <p className="font-poppins text-xs sm:text-sm text-[#2E2E2E]/75 font-light line-clamp-2 mb-4">
                    {evt.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#C7A34B]/15">
                  <div className="flex items-center justify-between text-xs text-[#2E2E2E]/70 font-poppins">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C7A34B]" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#7FAE8C] font-medium">
                      <Users className="w-3.5 h-3.5" />
                      <span>{evt.spotsLeft} cupos libres</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setBookingEvent(evt)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C7A34B] to-[#AA823A] hover:from-[#38B6C8] hover:to-[#2399AC] text-white py-2.5 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>Apartar Lugar</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Booking Modal */}
      <AnimatePresence>
        {bookingEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingEvent(null)}
              className="fixed inset-0 bg-[#2E2E2E]/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-[#FAFAF7] rounded-3xl p-6 sm:p-8 max-w-md w-full z-10 shadow-2xl border border-[#C7A34B]/30"
            >
              <button
                onClick={() => setBookingEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-[#2E2E2E]"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-[#7FAE8C]/20 text-[#487455] rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#2E2E2E]">
                    ¡Lugar pre-apartado!
                  </h3>
                  <p className="font-poppins text-sm text-[#2E2E2E]/70 font-light">
                    Te contactaremos de inmediato por WhatsApp para enviarte las instrucciones de confirmación para {bookingEvent.title}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <span className="font-poppins text-[10px] uppercase tracking-widest text-[#C7A34B] font-semibold">
                      Inscripción a Evento
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-[#2E2E2E] mt-1">
                      {bookingEvent.title}
                    </h3>
                    <p className="font-poppins text-xs text-[#38B6C8] font-medium mt-1">
                      {bookingEvent.date} — {bookingEvent.time}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-poppins text-[#2E2E2E]/80 mb-1">Nombre Completo</label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#38B6C8] font-poppins text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-poppins text-[#2E2E2E]/80 mb-1">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+52 55 0000 0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#38B6C8] font-poppins text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-[#C7A34B] to-[#AA823A] text-white py-3 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider shadow-md hover:from-[#38B6C8] hover:to-[#2399AC] transition-all"
                  >
                    Confirmar mi Asistencia
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
