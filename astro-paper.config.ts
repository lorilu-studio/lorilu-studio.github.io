import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://lorilu-studio.github.io",
    title: "lorilu studio 的博客",
    description: "lorilu studio 的个人主页与技术博客。",
    author: "lorilu studio",
    profile: "https://github.com/lorilu-studio",
    googleVerification: "NczojMjqUBQbs4QaKLt6sflAbsm-mjM-hapyLumMOyQ",
    ogImage: "og.png",
    lang: "zh-CN",
    timezone: "Asia/Taipei",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 5,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [{ name: "github", url: "https://github.com/lorilu-studio" }],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
