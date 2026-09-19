/**
 * EventSphere — VendorCard Component
 * Displays a vendor's key info with rating, price tier, and CTA.
 */
import React from "react";
import StarRating from "./StarRating.jsx";
import Badge from "./Badge.jsx";
import { PRICE_TIERS } from "../constants.js";

export default function VendorCard({ vendor, onSelect }) {
  const tier = PRICE_TIERS[vendor.price] ?? PRICE_TIERS.medium;

  return (
    <div
      onClick={() => onSelect?.(vendor)}
      style={{
        background: "linear-gradient(135deg, #2D1F3D 0%, #3D2F50 100%)",
        border: "1px solid #3D2F50",
        borderRadius: 14,
        padding: "18px 20px",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.35)";
        e.currentTarget.style.borderColor = "#C9A84C66";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "#3D2F50";
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 32 }}>{vendor.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span style={{ color: "#F9F5FF", fontWeight: 700, fontSize: 15 }}>
              {vendor.name}
            </span>
            {vendor.verified && <Badge variant="verified" />}
          </div>
          <div style={{ color: "#7B6890", fontSize: 12, marginTop: 2 }}>
            📍 {vendor.city} · {vendor.speciality}
          </div>
        </div>
      </div>

      {/* Rating + Price */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <StarRating rating={vendor.rating} />
        <span style={{ fontSize: 12, color: tier.color, fontWeight: 600 }}>
          {tier.icon} {tier.label}
        </span>
      </div>

      {/* Description */}
      {vendor.description && (
        <p style={{ color: "#7B6890", fontSize: 13, margin: 0, lineHeight: 1.5 }}>
          {vendor.description}
        </p>
      )}

      {/* Reviews + Min Budget */}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#7B6890" }}>
        <span>💬 {vendor.reviews} reviews</span>
        {vendor.minBudget && (
          <span>From ₹{vendor.minBudget.toLocaleString("en-IN")}</span>
        )}
      </div>
    </div>
  );
}
