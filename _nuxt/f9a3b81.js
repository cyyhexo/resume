(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1556:function(t,n,e){var content=e(1584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(149).default)("43429492",content,!0,{sourceMap:!1})},1583:function(t,n,e){"use strict";e(1556)},1584:function(t,n,e){var o=e(148)(!1);o.push([t.i,"tr:last-child td{padding-bottom:0}.time{color:#2d8cf0;font-size:16px}.content,.time{font-weight:700}.content{padding-left:12px;font-size:14px}",""]),t.exports=o},1613:function(t,n,e){"use strict";e.r(n);e(119),e(166),e(150),e(110);var o=e(425),r={name:"Introduction",data:function(){return{introduction:o.introduction,milestone:o.milestone,distinctPlatform:[]}},mounted:function(){var t=this;this.milestone=o.milestone.map((function(n){return t.distinctPlatform.includes(n.platform)||t.distinctPlatform.push(n.platform),n})),this.distinctPlatform.sort((function(a,b){var n=t.milestone.filter((function(t){return t.platform===a})).length;return t.milestone.filter((function(t){return t.platform===b})).length-n})),this.milestone.sort((function(a,b){return new Date(a)-new Date(b)}))},methods:{maskedContent:function(content){return null==content?this.$t("introduction.secret"):content}}},l=(e(1583),e(147)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-page-header",{staticStyle:{border:"1px solid rgb(235, 237, 240)"},attrs:{title:t.introduction.nick_name,"sub-title":t.introduction.motto}},[e("template",{slot:"footer"},[e("a-divider",[t._v(" "+t._s(t.$t("navigation.milestone"))+" ")]),t._v(" "),e("a-tabs",{attrs:{"default-active-key":"0"}},t._l(t.distinctPlatform,(function(n,o){return e("a-tab-pane",{key:o,attrs:{tab:n}},[e("div",{staticStyle:{"margin-top":"20px"}}),t._v(" "),e("a-timeline",{attrs:{pending:t.$t("milestone.pending"),reverse:!0}},t._l(t.milestone.filter((function(t){return t.platform===n})),(function(n){return e("a-timeline-item",{key:n.id},[e("p",{staticClass:"time"},[t._v("\n                "+t._s(n.date)+"\n              ")]),t._v(" "),e("p",{staticClass:"content"},[t._v("\n                "+t._s(n.milestone)+"\n              ")])])})),1)],1)})),1)],1)],2)],1)}),[],!1,null,null,null);n.default=component.exports}}]);