"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";

const GOLD  = "#E8D9BB";
const IVORY = "#FBF7EF";

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
          style={{ background: "linear-gradient(160deg, #8A9480 0%, #7A8471 50%, #5F6A56 100%)" }}
          onClick={handleClick}
        >
          {petals.map(p => (
            <span key={p.id} className="petal" style={{ left: p.left, animationDelay: p.delay, animationDuration: p.dur, fontSize: "0.9rem" }}>🌿</span>
          ))}

          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(232,217,187,0.15) 0%, transparent 65%)" }} />

          <div className="absolute inset-8 pointer-events-none rounded-sm" style={{ border: "1px solid rgba(232,217,187,0.35)" }} />
          <div className="absolute inset-10 pointer-events-none rounded-sm" style={{ border: "1px solid rgba(232,217,187,0.2)" }} />

          <motion.div
            animate={clicked ? { scaleY: 0.02, opacity: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center text-center px-10 py-14"
            style={{ maxWidth: 380, width: "90%" }}
          >
            <div className="flex items-center gap-3 mb-8 w-full">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,217,187,0.8))" }} />
              <span style={{ color: GOLD, fontSize: 18 }}>✦</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(232,217,187,0.8), transparent)" }} />
            </div>

            <p className="font-cormorant italic text-sm mb-6" style={{ color: IVORY }}>
              {weddingConfig.messages.scripture}
              <br />
              <span style={{ fontSize: "0.78rem", opacity: 0.85 }}>{weddingConfig.messages.scriptureRef}</span>
            </p>

            <p className="font-sans text-xs tracking-widest uppercase mb-5" style={{ color: "rgba(251,247,239,0.85)", letterSpacing: "0.35em" }}>
              {weddingConfig.messages.saveTheDate}
            </p>

            <h1
              className="mb-2"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.4rem, 9vw, 3.2rem)",
                color: IVORY,
                lineHeight: 1.1,
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
                color: IVORY,
                lineHeight: 1.1,
              }}
            >
              {weddingConfig.couple.groomName}
            </h1>

            <p className="font-playfair tracking-widest mb-2" style={{ color: GOLD, letterSpacing: "0.2em", fontSize: "1.1rem" }}>
              {weddingConfig.wedding.dotDate}
            </p>

            <div className="flex items-center gap-3 mt-6 mb-8 w-full">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,217,187,0.8))" }} />
              <span style={{ color: GOLD, fontSize: 18 }}>✦</span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(232,217,187,0.8), transparent)" }} />
            </div>

            <motion.div animate={{ opacity: [0.5, 1, 0.5], y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity }}
              className="flex flex-col items-center gap-2">
              <div className="px-7 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase"
                style={{ border: "1px solid rgba(232,217,187,0.7)", color: IVORY, letterSpacing: "0.25em" }}>
                Open Invitation
              </div>
              <span style={{ color: "rgba(251,247,239,0.7)", fontSize: 10, letterSpacing: "0.15em" }}>tap anywhere to continue</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
