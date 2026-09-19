/**
 * EventSphere — Avatar Component
 * User/vendor avatar with fallback initials.
 */
import React from "react";

function getInitials(name = "") {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

const COLORS = ["#C9A84C", "#E8A0B4", "#5DADE2", "#2ECC71", "#F39C12", "#9B59B6"];

function colorFor(name = "") {
  let hash = 0;
  for (const c of name) hash = (hash * 31 + c.charCodeAt(0)) & 0xffffffff;
  return COLORS[Math.abs(hash) % COLORS.length];
}

export default function Avatar({ name = "", src = "", size = 40, style = {} }) {
  const color = colorFor(name);
  const initials = getInitials(name);
  const fontSize = size * 0.38;

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={{
          width: size, height: size, borderRadius: "50%",
          objectFit: "cover", border: `2px solid ${color}`,
          ...style,
        }}
      />
    );
  }

  return (
    <div
      aria-label={name}
      style={{
        width: size, height: size, borderRadius: "50%",
        background: `${color}22`, border: `2px solid ${color}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color, fontSize, fontWeight: 700, flexShrink: 0,
        ...style,
      }}
    >
      {initials || "?"}
    </div>
  );
}
