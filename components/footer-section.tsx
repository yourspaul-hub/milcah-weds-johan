"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/lib/wedding-config";

export function FooterSection() {
  return (
    <section style={{ background: "linear-gradient(180deg,#9C6969,#7A5050)" }} className="pt-16 pb-10 px-6">
      <div className="max-w-lg mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-cormorant italic text-lg mb-6" style={{ color: "#B08D57" }}>
          {weddingConfig.messages.closingLine}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="font-playfair mb-10" style={{ fontSize: "clamp(1.1rem,3.5vw,1.4rem)", fontStyle: "italic", color: "#FFFFFF" }}>
          {weddingConfig.messages.sharingNames}
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mb-1"
          style={{ fontFamily: "'Great Vibes',cursive", fontSize: "clamp(2.8rem,10vw,4.5rem)", color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "0.03em" }}>
          {weddingConfig.couple.brideName}
        </motion.h2>
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="font-cormorant italic text-2xl" style={{ color: "#B08D57" }}>
          &amp;
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
          className="mt-1 mb-8"
          style={{ fontFamily: "'Great Vibes',cursive", fontSize: "clamp(2.8rem,10vw,4.5rem)", color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "0.03em" }}>
          {weddingConfig.couple.groomName}
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }}
          className="font-playfair mt-2 mb-1" style={{ color: "#B08D57", letterSpacing: "0.18em", fontSize: "1.05rem" }}>
          {weddingConfig.wedding.dotDate}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="font-sans text-xs mb-2" style={{ color: "rgba(255,255,255,0.88)" }}>
          {weddingConfig.wedding.venueFullName} · {weddingConfig.wedding.venueAddress}
        </motion.p>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,transparent,rgba(176,141,87,0.55))" }} />
          <Heart size={16} className="heartbeat" style={{ color: "#B08D57" }} fill="#B08D57" />
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,rgba(176,141,87,0.55),transparent)" }} />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
          className="font-sans text-[11px] mt-6 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.2em" }}>
          Made by yzarC Studio
        </motion.p>
      </div>
    </section>
  );
}
