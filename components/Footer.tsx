// Copyright 2023-2024 the Deno authors. All rights reserved. MIT license.
import { SITE_NAME } from "@/utils/constants.ts";
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

<<<<<<< HEAD
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
=======
export default function Footer() {
  return (
    <footer class="site-bar-styles flex-col md:flex-row mt-8">
      <p>© {SITE_NAME}</p>
      <nav class="nav-styles">
        <a
          href="/blog"
          class="link-styles data-[current]:!text-black data-[current]:dark:!text-white"
        >
          Blog
        </a>
        <a href="/feed" aria-label="Deno Hunt RSS Feed" class="link-styles">
          <IconRss class="size-6" />
        </a>
        <a
          href="https://discord.gg/deno"
          target="_blank"
          aria-label="Deno SaaSKit on Discord"
          class="link-styles"
        >
          <IconBrandDiscord class="size-6" />
>>>>>>> 99a00c2113718e4ee86cf4614bc68e37bcc9ea81
        </a>
        <a
          href="https://discord.gg/HkZ4pazQFb"
          target="_blank"
<<<<<<< HEAD
          aria-label="ATL5D Discord"
          className={LINK_STYLES}
        >
          <IconBrandDiscord className="h-6 w-6" />
=======
          aria-label="Deno SaaSKit repo on GitHub"
          class="link-styles"
        >
          <IconBrandGithub class="size-6" />
        </a>
        <a href="https://fresh.deno.dev">
          <MadeWithFreshBadge />
>>>>>>> 99a00c2113718e4ee86cf4614bc68e37bcc9ea81
        </a>
      </nav>
    </footer>
  );
}
