---
prev:
  text: Day2
  link: /learn/web/day2
next:
  text: Day4
  link: /learn/web/day4
---

# 瀏覽器開發者工具(Dev Tool)介紹

## 甚麼是瀏覽器開發者工具

首先，如何開啟瀏覽器的開發者工具呢? 你可以使用 `ctrl+shift+i` 或是 `F12` 來開啟開發者工具，開發者工具可以讓你在做網路應用開發的時候更好的 Debug 和分析資料。

打開之後你會看到這樣的畫面

![devtools](/images/devtools.png)

如果你的瀏覽器是使用 `Microsoft Edge` 的話會出現跟我一樣的畫面，其他瀏覽器如 `Google Chrome`、`Mozilla Firefox`畫面也會極為類似，可能有部分功能不太相同，不過大體上的功能是一樣的。

## 功能介紹

先看到最上面那排寫著 `元素`、`主控台`...等標籤的那一列，每個標籤點下去將會對應道不同的功能，今天將會介紹最重要的幾個功能。

### 元素 (Element)

元素標籤中你可以看到網站的所有 HTML 內容，可以檢視網頁的結構。

### 主控台(Console)

![console](/images/console-example.png)

主控台，或譯控制台，是一個可以監控網頁邏輯運作的地方，也可以在這裡執行 `Javascript` 腳本，但是在使用不明來源腳本時應該多加注意，以免受到網頁注入攻擊(Web Injection)。

### 網路(Network)

![network](/images/network-example.png)

在網路標籤中你可以看到所有從這個網站發出的網路請求(Request)以及回應(Response)，也可以使用篩選器來進行 API 偵錯。

### 應用程式(Application)

![application](/images/application-example.png)

應用程式標籤中可以監看、操作各種網頁暫存在瀏覽器的資料，如 `Cookie`、`Local Storage`等。

## 結語

以上就是瀏覽器開發者工具的基本介紹，主要介紹了幾個常用的工具以及其功能。當然，開發者工具的功能絕對不僅限於此 ~~(光看上面的標籤數量就知道ㄌ)~~ ，以後若有機會使用到再多做介紹。
