(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6tRk":function(e,t,o){"use strict";o("yXV3"),o("mRH6");var n=o("rePB"),i={data:function(){return{isActive:!1,isFocused:!1}},methods:{toggleActive:function(e){this.isActive=!this.isActive}},props:{link:{type:String,default:""},icon:{type:String,default:""},image:{type:String,default:""},button:{type:String,default:""},orientation:{type:String,default:"gorizontal"},back:{type:String,default:"white",validator:function(e){return-1!==["white","gradient","transparent"].indexOf(e)}},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","big"].indexOf(e)}},popup:{type:Boolean,default:!1},imageRound:{type:Boolean,default:!0}},computed:{classes:function(){var e;return e={},Object(n.a)(e,"card-icon",this.icon),Object(n.a)(e,"card-image",this.image),Object(n.a)(e,"card-link",this.link||this.popup),Object(n.a)(e,"oldy","transparent"!=this.back),Object(n.a)(e,"oldy__link",this.link||this.popup||"transparent"!=this.back),Object(n.a)(e,"card-".concat(this.back),!0),Object(n.a)(e,"card-imageSize-".concat(this.imageSize),this.icon||this.image),Object(n.a)(e,"".concat(this.orientation),!0),Object(n.a)(e,"card-popup",this.popup),Object(n.a)(e,"active",this.isActive&&this.isFocused),e}}},r=(o("E4Hk"),o("KHd+")),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card",class:e.classes,attrs:{tabindex:"0"},on:{focus:function(t){e.isFocused=!0},blur:function(t){e.isFocused=!1,e.isActive=!1},click:e.toggleActive}},[e.icon?o("div",{staticClass:"icon"},[o("img",{attrs:{alt:"",src:e.icon}})]):e._e(),e.image?o("div",{staticClass:"image",class:{icon:e.imageRound}},[o("g-image",{attrs:{alt:"",src:e.image}})],1):e._e(),o("div",{staticClass:"content"},[e._t("default")],2),e.link?o("g-link",{staticClass:"link",attrs:{to:e.link}},[e._v("Link")]):e._e()],1)}),[],!1,null,null,null);t.a=s.exports},E4Hk:function(e,t,o){"use strict";o("F22k")},F22k:function(e,t,o){},LmxZ:function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),i=o("6tRk"),r=o("UQSp"),s=o("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var c={Card:i.a,VueRemarkRoot:r.a},u=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===a(c[e])&&"function"==typeof c[e].render||"function"==typeof c[e]&&"function"==typeof c[e].options.render?t[e]=c[e]:o[e]=function(){return c[e]}}))},l=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Community incentive program",date:"2020-11-20T00:00:00.000Z",published:!0,tags:["Polkadot","Kusama","Parachain"],cover_image:"./images/developers-incentive-program/Rewards_1.jpg",description:"With the launch of Robonomics Web Services beta test, Robonomics Network is shifting to higher growth pace. In order to reward Robonomics community, Robonomics DAO came up with the idea of a community incentive program.",related:["Rewards for researchers, developers and engineers","Rewards for Ambassadors & Influencers"],abstract:"Firstly, we would love to appreciate your contribution to the development of Robonomics Network.  As the Robonomics Network rapidly develops within the Polkadot ecosystem, core DAO developers highlight the importance of supporting Robonomics community."};var m=function(e){e.options[p]&&(e.options[p]=d),s.a.util.defineReactive(e.options,p,d),e.options.computed=l.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("With the launch of Robonomics Web Services beta test, Robonomics Network is shifting to higher growth pace. In order to reward Robonomics community, Robonomics DAO came up with the idea of a community incentive program.")]),o("Card",{attrs:{icon:"/icons/icon-forum.png",link:"https://discourse.robonomics.network/c/robonomics-web-services/"}},[o("h3",{attrs:{id:"still-not-sure-about-robonomics-web-services"}},[e._v("Still not sure about Robonomics Web Services?")]),o("p",[e._v("Visit our forum! A place to discuss features, use cases and limitations of RWS with core Robonomics developers.")])]),o("blockquote",[o("p",[e._v("Robonomics community incentive program's goal is to provide "),o("strong",[e._v("developers")]),e._v(", "),o("strong",[e._v("ambassadors")]),e._v(" and "),o("strong",[e._v("influencers")]),e._v(" with "),o("strong",[e._v("XRT")]),e._v(" for their contributions.")])]),o("p",[e._v("Thus, the core Robonomics DAO allocated 10.000 XRT under the management of the marketing department representative.\nThose funds will be under the control of Robonomics marketing DAO. Who’s responsible for rewarding "),o("strong",[e._v("developers")]),e._v(" and communicating with "),o("strong",[e._v("ambassadors")]),e._v(" & "),o("strong",[e._v("influencers")]),e._v(".")]),o("p",[e._v("Developers, engineers and researchers as the core drive force of the robotics industry will get rewards for research and development activities based on Robonomics Network.")]),o("p",[e._v("Learn more about the Developers' incentive program "),o("a",{attrs:{href:"https://robonomics.network/blog/rewards-for-researchers-developers-and-engineers/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")]),o("p",[e._v("Spread the Word of Robonomics Network across the globe to increase the awareness of worldwide robots economy.")]),o("p",[e._v("Learn more about the Ambassadors & Influencers incentive program "),o("a",{attrs:{href:"https://robonomics.network/blog/rewards-for-ambassadors-and-influencers/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")])],1)}),[],!1,null,null,null);"function"==typeof u&&u(f),"function"==typeof m&&m(f);t.default=f.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);