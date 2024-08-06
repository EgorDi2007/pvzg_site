const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-google-cast-B_YP_U9F.js","assets/app-CiHux8Ls.js"])))=>i.map(i=>d[i]);
var f=t=>{throw TypeError(t)};var p=(t,e,r)=>e.has(t)||f("Cannot "+r);var i=(t,e,r)=>(p(t,e,"read from private field"),r?r.call(t):e.get(t)),u=(t,e,r)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),w=(t,e,r,n)=>(p(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),o=(t,e,r)=>(p(t,e,"access private method"),r);import{s as A,T as S,$ as I,a3 as b,A as k,p as O,S as D}from"./app-CiHux8Ls.js";function T(){return"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"}function R(){var t;return!!((t=window.cast)!=null&&t.framework)}function G(){var t,e;return!!((e=(t=window.chrome)==null?void 0:t.cast)!=null&&e.isAvailable)}function y(){return d().getCastState()===cast.framework.CastState.CONNECTED}function d(){return window.cast.framework.CastContext.getInstance()}function C(){return d().getCurrentSession()}function N(){var t;return(t=C())==null?void 0:t.getSessionObj().media[0]}function x(t){var e;return((e=N())==null?void 0:e.media.contentId)===(t==null?void 0:t.src)}function j(){return{language:"en-US",autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,receiverApplicationId:chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,resumeSavedSession:!0,androidReceiverCompatible:!0}}function L(t){return`Google Cast Error Code: ${t}`}function z(t,e){return A(d(),t,e)}var s,a,E,_,P,c,l,v,$=(v=class{constructor(){u(this,a);u(this,s);this.name="google-cast"}get cast(){return d()}mediaType(){return"video"}canPlay(t){return S&&!I&&b(t)}async prompt(t){var m;let e,r,n;try{e=await o(this,a,E).call(this,t),i(this,s)||(w(this,s,new cast.framework.RemotePlayer),new cast.framework.RemotePlayerController(i(this,s))),r=t.player.createEvent("google-cast-prompt-open",{trigger:e}),t.player.dispatchEvent(r),o(this,a,c).call(this,t,"connecting",r),await o(this,a,_).call(this,k(t.$props.googleCast)),t.$state.remotePlaybackInfo.set({deviceName:(m=C())==null?void 0:m.getCastDevice().friendlyName}),y()&&o(this,a,c).call(this,t,"connected",r)}catch(g){let h=g instanceof Error?g:o(this,a,l).call(this,(g+"").toUpperCase(),"Prompt failed.");throw n=t.player.createEvent("google-cast-prompt-error",{detail:h,trigger:r??e,cancelable:!0}),t.player.dispatch(n),o(this,a,c).call(this,t,y()?"connected":"disconnected",n),h}finally{t.player.dispatch("google-cast-prompt-close",{trigger:n??r??e})}}async load(t){if(!i(this,s))throw Error("[vidstack] google cast player was not initialized");return new(await O(async()=>{const{GoogleCastProvider:e}=await import("./vidstack-google-cast-B_YP_U9F.js");return{GoogleCastProvider:e}},__vite__mapDeps([0,1]))).GoogleCastProvider(i(this,s),t)}},s=new WeakMap,a=new WeakSet,E=async function(t){if(R())return;let e=t.player.createEvent("google-cast-load-start");t.player.dispatch(e),await D(T()),await customElements.whenDefined("google-cast-launcher");let r=t.player.createEvent("google-cast-loaded",{trigger:e});if(t.player.dispatch(r),!G())throw o(this,a,l).call(this,"CAST_NOT_AVAILABLE","Google Cast not available on this platform.");return r},_=async function(t){o(this,a,P).call(this,t);let e=await this.cast.requestSession();if(e)throw o(this,a,l).call(this,e.toUpperCase(),L(e))},P=function(t){var e;(e=this.cast)==null||e.setOptions({...j(),...t})},c=function(t,e,r){let n={type:"google-cast",state:e};t.notify("remote-playback-change",n,r)},l=function(t,e){let r=Error(e);return r.code=t,r},v);const B=Object.freeze(Object.defineProperty({__proto__:null,GoogleCastLoader:$},Symbol.toStringTag,{value:"Module"}));export{x as d,z as l,L as m,N as n,d as r,C as s,B as v};
