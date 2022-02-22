module.exports = {
  // 网站标题
  title: "每天记录一点点，每天进步一点点",
  // 网站描述
  description: "Interview with vitePress",
  // 打包目录
  dest: "../dist",
  base: "/blogs/",
  // 头部head
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 使用插件
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [
      { text: "我的个人网站", link: "" },
      { text: "掘金", link: "" },
      { text: "Github", link: "https://github.com/wangyongtest" },
    ],
    sidebar: {
      "/": getSidebar(),
    },
  },
};

function getSidebar() {
  return [
    {
      text: "HTML",
      children: [
        { text: "基础", link: "/HTML/" },
        { text: "进阶", link: "/HTML/advanced" },
      ],
      sidebarDepth: 3,
    },
    {
      text: "CSS",
      children: [
        { text: "基础", link: "/CSS/" },
        { text: "进阶", link: "/CSS/advanced" },
      ],
    },
    {
      text: "Javascript",
      children: [
        { text: "基础", link: "/Javascript/" },
        { text: "进阶", link: "/Javascript/advanced" },
      ],
    },
    {
      text: "Vue",
      children: [
        { text: "基础", link: "/Vue/" },
        { text: "进阶", link: "/Vue/advanced" },
      ],
    },
    {
      text: "React",
      children: [
        { text: "基础", link: "/React/" },
        { text: "进阶", link: "/React/advanced" },
      ],
    },
    {
      text: "TS",
      children: [
        { text: "基础", link: "/TS/" },
        { text: "进阶", link: "/TS/advanced" },
      ],
    },
    {
      text: "网络",
      children: [
        { text: "基础", link: "/Network/" },
        { text: "进阶", link: "/Network/advanced" },
      ],
    },
    {
      text: "Canvas",
      children: [
        { text: "基础", link: "/Canvas/" },
        { text: "进阶", link: "/Canvas/advanced" },
      ],
    },
    {
      text: "Node",
      children: [
        { text: "基础", link: "/Node/" },
        { text: "进阶", link: "/Node/advanced" },
      ],
    },
  ];
}
