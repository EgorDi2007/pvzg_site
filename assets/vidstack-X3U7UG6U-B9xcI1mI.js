/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var S;const w=window,f=w.trustedTypes,I=f?f.createPolicy("lit-html",{createHTML:n=>n}):void 0,P="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,D="?"+_,q=`<${D}>`,g=document,H=()=>g.createComment(""),x=n=>n===null||typeof n!="object"&&typeof n!="function",W=Array.isArray,F=n=>W(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",E=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,k=/>/g,v=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,U=/"/g,z=/^(?:script|style|textarea|title)$/i,G=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ot=G(1),N=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),R=new WeakMap,p=g.createTreeWalker(g,129,null,!1);function O(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return I!==void 0?I.createHTML(t):t}const J=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=y;for(let a=0;a<e;a++){const l=n[a];let h,d,$=-1,c=0;for(;c<l.length&&(o.lastIndex=c,d=o.exec(l),d!==null);)c=o.lastIndex,o===y?d[1]==="!--"?o=B:d[1]!==void 0?o=k:d[2]!==void 0?(z.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=v):d[3]!==void 0&&(o=v):o===v?d[0]===">"?(o=s??y,$=-1):d[1]===void 0?$=-2:($=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?v:d[3]==='"'?U:L):o===U||o===L?o=v:o===B||o===k?o=y:(o=v,s=void 0);const A=o===v&&n[a+1].startsWith("/>")?" ":"";r+=o===y?l+q:$>=0?(i.push(h),l.slice(0,$)+P+l.slice($)+_+A):l+_+($===-2?(i.push(void 0),a):A)}return[O(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class b{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[h,d]=J(t,e);if(this.el=b.createElement(h,i),p.currentNode=this.el.content,e===2){const $=this.el.content,c=$.firstChild;c.remove(),$.append(...c.childNodes)}for(;(s=p.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const $=[];for(const c of s.getAttributeNames())if(c.endsWith(P)||c.startsWith(_)){const A=d[o++];if($.push(c),A!==void 0){const Z=s.getAttribute(A.toLowerCase()+P).split(_),T=/([.?@])?(.*)/.exec(A);l.push({type:1,index:r,name:T[2],strings:Z,ctor:T[1]==="."?Q:T[1]==="?"?Y:T[1]==="@"?tt:M})}else l.push({type:6,index:r})}for(const c of $)s.removeAttribute(c)}if(z.test(s.tagName)){const $=s.textContent.split(_),c=$.length-1;if(c>0){s.textContent=f?f.emptyScript:"";for(let A=0;A<c;A++)s.append($[A],H()),p.nextNode(),l.push({type:2,index:++r});s.append($[c],H())}}}else if(s.nodeType===8)if(s.data===D)l.push({type:2,index:r});else{let $=-1;for(;($=s.data.indexOf(_,$+1))!==-1;)l.push({type:7,index:r}),$+=_.length-1}r++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function m(n,t,e=n,i){var s,r,o,a;if(t===N)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,i)),i!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=m(n,l._$AS(n,t.values),l,i)),t}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(i,!0);p.currentNode=r;let o=p.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new C(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new et(o,this,t)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=p.nextNode(),a++)}return p.currentNode=g,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class C{constructor(t,e,i,s){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=m(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):F(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=b.createElement(O(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const o=new K(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(t){let e=R.get(t.strings);return e===void 0&&R.set(t.strings,e=new b(t)),e}T(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new C(this.k(H()),this.k(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=m(this,t,e,0),o=!x(t)||t!==this._$AH&&t!==N,o&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=m(this,a[i+l],e,l),h===N&&(h=this._$AH[l]),o||(o=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const X=f?f.emptyScript:"";class Y extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class tt extends M{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=m(this,t,e,0))!==null&&i!==void 0?i:u)===N)return;const s=this._$AH,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){m(this,t)}}const V=w.litHtmlPolyfillSupport;V==null||V(b,C),((S=w.litHtmlVersions)!==null&&S!==void 0?S:w.litHtmlVersions=[]).push("2.8.0");const j=(n,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new C(t.insertBefore(H(),a),a,void 0,e??{})}return o._$AI(n),o};function rt(n,t){return[...n].sort(t?st:it)}function it(n,t){return n.height===t.height?(n.bitrate??0)-(t.bitrate??0):n.height-t.height}function st(n,t){return t.height===n.height?(t.bitrate??0)-(n.bitrate??0):t.height-n.height}function nt(n){return n?"true":"false"}function lt(n){return()=>nt(n())}var ht=class extends HTMLElement{constructor(){super(...arguments),this.rootPart=null}connectedCallback(){this.rootPart=j(this.render(),this,{renderBefore:this.firstChild}),this.rootPart.setConnected(!0)}disconnectedCallback(){var n;(n=this.rootPart)==null||n.setConnected(!1),this.rootPart=null,j(null,this)}};export{u as A,j as D,N as T,rt as a,lt as l,ht as t,ot as x};
