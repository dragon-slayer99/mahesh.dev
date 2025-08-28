// Badge.jsx
import React from "react";
 import "./Badge.css";

export default function Badge({ icon, label }) {
  return (
    <div className="badge">
      {icon}
      <span>{label}</span>
    </div>
  );
}
