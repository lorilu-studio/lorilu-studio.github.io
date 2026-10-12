---
title: "技能详解系列：awesome-codex-ppt-skills，按交付需求寻找 AI 幻灯片工具"
pubDatetime: 2026-10-12T22:35:00+08:00
description: "读懂 awesome-codex-ppt-skills 的 209 项工具分类与实测结果，按可编辑 PPTX、网页演示和图片型幻灯片选择交付方式。"
tags:
  - 技能说明书
  - AI Agent
  - PPT
---

让 AI 做一份幻灯片，最先要说清的可能不是风格，而是**最后要交给谁修改**。同样是一份看起来不错的演示稿，有的是能在 PowerPoint 里改文字和图表的 PPTX，有的每页只是一张图片，还有的需要在浏览器中展示。选错形式，修改时就得重做。

![根据后续编辑需求选择可编辑 PPTX、网页幻灯片或图片型幻灯片](/images/20261012-awesome-codex-ppt-skills-guide/交付形式-选择示意.svg)

*先想清楚谁来修改、在哪里展示，再挑生成工具。图为本文制作的选择示意，并非工具实测截图。*

[awesome-codex-ppt-skills](https://github.com/zhuyansen/awesome-codex-ppt-skills) 是 zhuyansen 整理的一份开源清单，收录了 209 个供 Codex、Claude Code 等 AI Agent 使用的幻灯片技能和工具。它本身不是生成 PPT 的 Skill，而是帮你找到适合任务的项目。原版按六种用途分类，并给出项目说明与安全评级。

![原版清单中六类 AI 幻灯片项目的数量：可编辑 PPTX 83、网页幻灯片 57、文档转幻灯片 29、框架与工具包 20、商务咨询 13、图片型 7](/images/20261012-awesome-codex-ppt-skills-guide/六类项目-数量图.svg)

*数量取自[原版仓库的分类统计](https://github.com/zhuyansen/awesome-codex-ppt-skills#what-these-tools-make)，是项目数量，不代表质量排名。*

## 先决定交付物，再挑工具

如果同事接手后还要改标题、数据和图表，应优先查看**可编辑 PPTX**。如果只是自己在浏览器里演讲，网页幻灯片也可能合适。如果画面冲击力排第一位，图片型幻灯片值得看，但改一个字都可能需要重新生成那一页。

原作者还用同一份任务试跑了清单中的 31 个项目，其中 27 个产生成果。他给出的推荐也按交付物区分：可编辑 PowerPoint 看 [`ppt-master`](https://github.com/zhuyansen/awesome-codex-ppt-skills#which-one-to-install)，浏览器演示看 `guizang-ppt-skill`，重视画面效果看 `rw-consulting-ppt`。这些结果比只看示例封面更有参考价值，因为原版同时记录了**编辑程度、内容表现和交付前需要多少返工**。[测试说明与结果](https://github.com/zhuyansen/awesome-codex-ppt-skills#-tested-end-to-end)

不过，27 个成功案例不等于 209 个项目都经过了同样的实测。清单里的安全评级来自 [Agent Skills Hub](https://agentskillshub.top/best/ppt-presentation/)，也不能代替安装前查看目标项目的说明、依赖和实际运行方式。

## 日语版把清单做成了更容易浏览的入口

[StudioYebisu 发布的日语版](https://github.com/studio-yebisu/awesome-codex-ppt-skills-ja)沿用了原版的分类与比较结果，为项目编写日语简介，并做了一个[带图片的网站](https://studio-yebisu.github.io/awesome-codex-ppt-skills-ja/)，方便按用途浏览。它在 [X 博文](https://x.com/studio_yebisu/status/2109526562198724876)中还特别提醒：使用这些项目制作日语幻灯片时，要向 AI 明确指定日文字体。

![zhuyansen 的原版清单与实测，经 StudioYebisu 翻译整理后形成非官方日语版网站](/images/20261012-awesome-codex-ppt-skills-guide/原版与日语版-关系图.svg)

*原版负责清单与实测；日语版沿用结果，增加日语说明和图文浏览入口。关系根据[日语版仓库说明](https://github.com/studio-yebisu/awesome-codex-ppt-skills-ja)绘制。*

这里需要分清贡献：**zhuyansen 建立清单并做了那轮实测；StudioYebisu 制作的是非官方日语导览。**日语版注明，它整理的是 2026 年 10 月 11 日的原版数据，没有与原版自动同步。想查最近新增或变更的项目，应回到原版清单和具体项目仓库核对。

## 我会怎样使用这份清单

接到制作任务时，我会先写下三件事：演示给谁看、最终要交什么格式、交付后谁来修改。然后只打开对应类别，挑两三个候选项目比较，重点看它们的实际输出、编辑方式和运行条件。

例如，“给同事一份下周还要更新数据的汇报”与“明天在浏览器里讲一场视觉型分享”，即使主题相同，也不该默认使用同一套生成方法。这份清单最有用的地方，正是把“做 PPT”拆成了这些不同的交付需求。

## 资料来源

- [zhuyansen 的原版清单与实测](https://github.com/zhuyansen/awesome-codex-ppt-skills)
- [StudioYebisu 的非官方日语版](https://github.com/studio-yebisu/awesome-codex-ppt-skills-ja)
- [StudioYebisu 的 X 博文](https://x.com/studio_yebisu/status/2109526562198724876)
