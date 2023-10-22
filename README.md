# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
# vite-vue3-ts-pinia
vue3开发使用可参考
- [开发文档](https://juejin.cn/post/7220220100384407610#comment)
### 组件
  所有组件都已经设置自动导入，可直接使用，无需`important`引入
### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
使用方法：
1、直接使用,在上述网站中选好图标，点击`Snippets`下`iconify`按钮复制
`<span class="iconify" data-icon="material-symbols:add-notes-rounded" data-inline="false"></span>`
或者组件使用
`<icon-material-symbols-activity-zone-outline />`
或者结合Element使用
`<el-icon :size="20" :color="'#409EFC'">
      <icon-material-symbols-activity-zone-outline />
    </el-icon>`
2、使用已封装组件[`Icon`]
 `<Icon icon="material-symbols:3p-outline" size="100px" :color="'#1e80ff'"></Icon>`
3、使用本地svg图
`<SvgIcon name="svg01" size="100px" :color="'#1e80ff'" ></SvgIcon>`
或者
`<Icon icon="svg01|svg" size="100px" :color="'#1e80ff'"></Icon>`
