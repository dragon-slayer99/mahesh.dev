// Dock.jsx
import { useRef, useState } from "react";
import "./Docks.css";

function DockItem({ icon, label, link, badgeCount }) {
  const ref = useRef(null);
  const [showLabel, setShowLabel] = useState(false);

  return (
    <a
      href={link}
      className="dock-item-link"
      target={link.startsWith("#") ? "_self" : "_blank"}
      rel={link.startsWith("#") ? "" : "noopener noreferrer"}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      <div ref={ref} className="dock-item">
        <div className="dock-item-icon">{icon}</div>
        {badgeCount !== undefined && badgeCount > 0 && (
          <span className="dock-badge">
            {badgeCount > 99 ? "99+" : badgeCount}
          </span>
        )}
        {showLabel && (
          <div className="dock-tooltip" role="tooltip">
            {label}
          </div>
        )}
      </div>
    </a>
  );
}

export default function Dock({
  items,
  className = "",
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  return (
    <div className="dock-wrapper" style={{ height: dockHeight }}>
      <div
        className={`dock-container ${className}`}
        style={{
          height: panelHeight,
          position: "relative",
          overflow: "hidden",
          borderRadius: "20px",
        }}
        role="toolbar"
        aria-label="Application dock"
      >
        <div className="dock-items">
          {items.map((item, index) => (
            <DockItem
              key={index}
              icon={item.icon}
              label={item.label}
              link={item.link}
              badgeCount={item.badgeCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
