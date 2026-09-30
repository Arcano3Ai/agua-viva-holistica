"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/utils/getAssetPath";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioSrc = getAssetPath("/audio/agua_viva_musica.mp3");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Attempt gentle autoplay if not previously paused by user
    const tryAutoplay = async () => {
      try {
        const userPaused = sessionStorage.getItem("agua_viva_music_paused");
        if (userPaused === "true") return;

        await audio.play();
      } catch {
        // Autoplay policy prevented playback, wait for first user interaction
        const handleFirstInteraction = async () => {
          try {
            const stillPaused = sessionStorage.getItem("agua_viva_music_paused");
            if (!stillPaused && audioRef.current && audioRef.current.paused) {
              await audioRef.current.play();
            }
          } catch {
            // Ignore
          }
          window.removeEventListener("click", handleFirstInteraction);
          window.removeEventListener("touchstart", handleFirstInteraction);
        };

        window.addEventListener("click", handleFirstInteraction, { once: true });
        window.addEventListener("touchstart", handleFirstInteraction, { once: true });
      }
    };

    tryAutoplay();

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioSrc]);

  // Handle play / pause toggle
  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      try {
        sessionStorage.setItem("agua_viva_music_paused", "true");
      } catch {
        // Ignore storage errors
      }
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        try {
          sessionStorage.removeItem("agua_viva_music_paused");
        } catch {
          // Ignore
        }
      } catch (err) {
        console.warn("Error attempting playback:", err);
      }
    }
  }, [isPlaying]);

  // Handle mute toggle
  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
  }, [isMuted]);

  // Handle volume change
  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) {
        audioRef.current.muted = true;
        setIsMuted(true);
      } else if (audioRef.current.muted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  }, []);

  return (
    <div
      className="fixed bottom-6 left-6 z-40 select-none flex items-center"
      onMouseEnter={() => setShowVolumeSlider(true)}
      onMouseLeave={() => setShowVolumeSlider(false)}
    >
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#1A1A1A]/90 backdrop-blur-md border border-[#C7A34B]/40 text-white shadow-2xl transition-all duration-300 hover:border-[#C7A34B] hover:shadow-[0_0_20px_rgba(199,163,75,0.25)]"
      >
        {/* Play / Pause main button */}
        <button
          onClick={togglePlay}
          className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#C7A34B] to-[#E6CA65] text-[#1A1A1A] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#C7A34B]/60"
          aria-label={isPlaying ? "Pausar música de fondo" : "Reproducir música de fondo"}
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-[#1A1A1A] stroke-none" />
          ) : (
            <Play className="w-4 h-4 fill-[#1A1A1A] stroke-none ml-0.5" />
          )}

          {/* Halo pulse when playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border border-[#C7A34B] animate-ping opacity-30 pointer-events-none" />
          )}
        </button>

        {/* Audio Visualizer Waves + Track Information */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={togglePlay}>
          {/* Animated sound bars */}
          <div className="flex items-end gap-0.5 h-4 w-4 justify-center">
            <span
              className={`w-1 bg-[#C7A34B] rounded-full transition-all duration-300 ${
                isPlaying ? "animate-[soundwave1_1s_ease-in-out_infinite] h-3.5" : "h-1 opacity-50"
              }`}
            />
            <span
              className={`w-1 bg-[#38B6C8] rounded-full transition-all duration-300 ${
                isPlaying ? "animate-[soundwave2_0.8s_ease-in-out_infinite] h-4" : "h-1 opacity-50"
              }`}
            />
            <span
              className={`w-1 bg-[#C7A34B] rounded-full transition-all duration-300 ${
                isPlaying ? "animate-[soundwave3_1.1s_ease-in-out_infinite] h-2.5" : "h-1 opacity-50"
              }`}
            />
          </div>

          <div className="hidden sm:flex flex-col text-left pr-1">
            <span className="text-[11px] font-medium tracking-wide text-white flex items-center gap-1 font-serif">
              Agua Viva
            </span>
            <span className="text-[9px] text-white/60 tracking-wider uppercase font-sans">
              {isPlaying ? "Música de fondo" : "Pausada"}
            </span>
          </div>
        </div>

        {/* Volume & Mute Controls */}
        <div className="flex items-center gap-1.5 pl-1 border-l border-white/10">
          <button
            onClick={toggleMute}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label={isMuted ? "Activar sonido" : "Silenciar música"}
            title={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-[#D96B43]" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#C7A34B]" />
            )}
          </button>

          {/* Volume Slider on hover/click */}
          <AnimatePresence>
            {showVolumeSlider && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 64 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden flex items-center pr-1"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C7A34B]"
                  aria-label="Control de volumen de música"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Global CSS animations for soundwave bars */}
      <style jsx global>{`
        @keyframes soundwave1 {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        @keyframes soundwave2 {
          0%, 100% { height: 16px; }
          50% { height: 6px; }
        }
        @keyframes soundwave3 {
          0%, 100% { height: 8px; }
          50% { height: 14px; }
        }
      `}</style>
    </div>
  );
}
