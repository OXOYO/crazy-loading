# Crazy Loading

基于 Iconify 的数理主题 loading 图标集，附带 React Playground。

**在线体验**：[https://oxoyo.github.io/crazy-loading/](https://oxoyo.github.io/crazy-loading/)

## Playground 能做什么

- 浏览、搜索、按分类筛选 376 个 loading 图标
- 实时调整颜色、尺寸、动画时长、线宽、不透明度，并一键重置
- 复制或下载单图标 SVG / React / Vue / HTML 代码，生成分享链接
- 勾选多个图标，导出精简版 `crazy-loading.json`
- 支持浅色/深色主题与中英文切换；移动端提供底部导航

## 本地运行 Playground

```bash
npm install
npm run dev
```

首次启动会先构建图标集，耗时略长。浏览器默认打开 `http://localhost:5173`（若端口占用会自动换用其他端口，以终端输出为准）。

## 发布到 GitHub Pages

仓库已配置 GitHub Actions（`.github/workflows/deploy-pages.yml`），在推送 **版本标签**（如 `v0.1.0`）时自动构建并部署 Playground。

### 首次启用

1. 进入仓库 **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**

### 发布新版本

```bash
git tag v0.1.0
git push origin v0.1.0
```

部署完成后访问：`https://oxoyo.github.io/crazy-loading/`（用户名/组织名以实际为准）。

### 本地验证 Pages 构建

```bash
npm run build:pages
npm run preview:pages
```

预览地址为 `http://localhost:4173/crazy-loading/`。

## 图标规模

当前目录包含 **376** 个 loading 图标，覆盖微积分、几何、物理、力学、电磁学、化学、量子、相对论、天文学、航天（含钱学森弹道）、统计、混沌与分形、运动、生物、计算机、光学、地球科学、音乐声学、工程等方向。每个图标均有独立动画语义。

图标目录由 `scripts/catalog.ts` 统一管理，可通过模板批量生成：

```bash
npm run generate:icons   # 根据 catalog 生成 SVG
npm run sync:meta        # 同步 Playground 分类与元数据
```

## 常用命令

```bash
# 生成 SVG + 同步元数据 + 构建 IconifyJSON
npm run build:icons

# 启动 playground（含图标构建）
npm run dev

# 构建 playground 静态站点
npm run build

# 按 GitHub Pages 子路径构建并本地预览
npm run build:pages
npm run preview:pages
```

## 目录结构

- `icons/`：源 SVG 图标
- `scripts/build.ts`：Iconify 构建脚本
- `packages/json/`：生成的 Iconify 自定义图标集 JSON（`prefix: crazy-loading`）
- `playground/`：React 配置与预览工具

## 在项目中使用（Iconify 自定义图标集）

本仓库**未上架** [Iconify 公共 API](https://iconify.design)，请以**本地 JSON + `addCollection`** 方式接入。

### 1. 获取图标集 JSON

**方式 A：按需勾选（推荐）**

1. 打开 Playground（`npm run dev` 或在线地址）
2. 在图标库中**勾选**需要的 loading 图标
3. 通过底部浮动条或「图标集」页**复制 / 下载** `crazy-loading.json`
4. 保存到业务项目，例如 `src/assets/crazy-loading.json`

**方式 B：全量图标**

执行 `npm run build:icons` 后，直接使用 `packages/json/icons.json`。

### 2. React

```bash
npm install @iconify/react
```

```tsx
import { Icon, addCollection } from '@iconify/react';
import icons from './assets/crazy-loading.json';

addCollection(icons);

export function Loading() {
  return <Icon icon="crazy-loading:dna-helix" width={48} style={{ color: '#60a5fa' }} />;
}
```

### 3. Vue 3

```bash
npm install @iconify/vue
```

```vue
<script setup>
import { Icon, addCollection } from '@iconify/vue';
import icons from './assets/crazy-loading.json';

addCollection(icons);
</script>

<template>
  <Icon icon="crazy-loading:dna-helix" :width="48" :style="{ color: '#60a5fa' }" />
</template>
```

### 4. 纯 HTML

```html
<script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>
<script>
  fetch('./assets/crazy-loading.json')
    .then((res) => res.json())
    .then((data) => Iconify.addCollection(data));
</script>
<iconify-icon icon="crazy-loading:dna-helix" width="48" style="color: #60a5fa"></iconify-icon>
```

### 5. 直接内联 SVG

若需完整控制颜色、动画时长、线宽（与 Playground 参数面板一致），请从 Playground 复制或下载 SVG，不经过 Icon 组件。

## 协议

MIT
