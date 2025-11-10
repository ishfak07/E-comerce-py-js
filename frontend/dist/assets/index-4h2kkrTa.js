var Kx=Object.defineProperty;var Xx=(e,t,n)=>t in e?Kx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>Xx(e,typeof t!="symbol"?t+"":t,n);function Qx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Up={exports:{}},So={},$p={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.element"),Gx=Symbol.for("react.portal"),Zx=Symbol.for("react.fragment"),Jx=Symbol.for("react.strict_mode"),e1=Symbol.for("react.profiler"),t1=Symbol.for("react.provider"),n1=Symbol.for("react.context"),r1=Symbol.for("react.forward_ref"),i1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),a1=Symbol.for("react.lazy"),Ru=Symbol.iterator;function o1(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var qp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Yp={};function ai(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||qp}ai.prototype.isReactComponent={};ai.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kp(){}Kp.prototype=ai.prototype;function fd(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||qp}var pd=fd.prototype=new Kp;pd.constructor=fd;Vp(pd,ai.prototype);pd.isPureReactComponent=!0;var Mu=Array.isArray,Xp=Object.prototype.hasOwnProperty,md={current:null},Qp={key:!0,ref:!0,__self:!0,__source:!0};function Gp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Xp.call(t,r)&&!Qp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ss,type:e,key:s,ref:o,props:i,_owner:md.current}}function l1(e,t){return{$$typeof:Ss,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ss}function c1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tu=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?c1(""+e.key):t.toString(36)}function xa(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ss:case Gx:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+el(o,0):r,Mu(i)?(n="",e!=null&&(n=e.replace(Tu,"$&/")+"/"),xa(i,t,n,"",function(d){return d})):i!=null&&(gd(i)&&(i=l1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Mu(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+el(s,l);o+=xa(s,t,n,c,i)}else if(c=o1(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+el(s,l++),o+=xa(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ds(e,t,n){if(e==null)return e;var r=[],i=0;return xa(e,r,"","",function(s){return t.call(n,s,i++)}),r}function d1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},va={transition:null},u1={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:va,ReactCurrentOwner:md};function Zp(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Ds,forEach:function(e,t,n){Ds(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ds(e,function(){t++}),t},toArray:function(e){return Ds(e,function(t){return t})||[]},only:function(e){if(!gd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=ai;J.Fragment=Zx;J.Profiler=e1;J.PureComponent=fd;J.StrictMode=Jx;J.Suspense=i1;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u1;J.act=Zp;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=md.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Xp.call(t,c)&&!Qp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ss,type:e.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(e){return e={$$typeof:n1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t1,_context:e},e.Consumer=e};J.createElement=Gp;J.createFactory=function(e){var t=Gp.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:r1,render:e}};J.isValidElement=gd;J.lazy=function(e){return{$$typeof:a1,_payload:{_status:-1,_result:e},_init:d1}};J.memo=function(e,t){return{$$typeof:s1,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=va.transition;va.transition={};try{e()}finally{va.transition=t}};J.unstable_act=Zp;J.useCallback=function(e,t){return Ze.current.useCallback(e,t)};J.useContext=function(e){return Ze.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ze.current.useEffect(e,t)};J.useId=function(){return Ze.current.useId()};J.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ze.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};J.useRef=function(e){return Ze.current.useRef(e)};J.useState=function(e){return Ze.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Ze.current.useTransition()};J.version="18.3.1";$p.exports=J;var w=$p.exports;const Jp=Wp(w),h1=Qx({__proto__:null,default:Jp},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f1=w,p1=Symbol.for("react.element"),m1=Symbol.for("react.fragment"),g1=Object.prototype.hasOwnProperty,x1=f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v1={key:!0,ref:!0,__self:!0,__source:!0};function em(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)g1.call(t,r)&&!v1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:p1,type:e,key:s,ref:o,props:i,_owner:x1.current}}So.Fragment=m1;So.jsx=em;So.jsxs=em;Up.exports=So;var a=Up.exports,Ul={},tm={exports:{}},pt={},nm={exports:{}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,C){var L=P.length;P.push(C);e:for(;0<L;){var K=L-1>>>1,X=P[K];if(0<i(X,C))P[K]=C,P[L]=X,L=K;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var C=P[0],L=P.pop();if(L!==C){P[0]=L;e:for(var K=0,X=P.length,ve=X>>>1;K<ve;){var ce=2*(K+1)-1,Ce=P[ce],Se=ce+1,wr=P[Se];if(0>i(Ce,L))Se<X&&0>i(wr,Ce)?(P[K]=wr,P[Se]=L,K=Se):(P[K]=Ce,P[ce]=L,K=ce);else if(Se<X&&0>i(wr,L))P[K]=wr,P[Se]=L,K=Se;else break e}}return C}function i(P,C){var L=P.sortIndex-C.sortIndex;return L!==0?L:P.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,f=null,h=3,m=!1,p=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(P){for(var C=n(d);C!==null;){if(C.callback===null)r(d);else if(C.startTime<=P)r(d),C.sortIndex=C.expirationTime,t(c,C);else break;C=n(d)}}function k(P){if(v=!1,b(P),!p)if(n(c)!==null)p=!0,A(j);else{var C=n(d);C!==null&&$(k,C.startTime-P)}}function j(P,C){p=!1,v&&(v=!1,x(_),_=-1),m=!0;var L=h;try{for(b(C),f=n(c);f!==null&&(!(f.expirationTime>C)||P&&!I());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var X=K(f.expirationTime<=C);C=e.unstable_now(),typeof X=="function"?f.callback=X:f===n(c)&&r(c),b(C)}else r(c);f=n(c)}if(f!==null)var ve=!0;else{var ce=n(d);ce!==null&&$(k,ce.startTime-C),ve=!1}return ve}finally{f=null,h=L,m=!1}}var S=!1,N=null,_=-1,z=5,T=-1;function I(){return!(e.unstable_now()-T<z)}function D(){if(N!==null){var P=e.unstable_now();T=P;var C=!0;try{C=N(!0,P)}finally{C?B():(S=!1,N=null)}}else S=!1}var B;if(typeof g=="function")B=function(){g(D)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,M=Y.port2;Y.port1.onmessage=D,B=function(){M.postMessage(null)}}else B=function(){y(D,0)};function A(P){N=P,S||(S=!0,B())}function $(P,C){_=y(function(){P(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){p||m||(p=!0,A(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var C=3;break;default:C=h}var L=h;h=C;try{return P()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,C){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=h;h=P;try{return C()}finally{h=L}},e.unstable_scheduleCallback=function(P,C,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,P){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=L+X,P={id:u++,callback:C,priorityLevel:P,startTime:L,expirationTime:X,sortIndex:-1},L>K?(P.sortIndex=L,t(d,P),n(c)===null&&P===n(d)&&(v?(x(_),_=-1):v=!0,$(k,L-K))):(P.sortIndex=X,t(c,P),p||m||(p=!0,A(j))),P},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(P){var C=h;return function(){var L=h;h=C;try{return P.apply(this,arguments)}finally{h=L}}}})(rm);nm.exports=rm;var y1=nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=w,ft=y1;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var im=new Set,Zi={};function vr(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Zi[e]=t,e=0;e<t.length;e++)im.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,w1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zu={},Au={};function j1(e){return $l.call(Au,e)?!0:$l.call(zu,e)?!1:w1.test(e)?Au[e]=!0:(zu[e]=!0,!1)}function k1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S1(e,t,n,r){if(t===null||typeof t>"u"||k1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xd,vd);He[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xd,vd);He[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xd,vd);He[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function yd(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S1(t,n,i,r)&&(n=null),r||i===null?j1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),am=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),Ou=Symbol.iterator;function mi(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,tl;function Ri(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ri(e):""}function _1(e){switch(e.tag){case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case Nr:return"Portal";case ql:return"Profiler";case bd:return"StrictMode";case Vl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case am:return(e.displayName||"Context")+".Consumer";case sm:return(e._context.displayName||"Context")+".Provider";case wd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jd:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function N1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C1(e){var t=lm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Is(e){e._valueTracker||(e._valueTracker=C1(e))}function cm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dm(e,t){t=t.checked,t!=null&&yd(e,"checked",t,!1)}function Ql(e,t){dm(e,t);var n=Bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,Bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Du(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mi=Array.isArray;function Fr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Mi(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bn(n)}}function um(e,t){var n=Bn(t.value),r=Bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,fm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P1=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){P1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function pm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function mm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var E1=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(E1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function kd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rc=null,Ir=null,Br=null;function Bu(e){if(e=Cs(e)){if(typeof rc!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Eo(t),rc(e.stateNode,e.type,t))}}function gm(e){Ir?Br?Br.push(e):Br=[e]:Ir=e}function xm(){if(Ir){var e=Ir,t=Br;if(Br=Ir=null,Bu(e),t)for(e=0;e<t.length;e++)Bu(t[e])}}function vm(e,t){return e(t)}function ym(){}var il=!1;function bm(e,t,n){if(il)return e(t,n);il=!0;try{return vm(e,t,n)}finally{il=!1,(Ir!==null||Br!==null)&&(ym(),xm())}}function es(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var ic=!1;if(ln)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){ic=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{ic=!1}function R1(e,t,n,r,i,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Bi=!1,Wa=null,Ua=!1,sc=null,M1={onError:function(e){Bi=!0,Wa=e}};function T1(e,t,n,r,i,s,o,l,c){Bi=!1,Wa=null,R1.apply(M1,arguments)}function z1(e,t,n,r,i,s,o,l,c){if(T1.apply(this,arguments),Bi){if(Bi){var d=Wa;Bi=!1,Wa=null}else throw Error(O(198));Ua||(Ua=!0,sc=d)}}function yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hu(e){if(yr(e)!==e)throw Error(O(188))}function A1(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hu(i),e;if(s===r)return Hu(i),t;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function jm(e){return e=A1(e),e!==null?km(e):null}function km(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=km(e);if(t!==null)return t;e=e.sibling}return null}var Sm=ft.unstable_scheduleCallback,Wu=ft.unstable_cancelCallback,O1=ft.unstable_shouldYield,L1=ft.unstable_requestPaint,Pe=ft.unstable_now,D1=ft.unstable_getCurrentPriorityLevel,Sd=ft.unstable_ImmediatePriority,_m=ft.unstable_UserBlockingPriority,$a=ft.unstable_NormalPriority,F1=ft.unstable_LowPriority,Nm=ft.unstable_IdlePriority,_o=null,Yt=null;function I1(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:W1,B1=Math.log,H1=Math.LN2;function W1(e){return e>>>=0,e===0?32:31-(B1(e)/H1|0)|0}var Hs=64,Ws=4194304;function Ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ti(l):(s&=o,s!==0&&(r=Ti(s)))}else o=n&~i,o!==0?r=Ti(o):s!==0&&(r=Ti(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function U1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Tt(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=U1(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function ac(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cm(){var e=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _s(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function q1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function _d(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Pm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Em,Nd,Rm,Mm,Tm,oc=!1,Us=[],Rn=null,Mn=null,Tn=null,ts=new Map,ns=new Map,wn=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":ts.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(t.pointerId)}}function xi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Cs(t),t!==null&&Nd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y1(e,t,n,r,i){switch(t){case"focusin":return Rn=xi(Rn,e,t,n,r,i),!0;case"dragenter":return Mn=xi(Mn,e,t,n,r,i),!0;case"mouseover":return Tn=xi(Tn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ts.set(s,xi(ts.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ns.set(s,xi(ns.get(s)||null,e,t,n,r,i)),!0}return!1}function zm(e){var t=tr(e.target);if(t!==null){var n=yr(t);if(n!==null){if(t=n.tag,t===13){if(t=wm(n),t!==null){e.blockedOn=t,Tm(e.priority,function(){Rm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nc=r,n.target.dispatchEvent(r),nc=null}else return t=Cs(n),t!==null&&Nd(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){ya(e)&&n.delete(t)}function K1(){oc=!1,Rn!==null&&ya(Rn)&&(Rn=null),Mn!==null&&ya(Mn)&&(Mn=null),Tn!==null&&ya(Tn)&&(Tn=null),ts.forEach($u),ns.forEach($u)}function vi(e,t){e.blockedOn===t&&(e.blockedOn=null,oc||(oc=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,K1)))}function rs(e){function t(i){return vi(i,e)}if(0<Us.length){vi(Us[0],e);for(var n=1;n<Us.length;n++){var r=Us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rn!==null&&vi(Rn,e),Mn!==null&&vi(Mn,e),Tn!==null&&vi(Tn,e),ts.forEach(t),ns.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)zm(n),n.blockedOn===null&&wn.shift()}var Hr=hn.ReactCurrentBatchConfig,Va=!0;function X1(e,t,n,r){var i=oe,s=Hr.transition;Hr.transition=null;try{oe=1,Cd(e,t,n,r)}finally{oe=i,Hr.transition=s}}function Q1(e,t,n,r){var i=oe,s=Hr.transition;Hr.transition=null;try{oe=4,Cd(e,t,n,r)}finally{oe=i,Hr.transition=s}}function Cd(e,t,n,r){if(Va){var i=lc(e,t,n,r);if(i===null)ml(e,t,r,Ya,n),Uu(e,r);else if(Y1(i,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<V1.indexOf(e)){for(;i!==null;){var s=Cs(i);if(s!==null&&Em(s),s=lc(e,t,n,r),s===null&&ml(e,t,r,Ya,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var Ya=null;function lc(e,t,n,r){if(Ya=null,e=kd(r),e=tr(e),e!==null)if(t=yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ya=e,null}function Am(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D1()){case Sd:return 1;case _m:return 4;case $a:case F1:return 16;case Nm:return 536870912;default:return 16}default:return 16}}var kn=null,Pd=null,ba=null;function Om(){if(ba)return ba;var e,t=Pd,n=t.length,r,i="value"in kn?kn.value:kn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ba=i.slice(e,1<r?1-r:void 0)}function wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $s(){return!0}function qu(){return!1}function mt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$s:qu,this.isPropagationStopped=qu,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=mt(oi),Ns=ke({},oi,{view:0,detail:0}),G1=mt(Ns),al,ol,yi,No=ke({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(al=e.screenX-yi.screenX,ol=e.screenY-yi.screenY):ol=al=0,yi=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Vu=mt(No),Z1=ke({},No,{dataTransfer:0}),J1=mt(Z1),ev=ke({},Ns,{relatedTarget:0}),ll=mt(ev),tv=ke({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=mt(tv),rv=ke({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iv=mt(rv),sv=ke({},oi,{data:0}),Yu=mt(sv),av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lv[e])?!!t[e]:!1}function Rd(){return cv}var dv=ke({},Ns,{key:function(e){if(e.key){var t=av[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ov[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uv=mt(dv),hv=ke({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=mt(hv),fv=ke({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),pv=mt(fv),mv=ke({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=mt(mv),xv=ke({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vv=mt(xv),yv=[9,13,27,32],Md=ln&&"CompositionEvent"in window,Hi=null;ln&&"documentMode"in document&&(Hi=document.documentMode);var bv=ln&&"TextEvent"in window&&!Hi,Lm=ln&&(!Md||Hi&&8<Hi&&11>=Hi),Xu=" ",Qu=!1;function Dm(e,t){switch(e){case"keyup":return yv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function wv(e,t){switch(e){case"compositionend":return Fm(t);case"keypress":return t.which!==32?null:(Qu=!0,Xu);case"textInput":return e=t.data,e===Xu&&Qu?null:e;default:return null}}function jv(e,t){if(Pr)return e==="compositionend"||!Md&&Dm(e,t)?(e=Om(),ba=Pd=kn=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lm&&t.locale!=="ko"?null:t.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kv[e.type]:t==="textarea"}function Im(e,t,n,r){gm(r),t=Ka(t,"onChange"),0<t.length&&(n=new Ed("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wi=null,is=null;function Sv(e){Qm(e,0)}function Co(e){var t=Mr(e);if(cm(t))return e}function _v(e,t){if(e==="change")return t}var Bm=!1;if(ln){var cl;if(ln){var dl="oninput"in document;if(!dl){var Zu=document.createElement("div");Zu.setAttribute("oninput","return;"),dl=typeof Zu.oninput=="function"}cl=dl}else cl=!1;Bm=cl&&(!document.documentMode||9<document.documentMode)}function Ju(){Wi&&(Wi.detachEvent("onpropertychange",Hm),is=Wi=null)}function Hm(e){if(e.propertyName==="value"&&Co(is)){var t=[];Im(t,is,e,kd(e)),bm(Sv,t)}}function Nv(e,t,n){e==="focusin"?(Ju(),Wi=t,is=n,Wi.attachEvent("onpropertychange",Hm)):e==="focusout"&&Ju()}function Cv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(is)}function Pv(e,t){if(e==="click")return Co(t)}function Ev(e,t){if(e==="input"||e==="change")return Co(t)}function Rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Rv;function ss(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$l.call(t,i)||!At(e[i],t[i]))return!1}return!0}function eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function th(e,t){var n=eh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eh(n)}}function Wm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Um(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function Td(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mv(e){var t=Um(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wm(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=th(n,s);var o=th(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tv=ln&&"documentMode"in document&&11>=document.documentMode,Er=null,cc=null,Ui=null,dc=!1;function nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||Er==null||Er!==Ha(r)||(r=Er,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&ss(Ui,r)||(Ui=r,r=Ka(cc,"onSelect"),0<r.length&&(t=new Ed("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function qs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionend:qs("Transition","TransitionEnd")},ul={},$m={};ln&&($m=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Po(e){if(ul[e])return ul[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $m)return ul[e]=t[n];return e}var qm=Po("animationend"),Vm=Po("animationiteration"),Ym=Po("animationstart"),Km=Po("transitionend"),Xm=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){Xm.set(e,t),vr(t,[e])}for(var hl=0;hl<rh.length;hl++){var fl=rh[hl],zv=fl.toLowerCase(),Av=fl[0].toUpperCase()+fl.slice(1);Un(zv,"on"+Av)}Un(qm,"onAnimationEnd");Un(Vm,"onAnimationIteration");Un(Ym,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Km,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function ih(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,z1(r,t,void 0,e),e.currentTarget=null}function Qm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;ih(i,l,d),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;ih(i,l,d),s=c}}}if(Ua)throw e=sc,Ua=!1,sc=null,e}function pe(e,t){var n=t[mc];n===void 0&&(n=t[mc]=new Set);var r=e+"__bubble";n.has(r)||(Gm(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Gm(n,e,r,t)}var Vs="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Vs]){e[Vs]=!0,im.forEach(function(n){n!=="selectionchange"&&(Ov.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vs]||(t[Vs]=!0,pl("selectionchange",!1,t))}}function Gm(e,t,n,r){switch(Am(t)){case 1:var i=X1;break;case 4:i=Q1;break;default:i=Cd}n=i.bind(null,t,n,e),i=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=tr(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}bm(function(){var d=s,u=kd(n),f=[];e:{var h=Xm.get(e);if(h!==void 0){var m=Ed,p=e;switch(e){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":m=uv;break;case"focusin":p="focus",m=ll;break;case"focusout":p="blur",m=ll;break;case"beforeblur":case"afterblur":m=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=J1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=pv;break;case qm:case Vm:case Ym:m=nv;break;case Km:m=gv;break;case"scroll":m=G1;break;case"wheel":m=vv;break;case"copy":case"cut":case"paste":m=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ku}var v=(t&4)!==0,y=!v&&e==="scroll",x=v?h!==null?h+"Capture":null:h;v=[];for(var g=d,b;g!==null;){b=g;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,x!==null&&(k=es(g,x),k!=null&&v.push(os(g,k,b)))),y)break;g=g.return}0<v.length&&(h=new m(h,p,null,n,u),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==nc&&(p=n.relatedTarget||n.fromElement)&&(tr(p)||p[cn]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(p=n.relatedTarget||n.toElement,m=d,p=p?tr(p):null,p!==null&&(y=yr(p),p!==y||p.tag!==5&&p.tag!==6)&&(p=null)):(m=null,p=d),m!==p)){if(v=Vu,k="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ku,k="onPointerLeave",x="onPointerEnter",g="pointer"),y=m==null?h:Mr(m),b=p==null?h:Mr(p),h=new v(k,g+"leave",m,n,u),h.target=y,h.relatedTarget=b,k=null,tr(u)===d&&(v=new v(x,g+"enter",p,n,u),v.target=b,v.relatedTarget=y,k=v),y=k,m&&p)t:{for(v=m,x=p,g=0,b=v;b;b=jr(b))g++;for(b=0,k=x;k;k=jr(k))b++;for(;0<g-b;)v=jr(v),g--;for(;0<b-g;)x=jr(x),b--;for(;g--;){if(v===x||x!==null&&v===x.alternate)break t;v=jr(v),x=jr(x)}v=null}else v=null;m!==null&&sh(f,h,m,v,!1),p!==null&&y!==null&&sh(f,y,p,v,!0)}}e:{if(h=d?Mr(d):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var j=_v;else if(Gu(h))if(Bm)j=Ev;else{j=Cv;var S=Nv}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Pv);if(j&&(j=j(e,d))){Im(f,j,n,u);break e}S&&S(e,h,d),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Gl(h,"number",h.value)}switch(S=d?Mr(d):window,e){case"focusin":(Gu(S)||S.contentEditable==="true")&&(Er=S,cc=d,Ui=null);break;case"focusout":Ui=cc=Er=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,nh(f,n,u);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":nh(f,n,u)}var N;if(Md)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Pr?Dm(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Lm&&n.locale!=="ko"&&(Pr||_!=="onCompositionStart"?_==="onCompositionEnd"&&Pr&&(N=Om()):(kn=u,Pd="value"in kn?kn.value:kn.textContent,Pr=!0)),S=Ka(d,_),0<S.length&&(_=new Yu(_,e,null,n,u),f.push({event:_,listeners:S}),N?_.data=N:(N=Fm(n),N!==null&&(_.data=N)))),(N=bv?wv(e,n):jv(e,n))&&(d=Ka(d,"onBeforeInput"),0<d.length&&(u=new Yu("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=N))}Qm(f,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=es(e,n),s!=null&&r.unshift(os(e,s,i)),s=es(e,t),s!=null&&r.push(os(e,s,i))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=es(n,s),c!=null&&o.unshift(os(n,c,l))):i||(c=es(n,s),c!=null&&o.push(os(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Lv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(Lv,`
`).replace(Dv,"")}function Ys(e,t,n){if(t=ah(t),ah(e)!==t&&n)throw Error(O(425))}function Xa(){}var uc=null,hc=null;function fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,Fv=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(e){return oh.resolve(null).then(e).catch(Bv)}:pc;function Bv(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),rs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rs(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var li=Math.random().toString(36).slice(2),Vt="__reactFiber$"+li,ls="__reactProps$"+li,cn="__reactContainer$"+li,mc="__reactEvents$"+li,Hv="__reactListeners$"+li,Wv="__reactHandles$"+li;function tr(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lh(e);e!==null;){if(n=e[Vt])return n;e=lh(e)}return t}e=n,n=e.parentNode}return null}function Cs(e){return e=e[Vt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Eo(e){return e[ls]||null}var gc=[],Tr=-1;function $n(e){return{current:e}}function ge(e){0>Tr||(e.current=gc[Tr],gc[Tr]=null,Tr--)}function he(e,t){Tr++,gc[Tr]=e.current,e.current=t}var Hn={},Xe=$n(Hn),st=$n(!1),ur=Hn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function Qa(){ge(st),ge(Xe)}function ch(e,t,n){if(Xe.current!==Hn)throw Error(O(168));he(Xe,t),he(st,n)}function Zm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,N1(e)||"Unknown",i));return ke({},n,r)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,ur=Xe.current,he(Xe,e),he(st,st.current),!0}function dh(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Zm(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,ge(st),ge(Xe),he(Xe,e)):ge(st),he(st,n)}var nn=null,Ro=!1,xl=!1;function Jm(e){nn===null?nn=[e]:nn.push(e)}function Uv(e){Ro=!0,Jm(e)}function qn(){if(!xl&&nn!==null){xl=!0;var e=0,t=oe;try{var n=nn;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,Ro=!1}catch(i){throw nn!==null&&(nn=nn.slice(e+1)),Sm(Sd,qn),i}finally{oe=t,xl=!1}}return null}var zr=[],Ar=0,Za=null,Ja=0,xt=[],vt=0,hr=null,sn=1,an="";function Qn(e,t){zr[Ar++]=Ja,zr[Ar++]=Za,Za=e,Ja=t}function eg(e,t,n){xt[vt++]=sn,xt[vt++]=an,xt[vt++]=hr,hr=e;var r=sn;e=an;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var s=32-Tt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-Tt(t)+i|n<<i|r,an=s+e}else sn=1<<s|n<<i|r,an=e}function zd(e){e.return!==null&&(Qn(e,1),eg(e,1,0))}function Ad(e){for(;e===Za;)Za=zr[--Ar],zr[Ar]=null,Ja=zr[--Ar],zr[Ar]=null;for(;e===hr;)hr=xt[--vt],xt[vt]=null,an=xt[--vt],xt[vt]=null,sn=xt[--vt],xt[vt]=null}var ht=null,ut=null,ye=!1,Mt=null;function tg(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ut=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:sn,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ut=null,!0):!1;default:return!1}}function xc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vc(e){if(ye){var t=ut;if(t){var n=t;if(!uh(e,t)){if(xc(e))throw Error(O(418));t=zn(n.nextSibling);var r=ht;t&&uh(e,t)?tg(r,n):(e.flags=e.flags&-4097|2,ye=!1,ht=e)}}else{if(xc(e))throw Error(O(418));e.flags=e.flags&-4097|2,ye=!1,ht=e}}}function hh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ks(e){if(e!==ht)return!1;if(!ye)return hh(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fc(e.type,e.memoizedProps)),t&&(t=ut)){if(xc(e))throw ng(),Error(O(418));for(;t;)tg(e,t),t=zn(t.nextSibling)}if(hh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ht?zn(e.stateNode.nextSibling):null;return!0}function ng(){for(var e=ut;e;)e=zn(e.nextSibling)}function Xr(){ut=ht=null,ye=!1}function Od(e){Mt===null?Mt=[e]:Mt.push(e)}var $v=hn.ReactCurrentBatchConfig;function bi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Xs(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fh(e){var t=e._init;return t(e._payload)}function rg(e){function t(x,g){if(e){var b=x.deletions;b===null?(x.deletions=[g],x.flags|=16):b.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function i(x,g){return x=Dn(x,g),x.index=0,x.sibling=null,x}function s(x,g,b){return x.index=b,e?(b=x.alternate,b!==null?(b=b.index,b<g?(x.flags|=2,g):b):(x.flags|=2,g)):(x.flags|=1048576,g)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,g,b,k){return g===null||g.tag!==6?(g=Sl(b,x.mode,k),g.return=x,g):(g=i(g,b),g.return=x,g)}function c(x,g,b,k){var j=b.type;return j===Cr?u(x,g,b.props.children,k,b.key):g!==null&&(g.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yn&&fh(j)===g.type)?(k=i(g,b.props),k.ref=bi(x,g,b),k.return=x,k):(k=Pa(b.type,b.key,b.props,null,x.mode,k),k.ref=bi(x,g,b),k.return=x,k)}function d(x,g,b,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=_l(b,x.mode,k),g.return=x,g):(g=i(g,b.children||[]),g.return=x,g)}function u(x,g,b,k,j){return g===null||g.tag!==7?(g=lr(b,x.mode,k,j),g.return=x,g):(g=i(g,b),g.return=x,g)}function f(x,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Sl(""+g,x.mode,b),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fs:return b=Pa(g.type,g.key,g.props,null,x.mode,b),b.ref=bi(x,null,g),b.return=x,b;case Nr:return g=_l(g,x.mode,b),g.return=x,g;case yn:var k=g._init;return f(x,k(g._payload),b)}if(Mi(g)||mi(g))return g=lr(g,x.mode,b,null),g.return=x,g;Xs(x,g)}return null}function h(x,g,b,k){var j=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return j!==null?null:l(x,g,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fs:return b.key===j?c(x,g,b,k):null;case Nr:return b.key===j?d(x,g,b,k):null;case yn:return j=b._init,h(x,g,j(b._payload),k)}if(Mi(b)||mi(b))return j!==null?null:u(x,g,b,k,null);Xs(x,b)}return null}function m(x,g,b,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(b)||null,l(g,x,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Fs:return x=x.get(k.key===null?b:k.key)||null,c(g,x,k,j);case Nr:return x=x.get(k.key===null?b:k.key)||null,d(g,x,k,j);case yn:var S=k._init;return m(x,g,b,S(k._payload),j)}if(Mi(k)||mi(k))return x=x.get(b)||null,u(g,x,k,j,null);Xs(g,k)}return null}function p(x,g,b,k){for(var j=null,S=null,N=g,_=g=0,z=null;N!==null&&_<b.length;_++){N.index>_?(z=N,N=null):z=N.sibling;var T=h(x,N,b[_],k);if(T===null){N===null&&(N=z);break}e&&N&&T.alternate===null&&t(x,N),g=s(T,g,_),S===null?j=T:S.sibling=T,S=T,N=z}if(_===b.length)return n(x,N),ye&&Qn(x,_),j;if(N===null){for(;_<b.length;_++)N=f(x,b[_],k),N!==null&&(g=s(N,g,_),S===null?j=N:S.sibling=N,S=N);return ye&&Qn(x,_),j}for(N=r(x,N);_<b.length;_++)z=m(N,x,_,b[_],k),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?_:z.key),g=s(z,g,_),S===null?j=z:S.sibling=z,S=z);return e&&N.forEach(function(I){return t(x,I)}),ye&&Qn(x,_),j}function v(x,g,b,k){var j=mi(b);if(typeof j!="function")throw Error(O(150));if(b=j.call(b),b==null)throw Error(O(151));for(var S=j=null,N=g,_=g=0,z=null,T=b.next();N!==null&&!T.done;_++,T=b.next()){N.index>_?(z=N,N=null):z=N.sibling;var I=h(x,N,T.value,k);if(I===null){N===null&&(N=z);break}e&&N&&I.alternate===null&&t(x,N),g=s(I,g,_),S===null?j=I:S.sibling=I,S=I,N=z}if(T.done)return n(x,N),ye&&Qn(x,_),j;if(N===null){for(;!T.done;_++,T=b.next())T=f(x,T.value,k),T!==null&&(g=s(T,g,_),S===null?j=T:S.sibling=T,S=T);return ye&&Qn(x,_),j}for(N=r(x,N);!T.done;_++,T=b.next())T=m(N,x,_,T.value,k),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?_:T.key),g=s(T,g,_),S===null?j=T:S.sibling=T,S=T);return e&&N.forEach(function(D){return t(x,D)}),ye&&Qn(x,_),j}function y(x,g,b,k){if(typeof b=="object"&&b!==null&&b.type===Cr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Fs:e:{for(var j=b.key,S=g;S!==null;){if(S.key===j){if(j=b.type,j===Cr){if(S.tag===7){n(x,S.sibling),g=i(S,b.props.children),g.return=x,x=g;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yn&&fh(j)===S.type){n(x,S.sibling),g=i(S,b.props),g.ref=bi(x,S,b),g.return=x,x=g;break e}n(x,S);break}else t(x,S);S=S.sibling}b.type===Cr?(g=lr(b.props.children,x.mode,k,b.key),g.return=x,x=g):(k=Pa(b.type,b.key,b.props,null,x.mode,k),k.ref=bi(x,g,b),k.return=x,x=k)}return o(x);case Nr:e:{for(S=b.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(x,g.sibling),g=i(g,b.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=_l(b,x.mode,k),g.return=x,x=g}return o(x);case yn:return S=b._init,y(x,g,S(b._payload),k)}if(Mi(b))return p(x,g,b,k);if(mi(b))return v(x,g,b,k);Xs(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(x,g.sibling),g=i(g,b),g.return=x,x=g):(n(x,g),g=Sl(b,x.mode,k),g.return=x,x=g),o(x)):n(x,g)}return y}var Qr=rg(!0),ig=rg(!1),eo=$n(null),to=null,Or=null,Ld=null;function Dd(){Ld=Or=to=null}function Fd(e){var t=eo.current;ge(eo),e._currentValue=t}function yc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wr(e,t){to=e,Ld=Or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(Ld!==e)if(e={context:e,memoizedValue:t,next:null},Or===null){if(to===null)throw Error(O(308));Or=e,to.dependencies={lanes:0,firstContext:e}}else Or=Or.next=e;return t}var nr=null;function Id(e){nr===null?nr=[e]:nr.push(e)}function sg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Id(t)):(n.next=i.next,i.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bn=!1;function Bd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ag(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dn(e,n)}return i=r.interleaved,i===null?(t.next=t,Id(r)):(t.next=i.next,i.next=t),r.interleaved=t,dn(e,n)}function ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_d(e,n)}}function ph(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var i=e.updateQueue;bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,u=d=c=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,v=l;switch(h=t,m=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){f=p.call(m,f,h);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,h=typeof p=="function"?p.call(m,f,h):p,h==null)break e;f=ke({},f,h);break e;case 2:bn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=m,c=f):u=u.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);pr|=o,e.lanes=o,e.memoizedState=f}}function mh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var Ps={},Kt=$n(Ps),cs=$n(Ps),ds=$n(Ps);function rr(e){if(e===Ps)throw Error(O(174));return e}function Hd(e,t){switch(he(ds,t),he(cs,e),he(Kt,Ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jl(t,e)}ge(Kt),he(Kt,t)}function Gr(){ge(Kt),ge(cs),ge(ds)}function og(e){rr(ds.current);var t=rr(Kt.current),n=Jl(t,e.type);t!==n&&(he(cs,e),he(Kt,n))}function Wd(e){cs.current===e&&(ge(Kt),ge(cs))}var be=$n(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Ud(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var ka=hn.ReactCurrentDispatcher,yl=hn.ReactCurrentBatchConfig,fr=0,we=null,Me=null,Oe=null,io=!1,$i=!1,us=0,qv=0;function We(){throw Error(O(321))}function $d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function qd(e,t,n,r,i,s){if(fr=s,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?Xv:Qv,e=n(r,i),$i){s=0;do{if($i=!1,us=0,25<=s)throw Error(O(301));s+=1,Oe=Me=null,t.updateQueue=null,ka.current=Gv,e=n(r,i)}while($i)}if(ka.current=so,t=Me!==null&&Me.next!==null,fr=0,Oe=Me=we=null,io=!1,t)throw Error(O(300));return e}function Vd(){var e=us!==0;return us=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?we.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function kt(){if(Me===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Oe===null?we.memoizedState:Oe.next;if(t!==null)Oe=t,Me=e;else{if(e===null)throw Error(O(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Oe===null?we.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function hs(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=kt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,d=s;do{var u=d.lane;if((fr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,we.lanes|=u,pr|=u}d=d.next}while(d!==null&&d!==s);c===null?o=r:c.next=l,At(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,we.lanes|=s,pr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=kt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);At(s,t.memoizedState)||(it=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function lg(){}function cg(e,t){var n=we,r=kt(),i=t(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,Yd(hg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,fs(9,ug.bind(null,n,r,i,t),void 0,null),Le===null)throw Error(O(349));fr&30||dg(n,t,i)}return i}function dg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ug(e,t,n,r){t.value=n,t.getSnapshot=r,fg(t)&&pg(e)}function hg(e,t,n){return n(function(){fg(t)&&pg(e)})}function fg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function pg(e){var t=dn(e,1);t!==null&&zt(t,e,1,-1)}function gh(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t.queue=e,e=e.dispatch=Kv.bind(null,we,e),[t.memoizedState,e]}function fs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mg(){return kt().memoizedState}function Sa(e,t,n,r){var i=Ut();we.flags|=e,i.memoizedState=fs(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=kt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&$d(r,o.deps)){i.memoizedState=fs(t,n,s,r);return}}we.flags|=e,i.memoizedState=fs(1|t,n,s,r)}function xh(e,t){return Sa(8390656,8,e,t)}function Yd(e,t){return Mo(2048,8,e,t)}function gg(e,t){return Mo(4,2,e,t)}function xg(e,t){return Mo(4,4,e,t)}function vg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yg(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,vg.bind(null,t,e),n)}function Kd(){}function bg(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wg(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jg(e,t,n){return fr&21?(At(n,t)||(n=Cm(),we.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function Vv(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{oe=n,yl.transition=r}}function kg(){return kt().memoizedState}function Yv(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sg(e))_g(t,n);else if(n=sg(e,t,n,r),n!==null){var i=Ge();zt(n,e,r,i),Ng(n,t,r)}}function Kv(e,t,n){var r=Ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sg(e))_g(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,At(l,o)){var c=t.interleaved;c===null?(i.next=i,Id(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=sg(e,t,i,r),n!==null&&(i=Ge(),zt(n,e,r,i),Ng(n,t,r))}}function Sg(e){var t=e.alternate;return e===we||t!==null&&t===we}function _g(e,t){$i=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ng(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_d(e,n)}}var so={readContext:jt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Xv={readContext:jt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:xh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4194308,4,vg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sa(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yv.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:gh,useDebugValue:Kd,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=gh(!1),t=e[0];return e=Vv.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Ut();if(ye){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Le===null)throw Error(O(349));fr&30||dg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,xh(hg.bind(null,r,s,e),[e]),r.flags|=2048,fs(9,ug.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Le.identifierPrefix;if(ye){var n=an,r=sn;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qv={readContext:jt,useCallback:bg,useContext:jt,useEffect:Yd,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:xg,useMemo:wg,useReducer:bl,useRef:mg,useState:function(){return bl(hs)},useDebugValue:Kd,useDeferredValue:function(e){var t=kt();return jg(t,Me.memoizedState,e)},useTransition:function(){var e=bl(hs)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lg,useSyncExternalStore:cg,useId:kg,unstable_isNewReconciler:!1},Gv={readContext:jt,useCallback:bg,useContext:jt,useEffect:Yd,useImperativeHandle:yg,useInsertionEffect:gg,useLayoutEffect:xg,useMemo:wg,useReducer:wl,useRef:mg,useState:function(){return wl(hs)},useDebugValue:Kd,useDeferredValue:function(e){var t=kt();return Me===null?t.memoizedState=e:jg(t,Me.memoizedState,e)},useTransition:function(){var e=wl(hs)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lg,useSyncExternalStore:cg,useId:kg,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=Ln(e),s=on(r,i);s.payload=t,n!=null&&(s.callback=n),t=An(e,s,i),t!==null&&(zt(t,e,i,r),ja(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=Ln(e),s=on(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=An(e,s,i),t!==null&&(zt(t,e,i,r),ja(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=Ln(e),i=on(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(zt(t,e,r,n),ja(t,e,r))}};function vh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ss(n,r)||!ss(i,s):!0}function Cg(e,t,n){var r=!1,i=Hn,s=t.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=at(t)?ur:Xe.current,r=t.contextTypes,s=(r=r!=null)?Kr(e,i):Hn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=To,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function yh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function wc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=at(t)?ur:Xe.current,i.context=Kr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(bc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&To.enqueueReplaceState(i,i.state,null),no(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t){try{var n="",r=t;do n+=_1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function Pg(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Tc=r),jc(e,t)},n}function Eg(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jc(e,t),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function bh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hy.bind(null,e,t,n),t.then(e,e))}function wh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var Jv=hn.ReactCurrentOwner,it=!1;function Qe(e,t,n,r){t.child=e===null?ig(t,null,n,r):Qr(t,e.child,n,r)}function kh(e,t,n,r,i){n=n.render;var s=t.ref;return Wr(t,i),r=qd(e,t,n,r,s,i),n=Vd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(ye&&n&&zd(t),t.flags|=1,Qe(e,t,r,i),t.child)}function Sh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!nu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Rg(e,t,s,r,i)):(e=Pa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(o,r)&&e.ref===t.ref)return un(e,t,i)}return t.flags|=1,e=Dn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Rg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ss(s,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,un(e,t,i)}return kc(e,t,n,r,i)}function Mg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Dr,dt),dt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Dr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Dr,dt),dt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,he(Dr,dt),dt|=r;return Qe(e,t,i,n),t.child}function Tg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kc(e,t,n,r,i){var s=at(n)?ur:Xe.current;return s=Kr(t,s),Wr(t,i),n=qd(e,t,n,r,s,i),r=Vd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(ye&&r&&zd(t),t.flags|=1,Qe(e,t,n,i),t.child)}function _h(e,t,n,r,i){if(at(n)){var s=!0;Ga(t)}else s=!1;if(Wr(t,i),t.stateNode===null)_a(e,t),Cg(t,n,r),wc(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=jt(d):(d=at(n)?ur:Xe.current,d=Kr(t,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&yh(t,o,r,d),bn=!1;var h=t.memoizedState;o.state=h,no(t,r,o,i),c=t.memoizedState,l!==r||h!==c||st.current||bn?(typeof u=="function"&&(bc(t,n,u,r),c=t.memoizedState),(l=bn||vh(t,n,l,r,h,c,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ag(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Pt(t.type,l),o.props=d,f=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=jt(c):(c=at(n)?ur:Xe.current,c=Kr(t,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||h!==c)&&yh(t,o,r,c),bn=!1,h=t.memoizedState,o.state=h,no(t,r,o,i);var p=t.memoizedState;l!==f||h!==p||st.current||bn?(typeof m=="function"&&(bc(t,n,m,r),p=t.memoizedState),(d=bn||vh(t,n,d,r,h,p,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Sc(e,t,n,r,s,i)}function Sc(e,t,n,r,i,s){Tg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dh(t,n,!1),un(e,t,s);r=t.stateNode,Jv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Qr(t,e.child,null,s),t.child=Qr(t,null,l,s)):Qe(e,t,l,s),t.memoizedState=r.state,i&&dh(t,n,!0),t.child}function zg(e){var t=e.stateNode;t.pendingContext?ch(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ch(e,t.context,!1),Hd(e,t.containerInfo)}function Nh(e,t,n,r,i){return Xr(),Od(i),t.flags|=256,Qe(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function Nc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ag(e,t,n){var r=t.pendingProps,i=be.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(be,i&1),e===null)return vc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oo(o,r,0,null),e=lr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Nc(n),t.memoizedState=_c,e):Xd(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ey(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Dn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Dn(l,s):(s=lr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Nc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=_c,r}return s=e.child,e=s.sibling,r=Dn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xd(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qs(e,t,n,r){return r!==null&&Od(r),Qr(t,e.child,null,n),e=Xd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ey(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(O(422))),Qs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),s=lr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Qr(t,e.child,null,o),t.child.memoizedState=Nc(o),t.memoizedState=_c,s);if(!(t.mode&1))return Qs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(O(419)),r=jl(s,r,void 0),Qs(e,t,o,r)}if(l=(o&e.childLanes)!==0,it||l){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dn(e,i),zt(r,e,i,-1))}return tu(),r=jl(Error(O(421))),Qs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fy.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ut=zn(i.nextSibling),ht=t,ye=!0,Mt=null,e!==null&&(xt[vt++]=sn,xt[vt++]=an,xt[vt++]=hr,sn=e.id,an=e.overflow,hr=t),t=Xd(t,r.children),t.flags|=4096,t)}function Ch(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yc(e.return,t,n)}function kl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Og(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ch(e,n,t);else if(e.tag===19)Ch(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kl(t,!0,n,null,s);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _a(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ty(e,t,n){switch(t.tag){case 3:zg(t),Xr();break;case 5:og(t);break;case 1:at(t.type)&&Ga(t);break;case 4:Hd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(be,be.current&1),t.flags|=128,null):n&t.child.childLanes?Ag(e,t,n):(he(be,be.current&1),e=un(e,t,n),e!==null?e.sibling:null);he(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Og(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,Mg(e,t,n)}return un(e,t,n)}var Lg,Cc,Dg,Fg;Lg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cc=function(){};Dg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rr(Kt.current);var s=null;switch(n){case"input":i=Xl(e,i),r=Xl(e,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Zl(e,i),r=Zl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}ec(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Zi.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&pe("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Fg=function(e,t,n,r){n!==r&&(t.flags|=4)};function wi(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ny(e,t,n){var r=t.pendingProps;switch(Ad(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return at(t.type)&&Qa(),Ue(t),null;case 3:return r=t.stateNode,Gr(),ge(st),ge(Xe),Ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ks(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Oc(Mt),Mt=null))),Cc(e,t),Ue(t),null;case 5:Wd(t);var i=rr(ds.current);if(n=t.type,e!==null&&t.stateNode!=null)Dg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ue(t),null}if(e=rr(Kt.current),Ks(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Vt]=t,r[ls]=s,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<zi.length;i++)pe(zi[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Lu(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Fu(r,s),pe("invalid",r)}ec(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,e),i=["children",""+l]):Zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Is(r),Du(r,s,!0);break;case"textarea":Is(r),Iu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Vt]=t,e[ls]=r,Lg(e,t,!1,!1),t.stateNode=e;e:{switch(o=tc(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<zi.length;i++)pe(zi[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":Lu(e,r),i=Xl(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Fu(e,r),i=Zl(e,r),pe("invalid",e);break;default:i=r}ec(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?mm(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fm(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ji(e,c):typeof c=="number"&&Ji(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zi.hasOwnProperty(s)?c!=null&&s==="onScroll"&&pe("scroll",e):c!=null&&yd(e,s,c,o))}switch(n){case"input":Is(e),Du(e,r,!1);break;case"textarea":Is(e),Iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Fr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Fg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=rr(ds.current),rr(Kt.current),Ks(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(s=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Ys(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ge(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&ut!==null&&t.mode&1&&!(t.flags&128))ng(),Xr(),t.flags|=98560,s=!1;else if(s=Ks(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(O(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[Vt]=t}else Xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),s=!1}else Mt!==null&&(Oc(Mt),Mt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?ze===0&&(ze=3):tu())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Gr(),Cc(e,t),e===null&&as(t.stateNode.containerInfo),Ue(t),null;case 10:return Fd(t.type._context),Ue(t),null;case 17:return at(t.type)&&Qa(),Ue(t),null;case 19:if(ge(be),s=t.memoizedState,s===null)return Ue(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)wi(s,!1);else{if(ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ro(e),o!==null){for(t.flags|=128,wi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(be,be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Pe()>Jr&&(t.flags|=128,r=!0,wi(s,!1),t.lanes=4194304)}else{if(!r)if(e=ro(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ue(t),null}else 2*Pe()-s.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,wi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Pe(),t.sibling=null,n=be.current,he(be,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function ry(e,t){switch(Ad(t),t.tag){case 1:return at(t.type)&&Qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),ge(st),ge(Xe),Ud(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wd(t),null;case 13:if(ge(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(be),null;case 4:return Gr(),null;case 10:return Fd(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Gs=!1,qe=!1,iy=typeof WeakSet=="function"?WeakSet:Set,H=null;function Lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Pc(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var Ph=!1;function sy(e,t){if(uc=Va,e=Um(),Td(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,u=0,f=e,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===e)break t;if(h===n&&++d===i&&(l=o),h===s&&++u===r&&(c=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},Va=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,y=p.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:Pt(t.type,v),y);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(k){Ne(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return p=Ph,Ph=!1,p}function qi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pc(t,n,s)}i=i.next}while(i!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ig(e){var t=e.alternate;t!==null&&(e.alternate=null,Ig(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[ls],delete t[mc],delete t[Hv],delete t[Wv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bg(e){return e.tag===5||e.tag===3||e.tag===4}function Eh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(Rc(e,t,n),e=e.sibling;e!==null;)Rc(e,t,n),e=e.sibling}function Mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mc(e,t,n),e=e.sibling;e!==null;)Mc(e,t,n),e=e.sibling}var De=null,Et=!1;function mn(e,t,n){for(n=n.child;n!==null;)Hg(e,t,n),n=n.sibling}function Hg(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:qe||Lr(n,t);case 6:var r=De,i=Et;De=null,mn(e,t,n),De=r,Et=i,De!==null&&(Et?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Et?(e=De,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),rs(e)):gl(De,n.stateNode));break;case 4:r=De,i=Et,De=n.stateNode.containerInfo,Et=!0,mn(e,t,n),De=r,Et=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pc(n,t,o),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!qe&&(Lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,t,l)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,mn(e,t,n),qe=r):mn(e,t,n);break;default:mn(e,t,n)}}function Rh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iy),t.forEach(function(r){var i=py.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,Et=!1;break e;case 3:De=l.stateNode.containerInfo,Et=!0;break e;case 4:De=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(De===null)throw Error(O(160));Hg(s,o,i),De=null,Et=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Ne(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wg(t,e),t=t.sibling}function Wg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),It(e),r&4){try{qi(3,e,e.return),zo(3,e)}catch(v){Ne(e,e.return,v)}try{qi(5,e,e.return)}catch(v){Ne(e,e.return,v)}}break;case 1:Ct(t,e),It(e),r&512&&n!==null&&Lr(n,n.return);break;case 5:if(Ct(t,e),It(e),r&512&&n!==null&&Lr(n,n.return),e.flags&32){var i=e.stateNode;try{Ji(i,"")}catch(v){Ne(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&dm(i,s),tc(l,o);var d=tc(l,s);for(o=0;o<c.length;o+=2){var u=c[o],f=c[o+1];u==="style"?mm(i,f):u==="dangerouslySetInnerHTML"?fm(i,f):u==="children"?Ji(i,f):yd(i,u,f,d)}switch(l){case"input":Ql(i,s);break;case"textarea":um(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fr(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ls]=s}catch(v){Ne(e,e.return,v)}}break;case 6:if(Ct(t,e),It(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Ne(e,e.return,v)}}break;case 3:if(Ct(t,e),It(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rs(t.containerInfo)}catch(v){Ne(e,e.return,v)}break;case 4:Ct(t,e),It(e);break;case 13:Ct(t,e),It(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zd=Pe())),r&4&&Rh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(qe=(d=qe)||u,Ct(t,e),qe=d):Ct(t,e),It(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(f=H=u;H!==null;){switch(h=H,m=h.child,h.tag){case 0:case 11:case 14:case 15:qi(4,h,h.return);break;case 1:Lr(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(v){Ne(r,n,v)}}break;case 5:Lr(h,h.return);break;case 22:if(h.memoizedState!==null){Th(f);continue}}m!==null?(m.return=h,H=m):Th(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=pm("display",o))}catch(v){Ne(e,e.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){Ne(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ct(t,e),It(e),r&4&&Rh(e);break;case 21:break;default:Ct(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bg(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var s=Eh(e);Mc(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Eh(e);Rc(e,l,o);break;default:throw Error(O(161))}}catch(c){Ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ay(e,t,n){H=e,Ug(e)}function Ug(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gs;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||qe;l=Gs;var d=qe;if(Gs=o,(qe=c)&&!d)for(H=i;H!==null;)o=H,c=o.child,o.tag===22&&o.memoizedState!==null?zh(i):c!==null?(c.return=o,H=c):zh(i);for(;s!==null;)H=s,Ug(s),s=s.sibling;H=i,Gs=l,qe=d}Mh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Mh(e)}}function Mh(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&mh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mh(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&rs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}qe||t.flags&512&&Ec(t)}catch(h){Ne(t,t.return,h)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Th(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function zh(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(c){Ne(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ne(t,i,c)}}var s=t.return;try{Ec(t)}catch(c){Ne(t,s,c)}break;case 5:var o=t.return;try{Ec(t)}catch(c){Ne(t,o,c)}}}catch(c){Ne(t,t.return,c)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var oy=Math.ceil,ao=hn.ReactCurrentDispatcher,Qd=hn.ReactCurrentOwner,wt=hn.ReactCurrentBatchConfig,te=0,Le=null,Re=null,Ie=0,dt=0,Dr=$n(0),ze=0,ps=null,pr=0,Ao=0,Gd=0,Vi=null,nt=null,Zd=0,Jr=1/0,tn=null,oo=!1,Tc=null,On=null,Zs=!1,Sn=null,lo=0,Yi=0,zc=null,Na=-1,Ca=0;function Ge(){return te&6?Pe():Na!==-1?Na:Na=Pe()}function Ln(e){return e.mode&1?te&2&&Ie!==0?Ie&-Ie:$v.transition!==null?(Ca===0&&(Ca=Cm()),Ca):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Am(e.type)),e):1}function zt(e,t,n,r){if(50<Yi)throw Yi=0,zc=null,Error(O(185));_s(e,n,r),(!(te&2)||e!==Le)&&(e===Le&&(!(te&2)&&(Ao|=n),ze===4&&jn(e,Ie)),ot(e,r),n===1&&te===0&&!(t.mode&1)&&(Jr=Pe()+500,Ro&&qn()))}function ot(e,t){var n=e.callbackNode;$1(e,t);var r=qa(e,e===Le?Ie:0);if(r===0)n!==null&&Wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wu(n),t===1)e.tag===0?Uv(Ah.bind(null,e)):Jm(Ah.bind(null,e)),Iv(function(){!(te&6)&&qn()}),n=null;else{switch(Pm(r)){case 1:n=Sd;break;case 4:n=_m;break;case 16:n=$a;break;case 536870912:n=Nm;break;default:n=$a}n=Gg(n,$g.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $g(e,t){if(Na=-1,Ca=0,te&6)throw Error(O(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=qa(e,e===Le?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=co(e,r);else{t=r;var i=te;te|=2;var s=Vg();(Le!==e||Ie!==t)&&(tn=null,Jr=Pe()+500,or(e,t));do try{dy();break}catch(l){qg(e,l)}while(!0);Dd(),ao.current=s,te=i,Re!==null?t=0:(Le=null,Ie=0,t=ze)}if(t!==0){if(t===2&&(i=ac(e),i!==0&&(r=i,t=Ac(e,i))),t===1)throw n=ps,or(e,0),jn(e,r),ot(e,Pe()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ly(i)&&(t=co(e,r),t===2&&(s=ac(e),s!==0&&(r=s,t=Ac(e,s))),t===1))throw n=ps,or(e,0),jn(e,r),ot(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Gn(e,nt,tn);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=Zd+500-Pe(),10<t)){if(qa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pc(Gn.bind(null,e,nt,tn),t);break}Gn(e,nt,tn);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Tt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oy(r/1960))-r,10<r){e.timeoutHandle=pc(Gn.bind(null,e,nt,tn),r);break}Gn(e,nt,tn);break;case 5:Gn(e,nt,tn);break;default:throw Error(O(329))}}}return ot(e,Pe()),e.callbackNode===n?$g.bind(null,e):null}function Ac(e,t){var n=Vi;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=co(e,t),e!==2&&(t=nt,nt=n,t!==null&&Oc(t)),e}function Oc(e){nt===null?nt=e:nt.push.apply(nt,e)}function ly(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~Gd,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function Ah(e){if(te&6)throw Error(O(327));Ur();var t=qa(e,0);if(!(t&1))return ot(e,Pe()),null;var n=co(e,t);if(e.tag!==0&&n===2){var r=ac(e);r!==0&&(t=r,n=Ac(e,r))}if(n===1)throw n=ps,or(e,0),jn(e,t),ot(e,Pe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,nt,tn),ot(e,Pe()),null}function Jd(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Jr=Pe()+500,Ro&&qn())}}function mr(e){Sn!==null&&Sn.tag===0&&!(te&6)&&Ur();var t=te;te|=1;var n=wt.transition,r=oe;try{if(wt.transition=null,oe=1,e)return e()}finally{oe=r,wt.transition=n,te=t,!(te&6)&&qn()}}function eu(){dt=Dr.current,ge(Dr)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fv(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:Gr(),ge(st),ge(Xe),Ud();break;case 5:Wd(r);break;case 4:Gr();break;case 13:ge(be);break;case 19:ge(be);break;case 10:Fd(r.type._context);break;case 22:case 23:eu()}n=n.return}if(Le=e,Re=e=Dn(e.current,null),Ie=dt=t,ze=0,ps=null,Gd=Ao=pr=0,nt=Vi=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}nr=null}return e}function qg(e,t){do{var n=Re;try{if(Dd(),ka.current=so,io){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}io=!1}if(fr=0,Oe=Me=we=null,$i=!1,us=0,Qd.current=null,n===null||n.return===null){ze=1,ps=t,Re=null;break}e:{var s=e,o=n.return,l=n,c=t;if(t=Ie,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=wh(o);if(m!==null){m.flags&=-257,jh(m,o,l,s,t),m.mode&1&&bh(s,d,t),t=m,c=d;var p=t.updateQueue;if(p===null){var v=new Set;v.add(c),t.updateQueue=v}else p.add(c);break e}else{if(!(t&1)){bh(s,d,t),tu();break e}c=Error(O(426))}}else if(ye&&l.mode&1){var y=wh(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),jh(y,o,l,s,t),Od(Zr(c,l));break e}}s=c=Zr(c,l),ze!==4&&(ze=2),Vi===null?Vi=[s]:Vi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Pg(s,c,t);ph(s,x);break e;case 1:l=c;var g=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(On===null||!On.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=Eg(s,l,t);ph(s,k);break e}}s=s.return}while(s!==null)}Kg(n)}catch(j){t=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Vg(){var e=ao.current;return ao.current=so,e===null?so:e}function tu(){(ze===0||ze===3||ze===2)&&(ze=4),Le===null||!(pr&268435455)&&!(Ao&268435455)||jn(Le,Ie)}function co(e,t){var n=te;te|=2;var r=Vg();(Le!==e||Ie!==t)&&(tn=null,or(e,t));do try{cy();break}catch(i){qg(e,i)}while(!0);if(Dd(),te=n,ao.current=r,Re!==null)throw Error(O(261));return Le=null,Ie=0,ze}function cy(){for(;Re!==null;)Yg(Re)}function dy(){for(;Re!==null&&!O1();)Yg(Re)}function Yg(e){var t=Qg(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Kg(e):Re=t,Qd.current=null}function Kg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ry(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Re=null;return}}else if(n=ny(n,t,dt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);ze===0&&(ze=5)}function Gn(e,t,n){var r=oe,i=wt.transition;try{wt.transition=null,oe=1,uy(e,t,n,r)}finally{wt.transition=i,oe=r}return null}function uy(e,t,n,r){do Ur();while(Sn!==null);if(te&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(q1(e,s),e===Le&&(Re=Le=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,Gg($a,function(){return Ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var o=oe;oe=1;var l=te;te|=4,Qd.current=null,sy(e,n),Wg(n,e),Mv(hc),Va=!!uc,hc=uc=null,e.current=n,ay(n),L1(),te=l,oe=o,wt.transition=s}else e.current=n;if(Zs&&(Zs=!1,Sn=e,lo=i),s=e.pendingLanes,s===0&&(On=null),I1(n.stateNode),ot(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Tc,Tc=null,e;return lo&1&&e.tag!==0&&Ur(),s=e.pendingLanes,s&1?e===zc?Yi++:(Yi=0,zc=e):Yi=0,qn(),null}function Ur(){if(Sn!==null){var e=Pm(lo),t=wt.transition,n=oe;try{if(wt.transition=null,oe=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,lo=0,te&6)throw Error(O(331));var i=te;for(te|=4,H=e.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:qi(8,u,s)}var f=u.child;if(f!==null)f.return=u,H=f;else for(;H!==null;){u=H;var h=u.sibling,m=u.return;if(Ig(u),u===d){H=null;break}if(h!==null){h.return=m,H=h;break}H=m}}}var p=s.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qi(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,H=x;break e}H=s.return}}var g=e.current;for(H=g;H!==null;){o=H;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,H=b;else e:for(o=g;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zo(9,l)}}catch(j){Ne(l,l.return,j)}if(l===o){H=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,H=k;break e}H=l.return}}if(te=i,qn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{oe=n,wt.transition=t}}return!1}function Oh(e,t,n){t=Zr(n,t),t=Pg(e,t,1),e=An(e,t,1),t=Ge(),e!==null&&(_s(e,1,t),ot(e,t))}function Ne(e,t,n){if(e.tag===3)Oh(e,e,n);else for(;t!==null;){if(t.tag===3){Oh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){e=Zr(n,e),e=Eg(t,e,1),t=An(t,e,1),e=Ge(),t!==null&&(_s(t,1,e),ot(t,e));break}}t=t.return}}function hy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ie&n)===n&&(ze===4||ze===3&&(Ie&130023424)===Ie&&500>Pe()-Zd?or(e,0):Gd|=n),ot(e,t)}function Xg(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var n=Ge();e=dn(e,t),e!==null&&(_s(e,t,n),ot(e,n))}function fy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xg(e,n)}function py(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Xg(e,n)}var Qg;Qg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,ty(e,t,n);it=!!(e.flags&131072)}else it=!1,ye&&t.flags&1048576&&eg(t,Ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_a(e,t),e=t.pendingProps;var i=Kr(t,Xe.current);Wr(t,n),i=qd(null,t,r,e,i,n);var s=Vd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(s=!0,Ga(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bd(t),i.updater=To,t.stateNode=i,i._reactInternals=t,wc(t,r,e,n),t=Sc(null,t,r,!0,s,n)):(t.tag=0,ye&&s&&zd(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_a(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gy(r),e=Pt(r,e),i){case 0:t=kc(null,t,r,e,n);break e;case 1:t=_h(null,t,r,e,n);break e;case 11:t=kh(null,t,r,e,n);break e;case 14:t=Sh(null,t,r,Pt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),kc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),_h(e,t,r,i,n);case 3:e:{if(zg(t),e===null)throw Error(O(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ag(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Zr(Error(O(423)),t),t=Nh(e,t,r,n,i);break e}else if(r!==i){i=Zr(Error(O(424)),t),t=Nh(e,t,r,n,i);break e}else for(ut=zn(t.stateNode.containerInfo.firstChild),ht=t,ye=!0,Mt=null,n=ig(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){t=un(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return og(t),e===null&&vc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,fc(r,i)?o=null:s!==null&&fc(r,s)&&(t.flags|=32),Tg(e,t),Qe(e,t,o,n),t.child;case 6:return e===null&&vc(t),null;case 13:return Ag(e,t,n);case 4:return Hd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),kh(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,he(eo,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!st.current){t=un(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=on(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),yc(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yc(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wr(t,n),i=jt(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),Sh(e,t,r,i,n);case 15:return Rg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),_a(e,t),t.tag=1,at(r)?(e=!0,Ga(t)):e=!1,Wr(t,n),Cg(t,r,i),wc(t,r,i,n),Sc(null,t,r,!0,e,n);case 19:return Og(e,t,n);case 22:return Mg(e,t,n)}throw Error(O(156,t.tag))};function Gg(e,t){return Sm(e,t)}function my(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new my(e,t,n,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gy(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wd)return 11;if(e===jd)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pa(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")nu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Cr:return lr(n.children,i,s,t);case bd:o=8,i|=8;break;case ql:return e=yt(12,n,t,i|2),e.elementType=ql,e.lanes=s,e;case Vl:return e=yt(13,n,t,i),e.elementType=Vl,e.lanes=s,e;case Yl:return e=yt(19,n,t,i),e.elementType=Yl,e.lanes=s,e;case om:return Oo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sm:o=10;break e;case am:o=9;break e;case wd:o=11;break e;case jd:o=14;break e;case yn:o=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=yt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function lr(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=yt(22,e,r,t),e.elementType=om,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,s,o,l,c){return e=new xy(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=yt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),e}function vy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zg(e){if(!e)return Hn;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(at(n))return Zm(e,n,t)}return t}function Jg(e,t,n,r,i,s,o,l,c){return e=ru(n,r,!0,e,i,s,o,l,c),e.context=Zg(null),n=e.current,r=Ge(),i=Ln(n),s=on(r,i),s.callback=t??null,An(n,s,i),e.current.lanes=i,_s(e,i,r),ot(e,r),e}function Lo(e,t,n,r){var i=t.current,s=Ge(),o=Ln(i);return n=Zg(n),t.context===null?t.context=n:t.pendingContext=n,t=on(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,o),e!==null&&(zt(e,i,o,s),ja(e,i,o)),o}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){Lh(e,t),(e=e.alternate)&&Lh(e,t)}function yy(){return null}var e0=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}Do.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Lo(e,t,null,null)};Do.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){Lo(null,e,null,null)}),t[cn]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&zm(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dh(){}function by(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=uo(o);s.call(d)}}var o=Jg(t,r,e,0,null,!1,!1,"",Dh);return e._reactRootContainer=o,e[cn]=o.current,as(e.nodeType===8?e.parentNode:e),mr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=uo(c);l.call(d)}}var c=ru(e,0,!1,null,null,!1,!1,"",Dh);return e._reactRootContainer=c,e[cn]=c.current,as(e.nodeType===8?e.parentNode:e),mr(function(){Lo(t,c,n,r)}),c}function Io(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=uo(o);l.call(c)}}Lo(t,o,e,i)}else o=by(n,t,e,i,r);return uo(o)}Em=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ti(t.pendingLanes);n!==0&&(_d(t,n|1),ot(t,Pe()),!(te&6)&&(Jr=Pe()+500,qn()))}break;case 13:mr(function(){var r=dn(e,1);if(r!==null){var i=Ge();zt(r,e,1,i)}}),iu(e,1)}};Nd=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=Ge();zt(t,e,134217728,n)}iu(e,134217728)}};Rm=function(e){if(e.tag===13){var t=Ln(e),n=dn(e,t);if(n!==null){var r=Ge();zt(n,e,t,r)}iu(e,t)}};Mm=function(){return oe};Tm=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};rc=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error(O(90));cm(r),Ql(r,i)}}}break;case"textarea":um(e,n);break;case"select":t=n.value,t!=null&&Fr(e,!!n.multiple,t,!1)}};vm=Jd;ym=mr;var wy={usingClientEntryPoint:!1,Events:[Cs,Mr,Eo,gm,xm,Jd]},ji={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jm(e),e===null?null:e.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{_o=Js.inject(jy),Yt=Js}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(O(200));return vy(e,t,null,n)};pt.createRoot=function(e,t){if(!au(e))throw Error(O(299));var n=!1,r="",i=e0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,r,i),e[cn]=t.current,as(e.nodeType===8?e.parentNode:e),new su(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=jm(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return mr(e)};pt.hydrate=function(e,t,n){if(!Fo(t))throw Error(O(200));return Io(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!au(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=e0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Jg(t,null,e,1,n??null,i,!1,s,o),e[cn]=t.current,as(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Do(t)};pt.render=function(e,t,n){if(!Fo(t))throw Error(O(200));return Io(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(O(40));return e._reactRootContainer?(mr(function(){Io(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};pt.unstable_batchedUpdates=Jd;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Io(e,t,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function t0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t0)}catch(e){console.error(e)}}t0(),tm.exports=pt;var ky=tm.exports,Fh=ky;Ul.createRoot=Fh.createRoot,Ul.hydrateRoot=Fh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}var _n;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_n||(_n={}));const Ih="popstate";function Sy(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Lc("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ho(i)}return Ny(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function n0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _y(){return Math.random().toString(36).substr(2,8)}function Bh(e,t){return{usr:e.state,key:e.key,idx:t}}function Lc(e,t,n,r){return n===void 0&&(n=null),ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ci(t):t,{state:n,key:t&&t.key||r||_y()})}function ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ci(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ny(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=_n.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(ms({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function f(){l=_n.Pop;let y=u(),x=y==null?null:y-d;d=y,c&&c({action:l,location:v.location,delta:x})}function h(y,x){l=_n.Push;let g=Lc(v.location,y,x);d=u()+1;let b=Bh(g,d),k=v.createHref(g);try{o.pushState(b,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(k)}s&&c&&c({action:l,location:v.location,delta:1})}function m(y,x){l=_n.Replace;let g=Lc(v.location,y,x);d=u();let b=Bh(g,d),k=v.createHref(g);o.replaceState(b,"",k),s&&c&&c({action:l,location:v.location,delta:0})}function p(y){let x=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof y=="string"?y:ho(y);return g=g.replace(/ $/,"%20"),je(x,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,x)}let v={get action(){return l},get location(){return e(i,o)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ih,f),c=y,()=>{i.removeEventListener(Ih,f),c=null}},createHref(y){return t(i,y)},createURL:p,encodeLocation(y){let x=p(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:m,go(y){return o.go(y)}};return v}var Hh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hh||(Hh={}));function Cy(e,t,n){return n===void 0&&(n="/"),Py(e,t,n)}function Py(e,t,n,r){let i=typeof t=="string"?ci(t):t,s=ei(i.pathname||"/",n);if(s==null)return null;let o=r0(e);Ey(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=By(s);l=Fy(o[c],d)}return l}function r0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Fn([r,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),r0(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:Ly(d,s.index),routesMeta:u})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of i0(s.path))i(s,o,c)}),t}function i0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=i0(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ey(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ry=/^:[\w-]+$/,My=3,Ty=2,zy=1,Ay=10,Oy=-2,Wh=e=>e==="*";function Ly(e,t){let n=e.split("/"),r=n.length;return n.some(Wh)&&(r+=Oy),t&&(r+=Ty),n.filter(i=>!Wh(i)).reduce((i,s)=>i+(Ry.test(s)?My:s===""?zy:Ay),r)}function Dy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fy(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,u=s==="/"?t:t.slice(s.length)||"/",f=Dc({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),h=c.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Fn([s,f.pathname]),pathnameBase:$y(Fn([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Fn([s,f.pathnameBase]))}return o}function Dc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Iy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,u,f)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let v=l[f]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const p=l[f];return m&&!p?d[h]=void 0:d[h]=(p||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function Iy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),n0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function By(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return n0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ei(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Hy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ci(e):e;return{pathname:n?n.startsWith("/")?n:Wy(n,t):t,search:qy(r),hash:Vy(i)}}function Wy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ou(e,t){let n=Uy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ci(e):(i=ms({},e),je(!i.pathname||!i.pathname.includes("?"),Nl("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Nl("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Nl("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}l=f>=0?t[f]:"/"}let c=Hy(i,l),d=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),$y=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const s0=["post","put","patch","delete"];new Set(s0);const Ky=["get",...s0];new Set(Ky);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gs.apply(this,arguments)}const Bo=w.createContext(null),a0=w.createContext(null),fn=w.createContext(null),Ho=w.createContext(null),Qt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),o0=w.createContext(null);function Xy(e,t){let{relative:n}=t===void 0?{}:t;di()||je(!1);let{basename:r,navigator:i}=w.useContext(fn),{hash:s,pathname:o,search:l}=Wo(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Fn([r,o])),i.createHref({pathname:c,search:l,hash:s})}function di(){return w.useContext(Ho)!=null}function Nt(){return di()||je(!1),w.useContext(Ho).location}function l0(e){w.useContext(fn).static||w.useLayoutEffect(e)}function Lt(){let{isDataRoute:e}=w.useContext(Qt);return e?db():Qy()}function Qy(){di()||je(!1);let e=w.useContext(Bo),{basename:t,future:n,navigator:r}=w.useContext(fn),{matches:i}=w.useContext(Qt),{pathname:s}=Nt(),o=JSON.stringify(ou(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return l0(()=>{l.current=!0}),w.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let f=lu(d,JSON.parse(o),s,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Fn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,s,e])}const Gy=w.createContext(null);function Zy(e){let t=w.useContext(Qt).outlet;return t&&w.createElement(Gy.Provider,{value:e},t)}function c0(){let{matches:e}=w.useContext(Qt),t=e[e.length-1];return t?t.params:{}}function Wo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(fn),{matches:i}=w.useContext(Qt),{pathname:s}=Nt(),o=JSON.stringify(ou(i,r.v7_relativeSplatPath));return w.useMemo(()=>lu(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Jy(e,t){return eb(e,t)}function eb(e,t,n,r){di()||je(!1);let{navigator:i}=w.useContext(fn),{matches:s}=w.useContext(Qt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Nt(),u;if(t){var f;let y=typeof t=="string"?ci(t):t;c==="/"||(f=y.pathname)!=null&&f.startsWith(c)||je(!1),u=y}else u=d;let h=u.pathname||"/",m=h;if(c!=="/"){let y=c.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(y.length).join("/")}let p=Cy(e,{pathname:m}),v=sb(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Fn([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Fn([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return t&&v?w.createElement(Ho.Provider,{value:{location:gs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:_n.Pop}},v):v}function tb(){let e=cb(),t=Yy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const nb=w.createElement(tb,null);class rb extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Qt.Provider,{value:this.props.routeContext},w.createElement(o0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ib(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Bo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Qt.Provider,{value:t},r)}function sb(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);u>=0||je(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=u),f.route.id){let{loaderData:h,errors:m}=n,p=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||p){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,f,h)=>{let m,p=!1,v=null,y=null;n&&(m=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||nb,c&&(d<0&&h===0?(ub("route-fallback"),p=!0,y=null):d===h&&(p=!0,y=f.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,h+1)),g=()=>{let b;return m?b=v:p?b=y:f.route.Component?b=w.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=u,w.createElement(ib,{match:f,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:b})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(rb,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}var d0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(d0||{}),u0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(u0||{});function ab(e){let t=w.useContext(Bo);return t||je(!1),t}function ob(e){let t=w.useContext(a0);return t||je(!1),t}function lb(e){let t=w.useContext(Qt);return t||je(!1),t}function h0(e){let t=lb(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function cb(){var e;let t=w.useContext(o0),n=ob(),r=h0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function db(){let{router:e}=ab(d0.UseNavigateStable),t=h0(u0.UseNavigateStable),n=w.useRef(!1);return l0(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,gs({fromRouteId:t},s)))},[e,t])}const Uh={};function ub(e,t,n){Uh[e]||(Uh[e]=!0)}function hb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Fc(e){let{to:t,replace:n,state:r,relative:i}=e;di()||je(!1);let{future:s,static:o}=w.useContext(fn),{matches:l}=w.useContext(Qt),{pathname:c}=Nt(),d=Lt(),u=lu(t,ou(l,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(u);return w.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:i}),[d,f,i,n,r]),null}function f0(e){return Zy(e.context)}function _e(e){je(!1)}function fb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_n.Pop,navigator:s,static:o=!1,future:l}=e;di()&&je(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:s,static:o,future:gs({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=ci(r));let{pathname:u="/",search:f="",hash:h="",state:m=null,key:p="default"}=r,v=w.useMemo(()=>{let y=ei(u,c);return y==null?null:{location:{pathname:y,search:f,hash:h,state:m,key:p},navigationType:i}},[c,u,f,h,m,p,i]);return v==null?null:w.createElement(fn.Provider,{value:d},w.createElement(Ho.Provider,{children:n,value:v}))}function pb(e){let{children:t,location:n}=e;return Jy(Ic(t),n)}new Promise(()=>{});function Ic(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Ic(r.props.children,s));return}r.type!==_e&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ic(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}function p0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gb(e,t){return e.button===0&&(!t||t==="_self")&&!mb(e)}function Bc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function xb(e,t){let n=Bc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const vb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],bb="6";try{window.__reactRouterVersion=bb}catch{}const wb=w.createContext({isTransitioning:!1}),jb="startTransition",$h=h1[jb];function kb(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=Sy({window:i,v5Compat:!0}));let o=s.current,[l,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},u=w.useCallback(f=>{d&&$h?$h(()=>c(f)):c(f)},[c,d]);return w.useLayoutEffect(()=>o.listen(u),[o,u]),w.useEffect(()=>hb(r),[r]),w.createElement(fb,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Sb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_b=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:f}=t,h=p0(t,vb),{basename:m}=w.useContext(fn),p,v=!1;if(typeof d=="string"&&_b.test(d)&&(p=d,Sb))try{let b=new URL(window.location.href),k=d.startsWith("//")?new URL(b.protocol+d):new URL(d),j=ei(k.pathname,m);k.origin===b.origin&&j!=null?d=j+k.search+k.hash:v=!0}catch{}let y=Xy(d,{relative:i}),x=Cb(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:i,viewTransition:f});function g(b){r&&r(b),b.defaultPrevented||x(b)}return w.createElement("a",fo({},h,{href:p||y,onClick:v||s?r:g,ref:n,target:c}))}),gn=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:d,children:u}=t,f=p0(t,yb),h=Wo(c,{relative:f.relative}),m=Nt(),p=w.useContext(a0),{navigator:v,basename:y}=w.useContext(fn),x=p!=null&&Pb(h)&&d===!0,g=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,b=m.pathname,k=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(b=b.toLowerCase(),k=k?k.toLowerCase():null,g=g.toLowerCase()),k&&y&&(k=ei(k,y)||k);const j=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let S=b===g||!o&&b.startsWith(g)&&b.charAt(j)==="/",N=k!=null&&(k===g||!o&&k.startsWith(g)&&k.charAt(g.length)==="/"),_={isActive:S,isPending:N,isTransitioning:x},z=S?r:void 0,T;typeof s=="function"?T=s(_):T=[s,S?"active":null,N?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let I=typeof l=="function"?l(_):l;return w.createElement(U,fo({},f,{"aria-current":z,className:T,ref:n,style:I,to:c,viewTransition:d}),typeof u=="function"?u(_):u)});var Hc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hc||(Hc={}));var qh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qh||(qh={}));function Nb(e){let t=w.useContext(Bo);return t||je(!1),t}function Cb(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,c=Lt(),d=Nt(),u=Wo(e,{relative:o});return w.useCallback(f=>{if(gb(f,n)){f.preventDefault();let h=r!==void 0?r:ho(d)===ho(u);c(e,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,c,u,r,i,n,e,s,o,l])}function m0(e){let t=w.useRef(Bc(e)),n=w.useRef(!1),r=Nt(),i=w.useMemo(()=>xb(r.search,n.current?null:t.current),[r.search]),s=Lt(),o=w.useCallback((l,c)=>{const d=Bc(typeof l=="function"?l(i):l);n.current=!0,s("?"+d,c)},[s,i]);return[i,o]}function Pb(e,t){t===void 0&&(t={});let n=w.useContext(wb);n==null&&je(!1);let{basename:r}=Nb(Hc.useViewTransitionState),i=Wo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=ei(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ei(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Dc(i.pathname,o)!=null||Dc(i.pathname,s)!=null}function g0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Eb}=Object.prototype,{getPrototypeOf:cu}=Object,{iterator:Uo,toStringTag:x0}=Symbol,$o=(e=>t=>{const n=Eb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Dt=e=>(e=e.toLowerCase(),t=>$o(t)===e),qo=e=>t=>typeof t===e,{isArray:ui}=Array,ti=qo("undefined");function Es(e){return e!==null&&!ti(e)&&e.constructor!==null&&!ti(e.constructor)&&lt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const v0=Dt("ArrayBuffer");function Rb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&v0(e.buffer),t}const Mb=qo("string"),lt=qo("function"),y0=qo("number"),Rs=e=>e!==null&&typeof e=="object",Tb=e=>e===!0||e===!1,Ea=e=>{if($o(e)!=="object")return!1;const t=cu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(x0 in e)&&!(Uo in e)},zb=e=>{if(!Rs(e)||Es(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Ab=Dt("Date"),Ob=Dt("File"),Lb=Dt("Blob"),Db=Dt("FileList"),Fb=e=>Rs(e)&&lt(e.pipe),Ib=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||lt(e.append)&&((t=$o(e))==="formdata"||t==="object"&&lt(e.toString)&&e.toString()==="[object FormData]"))},Bb=Dt("URLSearchParams"),[Hb,Wb,Ub,$b]=["ReadableStream","Request","Response","Headers"].map(Dt),qb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ms(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ui(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Es(e))return;const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(r=0;r<o;r++)l=s[r],t.call(null,e[l],l,e)}}function b0(e,t){if(Es(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,w0=e=>!ti(e)&&e!==ir;function Wc(){const{caseless:e,skipUndefined:t}=w0(this)&&this||{},n={},r=(i,s)=>{const o=e&&b0(n,s)||s;Ea(n[o])&&Ea(i)?n[o]=Wc(n[o],i):Ea(i)?n[o]=Wc({},i):ui(i)?n[o]=i.slice():(!t||!ti(i))&&(n[o]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Ms(arguments[i],r);return n}const Vb=(e,t,n,{allOwnKeys:r}={})=>(Ms(t,(i,s)=>{n&&lt(i)?e[s]=g0(i,n):e[s]=i},{allOwnKeys:r}),e),Yb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Xb=(e,t,n,r)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&cu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Qb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Gb=e=>{if(!e)return null;if(ui(e))return e;let t=e.length;if(!y0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Zb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cu(Uint8Array)),Jb=(e,t)=>{const r=(e&&e[Uo]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},e2=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},t2=Dt("HTMLFormElement"),n2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Vh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),r2=Dt("RegExp"),j0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ms(n,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(r[s]=o||i)}),Object.defineProperties(e,r)},i2=e=>{j0(e,(t,n)=>{if(lt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(lt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},s2=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return ui(e)?r(e):r(String(e).split(t)),n},a2=()=>{},o2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function l2(e){return!!(e&&lt(e.append)&&e[x0]==="FormData"&&e[Uo])}const c2=e=>{const t=new Array(10),n=(r,i)=>{if(Rs(r)){if(t.indexOf(r)>=0)return;if(Es(r))return r;if(!("toJSON"in r)){t[i]=r;const s=ui(r)?[]:{};return Ms(r,(o,l)=>{const c=n(o,i+1);!ti(c)&&(s[l]=c)}),t[i]=void 0,s}}return r};return n(e,0)},d2=Dt("AsyncFunction"),u2=e=>e&&(Rs(e)||lt(e))&&lt(e.then)&&lt(e.catch),k0=((e,t)=>e?setImmediate:t?((n,r)=>(ir.addEventListener("message",({source:i,data:s})=>{i===ir&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),ir.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",lt(ir.postMessage)),h2=typeof queueMicrotask<"u"?queueMicrotask.bind(ir):typeof process<"u"&&process.nextTick||k0,f2=e=>e!=null&&lt(e[Uo]),E={isArray:ui,isArrayBuffer:v0,isBuffer:Es,isFormData:Ib,isArrayBufferView:Rb,isString:Mb,isNumber:y0,isBoolean:Tb,isObject:Rs,isPlainObject:Ea,isEmptyObject:zb,isReadableStream:Hb,isRequest:Wb,isResponse:Ub,isHeaders:$b,isUndefined:ti,isDate:Ab,isFile:Ob,isBlob:Lb,isRegExp:r2,isFunction:lt,isStream:Fb,isURLSearchParams:Bb,isTypedArray:Zb,isFileList:Db,forEach:Ms,merge:Wc,extend:Vb,trim:qb,stripBOM:Yb,inherits:Kb,toFlatObject:Xb,kindOf:$o,kindOfTest:Dt,endsWith:Qb,toArray:Gb,forEachEntry:Jb,matchAll:e2,isHTMLForm:t2,hasOwnProperty:Vh,hasOwnProp:Vh,reduceDescriptors:j0,freezeMethods:i2,toObjectSet:s2,toCamelCase:n2,noop:a2,toFiniteNumber:o2,findKey:b0,global:ir,isContextDefined:w0,isSpecCompliantForm:l2,toJSONObject:c2,isAsyncFn:d2,isThenable:u2,setImmediate:k0,asap:h2,isIterable:f2};function Q(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}E.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}});const S0=Q.prototype,_0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_0[e]={value:e}});Object.defineProperties(Q,_0);Object.defineProperty(S0,"isAxiosError",{value:!0});Q.from=(e,t,n,r,i,s)=>{const o=Object.create(S0);E.toFlatObject(e,o,function(u){return u!==Error.prototype},d=>d!=="isAxiosError");const l=e&&e.message?e.message:"Error",c=t==null&&e?e.code:t;return Q.call(o,l,c,n,r,i),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",s&&Object.assign(o,s),o};const p2=null;function Uc(e){return E.isPlainObject(e)||E.isArray(e)}function N0(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Yh(e,t,n){return e?e.concat(t).map(function(i,s){return i=N0(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function m2(e){return E.isArray(e)&&!e.some(Uc)}const g2=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function Vo(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,y){return!E.isUndefined(y[v])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(i))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(E.isDate(p))return p.toISOString();if(E.isBoolean(p))return p.toString();if(!c&&E.isBlob(p))throw new Q("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(p)||E.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,v,y){let x=p;if(p&&!y&&typeof p=="object"){if(E.endsWith(v,"{}"))v=r?v:v.slice(0,-2),p=JSON.stringify(p);else if(E.isArray(p)&&m2(p)||(E.isFileList(p)||E.endsWith(v,"[]"))&&(x=E.toArray(p)))return v=N0(v),x.forEach(function(b,k){!(E.isUndefined(b)||b===null)&&t.append(o===!0?Yh([v],k,s):o===null?v:v+"[]",d(b))}),!1}return Uc(p)?!0:(t.append(Yh(y,v,s),d(p)),!1)}const f=[],h=Object.assign(g2,{defaultVisitor:u,convertValue:d,isVisitable:Uc});function m(p,v){if(!E.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(p),E.forEach(p,function(x,g){(!(E.isUndefined(x)||x===null)&&i.call(t,x,E.isString(g)?g.trim():g,v,h))===!0&&m(x,v?v.concat(g):[g])}),f.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Kh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function du(e,t){this._pairs=[],e&&Vo(e,this,t)}const C0=du.prototype;C0.append=function(t,n){this._pairs.push([t,n])};C0.toString=function(t){const n=t?function(r){return t.call(this,r,Kh)}:Kh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function x2(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function P0(e,t,n){if(!t)return e;const r=n&&n.encode||x2;E.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(t,n):s=E.isURLSearchParams(t)?t.toString():new du(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Xh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const E0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},v2=typeof URLSearchParams<"u"?URLSearchParams:du,y2=typeof FormData<"u"?FormData:null,b2=typeof Blob<"u"?Blob:null,w2={isBrowser:!0,classes:{URLSearchParams:v2,FormData:y2,Blob:b2},protocols:["http","https","file","blob","url","data"]},uu=typeof window<"u"&&typeof document<"u",$c=typeof navigator=="object"&&navigator||void 0,j2=uu&&(!$c||["ReactNative","NativeScript","NS"].indexOf($c.product)<0),k2=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",S2=uu&&window.location.href||"http://localhost",_2=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:uu,hasStandardBrowserEnv:j2,hasStandardBrowserWebWorkerEnv:k2,navigator:$c,origin:S2},Symbol.toStringTag,{value:"Module"})),Ve={..._2,...w2};function N2(e,t){return Vo(e,new Ve.classes.URLSearchParams,{visitor:function(n,r,i,s){return Ve.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function C2(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function P2(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function R0(e){function t(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=s>=n.length;return o=!o&&E.isArray(i)?i.length:o,c?(E.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!E.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&E.isArray(i[o])&&(i[o]=P2(i[o])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,i)=>{t(C2(r),i,n,0)}),n}return null}function E2(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ts={transitional:E0,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=E.isObject(t);if(s&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return i?JSON.stringify(R0(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t)||E.isReadableStream(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return N2(t,this.formSerializer).toString();if((l=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Vo(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),E2(t)):t}],transformResponse:[function(t){const n=this.transitional||Ts.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(E.isResponse(t)||E.isReadableStream(t))return t;if(t&&E.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?Q.from(l,Q.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ve.classes.FormData,Blob:Ve.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Ts.headers[e]={}});const R2=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),M2=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&R2[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Qh=Symbol("internals");function ki(e){return e&&String(e).trim().toLowerCase()}function Ra(e){return e===!1||e==null?e:E.isArray(e)?e.map(Ra):String(e)}function T2(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const z2=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cl(e,t,n,r,i){if(E.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function A2(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function O2(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}let ct=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(l,c,d){const u=ki(c);if(!u)throw new Error("header name must be a non-empty string");const f=E.findKey(i,u);(!f||i[f]===void 0||d===!0||d===void 0&&i[f]!==!1)&&(i[f||c]=Ra(l))}const o=(l,c)=>E.forEach(l,(d,u)=>s(d,u,c));if(E.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(E.isString(t)&&(t=t.trim())&&!z2(t))o(M2(t),n);else if(E.isObject(t)&&E.isIterable(t)){let l={},c,d;for(const u of t){if(!E.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[d=u[0]]=(c=l[d])?E.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(l,n)}else t!=null&&s(n,t,r);return this}get(t,n){if(t=ki(t),t){const r=E.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return T2(i);if(E.isFunction(n))return n.call(this,i,r);if(E.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ki(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=ki(o),o){const l=E.findKey(r,o);l&&(!n||Cl(r,r[l],l,n))&&(delete r[l],i=!0)}}return E.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||Cl(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return E.forEach(this,(i,s)=>{const o=E.findKey(r,s);if(o){n[o]=Ra(i),delete n[s];return}const l=t?A2(s):String(s).trim();l!==s&&delete n[s],n[l]=Ra(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Qh]=this[Qh]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=ki(o);r[l]||(O2(i,o),r[l]=!0)}return E.isArray(t)?t.forEach(s):s(t),this}};ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});E.freezeMethods(ct);function Pl(e,t){const n=this||Ts,r=t||n,i=ct.from(r.headers);let s=r.data;return E.forEach(e,function(l){s=l.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function M0(e){return!!(e&&e.__CANCEL__)}function hi(e,t,n){Q.call(this,e??"canceled",Q.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(hi,Q,{__CANCEL__:!0});function T0(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Q("Request failed with status code "+n.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function L2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function D2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),u=r[s];o||(o=d),n[i]=c,r[i]=d;let f=s,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),d-o<t)return;const m=u&&d-u;return m?Math.round(h*1e3/m):void 0}}function F2(e,t){let n=0,r=1e3/t,i,s;const o=(d,u=Date.now())=>{n=u,i=null,s&&(clearTimeout(s),s=null),e(...d)};return[(...d)=>{const u=Date.now(),f=u-n;f>=r?o(d,u):(i=d,s||(s=setTimeout(()=>{s=null,o(i)},r-f)))},()=>i&&o(i)]}const po=(e,t,n=3)=>{let r=0;const i=D2(50,250);return F2(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,c=o-r,d=i(c),u=o<=l;r=o;const f={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&u?(l-o)/d:void 0,event:s,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},Gh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Zh=e=>(...t)=>E.asap(()=>e(...t)),I2=Ve.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ve.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ve.origin),Ve.navigator&&/(msie|trident)/i.test(Ve.navigator.userAgent)):()=>!0,B2=Ve.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];E.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),E.isString(r)&&o.push("path="+r),E.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function H2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function W2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function z0(e,t,n){let r=!H2(t);return e&&(r||n==!1)?W2(e,t):t}const Jh=e=>e instanceof ct?{...e}:e;function gr(e,t){t=t||{};const n={};function r(d,u,f,h){return E.isPlainObject(d)&&E.isPlainObject(u)?E.merge.call({caseless:h},d,u):E.isPlainObject(u)?E.merge({},u):E.isArray(u)?u.slice():u}function i(d,u,f,h){if(E.isUndefined(u)){if(!E.isUndefined(d))return r(void 0,d,f,h)}else return r(d,u,f,h)}function s(d,u){if(!E.isUndefined(u))return r(void 0,u)}function o(d,u){if(E.isUndefined(u)){if(!E.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function l(d,u,f){if(f in t)return r(d,u);if(f in e)return r(void 0,d)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(d,u,f)=>i(Jh(d),Jh(u),f,!0)};return E.forEach(Object.keys({...e,...t}),function(u){const f=c[u]||i,h=f(e[u],t[u],u);E.isUndefined(h)&&f!==l||(n[u]=h)}),n}const A0=e=>{const t=gr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=t;if(t.headers=o=ct.from(o),t.url=P0(z0(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),E.isFormData(n)){if(Ve.hasStandardBrowserEnv||Ve.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(E.isFunction(n.getHeaders)){const c=n.getHeaders(),d=["content-type","content-length"];Object.entries(c).forEach(([u,f])=>{d.includes(u.toLowerCase())&&o.set(u,f)})}}if(Ve.hasStandardBrowserEnv&&(r&&E.isFunction(r)&&(r=r(t)),r||r!==!1&&I2(t.url))){const c=i&&s&&B2.read(s);c&&o.set(i,c)}return t},U2=typeof XMLHttpRequest<"u",$2=U2&&function(e){return new Promise(function(n,r){const i=A0(e);let s=i.data;const o=ct.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,u,f,h,m,p;function v(){m&&m(),p&&p(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let y=new XMLHttpRequest;y.open(i.method.toUpperCase(),i.url,!0),y.timeout=i.timeout;function x(){if(!y)return;const b=ct.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:b,config:e,request:y};T0(function(N){n(N),v()},function(N){r(N),v()},j),y=null}"onloadend"in y?y.onloadend=x:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(x)},y.onabort=function(){y&&(r(new Q("Request aborted",Q.ECONNABORTED,e,y)),y=null)},y.onerror=function(k){const j=k&&k.message?k.message:"Network Error",S=new Q(j,Q.ERR_NETWORK,e,y);S.event=k||null,r(S),y=null},y.ontimeout=function(){let k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const j=i.transitional||E0;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),r(new Q(k,j.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,y)),y=null},s===void 0&&o.setContentType(null),"setRequestHeader"in y&&E.forEach(o.toJSON(),function(k,j){y.setRequestHeader(j,k)}),E.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),l&&l!=="json"&&(y.responseType=i.responseType),d&&([h,p]=po(d,!0),y.addEventListener("progress",h)),c&&y.upload&&([f,m]=po(c),y.upload.addEventListener("progress",f),y.upload.addEventListener("loadend",m)),(i.cancelToken||i.signal)&&(u=b=>{y&&(r(!b||b.type?new hi(null,e,y):b),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const g=L2(i.url);if(g&&Ve.protocols.indexOf(g)===-1){r(new Q("Unsupported protocol "+g+":",Q.ERR_BAD_REQUEST,e));return}y.send(s||null)})},q2=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const s=function(d){if(!i){i=!0,l();const u=d instanceof Error?d:this.reason;r.abort(u instanceof Q?u:new hi(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,s(new Q(`timeout ${t} of ms exceeded`,Q.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(s):d.removeEventListener("abort",s)}),e=null)};e.forEach(d=>d.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=()=>E.asap(l),c}},V2=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Y2=async function*(e,t){for await(const n of K2(e))yield*V2(n,t)},K2=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},ef=(e,t,n,r)=>{const i=Y2(e,t);let s=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await i.next();if(d){l(),c.close();return}let f=u.byteLength;if(n){let h=s+=f;n(h)}c.enqueue(new Uint8Array(u))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},tf=64*1024,{isFunction:ea}=E,X2=(({Request:e,Response:t})=>({Request:e,Response:t}))(E.global),{ReadableStream:nf,TextEncoder:rf}=E.global,sf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Q2=e=>{e=E.merge.call({skipUndefined:!0},X2,e);const{fetch:t,Request:n,Response:r}=e,i=t?ea(t):typeof fetch=="function",s=ea(n),o=ea(r);if(!i)return!1;const l=i&&ea(nf),c=i&&(typeof rf=="function"?(p=>v=>p.encode(v))(new rf):async p=>new Uint8Array(await new n(p).arrayBuffer())),d=s&&l&&sf(()=>{let p=!1;const v=new n(Ve.origin,{body:new nf,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!v}),u=o&&l&&sf(()=>E.isReadableStream(new r("").body)),f={stream:u&&(p=>p.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!f[p]&&(f[p]=(v,y)=>{let x=v&&v[p];if(x)return x.call(v);throw new Q(`Response type '${p}' is not supported`,Q.ERR_NOT_SUPPORT,y)})});const h=async p=>{if(p==null)return 0;if(E.isBlob(p))return p.size;if(E.isSpecCompliantForm(p))return(await new n(Ve.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(E.isArrayBufferView(p)||E.isArrayBuffer(p))return p.byteLength;if(E.isURLSearchParams(p)&&(p=p+""),E.isString(p))return(await c(p)).byteLength},m=async(p,v)=>{const y=E.toFiniteNumber(p.getContentLength());return y??h(v)};return async p=>{let{url:v,method:y,data:x,signal:g,cancelToken:b,timeout:k,onDownloadProgress:j,onUploadProgress:S,responseType:N,headers:_,withCredentials:z="same-origin",fetchOptions:T}=A0(p),I=t||fetch;N=N?(N+"").toLowerCase():"text";let D=q2([g,b&&b.toAbortSignal()],k),B=null;const Y=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let M;try{if(S&&d&&y!=="get"&&y!=="head"&&(M=await m(_,x))!==0){let K=new n(v,{method:"POST",body:x,duplex:"half"}),X;if(E.isFormData(x)&&(X=K.headers.get("content-type"))&&_.setContentType(X),K.body){const[ve,ce]=Gh(M,po(Zh(S)));x=ef(K.body,tf,ve,ce)}}E.isString(z)||(z=z?"include":"omit");const A=s&&"credentials"in n.prototype,$={...T,signal:D,method:y.toUpperCase(),headers:_.normalize().toJSON(),body:x,duplex:"half",credentials:A?z:void 0};B=s&&new n(v,$);let P=await(s?I(B,T):I(v,$));const C=u&&(N==="stream"||N==="response");if(u&&(j||C&&Y)){const K={};["status","statusText","headers"].forEach(Ce=>{K[Ce]=P[Ce]});const X=E.toFiniteNumber(P.headers.get("content-length")),[ve,ce]=j&&Gh(X,po(Zh(j),!0))||[];P=new r(ef(P.body,tf,ve,()=>{ce&&ce(),Y&&Y()}),K)}N=N||"text";let L=await f[E.findKey(f,N)||"text"](P,p);return!C&&Y&&Y(),await new Promise((K,X)=>{T0(K,X,{data:L,headers:ct.from(P.headers),status:P.status,statusText:P.statusText,config:p,request:B})})}catch(A){throw Y&&Y(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new Q("Network Error",Q.ERR_NETWORK,p,B),{cause:A.cause||A}):Q.from(A,A&&A.code,p,B)}}},G2=new Map,O0=e=>{let t=e?e.env:{};const{fetch:n,Request:r,Response:i}=t,s=[r,i,n];let o=s.length,l=o,c,d,u=G2;for(;l--;)c=s[l],d=u.get(c),d===void 0&&u.set(c,d=l?new Map:Q2(t)),u=d;return d};O0();const qc={http:p2,xhr:$2,fetch:{get:O0}};E.forEach(qc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const af=e=>`- ${e}`,Z2=e=>E.isFunction(e)||e===null||e===!1,L0={getAdapter:(e,t)=>{e=E.isArray(e)?e:[e];const{length:n}=e;let r,i;const s={};for(let o=0;o<n;o++){r=e[o];let l;if(i=r,!Z2(r)&&(i=qc[(l=String(r)).toLowerCase()],i===void 0))throw new Q(`Unknown adapter '${l}'`);if(i&&(E.isFunction(i)||(i=i.get(t))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(af).join(`
`):" "+af(o[0]):"as no adapter specified";throw new Q("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i},adapters:qc};function El(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hi(null,e)}function of(e){return El(e),e.headers=ct.from(e.headers),e.data=Pl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),L0.getAdapter(e.adapter||Ts.adapter,e)(e).then(function(r){return El(e),r.data=Pl.call(e,e.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return M0(r)||(El(e),r&&r.response&&(r.response.data=Pl.call(e,e.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const D0="1.12.2",Yo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const lf={};Yo.transitional=function(t,n,r){function i(s,o){return"[Axios v"+D0+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(t===!1)throw new Q(i(o," has been removed"+(n?" in "+n:"")),Q.ERR_DEPRECATED);return n&&!lf[o]&&(lf[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,l):!0}};Yo.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function J2(e,t,n){if(typeof e!="object")throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const l=e[s],c=l===void 0||o(l,s,e);if(c!==!0)throw new Q("option "+s+" must be "+c,Q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Q("Unknown option "+s,Q.ERR_BAD_OPTION)}}const Ma={assertOptions:J2,validators:Yo},Bt=Ma.validators;let cr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Xh,response:new Xh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=gr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Ma.assertOptions(r,{silentJSONParsing:Bt.transitional(Bt.boolean),forcedJSONParsing:Bt.transitional(Bt.boolean),clarifyTimeoutError:Bt.transitional(Bt.boolean)},!1),i!=null&&(E.isFunction(i)?n.paramsSerializer={serialize:i}:Ma.assertOptions(i,{encode:Bt.function,serialize:Bt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ma.assertOptions(n,{baseUrl:Bt.spelling("baseURL"),withXsrfToken:Bt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&E.merge(s.common,s[n.method]);s&&E.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=ct.concat(o,s);const l=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const d=[];this.interceptors.response.forEach(function(v){d.push(v.fulfilled,v.rejected)});let u,f=0,h;if(!c){const p=[of.bind(this),void 0];for(p.unshift(...l),p.push(...d),h=p.length,u=Promise.resolve(n);f<h;)u=u.then(p[f++],p[f++]);return u}h=l.length;let m=n;for(;f<h;){const p=l[f++],v=l[f++];try{m=p(m)}catch(y){v.call(this,y);break}}try{u=of.call(this,m)}catch(p){return Promise.reject(p)}for(f=0,h=d.length;f<h;)u=u.then(d[f++],d[f++]);return u}getUri(t){t=gr(this.defaults,t);const n=z0(t.baseURL,t.url,t.allowAbsoluteUrls);return P0(n,t.params,t.paramsSerializer)}};E.forEach(["delete","get","head","options"],function(t){cr.prototype[t]=function(n,r){return this.request(gr(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,l){return this.request(gr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}cr.prototype[t]=n(),cr.prototype[t+"Form"]=n(!0)});let ew=class F0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,l){r.reason||(r.reason=new hi(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new F0(function(i){t=i}),cancel:t}}};function tw(e){return function(n){return e.apply(null,n)}}function nw(e){return E.isObject(e)&&e.isAxiosError===!0}const Vc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vc).forEach(([e,t])=>{Vc[t]=e});function I0(e){const t=new cr(e),n=g0(cr.prototype.request,t);return E.extend(n,cr.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return I0(gr(e,i))},n}const xe=I0(Ts);xe.Axios=cr;xe.CanceledError=hi;xe.CancelToken=ew;xe.isCancel=M0;xe.VERSION=D0;xe.toFormData=Vo;xe.AxiosError=Q;xe.Cancel=xe.CanceledError;xe.all=function(t){return Promise.all(t)};xe.spread=tw;xe.isAxiosError=nw;xe.mergeConfig=gr;xe.AxiosHeaders=ct;xe.formToJSON=e=>R0(E.isHTMLForm(e)?new FormData(e):e);xe.getAdapter=L0.getAdapter;xe.HttpStatusCode=Vc;xe.default=xe;const{Axios:Q4,AxiosError:G4,CanceledError:Z4,isCancel:J4,CancelToken:eN,VERSION:tN,all:nN,Cancel:rN,isAxiosError:iN,spread:sN,toFormData:aN,AxiosHeaders:oN,HttpStatusCode:lN,formToJSON:cN,getAdapter:dN,mergeConfig:uN}=xe,V=xe.create({baseURL:"/api/v1"}),cf=typeof window<"u"?localStorage.getItem("access_token"):null;cf&&(V.defaults.headers.common.Authorization=`Bearer ${cf}`);function df(e){e?V.defaults.headers.common.Authorization=`Bearer ${e}`:delete V.defaults.headers.common.Authorization}V.interceptors.request.use(e=>{try{const t=(e.url||"").toLowerCase();if(!(t.includes("/auth/login")||t.includes("/auth/register")||t.includes("/auth/refresh"))){const r=localStorage.getItem("access_token");r&&(e.headers=e.headers||{},e.headers.Authorization=`Bearer ${r}`)}}catch{}return e});let kr=!1,Yc=[];function ta(e){Yc.forEach(t=>t(e)),Yc=[]}V.interceptors.response.use(e=>e,async e=>{var r;const t=e.config;if(!t)return Promise.reject(e);if(((r=e.response)==null?void 0:r.status)===401&&!t._retry){t._retry=!0;try{if(kr)return new Promise((d,u)=>{Yc.push(f=>{f?(t.headers.Authorization=`Bearer ${f}`,d(V(t))):u(e)})});kr=!0;const i=localStorage.getItem("refresh_token");if(!i){ta(null),kr=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(e)}const o=(await xe.post("/api/v1/auth/refresh",{refresh_token:i})).data,l=o==null?void 0:o.access_token,c=o==null?void 0:o.refresh_token;if(l)return localStorage.setItem("access_token",l),c&&localStorage.setItem("refresh_token",c),V.defaults.headers.common.Authorization=`Bearer ${l}`,ta(l),kr=!1,t.headers.Authorization=`Bearer ${l}`,V(t);ta(null),kr=!1}catch{ta(null),kr=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(e)}}return Promise.reject(e)});const B0=w.createContext(void 0);function rw({children:e}){const[t,n]=w.useState(null),[r,i]=w.useState(null),[s,o]=w.useState(!0);w.useEffect(()=>{(async()=>{const d=localStorage.getItem("access_token"),u=localStorage.getItem("user");if(d&&u)try{await V.get("/auth/me"),n(JSON.parse(u)),i(d)}catch{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")}o(!1)})()},[]),w.useEffect(()=>{df(r)},[r]);const l=w.useMemo(()=>({user:t,accessToken:r,loading:s,login:async(c,d)=>{const u=await V.post("/auth/login",{email:c,password:d}),{access_token:f,refresh_token:h,user:m}=u.data;n(m),i(f),localStorage.setItem("access_token",f),h&&localStorage.setItem("refresh_token",h),localStorage.setItem("user",JSON.stringify(m)),df(f)},register:async(c,d,u)=>{await V.post("/auth/register",{email:c,password:d,full_name:u})},logout:()=>{n(null),i(null),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")},updateUser:c=>{n(d=>{const u={...d||{},...c};try{localStorage.setItem("user",JSON.stringify(u))}catch{}return u})}}),[t,r,s]);return a.jsx(B0.Provider,{value:l,children:e})}function Ft(){const e=w.useContext(B0);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}function uf(){const{user:e}=Ft();return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"hero",children:a.jsxs("div",{className:"container hero-inner",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsx("p",{className:"kicker",children:"Welcome to"}),a.jsx("h1",{className:"headline",children:"Everyday Essentials, Thoughtfully Made"}),a.jsx("p",{className:"subhead",children:"Curated apparel and accessories crafted for comfort, durability, and timeless style."}),e?a.jsxs("div",{className:"hero-ctas",children:[a.jsx(U,{to:"/about",className:"btn btn-primary",children:"Learn More"}),a.jsx(U,{to:"/shop",className:"btn btn-ghost",children:"Visit Shop"})]}):a.jsxs("div",{className:"hero-ctas",children:[a.jsx(U,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),a.jsx(U,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]}),a.jsxs("div",{className:"hero-images",children:[a.jsx("img",{src:"/images/hero-1.jpg",alt:"Lifestyle banner"}),a.jsx("img",{src:"/images/hero-2.jpg",alt:"Crafted details"})]})]})}),!e&&a.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:a.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[a.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to See More?"}),a.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to explore our full collections, view features, and start shopping!"}),a.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[a.jsx(U,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),a.jsx(U,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),e&&a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"About Us"}),a.jsx("p",{className:"lead",children:"We’re a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance. Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care."}),a.jsxs("div",{className:"cards three",children:[a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"What we do"}),a.jsx("p",{children:"From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use."})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"How we work"}),a.jsx("p",{children:"Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what’s delivered."})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"Our promise"}),a.jsx("p",{children:"Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition."})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Our Mission"}),a.jsx("p",{className:"lead",children:"Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Material-first design choices with soft-hand, responsibly sourced textiles."}),a.jsx("li",{children:"Timeless palettes and silhouettes that pair across wardrobes."}),a.jsx("li",{children:"Continuous improvements guided by real customer feedback."})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Why Choose Us"}),a.jsxs("div",{className:"grid-2",children:[a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Quality"}),a.jsx("h3",{children:"Built to last"}),a.jsx("p",{children:"Reinforced stitching, reliable hardware, and color-fast finishes keep pieces in rotation longer."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Trust"}),a.jsx("h3",{children:"Transparent sourcing"}),a.jsx("p",{children:"Clear specs, care guides, and honest descriptions so purchasing decisions are easy and informed."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Care"}),a.jsx("h3",{children:"Responsive support"}),a.jsx("p",{children:"Friendly, prompt help from real people for sizing, care, and post-purchase questions."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Value"}),a.jsx("h3",{children:"Fair pricing"}),a.jsx("p",{children:"Essentials priced for everyday use without compromising on materials or finish."})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"What Customers Say"}),a.jsxs("div",{className:"testimonials",children:[a.jsxs("blockquote",{className:"quote",children:["“The fabric quality is excellent and the fit stays consistent after washes. Great staples.”",a.jsx("footer",{children:"— A. Perera"})]}),a.jsxs("blockquote",{className:"quote",children:["“Support was quick to help with sizing. Delivery was on time and packaging was neat.”",a.jsx("footer",{children:"— S. Fernando"})]}),a.jsxs("blockquote",{className:"quote",children:["“Clean design and no loud branding. Exactly what I wanted for daily wear.”",a.jsx("footer",{children:"— N. Jayasuriya"})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Special Highlights"}),a.jsxs("div",{className:"cards three",children:[a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Seasonal Edit"}),a.jsx("p",{children:"Limited colorways and refreshed textures—perfect for the current season."}),a.jsx(U,{to:"/shop",className:"btn btn-link",children:"Explore"})]}),a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Bundle Savings"}),a.jsx("p",{children:"Save on curated combos like tee + cap or backpack + organizer."}),a.jsx(U,{to:"/shop",className:"btn btn-link",children:"View Bundles"})]}),a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Student Perks"}),a.jsx("p",{children:"Verified students enjoy an extra 10% off select collections."}),a.jsx(U,{to:"/shop",className:"btn btn-link",children:"Check Eligibility"})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Delivery & Returns"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Fast Dispatch"}),a.jsx("p",{children:"Orders ship within 1–2 business days with tracked delivery."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Easy Returns"}),a.jsx("p",{children:"30-day returns on unused items in original condition and packaging."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Care Guides"}),a.jsx("p",{children:"Simple wash and storage instructions included with every order."})]})]})]})})]}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
        }
        *{box-sizing:border-box}
        body{background:var(--bg); color:var(--text)}
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(28px,4vw,48px);line-height:1.1;margin:0 0 12px}
        .subhead{color:var(--muted);font-size:clamp(16px,2.2vw,18px)}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 16px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .btn-link{background:transparent;border:none;color:var(--brand);padding:0}
        .hero{padding:64px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 50%)}
        .hero-inner{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center}
        .hero-images{display:grid;gap:14px}
        .hero-images img{width:100%;height:280px;object-fit:cover;border-radius:14px;border:1px solid var(--line);background:var(--card)}
        .hero-ctas{display:flex;gap:12px;margin-top:16px}
        .section{padding:56px 0;border-top:1px solid var(--line)}
        .section.alt{background:var(--surface)}
        .section-title{margin:0 0 16px;font-size:24px}
        .lead{color:var(--muted);margin:0 0 18px;max-width:70ch}
        .bullets{margin:0;padding:0 0 0 18px;color:var(--text)}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .cards.three{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .info-card,.promo-card,.feature,.mini-feature{border:1px solid var(--line);background:var(--card);padding:16px;border-radius:12px}
        .feature-badge{display:inline-block;font-size:12px;padding:4px 8px;border-radius:999px;background:var(--surface-alt);border:1px solid var(--line);color:var(--muted);margin-bottom:8px}
        .testimonials{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
        .quote{margin:0;border:1px solid var(--line);background:var(--card);padding:16px;border-radius:12px;color:var(--muted);font-style:italic}
        .quote footer{margin-top:10px;color:var(--text);font-style:normal}
        .contact{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:8px 0 18px}
        .contact-cta{display:flex;gap:12px}
        @media (max-width:900px){
          .hero-inner{grid-template-columns:1fr}
          .grid-2,.grid-3,.cards.three,.testimonials,.contact{grid-template-columns:1fr}
          .hero-images img{height:220px}
        }
      `})]})}function $t(e,t="success",n=2200){const r=new CustomEvent("app:toast",{detail:{message:e,type:t,duration:n}});window.dispatchEvent(r)}const H0=w.createContext(void 0);function iw({children:e}){const{user:t}=Ft(),[n,r]=w.useState([]),[i,s]=w.useState(!1);w.useEffect(()=>{if(typeof window<"u"&&(window.location.pathname==="/login"||window.location.pathname==="/register"))return;if(!(t!=null&&t.email)){r([]);return}(async()=>{s(!0);try{const d=(await V.get("/cart")).data;r(d.items||[]),localStorage.removeItem(`cart_${t.email}`),localStorage.removeItem("cart_guest")}catch(c){console.error("Failed to load cart from server:",c);try{const d=localStorage.getItem(`cart_${t.email}`);if(d){const u=JSON.parse(d);if(u.length>0){await V.post("/cart/sync",u);const f=await V.get("/cart");r(f.data.items||[]),localStorage.removeItem(`cart_${t.email}`)}}}catch(d){console.error("Failed to sync cart:",d)}}finally{s(!1)}})()},[t==null?void 0:t.email]);const o=w.useMemo(()=>{const c=!!localStorage.getItem("access_token");return{items:n,count:n.reduce((d,u)=>d+u.qty,0),isAuthenticated:c,isLoading:i,add:(d,u=1)=>{if(!c){alert("Please login or register to add items to cart"),window.location.href="/login";return}const f=crypto.randomUUID();r(h=>h.find(p=>p.productId===d.productId)?h.map(p=>p.productId===d.productId?{...p,qty:p.qty+u}:p):[...h,{...d,id:f,qty:u}]);try{$t(`${d.name} added to cart`,"success")}catch{}V.post("/cart/add",{productId:d.productId,slug:d.slug,name:d.name,price:d.price,qty:u,image:d.image}).then(()=>V.get("/cart")).then(h=>{r(h.data.items||[])}).catch(h=>{console.error("Failed to add item to cart:",h),$t("Failed to sync cart with server","error"),V.get("/cart").then(m=>{r(m.data.items||[])}).catch(()=>{})})},remove:d=>{r(u=>u.filter(f=>f.id!==d)),V.delete(`/cart/remove/${d}`).catch(u=>{console.error("Failed to remove item from cart:",u),V.get("/cart").then(f=>{r(f.data.items||[])}).catch(()=>{})})},update:(d,u)=>{u<1||(r(f=>f.map(h=>h.id===d?{...h,qty:u}:h)),V.put(`/cart/update/${d}`,null,{params:{qty:u}}).catch(f=>{console.error("Failed to update cart item:",f),V.get("/cart").then(h=>{r(h.data.items||[])}).catch(()=>{})}))},clear:()=>{r([]),V.delete("/cart/clear").catch(d=>{console.error("Failed to clear cart:",d),V.get("/cart").then(u=>{r(u.data.items||[])}).catch(()=>{})})}}},[n,i]);return a.jsx(H0.Provider,{value:o,children:e})}function fi(){const e=w.useContext(H0);if(!e)throw new Error("useCart must be used within CartProvider");return e}async function mo(e){const t=document.querySelector(".cart-link .badge");if(!e||!t)return;const n=e.getBoundingClientRect(),r=t.getBoundingClientRect();let i;if(e instanceof HTMLImageElement){const d=document.createElement("img");d.src=e.currentSrc||e.src,d.alt="",i=d}else{const d=document.createElement("div");d.style.background="rgba(255,255,255,0.9)",i=d}i.style.position="fixed",i.style.left=`${n.left}px`,i.style.top=`${n.top}px`,i.style.width=`${n.width}px`,i.style.height=`${n.height}px`,i.style.borderRadius="12px",i.style.boxShadow="0 10px 30px rgba(0,0,0,0.35)",i.style.zIndex="3000",i.style.pointerEvents="none",document.body.appendChild(i);const s=r.left+r.width/2-(n.left+n.width/2),o=r.top+r.height/2-(n.top+n.height/2),l=[{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${s*.2}px, ${o*.2}px) scale(0.9)`,opacity:.9},{transform:`translate(${s}px, ${o}px) scale(0.15)`,opacity:.1}],c={duration:600,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"};await i.animate(l,c).finished.catch(()=>{}),i.remove();try{t.classList.add("sparkle"),setTimeout(()=>t.classList.remove("sparkle"),700)}catch{}}function sw(){const{slug:e}=c0(),[t,n]=w.useState(null),[r,i]=w.useState(0),{add:s}=fi(),o=Lt(),l=w.useRef(null);if(w.useEffect(()=>{e&&xe.get(`/api/v1/products/${e}`).then(h=>n(h.data))},[e]),!t)return a.jsx("div",{className:"container",style:{padding:24},children:"Loading..."});const c=t.images&&t.images.length>0?t.images:["https://via.placeholder.com/600x400"],d=()=>{i(h=>(h+1)%c.length)},u=()=>{i(h=>(h-1+c.length)%c.length)},f=h=>{i(h)};return a.jsx("div",{className:"container",style:{padding:24},children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",boxShadow:"var(--shadow)"},children:[a.jsx("img",{ref:l,src:c[r],alt:`${t.name} - Image ${r+1}`,style:{width:"100%",display:"block",aspectRatio:"4/3",objectFit:"cover"}}),c.length>1&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:u,style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:h=>h.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:h=>h.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Previous image",children:"‹"}),a.jsx("button",{onClick:d,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:h=>h.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:h=>h.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Next image",children:"›"}),a.jsxs("div",{style:{position:"absolute",bottom:12,right:12,background:"rgba(0,0,0,0.6)",color:"white",padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:500},children:[r+1," / ",c.length]})]})]}),c.length>1&&a.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto",paddingBottom:8},children:c.map((h,m)=>a.jsx("button",{onClick:()=>f(m),style:{border:r===m?"2px solid var(--brand)":"2px solid transparent",borderRadius:8,overflow:"hidden",cursor:"pointer",padding:0,background:"transparent",flexShrink:0,opacity:r===m?1:.6,transition:"opacity 0.2s, border-color 0.2s"},onMouseEnter:p=>p.currentTarget.style.opacity="1",onMouseLeave:p=>p.currentTarget.style.opacity=r===m?"1":"0.6","aria-label":`View image ${m+1}`,children:a.jsx("img",{src:h,alt:`${t.name} thumbnail ${m+1}`,style:{width:80,height:80,objectFit:"cover",display:"block"}})},m))})]}),a.jsxs("div",{children:[a.jsx("h1",{style:{marginTop:0},children:t.name}),a.jsxs("div",{className:"price",style:{fontSize:22},children:["LKR ",t.price]}),a.jsx("p",{style:{color:"var(--muted)"},children:t.description||"A beautiful product made for you."}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{className:"btn",onClick:()=>{l.current&&mo(l.current),s({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]})},children:"Add to Cart"}),a.jsx("button",{className:"btn",onClick:()=>{l.current&&mo(l.current),s({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]}),o("/cart")},children:"Buy Now"})]})]})]})})}function aw(){var g;const{login:e}=Ft(),[t,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(null),[l,c]=w.useState(!1),[d,u]=w.useState(!1),[f,h]=w.useState(!0),m=Lt(),p=Nt(),v=w.useRef(null),y=((g=p.state)==null?void 0:g.from)||"/";w.useEffect(()=>{s&&v.current&&v.current.focus()},[s]),w.useEffect(()=>{let b;return d&&(b=window.setTimeout(()=>u(!1),5e3)),()=>{b&&window.clearTimeout(b)}},[d]);async function x(b){if(b.preventDefault(),o(null),!t||!r){o("Email and password are required.");return}try{c(!0),await e(t,r),f&&typeof localStorage<"u"?localStorage.setItem("remember","1"):localStorage.removeItem("remember"),m(y)}catch{o("Invalid credentials")}finally{c(!1)}}return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"login-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Welcome back"}),a.jsx("p",{className:"subhead",children:"Sign in to manage orders, track deliveries, and update account details."})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container login-wrap",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Login"}),a.jsx("div",{ref:v,tabIndex:-1,"aria-live":"assertive","aria-atomic":"true",className:"live",children:s&&a.jsx("div",{className:"alert error",children:s})}),a.jsxs("form",{className:"form",onSubmit:x,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:b=>n(b.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("div",{className:"label-row",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsx(U,{to:"/forgot",className:"link",children:"Forgot password?"})]}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"password",type:d?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:r,onChange:b=>i(b.target.value),required:!0}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":d?"Hide password":"Show password","aria-pressed":d,"aria-controls":"password",onClick:()=>u(b=>!b),title:d?"Hide password":"Show password",children:d?"🙈":"👁️"})]}),a.jsx("p",{className:"tiny muted",children:"Password visibility will auto-hide after 5 seconds."})]}),a.jsxs("div",{className:"row between",children:[a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:f,onChange:b=>h(b.target.checked)}),a.jsx("span",{children:"Remember me"})]}),a.jsxs("span",{className:"tiny muted",children:["Need an account? ",a.jsx(U,{to:"/register",className:"link",children:"Register"})]})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,children:l?"Signing in…":"Login"}),a.jsxs("div",{className:"or",children:[a.jsx("span",{className:"line"}),a.jsx("span",{className:"muted",children:"or continue with"}),a.jsx("span",{className:"line"})]}),a.jsxs("div",{className:"oauth",children:[a.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>alert("Coming soon"),children:"Google"}),a.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>alert("Coming soon"),children:"GitHub"})]})]})]}),a.jsxs("aside",{className:"panel tips",children:[a.jsx("h3",{children:"Tips"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Use the email registered during checkout."}),a.jsx("li",{children:"Passwords are case-sensitive; check CAPS LOCK."}),a.jsx("li",{children:"After multiple failed attempts, wait a minute before retrying."})]}),a.jsxs("div",{className:"support",children:[a.jsx("p",{className:"muted",children:"Still need help?"}),a.jsx(U,{to:"/contact",className:"btn",children:"Contact support"})]})]})]})}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .login-hero{padding:44px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}
        .login-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 12px;font-size:20px}
        .form{display:grid;gap:12px}
        .field{display:grid;gap:6px}
        .label-row{display:flex;justify-content:space-between;align-items:center}
        label{font-size:14px;color:var(--muted)}
        input{height:40px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .pw-wrap{position:relative}
        .pw-toggle{position:absolute;right:6px;top:50%;transform:translateY(-50%);height:28px;width:32px;border-radius:8px;border:1px solid var(--line);background:var(--surface-alt);color:var(--text)}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .row.between{display:flex;justify-content:space-between;align-items:center}
        .check{display:flex;align-items:center;gap:8px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .or{display:flex;align-items:center;gap:8px;margin:8px 0}
        .line{flex:1;height:1px;background:var(--line)}
        .oauth{display:flex;gap:8px;flex-wrap:wrap}
        .tips h3{margin:0 0 8px}
        .list{list-style:disc;padding-left:18px;margin:0 0 8px}
        .support{display:flex;gap:8px;align-items:center}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px;border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .login-wrap{grid-template-columns:1fr}
        }
        .link{color:var(--brand);text-decoration:none}
        .link:hover{text-decoration:underline}
      `})]})}function ow(){const{register:e}=Ft(),[t,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(""),[l,c]=w.useState(""),[d,u]=w.useState(!1),[f,h]=w.useState(!0),[m,p]=w.useState(!1),[v,y]=w.useState(!1),[x,g]=w.useState(null),[b,k]=w.useState(null),[j,S]=w.useState(!1),N=Lt(),_=w.useRef(null);w.useEffect(()=>{(x||b)&&_.current&&_.current.focus()},[x,b]);const z=w.useMemo(()=>{let D=0;return r.length>=8&&D++,/[A-Z]/.test(r)&&D++,/[a-z]/.test(r)&&D++,/\d/.test(r)&&D++,/[^A-Za-z0-9]/.test(r)&&D++,D},[r]),T=["Very weak","Weak","Fair","Good","Strong","Excellent"][z];async function I(D){if(D.preventDefault(),k(null),g(null),!l||!t||!r||!s){k("All fields are required.");return}if(r!==s){k("Passwords do not match.");return}if(!d){k("Please agree to the Terms and Privacy Policy.");return}try{S(!0),await e(t,r,l),g("Check the inbox to verify the account. Redirecting to Login…"),setTimeout(()=>N("/login"),1e3)}catch{k("Could not create the account. Try again later.")}finally{S(!1)}}return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"register-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Create an account"}),a.jsx("p",{className:"subhead",children:"Join to track orders, save preferences, and get faster checkout."})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container reg-wrap",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Register"}),a.jsxs("div",{ref:_,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[x&&a.jsx("div",{className:"alert success",children:x}),b&&a.jsx("div",{className:"alert error",children:b})]}),a.jsxs("form",{className:"form",onSubmit:I,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"fullName",children:"Full name"}),a.jsx("input",{id:"fullName",type:"text",autoComplete:"name",placeholder:"e.g., Ishfaque Mif",value:l,onChange:D=>c(D.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:D=>n(D.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"password",type:m?"text":"password",autoComplete:"new-password",placeholder:"At least 8 characters",value:r,onChange:D=>i(D.target.value),required:!0,"aria-describedby":"pw-help"}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":m?"Hide password":"Show password","aria-pressed":m,"aria-controls":"password",onClick:()=>p(D=>!D),children:m?"🙈":"👁️"})]}),a.jsx("div",{id:"pw-help",className:"tiny muted",children:"Use 8+ chars with a mix of upper/lowercase, numbers, and a symbol."}),a.jsxs("div",{className:"meter","aria-hidden":"true",children:[a.jsx("span",{className:`m${z}`}),a.jsx("em",{className:"muted",children:T})]}),a.jsxs("ul",{className:"reqs",children:[a.jsx("li",{className:r.length>=8?"ok":"",children:"8+ characters"}),a.jsx("li",{className:/[A-Z]/.test(r)?"ok":"",children:"Uppercase letter"}),a.jsx("li",{className:/[a-z]/.test(r)?"ok":"",children:"Lowercase letter"}),a.jsx("li",{className:/\d/.test(r)?"ok":"",children:"Number"}),a.jsx("li",{className:/[^A-Za-z0-9]/.test(r)?"ok":"",children:"Symbol"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"confirm",children:"Confirm password"}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"confirm",type:v?"text":"password",autoComplete:"new-password",placeholder:"Re-enter password",value:s,onChange:D=>o(D.target.value),required:!0}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":v?"Hide password":"Show password","aria-pressed":v,"aria-controls":"confirm",onClick:()=>y(D=>!D),children:v?"🙈":"👁️"})]}),s&&s!==r&&a.jsx("div",{className:"tiny error-text",children:"Passwords do not match."})]}),a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:d,onChange:D=>u(D.target.checked),required:!0}),a.jsxs("span",{children:["I agree to the ",a.jsx(U,{to:"/terms",className:"link",children:"Terms"})," and"," ",a.jsx(U,{to:"/privacy",className:"link",children:"Privacy Policy"}),"."]})]}),a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:f,onChange:D=>h(D.target.checked)}),a.jsx("span",{children:"Send occasional product updates and offers."})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:j,children:j?"Creating…":"Create account"}),a.jsxs("div",{className:"row between",children:[a.jsx("span",{className:"tiny muted",children:"Already have an account?"}),a.jsx(U,{to:"/login",className:"link",children:"Login"})]})]})]}),a.jsxs("aside",{className:"panel tips",children:[a.jsx("h3",{children:"Why create an account?"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Faster checkout and saved details."}),a.jsx("li",{children:"Order history and tracking."}),a.jsx("li",{children:"Early access to limited releases."})]}),a.jsxs("div",{className:"support",children:[a.jsx("p",{className:"muted",children:"Need help?"}),a.jsx(U,{to:"/contact",className:"btn",children:"Contact support"})]})]})]})}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --positive:#1fbf75;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .register-hero{padding:44px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}
        .reg-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 12px;font-size:20px}
        .form{display:grid;gap:12px}
        .field{display:grid;gap:6px}
        label{font-size:14px;color:var(--muted)}
        input{height:40px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .pw-wrap{position:relative}
        .pw-toggle{position:absolute;right:6px;top:50%;transform:translateY(-50%);height:28px;width:32px;border-radius:8px;border:1px solid var(--line);background:var(--surface-alt);color:var(--text)}
        .meter{display:flex;align-items:center;gap:8px;margin-top:6px}
        .meter span{display:block;height:6px;border-radius:999px;background:var(--surface-alt);position:relative;flex:1;overflow:hidden}
        .meter span::after{content:'';position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,#ff6363,#ffd166,#06d6a0);width:0%}
        .meter span.m0::after{width:5%}
        .meter span.m1::after{width:20%}
        .meter span.m2::after{width:40%}
        .meter span.m3::after{width:60%}
        .meter span.m4::after{width:80%}
        .meter span.m5::after{width:100%}
        .reqs{display:grid;gap:4px;font-size:12px;color:var(--muted);margin:6px 0 0;padding-left:16px;list-style:disc}
        .reqs .ok{color:#9be7c4}
        .check{display:flex;align-items:center;gap:8px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .row.between{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
        .list{list-style:disc;padding-left:18px;margin:0 0 8px}
        .support{display:flex;gap:8px;align-items:center}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px}
        .alert.success{border:1px solid rgba(31,191,117,.4);background:rgba(31,191,117,.08);color:#c7f5df}
        .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .reg-wrap{grid-template-columns:1fr}
        }
        .link{color:var(--brand);text-decoration:none}
        .link:hover{text-decoration:underline}
        .error-text{color:#ffbcbc}
      `})]})}function lw(){const{items:e,update:t,remove:n,clear:r}=fi(),i=Lt(),[s,o]=w.useState(!1),l=w.useMemo(()=>e.reduce((f,h)=>f+h.price*h.qty,0),[e]),c=(f,h)=>{h<1||Number.isNaN(h)||t(f,h)},d=()=>o(!0),u=encodeURIComponent(`Hello, I have transferred LKR ${l.toFixed(2)} for my order. Here is my payment confirmation.`);return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"cart-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Your Cart"}),a.jsx("p",{className:"subhead",children:"Review items and complete checkout using bank transfer."})]})}),a.jsx("section",{className:"section",children:a.jsx("div",{className:"container",children:e.length===0?a.jsxs("div",{className:"empty",children:[a.jsx("div",{className:"empty-anim","aria-hidden":!0,children:a.jsxs("svg",{className:"cart-svg",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsxs("g",{className:"animate-cart",children:[a.jsx("rect",{x:"26",y:"36",width:"60",height:"34",rx:"6",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.08)"}),a.jsx("path",{d:"M20 36h10M86 36h14",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("path",{d:"M32 70l-4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("path",{d:"M80 70l4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("circle",{cx:"40",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"}),a.jsx("circle",{cx:"72",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"})]}),a.jsxs("g",{className:"float-bubbles",children:[a.jsx("circle",{cx:"54",cy:"26",r:"3",fill:"var(--brand)"}),a.jsx("circle",{cx:"68",cy:"18",r:"2",fill:"var(--brand)"}),a.jsx("circle",{cx:"44",cy:"16",r:"2.5",fill:"var(--brand)"})]})]})}),a.jsx("p",{children:"Your cart is empty"}),a.jsx("div",{className:"actions",children:a.jsx(U,{to:"/shop",className:"btn btn-primary",children:"Continue Shopping"})})]}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"cart-wrap",children:[a.jsx("div",{className:"table-wrap",role:"region","aria-label":"Cart items",children:a.jsxs("table",{className:"cart-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Product"}),a.jsx("th",{children:"Qty"}),a.jsx("th",{children:"Price"}),a.jsx("th",{children:"Total"}),a.jsx("th",{children:"Action"})]})}),a.jsx("tbody",{children:e.map(f=>a.jsxs("tr",{children:[a.jsx("td",{className:"prod-cell",children:a.jsxs("div",{className:"prod",children:[f.image?a.jsx("img",{src:f.image,alt:f.name}):a.jsx("div",{className:"img-fallback","aria-hidden":!0}),a.jsxs("div",{className:"prod-meta",children:[a.jsx(U,{to:`/product/${f.slug}`,className:"prod-name",children:f.name}),a.jsxs("div",{className:"sku",children:["ID: ",f.id]})]})]})}),a.jsx("td",{className:"qty-cell",children:a.jsxs("div",{className:"qty",children:[a.jsx("button",{className:"btn-qty","aria-label":"Decrease quantity",onClick:()=>c(f.id,f.qty-1),children:"−"}),a.jsx("input",{type:"number",min:1,inputMode:"numeric",value:f.qty,onChange:h=>c(f.id,Number(h.target.value)),"aria-label":`Quantity for ${f.name}`}),a.jsx("button",{className:"btn-qty","aria-label":"Increase quantity",onClick:()=>c(f.id,f.qty+1),children:"+"})]})}),a.jsxs("td",{children:["LKR ",Number(f.price).toFixed(2)]}),a.jsxs("td",{children:["LKR ",(f.price*f.qty).toFixed(2)]}),a.jsx("td",{children:a.jsx("button",{className:"btn btn-ghost",onClick:()=>n(f.id),children:"Remove"})})]},f.id))}),a.jsx("tfoot",{children:a.jsxs("tr",{children:[a.jsx("td",{colSpan:3,className:"right",children:"Subtotal"}),a.jsxs("td",{colSpan:2,className:"subtotal",children:["LKR ",l.toFixed(2)]})]})})]})}),a.jsxs("aside",{className:"summary",children:[a.jsx("h2",{className:"summary-title",children:"Order Summary"}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Subtotal"}),a.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Shipping"}),a.jsx("span",{children:"Calculated at checkout"})]}),a.jsxs("div",{className:"summary-total",children:[a.jsx("span",{children:"Estimated Total"}),a.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),a.jsxs("div",{className:"summary-actions",children:[a.jsx("button",{className:"btn btn-primary",onClick:d,children:"Proceed with Bank Transfer"}),a.jsx("button",{className:"btn btn-ghost",onClick:r,children:"Clear Cart"}),a.jsx(U,{className:"btn",to:"/shop",children:"Continue Shopping"})]}),s&&a.jsxs("div",{className:"transfer",children:[a.jsx("h3",{children:"Bank Transfer Instructions"}),a.jsx("p",{className:"muted",children:"Please transfer the estimated total amount to the bank account listed below. After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification."}),a.jsxs("div",{className:"bank-box",children:[a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Name"}),a.jsx("span",{children:"Ishfaque Mif"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Bank"}),a.jsx("span",{children:"BOC"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Branch"}),a.jsx("span",{children:"Puttalam"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Account No."}),a.jsx("span",{children:"89001476"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Amount"}),a.jsxs("span",{children:["$",l.toFixed(2)]})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Reference"}),a.jsx("span",{children:"Order by your full name"})]})]}),a.jsxs("div",{className:"transfer-actions",children:[a.jsx("a",{className:"btn btn-primary",href:`https://wa.me/94768976222?text=${u}`,target:"_blank",rel:"noopener noreferrer",children:"Send Confirmation via WhatsApp"}),a.jsxs("button",{className:"btn-cta mega-cta",onClick:f=>{const h=f.currentTarget,m=h.getBoundingClientRect(),p=f.clientX-m.left,v=f.clientY-m.top,y=document.createElement("span");y.className="burst",y.style.left=`${p}px`,y.style.top=`${v}px`,h.appendChild(y),setTimeout(()=>y.remove(),800),h.classList.add("pressed"),setTimeout(()=>h.classList.remove("pressed"),150),i("/checkout")},onMouseMove:f=>{const h=f.currentTarget,m=h.getBoundingClientRect(),p=m.left+m.width/2,v=m.top+m.height/2,y=(f.clientX-p)/(m.width/2),x=(f.clientY-v)/(m.height/2),g=8;h.style.setProperty("--tx",`${y*6}px`),h.style.setProperty("--ty",`${x*6}px`),h.style.setProperty("--rx",`${-x*g}deg`),h.style.setProperty("--ry",`${y*g}deg`),h.style.setProperty("--mx",`${(y+1)/2*100}%`)},onMouseLeave:f=>{const h=f.currentTarget;h.style.removeProperty("--tx"),h.style.removeProperty("--ty"),h.style.removeProperty("--rx"),h.style.removeProperty("--ry"),h.style.removeProperty("--mx")},title:"Optionally upload the payment screenshot on the order page","aria-label":"Go to order page",children:[a.jsx("span",{className:"mega-cta__bg","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__border","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__glow","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__sheen","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__text",children:"Go to Order Page"}),a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",style:{marginLeft:10},children:[a.jsx("path",{d:"M5 12h14"}),a.jsx("path",{d:"M12 5l7 7-7 7"})]})]})]}),a.jsx("p",{className:"note",children:"Optional: On the order/checkout page, include an upload option to attach the payment screenshot for records. Ensure the name and order reference match the WhatsApp message."})]})]})]})})})}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .cart-hero{padding:40px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}

        .empty{border:1px dashed var(--line);padding:16px;border-radius:12px;background:var(--surface);text-align:center}
        .empty-anim{display:flex;justify-content:center;margin:6px 0 10px}
        .cart-svg{width:120px;height:120px;filter:drop-shadow(0 6px 20px rgba(109,116,255,0.15))}
        .animate-cart{animation: cartFloat 2.6s ease-in-out infinite}
        .float-bubbles circle:nth-child(1){animation: bubbleUp 3s ease-in-out infinite}
        .float-bubbles circle:nth-child(2){animation: bubbleUp 2.6s ease-in-out infinite 0.3s}
        .float-bubbles circle:nth-child(3){animation: bubbleUp 2.2s ease-in-out infinite 0.6s}
        @keyframes cartFloat{
          0%,100%{ transform: translateY(0) }
          50%{ transform: translateY(-6px) }
        }
        @keyframes bubbleUp{
          0%{ transform: translateY(0); opacity:.8 }
          70%{ transform: translateY(-10px); opacity:.3 }
          100%{ transform: translateY(0); opacity:.8 }
        }
        .actions{margin-top:10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}

        .cart-wrap{display:grid;grid-template-columns:1.5fr .8fr;gap:16px}
        .table-wrap{overflow:auto;border:1px solid var(--line);border-radius:12px;background:var(--card)}
        table{width:100%;border-collapse:separate;border-spacing:0}
        thead th{position:sticky;top:0;background:var(--surface);text-align:left;padding:12px;border-bottom:1px solid var(--line)}
        tbody td{padding:12px;border-bottom:1px solid var(--line)}
        tfoot td{padding:12px;background:var(--surface);font-weight:700;border-top:1px solid var(--line)}
        .right{text-align:right}
        .subtotal{font-weight:800}

        .prod{display:grid;grid-template-columns:64px 1fr;gap:10px;align-items:center}
        .prod img,.img-fallback{width:64px;height:64px;border-radius:8px;object-fit:cover;border:1px solid var(--line);background:var(--surface)}
        .prod-name{color:var(--text);text-decoration:none;font-weight:600}
        .prod-name:hover{text-decoration:underline}
        .sku{font-size:12px;color:var(--muted)}

        .qty{display:flex;align-items:center;gap:8px}
        .btn-qty{width:28px;height:28px;border-radius:8px;border:1px solid var(--line);background:var(--surface);color:var(--text)}
        .qty input{width:64px;height:32px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);text-align:center}

        .summary{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:14px;position:sticky;top:16px;height:max-content}
        .summary-title{margin:0 0 8px;font-size:18px}
        .summary-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--line);color:var(--muted)}
        .summary-total{display:flex;justify-content:space-between;padding:10px 0;margin-top:6px;font-weight:800}
        .summary-actions{display:flex;flex-direction:column;gap:8px;margin-top:8px}

        .transfer{margin-top:12px;border:1px solid var(--line);background:var(--surface);border-radius:12px;padding:12px}
        .transfer h3{margin:0 0 6px}
        .muted{color:var(--muted)}
        .bank-box{margin:10px 0;border:1px solid var(--line);background:var(--card);border-radius:10px}
        .bank-box .row{display:flex;justify-content:space-between;padding:10px 12px;border-top:1px dashed var(--line)}
        .bank-box .row:first-child{border-top:none}
 .transfer-actions{display:flex;gap:8px;flex-wrap:wrap}
 /* Original CTA base (unchanged) */
        .btn-cta{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:10px;background:linear-gradient(90deg,var(--brand),#8a6bff);color:white;border:none;font-weight:700;box-shadow:0 10px 30px rgba(109,116,255,0.08);transition:transform .16s ease,box-shadow .16s ease,opacity .12s ease}
        .btn-cta:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(109,116,255,0.14);opacity:0.98}
        .btn-cta:active{transform:translateY(-1px)}
        .btn-cta:focus{outline:none;box-shadow:0 0 0 4px rgba(109,116,255,0.14),0 18px 40px rgba(109,116,255,0.14)}
        .btn-cta svg{opacity:.95}

        /* RED THEME MAX-ATTENTION CTA */
        .mega-cta{
          position:relative;
          overflow:hidden;
          isolation:isolate;
          border-radius:14px;
          padding:14px 22px;
          color:#0b0b11;
          background:#111;
          border:1px solid rgba(255,255,255,0.06);
          box-shadow:
            0 0 0 2px rgba(255, 68, 68, 0.28) inset,
            0 12px 30px rgba(255, 68, 68, 0.35),
            0 0 60px rgba(255, 80, 80, 0.30);
          transform:
            translate(var(--tx,0), var(--ty,0))
            rotateX(var(--rx,0)) rotateY(var(--ry,0));
          transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
          will-change: transform, box-shadow;
        }
        .mega-cta .mega-cta__bg{
          position:absolute; inset:0; z-index:0;
          background: radial-gradient(120% 180% at var(--mx,50%) 50%,
            #ff7a7a 0%, #ff4444 35%, #d62828 70%, #1d1a1a 92%);
          filter: saturate(1.15) brightness(1.05);
          transition: opacity .25s ease;
        }
        .mega-cta .mega-cta__border{
          position:absolute; inset:0; z-index:2; pointer-events:none;
          background:
            conic-gradient(from 0deg,
              rgba(255,255,255,0.0) 0 20%,
              rgba(255,255,255,0.55) 21% 23%,
              rgba(255,255,255,0.0) 24% 100%);
          mix-blend-mode:screen;
          animation: border-spin 2.2s linear infinite;
          opacity:.9;
        }
        @keyframes border-spin{
          0% { transform: rotate(0deg) scale(1.02); }
          100% { transform: rotate(360deg) scale(1.02); }
        }
        .mega-cta .mega-cta__glow{
          position:absolute; inset:-12%;
          background:
            radial-gradient(60% 60% at 50% 50%, rgba(255, 90, 90, 0.60), rgba(255,90,90,0) 60%),
            radial-gradient(80% 80% at 30% 120%, rgba(214,40,40,0.55), rgba(214,40,40,0) 70%);
          filter: blur(14px);
          z-index:0; pointer-events:none; opacity:.95;
          animation: glow-pulse 2.6s ease-in-out infinite;
        }
        @keyframes glow-pulse{
          0%,100%{ opacity:.75; }
          50%{ opacity:1; }
        }
        .mega-cta .mega-cta__sheen{
          position:absolute; inset:-35%; z-index:3; pointer-events:none;
          background: linear-gradient(110deg, rgba(255,255,255,0) 10%, rgba(255,255,255,0.32) 45%, rgba(255,255,255,0) 60%);
          transform: translateX(-60%);
          animation: sheen-scan 2.1s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @keyframes sheen-scan{
          0%{ transform: translateX(-60%) }
          50%{ transform: translateX(0%) }
          100%{ transform: translateX(60%) }
        }
        .mega-cta .mega-cta__text{
          position:relative; z-index:4; color:#fff;
          text-shadow:0 2px 10px rgba(0,0,0,0.4);
          letter-spacing:.2px;
        }
        .mega-cta:hover{
          box-shadow:
            0 0 0 2px rgba(255,255,255,0.08) inset,
            0 22px 60px rgba(255, 68, 68, 0.45),
            0 0 90px rgba(255, 80, 80, 0.40);
          filter: drop-shadow(0 12px 28px rgba(255, 64, 64, .32));
        }
        .mega-cta svg{ position:relative; z-index:4; color:#fff; }

        .mega-cta .burst{
          position:absolute; width:10px; height:10px; border-radius:999px;
          left:50%; top:50%; transform:translate(-50%,-50%);
          z-index:1; pointer-events:none;
          box-shadow:
            0 0 0 2px rgba(255,255,255,0.75),
            0 0 20px 4px rgba(255, 64, 64, 0.6);
          background: rgba(255,255,255,0.45);
          animation: burst-out .8s ease-out forwards;
        }
        @keyframes burst-out{
          0%{ opacity:0.95; transform:translate(-50%,-50%) scale(1); }
          70%{ opacity:0.4; transform:translate(-50%,-50%) scale(16); }
          100%{ opacity:0; transform:translate(-50%,-50%) scale(24); }
        }
        .mega-cta.pressed{ transform: translate(0,2px) scale(0.99); }

        @media (prefers-reduced-motion: reduce){
          .mega-cta, .mega-cta * { animation: none !important; transition: none !important; }
        }

        @media (max-width:1024px){
          .cart-wrap{grid-template-columns:1fr}
          .summary{position:static}
        }
      `})]})}const cw=["Commercial Bank of Ceylon","Bank of Ceylon (BOC)","Hatton National Bank (HNB)","Sampath Bank","Nations Trust Bank","DFCC Bank","Seylan Bank","Union Bank","Pan Asia Banking Corporation","Amana Bank","Cargills Bank","National Development Bank (NDB)","People's Bank"],Vn={accountHolder:"Ishfaque Mif",bank:"Bank of Ceylon (BOC)",branch:"Puttalam",accountNumber:"89001476",whatsapp:"+94 76 897 6222"};function dw(){const{items:e,clear:t}=fi(),{user:n}=Ft(),[r,i]=w.useState({line1:"",city:"",postal_code:"",country:"LK"}),[s,o]=w.useState(null),[l,c]=w.useState(null),[d,u]=w.useState(!1),[f,h]=w.useState(null),[m,p]=w.useState(null),[v,y]=w.useState(""),[x,g]=w.useState(""),[b,k]=w.useState(""),[j,S]=w.useState(""),[N,_]=w.useState(null),[z,T]=w.useState(null),[I,D]=w.useState(!1),[B,Y]=w.useState(""),[M,A]=w.useState("");w.useEffect(()=>{n!=null&&n.email&&!b&&k(n.email)},[n,b]);async function $(C){var X;const L=(X=C.target.files)==null?void 0:X[0];if(!L)return;if(!["application/pdf","image/jpeg","image/jpg","image/png"].includes(L.type)){h("Only PDF, JPG, and PNG files are allowed");return}if(L.size>5*1024*1024){h("File size must be less than 5MB");return}_(L),h(null),D(!0);try{const ve=new FormData;ve.append("file",L);const ce=await V.post("/checkout/upload-receipt",ve,{headers:{"Content-Type":"multipart/form-data"}});T(ce.data.url)}catch{h("Failed to upload receipt. Please try again."),_(null)}finally{D(!1)}}async function P(C){var L,K;C.preventDefault(),h(null),u(!0);try{if(!v||!x||!b||!j||!z){h("Please fill all required fields and upload receipt"),u(!1);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b)){h("Please enter a valid email address"),u(!1);return}const ve={shipping_address:r,payment_method:"bank_transfer",customer_name:v,customer_phone:x,customer_email:b,selected_bank:j,transfer_receipt_url:z,transaction_reference:B,additional_notes:M,items:e.map(Ce=>({product_id:Ce.id,title:Ce.name,quantity:Ce.qty,price:Ce.price})),total_amount:e.reduce((Ce,Se)=>Ce+Se.price*Se.qty,0)},ce=await V.post("/checkout",ve);o(ce.data.order_id),c(ce.data.bank_transfer),t()}catch(X){h(((K=(L=X.response)==null?void 0:L.data)==null?void 0:K.detail)||"Failed to create order. Please try again.")}finally{u(!1)}}return a.jsx("div",{className:"checkout-wrap",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"head",children:[a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Checkout"}),a.jsx("h1",{className:"headline",children:"Complete your order"}),a.jsx("p",{className:"muted",children:"Secure bank transfer • Upload receipt • Fast verification"})]}),e.length>0&&a.jsxs("div",{className:"pill",children:[a.jsx("span",{children:e.reduce((C,L)=>C+L.qty,0)})," items"]})]}),f&&a.jsx("div",{className:"alert error",children:f}),s?a.jsxs("div",{style:{maxWidth:"600px",margin:"40px auto",padding:"0",position:"relative"},children:[a.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",padding:"48px 32px",boxShadow:"0 20px 60px rgba(102, 126, 234, 0.4)",textAlign:"center",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",top:"-100px",right:"-100px"}}),a.jsx("div",{style:{position:"absolute",width:"150px",height:"150px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",bottom:"-75px",left:"-75px"}}),a.jsx("div",{style:{width:"100px",height:"100px",margin:"0 auto 24px",background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(56, 239, 125, 0.4)",position:"relative",animation:"bounce 1s ease infinite"},children:a.jsx("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})})}),a.jsx("h1",{style:{color:"white",fontSize:"32px",fontWeight:"bold",marginBottom:"16px",textShadow:"0 2px 10px rgba(0,0,0,0.2)",position:"relative"},children:"Order Placed Successfully!"}),a.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(10px)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"20px",marginBottom:"24px",position:"relative"},children:[a.jsx("div",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"14px",marginBottom:"8px",fontWeight:"500"},children:"Order ID"}),a.jsxs("div",{style:{color:"white",fontSize:"24px",fontWeight:"bold",letterSpacing:"1px",fontFamily:"monospace"},children:["#",s]})]}),a.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"12px",padding:"20px",marginBottom:"24px",textAlign:"left",position:"relative"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"rgba(255, 183, 77, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px"},children:a.jsx("span",{style:{fontSize:"24px"},children:"⏳"})}),a.jsxs("div",{children:[a.jsx("div",{style:{color:"white",fontSize:"16px",fontWeight:"bold"},children:"Pending Verification"}),a.jsx("div",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"13px"},children:"Your order is being reviewed"})]})]}),a.jsx("div",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"14px",lineHeight:"1.6"},children:"We will review your payment receipt and update your order status shortly. You will be notified once your payment is verified."})]}),a.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative"},children:[a.jsxs("button",{onClick:()=>window.location.href="/orders",style:{padding:"14px 32px",background:"white",color:"#667eea",border:"none",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.2)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:C=>{C.currentTarget.style.transform="translateY(-2px)",C.currentTarget.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.3)"},onMouseOut:C=>{C.currentTarget.style.transform="translateY(0)",C.currentTarget.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"},children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),a.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"View Order History"]}),a.jsxs("button",{onClick:()=>window.location.href="/shop",style:{padding:"14px 32px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",backdropFilter:"blur(10px)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:C=>{C.currentTarget.style.background="rgba(255, 255, 255, 0.3)",C.currentTarget.style.transform="translateY(-2px)"},onMouseOut:C=>{C.currentTarget.style.background="rgba(255, 255, 255, 0.2)",C.currentTarget.style.transform="translateY(0)"},children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Continue Shopping"]})]})]}),a.jsxs("div",{style:{marginTop:"24px",background:"white",borderRadius:"12px",padding:"24px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"16px",color:"#333"},children:"What's Next?"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[a.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e3f2fd",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("span",{style:{fontSize:"18px"},children:"📧"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Email Confirmation"}),a.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Check your email for order confirmation and receipt"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[a.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#fff3e0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("span",{style:{fontSize:"18px"},children:"🔍"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Payment Review"}),a.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Our team will verify your payment receipt within 24 hours"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[a.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("span",{style:{fontSize:"18px"},children:"📦"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Track Your Order"}),a.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Monitor your order status in real-time from Order History"})]})]})]})]}),a.jsx("style",{children:`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `})]}):a.jsxs("div",{className:"grid",children:[a.jsxs("form",{onSubmit:P,className:"panel form",children:[a.jsx("h3",{className:"section-title",children:"Customer information"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Full name",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:v,onChange:C=>y(C.target.value),required:!0,placeholder:"e.g. John Perera"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Phone number",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{type:"tel",value:x,onChange:C=>g(C.target.value),required:!0,placeholder:"07x xxx xxxx"})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Email",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{type:"email",value:b,onChange:C=>k(C.target.value),required:!0,disabled:!!(n!=null&&n.email),placeholder:"you@example.com"}),(n==null?void 0:n.email)&&a.jsx("p",{className:"tiny muted",children:"Using logged-in account email"})]}),a.jsx("h3",{className:"section-title",children:"Delivery address"}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Address line 1",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:r.line1,onChange:C=>i({...r,line1:C.target.value}),required:!0})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["City",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:r.city,onChange:C=>i({...r,city:C.target.value}),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Postal code",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:r.postal_code,onChange:C=>i({...r,postal_code:C.target.value}),required:!0})]})]}),a.jsx("h3",{className:"section-title",children:"Bank transfer"}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Select your bank",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsxs("select",{value:j,onChange:C=>S(C.target.value),required:!0,children:[a.jsx("option",{value:"",children:"-- Select your bank --"}),cw.map(C=>a.jsx("option",{value:C,children:C},C))]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Upload transfer receipt",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsxs("div",{className:"drop",children:[a.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:$,disabled:I}),a.jsxs("div",{className:"note",children:[a.jsx("strong",{children:I?"Uploading…":N?`${N.name}`:"Choose PDF/JPG/PNG (max 5MB)"}),N&&!I&&a.jsx("span",{className:"ok",children:"✓ Ready"})]})]}),a.jsx("p",{className:"tiny muted",children:"We’ll verify the receipt within 24 hours."})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Transaction / reference (optional)"}),a.jsx("input",{value:B,onChange:C=>Y(C.target.value),placeholder:"e.g. BOCPAY12345"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Additional notes (optional)"}),a.jsx("input",{value:M,onChange:C=>A(C.target.value),placeholder:"Delivery instructions, etc."})]})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:e.length===0||d||!z,children:d?"Processing…":"Complete order"})]}),a.jsxs("aside",{className:"stack",children:[a.jsxs("div",{className:"panel sticky",children:[a.jsx("h3",{className:"section-title",children:"Company bank account"}),a.jsxs("div",{className:"kv",children:[a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Account holder"}),a.jsx("div",{className:"val",children:Vn.accountHolder})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Bank"}),a.jsx("div",{className:"val",children:Vn.bank})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Branch"}),a.jsx("div",{className:"val",children:Vn.branch})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Account number"}),a.jsxs("div",{className:"val row-inline",children:[a.jsx("code",{className:"code",children:Vn.accountNumber}),a.jsx("button",{type:"button",className:"btn btn-ghost sm",onClick:()=>{navigator.clipboard.writeText(Vn.accountNumber),p("acc"),setTimeout(()=>p(null),1500)},children:"Copy"})]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"WhatsApp"}),a.jsxs("div",{className:"val row-inline",children:[a.jsx("code",{className:"code",children:Vn.whatsapp}),a.jsx("a",{className:"btn btn-ghost sm",href:`https://wa.me/${Vn.whatsapp.replace(/[^\d]/g,"")}`,target:"_blank",children:"Chat"})]})]})]}),a.jsx("p",{className:"tiny muted",children:"Transfer the total to this account, then upload the receipt on the left."}),m==="acc"&&a.jsx("div",{className:"toast",children:"Account number copied"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("h3",{className:"section-title",children:"Order summary"}),a.jsx("div",{className:"items",children:e.length===0?a.jsx("p",{className:"muted",children:"Your cart is empty."}):e.map(C=>a.jsxs("div",{className:"item",children:[a.jsxs("div",{className:"name",children:[C.name," ",a.jsxs("span",{className:"muted",children:["×",C.qty]})]}),a.jsxs("div",{className:"price",children:["Rs. ",(C.price*C.qty).toFixed(2)]})]},C.id))}),a.jsxs("div",{className:"total",children:[a.jsx("div",{children:"Total"}),a.jsxs("div",{className:"price",children:["Rs. ",e.reduce((C,L)=>C+L.price*L.qty,0).toFixed(2)]})]})]})]})]}),a.jsx("style",{children:`
          :root{
            --bg:#0d0d0f;--surface:#121216;--surface-alt:#171821;--text:#e9e9ef;--muted:#b8bbd9;--brand:#6D74FF;--brand-600:#5860ff;--line:#2a2b36;--card:#14151d;--ghost:#232434;
          }
          .checkout-wrap{background:var(--bg);color:var(--text)}
          .container{max-width:1120px;margin:0 auto;padding:24px 20px}
          .head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:12px}
          .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 6px}
          .headline{font-size:clamp(26px,3.5vw,36px);line-height:1.1;margin:0}
          .pill{border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:6px 10px;color:var(--muted)}
          .grid{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
          .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px;position:relative}
          .sticky{position:sticky;top:12px}
          .section-title{margin:0 0 10px;font-size:18px}
          .form{display:grid;gap:12px}
          .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
          .row-inline{display:flex;gap:8px;align-items:center}
          .field{display:grid;gap:6px}
          label{font-size:13px;color:var(--muted)}
          input,select,textarea{background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:10px}
          .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
          .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
          .btn-primary:disabled{opacity:.6}
          .btn-ghost{background:transparent}
          .btn.sm{padding:6px 10px;font-size:12px}
          .muted{color:var(--muted)}
          .tiny{font-size:12px}
          .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9;border-radius:10px;padding:12px;margin:10px 0}
          .kv{display:grid;gap:10px}
          .val{font-weight:600}
          .code{background:var(--surface-alt);border:1px solid var(--line);padding:4px 8px;border-radius:6px}
          .items{display:grid;gap:8px;margin:10px 0}
          .item{display:flex;justify-content:space-between;align-items:center;border-bottom:1px dashed var(--line);padding-bottom:8px}
          .total{display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-weight:700}
          .drop{border:1px dashed var(--line);border-radius:10px;padding:10px;background:var(--surface);display:flex;align-items:center;justify-content:space-between}
          .drop input{background:transparent;border:none;padding:0}
          .drop .ok{color:#1fbf75;margin-left:8px}
          .toast{position:absolute;right:12px;top:12px;background:var(--surface-alt);border:1px solid var(--line);padding:6px 8px;border-radius:8px;color:var(--muted);font-size:12px}
          @media(max-width:900px){.grid{grid-template-columns:1fr}}
        `})]})})}function uw(){const e=Lt(),[t,n]=w.useState([]),[r,i]=w.useState(!0),[s,o]=w.useState(null),[l,c]=w.useState("all"),[d,u]=w.useState(!1),[f,h]=w.useState(null),m=w.useCallback(async()=>{var j,S,N;i(!0),o(null);try{const _=await V.get("/orders/history",{params:{status_filter:l}});n(_.data.orders||[])}catch(_){((j=_==null?void 0:_.response)==null?void 0:j.status)===401?(u(!0),o("Not authenticated")):o(((N=(S=_.response)==null?void 0:S.data)==null?void 0:N.detail)||"Failed to load orders")}finally{i(!1)}},[l]);w.useEffect(()=>{m()},[m]);function p(j){if(!j)return"N/A";try{return new Date(j).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"N/A"}}function v(j){return j?`LKR ${j.toFixed(2)}`:"LKR 0.00"}function y(j){switch(j){case"placed":return"#d97706";case"verified":return"#0284c7";case"processing":return"#ea580c";case"shipped":return"#2563eb";case"delivered":return"#16a34a";case"rejected":return"#dc2626";case"cancelled":return"#9ca3af";default:return"#6D74FF"}}function x(j){switch(j){case"placed":return 20;case"verified":return 40;case"processing":return 60;case"shipped":return 80;case"delivered":return 100;default:return 0}}function g(j){switch(j){case"all":return"All";case"pending":return"In Progress";case"completed":return"Completed";case"cancelled":return"Cancelled";default:return j.charAt(0).toUpperCase()+j.slice(1)}}async function b(j){var S,N;try{await V.post(`/orders/${j}/reorder`),alert("Items added to cart!"),e("/cart")}catch(_){alert(((N=(S=_.response)==null?void 0:S.data)==null?void 0:N.detail)||"Failed to reorder")}}async function k(j){h(j);const S=localStorage.getItem("access_token")||"";if(!S){alert("Not authenticated");return}const N=`/api/v1/orders/${j}/invoice?token=${encodeURIComponent(S)}`;try{const _=document.createElement("iframe");_.style.display="none",_.src=N,document.body.appendChild(_);const z=()=>{h(null);try{_.removeEventListener("load",z)}catch{}};try{_.addEventListener("load",z)}catch{}setTimeout(()=>{try{document.body.removeChild(_)}catch{}h(null)},1e4)}catch(_){console.error("Invoice download error:",_);try{window.location.href=N}catch{}h(null)}}return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{className:"section-title",children:"📦 Order History"}),a.jsx("p",{className:"lead",children:"Track your orders and manage your purchase history."})]}),a.jsxs("button",{onClick:()=>m(),disabled:r,style:{padding:"12px 24px",background:r?"#ccc":"#6D74FF",color:"white",border:"none",borderRadius:"8px",cursor:r?"not-allowed":"pointer",fontSize:"16px",fontWeight:"bold",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(109, 116, 255, 0.3)"},onMouseOver:j=>{r||(j.currentTarget.style.background="#5a61d6",j.currentTarget.style.transform="translateY(-2px)",j.currentTarget.style.boxShadow="0 4px 12px rgba(109, 116, 255, 0.4)")},onMouseOut:j=>{r||(j.currentTarget.style.background="#6D74FF",j.currentTarget.style.transform="translateY(0)",j.currentTarget.style.boxShadow="0 2px 8px rgba(109, 116, 255, 0.3)")},children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{animation:r?"spin 1s linear infinite":"none"},children:[a.jsx("polyline",{points:"23 4 23 10 17 10"}),a.jsx("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),r?"Refreshing...":"Refresh"]})]}),a.jsx("div",{className:"order-filters",children:["all","pending","completed","cancelled"].map(j=>a.jsx("button",{className:`btn ${l===j?"btn-primary":"btn-ghost"}`,onClick:()=>c(j),children:g(j)},j))}),a.jsx("style",{children:`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}),s&&a.jsx("div",{className:"alert error",children:s}),d&&a.jsx("div",{className:"alert warning",children:a.jsx("button",{onClick:()=>e("/login?next=/orders"),className:"btn btn-primary",children:"Go to Login"})}),r&&a.jsx("div",{className:"loading",children:"Loading orders..."}),!r&&t.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{children:"📭"}),a.jsx("h3",{children:"No Orders Found"}),a.jsx("p",{children:l==="all"?"You haven’t placed any orders yet.":`No ${g(l)} orders found.`}),a.jsx("button",{onClick:()=>e("/shop"),className:"btn btn-primary",children:"Start Shopping"})]}),!r&&t.length>0&&a.jsx("div",{className:"order-list",children:t.map(j=>{var S;return a.jsxs("div",{className:"order-card",children:[a.jsxs("div",{className:"order-header",children:[a.jsxs("div",{children:[a.jsxs("h3",{children:["Order #",j.id.slice(-8)]}),a.jsx("p",{children:p(j.created_at)})]}),a.jsx("div",{className:"order-total",children:v(j.total_amount)})]}),a.jsxs("div",{className:"order-progress",children:[a.jsx("div",{className:"progress-bar",children:a.jsx("div",{style:{width:`${x(j.tracking_status)}%`,backgroundColor:y(j.tracking_status)}})}),a.jsx("p",{className:"status",style:{color:y(j.tracking_status)},children:(S=j.tracking_status)==null?void 0:S.toUpperCase()})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{onClick:()=>e(`/orders/${j.id}`),className:"btn btn-primary",children:"View"}),a.jsx("button",{onClick:()=>b(j.id),className:"btn btn-ghost",children:"🔁 Reorder"}),j.payment_status==="verified"&&a.jsx("button",{onClick:()=>k(j.id),className:"btn btn-ghost invoice-btn",disabled:f===j.id,"aria-busy":f===j.id,children:f===j.id?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"invoice-spinner",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.25"}),a.jsx("path",{d:"M22 12a10 10 0 0 1-10 10",strokeLinecap:"round"})]}),"Downloading..."]}):a.jsx(a.Fragment,{children:"📄 Invoice"})}),j.tracking_status==="delivered"&&a.jsx("button",{onClick:()=>e(`/orders/${j.id}/review`),className:"btn btn-ghost",children:"⭐ Review"})]})]},j.id)})})]})}),a.jsx("style",{children:`
        .order-filters{display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap}
        .order-list{display:flex;flex-direction:column;gap:16px}
        .order-card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:20px;transition:.2s}
        .order-card:hover{transform:translateY(-2px);border-color:var(--brand)}
        .order-header{display:flex;justify-content:space-between;margin-bottom:12px;border-bottom:1px solid var(--line);padding-bottom:12px}
        .order-header h3{margin:0;font-size:18px}
        .order-header p{color:var(--muted);margin:4px 0 0}
        .order-total{font-size:20px;font-weight:600;color:var(--brand)}
        .progress-bar{height:6px;background:var(--surface-alt);border-radius:4px;overflow:hidden}
        .progress-bar div{height:100%;transition:width .3s ease}
        .status{text-align:right;font-size:13px;font-weight:600;margin-top:8px}
        .loading{text-align:center;padding:32px;color:var(--muted)}
        .empty-state{text-align:center;padding:48px;background:var(--surface-alt);border-radius:12px}
        .empty-state div{font-size:48px;margin-bottom:8px}
        .empty-state h3{font-size:20px;margin:0 0 8px}
        .empty-state p{color:var(--muted);margin-bottom:16px}
        .alert{padding:16px;border-radius:8px;margin-bottom:16px}
        .alert.error{background:#3b0d0d;color:#ffbaba}
        .alert.warning{background:#302b0b;color:#fff1b0;text-align:center}
        .actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px}
        .invoice-btn[disabled]{opacity:0.7;cursor:not-allowed}
        .invoice-spinner{display:inline-block;margin-right:8px;vertical-align:middle;animation:spinner-rotate 1s linear infinite}
        @keyframes spinner-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      `})]})}function hf(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"}function na(e){return`LKR ${e.toFixed(2)}`}const ff={placed:{icon:"📦",color:"#FFD700"},verified:{icon:"✅",color:"#0284c7"},processing:{icon:"⚙️",color:"#ea580c"},shipped:{icon:"🚚",color:"#2563eb"},delivered:{icon:"🎉",color:"#11998e"}},pf=["placed","verified","processing","shipped","delivered"];function hw(){const{orderId:e}=c0(),t=Lt(),[n,r]=w.useState(null),[i,s]=w.useState(!0),[o,l]=w.useState(null),[c,d]=w.useState(!1),u=w.useCallback(async()=>{var p,v;s(!0),l(null);try{const y=await V.get(`/orders/${e}`);r(y.data)}catch(y){l(((v=(p=y.response)==null?void 0:p.data)==null?void 0:v.detail)||"Failed to load order details")}finally{s(!1)}},[e]);w.useEffect(()=>{u()},[u]);const f=w.useCallback(async p=>{var y,x,g;const v=(y=p.target.files)==null?void 0:y[0];if(v){d(!0);try{const b=new FormData;b.append("file",v),await V.put(`/orders/${e}/receipt`,b,{headers:{"Content-Type":"multipart/form-data"}}),alert("Receipt uploaded successfully! Awaiting admin verification."),u()}catch(b){alert(((g=(x=b.response)==null?void 0:x.data)==null?void 0:g.detail)||"Failed to upload receipt")}finally{d(!1)}}},[e,u]);w.useEffect(()=>{let p=null,v=!1;async function y(){try{const x=await V.get(`/orders/${e}`);if(v)return;const g=x.data;(!n||g.tracking_status!==n.tracking_status||g.payment_status!==n.payment_status)&&r(g),(g.tracking_status==="delivered"||g.tracking_status==="cancelled")&&p&&(clearInterval(p),p=null)}catch{}}return n&&n.tracking_status!=="delivered"&&n.tracking_status!=="cancelled"&&(y(),p=setInterval(y,5e3)),()=>{v=!0,p&&clearInterval(p)}},[n==null?void 0:n.tracking_status,n==null?void 0:n.payment_status,e]);const h=w.useMemo(()=>n?pf.indexOf(n.tracking_status):-1,[n==null?void 0:n.tracking_status]),m=w.useMemo(()=>n?ff[n.tracking_status]||{icon:"📝",color:"#6D74FF"}:null,[n==null?void 0:n.tracking_status]);return i?a.jsx("section",{className:"section",children:a.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:a.jsx("div",{style:{fontSize:"18px",color:"var(--muted)"},children:"Loading order details..."})})}):o||!n?a.jsx("section",{className:"section",children:a.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:a.jsxs("div",{className:"empty-state",style:{padding:"48px",background:"var(--card)",borderRadius:"14px",boxShadow:"var(--shadow)"},children:[a.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"❌"}),a.jsx("h2",{children:o||"Order not found"}),a.jsx("button",{onClick:()=>t("/orders"),className:"btn",style:{marginTop:"16px"},children:"Back to Orders"})]})})}):a.jsxs("section",{className:"section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("button",{onClick:()=>t("/orders"),className:"btn",style:{marginBottom:"24px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Orders"]}),a.jsxs("div",{className:"order-detail-header",children:[a.jsxs("div",{className:"order-detail-header-left",children:[a.jsxs("h1",{className:"section-title",children:["Order #",n.id.slice(-8)]}),a.jsxs("p",{style:{color:"var(--muted)",margin:"4px 0 0"},children:["📅 ",hf(n.created_at)]})]}),a.jsxs("div",{className:"order-detail-header-right",children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--muted)",marginBottom:"4px"},children:"Total Amount"}),a.jsx("div",{className:"price",style:{fontSize:"32px",margin:"0 0 12px"},children:na(n.total_amount)}),a.jsxs("div",{className:"status-badge",style:{backgroundColor:(m==null?void 0:m.color)||"#6D74FF",color:"white",padding:"8px 16px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",display:"inline-flex",alignItems:"center",gap:"6px"},children:[m==null?void 0:m.icon," ",n.tracking_status.charAt(0).toUpperCase()+n.tracking_status.slice(1)]})]})]}),n.admin_feedback&&a.jsxs("div",{className:"alert",style:{background:n.payment_status==="rejected"?"#fee2e2":"#fef3c7",border:`1px solid ${n.payment_status==="rejected"?"#dc2626":"#f59e0b"}`,borderRadius:"12px",padding:"20px",marginBottom:"24px"},children:[a.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",color:n.payment_status==="rejected"?"#991b1b":"#92400e",marginBottom:"12px"},children:"⚠️ Admin Feedback"}),a.jsx("div",{style:{color:n.payment_status==="rejected"?"#991b1b":"#92400e",fontSize:"14px",lineHeight:"1.6",marginBottom:n.resubmit_required?"16px":"0"},children:n.admin_feedback}),n.resubmit_required&&a.jsxs("div",{children:[a.jsxs("label",{className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",cursor:c?"not-allowed":"pointer",opacity:c?.7:1},children:["📤 ",c?"Uploading...":"Re-upload Receipt",a.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:f,disabled:c,style:{display:"none"}})]}),a.jsx("p",{style:{fontSize:"13px",color:"var(--muted)",marginTop:"8px"},children:"Please upload a valid payment receipt (PDF, JPG, PNG)"})]})]}),n.items&&n.items.length>0&&a.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"🛒 Order Items"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:n.items.map((p,v)=>a.jsxs("div",{className:"order-item",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontWeight:"600",marginBottom:"4px"},children:p.title||p.name||"Product"}),a.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)"},children:["Quantity: ",p.quantity," × ",na(p.price)]})]}),a.jsx("div",{className:"price",style:{fontSize:"18px"},children:na(p.price*p.quantity)})]},v))}),a.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"2px solid var(--bg)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Total Amount"}),a.jsx("span",{className:"price",style:{fontSize:"24px"},children:na(n.total_amount)})]})]}),a.jsxs("div",{className:"card",style:{padding:"28px",marginBottom:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"24px"},children:"📊 Order Timeline"}),a.jsx("div",{style:{position:"relative",paddingLeft:"48px"},children:pf.map((p,v)=>{const y=h>=v,x=n.tracking_status===p,g=ff[p];return a.jsxs("div",{style:{position:"relative",paddingBottom:v<4?"32px":"0"},children:[v<4&&a.jsx("div",{style:{position:"absolute",left:"-28px",top:"32px",width:"3px",height:"32px",background:y?"var(--primary)":"#e5e7eb"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("div",{style:{position:"absolute",left:"-36px",width:"18px",height:"18px",borderRadius:"50%",background:y?"var(--primary)":"#e5e7eb",border:x?"4px solid rgba(109, 40, 217, 0.3)":"none",boxShadow:x?"0 0 0 4px rgba(109, 40, 217, 0.1)":"none",display:"flex",alignItems:"center",justifyContent:"center"},children:x&&a.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"white"}})}),a.jsxs("div",{style:{flex:1,padding:"16px",background:x?"rgba(109, 40, 217, 0.05)":"transparent",borderRadius:"12px",border:x?"2px solid rgba(109, 40, 217, 0.2)":"none"},children:[a.jsxs("div",{style:{fontWeight:x?"bold":"600",fontSize:x?"18px":"16px",color:y?"var(--text)":"var(--muted)",textTransform:"capitalize",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{children:g.icon}),p,x&&a.jsx("span",{style:{marginLeft:"8px",padding:"4px 12px",background:"var(--primary)",color:"white",fontSize:"12px",borderRadius:"12px",fontWeight:"bold"},children:"CURRENT"})]}),x&&n.estimated_delivery_date&&p==="shipped"&&a.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)",marginTop:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Est. delivery: ",hf(n.estimated_delivery_date)]})]})]})]},p)})})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",marginBottom:"24px"},children:[a.jsxs("div",{className:"card",style:{padding:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"👤 Customer Information"}),a.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[a.jsxs("div",{style:{marginBottom:"8px"},children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Name:"})," ",a.jsx("span",{style:{fontWeight:"600"},children:n.customer_name})]}),a.jsxs("div",{style:{marginBottom:"8px"},children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Phone:"})," ",a.jsx("span",{style:{fontWeight:"600"},children:n.customer_phone})]}),n.customer_email&&a.jsxs("div",{children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Email:"})," ",a.jsx("span",{style:{fontWeight:"600",wordBreak:"break-all"},children:n.customer_email})]})]})]}),a.jsxs("div",{className:"card",style:{padding:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"📍 Delivery Address"}),a.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[a.jsx("div",{style:{marginBottom:"8px",fontWeight:"600"},children:n.shipping_address.line1}),a.jsxs("div",{style:{marginBottom:"8px",fontWeight:"600"},children:[n.shipping_address.city,", ",n.shipping_address.postal_code]}),a.jsx("div",{style:{fontWeight:"600"},children:n.shipping_address.country})]})]})]}),a.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"💳 Payment Information"}),a.jsxs("div",{style:{fontSize:"15px",lineHeight:"2",marginBottom:"16px"},children:[a.jsxs("div",{style:{marginBottom:"12px"},children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Bank:"})," ",a.jsx("span",{style:{fontWeight:"600"},children:n.selected_bank||"N/A"})]}),n.transaction_reference&&a.jsxs("div",{children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Reference:"})," ",a.jsx("span",{style:{fontWeight:"600",fontFamily:"monospace",fontSize:"14px",background:"var(--bg)",padding:"4px 8px",borderRadius:"6px"},children:n.transaction_reference})]})]}),n.transfer_receipt_url&&a.jsx("div",{style:{marginBottom:"16px"},children:a.jsx("a",{href:n.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",textDecoration:"none"},children:"📄 View Receipt"})}),n.additional_notes&&a.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[a.jsx("strong",{style:{color:"var(--muted)",fontSize:"14px"},children:"Additional Notes:"}),a.jsx("div",{style:{marginTop:"8px",fontSize:"15px",lineHeight:"1.6"},children:n.additional_notes})]})]})]}),a.jsx("style",{children:`
        .order-detail-header {
          background: var(--card);
          border-radius: 14px;
          box-shadow: var(--shadow);
          padding: 24px;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border: 1px solid #eee;
        }
        
        .order-detail-header-left h1 {
          margin: 0;
        }
        
        .order-detail-header-right {
          text-align: right;
        }

        @media (max-width: 768px) {
          .order-detail-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .order-detail-header-right {
            text-align: left;
          }
        }
      `})]})}function fw(){const{user:e,logout:t}=Ft(),{count:n}=fi(),[r,i]=w.useState(!1),[s,o]=w.useState(!1),[l,c]=w.useState(!1),[d,u]=w.useState(!1),[f,h]=w.useState(""),[m,p]=w.useState([]),[v,y]=w.useState(!1),[x,g]=w.useState(-1),b=Nt(),k=Lt(),j=w.useRef(null),S=w.useRef(null),N=w.useRef(null),_=w.useRef(null);w.useEffect(()=>{o(!1),c(!1),setTimeout(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},100)},[b.pathname]),w.useEffect(()=>{const B=Y=>{var M;if(Y.key==="Escape")o(!1),c(!1),y(!1),g(-1),(M=_.current)==null||M.blur();else if(v&&m.length>0){if(Y.key==="ArrowDown")Y.preventDefault(),g(A=>A<m.length-1?A+1:0);else if(Y.key==="ArrowUp")Y.preventDefault(),g(A=>A>0?A-1:m.length-1);else if(Y.key==="Enter"&&x>=0){Y.preventDefault();const A=m[x];k(`/search?q=${encodeURIComponent(A.name)}`),h(""),y(!1),g(-1),o(!1)}}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[v,m,x,k]),w.useEffect(()=>{if(n<=0)return;i(!0);const B=setTimeout(()=>i(!1),300);return()=>clearTimeout(B)},[n]),w.useEffect(()=>{const B=Y=>{S.current&&(S.current.contains(Y.target)||c(!1),N.current&&(N.current.contains(Y.target)||(y(!1),g(-1))))};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[]);const z=({isActive:B})=>B?"nav-link active":"nav-link",T=({isActive:B})=>B?"auth-btn active":"auth-btn",I=b.pathname.startsWith("/admin"),D=B=>{B.preventDefault();const Y=x>=0?m[x].name:f.trim();Y&&(k(`/search?q=${encodeURIComponent(Y)}`),h(""),y(!1),g(-1),o(!1))};return w.useEffect(()=>{if(!f.trim()){p([]),y(!1),g(-1);return}const B=setTimeout(async()=>{var Y;try{const A=((Y=(await V.get("/api/v1/products",{params:{q:f.trim(),size:10}})).data)==null?void 0:Y.items)||[],$=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],P=f.toLowerCase(),C=$.filter(K=>K.name.toLowerCase().includes(P)||K.content.toLowerCase().includes(P)),L=[...A.map(K=>({id:`product-${K.id}`,name:K.name,type:"product",url:`/product/${K.slug}`,content:K.category||"Product"})),...C].slice(0,8);p(L),y(!0),g(-1)}catch{const A=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],$=f.toLowerCase(),P=A.filter(C=>C.name.toLowerCase().includes($)||C.content.toLowerCase().includes($));p(P.slice(0,8)),y(P.length>0),g(-1)}},300);return()=>clearTimeout(B)},[f]),a.jsxs("header",{className:"header",ref:j,children:[a.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),a.jsxs("div",{className:"container header-inner",children:[a.jsxs("div",{className:"left",children:[a.jsxs("button",{className:"hamburger","aria-label":"Toggle navigation","aria-controls":"main-menu","aria-expanded":s,onClick:()=>o(B=>!B),children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx(U,{to:"/",className:"brand","aria-label":"Home",children:a.jsx("div",{className:"logo-container",children:a.jsxs("div",{className:`logo-wrapper ${d?"loaded":""}`,children:[a.jsx("img",{src:"/images/title.png",alt:"Own Setup logo",onLoad:()=>u(!0)}),a.jsx("div",{className:"logo-glow","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})})]}),a.jsxs("nav",{id:"main-menu",className:`nav ${s?"open":""}`,"aria-label":"Main navigation",children:[!I&&a.jsxs(a.Fragment,{children:[a.jsx(gn,{to:"/",end:!0,className:z,children:"Home"}),a.jsx(gn,{to:"/shop",className:z,children:"Shop"}),a.jsxs("div",{className:"search-container",ref:N,children:[a.jsxs("form",{onSubmit:D,className:"search-form",children:[a.jsx("input",{ref:_,type:"search",placeholder:"Search...",value:f,onChange:B=>h(B.target.value),onFocus:()=>{m.length>0&&y(!0)},className:"search-input","aria-label":"Search",autoComplete:"off"}),f&&a.jsx("button",{type:"button",className:"search-clear",onClick:()=>{var B;h(""),y(!1),g(-1),(B=_.current)==null||B.focus()},"aria-label":"Clear search",children:"×"}),a.jsx("button",{type:"submit",className:"search-btn","aria-label":"Submit search",children:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("path",{d:"m21 21-4.35-4.35"})]})})]}),v&&m.length>0&&a.jsx("div",{className:"search-suggestions",children:m.map((B,Y)=>a.jsxs("button",{type:"button",className:`suggestion-item ${x===Y?"selected":""}`,onClick:()=>{k(B.url),h(""),y(!1),g(-1),o(!1)},onMouseEnter:()=>g(Y),children:[a.jsxs("div",{className:"suggestion-icon",children:[B.type==="product"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"}),a.jsx("line",{x1:"7",y1:"7",x2:"7",y2:"7"})]}),B.type==="faq"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),a.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),B.type==="page"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("polyline",{points:"14,2 14,8 20,8"})]})]}),a.jsxs("div",{className:"suggestion-content",children:[a.jsx("span",{className:"suggestion-title",children:B.name}),a.jsx("span",{className:"suggestion-type",children:B.type})]})]},B.id))})]}),a.jsx(gn,{to:"/about",className:z,children:"About"}),e&&a.jsxs(a.Fragment,{children:[a.jsx(gn,{to:"/contact",className:z,children:"Contact"}),a.jsxs(gn,{to:"/cart",className:({isActive:B})=>B?"nav-link cart-link active":"nav-link cart-link",children:["Cart",a.jsx("span",{className:`badge ${r?"bump":""}`,"aria-label":`${n} items in cart`,children:n})]})]})]}),a.jsx("div",{className:"divider","aria-hidden":!0}),!e&&a.jsxs("div",{className:"auth",children:[a.jsx(gn,{to:"/login",end:!0,className:T,children:"Login"}),a.jsx(gn,{to:"/register",className:T,children:"Register"})]})]}),e&&a.jsxs("div",{className:"user-wrap",ref:S,children:[e.is_staff&&!I&&a.jsx(gn,{to:"/admin",className:z,children:"Admin"}),a.jsxs("button",{className:"user-btn","aria-haspopup":"menu","aria-expanded":l,onClick:()=>c(B=>!B),title:e.email,children:[a.jsx("div",{className:"avatar","aria-hidden":!0,children:e!=null&&e.avatar_url?a.jsx("img",{src:e.avatar_url,alt:""}):null}),a.jsx("span",{className:"email",children:e.email})]}),l&&a.jsxs("div",{className:"user-menu",role:"menu",children:[a.jsx(U,{to:"/account",className:"menu-item",role:"menuitem",children:"Account"}),a.jsx(U,{to:"/orders",className:"menu-item",role:"menuitem",children:"Orders"}),a.jsx("button",{className:"menu-item",role:"menuitem",onClick:t,children:"Logout"})]})]})]}),s&&a.jsx("div",{className:"overlay",onClick:()=>o(!1),"aria-hidden":!0}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --ghost:#232434;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .skip-link{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;background:var(--brand);color:white;padding:8px;text-decoration:none;border-radius:4px;z-index:1000}
        .skip-link:focus{left:20px;top:20px;width:auto;height:auto}
        .header{
          position:sticky;
          top:0;
          z-index:50;
          background:rgba(13,13,15,.8);
          backdrop-filter:blur(8px);
          border-bottom:1px solid var(--line);
        }
        .header-inner{display:flex;align-items:center;justify-content:space-between;height:64px}
        .left{display:flex;align-items:center;gap:10px}
        .brand{
          display:inline-flex;
          align-items:center;
          text-decoration:none;
        }
        
        /* Container to clip all effects within bounds */
        .logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 56px;
          overflow: hidden;
        }
        
        /* ========================================
           CONTINUOUS AUTO-ANIMATING LOGO EFFECTS
           ======================================== */
        
        .logo-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: logoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        /* Entrance animation */
        @keyframes logoEntrance {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
          60% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        /* Logo image - continuous floating + subtle rotation */
        .logo-wrapper img {
          display: block;
          height: 40px;
          width: auto;
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 0 8px rgba(109, 116, 255, 0.4));
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite;
        }
        
        /* Continuous floating motion - reduced range */
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-4px) scale(1.05);
          }
          50% {
            transform: translateY(0px) scale(1);
          }
          75% {
            transform: translateY(-2px) scale(1.02);
          }
        }
        
        /* Subtle continuous rotation */
        @keyframes logoRotate {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        
        /* Animated pulsing glow behind logo - contained size */
        .logo-glow {
          position: absolute;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle at center, rgba(109, 116, 255, 0.6), transparent 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(12px);
          animation: glowPulse 3s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        /* Rotating rings around logo - smaller sizes */
        .logo-ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          z-index: 2;
        }
        
        .ring-1 {
          width: 50px;
          height: 50px;
          border-top-color: rgba(109, 116, 255, 0.6);
          border-right-color: rgba(109, 116, 255, 0.3);
          animation: ringRotate 4s linear infinite;
        }
        
        .ring-2 {
          width: 56px;
          height: 56px;
          border-bottom-color: rgba(109, 116, 255, 0.5);
          border-left-color: rgba(109, 116, 255, 0.2);
          animation: ringRotate 6s linear infinite reverse;
        }
        
        .ring-3 {
          width: 62px;
          height: 62px;
          border-top-color: rgba(109, 116, 255, 0.4);
          border-bottom-color: rgba(109, 116, 255, 0.1);
          animation: ringRotate 8s linear infinite;
        }
        
        @keyframes ringRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        /* Shimmer sweep effect - contained within logo-container */
       /* .logo-wrapper::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 0, 0, 1) 50%,
            transparent 50%
          );
          z-index: 4;
          pointer-events: none;
          animation: shimmerSweep 10s ease-in-out infinite;
        }*/
        
        @keyframes shimmerSweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
        
        /* Particle effect - smaller and contained */
        /* .logo-wrapper::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(109, 116, 255, 0.8);
          border-radius: 50%;
          box-shadow: 
            6px 8px 0 rgba(109, 116, 255, 0.6),
            -8px 10px 0 rgba(109, 116, 255, 0.5),
            10px -6px 0 rgba(109, 116, 255, 0.7),
            -6px -8px 0 rgba(109, 116, 255, 0.4);
          animation: particleFloat 5s ease-in-out infinite;
          z-index: 0;
          pointer-events: none;
        } */
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(4px, -6px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translate(-3px, 5px) scale(0.8);
            opacity: 0.5;
          }
          75% {
            transform: translate(5px, 4px) scale(1.1);
            opacity: 0.7;
          }
        }
        
        /* Enhanced hover effect on top of continuous animation */
        .brand:hover .logo-wrapper img {
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite, logoHoverBounce 0.6s ease;
        }
        
        @keyframes logoHoverBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        
        .brand:hover .logo-glow {
          filter: blur(16px);
          animation: glowPulse 1.5s ease-in-out infinite;
        }
        
        .brand:hover .ring-1 {
          border-top-color: rgba(109, 116, 255, 1);
          border-right-color: rgba(109, 116, 255, 0.6);
        }
        
        .brand:hover .ring-2 {
          border-bottom-color: rgba(109, 116, 255, 0.9);
          border-left-color: rgba(109, 116, 255, 0.5);
        }
        
        .brand:hover .ring-3 {
          border-top-color: rgba(109, 116, 255, 0.8);
          border-bottom-color: rgba(109, 116, 255, 0.4);
        }
        
        /* ========================================
           END LOGO ANIMATIONS
           ======================================== */
        
        .hamburger{display:none;flex-direction:column;gap:4px;width:36px;height:36px;align-items:center;justify-content:center;border-radius:8px;border:1px solid var(--line);background:var(--ghost);color:var(--text)}
        .hamburger span{display:block;width:18px;height:2px;background:var(--text);border-radius:2px}
        .nav{display:flex;align-items:center;gap:14px}
        
        /* Search form styles */
        .search-container{position:relative}
        .search-form{display:flex;align-items:center;gap:8px;border-radius:8px;border:1px solid var(--line);background:var(--ghost);padding:0 12px;min-width:200px;max-width:300px}
        .search-input{flex:1;border:none;background:transparent;color:var(--text);font-size:14px;padding:8px 0;outline:none}
        .search-input::placeholder{color:var(--muted)}
        .search-clear{border:none;background:transparent;color:var(--muted);cursor:pointer;padding:4px;border-radius:4px;font-size:18px;line-height:1;transition:all 0.2s ease}
        .search-clear:hover{color:var(--text);background:var(--ghost)}
        .search-btn{border:none;background:transparent;color:var(--text);cursor:pointer;padding:4px;border-radius:4px;transition:background 0.2s ease}
        
        /* Search suggestions dropdown */
        .search-suggestions{position:absolute;top:100%;left:0;right:0;background:var(--surface);border:1px solid var(--line);border-radius:8px;margin-top:4px;max-height:300px;overflow-y:auto;z-index:1000;box-shadow:0 6px 22px rgba(0,0,0,.3)}
        .suggestion-item{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:12px;border:none;background:transparent;color:var(--text);cursor:pointer;border-radius:6px;font-size:14px;font-family:inherit;transition:background 0.2s ease}
        .suggestion-item:hover,.suggestion-item.selected{background:var(--ghost)}
        .suggestion-icon{flex-shrink:0;color:var(--muted);display:flex;align-items:center;justify-content:center;width:16px;height:16px}
        .suggestion-content{flex:1;display:flex;flex-direction:column;gap:2px}
        .suggestion-title{font-weight:500;color:var(--text)}
        .suggestion-type{font-size:11px;color:var(--muted);text-transform:capitalize}
        .search-btn:hover{background:var(--ghost)}
        .search-btn:focus{outline:2px solid var(--brand);outline-offset:-2px}
        
        /* Base nav-link styles */
        .nav-link{
          color:var(--text);
          text-decoration:none;
          padding:8px 10px;
          border-radius:8px;
          transition:background 0.2s ease, color 0.2s ease;
          position:relative;
        }
        
        /* Hover state - only on NON-active links */
        .nav-link:not(.active):hover{
          background:var(--ghost);
          color:var(--text);
        }
        
        /* Active state */
        .nav-link.active{
          color:white;
          background:var(--brand);
        }
        
        /* Keep active state even when hovered */
        .nav-link.active:hover{
          color:white;
          background:var(--brand);
          cursor:default;
        }
        
        /* Prevent focus styles from interfering */
        .nav-link:focus{
          outline:none;
        }
        
        /* Only show focus-visible ring on keyboard navigation, not on active state */
        .nav-link:not(.active):focus-visible{
          outline:2px solid var(--brand);
          outline-offset:2px;
        }
        
        .cart-link{display:inline-flex;align-items:center;gap:8px}
        .badge{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;border-radius:999px;background:var(--brand);color:white;font-size:12px}
        .badge.bump{animation: cart-bounce .3s ease}
        @keyframes cart-bounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.25); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .badge.sparkle{
          box-shadow: 0 0 0 0 rgba(109,116,255,0.6);
          animation: badge-glow .6s ease-out;
        }
        .badge.sparkle::after{
          content:"";
          position:absolute;left:50%;top:50%;
          width:6px;height:6px;border-radius:50%;
          background:white;
          transform:translate(-50%,-50%) scale(.2);
          box-shadow: 0 0 0 8px rgba(109,116,255,0.3), 0 0 18px 8px rgba(109,116,255,0.25);
          opacity:.9;
          animation: sparkle-pop .6s ease-out forwards;
          pointer-events:none;
        }
        @keyframes badge-glow {
          0% { box-shadow: 0 0 0 0 rgba(109,116,255,0.6); }
          80% { box-shadow: 0 0 0 10px rgba(109,116,255,0); }
          100% { box-shadow: none; }
        }
        @keyframes sparkle-pop {
          0% { transform: translate(-50%,-50%) scale(.2); opacity:.9; }
          70% { transform: translate(-50%,-50%) scale(2.4); opacity:.35; box-shadow: 0 0 0 14px rgba(109,116,255,0); }
          100% { transform: translate(-50%,-50%) scale(2.8); opacity:0; box-shadow:none; }
        }
        .divider{width:1px;height:24px;background:var(--line);margin:0 6px}
        .auth{display:flex;align-items:center;gap:10px}
        
        /* Auth button styles */
        .auth-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius:8px;
          padding:8px 16px;
          border:1px solid var(--line);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.2s ease;
          font-weight:500;
        }
        
        .auth-btn:focus {
          outline:none;
        }
        
        .auth-btn:not(.active):hover{
          background:var(--brand-600);
          border-color:var(--brand-600);
          color:white;
        }
        
        .auth-btn.active{
          background:var(--brand);
          border-color:var(--brand);
          color:white;
          box-shadow:0 4px 12px rgba(109,116,255,0.3);
        }
        
        .auth-btn.active:hover {
          background:var(--brand);
          border-color:var(--brand);
        }
        
        .auth-btn:not(.active):focus-visible {
          outline:2px solid var(--brand);
          outline-offset:2px;
        }
        
        .user-wrap{position:relative;display:flex;align-items:center;gap:8px}
        .user-btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:4px 8px;border:1px solid var(--line);background:transparent;color:var(--text);cursor:pointer}
        .user-btn:hover{background:var(--ghost)}
        .user-btn:focus{outline:none}
        .user-btn:active{background:var(--ghost)}
        .avatar{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#2a2b36,#171821);border:1px solid var(--line);overflow:hidden}
        .avatar img{width:100%;height:100%;object-fit:cover;display:block}
        .email{color:var(--muted);font-size:12px;user-select:none}
        .user-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:180px;border:1px solid var(--line);background:var(--surface);border-radius:10px;box-shadow:0 6px 22px rgba(0,0,0,.3);padding:6px;z-index:100}
        .menu-item{display:block;width:100%;text-align:left;padding:8px 10px;border-radius:8px;color:var(--text) !important;text-decoration:none;border:none;background:transparent !important;cursor:pointer;font-size:14px;font-family:inherit;user-select:none;-webkit-tap-highlight-color:transparent}
        .menu-item:hover{background:var(--ghost) !important;color:var(--text) !important}
        .menu-item:active{background:var(--ghost) !important;color:var(--text) !important}
        .menu-item:focus{outline:none;box-shadow:none;background:transparent !important;color:var(--text) !important}
        .menu-item:focus-visible{outline:2px solid var(--brand);outline-offset:-2px;background:var(--ghost) !important}
        .menu-item::-moz-focus-inner{border:0} 
        .menu-item:visited{color:var(--text) !important}
        .overlay{position:fixed;inset:0;background:rgba(0,0,0,.4)}
        @media (max-width:900px){
          .hamburger{display:flex}
          .nav{position:fixed;inset:64px 0 auto auto;top:64px;right:0;flex-direction:column;align-items:stretch;background:var(--surface);border-left:1px solid var(--line);padding:12px;gap:6px;width:min(300px,90vw);height:calc(100vh - 64px);transform:translateX(100%);transition:.2s}
          .nav.open{transform:translateX(0)}
          .search-container{min-width:unset;max-width:unset;width:100%;margin:6px 0}
          .search-suggestions{position:static;border:none;border-radius:0;margin-top:0;max-height:200px;box-shadow:none}
          .divider{display:none}
          .auth{margin-top:6px;flex-direction:column;width:100%}
          .auth-btn{width:100%}
        }
      `})]})}function pw(){const e=new Date().getFullYear();return a.jsxs("footer",{className:"footer",role:"contentinfo",children:[a.jsxs("div",{className:"container footer-inner",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"col brand-col",children:[a.jsxs(U,{to:"/",className:"brand","aria-label":"Home",children:[a.jsx("img",{src:"/images/title.png",alt:"Own Setup logo"}),a.jsx("span",{className:"sr-only",children:"Own Setup"})]}),a.jsx("p",{className:"tagline",children:"Everyday essentials with thoughtful design and lasting quality."})]}),a.jsxs("nav",{className:"col","aria-label":"Footer navigation",children:[a.jsx("h3",{className:"col-title",children:"Navigate"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx(U,{to:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(U,{to:"/shop",children:"Shop"})}),a.jsx("li",{children:a.jsx(U,{to:"/about",children:"About"})}),a.jsx("li",{children:a.jsx(U,{to:"/contact",children:"Contact"})}),a.jsx("li",{children:a.jsx(U,{to:"/cart",children:"Cart"})})]})]}),a.jsxs("nav",{className:"col","aria-label":"Help and policies",children:[a.jsx("h3",{className:"col-title",children:"Help"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx(U,{to:"/support",children:"Support"})}),a.jsx("li",{children:a.jsx(U,{to:"/faq",children:"FAQ"})}),a.jsx("li",{children:a.jsx(U,{to:"/shipping-returns",children:"Shipping & Returns"})}),a.jsx("li",{children:a.jsx(U,{to:"/privacy",children:"Privacy Policy"})}),a.jsx("li",{children:a.jsx(U,{to:"/terms",children:"Terms of Service"})})]})]}),a.jsxs("div",{className:"col",children:[a.jsx("h3",{className:"col-title",children:"Contact"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),a.jsx("li",{children:"Phone: +94 76 89 76 222"}),a.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00"}),a.jsx("li",{children:"Address: 252/1A Mannar Road, Puttalam"})]}),a.jsxs("div",{className:"social",children:[a.jsx("a",{href:"https://www.instagram.com/","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:"IG"}),a.jsx("a",{href:"https://facebook.com/","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:"FB"}),a.jsx("a",{href:"https://x.com/","aria-label":"X (Twitter)",target:"_blank",rel:"noopener noreferrer",children:"X"})]})]}),a.jsxs("div",{className:"col newsletter",children:[a.jsx("h3",{className:"col-title",children:"Stay in the loop"}),a.jsx("p",{className:"muted",children:"Subscribe for product drops, care tips, and seasonal edits."}),a.jsxs("form",{className:"signup",onSubmit:t=>{t.preventDefault(),alert("Thanks for subscribing!")},children:[a.jsx("label",{htmlFor:"footer-email",className:"sr-only",children:"Email address"}),a.jsx("input",{id:"footer-email",type:"email",required:!0,placeholder:"email@example.com",autoComplete:"email"}),a.jsx("button",{className:"btn btn-primary",type:"submit",children:"Subscribe"})]}),a.jsx("p",{className:"tiny muted",children:"By subscribing, consent to receive marketing emails; unsubscribe anytime."})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"left",children:[a.jsxs("span",{children:["© ",e," Own Setup 💼"]}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(U,{to:"/privacy",children:"Privacy"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(U,{to:"/terms",children:"Terms"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(U,{to:"/support",children:"Support"})]}),a.jsxs("div",{className:"right",children:[a.jsx(U,{to:"/sitemap",children:"Sitemap"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:"Back to top ↑"})]})]})]}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
        }
        .footer{border-top:1px solid var(--line);background:linear-gradient(180deg, transparent, rgba(109,116,255,0.06));padding:28px 0 20px}
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .footer-inner{display:flex;flex-direction:column;gap:16px}
        .footer-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr 1.2fr 1.2fr;gap:16px}
        .brand{display:inline-flex;align-items:center;text-decoration:none}
        .brand img{display:block;height:46px;width:auto}
        .tagline{color:var(--muted);margin-top:6px;max-width:36ch}
        .col-title{margin:0 0 8px;font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
        .list{list-style:none;margin:0;padding:0;display:grid;gap:6px}
        .list a{color:var(--text);text-decoration:none}
        .list a:hover{text-decoration:underline}
        .social{display:flex;gap:8px;margin-top:8px}
        .social a{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:8px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .newsletter .muted{margin:0 0 8px}
        .signup{display:flex;gap:8px}
        .signup input{flex:1;min-width:0;height:38px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;cursor:pointer}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .footer-bottom{display:flex;justify-content:space-between;align-items:center;gap:12px;border-top:1px solid var(--line);padding-top:12px;margin-top:8px}
        .left,.right{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        .dot{color:var(--muted)}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

        @media (max-width:1024px){
          .footer-grid{grid-template-columns:1fr 1fr;gap:14px}
        }
        @media (max-width:640px){
          .footer-grid{grid-template-columns:1fr}
          .signup{flex-direction:column}
          .footer-bottom{flex-direction:column;align-items:flex-start}
        }
      `})]})}function mw(){return a.jsxs(a.Fragment,{children:[a.jsx(fw,{}),a.jsx(f0,{}),a.jsx(pw,{})]})}function gw(){const[e,t]=w.useState([]),[n,r]=w.useState(1),[i]=w.useState(10),[s,o]=w.useState(0),[l,c]=w.useState(!1),[d,u]=w.useState(null),f=w.useRef(n);w.useEffect(()=>{f.current=n},[n]);async function h(g){var k;c(!0),u(null);const b=new AbortController;try{const S=(await V.get("/admin/orders",{params:{page:g,size:i},signal:b.signal})).data;t(Array.isArray(S.items)?S.items:[]),o(Number.isFinite(S.total)?S.total:0),r(Number.isFinite(S.page)?S.page:g)}catch(j){const S=j;if(((k=S==null?void 0:S.response)==null?void 0:k.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{c(!1)}return()=>b.abort()}w.useEffect(()=>{let g=!1;const b=new AbortController;return(async()=>{var k;try{const j=await V.get("/admin/orders",{params:{page:1,size:i},signal:b.signal});if(g)return;t(Array.isArray(j.data.items)?j.data.items:[]),o(Number.isFinite(j.data.total)?j.data.total:0),r(Number.isFinite(j.data.page)?j.data.page:1),u(null)}catch(j){if(g)return;const S=j;if(((k=S==null?void 0:S.response)==null?void 0:k.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{g||c(!1)}})(),()=>{g=!0,b.abort()}},[]),w.useEffect(()=>{const g=window.setInterval(()=>{const b=f.current;h(b)},5e3);return()=>window.clearInterval(g)},[]),w.useEffect(()=>{n<=0||h(n)},[n]);const m=w.useMemo(()=>Math.max(1,Math.ceil((s||0)/i)),[s,i]);function p(g){return`LKR ${(Number.isFinite(g)?g:0).toFixed(2)}`}async function v(g,b){var k;try{await V.put(`/admin/orders/${g}/status`,{new_status:b,admin_feedback:null,resubmit_required:!1,estimated_delivery_date:null}),await h(f.current)}catch(j){const S=j;if(((k=S==null?void 0:S.response)==null?void 0:k.status)===401){try{window.location.href="/login"}catch{}return}console.error("Failed to update status",j),alert("Failed to update status. Please try again.")}}const y=n>1,x=n<m;return a.jsxs("div",{className:"orders-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"10px"},children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),"Order Management"]}),a.jsx("p",{className:"page-subtitle",children:"View and manage customer orders"})]}),a.jsxs("div",{className:"page-header-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:s}),a.jsx("div",{className:"stat-label",children:"Total Orders"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(g=>g.status==="pending_verification").length}),a.jsx("div",{className:"stat-label",children:"Pending Verification"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(g=>g.status==="payment_verified").length}),a.jsx("div",{className:"stat-label",children:"Payment Verified"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(g=>g.status==="processing").length}),a.jsx("div",{className:"stat-label",children:"Processing"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(g=>g.status==="delivered").length}),a.jsx("div",{className:"stat-label",children:"Delivered"})]})]})]}),d&&a.jsxs("div",{className:"alert-error",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"8px"},children:[a.jsx("path",{d:"M21 10H7"}),a.jsx("path",{d:"M21 6H3"}),a.jsx("path",{d:"M21 14H3"}),a.jsx("path",{d:"M21 18H7"})]}),"All Orders",a.jsx("span",{className:"badge-count",children:s})]}),a.jsxs("button",{className:"btn-refresh",onClick:()=>h(1),disabled:l,type:"button",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:l?"spinner":"",children:a.jsx("path",{d:"M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"})}),l?"Refreshing...":"Refresh"]})]}),l&&e.length===0&&a.jsxs("div",{className:"loading-state",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:a.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),a.jsx("p",{children:"Loading orders..."})]}),!l&&e.length===0&&a.jsxs("div",{className:"empty-state-large",children:[a.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.3",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),a.jsx("h3",{children:"No Orders Yet"}),a.jsx("p",{children:"Orders will appear here when customers make purchases"})]}),e.length>0&&a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.map(g=>a.jsxs("div",{style:{border:"1px solid #e0e0e0",borderRadius:"8px",padding:"20px",backgroundColor:"#fff"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px",paddingBottom:"12px",borderBottom:"2px solid #f0f0f0"},children:[a.jsxs("div",{children:[a.jsxs("h3",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:["Order #",g.id]}),a.jsx("p",{style:{margin:"4px 0 0",fontSize:"13px",color:"#666"},children:g.created_at?new Date(g.created_at).toLocaleString():"N/A"})]}),a.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#6D74FF"},children:p(g.total_amount)})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"16px"},children:[a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"👤 Customer Information"}),a.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.8"},children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Name:"})," ",g.customer_name||"N/A"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Phone:"})," ",g.customer_phone||"N/A"]}),g.customer_email&&a.jsxs("div",{children:[a.jsx("strong",{children:"Email:"})," ",g.customer_email]})]}),a.jsx("h4",{style:{margin:"16px 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"📍 Delivery Address"}),a.jsx("div",{style:{fontSize:"14px",lineHeight:"1.8"},children:g.shipping_address?a.jsxs(a.Fragment,{children:[a.jsx("div",{children:g.shipping_address.line1}),a.jsxs("div",{children:[g.shipping_address.city,", ",g.shipping_address.postal_code]}),a.jsx("div",{children:g.shipping_address.country})]}):a.jsx("div",{children:"No address provided"})})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{margin:"0 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"💳 Payment Information"}),a.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.8"},children:[a.jsxs("div",{children:[a.jsx("strong",{children:"Bank:"})," ",g.selected_bank||"N/A"]}),a.jsxs("div",{children:[a.jsx("strong",{children:"Payment Status:"})," ",g.payment_status||"N/A"]}),g.transaction_reference&&a.jsxs("div",{children:[a.jsx("strong",{children:"Reference ID:"})," ",g.transaction_reference]})]}),g.transfer_receipt_url&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{style:{margin:"16px 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"📄 Transfer Receipt"}),a.jsx("div",{children:a.jsx("a",{href:g.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"8px 16px",backgroundColor:"#6D74FF",color:"white",textDecoration:"none",borderRadius:"4px",fontSize:"14px"},children:"📥 View/Download Receipt"})})]}),g.additional_notes&&a.jsxs(a.Fragment,{children:[a.jsx("h4",{style:{margin:"16px 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"📝 Notes"}),a.jsx("div",{style:{fontSize:"14px",color:"#666",fontStyle:"italic"},children:g.additional_notes})]})]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"16px",borderTop:"1px solid #f0f0f0"},children:[a.jsx("div",{children:a.jsxs("span",{style:{fontSize:"14px",fontWeight:"bold",padding:"6px 12px",borderRadius:"20px",backgroundColor:g.status==="pending_verification"?"#fff4e5":g.status==="payment_verified"?"#e5f5ff":g.status==="processing"?"#fff0e5":g.status==="shipped"?"#e5f0ff":g.status==="delivered"?"#e5ffe5":g.status==="cancelled"?"#ffe5e5":"#f0f0f0",color:g.status==="pending_verification"?"#d97706":g.status==="payment_verified"?"#0284c7":g.status==="processing"?"#ea580c":g.status==="shipped"?"#2563eb":g.status==="delivered"?"#16a34a":g.status==="cancelled"?"#dc2626":"#666"},children:[g.status==="pending_verification"&&"⏳ ",g.status==="payment_verified"&&"✅ ",g.status==="processing"&&"⚙️ ",g.status==="shipped"&&"🚚 ",g.status==="delivered"&&"📦 ",g.status==="cancelled"&&"❌ ",g.status.replace(/_/g," ").toUpperCase()]})}),a.jsx("div",{style:{display:"flex",gap:"8px"},children:a.jsxs("select",{onChange:b=>v(g.id,b.target.value),value:g.status,style:{padding:"8px 12px",borderRadius:"4px",border:"1px solid #ccc",fontSize:"14px",cursor:"pointer"},children:[a.jsx("option",{value:"pending_verification",children:"⏳ Pending Verification"}),a.jsx("option",{value:"payment_verified",children:"✅ Payment Verified"}),a.jsx("option",{value:"processing",children:"⚙️ Order Processing"}),a.jsx("option",{value:"shipped",children:"🚚 Shipped"}),a.jsx("option",{value:"delivered",children:"📦 Delivered"}),a.jsx("option",{value:"cancelled",children:"❌ Cancelled"})]})})]})]},g.id))}),e.length>0&&a.jsxs("div",{className:"pagination-footer",children:[a.jsxs("div",{className:"pagination-info",children:["Showing page ",a.jsx("strong",{children:n})," of ",a.jsx("strong",{children:m})," — ",a.jsx("strong",{children:s})," total orders"]}),a.jsxs("div",{className:"pagination-controls",children:[a.jsxs("button",{className:"btn-page",onClick:()=>r(g=>Math.max(1,g-1)),disabled:!y,type:"button",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),a.jsx("div",{className:"page-number",children:a.jsx("span",{children:n})}),a.jsxs("button",{className:"btn-page",onClick:()=>r(g=>Math.min(m,g+1)),disabled:!x,type:"button",children:["Next",a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]})]})]}),a.jsx("style",{children:`
        /* Page Layout */
        .orders-page {
          max-width: 100%;
        }
        
        .page-header {
          margin-bottom: 32px;
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }
        
        .page-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }
        
        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .btn-refresh {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-refresh:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .btn-refresh:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .loading-state p {
          margin: 0;
          font-size: 14px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .empty-state-large {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
        }
        
        .empty-state-large h3 {
          color: #4a5568;
          margin: 16px 0 8px 0;
          font-size: 20px;
        }
        
        .empty-state-large p {
          margin: 0;
          color: #a0aec0;
          font-size: 14px;
        }
        
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          color: #ef4444;
          margin-bottom: 24px;
        }
        
        /* Orders Table */
        .orders-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header-orders {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 180px;
          gap: 16px;
          padding: 16px 24px;
          background: #f7fafc;
          font-weight: 600;
          font-size: 13px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table-row-orders {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 180px;
          gap: 16px;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row-orders:hover {
          background: #f7fafc;
        }
        
        .td-order, .td-status, .td-total, .td-actions-orders {
          display: flex;
          align-items: center;
        }
        
        .order-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .order-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .order-info {
          display: flex;
          flex-direction: column;
        }
        
        .order-number {
          font-weight: 600;
          color: #2d3748;
          font-size: 14px;
        }
        
        .order-id {
          font-size: 12px;
          color: #a0aec0;
        }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          text-transform: capitalize;
        }
        
        .status-badge.status-pending {
          background: rgba(251, 191, 36, 0.1);
          color: #d97706;
        }
        
        .status-badge.status-processing {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .status-badge.status-shipped {
          background: rgba(139, 92, 246, 0.1);
          color: #7c3aed;
        }
        
        .status-badge.status-delivered {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.status-canceled {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .amount-display {
          font-weight: 700;
          color: #059669;
          font-size: 16px;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-action:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-processing {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .btn-processing:hover:not(:disabled) {
          background: #2563eb;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-shipped {
          background: rgba(139, 92, 246, 0.1);
          color: #7c3aed;
        }
        
        .btn-shipped:hover:not(:disabled) {
          background: #7c3aed;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-delivered {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .btn-delivered:hover:not(:disabled) {
          background: #059669;
          color: white;
          transform: scale(1.05);
        }
        
        /* Pagination */
        .pagination-footer {
          padding: 20px 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .pagination-info {
          font-size: 14px;
          color: #718096;
        }
        
        .pagination-info strong {
          color: #2d3748;
          font-weight: 600;
        }
        
        .pagination-controls {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .btn-page {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-page:hover:not(:disabled) {
          background: #f7fafc;
          border-color: #667eea;
          color: #667eea;
        }
        
        .btn-page:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .page-number {
          padding: 8px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          min-width: 48px;
          text-align: center;
        }
        
        @media (max-width: 900px) {
          .table-header-orders, .table-row-orders {
            grid-template-columns: 2fr 1fr 140px;
          }
          .th-total, .td-total {
            display: none;
          }
          .pagination-footer {
            flex-direction: column;
            gap: 16px;
          }
        }
      `})]})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function zs(e){return e+.5|0}const Nn=(e,t,n)=>Math.max(Math.min(e,n),t);function Ai(e){return Nn(zs(e*2.55),0,255)}function In(e){return Nn(zs(e*255),0,255)}function rn(e){return Nn(zs(e/2.55)/100,0,1)}function mf(e){return Nn(zs(e*100),0,100)}const gt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Kc=[..."0123456789ABCDEF"],xw=e=>Kc[e&15],vw=e=>Kc[(e&240)>>4]+Kc[e&15],ra=e=>(e&240)>>4===(e&15),yw=e=>ra(e.r)&&ra(e.g)&&ra(e.b)&&ra(e.a);function bw(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&gt[e[1]]*17,g:255&gt[e[2]]*17,b:255&gt[e[3]]*17,a:t===5?gt[e[4]]*17:255}:(t===7||t===9)&&(n={r:gt[e[1]]<<4|gt[e[2]],g:gt[e[3]]<<4|gt[e[4]],b:gt[e[5]]<<4|gt[e[6]],a:t===9?gt[e[7]]<<4|gt[e[8]]:255})),n}const ww=(e,t)=>e<255?t(e):"";function jw(e){var t=yw(e)?xw:vw;return e?"#"+t(e.r)+t(e.g)+t(e.b)+ww(e.a,t):void 0}const kw=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function W0(e,t,n){const r=t*Math.min(n,1-n),i=(s,o=(s+e/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function Sw(e,t,n){const r=(i,s=(i+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function _w(e,t,n){const r=W0(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function Nw(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function hu(e){const n=e.r/255,r=e.g/255,i=e.b/255,s=Math.max(n,r,i),o=Math.min(n,r,i),l=(s+o)/2;let c,d,u;return s!==o&&(u=s-o,d=l>.5?u/(2-s-o):u/(s+o),c=Nw(n,r,i,u,s),c=c*60+.5),[c|0,d||0,l]}function fu(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(In)}function pu(e,t,n){return fu(W0,e,t,n)}function Cw(e,t,n){return fu(_w,e,t,n)}function Pw(e,t,n){return fu(Sw,e,t,n)}function U0(e){return(e%360+360)%360}function Ew(e){const t=kw.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Ai(+t[5]):In(+t[5]));const i=U0(+t[2]),s=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?r=Cw(i,s,o):t[1]==="hsv"?r=Pw(i,s,o):r=pu(i,s,o),{r:r[0],g:r[1],b:r[2],a:n}}function Rw(e,t){var n=hu(e);n[0]=U0(n[0]+t),n=pu(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Mw(e){if(!e)return;const t=hu(e),n=t[0],r=mf(t[1]),i=mf(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${rn(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const gf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},xf={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Tw(){const e={},t=Object.keys(xf),n=Object.keys(gf);let r,i,s,o,l;for(r=0;r<t.length;r++){for(o=l=t[r],i=0;i<n.length;i++)s=n[i],l=l.replace(s,gf[s]);s=parseInt(xf[o],16),e[l]=[s>>16&255,s>>8&255,s&255]}return e}let ia;function zw(e){ia||(ia=Tw(),ia.transparent=[0,0,0,0]);const t=ia[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Aw=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Ow(e){const t=Aw.exec(e);let n=255,r,i,s;if(t){if(t[7]!==r){const o=+t[7];n=t[8]?Ai(o):Nn(o*255,0,255)}return r=+t[1],i=+t[3],s=+t[5],r=255&(t[2]?Ai(r):Nn(r,0,255)),i=255&(t[4]?Ai(i):Nn(i,0,255)),s=255&(t[6]?Ai(s):Nn(s,0,255)),{r,g:i,b:s,a:n}}}function Lw(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${rn(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Rl=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Sr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function Dw(e,t,n){const r=Sr(rn(e.r)),i=Sr(rn(e.g)),s=Sr(rn(e.b));return{r:In(Rl(r+n*(Sr(rn(t.r))-r))),g:In(Rl(i+n*(Sr(rn(t.g))-i))),b:In(Rl(s+n*(Sr(rn(t.b))-s))),a:e.a+n*(t.a-e.a)}}function sa(e,t,n){if(e){let r=hu(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=pu(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function $0(e,t){return e&&Object.assign(t||{},e)}function vf(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=In(e[3]))):(t=$0(e,{r:0,g:0,b:0,a:1}),t.a=In(t.a)),t}function Fw(e){return e.charAt(0)==="r"?Ow(e):Ew(e)}class xs{constructor(t){if(t instanceof xs)return t;const n=typeof t;let r;n==="object"?r=vf(t):n==="string"&&(r=bw(t)||zw(t)||Fw(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=$0(this._rgb);return t&&(t.a=rn(t.a)),t}set rgb(t){this._rgb=vf(t)}rgbString(){return this._valid?Lw(this._rgb):void 0}hexString(){return this._valid?jw(this._rgb):void 0}hslString(){return this._valid?Mw(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let s;const o=n===s?.5:n,l=2*o-1,c=r.a-i.a,d=((l*c===-1?l:(l+c)/(1+l*c))+1)/2;s=1-d,r.r=255&d*r.r+s*i.r+.5,r.g=255&d*r.g+s*i.g+.5,r.b=255&d*r.b+s*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=Dw(this._rgb,t._rgb,n)),this}clone(){return new xs(this.rgb)}alpha(t){return this._rgb.a=In(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=zs(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return sa(this._rgb,2,t),this}darken(t){return sa(this._rgb,2,-t),this}saturate(t){return sa(this._rgb,1,t),this}desaturate(t){return sa(this._rgb,1,-t),this}rotate(t){return Rw(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Zt(){}const Iw=(()=>{let e=0;return()=>e++})();function se(e){return e==null}function Te(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ne(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function St(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Ht(e,t){return St(e)?e:t}function Z(e,t){return typeof e>"u"?t:e}const Bw=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function me(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function ae(e,t,n,r){let i,s,o;if(Te(e))for(s=e.length,i=0;i<s;i++)t.call(n,e[i],i);else if(ne(e))for(o=Object.keys(e),s=o.length,i=0;i<s;i++)t.call(n,e[o[i]],o[i])}function go(e,t){let n,r,i,s;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],s=t[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function xo(e){if(Te(e))return e.map(xo);if(ne(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=xo(e[n[i]]);return t}return e}function q0(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Hw(e,t,n,r){if(!q0(e))return;const i=t[e],s=n[e];ne(i)&&ne(s)?vs(i,s,r):t[e]=xo(s)}function vs(e,t,n){const r=Te(t)?t:[t],i=r.length;if(!ne(e))return e;n=n||{};const s=n.merger||Hw;let o;for(let l=0;l<i;++l){if(o=r[l],!ne(o))continue;const c=Object.keys(o);for(let d=0,u=c.length;d<u;++d)s(c[d],e,o,n)}return e}function Ki(e,t){return vs(e,t,{merger:Ww})}function Ww(e,t,n){if(!q0(e))return;const r=t[e],i=n[e];ne(r)&&ne(i)?Ki(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=xo(i))}const yf={"":e=>e,x:e=>e.x,y:e=>e.y};function Uw(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function $w(e){const t=Uw(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function ni(e,t){return(yf[t]||(yf[t]=$w(t)))(e)}function mu(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ys=e=>typeof e<"u",Wn=e=>typeof e=="function",bf=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function qw(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const ue=Math.PI,Be=2*ue,Vw=Be+ue,vo=Number.POSITIVE_INFINITY,Yw=ue/180,Fe=ue/2,Yn=ue/4,wf=ue*2/3,V0=Math.log10,Xt=Math.sign;function Xi(e,t,n){return Math.abs(e-t)<n}function jf(e){const t=Math.round(e);e=Xi(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(V0(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function Kw(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,s)=>i-s).pop(),t}function Xw(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function bs(e){return!Xw(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Qw(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function Gw(e,t,n){let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r][n],isNaN(s)||(t.min=Math.min(t.min,s),t.max=Math.max(t.max,s))}function sr(e){return e*(ue/180)}function Zw(e){return e*(180/ue)}function kf(e){if(!St(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Y0(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*ue&&(s+=Be),{angle:s,distance:i}}function Xc(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Jw(e,t){return(e-t+Vw)%Be-ue}function Rt(e){return(e%Be+Be)%Be}function gu(e,t,n,r){const i=Rt(e),s=Rt(t),o=Rt(n),l=Rt(s-i),c=Rt(o-i),d=Rt(i-s),u=Rt(i-o);return i===s||i===o||r&&s===o||l>c&&d<u}function Ye(e,t,n){return Math.max(t,Math.min(n,e))}function ej(e){return Ye(e,-32768,32767)}function Cn(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function xu(e,t,n){n=n||(o=>e[o]<t);let r=e.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const ar=(e,t,n,r)=>xu(e,n,r?i=>{const s=e[i][t];return s<n||s===n&&e[i+1][t]===n}:i=>e[i][t]<n),tj=(e,t,n)=>xu(e,n,r=>e[r][t]>=n);function nj(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const K0=["push","pop","shift","splice","unshift"];function rj(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),K0.forEach(n=>{const r="_onData"+mu(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...s){const o=i.apply(this,s);return e._chartjs.listeners.forEach(l=>{typeof l[r]=="function"&&l[r](...s)}),o}})})}function Sf(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(K0.forEach(s=>{delete e[s]}),delete e._chartjs)}function X0(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Q0=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function G0(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Q0.call(window,()=>{r=!1,e.apply(t,n)}))}}function ij(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const vu=e=>e==="start"?"left":e==="end"?"right":"center",$e=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,sj=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function aj(e,t,n){const r=t.length;let i=0,s=r;if(e._sorted){const{iScale:o,vScale:l,_parsed:c}=e,d=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:f,max:h,minDefined:m,maxDefined:p}=o.getUserBounds();if(m){if(i=Math.min(ar(c,u,f).lo,n?r:ar(t,u,o.getPixelForValue(f)).lo),d){const v=c.slice(0,i+1).reverse().findIndex(y=>!se(y[l.axis]));i-=Math.max(0,v)}i=Ye(i,0,r-1)}if(p){let v=Math.max(ar(c,o.axis,h,!0).hi+1,n?0:ar(t,u,o.getPixelForValue(h),!0).hi+1);if(d){const y=c.slice(v-1).findIndex(x=>!se(x[l.axis]));v+=Math.max(0,y)}s=Ye(v,i,r)-i}else s=r-i}return{start:i,count:s}}function oj(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const s=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),s}const aa=e=>e===0||e===1,_f=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Be/n)),Nf=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Be/n)+1,Qi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*Fe)+1,easeOutSine:e=>Math.sin(e*Fe),easeInOutSine:e=>-.5*(Math.cos(ue*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>aa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>aa(e)?e:_f(e,.075,.3),easeOutElastic:e=>aa(e)?e:Nf(e,.075,.3),easeInOutElastic(e){return aa(e)?e:e<.5?.5*_f(e*2,.1125,.45):.5+.5*Nf(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Qi.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Qi.easeInBounce(e*2)*.5:Qi.easeOutBounce(e*2-1)*.5+.5};function yu(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Cf(e){return yu(e)?e:new xs(e)}function Ml(e){return yu(e)?e:new xs(e).saturate(.5).darken(.1).hexString()}const lj=["x","y","borderWidth","radius","tension"],cj=["color","borderColor","backgroundColor"];function dj(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:cj},numbers:{type:"number",properties:lj}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function uj(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Pf=new Map;function hj(e,t){t=t||{};const n=e+JSON.stringify(t);let r=Pf.get(n);return r||(r=new Intl.NumberFormat(e,t),Pf.set(n,r)),r}function Z0(e,t,n){return hj(t,n).format(e)}const fj={values(e){return Te(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,s=e;if(n.length>1){const d=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(d<1e-4||d>1e15)&&(i="scientific"),s=pj(e,n)}const o=V0(Math.abs(s)),l=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(c,this.options.ticks.format),Z0(e,r,c)}};function pj(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var J0={formatters:fj};function mj(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:J0.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const xr=Object.create(null),Qc=Object.create(null);function Gi(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];e=e[s]||(e[s]=Object.create(null))}return e}function Tl(e,t,n){return typeof t=="string"?vs(Gi(e,t),n):vs(Gi(e,""),t)}class gj{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Ml(i.backgroundColor),this.hoverBorderColor=(r,i)=>Ml(i.borderColor),this.hoverColor=(r,i)=>Ml(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Tl(this,t,n)}get(t){return Gi(this,t)}describe(t,n){return Tl(Qc,t,n)}override(t,n){return Tl(xr,t,n)}route(t,n,r,i){const s=Gi(this,t),o=Gi(this,r),l="_"+n;Object.defineProperties(s,{[l]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[l],d=o[i];return ne(c)?Object.assign({},d,c):Z(c,d)},set(c){this[l]=c}}})}apply(t){t.forEach(n=>n(this))}}var Ee=new gj({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[dj,uj,mj]);function xj(e){return!e||se(e.size)||se(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ef(e,t,n,r,i){let s=t[i];return s||(s=t[i]=e.measureText(i).width,n.push(i)),s>r&&(r=s),r}function Kn(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function Rf(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Gc(e,t,n,r){ex(e,t,n,r,null)}function ex(e,t,n,r,i){let s,o,l,c,d,u,f,h;const m=t.pointStyle,p=t.rotation,v=t.radius;let y=(p||0)*Yw;if(m&&typeof m=="object"&&(s=m.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(y),e.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),e.restore();return}if(!(isNaN(v)||v<=0)){switch(e.beginPath(),m){default:i?e.ellipse(n,r,i/2,v,0,0,Be):e.arc(n,r,v,0,Be),e.closePath();break;case"triangle":u=i?i/2:v,e.moveTo(n+Math.sin(y)*u,r-Math.cos(y)*v),y+=wf,e.lineTo(n+Math.sin(y)*u,r-Math.cos(y)*v),y+=wf,e.lineTo(n+Math.sin(y)*u,r-Math.cos(y)*v),e.closePath();break;case"rectRounded":d=v*.516,c=v-d,o=Math.cos(y+Yn)*c,f=Math.cos(y+Yn)*(i?i/2-d:c),l=Math.sin(y+Yn)*c,h=Math.sin(y+Yn)*(i?i/2-d:c),e.arc(n-f,r-l,d,y-ue,y-Fe),e.arc(n+h,r-o,d,y-Fe,y),e.arc(n+f,r+l,d,y,y+Fe),e.arc(n-h,r+o,d,y+Fe,y+ue),e.closePath();break;case"rect":if(!p){c=Math.SQRT1_2*v,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}y+=Yn;case"rectRot":f=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,l=Math.sin(y)*v,h=Math.sin(y)*(i?i/2:v),e.moveTo(n-f,r-l),e.lineTo(n+h,r-o),e.lineTo(n+f,r+l),e.lineTo(n-h,r+o),e.closePath();break;case"crossRot":y+=Yn;case"cross":f=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,l=Math.sin(y)*v,h=Math.sin(y)*(i?i/2:v),e.moveTo(n-f,r-l),e.lineTo(n+f,r+l),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o);break;case"star":f=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,l=Math.sin(y)*v,h=Math.sin(y)*(i?i/2:v),e.moveTo(n-f,r-l),e.lineTo(n+f,r+l),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o),y+=Yn,f=Math.cos(y)*(i?i/2:v),o=Math.cos(y)*v,l=Math.sin(y)*v,h=Math.sin(y)*(i?i/2:v),e.moveTo(n-f,r-l),e.lineTo(n+f,r+l),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o);break;case"line":o=i?i/2:Math.cos(y)*v,l=Math.sin(y)*v,e.moveTo(n-o,r-l),e.lineTo(n+o,r+l);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(y)*(i?i/2:v),r+Math.sin(y)*v);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function ws(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function bu(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function wu(e){e.restore()}function vj(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const s=(t.x+n.x)/2;e.lineTo(s,t.y),e.lineTo(s,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function yj(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function bj(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),se(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function wj(e,t,n,r,i){if(i.strikethrough||i.underline){const s=e.measureText(r),o=t-s.actualBoundingBoxLeft,l=t+s.actualBoundingBoxRight,c=n-s.actualBoundingBoxAscent,d=n+s.actualBoundingBoxDescent,u=i.strikethrough?(c+d)/2:d;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(l,u),e.stroke()}}function jj(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function js(e,t,n,r,i,s={}){const o=Te(t)?t:[t],l=s.strokeWidth>0&&s.strokeColor!=="";let c,d;for(e.save(),e.font=i.string,bj(e,s),c=0;c<o.length;++c)d=o[c],s.backdrop&&jj(e,s.backdrop),l&&(s.strokeColor&&(e.strokeStyle=s.strokeColor),se(s.strokeWidth)||(e.lineWidth=s.strokeWidth),e.strokeText(d,n,r,s.maxWidth)),e.fillText(d,n,r,s.maxWidth),wj(e,n,r,d,s),r+=Number(i.lineHeight);e.restore()}function yo(e,t){const{x:n,y:r,w:i,h:s,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*ue,ue,!0),e.lineTo(n,r+s-o.bottomLeft),e.arc(n+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,ue,Fe,!0),e.lineTo(n+i-o.bottomRight,r+s),e.arc(n+i-o.bottomRight,r+s-o.bottomRight,o.bottomRight,Fe,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-Fe,!0),e.lineTo(n+o.topLeft,r)}const kj=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Sj=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function _j(e,t){const n=(""+e).match(kj);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const Nj=e=>+e||0;function ju(e,t){const n={},r=ne(t),i=r?Object.keys(t):t,s=ne(e)?r?o=>Z(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of i)n[o]=Nj(s(o));return n}function tx(e){return ju(e,{top:"y",right:"x",bottom:"y",left:"x"})}function $r(e){return ju(e,["topLeft","topRight","bottomLeft","bottomRight"])}function _t(e){const t=tx(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ke(e,t){e=e||{},t=t||Ee.font;let n=Z(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=Z(e.style,t.style);r&&!(""+r).match(Sj)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:Z(e.family,t.family),lineHeight:_j(Z(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:Z(e.weight,t.weight),string:""};return i.string=xj(i),i}function oa(e,t,n,r){let i,s,o;for(i=0,s=e.length;i<s;++i)if(o=e[i],o!==void 0&&o!==void 0)return o}function Cj(e,t,n){const{min:r,max:i}=e,s=Bw(t,(i-r)/2),o=(l,c)=>n&&l===0?0:l+c;return{min:o(r,-Math.abs(s)),max:o(i,s)}}function br(e,t){return Object.assign(Object.create(e),t)}function ku(e,t=[""],n,r,i=()=>e[0]){const s=n||e;typeof r>"u"&&(r=sx("_fallback",e));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:s,_fallback:r,_getTarget:i,override:l=>ku([l,...e],t,s,r)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete l._keys,delete e[0][c],!0},get(l,c){return rx(l,c,()=>Oj(c,t,e,l))},getOwnPropertyDescriptor(l,c){return Reflect.getOwnPropertyDescriptor(l._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(l,c){return Tf(l).includes(c)},ownKeys(l){return Tf(l)},set(l,c,d){const u=l._storage||(l._storage=i());return l[c]=u[c]=d,delete l._keys,!0}})}function ri(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:nx(e,r),setContext:s=>ri(e,s,n,r),override:s=>ri(e.override(s),t,n,r)};return new Proxy(i,{deleteProperty(s,o){return delete s[o],delete e[o],!0},get(s,o,l){return rx(s,o,()=>Ej(s,o,l))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(s,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(s,o,l){return e[o]=l,delete s[o],!0}})}function nx(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Wn(n)?n:()=>n,isIndexable:Wn(r)?r:()=>r}}const Pj=(e,t)=>e?e+mu(t):t,Su=(e,t)=>ne(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function rx(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function Ej(e,t,n){const{_proxy:r,_context:i,_subProxy:s,_descriptors:o}=e;let l=r[t];return Wn(l)&&o.isScriptable(t)&&(l=Rj(t,l,e,n)),Te(l)&&l.length&&(l=Mj(t,l,e,o.isIndexable)),Su(t,l)&&(l=ri(l,i,s&&s[t],o)),l}function Rj(e,t,n,r){const{_proxy:i,_context:s,_subProxy:o,_stack:l}=n;if(l.has(e))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+e);l.add(e);let c=t(s,o||r);return l.delete(e),Su(e,c)&&(c=_u(i._scopes,i,e,c)),c}function Mj(e,t,n,r){const{_proxy:i,_context:s,_subProxy:o,_descriptors:l}=n;if(typeof s.index<"u"&&r(e))return t[s.index%t.length];if(ne(t[0])){const c=t,d=i._scopes.filter(u=>u!==c);t=[];for(const u of c){const f=_u(d,i,e,u);t.push(ri(f,s,o&&o[e],l))}}return t}function ix(e,t,n){return Wn(e)?e(t,n):e}const Tj=(e,t)=>e===!0?t:typeof e=="string"?ni(t,e):void 0;function zj(e,t,n,r,i){for(const s of t){const o=Tj(n,s);if(o){e.add(o);const l=ix(o._fallback,n,i);if(typeof l<"u"&&l!==n&&l!==r)return l}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function _u(e,t,n,r){const i=t._rootScopes,s=ix(t._fallback,n,r),o=[...e,...i],l=new Set;l.add(r);let c=Mf(l,o,n,s||n,r);return c===null||typeof s<"u"&&s!==n&&(c=Mf(l,o,s,c,r),c===null)?!1:ku(Array.from(l),[""],i,s,()=>Aj(t,n,r))}function Mf(e,t,n,r,i){for(;n;)n=zj(e,t,n,r,i);return n}function Aj(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return Te(i)&&ne(n)?n:i||{}}function Oj(e,t,n,r){let i;for(const s of t)if(i=sx(Pj(s,e),n),typeof i<"u")return Su(e,i)?_u(n,r,e,i):i}function sx(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function Tf(e){let t=e._keys;return t||(t=e._keys=Lj(e._scopes)),t}function Lj(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}const Dj=Number.EPSILON||1e-14,ii=(e,t)=>t<e.length&&!e[t].skip&&e[t],ax=e=>e==="x"?"y":"x";function Fj(e,t,n,r){const i=e.skip?t:e,s=t,o=n.skip?t:n,l=Xc(s,i),c=Xc(o,s);let d=l/(l+c),u=c/(l+c);d=isNaN(d)?0:d,u=isNaN(u)?0:u;const f=r*d,h=r*u;return{previous:{x:s.x-f*(o.x-i.x),y:s.y-f*(o.y-i.y)},next:{x:s.x+h*(o.x-i.x),y:s.y+h*(o.y-i.y)}}}function Ij(e,t,n){const r=e.length;let i,s,o,l,c,d=ii(e,0);for(let u=0;u<r-1;++u)if(c=d,d=ii(e,u+1),!(!c||!d)){if(Xi(t[u],0,Dj)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],s=n[u+1]/t[u],l=Math.pow(i,2)+Math.pow(s,2),!(l<=9)&&(o=3/Math.sqrt(l),n[u]=i*o*t[u],n[u+1]=s*o*t[u])}}function Bj(e,t,n="x"){const r=ax(n),i=e.length;let s,o,l,c=ii(e,0);for(let d=0;d<i;++d){if(o=l,l=c,c=ii(e,d+1),!l)continue;const u=l[n],f=l[r];o&&(s=(u-o[n])/3,l[`cp1${n}`]=u-s,l[`cp1${r}`]=f-s*t[d]),c&&(s=(c[n]-u)/3,l[`cp2${n}`]=u+s,l[`cp2${r}`]=f+s*t[d])}}function Hj(e,t="x"){const n=ax(t),r=e.length,i=Array(r).fill(0),s=Array(r);let o,l,c,d=ii(e,0);for(o=0;o<r;++o)if(l=c,c=d,d=ii(e,o+1),!!c){if(d){const u=d[t]-c[t];i[o]=u!==0?(d[n]-c[n])/u:0}s[o]=l?d?Xt(i[o-1])!==Xt(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}Ij(e,i,s),Bj(e,s,t)}function la(e,t,n){return Math.max(Math.min(e,n),t)}function Wj(e,t){let n,r,i,s,o,l=ws(e[0],t);for(n=0,r=e.length;n<r;++n)o=s,s=l,l=n<r-1&&ws(e[n+1],t),s&&(i=e[n],o&&(i.cp1x=la(i.cp1x,t.left,t.right),i.cp1y=la(i.cp1y,t.top,t.bottom)),l&&(i.cp2x=la(i.cp2x,t.left,t.right),i.cp2y=la(i.cp2y,t.top,t.bottom)))}function Uj(e,t,n,r,i){let s,o,l,c;if(t.spanGaps&&(e=e.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")Hj(e,i);else{let d=r?e[e.length-1]:e[0];for(s=0,o=e.length;s<o;++s)l=e[s],c=Fj(d,l,e[Math.min(s+1,o-(r?0:1))%o],t.tension),l.cp1x=c.previous.x,l.cp1y=c.previous.y,l.cp2x=c.next.x,l.cp2y=c.next.y,d=l}t.capBezierPoints&&Wj(e,n)}function Nu(){return typeof window<"u"&&typeof document<"u"}function Cu(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function bo(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const Ko=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function $j(e,t){return Ko(e).getPropertyValue(t)}const qj=["top","right","bottom","left"];function dr(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const s=qj[i];r[s]=parseFloat(e[t+"-"+s+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const Vj=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function Yj(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:s}=r;let o=!1,l,c;if(Vj(i,s,e.target))l=i,c=s;else{const d=t.getBoundingClientRect();l=r.clientX-d.left,c=r.clientY-d.top,o=!0}return{x:l,y:c,box:o}}function Zn(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=Ko(n),s=i.boxSizing==="border-box",o=dr(i,"padding"),l=dr(i,"border","width"),{x:c,y:d,box:u}=Yj(e,n),f=o.left+(u&&l.left),h=o.top+(u&&l.top);let{width:m,height:p}=t;return s&&(m-=o.width+l.width,p-=o.height+l.height),{x:Math.round((c-f)/m*n.width/r),y:Math.round((d-h)/p*n.height/r)}}function Kj(e,t,n){let r,i;if(t===void 0||n===void 0){const s=e&&Cu(e);if(!s)t=e.clientWidth,n=e.clientHeight;else{const o=s.getBoundingClientRect(),l=Ko(s),c=dr(l,"border","width"),d=dr(l,"padding");t=o.width-d.width-c.width,n=o.height-d.height-c.height,r=bo(l.maxWidth,s,"clientWidth"),i=bo(l.maxHeight,s,"clientHeight")}}return{width:t,height:n,maxWidth:r||vo,maxHeight:i||vo}}const Pn=e=>Math.round(e*10)/10;function Xj(e,t,n,r){const i=Ko(e),s=dr(i,"margin"),o=bo(i.maxWidth,e,"clientWidth")||vo,l=bo(i.maxHeight,e,"clientHeight")||vo,c=Kj(e,t,n);let{width:d,height:u}=c;if(i.boxSizing==="content-box"){const h=dr(i,"border","width"),m=dr(i,"padding");d-=m.width+h.width,u-=m.height+h.height}return d=Math.max(0,d-s.width),u=Math.max(0,r?d/r:u-s.height),d=Pn(Math.min(d,o,c.maxWidth)),u=Pn(Math.min(u,l,c.maxHeight)),d&&!u&&(u=Pn(d/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,d=Pn(Math.floor(u*r))),{width:d,height:u}}function zf(e,t,n){const r=t||1,i=Pn(e.height*r),s=Pn(e.width*r);e.height=Pn(e.height),e.width=Pn(e.width);const o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==s?(e.currentDevicePixelRatio=r,o.height=i,o.width=s,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const Qj=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Nu()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function Af(e,t){const n=$j(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Jn(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function Gj(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function Zj(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},s={x:t.cp1x,y:t.cp1y},o=Jn(e,i,n),l=Jn(i,s,n),c=Jn(s,t,n),d=Jn(o,l,n),u=Jn(l,c,n);return Jn(d,u,n)}const Jj=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},ek=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function qr(e,t,n){return e?Jj(t,n):ek()}function ox(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function lx(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function cx(e){return e==="angle"?{between:gu,compare:Jw,normalize:Rt}:{between:Cn,compare:(t,n)=>t-n,normalize:t=>t}}function Of({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function tk(e,t,n){const{property:r,start:i,end:s}=n,{between:o,normalize:l}=cx(r),c=t.length;let{start:d,end:u,loop:f}=e,h,m;if(f){for(d+=c,u+=c,h=0,m=c;h<m&&o(l(t[d%c][r]),i,s);++h)d--,u--;d%=c,u%=c}return u<d&&(u+=c),{start:d,end:u,loop:f,style:e.style}}function nk(e,t,n){if(!n)return[e];const{property:r,start:i,end:s}=n,o=t.length,{compare:l,between:c,normalize:d}=cx(r),{start:u,end:f,loop:h,style:m}=tk(e,t,n),p=[];let v=!1,y=null,x,g,b;const k=()=>c(i,b,x)&&l(i,b)!==0,j=()=>l(s,x)===0||c(s,b,x),S=()=>v||k(),N=()=>!v||j();for(let _=u,z=u;_<=f;++_)g=t[_%o],!g.skip&&(x=d(g[r]),x!==b&&(v=c(x,i,s),y===null&&S()&&(y=l(x,i)===0?_:z),y!==null&&N()&&(p.push(Of({start:y,end:_,loop:h,count:o,style:m})),y=null),z=_,b=x));return y!==null&&p.push(Of({start:y,end:f,loop:h,count:o,style:m})),p}function rk(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const s=nk(r[i],e.points,t);s.length&&n.push(...s)}return n}function ik(e,t,n,r){let i=0,s=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(s+=i);s>i&&e[s%t].skip;)s--;return s%=t,{start:i,end:s}}function sk(e,t,n,r){const i=e.length,s=[];let o=t,l=e[t],c;for(c=t+1;c<=n;++c){const d=e[c%i];d.skip||d.stop?l.skip||(r=!1,s.push({start:t%i,end:(c-1)%i,loop:r}),t=o=d.stop?c:null):(o=c,l.skip&&(t=c)),l=d}return o!==null&&s.push({start:t%i,end:o%i,loop:r}),s}function ak(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const s=!!e._loop,{start:o,end:l}=ik(n,i,s,r);if(r===!0)return Lf(e,[{start:o,end:l,loop:s}],n,t);const c=l<o?l+i:l,d=!!e._fullLoop&&o===0&&l===i-1;return Lf(e,sk(n,o,c,d),n,t)}function Lf(e,t,n,r){return!r||!r.setContext||!n?t:ok(e,t,n,r)}function ok(e,t,n,r){const i=e._chart.getContext(),s=Df(e.options),{_datasetIndex:o,options:{spanGaps:l}}=e,c=n.length,d=[];let u=s,f=t[0].start,h=f;function m(p,v,y,x){const g=l?-1:1;if(p!==v){for(p+=c;n[p%c].skip;)p-=g;for(;n[v%c].skip;)v+=g;p%c!==v%c&&(d.push({start:p%c,end:v%c,loop:y,style:x}),u=x,f=v%c)}}for(const p of t){f=l?f:p.start;let v=n[f%c],y;for(h=f+1;h<=p.end;h++){const x=n[h%c];y=Df(r.setContext(br(i,{type:"segment",p0:v,p1:x,p0DataIndex:(h-1)%c,p1DataIndex:h%c,datasetIndex:o}))),lk(y,u)&&m(f,h-1,p.loop,u),v=x,u=y}f<h-1&&m(f,h-1,p.loop,u)}return d}function Df(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function lk(e,t){if(!t)return!1;const n=[],r=function(i,s){return yu(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function ca(e,t,n){return e.options.clip?e[n]:t[n]}function ck(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:ca(n,t,"left"),right:ca(n,t,"right"),top:ca(r,t,"top"),bottom:ca(r,t,"bottom")}:t}function dk(e,t){const n=t._clip;if(n.disabled)return!1;const r=ck(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class uk{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const s=n.listeners[i],o=n.duration;s.forEach(l=>l({chart:t,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Q0.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,l=!1,c;for(;o>=0;--o)c=s[o],c._active?(c._total>r.duration&&(r.duration=c._total),c.tick(t),l=!0):(s[o]=s[s.length-1],s.pop());l&&(i.draw(),this._notify(i,r,t,"progress")),s.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=s.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Jt=new uk;const Ff="transparent",hk={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=Cf(e||Ff),i=r.valid&&Cf(t||Ff);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class fk{constructor(t,n,r,i){const s=n[r];i=oa([t.to,i,s,t.from]);const o=oa([t.from,s,i]);this._active=!0,this._fn=t.fn||hk[t.type||typeof o],this._easing=Qi[t.easing]||Qi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=s,this._loop=!!t.loop,this._to=oa([t.to,n,i,t.from]),this._from=oa([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,s=this._from,o=this._loop,l=this._to;let c;if(this._active=s!==l&&(o||n<r),!this._active){this._target[i]=l,this._notify(!0);return}if(n<0){this._target[i]=s;return}c=n/r%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(s,l,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class dx{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!ne(t))return;const n=Object.keys(Ee.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const s=t[i];if(!ne(s))return;const o={};for(const l of n)o[l]=s[l];(Te(s.properties)&&s.properties||[i]).forEach(l=>{(l===i||!r.has(l))&&r.set(l,o)})})}_animateOptions(t,n){const r=n.options,i=mk(t,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&pk(t.options.$animations,r).then(()=>{t.options=r},()=>{}),s}_createAnimations(t,n){const r=this._properties,i=[],s=t.$animations||(t.$animations={}),o=Object.keys(n),l=Date.now();let c;for(c=o.length-1;c>=0;--c){const d=o[c];if(d.charAt(0)==="$")continue;if(d==="options"){i.push(...this._animateOptions(t,n));continue}const u=n[d];let f=s[d];const h=r.get(d);if(f)if(h&&f.active()){f.update(h,u,l);continue}else f.cancel();if(!h||!h.duration){t[d]=u;continue}s[d]=f=new fk(h,t,d,u),i.push(f)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Jt.add(this._chart,r),!0}}function pk(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const s=e[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function mk(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function If(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,s=n.max===void 0?t:0;return{start:r?s:i,end:r?i:s}}function gk(e,t,n){if(n===!1)return!1;const r=If(e,n),i=If(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function xk(e){let t,n,r,i;return ne(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function ux(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function Bf(e,t,n,r={}){const i=e.keys,s=r.mode==="single";let o,l,c,d;if(t===null)return;let u=!1;for(o=0,l=i.length;o<l;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}d=e.values[c],St(d)&&(s||t===0||Xt(t)===Xt(d))&&(t+=d)}return!u&&!r.all?0:t}function vk(e,t){const{iScale:n,vScale:r}=t,i=n.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(e),l=new Array(o.length);let c,d,u;for(c=0,d=o.length;c<d;++c)u=o[c],l[c]={[i]:u,[s]:e[u]};return l}function zl(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function yk(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function bk(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function wk(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Hf(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const s=e[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function Wf(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:l}=r,c=s.axis,d=o.axis,u=yk(s,o,r),f=t.length;let h;for(let m=0;m<f;++m){const p=t[m],{[c]:v,[d]:y}=p,x=p._stacks||(p._stacks={});h=x[d]=wk(i,u,v),h[l]=y,h._top=Hf(h,o,!0,r.type),h._bottom=Hf(h,o,!1,r.type);const g=h._visualValues||(h._visualValues={});g[l]=y}}function Al(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function jk(e,t){return br(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function kk(e,t,n){return br(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Si(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const i of t){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n],s[r]._visualValues!==void 0&&s[r]._visualValues[n]!==void 0&&delete s[r]._visualValues[n]}}}const Ol=e=>e==="reset"||e==="none",Uf=(e,t)=>t?e:Object.assign({},e),Sk=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:ux(n,!0),values:null};class Vr{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=zl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Si(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(f,h,m,p)=>f==="x"?h:f==="r"?p:m,s=n.xAxisID=Z(r.xAxisID,Al(t,"x")),o=n.yAxisID=Z(r.yAxisID,Al(t,"y")),l=n.rAxisID=Z(r.rAxisID,Al(t,"r")),c=n.indexAxis,d=n.iAxisID=i(c,s,o,l),u=n.vAxisID=i(c,o,s,l);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(l),n.iScale=this.getScaleForId(d),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Sf(this._data,this),t._stacked&&Si(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(ne(n)){const i=this._cachedMeta;this._data=vk(n,i)}else if(r!==n){if(r){Sf(r,this);const i=this._cachedMeta;Si(i),i._parsed=[]}n&&Object.isExtensible(n)&&rj(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=zl(n.vScale,n),n.stack!==r.stack&&(i=!0,Si(n),n.stack=r.stack),this._resyncElements(t),(i||s!==n._stacked)&&(Wf(this,n._parsed),n._stacked=zl(n.vScale,n))}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:o}=r,l=s.axis;let c=t===0&&n===i.length?!0:r._sorted,d=t>0&&r._parsed[t-1],u,f,h;if(this._parsing===!1)r._parsed=i,r._sorted=!0,h=i;else{Te(i[t])?h=this.parseArrayData(r,i,t,n):ne(i[t])?h=this.parseObjectData(r,i,t,n):h=this.parsePrimitiveData(r,i,t,n);const m=()=>f[l]===null||d&&f[l]<d[l];for(u=0;u<n;++u)r._parsed[u+t]=f=h[u],c&&(m()&&(c=!1),d=f);r._sorted=c}o&&Wf(this,h)}parsePrimitiveData(t,n,r,i){const{iScale:s,vScale:o}=t,l=s.axis,c=o.axis,d=s.getLabels(),u=s===o,f=new Array(i);let h,m,p;for(h=0,m=i;h<m;++h)p=h+r,f[h]={[l]:u||s.parse(d[p],p),[c]:o.parse(n[p],p)};return f}parseArrayData(t,n,r,i){const{xScale:s,yScale:o}=t,l=new Array(i);let c,d,u,f;for(c=0,d=i;c<d;++c)u=c+r,f=n[u],l[c]={x:s.parse(f[0],u),y:o.parse(f[1],u)};return l}parseObjectData(t,n,r,i){const{xScale:s,yScale:o}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=new Array(i);let u,f,h,m;for(u=0,f=i;u<f;++u)h=u+r,m=n[h],d[u]={x:s.parse(ni(m,l),h),y:o.parse(ni(m,c),h)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,s=this._cachedMeta,o=n[t.axis],l={keys:ux(i,!0),values:n._stacks[t.axis]._visualValues};return Bf(l,o,s.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const s=r[n.axis];let o=s===null?NaN:s;const l=i&&r._stacks[n.axis];i&&l&&(i.values=l,o=Bf(i,s,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&t===r.iScale,o=i.length,l=this._getOtherScale(t),c=Sk(n,r,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:f}=bk(l);let h,m;function p(){m=i[h];const v=m[l.axis];return!St(m[t.axis])||u>v||f<v}for(h=0;h<o&&!(!p()&&(this.updateRangeFromParsed(d,t,m,c),s));++h);if(s){for(h=o-1;h>=0;--h)if(!p()){this.updateRangeFromParsed(d,t,m,c);break}}return d}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,s,o;for(i=0,s=n.length;i<s;++i)o=n[i][t.axis],St(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(t);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=xk(Z(this.options.clip,gk(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,o=[],l=this._drawStart||0,c=this._drawCount||i.length-l,d=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,s,l,c),u=l;u<l+c;++u){const f=i[u];f.hidden||(f.active&&d?o.push(f):f.draw(t,s))}for(u=0;u<o.length;++u)o[u].draw(t,s)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let s;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];s=o.$context||(o.$context=kk(this.getContext(),t,o)),s.parsed=this.getParsed(t),s.raw=i.data[t],s.index=s.dataIndex=t}else s=this.$context||(this.$context=jk(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",s=this._cachedDataOpts,o=t+"-"+n,l=s[o],c=this.enableOptionSharing&&ys(r);if(l)return Uf(l,c);const d=this.chart.config,u=d.datasetElementScopeKeys(this._type,t),f=i?[`${t}Hover`,"hover",t,""]:[t,""],h=d.getOptionScopes(this.getDataset(),u),m=Object.keys(Ee.elements[t]),p=()=>this.getContext(r,i,n),v=d.resolveNamedOptions(h,m,p,f);return v.$shared&&(v.$shared=c,s[o]=Object.freeze(Uf(v,c))),v}_resolveAnimations(t,n,r){const i=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,l=s[o];if(l)return l;let c;if(i.options.animation!==!1){const u=this.chart.config,f=u.datasetAnimationScopeKeys(this._type,n),h=u.getOptionScopes(this.getDataset(),f);c=u.createResolver(h,this.getContext(t,r,n))}const d=new dx(i,c&&c.animations);return c&&c._cacheable&&(s[o]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Ol(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:o}}updateElement(t,n,r,i){Ol(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Ol(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[l,c,d]of this._syncList)this[l](c,d);this._syncList=[];const i=r.length,s=n.length,o=Math.min(s,i);o&&this.parse(0,o),s>i?this._insertElements(i,s-i,t):s<i&&this._removeElements(s,i-s)}_insertElements(t,n,r=!0){const i=this._cachedMeta,s=i.data,o=t+n;let l;const c=d=>{for(d.length+=n,l=d.length-1;l>=o;l--)d[l]=d[l-n]};for(c(s),l=t;l<o;++l)s[l]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,n),r&&this.updateElements(s,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&Si(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}q(Vr,"defaults",{}),q(Vr,"datasetElementType",null),q(Vr,"dataElementType",null);function _k(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let i=0,s=n.length;i<s;i++)r=r.concat(n[i].controller.getAllParsedValues(e));e._cache.$bar=X0(r.sort((i,s)=>i-s))}return e._cache.$bar}function Nk(e){const t=e.iScale,n=_k(t,e.type);let r=t._length,i,s,o,l;const c=()=>{o===32767||o===-32768||(ys(l)&&(r=Math.min(r,Math.abs(o-l)||r)),l=o)};for(i=0,s=n.length;i<s;++i)o=t.getPixelForValue(n[i]),c();for(l=void 0,i=0,s=t.ticks.length;i<s;++i)o=t.getPixelForTick(i),c();return r}function Ck(e,t,n,r){const i=n.barThickness;let s,o;return se(i)?(s=t.min*n.categoryPercentage,o=n.barPercentage):(s=i*r,o=1),{chunk:s/r,ratio:o,start:t.pixels[e]-s/2}}function Pk(e,t,n,r){const i=t.pixels,s=i[e];let o=e>0?i[e-1]:null,l=e<i.length-1?i[e+1]:null;const c=n.categoryPercentage;o===null&&(o=s-(l===null?t.end-t.start:l-s)),l===null&&(l=s+s-o);const d=s-(s-Math.min(o,l))/2*c;return{chunk:Math.abs(l-o)/2*c/r,ratio:n.barPercentage,start:d}}function Ek(e,t,n,r){const i=n.parse(e[0],r),s=n.parse(e[1],r),o=Math.min(i,s),l=Math.max(i,s);let c=o,d=l;Math.abs(o)>Math.abs(l)&&(c=l,d=o),t[n.axis]=d,t._custom={barStart:c,barEnd:d,start:i,end:s,min:o,max:l}}function hx(e,t,n,r){return Te(e)?Ek(e,t,n,r):t[n.axis]=n.parse(e,r),t}function $f(e,t,n,r){const i=e.iScale,s=e.vScale,o=i.getLabels(),l=i===s,c=[];let d,u,f,h;for(d=n,u=n+r;d<u;++d)h=t[d],f={},f[i.axis]=l||i.parse(o[d],d),c.push(hx(h,f,s,d));return c}function Ll(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Rk(e,t,n){return e!==0?Xt(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function Mk(e){let t,n,r,i,s;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",s="start"):(i="start",s="end"),{start:n,end:r,reverse:t,top:i,bottom:s}}function Tk(e,t,n,r){let i=t.borderSkipped;const s={};if(!i){e.borderSkipped=s;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:l,reverse:c,top:d,bottom:u}=Mk(e);i==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=d:(n._bottom||0)===r?i=u:(s[qf(u,o,l,c)]=!0,i=d)),s[qf(i,o,l,c)]=!0,e.borderSkipped=s}function qf(e,t,n,r){return r?(e=zk(e,t,n),e=Vf(e,n,t)):e=Vf(e,t,n),e}function zk(e,t,n){return e===t?n:e===n?t:e}function Vf(e,t,n){return e==="start"?t:e==="end"?n:e}function Ak(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Ta extends Vr{parsePrimitiveData(t,n,r,i){return $f(t,n,r,i)}parseArrayData(t,n,r,i){return $f(t,n,r,i)}parseObjectData(t,n,r,i){const{iScale:s,vScale:o}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=s.axis==="x"?l:c,u=o.axis==="x"?l:c,f=[];let h,m,p,v;for(h=r,m=r+i;h<m;++h)v=n[h],p={},p[s.axis]=s.parse(ni(v,d),h),f.push(hx(ni(v,u),p,o,h));return f}updateRangeFromParsed(t,n,r,i){super.updateRangeFromParsed(t,n,r,i);const s=r._custom;s&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,s.min),t.max=Math.max(t.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:i}=n,s=this.getParsed(t),o=s._custom,l=Ll(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(s[i.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,i){const s=i==="reset",{index:o,_cachedMeta:{vScale:l}}=this,c=l.getBasePixel(),d=l.isHorizontal(),u=this._getRuler(),{sharedOptions:f,includeOptions:h}=this._getSharedOptions(n,i);for(let m=n;m<n+r;m++){const p=this.getParsed(m),v=s||se(p[l.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,u),x=(p._stacks||{})[l.axis],g={horizontal:d,base:v.base,enableBorderRadius:!x||Ll(p._custom)||o===x._top||o===x._bottom,x:d?v.head:y.center,y:d?y.center:v.head,height:d?y.size:Math.abs(v.size),width:d?Math.abs(v.size):y.size};h&&(g.options=f||this.resolveDataElementOptions(m,t[m].active?"active":i));const b=g.options||t[m].options;Tk(g,b,x,o),Ak(g,b,u.ratio),this.updateElement(t[m],m,g,i)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),s=r.options.stacked,o=[],l=this._cachedMeta.controller.getParsed(n),c=l&&l[r.axis],d=u=>{const f=u._parsed.find(m=>m[r.axis]===c),h=f&&f[u.vScale.axis];if(se(h)||isNaN(h))return!0};for(const u of i)if(!(n!==void 0&&d(u))&&((s===!1||o.indexOf(u.stack)===-1||s===void 0&&u.stack===void 0)&&o.push(u.stack),u.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(t).filter(r=>t[r].axis===n).shift()}_getAxis(){const t={},n=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)t[Z(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,n)]=!0;return Object.keys(t)}_getStackIndex(t,n,r){const i=this._getStacks(t,r),s=n!==void 0?i.indexOf(n):-1;return s===-1?i.length-1:s}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,i=[];let s,o;for(s=0,o=n.data.length;s<o;++s)i.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const l=t.barThickness;return{min:l||Nk(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:l?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:s,minBarLength:o}}=this,l=s||0,c=this.getParsed(t),d=c._custom,u=Ll(d);let f=c[n.axis],h=0,m=r?this.applyStack(n,c,r):f,p,v;m!==f&&(h=m-f,m=f),u&&(f=d.barStart,m=d.barEnd-d.barStart,f!==0&&Xt(f)!==Xt(d.barEnd)&&(h=0),h+=f);const y=!se(s)&&!u?s:h;let x=n.getPixelForValue(y);if(this.chart.getDataVisibility(t)?p=n.getPixelForValue(h+m):p=x,v=p-x,Math.abs(v)<o){v=Rk(v,n,l)*o,f===l&&(x-=v/2);const g=n.getPixelForDecimal(0),b=n.getPixelForDecimal(1),k=Math.min(g,b),j=Math.max(g,b);x=Math.max(Math.min(x,j),k),p=x+v,r&&!u&&(c._stacks[n.axis]._visualValues[i]=n.getValueForPixel(p)-n.getValueForPixel(x))}if(x===n.getPixelForValue(l)){const g=Xt(v)*n.getLineWidthForValue(l)/2;x+=g,v-=g}return{size:v,base:x,head:p,center:p+v/2}}_calculateBarIndexPixels(t,n){const r=n.scale,i=this.options,s=i.skipNull,o=Z(i.maxBarThickness,1/0);let l,c;const d=this._getAxisCount();if(n.grouped){const u=s?this._getStackCount(t):n.stackCount,f=i.barThickness==="flex"?Pk(t,n,i,u*d):Ck(t,n,i,u*d),h=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(Z(h,this.getFirstScaleIdForIndexAxis())),p=this._getStackIndex(this.index,this._cachedMeta.stack,s?t:void 0)+m;l=f.start+f.chunk*p+f.chunk/2,c=Math.min(o,f.chunk*f.ratio)}else l=r.getPixelForValue(this.getParsed(t)[r.axis],t),c=Math.min(o,n.min*n.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,i=r.length;let s=0;for(;s<i;++s)this.getParsed(s)[n.axis]!==null&&!r[s].hidden&&r[s].draw(this._ctx)}}q(Ta,"id","bar"),q(Ta,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),q(Ta,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class za extends Vr{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:s}=n,o=this.chart._animationsDisabled;let{start:l,count:c}=aj(n,i,o);this._drawStart=l,this._drawCount=c,oj(n)&&(l=0,c=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=i;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(r,void 0,{animated:!o,options:d},t),this.updateElements(i,l,c,t)}updateElements(t,n,r,i){const s=i==="reset",{iScale:o,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,{sharedOptions:u,includeOptions:f}=this._getSharedOptions(n,i),h=o.axis,m=l.axis,{spanGaps:p,segment:v}=this.options,y=bs(p)?p:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||s||i==="none",g=n+r,b=t.length;let k=n>0&&this.getParsed(n-1);for(let j=0;j<b;++j){const S=t[j],N=x?S:{};if(j<n||j>=g){N.skip=!0;continue}const _=this.getParsed(j),z=se(_[m]),T=N[h]=o.getPixelForValue(_[h],j),I=N[m]=s||z?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,_,c):_[m],j);N.skip=isNaN(T)||isNaN(I)||z,N.stop=j>0&&Math.abs(_[h]-k[h])>y,v&&(N.parsed=_,N.raw=d.data[j]),f&&(N.options=u||this.resolveDataElementOptions(j,S.active?"active":i)),x||this.updateElement(S,j,N,i),k=_}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const s=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,s,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}q(za,"id","line"),q(za,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),q(za,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Xn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Pu{constructor(t){q(this,"options");this.options=t||{}}static override(t){Object.assign(Pu.prototype,t)}init(){}formats(){return Xn()}parse(){return Xn()}format(){return Xn()}add(){return Xn()}diff(){return Xn()}startOf(){return Xn()}endOf(){return Xn()}}var Ok={_date:Pu};function Lk(e,t,n,r){const{controller:i,data:s,_sorted:o}=e,l=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(l&&t===l.axis&&t!=="r"&&o&&s.length){const d=l._reversePixels?tj:ar;if(r){if(i._sharedOptions){const u=s[0],f=typeof u.getRange=="function"&&u.getRange(t);if(f){const h=d(s,t,n-f),m=d(s,t,n+f);return{lo:h.lo,hi:m.hi}}}}else{const u=d(s,t,n);if(c){const{vScale:f}=i._cachedMeta,{_parsed:h}=e,m=h.slice(0,u.lo+1).reverse().findIndex(v=>!se(v[f.axis]));u.lo-=Math.max(0,m);const p=h.slice(u.hi).findIndex(v=>!se(v[f.axis]));u.hi+=Math.max(0,p)}return u}}return{lo:0,hi:s.length-1}}function Xo(e,t,n,r,i){const s=e.getSortedVisibleDatasetMetas(),o=n[t];for(let l=0,c=s.length;l<c;++l){const{index:d,data:u}=s[l],{lo:f,hi:h}=Lk(s[l],t,o,i);for(let m=f;m<=h;++m){const p=u[m];p.skip||r(p,d,m)}}}function Dk(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const s=t?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function Dl(e,t,n,r,i){const s=[];return!i&&!e.isPointInArea(t)||Xo(e,n,t,function(l,c,d){!i&&!ws(l,e.chartArea,0)||l.inRange(t.x,t.y,r)&&s.push({element:l,datasetIndex:c,index:d})},!0),s}function Fk(e,t,n,r){let i=[];function s(o,l,c){const{startAngle:d,endAngle:u}=o.getProps(["startAngle","endAngle"],r),{angle:f}=Y0(o,{x:t.x,y:t.y});gu(f,d,u)&&i.push({element:o,datasetIndex:l,index:c})}return Xo(e,n,t,s),i}function Ik(e,t,n,r,i,s){let o=[];const l=Dk(n);let c=Number.POSITIVE_INFINITY;function d(u,f,h){const m=u.inRange(t.x,t.y,i);if(r&&!m)return;const p=u.getCenterPoint(i);if(!(!!s||e.isPointInArea(p))&&!m)return;const y=l(t,p);y<c?(o=[{element:u,datasetIndex:f,index:h}],c=y):y===c&&o.push({element:u,datasetIndex:f,index:h})}return Xo(e,n,t,d),o}function Fl(e,t,n,r,i,s){return!s&&!e.isPointInArea(t)?[]:n==="r"&&!r?Fk(e,t,n,i):Ik(e,t,n,r,i,s)}function Yf(e,t,n,r,i){const s=[],o=n==="x"?"inXRange":"inYRange";let l=!1;return Xo(e,n,t,(c,d,u)=>{c[o]&&c[o](t[n],i)&&(s.push({element:c,datasetIndex:d,index:u}),l=l||c.inRange(t.x,t.y,i))}),r&&!l?[]:s}var Bk={modes:{index(e,t,n,r){const i=Zn(t,e),s=n.axis||"x",o=n.includeInvisible||!1,l=n.intersect?Dl(e,i,s,r,o):Fl(e,i,s,!1,r,o),c=[];return l.length?(e.getSortedVisibleDatasetMetas().forEach(d=>{const u=l[0].index,f=d.data[u];f&&!f.skip&&c.push({element:f,datasetIndex:d.index,index:u})}),c):[]},dataset(e,t,n,r){const i=Zn(t,e),s=n.axis||"xy",o=n.includeInvisible||!1;let l=n.intersect?Dl(e,i,s,r,o):Fl(e,i,s,!1,r,o);if(l.length>0){const c=l[0].datasetIndex,d=e.getDatasetMeta(c).data;l=[];for(let u=0;u<d.length;++u)l.push({element:d[u],datasetIndex:c,index:u})}return l},point(e,t,n,r){const i=Zn(t,e),s=n.axis||"xy",o=n.includeInvisible||!1;return Dl(e,i,s,r,o)},nearest(e,t,n,r){const i=Zn(t,e),s=n.axis||"xy",o=n.includeInvisible||!1;return Fl(e,i,s,n.intersect,r,o)},x(e,t,n,r){const i=Zn(t,e);return Yf(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=Zn(t,e);return Yf(e,i,"y",n.intersect,r)}}};const fx=["left","top","right","bottom"];function _i(e,t){return e.filter(n=>n.pos===t)}function Kf(e,t){return e.filter(n=>fx.indexOf(n.pos)===-1&&n.box.axis===t)}function Ni(e,t){return e.sort((n,r)=>{const i=t?r:n,s=t?n:r;return i.weight===s.weight?i.index-s.index:i.weight-s.weight})}function Hk(e){const t=[];let n,r,i,s,o,l;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:s,options:{stack:o,stackWeight:l=1}}=i,t.push({index:n,box:i,pos:s,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&s+o,stackWeight:l});return t}function Wk(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:s}=n;if(!r||!fx.includes(i))continue;const o=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return t}function Uk(e,t){const n=Wk(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let s,o,l;for(s=0,o=e.length;s<o;++s){l=e[s];const{fullSize:c}=l.box,d=n[l.stack],u=d&&l.stackWeight/d.weight;l.horizontal?(l.width=u?u*r:c&&t.availableWidth,l.height=i):(l.width=r,l.height=u?u*i:c&&t.availableHeight)}return n}function $k(e){const t=Hk(e),n=Ni(t.filter(d=>d.box.fullSize),!0),r=Ni(_i(t,"left"),!0),i=Ni(_i(t,"right")),s=Ni(_i(t,"top"),!0),o=Ni(_i(t,"bottom")),l=Kf(t,"x"),c=Kf(t,"y");return{fullSize:n,leftAndTop:r.concat(s),rightAndBottom:i.concat(c).concat(o).concat(l),chartArea:_i(t,"chartArea"),vertical:r.concat(i).concat(c),horizontal:s.concat(o).concat(l)}}function Xf(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function px(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function qk(e,t,n,r){const{pos:i,box:s}=n,o=e.maxPadding;if(!ne(i)){n.size&&(e[i]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?s.height:s.width),n.size=f.size/f.count,e[i]+=n.size}s.getPadding&&px(o,s.getPadding());const l=Math.max(0,t.outerWidth-Xf(o,e,"left","right")),c=Math.max(0,t.outerHeight-Xf(o,e,"top","bottom")),d=l!==e.w,u=c!==e.h;return e.w=l,e.h=c,n.horizontal?{same:d,other:u}:{same:u,other:d}}function Vk(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function Yk(e,t){const n=t.maxPadding;function r(i){const s={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{s[o]=Math.max(t[o],n[o])}),s}return r(e?["left","right"]:["top","bottom"])}function Oi(e,t,n,r){const i=[];let s,o,l,c,d,u;for(s=0,o=e.length,d=0;s<o;++s){l=e[s],c=l.box,c.update(l.width||t.w,l.height||t.h,Yk(l.horizontal,t));const{same:f,other:h}=qk(t,n,l,r);d|=f&&i.length,u=u||h,c.fullSize||i.push(l)}return d&&Oi(i,t,n,r)||u}function da(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function Qf(e,t,n,r){const i=n.padding;let{x:s,y:o}=t;for(const l of e){const c=l.box,d=r[l.stack]||{placed:0,weight:1},u=l.stackWeight/d.weight||1;if(l.horizontal){const f=t.w*u,h=d.size||c.height;ys(d.start)&&(o=d.start),c.fullSize?da(c,i.left,o,n.outerWidth-i.right-i.left,h):da(c,t.left+d.placed,o,f,h),d.start=o,d.placed+=f,o=c.bottom}else{const f=t.h*u,h=d.size||c.width;ys(d.start)&&(s=d.start),c.fullSize?da(c,s,i.top,h,n.outerHeight-i.bottom-i.top):da(c,s,t.top+d.placed,h,f),d.start=s,d.placed+=f,s=c.right}}t.x=s,t.y=o}var bt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=_t(e.options.layout.padding),s=Math.max(t-i.width,0),o=Math.max(n-i.height,0),l=$k(e.boxes),c=l.vertical,d=l.horizontal;ae(e.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const u=c.reduce((v,y)=>y.box.options&&y.box.options.display===!1?v:v+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/u,hBoxMaxHeight:o/2}),h=Object.assign({},i);px(h,_t(r));const m=Object.assign({maxPadding:h,w:s,h:o,x:i.left,y:i.top},i),p=Uk(c.concat(d),f);Oi(l.fullSize,m,f,p),Oi(c,m,f,p),Oi(d,m,f,p)&&Oi(c,m,f,p),Vk(m),Qf(l.leftAndTop,m,f,p),m.x+=m.w,m.y+=m.h,Qf(l.rightAndBottom,m,f,p),e.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},ae(l.chartArea,v=>{const y=v.box;Object.assign(y,e.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class mx{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class Kk extends mx{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Aa="$chartjs",Xk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Gf=e=>e===null||e==="";function Qk(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[Aa]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Gf(i)){const s=Af(e,"width");s!==void 0&&(e.width=s)}if(Gf(r))if(e.style.height==="")e.height=e.width/(t||2);else{const s=Af(e,"height");s!==void 0&&(e.height=s)}return e}const gx=Qj?{passive:!0}:!1;function Gk(e,t,n){e&&e.addEventListener(t,n,gx)}function Zk(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,gx)}function Jk(e,t){const n=Xk[e.type]||e.type,{x:r,y:i}=Zn(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function wo(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function eS(e,t,n){const r=e.canvas,i=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||wo(l.addedNodes,r),o=o&&!wo(l.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function tS(e,t,n){const r=e.canvas,i=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||wo(l.removedNodes,r),o=o&&!wo(l.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const ks=new Map;let Zf=0;function xx(){const e=window.devicePixelRatio;e!==Zf&&(Zf=e,ks.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function nS(e,t){ks.size||window.addEventListener("resize",xx),ks.set(e,t)}function rS(e){ks.delete(e),ks.size||window.removeEventListener("resize",xx)}function iS(e,t,n){const r=e.canvas,i=r&&Cu(r);if(!i)return;const s=G0((l,c)=>{const d=i.clientWidth;n(l,c),d<i.clientWidth&&n()},window),o=new ResizeObserver(l=>{const c=l[0],d=c.contentRect.width,u=c.contentRect.height;d===0&&u===0||s(d,u)});return o.observe(i),nS(e,s),o}function Il(e,t,n){n&&n.disconnect(),t==="resize"&&rS(e)}function sS(e,t,n){const r=e.canvas,i=G0(s=>{e.ctx!==null&&n(Jk(s,e))},e);return Gk(r,t,i),i}class aS extends mx{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(Qk(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[Aa])return!1;const r=n[Aa].initial;["height","width"].forEach(s=>{const o=r[s];se(o)?n.removeAttribute(s):n.setAttribute(s,o)});const i=r.style||{};return Object.keys(i).forEach(s=>{n.style[s]=i[s]}),n.width=n.width,delete n[Aa],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),o={attach:eS,detach:tS,resize:iS}[n]||sS;i[n]=o(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:Il,detach:Il,resize:Il}[n]||Zk)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return Xj(t,n,r,i)}isAttached(t){const n=t&&Cu(t);return!!(n&&n.isConnected)}}function oS(e){return!Nu()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?Kk:aS}class Ot{constructor(){q(this,"x");q(this,"y");q(this,"active",!1);q(this,"options");q(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return bs(this.x)&&bs(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}}q(Ot,"defaults",{}),q(Ot,"defaultRoutes");function lS(e,t){const n=e.options.ticks,r=cS(e),i=Math.min(n.maxTicksLimit||r,r),s=n.major.enabled?uS(t):[],o=s.length,l=s[0],c=s[o-1],d=[];if(o>i)return hS(t,d,s,o/i),d;const u=dS(s,t,i);if(o>0){let f,h;const m=o>1?Math.round((c-l)/(o-1)):null;for(ua(t,d,u,se(m)?0:l-m,l),f=0,h=o-1;f<h;f++)ua(t,d,u,s[f],s[f+1]);return ua(t,d,u,c,se(m)?t.length:c+m),d}return ua(t,d,u),d}function cS(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function dS(e,t,n){const r=fS(e),i=t.length/n;if(!r)return Math.max(i,1);const s=Kw(r);for(let o=0,l=s.length-1;o<l;o++){const c=s[o];if(c>i)return c}return Math.max(i,1)}function uS(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function hS(e,t,n,r){let i=0,s=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===s&&(t.push(e[o]),i++,s=n[i*r])}function ua(e,t,n,r,i){const s=Z(r,0),o=Math.min(Z(i,e.length),e.length);let l=0,c,d,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=s;u<0;)l++,u=Math.round(s+l*n);for(d=Math.max(s,0);d<o;d++)d===u&&(t.push(e[d]),l++,u=Math.round(s+l*n))}function fS(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const pS=e=>e==="left"?"right":e==="right"?"left":e,Jf=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,ep=(e,t)=>Math.min(t||e,e);function tp(e,t){const n=[],r=e.length/t,i=e.length;let s=0;for(;s<i;s+=r)n.push(e[Math.floor(s)]);return n}function mS(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),s=e._startPixel,o=e._endPixel,l=1e-6;let c=e.getPixelForTick(i),d;if(!(n&&(r===1?d=Math.max(c-s,o-c):t===0?d=(e.getPixelForTick(1)-c)/2:d=(c-e.getPixelForTick(i-1))/2,c+=i<t?d:-d,c<s-l||c>o+l)))return c}function gS(e,t){ae(e,n=>{const r=n.gc,i=r.length/2;let s;if(i>t){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function Ci(e){return e.drawTicks?e.tickLength:0}function np(e,t){if(!e.display)return 0;const n=Ke(e.font,t),r=_t(e.padding);return(Te(e.text)?e.text.length:1)*n.lineHeight+r.height}function xS(e,t){return br(e,{scale:t,type:"scale"})}function vS(e,t,n){return br(e,{tick:n,index:t,type:"tick"})}function yS(e,t,n){let r=vu(e);return(n&&t!=="right"||!n&&t==="right")&&(r=pS(r)),r}function bS(e,t,n,r){const{top:i,left:s,bottom:o,right:l,chart:c}=e,{chartArea:d,scales:u}=c;let f=0,h,m,p;const v=o-i,y=l-s;if(e.isHorizontal()){if(m=$e(r,s,l),ne(n)){const x=Object.keys(n)[0],g=n[x];p=u[x].getPixelForValue(g)+v-t}else n==="center"?p=(d.bottom+d.top)/2+v-t:p=Jf(e,n,t);h=l-s}else{if(ne(n)){const x=Object.keys(n)[0],g=n[x];m=u[x].getPixelForValue(g)-y+t}else n==="center"?m=(d.left+d.right)/2-y+t:m=Jf(e,n,t);p=$e(r,o,i),f=n==="left"?-Fe:Fe}return{titleX:m,titleY:p,maxWidth:h,rotation:f}}class pi extends Ot{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=Ht(t,Number.POSITIVE_INFINITY),n=Ht(n,Number.NEGATIVE_INFINITY),r=Ht(r,Number.POSITIVE_INFINITY),i=Ht(i,Number.NEGATIVE_INFINITY),{min:Ht(t,r),max:Ht(n,i),minDefined:St(t),maxDefined:St(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),o;if(i&&s)return{min:n,max:r};const l=this.getMatchingVisibleMetas();for(let c=0,d=l.length;c<d;++c)o=l[c].controller.getMinMax(this,t),i||(n=Math.min(n,o.min)),s||(r=Math.max(r,o.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:Ht(n,Ht(r,n)),max:Ht(r,Ht(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){me(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:s,ticks:o}=this.options,l=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Cj(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=l<this.ticks.length;this._convertTicksToLabels(c?tp(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=lS(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){me(this.options.afterUpdate,[this])}beforeSetDimensions(){me(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){me(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),me(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){me(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r],s.label=me(n.callback,[s.value,r,t],this)}afterTickToLabelConversion(){me(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){me(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=ep(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,s=n.maxRotation;let o=i,l,c,d;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),f=u.widest.width,h=u.highest.height,m=Ye(this.chart.width-f,0,this.maxWidth);l=t.offset?this.maxWidth/r:m/(r-1),f+6>l&&(l=m/(r-(t.offset?.5:1)),c=this.maxHeight-Ci(t.grid)-n.padding-np(t.title,this.chart.options.font),d=Math.sqrt(f*f+h*h),o=Zw(Math.min(Math.asin(Ye((u.highest.height+6)/l,-1,1)),Math.asin(Ye(c/d,-1,1))-Math.asin(Ye(h/d,-1,1)))),o=Math.max(i,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){me(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){me(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,o=this._isVisible(),l=this.isHorizontal();if(o){const c=np(i,n.options.font);if(l?(t.width=this.maxWidth,t.height=Ci(s)+c):(t.height=this.maxHeight,t.width=Ci(s)+c),r.display&&this.ticks.length){const{first:d,last:u,widest:f,highest:h}=this._getLabelSizes(),m=r.padding*2,p=sr(this.labelRotation),v=Math.cos(p),y=Math.sin(p);if(l){const x=r.mirror?0:y*f.width+v*h.height;t.height=Math.min(this.maxHeight,t.height+x+m)}else{const x=r.mirror?0:v*f.width+y*h.height;t.width=Math.min(this.maxWidth,t.width+x+m)}this._calculatePadding(d,u,y,v)}}this._handleMargins(),l?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:s,padding:o},position:l}=this.options,c=this.labelRotation!==0,d=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,m=0;c?d?(h=i*t.width,m=r*n.height):(h=r*t.height,m=i*n.width):s==="start"?m=n.width:s==="end"?h=t.width:s!=="inner"&&(h=t.width/2,m=n.width/2),this.paddingLeft=Math.max((h-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((m-f+o)*this.width/(this.width-f),0)}else{let u=n.height/2,f=t.height/2;s==="start"?(u=0,f=t.height):s==="end"&&(u=n.height,f=0),this.paddingTop=u+o,this.paddingBottom=f+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){me(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)se(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=tp(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:s}=this,o=[],l=[],c=Math.floor(n/ep(n,r));let d=0,u=0,f,h,m,p,v,y,x,g,b,k,j;for(f=0;f<n;f+=c){if(p=t[f].label,v=this._resolveTickFontOptions(f),i.font=y=v.string,x=s[y]=s[y]||{data:{},gc:[]},g=v.lineHeight,b=k=0,!se(p)&&!Te(p))b=Ef(i,x.data,x.gc,b,p),k=g;else if(Te(p))for(h=0,m=p.length;h<m;++h)j=p[h],!se(j)&&!Te(j)&&(b=Ef(i,x.data,x.gc,b,j),k+=g);o.push(b),l.push(k),d=Math.max(b,d),u=Math.max(k,u)}gS(s,n);const S=o.indexOf(d),N=l.indexOf(u),_=z=>({width:o[z]||0,height:l[z]||0});return{first:_(0),last:_(n-1),widest:_(S),highest:_(N),widths:o,heights:l}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return ej(this._alignToPixels?Kn(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=vS(this.getContext(),t,r))}return this.$context||(this.$context=xS(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=sr(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=t.autoSkipPadding||0,l=s?s.widest.width+o:0,c=s?s.highest.height+o:0;return this.isHorizontal()?c*r>l*i?l/r:c/i:c*i<l*r?c/r:l/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:o,border:l}=i,c=s.offset,d=this.isHorizontal(),f=this.ticks.length+(c?1:0),h=Ci(s),m=[],p=l.setContext(this.getContext()),v=p.display?p.width:0,y=v/2,x=function(A){return Kn(r,A,v)};let g,b,k,j,S,N,_,z,T,I,D,B;if(o==="top")g=x(this.bottom),N=this.bottom-h,z=g-y,I=x(t.top)+y,B=t.bottom;else if(o==="bottom")g=x(this.top),I=t.top,B=x(t.bottom)-y,N=g+y,z=this.top+h;else if(o==="left")g=x(this.right),S=this.right-h,_=g-y,T=x(t.left)+y,D=t.right;else if(o==="right")g=x(this.left),T=t.left,D=x(t.right)-y,S=g+y,_=this.left+h;else if(n==="x"){if(o==="center")g=x((t.top+t.bottom)/2+.5);else if(ne(o)){const A=Object.keys(o)[0],$=o[A];g=x(this.chart.scales[A].getPixelForValue($))}I=t.top,B=t.bottom,N=g+y,z=N+h}else if(n==="y"){if(o==="center")g=x((t.left+t.right)/2);else if(ne(o)){const A=Object.keys(o)[0],$=o[A];g=x(this.chart.scales[A].getPixelForValue($))}S=g-y,_=S-h,T=t.left,D=t.right}const Y=Z(i.ticks.maxTicksLimit,f),M=Math.max(1,Math.ceil(f/Y));for(b=0;b<f;b+=M){const A=this.getContext(b),$=s.setContext(A),P=l.setContext(A),C=$.lineWidth,L=$.color,K=P.dash||[],X=P.dashOffset,ve=$.tickWidth,ce=$.tickColor,Ce=$.tickBorderDash||[],Se=$.tickBorderDashOffset;k=mS(this,b,c),k!==void 0&&(j=Kn(r,k,C),d?S=_=T=D=j:N=z=I=B=j,m.push({tx1:S,ty1:N,tx2:_,ty2:z,x1:T,y1:I,x2:D,y2:B,width:C,color:L,borderDash:K,borderDashOffset:X,tickWidth:ve,tickColor:ce,tickBorderDash:Ce,tickBorderDashOffset:Se}))}return this._ticksLength=f,this._borderValue=g,m}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:s}=r,o=this.isHorizontal(),l=this.ticks,{align:c,crossAlign:d,padding:u,mirror:f}=s,h=Ci(r.grid),m=h+u,p=f?-u:m,v=-sr(this.labelRotation),y=[];let x,g,b,k,j,S,N,_,z,T,I,D,B="middle";if(i==="top")S=this.bottom-p,N=this._getXAxisLabelAlignment();else if(i==="bottom")S=this.top+p,N=this._getXAxisLabelAlignment();else if(i==="left"){const M=this._getYAxisLabelAlignment(h);N=M.textAlign,j=M.x}else if(i==="right"){const M=this._getYAxisLabelAlignment(h);N=M.textAlign,j=M.x}else if(n==="x"){if(i==="center")S=(t.top+t.bottom)/2+m;else if(ne(i)){const M=Object.keys(i)[0],A=i[M];S=this.chart.scales[M].getPixelForValue(A)+m}N=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")j=(t.left+t.right)/2-m;else if(ne(i)){const M=Object.keys(i)[0],A=i[M];j=this.chart.scales[M].getPixelForValue(A)}N=this._getYAxisLabelAlignment(h).textAlign}n==="y"&&(c==="start"?B="top":c==="end"&&(B="bottom"));const Y=this._getLabelSizes();for(x=0,g=l.length;x<g;++x){b=l[x],k=b.label;const M=s.setContext(this.getContext(x));_=this.getPixelForTick(x)+s.labelOffset,z=this._resolveTickFontOptions(x),T=z.lineHeight,I=Te(k)?k.length:1;const A=I/2,$=M.color,P=M.textStrokeColor,C=M.textStrokeWidth;let L=N;o?(j=_,N==="inner"&&(x===g-1?L=this.options.reverse?"left":"right":x===0?L=this.options.reverse?"right":"left":L="center"),i==="top"?d==="near"||v!==0?D=-I*T+T/2:d==="center"?D=-Y.highest.height/2-A*T+T:D=-Y.highest.height+T/2:d==="near"||v!==0?D=T/2:d==="center"?D=Y.highest.height/2-A*T:D=Y.highest.height-I*T,f&&(D*=-1),v!==0&&!M.showLabelBackdrop&&(j+=T/2*Math.sin(v))):(S=_,D=(1-I)*T/2);let K;if(M.showLabelBackdrop){const X=_t(M.backdropPadding),ve=Y.heights[x],ce=Y.widths[x];let Ce=D-X.top,Se=0-X.left;switch(B){case"middle":Ce-=ve/2;break;case"bottom":Ce-=ve;break}switch(N){case"center":Se-=ce/2;break;case"right":Se-=ce;break;case"inner":x===g-1?Se-=ce:x>0&&(Se-=ce/2);break}K={left:Se,top:Ce,width:ce+X.width,height:ve+X.height,color:M.backdropColor}}y.push({label:k,font:z,textOffset:D,options:{rotation:v,color:$,strokeColor:P,strokeWidth:C,textAlign:L,textBaseline:B,translation:[j,S],backdrop:K}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-sr(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,o=this._getLabelSizes(),l=t+s,c=o.widest.width;let d,u;return n==="left"?i?(u=this.right+s,r==="near"?d="left":r==="center"?(d="center",u+=c/2):(d="right",u+=c)):(u=this.right-l,r==="near"?d="right":r==="center"?(d="center",u-=c/2):(d="left",u=this.left)):n==="right"?i?(u=this.left+s,r==="near"?d="right":r==="center"?(d="center",u-=c/2):(d="left",u-=c)):(u=this.left+l,r==="near"?d="left":r==="center"?(d="center",u+=c/2):(d="right",u=this.right)):d="right",{textAlign:d,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:s,height:o}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,s,o),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let s,o;const l=(c,d,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(c.x,c.y),r.lineTo(d.x,d.y),r.stroke(),r.restore())};if(n.display)for(s=0,o=i.length;s<o;++s){const c=i[s];n.drawOnChartArea&&l({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&l({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const l=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let d,u,f,h;this.isHorizontal()?(d=Kn(t,this.left,o)-o/2,u=Kn(t,this.right,l)+l/2,f=h=c):(f=Kn(t,this.top,o)-o/2,h=Kn(t,this.bottom,l)+l/2,d=u=c),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(d,f),n.lineTo(u,h),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&bu(r,i);const s=this.getLabelItems(t);for(const o of s){const l=o.options,c=o.font,d=o.label,u=o.textOffset;js(r,d,0,u,c,l)}i&&wu(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=Ke(r.font),o=_t(r.padding),l=r.align;let c=s.lineHeight/2;n==="bottom"||n==="center"||ne(n)?(c+=o.bottom,Te(r.text)&&(c+=s.lineHeight*(r.text.length-1))):c+=o.top;const{titleX:d,titleY:u,maxWidth:f,rotation:h}=bS(this,c,n,l);js(t,r.text,0,0,s,{color:r.color,maxWidth:f,rotation:h,textAlign:yS(l,n,i),textBaseline:"middle",translation:[d,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=Z(t.grid&&t.grid.z,-1),i=Z(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==pi.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,o;for(s=0,o=n.length;s<o;++s){const l=n[s];l[r]===this.id&&(!t||l.type===t)&&i.push(l)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Ke(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class ha{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;kS(n)&&(r=this.register(n));const i=this.items,s=t.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in i||(i[s]=t,wS(t,o,r),this.override&&Ee.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in Ee[i]&&(delete Ee[i][r],this.override&&delete xr[r])}}function wS(e,t,n){const r=vs(Object.create(null),[n?Ee.get(n):{},Ee.get(t),e.defaults]);Ee.set(t,r),e.defaultRoutes&&jS(t,e.defaultRoutes),e.descriptors&&Ee.describe(t,e.descriptors)}function jS(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),s=[e].concat(r).join("."),o=t[n].split("."),l=o.pop(),c=o.join(".");Ee.route(s,i,c,l)})}function kS(e){return"id"in e&&"defaults"in e}class SS{constructor(){this.controllers=new ha(Vr,"datasets",!0),this.elements=new ha(Ot,"elements"),this.plugins=new ha(Object,"plugins"),this.scales=new ha(pi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(t,s,i):ae(i,o=>{const l=r||this._getRegistryForType(o);this._exec(t,l,o)})})}_exec(t,n,r){const i=mu(t);me(r["before"+i],[],r),n[t](r),me(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var qt=new SS;class _S{constructor(){this._init=void 0}notify(t,n,r,i){if(n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const s=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(s,t,n,r);return n==="afterDestroy"&&(this._notify(s,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,n,r,i){i=i||{};for(const s of t){const o=s.plugin,l=o[r],c=[n,i,s.options];if(me(l,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){se(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=Z(r.options&&r.options.plugins,{}),s=NS(r);return i===!1&&!n?[]:PS(t,s,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(s,o)=>s.filter(l=>!o.some(c=>l.plugin.id===c.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function NS(e){const t={},n=[],r=Object.keys(qt.plugins.items);for(let s=0;s<r.length;s++)n.push(qt.getPlugin(r[s]));const i=e.plugins||[];for(let s=0;s<i.length;s++){const o=i[s];n.indexOf(o)===-1&&(n.push(o),t[o.id]=!0)}return{plugins:n,localIds:t}}function CS(e,t){return!t&&e===!1?null:e===!0?{}:e}function PS(e,{plugins:t,localIds:n},r,i){const s=[],o=e.getContext();for(const l of t){const c=l.id,d=CS(r[c],i);d!==null&&s.push({plugin:l,options:ES(e.config,{plugin:l,local:n[c]},d,o)})}return s}function ES(e,{plugin:t,local:n},r,i){const s=e.pluginScopeKeys(t),o=e.getOptionScopes(r,s);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Zc(e,t){const n=Ee.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function RS(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function MS(e,t){return e===t?"_index_":"_value_"}function rp(e){if(e==="x"||e==="y"||e==="r")return e}function TS(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Jc(e,...t){if(rp(e))return e;for(const n of t){const r=n.axis||TS(n.position)||e.length>1&&rp(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function ip(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function zS(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return ip(e,"x",n[0])||ip(e,"y",n[0])}return{}}function AS(e,t){const n=xr[e.type]||{scales:{}},r=t.scales||{},i=Zc(e.type,t),s=Object.create(null);return Object.keys(r).forEach(o=>{const l=r[o];if(!ne(l))return console.error(`Invalid scale configuration for scale: ${o}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Jc(o,l,zS(o,e),Ee.scales[l.type]),d=MS(c,i),u=n.scales||{};s[o]=Ki(Object.create(null),[{axis:c},l,u[c],u[d]])}),e.data.datasets.forEach(o=>{const l=o.type||e.type,c=o.indexAxis||Zc(l,t),u=(xr[l]||{}).scales||{};Object.keys(u).forEach(f=>{const h=RS(f,c),m=o[h+"AxisID"]||h;s[m]=s[m]||Object.create(null),Ki(s[m],[{axis:h},r[m],u[f]])})}),Object.keys(s).forEach(o=>{const l=s[o];Ki(l,[Ee.scales[l.type],Ee.scale])}),s}function vx(e){const t=e.options||(e.options={});t.plugins=Z(t.plugins,{}),t.scales=AS(e,t)}function yx(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function OS(e){return e=e||{},e.data=yx(e.data),vx(e),e}const sp=new Map,bx=new Set;function fa(e,t){let n=sp.get(e);return n||(n=t(),sp.set(e,n),bx.add(n)),n}const Pi=(e,t,n)=>{const r=ni(t,n);r!==void 0&&e.add(r)};class LS{constructor(t){this._config=OS(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=yx(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),vx(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return fa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return fa(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return fa(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return fa(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:s}=this,o=this._cachedScopes(t,r),l=o.get(n);if(l)return l;const c=new Set;n.forEach(u=>{t&&(c.add(t),u.forEach(f=>Pi(c,t,f))),u.forEach(f=>Pi(c,i,f)),u.forEach(f=>Pi(c,xr[s]||{},f)),u.forEach(f=>Pi(c,Ee,f)),u.forEach(f=>Pi(c,Qc,f))});const d=Array.from(c);return d.length===0&&d.push(Object.create(null)),bx.has(n)&&o.set(n,d),d}chartOptionScopes(){const{options:t,type:n}=this;return[t,xr[n]||{},Ee.datasets[n]||{},{type:n},Ee,Qc]}resolveNamedOptions(t,n,r,i=[""]){const s={$shared:!0},{resolver:o,subPrefixes:l}=ap(this._resolverCache,t,i);let c=o;if(FS(o,n)){s.$shared=!1,r=Wn(r)?r():r;const d=this.createResolver(t,r,l);c=ri(o,r,d)}for(const d of n)s[d]=c[d];return s}createResolver(t,n,r=[""],i){const{resolver:s}=ap(this._resolverCache,t,r);return ne(n)?ri(s,n,void 0,i):s}}function ap(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let s=r.get(i);return s||(s={resolver:ku(t,n),subPrefixes:n.filter(l=>!l.toLowerCase().includes("hover"))},r.set(i,s)),s}const DS=e=>ne(e)&&Object.getOwnPropertyNames(e).some(t=>Wn(e[t]));function FS(e,t){const{isScriptable:n,isIndexable:r}=nx(e);for(const i of t){const s=n(i),o=r(i),l=(o||s)&&e[i];if(s&&(Wn(l)||DS(l))||o&&Te(l))return!0}return!1}var IS="4.5.1";const BS=["top","bottom","left","right","chartArea"];function op(e,t){return e==="top"||e==="bottom"||BS.indexOf(e)===-1&&t==="x"}function lp(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function cp(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),me(n&&n.onComplete,[e],t)}function HS(e){const t=e.chart,n=t.options.animation;me(n&&n.onProgress,[e],t)}function wx(e){return Nu()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Oa={},dp=e=>{const t=wx(e);return Object.values(Oa).filter(n=>n.canvas===t).pop()};function WS(e,t,n){const r=Object.keys(e);for(const i of r){const s=+i;if(s>=t){const o=e[i];delete e[i],(n>0||s>t)&&(e[s+n]=o)}}}function US(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}var vn;let Qo=(vn=class{static register(...t){qt.add(...t),up()}static unregister(...t){qt.remove(...t),up()}constructor(t,n){const r=this.config=new LS(n),i=wx(t),s=dp(i);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||oS(i)),this.platform.updateConfig(r);const l=this.platform.acquireContext(i,o.aspectRatio),c=l&&l.canvas,d=c&&c.height,u=c&&c.width;if(this.id=Iw(),this.ctx=l,this.canvas=c,this.width=u,this.height=d,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new _S,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ij(f=>this.update(f),o.resizeDelay||0),this._dataChanges=[],Oa[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}Jt.listen(this,"complete",cp),Jt.listen(this,"progress",HS),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:s}=this;return se(t)?n&&s?s:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return qt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():zf(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Rf(this.canvas,this.ctx),this}stop(){return Jt.stop(this),this}resize(t,n){Jt.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,n,s),l=r.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,zf(this,l,!0)&&(this.notifyPlugins("resize",{size:o}),me(r.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ae(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((o,l)=>(o[l]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const l=n[o],c=Jc(o,l),d=c==="r",u=c==="x";return{options:l,dposition:d?"chartArea":u?"bottom":"left",dtype:d?"radialLinear":u?"category":"linear"}}))),ae(s,o=>{const l=o.options,c=l.id,d=Jc(c,l),u=Z(l.type,o.dtype);(l.position===void 0||op(l.position,d)!==op(o.dposition))&&(l.position=o.dposition),i[c]=!0;let f=null;if(c in r&&r[c].type===u)f=r[c];else{const h=qt.getScale(u);f=new h({id:c,type:u,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(l,t)}),ae(i,(o,l)=>{o||delete r[l]}),ae(r,o=>{bt.configure(this,o,o.options),bt.addBox(this,o)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,s)=>i.index-s.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(lp("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const s=n[r];let o=this.getDatasetMeta(r);const l=s.type||this.config.type;if(o.type&&o.type!==l&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=l,o.indexAxis=s.indexAxis||Zc(l,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const c=qt.getController(l),{datasetElementType:d,dataElementType:u}=Ee.datasets[l];Object.assign(c,{dataElementType:qt.getElement(u),datasetElementType:d&&qt.getElement(d)}),o.controller=new c(this,r),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ae(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let d=0,u=this.data.datasets.length;d<u;d++){const{controller:f}=this.getDatasetMeta(d),h=!i&&s.indexOf(f)===-1;f.buildOrUpdateElements(h),o=Math.max(+f.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||ae(s,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(lp("z","_idx"));const{_active:l,_lastEvent:c}=this;c?this._eventHandler(c,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){ae(this.scales,t=>{bt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!bf(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:s}of n){const o=r==="_removeElements"?-s:s;WS(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=s=>new Set(t.filter(o=>o[0]===s).map((o,l)=>l+","+o.splice(1).join(","))),i=r(0);for(let s=1;s<n;s++)if(!bf(i,r(s)))return;return Array.from(i).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;bt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],ae(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,s)=>{i._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Wn(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Jt.has(this)?this.attached&&!Jt.running(this)&&Jt.start(this):(this.draw(),cp({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,s;for(i=0,s=n.length;i<s;++i){const o=n[i];(!t||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r={meta:t,index:t.index,cancelable:!0},i=dk(this,t);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(i&&bu(n,i),t.controller.draw(),i&&wu(n),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return ws(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const s=Bk.modes[n];return typeof s=="function"?s(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(s=>s&&s._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=br(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",s=this.getDatasetMeta(t),o=s.controller._resolveAnimations(void 0,i);ys(n)?(s.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),o.update(s,{visible:r}),this.update(l=>l.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Jt.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Rf(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Oa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(s,o)=>{n.addEventListener(this,s,o),t[s]=o},i=(s,o,l)=>{s.offsetX=o,s.offsetY=l,this._eventHandler(s)};ae(this.options.events,s=>r(s,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(c,d)=>{n.addEventListener(this,c,d),t[c]=d},i=(c,d)=>{t[c]&&(n.removeEventListener(this,c,d),delete t[c])},s=(c,d)=>{this.canvas&&this.resize(c,d)};let o;const l=()=>{i("attach",l),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),r("attach",l)},n.isAttached(this.canvas)?l():o()}unbindEvents(){ae(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},ae(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let s,o,l,c;for(n==="dataset"&&(s=this.getDatasetMeta(t[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),l=0,c=t.length;l<c;++l){o=t[l];const d=o&&this.getDatasetMeta(o.datasetIndex).controller;d&&d[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:s,index:o})=>{const l=this.getDatasetMeta(s);if(!l)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:l.data[o],index:o}});!go(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,s=(c,d)=>c.filter(u=>!d.some(f=>u.datasetIndex===f.datasetIndex&&u.index===f.index)),o=s(n,t),l=r?t:s(t,n);o.length&&this.updateHoverStyle(o,i.mode,!1),l.length&&i.mode&&this.updateHoverStyle(l,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const s=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(s||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:s}=this,o=n,l=this._getActiveElements(t,i,r,o),c=qw(t),d=US(t,this._lastEvent,r,c);r&&(this._lastEvent=null,me(s.onHover,[t,l,this],this),c&&me(s.onClick,[t,l,this],this));const u=!go(l,i);return(u||n)&&(this._active=l,this._updateHoverStyles(l,i,n)),this._lastEvent=d,u}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const s=this.options.hover;return this.getElementsAtEventForMode(t,s.mode,s,i)}},q(vn,"defaults",Ee),q(vn,"instances",Oa),q(vn,"overrides",xr),q(vn,"registry",qt),q(vn,"version",IS),q(vn,"getChart",dp),vn);function up(){return ae(Qo.instances,e=>e._plugins.invalidate())}function $S(e,t,n){const{startAngle:r,x:i,y:s,outerRadius:o,innerRadius:l,options:c}=t,{borderWidth:d,borderJoinStyle:u}=c,f=Math.min(d/o,Rt(r-n));if(e.beginPath(),e.arc(i,s,o-d/2,r+f/2,n-f/2),l>0){const h=Math.min(d/l,Rt(r-n));e.arc(i,s,l+d/2,n-h/2,r+h/2,!0)}else{const h=Math.min(d/2,o*Rt(r-n));if(u==="round")e.arc(i,s,h,n-ue/2,r+ue/2,!0);else if(u==="bevel"){const m=2*h*h,p=-m*Math.cos(n+ue/2)+i,v=-m*Math.sin(n+ue/2)+s,y=m*Math.cos(r+ue/2)+i,x=m*Math.sin(r+ue/2)+s;e.lineTo(p,v),e.lineTo(y,x)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function qS(e,t,n){const{startAngle:r,pixelMargin:i,x:s,y:o,outerRadius:l,innerRadius:c}=t;let d=i/l;e.beginPath(),e.arc(s,o,l,r-d,n+d),c>i?(d=i/c,e.arc(s,o,c,n+d,r-d,!0)):e.arc(s,o,i,n+Fe,r-Fe),e.closePath(),e.clip()}function VS(e){return ju(e,["outerStart","outerEnd","innerStart","innerEnd"])}function YS(e,t,n,r){const i=VS(e.options.borderRadius),s=(n-t)/2,o=Math.min(s,r*t/2),l=c=>{const d=(n-Math.min(s,c))*r/2;return Ye(c,0,Math.min(s,d))};return{outerStart:l(i.outerStart),outerEnd:l(i.outerEnd),innerStart:Ye(i.innerStart,0,o),innerEnd:Ye(i.innerEnd,0,o)}}function _r(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function jo(e,t,n,r,i,s){const{x:o,y:l,startAngle:c,pixelMargin:d,innerRadius:u}=t,f=Math.max(t.outerRadius+r+n-d,0),h=u>0?u+r+n+d:0;let m=0;const p=i-c;if(r){const M=u>0?u-r:0,A=f>0?f-r:0,$=(M+A)/2,P=$!==0?p*$/($+r):p;m=(p-P)/2}const v=Math.max(.001,p*f-n/ue)/f,y=(p-v)/2,x=c+y+m,g=i-y-m,{outerStart:b,outerEnd:k,innerStart:j,innerEnd:S}=YS(t,h,f,g-x),N=f-b,_=f-k,z=x+b/N,T=g-k/_,I=h+j,D=h+S,B=x+j/I,Y=g-S/D;if(e.beginPath(),s){const M=(z+T)/2;if(e.arc(o,l,f,z,M),e.arc(o,l,f,M,T),k>0){const C=_r(_,T,o,l);e.arc(C.x,C.y,k,T,g+Fe)}const A=_r(D,g,o,l);if(e.lineTo(A.x,A.y),S>0){const C=_r(D,Y,o,l);e.arc(C.x,C.y,S,g+Fe,Y+Math.PI)}const $=(g-S/h+(x+j/h))/2;if(e.arc(o,l,h,g-S/h,$,!0),e.arc(o,l,h,$,x+j/h,!0),j>0){const C=_r(I,B,o,l);e.arc(C.x,C.y,j,B+Math.PI,x-Fe)}const P=_r(N,x,o,l);if(e.lineTo(P.x,P.y),b>0){const C=_r(N,z,o,l);e.arc(C.x,C.y,b,x-Fe,z)}}else{e.moveTo(o,l);const M=Math.cos(z)*f+o,A=Math.sin(z)*f+l;e.lineTo(M,A);const $=Math.cos(T)*f+o,P=Math.sin(T)*f+l;e.lineTo($,P)}e.closePath()}function KS(e,t,n,r,i){const{fullCircles:s,startAngle:o,circumference:l}=t;let c=t.endAngle;if(s){jo(e,t,n,r,c,i);for(let d=0;d<s;++d)e.fill();isNaN(l)||(c=o+(l%Be||Be))}return jo(e,t,n,r,c,i),e.fill(),c}function XS(e,t,n,r,i){const{fullCircles:s,startAngle:o,circumference:l,options:c}=t,{borderWidth:d,borderJoinStyle:u,borderDash:f,borderDashOffset:h,borderRadius:m}=c,p=c.borderAlign==="inner";if(!d)return;e.setLineDash(f||[]),e.lineDashOffset=h,p?(e.lineWidth=d*2,e.lineJoin=u||"round"):(e.lineWidth=d,e.lineJoin=u||"bevel");let v=t.endAngle;if(s){jo(e,t,n,r,v,i);for(let y=0;y<s;++y)e.stroke();isNaN(l)||(v=o+(l%Be||Be))}p&&qS(e,t,v),c.selfJoin&&v-o>=ue&&m===0&&u!=="miter"&&$S(e,t,v),s||(jo(e,t,n,r,v,i),e.stroke())}class Li extends Ot{constructor(n){super();q(this,"circumference");q(this,"endAngle");q(this,"fullCircles");q(this,"innerRadius");q(this,"outerRadius");q(this,"pixelMargin");q(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.getProps(["x","y"],i),{angle:o,distance:l}=Y0(s,{x:n,y:r}),{startAngle:c,endAngle:d,innerRadius:u,outerRadius:f,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,p=Z(h,d-c),v=gu(o,c,d)&&c!==d,y=p>=Be||v,x=Cn(l,u+m,f+m);return y&&x}getCenterPoint(n){const{x:r,y:i,startAngle:s,endAngle:o,innerRadius:l,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:d,spacing:u}=this.options,f=(s+o)/2,h=(l+c+u+d)/2;return{x:r+Math.cos(f)*h,y:i+Math.sin(f)*h}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,s=(r.offset||0)/4,o=(r.spacing||0)/2,l=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>Be?Math.floor(i/Be):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const c=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(c)*s,Math.sin(c)*s);const d=1-Math.sin(Math.min(ue,i||0)),u=s*d;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,KS(n,this,u,o,l),XS(n,this,u,o,l),n.restore()}}q(Li,"id","arc"),q(Li,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),q(Li,"defaultRoutes",{backgroundColor:"backgroundColor"}),q(Li,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function jx(e,t,n=t){e.lineCap=Z(n.borderCapStyle,t.borderCapStyle),e.setLineDash(Z(n.borderDash,t.borderDash)),e.lineDashOffset=Z(n.borderDashOffset,t.borderDashOffset),e.lineJoin=Z(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Z(n.borderWidth,t.borderWidth),e.strokeStyle=Z(n.borderColor,t.borderColor)}function QS(e,t,n){e.lineTo(n.x,n.y)}function GS(e){return e.stepped?vj:e.tension||e.cubicInterpolationMode==="monotone"?yj:QS}function kx(e,t,n={}){const r=e.length,{start:i=0,end:s=r-1}=n,{start:o,end:l}=t,c=Math.max(i,o),d=Math.min(s,l),u=i<o&&s<o||i>l&&s>l;return{count:r,start:c,loop:t.loop,ilen:d<c&&!u?r+d-c:d-c}}function ZS(e,t,n,r){const{points:i,options:s}=t,{count:o,start:l,loop:c,ilen:d}=kx(i,n,r),u=GS(s);let{move:f=!0,reverse:h}=r||{},m,p,v;for(m=0;m<=d;++m)p=i[(l+(h?d-m:m))%o],!p.skip&&(f?(e.moveTo(p.x,p.y),f=!1):u(e,v,p,h,s.stepped),v=p);return c&&(p=i[(l+(h?d:0))%o],u(e,v,p,h,s.stepped)),!!c}function JS(e,t,n,r){const i=t.points,{count:s,start:o,ilen:l}=kx(i,n,r),{move:c=!0,reverse:d}=r||{};let u=0,f=0,h,m,p,v,y,x;const g=k=>(o+(d?l-k:k))%s,b=()=>{v!==y&&(e.lineTo(u,y),e.lineTo(u,v),e.lineTo(u,x))};for(c&&(m=i[g(0)],e.moveTo(m.x,m.y)),h=0;h<=l;++h){if(m=i[g(h)],m.skip)continue;const k=m.x,j=m.y,S=k|0;S===p?(j<v?v=j:j>y&&(y=j),u=(f*u+k)/++f):(b(),e.lineTo(k,j),p=S,f=0,v=y=j),x=j}b()}function ed(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?JS:ZS}function e_(e){return e.stepped?Gj:e.tension||e.cubicInterpolationMode==="monotone"?Zj:Jn}function t_(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),jx(e,t.options),e.stroke(i)}function n_(e,t,n,r){const{segments:i,options:s}=t,o=ed(t);for(const l of i)jx(e,s,l.style),e.beginPath(),o(e,t,l,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const r_=typeof Path2D=="function";function i_(e,t,n,r){r_&&!t.options.segment?t_(e,t,n,r):n_(e,t,n,r)}class Di extends Ot{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;Uj(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=ak(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],s=this.points,o=rk(this,{property:n,start:i,end:i});if(!o.length)return;const l=[],c=e_(r);let d,u;for(d=0,u=o.length;d<u;++d){const{start:f,end:h}=o[d],m=s[f],p=s[h];if(m===p){l.push(m);continue}const v=Math.abs((i-m[n])/(p[n]-m[n])),y=c(m,p,v,r.stepped);y[n]=t[n],l.push(y)}return l.length===1?l[0]:l}pathSegment(t,n,r){return ed(this)(t,this,n,r)}path(t,n,r){const i=this.segments,s=ed(this);let o=this._loop;n=n||0,r=r||this.points.length-n;for(const l of i)o&=s(t,this,l,{start:n,end:n+r-1});return!!o}draw(t,n,r,i){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(t.save(),i_(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}q(Di,"id","line"),q(Di,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),q(Di,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),q(Di,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function hp(e,t,n,r){const i=e.options,{[n]:s}=e.getProps([n],r);return Math.abs(t-s)<i.radius+i.hitRadius}class La extends Ot{constructor(n){super();q(this,"parsed");q(this,"skip");q(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.options,{x:o,y:l}=this.getProps(["x","y"],i);return Math.pow(n-o,2)+Math.pow(r-l,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,r){return hp(this,n,"x",r)}inYRange(n,r){return hp(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!ws(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,Gc(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}q(La,"id","point"),q(La,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),q(La,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Sx(e,t){const{x:n,y:r,base:i,width:s,height:o}=e.getProps(["x","y","base","width","height"],t);let l,c,d,u,f;return e.horizontal?(f=o/2,l=Math.min(n,i),c=Math.max(n,i),d=r-f,u=r+f):(f=s/2,l=n-f,c=n+f,d=Math.min(r,i),u=Math.max(r,i)),{left:l,top:d,right:c,bottom:u}}function En(e,t,n,r){return e?0:Ye(t,n,r)}function s_(e,t,n){const r=e.options.borderWidth,i=e.borderSkipped,s=tx(r);return{t:En(i.top,s.top,0,n),r:En(i.right,s.right,0,t),b:En(i.bottom,s.bottom,0,n),l:En(i.left,s.left,0,t)}}function a_(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,s=$r(i),o=Math.min(t,n),l=e.borderSkipped,c=r||ne(i);return{topLeft:En(!c||l.top||l.left,s.topLeft,0,o),topRight:En(!c||l.top||l.right,s.topRight,0,o),bottomLeft:En(!c||l.bottom||l.left,s.bottomLeft,0,o),bottomRight:En(!c||l.bottom||l.right,s.bottomRight,0,o)}}function o_(e){const t=Sx(e),n=t.right-t.left,r=t.bottom-t.top,i=s_(e,n/2,r/2),s=a_(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:s},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,s.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(i.b,i.r))}}}}function Bl(e,t,n,r){const i=t===null,s=n===null,l=e&&!(i&&s)&&Sx(e,r);return l&&(i||Cn(t,l.left,l.right))&&(s||Cn(n,l.top,l.bottom))}function l_(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function c_(e,t){e.rect(t.x,t.y,t.w,t.h)}function Hl(e,t,n={}){const r=e.x!==n.x?-t:0,i=e.y!==n.y?-t:0,s=(e.x+e.w!==n.x+n.w?t:0)-r,o=(e.y+e.h!==n.y+n.h?t:0)-i;return{x:e.x+r,y:e.y+i,w:e.w+s,h:e.h+o,radius:e.radius}}class Da extends Ot{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:s,outer:o}=o_(this),l=l_(o.radius)?yo:c_;t.save(),(o.w!==s.w||o.h!==s.h)&&(t.beginPath(),l(t,Hl(o,n,s)),t.clip(),l(t,Hl(s,-n,o)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),l(t,Hl(s,n)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,n,r){return Bl(this,t,n,r)}inXRange(t,n){return Bl(this,t,null,n)}inYRange(t,n){return Bl(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:i,horizontal:s}=this.getProps(["x","y","base","horizontal"],t);return{x:s?(n+i)/2:n,y:s?r:(r+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}q(Da,"id","bar"),q(Da,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),q(Da,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const fp=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},d_=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class pp extends Ot{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=me(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Ke(r.font),s=i.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:c}=fp(r,s);let d,u;n.font=i.string,this.isHorizontal()?(d=this.maxWidth,u=this._fitRows(o,s,l,c)+10):(u=this.maxHeight,d=this._fitCols(o,i,l,c)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:s,maxWidth:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.lineWidths=[0],u=i+l;let f=t;s.textAlign="left",s.textBaseline="middle";let h=-1,m=-u;return this.legendItems.forEach((p,v)=>{const y=r+n/2+s.measureText(p.text).width;(v===0||d[d.length-1]+y+2*l>o)&&(f+=u,d[d.length-(v>0?0:1)]=0,m+=u,h++),c[v]={left:0,top:m,row:h,width:y,height:i},d[d.length-1]+=y+l}),f}_fitCols(t,n,r,i){const{ctx:s,maxHeight:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.columnSizes=[],u=o-t;let f=l,h=0,m=0,p=0,v=0;return this.legendItems.forEach((y,x)=>{const{itemWidth:g,itemHeight:b}=u_(r,n,s,y,i);x>0&&m+b+2*l>u&&(f+=h+l,d.push({width:h,height:m}),p+=h+l,v++,h=m=0),c[x]={left:p,top:m,col:v,width:g,height:b},h=Math.max(h,g),m+=b+l}),f+=h,d.push({width:h,height:m}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:s}}=this,o=qr(s,this.left,this.width);if(this.isHorizontal()){let l=0,c=$e(r,this.left+i,this.right-this.lineWidths[l]);for(const d of n)l!==d.row&&(l=d.row,c=$e(r,this.left+i,this.right-this.lineWidths[l])),d.top+=this.top+t+i,d.left=o.leftForLtr(o.x(c),d.width),c+=d.width+i}else{let l=0,c=$e(r,this.top+t+i,this.bottom-this.columnSizes[l].height);for(const d of n)d.col!==l&&(l=d.col,c=$e(r,this.top+t+i,this.bottom-this.columnSizes[l].height)),d.top=c,d.left+=this.left+i,d.left=o.leftForLtr(o.x(d.left),d.width),c+=d.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;bu(t,this),this._draw(),wu(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:s,labels:o}=t,l=Ee.color,c=qr(t.rtl,this.left,this.width),d=Ke(o.font),{padding:u}=o,f=d.size,h=f/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=d.string;const{boxWidth:p,boxHeight:v,itemHeight:y}=fp(o,f),x=function(S,N,_){if(isNaN(p)||p<=0||isNaN(v)||v<0)return;i.save();const z=Z(_.lineWidth,1);if(i.fillStyle=Z(_.fillStyle,l),i.lineCap=Z(_.lineCap,"butt"),i.lineDashOffset=Z(_.lineDashOffset,0),i.lineJoin=Z(_.lineJoin,"miter"),i.lineWidth=z,i.strokeStyle=Z(_.strokeStyle,l),i.setLineDash(Z(_.lineDash,[])),o.usePointStyle){const T={radius:v*Math.SQRT2/2,pointStyle:_.pointStyle,rotation:_.rotation,borderWidth:z},I=c.xPlus(S,p/2),D=N+h;ex(i,T,I,D,o.pointStyleWidth&&p)}else{const T=N+Math.max((f-v)/2,0),I=c.leftForLtr(S,p),D=$r(_.borderRadius);i.beginPath(),Object.values(D).some(B=>B!==0)?yo(i,{x:I,y:T,w:p,h:v,radius:D}):i.rect(I,T,p,v),i.fill(),z!==0&&i.stroke()}i.restore()},g=function(S,N,_){js(i,_.text,S,N+y/2,d,{strikethrough:_.hidden,textAlign:c.textAlign(_.textAlign)})},b=this.isHorizontal(),k=this._computeTitleHeight();b?m={x:$e(s,this.left+u,this.right-r[0]),y:this.top+u+k,line:0}:m={x:this.left+u,y:$e(s,this.top+k+u,this.bottom-n[0].height),line:0},ox(this.ctx,t.textDirection);const j=y+u;this.legendItems.forEach((S,N)=>{i.strokeStyle=S.fontColor,i.fillStyle=S.fontColor;const _=i.measureText(S.text).width,z=c.textAlign(S.textAlign||(S.textAlign=o.textAlign)),T=p+h+_;let I=m.x,D=m.y;c.setWidth(this.width),b?N>0&&I+T+u>this.right&&(D=m.y+=j,m.line++,I=m.x=$e(s,this.left+u,this.right-r[m.line])):N>0&&D+j>this.bottom&&(I=m.x=I+n[m.line].width+u,m.line++,D=m.y=$e(s,this.top+k+u,this.bottom-n[m.line].height));const B=c.x(I);if(x(B,D,S),I=sj(z,I+p+h,b?I+T:this.right,t.rtl),g(c.x(I),D,S),b)m.x+=T+u;else if(typeof S.text!="string"){const Y=d.lineHeight;m.y+=_x(S,Y)+u}else m.y+=j}),lx(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Ke(n.font),i=_t(n.padding);if(!n.display)return;const s=qr(t.rtl,this.left,this.width),o=this.ctx,l=n.position,c=r.size/2,d=i.top+c;let u,f=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+d,f=$e(t.align,f,this.right-h);else{const p=this.columnSizes.reduce((v,y)=>Math.max(v,y.height),0);u=d+$e(t.align,this.top,this.bottom-p-t.labels.padding-this._computeTitleHeight())}const m=$e(l,f,f+h);o.textAlign=s.textAlign(vu(l)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,js(o,n.text,m,u,r)}_computeTitleHeight(){const t=this.options.title,n=Ke(t.font),r=_t(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,s;if(Cn(t,this.left,this.right)&&Cn(n,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(i=s[r],Cn(t,i.left,i.left+i.width)&&Cn(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!p_(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,s=d_(i,r);i&&!s&&me(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!s&&me(n.onHover,[t,r,this],this)}else r&&me(n.onClick,[t,r,this],this)}}function u_(e,t,n,r,i){const s=h_(r,e,t,n),o=f_(i,r,t.lineHeight);return{itemWidth:s,itemHeight:o}}function h_(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((s,o)=>s.length>o.length?s:o)),t+n.size/2+r.measureText(i).width}function f_(e,t,n){let r=e;return typeof t.text!="string"&&(r=_x(t,n)),r}function _x(e,t){const n=e.text?e.text.length:0;return t*n}function p_(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var m_={id:"legend",_element:pp,start(e,t,n){const r=e.legend=new pp({ctx:e.ctx,options:n,chart:e});bt.configure(e,r,n),bt.addBox(e,r)},stop(e){bt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;bt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:l}}=e.legend.options;return e._getSortedDatasetMetas().map(c=>{const d=c.controller.getStyle(n?0:void 0),u=_t(d.borderWidth);return{text:t[c.index].label,fillStyle:d.backgroundColor,fontColor:s,hidden:!c.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:d.borderColor,pointStyle:r||d.pointStyle,rotation:d.rotation,textAlign:i||d.textAlign,borderRadius:o&&(l||d.borderRadius),datasetIndex:c.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Nx extends Ot{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=Te(r.text)?r.text.length:1;this._padding=_t(r.padding);const s=i*Ke(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:s,options:o}=this,l=o.align;let c=0,d,u,f;return this.isHorizontal()?(u=$e(l,r,s),f=n+t,d=s-r):(o.position==="left"?(u=r+t,f=$e(l,i,n),c=ue*-.5):(u=s-t,f=$e(l,n,i),c=ue*.5),d=i-n),{titleX:u,titleY:f,maxWidth:d,rotation:c}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=Ke(n.font),s=r.lineHeight/2+this._padding.top,{titleX:o,titleY:l,maxWidth:c,rotation:d}=this._drawArgs(s);js(t,n.text,0,0,r,{color:n.color,maxWidth:c,rotation:d,textAlign:vu(n.align),textBaseline:"middle",translation:[o,l]})}}function g_(e,t){const n=new Nx({ctx:e.ctx,options:t,chart:e});bt.configure(e,n,t),bt.addBox(e,n),e.titleBlock=n}var x_={id:"title",_element:Nx,start(e,t,n){g_(e,n)},stop(e){const t=e.titleBlock;bt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;bt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Fi={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,s=0;for(t=0,n=e.length;t<n;++t){const l=e[t].element;if(l&&l.hasValue()){const c=l.tooltipPosition();r.add(c.x),i+=c.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((l,c)=>l+c)/r.size,y:i/s}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,s,o,l;for(s=0,o=e.length;s<o;++s){const c=e[s].element;if(c&&c.hasValue()){const d=c.getCenterPoint(),u=Xc(t,d);u<i&&(i=u,l=c)}}if(l){const c=l.tooltipPosition();n=c.x,r=c.y}return{x:n,y:r}}};function Wt(e,t){return t&&(Te(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function en(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function v_(e,t){const{element:n,datasetIndex:r,index:i}=t,s=e.getDatasetMeta(r).controller,{label:o,value:l}=s.getLabelAndValue(i);return{chart:e,label:o,parsed:s.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:l,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function mp(e,t){const n=e.chart.ctx,{body:r,footer:i,title:s}=e,{boxWidth:o,boxHeight:l}=t,c=Ke(t.bodyFont),d=Ke(t.titleFont),u=Ke(t.footerFont),f=s.length,h=i.length,m=r.length,p=_t(t.padding);let v=p.height,y=0,x=r.reduce((k,j)=>k+j.before.length+j.lines.length+j.after.length,0);if(x+=e.beforeBody.length+e.afterBody.length,f&&(v+=f*d.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),x){const k=t.displayColors?Math.max(l,c.lineHeight):c.lineHeight;v+=m*k+(x-m)*c.lineHeight+(x-1)*t.bodySpacing}h&&(v+=t.footerMarginTop+h*u.lineHeight+(h-1)*t.footerSpacing);let g=0;const b=function(k){y=Math.max(y,n.measureText(k).width+g)};return n.save(),n.font=d.string,ae(e.title,b),n.font=c.string,ae(e.beforeBody.concat(e.afterBody),b),g=t.displayColors?o+2+t.boxPadding:0,ae(r,k=>{ae(k.before,b),ae(k.lines,b),ae(k.after,b)}),g=0,n.font=u.string,ae(e.footer,b),n.restore(),y+=p.width,{width:y,height:v}}function y_(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function b_(e,t,n,r){const{x:i,width:s}=r,o=n.caretSize+n.caretPadding;if(e==="left"&&i+s+o>t.width||e==="right"&&i-s-o<0)return!0}function w_(e,t,n,r){const{x:i,width:s}=n,{width:o,chartArea:{left:l,right:c}}=e;let d="center";return r==="center"?d=i<=(l+c)/2?"left":"right":i<=s/2?d="left":i>=o-s/2&&(d="right"),b_(d,e,t,n)&&(d="center"),d}function gp(e,t,n){const r=n.yAlign||t.yAlign||y_(e,n);return{xAlign:n.xAlign||t.xAlign||w_(e,t,n,r),yAlign:r}}function j_(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function k_(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function xp(e,t,n,r){const{caretSize:i,caretPadding:s,cornerRadius:o}=e,{xAlign:l,yAlign:c}=n,d=i+s,{topLeft:u,topRight:f,bottomLeft:h,bottomRight:m}=$r(o);let p=j_(t,l);const v=k_(t,c,d);return c==="center"?l==="left"?p+=d:l==="right"&&(p-=d):l==="left"?p-=Math.max(u,h)+i:l==="right"&&(p+=Math.max(f,m)+i),{x:Ye(p,0,r.width-t.width),y:Ye(v,0,r.height-t.height)}}function pa(e,t,n){const r=_t(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function vp(e){return Wt([],en(e))}function S_(e,t,n){return br(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function yp(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const Cx={beforeTitle:Zt,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Zt,beforeBody:Zt,beforeLabel:Zt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return se(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Zt,afterBody:Zt,beforeFooter:Zt,footer:Zt,afterFooter:Zt};function et(e,t,n,r){const i=e[t].call(n,r);return typeof i>"u"?Cx[t].call(n,r):i}class td extends Ot{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new dx(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=S_(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=et(r,"beforeTitle",this,t),s=et(r,"title",this,t),o=et(r,"afterTitle",this,t);let l=[];return l=Wt(l,en(i)),l=Wt(l,en(s)),l=Wt(l,en(o)),l}getBeforeBody(t,n){return vp(et(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return ae(t,s=>{const o={before:[],lines:[],after:[]},l=yp(r,s);Wt(o.before,en(et(l,"beforeLabel",this,s))),Wt(o.lines,et(l,"label",this,s)),Wt(o.after,en(et(l,"afterLabel",this,s))),i.push(o)}),i}getAfterBody(t,n){return vp(et(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=et(r,"beforeFooter",this,t),s=et(r,"footer",this,t),o=et(r,"afterFooter",this,t);let l=[];return l=Wt(l,en(i)),l=Wt(l,en(s)),l=Wt(l,en(o)),l}_createItems(t){const n=this._active,r=this.chart.data,i=[],s=[],o=[];let l=[],c,d;for(c=0,d=n.length;c<d;++c)l.push(v_(this.chart,n[c]));return t.filter&&(l=l.filter((u,f,h)=>t.filter(u,f,h,r))),t.itemSort&&(l=l.sort((u,f)=>t.itemSort(u,f,r))),ae(l,u=>{const f=yp(t.callbacks,u);i.push(et(f,"labelColor",this,u)),s.push(et(f,"labelPointStyle",this,u)),o.push(et(f,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=l,l}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,o=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const l=Fi[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const c=this._size=mp(this,r),d=Object.assign({},l,c),u=gp(this.chart,r,d),f=xp(r,d,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:f.x,y:f.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const s=this.getCaretPosition(t,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:o,cornerRadius:l}=r,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=$r(l),{x:h,y:m}=t,{width:p,height:v}=n;let y,x,g,b,k,j;return s==="center"?(k=m+v/2,i==="left"?(y=h,x=y-o,b=k+o,j=k-o):(y=h+p,x=y+o,b=k-o,j=k+o),g=y):(i==="left"?x=h+Math.max(c,u)+o:i==="right"?x=h+p-Math.max(d,f)-o:x=this.caretX,s==="top"?(b=m,k=b-o,y=x-o,g=x+o):(b=m+v,k=b+o,y=x+o,g=x-o),j=b),{x1:y,x2:x,x3:g,y1:b,y2:k,y3:j}}drawTitle(t,n,r){const i=this.title,s=i.length;let o,l,c;if(s){const d=qr(r.rtl,this.x,this.width);for(t.x=pa(this,r.titleAlign,r),n.textAlign=d.textAlign(r.titleAlign),n.textBaseline="middle",o=Ke(r.titleFont),l=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,c=0;c<s;++c)n.fillText(i[c],d.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+l,c+1===s&&(t.y+=r.titleMarginBottom-l)}}_drawColorBox(t,n,r,i,s){const o=this.labelColors[r],l=this.labelPointStyles[r],{boxHeight:c,boxWidth:d}=s,u=Ke(s.bodyFont),f=pa(this,"left",s),h=i.x(f),m=c<u.lineHeight?(u.lineHeight-c)/2:0,p=n.y+m;if(s.usePointStyle){const v={radius:Math.min(d,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},y=i.leftForLtr(h,d)+d/2,x=p+c/2;t.strokeStyle=s.multiKeyBackground,t.fillStyle=s.multiKeyBackground,Gc(t,v,y,x),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Gc(t,v,y,x)}else{t.lineWidth=ne(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const v=i.leftForLtr(h,d),y=i.leftForLtr(i.xPlus(h,1),d-2),x=$r(o.borderRadius);Object.values(x).some(g=>g!==0)?(t.beginPath(),t.fillStyle=s.multiKeyBackground,yo(t,{x:v,y:p,w:d,h:c,radius:x}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),yo(t,{x:y,y:p+1,w:d-2,h:c-2,radius:x}),t.fill()):(t.fillStyle=s.multiKeyBackground,t.fillRect(v,p,d,c),t.strokeRect(v,p,d,c),t.fillStyle=o.backgroundColor,t.fillRect(y,p+1,d-2,c-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:o,displayColors:l,boxHeight:c,boxWidth:d,boxPadding:u}=r,f=Ke(r.bodyFont);let h=f.lineHeight,m=0;const p=qr(r.rtl,this.x,this.width),v=function(_){n.fillText(_,p.x(t.x+m),t.y+h/2),t.y+=h+s},y=p.textAlign(o);let x,g,b,k,j,S,N;for(n.textAlign=o,n.textBaseline="middle",n.font=f.string,t.x=pa(this,y,r),n.fillStyle=r.bodyColor,ae(this.beforeBody,v),m=l&&y!=="right"?o==="center"?d/2+u:d+2+u:0,k=0,S=i.length;k<S;++k){for(x=i[k],g=this.labelTextColors[k],n.fillStyle=g,ae(x.before,v),b=x.lines,l&&b.length&&(this._drawColorBox(n,t,k,p,r),h=Math.max(f.lineHeight,c)),j=0,N=b.length;j<N;++j)v(b[j]),h=f.lineHeight;ae(x.after,v)}m=0,h=f.lineHeight,ae(this.afterBody,v),t.y-=s}drawFooter(t,n,r){const i=this.footer,s=i.length;let o,l;if(s){const c=qr(r.rtl,this.x,this.width);for(t.x=pa(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=c.textAlign(r.footerAlign),n.textBaseline="middle",o=Ke(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,l=0;l<s;++l)n.fillText(i[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:s,yAlign:o}=this,{x:l,y:c}=t,{width:d,height:u}=r,{topLeft:f,topRight:h,bottomLeft:m,bottomRight:p}=$r(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(l+f,c),o==="top"&&this.drawCaret(t,n,r,i),n.lineTo(l+d-h,c),n.quadraticCurveTo(l+d,c,l+d,c+h),o==="center"&&s==="right"&&this.drawCaret(t,n,r,i),n.lineTo(l+d,c+u-p),n.quadraticCurveTo(l+d,c+u,l+d-p,c+u),o==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(l+m,c+u),n.quadraticCurveTo(l,c+u,l,c+u-m),o==="center"&&s==="left"&&this.drawCaret(t,n,r,i),n.lineTo(l,c+f),n.quadraticCurveTo(l,c,l+f,c),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const o=Fi[t.position].call(this,this._active,this._eventPosition);if(!o)return;const l=this._size=mp(this,t),c=Object.assign({},o,this._size),d=gp(n,t,c),u=xp(t,c,d,n);(i._to!==u.x||s._to!==u.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=l.width,this.height=l.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=_t(n.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&l&&(t.save(),t.globalAlpha=r,this.drawBackground(s,t,i,n),ox(t,n.textDirection),s.y+=o.top,this.drawTitle(s,t,n),this.drawBody(s,t,n),this.drawFooter(s,t,n),lx(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:l,index:c})=>{const d=this.chart.getDatasetMeta(l);if(!d)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:d.data[c],index:c}}),s=!go(r,i),o=this._positionChanged(i,n);(s||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],o=this._getActiveElements(t,s,n,r),l=this._positionChanged(o,t),c=n||!go(o,s)||l;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),c}_getActiveElements(t,n,r,i){const s=this.options;if(t.type==="mouseout")return[];if(!i)return n.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(t,n){const{caretX:r,caretY:i,options:s}=this,o=Fi[s.position].call(this,t,n);return o!==!1&&(r!==o.x||i!==o.y)}}q(td,"positioners",Fi);var __={id:"tooltip",_element:td,positioners:Fi,afterInit(e,t,n){n&&(e.tooltip=new td({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Cx},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const N_=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function C_(e,t,n,r){const i=e.indexOf(t);if(i===-1)return N_(e,t,n,r);const s=e.lastIndexOf(t);return i!==s?n:i}const P_=(e,t)=>e===null?null:Ye(Math.round(e),0,t);function bp(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class nd extends pi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:s}of n)r[i]===s&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(se(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:C_(r,t,Z(n,t),this._addedLabels),P_(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let s=this.getLabels();s=t===0&&n===s.length-1?s:s.slice(t,n+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=t;o<=n;o++)i.push({value:o});return i}getLabelForValue(t){return bp.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}q(nd,"id","category"),q(nd,"defaults",{ticks:{callback:bp}});function E_(e,t){const n=[],{bounds:i,step:s,min:o,max:l,precision:c,count:d,maxTicks:u,maxDigits:f,includeBounds:h}=e,m=s||1,p=u-1,{min:v,max:y}=t,x=!se(o),g=!se(l),b=!se(d),k=(y-v)/(f+1);let j=jf((y-v)/p/m)*m,S,N,_,z;if(j<1e-14&&!x&&!g)return[{value:v},{value:y}];z=Math.ceil(y/j)-Math.floor(v/j),z>p&&(j=jf(z*j/p/m)*m),se(c)||(S=Math.pow(10,c),j=Math.ceil(j*S)/S),i==="ticks"?(N=Math.floor(v/j)*j,_=Math.ceil(y/j)*j):(N=v,_=y),x&&g&&s&&Qw((l-o)/s,j/1e3)?(z=Math.round(Math.min((l-o)/j,u)),j=(l-o)/z,N=o,_=l):b?(N=x?o:N,_=g?l:_,z=d-1,j=(_-N)/z):(z=(_-N)/j,Xi(z,Math.round(z),j/1e3)?z=Math.round(z):z=Math.ceil(z));const T=Math.max(kf(j),kf(N));S=Math.pow(10,se(c)?T:c),N=Math.round(N*S)/S,_=Math.round(_*S)/S;let I=0;for(x&&(h&&N!==o?(n.push({value:o}),N<o&&I++,Xi(Math.round((N+I*j)*S)/S,o,wp(o,k,e))&&I++):N<o&&I++);I<z;++I){const D=Math.round((N+I*j)*S)/S;if(g&&D>l)break;n.push({value:D})}return g&&h&&_!==l?n.length&&Xi(n[n.length-1].value,l,wp(l,k,e))?n[n.length-1].value=l:n.push({value:l}):(!g||_===l)&&n.push({value:_}),n}function wp(e,t,{horizontal:n,minRotation:r}){const i=sr(r),s=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+e).length;return Math.min(t/s,o)}class R_ extends pi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return se(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const o=c=>i=n?i:c,l=c=>s=r?s:c;if(t){const c=Xt(i),d=Xt(s);c<0&&d<0?l(0):c>0&&d>0&&o(0)}if(i===s){let c=s===0?1:Math.abs(s*.05);l(s+c),t||o(i-c)}this.min=i,this.max=s}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=E_(i,s);return t.bounds==="ticks"&&Gw(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return Z0(t,this.chart.options.locale,this.options.ticks.format)}}class rd extends R_{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=St(t)?t:0,this.max=St(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=sr(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}q(rd,"id","linear"),q(rd,"defaults",{ticks:{callback:J0.formatters.numeric}});const Go={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},rt=Object.keys(Go);function jp(e,t){return e-t}function kp(e,t){if(se(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:s}=e._parseOpts;let o=t;return typeof r=="function"&&(o=r(o)),St(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(bs(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,i)),+o)}function Sp(e,t,n,r){const i=rt.length;for(let s=rt.indexOf(e);s<i-1;++s){const o=Go[rt[s]],l=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-t)/(l*o.size))<=r)return rt[s]}return rt[i-1]}function M_(e,t,n,r,i){for(let s=rt.length-1;s>=rt.indexOf(n);s--){const o=rt[s];if(Go[o].common&&e._adapter.diff(i,r,o)>=t-1)return o}return rt[n?rt.indexOf(n):0]}function T_(e){for(let t=rt.indexOf(e)+1,n=rt.length;t<n;++t)if(Go[rt[t]].common)return rt[t]}function _p(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=xu(n,t),s=n[r]>=t?n[r]:n[i];e[s]=!0}}function z_(e,t,n,r){const i=e._adapter,s=+i.startOf(t[0].value,r),o=t[t.length-1].value;let l,c;for(l=s;l<=o;l=+i.add(l,1,r))c=n[l],c>=0&&(t[c].major=!0);return t}function Np(e,t,n){const r=[],i={},s=t.length;let o,l;for(o=0;o<s;++o)l=t[o],i[l]=o,r.push({value:l,major:!1});return s===0||!n?r:z_(e,r,i,n)}class ko extends pi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new Ok._date(t.adapters.date);i.init(n),Ki(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:kp(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:s,minDefined:o,maxDefined:l}=this.getUserBounds();function c(d){!o&&!isNaN(d.min)&&(i=Math.min(i,d.min)),!l&&!isNaN(d.max)&&(s=Math.max(s,d.max))}(!o||!l)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=St(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=St(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,o=this.max,l=nj(i,s,o);return this._unit=n.unit||(r.autoSkip?Sp(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):M_(this,l.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:T_(this._unit),this.initOffsets(i),t.reverse&&l.reverse(),Np(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,s;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,s=this.getDecimalForValue(t[t.length-1]),t.length===1?r=s:r=(s-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;n=Ye(n,0,o),r=Ye(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,o=s.unit||Sp(s.minUnit,n,r,this._getLabelCapacity(n)),l=Z(i.ticks.stepSize,1),c=o==="week"?s.isoWeekday:!1,d=bs(c)||c===!0,u={};let f=n,h,m;if(d&&(f=+t.startOf(f,"isoWeek",c)),f=+t.startOf(f,d?"day":o),t.diff(r,n,o)>1e5*l)throw new Error(n+" and "+r+" are too far apart with stepSize of "+l+" "+o);const p=i.ticks.source==="data"&&this.getDataTimestamps();for(h=f,m=0;h<r;h=+t.add(h,l,o),m++)_p(u,h,p);return(h===r||i.bounds==="ticks"||m===1)&&_p(u,h,p),Object.keys(u).sort(jp).map(v=>+v)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,s=this._unit,o=n||i[s];return this._adapter.format(t,o)}_tickFormatFunction(t,n,r,i){const s=this.options,o=s.ticks.callback;if(o)return me(o,[t,n,r],this);const l=s.time.displayFormats,c=this._unit,d=this._majorUnit,u=c&&l[c],f=d&&l[d],h=r[n],m=d&&f&&h&&h.major;return this._adapter.format(t,i||(m?f:u))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=sr(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),o=Math.sin(i),l=this._resolveTickFontOptions(0).size;return{w:r*s+l*o,h:r*o+l*s}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(t,0,Np(this,[t],this._majorUnit),i),o=this._getLabelSize(s),l=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return l>0?l:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(kp(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return X0(t.sort(jp))}}q(ko,"id","time"),q(ko,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ma(e,t,n){let r=0,i=e.length-1,s,o,l,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=ar(e,"pos",t)),{pos:s,time:l}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=ar(e,"time",t)),{time:s,pos:l}=e[r],{time:o,pos:c}=e[i]);const d=o-s;return d?l+(c-l)*(t-s)/d:l}class Cp extends ko{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=ma(n,this.min),this._tableRange=ma(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],s=[];let o,l,c,d,u;for(o=0,l=t.length;o<l;++o)d=t[o],d>=n&&d<=r&&i.push(d);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,l=i.length;o<l;++o)u=i[o+1],c=i[o-1],d=i[o],Math.round((u+c)/2)!==d&&s.push({time:d,pos:o/(l-1)});return s}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,s)=>i-s)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(ma(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return ma(this._table,r*this._tableRange+this._minPos,!0)}}q(Cp,"id","timeseries"),q(Cp,"defaults",ko.defaults);const Px="label";function Pp(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function A_(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function Ex(e,t){e.labels=t}function Rx(e,t,n=Px){const r=[];e.datasets=t.map(i=>{const s=e.datasets.find(o=>o[n]===i[n]);return!s||!i.data||r.includes(s)?{...i}:(r.push(s),Object.assign(s,i),s)})}function O_(e,t=Px){const n={labels:[],datasets:[]};return Ex(n,e.labels),Rx(n,e.datasets,t),n}function L_(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:s,type:o,data:l,options:c,plugins:d=[],fallbackContent:u,updateMode:f,...h}=e,m=w.useRef(null),p=w.useRef(null),v=()=>{m.current&&(p.current=new Qo(m.current,{type:o,data:O_(l,s),options:c&&{...c},plugins:d}),Pp(t,p.current))},y=()=>{Pp(t,null),p.current&&(p.current.destroy(),p.current=null)};return w.useEffect(()=>{!i&&p.current&&c&&A_(p.current,c)},[i,c]),w.useEffect(()=>{!i&&p.current&&Ex(p.current.config.data,l.labels)},[i,l.labels]),w.useEffect(()=>{!i&&p.current&&l.datasets&&Rx(p.current.config.data,l.datasets,s)},[i,l.datasets]),w.useEffect(()=>{p.current&&(i?(y(),setTimeout(v)):p.current.update(f))},[i,c,l.labels,l.datasets,f]),w.useEffect(()=>{p.current&&(y(),setTimeout(v))},[o]),w.useEffect(()=>(v(),()=>y()),[]),a.jsx("canvas",{ref:m,role:"img",height:n,width:r,...h,children:u})}const D_=w.forwardRef(L_);function Mx(e,t){return Qo.register(t),w.forwardRef((n,r)=>a.jsx(D_,{...n,ref:r,type:e}))}const F_=Mx("line",za),Ep=Mx("bar",Ta);Qo.register(nd,rd,La,Di,Da,x_,__,m_,Li);function I_(){const[e,t]=w.useState(null),[n,r]=w.useState(null),[i,s]=w.useState(!0),[o,l]=w.useState(null),[c,d]=w.useState(null),[u,f]=w.useState(null);w.useEffect(()=>{let m=!0;const p=new AbortController;return(async()=>{var v,y,x,g,b;try{const k=await V.get("/admin/metrics",{signal:p.signal});if(!m)return;t(k.data);const[j,S,N]=await Promise.all([V.get("/admin/metrics/charts/sales-trends",{signal:p.signal}),V.get("/admin/metrics/charts/revenue-growth",{signal:p.signal}),V.get("/admin/metrics/charts/user-activity",{signal:p.signal})]);if(!m)return;l(j.data),d(S.data),f(N.data),r(null)}catch(k){if(!m)return;const j=k;if(((v=j==null?void 0:j.response)==null?void 0:v.status)===401){try{window.location.href="/login"}catch{}return}const N=((x=(y=j==null?void 0:j.response)==null?void 0:y.data)==null?void 0:x.detail)||((b=(g=j==null?void 0:j.response)==null?void 0:g.data)==null?void 0:b.message);r(N||"Failed to load dashboard data")}finally{m&&s(!1)}})(),()=>{m=!1,p.abort()}},[]),w.useEffect(()=>{let m=!0;const v=setInterval(async()=>{try{const[y,x,g,b]=await Promise.all([V.get("/admin/metrics"),V.get("/admin/metrics/charts/sales-trends"),V.get("/admin/metrics/charts/revenue-growth"),V.get("/admin/metrics/charts/user-activity")]);if(!m)return;t(y.data),l(x.data),d(g.data),f(b.data)}catch{}},3e4);return()=>{m=!1,clearInterval(v)}},[]);const h=w.useMemo(()=>({users:(e==null?void 0:e.total_users)??0,products:(e==null?void 0:e.total_products)??0,orders:(e==null?void 0:e.total_orders)??0,sales:(e==null?void 0:e.total_sales)??0,revenue:(e==null?void 0:e.total_revenue)??0}),[e]);return i?a.jsx("div",{className:"dashboard-page",children:a.jsxs("div",{className:"loading-state",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:a.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),a.jsx("p",{children:"Loading dashboard..."})]})}):n?a.jsx("div",{className:"dashboard-page",children:a.jsxs("div",{className:"alert-error",role:"alert",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),n]})}):a.jsxs("div",{className:"dashboard-page",children:[a.jsx("div",{className:"page-header",children:a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"10px"},children:[a.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),a.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Dashboard Overview"]}),a.jsx("p",{className:"page-subtitle",children:"Monitor your e-commerce metrics at a glance"})]})}),a.jsxs("div",{className:"metrics-grid",role:"region","aria-label":"Key performance indicators",children:[a.jsxs("div",{className:"metric-card users",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Users"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:h.users.toLocaleString()}),a.jsx("div",{className:"metric-subtitle",children:"Registered accounts"})]})]}),a.jsxs("div",{className:"metric-card products",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),a.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Products"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:h.products.toLocaleString()}),a.jsx("div",{className:"metric-subtitle",children:"In catalog"})]})]}),a.jsxs("div",{className:"metric-card orders",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Orders"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:h.orders.toLocaleString()}),a.jsx("div",{className:"metric-subtitle",children:"All time orders"})]})]}),a.jsxs("div",{className:"metric-card revenue",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M12 1v22"}),a.jsx("path",{d:"M18 6h-6a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Revenue"}),a.jsxs("div",{className:"metric-value","aria-live":"polite",children:["LKR ",Number.isFinite(h.revenue)?h.revenue.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"]}),a.jsx("div",{className:"metric-subtitle",children:"Earnings from completed orders"})]})]})]}),a.jsx("div",{className:"card-modern welcome-card",children:a.jsxs("div",{className:"welcome-content",children:[a.jsxs("div",{className:"welcome-text",children:[a.jsx("h2",{children:"Welcome to Your Dashboard!"}),a.jsx("p",{children:"Your e-commerce platform is running smoothly. Monitor key metrics and manage your store efficiently."})]}),a.jsxs("div",{className:"welcome-stats",children:[a.jsxs("div",{className:"welcome-stat",children:[a.jsx("span",{className:"stat-number",children:(h.sales/h.orders||0).toFixed(2)}),a.jsx("span",{className:"stat-label",children:"Avg Order Value"})]}),a.jsxs("div",{className:"welcome-stat",children:[a.jsxs("span",{className:"stat-number",children:[h.orders>0?(h.products/h.orders*100).toFixed(1):"0","%"]}),a.jsx("span",{className:"stat-label",children:"Conversion Rate"})]})]})]})}),a.jsxs("div",{className:"charts-section",children:[a.jsx("h2",{className:"section-title",children:"Analytics & Trends"}),a.jsxs("div",{className:"charts-grid",children:[a.jsxs("div",{className:"chart-card",children:[a.jsxs("div",{className:"chart-header",children:[a.jsx("h3",{children:"Sales Trends (Last 30 Days)"}),a.jsxs("div",{className:"chart-legend",children:[a.jsxs("div",{className:"legend-item",children:[a.jsx("div",{className:"legend-color orders"}),a.jsx("span",{children:"Orders"})]}),a.jsxs("div",{className:"legend-item",children:[a.jsx("div",{className:"legend-color revenue"}),a.jsx("span",{children:"Revenue (LKR)"})]})]})]}),a.jsx("div",{className:"chart-container",children:o!=null&&o.data?a.jsx(F_,{data:{labels:o.data.map(m=>new Date(m.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})),datasets:[{label:"Orders",data:o.data.map(m=>m.orders||0),borderColor:"#667eea",backgroundColor:"rgba(102, 126, 234, 0.1)",yAxisID:"y",tension:.4,fill:!0},{label:"Revenue (LKR)",data:o.data.map(m=>m.revenue||0),borderColor:"#34a853",backgroundColor:"rgba(52, 168, 83, 0.1)",yAxisID:"y1",tension:.4,fill:!0}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(m){return m.datasetIndex===0?`Orders: ${m.parsed.y||0}`:`Revenue: LKR ${(m.parsed.y||0).toLocaleString()}`}}}},scales:{x:{grid:{display:!1}},y:{type:"linear",display:!0,position:"left",title:{display:!0,text:"Orders"},grid:{color:"rgba(0, 0, 0, 0.1)"}},y1:{type:"linear",display:!0,position:"right",title:{display:!0,text:"Revenue (LKR)"},grid:{drawOnChartArea:!1}}}}}):a.jsx("div",{className:"chart-loading",children:"Loading sales trends..."})})]}),a.jsxs("div",{className:"chart-card",children:[a.jsx("div",{className:"chart-header",children:a.jsx("h3",{children:"Revenue Growth (Last 12 Months)"})}),a.jsx("div",{className:"chart-container",children:c!=null&&c.data?a.jsx(Ep,{data:{labels:c.data.map(m=>{const[p,v]=(m.month||"").split("-");return new Date(parseInt(p),parseInt(v)-1).toLocaleDateString("en-US",{month:"short",year:"numeric"})}),datasets:[{label:"Revenue (LKR)",data:c.data.map(m=>m.revenue||0),backgroundColor:"rgba(52, 168, 83, 0.8)",borderColor:"#34a853",borderWidth:1,borderRadius:4,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(m){return`Revenue: LKR ${(m.parsed.y||0).toLocaleString()}`}}}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.1)"},ticks:{callback:function(m){return"LKR "+m.toLocaleString()}}}}}}):a.jsx("div",{className:"chart-loading",children:"Loading revenue growth..."})})]}),a.jsxs("div",{className:"chart-card",children:[a.jsx("div",{className:"chart-header",children:a.jsx("h3",{children:"User Registrations (Last 30 Days)"})}),a.jsx("div",{className:"chart-container",children:u!=null&&u.data?a.jsx(Ep,{data:{labels:u.data.map(m=>new Date(m.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})),datasets:[{label:"Registrations",data:u.data.map(m=>m.registrations||0),backgroundColor:"rgba(102, 126, 234, 0.8)",borderColor:"#667eea",borderWidth:1,borderRadius:4,borderSkipped:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(m){return`Registrations: ${m.parsed.y}`}}}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.1)"}}}}}):a.jsx("div",{className:"chart-loading",children:"Loading user activity..."})})]})]})]}),a.jsx("style",{children:`
        /* Page Layout */
        .dashboard-page {
          max-width: 100%;
        }
        
        .page-header {
          margin-bottom: 32px;
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }
        
        .page-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        /* Loading & Error States */
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .loading-state p {
          margin: 0;
          font-size: 14px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          color: #ef4444;
          margin-bottom: 24px;
        }
        
        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        
        .metric-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: all 0.3s;
          border: 2px solid transparent;
        }
        
        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        
        .metric-icon {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        
        .metric-card.users .metric-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .metric-card.users:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-card.products .metric-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
        
        .metric-card.products:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-card.orders .metric-icon {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }
        
        .metric-card.orders:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-card.sales .metric-icon {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          color: white;
        }
        
        .metric-card.sales:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-card.revenue .metric-icon {
          background: linear-gradient(135deg, #34a853 0%, #0f9d58 100%);
          color: white;
        }

        .metric-card.revenue:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .metric-label {
          font-size: 13px;
          color: #718096;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .metric-value {
          font-size: 32px;
          font-weight: 700;
          color: #1a202c;
          line-height: 1.2;
        }
        
        .metric-subtitle {
          font-size: 12px;
          color: #a0aec0;
        }
        
        /* Welcome Card */
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .welcome-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 32px;
        }
        
        .welcome-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
        }
        
        .welcome-text h2 {
          font-size: 24px;
          font-weight: 700;
          color: white;
          margin: 0 0 12px 0;
        }
        
        .welcome-text p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          line-height: 1.6;
        }
        
        .welcome-stats {
          display: flex;
          gap: 32px;
        }
        
        .welcome-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 20px 32px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: white;
        }
        
        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          font-weight: 500;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .welcome-content {
            grid-template-columns: 1fr;
          }
          
          .welcome-stats {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .metric-card {
            gap: 16px;
          }
          
          .metric-icon {
            width: 56px;
            height: 56px;
          }
          
          .metric-icon svg {
            width: 28px;
            height: 28px;
          }
          
          .metric-value {
            font-size: 28px;
          }
          
          .welcome-stats {
            flex-direction: column;
            gap: 16px;
          }
          
          .welcome-stat {
            width: 100%;
          }
        }
      `}),a.jsx("style",{children:`
        /* Charts Section */
        .charts-section {
          margin-top: 40px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 24px 0;
        }

        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
        }

        .chart-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .chart-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
        }

        .chart-legend {
          display: flex;
          gap: 16px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #718096;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .legend-color.orders {
          background-color: #667eea;
        }

        .legend-color.revenue {
          background-color: #34a853;
        }

        .chart-container {
          height: 300px;
          position: relative;
        }

        .chart-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #a0aec0;
          font-size: 14px;
        }

        /* Responsive Charts */
        @media (max-width: 1200px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .chart-card {
            padding: 16px;
          }

          .chart-container {
            height: 250px;
          }

          .chart-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .chart-legend {
            align-self: flex-end;
          }
        }
      `})]})}var id=function(e,t){return id=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},id(e,t)};function B_(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");id(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ae=function(){return Ae=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ae.apply(this,arguments)};var Rp=!1,er,sd,ad,Fa,Ia,Tx,Ba,od,ld,cd,zx,dd,ud,Ax,Ox;function tt(){if(!Rp){Rp=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),n=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(dd=/\b(iPhone|iP[ao]d)/.exec(e),ud=/\b(iP[ao]d)/.exec(e),cd=/Android/i.exec(e),Ax=/FBAN\/\w+;/i.exec(e),Ox=/Mobile/i.exec(e),zx=!!/Win64/.exec(e),t){er=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,er&&document&&document.documentMode&&(er=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(e);Tx=r?parseFloat(r[1])+4:er,sd=t[2]?parseFloat(t[2]):NaN,ad=t[3]?parseFloat(t[3]):NaN,Fa=t[4]?parseFloat(t[4]):NaN,Fa?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),Ia=t&&t[1]?parseFloat(t[1]):NaN):Ia=NaN}else er=sd=ad=Ia=Fa=NaN;if(n){if(n[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);Ba=i?parseFloat(i[1].replace("_",".")):!0}else Ba=!1;od=!!n[2],ld=!!n[3]}else Ba=od=ld=!1}}var hd={ie:function(){return tt()||er},ieCompatibilityMode:function(){return tt()||Tx>er},ie64:function(){return hd.ie()&&zx},firefox:function(){return tt()||sd},opera:function(){return tt()||ad},webkit:function(){return tt()||Fa},safari:function(){return hd.webkit()},chrome:function(){return tt()||Ia},windows:function(){return tt()||od},osx:function(){return tt()||Ba},linux:function(){return tt()||ld},iphone:function(){return tt()||dd},mobile:function(){return tt()||dd||ud||cd||Ox},nativeApp:function(){return tt()||Ax},android:function(){return tt()||cd},ipad:function(){return tt()||ud}},H_=hd,W_=!!(typeof window<"u"&&window.document&&window.document.createElement),U_={canUseDOM:W_},$_=U_,Lx=$_,Dx;Lx.canUseDOM&&(Dx=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function q_(e,t){if(!Lx.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r=typeof i[n]=="function"}return!r&&Dx&&e==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var V_=q_,Y_=H_,K_=V_,Mp=10,Tp=40,zp=800;function Fx(e){var t=0,n=0,r=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=t*Mp,i=n*Mp,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||i)&&e.deltaMode&&(e.deltaMode==1?(r*=Tp,i*=Tp):(r*=zp,i*=zp)),r&&!t&&(t=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:i}}Fx.getEventType=function(){return Y_.firefox()?"DOMMouseScroll":K_("wheel")?"wheel":"mousewheel"};var X_=Fx,Q_=X_;const G_=Wp(Q_);function Z_(e,t,n,r,i,s){s===void 0&&(s=0);var o=si(e,t,s),l=o.width,c=o.height,d=Math.min(l,n),u=Math.min(c,r);return d>u*i?{width:u*i,height:u}:{width:d,height:d/i}}function J_(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}function Ei(e,t,n,r,i){i===void 0&&(i=0);var s=si(t.width,t.height,i),o=s.width,l=s.height;return{x:Ap(e.x,o,n.width,r),y:Ap(e.y,l,n.height,r)}}function Ap(e,t,n,r){var i=t*r/2-n/2;return Zo(e,-i,i)}function Op(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function Lp(e,t){return Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI}function e4(e,t,n,r,i,s,o){s===void 0&&(s=0),o===void 0&&(o=!0);var l=o?t4:n4,c=si(t.width,t.height,s),d=si(t.naturalWidth,t.naturalHeight,s),u={x:l(100,((c.width-n.width/i)/2-e.x/i)/c.width*100),y:l(100,((c.height-n.height/i)/2-e.y/i)/c.height*100),width:l(100,n.width/c.width*100/i),height:l(100,n.height/c.height*100/i)},f=Math.round(l(d.width,u.width*d.width/100)),h=Math.round(l(d.height,u.height*d.height/100)),m=d.width>=d.height*r,p=m?{width:Math.round(h*r),height:h}:{width:f,height:Math.round(f/r)},v=Ae(Ae({},p),{x:Math.round(l(d.width-p.width,u.x*d.width/100)),y:Math.round(l(d.height-p.height,u.y*d.height/100))});return{croppedAreaPercentages:u,croppedAreaPixels:v}}function t4(e,t){return Math.min(e,Math.max(0,t))}function n4(e,t){return t}function r4(e,t,n,r,i,s){var o=si(t.width,t.height,n),l=Zo(r.width/o.width*(100/e.width),i,s),c={x:l*o.width/2-r.width/2-o.width*l*(e.x/100),y:l*o.height/2-r.height/2-o.height*l*(e.y/100)};return{crop:c,zoom:l}}function i4(e,t,n){var r=J_(t);return n.height>n.width?n.height/(e.height*r):n.width/(e.width*r)}function s4(e,t,n,r,i,s){n===void 0&&(n=0);var o=si(t.naturalWidth,t.naturalHeight,n),l=Zo(i4(e,t,r),i,s),c=r.height>r.width?r.height/e.height:r.width/e.width,d={x:((o.width-e.width)/2-e.x)*c,y:((o.height-e.height)/2-e.y)*c};return{crop:d,zoom:l}}function Dp(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function a4(e){return e*Math.PI/180}function si(e,t,n){var r=a4(n);return{width:Math.abs(Math.cos(r)*e)+Math.abs(Math.sin(r)*t),height:Math.abs(Math.sin(r)*e)+Math.abs(Math.cos(r)*t)}}function Zo(e,t,n){return Math.min(Math.max(e,t),n)}function ga(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(n){return typeof n=="string"&&n.length>0}).join(" ").trim()}var o4=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,l4=1,c4=3,d4=1,u4=function(e){B_(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.cropperRef=w.createRef(),n.imageRef=w.createRef(),n.videoRef=w.createRef(),n.containerPosition={x:0,y:0},n.containerRef=null,n.styleRef=null,n.containerRect=null,n.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},n.dragStartPosition={x:0,y:0},n.dragStartCrop={x:0,y:0},n.gestureZoomStart=0,n.gestureRotationStart=0,n.isTouching=!1,n.lastPinchDistance=0,n.lastPinchRotation=0,n.rafDragTimeout=null,n.rafPinchTimeout=null,n.wheelTimer=null,n.currentDoc=typeof document<"u"?document:null,n.currentWindow=typeof window<"u"?window:null,n.resizeObserver=null,n.previousCropSize=null,n.isInitialized=!1,n.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},n.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!n.containerRef)){var r=!0;n.resizeObserver=new window.ResizeObserver(function(i){if(r){r=!1;return}n.computeSizes()}),n.resizeObserver.observe(n.containerRef)}},n.preventZoomSafari=function(r){return r.preventDefault()},n.cleanEvents=function(){n.currentDoc&&(n.currentDoc.removeEventListener("mousemove",n.onMouseMove),n.currentDoc.removeEventListener("mouseup",n.onDragStopped),n.currentDoc.removeEventListener("touchmove",n.onTouchMove),n.currentDoc.removeEventListener("touchend",n.onDragStopped),n.currentDoc.removeEventListener("gesturechange",n.onGestureChange),n.currentDoc.removeEventListener("gestureend",n.onGestureEnd),n.currentDoc.removeEventListener("scroll",n.onScroll))},n.clearScrollEvent=function(){n.containerRef&&n.containerRef.removeEventListener("wheel",n.onWheel),n.wheelTimer&&clearTimeout(n.wheelTimer)},n.onMediaLoad=function(){var r=n.computeSizes();r&&(n.previousCropSize=r,n.emitCropData(),n.setInitialCrop(r),n.isInitialized=!0),n.props.onMediaLoaded&&n.props.onMediaLoaded(n.mediaSize)},n.setInitialCrop=function(r){if(n.props.initialCroppedAreaPercentages){var i=r4(n.props.initialCroppedAreaPercentages,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=i.crop,o=i.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}else if(n.props.initialCroppedAreaPixels){var l=s4(n.props.initialCroppedAreaPixels,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=l.crop,o=l.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}},n.computeSizes=function(){var r,i,s,o,l,c,d=n.imageRef.current||n.videoRef.current;if(d&&n.containerRef){n.containerRect=n.containerRef.getBoundingClientRect(),n.saveContainerPosition();var u=n.containerRect.width/n.containerRect.height,f=((r=n.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((i=n.videoRef.current)===null||i===void 0?void 0:i.videoWidth)||0,h=((s=n.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((o=n.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,m=d.offsetWidth<f||d.offsetHeight<h,p=f/h,v=void 0;if(m)switch(n.state.mediaObjectFit){default:case"contain":v=u>p?{width:n.containerRect.height*p,height:n.containerRect.height}:{width:n.containerRect.width,height:n.containerRect.width/p};break;case"horizontal-cover":v={width:n.containerRect.width,height:n.containerRect.width/p};break;case"vertical-cover":v={width:n.containerRect.height*p,height:n.containerRect.height};break}else v={width:d.offsetWidth,height:d.offsetHeight};n.mediaSize=Ae(Ae({},v),{naturalWidth:f,naturalHeight:h}),n.props.setMediaSize&&n.props.setMediaSize(n.mediaSize);var y=n.props.cropSize?n.props.cropSize:Z_(n.mediaSize.width,n.mediaSize.height,n.containerRect.width,n.containerRect.height,n.props.aspect,n.props.rotation);return(((l=n.state.cropSize)===null||l===void 0?void 0:l.height)!==y.height||((c=n.state.cropSize)===null||c===void 0?void 0:c.width)!==y.width)&&n.props.onCropSizeChange&&n.props.onCropSizeChange(y),n.setState({cropSize:y},n.recomputeCropPosition),n.props.setCropSize&&n.props.setCropSize(y),y}},n.saveContainerPosition=function(){if(n.containerRef){var r=n.containerRef.getBoundingClientRect();n.containerPosition={x:r.left,y:r.top}}},n.onMouseDown=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("mousemove",n.onMouseMove),n.currentDoc.addEventListener("mouseup",n.onDragStopped),n.saveContainerPosition(),n.onDragStart(t.getMousePoint(r)))},n.onMouseMove=function(r){return n.onDrag(t.getMousePoint(r))},n.onScroll=function(r){n.currentDoc&&(r.preventDefault(),n.saveContainerPosition())},n.onTouchStart=function(r){n.currentDoc&&(n.isTouching=!0,!(n.props.onTouchRequest&&!n.props.onTouchRequest(r))&&(n.currentDoc.addEventListener("touchmove",n.onTouchMove,{passive:!1}),n.currentDoc.addEventListener("touchend",n.onDragStopped),n.saveContainerPosition(),r.touches.length===2?n.onPinchStart(r):r.touches.length===1&&n.onDragStart(t.getTouchPoint(r.touches[0]))))},n.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?n.onPinchMove(r):r.touches.length===1&&n.onDrag(t.getTouchPoint(r.touches[0]))},n.onGestureStart=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("gesturechange",n.onGestureChange),n.currentDoc.addEventListener("gestureend",n.onGestureEnd),n.gestureZoomStart=n.props.zoom,n.gestureRotationStart=n.props.rotation)},n.onGestureChange=function(r){if(r.preventDefault(),!n.isTouching){var i=t.getMousePoint(r),s=n.gestureZoomStart-1+r.scale;if(n.setNewZoom(s,i,{shouldUpdatePosition:!0}),n.props.onRotationChange){var o=n.gestureRotationStart+r.rotation;n.props.onRotationChange(o)}}},n.onGestureEnd=function(r){n.cleanEvents()},n.onDragStart=function(r){var i,s,o=r.x,l=r.y;n.dragStartPosition={x:o,y:l},n.dragStartCrop=Ae({},n.props.crop),(s=(i=n.props).onInteractionStart)===null||s===void 0||s.call(i)},n.onDrag=function(r){var i=r.x,s=r.y;n.currentWindow&&(n.rafDragTimeout&&n.currentWindow.cancelAnimationFrame(n.rafDragTimeout),n.rafDragTimeout=n.currentWindow.requestAnimationFrame(function(){if(n.state.cropSize&&!(i===void 0||s===void 0)){var o=i-n.dragStartPosition.x,l=s-n.dragStartPosition.y,c={x:n.dragStartCrop.x+o,y:n.dragStartCrop.y+l},d=n.props.restrictPosition?Ei(c,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):c;n.props.onCropChange(d)}}))},n.onDragStopped=function(){var r,i;n.isTouching=!1,n.cleanEvents(),n.emitCropData(),(i=(r=n.props).onInteractionEnd)===null||i===void 0||i.call(r)},n.onWheel=function(r){if(n.currentWindow&&!(n.props.onWheelRequest&&!n.props.onWheelRequest(r))){r.preventDefault();var i=t.getMousePoint(r),s=G_(r).pixelY,o=n.props.zoom-s*n.props.zoomSpeed/200;n.setNewZoom(o,i,{shouldUpdatePosition:!0}),n.state.hasWheelJustStarted||n.setState({hasWheelJustStarted:!0},function(){var l,c;return(c=(l=n.props).onInteractionStart)===null||c===void 0?void 0:c.call(l)}),n.wheelTimer&&clearTimeout(n.wheelTimer),n.wheelTimer=n.currentWindow.setTimeout(function(){return n.setState({hasWheelJustStarted:!1},function(){var l,c;return(c=(l=n.props).onInteractionEnd)===null||c===void 0?void 0:c.call(l)})},250)}},n.getPointOnContainer=function(r,i){var s=r.x,o=r.y;if(!n.containerRect)throw new Error("The Cropper is not mounted");return{x:n.containerRect.width/2-(s-i.x),y:n.containerRect.height/2-(o-i.y)}},n.getPointOnMedia=function(r){var i=r.x,s=r.y,o=n.props,l=o.crop,c=o.zoom;return{x:(i+l.x)/c,y:(s+l.y)/c}},n.setNewZoom=function(r,i,s){var o=s===void 0?{}:s,l=o.shouldUpdatePosition,c=l===void 0?!0:l;if(!(!n.state.cropSize||!n.props.onZoomChange)){var d=Zo(r,n.props.minZoom,n.props.maxZoom);if(c){var u=n.getPointOnContainer(i,n.containerPosition),f=n.getPointOnMedia(u),h={x:f.x*d-u.x,y:f.y*d-u.y},m=n.props.restrictPosition?Ei(h,n.mediaSize,n.state.cropSize,d,n.props.rotation):h;n.props.onCropChange(m)}n.props.onZoomChange(d)}},n.getCropData=function(){if(!n.state.cropSize)return null;var r=n.props.restrictPosition?Ei(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;return e4(r,n.mediaSize,n.state.cropSize,n.getAspect(),n.props.zoom,n.props.rotation,n.props.restrictPosition)},n.emitCropData=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropComplete&&n.props.onCropComplete(i,s),n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.emitCropAreaChange=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.recomputeCropPosition=function(){if(n.state.cropSize){var r=n.props.crop;if(n.isInitialized&&n.previousCropSize){var i=Math.abs(n.previousCropSize.width-n.state.cropSize.width)>1e-6||Math.abs(n.previousCropSize.height-n.state.cropSize.height)>1e-6;if(i){var s=n.state.cropSize.width/n.previousCropSize.width,o=n.state.cropSize.height/n.previousCropSize.height;r={x:n.props.crop.x*s,y:n.props.crop.y*o}}}var l=n.props.restrictPosition?Ei(r,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):r;n.previousCropSize=n.state.cropSize,n.props.onCropChange(l),n.emitCropData()}},n.onKeyDown=function(r){var i,s,o=n.props,l=o.crop,c=o.onCropChange,d=o.keyboardStep,u=o.zoom,f=o.rotation,h=d;if(n.state.cropSize){r.shiftKey&&(h*=.2);var m=Ae({},l);switch(r.key){case"ArrowUp":m.y-=h,r.preventDefault();break;case"ArrowDown":m.y+=h,r.preventDefault();break;case"ArrowLeft":m.x-=h,r.preventDefault();break;case"ArrowRight":m.x+=h,r.preventDefault();break;default:return}n.props.restrictPosition&&(m=Ei(m,n.mediaSize,n.state.cropSize,u,f)),r.repeat||(s=(i=n.props).onInteractionStart)===null||s===void 0||s.call(i),c(m)}},n.onKeyUp=function(r){var i,s;switch(r.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":r.preventDefault();break;default:return}n.emitCropData(),(s=(i=n.props).onInteractionEnd)===null||s===void 0||s.call(i)},n}return t.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=o4,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},t.prototype.componentWillUnmount=function(){var n,r;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(n=this.resizeObserver)===null||n===void 0||n.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((r=this.styleRef.parentNode)===null||r===void 0||r.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},t.prototype.componentDidUpdate=function(n){var r,i,s,o,l,c,d,u,f;n.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):n.aspect!==this.props.aspect?this.computeSizes():n.objectFit!==this.props.objectFit?this.computeSizes():n.zoom!==this.props.zoom?this.recomputeCropPosition():((r=n.cropSize)===null||r===void 0?void 0:r.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((s=n.cropSize)===null||s===void 0?void 0:s.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((l=n.crop)===null||l===void 0?void 0:l.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((d=n.crop)===null||d===void 0?void 0:d.y)!==((u=this.props.crop)===null||u===void 0?void 0:u.y))&&this.emitCropAreaChange(),n.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),n.video!==this.props.video&&((f=this.videoRef.current)===null||f===void 0||f.load());var h=this.getObjectFit();h!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:h},this.computeSizes)},t.prototype.getAspect=function(){var n=this.props,r=n.cropSize,i=n.aspect;return r?r.width/r.height:i},t.prototype.getObjectFit=function(){var n,r,i,s;if(this.props.objectFit==="cover"){var o=this.imageRef.current||this.videoRef.current;if(o&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var l=this.containerRect.width/this.containerRect.height,c=((n=this.imageRef.current)===null||n===void 0?void 0:n.naturalWidth)||((r=this.videoRef.current)===null||r===void 0?void 0:r.videoWidth)||0,d=((i=this.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoHeight)||0,u=c/d;return u<l?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},t.prototype.onPinchStart=function(n){var r=t.getTouchPoint(n.touches[0]),i=t.getTouchPoint(n.touches[1]);this.lastPinchDistance=Op(r,i),this.lastPinchRotation=Lp(r,i),this.onDragStart(Dp(r,i))},t.prototype.onPinchMove=function(n){var r=this;if(!(!this.currentDoc||!this.currentWindow)){var i=t.getTouchPoint(n.touches[0]),s=t.getTouchPoint(n.touches[1]),o=Dp(i,s);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var l=Op(i,s),c=r.props.zoom*(l/r.lastPinchDistance);r.setNewZoom(c,o,{shouldUpdatePosition:!1}),r.lastPinchDistance=l;var d=Lp(i,s),u=r.props.rotation+(d-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(u),r.lastPinchRotation=d})}},t.prototype.render=function(){var n=this,r,i=this.props,s=i.image,o=i.video,l=i.mediaProps,c=i.cropperProps,d=i.transform,u=i.crop,f=u.x,h=u.y,m=i.rotation,p=i.zoom,v=i.cropShape,y=i.showGrid,x=i.roundCropAreaPixels,g=i.style,b=g.containerStyle,k=g.cropAreaStyle,j=g.mediaStyle,S=i.classes,N=S.containerClassName,_=S.cropAreaClassName,z=S.mediaClassName,T=(r=this.state.mediaObjectFit)!==null&&r!==void 0?r:this.getObjectFit();return w.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(D){return n.containerRef=D},"data-testid":"container",style:b,className:ga("reactEasyCrop_Container",N)},s?w.createElement("img",Ae({alt:"",className:ga("reactEasyCrop_Image",T==="contain"&&"reactEasyCrop_Contain",T==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",T==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",z)},l,{src:s,ref:this.imageRef,style:Ae(Ae({},j),{transform:d||"translate(".concat(f,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(p,")")}),onLoad:this.onMediaLoad})):o&&w.createElement("video",Ae({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:ga("reactEasyCrop_Video",T==="contain"&&"reactEasyCrop_Contain",T==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",T==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",z)},l,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:Ae(Ae({},j),{transform:d||"translate(".concat(f,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(p,")")}),controls:!1}),(Array.isArray(o)?o:[{src:o}]).map(function(I){return w.createElement("source",Ae({key:I.src},I))})),this.state.cropSize&&w.createElement("div",Ae({ref:this.cropperRef,style:Ae(Ae({},k),{width:x?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:x?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:ga("reactEasyCrop_CropArea",v==="round"&&"reactEasyCrop_CropAreaRound",y&&"reactEasyCrop_CropAreaGrid",_)},c)))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:c4,minZoom:l4,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:d4},t.getMousePoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},t.getTouchPoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},t}(w.Component);function h4(){var Eu;const[e,t]=w.useState([]),[n,r]=w.useState({name:"",slug:"",price:0,stock:0,images:[],description:""}),[i,s]=w.useState([]),[o,l]=w.useState([]),[c,d]=w.useState(null),[u,f]=w.useState(!1),[h,m]=w.useState(!1),[p,v]=w.useState(null),[y,x]=w.useState(!1),[g,b]=w.useState(!1),[k,j]=w.useState(0),[S,N]=w.useState(!1),[_,z]=w.useState(0),[T,I]=w.useState({x:0,y:0}),[D,B]=w.useState(1),[Y,M]=w.useState(null),A=w.useMemo(()=>{var le;const R=n.name.trim(),F=n.slug.trim(),G=((le=n.description)==null?void 0:le.trim())||"",ee=Number.isFinite(n.price)&&n.price>=0,fe=Number.isInteger(n.stock)&&n.stock>=0;return{nameOk:R.length>1,slugOk:F.length>1,descriptionOk:G.length>=10,priceOk:ee,stockOk:fe}},[n]),$=A.nameOk&&A.slugOk&&A.descriptionOk&&A.priceOk&&A.stockOk;function P(R){const F=parseFloat(R);return Number.isFinite(F)&&F>=0?F:0}function C(R){const F=parseInt(R,10);return Number.isFinite(F)&&F>=0?F:0}async function L(){var R,F,G,ee,fe,le;f(!0),d(null);try{const re=await V.get("/admin/products");t(Array.isArray((R=re.data)==null?void 0:R.items)?re.data.items:[])}catch(re){const W=re;if(((F=W==null?void 0:W.response)==null?void 0:F.status)===401){try{window.location.href="/login"}catch{}return}d(((ee=(G=W==null?void 0:W.response)==null?void 0:G.data)==null?void 0:ee.detail)||((le=(fe=W==null?void 0:W.response)==null?void 0:fe.data)==null?void 0:le.message)||"Failed to load")}finally{f(!1)}}w.useEffect(()=>{L()},[]);async function K(R){var G,ee,fe,le,re;if(R.length===0)return[];console.log(`Uploading ${R.length} files...`);const F=[];for(const W of R)try{console.log("Uploading file:",W.name,W.type,W.size,"bytes");const ie=new FormData;ie.append("file",W,W.name);const de=await V.post("/admin/products/upload",ie);console.log("Upload successful, URL:",de.data.url),F.push(de.data.url)}catch(ie){const de=ie;if(console.error("Upload error for file:",W.name,de),((G=de==null?void 0:de.response)==null?void 0:G.status)===401){console.error("Upload failed: 401 Unauthorized");try{window.location.href="/login"}catch{}return[]}const Os=((fe=(ee=de==null?void 0:de.response)==null?void 0:ee.data)==null?void 0:fe.detail)||((re=(le=de==null?void 0:de.response)==null?void 0:le.data)==null?void 0:re.message)||"Upload failed";throw console.error("Upload failed with message:",Os),new Error(`Failed to upload ${W.name}: ${Os}`)}return F}function X(R){const F=Array.from(R.target.files||[]);if(F.length>5){d("Maximum 5 images allowed per product");return}s(F);const G=F.map(ee=>URL.createObjectURL(ee));l(G),F.length>0&&(b(!0),j(0))}function ve(R){s(F=>F.filter((G,ee)=>ee!==R)),l(F=>(URL.revokeObjectURL(F[R]),F.filter((G,ee)=>ee!==R))),i.length<=1?b(!1):k>=i.length-1&&j(Math.max(0,i.length-2))}function ce(){j(R=>(R+1)%o.length)}function Ce(){j(R=>(R-1+o.length)%o.length)}function Se(R){z(R),I({x:0,y:0}),B(1),M(null),N(!0)}const wr=w.useCallback((R,F)=>{M(F)},[]);async function Bx(R,F){const G=new Image;G.src=R,await new Promise(le=>{G.onload=le});const ee=document.createElement("canvas"),fe=ee.getContext("2d");if(!fe)throw new Error("Failed to get canvas context");return ee.width=F.width,ee.height=F.height,fe.drawImage(G,F.x,F.y,F.width,F.height,0,0,F.width,F.height),new Promise((le,re)=>{ee.toBlob(W=>{W?le(W):re(new Error("Canvas is empty"))},"image/jpeg",.95)})}async function Hx(){if(Y)try{const R=o[_],F=await Bx(R,Y),ee=i[_].name.replace(/\.[^/.]+$/,"_cropped.jpg"),fe=new File([F],ee,{type:"image/jpeg"});s(le=>{const re=[...le];return re[_]=fe,re}),l(le=>{const re=[...le];return URL.revokeObjectURL(re[_]),re[_]=URL.createObjectURL(fe),re}),N(!1)}catch(R){console.error("Error cropping image:",R),d("Failed to crop image")}}async function Wx(){var R,F,G,ee,fe,le;if(d(null),!$){d("Please fill all fields correctly");return}if(i.length===0&&(!n.images||n.images.length===0)){d("Please add at least 1 image (maximum 5 images)");return}m(!0);try{console.log("Creating product, uploading images first..."),console.log("Selected files:",i.length,"files");const re=await K(i);console.log("✅ Image upload complete! URLs:",re);const ie=[...n.images||[],...re].slice(0,5);if(console.log("📸 Final images array:",ie),ie.length===0){d("At least 1 image is required"),m(!1);return}const de={name:n.name.trim(),slug:n.slug.trim(),description:(R=n.description)==null?void 0:R.trim(),price:n.price,stock:n.stock,images:ie,is_published:!0};console.log("📦 Creating product with payload:",JSON.stringify(de,null,2));const pn={id:`tmp-${Date.now()}`,...de,name:de.name||"",slug:de.slug||"",description:de.description||"",price:de.price||0,stock:de.stock||0,images:de.images||[]};t(Ls=>[pn,...Ls]);const Os=await V.post("/admin/products",de);console.log("✅ Product created successfully! Response:",Os.data),r({name:"",slug:"",price:0,stock:0,images:[],description:""}),s([]),l(Ls=>(Ls.forEach(Yx=>URL.revokeObjectURL(Yx)),[])),b(!1),await L();try{localStorage.setItem("products:update",String(Date.now()))}catch{}}catch(re){const W=re;if(((F=W==null?void 0:W.response)==null?void 0:F.status)===401){try{window.location.href="/login"}catch{}return}const pn=((ee=(G=W==null?void 0:W.response)==null?void 0:G.data)==null?void 0:ee.detail)||((le=(fe=W==null?void 0:W.response)==null?void 0:fe.data)==null?void 0:le.message)||(W==null?void 0:W.message)||"Failed to create product";console.error("create product error",W),d(pn)}finally{m(!1)}}async function Jo(R,F){var G,ee,fe,le,re;d(null);try{t(W=>W.map(ie=>ie.id===R?{...ie,...F}:ie)),await V.put(`/admin/products/${R}`,F)}catch(W){const ie=W;if(((G=ie==null?void 0:ie.response)==null?void 0:G.status)===401){try{window.location.href="/login"}catch{}return}d(((fe=(ee=ie==null?void 0:ie.response)==null?void 0:ee.data)==null?void 0:fe.detail)||((re=(le=ie==null?void 0:ie.response)==null?void 0:le.data)==null?void 0:re.message)||"Failed to update"),await L()}}async function Ux(R){var F,G,ee,fe,le;d(null);try{const re=e;t(W=>W.filter(ie=>ie.id!==R)),await V.delete(`/admin/products/${R}`)}catch(re){const W=re;if(((F=W==null?void 0:W.response)==null?void 0:F.status)===401){try{window.location.href="/login"}catch{}return}d(((ee=(G=W==null?void 0:W.response)==null?void 0:G.data)==null?void 0:ee.detail)||((le=(fe=W==null?void 0:W.response)==null?void 0:fe.data)==null?void 0:le.message)||"Failed to delete"),await L()}}function $x(R){v({...R}),x(!0),d(null)}function As(){v(null),x(!1),s([]),l(R=>(R.forEach(F=>URL.revokeObjectURL(F)),[])),d(null)}function qx(R){var F;p&&v({...p,images:((F=p.images)==null?void 0:F.filter((G,ee)=>ee!==R))||[]})}async function Vx(){var R,F,G,ee,fe,le;if(!(!p||!p.id)){d(null),m(!0);try{const re=await K(i),W=[...p.images||[],...re];if(W.length===0){d("At least 1 image is required"),m(!1);return}if(W.length>5){d("Maximum 5 images allowed"),m(!1);return}const ie={name:p.name.trim(),slug:p.slug.trim(),description:(R=p.description)==null?void 0:R.trim(),price:p.price,stock:p.stock,images:W};await V.put(`/admin/products/${p.id}`,ie),t(de=>de.map(pn=>pn.id===p.id?{...pn,...ie}:pn)),As(),await L()}catch(re){const W=re;if(((F=W==null?void 0:W.response)==null?void 0:F.status)===401){try{window.location.href="/login"}catch{}return}d(((ee=(G=W==null?void 0:W.response)==null?void 0:G.data)==null?void 0:ee.detail)||((le=(fe=W==null?void 0:W.response)==null?void 0:fe.data)==null?void 0:le.message)||"Failed to update product")}finally{m(!1)}}}return a.jsxs("div",{className:"products-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:12},children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}),"Product Management"]}),a.jsx("p",{className:"page-subtitle",children:"Manage your product inventory"})]}),a.jsxs("div",{className:"page-header-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.length}),a.jsx("div",{className:"stat-label",children:"Total Products"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(R=>R.is_published).length}),a.jsx("div",{className:"stat-label",children:"Published"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(R=>!R.is_published).length}),a.jsx("div",{className:"stat-label",children:"Draft"})]})]})]}),c&&a.jsxs("div",{className:"alert-error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),c]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add New Product"]}),a.jsx("p",{className:"card-subtitle",children:"Fill in the details below to add a new product"})]}),a.jsxs("div",{className:"card-body",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),a.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Product Name *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., Premium Headphones",value:n.name,onChange:R=>r({...n,name:R.target.value})}),!A.nameOk&&a.jsx("span",{className:"form-error",children:"Name must be at least 2 characters"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"})}),"URL Slug *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., premium-headphones",value:n.slug,onChange:R=>r({...n,slug:R.target.value})}),!A.slugOk&&a.jsx("span",{className:"form-error",children:"Slug must be at least 2 characters"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"})]}),"Price (LKR) *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., 5000.00",type:"number",inputMode:"decimal",value:Number.isFinite(n.price)?n.price:0,onChange:R=>r({...n,price:P(R.target.value)}),min:0,step:"0.01"}),!A.priceOk&&a.jsx("span",{className:"form-error",children:"Price must be ≥ 0"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),"Stock Quantity *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., 100",type:"number",inputMode:"numeric",value:Number.isFinite(n.stock)?n.stock:0,onChange:R=>r({...n,stock:C(R.target.value)}),min:0,step:1}),!A.stockOk&&a.jsx("span",{className:"form-error",children:"Stock must be an integer ≥ 0"})]})]}),a.jsxs("div",{className:"form-group-full",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 7.707A1 1 0 014 7V4zm2 0v3.586l6.293 6.293 3.586-3.586L9.586 4H6z"})}),"Product Description *"]}),a.jsx("textarea",{className:"form-input",placeholder:"Describe your product in detail (minimum 10 characters)...",value:n.description||"",onChange:R=>r({...n,description:R.target.value}),rows:4,style:{resize:"vertical",minHeight:"80px"}}),!A.descriptionOk&&a.jsx("span",{className:"form-error",children:"Description must be at least 10 characters"})]}),a.jsxs("div",{className:"form-group-full",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),"Product Images ",a.jsxs("span",{className:"badge-info",children:[i.length,"/5 selected"]})]}),a.jsxs("div",{className:"upload-zone",children:[a.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:X,id:"file-upload",className:"file-input"}),a.jsxs("label",{htmlFor:"file-upload",className:"upload-button",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images (1-5)"]}),i.length>0&&a.jsxs("button",{type:"button",onClick:()=>b(!0),className:"preview-button",children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}),"Preview & Edit (",i.length,")"]})]}),i.length>0&&a.jsx("div",{className:"image-preview-grid",children:o.map((R,F)=>a.jsxs("div",{className:"image-preview-item",children:[a.jsx("img",{src:R,alt:`Preview ${F+1}`}),a.jsx("button",{onClick:()=>Se(F),className:"btn-crop",type:"button",title:"Crop image",children:"✂️"}),a.jsx("button",{onClick:()=>ve(F),className:"btn-remove",type:"button",children:"×"})]},F))}),i.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.3",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),a.jsx("p",{children:"No images selected. Please select 1-5 images."})]})]}),a.jsx("button",{onClick:Wx,disabled:!$||h||i.length===0,type:"button",className:"btn-primary",children:h?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Adding Product..."]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add Product"]})})]})]}),a.jsx("div",{style:{margin:"8px 0",color:"#8aa"},children:u?"Loading products…":`Total: ${e.length}`}),a.jsxs("div",{className:"card-modern",style:{marginTop:24},children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Products"]}),a.jsxs("span",{className:"badge-count",children:[e.length," total"]})]}),u?a.jsxs("div",{className:"loading-state",children:[a.jsxs("svg",{className:"spinner",width:"48",height:"48",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),a.jsx("p",{children:"Loading products..."})]}):e.length===0?a.jsxs("div",{className:"empty-state-large",children:[a.jsx("svg",{width:"64",height:"64",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.2",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),a.jsx("h3",{children:"No Products Yet"}),a.jsx("p",{children:"Start by adding your first product above"})]}):a.jsxs("div",{className:"products-table",children:[a.jsxs("div",{className:"table-header",children:[a.jsx("div",{className:"th-product",children:"Product"}),a.jsx("div",{className:"th-slug",children:"Slug"}),a.jsx("div",{className:"th-price",children:"Price (LKR)"}),a.jsx("div",{className:"th-stock",children:"Stock"}),a.jsx("div",{className:"th-status",children:"Status"}),a.jsx("div",{className:"th-actions",children:"Actions"})]}),e.map(R=>a.jsxs("div",{className:"table-row",children:[a.jsx("div",{className:"td-product",children:a.jsxs("div",{className:"product-cell",children:[R.images&&R.images.length>0?a.jsxs("div",{className:"product-images",title:R.description||"",children:[R.images.slice(0,3).map((F,G)=>a.jsx("img",{src:F,alt:`${R.name} ${G+1}`,className:"product-thumbnail"},G)),R.images.length>3&&a.jsxs("span",{className:"image-count",children:["+",R.images.length-3]})]}):a.jsx("div",{className:"no-image",title:R.description||"",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.3",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})})}),a.jsx("span",{className:"product-name",children:R.name})]})}),a.jsx("td",{className:"td-slug",children:a.jsx("code",{children:R.slug})}),a.jsx("td",{className:"td-price",children:a.jsx("input",{type:"number",className:"inline-input",defaultValue:R.price,onBlur:F=>{const G=P(F.target.value);R.id&&G!==R.price&&Jo(R.id,{price:G})},min:0,step:"0.01"})}),a.jsx("td",{className:"td-stock",children:a.jsx("input",{type:"number",className:"inline-input",defaultValue:R.stock,onBlur:F=>{const G=C(F.target.value);R.id&&G!==R.stock&&Jo(R.id,{stock:G})},min:0,step:1})}),a.jsx("td",{className:"td-status",children:a.jsx("span",{className:`status-badge ${R.is_published?"published":"draft"}`,children:R.is_published?"Published":"Draft"})}),a.jsx("td",{className:"td-actions",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{onClick:()=>$x(R),type:"button",className:"btn-action btn-edit",title:"Edit product",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),a.jsx("button",{onClick:()=>R.id&&Jo(R.id,{is_published:!R.is_published}),type:"button",className:`btn-action btn-toggle ${R.is_published?"unpublish":"publish"}`,title:R.is_published?"Mark as Draft (unpublish)":"Publish product",children:R.is_published?a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("path",{d:"M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z"}),a.jsx("path",{d:"M12 9a3 3 0 100 6 3 3 0 000-6z"})]}):a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("path",{d:"M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z",opacity:"0.4"}),a.jsx("path",{d:"M12 9a3 3 0 100 6 3 3 0 000-6z"})]})}),a.jsx("button",{onClick:()=>R.id&&Ux(R.id),type:"button",className:"btn-action btn-delete",title:"Delete product",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},R.id||`${R.slug}-${R.name}`))]})]}),y&&p&&a.jsx("div",{className:"modal-overlay",onClick:As,children:a.jsxs("div",{className:"modal-content-modern",onClick:R=>R.stopPropagation(),children:[a.jsxs("div",{className:"modal-header-modern",children:[a.jsxs("h2",{children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit Product"]}),a.jsx("button",{onClick:As,className:"btn-close",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),c&&a.jsxs("div",{className:"alert-error",style:{margin:"16px 0"},children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),c]}),a.jsx("div",{className:"modal-body-modern",children:a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Product Name"}),a.jsx("input",{type:"text",className:"form-input",value:p.name,onChange:R=>v({...p,name:R.target.value}),style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Slug"}),a.jsx("input",{type:"text",value:p.slug,onChange:R=>v({...p,slug:R.target.value}),style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Price"}),a.jsx("input",{type:"number",value:p.price,onChange:R=>v({...p,price:P(R.target.value)}),min:0,step:"0.01",style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Stock"}),a.jsx("input",{type:"number",value:p.stock,onChange:R=>v({...p,stock:C(R.target.value)}),min:0,step:1,style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Description"}),a.jsx("textarea",{value:p.description||"",onChange:R=>v({...p,description:R.target.value}),rows:4,style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef",resize:"vertical",minHeight:"80px"}})]}),a.jsxs("div",{children:[a.jsxs("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:["Current Images (",((Eu=p.images)==null?void 0:Eu.length)||0,"/5)"]}),a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:p.images&&p.images.length>0?p.images.map((R,F)=>a.jsxs("div",{style:{position:"relative",width:100,height:100},children:[a.jsx("img",{src:R,alt:`Product ${F+1}`,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:8,border:"2px solid #6D74FF"}}),a.jsx("button",{onClick:()=>qx(F),style:{position:"absolute",top:-8,right:-8,width:24,height:24,borderRadius:"50%",background:"#ff5d5d",color:"white",border:"none",cursor:"pointer",fontSize:14,lineHeight:"24px",padding:0},type:"button",children:"×"})]},F)):a.jsx("p",{style:{color:"#b8bbd9"},children:"No images yet"})}),a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Add New Images (Total must be 1-5)"}),a.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:X,style:{marginBottom:8}}),o.length>0&&a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:8},children:o.map((R,F)=>a.jsxs("div",{style:{position:"relative",width:80,height:80},children:[a.jsx("img",{src:R,alt:`New ${F+1}`,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:8,border:"2px solid #4ade80"}}),a.jsx("button",{onClick:()=>ve(F),style:{position:"absolute",top:-8,right:-8,width:24,height:24,borderRadius:"50%",background:"#ff5d5d",color:"white",border:"none",cursor:"pointer",fontSize:14,lineHeight:"24px",padding:0},type:"button",children:"×"})]},F))})]}),a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end",marginTop:12},children:[a.jsx("button",{onClick:As,type:"button",style:{padding:"10px 20px",background:"#2a2b36",color:"#e9e9ef"},children:"Cancel"}),a.jsx("button",{onClick:Vx,disabled:h,type:"button",style:{padding:"10px 20px",background:"#6D74FF",color:"white"},children:h?"Saving...":"Save Changes"})]})]})})]})}),g&&i.length>0&&a.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:a.jsxs("div",{className:"preview-modal-content",onClick:R=>R.stopPropagation(),style:{background:"#14151d",borderRadius:12,padding:24,maxWidth:"90vw",maxHeight:"90vh",display:"flex",flexDirection:"column",gap:16,border:"1px solid #2a2b36"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("h2",{style:{margin:0},children:["Image Preview (",k+1,"/",i.length,")"]}),a.jsx("button",{onClick:()=>b(!1),style:{background:"transparent",border:"none",color:"#e9e9ef",fontSize:24,cursor:"pointer",padding:0,width:32,height:32},children:"×"})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0f",borderRadius:8,padding:16,width:"100%",height:500,position:"relative",overflow:"hidden"},children:o[k]&&a.jsx("img",{src:o[k],alt:`Preview ${k+1}`,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:4}})}),a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:[a.jsx("button",{onClick:Ce,disabled:i.length<=1,style:{padding:"8px 16px",background:i.length>1?"#2a2b36":"#1a1b26",color:i.length>1?"#e9e9ef":"#666",border:"none",borderRadius:4,cursor:i.length>1?"pointer":"not-allowed"},children:"← Previous"}),a.jsx("button",{onClick:()=>Se(k),style:{padding:"8px 16px",background:"#6D74FF",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"✂️ Crop Image"}),a.jsx("button",{onClick:()=>ve(k),style:{padding:"8px 16px",background:"#5b1a1a",color:"#ffd1d1",border:"none",borderRadius:4,cursor:"pointer"},children:"🗑️ Remove"}),a.jsx("button",{onClick:ce,disabled:i.length<=1,style:{padding:"8px 16px",background:i.length>1?"#2a2b36":"#1a1b26",color:i.length>1?"#e9e9ef":"#666",border:"none",borderRadius:4,cursor:i.length>1?"pointer":"not-allowed"},children:"Next →"})]}),i.length>1&&a.jsx("div",{style:{display:"flex",gap:8,overflowX:"auto",padding:"8px 0",borderTop:"1px solid #2a2b36",paddingTop:16},children:o.map((R,F)=>a.jsxs("div",{style:{position:"relative",flexShrink:0},children:[a.jsx("img",{src:R,alt:`Thumbnail ${F+1}`,onClick:()=>j(F),style:{width:80,height:80,objectFit:"cover",borderRadius:4,cursor:"pointer",border:F===k?"3px solid #6D74FF":"3px solid transparent",opacity:F===k?1:.6,transition:"all 0.2s",display:"block"}}),a.jsx("button",{onClick:G=>{G.stopPropagation(),Se(F)},style:{position:"absolute",bottom:4,right:4,background:"rgba(109, 116, 255, 0.9)",color:"white",border:"none",borderRadius:3,padding:"2px 6px",fontSize:11,cursor:"pointer",fontWeight:"bold"},title:"Crop this image",children:"✂️"})]},F))}),a.jsx("div",{style:{textAlign:"center",color:"#999",fontSize:14},children:"Navigate with arrow buttons or click thumbnails • Remove unwanted images • Close when done"})]})}),S&&o[_]&&a.jsx("div",{className:"modal-overlay",onClick:()=>N(!1),children:a.jsxs("div",{className:"cropper-modal-content",onClick:R=>R.stopPropagation(),style:{background:"#14151d",borderRadius:12,padding:24,maxWidth:"800px",width:"90%",display:"flex",flexDirection:"column",gap:16,border:"1px solid #2a2b36"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("h2",{style:{margin:0},children:["✂️ Crop Image (",_+1,"/",i.length,")"]}),a.jsx("button",{onClick:()=>N(!1),style:{background:"transparent",border:"none",color:"#e9e9ef",fontSize:24,cursor:"pointer",padding:0,width:32,height:32},children:"×"})]}),a.jsx("div",{style:{position:"relative",width:"100%",height:400,background:"#0a0a0f",borderRadius:8,overflow:"hidden"},children:a.jsx(u4,{image:o[_],crop:T,zoom:D,aspect:1,onCropChange:I,onZoomChange:B,onCropComplete:wr})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("label",{style:{color:"#e9e9ef",minWidth:60},children:"Zoom:"}),a.jsx("input",{type:"range",min:1,max:3,step:.1,value:D,onChange:R=>B(Number(R.target.value)),style:{flex:1}}),a.jsxs("span",{style:{color:"#999",minWidth:40},children:[D.toFixed(1),"x"]})]}),a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[a.jsx("button",{onClick:()=>N(!1),style:{padding:"10px 20px",background:"#2a2b36",color:"#e9e9ef",border:"none",borderRadius:4,cursor:"pointer"},children:"Cancel"}),a.jsx("button",{onClick:Hx,style:{padding:"10px 20px",background:"#6D74FF",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"✓ Apply Crop"})]}),a.jsx("div",{style:{textAlign:"center",color:"#999",fontSize:14},children:"Drag to position • Scroll or use slider to zoom • Square crop (1:1 ratio)"})]})}),a.jsx("style",{children:`
        /* Page Layout */
        .products-page {
          max-width: 100%;
        }
        
        .page-header {
          margin-bottom: 32px;
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }
        
        .page-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }
        
        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        
        /* Modern Card */
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .card-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 4px 0 0 0;
        }
        
        .card-body {
          padding: 24px;
        }
        
        .badge-info {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          margin-left: 8px;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        /* Forms */
        .form-grid {
          display: grid;
          /* two-column layout for predictable alignment */
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
          align-items: start;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* full-width rows (span both columns) */
        .form-group-full {
          width: 100%;
          grid-column: 1 / -1;
        }
        
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #2d3748;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .form-label svg {
          opacity: 0.6;
        }
        
        .form-input {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          color: #2d3748;
          transition: all 0.2s;
          background: white;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-error {
          font-size: 13px;
          color: #ef4444;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        /* Upload Zone */
        .upload-zone {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 12px;
        }
        
        .file-input {
          display: none;
        }
        
        .upload-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .upload-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .preview-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .preview-button:hover {
          background: #667eea;
          color: white;
        }
        
        /* Image Preview Grid */
        .image-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 12px;
          margin-top: 16px;
        }
        
        .image-preview-item {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #e2e8f0;
          transition: all 0.2s;
        }
        
        .image-preview-item:hover {
          border-color: #667eea;
          transform: scale(1.05);
        }
        
        .image-preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .btn-crop {
          position: absolute;
          bottom: 6px;
          left: 6px;
          background: rgba(102, 126, 234, 0.95);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .btn-crop:hover {
          background: rgba(102, 126, 234, 1);
          transform: scale(1.05);
        }
        
        .btn-remove {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ef4444;
          color: white;
          border: 2px solid white;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);
        }
        
        .btn-remove:hover {
          background: #dc2626;
          transform: scale(1.1);
        }
        
        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .empty-state p {
          margin: 0;
          font-size: 14px;
        }
        
        .empty-state-large {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
        }
        
        .empty-state-large h3 {
          color: #4a5568;
          margin: 16px 0 8px 0;
          font-size: 20px;
        }
        
        .empty-state-large p {
          margin: 0;
          color: #a0aec0;
          font-size: 14px;
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .loading-state p {
          margin: 0;
          font-size: 14px;
        }
        
        /* Buttons */
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          margin-top: 20px;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Products Table */
        .products-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          background: #f7fafc;
          font-weight: 600;
          font-size: 13px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row:hover {
          background: #f7fafc;
        }
        
        .td-product, .td-slug, .td-price, .td-stock, .td-status, .td-actions {
          display: flex;
          align-items: center;
        }
        
        .product-cell {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
        
        .product-images {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        
        .product-thumbnail {
          width: 48px;
          height: 48px;
          object-fit: cover;
          border-radius: 8px;
          border: 2px solid #e2e8f0;
          transition: all 0.2s;
        }
        
        .product-thumbnail:hover {
          border-color: #667eea;
          transform: scale(1.1);
        }
        
        .image-count {
          font-size: 12px;
          color: #a0aec0;
          font-weight: 600;
        }
        
        .no-image {
          width: 48px;
          height: 48px;
          background: #f7fafc;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #e2e8f0;
        }
        
        .product-name {
          font-weight: 600;
          color: #2d3748;
          font-size: 14px;
        }
        
        .td-slug code {
          background: #f7fafc;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 13px;
          color: #4a5568;
          font-family: 'Consolas', monospace;
        }
        
        .inline-input {
          padding: 8px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          width: 100px;
          transition: all 0.2s;
        }
        
        .inline-input:focus {
          outline: none;
          border-color: #667eea;
        }
        
        .status-badge {
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .status-badge.published {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.draft {
          background: rgba(251, 191, 36, 0.1);
          color: #d97706;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-edit {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }
        
        .btn-edit:hover {
          background: #667eea;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover {
          background: #ef4444;
          color: white;
          transform: scale(1.05);
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          color: #ef4444;
          margin-bottom: 24px;
        }
        
        /* Modals */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.2s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content-modern {
          background: white;
          border-radius: 16px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s;
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-header-modern {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-header-modern h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .btn-close {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: #4a5568;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-close:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .modal-body-modern {
          padding: 24px;
          max-height: calc(90vh - 200px);
          overflow-y: auto;
        }
        
        .modal-content {
          background: #14151d;
          border: 1px solid #2a2b36;
          border-radius: 12px;
          padding: 24px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        .modal-content::-webkit-scrollbar,
        .modal-body-modern::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-content::-webkit-scrollbar-track,
        .modal-body-modern::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .modal-content::-webkit-scrollbar-thumb,
        .modal-body-modern::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 4px;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .table-header, .table-row {
            grid-template-columns: 2fr 1fr 1fr 1fr 100px;
          }
          .td-slug, .th-slug {
            display: none;
          }
        }
        
        @media (max-width: 900px) {
          .table-header, .table-row {
            grid-template-columns: 2fr 1fr 80px;
          }
          .td-price, .th-price, .td-stock, .th-stock, .td-status, .th-status {
            display: none;
          }
          .page-header-stats {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function f4(){const[e,t]=w.useState([]),[n,r]=w.useState(null),[i,s]=w.useState(!1),[o,l]=w.useState(!1),c=w.useMemo(()=>e.map(h=>({...h,is_active:h.is_active??!0,is_staff:h.is_staff??!1,is_superuser:h.is_superuser??!1})).sort((h,m)=>(m.is_superuser?1:0)-(h.is_superuser?1:0)),[e]);async function d(){var h,m,p,v,y,x;s(!0),r(null);try{const g=await V.get("/admin/users"),b=Array.isArray((h=g.data)==null?void 0:h.items)?g.data.items:[];t(b)}catch(g){const b=g;if(((m=b==null?void 0:b.response)==null?void 0:m.status)===401){try{window.location.href="/login"}catch{}return}r(((v=(p=b==null?void 0:b.response)==null?void 0:p.data)==null?void 0:v.detail)||((x=(y=b==null?void 0:b.response)==null?void 0:y.data)==null?void 0:x.message)||"Failed to load")}finally{s(!1)}}w.useEffect(()=>{d()},[]);async function u(h,m){var p,v,y,x,g;l(!0);try{await V.put(`/admin/users/${h}/block`,null,{params:{block:m}}),await d()}catch(b){const k=b;if(((p=k==null?void 0:k.response)==null?void 0:p.status)===401){try{window.location.href="/login"}catch{}return}r(((y=(v=k==null?void 0:k.response)==null?void 0:v.data)==null?void 0:y.detail)||((g=(x=k==null?void 0:k.response)==null?void 0:x.data)==null?void 0:g.message)||"Failed to update user")}finally{l(!1)}}async function f(h){var m,p,v,y,x;l(!0);try{await V.delete(`/admin/users/${h}`),await d()}catch(g){const b=g;if(((m=b==null?void 0:b.response)==null?void 0:m.status)===401){try{window.location.href="/login"}catch{}return}r(((v=(p=b==null?void 0:b.response)==null?void 0:p.data)==null?void 0:v.detail)||((x=(y=b==null?void 0:b.response)==null?void 0:y.data)==null?void 0:x.message)||"Failed to delete user")}finally{l(!1)}}return a.jsxs("div",{className:"users-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:12},children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),"User Management"]}),a.jsx("p",{className:"page-subtitle",children:"Manage user accounts and permissions"})]}),a.jsxs("div",{className:"page-header-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:c.length}),a.jsx("div",{className:"stat-label",children:"Total Users"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:c.filter(h=>h.is_active).length}),a.jsx("div",{className:"stat-label",children:"Active"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:c.filter(h=>h.is_superuser).length}),a.jsx("div",{className:"stat-label",children:"Admins"})]})]})]}),n&&a.jsxs("div",{className:"alert-error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),n]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Users"]}),a.jsxs("span",{className:"badge-count",children:[c.length," total"]})]}),i?a.jsxs("div",{className:"loading-state",children:[a.jsxs("svg",{className:"spinner",width:"48",height:"48",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),a.jsx("p",{children:"Loading users..."})]}):c.length===0?a.jsxs("div",{className:"empty-state-large",children:[a.jsx("svg",{width:"64",height:"64",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.2",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),a.jsx("h3",{children:"No Users Yet"}),a.jsx("p",{children:"No registered users in the system"})]}):a.jsxs("div",{className:"users-table",children:[a.jsxs("div",{className:"table-header-users",children:[a.jsx("div",{className:"th-email",children:"Email"}),a.jsx("div",{className:"th-status",children:"Active"}),a.jsx("div",{className:"th-role",children:"Staff"}),a.jsx("div",{className:"th-role",children:"Superuser"}),a.jsx("div",{className:"th-actions-users",children:"Actions"})]}),c.map(h=>a.jsxs("div",{className:`table-row-users ${h.is_superuser?"admin-row":""}`,children:[a.jsx("div",{className:"td-email",children:a.jsxs("div",{className:"user-cell",children:[a.jsx("div",{className:"user-avatar",children:h.avatar_url?a.jsx("img",{src:h.avatar_url,alt:""}):h.email.charAt(0).toUpperCase()}),a.jsxs("div",{className:"user-info",children:[a.jsx("div",{className:"user-email",children:h.email}),a.jsxs("div",{className:"user-id",children:["ID: ",h.id]})]})]})}),a.jsx("div",{className:"td-status",children:a.jsx("span",{className:`status-pill ${h.is_active?"active":"inactive"}`,children:h.is_active?a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Active"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),"Blocked"]})})}),a.jsx("div",{className:"td-role",children:a.jsx("span",{className:`role-badge ${h.is_staff?"yes":"no"}`,children:h.is_staff?"Yes":"No"})}),a.jsx("div",{className:"td-role",children:a.jsx("span",{className:`role-badge ${h.is_superuser?"yes":"no"}`,children:h.is_superuser?"Yes":"No"})}),a.jsx("div",{className:"td-actions-users",children:h.is_superuser?a.jsxs("div",{className:"admin-indicator",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{color:"#d97706"},children:a.jsx("path",{d:"M5 4a1 1 0 00-.894.553L2.382 8H1a1 1 0 000 2h1.618l1.447 2.894A1 1 0 006 13h8a1 1 0 00.894-.553L16.618 10H18a1 1 0 100-2h-1.382l-1.724-3.447A1 1 0 0014 4H5z"})}),a.jsx("span",{style:{fontSize:"12px",color:"#d97706",fontWeight:"600",marginLeft:"6px"},children:"System Admin"})]}):a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{onClick:()=>u(h.id,h.is_active),disabled:o,type:"button",className:`btn-action ${h.is_active?"btn-block":"btn-unblock"}`,title:h.is_active?"Block user":"Unblock user",children:h.is_active?a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}):a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),a.jsx("button",{onClick:()=>f(h.id),disabled:o,type:"button",className:"btn-action btn-delete",title:"Delete user",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},h.id))]})]}),a.jsx("style",{children:`
        /* Page Layout */
        .users-page {
          max-width: 100%;
        }
        
        .page-header {
          margin-bottom: 32px;
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }
        
        .page-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }
        
        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .loading-state p {
          margin: 0;
          font-size: 14px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes adminPulse {
          0% { transform: scale(1); border-left-color: #667eea; }
          50% { transform: scale(1.01); border-left-color: #764ba2; }
          100% { transform: scale(1); border-left-color: #667eea; }
        }
        
        @keyframes adminImpress {
          0% { 
            border-left-color: #667eea; 
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3), inset 0 0 20px rgba(102, 126, 234, 0.1); 
          }
          25% { 
            border-left-color: #764ba2; 
            box-shadow: 0 0 30px rgba(118, 75, 162, 0.5), inset 0 0 30px rgba(118, 75, 162, 0.2); 
          }
          50% { 
            border-left-color: #f093fb; 
            box-shadow: 0 0 40px rgba(240, 147, 251, 0.6), inset 0 0 40px rgba(240, 147, 251, 0.3); 
          }
          75% { 
            border-left-color: #764ba2; 
            box-shadow: 0 0 30px rgba(118, 75, 162, 0.5), inset 0 0 30px rgba(118, 75, 162, 0.2); 
          }
          100% { 
            border-left-color: #667eea; 
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3), inset 0 0 20px rgba(102, 126, 234, 0.1); 
          }
        }
        
        @keyframes adminShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .empty-state-large {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
        }
        
        .empty-state-large h3 {
          color: #4a5568;
          margin: 16px 0 8px 0;
          font-size: 20px;
        }
        
        .empty-state-large p {
          margin: 0;
          color: #a0aec0;
          font-size: 14px;
        }
        
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          color: #ef4444;
          margin-bottom: 24px;
        }
        
        /* Users Table */
        .users-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header-users {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 140px;
          gap: 16px;
          padding: 16px 24px;
          background: #f7fafc;
          font-weight: 600;
          font-size: 13px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table-row-users {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 140px;
          gap: 16px;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row-users:hover {
          background: #f7fafc;
        }
        
        .admin-row {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border-left: 8px solid #667eea;
          position: relative;
          animation: adminImpress 2s ease-in-out infinite;
        }
        
        .admin-row::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.1), transparent);
          animation: adminShimmer 3s linear infinite;
          pointer-events: none;
        }
        
        .admin-row:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
        }
        
        .td-email, .td-status, .td-role, .td-actions-users {
          display: flex;
          align-items: center;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          overflow: hidden;
        }
        .user-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
        
        .user-info {
          display: flex;
          flex-direction: column;
        }
        
        .user-email {
          font-weight: 600;
          color: #2d3748;
          font-size: 14px;
        }
        
        .user-id {
          font-size: 12px;
          color: #a0aec0;
        }
        
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
        }
        
        .status-pill.active {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-pill.inactive {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .role-badge {
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .role-badge.yes {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .role-badge.no {
          background: rgba(156, 163, 175, 0.1);
          color: #6b7280;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .admin-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #d97706;
          font-weight: 600;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-action:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-block {
          background: rgba(251, 191, 36, 0.1);
          color: #d97706;
        }
        
        .btn-block:hover:not(:disabled) {
          background: #d97706;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-unblock {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .btn-unblock:hover:not(:disabled) {
          background: #059669;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover:not(:disabled) {
          background: #ef4444;
          color: white;
          transform: scale(1.05);
        }
        
        @media (max-width: 900px) {
          .table-header-users, .table-row-users {
            grid-template-columns: 2fr 1fr 120px;
          }
          .td-role, .th-role {
            display: none;
          }
        }
      `})]})}function p4({children:e}){const{user:t,loading:n}=Ft(),r=Nt();return n?a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[a.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),a.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):t?t.is_staff||t.is_superuser?e:a.jsx(Fc,{to:"/",replace:!0}):a.jsx(Fc,{to:"/login",state:{from:r.pathname},replace:!0})}function xn({children:e}){const{user:t,accessToken:n,loading:r}=Ft(),i=Nt();return r?a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[a.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),a.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):!t||!n?a.jsx(Fc,{to:"/login",state:{from:i},replace:!0}):a.jsx(a.Fragment,{children:e})}function m4(){var d;const{pathname:e}=Nt(),{user:t,logout:n}=Ft(),r=Lt(),[i,s]=w.useState(new Date),o=()=>{n(),r("/login")};w.useEffect(()=>{const u=setInterval(()=>{s(new Date)},1e3);return()=>clearInterval(u)},[]);const l=u=>u.toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"}),c=u=>u.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return a.jsxs("div",{className:"admin-container",children:[a.jsxs("header",{className:"admin-header",children:[a.jsxs("div",{className:"admin-header-left",children:[a.jsx(U,{to:"/",className:"admin-brand-link","aria-label":"Home",children:a.jsx("div",{className:"logo-container",children:a.jsxs("div",{className:"logo-wrapper",children:[a.jsx("img",{src:"/images/title1.png",alt:"Own Setup logo"}),a.jsx("div",{className:"logo-glow","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})}),a.jsx("span",{className:"admin-brand animated-text",children:"Own Setup"})]}),a.jsxs("div",{className:"admin-header-right",children:[a.jsxs("div",{className:"admin-clock",children:[a.jsx("div",{className:"clock-time",children:l(i)}),a.jsx("div",{className:"clock-date",children:c(i)})]}),a.jsx("button",{className:"admin-btn-icon",title:"Notifications",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})})}),a.jsxs("div",{className:"admin-user-menu",children:[a.jsxs("div",{className:"admin-user-info",children:[a.jsx("div",{className:"admin-avatar",children:(d=t==null?void 0:t.email)==null?void 0:d.charAt(0).toUpperCase()}),a.jsxs("div",{className:"admin-user-details",children:[a.jsx("div",{className:"admin-user-name",children:(t==null?void 0:t.full_name)||(t==null?void 0:t.email)}),a.jsx("div",{className:"admin-user-role",children:t!=null&&t.is_superuser?"Super Admin":"Admin"})]})]}),a.jsxs("button",{className:"admin-btn-logout",onClick:o,children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H3zm7.5 10.5L7 8l3.5-3.5.707.707L8.914 7.5H14v1H8.914l2.293 2.293-.707.707z"})}),"Logout"]})]})]})]}),a.jsxs("div",{className:"admin-layout",children:[a.jsx("aside",{className:"admin-sidebar",children:a.jsxs("nav",{className:"admin-nav",children:[a.jsxs(U,{to:"/admin",className:`admin-nav-item ${e==="/admin"?"active":""}`,children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})}),a.jsx("span",{children:"Dashboard"})]}),a.jsxs(U,{to:"/admin/products",className:`admin-nav-item ${e.startsWith("/admin/products")?"active":""}`,children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}),a.jsx("span",{children:"Products"})]}),a.jsxs(U,{to:"/admin/users",className:`admin-nav-item ${e.startsWith("/admin/users")?"active":""}`,children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),a.jsx("span",{children:"Users"})]}),a.jsxs(U,{to:"/admin/orders",className:`admin-nav-item ${e.startsWith("/admin/orders")?"active":""}`,children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),a.jsx("path",{fillRule:"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"})]}),a.jsx("span",{children:"Orders"})]}),a.jsx("div",{className:"admin-nav-divider"}),a.jsxs(U,{to:"/",className:"admin-nav-item",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"})}),a.jsx("span",{children:"Back to Site"})]})]})}),a.jsx("main",{className:"admin-main",children:a.jsx(f0,{})})]}),a.jsx("style",{children:`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .admin-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-attachment: fixed;
        }
        
        .admin-header {
          height: 64px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        .admin-header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .admin-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .admin-brand {
          font-size: 18px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .admin-header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .admin-btn-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .admin-btn-icon:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-1px);
        }
        
        .admin-user-menu {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .admin-user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px 12px;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.08);
        }
        
        .admin-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        
        .admin-user-details {
          display: flex;
          flex-direction: column;
        }
        
        .admin-user-name {
          font-size: 14px;
          font-weight: 600;
          color: #1a202c;
        }
        
        .admin-user-role {
          font-size: 12px;
          color: #718096;
        }
        
        .admin-btn-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 10px;
          border: 1px solid rgba(239, 68, 68, 0.2);
          background: white;
          color: #ef4444;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .admin-btn-logout:hover {
          background: #fef2f2;
          border-color: #ef4444;
        }
        
        .admin-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          padding: 24px;
          min-height: calc(100vh - 64px);
        }
        
        .admin-sidebar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 16px;
          height: fit-content;
          position: sticky;
          top: 88px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #4a5568;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
        }
        
        .admin-nav-item:hover {
          background: rgba(102, 126, 234, 0.08);
          color: #667eea;
        }
        
        .admin-nav-item.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .admin-nav-item svg {
          flex-shrink: 0;
        }
        
        .admin-nav-divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          margin: 8px 0;
        }
        
        .admin-main {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 24px;
          min-height: 600px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        @media (max-width: 900px) {
          .admin-layout {
            grid-template-columns: 1fr;
          }
          
          .admin-sidebar {
            position: static;
          }
          
          .admin-user-details {
            display: none;
          }
        }

        /* ========================================
           LOGO ANIMATIONS FOR ADMIN HEADER
           ======================================== */

        .admin-brand-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          margin-right: 12px;
        }

        /* Container to clip all effects within bounds */
        .logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 42px;
          overflow: hidden;
        }

        /* ========================================
           CONTINUOUS AUTO-ANIMATING LOGO EFFECTS
           ======================================== */

        .logo-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: logoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Entrance animation */
        @keyframes logoEntrance {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
          60% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        /* Logo image - continuous floating + subtle rotation */
        .logo-wrapper img {
          display: block;
          height: 30px;
          width: auto;
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 0 6px rgba(109, 116, 255, 0.4));
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite;
        }

        /* Continuous floating motion - reduced range */
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-3px) scale(1.05);
          }
          50% {
            transform: translateY(0px) scale(1);
          }
          75% {
            transform: translateY(-2px) scale(1.02);
          }
        }

        /* Subtle continuous rotation */
        @keyframes logoRotate {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(0deg);
          }
          75% {
            transform: rotate(-3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        /* Animated pulsing glow behind logo - contained size */
        .logo-glow {
          position: absolute;
          width: 45px;
          height: 45px;
          background: radial-gradient(circle at center, rgba(109, 116, 255, 0.6), transparent 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(9px);
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        /* Rotating rings around logo - smaller sizes */
        .logo-ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          z-index: 2;
        }

        .ring-1 {
          width: 38px;
          height: 38px;
          border-top-color: rgba(109, 116, 255, 0.6);
          border-right-color: rgba(109, 116, 255, 0.3);
          animation: ringRotate 4s linear infinite;
        }

        .ring-2 {
          width: 42px;
          height: 42px;
          border-bottom-color: rgba(109, 116, 255, 0.5);
          border-left-color: rgba(109, 116, 255, 0.2);
          animation: ringRotate 6s linear infinite reverse;
        }

        .ring-3 {
          width: 46px;
          height: 46px;
          border-top-color: rgba(109, 116, 255, 0.4);
          border-bottom-color: rgba(109, 116, 255, 0.1);
          animation: ringRotate 8s linear infinite;
        }

        @keyframes ringRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Enhanced hover effect on top of continuous animation */
        .admin-brand-link:hover .logo-wrapper img {
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite, logoHoverBounce 0.6s ease;
        }

        @keyframes logoHoverBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        .admin-brand-link:hover .logo-glow {
          filter: blur(12px);
          animation: glowPulse 1.5s ease-in-out infinite;
        }

        .admin-brand-link:hover .ring-1 {
          border-top-color: rgba(109, 116, 255, 1);
          border-right-color: rgba(109, 116, 255, 0.6);
        }

        .admin-brand-link:hover .ring-2 {
          border-bottom-color: rgba(109, 116, 255, 0.9);
          border-left-color: rgba(109, 116, 255, 0.5);
        }

        .admin-brand-link:hover .ring-3 {
          border-top-color: rgba(109, 116, 255, 0.8);
          border-bottom-color: rgba(109, 116, 255, 0.4);
        }

        /* ========================================
           END LOGO ANIMATIONS
           ======================================== */

        /* ========================================
           DIGITAL CLOCK STYLES
           ======================================== */

        .admin-clock {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(103, 126, 234, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(103, 126, 234, 0.3);
          border-radius: 12px;
          padding: 8px 16px;
          margin-right: 16px;
          min-width: 140px;
          box-shadow: 0 4px 15px rgba(103, 126, 234, 0.2);
          animation: clockGlow 2s ease-in-out infinite alternate;
        }

        .clock-time {
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          animation: timePulse 1s ease-in-out infinite;
          letter-spacing: 1px;
        }

        .clock-date {
          font-size: 10px;
          color: rgba(0, 0, 0, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 2px;
          font-weight: 500;
          animation: dateFade 3s ease-in-out infinite;
        }

        /* Clock glow animation */
        @keyframes clockGlow {
          0% {
            box-shadow: 0 4px 15px rgba(103, 126, 234, 0.2), 0 0 20px rgba(103, 126, 234, 0.1);
          }
          100% {
            box-shadow: 0 4px 15px rgba(103, 126, 234, 0.2), 0 0 30px rgba(103, 126, 234, 0.2);
          }
        }

        /* Time pulse animation */
        @keyframes timePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        /* Date fade animation */
        @keyframes dateFade {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        /* Hover effects for clock */
        .admin-clock:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }

        .admin-clock:hover .clock-time {
          animation: timePulse 0.5s ease-in-out infinite, timeGlow 0.5s ease-in-out;
        }

        @keyframes timeGlow {
          0% {
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          }
          100% {
            text-shadow: 0 0 20px rgba(103, 126, 234, 1), 0 0 30px rgba(103, 126, 234, 0.5);
          }
        }

        /* ========================================
           END DIGITAL CLOCK STYLES
           ======================================== */

        /* ========================================
           ANIMATED TEXT STYLES
           ======================================== */

        .animated-text {
          font-size: 24px;
          font-weight: 800;
          color: #000000 !important;
          background: none !important;
          -webkit-background-clip: initial !important;
          -webkit-text-fill-color: initial !important;
          background-clip: initial !important;
          position: relative;
          display: inline-block;
          margin-left: 8px;
        }

        /* Text glow animation */
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(103, 126, 234, 0.5), 0 0 30px rgba(103, 126, 234, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(103, 126, 234, 0.8), 0 0 40px rgba(103, 126, 234, 0.5), 0 0 50px rgba(103, 126, 234, 0.3);
          }
        }

        /* Text floating animation */
        @keyframes textFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-2px) scale(1.02);
          }
          50% {
            transform: translateY(0px) scale(1);
          }
          75% {
            transform: translateY(-1px) scale(1.01);
          }
        }

        /* Hover effects for animated text */
        .animated-text:hover {
          /* No animations */
        }

        /* ========================================
           END ANIMATED TEXT STYLES
           ======================================== */
      `})]})}function g4(){const[e,t]=w.useState([]),[n,r]=w.useState(!1),[i,s]=w.useState(null),[o,l]=m0(),[c,d]=w.useState(o.get("q")||""),[u,f]=w.useState(o.get("category")||"All"),[h,m]=w.useState(o.get("min")||""),[p,v]=w.useState(o.get("max")||""),[y,x]=w.useState(o.get("sort")||"newest"),[g,b]=w.useState(Number(o.get("page")||1)),[k,j]=w.useState(12),{add:S}=fi();w.useEffect(()=>{let M=!1;async function A(){var P;r(!0),s(null);try{const C=await xe.get("/api/v1/products");if(M)return;const L=(P=C.data)==null?void 0:P.items;L&&L.length?t(L):t([])}catch{M||t([])}finally{M||r(!1)}}A();function $(P){P.key==="products:update"&&A()}return window.addEventListener("storage",$),()=>{M=!0,window.removeEventListener("storage",$)}},[]),w.useEffect(()=>{const M=new URLSearchParams;c&&M.set("q",c),u&&u!=="All"&&M.set("category",u),h&&M.set("min",h),p&&M.set("max",p),y&&y!=="newest"&&M.set("sort",y),g!==1&&M.set("page",String(g)),l(M)},[c,u,h,p,y,g,l]);const N=w.useMemo(()=>{const M=new Set(["All"]);return e.forEach(A=>M.add(A.category||"Other")),Array.from(M)},[e]),_=w.useMemo(()=>{let M=[...e];if(c.trim()){const P=c.toLowerCase();M=M.filter(C=>C.name.toLowerCase().includes(P)||C.slug.toLowerCase().includes(P)||(C.category||"").toLowerCase().includes(P))}u!=="All"&&(M=M.filter(P=>(P.category||"Other")===u));const A=Number(h),$=Number(p);switch(!Number.isNaN(A)&&h!==""&&(M=M.filter(P=>P.price>=A)),!Number.isNaN($)&&p!==""&&(M=M.filter(P=>P.price<=$)),y){case"price-asc":M.sort((P,C)=>P.price-C.price);break;case"price-desc":M.sort((P,C)=>C.price-P.price);break;case"name-asc":M.sort((P,C)=>P.name.localeCompare(C.name));break;case"name-desc":M.sort((P,C)=>C.name.localeCompare(P.name));break;default:M.sort((P,C)=>{const L=P.createdAt?Date.parse(P.createdAt):0;return(C.createdAt?Date.parse(C.createdAt):0)-L})}return M},[e,c,u,h,p,y]),z=_.length,T=Math.max(1,Math.ceil(z/k)),I=Math.min(g,T),D=(I-1)*k,B=_.slice(D,D+k);w.useEffect(()=>{g>T&&b(T)},[T,g]);const Y=()=>{d(""),f("All"),m(""),v(""),x("newest"),b(1)};return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"shop-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Shop"}),a.jsx("h1",{className:"headline",children:"Find the next daily favorite"}),a.jsx("p",{className:"subhead",children:"Browse curated essentials across apparel, accessories, and more."})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"toolbar",children:[a.jsxs("div",{className:"toolbar-left",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"search",children:"Search"}),a.jsx("input",{id:"search",type:"search",placeholder:"Search products",value:c,onChange:M=>{d(M.target.value),b(1)}})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"category",children:"Category"}),a.jsx("select",{id:"category",value:u,onChange:M=>{f(M.target.value),b(1)},children:N.map(M=>a.jsx("option",{value:M,children:M},M))})]}),a.jsxs("div",{className:"field price",children:[a.jsx("label",{children:"Price"}),a.jsxs("div",{className:"price-row",children:[a.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Min",value:h,onChange:M=>{m(M.target.value),b(1)}}),a.jsx("span",{children:"—"}),a.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Max",value:p,onChange:M=>{v(M.target.value),b(1)}})]})]})]}),a.jsxs("div",{className:"toolbar-right",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"sort",children:"Sort"}),a.jsxs("select",{id:"sort",value:y,onChange:M=>x(M.target.value),children:[a.jsx("option",{value:"newest",children:"Newest"}),a.jsx("option",{value:"price-asc",children:"Price: Low to High"}),a.jsx("option",{value:"price-desc",children:"Price: High to Low"}),a.jsx("option",{value:"name-asc",children:"Name: A–Z"}),a.jsx("option",{value:"name-desc",children:"Name: Z–A"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"perPage",children:"Per page"}),a.jsxs("select",{id:"perPage",value:k,onChange:M=>{j(Number(M.target.value)),b(1)},children:[a.jsx("option",{value:12,children:"12"}),a.jsx("option",{value:24,children:"24"}),a.jsx("option",{value:48,children:"48"})]})]}),a.jsx("button",{className:"btn btn-ghost",onClick:Y,children:"Clear"})]})]}),n&&a.jsx("div",{className:"notice",children:"Loading products…"}),i&&a.jsx("div",{className:"error",children:"Could not load products. Showing demo catalog."}),!n&&B.length===0&&a.jsx("div",{className:"notice",children:"No products match the current filters."}),a.jsx("div",{className:"grid",children:B.map(M=>{var A;return a.jsxs("div",{className:"card",children:[a.jsx(U,{to:`/product/${M.slug}`,className:"card-img",children:a.jsx("img",{src:((A=M.images)==null?void 0:A[0])||"https://via.placeholder.com/600x400",alt:M.name,loading:"lazy"})}),a.jsxs("div",{className:"card-body",children:[a.jsxs("div",{className:"meta",children:[a.jsx("span",{className:"tag",children:M.category||"General"}),a.jsxs("span",{className:"price",children:["LKR ",Number(M.price).toFixed(2)]})]}),a.jsx(U,{to:`/product/${M.slug}`,className:"card-title",children:M.name}),a.jsxs("div",{className:"card-actions",children:[a.jsx("button",{className:"btn btn-primary",onClick:$=>{var L;const P=$.currentTarget.closest(".card"),C=P==null?void 0:P.querySelector("img");C&&mo(C),S({productId:M.id,slug:M.slug,name:M.name,price:M.price,image:(L=M.images)==null?void 0:L[0]})},children:"Add to Cart"}),a.jsx(U,{to:`/product/${M.slug}`,className:"btn btn-ghost",children:"Details"})]})]})]},M.id)})}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"btn btn-ghost",disabled:I<=1,onClick:()=>b(M=>Math.max(1,M-1)),children:"Prev"}),a.jsxs("span",{className:"page-info",children:["Page ",I," of ",T," • ",z," items"]}),a.jsx("button",{className:"btn btn-ghost",disabled:I>=T,onClick:()=>b(M=>Math.min(T,M+1)),children:"Next"})]})]})}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --positive:#1fbf75;
          --warning:#ffb020;
          --danger:#ff5d5d;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .shop-hero{padding:44px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .hero-inner{display:flex;align-items:flex-end;justify-content:space-between;gap:24px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted);font-size:clamp(15px,2vw,18px)}
        .section{padding:32px 0;border-top:1px solid var(--line)}
        .toolbar{display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;align-items:flex-end;margin-bottom:16px}
        .toolbar-left,.toolbar-right{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end}
        .field{display:flex;flex-direction:column;gap:6px}
        label{font-size:12px;color:var(--muted)}
        input,select{height:38px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        input[type="number"]{width:120px}
        .field.price .price-row{display:flex;gap:8px;align-items:center}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .notice{border:1px dashed var(--line);background:var(--surface);padding:14px;border-radius:10px;color:var(--muted);margin:8px 0}
        .error{border:1px solid var(--danger);background:rgba(255,93,93,.06);padding:14px;border-radius:10px;color:#ffbcbc;margin:8px 0}
        .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .card{border:1px solid var(--line);background:var(--card);border-radius:12px;overflow:hidden;display:flex;flex-direction:column}
        .card-img{display:block;aspect-ratio:4/3;background:var(--surface);border-bottom:1px solid var(--line)}
        .card-img img{width:100%;height:100%;object-fit:cover;display:block}
        .card-body{padding:12px}
        .meta{display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}
        .tag{font-size:12px;color:var(--muted);padding:2px 8px;border:1px solid var(--line);border-radius:999px;background:var(--surface-alt)}
        .price{font-weight:700}
        .card-title{display:inline-block;margin-top:2px;color:var(--text);text-decoration:none;font-weight:600}
        .card-title:hover{text-decoration:underline}
        .card-actions{display:flex;gap:8px;margin-top:10px}
        .pagination{display:flex;gap:12px;justify-content:center;align-items:center;margin-top:18px}
        .page-info{color:var(--muted)}
        @media (max-width:1024px){
          .grid{grid-template-columns:repeat(2,1fr)}
        }
        @media (max-width:640px){
          .grid{grid-template-columns:1fr}
          input[type="number"]{width:100px}
        }
      `})]})}function x4(){const{user:e}=Ft();return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"about-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"About Us"}),a.jsx("h1",{className:"headline",children:"Design-led essentials, made to last"}),a.jsx("p",{className:"subhead",children:"Everyday apparel and accessories built with comfort, durability, and timeless aesthetics at the core."}),e?a.jsxs("div",{className:"hero-ctas",children:[a.jsx(U,{to:"/contact",className:"btn btn-primary",children:"Contact Us"}),a.jsx(U,{to:"/shop",className:"btn btn-ghost",children:"Browse Collections"})]}):a.jsxs("div",{className:"hero-ctas",children:[a.jsx(U,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),a.jsx(U,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]})})}),!e&&a.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:a.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[a.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to Learn More?"}),a.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to see our full story, team, values, and start exploring our collections!"}),a.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[a.jsx(U,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),a.jsx(U,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),e&&a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Our Story"}),a.jsx("p",{className:"lead",children:"Started as a small studio with a big belief: daily wear should feel great, look refined, and hold up over time. We partner with trusted makers and keep batches small, so attention to detail never slips."}),a.jsxs("div",{className:"timeline",children:[a.jsx("div",{className:"tl-item",children:a.jsxs("div",{className:"tl-content",children:[a.jsx("h3",{children:"Where it began"}),a.jsx("p",{children:"Sketches, fabric swatches, and countless prototypes—our journey started with a focus on essentials."})]})}),a.jsx("div",{className:"tl-item",children:a.jsxs("div",{className:"tl-content",children:[a.jsx("h3",{children:"Finding our partners"}),a.jsx("p",{children:"We sourced mills and workshops that matched our standards for consistency and fair practices."})]})}),a.jsx("div",{className:"tl-item",children:a.jsxs("div",{className:"tl-content",children:[a.jsx("h3",{children:"Refining the craft"}),a.jsx("p",{children:"With customer feedback, we tuned fits, finishes, and care guides to make pieces last longer."})]})})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Mission & Values"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Mission"}),a.jsx("p",{children:"Make everyday dressing simpler through reliable, comfortable essentials that blend form and function."})]}),a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Quality"}),a.jsx("p",{children:"From reinforced seams to color-fast dyes, we design beyond the first wear and wash."})]}),a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Trust"}),a.jsx("p",{children:"Clear specs, honest descriptions, and responsive support keep decisions easy and informed."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Sustainability & Craft"}),a.jsxs("div",{className:"grid-2",children:[a.jsxs("div",{className:"info",children:[a.jsx("h3",{children:"Responsible choices"}),a.jsx("p",{children:"We prioritize durable textiles, mindful packaging, and small-batch production to reduce waste while keeping quality high."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Material-first selection with long-life wear in mind."}),a.jsx("li",{children:"Repair-friendly construction and care guides."}),a.jsx("li",{children:"Continuous iteration based on real-world use."})]})]}),a.jsxs("div",{className:"info",children:[a.jsx("h3",{children:"Attention to detail"}),a.jsx("p",{children:"Fit, finish, and feel are tested across sizes and seasons, ensuring each piece earns a place in daily rotation."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Reinforced stress points and reliable hardware."}),a.jsx("li",{children:"Neutral palettes for effortless pairing."}),a.jsx("li",{children:"Consistent measurements for repeat buys."})]})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Customer Promise"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"30-Day Returns"}),a.jsx("p",{children:"Hassle-free returns on unused items in original condition within 30 days."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Fast Support"}),a.jsx("p",{children:"Friendly assistance with sizing, care, and orders via chat or email."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Honest Pricing"}),a.jsx("p",{children:"Fair prices without inflated markups—value built into each piece."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Who We Are"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Design Lead"}),a.jsx("p",{children:"Focuses on silhouettes, fit blocks, and fabric hand-feel for comfort and longevity."})]})]}),a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Production"}),a.jsx("p",{children:"Oversees sourcing, QC, and small-batch timelines to maintain consistency."})]})]}),a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Care & Support"}),a.jsx("p",{children:"Helps with sizing, exchanges, and care tips to keep favorites in rotation."})]})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"FAQs"}),a.jsxs("div",{className:"faq",children:[a.jsxs("details",{children:[a.jsx("summary",{children:"What sizes do you carry?"}),a.jsx("p",{children:"Core styles generally run XS–XXL. Fit notes and measurements are listed on product pages."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"How do returns work?"}),a.jsx("p",{children:"Submit a request within 30 days for unused items. We’ll guide through label creation and refund steps."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Do you ship internationally?"}),a.jsx("p",{children:"Yes, with tracked delivery options at checkout. Timelines vary by destination."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container contact-cta",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"section-title",children:"Get in touch"}),a.jsx("p",{className:"lead",children:"Questions about sizing, care, or orders? The team is ready to help."})]}),a.jsxs("div",{className:"cta-buttons",children:[a.jsx(U,{to:"/contact",className:"btn btn-primary",children:"Contact Support"}),a.jsx(U,{to:"/shop",className:"btn btn-ghost",children:"Explore the Shop"})]})]})})]}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .about-hero{padding:56px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .hero-inner{display:flex;flex-direction:column;gap:12px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(28px,4vw,46px);line-height:1.1;margin:0 0 10px}
        .subhead{color:var(--muted);font-size:clamp(16px,2.2vw,18px)}
        .hero-ctas{display:flex;gap:12px;margin-top:16px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 16px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;transition:.2s}
        .btn:hover{transform:translateY(-1px)}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .section{padding:48px 0;border-top:1px solid var(--line)}
        .section.alt{background:var(--surface)}
        .section-title{margin:0 0 14px;font-size:24px}
        .lead{color:var(--muted);margin:0 0 18px;max-width:70ch; line-height:1.6}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .card{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .info{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .bullets{margin:8px 0 0; padding-left:18px}
        .mini-feature{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}

        /* Timeline */
        .timeline{display:grid;gap:18px;margin-top:8px}
        .tl-item{
          position:relative;
          display:flex;
          align-items:flex-start; /* allow natural top alignment */
          gap:14px;
          padding-left:20px; /* space for bullet */
          line-height:1.35; /* consistent block line-height */
        }
        /* The bullet: aligns to first line cap-height using translateY */
        .tl-item::before{
          content:'';
          position:absolute;
          left:0;
          top:0.55em; /* anchor around the first text line */
          width:10px;
          height:10px;
          border-radius:50%;
          background:var(--brand);
          transform:translateY(-50%); /* center on the text baseline cluster */
        }
        .tl-content h3{margin:0 0 6px; line-height:1.2}
        .tl-content p{margin:0; color:var(--muted)}

        .person{display:grid;grid-template-columns:48px 1fr;gap:12px;align-items:center;border:1px solid var(--line);background:var(--card);border-radius:12px;padding:12px}
        .avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg, var(--surface-alt), var(--card));border:1px solid var(--line)}
        .faq details{border:1px solid var(--line);background:var(--card);border-radius:10px;padding:12px}
        .faq details + details{margin-top:10px}
        .contact-cta{display:flex;justify-content:space-between;align-items:center;gap:16px}
        .cta-buttons{display:flex;gap:12px}

        /* Responsive */
        @media (max-width:900px){
          .grid-2,.grid-3{grid-template-columns:1fr}
          .contact-cta{flex-direction:column;align-items:flex-start}
          .tl-item{padding-left:18px}
          .tl-item::before{width:9px;height:9px}
        }
      `})]})}const v4="mgvnjvjw",y4=()=>`https://formspree.io/f/${v4}`;function b4(){const[e,t]=w.useState({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"}),[n,r]=w.useState(!1),[i,s]=w.useState(null),[o,l]=w.useState(null),c=w.useRef(null);w.useEffect(()=>{i&&c.current&&c.current.focus(),o&&c.current&&c.current.focus()},[i,o]);const d=h=>{const{name:m,value:p}=h.target;t(v=>({...v,[m]:p}))},u=async h=>{var m;h.preventDefault(),r(!0),s(null),l(null);try{const p=y4();if(!p)throw new Error("Contact form is not configured. Missing VITE_FORMSPREE_FORM_ID.");const v={name:e.name,email:e.email,_replyto:e.email,subject:e.subject,message:e.message,order_id:e.orderId,preferred_channel:e.channel,_subject:`[Store Contact] ${e.subject}`},y=await fetch(p,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(v)});if(!y.ok){let x="Could not send message. Please try again.";try{const g=await y.json();(m=g==null?void 0:g.errors)!=null&&m.length&&(x=g.errors.map(b=>b.message).join(`
`))}catch{}throw new Error(x)}s("Message sent! We'll reply to your email within 1–2 business days."),t({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"})}catch(p){const v=p instanceof Error?p.message:"Could not send message. Please try again or use another contact method.";l(v)}finally{r(!1)}},f=`https://wa.me/94768976222?text=${encodeURIComponent(`Hello, I need help with my order.
Name: ${e.name}
Email: ${e.email}
Order ID: ${e.orderId||"-"}
Subject: ${e.subject}
Message: ${e.message}`)}`;return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"contact-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Contact"}),a.jsx("h1",{className:"headline",children:"How can we help?"}),a.jsx("p",{className:"subhead",children:"Questions about orders, sizing, delivery, or returns—support is here."})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container contact-grid",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Send a message"}),a.jsxs("div",{ref:c,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[i&&a.jsx("div",{className:"alert success",children:i}),o&&a.jsx("div",{className:"alert error",children:o})]}),a.jsxs("form",{className:"form",onSubmit:u,noValidate:!0,children:[a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"name",children:["Name",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e.name,onChange:d,autoComplete:"name"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"email",children:["Email",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:d,autoComplete:"email"})]})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"orderId",children:"Order ID"}),a.jsx("input",{id:"orderId",name:"orderId",type:"text",value:e.orderId,onChange:d,placeholder:"Optional, helps us locate your order"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"channel",children:"Preferred channel"}),a.jsxs("select",{id:"channel",name:"channel",value:e.channel,onChange:d,children:[a.jsx("option",{value:"email",children:"Email"}),a.jsx("option",{value:"phone",children:"Phone"}),a.jsx("option",{value:"whatsapp",children:"WhatsApp"})]})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"subject",children:["Subject",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"subject",name:"subject",type:"text",required:!0,value:e.subject,onChange:d})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"message",children:["Message",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("textarea",{id:"message",name:"message",required:!0,rows:6,value:e.message,onChange:d})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Sending…":"Send message"}),a.jsx("a",{className:"btn btn-ghost",href:f,target:"_blank",rel:"noopener noreferrer",children:"Message on WhatsApp"})]}),a.jsx("p",{className:"tiny muted",children:"Fields marked with * are required."})]})]}),a.jsxs("aside",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Contact details"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),a.jsx("li",{children:"Phone: +94 76 89 76 222"}),a.jsx("li",{children:"WhatsApp: +94 76 897 6222"}),a.jsx("li",{children:"Address: 252/1A Mannar Road , Puttalam"}),a.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00 (UTC+5:30)"}),a.jsx("li",{children:"Response time: within 1–2 business days"})]}),a.jsx("div",{className:"divider"}),a.jsx("h3",{children:"Quick help"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx("a",{href:"/faq",children:"FAQ"})}),a.jsx("li",{children:a.jsx("a",{href:"/shipping-returns",children:"Shipping & Returns"})}),a.jsx("li",{children:a.jsx("a",{href:"/orders",children:"Track orders"})}),a.jsx("li",{children:a.jsx("a",{href:"/care",children:"Care guides"})})]}),a.jsx("div",{className:"mapbox",children:a.jsx("div",{className:"map-fallback",children:"Map placeholder"})})]})]})}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --positive:#1fbf75;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .contact-hero{padding:48px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .hero-inner{display:flex;flex-direction:column;gap:8px}
        .kicker{letter-spacing:.2em;text-transform:uppercase;color:var(--brand);font-weight:600;margin:0 0 8px}
        .headline{font-size:clamp(28px,4vw,46px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:36px 0;border-top:1px solid var(--line)}
        .contact-grid{display:grid;grid-template-columns:1.4fr .9fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 14px;font-size:20px}
        .form{display:grid;gap:12px}
        .row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .field{display:grid;gap:6px}
        label{font-size:14px;color:var(--muted)}
        input,select,textarea{background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:10px}
        textarea{resize:vertical}
        .actions{display:flex;gap:8px;flex-wrap:wrap}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .tiny{font-size:12px}
        .muted{color:var(--muted)}
        .list{list-style:none;margin:0;padding:0;display:grid;gap:6px}
        .divider{height:1px;background:var(--line);margin:12px 0}
        .mapbox{margin-top:12px}
        .map-fallback{height:160px;border:1px dashed var(--line);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--muted)}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px}
        .alert.success{border:1px solid rgba(31,191,117,.4);background:rgba(31,191,117,.08);color:#c7f5df}
        .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .contact-grid{grid-template-columns:1fr}
          .row{grid-template-columns:1fr}
        }
      `})]})}/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j4=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Fp=e=>{const t=j4(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ix=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),k4=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},c)=>w.createElement("svg",{ref:c,...S4,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ix("lucide",i),...!s&&!k4(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,u])=>w.createElement(d,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=(e,t)=>{const n=w.forwardRef(({className:r,...i},s)=>w.createElement(_4,{ref:s,iconNode:t,className:Ix(`lucide-${w4(Fp(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Fp(e),n};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],C4=Gt("arrow-up",N4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],E4=Gt("book",P4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],M4=Gt("chevron-down",R4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ip=Gt("circle-question-mark",T4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],A4=Gt("external-link",z4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],L4=Gt("funnel",O4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],F4=Gt("hash",D4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Bp=Gt("message-circle",I4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Hp=Gt("search",B4);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],W4=Gt("star",H4),U4=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(new Set),[i,s]=w.useState(!1),[o,l]=w.useState("all"),[c,d]=w.useState(!1),[u]=w.useState(["How do I create an account?","What payment methods are available?","How do I view my order history?","How do I add items to my cart?"]);w.useEffect(()=>{const x=()=>{d(window.scrollY>300)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const f=[{title:"General Questions",icon:"❓",items:[{question:"What is this platform?",answer:"This is a modern e-commerce platform built with FastAPI backend and React frontend, offering a complete shopping experience with product catalog, secure checkout, order tracking, and administrative management tools."},{question:"Do I need to create an account to shop?",answer:"Yes, you must register and login to access shopping features including the product catalog, cart, checkout, and order history. This ensures a secure and personalized shopping experience."},{question:"What currency is used?",answer:"All prices are displayed in Sri Lankan Rupees (LKR). The platform is optimized for Sri Lankan customers with local payment methods and shipping."}]},{title:"Account & Authentication",icon:"🔐",items:[{question:"How do I create an account?",answer:`Click on "Register" in the navigation menu, fill in your details including name, email, and password, then submit the form. You'll be automatically logged in after registration.`},{question:"I forgot my password. What should I do?",answer:a.jsxs(a.Fragment,{children:["Currently, password reset functionality is not implemented. Please contact support through the"," ",a.jsx(U,{to:"/contact",className:"text-[#6D74FF] hover:text-[#9b87f5] underline",children:"contact page"})," ","for assistance."]})},{question:"How do I logout?",answer:'Click on your user avatar in the top navigation and select "Logout" from the dropdown menu.'},{question:"Can I update my account information?",answer:"Yes, after logging in, access your profile settings to update your name, email, and other account details."}]},{title:"Shopping & Products",icon:"🛍️",items:[{question:"How do I browse products?",answer:`After logging in, click "Shop" in the navigation menu. You'll see all available products with images, prices, and descriptions. Click on any product to view detailed information.`},{question:"Can I see multiple images for products?",answer:"Yes! Products can have up to 5 images. In the product detail view, you can browse through all available images to see the product from different angles."},{question:"How do I add items to my cart?",answer:'On the product detail page, select the quantity you want and click "Add to Cart". The item will be added to your shopping cart, which you can access from the navigation menu.'},{question:"Can I modify items in my cart?",answer:"Yes, visit your cart page to update quantities or remove items. Changes are saved automatically."},{question:"What if a product is out of stock?",answer:"Out of stock products will be clearly marked. You can check back later or contact support to inquire about restocking dates."}]},{title:"Checkout & Payments",icon:"💳",items:[{question:"What payment methods are available?",answer:a.jsxs(a.Fragment,{children:["We accept two payment methods:",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Stripe:"})," Credit/debit cards (Visa, Mastercard, American Express)",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Bank Transfer:"})," Direct bank transfer to our account"]})},{question:"How does bank transfer payment work?",answer:`During checkout, select "Bank Transfer" as payment method. You'll receive payment details including account number, account holder name, and reference number. Transfer the exact amount to our bank account and use the reference number. Your order status will be updated once payment is verified.`},{question:"What information do I need to provide during checkout?",answer:a.jsxs(a.Fragment,{children:["You\\'ll need to provide:",a.jsx("br",{}),"• Customer name and contact information",a.jsx("br",{}),"• Shipping address (pre-filled for Sri Lanka)",a.jsx("br",{}),"• Payment method selection and details"]})},{question:"Is my payment information secure?",answer:"Yes, we use industry-standard security measures. Stripe payments are processed through Stripe's secure servers. Bank transfer details are displayed securely without storing sensitive payment information on our servers."},{question:"Can I use international credit cards?",answer:"Yes, Stripe supports international credit and debit cards. However, currency conversion fees may apply from your card issuer."}]},{title:"Orders & Tracking",icon:"📦",items:[{question:"How do I view my order history?",answer:`After logging in, click "Orders" in the navigation menu. You'll see all your orders with status, date, and total amount. Click on any order to view detailed information.`},{question:"What do the order statuses mean?",answer:a.jsxs(a.Fragment,{children:["Order statuses include:",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Pending Verification:"})," Order placed, payment being verified",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Processing:"})," Payment verified, order being prepared",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Shipped:"})," Order has been dispatched",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Delivered:"})," Order completed successfully",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Cancelled:"})," Order was cancelled"]})},{question:"How do I download my invoice?",answer:'Once your payment is verified, an "Invoice" button will appear in your order details. Click it to download a professional PDF invoice with all order details, pricing, and payment information.'},{question:"Can I cancel my order?",answer:"Orders can only be cancelled before payment verification. Please contact support immediately if you need to cancel an order after payment."},{question:"What is your shipping policy?",answer:"We ship within Sri Lanka. Shipping times vary based on location. You'll receive tracking information once your order is shipped."}]},{title:"Admin Panel",icon:"👑",items:[{question:"How do I access the admin panel?",answer:`Admin access requires special permissions. If you have admin privileges, you'll see an "Admin" button in the navigation after logging in. Click it to access the admin dashboard.`},{question:"What can I do in the admin panel?",answer:a.jsxs(a.Fragment,{children:["Admin users can:",a.jsx("br",{}),"• Manage products (add, edit, delete, upload images)",a.jsx("br",{}),"• View and manage user accounts",a.jsx("br",{}),"• Update order statuses and track orders",a.jsx("br",{}),"• View dashboard metrics and analytics"]})},{question:"How do I add new products?",answer:'In the admin panel, go to "Products" section, click "Add Product", fill in the details including name, price, stock, and upload 1-5 product images. The product will appear in the shop immediately.'},{question:"Can I bulk upload products?",answer:"Currently, products must be added individually through the admin panel. Bulk upload functionality may be added in future updates."}]},{title:"Technical Issues",icon:"⚙️",items:[{question:"The website is not loading properly.",answer:"Try clearing your browser cache and cookies, or try a different browser. If the issue persists, check if both backend and frontend servers are running."},{question:"I can't login even with correct credentials.",answer:"Clear your browser's localStorage (press F12 → Application → Local Storage → Clear All), then try logging in again. Make sure you're using the correct email and password format."},{question:"Images are not displaying.",answer:"Product images are served from the backend server. Make sure the backend is running and the static files are properly configured. Try refreshing the page."},{question:"Payment is not processing.",answer:"For Stripe payments, ensure your card details are correct and you have sufficient funds. For bank transfers, double-check the account details and reference number. Contact support if issues persist."},{question:"The site is slow or unresponsive.",answer:"Check your internet connection first. If the problem persists, try clearing your cache or using a different browser. Contact support if issues continue."}]}],h=(x,g)=>{const b=`${x}-${g}`,k=new Set(n);k.has(b)?k.delete(b):k.add(b),r(k)},m=()=>{if(i)r(new Set);else{const x=new Set;f.forEach((g,b)=>{g.items.forEach((k,j)=>{x.add(`${b}-${j}`)})}),r(x)}s(!i)},p=w.useMemo(()=>{let x=f;if(o!=="all"&&(x=x.filter(g=>g.title.toLowerCase().includes(o.toLowerCase()))),e.trim()){const g=e.toLowerCase();x=x.map(b=>({...b,items:b.items.filter(k=>k.question.toLowerCase().includes(g)||typeof k.answer=="string"&&k.answer.toLowerCase().includes(g))})).filter(b=>b.items.length>0)}return x},[e,o]),v=()=>{window.scrollTo({top:0,behavior:"smooth"})},y=x=>{const g=document.getElementById(`section-${x.replace(/\s+/g,"-").toLowerCase()}`);g&&g.scrollIntoView({behavior:"smooth",block:"start"})};return a.jsxs("div",{className:"faq-page",children:[c&&a.jsx("button",{onClick:v,className:"faq-scroll-top","aria-label":"Scroll to top",children:a.jsx(C4,{})}),a.jsxs("div",{className:"faq-container",children:[a.jsx("div",{className:"faq-header",children:a.jsxs("div",{className:"faq-header-content",children:[a.jsxs("div",{className:"faq-title-section",children:[a.jsxs("div",{className:"faq-icon-wrapper",children:[a.jsx(Ip,{className:"faq-icon"}),a.jsx("div",{className:"faq-ping"})]}),a.jsxs("div",{children:[a.jsx("h1",{className:"faq-title",children:"FAQ Center"}),a.jsxs("p",{className:"faq-subtitle",children:["Your comprehensive guide to our e-commerce platform. Find instant answers or",a.jsx(U,{to:"/contact",children:" contact support"}),"."]})]})]}),a.jsxs("div",{className:"faq-stats",children:[a.jsxs("div",{className:"faq-stat-card",children:[a.jsx("div",{className:"faq-stat-value",children:f.reduce((x,g)=>x+g.items.length,0)}),a.jsx("div",{className:"faq-stat-label",children:"Questions"})]}),a.jsxs("div",{className:"faq-stat-card",children:[a.jsx("div",{className:"faq-stat-value",children:f.length}),a.jsx("div",{className:"faq-stat-label",children:"Categories"})]}),a.jsxs("div",{className:"faq-stat-card",children:[a.jsx("div",{className:"faq-stat-value",children:"24h"}),a.jsx("div",{className:"faq-stat-label",children:"Response"})]})]})]})}),a.jsxs("div",{className:"faq-search-wrapper",children:[a.jsxs("div",{className:"faq-search-container",children:[a.jsx(Hp,{className:"faq-search-icon"}),a.jsx("input",{type:"text",placeholder:"Search questions, answers, or keywords...",value:e,onChange:x=>t(x.target.value),className:"faq-search-input"}),e&&a.jsx("button",{onClick:()=>t(""),className:"faq-search-clear",children:"✕"})]}),a.jsxs("div",{className:"faq-search-footer",children:[a.jsxs("p",{className:"faq-search-count",children:[p.reduce((x,g)=>x+g.items.length,0)," questions available"]}),a.jsxs("button",{onClick:m,className:"faq-expand-btn",children:[a.jsx(F4,{}),i?"Collapse All":"Expand All"]})]})]}),a.jsxs("div",{className:"faq-filters",children:[a.jsxs("button",{onClick:()=>l("all"),className:`faq-filter-btn ${o==="all"?"active":""}`,children:[a.jsx(L4,{}),"All Categories"]}),f.map(x=>a.jsxs("button",{onClick:()=>l(x.title),className:`faq-filter-btn ${o===x.title?"active":""}`,children:[a.jsx("span",{children:x.icon}),x.title]},x.title))]}),a.jsxs("div",{className:"faq-feature-grid",children:[a.jsxs("div",{className:"faq-feature-card",children:[a.jsxs("div",{className:"faq-feature-header",children:[a.jsx(W4,{className:"faq-feature-icon"}),a.jsx("h3",{className:"faq-feature-title",children:"Popular Questions"})]}),a.jsx("div",{className:"faq-feature-list",children:u.map((x,g)=>a.jsxs("button",{onClick:()=>t(x),className:"faq-feature-item",children:[a.jsxs("span",{className:"faq-feature-number",children:["#",g+1]}),a.jsx("span",{className:"faq-feature-text",children:x})]},g))})]}),a.jsxs("div",{className:"faq-feature-card",children:[a.jsxs("div",{className:"faq-feature-header",children:[a.jsx(Bp,{className:"faq-feature-icon"}),a.jsx("h3",{className:"faq-feature-title",children:"Quick Navigation"})]}),a.jsx("div",{className:"faq-quick-nav",children:f.map(x=>a.jsxs("button",{onClick:()=>y(x.title),className:"faq-nav-item",children:[a.jsxs("div",{className:"faq-nav-item-header",children:[a.jsx("span",{className:"faq-nav-emoji",children:x.icon}),a.jsxs("span",{className:"faq-nav-count",children:[x.items.length," Q&A"]})]}),a.jsx("span",{className:"faq-nav-title",children:x.title})]},x.title))})]})]}),a.jsx("div",{className:"faq-sections",children:p.length>0?p.map((x,g)=>a.jsxs("div",{id:`section-${x.title.replace(/\s+/g,"-").toLowerCase()}`,className:"faq-section",children:[a.jsxs("div",{className:"faq-section-header",children:[a.jsx("div",{className:"faq-section-icon-wrapper",children:x.icon}),a.jsxs("div",{children:[a.jsx("h2",{className:"faq-section-title",children:x.title}),a.jsxs("p",{className:"faq-section-count",children:[x.items.length," questions"]})]})]}),a.jsx("div",{className:"faq-items",children:x.items.map((b,k)=>{const j=`${g}-${k}`,S=n.has(j);return a.jsxs("div",{className:"faq-item",children:[a.jsxs("button",{onClick:()=>h(g,k),className:"faq-question-btn",children:[a.jsx("h3",{className:"faq-question-text",children:b.question}),a.jsx("div",{className:`faq-chevron-wrapper ${S?"expanded":""}`,children:a.jsx(M4,{className:"faq-chevron"})})]}),a.jsx("div",{className:`faq-answer-wrapper ${S?"expanded":""}`,children:a.jsx("div",{className:"faq-answer",children:b.answer})})]},k)})})]},g)):a.jsxs("div",{className:"faq-no-results",children:[a.jsx(Hp,{className:"faq-no-results-icon"}),a.jsx("h3",{className:"faq-no-results-title",children:"No results found"}),a.jsxs("p",{className:"faq-no-results-text",children:["Try adjusting your search terms or"," ",a.jsx("button",{onClick:()=>{t(""),l("all")},className:"faq-no-results-btn",children:"clear filters"}),"."]})]})}),a.jsxs("div",{className:"faq-contact-section",children:[a.jsx("h2",{className:"faq-contact-title",children:"Still Need Help?"}),a.jsx("p",{className:"faq-contact-text",children:"If you couldn't find the answer to your question, our support team is here to assist you. We typically respond within 24 hours with detailed solutions."}),a.jsxs("div",{className:"faq-contact-buttons",children:[a.jsxs(U,{to:"/contact",className:"faq-btn-primary",children:[a.jsx(Bp,{}),"Contact Support"]}),a.jsxs(U,{to:"/about",className:"faq-btn-secondary",children:[a.jsx(Ip,{}),"About Us"]})]})]}),a.jsxs("div",{className:"faq-docs-section",children:[a.jsxs("div",{className:"faq-docs-header",children:[a.jsx("div",{className:"faq-docs-icon-wrapper",children:a.jsx(E4,{className:"faq-docs-icon"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"faq-docs-title",children:"Technical Documentation"}),a.jsx("p",{className:"faq-docs-subtitle",children:"Comprehensive guides for developers covering implementation details and system architecture."})]})]}),a.jsx("div",{className:"faq-docs-grid",children:[{name:"🚀 Quick Start Guide",url:"/docs/QUICK_START.md",desc:"Get started in minutes"},{name:"🔐 Authentication Guide",url:"/docs/AUTHENTICATION_IMPLEMENTATION.md",desc:"User management & security"},{name:"📦 Order Status System",url:"/docs/ORDER_STATUS_TECHNICAL_DOCS.md",desc:"Order lifecycle management"},{name:"📄 Invoice Feature",url:"/docs/INVOICE_FEATURE_COMPLETE.md",desc:"PDF generation & billing"},{name:"📸 Multiple Images Guide",url:"/docs/MULTIPLE_IMAGES_FEATURE.md",desc:"Product image handling"},{name:"💰 Currency Configuration",url:"/docs/CURRENCY_CHANGE.md",desc:"Multi-currency support"},{name:"👑 Admin Panel Fixes",url:"/docs/ADMIN_PANEL_FIXES.md",desc:"Admin interface updates"},{name:"🏦 Bank Transfer Payments",url:"/docs/BANK_TRANSFER_UPGRADE.md",desc:"Payment processing"},{name:"🖼️ Image Upload System",url:"/docs/IMAGE_UPLOAD_FIX.md",desc:"File upload & storage"}].map((x,g)=>a.jsxs("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",className:"faq-doc-card",children:[a.jsxs("div",{className:"faq-doc-card-header",children:[a.jsx("span",{className:"faq-doc-emoji",children:x.name.split(" ")[0]}),a.jsx(A4,{className:"faq-doc-external-icon"})]}),a.jsx("div",{className:"faq-doc-name",children:x.name.substring(x.name.indexOf(" ")+1)}),a.jsx("div",{className:"faq-doc-desc",children:x.desc})]},g))}),a.jsxs("div",{className:"faq-footer-stats",children:[a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:"9"}),a.jsx("div",{className:"faq-footer-stat-label",children:"Documentation"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Technical guides"})]}),a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:"7"}),a.jsx("div",{className:"faq-footer-stat-label",children:"Categories"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Organized topics"})]}),a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:f.reduce((x,g)=>x+g.items.length,0)}),a.jsx("div",{className:"faq-footer-stat-label",children:"Q&A Total"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Common questions"})]}),a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:"24/7"}),a.jsx("div",{className:"faq-footer-stat-label",children:"Support"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Always available"})]})]})]})]})]})};function $4(){const[e,t]=w.useState([]),[n,r]=w.useState(!1),[i,s]=w.useState(null),[o]=m0(),l=o.get("q")||"",{add:c}=fi();w.useEffect(()=>{if(!l.trim()){t([]);return}let h=!1;async function m(){var p;r(!0),s(null);try{const v=await xe.get("/api/v1/products");if(h)return;const y=((p=v.data)==null?void 0:p.items)||[];t(y)}catch{h||(s("Failed to load products"),t([]))}finally{h||r(!1)}}return m(),()=>{h=!0}},[l]);const d=w.useMemo(()=>{if(!l.trim())return[];const h=l.toLowerCase();return e.filter(m=>m.name.toLowerCase().includes(h)||m.slug.toLowerCase().includes(h)||(m.category||"").toLowerCase().includes(h))},[e,l]),u=w.useMemo(()=>{if(!l.trim())return[];const h=l.toLowerCase();return[{id:"faq",name:"Frequently Asked Questions",url:"/faq",type:"FAQ Page"},{id:"about",name:"About Us",url:"/about",type:"About Page"},{id:"contact",name:"Contact Support",url:"/contact",type:"Contact Page"},{id:"home",name:"Home Page",url:"/",type:"Home Page"},{id:"shop",name:"Shop",url:"/shop",type:"Shop Page"}].filter(p=>p.name.toLowerCase().includes(h)||p.type.toLowerCase().includes(h))},[l]),f=(h,m)=>{const v=m.currentTarget.closest("div"),y=v==null?void 0:v.querySelector("img");y&&mo(y),c({productId:h.id,slug:h.slug,name:h.name,price:h.price,image:h.images[0]})};return l.trim()?a.jsxs("div",{className:"container",style:{padding:"2rem"},children:[a.jsxs("div",{style:{marginBottom:"2rem"},children:[a.jsx("h1",{children:"Search Results"}),a.jsxs("p",{children:["Showing results for: ",a.jsxs("strong",{children:['"',l,'"']})]}),a.jsxs("p",{children:[d.length," product",d.length!==1?"s":""," found"]})]}),n&&a.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:a.jsx("p",{children:"Loading products..."})}),i&&a.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"red"},children:a.jsx("p",{children:i})}),!n&&!i&&a.jsxs(a.Fragment,{children:[d.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Products (",d.length,")"]}),a.jsx("div",{className:"grid",children:d.map(h=>a.jsxs("div",{className:"card",children:[a.jsx(U,{to:`/product/${h.slug}`,className:"card-img",children:a.jsx("img",{src:h.images[0]||"/placeholder.jpg",alt:h.name})}),a.jsxs("div",{className:"card-body",children:[a.jsx("span",{className:"tag",children:h.category||"General"}),a.jsxs("span",{className:"price",children:["LKR ",Number(h.price).toFixed(2)]}),a.jsx(U,{to:`/product/${h.slug}`,className:"card-title",children:h.name}),a.jsx("div",{className:"card-actions",children:a.jsx("button",{className:"btn btn-primary",onClick:m=>f(h,m),children:"Add to Cart"})})]})]},h.id))})]}),u.length>0&&a.jsxs(a.Fragment,{children:[d.length>0&&a.jsx("hr",{style:{margin:"2rem 0",border:"none",borderTop:"1px solid var(--line)"}}),a.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Pages (",u.length,")"]}),a.jsx("div",{style:{display:"grid",gap:"1rem"},children:u.map(h=>a.jsx(U,{to:h.url,style:{display:"block",padding:"1rem",background:"var(--surface)",border:"1px solid var(--line)",borderRadius:"8px",textDecoration:"none",color:"var(--text)",transition:"all 0.2s ease"},onMouseEnter:m=>m.currentTarget.style.background="var(--ghost)",onMouseLeave:m=>m.currentTarget.style.background="var(--surface)",children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{fontSize:"1.1rem",fontWeight:"500"},children:h.name}),a.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)",padding:"2px 8px",background:"var(--surface-alt)",borderRadius:"12px"},children:h.type})]})},h.id))})]})]}),!n&&!i&&d.length===0&&u.length===0&&l.trim()&&a.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[a.jsxs("p",{children:['No results found for "',l,'"']}),a.jsxs("p",{children:["Try searching for something else or ",a.jsx(U,{to:"/shop",children:"browse all products"})]})]})]}):a.jsxs("div",{className:"container",style:{padding:"2rem",textAlign:"center"},children:[a.jsx("h1",{children:"Search"}),a.jsx("p",{children:"Enter a search term to find products across our store."})]})}function q4(){const[e,t]=w.useState([]),n=w.useRef({});return w.useEffect(()=>{function r(i){var d,u;const s=i,o=crypto.randomUUID(),l=Date.now()+(((d=s.detail)==null?void 0:d.duration)??2200);t(f=>{var h,m;return[...f,{id:o,message:((h=s.detail)==null?void 0:h.message)??"",type:((m=s.detail)==null?void 0:m.type)??"success",ttl:l}]});const c=((u=s.detail)==null?void 0:u.duration)??2200;n.current[o]=window.setTimeout(()=>{t(f=>f.filter(h=>h.id!==o)),delete n.current[o]},c)}return window.addEventListener("app:toast",r),()=>{window.removeEventListener("app:toast",r),Object.values(n.current).forEach(i=>window.clearTimeout(i))}},[]),a.jsxs("div",{style:{position:"fixed",bottom:20,right:20,zIndex:2e3,display:"flex",flexDirection:"column",gap:8},"aria-live":"polite","aria-atomic":"true",children:[e.map(r=>a.jsx("div",{role:"status",style:{minWidth:220,maxWidth:360,padding:"10px 14px",borderRadius:10,color:"white",background:r.type==="success"?"linear-gradient(180deg, #22c55e, #16a34a)":r.type==="error"?"linear-gradient(180deg, #ef4444, #b91c1c)":"linear-gradient(180deg, #3b82f6, #1d4ed8)",boxShadow:"0 10px 24px rgba(0,0,0,0.35)",transform:"translateY(0)",transition:"opacity .2s, transform .2s",fontWeight:600},children:r.message},r.id)),a.jsx("style",{children:`
        @media (max-width: 600px) {
          div[aria-live='polite']{ left: 12px; right: 12px; top: auto; bottom: 20px; align-items: center; }
        }
      `})]})}function V4(){const{user:e,updateUser:t}=Ft(),[n,r]=w.useState(!0),[i,s]=w.useState(!1),[o,l]=w.useState(!1),[c,d]=w.useState(""),[u,f]=w.useState(""),[h,m]=w.useState(""),[p,v]=w.useState(""),[y,x]=w.useState(void 0),[g,b]=w.useState(null),[k,j]=w.useState(null),[S,N]=w.useState(""),[_,z]=w.useState(""),[T,I]=w.useState(""),D=w.useRef(null);w.useEffect(()=>{(g||k)&&D.current&&D.current.focus()},[g,k]),w.useEffect(()=>{async function A(){try{r(!0);const P=(await V.get("/auth/me")).data||{};d(P.full_name||""),f(P.email||""),m(P.phone||""),v(P.address||""),x(P.avatar_url||(e==null?void 0:e.avatar_url)||void 0)}catch{d((e==null?void 0:e.full_name)||""),f((e==null?void 0:e.email)||""),m((e==null?void 0:e.phone)||""),v((e==null?void 0:e.address)||""),x((e==null?void 0:e.avatar_url)||void 0)}finally{r(!1)}}A()},[]);async function B(A){var $,P;if(A.preventDefault(),j(null),b(null),!u){j("Email is required");return}try{s(!0);const L=(await V.put("/auth/me",{email:u,full_name:c,phone:h,address:p})).data;t({email:L.email,full_name:L.full_name,phone:L.phone,address:L.address}),b("Profile updated successfully"),$t("Profile updated","success")}catch(C){const L=((P=($=C==null?void 0:C.response)==null?void 0:$.data)==null?void 0:P.detail)||"Failed to update profile";j(String(L)),$t("Could not update profile","error")}finally{s(!1)}}async function Y(A){var $,P;if(A.preventDefault(),j(null),b(null),!S||!_||!T){j("Please fill all password fields");return}if(_.length<8){j("New password must be at least 8 characters");return}if(_!==T){j("Passwords do not match");return}try{l(!0),await V.post("/auth/change-password",{old_password:S,new_password:_}),b("Password changed successfully"),N(""),z(""),I(""),$t("Password updated","success")}catch(C){const L=((P=($=C==null?void 0:C.response)==null?void 0:$.data)==null?void 0:P.detail)||"Failed to change password";j(String(L)),$t("Could not change password","error")}finally{l(!1)}}async function M(A){var C,L;const $=(C=A.target.files)==null?void 0:C[0];if(!$)return;if(!/image\/(png|jpe?g|webp)/.test($.type)){$t("Please select a PNG, JPG, or WEBP image","error");return}if($.size>3*1024*1024){$t("Image must be under 3MB","error");return}const P=new FormData;P.append("file",$);try{let X=(L=(await V.post("/auth/avatar",P,{headers:{"Content-Type":"multipart/form-data"}})).data)==null?void 0:L.avatar_url;X&&(X=`${X}${X.includes("?")?"&":"?"}v=${Date.now()}`),x(X),t({avatar_url:X}),$t("Profile picture updated","success")}catch{$t("Failed to upload picture","error")}}return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"account-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Account Settings"}),a.jsx("p",{className:"subhead",children:"Update your profile details, password, and picture."})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container acct-wrap",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Profile"}),a.jsxs("div",{ref:D,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[g&&a.jsx("div",{className:"alert success",children:g}),k&&a.jsx("div",{className:"alert error",children:k})]}),a.jsxs("form",{className:"form",onSubmit:B,noValidate:!0,children:[a.jsxs("div",{className:"avatar-row",children:[a.jsx("div",{className:"avatar","aria-label":"Profile picture",children:y?a.jsx("img",{src:y,alt:"Profile"}):a.jsx("div",{className:"img-fallback","aria-hidden":!0})}),a.jsxs("label",{className:"btn",role:"button",children:["Change picture",a.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",onChange:M,hidden:!0})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"fullName",children:"Full name"}),a.jsx("input",{id:"fullName",type:"text",value:c,onChange:A=>d(A.target.value),placeholder:"Your name"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{id:"email",type:"email",value:u,onChange:A=>f(A.target.value),required:!0})]}),a.jsxs("div",{className:"row2",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"phone",children:"Phone"}),a.jsx("input",{id:"phone",type:"tel",value:h,onChange:A=>m(A.target.value),placeholder:"Optional"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"address",children:"Address"}),a.jsx("input",{id:"address",type:"text",value:p,onChange:A=>v(A.target.value),placeholder:"Optional"})]})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:i,children:i?"Saving…":"Save changes"})]})]}),a.jsxs("aside",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Change password"}),a.jsxs("form",{className:"form",onSubmit:Y,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"old",children:"Current password"}),a.jsx("input",{id:"old",type:"password",value:S,onChange:A=>N(A.target.value),autoComplete:"current-password",required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"new",children:"New password"}),a.jsx("input",{id:"new",type:"password",value:_,onChange:A=>z(A.target.value),autoComplete:"new-password",required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"confirm",children:"Confirm new password"}),a.jsx("input",{id:"confirm",type:"password",value:T,onChange:A=>I(A.target.value),autoComplete:"new-password",required:!0})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?"Updating…":"Update password"})]})]})]})}),a.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
        }
        .container{max-width:1120px;margin:0 auto;padding:0 20px}
        .account-hero{padding:40px 0;background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 60%)}
        .headline{font-size:clamp(26px,4vw,40px);line-height:1.1;margin:0 0 8px}
        .subhead{color:var(--muted)}
        .section{padding:28px 0;border-top:1px solid var(--line)}
        .acct-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .section-title{margin:0 0 12px;font-size:20px}
        .form{display:grid;gap:12px}
        .field{display:grid;gap:6px}
        label{font-size:14px;color:var(--muted)}
        input{height:40px;background:var(--surface);border:1px solid var(--line);border-radius:8px;color:var(--text);padding:0 10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;cursor:pointer}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .avatar-row{display:flex;align-items:center;gap:12px}
        .avatar{width:64px;height:64px;border-radius:50%;overflow:hidden;border:1px solid var(--line);background:var(--surface)}
        .avatar img{width:100%;height:100%;object-fit:cover}
        .img-fallback{width:100%;height:100%;background:linear-gradient(135deg,#2a2b36,#171821)}
        .live{outline:none}
        .alert{border-radius:10px;padding:10px 12px;margin-bottom:10px}
        .alert.success{border:1px solid rgba(31,191,117,.4);background:rgba(31,191,117,.08);color:#c7f5df}
        .alert.error{border:1px solid rgba(255,93,93,.5);background:rgba(255,93,93,.08);color:#ffc9c9}
        @media (max-width:900px){
          .acct-wrap{grid-template-columns:1fr}
        }
      `})]})}const Wl=sessionStorage.redirect;delete sessionStorage.redirect;Wl&&Wl!==location.href&&history.replaceState(null,"",Wl);Ul.createRoot(document.getElementById("root")).render(function(){return a.jsx(Jp.StrictMode,{children:a.jsx(kb,{children:a.jsx(rw,{children:a.jsxs(iw,{children:[a.jsx(q4,{}),a.jsxs(pb,{children:[a.jsxs(_e,{element:a.jsx(mw,{}),children:[a.jsx(_e,{path:"/",element:a.jsx(uf,{})}),a.jsx(_e,{path:"/home",element:a.jsx(uf,{})}),a.jsx(_e,{path:"/about",element:a.jsx(x4,{})}),a.jsx(_e,{path:"/faq",element:a.jsx(U4,{})}),a.jsx(_e,{path:"/search",element:a.jsx($4,{})}),a.jsx(_e,{path:"/login",element:a.jsx(aw,{})}),a.jsx(_e,{path:"/register",element:a.jsx(ow,{})}),a.jsx(_e,{path:"/product/:slug",element:a.jsx(xn,{children:a.jsx(sw,{})})}),a.jsx(_e,{path:"/shop",element:a.jsx(xn,{children:a.jsx(g4,{})})}),a.jsx(_e,{path:"/contact",element:a.jsx(xn,{children:a.jsx(b4,{})})}),a.jsx(_e,{path:"/account",element:a.jsx(xn,{children:a.jsx(V4,{})})}),a.jsx(_e,{path:"/cart",element:a.jsx(xn,{children:a.jsx(lw,{})})}),a.jsx(_e,{path:"/checkout",element:a.jsx(xn,{children:a.jsx(dw,{})})}),a.jsx(_e,{path:"/orders",element:a.jsx(xn,{children:a.jsx(uw,{})})}),a.jsx(_e,{path:"/orders/:orderId",element:a.jsx(xn,{children:a.jsx(hw,{})})})]}),a.jsxs(_e,{path:"/admin",element:a.jsx(p4,{children:a.jsx(m4,{})}),children:[a.jsx(_e,{index:!0,element:a.jsx(I_,{})}),a.jsx(_e,{path:"products",element:a.jsx(h4,{})}),a.jsx(_e,{path:"users",element:a.jsx(f4,{})}),a.jsx(_e,{path:"orders",element:a.jsx(gw,{})})]})]})]})})})})}());
