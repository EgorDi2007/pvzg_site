import{_ as Y,k as te,$ as se,a0 as Z,a1 as le,a2 as ae,P as ne,x as re,g as L,m as S,a3 as ie,B as z,K as s,a4 as ue,a5 as T,a6 as oe,a7 as ce,a8 as ve,a9 as me,aa as he,G as de,y as pe,ab as ye,ac as ge,ad as U,A as Re,ae as be,af as fe,ag as _,ah as j,ai as ke}from"./app-rPOUgzxC.js";const He=["/","/almanac/","/almanac/plants.html","/almanac/zombies.html","/contribution/Acknowledgement.html","/contribution/","/contribution/Sponsor.html","/contribution/development.html","/contribution/feedback.html","/custom-level/","/devtool/","/download/","/en/","/guide/FAQ.html","/guide/","/guide/requirement.html","/instructions/Agreement.html","/instructions/Disclaimer.html","/instructions/OpenSource.html","/instructions/PvZinfo.html","/instructions/","/instructions/Submisson.html","/ru-RU/","/en/almanac/","/en/almanac/plants.html","/en/almanac/zombies.html","/en/contribution/Acknowledgement.html","/en/contribution/","/en/contribution/Sponsor.html","/en/contribution/development.html","/en/contribution/feedback.html","/en/custom-level/","/en/download/","/en/guide/FAQ.html","/en/guide/","/en/guide/requirement.html","/en/instructions/Agreement.html","/en/instructions/Disclaimer.html","/en/instructions/OpenSource.html","/en/instructions/PvZinfo.html","/en/instructions/","/en/instructions/Submisson.html","/guide/level/","/guide/level/levelguide.html","/ru-RU/almanac/","/ru-RU/contribution/Acknowledgement.html","/ru-RU/contribution/","/ru-RU/contribution/Sponsor.html","/ru-RU/contribution/development.html","/ru-RU/contribution/feedback.html","/ru-RU/download/","/ru-RU/guide/FAQ.html","/ru-RU/guide/","/ru-RU/guide/requirement.html","/ru-RU/instructions/Agreement.html","/ru-RU/instructions/Disclaimer.html","/ru-RU/instructions/OpenSource.html","/ru-RU/instructions/PvZinfo.html","/ru-RU/instructions/","/ru-RU/instructions/Submisson.html","/en/guide/level/","/en/guide/level/levelguide.html","/404.html"],we="SEARCH_PRO_QUERY_HISTORY",g=Y(we,[]),Se=()=>{const{queryHistoryCount:l}=U,a=l>0;return{enabled:a,queryHistory:g,addQueryHistory:n=>{a&&(g.value=Array.from(new Set([n,...g.value.slice(0,l-1)])))},removeQueryHistory:n=>{g.value=[...g.value.slice(0,n),...g.value.slice(n+1)]}}},F=l=>He[l.id]+("anchor"in l?`#${l.anchor}`:""),Ue="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=U,R=Y(Ue,[]),Qe=()=>{const l=I>0;return{enabled:l,resultHistory:R,addResultHistory:a=>{if(l){const n={link:F(a),display:a.display};"header"in a&&(n.header=a.header),R.value=[n,...R.value.slice(0,I-1)]}},removeResultHistory:a=>{R.value=[...R.value.slice(0,a),...R.value.slice(a+1)]}}},qe=l=>{const a=me(),n=Z(),Q=he(),i=L(0),k=S(()=>i.value>0),d=de([]);return pe(()=>{const{search:p,terminate:q}=ye(),b=ge(c=>{const f=c.join(" "),{searchFilter:A=h=>h,splitWord:x,suggestionsFilter:O,...y}=a.value;f?(i.value+=1,p(c.join(" "),n.value,y).then(h=>A(h,f,n.value,Q.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},U.searchDelay-U.suggestDelay);z([l,n],([c])=>b(c),{immediate:!0}),Re(()=>{q()})}),{isSearching:k,results:d}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:a}){const n=se(),Q=Z(),i=le(ae),{enabled:k,addQueryHistory:d,queryHistory:p,removeQueryHistory:q}=Se(),{enabled:b,resultHistory:c,addResultHistory:f,removeResultHistory:A}=Qe(),x=k||b,O=ne(l,"queries"),{results:y,isSearching:h}=qe(O),r=re({isQuery:!0,index:0}),v=L(0),m=L(0),E=S(()=>x&&(p.value.length>0||c.value.length>0)),C=S(()=>y.value.length>0),D=S(()=>y.value[v.value]||null),B=()=>{const{isQuery:e,index:t}=r;t===0?(r.isQuery=!e,r.index=e?c.value.length-1:p.value.length-1):r.index=t-1},M=()=>{const{isQuery:e,index:t}=r;t===(e?p.value.length-1:c.value.length-1)?(r.isQuery=!e,r.index=0):r.index=t+1},G=()=>{v.value=v.value>0?v.value-1:y.value.length-1,m.value=D.value.contents.length-1},K=()=>{v.value=v.value<y.value.length-1?v.value+1:0,m.value=0},V=()=>{m.value<D.value.contents.length-1?m.value+=1:K()},J=()=>{m.value>0?m.value-=1:G()},P=e=>e.map(t=>ke(t)?t:s(t[0],t[1])),N=e=>{if(e.type==="customField"){const t=be[e.index]||"$content",[u,w=""]=fe(t)?t[Q.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",P([u,...o,w])))}return e.display.map(t=>s("div",P(t)))},H=()=>{v.value=0,m.value=0,a("updateQuery",""),a("close")},W=()=>k?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),p.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===t}],onClick:()=>{a("updateQuery",e)}},[s(_,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:u=>{u.preventDefault(),u.stopPropagation(),q(t)}})]))])):null,X=()=>b?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s(T,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===t}],onClick:()=>{H()}},()=>[s(_,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(u=>P(u)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:u=>{u.preventDefault(),u.stopPropagation(),A(t)}})]))])):null;return ie("keydown",e=>{if(l.isFocusing){if(C.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=D.value.contents[m.value];d(l.queries.join(" ")),f(t),n.push(F(t)),H()}}else if(b){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")M();else if(e.key==="Enter"){const{index:t}=r;r.isQuery?(a("updateQuery",p.value[t]),e.preventDefault()):(n.push(c.value[t].link),H())}}}}),z([v,m],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!C.value:!E.value}],id:"search-pro-results"},l.queries.length?h.value?s(ue,{hint:i.value.searching}):C.value?s("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},u)=>{const w=v.value===u;return s("li",{class:["search-pro-result-list-item",{active:w}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((o,ee)=>{const $=w&&m.value===ee;return s(T,{to:F(o),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{d(l.queries.join(" ")),f(o),H()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",N(o))])])})])})):i.value.emptyResult:x?E.value?[W(),X()]:i.value.emptyHistory:i.value.emptyResult)}});export{xe as default};
