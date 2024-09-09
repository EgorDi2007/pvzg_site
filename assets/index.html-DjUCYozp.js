import{a as U}from"./axios-BimPEqV4.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import{K as B,M as A,z as S,u as i,w as t,C as a,D as o,G as f,N as d,O as p,P as s,Q as O,v as r}from"./app-kGtXrLJi.js";const Q={__name:"index.html",setup(C,{expose:e}){e();const u=B(null);A(()=>{U.get("/jsons/gameinfo.json").then(g=>{u.value=g.data})});const n={gameInfoData:u,get axios(){return U},ref:B,onBeforeMount:A};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},V={class:"hint-container important"},Z={class:"hint-container warning"},j={key:0},q={key:0},Y={key:0},J={key:0},K={key:0},W={id:"github",tabindex:"-1"},X={class:"header-anchor",href:"#github"},$=["href"],ee={id:"ссылка-onedrive",tabindex:"-1"},te={class:"header-anchor",href:"#ссылка-onedrive"},ne=["href"],ae={id:"cсылка-mega",tabindex:"-1"},oe={class:"header-anchor",href:"#cсылка-mega"},le=["href"],ie={id:"tmplink",tabindex:"-1"},re={class:"header-anchor",href:"#tmplink"},de=["href"],se={id:"baidu-netdisk",tabindex:"-1"},pe={class:"header-anchor",href:"#baidu-netdisk"},ue=["href"],me={id:"_123pan",tabindex:"-1"},fe={class:"header-anchor",href:"#_123pan"},ge=["href"],he={id:"quark",tabindex:"-1"},ke={class:"header-anchor",href:"#quark"},De=["href"],ye={id:"littleplane",tabindex:"-1"},ve={class:"header-anchor",href:"#littleplane"},we=["href"];function xe(C,e,u,n,g,_e){var h,k,D,y,v,w,x,_,b,I,c,N,P,R,M,z,G,L,T;const m=S("RouteLink"),l=S("Badge");return r(),i("div",null,[t("div",V,[e[4]||(e[4]=t("p",{class:"hint-container-title"},"Важно",-1)),t("p",null,[e[2]||(e[2]=a("Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите ")),o(m,{to:"/ru-RU/guide/FAQ.html"},{default:f(()=>e[0]||(e[0]=[a("здесь")])),_:1}),e[3]||(e[3]=a(", а информацию о системных требованиях и рекомендуемых конфигурациях смотрите ")),o(m,{to:"/ru-RU/guide/requirement.html"},{default:f(()=>e[1]||(e[1]=[a("тут")])),_:1})])]),t("div",Z,[e[7]||(e[7]=t("p",{class:"hint-container-title"},"Примечание",-1)),e[8]||(e[8]=t("p",null,"Пожалуйста, обратите внимание: ссылка на скачивание, указанная на этой странице, предназначена только для ознакомления и коммуникации и не может быть использована в коммерческих целях. Пожалуйста, удалите ее в течение 24 часов после загрузки.",-1)),e[9]||(e[9]=t("p",null,"Загрузка или воспроизведение онлайн означает, что вы прочитали и согласились со следующими соглашениями и заявлениями:",-1)),e[10]||(e[10]=t("ul",null,[t("li",null,'Пользовательское соглашение "PvZ2 Gardendless"'),t("li",null,'Отказ от ответственности и уведомление об авторских правах для "PvZ2 Gardendless"')],-1)),t("p",null,[e[6]||(e[6]=a("Для получения подробной информации о вышеуказанном соглашении и заявлении, пожалуйста, ознакомьтесь с ")),o(m,{to:"/ru-RU/instructions/"},{default:f(()=>e[5]||(e[5]=[a("этим")])),_:1})])]),d(` 当前游戏有两种游玩方式：

