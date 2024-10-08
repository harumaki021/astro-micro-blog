import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "harumakizaemon.net",
  DESCRIPTION: "harumaki021のWebサイト",
  EMAIL: "test@example.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "harumaki021のWebサイトです",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "harumaki021のブログです。VRなど興味のあることについて書いています",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "harumaki021がこれまで作ったりしたものたちの置き場です",
};

export const SOCIALS: Socials = [
  {
    NAME: "Misskey",
    HREF: "https://mi.harumakizaemon.net/@harumaki021",
  },
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/hrmkzaemon_vr",
  },
];
