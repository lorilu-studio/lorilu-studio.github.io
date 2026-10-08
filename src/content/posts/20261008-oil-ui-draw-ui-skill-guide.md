---
title: "技能详解系列：oil-ui 与 draw-ui，设计方向怎么选，UI 设计稿怎么做"
pubDatetime: 2026-10-08T22:55:00+08:00
description: "读懂 oil-ui 和 draw-ui 两个界面设计 Skill 的工作方式，用实际示例选择设计方向、生成设计稿，再按需实现页面。"
tags:
  - 技能说明书
  - AI Agent
  - UI 设计
---

把「帮我设计一个首页」交给 Agent，接下来要做什么，往往还没说清。你可能想先比较几种风格，也可能已经知道大致模样，只想拿到一张设计图。这一步含糊，后面很容易反复改。

我读了 [oil-ui](https://github.com/oil-oil/oil-ui) 和 [draw-ui](https://github.com/oil-oil/draw-ui) 的仓库说明，也看了作者讲设计稿生成与页面还原的两篇文章。两个 Skill 都服务于界面设计，进入任务的方式不同。`oil-ui` 适合先拉开几个设计方向，让你看过再选。`draw-ui` 会先生成 UI 设计稿，也能在选定设计稿后继续做页面还原。

## oil-ui 让不同方向真正不同

`oil-ui` 是给 Agent 阅读的界面设计方法。它先弄清产品属于哪一类，用户打开页面要看什么、做什么，再决定字体、构图、颜色和主视觉。需要探索时，Agent 会做几份小样，放进同一个对比页。你可以切换桌面与手机尺寸，选中一个方向，再指出喜欢和不喜欢的地方。[仓库说明](https://github.com/oil-oil/oil-ui)也把实际截图检查放在流程后段。

仓库里的《蒙娜丽莎》特展示例很好懂。同一场展览，左边把画作局部放大成深色首屏，中间借了旧报纸的排版，右边让作品和留白占据页面。三张图讲的是同一件事，远远看过去也不会混成一套模板。

![oil-ui 为同一特展页面制作的三种设计方向](/images/20261008-oil-ui-draw-ui-skill-guide/oil-ui-draw-ui-style-comparison.webp)

*同一特展页面的三种方向，来自 [oil-ui 仓库示例](https://github.com/oil-oil/oil-ui/blob/main/assets/readme/proof-mona-lisa.webp)。*

拿个人博客来说，如果还没决定首页应该突出最新文章、作者本人，还是某个长期写作主题，就可以先让它做方向对比。看完画面再选，比只说「高级一点」「简洁一点」更容易把意见讲具体。它也能评审和润色已有页面；只想听建议时，记得在请求里说清楚不要改文件。

## draw-ui 先把页面画出来

`draw-ui` 的第一步是生成 UI 设计稿。仓库首页放了三个例子，分别是数据分析后台、建筑研究工作台和手机订餐页。页面类型相差很大，读者一眼就能看出它交付的首先是一张可供讨论的画面。

![draw-ui 仓库展示的数据后台、研究工作台和手机页面设计稿](/images/20261008-oil-ui-draw-ui-skill-guide/oil-ui-draw-ui-showcase.png)

*三种页面设计稿，来自 [draw-ui 仓库示例](https://github.com/oil-oil/draw-ui/blob/main/assets/readme/readme-hero.png)。*

已有项目怎么保持原来的风格，是作者在[设计稿文章](https://www.oiloil.org/articles/gpt-image-2-ui-design)里专门测试过的问题。单靠重复同一段提示词，几次生成的页面仍会变样。给模型一张现有页面截图，侧边栏等固定部分会更稳定。如果希望内容区多一点变化，可以保留外框，把内容区留空，再明确告诉 Agent 哪些地方不能动。

下面这张订餐页能看到设计稿的细节。上方先给搜索与品类入口，中间把套餐照片和价格放在显眼处，购物车操作留在靠近底部的位置。它已经足够用来讨论信息顺序和视觉效果，图片里的控件仍要经过代码实现，才能在真实页面上操作。

![draw-ui 的 Nori 手机订餐页面设计稿](/images/20261008-oil-ui-draw-ui-skill-guide/oil-ui-draw-ui-mobile-design.png)

*Nori 手机页面设计稿，来自 [draw-ui 仓库示例](https://github.com/oil-oil/draw-ui/blob/main/assets/readme/screens/nori-mobile.png)。*

选定设计稿以后，`draw-ui` 还提供还原流程。作者在[还原文章](https://www.oiloil.org/articles/ui-design-to-html)里把工作拆开，布局、文字和普通控件交给代码；照片、插画等保留为独立素材。完成页面后，再把实际截图与设计稿放在一起看，修正位置、大小和字重。这样做完仍需检查交互和手机布局，设计图本身不能证明这些部分已经可用。

## 先看自己缺哪一步

还没有定风格，先用 `oil-ui` 比较方向。想尽快看到一张具体的设计图，或手上已经有截图需要还原，就从 `draw-ui` 开始。两个仓库的能力有重叠，选择时看这一轮要交付什么，能省掉许多来回猜测。

如果你的 Agent 支持安装 Skill，可以把两个仓库链接交给它安装，也可以使用仓库给出的命令。

```sh
npx skills add oil-oil/oil-ui
npx skills add oil-oil/draw-ui
```

装好后直接在任务里点名。想先为博客首页挑方向，可以这样说。

```text
请用 oil-ui 为当前博客首页做三种明显不同的设计方向，
放在可预览的对比页让我选择。保留现有文章内容。
这一步先不要修改正式页面。
```

想先拿到设计图，就把页面内容和固定区域说清楚。

```text
请用 draw-ui 为博客文章页生成桌面端和手机端 UI 设计稿。
参考当前网站的字体与配色，保留文章标题、正文和目录。
先交付设计图，不修改项目代码。
```

选中设计稿后，再发一条实现请求，附上图片，并说明要改进哪个项目、哪些区域保持原样。这样 Agent 有了明确的视觉参照，也知道这一次需要交付可运行页面。

作者较早的文章使用过第三方生图服务和 API Key。按当前的 [draw-ui 仓库说明](https://github.com/oil-oil/draw-ui)，它会优先使用 Agent 宿主已有的图片生成能力；只有选用脚本服务时才需要额外配置。第一次使用时先看当前环境提供了什么，不必照着旧文章预先设置外部服务。

## 资料来源

- [oil-ui 仓库说明](https://github.com/oil-oil/oil-ui)
- [draw-ui 仓库说明](https://github.com/oil-oil/draw-ui)
- [作者谈风格稳定的 UI 设计稿](https://www.oiloil.org/articles/gpt-image-2-ui-design)
- [作者谈如何把设计稿还原成 HTML](https://www.oiloil.org/articles/ui-design-to-html)
