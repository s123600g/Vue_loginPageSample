---
title: Vue.js&Bootstrap5_loginPage
tags: Github, readme
description: 使用Bootstrap 5 搭配Vue.js實作一個登入頁面
---

# [使用Bootstrap 5 搭配Vue.js實作一個登入頁面](https://github.com/s123600g/Vue_loginPage)
使用 Vue.js 搭配 BootStrap 5 實作一個登入頁面

**Bootstrap 5**：<br/>
https://blog.getbootstrap.com/2020/06/16/bootstrap-5-alpha/

**Vue.js**：<br/>
https://vuejs.org/

需要安裝**Node.js**：<br/>
https://nodejs.org/en/
<br/> 使用Npm安裝`Vue.js`和`Bootstrap`

使用**Visual Studio Code**開發工具，需要安裝外部套件為以下：
* `Live Sass Compiler` 用來編譯SCSS檔案，產生css檔案
https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass
* `Live Server `用來做開發用途即時偵錯Html樣式預覽
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

---

# Npm 安裝套件

安裝 `Vue`
```shell=
npm install vue
```
安裝`BootStrap 5`
```shell=
npm install bootstrap@next
```
安裝`BootStrap 5 Icons`
```shell=
npm install bootstrap-icons
```
安裝`popper.js`
```shell=
npm install popper.js
```

### 匯入安裝套件
```htmlembedded=
<script src="/node_modules/vue/dist/vue.min.js"></script>

<script src="/node_modules/popper.js/dist/umd/popper.min.js"></script>

<script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```


# 關於.SCSS CSS樣式

需要先在專案根目錄手動建立`scss/`目錄，所有`.scss`檔案都建立在此目錄底下。<br/>

搭配VSCODE外部套件`Live Sass Compiler`，安裝完畢後需要至設定進行基本設置。 <br/>
**Settings** --> **Extensions** --> **Live Sass Compile Config**
找到 `liveSassCompile.settings.autoprefix`點擊 `Edit in settings.json`

```json=
    "liveSassCompile.settings.generateMap": false,
    "liveSassCompile.settings.formats": [
        {
            "format": "compressed",
            "extensionName": ".css",
            "savePath": "/css"
        }
    ],
```
此設置會將`.scss`自動編譯成`.css`放置在`/css`底下，如果`/css`未存在專案根目錄會自動建立該目錄。 <br/>
例如: 在`scss/`底下`main.scss`，經過自動編譯後會在`/css`產生`main.css`


### main.scss
```css=
$secondary: #f4f4f4;
$primary: #e21c68;

$border-radius:  25% 10%;
$border-radius-sm: 0;
$border-radius-ls: 0;
```
設置變數用來取代**Bootstrap**預設參數值。<br/>
* `secondary`、`primary` 更改這兩者預設顏色參數值。 <br/>
Bootstrap - Colors <br/>
https://getbootstrap.com/docs/4.5/utilities/colors/
* `border-radius` 更改針對邊框圓角樣式設定值。 <br/>
Borders <br/>
https://getbootstrap.com/docs/4.5/utilities/borders/

```css=
$utilities: () !default;

$utilities: map-merge(
  (
      "input-padding":
      (
        property: padding,
        class: ipstyle,
        values: (
          0: 0,
          1: 0.3rem,
          2: 0.5rem,
          3: 0.7rem,
          4: 0.9rem,
          5: 1rem,
        ),
      )
  ),
  $utilities
);
```
自訂一個樣式屬性客製類別，針對一些常用的css樣`padding`、`margin`...等等，可以自行客製一個樣式內容，並給予自訂樣式名稱用來針對自己需求，有可能Bootstrap提供的樣式內容不太符合需求時，透過此方式來進行客製，利用`utilities class`概念來處理，`Bootstrap 5` 有提供**Utilities API**來給使用者自行客製想要樣式與樣式類別名稱。<br/>
可參考<br/>
https://blog.getbootstrap.com/2020/06/16/bootstrap-5-alpha/ <br/>
內提到**Utilities API**部分 <br/>

在這部份自行建立一個客製`padding`樣式類別，並且給這一個樣式類別取名為`ipstyle`。
並且有六個參數值供選擇，使用命名方式為
* `ipstyle-0`
* `ipstyle-1`
* `ipstyle-2`
* `ipstyle-3`
* `ipstyle-4`
* `ipstyle-5`

```css=
@import "PageStyle";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
```
透過匯入其他`.scss`可以使用其他樣式內容，針對**bootstrap**樣式在此匯入，在Html內只需要匯入`main.css`就能夠一起載入其樣式內容。 <br/>

在這部份匯入了`bootstrap.scss`與`PageStyle`，其中前者為**bootstrap**樣式檔案`.scss`，後者為自行建立的`.scss`檔案，但是此檔案不會被編譯成`.css`，作為一個只供內部使用的`.scss`，透過`@import`來進行匯入。<br/>

### _PageStyle.scss
```css=
html,
body {
  height: 100%;
}

.form-login {
    width: 100%;
    max-width: 330px;
    padding:15px;
    margin: auto;
}
```
在此`.scss`檔案中，設定`html`、`body`頁面樣式屬性`height`，並且設置一個樣式類別名稱為
`form-login`，`<form>`做樣式內容設定。<br/>

因為並不會被編譯產生單獨`.css`檔案，所以透過在`main.scss`內進行匯入，只要在`Login.html`內匯入`main.css`即會套用此檔案內容效果。





