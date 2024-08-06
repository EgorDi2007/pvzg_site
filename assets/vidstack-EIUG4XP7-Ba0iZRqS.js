var rt=t=>{throw TypeError(t)};var Y=(t,e,a)=>e.has(t)||rt("Cannot "+a);var i=(t,e,a)=>(Y(t,e,"read from private field"),a?a.call(t):e.get(t)),o=(t,e,a)=>e.has(t)?rt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),d=(t,e,a,c)=>(Y(t,e,"write to private field"),c?c.call(t,a):e.set(t,a),a),h=(t,e,a)=>(Y(t,e,"access private method"),a);import{R as J,F as pt,s as et,U as ht,y as ti,t as ft,V as _,X as ii,L as si,e as ei,Y as D,$ as hi,a0 as ai,A as ri,a1 as ni,a2 as nt,_ as oi,c as z}from"./app-CiHux8Ls.js";var y,M,I,k,v,gt,vt,bt,dt,di=(dt=class{constructor(t,e){o(this,v);o(this,y);o(this,M);o(this,I);o(this,k,J(!1));d(this,y,t),d(this,M,e),h(this,v,gt).call(this)}get supported(){return i(this,k).call(this)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return this.type==="airplay"&&i(this,y).webkitShowPlaybackTargetPicker?i(this,y).webkitShowPlaybackTargetPicker():i(this,y).remote.prompt()}},y=new WeakMap,M=new WeakMap,I=new WeakMap,k=new WeakMap,v=new WeakSet,gt=function(){var t;!((t=i(this,y))!=null&&t.remote)||!this.canPrompt||(i(this,y).remote.watchAvailability(e=>{i(this,k).set(e)}).catch(()=>{i(this,k).set(!1)}),pt(h(this,v,vt).bind(this)))},vt=function(){if(!i(this,k).call(this))return;let t=["connecting","connect","disconnect"],e=h(this,v,bt).bind(this);e(),et(i(this,y),"playing",e);let a=new ht(i(this,y).remote);for(let c of t)a.add(c,e)},bt=function(t){let e=i(this,y).remote.state;if(e===i(this,I))return;let a={type:this.type,state:e};i(this,M).notify("remote-playback-change",a,t),d(this,I,e)},dt),Ti=class extends di{constructor(){super(...arguments),this.type="airplay"}get canPrompt(){return"WebKitPlaybackTargetAvailabilityEvent"in window}},C=null,H=[],K=[];function at(){return C??(C=new AudioContext)}function ci(){let t=at(),e=t.createGain();return e.connect(t.destination),H.push(e),e}function li(t,e){let a=at(),c=a.createMediaElementSource(t);return e&&c.connect(e),K.push(c),c}function ui(t){let e=H.indexOf(t);e!==-1&&(H.splice(e,1),t.disconnect(),kt())}function mi(t){let e=K.indexOf(t);e!==-1&&(K.splice(e,1),t.disconnect(),kt())}function kt(){C&&H.length===0&&K.length===0&&C.close().then(()=>{C=null})}var L,P,m,p,$,wt,Q,ct,yi=(ct=class{constructor(t,e){o(this,$);o(this,L);o(this,P);o(this,m,null);o(this,p,null);d(this,L,t),d(this,P,e)}get currentGain(){var t,e;return((e=(t=i(this,m))==null?void 0:t.gain)==null?void 0:e.value)??null}get supported(){return!0}setGain(t){let e=this.currentGain;if(t!==this.currentGain){if(t===1&&e!==1){this.removeGain();return}i(this,m)||(d(this,m,ci()),i(this,p)&&i(this,p).connect(i(this,m))),i(this,p)||d(this,p,li(i(this,L),i(this,m))),i(this,m).gain.value=t,i(this,P).call(this,t)}}removeGain(){i(this,m)&&(i(this,p)&&i(this,p).connect(at().destination),h(this,$,Q).call(this),i(this,P).call(this,null))}destroy(){h(this,$,wt).call(this),h(this,$,Q).call(this)}},L=new WeakMap,P=new WeakMap,m=new WeakMap,p=new WeakMap,$=new WeakSet,wt=function(){if(i(this,p))try{mi(i(this,p))}catch{}finally{d(this,p,null)}},Q=function(){if(i(this,m))try{ui(i(this,m))}catch{}finally{d(this,m,null)}},ct),pi=["focus","blur","visibilitychange","pageshow","pagehide"],w,x,j,W,Tt,lt,fi=(lt=class{constructor(){o(this,W);o(this,w,J(ot()));o(this,x,J(document.visibilityState));o(this,j)}connect(){let t=new ht(window),e=h(this,W,Tt).bind(this);for(let a of pi)t.add(a,e);D&&t.add("beforeunload",a=>{d(this,j,setTimeout(()=>{a.defaultPrevented||a.returnValue.length>0||(i(this,w).set("hidden"),i(this,x).set("hidden"))},0))})}get pageState(){return i(this,w).call(this)}get visibility(){return i(this,x).call(this)}},w=new WeakMap,x=new WeakMap,j=new WeakMap,W=new WeakSet,Tt=function(t){D&&window.clearTimeout(i(this,j)),(t.type!=="blur"||i(this,w).call(this)==="active")&&(i(this,w).set(ot(t)),i(this,x).set(document.visibilityState=="hidden"?"hidden":"visible"))},lt);function ot(t){return(t==null?void 0:t.type)==="blur"||document.visibilityState==="hidden"?"hidden":document.hasFocus()?"active":"passive"}var B,r,g,G,A,T,V,E,s,n,$t,R,O,St,Pt,xt,Gt,X,st,l,vi,b,At,Z,Et,Rt,Ot,N,Mt,It,Lt,jt,Bt,Vt,qt,Ft,Ut,_t,Ct,Nt,Dt,Ht,Kt,Wt,Xt,Yt,ut,gi=(ut=class{constructor(t,e){o(this,s);o(this,B);o(this,r);o(this,g,!1);o(this,G,!1);o(this,A,!1);o(this,T,new ei(h(this,s,St).bind(this)));o(this,V,new fi);o(this,E);o(this,R,0);o(this,O,-1);o(this,X);o(this,st);d(this,B,t),d(this,r,e),d(this,E,new ht(t.media)),h(this,s,Pt).call(this),i(this,V).connect(),pt(h(this,s,Ut).bind(this)),ft(h(this,s,$t).bind(this))}},B=new WeakMap,r=new WeakMap,g=new WeakMap,G=new WeakMap,A=new WeakMap,T=new WeakMap,V=new WeakMap,E=new WeakMap,s=new WeakSet,n=function(){return i(this,B).media},$t=function(){var t;d(this,G,!1),d(this,A,!1),i(this,T).stop(),i(this,E).abort(),(t=i(this,X))==null||t.clear()},R=new WeakMap,O=new WeakMap,St=function(){let t=i(this,s,n).currentTime;!(D&&t-i(this,O)<.35)&&i(this,R)!==t&&(h(this,s,b).call(this,t),d(this,R,t))},Pt=function(){h(this,s,l).call(this,"loadstart",h(this,s,At)),h(this,s,l).call(this,"abort",h(this,s,Z)),h(this,s,l).call(this,"emptied",h(this,s,Et)),h(this,s,l).call(this,"error",h(this,s,Yt)),h(this,s,l).call(this,"volumechange",h(this,s,Nt))},xt=function(){i(this,G)||(h(this,s,l).call(this,"loadeddata",h(this,s,Rt)),h(this,s,l).call(this,"loadedmetadata",h(this,s,Ot)),h(this,s,l).call(this,"canplay",h(this,s,Lt)),h(this,s,l).call(this,"canplaythrough",h(this,s,jt)),h(this,s,l).call(this,"durationchange",h(this,s,Ct)),h(this,s,l).call(this,"play",h(this,s,Mt)),h(this,s,l).call(this,"progress",h(this,s,Kt)),h(this,s,l).call(this,"stalled",h(this,s,Vt)),h(this,s,l).call(this,"suspend",h(this,s,Wt)),h(this,s,l).call(this,"ratechange",h(this,s,Xt)),d(this,G,!0))},Gt=function(){i(this,A)||(h(this,s,l).call(this,"pause",h(this,s,It)),h(this,s,l).call(this,"playing",h(this,s,Bt)),h(this,s,l).call(this,"seeked",h(this,s,Dt)),h(this,s,l).call(this,"seeking",h(this,s,Ht)),h(this,s,l).call(this,"ended",h(this,s,Ft)),h(this,s,l).call(this,"waiting",h(this,s,qt)),d(this,A,!0))},X=new WeakMap,st=new WeakMap,l=function(t,e){i(this,E).add(t,e.bind(this))},vi=function(t){},b=function(t,e){let a=Math.min(t,i(this,r).$state.seekableEnd());i(this,r).notify("time-change",a,e)},At=function(t){if(i(this,s,n).networkState===3){h(this,s,Z).call(this,t);return}h(this,s,xt).call(this),i(this,r).notify("load-start",void 0,t)},Z=function(t){i(this,r).notify("abort",void 0,t)},Et=function(){i(this,r).notify("emptied",void 0,event)},Rt=function(t){i(this,r).notify("loaded-data",void 0,t)},Ot=function(t){d(this,R,0),d(this,O,-1),h(this,s,Gt).call(this),i(this,r).notify("loaded-metadata",void 0,t),(hi||D&&ai(i(this,r).$state.source()))&&i(this,r).delegate.ready(h(this,s,N).call(this),t)},N=function(){return{provider:ri(i(this,r).$provider),duration:i(this,s,n).duration,buffered:i(this,s,n).buffered,seekable:i(this,s,n).seekable}},Mt=function(t){i(this,r).$state.canPlay&&i(this,r).notify("play",void 0,t)},It=function(t){i(this,s,n).readyState===1&&!i(this,g)||(d(this,g,!1),i(this,T).stop(),i(this,r).notify("pause",void 0,t))},Lt=function(t){i(this,r).delegate.ready(h(this,s,N).call(this),t)},jt=function(t){i(this,r).$state.started()||i(this,r).notify("can-play-through",h(this,s,N).call(this),t)},Bt=function(t){i(this,s,n).paused||(d(this,g,!1),i(this,r).notify("playing",void 0,t),i(this,T).start())},Vt=function(t){i(this,r).notify("stalled",void 0,t),i(this,s,n).readyState<3&&(d(this,g,!0),i(this,r).notify("waiting",void 0,t))},qt=function(t){i(this,s,n).readyState<3&&(d(this,g,!0),i(this,r).notify("waiting",void 0,t))},Ft=function(t){i(this,T).stop(),h(this,s,b).call(this,i(this,s,n).duration,t),i(this,r).notify("end",void 0,t),i(this,r).$state.loop()&&ni(i(this,s,n).controls)&&(i(this,s,n).controls=!1)},Ut=function(){let t=i(this,r).$state.paused(),e=i(this,V).visibility==="hidden";(t||e)&&et(i(this,s,n),"timeupdate",h(this,s,_t).bind(this))},_t=function(t){h(this,s,b).call(this,i(this,s,n).currentTime,t)},Ct=function(t){i(this,r).$state.ended()&&h(this,s,b).call(this,i(this,s,n).duration,t),i(this,r).notify("duration-change",i(this,s,n).duration,t)},Nt=function(t){let e={volume:i(this,s,n).volume,muted:i(this,s,n).muted};i(this,r).notify("volume-change",e,t)},Dt=function(t){d(this,O,i(this,s,n).currentTime),h(this,s,b).call(this,i(this,s,n).currentTime,t),i(this,r).notify("seeked",i(this,s,n).currentTime,t),Math.trunc(i(this,s,n).currentTime)===Math.trunc(i(this,s,n).duration)&&nt(i(this,s,n).duration)>nt(i(this,s,n).currentTime)&&(h(this,s,b).call(this,i(this,s,n).duration,t),i(this,s,n).ended||i(this,r).player.dispatch(new oi("media-play-request",{trigger:t})))},Ht=function(t){i(this,r).notify("seeking",i(this,s,n).currentTime,t)},Kt=function(t){let e={buffered:i(this,s,n).buffered,seekable:i(this,s,n).seekable};i(this,r).notify("progress",e,t)},Wt=function(t){i(this,r).notify("suspend",void 0,t)},Xt=function(t){i(this,r).notify("rate-change",i(this,s,n).playbackRate,t)},Yt=function(t){let e=i(this,s,n).error;if(!e)return;let a={message:e.message,code:e.code,mediaError:e};i(this,r).notify("error",a,t)},ut),q,f,u,S,zt,Jt,Qt,tt,Zt,mt,bi=(mt=class{constructor(t,e){o(this,u);o(this,q);o(this,f);d(this,q,t),d(this,f,e),i(this,u,S).onaddtrack=h(this,u,zt).bind(this),i(this,u,S).onremovetrack=h(this,u,Jt).bind(this),i(this,u,S).onchange=h(this,u,Qt).bind(this),et(i(this,f).audioTracks,"change",h(this,u,Zt).bind(this))}},q=new WeakMap,f=new WeakMap,u=new WeakSet,S=function(){return i(this,q).media.audioTracks},zt=function(t){let e=t.track;if(e.label==="")return;let a=e.id.toString()||`native-audio-${i(this,f).audioTracks.length}`,c={id:a,label:e.label,language:e.language,kind:e.kind,selected:!1};i(this,f).audioTracks[z.add](c,t),e.enabled&&(c.selected=!0)},Jt=function(t){let e=i(this,f).audioTracks.getById(t.track.id);e&&i(this,f).audioTracks[z.remove](e,t)},Qt=function(t){let e=h(this,u,tt).call(this);if(!e)return;let a=i(this,f).audioTracks.getById(e.id);a&&i(this,f).audioTracks[z.select](a,!0,t)},tt=function(){return Array.from(i(this,u,S)).find(t=>t.enabled)},Zt=function(t){let{current:e}=t.detail;if(!e)return;let a=i(this,u,S).getTrackById(e.id);if(a){let c=h(this,u,tt).call(this);c&&(c.enabled=!1),a.enabled=!0}},mt),F,it,yt,Si=(yt=class{constructor(t,e){o(this,F);this.media=t,this.ctx=e,this.scope=ti(),this.currentSrc=null,this.audioGain=new yi(this.media,a=>{this.ctx.notify("audio-gain-change",a)})}setup(){new gi(this,this.ctx),"audioTracks"in this.media&&new bi(this,this.ctx),ft(()=>{this.audioGain.destroy(),this.media.srcObject=null,this.media.removeAttribute("src");for(let t of this.media.querySelectorAll("source"))t.remove();this.media.load()})}get type(){return""}setPlaybackRate(t){this.media.playbackRate=t}async play(){return this.media.play()}async pause(){return this.media.pause()}setMuted(t){this.media.muted=t}setVolume(t){this.media.volume=t}setCurrentTime(t){this.media.currentTime=t}setPlaysInline(t){_(this.media,"playsinline",t)}async loadSource({src:t,type:e},a){this.media.preload=a||"",ii(t)?(this.removeSource(),this.media.srcObject=t):(this.media.srcObject=null,si(t)?e!=="?"?this.appendSource({src:t,type:e}):(this.removeSource(),this.media.src=h(this,F,it).call(this,t)):(this.removeSource(),this.media.src=window.URL.createObjectURL(t))),this.media.load(),this.currentSrc={src:t,type:e}}appendSource(t,e){let a=this.media.querySelector("source[data-vds]"),c=a??document.createElement("source");_(c,"src",h(this,F,it).call(this,t.src)),_(c,"type",t.type!=="?"?t.type:e),_(c,"data-vds",""),a||this.media.append(c)}removeSource(){var t;(t=this.media.querySelector("source[data-vds]"))==null||t.remove()}},F=new WeakSet,it=function(t){let{clipStartTime:e,clipEndTime:a}=this.ctx.$state,c=e(),U=a();return c>0&&U>0?`${t}#t=${c},${U}`:c>0?`${t}#t=${c}`:U>0?`${t}#t=0,${U}`:t},yt);export{Si as R,Ti as c};
