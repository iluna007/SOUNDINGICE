import{g as On,r as B,j as _}from"./index-DXrfh35a.js";import{P as I}from"./index-DlbRb6dZ.js";var Te={exports:{}},et;function Dn(){return et||(et=1,function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function s(l,c,d){this.fn=l,this.context=c,this.once=d||!1}function o(l,c,d,f,b){if(typeof d!="function")throw new TypeError("The listener must be a function");var y=new s(d,f||l,b),p=n?n+c:c;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],y]:l._events[p].push(y):(l._events[p]=y,l._eventsCount++),l}function i(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],d,f;if(this._eventsCount===0)return c;for(f in d=this._events)t.call(d,f)&&c.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(d)):c},a.prototype.listeners=function(c){var d=n?n+c:c,f=this._events[d];if(!f)return[];if(f.fn)return[f.fn];for(var b=0,y=f.length,p=new Array(y);b<y;b++)p[b]=f[b].fn;return p},a.prototype.listenerCount=function(c){var d=n?n+c:c,f=this._events[d];return f?f.fn?1:f.length:0},a.prototype.emit=function(c,d,f,b,y,p){var g=n?n+c:c;if(!this._events[g])return!1;var h=this._events[g],m=arguments.length,w,E;if(h.fn){switch(h.once&&this.removeListener(c,h.fn,void 0,!0),m){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,d),!0;case 3:return h.fn.call(h.context,d,f),!0;case 4:return h.fn.call(h.context,d,f,b),!0;case 5:return h.fn.call(h.context,d,f,b,y),!0;case 6:return h.fn.call(h.context,d,f,b,y,p),!0}for(E=1,w=new Array(m-1);E<m;E++)w[E-1]=arguments[E];h.fn.apply(h.context,w)}else{var A=h.length,S;for(E=0;E<A;E++)switch(h[E].once&&this.removeListener(c,h[E].fn,void 0,!0),m){case 1:h[E].fn.call(h[E].context);break;case 2:h[E].fn.call(h[E].context,d);break;case 3:h[E].fn.call(h[E].context,d,f);break;case 4:h[E].fn.call(h[E].context,d,f,b);break;default:if(!w)for(S=1,w=new Array(m-1);S<m;S++)w[S-1]=arguments[S];h[E].fn.apply(h[E].context,w)}}return!0},a.prototype.on=function(c,d,f){return o(this,c,d,f,!1)},a.prototype.once=function(c,d,f){return o(this,c,d,f,!0)},a.prototype.removeListener=function(c,d,f,b){var y=n?n+c:c;if(!this._events[y])return this;if(!d)return i(this,y),this;var p=this._events[y];if(p.fn)p.fn===d&&(!b||p.once)&&(!f||p.context===f)&&i(this,y);else{for(var g=0,h=[],m=p.length;g<m;g++)(p[g].fn!==d||b&&!p[g].once||f&&p[g].context!==f)&&h.push(p[g]);h.length?this._events[y]=h.length===1?h[0]:h:i(this,y)}return this},a.prototype.removeAllListeners=function(c){var d;return c?(d=n?n+c:c,this._events[d]&&i(this,d)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a}(Te)),Te.exports}var xn=Dn();const vt=On(xn),It=new vt;class vn extends vt{constructor(){super(),this.data=[]}getAll(){return this.data}setData(t){this.data=t,this.emit("change")}}const le=new vn;It.on("FETCH_DATA",e=>{le.setData(e)});function Nt(e,t){return function(){return e.apply(t,arguments)}}const{toString:In}=Object.prototype,{getPrototypeOf:Ke}=Object,_e=(e=>t=>{const n=In.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),U=e=>(e=e.toLowerCase(),t=>_e(t)===e),ye=e=>t=>typeof t===e,{isArray:Y}=Array,ne=ye("undefined");function Nn(e){return e!==null&&!ne(e)&&e.constructor!==null&&!ne(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const kt=U("ArrayBuffer");function kn(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&kt(e.buffer),t}const Pn=ye("string"),P=ye("function"),Pt=ye("number"),Ee=e=>e!==null&&typeof e=="object",Ln=e=>e===!0||e===!1,ue=e=>{if(_e(e)!=="object")return!1;const t=Ke(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bn=U("Date"),Un=U("File"),Fn=U("Blob"),jn=U("FileList"),Mn=e=>Ee(e)&&P(e.pipe),$n=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||P(e.append)&&((t=_e(e))==="formdata"||t==="object"&&P(e.toString)&&e.toString()==="[object FormData]"))},Hn=U("URLSearchParams"),[qn,zn,Vn,Wn]=["ReadableStream","Request","Response","Headers"].map(U),Kn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oe(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Y(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function Lt(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const V=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bt=e=>!ne(e)&&e!==V;function Pe(){const{caseless:e}=Bt(this)&&this||{},t={},n=(r,s)=>{const o=e&&Lt(t,s)||s;ue(t[o])&&ue(r)?t[o]=Pe(t[o],r):ue(r)?t[o]=Pe({},r):Y(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&oe(arguments[r],n);return t}const Jn=(e,t,n,{allOwnKeys:r}={})=>(oe(t,(s,o)=>{n&&P(s)?e[o]=Nt(s,n):e[o]=s},{allOwnKeys:r}),e),Gn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Xn=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Yn=(e,t,n,r)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=n!==!1&&Ke(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Zn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Qn=e=>{if(!e)return null;if(Y(e))return e;let t=e.length;if(!Pt(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},er=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ke(Uint8Array)),tr=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},nr=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rr=U("HTMLFormElement"),sr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),tt=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),or=U("RegExp"),Ut=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};oe(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},ir=e=>{Ut(e,(t,n)=>{if(P(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(P(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ar=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return Y(e)?r(e):r(String(e).split(t)),n},cr=()=>{},lr=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Ae="abcdefghijklmnopqrstuvwxyz",nt="0123456789",Ft={DIGIT:nt,ALPHA:Ae,ALPHA_DIGIT:Ae+Ae.toUpperCase()+nt},ur=(e=16,t=Ft.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function dr(e){return!!(e&&P(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const fr=e=>{const t=new Array(10),n=(r,s)=>{if(Ee(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=Y(r)?[]:{};return oe(r,(i,a)=>{const l=n(i,s+1);!ne(l)&&(o[a]=l)}),t[s]=void 0,o}}return r};return n(e,0)},hr=U("AsyncFunction"),pr=e=>e&&(Ee(e)||P(e))&&P(e.then)&&P(e.catch),jt=((e,t)=>e?setImmediate:t?((n,r)=>(V.addEventListener("message",({source:s,data:o})=>{s===V&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),V.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",P(V.postMessage)),mr=typeof queueMicrotask<"u"?queueMicrotask.bind(V):typeof process<"u"&&process.nextTick||jt,u={isArray:Y,isArrayBuffer:kt,isBuffer:Nn,isFormData:$n,isArrayBufferView:kn,isString:Pn,isNumber:Pt,isBoolean:Ln,isObject:Ee,isPlainObject:ue,isReadableStream:qn,isRequest:zn,isResponse:Vn,isHeaders:Wn,isUndefined:ne,isDate:Bn,isFile:Un,isBlob:Fn,isRegExp:or,isFunction:P,isStream:Mn,isURLSearchParams:Hn,isTypedArray:er,isFileList:jn,forEach:oe,merge:Pe,extend:Jn,trim:Kn,stripBOM:Gn,inherits:Xn,toFlatObject:Yn,kindOf:_e,kindOfTest:U,endsWith:Zn,toArray:Qn,forEachEntry:tr,matchAll:nr,isHTMLForm:rr,hasOwnProperty:tt,hasOwnProp:tt,reduceDescriptors:Ut,freezeMethods:ir,toObjectSet:ar,toCamelCase:sr,noop:cr,toFiniteNumber:lr,findKey:Lt,global:V,isContextDefined:Bt,ALPHABET:Ft,generateString:ur,isSpecCompliantForm:dr,toJSONObject:fr,isAsyncFn:hr,isThenable:pr,setImmediate:jt,asap:mr};function R(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}u.inherits(R,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.status}}});const Mt=R.prototype,$t={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$t[e]={value:e}});Object.defineProperties(R,$t);Object.defineProperty(Mt,"isAxiosError",{value:!0});R.from=(e,t,n,r,s,o)=>{const i=Object.create(Mt);return u.toFlatObject(e,i,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),R.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const gr=null;function Le(e){return u.isPlainObject(e)||u.isArray(e)}function Ht(e){return u.endsWith(e,"[]")?e.slice(0,-2):e}function rt(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ht(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function br(e){return u.isArray(e)&&!e.some(Le)}const _r=u.toFlatObject(u,{},null,function(t){return/^is[A-Z]/.test(t)});function we(e,t,n){if(!u.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,h){return!u.isUndefined(h[g])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(t);if(!u.isFunction(s))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(u.isDate(p))return p.toISOString();if(!l&&u.isBlob(p))throw new R("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(p)||u.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,g,h){let m=p;if(p&&!h&&typeof p=="object"){if(u.endsWith(g,"{}"))g=r?g:g.slice(0,-2),p=JSON.stringify(p);else if(u.isArray(p)&&br(p)||(u.isFileList(p)||u.endsWith(g,"[]"))&&(m=u.toArray(p)))return g=Ht(g),m.forEach(function(E,A){!(u.isUndefined(E)||E===null)&&t.append(i===!0?rt([g],A,o):i===null?g:g+"[]",c(E))}),!1}return Le(p)?!0:(t.append(rt(h,g,o),c(p)),!1)}const f=[],b=Object.assign(_r,{defaultVisitor:d,convertValue:c,isVisitable:Le});function y(p,g){if(!u.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));f.push(p),u.forEach(p,function(m,w){(!(u.isUndefined(m)||m===null)&&s.call(t,m,u.isString(w)?w.trim():w,g,b))===!0&&y(m,g?g.concat(w):[w])}),f.pop()}}if(!u.isObject(e))throw new TypeError("data must be an object");return y(e),t}function st(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Je(e,t){this._pairs=[],e&&we(e,this,t)}const qt=Je.prototype;qt.append=function(t,n){this._pairs.push([t,n])};qt.toString=function(t){const n=t?function(r){return t.call(this,r,st)}:st;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function yr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function zt(e,t,n){if(!t)return e;const r=n&&n.encode||yr;u.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=u.isURLSearchParams(t)?t.toString():new Je(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ot{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){u.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Vt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Er=typeof URLSearchParams<"u"?URLSearchParams:Je,wr=typeof FormData<"u"?FormData:null,Rr=typeof Blob<"u"?Blob:null,Sr={isBrowser:!0,classes:{URLSearchParams:Er,FormData:wr,Blob:Rr},protocols:["http","https","file","blob","url","data"]},Ge=typeof window<"u"&&typeof document<"u",Be=typeof navigator=="object"&&navigator||void 0,Tr=Ge&&(!Be||["ReactNative","NativeScript","NS"].indexOf(Be.product)<0),Ar=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Cr=Ge&&window.location.href||"http://localhost",Or=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ge,hasStandardBrowserEnv:Tr,hasStandardBrowserWebWorkerEnv:Ar,navigator:Be,origin:Cr},Symbol.toStringTag,{value:"Module"})),x={...Or,...Sr};function Dr(e,t){return we(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function xr(e){return u.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function vr(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Wt(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),l=o>=n.length;return i=!i&&u.isArray(s)?s.length:i,l?(u.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!a):((!s[i]||!u.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&u.isArray(s[i])&&(s[i]=vr(s[i])),!a)}if(u.isFormData(e)&&u.isFunction(e.entries)){const n={};return u.forEachEntry(e,(r,s)=>{t(xr(r),s,n,0)}),n}return null}function Ir(e,t,n){if(u.isString(e))try{return(t||JSON.parse)(e),u.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ie={transitional:Vt,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=u.isObject(t);if(o&&u.isHTMLForm(t)&&(t=new FormData(t)),u.isFormData(t))return s?JSON.stringify(Wt(t)):t;if(u.isArrayBuffer(t)||u.isBuffer(t)||u.isStream(t)||u.isFile(t)||u.isBlob(t)||u.isReadableStream(t))return t;if(u.isArrayBufferView(t))return t.buffer;if(u.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dr(t,this.formSerializer).toString();if((a=u.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return we(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Ir(t)):t}],transformResponse:[function(t){const n=this.transitional||ie.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(u.isResponse(t)||u.isReadableStream(t))return t;if(t&&u.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?R.from(a,R.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],e=>{ie.headers[e]={}});const Nr=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kr=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Nr[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},it=Symbol("internals");function ee(e){return e&&String(e).trim().toLowerCase()}function de(e){return e===!1||e==null?e:u.isArray(e)?e.map(de):String(e)}function Pr(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Lr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ce(e,t,n,r,s){if(u.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!u.isString(t)){if(u.isString(r))return t.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(t)}}function Br(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ur(e,t){const n=u.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let N=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(a,l,c){const d=ee(l);if(!d)throw new Error("header name must be a non-empty string");const f=u.findKey(s,d);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=de(a))}const i=(a,l)=>u.forEach(a,(c,d)=>o(c,d,l));if(u.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(u.isString(t)&&(t=t.trim())&&!Lr(t))i(kr(t),n);else if(u.isHeaders(t))for(const[a,l]of t.entries())o(l,a,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=ee(t),t){const r=u.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Pr(s);if(u.isFunction(n))return n.call(this,s,r);if(u.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ee(t),t){const r=u.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ce(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=ee(i),i){const a=u.findKey(r,i);a&&(!n||Ce(r,r[a],a,n))&&(delete r[a],s=!0)}}return u.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Ce(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return u.forEach(this,(s,o)=>{const i=u.findKey(r,o);if(i){n[i]=de(s),delete n[o];return}const a=t?Br(o):String(o).trim();a!==o&&delete n[o],n[a]=de(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return u.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[it]=this[it]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=ee(i);r[a]||(Ur(s,i),r[a]=!0)}return u.isArray(t)?t.forEach(o):o(t),this}};N.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(N.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});u.freezeMethods(N);function Oe(e,t){const n=this||ie,r=t||n,s=N.from(r.headers);let o=r.data;return u.forEach(e,function(a){o=a.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Kt(e){return!!(e&&e.__CANCEL__)}function Z(e,t,n){R.call(this,e??"canceled",R.ERR_CANCELED,t,n),this.name="CanceledError"}u.inherits(Z,R,{__CANCEL__:!0});function Jt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new R("Request failed with status code "+n.status,[R.ERR_BAD_REQUEST,R.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Fr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jr(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=r[o];i||(i=c),n[s]=l,r[s]=c;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=d&&c-d;return y?Math.round(b*1e3/y):void 0}}function Mr(e,t){let n=0,r=1e3/t,s,o;const i=(c,d=Date.now())=>{n=d,s=null,o&&(clearTimeout(o),o=null),e.apply(null,c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?i(c,d):(s=c,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const he=(e,t,n=3)=>{let r=0;const s=jr(50,250);return Mr(o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,l=i-r,c=s(l),d=i<=a;r=i;const f={loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&d?(a-i)/c:void 0,event:o,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},at=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ct=e=>(...t)=>u.asap(()=>e(...t)),$r=x.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,x.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(x.origin),x.navigator&&/(msie|trident)/i.test(x.navigator.userAgent)):()=>!0,Hr=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];u.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),u.isString(r)&&i.push("path="+r),u.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function qr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function zr(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Gt(e,t){return e&&!qr(t)?zr(e,t):t}const lt=e=>e instanceof N?{...e}:e;function J(e,t){t=t||{};const n={};function r(c,d,f,b){return u.isPlainObject(c)&&u.isPlainObject(d)?u.merge.call({caseless:b},c,d):u.isPlainObject(d)?u.merge({},d):u.isArray(d)?d.slice():d}function s(c,d,f,b){if(u.isUndefined(d)){if(!u.isUndefined(c))return r(void 0,c,f,b)}else return r(c,d,f,b)}function o(c,d){if(!u.isUndefined(d))return r(void 0,d)}function i(c,d){if(u.isUndefined(d)){if(!u.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const l={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(c,d,f)=>s(lt(c),lt(d),f,!0)};return u.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||s,b=f(e[d],t[d],d);u.isUndefined(b)&&f!==a||(n[d]=b)}),n}const Xt=e=>{const t=J({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:a}=t;t.headers=i=N.from(i),t.url=zt(Gt(t.baseURL,t.url),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(u.isFormData(n)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((l=i.getContentType())!==!1){const[c,...d]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([c||"multipart/form-data",...d].join("; "))}}if(x.hasStandardBrowserEnv&&(r&&u.isFunction(r)&&(r=r(t)),r||r!==!1&&$r(t.url))){const c=s&&o&&Hr.read(o);c&&i.set(s,c)}return t},Vr=typeof XMLHttpRequest<"u",Wr=Vr&&function(e){return new Promise(function(n,r){const s=Xt(e);let o=s.data;const i=N.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,d,f,b,y,p;function g(){y&&y(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function m(){if(!h)return;const E=N.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),S={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:E,config:e,request:h};Jt(function(j){n(j),g()},function(j){r(j),g()},S),h=null}"onloadend"in h?h.onloadend=m:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(m)},h.onabort=function(){h&&(r(new R("Request aborted",R.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new R("Network Error",R.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let A=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const S=s.transitional||Vt;s.timeoutErrorMessage&&(A=s.timeoutErrorMessage),r(new R(A,S.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&u.forEach(i.toJSON(),function(A,S){h.setRequestHeader(S,A)}),u.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),a&&a!=="json"&&(h.responseType=s.responseType),c&&([b,p]=he(c,!0),h.addEventListener("progress",b)),l&&h.upload&&([f,y]=he(l),h.upload.addEventListener("progress",f),h.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(d=E=>{h&&(r(!E||E.type?new Z(null,e,h):E),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const w=Fr(s.url);if(w&&x.protocols.indexOf(w)===-1){r(new R("Unsupported protocol "+w+":",R.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Kr=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(c){if(!s){s=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof R?d:new Z(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{i=null,o(new R(`timeout ${t} of ms exceeded`,R.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:l}=r;return l.unsubscribe=()=>u.asap(a),l}},Jr=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Gr=async function*(e,t){for await(const n of Xr(e))yield*Jr(n,t)},Xr=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},ut=(e,t,n,r)=>{const s=Gr(e,t);let o=0,i,a=l=>{i||(i=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:d}=await s.next();if(c){a(),l.close();return}let f=d.byteLength;if(n){let b=o+=f;n(b)}l.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},Re=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Yt=Re&&typeof ReadableStream=="function",Yr=Re&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Zt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Zr=Yt&&Zt(()=>{let e=!1;const t=new Request(x.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),dt=64*1024,Ue=Yt&&Zt(()=>u.isReadableStream(new Response("").body)),pe={stream:Ue&&(e=>e.body)};Re&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!pe[t]&&(pe[t]=u.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new R(`Response type '${t}' is not supported`,R.ERR_NOT_SUPPORT,r)})})})(new Response);const Qr=async e=>{if(e==null)return 0;if(u.isBlob(e))return e.size;if(u.isSpecCompliantForm(e))return(await new Request(x.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(u.isArrayBufferView(e)||u.isArrayBuffer(e))return e.byteLength;if(u.isURLSearchParams(e)&&(e=e+""),u.isString(e))return(await Yr(e)).byteLength},es=async(e,t)=>{const n=u.toFiniteNumber(e.getContentLength());return n??Qr(t)},ts=Re&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:d,withCredentials:f="same-origin",fetchOptions:b}=Xt(e);c=c?(c+"").toLowerCase():"text";let y=Kr([s,o&&o.toAbortSignal()],i),p;const g=y&&y.unsubscribe&&(()=>{y.unsubscribe()});let h;try{if(l&&Zr&&n!=="get"&&n!=="head"&&(h=await es(d,r))!==0){let S=new Request(t,{method:"POST",body:r,duplex:"half"}),L;if(u.isFormData(r)&&(L=S.headers.get("content-type"))&&d.setContentType(L),S.body){const[j,$]=at(h,he(ct(l)));r=ut(S.body,dt,j,$)}}u.isString(f)||(f=f?"include":"omit");const m="credentials"in Request.prototype;p=new Request(t,{...b,signal:y,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:m?f:void 0});let w=await fetch(p);const E=Ue&&(c==="stream"||c==="response");if(Ue&&(a||E&&g)){const S={};["status","statusText","headers"].forEach(Qe=>{S[Qe]=w[Qe]});const L=u.toFiniteNumber(w.headers.get("content-length")),[j,$]=a&&at(L,he(ct(a),!0))||[];w=new Response(ut(w.body,dt,j,()=>{$&&$(),g&&g()}),S)}c=c||"text";let A=await pe[u.findKey(pe,c)||"text"](w,e);return!E&&g&&g(),await new Promise((S,L)=>{Jt(S,L,{data:A,headers:N.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:p})})}catch(m){throw g&&g(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new R("Network Error",R.ERR_NETWORK,e,p),{cause:m.cause||m}):R.from(m,m&&m.code,e,p)}}),Fe={http:gr,xhr:Wr,fetch:ts};u.forEach(Fe,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ft=e=>`- ${e}`,ns=e=>u.isFunction(e)||e===null||e===!1,Qt={getAdapter:e=>{e=u.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!ns(n)&&(r=Fe[(i=String(n)).toLowerCase()],r===void 0))throw new R(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(ft).join(`
`):" "+ft(o[0]):"as no adapter specified";throw new R("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Fe};function De(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Z(null,e)}function ht(e){return De(e),e.headers=N.from(e.headers),e.data=Oe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qt.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return De(e),r.data=Oe.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return Kt(r)||(De(e),r&&r.response&&(r.response.data=Oe.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const en="1.7.9",Se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pt={};Se.transitional=function(t,n,r){function s(o,i){return"[Axios v"+en+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,a)=>{if(t===!1)throw new R(s(i," has been removed"+(n?" in "+n:"")),R.ERR_DEPRECATED);return n&&!pt[i]&&(pt[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,a):!0}};Se.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function rs(e,t,n){if(typeof e!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const a=e[o],l=a===void 0||i(a,o,e);if(l!==!0)throw new R("option "+o+" must be "+l,R.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new R("Unknown option "+o,R.ERR_BAD_OPTION)}}const fe={assertOptions:rs,validators:Se},F=fe.validators;let W=class{constructor(t){this.defaults=t,this.interceptors={request:new ot,response:new ot}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=J(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&fe.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(u.isFunction(s)?n.paramsSerializer={serialize:s}:fe.assertOptions(s,{encode:F.function,serialize:F.function},!0)),fe.assertOptions(n,{baseUrl:F.spelling("baseURL"),withXsrfToken:F.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&u.merge(o.common,o[n.method]);o&&u.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=N.concat(i,o);const a=[];let l=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(l=l&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const c=[];this.interceptors.response.forEach(function(g){c.push(g.fulfilled,g.rejected)});let d,f=0,b;if(!l){const p=[ht.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,c),b=p.length,d=Promise.resolve(n);f<b;)d=d.then(p[f++],p[f++]);return d}b=a.length;let y=n;for(f=0;f<b;){const p=a[f++],g=a[f++];try{y=p(y)}catch(h){g.call(this,h);break}}try{d=ht.call(this,y)}catch(p){return Promise.reject(p)}for(f=0,b=c.length;f<b;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=J(this.defaults,t);const n=Gt(t.baseURL,t.url);return zt(n,t.params,t.paramsSerializer)}};u.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(J(r||{},{method:t,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,a){return this.request(J(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});let ss=class tn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{r.subscribe(a),o=a}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,a){r.reason||(r.reason=new Z(o,i,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new tn(function(s){t=s}),cancel:t}}};function os(e){return function(n){return e.apply(null,n)}}function is(e){return u.isObject(e)&&e.isAxiosError===!0}const je={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(je).forEach(([e,t])=>{je[t]=e});function nn(e){const t=new W(e),n=Nt(W.prototype.request,t);return u.extend(n,W.prototype,t,{allOwnKeys:!0}),u.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nn(J(e,s))},n}const C=nn(ie);C.Axios=W;C.CanceledError=Z;C.CancelToken=ss;C.isCancel=Kt;C.VERSION=en;C.toFormData=we;C.AxiosError=R;C.Cancel=C.CanceledError;C.all=function(t){return Promise.all(t)};C.spread=os;C.isAxiosError=is;C.mergeConfig=J;C.AxiosHeaders=N;C.formToJSON=e=>Wt(u.isHTMLForm(e)?new FormData(e):e);C.getAdapter=Qt.getAdapter;C.HttpStatusCode=je;C.default=C;const{Axios:Xi,AxiosError:Yi,CanceledError:Zi,isCancel:Qi,CancelToken:ea,VERSION:ta,all:na,Cancel:ra,isAxiosError:sa,spread:oa,toFormData:ia,AxiosHeaders:aa,HttpStatusCode:ca,formToJSON:la,getAdapter:ua,mergeConfig:da}=C,as=async()=>{try{const t=(await C.get("https://script.google.com/macros/s/AKfycbzhR1nak_o9kHP7tz7dibuCT4wpPJoGuovmi1-4cohj1Rp_JqpJ1UOx4rnYkSkniQCx/exec")).data.sounddata;It.emit("FETCH_DATA",t)}catch(e){console.error("Error fetching data:",e)}};var mt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},cs=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],l=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},sn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let b=(a&15)<<2|c>>6,y=c&63;l||(y=64,i||(b=64)),r.push(n[d],n[f],n[b],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):cs(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||c==null||f==null)throw new ls;const b=o<<2|a>>4;if(r.push(b),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const p=c<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ls extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const us=function(e){const t=rn(e);return sn.encodeByteArray(t,!0)},me=function(e){return us(e).replace(/\./g,"")},ds=function(e){try{return sn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=()=>fs().__FIREBASE_DEFAULTS__,ps=()=>{if(typeof process>"u"||typeof mt>"u")return;const e=mt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ms=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ds(e[1]);return t&&JSON.parse(t)},on=()=>{try{return hs()||ps()||ms()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},gs=e=>{var t,n;return(n=(t=on())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},bs=e=>{const t=gs(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},an=()=>{var e;return(e=on())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[me(JSON.stringify(n)),me(JSON.stringify(i)),""].join(".")}function Es(){try{return typeof indexedDB=="object"}catch{return!1}}function ws(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="FirebaseError";class Q extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Rs,Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?Ss(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new Q(s,a,r)}}function Ss(e,t){return e.replace(Ts,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ts=/\{\$([^}]+)}/g;function Me(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(gt(o)&&gt(i)){if(!Me(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gt(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e){return e&&e._delegate?e._delegate:e}class re{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _s;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Os(t))try{this.getOrInitializeService({instanceIdentifier:z})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=z){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=z){return this.instances.has(t)}getOptions(t=z){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cs(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=z){return this.component?this.component.multipleInstances?t:z:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cs(e){return e===z?void 0:e}function Os(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new As(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(T||(T={}));const xs={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},vs=T.INFO,Is={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},Ns=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Is[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ks{constructor(t){this.name=t,this._logLevel=vs,this._logHandler=Ns,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in T))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...t),this._logHandler(this,T.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...t),this._logHandler(this,T.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,T.INFO,...t),this._logHandler(this,T.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,T.WARN,...t),this._logHandler(this,T.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...t),this._logHandler(this,T.ERROR,...t)}}const Ps=(e,t)=>t.some(n=>e instanceof n);let bt,_t;function Ls(){return bt||(bt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bs(){return _t||(_t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ln=new WeakMap,$e=new WeakMap,un=new WeakMap,xe=new WeakMap,Ye=new WeakMap;function Us(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(H(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&ln.set(n,e)}).catch(()=>{}),Ye.set(t,e),t}function Fs(e){if($e.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});$e.set(e,t)}let He={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $e.get(e);if(t==="objectStoreNames")return e.objectStoreNames||un.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return H(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function js(e){He=e(He)}function Ms(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ve(this),t,...n);return un.set(r,t.sort?t.sort():[t]),H(r)}:Bs().includes(e)?function(...t){return e.apply(ve(this),t),H(ln.get(this))}:function(...t){return H(e.apply(ve(this),t))}}function $s(e){return typeof e=="function"?Ms(e):(e instanceof IDBTransaction&&Fs(e),Ps(e,Ls())?new Proxy(e,He):e)}function H(e){if(e instanceof IDBRequest)return Us(e);if(xe.has(e))return xe.get(e);const t=$s(e);return t!==e&&(xe.set(e,t),Ye.set(t,e)),t}const ve=e=>Ye.get(e);function Hs(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=H(i);return r&&i.addEventListener("upgradeneeded",l=>{r(H(i.result),l.oldVersion,l.newVersion,H(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const qs=["get","getKey","getAll","getAllKeys","count"],zs=["put","add","delete","clear"],Ie=new Map;function yt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ie.get(t))return Ie.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=zs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qs.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ie.set(t,o),o}js(e=>({...e,get:(t,n,r)=>yt(t,n)||e.get(t,n,r),has:(t,n)=>!!yt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ws(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ws(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qe="@firebase/app",Et="0.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=new ks("@firebase/app"),Ks="@firebase/app-compat",Js="@firebase/analytics-compat",Gs="@firebase/analytics",Xs="@firebase/app-check-compat",Ys="@firebase/app-check",Zs="@firebase/auth",Qs="@firebase/auth-compat",eo="@firebase/database",to="@firebase/data-connect",no="@firebase/database-compat",ro="@firebase/functions",so="@firebase/functions-compat",oo="@firebase/installations",io="@firebase/installations-compat",ao="@firebase/messaging",co="@firebase/messaging-compat",lo="@firebase/performance",uo="@firebase/performance-compat",fo="@firebase/remote-config",ho="@firebase/remote-config-compat",po="@firebase/storage",mo="@firebase/storage-compat",go="@firebase/firestore",bo="@firebase/vertexai",_o="@firebase/firestore-compat",yo="firebase",Eo="11.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="[DEFAULT]",wo={[qe]:"fire-core",[Ks]:"fire-core-compat",[Gs]:"fire-analytics",[Js]:"fire-analytics-compat",[Ys]:"fire-app-check",[Xs]:"fire-app-check-compat",[Zs]:"fire-auth",[Qs]:"fire-auth-compat",[eo]:"fire-rtdb",[to]:"fire-data-connect",[no]:"fire-rtdb-compat",[ro]:"fire-fn",[so]:"fire-fn-compat",[oo]:"fire-iid",[io]:"fire-iid-compat",[ao]:"fire-fcm",[co]:"fire-fcm-compat",[lo]:"fire-perf",[uo]:"fire-perf-compat",[fo]:"fire-rc",[ho]:"fire-rc-compat",[po]:"fire-gcs",[mo]:"fire-gcs-compat",[go]:"fire-fst",[_o]:"fire-fst-compat",[bo]:"fire-vertex","fire-js":"fire-js",[yo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new Map,Ro=new Map,Ve=new Map;function wt(e,t){try{e.container.addComponent(t)}catch(n){M.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function be(e){const t=e.name;if(Ve.has(t))return M.debug(`There were multiple attempts to register component ${t}.`),!1;Ve.set(t,e);for(const n of ge.values())wt(n,e);for(const n of Ro.values())wt(n,e);return!0}function So(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function To(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},q=new cn("app","Firebase",Ao);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=Eo;function dn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ze,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw q.create("bad-app-name",{appName:String(s)});if(n||(n=an()),!n)throw q.create("no-options");const o=ge.get(s);if(o){if(Me(n,o.options)&&Me(r,o.config))return o;throw q.create("duplicate-app",{appName:s})}const i=new Ds(s);for(const l of Ve.values())i.addComponent(l);const a=new Co(n,r,i);return ge.set(s,a),a}function Do(e=ze){const t=ge.get(e);if(!t&&e===ze&&an())return dn();if(!t)throw q.create("no-app",{appName:e});return t}function X(e,t,n){var r;let s=(r=wo[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),M.warn(a.join(" "));return}be(new re(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="firebase-heartbeat-database",vo=1,se="firebase-heartbeat-store";let Ne=null;function fn(){return Ne||(Ne=Hs(xo,vo,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(se)}catch(n){console.warn(n)}}}}).catch(e=>{throw q.create("idb-open",{originalErrorMessage:e.message})})),Ne}async function Io(e){try{const n=(await fn()).transaction(se),r=await n.objectStore(se).get(hn(e));return await n.done,r}catch(t){if(t instanceof Q)M.warn(t.message);else{const n=q.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});M.warn(n.message)}}}async function Rt(e,t){try{const r=(await fn()).transaction(se,"readwrite");await r.objectStore(se).put(t,hn(e)),await r.done}catch(n){if(n instanceof Q)M.warn(n.message);else{const r=q.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});M.warn(r.message)}}}function hn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=1024,ko=30;class Po{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bo(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=St();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>ko){const i=Uo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){M.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=St(),{heartbeatsToSend:r,unsentEntries:s}=Lo(this._heartbeatsCache.heartbeats),o=me(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return M.warn(n),""}}}function St(){return new Date().toISOString().substring(0,10)}function Lo(e,t=No){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Tt(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bo{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Es()?ws().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Io(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Tt(e){return me(JSON.stringify({version:2,heartbeats:e})).length}function Uo(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e){be(new re("platform-logger",t=>new Vs(t),"PRIVATE")),be(new re("heartbeat",t=>new Po(t),"PRIVATE")),X(qe,Et,e),X(qe,Et,"esm2017"),X("fire-js","")}Fo("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn="firebasestorage.googleapis.com",mn="storageBucket",jo=2*60*1e3,Mo=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends Q{constructor(t,n,r=0){super(ke(t),`Firebase Storage: ${n} (${ke(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ke(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var O;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(O||(O={}));function ke(e){return"storage/"+e}function gn(){const e="An unknown error occurred, please check the error payload for server response.";return new D(O.UNKNOWN,e)}function $o(e){return new D(O.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ho(e){return new D(O.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qo(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(O.UNAUTHENTICATED,e)}function zo(){return new D(O.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Vo(e){return new D(O.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Wo(){return new D(O.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ko(){return new D(O.CANCELED,"User canceled the upload/download.")}function Jo(e){return new D(O.INVALID_URL,"Invalid URL '"+e+"'.")}function Go(e){return new D(O.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Xo(){return new D(O.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mn+"' property when initializing the app?")}function Yo(){return new D(O.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function We(e){return new D(O.INVALID_ARGUMENT,e)}function bn(){return new D(O.APP_DELETED,"The Firebase app was deleted.")}function Zo(e){return new D(O.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function te(e){throw new D(O.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=k.makeFromUrl(t,n)}catch{return new k(t,"")}if(r.path==="")return r;throw Go(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+s+i,"i"),l={bucket:1,path:3};function c(A){A.path_=decodeURIComponent(A.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${s}/o${b}`,"i"),p={bucket:1,path:3},g=n===pn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",m=new RegExp(`^https?://${g}/${s}/${h}`,"i"),E=[{regex:a,indices:l,postModify:o},{regex:y,indices:p,postModify:c},{regex:m,indices:{bucket:1,path:2},postModify:c}];for(let A=0;A<E.length;A++){const S=E[A],L=S.regex.exec(t);if(L){const j=L[S.indices.bucket];let $=L[S.indices.path];$||($=""),r=new k(j,$),S.postModify(r);break}}if(r==null)throw Jo(t);return r}}class Qo{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e,t,n){let r=1,s=null,o=null,i=!1,a=0;function l(){return a===2}let c=!1;function d(...h){c||(c=!0,t.apply(null,h))}function f(h){s=setTimeout(()=>{s=null,e(y,l())},h)}function b(){o&&clearTimeout(o)}function y(h,...m){if(c){b();return}if(h){b(),d.call(null,h,...m);return}if(l()||i){b(),d.call(null,h,...m);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let p=!1;function g(h){p||(p=!0,b(),!c&&(s!==null?(h||(a=2),clearTimeout(s),f(0)):h||(a=1)))}return f(0),o=setTimeout(()=>{i=!0,g(!0)},n),g}function ti(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){return e!==void 0}function ri(e){return typeof e=="object"&&!Array.isArray(e)}function _n(e){return typeof e=="string"||e instanceof String}function At(e,t,n,r){if(r<t)throw We(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw We(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function En(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var K;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(K||(K={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n,r,s,o,i,a,l,c,d,f,b=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,p)=>{this.resolve_=y,this.reject_=p,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new ae(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===K.NO_ERROR,l=o.getStatus();if(!a||si(l,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===K.ABORT;r(!1,new ae(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ae(c,o))})},n=(r,s)=>{const o=this.resolve_,i=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ni(l)?o(l):o()}catch(l){i(l)}else if(a!==null){const l=gn();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(s.canceled){const l=this.appDelete_?bn():Ko();i(l)}else{const l=Wo();i(l)}};this.canceled_?n(!1,new ae(!1,null,!0)):this.backoffId_=ei(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ti(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ae{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function ii(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function ai(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ci(e,t){t&&(e["X-Firebase-GMPID"]=t)}function li(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function ui(e,t,n,r,s,o,i=!0){const a=En(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return ci(c,t),ii(c,n),ai(c,o),li(c,r),new oi(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e){let t;try{t=JSON.parse(e)}catch{return null}return ri(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function fi(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function Rn(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e,t){return t}class v{constructor(t,n,r,s){this.server=t,this.local=n||t,this.writable=!!r,this.xform=s||hi}}let ce=null;function pi(e){return!_n(e)||e.length<2?e:Rn(e)}function mi(){if(ce)return ce;const e=[];e.push(new v("bucket")),e.push(new v("generation")),e.push(new v("metageneration")),e.push(new v("name","fullPath",!0));function t(o,i){return pi(i)}const n=new v("name");n.xform=t,e.push(n);function r(o,i){return i!==void 0?Number(i):i}const s=new v("size");return s.xform=r,e.push(s),e.push(new v("timeCreated")),e.push(new v("updated")),e.push(new v("md5Hash",null,!0)),e.push(new v("cacheControl",null,!0)),e.push(new v("contentDisposition",null,!0)),e.push(new v("contentEncoding",null,!0)),e.push(new v("contentLanguage",null,!0)),e.push(new v("contentType",null,!0)),e.push(new v("metadata","customMetadata",!0)),ce=e,ce}function gi(e,t){function n(){const r=e.bucket,s=e.fullPath,o=new k(r,s);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function bi(e,t,n){const r={};r.type="file";const s=n.length;for(let o=0;o<s;o++){const i=n[o];r[i.local]=i.xform(r,t[i.server])}return gi(r,e),r}function _i(e,t,n){const r=wn(t);return r===null?null:bi(e,r,n)}function yi(e,t,n,r){const s=wn(t);if(s===null||!_n(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(c=>{const d=e.bucket,f=e.fullPath,b="/b/"+i(d)+"/o/"+i(f),y=yn(b,n,r),p=En({alt:"media",token:c});return y+p})[0]}class Ei{constructor(t,n,r,s){this.url=t,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){if(!e)throw gn()}function Ri(e,t){function n(r,s){const o=_i(e,s,t);return wi(o!==null),yi(o,s,e.host,e._protocol)}return n}function Si(e){function t(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=zo():s=qo():n.getStatus()===402?s=Ho(e.bucket):n.getStatus()===403?s=Vo(e.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return t}function Ti(e){const t=Si(e);function n(r,s){let o=t(r,s);return r.getStatus()===404&&(o=$o(e.path)),o.serverResponse=s.serverResponse,o}return n}function Ai(e,t,n){const r=t.fullServerUrl(),s=yn(r,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new Ei(s,o,Ri(e,n),i);return a.errorHandler=Ti(t),a}class Ci{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=K.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=K.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=K.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,s){if(this.sent_)throw te("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw te("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw te("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw te("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw te("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Oi extends Ci{initXhr(){this.xhr_.responseType="text"}}function Di(){return new Oi}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){this._service=t,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new G(t,n)}get root(){const t=new k(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rn(this._location.path)}get storage(){return this._service}get parent(){const t=di(this._location.path);if(t===null)return null;const n=new k(this._location.bucket,t);return new G(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Zo(t)}}function xi(e){e._throwIfRoot("getDownloadURL");const t=Ai(e.storage,e._location,mi());return e.storage.makeRequestWithTokens(t,Di).then(n=>{if(n===null)throw Yo();return n})}function vi(e,t){const n=fi(e._location.path,t),r=new k(e._location.bucket,n);return new G(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e){return/^[A-Za-z]+:\/\//.test(e)}function Ni(e,t){return new G(e,t)}function Sn(e,t){if(e instanceof Ze){const n=e;if(n._bucket==null)throw Xo();const r=new G(n,n._bucket);return t!=null?Sn(r,t):r}else return t!==void 0?vi(e,t):e}function ki(e,t){if(t&&Ii(t)){if(e instanceof Ze)return Ni(e,t);throw We("To use ref(service, url), the first argument must be a Storage instance.")}else return Sn(e,t)}function Ct(e,t){const n=t==null?void 0:t[mn];return n==null?null:k.makeFromBucketSpec(n,e)}function Pi(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:ys(s,e.app.options.projectId))}class Ze{constructor(t,n,r,s,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=pn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jo,this._maxUploadRetryTime=Mo,this._requests=new Set,s!=null?this._bucket=k.makeFromBucketSpec(s,this._host):this._bucket=Ct(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,t):this._bucket=Ct(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){At("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){At("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(To(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new G(this,t)}_makeRequest(t,n,r,s,o=!0){if(this._deleted)return new Qo(bn());{const i=ui(t,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const Ot="@firebase/storage",Dt="0.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="storage";function Li(e){return e=Xe(e),xi(e)}function Bi(e,t){return e=Xe(e),ki(e,t)}function Ui(e=Do(),t){e=Xe(e);const r=So(e,Tn).getImmediate({identifier:t}),s=bs("storage");return s&&Fi(r,...s),r}function Fi(e,t,n,r={}){Pi(e,t,n,r)}function ji(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Ze(n,r,s,t,Oo)}function Mi(){be(new re(Tn,ji,"PUBLIC").setMultipleInstances(!0)),X(Ot,Dt,""),X(Ot,Dt,"esm2017")}Mi();var $i="firebase",Hi="11.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X($i,Hi,"app");const qi={apiKey:"AIzaSyDSwuy3MGoWJnPkp0sNkN6iN3VPgbgHim8",authDomain:"soundingice-f6b6d.firebaseapp.com",projectId:"soundingice-f6b6d",storageBucket:"soundingice-f6b6d.firebasestorage.app",messagingSenderId:"22608157792",appId:"1:22608157792:web:e59805589878a30b07f705",measurementId:"G-CWJVC3D5ZN"},zi=dn(qi),Vi=Ui(zi),xt=async e=>{try{const t=Bi(Vi,e);return await Li(t)}catch(t){return console.error("Error obteniendo la URL del archivo:",t),null}},An=({record:e})=>{const[t,n]=B.useState(null),[r,s]=B.useState(null);return B.useEffect(()=>{(async()=>{try{const[i,a]=await Promise.all([xt(e["Picture file path"]),xt(e["Sound file path"])]);n(i),s(a)}catch(i){console.error("Error fetching URLs:",i)}})()},[e]),_.jsxs("div",{className:"recording-card",children:[t?_.jsx("img",{src:t,alt:`Picture for ${e.Recordist}`,className:"recording-image",loading:"lazy",onError:o=>{o.target.src="https://dummyimage.com/300x300/cccccc/ffffff&text=No+Image"}}):_.jsx("p",{children:"Loading images..."}),_.jsxs("div",{className:"recording-details",children:[_.jsx("h3",{children:e.id}),_.jsxs("p",{children:[_.jsx("strong",{children:"Date:"})," ",e.Date]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Time:"})," ",e.Time]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Location:"})," Lat: ",e.Lat,", Lon: ",e.Lon]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Conditions:"})," ",e.Conditions]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Duration:"})," ",e.Duration]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Key Words:"})," ",e["Key Words"]]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Recordist:"})," ",e.Recordist]}),r?_.jsxs("audio",{controls:!0,"aria-label":`Audio recording by ${e.Recordist}`,children:[_.jsx("source",{src:r,type:"audio/mpeg"}),"Your web does not support audio element."]}):_.jsx("p",{children:"Loading Audio..."})]})]})};An.propTypes={record:I.shape({id:I.string.isRequired,"Picture file path":I.string.isRequired,"Sound file path":I.string.isRequired,Recordist:I.string.isRequired,Date:I.string.isRequired,Time:I.string.isRequired,Lat:I.string.isRequired,Lon:I.string.isRequired,Conditions:I.string.isRequired,Duration:I.string.isRequired,"Key Words":I.string.isRequired}).isRequired};const Cn=({latitude:e=37.7577,longitude:t=-122.4376,zoom:n=10})=>{const o=`https://api.mapbox.com/styles/v1/ikerluna/cm2dk18gv007l01ph2anbepkk.html?title=false&access_token=pk.eyJ1IjoiaWtlcmx1bmEiLCJhIjoiY20yZGp1ZnI3MGg4aDJrc2JiOHcycWI1aiJ9.-phioW5X0i28dlx2B1VJDg#${n}/${e}/${t}`;console.log("MapEmbed src:",o);const i=a=>{a.stopPropagation()};return _.jsx("div",{className:"map-wrapper",onWheel:i,children:_.jsx("iframe",{width:"100%",height:"100%",src:o,title:"Mapbox embed",style:{border:"none"}})})};Cn.propTypes={latitude:I.number,longitude:I.number,zoom:I.number};const fa=()=>{const[e,t]=B.useState([]),[n,r]=B.useState(!0),[s,o]=B.useState({Recordist:"","Key Words":"",Conditions:"",Date:""}),[i,a]=B.useState([]),[l,c]=B.useState(!1),d=B.useCallback(()=>{const m=le.getAll();t(m),r(!1)},[]);B.useEffect(()=>(as(),le.on("change",d),()=>{le.off("change",d)}),[d]);const f=[...new Set(e.map(m=>m.Recordist))],b=[...new Set(e.flatMap(m=>m["Key Words"]?m["Key Words"].split(",").map(w=>w.trim()):[]))],y=[...new Set(e.map(m=>m.Conditions))],p=[...new Set(e.map(m=>m.Date))];B.useEffect(()=>{let m=e;s.Recordist&&(m=m.filter(w=>w.Recordist===s.Recordist)),s["Key Words"]&&(m=m.filter(w=>w["Key Words"]&&w["Key Words"].toLowerCase().includes(s["Key Words"].toLowerCase()))),s.Conditions&&(m=m.filter(w=>w.Conditions===s.Conditions)),s.Date&&(m=m.filter(w=>w.Date===s.Date)),a(m)},[e,s]);const g=(m,w)=>{o(E=>({...E,[m]:E[m]===w?"":w}))};B.useEffect(()=>{const m=()=>{window.pageYOffset>300?c(!0):c(!1)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const h=()=>{window.scrollTo({top:0,behavior:"smooth"})};return _.jsxs("div",{className:"field-recordings-page",children:[n?_.jsx("p",{children:"loading..."}):_.jsxs("div",{className:"field-recordings-layout",children:[_.jsxs("div",{className:"filter-sidebar",children:[_.jsxs("div",{className:"filter-group",children:[_.jsx("h3",{children:"Recordist"}),_.jsxs("div",{className:"buttons",children:[_.jsx("button",{className:`filter-btn ${s.Recordist?"":"active"}`,onClick:()=>g("Recordist",""),children:"All"}),f.map(m=>_.jsx("button",{className:`filter-btn ${s.Recordist===m?"active":""}`,onClick:()=>g("Recordist",m),children:m},m))]})]}),_.jsxs("div",{className:"filter-group",children:[_.jsx("h3",{children:"Key Words"}),_.jsxs("div",{className:"buttons",children:[_.jsx("button",{className:`filter-btn ${s["Key Words"]?"":"active"}`,onClick:()=>g("Key Words",""),children:"All"}),b.map(m=>_.jsx("button",{className:`filter-btn ${s["Key Words"]===m?"active":""}`,onClick:()=>g("Key Words",m),children:m},m))]})]}),_.jsxs("div",{className:"filter-group",children:[_.jsx("h3",{children:"Conditions"}),_.jsxs("div",{className:"buttons",children:[_.jsx("button",{className:`filter-btn ${s.Conditions?"":"active"}`,onClick:()=>g("Conditions",""),children:"All"}),y.map(m=>_.jsx("button",{className:`filter-btn ${s.Conditions===m?"active":""}`,onClick:()=>g("Conditions",m),children:m},m))]})]}),_.jsxs("div",{className:"filter-group",children:[_.jsx("h3",{children:"Date"}),_.jsxs("div",{className:"buttons",children:[_.jsx("button",{className:`filter-btn ${s.Date?"":"active"}`,onClick:()=>g("Date",""),children:"All"}),p.map(m=>_.jsx("button",{className:`filter-btn ${s.Date===m?"active":""}`,onClick:()=>g("Date",m),children:m},m))]})]})]}),_.jsx("div",{className:"recording-list",children:i.map(m=>_.jsx(An,{record:m},m.id))}),_.jsx("div",{className:"map-container",children:_.jsx(Cn,{})})]}),_.jsx("button",{className:`scroll-to-top ${l?"show":""}`,onClick:h,"aria-label":"Scroll to top",children:"↑"})]})};export{fa as default};
