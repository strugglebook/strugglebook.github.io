(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{225:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack安装和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack安装和配置"}},[t._v("#")]),t._v(" Webpack安装和配置")]),t._v(" "),a("h2",{attrs:{id:"webpack环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack环境搭建"}},[t._v("#")]),t._v(" Webpack环境搭建")]),t._v(" "),a("p",[t._v("我们要知道："),a("font",{attrs:{color:"#1E90FF"}},[t._v("webpack是基于node开发的，所以我们需要node环境和node相关的基础知识")])],1),t._v(" "),a("p",[a("font",{attrs:{color:"#1E90FF"}},[a("strong",[t._v("① node安装")])])],1),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("下载地址")]),t._v("："),a("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/zh-cn/download/"),a("OutboundLink")],1)],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("版本选择")]),t._v("：下载node版本下载最高的稳定版本(LTS)，这样能提高"),a("code",[t._v("webpack")]),t._v("的打包速率")],1)]),t._v(" "),a("p",[a("font",{attrs:{color:"#1E90FF"}},[a("strong",[t._v("② webpack全局安装")])])],1),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("npm install webpack webpack-cli -g --registry=https://registry.npm.taobao.org")]),t._v("（全局下载）")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("webpack -v")]),t._v("（检查安装）")],1)]),t._v(" "),a("p",[t._v("虽然"),a("code",[t._v("webpack")]),t._v("全局安装很简单，但是我们不推荐，我们还是推荐在项目当中安装"),a("code",[t._v("webpack")]),t._v(",所以我们可以删除全局的"),a("code",[t._v("webpack")])]),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("npm uninstall webpack webpack-cli -g")])],1)]),t._v(" "),a("p",[a("font",{attrs:{color:"#1E90FF"}},[a("strong",[t._v("③ webpack局部安装")])])],1),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("npm install webpack webpack-cli -D --registry=https://registry.npm.taobao.org\n")]),t._v("（项目内部安装）")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("webpack -v（这种是全局检查的方式，是无效的）")])],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("npx webpack -v（正确的项目内部webpack的版本检查方式,）")])],1)]),t._v(" "),a("p",[a("code",[t._v("npx")]),t._v("是"),a("code",[t._v("node")]),t._v("给我们提供的一个命令，可以在项目当中的"),a("code",[t._v("node_module")]),t._v("目录下去执行相关的命令。比如"),a("code",[t._v("npx webpack -v")]),t._v("意思就是到当前项目的"),a("code",[t._v("node_module")]),t._v("目录下去寻找"),a("code",[t._v("webpack")]),t._v("这个包，然后查看它的版本。")]),t._v(" "),a("h2",{attrs:{id:"webpack配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置文件"}},[t._v("#")]),t._v(" webpack配置文件")]),t._v(" "),a("p",[t._v("我们需要通过"),a("code",[t._v("webpack")]),t._v("的配置文件来规定不同文件的打包方式，因为不同文件的打包方式是一定不同的，虽然"),a("code",[t._v("webpack")]),t._v("有很丰富的默认配置文件，但是我们还是大多的时候需要通过自己配置"),a("code",[t._v("webpack.config.js")]),t._v("来丰富我们的打包流程和规则。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包环境为生产模式（默认压缩打包文件）")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 入口文件（可以简写为entry: './src/index.js'）")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包后的js文件名")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包后文件存放的目录（默认就是dist）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后我们介绍一下几个常用的"),a("code",[t._v("webpack")]),t._v("启动命令的区别：")]),t._v(" "),a("ul",[a("li",[a("p",[a("font",{attrs:{color:"#1E90FF"}},[t._v("npx webpack index.js")])],1),t._v(" "),a("ul",[a("li",[t._v("明确告诉"),a("code",[t._v("webpack")]),t._v("入口文件为"),a("code",[t._v("index.js")]),t._v(",因为"),a("code",[t._v("webpack")]),t._v("有默认配置，按照默认配置会默认将打包后的文件放在"),a("code",[t._v("dist/main.js")]),t._v("当中")])])]),t._v(" "),a("li",[a("p",[a("font",{attrs:{color:"#1E90FF"}},[t._v("npx webpack")])],1),t._v(" "),a("ul",[a("li",[t._v("启动命令，但是如果没有"),a("code",[t._v("webpack.config.js")]),t._v("就会报错，因为"),a("code",[t._v("webpack.config.js")]),t._v("是默认的配置文件名")])])]),t._v(" "),a("li",[a("p",[a("font",{attrs:{color:"#1E90FF"}},[t._v("npx webpack --config rule.js")])],1),t._v(" "),a("ul",[a("li",[t._v("启动命令，但是将"),a("code",[t._v("rule.js")]),t._v("作为"),a("code",[t._v("webpack")]),t._v("的配置文件进行启动，不推荐这样用，老老实实创建默认的文件名"),a("code",[t._v("webpack.config.js")]),t._v("最好")])])]),t._v(" "),a("li",[a("p",[a("font",{attrs:{color:"#1E90FF"}},[t._v("npm run bundle")])],1),t._v(" "),a("ul",[a("li",[t._v("启动命令，只不过我们在"),a("code",[t._v("package.json")]),t._v("文件中配置了"),a("code",[t._v('script: { "bundle": "webpack" }')]),t._v(",本质上还是在使用"),a("code",[t._v("webpack")]),t._v("命令")])])])]),t._v(" "),a("p",[t._v("这里有个问题，为什么能直接在命令行中使用"),a("code",[t._v("webpack")]),t._v("的命令，计算机为什么能识别它？")]),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#DD1144"}},[t._v("这就是webpack-cli的作用：能让我们在命令行中正确的使用webpack命令")])],1),t._v(" "),a("li",[t._v("在新版本的"),a("code",[t._v("webpack")]),t._v("中将在命令行中运行"),a("code",[t._v("webpack")]),t._v("命令相关的代码移动到了"),a("code",[t._v("webpack-cli")])])]),t._v(" "),a("h2",{attrs:{id:"浅析打包出的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅析打包出的内容"}},[t._v("#")]),t._v(" 浅析打包出的内容")]),t._v(" "),a("p",[t._v("当我们执行打包命令，会在命令行当中输入以下结果，我们来分析以下结果的含义：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eb7f39ba7fb263ae1f22\nVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.26")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("\nTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("92")]),t._v("ms\nBuilt at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n    Asset      Size  Chunks             Chunk Names\nbundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.33")]),t._v(" KiB       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\nEntrypoint main "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bundle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" modules "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("836")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("207")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("212")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("212")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Hash")]),t._v("：本次打包唯一对应的一个哈希值")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Version")]),t._v("：本次打包使用的"),a("code",[t._v("webpack")]),t._v("的版本")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Time")]),t._v("：本次打包所使用的总时间")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#3eaf7c"}},[t._v("Asset")]),t._v("：本次打包后的文件名称")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#DD1144"}},[t._v("Chunks")]),t._v("：本次打包"),a("code",[t._v("bundle.js")]),t._v("和其它存在引用关系文件的"),a("code",[t._v("id")]),t._v("组合")],1),t._v(" "),a("li",[a("font",{attrs:{color:"#DD1144"}},[t._v("Chunk Names")]),t._v("：本次打包"),a("code",[t._v("bundle.js")]),t._v("对应的id的名称（对应于entry中的配置）")],1)]),t._v(" "),a("p",[a("strong",[t._v("参考资料")])]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://webpack.js.org/guides/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webpack.js.org/guides/getting-started/"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);