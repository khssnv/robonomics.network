(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8gKM":function(t,s,a){},FR7D:function(t,s,a){"use strict";a.r(s);var e=a("rePB"),n=(a("yXV3"),{props:{summary:{type:String},position:{type:String,default:"right-bottom",validator:function(t){return-1!==["right-bottom","right-top","left-bottom","left-top","center-bottom","center-top"].indexOf(t)}},summaryScale:{type:Boolean,default:!0},summaryButton:{type:Boolean,default:!0},summaryLink:{type:Boolean,default:!1}},computed:{detailsClass:function(){var t;return t={},Object(e.a)(t,"".concat(this.position),!0),Object(e.a)(t,"summaryScale",this.summaryScale),t},summaryClass:function(){var t;return t={},Object(e.a)(t,"button primary small",this.summaryButton),Object(e.a)(t,"link dashed",this.summaryLink),t}},methods:{focus:function(t){var s=t.target.closest("details");document.addEventListener("click",(function(t){s.contains(t.target)||(s.open=!1)}))}}}),o=(a("Hs7w"),a("KHd+")),r=Object(o.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("details",{class:t.detailsClass,on:{click:function(s){return t.focus(s)}}},[a("summary",{class:t.summaryClass},[a("span",[t._v(t._s(t.summary))])]),a("div",{staticClass:"tip oldy"},[t._t("default")],2)])}),[],!1,null,"bfcbb688",null);s.default=r.exports},Hs7w:function(t,s,a){"use strict";a("8gKM")}}]);