(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"3ncD":function(t,n,i){},EHvh:function(t,n,i){"use strict";i.r(n);i("fbCW"),i("rB9j"),i("UxlC"),i("sMBO"),i("QWBl"),i("FZtP");var s={data:function(){return{tabs:[],isActive:!1}},props:{selected:{default:!1}},mounted:function(){if(this.tabs=this.$children,console.log("tab "+window.location.hash),console.log("findTab "+this.findTab(window.location.hash)),console.log("$children "+this.$children),window.location.hash){var t=this.findTab(window.location.hash);this.selectTab(t)}},methods:{findTab:function(t){return console.log("this.tabs "+this.tabs),console.log("hash "+t),this.tabs.find((function(n){return"#"+n.name.toLowerCase().replace(/ /g,"-")===t}))},selectTab:function(t,n){this.tabs.forEach((function(n){n.isActive=n.name==t.name}))}}},e=(i("og+u"),i("KHd+")),a=Object(e.a)(s,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"tabs"},[i("ul",{staticClass:"tabs__list"},t._l(t.tabs,(function(n,s){return i("li",{key:s,staticClass:"tabs__item",class:{"is-active":n.isActive}},[i("a",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{href:"#"+n.name.toLowerCase().replace(/ /g,"-")},domProps:{innerHTML:t._s(n.name)},on:{click:function(i){return t.selectTab(n,i)}}})])})),0),i("div",{staticClass:"tabs__content"},[t._t("default")],2)])}),[],!1,null,null,null);n.default=a.exports},fbCW:function(t,n,i){"use strict";var s=i("I+eb"),e=i("tycR").find,a=i("RNIs"),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},"og+u":function(t,n,i){"use strict";i("3ncD")}}]);