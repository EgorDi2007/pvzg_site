import{a6 as Y,a7 as te,a8 as se,a9 as Z,aa as ae,ab as le,ac as re,ad as ie,N as P,ae as S,af as ue,ag as M,ah as s,ai as ne,aj as $,ak as oe,al as ce,am as ve,an as he,ao as de,ap as me,aq as pe,ar as ye,as as ge,at as U,au as Re,av as fe,aw as be,ax as j,ay as _,az as ke}from"./app-CWlOrJEE.js";const He=["/","/almanac/","/contribution/Acknowledgement.html","/contribution/","/contribution/Sponsor.html","/contribution/development.html","/contribution/feedback.html","/custom-level/","/devtool/","/download/","/en/","/guide/FAQ.html","/guide/","/guide/levelguide.html","/guide/requirement.html","/instructions/Agreement.html","/instructions/Disclaimer.html","/instructions/OpenSource.html","/instructions/PvZinfo.html","/instructions/","/instructions/Submisson.html","/ru-RU/","/en/almanac/","/en/contribution/Acknowledgement.html","/en/contribution/","/en/contribution/Sponsor.html","/en/contribution/development.html","/en/contribution/feedback.html","/en/download/","/en/guide/FAQ.html","/en/guide/","/en/guide/levelguide.html","/en/guide/requirement.html","/en/instructions/Agreement.html","/en/instructions/Disclaimer.html","/en/instructions/OpenSource.html","/en/instructions/PvZinfo.html","/en/instructions/","/en/instructions/Submisson.html","/ru-RU/almanac/","/ru-RU/contribution/Acknowledgement.html","/ru-RU/contribution/","/ru-RU/contribution/Sponsor.html","/ru-RU/contribution/development.html","/ru-RU/contribution/feedback.html","/ru-RU/download/","/ru-RU/guide/FAQ.html","/ru-RU/guide/","/ru-RU/guide/requirement.html","/ru-RU/instructions/Agreement.html","/ru-RU/instructions/Disclaimer.html","/ru-RU/instructions/OpenSource.html","/ru-RU/instructions/PvZinfo.html","/ru-RU/instructions/","/ru-RU/instructions/Submisson.html","/404.html"],we="SEARCH_PRO_QUERY_HISTORY",g=Y(we,[]),Se=()=>{const{queryHistoryCount:a}=U,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),Ue="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:I}=U,R=Y(Ue,[]),Qe=()=>{const a=I>0;return{enabled:a,resultHistory:R,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),R.value=[r,...R.value.slice(0,I-1)]}},removeResultHistory:l=>{R.value=[...R.value.slice(0,l),...R.value.slice(l+1)]}}},qe=a=>{const l=he(),r=Z(),Q=de(),u=P(0),k=S(()=>u.value>0),m=me([]);return pe(()=>{const{search:p,terminate:q}=ye(),f=ge(c=>{const b=c.join(" "),{searchFilter:A=d=>d,splitWord:x,suggestionsFilter:O,...y}=l.value;b?(u.value+=1,p(c.join(" "),r.value,y).then(d=>A(d,b,r.value,Q.value)).then(d=>{u.value-=1,m.value=d}).catch(d=>{console.warn(d),u.value-=1,u.value||(m.value=[])})):m.value=[]},U.searchDelay-U.suggestDelay);M([a,r],([c])=>f(c),{immediate:!0}),Re(()=>{q()})}),{isSearching:k,results:m}};var xe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=se(),Q=Z(),u=ae(le),{enabled:k,addQueryHistory:m,queryHistory:p,removeQueryHistory:q}=Se(),{enabled:f,resultHistory:c,addResultHistory:b,removeResultHistory:A}=Qe(),x=k||f,O=re(a,"queries"),{results:y,isSearching:d}=qe(O),i=ie({isQuery:!0,index:0}),v=P(0),h=P(0),E=S(()=>x&&(p.value.length>0||c.value.length>0)),C=S(()=>y.value.length>0),D=S(()=>y.value[v.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:p.value.length-1):i.index=t-1},B=()=>{const{isQuery:e,index:t}=i;t===(e?p.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},N=()=>{v.value=v.value>0?v.value-1:y.value.length-1,h.value=D.value.contents.length-1},V=()=>{v.value=v.value<y.value.length-1?v.value+1:0,h.value=0},G=()=>{h.value<D.value.contents.length-1?h.value+=1:V()},J=()=>{h.value>0?h.value-=1:N()},L=e=>e.map(t=>ke(t)?t:s(t[0],t[1])),K=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[n,w=""]=be(t)?t[Q.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",L([n,...o,w])))}return e.display.map(t=>s("div",L(t)))},H=()=>{v.value=0,h.value=0,l("updateQuery",""),l("close")},W=()=>k?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),p.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),q(t)}})]))])):null,X=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{H()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>L(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:n=>{n.preventDefault(),n.stopPropagation(),A(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const t=D.value.contents[h.value];m(a.queries.join(" ")),b(t),r.push(F(t)),H()}}else if(f){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")B();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",p.value[t]),e.preventDefault()):(r.push(c.value[t].link),H())}}}}),M([v,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!C.value:!E.value}],id:"search-pro-results"},a.queries.length?d.value?s(ne,{hint:u.value.searching}):C.value?s("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},n)=>{const w=v.value===n;return s("li",{class:["search-pro-result-list-item",{active:w}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((o,ee)=>{const T=w&&h.value===ee;return s($,{to:F(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{m(a.queries.join(" ")),b(o),H()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",K(o))])])})])})):u.value.emptyResult:x?E.value?[W(),X()]:u.value.emptyHistory:u.value.emptyResult)}});export{xe as default};
