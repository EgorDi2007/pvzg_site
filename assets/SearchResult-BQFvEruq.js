import{$ as _,l as te,a0 as le,a1 as I,a2 as se,a3 as ne,Q as ae,z as ie,g as L,n as S,a4 as ue,w as Z,L as l,a5 as re,a6 as $,a7 as oe,a8 as ce,a9 as me,aa as he,ab as ve,H as de,A as pe,ac as ye,ad as ge,ae as B,D as Re,af as be,ag as fe,ah as T,ai as j,aj as we}from"./app-BD9oYomy.js";const ke=["/","/almanac/","/almanac/plants.html","/almanac/zombies.html","/contribution/Acknowledgement.html","/contribution/","/contribution/Sponsor.html","/contribution/development.html","/contribution/feedback.html","/custom-level/","/devtool/","/download/","/en/","/guide/FAQ.html","/guide/","/guide/requirement.html","/guide/webGuide.html","/instructions/Agreement.html","/instructions/Disclaimer.html","/instructions/OpenSource.html","/instructions/PvZinfo.html","/instructions/","/instructions/Submisson.html","/pt-BR/","/ru-RU/","/en/almanac/","/en/almanac/plants.html","/en/almanac/zombies.html","/en/contribution/Acknowledgement.html","/en/contribution/","/en/contribution/Sponsor.html","/en/contribution/development.html","/en/contribution/feedback.html","/en/custom-level/","/en/download/","/en/guide/FAQ.html","/en/guide/","/en/guide/requirement.html","/en/guide/webGuide.html","/en/instructions/Agreement.html","/en/instructions/Disclaimer.html","/en/instructions/OpenSource.html","/en/instructions/PvZinfo.html","/en/instructions/","/en/instructions/Submisson.html","/guide/level/","/guide/level/levelguide.html","/pt-BR/almanac/","/pt-BR/almanac/plants.html","/pt-BR/almanac/zombies.html","/pt-BR/contribution/Acknowledgement.html","/pt-BR/contribution/","/pt-BR/contribution/Sponsor.html","/pt-BR/contribution/development.html","/pt-BR/contribution/feedback.html","/pt-BR/custom-level/","/pt-BR/download/","/pt-BR/guide/FAQ.html","/pt-BR/guide/","/pt-BR/guide/requirement.html","/pt-BR/guide/webGuide.html","/pt-BR/instructions/Agreement.html","/pt-BR/instructions/Disclaimer.html","/pt-BR/instructions/OpenSource.html","/pt-BR/instructions/PvZinfo.html","/pt-BR/instructions/","/pt-BR/instructions/Submisson.html","/ru-RU/almanac/","/ru-RU/almanac/plants.html","/ru-RU/almanac/zombies.html","/ru-RU/contribution/Acknowledgement.html","/ru-RU/contribution/","/ru-RU/contribution/Sponsor.html","/ru-RU/contribution/development.html","/ru-RU/contribution/feedback.html","/ru-RU/download/","/ru-RU/guide/FAQ.html","/ru-RU/guide/","/ru-RU/guide/requirement.html","/ru-RU/instructions/Agreement.html","/ru-RU/instructions/Disclaimer.html","/ru-RU/instructions/OpenSource.html","/ru-RU/instructions/PvZinfo.html","/ru-RU/instructions/","/ru-RU/instructions/Submisson.html","/en/guide/level/","/en/guide/level/levelguide.html","/pt-BR/guide/level/","/pt-BR/guide/level/levelguide.html","/404.html"],He="SEARCH_PRO_QUERY_HISTORY",g=_(He,[]),Se=()=>{const{queryHistoryCount:s}=B,n=s>0;return{enabled:n,queryHistory:g,addQueryHistory:a=>{n&&(g.value=Array.from(new Set([a,...g.value.slice(0,s-1)])))},removeQueryHistory:a=>{g.value=[...g.value.slice(0,a),...g.value.slice(a+1)]}}},P=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),Be="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:z}=B,R=_(Be,[]),Ue=()=>{const s=z>0;return{enabled:s,resultHistory:R,addResultHistory:n=>{if(s){const a={link:P(n),display:n.display};"header"in n&&(a.header=n.header),R.value=[a,...R.value.slice(0,z-1)]}},removeResultHistory:n=>{R.value=[...R.value.slice(0,n),...R.value.slice(n+1)]}}},Qe=s=>{const n=he(),a=I(),U=ve(),u=L(0),w=S(()=>u.value>0),d=de([]);return pe(()=>{const{search:p,terminate:Q}=ye(),b=ge(c=>{const f=c.join(" "),{searchFilter:A=v=>v,splitWord:q,suggestionsFilter:F,...y}=n.value;f?(u.value+=1,p(c.join(" "),a.value,y).then(v=>A(v,f,a.value,U.value)).then(v=>{u.value-=1,d.value=v}).catch(v=>{console.warn(v),u.value-=1,u.value||(d.value=[])})):d.value=[]},B.searchDelay-B.suggestDelay);Z([s,a],([c])=>b(c),{immediate:!0}),Re(()=>{Q()})}),{isSearching:w,results:d}};var qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:n}){const a=le(),U=I(),u=se(ne),{enabled:w,addQueryHistory:d,queryHistory:p,removeQueryHistory:Q}=Se(),{enabled:b,resultHistory:c,addResultHistory:f,removeResultHistory:A}=Ue(),q=w||b,F=ae(s,"queries"),{results:y,isSearching:v}=Qe(F),i=ie({isQuery:!0,index:0}),m=L(0),h=L(0),O=S(()=>q&&(p.value.length>0||c.value.length>0)),x=S(()=>y.value.length>0),D=S(()=>y.value[m.value]||null),G=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:p.value.length-1):i.index=t-1},Y=()=>{const{isQuery:e,index:t}=i;t===(e?p.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},M=()=>{m.value=m.value>0?m.value-1:y.value.length-1,h.value=D.value.contents.length-1},V=()=>{m.value=m.value<y.value.length-1?m.value+1:0,h.value=0},J=()=>{h.value<D.value.contents.length-1?h.value+=1:V()},K=()=>{h.value>0?h.value-=1:M()},C=e=>e.map(t=>we(t)?t:l(t[0],t[1])),N=e=>{if(e.type==="customField"){const t=be[e.index]||"$content",[r,H=""]=fe(t)?t[U.value].split("$content"):t.split("$content");return e.display.map(o=>l("div",C([r,...o,H])))}return e.display.map(t=>l("div",C(t)))},k=()=>{m.value=0,h.value=0,n("updateQuery",""),n("close")},W=()=>w?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.queryHistory),p.value.map((e,t)=>l("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{n("updateQuery",e)}},[l(T,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:r=>{r.preventDefault(),r.stopPropagation(),Q(t)}})]))])):null,X=()=>b?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>l($,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{k()}},()=>[l(T,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(r=>C(r)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:r=>{r.preventDefault(),r.stopPropagation(),A(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(x.value){if(e.key==="ArrowUp")K();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const t=D.value.contents[h.value];d(s.queries.join(" ")),f(t),a.push(P(t)),k()}}else if(b){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(n("updateQuery",p.value[t]),e.preventDefault()):(a.push(c.value[t].link),k())}}}}),Z([m,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!x.value:!O.value}],id:"search-pro-results"},s.queries.length?v.value?l(re,{hint:u.value.searching}):x.value?l("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},r)=>{const H=m.value===r;return l("li",{class:["search-pro-result-list-item",{active:H}]},[l("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((o,ee)=>{const E=H&&h.value===ee;return l($,{to:P(o),class:["search-pro-result-item",{active:E,"aria-selected":E}],onClick:()=>{d(s.queries.join(" ")),f(o),k()}},()=>[o.type==="text"?null:l(o.type==="title"?oe:o.type==="heading"?ce:me,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?l("div",{class:"content-header"},o.header):null,l("div",N(o))])])})])})):u.value.emptyResult:q?O.value?[W(),X()]:u.value.emptyHistory:u.value.emptyResult)}});export{qe as default};
