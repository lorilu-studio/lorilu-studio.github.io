# 项目说明

这是一个基于 AstroPaper 的中文个人博客，使用 Astro 生成静态页面并发布到 GitHub Pages。内容包括技术文章、独立页面和实用网站收藏。

## 内容维护

- 文章放在 `src/content/posts/`，遵循现有 Markdown / MDX frontmatter 结构。
- 网站收藏放在 `src/content/sites/`，每个网站单独一个 Markdown 文件，填写标题、原始网址、分类、简短中文描述和收录日期。
- 导航或页面文案变更时，同步更新 `src/i18n/lang/zh-CN.ts`、`src/i18n/lang/en.ts` 和 `src/i18n/types.ts`。
- 保持现有 Astro、TypeScript 和 Tailwind 写法；避免顺手改动无关页面。

## 验证与发布

- 内容或页面改动后运行 `pnpm build`。
- 默认只在本地修改；只有用户明确要求时才提交或推送。

## Git 提交信息规范

提交信息遵循 Angular Commit Message 约定：

```text
<type>(<scope>): <subject>
```

- `scope` 可选，用于说明影响范围，例如 `posts`、`sites`、`layout`、`config`。
- `subject` 使用简洁、明确的祈使表达，不以句号结尾。
- 常用 `type`：`feat`（新功能）、`fix`（修复）、`docs`（文档）、`style`（样式且不改逻辑）、`refactor`（重构）、`perf`（性能）、`test`（测试）、`build`（构建）、`ci`（持续集成）、`chore`（维护）、`revert`（回退）。
- 有不兼容变更时，在提交正文或页脚写明 `BREAKING CHANGE: <说明>`。

示例：

```text
feat(sites): add useful websites collection
fix(layout): align header with page content
docs(readme): update setup instructions
```
