"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";

interface MusicPlayerProps {
  autoplay?: boolean;
}

export function MusicPlayer({ autoplay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [visible, setVisible] = useState(false);

  const tryPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;
    audio.play()
      .then(() => {
        setPlaying(true);
        setVisible(true);
      })
      .catch(() => {
        setVisible(true);
      });
  };

  useEffect(() => {
    if (autoplay) {
      const t = setTimeout(tryPlay, 600);
      return () => clearTimeout(t);
    } else {
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = volume;
      audio.loop = true;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  if (!weddingConfig.music.enabled) return null;

  return (
    <>
      <audio ref={audioRef} src={weddingConfig.music.url} preload="auto" loop />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              bottom: "1.25rem",
              right: "1.25rem",
              zIndex: 100,
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(62,54,46,0.92)",
              border: "1px solid rgba(176,141,87,0.5)",
              borderRadius: "999px",
              padding: "0.45rem 1rem 0.45rem 0.5rem",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
            }}
          >
            <span style={{ color: "rgba(217,199,163,0.9)", fontSize: "0.85rem" }}>♪</span>
            <button
              onClick={toggle}
              aria-label={playing ? "Pause music" : "Play music"}
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                border: "1px solid rgba(176,141,87,0.6)",
                background: playing ? "rgba(176,141,87,0.25)" : "transparent",
                color: "#D9C7A3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "0.7rem",
                flexShrink: 0,
              }}
            >
              {playing ? "❚❚" : "▶"}
            </button>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.72rem",
                color: "rgba(217,199,163,0.9)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              {playing ? "Now playing" : "Play music"}
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => {
                const v = parseFloat(e.target.value);
                setVolume(v);
                if (audioRef.current) audioRef.current.volume = v;
              }}
              style={{ width: "56px", accentColor: "#D9C7A3", cursor: "pointer" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
