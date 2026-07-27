"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean async submission (prepared for Firebase Firestore integration)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ nombre: "", correo: "", telefono: "", mensaje: "" });
    }, 1200);
  };

  return (
    <section id="contacto" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#C7A34B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#38B6C8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-[#C7A34B]">
            ESTAMOS AQUÍ PARA TI
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E2E2E]">
            Inicia tu <span className="text-gold-gradient italic font-normal">Viaje de Sanación</span>
          </h2>
          <p className="font-poppins text-base text-[#2E2E2E]/70 font-light">
            Escríbenos para agendar tu consulta personalizada, resolver cualquier inquietud o apartar tu espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info Cards & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Cards Grid */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#C7A34B]/30 space-y-6 shadow-lg">
              <h3 className="font-playfair text-xl font-bold text-[#2E2E2E]">
                Información del Santuario
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#38B6C8]/15 flex items-center justify-center text-[#38B6C8] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-[#2E2E2E]">Ubicación</h4>
                    <p className="font-poppins text-xs text-[#2E2E2E]/70 mt-0.5">
                      Morelos 654, Agua Fría, Apodaca, N.L.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C7A34B]/15 flex items-center justify-center text-[#C7A34B] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-[#2E2E2E]">Horario de Atención</h4>
                    <p className="font-poppins text-xs text-[#2E2E2E]/70 mt-0.5">
                      Lunes a Sábado: 09:00 - 19:30 hrs<br />
                      Domingo: Ceremonias especiales previa cita.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7FAE8C]/15 flex items-center justify-center text-[#487455] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-[#2E2E2E]">Teléfono & WhatsApp</h4>
                    <p className="font-poppins text-xs text-[#2E2E2E]/70 mt-0.5">
                      +52 (55) 8439-9200
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#38B6C8]/15 flex items-center justify-center text-[#38B6C8] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-sm font-bold text-[#2E2E2E]">Correo Electrónico</h4>
                    <p className="font-poppins text-xs text-[#2E2E2E]/70 mt-0.5">
                      contacto@aguavivaholistica.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-4 border-t border-[#C7A34B]/20">
                <a
                  href="https://wa.me/525584399200?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20agendar%20una%20cita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-full font-poppins text-xs font-semibold uppercase tracking-wider shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar mensaje por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#C7A34B]/30 h-64 relative">
              <iframe
                title="Ubicación Agua Viva Holística"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661642878709!2d-99.1678!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzecMy40Ik4gOTnCsDEwJzA0LjEiVw!5e0!3m2!1ses!2smx!4v1680000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(0.95) saturate(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right Column: Elegant Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#C7A34B]/30 shadow-2xl relative">
              <h3 className="font-playfair text-2xl font-bold text-[#2E2E2E] mb-2">
                Reserva tu Espacio de Sanación
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-[#2E2E2E]/70 font-light mb-8">
                Completa tus datos y nuestro equipo te responderá en menos de 2 horas.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#7FAE8C]/20 text-[#487455] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-[#2E2E2E]">
                    ¡Mensaje recibido con bendiciones!
                  </h4>
                  <p className="font-poppins text-sm text-[#2E2E2E]/70 max-w-md mx-auto">
                    Gracias por confiar en Agua Viva Holística. Nos pondremos en contacto contigo a la brevedad posible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-[#C7A34B] text-[#C7A34B] font-poppins text-xs font-semibold uppercase tracking-wider hover:bg-[#C7A34B] hover:text-white transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-poppins font-medium uppercase tracking-wider text-[#2E2E2E]/80 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Sofía Martínez"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:border-[#38B6C8] font-poppins text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-poppins font-medium uppercase tracking-wider text-[#2E2E2E]/80 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:border-[#38B6C8] font-poppins text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-poppins font-medium uppercase tracking-wider text-[#2E2E2E]/80 mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="+52 55 1234 5678"
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:border-[#38B6C8] font-poppins text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-poppins font-medium uppercase tracking-wider text-[#2E2E2E]/80 mb-2">
                      Mensaje o servicio de interés *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Cuéntanos en qué servicio estás interesado/a o tus inquietudes..."
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:border-[#38B6C8] font-poppins text-sm transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C7A34B] via-[#D3A343] to-[#AA823A] hover:from-[#38B6C8] hover:to-[#2399AC] text-white py-4 rounded-full font-poppins text-xs font-semibold uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando mensaje...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitud</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
