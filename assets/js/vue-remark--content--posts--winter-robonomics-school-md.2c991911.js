(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"6tRk":function(t,e,o){"use strict";o("yXV3"),o("mRH6");var n=o("rePB"),i={data:function(){return{isActive:!1,isFocused:!1}},methods:{toggleActive:function(t){this.isActive=!this.isActive}},props:{link:{type:String,default:""},icon:{type:String,default:""},image:{type:String,default:""},button:{type:String,default:""},orientation:{type:String,default:"gorizontal"},back:{type:String,default:"white",validator:function(t){return-1!==["white","gradient","transparent"].indexOf(t)}},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","big"].indexOf(t)}},popup:{type:Boolean,default:!1},imageRound:{type:Boolean,default:!0}},computed:{classes:function(){var t;return t={},Object(n.a)(t,"card-icon",this.icon),Object(n.a)(t,"card-image",this.image),Object(n.a)(t,"card-link",this.link||this.popup),Object(n.a)(t,"oldy","transparent"!=this.back),Object(n.a)(t,"oldy__link",this.link||this.popup||"transparent"!=this.back),Object(n.a)(t,"card-".concat(this.back),!0),Object(n.a)(t,"card-imageSize-".concat(this.imageSize),this.icon||this.image),Object(n.a)(t,"".concat(this.orientation),!0),Object(n.a)(t,"card-popup",this.popup),Object(n.a)(t,"active",this.isActive&&this.isFocused),t}}},a=(o("E4Hk"),o("KHd+")),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card",class:t.classes,attrs:{tabindex:"0"},on:{focus:function(e){t.isFocused=!0},blur:function(e){t.isFocused=!1,t.isActive=!1},click:t.toggleActive}},[t.icon?o("div",{staticClass:"icon"},[o("img",{attrs:{alt:"",src:t.icon}})]):t._e(),t.image?o("div",{staticClass:"image",class:{icon:t.imageRound}},[o("img",{attrs:{alt:"",src:t.image}})]):t._e(),o("div",{staticClass:"content"},[t._t("default")],2),t.link?o("g-link",{staticClass:"link",attrs:{to:t.link}},[t._v("Link")]):t._e()],1)}),[],!1,null,null,null);e.a=r.exports},CwSB:function(t,e,o){"use strict";o.r(e);var n=o("KHd+"),i=o("6tRk"),a=o("Kn2e"),r=o("UQSp"),s=o("Kw5r");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var l={Card:i.a,Button:a.a,VueRemarkRoot:r.a},d=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===c(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:o[t]=function(){return l[t]}}))},u=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",b={excerpt:null,title:"Robonomics Winter School 2021",date:"2021-01-13T00:00:00.000Z",published:!0,tags:["Polkadot","Robonomics Winter School","Parachain"],cover_image:"./images/robonomics-school/WS-robonomics-2021-Blog.jpg",description:"Free online Master Classes and Lectures open for attendees. Try to build Dapps and Web Services for IoT on Polkadot Parachain in time of Robonomics Winter School 2021 (from 10 to 24 February)",abstract:"Free online Master Classes and Lectures open for attendees. Try to build Dapps and Web Services for IoT on Polkadot Parachain in time of Robonomics Winter School from 10th to 24th February 2021"};var m=function(t){t.options[p]&&(t.options[p]=b),s.a.util.defineReactive(t.options,p,b),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},h=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("p",[t._v("Robonomics Winter School 2021 is inviting all willing to join master classes and lectures hosted by experienced contributors and programmers operating with Dapps and Web services on the Polkadot Parachain.")]),o("p",[t._v("The opening ceremony will launch on Wednesday, February 10, at 7:00 PM GMT+3.")]),o("p",[t._v("The main event with all master classes and lectures will be taking place from the 11th to the 24th of February.")]),o("h2",{attrs:{id:"robonomics-winter-school-2021-opening-ceremony"}},[t._v("Robonomics Winter School 2021 Opening Ceremony")]),o("section",{staticClass:"grid-3"},[o("Card",{attrs:{orientation:"vertical",popup:"",imageRound:!1}},[o("p",[o("strong",[t._v("Ceremony will be held at:")])]),o("p",[t._v("Wed, Feb 10, 2021, 7:00 PM GMT+3")]),o("Button",{attrs:{label:"Add to calendar",button:"primary block"}}),o("div",{staticClass:"popup"},[o("h5",{attrs:{id:"add-event-to-calendar"}},[t._v("Add event to calendar")]),o("Button",{attrs:{label:"Google",button:"border block",link:"https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20210210T150000Z%2F20210210T170000Z&details=Free%20online%20Master%20Classes%20and%20Lectures.%20Try%20to%20build%20Dapps%20and%20Web%20Services%20for%20IoT%20on%20Polkadot%20Parachain%20in%20time%20of%20Robonomics%20Winter%20School%202021%20February%2010-24%2C%20https%3A%2F%2Fyoutu.be%2FkQaSwNYHJQ8&location=Online&text=Robonomics%20Winter%20School%202021%20Opening%20Ceremony"}}),o("Button",{attrs:{label:"Apple",button:"border block",link:"https://static.robonomics.network/temp/RobonomicsWinterSchool2021.ics"}}),o("Button",{attrs:{label:"Outlook",button:"border block",link:"https://outlook.live.com/calendar/0/deeplink/compose?body=Free%20online%20Master%20Classes%20and%20Lectures.%20Try%20to%20build%20Dapps%20and%20Web%20Services%20for%20IoT%20on%20Polkadot%20Parachain%20in%20time%20of%20Robonomics%20Winter%20School%202021%20February%2010-24%2C%20https%3A%2F%2Fyoutu.be%2FkQaSwNYHJQ8&enddt=2021-02-10T17%3A00%3A00%2B00%3A00&location=Online&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2021-02-10T15%3A00%3A00%2B00%3A00&subject=Robonomics%20Winter%20School%202021%20Opening%20Ceremony"}})],1)],1),o("Card",{attrs:{orientation:"vertical",link:"https://www.meetup.com/robonomics/events/275378464/",imageRound:!1}},[o("p",[o("strong",[t._v("Meetup page")])]),o("p",[t._v("More then 50 attendees already")]),o("Button",{attrs:{label:"Join on Meetup",button:"primary block"}})],1),o("Card",{attrs:{orientation:"vertical",link:"https://youtu.be/kQaSwNYHJQ8",imageRound:!1}},[o("p",[o("strong",[t._v("Youtube live stream")])]),o("p",[t._v("Set a reminder to join the event in time ")]),o("Button",{attrs:{label:"Set a reminder",button:"primary block"}})],1)],1),o("h2",{attrs:{id:"topics-to-be-discussed"}},[t._v("Topics to be discussed:")]),o("ul",[o("li",[t._v("What are Robonomics and Robonomics parachain? ")]),o("li",[t._v("How can you use a set of software for connecting IoT devices using the HTTP/MQTT protocol, complex robotic systems using the Robot Operating System (ROS)? ")]),o("li",[t._v("Decentralized cloud infrastructure for IoT. ")]),o("li",[t._v("How to create digital twins on the blockchain. ")]),o("li",[t._v("App Store for robotics.")])]),o("p",[t._v("Master classes include overviews of Robonomics io, using prepared digital twin templates for connecting with services, using Robonomics.js to interact via Dapps with digital twins of devices, and much more.")]),o("h2",{attrs:{id:"opportunity-for-developers-and-engineers"}},[t._v("Opportunity for developers and engineers")]),o("p",[t._v("The Robonomics Winter School is an excellent opportunity for software developers and all interested to gain invaluable knowledge on working with the Robonomics Network and related packages for building Dapps and operating blockchain technologies and coding. The Robonomics Network invites all interested to join the courses and take advantage of the unique opportunity of gaining firsthand knowledge from industry experts. The courses will be hosted by Aleksandr Kapitonov (Dean of the Faculty of Infocommunication Technologies), Aleksandr Krupenkin (Robotics/IoT/Ethereum smart contract developer), Aleksandr Starostin (Web developer, Ethereum smart contract developer), Vadim Manaenko (Robotics and IoT engineer, drones developer), Anastasiia Bakai (UI, Motion Design, Front-end), Sergei Lonshakov (Robonomics co-founder and software architect).")]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",imageSize:"big",imageRound:!1,back:"transparent"}},[o("h3",{attrs:{id:"robonomics-winter-school-2021-program"}},[t._v("Robonomics Winter School 2021 Program")]),o("p",[t._v("Sergei Lonshakov @ensrationis published the program on Github. You can find here themes and descriptions of Lectures and Master classes  that are planned to be held within Robonomics Winter School 2021. ")]),o("Button",{attrs:{link:"https://github.com/ensrationis/robonomics-winter-21",label:"View the program",button:"border"}})],1),o("h2",{attrs:{id:"robonomics-winter-school-2021-opening-ceremony-1"}},[t._v("Robonomics Winter School 2021 Opening Ceremony")]),o("section",{staticClass:"grid-3"},[o("Card",{attrs:{orientation:"vertical",popup:"",imageRound:!1}},[o("p",[o("strong",[t._v("Ceremony will be held at:")])]),o("p",[t._v("Wed, Feb 10, 2021, 7:00 PM GMT+3")]),o("Button",{attrs:{label:"Add to calendar",button:"primary block"}}),o("div",{staticClass:"popup"},[o("h5",{attrs:{id:"add-event-to-calendar-1"}},[t._v("Add event to calendar")]),o("Button",{attrs:{label:"Google",button:"border block",link:"https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20210210T150000Z%2F20210210T170000Z&details=Free%20online%20Master%20Classes%20and%20Lectures.%20Try%20to%20build%20Dapps%20and%20Web%20Services%20for%20IoT%20on%20Polkadot%20Parachain%20in%20time%20of%20Robonomics%20Winter%20School%202021%20February%2010-24%2C%20https%3A%2F%2Fyoutu.be%2FkQaSwNYHJQ8&location=Online&text=Robonomics%20Winter%20School%202021%20Opening%20Ceremony"}}),o("Button",{attrs:{label:"Apple",button:"border block",link:"https://static.robonomics.network/temp/RobonomicsWinterSchool2021.ics"}}),o("Button",{attrs:{label:"Outlook",button:"border block",link:"https://outlook.live.com/calendar/0/deeplink/compose?body=Free%20online%20Master%20Classes%20and%20Lectures.%20Try%20to%20build%20Dapps%20and%20Web%20Services%20for%20IoT%20on%20Polkadot%20Parachain%20in%20time%20of%20Robonomics%20Winter%20School%202021%20February%2010-24%2C%20https%3A%2F%2Fyoutu.be%2FkQaSwNYHJQ8&enddt=2021-02-10T17%3A00%3A00%2B00%3A00&location=Online&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2021-02-10T15%3A00%3A00%2B00%3A00&subject=Robonomics%20Winter%20School%202021%20Opening%20Ceremony"}})],1)],1),o("Card",{attrs:{orientation:"vertical",link:"https://www.meetup.com/robonomics/events/275378464/",imageRound:!1}},[o("p",[o("strong",[t._v("Meetup page")])]),o("p",[t._v("More then 50 attendees already")]),o("Button",{attrs:{label:"Join on Meetup",button:"primary block"}})],1),o("Card",{attrs:{orientation:"vertical",link:"https://youtu.be/kQaSwNYHJQ8",imageRound:!1}},[o("p",[o("strong",[t._v("Youtube live stream")])]),o("p",[t._v("Set a reminder to join the event in time ")]),o("Button",{attrs:{label:"Set a reminder",button:"primary block"}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof d&&d(h),"function"==typeof m&&m(h);e.default=h.exports},E4Hk:function(t,e,o){"use strict";o("F22k")},F22k:function(t,e,o){},Kn2e:function(t,e,o){"use strict";o("yXV3");var n=o("rePB"),i={props:{link:{type:String,default:!1},label:{type:String,default:!1},button:{type:String,default:"border",validator:function(t){return-1!==["border","primary","block"].indexOf(t)}},scale:{type:String,default:"1"}},computed:{classes:function(){var t;return t={},Object(n.a)(t,"button",!0),Object(n.a)(t,"".concat(this.button),!0),t}}},a=o("KHd+"),r=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("g-link",{class:this.classes,style:{transform:"scale("+this.scale+")"},attrs:{to:this.link}},[this._v(this._s(this.label))])}),[],!1,null,null,null);e.a=r.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);