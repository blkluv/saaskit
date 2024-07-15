<<<<<<< HEAD
import React from "https://cdn.skypack.dev/react";

=======
// Copyright 2023-2024 the Deno authors. All rights reserved. MIT license.
>>>>>>> 99a00c2113718e4ee86cf4614bc68e37bcc9ea81
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
