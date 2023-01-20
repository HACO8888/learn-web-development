---
prev:
  text: Day3
  link: /learn/web/day3
next:
  text: Day5
  link: /learn/web/day5
---

# 深入理解網頁架構

還記得上次講到的開發者工具嗎？打開之後看到很多 HTML 的結構，這次就來解讀這些元素的關係吧。

## 層級關係 (Level)

![structure](/images/htmlstructure.png)

```text:no-line-numbers
從上圖可以看到有一個 class 名為 `header` 的 div 標籤內包著另個名為 `logo` 的 div 標籤
而裡面有一個 `img` 圖片和 1 個 `h1` 標題。
```

上面這段話非常巧妙的帶到了 HTML 的元素階層 (Element Levels)的概念以及幾個常用的標籤，以上面那個狀態舉例，我們會說 header 是 logo 的父標籤，而 h1 和 img 是 logo 的子標籤。
