import React from "https://cdn.skypack.dev/react";

interface PremiumBadgeProps {
  className?: string; // Corrected the prop name to "className"
}

export function PremiumBadge(props: PremiumBadgeProps) {
  return (
    <span
      role="img"
      aria-label="ATL5D Vote Premium"
      className={props.className} // Corrected the prop name to "className"
    >
      🏢
    </span>
  );
}
