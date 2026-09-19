/**
 * EventSphere — Modal Component
 * Accessible overlay modal with backdrop dismiss.
 */
import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children, maxWidth = 520 }) {
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(10,0,20,0.75)",
        backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg,#2D1F3D,#3D2F50)",
          border: "1px solid #C9A84C44",
          borderRadius: 18,
          padding: "28px 28px 24px",
          width: "100%",
          maxWidth,
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{ color: "#F9F5FF", fontSize: 20, fontWeight: 700, margin: 0 }}>{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: "#3D2F50", border: "none", borderRadius: 8,
              color: "#7B6890", cursor: "pointer", fontSize: 20,
              width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
