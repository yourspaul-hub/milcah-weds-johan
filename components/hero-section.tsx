"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { weddingConfig } from "@/lib/wedding-config";

const GOLD  = "#B08D57";
const WHITE = "#FFFFFF";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg,#D3A3A3 0%,#C08B8B 55%,#9C6969 100%)",
        minHeight: "100svh",
      }}
    >
      {/* Translucent watercolor illustration — blended softly into the background */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 72%)",
          maskImage: "radial-gradient(circle, black 35%, transparent 72%)",
        }}
      >
        <div
          style={{
            width: "clamp(260px,60vw,460px)",
            aspectRatio: "3 / 2",
            backgroundImage: `url('${weddingConfig.images.heroBackground}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            mixBlendMode: "soft-light",
            filter: "saturate(0.85)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 md:py-28 min-h-screen justify-center">
        <div className="absolute inset-8 pointer-events-none" style={{ border: "1px solid rgba(176,141,87,0.35)", borderRadius: 2 }} />

        <motion.p initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-cormorant italic text-sm md:text-base mb-6 max-w-md" style={{ color: WHITE }}>
          {weddingConfig.messages.scripture}
          <br />
          <span className="text-xs tracking-widest uppercase" style={{ letterSpacing: "0.15em", color: "rgba(255,255,255,0.85)" }}>{weddingConfig.messages.scriptureRef}</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-6">
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg,transparent,rgba(176,141,87,0.95))" }} />
          <p className="font-sans text-xs tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.4em" }}>
            {weddingConfig.messages.saveTheDate}
          </p>
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg,rgba(176,141,87,0.95),transparent)" }} />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="font-cormorant italic text-sm md:text-base mb-5 max-w-md" style={{ color: "rgba(255,255,255,0.92)" }}>
          {weddingConfig.messages.invite}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="w-full max-w-md mb-6 px-2">
          <div className="mb-4">
            <h2 className="mb-1" style={{ fontFamily: "'Great Vibes',cursive", fontSize: "clamp(2.6rem,9vw,4.2rem)", color: WHITE, lineHeight: 1.1, letterSpacing: "0.03em" }}>
              {weddingConfig.family.bride.fullName}
            </h2>
            <p className="font-cormorant italic text-xs md:text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
              {weddingConfig.family.bride.detail}
            </p>
          </div>
          <p className="font-cormorant italic text-xl mb-4" style={{ color: GOLD }}>with</p>
          <div>
            <h2 className="mb-1" style={{ fontFamily: "'Great Vibes',cursive", fontSize: "clamp(2.6rem,9vw,4.2rem)", color: WHITE, lineHeight: 1.1, letterSpacing: "0.03em" }}>
              {weddingConfig.family.groom.fullName}
            </h2>
            <p className="font-cormorant italic text-xs md:text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
              {weddingConfig.family.groom.detail}
            </p>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="font-playfair mt-2 tracking-widest"
          style={{ fontSize: "clamp(1.2rem,4vw,1.8rem)", color: GOLD, letterSpacing: "0.25em" }}>
          {weddingConfig.wedding.dotDate}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(0.85rem,3vw,1rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.95)", marginTop: "0.35rem" }}>
          {weddingConfig.wedding.dayOfWeek} &nbsp;·&nbsp; {weddingConfig.wedding.time}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
          className="mt-5 flex flex-col items-center gap-1">
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(0.8rem,2.8vw,0.9rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD }}>
            Celebrate with us at
          </p>
          <a href={weddingConfig.wedding.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-1 group">
            <MapPin size={12} style={{ color: GOLD }} />
            <span className="font-playfair text-base md:text-lg group-hover:underline" style={{ color: WHITE }}>
              {weddingConfig.wedding.venueFullName}
            </span>
          </a>
          <p className="font-sans text-xs mt-1" style={{ color: "rgba(255,255,255,0.8)" }}>
            {weddingConfig.wedding.venueAddress}
          </p>
          <a
            href={weddingConfig.wedding.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-200"
            style={{
              border: "1px solid rgba(176,141,87,0.75)",
              color: WHITE,
              letterSpacing: "0.2em",
              textDecoration: "none",
              background: "rgba(176,141,87,0.12)",
            }}
          >
            <MapPin size={11} />
            Get Directions
          </a>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2.2, repeat: Infinity }}
          className="mt-10" style={{ color: "rgba(176,141,87,0.85)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
