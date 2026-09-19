/**
 * EventSphere — Card Component
 * Base card container with consistent theme styling.
 */
import React from "react";

export default function Card({
  children,
  onClick,
  hover = !!onClick,
  padding = "20px",
  style = {},
  className = "",
}) {
  const base = {
    background: "linear-gradient(135deg,#2D1F3D 0%,#3D2F50 100%)",
    border: "1px solid #3D2F50",
    borderRadius: 14,
    padding,
    transition: hover ? "transform 0.2s, box-shadow 0.2s, border-color 0.2s" : undefined,
    cursor: onClick ? "pointer" : "default",
    ...style,
  };

  const hoverIn = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform    = "translateY(-3px)";
    e.currentTarget.style.boxShadow    = "0 12px 32px rgba(0,0,0,0.35)";
    e.currentTarget.style.borderColor  = "#C9A84C66";
  };
  const hoverOut = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform    = "";
    e.currentTarget.style.boxShadow    = "";
    e.currentTarget.style.borderColor  = "#3D2F50";
  };

  return (
    <div
      className={className}
      style={base}
      onClick={onClick}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      {children}
    </div>
  );
}
