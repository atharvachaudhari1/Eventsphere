/**
 * EventSphere — StarRating Component
 * Displays a star rating out of 5.
 */
import React from "react";

export default function StarRating({ rating = 0, max = 5, size = 16 }) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = max - full - half;

  const star = (type, i) => (
    <span key={i} style={{ fontSize: size, lineHeight: 1 }}>
      {type === "full"  ? "★" : type === "half" ? "⯨" : "☆"}
    </span>
  );

  return (
    <span style={{ color: "#C9A84C", display: "inline-flex", gap: 1, alignItems: "center" }}>
      {Array.from({ length: full  }, (_, i) => star("full",  i))}
      {Array.from({ length: half  }, (_, i) => star("half",  i))}
      {Array.from({ length: empty }, (_, i) => star("empty", i))}
      <span style={{ color: "#7B6890", fontSize: size * 0.85, marginLeft: 4 }}>
        {rating.toFixed(1)}
      </span>
    </span>
  );
}
