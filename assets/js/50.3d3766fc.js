(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{381:function(t,s,e){"use strict";e.r(s);var a=e(12),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_09-说说flexbox-弹性盒布局模型-以及适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_09-说说flexbox-弹性盒布局模型-以及适用场景"}},[t._v("#")]),t._v(" 09.说说flexbox（弹性盒布局模型）,以及适用场景？")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112037418",alt:"图片"}})]),t._v(" "),s("h2",{attrs:{id:"一、是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[t._v("#")]),t._v(" 一、是什么")]),t._v(" "),s("p",[s("code",[t._v("Flexible Box")]),t._v(" 简称 "),s("code",[t._v("flex")]),t._v("，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局")]),t._v(" "),s("p",[t._v("采用Flex布局的元素，称为"),s("code",[t._v("flex")]),t._v("容器"),s("code",[t._v("container")])]),t._v(" "),s("p",[t._v("它的所有子元素自动成为容器成员，称为"),s("code",[t._v("flex")]),t._v("项目"),s("code",[t._v("item")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112042430",alt:"图片"}})]),t._v(" "),s("p",[t._v("容器中默认存在两条轴，主轴和交叉轴，呈90度关系。项目默认沿主轴排列，通过"),s("code",[t._v("flex-direction")]),t._v("来决定主轴的方向")]),t._v(" "),s("p",[t._v("每根轴都有起点和终点，这对于元素的对齐非常重要")]),t._v(" "),s("h2",{attrs:{id:"二、属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、属性"}},[t._v("#")]),t._v(" 二、属性")]),t._v(" "),s("p",[t._v("关于"),s("code",[t._v("flex")]),t._v("常用的属性，我们可以划分为容器属性和容器成员属性")]),t._v(" "),s("p",[t._v("容器属性有：")]),t._v(" "),s("ul",[s("li",[t._v("flex-direction")]),t._v(" "),s("li",[t._v("flex-wrap")]),t._v(" "),s("li",[t._v("flex-flow")]),t._v(" "),s("li",[t._v("justify-content")]),t._v(" "),s("li",[t._v("align-items")]),t._v(" "),s("li",[t._v("align-content")])]),t._v(" "),s("h3",{attrs:{id:"flex-direction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[t._v("#")]),t._v(" flex-direction")]),t._v(" "),s("p",[t._v("决定主轴的方向(即项目的排列方向)")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row | row-reverse | column | column-reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("p",[t._v("属性对应如下：")]),t._v(" "),s("ul",[s("li",[t._v("row（默认值）：主轴为水平方向，起点在左端")]),t._v(" "),s("li",[t._v("row-reverse：主轴为水平方向，起点在右端")]),t._v(" "),s("li",[t._v("column：主轴为垂直方向，起点在上沿。")]),t._v(" "),s("li",[t._v("column-reverse：主轴为垂直方向，起点在下沿")])]),t._v(" "),s("p",[t._v("如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112047969",alt:"图片"}})]),t._v(" "),s("h3",{attrs:{id:"flex-wrap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[t._v("#")]),t._v(" flex-wrap")]),t._v(" "),s("p",[t._v("弹性元素永远沿主轴排列，那么如果主轴排不下，通过"),s("code",[t._v("flex-wrap")]),t._v("决定容器内项目是否可换行")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("p",[t._v("属性对应如下：")]),t._v(" "),s("ul",[s("li",[t._v("nowrap（默认值）：不换行")]),t._v(" "),s("li",[t._v("wrap：换行，第一行在上方")]),t._v(" "),s("li",[t._v("wrap-reverse：换行，第一行在下方")])]),t._v(" "),s("p",[t._v("默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩")]),t._v(" "),s("h3",{attrs:{id:"flex-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[t._v("#")]),t._v(" flex-flow")]),t._v(" "),s("p",[t._v("是"),s("code",[t._v("flex-direction")]),t._v("属性和"),s("code",[t._v("flex-wrap")]),t._v("属性的简写形式，默认值为"),s("code",[t._v("row nowrap")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <flex-direction> || <flex-wrap>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"justify-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[t._v("#")]),t._v(" justify-content")]),t._v(" "),s("p",[t._v("定义了项目在主轴上的对齐方式")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("属性对应如下：")]),t._v(" "),s("ul",[s("li",[t._v("flex-start（默认值）：左对齐")]),t._v(" "),s("li",[t._v("flex-end：右对齐")]),t._v(" "),s("li",[t._v("center：居中")]),t._v(" "),s("li",[t._v("space-between：两端对齐，项目之间的间隔都相等")]),t._v(" "),s("li",[t._v("space-around：两个项目两侧间隔相等")])]),t._v(" "),s("p",[t._v("效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112052466",alt:"图片"}})]),t._v(" "),s("h3",{attrs:{id:"align-items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[t._v("#")]),t._v(" align-items")]),t._v(" "),s("p",[t._v("定义项目在交叉轴上如何对齐")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | baseline | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("属性对应如下：")]),t._v(" "),s("ul",[s("li",[t._v("flex-start：交叉轴的起点对齐")]),t._v(" "),s("li",[t._v("flex-end：交叉轴的终点对齐")]),t._v(" "),s("li",[t._v("center：交叉轴的中点对齐")]),t._v(" "),s("li",[t._v("baseline: 项目的第一行文字的基线对齐")]),t._v(" "),s("li",[t._v("stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度")])]),t._v(" "),s("h3",{attrs:{id:"align-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[t._v("#")]),t._v(" align-content")]),t._v(" "),s("p",[t._v("定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("属性对应如吓：")]),t._v(" "),s("ul",[s("li",[t._v("flex-start：与交叉轴的起点对齐")]),t._v(" "),s("li",[t._v("flex-end：与交叉轴的终点对齐")]),t._v(" "),s("li",[t._v("center：与交叉轴的中点对齐")]),t._v(" "),s("li",[t._v("space-between：与交叉轴两端对齐，轴线之间的间隔平均分布")]),t._v(" "),s("li",[t._v("space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍")]),t._v(" "),s("li",[t._v("stretch（默认值）：轴线占满整个交叉轴")])]),t._v(" "),s("p",[t._v("效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112101471",alt:"图片"}})]),t._v(" "),s("p",[t._v("容器成员属性如下：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("order")])]),t._v(" "),s("li",[s("code",[t._v("flex-grow")])]),t._v(" "),s("li",[s("code",[t._v("flex-shrink")])]),t._v(" "),s("li",[s("code",[t._v("flex-basis")])]),t._v(" "),s("li",[s("code",[t._v("flex")])]),t._v(" "),s("li",[s("code",[t._v("align-self")])])]),t._v(" "),s("h3",{attrs:{id:"order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[t._v("#")]),t._v(" order")]),t._v(" "),s("p",[t._v("定义项目的排列顺序。数值越小，排列越靠前，默认为0")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <integer>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"flex-grow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[t._v("#")]),t._v(" flex-grow")]),t._v(" "),s("p",[t._v("上面讲到当容器设为"),s("code",[t._v("flex-wrap: nowrap;")]),t._v("不换行的时候，容器宽度有不够分的情况，弹性元素会根据"),s("code",[t._v("flex-grow")]),t._v("来决定")]),t._v(" "),s("p",[t._v("定义项目的放大比例（容器宽度>元素总宽度时如何伸展）")]),t._v(" "),s("p",[t._v("默认为"),s("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果所有项目的"),s("code",[t._v("flex-grow")]),t._v("属性都为1，则它们将等分剩余空间（如果有的话）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112107792",alt:"图片"}})]),t._v(" "),s("p",[t._v("如果一个项目的"),s("code",[t._v("flex-grow")]),t._v("属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/gH31uF9VIibTIiblcncGjfq4jMdIeWJCrwyWvuNuNXELG4nPcQiamP4KPDycSLT8yeG61AHpM6k4AZV4XAKY45Gjg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),t._v(" "),s("p",[t._v("弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论"),s("code",[t._v("flex-grow")]),t._v("是什么值都不会生效")]),t._v(" "),s("h3",{attrs:{id:"flex-shrink"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[t._v("#")]),t._v(" flex-shrink")]),t._v(" "),s("p",[t._v("定义了项目的缩小比例（容器宽度<元素总宽度时如何收缩），默认为1，即如果空间不足，该项目将缩小")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 1 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果所有项目的"),s("code",[t._v("flex-shrink")]),t._v("属性都为1，当空间不足时，都将等比例缩小")]),t._v(" "),s("p",[t._v("如果一个项目的"),s("code",[t._v("flex-shrink")]),t._v("属性为0，其他项目都为1，则空间不足时，前者不缩小")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112112500",alt:"图片"}})]),t._v(" "),s("p",[t._v("在容器宽度有剩余时，"),s("code",[t._v("flex-shrink")]),t._v("也是不会生效的")]),t._v(" "),s("h3",{attrs:{id:"flex-basis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[t._v("#")]),t._v(" flex-basis")]),t._v(" "),s("p",[t._v("设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在"),s("code",[t._v("flex-grow")]),t._v("和"),s("code",[t._v("flex-shrink")]),t._v("生效前的尺寸")]),t._v(" "),s("p",[t._v("浏览器根据这个属性，计算主轴是否有多余空间，默认值为"),s("code",[t._v("auto")]),t._v("，即项目的本来大小，如设置了"),s("code",[t._v("width")]),t._v("则元素尺寸由"),s("code",[t._v("width/height")]),t._v("决定（主轴方向），没有设置则由内容决定")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <length> | auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default auto */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当设置为0的是，会根据内容撑开")]),t._v(" "),s("p",[t._v("它可以设为跟"),s("code",[t._v("width")]),t._v("或"),s("code",[t._v("height")]),t._v("属性一样的值（比如350px），则项目将占据固定空间")]),t._v(" "),s("h3",{attrs:{id:"flex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" flex")]),t._v(" "),s("p",[s("code",[t._v("flex")]),t._v("属性是"),s("code",[t._v("flex-grow")]),t._v(", "),s("code",[t._v("flex-shrink")]),t._v(" 和 "),s("code",[t._v("flex-basis")]),t._v("的简写，默认值为"),s("code",[t._v("0 1 auto")]),t._v("，也是比较难懂的一个复合属性")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-grow'")]),t._v("> <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-shrink'")]),t._v(">? || <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-basis'")]),t._v("> ]\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("一些属性有：")]),t._v(" "),s("ul",[s("li",[t._v("flex: 1 = flex: 1 1 0%")]),t._v(" "),s("li",[t._v("flex: 2 = flex: 2 1 0%")]),t._v(" "),s("li",[t._v("flex: auto = flex: 1 1 auto")]),t._v(" "),s("li",[t._v("flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩")])]),t._v(" "),s("p",[s("code",[t._v("flex:1")]),t._v(" 和 "),s("code",[t._v("flex:auto")]),t._v(" 的区别，可以归结于"),s("code",[t._v("flex-basis:0")]),t._v("和"),s("code",[t._v("flex-basis:auto")]),t._v("的区别")]),t._v(" "),s("p",[t._v("当设置为0时（绝对弹性元素），此时相当于告诉"),s("code",[t._v("flex-grow")]),t._v("和"),s("code",[t._v("flex-shrink")]),t._v("在伸缩的时候不需要考虑我的尺寸")]),t._v(" "),s("p",[t._v("当设置为"),s("code",[t._v("auto")]),t._v("时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑")]),t._v(" "),s("p",[t._v("注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值")]),t._v(" "),s("h3",{attrs:{id:"align-self"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[t._v("#")]),t._v(" align-self")]),t._v(" "),s("p",[t._v("允许单个项目有与其他项目不一样的对齐方式，可覆盖"),s("code",[t._v("align-items")]),t._v("属性")]),t._v(" "),s("p",[t._v("默认值为"),s("code",[t._v("auto")]),t._v("，表示继承父元素的"),s("code",[t._v("align-items")]),t._v("属性，如果没有父元素，则等同于"),s("code",[t._v("stretch")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/img/640-20210928112117276",alt:"图片"}})]),t._v(" "),s("h2",{attrs:{id:"三、应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、应用场景"}},[t._v("#")]),t._v(" 三、应用场景")]),t._v(" "),s("p",[t._v("在以前的文章中，我们能够通过"),s("code",[t._v("flex")]),t._v("简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过"),s("code",[t._v("flex")]),t._v("完成，这里就不再展开代码的演示")]),t._v(" "),s("p",[t._v("包括现在在移动端、小程序这边的开发，都建议使用"),s("code",[t._v("flex")]),t._v("进行布局")]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex")]),t._v(" "),s("li",[t._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html")])])])}),[],!1,null,null,null);s.default=v.exports}}]);