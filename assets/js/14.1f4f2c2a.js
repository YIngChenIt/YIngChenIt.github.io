(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{237:function(t,s,a){t.exports=a.p+"assets/img/sticky.abb5ab82.gif"},238:function(t,s,a){t.exports=a.p+"assets/img/sticky.656f8c75.png"},310:function(t,s,a){"use strict";a.r(s);var r=a(0),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"【小技巧】-滚动置顶还能这么玩"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#【小技巧】-滚动置顶还能这么玩"}},[t._v("#")]),t._v(" 【小技巧】-滚动置顶还能这么玩")]),t._v(" "),r("h2",{attrs:{id:"需求描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需求描述"}},[t._v("#")]),t._v(" 需求描述")]),t._v(" "),r("p",[t._v("前段时间接到一个小的需求，一个tab在滚动到顶部的时候置顶，然后当页面向上滑动到一定位置的时候置顶效果消失，我们来看一下示意图:\n"),r("img",{attrs:{src:a(237),alt:"An image"}})]),t._v(" "),r("h2",{attrs:{id:"通过js来实现-旧方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通过js来实现-旧方案"}},[t._v("#")]),t._v(" 通过js来实现(旧方案)")]),t._v(" "),r("p",[t._v("好吧，拿到需求就开始一顿敲，最开始的版本通过纯js的方式实现了这个效果，demo代码如下:")]),t._v(" "),r("div",{staticClass:"language-JS extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("br"),r("br"),r("div",{staticClass:"highlighted"},[t._v(" ")]),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOCTYPE")]),t._v(" html"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html lang"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta charset"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta name"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width, initial-scale=1.0"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta http"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("equiv"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X-UA-Compatible"')]),t._v(" content"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ie=edge"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Document"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("title"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("head"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    margin"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    padding"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("box "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    height"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    background"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" red"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("box "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    height"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v("px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottom"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("box "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    height"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top-box"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bottom-box"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" box "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'box'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" offsetTop "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" box"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop\n        window"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onscroll")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面滚动的距离")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" scrollTop "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n            console"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTop"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" offsetTop"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollTop "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" offsetTop"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             box"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed'")]),t._v("\n             box"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n             box"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n             box"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             box"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'relative'")]),t._v("\n            "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("body"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),r("p",[t._v("其实代码很简单，通过当前滚动的高度和元素渲染时候距离顶部的高度进行比较，改变元素的position属性就可以实现这个效果。但是在code-review的时候，组内其他成员的评论中涉及到了一种新的好玩的方法，2行代码就可以实现这个效果，作为一个“负责的程序员”，研究了一手.")]),t._v(" "),r("h2",{attrs:{id:"position-sticky"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#position-sticky"}},[t._v("#")]),t._v(" position: sticky")]),t._v(" "),r("p",[t._v("其实我们想实现这个效果，只需要在对应的元素上添加以下两行css就可以了")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("div",{staticClass:"highlight-lines"},[r("br"),r("br"),r("br")]),r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("    position"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" sticky"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    top"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[r("code",[t._v("position : sticky")]),t._v("是css定位新增属性；可以说是相对定位relative和固定定位fixed的结合；它主要用在对scroll事件的监听上；简单来说，在滑动过程中，某个元素距离其父元素的距离达到sticky粘性定位的要求时(比如top：100px)；position:sticky这时的效果相当于fixed定位，固定到适当位置。")]),t._v(" "),r("h2",{attrs:{id:"position-sticky-的不足"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#position-sticky-的不足"}},[t._v("#")]),t._v(" position: sticky 的不足")]),t._v(" "),r("p",[t._v("但是这个属性也不是想象中的这么好用，还是有一定的限制条件的，如:")]),t._v(" "),r("ul",[r("li",[t._v("父元素不能overflow:hidden或者overflow:auto属性。")]),t._v(" "),r("li",[t._v("必须指定top、bottom、left、right4个值之一，否则只会处于相对定位")]),t._v(" "),r("li",[t._v("父元素的高度不能低于sticky元素的高度")]),t._v(" "),r("li",[t._v("sticky元素仅在其父元素内生效")])]),t._v(" "),r("p",[t._v("而且，对于处于移动端开发小组的我来说，使用这个属性最重要的一点就是这个属性的兼容性了，我们看一下这个的兼容性")]),t._v(" "),r("p",[r("img",{attrs:{src:a(238),alt:"An image"}})]),t._v(" "),r("p",[t._v("emmmmmmm好像兼容性不是很好，而且看了网上一些同学说这个属性对安卓系统的兼容有点惨，作为一个合格的程序员，默默的选择后者，兼容bug来了再说嘛。")]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("对于需要考虑多种兼容性的情况下，还是老老实实的通过js来实现，如果再兼容条件允许的情况下，后者是很好的一个选择。")])])}),[],!1,null,null,null);s.default=n.exports}}]);