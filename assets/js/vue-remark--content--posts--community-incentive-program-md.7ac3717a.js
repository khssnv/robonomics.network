(window.webpackJsonp=window.webpackJsonp||[]).push([[31,54],{"6tRk":function(e,t,o){"use strict";o.r(t);var n=o("rePB"),i=(o("yXV3"),o("mRH6"),{data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(n.a)(e,"card",!0),Object(n.a)(e,"icon",this.icon),Object(n.a)(e,"image",this.image||this.imageLocal),Object(n.a)(e,"".concat(this.orientation),!0),Object(n.a)(e,"".concat(this.back),!0),Object(n.a)(e,"alignContent-".concat(this.alignContent),!0),Object(n.a)(e,"oldy","transparent"!=this.back),Object(n.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(n.a)(e,"pic",!0),Object(n.a)(e,"round",this.imageRound),Object(n.a)(e,"icon",this.icon),Object(n.a)(e,"image",this.image||this.imageLocal),Object(n.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(n.a)(e,"link",!0),Object(n.a)(e,"text",this.linkText),Object(n.a)(e,"overlap",!this.linkText),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0}}}),r=(o("E4Hk"),o("KHd+")),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?o("div",{class:e.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),o("div",{staticClass:"content"},[e._t("default")],2),e.link?o("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e()],1)}),[],!1,null,null,null);t.default=s.exports},E4Hk:function(e,t,o){"use strict";o("F22k")},F22k:function(e,t,o){},LmxZ:function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),i=o("6tRk"),r=o("UQSp"),s=o("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var c={Card:i.default,VueRemarkRoot:r.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===a(c[e])&&"function"==typeof c[e].render||"function"==typeof c[e]&&"function"==typeof c[e].options.render?t[e]=c[e]:o[e]=function(){return c[e]}}))},u=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",m={excerpt:null,title:"Community incentive program",date:"2020-11-20T00:00:00.000Z",published:!0,tags:["Incentive programs"],cover_image:"./images/developers-incentive-program/Rewards_1.jpg",description:"With the launch of Robonomics Web Services beta test, Robonomics Network is shifting to higher growth pace. In order to reward Robonomics community, Robonomics DAO came up with the idea of a community incentive program.",related:["Rewards for researchers, developers and engineers","Rewards for Ambassadors & Influencers"],abstract:"Firstly, we would love to appreciate your contribution to the development of Robonomics Network.  As the Robonomics Network rapidly develops within the Polkadot ecosystem, core DAO developers highlight the importance of supporting Robonomics community."};var d=function(e){e.options[p]&&(e.options[p]=m),s.a.util.defineReactive(e.options,p,m),e.options.computed=u.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("With the launch of Robonomics Web Services beta test, Robonomics Network is shifting to higher growth pace. In order to reward Robonomics community, Robonomics DAO came up with the idea of a community incentive program.")]),o("Card",{attrs:{icon:"/icons/icon-forum.png",link:"https://discourse.robonomics.network/c/robonomics-web-services/"}},[o("h3",{attrs:{id:"still-not-sure-about-robonomics-web-services"}},[o("a",{attrs:{href:"#still-not-sure-about-robonomics-web-services","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Still not sure about Robonomics Web Services?")]),o("p",[e._v("Visit our forum! A place to discuss features, use cases and limitations of RWS with core Robonomics developers.")])]),o("blockquote",[o("p",[e._v("Robonomics community incentive program's goal is to provide "),o("strong",[e._v("developers")]),e._v(", "),o("strong",[e._v("ambassadors")]),e._v(" and "),o("strong",[e._v("influencers")]),e._v(" with "),o("strong",[e._v("XRT")]),e._v(" for their contributions.")])]),o("p",[e._v("Thus, the core Robonomics DAO allocated 10.000 XRT under the management of the marketing department representative.\nThose funds will be under the control of Robonomics marketing DAO. Who’s responsible for rewarding "),o("strong",[e._v("developers")]),e._v(" and communicating with "),o("strong",[e._v("ambassadors")]),e._v(" & "),o("strong",[e._v("influencers")]),e._v(".")]),o("p",[e._v("Developers, engineers and researchers as the core drive force of the robotics industry will get rewards for research and development activities based on Robonomics Network.")]),o("p",[e._v("Learn more about the Developers' incentive program "),o("a",{attrs:{href:"https://robonomics.network/blog/rewards-for-researchers-developers-and-engineers/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")]),o("p",[e._v("Spread the Word of Robonomics Network across the globe to increase the awareness of worldwide robots economy.")]),o("p",[e._v("Learn more about the Ambassadors & Influencers incentive program "),o("a",{attrs:{href:"https://robonomics.network/blog/rewards-for-ambassadors-and-influencers/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")])],1)}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof d&&d(f);t.default=f.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);