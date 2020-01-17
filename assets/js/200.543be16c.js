(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{271:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue的核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的核心概念"}},[t._v("#")]),t._v(" Vue的核心概念")]),t._v(" "),s("p",[t._v("我们在了解三个重要的核心概念之前，还是要重新温习一下什么是组件："),s("font",{attrs:{color:"#DD1144"}},[t._v("组件就是一个个独立的，可复用的UI模块")])],1),t._v(" "),s("p",[t._v("所以"),s("code",[t._v("Vue")]),t._v("中的组件就是一个个的"),s("font",{attrs:{color:"#1E90FF"}},[t._v("Vue实例")]),t._v("，"),s("code",[t._v("Vue")]),t._v("实例就是通过"),s("font",{attrs:{color:"#1E90FF"}},[t._v("new Vue(options)")]),t._v("创造出来的东西，所以我们写"),s("code",[t._v("Vue")]),t._v("组件实际做的工作就是去配置一个个实例组件要传入的 "),s("font",{attrs:{color:"#1E90FF"}},[t._v("options")])],1),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("Vue组件")]),t._v(" = "),s("font",{attrs:{color:"#DD1144"}},[t._v("Vue实例")]),t._v(" = "),s("font",{attrs:{color:"#DD1144"}},[t._v("new Vue("),s("font",{attrs:{color:"#3eaf7c"}},[t._v("options")]),t._v(")")],1)],1)]),t._v(" "),s("h2",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("h3",{attrs:{id:"_1-自定义属性props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义属性props"}},[t._v("#")]),t._v(" 1. 自定义属性props")]),t._v(" "),s("p",[t._v("自定义属性就是："),s("font",{attrs:{color:"#DD1144"}},[t._v("组件props中声明的属性")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("① props的用法")])])],1),t._v(" "),s("p",[t._v("那基本上官网给的例子已经是我们写"),s("code",[t._v("props")]),t._v("所有可能的用法了")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)")]),t._v("\n    propA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多个可能的类型")]),t._v("\n    propB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必填的字符串")]),t._v("\n    propC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      required"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带有默认值的数字")]),t._v("\n    propD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带有默认值的对象")]),t._v("\n    propE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象或数组默认值必须从一个工厂函数获取")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义验证函数")]),t._v("\n    propF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("validator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个值必须匹配下列字符串中的一个")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'danger'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("font",{attrs:{color:"#1E90FF"}},[s("strong",[t._v("② 单项数据流")])])],1),t._v(" "),s("p",[t._v("官网是这样介绍"),s("code",[t._v("props")]),t._v("和单项数据流的："),s("font",{attrs:{color:"#1E90FF"}},[t._v("所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。")])],1),t._v(" "),s("p",[t._v("["),s("font",{attrs:{color:"#ff6100"}},[t._v("思考问题")]),t._v("]：自组件为何不可以修改父组件传递的"),s("code",[t._v("Prop")]),t._v("，如果修改了，"),s("code",[t._v("Vue")]),t._v("是如何监控到属性的修改并给出警告的。")],1),t._v(" "),s("h3",{attrs:{id:"_2-原生属性attrs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-原生属性attrs"}},[t._v("#")]),t._v(" 2. 原生属性attrs")]),t._v(" "),s("p",[t._v("原生属性就是： "),s("font",{attrs:{color:"#DD1144"}},[t._v("没有声明的属性，默认自动挂载到组件根元素上，设置inheritAttrs为false可以关闭的自动挂载")])],1),t._v(" "),s("h3",{attrs:{id:"_3-特殊属性class等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-特殊属性class等"}},[t._v("#")]),t._v(" 3. 特殊属性class等")]),t._v(" "),s("ul",[s("li",[t._v("特殊属性就是："),s("font",{attrs:{color:"#DD1144"}},[t._v("挂载到组件根元素上，支持字符串，对象，数组等多种语法")])],1),t._v(" "),s("li",[t._v("特殊属性有："),s("font",{attrs:{color:"#1E90FF"}},[t._v("class")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("style")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("ref")]),t._v("、"),s("font",{attrs:{color:"#1E90FF"}},[t._v("key")]),t._v("等等")],1)]),t._v(" "),s("h2",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("h3",{attrs:{id:"_1-普通事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通事件"}},[t._v("#")]),t._v(" 1.普通事件")]),t._v(" "),s("p",[t._v("普通事件是指："),s("font",{attrs:{color:"#DD1144"}},[t._v("@click、@input、@change、@xxx等事件，通过this.$emit('xxx',...)触发")])],1),t._v(" "),s("h3",{attrs:{id:"_2-修饰符事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修饰符事件"}},[t._v("#")]),t._v(" 2. 修饰符事件")]),t._v(" "),s("p",[t._v("修饰符事件指："),s("font",{attrs:{color:"#DD1144"}},[t._v("@input.trim、@click.stop、@submit.prevent等等，一般用于原生HTML元素，自定义组件需要自定义")])],1),t._v(" "),s("p",[t._v("["),s("font",{attrs:{color:"#ff6100"}},[t._v("思考问题")]),t._v("]："),s("code",[t._v("this.$emit")]),t._v("的返回值是什么")],1),t._v(" "),s("h2",{attrs:{id:"插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),s("h3",{attrs:{id:"_1-普通插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通插槽"}},[t._v("#")]),t._v(" 1. 普通插槽")]),t._v(" "),s("ul",[s("li",[t._v("2.5旧式写法："),s("code",[t._v('<template slot="xxx">...</template>')])]),t._v(" "),s("li",[t._v("2.6新式写法："),s("code",[t._v('<template v-slot:"xxx">...</template>')])])]),t._v(" "),s("h3",{attrs:{id:"_2-作用域插槽"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-作用域插槽"}},[t._v("#")]),t._v(" 2.作用域插槽")]),t._v(" "),s("ul",[s("li",[t._v("2.5旧式写法："),s("code",[t._v('<template slot="xxx" slot-scope="props">...</template>')])]),t._v(" "),s("li",[t._v("2.6新式写法："),s("code",[t._v('<template v-slot:"xxx"="props">...</template>')])])]),t._v(" "),s("h2",{attrs:{id:"双向绑定和单项数据流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定和单项数据流"}},[t._v("#")]),t._v(" 双向绑定和单项数据流")]),t._v(" "),s("ul",[s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("双向绑定")]),t._v("："),s("code",[t._v("model")]),t._v("更新"),s("code",[t._v("view")]),t._v(",反过来"),s("code",[t._v("view")]),t._v("也能更新"),s("code",[t._v("model")])],1),t._v(" "),s("li",[s("font",{attrs:{color:"#DD1144"}},[t._v("单项数据流")]),t._v("："),s("code",[t._v("model")]),t._v("更新"),s("code",[t._v("view")]),t._v("，但是"),s("code",[t._v("view")]),t._v("的更新和"),s("code",[t._v("model")]),t._v("没有啥关系")],1)]),t._v(" "),s("p",[t._v("那么我们常常说的"),s("code",[t._v("vue")]),t._v("到底是双向绑定还是单项数据流？因为这两者并不可能共存，那实际真相是："),s("font",{attrs:{color:"#1E90FF"}},[t._v("vue是单向数据流，并不是双向绑定，人们通常说的Vue的双向绑定只不过是一中语法糖")])],1),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PersonalInfo")]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("phoneInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":zip-code.sync")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zipCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PersonalInfo")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":phone-info")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("phoneInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("val => { phoneInfo = val }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":zip-code")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zipCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("@update:")]),t._v("zipCode")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("val => { zipCode =val }"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("所以通常面试当中的关于"),s("code",[t._v("Vue")]),t._v("的双向绑定会说和"),s("code",[t._v("Object.defineProperty")]),t._v("有关，但是实际上，"),s("font",{attrs:{color:"#1E90FF"}},[t._v("Object.defineProperty是用来做响应式更新的，和双向绑定没有什么关系")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);