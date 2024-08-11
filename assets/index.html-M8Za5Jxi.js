import{a as U}from"./axios-DTyqpfTh.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import{K as B,M as A,z as S,u as a,w as e,C as n,D as o,G as p,N as r,O as d,P as s,Q as O,v as i}from"./app-DkiNW_VA.js";const Q={__name:"index.html",setup(C,{expose:_}){_();const h=B(null);A(()=>{U.get("/jsons/gameinfo.json").then(u=>{h.value=u.data})});const t={gameInfoData:h,get axios(){return U},ref:B,onBeforeMount:A};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},V={class:"hint-container important"},Z=e("p",{class:"hint-container-title"},"Важно",-1),j={class:"hint-container warning"},q=e("p",{class:"hint-container-title"},"Примечание",-1),Y=e("p",null,"Пожалуйста, обратите внимание: ссылка на скачивание, указанная на этой странице, предназначена только для ознакомления и коммуникации и не может быть использована в коммерческих целях. Пожалуйста, удалите ее в течение 24 часов после загрузки.",-1),J=e("p",null,"Загрузка или воспроизведение онлайн означает, что вы прочитали и согласились со следующими соглашениями и заявлениями:",-1),K=e("ul",null,[e("li",null,'Пользовательское соглашение "PvZ2 Gardendless"'),e("li",null,'Отказ от ответственности и уведомление об авторских правах для "PvZ2 Gardendless"')],-1),W={key:0},X={key:0},$={key:0},ee={key:0},te=e("h2",{id:"журнал-изменении",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#журнал-изменении"},[e("span",null,"Журнал изменений")])],-1),ne={key:0},ae={id:"ссылка-onedrive",tabindex:"-1"},oe={class:"header-anchor",href:"#ссылка-onedrive"},ie=["href"],le={id:"cсылка-mega",tabindex:"-1"},re={class:"header-anchor",href:"#cсылка-mega"},se=["href"],de={id:"tmplink",tabindex:"-1"},he={class:"header-anchor",href:"#tmplink"},ce=["href"],pe={id:"baidu-netdisk",tabindex:"-1"},_e={class:"header-anchor",href:"#baidu-netdisk"},ue=["href"],me={id:"_123pan",tabindex:"-1"},fe={class:"header-anchor",href:"#_123pan"},ge=["href"],ke={id:"quark",tabindex:"-1"},De={class:"header-anchor",href:"#quark"},ve=["href"],ye={id:"littleplane",tabindex:"-1"},we={class:"header-anchor",href:"#littleplane"},xe=["href"],be=e("h2",{id:"github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github"},[e("span",null,"Github")])],-1),Ie=["href"];function Ne(C,_,h,t,u,Pe){var m,f,g,k,D,v,y,w,x,b,I,N,P,R,M,z,G,L,T;const c=S("RouteLink"),l=S("Badge");return i(),a("div",null,[e("div",V,[Z,e("p",null,[n("Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите "),o(c,{to:"/ru-RU/guide/FAQ.html"},{default:p(()=>[n("здесь")]),_:1}),n(", а информацию о системных требованиях и рекомендуемых конфигурациях смотрите "),o(c,{to:"/ru-RU/guide/requirement.html"},{default:p(()=>[n("тут")]),_:1})])]),e("div",j,[q,Y,J,K,e("p",null,[n("Для получения подробной информации о вышеуказанном соглашении и заявлении, пожалуйста, ознакомьтесь с "),o(c,{to:"/ru-RU/instructions/"},{default:p(()=>[n("этим")]),_:1})])]),r(` 当前游戏有两种游玩方式：

- 下载游戏客户端压缩包游玩，仅支持 \`Windows 10/11\`系统。
- 在线游玩：[点击进入](https://pvz2-test.gaozih.com)

> [!info]
> 由于游戏资源文件较多，在线游玩可能会有加载速度较慢及卡顿现象，若需要快速加载，请选择下载游戏客户端压缩包游玩。 `),e("p",null,[n("Этот сайт предоставляет ссылку для скачивания только последней официальной версии"),(m=t.gameInfoData)!=null&&m.Version?(i(),a("span",W,", Последняя версия игры - это "+d(t.gameInfoData.Version),1)):r("v-if",!0),n(".")]),e("p",null,[(f=t.gameInfoData)!=null&&f.Name?(i(),a("span",X," Название версии игры: "+d(t.gameInfoData.Name),1)):r("v-if",!0)]),e("p",null,[(k=(g=t.gameInfoData)==null?void 0:g.Hash)!=null&&k.MD5?(i(),a("span",$,[n("MD5: "),e("code",null,d((v=(D=t.gameInfoData)==null?void 0:D.Hash)==null?void 0:v.MD5),1)])):r("v-if",!0)]),e("p",null,[(w=(y=t.gameInfoData)==null?void 0:y.Hash)!=null&&w.SHA256?(i(),a("span",ee,[n("SHA256: "),e("code",null,d((b=(x=t.gameInfoData)==null?void 0:x.Hash)==null?void 0:b.SHA256),1)])):r("v-if",!0)]),te,(I=t.gameInfoData)!=null&&I.EnNewFeatures?(i(),a("ul",ne,[e("li",null,[(i(!0),a(s,null,O(t.gameInfoData.EnNewFeatures,(E,F)=>(i(),a("li",{key:F},d(E),1))),128))])])):(i(),a(s,{key:1},[n("None")],64)),(N=t.gameInfoData)!=null&&N.Download.Onedrive?(i(),a(s,{key:2},[e("h2",ae,[e("a",oe,[e("span",null,[n("Ссылка Onedrive "),o(l,{text:"не требует входа",type:"info"}),o(l,{text:"Высокая скорость",type:"tip"}),o(l,{text:"Доступен для всех",type:"warning"})])])]),e("p",null,[n("Ссылка для скачивания: "),e("a",{href:t.gameInfoData.Download.Onedrive},"нажмите чтобы открыть",8,ie)])],64)):r("v-if",!0),(P=t.gameInfoData)!=null&&P.Download.Mega?(i(),a(s,{key:3},[e("h2",le,[e("a",re,[e("span",null,[n("Cсылка MEGA "),o(l,{text:"не требует входа",type:"info"}),o(l,{text:"Высокая скорость",type:"tip"}),o(l,{text:"Доступен для всех",type:"warning"})])])]),e("p",null,[n("Ссылка для скачивания: "),e("a",{href:t.gameInfoData.Download.Mega},"нажмите чтобы открыть",8,se)])],64)):r("v-if",!0),(R=t.gameInfoData)!=null&&R.Download.TmpLink?(i(),a(s,{key:4},[e("h2",de,[e("a",he,[e("span",null,[n("TmpLink "),o(l,{text:"Только в Китае",type:"danger"}),o(l,{text:"не требует входа",type:"info"}),o(l,{text:"Высокая скорость",type:"tip"})])])]),e("p",null,[n("Ссылка для скачивание: "),e("a",{href:t.gameInfoData.Download.TmpLink},"нажмите чтобы открыть",8,ce)])],64)):r("v-if",!0),(M=t.gameInfoData)!=null&&M.Download.Baidu?(i(),a(s,{key:5},[e("h2",pe,[e("a",_e,[e("span",null,[n("Baidu Netdisk"),o(l,{text:"Только в Китае",type:"danger"})])])]),e("p",null,[n("Ссылка для скачивания: "),e("a",{href:t.gameInfoData.Download.Baidu},"нажмите чтобы открыть",8,ue)])],64)):r("v-if",!0),(z=t.gameInfoData)!=null&&z.Download.Pan123?(i(),a(s,{key:6},[e("h2",me,[e("a",fe,[e("span",null,[n("123Pan "),o(l,{text:"Только в Китае",type:"danger"})])])]),e("p",null,[n("Ссылка для скачивания: "),e("a",{href:t.gameInfoData.Download.Pan123},"нажмите чтобы открыть",8,ge)])],64)):r("v-if",!0),(G=t.gameInfoData)!=null&&G.Download.Quark?(i(),a(s,{key:7},[e("h2",ke,[e("a",De,[e("span",null,[n("Quark "),o(l,{text:"Только в Китае",type:"danger"})])])]),e("p",null,[n("Ссылка для скачивания: "),e("a",{href:t.gameInfoData.Download.Quark},"нажмите чтобы открыть",8,ve)])],64)):r("v-if",!0),(L=t.gameInfoData)!=null&&L.Download.Feijipan?(i(),a(s,{key:8},[e("h2",ye,[e("a",we,[e("span",null,[n("LittlePlane "),o(l,{text:"Только в Китае",type:"danger"}),o(l,{text:"не требует входа",type:"info"})])])]),e("p",null,[n("Ссылка для скачивания: "),e("a",{href:t.gameInfoData.Download.Feijipan},"нажмите чтобы открыть",8,xe)])],64)):r("v-if",!0),(T=t.gameInfoData)!=null&&T.Download.Github?(i(),a(s,{key:9},[be,e("p",null,[n("Ссылка для скачивания: "),e("a",{href:t.gameInfoData.Download.Github},"нажмите чтобы открыть",8,Ie)])],64)):r("v-if",!0)])}const Ge=H(Q,[["render",Ne],["__file","index.html.vue"]]),Le=JSON.parse('{"path":"/ru-RU/download/","title":"Скачивание","lang":"ru-RU","frontmatter":{"title":"Скачивание","index":false,"icon":"download","pageInfo":false,"breadcrumb":false,"sidebar":false,"comment":false,"category":["Скачивание"],"description":"Важно Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите , а информацию о системных требованиях и рекомендуемых конфигурациях смотрите","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.pvzge.com/en/download/"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.pvzge.com/download/"}],["meta",{"property":"og:url","content":"https://www.pvzge.com/ru-RU/download/"}],["meta",{"property":"og:site_name","content":"PvZ2 Gardendless Официальный сайт|Полностью переработанный опыт PVZ2"}],["meta",{"property":"og:title","content":"Скачивание"}],["meta",{"property":"og:description","content":"Важно Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите , а информацию о системных требованиях и рекомендуемых конфигурациях смотрите"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-11T12:52:08.000Z"}],["meta",{"property":"article:author","content":"LMYY"}],["meta",{"property":"article:modified_time","content":"2024-08-11T12:52:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Скачивание\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-11T12:52:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LMYY\\",\\"url\\":\\"https://gaozih.com\\"}]}"]]},"headers":[{"level":2,"title":"Журнал изменений","slug":"журнал-изменении","link":"#журнал-изменении","children":[]},{"level":2,"title":"Ссылка Onedrive","slug":"ссылка-onedrive","link":"#ссылка-onedrive","children":[]},{"level":2,"title":"Cсылка MEGA","slug":"cсылка-mega","link":"#cсылка-mega","children":[]},{"level":2,"title":"TmpLink","slug":"tmplink","link":"#tmplink","children":[]},{"level":2,"title":"Baidu Netdisk","slug":"baidu-netdisk","link":"#baidu-netdisk","children":[]},{"level":2,"title":"123Pan","slug":"_123pan","link":"#_123pan","children":[]},{"level":2,"title":"Quark","slug":"quark","link":"#quark","children":[]},{"level":2,"title":"LittlePlane","slug":"littleplane","link":"#littleplane","children":[]},{"level":2,"title":"Github","slug":"github","link":"#github","children":[]}],"git":{"createdTime":1720715796000,"updatedTime":1723380728000,"contributors":[{"name":"Gzh0821","email":"gaozih0821@outlook.com","commits":3}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"ru-RU/download/README.md","localizedDate":"11 июля 2024 г.","autoDesc":true,"excerpt":"<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">Важно</p>\\n<p>Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите <a href=\\"/ru-RU/guide/FAQ.html\\" target=\\"_blank\\">здесь</a>, а информацию о системных требованиях и рекомендуемых конфигурациях смотрите <a href=\\"/ru-RU/guide/requirement.html\\" target=\\"_blank\\">тут</a></p>\\n</div>"}');export{Ge as comp,Le as data};
