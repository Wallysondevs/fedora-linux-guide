import{j as t,m as Gn}from"./vendor-framer-DuLdZsj6.js";import{a as Ax,s as Ex,r as Jt,u as wx,L as Bs,C as wt,X as Ox,B as gh,H as zx,D as Xn,T as $t,P as Hs,b as Zn,A as vh,c as Po,M as _s,G as bh,S as jh,N as yh,d as Kn,E as Pn,F as In,e as Fs,U as xr,f as Qs,g as Mx,h as Jn,i as Sh,j as gr,k as qh,l as $n,m as Wn,n as Ah,W as Eh,o as Vn,p as wh,q as Oh,t as Bn,z as Nx,v as Tx,w as Dx,x as Cx,y as Rx,I as kx,J as zh,K as Mh,O as Nh,Q as Io,Z as vr,V as Th,Y as ec,_ as Dh,$ as br,a0 as Ch,a1 as Ux,a2 as Lx,a3 as Gx,a4 as Vx,a5 as Bx,a6 as Hx,a7 as _x,a8 as Fx,a9 as Qx,aa as Yx,ab as Xx,ac as Zx,ad as Kx,ae as Px,af as Ix,ag as Jx,ah as $x,ai as Wx,aj as eg,ak as ag,al as tg,am as sg,an as og,ao as te}from"./vendor-ui-uJWWAd-v.js";import{r as ig}from"./vendor-react-D9vhtkn4.js";import{h as rg}from"./vendor-syntax-DnEapwCv.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))u(b);new MutationObserver(b=>{for(const S of b)if(S.type==="childList")for(const z of S.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&u(z)}).observe(document,{childList:!0,subtree:!0});function m(b){const S={};return b.integrity&&(S.integrity=b.integrity),b.referrerPolicy&&(S.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?S.credentials="include":b.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function u(b){if(b.ep)return;b.ep=!0;const S=m(b);fetch(b.href,S)}})();var Rn={exports:{}},Fo={},kn={exports:{}},Un={};var $m;function lg(){return $m||($m=1,(function(l){function c(q,N){var B=q.length;q.push(N);e:for(;0<B;){var le=B-1>>>1,T=q[le];if(0<b(T,N))q[le]=N,q[B]=T,B=le;else break e}}function m(q){return q.length===0?null:q[0]}function u(q){if(q.length===0)return null;var N=q[0],B=q.pop();if(B!==N){q[0]=B;e:for(var le=0,T=q.length,Ge=T>>>1;le<Ge;){var fe=2*(le+1)-1,se=q[fe],qe=fe+1,pe=q[qe];if(0>b(se,B))qe<T&&0>b(pe,se)?(q[le]=pe,q[qe]=B,le=qe):(q[le]=se,q[fe]=B,le=fe);else if(qe<T&&0>b(pe,B))q[le]=pe,q[qe]=B,le=qe;else break e}}return N}function b(q,N){var B=q.sortIndex-N.sortIndex;return B!==0?B:q.id-N.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;l.unstable_now=function(){return S.now()}}else{var z=Date,w=z.now();l.unstable_now=function(){return z.now()-w}}var M=[],G=[],k=1,I=null,F=3,re=!1,X=!1,Y=!1,W=!1,ye=typeof setTimeout=="function"?setTimeout:null,Le=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;function Me(q){for(var N=m(G);N!==null;){if(N.callback===null)u(G);else if(N.startTime<=q)u(G),N.sortIndex=N.expirationTime,c(M,N);else break;N=m(G)}}function Ce(q){if(Y=!1,Me(q),!X)if(m(M)!==null)X=!0,we||(we=!0,Fe());else{var N=m(G);N!==null&&Ze(Ce,N.startTime-q)}}var we=!1,Ie=-1,U=5,Ne=-1;function zt(){return W?!0:!(l.unstable_now()-Ne<U)}function Da(){if(W=!1,we){var q=l.unstable_now();Ne=q;var N=!0;try{e:{X=!1,Y&&(Y=!1,Le(Ie),Ie=-1),re=!0;var B=F;try{a:{for(Me(q),I=m(M);I!==null&&!(I.expirationTime>q&&zt());){var le=I.callback;if(typeof le=="function"){I.callback=null,F=I.priorityLevel;var T=le(I.expirationTime<=q);if(q=l.unstable_now(),typeof T=="function"){I.callback=T,Me(q),N=!0;break a}I===m(M)&&u(M),Me(q)}else u(M);I=m(M)}if(I!==null)N=!0;else{var Ge=m(G);Ge!==null&&Ze(Ce,Ge.startTime-q),N=!1}}break e}finally{I=null,F=B,re=!1}N=void 0}}finally{N?Fe():we=!1}}}var Fe;if(typeof ve=="function")Fe=function(){ve(Da)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Ca=Mt.port2;Mt.port1.onmessage=Da,Fe=function(){Ca.postMessage(null)}}else Fe=function(){ye(Da,0)};function Ze(q,N){Ie=ye(function(){q(l.unstable_now())},N)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(q){q.callback=null},l.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<q?Math.floor(1e3/q):5},l.unstable_getCurrentPriorityLevel=function(){return F},l.unstable_next=function(q){switch(F){case 1:case 2:case 3:var N=3;break;default:N=F}var B=F;F=N;try{return q()}finally{F=B}},l.unstable_requestPaint=function(){W=!0},l.unstable_runWithPriority=function(q,N){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var B=F;F=q;try{return N()}finally{F=B}},l.unstable_scheduleCallback=function(q,N,B){var le=l.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?le+B:le):B=le,q){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=B+T,q={id:k++,callback:N,priorityLevel:q,startTime:B,expirationTime:T,sortIndex:-1},B>le?(q.sortIndex=B,c(G,q),m(M)===null&&q===m(G)&&(Y?(Le(Ie),Ie=-1):Y=!0,Ze(Ce,B-le))):(q.sortIndex=T,c(M,q),X||re||(X=!0,we||(we=!0,Fe()))),q},l.unstable_shouldYield=zt,l.unstable_wrapCallback=function(q){var N=F;return function(){var B=F;F=N;try{return q.apply(this,arguments)}finally{F=B}}}})(Un)),Un}var Wm;function ng(){return Wm||(Wm=1,kn.exports=lg()),kn.exports}var eh;function cg(){if(eh)return Fo;eh=1;var l=ng(),c=Ax(),m=ig();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var a=e,s=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(s=a.return),e=a.return;while(e)}return a.tag===3?s:null}function z(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function w(e){if(S(e)!==e)throw Error(u(188))}function M(e){var a=e.alternate;if(!a){if(a=S(e),a===null)throw Error(u(188));return a!==e?null:e}for(var s=e,o=a;;){var i=s.return;if(i===null)break;var r=i.alternate;if(r===null){if(o=i.return,o!==null){s=o;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===s)return w(i),e;if(r===o)return w(i),a;r=r.sibling}throw Error(u(188))}if(s.return!==o.return)s=i,o=r;else{for(var n=!1,d=i.child;d;){if(d===s){n=!0,s=i,o=r;break}if(d===o){n=!0,o=i,s=r;break}d=d.sibling}if(!n){for(d=r.child;d;){if(d===s){n=!0,s=r,o=i;break}if(d===o){n=!0,o=r,s=i;break}d=d.sibling}if(!n)throw Error(u(189))}}if(s.alternate!==o)throw Error(u(190))}if(s.tag!==3)throw Error(u(188));return s.stateNode.current===s?e:a}function G(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=G(e),a!==null)return a;e=e.sibling}return null}var k=Object.assign,I=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),re=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Le=Symbol.for("react.consumer"),ve=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),Ie=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Ne=Symbol.for("react.activity"),zt=Symbol.for("react.memo_cache_sentinel"),Da=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=Da&&e[Da]||e["@@iterator"],typeof e=="function"?e:null)}var Mt=Symbol.for("react.client.reference");function Ca(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case W:return"Profiler";case Y:return"StrictMode";case Ce:return"Suspense";case we:return"SuspenseList";case Ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case re:return"Portal";case ve:return(e.displayName||"Context")+".Provider";case Le:return(e._context.displayName||"Context")+".Consumer";case Me:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ie:return a=e.displayName||null,a!==null?a:Ca(e.type)||"Memo";case U:a=e._payload,e=e._init;try{return Ca(e(a))}catch{}}return null}var Ze=Array.isArray,q=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},le=[],T=-1;function Ge(e){return{current:e}}function fe(e){0>T||(e.current=le[T],le[T]=null,T--)}function se(e,a){T++,le[T]=e.current,e.current=a}var qe=Ge(null),pe=Ge(null),be=Ge(null),Ra=Ge(null);function Nt(e,a){switch(se(be,a),se(pe,e),se(qe,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?wm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=wm(a),e=Om(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}fe(qe),se(qe,e)}function ge(){fe(qe),fe(pe),fe(be)}function es(e){e.memoizedState!==null&&se(Ra,e);var a=qe.current,s=Om(a,e.type);a!==s&&(se(pe,e),se(qe,s))}function ka(e){pe.current===e&&(fe(qe),fe(pe)),Ra.current===e&&(fe(Ra),Go._currentValue=B)}var $a=Object.prototype.hasOwnProperty,Tt=l.unstable_scheduleCallback,Wa=l.unstable_cancelCallback,af=l.unstable_shouldYield,tf=l.unstable_requestPaint,wa=l.unstable_now,sf=l.unstable_getCurrentPriorityLevel,rc=l.unstable_ImmediatePriority,lc=l.unstable_UserBlockingPriority,Jo=l.unstable_NormalPriority,of=l.unstable_LowPriority,nc=l.unstable_IdlePriority,rf=l.log,lf=l.unstable_setDisableYieldValue,Ys=null,oa=null;function et(e){if(typeof rf=="function"&&lf(e),oa&&typeof oa.setStrictMode=="function")try{oa.setStrictMode(Ys,e)}catch{}}var ia=Math.clz32?Math.clz32:df,nf=Math.log,cf=Math.LN2;function df(e){return e>>>=0,e===0?32:31-(nf(e)/cf|0)|0}var $o=256,Wo=4194304;function Dt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ei(e,a,s){var o=e.pendingLanes;if(o===0)return 0;var i=0,r=e.suspendedLanes,n=e.pingedLanes;e=e.warmLanes;var d=o&134217727;return d!==0?(o=d&~r,o!==0?i=Dt(o):(n&=d,n!==0?i=Dt(n):s||(s=d&~e,s!==0&&(i=Dt(s))))):(d=o&~r,d!==0?i=Dt(d):n!==0?i=Dt(n):s||(s=o&~e,s!==0&&(i=Dt(s)))),i===0?0:a!==0&&a!==i&&(a&r)===0&&(r=i&-i,s=a&-a,r>=s||r===32&&(s&4194048)!==0)?a:i}function Xs(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function uf(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cc(){var e=$o;return $o<<=1,($o&4194048)===0&&($o=256),e}function dc(){var e=Wo;return Wo<<=1,(Wo&62914560)===0&&(Wo=4194304),e}function Sr(e){for(var a=[],s=0;31>s;s++)a.push(e);return a}function Zs(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mf(e,a,s,o,i,r){var n=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var d=e.entanglements,h=e.expirationTimes,v=e.hiddenUpdates;for(s=n&~s;0<s;){var A=31-ia(s),O=1<<A;d[A]=0,h[A]=-1;var j=v[A];if(j!==null)for(v[A]=null,A=0;A<j.length;A++){var y=j[A];y!==null&&(y.lane&=-536870913)}s&=~O}o!==0&&uc(e,o,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(n&~a))}function uc(e,a,s){e.pendingLanes|=a,e.suspendedLanes&=~a;var o=31-ia(a);e.entangledLanes|=a,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function mc(e,a){var s=e.entangledLanes|=a;for(e=e.entanglements;s;){var o=31-ia(s),i=1<<o;i&a|e[o]&a&&(e[o]|=a),s&=~i}}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hc(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:Xm(e.type))}function hf(e,a){var s=N.p;try{return N.p=e,a()}finally{N.p=s}}var at=Math.random().toString(36).slice(2),Ke="__reactFiber$"+at,We="__reactProps$"+at,as="__reactContainer$"+at,Er="__reactEvents$"+at,ff="__reactListeners$"+at,pf="__reactHandles$"+at,fc="__reactResources$"+at,Ks="__reactMarker$"+at;function wr(e){delete e[Ke],delete e[We],delete e[Er],delete e[ff],delete e[pf]}function ts(e){var a=e[Ke];if(a)return a;for(var s=e.parentNode;s;){if(a=s[as]||s[Ke]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(e=Tm(e);e!==null;){if(s=e[Ke])return s;e=Tm(e)}return a}e=s,s=e.parentNode}return null}function ss(e){if(e=e[Ke]||e[as]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function Ps(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function os(e){var a=e[fc];return a||(a=e[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ve(e){e[Ks]=!0}var pc=new Set,xc={};function Ct(e,a){is(e,a),is(e+"Capture",a)}function is(e,a){for(xc[e]=a,e=0;e<a.length;e++)pc.add(a[e])}var xf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},vc={};function gf(e){return $a.call(vc,e)?!0:$a.call(gc,e)?!1:xf.test(e)?vc[e]=!0:(gc[e]=!0,!1)}function ai(e,a,s){if(gf(a))if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var o=a.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+s)}}function ti(e,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+s)}}function Ua(e,a,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(a,s,""+o)}}var Or,bc;function rs(e){if(Or===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);Or=a&&a[1]||"",bc=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Or+e+bc}var zr=!1;function Mr(e,a){if(!e||zr)return"";zr=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(a){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(y){var j=y}Reflect.construct(e,[],O)}else{try{O.call()}catch(y){j=y}e.call(O.prototype)}}else{try{throw Error()}catch(y){j=y}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(y){if(y&&j&&typeof y.stack=="string")return[y.stack,j.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=o.DetermineComponentFrameRoot(),n=r[0],d=r[1];if(n&&d){var h=n.split(`
`),v=d.split(`
`);for(i=o=0;o<h.length&&!h[o].includes("DetermineComponentFrameRoot");)o++;for(;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;if(o===h.length||i===v.length)for(o=h.length-1,i=v.length-1;1<=o&&0<=i&&h[o]!==v[i];)i--;for(;1<=o&&0<=i;o--,i--)if(h[o]!==v[i]){if(o!==1||i!==1)do if(o--,i--,0>i||h[o]!==v[i]){var A=`
`+h[o].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=o&&0<=i);break}}}finally{zr=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?rs(s):""}function vf(e){switch(e.tag){case 26:case 27:case 5:return rs(e.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 15:return Mr(e.type,!1);case 11:return Mr(e.type.render,!1);case 1:return Mr(e.type,!0);case 31:return rs("Activity");default:return""}}function jc(e){try{var a="";do a+=vf(e),e=e.return;while(e);return a}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ha(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yc(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function bf(e){var a=yc(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),o=""+e[a];if(!e.hasOwnProperty(a)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var i=s.get,r=s.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(n){o=""+n,r.call(this,n)}}),Object.defineProperty(e,a,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(n){o=""+n},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function si(e){e._valueTracker||(e._valueTracker=bf(e))}function Sc(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var s=a.getValue(),o="";return e&&(o=yc(e)?e.checked?"true":"false":e.value),e=o,e!==s?(a.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jf=/[\n"\\]/g;function fa(e){return e.replace(jf,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Nr(e,a,s,o,i,r,n,d){e.name="",n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"?e.type=n:e.removeAttribute("type"),a!=null?n==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ha(a)):e.value!==""+ha(a)&&(e.value=""+ha(a)):n!=="submit"&&n!=="reset"||e.removeAttribute("value"),a!=null?Tr(e,n,ha(a)):s!=null?Tr(e,n,ha(s)):o!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+ha(d):e.removeAttribute("name")}function qc(e,a,s,o,i,r,n,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),a!=null||s!=null){if(!(r!=="submit"&&r!=="reset"||a!=null))return;s=s!=null?""+ha(s):"",a=a!=null?""+ha(a):s,d||a===e.value||(e.value=a),e.defaultValue=a}o=o??i,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=d?e.checked:!!o,e.defaultChecked=!!o,n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.name=n)}function Tr(e,a,s){a==="number"&&oi(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ls(e,a,s,o){if(e=e.options,a){a={};for(var i=0;i<s.length;i++)a["$"+s[i]]=!0;for(s=0;s<e.length;s++)i=a.hasOwnProperty("$"+e[s].value),e[s].selected!==i&&(e[s].selected=i),i&&o&&(e[s].defaultSelected=!0)}else{for(s=""+ha(s),a=null,i=0;i<e.length;i++){if(e[i].value===s){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Ac(e,a,s){if(a!=null&&(a=""+ha(a),a!==e.value&&(e.value=a),s==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=s!=null?""+ha(s):""}function Ec(e,a,s,o){if(a==null){if(o!=null){if(s!=null)throw Error(u(92));if(Ze(o)){if(1<o.length)throw Error(u(93));o=o[0]}s=o}s==null&&(s=""),a=s}s=ha(a),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function ns(e,a){if(a){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=a;return}}e.textContent=a}var yf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wc(e,a,s){var o=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":o?e.setProperty(a,s):typeof s!="number"||s===0||yf.has(a)?a==="float"?e.cssFloat=s:e[a]=(""+s).trim():e[a]=s+"px"}function Oc(e,a,s){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||a!=null&&a.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var i in a)o=a[i],a.hasOwnProperty(i)&&s[i]!==o&&wc(e,i,o)}else for(var r in a)a.hasOwnProperty(r)&&wc(e,r,a[r])}function Dr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ii(e){return qf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Cr=null;function Rr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cs=null,ds=null;function zc(e){var a=ss(e);if(a&&(e=a.stateNode)){var s=e[We]||null;e:switch(e=a.stateNode,a.type){case"input":if(Nr(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+fa(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var o=s[a];if(o!==e&&o.form===e.form){var i=o[We]||null;if(!i)throw Error(u(90));Nr(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<s.length;a++)o=s[a],o.form===e.form&&Sc(o)}break e;case"textarea":Ac(e,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&ls(e,!!s.multiple,a,!1)}}}var kr=!1;function Mc(e,a,s){if(kr)return e(a,s);kr=!0;try{var o=e(a);return o}finally{if(kr=!1,(cs!==null||ds!==null)&&(Qi(),cs&&(a=cs,e=ds,ds=cs=null,zc(a),e)))for(a=0;a<e.length;a++)zc(e[a])}}function Is(e,a){var s=e.stateNode;if(s===null)return null;var o=s[We]||null;if(o===null)return null;s=o[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(u(231,a,typeof s));return s}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ur=!1;if(La)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Ur=!1}var tt=null,Lr=null,ri=null;function Nc(){if(ri)return ri;var e,a=Lr,s=a.length,o,i="value"in tt?tt.value:tt.textContent,r=i.length;for(e=0;e<s&&a[e]===i[e];e++);var n=s-e;for(o=1;o<=n&&a[s-o]===i[r-o];o++);return ri=i.slice(e,1<o?1-o:void 0)}function li(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Tc(){return!1}function ea(e){function a(s,o,i,r,n){this._reactName=s,this._targetInst=i,this.type=o,this.nativeEvent=r,this.target=n,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(s=e[d],this[d]=s?s(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ni:Tc,this.isPropagationStopped=Tc,this}return k(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),a}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=ea(Rt),$s=k({},Rt,{view:0,detail:0}),Af=ea($s),Gr,Vr,Ws,di=k({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(Gr=e.screenX-Ws.screenX,Vr=e.screenY-Ws.screenY):Vr=Gr=0,Ws=e),Gr)},movementY:function(e){return"movementY"in e?e.movementY:Vr}}),Dc=ea(di),Ef=k({},di,{dataTransfer:0}),wf=ea(Ef),Of=k({},$s,{relatedTarget:0}),Br=ea(Of),zf=k({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),Mf=ea(zf),Nf=k({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tf=ea(Nf),Df=k({},Rt,{data:0}),Cc=ea(Df),Cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=kf[e])?!!a[e]:!1}function Hr(){return Uf}var Lf=k({},$s,{key:function(e){if(e.key){var a=Cf[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gf=ea(Lf),Vf=k({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=ea(Vf),Bf=k({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),Hf=ea(Bf),_f=k({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ff=ea(_f),Qf=k({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yf=ea(Qf),Xf=k({},Rt,{newState:0,oldState:0}),Zf=ea(Xf),Kf=[9,13,27,32],_r=La&&"CompositionEvent"in window,eo=null;La&&"documentMode"in document&&(eo=document.documentMode);var Pf=La&&"TextEvent"in window&&!eo,kc=La&&(!_r||eo&&8<eo&&11>=eo),Uc=" ",Lc=!1;function Gc(e,a){switch(e){case"keyup":return Kf.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var us=!1;function If(e,a){switch(e){case"compositionend":return Vc(a);case"keypress":return a.which!==32?null:(Lc=!0,Uc);case"textInput":return e=a.data,e===Uc&&Lc?null:e;default:return null}}function Jf(e,a){if(us)return e==="compositionend"||!_r&&Gc(e,a)?(e=Nc(),ri=Lr=tt=null,us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return kc&&a.locale!=="ko"?null:a.data;default:return null}}var $f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!$f[e.type]:a==="textarea"}function Hc(e,a,s,o){cs?ds?ds.push(o):ds=[o]:cs=o,a=Ii(a,"onChange"),0<a.length&&(s=new ci("onChange","change",null,s,o),e.push({event:s,listeners:a}))}var ao=null,to=null;function Wf(e){ym(e,0)}function ui(e){var a=Ps(e);if(Sc(a))return e}function _c(e,a){if(e==="change")return a}var Fc=!1;if(La){var Fr;if(La){var Qr="oninput"in document;if(!Qr){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Qr=typeof Qc.oninput=="function"}Fr=Qr}else Fr=!1;Fc=Fr&&(!document.documentMode||9<document.documentMode)}function Yc(){ao&&(ao.detachEvent("onpropertychange",Xc),to=ao=null)}function Xc(e){if(e.propertyName==="value"&&ui(to)){var a=[];Hc(a,to,e,Rr(e)),Mc(Wf,a)}}function ep(e,a,s){e==="focusin"?(Yc(),ao=a,to=s,ao.attachEvent("onpropertychange",Xc)):e==="focusout"&&Yc()}function ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(to)}function tp(e,a){if(e==="click")return ui(a)}function sp(e,a){if(e==="input"||e==="change")return ui(a)}function op(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ra=typeof Object.is=="function"?Object.is:op;function so(e,a){if(ra(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var s=Object.keys(e),o=Object.keys(a);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var i=s[o];if(!$a.call(a,i)||!ra(e[i],a[i]))return!1}return!0}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kc(e,a){var s=Zc(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=a&&o>=a)return{node:s,offset:a-e};e=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Zc(s)}}function Pc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Pc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Ic(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=oi(e.document);a instanceof e.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)e=a.contentWindow;else break;a=oi(e.document)}return a}function Yr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var ip=La&&"documentMode"in document&&11>=document.documentMode,ms=null,Xr=null,oo=null,Zr=!1;function Jc(e,a,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Zr||ms==null||ms!==oi(o)||(o=ms,"selectionStart"in o&&Yr(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=Ii(Xr,"onSelect"),0<o.length&&(a=new ci("onSelect","select",null,a,s),e.push({event:a,listeners:o}),a.target=ms)))}function kt(e,a){var s={};return s[e.toLowerCase()]=a.toLowerCase(),s["Webkit"+e]="webkit"+a,s["Moz"+e]="moz"+a,s}var hs={animationend:kt("Animation","AnimationEnd"),animationiteration:kt("Animation","AnimationIteration"),animationstart:kt("Animation","AnimationStart"),transitionrun:kt("Transition","TransitionRun"),transitionstart:kt("Transition","TransitionStart"),transitioncancel:kt("Transition","TransitionCancel"),transitionend:kt("Transition","TransitionEnd")},Kr={},$c={};La&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ut(e){if(Kr[e])return Kr[e];if(!hs[e])return e;var a=hs[e],s;for(s in a)if(a.hasOwnProperty(s)&&s in $c)return Kr[e]=a[s];return e}var Wc=Ut("animationend"),ed=Ut("animationiteration"),ad=Ut("animationstart"),rp=Ut("transitionrun"),lp=Ut("transitionstart"),np=Ut("transitioncancel"),td=Ut("transitionend"),sd=new Map,Pr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pr.push("scrollEnd");function Sa(e,a){sd.set(e,a),Ct(a,[e])}var od=new WeakMap;function pa(e,a){if(typeof e=="object"&&e!==null){var s=od.get(e);return s!==void 0?s:(a={value:e,source:a,stack:jc(a)},od.set(e,a),a)}return{value:e,source:a,stack:jc(a)}}var xa=[],fs=0,Ir=0;function mi(){for(var e=fs,a=Ir=fs=0;a<e;){var s=xa[a];xa[a++]=null;var o=xa[a];xa[a++]=null;var i=xa[a];xa[a++]=null;var r=xa[a];if(xa[a++]=null,o!==null&&i!==null){var n=o.pending;n===null?i.next=i:(i.next=n.next,n.next=i),o.pending=i}r!==0&&id(s,i,r)}}function hi(e,a,s,o){xa[fs++]=e,xa[fs++]=a,xa[fs++]=s,xa[fs++]=o,Ir|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Jr(e,a,s,o){return hi(e,a,s,o),fi(e)}function ps(e,a){return hi(e,null,null,a),fi(e)}function id(e,a,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var i=!1,r=e.return;r!==null;)r.childLanes|=s,o=r.alternate,o!==null&&(o.childLanes|=s),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&a!==null&&(i=31-ia(s),e=r.hiddenUpdates,o=e[i],o===null?e[i]=[a]:o.push(a),a.lane=s|536870912),r):null}function fi(e){if(50<No)throw No=0,sn=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var xs={};function cp(e,a,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function la(e,a,s,o){return new cp(e,a,s,o)}function $r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ga(e,a){var s=e.alternate;return s===null?(s=la(e.tag,a,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=a,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,a=e.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function rd(e,a){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,a=s.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function pi(e,a,s,o,i,r){var n=0;if(o=e,typeof e=="function")$r(e)&&(n=1);else if(typeof e=="string")n=ux(e,s,qe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ne:return e=la(31,s,a,i),e.elementType=Ne,e.lanes=r,e;case X:return Lt(s.children,i,r,a);case Y:n=8,i|=24;break;case W:return e=la(12,s,a,i|2),e.elementType=W,e.lanes=r,e;case Ce:return e=la(13,s,a,i),e.elementType=Ce,e.lanes=r,e;case we:return e=la(19,s,a,i),e.elementType=we,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:case ve:n=10;break e;case Le:n=9;break e;case Me:n=11;break e;case Ie:n=14;break e;case U:n=16,o=null;break e}n=29,s=Error(u(130,e===null?"null":typeof e,"")),o=null}return a=la(n,s,a,i),a.elementType=e,a.type=o,a.lanes=r,a}function Lt(e,a,s,o){return e=la(7,e,o,a),e.lanes=s,e}function Wr(e,a,s){return e=la(6,e,null,a),e.lanes=s,e}function el(e,a,s){return a=la(4,e.children!==null?e.children:[],e.key,a),a.lanes=s,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var gs=[],vs=0,xi=null,gi=0,ga=[],va=0,Gt=null,Va=1,Ba="";function Vt(e,a){gs[vs++]=gi,gs[vs++]=xi,xi=e,gi=a}function ld(e,a,s){ga[va++]=Va,ga[va++]=Ba,ga[va++]=Gt,Gt=e;var o=Va;e=Ba;var i=32-ia(o)-1;o&=~(1<<i),s+=1;var r=32-ia(a)+i;if(30<r){var n=i-i%5;r=(o&(1<<n)-1).toString(32),o>>=n,i-=n,Va=1<<32-ia(a)+i|s<<i|o,Ba=r+e}else Va=1<<r|s<<i|o,Ba=e}function al(e){e.return!==null&&(Vt(e,1),ld(e,1,0))}function tl(e){for(;e===xi;)xi=gs[--vs],gs[vs]=null,gi=gs[--vs],gs[vs]=null;for(;e===Gt;)Gt=ga[--va],ga[va]=null,Ba=ga[--va],ga[va]=null,Va=ga[--va],ga[va]=null}var Je=null,Ae=null,oe=!1,Bt=null,Oa=!1,sl=Error(u(519));function Ht(e){var a=Error(u(418,""));throw lo(pa(a,e)),sl}function nd(e){var a=e.stateNode,s=e.type,o=e.memoizedProps;switch(a[Ke]=e,a[We]=o,s){case"dialog":$("cancel",a),$("close",a);break;case"iframe":case"object":case"embed":$("load",a);break;case"video":case"audio":for(s=0;s<Do.length;s++)$(Do[s],a);break;case"source":$("error",a);break;case"img":case"image":case"link":$("error",a),$("load",a);break;case"details":$("toggle",a);break;case"input":$("invalid",a),qc(a,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),si(a);break;case"select":$("invalid",a);break;case"textarea":$("invalid",a),Ec(a,o.value,o.defaultValue,o.children),si(a)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||o.suppressHydrationWarning===!0||Em(a.textContent,s)?(o.popover!=null&&($("beforetoggle",a),$("toggle",a)),o.onScroll!=null&&$("scroll",a),o.onScrollEnd!=null&&$("scrollend",a),o.onClick!=null&&(a.onclick=Ji),a=!0):a=!1,a||Ht(e)}function cd(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:Je=Je.return}}function io(e){if(e!==Je)return!1;if(!oe)return cd(e),oe=!0,!1;var a=e.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||jn(e.type,e.memoizedProps)),s=!s),s&&Ae&&Ht(e),cd(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(a===0){Ae=Aa(e.nextSibling);break e}a--}else s!=="$"&&s!=="$!"&&s!=="$?"||a++;e=e.nextSibling}Ae=null}}else a===27?(a=Ae,vt(e.type)?(e=An,An=null,Ae=e):Ae=a):Ae=Je?Aa(e.stateNode.nextSibling):null;return!0}function ro(){Ae=Je=null,oe=!1}function dd(){var e=Bt;return e!==null&&(sa===null?sa=e:sa.push.apply(sa,e),Bt=null),e}function lo(e){Bt===null?Bt=[e]:Bt.push(e)}var ol=Ge(null),_t=null,Ha=null;function st(e,a,s){se(ol,a._currentValue),a._currentValue=s}function _a(e){e._currentValue=ol.current,fe(ol)}function il(e,a,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,o!==null&&(o.childLanes|=a)):o!==null&&(o.childLanes&a)!==a&&(o.childLanes|=a),e===s)break;e=e.return}}function rl(e,a,s,o){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var n=i.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=i;for(var h=0;h<a.length;h++)if(d.context===a[h]){r.lanes|=s,d=r.alternate,d!==null&&(d.lanes|=s),il(r.return,s,e),o||(n=null);break e}r=d.next}}else if(i.tag===18){if(n=i.return,n===null)throw Error(u(341));n.lanes|=s,r=n.alternate,r!==null&&(r.lanes|=s),il(n,s,e),n=null}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===e){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}}function no(e,a,s,o){e=null;for(var i=a,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var n=i.alternate;if(n===null)throw Error(u(387));if(n=n.memoizedProps,n!==null){var d=i.type;ra(i.pendingProps.value,n.value)||(e!==null?e.push(d):e=[d])}}else if(i===Ra.current){if(n=i.alternate,n===null)throw Error(u(387));n.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}i=i.return}e!==null&&rl(a,e,s,o),a.flags|=262144}function vi(e){for(e=e.firstContext;e!==null;){if(!ra(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ft(e){_t=e,Ha=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pe(e){return ud(_t,e)}function bi(e,a){return _t===null&&Ft(e),ud(e,a)}function ud(e,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Ha===null){if(e===null)throw Error(u(308));Ha=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ha=Ha.next=a;return s}var dp=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){a.aborted=!0,e.forEach(function(s){return s()})}},up=l.unstable_scheduleCallback,mp=l.unstable_NormalPriority,Re={$$typeof:ve,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ll(){return{controller:new dp,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&up(mp,function(){e.controller.abort()})}var uo=null,nl=0,bs=0,js=null;function hp(e,a){if(uo===null){var s=uo=[];nl=0,bs=un(),js={status:"pending",value:void 0,then:function(o){s.push(o)}}}return nl++,a.then(md,md),a}function md(){if(--nl===0&&uo!==null){js!==null&&(js.status="fulfilled");var e=uo;uo=null,bs=0,js=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function fp(e,a){var s=[],o={status:"pending",value:null,reason:null,then:function(i){s.push(i)}};return e.then(function(){o.status="fulfilled",o.value=a;for(var i=0;i<s.length;i++)(0,s[i])(a)},function(i){for(o.status="rejected",o.reason=i,i=0;i<s.length;i++)(0,s[i])(void 0)}),o}var hd=q.S;q.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&hp(e,a),hd!==null&&hd(e,a)};var Qt=Ge(null);function cl(){var e=Qt.current;return e!==null?e:xe.pooledCache}function ji(e,a){a===null?se(Qt,Qt.current):se(Qt,a.pool)}function fd(){var e=cl();return e===null?null:{parent:Re._currentValue,pool:e}}var mo=Error(u(460)),pd=Error(u(474)),yi=Error(u(542)),dl={then:function(){}};function xd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Si(){}function gd(e,a,s){switch(s=e[s],s===void 0?e.push(a):s!==a&&(a.then(Si,Si),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,bd(e),e;default:if(typeof a.status=="string")a.then(Si,Si);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(o){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=o}},function(o){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=o}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,bd(e),e}throw ho=a,mo}}var ho=null;function vd(){if(ho===null)throw Error(u(459));var e=ho;return ho=null,e}function bd(e){if(e===mo||e===yi)throw Error(u(483))}var ot=!1;function ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ml(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function it(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rt(e,a,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ne&2)!==0){var i=o.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),o.pending=a,a=fi(e),id(e,null,s),a}return hi(e,o,a,s),fi(e)}function fo(e,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var o=a.lanes;o&=e.pendingLanes,s|=o,a.lanes=s,mc(e,s)}}function hl(e,a){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var i=null,r=null;if(s=s.firstBaseUpdate,s!==null){do{var n={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};r===null?i=r=n:r=r.next=n,s=s.next}while(s!==null);r===null?i=r=a:r=r.next=a}else i=r=a;s={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=a:e.next=a,s.lastBaseUpdate=a}var fl=!1;function po(){if(fl){var e=js;if(e!==null)throw e}}function xo(e,a,s,o){fl=!1;var i=e.updateQueue;ot=!1;var r=i.firstBaseUpdate,n=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,v=h.next;h.next=null,n===null?r=v:n.next=v,n=h;var A=e.alternate;A!==null&&(A=A.updateQueue,d=A.lastBaseUpdate,d!==n&&(d===null?A.firstBaseUpdate=v:d.next=v,A.lastBaseUpdate=h))}if(r!==null){var O=i.baseState;n=0,A=v=h=null,d=r;do{var j=d.lane&-536870913,y=j!==d.lane;if(y?(ee&j)===j:(o&j)===j){j!==0&&j===bs&&(fl=!0),A!==null&&(A=A.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var _=e,V=d;j=a;var me=s;switch(V.tag){case 1:if(_=V.payload,typeof _=="function"){O=_.call(me,O,j);break e}O=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=V.payload,j=typeof _=="function"?_.call(me,O,j):_,j==null)break e;O=k({},O,j);break e;case 2:ot=!0}}j=d.callback,j!==null&&(e.flags|=64,y&&(e.flags|=8192),y=i.callbacks,y===null?i.callbacks=[j]:y.push(j))}else y={lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},A===null?(v=A=y,h=O):A=A.next=y,n|=j;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;y=d,d=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);A===null&&(h=O),i.baseState=h,i.firstBaseUpdate=v,i.lastBaseUpdate=A,r===null&&(i.shared.lanes=0),ft|=n,e.lanes=n,e.memoizedState=O}}function jd(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function yd(e,a){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)jd(s[e],a)}var ys=Ge(null),qi=Ge(0);function Sd(e,a){e=Pa,se(qi,e),se(ys,a),Pa=e|a.baseLanes}function pl(){se(qi,Pa),se(ys,ys.current)}function xl(){Pa=qi.current,fe(ys),fe(qi)}var lt=0,Z=null,de=null,Te=null,Ai=!1,Ss=!1,Yt=!1,Ei=0,go=0,qs=null,pp=0;function Oe(){throw Error(u(321))}function gl(e,a){if(a===null)return!1;for(var s=0;s<a.length&&s<e.length;s++)if(!ra(e[s],a[s]))return!1;return!0}function vl(e,a,s,o,i,r){return lt=r,Z=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,q.H=e===null||e.memoizedState===null?iu:ru,Yt=!1,r=s(o,i),Yt=!1,Ss&&(r=Ad(a,s,o,i)),qd(e),r}function qd(e){q.H=Ti;var a=de!==null&&de.next!==null;if(lt=0,Te=de=Z=null,Ai=!1,go=0,qs=null,a)throw Error(u(300));e===null||Be||(e=e.dependencies,e!==null&&vi(e)&&(Be=!0))}function Ad(e,a,s,o){Z=e;var i=0;do{if(Ss&&(qs=null),go=0,Ss=!1,25<=i)throw Error(u(301));if(i+=1,Te=de=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}q.H=Sp,r=a(s,o)}while(Ss);return r}function xp(){var e=q.H,a=e.useState()[0];return a=typeof a.then=="function"?vo(a):a,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Z.flags|=1024),a}function bl(){var e=Ei!==0;return Ei=0,e}function jl(e,a,s){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~s}function yl(e){if(Ai){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ai=!1}lt=0,Te=de=Z=null,Ss=!1,go=Ei=0,qs=null}function aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?Z.memoizedState=Te=e:Te=Te.next=e,Te}function De(){if(de===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var a=Te===null?Z.memoizedState:Te.next;if(a!==null)Te=a,de=e;else{if(e===null)throw Z.alternate===null?Error(u(467)):Error(u(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Te===null?Z.memoizedState=Te=e:Te=Te.next=e}return Te}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var a=go;return go+=1,qs===null&&(qs=[]),e=gd(qs,e,a),a=Z,(Te===null?a.memoizedState:Te.next)===null&&(a=a.alternate,q.H=a===null||a.memoizedState===null?iu:ru),e}function wi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===ve)return Pe(e)}throw Error(u(438,String(e)))}function ql(e){var a=null,s=Z.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var o=Z.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(a={data:o.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Sl(),Z.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(e),o=0;o<e;o++)s[o]=zt;return a.index++,s}function Fa(e,a){return typeof a=="function"?a(e):a}function Oi(e){var a=De();return Al(a,de,e)}function Al(e,a,s){var o=e.queue;if(o===null)throw Error(u(311));o.lastRenderedReducer=s;var i=e.baseQueue,r=o.pending;if(r!==null){if(i!==null){var n=i.next;i.next=r.next,r.next=n}a.baseQueue=i=r,o.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{a=i.next;var d=n=null,h=null,v=a,A=!1;do{var O=v.lane&-536870913;if(O!==v.lane?(ee&O)===O:(lt&O)===O){var j=v.revertLane;if(j===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),O===bs&&(A=!0);else if((lt&j)===j){v=v.next,j===bs&&(A=!0);continue}else O={lane:0,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},h===null?(d=h=O,n=r):h=h.next=O,Z.lanes|=j,ft|=j;O=v.action,Yt&&s(r,O),r=v.hasEagerState?v.eagerState:s(r,O)}else j={lane:O,revertLane:v.revertLane,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},h===null?(d=h=j,n=r):h=h.next=j,Z.lanes|=O,ft|=O;v=v.next}while(v!==null&&v!==a);if(h===null?n=r:h.next=d,!ra(r,e.memoizedState)&&(Be=!0,A&&(s=js,s!==null)))throw s;e.memoizedState=r,e.baseState=n,e.baseQueue=h,o.lastRenderedState=r}return i===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function El(e){var a=De(),s=a.queue;if(s===null)throw Error(u(311));s.lastRenderedReducer=e;var o=s.dispatch,i=s.pending,r=a.memoizedState;if(i!==null){s.pending=null;var n=i=i.next;do r=e(r,n.action),n=n.next;while(n!==i);ra(r,a.memoizedState)||(Be=!0),a.memoizedState=r,a.baseQueue===null&&(a.baseState=r),s.lastRenderedState=r}return[r,o]}function Ed(e,a,s){var o=Z,i=De(),r=oe;if(r){if(s===void 0)throw Error(u(407));s=s()}else s=a();var n=!ra((de||i).memoizedState,s);n&&(i.memoizedState=s,Be=!0),i=i.queue;var d=zd.bind(null,o,i,e);if(bo(2048,8,d,[e]),i.getSnapshot!==a||n||Te!==null&&Te.memoizedState.tag&1){if(o.flags|=2048,As(9,zi(),Od.bind(null,o,i,s,a),null),xe===null)throw Error(u(349));r||(lt&124)!==0||wd(o,a,s)}return s}function wd(e,a,s){e.flags|=16384,e={getSnapshot:a,value:s},a=Z.updateQueue,a===null?(a=Sl(),Z.updateQueue=a,a.stores=[e]):(s=a.stores,s===null?a.stores=[e]:s.push(e))}function Od(e,a,s,o){a.value=s,a.getSnapshot=o,Md(a)&&Nd(e)}function zd(e,a,s){return s(function(){Md(a)&&Nd(e)})}function Md(e){var a=e.getSnapshot;e=e.value;try{var s=a();return!ra(e,s)}catch{return!0}}function Nd(e){var a=ps(e,2);a!==null&&ma(a,e,2)}function wl(e){var a=aa();if(typeof e=="function"){var s=e;if(e=s(),Yt){et(!0);try{s()}finally{et(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:e},a}function Td(e,a,s,o){return e.baseState=s,Al(e,de,typeof o=="function"?o:Fa)}function gp(e,a,s,o,i){if(Ni(e))throw Error(u(485));if(e=a.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(n){r.listeners.push(n)}};q.T!==null?s(!0):r.isTransition=!1,o(r),s=a.pending,s===null?(r.next=a.pending=r,Dd(a,r)):(r.next=s.next,a.pending=s.next=r)}}function Dd(e,a){var s=a.action,o=a.payload,i=e.state;if(a.isTransition){var r=q.T,n={};q.T=n;try{var d=s(i,o),h=q.S;h!==null&&h(n,d),Cd(e,a,d)}catch(v){Ol(e,a,v)}finally{q.T=r}}else try{r=s(i,o),Cd(e,a,r)}catch(v){Ol(e,a,v)}}function Cd(e,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Rd(e,a,o)},function(o){return Ol(e,a,o)}):Rd(e,a,s)}function Rd(e,a,s){a.status="fulfilled",a.value=s,kd(a),e.state=s,a=e.pending,a!==null&&(s=a.next,s===a?e.pending=null:(s=s.next,a.next=s,Dd(e,s)))}function Ol(e,a,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do a.status="rejected",a.reason=s,kd(a),a=a.next;while(a!==o)}e.action=null}function kd(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Ud(e,a){return a}function Ld(e,a){if(oe){var s=xe.formState;if(s!==null){e:{var o=Z;if(oe){if(Ae){a:{for(var i=Ae,r=Oa;i.nodeType!==8;){if(!r){i=null;break a}if(i=Aa(i.nextSibling),i===null){i=null;break a}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Ae=Aa(i.nextSibling),o=i.data==="F!";break e}}Ht(o)}o=!1}o&&(a=s[0])}}return s=aa(),s.memoizedState=s.baseState=a,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ud,lastRenderedState:a},s.queue=o,s=tu.bind(null,Z,o),o.dispatch=s,o=wl(!1),r=Dl.bind(null,Z,!1,o.queue),o=aa(),i={state:a,dispatch:null,action:e,pending:null},o.queue=i,s=gp.bind(null,Z,i,r,s),i.dispatch=s,o.memoizedState=e,[a,s,!1]}function Gd(e){var a=De();return Vd(a,de,e)}function Vd(e,a,s){if(a=Al(e,a,Ud)[0],e=Oi(Fa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var o=vo(a)}catch(n){throw n===mo?yi:n}else o=a;a=De();var i=a.queue,r=i.dispatch;return s!==a.memoizedState&&(Z.flags|=2048,As(9,zi(),vp.bind(null,i,s),null)),[o,r,e]}function vp(e,a){e.action=a}function Bd(e){var a=De(),s=de;if(s!==null)return Vd(a,s,e);De(),a=a.memoizedState,s=De();var o=s.queue.dispatch;return s.memoizedState=e,[a,o,!1]}function As(e,a,s,o){return e={tag:e,create:s,deps:o,inst:a,next:null},a=Z.updateQueue,a===null&&(a=Sl(),Z.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,a.lastEffect=e),e}function zi(){return{destroy:void 0,resource:void 0}}function Hd(){return De().memoizedState}function Mi(e,a,s,o){var i=aa();o=o===void 0?null:o,Z.flags|=e,i.memoizedState=As(1|a,zi(),s,o)}function bo(e,a,s,o){var i=De();o=o===void 0?null:o;var r=i.memoizedState.inst;de!==null&&o!==null&&gl(o,de.memoizedState.deps)?i.memoizedState=As(a,r,s,o):(Z.flags|=e,i.memoizedState=As(1|a,r,s,o))}function _d(e,a){Mi(8390656,8,e,a)}function Fd(e,a){bo(2048,8,e,a)}function Qd(e,a){return bo(4,2,e,a)}function Yd(e,a){return bo(4,4,e,a)}function Xd(e,a){if(typeof a=="function"){e=e();var s=a(e);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Zd(e,a,s){s=s!=null?s.concat([e]):null,bo(4,4,Xd.bind(null,a,e),s)}function zl(){}function Kd(e,a){var s=De();a=a===void 0?null:a;var o=s.memoizedState;return a!==null&&gl(a,o[1])?o[0]:(s.memoizedState=[e,a],e)}function Pd(e,a){var s=De();a=a===void 0?null:a;var o=s.memoizedState;if(a!==null&&gl(a,o[1]))return o[0];if(o=e(),Yt){et(!0);try{e()}finally{et(!1)}}return s.memoizedState=[o,a],o}function Ml(e,a,s){return s===void 0||(lt&1073741824)!==0?e.memoizedState=a:(e.memoizedState=s,e=$u(),Z.lanes|=e,ft|=e,s)}function Id(e,a,s,o){return ra(s,a)?s:ys.current!==null?(e=Ml(e,s,o),ra(e,a)||(Be=!0),e):(lt&42)===0?(Be=!0,e.memoizedState=s):(e=$u(),Z.lanes|=e,ft|=e,a)}function Jd(e,a,s,o,i){var r=N.p;N.p=r!==0&&8>r?r:8;var n=q.T,d={};q.T=d,Dl(e,!1,a,s);try{var h=i(),v=q.S;if(v!==null&&v(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var A=fp(h,o);jo(e,a,A,ua(e))}else jo(e,a,o,ua(e))}catch(O){jo(e,a,{then:function(){},status:"rejected",reason:O},ua())}finally{N.p=r,q.T=n}}function bp(){}function Nl(e,a,s,o){if(e.tag!==5)throw Error(u(476));var i=$d(e).queue;Jd(e,i,a,B,s===null?bp:function(){return Wd(e),s(o)})}function $d(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:B},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:s},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Wd(e){var a=$d(e).next.queue;jo(e,a,{},ua())}function Tl(){return Pe(Go)}function eu(){return De().memoizedState}function au(){return De().memoizedState}function jp(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var s=ua();e=it(s);var o=rt(a,e,s);o!==null&&(ma(o,a,s),fo(o,a,s)),a={cache:ll()},e.payload=a;return}a=a.return}}function yp(e,a,s){var o=ua();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Ni(e)?su(a,s):(s=Jr(e,a,s,o),s!==null&&(ma(s,e,o),ou(s,a,o)))}function tu(e,a,s){var o=ua();jo(e,a,s,o)}function jo(e,a,s,o){var i={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))su(a,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=a.lastRenderedReducer,r!==null))try{var n=a.lastRenderedState,d=r(n,s);if(i.hasEagerState=!0,i.eagerState=d,ra(d,n))return hi(e,a,i,0),xe===null&&mi(),!1}catch{}if(s=Jr(e,a,i,o),s!==null)return ma(s,e,o),ou(s,a,o),!0}return!1}function Dl(e,a,s,o){if(o={lane:2,revertLane:un(),action:o,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(a)throw Error(u(479))}else a=Jr(e,s,o,2),a!==null&&ma(a,e,2)}function Ni(e){var a=e.alternate;return e===Z||a!==null&&a===Z}function su(e,a){Ss=Ai=!0;var s=e.pending;s===null?a.next=a:(a.next=s.next,s.next=a),e.pending=a}function ou(e,a,s){if((s&4194048)!==0){var o=a.lanes;o&=e.pendingLanes,s|=o,a.lanes=s,mc(e,s)}}var Ti={readContext:Pe,use:wi,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe},iu={readContext:Pe,use:wi,useCallback:function(e,a){return aa().memoizedState=[e,a===void 0?null:a],e},useContext:Pe,useEffect:_d,useImperativeHandle:function(e,a,s){s=s!=null?s.concat([e]):null,Mi(4194308,4,Xd.bind(null,a,e),s)},useLayoutEffect:function(e,a){return Mi(4194308,4,e,a)},useInsertionEffect:function(e,a){Mi(4,2,e,a)},useMemo:function(e,a){var s=aa();a=a===void 0?null:a;var o=e();if(Yt){et(!0);try{e()}finally{et(!1)}}return s.memoizedState=[o,a],o},useReducer:function(e,a,s){var o=aa();if(s!==void 0){var i=s(a);if(Yt){et(!0);try{s(a)}finally{et(!1)}}}else i=a;return o.memoizedState=o.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=yp.bind(null,Z,e),[o.memoizedState,e]},useRef:function(e){var a=aa();return e={current:e},a.memoizedState=e},useState:function(e){e=wl(e);var a=e.queue,s=tu.bind(null,Z,a);return a.dispatch=s,[e.memoizedState,s]},useDebugValue:zl,useDeferredValue:function(e,a){var s=aa();return Ml(s,e,a)},useTransition:function(){var e=wl(!1);return e=Jd.bind(null,Z,e.queue,!0,!1),aa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,s){var o=Z,i=aa();if(oe){if(s===void 0)throw Error(u(407));s=s()}else{if(s=a(),xe===null)throw Error(u(349));(ee&124)!==0||wd(o,a,s)}i.memoizedState=s;var r={value:s,getSnapshot:a};return i.queue=r,_d(zd.bind(null,o,r,e),[e]),o.flags|=2048,As(9,zi(),Od.bind(null,o,r,s,a),null),s},useId:function(){var e=aa(),a=xe.identifierPrefix;if(oe){var s=Ba,o=Va;s=(o&~(1<<32-ia(o)-1)).toString(32)+s,a="«"+a+"R"+s,s=Ei++,0<s&&(a+="H"+s.toString(32)),a+="»"}else s=pp++,a="«"+a+"r"+s.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Tl,useFormState:Ld,useActionState:Ld,useOptimistic:function(e){var a=aa();a.memoizedState=a.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Dl.bind(null,Z,!0,s),s.dispatch=a,[e,a]},useMemoCache:ql,useCacheRefresh:function(){return aa().memoizedState=jp.bind(null,Z)}},ru={readContext:Pe,use:wi,useCallback:Kd,useContext:Pe,useEffect:Fd,useImperativeHandle:Zd,useInsertionEffect:Qd,useLayoutEffect:Yd,useMemo:Pd,useReducer:Oi,useRef:Hd,useState:function(){return Oi(Fa)},useDebugValue:zl,useDeferredValue:function(e,a){var s=De();return Id(s,de.memoizedState,e,a)},useTransition:function(){var e=Oi(Fa)[0],a=De().memoizedState;return[typeof e=="boolean"?e:vo(e),a]},useSyncExternalStore:Ed,useId:eu,useHostTransitionStatus:Tl,useFormState:Gd,useActionState:Gd,useOptimistic:function(e,a){var s=De();return Td(s,de,e,a)},useMemoCache:ql,useCacheRefresh:au},Sp={readContext:Pe,use:wi,useCallback:Kd,useContext:Pe,useEffect:Fd,useImperativeHandle:Zd,useInsertionEffect:Qd,useLayoutEffect:Yd,useMemo:Pd,useReducer:El,useRef:Hd,useState:function(){return El(Fa)},useDebugValue:zl,useDeferredValue:function(e,a){var s=De();return de===null?Ml(s,e,a):Id(s,de.memoizedState,e,a)},useTransition:function(){var e=El(Fa)[0],a=De().memoizedState;return[typeof e=="boolean"?e:vo(e),a]},useSyncExternalStore:Ed,useId:eu,useHostTransitionStatus:Tl,useFormState:Bd,useActionState:Bd,useOptimistic:function(e,a){var s=De();return de!==null?Td(s,de,e,a):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:ql,useCacheRefresh:au},Es=null,yo=0;function Di(e){var a=yo;return yo+=1,Es===null&&(Es=[]),gd(Es,e,a)}function So(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ci(e,a){throw a.$$typeof===I?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function lu(e){var a=e._init;return a(e._payload)}function nu(e){function a(x,p){if(e){var g=x.deletions;g===null?(x.deletions=[p],x.flags|=16):g.push(p)}}function s(x,p){if(!e)return null;for(;p!==null;)a(x,p),p=p.sibling;return null}function o(x){for(var p=new Map;x!==null;)x.key!==null?p.set(x.key,x):p.set(x.index,x),x=x.sibling;return p}function i(x,p){return x=Ga(x,p),x.index=0,x.sibling=null,x}function r(x,p,g){return x.index=g,e?(g=x.alternate,g!==null?(g=g.index,g<p?(x.flags|=67108866,p):g):(x.flags|=67108866,p)):(x.flags|=1048576,p)}function n(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function d(x,p,g,E){return p===null||p.tag!==6?(p=Wr(g,x.mode,E),p.return=x,p):(p=i(p,g),p.return=x,p)}function h(x,p,g,E){var D=g.type;return D===X?A(x,p,g.props.children,E,g.key):p!==null&&(p.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===U&&lu(D)===p.type)?(p=i(p,g.props),So(p,g),p.return=x,p):(p=pi(g.type,g.key,g.props,null,x.mode,E),So(p,g),p.return=x,p)}function v(x,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=el(g,x.mode,E),p.return=x,p):(p=i(p,g.children||[]),p.return=x,p)}function A(x,p,g,E,D){return p===null||p.tag!==7?(p=Lt(g,x.mode,E,D),p.return=x,p):(p=i(p,g),p.return=x,p)}function O(x,p,g){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Wr(""+p,x.mode,g),p.return=x,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case F:return g=pi(p.type,p.key,p.props,null,x.mode,g),So(g,p),g.return=x,g;case re:return p=el(p,x.mode,g),p.return=x,p;case U:var E=p._init;return p=E(p._payload),O(x,p,g)}if(Ze(p)||Fe(p))return p=Lt(p,x.mode,g,null),p.return=x,p;if(typeof p.then=="function")return O(x,Di(p),g);if(p.$$typeof===ve)return O(x,bi(x,p),g);Ci(x,p)}return null}function j(x,p,g,E){var D=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return D!==null?null:d(x,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case F:return g.key===D?h(x,p,g,E):null;case re:return g.key===D?v(x,p,g,E):null;case U:return D=g._init,g=D(g._payload),j(x,p,g,E)}if(Ze(g)||Fe(g))return D!==null?null:A(x,p,g,E,null);if(typeof g.then=="function")return j(x,p,Di(g),E);if(g.$$typeof===ve)return j(x,p,bi(x,g),E);Ci(x,g)}return null}function y(x,p,g,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return x=x.get(g)||null,d(p,x,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case F:return x=x.get(E.key===null?g:E.key)||null,h(p,x,E,D);case re:return x=x.get(E.key===null?g:E.key)||null,v(p,x,E,D);case U:var P=E._init;return E=P(E._payload),y(x,p,g,E,D)}if(Ze(E)||Fe(E))return x=x.get(g)||null,A(p,x,E,D,null);if(typeof E.then=="function")return y(x,p,g,Di(E),D);if(E.$$typeof===ve)return y(x,p,g,bi(p,E),D);Ci(p,E)}return null}function _(x,p,g,E){for(var D=null,P=null,L=p,H=p=0,_e=null;L!==null&&H<g.length;H++){L.index>H?(_e=L,L=null):_e=L.sibling;var ae=j(x,L,g[H],E);if(ae===null){L===null&&(L=_e);break}e&&L&&ae.alternate===null&&a(x,L),p=r(ae,p,H),P===null?D=ae:P.sibling=ae,P=ae,L=_e}if(H===g.length)return s(x,L),oe&&Vt(x,H),D;if(L===null){for(;H<g.length;H++)L=O(x,g[H],E),L!==null&&(p=r(L,p,H),P===null?D=L:P.sibling=L,P=L);return oe&&Vt(x,H),D}for(L=o(L);H<g.length;H++)_e=y(L,x,H,g[H],E),_e!==null&&(e&&_e.alternate!==null&&L.delete(_e.key===null?H:_e.key),p=r(_e,p,H),P===null?D=_e:P.sibling=_e,P=_e);return e&&L.forEach(function(qt){return a(x,qt)}),oe&&Vt(x,H),D}function V(x,p,g,E){if(g==null)throw Error(u(151));for(var D=null,P=null,L=p,H=p=0,_e=null,ae=g.next();L!==null&&!ae.done;H++,ae=g.next()){L.index>H?(_e=L,L=null):_e=L.sibling;var qt=j(x,L,ae.value,E);if(qt===null){L===null&&(L=_e);break}e&&L&&qt.alternate===null&&a(x,L),p=r(qt,p,H),P===null?D=qt:P.sibling=qt,P=qt,L=_e}if(ae.done)return s(x,L),oe&&Vt(x,H),D;if(L===null){for(;!ae.done;H++,ae=g.next())ae=O(x,ae.value,E),ae!==null&&(p=r(ae,p,H),P===null?D=ae:P.sibling=ae,P=ae);return oe&&Vt(x,H),D}for(L=o(L);!ae.done;H++,ae=g.next())ae=y(L,x,H,ae.value,E),ae!==null&&(e&&ae.alternate!==null&&L.delete(ae.key===null?H:ae.key),p=r(ae,p,H),P===null?D=ae:P.sibling=ae,P=ae);return e&&L.forEach(function(qx){return a(x,qx)}),oe&&Vt(x,H),D}function me(x,p,g,E){if(typeof g=="object"&&g!==null&&g.type===X&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case F:e:{for(var D=g.key;p!==null;){if(p.key===D){if(D=g.type,D===X){if(p.tag===7){s(x,p.sibling),E=i(p,g.props.children),E.return=x,x=E;break e}}else if(p.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===U&&lu(D)===p.type){s(x,p.sibling),E=i(p,g.props),So(E,g),E.return=x,x=E;break e}s(x,p);break}else a(x,p);p=p.sibling}g.type===X?(E=Lt(g.props.children,x.mode,E,g.key),E.return=x,x=E):(E=pi(g.type,g.key,g.props,null,x.mode,E),So(E,g),E.return=x,x=E)}return n(x);case re:e:{for(D=g.key;p!==null;){if(p.key===D)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){s(x,p.sibling),E=i(p,g.children||[]),E.return=x,x=E;break e}else{s(x,p);break}else a(x,p);p=p.sibling}E=el(g,x.mode,E),E.return=x,x=E}return n(x);case U:return D=g._init,g=D(g._payload),me(x,p,g,E)}if(Ze(g))return _(x,p,g,E);if(Fe(g)){if(D=Fe(g),typeof D!="function")throw Error(u(150));return g=D.call(g),V(x,p,g,E)}if(typeof g.then=="function")return me(x,p,Di(g),E);if(g.$$typeof===ve)return me(x,p,bi(x,g),E);Ci(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,p!==null&&p.tag===6?(s(x,p.sibling),E=i(p,g),E.return=x,x=E):(s(x,p),E=Wr(g,x.mode,E),E.return=x,x=E),n(x)):s(x,p)}return function(x,p,g,E){try{yo=0;var D=me(x,p,g,E);return Es=null,D}catch(L){if(L===mo||L===yi)throw L;var P=la(29,L,null,x.mode);return P.lanes=E,P.return=x,P}}}var ws=nu(!0),cu=nu(!1),ba=Ge(null),za=null;function nt(e){var a=e.alternate;se(ke,ke.current&1),se(ba,e),za===null&&(a===null||ys.current!==null||a.memoizedState!==null)&&(za=e)}function du(e){if(e.tag===22){if(se(ke,ke.current),se(ba,e),za===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(za=e)}}else ct()}function ct(){se(ke,ke.current),se(ba,ba.current)}function Qa(e){fe(ba),za===e&&(za=null),fe(ke)}var ke=Ge(0);function Ri(e){for(var a=e;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||qn(s)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Cl(e,a,s,o){a=e.memoizedState,s=s(o,a),s=s==null?a:k({},a,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Rl={enqueueSetState:function(e,a,s){e=e._reactInternals;var o=ua(),i=it(o);i.payload=a,s!=null&&(i.callback=s),a=rt(e,i,o),a!==null&&(ma(a,e,o),fo(a,e,o))},enqueueReplaceState:function(e,a,s){e=e._reactInternals;var o=ua(),i=it(o);i.tag=1,i.payload=a,s!=null&&(i.callback=s),a=rt(e,i,o),a!==null&&(ma(a,e,o),fo(a,e,o))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var s=ua(),o=it(s);o.tag=2,a!=null&&(o.callback=a),a=rt(e,o,s),a!==null&&(ma(a,e,s),fo(a,e,s))}};function uu(e,a,s,o,i,r,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,n):a.prototype&&a.prototype.isPureReactComponent?!so(s,o)||!so(i,r):!0}function mu(e,a,s,o){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,o),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,o),a.state!==e&&Rl.enqueueReplaceState(a,a.state,null)}function Xt(e,a){var s=a;if("ref"in a){s={};for(var o in a)o!=="ref"&&(s[o]=a[o])}if(e=e.defaultProps){s===a&&(s=k({},s));for(var i in e)s[i]===void 0&&(s[i]=e[i])}return s}var ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hu(e){ki(e)}function fu(e){console.error(e)}function pu(e){ki(e)}function Ui(e,a){try{var s=e.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(o){setTimeout(function(){throw o})}}function xu(e,a,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function kl(e,a,s){return s=it(s),s.tag=3,s.payload={element:null},s.callback=function(){Ui(e,a)},s}function gu(e){return e=it(e),e.tag=3,e}function vu(e,a,s,o){var i=s.type.getDerivedStateFromError;if(typeof i=="function"){var r=o.value;e.payload=function(){return i(r)},e.callback=function(){xu(a,s,o)}}var n=s.stateNode;n!==null&&typeof n.componentDidCatch=="function"&&(e.callback=function(){xu(a,s,o),typeof i!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var d=o.stack;this.componentDidCatch(o.value,{componentStack:d!==null?d:""})})}function qp(e,a,s,o,i){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(a=s.alternate,a!==null&&no(a,s,i,!0),s=ba.current,s!==null){switch(s.tag){case 13:return za===null?rn():s.alternate===null&&Ee===0&&(Ee=3),s.flags&=-257,s.flags|=65536,s.lanes=i,o===dl?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([o]):a.add(o),nn(e,o,i)),!1;case 22:return s.flags|=65536,o===dl?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([o]):s.add(o)),nn(e,o,i)),!1}throw Error(u(435,s.tag))}return nn(e,o,i),rn(),!1}if(oe)return a=ba.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,o!==sl&&(e=Error(u(422),{cause:o}),lo(pa(e,s)))):(o!==sl&&(a=Error(u(423),{cause:o}),lo(pa(a,s))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,o=pa(o,s),i=kl(e.stateNode,o,i),hl(e,i),Ee!==4&&(Ee=2)),!1;var r=Error(u(520),{cause:o});if(r=pa(r,s),Mo===null?Mo=[r]:Mo.push(r),Ee!==4&&(Ee=2),a===null)return!0;o=pa(o,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,e=i&-i,s.lanes|=e,e=kl(s.stateNode,o,e),hl(s,e),!1;case 1:if(a=s.type,r=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))))return s.flags|=65536,i&=-i,s.lanes|=i,i=gu(i),vu(i,e,s,o),hl(s,i),!1}s=s.return}while(s!==null);return!1}var bu=Error(u(461)),Be=!1;function Qe(e,a,s,o){a.child=e===null?cu(a,null,s,o):ws(a,e.child,s,o)}function ju(e,a,s,o,i){s=s.render;var r=a.ref;if("ref"in o){var n={};for(var d in o)d!=="ref"&&(n[d]=o[d])}else n=o;return Ft(a),o=vl(e,a,s,n,r,i),d=bl(),e!==null&&!Be?(jl(e,a,i),Ya(e,a,i)):(oe&&d&&al(a),a.flags|=1,Qe(e,a,o,i),a.child)}function yu(e,a,s,o,i){if(e===null){var r=s.type;return typeof r=="function"&&!$r(r)&&r.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=r,Su(e,a,r,o,i)):(e=pi(s.type,null,o,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(r=e.child,!Fl(e,i)){var n=r.memoizedProps;if(s=s.compare,s=s!==null?s:so,s(n,o)&&e.ref===a.ref)return Ya(e,a,i)}return a.flags|=1,e=Ga(r,o),e.ref=a.ref,e.return=a,a.child=e}function Su(e,a,s,o,i){if(e!==null){var r=e.memoizedProps;if(so(r,o)&&e.ref===a.ref)if(Be=!1,a.pendingProps=o=r,Fl(e,i))(e.flags&131072)!==0&&(Be=!0);else return a.lanes=e.lanes,Ya(e,a,i)}return Ul(e,a,s,o,i)}function qu(e,a,s){var o=a.pendingProps,i=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((a.flags&128)!==0){if(o=r!==null?r.baseLanes|s:s,e!==null){for(i=a.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;a.childLanes=r&~o}else a.childLanes=0,a.child=null;return Au(e,a,o,s)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ji(a,r!==null?r.cachePool:null),r!==null?Sd(a,r):pl(),du(a);else return a.lanes=a.childLanes=536870912,Au(e,a,r!==null?r.baseLanes|s:s,s)}else r!==null?(ji(a,r.cachePool),Sd(a,r),ct(),a.memoizedState=null):(e!==null&&ji(a,null),pl(),ct());return Qe(e,a,i,s),a.child}function Au(e,a,s,o){var i=cl();return i=i===null?null:{parent:Re._currentValue,pool:i},a.memoizedState={baseLanes:s,cachePool:i},e!==null&&ji(a,null),pl(),du(a),e!==null&&no(e,a,o,!0),null}function Li(e,a){var s=a.ref;if(s===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(u(284));(e===null||e.ref!==s)&&(a.flags|=4194816)}}function Ul(e,a,s,o,i){return Ft(a),s=vl(e,a,s,o,void 0,i),o=bl(),e!==null&&!Be?(jl(e,a,i),Ya(e,a,i)):(oe&&o&&al(a),a.flags|=1,Qe(e,a,s,i),a.child)}function Eu(e,a,s,o,i,r){return Ft(a),a.updateQueue=null,s=Ad(a,o,s,i),qd(e),o=bl(),e!==null&&!Be?(jl(e,a,r),Ya(e,a,r)):(oe&&o&&al(a),a.flags|=1,Qe(e,a,s,r),a.child)}function wu(e,a,s,o,i){if(Ft(a),a.stateNode===null){var r=xs,n=s.contextType;typeof n=="object"&&n!==null&&(r=Pe(n)),r=new s(o,r),a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Rl,a.stateNode=r,r._reactInternals=a,r=a.stateNode,r.props=o,r.state=a.memoizedState,r.refs={},ul(a),n=s.contextType,r.context=typeof n=="object"&&n!==null?Pe(n):xs,r.state=a.memoizedState,n=s.getDerivedStateFromProps,typeof n=="function"&&(Cl(a,s,n,o),r.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Rl.enqueueReplaceState(r,r.state,null),xo(a,o,r,i),po(),r.state=a.memoizedState),typeof r.componentDidMount=="function"&&(a.flags|=4194308),o=!0}else if(e===null){r=a.stateNode;var d=a.memoizedProps,h=Xt(s,d);r.props=h;var v=r.context,A=s.contextType;n=xs,typeof A=="object"&&A!==null&&(n=Pe(A));var O=s.getDerivedStateFromProps;A=typeof O=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,A||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||v!==n)&&mu(a,r,o,n),ot=!1;var j=a.memoizedState;r.state=j,xo(a,o,r,i),po(),v=a.memoizedState,d||j!==v||ot?(typeof O=="function"&&(Cl(a,s,O,o),v=a.memoizedState),(h=ot||uu(a,s,h,o,j,v,n))?(A||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(a.flags|=4194308)):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=o,a.memoizedState=v),r.props=o,r.state=v,r.context=n,o=h):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),o=!1)}else{r=a.stateNode,ml(e,a),n=a.memoizedProps,A=Xt(s,n),r.props=A,O=a.pendingProps,j=r.context,v=s.contextType,h=xs,typeof v=="object"&&v!==null&&(h=Pe(v)),d=s.getDerivedStateFromProps,(v=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(n!==O||j!==h)&&mu(a,r,o,h),ot=!1,j=a.memoizedState,r.state=j,xo(a,o,r,i),po();var y=a.memoizedState;n!==O||j!==y||ot||e!==null&&e.dependencies!==null&&vi(e.dependencies)?(typeof d=="function"&&(Cl(a,s,d,o),y=a.memoizedState),(A=ot||uu(a,s,A,o,j,y,h)||e!==null&&e.dependencies!==null&&vi(e.dependencies))?(v||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,y,h),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,y,h)),typeof r.componentDidUpdate=="function"&&(a.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof r.componentDidUpdate!="function"||n===e.memoizedProps&&j===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&j===e.memoizedState||(a.flags|=1024),a.memoizedProps=o,a.memoizedState=y),r.props=o,r.state=y,r.context=h,o=A):(typeof r.componentDidUpdate!="function"||n===e.memoizedProps&&j===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&j===e.memoizedState||(a.flags|=1024),o=!1)}return r=o,Li(e,a),o=(a.flags&128)!==0,r||o?(r=a.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:r.render(),a.flags|=1,e!==null&&o?(a.child=ws(a,e.child,null,i),a.child=ws(a,null,s,i)):Qe(e,a,s,i),a.memoizedState=r.state,e=a.child):e=Ya(e,a,i),e}function Ou(e,a,s,o){return ro(),a.flags|=256,Qe(e,a,s,o),a.child}var Ll={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gl(e){return{baseLanes:e,cachePool:fd()}}function Vl(e,a,s){return e=e!==null?e.childLanes&~s:0,a&&(e|=ja),e}function zu(e,a,s){var o=a.pendingProps,i=!1,r=(a.flags&128)!==0,n;if((n=r)||(n=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),n&&(i=!0,a.flags&=-129),n=(a.flags&32)!==0,a.flags&=-33,e===null){if(oe){if(i?nt(a):ct(),oe){var d=Ae,h;if(h=d){e:{for(h=d,d=Oa;h.nodeType!==8;){if(!d){d=null;break e}if(h=Aa(h.nextSibling),h===null){d=null;break e}}d=h}d!==null?(a.memoizedState={dehydrated:d,treeContext:Gt!==null?{id:Va,overflow:Ba}:null,retryLane:536870912,hydrationErrors:null},h=la(18,null,null,0),h.stateNode=d,h.return=a,a.child=h,Je=a,Ae=null,h=!0):h=!1}h||Ht(a)}if(d=a.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return qn(d)?a.lanes=32:a.lanes=536870912,null;Qa(a)}return d=o.children,o=o.fallback,i?(ct(),i=a.mode,d=Gi({mode:"hidden",children:d},i),o=Lt(o,i,s,null),d.return=a,o.return=a,d.sibling=o,a.child=d,i=a.child,i.memoizedState=Gl(s),i.childLanes=Vl(e,n,s),a.memoizedState=Ll,o):(nt(a),Bl(a,d))}if(h=e.memoizedState,h!==null&&(d=h.dehydrated,d!==null)){if(r)a.flags&256?(nt(a),a.flags&=-257,a=Hl(e,a,s)):a.memoizedState!==null?(ct(),a.child=e.child,a.flags|=128,a=null):(ct(),i=o.fallback,d=a.mode,o=Gi({mode:"visible",children:o.children},d),i=Lt(i,d,s,null),i.flags|=2,o.return=a,i.return=a,o.sibling=i,a.child=o,ws(a,e.child,null,s),o=a.child,o.memoizedState=Gl(s),o.childLanes=Vl(e,n,s),a.memoizedState=Ll,a=i);else if(nt(a),qn(d)){if(n=d.nextSibling&&d.nextSibling.dataset,n)var v=n.dgst;n=v,o=Error(u(419)),o.stack="",o.digest=n,lo({value:o,source:null,stack:null}),a=Hl(e,a,s)}else if(Be||no(e,a,s,!1),n=(s&e.childLanes)!==0,Be||n){if(n=xe,n!==null&&(o=s&-s,o=(o&42)!==0?1:qr(o),o=(o&(n.suspendedLanes|s))!==0?0:o,o!==0&&o!==h.retryLane))throw h.retryLane=o,ps(e,o),ma(n,e,o),bu;d.data==="$?"||rn(),a=Hl(e,a,s)}else d.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=h.treeContext,Ae=Aa(d.nextSibling),Je=a,oe=!0,Bt=null,Oa=!1,e!==null&&(ga[va++]=Va,ga[va++]=Ba,ga[va++]=Gt,Va=e.id,Ba=e.overflow,Gt=a),a=Bl(a,o.children),a.flags|=4096);return a}return i?(ct(),i=o.fallback,d=a.mode,h=e.child,v=h.sibling,o=Ga(h,{mode:"hidden",children:o.children}),o.subtreeFlags=h.subtreeFlags&65011712,v!==null?i=Ga(v,i):(i=Lt(i,d,s,null),i.flags|=2),i.return=a,o.return=a,o.sibling=i,a.child=o,o=i,i=a.child,d=e.child.memoizedState,d===null?d=Gl(s):(h=d.cachePool,h!==null?(v=Re._currentValue,h=h.parent!==v?{parent:v,pool:v}:h):h=fd(),d={baseLanes:d.baseLanes|s,cachePool:h}),i.memoizedState=d,i.childLanes=Vl(e,n,s),a.memoizedState=Ll,o):(nt(a),s=e.child,e=s.sibling,s=Ga(s,{mode:"visible",children:o.children}),s.return=a,s.sibling=null,e!==null&&(n=a.deletions,n===null?(a.deletions=[e],a.flags|=16):n.push(e)),a.child=s,a.memoizedState=null,s)}function Bl(e,a){return a=Gi({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Gi(e,a){return e=la(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hl(e,a,s){return ws(a,e.child,null,s),e=Bl(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Mu(e,a,s){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a),il(e.return,a,s)}function _l(e,a,s,o,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:i}:(r.isBackwards=a,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=s,r.tailMode=i)}function Nu(e,a,s){var o=a.pendingProps,i=o.revealOrder,r=o.tail;if(Qe(e,a,o.children,s),o=ke.current,(o&2)!==0)o=o&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,s,a);else if(e.tag===19)Mu(e,s,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(se(ke,o),i){case"forwards":for(s=a.child,i=null;s!==null;)e=s.alternate,e!==null&&Ri(e)===null&&(i=s),s=s.sibling;s=i,s===null?(i=a.child,a.child=null):(i=s.sibling,s.sibling=null),_l(a,!1,i,s,r);break;case"backwards":for(s=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&Ri(e)===null){a.child=i;break}e=i.sibling,i.sibling=s,s=i,i=e}_l(a,!0,s,null,r);break;case"together":_l(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ya(e,a,s){if(e!==null&&(a.dependencies=e.dependencies),ft|=a.lanes,(s&a.childLanes)===0)if(e!==null){if(no(e,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,s=Ga(e,e.pendingProps),a.child=s,s.return=a;e.sibling!==null;)e=e.sibling,s=s.sibling=Ga(e,e.pendingProps),s.return=a;s.sibling=null}return a.child}function Fl(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&vi(e)))}function Ap(e,a,s){switch(a.tag){case 3:Nt(a,a.stateNode.containerInfo),st(a,Re,e.memoizedState.cache),ro();break;case 27:case 5:es(a);break;case 4:Nt(a,a.stateNode.containerInfo);break;case 10:st(a,a.type,a.memoizedProps.value);break;case 13:var o=a.memoizedState;if(o!==null)return o.dehydrated!==null?(nt(a),a.flags|=128,null):(s&a.child.childLanes)!==0?zu(e,a,s):(nt(a),e=Ya(e,a,s),e!==null?e.sibling:null);nt(a);break;case 19:var i=(e.flags&128)!==0;if(o=(s&a.childLanes)!==0,o||(no(e,a,s,!1),o=(s&a.childLanes)!==0),i){if(o)return Nu(e,a,s);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(ke,ke.current),o)break;return null;case 22:case 23:return a.lanes=0,qu(e,a,s);case 24:st(a,Re,e.memoizedState.cache)}return Ya(e,a,s)}function Tu(e,a,s){if(e!==null)if(e.memoizedProps!==a.pendingProps)Be=!0;else{if(!Fl(e,s)&&(a.flags&128)===0)return Be=!1,Ap(e,a,s);Be=(e.flags&131072)!==0}else Be=!1,oe&&(a.flags&1048576)!==0&&ld(a,gi,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var o=a.elementType,i=o._init;if(o=i(o._payload),a.type=o,typeof o=="function")$r(o)?(e=Xt(o,e),a.tag=1,a=wu(null,a,o,e,s)):(a.tag=0,a=Ul(null,a,o,e,s));else{if(o!=null){if(i=o.$$typeof,i===Me){a.tag=11,a=ju(null,a,o,e,s);break e}else if(i===Ie){a.tag=14,a=yu(null,a,o,e,s);break e}}throw a=Ca(o)||o,Error(u(306,a,""))}}return a;case 0:return Ul(e,a,a.type,a.pendingProps,s);case 1:return o=a.type,i=Xt(o,a.pendingProps),wu(e,a,o,i,s);case 3:e:{if(Nt(a,a.stateNode.containerInfo),e===null)throw Error(u(387));o=a.pendingProps;var r=a.memoizedState;i=r.element,ml(e,a),xo(a,o,null,s);var n=a.memoizedState;if(o=n.cache,st(a,Re,o),o!==r.cache&&rl(a,[Re],s,!0),po(),o=n.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:n.cache},a.updateQueue.baseState=r,a.memoizedState=r,a.flags&256){a=Ou(e,a,o,s);break e}else if(o!==i){i=pa(Error(u(424)),a),lo(i),a=Ou(e,a,o,s);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ae=Aa(e.firstChild),Je=a,oe=!0,Bt=null,Oa=!0,s=cu(a,null,o,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ro(),o===i){a=Ya(e,a,s);break e}Qe(e,a,o,s)}a=a.child}return a;case 26:return Li(e,a),e===null?(s=km(a.type,null,a.pendingProps,null))?a.memoizedState=s:oe||(s=a.type,e=a.pendingProps,o=$i(be.current).createElement(s),o[Ke]=a,o[We]=e,Xe(o,s,e),Ve(o),a.stateNode=o):a.memoizedState=km(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return es(a),e===null&&oe&&(o=a.stateNode=Dm(a.type,a.pendingProps,be.current),Je=a,Oa=!0,i=Ae,vt(a.type)?(An=i,Ae=Aa(o.firstChild)):Ae=i),Qe(e,a,a.pendingProps.children,s),Li(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&oe&&((i=o=Ae)&&(o=$p(o,a.type,a.pendingProps,Oa),o!==null?(a.stateNode=o,Je=a,Ae=Aa(o.firstChild),Oa=!1,i=!0):i=!1),i||Ht(a)),es(a),i=a.type,r=a.pendingProps,n=e!==null?e.memoizedProps:null,o=r.children,jn(i,r)?o=null:n!==null&&jn(i,n)&&(a.flags|=32),a.memoizedState!==null&&(i=vl(e,a,xp,null,null,s),Go._currentValue=i),Li(e,a),Qe(e,a,o,s),a.child;case 6:return e===null&&oe&&((e=s=Ae)&&(s=Wp(s,a.pendingProps,Oa),s!==null?(a.stateNode=s,Je=a,Ae=null,e=!0):e=!1),e||Ht(a)),null;case 13:return zu(e,a,s);case 4:return Nt(a,a.stateNode.containerInfo),o=a.pendingProps,e===null?a.child=ws(a,null,o,s):Qe(e,a,o,s),a.child;case 11:return ju(e,a,a.type,a.pendingProps,s);case 7:return Qe(e,a,a.pendingProps,s),a.child;case 8:return Qe(e,a,a.pendingProps.children,s),a.child;case 12:return Qe(e,a,a.pendingProps.children,s),a.child;case 10:return o=a.pendingProps,st(a,a.type,o.value),Qe(e,a,o.children,s),a.child;case 9:return i=a.type._context,o=a.pendingProps.children,Ft(a),i=Pe(i),o=o(i),a.flags|=1,Qe(e,a,o,s),a.child;case 14:return yu(e,a,a.type,a.pendingProps,s);case 15:return Su(e,a,a.type,a.pendingProps,s);case 19:return Nu(e,a,s);case 31:return o=a.pendingProps,s=a.mode,o={mode:o.mode,children:o.children},e===null?(s=Gi(o,s),s.ref=a.ref,a.child=s,s.return=a,a=s):(s=Ga(e.child,o),s.ref=a.ref,a.child=s,s.return=a,a=s),a;case 22:return qu(e,a,s);case 24:return Ft(a),o=Pe(Re),e===null?(i=cl(),i===null&&(i=xe,r=ll(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=s),i=r),a.memoizedState={parent:o,cache:i},ul(a),st(a,Re,i)):((e.lanes&s)!==0&&(ml(e,a),xo(a,null,null,s),po()),i=e.memoizedState,r=a.memoizedState,i.parent!==o?(i={parent:o,cache:o},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),st(a,Re,o)):(o=r.cache,st(a,Re,o),o!==i.cache&&rl(a,[Re],s,!0))),Qe(e,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function Xa(e){e.flags|=4}function Du(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bm(a)){if(a=ba.current,a!==null&&((ee&4194048)===ee?za!==null:(ee&62914560)!==ee&&(ee&536870912)===0||a!==za))throw ho=dl,pd;e.flags|=8192}}function Vi(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?dc():536870912,e.lanes|=a,Ns|=a)}function qo(e,a){if(!oe)switch(e.tailMode){case"hidden":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Se(e){var a=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(a)for(var i=e.child;i!==null;)s|=i.lanes|i.childLanes,o|=i.subtreeFlags&65011712,o|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)s|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=s,a}function Ep(e,a,s){var o=a.pendingProps;switch(tl(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(a),null;case 1:return Se(a),null;case 3:return s=a.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),_a(Re),ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(io(a)?Xa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,dd())),Se(a),null;case 26:return s=a.memoizedState,e===null?(Xa(a),s!==null?(Se(a),Du(a,s)):(Se(a),a.flags&=-16777217)):s?s!==e.memoizedState?(Xa(a),Se(a),Du(a,s)):(Se(a),a.flags&=-16777217):(e.memoizedProps!==o&&Xa(a),Se(a),a.flags&=-16777217),null;case 27:ka(a),s=be.current;var i=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==o&&Xa(a);else{if(!o){if(a.stateNode===null)throw Error(u(166));return Se(a),null}e=qe.current,io(a)?nd(a):(e=Dm(i,o,s),a.stateNode=e,Xa(a))}return Se(a),null;case 5:if(ka(a),s=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==o&&Xa(a);else{if(!o){if(a.stateNode===null)throw Error(u(166));return Se(a),null}if(e=qe.current,io(a))nd(a);else{switch(i=$i(be.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?i.createElement("select",{is:o.is}):i.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?i.createElement(s,{is:o.is}):i.createElement(s)}}e[Ke]=a,e[We]=o;e:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=e;e:switch(Xe(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xa(a)}}return Se(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==o&&Xa(a);else{if(typeof o!="string"&&a.stateNode===null)throw Error(u(166));if(e=be.current,io(a)){if(e=a.stateNode,s=a.memoizedProps,o=null,i=Je,i!==null)switch(i.tag){case 27:case 5:o=i.memoizedProps}e[Ke]=a,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Em(e.nodeValue,s)),e||Ht(a)}else e=$i(e).createTextNode(o),e[Ke]=a,a.stateNode=e}return Se(a),null;case 13:if(o=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=io(a),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ke]=a}else ro(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Se(a),i=!1}else i=dd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Qa(a),a):(Qa(a),null)}if(Qa(a),(a.flags&128)!==0)return a.lanes=s,a;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=a.child,i=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(i=o.alternate.memoizedState.cachePool.pool);var r=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(r=o.memoizedState.cachePool.pool),r!==i&&(o.flags|=2048)}return s!==e&&s&&(a.child.flags|=8192),Vi(a,a.updateQueue),Se(a),null;case 4:return ge(),e===null&&pn(a.stateNode.containerInfo),Se(a),null;case 10:return _a(a.type),Se(a),null;case 19:if(fe(ke),i=a.memoizedState,i===null)return Se(a),null;if(o=(a.flags&128)!==0,r=i.rendering,r===null)if(o)qo(i,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(r=Ri(e),r!==null){for(a.flags|=128,qo(i,!1),e=r.updateQueue,a.updateQueue=e,Vi(a,e),a.subtreeFlags=0,e=s,s=a.child;s!==null;)rd(s,e),s=s.sibling;return se(ke,ke.current&1|2),a.child}e=e.sibling}i.tail!==null&&wa()>_i&&(a.flags|=128,o=!0,qo(i,!1),a.lanes=4194304)}else{if(!o)if(e=Ri(r),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,Vi(a,e),qo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!oe)return Se(a),null}else 2*wa()-i.renderingStartTime>_i&&s!==536870912&&(a.flags|=128,o=!0,qo(i,!1),a.lanes=4194304);i.isBackwards?(r.sibling=a.child,a.child=r):(e=i.last,e!==null?e.sibling=r:a.child=r,i.last=r)}return i.tail!==null?(a=i.tail,i.rendering=a,i.tail=a.sibling,i.renderingStartTime=wa(),a.sibling=null,e=ke.current,se(ke,o?e&1|2:e&1),a):(Se(a),null);case 22:case 23:return Qa(a),xl(),o=a.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(a.flags|=8192):o&&(a.flags|=8192),o?(s&536870912)!==0&&(a.flags&128)===0&&(Se(a),a.subtreeFlags&6&&(a.flags|=8192)):Se(a),s=a.updateQueue,s!==null&&Vi(a,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(o=a.memoizedState.cachePool.pool),o!==s&&(a.flags|=2048),e!==null&&fe(Qt),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),_a(Re),Se(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function wp(e,a){switch(tl(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return _a(Re),ge(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return ka(a),null;case 13:if(Qa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));ro()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return fe(ke),null;case 4:return ge(),null;case 10:return _a(a.type),null;case 22:case 23:return Qa(a),xl(),e!==null&&fe(Qt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return _a(Re),null;case 25:return null;default:return null}}function Cu(e,a){switch(tl(a),a.tag){case 3:_a(Re),ge();break;case 26:case 27:case 5:ka(a);break;case 4:ge();break;case 13:Qa(a);break;case 19:fe(ke);break;case 10:_a(a.type);break;case 22:case 23:Qa(a),xl(),e!==null&&fe(Qt);break;case 24:_a(Re)}}function Ao(e,a){try{var s=a.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var i=o.next;s=i;do{if((s.tag&e)===e){o=void 0;var r=s.create,n=s.inst;o=r(),n.destroy=o}s=s.next}while(s!==i)}}catch(d){he(a,a.return,d)}}function dt(e,a,s){try{var o=a.updateQueue,i=o!==null?o.lastEffect:null;if(i!==null){var r=i.next;o=r;do{if((o.tag&e)===e){var n=o.inst,d=n.destroy;if(d!==void 0){n.destroy=void 0,i=a;var h=s,v=d;try{v()}catch(A){he(i,h,A)}}}o=o.next}while(o!==r)}}catch(A){he(a,a.return,A)}}function Ru(e){var a=e.updateQueue;if(a!==null){var s=e.stateNode;try{yd(a,s)}catch(o){he(e,e.return,o)}}}function ku(e,a,s){s.props=Xt(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){he(e,a,o)}}function Eo(e,a){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(i){he(e,a,i)}}function Ma(e,a){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(i){he(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(i){he(e,a,i)}else s.current=null}function Uu(e){var a=e.type,s=e.memoizedProps,o=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(i){he(e,e.return,i)}}function Ql(e,a,s){try{var o=e.stateNode;Zp(o,e.type,s,a),o[We]=a}catch(i){he(e,e.return,i)}}function Lu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vt(e.type)||e.tag===4}function Yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,a,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(e),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=Ji));else if(o!==4&&(o===27&&vt(e.type)&&(s=e.stateNode,a=null),e=e.child,e!==null))for(Xl(e,a,s),e=e.sibling;e!==null;)Xl(e,a,s),e=e.sibling}function Bi(e,a,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,a?s.insertBefore(e,a):s.appendChild(e);else if(o!==4&&(o===27&&vt(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Bi(e,a,s),e=e.sibling;e!==null;)Bi(e,a,s),e=e.sibling}function Gu(e){var a=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Xe(a,o,s),a[Ke]=e,a[We]=s}catch(r){he(e,e.return,r)}}var Za=!1,ze=!1,Zl=!1,Vu=typeof WeakSet=="function"?WeakSet:Set,He=null;function Op(e,a){if(e=e.containerInfo,vn=or,e=Ic(e),Yr(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var i=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{s.nodeType,r.nodeType}catch{s=null;break e}var n=0,d=-1,h=-1,v=0,A=0,O=e,j=null;a:for(;;){for(var y;O!==s||i!==0&&O.nodeType!==3||(d=n+i),O!==r||o!==0&&O.nodeType!==3||(h=n+o),O.nodeType===3&&(n+=O.nodeValue.length),(y=O.firstChild)!==null;)j=O,O=y;for(;;){if(O===e)break a;if(j===s&&++v===i&&(d=n),j===r&&++A===o&&(h=n),(y=O.nextSibling)!==null)break;O=j,j=O.parentNode}O=y}s=d===-1||h===-1?null:{start:d,end:h}}else s=null}s=s||{start:0,end:0}}else s=null;for(bn={focusedElem:e,selectionRange:s},or=!1,He=a;He!==null;)if(a=He,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,He=e;else for(;He!==null;){switch(a=He,r=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,s=a,i=r.memoizedProps,r=r.memoizedState,o=s.stateNode;try{var _=Xt(s.type,i,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(_,r),o.__reactInternalSnapshotBeforeUpdate=e}catch(V){he(s,s.return,V)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,s=e.nodeType,s===9)Sn(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sn(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=a.sibling,e!==null){e.return=a.return,He=e;break}He=a.return}}function Bu(e,a,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ut(e,s),o&4&&Ao(5,s);break;case 1:if(ut(e,s),o&4)if(e=s.stateNode,a===null)try{e.componentDidMount()}catch(n){he(s,s.return,n)}else{var i=Xt(s.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(n){he(s,s.return,n)}}o&64&&Ru(s),o&512&&Eo(s,s.return);break;case 3:if(ut(e,s),o&64&&(e=s.updateQueue,e!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{yd(e,a)}catch(n){he(s,s.return,n)}}break;case 27:a===null&&o&4&&Gu(s);case 26:case 5:ut(e,s),a===null&&o&4&&Uu(s),o&512&&Eo(s,s.return);break;case 12:ut(e,s);break;case 13:ut(e,s),o&4&&Fu(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Up.bind(null,s),ex(e,s))));break;case 22:if(o=s.memoizedState!==null||Za,!o){a=a!==null&&a.memoizedState!==null||ze,i=Za;var r=ze;Za=o,(ze=a)&&!r?mt(e,s,(s.subtreeFlags&8772)!==0):ut(e,s),Za=i,ze=r}break;case 30:break;default:ut(e,s)}}function Hu(e){var a=e.alternate;a!==null&&(e.alternate=null,Hu(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&wr(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,ta=!1;function Ka(e,a,s){for(s=s.child;s!==null;)_u(e,a,s),s=s.sibling}function _u(e,a,s){if(oa&&typeof oa.onCommitFiberUnmount=="function")try{oa.onCommitFiberUnmount(Ys,s)}catch{}switch(s.tag){case 26:ze||Ma(s,a),Ka(e,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ze||Ma(s,a);var o=je,i=ta;vt(s.type)&&(je=s.stateNode,ta=!1),Ka(e,a,s),Ro(s.stateNode),je=o,ta=i;break;case 5:ze||Ma(s,a);case 6:if(o=je,i=ta,je=null,Ka(e,a,s),je=o,ta=i,je!==null)if(ta)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(s.stateNode)}catch(r){he(s,a,r)}else try{je.removeChild(s.stateNode)}catch(r){he(s,a,r)}break;case 18:je!==null&&(ta?(e=je,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),_o(e)):Nm(je,s.stateNode));break;case 4:o=je,i=ta,je=s.stateNode.containerInfo,ta=!0,Ka(e,a,s),je=o,ta=i;break;case 0:case 11:case 14:case 15:ze||dt(2,s,a),ze||dt(4,s,a),Ka(e,a,s);break;case 1:ze||(Ma(s,a),o=s.stateNode,typeof o.componentWillUnmount=="function"&&ku(s,a,o)),Ka(e,a,s);break;case 21:Ka(e,a,s);break;case 22:ze=(o=ze)||s.memoizedState!==null,Ka(e,a,s),ze=o;break;default:Ka(e,a,s)}}function Fu(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(s){he(a,a.return,s)}}function zp(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Vu),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Vu),a;default:throw Error(u(435,e.tag))}}function Kl(e,a){var s=zp(e);a.forEach(function(o){var i=Lp.bind(null,e,o);s.has(o)||(s.add(o),o.then(i,i))})}function na(e,a){var s=a.deletions;if(s!==null)for(var o=0;o<s.length;o++){var i=s[o],r=e,n=a,d=n;e:for(;d!==null;){switch(d.tag){case 27:if(vt(d.type)){je=d.stateNode,ta=!1;break e}break;case 5:je=d.stateNode,ta=!1;break e;case 3:case 4:je=d.stateNode.containerInfo,ta=!0;break e}d=d.return}if(je===null)throw Error(u(160));_u(r,n,i),je=null,ta=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Qu(a,e),a=a.sibling}var qa=null;function Qu(e,a){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:na(a,e),ca(e),o&4&&(dt(3,e,e.return),Ao(3,e),dt(5,e,e.return));break;case 1:na(a,e),ca(e),o&512&&(ze||s===null||Ma(s,s.return)),o&64&&Za&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var i=qa;if(na(a,e),ca(e),o&512&&(ze||s===null||Ma(s,s.return)),o&4){var r=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){e:{o=e.type,s=e.memoizedProps,i=i.ownerDocument||i;a:switch(o){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Ks]||r[Ke]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(o),i.head.insertBefore(r,i.querySelector("head > title"))),Xe(r,o,s),r[Ke]=e,Ve(r),o=r;break e;case"link":var n=Gm("link","href",i).get(o+(s.href||""));if(n){for(var d=0;d<n.length;d++)if(r=n[d],r.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&r.getAttribute("rel")===(s.rel==null?null:s.rel)&&r.getAttribute("title")===(s.title==null?null:s.title)&&r.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){n.splice(d,1);break a}}r=i.createElement(o),Xe(r,o,s),i.head.appendChild(r);break;case"meta":if(n=Gm("meta","content",i).get(o+(s.content||""))){for(d=0;d<n.length;d++)if(r=n[d],r.getAttribute("content")===(s.content==null?null:""+s.content)&&r.getAttribute("name")===(s.name==null?null:s.name)&&r.getAttribute("property")===(s.property==null?null:s.property)&&r.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&r.getAttribute("charset")===(s.charSet==null?null:s.charSet)){n.splice(d,1);break a}}r=i.createElement(o),Xe(r,o,s),i.head.appendChild(r);break;default:throw Error(u(468,o))}r[Ke]=e,Ve(r),o=r}e.stateNode=o}else Vm(i,e.type,e.stateNode);else e.stateNode=Lm(i,o,e.memoizedProps);else r!==o?(r===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):r.count--,o===null?Vm(i,e.type,e.stateNode):Lm(i,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ql(e,e.memoizedProps,s.memoizedProps)}break;case 27:na(a,e),ca(e),o&512&&(ze||s===null||Ma(s,s.return)),s!==null&&o&4&&Ql(e,e.memoizedProps,s.memoizedProps);break;case 5:if(na(a,e),ca(e),o&512&&(ze||s===null||Ma(s,s.return)),e.flags&32){i=e.stateNode;try{ns(i,"")}catch(y){he(e,e.return,y)}}o&4&&e.stateNode!=null&&(i=e.memoizedProps,Ql(e,i,s!==null?s.memoizedProps:i)),o&1024&&(Zl=!0);break;case 6:if(na(a,e),ca(e),o&4){if(e.stateNode===null)throw Error(u(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(y){he(e,e.return,y)}}break;case 3:if(ar=null,i=qa,qa=Wi(a.containerInfo),na(a,e),qa=i,ca(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{_o(a.containerInfo)}catch(y){he(e,e.return,y)}Zl&&(Zl=!1,Yu(e));break;case 4:o=qa,qa=Wi(e.stateNode.containerInfo),na(a,e),ca(e),qa=o;break;case 12:na(a,e),ca(e);break;case 13:na(a,e),ca(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(en=wa()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 22:i=e.memoizedState!==null;var h=s!==null&&s.memoizedState!==null,v=Za,A=ze;if(Za=v||i,ze=A||h,na(a,e),ze=A,Za=v,ca(e),o&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(s===null||h||Za||ze||Zt(e)),s=null,a=e;;){if(a.tag===5||a.tag===26){if(s===null){h=s=a;try{if(r=h.stateNode,i)n=r.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{d=h.stateNode;var O=h.memoizedProps.style,j=O!=null&&O.hasOwnProperty("display")?O.display:null;d.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(y){he(h,h.return,y)}}}else if(a.tag===6){if(s===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){he(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Kl(e,s))));break;case 19:na(a,e),ca(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 30:break;case 21:break;default:na(a,e),ca(e)}}function ca(e){var a=e.flags;if(a&2){try{for(var s,o=e.return;o!==null;){if(Lu(o)){s=o;break}o=o.return}if(s==null)throw Error(u(160));switch(s.tag){case 27:var i=s.stateNode,r=Yl(e);Bi(e,r,i);break;case 5:var n=s.stateNode;s.flags&32&&(ns(n,""),s.flags&=-33);var d=Yl(e);Bi(e,d,n);break;case 3:case 4:var h=s.stateNode.containerInfo,v=Yl(e);Xl(e,v,h);break;default:throw Error(u(161))}}catch(A){he(e,e.return,A)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Yu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Yu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function ut(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Bu(e,a.alternate,a),a=a.sibling}function Zt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:dt(4,a,a.return),Zt(a);break;case 1:Ma(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&ku(a,a.return,s),Zt(a);break;case 27:Ro(a.stateNode);case 26:case 5:Ma(a,a.return),Zt(a);break;case 22:a.memoizedState===null&&Zt(a);break;case 30:Zt(a);break;default:Zt(a)}e=e.sibling}}function mt(e,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var o=a.alternate,i=e,r=a,n=r.flags;switch(r.tag){case 0:case 11:case 15:mt(i,r,s),Ao(4,r);break;case 1:if(mt(i,r,s),o=r,i=o.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(v){he(o,o.return,v)}if(o=r,i=o.updateQueue,i!==null){var d=o.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)jd(h[i],d)}catch(v){he(o,o.return,v)}}s&&n&64&&Ru(r),Eo(r,r.return);break;case 27:Gu(r);case 26:case 5:mt(i,r,s),s&&o===null&&n&4&&Uu(r),Eo(r,r.return);break;case 12:mt(i,r,s);break;case 13:mt(i,r,s),s&&n&4&&Fu(i,r);break;case 22:r.memoizedState===null&&mt(i,r,s),Eo(r,r.return);break;case 30:break;default:mt(i,r,s)}a=a.sibling}}function Pl(e,a){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&co(s))}function Il(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&co(e))}function Na(e,a,s,o){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Xu(e,a,s,o),a=a.sibling}function Xu(e,a,s,o){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Na(e,a,s,o),i&2048&&Ao(9,a);break;case 1:Na(e,a,s,o);break;case 3:Na(e,a,s,o),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&co(e)));break;case 12:if(i&2048){Na(e,a,s,o),e=a.stateNode;try{var r=a.memoizedProps,n=r.id,d=r.onPostCommit;typeof d=="function"&&d(n,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){he(a,a.return,h)}}else Na(e,a,s,o);break;case 13:Na(e,a,s,o);break;case 23:break;case 22:r=a.stateNode,n=a.alternate,a.memoizedState!==null?r._visibility&2?Na(e,a,s,o):wo(e,a):r._visibility&2?Na(e,a,s,o):(r._visibility|=2,Os(e,a,s,o,(a.subtreeFlags&10256)!==0)),i&2048&&Pl(n,a);break;case 24:Na(e,a,s,o),i&2048&&Il(a.alternate,a);break;default:Na(e,a,s,o)}}function Os(e,a,s,o,i){for(i=i&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var r=e,n=a,d=s,h=o,v=n.flags;switch(n.tag){case 0:case 11:case 15:Os(r,n,d,h,i),Ao(8,n);break;case 23:break;case 22:var A=n.stateNode;n.memoizedState!==null?A._visibility&2?Os(r,n,d,h,i):wo(r,n):(A._visibility|=2,Os(r,n,d,h,i)),i&&v&2048&&Pl(n.alternate,n);break;case 24:Os(r,n,d,h,i),i&&v&2048&&Il(n.alternate,n);break;default:Os(r,n,d,h,i)}a=a.sibling}}function wo(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=e,o=a,i=o.flags;switch(o.tag){case 22:wo(s,o),i&2048&&Pl(o.alternate,o);break;case 24:wo(s,o),i&2048&&Il(o.alternate,o);break;default:wo(s,o)}a=a.sibling}}var Oo=8192;function zs(e){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 26:zs(e),e.flags&Oo&&e.memoizedState!==null&&hx(qa,e.memoizedState,e.memoizedProps);break;case 5:zs(e);break;case 3:case 4:var a=qa;qa=Wi(e.stateNode.containerInfo),zs(e),qa=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Oo,Oo=16777216,zs(e),Oo=a):zs(e));break;default:zs(e)}}function Ku(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function zo(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var o=a[s];He=o,Iu(o,e)}Ku(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pu(e),e=e.sibling}function Pu(e){switch(e.tag){case 0:case 11:case 15:zo(e),e.flags&2048&&dt(9,e,e.return);break;case 3:zo(e);break;case 12:zo(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Hi(e)):zo(e);break;default:zo(e)}}function Hi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var o=a[s];He=o,Iu(o,e)}Ku(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:dt(8,a,a.return),Hi(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,Hi(a));break;default:Hi(a)}e=e.sibling}}function Iu(e,a){for(;He!==null;){var s=He;switch(s.tag){case 0:case 11:case 15:dt(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,He=o;else e:for(s=e;He!==null;){o=He;var i=o.sibling,r=o.return;if(Hu(o),o===s){He=null;break e}if(i!==null){i.return=r,He=i;break e}He=r}}}var Mp={getCacheForType:function(e){var a=Pe(Re),s=a.data.get(e);return s===void 0&&(s=e(),a.data.set(e,s)),s}},Np=typeof WeakMap=="function"?WeakMap:Map,ne=0,xe=null,J=null,ee=0,ce=0,da=null,ht=!1,Ms=!1,Jl=!1,Pa=0,Ee=0,ft=0,Kt=0,$l=0,ja=0,Ns=0,Mo=null,sa=null,Wl=!1,en=0,_i=1/0,Fi=null,pt=null,Ye=0,xt=null,Ts=null,Ds=0,an=0,tn=null,Ju=null,No=0,sn=null;function ua(){if((ne&2)!==0&&ee!==0)return ee&-ee;if(q.T!==null){var e=bs;return e!==0?e:un()}return hc()}function $u(){ja===0&&(ja=(ee&536870912)===0||oe?cc():536870912);var e=ba.current;return e!==null&&(e.flags|=32),ja}function ma(e,a,s){(e===xe&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Cs(e,0),gt(e,ee,ja,!1)),Zs(e,s),((ne&2)===0||e!==xe)&&(e===xe&&((ne&2)===0&&(Kt|=s),Ee===4&&gt(e,ee,ja,!1)),Ta(e))}function Wu(e,a,s){if((ne&6)!==0)throw Error(u(327));var o=!s&&(a&124)===0&&(a&e.expiredLanes)===0||Xs(e,a),i=o?Cp(e,a):ln(e,a,!0),r=o;do{if(i===0){Ms&&!o&&gt(e,a,0,!1);break}else{if(s=e.current.alternate,r&&!Tp(s)){i=ln(e,a,!1),r=!1;continue}if(i===2){if(r=a,e.errorRecoveryDisabledLanes&r)var n=0;else n=e.pendingLanes&-536870913,n=n!==0?n:n&536870912?536870912:0;if(n!==0){a=n;e:{var d=e;i=Mo;var h=d.current.memoizedState.isDehydrated;if(h&&(Cs(d,n).flags|=256),n=ln(d,n,!1),n!==2){if(Jl&&!h){d.errorRecoveryDisabledLanes|=r,Kt|=r,i=4;break e}r=sa,sa=i,r!==null&&(sa===null?sa=r:sa.push.apply(sa,r))}i=n}if(r=!1,i!==2)continue}}if(i===1){Cs(e,0),gt(e,a,0,!0);break}e:{switch(o=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:gt(o,a,ja,!ht);break e;case 2:sa=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(i=en+300-wa(),10<i)){if(gt(o,a,ja,!ht),ei(o,0,!0)!==0)break e;o.timeoutHandle=zm(em.bind(null,o,s,sa,Fi,Wl,a,ja,Kt,Ns,ht,r,2,-0,0),i);break e}em(o,s,sa,Fi,Wl,a,ja,Kt,Ns,ht,r,0,-0,0)}}break}while(!0);Ta(e)}function em(e,a,s,o,i,r,n,d,h,v,A,O,j,y){if(e.timeoutHandle=-1,O=a.subtreeFlags,(O&8192||(O&16785408)===16785408)&&(Lo={stylesheets:null,count:0,unsuspend:mx},Zu(a),O=fx(),O!==null)){e.cancelPendingCommit=O(lm.bind(null,e,a,r,s,o,i,n,d,h,A,1,j,y)),gt(e,r,n,!v);return}lm(e,a,r,s,o,i,n,d,h)}function Tp(e){for(var a=e;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var i=s[o],r=i.getSnapshot;i=i.value;try{if(!ra(r(),i))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function gt(e,a,s,o){a&=~$l,a&=~Kt,e.suspendedLanes|=a,e.pingedLanes&=~a,o&&(e.warmLanes|=a),o=e.expirationTimes;for(var i=a;0<i;){var r=31-ia(i),n=1<<r;o[r]=-1,i&=~n}s!==0&&uc(e,s,a)}function Qi(){return(ne&6)===0?(To(0),!1):!0}function on(){if(J!==null){if(ce===0)var e=J.return;else e=J,Ha=_t=null,yl(e),Es=null,yo=0,e=J;for(;e!==null;)Cu(e.alternate,e),e=e.return;J=null}}function Cs(e,a){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Pp(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),on(),xe=e,J=s=Ga(e.current,null),ee=a,ce=0,da=null,ht=!1,Ms=Xs(e,a),Jl=!1,Ns=ja=$l=Kt=ft=Ee=0,sa=Mo=null,Wl=!1,(a&8)!==0&&(a|=a&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=a;0<o;){var i=31-ia(o),r=1<<i;a|=e[i],o&=~r}return Pa=a,mi(),s}function am(e,a){Z=null,q.H=Ti,a===mo||a===yi?(a=vd(),ce=3):a===pd?(a=vd(),ce=4):ce=a===bu?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,da=a,J===null&&(Ee=1,Ui(e,pa(a,e.current)))}function tm(){var e=q.H;return q.H=Ti,e===null?Ti:e}function sm(){var e=q.A;return q.A=Mp,e}function rn(){Ee=4,ht||(ee&4194048)!==ee&&ba.current!==null||(Ms=!0),(ft&134217727)===0&&(Kt&134217727)===0||xe===null||gt(xe,ee,ja,!1)}function ln(e,a,s){var o=ne;ne|=2;var i=tm(),r=sm();(xe!==e||ee!==a)&&(Fi=null,Cs(e,a)),a=!1;var n=Ee;e:do try{if(ce!==0&&J!==null){var d=J,h=da;switch(ce){case 8:on(),n=6;break e;case 3:case 2:case 9:case 6:ba.current===null&&(a=!0);var v=ce;if(ce=0,da=null,Rs(e,d,h,v),s&&Ms){n=0;break e}break;default:v=ce,ce=0,da=null,Rs(e,d,h,v)}}Dp(),n=Ee;break}catch(A){am(e,A)}while(!0);return a&&e.shellSuspendCounter++,Ha=_t=null,ne=o,q.H=i,q.A=r,J===null&&(xe=null,ee=0,mi()),n}function Dp(){for(;J!==null;)om(J)}function Cp(e,a){var s=ne;ne|=2;var o=tm(),i=sm();xe!==e||ee!==a?(Fi=null,_i=wa()+500,Cs(e,a)):Ms=Xs(e,a);e:do try{if(ce!==0&&J!==null){a=J;var r=da;a:switch(ce){case 1:ce=0,da=null,Rs(e,a,r,1);break;case 2:case 9:if(xd(r)){ce=0,da=null,im(a);break}a=function(){ce!==2&&ce!==9||xe!==e||(ce=7),Ta(e)},r.then(a,a);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:xd(r)?(ce=0,da=null,im(a)):(ce=0,da=null,Rs(e,a,r,7));break;case 5:var n=null;switch(J.tag){case 26:n=J.memoizedState;case 5:case 27:var d=J;if(!n||Bm(n)){ce=0,da=null;var h=d.sibling;if(h!==null)J=h;else{var v=d.return;v!==null?(J=v,Yi(v)):J=null}break a}}ce=0,da=null,Rs(e,a,r,5);break;case 6:ce=0,da=null,Rs(e,a,r,6);break;case 8:on(),Ee=6;break e;default:throw Error(u(462))}}Rp();break}catch(A){am(e,A)}while(!0);return Ha=_t=null,q.H=o,q.A=i,ne=s,J!==null?0:(xe=null,ee=0,mi(),Ee)}function Rp(){for(;J!==null&&!af();)om(J)}function om(e){var a=Tu(e.alternate,e,Pa);e.memoizedProps=e.pendingProps,a===null?Yi(e):J=a}function im(e){var a=e,s=a.alternate;switch(a.tag){case 15:case 0:a=Eu(s,a,a.pendingProps,a.type,void 0,ee);break;case 11:a=Eu(s,a,a.pendingProps,a.type.render,a.ref,ee);break;case 5:yl(a);default:Cu(s,a),a=J=rd(a,Pa),a=Tu(s,a,Pa)}e.memoizedProps=e.pendingProps,a===null?Yi(e):J=a}function Rs(e,a,s,o){Ha=_t=null,yl(a),Es=null,yo=0;var i=a.return;try{if(qp(e,i,a,s,ee)){Ee=1,Ui(e,pa(s,e.current)),J=null;return}}catch(r){if(i!==null)throw J=i,r;Ee=1,Ui(e,pa(s,e.current)),J=null;return}a.flags&32768?(oe||o===1?e=!0:Ms||(ee&536870912)!==0?e=!1:(ht=e=!0,(o===2||o===9||o===3||o===6)&&(o=ba.current,o!==null&&o.tag===13&&(o.flags|=16384))),rm(a,e)):Yi(a)}function Yi(e){var a=e;do{if((a.flags&32768)!==0){rm(a,ht);return}e=a.return;var s=Ep(a.alternate,a,Pa);if(s!==null){J=s;return}if(a=a.sibling,a!==null){J=a;return}J=a=e}while(a!==null);Ee===0&&(Ee=5)}function rm(e,a){do{var s=wp(e.alternate,e);if(s!==null){s.flags&=32767,J=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(e=e.sibling,e!==null)){J=e;return}J=e=s}while(e!==null);Ee=6,J=null}function lm(e,a,s,o,i,r,n,d,h){e.cancelPendingCommit=null;do Xi();while(Ye!==0);if((ne&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));if(r=a.lanes|a.childLanes,r|=Ir,mf(e,s,r,n,d,h),e===xe&&(J=xe=null,ee=0),Ts=a,xt=e,Ds=s,an=r,tn=i,Ju=o,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gp(Jo,function(){return mm(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||o){o=q.T,q.T=null,i=N.p,N.p=2,n=ne,ne|=4;try{Op(e,a,s)}finally{ne=n,N.p=i,q.T=o}}Ye=1,nm(),cm(),dm()}}function nm(){if(Ye===1){Ye=0;var e=xt,a=Ts,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=q.T,q.T=null;var o=N.p;N.p=2;var i=ne;ne|=4;try{Qu(a,e);var r=bn,n=Ic(e.containerInfo),d=r.focusedElem,h=r.selectionRange;if(n!==d&&d&&d.ownerDocument&&Pc(d.ownerDocument.documentElement,d)){if(h!==null&&Yr(d)){var v=h.start,A=h.end;if(A===void 0&&(A=v),"selectionStart"in d)d.selectionStart=v,d.selectionEnd=Math.min(A,d.value.length);else{var O=d.ownerDocument||document,j=O&&O.defaultView||window;if(j.getSelection){var y=j.getSelection(),_=d.textContent.length,V=Math.min(h.start,_),me=h.end===void 0?V:Math.min(h.end,_);!y.extend&&V>me&&(n=me,me=V,V=n);var x=Kc(d,V),p=Kc(d,me);if(x&&p&&(y.rangeCount!==1||y.anchorNode!==x.node||y.anchorOffset!==x.offset||y.focusNode!==p.node||y.focusOffset!==p.offset)){var g=O.createRange();g.setStart(x.node,x.offset),y.removeAllRanges(),V>me?(y.addRange(g),y.extend(p.node,p.offset)):(g.setEnd(p.node,p.offset),y.addRange(g))}}}}for(O=[],y=d;y=y.parentNode;)y.nodeType===1&&O.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<O.length;d++){var E=O[d];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}or=!!vn,bn=vn=null}finally{ne=i,N.p=o,q.T=s}}e.current=a,Ye=2}}function cm(){if(Ye===2){Ye=0;var e=xt,a=Ts,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=q.T,q.T=null;var o=N.p;N.p=2;var i=ne;ne|=4;try{Bu(e,a.alternate,a)}finally{ne=i,N.p=o,q.T=s}}Ye=3}}function dm(){if(Ye===4||Ye===3){Ye=0,tf();var e=xt,a=Ts,s=Ds,o=Ju;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ye=5:(Ye=0,Ts=xt=null,um(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(pt=null),Ar(s),a=a.stateNode,oa&&typeof oa.onCommitFiberRoot=="function")try{oa.onCommitFiberRoot(Ys,a,void 0,(a.current.flags&128)===128)}catch{}if(o!==null){a=q.T,i=N.p,N.p=2,q.T=null;try{for(var r=e.onRecoverableError,n=0;n<o.length;n++){var d=o[n];r(d.value,{componentStack:d.stack})}}finally{q.T=a,N.p=i}}(Ds&3)!==0&&Xi(),Ta(e),i=e.pendingLanes,(s&4194090)!==0&&(i&42)!==0?e===sn?No++:(No=0,sn=e):No=0,To(0)}}function um(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,co(a)))}function Xi(e){return nm(),cm(),dm(),mm()}function mm(){if(Ye!==5)return!1;var e=xt,a=an;an=0;var s=Ar(Ds),o=q.T,i=N.p;try{N.p=32>s?32:s,q.T=null,s=tn,tn=null;var r=xt,n=Ds;if(Ye=0,Ts=xt=null,Ds=0,(ne&6)!==0)throw Error(u(331));var d=ne;if(ne|=4,Pu(r.current),Xu(r,r.current,n,s),ne=d,To(0,!1),oa&&typeof oa.onPostCommitFiberRoot=="function")try{oa.onPostCommitFiberRoot(Ys,r)}catch{}return!0}finally{N.p=i,q.T=o,um(e,a)}}function hm(e,a,s){a=pa(s,a),a=kl(e.stateNode,a,2),e=rt(e,a,2),e!==null&&(Zs(e,2),Ta(e))}function he(e,a,s){if(e.tag===3)hm(e,e,s);else for(;a!==null;){if(a.tag===3){hm(a,e,s);break}else if(a.tag===1){var o=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(pt===null||!pt.has(o))){e=pa(s,e),s=gu(2),o=rt(a,s,2),o!==null&&(vu(s,o,a,e),Zs(o,2),Ta(o));break}}a=a.return}}function nn(e,a,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Np;var i=new Set;o.set(a,i)}else i=o.get(a),i===void 0&&(i=new Set,o.set(a,i));i.has(s)||(Jl=!0,i.add(s),e=kp.bind(null,e,a,s),a.then(e,e))}function kp(e,a,s){var o=e.pingCache;o!==null&&o.delete(a),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,xe===e&&(ee&s)===s&&(Ee===4||Ee===3&&(ee&62914560)===ee&&300>wa()-en?(ne&2)===0&&Cs(e,0):$l|=s,Ns===ee&&(Ns=0)),Ta(e)}function fm(e,a){a===0&&(a=dc()),e=ps(e,a),e!==null&&(Zs(e,a),Ta(e))}function Up(e){var a=e.memoizedState,s=0;a!==null&&(s=a.retryLane),fm(e,s)}function Lp(e,a){var s=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(s=i.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(u(314))}o!==null&&o.delete(a),fm(e,s)}function Gp(e,a){return Tt(e,a)}var Zi=null,ks=null,cn=!1,Ki=!1,dn=!1,Pt=0;function Ta(e){e!==ks&&e.next===null&&(ks===null?Zi=ks=e:ks=ks.next=e),Ki=!0,cn||(cn=!0,Bp())}function To(e,a){if(!dn&&Ki){dn=!0;do for(var s=!1,o=Zi;o!==null;){if(e!==0){var i=o.pendingLanes;if(i===0)var r=0;else{var n=o.suspendedLanes,d=o.pingedLanes;r=(1<<31-ia(42|e)+1)-1,r&=i&~(n&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(s=!0,vm(o,r))}else r=ee,r=ei(o,o===xe?r:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(r&3)===0||Xs(o,r)||(s=!0,vm(o,r));o=o.next}while(s);dn=!1}}function Vp(){pm()}function pm(){Ki=cn=!1;var e=0;Pt!==0&&(Kp()&&(e=Pt),Pt=0);for(var a=wa(),s=null,o=Zi;o!==null;){var i=o.next,r=xm(o,a);r===0?(o.next=null,s===null?Zi=i:s.next=i,i===null&&(ks=s)):(s=o,(e!==0||(r&3)!==0)&&(Ki=!0)),o=i}To(e)}function xm(e,a){for(var s=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var n=31-ia(r),d=1<<n,h=i[n];h===-1?((d&s)===0||(d&o)!==0)&&(i[n]=uf(d,a)):h<=a&&(e.expiredLanes|=d),r&=~d}if(a=xe,s=ee,s=ei(e,e===a?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===a&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Wa(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Xs(e,s)){if(a=s&-s,a===e.callbackPriority)return a;switch(o!==null&&Wa(o),Ar(s)){case 2:case 8:s=lc;break;case 32:s=Jo;break;case 268435456:s=nc;break;default:s=Jo}return o=gm.bind(null,e),s=Tt(s,o),e.callbackPriority=a,e.callbackNode=s,a}return o!==null&&o!==null&&Wa(o),e.callbackPriority=2,e.callbackNode=null,2}function gm(e,a){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Xi()&&e.callbackNode!==s)return null;var o=ee;return o=ei(e,e===xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Wu(e,o,a),xm(e,wa()),e.callbackNode!=null&&e.callbackNode===s?gm.bind(null,e):null)}function vm(e,a){if(Xi())return null;Wu(e,a,!0)}function Bp(){Ip(function(){(ne&6)!==0?Tt(rc,Vp):pm()})}function un(){return Pt===0&&(Pt=cc()),Pt}function bm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ii(""+e)}function jm(e,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,e.id&&s.setAttribute("form",e.id),a.parentNode.insertBefore(s,a),e=new FormData(e),s.parentNode.removeChild(s),e}function Hp(e,a,s,o,i){if(a==="submit"&&s&&s.stateNode===i){var r=bm((i[We]||null).action),n=o.submitter;n&&(a=(a=n[We]||null)?bm(a.formAction):n.getAttribute("formAction"),a!==null&&(r=a,n=null));var d=new ci("action","action",null,o,i);e.push({event:d,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pt!==0){var h=n?jm(i,n):new FormData(i);Nl(s,{pending:!0,data:h,method:i.method,action:r},null,h)}}else typeof r=="function"&&(d.preventDefault(),h=n?jm(i,n):new FormData(i),Nl(s,{pending:!0,data:h,method:i.method,action:r},r,h))},currentTarget:i}]})}}for(var mn=0;mn<Pr.length;mn++){var hn=Pr[mn],_p=hn.toLowerCase(),Fp=hn[0].toUpperCase()+hn.slice(1);Sa(_p,"on"+Fp)}Sa(Wc,"onAnimationEnd"),Sa(ed,"onAnimationIteration"),Sa(ad,"onAnimationStart"),Sa("dblclick","onDoubleClick"),Sa("focusin","onFocus"),Sa("focusout","onBlur"),Sa(rp,"onTransitionRun"),Sa(lp,"onTransitionStart"),Sa(np,"onTransitionCancel"),Sa(td,"onTransitionEnd"),is("onMouseEnter",["mouseout","mouseover"]),is("onMouseLeave",["mouseout","mouseover"]),is("onPointerEnter",["pointerout","pointerover"]),is("onPointerLeave",["pointerout","pointerover"]),Ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function ym(e,a){a=(a&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],i=o.event;o=o.listeners;e:{var r=void 0;if(a)for(var n=o.length-1;0<=n;n--){var d=o[n],h=d.instance,v=d.currentTarget;if(d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=v;try{r(i)}catch(A){ki(A)}i.currentTarget=null,r=h}else for(n=0;n<o.length;n++){if(d=o[n],h=d.instance,v=d.currentTarget,d=d.listener,h!==r&&i.isPropagationStopped())break e;r=d,i.currentTarget=v;try{r(i)}catch(A){ki(A)}i.currentTarget=null,r=h}}}}function $(e,a){var s=a[Er];s===void 0&&(s=a[Er]=new Set);var o=e+"__bubble";s.has(o)||(Sm(a,e,2,!1),s.add(o))}function fn(e,a,s){var o=0;a&&(o|=4),Sm(s,e,o,a)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function pn(e){if(!e[Pi]){e[Pi]=!0,pc.forEach(function(s){s!=="selectionchange"&&(Qp.has(s)||fn(s,!1,e),fn(s,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Pi]||(a[Pi]=!0,fn("selectionchange",!1,a))}}function Sm(e,a,s,o){switch(Xm(a)){case 2:var i=gx;break;case 8:i=vx;break;default:i=Mn}s=i.bind(null,a,s,e),i=void 0,!Ur||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(a,s,{capture:!0,passive:i}):e.addEventListener(a,s,!0):i!==void 0?e.addEventListener(a,s,{passive:i}):e.addEventListener(a,s,!1)}function xn(e,a,s,o,i){var r=o;if((a&1)===0&&(a&2)===0&&o!==null)e:for(;;){if(o===null)return;var n=o.tag;if(n===3||n===4){var d=o.stateNode.containerInfo;if(d===i)break;if(n===4)for(n=o.return;n!==null;){var h=n.tag;if((h===3||h===4)&&n.stateNode.containerInfo===i)return;n=n.return}for(;d!==null;){if(n=ts(d),n===null)return;if(h=n.tag,h===5||h===6||h===26||h===27){o=r=n;continue e}d=d.parentNode}}o=o.return}Mc(function(){var v=r,A=Rr(s),O=[];e:{var j=sd.get(e);if(j!==void 0){var y=ci,_=e;switch(e){case"keypress":if(li(s)===0)break e;case"keydown":case"keyup":y=Gf;break;case"focusin":_="focus",y=Br;break;case"focusout":_="blur",y=Br;break;case"beforeblur":case"afterblur":y=Br;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=wf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Hf;break;case Wc:case ed:case ad:y=Mf;break;case td:y=Ff;break;case"scroll":case"scrollend":y=Af;break;case"wheel":y=Yf;break;case"copy":case"cut":case"paste":y=Tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Rc;break;case"toggle":case"beforetoggle":y=Zf}var V=(a&4)!==0,me=!V&&(e==="scroll"||e==="scrollend"),x=V?j!==null?j+"Capture":null:j;V=[];for(var p=v,g;p!==null;){var E=p;if(g=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||g===null||x===null||(E=Is(p,x),E!=null&&V.push(Co(p,E,g))),me)break;p=p.return}0<V.length&&(j=new y(j,_,null,s,A),O.push({event:j,listeners:V}))}}if((a&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",j&&s!==Cr&&(_=s.relatedTarget||s.fromElement)&&(ts(_)||_[as]))break e;if((y||j)&&(j=A.window===A?A:(j=A.ownerDocument)?j.defaultView||j.parentWindow:window,y?(_=s.relatedTarget||s.toElement,y=v,_=_?ts(_):null,_!==null&&(me=S(_),V=_.tag,_!==me||V!==5&&V!==27&&V!==6)&&(_=null)):(y=null,_=v),y!==_)){if(V=Dc,E="onMouseLeave",x="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(V=Rc,E="onPointerLeave",x="onPointerEnter",p="pointer"),me=y==null?j:Ps(y),g=_==null?j:Ps(_),j=new V(E,p+"leave",y,s,A),j.target=me,j.relatedTarget=g,E=null,ts(A)===v&&(V=new V(x,p+"enter",_,s,A),V.target=g,V.relatedTarget=me,E=V),me=E,y&&_)a:{for(V=y,x=_,p=0,g=V;g;g=Us(g))p++;for(g=0,E=x;E;E=Us(E))g++;for(;0<p-g;)V=Us(V),p--;for(;0<g-p;)x=Us(x),g--;for(;p--;){if(V===x||x!==null&&V===x.alternate)break a;V=Us(V),x=Us(x)}V=null}else V=null;y!==null&&qm(O,j,y,V,!1),_!==null&&me!==null&&qm(O,me,_,V,!0)}}e:{if(j=v?Ps(v):window,y=j.nodeName&&j.nodeName.toLowerCase(),y==="select"||y==="input"&&j.type==="file")var D=_c;else if(Bc(j))if(Fc)D=sp;else{D=ap;var P=ep}else y=j.nodeName,!y||y.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?v&&Dr(v.elementType)&&(D=_c):D=tp;if(D&&(D=D(e,v))){Hc(O,D,s,A);break e}P&&P(e,j,v),e==="focusout"&&v&&j.type==="number"&&v.memoizedProps.value!=null&&Tr(j,"number",j.value)}switch(P=v?Ps(v):window,e){case"focusin":(Bc(P)||P.contentEditable==="true")&&(ms=P,Xr=v,oo=null);break;case"focusout":oo=Xr=ms=null;break;case"mousedown":Zr=!0;break;case"contextmenu":case"mouseup":case"dragend":Zr=!1,Jc(O,s,A);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":Jc(O,s,A)}var L;if(_r)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else us?Gc(e,s)&&(H="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(H="onCompositionStart");H&&(kc&&s.locale!=="ko"&&(us||H!=="onCompositionStart"?H==="onCompositionEnd"&&us&&(L=Nc()):(tt=A,Lr="value"in tt?tt.value:tt.textContent,us=!0)),P=Ii(v,H),0<P.length&&(H=new Cc(H,e,null,s,A),O.push({event:H,listeners:P}),L?H.data=L:(L=Vc(s),L!==null&&(H.data=L)))),(L=Pf?If(e,s):Jf(e,s))&&(H=Ii(v,"onBeforeInput"),0<H.length&&(P=new Cc("onBeforeInput","beforeinput",null,s,A),O.push({event:P,listeners:H}),P.data=L)),Hp(O,e,v,s,A)}ym(O,a)})}function Co(e,a,s){return{instance:e,listener:a,currentTarget:s}}function Ii(e,a){for(var s=a+"Capture",o=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Is(e,s),i!=null&&o.unshift(Co(e,i,r)),i=Is(e,a),i!=null&&o.push(Co(e,i,r))),e.tag===3)return o;e=e.return}return[]}function Us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qm(e,a,s,o,i){for(var r=a._reactName,n=[];s!==null&&s!==o;){var d=s,h=d.alternate,v=d.stateNode;if(d=d.tag,h!==null&&h===o)break;d!==5&&d!==26&&d!==27||v===null||(h=v,i?(v=Is(s,r),v!=null&&n.unshift(Co(s,v,h))):i||(v=Is(s,r),v!=null&&n.push(Co(s,v,h)))),s=s.return}n.length!==0&&e.push({event:a,listeners:n})}var Yp=/\r\n?/g,Xp=/\u0000|\uFFFD/g;function Am(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Xp,"")}function Em(e,a){return a=Am(a),Am(e)===a}function Ji(){}function ue(e,a,s,o,i,r){switch(s){case"children":typeof o=="string"?a==="body"||a==="textarea"&&o===""||ns(e,o):(typeof o=="number"||typeof o=="bigint")&&a!=="body"&&ns(e,""+o);break;case"className":ti(e,"class",o);break;case"tabIndex":ti(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ti(e,s,o);break;case"style":Oc(e,o,r);break;case"data":if(a!=="object"){ti(e,"data",o);break}case"src":case"href":if(o===""&&(a!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ii(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(s==="formAction"?(a!=="input"&&ue(e,a,"name",i.name,i,null),ue(e,a,"formEncType",i.formEncType,i,null),ue(e,a,"formMethod",i.formMethod,i,null),ue(e,a,"formTarget",i.formTarget,i,null)):(ue(e,a,"encType",i.encType,i,null),ue(e,a,"method",i.method,i,null),ue(e,a,"target",i.target,i,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=ii(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&$("scroll",e);break;case"onScrollEnd":o!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(u(61));if(s=o.__html,s!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=ii(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":$("beforetoggle",e),$("toggle",e),ai(e,"popover",o);break;case"xlinkActuate":Ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ua(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ua(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ua(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ua(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ai(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Sf.get(s)||s,ai(e,s,o))}}function gn(e,a,s,o,i,r){switch(s){case"style":Oc(e,o,r);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(u(61));if(s=o.__html,s!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=s}}break;case"children":typeof o=="string"?ns(e,o):(typeof o=="number"||typeof o=="bigint")&&ns(e,""+o);break;case"onScroll":o!=null&&$("scroll",e);break;case"onScrollEnd":o!=null&&$("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xc.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(i=s.endsWith("Capture"),a=s.slice(2,i?s.length-7:void 0),r=e[We]||null,r=r!=null?r[s]:null,typeof r=="function"&&e.removeEventListener(a,r,i),typeof o=="function")){typeof r!="function"&&r!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(a,o,i);break e}s in e?e[s]=o:o===!0?e.setAttribute(s,""):ai(e,s,o)}}}function Xe(e,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var o=!1,i=!1,r;for(r in s)if(s.hasOwnProperty(r)){var n=s[r];if(n!=null)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:ue(e,a,r,n,s,null)}}i&&ue(e,a,"srcSet",s.srcSet,s,null),o&&ue(e,a,"src",s.src,s,null);return;case"input":$("invalid",e);var d=r=n=i=null,h=null,v=null;for(o in s)if(s.hasOwnProperty(o)){var A=s[o];if(A!=null)switch(o){case"name":i=A;break;case"type":n=A;break;case"checked":h=A;break;case"defaultChecked":v=A;break;case"value":r=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,a));break;default:ue(e,a,o,A,s,null)}}qc(e,r,d,h,v,n,i,!1),si(e);return;case"select":$("invalid",e),o=n=r=null;for(i in s)if(s.hasOwnProperty(i)&&(d=s[i],d!=null))switch(i){case"value":r=d;break;case"defaultValue":n=d;break;case"multiple":o=d;default:ue(e,a,i,d,s,null)}a=r,s=n,e.multiple=!!o,a!=null?ls(e,!!o,a,!1):s!=null&&ls(e,!!o,s,!0);return;case"textarea":$("invalid",e),r=i=o=null;for(n in s)if(s.hasOwnProperty(n)&&(d=s[n],d!=null))switch(n){case"value":o=d;break;case"defaultValue":i=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(u(91));break;default:ue(e,a,n,d,s,null)}Ec(e,o,i,r),si(e);return;case"option":for(h in s)s.hasOwnProperty(h)&&(o=s[h],o!=null)&&(h==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":ue(e,a,h,o,s,null));return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(o=0;o<Do.length;o++)$(Do[o],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in s)if(s.hasOwnProperty(v)&&(o=s[v],o!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:ue(e,a,v,o,s,null)}return;default:if(Dr(a)){for(A in s)s.hasOwnProperty(A)&&(o=s[A],o!==void 0&&gn(e,a,A,o,s,void 0));return}}for(d in s)s.hasOwnProperty(d)&&(o=s[d],o!=null&&ue(e,a,d,o,s,null))}function Zp(e,a,s,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,n=null,d=null,h=null,v=null,A=null;for(y in s){var O=s[y];if(s.hasOwnProperty(y)&&O!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":h=O;default:o.hasOwnProperty(y)||ue(e,a,y,null,o,O)}}for(var j in o){var y=o[j];if(O=s[j],o.hasOwnProperty(j)&&(y!=null||O!=null))switch(j){case"type":r=y;break;case"name":i=y;break;case"checked":v=y;break;case"defaultChecked":A=y;break;case"value":n=y;break;case"defaultValue":d=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(u(137,a));break;default:y!==O&&ue(e,a,j,y,o,O)}}Nr(e,n,d,h,v,A,r,i);return;case"select":y=n=d=j=null;for(r in s)if(h=s[r],s.hasOwnProperty(r)&&h!=null)switch(r){case"value":break;case"multiple":y=h;default:o.hasOwnProperty(r)||ue(e,a,r,null,o,h)}for(i in o)if(r=o[i],h=s[i],o.hasOwnProperty(i)&&(r!=null||h!=null))switch(i){case"value":j=r;break;case"defaultValue":d=r;break;case"multiple":n=r;default:r!==h&&ue(e,a,i,r,o,h)}a=d,s=n,o=y,j!=null?ls(e,!!s,j,!1):!!o!=!!s&&(a!=null?ls(e,!!s,a,!0):ls(e,!!s,s?[]:"",!1));return;case"textarea":y=j=null;for(d in s)if(i=s[d],s.hasOwnProperty(d)&&i!=null&&!o.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ue(e,a,d,null,o,i)}for(n in o)if(i=o[n],r=s[n],o.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":j=i;break;case"defaultValue":y=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&ue(e,a,n,i,o,r)}Ac(e,j,y);return;case"option":for(var _ in s)j=s[_],s.hasOwnProperty(_)&&j!=null&&!o.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:ue(e,a,_,null,o,j));for(h in o)j=o[h],y=s[h],o.hasOwnProperty(h)&&j!==y&&(j!=null||y!=null)&&(h==="selected"?e.selected=j&&typeof j!="function"&&typeof j!="symbol":ue(e,a,h,j,o,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in s)j=s[V],s.hasOwnProperty(V)&&j!=null&&!o.hasOwnProperty(V)&&ue(e,a,V,null,o,j);for(v in o)if(j=o[v],y=s[v],o.hasOwnProperty(v)&&j!==y&&(j!=null||y!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,a));break;default:ue(e,a,v,j,o,y)}return;default:if(Dr(a)){for(var me in s)j=s[me],s.hasOwnProperty(me)&&j!==void 0&&!o.hasOwnProperty(me)&&gn(e,a,me,void 0,o,j);for(A in o)j=o[A],y=s[A],!o.hasOwnProperty(A)||j===y||j===void 0&&y===void 0||gn(e,a,A,j,o,y);return}}for(var x in s)j=s[x],s.hasOwnProperty(x)&&j!=null&&!o.hasOwnProperty(x)&&ue(e,a,x,null,o,j);for(O in o)j=o[O],y=s[O],!o.hasOwnProperty(O)||j===y||j==null&&y==null||ue(e,a,O,j,o,y)}var vn=null,bn=null;function $i(e){return e.nodeType===9?e:e.ownerDocument}function wm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Om(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function jn(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var yn=null;function Kp(){var e=window.event;return e&&e.type==="popstate"?e===yn?!1:(yn=e,!0):(yn=null,!1)}var zm=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,Ip=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(e){return Mm.resolve(null).then(e).catch(Jp)}:zm;function Jp(e){setTimeout(function(){throw e})}function vt(e){return e==="head"}function Nm(e,a){var s=a,o=0,i=0;do{var r=s.nextSibling;if(e.removeChild(s),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(0<o&&8>o){s=o;var n=e.ownerDocument;if(s&1&&Ro(n.documentElement),s&2&&Ro(n.body),s&4)for(s=n.head,Ro(s),n=s.firstChild;n;){var d=n.nextSibling,h=n.nodeName;n[Ks]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&n.rel.toLowerCase()==="stylesheet"||s.removeChild(n),n=d}}if(i===0){e.removeChild(r),_o(a);return}i--}else s==="$"||s==="$?"||s==="$!"?i++:o=s.charCodeAt(0)-48;else o=0;s=r}while(s);_o(a)}function Sn(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Sn(s),wr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function $p(e,a,s,o){for(;e.nodeType===1;){var i=s;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ks])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Aa(e.nextSibling),e===null)break}return null}function Wp(e,a,s){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Aa(e.nextSibling),e===null))return null;return e}function qn(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ex(e,a){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")a();else{var o=function(){a(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Aa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var An=null;function Tm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(a===0)return e;a--}else s==="/$"&&a++}e=e.previousSibling}return null}function Dm(e,a,s){switch(a=$i(s),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Ro(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);wr(e)}var ya=new Map,Cm=new Set;function Wi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ia=N.d;N.d={f:ax,r:tx,D:sx,C:ox,L:ix,m:rx,X:nx,S:lx,M:cx};function ax(){var e=Ia.f(),a=Qi();return e||a}function tx(e){var a=ss(e);a!==null&&a.tag===5&&a.type==="form"?Wd(a):Ia.r(e)}var Ls=typeof document>"u"?null:document;function Rm(e,a,s){var o=Ls;if(o&&typeof a=="string"&&a){var i=fa(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof s=="string"&&(i+='[crossorigin="'+s+'"]'),Cm.has(i)||(Cm.add(i),e={rel:e,crossOrigin:s,href:a},o.querySelector(i)===null&&(a=o.createElement("link"),Xe(a,"link",e),Ve(a),o.head.appendChild(a)))}}function sx(e){Ia.D(e),Rm("dns-prefetch",e,null)}function ox(e,a){Ia.C(e,a),Rm("preconnect",e,a)}function ix(e,a,s){Ia.L(e,a,s);var o=Ls;if(o&&e&&a){var i='link[rel="preload"][as="'+fa(a)+'"]';a==="image"&&s&&s.imageSrcSet?(i+='[imagesrcset="'+fa(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(i+='[imagesizes="'+fa(s.imageSizes)+'"]')):i+='[href="'+fa(e)+'"]';var r=i;switch(a){case"style":r=Gs(e);break;case"script":r=Vs(e)}ya.has(r)||(e=k({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:e,as:a},s),ya.set(r,e),o.querySelector(i)!==null||a==="style"&&o.querySelector(ko(r))||a==="script"&&o.querySelector(Uo(r))||(a=o.createElement("link"),Xe(a,"link",e),Ve(a),o.head.appendChild(a)))}}function rx(e,a){Ia.m(e,a);var s=Ls;if(s&&e){var o=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+fa(o)+'"][href="'+fa(e)+'"]',r=i;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Vs(e)}if(!ya.has(r)&&(e=k({rel:"modulepreload",href:e},a),ya.set(r,e),s.querySelector(i)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Uo(r)))return}o=s.createElement("link"),Xe(o,"link",e),Ve(o),s.head.appendChild(o)}}}function lx(e,a,s){Ia.S(e,a,s);var o=Ls;if(o&&e){var i=os(o).hoistableStyles,r=Gs(e);a=a||"default";var n=i.get(r);if(!n){var d={loading:0,preload:null};if(n=o.querySelector(ko(r)))d.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":a},s),(s=ya.get(r))&&En(e,s);var h=n=o.createElement("link");Ve(h),Xe(h,"link",e),h._p=new Promise(function(v,A){h.onload=v,h.onerror=A}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,er(n,a,o)}n={type:"stylesheet",instance:n,count:1,state:d},i.set(r,n)}}}function nx(e,a){Ia.X(e,a);var s=Ls;if(s&&e){var o=os(s).hoistableScripts,i=Vs(e),r=o.get(i);r||(r=s.querySelector(Uo(i)),r||(e=k({src:e,async:!0},a),(a=ya.get(i))&&wn(e,a),r=s.createElement("script"),Ve(r),Xe(r,"link",e),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(i,r))}}function cx(e,a){Ia.M(e,a);var s=Ls;if(s&&e){var o=os(s).hoistableScripts,i=Vs(e),r=o.get(i);r||(r=s.querySelector(Uo(i)),r||(e=k({src:e,async:!0,type:"module"},a),(a=ya.get(i))&&wn(e,a),r=s.createElement("script"),Ve(r),Xe(r,"link",e),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},o.set(i,r))}}function km(e,a,s,o){var i=(i=be.current)?Wi(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=Gs(s.href),s=os(i).hoistableStyles,o=s.get(a),o||(o={type:"style",instance:null,count:0,state:null},s.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Gs(s.href);var r=os(i).hoistableStyles,n=r.get(e);if(n||(i=i.ownerDocument||i,n={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,n),(r=i.querySelector(ko(e)))&&!r._p&&(n.instance=r,n.state.loading=5),ya.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ya.set(e,s),r||dx(i,e,s,n.state))),a&&o===null)throw Error(u(528,""));return n}if(a&&o!==null)throw Error(u(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Vs(s),s=os(i).hoistableScripts,o=s.get(a),o||(o={type:"script",instance:null,count:0,state:null},s.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Gs(e){return'href="'+fa(e)+'"'}function ko(e){return'link[rel="stylesheet"]['+e+"]"}function Um(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function dx(e,a,s,o){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?o.loading=1:(a=e.createElement("link"),o.preload=a,a.addEventListener("load",function(){return o.loading|=1}),a.addEventListener("error",function(){return o.loading|=2}),Xe(a,"link",s),Ve(a),e.head.appendChild(a))}function Vs(e){return'[src="'+fa(e)+'"]'}function Uo(e){return"script[async]"+e}function Lm(e,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var o=e.querySelector('style[data-href~="'+fa(s.href)+'"]');if(o)return a.instance=o,Ve(o),o;var i=k({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ve(o),Xe(o,"style",i),er(o,s.precedence,e),a.instance=o;case"stylesheet":i=Gs(s.href);var r=e.querySelector(ko(i));if(r)return a.state.loading|=4,a.instance=r,Ve(r),r;o=Um(s),(i=ya.get(i))&&En(o,i),r=(e.ownerDocument||e).createElement("link"),Ve(r);var n=r;return n._p=new Promise(function(d,h){n.onload=d,n.onerror=h}),Xe(r,"link",o),a.state.loading|=4,er(r,s.precedence,e),a.instance=r;case"script":return r=Vs(s.src),(i=e.querySelector(Uo(r)))?(a.instance=i,Ve(i),i):(o=s,(i=ya.get(r))&&(o=k({},s),wn(o,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ve(i),Xe(i,"link",o),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(o=a.instance,a.state.loading|=4,er(o,s.precedence,e));return a.instance}function er(e,a,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,r=i,n=0;n<o.length;n++){var d=o[n];if(d.dataset.precedence===a)r=d;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(e,a.firstChild))}function En(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function wn(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ar=null;function Gm(e,a,s){if(ar===null){var o=new Map,i=ar=new Map;i.set(s,o)}else i=ar,o=i.get(s),o||(o=new Map,i.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),i=0;i<s.length;i++){var r=s[i];if(!(r[Ks]||r[Ke]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var n=r.getAttribute(a)||"";n=e+n;var d=o.get(n);d?d.push(r):o.set(n,[r])}}return o}function Vm(e,a,s){e=e.ownerDocument||e,e.head.insertBefore(s,a==="title"?e.querySelector("head > title"):null)}function ux(e,a,s){if(s===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Bm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Lo=null;function mx(){}function hx(e,a,s){if(Lo===null)throw Error(u(475));var o=Lo;if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Gs(s.href),r=e.querySelector(ko(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=tr.bind(o),e.then(o,o)),a.state.loading|=4,a.instance=r,Ve(r);return}r=e.ownerDocument||e,s=Um(s),(i=ya.get(i))&&En(s,i),r=r.createElement("link"),Ve(r);var n=r;n._p=new Promise(function(d,h){n.onload=d,n.onerror=h}),Xe(r,"link",s),a.instance=r}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(o.count++,a=tr.bind(o),e.addEventListener("load",a),e.addEventListener("error",a))}}function fx(){if(Lo===null)throw Error(u(475));var e=Lo;return e.stylesheets&&e.count===0&&On(e,e.stylesheets),0<e.count?function(a){var s=setTimeout(function(){if(e.stylesheets&&On(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s)}}:null}function tr(){if(this.count--,this.count===0){if(this.stylesheets)On(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sr=null;function On(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sr=new Map,a.forEach(px,e),sr=null,tr.call(e))}function px(e,a){if(!(a.state.loading&4)){var s=sr.get(e);if(s)var o=s.get(null);else{s=new Map,sr.set(e,s);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var n=i[r];(n.nodeName==="LINK"||n.getAttribute("media")!=="not all")&&(s.set(n.dataset.precedence,n),o=n)}o&&s.set(null,o)}i=a.instance,n=i.getAttribute("data-precedence"),r=s.get(n)||o,r===o&&s.set(null,i),s.set(n,i),this.count++,o=tr.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var Go={$$typeof:ve,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function xx(e,a,s,o,i,r,n,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sr(0),this.hiddenUpdates=Sr(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=n,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Hm(e,a,s,o,i,r,n,d,h,v,A,O){return e=new xx(e,a,s,n,d,h,v,O),a=1,r===!0&&(a|=24),r=la(3,null,null,a),e.current=r,r.stateNode=e,a=ll(),a.refCount++,e.pooledCache=a,a.refCount++,r.memoizedState={element:o,isDehydrated:s,cache:a},ul(r),e}function _m(e){return e?(e=xs,e):xs}function Fm(e,a,s,o,i,r){i=_m(i),o.context===null?o.context=i:o.pendingContext=i,o=it(a),o.payload={element:s},r=r===void 0?null:r,r!==null&&(o.callback=r),s=rt(e,o,a),s!==null&&(ma(s,e,a),fo(s,e,a))}function Qm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<a?s:a}}function zn(e,a){Qm(e,a),(e=e.alternate)&&Qm(e,a)}function Ym(e){if(e.tag===13){var a=ps(e,67108864);a!==null&&ma(a,e,67108864),zn(e,67108864)}}var or=!0;function gx(e,a,s,o){var i=q.T;q.T=null;var r=N.p;try{N.p=2,Mn(e,a,s,o)}finally{N.p=r,q.T=i}}function vx(e,a,s,o){var i=q.T;q.T=null;var r=N.p;try{N.p=8,Mn(e,a,s,o)}finally{N.p=r,q.T=i}}function Mn(e,a,s,o){if(or){var i=Nn(o);if(i===null)xn(e,a,o,ir,s),Zm(e,o);else if(jx(i,e,a,s,o))o.stopPropagation();else if(Zm(e,o),a&4&&-1<bx.indexOf(e)){for(;i!==null;){var r=ss(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var n=Dt(r.pendingLanes);if(n!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;n;){var h=1<<31-ia(n);d.entanglements[1]|=h,n&=~h}Ta(r),(ne&6)===0&&(_i=wa()+500,To(0))}}break;case 13:d=ps(r,2),d!==null&&ma(d,r,2),Qi(),zn(r,2)}if(r=Nn(o),r===null&&xn(e,a,o,ir,s),r===i)break;i=r}i!==null&&o.stopPropagation()}else xn(e,a,o,null,s)}}function Nn(e){return e=Rr(e),Tn(e)}var ir=null;function Tn(e){if(ir=null,e=ts(e),e!==null){var a=S(e);if(a===null)e=null;else{var s=a.tag;if(s===13){if(e=z(a),e!==null)return e;e=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ir=e,null}function Xm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sf()){case rc:return 2;case lc:return 8;case Jo:case of:return 32;case nc:return 268435456;default:return 32}default:return 32}}var Dn=!1,bt=null,jt=null,yt=null,Vo=new Map,Bo=new Map,St=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zm(e,a){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":Vo.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(a.pointerId)}}function Ho(e,a,s,o,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:a,domEventName:s,eventSystemFlags:o,nativeEvent:r,targetContainers:[i]},a!==null&&(a=ss(a),a!==null&&Ym(a)),e):(e.eventSystemFlags|=o,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function jx(e,a,s,o,i){switch(a){case"focusin":return bt=Ho(bt,e,a,s,o,i),!0;case"dragenter":return jt=Ho(jt,e,a,s,o,i),!0;case"mouseover":return yt=Ho(yt,e,a,s,o,i),!0;case"pointerover":var r=i.pointerId;return Vo.set(r,Ho(Vo.get(r)||null,e,a,s,o,i)),!0;case"gotpointercapture":return r=i.pointerId,Bo.set(r,Ho(Bo.get(r)||null,e,a,s,o,i)),!0}return!1}function Km(e){var a=ts(e.target);if(a!==null){var s=S(a);if(s!==null){if(a=s.tag,a===13){if(a=z(s),a!==null){e.blockedOn=a,hf(e.priority,function(){if(s.tag===13){var o=ua();o=qr(o);var i=ps(s,o);i!==null&&ma(i,s,o),zn(s,o)}});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rr(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var s=Nn(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Cr=o,s.target.dispatchEvent(o),Cr=null}else return a=ss(s),a!==null&&Ym(a),e.blockedOn=s,!1;a.shift()}return!0}function Pm(e,a,s){rr(e)&&s.delete(a)}function yx(){Dn=!1,bt!==null&&rr(bt)&&(bt=null),jt!==null&&rr(jt)&&(jt=null),yt!==null&&rr(yt)&&(yt=null),Vo.forEach(Pm),Bo.forEach(Pm)}function lr(e,a){e.blockedOn===a&&(e.blockedOn=null,Dn||(Dn=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,yx)))}var nr=null;function Im(e){nr!==e&&(nr=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){nr===e&&(nr=null);for(var a=0;a<e.length;a+=3){var s=e[a],o=e[a+1],i=e[a+2];if(typeof o!="function"){if(Tn(o||s)===null)continue;break}var r=ss(s);r!==null&&(e.splice(a,3),a-=3,Nl(r,{pending:!0,data:i,method:s.method,action:o},o,i))}}))}function _o(e){function a(h){return lr(h,e)}bt!==null&&lr(bt,e),jt!==null&&lr(jt,e),yt!==null&&lr(yt,e),Vo.forEach(a),Bo.forEach(a);for(var s=0;s<St.length;s++){var o=St[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<St.length&&(s=St[0],s.blockedOn===null);)Km(s),s.blockedOn===null&&St.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var i=s[o],r=s[o+1],n=i[We]||null;if(typeof r=="function")n||Im(s);else if(n){var d=null;if(r&&r.hasAttribute("formAction")){if(i=r,n=r[We]||null)d=n.formAction;else if(Tn(i)!==null)continue}else d=n.action;typeof d=="function"?s[o+1]=d:(s.splice(o,3),o-=3),Im(s)}}}function Cn(e){this._internalRoot=e}cr.prototype.render=Cn.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var s=a.current,o=ua();Fm(s,o,e,a,null,null)},cr.prototype.unmount=Cn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Fm(e.current,2,null,e,null,null),Qi(),a[as]=null}};function cr(e){this._internalRoot=e}cr.prototype.unstable_scheduleHydration=function(e){if(e){var a=hc();e={blockedOn:null,target:e,priority:a};for(var s=0;s<St.length&&a!==0&&a<St[s].priority;s++);St.splice(s,0,e),s===0&&Km(e)}};var Jm=c.version;if(Jm!=="19.1.0")throw Error(u(527,Jm,"19.1.0"));N.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=M(a),e=e!==null?G(e):null,e=e===null?null:e.stateNode,e};var Sx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dr.isDisabled&&dr.supportsFiber)try{Ys=dr.inject(Sx),oa=dr}catch{}}return Fo.createRoot=function(e,a){if(!b(e))throw Error(u(299));var s=!1,o="",i=hu,r=fu,n=pu,d=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(n=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(d=a.unstable_transitionCallbacks)),a=Hm(e,1,!1,null,null,s,o,i,r,n,d,null),e[as]=a.current,pn(e),new Cn(a)},Fo.hydrateRoot=function(e,a,s){if(!b(e))throw Error(u(299));var o=!1,i="",r=hu,n=fu,d=pu,h=null,v=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(i=s.identifierPrefix),s.onUncaughtError!==void 0&&(r=s.onUncaughtError),s.onCaughtError!==void 0&&(n=s.onCaughtError),s.onRecoverableError!==void 0&&(d=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(h=s.unstable_transitionCallbacks),s.formState!==void 0&&(v=s.formState)),a=Hm(e,1,!0,a,s??null,o,i,r,n,d,h,v),a.context=_m(null),s=a.current,o=ua(),o=qr(o),i=it(o),i.callback=null,rt(s,i,o),s=o,a.current.lanes=s,Zs(a,s),Ta(a),e[as]=a.current,pn(e),new cr(a)},Fo.version="19.1.0",Fo}var ah;function dg(){if(ah)return Rn.exports;ah=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Rn.exports=cg(),Rn.exports}var ug=dg();const Yo={v:[]},th=()=>Yo.v.forEach(l=>l()),mg=l=>(Yo.v.push(l)===1&&addEventListener("hashchange",th),()=>{Yo.v=Yo.v.filter(c=>c!==l),Yo.v.length||removeEventListener("hashchange",th)}),hg=()=>"/"+location.hash.replace(/^#?\/?/,""),fg=(l,{state:c=null,replace:m=!1}={})=>{const u=location.href,[b,S]=l.replace(/^#?\/?/,"").split("?"),z=new URL(location.href);z.hash=`/${b}`,S&&(z.search=S);const w=z.href;m?history.replaceState(c,"",w):history.pushState(c,"",w);const M=typeof HashChangeEvent<"u"?new HashChangeEvent("hashchange",{oldURL:u,newURL:w}):new Event("hashchange",{detail:{oldURL:u,newURL:w}});dispatchEvent(M)},ac=({ssrPath:l="/"}={})=>[Ex.useSyncExternalStore(mg,hg,()=>l),fg];ac.hrefs=l=>"#"+l;var jr=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(l){return this.listeners.add(l),this.onSubscribe(),()=>{this.listeners.delete(l),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},pg={setTimeout:(l,c)=>setTimeout(l,c),clearTimeout:l=>clearTimeout(l),setInterval:(l,c)=>setInterval(l,c),clearInterval:l=>clearInterval(l)},xg=class{#e=pg;#t=!1;setTimeoutProvider(l){this.#e=l}setTimeout(l,c){return this.#e.setTimeout(l,c)}clearTimeout(l){this.#e.clearTimeout(l)}setInterval(l,c){return this.#e.setInterval(l,c)}clearInterval(l){this.#e.clearInterval(l)}},Hn=new xg;function gg(l){setTimeout(l,0)}var yr=typeof window>"u"||"Deno"in globalThis;function Ea(){}function vg(l,c){return typeof l=="function"?l(c):l}function bg(l){return typeof l=="number"&&l>=0&&l!==1/0}function jg(l,c){return Math.max(l+(c||0)-Date.now(),0)}function _n(l,c){return typeof l=="function"?l(c):l}function yg(l,c){return typeof l=="function"?l(c):l}function sh(l,c){const{type:m="all",exact:u,fetchStatus:b,predicate:S,queryKey:z,stale:w}=l;if(z){if(u){if(c.queryHash!==tc(z,c.options))return!1}else if(!Ko(c.queryKey,z))return!1}if(m!=="all"){const M=c.isActive();if(m==="active"&&!M||m==="inactive"&&M)return!1}return!(typeof w=="boolean"&&c.isStale()!==w||b&&b!==c.state.fetchStatus||S&&!S(c))}function oh(l,c){const{exact:m,status:u,predicate:b,mutationKey:S}=l;if(S){if(!c.options.mutationKey)return!1;if(m){if(Zo(c.options.mutationKey)!==Zo(S))return!1}else if(!Ko(c.options.mutationKey,S))return!1}return!(u&&c.state.status!==u||b&&!b(c))}function tc(l,c){return(c?.queryKeyHashFn||Zo)(l)}function Zo(l){return JSON.stringify(l,(c,m)=>Fn(m)?Object.keys(m).sort().reduce((u,b)=>(u[b]=m[b],u),{}):m)}function Ko(l,c){return l===c?!0:typeof l!=typeof c?!1:l&&c&&typeof l=="object"&&typeof c=="object"?Object.keys(c).every(m=>Ko(l[m],c[m])):!1}var Sg=Object.prototype.hasOwnProperty;function Rh(l,c,m=0){if(l===c)return l;if(m>500)return c;const u=ih(l)&&ih(c);if(!u&&!(Fn(l)&&Fn(c)))return c;const S=(u?l:Object.keys(l)).length,z=u?c:Object.keys(c),w=z.length,M=u?new Array(w):{};let G=0;for(let k=0;k<w;k++){const I=u?k:z[k],F=l[I],re=c[I];if(F===re){M[I]=F,(u?k<S:Sg.call(l,I))&&G++;continue}if(F===null||re===null||typeof F!="object"||typeof re!="object"){M[I]=re;continue}const X=Rh(F,re,m+1);M[I]=X,X===F&&G++}return S===w&&G===S?l:M}function ih(l){return Array.isArray(l)&&l.length===Object.keys(l).length}function Fn(l){if(!rh(l))return!1;const c=l.constructor;if(c===void 0)return!0;const m=c.prototype;return!(!rh(m)||!m.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(l)!==Object.prototype)}function rh(l){return Object.prototype.toString.call(l)==="[object Object]"}function qg(l){return new Promise(c=>{Hn.setTimeout(c,l)})}function Ag(l,c,m){return typeof m.structuralSharing=="function"?m.structuralSharing(l,c):m.structuralSharing!==!1?Rh(l,c):c}function Eg(l,c,m=0){const u=[...l,c];return m&&u.length>m?u.slice(1):u}function wg(l,c,m=0){const u=[c,...l];return m&&u.length>m?u.slice(0,-1):u}var sc=Symbol();function kh(l,c){return!l.queryFn&&c?.initialPromise?()=>c.initialPromise:!l.queryFn||l.queryFn===sc?()=>Promise.reject(new Error(`Missing queryFn: '${l.queryHash}'`)):l.queryFn}function Og(l,c,m){let u=!1,b;return Object.defineProperty(l,"signal",{enumerable:!0,get:()=>(b??=c(),u||(u=!0,b.aborted?m():b.addEventListener("abort",m,{once:!0})),b)}),l}var zg=class extends jr{#e;#t;#a;constructor(){super(),this.#a=l=>{if(!yr&&window.addEventListener){const c=()=>l();return window.addEventListener("visibilitychange",c,!1),()=>{window.removeEventListener("visibilitychange",c)}}}}onSubscribe(){this.#t||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(l){this.#a=l,this.#t?.(),this.#t=l(c=>{typeof c=="boolean"?this.setFocused(c):this.onFocus()})}setFocused(l){this.#e!==l&&(this.#e=l,this.onFocus())}onFocus(){const l=this.isFocused();this.listeners.forEach(c=>{c(l)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Uh=new zg;function Mg(){let l,c;const m=new Promise((b,S)=>{l=b,c=S});m.status="pending",m.catch(()=>{});function u(b){Object.assign(m,b),delete m.resolve,delete m.reject}return m.resolve=b=>{u({status:"fulfilled",value:b}),l(b)},m.reject=b=>{u({status:"rejected",reason:b}),c(b)},m}var Ng=gg;function Tg(){let l=[],c=0,m=w=>{w()},u=w=>{w()},b=Ng;const S=w=>{c?l.push(w):b(()=>{m(w)})},z=()=>{const w=l;l=[],w.length&&b(()=>{u(()=>{w.forEach(M=>{m(M)})})})};return{batch:w=>{let M;c++;try{M=w()}finally{c--,c||z()}return M},batchCalls:w=>(...M)=>{S(()=>{w(...M)})},schedule:S,setNotifyFunction:w=>{m=w},setBatchNotifyFunction:w=>{u=w},setScheduler:w=>{b=w}}}var $e=Tg(),Dg=class extends jr{#e=!0;#t;#a;constructor(){super(),this.#a=l=>{if(!yr&&window.addEventListener){const c=()=>l(!0),m=()=>l(!1);return window.addEventListener("online",c,!1),window.addEventListener("offline",m,!1),()=>{window.removeEventListener("online",c),window.removeEventListener("offline",m)}}}}onSubscribe(){this.#t||this.setEventListener(this.#a)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(l){this.#a=l,this.#t?.(),this.#t=l(this.setOnline.bind(this))}setOnline(l){this.#e!==l&&(this.#e=l,this.listeners.forEach(m=>{m(l)}))}isOnline(){return this.#e}},fr=new Dg;function Cg(l){return Math.min(1e3*2**l,3e4)}function Lh(l){return(l??"online")==="online"?fr.isOnline():!0}var Qn=class extends Error{constructor(l){super("CancelledError"),this.revert=l?.revert,this.silent=l?.silent}};function Gh(l){let c=!1,m=0,u;const b=Mg(),S=()=>b.status!=="pending",z=Y=>{if(!S()){const W=new Qn(Y);F(W),l.onCancel?.(W)}},w=()=>{c=!0},M=()=>{c=!1},G=()=>Uh.isFocused()&&(l.networkMode==="always"||fr.isOnline())&&l.canRun(),k=()=>Lh(l.networkMode)&&l.canRun(),I=Y=>{S()||(u?.(),b.resolve(Y))},F=Y=>{S()||(u?.(),b.reject(Y))},re=()=>new Promise(Y=>{u=W=>{(S()||G())&&Y(W)},l.onPause?.()}).then(()=>{u=void 0,S()||l.onContinue?.()}),X=()=>{if(S())return;let Y;const W=m===0?l.initialPromise:void 0;try{Y=W??l.fn()}catch(ye){Y=Promise.reject(ye)}Promise.resolve(Y).then(I).catch(ye=>{if(S())return;const Le=l.retry??(yr?0:3),ve=l.retryDelay??Cg,Me=typeof ve=="function"?ve(m,ye):ve,Ce=Le===!0||typeof Le=="number"&&m<Le||typeof Le=="function"&&Le(m,ye);if(c||!Ce){F(ye);return}m++,l.onFail?.(m,ye),qg(Me).then(()=>G()?void 0:re()).then(()=>{c?F(ye):X()})})};return{promise:b,status:()=>b.status,cancel:z,continue:()=>(u?.(),b),cancelRetry:w,continueRetry:M,canStart:k,start:()=>(k()?X():re().then(X),b)}}var Vh=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),bg(this.gcTime)&&(this.#e=Hn.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(l){this.gcTime=Math.max(this.gcTime||0,l??(yr?1/0:300*1e3))}clearGcTimeout(){this.#e&&(Hn.clearTimeout(this.#e),this.#e=void 0)}},Rg=class extends Vh{#e;#t;#a;#o;#s;#r;#l;constructor(l){super(),this.#l=!1,this.#r=l.defaultOptions,this.setOptions(l.options),this.observers=[],this.#o=l.client,this.#a=this.#o.getQueryCache(),this.queryKey=l.queryKey,this.queryHash=l.queryHash,this.#e=nh(this.options),this.state=l.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#s?.promise}setOptions(l){if(this.options={...this.#r,...l},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const c=nh(this.options);c.data!==void 0&&(this.setState(lh(c.data,c.dataUpdatedAt)),this.#e=c)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#a.remove(this)}setData(l,c){const m=Ag(this.state.data,l,this.options);return this.#i({data:m,type:"success",dataUpdatedAt:c?.updatedAt,manual:c?.manual}),m}setState(l,c){this.#i({type:"setState",state:l,setStateOptions:c})}cancel(l){const c=this.#s?.promise;return this.#s?.cancel(l),c?c.then(Ea).catch(Ea):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(l=>yg(l.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===sc||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(l=>_n(l.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(l=>l.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(l=0){return this.state.data===void 0?!0:l==="static"?!1:this.state.isInvalidated?!0:!jg(this.state.dataUpdatedAt,l)}onFocus(){this.observers.find(c=>c.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#s?.continue()}onOnline(){this.observers.find(c=>c.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#s?.continue()}addObserver(l){this.observers.includes(l)||(this.observers.push(l),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",query:this,observer:l}))}removeObserver(l){this.observers.includes(l)&&(this.observers=this.observers.filter(c=>c!==l),this.observers.length||(this.#s&&(this.#l?this.#s.cancel({revert:!0}):this.#s.cancelRetry()),this.scheduleGc()),this.#a.notify({type:"observerRemoved",query:this,observer:l}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#i({type:"invalidate"})}async fetch(l,c){if(this.state.fetchStatus!=="idle"&&this.#s?.status()!=="rejected"){if(this.state.data!==void 0&&c?.cancelRefetch)this.cancel({silent:!0});else if(this.#s)return this.#s.continueRetry(),this.#s.promise}if(l&&this.setOptions(l),!this.options.queryFn){const w=this.observers.find(M=>M.options.queryFn);w&&this.setOptions(w.options)}const m=new AbortController,u=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(this.#l=!0,m.signal)})},b=()=>{const w=kh(this.options,c),G=(()=>{const k={client:this.#o,queryKey:this.queryKey,meta:this.meta};return u(k),k})();return this.#l=!1,this.options.persister?this.options.persister(w,G,this):w(G)},z=(()=>{const w={fetchOptions:c,options:this.options,queryKey:this.queryKey,client:this.#o,state:this.state,fetchFn:b};return u(w),w})();this.options.behavior?.onFetch(z,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==z.fetchOptions?.meta)&&this.#i({type:"fetch",meta:z.fetchOptions?.meta}),this.#s=Gh({initialPromise:c?.initialPromise,fn:z.fetchFn,onCancel:w=>{w instanceof Qn&&w.revert&&this.setState({...this.#t,fetchStatus:"idle"}),m.abort()},onFail:(w,M)=>{this.#i({type:"failed",failureCount:w,error:M})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:z.options.retry,retryDelay:z.options.retryDelay,networkMode:z.options.networkMode,canRun:()=>!0});try{const w=await this.#s.start();if(w===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(w),this.#a.config.onSuccess?.(w,this),this.#a.config.onSettled?.(w,this.state.error,this),w}catch(w){if(w instanceof Qn){if(w.silent)return this.#s.promise;if(w.revert){if(this.state.data===void 0)throw w;return this.state.data}}throw this.#i({type:"error",error:w}),this.#a.config.onError?.(w,this),this.#a.config.onSettled?.(this.state.data,w,this),w}finally{this.scheduleGc()}}#i(l){const c=m=>{switch(l.type){case"failed":return{...m,fetchFailureCount:l.failureCount,fetchFailureReason:l.error};case"pause":return{...m,fetchStatus:"paused"};case"continue":return{...m,fetchStatus:"fetching"};case"fetch":return{...m,...kg(m.data,this.options),fetchMeta:l.meta??null};case"success":const u={...m,...lh(l.data,l.dataUpdatedAt),dataUpdateCount:m.dataUpdateCount+1,...!l.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=l.manual?u:void 0,u;case"error":const b=l.error;return{...m,error:b,errorUpdateCount:m.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:m.fetchFailureCount+1,fetchFailureReason:b,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...m,isInvalidated:!0};case"setState":return{...m,...l.state}}};this.state=c(this.state),$e.batch(()=>{this.observers.forEach(m=>{m.onQueryUpdate()}),this.#a.notify({query:this,type:"updated",action:l})})}};function kg(l,c){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Lh(c.networkMode)?"fetching":"paused",...l===void 0&&{error:null,status:"pending"}}}function lh(l,c){return{data:l,dataUpdatedAt:c??Date.now(),error:null,isInvalidated:!1,status:"success"}}function nh(l){const c=typeof l.initialData=="function"?l.initialData():l.initialData,m=c!==void 0,u=m?typeof l.initialDataUpdatedAt=="function"?l.initialDataUpdatedAt():l.initialDataUpdatedAt:0;return{data:c,dataUpdateCount:0,dataUpdatedAt:m?u??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:m?"success":"pending",fetchStatus:"idle"}}function ch(l){return{onFetch:(c,m)=>{const u=c.options,b=c.fetchOptions?.meta?.fetchMore?.direction,S=c.state.data?.pages||[],z=c.state.data?.pageParams||[];let w={pages:[],pageParams:[]},M=0;const G=async()=>{let k=!1;const I=X=>{Og(X,()=>c.signal,()=>k=!0)},F=kh(c.options,c.fetchOptions),re=async(X,Y,W)=>{if(k)return Promise.reject();if(Y==null&&X.pages.length)return Promise.resolve(X);const Le=(()=>{const we={client:c.client,queryKey:c.queryKey,pageParam:Y,direction:W?"backward":"forward",meta:c.options.meta};return I(we),we})(),ve=await F(Le),{maxPages:Me}=c.options,Ce=W?wg:Eg;return{pages:Ce(X.pages,ve,Me),pageParams:Ce(X.pageParams,Y,Me)}};if(b&&S.length){const X=b==="backward",Y=X?Ug:dh,W={pages:S,pageParams:z},ye=Y(u,W);w=await re(W,ye,X)}else{const X=l??S.length;do{const Y=M===0?z[0]??u.initialPageParam:dh(u,w);if(M>0&&Y==null)break;w=await re(w,Y),M++}while(M<X)}return w};c.options.persister?c.fetchFn=()=>c.options.persister?.(G,{client:c.client,queryKey:c.queryKey,meta:c.options.meta,signal:c.signal},m):c.fetchFn=G}}}function dh(l,{pages:c,pageParams:m}){const u=c.length-1;return c.length>0?l.getNextPageParam(c[u],c,m[u],m):void 0}function Ug(l,{pages:c,pageParams:m}){return c.length>0?l.getPreviousPageParam?.(c[0],c,m[0],m):void 0}var Lg=class extends Vh{#e;#t;#a;#o;constructor(l){super(),this.#e=l.client,this.mutationId=l.mutationId,this.#a=l.mutationCache,this.#t=[],this.state=l.state||Gg(),this.setOptions(l.options),this.scheduleGc()}setOptions(l){this.options=l,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(l){this.#t.includes(l)||(this.#t.push(l),this.clearGcTimeout(),this.#a.notify({type:"observerAdded",mutation:this,observer:l}))}removeObserver(l){this.#t=this.#t.filter(c=>c!==l),this.scheduleGc(),this.#a.notify({type:"observerRemoved",mutation:this,observer:l})}optionalRemove(){this.#t.length||(this.state.status==="pending"?this.scheduleGc():this.#a.remove(this))}continue(){return this.#o?.continue()??this.execute(this.state.variables)}async execute(l){const c=()=>{this.#s({type:"continue"})},m={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#o=Gh({fn:()=>this.options.mutationFn?this.options.mutationFn(l,m):Promise.reject(new Error("No mutationFn found")),onFail:(S,z)=>{this.#s({type:"failed",failureCount:S,error:z})},onPause:()=>{this.#s({type:"pause"})},onContinue:c,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#a.canRun(this)});const u=this.state.status==="pending",b=!this.#o.canStart();try{if(u)c();else{this.#s({type:"pending",variables:l,isPaused:b}),this.#a.config.onMutate&&await this.#a.config.onMutate(l,this,m);const z=await this.options.onMutate?.(l,m);z!==this.state.context&&this.#s({type:"pending",context:z,variables:l,isPaused:b})}const S=await this.#o.start();return await this.#a.config.onSuccess?.(S,l,this.state.context,this,m),await this.options.onSuccess?.(S,l,this.state.context,m),await this.#a.config.onSettled?.(S,null,this.state.variables,this.state.context,this,m),await this.options.onSettled?.(S,null,l,this.state.context,m),this.#s({type:"success",data:S}),S}catch(S){try{await this.#a.config.onError?.(S,l,this.state.context,this,m)}catch(z){Promise.reject(z)}try{await this.options.onError?.(S,l,this.state.context,m)}catch(z){Promise.reject(z)}try{await this.#a.config.onSettled?.(void 0,S,this.state.variables,this.state.context,this,m)}catch(z){Promise.reject(z)}try{await this.options.onSettled?.(void 0,S,l,this.state.context,m)}catch(z){Promise.reject(z)}throw this.#s({type:"error",error:S}),S}finally{this.#a.runNext(this)}}#s(l){const c=m=>{switch(l.type){case"failed":return{...m,failureCount:l.failureCount,failureReason:l.error};case"pause":return{...m,isPaused:!0};case"continue":return{...m,isPaused:!1};case"pending":return{...m,context:l.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:l.isPaused,status:"pending",variables:l.variables,submittedAt:Date.now()};case"success":return{...m,data:l.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...m,data:void 0,error:l.error,failureCount:m.failureCount+1,failureReason:l.error,isPaused:!1,status:"error"}}};this.state=c(this.state),$e.batch(()=>{this.#t.forEach(m=>{m.onMutationUpdate(l)}),this.#a.notify({mutation:this,type:"updated",action:l})})}};function Gg(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Vg=class extends jr{constructor(l={}){super(),this.config=l,this.#e=new Set,this.#t=new Map,this.#a=0}#e;#t;#a;build(l,c,m){const u=new Lg({client:l,mutationCache:this,mutationId:++this.#a,options:l.defaultMutationOptions(c),state:m});return this.add(u),u}add(l){this.#e.add(l);const c=ur(l);if(typeof c=="string"){const m=this.#t.get(c);m?m.push(l):this.#t.set(c,[l])}this.notify({type:"added",mutation:l})}remove(l){if(this.#e.delete(l)){const c=ur(l);if(typeof c=="string"){const m=this.#t.get(c);if(m)if(m.length>1){const u=m.indexOf(l);u!==-1&&m.splice(u,1)}else m[0]===l&&this.#t.delete(c)}}this.notify({type:"removed",mutation:l})}canRun(l){const c=ur(l);if(typeof c=="string"){const u=this.#t.get(c)?.find(b=>b.state.status==="pending");return!u||u===l}else return!0}runNext(l){const c=ur(l);return typeof c=="string"?this.#t.get(c)?.find(u=>u!==l&&u.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){$e.batch(()=>{this.#e.forEach(l=>{this.notify({type:"removed",mutation:l})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(l){const c={exact:!0,...l};return this.getAll().find(m=>oh(c,m))}findAll(l={}){return this.getAll().filter(c=>oh(l,c))}notify(l){$e.batch(()=>{this.listeners.forEach(c=>{c(l)})})}resumePausedMutations(){const l=this.getAll().filter(c=>c.state.isPaused);return $e.batch(()=>Promise.all(l.map(c=>c.continue().catch(Ea))))}};function ur(l){return l.options.scope?.id}var Bg=class extends jr{constructor(l={}){super(),this.config=l,this.#e=new Map}#e;build(l,c,m){const u=c.queryKey,b=c.queryHash??tc(u,c);let S=this.get(b);return S||(S=new Rg({client:l,queryKey:u,queryHash:b,options:l.defaultQueryOptions(c),state:m,defaultOptions:l.getQueryDefaults(u)}),this.add(S)),S}add(l){this.#e.has(l.queryHash)||(this.#e.set(l.queryHash,l),this.notify({type:"added",query:l}))}remove(l){const c=this.#e.get(l.queryHash);c&&(l.destroy(),c===l&&this.#e.delete(l.queryHash),this.notify({type:"removed",query:l}))}clear(){$e.batch(()=>{this.getAll().forEach(l=>{this.remove(l)})})}get(l){return this.#e.get(l)}getAll(){return[...this.#e.values()]}find(l){const c={exact:!0,...l};return this.getAll().find(m=>sh(c,m))}findAll(l={}){const c=this.getAll();return Object.keys(l).length>0?c.filter(m=>sh(l,m)):c}notify(l){$e.batch(()=>{this.listeners.forEach(c=>{c(l)})})}onFocus(){$e.batch(()=>{this.getAll().forEach(l=>{l.onFocus()})})}onOnline(){$e.batch(()=>{this.getAll().forEach(l=>{l.onOnline()})})}},Hg=class{#e;#t;#a;#o;#s;#r;#l;#i;constructor(l={}){this.#e=l.queryCache||new Bg,this.#t=l.mutationCache||new Vg,this.#a=l.defaultOptions||{},this.#o=new Map,this.#s=new Map,this.#r=0}mount(){this.#r++,this.#r===1&&(this.#l=Uh.subscribe(async l=>{l&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#i=fr.subscribe(async l=>{l&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#r--,this.#r===0&&(this.#l?.(),this.#l=void 0,this.#i?.(),this.#i=void 0)}isFetching(l){return this.#e.findAll({...l,fetchStatus:"fetching"}).length}isMutating(l){return this.#t.findAll({...l,status:"pending"}).length}getQueryData(l){const c=this.defaultQueryOptions({queryKey:l});return this.#e.get(c.queryHash)?.state.data}ensureQueryData(l){const c=this.defaultQueryOptions(l),m=this.#e.build(this,c),u=m.state.data;return u===void 0?this.fetchQuery(l):(l.revalidateIfStale&&m.isStaleByTime(_n(c.staleTime,m))&&this.prefetchQuery(c),Promise.resolve(u))}getQueriesData(l){return this.#e.findAll(l).map(({queryKey:c,state:m})=>{const u=m.data;return[c,u]})}setQueryData(l,c,m){const u=this.defaultQueryOptions({queryKey:l}),S=this.#e.get(u.queryHash)?.state.data,z=vg(c,S);if(z!==void 0)return this.#e.build(this,u).setData(z,{...m,manual:!0})}setQueriesData(l,c,m){return $e.batch(()=>this.#e.findAll(l).map(({queryKey:u})=>[u,this.setQueryData(u,c,m)]))}getQueryState(l){const c=this.defaultQueryOptions({queryKey:l});return this.#e.get(c.queryHash)?.state}removeQueries(l){const c=this.#e;$e.batch(()=>{c.findAll(l).forEach(m=>{c.remove(m)})})}resetQueries(l,c){const m=this.#e;return $e.batch(()=>(m.findAll(l).forEach(u=>{u.reset()}),this.refetchQueries({type:"active",...l},c)))}cancelQueries(l,c={}){const m={revert:!0,...c},u=$e.batch(()=>this.#e.findAll(l).map(b=>b.cancel(m)));return Promise.all(u).then(Ea).catch(Ea)}invalidateQueries(l,c={}){return $e.batch(()=>(this.#e.findAll(l).forEach(m=>{m.invalidate()}),l?.refetchType==="none"?Promise.resolve():this.refetchQueries({...l,type:l?.refetchType??l?.type??"active"},c)))}refetchQueries(l,c={}){const m={...c,cancelRefetch:c.cancelRefetch??!0},u=$e.batch(()=>this.#e.findAll(l).filter(b=>!b.isDisabled()&&!b.isStatic()).map(b=>{let S=b.fetch(void 0,m);return m.throwOnError||(S=S.catch(Ea)),b.state.fetchStatus==="paused"?Promise.resolve():S}));return Promise.all(u).then(Ea)}fetchQuery(l){const c=this.defaultQueryOptions(l);c.retry===void 0&&(c.retry=!1);const m=this.#e.build(this,c);return m.isStaleByTime(_n(c.staleTime,m))?m.fetch(c):Promise.resolve(m.state.data)}prefetchQuery(l){return this.fetchQuery(l).then(Ea).catch(Ea)}fetchInfiniteQuery(l){return l.behavior=ch(l.pages),this.fetchQuery(l)}prefetchInfiniteQuery(l){return this.fetchInfiniteQuery(l).then(Ea).catch(Ea)}ensureInfiniteQueryData(l){return l.behavior=ch(l.pages),this.ensureQueryData(l)}resumePausedMutations(){return fr.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#a}setDefaultOptions(l){this.#a=l}setQueryDefaults(l,c){this.#o.set(Zo(l),{queryKey:l,defaultOptions:c})}getQueryDefaults(l){const c=[...this.#o.values()],m={};return c.forEach(u=>{Ko(l,u.queryKey)&&Object.assign(m,u.defaultOptions)}),m}setMutationDefaults(l,c){this.#s.set(Zo(l),{mutationKey:l,defaultOptions:c})}getMutationDefaults(l){const c=[...this.#s.values()],m={};return c.forEach(u=>{Ko(l,u.mutationKey)&&Object.assign(m,u.defaultOptions)}),m}defaultQueryOptions(l){if(l._defaulted)return l;const c={...this.#a.queries,...this.getQueryDefaults(l.queryKey),...l,_defaulted:!0};return c.queryHash||(c.queryHash=tc(c.queryKey,c)),c.refetchOnReconnect===void 0&&(c.refetchOnReconnect=c.networkMode!=="always"),c.throwOnError===void 0&&(c.throwOnError=!!c.suspense),!c.networkMode&&c.persister&&(c.networkMode="offlineFirst"),c.queryFn===sc&&(c.enabled=!1),c}defaultMutationOptions(l){return l?._defaulted?l:{...this.#a.mutations,...l?.mutationKey&&this.getMutationDefaults(l.mutationKey),...l,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},_g=Jt.createContext(void 0),Fg=({client:l,children:c})=>(Jt.useEffect(()=>(l.mount(),()=>{l.unmount()}),[l]),t.jsx(_g.Provider,{value:l,children:c}));function Bh(l){var c,m,u="";if(typeof l=="string"||typeof l=="number")u+=l;else if(typeof l=="object")if(Array.isArray(l)){var b=l.length;for(c=0;c<b;c++)l[c]&&(m=Bh(l[c]))&&(u&&(u+=" "),u+=m)}else for(m in l)l[m]&&(u&&(u+=" "),u+=m);return u}function Qg(){for(var l,c,m=0,u="",b=arguments.length;m<b;m++)(l=arguments[m])&&(c=Bh(l))&&(u&&(u+=" "),u+=c);return u}const Yg=(l,c)=>{const m=new Array(l.length+c.length);for(let u=0;u<l.length;u++)m[u]=l[u];for(let u=0;u<c.length;u++)m[l.length+u]=c[u];return m},Xg=(l,c)=>({classGroupId:l,validator:c}),Hh=(l=new Map,c=null,m)=>({nextPart:l,validators:c,classGroupId:m}),pr="-",uh=[],Zg="arbitrary..",Kg=l=>{const c=Ig(l),{conflictingClassGroups:m,conflictingClassGroupModifiers:u}=l;return{getClassGroupId:z=>{if(z.startsWith("[")&&z.endsWith("]"))return Pg(z);const w=z.split(pr),M=w[0]===""&&w.length>1?1:0;return _h(w,M,c)},getConflictingClassGroupIds:(z,w)=>{if(w){const M=u[z],G=m[z];return M?G?Yg(G,M):M:G||uh}return m[z]||uh}}},_h=(l,c,m)=>{if(l.length-c===0)return m.classGroupId;const b=l[c],S=m.nextPart.get(b);if(S){const G=_h(l,c+1,S);if(G)return G}const z=m.validators;if(z===null)return;const w=c===0?l.join(pr):l.slice(c).join(pr),M=z.length;for(let G=0;G<M;G++){const k=z[G];if(k.validator(w))return k.classGroupId}},Pg=l=>l.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const c=l.slice(1,-1),m=c.indexOf(":"),u=c.slice(0,m);return u?Zg+u:void 0})(),Ig=l=>{const{theme:c,classGroups:m}=l;return Jg(m,c)},Jg=(l,c)=>{const m=Hh();for(const u in l){const b=l[u];oc(b,m,u,c)}return m},oc=(l,c,m,u)=>{const b=l.length;for(let S=0;S<b;S++){const z=l[S];$g(z,c,m,u)}},$g=(l,c,m,u)=>{if(typeof l=="string"){Wg(l,c,m);return}if(typeof l=="function"){ev(l,c,m,u);return}av(l,c,m,u)},Wg=(l,c,m)=>{const u=l===""?c:Fh(c,l);u.classGroupId=m},ev=(l,c,m,u)=>{if(tv(l)){oc(l(u),c,m,u);return}c.validators===null&&(c.validators=[]),c.validators.push(Xg(m,l))},av=(l,c,m,u)=>{const b=Object.entries(l),S=b.length;for(let z=0;z<S;z++){const[w,M]=b[z];oc(M,Fh(c,w),m,u)}},Fh=(l,c)=>{let m=l;const u=c.split(pr),b=u.length;for(let S=0;S<b;S++){const z=u[S];let w=m.nextPart.get(z);w||(w=Hh(),m.nextPart.set(z,w)),m=w}return m},tv=l=>"isThemeGetter"in l&&l.isThemeGetter===!0,sv=l=>{if(l<1)return{get:()=>{},set:()=>{}};let c=0,m=Object.create(null),u=Object.create(null);const b=(S,z)=>{m[S]=z,c++,c>l&&(c=0,u=m,m=Object.create(null))};return{get(S){let z=m[S];if(z!==void 0)return z;if((z=u[S])!==void 0)return b(S,z),z},set(S,z){S in m?m[S]=z:b(S,z)}}},Yn="!",mh=":",ov=[],hh=(l,c,m,u,b)=>({modifiers:l,hasImportantModifier:c,baseClassName:m,maybePostfixModifierPosition:u,isExternal:b}),iv=l=>{const{prefix:c,experimentalParseClassName:m}=l;let u=b=>{const S=[];let z=0,w=0,M=0,G;const k=b.length;for(let Y=0;Y<k;Y++){const W=b[Y];if(z===0&&w===0){if(W===mh){S.push(b.slice(M,Y)),M=Y+1;continue}if(W==="/"){G=Y;continue}}W==="["?z++:W==="]"?z--:W==="("?w++:W===")"&&w--}const I=S.length===0?b:b.slice(M);let F=I,re=!1;I.endsWith(Yn)?(F=I.slice(0,-1),re=!0):I.startsWith(Yn)&&(F=I.slice(1),re=!0);const X=G&&G>M?G-M:void 0;return hh(S,re,F,X)};if(c){const b=c+mh,S=u;u=z=>z.startsWith(b)?S(z.slice(b.length)):hh(ov,!1,z,void 0,!0)}if(m){const b=u;u=S=>m({className:S,parseClassName:b})}return u},rv=l=>{const c=new Map;return l.orderSensitiveModifiers.forEach((m,u)=>{c.set(m,1e6+u)}),m=>{const u=[];let b=[];for(let S=0;S<m.length;S++){const z=m[S],w=z[0]==="[",M=c.has(z);w||M?(b.length>0&&(b.sort(),u.push(...b),b=[]),u.push(z)):b.push(z)}return b.length>0&&(b.sort(),u.push(...b)),u}},lv=l=>({cache:sv(l.cacheSize),parseClassName:iv(l),sortModifiers:rv(l),...Kg(l)}),nv=/\s+/,cv=(l,c)=>{const{parseClassName:m,getClassGroupId:u,getConflictingClassGroupIds:b,sortModifiers:S}=c,z=[],w=l.trim().split(nv);let M="";for(let G=w.length-1;G>=0;G-=1){const k=w[G],{isExternal:I,modifiers:F,hasImportantModifier:re,baseClassName:X,maybePostfixModifierPosition:Y}=m(k);if(I){M=k+(M.length>0?" "+M:M);continue}let W=!!Y,ye=u(W?X.substring(0,Y):X);if(!ye){if(!W){M=k+(M.length>0?" "+M:M);continue}if(ye=u(X),!ye){M=k+(M.length>0?" "+M:M);continue}W=!1}const Le=F.length===0?"":F.length===1?F[0]:S(F).join(":"),ve=re?Le+Yn:Le,Me=ve+ye;if(z.indexOf(Me)>-1)continue;z.push(Me);const Ce=b(ye,W);for(let we=0;we<Ce.length;++we){const Ie=Ce[we];z.push(ve+Ie)}M=k+(M.length>0?" "+M:M)}return M},dv=(...l)=>{let c=0,m,u,b="";for(;c<l.length;)(m=l[c++])&&(u=Qh(m))&&(b&&(b+=" "),b+=u);return b},Qh=l=>{if(typeof l=="string")return l;let c,m="";for(let u=0;u<l.length;u++)l[u]&&(c=Qh(l[u]))&&(m&&(m+=" "),m+=c);return m},uv=(l,...c)=>{let m,u,b,S;const z=M=>{const G=c.reduce((k,I)=>I(k),l());return m=lv(G),u=m.cache.get,b=m.cache.set,S=w,w(M)},w=M=>{const G=u(M);if(G)return G;const k=cv(M,m);return b(M,k),k};return S=z,(...M)=>S(dv(...M))},mv=[],Ue=l=>{const c=m=>m[l]||mv;return c.isThemeGetter=!0,c},Yh=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Xh=/^\((?:(\w[\w-]*):)?(.+)\)$/i,hv=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,fv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,xv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,gv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,vv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,At=l=>hv.test(l),K=l=>!!l&&!Number.isNaN(Number(l)),Et=l=>!!l&&Number.isInteger(Number(l)),Ln=l=>l.endsWith("%")&&K(l.slice(0,-1)),Ja=l=>fv.test(l),Zh=()=>!0,bv=l=>pv.test(l)&&!xv.test(l),ic=()=>!1,jv=l=>gv.test(l),yv=l=>vv.test(l),Sv=l=>!C(l)&&!R(l),qv=l=>Ot(l,Ih,ic),C=l=>Yh.test(l),It=l=>Ot(l,Jh,bv),fh=l=>Ot(l,Tv,K),Av=l=>Ot(l,Wh,Zh),Ev=l=>Ot(l,$h,ic),ph=l=>Ot(l,Kh,ic),wv=l=>Ot(l,Ph,yv),mr=l=>Ot(l,ef,jv),R=l=>Xh.test(l),Qo=l=>Wt(l,Jh),Ov=l=>Wt(l,$h),xh=l=>Wt(l,Kh),zv=l=>Wt(l,Ih),Mv=l=>Wt(l,Ph),hr=l=>Wt(l,ef,!0),Nv=l=>Wt(l,Wh,!0),Ot=(l,c,m)=>{const u=Yh.exec(l);return u?u[1]?c(u[1]):m(u[2]):!1},Wt=(l,c,m=!1)=>{const u=Xh.exec(l);return u?u[1]?c(u[1]):m:!1},Kh=l=>l==="position"||l==="percentage",Ph=l=>l==="image"||l==="url",Ih=l=>l==="length"||l==="size"||l==="bg-size",Jh=l=>l==="length",Tv=l=>l==="number",$h=l=>l==="family-name",Wh=l=>l==="number"||l==="weight",ef=l=>l==="shadow",Dv=()=>{const l=Ue("color"),c=Ue("font"),m=Ue("text"),u=Ue("font-weight"),b=Ue("tracking"),S=Ue("leading"),z=Ue("breakpoint"),w=Ue("container"),M=Ue("spacing"),G=Ue("radius"),k=Ue("shadow"),I=Ue("inset-shadow"),F=Ue("text-shadow"),re=Ue("drop-shadow"),X=Ue("blur"),Y=Ue("perspective"),W=Ue("aspect"),ye=Ue("ease"),Le=Ue("animate"),ve=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Me=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Ce=()=>[...Me(),R,C],we=()=>["auto","hidden","clip","visible","scroll"],Ie=()=>["auto","contain","none"],U=()=>[R,C,M],Ne=()=>[At,"full","auto",...U()],zt=()=>[Et,"none","subgrid",R,C],Da=()=>["auto",{span:["full",Et,R,C]},Et,R,C],Fe=()=>[Et,"auto",R,C],Mt=()=>["auto","min","max","fr",R,C],Ca=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ze=()=>["start","end","center","stretch","center-safe","end-safe"],q=()=>["auto",...U()],N=()=>[At,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...U()],B=()=>[At,"screen","full","dvw","lvw","svw","min","max","fit",...U()],le=()=>[At,"screen","full","lh","dvh","lvh","svh","min","max","fit",...U()],T=()=>[l,R,C],Ge=()=>[...Me(),xh,ph,{position:[R,C]}],fe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],se=()=>["auto","cover","contain",zv,qv,{size:[R,C]}],qe=()=>[Ln,Qo,It],pe=()=>["","none","full",G,R,C],be=()=>["",K,Qo,It],Ra=()=>["solid","dashed","dotted","double"],Nt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ge=()=>[K,Ln,xh,ph],es=()=>["","none",X,R,C],ka=()=>["none",K,R,C],$a=()=>["none",K,R,C],Tt=()=>[K,R,C],Wa=()=>[At,"full",...U()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ja],breakpoint:[Ja],color:[Zh],container:[Ja],"drop-shadow":[Ja],ease:["in","out","in-out"],font:[Sv],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ja],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ja],shadow:[Ja],spacing:["px",K],text:[Ja],"text-shadow":[Ja],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",At,C,R,W]}],container:["container"],columns:[{columns:[K,C,R,w]}],"break-after":[{"break-after":ve()}],"break-before":[{"break-before":ve()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Ce()}],overflow:[{overflow:we()}],"overflow-x":[{"overflow-x":we()}],"overflow-y":[{"overflow-y":we()}],overscroll:[{overscroll:Ie()}],"overscroll-x":[{"overscroll-x":Ie()}],"overscroll-y":[{"overscroll-y":Ie()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Ne()}],"inset-x":[{"inset-x":Ne()}],"inset-y":[{"inset-y":Ne()}],start:[{"inset-s":Ne(),start:Ne()}],end:[{"inset-e":Ne(),end:Ne()}],"inset-bs":[{"inset-bs":Ne()}],"inset-be":[{"inset-be":Ne()}],top:[{top:Ne()}],right:[{right:Ne()}],bottom:[{bottom:Ne()}],left:[{left:Ne()}],visibility:["visible","invisible","collapse"],z:[{z:[Et,"auto",R,C]}],basis:[{basis:[At,"full","auto",w,...U()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[K,At,"auto","initial","none",C]}],grow:[{grow:["",K,R,C]}],shrink:[{shrink:["",K,R,C]}],order:[{order:[Et,"first","last","none",R,C]}],"grid-cols":[{"grid-cols":zt()}],"col-start-end":[{col:Da()}],"col-start":[{"col-start":Fe()}],"col-end":[{"col-end":Fe()}],"grid-rows":[{"grid-rows":zt()}],"row-start-end":[{row:Da()}],"row-start":[{"row-start":Fe()}],"row-end":[{"row-end":Fe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Mt()}],"auto-rows":[{"auto-rows":Mt()}],gap:[{gap:U()}],"gap-x":[{"gap-x":U()}],"gap-y":[{"gap-y":U()}],"justify-content":[{justify:[...Ca(),"normal"]}],"justify-items":[{"justify-items":[...Ze(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ze()]}],"align-content":[{content:["normal",...Ca()]}],"align-items":[{items:[...Ze(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ze(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ca()}],"place-items":[{"place-items":[...Ze(),"baseline"]}],"place-self":[{"place-self":["auto",...Ze()]}],p:[{p:U()}],px:[{px:U()}],py:[{py:U()}],ps:[{ps:U()}],pe:[{pe:U()}],pbs:[{pbs:U()}],pbe:[{pbe:U()}],pt:[{pt:U()}],pr:[{pr:U()}],pb:[{pb:U()}],pl:[{pl:U()}],m:[{m:q()}],mx:[{mx:q()}],my:[{my:q()}],ms:[{ms:q()}],me:[{me:q()}],mbs:[{mbs:q()}],mbe:[{mbe:q()}],mt:[{mt:q()}],mr:[{mr:q()}],mb:[{mb:q()}],ml:[{ml:q()}],"space-x":[{"space-x":U()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":U()}],"space-y-reverse":["space-y-reverse"],size:[{size:N()}],"inline-size":[{inline:["auto",...B()]}],"min-inline-size":[{"min-inline":["auto",...B()]}],"max-inline-size":[{"max-inline":["none",...B()]}],"block-size":[{block:["auto",...le()]}],"min-block-size":[{"min-block":["auto",...le()]}],"max-block-size":[{"max-block":["none",...le()]}],w:[{w:[w,"screen",...N()]}],"min-w":[{"min-w":[w,"screen","none",...N()]}],"max-w":[{"max-w":[w,"screen","none","prose",{screen:[z]},...N()]}],h:[{h:["screen","lh",...N()]}],"min-h":[{"min-h":["screen","lh","none",...N()]}],"max-h":[{"max-h":["screen","lh",...N()]}],"font-size":[{text:["base",m,Qo,It]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[u,Nv,Av]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ln,C]}],"font-family":[{font:[Ov,Ev,c]}],"font-features":[{"font-features":[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[b,R,C]}],"line-clamp":[{"line-clamp":[K,"none",R,fh]}],leading:[{leading:[S,...U()]}],"list-image":[{"list-image":["none",R,C]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",R,C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:T()}],"text-color":[{text:T()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ra(),"wavy"]}],"text-decoration-thickness":[{decoration:[K,"from-font","auto",R,It]}],"text-decoration-color":[{decoration:T()}],"underline-offset":[{"underline-offset":[K,"auto",R,C]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R,C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R,C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ge()}],"bg-repeat":[{bg:fe()}],"bg-size":[{bg:se()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Et,R,C],radial:["",R,C],conic:[Et,R,C]},Mv,wv]}],"bg-color":[{bg:T()}],"gradient-from-pos":[{from:qe()}],"gradient-via-pos":[{via:qe()}],"gradient-to-pos":[{to:qe()}],"gradient-from":[{from:T()}],"gradient-via":[{via:T()}],"gradient-to":[{to:T()}],rounded:[{rounded:pe()}],"rounded-s":[{"rounded-s":pe()}],"rounded-e":[{"rounded-e":pe()}],"rounded-t":[{"rounded-t":pe()}],"rounded-r":[{"rounded-r":pe()}],"rounded-b":[{"rounded-b":pe()}],"rounded-l":[{"rounded-l":pe()}],"rounded-ss":[{"rounded-ss":pe()}],"rounded-se":[{"rounded-se":pe()}],"rounded-ee":[{"rounded-ee":pe()}],"rounded-es":[{"rounded-es":pe()}],"rounded-tl":[{"rounded-tl":pe()}],"rounded-tr":[{"rounded-tr":pe()}],"rounded-br":[{"rounded-br":pe()}],"rounded-bl":[{"rounded-bl":pe()}],"border-w":[{border:be()}],"border-w-x":[{"border-x":be()}],"border-w-y":[{"border-y":be()}],"border-w-s":[{"border-s":be()}],"border-w-e":[{"border-e":be()}],"border-w-bs":[{"border-bs":be()}],"border-w-be":[{"border-be":be()}],"border-w-t":[{"border-t":be()}],"border-w-r":[{"border-r":be()}],"border-w-b":[{"border-b":be()}],"border-w-l":[{"border-l":be()}],"divide-x":[{"divide-x":be()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":be()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ra(),"hidden","none"]}],"divide-style":[{divide:[...Ra(),"hidden","none"]}],"border-color":[{border:T()}],"border-color-x":[{"border-x":T()}],"border-color-y":[{"border-y":T()}],"border-color-s":[{"border-s":T()}],"border-color-e":[{"border-e":T()}],"border-color-bs":[{"border-bs":T()}],"border-color-be":[{"border-be":T()}],"border-color-t":[{"border-t":T()}],"border-color-r":[{"border-r":T()}],"border-color-b":[{"border-b":T()}],"border-color-l":[{"border-l":T()}],"divide-color":[{divide:T()}],"outline-style":[{outline:[...Ra(),"none","hidden"]}],"outline-offset":[{"outline-offset":[K,R,C]}],"outline-w":[{outline:["",K,Qo,It]}],"outline-color":[{outline:T()}],shadow:[{shadow:["","none",k,hr,mr]}],"shadow-color":[{shadow:T()}],"inset-shadow":[{"inset-shadow":["none",I,hr,mr]}],"inset-shadow-color":[{"inset-shadow":T()}],"ring-w":[{ring:be()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:T()}],"ring-offset-w":[{"ring-offset":[K,It]}],"ring-offset-color":[{"ring-offset":T()}],"inset-ring-w":[{"inset-ring":be()}],"inset-ring-color":[{"inset-ring":T()}],"text-shadow":[{"text-shadow":["none",F,hr,mr]}],"text-shadow-color":[{"text-shadow":T()}],opacity:[{opacity:[K,R,C]}],"mix-blend":[{"mix-blend":[...Nt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Nt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[K]}],"mask-image-linear-from-pos":[{"mask-linear-from":ge()}],"mask-image-linear-to-pos":[{"mask-linear-to":ge()}],"mask-image-linear-from-color":[{"mask-linear-from":T()}],"mask-image-linear-to-color":[{"mask-linear-to":T()}],"mask-image-t-from-pos":[{"mask-t-from":ge()}],"mask-image-t-to-pos":[{"mask-t-to":ge()}],"mask-image-t-from-color":[{"mask-t-from":T()}],"mask-image-t-to-color":[{"mask-t-to":T()}],"mask-image-r-from-pos":[{"mask-r-from":ge()}],"mask-image-r-to-pos":[{"mask-r-to":ge()}],"mask-image-r-from-color":[{"mask-r-from":T()}],"mask-image-r-to-color":[{"mask-r-to":T()}],"mask-image-b-from-pos":[{"mask-b-from":ge()}],"mask-image-b-to-pos":[{"mask-b-to":ge()}],"mask-image-b-from-color":[{"mask-b-from":T()}],"mask-image-b-to-color":[{"mask-b-to":T()}],"mask-image-l-from-pos":[{"mask-l-from":ge()}],"mask-image-l-to-pos":[{"mask-l-to":ge()}],"mask-image-l-from-color":[{"mask-l-from":T()}],"mask-image-l-to-color":[{"mask-l-to":T()}],"mask-image-x-from-pos":[{"mask-x-from":ge()}],"mask-image-x-to-pos":[{"mask-x-to":ge()}],"mask-image-x-from-color":[{"mask-x-from":T()}],"mask-image-x-to-color":[{"mask-x-to":T()}],"mask-image-y-from-pos":[{"mask-y-from":ge()}],"mask-image-y-to-pos":[{"mask-y-to":ge()}],"mask-image-y-from-color":[{"mask-y-from":T()}],"mask-image-y-to-color":[{"mask-y-to":T()}],"mask-image-radial":[{"mask-radial":[R,C]}],"mask-image-radial-from-pos":[{"mask-radial-from":ge()}],"mask-image-radial-to-pos":[{"mask-radial-to":ge()}],"mask-image-radial-from-color":[{"mask-radial-from":T()}],"mask-image-radial-to-color":[{"mask-radial-to":T()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Me()}],"mask-image-conic-pos":[{"mask-conic":[K]}],"mask-image-conic-from-pos":[{"mask-conic-from":ge()}],"mask-image-conic-to-pos":[{"mask-conic-to":ge()}],"mask-image-conic-from-color":[{"mask-conic-from":T()}],"mask-image-conic-to-color":[{"mask-conic-to":T()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ge()}],"mask-repeat":[{mask:fe()}],"mask-size":[{mask:se()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",R,C]}],filter:[{filter:["","none",R,C]}],blur:[{blur:es()}],brightness:[{brightness:[K,R,C]}],contrast:[{contrast:[K,R,C]}],"drop-shadow":[{"drop-shadow":["","none",re,hr,mr]}],"drop-shadow-color":[{"drop-shadow":T()}],grayscale:[{grayscale:["",K,R,C]}],"hue-rotate":[{"hue-rotate":[K,R,C]}],invert:[{invert:["",K,R,C]}],saturate:[{saturate:[K,R,C]}],sepia:[{sepia:["",K,R,C]}],"backdrop-filter":[{"backdrop-filter":["","none",R,C]}],"backdrop-blur":[{"backdrop-blur":es()}],"backdrop-brightness":[{"backdrop-brightness":[K,R,C]}],"backdrop-contrast":[{"backdrop-contrast":[K,R,C]}],"backdrop-grayscale":[{"backdrop-grayscale":["",K,R,C]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[K,R,C]}],"backdrop-invert":[{"backdrop-invert":["",K,R,C]}],"backdrop-opacity":[{"backdrop-opacity":[K,R,C]}],"backdrop-saturate":[{"backdrop-saturate":[K,R,C]}],"backdrop-sepia":[{"backdrop-sepia":["",K,R,C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":U()}],"border-spacing-x":[{"border-spacing-x":U()}],"border-spacing-y":[{"border-spacing-y":U()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",R,C]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[K,"initial",R,C]}],ease:[{ease:["linear","initial",ye,R,C]}],delay:[{delay:[K,R,C]}],animate:[{animate:["none",Le,R,C]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[Y,R,C]}],"perspective-origin":[{"perspective-origin":Ce()}],rotate:[{rotate:ka()}],"rotate-x":[{"rotate-x":ka()}],"rotate-y":[{"rotate-y":ka()}],"rotate-z":[{"rotate-z":ka()}],scale:[{scale:$a()}],"scale-x":[{"scale-x":$a()}],"scale-y":[{"scale-y":$a()}],"scale-z":[{"scale-z":$a()}],"scale-3d":["scale-3d"],skew:[{skew:Tt()}],"skew-x":[{"skew-x":Tt()}],"skew-y":[{"skew-y":Tt()}],transform:[{transform:[R,C,"","none","gpu","cpu"]}],"transform-origin":[{origin:Ce()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Wa()}],"translate-x":[{"translate-x":Wa()}],"translate-y":[{"translate-y":Wa()}],"translate-z":[{"translate-z":Wa()}],"translate-none":["translate-none"],accent:[{accent:T()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:T()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R,C]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mbs":[{"scroll-mbs":U()}],"scroll-mbe":[{"scroll-mbe":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pbs":[{"scroll-pbs":U()}],"scroll-pbe":[{"scroll-pbe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R,C]}],fill:[{fill:["none",...T()]}],"stroke-w":[{stroke:[K,Qo,It,fh]}],stroke:[{stroke:["none",...T()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Cv=uv(Dv);function Xo(...l){return Cv(Qg(l))}const Rv=[{title:"Introdução",items:[{path:"/",label:"Início",icon:gh},{path:"/historia",label:"O que é Fedora",icon:zx},{path:"/instalacao",label:"Instalação",icon:Xn},{path:"/primeiros-passos",label:"Primeiros Passos",icon:$t}]},{title:"Gerenciamento de Pacotes",items:[{path:"/dnf",label:"DNF — Gerenciador de Pacotes",icon:Hs},{path:"/flatpak",label:"Flatpak e Flathub",icon:Zn},{path:"/rpm",label:"Formato RPM",icon:vh},{path:"/atualizacao",label:"Atualização do Sistema",icon:Po}]},{title:"Interface e Terminal",items:[{path:"/gnome",label:"Interface GNOME",icon:_s},{path:"/terminal",label:"Terminal e Bash",icon:$t},{path:"/pipes",label:"Pipes e Redirecionamento",icon:bh},{path:"/shell-scripting",label:"Shell Scripting",icon:jh}]},{title:"Sistema de Arquivos",items:[{path:"/navegacao",label:"Navegação no Sistema",icon:yh},{path:"/manipulacao-arquivos",label:"Manipulação de Arquivos",icon:Kn},{path:"/visualizacao",label:"Visualização de Arquivos",icon:Pn},{path:"/arquivos",label:"Estrutura FHS",icon:In},{path:"/btrfs",label:"Btrfs — Filesystem Padrão",icon:Fs}]},{title:"Administração",items:[{path:"/usuarios",label:"Usuários e Grupos",icon:xr},{path:"/permissoes",label:"Permissões",icon:Qs},{path:"/processos",label:"Processos e Gerenciamento",icon:Mx},{path:"/servicos",label:"Systemd e Serviços",icon:Jn},{path:"/rede",label:"Configuração de Rede",icon:Sh},{path:"/ssh",label:"SSH — Acesso Remoto",icon:gr},{path:"/firewall",label:"Firewall e SELinux",icon:qh}]},{title:"Desenvolvimento",items:[{path:"/desenvolvimento",label:"Ambiente de Desenvolvimento",icon:$n},{path:"/containers",label:"Podman e Containers",icon:Wn}]},{title:"Extras",items:[{path:"/seguranca",label:"Segurança do Sistema",icon:Ah},{path:"/troubleshooting",label:"Troubleshooting",icon:Eh},{path:"/flags",label:"Flags, Parâmetros e --help",icon:Vn},{path:"/dicas",label:"Dicas e Truques",icon:wh},{path:"/referencias",label:"Referências",icon:Oh}]}];function kv({isOpen:l,setIsOpen:c}){const[m]=wx();return t.jsxs(t.Fragment,{children:[l&&t.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden",onClick:()=>c(!1)}),t.jsx("aside",{className:Xo("fixed top-0 bottom-0 left-0 z-50 w-72 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",l?"translate-x-0":"-translate-x-full"),children:t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"flex items-center justify-between lg:justify-center mb-8",children:[t.jsxs(Bs,{href:"/",className:"flex items-center gap-3 group",children:[t.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:t.jsx(wt,{className:"w-5 h-5 text-primary"})}),t.jsxs("div",{children:[t.jsx("h2",{className:"text-lg font-bold mt-0 mb-0 pb-0 border-0 leading-tight",children:"Fedora"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"Guia Completo"})]})]}),t.jsx("button",{className:"lg:hidden p-2 text-muted-foreground hover:text-foreground",onClick:()=>c(!1),children:t.jsx(Ox,{className:"w-5 h-5"})})]}),t.jsx("nav",{className:"space-y-8",children:Rv.map((u,b)=>t.jsxs("div",{children:[t.jsx("h4",{className:"text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3 mt-0 border-0 pb-0",children:u.title}),t.jsx("ul",{className:"space-y-1",children:u.items.map((S,z)=>{const w=m===S.path,M=S.icon;return t.jsx("li",{children:t.jsxs(Bs,{href:S.path,onClick:()=>c(!1),className:Xo("flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200",w?"bg-primary/10 text-primary font-medium":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[t.jsx(M,{className:Xo("w-4 h-4 shrink-0",w?"text-primary":"opacity-70")}),t.jsx("span",{className:"truncate",children:S.label}),w&&t.jsx(Bn,{className:"w-3 h-3 ml-auto text-primary shrink-0"})]})},z)})})]},b))})]})})]})}function Uv({onMenuClick:l}){const{theme:c,setTheme:m}=Nx();return t.jsxs("header",{className:"sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border h-14 flex items-center px-4 gap-4",children:[t.jsx("button",{onClick:l,className:"lg:hidden p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors","aria-label":"Abrir menu",children:t.jsx(Tx,{className:"w-5 h-5"})}),t.jsxs("div",{className:"flex items-center gap-2 lg:hidden",children:[t.jsx("div",{className:"w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center",children:t.jsx(wt,{className:"w-4 h-4 text-primary"})}),t.jsx("span",{className:"font-bold text-sm",children:"Fedora Guide"})]}),t.jsxs("div",{className:"ml-auto flex items-center gap-3",children:[t.jsxs("span",{className:"text-xs text-muted-foreground hidden sm:block font-mono",children:["[user@fedora ~]$ ",t.jsx("span",{className:"text-primary animate-pulse",children:"▋"})]}),t.jsx("button",{onClick:()=>m(c==="dark"?"light":"dark"),className:"p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors","aria-label":"Alternar tema",title:c==="dark"?"Mudar para tema claro":"Mudar para tema escuro",children:c==="dark"?t.jsx(Dx,{className:"w-4 h-4"}):t.jsx(Cx,{className:"w-4 h-4"})})]})]})}function Lv(){const l=[{title:"Fundamentos",icon:t.jsx(wt,{className:"w-6 h-6 text-blue-400"}),description:"Entenda o Fedora, sua filosofia e como começar do zero.",links:[{name:"O que é Fedora",href:"/historia"},{name:"Instalação",href:"/instalacao"},{name:"Primeiros Passos",href:"/primeiros-passos"}]},{title:"Gerenciamento de Pacotes",icon:t.jsx(Hs,{className:"w-6 h-6 text-green-400"}),description:"Instale, atualize e remova software com DNF, Flatpak e RPM.",links:[{name:"DNF — Gerenciador de Pacotes",href:"/dnf"},{name:"Flatpak e Flathub",href:"/flatpak"},{name:"Formato RPM",href:"/rpm"},{name:"Atualização do Sistema",href:"/atualizacao"}]},{title:"Interface e Terminal",icon:t.jsx(_s,{className:"w-6 h-6 text-purple-400"}),description:"Domine o GNOME e o terminal Bash para produtividade máxima.",links:[{name:"Interface GNOME",href:"/gnome"},{name:"Terminal e Bash",href:"/terminal"}]},{title:"Sistema de Arquivos",icon:t.jsx(Fs,{className:"w-6 h-6 text-yellow-400"}),description:"Navegue, organize arquivos e domine o Btrfs.",links:[{name:"Sistema de Arquivos",href:"/arquivos"},{name:"Btrfs — Filesystem Padrão",href:"/btrfs"}]},{title:"Administração",icon:t.jsx(Qs,{className:"w-6 h-6 text-red-400"}),description:"Usuários, permissões, serviços, rede e segurança.",links:[{name:"Usuários e Grupos",href:"/usuarios"},{name:"Permissões",href:"/permissoes"},{name:"Processos e Gerenciamento",href:"/processos"},{name:"Systemd e Serviços",href:"/servicos"},{name:"Configuração de Rede",href:"/rede"},{name:"Firewall e SELinux",href:"/firewall"}]},{title:"Desenvolvimento",icon:t.jsx($n,{className:"w-6 h-6 text-cyan-400"}),description:"Configure seu ambiente dev e use containers com Podman.",links:[{name:"Ambiente de Desenvolvimento",href:"/desenvolvimento"},{name:"Podman e Containers",href:"/containers"}]}];return t.jsx("div",{className:"max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-24",children:t.jsxs(Gn.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.5},children:[t.jsxs("div",{className:"text-center mb-16",children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx("div",{className:"w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center",children:t.jsx(wt,{className:"w-10 h-10 text-primary"})})}),t.jsxs("h1",{className:"text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6 border-0",children:["Guia Completo do ",t.jsx("span",{className:"text-primary",children:"Fedora"})]}),t.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:"Do zero ao avançado — aprenda a usar, administrar e desenvolver no Fedora Linux em Português Brasileiro."}),t.jsxs("div",{className:"flex flex-wrap justify-center gap-3 mt-8",children:[t.jsx(Bs,{href:"/historia",children:t.jsxs("button",{className:"px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2",children:["Começar agora ",t.jsx(Bn,{className:"w-4 h-4"})]})}),t.jsx(Bs,{href:"/instalacao",children:t.jsxs("button",{className:"px-6 py-3 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition-colors flex items-center gap-2",children:[t.jsx(Xn,{className:"w-4 h-4"})," Instalação"]})})]})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:[{icon:t.jsx(Hs,{className:"w-5 h-5"}),label:"DNF & Flatpak",color:"text-green-400"},{icon:t.jsx(_s,{className:"w-5 h-5"}),label:"GNOME 4x",color:"text-purple-400"},{icon:t.jsx(Qs,{className:"w-5 h-5"}),label:"SELinux & Firewall",color:"text-red-400"},{icon:t.jsx(Fs,{className:"w-5 h-5"}),label:"Btrfs nativo",color:"text-yellow-400"},{icon:t.jsx(Wn,{className:"w-5 h-5"}),label:"Podman & Containers",color:"text-cyan-400"},{icon:t.jsx(Po,{className:"w-5 h-5"}),label:"Atualizações fáceis",color:"text-blue-400"}].map((c,m)=>t.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-xl bg-card border border-border",children:[t.jsx("div",{className:c.color,children:c.icon}),t.jsx("span",{className:"font-medium text-sm",children:c.label})]},m))}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:l.map((c,m)=>t.jsxs(Gn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:m*.07},className:"p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors",children:[t.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0",children:c.icon}),t.jsxs("div",{children:[t.jsx("h3",{className:"font-bold text-foreground mb-1 mt-0 border-0",children:c.title}),t.jsx("p",{className:"text-sm text-muted-foreground",children:c.description})]})]}),t.jsx("ul",{className:"space-y-1",children:c.links.map((u,b)=>t.jsx("li",{children:t.jsxs(Bs,{href:u.href,className:"flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1",children:[t.jsx(Bn,{className:"w-3 h-3 text-primary/50"}),u.name]})},b))})]},m))})]})})}function Gv({level:l}){const c={iniciante:"bg-green-500/10 text-green-500 border-green-500/20",intermediario:"bg-yellow-500/10 text-yellow-500 border-yellow-500/20",avancado:"bg-red-500/10 text-red-500 border-red-500/20"},m={iniciante:"Iniciante",intermediario:"Intermediário",avancado:"Avançado"};return t.jsx("span",{className:Xo("px-3 py-1 text-xs font-semibold rounded-full border",c[l]),children:m[l]})}function ie({title:l,subtitle:c,difficulty:m,timeToRead:u,children:b}){const[S,z]=Jt.useState(0);return Jt.useEffect(()=>{const w=()=>{const M=document.documentElement.scrollTop,G=document.documentElement.scrollHeight-document.documentElement.clientHeight,k=`${M/G}`;z(Number(k))};return window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w)},[]),t.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 pb-24",children:[t.jsx("div",{className:"fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out",style:{width:`${S*100}%`}}),t.jsxs(Gn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[t.jsxs("header",{className:"mb-12",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-4",children:[m&&t.jsx(Gv,{level:m}),u&&t.jsxs("span",{className:"text-sm text-muted-foreground font-medium flex items-center gap-1.5",children:["⏱ ",u," de leitura"]})]}),t.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4",children:l}),c&&t.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:c})]}),t.jsx("div",{className:"prose prose-invert max-w-none",children:b})]})]})}const Vv={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};function f({code:l,language:c="bash",title:m}){const[u,b]=Jt.useState(!1),S=()=>{navigator.clipboard.writeText(l),b(!0),setTimeout(()=>b(!1),2e3)};return t.jsxs("div",{className:"my-6 rounded-xl overflow-hidden bg-[#0d0d0d] border border-border shadow-lg",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-white/5",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsxs("div",{className:"flex gap-1.5",children:[t.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),t.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),m?t.jsx("span",{className:"ml-2 text-xs font-mono text-gray-400",children:m}):t.jsx("span",{className:"ml-2 text-xs font-mono text-gray-500 lowercase",children:c})]}),t.jsx("button",{onClick:S,className:"p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors",title:"Copiar código",children:u?t.jsx(Rx,{className:"w-4 h-4 text-green-400"}):t.jsx(Kn,{className:"w-4 h-4"})})]}),t.jsx("div",{className:"p-4 text-sm font-mono overflow-x-auto",children:t.jsx(rg,{language:c,style:Vv,customStyle:{margin:0,padding:0,background:"transparent"},wrapLines:!0,children:l.trim()})})]})}const Bv={info:"bg-blue-500/10 border-blue-500/20 text-blue-400",warning:"bg-yellow-500/10 border-yellow-500/20 text-yellow-400",danger:"bg-red-500/10 border-red-500/20 text-red-400",success:"bg-green-500/10 border-green-500/20 text-green-400"},Hv={info:Nh,warning:Mh,danger:zh,success:kx};function Q({type:l="info",title:c,children:m,className:u}){const b=Hv[l];return t.jsxs("div",{className:Xo("rounded-xl border p-5 my-6 flex gap-4 items-start",Bv[l],u),children:[t.jsx(b,{className:"w-6 h-6 shrink-0 mt-0.5"}),t.jsxs("div",{className:"flex-1",children:[t.jsx("h5",{className:"font-semibold text-foreground mb-1",children:c}),t.jsx("div",{className:"text-sm opacity-90 leading-relaxed text-foreground/80",children:m})]})]})}function _v(){return t.jsxs(ie,{title:"O que é Fedora",subtitle:"Conheça a distribuição que impulsiona a inovação no mundo Linux — sua história, filosofia e relação com a Red Hat.",difficulty:"iniciante",timeToRead:"20 min",children:[t.jsxs("h2",{children:[t.jsx(wt,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O Projeto Fedora"]}),t.jsxs("p",{children:["O Fedora é uma distribuição Linux comunitária patrocinada pela ",t.jsx("strong",{children:"Red Hat"})," (subsidiária da IBM). Lançado em 2003, o Fedora nasceu como continuação do Red Hat Linux após a empresa dividir seu produto em duas linhas: o Fedora (gratuito, experimental) e o Red Hat Enterprise Linux — RHEL (comercial, estável)."]}),t.jsxs("p",{children:["O Fedora serve como ",t.jsx("strong",{children:"laboratório de inovação"}),": tecnologias que são testadas e amadurecidas no Fedora frequentemente são incorporadas ao RHEL e, por consequência, ao ",t.jsx("strong",{children:"CentOS Stream"})," e ao ",t.jsx("strong",{children:"AlmaLinux"}),". Isso significa que usar Fedora é estar na vanguarda do ecossistema Linux enterprise."]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6",children:[{icon:t.jsx(Io,{className:"w-5 h-5 text-blue-400"}),title:"Freedom",desc:"Software 100% livre. O Fedora não inclui drivers proprietários por padrão — tudo é open source."},{icon:t.jsx(xr,{className:"w-5 h-5 text-green-400"}),title:"Friends",desc:"Comunidade global ativa com SIGs (Special Interest Groups) para cada área de interesse."},{icon:t.jsx(vr,{className:"w-5 h-5 text-yellow-400"}),title:"Features",desc:"Sempre na vanguarda: últimas versões do kernel, GNOME, Wayland, Pipewire e muito mais."},{icon:t.jsx(wt,{className:"w-5 h-5 text-purple-400"}),title:"First",desc:"Pioneiro em adotar novas tecnologias antes de qualquer outra distro mainstream."}].map((l,c)=>t.jsxs("div",{className:"p-4 rounded-xl border border-border bg-card",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[l.icon,t.jsx("h4",{className:"font-bold mt-0 mb-0 border-0",children:l.title})]}),t.jsx("p",{className:"text-sm text-muted-foreground mb-0",children:l.desc})]},c))}),t.jsx("h2",{children:"Versões e Ciclo de Lançamento"}),t.jsxs("p",{children:["O Fedora lança uma nova versão a cada aproximadamente ",t.jsx("strong",{children:"6 meses"}),". Cada versão recebe suporte por cerca de ",t.jsx("strong",{children:"13 meses"})," (até a versão seguinte + 1 mês). Isso exige atualizações periódicas de versão para permanecer suportado."]}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Edição"}),t.jsx("th",{children:"Foco"}),t.jsx("th",{children:"Público"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora Workstation"})}),t.jsx("td",{children:"Desktop com GNOME"}),t.jsx("td",{children:"Usuários e desenvolvedores"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora Server"})}),t.jsx("td",{children:"Servidores e infraestrutura"}),t.jsx("td",{children:"Administradores"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora IoT"})}),t.jsx("td",{children:"Internet das Coisas"}),t.jsx("td",{children:"Dispositivos embarcados"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora Cloud"})}),t.jsx("td",{children:"Imagens para nuvem"}),t.jsx("td",{children:"DevOps e cloud"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora CoreOS"})}),t.jsx("td",{children:"Containers e imutabilidade"}),t.jsx("td",{children:"Kubernetes e containers"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora Silverblue"})}),t.jsx("td",{children:"Desktop imutável"}),t.jsx("td",{children:"Usuários que querem estabilidade máxima"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora Spins"})}),t.jsx("td",{children:"Outros ambientes gráficos"}),t.jsx("td",{children:"KDE, XFCE, LXQt, Cinnamon..."})]})]})]}),t.jsx("h2",{children:"Fedora vs. outras distribuições"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Distro"}),t.jsx("th",{children:"Base"}),t.jsx("th",{children:"Pacotes"}),t.jsx("th",{children:"Ciclo"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Fedora"})}),t.jsx("td",{children:"Independente"}),t.jsx("td",{children:"RPM / DNF"}),t.jsx("td",{children:"~6 meses"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Ubuntu"}),t.jsx("td",{children:"Debian"}),t.jsx("td",{children:"DEB / APT"}),t.jsx("td",{children:"6 meses / LTS"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Arch Linux"}),t.jsx("td",{children:"Independente"}),t.jsx("td",{children:"Pacman"}),t.jsx("td",{children:"Rolling Release"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"RHEL"}),t.jsx("td",{children:"Fedora"}),t.jsx("td",{children:"RPM / DNF"}),t.jsx("td",{children:"10 anos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"openSUSE"}),t.jsx("td",{children:"Independente"}),t.jsx("td",{children:"RPM / Zypper"}),t.jsx("td",{children:"Variado"})]})]})]}),t.jsx(Q,{type:"info",title:"Por que escolher Fedora?",children:"Fedora é ideal para quem quer software atualizado, aprende tecnologias que chegam ao ambiente enterprise (RHEL/CentOS) e valoriza o software livre. É a escolha preferida de muitos desenvolvedores e usuários avançados de Linux."}),t.jsx("h2",{children:"Verificar a versão instalada"}),t.jsx(f,{code:`# Ver versão do Fedora
cat /etc/fedora-release

# Informações completas do sistema
cat /etc/os-release

# Versão do kernel
uname -r

# Arquitetura
uname -m`,language:"bash",title:"informações do sistema"})]})}function Fv(){return t.jsxs(ie,{title:"Instalação do Fedora",subtitle:"Passo a passo completo para instalar o Fedora Workstation do zero — desde o download até o primeiro boot.",difficulty:"iniciante",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Xn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Baixando o Fedora"]}),t.jsxs("p",{children:["Acesse ",t.jsx("strong",{children:"getfedora.org"})," e baixe a imagem ISO do ",t.jsx("strong",{children:"Fedora Workstation"})," (a edição desktop com GNOME). A imagem tem cerca de 2 GB."]}),t.jsxs(Q,{type:"info",title:"Qual edição baixar?",children:["Para uso desktop, baixe ",t.jsx("strong",{children:"Fedora Workstation"}),". Para servidores, use o ",t.jsx("strong",{children:"Fedora Server"}),". Para experimentar um desktop imutável, tente o ",t.jsx("strong",{children:"Fedora Silverblue"}),"."]}),t.jsxs("h2",{children:[t.jsx(Fs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Criando o Pendrive Bootável"]}),t.jsxs("p",{children:["Use o ",t.jsx("strong",{children:"Fedora Media Writer"})," (disponível para Windows, macOS e Linux) — é a forma mais simples e recomendada."]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 my-6",children:[t.jsxs("div",{className:"p-4 border border-border rounded-xl bg-card",children:[t.jsx("h4",{className:"font-bold mb-2 mt-0 border-0",children:"Fedora Media Writer"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Ferramenta oficial. Baixe em flathub.org ou no site do Fedora. Suporta Windows e Linux."})]}),t.jsxs("div",{className:"p-4 border border-border rounded-xl bg-card",children:[t.jsx("h4",{className:"font-bold mb-2 mt-0 border-0",children:"Balena Etcher"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Alternativa popular e fácil de usar. Disponível em balena.io/etcher para todos os sistemas."})]}),t.jsxs("div",{className:"p-4 border border-border rounded-xl bg-card",children:[t.jsx("h4",{className:"font-bold mb-2 mt-0 border-0",children:"dd (Linux/macOS)"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Método via terminal. Poderoso mas exige cuidado para não apagar o disco errado."})]}),t.jsxs("div",{className:"p-4 border border-border rounded-xl bg-card",children:[t.jsx("h4",{className:"font-bold mb-2 mt-0 border-0",children:"Rufus (Windows)"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Popular no Windows. Use o modo DD Image para criar o pendrive corretamente."})]})]}),t.jsxs("p",{children:["Via terminal (Linux/macOS), substitua ",t.jsx("code",{children:"/dev/sdX"})," pelo seu pendrive:"]}),t.jsx(f,{code:`# Criar pendrive bootável com dd (CUIDADO: apaga todos os dados do pendrive)
sudo dd if=Fedora-Workstation-Live.iso of=/dev/sdX bs=4M status=progress oflag=sync`,language:"bash",title:"criando pendrive bootável"}),t.jsxs(Q,{type:"danger",title:"Atenção!",children:["Verifique com cuidado o dispositivo correto (",t.jsx("code",{children:"lsblk"})," ou ",t.jsx("code",{children:"fdisk -l"}),"). O comando ",t.jsx("code",{children:"dd"})," apagará tudo no disco especificado sem confirmação."]}),t.jsxs("h2",{children:[t.jsx(_s,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Processo de Instalação (Anaconda)"]}),t.jsxs("p",{children:["O instalador do Fedora se chama ",t.jsx("strong",{children:"Anaconda"}),". Siga os passos abaixo:"]}),t.jsxs("ol",{children:[t.jsx("li",{children:"Inicie o computador pelo pendrive (F12, F2, Del ou ESC no boot)"}),t.jsxs("li",{children:["Selecione ",t.jsx("strong",{children:'"Start Fedora Workstation Live"'})]}),t.jsxs("li",{children:["No ambiente live, clique em ",t.jsx("strong",{children:'"Install to Hard Drive"'})]}),t.jsxs("li",{children:["Selecione o ",t.jsx("strong",{children:"idioma"})," (Português do Brasil)"]}),t.jsxs("li",{children:["Configure o ",t.jsx("strong",{children:"fuso horário"})," (America/Sao_Paulo)"]}),t.jsxs("li",{children:["Configure o ",t.jsx("strong",{children:"teclado"})," (Português - Brasil)"]}),t.jsxs("li",{children:["Configure o ",t.jsx("strong",{children:"destino de instalação"})," (particionamento)"]}),t.jsxs("li",{children:["Clique em ",t.jsx("strong",{children:'"Iniciar Instalação"'})]}),t.jsx("li",{children:"Aguarde a instalação terminar e reinicie"})]}),t.jsx("h2",{children:"Particionamento Recomendado"}),t.jsxs(Q,{type:"info",title:"Particionamento automático",children:["Para iniciantes, o particionamento automático do Anaconda funciona muito bem. Ele usará Btrfs com subvolumes ",t.jsx("code",{children:"@"})," (raiz) e ",t.jsx("code",{children:"@home"})," automaticamente."]}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Partição"}),t.jsx("th",{children:"Tamanho"}),t.jsx("th",{children:"Tipo"}),t.jsx("th",{children:"Ponto de Montagem"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"EFI"}),t.jsx("td",{children:"600 MB"}),t.jsx("td",{children:"FAT32"}),t.jsx("td",{children:"/boot/efi"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Boot"}),t.jsx("td",{children:"1 GB"}),t.jsx("td",{children:"ext4"}),t.jsx("td",{children:"/boot"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Root"}),t.jsx("td",{children:"resto do disco"}),t.jsx("td",{children:"Btrfs"}),t.jsx("td",{children:"/"})]})]})]}),t.jsxs("h2",{children:[t.jsx(Th,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Pós-instalação"]}),t.jsx(f,{code:`# Atualizar o sistema logo após instalar
sudo dnf update -y

# Instalar o RPM Fusion (repositórios com mais pacotes)
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Instalar codecs multimídia
sudo dnf install @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin

# Instalar suporte a fontes da Microsoft
sudo dnf install curl cabextract xorg-x11-font-utils fontconfig
sudo rpm -i https://downloads.sourceforge.net/project/mscorefonts2/rpms/msttcore-fonts-installer-2.6-1.noarch.rpm`,language:"bash",title:"pós-instalação essencial"})]})}function Qv(){return t.jsxs(ie,{title:"Primeiros Passos",subtitle:"O que fazer assim que o Fedora é instalado — configurações iniciais, terminal, sudo e ajuste do sistema.",difficulty:"iniciante",timeToRead:"25 min",children:[t.jsxs("h2",{children:[t.jsx($t,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Abrindo o Terminal"]}),t.jsx("p",{children:"No GNOME, você pode abrir o terminal de várias formas:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Pressione ",t.jsx("code",{children:"Ctrl + Alt + T"})," (atalho padrão)"]}),t.jsxs("li",{children:["Abra o menu de aplicativos (Super) e busque por ",t.jsx("strong",{children:"Terminal"})]}),t.jsxs("li",{children:["Clique com o botão direito na área de trabalho → ",t.jsx("strong",{children:"Abrir no Terminal"})]}),t.jsxs("li",{children:["Use o ",t.jsx("strong",{children:"GNOME Console"})," (kgx) — terminal moderno incluído por padrão"]})]}),t.jsxs("h2",{children:[t.jsx(ec,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Configurações Iniciais Essenciais"]}),t.jsx("h3",{children:"1. Atualizar o Sistema"}),t.jsx(f,{code:`# Sempre atualize logo após instalar
sudo dnf update -y

# Verificar se há atualizações sem instalar
sudo dnf check-update`,language:"bash",title:"atualização do sistema"}),t.jsx("h3",{children:"2. Configurar o hostname"}),t.jsx(f,{code:`# Ver hostname atual
hostnamectl

# Definir um novo hostname
sudo hostnamectl set-hostname meu-fedora

# Verificar alteração
hostname`,language:"bash",title:"hostname"}),t.jsx("h3",{children:"3. Instalar o RPM Fusion"}),t.jsx("p",{children:"O RPM Fusion é um repositório essencial que adiciona pacotes não incluídos no Fedora por questões de licença (codecs, drivers NVIDIA, etc.)."}),t.jsx(f,{code:`# Repositório free (licenças livres, mas não no Fedora por outras razões)
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm

# Repositório nonfree (drivers proprietários como NVIDIA)
sudo dnf install https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Verificar repositórios habilitados
dnf repolist`,language:"bash",title:"rpm fusion"}),t.jsx("h3",{children:"4. Instalar codecs multimídia"}),t.jsx(f,{code:`# Instalar pacote de multimídia completo
sudo dnf install @multimedia --setopt="install_weak_deps=False"

# Suporte a formatos de vídeo adicionais (após habilitar RPM Fusion)
sudo dnf install gstreamer1-plugins-{bad-*,good-*,base} gstreamer1-plugin-openh264 gstreamer1-libav --exclude=gstreamer1-plugins-bad-free-devel

# Codecs de áudio
sudo dnf install lame* --exclude=lame-devel`,language:"bash",title:"multimídia"}),t.jsxs("h2",{children:[t.jsx(Dh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Comandos Básicos do Terminal"]}),t.jsx(f,{code:`# Navegar entre diretórios
cd /home/usuario     # ir para um diretório
cd ~                 # ir para home
cd ..                # voltar um nível
cd -                 # voltar ao diretório anterior

# Listar arquivos
ls                   # listar arquivos
ls -la               # listar com detalhes (incluindo ocultos)
ls -lh               # tamanhos legíveis por humanos

# Criar e remover
mkdir pasta          # criar diretório
rmdir pasta          # remover diretório vazio
rm arquivo.txt       # remover arquivo
rm -rf pasta/        # remover pasta e conteúdo (CUIDADO!)

# Copiar e mover
cp origem destino    # copiar
mv origem destino    # mover/renomear

# Ver conteúdo
cat arquivo.txt      # mostrar conteúdo
less arquivo.txt     # paginar conteúdo
head -n 10 arquivo   # primeiras 10 linhas
tail -n 10 arquivo   # últimas 10 linhas

# Informações do sistema
df -h                # uso de disco
free -h              # uso de memória
top                  # processos em tempo real
htop                 # versão melhorada do top`,language:"bash",title:"comandos essenciais"}),t.jsxs(Q,{type:"info",title:"sudo — Execute como root",children:["No Fedora, você não usa a conta ",t.jsx("code",{children:"root"})," diretamente. Para comandos administrativos, use ",t.jsx("code",{children:"sudo"})," antes do comando. Seu usuário foi adicionado ao grupo ",t.jsx("code",{children:"wheel"})," durante a instalação, o que permite usar o sudo."]}),t.jsx("h2",{children:"Descoberta de Informações do Sistema"}),t.jsx(f,{code:`# Versão do Fedora
cat /etc/fedora-release

# Informações detalhadas do hardware
sudo dmidecode | head -50

# Processador
lscpu

# Memória RAM
free -h

# Discos
lsblk
df -h

# Placa de vídeo
lspci | grep -i vga

# Placa de rede
ip link show
nmcli device status`,language:"bash",title:"informações do sistema"})]})}function Yv(){return t.jsxs(ie,{title:"DNF — Gerenciador de Pacotes",subtitle:"Domine o DNF para instalar, remover, atualizar e gerenciar softwares no Fedora de forma profissional.",difficulty:"iniciante",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Hs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é o DNF?"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"DNF"})," (Dandified YUM) é o gerenciador de pacotes oficial do Fedora. Ele substitui o antigo YUM e oferece melhor desempenho, resolução de dependências mais inteligente e uso de metadados em cache."]}),t.jsx("h2",{children:"Operações Básicas"}),t.jsx("h3",{children:"Instalação de Pacotes"}),t.jsx(f,{code:`# Instalar um pacote
sudo dnf install nome-do-pacote

# Instalar múltiplos pacotes de uma vez
sudo dnf install vim git curl wget

# Instalar sem confirmação (modo automático)
sudo dnf install -y nome-do-pacote

# Instalar um pacote .rpm local
sudo dnf install /caminho/para/arquivo.rpm`,language:"bash",title:"instalação"}),t.jsx("h3",{children:"Remoção de Pacotes"}),t.jsx(f,{code:`# Remover um pacote
sudo dnf remove nome-do-pacote

# Remover pacote e suas dependências não utilizadas
sudo dnf autoremove nome-do-pacote

# Remover pacotes órfãos (dependências não mais necessárias)
sudo dnf autoremove`,language:"bash",title:"remoção"}),t.jsx("h3",{children:"Atualização"}),t.jsx(f,{code:`# Verificar se há atualizações disponíveis
sudo dnf check-update

# Atualizar todos os pacotes
sudo dnf update

# Atualizar um pacote específico
sudo dnf update nome-do-pacote

# Atualizar e não instalar novos pacotes (apenas atualizar)
sudo dnf upgrade`,language:"bash",title:"atualização"}),t.jsxs("h2",{children:[t.jsx(br,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Busca e Informações"]}),t.jsx(f,{code:`# Buscar pacotes por nome ou descrição
dnf search termo-de-busca

# Informações detalhadas de um pacote
dnf info nome-do-pacote

# Listar pacotes instalados
dnf list installed

# Listar pacotes disponíveis
dnf list available

# Descobrir qual pacote fornece um arquivo ou comando
dnf provides /usr/bin/vim
dnf provides "*/python3.11"

# Listar pacotes de um grupo
dnf group info "Development Tools"`,language:"bash",title:"busca"}),t.jsx("h2",{children:"Grupos de Pacotes"}),t.jsx("p",{children:"O DNF permite instalar grupos temáticos de pacotes — por exemplo, ferramentas de desenvolvimento, ambiente de desktop, servidor web, etc."}),t.jsx(f,{code:`# Listar todos os grupos disponíveis
dnf group list

# Instalar um grupo de pacotes
sudo dnf group install "Development Tools"
sudo dnf install @development-tools   # notação alternativa

# Grupos úteis
sudo dnf install @c-development
sudo dnf install @python-classroom
sudo dnf install @nodejs
sudo dnf install @multimedia
sudo dnf install @virtualization`,language:"bash",title:"grupos de pacotes"}),t.jsx("h2",{children:"Repositórios"}),t.jsx(f,{code:`# Listar repositórios habilitados
dnf repolist

# Listar todos os repositórios (incluindo desabilitados)
dnf repolist all

# Habilitar um repositório
sudo dnf config-manager --enable nome-do-repo

# Desabilitar um repositório
sudo dnf config-manager --disable nome-do-repo

# Adicionar um repositório por URL
sudo dnf config-manager --add-repo https://url-do-repositorio.repo

# Instalar a partir de um repositório específico
sudo dnf install --enablerepo=nome-repo pacote`,language:"bash",title:"repositórios"}),t.jsxs("h2",{children:[t.jsx(Ch,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Limpeza e Manutenção"]}),t.jsx(f,{code:`# Limpar cache do DNF
sudo dnf clean all

# Limpar apenas metadados
sudo dnf clean metadata

# Limpar pacotes baixados
sudo dnf clean packages

# Reconstruir o cache
sudo dnf makecache

# Verificar a base de dados de pacotes
sudo dnf check

# Histórico de operações
dnf history
dnf history info 5          # detalhes da operação 5
sudo dnf history undo 5     # desfazer operação 5`,language:"bash",title:"manutenção"}),t.jsxs(Q,{type:"info",title:"DNF vs YUM",children:["O DNF substitui completamente o YUM no Fedora desde o Fedora 22. O comando ",t.jsx("code",{children:"yum"})," ainda existe como alias para ",t.jsx("code",{children:"dnf"})," em muitas distros, mas no Fedora use sempre ",t.jsx("code",{children:"dnf"}),"."]}),t.jsx("h2",{children:"Configuração do DNF"}),t.jsx(f,{code:`# Arquivo de configuração principal
cat /etc/dnf/dnf.conf

# Configurações úteis para adicionar ao /etc/dnf/dnf.conf:
# max_parallel_downloads=10   # downloads paralelos (padrão: 3)
# fastestmirror=True          # usar o mirror mais rápido
# deltarpm=True               # usar delta RPMs para economizar banda

# Editar configurações
sudo nano /etc/dnf/dnf.conf`,language:"bash",title:"configuração"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Comando"}),t.jsx("th",{children:"Descrição"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf install"})}),t.jsx("td",{children:"Instalar pacote"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf remove"})}),t.jsx("td",{children:"Remover pacote"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf update"})}),t.jsx("td",{children:"Atualizar pacotes"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf search"})}),t.jsx("td",{children:"Buscar pacote"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf info"})}),t.jsx("td",{children:"Informações do pacote"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf list installed"})}),t.jsx("td",{children:"Listar instalados"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf provides"})}),t.jsx("td",{children:"Qual pacote fornece um arquivo"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf history"})}),t.jsx("td",{children:"Histórico de operações"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf autoremove"})}),t.jsx("td",{children:"Remover pacotes órfãos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dnf clean all"})}),t.jsx("td",{children:"Limpar cache"})]})]})]})]})}function Xv(){return t.jsxs(ie,{title:"Flatpak e Flathub",subtitle:"Instale aplicativos modernos e isolados com Flatpak — o sistema de distribuição de apps universal do Linux.",difficulty:"iniciante",timeToRead:"20 min",children:[t.jsxs("h2",{children:[t.jsx(Zn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é Flatpak?"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"Flatpak"})," é um sistema de distribuição de aplicativos para Linux que empacota o app com todas as suas dependências. Isso garante que o mesmo pacote funcione em qualquer distribuição Linux — Fedora, Ubuntu, Arch, etc."]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"Flathub"})," (flathub.org) é o principal repositório de Flatpaks, com mais de 2000 aplicativos — incluindo Spotify, Discord, Steam, VSCode, Chrome, Telegram e muito mais."]}),t.jsx(Q,{type:"success",title:"Flatpak já vem instalado no Fedora",children:"O Fedora Workstation inclui o Flatpak por padrão. Você só precisa habilitar o repositório Flathub."}),t.jsx("h2",{children:"Habilitando o Flathub"}),t.jsx(f,{code:`# Adicionar o repositório Flathub
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

# Verificar repositórios configurados
flatpak remotes`,language:"bash",title:"configurar flathub"}),t.jsx("h2",{children:"Instalando Aplicativos"}),t.jsx(f,{code:`# Instalar um aplicativo do Flathub
flatpak install flathub com.spotify.Client
flatpak install flathub com.discordapp.Discord
flatpak install flathub org.videolan.VLC
flatpak install flathub com.valvesoftware.Steam
flatpak install flathub com.visualstudio.code
flatpak install flathub org.telegram.desktop
flatpak install flathub com.google.Chrome

# Instalar sem confirmação
flatpak install -y flathub nome.do.app`,language:"bash",title:"instalação"}),t.jsxs("h2",{children:[t.jsx(br,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Buscando Aplicativos"]}),t.jsx(f,{code:`# Buscar aplicativos no Flathub
flatpak search spotify
flatpak search "media player"

# Listar aplicativos instalados
flatpak list

# Informações de um app instalado
flatpak info com.spotify.Client`,language:"bash",title:"busca"}),t.jsx("h2",{children:"Executando e Gerenciando"}),t.jsx(f,{code:`# Executar um aplicativo Flatpak via terminal
flatpak run com.spotify.Client

# Atualizar todos os Flatpaks
flatpak update

# Atualizar um Flatpak específico
flatpak update com.spotify.Client

# Remover um Flatpak
flatpak uninstall com.spotify.Client

# Remover dados e configurações também
flatpak uninstall --delete-data com.spotify.Client

# Limpar runtimes não utilizados
flatpak uninstall --unused`,language:"bash",title:"gerenciamento"}),t.jsx("h2",{children:"Permissões e Segurança"}),t.jsxs("p",{children:["Uma das vantagens do Flatpak é o ",t.jsx("strong",{children:"sandboxing"})," — cada app roda isolado, com acesso controlado ao sistema."]}),t.jsx(f,{code:`# Ver permissões de um app
flatpak info --show-permissions com.spotify.Client

# Instalar o Flatseal (gerenciador de permissões gráfico)
flatpak install flathub com.github.tchx84.Flatseal

# Substituir permissão de um app via linha de comando
flatpak override --user --nofilesystem=home com.spotify.Client`,language:"bash",title:"permissões"}),t.jsxs(Q,{type:"info",title:"Flatpak vs DNF",children:["Use ",t.jsx("strong",{children:"DNF"})," para ferramentas de sistema, bibliotecas e pacotes nativos do Fedora. Use ",t.jsx("strong",{children:"Flatpak"})," para aplicativos de desktop (editores gráficos, players, navegadores, jogos) — eles recebem atualizações mais rápido e são isolados do sistema."]}),t.jsx("h2",{children:"Aplicativos Populares no Flathub"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Aplicativo"}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:"Categoria"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Spotify"}),t.jsx("td",{children:"com.spotify.Client"}),t.jsx("td",{children:"Música"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Discord"}),t.jsx("td",{children:"com.discordapp.Discord"}),t.jsx("td",{children:"Comunicação"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"VSCode"}),t.jsx("td",{children:"com.visualstudio.code"}),t.jsx("td",{children:"Desenvolvimento"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Steam"}),t.jsx("td",{children:"com.valvesoftware.Steam"}),t.jsx("td",{children:"Jogos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"VLC"}),t.jsx("td",{children:"org.videolan.VLC"}),t.jsx("td",{children:"Vídeo"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"GIMP"}),t.jsx("td",{children:"org.gimp.GIMP"}),t.jsx("td",{children:"Imagem"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"OBS Studio"}),t.jsx("td",{children:"com.obsproject.Studio"}),t.jsx("td",{children:"Gravação"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Telegram"}),t.jsx("td",{children:"org.telegram.desktop"}),t.jsx("td",{children:"Comunicação"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"LibreOffice"}),t.jsx("td",{children:"org.libreoffice.LibreOffice"}),t.jsx("td",{children:"Office"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Blender"}),t.jsx("td",{children:"org.blender.Blender"}),t.jsx("td",{children:"3D"})]})]})]})]})}function Zv(){return t.jsxs(ie,{title:"Interface GNOME",subtitle:"Domine o GNOME — o ambiente desktop padrão do Fedora — com atalhos, extensões e dicas de produtividade.",difficulty:"iniciante",timeToRead:"40 min",children:[t.jsxs("h2",{children:[t.jsx(_s,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O GNOME no Fedora"]}),t.jsxs("p",{children:["O Fedora Workstation usa o ",t.jsx("strong",{children:"GNOME"})," como ambiente desktop padrão. O Fedora sempre utiliza a versão mais recente do GNOME — frequentemente sendo a primeira distribuição a lançar uma nova versão. O GNOME segue um design minimalista, focado em produtividade e facilidade de uso."]}),t.jsxs("h2",{children:[t.jsx(Dh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Atalhos de Teclado Essenciais"]}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Atalho"}),t.jsx("th",{children:"Ação"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super"})}),t.jsx("td",{children:"Abre a visão de Atividades (overview)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + A"})}),t.jsx("td",{children:"Abre a grade de aplicativos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + D"})}),t.jsx("td",{children:"Mostrar/ocultar área de trabalho"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + L"})}),t.jsx("td",{children:"Bloquear a tela"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + ←/→"})}),t.jsx("td",{children:"Encaixar janela (metade da tela)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + ↑"})}),t.jsx("td",{children:"Maximizar janela"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + ↓"})}),t.jsx("td",{children:"Restaurar/minimizar janela"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + Tab"})}),t.jsx("td",{children:"Alternar entre aplicativos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Super + `"})}),t.jsx("td",{children:"Alternar janelas do mesmo app"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + Alt + T"})}),t.jsx("td",{children:"Abrir terminal"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Alt + F4"})}),t.jsx("td",{children:"Fechar janela"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Print Screen"})}),t.jsx("td",{children:"Capturar tela"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + Alt + →/←"})}),t.jsx("td",{children:"Mudar workspace"})]})]})]}),t.jsxs("h2",{children:[t.jsx(Ux,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Extensões GNOME"]}),t.jsxs("p",{children:["Extensões adicionam funcionalidades ao GNOME. Instale-as através do site ",t.jsx("strong",{children:"extensions.gnome.org"})," ou via terminal."]}),t.jsx(f,{code:`# Instalar o gerenciador de extensões
sudo dnf install gnome-extensions-app

# Habilitar suporte a extensões do navegador
flatpak install flathub org.gnome.Extensions

# Instalar extensões populares via dnf
sudo dnf install gnome-shell-extension-dash-to-dock
sudo dnf install gnome-shell-extension-pop-shell
sudo dnf install gnome-shell-extension-appindicator

# Ver extensões instaladas
gnome-extensions list

# Habilitar uma extensão
gnome-extensions enable nome@extensao

# Desabilitar uma extensão
gnome-extensions disable nome@extensao`,language:"bash",title:"extensões gnome"}),t.jsx("h3",{children:"Extensões Recomendadas"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Extensão"}),t.jsx("th",{children:"Função"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Dash to Dock"}),t.jsx("td",{children:"Dock sempre visível (estilo macOS/Ubuntu)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Pop Shell"}),t.jsx("td",{children:"Gerenciamento de janelas em tiling (System76)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Blur my Shell"}),t.jsx("td",{children:"Efeito blur na barra e no painel"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"AppIndicator"}),t.jsx("td",{children:"Ícones de bandeja do sistema"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"GSConnect"}),t.jsx("td",{children:"Integração com Android (tipo KDE Connect)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Vitals"}),t.jsx("td",{children:"Monitor de CPU, RAM e temperatura na barra"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Night Light Slider"}),t.jsx("td",{children:"Controle rápido do Night Light"})]})]})]}),t.jsxs("h2",{children:[t.jsx(ec,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Personalização via GNOME Tweaks"]}),t.jsx(f,{code:`# Instalar o GNOME Tweaks
sudo dnf install gnome-tweaks

# Instalar temas adicionais
sudo dnf install gnome-themes-extra

# Instalar ícones (exemplos)
sudo dnf install papirus-icon-theme
sudo dnf install adwaita-icon-theme`,language:"bash",title:"personalização"}),t.jsx("h2",{children:"Configurações via gsettings (linha de comando)"}),t.jsx(f,{code:`# Ver configuração atual da interface
gsettings get org.gnome.desktop.interface gtk-theme

# Mudar tema
gsettings set org.gnome.desktop.interface gtk-theme 'Adwaita-dark'

# Mudar tema de ícones
gsettings set org.gnome.desktop.interface icon-theme 'Papirus-Dark'

# Mudar fonte do sistema
gsettings set org.gnome.desktop.interface font-name 'Cantarell 11'

# Habilitar Night Light
gsettings set org.gnome.settings-daemon.plugins.color night-light-enabled true

# Desabilitar animações (para hardware mais fraco)
gsettings set org.gnome.desktop.interface enable-animations false`,language:"bash",title:"gsettings"}),t.jsxs(Q,{type:"info",title:"Wayland por padrão",children:["O Fedora usa ",t.jsx("strong",{children:"Wayland"})," por padrão desde o Fedora 25. Wayland é mais moderno e seguro que o X11. A maioria dos apps modernos funciona perfeitamente. Para apps que precisam de X11, o XWayland provê compatibilidade automaticamente."]}),t.jsxs("h2",{children:[t.jsx(Lx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," TTY — O Terminal de Tela Cheia"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"TTY"}),' (TeleTYpewriter) é um terminal de texto puro que existe por baixo de qualquer interface gráfica. No Linux, existem 6 TTYs virtuais — são como "telas paralelas" que funcionam independentemente do GNOME. Se o GNOME travar completamente, você ainda pode acessar o sistema por um TTY.']}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 my-6",children:[{key:"Ctrl + Alt + F1",desc:"TTY 1 — normalmente onde o GDM (login gráfico) fica"},{key:"Ctrl + Alt + F2",desc:"TTY 2 — terminal de texto puro (login por texto)"},{key:"Ctrl + Alt + F3",desc:"TTY 3 — outro terminal de texto disponível"},{key:"Ctrl + Alt + F4",desc:"TTY 4 — outro terminal de texto disponível"},{key:"Ctrl + Alt + F5",desc:"TTY 5 — outro terminal de texto disponível"},{key:"Ctrl + Alt + F6",desc:"TTY 6 — outro terminal de texto disponível"}].map((l,c)=>t.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl border border-border bg-card",children:[t.jsx("kbd",{className:"px-2 py-1 text-xs font-mono bg-muted border border-border rounded shrink-0 mt-0.5 whitespace-nowrap",children:l.key}),t.jsx("span",{className:"text-sm text-muted-foreground",children:l.desc})]},c))}),t.jsxs(Q,{type:"info",title:"Onde fica o GNOME no Wayland?",children:["No Wayland (padrão do Fedora), o GNOME fica geralmente no ",t.jsx("strong",{children:"TTY 2"})," (ou no TTY onde você fez login). Para voltar ao GNOME a partir de um TTY de texto, use ",t.jsx("code",{children:"Ctrl + Alt + F2"})," — ou tente de F1 a F7 até aparecer a interface gráfica."]}),t.jsx("h3",{children:"Como Acessar o TTY"}),t.jsxs("ol",{children:[t.jsxs("li",{children:["Pressione ",t.jsx("code",{children:"Ctrl + Alt + F3"})," (ou F2, F4... — qualquer TTY disponível)"]}),t.jsxs("li",{children:["A tela ficará preta com um prompt de texto: ",t.jsx("code",{children:"fedora login:"})]}),t.jsxs("li",{children:["Digite seu ",t.jsx("strong",{children:"nome de usuário"})," e pressione Enter"]}),t.jsxs("li",{children:["Digite sua ",t.jsx("strong",{children:"senha"})," (não aparece nada enquanto digita — é normal) e pressione Enter"]}),t.jsx("li",{children:"Você estará logado em um terminal de texto completo"}),t.jsxs("li",{children:["Para ",t.jsx("strong",{children:"voltar ao GNOME"}),": pressione ",t.jsx("code",{children:"Ctrl + Alt + F2"})," (ou F1, F7 — depende do sistema)"]})]}),t.jsxs("h2",{children:[t.jsx(Mh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O GNOME Travou — O que Fazer?"]}),t.jsx("p",{children:"O GNOME pode travar por extensões com bugs, falta de memória, drivers ou processos com problema. Aqui estão as soluções em ordem — da mais segura para a mais drástica:"}),t.jsx("h3",{children:"Nível 1 — Reiniciar só o Shell GNOME (mais seguro)"}),t.jsxs("p",{children:["Funciona apenas no ",t.jsx("strong",{children:"X11"})," (não no Wayland). Tenta reiniciar a interface sem perder o que estava aberto:"]}),t.jsx(f,{code:`# Pressione Alt + F2 dentro do GNOME
# Uma caixa de diálogo abre — digite apenas a letra:
r
# Pressione Enter — o GNOME Shell reinicia em segundos`,language:"bash",title:"reiniciar gnome shell (X11 apenas)"}),t.jsx("h3",{children:"Nível 2 — Matar e reiniciar o GNOME pelo TTY"}),t.jsxs("p",{children:["Acesse o TTY com ",t.jsx("code",{children:"Ctrl + Alt + F3"}),", faça login e execute:"]}),t.jsx(f,{code:`# Opção A — reiniciar apenas o gnome-shell (tenta preservar sua sessão)
killall -HUP gnome-shell

# Opção B — reiniciar o GDM (gerenciador de login gráfico)
# ATENÇÃO: isso fecha todas as janelas e aplicativos abertos
sudo systemctl restart gdm

# Opção C — matar o processo gnome-shell diretamente
pkill -f gnome-shell

# Após qualquer um desses, volte ao GNOME com:
# Ctrl + Alt + F2  (ou F1, F7)`,language:"bash",title:"reiniciar gnome pelo tty"}),t.jsx("h3",{children:"Nível 3 — Verificar o que causou o travamento"}),t.jsx(f,{code:`# Ver logs recentes do GNOME e do GDM
journalctl -b -u gdm --no-pager | tail -50

# Ver erros do gnome-shell
journalctl -b | grep -i "gnome-shell" | grep -i "error|crash|fail" | tail -30

# Ver uso de memória — talvez o sistema tenha ficado sem RAM
free -h
top -n 1 | head -20

# Ver se alguma extensão causou o problema
journalctl -b | grep "extension" | tail -20

# Desabilitar todas as extensões pelo TTY para testar
gsettings set org.gnome.shell disable-user-extensions true
# Depois volte ao GNOME e veja se funciona
# Para reabilitar:
gsettings set org.gnome.shell disable-user-extensions false`,language:"bash",title:"diagnóstico"}),t.jsx("h3",{children:"Nível 4 — Reinicialização segura pelo terminal"}),t.jsx(f,{code:`# Reiniciar o sistema de forma limpa pelo TTY
sudo systemctl reboot

# Ou desligar completamente
sudo systemctl poweroff

# Reiniciar imediatamente (sem esperar serviços)
sudo reboot -f`,language:"bash",title:"reiniciar pelo tty"}),t.jsxs("h2",{children:[t.jsx(Po,{className:"inline-block mr-2 mb-1 w-5 h-5"})," SysRq — Reinício de Emergência (último recurso)"]}),t.jsxs("p",{children:["Se o sistema estiver completamente travado — sem responder ao teclado, sem acessar o TTY — use a combinação de teclas ",t.jsx("strong",{children:"SysRq"})," (Magic System Request). É uma funcionalidade do kernel Linux para situações extremas."]}),t.jsx(Q,{type:"warning",title:"Use o SysRq apenas em casos extremos",children:"Essa combinação força o kernel a executar comandos diretos, ignorando o sistema de arquivos e processos. Sempre tente antes os métodos de nível 1 a 4."}),t.jsx(f,{code:`# A combinação mágica para reiniciar com segurança (REISUB):
# Segure: Alt + Print Screen (SysRq)
# E pressione em sequência (aguarde 1-2 segundos entre cada letra):

R  → Retoma controle do teclado do X11/Wayland
E  → Envia SIGTERM para todos os processos (pedido de encerramento)
I  → Envia SIGKILL para todos os processos (força encerramento)
S  → Sincroniza os discos (grava tudo pendente)
U  → Remonta sistemas de arquivos como somente leitura (seguro)
B  → Reinicia o sistema (Boot)

# Memorize como: "Raising Elephants Is So Utterly Boring"
#                  R        E        I  S  U      B

# Apenas desligar (sem reiniciar): use REISUO (O = pOwer off)

# Verificar se o SysRq está habilitado:
cat /proc/sys/kernel/sysrq
# 1 = habilitado, 0 = desabilitado

# Habilitar manualmente se necessário:
sudo sysctl -w kernel.sysrq=1`,language:"bash",title:"sysrq — reinício de emergência"}),t.jsx(Q,{type:"success",title:"Resumo rápido: GNOME travou, o que fazer?",children:t.jsxs("ol",{className:"list-decimal pl-4 mt-2 space-y-1",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"X11:"})," tente ",t.jsx("code",{children:"Alt + F2"})," → digitar ",t.jsx("code",{children:"r"})," → Enter"]}),t.jsxs("li",{children:["Acesse o TTY com ",t.jsx("code",{children:"Ctrl + Alt + F3"})," → faça login → ",t.jsx("code",{children:"sudo systemctl restart gdm"})]}),t.jsxs("li",{children:["Se não conseguir o TTY: ",t.jsx("code",{children:"Ctrl + Alt + Del"})," (pode reiniciar em alguns sistemas)"]}),t.jsxs("li",{children:["Último recurso: ",t.jsx("code",{children:"Alt + SysRq"})," → R → E → I → S → U → B (aguarde entre cada)"]}),t.jsx("li",{children:"Se nada funcionar: botão de power físico (segurar 5-10 segundos)"})]})})]})}function Kv(){return t.jsxs(ie,{title:"Terminal e Bash",subtitle:"Domine o terminal Linux — shell Bash, atalhos, customização e dicas para aumentar sua produtividade.",difficulty:"intermediario",timeToRead:"60 min",children:[t.jsxs("h2",{children:[t.jsx($t,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O Shell Bash"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"Bash"})," (Bourne Again SHell) é o shell padrão no Fedora. É a interface de linha de comando que interpreta seus comandos e scripts."]}),t.jsx("h2",{children:"Atalhos do Terminal"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Atalho"}),t.jsx("th",{children:"Ação"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + C"})}),t.jsx("td",{children:"Cancelar comando em execução"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + Z"})}),t.jsx("td",{children:"Suspender processo (para em background)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + D"})}),t.jsx("td",{children:"Sair do terminal (EOF)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + L"})}),t.jsx("td",{children:"Limpar a tela (igual a clear)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + A"})}),t.jsx("td",{children:"Ir ao início da linha"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + E"})}),t.jsx("td",{children:"Ir ao fim da linha"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + U"})}),t.jsx("td",{children:"Apagar do cursor até o início"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + K"})}),t.jsx("td",{children:"Apagar do cursor até o fim"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Ctrl + R"})}),t.jsx("td",{children:"Buscar no histórico de comandos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"Tab"})}),t.jsx("td",{children:"Autocompletar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"↑ / ↓"})}),t.jsx("td",{children:"Navegar no histórico"})]})]})]}),t.jsx("h2",{children:"Variáveis de Ambiente"}),t.jsx(f,{code:`# Ver todas as variáveis de ambiente
env
printenv

# Ver uma variável específica
echo $HOME
echo $PATH
echo $USER
echo $SHELL

# Definir uma variável (somente para a sessão atual)
NOME="Fedora"
echo $NOME

# Exportar variável (disponível para processos filhos)
export EDITOR="vim"

# Adicionar ao PATH permanentemente (edite ~/.bashrc)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc`,language:"bash",title:"variáveis de ambiente"}),t.jsx("h2",{children:"Redirecionamento e Pipes"}),t.jsx(f,{code:`# Redirecionar saída para arquivo (sobrescrever)
ls -la > lista.txt

# Redirecionar saída para arquivo (adicionar/append)
echo "nova linha" >> arquivo.txt

# Redirecionar erros
comando 2> erros.txt

# Redirecionar saída e erros
comando > saida.txt 2>&1
comando &> tudo.txt       # forma abreviada

# Pipe — passar saída de um comando para outro
ls -la | grep ".txt"
cat arquivo.txt | sort | uniq | wc -l
ps aux | grep firefox`,language:"bash",title:"redirecionamento"}),t.jsxs("h2",{children:[t.jsx(vr,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Aliases e Funções"]}),t.jsx(f,{code:`# Criar um alias (somente para a sessão atual)
alias ll='ls -la'
alias gs='git status'
alias update='sudo dnf update -y'

# Para tornar permanentes, adicione ao ~/.bashrc
echo "alias ll='ls -la'" >> ~/.bashrc
echo "alias update='sudo dnf update -y'" >> ~/.bashrc

# Recarregar o .bashrc
source ~/.bashrc

# Criar uma função no .bashrc
mkcd() {
  mkdir -p "$1" && cd "$1"
}`,language:"bash",title:"aliases"}),t.jsxs("h2",{children:[t.jsx(ec,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Customizando o Bash (.bashrc)"]}),t.jsx(f,{code:`# Editar o arquivo de configuração do bash
nano ~/.bashrc

# Exemplo de um ~/.bashrc útil:

# Aliases essenciais
alias ll='ls -la --color=auto'
alias la='ls -A --color=auto'
alias l='ls -CF --color=auto'
alias grep='grep --color=auto'
alias update='sudo dnf update -y'
alias install='sudo dnf install'
alias ports='ss -tulpn'

# Prompt colorido personalizado
export PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '

# Histórico maior
export HISTSIZE=10000
export HISTFILESIZE=20000

# Carregar alterações
source ~/.bashrc`,language:"bash",title:"~/.bashrc"}),t.jsx("h2",{children:"Comandos de Busca"}),t.jsx(f,{code:`# Encontrar arquivos por nome
find /home -name "*.txt"
find / -name "nginx.conf" 2>/dev/null

# Encontrar com tipo
find . -type f -name "*.log"   # apenas arquivos
find . -type d -name "tmp"     # apenas diretórios

# Encontrar por data (modificados nos últimos 7 dias)
find . -mtime -7

# Buscar conteúdo dentro de arquivos
grep -r "palavra" /pasta/
grep -ri "fedora" /etc/          # case-insensitive
grep -rn "erro" /var/log/        # com número de linha

# Usar ripgrep (mais rápido que grep)
sudo dnf install ripgrep
rg "palavra" /pasta/`,language:"bash",title:"busca"}),t.jsx("h2",{children:"Processamento de Texto"}),t.jsx("p",{children:"O Linux tem ferramentas poderosas para processar texto diretamente no terminal — muito úteis para analisar logs, extrair dados e transformar arquivos."}),t.jsx("h3",{children:"sort, uniq, wc — Ordenar, filtrar e contar"}),t.jsx(f,{code:`# Ordenar linhas de um arquivo (alfabético)
sort arquivo.txt

# Ordenar numericamente
sort -n numeros.txt

# Ordenar em ordem reversa
sort -r arquivo.txt

# Ordenar por coluna específica (campo 3, separador vírgula)
sort -t',' -k3 -n arquivo.csv

# Remover linhas duplicadas (o arquivo precisa estar ordenado)
sort arquivo.txt | uniq

# Contar ocorrências de cada linha
sort arquivo.txt | uniq -c | sort -rn

# Mostrar apenas duplicatas
sort arquivo.txt | uniq -d

# Mostrar apenas únicas
sort arquivo.txt | uniq -u

# Contar linhas, palavras e caracteres
wc arquivo.txt
wc -l arquivo.txt     # só linhas
wc -w arquivo.txt     # só palavras
wc -c arquivo.txt     # só bytes`,language:"bash",title:"sort, uniq, wc"}),t.jsx("h3",{children:"cut e paste — Extrair e combinar colunas"}),t.jsx(f,{code:`# Extrair campo/coluna de texto (separador: vírgula)
cut -d',' -f1 arquivo.csv         # primeira coluna
cut -d',' -f1,3 arquivo.csv       # colunas 1 e 3
cut -d':' -f1 /etc/passwd         # nomes de usuário

# Extrair por posição de caractere
cut -c1-10 arquivo.txt            # primeiros 10 caracteres
cut -c5- arquivo.txt              # do 5º caractere até o fim

# Combinar dois arquivos coluna a coluna
paste arquivo1.txt arquivo2.txt
paste -d',' arquivo1.txt arquivo2.txt   # separador vírgula`,language:"bash",title:"cut e paste"}),t.jsx("h3",{children:"sed — Editor de Fluxo (substituição e edição)"}),t.jsx(f,{code:`# Substituir texto (só a primeira ocorrência por linha)
sed 's/velho/novo/' arquivo.txt

# Substituir TODAS as ocorrências (flag g = global)
sed 's/velho/novo/g' arquivo.txt

# Substituir sem diferenciar maiúsculas
sed 's/velho/novo/gi' arquivo.txt

# Editar o arquivo diretamente (in-place)
sed -i 's/velho/novo/g' arquivo.txt

# Fazer backup antes de editar
sed -i.bak 's/velho/novo/g' arquivo.txt  # cria arquivo.txt.bak

# Remover linhas vazias
sed '/^$/d' arquivo.txt

# Remover comentários (linhas que começam com #)
sed '/^#/d' arquivo.txt

# Mostrar apenas linhas de 5 a 10
sed -n '5,10p' arquivo.txt

# Adicionar texto no início de cada linha
sed 's/^/PREFIXO: /' arquivo.txt

# Adicionar texto no fim de cada linha
sed 's/$/ SUFIXO/' arquivo.txt`,language:"bash",title:"sed"}),t.jsx("h3",{children:"awk — Processamento avançado de texto"}),t.jsx(f,{code:`# Sintaxe básica: awk '{ação}' arquivo
# $1, $2... = colunas; NR = número da linha; NF = número de campos

# Imprimir a primeira coluna
awk '{print $1}' arquivo.txt

# Imprimir colunas 1 e 3
awk '{print $1, $3}' arquivo.txt

# Separador de campos personalizado (vírgula)
awk -F',' '{print $2}' arquivo.csv

# Filtrar linhas onde a 3ª coluna é maior que 100
awk '$3 > 100 {print}' dados.txt

# Somar todos os valores da 2ª coluna
awk '{soma += $2} END {print soma}' dados.txt

# Imprimir número da linha + conteúdo
awk '{print NR": "$0}' arquivo.txt

# Exemplo real: listar usuários e shells do /etc/passwd
awk -F':' '{print $1, $7}' /etc/passwd`,language:"bash",title:"awk"}),t.jsx("h3",{children:"tr — Traduzir/substituir caracteres"}),t.jsx(f,{code:`# Converter minúsculas para maiúsculas
echo "fedora linux" | tr '[:lower:]' '[:upper:]'

# Remover caracteres específicos
echo "olá mundo!" | tr -d '!'

# Substituir espaços por tabs
echo "um dois três" | tr ' ' '\\t'

# Remover caracteres repetidos
echo "feeeedoooraaaa" | tr -s 'aeiou'`,language:"bash",title:"tr"}),t.jsx("h2",{children:"Compressão e Arquivos Compactados"}),t.jsx(f,{code:`# tar — o mais usado no Linux
# Criar um arquivo .tar.gz (comprimido com gzip)
tar -czf backup.tar.gz pasta/
tar -czf backup.tar.gz arquivo1 arquivo2

# Extrair um .tar.gz
tar -xzf backup.tar.gz
tar -xzf backup.tar.gz -C /destino/  # extrair em pasta específica

# Listar conteúdo sem extrair
tar -tzf backup.tar.gz

# Criar .tar.bz2 (melhor compressão, mais lento)
tar -cjf backup.tar.bz2 pasta/

# Criar .tar.xz (melhor compressão ainda)
tar -cJf backup.tar.xz pasta/

# Ver progresso da compressão
tar -czf backup.tar.gz pasta/ --checkpoint=100 --checkpoint-action=dot

# Flags do tar explicadas:
# -c = create (criar)
# -x = extract (extrair)
# -t = list (listar)
# -z = gzip
# -j = bzip2
# -J = xz
# -f = file (especificar o arquivo)
# -v = verbose (mostrar o que está sendo feito)
# -C = change directory (pasta de destino)

# gzip / gunzip
gzip arquivo.txt           # cria arquivo.txt.gz, remove o original
gunzip arquivo.txt.gz      # descomprime
gzip -k arquivo.txt        # mantém o arquivo original (-k = keep)
gzip -9 arquivo.txt        # máxima compressão

# zip / unzip (compatível com Windows)
zip arquivo.zip pasta/
zip -r arquivo.zip pasta/  # recursivo (para diretórios)
unzip arquivo.zip
unzip arquivo.zip -d /destino/

# xz
xz arquivo.txt             # melhor compressão, mais lento
xz -d arquivo.txt.xz       # descomprimir`,language:"bash",title:"compressão"}),t.jsx("h2",{children:"Editores de Texto no Terminal"}),t.jsx("h3",{children:"nano — Mais fácil para iniciantes"}),t.jsx(f,{code:`# Abrir ou criar arquivo com nano
nano arquivo.txt

# Atalhos do nano (^ = Ctrl, M = Alt):
# Ctrl + O   = salvar (Write Out)
# Ctrl + X   = sair
# Ctrl + W   = buscar (Where Is)
# Ctrl + \\   = buscar e substituir
# Ctrl + K   = cortar linha
# Ctrl + U   = colar linha
# Ctrl + G   = ajuda completa
# Ctrl + A   = ir ao início da linha
# Ctrl + E   = ir ao fim da linha
# Alt + U    = desfazer
# Alt + E    = refazer`,language:"bash",title:"nano"}),t.jsx("h3",{children:"vim — Editor profissional (modos de operação)"}),t.jsx(f,{code:`# Abrir arquivo com vim
vim arquivo.txt

# O vim tem modos:
# NORMAL    = padrão ao abrir. Navegação e comandos
# INSERT    = para digitar texto (pressione i, a, o)
# VISUAL    = para selecionar texto (pressione v)
# COMMAND   = para executar comandos (pressione :)

# Entrando no modo Insert (edição):
i    # inserir antes do cursor
a    # inserir depois do cursor
o    # nova linha abaixo
O    # nova linha acima
I    # inserir no início da linha
A    # inserir no fim da linha

# Voltando ao modo Normal: Esc

# Comandos no modo Normal:
h j k l    # mover: esquerda, baixo, cima, direita
w          # palavra seguinte
b          # palavra anterior
0          # início da linha
$          # fim da linha
gg         # início do arquivo
G          # fim do arquivo
dd         # deletar linha inteira
yy         # copiar linha (yank)
p          # colar abaixo
u          # desfazer
Ctrl + r   # refazer
/palavra   # buscar
n          # próxima ocorrência

# Comandos com : (modo command):
:w         # salvar
:q         # sair (só se não houver mudanças)
:wq        # salvar e sair
:q!        # sair sem salvar (forçar)
:wq!       # salvar e sair (forçar)
:set nu    # mostrar números de linha
:%s/velho/novo/g   # substituir em todo o arquivo`,language:"bash",title:"vim"}),t.jsx("h2",{children:"xargs — Construir Comandos a partir de Entradas"}),t.jsx(f,{code:`# xargs pega saída de um comando e passa como argumento para outro

# Remover todos os arquivos .log encontrados
find /var/log -name "*.log" | xargs rm

# Contar linhas de vários arquivos
find . -name "*.txt" | xargs wc -l

# Executar com múltiplos argumentos de uma vez (-n = itens por execução)
cat lista-de-pacotes.txt | xargs -n 1 sudo dnf install

# Executar em paralelo (-P = número de processos)
find . -name "*.jpg" | xargs -P 4 -I{} convert {} {}.png

# Usar com espaços nos nomes de arquivo (separar por null byte)
find . -name "*.txt" -print0 | xargs -0 rm

# Pedir confirmação antes de executar
find . -name "*.tmp" | xargs -p rm`,language:"bash",title:"xargs"}),t.jsxs(Q,{type:"info",title:"Instale o Zsh + Oh My Zsh",children:["O ",t.jsx("strong",{children:"Zsh"})," é um shell mais poderoso que o Bash, com autocompletar avançado e suporte a plugins. Com o ",t.jsx("strong",{children:"Oh My Zsh"}),", a customização é ainda mais simples. ",t.jsx("code",{children:"sudo dnf install zsh && chsh -s /bin/zsh"})]})]})}function Pv(){return t.jsxs(ie,{title:"Sistema de Arquivos",subtitle:"Entenda a estrutura de diretórios do Linux, manipule arquivos e gerencie permissões de forma eficiente.",difficulty:"iniciante",timeToRead:"25 min",children:[t.jsxs("h2",{children:[t.jsx(In,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Estrutura de Diretórios do Linux"]}),t.jsxs("p",{children:["O Linux segue o padrão ",t.jsx("strong",{children:"FHS"})," (Filesystem Hierarchy Standard). Tudo começa na raiz ",t.jsx("code",{children:"/"}),":"]}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Diretório"}),t.jsx("th",{children:"Função"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/"})}),t.jsx("td",{children:"Raiz — tudo começa aqui"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/bin"})}),t.jsx("td",{children:"Comandos essenciais (ls, cp, mv...)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/boot"})}),t.jsx("td",{children:"Arquivos de boot e kernel"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/dev"})}),t.jsx("td",{children:"Dispositivos de hardware (disco, USB...)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/etc"})}),t.jsx("td",{children:"Arquivos de configuração do sistema"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/home"})}),t.jsx("td",{children:"Diretórios pessoais dos usuários"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/lib"})}),t.jsx("td",{children:"Bibliotecas do sistema"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/mnt"})}),t.jsx("td",{children:"Ponto de montagem temporário"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/opt"})}),t.jsx("td",{children:"Softwares de terceiros"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/proc"})}),t.jsx("td",{children:"Informações de processos (virtual)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/root"})}),t.jsx("td",{children:"Home do usuário root"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/run"})}),t.jsx("td",{children:"Dados de runtime dos serviços"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/sbin"})}),t.jsx("td",{children:"Comandos de administração"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/srv"})}),t.jsx("td",{children:"Dados de serviços (web, FTP)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/sys"})}),t.jsx("td",{children:"Informações do kernel (virtual)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/tmp"})}),t.jsx("td",{children:"Arquivos temporários (limpo no boot)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/usr"})}),t.jsx("td",{children:"Programas de usuário"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"/var"})}),t.jsx("td",{children:"Dados variáveis (logs, banco de dados)"})]})]})]}),t.jsx("h2",{children:"Operações com Arquivos e Diretórios"}),t.jsx(f,{code:`# Criar diretórios
mkdir pasta
mkdir -p pasta/subpasta/subsubpasta   # cria toda a hierarquia

# Copiar
cp arquivo.txt destino/
cp -r pasta/ destino/                  # copiar pasta recursivamente
cp -p arquivo.txt destino/             # preservar permissões e data

# Mover e renomear
mv arquivo.txt novo-nome.txt           # renomear
mv arquivo.txt /outro/caminho/         # mover
mv -i arquivo.txt destino/             # pedir confirmação se sobrescrever

# Remover
rm arquivo.txt
rm -r pasta/                           # remover pasta recursivamente
rm -rf pasta/                          # forçar (sem confirmação)
rm -i arquivo.txt                      # pedir confirmação

# Criar arquivo vazio
touch arquivo.txt
touch arquivo{1..5}.txt               # criar múltiplos: arquivo1.txt ... arquivo5.txt`,language:"bash",title:"manipulação de arquivos"}),t.jsx("h2",{children:"Visualização de Arquivos"}),t.jsx(f,{code:`# Mostrar conteúdo
cat arquivo.txt
cat -n arquivo.txt         # com números de linha

# Paginação
less arquivo.txt           # navegação interativa (q para sair)
more arquivo.txt           # apenas para frente

# Primeiras e últimas linhas
head -n 20 arquivo.txt     # primeiras 20 linhas
tail -n 20 arquivo.txt     # últimas 20 linhas
tail -f /var/log/syslog    # monitorar em tempo real

# Contar linhas, palavras e caracteres
wc -l arquivo.txt          # linhas
wc -w arquivo.txt          # palavras
wc -c arquivo.txt          # caracteres`,language:"bash",title:"visualização"}),t.jsxs("h2",{children:[t.jsx(Fs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Uso de Disco"]}),t.jsx(f,{code:`# Espaço disponível no sistema
df -h

# Tamanho de diretórios e arquivos
du -sh pasta/              # tamanho total da pasta
du -sh *                   # tamanho de cada item no diretório atual
du -sh /* 2>/dev/null      # tamanho de cada diretório raiz

# Top 10 maiores arquivos/diretórios
du -ah / 2>/dev/null | sort -rh | head -10

# Ver dispositivos montados
lsblk
mount | grep "^/dev"
findmnt`,language:"bash",title:"uso de disco"}),t.jsx("h2",{children:"Links Simbólicos e Hard Links"}),t.jsx(f,{code:`# Criar link simbólico (symlink — como um atalho)
ln -s /caminho/original /caminho/link

# Exemplos práticos
ln -s /usr/local/bin/python3 /usr/local/bin/python
ln -s ~/Documentos/projetos ~/projetos   # atalho para pasta

# Criar hard link
ln arquivo-original.txt hard-link.txt

# Ver onde um symlink aponta
ls -la link
readlink -f link`,language:"bash",title:"links"}),t.jsxs(Q,{type:"info",title:"Tudo é arquivo no Linux",children:["No Linux, praticamente tudo é representado como arquivo — dispositivos (",t.jsx("code",{children:"/dev/sda"}),"), processos (",t.jsx("code",{children:"/proc/1234"}),"), configurações (",t.jsx("code",{children:"/etc/hosts"}),") e sockets de rede. Isso torna o sistema extremamente consistente e previsível."]})]})}function Iv(){return t.jsxs(ie,{title:"Navegação no Sistema de Arquivos",subtitle:"Domine os comandos essenciais para se mover pelo Linux: pwd, cd, ls, tree, find e locate.",difficulty:"iniciante",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(yh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," pwd — Onde Estou?"]}),t.jsxs("p",{children:["O ",t.jsx("code",{children:"pwd"})," (Print Working Directory) mostra o caminho completo do diretório em que você está."]}),t.jsx(f,{code:`pwd
# Saída: /home/usuario`,language:"bash",title:"pwd básico"}),t.jsx(f,{code:`# -L (padrão): Mostra o caminho lógico (segue links simbólicos)
pwd -L

# -P: Mostra o caminho físico real (resolve links simbólicos)
pwd -P

# Exemplo prático:
# Se /home/usuario/projetos é um link simbólico para /mnt/ssd/projetos
cd /home/usuario/projetos
pwd -L   # /home/usuario/projetos  (caminho do link)
pwd -P   # /mnt/ssd/projetos      (caminho real no disco)`,language:"bash",title:"pwd com flags"}),t.jsx("h2",{children:"Caminhos Absolutos e Relativos"}),t.jsx(f,{code:`# Caminho ABSOLUTO: Começa sempre com /
# É como dar o endereço completo de uma casa
cd /etc/dnf
cd /home/usuario/Documentos
cd /var/log

# Caminho RELATIVO: Parte do diretório atual
# É como dar direções a partir de onde você está
cd Documentos        # entra na pasta Documentos (dentro do diretório atual)
cd projetos/web      # entra em projetos, depois em web
cd ../               # volta um nível
cd ../../etc         # volta dois níveis e entra em /etc`,language:"bash",title:"absoluto vs relativo"}),t.jsx("h2",{children:"cd — Mudando de Diretório"}),t.jsx(f,{code:`# Ir para o diretório home do usuário (3 formas equivalentes)
cd
cd ~
cd $HOME

# Voltar ao diretório anterior (como o botão "voltar" do navegador)
cd -
# Exemplo:
cd /etc          # vai para /etc
cd /var/log      # vai para /var/log
cd -             # volta para /etc
cd -             # volta para /var/log

# Subir um nível (diretório pai)
cd ..

# Subir dois níveis
cd ../..

# Subir um nível e entrar em outro diretório
cd ../outro-diretorio`,language:"bash",title:"cd"}),t.jsxs("h2",{children:[t.jsx(Gx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," ls — Listando Arquivos"]}),t.jsx(f,{code:`# Listar conteúdo do diretório atual
ls

# Listar conteúdo de um diretório específico
ls /etc
ls ~/Documentos

# Listar múltiplos diretórios
ls /etc /var /tmp`,language:"bash",title:"ls básico"}),t.jsx(f,{code:`# -l: Formato longo (detalhes completos)
# Mostra permissões, dono, grupo, tamanho, data e nome
ls -l
# drwxr-xr-x  2 usuario usuario 4096 jan 15 10:30 Documentos
# -rw-r--r--  1 usuario usuario  234 jan 14 09:15 notas.txt

# -a: Mostra arquivos ocultos (começam com .)
ls -a
# .  ..  .bashrc  .config  Documentos  notas.txt

# -la: Combinação mais usada — detalhes + ocultos
ls -la

# -lh: Formato longo com tamanhos legíveis (KB, MB, GB)
ls -lh`,language:"bash",title:"ls com flags"}),t.jsx(f,{code:`# Ver tudo com detalhes e tamanhos legíveis (a mais usada de todas)
ls -lah

# Os 10 maiores arquivos do diretório
ls -lhS | head -10

# Arquivos modificados recentemente com detalhes
ls -lht

# Listar apenas diretórios
ls -d */

# Listar apenas arquivos .conf
ls -la *.conf

# Contar quantos arquivos existem no diretório
ls -1 | wc -l`,language:"bash",title:"ls avançado"}),t.jsx("h2",{children:"tree — Visualizar Árvore de Diretórios"}),t.jsx(f,{code:`# Instalar tree (se não tiver)
sudo dnf install tree

# Mostrar árvore do diretório atual
tree

# Limitar a profundidade (muito útil para diretórios grandes)
tree -L 1    # apenas 1 nível
tree -L 2    # até 2 níveis
tree -L 3    # até 3 níveis

# Mostrar apenas diretórios (sem arquivos)
tree -d

# Mostrar tamanho dos arquivos
tree -h

# Mostrar arquivos ocultos
tree -a

# Ignorar certos padrões
tree -I "node_modules|.git|__pycache__"

# Mostrar com cores e contagem
tree -C`,language:"bash",title:"tree"}),t.jsxs("h2",{children:[t.jsx(br,{className:"inline-block mr-2 mb-1 w-5 h-5"})," find — Buscando Arquivos"]}),t.jsxs("p",{children:["O ",t.jsx("code",{children:"find"})," é uma das ferramentas mais poderosas do Linux. Busca arquivos com critérios variados."]}),t.jsx("h3",{children:"Busca por nome"}),t.jsx(f,{code:`# Sintaxe: find [onde] [critérios]
find /home -name "*.txt"

# Buscar por nome exato (case sensitive)
find /etc -name "dnf.conf"

# Buscar ignorando maiúsculas/minúsculas
find /home -iname "readme.md"

# Buscar com wildcard (padrão glob)
find . -name "*.log"
find . -name "*.txt"
find /etc -name "*.conf"

# Buscar arquivos que começam com um prefixo
find . -name "config*"`,language:"bash",title:"find por nome"}),t.jsx("h3",{children:"Busca por tipo e tamanho"}),t.jsx(f,{code:`# -type f: apenas arquivos regulares
find /var/log -type f -name "*.log"

# -type d: apenas diretórios
find /home -type d -name "projetos"

# -type l: apenas links simbólicos
find /usr/bin -type l

# Encontrar diretórios vazios
find . -type d -empty

# Encontrar arquivos vazios
find . -type f -empty

# Arquivos maiores que 100MB
find / -type f -size +100M

# Arquivos menores que 1KB
find . -type f -size -1k

# Arquivos entre 10MB e 100MB
find . -type f -size +10M -size -100M

# Unidades: c (bytes), k (kilobytes), M (megabytes), G (gigabytes)`,language:"bash",title:"find por tipo e tamanho"}),t.jsx("h3",{children:"Busca por data e execução de ação"}),t.jsx(f,{code:`# Arquivos modificados nos últimos 7 dias
find . -type f -mtime -7

# Arquivos modificados há mais de 30 dias
find . -type f -mtime +30

# Arquivos modificados nas últimas 2 horas
find . -type f -mmin -120

# Executar ação nos arquivos encontrados (-exec)
# Deletar todos os arquivos .tmp
find /tmp -type f -name "*.tmp" -exec rm {} ;

# Mudar permissões de todos os scripts
find . -type f -name "*.sh" -exec chmod +x {} ;

# Listar detalhes de arquivos grandes
find / -type f -size +500M -exec ls -lh {} ;

# Usar + em vez de ; (mais eficiente — passa todos de uma vez)
find . -name "*.log" -exec rm {} +`,language:"bash",title:"find com datas e ações"}),t.jsx("h2",{children:"locate — Busca Rápida por Banco de Dados"}),t.jsx(f,{code:`# Instalar o plocate (mais rápido que o locate clássico)
sudo dnf install plocate

# Atualizar o banco de dados (necessário antes do primeiro uso)
sudo updatedb

# Busca simples (instantânea)
locate dnf.conf

# Ignorar maiúsculas/minúsculas
locate -i readme

# Limitar número de resultados
locate -l 10 "*.conf"

# Contar quantos resultados existem
locate -c ".log"

# Mostrar apenas arquivos que ainda existem no disco
locate -e "bashrc"

# Usar regex
locate -r "/etc/.*\\.conf$"

# Atualizar banco de dados automaticamente (timer do systemd)
sudo systemctl enable --now plocate-updatedb.timer`,language:"bash",title:"locate"}),t.jsxs(Q,{type:"info",title:"find vs locate",children:["Use ",t.jsx("code",{children:"locate"})," quando quiser velocidade (banco pré-indexado). Use ",t.jsx("code",{children:"find"})," quando precisar de buscas em tempo real com critérios avançados (tamanho, data, permissão, ações)."]}),t.jsx("h2",{children:"which e whereis — Encontrando Executáveis"}),t.jsx(f,{code:`# which — mostra o caminho do executável que será rodado
which dnf
# /usr/bin/dnf

which python3
# /usr/bin/python3

# Se o comando não existe (sem saída, exit code 1)
which programa_inexistente

# whereis — binário, código-fonte e manual
whereis dnf
# dnf: /usr/bin/dnf /usr/share/man/man8/dnf.8.gz

# type — o que o shell vai executar (alias, função, builtin ou arquivo)
type ls
# ls is aliased to 'ls --color=auto'

type cd
# cd is a shell builtin`,language:"bash",title:"which, whereis, type"}),t.jsx("h2",{children:"Referência Rápida"}),t.jsx(f,{code:`# NAVEGAÇÃO
pwd                  # Onde estou?
cd /caminho          # Ir para caminho absoluto
cd pasta             # Entrar em pasta (relativo)
cd ..                # Subir um nível
cd ~                 # Ir para home
cd -                 # Voltar ao diretório anterior

# LISTAGEM
ls                   # Listar arquivos
ls -lah              # Listagem completa (a mais usada)
ls -lhS              # Ordenar por tamanho
tree -L 2            # Árvore de 2 níveis

# BUSCA
find . -name "*.txt"         # Buscar por nome
find . -size +100M           # Buscar por tamanho
find . -mtime -7             # Modificados em 7 dias
locate arquivo.conf          # Busca rápida no banco
which comando                # Caminho do executável`,language:"bash",title:"referência rápida"})]})}function Jv(){return t.jsxs(ie,{title:"Manipulação de Arquivos e Diretórios",subtitle:"Comandos essenciais para criar, copiar, mover, renomear e apagar arquivos e pastas no Linux.",difficulty:"iniciante",timeToRead:"25 min",children:[t.jsxs("h2",{children:[t.jsx(In,{className:"inline-block mr-2 mb-1 w-5 h-5"})," touch — Criar Arquivos Vazios"]}),t.jsxs("p",{children:["O ",t.jsx("code",{children:"touch"})," cria arquivos vazios ou atualiza a data de modificação de arquivos existentes."]}),t.jsx(f,{code:`# Criar um arquivo vazio
touch novo_arquivo.txt

# Criar múltiplos arquivos de uma vez
touch arquivo1.txt arquivo2.txt arquivo3.txt

# Criar arquivo com nome que tem espaço
touch "meu arquivo.txt"

# Atualizar a data de modificação de um arquivo existente
touch arquivo-existente.txt

# Criar com chaves (expansão de chaves — muito prático)
touch relatorio_{jan,fev,mar}.txt
# cria: relatorio_jan.txt, relatorio_fev.txt, relatorio_mar.txt`,language:"bash",title:"touch"}),t.jsx("h2",{children:"mkdir — Criar Diretórios"}),t.jsx(f,{code:`# Criar um diretório
mkdir nova_pasta

# Criar múltiplas pastas de uma vez
mkdir pasta1 pasta2 pasta3

# Criar toda a árvore de diretórios (flag -p)
mkdir -p projetos/2026/janeiro
# Cria: projetos/ → 2026/ → janeiro/  (mesmo se projetos/ não existir)

# Criar com permissões específicas
mkdir -m 755 minha-pasta

# Expansão de chaves
mkdir -p projetos/{frontend,backend,docs}
# cria: projetos/frontend, projetos/backend, projetos/docs`,language:"bash",title:"mkdir"}),t.jsxs("h2",{children:[t.jsx(Kn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," cp — Copiar Arquivos e Diretórios"]}),t.jsx(f,{code:`# Copiar arquivo para a mesma pasta com outro nome
cp foto.jpg foto_backup.jpg

# Copiar arquivo para outro diretório
cp documento.pdf /home/usuario/Documentos/

# Copiar múltiplos arquivos para uma pasta
cp doc1.txt doc2.txt /home/usuario/Documentos/

# Copiar uma pasta inteira e seu conteúdo (requer -r de recursivo)
cp -r pasta_projetos/ backup_projetos/

# Avisar antes de sobrescrever (-i de interactive)
cp -i importante.txt /backup/

# Preservar permissões, dono e timestamps (-p)
cp -p arquivo.conf /backup/

# Copiar preservando tudo: -a é o mais completo
cp -a pasta_original/ pasta_backup/

# Mostrar o que está sendo copiado (-v de verbose)
cp -rv pasta_grande/ /backup/

# Copiar apenas se o arquivo destino é mais antigo (-u de update)
cp -u *.txt /backup/`,language:"bash",title:"cp"}),t.jsx("h2",{children:"mv — Mover e Renomear"}),t.jsx(f,{code:`# Renomear um arquivo
mv projeto_velho.txt projeto_novo.txt

# Mover arquivo para outra pasta
mv relatorio.pdf /home/usuario/Documentos/

# Mover múltiplos arquivos usando wildcard (*)
mv *.jpg /home/usuario/Imagens/

# Mover pasta inteira
mv projetos/ /home/usuario/backup/

# Avisar antes de sobrescrever (-i)
mv -i arquivo.txt /destino/

# Não sobrescrever se já existir (-n)
mv -n arquivo.txt /destino/

# Mostrar o que está sendo feito (-v)
mv -v *.log /var/log/antigos/

# Renomear vários arquivos com loop
for f in *.txt; do
  mv "$f" "\${f%.txt}.md"    # troca extensão .txt por .md
done`,language:"bash",title:"mv"}),t.jsxs("h2",{children:[t.jsx(Ch,{className:"inline-block mr-2 mb-1 w-5 h-5"})," rm — Remover Arquivos"]}),t.jsxs(Q,{type:"danger",title:"Cuidado: rm é permanente",children:["Arquivos deletados com ",t.jsx("code",{children:"rm"})," ",t.jsx("strong",{children:"não vão para a lixeira"})," — são apagados definitivamente. Sempre verifique o que você está removendo antes de confirmar."]}),t.jsx(f,{code:`# Apagar um arquivo simples
rm arquivo.txt

# Apagar múltiplos arquivos
rm arquivo1.txt arquivo2.txt

# Apagar todos os arquivos com extensão .log
rm *.log

# Pedir confirmação antes de apagar cada arquivo (-i)
rm -i importante.txt

# Apagar pasta inteira e todo o seu conteúdo
rm -r pasta_antiga/

# Apagar pasta sem pedir confirmação (-f de force)
rm -rf pasta_para_deletar/

# Mostrar o que está sendo apagado (-v)
rm -rv /tmp/lixo/

# NUNCA FAÇA ISSO:
# rm -rf /          ← apaga TUDO do sistema (requer --no-preserve-root)
# rm -rf ~          ← apaga sua pasta home`,language:"bash",title:"rm"}),t.jsx("h2",{children:"rmdir — Remover Diretórios Vazios"}),t.jsx(f,{code:`# Apagar um diretório vazio
rmdir pasta_vazia

# Apagar diretórios vazios aninhados (-p)
rmdir -p projetos/2025/dezembro

# Verificar se está vazio antes
ls -la pasta/   # se apenas mostrar . e .. está vazio`,language:"bash",title:"rmdir"}),t.jsxs("h2",{children:[t.jsx(Vx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Links Simbólicos (ln -s)"]}),t.jsx("p",{children:'Links simbólicos são como atalhos do Windows — apontam para outro arquivo ou diretório. Se você modificar o link, modifica o original. Se deletar o original, o link fica "quebrado".'}),t.jsx(f,{code:`# Criar link simbólico (atalho)
# Sintaxe: ln -s [arquivo_original] [nome_do_link]
ln -s arquivo_real.txt atalho.txt

# Exemplo prático: link para um diretório
ln -s /mnt/hd-externo/projetos ~/projetos

# Criar link simbólico para configuração (muito usado em servidores)
sudo ln -s /etc/nginx/sites-available/meusite.conf            /etc/nginx/sites-enabled/meusite.conf

# Ver para onde um link aponta
ls -la atalho.txt
# atalho.txt -> arquivo_real.txt

readlink atalho.txt
# arquivo_real.txt

# Apagar um link simbólico (não apaga o original)
rm atalho.txt

# Link físico (hard link) — sem o -s
# Hard links são duas entradas que apontam para os mesmos dados no disco
ln arquivo_original.txt hardlink.txt`,language:"bash",title:"links simbólicos"}),t.jsx("h2",{children:"Operações em Massa com Wildcards"}),t.jsx(f,{code:`# * = qualquer sequência de caracteres
cp *.txt /backup/         # todos os .txt
rm *.log                  # todos os .log
mv relatorio_* /arquivo/  # tudo que começa com relatorio_

# ? = um único caractere qualquer
ls arquivo?.txt           # arquivo1.txt, arquivo2.txt, arquivoA.txt...

# [abc] = um dos caracteres dentro dos colchetes
ls arquivo[123].txt       # arquivo1.txt, arquivo2.txt ou arquivo3.txt

# {a,b,c} = expansão de chaves (gera múltiplos valores)
mkdir {frontend,backend,docs}
cp arquivo.{txt,md,pdf} /backup/
touch log_{2024,2025,2026}.txt`,language:"bash",title:"wildcards e expansão"}),t.jsx("h2",{children:"Referência Rápida"}),t.jsx(f,{code:`# CRIAR
touch arquivo.txt          # Criar arquivo vazio
mkdir pasta                # Criar diretório
mkdir -p a/b/c             # Criar árvore de diretórios

# COPIAR
cp origem destino          # Copiar arquivo
cp -r pasta/ backup/       # Copiar pasta inteira
cp -a pasta/ backup/       # Copiar preservando tudo

# MOVER / RENOMEAR
mv velho.txt novo.txt      # Renomear
mv arquivo.txt /pasta/     # Mover

# APAGAR
rm arquivo.txt             # Apagar arquivo
rm -r pasta/               # Apagar pasta
rm -i arquivo.txt          # Apagar com confirmação

# LINKS
ln -s original link        # Criar link simbólico
readlink link              # Ver para onde aponta
ls -la                     # Ver links (indicados com →)`,language:"bash",title:"referência rápida"})]})}function $v(){return t.jsxs(ie,{title:"Visualização de Arquivos",subtitle:"Aprenda a ler, inspecionar e analisar arquivos de texto diretamente no terminal: cat, less, head, tail, grep, diff e mais.",difficulty:"iniciante",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Pn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," cat — Exibir Conteúdo"]}),t.jsxs("p",{children:["O ",t.jsx("code",{children:"cat"})," (concatenate) exibe o conteúdo de arquivos. Ideal para arquivos curtos."]}),t.jsx(f,{code:`# Exibir conteúdo de um arquivo
cat /etc/hostname

# Exibir múltiplos arquivos (concatenar)
cat arquivo1.txt arquivo2.txt

# Exibir com números de linha
cat -n /etc/dnf/dnf.conf

# Exibir com números apenas em linhas não-vazias
cat -b /etc/dnf/dnf.conf

# Mostrar caracteres invisíveis (tabs como ^I, fim de linha como $)
cat -A arquivo.txt

# Comprimir linhas em branco consecutivas em uma só
cat -s arquivo-com-muitas-linhas-vazias.txt`,language:"bash",title:"cat — leitura"}),t.jsx(f,{code:`# Criar um arquivo rapidamente (terminar com Ctrl+D)
cat > notas.txt
Este é o conteúdo do arquivo.
Pressione Ctrl+D para salvar.

# Adicionar conteúdo ao final de um arquivo (append)
cat >> notas.txt
Mais uma linha adicionada.

# Concatenar vários arquivos em um só
cat parte1.txt parte2.txt parte3.txt > documento-completo.txt`,language:"bash",title:"cat — criação e concatenação"}),t.jsx("h2",{children:"less — Leitura Paginada (Recomendado)"}),t.jsxs("p",{children:["Para arquivos grandes, o ",t.jsx("code",{children:"less"})," é muito superior ao ",t.jsx("code",{children:"cat"})," — ele pagina o conteúdo e permite navegação e busca."]}),t.jsx(f,{code:`# Abrir arquivo para leitura paginada
less /var/log/dnf.log

# Abrir com números de linha
less -N /etc/dnf/dnf.conf

# Abrir ignorando maiúsculas na busca
less -i arquivo.txt

# Abrir múltiplos arquivos (navegar com :n e :p)
less arquivo1.txt arquivo2.txt`,language:"bash",title:"less"}),t.jsx(f,{code:`NAVEGAÇÃO:
  Espaço / Page Down    Avançar uma página
  b / Page Up           Voltar uma página
  j / Seta para baixo   Avançar uma linha
  k / Seta para cima    Voltar uma linha
  G                     Ir para o final do arquivo
  g                     Ir para o início do arquivo
  50g                   Ir para a linha 50

BUSCA:
  /padrão               Buscar para frente
  ?padrão               Buscar para trás
  n                     Próxima ocorrência
  N                     Ocorrência anterior
  &padrão               Mostrar APENAS linhas que contêm o padrão

OUTROS:
  q                     Sair
  h                     Ajuda
  :n                    Próximo arquivo
  :p                    Arquivo anterior`,language:"bash",title:"atalhos do less"}),t.jsx("h2",{children:"head e tail — Partes do Arquivo"}),t.jsx(f,{code:`# === HEAD — primeiras linhas ===
# Primeiras 10 linhas (padrão)
head /etc/dnf/dnf.conf

# Primeiras 20 linhas
head -n 20 /etc/dnf/dnf.conf

# Primeiras 5 linhas de múltiplos arquivos
head -n 5 arquivo1.txt arquivo2.txt

# Primeiros 100 bytes
head -c 100 arquivo.bin

# Tudo EXCETO as últimas 5 linhas
head -n -5 arquivo.txt

# Uso prático: ver os 10 maiores arquivos
du -ah /var | sort -rh | head -10

# Ver os processos que mais consomem memória
ps aux --sort=-%mem | head -10`,language:"bash",title:"head"}),t.jsx(f,{code:`# === TAIL — últimas linhas ===
# Últimas 10 linhas (padrão)
tail /var/log/dnf.log

# Últimas 30 linhas
tail -n 30 /var/log/dnf.log

# Últimas linhas a partir da linha 100
tail -n +100 arquivo.txt

# Últimos 200 bytes
tail -c 200 arquivo.txt

# === -f: Seguir log em tempo real ===
tail -f /var/log/messages

# Seguir múltiplos arquivos
tail -f /var/log/messages /var/log/secure

# Seguir com tentativas de reabrir o arquivo
tail -F /var/log/messages

# Combinação poderosa: seguir log e filtrar
tail -f /var/log/messages | grep -i "error"

# Para parar: Ctrl+C`,language:"bash",title:"tail e tail -f"}),t.jsxs("h2",{children:[t.jsx(Bx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," grep — Buscar Dentro de Arquivos"]}),t.jsx(f,{code:`# Buscar uma palavra em um arquivo
grep "error" /var/log/dnf.log

# Buscar ignorando maiúsculas/minúsculas
grep -i "error" /var/log/dnf.log

# Buscar recursivamente em todos os arquivos de um diretório
grep -r "TODO" ~/projetos/

# Buscar e mostrar o número da linha
grep -n "gpgcheck" /etc/dnf/dnf.conf

# Buscar e mostrar contexto (3 linhas antes e depois)
grep -C 3 "error" /var/log/messages

# Buscar apenas 2 linhas antes do match
grep -B 2 "failed" /var/log/messages

# Buscar apenas 2 linhas depois do match
grep -A 2 "failed" /var/log/messages`,language:"bash",title:"grep básico"}),t.jsx(f,{code:`# Busca invertida: linhas que NÃO contêm o padrão
grep -v "^#" /etc/dnf/dnf.conf     # Remove linhas de comentário

# Contar ocorrências
grep -c "Installed" /var/log/dnf.log

# Mostrar apenas os nomes dos arquivos que contêm o padrão
grep -l "TODO" *.py

# Usar regex estendida
grep -E "(error|warning|critical)" /var/log/messages

# Buscar palavra exata (não como substring)
grep -w "log" arquivo.txt   # Encontra "log" mas não "login" ou "catalog"

# Combinação com pipes (extremamente comum)
journalctl -b | grep -i "failed" | grep -v "systemd"`,language:"bash",title:"grep avançado"}),t.jsx("h2",{children:"wc — Contar Linhas, Palavras e Bytes"}),t.jsx(f,{code:`# Contagem completa: linhas, palavras, bytes
wc /etc/dnf/dnf.conf
#  linhas  palavras  bytes  nome

# Contar apenas linhas
wc -l /etc/dnf/dnf.conf

# Contar apenas palavras
wc -w arquivo.txt

# Contar apenas caracteres
wc -m arquivo.txt

# Combinações práticas com pipes
ls /etc | wc -l              # Quantos itens tem em /etc
ps aux | wc -l               # Quantos processos estão rodando
grep -c "error" log.txt      # Quantas linhas contêm "error"`,language:"bash",title:"wc"}),t.jsxs("h2",{children:[t.jsx(Hx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," diff — Comparar Arquivos"]}),t.jsx(f,{code:`# Comparação simples
diff arquivo1.txt arquivo2.txt

# Comparação lado a lado
diff -y arquivo1.txt arquivo2.txt

# Formato unificado (o mais legível, usado em patches e Git)
diff -u original.conf modificado.conf
# --- original.conf
# +++ modificado.conf
# @@ -10,3 +10,4 @@
#  linha igual
# -linha removida
# +linha adicionada

# Comparar apenas se são diferentes (sem mostrar detalhes)
diff -q arquivo1.txt arquivo2.txt

# Comparar diretórios recursivamente
diff -r dir1/ dir2/

# Ignorar espaços extras
diff -w arquivo1.txt arquivo2.txt

# Gerar um patch e aplicar
diff -u original.conf modificado.conf > mudancas.patch
patch original.conf < mudancas.patch`,language:"bash",title:"diff"}),t.jsx("h2",{children:"file e strings — Identificar Tipo de Arquivo"}),t.jsx(f,{code:`# Identificar tipo de arquivo (não confia na extensão)
file /bin/bash
# /bin/bash: ELF 64-bit LSB pie executable, x86-64...

file /etc/dnf/dnf.conf
# /etc/dnf/dnf.conf: ASCII text

file imagem.jpg
# imagem.jpg: JPEG image data, JFIF standard 1.01...

file documento.pdf
# documento.pdf: PDF document, version 1.4

# Mostrar tipo MIME
file -i documento.pdf
# documento.pdf: application/pdf; charset=binary

# Verificar múltiplos arquivos
file *

# strings — extrair texto de arquivos binários
strings /usr/bin/ls | head -20

# Ver versão de um programa compilado
strings /usr/bin/gcc | grep "version"

# Encontrar URLs embutidas em um programa
strings programa | grep "http"`,language:"bash",title:"file e strings"}),t.jsx(Q,{type:"info",title:"Referência rápida",children:t.jsxs("table",{className:"w-full text-sm mt-2",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left",children:"Comando"}),t.jsx("th",{className:"text-left",children:"Uso"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"cat arquivo"})}),t.jsx("td",{children:"Arquivos curtos, exibição rápida"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"less arquivo"})}),t.jsx("td",{children:"Arquivos longos, navegação interativa"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"head -n 20 arquivo"})}),t.jsx("td",{children:"Primeiras 20 linhas"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"tail -n 20 arquivo"})}),t.jsx("td",{children:"Últimas 20 linhas"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"tail -f arquivo"})}),t.jsx("td",{children:"Monitorar log em tempo real"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:'grep "padrão" arq'})}),t.jsx("td",{children:"Buscar texto no arquivo"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"diff arq1 arq2"})}),t.jsx("td",{children:"Comparar dois arquivos"})]})]})]})})]})}function Wv(){return t.jsxs(ie,{title:"Usuários e Grupos",subtitle:"Gerencie usuários, grupos e controle de acesso no Fedora Linux com os comandos tradicionais e modernos.",difficulty:"intermediario",timeToRead:"25 min",children:[t.jsxs("h2",{children:[t.jsx(xr,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Conceito de Usuários e Grupos"]}),t.jsxs("p",{children:["O Linux é um sistema multiusuário. Cada usuário tem um ",t.jsx("strong",{children:"UID"})," (User ID) e pertence a um ou mais ",t.jsx("strong",{children:"grupos"})," (GID). O controle de acesso a arquivos e recursos é feito com base no usuário e grupo proprietários."]}),t.jsxs("p",{children:["O usuário ",t.jsx("strong",{children:"root"})," (UID 0) tem acesso total ao sistema. Nunca use root para tarefas cotidianas — use ",t.jsx("code",{children:"sudo"})," somente quando necessário."]}),t.jsxs("h2",{children:[t.jsx(_x,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Gerenciando Usuários"]}),t.jsx(f,{code:`# Ver usuários do sistema
cat /etc/passwd
getent passwd

# Informações do usuário atual
whoami
id
id nome-de-usuario

# Criar um novo usuário
sudo useradd -m -s /bin/bash joao        # -m cria home, -s define shell
sudo useradd -m -G wheel,docker joao     # adiciona ao grupo wheel (sudo) e docker

# Definir senha para o usuário
sudo passwd joao

# Modificar um usuário existente
sudo usermod -s /bin/zsh joao            # mudar shell
sudo usermod -G wheel joao               # adicionar ao grupo wheel (sudo)
sudo usermod -aG docker,video joao       # adicionar a grupos sem remover dos atuais (-a)
sudo usermod -d /novo/home joao          # mudar diretório home

# Remover usuário
sudo userdel joao                        # sem remover home
sudo userdel -r joao                     # remove home e arquivos do usuário

# Travar/destravar conta
sudo usermod -L joao                     # travar (lock)
sudo usermod -U joao                     # destravar (unlock)`,language:"bash",title:"gerenciamento de usuários"}),t.jsx("h2",{children:"Gerenciando Grupos"}),t.jsx(f,{code:`# Ver grupos do sistema
cat /etc/group
getent group

# Grupos do usuário atual
groups
groups joao

# Criar grupo
sudo groupadd desenvolvedores

# Adicionar usuário a um grupo
sudo usermod -aG desenvolvedores joao
sudo gpasswd -a joao desenvolvedores      # forma alternativa

# Remover usuário de um grupo
sudo gpasswd -d joao desenvolvedores

# Remover grupo
sudo groupdel desenvolvedores

# Mudar o grupo primário temporariamente
newgrp docker`,language:"bash",title:"grupos"}),t.jsxs("h2",{children:[t.jsx(Qs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," sudo no Fedora"]}),t.jsxs("p",{children:["No Fedora, o grupo ",t.jsx("strong",{children:"wheel"})," concede acesso ao ",t.jsx("code",{children:"sudo"}),". Qualquer usuário neste grupo pode executar comandos como root."]}),t.jsx(f,{code:`# Verificar se você está no grupo wheel
groups | grep wheel
id | grep wheel

# Adicionar usuário ao wheel (precisa estar logado como root ou outro sudoer)
sudo usermod -aG wheel joao

# Editar configurações do sudo (SEMPRE use visudo)
sudo visudo

# Permitir que um usuário específico use sudo sem senha
# Adicione no final do sudoers:
# joao ALL=(ALL) NOPASSWD: ALL

# Verificar o que pode executar com sudo
sudo -l`,language:"bash",title:"sudo"}),t.jsxs(Q,{type:"warning",title:"Use visudo para editar o sudoers",children:["Nunca edite ",t.jsx("code",{children:"/etc/sudoers"})," diretamente com um editor de texto comum. Use sempre ",t.jsx("code",{children:"sudo visudo"})," — ele valida a sintaxe antes de salvar, evitando travar o acesso sudo por erro de digitação."]}),t.jsx("h2",{children:"Senhas e Segurança"}),t.jsx(f,{code:`# Mudar sua própria senha
passwd

# Mudar senha de outro usuário (como root)
sudo passwd joao

# Ver informações da senha e expiração
sudo chage -l joao

# Definir expiração de senha (força troca em 90 dias)
sudo chage -M 90 joao

# Forçar troca de senha no próximo login
sudo chage -d 0 joao

# Ver últimos logins
last
lastlog
who     # usuários logados agora
w       # usuários logados com atividade`,language:"bash",title:"senhas e segurança"})]})}function eb(){return t.jsxs(ie,{title:"Permissões de Arquivo",subtitle:"Domine o sistema de permissões do Linux — chmod, chown, ACLs e tudo que você precisa saber para proteger seus arquivos.",difficulty:"intermediario",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Qs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Entendendo as Permissões"]}),t.jsx("p",{children:"Cada arquivo no Linux tem três categorias de permissões:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Dono (Owner/User)"})," — o usuário que criou ou possui o arquivo"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Grupo (Group)"})," — o grupo proprietário do arquivo"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Outros (Others)"})," — todos os demais usuários"]})]}),t.jsx("p",{children:"E três tipos de permissão para cada categoria:"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"r (read = 4)"})," — ler o arquivo / listar diretório"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"w (write = 2)"})," — escrever/modificar / criar arquivos no diretório"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"x (execute = 1)"})," — executar / entrar no diretório"]})]}),t.jsx(f,{code:`# Ver permissões de arquivos
ls -la

# Exemplo de saída:
# -rwxr-xr-- 1 joao devs 1234 jan 15 10:30 script.sh
# │└──┬──┘└──┬──┘└──┬──┘
# │   │      │      └── outros: r-- (somente leitura = 4)
# │   │      └───────── grupo:  r-x (leitura e execução = 5)
# │   └──────────────── dono:   rwx (tudo = 7)
# └──────────────────── tipo:   - = arquivo, d = diretório, l = symlink`,language:"bash",title:"lendo permissões"}),t.jsx("h2",{children:"chmod — Alterando Permissões"}),t.jsx(f,{code:`# Notação octal (numérica)
chmod 755 script.sh      # rwxr-xr-x (dono=7, grupo=5, outros=5)
chmod 644 arquivo.txt    # rw-r--r-- (dono=6, grupo=4, outros=4)
chmod 600 privado.txt    # rw------- (somente o dono pode ler e escrever)
chmod 777 pasta/         # rwxrwxrwx (todos têm acesso total — EVITE!)
chmod 000 bloqueado.txt  # ---------- (ninguém acessa)

# Notação simbólica
chmod u+x script.sh      # adiciona execução para o dono (u=user)
chmod g-w arquivo.txt    # remove escrita do grupo (g=group)
chmod o-r privado.txt    # remove leitura para outros (o=others)
chmod a+r arquivo.txt    # adiciona leitura para todos (a=all)
chmod u=rwx,g=rx,o=r arquivo.txt   # define exatamente

# Aplicar recursivamente
chmod -R 755 pasta/`,language:"bash",title:"chmod"}),t.jsx("h2",{children:"chown — Alterando Proprietário"}),t.jsx(f,{code:`# Mudar o dono de um arquivo
sudo chown joao arquivo.txt

# Mudar dono e grupo
sudo chown joao:devs arquivo.txt

# Mudar apenas o grupo
sudo chown :devs arquivo.txt
sudo chgrp devs arquivo.txt    # equivalente

# Recursivamente
sudo chown -R joao:devs pasta/`,language:"bash",title:"chown"}),t.jsxs("h2",{children:[t.jsx(gr,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Permissões Especiais"]}),t.jsx(f,{code:`# SUID (Set User ID) — executa como o dono do arquivo, não como o executor
# Exemplo: /usr/bin/passwd tem SUID para poder modificar /etc/shadow
chmod u+s executavel
chmod 4755 executavel    # octal: 4 ativa SUID

# SGID (Set Group ID) — arquivos criados herdam o grupo do diretório
chmod g+s pasta/
chmod 2755 pasta/        # octal: 2 ativa SGID

# Sticky bit — apenas o dono pode deletar arquivos no diretório
# Usado em /tmp para que cada usuário só apague seus próprios arquivos
chmod +t pasta/
chmod 1777 pasta/        # octal: 1 ativa sticky bit

# Ver permissões especiais
ls -la /tmp    # verá 't' no final: drwxrwxrwt
ls -la /usr/bin/passwd    # verá 's': -rwsr-xr-x`,language:"bash",title:"permissões especiais"}),t.jsx("h2",{children:"ACL — Listas de Controle de Acesso"}),t.jsx(f,{code:`# Instalar ferramentas de ACL
sudo dnf install acl

# Ver ACLs de um arquivo
getfacl arquivo.txt

# Definir ACL para um usuário específico
setfacl -m u:maria:rw arquivo.txt    # maria pode ler e escrever

# Definir ACL para um grupo
setfacl -m g:devs:r arquivo.txt      # grupo devs pode ler

# ACL padrão (herança para novos arquivos em diretório)
setfacl -d -m u:maria:rw pasta/

# Remover ACL específica
setfacl -x u:maria arquivo.txt

# Remover todas as ACLs
setfacl -b arquivo.txt`,language:"bash",title:"acl"}),t.jsxs(Q,{type:"info",title:"Tabela de valores octais",children:[t.jsx("code",{children:"0"}),"=nada, ",t.jsx("code",{children:"1"}),"=x, ",t.jsx("code",{children:"2"}),"=w, ",t.jsx("code",{children:"3"}),"=wx, ",t.jsx("code",{children:"4"}),"=r, ",t.jsx("code",{children:"5"}),"=rx, ",t.jsx("code",{children:"6"}),"=rw, ",t.jsx("code",{children:"7"}),"=rwx. Os três dígitos representam dono, grupo e outros respectivamente."]})]})}function ab(){return t.jsxs(ie,{title:"Processos e Gerenciamento",subtitle:"Entenda, monitore e controle processos no Linux — liste, mate, pause, priorize e gerencie qualquer programa em execução.",difficulty:"intermediario",timeToRead:"35 min",children:[t.jsxs("h2",{children:[t.jsx(Fx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é um Processo?"]}),t.jsxs("p",{children:["Todo programa em execução no Linux é um ",t.jsx("strong",{children:"processo"}),". Cada processo tem um identificador único chamado ",t.jsx("strong",{children:"PID"})," (Process ID). O processo pai que iniciou o sistema é o ",t.jsx("strong",{children:"systemd"})," (PID 1) — todos os demais processos são filhos ou descendentes dele."]}),t.jsxs("p",{children:["Cada processo tem um ",t.jsx("strong",{children:"estado"}),":"]}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Estado"}),t.jsx("th",{children:"Letra"}),t.jsx("th",{children:"Significado"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Running"}),t.jsx("td",{children:t.jsx("code",{children:"R"})}),t.jsx("td",{children:"Em execução ou pronto para executar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Sleeping"}),t.jsx("td",{children:t.jsx("code",{children:"S"})}),t.jsx("td",{children:"Dormindo — aguardando evento (estado normal)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Disk Sleep"}),t.jsx("td",{children:t.jsx("code",{children:"D"})}),t.jsx("td",{children:"Aguardando I/O de disco (não pode ser interrompido)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Stopped"}),t.jsx("td",{children:t.jsx("code",{children:"T"})}),t.jsx("td",{children:"Pausado (ex: Ctrl+Z)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Zombie"}),t.jsx("td",{children:t.jsx("code",{children:"Z"})}),t.jsx("td",{children:"Finalizado mas pai ainda não leu o status"})]})]})]}),t.jsx("h2",{children:"Listando Processos"}),t.jsx("h3",{children:"ps — Snapshot dos processos"}),t.jsx(f,{code:`# Listar processos do usuário atual
ps

# Listar TODOS os processos do sistema (formato BSD)
ps aux

# Listar todos com formato longo (mostra PPID, SID...)
ps -ef

# Listar em formato de árvore (quem iniciou quem)
ps auxf
ps -ejH

# Filtrar por nome
ps aux | grep firefox
ps -C firefox         # forma direta

# Filtrar por usuário
ps -u joao

# Mostrar apenas PIDs de um programa
ps -C nginx -o pid=
pgrep nginx           # forma mais simples`,language:"bash",title:"ps — listar processos"}),t.jsx("h3",{children:"Entendendo a saída do ps aux"}),t.jsx(f,{code:`# Colunas do ps aux:
USER       PID  %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1   0.0  0.1 170152 12288 ?        Ss   Jan01   0:02 /usr/lib/systemd/systemd
joao      2547   2.1  4.8 2105432 389556 ?      Sl   10:21   1:45 /usr/lib/firefox/firefox

# USER   = usuário dono do processo
# PID    = identificador único do processo
# %CPU   = porcentagem de CPU usada
# %MEM   = porcentagem de RAM usada
# VSZ    = memória virtual total (pode incluir partes não carregadas)
# RSS    = memória RAM real usada (mais confiável)
# TTY    = terminal vinculado (? = sem terminal, processo de sistema)
# STAT   = estado do processo (S=sleeping, R=running, Z=zombie...)
# START  = quando o processo iniciou
# TIME   = tempo total de CPU consumido
# COMMAND = comando que iniciou o processo`,language:"bash",title:"lendo ps aux"}),t.jsx("h3",{children:"pgrep e pidof — Encontrar PIDs"}),t.jsx(f,{code:`# Encontrar PID de um processo pelo nome
pgrep firefox
pgrep -l firefox          # mostra nome + PID
pgrep -a firefox          # mostra comando completo

# Encontrar todos os PIDs de processos com o nome exato
pidof firefox

# Encontrar PID com expressão regular
pgrep "fire.*"

# Encontrar processos de um usuário específico
pgrep -u joao

# Encontrar processo mais recente com esse nome
pgrep -n firefox          # -n = newest (mais recente)
pgrep -o firefox          # -o = oldest (mais antigo)`,language:"bash",title:"pgrep e pidof"}),t.jsxs("h2",{children:[t.jsx(wt,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Monitoramento em Tempo Real"]}),t.jsx("h3",{children:"top — Monitor básico"}),t.jsx(f,{code:`# Abrir o top
top

# Comandos DENTRO do top:
# q         = sair
# k         = matar processo (pede o PID)
# r         = mudar prioridade (renice)
# M         = ordenar por uso de memória
# P         = ordenar por uso de CPU (padrão)
# T         = ordenar por tempo de CPU
# u         = filtrar por usuário
# 1         = mostrar cada núcleo de CPU separadamente
# h         = ajuda

# Executar top e sair automaticamente após 1 ciclo
top -b -n 1 | head -20`,language:"bash",title:"top"}),t.jsx("h3",{children:"htop — Monitor avançado (recomendado)"}),t.jsx(f,{code:`# Instalar o htop (pode já vir instalado)
sudo dnf install htop

# Abrir o htop
htop

# Comandos DENTRO do htop:
# F1 / ?    = ajuda
# F2        = configurações (personalizar colunas, cores)
# F3 / /    = buscar processo por nome
# F4        = filtrar (mostrar apenas processos filtrados)
# F5        = modo árvore (ver hierarquia pai/filho)
# F6        = ordenar por coluna
# F7        = diminuir prioridade (nice +)
# F8        = aumentar prioridade (nice -)
# F9        = matar processo (escolhe o sinal)
# F10 / q   = sair
# Espaço    = marcar processo (para operações em lote)
# Setas     = navegar na lista`,language:"bash",title:"htop"}),t.jsx("h3",{children:"btop — Monitor moderno e visual"}),t.jsx(f,{code:`# Instalar o btop
sudo dnf install btop

# Abre uma interface gráfica moderna no terminal
# com gráficos de CPU, memória, rede e disco em tempo real
btop`,language:"bash",title:"btop"}),t.jsxs("h2",{children:[t.jsx(vr,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Matando Processos"]}),t.jsxs("p",{children:["Para encerrar um processo, você envia um ",t.jsx("strong",{children:"sinal"})," a ele. O sinal mais comum é o ",t.jsx("code",{children:"SIGTERM"})," (15) — um pedido educado para encerrar. Se o processo não responder, use ",t.jsx("code",{children:"SIGKILL"})," (9) — que o kernel encerra imediatamente, sem dar chance ao processo de reagir."]}),t.jsx("h3",{children:"kill — Matar pelo PID"}),t.jsx(f,{code:`# Enviar SIGTERM (pedido de encerramento — o processo pode ignorar)
kill 1234              # kill PID

# Enviar SIGKILL (encerramento forçado — impossível ignorar)
kill -9 1234
kill -KILL 1234        # equivalente

# Enviar SIGHUP (recarregar configurações — útil para serviços)
kill -HUP 1234
kill -1 1234

# Enviar SIGSTOP (pausar o processo, como Ctrl+Z)
kill -STOP 1234

# Enviar SIGCONT (continuar processo pausado)
kill -CONT 1234

# Matar múltiplos PIDs de uma vez
kill 1234 5678 9012`,language:"bash",title:"kill"}),t.jsx("h3",{children:"killall — Matar pelo nome"}),t.jsx(f,{code:`# Matar todos os processos com esse nome (SIGTERM)
killall firefox

# Forçar encerramento (SIGKILL)
killall -9 firefox
killall -KILL firefox

# Matar apenas do usuário atual
killall -u joao firefox

# Pedir confirmação antes de matar
killall -i firefox

# Matar e aguardar o processo encerrar
killall -w firefox

# Ver quais processos seriam mortos (sem matar)
killall --list firefox   # não existe, use pgrep antes`,language:"bash",title:"killall"}),t.jsx("h3",{children:"pkill — Matar com padrão de busca"}),t.jsx(f,{code:`# Matar processos cujo nome corresponde ao padrão
pkill firefox
pkill "fire.*"          # expressão regular

# Forçar encerramento
pkill -9 firefox
pkill -KILL firefox

# Matar processos de um usuário específico
pkill -u joao firefox

# Matar processos em um terminal específico
pkill -t pts/1          # mata tudo no terminal pts/1

# Matar processo pai e filhos (grupo de processo)
pkill -g PID`,language:"bash",title:"pkill"}),t.jsx("h3",{children:"xkill — Matar clicando na janela"}),t.jsx(f,{code:`# Instalar xkill (se não tiver)
sudo dnf install xorg-x11-apps

# Executar xkill — o cursor vira uma caveira
# Clique na janela que você quer fechar
xkill

# Dica: crie um atalho de teclado no GNOME para xkill
# Configurações → Teclado → Atalhos → Personalizado → xkill`,language:"bash",title:"xkill — clique para matar"}),t.jsx(Q,{type:"warning",title:"Ordem recomendada para matar processos",children:t.jsxs("ol",{className:"list-decimal pl-4 mt-2 space-y-1 text-sm",children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Primeiro:"})," tente fechar normalmente pelo próprio aplicativo"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Segundo:"})," use ",t.jsx("code",{children:"kill PID"})," ou ",t.jsx("code",{children:"killall nome"})," (SIGTERM — educado)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Terceiro:"})," use ",t.jsx("code",{children:"kill -9 PID"})," (SIGKILL — força bruta)"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Nunca"})," mate o PID 1 (systemd) — derruba o sistema"]})]})}),t.jsxs("h2",{children:[t.jsx(Qx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Sinais Linux — Tabela Completa"]}),t.jsx(f,{code:`# Ver todos os sinais disponíveis
kill -l

# Sinais mais importantes:
# Num  Nome      O que faz
#  1   SIGHUP    Recarregar configurações (hangup)
#  2   SIGINT    Interrupção (equivale ao Ctrl+C)
#  3   SIGQUIT   Encerrar com dump (Ctrl+\\)
#  9   SIGKILL   Matar imediatamente (NÃO pode ser ignorado)
# 15   SIGTERM   Pedido de encerramento (pode ser ignorado)
# 17   SIGCHLD   Filho terminou (usado pelo processo pai)
# 18   SIGCONT   Continuar processo pausado
# 19   SIGSTOP   Pausar processo (NÃO pode ser ignorado)
# 20   SIGTSTP   Suspender (Ctrl+Z — pode ser ignorado)`,language:"bash",title:"sinais"}),t.jsx("h2",{children:"Prioridade de Processos (nice)"}),t.jsxs("p",{children:["O valor de ",t.jsx("strong",{children:"nice"})," define a prioridade de um processo: vai de ",t.jsx("code",{children:"-20"})," (máxima prioridade) a ",t.jsx("code",{children:"19"})," (mínima prioridade). O padrão é ",t.jsx("code",{children:"0"}),". Valores mais baixos significam mais CPU."]}),t.jsx(f,{code:`# Iniciar um processo com prioridade baixa (não atrapalha o sistema)
nice -n 15 comando

# Iniciar com prioridade alta (requer sudo)
sudo nice -n -10 comando

# Mudar a prioridade de um processo já em execução
renice -n 10 -p 1234        # diminui prioridade do PID 1234
sudo renice -n -5 -p 1234   # aumenta prioridade (requer sudo)
renice -n 10 -u joao        # muda prioridade de todos os processos do usuário

# Ver prioridade atual dos processos
ps -eo pid,ni,comm          # PID, nice, nome
top                          # coluna NI`,language:"bash",title:"nice e renice"}),t.jsx("h2",{children:"Processos em Background e Foreground"}),t.jsx(f,{code:`# Iniciar processo em background (não trava o terminal)
comando &
sleep 60 &

# Ver processos em background
jobs
jobs -l    # com PIDs

# Trazer processo para foreground (frente)
fg         # o mais recente
fg %1      # job número 1
fg %nome   # pelo nome

# Enviar para background (precisa pausar primeiro)
Ctrl + Z   # pausa o processo atual
bg         # retoma em background
bg %1      # job específico

# Ver status de um job
jobs -l

# Desacoplar processo do terminal (persiste após fechar o terminal)
nohup comando &
nohup comando > saida.log 2>&1 &

# Desacoplar processo já em execução
# 1. Ctrl+Z (pausa)
# 2. bg (coloca em background)
# 3. disown (desacopla do terminal)
disown %1`,language:"bash",title:"background e foreground"}),t.jsx("h2",{children:"Informações Detalhadas de um Processo"}),t.jsx(f,{code:`# Ver informações completas de um processo (pasta virtual /proc)
ls /proc/1234/             # tudo sobre o PID 1234

# Arquivos e descritores abertos
lsof -p 1234

# Qual programa abriu um arquivo específico
lsof /var/log/nginx/access.log
fuser /var/log/nginx/access.log

# Conexões de rede de um processo
ss -tulpn | grep PID
lsof -p 1234 -i

# Árvore de processos
pstree                    # todos os processos
pstree -p                 # com PIDs
pstree -u joao            # processos do usuário joao
pstree -p 1234            # subárvore a partir do PID 1234`,language:"bash",title:"informações detalhadas"})]})}function tb(){return t.jsxs(ie,{title:"Systemd e Serviços",subtitle:"Gerencie serviços, units e o sistema de inicialização do Fedora com o systemd — da inicialização ao monitoramento.",difficulty:"intermediario",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Jn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é Systemd?"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"systemd"})," é o sistema de inicialização (",t.jsx("em",{children:"init system"}),") do Fedora. Ele é responsável por inicializar o sistema, gerenciar serviços, montar sistemas de arquivos, gerenciar sessões de usuário e muito mais. Substituiu o antigo SysV init."]}),t.jsxs("p",{children:["No systemd, tudo é organizado em ",t.jsx("strong",{children:"units"})," — arquivos de configuração que descrevem serviços, dispositivos, pontos de montagem, timers, etc."]}),t.jsx("h2",{children:"systemctl — Gerenciando Serviços"}),t.jsx(f,{code:`# Ver status de um serviço
systemctl status nginx
systemctl status sshd

# Iniciar um serviço
sudo systemctl start nginx

# Parar um serviço
sudo systemctl stop nginx

# Reiniciar um serviço
sudo systemctl restart nginx

# Recarregar configurações (sem parar)
sudo systemctl reload nginx

# Habilitar serviço na inicialização do sistema
sudo systemctl enable nginx

# Habilitar e já iniciar
sudo systemctl enable --now nginx

# Desabilitar na inicialização
sudo systemctl disable nginx

# Verificar se está habilitado
systemctl is-enabled nginx

# Verificar se está ativo
systemctl is-active nginx`,language:"bash",title:"gerenciamento de serviços"}),t.jsx("h2",{children:"Listando e Filtrando Units"}),t.jsx(f,{code:`# Listar serviços em execução
systemctl list-units --type=service --state=running

# Listar todos os serviços
systemctl list-units --type=service

# Listar serviços com falha
systemctl list-units --type=service --state=failed
systemctl --failed

# Listar todos os arquivos de unit (incluindo desabilitados)
systemctl list-unit-files --type=service

# Filtrar por estado
systemctl list-units --state=active
systemctl list-units --state=inactive`,language:"bash",title:"listando units"}),t.jsx("h2",{children:"journalctl — Logs do Sistema"}),t.jsx(f,{code:`# Ver todos os logs
journalctl

# Logs de um serviço específico
journalctl -u nginx
journalctl -u sshd -f       # -f: acompanhar em tempo real

# Logs desde o último boot
journalctl -b

# Logs do boot anterior
journalctl -b -1

# Logs das últimas 2 horas
journalctl --since "2 hours ago"

# Logs entre datas
journalctl --since "2024-01-01 10:00" --until "2024-01-01 12:00"

# Logs de prioridade erro ou superior
journalctl -p err
journalctl -p 0..3           # emerg, alert, crit, err

# Seguir logs em tempo real
journalctl -f

# Limpar logs antigos
sudo journalctl --vacuum-time=30d    # manter últimos 30 dias
sudo journalctl --vacuum-size=1G     # manter até 1GB`,language:"bash",title:"journalctl"}),t.jsx("h2",{children:"Criando um Serviço Personalizado"}),t.jsx(f,{code:`# Criar arquivo de unit para um serviço personalizado
sudo nano /etc/systemd/system/meu-app.service

# Conteúdo do arquivo:
[Unit]
Description=Meu Aplicativo Web
After=network.target

[Service]
Type=simple
User=appuser
WorkingDirectory=/opt/meu-app
ExecStart=/opt/meu-app/start.sh
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target

# Recarregar o systemd para reconhecer o novo serviço
sudo systemctl daemon-reload

# Habilitar e iniciar
sudo systemctl enable --now meu-app`,language:"bash",title:"serviço personalizado"}),t.jsx("h2",{children:"Systemd Timers (agendamento)"}),t.jsx(f,{code:`# Timers substituem o cron no systemd. Exemplo de backup diário:

# 1. Criar o serviço
sudo nano /etc/systemd/system/backup.service
# [Unit]
# Description=Backup diário
# [Service]
# Type=oneshot
# ExecStart=/usr/local/bin/backup.sh

# 2. Criar o timer
sudo nano /etc/systemd/system/backup.timer
# [Unit]
# Description=Executar backup diariamente
# [Timer]
# OnCalendar=daily
# Persistent=true
# [Install]
# WantedBy=timers.target

# 3. Habilitar o timer
sudo systemctl enable --now backup.timer

# Listar timers ativos
systemctl list-timers`,language:"bash",title:"systemd timers"}),t.jsx(Q,{type:"info",title:"systemd vs SysV",children:"O systemd inicia serviços em paralelo (muito mais rápido que o SysV), usa cgroups para isolamento de processos e oferece logging integrado via journald. O tempo de boot do Fedora é muito menor que distribuições antigas por causa disso."})]})}function sb(){return t.jsxs(ie,{title:"Configuração de Rede",subtitle:"Configure interfaces de rede, IP estático, DNS e diagnostique problemas de conectividade no Fedora.",difficulty:"intermediario",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Sh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," NetworkManager no Fedora"]}),t.jsxs("p",{children:["O Fedora usa o ",t.jsx("strong",{children:"NetworkManager"})," para gerenciar conexões de rede. Você pode configurá-lo via interface gráfica (GNOME Settings), linha de comando (",t.jsx("code",{children:"nmcli"}),") ou arquivo de configuração."]}),t.jsx("h2",{children:"nmcli — NetworkManager na Linha de Comando"}),t.jsx(f,{code:`# Ver status das conexões
nmcli
nmcli device status
nmcli connection show

# Ver informações de uma interface
nmcli device show eth0
nmcli device show wlan0

# Listar redes Wi-Fi disponíveis
nmcli device wifi list

# Conectar a uma rede Wi-Fi
nmcli device wifi connect "Nome_da_Rede" password "senha123"

# Desconectar de uma rede
nmcli device disconnect wlan0

# Habilitar/desabilitar interfaces
nmcli device disconnect eth0
nmcli device connect eth0

# Ligar/desligar Wi-Fi
nmcli radio wifi off
nmcli radio wifi on`,language:"bash",title:"nmcli básico"}),t.jsx("h2",{children:"Configurando IP Estático"}),t.jsx(f,{code:`# Ver conexões atuais
nmcli connection show

# Configurar IP estático (substitua os valores)
nmcli connection modify "Wired connection 1"   ipv4.method manual   ipv4.addresses 192.168.1.100/24   ipv4.gateway 192.168.1.1   ipv4.dns "8.8.8.8,1.1.1.1"

# Aplicar as alterações
nmcli connection up "Wired connection 1"

# Voltar para DHCP
nmcli connection modify "Wired connection 1" ipv4.method auto
nmcli connection up "Wired connection 1"`,language:"bash",title:"ip estático"}),t.jsx("h2",{children:"Diagnóstico de Rede"}),t.jsx(f,{code:`# Ver endereços IP
ip addr show
ip addr show eth0      # interface específica
hostname -I            # IPs do sistema

# Ver tabela de roteamento
ip route show
ip route get 8.8.8.8   # rota para um destino

# Testar conectividade
ping 8.8.8.8           # testar internet
ping -c 4 google.com   # 4 pings apenas

# Testar resolução DNS
nslookup google.com
dig google.com
host google.com

# Ver conexões ativas
ss -tulpn              # portas TCP/UDP abertas
ss -s                  # estatísticas de sockets

# Verificar rota e saltos
traceroute google.com
tracepath google.com   # versão sem precisar de root

# Verificar conectividade HTTP
curl -I https://fedoraproject.org
wget --spider https://fedoraproject.org`,language:"bash",title:"diagnóstico"}),t.jsxs("h2",{children:[t.jsx(Io,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Configurando DNS"]}),t.jsx(f,{code:`# Ver DNS configurado
cat /etc/resolv.conf
nmcli connection show "Wired connection 1" | grep dns

# Configurar DNS via nmcli
nmcli connection modify "Wired connection 1" ipv4.dns "1.1.1.1 8.8.8.8"

# Usar o systemd-resolved para caching DNS
systemctl status systemd-resolved
sudo systemctl enable --now systemd-resolved

# Ver servidores DNS em uso pelo resolved
resolvectl status
resolvectl dns`,language:"bash",title:"configuração dns"}),t.jsx("h2",{children:"SSH — Acesso Remoto"}),t.jsx(f,{code:`# Instalar servidor SSH
sudo dnf install openssh-server

# Habilitar e iniciar o SSH
sudo systemctl enable --now sshd

# Conectar a um servidor remoto
ssh usuario@192.168.1.100
ssh usuario@servidor.exemplo.com

# Conexão com chave SSH
ssh -i ~/.ssh/id_rsa usuario@servidor

# Gerar par de chaves SSH
ssh-keygen -t ed25519 -C "meu@email.com"

# Copiar chave pública para servidor
ssh-copy-id usuario@servidor

# Configurar o cliente SSH (~/.ssh/config)
# Host meuservidor
#     HostName 192.168.1.100
#     User joao
#     IdentityFile ~/.ssh/id_ed25519`,language:"bash",title:"ssh"}),t.jsxs(Q,{type:"info",title:"Firewall e SSH",children:["Se o SSH não estiver acessível, verifique o firewall: ",t.jsx("code",{children:"sudo firewall-cmd --add-service=ssh --permanent && sudo firewall-cmd --reload"})]})]})}function ob(){return t.jsxs(ie,{title:"SSH — Acesso Remoto Seguro",subtitle:"Conecte-se a servidores remotos com segurança, gerencie chaves, configure o servidor SSH e domine tunneling e transferência de arquivos.",difficulty:"intermediario",timeToRead:"45 min",children:[t.jsxs("h2",{children:[t.jsx(gr,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é SSH?"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"SSH (Secure Shell)"})," é o protocolo padrão para acesso remoto seguro a sistemas Linux. Toda comunicação é criptografada, tornando-o seguro mesmo em redes públicas. No Fedora, o pacote utilizado é o ",t.jsx("strong",{children:"openssh"}),", que fornece tanto o cliente (",t.jsx("code",{children:"ssh"}),") quanto o servidor (",t.jsx("code",{children:"sshd"}),")."]}),t.jsx("h2",{children:"1. Instalação do OpenSSH"}),t.jsx(f,{code:`# Instalar o pacote openssh
sudo dnf install openssh openssh-server openssh-clients

# Verificar a versão instalada
ssh -V`,language:"bash",title:"instalando openssh"}),t.jsx("h2",{children:"2. Conectando a um Servidor"}),t.jsx(f,{code:`# Conectar com usuário padrão (usa o usuário local atual)
ssh servidor.exemplo.com

# Conectar com usuário específico
ssh usuario@servidor.exemplo.com

# Conectar em uma porta diferente (padrão: 22)
ssh -p 2222 usuario@servidor.exemplo.com

# Conectar com verbose para debug de problemas
ssh -v usuario@servidor.exemplo.com

# Executar um comando remoto sem abrir shell interativo
ssh usuario@servidor.exemplo.com "df -h && uptime"

# Manter a conexão ativa com keepalive
ssh -o ServerAliveInterval=60 usuario@servidor.exemplo.com`,language:"bash",title:"conectando"}),t.jsxs("h2",{children:[t.jsx(Yx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," 3. Chaves SSH — Autenticação sem Senha"]}),t.jsxs("p",{children:["Em vez de usar senha (que pode ser descoberta por força bruta), você usa um par de chaves criptográficas: uma ",t.jsx("strong",{children:"chave privada"})," que fica no seu computador, e uma ",t.jsx("strong",{children:"chave pública"})," que vai para o servidor."]}),t.jsx(f,{code:`# Gerar chave Ed25519 (recomendada — moderna e segura)
ssh-keygen -t ed25519 -C "seu@email.com"

# Gerar chave RSA de 4096 bits (compatibilidade ampla)
ssh-keygen -t rsa -b 4096 -C "seu@email.com"

# Durante a geração, você verá:
# Enter file in which to save the key (~/.ssh/id_ed25519): [Enter para padrão]
# Enter passphrase (empty for no passphrase): [senha para proteger a chave]
# Enter same passphrase again: [repita]

# Listar suas chaves existentes
ls ~/.ssh/
# id_ed25519       <- chave privada (NUNCA compartilhe)
# id_ed25519.pub   <- chave pública (pode enviar para servidores)

# Ver o conteúdo da chave pública
cat ~/.ssh/id_ed25519.pub`,language:"bash",title:"gerando chaves SSH"}),t.jsxs(Q,{type:"danger",title:"Proteja sua chave privada",children:["A chave privada (",t.jsx("code",{children:"~/.ssh/id_ed25519"}),") ",t.jsx("strong",{children:"nunca deve ser compartilhada"}),". É como a senha master de todos os servidores que você acessa. Permissão correta: ",t.jsx("code",{children:"chmod 600 ~/.ssh/id_ed25519"})]}),t.jsx("h2",{children:"4. Copiando a Chave Pública para o Servidor"}),t.jsx(f,{code:`# Forma automática (mais fácil)
ssh-copy-id usuario@servidor.exemplo.com

# Especificar qual chave copiar
ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor.exemplo.com

# Em porta não padrão
ssh-copy-id -p 2222 usuario@servidor.exemplo.com

# Forma manual — se ssh-copy-id não estiver disponível
cat ~/.ssh/id_ed25519.pub | ssh usuario@servidor.exemplo.com   "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"

# Depois de copiar a chave, conecte sem senha:
ssh usuario@servidor.exemplo.com`,language:"bash",title:"copiando chave pública"}),t.jsx("h2",{children:"5. Arquivo de Configuração (~/.ssh/config)"}),t.jsxs("p",{children:["Em vez de digitar o endereço, porta e usuário toda vez, você cria ",t.jsx("strong",{children:"aliases"})," no arquivo de config:"]}),t.jsx(f,{code:`# Criar o arquivo de configuração
touch ~/.ssh/config
chmod 600 ~/.ssh/config

# Alias simples para um servidor
Host meuservidor
    HostName 192.168.1.100
    User deploy
    Port 2222
    IdentityFile ~/.ssh/id_ed25519

# Servidor de produção
Host prod
    HostName prod.minhaempresa.com
    User ubuntu
    IdentityFile ~/.ssh/chave_producao
    ServerAliveInterval 60
    ServerAliveCountMax 3

# Configuração global (para todos os hosts)
Host *
    AddKeysToAgent yes
    IdentityFile ~/.ssh/id_ed25519

# Agora você pode conectar assim:
ssh meuservidor       # em vez de: ssh -p 2222 deploy@192.168.1.100
ssh prod              # em vez de: ssh ubuntu@prod.minhaempresa.com`,language:"bash",title:"~/.ssh/config"}),t.jsx("h2",{children:"6. SSH Agent — Carregar Chave Uma Vez"}),t.jsx(f,{code:`# Iniciar o ssh-agent (normalmente já inicia com o sistema)
eval "$(ssh-agent -s)"

# Adicionar sua chave ao agent (pedirá a passphrase uma vez)
ssh-add ~/.ssh/id_ed25519

# Adicionar com tempo de expiração (ex: 8 horas)
ssh-add -t 8h ~/.ssh/id_ed25519

# Listar chaves carregadas no agent
ssh-add -l

# Remover todas as chaves do agent
ssh-add -D

# Para iniciar o agent automaticamente no shell, adicione ao ~/.bashrc:
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
fi`,language:"bash",title:"ssh-agent"}),t.jsxs("h2",{children:[t.jsx(Io,{className:"inline-block mr-2 mb-1 w-5 h-5"})," 7. Transferência de Arquivos"]}),t.jsx("h3",{children:"scp — Cópia Simples"}),t.jsx(f,{code:`# Copiar arquivo local para servidor remoto
scp arquivo.txt usuario@servidor:/home/usuario/

# Copiar arquivo do servidor para o local
scp usuario@servidor:/etc/nginx/nginx.conf ./nginx.conf.bak

# Copiar diretório inteiro (recursivo)
scp -r ./meu-projeto/ usuario@servidor:/var/www/

# Em porta não padrão (atenção: -P maiúsculo no scp!)
scp -P 2222 arquivo.txt usuario@servidor:/tmp/`,language:"bash",title:"scp"}),t.jsx("h3",{children:"sftp — Sessão interativa"}),t.jsx(f,{code:`# Iniciar sessão SFTP
sftp usuario@servidor.exemplo.com

# Comandos dentro do sftp:
sftp> ls                    # listar arquivos remotos
sftp> get arquivo.txt       # baixar arquivo
sftp> get -r pasta/         # baixar pasta inteira
sftp> put relatorio.pdf     # enviar arquivo
sftp> put -r ./projeto/     # enviar pasta inteira
sftp> bye                   # sair`,language:"bash",title:"sftp"}),t.jsx("h3",{children:"rsync — Sincronização Eficiente"}),t.jsx(f,{code:`# Sincronizar pasta local com servidor (só envia o que mudou)
rsync -avz ./site/ usuario@servidor:/var/www/html/

# Sincronizar e deletar arquivos que não existem mais na origem
rsync -avz --delete ./site/ usuario@servidor:/var/www/html/

# Progresso visual
rsync -avz --progress ./backup/ usuario@servidor:/backups/

# Em porta SSH não padrão
rsync -avz -e "ssh -p 2222" ./site/ usuario@servidor:/var/www/

# Dry run — simular sem executar
rsync -avz --dry-run ./site/ usuario@servidor:/var/www/`,language:"bash",title:"rsync"}),t.jsx("h2",{children:"8. SSH Tunneling"}),t.jsx(f,{code:`# === TÚNEL LOCAL — acessar serviço remoto como se fosse local ===
# Acessa PostgreSQL remoto pela porta local 5433
ssh -L 5433:localhost:5432 usuario@servidor.exemplo.com

# Mantém o túnel sem abrir shell interativo
ssh -L 8080:localhost:3000 -N usuario@servidor.exemplo.com

# === TÚNEL REMOTO — expor porta local para o servidor remoto ===
ssh -R 9000:localhost:8080 usuario@servidor.exemplo.com

# === TÚNEL DINÂMICO — proxy SOCKS5 ===
ssh -D 1080 usuario@servidor.exemplo.com

# === Túnel em background ===
ssh -L 8080:localhost:3000 -N -f usuario@servidor.exemplo.com`,language:"bash",title:"tunneling"}),t.jsxs("h2",{children:[t.jsx($t,{className:"inline-block mr-2 mb-1 w-5 h-5"})," 9. Configurando o Servidor SSH (sshd)"]}),t.jsx(f,{code:`# Habilitar e iniciar o serviço SSH no Fedora
sudo systemctl enable --now sshd

# Verificar status
sudo systemctl status sshd

# Reiniciar após alterar a configuração
sudo systemctl restart sshd

# Abrir porta no firewall (Fedora usa firewalld)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload`,language:"bash",title:"habilitando o servidor SSH"}),t.jsx(f,{code:`# Arquivo de configuração do servidor: /etc/ssh/sshd_config

# Porta personalizada (reduz tentativas de brute force)
Port 2222

# Desabilitar login como root (importante!)
PermitRootLogin no

# Autenticação por senha (desabilite após configurar chaves)
PasswordAuthentication no
PermitEmptyPasswords no

# Autenticação por chave pública (deve estar habilitada)
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

# Número máximo de tentativas de autenticação
MaxAuthTries 3

# Limitar quais usuários podem conectar via SSH
AllowUsers usuario1 usuario2

# Tempo limite para autenticar (segundos)
LoginGraceTime 30

# Desabilitar encaminhamento X11 (se não precisar de GUI)
X11Forwarding no

# Após editar, testar sintaxe antes de reiniciar:
sudo sshd -t
sudo systemctl restart sshd`,language:"bash",title:"/etc/ssh/sshd_config"}),t.jsx(Q,{type:"success",title:"Fluxo completo para novo servidor",children:t.jsxs("ol",{className:"list-decimal pl-4 mt-1 space-y-1 text-sm",children:[t.jsxs("li",{children:["Gere suas chaves: ",t.jsx("code",{children:"ssh-keygen -t ed25519"})]}),t.jsxs("li",{children:["Copie para o servidor: ",t.jsx("code",{children:"ssh-copy-id usuario@servidor"})]}),t.jsxs("li",{children:["Teste o login sem senha: ",t.jsx("code",{children:"ssh usuario@servidor"})]}),t.jsxs("li",{children:["Edite ",t.jsx("code",{children:"/etc/ssh/sshd_config"}),": desabilite ",t.jsx("code",{children:"PasswordAuthentication no"})]}),t.jsxs("li",{children:["Reinicie: ",t.jsx("code",{children:"sudo systemctl restart sshd"})]})]})})]})}function ib(){return t.jsxs(ie,{title:"Firewall e SELinux",subtitle:"Proteja seu Fedora com o firewalld e entenda o SELinux — a camada de segurança mandatória que define o Fedora como um sistema robusto.",difficulty:"avancado",timeToRead:"35 min",children:[t.jsxs("h2",{children:[t.jsx(qh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," firewalld — O Firewall do Fedora"]}),t.jsxs("p",{children:["O Fedora usa o ",t.jsx("strong",{children:"firewalld"})," — um gerenciador de firewall dinâmico que usa zonas para definir o nível de confiança de cada interface de rede. Ele gerencia regras do ",t.jsx("code",{children:"iptables"})," (ou ",t.jsx("code",{children:"nftables"}),") de forma mais amigável."]}),t.jsx("h2",{children:"Operações Básicas do firewall-cmd"}),t.jsx(f,{code:`# Ver status do firewall
sudo firewall-cmd --state
systemctl status firewalld

# Ver zona padrão e zonas ativas
sudo firewall-cmd --get-default-zone
sudo firewall-cmd --get-active-zones

# Ver todas as regras da zona padrão
sudo firewall-cmd --list-all

# Ver todas as regras de todas as zonas
sudo firewall-cmd --list-all-zones`,language:"bash",title:"status"}),t.jsx("h2",{children:"Gerenciando Serviços e Portas"}),t.jsx(f,{code:`# Listar serviços disponíveis
sudo firewall-cmd --get-services

# Listar serviços habilitados na zona padrão
sudo firewall-cmd --list-services

# Permitir um serviço (temporário — até reiniciar)
sudo firewall-cmd --add-service=http
sudo firewall-cmd --add-service=https
sudo firewall-cmd --add-service=ssh

# Permitir um serviço permanentemente
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload    # aplicar mudanças permanentes

# Bloquear um serviço
sudo firewall-cmd --remove-service=http --permanent

# Permitir uma porta específica
sudo firewall-cmd --add-port=8080/tcp --permanent
sudo firewall-cmd --add-port=3000-3010/tcp --permanent

# Remover uma porta
sudo firewall-cmd --remove-port=8080/tcp --permanent

# Recarregar as regras permanentes
sudo firewall-cmd --reload`,language:"bash",title:"serviços e portas"}),t.jsx("h2",{children:"Zonas do Firewalld"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Zona"}),t.jsx("th",{children:"Nível de Confiança"}),t.jsx("th",{children:"Uso Típico"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"drop"})}),t.jsx("td",{children:"Mínimo"}),t.jsx("td",{children:"Todo tráfego de entrada é descartado"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"block"})}),t.jsx("td",{children:"Baixo"}),t.jsx("td",{children:"Conexões rejeitadas com mensagem"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"public"})}),t.jsx("td",{children:"Médio"}),t.jsx("td",{children:"Redes públicas (padrão)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"external"})}),t.jsx("td",{children:"Médio"}),t.jsx("td",{children:"Redes externas com NAT"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"internal"})}),t.jsx("td",{children:"Alto"}),t.jsx("td",{children:"Redes internas confiáveis"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"dmz"})}),t.jsx("td",{children:"Alto"}),t.jsx("td",{children:"Zona desmilitarizada (servidores públicos)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"work"})}),t.jsx("td",{children:"Alto"}),t.jsx("td",{children:"Redes de trabalho"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"home"})}),t.jsx("td",{children:"Muito alto"}),t.jsx("td",{children:"Rede doméstica"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"trusted"})}),t.jsx("td",{children:"Total"}),t.jsx("td",{children:"Todo tráfego permitido"})]})]})]}),t.jsxs("h2",{children:[t.jsx(Qs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," SELinux — Security-Enhanced Linux"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"SELinux"})," é um sistema de controle de acesso mandatório (MAC — Mandatory Access Control) desenvolvido pela NSA e integrado ao kernel Linux. No Fedora, o SELinux está ativo por padrão em modo ",t.jsx("strong",{children:"Enforcing"}),", aplicando políticas de segurança rigorosas."]}),t.jsx(Q,{type:"info",title:"SELinux não é inimigo!",children:"Muitas pessoas desabilitam o SELinux quando algo não funciona — isso é um erro grave. Aprenda a diagnosticar e corrigir os problemas sem desabilitá-lo, pois o SELinux é uma das melhores proteções contra exploração de vulnerabilidades."}),t.jsx(f,{code:`# Ver status do SELinux
sestatus
getenforce           # retorna: Enforcing, Permissive ou Disabled

# Modos do SELinux:
# Enforcing  — bloqueia e registra violações (modo de produção)
# Permissive — registra mas NÃO bloqueia (útil para debug)
# Disabled   — completamente desabilitado (NÃO recomendado)

# Mudar para Permissive temporariamente (até reiniciar)
sudo setenforce 0

# Mudar para Enforcing temporariamente
sudo setenforce 1

# Para mudanças permanentes, edite /etc/selinux/config
sudo nano /etc/selinux/config
# SELINUX=enforcing  (ou permissive, ou disabled)`,language:"bash",title:"selinux status"}),t.jsx("h2",{children:"Diagnóstico e Correção de Problemas SELinux"}),t.jsx(f,{code:`# Instalar ferramentas de diagnóstico
sudo dnf install setroubleshoot-server

# Ver alertas do SELinux
sudo sealert -a /var/log/audit/audit.log

# Ver negações recentes
sudo ausearch -m avc -ts recent
journalctl -t setroubleshoot

# Gerar um módulo de política para permitir uma ação negada
# (a ferramenta sugere o comando automaticamente nos alertas)
sudo ausearch -m avc -ts recent | audit2allow -M meu-modulo
sudo semodule -i meu-modulo.pp

# Verificar e restaurar contexto SELinux de um arquivo
ls -Z arquivo.txt
sudo restorecon -v arquivo.txt
sudo restorecon -Rv /pasta/   # recursivo`,language:"bash",title:"diagnóstico selinux"}),t.jsx(f,{code:`# Exemplos comuns de ajuste de contexto SELinux

# Apache/Nginx servindo arquivos de diretório personalizado
sudo chcon -Rt httpd_sys_content_t /var/www/meusite/

# Permitir Apache/Nginx conectar à rede (ex: proxy reverso)
sudo setsebool -P httpd_can_network_connect 1

# Permitir SSH em porta não padrão (ex: 2222)
sudo semanage port -a -t ssh_port_t -p tcp 2222

# Listar todas as booleanas do SELinux relacionadas a httpd
sudo getsebool -a | grep httpd`,language:"bash",title:"ajustes comuns selinux"})]})}function rb(){return t.jsxs(ie,{title:"Btrfs — Filesystem Padrão",subtitle:"Aproveite ao máximo o Btrfs — o sistema de arquivos padrão do Fedora — com subvolumes, snapshots e compressão.",difficulty:"intermediario",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Fs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é Btrfs?"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"Btrfs"})," (B-Tree Filesystem) é o sistema de arquivos padrão do Fedora desde o Fedora 33. É um sistema moderno com recursos avançados que o ext4 não oferece nativamente:"]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Snapshots"})," — cópias instantâneas do sistema de arquivos"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Subvolumes"})," — partições lógicas dentro do filesystem"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Copy-on-Write (CoW)"})," — integridade de dados garantida"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Compressão transparente"})," — economiza espaço automaticamente"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Checksums"})," — detecta corrupção de dados"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"RAID integrado"})," — sem precisar de software adicional"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Redimensionamento online"})," — sem desmontar"]})]}),t.jsxs(Q,{type:"info",title:"Subvolumes padrão do Fedora",children:["O instalador cria automaticamente dois subvolumes: ",t.jsx("code",{children:"@"})," (montado em ",t.jsx("code",{children:"/"}),") e ",t.jsx("code",{children:"@home"})," (montado em ",t.jsx("code",{children:"/home"}),"). Isso facilita snapshots independentes do sistema e dos dados do usuário."]}),t.jsx("h2",{children:"Comandos Básicos do Btrfs"}),t.jsx(f,{code:`# Ver informações do filesystem Btrfs
sudo btrfs filesystem show /
sudo btrfs filesystem df /
sudo btrfs filesystem usage /

# Ver subvolumes
sudo btrfs subvolume list /

# Uso de espaço (mostra espaço real, não o do df que pode enganar)
sudo btrfs filesystem du -s /home`,language:"bash",title:"informações"}),t.jsxs("h2",{children:[t.jsx(Xx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Snapshots"]}),t.jsx("p",{children:"Snapshots são cópias instantâneas e imutáveis de um subvolume. Como o Btrfs usa CoW, snapshots são criados em milissegundos e quase sem uso de espaço inicial."}),t.jsx(f,{code:`# Criar um snapshot (somente leitura) do subvolume raiz
sudo btrfs subvolume snapshot -r / /snapshots/root-$(date +%Y%m%d)

# Criar um snapshot do /home
sudo btrfs subvolume snapshot -r /home /snapshots/home-$(date +%Y%m%d)

# Criar snapshot gravável (útil para restauração)
sudo btrfs subvolume snapshot / /snapshots/root-editavel

# Listar snapshots
sudo btrfs subvolume list /
ls /snapshots/

# Remover um snapshot
sudo btrfs subvolume delete /snapshots/root-20240101`,language:"bash",title:"snapshots"}),t.jsx("h2",{children:"Compressão Automática"}),t.jsx(f,{code:`# Ver opções de montagem atuais
cat /proc/mounts | grep btrfs
findmnt -t btrfs

# Habilitar compressão Zstd (recomendado — bom equilíbrio)
# Edite /etc/fstab e adicione "compress=zstd:1" nas opções
# Exemplo de linha no fstab:
# UUID=xxx / btrfs compress=zstd:1,subvol=@ 0 0

# Aplicar compressão nos arquivos existentes
sudo btrfs filesystem defragment -r -v -czstd /

# Verificar taxa de compressão
sudo compsize /home   # precisa instalar: sudo dnf install btrfs-compsize`,language:"bash",title:"compressão"}),t.jsxs("h2",{children:[t.jsx(Po,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Manutenção e Scrub"]}),t.jsx(f,{code:`# Scrub — verifica integridade e corrige erros com redundância
sudo btrfs scrub start /
sudo btrfs scrub status /

# Desfragmentação (menos necessária no Btrfs que no ext4)
sudo btrfs filesystem defragment -r /home

# Balanceamento (redistribui dados — útil após adicionar disco)
sudo btrfs balance start /
sudo btrfs balance status /

# Ver uso detalhado por tipo de dado
sudo btrfs filesystem df /`,language:"bash",title:"manutenção"}),t.jsx("h2",{children:"Snapper — Gerenciamento Automático de Snapshots"}),t.jsx(f,{code:`# Instalar o Snapper
sudo dnf install snapper

# Criar configuração para o subvolume raiz
sudo snapper -c root create-config /

# Criar configuração para o /home
sudo snapper -c home create-config /home

# Criar snapshot manual
sudo snapper -c root create --description "antes de atualização"

# Listar snapshots
sudo snapper -c root list

# Comparar dois snapshots
sudo snapper -c root diff 1..2

# Restaurar um arquivo de um snapshot
sudo snapper -c root undochange 1..0 /etc/hosts

# Habilitar snapshots automáticos na timeline
sudo systemctl enable --now snapper-timeline.timer
sudo systemctl enable --now snapper-cleanup.timer`,language:"bash",title:"snapper"})]})}function lb(){return t.jsxs(ie,{title:"Formato RPM",subtitle:"Entenda o formato de pacotes RPM — o formato nativo do Fedora, RHEL e derivados — e como usá-lo diretamente.",difficulty:"intermediario",timeToRead:"25 min",children:[t.jsxs("h2",{children:[t.jsx(vh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é RPM?"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"RPM"})," (Red Hat Package Manager) é o formato de pacotes do Fedora, RHEL, CentOS, openSUSE e derivados. Um arquivo ",t.jsx("code",{children:".rpm"})," contém o software compilado, metadados (nome, versão, dependências) e scripts de instalação."]}),t.jsxs("p",{children:["Enquanto o ",t.jsx("strong",{children:"DNF"})," resolve dependências automaticamente, o comando ",t.jsx("code",{children:"rpm"})," opera diretamente nos pacotes sem resolução automática de dependências. Use DNF para instalações normais e rpm para consultas e operações específicas."]}),t.jsx("h2",{children:"Consultando Pacotes Instalados"}),t.jsx(f,{code:`# Listar todos os pacotes instalados
rpm -qa

# Buscar pacote instalado por nome
rpm -qa | grep firefox
rpm -q firefox

# Informações detalhadas de um pacote instalado
rpm -qi firefox

# Listar arquivos de um pacote instalado
rpm -ql firefox

# Qual pacote fornece um arquivo
rpm -qf /usr/bin/firefox

# Ver scripts de instalação de um pacote
rpm -q --scripts firefox

# Ver changelog de um pacote
rpm -q --changelog firefox | head -30`,language:"bash",title:"consultando pacotes"}),t.jsxs("h2",{children:[t.jsx(br,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Trabalhando com Arquivos .rpm"]}),t.jsx(f,{code:`# Instalar um pacote .rpm local (melhor usar dnf para resolver dependências)
sudo rpm -ivh pacote.rpm          # -i instalar, -v verbose, -h progresso
sudo dnf install pacote.rpm       # preferível — resolve dependências

# Atualizar pacote via arquivo .rpm
sudo rpm -Uvh novo-pacote.rpm
sudo dnf upgrade pacote.rpm       # preferível

# Remover um pacote
sudo rpm -e nome-do-pacote
sudo dnf remove nome-do-pacote    # preferível

# Verificar integridade de um .rpm antes de instalar
rpm -K pacote.rpm                 # verifica assinatura e checksum

# Consultar metadados de um .rpm sem instalar
rpm -qip pacote.rpm               # informações
rpm -qlp pacote.rpm               # arquivos que seriam instalados
rpm -qRp pacote.rpm               # dependências`,language:"bash",title:"arquivos rpm"}),t.jsx("h2",{children:"Verificação e Integridade"}),t.jsx(f,{code:`# Verificar integridade de todos os pacotes instalados
rpm -Va

# Verificar um pacote específico
rpm -V firefox

# Resultado da verificação:
# S = tamanho do arquivo mudou
# M = permissões ou tipo de arquivo mudou
# 5 = checksum MD5 mudou
# L = symlink mudou
# U = usuário (dono) mudou
# G = grupo mudou
# T = data de modificação mudou

# Importar chave GPG do Fedora (para verificar assinaturas)
sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-*

# Listar chaves GPG importadas
rpm -qa gpg-pubkey*
rpm -qi gpg-pubkey-xxxxx`,language:"bash",title:"verificação"}),t.jsx("h2",{children:"Extraindo Conteúdo de um RPM"}),t.jsx(f,{code:`# Instalar ferramenta para extrair RPMs
sudo dnf install rpm2cpio cpio

# Extrair conteúdo de um .rpm sem instalar
rpm2cpio pacote.rpm | cpio -idmv

# Ver conteúdo sem extrair
rpm2cpio pacote.rpm | cpio -t`,language:"bash",title:"extraindo rpm"}),t.jsxs(Q,{type:"info",title:"DNF vs RPM direto",children:["Para instalação e remoção do dia a dia, use sempre ",t.jsx("strong",{children:"DNF"})," — ele resolve dependências, gerencia repositórios e mantém o banco de dados consistente. Use o comando ",t.jsx("code",{children:"rpm"})," diretamente para consultas e verificações de integridade."]}),t.jsx("h2",{children:"Tabela de Comandos RPM Essenciais"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Comando"}),t.jsx("th",{children:"Ação"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -qa"})}),t.jsx("td",{children:"Listar todos os instalados"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -q pkg"})}),t.jsx("td",{children:"Verificar se pacote está instalado"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -qi pkg"})}),t.jsx("td",{children:"Informações do pacote instalado"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -ql pkg"})}),t.jsx("td",{children:"Arquivos do pacote instalado"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -qf /path"})}),t.jsx("td",{children:"Qual pacote instalou o arquivo"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -qip pkg.rpm"})}),t.jsx("td",{children:"Informações de um .rpm sem instalar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -Va"})}),t.jsx("td",{children:"Verificar integridade de todos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"rpm -K pkg.rpm"})}),t.jsx("td",{children:"Verificar assinatura de um .rpm"})]})]})]})]})}function nb(){return t.jsxs(ie,{title:"Atualização do Sistema",subtitle:"Mantenha o Fedora sempre atualizado — atualizações de segurança, atualização de versão e melhores práticas.",difficulty:"iniciante",timeToRead:"20 min",children:[t.jsxs("h2",{children:[t.jsx(Po,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Atualizações do Sistema (mesma versão)"]}),t.jsx("p",{children:"Manter o sistema atualizado é essencial para segurança e estabilidade. O Fedora recebe atualizações frequentes de pacotes, kernels e correções de segurança."}),t.jsx(f,{code:`# Verificar atualizações disponíveis
sudo dnf check-update

# Instalar todas as atualizações
sudo dnf update -y

# Atualizar apenas pacotes de segurança
sudo dnf update --security

# Atualizar apenas um pacote específico
sudo dnf update firefox

# Ver o histórico de atualizações
dnf history
dnf history info 1    # detalhes da última operação`,language:"bash",title:"atualizações regulares"}),t.jsxs(Q,{type:"info",title:"Atualização automática",children:["O GNOME Software (e o dnf-automatic) podem configurar atualizações automáticas. Para servidores, instale: ",t.jsx("code",{children:"sudo dnf install dnf-automatic && sudo systemctl enable --now dnf-automatic.timer"})]}),t.jsxs("h2",{children:[t.jsx(Zx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Atualização de Versão (ex: Fedora 39 → 40)"]}),t.jsxs("p",{children:["A atualização de uma versão major do Fedora é feita com o ",t.jsx("strong",{children:"dnf system-upgrade"}),". O processo é seguro e preserva suas configurações e dados."]}),t.jsx(f,{code:`# Passo 1: Atualizar todos os pacotes da versão atual primeiro
sudo dnf update --refresh -y

# Passo 2: Instalar o plugin de upgrade (já vem com dnf moderno)
sudo dnf install dnf-plugin-system-upgrade

# Passo 3: Baixar os pacotes da nova versão (ex: para Fedora 41)
sudo dnf system-upgrade download --releasever=41

# Se houver erros de dependências, use:
sudo dnf system-upgrade download --releasever=41 --allowerasing

# Passo 4: Reiniciar e aplicar o upgrade
sudo dnf system-upgrade reboot

# O sistema vai reiniciar e completar a atualização automaticamente
# Isso leva alguns minutos dependendo do hardware`,language:"bash",title:"upgrade de versão"}),t.jsx(Q,{type:"warning",title:"Antes de fazer upgrade de versão",children:t.jsxs("ul",{children:[t.jsx("li",{children:"Faça backup dos seus dados importantes"}),t.jsx("li",{children:"Crie um snapshot Btrfs se possível"}),t.jsx("li",{children:"Certifique-se de ter energia estável (não faça em laptop sem carregador)"}),t.jsx("li",{children:"Feche todos os aplicativos antes de reiniciar para o upgrade"})]})}),t.jsx("h2",{children:"Verificar Versão Após Atualização"}),t.jsx(f,{code:`# Ver versão do Fedora
cat /etc/fedora-release

# Ver versão do kernel
uname -r

# Ver todos os kernels instalados
rpm -qa | grep kernel | sort

# Remover kernels antigos (mantém apenas os 3 mais recentes por padrão)
sudo dnf remove --oldinstallonly --setopt installonly_limit=2`,language:"bash",title:"verificação pós-upgrade"}),t.jsxs("h2",{children:[t.jsx(Th,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Pós-Upgrade: Limpeza"]}),t.jsx(f,{code:`# Após o upgrade, limpar pacotes não mais necessários
sudo dnf autoremove

# Limpar cache do DNF
sudo dnf clean all

# Verificar se há pacotes órfãos
sudo dnf list extras

# Sincronizar metadados
sudo dnf makecache

# Verificar se há arquivos de configuração com backup (.rpmsave, .rpmnew)
find /etc -name "*.rpmsave" 2>/dev/null
find /etc -name "*.rpmnew" 2>/dev/null`,language:"bash",title:"limpeza pós-upgrade"}),t.jsx("h2",{children:"Revertendo uma Atualização"}),t.jsx(f,{code:`# Ver histórico de operações DNF
dnf history

# Reverter a última operação
sudo dnf history undo last

# Reverter uma operação específica (pelo número)
sudo dnf history undo 5

# Reverter uma atualização específica de um pacote
sudo dnf downgrade firefox`,language:"bash",title:"revertendo atualizações"})]})}function cb(){return t.jsxs(ie,{title:"Ambiente de Desenvolvimento",subtitle:"Configure um ambiente de desenvolvimento completo no Fedora — Python, Node.js, Java, Go, Rust e ferramentas essenciais.",difficulty:"intermediario",timeToRead:"35 min",children:[t.jsxs("h2",{children:[t.jsx($n,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Ferramentas Base"]}),t.jsx(f,{code:`# Instalar ferramentas de compilação essenciais
sudo dnf install @development-tools
sudo dnf install gcc gcc-c++ make cmake
sudo dnf install git curl wget

# Git — configuração inicial
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --global core.editor "vim"
git config --global init.defaultBranch main

# Ver configuração do git
git config --list`,language:"bash",title:"ferramentas base"}),t.jsx("h2",{children:"Python"}),t.jsx(f,{code:`# Python 3 vem instalado no Fedora
python3 --version
pip3 --version

# Instalar versões adicionais
sudo dnf install python3.11 python3.12

# Ambiente virtual (recomendado para projetos)
python3 -m venv meu-projeto
source meu-projeto/bin/activate
pip install pacote
deactivate

# Instalar via pip (nível de usuário)
pip3 install --user nome-do-pacote

# pyenv — gerenciar múltiplas versões do Python
curl https://pyenv.run | bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc
pyenv install 3.12.0
pyenv global 3.12.0`,language:"bash",title:"python"}),t.jsx("h2",{children:"Node.js e JavaScript"}),t.jsx(f,{code:`# Instalar Node.js via dnf
sudo dnf install nodejs npm

# Verificar versões
node --version
npm --version

# NVM — gerenciar múltiplas versões Node (recomendado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts          # última versão LTS
nvm install 20             # versão específica
nvm use 20
nvm list

# Instalar pnpm (gerenciador de pacotes mais eficiente)
npm install -g pnpm

# Criar projeto
mkdir meu-app && cd meu-app
npm init -y
# ou: pnpm create vite meu-app`,language:"bash",title:"node.js"}),t.jsx("h2",{children:"Go (Golang)"}),t.jsx(f,{code:`# Instalar Go via dnf
sudo dnf install golang

# Verificar versão
go version

# Configurar GOPATH
echo 'export GOPATH=$HOME/go' >> ~/.bashrc
echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
source ~/.bashrc

# Criar um projeto Go
mkdir -p ~/go/src/meu-projeto
cd ~/go/src/meu-projeto
go mod init meu-projeto
cat > main.go << 'EOF'
package main
import "fmt"
func main() {
    fmt.Println("Olá do Fedora!")
}
EOF
go run main.go`,language:"bash",title:"go"}),t.jsx("h2",{children:"Rust"}),t.jsx(f,{code:`# Instalar Rust via rustup (método oficial)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# Verificar instalação
rustc --version
cargo --version

# Criar um projeto Rust
cargo new meu-projeto
cd meu-projeto
cargo run
cargo build --release`,language:"bash",title:"rust"}),t.jsxs("h2",{children:[t.jsx(Hs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Java"]}),t.jsx(f,{code:`# Instalar Java (OpenJDK)
sudo dnf install java-21-openjdk java-21-openjdk-devel

# Ver versões disponíveis
sudo dnf list java*

# Alternar entre versões Java
sudo alternatives --config java

# Verificar versão ativa
java -version
javac -version

# Instalar Maven
sudo dnf install maven

# Instalar Gradle
sudo dnf install gradle`,language:"bash",title:"java"}),t.jsxs("h2",{children:[t.jsx(Io,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Editores e IDEs"]}),t.jsx(f,{code:`# VS Code via Flatpak (recomendado)
flatpak install flathub com.visualstudio.code

# Neovim (editor modal avançado)
sudo dnf install neovim python3-neovim

# Vim
sudo dnf install vim-enhanced

# JetBrains Toolbox (para IntelliJ, PyCharm, etc.)
# Baixe em jetbrains.com/toolbox-app

# Instalar extensões no VS Code via CLI
code --install-extension ms-python.python
code --install-extension golang.go
code --install-extension rust-lang.rust-analyzer`,language:"bash",title:"editores"}),t.jsx(Q,{type:"info",title:"Fedora é a distro dos desenvolvedores",children:"O Fedora é amplamente usado por desenvolvedores na Red Hat, IBM e comunidade open source. Ferramentas como systemd, Wayland, PipeWire e Podman foram desenvolvidas e amadurecidas no ecossistema Fedora antes de chegar a outras distros."})]})}function db(){return t.jsxs(ie,{title:"Podman e Containers",subtitle:"Use containers no Fedora com o Podman — alternativa ao Docker sem daemon, mais segura e compatível com Kubernetes.",difficulty:"intermediario",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Wn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Podman no Fedora"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"Podman"})," é a solução de containers padrão do Fedora. Diferente do Docker, o Podman é ",t.jsx("strong",{children:"daemonless"})," (sem daemon root) e permite executar containers como usuário comum (",t.jsx("em",{children:"rootless containers"}),"), o que é muito mais seguro."]}),t.jsx("p",{children:"O Podman é compatível com imagens Docker e com o formato OCI. Você pode usar imagens do Docker Hub, Quay.io e outros registros."}),t.jsxs(Q,{type:"info",title:"Podman é 100% compatível com Docker",children:["Você pode usar ",t.jsx("code",{children:"alias docker=podman"})," no seu bashrc e seus scripts Docker vão funcionar com Podman sem modificações."]}),t.jsx("h2",{children:"Instalação e Configuração"}),t.jsx(f,{code:`# Podman já vem instalado no Fedora!
podman --version

# Se não tiver:
sudo dnf install podman

# Verificar instalação
podman info

# Habilitar socket do Podman (para compatibilidade com ferramentas Docker)
systemctl --user enable --now podman.socket
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/podman/podman.sock`,language:"bash",title:"instalação"}),t.jsx("h2",{children:"Operações Básicas"}),t.jsx(f,{code:`# Baixar uma imagem
podman pull ubuntu:22.04
podman pull nginx:latest
podman pull python:3.12

# Listar imagens locais
podman images

# Executar um container
podman run hello-world
podman run -it ubuntu:22.04 bash          # interativo
podman run -d -p 8080:80 nginx            # em background com porta mapeada
podman run --name meu-nginx -d nginx      # com nome personalizado

# Listar containers
podman ps                    # em execução
podman ps -a                 # todos (incluindo parados)

# Parar e remover
podman stop meu-nginx
podman rm meu-nginx
podman stop --all
podman rm --all

# Remover imagem
podman rmi nginx
podman rmi --all             # remover todas as imagens`,language:"bash",title:"operações básicas"}),t.jsx("h2",{children:"Gerenciando Containers"}),t.jsx(f,{code:`# Executar comando em container em execução
podman exec -it meu-nginx bash
podman exec meu-nginx ls /var/www/html

# Ver logs de um container
podman logs meu-nginx
podman logs -f meu-nginx     # seguir em tempo real

# Inspecionar um container
podman inspect meu-nginx

# Copiar arquivos entre host e container
podman cp arquivo.txt meu-nginx:/tmp/
podman cp meu-nginx:/var/log/nginx/access.log .

# Estatísticas de recursos
podman stats
podman top meu-nginx`,language:"bash",title:"gerenciamento"}),t.jsxs("h2",{children:[t.jsx(Zn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Podman Compose"]}),t.jsx(f,{code:`# Instalar podman-compose (alternativa ao docker-compose)
sudo dnf install podman-compose

# Usar com um arquivo docker-compose.yml
podman-compose up -d
podman-compose down
podman-compose logs

# Exemplo de docker-compose.yml para WordPress
# version: "3"
# services:
#   db:
#     image: mysql:8
#     environment:
#       MYSQL_DATABASE: wordpress
#       MYSQL_USER: wpuser
#       MYSQL_PASSWORD: wppass
#       MYSQL_ROOT_PASSWORD: rootpass
#   wordpress:
#     image: wordpress:latest
#     ports:
#       - "8080:80"
#     environment:
#       WORDPRESS_DB_HOST: db
#       WORDPRESS_DB_USER: wpuser
#       WORDPRESS_DB_PASSWORD: wppass`,language:"bash",title:"podman-compose"}),t.jsxs("h2",{children:[t.jsx(Jn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Buildah — Construindo Imagens"]}),t.jsx(f,{code:`# Buildah é instalado junto com o Podman
buildah --version

# Construir imagem a partir de Dockerfile/Containerfile
buildah build -t minha-app .
# ou
podman build -t minha-app .

# Exemplo de Containerfile (equivalente ao Dockerfile)
# FROM fedora:latest
# RUN dnf install -y python3 && dnf clean all
# COPY app.py /app/
# WORKDIR /app
# CMD ["python3", "app.py"]

# Enviar imagem para o Docker Hub
podman login docker.io
podman tag minha-app docker.io/usuario/minha-app:latest
podman push docker.io/usuario/minha-app:latest

# Enviar para o Quay.io (Red Hat)
podman login quay.io
podman push quay.io/usuario/minha-app:latest`,language:"bash",title:"buildah"})]})}function ub(){return t.jsxs(ie,{title:"Pipes e Redirecionamento",subtitle:"Combine comandos com pipes (|), redirecione saída para arquivos e construa fluxos de trabalho poderosos no terminal.",difficulty:"intermediario",timeToRead:"25 min",children:[t.jsxs("h2",{children:[t.jsx(bh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," A Filosofia Unix"]}),t.jsxs("p",{children:["O Linux segue a filosofia Unix: ",t.jsx("strong",{children:"cada comando faz uma coisa e faz bem"}),". A força real vem de combinar comandos simples com pipes e redirecionamento. Com isso, você resolve problemas complexos com uma linha no terminal."]}),t.jsxs(Q,{type:"info",title:"A fórmula mágica",children:[t.jsx("code",{children:"comando1 | comando2 | comando3"})," — a saída de um vira a entrada do próximo. Simples assim."]}),t.jsxs("h2",{children:[t.jsx(Kx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Pipes ( | )"]}),t.jsxs("p",{children:["O pipe ",t.jsx("code",{children:"|"})," conecta a ",t.jsx("strong",{children:"saída padrão"})," (stdout) de um comando à ",t.jsx("strong",{children:"entrada padrão"})," (stdin) do próximo."]}),t.jsx(f,{code:`# Listar arquivos e filtrar apenas os .txt
ls -la | grep '.txt'

# Contar quantos processos estão rodando
ps aux | wc -l

# Ver quais serviços estão ativos, ordenados
systemctl list-units --state=active | sort

# Listar os 10 arquivos maiores no diretório atual
du -sh * | sort -rh | head -10

# Ver log do sistema com filtro de erro
journalctl -b | grep -i error | tail -20

# Contar quantas vezes "dnf" aparece no histórico
history | grep -c dnf

# Encontrar e listar pacotes instalados que contêm "python"
dnf list installed | grep python

# Combinar vários filtros
cat /etc/passwd | cut -d':' -f1 | sort | head -15`,language:"bash",title:"pipes"}),t.jsx("h2",{children:"Redirecionamento de Saída ( > e >> )"}),t.jsx(f,{code:`# > sobrescreve o arquivo (cuidado!)
echo "Linha 1" > arquivo.txt    # cria ou SOBRESCREVE

# >> adiciona ao final do arquivo
echo "Linha 2" >> arquivo.txt   # adiciona sem apagar

# Salvar saída de comando em arquivo
ls -la > lista-arquivos.txt
dnf list installed > pacotes-instalados.txt
journalctl -b > log-boot.txt

# Exemplos práticos
date >> /var/log/meu-script.log
echo "Backup iniciado: $(date)" >> backup.log`,language:"bash",title:"redirecionamento de saída"}),t.jsx("h2",{children:"Redirecionamento de Entrada ( < )"}),t.jsx(f,{code:`# < usa o arquivo como entrada do comando
sort < lista.txt
wc -l < arquivo.txt
mail -s "Assunto" usuario@email.com < mensagem.txt

# Heredoc — bloco de texto como entrada
cat << EOF > config.txt
[configuracao]
nome = fedora
versao = 41
EOF

# Heredoc com comando
while read linha; do
  echo "Processando: $linha"
done << EOF
item1
item2
item3
EOF`,language:"bash",title:"redirecionamento de entrada"}),t.jsx("h2",{children:"Redirecionamento de Erros ( 2> e &> )"}),t.jsx(f,{code:`# Saídas em Linux: stdout (1) = saída normal | stderr (2) = erros

# Redirecionar apenas erros para arquivo
comando 2> erros.txt

# Ignorar erros (jogar no buraco negro)
comando 2>/dev/null

# Redirecionar saída normal para um arquivo e erros para outro
comando > saida.txt 2> erros.txt

# Redirecionar TUDO (stdout + stderr) para o mesmo arquivo
comando &> tudo.txt
comando > tudo.txt 2>&1          # equivalente, mais portável

# Muito útil para scripts de backup:
rsync -av /home/ /backup/ > /var/log/backup.log 2>&1

# Mostrar na tela E salvar ao mesmo tempo (tee)
dnf update 2>&1 | tee /var/log/atualizacao.log`,language:"bash",title:"redirecionamento de erros"}),t.jsxs("h2",{children:[t.jsx(Px,{className:"inline-block mr-2 mb-1 w-5 h-5"})," grep — O Filtro Universal"]}),t.jsx(f,{code:`# Sintaxe: grep [opções] "padrão" [arquivo]

# Filtrar linhas que contêm uma palavra
grep "erro" /var/log/dnf.log
grep "failed" /var/log/messages

# Em um pipe
journalctl -b | grep -i "error"

# Flags mais usadas:
grep -i "erro" arquivo.txt       # -i: ignora maiúsculas/minúsculas
grep -r "palavra" /etc/          # -r: busca recursiva em diretórios
grep -n "palavra" arquivo.txt    # -n: mostra número da linha
grep -c "palavra" arquivo.txt    # -c: conta ocorrências (não as linhas)
grep -v "comentário" arquivo.txt # -v: mostra linhas que NÃO contêm
grep -l "palavra" *.txt          # -l: mostra apenas nomes dos arquivos
grep -w "root" /etc/passwd       # -w: palavra completa (não substring)
grep -A 3 "erro" arquivo.txt     # -A: mostra 3 linhas DEPOIS do match
grep -B 3 "erro" arquivo.txt     # -B: mostra 3 linhas ANTES do match
grep -C 3 "erro" arquivo.txt     # -C: mostra 3 linhas antes e depois

# Expressões regulares com grep (-E ou egrep)
grep -E "^root|^joao" /etc/passwd    # linhas que começam com root OU joao
grep -E "[0-9]{1,3}.[0-9]{1,3}" arquivo.txt  # padrão de IP

# Grep com múltiplos padrões
grep -e "erro" -e "falha" arquivo.txt`,language:"bash",title:"grep"}),t.jsx("h2",{children:"tee — Bifurcar a Saída"}),t.jsx(f,{code:`# tee mostra na tela E salva em arquivo ao mesmo tempo
# É como um T na tubulação — divide o fluxo em dois

# Mostrar na tela E salvar em arquivo
ls -la | tee lista.txt
sudo dnf update | tee /var/log/update.log

# Adicionar ao arquivo em vez de sobrescrever
comando | tee -a /var/log/script.log

# Salvar em múltiplos arquivos ao mesmo tempo
echo "log" | tee arquivo1.txt arquivo2.txt arquivo3.txt

# Caso de uso real: ver e salvar instalação de pacote
sudo dnf install nginx | tee /var/log/install-nginx.log`,language:"bash",title:"tee"}),t.jsx("h2",{children:"Exemplos Completos e Práticos"}),t.jsx(f,{code:`# === TOP 10 COMANDOS MAIS USADOS ===
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -10

# === ENCONTRAR ARQUIVOS GRANDES ===
find /home -type f -size +100M | xargs ls -lh 2>/dev/null

# === VER IPs QUE TENTARAM FAZER LOGIN ===
grep "Failed password" /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -rn

# === MONITORAR LOG EM TEMPO REAL COM FILTRO ===
tail -f /var/log/messages | grep --color=auto -i "error"

# === CONTAR LINHAS DE CÓDIGO NO PROJETO ===
find . -name "*.tsx" | xargs wc -l | tail -1

# === LISTAR PORTAS ABERTAS DE FORMA LIMPA ===
ss -tulpn | grep LISTEN | awk '{print $1, $5}'

# === BACKUP RÁPIDO COM DATA NO NOME ===
tar -czf "backup-$(date +%Y%m%d).tar.gz" /home/usuario/documentos/

# === REMOVER ARQUIVOS TEMPORÁRIOS MAIS ANTIGOS QUE 7 DIAS ===
find /tmp -mtime +7 -type f | xargs rm -f 2>/dev/null`,language:"bash",title:"exemplos práticos"}),t.jsxs(Q,{type:"success",title:"Dica de ouro",children:["Combine ",t.jsx("code",{children:"grep"}),", ",t.jsx("code",{children:"awk"}),", ",t.jsx("code",{children:"sort"}),", ",t.jsx("code",{children:"uniq"})," e ",t.jsx("code",{children:"head/tail"})," com pipes. Essa combinação resolve 90% dos problemas de análise de texto e logs no Linux."]})]})}function mb(){return t.jsxs(ie,{title:"Shell Scripting",subtitle:"Automatize tarefas repetitivas com scripts Bash — variáveis, condicionais, loops, funções e boas práticas.",difficulty:"intermediario",timeToRead:"45 min",children:[t.jsxs("h2",{children:[t.jsx(jh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que é Shell Scripting?"]}),t.jsx("p",{children:"Scripts shell são arquivos de texto com sequências de comandos executados pelo Bash. Em vez de digitar os mesmos comandos sempre, você escreve uma vez e executa quantas vezes quiser. Isso é a base da automação no Linux."}),t.jsxs("h2",{children:[t.jsx(Ix,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Seu Primeiro Script"]}),t.jsx(f,{code:`#!/bin/bash
# ↑ Shebang: diz ao sistema que este arquivo é um script Bash
# Linhas que começam com # são comentários

echo "Olá, Fedora!"
echo "Data atual: $(date)"
echo "Usuário: $USER"
echo "Diretório atual: $PWD"`,language:"bash",title:"primeiro-script.sh"}),t.jsx(f,{code:`# 1. Crie o arquivo
nano meu-script.sh

# 2. Dê permissão de execução
chmod +x meu-script.sh

# 3. Execute
./meu-script.sh

# Alternativa: executar diretamente com bash (sem precisar de chmod)
bash meu-script.sh`,language:"bash",title:"como executar"}),t.jsx("h2",{children:"Variáveis"}),t.jsx(f,{code:`#!/bin/bash

# Definir variável (sem espaço no =)
NOME="Fedora"
VERSAO=41
CAMINHO="/home/usuario"

# Acessar variável com $
echo "Bem-vindo ao $NOME $VERSAO"
echo "Pasta: $CAMINHO"

# Variáveis especiais automáticas
echo "Nome do script: $0"
echo "Primeiro argumento: $1"
echo "Segundo argumento: $2"
echo "Todos os argumentos: $@"
echo "Número de argumentos: $#"
echo "PID do script: $$"
echo "Exit code do último comando: $?"

# Exemplo de uso de argumentos
# ./instalar.sh nginx 80
PACOTE=$1
PORTA=$2
echo "Instalando $PACOTE na porta $PORTA"

# Substituição de comando (guarda saída em variável)
DATA=$(date +%Y-%m-%d)
USUARIO=$(whoami)
IP=$(hostname -I | awk '{print $1}')
echo "Backup iniciado em $DATA pelo usuário $USUARIO ($IP)"`,language:"bash",title:"variáveis"}),t.jsx("h2",{children:"Lendo Entrada do Usuário"}),t.jsx(f,{code:`#!/bin/bash

# Ler input do usuário
read -p "Qual é o seu nome? " NOME
echo "Olá, $NOME!"

# Ler com timeout
read -t 10 -p "Você quer continuar? (s/n): " RESPOSTA

# Ler senha (sem mostrar na tela)
read -s -p "Digite a senha: " SENHA
echo ""   # pular linha após a senha

# Ler linha de um arquivo
while read linha; do
  echo "Linha: $linha"
done < /etc/hosts`,language:"bash",title:"entrada do usuário"}),t.jsx("h2",{children:"Condicionais (if / elif / else)"}),t.jsx(f,{code:`#!/bin/bash

NUMERO=42

# Comparações numéricas: -eq, -ne, -gt, -lt, -ge, -le
if [ $NUMERO -gt 50 ]; then
  echo "Maior que 50"
elif [ $NUMERO -eq 42 ]; then
  echo "É exatamente 42!"
else
  echo "Menor que 50"
fi

# Comparações de string: = ou ==, !=, -z (vazia), -n (não vazia)
NOME="fedora"
if [ "$NOME" = "fedora" ]; then
  echo "É Fedora!"
fi

if [ -z "$NOME" ]; then
  echo "Nome vazio"
fi

# Verificar arquivos/diretórios
if [ -f "/etc/dnf/dnf.conf" ]; then
  echo "Arquivo existe"
fi

if [ -d "/home" ]; then
  echo "Diretório /home existe"
fi

if [ -r "/etc/passwd" ]; then
  echo "Arquivo é legível"
fi

# Operadores lógicos
if [ $NUMERO -gt 10 ] && [ $NUMERO -lt 100 ]; then
  echo "Entre 10 e 100"
fi

if [ "$NOME" = "arch" ] || [ "$NOME" = "fedora" ]; then
  echo "É Arch ou Fedora"
fi

# Versão moderna com [[ ]] (mais recursos, menos bugs)
if [[ $NOME == "fed"* ]]; then    # glob pattern
  echo "Começa com fed"
fi`,language:"bash",title:"condicionais"}),t.jsx("h2",{children:"Loops"}),t.jsx(f,{code:`#!/bin/bash

# === FOR — lista de itens ===
for DISTRO in Fedora Ubuntu Arch Debian; do
  echo "Distro: $DISTRO"
done

# FOR — faixa numérica
for i in {1..10}; do
  echo "Número: $i"
done

# FOR — com passo (de 0 a 100 de 10 em 10)
for i in {0..100..10}; do
  echo "$i"
done

# FOR — estilo C
for ((i=0; i<5; i++)); do
  echo "i = $i"
done

# FOR — iterar arquivos
for ARQUIVO in /etc/*.conf; do
  echo "Configuração: $ARQUIVO"
done

# === WHILE — enquanto condição for verdadeira ===
CONTADOR=1
while [ $CONTADOR -le 5 ]; do
  echo "Tentativa $CONTADOR"
  CONTADOR=$((CONTADOR + 1))
done

# WHILE — ler arquivo linha por linha
while read linha; do
  echo "Processando: $linha"
done < lista-pacotes.txt

# === UNTIL — até condição ser verdadeira ===
N=1
until [ $N -gt 5 ]; do
  echo "N = $N"
  N=$((N + 1))
done

# === BREAK e CONTINUE ===
for i in {1..10}; do
  if [ $i -eq 5 ]; then
    continue    # pula o 5
  fi
  if [ $i -eq 8 ]; then
    break       # para no 8
  fi
  echo $i
done`,language:"bash",title:"loops"}),t.jsx("h2",{children:"Case (switch)"}),t.jsx(f,{code:`#!/bin/bash

read -p "O que você quer fazer? (instalar/remover/atualizar): " ACAO

case $ACAO in
  instalar|install|i)
    echo "Instalando pacote..."
    sudo dnf install "$2"
    ;;
  remover|remove|r)
    echo "Removendo pacote..."
    sudo dnf remove "$2"
    ;;
  atualizar|update|u)
    echo "Atualizando sistema..."
    sudo dnf upgrade
    ;;
  sair|exit|q)
    echo "Saindo..."
    exit 0
    ;;
  *)
    echo "Opção inválida: $ACAO"
    exit 1
    ;;
esac`,language:"bash",title:"case"}),t.jsx("h2",{children:"Funções"}),t.jsx(f,{code:`#!/bin/bash

# Definir uma função
saudacao() {
  echo "Olá, $1! Bem-vindo ao Fedora."
}

# Chamar a função com argumento
saudacao "João"
saudacao "Maria"

# Função com retorno de valor via echo
somar() {
  local A=$1
  local B=$2
  echo $((A + B))
}

RESULTADO=$(somar 10 25)
echo "10 + 25 = $RESULTADO"

# Função com exit code (return)
usuario_existe() {
  if id "$1" &>/dev/null; then
    return 0    # sucesso (true)
  else
    return 1    # falha (false)
  fi
}

if usuario_existe "root"; then
  echo "Usuário root existe"
fi

# Variáveis locais (não vazam para fora da função)
calcular() {
  local TEMP=100        # local só existe dentro da função
  echo $((TEMP * $1))
}

# Boas práticas: funções para organizar o script
instalar_dependencias() {
  echo "[1/4] Instalando dependências..."
  sudo dnf install -y curl wget git
}

configurar_firewall() {
  echo "[2/4] Configurando firewall..."
  sudo firewall-cmd --permanent --add-service=http
  sudo firewall-cmd --reload
}

main() {
  instalar_dependencias
  configurar_firewall
  echo "Concluído!"
}

main`,language:"bash",title:"funções"}),t.jsx("h2",{children:"Tratamento de Erros"}),t.jsx(f,{code:`#!/bin/bash

# set -e: aborta o script ao primeiro erro
set -e

# set -u: erro se variável indefinida for usada
set -u

# set -o pipefail: pipe falha se qualquer comando falhar
set -o pipefail

# Combinação recomendada para scripts robustos:
set -euo pipefail

# Verificar exit code manualmente
if ! sudo dnf install nginx; then
  echo "ERRO: Falha ao instalar nginx" >&2
  exit 1
fi

# Trap — executar ação quando o script terminar/falhar
trap "echo 'Script interrompido!'; rm -f /tmp/lock" EXIT
trap "echo 'Erro na linha $LINENO'; exit 1" ERR

# Verificar se é root
if [ "$EUID" -ne 0 ]; then
  echo "Este script precisa ser executado como root"
  echo "Use: sudo $0"
  exit 1
fi

# Verificar dependências antes de executar
for cmd in curl wget git; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "Dependência não encontrada: $cmd"
    echo "Instale com: sudo dnf install $cmd"
    exit 1
  fi
done`,language:"bash",title:"tratamento de erros"}),t.jsxs("h2",{children:[t.jsx(Jx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Script Completo de Exemplo"]}),t.jsx(f,{code:`#!/bin/bash
# ============================================
# Script: backup-home.sh
# Descrição: Faz backup da pasta home com data
# Uso: ./backup-home.sh [destino]
# ============================================

set -euo pipefail

USUARIO=$(whoami)
DATA=$(date +%Y%m%d_%H%M%S)
ORIGEM="/home/$USUARIO"
DESTINO="\${1:-/tmp}"
ARQUIVO="backup-\${USUARIO}-\${DATA}.tar.gz"

# Função de log
log() {
  echo "[$(date +%H:%M:%S)] $1"
}

# Verificar se destino existe
if [ ! -d "$DESTINO" ]; then
  echo "Diretório de destino não existe: $DESTINO"
  exit 1
fi

log "Iniciando backup de $ORIGEM"
log "Destino: $DESTINO/$ARQUIVO"

# Criar backup
tar -czf "$DESTINO/$ARQUIVO" "$ORIGEM" 2>/dev/null

# Verificar se foi criado
if [ -f "$DESTINO/$ARQUIVO" ]; then
  TAMANHO=$(du -sh "$DESTINO/$ARQUIVO" | cut -f1)
  log "Backup concluído! Tamanho: $TAMANHO"
  log "Arquivo: $DESTINO/$ARQUIVO"
else
  log "ERRO: Backup falhou!"
  exit 1
fi`,language:"bash",title:"script-completo.sh"}),t.jsx(Q,{type:"warning",title:"Boas práticas",children:t.jsxs("ul",{className:"list-disc pl-4 mt-1 space-y-1 text-sm",children:[t.jsxs("li",{children:["Sempre comece com ",t.jsx("code",{children:"#!/bin/bash"})]}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:"set -euo pipefail"})," para scripts robustos"]}),t.jsxs("li",{children:["Aspas nas variáveis: ",t.jsx("code",{children:'"$VARIAVEL"'})," em vez de ",t.jsx("code",{children:"$VARIAVEL"})]}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:"local"})," dentro de funções para variáveis locais"]}),t.jsxs("li",{children:["Teste com ",t.jsx("code",{children:"bash -n script.sh"})," (syntax check) antes de executar"]}),t.jsxs("li",{children:["Use ",t.jsx("code",{children:"shellcheck"})," para analisar erros: ",t.jsx("code",{children:"sudo dnf install ShellCheck"})]})]})})]})}function hb(){return t.jsxs(ie,{title:"Segurança no Fedora",subtitle:"Boas práticas, hardening do sistema, auditoria, fail2ban, SELinux e como proteger seu Fedora Linux.",difficulty:"avancado",timeToRead:"40 min",children:[t.jsxs("h2",{children:[t.jsx(Ah,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Por onde Começar"]}),t.jsx("p",{children:"O Fedora já vem com um dos melhores conjuntos de segurança entre as distros Linux — SELinux ativo por padrão, firewalld configurado e atualizações frequentes. O objetivo aqui é entender e fortalecer ainda mais essas camadas."}),t.jsxs(Q,{type:"info",title:"Princípio do menor privilégio",children:["Nunca use o usuário root para o dia a dia. Use ",t.jsx("code",{children:"sudo"})," apenas quando necessário. Um invasor que comprometer seu usuário comum ainda não terá acesso de root."]}),t.jsx("h2",{children:"Atualizações de Segurança"}),t.jsx(f,{code:`# Instalar apenas atualizações de segurança
sudo dnf update --security

# Ver quais pacotes têm atualizações de segurança pendentes
sudo dnf updateinfo list security

# Ver detalhes sobre vulnerabilidades (CVEs)
sudo dnf updateinfo list security --verbose

# Habilitar atualização automática (recomendado para servidores)
sudo dnf install dnf-automatic

# Configurar para aplicar só atualizações de segurança automaticamente
sudo nano /etc/dnf/automatic.conf
# [commands]
# upgrade_type = security
# apply_updates = yes

# Habilitar o timer
sudo systemctl enable --now dnf-automatic.timer
sudo systemctl status dnf-automatic.timer`,language:"bash",title:"atualizações de segurança"}),t.jsxs("h2",{children:[t.jsx(gr,{className:"inline-block mr-2 mb-1 w-5 h-5"})," SELinux — Security-Enhanced Linux"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"SELinux"})," é a característica de segurança mais importante do Fedora. Ele controla o que cada processo pode acessar — mesmo que um serviço seja comprometido, o SELinux limita os danos."]}),t.jsx(f,{code:`# Ver o status atual do SELinux
sestatus
# SELinux status: enabled
# SELinuxfs mount: /sys/fs/selinux
# SELinux mount point: /sys/fs/selinux
# Loaded policy name: targeted
# Current mode: enforcing   ← NUNCA mude para disabled
# Mode from config file: enforcing
# Policy MLS status: enabled
# Policy deny_unknown status: allowed
# Memory protection checking: actual (secure)
# Max kernel policy version: 33

# Ver o modo atual de forma simples
getenforce
# Enforcing   ← protegendo ativamente
# Permissive  ← apenas log, não bloqueia
# Disabled    ← totalmente desativado (evite!)

# Mudar para modo permissive temporariamente (para debug)
sudo setenforce 0    # permissive
sudo setenforce 1    # enforcing (volta ao normal)

# Verificar se um serviço está sendo bloqueado pelo SELinux
sudo journalctl -b | grep "avc: denied"
sudo ausearch -m avc -ts recent`,language:"bash",title:"SELinux básico"}),t.jsx(f,{code:`# Ver contexto SELinux de arquivos
ls -Z /var/www/html/
# -rw-r--r--. root root unconfined_u:object_r:httpd_sys_content_t:s0 index.html

# Ver contexto de processos
ps -eZ | grep httpd

# Corrigir contexto de arquivo após movimentação
# (quando você move um arquivo de lugar, o contexto pode ficar errado)
sudo restorecon -v /var/www/html/arquivo.html

# Restaurar contexto de um diretório inteiro
sudo restorecon -Rv /var/www/html/

# Verificar e corrigir contextos do sistema todo
sudo touch /.autorelabel && sudo reboot   # relabela tudo no próximo boot

# Definir contexto permanente para um caminho
sudo semanage fcontext -a -t httpd_sys_content_t "/meu-site(/.*)?"
sudo restorecon -Rv /meu-site/`,language:"bash",title:"SELinux contextos"}),t.jsx(f,{code:`# Ver e gerenciar booleanos do SELinux
# (booleans são switches que habilitam/desabilitam comportamentos)

# Listar todos os booleanos
getsebool -a | grep httpd

# Ver booleano específico
getsebool httpd_can_network_connect

# Habilitar um booleano temporariamente (reset no reboot)
sudo setsebool httpd_can_network_connect on

# Habilitar permanentemente (-P)
sudo setsebool -P httpd_can_network_connect on

# Exemplos comuns:
sudo setsebool -P httpd_can_network_connect_db on  # Apache conectar ao DB
sudo setsebool -P httpd_use_nfs on                  # Apache usar NFS
sudo setsebool -P allow_user_exec_content on        # Usuários executar conteúdo`,language:"bash",title:"SELinux booleanos"}),t.jsx("h2",{children:"Firewall com firewalld"}),t.jsx(f,{code:`# Ver status do firewall
sudo firewall-cmd --state
sudo firewall-cmd --list-all

# Ver todas as zonas
sudo firewall-cmd --get-zones
sudo firewall-cmd --get-default-zone

# Ver o que está aberto na zona padrão (public)
sudo firewall-cmd --list-all --zone=public

# Abrir uma porta
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

# Abrir um serviço (mais legível que porta)
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload

# Fechar uma porta/serviço
sudo firewall-cmd --permanent --remove-port=8080/tcp
sudo firewall-cmd --permanent --remove-service=telnet
sudo firewall-cmd --reload

# Listar serviços disponíveis
sudo firewall-cmd --get-services

# Bloquear um IP específico
sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="1.2.3.4" reject'
sudo firewall-cmd --reload

# Ver regras ricas
sudo firewall-cmd --list-rich-rules`,language:"bash",title:"firewalld"}),t.jsxs("h2",{children:[t.jsx($x,{className:"inline-block mr-2 mb-1 w-5 h-5"})," fail2ban — Bloqueio de Ataques de Força Bruta"]}),t.jsx(f,{code:`# Instalar o fail2ban
sudo dnf install fail2ban

# Habilitar e iniciar
sudo systemctl enable --now fail2ban

# Criar configuração local (não edite o .conf original)
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local

# Configurações importantes no jail.local:
[DEFAULT]
bantime  = 3600       # Tempo de banimento (segundos)
findtime = 600        # Janela de tempo para contar falhas
maxretry = 5          # Número de falhas antes de banir

[sshd]
enabled = true
port    = ssh
logpath = /var/log/secure    # Fedora usa /var/log/secure (não auth.log)
maxretry = 3

# Reiniciar após configurar
sudo systemctl restart fail2ban

# Ver status de todas as jails
sudo fail2ban-client status

# Ver status do SSH jail
sudo fail2ban-client status sshd

# Desbanir um IP manualmente
sudo fail2ban-client set sshd unbanip 1.2.3.4

# Ver IPs banidos
sudo fail2ban-client get sshd banned`,language:"bash",title:"fail2ban"}),t.jsxs("h2",{children:[t.jsx(Pn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Auditoria e Monitoramento"]}),t.jsx(f,{code:`# auditd — sistema de auditoria do kernel Linux

# Instalar e habilitar
sudo dnf install audit
sudo systemctl enable --now auditd

# Ver logs de auditoria
sudo ausearch -ts recent          # Eventos recentes
sudo ausearch -m avc              # Negações do SELinux
sudo ausearch -x /bin/su          # Usos do comando su

# Relatório de auditoria resumido
sudo aureport --summary
sudo aureport --auth              # Tentativas de autenticação
sudo aureport --failed            # Eventos com falha

# Listar logins recentes
last
lastb                             # Tentativas falhas de login

# Ver quem está logado agora
who
w

# Ver últimos logins de cada usuário
lastlog

# Monitorar um arquivo em tempo real (quem acessa)
sudo auditctl -w /etc/passwd -p rwxa -k passwd_changes

# Ver eventos relacionados à regra
sudo ausearch -k passwd_changes`,language:"bash",title:"auditoria"}),t.jsx("h2",{children:"Senhas e Autenticação"}),t.jsx(f,{code:`# Ver política de senha atual
sudo authselect current

# Configurar complexidade de senha (PAM)
sudo nano /etc/security/pwquality.conf

# Parâmetros importantes:
# minlen = 12         ← comprimento mínimo
# minclass = 3        ← tipos de caracteres (letras, números, símbolos)
# maxrepeat = 3       ← máximo de caracteres repetidos
# gecoscheck = 1      ← não usar nome do usuário na senha

# Forçar troca de senha no próximo login
sudo chage -d 0 usuario

# Definir expiração de senha (a cada 90 dias)
sudo chage -M 90 usuario

# Ver configurações de expiração de um usuário
sudo chage -l usuario

# Bloquear conta de um usuário
sudo passwd -l usuario

# Desbloquear
sudo passwd -u usuario`,language:"bash",title:"política de senhas"}),t.jsx("h2",{children:"Verificação de Integridade do Sistema"}),t.jsx(f,{code:`# rpm --verify — verificar integridade dos arquivos instalados
# (Fedora usa RPM, que tem verificação de hash integrada)

# Verificar um pacote específico
sudo rpm -V openssh

# Verificar todos os pacotes do sistema (demora!)
sudo rpm -Va

# Saída: cada letra indica um tipo de alteração
# S = tamanho diferente
# M = permissões diferentes
# 5 = hash MD5 diferente
# T = timestamp diferente
# . = OK (sem alteração)

# AIDE — Advanced Intrusion Detection Environment
sudo dnf install aide

# Inicializar banco de dados de referência
sudo aide --init
sudo mv /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz

# Verificar o sistema contra o banco de dados
sudo aide --check

# Atualizar banco após mudanças legítimas
sudo aide --update
sudo mv /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz`,language:"bash",title:"integridade do sistema"}),t.jsx("h2",{children:"Comandos de Segurança Rápida"}),t.jsx(f,{code:`# Ver todas as portas abertas
sudo ss -tulpn

# Ver conexões estabelecidas
sudo ss -tnp

# Checar processos rodando como root
ps aux | awk '$1=="root" {print $0}'

# Listar arquivos SUID (perigosos se mal configurados)
sudo find / -perm -4000 -type f 2>/dev/null

# Listar arquivos SGID
sudo find / -perm -2000 -type f 2>/dev/null

# Verificar arquivos world-writable (escrita pública)
sudo find /etc -perm -002 -type f 2>/dev/null

# Ver se há usuários com UID 0 (além do root)
awk -F: '$3==0 {print $1}' /etc/passwd

# Verificar contas sem senha
sudo awk -F: '($2 == "" || $2 == "!") {print $1}' /etc/shadow

# Verificar atualizações de segurança pendentes
sudo dnf updateinfo list security`,language:"bash",title:"checklist de segurança"}),t.jsxs(Q,{type:"warning",title:"Nunca desative o SELinux",children:["A maioria dos problemas com SELinux tem solução sem precisar desativá-lo. Use ",t.jsx("code",{children:"sealert"})," ou ",t.jsx("code",{children:"ausearch -m avc"})," para diagnosticar, e corrija o contexto ou ajuste um booleano. Desativar o SELinux remove uma das proteções mais eficazes do Fedora."]})]})}function fb(){return t.jsxs(ie,{title:"Troubleshooting",subtitle:"Diagnóstico e solução dos problemas mais comuns no Fedora Linux — boot, gráficos, áudio, rede, pacotes e muito mais.",difficulty:"avancado",timeToRead:"40 min",children:[t.jsxs("h2",{children:[t.jsx(Eh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Diagnóstico Geral"]}),t.jsx("p",{children:"Antes de buscar o problema específico, estas ferramentas dão uma visão geral do estado do sistema:"}),t.jsx(f,{code:`# Logs do boot atual (todos)
journalctl -b

# Apenas erros no boot atual
journalctl -b -p err

# Erros e avisos
journalctl -b -p warning

# Logs do boot anterior (útil se o sistema travou)
journalctl -b -1

# Serviços que falharam ao iniciar
systemctl --failed

# Informações de hardware
lspci          # Dispositivos PCI (placa de vídeo, rede, etc.)
lsusb          # Dispositivos USB
lscpu          # Informações da CPU
lsblk          # Discos e partições
free -h        # Memória RAM usada/livre
df -h          # Espaço em disco

# O que mudou recentemente (últimas instalações/atualizações)
sudo dnf history | head -20
sudo dnf history info 5   # detalhes da transação número 5

# Temperatura e sensores (instalar lm_sensors)
sudo dnf install lm_sensors
sudo sensors-detect
sensors`,language:"bash",title:"diagnóstico geral"}),t.jsxs("h2",{children:[t.jsx(_s,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Problemas com Interface Gráfica (GNOME)"]}),t.jsx(f,{code:`# 1. Se o GNOME travou — tente trocar para um TTY
Ctrl + Alt + F2    # Abre TTY2 (terminal puro)
Ctrl + Alt + F1    # Volta ao GNOME (ou F3 se o GNOME for em F3)

# 2. Ver log de erros do GNOME (Wayland)
journalctl -b --user -u gnome-session
journalctl -b | grep -i "gnome|wayland|mutter"

# 3. Reiniciar o GNOME sem deslogar (modo X11 antigo)
Alt + F2  → digitar "r" → Enter    # só funciona em X11

# 4. Se travado completamente — matar o GNOME pelo TTY
pkill -f gnome-session
# ou
sudo systemctl restart gdm

# Verificar logs do servidor gráfico
cat /var/log/Xorg.0.log | grep "(EE)"    # Erros
journalctl -b | grep -i "EE|error" | grep -i "xorg|display"`,language:"bash",title:"problemas com GNOME"}),t.jsx("h3",{children:"Drivers de Vídeo"}),t.jsx(f,{code:`# Verificar qual driver está em uso
lspci -k | grep -A 3 VGA

# === NVIDIA ===
# Verificar se o módulo está carregado
lsmod | grep nvidia

# Instalar drivers NVIDIA via RPM Fusion
sudo dnf install akmod-nvidia
sudo dnf install xorg-x11-drv-nvidia-cuda   # Para CUDA

# Verificar instalação do NVIDIA
nvidia-smi

# === AMD ===
# AMD usa driver open source (amdgpu) — geralmente funciona out of the box
lsmod | grep amdgpu

# Instalar suporte a mesa (OpenGL) — normalmente já instalado
sudo dnf install mesa-dri-drivers mesa-vulkan-drivers

# === Intel ===
sudo dnf install intel-media-driver libva-intel-driver

# Verificar OpenGL geral
glxinfo | grep "OpenGL renderer"
glxgears   # Testar aceleração 3D

# Verificar tipo de sessão (X11 ou Wayland)
echo $XDG_SESSION_TYPE`,language:"bash",title:"drivers de vídeo"}),t.jsxs("h2",{children:[t.jsx(Hs,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Problemas com DNF e Pacotes"]}),t.jsx(f,{code:`# Erro: "Lock file '/var/run/dnf.pid' already exists"
# Outro processo está usando o DNF. Espere terminar, ou:
sudo rm /var/run/dnf.pid
sudo kill $(cat /var/cache/dnf/dnf.pid) 2>/dev/null

# Erro: repositório indisponível (timeout)
# Limpar cache e tentar novamente
sudo dnf clean all
sudo dnf makecache
sudo dnf update

# Erro: "GPG key verification failed" (chave de repositório inválida)
sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$(rpm -E %fedora)-primary

# Forçar atualização de metadados dos repositórios
sudo dnf --refresh update

# Desabilitar repositório problemático temporariamente
sudo dnf update --disablerepo=rpmfusion-free-updates

# Resolver dependências quebradas
sudo dnf distro-sync
sudo dnf --best --allowerasing upgrade   # Permite remoção de conflitantes`,language:"bash",title:"problemas com DNF"}),t.jsx(f,{code:`# Pacote corrompido ou instalação incompleta
# 1. Tentar reinstalar
sudo dnf reinstall pacote

# 2. Verificar integridade do pacote instalado
sudo rpm -V pacote

# 3. Forçar reinstalação sobrescrevendo arquivos
sudo dnf install --allowerasing pacote

# 4. Verificar e corrigir dependências
sudo dnf check
sudo dnf autoremove

# Restaurar sistema após atualização problemática (downgrade)
sudo dnf history undo last        # Desfaz a última transação
sudo dnf history list             # Ver histórico
sudo dnf history undo 5           # Desfaz a transação número 5

# Downgrade de um pacote específico para versão anterior
sudo dnf downgrade pacote

# Ver versões disponíveis para download de um pacote
sudo dnf --showduplicates list pacote`,language:"bash",title:"corrigindo pacotes"}),t.jsxs("h2",{children:[t.jsx(Wx,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Problemas de Áudio"]}),t.jsx(f,{code:`# Fedora usa PipeWire como servidor de áudio

# Verificar se os serviços de áudio estão rodando
systemctl --user status pipewire
systemctl --user status pipewire-pulse
systemctl --user status wireplumber

# Reiniciar o áudio (sem reboot)
systemctl --user restart pipewire pipewire-pulse wireplumber

# Verificar dispositivos de áudio
wpctl status              # Status completo do PipeWire
aplay -l                  # Listar dispositivos de saída de som
arecord -l                # Listar dispositivos de entrada

# Ajustar volume via linha de comando
wpctl set-volume @DEFAULT_AUDIO_SINK@ 70%   # Volume a 70%
wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle  # Ligar/desligar mudo

# Verificar volume e mudo com amixer
amixer sget Master

# Testar saída de áudio
speaker-test -c 2 -t wav

# Se HDMI não produz som — selecionar dispositivo correto
wpctl set-default $(wpctl status | grep HDMI | awk '{print $1}' | tr -d '.')

# Instalar pavucontrol (mixer gráfico)
sudo dnf install pavucontrol
pavucontrol`,language:"bash",title:"problemas de áudio"}),t.jsxs("h2",{children:[t.jsx(eg,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Problemas de Rede"]}),t.jsx(f,{code:`# Verificar se NetworkManager está rodando
systemctl status NetworkManager

# Verificar interfaces de rede
ip link show
ip addr show

# Reiniciar NetworkManager
sudo systemctl restart NetworkManager

# Wi-Fi não aparece ou não conecta
nmcli device wifi rescan
nmcli device wifi list
nmcli device wifi connect "NomeDaRede" password "SenhaAqui"

# Verificar se firmware Wi-Fi está carregado
dmesg | grep -i firmware
dmesg | grep -i "wlan|wifi|wireless"

# Instalar firmwares ausentes
sudo dnf install iwl7260-firmware    # Intel Wi-Fi série 7xxx
sudo dnf install linux-firmware      # Pacote geral de firmwares

# DNS não funciona (resolve nomes mas não conecta)
cat /etc/resolv.conf
# Testar resolução de nome
nslookup google.com
dig google.com

# Definir DNS manualmente (temporário)
sudo resolvectl dns eth0 8.8.8.8 8.8.4.4

# Verificar rota padrão (gateway)
ip route show
# Deve haver uma linha: default via 192.168.x.1

# Testar conectividade passo a passo
ping -c 3 192.168.1.1      # 1. Gateway
ping -c 3 8.8.8.8          # 2. Internet (sem DNS)
ping -c 3 google.com       # 3. Internet (com DNS)`,language:"bash",title:"problemas de rede"}),t.jsx("h2",{children:"Problemas de Boot"}),t.jsx(f,{code:`# === BOOT FALHA — usar modo de recuperação ===
# 1. Na tela do GRUB, pressione 'e' na entrada do Fedora
# 2. Encontre a linha que começa com "linux" (kernel)
# 3. No final da linha, adicione: systemd.unit=rescue.target
# 4. Pressione Ctrl+X para bootar em modo rescue

# === GRUB corrompido ===
# 1. Boot pelo pendrive de instalação do Fedora
# 2. Selecionar "Troubleshooting" → "Rescue a Fedora system"
# 3. O sistema monta o Fedora instalado em /mnt/sysimage

# 4. Reinstalar GRUB (BIOS/MBR)
grub2-install /dev/sda

# 5. Regenerar configuração do GRUB
grub2-mkconfig -o /boot/grub2/grub.cfg

# Para UEFI:
grub2-install --target=x86_64-efi --efi-directory=/boot/efi
grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg

# === initramfs corrompido ===
# No modo rescue ou live USB com chroot:
dracut --force    # Regenerar initramfs

# Ver se o kernel está presente
ls /boot/vmlinuz-*
ls /boot/initramfs-*`,language:"bash",title:"problemas de boot"}),t.jsx("h2",{children:"SELinux Bloqueando um Serviço"}),t.jsx(f,{code:`# Verificar se o SELinux está bloqueando algo
sudo journalctl -b | grep "avc: denied"
sudo ausearch -m avc -ts recent

# Usar sealert para diagnóstico detalhado e sugestão de solução
sudo dnf install setroubleshoot-server
sudo sealert -a /var/log/audit/audit.log

# Ver detalhes de negações recentes
sudo audit2why -al    # Explica em português qual regra foi violada
sudo audit2allow -al  # Gera a política que permitiria a ação

# Solução temporária: modo permissive para um serviço específico
sudo semanage permissive -a httpd_t    # Apenas o Apache vai no modo permissive

# Voltar ao enforcing
sudo semanage permissive -d httpd_t

# Se um arquivo foi criado no lugar errado (contexto errado)
ls -Z /var/www/html/arquivo.php
sudo restorecon -Rv /var/www/html/`,language:"bash",title:"SELinux troubleshooting"}),t.jsx("h2",{children:"Recuperar Espaço em Disco"}),t.jsx(f,{code:`# Ver uso de disco por diretório
df -h
du -sh /* 2>/dev/null | sort -rh | head -20

# Limpar cache do DNF
sudo dnf clean all
du -sh /var/cache/dnf/

# Remover pacotes antigos de kernel (manter apenas os 2 últimos)
sudo dnf remove --oldinstallonly --setopt=installonly_limit=2 kernel

# Limpar journalctl (logs)
sudo journalctl --disk-usage
sudo journalctl --vacuum-size=200M    # Manter apenas 200MB de logs
sudo journalctl --vacuum-time=2weeks  # Manter apenas últimas 2 semanas

# Remover pacotes que não são mais necessários
sudo dnf autoremove

# Encontrar arquivos grandes
sudo find / -type f -size +500M -exec ls -lh {} ; 2>/dev/null

# Flatpak — limpar dados não utilizados
flatpak uninstall --unused`,language:"bash",title:"recuperar espaço"}),t.jsx(Q,{type:"success",title:"Checklist de diagnóstico rápido",children:t.jsxs("ol",{className:"list-decimal pl-4 mt-1 space-y-1 text-sm",children:[t.jsxs("li",{children:[t.jsx("code",{children:"systemctl --failed"})," — serviços com falha"]}),t.jsxs("li",{children:[t.jsx("code",{children:"journalctl -b -p err"})," — erros no boot atual"]}),t.jsxs("li",{children:[t.jsx("code",{children:"df -h"})," — checar espaço em disco"]}),t.jsxs("li",{children:[t.jsx("code",{children:"free -h"})," — checar memória"]}),t.jsxs("li",{children:[t.jsx("code",{children:"sudo ausearch -m avc -ts recent"})," — negações do SELinux"]}),t.jsxs("li",{children:[t.jsx("code",{children:"sudo dnf history | head -5"})," — últimas alterações de pacotes"]})]})})]})}function pb(){return t.jsxs(ie,{title:"Flags, Parâmetros e --help",subtitle:"Aprenda a ler e entender a ajuda dos comandos Linux em Português — flags, parâmetros obrigatórios, opcionais e como nunca ficar perdido no terminal.",difficulty:"iniciante",timeToRead:"30 min",children:[t.jsxs("h2",{children:[t.jsx(Vn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," O que são Flags e Parâmetros?"]}),t.jsxs("p",{children:["Todo comando Linux aceita ",t.jsx("strong",{children:"entradas extras"})," que modificam seu comportamento. Essas entradas se dividem em:"]}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Flags / Opções"})," — modificam o comportamento do comando. Começam com ",t.jsx("code",{children:"-"})," (curto) ou ",t.jsx("code",{children:"--"})," (longo). Ex: ",t.jsx("code",{children:"ls -l"})," ou ",t.jsx("code",{children:"ls --long"})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Argumentos / Parâmetros"})," — valores que o comando precisa para agir. Ex: ",t.jsxs("code",{children:["dnf install ",t.jsx("em",{children:"firefox"})]}),' — "firefox" é o argumento']})]}),t.jsx(f,{code:`# Estrutura geral de um comando Linux:
comando [opções] [argumentos]

# Exemplos:
ls -la /home          # ls = comando, -la = flags, /home = argumento
dnf install -y vim    # dnf = comando, install = subcomando, -y = flag, vim = argumento
cp -r pasta/ destino/ # -r = flag, pasta/ e destino/ = argumentos`,language:"bash",title:"anatomia de um comando"}),t.jsx("h2",{children:"Formato das Flags"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Formato"}),t.jsx("th",{children:"Tipo"}),t.jsx("th",{children:"Exemplo"}),t.jsx("th",{children:"Significado"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-l"})}),t.jsx("td",{children:"Flag curta (1 letra)"}),t.jsx("td",{children:t.jsx("code",{children:"ls -l"})}),t.jsx("td",{children:"Listagem longa"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--long"})}),t.jsx("td",{children:"Flag longa (palavra)"}),t.jsx("td",{children:t.jsx("code",{children:"ls --all"})}),t.jsx("td",{children:"Mostrar tudo (incluindo ocultos)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-la"})}),t.jsx("td",{children:"Flags combinadas"}),t.jsx("td",{children:t.jsx("code",{children:"ls -la"})}),t.jsxs("td",{children:["Equivale a ",t.jsx("code",{children:"-l -a"})]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-n 10"})}),t.jsx("td",{children:"Flag com valor"}),t.jsx("td",{children:t.jsx("code",{children:"head -n 10"})}),t.jsx("td",{children:"Mostrar 10 linhas"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--lines=10"})}),t.jsx("td",{children:"Flag longa com valor"}),t.jsx("td",{children:t.jsx("code",{children:"head --lines=10"})}),t.jsx("td",{children:"Mesmo que acima"})]})]})]}),t.jsxs(Q,{type:"info",title:"Dica: flags curtas e longas fazem a mesma coisa",children:[t.jsx("code",{children:"ls -a"})," e ",t.jsx("code",{children:"ls --all"})," são equivalentes. A forma curta é mais rápida de digitar, a forma longa é mais legível em scripts."]}),t.jsxs("h2",{children:[t.jsx(Vn,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Como usar o --help"]}),t.jsxs("p",{children:["Quase todo comando Linux aceita a flag ",t.jsx("code",{children:"--help"})," (ou ",t.jsx("code",{children:"-h"}),"). Ela exibe um resumo rápido das opções disponíveis, direto no terminal — sem precisar de internet ou manual."]}),t.jsx(f,{code:`# Forma padrão
comando --help

# Alguns comandos aceitam -h (forma curta)
comando -h

# Exemplos
ls --help
dnf --help
cp --help
chmod --help
systemctl --help`,language:"bash",title:"usando --help"}),t.jsx("h2",{children:"Como Ler a Saída do --help (Explicado em Português)"}),t.jsxs("p",{children:["A saída do ",t.jsx("code",{children:"--help"})," sempre segue um padrão. Veja o exemplo do ",t.jsx("code",{children:"ls --help"})," traduzido e explicado:"]}),t.jsx(f,{code:`# Saída real do: ls --help (simplificada e comentada)

Uso: ls [OPÇÃO]... [ARQUIVO]...
#    └── "ls" seguido de opções (todas opcionais) e arquivos/diretórios

# [OPÇÃO]...  = você pode passar zero ou mais flags
# [ARQUIVO]... = você pode passar zero ou mais arquivos/diretórios
# Os colchetes [ ] indicam que o item é OPCIONAL
# As reticências ... indicam que pode repetir

Opções principais:
  -a, --all          # não ocultar entradas que começam com .
  -A, --almost-all   # como --all, mas não lista . e ..
  -l                 # usar formato de listagem longa
  -h, --human-readable   # com -l, mostra tamanhos legíveis (1K, 2M...)
  -r, --reverse      # inverter a ordem de ordenação
  -S                 # ordenar pelo tamanho do arquivo
  -t                 # ordenar por data de modificação
  -R, --recursive    # listar subdiretórios recursivamente
      --help         # exibir esta ajuda e sair
      --version      # exibir informação da versão e sair`,language:"bash",title:"lendo o --help do ls"}),t.jsx("h2",{children:"Flags Explicadas: Comandos Mais Usados"}),t.jsx("h3",{children:"ls — Listar Arquivos"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Flag"}),t.jsx("th",{children:"Nome Completo"}),t.jsx("th",{children:"O que faz"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-l"})}),t.jsx("td",{children:t.jsx("code",{children:"--long"})}),t.jsx("td",{children:"Mostra formato longo: permissões, dono, tamanho, data"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-a"})}),t.jsx("td",{children:t.jsx("code",{children:"--all"})}),t.jsx("td",{children:"Mostra todos os arquivos, incluindo os ocultos (que começam com ponto)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-h"})}),t.jsx("td",{children:t.jsx("code",{children:"--human-readable"})}),t.jsxs("td",{children:["Tamanhos legíveis (KB, MB, GB) — use junto com ",t.jsx("code",{children:"-l"})]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-r"})}),t.jsx("td",{children:t.jsx("code",{children:"--reverse"})}),t.jsx("td",{children:"Inverte a ordem de listagem"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-t"})}),t.jsx("td",{children:"—"}),t.jsx("td",{children:"Ordena por data de modificação (mais recente primeiro)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-S"})}),t.jsx("td",{children:"—"}),t.jsx("td",{children:"Ordena por tamanho (maior primeiro)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-R"})}),t.jsx("td",{children:t.jsx("code",{children:"--recursive"})}),t.jsx("td",{children:"Lista recursivamente todos os subdiretórios"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-1"})}),t.jsx("td",{children:"—"}),t.jsx("td",{children:"Um arquivo por linha"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-d"})}),t.jsx("td",{children:t.jsx("code",{children:"--directory"})}),t.jsx("td",{children:"Lista o diretório em si, não seu conteúdo"})]})]})]}),t.jsx(f,{code:`ls -la           # longa (-l) + ocultos (-a)
ls -lh           # longa (-l) + tamanhos legíveis (-h)
ls -lt           # longa (-l) + ordena por data (-t)
ls -lS           # longa (-l) + ordena por tamanho (-S)
ls -laht         # tudo junto: long, all, human, time`,language:"bash",title:"combinando flags do ls"}),t.jsx("h3",{children:"cp — Copiar Arquivos"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Flag"}),t.jsx("th",{children:"O que faz"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-r"})," / ",t.jsx("code",{children:"--recursive"})]}),t.jsx("td",{children:"Copia diretórios recursivamente (obrigatório para pastas)"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-v"})," / ",t.jsx("code",{children:"--verbose"})]}),t.jsx("td",{children:"Mostra o que está sendo copiado"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-p"})," / ",t.jsx("code",{children:"--preserve"})]}),t.jsx("td",{children:"Preserva permissões, dono e data"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-i"})," / ",t.jsx("code",{children:"--interactive"})]}),t.jsx("td",{children:"Pergunta antes de sobrescrever"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-f"})," / ",t.jsx("code",{children:"--force"})]}),t.jsx("td",{children:"Força a cópia sem perguntar"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-n"})," / ",t.jsx("code",{children:"--no-clobber"})]}),t.jsx("td",{children:"Não sobrescreve arquivos existentes"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-u"})," / ",t.jsx("code",{children:"--update"})]}),t.jsx("td",{children:"Copia apenas se o arquivo de origem for mais novo"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-a"})," / ",t.jsx("code",{children:"--archive"})]}),t.jsxs("td",{children:["Equivale a ",t.jsx("code",{children:"-rpP"})," — ideal para backups completos"]})]})]})]}),t.jsx("h3",{children:"dnf — Gerenciador de Pacotes"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Flag"}),t.jsx("th",{children:"O que faz"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-y"})," / ",t.jsx("code",{children:"--assumeyes"})]}),t.jsx("td",{children:'Responde "sim" automaticamente para todas as perguntas'})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-q"})," / ",t.jsx("code",{children:"--quiet"})]}),t.jsx("td",{children:"Modo silencioso — mostra menos informações"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-v"})," / ",t.jsx("code",{children:"--verbose"})]}),t.jsx("td",{children:"Modo detalhado — mostra mais informações"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--no-best"})}),t.jsx("td",{children:"Não falha se a melhor versão não puder ser instalada"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--allowerasing"})}),t.jsx("td",{children:"Permite remover pacotes para resolver conflitos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--security"})}),t.jsx("td",{children:"Aplica apenas atualizações de segurança"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--downloadonly"})}),t.jsx("td",{children:"Apenas baixa, não instala"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--refresh"})}),t.jsx("td",{children:"Força atualização dos metadados antes da operação"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--enablerepo=X"})}),t.jsx("td",{children:"Habilita um repositório específico para esta operação"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--disablerepo=X"})}),t.jsx("td",{children:"Desabilita um repositório para esta operação"})]})]})]}),t.jsx("h3",{children:"chmod — Permissões"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Flag"}),t.jsx("th",{children:"O que faz"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-R"})," / ",t.jsx("code",{children:"--recursive"})]}),t.jsx("td",{children:"Aplica permissões recursivamente em todos os arquivos dentro de um diretório"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-v"})," / ",t.jsx("code",{children:"--verbose"})]}),t.jsx("td",{children:"Mostra cada arquivo alterado"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-c"})," / ",t.jsx("code",{children:"--changes"})]}),t.jsx("td",{children:"Como verbose, mas mostra apenas quando há mudança"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-f"})," / ",t.jsx("code",{children:"--silent"})]}),t.jsx("td",{children:"Silencia mensagens de erro"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--reference=FILE"})}),t.jsx("td",{children:"Usa as permissões de outro arquivo como referência"})]})]})]}),t.jsx("h3",{children:"systemctl — Controle de Serviços"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Subcomando / Flag"}),t.jsx("th",{children:"O que faz"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"start"})}),t.jsx("td",{children:"Inicia o serviço agora (não persiste após reiniciar)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"stop"})}),t.jsx("td",{children:"Para o serviço agora"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"restart"})}),t.jsx("td",{children:"Para e reinicia o serviço"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"reload"})}),t.jsx("td",{children:"Recarrega a configuração sem parar o serviço"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"enable"})}),t.jsx("td",{children:"Ativa o serviço na inicialização do sistema"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"disable"})}),t.jsx("td",{children:"Desativa o serviço na inicialização"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"enable --now"})}),t.jsx("td",{children:"Ativa na inicialização E inicia agora (dois em um)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"status"})}),t.jsx("td",{children:"Mostra o estado atual, logs recentes e se está ativo"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"is-active"})}),t.jsx("td",{children:'Retorna "active" ou "inactive" — útil em scripts'})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"is-enabled"})}),t.jsx("td",{children:'Retorna "enabled" ou "disabled"'})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--user"})}),t.jsx("td",{children:"Opera no contexto do usuário atual (não root)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--now"})}),t.jsx("td",{children:"Combinado com enable/disable, inicia/para imediatamente"})]})]})]}),t.jsx("h3",{children:"grep — Buscar Texto"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Flag"}),t.jsx("th",{children:"O que faz"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-i"})," / ",t.jsx("code",{children:"--ignore-case"})]}),t.jsx("td",{children:"Ignora maiúsculas/minúsculas na busca"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-r"})," / ",t.jsx("code",{children:"--recursive"})]}),t.jsx("td",{children:"Busca recursivamente em diretórios"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-n"})," / ",t.jsx("code",{children:"--line-number"})]}),t.jsx("td",{children:"Mostra o número da linha de cada resultado"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-l"})," / ",t.jsx("code",{children:"--files-with-matches"})]}),t.jsx("td",{children:"Mostra apenas o nome dos arquivos que contêm o padrão"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-v"})," / ",t.jsx("code",{children:"--invert-match"})]}),t.jsx("td",{children:"Mostra linhas que NÃO contêm o padrão"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-c"})," / ",t.jsx("code",{children:"--count"})]}),t.jsx("td",{children:"Conta quantas linhas correspondem"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-A N"})}),t.jsx("td",{children:"Mostra N linhas após cada resultado"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-B N"})}),t.jsx("td",{children:"Mostra N linhas antes de cada resultado"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"-C N"})}),t.jsx("td",{children:"Mostra N linhas antes e depois (contexto)"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-E"})," / ",t.jsx("code",{children:"--extended-regexp"})]}),t.jsx("td",{children:"Usa expressões regulares estendidas (mais poderosas)"})]}),t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"-w"})," / ",t.jsx("code",{children:"--word-regexp"})]}),t.jsx("td",{children:"Corresponde apenas palavras inteiras"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"--color"})}),t.jsx("td",{children:"Destaca o resultado em cores"})]})]})]}),t.jsxs("h2",{children:[t.jsx(gh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Manual Completo: o comando man"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"man"})," (manual) é a documentação completa de cada comando. É mais detalhado que o ",t.jsx("code",{children:"--help"})," e explica cada opção em profundidade."]}),t.jsx(f,{code:`# Abrir o manual de um comando
man ls
man dnf
man chmod
man grep

# Navegar dentro do manual:
# ↑ ↓ ou j/k  = rolar linha por linha
# PgUp / PgDn  = rolar página por página
# /palavra     = buscar uma palavra (pressione Enter)
# n            = ir para o próximo resultado da busca
# N            = ir para o resultado anterior
# g            = ir para o início
# G            = ir para o final
# q            = sair do manual

# Buscar em todos os manuais por uma palavra
man -k palavra
apropos palavra         # equivalente

# Abrir uma seção específica (o manual tem 8 seções)
man 5 passwd   # seção 5 = formatos de arquivo (ex: /etc/passwd)
man 1 passwd   # seção 1 = comandos de usuário (o comando passwd)`,language:"bash",title:"usando o man"}),t.jsx("h3",{children:"Seções do Manual"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Seção"}),t.jsx("th",{children:"Conteúdo"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"1"}),t.jsx("td",{children:"Comandos de usuário (ls, cp, grep...)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"2"}),t.jsx("td",{children:"Chamadas de sistema do kernel"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"3"}),t.jsx("td",{children:"Funções de bibliotecas C"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"4"}),t.jsx("td",{children:"Arquivos especiais (/dev/...)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"5"}),t.jsx("td",{children:"Formatos de arquivo (/etc/passwd, /etc/fstab...)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"6"}),t.jsx("td",{children:"Jogos"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"7"}),t.jsx("td",{children:"Miscelânea (convenções, protocolos)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"8"}),t.jsx("td",{children:"Comandos de administração (sudo, mount, fdisk...)"})]})]})]}),t.jsxs("h2",{children:[t.jsx($t,{className:"inline-block mr-2 mb-1 w-5 h-5"})," tldr — Resumos em Português"]}),t.jsxs("p",{children:["O ",t.jsx("strong",{children:"tldr"})," é uma alternativa ao man com exemplos práticos e resumidos. Muito mais fácil de entender para quem está começando."]}),t.jsx(f,{code:`# Instalar o tldr
sudo dnf install tldr

# Atualizar base de dados do tldr
tldr --update

# Ver exemplos de um comando
tldr ls
tldr dnf
tldr chmod
tldr grep
tldr systemctl

# Mudar idioma (português)
LANG=pt tldr ls   # se a tradução estiver disponível`,language:"bash",title:"tldr"}),t.jsxs(Q,{type:"success",title:"Nunca fique perdido no terminal",children:["Se não souber como usar um comando, a ordem de consulta recomendada é:",t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"1."})," ",t.jsx("code",{children:"comando --help"})," — resumo rápido das flags",t.jsx("br",{}),t.jsx("strong",{children:"2."})," ",t.jsx("code",{children:"tldr comando"})," — exemplos práticos",t.jsx("br",{}),t.jsx("strong",{children:"3."})," ",t.jsx("code",{children:"man comando"})," — documentação completa",t.jsx("br",{}),t.jsx("strong",{children:"4."})," Pesquisar em ",t.jsx("strong",{children:"ask.fedoraproject.org"})," ou ",t.jsx("strong",{children:"wiki.archlinux.org"})," em inglês"]}),t.jsxs("h2",{children:[t.jsx(Nh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Símbolos Comuns na Documentação"]}),t.jsx("p",{children:"Ao ler a ajuda de comandos, você vai encontrar alguns símbolos com significados específicos:"}),t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Símbolo"}),t.jsx("th",{children:"Significado"}),t.jsx("th",{children:"Exemplo"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"[OPÇÃO]"})}),t.jsx("td",{children:"Colchetes = opcional (pode omitir)"}),t.jsx("td",{children:t.jsx("code",{children:"ls [OPÇÃO]"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"<ARQUIVO>"})}),t.jsx("td",{children:"Ângulos = obrigatório (não pode omitir)"}),t.jsx("td",{children:t.jsx("code",{children:"chmod <modo> <arquivo>"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"OPÇÃO..."})}),t.jsx("td",{children:"Reticências = pode repetir várias vezes"}),t.jsx("td",{children:t.jsx("code",{children:"dnf install PKG..."})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"A | B"})}),t.jsx("td",{children:"Pipe = escolha um ou outro"}),t.jsx("td",{children:t.jsx("code",{children:"start|stop|restart"})})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"{A,B}"})}),t.jsx("td",{children:"Chaves = uma das opções entre chaves"}),t.jsx("td",{children:t.jsx("code",{children:"{read,write}"})})]})]})]})]})}function xb(){return t.jsxs(ie,{title:"Dicas e Truques",subtitle:"Atalhos, hacks e dicas avançadas para aumentar sua produtividade no Fedora Linux.",difficulty:"intermediario",timeToRead:"25 min",children:[t.jsxs("h2",{children:[t.jsx(wh,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Produtividade no Terminal"]}),t.jsx("h3",{children:"Histórico e Navegação"}),t.jsx(f,{code:`# Buscar no histórico (Ctrl+R)
# Pressione Ctrl+R e comece a digitar — navega pelo histórico

# Ver histórico completo
history
history | grep dnf      # filtrar por palavra

# Executar último comando que começa com uma palavra
!dnf                    # execute o último comando que começa com "dnf"
!!                      # repete o último comando
sudo !!                 # repete o último comando com sudo

# Reutilizar argumentos do comando anterior
ls /etc/nginx
cd !$                   # !$ = último argumento do comando anterior

# Substituição rápida em comandos
^velho^novo             # repete o último comando trocando 'velho' por 'novo'`,language:"bash",title:"histórico"}),t.jsx("h3",{children:"Processos em Background"}),t.jsx(f,{code:`# Executar comando em background
comando &

# Ver jobs em background
jobs

# Trazer job para foreground
fg %1         # %1 = job número 1

# Enviar job para background
bg %1

# Executar e desacoplar do terminal (persiste após fechar sessão)
nohup comando &
nohup comando > saida.log 2>&1 &

# tmux — múltiplos terminais em uma janela
sudo dnf install tmux
tmux                    # iniciar
tmux new -s minha-sessao
tmux attach -t minha-sessao`,language:"bash",title:"processos"}),t.jsxs("h2",{children:[t.jsx(vr,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Truques do DNF"]}),t.jsx(f,{code:`# Accelerar downloads com mais conexões paralelas
echo "max_parallel_downloads=10" | sudo tee -a /etc/dnf/dnf.conf
echo "fastestmirror=True" | sudo tee -a /etc/dnf/dnf.conf

# Ver qual pacote foi instalado como dependência de qual
dnf repoquery --installed --userinstalled    # instalados diretamente
dnf repoquery --installed --deplist firefox  # dependências do Firefox

# Simular instalação (dry-run)
sudo dnf install pacote --assumeno

# Instalar pacote sem dependências fracas
sudo dnf install pacote --setopt=install_weak_deps=False

# Excluir um pacote de atualizações
sudo dnf versionlock add nome-do-pacote    # requer: dnf install dnf-plugin-versionlock`,language:"bash",title:"dnf avançado"}),t.jsx("h2",{children:"Dicas de Segurança"}),t.jsx(f,{code:`# Verificar portas abertas
ss -tulpn
sudo nmap -sT localhost

# Verificar processos suspeitos
ps auxf
sudo lsof -i             # conexões de rede por processo

# Verificar últimos logins
last
lastb                    # tentativas de login com falha
sudo journalctl -u sshd | grep Failed

# Verificar integridade do sistema
sudo rpm -Va 2>/dev/null | grep -v "^..........c"   # arquivos modificados (exceto config)

# Ver arquivos SUID/SGID
sudo find / -perm /6000 -type f 2>/dev/null | grep -v proc

# Auditoria básica do SELinux
sudo ausearch -m avc -ts today
sudo audit2why < /var/log/audit/audit.log`,language:"bash",title:"segurança"}),t.jsxs("h2",{children:[t.jsx($t,{className:"inline-block mr-2 mb-1 w-5 h-5"})," Dicas do GNOME"]}),t.jsx(f,{code:`# Reiniciar o shell GNOME sem sair (Wayland — não funciona)
# No X11: Alt+F2, digite 'r' e Enter

# Ativar gestos do touchpad (GNOME 40+)
gsettings set org.gnome.desktop.peripherals.touchpad tap-to-click true
gsettings set org.gnome.desktop.peripherals.touchpad natural-scroll false

# Habilitar overamplification do volume (acima de 100%)
gsettings set org.gnome.desktop.sound allow-volume-above-100-percent true

# Mudar fonte de monospace para terminais
gsettings set org.gnome.desktop.interface monospace-font-name 'Fira Code 11'

# Mostrar data na barra de status
gsettings set org.gnome.desktop.interface clock-show-date true
gsettings set org.gnome.desktop.interface clock-show-weekday true`,language:"bash",title:"gsettings úteis"}),t.jsxs(Q,{type:"success",title:"Instale o tldr para ajuda rápida",children:["O ",t.jsx("strong",{children:"tldr"})," oferece exemplos práticos de comandos, muito mais útil que o man para consultas rápidas. ",t.jsx("code",{children:"sudo dnf install tldr && tldr dnf"})]}),t.jsx("h2",{children:"Ferramentas Essenciais Para Instalar"}),t.jsx(f,{code:`# Ferramentas que todo usuário Fedora deve ter
sudo dnf install -y   vim neovim        # editores
  htop btop         # monitoramento de processos
  bat               # cat melhorado com syntax highlighting
  fd-find           # find mais rápido e amigável
  ripgrep           # grep mais rápido
  fzf               # busca fuzzy interativa
  tldr              # exemplos de comandos
  tmux              # multiplexador de terminal
  git-delta         # diff melhorado para git
  ncdu              # uso de disco interativo
  duf               # df melhorado
  jq                # processador de JSON
  wget curl         # download de arquivos
  net-tools         # ifconfig, netstat (legados mas úteis)
  nmap              # scan de rede
  rsync              # sincronização eficiente de arquivos`,language:"bash",title:"ferramentas recomendadas"})]})}function gb(){const l=[{category:"Documentação Oficial",icon:t.jsx(Oh,{className:"w-5 h-5 text-blue-400"}),items:[{title:"Documentação do Fedora",url:"https://docs.fedoraproject.org",desc:"Documentação oficial do Projeto Fedora — guias de instalação, administração e desenvolvimento."},{title:"Fedora Quick Docs",url:"https://docs.fedoraproject.org/en-US/quick-docs/",desc:"Guias rápidos e tutoriais práticos para tarefas comuns no Fedora."},{title:"DNF Documentation",url:"https://dnf.readthedocs.io",desc:"Documentação completa do gerenciador de pacotes DNF."},{title:"Systemd Documentation",url:"https://systemd.io",desc:"Documentação oficial do systemd — sistema de init e gerenciador de serviços."}]},{category:"Comunidade",icon:t.jsx(xr,{className:"w-5 h-5 text-green-400"}),items:[{title:"Ask Fedora",url:"https://ask.fedoraproject.org",desc:"Fórum Q&A oficial da comunidade Fedora em vários idiomas."},{title:"Fedora Discussion",url:"https://discussion.fedoraproject.org",desc:"Fórum de discussão da comunidade Fedora."},{title:"Reddit r/Fedora",url:"https://reddit.com/r/Fedora",desc:"Comunidade Fedora no Reddit com dicas, novidades e suporte."},{title:"Fedora Magazine",url:"https://fedoramagazine.org",desc:"Artigos, tutoriais e novidades sobre o Fedora e o ecossistema Linux."}]},{category:"Recursos Linux",icon:t.jsx(Io,{className:"w-5 h-5 text-purple-400"}),items:[{title:"The Linux Command Line (livro gratuito)",url:"https://linuxcommand.org/tlcl.php",desc:"Livro completo sobre linha de comando Linux, disponível gratuitamente."},{title:"Arch Wiki",url:"https://wiki.archlinux.org",desc:"A melhor wiki de Linux — a maioria dos artigos é aplicável ao Fedora também."},{title:"Linux Journey",url:"https://linuxjourney.com",desc:"Curso interativo e gratuito de Linux para iniciantes."},{title:"DistroWatch — Fedora",url:"https://distrowatch.com/fedora",desc:"Notícias, reviews e informações sobre lançamentos do Fedora."}]},{category:"Ferramentas Online",icon:t.jsx(wt,{className:"w-5 h-5 text-yellow-400"}),items:[{title:"Flathub",url:"https://flathub.org",desc:"Repositório oficial de aplicativos Flatpak — mais de 2000 apps."},{title:"GNOME Extensions",url:"https://extensions.gnome.org",desc:"Repositório de extensões para o ambiente desktop GNOME."},{title:"RPM Fusion",url:"https://rpmfusion.org",desc:"Repositórios extras com pacotes que não estão no Fedora oficial."},{title:"Fedora Status",url:"https://status.fedoraproject.org",desc:"Status dos serviços do Projeto Fedora em tempo real."}]}];return t.jsxs(ie,{title:"Referências",subtitle:"Links essenciais, documentação oficial e recursos da comunidade para continuar aprendendo Fedora Linux.",difficulty:"iniciante",timeToRead:"5 min",children:[t.jsx(Q,{type:"info",title:"Continue aprendendo",children:"O Fedora tem uma das melhores comunidades do mundo Linux. Use esses recursos para tirar dúvidas, encontrar tutoriais e se manter atualizado sobre as novidades do ecossistema."}),l.map((c,m)=>t.jsxs("div",{className:"mb-10",children:[t.jsxs("h2",{className:"flex items-center gap-2",children:[c.icon," ",c.category]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:c.items.map((u,b)=>t.jsxs("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",className:"block p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all",children:[t.jsx("h4",{className:"font-semibold text-primary mb-1 mt-0 border-0 text-sm",children:u.title}),t.jsx("p",{className:"text-xs text-muted-foreground mb-0",children:u.desc}),t.jsx("span",{className:"text-xs text-muted-foreground/60 font-mono",children:u.url})]},b))})]},m)),t.jsx(Q,{type:"success",title:"Parabéns! Você completou o Guia Completo do Fedora",children:"Você passou por instalação, gerenciamento de pacotes, terminal, sistema de arquivos, usuários, permissões, serviços, rede, firewall, SELinux, Btrfs, desenvolvimento e containers. Continue praticando e explorando — o Linux recompensa quem experimenta!"})]})}function vb(){return t.jsx("div",{className:"min-h-[60vh] flex items-center justify-center px-4",children:t.jsxs("div",{className:"text-center",children:[t.jsx(zh,{className:"w-16 h-16 text-muted-foreground mx-auto mb-6"}),t.jsx("h1",{className:"text-5xl font-extrabold mb-4 border-0",children:"404"}),t.jsx("p",{className:"text-xl text-muted-foreground mb-8",children:"Página não encontrada"}),t.jsx(Bs,{href:"/",children:t.jsxs("button",{className:"px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto",children:[t.jsx(ag,{className:"w-4 h-4"})," Voltar ao início"]})})]})})}const bb=new Hg;function jb({children:l}){const[c,m]=Jt.useState(!1),[u]=ac();return Jt.useEffect(()=>{m(!1),window.scrollTo(0,0)},[u]),t.jsxs("div",{className:"min-h-screen bg-background text-foreground flex",children:[t.jsx(kv,{isOpen:c,setIsOpen:m}),t.jsxs("div",{className:"flex-1 lg:pl-72 flex flex-col min-w-0 transition-all duration-300",children:[t.jsx(Uv,{onMenuClick:()=>m(!0)}),t.jsx("main",{className:"flex-1",children:l})]})]})}function yb(){return t.jsx(jb,{children:t.jsxs(og,{children:[t.jsx(te,{path:"/",component:Lv}),t.jsx(te,{path:"/historia",component:_v}),t.jsx(te,{path:"/instalacao",component:Fv}),t.jsx(te,{path:"/primeiros-passos",component:Qv}),t.jsx(te,{path:"/dnf",component:Yv}),t.jsx(te,{path:"/flatpak",component:Xv}),t.jsx(te,{path:"/gnome",component:Zv}),t.jsx(te,{path:"/terminal",component:Kv}),t.jsx(te,{path:"/arquivos",component:Pv}),t.jsx(te,{path:"/navegacao",component:Iv}),t.jsx(te,{path:"/manipulacao-arquivos",component:Jv}),t.jsx(te,{path:"/visualizacao",component:$v}),t.jsx(te,{path:"/usuarios",component:Wv}),t.jsx(te,{path:"/permissoes",component:eb}),t.jsx(te,{path:"/processos",component:ab}),t.jsx(te,{path:"/servicos",component:tb}),t.jsx(te,{path:"/rede",component:sb}),t.jsx(te,{path:"/ssh",component:ob}),t.jsx(te,{path:"/firewall",component:ib}),t.jsx(te,{path:"/btrfs",component:rb}),t.jsx(te,{path:"/rpm",component:lb}),t.jsx(te,{path:"/atualizacao",component:nb}),t.jsx(te,{path:"/desenvolvimento",component:cb}),t.jsx(te,{path:"/containers",component:db}),t.jsx(te,{path:"/pipes",component:ub}),t.jsx(te,{path:"/shell-scripting",component:mb}),t.jsx(te,{path:"/seguranca",component:hb}),t.jsx(te,{path:"/troubleshooting",component:fb}),t.jsx(te,{path:"/flags",component:pb}),t.jsx(te,{path:"/dicas",component:xb}),t.jsx(te,{path:"/referencias",component:gb}),t.jsx(te,{component:vb})]})})}function Sb(){return t.jsx(tg,{attribute:"class",defaultTheme:"dark",enableSystem:!1,children:t.jsx(Fg,{client:bb,children:t.jsx(sg,{hook:ac,children:t.jsx(yb,{})})})})}ug.createRoot(document.getElementById("root")).render(t.jsx(Sb,{}));
