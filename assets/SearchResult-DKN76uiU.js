import{u as M,i as te,p as se,q as Y,s as le,P as ae,v as re,l as ue,k as O,x as b,y as ie,z,j as s,A as oe,R as $,B as ne,C as ce,D as ve,E as de,G as he,H as pe,I as me,J as ye,K as ge,L as q,M as fe,N as He,O as ke,Q as j,S as I,T as Re}from"./app-BaFECeui.js";const we=["/","/portfolio.html","/contribution/Acknowledgement.html","/contribution/","/contribution/development.html","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/download/","/en/","/en/portfolio.html","/guide/Q_A.html","/guide/","/guide/requirement.html","/instructions/Agreement.html","/instructions/Disclaimer.html","/instructions/OpenSource.html","/instructions/PvZinfo.html","/instructions/","/en/demo/","/en/demo/disable.html","/en/demo/encrypt.html","/en/demo/layout.html","/en/demo/markdown.html","/en/demo/page.html","/en/guide/","/en/guide/bar/","/en/guide/bar/baz.html","/en/guide/foo/","/en/guide/foo/ray.html","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",g=M(Qe,[]),be=()=>{const{queryHistoryCount:l}=q,a=l>0;return{enabled:a,queryHistory:g,addQueryHistory:r=>{a&&(g.value=Array.from(new Set([r,...g.value.slice(0,l-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=l=>we[l.id]+("anchor"in l?`#${l.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,f=M(qe,[]),xe=()=>{const l=U>0;return{enabled:l,resultHistory:f,addResultHistory:a=>{if(l){const r={link:P(a),display:a.display};"header"in a&&(r.header=a.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:a=>{f.value=[...f.value.slice(0,a),...f.value.slice(a+1)]}}},Se=l=>{const a=de(),r=Y(),x=he(),i=O(0),R=b(()=>i.value>0),p=pe([]);return me(()=>{const{search:m,terminate:S}=ye(),H=ge(c=>{const k=c.join(" "),{searchFilter:C=h=>h,splitWord:A,suggestionsFilter:T,...y}=a.value;k?(i.value+=1,m(c.join(" "),r.value,y).then(h=>C(h,k,r.value,x.value)).then(h=>{i.value-=1,p.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(p.value=[])})):p.value=[]},q.searchDelay-q.suggestDelay);z([l,r],([c])=>H(c),{immediate:!0}),fe(()=>{S()})}),{isSearching:R,results:p}};var Ae=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:a}){const r=se(),x=Y(),i=le(ae),{enabled:R,addQueryHistory:p,queryHistory:m,removeQueryHistory:S}=be(),{enabled:H,resultHistory:c,addResultHistory:k,removeResultHistory:C}=xe(),A=R||H,T=re(l,"queries"),{results:y,isSearching:h}=Se(T),u=ue({isQuery:!0,index:0}),v=O(0),d=O(0),F=b(()=>A&&(m.value.length>0||c.value.length>0)),D=b(()=>y.value.length>0),L=b(()=>y.value[v.value]||null),B=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?c.value.length-1:m.value.length-1):u.index=t-1},G=()=>{const{isQuery:e,index:t}=u;t===(e?m.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},J=()=>{v.value=v.value>0?v.value-1:y.value.length-1,d.value=L.value.contents.length-1},K=()=>{v.value=v.value<y.value.length-1?v.value+1:0,d.value=0},N=()=>{d.value<L.value.contents.length-1?d.value+=1:K()},V=()=>{d.value>0?d.value-=1:J()},E=e=>e.map(t=>Re(t)?t:s(t[0],t[1])),Z=e=>{if(e.type==="customField"){const t=He[e.index]||"$content",[o,Q=""]=ke(t)?t[x.value].split("$content"):t.split("$content");return e.display.map(n=>s("div",E([o,...n,Q])))}return e.display.map(t=>s("div",E(t)))},w=()=>{v.value=0,d.value=0,a("updateQuery",""),a("close")},W=()=>R?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.queryHistory),m.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{a("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(t)}})]))])):null,X=()=>H?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{w()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(o=>E(o)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),C(t)}})]))])):null;return ie("keydown",e=>{if(l.isFocusing){if(D.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=L.value.contents[d.value];p(l.queries.join(" ")),k(t),r.push(P(t)),w()}}else if(H){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(a("updateQuery",m.value[t]),e.preventDefault()):(r.push(c.value[t].link),w())}}}}),z([v,d],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!D.value:!F.value}],id:"search-pro-results"},l.queries.length?h.value?s(oe,{hint:i.value.searching}):D.value?s("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:t},o)=>{const Q=v.value===o;return s("li",{class:["search-pro-result-list-item",{active:Q}]},[s("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const _=Q&&d.value===ee;return s($,{to:P(n),class:["search-pro-result-item",{active:_,"aria-selected":_}],onClick:()=>{p(l.queries.join(" ")),k(n),w()}},()=>[n.type==="text"?null:s(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?s("div",{class:"content-header"},n.header):null,s("div",Z(n))])])})])})):i.value.emptyResult:A?F.value?[W(),X()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ae as default};
