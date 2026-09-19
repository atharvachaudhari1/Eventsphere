/**
 * EventSphere — Badge Component
 * Compact status/label badges.
 */
import React from "react";

const VARIANTS = {
  verified: { bg: "#1a3a1a", color: "#2ECC71", label: "✓ Verified" },
  premium:  { bg: "#3a2a0a", color: "#C9A84C", label: "★ Premium"  },
  new:      { bg: "#1a2a3a", color: "#5DADE2", label: "✦ New"      },
  popular:  { bg: "#3a1a2a", color: "#E8A0B4", label: "♥ Popular"  },
};

export default function Badge({ variant = "verified", custom, style = {} }) {
  const v = custom ?? VARIANTS[variant] ?? VARIANTS.verified;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 10px",
        borderRadius: 999,
        background: v.bg,
        color: v.color,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.5px",
        border: `1px solid ${v.color}33`,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {v.label}
    </span>
  );
}
