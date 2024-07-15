// Copyright 2023 the Deno authors. All rights reserved. MIT license.
import {
  ACTIVE_LINK_STYLES,
  LINK_STYLES,
  NAV_STYLES,
  SITE_BAR_STYLES,
  SITE_NAME,
} from "@/utils/constants.ts";
import IconBrandDiscord from "tabler_icons_tsx/brand-discord.tsx";
import IconRss from "tabler_icons_tsx/rss.tsx";

function MadeWithFreshBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="197" height="37" fill="none">
      <title>Made with Fresh</title>
      <rect width="196" height="36" x="0.5" y="0.5" fill="#fff" rx="5.5"></rect>
      {/* ... (rest of the SVG content) */}
    </svg>
  );
}

export interface FooterProps {
  // ... (previous FooterProps)
}

export default function Footer(props: FooterProps) {
  return (
    <footer className={`${SITE_BAR_STYLES} flex-col md:flex-row mt-8`}>
      <p>© {SITE_NAME}</p>
      <nav className={NAV_STYLES}>
        <a
          href="https://tiktok.com/@atl5d"
          className={props.url.pathname === "/blog"
            ? ACTIVE_LINK_STYLES
            : LINK_STYLES}
        >
          TikTok
        </a>
        <a
          href="https://discord.gg/HkZ4pazQFb"
          target="_blank"
          aria-label="ATL5D Discord"
          className={LINK_STYLES}
        >
          <IconBrandDiscord className="h-6 w-6" />
        </a>
      </nav>
    </footer>
  );
}
