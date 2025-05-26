import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IndiaMap } from "../assets/in.svg";

interface InteractiveIndiaMapProps {
  onStateHover?: (state: string | null) => void;
}

const InteractiveIndiaMap: React.FC<InteractiveIndiaMapProps> = ({ onStateHover }) => {
  const svgRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const svgContainer = svgRef.current;
    if (!svgContainer) return;
    const svg = svgContainer.querySelector("svg");
    if (!svg) return;
    const paths = svg.querySelectorAll("path[id]");
    paths.forEach((path) => {
      const stateId = path.id;
      const svgPath = path as SVGPathElement;
      svgPath.style.cursor = "pointer";
      svgPath.style.fill = "#b0bec5";
      svgPath.addEventListener("mouseenter", () => {
        setHovered(stateId);
        svgPath.style.fill = "#1976d2";
        if (onStateHover) onStateHover(stateId.replace(/-/g, '-'));
      });
      svgPath.addEventListener("mouseleave", () => {
        setHovered(null);
        svgPath.style.fill = "#b0bec5";
        if (onStateHover) onStateHover(null);
      });
      svgPath.addEventListener("click", () => {
        navigate(`/state/${stateId}`);
      });
    });
    // Cleanup
    return () => {
      paths.forEach((path) => {
        path.replaceWith(path.cloneNode(true));
      });
    };
  }, [navigate, onStateHover]);

  return (
    <div style={{ width: 400, maxWidth: "98vw", margin: "0 auto" }}>
      <div ref={svgRef}>
        <IndiaMap />
      </div>
      <div style={{ textAlign: "center", marginTop: 8 }}>
        {hovered ? <b>{hovered.replace(/-/g, " ").toUpperCase()}</b> : "Hover over a state"}
      </div>
    </div>
  );
};

export default InteractiveIndiaMap; 