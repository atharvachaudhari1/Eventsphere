/**
 * EventSphere — BudgetBar Component
 * Visual progress bar for budget tracking.
 */
import React from "react";
import { budgetPercent, budgetStatus, formatINR } from "../utils.js";

export default function BudgetBar({ spent = 0, total = 0, showLabels = true }) {
  const pct    = budgetPercent(spent, total);
  const status = budgetStatus(pct);

  return (
    <div style={{ width: "100%" }}>
      {showLabels && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: "#7B6890" }}>
            Spent: <strong style={{ color: status.color }}>{formatINR(spent)}</strong>
          </span>
          <span style={{ fontSize: 13, color: "#7B6890" }}>
            Budget: <strong style={{ color: "#F9F5FF" }}>{formatINR(total)}</strong>
          </span>
        </div>
      )}
      <div
        style={{
          height: 10,
          borderRadius: 999,
          background: "#2D1F3D",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            borderRadius: 999,
            background: status.color,
            transition: "width 0.6s ease",
          }}
        />
      </div>
      {showLabels && (
        <div style={{ textAlign: "right", marginTop: 4, fontSize: 12, color: status.color }}>
          {pct}% — {status.label}
        </div>
      )}
    </div>
  );
}
