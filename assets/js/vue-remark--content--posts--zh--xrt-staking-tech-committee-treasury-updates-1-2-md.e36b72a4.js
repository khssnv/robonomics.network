(window.webpackJsonp=window.webpackJsonp||[]).push([[57,63,64],{"6dNP":function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image4.71307f6.db7d35dd8b74ac8a19bf73672f0321ce.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image4.82a2fbd.db7d35dd8b74ac8a19bf73672f0321ce.jpg 480w","/assets/static/image4.cbab2cf.db7d35dd8b74ac8a19bf73672f0321ce.jpg 1024w","/assets/static/image4.71307f6.db7d35dd8b74ac8a19bf73672f0321ce.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-bb17ab1fe7729c19c64c3c1a5d28c475'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-bb17ab1fe7729c19c64c3c1a5d28c475)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAQBAwUCCP/EAC8QAAEEAQMBBQcFAQAAAAAAAAEAAgMRBBIhMRMFFCJBkTNRUmFikqEyVIGywdH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAABABECwf/aAAwDAQACEQMRAD8A9QZDjHC9zQbBHJvkpaTLljoN0G/eaTGZtiv2rxDz%2boLI7TMgMfT%2bd8f8VDXKLhtod%2bPxt9FcMjxFpmYCOduFmYgmDKmY2veSLry4C0hFE5xuNxcdyESDd9dv7hn2oM7Q4Aztsi/0rsNYBQhPoFxJC18jXaHAAVQA3/KlaDkMBAOQzfjwpXIEoyerDKyy0A6g4ja%2bBqrzTZhaXsPTdTfKhv8AlU5Ptdm6duEYNZllvdpAObF/cEumMuhjSAGzqH9gl0lB4V8TXhzre4Am707D5cqhLYEWZj9o5E%2bR2hLk40l6MZ0bWtj3sURuaG261yCOuWOukQDfLTlgndp6eToHn4Lv8poCgle9j4D6qe9/QfVZtzKSy/bfwFZ3v6D6qiaTqP1VW1JK9%2b8MoIFA/wCpRCEkIQhJCEISQhCEl//Z' /%3e%3c/svg%3e"}},"6tRk":function(e,t,a){"use strict";a.r(t);var A=a("rePB"),o=(a("07d7"),a("PKPk"),a("3bBZ"),a("yXV3"),a("mRH6"),{components:{Button:function(){return a.e(8).then(a.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}},alignContentV:{type:String,default:"top",validator:function(e){return-1!==["middle","top"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(A.a)(e,"card",!0),Object(A.a)(e,"icon",this.icon),Object(A.a)(e,"image",this.image||this.imageLocal),Object(A.a)(e,"".concat(this.orientation),!0),Object(A.a)(e,"".concat(this.back),!0),Object(A.a)(e,"alignContent-".concat(this.alignContent),!0),Object(A.a)(e,"alignContentV-".concat(this.alignContentV),!0),Object(A.a)(e,"oldy","transparent"!=this.back),Object(A.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(A.a)(e,"pic",!0),Object(A.a)(e,"round",this.imageRound),Object(A.a)(e,"icon",this.icon),Object(A.a)(e,"image",this.image||this.imageLocal),Object(A.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(A.a)(e,"link",!0),Object(A.a)(e,"text",this.linkText),Object(A.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?a("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),i=(a("E4Hk"),a("KHd+")),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?a("div",{class:e.pic_classes},[a("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?a("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?a("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?a("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,null,null);t.default=s.exports},E4Hk:function(e,t,a){"use strict";a("F22k")},F22k:function(e,t,a){},FM1E:function(e,t,a){"use strict";a.r(t);var A=a("KHd+"),o=a("6tRk"),i=a("UQSp"),s=a("Kw5r");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var r={Card:o.default,VueRemarkRoot:i.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===n(r[e])&&"function"==typeof r[e].render||"function"==typeof r[e]&&"function"==typeof r[e].options.render?t[e]=r[e]:a[e]=function(){return r[e]}}))},g=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",p={excerpt:null,title:"最高到 1.2 版：质押、技术传播和司库",date:"2021-09-17T00:00:00.000Z",published:!0,locale:"zh",tags:["Tokens","Robonomics parachain","Kusama","XRT"],cover_image:"./images/xrt-staking-tech-committee-treasury-updates-1-2/113_Up_to_version_1_2_stakingtech_comm_treasury.jpg",description:"项目研发人员采用2种重要变更推行机器人经济学平行链工作。第一 种是 接入XRT质押泛函数，第二 种是启动第一个链上管理机制。",abstract:"项目研发人员采用2种重要变更推行机器人经济学平行链工作。第一 种是 接入XRT质押泛函数，第二 种是启动第一个链上管理机制。"};var d=function(e){e.options[l]&&(e.options[l]=p),s.a.util.defineReactive(e.options,l,p),e.options.computed=g.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},f=Object(A.a)({},(function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("VueRemarkRoot",[A("h2",{attrs:{id:"更新11版质押"}},[A("a",{attrs:{href:"#%E6%9B%B4%E6%96%B011%E7%89%88%E8%B4%A8%E6%8A%BC","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("更新1.1版：质押")]),A("h3",{attrs:{id:"原理"}},[A("a",{attrs:{href:"#%E5%8E%9F%E7%90%86","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("原理")]),A("p",[e._v("使用了PoS机制的分散网络通过联锁验证者和所有参与验证者池选择的网络代币持有者的资金来确保己方安全。为了奖励验证者和代币持有者，通常使用类似的PoW奖励模型 - 发行+区块中的所有佣金。这就是NPOS在Polkadot/Kusama中的实现方式。")]),A("blockquote",[A("p",[e._v("值得注意的是，以太坊和polkadot都为己方的奖励模型提出了补充条件。设定目标发行指标、将佣金划分成几个方向，包括销毁一定比例的佣金 — 这已经是附加调整，尝试在自己的工作中实验性推行大量成熟的以及不太成熟的网络。")])]),A("p",[e._v("在其基本功能中，平行链不需要质押。中继链验证者将确保平行链的安全性。这就是项目在拍卖期间为之拼搏的shared security。")]),A("h4",{attrs:{id:"重塑质押"}},[A("a",{attrs:{href:"#%E9%87%8D%E5%A1%91%E8%B4%A8%E6%8A%BC","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("重塑质押")]),A("p",[e._v("想要利用群众的智慧并为社区分配一些任务的平行链将不得不重塑质押。在机器人经济学的案例中，我们做到了。机器人经济学平行链中的质押架构是独一无二的，并且专门用于我们为物联网市场解决的任务。我们为智能设备基本功能提供两种支付方式 - 按交易付费或按月订阅。")]),A("p",[e._v("按交易付费是很容易理解的，不需要解释其工作原理。订阅功能需要稍微解释一下。物联网使用的一些场景要求可以定期访问云功能，最好不要违反此工作计划。含天然气价格的机制仍然没有100%解决该问题，尤其是在保证每个区块的交易时。考虑到这些想法，我们提出了使用质押机制来管理订阅模型上的保证配额的想法。在研发substrate方面，我们做了一个基于零权重交易优先级处理的技巧。如果物联网设备激活订阅，那么来自它的所有交易都将优先于任何其他交易，当然其他零权重交易除外。网络中的代币越多，用户可以获得的订阅就越多。")]),A("Card",[A("p",[A("em",[e._v("示例:")])]),A("p",[e._v("总代币：2000000XRT；在质押中：800000XRT；平行链通过能力：5400 tx per block。")]),A("p",[e._v("得出5400 * 2000000/800000=13500物联网设备的订阅。")])]),A("p",[e._v("就如何分配订阅和支付池的问题我将单独写一篇“自动订阅拍卖”的文章。")]),A("h3",{attrs:{id:"实践"}},[A("a",{attrs:{href:"#%E5%AE%9E%E8%B7%B5","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("实践")]),A("p",[e._v("Dapp应用程序准备就绪："),A("a",{attrs:{href:"https://dapp.robonomics.network/#/staking/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://dapp.robonomics.network/#/staking/")])]),A("p",[A("g-image",{attrs:{src:a("ahrj"),alt:"Dapp应用程序准备就绪"}})],1),A("p",[e._v("第一次交易后，您将获得具有统计信息的表格:")]),A("p",[A("g-image",{attrs:{src:a("6dNP"),alt:"Dapp"}})],1),A("p",[e._v("平行链上账户之间的代币发送仍是被禁用。在Kusama网络上出现平行链后，将可以接入转移代币。")]),A("h3",{attrs:{id:"监测"}},[A("a",{attrs:{href:"#%E7%9B%91%E6%B5%8B","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("监测")]),A("p",[e._v("在 "),A("a",{attrs:{href:"https://robonomics.subscan.io/block/235047",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("#235047区块")]),e._v(" 上，我们有大约一千个账户，最大的代币持有者是金库。金库的资金不参与质押。")]),A("p",[e._v("网络上的其余账户是ERC-20持有者使用dapp exodus代币的结果，或者是Kusama拍卖中第一家Crowdloan公司的入股人。")]),A("p",[e._v("由于与Subscan结合，机器人经济学平行链中的XRT持有者可以使用以下精彩的界面："),A("a",{attrs:{href:"https://robonomics.subscan.io/account",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://robonomics.subscan.io/account")])]),A("p",[A("g-image",{attrs:{src:a("cMSa"),alt:"Subscan.io"}})],1),A("p",[e._v("在dapp Exodus界面，可以看到以太坊到平行链的迁移统计："),A("a",{attrs:{href:"https://dapp.robonomics.network/#/exodus",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://dapp.robonomics.network/#/exodus")])]),A("p",[A("g-image",{attrs:{src:a("OWiQ"),alt:"dapp Exodus"}})],1),A("h3",{attrs:{id:"进一步改进质押功能"}},[A("a",{attrs:{href:"#%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%94%B9%E8%BF%9B%E8%B4%A8%E6%8A%BC%E5%8A%9F%E8%83%BD","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("进一步改进质押功能")]),A("p",[e._v("目前，研发人员的任务是在真实条件下测试代币持有者的基本质押机制 — 增加质押、累积奖励、在7天内解冻代币。")]),A("p",[A("em",[e._v("社区的有趣任务：")]),e._v(" 检查奖励计算器的正确性，考虑两种计算项目 - 结果参与者的10%的annual reward和Crowdloan公司入股人50%的annual reward。")]),A("p",[e._v("1.3 RWS 更新后，质押机制将对网络产生影响。RWS 的更新将为数字孪生添加订阅功能，通过能力的分配任务将变得有意义。因此，我们稍后将能够全面评估质押机制工作的正确性。")]),A("h2",{attrs:{id:"更新-12-版技术委员会和金库"}},[A("a",{attrs:{href:"#%E6%9B%B4%E6%96%B0-12-%E7%89%88%E6%8A%80%E6%9C%AF%E5%A7%94%E5%91%98%E4%BC%9A%E5%92%8C%E9%87%91%E5%BA%93","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("更新 1.2 版：技术委员会和金库")]),A("p",[e._v("该更新版与更新1.1版相同。已经在平行链的工作中推广了。技术委员会目前由6名近2年参与平行链研发的技术专家组成， "),A("a",{attrs:{href:"https://etherscan.io/tx/0x6b9a9cbe7d21badf565ebce0fb50b865da8f5f784899db5fb455d1b276d14acf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("研发人员的DAO通过dapp exodus销毁ERC-20代币，将692500XRT转移到平行链的金库平衡表中。")]),e._v(" 网络的金库和技术委员会是平行链开发人员迄今为止采用的链上管理的第一个要素。以下是关于每一个的更多细节。")]),A("h3",{attrs:{id:"网络技术委员会"}},[A("a",{attrs:{href:"#%E7%BD%91%E7%BB%9C%E6%8A%80%E6%9C%AF%E5%A7%94%E5%91%98%E4%BC%9A","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("网络技术委员会")]),A("p",[e._v("技术委员会工作界面可由以下链接进入： "),A("a",{attrs:{href:"https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/techcomm",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/techcomm")])]),A("p",[A("g-image",{attrs:{src:a("pWD9"),alt:"网络技术委员会"}})],1),A("p",[e._v("如9月15日看到的，技术委员会新增了6名成员，他们是：2名Devops专业人员，软件架构师，执行Substrate的总设计师，高级工程师-机器人技术专家和dapp高级 开发人员。")]),A("p",[e._v("技术委员会将执行更新平行链代码runtime的任务，自Github下一版本开始。")]),A("p",[e._v("您可以在Polkadot wiki中阅读有关技术委员会工作原理的更多信息： "),A("a",{attrs:{href:"https://wiki.polkadot.network/docs/learn-governance#technical-committee",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://wiki.polkadot.network/docs/learn-governance#technical-committee")])]),A("p",[e._v("在区块机器人经济学平行链出现前，项目研发人员不会在增加领事和民主方面扩展链上管理功能。平行链成功出现后，我们将返回到新项目参与者影响网络运营的新机会问题上。")]),A("h3",{attrs:{id:"金库"}},[A("a",{attrs:{href:"#%E9%87%91%E5%BA%93","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("金库")]),A("p",[e._v("可通过以下链接进入平行链金库界面： "),A("a",{attrs:{href:"https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/treasury",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/treasury")])]),A("p",[A("g-image",{attrs:{src:a("P4ph"),alt:"库"}})],1),A("p",[e._v("在过去的一个月里，大约10万个XRT已在2021年夏天从金库中分配到机器人经济学第一家Crowdloan公司的平衡表中。这些操作不会反映在请求中，因为它们是通过 sudo 函数达到的。现在我们有技术委员会，请求将通过投票决定。")]),A("p",[e._v("同样值得关注的还有金库的有趣机制 — 定期销毁平衡表。您可以在 Polkadot wiki 中阅读有关金库工作的更多信息： "),A("a",{attrs:{href:"https://wiki.polkadot.network/docs/learn-treasury",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://wiki.polkadot.network/docs/learn-treasury")])]),A("p",[e._v("社区可以向平行链金库提出请求，要求分配XRT以完成Polkadot 生态系统中机器人经济学的发展或从物联网市场吸引用户的任务。")]),A("h3",{attrs:{id:"最后"}},[A("a",{attrs:{href:"#%E6%9C%80%E5%90%8E","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("最后")]),A("p",[e._v("将来还有很多有趣的更新等着我们，每一次更新都将为社区带来新的机会。在不久的将来，将发布项目社区发展计划的更新，我们将在其中详细介绍未来6个月内社区可访问的内容。")]),A("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent",imageSize:"big"}},[A("p",[e._v("EnsRationis")]),A("p",[e._v("Robonomics network architect")]),A("p",[e._v("element: @ensrationis:robonomics.network")])]),A("Card",{attrs:{icon:"/icons/icon-notification.png",link:"https://twitter.com/AIRA_Robonomics"}},[A("h3",{attrs:{id:"join-our-twitter"}},[A("a",{attrs:{href:"#join-our-twitter","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Join our Twitter")]),A("p",[e._v("Stay tuned and follow updates")])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof d&&d(f);t.default=f.exports},OWiQ:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image6.71307f6.41f5117c96d85f7a74f14ae24d914681.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image6.82a2fbd.41f5117c96d85f7a74f14ae24d914681.jpg 480w","/assets/static/image6.cbab2cf.41f5117c96d85f7a74f14ae24d914681.jpg 1024w","/assets/static/image6.71307f6.41f5117c96d85f7a74f14ae24d914681.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-0e499cbe16e5b4d43fce03ec4f095e5c'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-0e499cbe16e5b4d43fce03ec4f095e5c)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAQBAwUCCP/EADEQAAEEAQICBwYHAAAAAAAAAAEAAgMRBBIhMUETFCJRUoGhBTIzYpGxI3GSssHR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERMWH/2gAMAwEAAhEDEQA/APqDIcY4XuaDYI4m%2bJUs%2bZJBE6Q6ejYC5xN7AeRVOZtiv2rtDn8wXNyxegEvFHV2XEcFZ6N2N7XhyQw4%2bTDJrbqbR4jvRmdlOJ/A2HP/AAXLZhwNyBIxpafCHbA9/eusyXLM0jehiIDiGgy8R3%2b7t%2bVlMl4XIw7NzNDS2AFx94E8P7XqHLyXX0sQZ3VuqYRMZKkhY1lcQ%2bz9FQGNFUOCg5kWdkvcdUOlo5jc/YI8ymfpWOaHEAHVqI2vldc11VFl/G8giWa9ZZb1aQDjYv8AUFBkg6m01xG96Ravy6GNIAbOofuCnSFaWxuAFOrnVKyKOPW%2btJJ7RaHG7%2bq0KfGwsbGzZMuCCNmTJeuQDd1mz9kV2I2aLLWgX8xWwXzAHmoesS%2bL0TrEvi9EFyiy/jeQWOsS%2bL0Wt73PdbjZQUv3hlBAoH%2bVIiICIiAiIgIiIP/Z' /%3e%3c/svg%3e"}},P4ph:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image1.71307f6.946801ab53970e7bc2f146d4b694d5e0.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image1.82a2fbd.946801ab53970e7bc2f146d4b694d5e0.jpg 480w","/assets/static/image1.cbab2cf.946801ab53970e7bc2f146d4b694d5e0.jpg 1024w","/assets/static/image1.71307f6.946801ab53970e7bc2f146d4b694d5e0.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e1bf17a2b5255f909e1a3eb5443e8827'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e1bf17a2b5255f909e1a3eb5443e8827)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwABAAICAwAAAAAAAAAAAAAAAAMGAQUCBAf/xAAuEAACAQEFBQYHAAAAAAAAAAAAAgERAwQFIZEGEhZS0RMUFTFxoSIzQXJzgYP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAeEQACAQQDAQAAAAAAAAAAAAAAAQIDBBSRIVJTgf/aAAwDAQACEQMRAD8A9/4YwdWiVuUx/VupldmMG%2btyn07Vsvc3axl%2bydVWVj4U1MuHb%2ba0jTl1%2b72zUW%2bE4fbXZLvaXSGsVpSIalKeWfmdXhjBaU7jl%2bVupYt1OVNRupypqVK1oy5lBP4iY3NaPEZtfSt8MYLWnh7evbN1Mxszg0xncJj1tW6lj3U5U1G6nKmpOFb%2ba0isyv3e2VttmMEVZnuEzTP5z9Ti2zWD21jKrdJSaZNFq0zHuWaUSYpK2epFaoiLG4qL9owrfzWkMuv3e2RAA0mcAAAAAAAAAAAAAAAAAAAAA//Z' /%3e%3c/svg%3e"}},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},ahrj:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image2.71307f6.d85631876aabc515050c16be30ae1c9c.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image2.82a2fbd.d85631876aabc515050c16be30ae1c9c.jpg 480w","/assets/static/image2.cbab2cf.d85631876aabc515050c16be30ae1c9c.jpg 1024w","/assets/static/image2.71307f6.d85631876aabc515050c16be30ae1c9c.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-115d1c694f016ad8fbf47fa51501d787'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-115d1c694f016ad8fbf47fa51501d787)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAQCAwUBCP/EAC4QAAEEAQEGBQIHAAAAAAAAAAEAAgMRBBITITFBUVIFIlOSoRSBM2FikbLB0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABoRAQEBAQEBAQAAAAAAAAAAAAABEQIxEiH/2gAMAwEAAhEDEQA/APqDIcY4XuaDYI4m%2bJU0mXLHQboN9TSozN2K/dXmHP8AUFyPEzIDHs/zvh/ism3Etya6Azj3N/ZUse9xNvArq1cnEEwZUzG11JF1y4BXwbIyyNjMTnWXOY13mvqd6YfSq3eq32r0B54SD2rXLh482kyxBxHC%2bSoUVhpk9Qe1QZTZmZeuORmotAOoOI3Xy1VzXSUWX%2bN9ghPxlllv00gHGxfuCnVGXQxpADZ1D%2bQU6DxTYnh%2bHh502Zi4sMWXNe0la3zPs2b%2b6pRWdWbJfWeuOerLZ427eXu%2bE28vd8LUijTbt5e74WD3Oe63GysUQVv3wyggUD/akREBERAREQEREH//2Q==' /%3e%3c/svg%3e"}},cMSa:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image3.71307f6.cdcf67b8ec8c03a5abdb871dd1819218.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image3.82a2fbd.cdcf67b8ec8c03a5abdb871dd1819218.jpg 480w","/assets/static/image3.cbab2cf.cdcf67b8ec8c03a5abdb871dd1819218.jpg 1024w","/assets/static/image3.71307f6.cdcf67b8ec8c03a5abdb871dd1819218.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-366aefc8aa095551c611ef3ebfa5f0cb'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-366aefc8aa095551c611ef3ebfa5f0cb)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAMCBAYBB//EADYQAAEDAQUFBAcJAAAAAAAAAAEAAgMRBAUGEiEHMTJBUSIjcdITFGGRocHRFzNSU1VzgZKT/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//EABoRAQACAwEAAAAAAAAAAAAAAAABEQISUTH/2gAMAwEAAhEDEQA/APb/ALMcH/osf%2b0nmUo9meEGVLbnibur3snmWwSrRK6INLXZS52XhzVOv0V75dTTJt2YYNedLniJ/ek8yDsxwWC4G54qsFXd/JoP7LXRmdwBD6DmMg%2bqd2%2bh%2bCNsunUMa3Zpg4ZWtuiLtCoHppNR70u7sG4TgtUctkud0UmropC57g8A0JAqevMc1tHmQAUY53LSgVX1WOCTMyE1eaHWoAJqQATpU66I2nopibu2dQWoSPxebBerhT1c2ezOsvo265gQH9qunhRXDsywe0Ei5Y6jUd9J5ltKEAAilBoFF3CfAo3y6KdVS8aUs9fzh0/C7qrarW1rnCDKCQJQTTkMrtSpBjaZRu3exMh%2b8FPklg6Dw6pkJBl3/FXPhLB4goSNDpY68qlTO8KLwDIyvKpWanJd4S3CoI9iZLvCWmQXH8DvD5FCEBAbhqfemwcR8EIVT4RruJqjJpLH/KEKFCXeEtCEyf/Z' /%3e%3c/svg%3e"}},pWD9:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image5.71307f6.6d62679ff2bef5a0be953c4d9485b4d3.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image5.82a2fbd.6d62679ff2bef5a0be953c4d9485b4d3.jpg 480w","/assets/static/image5.cbab2cf.6d62679ff2bef5a0be953c4d9485b4d3.jpg 1024w","/assets/static/image5.71307f6.6d62679ff2bef5a0be953c4d9485b4d3.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-2770baf0eb02f1ceb71e1fdaf71fab9a'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-2770baf0eb02f1ceb71e1fdaf71fab9a)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAEEBgIDBQf/xAArEAACAQEFBgYDAAAAAAAAAAAAAQIRAwQFUdEGEhYhMZMVIzJBVWFxc4H/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAeEQACAQQDAQAAAAAAAAAAAAAAAQIDBBSRIVJTgf/aAAwDAQACEQMRAD8A%2b/rZfB1NShcml7%2bbLU58J4TzpcZU9vMlqezD1L%2bmYuiMuHb%2ba0jTl1%2b72zxrbBblb3WN3tbnvWUaUW8106c1zMThTCKU8PlT9stTZAVK1oy5lBP4iY3NaPEZtfTWuEsH%2bPl3Z6leymENUeHy7s9TZAThW/mtIrLr93tmtcJ4P8fLuz1Etl8I3Up4e0vu2lqbKdN59K/Iw7fzWkMuv3e2Y5avNkBpM5avNirzZAAWrzYq82QAFq82K/ZAAAAAAAAAAAAAAf/Z' /%3e%3c/svg%3e"}}}]);