"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";

const GOLD  = "#B08D57";
const WHITE = "#FFFFFF";

export function EnvelopeScreen({ onOpen }: { onOpen: () => void }) {
  const [clicked, setClicked] = useState(false);
  const [petals, setPetals] = useState<{ id: number; left: string; delay: string; dur: string }[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      dur: `${7 + Math.random() * 6}s`,
    })));
  }, []);

  const handleClick = () => { setClicked(true); setTimeout(onOpen, 900); };

  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          key="envelope"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer select-none"
          style={{ background: "linear-gradient(160deg, #D3A3A3 0%, #C08B8B 50%, #9C6969 100%)" }}
          onClick={handleClick}
        >
          {petals.map(p => (
            <span key={p.id} className="petal" style={{ left: p.left, animationDelay: p.delay, animationDuration: p.dur, fontSize: "0.9rem" }}>🌸</span>
          ))}

          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(176,141,87,0.18) 0%, transparent 65%)" }} />

          <div className="absolute inset-8 pointer-events-none rounded-sm" style={{ border: "1px solid rgba(176,141,87,0.4)" }} />
          <div className="absolute inset-10 pointer-events-none rounded-sm" style={{ border: "1px solid rgba(176,141,87,0.22)" }} />

          <motion.div
            animate={clicked ? { scaleY: 0.02, opacity: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center text-center px-10 py-14"
            style={{ maxWidth: 380, width: "90%" }}
          >
            <div className="flex items-center gap-3 mb-8 w-full">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(176,141,87,0.85))" }} />
              <span style={{ color: GOLD, fontSize: 18 }}>✦</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(176,141,87,0.85), transparent)" }} />
            </div>

            <p className="font-cormorant italic text-sm mb-6" style={{ color: WHITE }}>
              {weddingConfig.messages.scripture}
              <br />
              <span style={{ fontSize: "0.78rem", opacity: 0.85 }}>{weddingConfig.messages.scriptureRef}</span>
            </p>

            <p className="font-sans text-xs tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.35em" }}>
              {weddingConfig.messages.saveTheDate}
            </p>

            <h1
              className="mb-2"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.4rem, 9vw, 3.2rem)",
                color: WHITE,
                lineHeight: 1.1,
                letterSpacing: "0.03em",
              }}
            >
              {weddingConfig.couple.brideName}
            </h1>
            <p className="font-cormorant italic text-xl mb-2" style={{ color: GOLD }}>&amp;</p>
            <h1
              className="mb-6"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.4rem, 9vw, 3.2rem)",
                color: WHITE,
                lineHeight: 1.1,
                letterSpacing: "0.03em",
              }}
            >
              {weddingConfig.couple.groomName}
            </h1>

            <p className="font-playfair tracking-widest mb-2" style={{ color: GOLD, letterSpacing: "0.2em", fontSize: "1.1rem" }}>
              {weddingConfig.wedding.dotDate}
            </p>

            <div className="flex items-center gap-3 mt-6 mb-8 w-full">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(176,141,87,0.85))" }} />
              <span style={{ color: GOLD, fontSize: 18 }}>✦</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(176,141,87,0.85), transparent)" }} />
            </div>

            <motion.div animate={{ opacity: [0.5, 1, 0.5], y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity }}
              className="flex flex-col items-center gap-2">
              <div className="px-7 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase"
                style={{ border: "1px solid rgba(176,141,87,0.75)", color: WHITE, letterSpacing: "0.25em" }}>
                Open Invitation
              </div>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 10, letterSpacing: "0.15em" }}>tap anywhere to continue</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
