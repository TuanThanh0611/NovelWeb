"use strict";(self.webpackChunknovel_web_frontend=self.webpackChunknovel_web_frontend||[]).push([[152],{4152:(yd,Yi,pn)=>{pn.d(Yi,{Dc:()=>fs,Dx:()=>ur,GQ:()=>lr,Xb:()=>ad,Zf:()=>nr,iX:()=>as,t3:()=>id,xI:()=>rs});var e,qe=pn(467),t=pn(4343),rr=()=>{},Qi=e=>null!=e,k=e=>"function"!=typeof e||e.length?e:e(),mn=e=>Array.isArray(e)?e:e?[e]:[],es=!t.S$&&t.IJ?e=>(0,t.QQ)()?(0,t.Ki)(e):e:t.Ki,rs=function ns(e){const[n,r]=(0,t.n5)(),o=e?.throw?(v,g)=>{throw r(v instanceof Error?v:new Error(g)),v}:(v,g)=>{r(v instanceof Error?v:new Error(g))},i=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),a=e?.prefix?`${e.prefix}.`:"",l=new Map,c=new Proxy({},{get(v,g){let h=l.get(g);h||(h=(0,t.n5)(void 0,{equals:!1}),l.set(g,h)),h[0]();const p=i.reduce((m,y)=>{if(null!==m||!y)return m;try{return y.getItem(`${a}${g}`)}catch(b){return o(b,`Error reading ${a}${g} from ${y.name}`),null}},null);return null!==p&&e?.deserializer?e.deserializer(p,g,e.options):p}});return!1!==e?.sync&&(0,t.Rc)(()=>{const v=g=>{let h=!1;i.forEach(p=>{try{p!==g.storageArea&&g.key&&g.newValue!==p.getItem(g.key)&&(g.newValue?p.setItem(g.key,g.newValue):p.removeItem(g.key),h=!0)}catch(m){o(m,`Error synching api ${p.name} from storage event (${g.key}=${g.newValue})`)}}),h&&g.key&&l.get(g.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",v),(0,t.Ki)(()=>globalThis.removeEventListener("storage",v))):(i.forEach(g=>g.addEventListener?.("storage",v)),(0,t.Ki)(()=>i.forEach(g=>g.removeEventListener?.("storage",v))))}),[c,(v,g,h)=>{const p=e?.serializer?e.serializer(g,v,h??e.options):g,m=`${a}${v}`;i.forEach(b=>{try{b.getItem(m)!==p&&b.setItem(m,p)}catch(x){o(x,`Error setting ${a}${v} to ${p} in ${b.name}`)}});const y=l.get(v);y&&y[1]()},{clear:()=>i.forEach(v=>{try{v.clear()}catch(g){o(g,`Error clearing ${v.name}`)}}),error:n,remove:v=>i.forEach(g=>{try{g.removeItem(`${a}${v}`)}catch(h){o(h,`Error removing ${a}${v} from ${g.name}`)}}),toJSON:()=>{const v={},g=(h,p)=>{if(!v.hasOwnProperty(h)){const m=p&&e?.deserializer?e.deserializer(p,h,e.options):p;m&&(v[h]=m)}};return i.forEach(h=>{if("function"==typeof h.getAll){let p;try{p=h.getAll()}catch(m){o(m,`Error getting all values from in ${h.name}`)}for(const m of p)g(m,p[m])}else{let m,p=0;try{for(;m=h.key(p++);)v.hasOwnProperty(m)||g(m,h.getItem(m))}catch(y){o(y,`Error getting all values from ${h.name}`)}}}),v}}]},or=e=>{if(!e)return"";let n="";for(const r in e){if(!e.hasOwnProperty(r))continue;const o=e[r];n+=o instanceof Date?`; ${r}=${o.toUTCString()}`:"boolean"==typeof o?`; ${r}`:`; ${r}=${o}`}return n},xe=("function"==typeof(e={_cookies:[globalThis.document,"cookie"],getItem:e=>xe._cookies[0][xe._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,n,r)=>{const o=xe.getItem(e);xe._cookies[0][xe._cookies[1]]=`${e}=${n}${or(r)}`;const i=Object.assign(new Event("storage"),{key:e,oldValue:o,newValue:n,url:globalThis.document.URL,storageArea:xe});window.dispatchEvent(i)},removeItem:e=>{xe._cookies[0][xe._cookies[1]]=`${e}=deleted${or({expires:new Date(0)})}`},key:e=>{let n=null,r=0;return xe._cookies[0][xe._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(o,i)=>(!n&&i&&r++===e&&(n=i),"")),n},get length(){let e=0;return xe._cookies[0][xe._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,n=>(e+=n?1:0,"")),e}}).clear||(e.clear=()=>{let n;for(;n=e.key(0);)e.removeItem(n)}),e),bn="bottom",as="system",us=Object.keys(t.O$)[0],ds=Object.keys(t.bs)[0],lr=(0,t.q6)({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function P(){return(0,t.NT)(lr)}var cr=(0,t.q6)(void 0),fs=e=>{const[n,r]=(0,t.n5)(null),o=()=>{const l=n();null!=l&&(l.close(),r(null))},i=(l,c)=>{if(null!=n())return;const s=window.open("","TSQD-Devtools-Panel",`width=${l},height=${c},popup`);if(!s)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");s.document.head.innerHTML="",s.document.body.innerHTML="",(0,t.MQ)(s.document),s.document.title="TanStack Query Devtools",s.document.body.style.margin="0",s.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),r(null)}),[...(P().shadowDOMTarget||document).styleSheets].forEach(u=>{try{const f=[...u.cssRules].map(h=>h.cssText).join(""),d=document.createElement("style"),v=u.ownerNode;let g="";v&&"id"in v&&(g=v.id),g&&d.setAttribute("id",g),d.textContent=f,s.document.head.appendChild(d)}catch{const d=document.createElement("link");if(null==u.href)return;d.rel="stylesheet",d.type=u.type,d.media=u.media.toString(),d.href=u.href,s.document.head.appendChild(d)}}),(0,t.z_)(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],s.document),e.setLocalStore("pip_open","true"),r(s)};(0,t.EH)(()=>{"true"===(e.localStore.pip_open??"false")&&!e.disabled&&i(Number(window.innerWidth),Number(e.localStore.height||500))}),(0,t.EH)(()=>{const l=(P().shadowDOMTarget||document).querySelector("#_goober"),c=n();if(l&&c){const s=new MutationObserver(()=>{const u=(P().shadowDOMTarget||c.document).querySelector("#_goober");u&&(u.textContent=l.textContent)});s.observe(l,{childList:!0,subtree:!0,characterDataOldValue:!0}),(0,t.Ki)(()=>{s.disconnect()})}});const a=(0,t.To)(()=>({pipWindow:n(),requestPipWindow:i,closePipWindow:o,disabled:e.disabled??!1}));return(0,t.a0)(cr.Provider,{value:a,get children(){return e.children}})},xn=()=>(0,t.To)(()=>{const n=(0,t.NT)(cr);if(!n)throw new Error("usePiPWindow must be used within a PiPProvider");return n()}),ur=(0,t.q6)(()=>"dark");function oe(){return(0,t.NT)(ur)}var dr={\u00c0:"A",\u00c1:"A",\u00c2:"A",\u00c3:"A",\u00c4:"A",\u00c5:"A",\u1ea4:"A",\u1eae:"A",\u1eb2:"A",\u1eb4:"A",\u1eb6:"A",\u00c6:"AE",\u1ea6:"A",\u1eb0:"A",\u0202:"A",\u00c7:"C",\u1e08:"C",\u00c8:"E",\u00c9:"E",\u00ca:"E",\u00cb:"E",\u1ebe:"E",\u1e16:"E",\u1ec0:"E",\u1e14:"E",\u1e1c:"E",\u0206:"E",\u00cc:"I",\u00cd:"I",\u00ce:"I",\u00cf:"I",\u1e2e:"I",\u020a:"I",\u00d0:"D",\u00d1:"N",\u00d2:"O",\u00d3:"O",\u00d4:"O",\u00d5:"O",\u00d6:"O",\u00d8:"O",\u1ed0:"O",\u1e4c:"O",\u1e52:"O",\u020e:"O",\u00d9:"U",\u00da:"U",\u00db:"U",\u00dc:"U",\u00dd:"Y",\u00e0:"a",\u00e1:"a",\u00e2:"a",\u00e3:"a",\u00e4:"a",\u00e5:"a",\u1ea5:"a",\u1eaf:"a",\u1eb3:"a",\u1eb5:"a",\u1eb7:"a",\u00e6:"ae",\u1ea7:"a",\u1eb1:"a",\u0203:"a",\u00e7:"c",\u1e09:"c",\u00e8:"e",\u00e9:"e",\u00ea:"e",\u00eb:"e",\u1ebf:"e",\u1e17:"e",\u1ec1:"e",\u1e15:"e",\u1e1d:"e",\u0207:"e",\u00ec:"i",\u00ed:"i",\u00ee:"i",\u00ef:"i",\u1e2f:"i",\u020b:"i",\u00f0:"d",\u00f1:"n",\u00f2:"o",\u00f3:"o",\u00f4:"o",\u00f5:"o",\u00f6:"o",\u00f8:"o",\u1ed1:"o",\u1e4d:"o",\u1e53:"o",\u020f:"o",\u00f9:"u",\u00fa:"u",\u00fb:"u",\u00fc:"u",\u00fd:"y",\u00ff:"y",\u0100:"A",\u0101:"a",\u0102:"A",\u0103:"a",\u0104:"A",\u0105:"a",\u0106:"C",\u0107:"c",\u0108:"C",\u0109:"c",\u010a:"C",\u010b:"c",\u010c:"C",\u010d:"c",C\u0306:"C",c\u0306:"c",\u010e:"D",\u010f:"d",\u0110:"D",\u0111:"d",\u0112:"E",\u0113:"e",\u0114:"E",\u0115:"e",\u0116:"E",\u0117:"e",\u0118:"E",\u0119:"e",\u011a:"E",\u011b:"e",\u011c:"G",\u01f4:"G",\u011d:"g",\u01f5:"g",\u011e:"G",\u011f:"g",\u0120:"G",\u0121:"g",\u0122:"G",\u0123:"g",\u0124:"H",\u0125:"h",\u0126:"H",\u0127:"h",\u1e2a:"H",\u1e2b:"h",\u0128:"I",\u0129:"i",\u012a:"I",\u012b:"i",\u012c:"I",\u012d:"i",\u012e:"I",\u012f:"i",\u0130:"I",\u0131:"i",\u0132:"IJ",\u0133:"ij",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u1e30:"K",\u1e31:"k",K\u0306:"K",k\u0306:"k",\u0139:"L",\u013a:"l",\u013b:"L",\u013c:"l",\u013d:"L",\u013e:"l",\u013f:"L",\u0140:"l",\u0141:"l",\u0142:"l",\u1e3e:"M",\u1e3f:"m",M\u0306:"M",m\u0306:"m",\u0143:"N",\u0144:"n",\u0145:"N",\u0146:"n",\u0147:"N",\u0148:"n",\u0149:"n",N\u0306:"N",n\u0306:"n",\u014c:"O",\u014d:"o",\u014e:"O",\u014f:"o",\u0150:"O",\u0151:"o",\u0152:"OE",\u0153:"oe",P\u0306:"P",p\u0306:"p",\u0154:"R",\u0155:"r",\u0156:"R",\u0157:"r",\u0158:"R",\u0159:"r",R\u0306:"R",r\u0306:"r",\u0212:"R",\u0213:"r",\u015a:"S",\u015b:"s",\u015c:"S",\u015d:"s",\u015e:"S",\u0218:"S",\u0219:"s",\u015f:"s",\u0160:"S",\u0161:"s",\u0162:"T",\u0163:"t",\u021b:"t",\u021a:"T",\u0164:"T",\u0165:"t",\u0166:"T",\u0167:"t",T\u0306:"T",t\u0306:"t",\u0168:"U",\u0169:"u",\u016a:"U",\u016b:"u",\u016c:"U",\u016d:"u",\u016e:"U",\u016f:"u",\u0170:"U",\u0171:"u",\u0172:"U",\u0173:"u",\u0216:"U",\u0217:"u",V\u0306:"V",v\u0306:"v",\u0174:"W",\u0175:"w",\u1e82:"W",\u1e83:"w",X\u0306:"X",x\u0306:"x",\u0176:"Y",\u0177:"y",\u0178:"Y",Y\u0306:"Y",y\u0306:"y",\u0179:"Z",\u017a:"z",\u017b:"Z",\u017c:"z",\u017d:"Z",\u017e:"z",\u017f:"s",\u0192:"f",\u01a0:"O",\u01a1:"o",\u01af:"U",\u01b0:"u",\u01cd:"A",\u01ce:"a",\u01cf:"I",\u01d0:"i",\u01d1:"O",\u01d2:"o",\u01d3:"U",\u01d4:"u",\u01d5:"U",\u01d6:"u",\u01d7:"U",\u01d8:"u",\u01d9:"U",\u01da:"u",\u01db:"U",\u01dc:"u",\u1ee8:"U",\u1ee9:"u",\u1e78:"U",\u1e79:"u",\u01fa:"A",\u01fb:"a",\u01fc:"AE",\u01fd:"ae",\u01fe:"O",\u01ff:"o",\u00de:"TH",\u00fe:"th",\u1e54:"P",\u1e55:"p",\u1e64:"S",\u1e65:"s",X\u0301:"X",x\u0301:"x",\u0403:"\u0413",\u0453:"\u0433",\u040c:"\u041a",\u045c:"\u043a",A\u030b:"A",a\u030b:"a",E\u030b:"E",e\u030b:"e",I\u030b:"I",i\u030b:"i",\u01f8:"N",\u01f9:"n",\u1ed2:"O",\u1ed3:"o",\u1e50:"O",\u1e51:"o",\u1eea:"U",\u1eeb:"u",\u1e80:"W",\u1e81:"w",\u1ef2:"Y",\u1ef3:"y",\u0200:"A",\u0201:"a",\u0204:"E",\u0205:"e",\u0208:"I",\u0209:"i",\u020c:"O",\u020d:"o",\u0210:"R",\u0211:"r",\u0214:"U",\u0215:"u",B\u030c:"B",b\u030c:"b",\u010c\u0323:"C",\u010d\u0323:"c",\u00ca\u030c:"E",\u00ea\u030c:"e",F\u030c:"F",f\u030c:"f",\u01e6:"G",\u01e7:"g",\u021e:"H",\u021f:"h",J\u030c:"J",\u01f0:"j",\u01e8:"K",\u01e9:"k",M\u030c:"M",m\u030c:"m",P\u030c:"P",p\u030c:"p",Q\u030c:"Q",q\u030c:"q",\u0158\u0329:"R",\u0159\u0329:"r",\u1e66:"S",\u1e67:"s",V\u030c:"V",v\u030c:"v",W\u030c:"W",w\u030c:"w",X\u030c:"X",x\u030c:"x",Y\u030c:"Y",y\u030c:"y",A\u0327:"A",a\u0327:"a",B\u0327:"B",b\u0327:"b",\u1e10:"D",\u1e11:"d",\u0228:"E",\u0229:"e",\u0190\u0327:"E",\u025b\u0327:"e",\u1e28:"H",\u1e29:"h",I\u0327:"I",i\u0327:"i",\u0197\u0327:"I",\u0268\u0327:"i",M\u0327:"M",m\u0327:"m",O\u0327:"O",o\u0327:"o",Q\u0327:"Q",q\u0327:"q",U\u0327:"U",u\u0327:"u",X\u0327:"X",x\u0327:"x",Z\u0327:"Z",z\u0327:"z"},gs=Object.keys(dr).join("|"),hs=new RegExp(gs,"g"),he={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function fr(e,n,r){var o;if((r=r||{}).threshold=null!=(o=r.threshold)?o:he.MATCHES,!r.accessors){const l=gr(e,n,r);return{rankedValue:e,rank:l,accessorIndex:-1,accessorThreshold:r.threshold,passed:l>=r.threshold}}const i=function bs(e,n){const r=[];for(let o=0,i=n.length;o<i;o++){const a=n[o],l=xs(a),c=ys(e,a);for(let s=0,u=c.length;s<u;s++)r.push({itemValue:c[s],attributes:l})}return r}(e,r.accessors),a={rankedValue:e,rank:he.NO_MATCH,accessorIndex:-1,accessorThreshold:r.threshold,passed:!1};for(let l=0;l<i.length;l++){const c=i[l];let s=gr(c.itemValue,n,r);const{minRanking:u,maxRanking:f,threshold:d=r.threshold}=c.attributes;s<u&&s>=he.MATCHES?s=u:s>f&&(s=f),s=Math.min(s,f),s>=d&&s>a.rank&&(a.rank=s,a.passed=!0,a.accessorIndex=l,a.accessorThreshold=d,a.rankedValue=c.itemValue)}return a}function gr(e,n,r){return e=hr(e,r),(n=hr(n,r)).length>e.length?he.NO_MATCH:e===n?he.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase())===(n=n.toLowerCase())?he.EQUAL:e.startsWith(n)?he.STARTS_WITH:e.includes(` ${n}`)?he.WORD_STARTS_WITH:e.includes(n)?he.CONTAINS:1===n.length?he.NO_MATCH:function ps(e){let n="";return e.split(" ").forEach(o=>{o.split("-").forEach(a=>{n+=a.substr(0,1)})}),n}(e).includes(n)?he.ACRONYM:function ms(e,n){let r=0,o=0;function i(s,u,f){for(let d=f,v=u.length;d<v;d++)if(u[d]===s)return r+=1,d+1;return-1}const l=i(n[0],e,0);if(l<0)return he.NO_MATCH;o=l;for(let s=1,u=n.length;s<u;s++)if(o=i(n[s],e,o),!(o>-1))return he.NO_MATCH;return function a(s){return he.MATCHES+r/n.length*(1/s)}(o-l)}(e,n)}function hr(e,n){let{keepDiacritics:r}=n;return e=`${e}`,r||(e=function vs(e){return e.replace(hs,n=>dr[n])}(e)),e}function ys(e,n){let r=n;"object"==typeof n&&(r=n.accessor);const o=r(e);return null==o?[]:Array.isArray(o)?o:[String(o)]}var vr={maxRanking:1/0,minRanking:-1/0};function xs(e){return"function"==typeof e?vr:{...vr,...e}}var ws={data:""},$s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ws,Cs=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ss=/\/\*[^]*?\*\/|  +/g,pr=/\n+/g,lt=(e,n)=>{let r="",o="",i="";for(let a in e){let l=e[a];"@"==a[0]?"i"==a[1]?r=a+" "+l+";":o+="f"==a[1]?lt(l,a):a+"{"+lt(l,"k"==a[1]?"":n)+"}":"object"==typeof l?o+=lt(l,n?n.replace(/([^,])+/g,c=>a.replace(/(^:.*)|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,c):c?c+" "+s:s)):a):null!=l&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=lt.p?lt.p(a,l):a+":"+l+";")}return r+(n&&i?n+"{"+i+"}":i)+o},Be={},mr=e=>{if("object"==typeof e){let n="";for(let r in e)n+=r+mr(e[r]);return n}return e},ks=(e,n,r,o,i)=>{let a=mr(e),l=Be[a]||(Be[a]=(s=>{let u=0,f=11;for(;u<s.length;)f=101*f+s.charCodeAt(u++)>>>0;return"go"+f})(a));if(!Be[l]){let s=a!==e?e:(u=>{let f,d,v=[{}];for(;f=Cs.exec(u.replace(Ss,""));)f[4]?v.shift():f[3]?(d=f[3].replace(pr," ").trim(),v.unshift(v[0][d]=v[0][d]||{})):v[0][f[1]]=f[2].replace(pr," ").trim();return v[0]})(e);Be[l]=lt(i?{["@keyframes "+l]:s}:s,r?"":"."+l)}let c=r&&Be.g?Be.g:null;return r&&(Be.g=Be[l]),s=Be[l],u=n,f=o,(d=c)?u.data=u.data.replace(d,s):-1===u.data.indexOf(s)&&(u.data=f?s+u.data:u.data+s),l;var s,u,f,d},Es=(e,n,r)=>e.reduce((o,i,a)=>{let l=n[a];if(l&&l.call){let c=l(r),s=c&&c.props&&c.props.className||/^go/.test(c)&&c;l=s?"."+s:c&&"object"==typeof c?c.props?"":lt(c,""):!1===c?"":c}return o+i+(l??"")},"");function F(e){let n=this||{},r=e.call?e(n.p):e;return ks(r.unshift?r.raw?Es(r,[].slice.call(arguments,1),n.p):r.reduce((o,i)=>Object.assign(o,i&&i.call?i(n.p):i),{}):r,$s(n.target),n.g,n.o,n.k)}function yr(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=yr(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function D(){for(var e,n,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=yr(e))&&(o&&(o+=" "),o+=n);return o}F.bind({g:1}),F.bind({k:1});var br=()=>{};function de(...e){return function Zi(e){return(...n)=>{for(const r of e)r&&r(...n)}}(e)}var xr=t.S$?e=>null!=e&&"object"==typeof e&&"t"in e:e=>e instanceof Element;function wn(e,n){if(n(e))return e;if("function"==typeof e&&!e.length)return wn(e(),n);if(Array.isArray(e)){const r=[];for(const o of e){const i=wn(o,n);i&&(Array.isArray(i)?r.push.apply(r,i):r.push(i))}return r.length?r:null}return null}function qs(e,n=xr,r=xr){const o=(0,t.To)(e),i=(0,t.To)(()=>wn(o(),t.S$?r:n));return i.toArray=()=>{const a=i();return Array.isArray(a)?a:a?[a]:[]},i}function wr(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function As(e,n,r,o){const{onBeforeEnter:i,onEnter:a,onAfterEnter:l}=n;function c(s){(!s||s.target===r)&&(r.removeEventListener("transitionend",c),r.removeEventListener("animationend",c),r.classList.remove(...e.enterActive),r.classList.remove(...e.enterTo),l?.(r))}i?.(r),r.classList.add(...e.enter),r.classList.add(...e.enterActive),queueMicrotask(()=>{if(!r.parentNode)return o?.();a?.(r,()=>c())}),wr(()=>{r.classList.remove(...e.enter),r.classList.add(...e.enterTo),(!a||a.length<2)&&(r.addEventListener("transitionend",c),r.addEventListener("animationend",c))})}function Ds(e,n,r,o){const{onBeforeExit:i,onExit:a,onAfterExit:l}=n;if(!r.parentNode)return o?.();function c(s){(!s||s.target===r)&&(o?.(),r.removeEventListener("transitionend",c),r.removeEventListener("animationend",c),r.classList.remove(...e.exitActive),r.classList.remove(...e.exitTo),l?.(r))}i?.(r),r.classList.add(...e.exit),r.classList.add(...e.exitActive),a?.(r,()=>c()),wr(()=>{r.classList.remove(...e.exit),r.classList.add(...e.exitTo),(!a||a.length<2)&&(r.addEventListener("transitionend",c),r.addEventListener("animationend",c))})}var $r=e=>{const n=function Ms(e){return(0,t.To)(()=>{const n=e.name||"s";return{enterActive:(e.enterActiveClass||n+"-enter-active").split(" "),enter:(e.enterClass||n+"-enter").split(" "),enterTo:(e.enterToClass||n+"-enter-to").split(" "),exitActive:(e.exitActiveClass||n+"-exit-active").split(" "),exit:(e.exitClass||n+"-exit").split(" "),exitTo:(e.exitToClass||n+"-exit-to").split(" "),move:(e.moveClass||n+"-move").split(" ")}})}(e);return function Ts(e,n){const r=(0,t.vz)(e);if(t.S$){const d=r.slice();return()=>d}const{onChange:o}=n;let i=new Set(n.appear?void 0:r);const a=new WeakSet,[l,c]=(0,t.n5)([],{equals:!1}),[s]=(0,t.pn)(),u="remove"===n.exitMethod?br:d=>{c(v=>(v.push.apply(v,d),v));for(const v of d)a.delete(v)},f="remove"===n.exitMethod?br:"keep-index"===n.exitMethod?(d,v,g)=>d.splice(g,0,v):(d,v)=>d.push(v);return(0,t.To)(d=>{const v=l(),g=e();if((0,t.vz)(s))return s(),d;if(v.length){const h=d.filter(p=>!v.includes(p));return v.length=0,o({list:h,added:[],removed:[],unchanged:h,finishRemoved:u}),h}return(0,t.vz)(()=>{const h=new Set(g),p=g.slice(),m=[],y=[],b=[];for(const w of g)(i.has(w)?b:m).push(w);let x=!m.length;for(let w=0;w<d.length;w++){const C=d[w];h.has(C)||(a.has(C)||(y.push(C),a.add(C)),f(p,C,w)),x&&C!==p[w]&&(x=!1)}return!y.length&&x?d:(o({list:p,added:m,removed:y,unchanged:b,finishRemoved:u}),i=h,p)})},n.appear?[]:r.slice())}(qs(()=>e.children).toArray,{appear:e.appear,exitMethod:"keep-index",onChange({added:r,removed:o,finishRemoved:i,list:a}){const l=n();for(const s of r)As(l,e,s);const c=[];for(const s of a)s.isConnected&&(s instanceof HTMLElement||s instanceof SVGElement)&&c.push({el:s,rect:s.getBoundingClientRect()});queueMicrotask(()=>{const s=[];for(const{el:u,rect:f}of c)if(u.isConnected){const d=u.getBoundingClientRect(),v=f.left-d.left,g=f.top-d.top;(v||g)&&(u.style.transform=`translate(${v}px, ${g}px)`,u.style.transitionDuration="0s",s.push(u))}document;for(const u of s){let f=function(d){(d.target===u||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",f),u.classList.remove(...l.move))};u.classList.add(...l.move),u.style.transform=u.style.transitionDuration="",u.addEventListener("transitionend",f)}});for(const s of o)Ds(l,e,s,()=>i([s]))}})},$n=Symbol("fallback");function Cr(e){for(const n of e)n.dispose()}function Yt(e){const{by:n}=e;return(0,t.To)(function Is(e,n,r,o={}){if(t.S$){const l=e();let c=[];if(l&&l.length)for(let s=0,u=l.length;s<u;s++)c.push(r(()=>l[s],()=>s));else o.fallback&&(c=[o.fallback()]);return()=>c}const i=new Map;return(0,t.Ki)(()=>Cr(i.values())),()=>{const l=e()||[];return(0,t.vz)(()=>{if(!l.length)return Cr(i.values()),i.clear(),o.fallback?[(0,t.Hr)(d=>(i.set($n,{dispose:d}),o.fallback()))]:[];const c=new Array(l.length),s=i.get($n);if(!i.size||s){s?.dispose(),i.delete($n);for(let f=0;f<l.length;f++){const d=l[f];a(c,d,f,n(d,f))}return c}const u=new Set(i.keys());for(let f=0;f<l.length;f++){const d=l[f],v=n(d,f);u.delete(v);const g=i.get(v);g?(c[f]=g.mapped,g.setIndex?.(f),g.setItem(()=>d)):a(c,d,f,v)}for(const f of u)i.get(f)?.dispose(),i.delete(f);return c})};function a(l,c,s,u){(0,t.Hr)(f=>{const[d,v]=(0,t.n5)(c),g={setItem:v,dispose:f};if(r.length>1){const[h,p]=(0,t.n5)(s);g.setIndex=p,g.mapped=r(d,h)}else g.mapped=r(d);i.set(u,g),l[s]=g.mapped})}}(()=>e.each,"function"==typeof n?n:r=>r[n],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function Sr(e,n,r){if(t.S$)return;const o=new WeakMap,{observe:i,unobserve:a}=function Ls(e,n){if(t.S$)return{observe:rr,unobserve:rr};const r=new ResizeObserver(e);return(0,t.Ki)(r.disconnect.bind(r)),{observe:o=>r.observe(o,n),unobserve:r.unobserve.bind(r)}}(l=>{for(const c of l){const{contentRect:s,target:u}=c,f=Math.round(s.width),d=Math.round(s.height),v=o.get(u);(!v||v.width!==f||v.height!==d)&&(n(s,u,c),o.set(u,{width:f,height:d}))}},r);(0,t.EH)(l=>{const c=(e=>e.filter(Qi))(mn(k(e)));return function ts(e,n,r,o){const i=e.length,a=n.length;let c,s,l=0;if(a)if(i){for(;l<a&&n[l]===e[l];l++);for(c of(n=n.slice(l),e=e.slice(l),n))e.includes(c)||o(c);for(s of e)n.includes(s)||r(s)}else for(;l<a;l++)o(n[l]);else for(;l<i;l++)r(e[l])}(c,l,i,a),c},[])}var _s=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function kr(e){const n={};let r;for(;r=_s.exec(e);)n[r[1]]=r[2];return n}function jt(e,n){if("string"==typeof e){if("string"==typeof n)return`${e};${n}`;e=kr(e)}else"string"==typeof n&&(n=kr(n));return{...e,...n}}function Cn(e,n){const r=[...e],o=r.indexOf(n);return-1!==o&&r.splice(o,1),r}function zs(e){return"number"==typeof e}function vt(e){return"[object String]"===Object.prototype.toString.call(e)}function Tt(e){return n=>`${e()}-${n}`}function we(e,n){return!!e&&(e===n||e.contains(n))}function qt(e,n=!1){const{activeElement:r}=Le(e);if(!r?.nodeName)return null;if(Er(r)&&r.contentDocument)return qt(r.contentDocument.body,n);if(n){const o=r.getAttribute("aria-activedescendant");if(o){const i=Le(r).getElementById(o);if(i)return i}}return r}function Le(e){return e?e.ownerDocument||e:document}function Er(e){return"IFRAME"===e.tagName}var Sn=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(Sn||{});function kn(e){return typeof window<"u"&&null!=window.navigator&&e.test(window.navigator.userAgentData?.platform||window.navigator.platform)}function Wt(){return kn(/^Mac/i)}function W(e,n){return n&&(function Ks(e){return"function"==typeof e}(n)?n(e):n[0](n[1],e)),e?.defaultPrevented}function ie(e){return n=>{for(const r of e)W(n,r)}}function Gs(e){return Wt()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function le(e){if(e)if(function Vs(){if(null==Qt){Qt=!1;try{document.createElement("div").focus({get preventScroll(){return Qt=!0,!0}})}catch{}}return Qt}())e.focus({preventScroll:!0});else{const n=function Ys(e){let n=e.parentNode;const r=[],o=document.scrollingElement||document.documentElement;for(;n instanceof HTMLElement&&n!==o;)(n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth)&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),n=n.parentNode;return o instanceof HTMLElement&&r.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),r}(e);e.focus(),function js(e){for(const{element:n,scrollTop:r,scrollLeft:o}of e)n.scrollTop=r,n.scrollLeft=o}(n)}}var Qt=null,Tr=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Ws=[...Tr,'[tabindex]:not([tabindex="-1"]):not([disabled])'],En=Tr.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Qs=Ws.join(':not([hidden]):not([tabindex="-1"]),');function qr(e,n){const o=Array.from(e.querySelectorAll(En)).filter(Mr);return n&&Mr(e)&&o.unshift(e),o.forEach((i,a)=>{if(Er(i)&&i.contentDocument){const c=qr(i.contentDocument.body,!1);o.splice(a,1,...c)}}),o}function Mr(e){return Ar(e)&&!function Xs(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}(e)}function Ar(e){return e.matches(En)&&Tn(e)}function Tn(e,n){return"#comment"!==e.nodeName&&function Zs(e){if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const{display:n,visibility:r}=e.style;let o="none"!==n&&"hidden"!==r&&"collapse"!==r;if(o){if(!e.ownerDocument.defaultView)return o;const{getComputedStyle:i}=e.ownerDocument.defaultView,{display:a,visibility:l}=i(e);o="none"!==a&&"hidden"!==l&&"collapse"!==l}return o}(e)&&function Js(e,n){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!n||"SUMMARY"===n.nodeName||e.hasAttribute("open"))}(e,n)&&(!e.parentElement||Tn(e.parentElement,e))}function Dr(e){for(;e&&!ta(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function ta(e){const n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function na(){}function z(e,n){return(0,t.v6)(e,n)}var Mt=new Map,Ir=new Set;function Pr(){if(typeof window>"u")return;const n=r=>{if(!r.target)return;const o=Mt.get(r.target);if(o&&(o.delete(r.propertyName),0===o.size&&(r.target.removeEventListener("transitioncancel",n),Mt.delete(r.target)),0===Mt.size)){for(const i of Ir)i();Ir.clear()}};document.body.addEventListener("transitionrun",r=>{if(!r.target)return;let o=Mt.get(r.target);o||(o=new Set,Mt.set(r.target,o),r.target.addEventListener("transitioncancel",n)),o.add(r.propertyName)}),document.body.addEventListener("transitionend",n)}function qn(e,n){const r=Or(e,n,"left"),o=Or(e,n,"top"),i=n.offsetWidth,a=n.offsetHeight;let l=e.scrollLeft,c=e.scrollTop;const s=l+e.offsetWidth,u=c+e.offsetHeight;r<=l?l=r:r+i>s&&(l+=r+i-s),o<=c?c=o:o+a>u&&(c+=o+a-u),e.scrollLeft=l,e.scrollTop=c}function Or(e,n,r){const o="left"===r?"offsetLeft":"offsetTop";let i=0;for(;n.offsetParent&&(i+=n[o],n.offsetParent!==e);){if(n.offsetParent.contains(e)){i-=e[o];break}n=n.offsetParent}return i}typeof document<"u"&&("loading"!==document.readyState?Pr():document.addEventListener("DOMContentLoaded",Pr));var Lr={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function $e(e){return n=>(e(n),()=>e(void 0))}function Xt(e,n){const[r,o]=(0,t.n5)(_r(n?.()));return(0,t.EH)(()=>{o(e()?.tagName.toLowerCase()||_r(n?.()))}),r}function _r(e){return vt(e)?e:void 0}function Q(e){const[n,r]=(0,t.rg)(e,["as"]);if(!n.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return(0,t.a0)(t.Qi,(0,t.v6)(r,{get component(){return n.as}}))}var ia=["id","name","validationState","required","disabled","readOnly"],Fr=(0,t.q6)();function At(){const e=(0,t.NT)(Fr);if(void 0===e)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function zr(e){const n=At(),r=z({id:n.generateId("description")},e);return(0,t.EH)(()=>(0,t.Ki)(n.registerDescription(r.id))),(0,t.a0)(Q,(0,t.v6)({as:"div"},()=>n.dataset(),r))}function Kr(e){const n=At(),r=z({id:n.generateId("error-message")},e),[o,i]=(0,t.rg)(r,["forceMount"]),a=()=>"invalid"===n.validationState();return(0,t.EH)(()=>{a()&&(0,t.Ki)(n.registerErrorMessage(i.id))}),(0,t.a0)(t.wv,{get when(){return o.forceMount||a()},get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div"},()=>n.dataset(),i))}})}function aa(e){let n;const r=At(),o=z({id:r.generateId("label")},e),[i,a]=(0,t.rg)(o,["ref"]),l=Xt(()=>n,()=>"label");return(0,t.EH)(()=>(0,t.Ki)(r.registerLabel(a.id))),(0,t.a0)(Q,(0,t.v6)({as:"label",ref(c){const s=de(u=>n=u,i.ref);"function"==typeof s&&s(c)},get for(){return(0,t.To)(()=>"label"===l())()?r.fieldId():void 0}},()=>r.dataset(),a))}function Dt(e){const[n,r]=(0,t.n5)(e.defaultValue?.()),o=(0,t.To)(()=>void 0!==e.value?.()),i=(0,t.To)(()=>o()?e.value?.():n());return[i,l=>{(0,t.vz)(()=>{const c=function Ji(e,...n){return"function"==typeof e?e(...n):e}(l,i());return Object.is(c,i())||(o()||r(c),e.onChange?.(c)),c})}]}function Br(e){const[n,r]=Dt(e);return[()=>n()??!1,r]}var ga=Object.defineProperty,Zt=(e,n)=>{for(var r in n)ga(e,r,{get:n[r],enumerable:!0})},Rr=(0,t.q6)();function Hr(){return(0,t.NT)(Rr)}function Nr(e,n){return!!(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function Ur(e,n){const r=function pa(e){const n=e.map((o,i)=>[i,o]);let r=!1;return n.sort(([o,i],[a,l])=>{const c=i.ref(),s=l.ref();return c!==s&&c&&s?Nr(c,s)?(o>a&&(r=!0),-1):(o<a&&(r=!0),1):0}),r?n.map(([o,i])=>i):e}(e);e!==r&&n(r)}function xa(e={}){const[n,r]=function da(e){const[n,r]=Dt(e);return[()=>n()??[],r]}({value:()=>k(e.items),onChange:a=>e.onItemsChange?.(a)});!function ba(e,n){if("function"!=typeof IntersectionObserver)return void function ya(e,n){(0,t.EH)(()=>{const r=setTimeout(()=>{Ur(e(),n)});(0,t.Ki)(()=>clearTimeout(r))})}(e,n);let r=[];(0,t.EH)(()=>{const i=function ma(e){const n=e[0],r=e[e.length-1]?.ref();let o=n?.ref()?.parentElement;for(;o;){if(r&&o.contains(r))return o;o=o.parentElement}return Le(o).body}(e()),a=new IntersectionObserver(()=>{const l=!!r.length;r=e(),l&&Ur(e(),n)},{root:i});for(const l of e()){const c=l.ref();c&&a.observe(c)}(0,t.Ki)(()=>a.disconnect())})}(n,r);const o=a=>(r(l=>{const c=function va(e,n){const r=n.ref();if(!r)return-1;let o=e.length;if(!o)return-1;for(;o--;){const i=e[o]?.ref();if(i&&Nr(i,r))return o+1}return 0}(l,a);return function Fs(e,n,r=-1){return r in e?[...e.slice(0,r),n,...e.slice(r)]:[...e,n]}(l,a,c)}),()=>{r(l=>{const c=l.filter(s=>s.ref()!==a.ref());return l.length===c.length?l:c})});return{DomCollectionProvider:a=>(0,t.a0)(Rr.Provider,{value:{registerItem:o},get children(){return a.children}})}}function Gr(e){let n=e.startIndex??0;const r=e.startLevel??0,o=[],i=s=>{if(null==s)return"";const u=e.getKey??"key",f=vt(u)?s[u]:u(s);return null!=f?String(f):""},a=s=>{if(null==s)return"";const u=e.getTextValue??"textValue",f=vt(u)?s[u]:u(s);return null!=f?String(f):""},l=s=>{if(null==s)return!1;const u=e.getDisabled??"disabled";return(vt(u)?s[u]:u(s))??!1},c=s=>{if(null!=s)return vt(e.getSectionChildren)?s[e.getSectionChildren]:e.getSectionChildren?.(s)};for(const s of e.dataSource)if(vt(s)||zs(s))o.push({type:"item",rawValue:s,key:String(s),textValue:String(s),disabled:l(s),level:r,index:n}),n++;else if(null!=c(s)){o.push({type:"section",rawValue:s,key:"",textValue:"",disabled:!1,level:r,index:n}),n++;const u=c(s)??[];if(u.length>0){const f=Gr({dataSource:u,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:n,startLevel:r+1});o.push(...f),n+=f.length}}else o.push({type:"item",rawValue:s,key:i(s),textValue:a(s),disabled:l(s),level:r,index:n}),n++;return o}function $a(e,n=[]){return(0,t.To)(()=>{const r=Gr({dataSource:k(e.dataSource),getKey:k(e.getKey),getTextValue:k(e.getTextValue),getDisabled:k(e.getDisabled),getSectionChildren:k(e.getSectionChildren)});for(let o=0;o<n.length;o++)n[o]();return e.factory(r)})}var Ca=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),Sa=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function Ea(e){return function ka(e){if(Intl.Locale){const r=new Intl.Locale(e).maximize().script??"";return Ca.has(r)}const n=e.split("-")[0];return Sa.has(n)}(e)?"rtl":"ltr"}function Vr(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:Ea(e)}}var Mn=Vr(),It=new Set;function Yr(){Mn=Vr();for(const e of It)e(Mn)}var qa=(0,t.q6)();function Ze(){const e=function Ta(){const e={locale:"en-US",direction:"ltr"},[n,r]=(0,t.n5)(Mn),o=(0,t.To)(()=>t.S$?e:n());return(0,t.Rc)(()=>{0===It.size&&window.addEventListener("languagechange",Yr),It.add(r),(0,t.Ki)(()=>{It.delete(r),0===It.size&&window.removeEventListener("languagechange",Yr)})}),{locale:()=>o().locale,direction:()=>o().direction}}();return(0,t.NT)(qa)||e}var An=new Map,Re=class Vi extends Set{anchorKey;currentKey;constructor(n,r,o){super(n),n instanceof Vi?(this.anchorKey=r||n.anchorKey,this.currentKey=o||n.currentKey):(this.anchorKey=r,this.currentKey=o)}};function jr(e){return function Us(){return Wt()||function Ns(){return function Rs(){return kn(/^iPhone/i)}()||function Hs(){return kn(/^iPad/i)||Wt()&&navigator.maxTouchPoints>1}()}()}()?e.altKey:e.ctrlKey}function pt(e){return Wt()?e.metaKey:e.ctrlKey}function Wr(e){return new Re(e)}function _a(e,n,r){const i=(0,t.v6)({selectOnFocus:()=>"replace"===k(e.selectionManager).selectionBehavior()},e),a=()=>n(),{direction:l}=Ze();let c={top:0,left:0};!function Os(e,n,r,o){if(t.S$)return;const i=()=>{mn(k(e)).forEach(a=>{a&&mn(k(n)).forEach(l=>function Ps(e,n,r,o){return e.addEventListener(n,r,o),es(e.removeEventListener.bind(e,n,r,o))}(a,l,r,o))})};"function"==typeof e?(0,t.EH)(i):(0,t.gb)(i)}(()=>k(i.isVirtualized)?void 0:a(),"scroll",()=>{const m=a();m&&(c={top:m.scrollTop,left:m.scrollLeft})});const{typeSelectHandlers:s}=function Pa(e){const[n,r]=(0,t.n5)(""),[o,i]=(0,t.n5)(-1);return{typeSelectHandlers:{onKeyDown:l=>{if(k(e.isDisabled))return;const c=k(e.keyboardDelegate),s=k(e.selectionManager);if(!c.getKeyForSearch)return;const u=function Oa(e){return 1!==e.length&&/^[A-Z]/i.test(e)?"":e}(l.key);if(!u||l.ctrlKey||l.metaKey)return;" "===u&&n().trim().length>0&&(l.preventDefault(),l.stopPropagation());let f=r(v=>v+u),d=c.getKeyForSearch(f,s.focusedKey())??c.getKeyForSearch(f);null==d&&function La(e){return e.split("").every(n=>n===e[0])}(f)&&(f=f[0],d=c.getKeyForSearch(f,s.focusedKey())??c.getKeyForSearch(f)),null!=d&&(s.setFocusedKey(d),e.onTypeSelect?.(d)),clearTimeout(o()),i(window.setTimeout(()=>r(""),500))}}}}({isDisabled:()=>k(i.disallowTypeAhead),keyboardDelegate:()=>k(i.keyboardDelegate),selectionManager:()=>k(i.selectionManager)}),u=()=>k(i.orientation)??"vertical",h=()=>{const m=k(i.autoFocus);if(!m)return;const y=k(i.selectionManager),b=k(i.keyboardDelegate);let x;"first"===m&&(x=b.getFirstKey?.()),"last"===m&&(x=b.getLastKey?.());const w=y.selectedKeys();w.size&&(x=w.values().next().value),y.setFocused(!0),y.setFocusedKey(x);const C=n();C&&null==x&&!k(i.shouldUseVirtualFocus)&&le(C)};return(0,t.Rc)(()=>{i.deferAutoFocus?setTimeout(h,0):h()}),(0,t.EH)((0,t.on)([a,()=>k(i.isVirtualized),()=>k(i.selectionManager).focusedKey()],m=>{const[y,b,x]=m;if(b)x&&i.scrollToKey?.(x);else if(x&&y){const w=y.querySelector(`[data-key="${x}"]`);w&&qn(y,w)}})),{tabIndex:(0,t.To)(()=>{if(!k(i.shouldUseVirtualFocus))return null==k(i.selectionManager).focusedKey()?0:-1}),onKeyDown:m=>{W(m,s.onKeyDown),m.altKey&&"Tab"===m.key&&m.preventDefault();const y=n();if(!y?.contains(m.target))return;const b=k(i.selectionManager),x=k(i.selectOnFocus),w=q=>{null!=q&&(b.setFocusedKey(q),m.shiftKey&&"multiple"===b.selectionMode()?b.extendSelection(q):x&&!jr(m)&&b.replaceSelection(q))},C=k(i.keyboardDelegate),I=k(i.shouldFocusWrap),T=b.focusedKey();switch(m.key){case"vertical"===u()?"ArrowDown":"ArrowRight":if(C.getKeyBelow){let q;m.preventDefault(),q=null!=T?C.getKeyBelow(T):C.getFirstKey?.(),null==q&&I&&(q=C.getFirstKey?.(T)),w(q)}break;case"vertical"===u()?"ArrowUp":"ArrowLeft":if(C.getKeyAbove){let q;m.preventDefault(),q=null!=T?C.getKeyAbove(T):C.getLastKey?.(),null==q&&I&&(q=C.getLastKey?.(T)),w(q)}break;case"vertical"===u()?"ArrowLeft":"ArrowUp":if(C.getKeyLeftOf){m.preventDefault();const q="rtl"===l();let S;S=null!=T?C.getKeyLeftOf(T):q?C.getFirstKey?.():C.getLastKey?.(),w(S)}break;case"vertical"===u()?"ArrowRight":"ArrowDown":if(C.getKeyRightOf){m.preventDefault();const q="rtl"===l();let S;S=null!=T?C.getKeyRightOf(T):q?C.getLastKey?.():C.getFirstKey?.(),w(S)}break;case"Home":if(C.getFirstKey){m.preventDefault();const q=C.getFirstKey(T,pt(m));null!=q&&(b.setFocusedKey(q),pt(m)&&m.shiftKey&&"multiple"===b.selectionMode()?b.extendSelection(q):x&&b.replaceSelection(q))}break;case"End":if(C.getLastKey){m.preventDefault();const q=C.getLastKey(T,pt(m));null!=q&&(b.setFocusedKey(q),pt(m)&&m.shiftKey&&"multiple"===b.selectionMode()?b.extendSelection(q):x&&b.replaceSelection(q))}break;case"PageDown":C.getKeyPageBelow&&null!=T&&(m.preventDefault(),w(C.getKeyPageBelow(T)));break;case"PageUp":C.getKeyPageAbove&&null!=T&&(m.preventDefault(),w(C.getKeyPageAbove(T)));break;case"a":pt(m)&&"multiple"===b.selectionMode()&&!0!==k(i.disallowSelectAll)&&(m.preventDefault(),b.selectAll());break;case"Escape":m.defaultPrevented||(m.preventDefault(),k(i.disallowEmptySelection)||b.clearSelection());break;case"Tab":if(!k(i.allowsTabNavigation)){if(m.shiftKey)y.focus();else{const q=function ea(e,n,r){const o=n?.tabbable?Qs:En,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>n?.from?.contains(a)?NodeFilter.FILTER_REJECT:!a.matches(o)||!Tn(a)||r||n?.accept&&!n.accept(a)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT});return n?.from&&(i.currentNode=n.from),i}(y,{tabbable:!0});let S,A;do{A=q.lastChild(),A&&(S=A)}while(A);S&&!S.contains(document.activeElement)&&le(S)}break}}},onMouseDown:m=>{a()===m.target&&m.preventDefault()},onFocusIn:m=>{const y=k(i.selectionManager),b=k(i.keyboardDelegate),x=k(i.selectOnFocus);if(y.isFocused())m.currentTarget.contains(m.target)||y.setFocused(!1);else if(m.currentTarget.contains(m.target))if(y.setFocused(!0),null==y.focusedKey()){const w=I=>{null!=I&&(y.setFocusedKey(I),x&&y.replaceSelection(I))},C=m.relatedTarget;C&&m.currentTarget.compareDocumentPosition(C)&Node.DOCUMENT_POSITION_FOLLOWING?w(y.lastSelectedKey()??b.getLastKey?.()):w(y.firstSelectedKey()??b.getFirstKey?.())}else if(!k(i.isVirtualized)){const w=a();if(w){w.scrollTop=c.top,w.scrollLeft=c.left;const C=w.querySelector(`[data-key="${y.focusedKey()}"]`);C&&(le(C),qn(w,C))}}},onFocusOut:m=>{const y=k(i.selectionManager);m.currentTarget.contains(m.relatedTarget)||y.setFocused(!1)}}}function Qr(e,n){const r=()=>k(e.selectionManager),o=()=>k(e.key),i=()=>k(e.shouldUseVirtualFocus),a=b=>{"none"!==r().selectionMode()&&("single"===r().selectionMode()?r().isSelected(o())&&!r().disallowEmptySelection()?r().toggleSelection(o()):r().replaceSelection(o()):b?.shiftKey?r().extendSelection(o()):"toggle"===r().selectionBehavior()||pt(b)||"pointerType"in b&&"touch"===b.pointerType?r().toggleSelection(o()):r().replaceSelection(o()))},c=()=>k(e.disabled)||r().isDisabled(o()),s=()=>!c()&&r().canSelectItem(o());let u=null;const m=(0,t.To)(()=>{if(!i()&&!c())return o()===r().focusedKey()?0:-1}),y=(0,t.To)(()=>k(e.virtualized)?void 0:o());return(0,t.EH)((0,t.on)([n,o,i,()=>r().focusedKey(),()=>r().isFocused()],([b,x,w,C,I])=>{b&&x===C&&I&&!w&&document.activeElement!==b&&(e.focus?e.focus():le(b))})),{isSelected:()=>r().isSelected(o()),isDisabled:c,allowsSelection:s,tabIndex:m,dataKey:y,onPointerDown:b=>{s()&&(u=b.pointerType,"mouse"===b.pointerType&&0===b.button&&!k(e.shouldSelectOnPressUp)&&a(b))},onPointerUp:b=>{s()&&"mouse"===b.pointerType&&0===b.button&&k(e.shouldSelectOnPressUp)&&k(e.allowsDifferentPressOrigin)&&a(b)},onClick:b=>{s()&&(k(e.shouldSelectOnPressUp)&&!k(e.allowsDifferentPressOrigin)||"mouse"!==u)&&a(b)},onKeyDown:b=>{!s()||!["Enter"," "].includes(b.key)||(jr(b)?r().toggleSelection(o()):a(b))},onMouseDown:b=>{c()&&b.preventDefault()},onFocus:b=>{const x=n();i()||c()||!x||b.target===x&&r().setFocusedKey(o())}}}var Jr,Fa=class{collection;state;constructor(e,n){this.collection=e,this.state=n}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(null==e||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if("none"===this.state.selectionMode())return!1;const n=this.getKey(e);return null!=n&&this.state.selectedKeys().has(n)}isEmpty(){return 0===this.state.selectedKeys().size}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every(n=>e.has(n))}firstSelectedKey(){let e;for(const n of this.state.selectedKeys()){const r=this.collection().getItem(n);(!e||null!=r?.index&&null!=e?.index&&r.index<e.index)&&(e=r)}return e?.key}lastSelectedKey(){let e;for(const n of this.state.selectedKeys()){const r=this.collection().getItem(n);(!e||null!=r?.index&&null!=e?.index&&r.index>e.index)&&(e=r)}return e?.key}extendSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode())return void this.replaceSelection(e);const n=this.getKey(e);if(null==n)return;const r=this.state.selectedKeys(),o=r.anchorKey||n,i=new Re(r,o,n);for(const a of this.getKeyRange(o,r.currentKey||n))i.delete(a);for(const a of this.getKeyRange(n,o))this.canSelectItem(a)&&i.add(a);this.state.setSelectedKeys(i)}getKeyRange(e,n){const r=this.collection().getItem(e),o=this.collection().getItem(n);return r&&o?null!=r.index&&null!=o.index&&r.index<=o.index?this.getKeyRangeInternal(e,n):this.getKeyRangeInternal(n,e):[]}getKeyRangeInternal(e,n){const r=[];let o=e;for(;null!=o;){const i=this.collection().getItem(o);if(i&&"item"===i.type&&r.push(o),o===n)return r;o=this.collection().getKeyAfter(o)}return[]}getKey(e){const n=this.collection().getItem(e);return n?n&&"item"===n.type?n.key:null:e}toggleSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode()&&!this.isSelected(e))return void this.replaceSelection(e);const n=this.getKey(e);if(null==n)return;const r=new Re(this.state.selectedKeys());r.has(n)?r.delete(n):this.canSelectItem(n)&&(r.add(n),r.anchorKey=n,r.currentKey=n),(!this.disallowEmptySelection()||0!==r.size)&&this.state.setSelectedKeys(r)}replaceSelection(e){if("none"===this.selectionMode())return;const n=this.getKey(e);if(null==n)return;const r=this.canSelectItem(n)?new Re([n],n,n):new Re;this.state.setSelectedKeys(r)}setSelectedKeys(e){if("none"===this.selectionMode())return;const n=new Re;for(const r of e){const o=this.getKey(r);if(null!=o&&(n.add(o),"single"===this.selectionMode()))break}this.state.setSelectedKeys(n)}selectAll(){"multiple"===this.selectionMode()&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new Re)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,n){"none"!==this.selectionMode()&&("single"===this.selectionMode()?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior()||n&&"touch"===n.pointerType?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const n=this.selectedKeys();if(e.size!==n.size)return!1;for(const r of e)if(!n.has(r))return!1;for(const r of n)if(!e.has(r))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode())return!1;const n=this.collection().getItem(e);return null!=n&&!n.disabled}isDisabled(e){const n=this.collection().getItem(e);return!n||n.disabled}getAllSelectableKeys(){const e=[];return(r=>{for(;null!=r;){if(this.canSelectItem(r)){const o=this.collection().getItem(r);if(!o)continue;"item"===o.type&&e.push(r)}r=this.collection().getKeyAfter(r)}})(this.collection().getFirstKey()),e}},Xr=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(const o of e)this.keyMap.set(o.key,o);if(0===this.keyMap.size)return;let n,r=0;for(const[o,i]of this.keyMap)n?(n.nextKey=o,i.prevKey=n.key):(this.firstKey=o,i.prevKey=void 0),"item"===i.type&&(i.index=r++),n=i,n.nextKey=void 0;this.lastKey=n.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const n=[...this.getKeys()];return this.getItem(n[e])}},ce=e=>"function"==typeof e?e():e,Zr=e=>{const n=(0,t.To)(()=>{const l=ce(e.element);if(l)return getComputedStyle(l)}),r=()=>n()?.animationName??"none",[o,i]=(0,t.n5)(ce(e.show)?"present":"hidden");let a="none";return(0,t.EH)(l=>{const c=ce(e.show);return(0,t.vz)(()=>{if(l===c)return c;const s=a,u=r();c?i("present"):"none"===u||"none"===n()?.display?i("hidden"):i(!0===l&&s!==u?"hiding":"hidden")}),c}),(0,t.EH)(()=>{const l=ce(e.element);if(!l)return;const c=u=>{u.target===l&&(a=r())},s=u=>{const d=r().includes(u.animationName);u.target===l&&d&&"hiding"===o()&&i("hidden")};l.addEventListener("animationstart",c),l.addEventListener("animationcancel",s),l.addEventListener("animationend",s),(0,t.Ki)(()=>{l.removeEventListener("animationstart",c),l.removeEventListener("animationcancel",s),l.removeEventListener("animationend",s)})}),{present:()=>"present"===o()||"hiding"===o(),state:o}},Jt="data-kb-top-layer",Dn=!1,He=[];function Pt(e){return He.findIndex(n=>n.node===e)}function eo(){return He.filter(e=>e.isPointerBlocking)}function In(){return eo().length>0}function to(e){const n=Pt(function Na(){return[...eo()].slice(-1)[0]}()?.node);return Pt(e)<n}var pe={layers:He,isTopMostLayer:function Ha(e){return He[He.length-1].node===e},hasPointerBlockingLayer:In,isBelowPointerBlockingLayer:to,addLayer:function Ua(e){He.push(e)},removeLayer:function Ga(e){const n=Pt(e);n<0||He.splice(n,1)},indexOf:Pt,find:function Ra(e){return He[Pt(e)]},assignPointerEventToLayers:function Va(){for(const{node:e}of He)e.style.pointerEvents=to(e)?"none":"auto"},disableBodyPointerEvents:function Ya(e){if(In()&&!Dn){const n=Le(e);Jr=document.body.style.pointerEvents,n.body.style.pointerEvents="none",Dn=!0}},restoreBodyPointerEvents:function ja(e){if(In())return;const n=Le(e);n.body.style.pointerEvents=Jr,0===n.body.style.length&&n.body.removeAttribute("style"),Dn=!1}};Zt({},{Button:()=>Za,Root:()=>Pn});var Qa=["button","color","file","image","reset","submit"];function Pn(e){let n;const r=z({type:"button"},e),[o,i]=(0,t.rg)(r,["ref","type","disabled"]),a=Xt(()=>n,()=>"button"),l=(0,t.To)(()=>{const u=a();return null!=u&&function Xa(e){const n=e.tagName.toLowerCase();return"button"===n||!("input"!==n||!e.type)&&-1!==Qa.indexOf(e.type)}({tagName:u,type:o.type})}),c=(0,t.To)(()=>"input"===a()),s=(0,t.To)(()=>"a"===a()&&null!=n?.getAttribute("href"));return(0,t.a0)(Q,(0,t.v6)({as:"button",ref(u){const f=de(d=>n=d,o.ref);"function"==typeof f&&f(u)},get type(){return l()||c()?o.type:void 0},get role(){return l()||s()?void 0:"button"},get tabIndex(){return l()||s()||o.disabled?void 0:0},get disabled(){return l()||c()?o.disabled:void 0},get"aria-disabled"(){return!(l()||c()||!o.disabled)||void 0},get"data-disabled"(){return o.disabled?"":void 0}},i))}var Za=Pn,Ja=["top","right","bottom","left"],_e=Math.min,me=Math.max,en=Math.round,tn=Math.floor,Je=e=>({x:e,y:e}),el={left:"right",right:"left",bottom:"top",top:"bottom"},tl={start:"end",end:"start"};function On(e,n,r){return me(e,_e(n,r))}function ct(e,n){return"function"==typeof e?e(n):e}function et(e){return e.split("-")[0]}function mt(e){return e.split("-")[1]}function no(e){return"x"===e?"y":"x"}function Ln(e){return"y"===e?"height":"width"}function ut(e){return["top","bottom"].includes(et(e))?"y":"x"}function _n(e){return no(ut(e))}function Fn(e){return e.replace(/start|end/g,n=>tl[n])}function nn(e){return e.replace(/left|right|bottom|top/g,n=>el[n])}function ro(e){return"number"!=typeof e?function sl(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function rn(e){const{x:n,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:n,right:n+o,bottom:r+i,x:n,y:r}}function oo(e,n,r){let{reference:o,floating:i}=e;const a=ut(n),l=_n(n),c=Ln(l),s=et(n),u="y"===a,f=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,v=o[c]/2-i[c]/2;let g;switch(s){case"top":g={x:f,y:o.y-i.height};break;case"bottom":g={x:f,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:d};break;case"left":g={x:o.x-i.width,y:d};break;default:g={x:o.x,y:o.y}}switch(mt(n)){case"start":g[l]-=v*(r&&u?-1:1);break;case"end":g[l]+=v*(r&&u?-1:1)}return g}var al=function(){var e=(0,qe.A)(function*(n,r,o){const{placement:i="bottom",strategy:a="absolute",middleware:l=[],platform:c}=o,s=l.filter(Boolean),u=yield null==c.isRTL?void 0:c.isRTL(r);let f=yield c.getElementRects({reference:n,floating:r,strategy:a}),{x:d,y:v}=oo(f,i,u),g=i,h={},p=0;for(let m=0;m<s.length;m++){const{name:y,fn:b}=s[m],{x,y:w,data:C,reset:I}=yield b({x:d,y:v,initialPlacement:i,placement:g,strategy:a,middlewareData:h,rects:f,platform:c,elements:{reference:n,floating:r}});d=x??d,v=w??v,h={...h,[y]:{...h[y],...C}},I&&p<=50&&(p++,"object"==typeof I&&(I.placement&&(g=I.placement),I.rects&&(f=!0===I.rects?yield c.getElementRects({reference:n,floating:r,strategy:a}):I.rects),({x:d,y:v}=oo(f,g,u))),m=-1)}return{x:d,y:v,placement:g,strategy:a,middlewareData:h}});return function(r,o,i){return e.apply(this,arguments)}}();function Ot(e,n){return zn.apply(this,arguments)}function zn(){return zn=(0,qe.A)(function*(e,n){var r;void 0===n&&(n={});const{x:o,y:i,platform:a,rects:l,elements:c,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:v=!1,padding:g=0}=ct(n,e),h=ro(g),m=c[v?"floating"===d?"reference":"floating":d],y=rn(yield a.getClippingRect({element:null==(r=yield null==a.isElement?void 0:a.isElement(m))||r?m:m.contextElement||(yield null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating)),boundary:u,rootBoundary:f,strategy:s})),b="floating"===d?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,x=yield null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating),w=(yield null==a.isElement?void 0:a.isElement(x))&&(yield null==a.getScale?void 0:a.getScale(x))||{x:1,y:1},C=rn(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:b,offsetParent:x,strategy:s}):b);return{top:(y.top-C.top+h.top)/w.y,bottom:(C.bottom-y.bottom+h.bottom)/w.y,left:(y.left-C.left+h.left)/w.x,right:(C.right-y.right+h.right)/w.x}}),zn.apply(this,arguments)}function io(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function so(e){return Ja.some(n=>e[n]>=0)}function Kn(){return Kn=(0,qe.A)(function*(e,n){const{placement:r,platform:o,elements:i}=e,a=yield null==o.isRTL?void 0:o.isRTL(i.floating),l=et(r),c=mt(r),s="y"===ut(r),u=["left","top"].includes(l)?-1:1,f=a&&s?-1:1,d=ct(n,e);let{mainAxis:v,crossAxis:g,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&"number"==typeof h&&(g="end"===c?-1*h:h),s?{x:g*f,y:v*u}:{x:v*u,y:g*f}}),Kn.apply(this,arguments)}function yt(e){return ao(e)?(e.nodeName||"").toLowerCase():"#document"}function ye(e){var n;return(null==e||null==(n=e.ownerDocument)?void 0:n.defaultView)||window}function Ne(e){var n;return null==(n=(ao(e)?e.ownerDocument:e.document)||window.document)?void 0:n.documentElement}function ao(e){return e instanceof Node||e instanceof ye(e).Node}function Me(e){return e instanceof Element||e instanceof ye(e).Element}function Fe(e){return e instanceof HTMLElement||e instanceof ye(e).HTMLElement}function lo(e){return!(typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof ye(e).ShadowRoot)}function Lt(e){const{overflow:n,overflowX:r,overflowY:o,display:i}=Ae(e);return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function vl(e){return["table","td","th"].includes(yt(e))}function on(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function Bn(e){const n=Rn(),r=Me(e)?Ae(e):e;return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!n&&!!r.backdropFilter&&"none"!==r.backdropFilter||!n&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Rn(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function bt(e){return["html","body","#document"].includes(yt(e))}function Ae(e){return ye(e).getComputedStyle(e)}function sn(e){return Me(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function tt(e){if("html"===yt(e))return e;const n=e.assignedSlot||e.parentNode||lo(e)&&e.host||Ne(e);return lo(n)?n.host:n}function co(e){const n=tt(e);return bt(n)?e.ownerDocument?e.ownerDocument.body:e.body:Fe(n)&&Lt(n)?n:co(n)}function _t(e,n,r){var o;void 0===n&&(n=[]),void 0===r&&(r=!0);const i=co(e),a=i===(null==(o=e.ownerDocument)?void 0:o.body),l=ye(i);return a?n.concat(l,l.visualViewport||[],Lt(i)?i:[],l.frameElement&&r?_t(l.frameElement):[]):n.concat(i,_t(i,[],r))}function uo(e){const n=Ae(e);let r=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=Fe(e),a=i?e.offsetWidth:r,l=i?e.offsetHeight:o,c=en(r)!==a||en(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function Hn(e){return Me(e)?e:e.contextElement}function xt(e){const n=Hn(e);if(!Fe(n))return Je(1);const r=n.getBoundingClientRect(),{width:o,height:i,$:a}=uo(n);let l=(a?en(r.width):r.width)/o,c=(a?en(r.height):r.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!c||!Number.isFinite(c))&&(c=1),{x:l,y:c}}var ml=Je(0);function fo(e){const n=ye(e);return Rn()&&n.visualViewport?{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}:ml}function dt(e,n,r,o){void 0===n&&(n=!1),void 0===r&&(r=!1);const i=e.getBoundingClientRect(),a=Hn(e);let l=Je(1);n&&(o?Me(o)&&(l=xt(o)):l=xt(e));const c=function yl(e,n,r){return void 0===n&&(n=!1),!(!r||n&&r!==ye(e))&&n}(a,r,o)?fo(a):Je(0);let s=(i.left+c.x)/l.x,u=(i.top+c.y)/l.y,f=i.width/l.x,d=i.height/l.y;if(a){const v=ye(a),g=o&&Me(o)?ye(o):o;let h=v,p=h.frameElement;for(;p&&o&&g!==h;){const m=xt(p),y=p.getBoundingClientRect(),b=Ae(p),x=y.left+(p.clientLeft+parseFloat(b.paddingLeft))*m.x,w=y.top+(p.clientTop+parseFloat(b.paddingTop))*m.y;s*=m.x,u*=m.y,f*=m.x,d*=m.y,s+=x,u+=w,h=ye(p),p=h.frameElement}}return rn({width:f,height:d,x:s,y:u})}function go(e){return dt(Ne(e)).left+sn(e).scrollLeft}function ho(e,n,r){let o;if("viewport"===n)o=function $l(e,n){const r=ye(e),o=Ne(e),i=r.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){a=i.width,l=i.height;const u=Rn();(!u||u&&"fixed"===n)&&(c=i.offsetLeft,s=i.offsetTop)}return{width:a,height:l,x:c,y:s}}(e,r);else if("document"===n)o=function wl(e){const n=Ne(e),r=sn(e),o=e.ownerDocument.body,i=me(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),a=me(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+go(e);const c=-r.scrollTop;return"rtl"===Ae(o).direction&&(l+=me(n.clientWidth,o.clientWidth)-i),{width:i,height:a,x:l,y:c}}(Ne(e));else if(Me(n))o=function Cl(e,n){const r=dt(e,!0,"fixed"===n),o=r.top+e.clientTop,i=r.left+e.clientLeft,a=Fe(e)?xt(e):Je(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:o*a.y}}(n,r);else{const i=fo(e);o={...n,x:n.x-i.x,y:n.y-i.y}}return rn(o)}function vo(e,n){const r=tt(e);return!(r===n||!Me(r)||bt(r))&&("fixed"===Ae(r).position||vo(r,n))}function Sl(e,n){const r=n.get(e);if(r)return r;let o=_t(e,[],!1).filter(c=>Me(c)&&"body"!==yt(c)),i=null;const a="fixed"===Ae(e).position;let l=a?tt(e):e;for(;Me(l)&&!bt(l);){const c=Ae(l),s=Bn(l);!s&&"fixed"===c.position&&(i=null),(a?!s&&!i:!s&&"static"===c.position&&i&&["absolute","fixed"].includes(i.position)||Lt(l)&&!s&&vo(e,l))?o=o.filter(f=>f!==l):i=c,l=tt(l)}return n.set(e,o),o}function Tl(e,n,r){const o=Fe(n),i=Ne(n),a="fixed"===r,l=dt(e,!0,a,n);let c={scrollLeft:0,scrollTop:0};const s=Je(0);if(o||!o&&!a)if(("body"!==yt(n)||Lt(i))&&(c=sn(n)),o){const d=dt(n,!0,a,n);s.x=d.x+n.clientLeft,s.y=d.y+n.clientTop}else i&&(s.x=go(i));return{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}function Nn(e){return"static"===Ae(e).position}function po(e,n){return Fe(e)&&"fixed"!==Ae(e).position?n?n(e):e.offsetParent:null}function mo(e,n){const r=ye(e);if(on(e))return r;if(!Fe(e)){let i=tt(e);for(;i&&!bt(i);){if(Me(i)&&!Nn(i))return i;i=tt(i)}return r}let o=po(e,n);for(;o&&vl(o)&&Nn(o);)o=po(o,n);return o&&bt(o)&&Nn(o)&&!Bn(o)?r:o||function pl(e){let n=tt(e);for(;Fe(n)&&!bt(n);){if(Bn(n))return n;if(on(n))return null;n=tt(n)}return null}(e)||r}var ql=function(){var e=(0,qe.A)(function*(n){const r=this.getOffsetParent||mo,o=this.getDimensions,i=yield o(n.floating);return{reference:Tl(n.reference,yield r(n.floating),n.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}});return function(r){return e.apply(this,arguments)}}(),yo={convertOffsetParentRelativeRectToViewportRelativeRect:function bl(e){let{elements:n,rect:r,offsetParent:o,strategy:i}=e;const a="fixed"===i,l=Ne(o),c=!!n&&on(n.floating);if(o===l||c&&a)return r;let s={scrollLeft:0,scrollTop:0},u=Je(1);const f=Je(0),d=Fe(o);if((d||!d&&!a)&&(("body"!==yt(o)||Lt(l))&&(s=sn(o)),Fe(o))){const v=dt(o);u=xt(o),f.x=v.x+o.clientLeft,f.y=v.y+o.clientTop}return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-s.scrollLeft*u.x+f.x,y:r.y*u.y-s.scrollTop*u.y+f.y}},getDocumentElement:Ne,getClippingRect:function kl(e){let{element:n,boundary:r,rootBoundary:o,strategy:i}=e;const l=[..."clippingAncestors"===r?on(n)?[]:Sl(n,this._c):[].concat(r),o],s=l.reduce((u,f)=>{const d=ho(n,f,i);return u.top=me(d.top,u.top),u.right=_e(d.right,u.right),u.bottom=_e(d.bottom,u.bottom),u.left=me(d.left,u.left),u},ho(n,l[0],i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:mo,getElementRects:ql,getClientRects:function xl(e){return Array.from(e.getClientRects())},getDimensions:function El(e){const{width:n,height:r}=uo(e);return{width:n,height:r}},getScale:xt,isElement:Me,isRTL:function Ml(e){return"rtl"===Ae(e).direction}};var Il=function(e){return void 0===e&&(e=0),{name:"offset",options:e,fn:n=>(0,qe.A)(function*(){var r,o;const{x:i,y:a,placement:l,middlewareData:c}=n,s=yield function dl(e,n){return Kn.apply(this,arguments)}(n,e);return l===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+s.x,y:a+s.y,data:{...s,placement:l}}})()}},Un=(0,t.q6)();function Gn(){const e=(0,t.NT)(Un);if(void 0===e)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Kl=(0,t.vs)('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),Bl={top:180,right:-90,bottom:0,left:90};function Yn(e){const n=Gn(),r=z({size:30},e),[o,i]=(0,t.rg)(r,["ref","style","size"]),a=()=>n.currentPlacement().split("-")[0],l=function Rl(e){const[n,r]=(0,t.n5)();return(0,t.EH)(()=>{const o=e();o&&r(function Bs(e){return Le(e).defaultView||window}(o).getComputedStyle(o))}),n}(n.contentRef);return(0,t.a0)(Q,(0,t.v6)({as:"div",ref(v){const g=de(n.setArrowRef,o.ref);"function"==typeof g&&g(v)},"aria-hidden":"true",get style(){return jt({position:"absolute","font-size":`${o.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:l()?.getPropertyValue("background-color")||"none",stroke:l()?.getPropertyValue(`border-${a()}-color`)||"none","stroke-width":2*Number.parseInt(l()?.getPropertyValue(`border-${a()}-width`)||"0px")*(30/o.size)},o.style)}},i,{get children(){const v=Kl(),g=v.firstChild;return(0,t.gb)(()=>(0,t.Bq)(g,"transform",`rotate(${Bl[a()]} 15 15) translate(0 2)`)),v}}))}function xo(e){const{x:n=0,y:r=0,width:o=0,height:i=0}=e??{};if("function"==typeof DOMRect)return new DOMRect(n,r,o,i);const a={x:n,y:r,width:o,height:i,top:r,right:n+o,bottom:r+i,left:n};return{...a,toJSON:()=>a}}function Ul(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Gl={top:"bottom",right:"left",bottom:"top",left:"right"},wo=Object.assign(function Yl(e){const n=z({getAnchorRect:g=>g?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[r,o]=(0,t.n5)(),[i,a]=(0,t.n5)(),[l,c]=(0,t.n5)(n.placement),s=()=>function Nl(e,n){return{contextElement:e,getBoundingClientRect:()=>{const o=n(e);return o?xo(o):e?e.getBoundingClientRect():xo()}}}(n.anchorRef?.(),n.getAnchorRect),{direction:u}=Ze();function f(){return d.apply(this,arguments)}function d(){return d=(0,qe.A)(function*(){const g=s(),h=r(),p=i();if(!g||!h)return;const m=(p?.clientHeight||0)/2,y="number"==typeof n.gutter?n.gutter+m:n.gutter??m;h.style.setProperty("--kb-popper-content-overflow-padding",`${n.overflowPadding}px`),g.getBoundingClientRect();const b=[Il(({placement:T})=>{const q=!!T.split("-")[1];return{mainAxis:y,crossAxis:q?void 0:n.shift,alignmentAxis:n.shift}})];if(!1!==n.flip){const T="string"==typeof n.flip?n.flip.split(" "):void 0;if(void 0!==T&&!T.every(Ul))throw new Error("`flip` expects a spaced-delimited list of placements");b.push(function(e){return void 0===e&&(e={}),{name:"flip",options:e,fn:n=>(0,qe.A)(function*(){var r,o;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:s,elements:u}=n,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:v,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0,...m}=ct(e,n);if(null!=(r=a.arrow)&&r.alignmentOffset)return{};const y=et(i),b=ut(c),x=et(c)===c,w=yield null==s.isRTL?void 0:s.isRTL(u.floating),C=v||(x||!p?[nn(c)]:function rl(e){const n=nn(e);return[Fn(e),n,Fn(n)]}(c)),I="none"!==h;!v&&I&&C.push(...function il(e,n,r,o){const i=mt(e);let a=function ol(e,n,r){const o=["left","right"],i=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return r?n?i:o:n?o:i;case"left":case"right":return n?a:l;default:return[]}}(et(e),"start"===r,o);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(Fn)))),a}(c,p,h,w));const T=[c,...C],q=yield Ot(n,m),S=[];let A=(null==(o=a.flip)?void 0:o.overflows)||[];if(f&&S.push(q[y]),d){const R=function nl(e,n,r){void 0===r&&(r=!1);const o=mt(e),i=_n(e),a=Ln(i);let l="x"===i?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=nn(l)),[l,nn(l)]}(i,l,w);S.push(q[R[0]],q[R[1]])}if(A=[...A,{placement:i,overflows:S}],!S.every(R=>R<=0)){var _,O;const R=((null==(_=a.flip)?void 0:_.index)||0)+1,X=T[R];if(X)return{data:{index:R,overflows:A},reset:{placement:X}};let V=null==(O=A.filter(U=>U.overflows[0]<=0).sort((U,Y)=>U.overflows[1]-Y.overflows[1])[0])?void 0:O.placement;if(!V)switch(g){case"bestFit":{var N;const U=null==(N=A.filter(Y=>{if(I){const Z=ut(Y.placement);return Z===b||"y"===Z}return!0}).map(Y=>[Y.placement,Y.overflows.filter(Z=>Z>0).reduce((Z,re)=>Z+re,0)]).sort((Y,Z)=>Y[1]-Z[1])[0])?void 0:N[0];U&&(V=U);break}case"initialPlacement":V=c}if(i!==V)return{reset:{placement:V}}}return{}})()}}({padding:n.overflowPadding,fallbackPlacements:T}))}(n.slide||n.overlap)&&b.push(function(e){return void 0===e&&(e={}),{name:"shift",options:e,fn:n=>(0,qe.A)(function*(){const{x:r,y:o,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:m=>{let{x:y,y:b}=m;return{x:y,y:b}}},...s}=ct(e,n),u={x:r,y:o},f=yield Ot(n,s),d=ut(et(i)),v=no(d);let g=u[v],h=u[d];a&&(g=On(g+f["y"===v?"top":"left"],g,g-f["y"===v?"bottom":"right"])),l&&(h=On(h+f["y"===d?"top":"left"],h,h-f["y"===d?"bottom":"right"]));const p=c.fn({...n,[v]:g,[d]:h});return{...p,data:{x:p.x-r,y:p.y-o}}})()}}({mainAxis:n.slide,crossAxis:n.overlap,padding:n.overflowPadding})),b.push(function(e){return void 0===e&&(e={}),{name:"size",options:e,fn:n=>(0,qe.A)(function*(){const{placement:r,rects:o,platform:i,elements:a}=n,{apply:l=()=>{},...c}=ct(e,n),s=yield Ot(n,c),u=et(r),f=mt(r),d="y"===ut(r),{width:v,height:g}=o.floating;let h,p;"top"===u||"bottom"===u?(h=u,p=f===((yield null==i.isRTL?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(p=u,h="end"===f?"top":"bottom");const m=g-s.top-s.bottom,y=v-s.left-s.right,b=_e(g-s[h],m),x=_e(v-s[p],y),w=!n.middlewareData.shift;let C=b,I=x;if(d?I=f||w?_e(x,y):y:C=f||w?_e(b,m):m,w&&!f){const q=me(s.left,0),S=me(s.right,0),A=me(s.top,0),_=me(s.bottom,0);d?I=v-2*(0!==q||0!==S?q+S:me(s.left,s.right)):C=g-2*(0!==A||0!==_?A+_:me(s.top,s.bottom))}yield l({...n,availableWidth:I,availableHeight:C});const T=yield i.getDimensions(a.floating);return v!==T.width||g!==T.height?{reset:{rects:!0}}:{}})()}}({padding:n.overflowPadding,apply({availableWidth:T,availableHeight:q,rects:S}){const A=Math.round(S.reference.width);T=Math.floor(T),q=Math.floor(q),h.style.setProperty("--kb-popper-anchor-width",`${A}px`),h.style.setProperty("--kb-popper-content-available-width",`${T}px`),h.style.setProperty("--kb-popper-content-available-height",`${q}px`),n.sameWidth&&(h.style.width=`${A}px`),n.fitViewport&&(h.style.maxWidth=`${T}px`,h.style.maxHeight=`${q}px`)}})),n.hideWhenDetached&&b.push(function(e){return void 0===e&&(e={}),{name:"hide",options:e,fn:n=>(0,qe.A)(function*(){const{rects:r}=n,{strategy:o="referenceHidden",...i}=ct(e,n);switch(o){case"referenceHidden":{const l=io(yield Ot(n,{...i,elementContext:"reference"}),r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:so(l)}}}case"escaped":{const l=io(yield Ot(n,{...i,altBoundary:!0}),r.floating);return{data:{escapedOffsets:l,escaped:so(l)}}}default:return{}}})()}}({padding:n.detachedPadding})),p&&b.push((e=>({name:"arrow",options:e,fn:n=>(0,qe.A)(function*(){const{x:r,y:o,placement:i,rects:a,platform:l,elements:c,middlewareData:s}=n,{element:u,padding:f=0}=ct(e,n)||{};if(null==u)return{};const d=ro(f),v={x:r,y:o},g=_n(i),h=Ln(g),p=yield l.getDimensions(u),m="y"===g,y=m?"top":"left",b=m?"bottom":"right",x=m?"clientHeight":"clientWidth",w=a.reference[h]+a.reference[g]-v[g]-a.floating[h],C=v[g]-a.reference[g],I=yield null==l.getOffsetParent?void 0:l.getOffsetParent(u);let T=I?I[x]:0;(!T||!(yield null==l.isElement?void 0:l.isElement(I)))&&(T=c.floating[x]||a.floating[h]);const q=w/2-C/2,S=T/2-p[h]/2-1,A=_e(d[y],S),_=_e(d[b],S),O=A,N=T-p[h]-_,R=T/2-p[h]/2+q,X=On(O,R,N),V=!s.arrow&&null!=mt(i)&&R!==X&&a.reference[h]/2-(R<O?A:_)-p[h]/2<0,U=V?R<O?R-O:R-N:0;return{[g]:v[g]+U,data:{[g]:X,centerOffset:R-X-U,...V&&{alignmentOffset:U}},reset:V}})()}))({element:p,padding:n.arrowPadding}));const x=yield((e,n,r)=>{const i={platform:yo,...r},a={...i.platform,_c:new Map};return al(e,n,{...i,platform:a})})(g,h,{placement:n.placement,strategy:"absolute",middleware:b,platform:{...yo,isRTL:()=>"rtl"===u()}});if(c(x.placement),n.onCurrentPlacementChange?.(x.placement),!h)return;h.style.setProperty("--kb-popper-content-transform-origin",function Vl(e,n){const[r,o]=e.split("-"),i=Gl[r];return o?"left"===r||"right"===r?`${i} ${"start"===o?"top":"bottom"}`:"start"===o?`${i} ${"rtl"===n?"right":"left"}`:`${i} ${"rtl"===n?"left":"right"}`:`${i} center`}(x.placement,u()));const w=Math.round(x.x),C=Math.round(x.y);let I;if(n.hideWhenDetached&&(I=x.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(h.style,{top:"0",left:"0",transform:`translate3d(${w}px, ${C}px, 0)`,visibility:I}),p&&x.middlewareData.arrow){const{x:T,y:q}=x.middlewareData.arrow,S=x.placement.split("-")[0];Object.assign(p.style,{left:null!=T?`${T}px`:"",top:null!=q?`${q}px`:"",[S]:"100%"})}}),d.apply(this,arguments)}return(0,t.EH)(()=>{const g=s(),h=r();if(!g||!h)return;const p=function Dl(e,n,r,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,u=Hn(e),f=i||a?[...u?_t(u):[],..._t(n)]:[];f.forEach(y=>{i&&y.addEventListener("scroll",r,{passive:!0}),a&&y.addEventListener("resize",r)});const d=u&&c?function Al(e,n){let o,r=null;const i=Ne(e);function a(){var c;clearTimeout(o),null==(c=r)||c.disconnect(),r=null}return function l(c,s){void 0===c&&(c=!1),void 0===s&&(s=1),a();const{left:u,top:f,width:d,height:v}=e.getBoundingClientRect();if(c||n(),!d||!v)return;const b={rootMargin:-tn(f)+"px "+-tn(i.clientWidth-(u+d))+"px "+-tn(i.clientHeight-(f+v))+"px "+-tn(u)+"px",threshold:me(0,_e(1,s))||1};let x=!0;function w(C){const I=C[0].intersectionRatio;if(I!==s){if(!x)return l();I?l(!1,I):o=setTimeout(()=>{l(!1,1e-7)},1e3)}x=!1}try{r=new IntersectionObserver(w,{...b,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,b)}r.observe(e)}(!0),a}(u,r):null;let v=-1,g=null;l&&(g=new ResizeObserver(y=>{let[b]=y;b&&b.target===u&&g&&(g.unobserve(n),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var x;null==(x=g)||x.observe(n)})),r()}),u&&!s&&g.observe(u),g.observe(n));let h,p=s?dt(e):null;return s&&function m(){const y=dt(e);p&&(y.x!==p.x||y.y!==p.y||y.width!==p.width||y.height!==p.height)&&r(),p=y,h=requestAnimationFrame(m)}(),r(),()=>{var y;f.forEach(b=>{i&&b.removeEventListener("scroll",r),a&&b.removeEventListener("resize",r)}),d?.(),null==(y=g)||y.disconnect(),g=null,s&&cancelAnimationFrame(h)}}(g,h,f,{elementResize:"function"==typeof ResizeObserver});(0,t.Ki)(p)}),(0,t.EH)(()=>{const g=r(),h=n.contentRef?.();!g||!h||queueMicrotask(()=>{g.style.zIndex=getComputedStyle(h).zIndex})}),(0,t.a0)(Un.Provider,{value:{currentPlacement:l,contentRef:()=>n.contentRef?.(),setPositionerRef:o,setArrowRef:a},get children(){return n.children}})},{Arrow:Yn,Context:Un,usePopperContext:Gn,Positioner:function Hl(e){const n=Gn(),[r,o]=(0,t.rg)(e,["ref","style"]);return(0,t.a0)(Q,(0,t.v6)({as:"div",ref(i){const a=de(n.setPositionerRef,r.ref);"function"==typeof a&&a(i)},"data-popper-positioner":"",get style(){return jt({position:"absolute",top:0,left:0,"min-width":"max-content"},r.style)}},o))}}),$o="interactOutside.pointerDownOutside",Co="interactOutside.focusOutside",So=(0,t.q6)();function Xl(e){let n;const r=function Ql(){return(0,t.NT)(So)}(),[o,i]=(0,t.rg)(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),a=new Set([]);return function Wl(e,n){let r,o=na;const i=()=>Le(n()),a=d=>e.onPointerDownOutside?.(d),l=d=>e.onFocusOutside?.(d),c=d=>e.onInteractOutside?.(d),s=d=>{const v=d.target;return!(!(v instanceof HTMLElement&&!v.closest(`[${Jt}]`)&&we(i(),v))||we(n(),v)||e.shouldExcludeElement?.(v))},u=d=>{function v(){const g=n(),h=d.target;if(!g||!h||!s(d))return;const p=ie([a,c]);h.addEventListener($o,p,{once:!0});const m=new CustomEvent($o,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:2===d.button||Gs(d)&&0===d.button}});h.dispatchEvent(m)}"touch"===d.pointerType?(i().removeEventListener("click",v),o=v,i().addEventListener("click",v,{once:!0})):v()},f=d=>{const v=n(),g=d.target;if(!v||!g||!s(d))return;const h=ie([l,c]);g.addEventListener(Co,h,{once:!0});const p=new CustomEvent(Co,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:!1}});g.dispatchEvent(p)};(0,t.EH)(()=>{t.S$||k(e.isDisabled)||(r=window.setTimeout(()=>{i().addEventListener("pointerdown",u,!0)},0),i().addEventListener("focusin",f,!0),(0,t.Ki)(()=>{window.clearTimeout(r),i().removeEventListener("click",o),i().removeEventListener("pointerdown",u,!0),i().removeEventListener("focusin",f,!0)}))})}({shouldExcludeElement:d=>!!n&&(o.excludedElements?.some(v=>we(v(),d))||[...a].some(v=>we(v,d))),onPointerDownOutside:d=>{!n||pe.isBelowPointerBlockingLayer(n)||!o.bypassTopMostLayerCheck&&!pe.isTopMostLayer(n)||(o.onPointerDownOutside?.(d),o.onInteractOutside?.(d),d.defaultPrevented||o.onDismiss?.())},onFocusOutside:d=>{o.onFocusOutside?.(d),o.onInteractOutside?.(d),d.defaultPrevented||o.onDismiss?.()}},()=>n),function jl(e){const n=r=>{r.key===Sn.Escape&&e.onEscapeKeyDown?.(r)};(0,t.EH)(()=>{if(t.S$||k(e.isDisabled))return;const r=e.ownerDocument?.()??Le();r.addEventListener("keydown",n),(0,t.Ki)(()=>{r.removeEventListener("keydown",n)})})}({ownerDocument:()=>Le(n),onEscapeKeyDown:d=>{!n||!pe.isTopMostLayer(n)||(o.onEscapeKeyDown?.(d),!d.defaultPrevented&&o.onDismiss&&(d.preventDefault(),o.onDismiss()))}}),(0,t.Rc)(()=>{if(!n)return;pe.addLayer({node:n,isPointerBlocking:o.disableOutsidePointerEvents,dismiss:o.onDismiss});const d=r?.registerNestedLayer(n);pe.assignPointerEventToLayers(),pe.disableBodyPointerEvents(n),(0,t.Ki)(()=>{n&&(pe.removeLayer(n),d?.(),pe.assignPointerEventToLayers(),pe.restoreBodyPointerEvents(n))})}),(0,t.EH)((0,t.on)([()=>n,()=>o.disableOutsidePointerEvents],([d,v])=>{if(!d)return;const g=pe.find(d);g&&g.isPointerBlocking!==v&&(g.isPointerBlocking=v,pe.assignPointerEventToLayers()),v&&pe.disableBodyPointerEvents(d),(0,t.Ki)(()=>{pe.restoreBodyPointerEvents(d)})},{defer:!0})),(0,t.a0)(So.Provider,{value:{registerNestedLayer:d=>{a.add(d);const v=r?.registerNestedLayer(d);return()=>{a.delete(d),v?.()}}},get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div",ref(d){const v=de(g=>n=g,o.ref);"function"==typeof v&&v(d)}},i))}})}function ko(e={}){const[n,r]=Br({value:()=>k(e.open),defaultValue:()=>!!k(e.defaultOpen),onChange:l=>e.onOpenChange?.(l)}),o=()=>{r(!0)},i=()=>{r(!1)};return{isOpen:n,setIsOpen:r,open:o,close:i,toggle:()=>{n()?i():o()}}}var Ce={};Zt(Ce,{Description:()=>zr,ErrorMessage:()=>Kr,Item:()=>Mo,ItemControl:()=>Ao,ItemDescription:()=>Do,ItemIndicator:()=>Io,ItemInput:()=>Po,ItemLabel:()=>Oo,Label:()=>Lo,RadioGroup:()=>Zl,Root:()=>_o});var Eo=(0,t.q6)();function To(){const e=(0,t.NT)(Eo);if(void 0===e)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var qo=(0,t.q6)();function Ft(){const e=(0,t.NT)(qo);if(void 0===e)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Mo(e){const n=At(),r=To(),i=z({id:`${n.generateId("item")}-${(0,t.Ds)()}`},e),[a,l]=(0,t.rg)(i,["value","disabled","onPointerDown"]),[c,s]=(0,t.n5)(),[u,f]=(0,t.n5)(),[d,v]=(0,t.n5)(),[g,h]=(0,t.n5)(),[p,m]=(0,t.n5)(!1),y=(0,t.To)(()=>r.isSelectedValue(a.value)),b=(0,t.To)(()=>a.disabled||n.isDisabled()||!1),x=I=>{W(I,a.onPointerDown),p()&&I.preventDefault()},w=(0,t.To)(()=>({...n.dataset(),"data-disabled":b()?"":void 0,"data-checked":y()?"":void 0})),C={value:()=>a.value,dataset:w,isSelected:y,isDisabled:b,inputId:c,labelId:u,descriptionId:d,inputRef:g,select:()=>r.setSelectedValue(a.value),generateId:Tt(()=>l.id),registerInput:$e(s),registerLabel:$e(f),registerDescription:$e(v),setIsFocused:m,setInputRef:h};return(0,t.a0)(qo.Provider,{value:C,get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div",role:"group",onPointerDown:x},w,l))}})}function Ao(e){const n=Ft(),r=z({id:n.generateId("control")},e),[o,i]=(0,t.rg)(r,["onClick","onKeyDown"]);return(0,t.a0)(Q,(0,t.v6)({as:"div",onClick:c=>{W(c,o.onClick),n.select(),n.inputRef()?.focus()},onKeyDown:c=>{W(c,o.onKeyDown),c.key===Sn.Space&&(n.select(),n.inputRef()?.focus())}},()=>n.dataset(),i))}function Do(e){const n=Ft(),r=z({id:n.generateId("description")},e);return(0,t.EH)(()=>(0,t.Ki)(n.registerDescription(r.id))),(0,t.a0)(Q,(0,t.v6)({as:"div"},()=>n.dataset(),r))}function Io(e){const n=Ft(),r=z({id:n.generateId("indicator")},e),[o,i]=(0,t.rg)(r,["ref","forceMount"]),[a,l]=(0,t.n5)(),{present:c}=Zr({show:()=>o.forceMount||n.isSelected(),element:()=>a()??null});return(0,t.a0)(t.wv,{get when(){return c()},get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div",ref(s){const u=de(l,o.ref);"function"==typeof u&&u(s)}},()=>n.dataset(),i))}})}function Po(e){const n=At(),r=To(),o=Ft(),i=z({id:o.generateId("input")},e),[a,l]=(0,t.rg)(i,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),[u,f]=(0,t.n5)(!1);return(0,t.EH)((0,t.on)([()=>o.isSelected(),()=>o.value()],h=>{if(!h[0]&&h[1]===o.value())return;f(!0);const p=o.inputRef();p?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),p?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),(0,t.EH)(()=>(0,t.Ki)(o.registerInput(l.id))),(0,t.a0)(Q,(0,t.v6)({as:"input",ref(h){const p=de(o.setInputRef,a.ref);"function"==typeof p&&p(h)},type:"radio",get name(){return n.name()},get value(){return o.value()},get checked(){return o.isSelected()},get required(){return n.isRequired()},get disabled(){return o.isDisabled()},get readonly(){return n.isReadOnly()},get style(){return jt({...Lr},a.style)},get"aria-labelledby"(){return[a["aria-labelledby"],o.labelId(),null!=a["aria-labelledby"]&&null!=l["aria-label"]?l.id:void 0].filter(Boolean).join(" ")||void 0},get"aria-describedby"(){return[a["aria-describedby"],o.descriptionId(),r.ariaDescribedBy()].filter(Boolean).join(" ")||void 0},onChange:h=>{W(h,a.onChange),h.stopPropagation(),u()||(r.setSelectedValue(o.value()),h.target.checked=o.isSelected()),f(!1)},onFocus:h=>{W(h,a.onFocus),o.setIsFocused(!0)},onBlur:h=>{W(h,a.onBlur),o.setIsFocused(!1)}},()=>o.dataset(),l))}function Oo(e){const n=Ft(),r=z({id:n.generateId("label")},e);return(0,t.EH)(()=>(0,t.Ki)(n.registerLabel(r.id))),(0,t.a0)(Q,(0,t.v6)({as:"label",get for(){return n.inputId()}},()=>n.dataset(),r))}function Lo(e){return(0,t.a0)(aa,(0,t.v6)({as:"span"},e))}function _o(e){let n;const o=z({id:`radiogroup-${(0,t.Ds)()}`,orientation:"vertical"},e),[i,a,l]=(0,t.rg)(o,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],ia),[c,s]=Dt({value:()=>i.value,defaultValue:()=>i.defaultValue,onChange:h=>i.onChange?.(h)}),{formControlContext:u}=function sa(e){const r=z({id:`form-control-${(0,t.Ds)()}`},e),[o,i]=(0,t.n5)(),[a,l]=(0,t.n5)(),[c,s]=(0,t.n5)(),[u,f]=(0,t.n5)();return{formControlContext:{name:()=>k(r.name)??k(r.id),dataset:(0,t.To)(()=>({"data-valid":"valid"===k(r.validationState)?"":void 0,"data-invalid":"invalid"===k(r.validationState)?"":void 0,"data-required":k(r.required)?"":void 0,"data-disabled":k(r.disabled)?"":void 0,"data-readonly":k(r.readOnly)?"":void 0})),validationState:()=>k(r.validationState),isRequired:()=>k(r.required),isDisabled:()=>k(r.disabled),isReadOnly:()=>k(r.readOnly),labelId:o,fieldId:a,descriptionId:c,errorMessageId:u,getAriaLabelledBy:(p,m,y)=>{const b=null!=y||null!=o();return[y,o(),b&&null!=m?p:void 0].filter(Boolean).join(" ")||void 0},getAriaDescribedBy:p=>[c(),u(),p].filter(Boolean).join(" ")||void 0,generateId:Tt(()=>k(r.id)),registerLabel:$e(i),registerField:$e(l),registerDescription:$e(s),registerErrorMessage:$e(f)}}}(a);!function la(e,n){(0,t.EH)((0,t.on)(e,r=>{if(null==r)return;const o=function ca(e){return function ua(e){return e.matches("textarea, input, select, button")}(e)?e.form:e.closest("form")}(r);null!=o&&(o.addEventListener("reset",n,{passive:!0}),(0,t.Ki)(()=>{o.removeEventListener("reset",n)}))}))}(()=>n,()=>s(i.defaultValue??""));const d=()=>u.getAriaDescribedBy(i["aria-describedby"]),v=h=>h===c(),g={ariaDescribedBy:d,isSelectedValue:v,setSelectedValue:h=>{if(!u.isReadOnly()&&!u.isDisabled()&&(s(h),n))for(const p of n.querySelectorAll("[type='radio']"))p.checked=v(p.value)}};return(0,t.a0)(Fr.Provider,{value:u,get children(){return(0,t.a0)(Eo.Provider,{value:g,get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div",ref(h){const p=de(m=>n=m,i.ref);"function"==typeof p&&p(h)},role:"radiogroup",get id(){return k(a.id)},get"aria-invalid"(){return"invalid"===u.validationState()||void 0},get"aria-required"(){return u.isRequired()||void 0},get"aria-disabled"(){return u.isDisabled()||void 0},get"aria-readonly"(){return u.isReadOnly()||void 0},get"aria-orientation"(){return i.orientation},get"aria-labelledby"(){return u.getAriaLabelledBy(k(a.id),l["aria-label"],i["aria-labelledby"])},get"aria-describedby"(){return d()}},()=>u.dataset(),l))}})}})}var Zl=Object.assign(_o,{Description:zr,ErrorMessage:Kr,Item:Mo,ItemControl:Ao,ItemDescription:Do,ItemIndicator:Io,ItemInput:Po,ItemLabel:Oo,Label:Lo}),Jl=class{collection;ref;collator;constructor(e,n,r){this.collection=e,this.ref=n,this.collator=r}getKeyBelow(e){let n=this.collection().getKeyAfter(e);for(;null!=n;){const r=this.collection().getItem(n);if(r&&"item"===r.type&&!r.disabled)return n;n=this.collection().getKeyAfter(n)}}getKeyAbove(e){let n=this.collection().getKeyBefore(e);for(;null!=n;){const r=this.collection().getItem(n);if(r&&"item"===r.type&&!r.disabled)return n;n=this.collection().getKeyBefore(n)}}getFirstKey(){let e=this.collection().getFirstKey();for(;null!=e;){const n=this.collection().getItem(e);if(n&&"item"===n.type&&!n.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;null!=e;){const n=this.collection().getItem(e);if(n&&"item"===n.type&&!n.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){const n=this.ref?.();let r=this.getItem(e);if(!n||!r)return;const o=Math.max(0,r.offsetTop+r.offsetHeight-n.offsetHeight);let i=e;for(;i&&r&&r.offsetTop>o;)i=this.getKeyAbove(i),r=null!=i?this.getItem(i):null;return i}getKeyPageBelow(e){const n=this.ref?.();let r=this.getItem(e);if(!n||!r)return;const o=Math.min(n.scrollHeight,r.offsetTop-r.offsetHeight+n.offsetHeight);let i=e;for(;i&&r&&r.offsetTop<o;)i=this.getKeyBelow(i),r=null!=i?this.getItem(i):null;return i}getKeyForSearch(e,n){const r=this.collator?.();if(!r)return;let o=null!=n?this.getKeyBelow(n):this.getFirstKey();for(;null!=o;){const i=this.collection().getItem(o);if(i){const a=i.textValue.slice(0,e.length);if(i.textValue&&0===r.compare(a,e))return o}o=this.getKeyBelow(o)}}};var jn="focusScope.autoFocusOnMount",Wn="focusScope.autoFocusOnUnmount",Fo={bubbles:!1,cancelable:!0},zo={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=Cn(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=Cn(this.stack,e),this.active()?.resume()}};function tc(e,n){const[r,o]=(0,t.n5)(!1),i={pause(){o(!0)},resume(){o(!1)}};let a=null;const l=h=>e.onMountAutoFocus?.(h),c=h=>e.onUnmountAutoFocus?.(h),s=()=>Le(n()),u=()=>{const h=s().createElement("span");return h.setAttribute("data-focus-trap",""),h.tabIndex=0,Object.assign(h.style,Lr),h},f=()=>{const h=n();return h?qr(h,!0).filter(p=>!p.hasAttribute("data-focus-trap")):[]},d=()=>{const h=f();return h.length>0?h[0]:null};(0,t.EH)(()=>{if(t.S$)return;const h=n();if(!h)return;zo.add(i);const p=qt(h);if(!we(h,p)){const y=new CustomEvent(jn,Fo);h.addEventListener(jn,l),h.dispatchEvent(y),y.defaultPrevented||setTimeout(()=>{le(d()),qt(h)===p&&le(h)},0)}(0,t.Ki)(()=>{h.removeEventListener(jn,l),setTimeout(()=>{const y=new CustomEvent(Wn,Fo);(()=>{const h=n();if(!h)return!1;const p=qt(h);return!(!p||we(h,p))&&Ar(p)})()&&y.preventDefault(),h.addEventListener(Wn,c),h.dispatchEvent(y),y.defaultPrevented||le(p??s().body),h.removeEventListener(Wn,c),zo.remove(i)},0)})}),(0,t.EH)(()=>{if(t.S$)return;const h=n();if(!h||!k(e.trapFocus)||r())return;const p=y=>{const b=y.target;b?.closest(`[${Jt}]`)||(we(h,b)?a=b:le(a))},m=y=>{const x=y.relatedTarget??qt(h);x?.closest(`[${Jt}]`)||we(h,x)||le(a)};s().addEventListener("focusin",p),s().addEventListener("focusout",m),(0,t.Ki)(()=>{s().removeEventListener("focusin",p),s().removeEventListener("focusout",m)})}),(0,t.EH)(()=>{if(t.S$)return;const h=n();if(!h||!k(e.trapFocus)||r())return;const p=u();h.insertAdjacentElement("afterbegin",p);const m=u();function y(x){const w=d(),C=(()=>{const h=f();return h.length>0?h[h.length-1]:null})();le(x.relatedTarget===w?C:w)}h.insertAdjacentElement("beforeend",m),p.addEventListener("focusin",y),m.addEventListener("focusin",y);const b=new MutationObserver(x=>{for(const w of x)w.previousSibling===m&&(m.remove(),h.insertAdjacentElement("beforeend",m)),w.nextSibling===p&&(p.remove(),h.insertAdjacentElement("afterbegin",p))});b.observe(h,{childList:!0,subtree:!1}),(0,t.Ki)(()=>{p.removeEventListener("focusin",y),m.removeEventListener("focusin",y),p.remove(),m.remove(),b.disconnect()})})}var nc="data-live-announcer";var zt=new WeakMap,Se=[],an=new Map,Ko=e=>{(0,t.EH)(()=>{const n=ce(e.style)??{},r=ce(e.properties)??[],o={};for(const a in n)o[a]=e.element.style[a];const i=an.get(e.key);i?i.activeCount++:an.set(e.key,{activeCount:1,originalStyles:o,properties:r.map(a=>a.key)}),Object.assign(e.element.style,e.style);for(const a of r)e.element.style.setProperty(a.key,a.value);(0,t.Ki)(()=>{const a=an.get(e.key);if(a){if(1!==a.activeCount)return void a.activeCount--;an.delete(e.key);for(const[l,c]of Object.entries(a.originalStyles))e.element.style[l]=c;for(const l of a.properties)e.element.style.removeProperty(l);0===e.element.style.length&&e.element.removeAttribute("style"),e.cleanup?.()}})})},sc=(e,n)=>{switch(n){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},ac=(e,n)=>{const r=getComputedStyle(e),o="x"===n?r.overflowX:r.overflowY;return"auto"===o||"scroll"===o||"HTML"===e.tagName&&"visible"===o},[Bo,Ro]=(0,t.n5)([]),Ho=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],No=(e,n,r,o)=>{const i=null!==o&&Qn(o,e),[a,l]=((e,n,r)=>{const o="x"===n&&"rtl"===window.getComputedStyle(e).direction?-1:1;let i=e,a=0,l=0,c=!1;do{const[s,u,f]=sc(i,n),d=f-s-o*u;(0!==u||0!==d)&&ac(i,n)&&(a+=d,l+=u),i===(r??document.documentElement)?c=!0:i=i._$host??i.parentElement}while(i&&!c);return[a,l]})(e,n,i?o:void 0);return!(r>0&&Math.abs(a)<=1||r<0&&Math.abs(l)<1)},Qn=(e,n)=>{if(e.contains(n))return!0;let r=n;for(;r;){if(r===e)return!0;r=r._$host??r.parentElement}return!1},gc=e=>{const n=(0,t.v6)({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),r=(0,t.Ds)();let o=[0,0],i=null,a=null;(0,t.EH)(()=>{ce(n.enabled)&&(Ro(u=>[...u,r]),(0,t.Ki)(()=>{Ro(u=>u.filter(f=>f!==r))}))}),(0,t.EH)(()=>{if(!ce(n.enabled)||!ce(n.hideScrollbar))return;const{body:u}=document,f=window.innerWidth-u.offsetWidth;if(ce(n.preventScrollbarShift)){const d={overflow:"hidden"},v=[];f>0&&("padding"===ce(n.preventScrollbarShiftMode)?d.paddingRight=`calc(${window.getComputedStyle(u).paddingRight} + ${f}px)`:d.marginRight=`calc(${window.getComputedStyle(u).marginRight} + ${f}px)`,v.push({key:"--scrollbar-width",value:`${f}px`}));const g=window.scrollY,h=window.scrollX;Ko({key:"prevent-scroll",element:u,style:d,properties:v,cleanup:()=>{ce(n.restoreScrollPosition)&&f>0&&window.scrollTo(h,g)}})}else Ko({key:"prevent-scroll",element:u,style:{overflow:"hidden"}})}),(0,t.EH)(()=>{!(e=>Bo().indexOf(e)===Bo().length-1)(r)||!ce(n.enabled)||(document.addEventListener("wheel",c,{passive:!1}),document.addEventListener("touchstart",l,{passive:!1}),document.addEventListener("touchmove",s,{passive:!1}),(0,t.Ki)(()=>{document.removeEventListener("wheel",c),document.removeEventListener("touchstart",l),document.removeEventListener("touchmove",s)}))});const l=u=>{o=Ho(u),i=null,a=null},c=u=>{const f=u.target,d=ce(n.element),v=(e=>[e.deltaX,e.deltaY])(u),g=Math.abs(v[0])>Math.abs(v[1])?"x":"y",p=No(f,g,"x"===g?v[0]:v[1],d);let m;m=!d||!Qn(d,f)||!p,m&&u.cancelable&&u.preventDefault()},s=u=>{const f=ce(n.element),d=u.target;let v;if(2===u.touches.length)v=!ce(n.allowPinchZoom);else{if(null==i||null===a){const g=Ho(u).map((p,m)=>o[m]-p),h=Math.abs(g[0])>Math.abs(g[1])?"x":"y";i=h,a="x"===h?g[0]:g[1]}if("range"===d.type)v=!1;else{const g=No(d,i,a,f);v=!f||!Qn(f,d)||!g}}v&&u.cancelable&&u.preventDefault()}},Uo=(0,t.q6)();function Go(){return(0,t.NT)(Uo)}function Ue(){const e=Go();if(void 0===e)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var Vo=(0,t.q6)();function Xn(){const e=(0,t.NT)(Vo);if(void 0===e)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var Yo=(0,t.q6)();function ze(){const e=(0,t.NT)(Yo);if(void 0===e)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Zn(e){let n;const r=ze(),o=Ue(),i=z({id:r.generateId(`item-${(0,t.Ds)()}`)},e),[a,l]=(0,t.rg)(i,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[c,s]=(0,t.n5)(),[u,f]=(0,t.n5)(),[d,v]=(0,t.n5)(),g=()=>o.listState().selectionManager(),h=()=>l.id,m=()=>{a.onSelect?.(),a.closeOnSelect&&setTimeout(()=>{o.close(!0)})};!function wa(e){const n=function ha(){const e=Hr();if(void 0===e)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}(),r=z({shouldRegisterItem:!0},e);(0,t.EH)(()=>{if(!r.shouldRegisterItem)return;const o=n.registerItem(r.getItem());(0,t.Ki)(o)})}({getItem:()=>({ref:()=>n,type:"item",key:h(),textValue:a.textValue??d()?.textContent??n?.textContent??"",disabled:a.disabled??!1})});const y=Qr({key:h,selectionManager:g,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>a.disabled},()=>n),b=S=>{W(S,a.onPointerMove),"mouse"===S.pointerType&&(a.disabled?o.onItemLeave(S):(o.onItemEnter(S),S.defaultPrevented||(le(S.currentTarget),o.listState().selectionManager().setFocused(!0),o.listState().selectionManager().setFocusedKey(h()))))},x=S=>{W(S,a.onPointerLeave),"mouse"===S.pointerType&&o.onItemLeave(S)},w=S=>{W(S,a.onPointerUp),!a.disabled&&0===S.button&&m()},C=S=>{if(W(S,a.onKeyDown),!S.repeat&&!a.disabled)switch(S.key){case"Enter":case" ":m()}},I=(0,t.To)(()=>a.indeterminate?"mixed":null!=a.checked?a.checked:void 0),T=(0,t.To)(()=>({"data-indeterminate":a.indeterminate?"":void 0,"data-checked":a.checked&&!a.indeterminate?"":void 0,"data-disabled":a.disabled?"":void 0,"data-highlighted":g().focusedKey()===h()?"":void 0})),q={isChecked:()=>a.checked,dataset:T,setLabelRef:v,generateId:Tt(()=>l.id),registerLabel:$e(s),registerDescription:$e(f)};return(0,t.a0)(Vo.Provider,{value:q,get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div",ref(S){const A=de(_=>n=_,a.ref);"function"==typeof A&&A(S)},get tabIndex(){return y.tabIndex()},get"aria-checked"(){return I()},get"aria-disabled"(){return a.disabled},get"aria-labelledby"(){return c()},get"aria-describedby"(){return u()},get"data-key"(){return y.dataKey()},get onPointerDown(){return ie([a.onPointerDown,y.onPointerDown])},get onPointerUp(){return ie([w,y.onPointerUp])},get onClick(){return ie([a.onClick,y.onClick])},get onKeyDown(){return ie([C,y.onKeyDown])},get onMouseDown(){return ie([a.onMouseDown,y.onMouseDown])},get onFocus(){return ie([a.onFocus,y.onFocus])},onPointerMove:b,onPointerLeave:x},T,l))}})}function jo(e){const n=z({closeOnSelect:!1},e),[r,o]=(0,t.rg)(n,["checked","defaultChecked","onChange","onSelect"]),i=function fa(e={}){const[n,r]=Br({value:()=>k(e.isSelected),defaultValue:()=>!!k(e.defaultIsSelected),onChange:a=>e.onSelectedChange?.(a)});return{isSelected:n,setIsSelected:a=>{!k(e.isReadOnly)&&!k(e.isDisabled)&&r(a)},toggle:()=>{!k(e.isReadOnly)&&!k(e.isDisabled)&&r(!n())}}}({isSelected:()=>r.checked,defaultIsSelected:()=>r.defaultChecked,onSelectedChange:l=>r.onChange?.(l),isDisabled:()=>o.disabled});return(0,t.a0)(Zn,(0,t.v6)({role:"menuitemcheckbox",get checked(){return i.isSelected()},onSelect:()=>{r.onSelect?.(),i.toggle()}},o))}var hc=(0,t.q6)();function ln(){return(0,t.NT)(hc)}var Kt={next:(e,n)=>"ltr"===e?"horizontal"===n?"ArrowRight":"ArrowDown":"horizontal"===n?"ArrowLeft":"ArrowUp",previous:(e,n)=>Kt.next("ltr"===e?"rtl":"ltr",n)};function Qo(e){const n=ze(),r=Ue(),o=ln(),{direction:i}=Ze(),a=z({id:n.generateId("trigger")},e),[l,c]=(0,t.rg)(a,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let s=()=>n.value();void 0!==o&&(s=()=>n.value()??l.id,void 0===o.lastValue()&&o.setLastValue(s));const u=Xt(()=>r.triggerRef(),()=>"button"),f=(0,t.To)(()=>"a"===u()&&null!=r.triggerRef()?.getAttribute("href"));(0,t.EH)((0,t.on)(()=>o?.value(),y=>{f()&&y===s()&&r.triggerRef()?.focus()}));const d=()=>{void 0!==o?r.isOpen()?o.value()===s()&&o.closeMenu():(o.autoFocusMenu()||o.setAutoFocusMenu(!0),r.open(!1)):r.toggle(!0)};return(0,t.EH)(()=>(0,t.Ki)(r.registerTriggerId(l.id))),(0,t.a0)(Pn,(0,t.v6)({ref(y){const b=de(r.setTriggerRef,l.ref);"function"==typeof b&&b(y)},get"data-kb-menu-value-trigger"(){return n.value()},get id(){return l.id},get disabled(){return l.disabled},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return(0,t.To)(()=>!!r.isOpen())()?r.contentId():void 0},get"data-highlighted"(){return void 0!==s()&&o?.value()===s()||void 0},get tabIndex(){return void 0!==o?o.value()===s()||o.lastValue()===s()?0:-1:void 0},onPointerDown:y=>{W(y,l.onPointerDown),y.currentTarget.dataset.pointerType=y.pointerType,!l.disabled&&"touch"!==y.pointerType&&0===y.button&&d()},onMouseOver:y=>{W(y,l.onMouseOver),"touch"!==r.triggerRef()?.dataset.pointerType&&!l.disabled&&void 0!==o&&void 0!==o.value()&&o.setValue(s)},onClick:y=>{W(y,l.onClick),l.disabled||"touch"===y.currentTarget.dataset.pointerType&&d()},onKeyDown:y=>{if(W(y,l.onKeyDown),!l.disabled){if(f())switch(y.key){case"Enter":case" ":return}switch(y.key){case"Enter":case" ":case(e=>"horizontal"===e?"ArrowDown":"ArrowRight")(n.orientation()):y.stopPropagation(),y.preventDefault(),function oa(e){if(document.contains(e)){const r=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(r).overflow){let i=Dr(e);for(;e&&i&&e!==r&&i!==r;)qn(i,e),i=Dr(e=i)}else{const{left:i,top:a}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});const{left:l,top:c}=e.getBoundingClientRect();(Math.abs(i-l)>1||Math.abs(a-c)>1)&&e.scrollIntoView?.({block:"nearest"})}}}(y.currentTarget),r.open("first"),o?.setAutoFocusMenu(!0),o?.setValue(s);break;case(e=>"horizontal"===e?"ArrowUp":"ArrowLeft")(n.orientation()):y.stopPropagation(),y.preventDefault(),r.open("last");break;case Kt.next(i(),n.orientation()):if(void 0===o)break;y.stopPropagation(),y.preventDefault(),o.nextMenu();break;case Kt.previous(i(),n.orientation()):if(void 0===o)break;y.stopPropagation(),y.preventDefault(),o.previousMenu()}}},onFocus:y=>{W(y,l.onFocus),void 0!==o&&"touch"!==y.currentTarget.dataset.pointerType&&o.setValue(s)},role:void 0!==o?"menuitem":void 0},()=>r.dataset(),c))}var vc=(0,t.q6)();function Xo(){return(0,t.NT)(vc)}function Zo(e){let n;const r=ze(),o=Ue(),i=ln(),a=Xo(),{direction:l}=Ze(),c=z({id:r.generateId(`content-${(0,t.Ds)()}`)},e),[s,u]=(0,t.rg)(c,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let f=0;const d=()=>null==o.parentMenuContext()&&void 0===i&&r.isModal(),v=function ec(e,n,r){const o=function Ma(e){const{locale:n}=Ze(),r=(0,t.To)(()=>n()+(e?Object.entries(e).sort((o,i)=>o[0]<i[0]?-1:1).join():""));return(0,t.To)(()=>{const o=r();let i;return An.has(o)&&(i=An.get(o)),i||(i=new Intl.Collator(n(),e),An.set(o,i)),i})}({usage:"search",sensitivity:"base"});return _a({selectionManager:()=>k(e.selectionManager),keyboardDelegate:(0,t.To)(()=>k(e.keyboardDelegate)||new Jl(e.collection,n,o)),autoFocus:()=>k(e.autoFocus),deferAutoFocus:()=>k(e.deferAutoFocus),shouldFocusWrap:()=>k(e.shouldFocusWrap),disallowEmptySelection:()=>k(e.disallowEmptySelection),selectOnFocus:()=>k(e.selectOnFocus),disallowTypeAhead:()=>k(e.disallowTypeAhead),shouldUseVirtualFocus:()=>k(e.shouldUseVirtualFocus),allowsTabNavigation:()=>k(e.allowsTabNavigation),isVirtualized:()=>k(e.isVirtualized),scrollToKey:a=>k(e.scrollToKey)?.(a),orientation:()=>k(e.orientation)},n)}({selectionManager:o.listState().selectionManager,collection:o.listState().collection,autoFocus:o.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!o.listState().selectionManager().isFocused(),orientation:()=>"horizontal"===r.orientation()?"vertical":"horizontal"},()=>n);tc({trapFocus:()=>d()&&o.isOpen(),onMountAutoFocus:x=>{void 0===i&&s.onOpenAutoFocus?.(x)},onUnmountAutoFocus:s.onCloseAutoFocus},()=>n);const h=x=>{s.onEscapeKeyDown?.(x),i?.setAutoFocusMenu(!1),o.close(!0)},p=x=>{s.onFocusOutside?.(x),r.isModal()&&x.preventDefault()};(0,t.EH)(()=>(0,t.Ki)(o.registerContentId(s.id)));const b={ref:de(x=>{o.setContentRef(x),n=x},s.ref),role:"menu",get id(){return s.id},get tabIndex(){return v.tabIndex()},get"aria-labelledby"(){return o.triggerId()},onKeyDown:ie([s.onKeyDown,v.onKeyDown,x=>{if(we(x.currentTarget,x.target)&&("Tab"===x.key&&o.isOpen()&&x.preventDefault(),void 0!==i&&"true"!==x.currentTarget.getAttribute("aria-haspopup")))switch(x.key){case Kt.next(l(),r.orientation()):x.stopPropagation(),x.preventDefault(),o.close(!0),i.setAutoFocusMenu(!0),i.nextMenu();break;case Kt.previous(l(),r.orientation()):if(x.currentTarget.hasAttribute("data-closed"))break;x.stopPropagation(),x.preventDefault(),o.close(!0),i.setAutoFocusMenu(!0),i.previousMenu()}}]),onMouseDown:ie([s.onMouseDown,v.onMouseDown]),onFocusIn:ie([s.onFocusIn,v.onFocusIn]),onFocusOut:ie([s.onFocusOut,v.onFocusOut]),onPointerEnter:x=>{W(x,s.onPointerEnter),o.isOpen()&&(o.parentMenuContext()?.listState().selectionManager().setFocused(!1),o.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},onPointerMove:x=>{if(W(x,s.onPointerMove),"mouse"!==x.pointerType)return;const C=f!==x.clientX;we(x.currentTarget,x.target)&&C&&(o.setPointerDir(x.clientX>f?"right":"left"),f=x.clientX)},get"data-orientation"(){return r.orientation()}};return(0,t.a0)(t.wv,{get when(){return o.contentPresent()},get children(){return(0,t.a0)(t.wv,{get when(){return void 0===a||null!=o.parentMenuContext()},get fallback(){return(0,t.a0)(Q,(0,t.v6)({as:"div"},()=>o.dataset(),b,u))},get children(){return(0,t.a0)(wo.Positioner,{get children(){return(0,t.a0)(Xl,(0,t.v6)({get disableOutsidePointerEvents(){return(0,t.To)(()=>!!d())()&&o.isOpen()},get excludedElements(){return[o.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return jt({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},s.style)},onEscapeKeyDown:h,onFocusOutside:p,get onDismiss(){return o.close}},()=>o.dataset(),b,u))}})}})}})}function pc(e){let n;const r=ze(),o=Ue(),[i,a]=(0,t.rg)(e,["ref"]);return gc({element:()=>n??null,enabled:()=>o.contentPresent()&&r.preventScroll()}),(0,t.a0)(Zo,(0,t.v6)({ref(l){const c=de(s=>{n=s},i.ref);"function"==typeof c&&c(l)}},a))}var Jo=(0,t.q6)();function Jn(e){const r=z({id:ze().generateId(`group-${(0,t.Ds)()}`)},e),[o,i]=(0,t.n5)(),a={generateId:Tt(()=>r.id),registerLabelId:$e(i)};return(0,t.a0)(Jo.Provider,{value:a,get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div",role:"group",get"aria-labelledby"(){return o()}},r))}})}function ei(e){const n=function mc(){const e=(0,t.NT)(Jo);if(void 0===e)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}(),r=z({id:n.generateId("label")},e),[o,i]=(0,t.rg)(r,["id"]);return(0,t.EH)(()=>(0,t.Ki)(n.registerLabelId(o.id))),(0,t.a0)(Q,(0,t.v6)({as:"span",get id(){return o.id},"aria-hidden":"true"},i))}function ti(e){const n=Ue(),r=z({children:"\u25bc"},e);return(0,t.a0)(Q,(0,t.v6)({as:"span","aria-hidden":"true"},()=>n.dataset(),r))}function ni(e){return(0,t.a0)(Zn,(0,t.v6)({role:"menuitem",closeOnSelect:!0},e))}function ri(e){const n=Xn(),r=z({id:n.generateId("description")},e),[o,i]=(0,t.rg)(r,["id"]);return(0,t.EH)(()=>(0,t.Ki)(n.registerDescription(o.id))),(0,t.a0)(Q,(0,t.v6)({as:"div",get id(){return o.id}},()=>n.dataset(),i))}function oi(e){const n=Xn(),r=z({id:n.generateId("indicator")},e),[o,i]=(0,t.rg)(r,["forceMount"]);return(0,t.a0)(t.wv,{get when(){return o.forceMount||n.isChecked()},get children(){return(0,t.a0)(Q,(0,t.v6)({as:"div"},()=>n.dataset(),i))}})}function ii(e){const n=Xn(),r=z({id:n.generateId("label")},e),[o,i]=(0,t.rg)(r,["ref","id"]);return(0,t.EH)(()=>(0,t.Ki)(n.registerLabel(o.id))),(0,t.a0)(Q,(0,t.v6)({as:"div",ref(a){const l=de(n.setLabelRef,o.ref);"function"==typeof l&&l(a)},get id(){return o.id}},()=>n.dataset(),i))}function si(e){const n=Ue();return(0,t.a0)(t.wv,{get when(){return n.contentPresent()},get children(){return(0,t.a0)(t.ZL,e)}})}var ai=(0,t.q6)();function li(e){const o=z({id:ze().generateId(`radiogroup-${(0,t.Ds)()}`)},e),[i,a]=(0,t.rg)(o,["value","defaultValue","onChange","disabled"]),[l,c]=Dt({value:()=>i.value,defaultValue:()=>i.defaultValue,onChange:u=>i.onChange?.(u)});return(0,t.a0)(ai.Provider,{value:{isDisabled:()=>i.disabled,isSelectedValue:u=>u===l(),setSelectedValue:c},get children(){return(0,t.a0)(Jn,a)}})}function ci(e){const n=function yc(){const e=(0,t.NT)(ai);if(void 0===e)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}(),r=z({closeOnSelect:!1},e),[o,i]=(0,t.rg)(r,["value","onSelect"]);return(0,t.a0)(Zn,(0,t.v6)({role:"menuitemradio",get checked(){return n.isSelectedValue(o.value)},onSelect:()=>{o.onSelect?.(),n.setSelectedValue(o.value)}},i))}function bc(e,n,r){const o=e.split("-")[0],i=r.getBoundingClientRect(),a=[],l=n.clientX,c=n.clientY;switch(o){case"top":a.push([l,c+5]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]);break;case"right":a.push([l-5,c]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]);break;case"bottom":a.push([l,c-5]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]);break;case"left":a.push([l+5,c]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top])}return a}function ui(e){const n=ze(),r=Hr(),o=Go(),i=ln(),a=Xo(),l=z({placement:"horizontal"===n.orientation()?"bottom-start":"right-start"},e),[c,s]=(0,t.rg)(l,["open","defaultOpen","onOpenChange"]);let u=0,f=null,d="right";const[v,g]=(0,t.n5)(),[h,p]=(0,t.n5)(),[m,y]=(0,t.n5)(),[b,x]=(0,t.n5)(),[w,C]=(0,t.n5)(!0),[I,T]=(0,t.n5)(s.placement),[q,S]=(0,t.n5)([]),[A,_]=(0,t.n5)([]),{DomCollectionProvider:O}=xa({items:A,onItemsChange:_}),N=ko({open:()=>c.open,defaultOpen:()=>c.defaultOpen,onOpenChange:L=>c.onOpenChange?.(L)}),{present:R}=Zr({show:()=>n.forceMount()||N.isOpen(),element:()=>b()??null}),X=function za(e){const n=function Ia(e){const n=z({selectionMode:"none",selectionBehavior:"toggle"},e),[r,o]=(0,t.n5)(!1),[i,a]=(0,t.n5)(),l=(0,t.To)(()=>{const p=k(n.selectedKeys);return null!=p?Wr(p):p}),c=(0,t.To)(()=>{const p=k(n.defaultSelectedKeys);return null!=p?Wr(p):new Re}),[s,u]=function Aa(e){const[n,r]=Dt(e);return[()=>n()??new Re,r]}({value:l,defaultValue:c,onChange:p=>n.onSelectionChange?.(p)}),[f,d]=(0,t.n5)(k(n.selectionBehavior));return(0,t.EH)(()=>{const p=s();"replace"===k(n.selectionBehavior)&&"toggle"===f()&&"object"==typeof p&&0===p.size&&d("replace")}),(0,t.EH)(()=>{d(k(n.selectionBehavior)??"toggle")}),{selectionMode:()=>k(n.selectionMode),disallowEmptySelection:()=>k(n.disallowEmptySelection)??!1,selectionBehavior:f,setSelectionBehavior:d,isFocused:r,setFocused:o,focusedKey:i,setFocusedKey:a,selectedKeys:s,setSelectedKeys:p=>{(k(n.allowDuplicateSelectionEvents)||!function Da(e,n){if(e.size!==n.size)return!1;for(const r of e)if(!n.has(r))return!1;return!0}(p,s()))&&u(p)}}}(e),o=$a({dataSource:()=>k(e.dataSource),getKey:()=>k(e.getKey),getTextValue:()=>k(e.getTextValue),getDisabled:()=>k(e.getDisabled),getSectionChildren:()=>k(e.getSectionChildren),factory:a=>new Xr(e.filter?e.filter(a):a)},[()=>e.filter]),i=new Fa(o,n);return(0,t.KZ)(()=>{const a=n.focusedKey();null!=a&&!o().getItem(a)&&n.setFocusedKey(void 0)}),{collection:o,selectionManager:()=>i}}({selectionMode:"none",dataSource:A}),V=L=>{C(L),N.open()},U=(L=!1)=>{N.close(),L&&o&&o.close(!0)},Z=()=>{const L=b();L&&(le(L),X.selectionManager().setFocused(!0),X.selectionManager().setFocusedKey(void 0))},re=()=>{null!=a?setTimeout(()=>Z()):Z()},te=L=>d===f?.side&&function xc(e,n){return!!n&&function ra(e,n){const[r,o]=e;let i=!1;for(let l=n.length,c=0,s=l-1;c<l;s=c++){const[u,f]=n[c],[d,v]=n[s],[,g]=n[0===s?l-1:s-1]||[0,0],h=(f-v)*(r-u)-(u-d)*(o-f);if(v<f){if(o>=v&&o<f){if(0===h)return!0;h>0&&(o===v?o>g&&(i=!i):i=!i)}}else if(f<v){if(o>f&&o<=v){if(0===h)return!0;h<0&&(o===v?o<g&&(i=!i):i=!i)}}else if(o==f&&(r>=d&&r<=u||r>=u&&r<=d))return!0}return i}([e.clientX,e.clientY],n)}(L,f?.area);(function rc(e){(0,t.EH)(()=>{k(e.isDisabled)||(0,t.Ki)(function oc(e,n=document.body){const r=new Set(e),o=new Set,i=s=>{for(const v of s.querySelectorAll(`[${nc}], [${Jt}]`))r.add(v);const u=v=>{if(r.has(v)||v.parentElement&&o.has(v.parentElement)&&"row"!==v.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(const g of r)if(v.contains(g))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},f=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,{acceptNode:u}),d=u(s);if(d===NodeFilter.FILTER_ACCEPT&&a(s),d!==NodeFilter.FILTER_REJECT){let v=f.nextNode();for(;null!=v;)a(v),v=f.nextNode()}},a=s=>{const u=zt.get(s)??0;"true"===s.getAttribute("aria-hidden")&&0===u||(0===u&&s.setAttribute("aria-hidden","true"),o.add(s),zt.set(s,u+1))};Se.length&&Se[Se.length-1].disconnect(),i(n);const l=new MutationObserver(s=>{for(const u of s)if("childList"===u.type&&0!==u.addedNodes.length&&![...r,...o].some(f=>f.contains(u.target))){for(const f of u.removedNodes)f instanceof Element&&(r.delete(f),o.delete(f));for(const f of u.addedNodes)!(f instanceof HTMLElement||f instanceof SVGElement)||"true"!==f.dataset.liveAnnouncer&&"true"!==f.dataset.reactAriaTopLayer?f instanceof Element&&i(f):r.add(f)}});l.observe(n,{childList:!0,subtree:!0});const c={observe(){l.observe(n,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return Se.push(c),()=>{l.disconnect();for(const s of o){const u=zt.get(s);if(null==u)return;1===u?(s.removeAttribute("aria-hidden"),zt.delete(s)):zt.set(s,u-1)}c===Se[Se.length-1]?(Se.pop(),Se.length&&Se[Se.length-1].observe()):Se.splice(Se.indexOf(c),1)}}(k(e.targets),k(e.root)))})})({isDisabled:()=>!(null==o&&N.isOpen()&&n.isModal()),targets:()=>[b(),...q()].filter(Boolean)}),(0,t.EH)(()=>{const L=b();if(!L||!o)return;const Pe=o.registerNestedMenu(L);(0,t.Ki)(()=>{Pe()})}),(0,t.EH)(()=>{void 0===o&&i?.registerMenu(n.value(),[b(),...q()])}),(0,t.EH)(()=>{void 0!==o||void 0===i||(i.value()===n.value()?(m()?.focus(),i.autoFocusMenu()&&V(!0)):U())}),(0,t.EH)(()=>{void 0!==o||void 0===i||N.isOpen()&&i.setValue(n.value())}),(0,t.Ki)(()=>{void 0===o&&i?.unregisterMenu(n.value())});const ot={dataset:(0,t.To)(()=>({"data-expanded":N.isOpen()?"":void 0,"data-closed":N.isOpen()?void 0:""})),isOpen:N.isOpen,contentPresent:R,nestedMenus:q,currentPlacement:I,pointerGraceTimeoutId:()=>u,autoFocus:w,listState:()=>X,parentMenuContext:()=>o,triggerRef:m,contentRef:b,triggerId:v,contentId:h,setTriggerRef:y,setContentRef:x,open:V,close:U,toggle:L=>{C(L),N.toggle()},focusContent:re,onItemEnter:L=>{te(L)&&L.preventDefault()},onItemLeave:L=>{te(L)||re()},onTriggerLeave:L=>{te(L)&&L.preventDefault()},setPointerDir:L=>d=L,setPointerGraceTimeoutId:L=>u=L,setPointerGraceIntent:L=>f=L,registerNestedMenu:L=>{S(ue=>[...ue,L]);const Pe=o?.registerNestedMenu(L);return()=>{S(ue=>Cn(ue,L)),Pe?.()}},registerItemToParentDomCollection:r?.registerItem,registerTriggerId:$e(g),registerContentId:$e(p)};return(0,t.a0)(O,{get children(){return(0,t.a0)(Uo.Provider,{value:ot,get children(){return(0,t.a0)(t.wv,{when:void 0===a,get fallback(){return s.children},get children(){return(0,t.a0)(wo,(0,t.v6)({anchorRef:m,contentRef:b,onCurrentPlacementChange:T},s))}})}})}})}function di(e){const{direction:n}=Ze();return(0,t.a0)(ui,(0,t.v6)({get placement(){return"rtl"===n()?"left-start":"right-start"},flip:!0},e))}function fi(e){const n=Ue(),r=ze(),[o,i]=(0,t.rg)(e,["onFocusOutside","onKeyDown"]),{direction:a}=Ze();return(0,t.a0)(Zo,(0,t.v6)({onOpenAutoFocus:f=>{f.preventDefault()},onCloseAutoFocus:f=>{f.preventDefault()},onFocusOutside:f=>{o.onFocusOutside?.(f);const d=f.target;we(n.triggerRef(),d)||n.close()},onKeyDown:f=>{W(f,o.onKeyDown);const d=we(f.currentTarget,f.target),v=((e,n)=>"ltr"===e?["horizontal"===n?"ArrowLeft":"ArrowUp"]:["horizontal"===n?"ArrowRight":"ArrowDown"])(a(),r.orientation()).includes(f.key),g=null!=n.parentMenuContext();d&&v&&g&&(n.close(),le(n.triggerRef()))}},i))}var gi=["Enter"," "];function hi(e){let n;const r=ze(),o=Ue(),i=z({id:r.generateId(`sub-trigger-${(0,t.Ds)()}`)},e),[a,l]=(0,t.rg)(i,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let c=null;const s=()=>{t.S$||(c&&window.clearTimeout(c),c=null)},{direction:u}=Ze(),f=()=>a.id,d=()=>{const x=o.parentMenuContext();if(null==x)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return x.listState().selectionManager()},h=Qr({key:f,selectionManager:d,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>a.disabled},()=>n),p=x=>{W(x,a.onClick),!o.isOpen()&&!a.disabled&&o.open(!0)},b=x=>{W(x,a.onKeyDown),!x.repeat&&(a.disabled||((e,n)=>"ltr"===e?[...gi,"horizontal"===n?"ArrowRight":"ArrowDown"]:[...gi,"horizontal"===n?"ArrowLeft":"ArrowUp"])(u(),r.orientation()).includes(x.key)&&(x.stopPropagation(),x.preventDefault(),d().setFocused(!1),d().setFocusedKey(void 0),o.isOpen()||o.open("first"),o.focusContent(),o.listState().selectionManager().setFocused(!0),o.listState().selectionManager().setFocusedKey(o.listState().collection().getFirstKey())))};return(0,t.EH)(()=>{if(null==o.registerItemToParentDomCollection)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const x=o.registerItemToParentDomCollection({ref:()=>n,type:"item",key:f(),textValue:a.textValue??n?.textContent??"",disabled:a.disabled??!1});(0,t.Ki)(x)}),(0,t.EH)((0,t.on)(()=>o.parentMenuContext()?.pointerGraceTimeoutId(),x=>{(0,t.Ki)(()=>{window.clearTimeout(x),o.parentMenuContext()?.setPointerGraceIntent(null)})})),(0,t.EH)(()=>(0,t.Ki)(o.registerTriggerId(a.id))),(0,t.Ki)(()=>{s()}),(0,t.a0)(Q,(0,t.v6)({as:"div",ref(x){const w=de(C=>{o.setTriggerRef(C),n=C},a.ref);"function"==typeof w&&w(x)},get id(){return a.id},role:"menuitem",get tabIndex(){return h.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return o.isOpen()},get"aria-controls"(){return(0,t.To)(()=>!!o.isOpen())()?o.contentId():void 0},get"aria-disabled"(){return a.disabled},get"data-key"(){return h.dataKey()},get"data-highlighted"(){return d().focusedKey()===f()?"":void 0},get"data-disabled"(){return a.disabled?"":void 0},get onPointerDown(){return ie([a.onPointerDown,h.onPointerDown])},get onPointerUp(){return ie([a.onPointerUp,h.onPointerUp])},get onClick(){return ie([p,h.onClick])},get onKeyDown(){return ie([b,h.onKeyDown])},get onMouseDown(){return ie([a.onMouseDown,h.onMouseDown])},get onFocus(){return ie([a.onFocus,h.onFocus])},onPointerMove:x=>{if(W(x,a.onPointerMove),"mouse"!==x.pointerType)return;const w=o.parentMenuContext();if(w?.onItemEnter(x),!x.defaultPrevented){if(a.disabled)return void w?.onItemLeave(x);!o.isOpen()&&!c&&(o.parentMenuContext()?.setPointerGraceIntent(null),c=window.setTimeout(()=>{o.open(!1),s()},100)),w?.onItemEnter(x),x.defaultPrevented||(o.listState().selectionManager().isFocused()&&(o.listState().selectionManager().setFocused(!1),o.listState().selectionManager().setFocusedKey(void 0)),le(x.currentTarget),w?.listState().selectionManager().setFocused(!0),w?.listState().selectionManager().setFocusedKey(f()))}},onPointerLeave:x=>{if(W(x,a.onPointerLeave),"mouse"!==x.pointerType)return;s();const w=o.parentMenuContext(),C=o.contentRef();if(C){w?.setPointerGraceIntent({area:bc(o.currentPlacement(),x,C),side:o.currentPlacement().split("-")[0]}),window.clearTimeout(w?.pointerGraceTimeoutId());const I=window.setTimeout(()=>{w?.setPointerGraceIntent(null)},300);w?.setPointerGraceTimeoutId(I)}else{if(w?.onTriggerLeave(x),x.defaultPrevented)return;w?.setPointerGraceIntent(null)}w?.onItemLeave(x)}},()=>o.dataset(),l))}function Cc(e){const n=ln(),o=z({id:`menu-${(0,t.Ds)()}`,modal:!0},e),[i,a]=(0,t.rg)(o,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),l=ko({open:()=>i.open,defaultOpen:()=>i.defaultOpen,onOpenChange:s=>i.onOpenChange?.(s)}),c={isModal:()=>i.modal??!0,preventScroll:()=>i.preventScroll??c.isModal(),forceMount:()=>i.forceMount??!1,generateId:Tt(()=>i.id),value:()=>i.value,orientation:()=>i.orientation??n?.orientation()??"horizontal"};return(0,t.a0)(Yo.Provider,{value:c,get children(){return(0,t.a0)(ui,(0,t.v6)({get open(){return l.isOpen()},get onOpenChange(){return l.setIsOpen}},a))}})}function cn(e){let n;const r=z({orientation:"horizontal"},e),[o,i]=(0,t.rg)(r,["ref","orientation"]),a=Xt(()=>n,()=>"hr");return(0,t.a0)(Q,(0,t.v6)({as:"hr",ref(l){const c=de(s=>n=s,o.ref);"function"==typeof c&&c(l)},get role(){return"hr"!==a()?"separator":void 0},get"aria-orientation"(){return"vertical"===o.orientation?"vertical":void 0},get"data-orientation"(){return o.orientation}},i))}Zt({},{Root:()=>cn,Separator:()=>kc});var kc=cn,ne={};function vi(e){const n=ze(),r=Ue(),[o,i]=(0,t.rg)(e,["onCloseAutoFocus","onInteractOutside"]);let a=!1;return(0,t.a0)(pc,(0,t.v6)({onCloseAutoFocus:s=>{o.onCloseAutoFocus?.(s),a||le(r.triggerRef()),a=!1,s.preventDefault()},onInteractOutside:s=>{o.onInteractOutside?.(s),(!n.isModal()||s.detail.isContextMenu)&&(a=!0)}},i))}function pi(e){const r=z({id:`dropdownmenu-${(0,t.Ds)()}`},e);return(0,t.a0)(Cc,r)}Zt(ne,{Arrow:()=>Yn,CheckboxItem:()=>jo,Content:()=>vi,DropdownMenu:()=>Ec,Group:()=>Jn,GroupLabel:()=>ei,Icon:()=>ti,Item:()=>ni,ItemDescription:()=>ri,ItemIndicator:()=>oi,ItemLabel:()=>ii,Portal:()=>si,RadioGroup:()=>li,RadioItem:()=>ci,Root:()=>pi,Separator:()=>cn,Sub:()=>di,SubContent:()=>fi,SubTrigger:()=>hi,Trigger:()=>Qo});var Ec=Object.assign(pi,{Arrow:Yn,CheckboxItem:jo,Content:vi,Group:Jn,GroupLabel:ei,Icon:ti,Item:ni,ItemDescription:ri,ItemIndicator:oi,ItemLabel:ii,Portal:si,RadioGroup:li,RadioItem:ci,Separator:cn,Sub:di,SubContent:fi,SubTrigger:hi,Trigger:Qo}),$={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},Tc=(0,t.vs)('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),qc=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Mc=(0,t.vs)('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Ac=(0,t.vs)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),er=(0,t.vs)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Dc=(0,t.vs)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ic=(0,t.vs)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Pc=(0,t.vs)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Oc=(0,t.vs)('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),Lc=(0,t.vs)('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),_c=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Fc=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),zc=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Kc=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),mi=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Bc=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Rc=(0,t.vs)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),Hc=(0,t.vs)('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Nc=(0,t.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Uc=(0,t.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Gc=(0,t.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Vc=(0,t.vs)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Yc=(0,t.vs)('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function jc(){return Tc()}function yi(){return qc()}function Bt(){return Mc()}function bi(){return Ac()}function xi(){return er()}function Wc(){return(()=>{var e=er();return e.style.setProperty("transform","rotate(90deg)"),e})()}function Qc(){return(()=>{var e=er();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function Xc(){return Dc()}function Zc(){return Ic()}function Jc(){return Pc()}function eu(){return Oc()}function tu(){return Lc()}function nu(){return _c()}function ru(){return Fc()}function ou(){return zc()}function iu(){return Kc()}function su(e){return n=mi(),r=n.firstChild,(0,t.gb)(()=>(0,t.Bq)(r,"stroke","dark"===e.theme?"#12B76A":"#027A48")),n;var n,r}function au(){return Bc()}function lu(){return Rc()}function cu(e){return[(0,t.a0)(t.wv,{get when(){return e.checked},get children(){var n=mi(),r=n.firstChild;return(0,t.gb)(()=>(0,t.Bq)(r,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF")),n}}),(0,t.a0)(t.wv,{get when(){return!e.checked},get children(){var n=Hc(),r=n.firstChild;return(0,t.gb)(()=>(0,t.Bq)(r,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF")),n}})]}function uu(){return Nc()}function du(){return Uc()}function fu(){return Gc()}function gu(){return Vc()}function wi(){const e=(0,t.Ds)();return a=(i=(o=(r=(n=Yc()).firstChild).nextSibling).nextSibling).firstChild,c=(l=i.nextSibling).firstChild,f=(u=(s=l.nextSibling).nextSibling).firstChild,v=(d=u.nextSibling).firstChild,p=(h=(g=d.nextSibling).nextSibling).firstChild,y=(m=h.nextSibling).firstChild,w=(x=(b=m.nextSibling).nextSibling).firstChild,I=(C=x.nextSibling).firstChild,S=(q=(T=C.nextSibling).nextSibling).firstChild,_=(A=q.nextSibling).firstChild,R=(N=(O=A.nextSibling).nextSibling).firstChild,V=(X=N.nextSibling).firstChild,Z=(Y=(U=X.nextSibling).nextSibling).firstChild,ve=(re=Y.nextSibling).firstChild,ot=(K=(te=re.nextSibling).firstChild.nextSibling.nextSibling.nextSibling).nextSibling,Pe=(L=te.nextSibling).firstChild,St=(ue=L.nextSibling).firstChild,We=(je=(B=(se=(J=(H=(j=(ge=(G=(M=(Ye=(Ke=(ft=(it=(Te=ue.nextSibling).firstChild).nextSibling).nextSibling.firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling,gt=(Oe=Te.nextSibling).firstChild,ht=(Qe=Oe.nextSibling).firstChild,gn=(st=(Xe=Qe.nextSibling).firstChild).nextSibling,hn=(Nt=Xe.nextSibling).firstChild,vn=(kt=Nt.nextSibling).firstChild,md=(Gi=(Ui=(Ni=(Hi=(Ri=(Bi=(Ki=(zi=(Fi=(_i=(Li=(Oi=(Pi=(Ii=(Et=(Vt=(Gt=(Ut=kt.nextSibling).firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling,(0,t.Bq)(r,"id",`a-${e}`),(0,t.Bq)(o,"fill",`url(#a-${e})`),(0,t.Bq)(a,"id",`am-${e}`),(0,t.Bq)(l,"id",`b-${e}`),(0,t.Bq)(c,"filter",`url(#am-${e})`),(0,t.Bq)(s,"mask",`url(#b-${e})`),(0,t.Bq)(f,"id",`ah-${e}`),(0,t.Bq)(d,"id",`k-${e}`),(0,t.Bq)(v,"filter",`url(#ah-${e})`),(0,t.Bq)(g,"mask",`url(#k-${e})`),(0,t.Bq)(p,"id",`ae-${e}`),(0,t.Bq)(m,"id",`j-${e}`),(0,t.Bq)(y,"filter",`url(#ae-${e})`),(0,t.Bq)(b,"mask",`url(#j-${e})`),(0,t.Bq)(w,"id",`ai-${e}`),(0,t.Bq)(C,"id",`i-${e}`),(0,t.Bq)(I,"filter",`url(#ai-${e})`),(0,t.Bq)(T,"mask",`url(#i-${e})`),(0,t.Bq)(S,"id",`aj-${e}`),(0,t.Bq)(A,"id",`h-${e}`),(0,t.Bq)(_,"filter",`url(#aj-${e})`),(0,t.Bq)(O,"mask",`url(#h-${e})`),(0,t.Bq)(R,"id",`ag-${e}`),(0,t.Bq)(X,"id",`g-${e}`),(0,t.Bq)(V,"filter",`url(#ag-${e})`),(0,t.Bq)(U,"mask",`url(#g-${e})`),(0,t.Bq)(Z,"id",`af-${e}`),(0,t.Bq)(re,"id",`f-${e}`),(0,t.Bq)(ve,"filter",`url(#af-${e})`),(0,t.Bq)(te,"mask",`url(#f-${e})`),(0,t.Bq)(K,"id",`m-${e}`),(0,t.Bq)(ot,"fill",`url(#m-${e})`),(0,t.Bq)(Pe,"id",`ak-${e}`),(0,t.Bq)(ue,"id",`e-${e}`),(0,t.Bq)(St,"filter",`url(#ak-${e})`),(0,t.Bq)(Te,"mask",`url(#e-${e})`),(0,t.Bq)(it,"id",`n-${e}`),(0,t.Bq)(ft,"fill",`url(#n-${e})`),(0,t.Bq)(Ke,"id",`r-${e}`),(0,t.Bq)(Ye,"fill",`url(#r-${e})`),(0,t.Bq)(M,"id",`s-${e}`),(0,t.Bq)(G,"fill",`url(#s-${e})`),(0,t.Bq)(ge,"id",`q-${e}`),(0,t.Bq)(j,"fill",`url(#q-${e})`),(0,t.Bq)(H,"id",`p-${e}`),(0,t.Bq)(J,"fill",`url(#p-${e})`),(0,t.Bq)(se,"id",`o-${e}`),(0,t.Bq)(B,"fill",`url(#o-${e})`),(0,t.Bq)(je,"id",`l-${e}`),(0,t.Bq)(We,"fill",`url(#l-${e})`),(0,t.Bq)(gt,"id",`al-${e}`),(0,t.Bq)(Qe,"id",`d-${e}`),(0,t.Bq)(ht,"filter",`url(#al-${e})`),(0,t.Bq)(Xe,"mask",`url(#d-${e})`),(0,t.Bq)(st,"id",`u-${e}`),(0,t.Bq)(gn,"fill",`url(#u-${e})`),(0,t.Bq)(hn,"id",`ad-${e}`),(0,t.Bq)(kt,"id",`c-${e}`),(0,t.Bq)(vn,"filter",`url(#ad-${e})`),(0,t.Bq)(Ut,"mask",`url(#c-${e})`),(0,t.Bq)(Gt,"id",`t-${e}`),(0,t.Bq)(Vt,"fill",`url(#t-${e})`),(0,t.Bq)(Et,"id",`v-${e}`),(0,t.Bq)(Ii,"stroke",`url(#v-${e})`),(0,t.Bq)(Pi,"id",`aa-${e}`),(0,t.Bq)(Oi,"stroke",`url(#aa-${e})`),(0,t.Bq)(Li,"id",`w-${e}`),(0,t.Bq)(_i,"stroke",`url(#w-${e})`),(0,t.Bq)(Fi,"id",`ac-${e}`),(0,t.Bq)(zi,"stroke",`url(#ac-${e})`),(0,t.Bq)(Ki,"id",`ab-${e}`),(0,t.Bq)(Bi,"stroke",`url(#ab-${e})`),(0,t.Bq)(Ri,"id",`y-${e}`),(0,t.Bq)(Hi,"stroke",`url(#y-${e})`),(0,t.Bq)(Ni,"id",`x-${e}`),(0,t.Bq)(Ui,"stroke",`url(#x-${e})`),(0,t.Bq)(Gi,"id",`z-${e}`),(0,t.Bq)(md,"stroke",`url(#z-${e})`),n;var n,r,o,i,a,l,c,s,u,f,d,v,g,h,p,m,y,b,x,w,C,I,T,q,S,A,_,O,N,R,X,V,U,Y,Z,re,ve,te,K,ot,L,Pe,ue,St,Te,it,ft,Ke,Ye,M,G,ge,j,H,J,se,B,je,We,Oe,gt,Qe,ht,Xe,st,gn,Nt,hn,kt,vn,Ut,Gt,Vt,Et,Ii,Pi,Oi,Li,_i,Fi,zi,Ki,Bi,Ri,Hi,Ni,Ui,Gi,md}var hu=(0,t.vs)('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),vu=(0,t.vs)('<button title="Copy object to clipboard">'),pu=(0,t.vs)('<button title="Remove all items"aria-label="Remove all items">'),mu=(0,t.vs)('<button title="Delete item"aria-label="Delete item">'),yu=(0,t.vs)('<button title="Toggle value"aria-label="Toggle value">'),bu=(0,t.vs)('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),Rt=(0,t.vs)("<div>"),xu=(0,t.vs)("<div><button> <span></span> <span> "),wu=(0,t.vs)("<input>"),$i=(0,t.vs)("<span>"),$u=(0,t.vs)("<div><span>:"),Cu=(0,t.vs)("<div><div><button> [<!>...<!>]"),Ci=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?$t(r):wt(r));return i=hu(),(0,t.gb)(()=>(0,t.s7)(i,D(o().expander,r`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&r`
            & svg {
              top: -1px;
            }
          `))),i;var i},ku=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?$t(r):wt(r)),[i,a]=(0,t.n5)("NoCopy");return l=vu(),(0,t.q2)(l,"click","NoCopy"===i()?()=>{navigator.clipboard.writeText((0,t.As)(e.value)).then(()=>{a("SuccessCopy"),setTimeout(()=>{a("NoCopy")},1500)},c=>{a("ErrorCopy"),setTimeout(()=>{a("NoCopy")},1500)})}:void 0,!0),(0,t.Yr)(l,(0,t.a0)(t.dO,{get children(){return[(0,t.a0)(t.YG,{get when(){return"NoCopy"===i()},get children(){return(0,t.a0)(ou,{})}}),(0,t.a0)(t.YG,{get when(){return"SuccessCopy"===i()},get children(){return(0,t.a0)(su,{get theme(){return n()}})}}),(0,t.a0)(t.YG,{get when(){return"ErrorCopy"===i()},get children(){return(0,t.a0)(au,{})}})]}})),(0,t.gb)(c=>{var s=o().actionButton,u="NoCopy"===i()?"Copy object to clipboard":"SuccessCopy"===i()?"Object copied to clipboard":"Error copying object to clipboard";return s!==c.e&&(0,t.s7)(l,c.e=s),u!==c.t&&(0,t.Bq)(l,"aria-label",c.t=u),c},{e:void 0,t:void 0}),l;var l},Eu=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?$t(r):wt(r)),i=P().client;return(a=pu()).$$click=()=>{const c=(0,t.zt)(e.activeQuery.state.data,e.dataPath,[]);i.setQueryData(e.activeQuery.queryKey,c)},(0,t.Yr)(a,(0,t.a0)(lu,{})),(0,t.gb)(()=>(0,t.s7)(a,o().actionButton)),a;var a},Si=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?$t(r):wt(r)),i=P().client;return(a=mu()).$$click=()=>{const c=(0,t.Dc)(e.activeQuery.state.data,e.dataPath);i.setQueryData(e.activeQuery.queryKey,c)},(0,t.Yr)(a,(0,t.a0)(yi,{})),(0,t.gb)(()=>(0,t.s7)(a,D(o().actionButton))),a;var a},Tu=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?$t(r):wt(r)),i=P().client;return(a=yu()).$$click=()=>{const c=(0,t.zt)(e.activeQuery.state.data,e.dataPath,!e.value);i.setQueryData(e.activeQuery.queryKey,c)},(0,t.Yr)(a,(0,t.a0)(cu,{get theme(){return n()},get checked(){return e.value}})),(0,t.gb)(()=>(0,t.s7)(a,D(o().actionButton,r`
          width: ${$.size[3.5]};
          height: ${$.size[3.5]};
        `))),a;var a};function ki(e){return Symbol.iterator in e}function nt(e){const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?$t(r):wt(r)),i=P().client,[a,l]=(0,t.n5)((e.defaultExpanded||[]).includes(e.label)),[s,u]=(0,t.n5)([]),f=(0,t.To)(()=>Array.isArray(e.value)?e.value.map((h,p)=>({label:p.toString(),value:h})):null!==e.value&&"object"==typeof e.value&&ki(e.value)&&"function"==typeof e.value[Symbol.iterator]?e.value instanceof Map?Array.from(e.value,([h,p])=>({label:h,value:p})):Array.from(e.value,(h,p)=>({label:p.toString(),value:h})):"object"==typeof e.value&&null!==e.value?Object.entries(e.value).map(([h,p])=>({label:h,value:p})):[]),d=(0,t.To)(()=>Array.isArray(e.value)?"array":null!==e.value&&"object"==typeof e.value&&ki(e.value)&&"function"==typeof e.value[Symbol.iterator]?"Iterable":"object"==typeof e.value&&null!==e.value?"object":typeof e.value),v=(0,t.To)(()=>function Su(e,n){let r=0;const o=[];for(;r<e.length;)o.push(e.slice(r,r+n)),r+=n;return o}(f(),100)),g=e.dataPath??[];return h=Rt(),(0,t.Yr)(h,(0,t.a0)(t.wv,{get when(){return v().length},get children(){return[(p=xu(),m=p.firstChild,y=m.firstChild,b=y.nextSibling,w=b.nextSibling.nextSibling,C=w.firstChild,m.$$click=()=>l(h=>!h),(0,t.Yr)(m,(0,t.a0)(Ci,{get expanded(){return a()}}),y),(0,t.Yr)(b,()=>e.label),(0,t.Yr)(w,()=>"iterable"===String(d()).toLowerCase()?"(Iterable) ":"",C),(0,t.Yr)(w,()=>f().length,C),(0,t.Yr)(w,()=>f().length>1?"items":"item",null),(0,t.Yr)(p,(0,t.a0)(t.wv,{get when(){return e.editable},get children(){var I=Rt();return(0,t.Yr)(I,(0,t.a0)(ku,{get value(){return e.value}}),null),(0,t.Yr)(I,(0,t.a0)(t.wv,{get when(){return e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,t.a0)(Si,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),(0,t.Yr)(I,(0,t.a0)(t.wv,{get when(){return"array"===d()&&void 0!==e.activeQuery},get children(){return(0,t.a0)(Eu,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),(0,t.Yr)(I,(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!!e.onEdit)()&&!(0,t.lK)(e.value).meta},get children(){var T=bu();return T.$$click=()=>{e.onEdit?.()},(0,t.Yr)(T,(0,t.a0)(iu,{})),(0,t.gb)(()=>(0,t.s7)(T,o().actionButton)),T}}),null),(0,t.gb)(()=>(0,t.s7)(I,o().actions)),I}}),null),(0,t.gb)(I=>{var T=o().expanderButtonContainer,q=o().expanderButton,S=o().info;return T!==I.e&&(0,t.s7)(p,I.e=T),q!==I.t&&(0,t.s7)(m,I.t=q),S!==I.a&&(0,t.s7)(w,I.a=S),I},{e:void 0,t:void 0,a:void 0}),p),(0,t.a0)(t.wv,{get when(){return a()},get children(){return[(0,t.a0)(t.wv,{get when(){return 1===v().length},get children(){var p=Rt();return(0,t.Yr)(p,(0,t.a0)(Yt,{get each(){return f()},by:m=>m.label,children:m=>(0,t.a0)(nt,{get defaultExpanded(){return e.defaultExpanded},get label(){return m().label},get value(){return m().value},get editable(){return e.editable},get dataPath(){return[...g,m().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return"array"===d()||"Iterable"===d()||"object"===d()}})})),(0,t.gb)(()=>(0,t.s7)(p,o().subEntry)),p}}),(0,t.a0)(t.wv,{get when(){return v().length>1},get children(){var p=Rt();return(0,t.Yr)(p,(0,t.a0)(t.jK,{get each(){return v()},children:(m,y)=>(()=>{var b=Cu(),x=b.firstChild,w=x.firstChild,C=w.firstChild,I=C.nextSibling,q=I.nextSibling.nextSibling;return w.$$click=()=>u(S=>S.includes(y)?S.filter(A=>A!==y):[...S,y]),(0,t.Yr)(w,(0,t.a0)(Ci,{get expanded(){return s().includes(y)}}),C),(0,t.Yr)(w,100*y,I),(0,t.Yr)(w,100*y+100-1,q),(0,t.Yr)(x,(0,t.a0)(t.wv,{get when(){return s().includes(y)},get children(){var S=Rt();return(0,t.Yr)(S,(0,t.a0)(Yt,{get each(){return m()},by:A=>A.label,children:A=>(0,t.a0)(nt,{get defaultExpanded(){return e.defaultExpanded},get label(){return A().label},get value(){return A().value},get editable(){return e.editable},get dataPath(){return[...g,A().label]},get activeQuery(){return e.activeQuery}})})),(0,t.gb)(()=>(0,t.s7)(S,o().subEntry)),S}}),null),(0,t.gb)(S=>{var A=o().entry,_=o().expanderButton;return A!==S.e&&(0,t.s7)(x,S.e=A),_!==S.t&&(0,t.s7)(w,S.t=_),S},{e:void 0,t:void 0}),b})()})),(0,t.gb)(()=>(0,t.s7)(p,o().subEntry)),p}})]}})];var p,m,y,b,w,C}}),null),(0,t.Yr)(h,(0,t.a0)(t.wv,{get when(){return 0===v().length},get children(){var p=$u(),m=p.firstChild;return(0,t.Yr)(m,()=>e.label,m.firstChild),(0,t.Yr)(p,(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!(!e.editable||void 0===e.activeQuery))()&&("string"===d()||"number"===d()||"boolean"===d())},get fallback(){return b=$i(),(0,t.Yr)(b,()=>(0,t.KN)(e.value)),(0,t.gb)(()=>(0,t.s7)(b,o().value)),b;var b},get children(){return[(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!(!e.editable||void 0===e.activeQuery))()&&("string"===d()||"number"===d())},get children(){var b=wu();return b.addEventListener("change",x=>{const C=(0,t.zt)(e.activeQuery.state.data,g,"number"===d()?x.target.valueAsNumber:x.target.value);i.setQueryData(e.activeQuery.queryKey,C)}),(0,t.gb)(x=>{var w="number"===d()?"number":"text",C=D(o().value,o().editableInput);return w!==x.e&&(0,t.Bq)(b,"type",x.e=w),C!==x.t&&(0,t.s7)(b,x.t=C),x},{e:void 0,t:void 0}),(0,t.gb)(()=>b.value=e.value),b}}),(0,t.a0)(t.wv,{get when(){return"boolean"===d()},get children(){var b=$i();return(0,t.Yr)(b,(0,t.a0)(Tu,{get activeQuery(){return e.activeQuery},dataPath:g,get value(){return e.value}}),null),(0,t.Yr)(b,()=>(0,t.KN)(e.value),null),(0,t.gb)(()=>(0,t.s7)(b,D(o().value,o().actions,o().editableInput))),b}})]}}),null),(0,t.Yr)(p,(0,t.a0)(t.wv,{get when(){return e.editable&&e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,t.a0)(Si,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),(0,t.gb)(b=>{var x=o().row,w=o().label;return x!==b.e&&(0,t.s7)(p,b.e=x),w!==b.t&&(0,t.s7)(m,b.t=w),b},{e:void 0,t:void 0}),p}}),null),(0,t.gb)(()=>(0,t.s7)(h,o().entry)),h;var h}var Ei=(e,n)=>{const{colors:r,font:o,size:i,border:a}=$,l=(c,s)=>"light"===e?c:s;return{entry:n`
      & * {
        font-size: ${o.size.xs};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:n`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${l(r.gray[300],r.darkGray[400])};
      /* outline: 1px solid ${r.teal[400]}; */
    `,expander:n`
      & path {
        stroke: ${r.gray[400]};
      }
      & svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${r.blue[400]}; */
    `,expanderButtonContainer:n`
      display: flex;
      align-items: center;
      line-height: ${i[4]};
      min-height: ${i[4]};
      gap: ${i[2]};
    `,expanderButton:n`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${i[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${i[1]};
      position: relative;
      /* outline: 1px solid ${r.green[400]}; */

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:n`
      color: ${l(r.gray[500],r.gray[500])};
      font-size: ${o.size.xs};
      margin-left: ${i[1]};
      /* outline: 1px solid ${r.yellow[400]}; */
    `,label:n`
      color: ${l(r.gray[700],r.gray[300])};
      white-space: nowrap;
    `,value:n`
      color: ${l(r.purple[600],r.purple[400])};
      flex-grow: 1;
    `,actions:n`
      display: inline-flex;
      gap: ${i[2]};
      align-items: center;
    `,row:n`
      display: inline-flex;
      gap: ${i[2]};
      width: 100%;
      margin: ${i[.25]} 0px;
      line-height: ${i[4.5]};
      align-items: center;
    `,editableInput:n`
      border: none;
      padding: ${i[.5]} ${i[1]} ${i[.5]} ${i[1.5]};
      flex-grow: 1;
      border-radius: ${a.radius.xs};
      background-color: ${l(r.gray[200],r.darkGray[500])};

      &:hover {
        background-color: ${l(r.gray[300],r.darkGray[600])};
      }
    `,actionButton:n`
      background-color: transparent;
      color: ${l(r.gray[500],r.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${i[3]};
      height: ${i[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${l(r.gray[600],r.gray[400])};
      }

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${r.blue[800]};
        outline-offset: 2px;
      }
    `}},wt=e=>Ei("light",e),$t=e=>Ei("dark",e);(0,t.z_)(["click"]);var qu=(0,t.vs)('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),Ht=(0,t.vs)("<div>"),Mu=(0,t.vs)('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),Au=(0,t.vs)("<select name=tsqd-queries-filter-sort>"),Du=(0,t.vs)("<select name=tsqd-mutations-filter-sort>"),Iu=(0,t.vs)("<span>Asc"),Pu=(0,t.vs)("<span>Desc"),Ou=(0,t.vs)('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),Lu=(0,t.vs)("<div>Settings"),_u=(0,t.vs)("<span>Position"),Fu=(0,t.vs)("<span>Top"),zu=(0,t.vs)("<span>Bottom"),Ku=(0,t.vs)("<span>Left"),Bu=(0,t.vs)("<span>Right"),Ru=(0,t.vs)("<span>Theme"),Hu=(0,t.vs)("<span>Light"),Nu=(0,t.vs)("<span>Dark"),Uu=(0,t.vs)("<span>System"),Gu=(0,t.vs)("<div><div class=tsqd-queries-container>"),Vu=(0,t.vs)("<div><div class=tsqd-mutations-container>"),Yu=(0,t.vs)('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),Ti=(0,t.vs)("<option>Sort by "),ju=(0,t.vs)("<div class=tsqd-query-disabled-indicator>disabled"),qi=(0,t.vs)("<button><div></div><code class=tsqd-query-hash>"),Wu=(0,t.vs)("<div role=tooltip id=tsqd-status-tooltip>"),Qu=(0,t.vs)("<span>"),Xu=(0,t.vs)("<button><span></span><span>"),Zu=(0,t.vs)("<button><span></span> Error"),Ju=(0,t.vs)('<div><span></span>Trigger Error<select><option value=""disabled selected>'),ed=(0,t.vs)('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),td=(0,t.vs)("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),nd=(0,t.vs)('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),rd=(0,t.vs)("<option>"),od=(0,t.vs)('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[be,un]=(0,t.n5)(null),[rt,Mi]=(0,t.n5)(null),[De,tr]=(0,t.n5)(0),[Ct,Ai]=(0,t.n5)(!1),id=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?Ee(r):ke(r)),i=xn(),a=(0,t.To)(()=>P().buttonPosition||"bottom-right"),l=(0,t.To)(()=>"true"===e.localStore.open||"false"!==e.localStore.open&&(P().initialIsOpen||!1)),c=(0,t.To)(()=>e.localStore.position||P().position||bn);let s;(0,t.EH)(()=>{const f=s.parentElement,d=e.localStore.height||500,v=e.localStore.width||500,g=c();f.style.setProperty("--tsqd-panel-height",`${"top"===g?"-":""}${d}px`),f.style.setProperty("--tsqd-panel-width",`${"left"===g?"-":""}${v}px`)}),(0,t.Rc)(()=>{const f=()=>{const d=s.parentElement,v=getComputedStyle(d).fontSize;d.style.setProperty("--tsqd-font-size",v)};f(),window.addEventListener("focus",f),(0,t.Ki)(()=>{window.removeEventListener("focus",f)})});const u=(0,t.To)(()=>e.localStore.pip_open??"false");return[(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!!i().pipWindow)()&&"true"==u()},get children(){return(0,t.a0)(t.ZL,{get mount(){return i().pipWindow?.document.body},get children(){return(0,t.a0)(sd,{get children(){return(0,t.a0)(nr,e)}})}})}}),(f=Ht(),"function"==typeof s?(0,t.Yx)(s,f):s=f,(0,t.Yr)(f,(0,t.a0)($r,{name:"tsqd-panel-transition",get children(){return(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!(!l()||i().pipWindow))()&&"false"==u()},get children(){return(0,t.a0)(ld,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),(0,t.Yr)(f,(0,t.a0)($r,{name:"tsqd-button-transition",get children(){return(0,t.a0)(t.wv,{get when(){return!l()},get children(){var v=qu(),g=v.firstChild,h=g.nextSibling;return(0,t.Yr)(g,(0,t.a0)(wi,{})),h.$$click=()=>e.setLocalStore("open","true"),(0,t.Yr)(h,(0,t.a0)(wi,{})),(0,t.gb)(()=>(0,t.s7)(v,D(o().devtoolsBtn,o()[`devtoolsBtn-position-${a()}`],"tsqd-open-btn-container"))),v}})}}),null),(0,t.gb)(()=>(0,t.s7)(f,D(r`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${"top"===c()||"bottom"===c()?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${"relative"===a()?"none;":"top-left"===a()?"translateX(-72px);":"top-right"===a()?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),f)];var f},sd=e=>{const n=xn(),r=oe(),o=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,i=(0,t.To)(()=>"dark"===r()?Ee(o):ke(o));return(0,t.EH)(()=>{const l=n().pipWindow,c=()=>{l&&tr(l.innerWidth)};l&&(l.addEventListener("resize",c),c()),(0,t.Ki)(()=>{l&&l.removeEventListener("resize",c)})}),(l=Ht()).style.setProperty("--tsqd-font-size","16px"),l.style.setProperty("max-height","100vh"),l.style.setProperty("height","100vh"),l.style.setProperty("width","100vw"),(0,t.Yr)(l,()=>e.children),(0,t.gb)(()=>(0,t.s7)(l,D(i().panel,(()=>{const{colors:l}=$,c=(s,u)=>"dark"===r()?u:s;return De()<796?o`
        flex-direction: column;
        background-color: ${c(l.gray[300],l.gray[600])};
      `:o`
      flex-direction: row;
      background-color: ${c(l.gray[200],l.darkGray[900])};
    `})(),{[o`
            min-width: min-content;
          `]:De()<700},"tsqd-main-panel"))),l;var l},ad=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?Ee(r):ke(r));let i;return(0,t.Rc)(()=>{Sr(i,({width:l},c)=>{c===i&&tr(l)})}),l=Ht(),"function"==typeof i?(0,t.Yx)(i,l):i=l,l.style.setProperty("--tsqd-font-size","16px"),(0,t.Yr)(l,()=>e.children),(0,t.gb)(()=>(0,t.s7)(l,D(o().parentPanel,(()=>{const{colors:l}=$,c=(s,u)=>"dark"===n()?u:s;return De()<796?r`
        flex-direction: column;
        background-color: ${c(l.gray[300],l.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${c(l.gray[200],l.darkGray[900])};
    `})(),{[r`
            min-width: min-content;
          `]:De()<700},"tsqd-main-panel"))),l;var l},ld=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?Ee(r):ke(r)),[i,a]=(0,t.n5)(!1),l=(0,t.To)(()=>e.localStore.position||P().position||bn);let s;return(0,t.Rc)(()=>{Sr(s,({width:f},d)=>{d===s&&tr(f)})}),(0,t.EH)(()=>{const f=s.parentElement?.parentElement?.parentElement;if(!f)return;const v=(0,t.zZ)("padding",e.localStore.position||bn),g="left"===e.localStore.position||"right"===e.localStore.position,h=(({padding:p,paddingTop:m,paddingBottom:y,paddingLeft:b,paddingRight:x})=>({padding:p,paddingTop:m,paddingBottom:y,paddingLeft:b,paddingRight:x}))(f.style);f.style[v]=`${g?e.localStore.width:e.localStore.height}px`,(0,t.Ki)(()=>{Object.entries(h).forEach(([p,m])=>{f.style[p]=m})})}),f=Mu(),v=(d=f.firstChild).nextSibling,"function"==typeof s?(0,t.Yx)(s,f):s=f,d.$$mousedown=f=>{const d=f.currentTarget.parentElement;if(!d)return;a(!0);const{height:v,width:g}=d.getBoundingClientRect(),h=f.clientX,p=f.clientY;let m=0;const y=(0,t.mO)(3.5),b=(0,t.mO)(12),x=C=>{if(C.preventDefault(),"left"===l()||"right"===l()){const I="right"===l()?h-C.clientX:C.clientX-h;m=Math.round(g+I),m<b&&(m=b),e.setLocalStore("width",String(Math.round(m)));const T=d.getBoundingClientRect().width;Number(e.localStore.width)<T&&e.setLocalStore("width",String(T))}else{const I="bottom"===l()?p-C.clientY:C.clientY-p;m=Math.round(v+I),m<y&&(m=y,un(null)),e.setLocalStore("height",String(Math.round(m)))}},w=()=>{i()&&a(!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("mouseUp",w,!1)};document.addEventListener("mousemove",x,!1),document.addEventListener("mouseup",w,!1)},v.$$click=()=>e.setLocalStore("open","false"),(0,t.Yr)(v,(0,t.a0)(Bt,{})),(0,t.Yr)(f,(0,t.a0)(nr,e),null),(0,t.gb)(h=>{var p=D(o().panel,o()[`panel-position-${l()}`],(()=>{const{colors:f}=$,d=(v,g)=>"dark"===n()?g:v;return De()<796?r`
        flex-direction: column;
        background-color: ${d(f.gray[300],f.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${d(f.gray[200],f.darkGray[900])};
    `})(),{[r`
            min-width: min-content;
          `]:De()<700&&("right"===l()||"left"===l())},"tsqd-main-panel"),m="bottom"===l()||"top"===l()?`${e.localStore.height||500}px`:"auto",y="right"===l()||"left"===l()?`${e.localStore.width||500}px`:"auto",b=D(o().dragHandle,o()[`dragHandle-position-${l()}`],"tsqd-drag-handle"),x=D(o().closeBtn,o()[`closeBtn-position-${l()}`],"tsqd-minimize-btn");return p!==h.e&&(0,t.s7)(f,h.e=p),m!==h.t&&(null!=(h.t=m)?f.style.setProperty("height",m):f.style.removeProperty("height")),y!==h.a&&(null!=(h.a=y)?f.style.setProperty("width",y):f.style.removeProperty("width")),b!==h.o&&(0,t.s7)(d,h.o=b),x!==h.i&&(0,t.s7)(v,h.i=x),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),f;var f,d,v},nr=e=>{let n;vd(),pd();const r=oe(),o=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,i=(0,t.To)(()=>"dark"===r()?Ee(o):ke(o)),a=xn(),[l,c]=(0,t.n5)("queries"),s=(0,t.To)(()=>e.localStore.sort||us),u=(0,t.To)(()=>Number(e.localStore.sortOrder)||1),f=(0,t.To)(()=>e.localStore.mutationSort||ds),d=(0,t.To)(()=>Number(e.localStore.mutationSortOrder)||1),v=(0,t.To)(()=>t.O$[s()]),g=(0,t.To)(()=>t.bs[f()]),h=(0,t.To)(()=>P().onlineManager),p=(0,t.To)(()=>P().client.getQueryCache()),m=(0,t.To)(()=>P().client.getMutationCache()),y=ae(T=>T().getAll().length,!1),b=(0,t.To)((0,t.on)(()=>[y(),e.localStore.filter,s(),u()],()=>{const T=p().getAll(),q=e.localStore.filter?T.filter(A=>fr(A.queryHash,e.localStore.filter||"").passed):[...T];return v()?q.sort((A,_)=>v()(A,_)*u()):q})),x=Ie(T=>T().getAll().length,!1),w=(0,t.To)((0,t.on)(()=>[x(),e.localStore.mutationFilter,f(),d()],()=>{const T=m().getAll(),q=e.localStore.mutationFilter?T.filter(A=>fr(`${A.options.mutationKey?JSON.stringify(A.options.mutationKey)+" - ":""}${new Date(A.state.submittedAt).toLocaleString()}`,e.localStore.mutationFilter||"").passed):[...T];return g()?q.sort((A,_)=>g()(A,_)*d()):q})),C=T=>{e.setLocalStore("position",T)},I=T=>{const S=getComputedStyle(n).getPropertyValue("--tsqd-font-size");T.style.setProperty("--tsqd-font-size",S)};return[(T=Yu(),q=T.firstChild,S=q.firstChild,A=S.firstChild,_=A.firstChild,O=_.nextSibling,N=O.firstChild,R=q.nextSibling,X=R.firstChild,V=X.firstChild,U=V.firstChild,Y=V.nextSibling,Z=Y.nextSibling,re=X.nextSibling,ve=re.firstChild,te=ve.nextSibling,"function"==typeof n?(0,t.Yx)(n,T):n=T,A.$$click=()=>{a().pipWindow||e.showPanelViewOnly?e.onClose&&e.onClose():e.setLocalStore("open","false")},(0,t.Yr)(O,()=>P().queryFlavor,N),(0,t.Yr)(O,()=>P().version,null),(0,t.Yr)(S,(0,t.a0)(Ce.Root,{get class(){return D(i().viewToggle)},get value(){return l()},onChange:E=>{c(E),un(null),Mi(null)},get children(){return[(0,t.a0)(Ce.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[(0,t.a0)(Ce.ItemInput,{}),(0,t.a0)(Ce.ItemControl,{get children(){return(0,t.a0)(Ce.ItemIndicator,{})}}),(0,t.a0)(Ce.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),(0,t.a0)(Ce.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[(0,t.a0)(Ce.ItemInput,{}),(0,t.a0)(Ce.ItemControl,{get children(){return(0,t.a0)(Ce.ItemIndicator,{})}}),(0,t.a0)(Ce.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),(0,t.Yr)(q,(0,t.a0)(t.wv,{get when(){return"queries"===l()},get children(){return(0,t.a0)(dd,{})}}),null),(0,t.Yr)(q,(0,t.a0)(t.wv,{get when(){return"mutations"===l()},get children(){return(0,t.a0)(fd,{})}}),null),(0,t.Yr)(V,(0,t.a0)(jc,{}),U),U.$$input=E=>{"queries"===l()?e.setLocalStore("filter",E.currentTarget.value):e.setLocalStore("mutationFilter",E.currentTarget.value)},(0,t.Yr)(Y,(0,t.a0)(t.wv,{get when(){return"queries"===l()},get children(){var E=Au();return E.addEventListener("change",ee=>{e.setLocalStore("sort",ee.currentTarget.value)}),(0,t.Yr)(E,()=>Object.keys(t.O$).map(ee=>{return(K=Ti()).value=ee,(0,t.Yr)(K,ee,null),K;var K})),(0,t.gb)(()=>E.value=s()),E}}),null),(0,t.Yr)(Y,(0,t.a0)(t.wv,{get when(){return"mutations"===l()},get children(){var E=Du();return E.addEventListener("change",ee=>{e.setLocalStore("mutationSort",ee.currentTarget.value)}),(0,t.Yr)(E,()=>Object.keys(t.bs).map(ee=>{return(K=Ti()).value=ee,(0,t.Yr)(K,ee,null),K;var K})),(0,t.gb)(()=>E.value=f()),E}}),null),(0,t.Yr)(Y,(0,t.a0)(Bt,{}),null),Z.$$click=()=>{"queries"===l()?e.setLocalStore("sortOrder",String(-1*u())):e.setLocalStore("mutationSortOrder",String(-1*d()))},(0,t.Yr)(Z,(0,t.a0)(t.wv,{get when(){return 1===("queries"===l()?u():d())},get children(){return[Iu(),(0,t.a0)(bi,{})]}}),null),(0,t.Yr)(Z,(0,t.a0)(t.wv,{get when(){return-1===("queries"===l()?u():d())},get children(){return[Pu(),(0,t.a0)(xi,{})]}}),null),ve.$$click=()=>{"queries"===l()?p().clear():m().clear()},(0,t.Yr)(ve,(0,t.a0)(yi,{})),te.$$click=()=>{Ct()?(h().setOnline(!0),Ai(!1)):(h().setOnline(!1),Ai(!0))},(0,t.Yr)(te,(E=(0,t.To)(()=>!!Ct()),()=>E()?(0,t.a0)(tu,{}):(0,t.a0)(eu,{}))),(0,t.Yr)(re,(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!a().pipWindow)()&&!a().disabled},get children(){var E=Ou();return E.$$click=()=>{a().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},(0,t.Yr)(E,(0,t.a0)(ru,{})),(0,t.gb)(()=>(0,t.s7)(E,D(i().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),E}}),null),(0,t.Yr)(re,(0,t.a0)(ne.Root,{gutter:4,get children(){return[(0,t.a0)(ne.Trigger,{get class(){return D(i().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return(0,t.a0)(nu,{})}}),(0,t.a0)(ne.Portal,{ref:E=>I(E),get mount(){return(0,t.To)(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return(0,t.a0)(ne.Content,{get class(){return D(i().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var E=Lu();return(0,t.gb)(()=>(0,t.s7)(E,D(i().settingsMenuHeader,"tsqd-settings-menu-header"))),E})(),(0,t.a0)(t.wv,{get when(){return!e.showPanelViewOnly},get children(){return(0,t.a0)(ne.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,t.a0)(ne.SubTrigger,{get class(){return D(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[_u(),(0,t.a0)(Bt,{})]}}),(0,t.a0)(ne.Portal,{ref:E=>I(E),get mount(){return(0,t.To)(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return(0,t.a0)(ne.SubContent,{get class(){return D(i().settingsMenu,"tsqd-settings-submenu")},get children(){return[(0,t.a0)(ne.Item,{onSelect:()=>{C("top")},as:"button",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Fu(),(0,t.a0)(bi,{})]}}),(0,t.a0)(ne.Item,{onSelect:()=>{C("bottom")},as:"button",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[zu(),(0,t.a0)(xi,{})]}}),(0,t.a0)(ne.Item,{onSelect:()=>{C("left")},as:"button",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Ku(),(0,t.a0)(Wc,{})]}}),(0,t.a0)(ne.Item,{onSelect:()=>{C("right")},as:"button",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Bu(),(0,t.a0)(Qc,{})]}})]}})}})]}})}}),(0,t.a0)(ne.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,t.a0)(ne.SubTrigger,{get class(){return D(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Ru(),(0,t.a0)(Bt,{})]}}),(0,t.a0)(ne.Portal,{ref:E=>I(E),get mount(){return(0,t.To)(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return(0,t.a0)(ne.SubContent,{get class(){return D(i().settingsMenu,"tsqd-settings-submenu")},get children(){return[(0,t.a0)(ne.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return D(i().settingsSubButton,"light"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Hu(),(0,t.a0)(Xc,{})]}}),(0,t.a0)(ne.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return D(i().settingsSubButton,"dark"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Nu(),(0,t.a0)(Zc,{})]}}),(0,t.a0)(ne.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return D(i().settingsSubButton,"system"===e.localStore.theme_preference&&i().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Uu(),(0,t.a0)(Jc,{})]}})]}})}})]}})]}})}})]}}),null),(0,t.Yr)(T,(0,t.a0)(t.wv,{get when(){return"queries"===l()},get children(){var E=Gu();return(0,t.Yr)(E.firstChild,(0,t.a0)(Yt,{by:K=>K.queryHash,get each(){return b()},children:K=>(0,t.a0)(cd,{get query(){return K()}})})),(0,t.gb)(()=>(0,t.s7)(E,D(i().overflowQueryContainer,"tsqd-queries-overflow-container"))),E}}),null),(0,t.Yr)(T,(0,t.a0)(t.wv,{get when(){return"mutations"===l()},get children(){var E=Vu();return(0,t.Yr)(E.firstChild,(0,t.a0)(Yt,{by:K=>K.mutationId,get each(){return w()},children:K=>(0,t.a0)(ud,{get mutation(){return K()}})})),(0,t.gb)(()=>(0,t.s7)(E,D(i().overflowQueryContainer,"tsqd-mutations-overflow-container"))),E}}),null),(0,t.gb)(E=>{var ee=D(i().queriesContainer,De()<796&&(be()||rt())&&o`
              height: 50%;
              max-height: 50%;
            `,De()<796&&!(be()||rt())&&o`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),K=D(i().row,"tsqd-header"),ot=i().logoAndToggleContainer,L=D(i().logo,"tsqd-text-logo-container"),Pe=D(i().tanstackLogo,"tsqd-text-logo-tanstack"),ue=D(i().queryFlavorLogo,"tsqd-text-logo-query-flavor"),St=D(i().row,"tsqd-filters-actions-container"),Te=D(i().filtersContainer,"tsqd-filters-container"),it=D(i().filterInput,"tsqd-query-filter-textfield-container"),ft=D("tsqd-query-filter-textfield"),Ve=D(i().filterSelect,"tsqd-query-filter-sort-container"),Ke="Sort order "+(-1===("queries"===l()?u():d())?"descending":"ascending"),Ye=-1===("queries"===l()?u():d()),M=D(i().actionsContainer,"tsqd-actions-container"),G=D(i().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),ge=`Clear ${l()} cache`,j=D(i().actionsBtn,Ct()&&i().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),H=Ct()?"Unset offline mocking behavior":"Mock offline behavior",J=Ct(),se=Ct()?"Unset offline mocking behavior":"Mock offline behavior";return ee!==E.e&&(0,t.s7)(T,E.e=ee),K!==E.t&&(0,t.s7)(q,E.t=K),ot!==E.a&&(0,t.s7)(S,E.a=ot),L!==E.o&&(0,t.s7)(A,E.o=L),Pe!==E.i&&(0,t.s7)(_,E.i=Pe),ue!==E.n&&(0,t.s7)(O,E.n=ue),St!==E.s&&(0,t.s7)(R,E.s=St),Te!==E.h&&(0,t.s7)(X,E.h=Te),it!==E.r&&(0,t.s7)(V,E.r=it),ft!==E.d&&(0,t.s7)(U,E.d=ft),Ve!==E.l&&(0,t.s7)(Y,E.l=Ve),Ke!==E.u&&(0,t.Bq)(Z,"aria-label",E.u=Ke),Ye!==E.c&&(0,t.Bq)(Z,"aria-pressed",E.c=Ye),M!==E.w&&(0,t.s7)(re,E.w=M),G!==E.m&&(0,t.s7)(ve,E.m=G),ge!==E.f&&(0,t.Bq)(ve,"title",E.f=ge),j!==E.y&&(0,t.s7)(te,E.y=j),H!==E.g&&(0,t.Bq)(te,"aria-label",E.g=H),J!==E.p&&(0,t.Bq)(te,"aria-pressed",E.p=J),se!==E.b&&(0,t.Bq)(te,"title",E.b=se),E},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),(0,t.gb)(()=>U.value="queries"===l()?e.localStore.filter||"":e.localStore.mutationFilter||""),T),(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>"queries"===l())()&&be()},get children(){return(0,t.a0)(gd,{})}}),(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>"mutations"===l())()&&rt()},get children(){return(0,t.a0)(hd,{})}})];var E,T,q,S,A,_,O,N,R,X,V,U,Y,Z,re,ve,te},cd=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?Ee(r):ke(r)),{colors:i,alpha:a}=$,l=(g,h)=>"dark"===n()?h:g,c=ae(g=>g().find({queryKey:e.query.queryKey})?.state,!0,g=>g.query.queryHash===e.query.queryHash),s=ae(g=>g().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,g=>g.query.queryHash===e.query.queryHash),u=ae(g=>g().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,g=>g.query.queryHash===e.query.queryHash),f=ae(g=>g().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,g=>g.query.queryHash===e.query.queryHash),d=(0,t.To)(()=>(0,t.MI)({queryState:c(),observerCount:f(),isStale:u()}));return(0,t.a0)(t.wv,{get when(){return c()},get children(){var g=qi(),h=g.firstChild,p=h.nextSibling;return g.$$click=()=>un(e.query.queryHash===be()?null:e.query.queryHash),(0,t.Yr)(h,f),(0,t.Yr)(p,()=>e.query.queryHash),(0,t.Yr)(g,(0,t.a0)(t.wv,{get when(){return s()},get children(){return ju()}}),null),(0,t.gb)(m=>{var y=D(o().queryRow,be()===e.query.queryHash&&o().selectedQueryRow,"tsqd-query-row"),b=`Query key ${e.query.queryHash}`,x=D("gray"===d()?r`
        background-color: ${l(i[d()][200],i[d()][700])};
        color: ${l(i[d()][700],i[d()][300])};
      `:r`
      background-color: ${l(i[d()][200]+a[80],i[d()][900])};
      color: ${l(i[d()][800],i[d()][300])};
    `,"tsqd-query-observer-count");return y!==m.e&&(0,t.s7)(g,m.e=y),b!==m.t&&(0,t.Bq)(g,"aria-label",m.t=b),x!==m.a&&(0,t.s7)(h,m.a=x),m},{e:void 0,t:void 0,a:void 0}),g}})},ud=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?Ee(r):ke(r)),{colors:i,alpha:a}=$,l=(v,g)=>"dark"===n()?g:v,c=Ie(v=>v().getAll().find(p=>p.mutationId===e.mutation.mutationId)?.state),s=Ie(v=>{const h=v().getAll().find(p=>p.mutationId===e.mutation.mutationId);return!!h&&h.state.isPaused}),u=Ie(v=>{const h=v().getAll().find(p=>p.mutationId===e.mutation.mutationId);return h?h.state.status:"idle"}),f=(0,t.To)(()=>(0,t.TH)({isPaused:s(),status:u()}));return(0,t.a0)(t.wv,{get when(){return c()},get children(){var v=qi(),g=v.firstChild,h=g.nextSibling;return v.$$click=()=>{Mi(e.mutation.mutationId===rt()?null:e.mutation.mutationId)},(0,t.Yr)(g,(0,t.a0)(t.wv,{get when(){return"purple"===f()},get children(){return(0,t.a0)(gu,{})}}),null),(0,t.Yr)(g,(0,t.a0)(t.wv,{get when(){return"green"===f()},get children(){return(0,t.a0)(uu,{})}}),null),(0,t.Yr)(g,(0,t.a0)(t.wv,{get when(){return"red"===f()},get children(){return(0,t.a0)(fu,{})}}),null),(0,t.Yr)(g,(0,t.a0)(t.wv,{get when(){return"yellow"===f()},get children(){return(0,t.a0)(du,{})}}),null),(0,t.Yr)(h,(0,t.a0)(t.wv,{get when(){return e.mutation.options.mutationKey},get children(){return[(0,t.To)(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),(0,t.Yr)(h,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),(0,t.gb)(p=>{var m=D(o().queryRow,rt()===e.mutation.mutationId&&o().selectedQueryRow,"tsqd-query-row"),y=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,b=D("gray"===f()?r`
        background-color: ${l(i[f()][200],i[f()][700])};
        color: ${l(i[f()][700],i[f()][300])};
      `:r`
      background-color: ${l(i[f()][200]+a[80],i[f()][900])};
      color: ${l(i[f()][800],i[f()][300])};
    `,"tsqd-query-observer-count");return m!==p.e&&(0,t.s7)(v,p.e=m),y!==p.t&&(0,t.Bq)(v,"aria-label",p.t=y),b!==p.a&&(0,t.s7)(g,p.a=b),p},{e:void 0,t:void 0,a:void 0}),v}})},dd=()=>{const e=ae(s=>s().getAll().filter(u=>"stale"===(0,t.lR)(u)).length),n=ae(s=>s().getAll().filter(u=>"fresh"===(0,t.lR)(u)).length),r=ae(s=>s().getAll().filter(u=>"fetching"===(0,t.lR)(u)).length),o=ae(s=>s().getAll().filter(u=>"paused"===(0,t.lR)(u)).length),i=ae(s=>s().getAll().filter(u=>"inactive"===(0,t.lR)(u)).length),a=oe(),l=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,c=(0,t.To)(()=>"dark"===a()?Ee(l):ke(l));return s=Ht(),(0,t.Yr)(s,(0,t.a0)(Ge,{label:"Fresh",color:"green",get count(){return n()}}),null),(0,t.Yr)(s,(0,t.a0)(Ge,{label:"Fetching",color:"blue",get count(){return r()}}),null),(0,t.Yr)(s,(0,t.a0)(Ge,{label:"Paused",color:"purple",get count(){return o()}}),null),(0,t.Yr)(s,(0,t.a0)(Ge,{label:"Stale",color:"yellow",get count(){return e()}}),null),(0,t.Yr)(s,(0,t.a0)(Ge,{label:"Inactive",color:"gray",get count(){return i()}}),null),(0,t.gb)(()=>(0,t.s7)(s,D(c().queryStatusContainer,"tsqd-query-status-container"))),s;var s},fd=()=>{const e=Ie(c=>c().getAll().filter(s=>"green"===(0,t.TH)({isPaused:s.state.isPaused,status:s.state.status})).length),n=Ie(c=>c().getAll().filter(s=>"yellow"===(0,t.TH)({isPaused:s.state.isPaused,status:s.state.status})).length),r=Ie(c=>c().getAll().filter(s=>"purple"===(0,t.TH)({isPaused:s.state.isPaused,status:s.state.status})).length),o=Ie(c=>c().getAll().filter(s=>"red"===(0,t.TH)({isPaused:s.state.isPaused,status:s.state.status})).length),i=oe(),a=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,l=(0,t.To)(()=>"dark"===i()?Ee(a):ke(a));return c=Ht(),(0,t.Yr)(c,(0,t.a0)(Ge,{label:"Paused",color:"purple",get count(){return r()}}),null),(0,t.Yr)(c,(0,t.a0)(Ge,{label:"Pending",color:"yellow",get count(){return n()}}),null),(0,t.Yr)(c,(0,t.a0)(Ge,{label:"Success",color:"green",get count(){return e()}}),null),(0,t.Yr)(c,(0,t.a0)(Ge,{label:"Error",color:"red",get count(){return o()}}),null),(0,t.gb)(()=>(0,t.s7)(c,D(l().queryStatusContainer,"tsqd-query-status-container"))),c;var c},Ge=e=>{const n=oe(),r=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,o=(0,t.To)(()=>"dark"===n()?Ee(r):ke(r)),{colors:i,alpha:a}=$,l=(g,h)=>"dark"===n()?h:g;let c;const[s,u]=(0,t.n5)(!1),[f,d]=(0,t.n5)(!1),v=(0,t.To)(()=>!(be()&&De()<1024&&De()>796||De()<796));return g=Xu(),p=(h=g.firstChild).nextSibling,"function"==typeof c?(0,t.Yx)(c,g):c=g,g.addEventListener("mouseleave",()=>{u(!1),d(!1)}),g.addEventListener("mouseenter",()=>u(!0)),g.addEventListener("blur",()=>d(!1)),g.addEventListener("focus",()=>d(!0)),(0,t.il)(g,(0,t.v6)({get disabled(){return v()},get class(){return D(o().queryStatusTag,!v()&&r`
            cursor: pointer;
            &:hover {
              background: ${l(i.gray[200],i.darkGray[400])}${a[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>s()||f()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),(0,t.Yr)(g,(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!v())()&&(s()||f())},get children(){var y=Wu();return(0,t.Yr)(y,()=>e.label),(0,t.gb)(()=>(0,t.s7)(y,D(o().statusTooltip,"tsqd-query-status-tooltip"))),y}}),h),(0,t.Yr)(g,(0,t.a0)(t.wv,{get when(){return v()},get children(){var y=Qu();return(0,t.Yr)(y,()=>e.label),(0,t.gb)(()=>(0,t.s7)(y,D(o().queryStatusTagLabel,"tsqd-query-status-tag-label"))),y}}),p),(0,t.Yr)(p,()=>e.count),(0,t.gb)(y=>{var b=D(r`
            width: ${$.size[1.5]};
            height: ${$.size[1.5]};
            border-radius: ${$.border.radius.full};
            background-color: ${$.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),x=D(o().queryStatusCount,e.count>0&&"gray"!==e.color&&r`
              background-color: ${l(i[e.color][100],i[e.color][900])};
              color: ${l(i[e.color][700],i[e.color][300])};
            `,"tsqd-query-status-tag-count");return b!==y.e&&(0,t.s7)(h,y.e=b),x!==y.t&&(0,t.s7)(p,y.t=x),y},{e:void 0,t:void 0}),g;var g,h,p},gd=()=>{const e=oe(),n=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,r=(0,t.To)(()=>"dark"===e()?Ee(n):ke(n)),{colors:o}=$,i=(S,A)=>"dark"===e()?A:S,a=P().client,[l,c]=(0,t.n5)(!1),[s,u]=(0,t.n5)("view"),[f,d]=(0,t.n5)(!1),v=(0,t.To)(()=>P().errorTypes||[]),g=ae(S=>S().getAll().find(A=>A.queryHash===be()),!1),h=ae(S=>S().getAll().find(A=>A.queryHash===be()),!1),p=ae(S=>S().getAll().find(A=>A.queryHash===be())?.state,!1),m=ae(S=>S().getAll().find(A=>A.queryHash===be())?.state.data,!1),y=ae(S=>{const A=S().getAll().find(_=>_.queryHash===be());return A?(0,t.lR)(A):"inactive"}),b=ae(S=>{const A=S().getAll().find(_=>_.queryHash===be());return A?A.state.status:"pending"}),x=ae(S=>S().getAll().find(A=>A.queryHash===be())?.getObserversCount()??0),w=(0,t.To)(()=>(0,t.ZZ)(y())),C=()=>{g()?.fetch()?.catch(()=>{})},I=S=>{const A=S?.initializer(g())??new Error("Unknown error from devtools"),_=g().options;g().setState({status:"error",error:A,fetchMeta:{...g().state.fetchMeta,__previousQueryOptions:_}})};return(0,t.EH)(()=>{"fetching"!==y()&&c(!1)}),(0,t.a0)(t.wv,{get when(){return(0,t.To)(()=>!!g())()&&p()},get children(){var S=nd(),A=S.firstChild,_=A.nextSibling,O=_.firstChild,N=O.firstChild,X=N.nextSibling,V=O.nextSibling,Y=V.firstChild.nextSibling,ve=V.nextSibling.firstChild.nextSibling,te=_.nextSibling,fe=te.nextSibling,E=fe.firstChild,ee=E.firstChild,K=E.nextSibling,ot=K.firstChild,L=K.nextSibling,Pe=L.firstChild,ue=L.nextSibling,St=ue.firstChild,Te=ue.nextSibling,it=Te.firstChild,ft=it.nextSibling,Ve=fe.nextSibling,Ke=Ve.nextSibling,Ye=Ke.nextSibling;return(0,t.Yr)(N.firstChild,()=>(0,t.KN)(g().queryKey,!0)),(0,t.Yr)(X,y),(0,t.Yr)(Y,x),(0,t.Yr)(ve,()=>new Date(p().dataUpdatedAt).toLocaleTimeString()),E.$$click=C,K.$$click=()=>a.invalidateQueries(g()),L.$$click=()=>a.resetQueries(g()),ue.$$click=()=>{a.removeQueries(g()),un(null)},Te.$$click=()=>{if(void 0===g()?.state.data)c(!0),(()=>{const S=g(),A=S.state,_=S.state.fetchMeta?S.state.fetchMeta.__previousQueryOptions:null;S.cancel({silent:!0}),S.setState({...A,fetchStatus:"idle",fetchMeta:null}),_&&S.fetch(_)})();else{const M=g();if(!M)return;const G=M.options;M.fetch({...G,queryFn:()=>new Promise(()=>{}),gcTime:-1}),M.setState({data:void 0,status:"pending",fetchMeta:{...M.state.fetchMeta,__previousQueryOptions:G}})}},(0,t.Yr)(Te,()=>"pending"===b()?"Restore":"Trigger",ft),(0,t.Yr)(fe,(0,t.a0)(t.wv,{get when(){return 0===v().length||"error"===b()},get children(){var M=Zu(),G=M.firstChild,ge=G.nextSibling;return M.$$click=()=>{g().state.error?a.resetQueries(g()):I()},(0,t.Yr)(M,()=>"error"===b()?"Restore":"Trigger",ge),(0,t.gb)(j=>{var H=D(n`
                  color: ${i(o.red[500],o.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),J="pending"===b(),se=n`
                  background-color: ${i(o.red[500],o.red[400])};
                `;return H!==j.e&&(0,t.s7)(M,j.e=H),J!==j.t&&(M.disabled=j.t=J),se!==j.a&&(0,t.s7)(G,j.a=se),j},{e:void 0,t:void 0,a:void 0}),M}}),null),(0,t.Yr)(fe,(0,t.a0)(t.wv,{get when(){return!(0===v().length||"error"===b())},get children(){var M=Ju(),G=M.firstChild,j=G.nextSibling.nextSibling;return j.addEventListener("change",H=>{const J=v().find(se=>se.name===H.currentTarget.value);I(J)}),(0,t.Yr)(j,(0,t.a0)(t.a,{get each(){return v()},children:H=>{return J=rd(),(0,t.Yr)(J,()=>H.name),(0,t.gb)(()=>J.value=H.name),J;var J}}),null),(0,t.Yr)(M,(0,t.a0)(Bt,{}),null),(0,t.gb)(H=>{var J=D(r().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),se=n`
                  background-color: ${$.colors.red[400]};
                `,B="pending"===b();return J!==H.e&&(0,t.s7)(M,H.e=J),se!==H.t&&(0,t.s7)(G,H.t=se),B!==H.a&&(j.disabled=H.a=B),H},{e:void 0,t:void 0,a:void 0}),M}}),null),(0,t.Yr)(Ve,()=>"view"===s()?"Explorer":"Editor",null),(0,t.Yr)(S,(0,t.a0)(t.wv,{get when(){return"view"===s()},get children(){var M=ed();return(0,t.Yr)(M,(0,t.a0)(nt,{label:"Data",defaultExpanded:["Data"],get value(){return m()},editable:!0,onEdit:()=>u("edit"),get activeQuery(){return g()}})),(0,t.gb)(G=>null!=(G=$.size[2])?M.style.setProperty("padding",G):M.style.removeProperty("padding")),M}}),Ke),(0,t.Yr)(S,(0,t.a0)(t.wv,{get when(){return"edit"===s()},get children(){var M=td(),G=M.firstChild,ge=G.nextSibling,j=ge.firstChild,H=j.nextSibling,J=H.firstChild,se=J.nextSibling;return M.addEventListener("submit",B=>{B.preventDefault();const We=new FormData(B.currentTarget).get("data");try{const Oe=JSON.parse(We);g().setState({...g().state,data:Oe}),u("view")}catch{d(!0)}}),G.addEventListener("focus",()=>d(!1)),(0,t.Yr)(j,()=>f()?"Invalid Value":""),J.$$click=()=>u("view"),(0,t.gb)(B=>{var je=D(r().devtoolsEditForm,"tsqd-query-details-data-editor"),We=r().devtoolsEditTextarea,Oe=f(),gt=r().devtoolsEditFormActions,Qe=r().devtoolsEditFormError,ht=r().devtoolsEditFormActionContainer,Xe=D(r().devtoolsEditFormAction,n`
                      color: ${i(o.gray[600],o.gray[300])};
                    `),st=D(r().devtoolsEditFormAction,n`
                      color: ${i(o.blue[600],o.blue[400])};
                    `);return je!==B.e&&(0,t.s7)(M,B.e=je),We!==B.t&&(0,t.s7)(G,B.t=We),Oe!==B.a&&(0,t.Bq)(G,"data-error",B.a=Oe),gt!==B.o&&(0,t.s7)(ge,B.o=gt),Qe!==B.i&&(0,t.s7)(j,B.i=Qe),ht!==B.n&&(0,t.s7)(H,B.n=ht),Xe!==B.s&&(0,t.s7)(J,B.s=Xe),st!==B.h&&(0,t.s7)(se,B.h=st),B},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),(0,t.gb)(()=>G.value=JSON.stringify(m(),null,2)),M}}),Ke),(0,t.Yr)(Ye,(0,t.a0)(nt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),(0,t.gb)(M=>{var G=D(r().detailsContainer,"tsqd-query-details-container"),ge=D(r().detailsHeader,"tsqd-query-details-header"),j=D(r().detailsBody,"tsqd-query-details-summary-container"),H=D(r().queryDetailsStatus,"gray"===w()?n`
        background-color: ${i(o[w()][200],o[w()][700])};
        color: ${i(o[w()][700],o[w()][300])};
        border-color: ${i(o[w()][400],o[w()][600])};
      `:n`
      background-color: ${i(o[w()][100],o[w()][900])};
      color: ${i(o[w()][700],o[w()][300])};
      border-color: ${i(o[w()][400],o[w()][600])};
    `),J=D(r().detailsHeader,"tsqd-query-details-header"),se=D(r().actionsBody,"tsqd-query-details-actions-container"),B=D(n`
                color: ${i(o.blue[600],o.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),je="fetching"===y(),We=n`
                background-color: ${i(o.blue[600],o.blue[400])};
              `,Oe=D(n`
                color: ${i(o.yellow[600],o.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),gt="pending"===b(),Qe=n`
                background-color: ${i(o.yellow[600],o.yellow[400])};
              `,ht=D(n`
                color: ${i(o.gray[600],o.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),Xe="pending"===b(),st=n`
                background-color: ${i(o.gray[600],o.gray[400])};
              `,gn=D(n`
                color: ${i(o.pink[500],o.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),Nt="fetching"===y(),hn=n`
                background-color: ${i(o.pink[500],o.pink[400])};
              `,kt=D(n`
                color: ${i(o.cyan[500],o.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),vn=l(),Ut=n`
                background-color: ${i(o.cyan[500],o.cyan[400])};
              `,Gt=D(r().detailsHeader,"tsqd-query-details-header"),Vt=D(r().detailsHeader,"tsqd-query-details-header"),Et=$.size[2];return G!==M.e&&(0,t.s7)(S,M.e=G),ge!==M.t&&(0,t.s7)(A,M.t=ge),j!==M.a&&(0,t.s7)(_,M.a=j),H!==M.o&&(0,t.s7)(X,M.o=H),J!==M.i&&(0,t.s7)(te,M.i=J),se!==M.n&&(0,t.s7)(fe,M.n=se),B!==M.s&&(0,t.s7)(E,M.s=B),je!==M.h&&(E.disabled=M.h=je),We!==M.r&&(0,t.s7)(ee,M.r=We),Oe!==M.d&&(0,t.s7)(K,M.d=Oe),gt!==M.l&&(K.disabled=M.l=gt),Qe!==M.u&&(0,t.s7)(ot,M.u=Qe),ht!==M.c&&(0,t.s7)(L,M.c=ht),Xe!==M.w&&(L.disabled=M.w=Xe),st!==M.m&&(0,t.s7)(Pe,M.m=st),gn!==M.f&&(0,t.s7)(ue,M.f=gn),Nt!==M.y&&(ue.disabled=M.y=Nt),hn!==M.g&&(0,t.s7)(St,M.g=hn),kt!==M.p&&(0,t.s7)(Te,M.p=kt),vn!==M.b&&(Te.disabled=M.b=vn),Ut!==M.T&&(0,t.s7)(it,M.T=Ut),Gt!==M.A&&(0,t.s7)(Ve,M.A=Gt),Vt!==M.O&&(0,t.s7)(Ke,M.O=Vt),Et!==M.I&&(null!=(M.I=Et)?Ye.style.setProperty("padding",Et):Ye.style.removeProperty("padding")),M},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),S}})},hd=()=>{const e=oe(),n=P().shadowDOMTarget?F.bind({target:P().shadowDOMTarget}):F,r=(0,t.To)(()=>"dark"===e()?Ee(n):ke(n)),{colors:o}=$,i=(f,d)=>"dark"===e()?d:f,a=Ie(f=>{const v=f().getAll().find(g=>g.mutationId===rt());return!!v&&v.state.isPaused}),l=Ie(f=>{const v=f().getAll().find(g=>g.mutationId===rt());return v?v.state.status:"idle"}),c=(0,t.To)(()=>(0,t.TH)({isPaused:a(),status:l()})),s=Ie(f=>f().getAll().find(d=>d.mutationId===rt()),!1);return(0,t.a0)(t.wv,{get when(){return s()},get children(){var f=od(),d=f.firstChild,v=d.nextSibling,g=v.firstChild,h=g.firstChild,m=h.nextSibling,x=g.nextSibling.firstChild.nextSibling,w=v.nextSibling,C=w.nextSibling,I=C.nextSibling,T=I.nextSibling,q=T.nextSibling,S=q.nextSibling,A=S.nextSibling,_=A.nextSibling;return(0,t.Yr)(h.firstChild,(0,t.a0)(t.wv,{get when(){return s().options.mutationKey},fallback:"No mutationKey found",get children(){return(0,t.KN)(s().options.mutationKey,!0)}})),(0,t.Yr)(m,(0,t.a0)(t.wv,{get when(){return"purple"===c()},children:"pending"}),null),(0,t.Yr)(m,(0,t.a0)(t.wv,{get when(){return"purple"!==c()},get children(){return l()}}),null),(0,t.Yr)(x,()=>new Date(s().state.submittedAt).toLocaleTimeString()),(0,t.Yr)(C,(0,t.a0)(nt,{label:"Variables",defaultExpanded:["Variables"],get value(){return s().state.variables}})),(0,t.Yr)(T,(0,t.a0)(nt,{label:"Context",defaultExpanded:["Context"],get value(){return s().state.context}})),(0,t.Yr)(S,(0,t.a0)(nt,{label:"Data",defaultExpanded:["Data"],get value(){return s().state.data}})),(0,t.Yr)(_,(0,t.a0)(nt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return s()}})),(0,t.gb)(O=>{var N=D(r().detailsContainer,"tsqd-query-details-container"),R=D(r().detailsHeader,"tsqd-query-details-header"),X=D(r().detailsBody,"tsqd-query-details-summary-container"),V=D(r().queryDetailsStatus,"gray"===c()?n`
        background-color: ${i(o[c()][200],o[c()][700])};
        color: ${i(o[c()][700],o[c()][300])};
        border-color: ${i(o[c()][400],o[c()][600])};
      `:n`
      background-color: ${i(o[c()][100],o[c()][900])};
      color: ${i(o[c()][700],o[c()][300])};
      border-color: ${i(o[c()][400],o[c()][600])};
    `),U=D(r().detailsHeader,"tsqd-query-details-header"),Y=$.size[2],Z=D(r().detailsHeader,"tsqd-query-details-header"),re=$.size[2],ve=D(r().detailsHeader,"tsqd-query-details-header"),te=$.size[2],fe=D(r().detailsHeader,"tsqd-query-details-header"),E=$.size[2];return N!==O.e&&(0,t.s7)(f,O.e=N),R!==O.t&&(0,t.s7)(d,O.t=R),X!==O.a&&(0,t.s7)(v,O.a=X),V!==O.o&&(0,t.s7)(m,O.o=V),U!==O.i&&(0,t.s7)(w,O.i=U),Y!==O.n&&(null!=(O.n=Y)?C.style.setProperty("padding",Y):C.style.removeProperty("padding")),Z!==O.s&&(0,t.s7)(I,O.s=Z),re!==O.h&&(null!=(O.h=re)?T.style.setProperty("padding",re):T.style.removeProperty("padding")),ve!==O.r&&(0,t.s7)(q,O.r=ve),te!==O.d&&(null!=(O.d=te)?S.style.setProperty("padding",te):S.style.removeProperty("padding")),fe!==O.l&&(0,t.s7)(A,O.l=fe),E!==O.u&&(null!=(O.u=E)?_.style.setProperty("padding",E):_.style.removeProperty("padding")),O},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),f}})},dn=new Map,vd=()=>{const e=(0,t.To)(()=>P().client.getQueryCache()),n=e().subscribe(r=>{(0,t.vA)(()=>{for(const[o,i]of dn.entries())i.shouldUpdate(r)&&i.setter(o(e))})});return(0,t.Ki)(()=>{dn.clear(),n()}),n},ae=(e,n=!0,r=()=>!0)=>{const o=(0,t.To)(()=>P().client.getQueryCache()),[i,a]=(0,t.n5)(e(o),n?void 0:{equals:!1});return(0,t.EH)(()=>{a(e(o))}),dn.set(e,{setter:a,shouldUpdate:r}),(0,t.Ki)(()=>{dn.delete(e)}),i},fn=new Map,pd=()=>{const e=(0,t.To)(()=>P().client.getMutationCache()),n=e().subscribe(()=>{for(const[r,o]of fn.entries())queueMicrotask(()=>{o(r(e))})});return(0,t.Ki)(()=>{fn.clear(),n()}),n},Ie=(e,n=!0)=>{const r=(0,t.To)(()=>P().client.getMutationCache()),[o,i]=(0,t.n5)(e(r),n?void 0:{equals:!1});return(0,t.EH)(()=>{i(e(r))}),fn.set(e,i),(0,t.Ki)(()=>{fn.delete(e)}),o},Di=(e,n)=>{const{colors:r,font:o,size:i,alpha:a,shadow:l,border:c}=$,s=(u,f)=>"light"===e?u:f;return{devtoolsBtn:n`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${l.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${r.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:n`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(r.gray[300],r.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(r.gray[400],r.darkGray[300])};
      }
    `,parentPanel:n`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(r.gray[300],r.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(r.gray[400],r.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":n`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":n`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":n`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":n`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":n`
      position: relative;
    `,"panel-position-top":n`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
    `,"panel-position-bottom":n`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
    `,"panel-position-right":n`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":n`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:n`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${r.blue[600]};
      }
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
        width: ${i[2]};
        height: ${i[2]};
      }
    `,"closeBtn-position-top":n`
      bottom: 0;
      right: ${i[2]};
      transform: translate(0, 100%);
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${c.radius.sm} ${c.radius.sm};
      padding: ${i[.5]} ${i[1.5]} ${i[1]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":n`
      top: 0;
      right: ${i[2]};
      transform: translate(0, -100%);
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${c.radius.sm} ${c.radius.sm} 0px 0px;
      padding: ${i[1]} ${i[1.5]} ${i[.5]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }
    `,"closeBtn-position-right":n`
      bottom: ${i[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: ${c.radius.sm} 0px 0px ${c.radius.sm};
      padding: ${i[1.5]} ${i[.5]} ${i[1.5]} ${i[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":n`
      bottom: ${i[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: 0px ${c.radius.sm} ${c.radius.sm} 0px;
      padding: ${i[1.5]} ${i[1]} ${i[1.5]} ${i[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:n`
      flex: 1 1 700px;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:n`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${r.purple[400]}${s("",a[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":n`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":n`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":n`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":n`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:n`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${$.size[2]} ${$.size[2.5]};
      gap: ${$.size[2.5]};
      border-bottom: ${s(r.gray[300],r.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${i[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:n`
      display: flex;
      gap: ${$.size[3]};
      align-items: center;
    `,logo:n`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${$.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,tanstackLogo:n`
      font-size: ${o.size.md};
      font-weight: ${o.weight.bold};
      line-height: ${o.lineHeight.xs};
      white-space: nowrap;
      color: ${s(r.gray[600],r.gray[300])};
    `,queryFlavorLogo:n`
      font-weight: ${o.weight.semibold};
      font-size: ${o.size.xs};
      background: linear-gradient(
        to right,
        ${s("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:n`
      display: flex;
      gap: ${$.size[2]};
      height: min-content;
    `,queryStatusTag:n`
      display: flex;
      gap: ${$.size[1.5]};
      box-sizing: border-box;
      height: ${$.size[6.5]};
      background: ${s(r.gray[50],r.darkGray[500])};
      color: ${s(r.gray[700],r.gray[300])};
      border-radius: ${$.border.radius.sm};
      font-size: ${o.size.sm};
      padding: ${$.size[1]};
      padding-left: ${$.size[1.5]};
      align-items: center;
      font-weight: ${o.weight.medium};
      border: ${s("1px solid "+r.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
    `,queryStatusTagLabel:n`
      font-size: ${o.size.xs};
    `,queryStatusCount:n`
      font-size: ${o.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${s(r.gray[500],r.gray[400])};
      background-color: ${s(r.gray[200],r.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${$.size[4.5]};
    `,statusTooltip:n`
      position: absolute;
      z-index: 1;
      background-color: ${s(r.gray[50],r.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${$.size[2]}));
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      font-size: ${o.size.xs};
      border: 1px solid ${s(r.gray[400],r.gray[600])};
      color: ${s(r.gray[600],r.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${s(r.gray[400],r.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${s(r.gray[100],r.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:n`
      display: flex;
      gap: ${$.size[2]};
      & > button {
        cursor: pointer;
        padding: ${$.size[.5]} ${$.size[1.5]} ${$.size[.5]}
          ${$.size[2]};
        border-radius: ${$.border.radius.sm};
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: 1px solid ${s(r.gray[300],r.darkGray[200])};
        color: ${s(r.gray[700],r.gray[300])};
        font-size: ${o.size.xs};
        display: flex;
        align-items: center;
        line-height: ${o.lineHeight.sm};
        gap: ${$.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${c.radius.xs};
          outline: 2px solid ${r.blue[800]};
        }
        & svg {
          width: ${$.size[3]};
          height: ${$.size[3]};
          color: ${s(r.gray[500],r.gray[400])};
        }
      }
    `,filterInput:n`
      padding: ${i[.5]} ${i[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      height: min-content;
      color: ${s(r.gray[600],r.gray[400])};
      & > svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      & input {
        font-size: ${o.size.xs};
        width: 100%;
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${o.lineHeight.sm};
        color: ${s(r.gray[700],r.gray[300])};
        &::placeholder {
          color: ${s(r.gray[700],r.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,filterSelect:n`
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${s(r.gray[600],r.gray[400])};
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      & > select {
        appearance: none;
        color: ${s(r.gray[700],r.gray[300])};
        min-width: 100px;
        line-height: ${o.lineHeight.sm};
        font-size: ${o.size.xs};
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,actionsContainer:n`
      display: flex;
      gap: ${$.size[2]};
    `,actionsBtn:n`
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      width: ${$.size[6.5]};
      height: ${$.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      & svg {
        color: ${s(r.gray[700],r.gray[300])};
        width: ${$.size[3]};
        height: ${$.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,actionsBtnOffline:n`
      & svg {
        stroke: ${s(r.yellow[700],r.yellow[500])};
        fill: ${s(r.yellow[700],r.yellow[500])};
      }
    `,overflowQueryContainer:n`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:n`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${s(r.gray[700],r.gray[300])};
      background-color: ${s(r.gray[50],r.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${s(r.gray[200],r.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${$.size[1]};
        user-select: none;
        min-width: ${$.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${o.size.xs};
        font-weight: ${o.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${o.size.xs};
        display: flex;
        align-items: center;
        min-height: ${$.size[6]};
        flex: 1;
        padding: ${$.size[1]} ${$.size[2]};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${$.size[2]};
        color: ${s(r.gray[800],r.gray[300])};
        background-color: ${s(r.gray[300],r.darkGray[600])};
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
        font-size: ${o.size.xs};
      }
    `,selectedQueryRow:n`
      background-color: ${s(r.gray[200],r.darkGray[500])};
    `,detailsContainer:n`
      flex: 1 1 700px;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      color: ${s(r.gray[700],r.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:n`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${s(r.gray[200],r.darkGray[600])};
      padding: ${$.size[1.5]} ${$.size[2]};
      font-weight: ${o.weight.medium};
      font-size: ${o.size.xs};
      line-height: ${o.lineHeight.xs};
      text-align: left;
    `,detailsBody:n`
      margin: ${$.size[1.5]} 0px ${$.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${$.size[2]};
        line-height: ${o.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${o.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${$.size[1.5]};
      }

      & code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${o.size.xs};
        line-height: ${o.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:n`
      border: 1px solid ${r.darkGray[200]};
      border-radius: ${$.border.radius.sm};
      font-weight: ${o.weight.medium};
      padding: ${$.size[1]} ${$.size[2.5]};
    `,actionsBody:n`
      flex-wrap: wrap;
      margin: ${$.size[2]} 0px ${$.size[2]} 0px;
      display: flex;
      gap: ${$.size[2]};
      padding: 0px ${$.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${o.size.xs};
        padding: ${$.size[1]} ${$.size[2]};
        display: flex;
        border-radius: ${$.border.radius.sm};
        background-color: ${s(r.gray[100],r.darkGray[600])};
        border: 1px solid ${s(r.gray[300],r.darkGray[400])};
        align-items: center;
        gap: ${$.size[2]};
        font-weight: ${o.weight.medium};
        line-height: ${o.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${c.radius.xs};
          outline: 2px solid ${r.blue[800]};
        }
        &:hover {
          background-color: ${s(r.gray[200],r.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${i[1.5]};
          height: ${i[1.5]};
          border-radius: ${$.border.radius.full};
        }
      }
    `,actionsSelect:n`
      font-size: ${o.size.xs};
      padding: ${$.size[.5]} ${$.size[2]};
      display: flex;
      border-radius: ${$.border.radius.sm};
      overflow: hidden;
      background-color: ${s(r.gray[100],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[400])};
      align-items: center;
      gap: ${$.size[2]};
      font-weight: ${o.weight.medium};
      line-height: ${o.lineHeight.sm};
      color: ${s(r.red[500],r.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      & > span {
        width: ${i[1.5]};
        height: ${i[1.5]};
        border-radius: ${$.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${$.colors.red[400]};
      }
      & svg {
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
    `,settingsMenu:n`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${i[.5]};
      border-radius: ${$.border.radius.sm};
      border: 1px solid ${s(r.gray[300],r.gray[700])};
      background-color: ${s(r.gray[50],r.darkGray[600])};
      font-size: ${o.size.xs};
      color: ${s(r.gray[700],r.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${i[.5]};
    `,settingsSubTrigger:n`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${s(r.gray[700],r.gray[300])};
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
        transform: rotate(-90deg);
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:n`
      padding: ${$.size[1]} ${$.size[1]};
      font-weight: ${o.weight.medium};
      border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
      color: ${s(r.gray[500],r.gray[400])};
      font-size: ${o.size.xs};
    `,settingsSubButton:n`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${s(r.gray[700],r.gray[300])};
      font-size: ${o.size.xs};
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
    `,themeSelectedButton:n`
      background-color: ${s(r.purple[100],r.purple[900])};
      color: ${s(r.purple[700],r.purple[300])};
      & svg {
        color: ${s(r.purple[700],r.purple[300])};
      }
      &:hover {
        background-color: ${s(r.purple[100],r.purple[900])};
      }
    `,viewToggle:n`
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[200],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${o.size.xs};
      color: ${s(r.gray[700],r.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${r.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${o.lineHeight.md};
        }

        & label:hover {
          background-color: ${s(r.gray[100],r.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${s(r.gray[100],r.darkGray[400])};
        & label:hover {
          background-color: ${s(r.gray[100],r.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${$.size[1.5]} 0 ${$.size[2]};
        }
        border-right: 1px solid ${s(r.gray[300],r.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${$.size[2]} 0 ${$.size[1.5]};
        }
      }
    `,devtoolsEditForm:n`
      padding: ${i[2]};
      & > [data-error='true'] {
        outline: 2px solid ${s(r.red[200],r.red[800])};
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
      }
    `,devtoolsEditTextarea:n`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${o.size.xs};
      border-radius: ${c.radius.sm};
      field-sizing: content;
      padding: ${i[2]};
      background-color: ${s(r.gray[100],r.darkGray[800])};
      color: ${s(r.gray[900],r.gray[100])};
      border: 1px solid ${s(r.gray[200],r.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${s(r.blue[200],r.blue[800])};
      }
    `,devtoolsEditFormActions:n`
      display: flex;
      justify-content: space-between;
      gap: ${i[2]};
      align-items: center;
      padding-top: ${i[1]};
      font-size: ${o.size.xs};
    `,devtoolsEditFormError:n`
      color: ${s(r.red[700],r.red[500])};
    `,devtoolsEditFormActionContainer:n`
      display: flex;
      gap: ${i[2]};
    `,devtoolsEditFormAction:n`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${o.size.xs};
      padding: ${i[1]} ${$.size[2]};
      display: flex;
      border-radius: ${c.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[400])};
      align-items: center;
      gap: ${i[2]};
      font-weight: ${o.weight.medium};
      line-height: ${o.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},ke=e=>Di("light",e),Ee=e=>Di("dark",e);(0,t.z_)(["click","mousedown","input"])}}]);