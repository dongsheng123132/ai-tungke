# TUNGKE 探客 — 外贸AI获客平台
网站链接
    URL:https://www.tungke.com

## 介绍

探客（TUNGKE）是基于双地图引擎（Google+高德）的外贸智能获客平台，通过遍历式地点检索、AI联网搜索和行业数据综合评估，帮助外贸企业高效、精准地发现与评估客户。

## 目录结构

```
├── README.md # 说明文档
├── components.json # 组件库配置
├── index.html # 入口文件
├── package.json # 包管理
├── postcss.config.js # postcss 配置
├── public # 静态资源目录
│   ├── favicon.png # 图标
│   └── images # 图片资源
├── src # 源码目录
│   ├── App.tsx # 入口文件
│   ├── components # 组件目录
│   ├── hooks # 通用钩子函数目录
│   ├── index.css # 全局样式
│   ├── lib # 工具库目录
│   ├── main.tsx # 入口文件
│   ├── routes.tsx # 路由配置
│   ├── pages # 页面目录
│   ├── services  # 数据交互目录
│   ├── types   # 类型定义目录
├── tsconfig.app.json  # ts 前端配置文件
├── tsconfig.json # ts 配置文件
├── tsconfig.node.json # ts node端配置文件
└── vite.config.ts # vite 配置文件
```

## 技术栈

Vite、TypeScript、React

## 本地开发

### 环境要求

```
# Node.js ≥ 18（推荐 18 或 20）
# 包管理器：pnpm（推荐）或 npm/yarn
```

### 快速开始

```
pnpm install
pnpm dev
```

### 本地预览生产构建

```
pnpm build
pnpm preview  # 预览地址：http://localhost:5174/
```

## 本地开发与推送步骤

- 安装依赖：`pnpm install`（或 `npm install`/`yarn`）
- 本地开发：`pnpm dev`（使用 `vite.config.dev.ts`）
- 代码检查：`pnpm lint`
- 创建提交：
  - `git add -A`
  - `git commit -m "说明改动"`
- 设置远程并推送：
  - 查看分支：`git branch --show-current` → `main`
  - 查看远程：`git remote -v` → `origin https://github.com/dongsheng123132/ai-tungke.git`
  - 推送：`git push -u origin main`
- 注意：在 PowerShell 下不要用 `&&` 连续执行，多条命令分开执行。

### 为什么这次推送成功

- 已登录 GitHub（凭据缓存），后续推送免交互。
- 远程地址设置正确：`origin https://github.com/dongsheng123132/ai-tungke.git`。
- 当前分支为 `main`，与远程一致。
- 本地已有提交记录，推送顺利。

## Vercel 部署指南

- 连接仓库：在 Vercel 选择 `New Project`，导入 GitHub 仓库 `dongsheng123132/ai-tungke`。
- 构建设置：
  - 框架：`Vite`
  - 安装命令：自动（检测到 `pnpm-lock.yaml` 会使用 `pnpm install`）
  - 构建命令：`pnpm build`
  - 输出目录：`dist`
- 环境变量：如需（例如 Supabase），在 `Settings -> Environment Variables` 中配置。
- 路由（SPA）：已提供 `vercel.json`，将所有路由重写到 `/index.html`。
- 部署触发：每次推送到 `main` 会自动创建新的 Deployment；也可在 Vercel 上手动触发。
