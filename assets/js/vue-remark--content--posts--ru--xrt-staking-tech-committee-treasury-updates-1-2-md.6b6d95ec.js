(window.webpackJsonp=window.webpackJsonp||[]).push([[51,62,63],{"6tRk":function(e,t,a){"use strict";a.r(t);var A=a("rePB"),o=(a("07d7"),a("PKPk"),a("3bBZ"),a("yXV3"),a("mRH6"),{components:{Button:function(){return a.e(8).then(a.bind(null,"Kn2e"))}},data:function(){return{isActive:!1}},props:{link:{type:String},linkText:{type:String},linkButton:{type:Boolean,default:!1},overlap:{type:Boolean,default:!0},icon:{type:String},image:{type:String},imageLocal:{type:String},imageSize:{type:String,default:"small",validator:function(e){return-1!==["small","mid","big"].indexOf(e)}},imageRound:{type:Boolean,default:!0},orientation:{type:String,default:"gorizontal",validator:function(e){return-1!==["gorizontal","vertical"].indexOf(e)}},back:{type:String,default:"white",validator:function(e){return-1!==["transparent","white","blue","gradient"].indexOf(e)}},alignContent:{type:String,default:"none",validator:function(e){return-1!==["left","center","right","none"].indexOf(e)}},alignContentV:{type:String,default:"top",validator:function(e){return-1!==["middle","top"].indexOf(e)}}},computed:{card_classes:function(){var e;return e={},Object(A.a)(e,"card",!0),Object(A.a)(e,"icon",this.icon),Object(A.a)(e,"image",this.image||this.imageLocal),Object(A.a)(e,"".concat(this.orientation),!0),Object(A.a)(e,"".concat(this.back),!0),Object(A.a)(e,"alignContent-".concat(this.alignContent),!0),Object(A.a)(e,"alignContentV-".concat(this.alignContentV),!0),Object(A.a)(e,"oldy","transparent"!=this.back),Object(A.a)(e,"oldy__link",this.link||this.popup),e},pic_classes:function(){var e;return e={},Object(A.a)(e,"pic",!0),Object(A.a)(e,"round",this.imageRound),Object(A.a)(e,"icon",this.icon),Object(A.a)(e,"image",this.image||this.imageLocal),Object(A.a)(e,"".concat(this.imageSize),!0),e},link_classes:function(){var e;return e={},Object(A.a)(e,"link",!0),Object(A.a)(e,"text",this.linkText),Object(A.a)(e,"overlap",this.overlap),e},pic_src:function(){return this.icon||this.image?this.icon||this.image:this.imageLocal?a("GSoK")("./".concat(this.imageLocal)):void 0},hasDefaultSlot:function(){return!!this.$slots.default}}}),i=(a("E4Hk"),a("KHd+")),s=Object(i.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.card_classes},[e.icon||e.image||e.imageLocal?a("div",{class:e.pic_classes},[a("g-image",{attrs:{"aria-hidden":"true",src:e.pic_src}})],1):e._e(),e.hasDefaultSlot?a("div",{staticClass:"content"},[e._t("default")],2):e._e(),e.link&&!e.linkButton?a("g-link",{class:e.link_classes,attrs:{to:e.link}},[e.linkText?[e._v(e._s(e.linkText))]:e._e()],2):e._e(),e.link&&e.linkText&&e.linkButton?a("Button",{staticClass:"large",attrs:{link:e.link,label:e.linkText,button:"primary"}}):e._e()],1)}),[],!1,null,null,null);t.default=s.exports},E4Hk:function(e,t,a){"use strict";a("F22k")},F22k:function(e,t,a){},IeBU:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image1.71307f6.946801ab53970e7bc2f146d4b694d5e0.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image1.82a2fbd.946801ab53970e7bc2f146d4b694d5e0.jpg 480w","/assets/static/image1.cbab2cf.946801ab53970e7bc2f146d4b694d5e0.jpg 1024w","/assets/static/image1.71307f6.946801ab53970e7bc2f146d4b694d5e0.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e1bf17a2b5255f909e1a3eb5443e8827'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e1bf17a2b5255f909e1a3eb5443e8827)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwABAAICAwAAAAAAAAAAAAAAAAMGAQUCBAf/xAAuEAACAQEFBQYHAAAAAAAAAAAAAgERAwQFIZEGEhZS0RMUFTFxoSIzQXJzgYP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAeEQACAQQDAQAAAAAAAAAAAAAAAQIDBBSRIVJTgf/aAAwDAQACEQMRAD8A9/4YwdWiVuUx/VupldmMG%2btyn07Vsvc3axl%2bydVWVj4U1MuHb%2ba0jTl1%2b72zUW%2bE4fbXZLvaXSGsVpSIalKeWfmdXhjBaU7jl%2bVupYt1OVNRupypqVK1oy5lBP4iY3NaPEZtfSt8MYLWnh7evbN1Mxszg0xncJj1tW6lj3U5U1G6nKmpOFb%2ba0isyv3e2VttmMEVZnuEzTP5z9Ti2zWD21jKrdJSaZNFq0zHuWaUSYpK2epFaoiLG4qL9owrfzWkMuv3e2RAA0mcAAAAAAAAAAAAAAAAAAAAA//Z' /%3e%3c/svg%3e"}},Qw0n:function(e,t,a){"use strict";a.r(t);var A=a("KHd+"),o=a("6tRk"),i=a("UQSp"),s=a("Kw5r");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var r={Card:o.default,VueRemarkRoot:i.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===n(r[e])&&"function"==typeof r[e].render||"function"==typeof r[e]&&"function"==typeof r[e].options.render?t[e]=r[e]:a[e]=function(){return r[e]}}))},g=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",B={excerpt:null,title:"Обновление до версии 1.2: Стейкинг, Тех. комитет и Сокровищница",date:"2021-09-17T00:00:00.000Z",published:!0,locale:"ru",tags:["Токен","Парачейн Робономики","Kusama","XRT"],cover_image:"./images/xrt-staking-tech-committee-treasury-updates-1-2/113_Up_to_version_1_2_stakingtech_comm_treasury.jpg",description:"Разработчики проекта внедрили 2 важных изменения в работу парачейна Робономики. Первое - это включение функционала стейкинга XRT, второе - запуск первых механизмов on-chain управления.",abstract:"Разработчики проекта внедрили 2 важных изменения в работу парачейна Робономики. Первое - это включение функционала стейкинга XRT, второе - запуск первых механизмов on-chain управления."};var d=function(e){e.options[l]&&(e.options[l]=B),s.a.util.defineReactive(e.options,l,B),e.options.computed=g.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},f=Object(A.a)({},(function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("VueRemarkRoot",[A("h2",{attrs:{id:"обновление-11-стейкинг"}},[A("a",{attrs:{href:"#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-11-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D0%B8%D0%BD%D0%B3","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Обновление 1.1: стейкинг")]),A("h3",{attrs:{id:"теория"}},[A("a",{attrs:{href:"#%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%8F","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Теория")]),A("p",[e._v("Децентрализованные сети, использующие PoS механизм, обеспечивают свою безопасность за счёт блокировки средств валидаторов и всех держателей токенов сети, кто участвует в выборе пула валидаторов. Для поощрения валидаторов и держателей токенов обычно применяется аналогичная PoW модель вознаграждения - эмиссия + все комиссии в блоке. Так реализован NPoS в Polkadot/Kusama.")]),A("blockquote",[A("p",[e._v("Примечательно, что и Ethereum и Polkadot предлагают дополнительные условия для своих моделей вознаграждения. Задание целевых показателей эмиссии, разделение комиссии на несколько направлений, включая сжигание некоторого процента от комиссии - это уже дополнительные настройки, которые пробуют экспериментально внедрять в свою работу большие взрослые и не очень взрослые сети.")])]),A("p",[e._v("Парачейнам не нужен стейкинг в его базовой функции. Безопасность парачейнов обеспечивают валидаторы Relay chain сети. Это и есть shared security, за который борются во время аукционов проекты.")]),A("h4",{attrs:{id:"переизобретая-стейкинг"}},[A("a",{attrs:{href:"#%D0%BF%D0%B5%D1%80%D0%B5%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B5%D1%82%D0%B0%D1%8F-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D0%B8%D0%BD%D0%B3","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Переизобретая стейкинг")]),A("p",[e._v("Парачейнам, кто хочет воспользоваться мудростью толпы, отдать сообществу часть задач придется переизобрести стейкинг. В случаи Робономики мы это сделали. Архитектура стейкинга в парачейне Робономики уникальна и специфична задачам из области блокчейн, которые мы решаем для IoT рынка. Мы предлагаем два способа оплаты основных функций для умных устройств - оплата за транзакцию или ежемесячная подписка.")]),A("p",[e._v("Оплата за транзакцию понятна и не требует объяснения своей работы. Функцию подписки стоит немного пояснить. Дело в том, что некоторым сценариям применения IoT требуется возможность периодического обращения к функциям облака, и нарушать этот график крайне не желательно. Механизм с ценой газа всё равно не решает данную проблему 100%, особенно когда речь идёт о гарантии проведения транзакций каждый блок. С такими мыслями мы пришли к идеи применить стейкинг механизм для управления гарантированной квотой по модели подписки. Со стороны Substrate разработки мы сделали трюк, основанный на приоритетной обработке транзакций с нулевым весом. Если IoT устройство активирует подписку, то все транзакции от него будут иметь приоритет перед любыми другими, кроме конечно же других транзакций с нулевым весом. Чем больше токенов будет находиться в стейке сети, тем больше подписок будет доступно пользователям.")]),A("Card",[A("p",[A("em",[e._v("Пример:")])]),A("p",[e._v("Всего токенов: 2,000,000 XRT;\nв стейке: 800,000 XRT;\nпропускная способность парачейна: 5400 tx per block.")]),A("p",[e._v("Получается 5400 * 2,000,000 / 800,000 = 13,500 подписок для IoT устройств.")])]),A("p",[e._v("О том, как будут распределяться подписки и пул оплаты я напишу отдельно в статье под названием “Автоматизированный аукцион подписок”.")]),A("h3",{attrs:{id:"практика"}},[A("a",{attrs:{href:"#%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Практика")]),A("p",[e._v("Децентрализованное приложение готово к работе: "),A("a",{attrs:{href:"https://dapp.robonomics.network/#/staking/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://dapp.robonomics.network/#/staking/")])]),A("p",[A("g-image",{attrs:{src:a("r42W"),alt:"Стейкинг XRT в децентрализованном приложении Робономики, новый бондинг"}})],1),A("p",[e._v("После первой транзакции у вас появится вот такая таблица со статистикой:")]),A("p",[A("g-image",{attrs:{src:a("fBQe"),alt:"Стейкинг XRT в децентрализованном приложении Робономики, список бондингов"}})],1),A("p",[e._v("Отправка токенов между аккаунтами в парачейне остаётся отключенной. Возможность перевести токены будет включена после появления парачейна в сети Кусама.")]),A("h3",{attrs:{id:"наблюдения"}},[A("a",{attrs:{href:"#%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Наблюдения")]),A("p",[e._v("На момент "),A("a",{attrs:{href:"https://robonomics.subscan.io/block/235047",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("блока #235,047")]),e._v(" мы имеем примерно одну тысячу аккаунтов, самый крупный держатель токенов - сокровищница. Участвовать в стейкинге средства сокровищницы не будут.")]),A("p",[e._v("Остальные аккаунты в сети появились в результате использования держателями ERC-20 токенов Exodus в dapp или были участниками первой Crowdloan кампании в аукционах Кусама.")]),A("p",[e._v("Благодаря интеграции с Subscan держатели XRT в парачейне Робономики могут воспользоваться вот таким замечательным интерфейсом: "),A("a",{attrs:{href:"https://robonomics.subscan.io/account",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://robonomics.subscan.io/account")])]),A("p",[A("g-image",{attrs:{src:a("TlId"),alt:"Аккаунт Робономики на Subscan.io"}})],1),A("p",[e._v("На интерфейсе dapp Exodus можно увидеть статистику миграции из Ethereum в парачейн: "),A("a",{attrs:{href:"https://dapp.robonomics.network/#/exodus",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://dapp.robonomics.network/#/exodus")])]),A("p",[A("g-image",{attrs:{src:a("cjiK"),alt:"XRT из блокчейна Ethereum в парачейн Робономики в приложении"}})],1),A("h3",{attrs:{id:"последующие-улучшения-функционала-стейкинга"}},[A("a",{attrs:{href:"#%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D0%B8%D0%B5-%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%B0-%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D0%B8%D0%BD%D0%B3%D0%B0","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Последующие улучшения функционала стейкинга")]),A("p",[e._v("На текущий момент задача разработчиков – протестировать в реальных условиях базовые механизмы стейкинга для держателей токенов: добавление в стейк, накопление награды, разморозка токенов в течении 7 дней. ")]),A("p",[A("em",[e._v("Интересная задача для сообщества:")]),e._v(" проверить корректность работы калькулятора награды, с учётом двух вариантов начисления - 10% annual reward для участников Exodus  и 50% annual reward для участников Crowdloan кампании.")]),A("p",[e._v("После обновления 1.3 RWS механизм стейкинга будет иметь эффект на сеть. Обновление RWS добавит возможность подписок для цифровых двойников, и задача по распределению пропускной способности будет иметь смысл. Соответственно корректность работы стейкинг механизма в полной мере мы сможем оценить позже.")]),A("h2",{attrs:{id:"обновление-12-тех-комитет-и-сокровищница"}},[A("a",{attrs:{href:"#%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-12-%D1%82%D0%B5%D1%85-%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82-%D0%B8-%D1%81%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B8%D1%89%D0%BD%D0%B8%D1%86%D0%B0","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Обновление 1.2: Тех. комитет и Сокровищница")]),A("p",[e._v("Данное обновление так же, как и обновление 1.1. уже внедрено в работу парачейна. Тех комитет на сегодня собран из шести технических специалистов, кто принимал участие в разработке парачейна в последние 2 года, а на баланс сокровищницы парачейна "),A("a",{attrs:{href:"https://etherscan.io/tx/0x6b9a9cbe7d21badf565ebce0fb50b865da8f5f784899db5fb455d1b276d14acf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("ДАО разработчиков передало 692,500 XRT")]),e._v(" путём сжигания ERC-20 токенов через Exodus в dapp. Сокровищница и технический комитет сети - это первые элементы on-chain управления, которые разработчики парачейна внедрили на сегодня. Далее немного подробнее о каждом из них.")]),A("h3",{attrs:{id:"технический-комитет-сети"}},[A("a",{attrs:{href:"#%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82-%D1%81%D0%B5%D1%82%D0%B8","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Технический комитет сети")]),A("p",[e._v("Интерфейс работы технического комитета доступен по ссылке: "),A("a",{attrs:{href:"https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/techcomm",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/techcomm")])]),A("p",[A("g-image",{attrs:{src:a("ZNLK"),alt:"Интерфейс работы технического комитета"}})],1),A("p",[e._v("Как можно заметить, на момент 15 сентября добавлены шесть участников технического комитета, среди них: два Devops специалиста, архитектор ПО, главный разработчик Substrate имплементации, старший инженер-робототехник и старший dapp разработчик.")]),A("p",[e._v("Технический комитет будет выполнять задачи по обновлению runtime кода парачейна, начиная с последующих релизов на Github.")]),A("p",[e._v("Почитать подробнее теорию о работе тех комитета можно в Polkadot wiki: "),A("a",{attrs:{href:"https://wiki.polkadot.network/docs/learn-governance#technical-committee",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://wiki.polkadot.network/docs/learn-governance#technical-committee")])]),A("p",[e._v("До момента появления парачейна Робономики в Кусама разработчики проекта не будут расширять функции on-chain управления в стороны добавления консулов и демократии. После успешного появления парачейна, мы вернёмся к вопросу новых возможностей влиять на работу сети для новых участников проекта.")]),A("h3",{attrs:{id:"сокровищница"}},[A("a",{attrs:{href:"#%D1%81%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B8%D1%89%D0%BD%D0%B8%D1%86%D0%B0","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Сокровищница")]),A("p",[e._v("Интерфейс сокровищницы парачейна доступен по ссылке: "),A("a",{attrs:{href:"https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/treasury",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://parachain.robonomics.network/?rpc=wss%3A%2F%2Fmain.frontier.rpc.robonomics.network%2F#/treasury")])]),A("p",[A("g-image",{attrs:{src:a("IeBU"),alt:"Интерфейс сокровищницы парачейна"}})],1),A("p",[e._v("За последний месяц из сокровищницы были распределены ~100k XRT на балансы участников первой Crowdloan кампании Робономики летом 2021 года. Эти операции не отражены в запросах, так как проходили через функции sudo. Теперь у нас есть технический комитет, и запросы будут проходить через голосование.")]),A("p",[e._v("Также стоит обратить внимание на интересный механизм сокровищницы - периодическое сжигание балансов. Почитать подробнее о работе сокровищницы можно в Polkadot wiki: "),A("a",{attrs:{href:"https://wiki.polkadot.network/docs/learn-treasury",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://wiki.polkadot.network/docs/learn-treasury")])]),A("p",[e._v("Сообщество может делать запросы в сокровищницу парачейна на выделение XRT под задачи, которые будут полезны развитию Робономики в экосистеме Polkadot или привлечению пользователей с IoT рынка.")]),A("h3",{attrs:{id:"в-заключение"}},[A("a",{attrs:{href:"#%D0%B2-%D0%B7%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("В заключение")]),A("p",[e._v("Впереди нас ждёт много интересных обновлений, и каждое из них будет открывать новые возможности для сообщества. В ближайшее время будут опубликованы обновления программы развития сообщества проекта, где мы расскажем больше о том, что будет доступно сообществу в ближайшие 6 месяцев.")]),A("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent",imageSize:"big"}},[A("p",[e._v("EnsRationis")]),A("p",[e._v("Архитектор сети Робономика")]),A("p",[e._v("element: @ensrationis:robonomics.network")])]),A("Card",{attrs:{icon:"/icons/icon-notification.png",link:"https://twitter.com/AIRA_Robonomics"}},[A("h3",{attrs:{id:"подписывайтесь-на-наш-twitter"}},[A("a",{attrs:{href:"#%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B9%D1%82%D0%B5%D1%81%D1%8C-%D0%BD%D0%B0-%D0%BD%D0%B0%D1%88-twitter","aria-hidden":"true"}},[A("span",{staticClass:"icon icon-link"})]),e._v("Подписывайтесь на наш Twitter")]),A("p",[e._v("Следите за обновлениями и новостями")])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof d&&d(f);t.default=f.exports},TlId:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image3.71307f6.cdcf67b8ec8c03a5abdb871dd1819218.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image3.82a2fbd.cdcf67b8ec8c03a5abdb871dd1819218.jpg 480w","/assets/static/image3.cbab2cf.cdcf67b8ec8c03a5abdb871dd1819218.jpg 1024w","/assets/static/image3.71307f6.cdcf67b8ec8c03a5abdb871dd1819218.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-366aefc8aa095551c611ef3ebfa5f0cb'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-366aefc8aa095551c611ef3ebfa5f0cb)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAMCBAYBB//EADYQAAEDAQUFBAcJAAAAAAAAAAEAAgMRBAUGEiEHMTJBUSIjcdITFGGRocHRFzNSU1VzgZKT/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//EABoRAQACAwEAAAAAAAAAAAAAAAABEQISUTH/2gAMAwEAAhEDEQA/APb/ALMcH/osf%2b0nmUo9meEGVLbnibur3snmWwSrRK6INLXZS52XhzVOv0V75dTTJt2YYNedLniJ/ek8yDsxwWC4G54qsFXd/JoP7LXRmdwBD6DmMg%2bqd2%2bh%2bCNsunUMa3Zpg4ZWtuiLtCoHppNR70u7sG4TgtUctkud0UmropC57g8A0JAqevMc1tHmQAUY53LSgVX1WOCTMyE1eaHWoAJqQATpU66I2nopibu2dQWoSPxebBerhT1c2ezOsvo265gQH9qunhRXDsywe0Ei5Y6jUd9J5ltKEAAilBoFF3CfAo3y6KdVS8aUs9fzh0/C7qrarW1rnCDKCQJQTTkMrtSpBjaZRu3exMh%2b8FPklg6Dw6pkJBl3/FXPhLB4goSNDpY68qlTO8KLwDIyvKpWanJd4S3CoI9iZLvCWmQXH8DvD5FCEBAbhqfemwcR8EIVT4RruJqjJpLH/KEKFCXeEtCEyf/Z' /%3e%3c/svg%3e"}},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},ZNLK:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image5.71307f6.6d62679ff2bef5a0be953c4d9485b4d3.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image5.82a2fbd.6d62679ff2bef5a0be953c4d9485b4d3.jpg 480w","/assets/static/image5.cbab2cf.6d62679ff2bef5a0be953c4d9485b4d3.jpg 1024w","/assets/static/image5.71307f6.6d62679ff2bef5a0be953c4d9485b4d3.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-2770baf0eb02f1ceb71e1fdaf71fab9a'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-2770baf0eb02f1ceb71e1fdaf71fab9a)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAEEBgIDBQf/xAArEAACAQEFBgYDAAAAAAAAAAAAAQIRAwQFUdEGEhYhMZMVIzJBVWFxc4H/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAeEQACAQQDAQAAAAAAAAAAAAAAAQIDBBSRIVJTgf/aAAwDAQACEQMRAD8A%2b/rZfB1NShcml7%2bbLU58J4TzpcZU9vMlqezD1L%2bmYuiMuHb%2ba0jTl1%2b72zxrbBblb3WN3tbnvWUaUW8106c1zMThTCKU8PlT9stTZAVK1oy5lBP4iY3NaPEZtfTWuEsH%2bPl3Z6leymENUeHy7s9TZAThW/mtIrLr93tmtcJ4P8fLuz1Etl8I3Up4e0vu2lqbKdN59K/Iw7fzWkMuv3e2Y5avNkBpM5avNirzZAAWrzYq82QAFq82K/ZAAAAAAAAAAAAAAf/Z' /%3e%3c/svg%3e"}},cjiK:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image6.71307f6.41f5117c96d85f7a74f14ae24d914681.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image6.82a2fbd.41f5117c96d85f7a74f14ae24d914681.jpg 480w","/assets/static/image6.cbab2cf.41f5117c96d85f7a74f14ae24d914681.jpg 1024w","/assets/static/image6.71307f6.41f5117c96d85f7a74f14ae24d914681.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-0e499cbe16e5b4d43fce03ec4f095e5c'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-0e499cbe16e5b4d43fce03ec4f095e5c)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAQBAwUCCP/EADEQAAEEAQICBwYHAAAAAAAAAAEAAgMRBBIhMUETFCJRUoGhBTIzYpGxI3GSssHR8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERMWH/2gAMAwEAAhEDEQA/APqDIcY4XuaDYI4m%2bJUs%2bZJBE6Q6ejYC5xN7AeRVOZtiv2rtDn8wXNyxegEvFHV2XEcFZ6N2N7XhyQw4%2bTDJrbqbR4jvRmdlOJ/A2HP/AAXLZhwNyBIxpafCHbA9/eusyXLM0jehiIDiGgy8R3%2b7t%2bVlMl4XIw7NzNDS2AFx94E8P7XqHLyXX0sQZ3VuqYRMZKkhY1lcQ%2bz9FQGNFUOCg5kWdkvcdUOlo5jc/YI8ymfpWOaHEAHVqI2vldc11VFl/G8giWa9ZZb1aQDjYv8AUFBkg6m01xG96Ravy6GNIAbOofuCnSFaWxuAFOrnVKyKOPW%2btJJ7RaHG7%2bq0KfGwsbGzZMuCCNmTJeuQDd1mz9kV2I2aLLWgX8xWwXzAHmoesS%2bL0TrEvi9EFyiy/jeQWOsS%2bL0Wt73PdbjZQUv3hlBAoH%2bVIiICIiAiIgIiIP/Z' /%3e%3c/svg%3e"}},fBQe:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image4.71307f6.db7d35dd8b74ac8a19bf73672f0321ce.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image4.82a2fbd.db7d35dd8b74ac8a19bf73672f0321ce.jpg 480w","/assets/static/image4.cbab2cf.db7d35dd8b74ac8a19bf73672f0321ce.jpg 1024w","/assets/static/image4.71307f6.db7d35dd8b74ac8a19bf73672f0321ce.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-bb17ab1fe7729c19c64c3c1a5d28c475'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-bb17ab1fe7729c19c64c3c1a5d28c475)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAQBAwUCCP/EAC8QAAEEAQMBBQcFAQAAAAAAAAEAAgMRBBIhMRMFFCJBkTNRUmFikqEyVIGywdH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAABABECwf/aAAwDAQACEQMRAD8A9QZDjHC9zQbBHJvkpaTLljoN0G/eaTGZtiv2rxDz%2boLI7TMgMfT%2bd8f8VDXKLhtod%2bPxt9FcMjxFpmYCOduFmYgmDKmY2veSLry4C0hFE5xuNxcdyESDd9dv7hn2oM7Q4Aztsi/0rsNYBQhPoFxJC18jXaHAAVQA3/KlaDkMBAOQzfjwpXIEoyerDKyy0A6g4ja%2bBqrzTZhaXsPTdTfKhv8AlU5Ptdm6duEYNZllvdpAObF/cEumMuhjSAGzqH9gl0lB4V8TXhzre4Am707D5cqhLYEWZj9o5E%2bR2hLk40l6MZ0bWtj3sURuaG261yCOuWOukQDfLTlgndp6eToHn4Lv8poCgle9j4D6qe9/QfVZtzKSy/bfwFZ3v6D6qiaTqP1VW1JK9%2b8MoIFA/wCpRCEkIQhJCEISQhCEl//Z' /%3e%3c/svg%3e"}},r42W:function(e,t){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/image2.71307f6.d85631876aabc515050c16be30ae1c9c.jpg",size:{width:1500,height:844},sizes:"(max-width: 1500px) 100vw, 1500px",srcset:["/assets/static/image2.82a2fbd.d85631876aabc515050c16be30ae1c9c.jpg 480w","/assets/static/image2.cbab2cf.d85631876aabc515050c16be30ae1c9c.jpg 1024w","/assets/static/image2.71307f6.d85631876aabc515050c16be30ae1c9c.jpg 1500w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1500 844' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-115d1c694f016ad8fbf47fa51501d787'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-115d1c694f016ad8fbf47fa51501d787)' width='1500' height='844' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAQCAwUBCP/EAC4QAAEEAQEGBQIHAAAAAAAAAAEAAgMRBBITITFBUVIFIlOSoRSBM2FikbLB0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABoRAQEBAQEBAQAAAAAAAAAAAAABEQIxEiH/2gAMAwEAAhEDEQA/APqDIcY4XuaDYI4m%2bJU0mXLHQboN9TSozN2K/dXmHP8AUFyPEzIDHs/zvh/ism3Etya6Azj3N/ZUse9xNvArq1cnEEwZUzG11JF1y4BXwbIyyNjMTnWXOY13mvqd6YfSq3eq32r0B54SD2rXLh482kyxBxHC%2bSoUVhpk9Qe1QZTZmZeuORmotAOoOI3Xy1VzXSUWX%2bN9ghPxlllv00gHGxfuCnVGXQxpADZ1D%2bQU6DxTYnh%2bHh502Zi4sMWXNe0la3zPs2b%2b6pRWdWbJfWeuOerLZ427eXu%2bE28vd8LUijTbt5e74WD3Oe63GysUQVv3wyggUD/akREBERAREQEREH//2Q==' /%3e%3c/svg%3e"}}}]);