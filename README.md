# Crazy Loading

基于 Iconify 的数理主题 loading 图标集，附带 React Playground。

## 本地运行 Playground

```bash
npm install
npm run dev
```

浏览器将打开 `http://localhost:5173`。

## 图标规模

当前目录包含 **210** 个数理主题 loading 图标，覆盖微积分、几何、物理、力学、电磁学、化学、量子、相对论、天文学、航天（含钱学森弹道）、统计、混沌与分形等方向。

图标目录由 `scripts/catalog.ts` 统一管理，可通过模板批量生成：

```bash
npm run generate:icons   # 根据 catalog 生成 SVG
npm run sync:meta        # 同步 Playground 分类与元数据
```

## 常用命令

```bash
# 生成 SVG + 同步元数据 + 构建 IconifyJSON
npm run build:icons

# 仅启动 playground（需先构建图标）
npm run dev -w playground

# 构建 playground 静态站点
npm run build
```

## 目录结构

- `icons/`：源 SVG 图标
- `scripts/build.ts`：Iconify 构建脚本
- `packages/json/`：生成的 `@iconify-json/crazy-loading`
- `playground/`：React 配置与预览工具

## 协议

MIT
