(window.webpackJsonp=window.webpackJsonp||[]).push([[41,54],{"6tRk":function(e,t,a){"use strict";a.r(t);var o=a("rePB"),n=(a("07d7"),a("PKPk"),a("3bBZ"),a("yXV3"),a("mRH6"),{components:{Button:function(){return a.e(8).then(a.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(o.a)(e,"card",!0),Object(o.a)(e,"icon",this.icon),Object(o.a)(e,"image",this.image||this.imageLocal),Object(o.a)(e,"".concat(this.orientation),!0),Object(o.a)(e,"".concat(this.back),!0),Object(o.a)(e,"alignContent-".concat(this.alignContent),!0),Object(o.a)(e,"oldy","transparent"!=this.back),Object(o.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(o.a)(e,"pic",!0),Object(o.a)(e,"round",this.imageRound),Object(o.a)(e,"icon",this.icon),Object(o.a)(e,"image",this.image||this.imageLocal),Object(o.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(o.a)(e,"link",!0),Object(o.a)(e,"text",this.linkText),Object(o.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?a("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),i=(a("E4Hk"),a("KHd+")),r=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?a("div",{class:e.pic_classes},[a("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?a("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?a("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?a("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,null,null);t.default=r.exports},DQIK:function(e,t,a){"use strict";a.r(t);var o=a("KHd+"),n=a("6tRk"),i=a("UQSp"),r=a("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var l={Card:n.default,VueRemarkRoot:i.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===s(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?t[e]=l[e]:a[e]=function(){return l[e]}}))},h=r.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Robonomics Frontier",date:"2021-07-23T00:00:00.000Z",published:!0,tags:["Tokens","Robonomics parachain","Kusama"],cover_image:"./images/Robonomics-Frontier/Robonomics-Frontier_cover_blog.jpg",description:"As a result of the summer Kusama crowdloans, Robonomics reached the Top-10 projects of the Polkadot ecosystem. Before the next wave of auctions, the project’s developers decided to deploy and maintain a functionally identical network.",abstract:"As a result of the summer Kusama crowdloans, Robonomics reached the Top-10 projects of the Polkadot ecosystem. Before the next wave of auctions, the project’s developers decided to deploy and maintain a functionally identical network — Frontier Relay chain, that will be integrated with Robonomics parachain."};var u=function(e){e.options[d]&&(e.options[d]=p),r.a.util.defineReactive(e.options,d,p),e.options.computed=h.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},f=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",{attrs:{id:"not-a-wild-cousin-of-kusama"}},[o("a",{attrs:{href:"#not-a-wild-cousin-of-kusama","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Not a wild cousin of Kusama")]),o("p",[e._v("Kusama Relay chain is under development and passes all updates using stable versions of Polkadot releases. For example, the current version of Kusama was built on "),o("a",{attrs:{href:"https://github.com/paritytech/polkadot/releases/tag/v0.9.8",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("polkadot v0.9.8")]),e._v(" release.")]),o("p",[o("g-image",{attrs:{src:a("nViw"),alt:"Kusama Relay Chain and Polkadot release 0.9.8"}})],1),o("p",[e._v("Frontier Relay chain will use the same versions of Polkadot releases, which will be implemented by Kusama network in the form of its Relay chain.")]),o("p",[e._v("To connect to Frontier Relay chain, you can use Substrate portal following this link: "),o("a",{attrs:{href:"https://parachain.robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://parachain.robonomics.network/")])]),o("p",[e._v("After connecting the Robonomics parachain to the Frontier Relay chain we can have a blockchain that could work in real-time and would be integrated into the Kusama network. It means that we need to overcome any challenges that Kusama parachains will have. All new capabilities that will appear with new Polkadot releases, will be also supported by Robonomics’ parachain.")]),o("h2",{attrs:{id:"xcmp-and-integration-with-kusama-parachains"}},[o("a",{attrs:{href:"#xcmp-and-integration-with-kusama-parachains","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("XCMP and integration with Kusama parachains")]),o("p",[e._v("Maybe only one disadvantage today (in 2021), when we are talking about the lifecycle in a Frontier network and not about the main Kusama network, is a lack of integration via "),o("a",{attrs:{href:"https://wiki.polkadot.network/docs/learn-crosschain#overview-of-xcmp",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("XCMP")]),e._v(".")]),o("p",[e._v("But it does not mean that you cannot execute technical integration tasks and prepare a Robonomics parachain to work with Karura, Moonriver and Khala. It is those three parachains that are interesting for the Robonomics team in terms of integration. We can start maintaining work in a Frontier network with copies of the mentioned projects, but only after release of public documentation and first samples of using Kusama (how to create trading pair on Karura, connect functions of parachain with solidity/ink smart contracts in Moonriver, or to provide data privacy with Khala).")]),o("p",[e._v("I’m personally expecting that the process of parachains integration would be executed very carefully in the first year, and maybe other projects will also work together in sandboxes and after it transfer integration mechanisms to Kusama network. So, Robonomics could be in the Kusama network right to the moment of active integration between the projects.")]),o("h2",{attrs:{id:"genesis-block-of-robonomics-parachain-in-frontier-network"}},[o("a",{attrs:{href:"#genesis-block-of-robonomics-parachain-in-frontier-network","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Genesis block of Robonomics parachain in Frontier network")]),o("p",[e._v("In the genesis block will be presented XRT balances of exodus participants, crowdloan contributors and open test network collators. This block will be formed only a few days before the parachain launch in a Frontier network. We will announce this update on our "),o("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Twitter")]),e._v(" and "),o("a",{attrs:{href:"https://t.me/Robonomics_ann",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Telegram")]),e._v(".")]),o("p",[e._v("We are expecting that the genesis block will be formed during the period from 28th to 31st of July.")]),o("p",[e._v("Important information for XRT holders in the Ethereum network: To participate in the parachain’s genesis block and participate in staking, you can use dapp exodus till 28th of July. After 28th of July the opportunity to transfer XRT tokens into Ethereum to Frontier will still be available. But this process will be executed by the technical committee of the network and not more often than once a week.")]),o("p",[e._v("Also we would like to notice, that the exodus would not allow you to go back till the moment when Robonomics parachain will be connected to the Kusama network, and when there will be suitable bridge to Ethereum. The situation is ~ similar to the process of transfer to Ethereum 2.0 for ETH holders.")]),o("h2",{attrs:{id:"xrt-staking"}},[o("a",{attrs:{href:"#xrt-staking","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("XRT staking")]),o("p",[e._v("XRT staking in Robonomics parachain aims to split the capacity between two options of payments: for transaction or for subscription. You can read more about this in the article "),o("a",{attrs:{href:"https://blog.aira.life/rws-overview-part-2-heterogeneous-tokenomics-afc209cc855",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("“RWS overview, part 2 “Heterogeneous tokenomics”")]),e._v(" on Medium.")]),o("p",[e._v("The basis of reward for the staking will be ~ 10%. This amount helps to launch the parachain. In the future, the reward will be determined by "),o("a",{attrs:{href:"https://substrate.dev/rustdocs/latest/pallet_democracy/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Democracy pallet")]),e._v(" for XRT holders. ")]),o("p",[e._v("Crowdloan contributors will get increased reward rate — 50%. Thus, it will help us to test the mechanism: “Parachain, which always wins”, which will propose adaptive reward for staking Robonomics to the reward for staking in Kusama / Polkadot relay chain and considering XRT price to KSM/DOT. We will explain later in detail about this mechanism and after a few tests. ")]),o("p",[e._v("Staking will be available from the update 1.1 in Frontier network. Please note that tokens transfer in parachain will be turned off on the start, similar to the launch of the Polkadot Relay chain.")]),o("h2",{attrs:{id:"roadmap---life-after-auction"}},[o("a",{attrs:{href:"#roadmap---life-after-auction","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Roadmap - Life after auction")]),o("p",[e._v("Regardless of that we did not win a slot — the roadmap of parachain development won’t change. Below you will find our plans that were published in the article: "),o("a",{attrs:{href:"https://robonomics.network/blog/crowdloan-starts-today/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://robonomics.network/blog/crowdloan-starts-today/")]),e._v(".")]),o("Card",[o("h3",{attrs:{id:"part-1-establishing-core-functionality"}},[o("a",{attrs:{href:"#part-1-establishing-core-functionality","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Part 1: Establishing core functionality")]),o("p",[e._v("In 3 months after the Robonomics parachain launch, Robonomics developers are going to activate the core functionally that’s been developing during 2019-2021, and also supplement the network with modules that have proven themselves in the Polkadot and Kusama ecosystems.")]),o("ul",[o("li",[o("strong",[e._v("Genesis state: (0 week)")]),e._v(" Launch of the starter pack of Robonomics parachain functions with IoT management services and collators reward systems.")]),o("li",[o("strong",[e._v("Update 1.1")]),e._v(" Staking and allowing transfers (3 - 4 week). Will allow you to transfer XRT and stake your XRT with a 10% APR for all token holders and 50% for Crowdloan participants.")]),o("li",[o("strong",[e._v("Update 1.2")]),e._v(" Treasury and Technical committee (4 - 6 week). Will allow transferring a share of the DAO funds from Ethereum to the parachain. The Technical Committee can produce emergency referenda. These are used for emergency bug fixes or rapid implementation of new but battle-tested features into the runtime.")]),o("li",[o("strong",[e._v("Update 1.3")]),e._v(" RWS (7 - 8 week). Will allow using IoT management functions with not only commission payments in XRT but a monthly subscription as well.")]),o("li",[o("strong",[e._v("Update 1.4")]),e._v(" Robot-as-a-service (9 - 10 week). Will allow to implement a control process for the provision of automated services and use payments within transactions to launch devices.")]),o("li",[o("strong",[e._v("Update 1.5")]),e._v(" XCMP functionality and Robobank (11 - 12 week). The solution is based on the Polkadot XCMP architecture that will allow any parachain to get access to IoT device management with payment in a native token.")]),o("li",[o("strong",[e._v("Update 1.6")]),e._v(" Democracy and Remove Sudo (13 - 14 week). Developers won’t have the ability to interfere with the operations of the network without the involvement of the technical committee or voting of parachain native token holders.")])])]),o("Card",[o("h3",{attrs:{id:"part-2-launch-services-based-on-robonomics-rd"}},[o("a",{attrs:{href:"#part-2-launch-services-based-on-robonomics-rd","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Part 2: Launch services based on Robonomics R&D")]),o("p",[e._v("2nd part of Robonomics parachain growth in Kusama designated to the launch of services based on previous Robonomics team’s R&D projects.")]),o("ul",[o("li",[o("strong",[e._v("Globally available digital passports of products")]),e._v(" By supplementing the status of digital twins with information about the produced products, customers will be able to issue digital passports protected against changes and loss of information in the future. This use case is already implemented as a pilot at the enterprise that’s producing drones. The solution used for quality control during packaging with video recording.")]),o("li",[o("strong",[e._v("Smart leasing of IoT & Robotics")]),e._v(" We’ll demonstrate the ability to use the Robonomics parachain for leasing an IoT/Robotics device. Using the example of 2 robots controlled by Robonomics parachain in 2 different industries. The first use case - an educational program based on Boston Dynamics SDK, during which developers will learn how to control the famous robot dog - Spot. The second one - an industrial manipulator sold under a leasing agreement in the United States. Both robots will provide customers with automatically generated reports at the end of the user session.")]),o("li",[o("strong",[e._v("Environmental mitigation services for smart buildings with real carbon credits")]),e._v(" It will allow customers to automatically collect information about the electricity consumption of the household or apartment building, burn carbon credits, and store a report in the parachain.")]),o("li",[o("strong",[e._v("Fault-tolerant civil sensors network")]),e._v(" A complete set of software modules for creating a sensor network in a city or enterprise to track the desired indicators and provide access to them without a central point of failure. Today it is being tested in one of Russian’s industrial cities - Togliatti.")]),o("li",[o("strong",[e._v("Self-driving cars and drones traffic management solution to avoid route collisions in public areas")]),e._v(" It’ll allow managing a fleet of drones with publicly monitored access to route changes to public agencies responsible for local security and efficiency of air space and roads.")]),o("li",[o("strong",[e._v("Ecosystem integration updates")]),e._v(" We will focus on integrations with other parachains to expand the capabilities of IoT projects that are interested in the Polkadot ecosystem’s features.")])])]),o("Card",[o("h3",{attrs:{id:"part-3-transform-into-robonomics-relay-chain"}},[o("a",{attrs:{href:"#part-3-transform-into-robonomics-relay-chain","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Part 3: Transform into Robonomics Relay Chain")]),o("p",[e._v("The final task for the 48 weeks of existence in the Kusama network is the transformation of the Robonomics parachain into the Robonomics Relay Chain. This is our vision of the future of Robonomics, as a complete segment of the Polkadot infrastructure specifically prepared for working with IoT devices.")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent",imageSize:"big"}},[o("p",[e._v("EnsRationis")]),o("p",[e._v("Robonomics network architect")]),o("p",[e._v("element: @ensrationis:robonomics.network")])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof u&&u(f);t.default=f.exports},E4Hk:function(e,t,a){"use strict";a("F22k")},F22k:function(e,t,a){},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},nViw:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/Kusama-Relay-Chain-and-Polkadot-release-0-9-8.71307f6.59b6fc48d57ce14976e6a396bb97eb53.jpg",size:{width:1500,height:417},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/Kusama-Relay-Chain-and-Polkadot-release-0-9-8.82a2fbd.59b6fc48d57ce14976e6a396bb97eb53.jpg 480w","/assets/static/Kusama-Relay-Chain-and-Polkadot-release-0-9-8.cbab2cf.59b6fc48d57ce14976e6a396bb97eb53.jpg 1024w","/assets/static/Kusama-Relay-Chain-and-Polkadot-release-0-9-8.71307f6.59b6fc48d57ce14976e6a396bb97eb53.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 417' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-218d7c9e4a1650d57ea85441b878c45c'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-218d7c9e4a1650d57ea85441b878c45c)' width='1500' height='417' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAASAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAYCAwEEBQf/xAAuEAABAwMCBAMIAwAAAAAAAAABAAIDBAYRBSEHEjFBE1GBIjIzQlJhceGRocH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A900%2bwrT0ySWSht7SqWSWIwyOhpQ3njPVpx1Bx0Ws3hhYrg4MtPQeYDODRNTdIdx%2bFmEe044%2bXCBRh4YWLI3LbS0EHpvRNVsXDKzaOohqKW2dGgnikbJHJFSBrmOaQQQR9wE00m8YJDVdKfcxjqgTqzhjaD6rxn2xpUrXuc6R7mbgnvjv/IWGcNLGl2FtaYQfOAj/AFPZAI3XKayAyvbLkO5sDHdXUwtjhXYve2NJ9If2pN4VWNnLbZ0v0i/abG0tO53wv7WzFG2JnKwYb5JqufOSCMEjZTpt3vz9IQhSidGB4fQd1bMBhu3dCEhV65vO4SvAcQOY7AoQggZHgbPcPVb9IS6BpcSTvuUIQf/Z' /%3e%3c/svg%3e"}}}]);