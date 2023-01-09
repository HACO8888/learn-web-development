import { defaultTheme } from "@vuepress/theme-default";
module.exports = {
  head: [
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    ["meta", { charset: "utf-8" }],
  ],
  lang: "zh-TW",
  title: "哈蕉程式教學",
  description: "一個最基礎的全方位程式教學！",
  theme: defaultTheme({
    editLink: true,
    lastUpdated: true,
    contributors: true,
    //   logo: '/HACO-LOGO.png',
    docsRepo: "MRHACO/learn-web-development",
    docsBranch: "master",
    docsDir: "docs",
    editLinkPattern: ":repo/edit/:branch/:path",
    editLinkText: "編輯頁面",
    backToHome: "帶我回首頁",
    contributorsText: "編輯者",
    lastUpdatedText: "上次更新",
    selectLanguageName: "繁體中文",
    selectLanguageText: "選擇語言",
    toggleSidebar: "切換至夜間模式",
    toggleDarkMode: "切換至白天模式",
    openInNewWindow: "在新視窗中打開",
    notFound: [
      "這裡沒有東西！.",
      "你是怎麼來到這裡的？",
      "這是個 四 - 零 - 四.",
      "看來你得到了一個壞掉的連結。",
    ],
    navbar: [
      {
        text: "Github",
        link: "https://github.com/MRHACO/learn/web-web-development",
      },
    ],
    sidebar: [
      {
        text: "教學選擇在此",
        link: "/learn",
      },
      {
        text: "網站製作教學",
        link: "/learn/web",
        collapsible: true,
        children: [
          {
            text: "├─ 教學大綱介紹",
            link: "/learn/web",
          },
          {
            text: "├─ Day 1",
            link: "/learn/web/day1",
            collapsible: true,
            children: [
              {
                text: "├─ 子單元 1",
                link: "",
              },
              {
                text: "├─ 子單元 2",
                link: "",
              },
              {
                text: "└─ 子單元 3",
                link: "",
              },
            ],
          },
        ],
      },
    ],
  }),
  plugins: [],
};
