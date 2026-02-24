import { SITE } from "./consts";

export const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/hong9",
    linkTitle: `${SITE.title} on GitHub`,
    icon: "github",
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/gongpyung",
    linkTitle: `${SITE.title} on X`,
    icon: "twitter",
    active: false,
  },
  {
    name: "BlueSky",
    href: "https://bsky.app/profile/gongpyung.social",
    linkTitle: `${SITE.title} on BlueSky`,
    icon: "bluesky",
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: "linkedin",
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:hello@gongpyung.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: "mail",
    active: false,
  },
] as const;

export const PROJECTS = [
  {
    name: "Gongpyung Homepage",
    description: "Personal homepage and blog built with Astro.",
    href: "/",
    status: "active",
    featured: true,
  },
  {
    name: "Starter Blog",
    description: "Initial publishing setup and baseline post structure.",
    href: "/posts/",
    status: "active",
    featured: false,
  },
  {
    name: "Project Portfolio",
    description: "Project showcase section planned for future updates.",
    href: "/about/",
    status: "planned",
    featured: false,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: "twitter",
  },
  {
    name: "BlueSky",
    href: "https://bsky.app/intent/compose?text=",
    linkTitle: `Share this post on BlueSky`,
    icon: "bluesky",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
    icon: "linkedin",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: "whatsapp",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: "facebook",
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: "telegram",
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: "pinterest",
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: "mail",
  },
] as const;
