---
title: "engineering-review-board 技能详解"
pubDatetime: 2026-10-08T10:00:00+08:00
description: "用一篇文章讲清 engineering-review-board 是什么、适合哪些代码检查任务，以及怎样让 Agent 做一次有证据、有范围的审查。"
tags:
  - 技能说明书
  - AI Agent
---

把一个项目交给 AI，问它「这份代码有什么问题」，常常会得到一长串建议。有些说得很像那么回事，点开文件却找不到它描述的行为。还有些建议本身没错，只是这个项目根本用不上。

我读了 [engineering-review-board](https://github.com/nledford/engineering-review-board) 的说明和几份核心技能文件。它想解决的是 Agent **怎么检查、凭什么判断、怎样交代没查到的部分**。如果你第一次接触 Agent Skill，可以先把它理解成给 Agent 阅读的工作说明。Agent 负责打开项目、查代码和写报告，Skill 告诉它做这类工作时应该走哪些步骤。

![engineering-review-board 仓库主要技能与证据核验规则总览](/images/20261008-engineering-review-board-skill-guide/04-repository-skills-index.png)

## 它到底是什么

这个仓库收录了多份 `SKILL.md`，分别用于代码审查、架构评估、技术债盘点、安全审查、测试策略等任务。每份文件写明适用场景、工作方法和交付要求。它们可以配合使用，但没有一个按下去就把整套检查自动跑完的总按钮。[仓库 README](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/README.md) 对它的定位是可复用、与具体项目无关的技能来源。

这个区别会影响你的用法。想检查一次 PR，就从 [`code-review`](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/code-review/SKILL.md) 入手。想知道老项目为什么越改越费劲，更合适的是 [`technical-debt-audit`](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/technical-debt-audit/SKILL.md)。正在报错、需要找到故障原因时，它又把任务交给 [`systematic-debugging`](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/systematic-debugging/SKILL.md)。问题不同，检查的方法也不同。

![Agent 挑选检查方法并阅读项目文件的概念示意](/images/20261008-engineering-review-board-skill-guide/01-agent-selects-skill.png)

## 我最看重的是证据规则

代码审查很容易变成「我觉得这里有风险」。这套技能里有一份专门的 [`review-verification-protocol`](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/review-verification-protocol/SKILL.md)。它要求每条发现都能定位到代码或文档，找到足够的证据，说明实际影响，给出相称的严重程度和具体修复办法。

例如，Agent 准备说「这里缺少权限校验」，就得继续查调用方、中间件和其他可能负责校验的地方。准备说「这段代码没人用」，就得搜索引用。查不到足够证据时，应当把它写成待确认的问题，或者放弃这条发现。这些要求针对的是审查里最让人头疼的误报。

![小黑把问题便签固定到实际代码证据上的概念示意](/images/20261008-engineering-review-board-skill-guide/02-finding-needs-evidence.png)

证据规则还能帮你读报告。一条值得处理的问题，至少应该让你知道它在哪里、什么情况下会发生、为什么需要现在处理。只有「建议加强安全性」这样的句子，无法让人判断下一步该做什么。

## 哪些时候值得用

接手陌生项目时，可以先请 Agent 盘点主要模块、入口和依赖，再针对改起来最费劲的地方做技术债评估。`technical-debt-audit` 要求把长期维护成本与单个小毛病区分开，也要求说明审查范围。它适合帮你决定先处理哪一类问题。

准备合并较大的改动时，可以围绕改动本身使用 `code-review`。如果涉及登录、文件访问或外部输入，再加入 [`security-review`](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/security-review/SKILL.md)。如果最担心现有测试能否挡住回归，就看 [`testing-strategy`](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/testing-strategy/SKILL.md)。专项检查要跟着实际风险走，不必每次把所有技能都读一遍。

发布前还有 [`release-readiness`](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/release-readiness/SKILL.md)，它关心测试、文档、配置、迁移和回滚等交付证据。一个拼写错误或很小的文案改动，通常用不上这样一轮检查。

## 第一次可以怎么用

先让 Agent 能读到这套技能文件，再打开你真正想检查的项目。只把 GitHub 链接扔进对话，不一定能让它自动挑好技能并执行。第一次尝试，我建议把目标缩到一次只读审查。

```text
请只读审查当前项目最近一次功能改动。
先阅读项目自己的 AGENTS.md、README 和相关测试，再参考
nledford/engineering-review-board 中的 code-review 与
review-verification-protocol。涉及权限或外部输入时，再参考 security-review。

只报告有代码或测试证据支持的问题，按影响排序。
每条问题写清位置、触发条件、影响和建议处理方式。
最后说明检查了哪些文件、运行了哪些验证、哪些地方没有验证。
不要修改文件，也不要把没有执行的测试写成已经通过。
```

如果你要做的是全仓库技术债盘点，把目标改成「评估长期维护负担」，主技能换成 `technical-debt-audit`。一次 PR 审查和一次全仓库盘点的范围差很多，报告里都应当写清实际看过哪里。技能也不能替 Agent 获得新的权限。仓库的 [安全边界说明](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/README.md#safety-boundaries) 明确把运行权限留给宿主环境。

报告到手后，先挑最高优先级的两三条回到原文件核对。确认问题真的能发生，再决定要不要修。要是某些测试没有运行，或者只抽看了部分模块，那份报告的结论也只能覆盖已经检查的范围。

这套技能最适合你已经有一个具体工程问题，却不想让 Agent 凭印象给建议的时候。把项目、任务和边界说清楚，它提供的检查方法才有地方落脚。

## 资料来源

- [engineering-review-board 仓库说明](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/README.md)
- [代码审查技能](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/code-review/SKILL.md)
- [审查证据核验规则](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/review-verification-protocol/SKILL.md)
- [技术债评估技能](https://github.com/nledford/engineering-review-board/blob/52d53516759bd38f2795d38efc8f6b915b71b165/skills/technical-debt-audit/SKILL.md)
