(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{261:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"上传到服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传到服务器"}},[t._v("#")]),t._v(" 上传到服务器")]),t._v(" "),a("h2",{attrs:{id:"上传到github-方法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传到github-方法一"}},[t._v("#")]),t._v(" 上传到github(方法一)")]),t._v(" "),a("ol",[a("li",[t._v("在github上创建username.github.io的项目(这里的username指你的github用户名，我的是taopoppy，所以我创建的项目名称就是taopoppy.github.io),特别要注意的是这个命名方式是固定的，以这种形式创建项目，github就会自动开启Code Page功能，能直接通过域名https://username.github.io 访问你项目中的静态文件")]),t._v(" "),a("li",[t._v("在本地的vuepress项目中添加deploy.sh文件,内容如下：")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:taopoppy/taopoppy.github.io.git master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在package.json中添加命令，如下：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("docs:dev")]),t._v("是用来在本地启动项目的命令")]),t._v(" "),a("li",[a("code",[t._v("docs:build")]),t._v("是用来打包的，打包的文件在docs/.vuepress/dist目录下")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("在项目目录blog中执行: bash deploy.sh")])]),t._v(" "),a("h2",{attrs:{id:"上传到github-方法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传到github-方法二"}},[t._v("#")]),t._v(" 上传到github(方法二)")]),t._v(" "),a("ol",[a("li",[t._v("在github当中创建一个myvuepress的项目")]),t._v(" "),a("li",[t._v("在本地的vuepress项目中添加deploy.sh文件,内容如下：")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:taopoppy/taopoppy.github.io.git master")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:taopoppy/myvuepress.git master:gh-pages\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("我们需要在.vuepress/config中配置")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/myvuepress/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("在项目目录blog中执行:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bash deploy.sh\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("访问的路径就不再是taopoppy.github.io,而是taopoppy.github.io/myvuepress")])]),t._v(" "),a("h2",{attrs:{id:"绑定到独立的域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定到独立的域名"}},[t._v("#")]),t._v(" 绑定到独立的域名")]),t._v(" "),a("ol",[a("li",[t._v("买域名www.taopoppy.cn(这里是我买的域名，你自己需要买你自己的域名，买域名推荐到"),a("a",{attrs:{href:"https://wanwang.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("万网"),a("OutboundLink")],1),t._v(",在首页先查询并购买即可)")]),t._v(" "),a("li",[t._v("在控制台上ping出taopoppy.github.io的IP(这里将taopoppy.github.io换成你github的账号usename.github.io)")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ping taopoppy.github.io\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("DNS解析：添加记录主机记录@和www,记录值为上面解析出的IP,如果你不会的话，参照"),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/29716.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("回到github,在setting中的custom domain中添加www.taopoppy.cn，然后项目中会多出一个CNAME的文件，内容就是")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("www.taopoppy.cn\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);