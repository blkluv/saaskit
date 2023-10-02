import React from 'react';

interface PremiumBadgeProps {
  class?: string;
}

export function PremiumBadge(props: PremiumBadgeProps) {
  return (
    <span
      role="img"
      aria-label="Arvrtise Real Estate Premium" // Added aria-label for accessibility
      className={props.class}
    >
      🏢
    </span>
  );
}
