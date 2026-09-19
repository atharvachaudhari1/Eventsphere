/**
 * EventSphere — Chip / Tag Component
 * Small selectable/dismissable label chips.
 */
import React from "react";

export default function Chip({
  label,
  icon = "",
  selected = false,
  onSelect,
  onRemove,
  style = {},
}) {
  return (
    <span
      onClick={() => onSelect?.()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "5px 12px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 500,
        cursor: onSelect ? "pointer" : "default",
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
        background: selected ? "#C9A84C22" : "#2D1F3D",
        border: `1.5px solid ${selected ? "#C9A84C" : "#3D2F50"}`,
        color: selected ? "#F0D080" : "#7B6890",
        userSelect: "none",
        ...style,
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          aria-label={`Remove ${label}`}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "inherit", padding: 0, fontSize: 14, lineHeight: 1,
            display: "flex", alignItems: "center",
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
