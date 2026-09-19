/**
 * EventSphere — Tabs Component
 * Accessible horizontal tab navigation.
 */
import React from "react";

export default function Tabs({ tabs = [], active, onChange }) {
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: 4,
        background: "#2D1F3D",
        borderRadius: 12,
        padding: 4,
        overflowX: "auto",
        flexWrap: "nowrap",
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange?.(tab.key)}
            style={{
              flex: "0 0 auto",
              padding: "8px 16px",
              borderRadius: 9,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "inherit",
              transition: "background 0.2s, color 0.2s",
              background: isActive ? "linear-gradient(135deg,#C9A84C,#F0D080)" : "transparent",
              color: isActive ? "#1A1025" : "#7B6890",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
