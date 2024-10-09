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

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "harumaki021の説明と、各種SNSへのリンクです",
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

export const SNSLINKS = [
  {
    NAME: "Misskey",
    HREF: "https://mi.harumakizaemon.net/@harumaki021",
    DESCRIPTION: "自分で運営しているMisskeyサーバー。メインで使っています",
  },
  {
    NAME: "Misskey (Resonite.love)",
    HREF: "https://misskey.resonite.love/@harumaki021",
    DESCRIPTION: "Resonite関係の話題等",
  },
  {
    NAME: "notestock",
    HREF: "https://notestock.osa-p.net/@harumaki021@mi.harumakizaemon.net/view",
    DESCRIPTION: "Misskeyの過去の投稿を記録してくれるサービス。大変お世話になってます",
  },
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/hrmkzaemon_vr",
    DESCRIPTION: "RePostばかりです",
  },
  {
    NAME: "Github",
    HREF: "https://github.com/harumaki021",
    DESCRIPTION: "ソースコード共有サイト",
  },
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/harumaki021",
    DESCRIPTION: "更新しません",
  },
  {
    NAME: "Twitch",
    HREF: "https://twitch.tv/harumaki021",
    DESCRIPTION: "ゲームと運動する様を配信します。フォローして❤"
  },
  {
    NAME: "YouTube",
    HREF: " http://www.youtube.com/@harumaki-zaemon",
    DESCRIPTION: "動画の置き場"
  },
];