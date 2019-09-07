const sidebarRouter = require('./router');

module.exports = {
  title: "Lena-博客",
  description: "Good good study, day day up!",
  head:[
      ['link', {rel:'icon',href:'/favicon.ico'}]
  ],
  markdown:{
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "掘金专栏",
        link: "https://juejin.im/user/5916ab218d6d8100586bb776/posts"
      },
      { text: "GitHub", link: "https://github.com/liweina-fans" }
    ],
    sidebar:sidebarRouter
  }
};
