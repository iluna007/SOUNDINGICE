function y(p,t,e,i){return new(e||(e=Promise))(function(s,n){function r(a){try{l(i.next(a))}catch(o){n(o)}}function h(a){try{l(i.throw(a))}catch(o){n(o)}}function l(a){var o;a.done?s(a.value):(o=a.value,o instanceof e?o:new e(function(c){c(o)})).then(r,h)}l((i=i.apply(p,t||[])).next())})}class T{constructor(){this.listeners={}}on(t,e,i){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),i==null?void 0:i.once){const s=()=>{this.un(t,s),this.un(t,e)};return this.on(t,s),s}return()=>this.un(t,e)}un(t,e){var i;(i=this.listeners[t])===null||i===void 0||i.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach(i=>i(...e))}}const R={decode:function(p,t){return y(this,void 0,void 0,function*(){const e=new AudioContext({sampleRate:t});return e.decodeAudioData(p).finally(()=>e.close())})},createBuffer:function(p,t){return typeof p[0]=="number"&&(p=[p]),function(e){const i=e[0];if(i.some(s=>s>1||s<-1)){const s=i.length;let n=0;for(let r=0;r<s;r++){const h=Math.abs(i[r]);h>n&&(n=h)}for(const r of e)for(let h=0;h<s;h++)r[h]/=n}}(p),{duration:t,length:p[0].length,sampleRate:p[0].length/t,numberOfChannels:p.length,getChannelData:e=>p==null?void 0:p[e],copyFromChannel:AudioBuffer.prototype.copyFromChannel,copyToChannel:AudioBuffer.prototype.copyToChannel}}};function _(p,t){const e=t.xmlns?document.createElementNS(t.xmlns,p):document.createElement(p);for(const[i,s]of Object.entries(t))if(i==="children")for(const[n,r]of Object.entries(t))typeof r=="string"?e.appendChild(document.createTextNode(r)):e.appendChild(_(n,r));else i==="style"?Object.assign(e.style,s):i==="textContent"?e.textContent=s:e.setAttribute(i,s.toString());return e}function N(p,t,e){const i=_(p,t||{});return e==null||e.appendChild(i),i}var B=Object.freeze({__proto__:null,createElement:N,default:N});const $={fetchBlob:function(p,t,e){return y(this,void 0,void 0,function*(){const i=yield fetch(p,e);if(i.status>=400)throw new Error(`Failed to fetch ${p}: ${i.status} (${i.statusText})`);return function(s,n){y(this,void 0,void 0,function*(){if(!s.body||!s.headers)return;const r=s.body.getReader(),h=Number(s.headers.get("Content-Length"))||0;let l=0;const a=c=>y(this,void 0,void 0,function*(){l+=(c==null?void 0:c.length)||0;const d=Math.round(l/h*100);n(d)}),o=()=>y(this,void 0,void 0,function*(){let c;try{c=yield r.read()}catch{return}c.done||(a(c.value),yield o())});o()})}(i.clone(),t),i.blob()})}};class j extends T{constructor(t){super(),this.isExternalMedia=!1,t.media?(this.media=t.media,this.isExternalMedia=!0):this.media=document.createElement("audio"),t.mediaControls&&(this.media.controls=!0),t.autoplay&&(this.media.autoplay=!0),t.playbackRate!=null&&this.onMediaEvent("canplay",()=>{t.playbackRate!=null&&(this.media.playbackRate=t.playbackRate)},{once:!0})}onMediaEvent(t,e,i){return this.media.addEventListener(t,e,i),()=>this.media.removeEventListener(t,e,i)}getSrc(){return this.media.currentSrc||this.media.src||""}revokeSrc(){const t=this.getSrc();t.startsWith("blob:")&&URL.revokeObjectURL(t)}canPlayType(t){return this.media.canPlayType(t)!==""}setSrc(t,e){const i=this.getSrc();if(t&&i===t)return;this.revokeSrc();const s=e instanceof Blob&&(this.canPlayType(e.type)||!t)?URL.createObjectURL(e):t;i&&(this.media.src="");try{this.media.src=s}catch{this.media.src=t}}destroy(){this.isExternalMedia||(this.media.pause(),this.media.remove(),this.revokeSrc(),this.media.src="",this.media.load())}setMediaElement(t){this.media=t}play(){return y(this,void 0,void 0,function*(){return this.media.play()})}pause(){this.media.pause()}isPlaying(){return!this.media.paused&&!this.media.ended}setTime(t){this.media.currentTime=Math.max(0,Math.min(t,this.getDuration()))}getDuration(){return this.media.duration}getCurrentTime(){return this.media.currentTime}getVolume(){return this.media.volume}setVolume(t){this.media.volume=t}getMuted(){return this.media.muted}setMuted(t){this.media.muted=t}getPlaybackRate(){return this.media.playbackRate}isSeeking(){return this.media.seeking}setPlaybackRate(t,e){e!=null&&(this.media.preservesPitch=e),this.media.playbackRate=t}getMediaElement(){return this.media}setSinkId(t){return this.media.setSinkId(t)}}class D extends T{constructor(t,e){super(),this.timeouts=[],this.isScrollable=!1,this.audioData=null,this.resizeObserver=null,this.lastContainerWidth=0,this.isDragging=!1,this.subscriptions=[],this.unsubscribeOnScroll=[],this.subscriptions=[],this.options=t;const i=this.parentFromOptionsContainer(t.container);this.parent=i;const[s,n]=this.initHtml();i.appendChild(s),this.container=s,this.scrollContainer=n.querySelector(".scroll"),this.wrapper=n.querySelector(".wrapper"),this.canvasWrapper=n.querySelector(".canvases"),this.progressWrapper=n.querySelector(".progress"),this.cursor=n.querySelector(".cursor"),e&&n.appendChild(e),this.initEvents()}parentFromOptionsContainer(t){let e;if(typeof t=="string"?e=document.querySelector(t):t instanceof HTMLElement&&(e=t),!e)throw new Error("Container not found");return e}initEvents(){const t=e=>{const i=this.wrapper.getBoundingClientRect(),s=e.clientX-i.left,n=e.clientY-i.top;return[s/i.width,n/i.height]};if(this.wrapper.addEventListener("click",e=>{const[i,s]=t(e);this.emit("click",i,s)}),this.wrapper.addEventListener("dblclick",e=>{const[i,s]=t(e);this.emit("dblclick",i,s)}),this.options.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.scrollContainer.addEventListener("scroll",()=>{const{scrollLeft:e,scrollWidth:i,clientWidth:s}=this.scrollContainer,n=e/i,r=(e+s)/i;this.emit("scroll",n,r,e,e+s)}),typeof ResizeObserver=="function"){const e=this.createDelay(100);this.resizeObserver=new ResizeObserver(()=>{e().then(()=>this.onContainerResize()).catch(()=>{})}),this.resizeObserver.observe(this.scrollContainer)}}onContainerResize(){const t=this.parent.clientWidth;t===this.lastContainerWidth&&this.options.height!=="auto"||(this.lastContainerWidth=t,this.reRender())}initDrag(){this.subscriptions.push(function(t,e,i,s,n=3,r=0,h=100){if(!t)return()=>{};const l=matchMedia("(pointer: coarse)").matches;let a=()=>{};const o=c=>{if(c.button!==r)return;c.preventDefault(),c.stopPropagation();let d=c.clientX,u=c.clientY,m=!1;const w=Date.now(),f=g=>{if(g.preventDefault(),g.stopPropagation(),l&&Date.now()-w<h)return;const S=g.clientX,P=g.clientY,M=S-d,x=P-u;if(m||Math.abs(M)>n||Math.abs(x)>n){const k=t.getBoundingClientRect(),{left:O,top:A}=k;m||(i==null||i(d-O,u-A),m=!0),e(M,x,S-O,P-A),d=S,u=P}},v=g=>{if(m){const S=g.clientX,P=g.clientY,M=t.getBoundingClientRect(),{left:x,top:k}=M;s==null||s(S-x,P-k)}a()},b=g=>{g.relatedTarget&&g.relatedTarget!==document.documentElement||v(g)},E=g=>{m&&(g.stopPropagation(),g.preventDefault())},C=g=>{m&&g.preventDefault()};document.addEventListener("pointermove",f),document.addEventListener("pointerup",v),document.addEventListener("pointerout",b),document.addEventListener("pointercancel",b),document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("click",E,{capture:!0}),a=()=>{document.removeEventListener("pointermove",f),document.removeEventListener("pointerup",v),document.removeEventListener("pointerout",b),document.removeEventListener("pointercancel",b),document.removeEventListener("touchmove",C),setTimeout(()=>{document.removeEventListener("click",E,{capture:!0})},10)}};return t.addEventListener("pointerdown",o),()=>{a(),t.removeEventListener("pointerdown",o)}}(this.wrapper,(t,e,i)=>{this.emit("drag",Math.max(0,Math.min(1,i/this.wrapper.getBoundingClientRect().width)))},t=>{this.isDragging=!0,this.emit("dragstart",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))},t=>{this.isDragging=!1,this.emit("dragend",Math.max(0,Math.min(1,t/this.wrapper.getBoundingClientRect().width)))}))}getHeight(t,e){var i;const s=((i=this.audioData)===null||i===void 0?void 0:i.numberOfChannels)||1;if(t==null)return 128;if(!isNaN(Number(t)))return Number(t);if(t==="auto"){const n=this.parent.clientHeight||128;return e!=null&&e.every(r=>!r.overlay)?n/s:n}return 128}initHtml(){const t=document.createElement("div"),e=t.attachShadow({mode:"open"}),i=this.options.cspNonce&&typeof this.options.cspNonce=="string"?this.options.cspNonce.replace(/"/g,""):"";return e.innerHTML=`
      <style${i?` nonce="${i}"`:""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height,this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `,[t,e]}setOptions(t){if(this.options.container!==t.container){const e=this.parentFromOptionsContainer(t.container);e.appendChild(this.container),this.parent=e}t.dragToSeek!==!0&&typeof this.options.dragToSeek!="object"||this.initDrag(),this.options=t,this.reRender()}getWrapper(){return this.wrapper}getWidth(){return this.scrollContainer.clientWidth}getScroll(){return this.scrollContainer.scrollLeft}setScroll(t){this.scrollContainer.scrollLeft=t}setScrollPercentage(t){const{scrollWidth:e}=this.scrollContainer,i=e*t;this.setScroll(i)}destroy(){var t,e;this.subscriptions.forEach(i=>i()),this.container.remove(),(t=this.resizeObserver)===null||t===void 0||t.disconnect(),(e=this.unsubscribeOnScroll)===null||e===void 0||e.forEach(i=>i()),this.unsubscribeOnScroll=[]}createDelay(t=10){let e,i;const s=()=>{e&&clearTimeout(e),i&&i()};return this.timeouts.push(s),()=>new Promise((n,r)=>{s(),i=r,e=setTimeout(()=>{e=void 0,i=void 0,n()},t)})}convertColorValues(t){if(!Array.isArray(t))return t||"";if(t.length<2)return t[0]||"";const e=document.createElement("canvas"),i=e.getContext("2d"),s=e.height*(window.devicePixelRatio||1),n=i.createLinearGradient(0,0,0,s),r=1/(t.length-1);return t.forEach((h,l)=>{const a=l*r;n.addColorStop(a,h)}),n}getPixelRatio(){return Math.max(1,window.devicePixelRatio||1)}renderBarWaveform(t,e,i,s){const n=t[0],r=t[1]||t[0],h=n.length,{width:l,height:a}=i.canvas,o=a/2,c=this.getPixelRatio(),d=e.barWidth?e.barWidth*c:1,u=e.barGap?e.barGap*c:e.barWidth?d/2:0,m=e.barRadius||0,w=l/(d+u)/h,f=m&&"roundRect"in i?"roundRect":"rect";i.beginPath();let v=0,b=0,E=0;for(let C=0;C<=h;C++){const g=Math.round(C*w);if(g>v){const M=Math.round(b*o*s),x=M+Math.round(E*o*s)||1;let k=o-M;e.barAlign==="top"?k=0:e.barAlign==="bottom"&&(k=a-x),i[f](v*(d+u),k,d,x,m),v=g,b=0,E=0}const S=Math.abs(n[C]||0),P=Math.abs(r[C]||0);S>b&&(b=S),P>E&&(E=P)}i.fill(),i.closePath()}renderLineWaveform(t,e,i,s){const n=r=>{const h=t[r]||t[0],l=h.length,{height:a}=i.canvas,o=a/2,c=i.canvas.width/l;i.moveTo(0,o);let d=0,u=0;for(let m=0;m<=l;m++){const w=Math.round(m*c);if(w>d){const v=o+(Math.round(u*o*s)||1)*(r===0?-1:1);i.lineTo(d,v),d=w,u=0}const f=Math.abs(h[m]||0);f>u&&(u=f)}i.lineTo(d,o)};i.beginPath(),n(0),n(1),i.fill(),i.closePath()}renderWaveform(t,e,i){if(i.fillStyle=this.convertColorValues(e.waveColor),e.renderFunction)return void e.renderFunction(t,i);let s=e.barHeight||1;if(e.normalize){const n=Array.from(t[0]).reduce((r,h)=>Math.max(r,Math.abs(h)),0);s=n?1/n:1}e.barWidth||e.barGap||e.barAlign?this.renderBarWaveform(t,e,i,s):this.renderLineWaveform(t,e,i,s)}renderSingleCanvas(t,e,i,s,n,r,h){const l=this.getPixelRatio(),a=document.createElement("canvas");a.width=Math.round(i*l),a.height=Math.round(s*l),a.style.width=`${i}px`,a.style.height=`${s}px`,a.style.left=`${Math.round(n)}px`,r.appendChild(a);const o=a.getContext("2d");if(this.renderWaveform(t,e,o),a.width>0&&a.height>0){const c=a.cloneNode(),d=c.getContext("2d");d.drawImage(a,0,0),d.globalCompositeOperation="source-in",d.fillStyle=this.convertColorValues(e.progressColor),d.fillRect(0,0,a.width,a.height),h.appendChild(c)}}renderMultiCanvas(t,e,i,s,n,r){const h=this.getPixelRatio(),{clientWidth:l}=this.scrollContainer,a=i/h;let o=Math.min(D.MAX_CANVAS_WIDTH,l,a),c={};if(o===0)return;if(e.barWidth||e.barGap){const f=e.barWidth||.5,v=f+(e.barGap||f/2);o%v!=0&&(o=Math.floor(o/v)*v)}const d=f=>{if(f<0||f>=u||c[f])return;c[f]=!0;const v=f*o,b=Math.min(a-v,o);if(b<=0)return;const E=t.map(C=>{const g=Math.floor(v/a*C.length),S=Math.floor((v+b)/a*C.length);return C.slice(g,S)});this.renderSingleCanvas(E,e,b,s,v,n,r)},u=Math.ceil(a/o);if(!this.isScrollable){for(let f=0;f<u;f++)d(f);return}const m=this.scrollContainer.scrollLeft/a,w=Math.floor(m*u);if(d(w-1),d(w),d(w+1),u>1){const f=this.on("scroll",()=>{const{scrollLeft:v}=this.scrollContainer,b=Math.floor(v/a*u);Object.keys(c).length>D.MAX_NODES&&(n.innerHTML="",r.innerHTML="",c={}),d(b-1),d(b),d(b+1)});this.unsubscribeOnScroll.push(f)}}renderChannel(t,e,i,s){var{overlay:n}=e,r=function(o,c){var d={};for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&c.indexOf(u)<0&&(d[u]=o[u]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var m=0;for(u=Object.getOwnPropertySymbols(o);m<u.length;m++)c.indexOf(u[m])<0&&Object.prototype.propertyIsEnumerable.call(o,u[m])&&(d[u[m]]=o[u[m]])}return d}(e,["overlay"]);const h=document.createElement("div"),l=this.getHeight(r.height,r.splitChannels);h.style.height=`${l}px`,n&&s>0&&(h.style.marginTop=`-${l}px`),this.canvasWrapper.style.minHeight=`${l}px`,this.canvasWrapper.appendChild(h);const a=h.cloneNode();this.progressWrapper.appendChild(a),this.renderMultiCanvas(t,r,i,l,h,a)}render(t){return y(this,void 0,void 0,function*(){var e;this.timeouts.forEach(l=>l()),this.timeouts=[],this.canvasWrapper.innerHTML="",this.progressWrapper.innerHTML="",this.options.width!=null&&(this.scrollContainer.style.width=typeof this.options.width=="number"?`${this.options.width}px`:this.options.width);const i=this.getPixelRatio(),s=this.scrollContainer.clientWidth,n=Math.ceil(t.duration*(this.options.minPxPerSec||0));this.isScrollable=n>s;const r=this.options.fillParent&&!this.isScrollable,h=(r?s:n)*i;if(this.wrapper.style.width=r?"100%":`${n}px`,this.scrollContainer.style.overflowX=this.isScrollable?"auto":"hidden",this.scrollContainer.classList.toggle("noScrollbar",!!this.options.hideScrollbar),this.cursor.style.backgroundColor=`${this.options.cursorColor||this.options.progressColor}`,this.cursor.style.width=`${this.options.cursorWidth}px`,this.audioData=t,this.emit("render"),this.options.splitChannels)for(let l=0;l<t.numberOfChannels;l++){const a=Object.assign(Object.assign({},this.options),(e=this.options.splitChannels)===null||e===void 0?void 0:e[l]);this.renderChannel([t.getChannelData(l)],a,h,l)}else{const l=[t.getChannelData(0)];t.numberOfChannels>1&&l.push(t.getChannelData(1)),this.renderChannel(l,this.options,h,0)}Promise.resolve().then(()=>this.emit("rendered"))})}reRender(){if(this.unsubscribeOnScroll.forEach(i=>i()),this.unsubscribeOnScroll=[],!this.audioData)return;const{scrollWidth:t}=this.scrollContainer,{right:e}=this.progressWrapper.getBoundingClientRect();if(this.render(this.audioData),this.isScrollable&&t!==this.scrollContainer.scrollWidth){const{right:i}=this.progressWrapper.getBoundingClientRect();let s=i-e;s*=2,s=s<0?Math.floor(s):Math.ceil(s),s/=2,this.scrollContainer.scrollLeft+=s}}zoom(t){this.options.minPxPerSec=t,this.reRender()}scrollIntoView(t,e=!1){const{scrollLeft:i,scrollWidth:s,clientWidth:n}=this.scrollContainer,r=t*s,h=i,l=i+n,a=n/2;if(this.isDragging)r+30>l?this.scrollContainer.scrollLeft+=30:r-30<h&&(this.scrollContainer.scrollLeft-=30);else{(r<h||r>l)&&(this.scrollContainer.scrollLeft=r-(this.options.autoCenter?a:0));const o=r-i-a;e&&this.options.autoCenter&&o>0&&(this.scrollContainer.scrollLeft+=Math.min(o,10))}{const o=this.scrollContainer.scrollLeft,c=o/s,d=(o+n)/s;this.emit("scroll",c,d,o,o+n)}}renderProgress(t,e){if(isNaN(t))return;const i=100*t;this.canvasWrapper.style.clipPath=`polygon(${i}% 0, 100% 0, 100% 100%, ${i}% 100%)`,this.progressWrapper.style.width=`${i}%`,this.cursor.style.left=`${i}%`,this.cursor.style.transform=`translateX(-${Math.round(i)===100?this.options.cursorWidth:0}px)`,this.isScrollable&&this.options.autoScroll&&this.scrollIntoView(t,e)}exportImage(t,e,i){return y(this,void 0,void 0,function*(){const s=this.canvasWrapper.querySelectorAll("canvas");if(!s.length)throw new Error("No waveform data");if(i==="dataURL"){const n=Array.from(s).map(r=>r.toDataURL(t,e));return Promise.resolve(n)}return Promise.all(Array.from(s).map(n=>new Promise((r,h)=>{n.toBlob(l=>{l?r(l):h(new Error("Could not export image"))},t,e)})))})}}D.MAX_CANVAS_WIDTH=8e3,D.MAX_NODES=10;class z extends T{constructor(){super(...arguments),this.unsubscribe=()=>{}}start(){this.unsubscribe=this.on("tick",()=>{requestAnimationFrame(()=>{this.emit("tick")})}),this.emit("tick")}stop(){this.unsubscribe()}destroy(){this.unsubscribe()}}class W extends T{constructor(t=new AudioContext){super(),this.bufferNode=null,this.playStartTime=0,this.playedDuration=0,this._muted=!1,this._playbackRate=1,this._duration=void 0,this.buffer=null,this.currentSrc="",this.paused=!0,this.crossOrigin=null,this.seeking=!1,this.autoplay=!1,this.addEventListener=this.on,this.removeEventListener=this.un,this.audioContext=t,this.gainNode=this.audioContext.createGain(),this.gainNode.connect(this.audioContext.destination)}load(){return y(this,void 0,void 0,function*(){})}get src(){return this.currentSrc}set src(t){if(this.currentSrc=t,this._duration=void 0,!t)return this.buffer=null,void this.emit("emptied");fetch(t).then(e=>{if(e.status>=400)throw new Error(`Failed to fetch ${t}: ${e.status} (${e.statusText})`);return e.arrayBuffer()}).then(e=>this.currentSrc!==t?null:this.audioContext.decodeAudioData(e)).then(e=>{this.currentSrc===t&&(this.buffer=e,this.emit("loadedmetadata"),this.emit("canplay"),this.autoplay&&this.play())})}_play(){var t;if(!this.paused)return;this.paused=!1,(t=this.bufferNode)===null||t===void 0||t.disconnect(),this.bufferNode=this.audioContext.createBufferSource(),this.buffer&&(this.bufferNode.buffer=this.buffer),this.bufferNode.playbackRate.value=this._playbackRate,this.bufferNode.connect(this.gainNode);let e=this.playedDuration*this._playbackRate;(e>=this.duration||e<0)&&(e=0,this.playedDuration=0),this.bufferNode.start(this.audioContext.currentTime,e),this.playStartTime=this.audioContext.currentTime,this.bufferNode.onended=()=>{this.currentTime>=this.duration&&(this.pause(),this.emit("ended"))}}_pause(){var t;this.paused=!0,(t=this.bufferNode)===null||t===void 0||t.stop(),this.playedDuration+=this.audioContext.currentTime-this.playStartTime}play(){return y(this,void 0,void 0,function*(){this.paused&&(this._play(),this.emit("play"))})}pause(){this.paused||(this._pause(),this.emit("pause"))}stopAt(t){var e,i;const s=t-this.currentTime;(e=this.bufferNode)===null||e===void 0||e.stop(this.audioContext.currentTime+s),(i=this.bufferNode)===null||i===void 0||i.addEventListener("ended",()=>{this.bufferNode=null,this.pause()},{once:!0})}setSinkId(t){return y(this,void 0,void 0,function*(){return this.audioContext.setSinkId(t)})}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this.bufferNode&&(this.bufferNode.playbackRate.value=t)}get currentTime(){return(this.paused?this.playedDuration:this.playedDuration+(this.audioContext.currentTime-this.playStartTime))*this._playbackRate}set currentTime(t){const e=!this.paused;e&&this._pause(),this.playedDuration=t/this._playbackRate,e&&this._play(),this.emit("seeking"),this.emit("timeupdate")}get duration(){var t,e;return(t=this._duration)!==null&&t!==void 0?t:((e=this.buffer)===null||e===void 0?void 0:e.duration)||0}set duration(t){this._duration=t}get volume(){return this.gainNode.gain.value}set volume(t){this.gainNode.gain.value=t,this.emit("volumechange")}get muted(){return this._muted}set muted(t){this._muted!==t&&(this._muted=t,this._muted?this.gainNode.disconnect():this.gainNode.connect(this.audioContext.destination))}canPlayType(t){return/^(audio|video)\//.test(t)}getGainNode(){return this.gainNode}getChannelData(){const t=[];if(!this.buffer)return t;const e=this.buffer.numberOfChannels;for(let i=0;i<e;i++)t.push(this.buffer.getChannelData(i));return t}}const H={waveColor:"#999",progressColor:"#555",cursorWidth:1,minPxPerSec:0,fillParent:!0,interact:!0,dragToSeek:!1,autoScroll:!0,autoCenter:!0,sampleRate:8e3};class L extends j{static create(t){return new L(t)}constructor(t){const e=t.media||(t.backend==="WebAudio"?new W:void 0);super({media:e,mediaControls:t.mediaControls,autoplay:t.autoplay,playbackRate:t.audioRate}),this.plugins=[],this.decodedData=null,this.stopAtPosition=null,this.subscriptions=[],this.mediaSubscriptions=[],this.abortController=null,this.options=Object.assign({},H,t),this.timer=new z;const i=e?void 0:this.getMediaElement();this.renderer=new D(this.options,i),this.initPlayerEvents(),this.initRendererEvents(),this.initTimerEvents(),this.initPlugins();const s=this.options.url||this.getSrc()||"";Promise.resolve().then(()=>{this.emit("init");const{peaks:n,duration:r}=this.options;(s||n&&r)&&this.load(s,n,r).catch(()=>null)})}updateProgress(t=this.getCurrentTime()){return this.renderer.renderProgress(t/this.getDuration(),this.isPlaying()),t}initTimerEvents(){this.subscriptions.push(this.timer.on("tick",()=>{if(!this.isSeeking()){const t=this.updateProgress();this.emit("timeupdate",t),this.emit("audioprocess",t),this.stopAtPosition!=null&&this.isPlaying()&&t>=this.stopAtPosition&&this.pause()}}))}initPlayerEvents(){this.isPlaying()&&(this.emit("play"),this.timer.start()),this.mediaSubscriptions.push(this.onMediaEvent("timeupdate",()=>{const t=this.updateProgress();this.emit("timeupdate",t)}),this.onMediaEvent("play",()=>{this.emit("play"),this.timer.start()}),this.onMediaEvent("pause",()=>{this.emit("pause"),this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("emptied",()=>{this.timer.stop(),this.stopAtPosition=null}),this.onMediaEvent("ended",()=>{this.emit("timeupdate",this.getDuration()),this.emit("finish"),this.stopAtPosition=null}),this.onMediaEvent("seeking",()=>{this.emit("seeking",this.getCurrentTime())}),this.onMediaEvent("error",()=>{var t;this.emit("error",(t=this.getMediaElement().error)!==null&&t!==void 0?t:new Error("Media error")),this.stopAtPosition=null}))}initRendererEvents(){this.subscriptions.push(this.renderer.on("click",(t,e)=>{this.options.interact&&(this.seekTo(t),this.emit("interaction",t*this.getDuration()),this.emit("click",t,e))}),this.renderer.on("dblclick",(t,e)=>{this.emit("dblclick",t,e)}),this.renderer.on("scroll",(t,e,i,s)=>{const n=this.getDuration();this.emit("scroll",t*n,e*n,i,s)}),this.renderer.on("render",()=>{this.emit("redraw")}),this.renderer.on("rendered",()=>{this.emit("redrawcomplete")}),this.renderer.on("dragstart",t=>{this.emit("dragstart",t)}),this.renderer.on("dragend",t=>{this.emit("dragend",t)}));{let t;this.subscriptions.push(this.renderer.on("drag",e=>{if(!this.options.interact)return;let i;this.renderer.renderProgress(e),clearTimeout(t),this.isPlaying()?i=0:this.options.dragToSeek===!0?i=200:typeof this.options.dragToSeek=="object"&&this.options.dragToSeek!==void 0&&(i=this.options.dragToSeek.debounceTime),t=setTimeout(()=>{this.seekTo(e)},i),this.emit("interaction",e*this.getDuration()),this.emit("drag",e)}))}}initPlugins(){var t;!((t=this.options.plugins)===null||t===void 0)&&t.length&&this.options.plugins.forEach(e=>{this.registerPlugin(e)})}unsubscribePlayerEvents(){this.mediaSubscriptions.forEach(t=>t()),this.mediaSubscriptions=[]}setOptions(t){this.options=Object.assign({},this.options,t),t.duration&&!t.peaks&&(this.decodedData=R.createBuffer(this.exportPeaks(),t.duration)),t.peaks&&t.duration&&(this.decodedData=R.createBuffer(t.peaks,t.duration)),this.renderer.setOptions(this.options),t.audioRate&&this.setPlaybackRate(t.audioRate),t.mediaControls!=null&&(this.getMediaElement().controls=t.mediaControls)}registerPlugin(t){return t._init(this),this.plugins.push(t),this.subscriptions.push(t.once("destroy",()=>{this.plugins=this.plugins.filter(e=>e!==t)})),t}getWrapper(){return this.renderer.getWrapper()}getWidth(){return this.renderer.getWidth()}getScroll(){return this.renderer.getScroll()}setScroll(t){return this.renderer.setScroll(t)}setScrollTime(t){const e=t/this.getDuration();this.renderer.setScrollPercentage(e)}getActivePlugins(){return this.plugins}loadAudio(t,e,i,s){return y(this,void 0,void 0,function*(){var n;if(this.emit("load",t),!this.options.media&&this.isPlaying()&&this.pause(),this.decodedData=null,this.stopAtPosition=null,!e&&!i){const h=this.options.fetchParams||{};window.AbortController&&!h.signal&&(this.abortController=new AbortController,h.signal=(n=this.abortController)===null||n===void 0?void 0:n.signal);const l=o=>this.emit("loading",o);e=yield $.fetchBlob(t,l,h);const a=this.options.blobMimeType;a&&(e=new Blob([e],{type:a}))}this.setSrc(t,e);const r=yield new Promise(h=>{const l=s||this.getDuration();l?h(l):this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata",()=>h(this.getDuration()),{once:!0}))});if(!t&&!e){const h=this.getMediaElement();h instanceof W&&(h.duration=r)}if(i)this.decodedData=R.createBuffer(i,r||0);else if(e){const h=yield e.arrayBuffer();this.decodedData=yield R.decode(h,this.options.sampleRate)}this.decodedData&&(this.emit("decode",this.getDuration()),this.renderer.render(this.decodedData)),this.emit("ready",this.getDuration())})}load(t,e,i){return y(this,void 0,void 0,function*(){try{return yield this.loadAudio(t,void 0,e,i)}catch(s){throw this.emit("error",s),s}})}loadBlob(t,e,i){return y(this,void 0,void 0,function*(){try{return yield this.loadAudio("",t,e,i)}catch(s){throw this.emit("error",s),s}})}zoom(t){if(!this.decodedData)throw new Error("No audio loaded");this.renderer.zoom(t),this.emit("zoom",t)}getDecodedData(){return this.decodedData}exportPeaks({channels:t=2,maxLength:e=8e3,precision:i=1e4}={}){if(!this.decodedData)throw new Error("The audio has not been decoded yet");const s=Math.min(t,this.decodedData.numberOfChannels),n=[];for(let r=0;r<s;r++){const h=this.decodedData.getChannelData(r),l=[],a=h.length/e;for(let o=0;o<e;o++){const c=h.slice(Math.floor(o*a),Math.ceil((o+1)*a));let d=0;for(let u=0;u<c.length;u++){const m=c[u];Math.abs(m)>Math.abs(d)&&(d=m)}l.push(Math.round(d*i)/i)}n.push(l)}return n}getDuration(){let t=super.getDuration()||0;return t!==0&&t!==1/0||!this.decodedData||(t=this.decodedData.duration),t}toggleInteraction(t){this.options.interact=t}setTime(t){this.stopAtPosition=null,super.setTime(t),this.updateProgress(t),this.emit("timeupdate",t)}seekTo(t){const e=this.getDuration()*t;this.setTime(e)}play(t,e){const i=Object.create(null,{play:{get:()=>super.play}});return y(this,void 0,void 0,function*(){return t!=null&&this.setTime(t),e!=null&&(this.media instanceof W?this.media.stopAt(e):this.stopAtPosition=e),i.play.call(this)})}playPause(){return y(this,void 0,void 0,function*(){return this.isPlaying()?this.pause():this.play()})}stop(){this.pause(),this.setTime(0)}skip(t){this.setTime(this.getCurrentTime()+t)}empty(){this.load("",[[0]],.001)}setMediaElement(t){this.unsubscribePlayerEvents(),super.setMediaElement(t),this.initPlayerEvents()}exportImage(){return y(this,arguments,void 0,function*(t="image/png",e=1,i="dataURL"){return this.renderer.exportImage(t,e,i)})}destroy(){var t;this.emit("destroy"),(t=this.abortController)===null||t===void 0||t.abort(),this.plugins.forEach(e=>e.destroy()),this.subscriptions.forEach(e=>e()),this.unsubscribePlayerEvents(),this.timer.destroy(),this.renderer.destroy(),super.destroy()}}L.BasePlugin=class extends T{constructor(p){super(),this.subscriptions=[],this.options=p}onInit(){}_init(p){this.wavesurfer=p,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach(p=>p())}},L.dom=B;export{L as u};
