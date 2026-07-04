"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";

const SAGE     = "#4B5545";
const SAGE_DIM = "rgba(75,85,69,0.85)";

function TimelineDot() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
      <circle cx="7" cy="7" r="5"   stroke={SAGE} strokeWidth="1.5" fill="rgba(95,106,86,0.15)" />
      <circle cx="7" cy="7" r="2.5" fill={SAGE} />
    </svg>
  );
}

export function EventSchedule() {
  return (
    <section style={{ background: "linear-gradient(180deg,#FBF7EF 0%,#EAD9D5 100%)", textAlign: "center" }}>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ padding: "3.5rem 1.5rem 2.5rem" }}
      >
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(1.8rem,5vw,2.6rem)", color: SAGE, margin: 0 }}>
          Order of Ceremony
        </h2>
      </motion.div>

      <div style={{ maxWidth: "560px", margin: "0 auto", position: "relative", textAlign: "left", padding: "0 1.5rem" }}>
        <div style={{
          position: "absolute", left: "calc(1.5rem + 84px)", top: 0, bottom: 0, width: "1px",
          background: `linear-gradient(to bottom,transparent,rgba(95,106,86,0.4) 10%,rgba(95,106,86,0.25) 50%,rgba(95,106,86,0.4) 90%,transparent)`,
          pointerEvents: "none",
        }} />

        {weddingConfig.events.map((event, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ display: "flex", alignItems: "center", gap: "1.2rem", paddingBottom: i < weddingConfig.events.length - 1 ? "1.8rem" : "2rem", position: "relative" }}
          >
            <div style={{ width: "72px", flexShrink: 0, textAlign: "right" }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 600, fontSize: "clamp(0.78rem,2.8vw,0.9rem)", color: SAGE, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                {event.time}
              </span>
            </div>
            <TimelineDot />
            <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 500, fontSize: "clamp(0.92rem,3.2vw,1.05rem)", color: SAGE, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {event.title}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ padding: "1rem 1.5rem 3.5rem", textAlign: "center" }}
      >
        <div style={{ width: "60px", height: "1px", background: "rgba(95,106,86,0.4)", margin: "0 auto 1.4rem" }} />

        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(0.75rem,2.6vw,0.88rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: SAGE_DIM, margin: "0 0 0.3rem" }}>
          Venue
        </p>
        <a href={weddingConfig.wedding.googleMapsUrl} target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'Playfair Display',serif", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(1rem,3.5vw,1.25rem)", color: SAGE, textDecoration: "none" }}>
          {weddingConfig.wedding.venueFullName}
        </a>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(0.78rem,2.6vw,0.9rem)", color: "rgba(75,85,69,0.75)", margin: "0.3rem 0 0", letterSpacing: "0.05em" }}>
          {weddingConfig.wedding.venueAddress}
        </p>
        <a
          href={weddingConfig.wedding.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "1.1rem",
            padding: "7px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(95,106,86,0.5)",
            color: SAGE,
            fontFamily: "'Montserrat','Helvetica Neue',sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textDecoration: "none",
            background: "rgba(95,106,86,0.08)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          Get Directions
        </a>
      </motion.div>
    </section>
  );
}
