import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ISD Guideline",
  description: "Practical survival guides for ISD students across software, hardware, and design.",
  base: "/ISD-Guideline/",
  cleanUrls: true,
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        outline: [2, 3],
        outlineTitle: "On this page",
        nav: [
          { text: "Home", link: "/" },
          { text: "Software", link: "/software/" },
          { text: "Hardware", link: "/hardware/" },
          { text: "Design", link: "/design/" },
          { text: "Templates", link: "/templates/guide-template" }
        ],
        sidebar: {
          "/software/": [
            {
              text: "Software",
              items: [
                { text: "Overview", link: "/software/" },
                { text: "VS Code", link: "/software/vscode" },
                { text: "GitHub", link: "/software/github" },
                { text: "Git", link: "/software/git" },
                { text: "Coding Gen AI", link: "/software/coding-gen-ai" }
              ]
            }
          ],
          "/hardware/": [
            {
              text: "Hardware",
              items: [{ text: "Overview", link: "/hardware/" }]
            }
          ],
          "/design/": [
            {
              text: "Design",
              items: [{ text: "Overview", link: "/design/" }]
            }
          ],
          "/templates/": [
            {
              text: "Templates",
              items: [
                { text: "Guide Template", link: "/templates/guide-template" },
                { text: "Tool Tutorial Template", link: "/templates/tool-tutorial-template" },
                { text: "Troubleshooting Template", link: "/templates/troubleshooting-template" }
              ]
            }
          ]
        }
      }
    },
    zh: {
      label: "中文",
      lang: "zh-TW",
      link: "/zh/",
      themeConfig: {
        outline: [2, 3],
        outlineTitle: "本頁導覽",
        nav: [
          { text: "首頁", link: "/zh/" },
          { text: "軟體", link: "/zh/software/" },
          { text: "硬體", link: "/zh/hardware/" },
          { text: "設計", link: "/zh/design/" },
          { text: "模板", link: "/zh/templates/guide-template" }
        ],
        sidebar: {
          "/zh/software/": [
            {
              text: "軟體",
              items: [
                { text: "總覽", link: "/zh/software/" },
                { text: "VS Code", link: "/zh/software/vscode" },
                { text: "GitHub", link: "/zh/software/github" },
                { text: "Git", link: "/zh/software/git" },
                { text: "Coding Gen AI", link: "/zh/software/coding-gen-ai" }
              ]
            }
          ],
          "/zh/hardware/": [
            {
              text: "硬體",
              items: [{ text: "總覽", link: "/zh/hardware/" }]
            }
          ],
          "/zh/design/": [
            {
              text: "設計",
              items: [{ text: "總覽", link: "/zh/design/" }]
            }
          ],
          "/zh/templates/": [
            {
              text: "模板",
              items: [
                { text: "指南模板", link: "/zh/templates/guide-template" },
                { text: "工具教學模板", link: "/zh/templates/tool-tutorial-template" },
                { text: "排錯模板", link: "/zh/templates/troubleshooting-template" }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    siteTitle: "ISD Guideline",
    socialLinks: [{ icon: "github", link: "https://github.com" }],
    search: {
      provider: "local"
    }
  }
});
