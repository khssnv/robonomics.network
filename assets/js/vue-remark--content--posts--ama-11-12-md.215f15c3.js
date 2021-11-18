(window.webpackJsonp=window.webpackJsonp||[]).push([[30,68,69],{"4oEz":function(e,t,o){},"6tRk":function(e,t,o){"use strict";o.r(t);var a=o("rePB"),r=(o("07d7"),o("PKPk"),o("3bBZ"),o("yXV3"),o("mRH6"),{components:{Button:function(){return o.e(8).then(o.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}},alignContentV:{type:String,default:"top",validator:function(e){return-1!==["middle","top"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(a.a)(e,"card",!0),Object(a.a)(e,"icon",this.icon),Object(a.a)(e,"image",this.image||this.imageLocal),Object(a.a)(e,"".concat(this.orientation),!0),Object(a.a)(e,"".concat(this.back),!0),Object(a.a)(e,"alignContent-".concat(this.alignContent),!0),Object(a.a)(e,"alignContentV-".concat(this.alignContentV),!0),Object(a.a)(e,"oldy","transparent"!=this.back),Object(a.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(a.a)(e,"pic",!0),Object(a.a)(e,"round",this.imageRound),Object(a.a)(e,"icon",this.icon),Object(a.a)(e,"image",this.image||this.imageLocal),Object(a.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(a.a)(e,"link",!0),Object(a.a)(e,"text",this.linkText),Object(a.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?o("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),n=(o("T7a/"),o("KHd+")),i=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?o("div",{class:e.pic_classes},[o("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?o("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?o("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?o("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,"30592f2f",null);t.default=i.exports},QUGn:function(e,t,o){"use strict";o.r(t);var a=o("KHd+"),r=o("6tRk"),n=o("UQSp"),i=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var c={Card:r.default,VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===s(c[e])&&"function"==typeof c[e].render||"function"==typeof c[e]&&"function"==typeof c[e].options.render?t[e]=c[e]:o[e]=function(){return c[e]}}))},h=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",u={excerpt:null,title:"AMA session at Robonomics community, Dec 11",date:"2020-12-15T00:00:00.000Z",published:!0,locale:"en",tags:["Events","F.A.Q.","Tokens"],cover_image:"./images/AMA-11-12/AMA-11-12.jpg",description:"AMA session with Sergei Lonshakov, software architect at Robonomics.Network. We discussed further development roadmap, and answered the most frequent questions from the community members.",abstract:"AMA session with Sergei Lonshakov, software architect at Robonomics.Network. We discussed further development roadmap, and answered the most frequent questions from the community members."};var d=function(e){e.options[p]&&(e.options[p]=u),i.a.util.defineReactive(e.options,p,u),e.options.computed=h.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},m=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub"}},[o("a",{attrs:{href:"#yakub","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Hi everyone!")]),o("p",[e._v("Let me introduce myself, my name is Yakub; I’m Growth & Marketing manager at Robonomics.network.")]),o("p",[e._v("Today we’ll be talking about the development roadmap of Robonomics.Network.")]),o("p",[e._v("Sergei Lonshakov, one of the brightest minds of the CIS crypto community, will provide us with updates regarding the further development plan of Robonomics.network.")]),o("p",[e._v("Sergei, before we start, would you mind to tell the community a bit about your background and traction of Robonomics.network and what is your exact role in the project?")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei"}},[o("a",{attrs:{href:"#sergei","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("Hi folks!")]),o("p",[e._v("This is Sergei software architect at Robonomics.Network.")]),o("p",[e._v("I was involved in Robonomics concepts from the beginning of the project in 2015, and I invented part of the ideas behind the Robonomics project.")]),o("p",[e._v("So, Robonomics for me is a personal story and long road from ideas to implementation, and I hope in the near future to the global ecosystem with many smart cities/industry 4.0 projects inside.")]),o("p",[e._v("Most interesting about my work, you can find in the form of articles on "),o("a",{attrs:{href:"https://scholar.google.com/citations?user=0c53yygAAAAJ&hl=en",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Google.Scholar")]),e._v(" and on "),o("a",{attrs:{href:"https://blog.aira.life/@ensrationis",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Medium")]),e._v(".")]),o("p",[e._v("Best way to reach me in social networks is "),o("a",{attrs:{href:"https://twitter.com/EnsRationis",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Twitter")]),e._v(".")]),o("p",[e._v("Before 2015:")]),o("p",[e._v("2007- 2009- QA engineer and Data Modeler at international outsourcing company Epam Systems.")]),o("p",[e._v("2009–2012- My first outsource development company in Russia for development e-commerce projects.")]),o("p",[e._v("2012–2015- With part of the existing team of Robonomics, we worked as developers with Bitcoin projects like mining pools, web wallets and so on.")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-1"}},[o("a",{attrs:{href:"#yakub-1","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Great, I guess most of the community members already know you, but for the newcomers, there’re a lot of things to research.")]),o("p",[e._v("How do you personally contribute to the development of Robonomics.network?")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-1"}},[o("a",{attrs:{href:"#sergei-1","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("In Robonomics I closely work with:")]),o("p",[o("em",[e._v("@akru_me")]),e._v(" – to design substrate implementation of "),o("a",{attrs:{href:"https://github.com/airalab/robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics network")]),e._v(" and our "),o("a",{attrs:{href:"https://github.com/airalab/aira",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Aira OS")]),e._v(" for the robotics industry.")]),o("p",[o("em",[e._v("@vol4tim")]),e._v(" – to develop "),o("a",{attrs:{href:"https://github.com/airalab/robonomics-js",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics dapp library for js devs")]),e._v(".")]),o("p",[o("em",[e._v("@kap2fox")]),e._v(" – to publish new "),o("a",{attrs:{href:"https://robonomics.network/community#science",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("scientific articles")]),e._v(" entitled to the economy of robots.")]),o("p",[o("em",[e._v("@vourhey")]),e._v(" – to prepare "),o("a",{attrs:{href:"https://wiki.robonomics.network/docs/r-and-d-based-on-robonomics-network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robotics + Blockchain R&D projects")]),e._v(".")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-2"}},[o("a",{attrs:{href:"#yakub-2","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("I think it would be great to share the background of "),o("em",[e._v("Alexander Kapitonov (@Kap2Fox)")]),e._v(" with the community. As far as I know, you’re almost lifetime fellows! How did this friendship arise?")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-2"}},[o("a",{attrs:{href:"#sergei-2","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("We are friends for more than 10 years starting from studentship. He introduced me to "),o("em",[e._v("@akru_me")]),e._v(" , "),o("em",[e._v("@vourhey")]),e._v(" and many other people who worked and continue to work with Robonomics concepts. Today he is a big man in the academic world.")]),o("p",[o("strong",[e._v("He’s "),o("a",{attrs:{href:"https://en.itmo.ru/en/viewperson/1564/Alexander_Kapitonov.htm",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Dean of the Faculty of Infocommunication Technologies at ITMO")]),e._v(" in St Petersburg.")])]),o("p",[e._v("Also, he continues to work with Robonomics Network as a researcher, and help to involve students and professors to Robonomics vision, based on a scientific approach.")]),o("p",[e._v("For example, "),o("a",{attrs:{href:"https://blog.aira.life/novel-ways-to-develop-robotics-and-ai-infrastructures-by-seamlessly-merging-new-financial-and-new-c43060de4fa",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Fabio Bonsignorio")]),e._v(" good fellow of Robonomics started to work with us after Alexander reached him in Academic fields.")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-3"}},[o("a",{attrs:{href:"#yakub-3","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Lets dive into the development updates you wanted to share with the community.")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-3"}},[o("a",{attrs:{href:"#sergei-3","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("Robonomics Developer diaries December 2020:")]),o("ol",[o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://twitter.com/EnsRationis/status/1334407718384365568",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics ready for Rococo Relay Chain’s relaunch")])])]),o("p",[e._v("This is going to be the last stop before Kusama Relay Chain is ready to connect parachains. I don’t know how long we should wait until Rococo v1 release, and when we can expect the Kusama Slot auction. But from the tech side, as I see Rococo v1 still has some opened issues on the Github that need to be resolved, and I guess in the next several weeks it will be done.")]),o("p",[e._v("No one knows, how long it will take to implement Rococo v1 features into Kusama. Maybe weeks, maybe months — let’s see and help parity developers on this way.")])])]),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://robonomics.cloud/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics Web Services will be ready for the first testers soon")])])]),o("p",[e._v("Core dev team decided to launch the fork of Polkadot Relay chain with latest Rococo v1 updates and registered there Robonomics Parachain.")])])]),o("p",[e._v("Stay tuned in Twitter, and you will be one of the first who will touch Robonomics Web Services.")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-4"}},[o("a",{attrs:{href:"#yakub-4","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Wow, it means that Robonomics development team helps core Polkadot developers to test out the Relay chain, fascinating!")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-4"}},[o("a",{attrs:{href:"#sergei-4","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("For sure! We’re like a second testbed for Bastian (main contributor of Cumulus) today I think.")]),o("ol",{attrs:{start:"3"}},[o("li",[o("p",[o("strong",[e._v("We finished the XRT staking architecture, and it’s going to be something new for the crypto blockchain industry.")])]),o("p",[e._v("To understand why our staking mechanism is not the same as regular NPoS in Polkadot, we need to dive into its theory.  Staking mechanism in the parachains has to differ from the Relay chain’s architecture because parachains doesn’t have to maintain its security. And that is the goal for researchers and architects!")]),o("p",[e._v("So, our team invented a unique stacking mechanism to achieve Robonomics Web Service’s monthly subscription payments. Beneficiaries of those payments would be XRT stakers. We’ll publish more details in our "),o("a",{attrs:{href:"https://robonomics.network/blog/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("blog")]),e._v(" soon.")])])]),o("ol",{attrs:{start:"4"}},[o("li",[o("p",[o("strong",[o("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics/status/1335955941653704706",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics Sensors Connectivity v0.5 released")])])]),o("p",[e._v("Supported humidity, temperature, pollution, GPS sensors. We merged open data-stuttgart firmware by "),o("a",{attrs:{href:"http://luftdaten.info",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Luftdaten")]),e._v(". "),o("a",{attrs:{href:"https://wiki.robonomics.network/docs/connect-sensor-to-robonomics/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Try to connect a sensor to Robonomics network right now")]),e._v(".")])])])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-5"}},[o("a",{attrs:{href:"#yakub-5","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("It was pretty exciting!")]),o("p",[e._v("Also, you wanted to share further development roadmap for the next 6 months")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-5"}},[o("a",{attrs:{href:"#sergei-5","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("Sure, but that’s not for the AMA session let’s try to make it short and explain it in details in our blog later.\nNext 6-months we will spend with:")]),o("ol",[o("li",[o("p",[e._v("RWS open tests and benchmarking.")])]),o("li",[o("p",[e._v("First R&D interchain communication project to launch IoT devices via transaction from other parachain on Rococo v1.")])]),o("li",[o("p",[e._v("Kusama Parachain slot auction rehearsal.")])]),o("li",[o("p",[e._v("Ethereum Exodus event and first small bags public auctions of XRT.")])]),o("li",[o("p",[e._v("First marketplace of services to hire robotics hourly for developers in San Francisco.")])]),o("li",[o("p",[e._v("DAO IPCI smart building offsetting services with real carbon credits integration with Robonomics Parachain.")])]),o("li",[o("p",[e._v("Launch the first version of the Distributed Sky project, register mechanism for drones.")])])])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-6"}},[o("a",{attrs:{href:"#yakub-6","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("A lot of things to digest for everyone! Lets head to the last month’s most frequent questions from the community.\nPretty sure that everyone will be waiting for the article!")]),o("hr"),o("p",[e._v("One of the most popular questions from the community members is — "),o("strong",[e._v("“When is the kusama parachain auction? And how do we support Robonomics.network increasing the likehood of success?”")])]),o("p",[e._v("I'll answer it by myself:")]),o("p",[e._v("It’s important to notice, that there are no Kusama parachains yet. Polkadot’s community is waiting for the first parachain slots auction. "),o("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics/status/1296834125073125379",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics joined 1st Rococo’s parachains party")]),e._v(" back in 21.08.2020.")]),o("p",[e._v("In that regard, here is how it was possible to connect to Robonomics parachain on Rococo v0.\n"),o("a",{attrs:{href:"https://polkadot.network/introducing-rococo-polkadots-parachain-testnet/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Rococo")]),e._v(" is a Substrate based testnet of Polkadot & Kusama.")]),o("p",[o("strong",[e._v("Currently, we’re "),o("a",{attrs:{href:"https://twitter.com/EnsRationis/status/1334407718384365568",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("ready for Rococo v1")]),e._v(" update, that will bring cross-chain communication for parachains. Robonomics team shared the "),o("a",{attrs:{href:"https://blog.aira.life/robonomics-parachain-bond-offering-b0a6daf50c22",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("vision of obtaining Kusama parachain slot here")]),e._v(".")])]),o("p",[o("strong",[e._v("Long story short — none of the projects confirmed as first parachains on Kusama.")])]),o("hr"),o("p",[o("strong",[e._v("“Сan somebody explain to me what is the relationship between Robonomics and IPCI? and also why do you have a different chain for IPCI ? I couldn’t find any info around this on robonomics site?”")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-6"}},[o("a",{attrs:{href:"#sergei-6","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("DAO IPCI is a Robonomics dev team’s partner since 2016. "),o("a",{attrs:{href:"https://ipci.io/2020-strategy-announcement-project-overview/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Here you can find traction of DAO IPCI development")]),e._v(".")]),o("p",[e._v("A year ago we announced "),o("a",{attrs:{href:"https://evercity.medium.com/blockchain-for-open-sensors-network-initiative-announced-at-at-cop25-3ca15c5a0d32",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Blockchain for Open Sensors Network Initiative at COP25")]),e._v(" and that was the starting point for launching an independent substrate chain on Robonomics implementation.")]),o("p",[e._v("The decision to make DAO IPCI a separate project is a long term strategy. "),o("strong",[e._v("When we are ready to connect Robonomics as a Relay Chain to Polkadot — DAO IPCI will be one of the first parachains inside Robonomics ecosystem")]),e._v(" as an IoT network of pollution measurement sensors for monitoring verification and reporting system connected to the "),o("a",{attrs:{href:"https://twitter.com/EnsRationis/status/1337302002401947648",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("public blockchain")]),e._v(".")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-7"}},[o("a",{attrs:{href:"#yakub-7","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[o("strong",[e._v("What is the destiny of 7 million locked XRT?")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-7"}},[o("a",{attrs:{href:"#sergei-7","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("It will be locked before eth 2.0 phase 2 (my prediction, not earlier than Q2 — Q3 2022).")]),o("p",[e._v("Mentioned XRT budget will be released only on auctions (there are no free tokens in that 7 mln), and only when Robonomics Network will unite its tokenomics on top of Ethereum and Polkadot.")]),o("p",[e._v("I find it as one of the most encouraging parts of all development processes of Robonomics as a platform, because it will allow developers to make a transaction with the same token on Ethereum or Polkadot networks depending on the choice.")]),o("p",[o("strong",[e._v("One platform for robotics engineers with different blockchains under the hood — that is the mission of the core DAO development team in the long term.")])])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-8"}},[o("a",{attrs:{href:"#yakub-8","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[o("strong",[e._v("When will we be able to stake XRT? What’s required to do that? What will we get for staking XRT?")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-8"}},[o("a",{attrs:{href:"#sergei-8","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("I already told you what I wanted to share on this AMA session.  Give me some time to polish the staking article, it’s quite complicated to reveal the unique staking mechanics in a few messages in Telegram.")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-9"}},[o("a",{attrs:{href:"#yakub-9","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Sure, take your time, we will be waiting for it.")]),o("p",[e._v("We’ve almost finished this AMA session! Lets jump to the top 5 questions from the community members.")]),o("p",[e._v("Question from Gordylad:")]),o("blockquote",[o("p",[e._v("Within Scotland, UK we have a blueprint in relation to strategy towards Smart Cities. The four high level goals are centred around Citizens/Communities, Business/Economy, Environment, Performance/Operation.")]),o("p",[e._v("Q — How can Robonomics play a role in helping cities create opportunities within the space of Technology and Innovation?")]),o("p",[e._v("Taking into consideration the approach to sustainability, climate change and importantly changing the mindset of people to open up and to try and understand the benefits of your role in a blockchain transactional environment.")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-9"}},[o("a",{attrs:{href:"#sergei-9","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("A big part of our work is the vision of sustainable smart cities as described by the UN. Have a look at articles like that: "),o("a",{attrs:{href:"http://collections.unu.edu/eserv/UNU:5825/Smart_Sustainable_Cities_v2final.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Smart Sustainable Cities. Reconnaissance Study")]),e._v(".")]),o("p",[e._v("Context The "),o("a",{attrs:{href:"https://unece.org",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("UNECE region")]),e._v(" is among the most highly urbanized in the world - with the rising share of the population…")]),o("p",[e._v("And our scientific papers like this:")]),o("p",[o("strong",[o("a",{attrs:{href:"https://www.frontiersin.org/articles/10.3389/frobt.2020.00070/full",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Trustable Environmental Monitoring by Means of Sensors Networks on Swarming Autonomous Marine")]),e._v(" - The article describes a highly trustable environmental monitoring system employing a small scalable swarm of drones.")])]),o("p",[e._v("So, I think 50% of our research is the vision of developing sustainable smart cities concepts of IoT applications — try to deep dive into our research, ask our engineers (for example Vadim @vourhey ) and build cool stuff for UK with Robonomics open-source platform.")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-10"}},[o("a",{attrs:{href:"#yakub-10","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Question from "),o("em",[e._v("SonOfTheSun")]),e._v(" :")]),o("blockquote",[o("p",[e._v("What sort of corporations, or rather, industries does Robonomics expect $RWS to play a role in? In other words, who would be the potential consumers of $RWS?")])]),o("p",[e._v("I guess SonOfTheSun meant $RWS as Robonomics Web Services.")])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-10"}},[o("a",{attrs:{href:"#sergei-10","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("The same who use today "),o("a",{attrs:{href:"https://aws.amazon.com/iot/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("AWS IoT")]),e._v(" or "),o("a",{attrs:{href:"https://azure.microsoft.com/en-us/overview/iot/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Microsoft Azure IoT")]),e._v(".")]),o("p",[e._v("Have a look at AWS and Azure websites to find who are the users of IoT services of these companies today, the same end-users / companies will be RWS customers in the future. Additionally, RWS will make more for companies IoT infrastructure, because Robonomics Web Services is truly global and can be a platform for companies who are now outside the customer services of Amazon.")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-11"}},[o("a",{attrs:{href:"#yakub-11","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Question from "),o("em",[e._v("zamirakimov")]),e._v(" :")]),o("blockquote",[o("p",[e._v("Will it be possible on Robonomics platform to make robo-taxi infrastructure fully paid by XRT, including XRT payment bot, allowing payments not only for using robo-taxis but also for creating crowd co-owning service for robo-taxis fleet and even further for investing in robotic manufacturing of new robo-cabs to satisfy market requirements?")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-11"}},[o("a",{attrs:{href:"#sergei-11","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("For sure, why not :)")]),o("p",[e._v("Start here: "),o("strong",[o("a",{attrs:{href:"https://wiki.robonomics.network/docs/iris-drone/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Drone control with robonomics.")])]),e._v(" Drone activates after the succesful transcation and store its log with the coordinates in IPFS.")])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-12"}},[o("a",{attrs:{href:"#yakub-12","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Question from "),o("em",[e._v("bijikgelantungan")]),e._v(" :")]),o("blockquote",[o("p",[e._v("As an open source package for 4.0 developers, why should developers make Robonomics platform as their go-to platform? How do you support them? Do you have a developers’ training program like DevCamp or developer’s reward program?")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-12"}},[o("a",{attrs:{href:"#sergei-12","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("If you develop on Robonomics you have the support of hundreds of robotics from the box.\nHave a look at "),o("a",{attrs:{href:"https://robots.ros.org",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("robotics which can be used under Robonomics control")]),e._v(" for your IoT application right now.")]),o("p",[o("strong",[e._v("DevCamps was for Russian developers in Summer 2017, 2018 and we will continue online for English speaking developers this winter")])])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-13"}},[o("a",{attrs:{href:"#yakub-13","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Amazing!!!!")]),o("p",[e._v("And the last one for today — question from "),o("em",[e._v("Ilyaboev")]),e._v(" :")]),o("blockquote",[o("p",[e._v("When will robots become autonomous economic agents?")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[o("h3",{attrs:{id:"sergei-13"}},[o("a",{attrs:{href:"#sergei-13","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Sergei:")]),o("p",[e._v("Right now, in front of you.")]),o("p",[e._v("Before the end of this year, our engineers will launch the X-Mas "),o("a",{attrs:{href:"https://youtu.be/ReXFCqx5--s?t=1539",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Gaka-Chu paintings auction which was presented first time here")]),e._v(". "),o("strong",[e._v("So you will be able to buy artwork directly from robot-artist")])])]),o("Card",{attrs:{image:"/avatars/Yakub-Sheikh.jpg",back:"transparent"}},[o("h3",{attrs:{id:"yakub-14"}},[o("a",{attrs:{href:"#yakub-14","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Yakub:")]),o("p",[e._v("Sergei, thank you for the AMA! It's quite informative!")])]),o("Card",{attrs:{icon:"/icons/icon-forum.png",link:"https://discourse.robonomics.network/"}},[o("h3",{attrs:{id:"visit-our-forum"}},[o("a",{attrs:{href:"#visit-our-forum","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Visit our forum!")]),o("p",[e._v("A place to ask and answer on Robonomics questions.")])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(m),"function"==typeof d&&d(m);t.default=m.exports},"T7a/":function(e,t,o){"use strict";o("4oEz")},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);