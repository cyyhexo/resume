(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1561:function(t,n,e){var content=e(1594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(149).default)("3321505c",content,!0,{sourceMap:!1})},1593:function(t,n,e){"use strict";e(1561)},1594:function(t,n,e){var r=e(148)(!1);r.push([t.i,".event[data-v-7b8ac273]{color:#2d8cf0;font-size:16px;font-weight:700}.date[data-v-7b8ac273]{font-weight:700}.content[data-v-7b8ac273],.date[data-v-7b8ac273]{padding-left:12px;margin-top:6px}.content[data-v-7b8ac273]{color:#b6c3d7;font-size:12px}.related[data-v-7b8ac273]{color:#8fb2f6;padding-left:9px;font-size:9px}",""]),t.exports=r},1624:function(t,n,e){"use strict";e.r(n);var r=e(131),o=(e(119),e(110),e(122),e(86),e(109),e(103),e(134),e(120),e(121),e(425));function c(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(f)throw o}}}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var f={name:"Life",data:function(){return{life:o.life,rawData:[],showData:[],group:[],dsu:[],selecting:!1}},mounted:function(){this.rawData=Object(r.a)(o.life),this.showData=Object(r.a)(o.life),this.grouping()},methods:{dsu_init:function(t){this.dsu=[];var n,e=c(t);try{for(e.s();!(n=e.n()).done;){var r=n.value;this.dsu[r]=r}}catch(t){e.e(t)}finally{e.f()}},dsu_find:function(t){return this.dsu[t]===t?t:this.dsu_find(this.dsu[t])},dsu_union:function(t,n){this.dsu[this.dsu_find(t)]=this.dsu_find(n)},dsu_same:function(t,n){return this.dsu_find(t)===this.dsu_find(n)},grouping:function(){var t=this.rawData.map((function(t){return t.event}));this.dsu_init(t);var n,e=c(this.rawData);try{for(e.s();!(n=e.n()).done;){var r=n.value;r.previous&&this.dsu_union(r.event,r.previous)}}catch(t){e.e(t)}finally{e.f()}},select:function(t){var n=this;this.selecting=!0,this.showData=[],this.showData=this.rawData.filter((function(e){return n.dsu_same(t,e.event)}))},unselect:function(){this.selecting=!1,this.showData=[],this.showData=Object(r.a)(this.rawData)},getAnchor:function(t){var n="".concat(document.location.origin).concat(document.location.pathname);return"/"===n[n.length-1]&&(n=n.substring(0,n.length-1)),n+="#".concat(t)}}},d=(e(1593),e(147)),component=Object(d.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Timeline",t._l(t.showData,(function(n){return e("TimelineItem",{key:n.event,attrs:{color:"green"}},[e("Icon",{attrs:{slot:"dot",type:"ios-trophy"},slot:"dot"}),t._v(" "),e("p",{staticClass:"event",attrs:{id:n.event}},[t._v("\n        "+t._s(n.event)+"\n        "),t.selecting?[e("a",{staticClass:"related",on:{click:t.unselect}},[t._v("\n            "+t._s(t.$t("life.unselect"))+"\n          ")])]:[n.previous?e("a",{staticClass:"related",attrs:{href:t.getAnchor(n.previous)}},[t._v("\n            "+t._s(t.$t("life.previous"))+"\n          ")]):t._e(),t._v(" "),e("a",{staticClass:"related",on:{click:function(e){return t.select(n.event)}}},[t._v("\n            "+t._s(t.$t("life.related"))+"\n          ")])]],2),t._v(" "),e("p",{staticClass:"date"},[e("span",[t._v(t._s(n.date))]),t._v(" "),n.till?e("span",[n.date!==n.till?e("span",[t._v("\n            "+t._s(t.$t("life.till")+" "+n.till)+"\n          ")]):t._e()]):e("span",[t._v("\n          "+t._s(t.$t("life.till")+" "+t.$t("life.now"))+"\n        ")])]),t._v(" "),n.content?e("div",t._l(n.content.split("\n"),(function(n){return e("p",{key:n,staticClass:"content"},[t._v("\n          "+t._s(n)+"\n        ")])})),0):t._e()],1)})),1)],1)}),[],!1,null,"7b8ac273",null);n.default=component.exports}}]);