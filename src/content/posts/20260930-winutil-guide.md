---
title: "WinUtil：一个人人都能上手的 Windows 装机与优化工具"
pubDatetime: 2026-09-30T09:00:00+08:00
description: "WinUtil 把 Windows 装机后的软件安装、系统调整、功能管理和更新选项放进一个 PowerShell 图形界面，也需要你先看懂再动手。"
tags:
  - Windows
  - 工具
draft: false
---

重装完 Windows，后面那一串小事往往更费时间。浏览器、压缩工具、编辑器，一个个找官网、下载、点下一步；安装器里再多看几眼，免得顺手装上不需要的东西。接着还得翻设置菜单，调整更新、隐私和自己常用的系统选项。

有没有办法少走几遍这个流程？我最近看了 Chris Titus Tech 的 WinUtil。它把常见的软件安装和 Windows 调整放进一个窗口里，省掉一部分重复操作。不过它会以管理员权限改系统，方便归方便，最好先弄清楚每个选项做什么。

## WinUtil 的来路和边界

WinUtil 是 Chris Titus Tech 开发的开源 Windows 工具，主体是 PowerShell 脚本，启动后会打开图形界面。Chris Titus 长期制作 Windows、Linux、网络和开源软件相关的技术内容，WinUtil 也是一个开放在 GitHub 上维护的项目。

日常使用时，WinUtil 通过 PowerShell 脚本和图形界面，调用软件包管理器或 Windows 自带能力完成你选中的操作。它不负责把软件重新打成一个安装包，也不是一份可以直接安装的 Windows 镜像。项目另有 Win11 Creator，可基于微软官方镜像制作自定义安装镜像，这是独立的可选功能。

![WinUtil 官方 Win11 Creator 页面截图](/images/20260930-winutil-guide/05-win11creator.png)

官方文档当前将 WinUtil 的支持范围标为 Windows 11。旧文章里关于 Windows 10 的说明可能已经过时，使用前最好以项目文档为准。

## 四个标签，分别处理四类事情

### Install 批量安装软件

在软件列表里搜索、勾选应用，再点安装。适合一次装上浏览器、压缩工具、开发环境等常用软件。安装过程会调用 WinGet 或 Chocolatey 等包管理器，减少逐个搜索安装包的步骤。

![WinUtil 官方 Install 页面截图，展示应用目录和分类筛选](/images/20260930-winutil-guide/01-install-selected-apps.png)

软件清单和包管理器里的条目会随项目维护而变化。安装前看一眼名称，确认选中的是自己要的应用；批量操作能省时间，也更需要留意勾选内容。

### Tweaks 调整 Windows

这里集中放着隐私、界面和系统行为相关的调整，也有 Minimal、Standard 等预设。新手可以先读每项说明，再决定是否应用。预设只是帮你勾选一组设置，不代表它一定适合每台电脑。

![WinUtil 官方 Tweaks 页面截图，展示预设和系统调整项](/images/20260930-winutil-guide/02-tweaks.png)

### Config 管理功能与常见修复

Config 里能启用 WSL、Hyper-V、Windows Sandbox 等可选 Windows 功能，也集中放了网络重置、Windows Update 修复和旧版控制面板入口。它更像一个系统工具箱，点按钮前要看清楚实际操作。

![WinUtil 官方 Config 页面截图，展示 Windows 功能、修复工具和系统面板](/images/20260930-winutil-guide/03-config.png)

### Updates 管理更新策略

这里提供 Windows 更新相关的策略选项，方便调整更新行为。暂停或延后更新会影响安全补丁何时安装，改完要记得回来检查，别让临时设置变成长期漏更。

![WinUtil 官方 Updates 页面截图，展示更新策略选项](/images/20260930-winutil-guide/04-updates.png)

## 三分钟开始用

确认电脑运行 Windows 11，并连接互联网。先从开始菜单右键选择“终端（管理员）”，再运行官方稳定版命令。

```powershell
irm "https://christitus.com/win" | iex
```

命令完成后会打开 WinUtil。窗口上方是 Install、Tweaks、Config 和 Updates 等标签，进入 Install 后可以按分类浏览，也可以直接搜索软件名称。

做个最小示例，搜出你确实需要的三个软件，逐个勾选，再点击 **Install/Upgrade Selected**。等安装完成后，到开始菜单确认应用能正常打开。具体选什么由你平常的工作决定，别为了“装机清单看起来完整”而多装一堆用不到的程序。

开发者还可以把它当作搭环境的起点，例如先装 Git、VS Code 和 PowerShell，再按项目文档配置 Node.js 或 .NET。Electron 或 Tauri 项目需要的 SDK、编译工具和版本管理方式各有要求，WinUtil 能减少基础软件安装的重复劳动，不能替你管理项目级依赖；团队环境仍应写进项目配置或开发容器。

## 运行前先想好怎么回退

这个命令很短，含义却直接。`irm` 会从网址读取内容，管道符把结果交给 `iex` 执行。你没有先把脚本下载到本地检查，PowerShell 就会执行当下从该网址取得的代码。即使网址属于官方项目，这种执行方式也要求你信任来源和当前脚本内容。

这个入口会获取官方地址当前提供的脚本，代码会随项目维护而更新。需要复现同一套设置时，记下使用日期和版本，别把这条短命令当成固定不变的本地脚本。

想先审阅的话，可以到 WinUtil 的 GitHub 仓库查看脚本与配置，或先下载到本地阅读，再决定是否运行。不要从搜索结果里的陌生短链复制管理员命令。

开始改动前，先备份重要文件，并确认系统还原保护已开启，再创建还原点。还原点不是完整备份，也不能保证每种问题都能恢复。应用 Tweaks 时，不要因为有预设就一次全选；尤其是标注 Advanced 或有警告的选项，先看说明和可能的影响。某些设置需要重新登录或重启才会生效。

## 谁适合用，谁可以跳过

刚装好电脑、要在多台个人设备上重复配置，或者喜欢自己调整 Windows 的人，可能会觉得 WinUtil 顺手。它把分散的入口集中起来，也让常用步骤更容易重复。

如果你只想装两三个应用，直接用 `winget install` 往往更快。需要让团队成员得到可复现的开发环境，可以考虑 Dev Container 或 Windows 的 `winget configure`，把依赖和配置放进可审阅、可维护的文件里。WinUtil 更适合个人装机时操作，不该代替团队的环境定义。

对我来说，WinUtil 是一个可选的便利工具，不是每台 Windows 电脑都必须装的“优化神器”。先确认自己要解决什么，再挑少量选项试用，通常比照着某份清单全点一遍稳妥。你用过 WinUtil，或有更喜欢的装机流程吗？欢迎留言交流。

## 官方资料

- [WinUtil GitHub 仓库与快速开始](https://github.com/ChrisTitusTech/winutil)
- [WinUtil 官方文档与上手指南](https://winutil.christitus.com/guides/getting-started/)
- [Tweaks 功能说明](https://winutil.christitus.com/guides/tweaks/)
