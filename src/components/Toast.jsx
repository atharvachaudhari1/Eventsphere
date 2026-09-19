/**
 * EventSphere — Toast Notification Component
 * Lightweight toast notifications (success, error, info, warning).
 */
import React, { useEffect } from "react";

const STYLES = {
  success: { bg: "#1a3a1a", border: "#2ECC71", icon: "✅" },
  error:   { bg: "#3a1a1a", border: "#E74C3C", icon: "❌" },
  warning: { bg: "#3a2a0a", border: "#F39C12", icon: "⚠️" },
  info:    { bg: "#1a2a3a", border: "#5DADE2", icon: "ℹ️" },
};

export default function Toast({ message, type = "info", onClose, duration = 3500 }) {
  const s = STYLES[type] ?? STYLES.info;

  useEffect(() => {
    if (!onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div
      role="alert"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 18px",
        borderRadius: 10,
        background: s.bg,
        border: `1.5px solid ${s.border}`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        color: "#F9F5FF",
        fontSize: 14,
        fontWeight: 500,
        maxWidth: 360,
        animation: "fadeIn 0.25s ease",
      }}
    >
      <span style={{ fontSize: 18 }}>{s.icon}</span>
      <span style={{ flex: 1 }}>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#7B6890", fontSize: 18, lineHeight: 1, padding: 0,
          }}
          aria-label="Dismiss"
        >
          ×
        </button>
      )}
    </div>
  );
}
