/**
 * EventSphere — LoadingSpinner Component
 * Reusable animated spinner with optional label.
 */
import React from "react";

const GOLD = "#C9A84C";

export default function LoadingSpinner({ size = 40, color = GOLD, label = "" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        style={{ animation: "spin 0.9s linear infinite" }}
        aria-label="Loading"
        role="status"
      >
        <circle
          cx="25" cy="25" r="20"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray="80 40"
          strokeLinecap="round"
        />
      </svg>
      {label && (
        <span style={{ color, fontSize: 14, fontWeight: 500, letterSpacing: "0.5px" }}>
          {label}
        </span>
      )}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
