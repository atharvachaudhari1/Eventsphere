/**
 * EventSphere — Button Component
 * Themed button with variants: primary, secondary, ghost, danger.
 */
import React from "react";

const VARIANTS = {
  primary:   { bg: "linear-gradient(135deg,#C9A84C,#F0D080)", color: "#1A1025",  border: "none" },
  secondary: { bg: "#2D1F3D", color: "#C9A84C",  border: "1.5px solid #C9A84C55" },
  ghost:     { bg: "transparent", color: "#7B6890", border: "1.5px solid #3D2F50" },
  danger:    { bg: "#3a1a1a",  color: "#E74C3C",  border: "1.5px solid #E74C3C55" },
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon = null,
  onClick,
  style = {},
  ...props
}) {
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const padding = size === "sm" ? "6px 14px" : size === "lg" ? "14px 28px" : "10px 20px";
  const fontSize = size === "sm" ? 13 : size === "lg" ? 16 : 14;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding,
        fontSize,
        fontWeight: 600,
        borderRadius: 10,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "opacity 0.2s, transform 0.15s, filter 0.2s",
        outline: "none",
        fontFamily: "inherit",
        ...v,
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled && !loading) e.currentTarget.style.filter = "brightness(1.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; }}
      onMouseDown={(e)  => { if (!disabled && !loading) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e)    => { e.currentTarget.style.transform = "scale(1)"; }}
      {...props}
    >
      {loading ? "⏳" : icon}
      {children}
    </button>
  );
}
