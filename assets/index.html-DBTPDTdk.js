import{a as G}from"./axios-B4uVmeYG.js";import{_ as M}from"./plugin-vue_export-helper-DlAUqK2U.js";import{f as P,g as Z,r as F,c as a,a as e,b as n,d as i,w as c,h as l,t as _,F as r,i as T,o}from"./app-Df6vPpcQ.js";const B={__name:"index.html",setup(N,{expose:p}){p();const d=P(null);Z(()=>{G.get("/jsons/gameinfo.json").then(f=>{d.value=f.data})});const t={gameInfoData:d,get axios(){return G},ref:P,onBeforeMount:Z};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},Q={class:"hint-container important"},L=e("p",{class:"hint-container-title"},"重要",-1),V={class:"hint-container warning"},j=e("p",{class:"hint-container-title"},"注意",-1),O=e("p",null,"请注意：本页面提供的下载链接仅供学习交流使用，不得用于商业用途，请于下载后 24 小时内删除。",-1),C=e("p",null,"下载或在线游玩表示您已阅读并同意以下协议和声明：",-1),E=e("ul",null,[e("li",null,"《PvZ2 Gardendless》使用协议"),e("li",null,"《PvZ2 Gardendless》免责声明")],-1),S={key:0},R={key:0},Y=e("h2",{id:"更新日志",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更新日志"},[e("span",null,"更新日志")])],-1),q={key:0},J={id:"onedrive-链接",tabindex:"-1"},U={class:"header-anchor",href:"#onedrive-链接"},W=["href"],H={id:"钛盘链接",tabindex:"-1"},K={class:"header-anchor",href:"#钛盘链接"},X=["href"],$=e("h2",{id:"百度网盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#百度网盘"},[e("span",null,"百度网盘")])],-1),ee=["href"],te=e("h2",{id:"_123-网盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_123-网盘"},[e("span",null,"123 网盘")])],-1),ne=["href"],ae=e("h2",{id:"夸克网盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#夸克网盘"},[e("span",null,"夸克网盘")])],-1),oe=["href"],ie={id:"mega-网盘",tabindex:"-1"},le={class:"header-anchor",href:"#mega-网盘"},re=["href"],se={id:"小飞机网盘",tabindex:"-1"},de={class:"header-anchor",href:"#小飞机网盘"},he=["href"],ce=e("h2",{id:"github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github"},[e("span",null,"Github")])],-1),_e=["href"];function pe(N,p,d,t,f,fe){var m,u,g,v,D,y,w,k,x,b,I;const h=F("RouteLink"),s=F("Badge");return o(),a("div",null,[e("div",Q,[L,e("p",null,[n("下载游玩时的相关问题 FAQ 请查看"),i(h,{to:"/guide/FAQ.html"},{default:c(()=>[n("这里")]),_:1}),n("，系统要求和推荐配置请查看"),i(h,{to:"/guide/requirement.html"},{default:c(()=>[n("这里")]),_:1})])]),e("div",V,[j,O,C,E,e("p",null,[n("以上协议和声明的具体内容请查看"),i(h,{to:"/instructions/"},{default:c(()=>[n("这里")]),_:1})])]),l(` 当前游戏有两种游玩方式：

- 下载游戏客户端压缩包游玩，仅支持 \`Windows 10/11\`系统。
- 在线游玩：[点击进入](https://pvz2-test.gaozih.com)

> [!info]
> 由于游戏资源文件较多，在线游玩可能会有加载速度较慢及卡顿现象，若需要快速加载，请选择下载游戏客户端压缩包游玩。 `),e("p",null,[n("本站只提供最新正式版本的下载链接"),(m=t.gameInfoData)!=null&&m.Version?(o(),a("span",S,"，当前最新的游戏版本为 "+_(t.gameInfoData.Version),1)):l("v-if",!0),n("。")]),e("p",null,[(u=t.gameInfoData)!=null&&u.Name?(o(),a("span",R,"该游戏版本名称: "+_(t.gameInfoData.Name),1)):l("v-if",!0)]),Y,(g=t.gameInfoData)!=null&&g.NewFeatures?(o(),a("ul",q,[e("li",null,[(o(!0),a(r,null,T(t.gameInfoData.NewFeatures,(z,A)=>(o(),a("li",{key:A},_(z),1))),128))])])):(o(),a(r,{key:1},[n("暂无")],64)),(v=t.gameInfoData)!=null&&v.Download.Onedrive?(o(),a(r,{key:2},[e("h2",J,[e("a",U,[e("span",null,[n("Onedrive 链接 "),i(s,{text:"无需登录",type:"info"}),i(s,{text:"高速",type:"tip"}),i(s,{text:"海外",type:"warning"})])])]),e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.Onedrive},"点击进入",8,W)])],64)):l("v-if",!0),(D=t.gameInfoData)!=null&&D.Download.TmpLink?(o(),a(r,{key:3},[e("h2",H,[e("a",K,[e("span",null,[n("钛盘链接 "),i(s,{text:"无需登录",type:"info"}),i(s,{text:"高速",type:"tip"})])])]),e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.TmpLink},"点击进入",8,X)])],64)):l("v-if",!0),(y=t.gameInfoData)!=null&&y.Download.Baidu?(o(),a(r,{key:4},[$,e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.Baidu},"点击进入",8,ee)])],64)):l("v-if",!0),(w=t.gameInfoData)!=null&&w.Download.Pan123?(o(),a(r,{key:5},[te,e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.Pan123},"点击进入",8,ne)])],64)):l("v-if",!0),(k=t.gameInfoData)!=null&&k.Download.Quark?(o(),a(r,{key:6},[ae,e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.Quark},"点击进入",8,oe)])],64)):l("v-if",!0),(x=t.gameInfoData)!=null&&x.Download.Mega?(o(),a(r,{key:7},[e("h2",ie,[e("a",le,[e("span",null,[n("MEGA 网盘 "),i(s,{text:"无需登录",type:"info"}),i(s,{text:"高速",type:"tip"}),i(s,{text:"海外",type:"warning"})])])]),e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.Mega},"点击进入",8,re)])],64)):l("v-if",!0),(b=t.gameInfoData)!=null&&b.Download.Feijipan?(o(),a(r,{key:8},[e("h2",se,[e("a",de,[e("span",null,[n("小飞机网盘 "),i(s,{text:"无需登录",type:"info"})])])]),e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.Feijipan},"点击进入",8,he)])],64)):l("v-if",!0),(I=t.gameInfoData)!=null&&I.Download.Github?(o(),a(r,{key:9},[ce,e("p",null,[n("下载链接："),e("a",{href:t.gameInfoData.Download.Github},"点击进入",8,_e)])],64)):l("v-if",!0)])}const ve=M(B,[["render",pe],["__file","index.html.vue"]]),De=JSON.parse('{"path":"/download/","title":"下载链接","lang":"zh-CN","frontmatter":{"title":"下载链接","index":false,"icon":"download","pageInfo":false,"breadcrumb":false,"sidebar":false,"comment":false,"category":["Download"],"description":"重要 下载游玩时的相关问题 FAQ 请查看，系统要求和推荐配置请查看 注意 请注意：本页面提供的下载链接仅供学习交流使用，不得用于商业用途，请于下载后 24 小时内删除。 下载或在线游玩表示您已阅读并同意以下协议和声明： 《PvZ2 Gardendless》使用协议 《PvZ2 Gardendless》免责声明 以上协议和声明的具体内容请查看 本站只提...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.pvzge.com/en/download/"}],["meta",{"property":"og:url","content":"https://www.pvzge.com/download/"}],["meta",{"property":"og:site_name","content":"PvZ2 Gardendless 官方网站|完全重置的PVZ2体验"}],["meta",{"property":"og:title","content":"下载链接"}],["meta",{"property":"og:description","content":"重要 下载游玩时的相关问题 FAQ 请查看，系统要求和推荐配置请查看 注意 请注意：本页面提供的下载链接仅供学习交流使用，不得用于商业用途，请于下载后 24 小时内删除。 下载或在线游玩表示您已阅读并同意以下协议和声明： 《PvZ2 Gardendless》使用协议 《PvZ2 Gardendless》免责声明 以上协议和声明的具体内容请查看 本站只提..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-21T15:51:45.000Z"}],["meta",{"property":"article:author","content":"LMYY"}],["meta",{"property":"article:modified_time","content":"2024-07-21T15:51:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"下载链接\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-21T15:51:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LMYY\\",\\"url\\":\\"https://gaozih.com\\"}]}"]]},"headers":[{"level":2,"title":"更新日志","slug":"更新日志","link":"#更新日志","children":[]},{"level":2,"title":"Onedrive 链接","slug":"onedrive-链接","link":"#onedrive-链接","children":[]},{"level":2,"title":"钛盘链接","slug":"钛盘链接","link":"#钛盘链接","children":[]},{"level":2,"title":"百度网盘","slug":"百度网盘","link":"#百度网盘","children":[]},{"level":2,"title":"123 网盘","slug":"_123-网盘","link":"#_123-网盘","children":[]},{"level":2,"title":"夸克网盘","slug":"夸克网盘","link":"#夸克网盘","children":[]},{"level":2,"title":"MEGA 网盘","slug":"mega-网盘","link":"#mega-网盘","children":[]},{"level":2,"title":"小飞机网盘","slug":"小飞机网盘","link":"#小飞机网盘","children":[]},{"level":2,"title":"Github","slug":"github","link":"#github","children":[]}],"git":{"createdTime":1720715796000,"updatedTime":1721577105000,"contributors":[{"name":"Gzh0821","email":"gaozih0821@outlook.com","commits":12}]},"readingTime":{"minutes":2,"words":601},"filePathRelative":"download/README.md","localizedDate":"2024年7月11日","autoDesc":true,"excerpt":"<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">重要</p>\\n<p>下载游玩时的相关问题 FAQ 请查看<a href=\\"/guide/FAQ.html\\" target=\\"_blank\\">这里</a>，系统要求和推荐配置请查看<a href=\\"/guide/requirement.html\\" target=\\"_blank\\">这里</a></p>\\n</div>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>请注意：本页面提供的下载链接仅供学习交流使用，不得用于商业用途，请于下载后 24 小时内删除。</p>\\n<p>下载或在线游玩表示您已阅读并同意以下协议和声明：</p>\\n<ul>\\n<li>《PvZ2 Gardendless》使用协议</li>\\n<li>《PvZ2 Gardendless》免责声明</li>\\n</ul>\\n<p>以上协议和声明的具体内容请查看<a href=\\"/instructions/\\" target=\\"_blank\\">这里</a></p>\\n</div>"}');export{ve as comp,De as data};
