# Lorilu Studio

Lorilu Studio 是一个中文个人主页与技术博客，记录项目实践、技术笔记和持续学习。网站使用 AstroPaper 构建，以静态页面发布在 GitHub Pages。

**线上站点：** [lorilu-studio.github.io](https://lorilu-studio.github.io/) · **源码：** [GitHub 仓库](https://github.com/lorilu-studio/lorilu-studio.github.io)

## 网站功能

- **静态生成：** 使用 Astro 预渲染页面，部署后无需常驻服务器。
- **文章与发现：** 支持 Markdown、MDX、标签、归档、站内搜索和 RSS 订阅。
- **阅读体验：** 提供浅色与深色主题、响应式布局、代码高亮和基于 Markdown 标题的目录支持。
- **分享预览：** 支持 Open Graph 与 X/Twitter 卡片，并可为文章生成分享图片。
- **搜索引擎基础：** 输出 canonical、sitemap 与 robots.txt，文章可单独设置标题、摘要和规范链接。

## 技术栈

- [Astro](https://astro.build/) 与 [AstroPaper](https://github.com/satnaing/astro-paper)
- TypeScript、Tailwind CSS、Markdown / MDX
- Pagefind 站内搜索
- GitHub Actions 构建并部署到 GitHub Pages

## 本地运行

需要 Node.js `22.12.0` 或更高版本，以及 pnpm。

```sh
pnpm install
pnpm dev
```

开发服务器启动后，终端会显示本地访问地址。生成生产版本并本地预览：

```sh
pnpm build
pnpm preview
```

`pnpm build` 会先运行 Astro 类型与内容检查，再生成静态站点和 Pagefind 搜索索引。生成文件位于 `dist/`。

## 编写文章

在 `src/content/posts/` 新建 `.md` 或 `.mdx` 文件。文件名会参与生成文章 URL；建议使用简短、稳定、能概括主题的英文 slug。每篇文章需要标题、发布时间和描述：

```md
---
title: "文章标题"
pubDatetime: 2026-09-29T09:00:00+08:00
description: "用一句准确、具体的话概括文章内容。"
tags:
  - Astro
  - 技术实践
---

从正文开始写作。使用清晰的小标题组织内容，并为代码示例、图片和外部引用提供必要上下文。
```

可选字段包括 `draft`（草稿）、`featured`（首页精选）、`modDatetime`（修改时间）、`ogImage`（分享图）和 `canonicalURL`（规范链接）。文章字段定义见 `src/content.config.ts`。

## SEO 配置

### 站点级信息

在 `astro-paper.config.ts` 维护站点名称、简介、作者、公开网址、语言、时区和社交账号。这些信息会用于页面元数据、RSS、站点地图和分享预览。部署到其他域名时，先更新 `site.url`。

如需验证 Google Search Console，可在 `site.googleVerification` 配置验证码；也支持在构建环境提供 `PUBLIC_GOOGLE_SITE_VERIFICATION`。

### 文章级信息

- 为每篇文章写独立且准确的 `title` 与 `description`，让搜索结果和分享卡片能清楚表达页面主题。
- 用有层次的 Markdown 标题组织正文；标签用于站内归类，不要堆叠不相关关键词。
- 只有当文章确实对应其他首选地址时，才设置 `canonicalURL`。
- 未指定 `ogImage` 时，主题可按配置为文章生成 Open Graph 分享图。

站点地图由 Astro Sitemap 集成生成；`robots.txt` 会声明站点地图地址。可在部署后检查 `/sitemap-index.xml`、`/robots.txt` 和 `/rss.xml` 是否可访问。

## 发布

将更改推送到 `main` 会触发 `.github/workflows/deploy.yml`：GitHub Actions 安装依赖、构建站点并发布到 GitHub Pages。也可以在仓库的 **Actions** 页面手动运行 `Deploy to GitHub Pages` 工作流。

## 项目结构

```text
src/
├── content/
│   ├── pages/       # 关于等独立页面
│   └── posts/       # Markdown / MDX 文章
├── i18n/lang/       # 界面文案
├── layouts/         # 页面与文章布局
└── pages/           # Astro 路由
astro-paper.config.ts # 站点、文章与功能配置
astro.config.ts       # Astro、Markdown、字体与 sitemap 配置
.github/workflows/   # GitHub Actions 发布流程
```

## 常用命令

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 检查并构建站点与搜索索引 |
| `pnpm preview` | 预览生产构建 |
| `pnpm lint` | 运行 ESLint |
| `pnpm format:check` | 检查 Prettier 格式 |

## 致谢与许可

本站基于 [AstroPaper](https://github.com/satnaing/astro-paper) 修改。模板采用 MIT License，许可文本见 [`LICENSE`](LICENSE)。
