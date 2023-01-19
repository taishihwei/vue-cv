![GitHub](https://img.shields.io/github/license/taishihwei/vue-cv)

![GitHub forks](https://img.shields.io/github/forks/taishihwei/vue-cv)
![GitHub Repo stars](https://img.shields.io/github/stars/taishihwei/vue-cv)

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/taishihwei/vue-cv/main)
![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/taishihwei/vue-cv/main)

# vue-cv

<https://taishihwei.github.io/vue-cv>

## Project setup

```text
npm install
```

### Compiles and hot-reloads for development

```text
npm run serve
```

### Compiles and minifies for production

```text
npm run build
```

### Lints and fixes files

```text
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Vue 目錄結構

 - node_modules資料夾：專案的依賴庫。
 - src 資料夾：主要的開發程式都會在這邊，元件的增加修改等都在這個資料夾裡操作。
 - package.json：使用 npm 管理套件會一併出現的檔案，裡面記錄著在這個專案中所使用的套件，以及 npm 的執行指令。
 - components：規劃放置 Vue component 的資料夾，像初始專案中已經有一個 HelloWorld.vue component。
 - assets：放置靜態檔案的資料夾，像是圖片之類的，必須放在這個資料夾內才能夠在程式部分被引用。
 - router：選擇裝 vue-router 才會有此資料夾。
 - main.js(main.ts)：整個 Vue 專案的最源頭，裡面引入了 Vue 並創建了 Vue 實例，這個 Vue 實例有一個引入的 components: App。
 - App.vue：它是一個 component，可能有人很疑惑怎麼有 .vue 這個副檔名，因為專案中有使用 webpack 裡面有使用一個套件 vue-loader，有了這個套件 webpack 才能夠將 .vue 檔解析成 js。

## Badge
  - [Shields.io](https://shields.io/)
  - [Badgen](https://badgen.net/)

## 參考

 - [資料庫應用開發實作](https://hackmd.io/@woC_xOGbT-mBcPtfbJ9Ohw/ryZ2fOQhB#%E8%B3%87%E6%96%99%E5%BA%AB%E6%87%89%E7%94%A8%E9%96%8B%E7%99%BC%E5%AF%A6%E4%BD%9C)
 - [談談前端框架](https://kuro.tw/posts/2019/07/31/%E8%AB%87%E8%AB%87%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/)
 - [【Vue.js入門】一小時學會 Vue.component，完成動態飯店房間清單](https://creativecoding.in/2022/05/17/vue-js-hotel-room-list/)
