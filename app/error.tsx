"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#7A8471", color: "#FBF7EF", fontFamily: "sans-serif", flexDirection: "column", gap: 16 }}>
      <h1 style={{ fontSize: "2rem", margin: 0, color: "#B08D57" }}>Something went wrong</h1>
      <button onClick={reset} style={{ padding: "8px 24px", border: "1px solid #B08D57", background: "transparent", color: "#B08D57", borderRadius: 999, cursor: "pointer" }}>
        Try again
      </button>
      <a href="/" style={{ color: "#B08D57", textDecoration: "underline" }}>← Back to invitation</a>
    </div>
  );
}