- 下载游戏客户端压缩包游玩，仅支持 \`Windows 10/11\`系统。
- 在线游玩：[点击进入](https://pvz2-test.gaozih.com)

> [!info]
> 由于游戏资源文件较多，在线游玩可能会有加载速度较慢及卡顿现象，若需要快速加载，请选择下载游戏客户端压缩包游玩。 `),t("p",null,[e[11]||(e[11]=a("Этот сайт предоставляет ссылку для скачивания только последней официальной версии")),(h=n.gameInfoData)!=null&&h.Version?(r(),i("span",j,", Последняя версия игры - это "+p(n.gameInfoData.Version),1)):d("v-if",!0),e[12]||(e[12]=a("."))]),t("p",null,[(k=n.gameInfoData)!=null&&k.Name?(r(),i("span",q," Название версии игры: "+p(n.gameInfoData.Name),1)):d("v-if",!0)]),t("p",null,[(y=(D=n.gameInfoData)==null?void 0:D.Hash)!=null&&y.MD5?(r(),i("span",Y,[e[13]||(e[13]=a("MD5: ")),t("code",null,p((w=(v=n.gameInfoData)==null?void 0:v.Hash)==null?void 0:w.MD5),1)])):d("v-if",!0)]),t("p",null,[(_=(x=n.gameInfoData)==null?void 0:x.Hash)!=null&&_.SHA256?(r(),i("span",J,[e[14]||(e[14]=a("SHA256: ")),t("code",null,p((I=(b=n.gameInfoData)==null?void 0:b.Hash)==null?void 0:I.SHA256),1)])):d("v-if",!0)]),e[31]||(e[31]=t("h2",{id:"журнал-изменении",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#журнал-изменении"},[t("span",null,"Журнал изменений")])],-1)),(c=n.gameInfoData)!=null&&c.EnNewFeatures?(r(),i("ul",K,[t("li",null,[(r(!0),i(s,null,O(n.gameInfoData.EnNewFeatures,(E,F)=>(r(),i("li",{key:F},p(E),1))),128))])])):(r(),i(s,{key:1},[a("None")],64)),(N=n.gameInfoData)!=null&&N.Download.Github?(r(),i(s,{key:2},[t("h2",W,[t("a",X,[t("span",null,[e[15]||(e[15]=a("Github ")),o(l,{text:"не требует входа",type:"info"}),o(l,{text:"Высокая скорость",type:"tip"}),o(l,{text:"Доступен для всех",type:"warning"})])])]),t("p",null,[e[16]||(e[16]=a("Ссылка для скачивания: ")),t("a",{href:n.gameInfoData.Download.Github},"нажмите чтобы открыть",8,$)])],64)):d("v-if",!0),(P=n.gameInfoData)!=null&&P.Download.Onedrive?(r(),i(s,{key:3},[t("h2",ee,[t("a",te,[t("span",null,[e[17]||(e[17]=a("Ссылка Onedrive ")),o(l,{text:"не требует входа",type:"info"}),o(l,{text:"Высокая скорость",type:"tip"}),o(l,{text:"Доступен для всех",type:"warning"})])])]),t("p",null,[e[18]||(e[18]=a("Ссылка для скачивания: ")),t("a",{href:n.gameInfoData.Download.Onedrive},"нажмите чтобы открыть",8,ne)])],64)):d("v-if",!0),(R=n.gameInfoData)!=null&&R.Download.Mega?(r(),i(s,{key:4},[t("h2",ae,[t("a",oe,[t("span",null,[e[19]||(e[19]=a("Cсылка MEGA ")),o(l,{text:"не требует входа",type:"info"}),o(l,{text:"Высокая скорость",type:"tip"}),o(l,{text:"Доступен для всех",type:"warning"})])])]),t("p",null,[e[20]||(e[20]=a("Ссылка для скачивания: ")),t("a",{href:n.gameInfoData.Download.Mega},"нажмите чтобы открыть",8,le)])],64)):d("v-if",!0),(M=n.gameInfoData)!=null&&M.Download.TmpLink?(r(),i(s,{key:5},[t("h2",ie,[t("a",re,[t("span",null,[e[21]||(e[21]=a("TmpLink ")),o(l,{text:"Только в Китае",type:"danger"}),o(l,{text:"не требует входа",type:"info"}),o(l,{text:"Высокая скорость",type:"tip"})])])]),t("p",null,[e[22]||(e[22]=a("Ссылка для скачивание: ")),t("a",{href:n.gameInfoData.Download.TmpLink},"нажмите чтобы открыть",8,de)])],64)):d("v-if",!0),(z=n.gameInfoData)!=null&&z.Download.Baidu?(r(),i(s,{key:6},[t("h2",se,[t("a",pe,[t("span",null,[e[23]||(e[23]=a("Baidu Netdisk")),o(l,{text:"Только в Китае",type:"danger"})])])]),t("p",null,[e[24]||(e[24]=a("Ссылка для скачивания: ")),t("a",{href:n.gameInfoData.Download.Baidu},"нажмите чтобы открыть",8,ue)])],64)):d("v-if",!0),(G=n.gameInfoData)!=null&&G.Download.Pan123?(r(),i(s,{key:7},[t("h2",me,[t("a",fe,[t("span",null,[e[25]||(e[25]=a("123Pan ")),o(l,{text:"Только в Китае",type:"danger"})])])]),t("p",null,[e[26]||(e[26]=a("Ссылка для скачивания: ")),t("a",{href:n.gameInfoData.Download.Pan123},"нажмите чтобы открыть",8,ge)])],64)):d("v-if",!0),(L=n.gameInfoData)!=null&&L.Download.Quark?(r(),i(s,{key:8},[t("h2",he,[t("a",ke,[t("span",null,[e[27]||(e[27]=a("Quark ")),o(l,{text:"Только в Китае",type:"danger"})])])]),t("p",null,[e[28]||(e[28]=a("Ссылка для скачивания: ")),t("a",{href:n.gameInfoData.Download.Quark},"нажмите чтобы открыть",8,De)])],64)):d("v-if",!0),(T=n.gameInfoData)!=null&&T.Download.Feijipan?(r(),i(s,{key:9},[t("h2",ye,[t("a",ve,[t("span",null,[e[29]||(e[29]=a("LittlePlane ")),o(l,{text:"Только в Китае",type:"danger"}),o(l,{text:"не требует входа",type:"info"})])])]),t("p",null,[e[30]||(e[30]=a("Ссылка для скачивания: ")),t("a",{href:n.gameInfoData.Download.Feijipan},"нажмите чтобы открыть",8,we)])],64)):d("v-if",!0)])}const Ne=H(Q,[["render",xe],["__file","index.html.vue"]]),Pe=JSON.parse('{"path":"/ru-RU/download/","title":"Скачивание","lang":"ru-RU","frontmatter":{"title":"Скачивание","index":false,"icon":"download","pageInfo":false,"breadcrumb":false,"sidebar":false,"comment":false,"category":["Скачивание"],"description":"Важно Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите , а информацию о системных требованиях и рекомендуемых конфигурациях смотрите","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.pvzge.com/en/download/"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.pvzge.com/download/"}],["meta",{"property":"og:url","content":"https://www.pvzge.com/ru-RU/download/"}],["meta",{"property":"og:site_name","content":"PvZ2 Gardendless Официальный сайт|Полностью переработанный опыт PVZ2"}],["meta",{"property":"og:title","content":"Скачивание"}],["meta",{"property":"og:description","content":"Важно Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите , а информацию о системных требованиях и рекомендуемых конфигурациях смотрите"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ru-RU"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-01T15:16:38.000Z"}],["meta",{"property":"article:author","content":"LMYY"}],["meta",{"property":"article:modified_time","content":"2024-09-01T15:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Скачивание\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-01T15:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LMYY\\",\\"url\\":\\"https://gaozih.com\\"}]}"]]},"headers":[{"level":2,"title":"Журнал изменений","slug":"журнал-изменении","link":"#журнал-изменении","children":[]},{"level":2,"title":"Github","slug":"github","link":"#github","children":[]},{"level":2,"title":"Ссылка Onedrive","slug":"ссылка-onedrive","link":"#ссылка-onedrive","children":[]},{"level":2,"title":"Cсылка MEGA","slug":"cсылка-mega","link":"#cсылка-mega","children":[]},{"level":2,"title":"TmpLink","slug":"tmplink","link":"#tmplink","children":[]},{"level":2,"title":"Baidu Netdisk","slug":"baidu-netdisk","link":"#baidu-netdisk","children":[]},{"level":2,"title":"123Pan","slug":"_123pan","link":"#_123pan","children":[]},{"level":2,"title":"Quark","slug":"quark","link":"#quark","children":[]},{"level":2,"title":"LittlePlane","slug":"littleplane","link":"#littleplane","children":[]}],"git":{"createdTime":1720715796000,"updatedTime":1725203798000,"contributors":[{"name":"Gzh0821","email":"gaozih0821@outlook.com","commits":5}]},"readingTime":{"minutes":2.04,"words":612},"filePathRelative":"ru-RU/download/README.md","localizedDate":"11 июля 2024 г.","autoDesc":true,"excerpt":"<div class=\\"hint-container important\\">\\n<p class=\\"hint-container-title\\">Важно</p>\\n<p>Ответы на часто задаваемые вопросы, связанные со скачиванием и запуском, пожалуйста, смотрите <a href=\\"/ru-RU/guide/FAQ.html\\" target=\\"_blank\\">здесь</a>, а информацию о системных требованиях и рекомендуемых конфигурациях смотрите <a href=\\"/ru-RU/guide/requirement.html\\" target=\\"_blank\\">тут</a></p>\\n</div>"}');export{Ne as comp,Pe as data};
