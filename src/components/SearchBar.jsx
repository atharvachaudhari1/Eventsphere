/**
 * EventSphere — SearchBar Component
 * Styled search input with clear button and debounce-ready.
 */
import React, { useRef } from "react";

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search...",
  autoFocus = false,
  style = {},
}) {
  const inputRef = useRef(null);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        ...style,
      }}
    >
      <span
        style={{
          position: "absolute", left: 12,
          fontSize: 16, color: "#7B6890", pointerEvents: "none",
        }}
      >
        🔍
      </span>
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        style={{
          width: "100%",
          padding: "10px 36px 10px 38px",
          background: "#2D1F3D",
          border: "1.5px solid #3D2F50",
          borderRadius: 10,
          color: "#F9F5FF",
          fontSize: 14,
          outline: "none",
          fontFamily: "inherit",
          transition: "border-color 0.2s",
        }}
        onFocus={(e)  => { e.target.style.borderColor = "#C9A84C"; }}
        onBlur={(e)   => { e.target.style.borderColor = "#3D2F50"; }}
      />
      {value && (
        <button
          onClick={() => { onChange?.(""); inputRef.current?.focus(); }}
          aria-label="Clear search"
          style={{
            position: "absolute", right: 8,
            background: "none", border: "none",
            color: "#7B6890", cursor: "pointer", fontSize: 16,
            display: "flex", alignItems: "center",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
