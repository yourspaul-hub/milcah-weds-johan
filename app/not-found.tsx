export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#7A8471", color: "#FBF7EF", fontFamily: "sans-serif", flexDirection: "column", gap: 16 }}>
      <h1 style={{ fontSize: "4rem", margin: 0, color: "#B08D57" }}>404</h1>
      <p style={{ margin: 0, opacity: 0.7 }}>Page not found</p>
      <a href="/" style={{ color: "#B08D57", textDecoration: "underline", marginTop: 8 }}>← Back to invitation</a>
    </div>
  );
}
