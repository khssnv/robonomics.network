(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7qvl":function(t,s,a){},A6W1:function(t,s,a){"use strict";var e={props:["showTitle"]},o=(a("ArLL"),a("KHd+")),i=a("Kw5r"),n=i.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Robonomics Blog",siteDescription:"Robonomics.network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control."}},c=function(t){var s=t.options;s.__staticData?s.__staticData.data=r:(s.__staticData=i.a.observable({data:r}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},l=Object(o.a)(e,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"author"},[e("g-image",{staticClass:"author__image",attrs:{alt:"Robonomics Network Blog",src:a("kWV8"),width:"180",height:"180",blur:"5"}}),t.showTitle?e("h1",{staticClass:"author__site-title"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteName)+"\n\t")]):t._e(),e("p",{staticClass:"author__intro"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteDescription)+"\n\t")]),e("p",{staticClass:"author__links"},[e("g-link",{attrs:{to:"https://robonomics.network"}},[t._v("Website")]),e("g-link",{attrs:{to:"https://wiki.robonomics.network/"}},[t._v("Wiki")]),e("g-link",{attrs:{to:"https://discourse.robonomics.network"}},[t._v("Forum")]),e("g-link",{attrs:{to:"https://t.me/robonomics"}},[t._v("Telegram")]),e("g-link",{attrs:{to:"https://twitter.com/AIRA_Robonomics"}},[t._v("Twitter")]),e("g-link",{attrs:{to:"https://github.com/airalab"}},[t._v("GitHub")])],1)],1)}),[],!1,null,null,null);"function"==typeof c&&c(l);s.a=l.exports},AO8t:function(t,s,a){},ArLL:function(t,s,a){"use strict";var e=a("AO8t");a.n(e).a},"BA+P":function(t,s,a){"use strict";var e=a("n6yM"),o=a("PpWc"),i={components:{PostMeta:e.a,PostTags:o.a},props:["post"]},n=(a("YDir"),a("KHd+")),r=Object(n.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:t.post.title,src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=r.exports},GsXb:function(t,s,a){"use strict";var e=a("7qvl");a.n(e).a},NAO6:function(t,s,a){},PpWc:function(t,s,a){"use strict";var e={props:["post"]},o=(a("GsXb"),a("KHd+")),i=Object(o.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=i.exports},YDir:function(t,s,a){"use strict";var e=a("NAO6");a.n(e).a},YIUa:function(t,s,a){"use strict";var e=a("hpwU");a.n(e).a},hpwU:function(t,s,a){},iyQ6:function(t,s,a){"use strict";a.r(s);a("07d7");var e=a("A6W1"),o=a("BA+P"),i={components:{Author:e.a,PostCard:o.a,MetaInfo:function(){return a.e(1).then(a.bind(null,"9qaU"))}}},n=a("KHd+"),r=a("Kw5r"),c=r.a.config.optionMergeStrategies.computed,l={metadata:{siteName:"Robonomics Blog",siteDescription:"Robonomics.network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control."}},p=function(t){var s=t.options;s.__staticData?s.__staticData.data=l:(s.__staticData=r.a.observable({data:l}),s.computed=c({$static:function(){return s.__staticData.data}},s.computed))},u=null,m=Object(n.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",{attrs:{"show-logo":!1}},[s("MetaInfo",{attrs:{metaTitle:"Home",metaDescription:this.$static.metadata.siteDescription}}),s("Author",{attrs:{"show-title":!0}}),s("div",{staticClass:"posts"},this._l(this.$page.posts.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)],1)}),[],!1,null,null,null);"function"==typeof p&&p(m),"function"==typeof u&&u(m);s.default=m.exports},kWV8:function(t,s){t.exports={type:"image",mimeType:"image/png",src:"/blog/assets/static/Robonomics-network-logo.e6b6009.1c3ec5316ea6ab159cc17df7650a6fc4.png",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/blog/assets/static/Robonomics-network-logo.e6b6009.1c3ec5316ea6ab159cc17df7650a6fc4.png 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-1cefb8d3e222f96e706bf1bd2a0a9a5e'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-1cefb8d3e222f96e706bf1bd2a0a9a5e)' width='180' height='180' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAFxGAABcRgEUlENBAAAIFUlEQVR42u1aCWwUVRienWlBWg5JBFGDEUgl8QINsSLEgIpUEGi7bXeXthCDogIRgZZwE0IiUSMeISZ4ALZTytFSe1qOXkLBoiSKCV4RQgJR6Gy7WwpFp53n92bnzb6drpq0UHbXfcmfeXPs7Pu///uP994IQrRFW7RFW7T1XZMK3LrwfdE4Z8eIB0BXVtaVF6G0BLExAKT/Awg%2bAJR/PY9oBkBZm9GfIxUo7%2bN4n3Fui3gGQGGm/AMAokuqIgTX6tk9SXZHuPX9AIyGwl4fAO4SE4BIZYA/%2bCnsOBgKr8T1jZA04xnRFwwjMB6IfgB8DJCVFPSHGwonQfkEIzvYIjDim3mepbv7oXCSAYiIfjzEwTMlomIBrK3TWvIXPA5IHE97uMNEPJPIQIkYELiqz1DUnQhlnzCoLxppkVndAYmzVozhnvP5ADiAUZ1nhGS4BpQfC5lu9MOfBUGsPx0ylldatIJQ4KbBcQRfM4T1pEeSTcXugkLJFmXNgMcVSMMAgN3CjPCkPm9FqhRkWID1zWdMF2FMmUYrRT5zhFU8kPyKmWUv5FneHV6taNWfmVvWIuRWob/1EpcllP4AzskzJWwAYPN7PsBBnLBuP1YTmDO/PEV4%2bkCLQM60879nLJgAmWxJleEzzeUUmUyV4a/pLT9QGfJTe7fCCc9nAMxB/vUDJbSZoKc82c0vegyiSpj3LGlRePdSXFZZ6yftTW1D6GlBjUcgZ6%2ba5TBcYTSen2EBNKzS3kzIKGtKQ4yI0Ts7lUULmwj5/ph3OT0trfNIHAvYO2YDiJFhkxW4wDWSDt5a1LD7Y/a6hyMG/JFV3UEaGrzuHUc8d9PrFXUem00OKJKGQtKDpc8Qm%2b11i/zpdPBMcS426FbuX%2bDeJhR3EmdZS8fJU4TA%2bh/T65X1XilIQJyCWDA%2bZF2hO/WV8XTQ1sDHDf6x2AK3JuS7iauspauuwauV17cRWF%2bfDFXUe8TA9yqSnhZlRWJpNuQA4ECQjBwuBVSEgVVhdeyBPwkygeoqayUAQD3c1EUBqDVYQF3BWhyNQ3%2bKURyJfBkdaoFvCuQRfqDMikZws0tFHQQM6AQAGhigUQaU1Xk6a5o6CZTPDOIKBnAK3EoZagU2lCo/f8Dyr/zyNX8/9H%2bU9rUzAIizVAeAUAAONV6nAPxWUe%2bNYwGRfHeFB8AfWEMhFnAFi5myaPQ3K0DZVJy5wyqpRKWLoCoAoC6gAQDiY4CXuoBa/y2hIGywsoC5Ao4zIaNueVawzuUxqDHozwgS%2bMy0CJfwSIUeCkAXBwBzAQ0AdFV9dYUgCLZDRhssCLA0so1ZXDHmibcKAFEOCH4ZklG2BtJeYdbfoVtfVlQMmOhZIK9Zc37h1mrrPToAsLiPBd/oLJB9LPCIxbWe/yyv%2b5QFQQIfnbhM6m59tranPKlbXlY0KK9JcrPWT24mQoGXOL7s0I42XiOlta2kvK6VgqDLwWPXKBhTeVeI5ZbW4VY00/T3A670DROs9TwdBJ3tcRQ175vBUVbqpaLruvVjqOKFXiLsbdcGb/tBs68v1PIKT2sHGzu06qNXSTmAqKAZ4WuVHk8YbmCmRc7l6BR7WkCl2VcA8H%2bKgZiLF2xwPPVhlWyqfEx%2bsyrs9mhU8SHbf9Em5H6u2V25WmrqYpLiXKHlrNup5Rf/qiETAIh2CoRae7KLusICAwSJezeLK6l0BanP1gzMqO5fvhpOB8Ffu23nBSEm/7Lej/vsfDz652z7r1GLdw789Kz26OpCLWXuSs2RtoTYnSuIHX27K4fMSsU5AFm9SdYKS89ph49f7zp84i8A0XKhuPr32%2bn7ymtabJb/H0HXEI2MZLvpawbddnfw53QQ7BqsrN%2b37TastefKBqGcEIDS8dD6YnV29hrVmbZEheJqytxcNdWVo/cBgJpGz9F/IXWxmpG1St24pUgtqrrYcfw0IYcaO96kr6tquCIRQqyzxW4LrTeFCVL31duxkOf4YCfUECE275Kvv6dtXPyui%2bThLUdI8oLNJMu1nDizV5GM%2beuIY96a7pLtO7pwPyN7NUlxLCfZL20ib314iJQcukyqj119nL4WfXH6ecIZwz0A4jSX2mX3zdlb9EVexV/8yIoDAAzgo/Ad204LD24o0QG49%2b2ji6a%2btrUhM3lhWbrjjUrQvhIWr4TF9aPeDyJggX5Mz1xZmZyxrDJp1sKyl5e80/De9oal9L1rNxeKH%2bWdCshCGFsiZGJA5rmRLDD39vwTk4lAOtGahykAemsiN8UFaWlMj3PSlwbLRtQgccxVb1gsMNOaf1s7TmS7O/oALPn3BKd80XVbmmOZDVa3weI2ew8EytqQCWzM93ftO/NPCzAJbMPVzwKldz7PzcdpP9a4ngTFE4IFHcqA15/Sq2Fh5vwNAhQXoLhgd63oheQIcAvBOX%2btwEBYtOwDS0pmW%2b7uZMg91pXkHgHBf8rGZYE7RZZ28Aes2AmY8/e5KLwhhtHvjrhKtHdriP5FSPo1h17rL4RLxIf4gmwmJBcs7c%2bzo0dFDzcPPyBV6N/ynMULR9CXGx81xOHeLReMZyAMEwNWJqB/no4VxwLGgh7NEXjaQNGfpUoAsLuVgjAf8gzkeRoPQkRmQKZCXpH2tBHjw6smfq%2bipxmATTwmAclyvHQet90lhJiwOPAiZD/GPN7QQexl3R%2b%2bHyj0qjQ2VnHNikvyfc4ihqDlzT1DQ9hYe7ezzO/xi9wfhCIrAr9HcIf0WKMt2qIt2qIt2qIt2qIt2qItNNrfvsdMIjnwCPkAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},n6yM:function(t,s,a){"use strict";var e={props:["post"]},o=(a("YIUa"),a("KHd+")),i=Object(o.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=i.exports}}]);