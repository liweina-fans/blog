(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(s,t,a){s.exports=a.p+"assets/img/transform.0a9aee01.png"},220:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"android-4-4-2不兼容css3特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-4-4-2不兼容css3特性","aria-hidden":"true"}},[s._v("#")]),s._v(" Android 4.4.2不兼容CSS3特性")]),s._v(" "),n("h3",{attrs:{id:"bug场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bug场景","aria-hidden":"true"}},[s._v("#")]),s._v(" Bug场景")]),s._v(" "),n("p",[s._v("Android客户端webview内嵌H5，需要兼容到4.*版本。用App访问本地环境时，是完全ok的，但正式环境就会出问题，CSS写的箭头，方向不对，还有引入mint-ui的time picker也有错位的问题。")]),s._v(" "),n("h3",{attrs:{id:"分析问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 分析问题")]),s._v(" "),n("p",[s._v("通过表象很明确定位到是CSS3 transform属性没写浏览器兼容性前缀导致的问题，在"),n("a",{attrs:{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("can i use"),n("OutboundLink")],1),s._v("查的结果也证实了猜测，如图：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(197),alt:"transform"}})]),s._v(" "),n("p",[s._v("至此问题很明确，要想兼容Android 4就要加-webkit-前缀")]),s._v(" "),n("h3",{attrs:{id:"解决问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 解决问题")]),s._v(" "),n("p",[s._v("直接在css中直接添加-webkit-前缀")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("135deg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.75rem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("135deg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.75rem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这样就解决了箭头的问题，但引入第三方mint-ui中的time picker错位问题并没有解决。还要想办法。")]),s._v(" "),n("p",[s._v("通过上网查到vue cli build打包后是否添加前缀，取决于"),n("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("browserslist"),n("OutboundLink")],1),s._v("，因为autoprefixer将其作为依赖了。如下更改package.json中的配置，即可。")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browserslist"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"> 1%"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 2 versions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 10 Chrome versions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"last 5 Firefox versions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Safari >= 6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ie > 8"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])},[],!1,null,null,null);t.default=r.exports}}]);