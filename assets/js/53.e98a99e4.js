(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{236:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目构建"}},[t._v("#")]),t._v(" 项目构建")]),t._v(" "),a("h2",{attrs:{id:"从0构建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从0构建项目"}},[t._v("#")]),t._v(" 从0构建项目")]),t._v(" "),a("h3",{attrs:{id:"_1-创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建项目"}},[t._v("#")]),t._v(" 1. 创建项目")]),t._v(" "),a("p",[t._v("我们直接去微信公众平台上注册账号，然后登录，在登录后的开发面板中的找到"),a("code",[t._v("开发")]),t._v("，在开发中的"),a("code",[t._v("开发设置")]),t._v("当中就能找到我们小程序唯一的标识符"),a("code",[t._v("AppID")]),t._v(",然后我们打开小程序开发工具，然后创建项目即可，但是注意两个点：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("项目路径")]),t._v("必须是个空文件夹")]),t._v(" "),a("li",[a("code",[t._v("开发模式")]),t._v(" 选择"),a("code",[t._v("小程序云开发")])])]),t._v(" "),a("h3",{attrs:{id:"_2-开通云服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开通云服务"}},[t._v("#")]),t._v(" 2.开通云服务")]),t._v(" "),a("p",[t._v("其实创建好项目后会提示你："),a("code",[t._v("cloud init error: Error: invalid scope 没有权限，请先开通云服务")]),t._v(",所以我们下面来为该项目创建云开发服务。")]),t._v(" "),a("p",[t._v("点击左上角的"),a("code",[t._v("云开发")]),t._v("，然后点击开通，创建环境名称为"),a("code",[t._v("test")]),t._v("的环境，在后面我们正式上线的时候还会创建一个正式环境，当然一个程序只能最多创建两个环境。")]),t._v(" "),a("p",[t._v("开通了云开发一般要等待10-30分钟，因为我们创建好项目后你会发现项目中的"),a("code",[t._v("cloudFuntions")]),t._v("这个文件夹后面显示"),a("code",[t._v("未指定环境")]),t._v("，所以等候足够的时间后我们再重新打开开发者工具，就会在"),a("code",[t._v("cloudFunctions")]),t._v("后面显示"),a("code",[t._v("test")]),t._v("，当然这个也可以点击手动设置环境。")]),t._v(" "),a("h3",{attrs:{id:"_3-代码结构概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码结构概述"}},[t._v("#")]),t._v(" 3. 代码结构概述")]),t._v(" "),a("p",[t._v("重新打开项目，基本的我们就不说了，可以到之前的"),a("a",{attrs:{href:"https://www.taopoppy.cn/WeiXin/weixin_sign.html#%E5%88%9B%E5%BB%BA%E5%92%8C%E4%BB%A3%E7%A0%81%E6%9E%84%E6%88%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序入门和云开发"),a("OutboundLink")],1),t._v("当中去了解一下项目初始化的目录结构.")]),t._v(" "),a("p",[t._v("我们这里先说"),a("code",[t._v("miniprogram/app.js")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLaunch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请使用 2.2.3 或以上的基础库以使用云能力'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// env 参数说明：")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   此处请填入环境 ID, 环境 ID 可打开云控制台查看")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   如不填则使用默认环境（第一个创建的环境）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// env: 'my-env-id',")]),t._v("\n        traceUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("里面有段中文，显示"),a("code",[t._v("请使用2.2.3或者以上的基础库以使用云能力")]),t._v("，我们就点击小程序开发工具右上角的"),a("code",[t._v("详情")]),t._v("，然后点击"),a("code",[t._v("本地设置")]),t._v("，选择基础库的版本为最新即可。")]),t._v(" "),a("li",[a("code",[t._v("env")]),t._v("这个字段就是我们设置环境的，特别要注意，我们最开始创建的"),a("code",[t._v("test")]),t._v("环境，其实"),a("code",[t._v("test")]),t._v("只是名称，这里要填的是环境的"),a("code",[t._v("id")]),t._v("。还有后面我们还可以创建一个正式上线的环境，然后在这里修改"),a("code",[t._v("env")]),t._v("的值就能改变环境，因为每个环境都使用的是独立的资源。所以我们这里修改"),a("code",[t._v("env")]),t._v("为我们自己创建的环境"),a("code",[t._v("id")]),t._v("即可。")]),t._v(" "),a("li",[a("code",[t._v("traceUser")]),t._v("这个字段指的是有人如果访问你的小程序，就会在云开发控制台当中显示出来")]),t._v(" "),a("li",[a("code",[t._v("this.globalData")]),t._v("就是一些全局的变量和函数，我们后面也会使用到这个东西。")])]),t._v(" "),a("p",[t._v("然后我们在"),a("code",[t._v("miniprogram/app.json")]),t._v("当中：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"window"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundColor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#F6F6F6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundTextStyle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"light"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarBackgroundColor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#F6F6F6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"云开发 QuickStart"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTextStyle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"black"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemapLocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemap.json"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("pages")]),t._v(": 就是指页面路由的部分")]),t._v(" "),a("li",[a("code",[t._v("window")]),t._v(": 就是指小程序界面的一些设置")]),t._v(" "),a("li",[a("code",[t._v("sitemapLocation")]),t._v(": 这是新属性是"),a("font",{attrs:{color:"#3eaf7c"}},[t._v("小程序内部开发的一些搜索")]),t._v("，我们后面在优化部分还会涉及到这个东西")],1)]),t._v(" "),a("h3",{attrs:{id:"_4-代码初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-代码初始化"}},[t._v("#")]),t._v(" 4. 代码初始化")]),t._v(" "),a("p",[t._v("我们首先要删除掉所有"),a("code",[t._v("miniprogram/images")]),t._v("和"),a("code",[t._v("miniprogram/pages")]),t._v("当中所有的文件，然后我们要去"),a("code",[t._v("iconfont")]),t._v("上面选择底部导航图标，并放在"),a("code",[t._v("miniprogram/images")]),t._v("文件夹下面，删除"),a("code",[t._v("miniprogram/style/guide.wxss")]),t._v("和"),a("code",[t._v("miniprogram/app.wxss")]),t._v("中的样式代码,然后修改"),a("code",[t._v("miniprogram/app.json")]),t._v("中的内容如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/playlist/playlist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/blog/blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/profile/profile"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"window"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundColor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#F6F6F6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"backgroundTextStyle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"light"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarBackgroundColor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#d43c33"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTitleText"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"音乐"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"navigationBarTextStyle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"white"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tabBar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#474747"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"selectedColor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d43c43"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"list"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pagePath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/playlist/playlist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"音乐"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/music.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"selectedIconPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/music-actived.png"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pagePath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/blog/blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发现"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/blog.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"selectedIconPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/blog-actived.png"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pagePath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/profile/profile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我的"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/profile.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"selectedIconPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/profile-actived.png"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemapLocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sitemap.json"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("基本上就是创建了三个页面和底部的导航栏的按钮部分，然后修改了顶部的颜色和文字，至于每个设置中的字段是神作用，建议到官网去查询一下，我们这里给出官网查询地址：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码规范"}},[t._v("#")]),t._v(" 代码规范")]),t._v(" "),a("p",[t._v("我们要遵循的代码规范我们可以去参考下面的"),a("code",[t._v("github")]),t._v("网址：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/airbnb/javascript"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在这里我们简单的说几条规则：")]),t._v(" "),a("ul",[a("li",[t._v("定义变量尽量用"),a("code",[t._v("let")]),t._v(","),a("code",[t._v("const")]),t._v("，尽量不要使用"),a("code",[t._v("var")])]),t._v(" "),a("li",[t._v("定义对象数组，直接使用字面量的方式，不要使用"),a("code",[t._v("new")]),t._v("方法")]),t._v(" "),a("li",[t._v("定义对象中的方法尽量使用"),a("code",[t._v("funtionName() {}")]),t._v("这种写法，而不是"),a("code",[t._v("functionName: function() {}")])]),t._v(" "),a("li",[t._v("对象中的属性和值一样的条件下使用简写方式")]),t._v(" "),a("li",[t._v("使用箭头函数避免"),a("code",[t._v("this")]),t._v("指向错误，箭头函数的参数尽量使用小括号括起来")]),t._v(" "),a("li",[t._v("项目中不使用分号作为代码结尾")])])])}),[],!1,null,null,null);s.default=e.exports}}]);