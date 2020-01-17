(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{251:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"小程序的语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序的语言"}},[t._v("#")]),t._v(" 小程序的语言")]),t._v(" "),s("h2",{attrs:{id:"wxml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxml"}},[t._v("#")]),t._v(" WXML")]),t._v(" "),s("p",[s("code",[t._v("WXML")]),t._v("的全称是"),s("code",[t._v("WeiXin Markup Language")]),t._v("，是小程序框架设计的一套标签语言，结合小程序的基础组件，事件系统，可以构建出页面的结构，充当的就是类似"),s("code",[t._v("HTML")]),t._v("的角色。在微信当中有自己的一套组件库，我们可以在下面列出的官网地址去查看组件用法和属性信息：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/view.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.weixin.qq.com/miniprogram/dev/component/view.html"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1-数据绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据绑定"}},[t._v("#")]),t._v(" 1. 数据绑定")]),t._v(" "),s("ul",[s("li",[t._v("小程序中的数据一般情况下需要动态的从服务端获取，然后再渲染输出到视图中显示。")]),t._v(" "),s("li",[s("code",[t._v("WXML")]),t._v("中的动态数据均来自对应的"),s("code",[t._v("Page")]),t._v("的"),s("code",[t._v("data")])]),t._v(" "),s("li",[t._v("数据绑定使用"),s("code",[t._v("Mustache")]),t._v("语法（双大括号）将变量包起来")])]),t._v(" "),s("h3",{attrs:{id:"_2-条件渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-条件渲染"}},[t._v("#")]),t._v(" 2. 条件渲染")]),t._v(" "),s("ul",[s("li",[t._v("使用下面这种方式来判断是否需要渲染改代码块，也可以用"),s("code",[t._v("wx:elif")]),t._v("和"),s("code",[t._v("wx:else")]),t._v("来添加一个"),s("code",[t._v("else")]),t._v("块"),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ condition }}"')]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v("hidden")]),t._v("来控制组件的显示与否")]),t._v(" "),s("li",[s("code",[t._v("wx:if")]),t._v("和"),s("code",[t._v("hidden")]),t._v("的区别就是前者条件为真就会显示到"),s("code",[t._v("wxml")]),t._v("当中，条件为否就不会出现在"),s("code",[t._v("wxml")]),t._v("当中，后者是无论条件为真或者为假都会显示到"),s("code",[t._v("wxml")]),t._v("当中，只是通过"),s("code",[t._v("hidden")]),t._v("控制页面的显示与否，这个和"),s("code",[t._v("Vue")]),t._v("中的"),s("code",[t._v("v-if")]),t._v(","),s("code",[t._v("v-else")]),t._v(","),s("code",[t._v("v-show")]),t._v("的区别差不多")]),t._v(" "),s("li",[t._v("所以我们如果会频繁的变更显示与否应该使用"),s("code",[t._v("hidden")]),t._v(",否则使用"),s("code",[t._v("wx:if")])])]),t._v(" "),s("h2",{attrs:{id:"wxss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxss"}},[t._v("#")]),t._v(" WXSS")]),t._v(" "),s("p",[s("code",[t._v("WXSS")]),t._v("全称是"),s("code",[t._v("WeiXin Styles Sheets")]),t._v("，是一套用于小程序的样式语言，用于描述WXML的组件样式，也是视觉上的效果。它有两个要注意的点，如下：")]),t._v(" "),s("ul",[s("li",[t._v("尺寸单位："),s("font",{attrs:{color:"#3eaf7c"}},[t._v("rpx")]),t._v("可以根据屏幕宽度进行自适应，适配不同宽度的屏幕")],1),t._v(" "),s("li",[t._v("引入外部"),s("code",[t._v("wxss")]),t._v(": "),s("font",{attrs:{color:"#3eaf7c"}},[s("code",[t._v("@import './test_0.wxss'")])])],1)]),t._v(" "),s("h3",{attrs:{id:"_1-尺寸单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-尺寸单位"}},[t._v("#")]),t._v(" 1. 尺寸单位")]),t._v(" "),s("p",[t._v("我们首先要说的是官网上关于"),s("code",[t._v("rpx")]),t._v("的一段解释：\n"),s("code",[t._v("rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素")])]),t._v(" "),s("p",[t._v("上面这段解释简单的就是说: "),s("font",{attrs:{color:"#3eaf7c"}},[t._v("使用rpx就表示无论什么宽度的屏幕都分为750rpx，也就是分为750份")]),t._v("，而且通常我们都是建议按照iphone6去做像素稿单位，因为iphone的像素是"),s("code",[t._v("375")]),t._v("，这样和"),s("code",[t._v("750")]),t._v("好换算，非常方便。")],1),t._v(" "),s("h3",{attrs:{id:"_2-引入样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入样式"}},[t._v("#")]),t._v(" 2. 引入样式")]),t._v(" "),s("p",[t._v("基本上我们都会在项目的"),s("code",[t._v("Styles")]),t._v("目录下面去写一些公共的样式，所以我们假如页面中需要，就在"),s("code",[t._v(".wxss")]),t._v("文件中使用"),s("code",[t._v("@import '../../style/common.wxss'")]),t._v("这种方式去引入样式，但是特别要注意的是这个路径是"),s("font",{attrs:{color:"#3eaf7c"}},[t._v("相对路径")]),t._v("，相对路径指的就是相对自己当前文件，引入的文件的路径地址。")],1),t._v(" "),s("p",[t._v("除此之外我们通常会引入第三方的样式库，我们下面列举一下比较好的样式库：")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("WeUI")]),t._v(": 同微信原生视觉效果体验一致的基础样式库")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("iView")]),t._v(": 除了有微信的组件库还有PC端的组件库，还有后端管理系统")],1),t._v(" "),s("li",[s("font",{attrs:{color:"#3eaf7c"}},[t._v("Vant")]),t._v("： 除了有微信的组件库还有PC端的组件库，轻量可靠")],1)]),t._v(" "),s("h2",{attrs:{id:"js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" JS")]),t._v(" "),s("p",[t._v("首先事件处理我们可以在下面列出的官网地址去学习一下：简单的说和Vue当中的差不多，通过在组件上绑定相应事件的处理函数，然后在"),s("code",[t._v("js")]),t._v("文件中写处理函数即可")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1-事件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件机制"}},[t._v("#")]),t._v(" 1. 事件机制")]),t._v(" "),s("p",[t._v("比如在"),s("code",[t._v(".wxml")]),t._v("文件中有一端这样的函数：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mini"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onTapHandlerAdd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点我+1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mini"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onTapHandlerSub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点我-1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{count}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后我们在"),s("code",[t._v(".js")]),t._v("文件中添加两个处理函数: "),s("font",{attrs:{color:"#3eaf7c"}},[t._v("特别要注意修改数据要通过this.setData")]),t._v("，这一点和"),s("code",[t._v("React")]),t._v("是十分相似的")],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 计数器点击+1事件\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onTapHandlerAdd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 计数器点击-1事件\n */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onTapHandlerSub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-bind-vs-catch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-bind-vs-catch"}},[t._v("#")]),t._v(" 2. bind VS catch")]),t._v(" "),s("p",[t._v("首先我们知道"),s("font",{attrs:{color:"#3eaf7c"}},[t._v("事件是对用户的交互操作行为的响应")]),t._v("，事件绑定我们在上面只说了"),s("code",[t._v("bind")]),t._v(",还有一种"),s("code",[t._v("catch")]),t._v(",我们在前端开发之中学到过"),s("font",{attrs:{color:"#3eaf7c"}},[t._v("事件冒泡")]),t._v("，最简单的例子就是子元素触发了点击事件，事件会冒泡到父元素，也就是父元素的点击事件也会被触发，那么我们在前端可以通过"),s("code",[t._v("e.stopPropagation()")]),t._v("阻止事件冒泡，但是在小程序当中很简单，"),s("font",{attrs:{color:"#3eaf7c"}},[t._v("我们可以通过catch阻止事件冒泡")]),t._v("，如下")],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件冒泡")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("view "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),t._v(" bindtap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boxTap"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("view "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"childbox"')]),t._v(" bindtap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"childrenboxTap"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止事件冒泡")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("view "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),t._v(" catchtap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boxTap"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("view "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"childbox"')]),t._v(" catchtap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"childrenboxTap"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-事件对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件对象"}},[t._v("#")]),t._v(" 3. 事件对象")]),t._v(" "),s("p",[t._v("总的来说："),s("font",{attrs:{color:"#3eaf7c"}},[t._v("事件对象就是事件的状态")]),t._v("，当组件绑定的事件被触发后，就会传递这样一个事件对象到事件触发处理函数当中，我们在处理函数当中可以打印出事件对象有哪些属性：")],1),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("changedTouches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ncurrentTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("510")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前组件属性集合")]),t._v("\ndetail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("149")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("545")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetTop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("510")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发事件的组件的属性的集合")]),t._v("\ntimeStamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2479")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件戳")]),t._v("\ntouches"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tap"')]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件类型")]),t._v("\n_requireActive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object\n")])])]),s("p",[t._v("然后比如我们要自定义一个属性在组件当中，比如"),s("code",[t._v('data-id="1234"')]),t._v("，我们在触发事件的处理函数中，这个自定义属性的值我们能在"),s("code",[t._v("target/dataset/id")]),t._v("当中找到"),s("code",[t._v('"1234"')]),t._v("这个值，如下：在"),s("code",[t._v(".wxml")]),t._v("中设置自定义属性"),s("code",[t._v("data-id")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("catchtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("boxTap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1234"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后在"),s("code",[t._v(".js")]),t._v("文件的"),s("code",[t._v("boxTap")]),t._v("事件触发处理函数当中通过"),s("code",[t._v("event")]),t._v("对象可以拿到自定义属性的值：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("boxTap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1234")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);