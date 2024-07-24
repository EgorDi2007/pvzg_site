import{a as L}from"./axios-B4uVmeYG.js";import{_ as C}from"./plugin-vue_export-helper-DlAUqK2U.js";import{f as N,g as F,r as P,c as o,a as e,b as t,d as a,w as c,h as r,t as p,F as d,i as O,o as i}from"./app-JWH7-BAb.js";const z={__name:"index.html",setup(T,{expose:m}){m();const s=N(null);F(()=>{L.get("/jsons/gameinfo.json").then(g=>{s.value=g.data})});const n={gameInfoData:s,get axios(){return L},ref:N,onBeforeMount:F};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},B={class:"hint-container important"},G=e("p",{class:"hint-container-title"},"Important",-1),Q={class:"hint-container warning"},M=e("p",{class:"hint-container-title"},"Warning",-1),E=e("p",null,"Please note: The download link provided on this page is for learning and communication purposes only and may not be used for commercial purposes. Please delete it within 24 hours after downloading.",-1),V=e("p",null,"Downloading or playing online means that you have read and agreed to the following agreements and statements:",-1),Z=e("ul",null,[e("li",null,'"PvZ2 Gardendless" Usage Agreement'),e("li",null,'Disclaimer and Copyright Notice for "PvZ2 Gardendless"')],-1),j={key:0},S={key:0},W=e("h2",{id:"changelog",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#changelog"},[e("span",null,"Changelog")])],-1),R={key:0},Y={id:"onedrive-link",tabindex:"-1"},U={class:"header-anchor",href:"#onedrive-link"},J=["href"],H={id:"mega-link",tabindex:"-1"},K={class:"header-anchor",href:"#mega-link"},X=["href"],$={id:"tmplink",tabindex:"-1"},ee={class:"header-anchor",href:"#tmplink"},ne=["href"],te={id:"baidu-netdisk",tabindex:"-1"},ae={class:"header-anchor",href:"#baidu-netdisk"},oe=["href"],ie={id:"_123pan",tabindex:"-1"},le={class:"header-anchor",href:"#_123pan"},re=["href"],de={id:"quark",tabindex:"-1"},se={class:"header-anchor",href:"#quark"},he=["href"],ce={id:"littleplane",tabindex:"-1"},pe={class:"header-anchor",href:"#littleplane"},me=["href"],ge=e("h2",{id:"github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github"},[e("span",null,"Github")])],-1),ue=["href"];function fe(T,m,s,n,g,_e){var u,f,_,k,y,w,D,v,x,b,I;const h=P("RouteLink"),l=P("Badge");return i(),o("div",null,[e("div",B,[G,e("p",null,[t("For FAQs related to downloading and playing, please see "),a(h,{to:"/en/guide/FAQ.html"},{default:c(()=>[t("here")]),_:1}),t(", and for system requirements and recommended configurations, please see "),a(h,{to:"/en/guide/requirement.html"},{default:c(()=>[t("here")]),_:1})])]),e("div",Q,[M,E,V,Z,e("p",null,[t("For the details of the above agreement and statement, please see "),a(h,{to:"/en/instructions/"},{default:c(()=>[t("here")]),_:1})])]),r(` 当前游戏有两种游玩方式：

- 下载游戏客户端压缩包游玩，仅支持 \`Windows 10/11\`系统。
- 在线游玩：[点击进入](https://pvz2-test.gaozih.com)

> [!info]
> 由于游戏资源文件较多，在线游玩可能会有加载速度较慢及卡顿现象，若需要快速加载，请选择下载游戏客户端压缩包游玩。 `),e("p",null,[t("This site only provides the latest official version download link"),(u=n.gameInfoData)!=null&&u.Version?(i(),o("span",j,", The latest game version is "+p(n.gameInfoData.Version),1)):r("v-if",!0),t(".")]),e("p",null,[(f=n.gameInfoData)!=null&&f.Name?(i(),o("span",S,"The game version name: "+p(n.gameInfoData.Name),1)):r("v-if",!0)]),W,(_=n.gameInfoData)!=null&&_.EnNewFeatures?(i(),o("ul",R,[e("li",null,[(i(!0),o(d,null,O(n.gameInfoData.EnNewFeatures,(q,A)=>(i(),o("li",{key:A},p(q),1))),128))])])):(i(),o(d,{key:1},[t("None")],64)),(k=n.gameInfoData)!=null&&k.Download.Onedrive?(i(),o(d,{key:2},[e("h2",Y,[e("a",U,[e("span",null,[t("Onedrive Link "),a(l,{text:"No login required",type:"info"}),a(l,{text:"high-speed",type:"tip"}),a(l,{text:"global",type:"warning"})])])]),e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.Onedrive},"click to enter",8,J)])],64)):r("v-if",!0),(y=n.gameInfoData)!=null&&y.Download.Mega?(i(),o(d,{key:3},[e("h2",H,[e("a",K,[e("span",null,[t("MEGA Link "),a(l,{text:"No login required",type:"info"}),a(l,{text:"high-speed",type:"tip"}),a(l,{text:"global",type:"warning"})])])]),e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.Mega},"click to enter",8,X)])],64)):r("v-if",!0),(w=n.gameInfoData)!=null&&w.Download.TmpLink?(i(),o(d,{key:4},[e("h2",$,[e("a",ee,[e("span",null,[t("TmpLink "),a(l,{text:"Only in Chinese",type:"danger"}),a(l,{text:"No login required",type:"info"}),a(l,{text:"high-speed",type:"tip"})])])]),e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.TmpLink},"click to enter",8,ne)])],64)):r("v-if",!0),(D=n.gameInfoData)!=null&&D.Download.Baidu?(i(),o(d,{key:5},[e("h2",te,[e("a",ae,[e("span",null,[t("Baidu Netdisk"),a(l,{text:"Only in Chinese",type:"danger"})])])]),e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.Baidu},"click to enter",8,oe)])],64)):r("v-if",!0),(v=n.gameInfoData)!=null&&v.Download.Pan123?(i(),o(d,{key:6},[e("h2",ie,[e("a",le,[e("span",null,[t("123Pan "),a(l,{text:"Only in Chinese",type:"danger"})])])]),e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.Pan123},"click to enter",8,re)])],64)):r("v-if",!0),(x=n.gameInfoData)!=null&&x.Download.Quark?(i(),o(d,{key:7},[e("h2",de,[e("a",se,[e("span",null,[t("Quark "),a(l,{text:"Only in Chinese",type:"danger"})])])]),e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.Quark},"click to enter",8,he)])],64)):r("v-if",!0),(b=n.gameInfoData)!=null&&b.Download.Feijipan?(i(),o(d,{key:8},[e("h2",ce,[e("a",pe,[e("span",null,[t("LittlePlane "),a(l,{text:"Only in Chinese",type:"danger"}),a(l,{text:"No login required",type:"info"})])])]),e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.Feijipan},"click to enter",8,me)])],64)):r("v-if",!0),(I=n.gameInfoData)!=null&&I.Download.Github?(i(),o(d,{key:9},[ge,e("p",null,[t("Download Link: "),e("a",{href:n.gameInfoData.Download.Github},"click to enter",8,ue)])],64)):r("v-if",!0)])}const De=C(z,[["render",fe],["__file","index.html.vue"]]),ve=JSON.parse('{"path":"/en/download/","title":"Download","lang":"en-US","frontmatter":{"title":"Download","index":false,"icon":"download","pageInfo":false,"breadcrumb":false,"sidebar":false,"comment":false,"category":["Download"],"description":"Important For FAQs related to downloading and playing, please see , and for system requirements and recommended configurations, please see Warning Please note: The download link...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.pvzge.com/download/"}],["meta",{"property":"og:url","content":"https://www.pvzge.com/en/download/"}],["meta",{"property":"og:site_name","content":"PvZ2 Gardendless Official Website|A completely remastered PVZ2 experience"}],["meta",{"property":"og:title","content":"Download"}],["meta",{"property":"og:description","content":"Important For FAQs related to downloading and playing, please see , and for system requirements and recommended configurations, please see Warning Please note: The download link..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-24T09:36:53.000Z"}],["meta",{"property":"article:author","content":"LMYY"}],["meta",{"property":"article:modified_time","content":"2024-07-24T09:36:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Download\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-24T09:36:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LMYY\\",\\"url\\":\\"https://gaozih.com\\"}]}"]]},"headers":[{"level":2,"title":"Changelog","slug":"changelog","link":"#changelog","children":[]},{"level":2,"title":"Onedrive Link","slug":"onedrive-link","link":"#onedrive-link","children":[]},{"level":2,"title":"MEGA Link","slug":"mega-link","link":"#mega-link","children":[]},{"level":2,"title":"TmpLink","slug":"tmplink","link":"#tmplink","children":[]},{"level":2,"title":"Baidu Netdisk","slug":"baidu-netdisk","link":"#baidu-netdisk","children":[]},{"level":2,"title":"123Pan","slug":"_123pan","link":"#_123pan","children":[]},{"level":2,"title":"Quark","slug":"quark","link":"#quark","children":[]},{"level":2,"title":"LittlePlane","slug":"littleplane","link":"#littleplane","children":[]},{"level":2,"title":"Github","slug":"github","link":"#github","children":[]}],"git":{"createdTime":1720715796000,"updatedTime":1721813813000,"contributors":[{"name":"Gzh0821","email":"gaozih0821@outlook.com","commits":5}]},"readingTime":{"minutes":1.82,"words":545},"filePathRelative":"en/download/README.md","localizedDate":"July 11, 2024","autoDesc":true,"excerpt":"<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">Important</p>\\n<p>For FAQs related to downloading and playing, please see <a href=\\"/en/guide/FAQ.html\\" target=\\"_blank\\">here</a>, and for system requirements and recommended configurations, please see <a href=\\"/en/guide/requirement.html\\" target=\\"_blank\\">here</a></p>\\n</div>"}');export{De as comp,ve as data};
