var z=t=>{throw TypeError(t)};var G=(t,s,i)=>s.has(t)||z("Cannot "+i);var e=(t,s,i)=>(G(t,s,"read from private field"),i?i.call(t):s.get(t)),m=(t,s,i)=>s.has(t)?z("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,i),l=(t,s,i,h)=>(G(t,s,"write to private field"),h?h.call(t,i):s.set(t,i),i),r=(t,s,i)=>(G(t,s,"access private method"),i);import{r as Lt,s as wt,n as rt,d as J,l as At,m as It}from"./vidstack-BI76A2HO-CNM8wwLN.js";import{y as bt,h as S,e as _t,q as Q,t as Mt,_ as W,A as R,s as tt,F as Dt,Z as Nt,c as Pt}from"./app-CiHux8Ls.js";var y,P,ht,st,Gt=(st=class{constructor(t){m(this,P);m(this,y);l(this,y,new chrome.cast.media.MediaInfo(t.src,t.type))}build(){return e(this,y)}setStreamType(t){return t.includes("live")?e(this,y).streamType=chrome.cast.media.StreamType.LIVE:e(this,y).streamType=chrome.cast.media.StreamType.BUFFERED,this}setTracks(t){return e(this,y).tracks=t.map(r(this,P,ht)),this}setMetadata(t,s){return e(this,y).metadata=new chrome.cast.media.GenericMediaMetadata,e(this,y).metadata.title=t,e(this,y).metadata.images=[{url:s}],this}},y=new WeakMap,P=new WeakSet,ht=function(t,s){let i=new chrome.cast.media.Track(s,chrome.cast.media.TrackType.TEXT);return i.name=t.label,i.trackContentId=t.src,i.trackContentType="text/vtt",i.language=t.language,i.subtype=t.kind.toUpperCase(),i},st),$=chrome.cast.media.TrackType.TEXT,et=chrome.cast.media.TrackType.AUDIO,k,T,M,c,O,I,nt,ot,lt,x,N,V,it,Rt=(it=class{constructor(t,s,i){m(this,c);m(this,k);m(this,T);m(this,M);l(this,k,t),l(this,T,s),l(this,M,i)}setup(){let t=this.syncRemoteActiveIds.bind(this);tt(e(this,T).audioTracks,"change",t),tt(e(this,T).textTracks,"mode-change",t),Dt(r(this,c,ot).bind(this))}getLocalTextTracks(){return e(this,T).$state.textTracks().filter(t=>t.src&&t.type==="vtt")}syncRemoteTracks(t){if(!e(this,k).isMediaLoaded)return;let s=r(this,c,O).call(this),i=this.getLocalTextTracks(),h=r(this,c,I).call(this,et),d=r(this,c,I).call(this,$);for(let u of h){if(r(this,c,x).call(this,s,u))continue;let _={id:u.trackId.toString(),label:u.name,language:u.language,kind:u.subtype??"main",selected:!1};e(this,T).audioTracks[Pt.add](_,t)}for(let u of d){if(r(this,c,x).call(this,i,u))continue;let _={id:u.trackId.toString(),src:u.trackContentId,label:u.name,language:u.language,kind:u.subtype.toLowerCase()};e(this,T).textTracks.add(_,t)}}syncRemoteActiveIds(t){if(!e(this,k).isMediaLoaded)return;let s=r(this,c,nt).call(this),i=new chrome.cast.media.EditTracksInfoRequest(s);r(this,c,lt).call(this,i).catch(h=>{})}},k=new WeakMap,T=new WeakMap,M=new WeakMap,c=new WeakSet,O=function(){return e(this,T).$state.audioTracks()},I=function(t){var i;let s=((i=e(this,k).mediaInfo)==null?void 0:i.tracks)??[];return t?s.filter(h=>h.type===t):s},nt=function(){let t=[],s=r(this,c,O).call(this).find(h=>h.selected),i=this.getLocalTextTracks().filter(h=>h.mode==="showing");if(s){let h=r(this,c,I).call(this,et),d=r(this,c,N).call(this,h,s);d&&t.push(d.trackId)}if(i!=null&&i.length){let h=r(this,c,I).call(this,$);if(h.length)for(let d of i){let u=r(this,c,N).call(this,h,d);u&&t.push(u.trackId)}}return t},ot=function(){let t=this.getLocalTextTracks();if(!e(this,k).isMediaLoaded)return;let s=r(this,c,I).call(this,$);for(let i of t)if(!r(this,c,N).call(this,s,i)){Nt(()=>{var h;return(h=e(this,M))==null?void 0:h.call(this)});break}},lt=function(t){let s=rt();return new Promise((i,h)=>s==null?void 0:s.editTracksInfo(t,i,h))},x=function(t,s){return t.find(i=>r(this,c,V).call(this,i,s))},N=function(t,s){return t.find(i=>r(this,c,V).call(this,s,i))},V=function(t,s){return s.name===t.label&&s.language===t.language&&s.subtype.toLowerCase()===t.kind.toLowerCase()},it),n,o,E,g,b,L,v,C,w,D,f,A,a,ct,dt,H,ut,U,mt,ft,yt,F,q,B,Y,Tt,pt,gt,K,kt,X,Et,Z,p,vt,Ct,j,St,at,Vt=(at=class{constructor(t,s){m(this,a);m(this,n);m(this,o);m(this,E);m(this,g);m(this,b);m(this,L);m(this,v);m(this,C);m(this,w);m(this,D);m(this,f);m(this,A);this.$$PROVIDER_TYPE="GOOGLE_CAST",this.scope=bt(),l(this,g,null),l(this,b,"disconnected"),l(this,L,0),l(this,v,0),l(this,C,new S(0,0)),l(this,w,new _t(r(this,a,ft).bind(this))),l(this,f,null),l(this,A,!1),l(this,n,t),l(this,o,s),l(this,E,new Rt(t,s,r(this,a,St).bind(this)))}get type(){return"google-cast"}get currentSrc(){return e(this,g)}get player(){return e(this,n)}get cast(){return Lt()}get session(){return wt()}get media(){return rt()}get hasActiveSession(){return J(e(this,g))}setup(){r(this,a,ct).call(this),r(this,a,dt).call(this),e(this,E).setup(),e(this,o).notify("provider-setup",this)}async play(){var t;if(!(!e(this,n).isPaused&&!e(this,A))){if(e(this,A)){await r(this,a,j).call(this,!1,0);return}(t=e(this,n).controller)==null||t.playOrPause()}}async pause(){var t;e(this,n).isPaused||((t=e(this,n).controller)==null||t.playOrPause())}getMediaStatus(t){return new Promise((s,i)=>{var h;(h=this.media)==null||h.getStatus(t,s,i)})}setMuted(t){var s;(t&&!e(this,n).isMuted||!t&&e(this,n).isMuted)&&((s=e(this,n).controller)==null||s.muteOrUnmute())}setCurrentTime(t){var s;e(this,n).currentTime=t,e(this,o).notify("seeking",t),(s=e(this,n).controller)==null||s.seek()}setVolume(t){var s;e(this,n).volumeLevel=t,(s=e(this,n).controller)==null||s.setVolumeLevel()}async loadSource(t){var h;if(((h=e(this,f))==null?void 0:h.src)!==t&&l(this,f,null),J(t)){r(this,a,ut).call(this),l(this,g,t);return}e(this,o).notify("load-start");let s=r(this,a,Ct).call(this,t),i=await this.session.loadMedia(s);if(i){l(this,g,null),e(this,o).notify("error",Error(It(i)));return}l(this,g,t)}destroy(){r(this,a,H).call(this),r(this,a,U).call(this)}},n=new WeakMap,o=new WeakMap,E=new WeakMap,g=new WeakMap,b=new WeakMap,L=new WeakMap,v=new WeakMap,C=new WeakMap,w=new WeakMap,D=new WeakMap,f=new WeakMap,A=new WeakMap,a=new WeakSet,ct=function(){At(cast.framework.CastContextEventType.CAST_STATE_CHANGED,r(this,a,F).bind(this))},dt=function(){let t=cast.framework.RemotePlayerEventType,s={[t.IS_CONNECTED_CHANGED]:r(this,a,F),[t.IS_MEDIA_LOADED_CHANGED]:r(this,a,q),[t.CAN_CONTROL_VOLUME_CHANGED]:r(this,a,B),[t.CAN_SEEK_CHANGED]:r(this,a,Y),[t.DURATION_CHANGED]:r(this,a,gt),[t.IS_MUTED_CHANGED]:r(this,a,K),[t.VOLUME_LEVEL_CHANGED]:r(this,a,K),[t.IS_PAUSED_CHANGED]:r(this,a,kt),[t.LIVE_SEEKABLE_RANGE_CHANGED]:r(this,a,X),[t.PLAYER_STATE_CHANGED]:r(this,a,Et)};l(this,D,s);let i=r(this,a,yt).bind(this);for(let h of Q(s))e(this,n).controller.addEventListener(h,i);Mt(()=>{for(let h of Q(s))e(this,n).controller.removeEventListener(h,i)})},H=function(){e(this,f)||(l(this,v,0),l(this,C,new S(0,0))),e(this,w).stop(),l(this,L,0),l(this,f,null)},ut=function(){let t=new W("resume-session",{detail:this.session});r(this,a,q).call(this,t);let{muted:s,volume:i,savedState:h}=e(this,o).$state,d=h();this.setCurrentTime(Math.max(e(this,n).currentTime,(d==null?void 0:d.currentTime)??0)),this.setMuted(s()),this.setVolume(i()),(d==null?void 0:d.paused)===!1&&this.play()},U=function(){this.cast.endCurrentSession(!0);let{remotePlaybackLoader:t}=e(this,o).$state;t.set(null)},mt=function(){let{savedState:t}=e(this,o).$state;t.set({paused:e(this,n).isPaused,currentTime:e(this,n).currentTime}),r(this,a,U).call(this)},ft=function(){r(this,a,pt).call(this)},yt=function(t){e(this,D)[t.type].call(this,t)},F=function(t){let s=this.cast.getCastState(),i=s===cast.framework.CastState.CONNECTED?"connected":s===cast.framework.CastState.CONNECTING?"connecting":"disconnected";if(e(this,b)===i)return;let h={type:"google-cast",state:i},d=r(this,a,p).call(this,t);l(this,b,i),e(this,o).notify("remote-playback-change",h,d),i==="disconnected"&&r(this,a,mt).call(this)},q=function(t){if(!e(this,n).isMediaLoaded)return;let s=R(e(this,o).$state.source);Promise.resolve().then(()=>{if(s!==R(e(this,o).$state.source)||!e(this,n).isMediaLoaded)return;r(this,a,H).call(this);let i=e(this,n).duration;l(this,C,new S(0,i));let h={provider:this,duration:i,buffered:new S(0,0),seekable:r(this,a,Z).call(this)},d=r(this,a,p).call(this,t);e(this,o).notify("loaded-metadata",void 0,d),e(this,o).notify("loaded-data",void 0,d),e(this,o).notify("can-play",h,d),r(this,a,B).call(this),r(this,a,Y).call(this,t);let{volume:u,muted:_}=e(this,o).$state;this.setVolume(u()),this.setMuted(_()),e(this,w).start(),e(this,E).syncRemoteTracks(d),e(this,E).syncRemoteActiveIds(d)})},B=function(){e(this,o).$state.canSetVolume.set(e(this,n).canControlVolume)},Y=function(t){let s=r(this,a,p).call(this,t);e(this,o).notify("stream-type-change",r(this,a,Tt).call(this),s)},Tt=function(){var t;return((t=e(this,n).mediaInfo)==null?void 0:t.streamType)===chrome.cast.media.StreamType.LIVE?e(this,n).canSeek?"live:dvr":"live":"on-demand"},pt=function(){if(e(this,f))return;let t=e(this,n).currentTime;t!==e(this,L)&&(e(this,o).notify("time-change",t),t>e(this,v)&&(l(this,v,t),r(this,a,X).call(this)),e(this,o).$state.seeking()&&e(this,o).notify("seeked",t),l(this,L,t))},gt=function(t){if(!e(this,n).isMediaLoaded||e(this,f))return;let s=e(this,n).duration,i=r(this,a,p).call(this,t);l(this,C,new S(0,s)),e(this,o).notify("duration-change",s,i)},K=function(t){if(!e(this,n).isMediaLoaded)return;let s={muted:e(this,n).isMuted,volume:e(this,n).volumeLevel},i=r(this,a,p).call(this,t);e(this,o).notify("volume-change",s,i)},kt=function(t){let s=r(this,a,p).call(this,t);e(this,n).isPaused?e(this,o).notify("pause",void 0,s):e(this,o).notify("play",void 0,s)},X=function(t){let s={seekable:r(this,a,Z).call(this),buffered:new S(0,e(this,v))},i=t?r(this,a,p).call(this,t):void 0;e(this,o).notify("progress",s,i)},Et=function(t){let s=e(this,n).playerState,i=chrome.cast.media.PlayerState;if(l(this,A,s===i.IDLE),s===i.PAUSED)return;let h=r(this,a,p).call(this,t);switch(s){case i.PLAYING:e(this,o).notify("playing",void 0,h);break;case i.BUFFERING:e(this,o).notify("waiting",void 0,h);break;case i.IDLE:e(this,w).stop(),e(this,o).notify("pause"),e(this,o).notify("end");break}},Z=function(){return e(this,n).liveSeekableRange?new S(e(this,n).liveSeekableRange.start,e(this,n).liveSeekableRange.end):e(this,C)},p=function(t){return t instanceof Event?t:new W(t.type,{detail:t})},vt=function(t){let{streamType:s,title:i,poster:h}=e(this,o).$state;return new Gt(t).setMetadata(i(),h()).setStreamType(s()).setTracks(e(this,E).getLocalTextTracks()).build()},Ct=function(t){var d,u;let s=r(this,a,vt).call(this,t),i=new chrome.cast.media.LoadRequest(s),h=e(this,o).$state.savedState();return i.autoplay=(((d=e(this,f))==null?void 0:d.paused)??(h==null?void 0:h.paused))===!1,i.currentTime=((u=e(this,f))==null?void 0:u.time)??(h==null?void 0:h.currentTime)??0,i},j=async function(t,s){let i=R(e(this,o).$state.source);l(this,f,{src:i,paused:t,time:s}),await this.loadSource(i)},St=function(){r(this,a,j).call(this,e(this,n).isPaused,e(this,n).currentTime).catch(t=>{})},at);export{Vt as GoogleCastProvider};
