function Qf(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const s=Object.getOwnPropertyDescriptor(n,a);s&&Object.defineProperty(e,a,s.get?s:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();function Fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Od={exports:{}},Na={},Md={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Gf=Symbol.for("react.fragment"),Zf=Symbol.for("react.strict_mode"),Jf=Symbol.for("react.profiler"),eh=Symbol.for("react.provider"),th=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),ih=Symbol.for("react.memo"),ah=Symbol.for("react.lazy"),Wl=Symbol.iterator;function sh(e){return e===null||typeof e!="object"?null:(e=Wl&&e[Wl]||e["@@iterator"],typeof e=="function"?e:null)}var Ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,Id={};function nn(e,t,r){this.props=e,this.context=t,this.refs=Id,this.updater=r||Ad}nn.prototype.isReactComponent={};nn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bd(){}Bd.prototype=nn.prototype;function Wo(e,t,r){this.props=e,this.context=t,this.refs=Id,this.updater=r||Ad}var $o=Wo.prototype=new Bd;$o.constructor=Wo;Dd($o,nn.prototype);$o.isPureReactComponent=!0;var $l=Array.isArray,Ud=Object.prototype.hasOwnProperty,Ho={current:null},Wd={key:!0,ref:!0,__self:!0,__source:!0};function $d(e,t,r){var n,a={},s=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Ud.call(t,n)&&!Wd.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)a[n]===void 0&&(a[n]=l[n]);return{$$typeof:Jn,type:e,key:s,ref:o,props:a,_owner:Ho.current}}function oh(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Hl=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lh(""+e.key):t.toString(36)}function Li(e,t,r,n,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jn:case Xf:o=!0}}if(o)return o=e,a=a(o),e=n===""?"."+Xa(o,0):n,$l(a)?(r="",e!=null&&(r=e.replace(Hl,"$&/")+"/"),Li(a,t,r,"",function(d){return d})):a!=null&&(Vo(a)&&(a=oh(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Hl,"$&/")+"/")+e)),t.push(a)),1;if(o=0,n=n===""?".":n+":",$l(e))for(var l=0;l<e.length;l++){s=e[l];var c=n+Xa(s,l);o+=Li(s,t,r,c,a)}else if(c=sh(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=n+Xa(s,l++),o+=Li(s,t,r,c,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pi(e,t,r){if(e==null)return e;var n=[],a=0;return Li(e,n,"","",function(s){return t.call(r,s,a++)}),n}function ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},Fi={transition:null},dh={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:Fi,ReactCurrentOwner:Ho};function Hd(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:pi,forEach:function(e,t,r){pi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=nn;Q.Fragment=Gf;Q.Profiler=Jf;Q.PureComponent=Wo;Q.StrictMode=Zf;Q.Suspense=nh;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dh;Q.act=Hd;Q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Dd({},e.props),a=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ho.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Ud.call(t,c)&&!Wd.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:Jn,type:e.type,key:a,ref:s,props:n,_owner:o}};Q.createContext=function(e){return e={$$typeof:th,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eh,_context:e},e.Consumer=e};Q.createElement=$d;Q.createFactory=function(e){var t=$d.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:rh,render:e}};Q.isValidElement=Vo;Q.lazy=function(e){return{$$typeof:ah,_payload:{_status:-1,_result:e},_init:ch}};Q.memo=function(e,t){return{$$typeof:ih,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Fi.transition;Fi.transition={};try{e()}finally{Fi.transition=t}};Q.unstable_act=Hd;Q.useCallback=function(e,t){return Ae.current.useCallback(e,t)};Q.useContext=function(e){return Ae.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ae.current.useEffect(e,t)};Q.useId=function(){return Ae.current.useId()};Q.useImperativeHandle=function(e,t,r){return Ae.current.useImperativeHandle(e,t,r)};Q.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ae.current.useMemo(e,t)};Q.useReducer=function(e,t,r){return Ae.current.useReducer(e,t,r)};Q.useRef=function(e){return Ae.current.useRef(e)};Q.useState=function(e){return Ae.current.useState(e)};Q.useSyncExternalStore=function(e,t,r){return Ae.current.useSyncExternalStore(e,t,r)};Q.useTransition=function(){return Ae.current.useTransition()};Q.version="18.3.1";Md.exports=Q;var v=Md.exports;const Vd=Fd(v),uh=Qf({__proto__:null,default:Vd},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=v,fh=Symbol.for("react.element"),hh=Symbol.for("react.fragment"),mh=Object.prototype.hasOwnProperty,gh=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xh={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,r){var n,a={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)mh.call(t,n)&&!xh.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:fh,type:e,key:s,ref:o,props:a,_owner:gh.current}}Na.Fragment=hh;Na.jsx=qd;Na.jsxs=qd;Od.exports=Na;var i=Od.exports,Cs={},Yd={exports:{}},Ze={},Kd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,S){var T=C.length;C.push(S);e:for(;0<T;){var q=T-1>>>1,H=C[q];if(0<a(H,S))C[q]=S,C[T]=H,T=q;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var S=C[0],T=C.pop();if(T!==S){C[0]=T;e:for(var q=0,H=C.length,je=H>>>1;q<je;){var ye=2*(q+1)-1,Fe=C[ye],Ie=ye+1,Cr=C[Ie];if(0>a(Fe,T))Ie<H&&0>a(Cr,Fe)?(C[q]=Cr,C[Ie]=T,q=Ie):(C[q]=Fe,C[ye]=T,q=ye);else if(Ie<H&&0>a(Cr,T))C[q]=Cr,C[Ie]=T,q=Ie;else break e}}return S}function a(C,S){var T=C.sortIndex-S.sortIndex;return T!==0?T:C.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,h=null,p=3,b=!1,m=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var S=r(d);S!==null;){if(S.callback===null)n(d);else if(S.startTime<=C)n(d),S.sortIndex=S.expirationTime,t(c,S);else break;S=r(d)}}function j(C){if(y=!1,g(C),!m)if(r(c)!==null)m=!0,D(k);else{var S=r(d);S!==null&&G(j,S.startTime-C)}}function k(C,S){m=!1,y&&(y=!1,x(R),R=-1),b=!0;var T=p;try{for(g(S),h=r(c);h!==null&&(!(h.expirationTime>S)||C&&!Y());){var q=h.callback;if(typeof q=="function"){h.callback=null,p=h.priorityLevel;var H=q(h.expirationTime<=S);S=e.unstable_now(),typeof H=="function"?h.callback=H:h===r(c)&&n(c),g(S)}else n(c);h=r(c)}if(h!==null)var je=!0;else{var ye=r(d);ye!==null&&G(j,ye.startTime-S),je=!1}return je}finally{h=null,p=T,b=!1}}var _=!1,P=null,R=-1,U=5,O=-1;function Y(){return!(e.unstable_now()-O<U)}function B(){if(P!==null){var C=e.unstable_now();O=C;var S=!0;try{S=P(!0,C)}finally{S?oe():(_=!1,P=null)}}else _=!1}var oe;if(typeof u=="function")oe=function(){u(B)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,F=ve.port2;ve.port1.onmessage=B,oe=function(){F.postMessage(null)}}else oe=function(){w(B,0)};function D(C){P=C,_||(_=!0,oe())}function G(C,S){R=w(function(){C(e.unstable_now())},S)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){m||b||(m=!0,D(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var S=3;break;default:S=p}var T=p;p=S;try{return C()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,S){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=p;p=C;try{return S()}finally{p=T}},e.unstable_scheduleCallback=function(C,S,T){var q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?q+T:q):T=q,C){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=T+H,C={id:f++,callback:S,priorityLevel:C,startTime:T,expirationTime:H,sortIndex:-1},T>q?(C.sortIndex=T,t(d,C),r(c)===null&&C===r(d)&&(y?(x(R),R=-1):y=!0,G(j,T-q))):(C.sortIndex=H,t(c,C),m||b||(m=!0,D(k))),C},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(C){var S=p;return function(){var T=p;p=S;try{return C.apply(this,arguments)}finally{p=T}}}})(Qd);Kd.exports=Qd;var vh=Kd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=v,Ge=vh;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xd=new Set,Fn={};function Nr(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Fn[e]=t,e=0;e<t.length;e++)Xd.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=Object.prototype.hasOwnProperty,bh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vl={},ql={};function wh(e){return Es.call(ql,e)?!0:Es.call(Vl,e)?!1:bh.test(e)?ql[e]=!0:(Vl[e]=!0,!1)}function jh(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kh(e,t,r,n){if(t===null||typeof t>"u"||jh(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,r,n,a,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function Yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qo,Yo);_e[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qo,Yo);_e[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qo,Yo);_e[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,r,n){var a=_e.hasOwnProperty(t)?_e[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kh(t,r,a,n)&&(r=null),n||a===null?wh(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ft=yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Pr=Symbol.for("react.fragment"),Qo=Symbol.for("react.strict_mode"),_s=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Rs=Symbol.for("react.suspense"),Ps=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Jd=Symbol.for("react.offscreen"),Yl=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Yl&&e[Yl]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Ga;function wn(e){if(Ga===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ga=t&&t[1]||""}return`
`+Ga+e}var Za=!1;function Ja(e,t){if(!e||Za)return"";Za=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=n.stack.split(`
`),o=a.length-1,l=s.length-1;1<=o&&0<=l&&a[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==s[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Za=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?wn(e):""}function Nh(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Ja(e.type,!1),e;case 11:return e=Ja(e.type.render,!1),e;case 1:return e=Ja(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pr:return"Fragment";case Rr:return"Portal";case _s:return"Profiler";case Qo:return"StrictMode";case Rs:return"Suspense";case Ps:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zd:return(e.displayName||"Context")+".Consumer";case Gd:return(e._context.displayName||"Context")+".Provider";case Xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function Sh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===Qo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ch(e){var t=eu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=Ch(e))}function tu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=eu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ts(e,t){var r=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Kl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=rr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function Ls(e,t){ru(e,t);var r=rr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fs(e,t.type,r):t.hasOwnProperty("defaultValue")&&Fs(e,t.type,rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ql(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Fs(e,t,r){(t!=="number"||Gi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var jn=Array.isArray;function Ur(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+rr(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Os(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(z(92));if(jn(r)){if(1<r.length)throw Error(z(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:rr(r)}}function nu(e,t){var r=rr(t.value),n=rr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Gl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Eh=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Eh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function su(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function ou(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=su(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var _h=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,t){if(t){if(_h[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Ds(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Is=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Wr=null,$r=null;function Zl(e){if(e=ri(e)){if(typeof Bs!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Ra(t),Bs(e.stateNode,e.type,t))}}function lu(e){Wr?$r?$r.push(e):$r=[e]:Wr=e}function cu(){if(Wr){var e=Wr,t=$r;if($r=Wr=null,Zl(e),t)for(e=0;e<t.length;e++)Zl(t[e])}}function du(e,t){return e(t)}function uu(){}var es=!1;function pu(e,t,r){if(es)return e(t,r);es=!0;try{return du(e,t,r)}finally{es=!1,(Wr!==null||$r!==null)&&(uu(),cu())}}function Mn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ra(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(z(231,t,typeof r));return r}var Us=!1;if(Pt)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{Us=!1}function Rh(e,t,r,n,a,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(f){this.onError(f)}}var Cn=!1,Zi=null,Ji=!1,Ws=null,Ph={onError:function(e){Cn=!0,Zi=e}};function zh(e,t,r,n,a,s,o,l,c){Cn=!1,Zi=null,Rh.apply(Ph,arguments)}function Th(e,t,r,n,a,s,o,l,c){if(zh.apply(this,arguments),Cn){if(Cn){var d=Zi;Cn=!1,Zi=null}else throw Error(z(198));Ji||(Ji=!0,Ws=d)}}function Sr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jl(e){if(Sr(e)!==e)throw Error(z(188))}function Lh(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return Jl(a),e;if(s===n)return Jl(a),t;s=s.sibling}throw Error(z(188))}if(r.return!==n.return)r=a,n=s;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,n=s;break}if(l===n){o=!0,n=a,r=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===r){o=!0,r=s,n=a;break}if(l===n){o=!0,n=s,r=a;break}l=l.sibling}if(!o)throw Error(z(189))}}if(r.alternate!==n)throw Error(z(190))}if(r.tag!==3)throw Error(z(188));return r.stateNode.current===r?e:t}function hu(e){return e=Lh(e),e!==null?mu(e):null}function mu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mu(e);if(t!==null)return t;e=e.sibling}return null}var gu=Ge.unstable_scheduleCallback,ec=Ge.unstable_cancelCallback,Fh=Ge.unstable_shouldYield,Oh=Ge.unstable_requestPaint,me=Ge.unstable_now,Mh=Ge.unstable_getCurrentPriorityLevel,Jo=Ge.unstable_ImmediatePriority,xu=Ge.unstable_UserBlockingPriority,ea=Ge.unstable_NormalPriority,Ah=Ge.unstable_LowPriority,vu=Ge.unstable_IdlePriority,Sa=null,wt=null;function Dh(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Sa,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Uh,Ih=Math.log,Bh=Math.LN2;function Uh(e){return e>>>=0,e===0?32:31-(Ih(e)/Bh|0)|0}var gi=64,xi=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?n=kn(l):(s&=o,s!==0&&(n=kn(s)))}else o=r&~a,o!==0?n=kn(o):s!==0&&(n=kn(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ut(t),a=1<<r,n|=e[r],t&=~a;return n}function Wh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $h(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,c=a[o];c===-1?(!(l&r)||l&n)&&(a[o]=Wh(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function $s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function ts(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ei(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=r}function Hh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-ut(r),s=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~s}}function el(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ut(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var ee=0;function bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wu,tl,ju,ku,Nu,Hs=!1,vi=[],Yt=null,Kt=null,Qt=null,An=new Map,Dn=new Map,Wt=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function fn(e,t,r,n,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[a]},t!==null&&(t=ri(t),t!==null&&tl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function qh(e,t,r,n,a){switch(t){case"focusin":return Yt=fn(Yt,e,t,r,n,a),!0;case"dragenter":return Kt=fn(Kt,e,t,r,n,a),!0;case"mouseover":return Qt=fn(Qt,e,t,r,n,a),!0;case"pointerover":var s=a.pointerId;return An.set(s,fn(An.get(s)||null,e,t,r,n,a)),!0;case"gotpointercapture":return s=a.pointerId,Dn.set(s,fn(Dn.get(s)||null,e,t,r,n,a)),!0}return!1}function Su(e){var t=ur(e.target);if(t!==null){var r=Sr(t);if(r!==null){if(t=r.tag,t===13){if(t=fu(r),t!==null){e.blockedOn=t,Nu(e.priority,function(){ju(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Is=n,r.target.dispatchEvent(n),Is=null}else return t=ri(r),t!==null&&tl(t),e.blockedOn=r,!1;t.shift()}return!0}function rc(e,t,r){Oi(e)&&r.delete(t)}function Yh(){Hs=!1,Yt!==null&&Oi(Yt)&&(Yt=null),Kt!==null&&Oi(Kt)&&(Kt=null),Qt!==null&&Oi(Qt)&&(Qt=null),An.forEach(rc),Dn.forEach(rc)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Hs||(Hs=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Yh)))}function In(e){function t(a){return hn(a,e)}if(0<vi.length){hn(vi[0],e);for(var r=1;r<vi.length;r++){var n=vi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Yt!==null&&hn(Yt,e),Kt!==null&&hn(Kt,e),Qt!==null&&hn(Qt,e),An.forEach(t),Dn.forEach(t),r=0;r<Wt.length;r++)n=Wt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Wt.length&&(r=Wt[0],r.blockedOn===null);)Su(r),r.blockedOn===null&&Wt.shift()}var Hr=Ft.ReactCurrentBatchConfig,ra=!0;function Kh(e,t,r,n){var a=ee,s=Hr.transition;Hr.transition=null;try{ee=1,rl(e,t,r,n)}finally{ee=a,Hr.transition=s}}function Qh(e,t,r,n){var a=ee,s=Hr.transition;Hr.transition=null;try{ee=4,rl(e,t,r,n)}finally{ee=a,Hr.transition=s}}function rl(e,t,r,n){if(ra){var a=Vs(e,t,r,n);if(a===null)us(e,t,n,na,r),tc(e,n);else if(qh(a,e,t,r,n))n.stopPropagation();else if(tc(e,n),t&4&&-1<Vh.indexOf(e)){for(;a!==null;){var s=ri(a);if(s!==null&&wu(s),s=Vs(e,t,r,n),s===null&&us(e,t,n,na,r),s===a)break;a=s}a!==null&&n.stopPropagation()}else us(e,t,n,null,r)}}var na=null;function Vs(e,t,r,n){if(na=null,e=Zo(n),e=ur(e),e!==null)if(t=Sr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=fu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return na=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mh()){case Jo:return 1;case xu:return 4;case ea:case Ah:return 16;case vu:return 536870912;default:return 16}default:return 16}}var Ht=null,nl=null,Mi=null;function Eu(){if(Mi)return Mi;var e,t=nl,r=t.length,n,a="value"in Ht?Ht.value:Ht.textContent,s=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===a[s-n];n++);return Mi=a.slice(e,1<n?1-n:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function nc(){return!1}function Je(e){function t(r,n,a,s,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yi:nc,this.isPropagationStopped=nc,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Je(an),ti=fe({},an,{view:0,detail:0}),Xh=Je(ti),rs,ns,mn,Ca=fe({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(rs=e.screenX-mn.screenX,ns=e.screenY-mn.screenY):ns=rs=0,mn=e),rs)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),ic=Je(Ca),Gh=fe({},Ca,{dataTransfer:0}),Zh=Je(Gh),Jh=fe({},ti,{relatedTarget:0}),is=Je(Jh),em=fe({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),tm=Je(em),rm=fe({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Je(rm),im=fe({},an,{data:0}),ac=Je(im),am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function al(){return lm}var cm=fe({},ti,{key:function(e){if(e.key){var t=am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Je(cm),um=fe({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=Je(um),pm=fe({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),fm=Je(pm),hm=fe({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=Je(hm),gm=fe({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xm=Je(gm),vm=[9,13,27,32],sl=Pt&&"CompositionEvent"in window,En=null;Pt&&"documentMode"in document&&(En=document.documentMode);var ym=Pt&&"TextEvent"in window&&!En,_u=Pt&&(!sl||En&&8<En&&11>=En),oc=" ",lc=!1;function Ru(e,t){switch(e){case"keyup":return vm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function bm(e,t){switch(e){case"compositionend":return Pu(t);case"keypress":return t.which!==32?null:(lc=!0,oc);case"textInput":return e=t.data,e===oc&&lc?null:e;default:return null}}function wm(e,t){if(zr)return e==="compositionend"||!sl&&Ru(e,t)?(e=Eu(),Mi=nl=Ht=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jm[e.type]:t==="textarea"}function zu(e,t,r,n){lu(n),t=ia(t,"onChange"),0<t.length&&(r=new il("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var _n=null,Bn=null;function km(e){Wu(e,0)}function Ea(e){var t=Fr(e);if(tu(t))return e}function Nm(e,t){if(e==="change")return t}var Tu=!1;if(Pt){var as;if(Pt){var ss="oninput"in document;if(!ss){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),ss=typeof dc.oninput=="function"}as=ss}else as=!1;Tu=as&&(!document.documentMode||9<document.documentMode)}function uc(){_n&&(_n.detachEvent("onpropertychange",Lu),Bn=_n=null)}function Lu(e){if(e.propertyName==="value"&&Ea(Bn)){var t=[];zu(t,Bn,e,Zo(e)),pu(km,t)}}function Sm(e,t,r){e==="focusin"?(uc(),_n=t,Bn=r,_n.attachEvent("onpropertychange",Lu)):e==="focusout"&&uc()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ea(Bn)}function Em(e,t){if(e==="click")return Ea(t)}function _m(e,t){if(e==="input"||e==="change")return Ea(t)}function Rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Rm;function Un(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Es.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fc(e,t){var r=pc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=pc(r)}}function Fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Gi(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pm(e){var t=Ou(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Fu(r.ownerDocument.documentElement,r)){if(n!==null&&ol(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,s=Math.min(n.start,a);n=n.end===void 0?s:Math.min(n.end,a),!e.extend&&s>n&&(a=n,n=s,s=a),a=fc(r,s);var o=fc(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zm=Pt&&"documentMode"in document&&11>=document.documentMode,Tr=null,qs=null,Rn=null,Ys=!1;function hc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ys||Tr==null||Tr!==Gi(n)||(n=Tr,"selectionStart"in n&&ol(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Rn&&Un(Rn,n)||(Rn=n,n=ia(qs,"onSelect"),0<n.length&&(t=new il("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Tr)))}function bi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Lr={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},os={},Mu={};Pt&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function _a(e){if(os[e])return os[e];if(!Lr[e])return e;var t=Lr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Mu)return os[e]=t[r];return e}var Au=_a("animationend"),Du=_a("animationiteration"),Iu=_a("animationstart"),Bu=_a("transitionend"),Uu=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){Uu.set(e,t),Nr(t,[e])}for(var ls=0;ls<mc.length;ls++){var cs=mc[ls],Tm=cs.toLowerCase(),Lm=cs[0].toUpperCase()+cs.slice(1);ir(Tm,"on"+Lm)}ir(Au,"onAnimationEnd");ir(Du,"onAnimationIteration");ir(Iu,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Bu,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function gc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Th(n,t,void 0,e),e.currentTarget=null}function Wu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var l=n[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&a.isPropagationStopped())break e;gc(a,l,d),s=c}else for(o=0;o<n.length;o++){if(l=n[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&a.isPropagationStopped())break e;gc(a,l,d),s=c}}}if(Ji)throw e=Ws,Ji=!1,Ws=null,e}function ae(e,t){var r=t[Zs];r===void 0&&(r=t[Zs]=new Set);var n=e+"__bubble";r.has(n)||($u(t,e,2,!1),r.add(n))}function ds(e,t,r){var n=0;t&&(n|=4),$u(r,e,n,t)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[wi]){e[wi]=!0,Xd.forEach(function(r){r!=="selectionchange"&&(Fm.has(r)||ds(r,!1,e),ds(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wi]||(t[wi]=!0,ds("selectionchange",!1,t))}}function $u(e,t,r,n){switch(Cu(t)){case 1:var a=Kh;break;case 4:a=Qh;break;default:a=rl}r=a.bind(null,t,r,e),a=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function us(e,t,r,n,a){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=ur(l),o===null)return;if(c=o.tag,c===5||c===6){n=s=o;continue e}l=l.parentNode}}n=n.return}pu(function(){var d=s,f=Zo(r),h=[];e:{var p=Uu.get(e);if(p!==void 0){var b=il,m=e;switch(e){case"keypress":if(Ai(r)===0)break e;case"keydown":case"keyup":b=dm;break;case"focusin":m="focus",b=is;break;case"focusout":m="blur",b=is;break;case"beforeblur":case"afterblur":b=is;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=fm;break;case Au:case Du:case Iu:b=tm;break;case Bu:b=mm;break;case"scroll":b=Xh;break;case"wheel":b=xm;break;case"copy":case"cut":case"paste":b=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=sc}var y=(t&4)!==0,w=!y&&e==="scroll",x=y?p!==null?p+"Capture":null:p;y=[];for(var u=d,g;u!==null;){g=u;var j=g.stateNode;if(g.tag===5&&j!==null&&(g=j,x!==null&&(j=Mn(u,x),j!=null&&y.push($n(u,j,g)))),w)break;u=u.return}0<y.length&&(p=new b(p,m,null,r,f),h.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&r!==Is&&(m=r.relatedTarget||r.fromElement)&&(ur(m)||m[zt]))break e;if((b||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,b?(m=r.relatedTarget||r.toElement,b=d,m=m?ur(m):null,m!==null&&(w=Sr(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(b=null,m=d),b!==m)){if(y=ic,j="onMouseLeave",x="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=sc,j="onPointerLeave",x="onPointerEnter",u="pointer"),w=b==null?p:Fr(b),g=m==null?p:Fr(m),p=new y(j,u+"leave",b,r,f),p.target=w,p.relatedTarget=g,j=null,ur(f)===d&&(y=new y(x,u+"enter",m,r,f),y.target=g,y.relatedTarget=w,j=y),w=j,b&&m)t:{for(y=b,x=m,u=0,g=y;g;g=Er(g))u++;for(g=0,j=x;j;j=Er(j))g++;for(;0<u-g;)y=Er(y),u--;for(;0<g-u;)x=Er(x),g--;for(;u--;){if(y===x||x!==null&&y===x.alternate)break t;y=Er(y),x=Er(x)}y=null}else y=null;b!==null&&xc(h,p,b,y,!1),m!==null&&w!==null&&xc(h,w,m,y,!0)}}e:{if(p=d?Fr(d):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var k=Nm;else if(cc(p))if(Tu)k=_m;else{k=Cm;var _=Sm}else(b=p.nodeName)&&b.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=Em);if(k&&(k=k(e,d))){zu(h,k,r,f);break e}_&&_(e,p,d),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Fs(p,"number",p.value)}switch(_=d?Fr(d):window,e){case"focusin":(cc(_)||_.contentEditable==="true")&&(Tr=_,qs=d,Rn=null);break;case"focusout":Rn=qs=Tr=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,hc(h,r,f);break;case"selectionchange":if(zm)break;case"keydown":case"keyup":hc(h,r,f)}var P;if(sl)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else zr?Ru(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(_u&&r.locale!=="ko"&&(zr||R!=="onCompositionStart"?R==="onCompositionEnd"&&zr&&(P=Eu()):(Ht=f,nl="value"in Ht?Ht.value:Ht.textContent,zr=!0)),_=ia(d,R),0<_.length&&(R=new ac(R,e,null,r,f),h.push({event:R,listeners:_}),P?R.data=P:(P=Pu(r),P!==null&&(R.data=P)))),(P=ym?bm(e,r):wm(e,r))&&(d=ia(d,"onBeforeInput"),0<d.length&&(f=new ac("onBeforeInput","beforeinput",null,r,f),h.push({event:f,listeners:d}),f.data=P))}Wu(h,t)})}function $n(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ia(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Mn(e,r),s!=null&&n.unshift($n(e,s,a)),s=Mn(e,t),s!=null&&n.push($n(e,s,a))),e=e.return}return n}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,t,r,n,a){for(var s=t._reactName,o=[];r!==null&&r!==n;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&d!==null&&(l=d,a?(c=Mn(r,s),c!=null&&o.unshift($n(r,c,l))):a||(c=Mn(r,s),c!=null&&o.push($n(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Om=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(Om,`
`).replace(Mm,"")}function ji(e,t,r){if(t=vc(t),vc(e)!==t&&r)throw Error(z(425))}function aa(){}var Ks=null,Qs=null;function Xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gs=typeof setTimeout=="function"?setTimeout:void 0,Am=typeof clearTimeout=="function"?clearTimeout:void 0,yc=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof yc<"u"?function(e){return yc.resolve(null).then(e).catch(Im)}:Gs;function Im(e){setTimeout(function(){throw e})}function ps(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),In(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);In(t)}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),bt="__reactFiber$"+sn,Hn="__reactProps$"+sn,zt="__reactContainer$"+sn,Zs="__reactEvents$"+sn,Bm="__reactListeners$"+sn,Um="__reactHandles$"+sn;function ur(e){var t=e[bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[zt]||r[bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=bc(e);e!==null;){if(r=e[bt])return r;e=bc(e)}return t}e=r,r=e.parentNode}return null}function ri(e){return e=e[bt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Ra(e){return e[Hn]||null}var Js=[],Or=-1;function ar(e){return{current:e}}function se(e){0>Or||(e.current=Js[Or],Js[Or]=null,Or--)}function ne(e,t){Or++,Js[Or]=e.current,e.current=t}var nr={},Le=ar(nr),$e=ar(!1),vr=nr;function Kr(e,t){var r=e.type.contextTypes;if(!r)return nr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function He(e){return e=e.childContextTypes,e!=null}function sa(){se($e),se(Le)}function wc(e,t,r){if(Le.current!==nr)throw Error(z(168));ne(Le,t),ne($e,r)}function Hu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(z(108,Sh(e)||"Unknown",a));return fe({},r,n)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,vr=Le.current,ne(Le,e),ne($e,$e.current),!0}function jc(e,t,r){var n=e.stateNode;if(!n)throw Error(z(169));r?(e=Hu(e,t,vr),n.__reactInternalMemoizedMergedChildContext=e,se($e),se(Le),ne(Le,e)):se($e),ne($e,r)}var Ct=null,Pa=!1,fs=!1;function Vu(e){Ct===null?Ct=[e]:Ct.push(e)}function Wm(e){Pa=!0,Vu(e)}function sr(){if(!fs&&Ct!==null){fs=!0;var e=0,t=ee;try{var r=Ct;for(ee=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ct=null,Pa=!1}catch(a){throw Ct!==null&&(Ct=Ct.slice(e+1)),gu(Jo,sr),a}finally{ee=t,fs=!1}}return null}var Mr=[],Ar=0,la=null,ca=0,et=[],tt=0,yr=null,Et=1,_t="";function lr(e,t){Mr[Ar++]=ca,Mr[Ar++]=la,la=e,ca=t}function qu(e,t,r){et[tt++]=Et,et[tt++]=_t,et[tt++]=yr,yr=e;var n=Et;e=_t;var a=32-ut(n)-1;n&=~(1<<a),r+=1;var s=32-ut(t)+a;if(30<s){var o=a-a%5;s=(n&(1<<o)-1).toString(32),n>>=o,a-=o,Et=1<<32-ut(t)+a|r<<a|n,_t=s+e}else Et=1<<s|r<<a|n,_t=e}function ll(e){e.return!==null&&(lr(e,1),qu(e,1,0))}function cl(e){for(;e===la;)la=Mr[--Ar],Mr[Ar]=null,ca=Mr[--Ar],Mr[Ar]=null;for(;e===yr;)yr=et[--tt],et[tt]=null,_t=et[--tt],et[tt]=null,Et=et[--tt],et[tt]=null}var Xe=null,Qe=null,le=!1,dt=null;function Yu(e,t){var r=rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function kc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=Xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=yr!==null?{id:Et,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Xe=e,Qe=null,!0):!1;default:return!1}}function eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function to(e){if(le){var t=Qe;if(t){var r=t;if(!kc(e,t)){if(eo(e))throw Error(z(418));t=Xt(r.nextSibling);var n=Xe;t&&kc(e,t)?Yu(n,r):(e.flags=e.flags&-4097|2,le=!1,Xe=e)}}else{if(eo(e))throw Error(z(418));e.flags=e.flags&-4097|2,le=!1,Xe=e}}}function Nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function ki(e){if(e!==Xe)return!1;if(!le)return Nc(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xs(e.type,e.memoizedProps)),t&&(t=Qe)){if(eo(e))throw Ku(),Error(z(418));for(;t;)Yu(e,t),t=Xt(t.nextSibling)}if(Nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=Xt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Xe?Xt(e.stateNode.nextSibling):null;return!0}function Ku(){for(var e=Qe;e;)e=Xt(e.nextSibling)}function Qr(){Qe=Xe=null,le=!1}function dl(e){dt===null?dt=[e]:dt.push(e)}var $m=Ft.ReactCurrentBatchConfig;function gn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(z(309));var n=r.stateNode}if(!n)throw Error(z(147,e));var a=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=a.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(z(284));if(!r._owner)throw Error(z(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sc(e){var t=e._init;return t(e._payload)}function Qu(e){function t(x,u){if(e){var g=x.deletions;g===null?(x.deletions=[u],x.flags|=16):g.push(u)}}function r(x,u){if(!e)return null;for(;u!==null;)t(x,u),u=u.sibling;return null}function n(x,u){for(x=new Map;u!==null;)u.key!==null?x.set(u.key,u):x.set(u.index,u),u=u.sibling;return x}function a(x,u){return x=er(x,u),x.index=0,x.sibling=null,x}function s(x,u,g){return x.index=g,e?(g=x.alternate,g!==null?(g=g.index,g<u?(x.flags|=2,u):g):(x.flags|=2,u)):(x.flags|=1048576,u)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,u,g,j){return u===null||u.tag!==6?(u=bs(g,x.mode,j),u.return=x,u):(u=a(u,g),u.return=x,u)}function c(x,u,g,j){var k=g.type;return k===Pr?f(x,u,g.props.children,j,g.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bt&&Sc(k)===u.type)?(j=a(u,g.props),j.ref=gn(x,u,g),j.return=x,j):(j=Hi(g.type,g.key,g.props,null,x.mode,j),j.ref=gn(x,u,g),j.return=x,j)}function d(x,u,g,j){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=ws(g,x.mode,j),u.return=x,u):(u=a(u,g.children||[]),u.return=x,u)}function f(x,u,g,j,k){return u===null||u.tag!==7?(u=gr(g,x.mode,j,k),u.return=x,u):(u=a(u,g),u.return=x,u)}function h(x,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=bs(""+u,x.mode,g),u.return=x,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case fi:return g=Hi(u.type,u.key,u.props,null,x.mode,g),g.ref=gn(x,null,u),g.return=x,g;case Rr:return u=ws(u,x.mode,g),u.return=x,u;case Bt:var j=u._init;return h(x,j(u._payload),g)}if(jn(u)||un(u))return u=gr(u,x.mode,g,null),u.return=x,u;Ni(x,u)}return null}function p(x,u,g,j){var k=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(x,u,""+g,j);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fi:return g.key===k?c(x,u,g,j):null;case Rr:return g.key===k?d(x,u,g,j):null;case Bt:return k=g._init,p(x,u,k(g._payload),j)}if(jn(g)||un(g))return k!==null?null:f(x,u,g,j,null);Ni(x,g)}return null}function b(x,u,g,j,k){if(typeof j=="string"&&j!==""||typeof j=="number")return x=x.get(g)||null,l(u,x,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case fi:return x=x.get(j.key===null?g:j.key)||null,c(u,x,j,k);case Rr:return x=x.get(j.key===null?g:j.key)||null,d(u,x,j,k);case Bt:var _=j._init;return b(x,u,g,_(j._payload),k)}if(jn(j)||un(j))return x=x.get(g)||null,f(u,x,j,k,null);Ni(u,j)}return null}function m(x,u,g,j){for(var k=null,_=null,P=u,R=u=0,U=null;P!==null&&R<g.length;R++){P.index>R?(U=P,P=null):U=P.sibling;var O=p(x,P,g[R],j);if(O===null){P===null&&(P=U);break}e&&P&&O.alternate===null&&t(x,P),u=s(O,u,R),_===null?k=O:_.sibling=O,_=O,P=U}if(R===g.length)return r(x,P),le&&lr(x,R),k;if(P===null){for(;R<g.length;R++)P=h(x,g[R],j),P!==null&&(u=s(P,u,R),_===null?k=P:_.sibling=P,_=P);return le&&lr(x,R),k}for(P=n(x,P);R<g.length;R++)U=b(P,x,R,g[R],j),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?R:U.key),u=s(U,u,R),_===null?k=U:_.sibling=U,_=U);return e&&P.forEach(function(Y){return t(x,Y)}),le&&lr(x,R),k}function y(x,u,g,j){var k=un(g);if(typeof k!="function")throw Error(z(150));if(g=k.call(g),g==null)throw Error(z(151));for(var _=k=null,P=u,R=u=0,U=null,O=g.next();P!==null&&!O.done;R++,O=g.next()){P.index>R?(U=P,P=null):U=P.sibling;var Y=p(x,P,O.value,j);if(Y===null){P===null&&(P=U);break}e&&P&&Y.alternate===null&&t(x,P),u=s(Y,u,R),_===null?k=Y:_.sibling=Y,_=Y,P=U}if(O.done)return r(x,P),le&&lr(x,R),k;if(P===null){for(;!O.done;R++,O=g.next())O=h(x,O.value,j),O!==null&&(u=s(O,u,R),_===null?k=O:_.sibling=O,_=O);return le&&lr(x,R),k}for(P=n(x,P);!O.done;R++,O=g.next())O=b(P,x,R,O.value,j),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?R:O.key),u=s(O,u,R),_===null?k=O:_.sibling=O,_=O);return e&&P.forEach(function(B){return t(x,B)}),le&&lr(x,R),k}function w(x,u,g,j){if(typeof g=="object"&&g!==null&&g.type===Pr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fi:e:{for(var k=g.key,_=u;_!==null;){if(_.key===k){if(k=g.type,k===Pr){if(_.tag===7){r(x,_.sibling),u=a(_,g.props.children),u.return=x,x=u;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bt&&Sc(k)===_.type){r(x,_.sibling),u=a(_,g.props),u.ref=gn(x,_,g),u.return=x,x=u;break e}r(x,_);break}else t(x,_);_=_.sibling}g.type===Pr?(u=gr(g.props.children,x.mode,j,g.key),u.return=x,x=u):(j=Hi(g.type,g.key,g.props,null,x.mode,j),j.ref=gn(x,u,g),j.return=x,x=j)}return o(x);case Rr:e:{for(_=g.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){r(x,u.sibling),u=a(u,g.children||[]),u.return=x,x=u;break e}else{r(x,u);break}else t(x,u);u=u.sibling}u=ws(g,x.mode,j),u.return=x,x=u}return o(x);case Bt:return _=g._init,w(x,u,_(g._payload),j)}if(jn(g))return m(x,u,g,j);if(un(g))return y(x,u,g,j);Ni(x,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(r(x,u.sibling),u=a(u,g),u.return=x,x=u):(r(x,u),u=bs(g,x.mode,j),u.return=x,x=u),o(x)):r(x,u)}return w}var Xr=Qu(!0),Xu=Qu(!1),da=ar(null),ua=null,Dr=null,ul=null;function pl(){ul=Dr=ua=null}function fl(e){var t=da.current;se(da),e._currentValue=t}function ro(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Vr(e,t){ua=e,ul=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(ua===null)throw Error(z(308));Dr=e,ua.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var pr=null;function hl(e){pr===null?pr=[e]:pr.push(e)}function Gu(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,hl(t)):(r.next=a.next,a.next=r),t.interleaved=r,Tt(e,n)}function Tt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ut=!1;function ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,X&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Tt(e,r)}return a=n.interleaved,a===null?(t.next=t,hl(n)):(t.next=a.next,a.next=t),n.interleaved=t,Tt(e,r)}function Di(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,el(e,r)}}function Cc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function pa(e,t,r,n){var a=e.updateQueue;Ut=!1;var s=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(s!==null){var h=a.baseState;o=0,f=d=c=null,l=s;do{var p=l.lane,b=l.eventTime;if((n&p)===p){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,y=l;switch(p=t,b=r,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(b,h,p);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,p=typeof m=="function"?m.call(b,h,p):m,p==null)break e;h=fe({},h,p);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[l]:p.push(l))}else b={eventTime:b,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=b,c=h):f=f.next=b,o|=p;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;p=l,l=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(f===null&&(c=h),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);wr|=o,e.lanes=o,e.memoizedState=h}}function Ec(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(z(191,a));a.call(n)}}}var ni={},jt=ar(ni),Vn=ar(ni),qn=ar(ni);function fr(e){if(e===ni)throw Error(z(174));return e}function gl(e,t){switch(ne(qn,t),ne(Vn,e),ne(jt,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ms(t,e)}se(jt),ne(jt,t)}function Gr(){se(jt),se(Vn),se(qn)}function Ju(e){fr(qn.current);var t=fr(jt.current),r=Ms(t,e.type);t!==r&&(ne(Vn,e),ne(jt,r))}function xl(e){Vn.current===e&&(se(jt),se(Vn))}var de=ar(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hs=[];function vl(){for(var e=0;e<hs.length;e++)hs[e]._workInProgressVersionPrimary=null;hs.length=0}var Ii=Ft.ReactCurrentDispatcher,ms=Ft.ReactCurrentBatchConfig,br=0,ue=null,be=null,Ne=null,ha=!1,Pn=!1,Yn=0,Hm=0;function Re(){throw Error(z(321))}function yl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ft(e[r],t[r]))return!1;return!0}function bl(e,t,r,n,a,s){if(br=s,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?Km:Qm,e=r(n,a),Pn){s=0;do{if(Pn=!1,Yn=0,25<=s)throw Error(z(301));s+=1,Ne=be=null,t.updateQueue=null,Ii.current=Xm,e=r(n,a)}while(Pn)}if(Ii.current=ma,t=be!==null&&be.next!==null,br=0,Ne=be=ue=null,ha=!1,t)throw Error(z(300));return e}function wl(){var e=Yn!==0;return Yn=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function at(){if(be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ne===null?ue.memoizedState:Ne.next;if(t!==null)Ne=t,be=e;else{if(e===null)throw Error(z(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ne===null?ue.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Kn(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=at(),r=t.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var n=be,a=n.baseQueue,s=r.pending;if(s!==null){if(a!==null){var o=a.next;a.next=s.next,s.next=o}n.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,n=n.baseState;var l=o=null,c=null,d=s;do{var f=d.lane;if((br&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=h,o=n):c=c.next=h,ue.lanes|=f,wr|=f}d=d.next}while(d!==null&&d!==s);c===null?o=n:c.next=l,ft(n,t.memoizedState)||(We=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do s=a.lane,ue.lanes|=s,wr|=s,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function xs(e){var t=at(),r=t.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do s=e(s,o.action),o=o.next;while(o!==a);ft(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function ep(){}function tp(e,t){var r=ue,n=at(),a=t(),s=!ft(n.memoizedState,a);if(s&&(n.memoizedState=a,We=!0),n=n.queue,jl(ip.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Ne!==null&&Ne.memoizedState.tag&1){if(r.flags|=2048,Qn(9,np.bind(null,r,n,a,t),void 0,null),Se===null)throw Error(z(349));br&30||rp(r,t,a)}return a}function rp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function np(e,t,r,n){t.value=r,t.getSnapshot=n,ap(t)&&sp(e)}function ip(e,t,r){return r(function(){ap(t)&&sp(e)})}function ap(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ft(e,r)}catch{return!0}}function sp(e){var t=Tt(e,1);t!==null&&pt(t,e,1,-1)}function _c(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=Ym.bind(null,ue,e),[t.memoizedState,e]}function Qn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function op(){return at().memoizedState}function Bi(e,t,r,n){var a=vt();ue.flags|=e,a.memoizedState=Qn(1|t,r,void 0,n===void 0?null:n)}function za(e,t,r,n){var a=at();n=n===void 0?null:n;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,n!==null&&yl(n,o.deps)){a.memoizedState=Qn(t,r,s,n);return}}ue.flags|=e,a.memoizedState=Qn(1|t,r,s,n)}function Rc(e,t){return Bi(8390656,8,e,t)}function jl(e,t){return za(2048,8,e,t)}function lp(e,t){return za(4,2,e,t)}function cp(e,t){return za(4,4,e,t)}function dp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function up(e,t,r){return r=r!=null?r.concat([e]):null,za(4,4,dp.bind(null,t,e),r)}function kl(){}function pp(e,t){var r=at();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function fp(e,t){var r=at();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function hp(e,t,r){return br&21?(ft(r,t)||(r=yu(),ue.lanes|=r,wr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=r)}function Vm(e,t){var r=ee;ee=r!==0&&4>r?r:4,e(!0);var n=ms.transition;ms.transition={};try{e(!1),t()}finally{ee=r,ms.transition=n}}function mp(){return at().memoizedState}function qm(e,t,r){var n=Jt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},gp(e))xp(t,r);else if(r=Gu(e,t,r,n),r!==null){var a=Me();pt(r,e,n,a),vp(r,t,n)}}function Ym(e,t,r){var n=Jt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(gp(e))xp(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,r);if(a.hasEagerState=!0,a.eagerState=l,ft(l,o)){var c=t.interleaved;c===null?(a.next=a,hl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=Gu(e,t,a,n),r!==null&&(a=Me(),pt(r,e,n,a),vp(r,t,n))}}function gp(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function xp(e,t){Pn=ha=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function vp(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,el(e,r)}}var ma={readContext:it,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Km={readContext:it,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Rc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Bi(4194308,4,dp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var r=vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=vt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=qm.bind(null,ue,e),[n.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:kl,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=Vm.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ue,a=vt();if(le){if(r===void 0)throw Error(z(407));r=r()}else{if(r=t(),Se===null)throw Error(z(349));br&30||rp(n,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,Rc(ip.bind(null,n,s,e),[e]),n.flags|=2048,Qn(9,np.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=vt(),t=Se.identifierPrefix;if(le){var r=_t,n=Et;r=(n&~(1<<32-ut(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Hm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qm={readContext:it,useCallback:pp,useContext:it,useEffect:jl,useImperativeHandle:up,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:fp,useReducer:gs,useRef:op,useState:function(){return gs(Kn)},useDebugValue:kl,useDeferredValue:function(e){var t=at();return hp(t,be.memoizedState,e)},useTransition:function(){var e=gs(Kn)[0],t=at().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1},Xm={readContext:it,useCallback:pp,useContext:it,useEffect:jl,useImperativeHandle:up,useInsertionEffect:lp,useLayoutEffect:cp,useMemo:fp,useReducer:xs,useRef:op,useState:function(){return xs(Kn)},useDebugValue:kl,useDeferredValue:function(e){var t=at();return be===null?t.memoizedState=e:hp(t,be.memoizedState,e)},useTransition:function(){var e=xs(Kn)[0],t=at().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function no(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:fe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ta={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Me(),a=Jt(e),s=Rt(n,a);s.payload=t,r!=null&&(s.callback=r),t=Gt(e,s,a),t!==null&&(pt(t,e,a,n),Di(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Me(),a=Jt(e),s=Rt(n,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Gt(e,s,a),t!==null&&(pt(t,e,a,n),Di(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Me(),n=Jt(e),a=Rt(r,n);a.tag=2,t!=null&&(a.callback=t),t=Gt(e,a,n),t!==null&&(pt(t,e,n,r),Di(t,e,n))}};function Pc(e,t,r,n,a,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!Un(r,n)||!Un(a,s):!0}function yp(e,t,r){var n=!1,a=nr,s=t.contextType;return typeof s=="object"&&s!==null?s=it(s):(a=He(t)?vr:Le.current,n=t.contextTypes,s=(n=n!=null)?Kr(e,a):nr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ta,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function zc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ta.enqueueReplaceState(t,t.state,null)}function io(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ml(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=it(s):(s=He(t)?vr:Le.current,a.context=Kr(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(no(e,t,s,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ta.enqueueReplaceState(a,a.state,null),pa(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t){try{var r="",n=t;do r+=Nh(n),n=n.return;while(n);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function vs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ao(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function bp(e,t,r){r=Rt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){xa||(xa=!0,go=n),ao(e,t)},r}function wp(e,t,r){r=Rt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){ao(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ao(e,t),typeof n!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Tc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Gm;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=ug.bind(null,e,t,r),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fc(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Rt(-1,1),t.tag=2,Gt(r,t,1))),r.lanes|=1),e)}var Zm=Ft.ReactCurrentOwner,We=!1;function Oe(e,t,r,n){t.child=e===null?Xu(t,null,r,n):Xr(t,e.child,r,n)}function Oc(e,t,r,n,a){r=r.render;var s=t.ref;return Vr(t,a),n=bl(e,t,r,n,s,a),r=wl(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(le&&r&&ll(t),t.flags|=1,Oe(e,t,n,a),t.child)}function Mc(e,t,r,n,a){if(e===null){var s=r.type;return typeof s=="function"&&!zl(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,jp(e,t,s,n,a)):(e=Hi(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Un,r(o,n)&&e.ref===t.ref)return Lt(e,t,a)}return t.flags|=1,e=er(s,n),e.ref=t.ref,e.return=t,t.child=e}function jp(e,t,r,n,a){if(e!==null){var s=e.memoizedProps;if(Un(s,n)&&e.ref===t.ref)if(We=!1,t.pendingProps=n=s,(e.lanes&a)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Lt(e,t,a)}return so(e,t,r,n,a)}function kp(e,t,r){var n=t.pendingProps,a=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Br,Ke),Ke|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Br,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ne(Br,Ke),Ke|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,ne(Br,Ke),Ke|=n;return Oe(e,t,a,r),t.child}function Np(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function so(e,t,r,n,a){var s=He(r)?vr:Le.current;return s=Kr(t,s),Vr(t,a),r=bl(e,t,r,n,s,a),n=wl(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Lt(e,t,a)):(le&&n&&ll(t),t.flags|=1,Oe(e,t,r,a),t.child)}function Ac(e,t,r,n,a){if(He(r)){var s=!0;oa(t)}else s=!1;if(Vr(t,a),t.stateNode===null)Ui(e,t),yp(t,r,n),io(t,r,n,a),n=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=it(d):(d=He(r)?vr:Le.current,d=Kr(t,d));var f=r.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||c!==d)&&zc(t,o,n,d),Ut=!1;var p=t.memoizedState;o.state=p,pa(t,n,o,a),c=t.memoizedState,l!==n||p!==c||$e.current||Ut?(typeof f=="function"&&(no(t,r,f,n),c=t.memoizedState),(l=Ut||Pc(t,r,l,n,p,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=d,n=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Zu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:lt(t.type,l),o.props=d,h=t.pendingProps,p=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=it(c):(c=He(r)?vr:Le.current,c=Kr(t,c));var b=r.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||p!==c)&&zc(t,o,n,c),Ut=!1,p=t.memoizedState,o.state=p,pa(t,n,o,a);var m=t.memoizedState;l!==h||p!==m||$e.current||Ut?(typeof b=="function"&&(no(t,r,b,n),m=t.memoizedState),(d=Ut||Pc(t,r,d,n,p,m,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,m,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,m,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),o.props=n,o.state=m,o.context=c,n=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return oo(e,t,r,n,s,a)}function oo(e,t,r,n,a,s){Np(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return a&&jc(t,r,!1),Lt(e,t,s);n=t.stateNode,Zm.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Xr(t,e.child,null,s),t.child=Xr(t,null,l,s)):Oe(e,t,l,s),t.memoizedState=n.state,a&&jc(t,r,!0),t.child}function Sp(e){var t=e.stateNode;t.pendingContext?wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wc(e,t.context,!1),gl(e,t.containerInfo)}function Dc(e,t,r,n,a){return Qr(),dl(a),t.flags|=256,Oe(e,t,r,n),t.child}var lo={dehydrated:null,treeContext:null,retryLane:0};function co(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cp(e,t,r){var n=t.pendingProps,a=de.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ne(de,a&1),e===null)return to(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,s?(n=t.mode,s=t.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oa(o,n,0,null),e=gr(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=co(r),t.memoizedState=lo,e):Nl(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Jm(e,t,o,n,l,a,r);if(s){s=n.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:n.children};return!(o&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=er(a,c),n.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=er(l,s):(s=gr(s,o,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,o=e.child.memoizedState,o=o===null?co(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=lo,n}return s=e.child,e=s.sibling,n=er(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Nl(e,t){return t=Oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Si(e,t,r,n){return n!==null&&dl(n),Xr(t,e.child,null,r),e=Nl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jm(e,t,r,n,a,s,o){if(r)return t.flags&256?(t.flags&=-257,n=vs(Error(z(422))),Si(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,a=t.mode,n=Oa({mode:"visible",children:n.children},a,0,null),s=gr(s,a,o,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Xr(t,e.child,null,o),t.child.memoizedState=co(o),t.memoizedState=lo,s);if(!(t.mode&1))return Si(e,t,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(z(419)),n=vs(s,n,void 0),Si(e,t,o,n)}if(l=(o&e.childLanes)!==0,We||l){if(n=Se,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|o)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Tt(e,a),pt(n,e,a,-1))}return Pl(),n=vs(Error(z(421))),Si(e,t,o,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=pg.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,Qe=Xt(a.nextSibling),Xe=t,le=!0,dt=null,e!==null&&(et[tt++]=Et,et[tt++]=_t,et[tt++]=yr,Et=e.id,_t=e.overflow,yr=t),t=Nl(t,n.children),t.flags|=4096,t)}function Ic(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ro(e.return,t,r)}function ys(e,t,r,n,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=a)}function Ep(e,t,r){var n=t.pendingProps,a=n.revealOrder,s=n.tail;if(Oe(e,t,n.children,r),n=de.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ic(e,r,t);else if(e.tag===19)Ic(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ne(de,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&fa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ys(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&fa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ys(t,!0,r,null,s);break;case"together":ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,r=er(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=er(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function eg(e,t,r){switch(t.tag){case 3:Sp(t),Qr();break;case 5:Ju(t);break;case 1:He(t.type)&&oa(t);break;case 4:gl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;ne(da,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ne(de,de.current&1),t.flags|=128,null):r&t.child.childLanes?Cp(e,t,r):(ne(de,de.current&1),e=Lt(e,t,r),e!==null?e.sibling:null);ne(de,de.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ep(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ne(de,de.current),n)break;return null;case 22:case 23:return t.lanes=0,kp(e,t,r)}return Lt(e,t,r)}var _p,uo,Rp,Pp;_p=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};uo=function(){};Rp=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,fr(jt.current);var s=null;switch(r){case"input":a=Ts(e,a),n=Ts(e,n),s=[];break;case"select":a=fe({},a,{value:void 0}),n=fe({},n,{value:void 0}),s=[];break;case"textarea":a=Os(e,a),n=Os(e,n),s=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=aa)}As(r,n);var o;r=null;for(d in a)if(!n.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in n){var c=n[d];if(l=a!=null?a[d]:void 0,n.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ae("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Pp=function(e,t,r,n){r!==n&&(t.flags|=4)};function xn(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function tg(e,t,r){var n=t.pendingProps;switch(cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return He(t.type)&&sa(),Pe(t),null;case 3:return n=t.stateNode,Gr(),se($e),se(Le),vl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(yo(dt),dt=null))),uo(e,t),Pe(t),null;case 5:xl(t);var a=fr(qn.current);if(r=t.type,e!==null&&t.stateNode!=null)Rp(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(z(166));return Pe(t),null}if(e=fr(jt.current),ki(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[bt]=t,n[Hn]=s,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",n),ae("close",n);break;case"iframe":case"object":case"embed":ae("load",n);break;case"video":case"audio":for(a=0;a<Nn.length;a++)ae(Nn[a],n);break;case"source":ae("error",n);break;case"img":case"image":case"link":ae("error",n),ae("load",n);break;case"details":ae("toggle",n);break;case"input":Kl(n,s),ae("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ae("invalid",n);break;case"textarea":Xl(n,s),ae("invalid",n)}As(r,s),a=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&ji(n.textContent,l,e),a=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ji(n.textContent,l,e),a=["children",""+l]):Fn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ae("scroll",n)}switch(r){case"input":hi(n),Ql(n,s,!0);break;case"textarea":hi(n),Gl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=aa)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[bt]=t,e[Hn]=n,_p(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ds(r,n),r){case"dialog":ae("cancel",e),ae("close",e),a=n;break;case"iframe":case"object":case"embed":ae("load",e),a=n;break;case"video":case"audio":for(a=0;a<Nn.length;a++)ae(Nn[a],e);a=n;break;case"source":ae("error",e),a=n;break;case"img":case"image":case"link":ae("error",e),ae("load",e),a=n;break;case"details":ae("toggle",e),a=n;break;case"input":Kl(e,n),a=Ts(e,n),ae("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=fe({},n,{value:void 0}),ae("invalid",e);break;case"textarea":Xl(e,n),a=Os(e,n),ae("invalid",e);break;default:a=n}As(r,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?ou(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&au(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&On(e,c):typeof c=="number"&&On(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ae("scroll",e):c!=null&&Ko(e,s,c,o))}switch(r){case"input":hi(e),Ql(e,n,!1);break;case"textarea":hi(e),Gl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+rr(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Ur(e,!!n.multiple,s,!1):n.defaultValue!=null&&Ur(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=aa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pe(t),null;case 6:if(e&&t.stateNode!=null)Pp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(z(166));if(r=fr(qn.current),fr(jt.current),ki(t)){if(n=t.stateNode,r=t.memoizedProps,n[bt]=t,(s=n.nodeValue!==r)&&(e=Xe,e!==null))switch(e.tag){case 3:ji(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[bt]=t,t.stateNode=n}return Pe(t),null;case 13:if(se(de),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&Qe!==null&&t.mode&1&&!(t.flags&128))Ku(),Qr(),t.flags|=98560,s=!1;else if(s=ki(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[bt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),s=!1}else dt!==null&&(yo(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?we===0&&(we=3):Pl())),t.updateQueue!==null&&(t.flags|=4),Pe(t),null);case 4:return Gr(),uo(e,t),e===null&&Wn(t.stateNode.containerInfo),Pe(t),null;case 10:return fl(t.type._context),Pe(t),null;case 17:return He(t.type)&&sa(),Pe(t),null;case 19:if(se(de),s=t.memoizedState,s===null)return Pe(t),null;if(n=(t.flags&128)!==0,o=s.rendering,o===null)if(n)xn(s,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fa(e),o!==null){for(t.flags|=128,xn(s,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ne(de,de.current&1|2),t.child}e=e.sibling}s.tail!==null&&me()>Jr&&(t.flags|=128,n=!0,xn(s,!1),t.lanes=4194304)}else{if(!n)if(e=fa(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),xn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return Pe(t),null}else 2*me()-s.renderingStartTime>Jr&&r!==1073741824&&(t.flags|=128,n=!0,xn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=me(),t.sibling=null,r=de.current,ne(de,n?r&1|2:r&1),t):(Pe(t),null);case 22:case 23:return Rl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ke&1073741824&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function rg(e,t){switch(cl(t),t.tag){case 1:return He(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),se($e),se(Le),vl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xl(t),null;case 13:if(se(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(de),null;case 4:return Gr(),null;case 10:return fl(t.type._context),null;case 22:case 23:return Rl(),null;case 24:return null;default:return null}}var Ci=!1,ze=!1,ng=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ir(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){he(e,t,n)}else r.current=null}function po(e,t,r){try{r()}catch(n){he(e,t,n)}}var Bc=!1;function ig(e,t){if(Ks=ra,e=Ou(),ol(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,d=0,f=0,h=e,p=null;t:for(;;){for(var b;h!==r||a!==0&&h.nodeType!==3||(l=o+a),h!==s||n!==0&&h.nodeType!==3||(c=o+n),h.nodeType===3&&(o+=h.nodeValue.length),(b=h.firstChild)!==null;)p=h,h=b;for(;;){if(h===e)break t;if(p===r&&++d===a&&(l=o),p===s&&++f===n&&(c=o),(b=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Qs={focusedElem:e,selectionRange:r},ra=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,w=m.memoizedState,x=t.stateNode,u=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:lt(t.type,y),w);x.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(j){he(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return m=Bc,Bc=!1,m}function zn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&po(t,r,s)}a=a.next}while(a!==n)}}function La(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function fo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Hn],delete t[Zs],delete t[Bm],delete t[Um])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tp(e){return e.tag===5||e.tag===3||e.tag===4}function Uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=aa));else if(n!==4&&(e=e.child,e!==null))for(ho(e,t,r),e=e.sibling;e!==null;)ho(e,t,r),e=e.sibling}function mo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(mo(e,t,r),e=e.sibling;e!==null;)mo(e,t,r),e=e.sibling}var Ce=null,ct=!1;function At(e,t,r){for(r=r.child;r!==null;)Lp(e,t,r),r=r.sibling}function Lp(e,t,r){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Sa,r)}catch{}switch(r.tag){case 5:ze||Ir(r,t);case 6:var n=Ce,a=ct;Ce=null,At(e,t,r),Ce=n,ct=a,Ce!==null&&(ct?(e=Ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ce.removeChild(r.stateNode));break;case 18:Ce!==null&&(ct?(e=Ce,r=r.stateNode,e.nodeType===8?ps(e.parentNode,r):e.nodeType===1&&ps(e,r),In(e)):ps(Ce,r.stateNode));break;case 4:n=Ce,a=ct,Ce=r.stateNode.containerInfo,ct=!0,At(e,t,r),Ce=n,ct=a;break;case 0:case 11:case 14:case 15:if(!ze&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var s=a,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&po(r,t,o),a=a.next}while(a!==n)}At(e,t,r);break;case 1:if(!ze&&(Ir(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){he(r,t,l)}At(e,t,r);break;case 21:At(e,t,r);break;case 22:r.mode&1?(ze=(n=ze)||r.memoizedState!==null,At(e,t,r),ze=n):At(e,t,r);break;default:At(e,t,r)}}function Wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ng),t.forEach(function(n){var a=fg.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function ot(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,ct=!1;break e;case 3:Ce=l.stateNode.containerInfo,ct=!0;break e;case 4:Ce=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(Ce===null)throw Error(z(160));Lp(s,o,a),Ce=null,ct=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){he(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fp(t,e),t=t.sibling}function Fp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),gt(e),n&4){try{zn(3,e,e.return),La(3,e)}catch(y){he(e,e.return,y)}try{zn(5,e,e.return)}catch(y){he(e,e.return,y)}}break;case 1:ot(t,e),gt(e),n&512&&r!==null&&Ir(r,r.return);break;case 5:if(ot(t,e),gt(e),n&512&&r!==null&&Ir(r,r.return),e.flags&32){var a=e.stateNode;try{On(a,"")}catch(y){he(e,e.return,y)}}if(n&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ru(a,s),Ds(l,o);var d=Ds(l,s);for(o=0;o<c.length;o+=2){var f=c[o],h=c[o+1];f==="style"?ou(a,h):f==="dangerouslySetInnerHTML"?au(a,h):f==="children"?On(a,h):Ko(a,f,h,d)}switch(l){case"input":Ls(a,s);break;case"textarea":nu(a,s);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?Ur(a,!!s.multiple,b,!1):p!==!!s.multiple&&(s.defaultValue!=null?Ur(a,!!s.multiple,s.defaultValue,!0):Ur(a,!!s.multiple,s.multiple?[]:"",!1))}a[Hn]=s}catch(y){he(e,e.return,y)}}break;case 6:if(ot(t,e),gt(e),n&4){if(e.stateNode===null)throw Error(z(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(y){he(e,e.return,y)}}break;case 3:if(ot(t,e),gt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(y){he(e,e.return,y)}break;case 4:ot(t,e),gt(e);break;case 13:ot(t,e),gt(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(El=me())),n&4&&Wc(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(ze=(d=ze)||f,ot(t,e),ze=d):ot(t,e),gt(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(h=M=f;M!==null;){switch(p=M,b=p.child,p.tag){case 0:case 11:case 14:case 15:zn(4,p,p.return);break;case 1:Ir(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){he(n,r,y)}}break;case 5:Ir(p,p.return);break;case 22:if(p.memoizedState!==null){Hc(h);continue}}b!==null?(b.return=p,M=b):Hc(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{a=h.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=su("display",o))}catch(y){he(e,e.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){he(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ot(t,e),gt(e),n&4&&Wc(e);break;case 21:break;default:ot(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Tp(r)){var n=r;break e}r=r.return}throw Error(z(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(On(a,""),n.flags&=-33);var s=Uc(e);mo(e,s,a);break;case 3:case 4:var o=n.stateNode.containerInfo,l=Uc(e);ho(e,l,o);break;default:throw Error(z(161))}}catch(c){he(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ag(e,t,r){M=e,Op(e)}function Op(e,t,r){for(var n=(e.mode&1)!==0;M!==null;){var a=M,s=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||Ci;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||ze;l=Ci;var d=ze;if(Ci=o,(ze=c)&&!d)for(M=a;M!==null;)o=M,c=o.child,o.tag===22&&o.memoizedState!==null?Vc(a):c!==null?(c.return=o,M=c):Vc(a);for(;s!==null;)M=s,Op(s),s=s.sibling;M=a,Ci=l,ze=d}$c(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,M=s):$c(e)}}function $c(e){for(;M!==null;){var t=M;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||La(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ze)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:lt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ec(t,s,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ec(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&In(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ze||t.flags&512&&fo(t)}catch(p){he(t,t.return,p)}}if(t===e){M=null;break}if(r=t.sibling,r!==null){r.return=t.return,M=r;break}M=t.return}}function Hc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var r=t.sibling;if(r!==null){r.return=t.return,M=r;break}M=t.return}}function Vc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{La(4,t)}catch(c){he(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){he(t,a,c)}}var s=t.return;try{fo(t)}catch(c){he(t,s,c)}break;case 5:var o=t.return;try{fo(t)}catch(c){he(t,o,c)}}}catch(c){he(t,t.return,c)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var sg=Math.ceil,ga=Ft.ReactCurrentDispatcher,Sl=Ft.ReactCurrentOwner,nt=Ft.ReactCurrentBatchConfig,X=0,Se=null,xe=null,Ee=0,Ke=0,Br=ar(0),we=0,Xn=null,wr=0,Fa=0,Cl=0,Tn=null,Ue=null,El=0,Jr=1/0,St=null,xa=!1,go=null,Zt=null,Ei=!1,Vt=null,va=0,Ln=0,xo=null,Wi=-1,$i=0;function Me(){return X&6?me():Wi!==-1?Wi:Wi=me()}function Jt(e){return e.mode&1?X&2&&Ee!==0?Ee&-Ee:$m.transition!==null?($i===0&&($i=yu()),$i):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e):1}function pt(e,t,r,n){if(50<Ln)throw Ln=0,xo=null,Error(z(185));ei(e,r,n),(!(X&2)||e!==Se)&&(e===Se&&(!(X&2)&&(Fa|=r),we===4&&$t(e,Ee)),Ve(e,n),r===1&&X===0&&!(t.mode&1)&&(Jr=me()+500,Pa&&sr()))}function Ve(e,t){var r=e.callbackNode;$h(e,t);var n=ta(e,e===Se?Ee:0);if(n===0)r!==null&&ec(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&ec(r),t===1)e.tag===0?Wm(qc.bind(null,e)):Vu(qc.bind(null,e)),Dm(function(){!(X&6)&&sr()}),r=null;else{switch(bu(n)){case 1:r=Jo;break;case 4:r=xu;break;case 16:r=ea;break;case 536870912:r=vu;break;default:r=ea}r=$p(r,Mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Mp(e,t){if(Wi=-1,$i=0,X&6)throw Error(z(327));var r=e.callbackNode;if(qr()&&e.callbackNode!==r)return null;var n=ta(e,e===Se?Ee:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ya(e,n);else{t=n;var a=X;X|=2;var s=Dp();(Se!==e||Ee!==t)&&(St=null,Jr=me()+500,mr(e,t));do try{cg();break}catch(l){Ap(e,l)}while(!0);pl(),ga.current=s,X=a,xe!==null?t=0:(Se=null,Ee=0,t=we)}if(t!==0){if(t===2&&(a=$s(e),a!==0&&(n=a,t=vo(e,a))),t===1)throw r=Xn,mr(e,0),$t(e,n),Ve(e,me()),r;if(t===6)$t(e,n);else{if(a=e.current.alternate,!(n&30)&&!og(a)&&(t=ya(e,n),t===2&&(s=$s(e),s!==0&&(n=s,t=vo(e,s))),t===1))throw r=Xn,mr(e,0),$t(e,n),Ve(e,me()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(z(345));case 2:cr(e,Ue,St);break;case 3:if($t(e,n),(n&130023424)===n&&(t=El+500-me(),10<t)){if(ta(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Me(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Gs(cr.bind(null,e,Ue,St),t);break}cr(e,Ue,St);break;case 4:if($t(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var o=31-ut(n);s=1<<o,o=t[o],o>a&&(a=o),n&=~s}if(n=a,n=me()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*sg(n/1960))-n,10<n){e.timeoutHandle=Gs(cr.bind(null,e,Ue,St),n);break}cr(e,Ue,St);break;case 5:cr(e,Ue,St);break;default:throw Error(z(329))}}}return Ve(e,me()),e.callbackNode===r?Mp.bind(null,e):null}function vo(e,t){var r=Tn;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=ya(e,t),e!==2&&(t=Ue,Ue=r,t!==null&&yo(t)),e}function yo(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function og(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],s=a.getSnapshot;a=a.value;try{if(!ft(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Cl,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ut(t),n=1<<r;e[r]=-1,t&=~n}}function qc(e){if(X&6)throw Error(z(327));qr();var t=ta(e,0);if(!(t&1))return Ve(e,me()),null;var r=ya(e,t);if(e.tag!==0&&r===2){var n=$s(e);n!==0&&(t=n,r=vo(e,n))}if(r===1)throw r=Xn,mr(e,0),$t(e,t),Ve(e,me()),r;if(r===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,Ue,St),Ve(e,me()),null}function _l(e,t){var r=X;X|=1;try{return e(t)}finally{X=r,X===0&&(Jr=me()+500,Pa&&sr())}}function jr(e){Vt!==null&&Vt.tag===0&&!(X&6)&&qr();var t=X;X|=1;var r=nt.transition,n=ee;try{if(nt.transition=null,ee=1,e)return e()}finally{ee=n,nt.transition=r,X=t,!(X&6)&&sr()}}function Rl(){Ke=Br.current,se(Br)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Am(r)),xe!==null)for(r=xe.return;r!==null;){var n=r;switch(cl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&sa();break;case 3:Gr(),se($e),se(Le),vl();break;case 5:xl(n);break;case 4:Gr();break;case 13:se(de);break;case 19:se(de);break;case 10:fl(n.type._context);break;case 22:case 23:Rl()}r=r.return}if(Se=e,xe=e=er(e.current,null),Ee=Ke=t,we=0,Xn=null,Cl=Fa=wr=0,Ue=Tn=null,pr!==null){for(t=0;t<pr.length;t++)if(r=pr[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=a,n.next=o}r.pending=n}pr=null}return e}function Ap(e,t){do{var r=xe;try{if(pl(),Ii.current=ma,ha){for(var n=ue.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ha=!1}if(br=0,Ne=be=ue=null,Pn=!1,Yn=0,Sl.current=null,r===null||r.return===null){we=1,Xn=t,xe=null;break}e:{var s=e,o=r.return,l=r,c=t;if(t=Ee,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=Lc(o);if(b!==null){b.flags&=-257,Fc(b,o,l,s,t),b.mode&1&&Tc(s,d,t),t=b,c=d;var m=t.updateQueue;if(m===null){var y=new Set;y.add(c),t.updateQueue=y}else m.add(c);break e}else{if(!(t&1)){Tc(s,d,t),Pl();break e}c=Error(z(426))}}else if(le&&l.mode&1){var w=Lc(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Fc(w,o,l,s,t),dl(Zr(c,l));break e}}s=c=Zr(c,l),we!==4&&(we=2),Tn===null?Tn=[s]:Tn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=bp(s,c,t);Cc(s,x);break e;case 1:l=c;var u=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zt===null||!Zt.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=wp(s,l,t);Cc(s,j);break e}}s=s.return}while(s!==null)}Bp(r)}catch(k){t=k,xe===r&&r!==null&&(xe=r=r.return);continue}break}while(!0)}function Dp(){var e=ga.current;return ga.current=ma,e===null?ma:e}function Pl(){(we===0||we===3||we===2)&&(we=4),Se===null||!(wr&268435455)&&!(Fa&268435455)||$t(Se,Ee)}function ya(e,t){var r=X;X|=2;var n=Dp();(Se!==e||Ee!==t)&&(St=null,mr(e,t));do try{lg();break}catch(a){Ap(e,a)}while(!0);if(pl(),X=r,ga.current=n,xe!==null)throw Error(z(261));return Se=null,Ee=0,we}function lg(){for(;xe!==null;)Ip(xe)}function cg(){for(;xe!==null&&!Fh();)Ip(xe)}function Ip(e){var t=Wp(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Bp(e):xe=t,Sl.current=null}function Bp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=rg(r,t),r!==null){r.flags&=32767,xe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,xe=null;return}}else if(r=tg(r,t,Ke),r!==null){xe=r;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);we===0&&(we=5)}function cr(e,t,r){var n=ee,a=nt.transition;try{nt.transition=null,ee=1,dg(e,t,r,n)}finally{nt.transition=a,ee=n}return null}function dg(e,t,r,n){do qr();while(Vt!==null);if(X&6)throw Error(z(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Hh(e,s),e===Se&&(xe=Se=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ei||(Ei=!0,$p(ea,function(){return qr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=nt.transition,nt.transition=null;var o=ee;ee=1;var l=X;X|=4,Sl.current=null,ig(e,r),Fp(r,e),Pm(Qs),ra=!!Ks,Qs=Ks=null,e.current=r,ag(r),Oh(),X=l,ee=o,nt.transition=s}else e.current=r;if(Ei&&(Ei=!1,Vt=e,va=a),s=e.pendingLanes,s===0&&(Zt=null),Dh(r.stateNode),Ve(e,me()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(xa)throw xa=!1,e=go,go=null,e;return va&1&&e.tag!==0&&qr(),s=e.pendingLanes,s&1?e===xo?Ln++:(Ln=0,xo=e):Ln=0,sr(),null}function qr(){if(Vt!==null){var e=bu(va),t=nt.transition,r=ee;try{if(nt.transition=null,ee=16>e?16:e,Vt===null)var n=!1;else{if(e=Vt,Vt=null,va=0,X&6)throw Error(z(331));var a=X;for(X|=4,M=e.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(M=d;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:zn(8,f,s)}var h=f.child;if(h!==null)h.return=f,M=h;else for(;M!==null;){f=M;var p=f.sibling,b=f.return;if(zp(f),f===d){M=null;break}if(p!==null){p.return=b,M=p;break}M=b}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zn(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}var u=e.current;for(M=u;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=u;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:La(9,l)}}catch(k){he(l,l.return,k)}if(l===o){M=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,M=j;break e}M=l.return}}if(X=a,sr(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Sa,e)}catch{}n=!0}return n}finally{ee=r,nt.transition=t}}return!1}function Yc(e,t,r){t=Zr(r,t),t=bp(e,t,1),e=Gt(e,t,1),t=Me(),e!==null&&(ei(e,1,t),Ve(e,t))}function he(e,t,r){if(e.tag===3)Yc(e,e,r);else for(;t!==null;){if(t.tag===3){Yc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Zt===null||!Zt.has(n))){e=Zr(r,e),e=wp(t,e,1),t=Gt(t,e,1),e=Me(),t!==null&&(ei(t,1,e),Ve(t,e));break}}t=t.return}}function ug(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&r,Se===e&&(Ee&r)===r&&(we===4||we===3&&(Ee&130023424)===Ee&&500>me()-El?mr(e,0):Cl|=r),Ve(e,t)}function Up(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var r=Me();e=Tt(e,t),e!==null&&(ei(e,t,r),Ve(e,r))}function pg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Up(e,r)}function fg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(z(314))}n!==null&&n.delete(t),Up(e,r)}var Wp;Wp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)We=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return We=!1,eg(e,t,r);We=!!(e.flags&131072)}else We=!1,le&&t.flags&1048576&&qu(t,ca,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ui(e,t),e=t.pendingProps;var a=Kr(t,Le.current);Vr(t,r),a=bl(null,t,n,e,a,r);var s=wl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(n)?(s=!0,oa(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ml(t),a.updater=Ta,t.stateNode=a,a._reactInternals=t,io(t,n,e,r),t=oo(null,t,n,!0,s,r)):(t.tag=0,le&&s&&ll(t),Oe(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=mg(n),e=lt(n,e),a){case 0:t=so(null,t,n,e,r);break e;case 1:t=Ac(null,t,n,e,r);break e;case 11:t=Oc(null,t,n,e,r);break e;case 14:t=Mc(null,t,n,lt(n.type,e),r);break e}throw Error(z(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:lt(n,a),so(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:lt(n,a),Ac(e,t,n,a,r);case 3:e:{if(Sp(t),e===null)throw Error(z(387));n=t.pendingProps,s=t.memoizedState,a=s.element,Zu(e,t),pa(t,n,null,r);var o=t.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=Zr(Error(z(423)),t),t=Dc(e,t,n,r,a);break e}else if(n!==a){a=Zr(Error(z(424)),t),t=Dc(e,t,n,r,a);break e}else for(Qe=Xt(t.stateNode.containerInfo.firstChild),Xe=t,le=!0,dt=null,r=Xu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Qr(),n===a){t=Lt(e,t,r);break e}Oe(e,t,n,r)}t=t.child}return t;case 5:return Ju(t),e===null&&to(t),n=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,o=a.children,Xs(n,a)?o=null:s!==null&&Xs(n,s)&&(t.flags|=32),Np(e,t),Oe(e,t,o,r),t.child;case 6:return e===null&&to(t),null;case 13:return Cp(e,t,r);case 4:return gl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Xr(t,null,n,r):Oe(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:lt(n,a),Oc(e,t,n,a,r);case 7:return Oe(e,t,t.pendingProps,r),t.child;case 8:return Oe(e,t,t.pendingProps.children,r),t.child;case 12:return Oe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,s=t.memoizedProps,o=a.value,ne(da,n._currentValue),n._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===a.children&&!$e.current){t=Lt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=Rt(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),ro(s.return,r,t),l.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),ro(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,Vr(t,r),a=it(a),n=n(a),t.flags|=1,Oe(e,t,n,r),t.child;case 14:return n=t.type,a=lt(n,t.pendingProps),a=lt(n.type,a),Mc(e,t,n,a,r);case 15:return jp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:lt(n,a),Ui(e,t),t.tag=1,He(n)?(e=!0,oa(t)):e=!1,Vr(t,r),yp(t,n,a),io(t,n,a,r),oo(null,t,n,!0,e,r);case 19:return Ep(e,t,r);case 22:return kp(e,t,r)}throw Error(z(156,t.tag))};function $p(e,t){return gu(e,t)}function hg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,r,n){return new hg(e,t,r,n)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Go)return 14}return 2}function er(e,t){var r=e.alternate;return r===null?(r=rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Hi(e,t,r,n,a,s){var o=2;if(n=e,typeof e=="function")zl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Pr:return gr(r.children,a,s,t);case Qo:o=8,a|=8;break;case _s:return e=rt(12,r,t,a|2),e.elementType=_s,e.lanes=s,e;case Rs:return e=rt(13,r,t,a),e.elementType=Rs,e.lanes=s,e;case Ps:return e=rt(19,r,t,a),e.elementType=Ps,e.lanes=s,e;case Jd:return Oa(r,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gd:o=10;break e;case Zd:o=9;break e;case Xo:o=11;break e;case Go:o=14;break e;case Bt:o=16,n=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=rt(o,r,t,a),t.elementType=e,t.type=n,t.lanes=s,t}function gr(e,t,r,n){return e=rt(7,e,n,t),e.lanes=r,e}function Oa(e,t,r,n){return e=rt(22,e,n,t),e.elementType=Jd,e.lanes=r,e.stateNode={isHidden:!1},e}function bs(e,t,r){return e=rt(6,e,null,t),e.lanes=r,e}function ws(e,t,r){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gg(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Tl(e,t,r,n,a,s,o,l,c){return e=new gg(e,t,r,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ml(s),e}function xg(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Hp(e){if(!e)return nr;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var r=e.type;if(He(r))return Hu(e,r,t)}return t}function Vp(e,t,r,n,a,s,o,l,c){return e=Tl(r,n,!0,e,a,s,o,l,c),e.context=Hp(null),r=e.current,n=Me(),a=Jt(r),s=Rt(n,a),s.callback=t??null,Gt(r,s,a),e.current.lanes=a,ei(e,a,n),Ve(e,n),e}function Ma(e,t,r,n){var a=t.current,s=Me(),o=Jt(a);return r=Hp(r),t.context===null?t.context=r:t.pendingContext=r,t=Rt(s,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Gt(a,t,o),e!==null&&(pt(e,a,o,s),Di(e,a,o)),o}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ll(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function vg(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fl(e){this._internalRoot=e}Aa.prototype.render=Fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ma(e,t,null,null)};Aa.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Ma(null,e,null,null)}),t[zt]=null}};function Aa(e){this._internalRoot=e}Aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Wt.length&&t!==0&&t<Wt[r].priority;r++);Wt.splice(r,0,e),r===0&&Su(e)}};function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qc(){}function yg(e,t,r,n,a){if(a){if(typeof n=="function"){var s=n;n=function(){var d=ba(o);s.call(d)}}var o=Vp(t,n,e,0,null,!1,!1,"",Qc);return e._reactRootContainer=o,e[zt]=o.current,Wn(e.nodeType===8?e.parentNode:e),jr(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var l=n;n=function(){var d=ba(c);l.call(d)}}var c=Tl(e,0,!1,null,null,!1,!1,"",Qc);return e._reactRootContainer=c,e[zt]=c.current,Wn(e.nodeType===8?e.parentNode:e),jr(function(){Ma(t,c,r,n)}),c}function Ia(e,t,r,n,a){var s=r._reactRootContainer;if(s){var o=s;if(typeof a=="function"){var l=a;a=function(){var c=ba(o);l.call(c)}}Ma(t,o,e,a)}else o=yg(r,t,e,a,n);return ba(o)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=kn(t.pendingLanes);r!==0&&(el(t,r|1),Ve(t,me()),!(X&6)&&(Jr=me()+500,sr()))}break;case 13:jr(function(){var n=Tt(e,1);if(n!==null){var a=Me();pt(n,e,1,a)}}),Ll(e,1)}};tl=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var r=Me();pt(t,e,134217728,r)}Ll(e,134217728)}};ju=function(e){if(e.tag===13){var t=Jt(e),r=Tt(e,t);if(r!==null){var n=Me();pt(r,e,t,n)}Ll(e,t)}};ku=function(){return ee};Nu=function(e,t){var r=ee;try{return ee=e,t()}finally{ee=r}};Bs=function(e,t,r){switch(t){case"input":if(Ls(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Ra(n);if(!a)throw Error(z(90));tu(n),Ls(n,a)}}}break;case"textarea":nu(e,r);break;case"select":t=r.value,t!=null&&Ur(e,!!r.multiple,t,!1)}};du=_l;uu=jr;var bg={usingClientEntryPoint:!1,Events:[ri,Fr,Ra,lu,cu,_l]},vn={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wg={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_i.isDisabled&&_i.supportsFiber)try{Sa=_i.inject(wg),wt=_i}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bg;Ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ol(t))throw Error(z(200));return xg(e,t,null,r)};Ze.createRoot=function(e,t){if(!Ol(e))throw Error(z(299));var r=!1,n="",a=qp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Tl(e,1,!1,null,null,r,!1,n,a),e[zt]=t.current,Wn(e.nodeType===8?e.parentNode:e),new Fl(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return jr(e)};Ze.hydrate=function(e,t,r){if(!Da(t))throw Error(z(200));return Ia(null,e,t,!0,r)};Ze.hydrateRoot=function(e,t,r){if(!Ol(e))throw Error(z(405));var n=r!=null&&r.hydratedSources||null,a=!1,s="",o=qp;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Vp(t,null,e,1,r??null,a,!1,s,o),e[zt]=t.current,Wn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Aa(t)};Ze.render=function(e,t,r){if(!Da(t))throw Error(z(200));return Ia(null,e,t,!1,r)};Ze.unmountComponentAtNode=function(e){if(!Da(e))throw Error(z(40));return e._reactRootContainer?(jr(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ze.unstable_batchedUpdates=_l;Ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Da(r))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ia(e,t,r,!1,n)};Ze.version="18.3.1-next-f1338f8080-20240426";function Yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)}catch(e){console.error(e)}}Yp(),Yd.exports=Ze;var jg=Yd.exports,Xc=jg;Cs.createRoot=Xc.createRoot,Cs.hydrateRoot=Xc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gn(){return Gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Gn.apply(this,arguments)}var qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qt||(qt={}));const Gc="popstate";function kg(e){e===void 0&&(e={});function t(n,a){let{pathname:s,search:o,hash:l}=n.location;return bo("",{pathname:s,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:wa(a)}return Sg(t,r,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ng(){return Math.random().toString(36).substr(2,8)}function Zc(e,t){return{usr:e.state,key:e.key,idx:t}}function bo(e,t,r,n){return r===void 0&&(r=null),Gn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?on(t):t,{state:r,key:t&&t.key||n||Ng()})}function wa(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function on(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Sg(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:s=!1}=n,o=a.history,l=qt.Pop,c=null,d=f();d==null&&(d=0,o.replaceState(Gn({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function h(){l=qt.Pop;let w=f(),x=w==null?null:w-d;d=w,c&&c({action:l,location:y.location,delta:x})}function p(w,x){l=qt.Push;let u=bo(y.location,w,x);d=f()+1;let g=Zc(u,d),j=y.createHref(u);try{o.pushState(g,"",j)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(j)}s&&c&&c({action:l,location:y.location,delta:1})}function b(w,x){l=qt.Replace;let u=bo(y.location,w,x);d=f();let g=Zc(u,d),j=y.createHref(u);o.replaceState(g,"",j),s&&c&&c({action:l,location:y.location,delta:0})}function m(w){let x=a.location.origin!=="null"?a.location.origin:a.location.href,u=typeof w=="string"?w:wa(w);return u=u.replace(/ $/,"%20"),pe(x,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,x)}let y={get action(){return l},get location(){return e(a,o)},listen(w){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Gc,h),c=w,()=>{a.removeEventListener(Gc,h),c=null}},createHref(w){return t(a,w)},createURL:m,encodeLocation(w){let x=m(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:b,go(w){return o.go(w)}};return y}var Jc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jc||(Jc={}));function Cg(e,t,r){return r===void 0&&(r="/"),Eg(e,t,r)}function Eg(e,t,r,n){let a=typeof t=="string"?on(t):t,s=en(a.pathname||"/",r);if(s==null)return null;let o=Qp(e);_g(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=Ig(s);l=Ag(o[c],d)}return l}function Qp(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=tr([n,c.relativePath]),f=r.concat(c);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Qp(s.children,t,f,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:Og(d,s.index),routesMeta:f})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))a(s,o);else for(let c of Xp(s.path))a(s,o,c)}),t}function Xp(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return a?[s,""]:[s];let o=Xp(n.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function _g(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Mg(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Rg=/^:[\w-]+$/,Pg=3,zg=2,Tg=1,Lg=10,Fg=-2,ed=e=>e==="*";function Og(e,t){let r=e.split("/"),n=r.length;return r.some(ed)&&(n+=Fg),t&&(n+=zg),r.filter(a=>!ed(a)).reduce((a,s)=>a+(Rg.test(s)?Pg:s===""?Tg:Lg),n)}function Mg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Ag(e,t,r){let{routesMeta:n}=e,a={},s="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,f=s==="/"?t:t.slice(s.length)||"/",h=wo({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),p=c.route;if(!h)return null;Object.assign(a,h.params),o.push({params:a,pathname:tr([s,h.pathname]),pathnameBase:$g(tr([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=tr([s,h.pathnameBase]))}return o}function wo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Dg(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let s=a[0],o=s.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:n.reduce((d,f,h)=>{let{paramName:p,isOptional:b}=f;if(p==="*"){let y=l[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=l[h];return b&&!m?d[p]=void 0:d[p]=(m||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function Dg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Kp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Ig(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Kp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function en(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Bg(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?on(e):e;return{pathname:r?r.startsWith("/")?r:Ug(r,t):t,search:Hg(n),hash:Vg(a)}}function Ug(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function js(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wg(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ml(e,t){let r=Wg(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Al(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=on(e):(a=Gn({},e),pe(!a.pathname||!a.pathname.includes("?"),js("?","pathname","search",a)),pe(!a.pathname||!a.pathname.includes("#"),js("#","pathname","hash",a)),pe(!a.search||!a.search.includes("#"),js("#","search","hash",a)));let s=e===""||a.pathname==="",o=s?"/":a.pathname,l;if(o==null)l=r;else{let h=t.length-1;if(!n&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;a.pathname=p.join("/")}l=h>=0?t[h]:"/"}let c=Bg(a,l),d=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const tr=e=>e.join("/").replace(/\/\/+/g,"/"),$g=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gp=["post","put","patch","delete"];new Set(Gp);const Yg=["get",...Gp];new Set(Yg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zn(){return Zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Zn.apply(this,arguments)}const Ba=v.createContext(null),Zp=v.createContext(null),Ot=v.createContext(null),Ua=v.createContext(null),kt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Jp=v.createContext(null);function Kg(e,t){let{relative:r}=t===void 0?{}:t;ln()||pe(!1);let{basename:n,navigator:a}=v.useContext(Ot),{hash:s,pathname:o,search:l}=Wa(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:tr([n,o])),a.createHref({pathname:c,search:l,hash:s})}function ln(){return v.useContext(Ua)!=null}function st(){return ln()||pe(!1),v.useContext(Ua).location}function ef(e){v.useContext(Ot).static||v.useLayoutEffect(e)}function Nt(){let{isDataRoute:e}=v.useContext(kt);return e?c0():Qg()}function Qg(){ln()||pe(!1);let e=v.useContext(Ba),{basename:t,future:r,navigator:n}=v.useContext(Ot),{matches:a}=v.useContext(kt),{pathname:s}=st(),o=JSON.stringify(Ml(a,r.v7_relativeSplatPath)),l=v.useRef(!1);return ef(()=>{l.current=!0}),v.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let h=Al(d,JSON.parse(o),s,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:tr([t,h.pathname])),(f.replace?n.replace:n.push)(h,f.state,f)},[t,n,o,s,e])}const Xg=v.createContext(null);function Gg(e){let t=v.useContext(kt).outlet;return t&&v.createElement(Xg.Provider,{value:e},t)}function tf(){let{matches:e}=v.useContext(kt),t=e[e.length-1];return t?t.params:{}}function Wa(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=v.useContext(Ot),{matches:a}=v.useContext(kt),{pathname:s}=st(),o=JSON.stringify(Ml(a,n.v7_relativeSplatPath));return v.useMemo(()=>Al(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function Zg(e,t){return Jg(e,t)}function Jg(e,t,r,n){ln()||pe(!1);let{navigator:a}=v.useContext(Ot),{matches:s}=v.useContext(kt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=st(),f;if(t){var h;let w=typeof t=="string"?on(t):t;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||pe(!1),f=w}else f=d;let p=f.pathname||"/",b=p;if(c!=="/"){let w=c.replace(/^\//,"").split("/");b="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=Cg(e,{pathname:b}),y=i0(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:tr([c,a.encodeLocation?a.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:tr([c,a.encodeLocation?a.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,r,n);return t&&y?v.createElement(Ua.Provider,{value:{location:Zn({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:qt.Pop}},y):y}function e0(){let e=l0(),t=qg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:a},r):null,null)}const t0=v.createElement(e0,null);class r0 extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(kt.Provider,{value:this.props.routeContext},v.createElement(Jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function n0(e){let{routeContext:t,match:r,children:n}=e,a=v.useContext(Ba);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(kt.Provider,{value:t},n)}function i0(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(a=r)==null?void 0:a.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);f>=0||pe(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=f),h.route.id){let{loaderData:p,errors:b}=r,m=h.route.loader&&p[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||m){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,h,p)=>{let b,m=!1,y=null,w=null;r&&(b=l&&h.route.id?l[h.route.id]:void 0,y=h.route.errorElement||t0,c&&(d<0&&p===0?(d0("route-fallback"),m=!0,w=null):d===p&&(m=!0,w=h.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,p+1)),u=()=>{let g;return b?g=y:m?g=w:h.route.Component?g=v.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=f,v.createElement(n0,{match:h,routeContext:{outlet:f,matches:x,isDataRoute:r!=null},children:g})};return r&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?v.createElement(r0,{location:r.location,revalidation:r.revalidation,component:y,error:b,children:u(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):u()},null)}var rf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rf||{}),nf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nf||{});function a0(e){let t=v.useContext(Ba);return t||pe(!1),t}function s0(e){let t=v.useContext(Zp);return t||pe(!1),t}function o0(e){let t=v.useContext(kt);return t||pe(!1),t}function af(e){let t=o0(),r=t.matches[t.matches.length-1];return r.route.id||pe(!1),r.route.id}function l0(){var e;let t=v.useContext(Jp),r=s0(),n=af();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function c0(){let{router:e}=a0(rf.UseNavigateStable),t=af(nf.UseNavigateStable),r=v.useRef(!1);return ef(()=>{r.current=!0}),v.useCallback(function(a,s){s===void 0&&(s={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Zn({fromRouteId:t},s)))},[e,t])}const td={};function d0(e,t,r){td[e]||(td[e]=!0)}function u0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jo(e){let{to:t,replace:r,state:n,relative:a}=e;ln()||pe(!1);let{future:s,static:o}=v.useContext(Ot),{matches:l}=v.useContext(kt),{pathname:c}=st(),d=Nt(),f=Al(t,Ml(l,s.v7_relativeSplatPath),c,a==="path"),h=JSON.stringify(f);return v.useEffect(()=>d(JSON.parse(h),{replace:r,state:n,relative:a}),[d,h,a,r,n]),null}function sf(e){return Gg(e.context)}function ge(e){pe(!1)}function p0(e){let{basename:t="/",children:r=null,location:n,navigationType:a=qt.Pop,navigator:s,static:o=!1,future:l}=e;ln()&&pe(!1);let c=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:c,navigator:s,static:o,future:Zn({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof n=="string"&&(n=on(n));let{pathname:f="/",search:h="",hash:p="",state:b=null,key:m="default"}=n,y=v.useMemo(()=>{let w=en(f,c);return w==null?null:{location:{pathname:w,search:h,hash:p,state:b,key:m},navigationType:a}},[c,f,h,p,b,m,a]);return y==null?null:v.createElement(Ot.Provider,{value:d},v.createElement(Ua.Provider,{children:r,value:y}))}function f0(e){let{children:t,location:r}=e;return Zg(ko(t),r)}new Promise(()=>{});function ko(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,a)=>{if(!v.isValidElement(n))return;let s=[...t,a];if(n.type===v.Fragment){r.push.apply(r,ko(n.props.children,s));return}n.type!==ge&&pe(!1),!n.props.index||!n.props.children||pe(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=ko(n.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ja.apply(this,arguments)}function of(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,s;for(s=0;s<n.length;s++)a=n[s],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function h0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function m0(e,t){return e.button===0&&(!t||t==="_self")&&!h0(e)}function No(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function g0(e,t){let r=No(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(s=>{r.append(a,s)})}),r}const x0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],v0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],y0="6";try{window.__reactRouterVersion=y0}catch{}const b0=v.createContext({isTransitioning:!1}),w0="startTransition",rd=uh[w0];function j0(e){let{basename:t,children:r,future:n,window:a}=e,s=v.useRef();s.current==null&&(s.current=kg({window:a,v5Compat:!0}));let o=s.current,[l,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:d}=n||{},f=v.useCallback(h=>{d&&rd?rd(()=>c(h)):c(h)},[c,d]);return v.useLayoutEffect(()=>o.listen(f),[o,f]),v.useEffect(()=>u0(n),[n]),v.createElement(p0,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:n})}const k0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I=v.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:s,replace:o,state:l,target:c,to:d,preventScrollReset:f,viewTransition:h}=t,p=of(t,x0),{basename:b}=v.useContext(Ot),m,y=!1;if(typeof d=="string"&&N0.test(d)&&(m=d,k0))try{let g=new URL(window.location.href),j=d.startsWith("//")?new URL(g.protocol+d):new URL(d),k=en(j.pathname,b);j.origin===g.origin&&k!=null?d=k+j.search+j.hash:y=!0}catch{}let w=Kg(d,{relative:a}),x=C0(d,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:h});function u(g){n&&n(g),g.defaultPrevented||x(g)}return v.createElement("a",ja({},p,{href:m||w,onClick:y||s?n:u,ref:r,target:c}))}),Dt=v.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:d,children:f}=t,h=of(t,v0),p=Wa(c,{relative:h.relative}),b=st(),m=v.useContext(Zp),{navigator:y,basename:w}=v.useContext(Ot),x=m!=null&&_0(p)&&d===!0,u=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,g=b.pathname,j=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(g=g.toLowerCase(),j=j?j.toLowerCase():null,u=u.toLowerCase()),j&&w&&(j=en(j,w)||j);const k=u!=="/"&&u.endsWith("/")?u.length-1:u.length;let _=g===u||!o&&g.startsWith(u)&&g.charAt(k)==="/",P=j!=null&&(j===u||!o&&j.startsWith(u)&&j.charAt(u.length)==="/"),R={isActive:_,isPending:P,isTransitioning:x},U=_?n:void 0,O;typeof s=="function"?O=s(R):O=[s,_?"active":null,P?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let Y=typeof l=="function"?l(R):l;return v.createElement(I,ja({},h,{"aria-current":U,className:O,ref:r,style:Y,to:c,viewTransition:d}),typeof f=="function"?f(R):f)});var So;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(So||(So={}));var nd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nd||(nd={}));function S0(e){let t=v.useContext(Ba);return t||pe(!1),t}function C0(e,t){let{target:r,replace:n,state:a,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,c=Nt(),d=st(),f=Wa(e,{relative:o});return v.useCallback(h=>{if(m0(h,r)){h.preventDefault();let p=n!==void 0?n:wa(d)===wa(f);c(e,{replace:p,state:a,preventScrollReset:s,relative:o,viewTransition:l})}},[d,c,f,n,a,r,e,s,o,l])}function E0(e){let t=v.useRef(No(e)),r=v.useRef(!1),n=st(),a=v.useMemo(()=>g0(n.search,r.current?null:t.current),[n.search]),s=Nt(),o=v.useCallback((l,c)=>{const d=No(typeof l=="function"?l(a):l);r.current=!0,s("?"+d,c)},[s,a]);return[a,o]}function _0(e,t){t===void 0&&(t={});let r=v.useContext(b0);r==null&&pe(!1);let{basename:n}=S0(So.useViewTransitionState),a=Wa(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=en(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=en(r.nextLocation.pathname,n)||r.nextLocation.pathname;return wo(a.pathname,o)!=null||wo(a.pathname,s)!=null}function lf(e,t){return function(){return e.apply(t,arguments)}}const{toString:R0}=Object.prototype,{getPrototypeOf:Dl}=Object,{iterator:$a,toStringTag:cf}=Symbol,Ha=(e=>t=>{const r=R0.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ht=e=>(e=e.toLowerCase(),t=>Ha(t)===e),Va=e=>t=>typeof t===e,{isArray:cn}=Array,tn=Va("undefined");function ii(e){return e!==null&&!tn(e)&&e.constructor!==null&&!tn(e.constructor)&&qe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const df=ht("ArrayBuffer");function P0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&df(e.buffer),t}const z0=Va("string"),qe=Va("function"),uf=Va("number"),ai=e=>e!==null&&typeof e=="object",T0=e=>e===!0||e===!1,Vi=e=>{if(Ha(e)!=="object")return!1;const t=Dl(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(cf in e)&&!($a in e)},L0=e=>{if(!ai(e)||ii(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},F0=ht("Date"),O0=ht("File"),M0=ht("Blob"),A0=ht("FileList"),D0=e=>ai(e)&&qe(e.pipe),I0=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||qe(e.append)&&((t=Ha(e))==="formdata"||t==="object"&&qe(e.toString)&&e.toString()==="[object FormData]"))},B0=ht("URLSearchParams"),[U0,W0,$0,H0]=["ReadableStream","Request","Response","Headers"].map(ht),V0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function si(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,a;if(typeof e!="object"&&(e=[e]),cn(e))for(n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else{if(ii(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(n=0;n<o;n++)l=s[n],t.call(null,e[l],l,e)}}function pf(e,t){if(ii(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,a;for(;n-- >0;)if(a=r[n],t===a.toLowerCase())return a;return null}const hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ff=e=>!tn(e)&&e!==hr;function Co(){const{caseless:e,skipUndefined:t}=ff(this)&&this||{},r={},n=(a,s)=>{const o=e&&pf(r,s)||s;Vi(r[o])&&Vi(a)?r[o]=Co(r[o],a):Vi(a)?r[o]=Co({},a):cn(a)?r[o]=a.slice():(!t||!tn(a))&&(r[o]=a)};for(let a=0,s=arguments.length;a<s;a++)arguments[a]&&si(arguments[a],n);return r}const q0=(e,t,r,{allOwnKeys:n}={})=>(si(t,(a,s)=>{r&&qe(a)?e[s]=lf(a,r):e[s]=a},{allOwnKeys:n}),e),Y0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),K0=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Q0=(e,t,r,n)=>{let a,s,o;const l={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),s=a.length;s-- >0;)o=a[s],(!n||n(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&Dl(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},X0=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},G0=e=>{if(!e)return null;if(cn(e))return e;let t=e.length;if(!uf(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Z0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Dl(Uint8Array)),J0=(e,t)=>{const n=(e&&e[$a]).call(e);let a;for(;(a=n.next())&&!a.done;){const s=a.value;t.call(e,s[0],s[1])}},ex=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},tx=ht("HTMLFormElement"),rx=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,a){return n.toUpperCase()+a}),id=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),nx=ht("RegExp"),hf=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};si(r,(a,s)=>{let o;(o=t(a,s,e))!==!1&&(n[s]=o||a)}),Object.defineProperties(e,n)},ix=e=>{hf(e,(t,r)=>{if(qe(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(qe(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},ax=(e,t)=>{const r={},n=a=>{a.forEach(s=>{r[s]=!0})};return cn(e)?n(e):n(String(e).split(t)),r},sx=()=>{},ox=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function lx(e){return!!(e&&qe(e.append)&&e[cf]==="FormData"&&e[$a])}const cx=e=>{const t=new Array(10),r=(n,a)=>{if(ai(n)){if(t.indexOf(n)>=0)return;if(ii(n))return n;if(!("toJSON"in n)){t[a]=n;const s=cn(n)?[]:{};return si(n,(o,l)=>{const c=r(o,a+1);!tn(c)&&(s[l]=c)}),t[a]=void 0,s}}return n};return r(e,0)},dx=ht("AsyncFunction"),ux=e=>e&&(ai(e)||qe(e))&&qe(e.then)&&qe(e.catch),mf=((e,t)=>e?setImmediate:t?((r,n)=>(hr.addEventListener("message",({source:a,data:s})=>{a===hr&&s===r&&n.length&&n.shift()()},!1),a=>{n.push(a),hr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",qe(hr.postMessage)),px=typeof queueMicrotask<"u"?queueMicrotask.bind(hr):typeof process<"u"&&process.nextTick||mf,fx=e=>e!=null&&qe(e[$a]),N={isArray:cn,isArrayBuffer:df,isBuffer:ii,isFormData:I0,isArrayBufferView:P0,isString:z0,isNumber:uf,isBoolean:T0,isObject:ai,isPlainObject:Vi,isEmptyObject:L0,isReadableStream:U0,isRequest:W0,isResponse:$0,isHeaders:H0,isUndefined:tn,isDate:F0,isFile:O0,isBlob:M0,isRegExp:nx,isFunction:qe,isStream:D0,isURLSearchParams:B0,isTypedArray:Z0,isFileList:A0,forEach:si,merge:Co,extend:q0,trim:V0,stripBOM:Y0,inherits:K0,toFlatObject:Q0,kindOf:Ha,kindOfTest:ht,endsWith:X0,toArray:G0,forEachEntry:J0,matchAll:ex,isHTMLForm:tx,hasOwnProperty:id,hasOwnProp:id,reduceDescriptors:hf,freezeMethods:ix,toObjectSet:ax,toCamelCase:rx,noop:sx,toFiniteNumber:ox,findKey:pf,global:hr,isContextDefined:ff,isSpecCompliantForm:lx,toJSONObject:cx,isAsyncFn:dx,isThenable:ux,setImmediate:mf,asap:px,isIterable:fx};function $(e,t,r,n,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),a&&(this.response=a,this.status=a.status?a.status:null)}N.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const gf=$.prototype,xf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xf[e]={value:e}});Object.defineProperties($,xf);Object.defineProperty(gf,"isAxiosError",{value:!0});$.from=(e,t,r,n,a,s)=>{const o=Object.create(gf);N.toFlatObject(e,o,function(f){return f!==Error.prototype},d=>d!=="isAxiosError");const l=e&&e.message?e.message:"Error",c=t==null&&e?e.code:t;return $.call(o,l,c,r,n,a),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",s&&Object.assign(o,s),o};const hx=null;function Eo(e){return N.isPlainObject(e)||N.isArray(e)}function vf(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function ad(e,t,r){return e?e.concat(t).map(function(a,s){return a=vf(a),!r&&s?"["+a+"]":a}).join(r?".":""):t}function mx(e){return N.isArray(e)&&!e.some(Eo)}const gx=N.toFlatObject(N,{},null,function(t){return/^is[A-Z]/.test(t)});function qa(e,t,r){if(!N.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=N.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!N.isUndefined(w[y])});const n=r.metaTokens,a=r.visitor||f,s=r.dots,o=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(t);if(!N.isFunction(a))throw new TypeError("visitor must be a function");function d(m){if(m===null)return"";if(N.isDate(m))return m.toISOString();if(N.isBoolean(m))return m.toString();if(!c&&N.isBlob(m))throw new $("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(m)||N.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,y,w){let x=m;if(m&&!w&&typeof m=="object"){if(N.endsWith(y,"{}"))y=n?y:y.slice(0,-2),m=JSON.stringify(m);else if(N.isArray(m)&&mx(m)||(N.isFileList(m)||N.endsWith(y,"[]"))&&(x=N.toArray(m)))return y=vf(y),x.forEach(function(g,j){!(N.isUndefined(g)||g===null)&&t.append(o===!0?ad([y],j,s):o===null?y:y+"[]",d(g))}),!1}return Eo(m)?!0:(t.append(ad(w,y,s),d(m)),!1)}const h=[],p=Object.assign(gx,{defaultVisitor:f,convertValue:d,isVisitable:Eo});function b(m,y){if(!N.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(m),N.forEach(m,function(x,u){(!(N.isUndefined(x)||x===null)&&a.call(t,x,N.isString(u)?u.trim():u,y,p))===!0&&b(x,y?y.concat(u):[u])}),h.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return b(e),t}function sd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Il(e,t){this._pairs=[],e&&qa(e,this,t)}const yf=Il.prototype;yf.append=function(t,r){this._pairs.push([t,r])};yf.toString=function(t){const r=t?function(n){return t.call(this,n,sd)}:sd;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function xx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function bf(e,t,r){if(!t)return e;const n=r&&r.encode||xx;N.isFunction(r)&&(r={serialize:r});const a=r&&r.serialize;let s;if(a?s=a(t,r):s=N.isURLSearchParams(t)?t.toString():new Il(t,r).toString(n),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class od{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){N.forEach(this.handlers,function(n){n!==null&&t(n)})}}const wf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vx=typeof URLSearchParams<"u"?URLSearchParams:Il,yx=typeof FormData<"u"?FormData:null,bx=typeof Blob<"u"?Blob:null,wx={isBrowser:!0,classes:{URLSearchParams:vx,FormData:yx,Blob:bx},protocols:["http","https","file","blob","url","data"]},Bl=typeof window<"u"&&typeof document<"u",_o=typeof navigator=="object"&&navigator||void 0,jx=Bl&&(!_o||["ReactNative","NativeScript","NS"].indexOf(_o.product)<0),kx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Nx=Bl&&window.location.href||"http://localhost",Sx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bl,hasStandardBrowserEnv:jx,hasStandardBrowserWebWorkerEnv:kx,navigator:_o,origin:Nx},Symbol.toStringTag,{value:"Module"})),Te={...Sx,...wx};function Cx(e,t){return qa(e,new Te.classes.URLSearchParams,{visitor:function(r,n,a,s){return Te.isNode&&N.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function Ex(e){return N.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _x(e){const t={},r=Object.keys(e);let n;const a=r.length;let s;for(n=0;n<a;n++)s=r[n],t[s]=e[s];return t}function jf(e){function t(r,n,a,s){let o=r[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=s>=r.length;return o=!o&&N.isArray(a)?a.length:o,c?(N.hasOwnProp(a,o)?a[o]=[a[o],n]:a[o]=n,!l):((!a[o]||!N.isObject(a[o]))&&(a[o]=[]),t(r,n,a[o],s)&&N.isArray(a[o])&&(a[o]=_x(a[o])),!l)}if(N.isFormData(e)&&N.isFunction(e.entries)){const r={};return N.forEachEntry(e,(n,a)=>{t(Ex(n),a,r,0)}),r}return null}function Rx(e,t,r){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const oi={transitional:wf,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",a=n.indexOf("application/json")>-1,s=N.isObject(t);if(s&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t))return a?JSON.stringify(jf(t)):t;if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t)||N.isReadableStream(t))return t;if(N.isArrayBufferView(t))return t.buffer;if(N.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Cx(t,this.formSerializer).toString();if((l=N.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return qa(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||a?(r.setContentType("application/json",!1),Rx(t)):t}],transformResponse:[function(t){const r=this.transitional||oi.transitional,n=r&&r.forcedJSONParsing,a=this.responseType==="json";if(N.isResponse(t)||N.isReadableStream(t))return t;if(t&&N.isString(t)&&(n&&!this.responseType||a)){const o=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?$.from(l,$.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Te.classes.FormData,Blob:Te.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],e=>{oi.headers[e]={}});const Px=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zx=e=>{const t={};let r,n,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),r=o.substring(0,a).trim().toLowerCase(),n=o.substring(a+1).trim(),!(!r||t[r]&&Px[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},ld=Symbol("internals");function yn(e){return e&&String(e).trim().toLowerCase()}function qi(e){return e===!1||e==null?e:N.isArray(e)?e.map(qi):String(e)}function Tx(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Lx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ks(e,t,r,n,a){if(N.isFunction(n))return n.call(this,t,r);if(a&&(t=r),!!N.isString(t)){if(N.isString(n))return t.indexOf(n)!==-1;if(N.isRegExp(n))return n.test(t)}}function Fx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Ox(e,t){const r=N.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(a,s,o){return this[n].call(this,t,a,s,o)},configurable:!0})})}let Ye=class{constructor(t){t&&this.set(t)}set(t,r,n){const a=this;function s(l,c,d){const f=yn(c);if(!f)throw new Error("header name must be a non-empty string");const h=N.findKey(a,f);(!h||a[h]===void 0||d===!0||d===void 0&&a[h]!==!1)&&(a[h||c]=qi(l))}const o=(l,c)=>N.forEach(l,(d,f)=>s(d,f,c));if(N.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(N.isString(t)&&(t=t.trim())&&!Lx(t))o(zx(t),r);else if(N.isObject(t)&&N.isIterable(t)){let l={},c,d;for(const f of t){if(!N.isArray(f))throw TypeError("Object iterator must return a key-value pair");l[d=f[0]]=(c=l[d])?N.isArray(c)?[...c,f[1]]:[c,f[1]]:f[1]}o(l,r)}else t!=null&&s(r,t,n);return this}get(t,r){if(t=yn(t),t){const n=N.findKey(this,t);if(n){const a=this[n];if(!r)return a;if(r===!0)return Tx(a);if(N.isFunction(r))return r.call(this,a,n);if(N.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=yn(t),t){const n=N.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||ks(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let a=!1;function s(o){if(o=yn(o),o){const l=N.findKey(n,o);l&&(!r||ks(n,n[l],l,r))&&(delete n[l],a=!0)}}return N.isArray(t)?t.forEach(s):s(t),a}clear(t){const r=Object.keys(this);let n=r.length,a=!1;for(;n--;){const s=r[n];(!t||ks(this,this[s],s,t,!0))&&(delete this[s],a=!0)}return a}normalize(t){const r=this,n={};return N.forEach(this,(a,s)=>{const o=N.findKey(n,s);if(o){r[o]=qi(a),delete r[s];return}const l=t?Fx(s):String(s).trim();l!==s&&delete r[s],r[l]=qi(a),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return N.forEach(this,(n,a)=>{n!=null&&n!==!1&&(r[a]=t&&N.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(a=>n.set(a)),n}static accessor(t){const n=(this[ld]=this[ld]={accessors:{}}).accessors,a=this.prototype;function s(o){const l=yn(o);n[l]||(Ox(a,o),n[l]=!0)}return N.isArray(t)?t.forEach(s):s(t),this}};Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Ye.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});N.freezeMethods(Ye);function Ns(e,t){const r=this||oi,n=t||r,a=Ye.from(n.headers);let s=n.data;return N.forEach(e,function(l){s=l.call(r,s,a.normalize(),t?t.status:void 0)}),a.normalize(),s}function kf(e){return!!(e&&e.__CANCEL__)}function dn(e,t,r){$.call(this,e??"canceled",$.ERR_CANCELED,t,r),this.name="CanceledError"}N.inherits(dn,$,{__CANCEL__:!0});function Nf(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new $("Request failed with status code "+r.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function Mx(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ax(e,t){e=e||10;const r=new Array(e),n=new Array(e);let a=0,s=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),f=n[s];o||(o=d),r[a]=c,n[a]=d;let h=s,p=0;for(;h!==a;)p+=r[h++],h=h%e;if(a=(a+1)%e,a===s&&(s=(s+1)%e),d-o<t)return;const b=f&&d-f;return b?Math.round(p*1e3/b):void 0}}function Dx(e,t){let r=0,n=1e3/t,a,s;const o=(d,f=Date.now())=>{r=f,a=null,s&&(clearTimeout(s),s=null),e(...d)};return[(...d)=>{const f=Date.now(),h=f-r;h>=n?o(d,f):(a=d,s||(s=setTimeout(()=>{s=null,o(a)},n-h)))},()=>a&&o(a)]}const ka=(e,t,r=3)=>{let n=0;const a=Ax(50,250);return Dx(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,c=o-n,d=a(c),f=o<=l;n=o;const h={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&f?(l-o)/d:void 0,event:s,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(h)},r)},cd=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},dd=e=>(...t)=>N.asap(()=>e(...t)),Ix=Te.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Te.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Te.origin),Te.navigator&&/(msie|trident)/i.test(Te.navigator.userAgent)):()=>!0,Bx=Te.hasStandardBrowserEnv?{write(e,t,r,n,a,s){const o=[e+"="+encodeURIComponent(t)];N.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),N.isString(n)&&o.push("path="+n),N.isString(a)&&o.push("domain="+a),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ux(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Wx(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Sf(e,t,r){let n=!Ux(t);return e&&(n||r==!1)?Wx(e,t):t}const ud=e=>e instanceof Ye?{...e}:e;function kr(e,t){t=t||{};const r={};function n(d,f,h,p){return N.isPlainObject(d)&&N.isPlainObject(f)?N.merge.call({caseless:p},d,f):N.isPlainObject(f)?N.merge({},f):N.isArray(f)?f.slice():f}function a(d,f,h,p){if(N.isUndefined(f)){if(!N.isUndefined(d))return n(void 0,d,h,p)}else return n(d,f,h,p)}function s(d,f){if(!N.isUndefined(f))return n(void 0,f)}function o(d,f){if(N.isUndefined(f)){if(!N.isUndefined(d))return n(void 0,d)}else return n(void 0,f)}function l(d,f,h){if(h in t)return n(d,f);if(h in e)return n(void 0,d)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(d,f,h)=>a(ud(d),ud(f),h,!0)};return N.forEach(Object.keys({...e,...t}),function(f){const h=c[f]||a,p=h(e[f],t[f],f);N.isUndefined(p)&&h!==l||(r[f]=p)}),r}const Cf=e=>{const t=kr({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:a,xsrfCookieName:s,headers:o,auth:l}=t;if(t.headers=o=Ye.from(o),t.url=bf(Sf(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),N.isFormData(r)){if(Te.hasStandardBrowserEnv||Te.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(N.isFunction(r.getHeaders)){const c=r.getHeaders(),d=["content-type","content-length"];Object.entries(c).forEach(([f,h])=>{d.includes(f.toLowerCase())&&o.set(f,h)})}}if(Te.hasStandardBrowserEnv&&(n&&N.isFunction(n)&&(n=n(t)),n||n!==!1&&Ix(t.url))){const c=a&&s&&Bx.read(s);c&&o.set(a,c)}return t},$x=typeof XMLHttpRequest<"u",Hx=$x&&function(e){return new Promise(function(r,n){const a=Cf(e);let s=a.data;const o=Ye.from(a.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=a,f,h,p,b,m;function y(){b&&b(),m&&m(),a.cancelToken&&a.cancelToken.unsubscribe(f),a.signal&&a.signal.removeEventListener("abort",f)}let w=new XMLHttpRequest;w.open(a.method.toUpperCase(),a.url,!0),w.timeout=a.timeout;function x(){if(!w)return;const g=Ye.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:g,config:e,request:w};Nf(function(P){r(P),y()},function(P){n(P),y()},k),w=null}"onloadend"in w?w.onloadend=x:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(x)},w.onabort=function(){w&&(n(new $("Request aborted",$.ECONNABORTED,e,w)),w=null)},w.onerror=function(j){const k=j&&j.message?j.message:"Network Error",_=new $(k,$.ERR_NETWORK,e,w);_.event=j||null,n(_),w=null},w.ontimeout=function(){let j=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const k=a.transitional||wf;a.timeoutErrorMessage&&(j=a.timeoutErrorMessage),n(new $(j,k.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,w)),w=null},s===void 0&&o.setContentType(null),"setRequestHeader"in w&&N.forEach(o.toJSON(),function(j,k){w.setRequestHeader(k,j)}),N.isUndefined(a.withCredentials)||(w.withCredentials=!!a.withCredentials),l&&l!=="json"&&(w.responseType=a.responseType),d&&([p,m]=ka(d,!0),w.addEventListener("progress",p)),c&&w.upload&&([h,b]=ka(c),w.upload.addEventListener("progress",h),w.upload.addEventListener("loadend",b)),(a.cancelToken||a.signal)&&(f=g=>{w&&(n(!g||g.type?new dn(null,e,w):g),w.abort(),w=null)},a.cancelToken&&a.cancelToken.subscribe(f),a.signal&&(a.signal.aborted?f():a.signal.addEventListener("abort",f)));const u=Mx(a.url);if(u&&Te.protocols.indexOf(u)===-1){n(new $("Unsupported protocol "+u+":",$.ERR_BAD_REQUEST,e));return}w.send(s||null)})},Vx=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,a;const s=function(d){if(!a){a=!0,l();const f=d instanceof Error?d:this.reason;n.abort(f instanceof $?f:new dn(f instanceof Error?f.message:f))}};let o=t&&setTimeout(()=>{o=null,s(new $(`timeout ${t} of ms exceeded`,$.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(s):d.removeEventListener("abort",s)}),e=null)};e.forEach(d=>d.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=()=>N.asap(l),c}},qx=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,a;for(;n<r;)a=n+t,yield e.slice(n,a),n=a},Yx=async function*(e,t){for await(const r of Kx(e))yield*qx(r,t)},Kx=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},pd=(e,t,r,n)=>{const a=Yx(e,t);let s=0,o,l=c=>{o||(o=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:d,value:f}=await a.next();if(d){l(),c.close();return}let h=f.byteLength;if(r){let p=s+=h;r(p)}c.enqueue(new Uint8Array(f))}catch(d){throw l(d),d}},cancel(c){return l(c),a.return()}},{highWaterMark:2})},fd=64*1024,{isFunction:Ri}=N,Qx=(({Request:e,Response:t})=>({Request:e,Response:t}))(N.global),{ReadableStream:hd,TextEncoder:md}=N.global,gd=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Xx=e=>{e=N.merge.call({skipUndefined:!0},Qx,e);const{fetch:t,Request:r,Response:n}=e,a=t?Ri(t):typeof fetch=="function",s=Ri(r),o=Ri(n);if(!a)return!1;const l=a&&Ri(hd),c=a&&(typeof md=="function"?(m=>y=>m.encode(y))(new md):async m=>new Uint8Array(await new r(m).arrayBuffer())),d=s&&l&&gd(()=>{let m=!1;const y=new r(Te.origin,{body:new hd,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!y}),f=o&&l&&gd(()=>N.isReadableStream(new n("").body)),h={stream:f&&(m=>m.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!h[m]&&(h[m]=(y,w)=>{let x=y&&y[m];if(x)return x.call(y);throw new $(`Response type '${m}' is not supported`,$.ERR_NOT_SUPPORT,w)})});const p=async m=>{if(m==null)return 0;if(N.isBlob(m))return m.size;if(N.isSpecCompliantForm(m))return(await new r(Te.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(N.isArrayBufferView(m)||N.isArrayBuffer(m))return m.byteLength;if(N.isURLSearchParams(m)&&(m=m+""),N.isString(m))return(await c(m)).byteLength},b=async(m,y)=>{const w=N.toFiniteNumber(m.getContentLength());return w??p(y)};return async m=>{let{url:y,method:w,data:x,signal:u,cancelToken:g,timeout:j,onDownloadProgress:k,onUploadProgress:_,responseType:P,headers:R,withCredentials:U="same-origin",fetchOptions:O}=Cf(m),Y=t||fetch;P=P?(P+"").toLowerCase():"text";let B=Vx([u,g&&g.toAbortSignal()],j),oe=null;const ve=B&&B.unsubscribe&&(()=>{B.unsubscribe()});let F;try{if(_&&d&&w!=="get"&&w!=="head"&&(F=await b(R,x))!==0){let q=new r(y,{method:"POST",body:x,duplex:"half"}),H;if(N.isFormData(x)&&(H=q.headers.get("content-type"))&&R.setContentType(H),q.body){const[je,ye]=cd(F,ka(dd(_)));x=pd(q.body,fd,je,ye)}}N.isString(U)||(U=U?"include":"omit");const D=s&&"credentials"in r.prototype,G={...O,signal:B,method:w.toUpperCase(),headers:R.normalize().toJSON(),body:x,duplex:"half",credentials:D?U:void 0};oe=s&&new r(y,G);let C=await(s?Y(oe,O):Y(y,G));const S=f&&(P==="stream"||P==="response");if(f&&(k||S&&ve)){const q={};["status","statusText","headers"].forEach(Fe=>{q[Fe]=C[Fe]});const H=N.toFiniteNumber(C.headers.get("content-length")),[je,ye]=k&&cd(H,ka(dd(k),!0))||[];C=new n(pd(C.body,fd,je,()=>{ye&&ye(),ve&&ve()}),q)}P=P||"text";let T=await h[N.findKey(h,P)||"text"](C,m);return!S&&ve&&ve(),await new Promise((q,H)=>{Nf(q,H,{data:T,headers:Ye.from(C.headers),status:C.status,statusText:C.statusText,config:m,request:oe})})}catch(D){throw ve&&ve(),D&&D.name==="TypeError"&&/Load failed|fetch/i.test(D.message)?Object.assign(new $("Network Error",$.ERR_NETWORK,m,oe),{cause:D.cause||D}):$.from(D,D&&D.code,m,oe)}}},Gx=new Map,Ef=e=>{let t=e?e.env:{};const{fetch:r,Request:n,Response:a}=t,s=[n,a,r];let o=s.length,l=o,c,d,f=Gx;for(;l--;)c=s[l],d=f.get(c),d===void 0&&f.set(c,d=l?new Map:Xx(t)),f=d;return d};Ef();const Ro={http:hx,xhr:Hx,fetch:{get:Ef}};N.forEach(Ro,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const xd=e=>`- ${e}`,Zx=e=>N.isFunction(e)||e===null||e===!1,_f={getAdapter:(e,t)=>{e=N.isArray(e)?e:[e];const{length:r}=e;let n,a;const s={};for(let o=0;o<r;o++){n=e[o];let l;if(a=n,!Zx(n)&&(a=Ro[(l=String(n)).toLowerCase()],a===void 0))throw new $(`Unknown adapter '${l}'`);if(a&&(N.isFunction(a)||(a=a.get(t))))break;s[l||"#"+o]=a}if(!a){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(xd).join(`
`):" "+xd(o[0]):"as no adapter specified";throw new $("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return a},adapters:Ro};function Ss(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new dn(null,e)}function vd(e){return Ss(e),e.headers=Ye.from(e.headers),e.data=Ns.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_f.getAdapter(e.adapter||oi.adapter,e)(e).then(function(n){return Ss(e),n.data=Ns.call(e,e.transformResponse,n),n.headers=Ye.from(n.headers),n},function(n){return kf(n)||(Ss(e),n&&n.response&&(n.response.data=Ns.call(e,e.transformResponse,n.response),n.response.headers=Ye.from(n.response.headers))),Promise.reject(n)})}const Rf="1.12.2",Ya={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ya[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const yd={};Ya.transitional=function(t,r,n){function a(s,o){return"[Axios v"+Rf+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return(s,o,l)=>{if(t===!1)throw new $(a(o," has been removed"+(r?" in "+r:"")),$.ERR_DEPRECATED);return r&&!yd[o]&&(yd[o]=!0,console.warn(a(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,l):!0}};Ya.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Jx(e,t,r){if(typeof e!="object")throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let a=n.length;for(;a-- >0;){const s=n[a],o=t[s];if(o){const l=e[s],c=l===void 0||o(l,s,e);if(c!==!0)throw new $("option "+s+" must be "+c,$.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new $("Unknown option "+s,$.ERR_BAD_OPTION)}}const Yi={assertOptions:Jx,validators:Ya},xt=Yi.validators;let xr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new od,response:new od}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const s=a.stack?a.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=kr(this.defaults,r);const{transitional:n,paramsSerializer:a,headers:s}=r;n!==void 0&&Yi.assertOptions(n,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),a!=null&&(N.isFunction(a)?r.paramsSerializer={serialize:a}:Yi.assertOptions(a,{encode:xt.function,serialize:xt.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Yi.assertOptions(r,{baseUrl:xt.spelling("baseURL"),withXsrfToken:xt.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=s&&N.merge(s.common,s[r.method]);s&&N.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),r.headers=Ye.concat(o,s);const l=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(c=c&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const d=[];this.interceptors.response.forEach(function(y){d.push(y.fulfilled,y.rejected)});let f,h=0,p;if(!c){const m=[vd.bind(this),void 0];for(m.unshift(...l),m.push(...d),p=m.length,f=Promise.resolve(r);h<p;)f=f.then(m[h++],m[h++]);return f}p=l.length;let b=r;for(;h<p;){const m=l[h++],y=l[h++];try{b=m(b)}catch(w){y.call(this,w);break}}try{f=vd.call(this,b)}catch(m){return Promise.reject(m)}for(h=0,p=d.length;h<p;)f=f.then(d[h++],d[h++]);return f}getUri(t){t=kr(this.defaults,t);const r=Sf(t.baseURL,t.url,t.allowAbsoluteUrls);return bf(r,t.params,t.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(t){xr.prototype[t]=function(r,n){return this.request(kr(n||{},{method:t,url:r,data:(n||{}).data}))}});N.forEach(["post","put","patch"],function(t){function r(n){return function(s,o,l){return this.request(kr(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}xr.prototype[t]=r(),xr.prototype[t+"Form"]=r(!0)});let e1=class Pf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(a=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](a);n._listeners=null}),this.promise.then=a=>{let s;const o=new Promise(l=>{n.subscribe(l),s=l}).then(a);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s,o,l){n.reason||(n.reason=new dn(s,o,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Pf(function(a){t=a}),cancel:t}}};function t1(e){return function(r){return e.apply(null,r)}}function r1(e){return N.isObject(e)&&e.isAxiosError===!0}const Po={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Po).forEach(([e,t])=>{Po[t]=e});function zf(e){const t=new xr(e),r=lf(xr.prototype.request,t);return N.extend(r,xr.prototype,t,{allOwnKeys:!0}),N.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return zf(kr(e,a))},r}const ce=zf(oi);ce.Axios=xr;ce.CanceledError=dn;ce.CancelToken=e1;ce.isCancel=kf;ce.VERSION=Rf;ce.toFormData=qa;ce.AxiosError=$;ce.Cancel=ce.CanceledError;ce.all=function(t){return Promise.all(t)};ce.spread=t1;ce.isAxiosError=r1;ce.mergeConfig=kr;ce.AxiosHeaders=Ye;ce.formToJSON=e=>jf(N.isHTMLForm(e)?new FormData(e):e);ce.getAdapter=_f.getAdapter;ce.HttpStatusCode=Po;ce.default=ce;const{Axios:nv,AxiosError:iv,CanceledError:av,isCancel:sv,CancelToken:ov,VERSION:lv,all:cv,Cancel:dv,isAxiosError:uv,spread:pv,toFormData:fv,AxiosHeaders:hv,HttpStatusCode:mv,formToJSON:gv,getAdapter:xv,mergeConfig:vv}=ce,W=ce.create({baseURL:"/api/v1"}),bd=typeof window<"u"?localStorage.getItem("access_token"):null;bd&&(W.defaults.headers.common.Authorization=`Bearer ${bd}`);function wd(e){e?W.defaults.headers.common.Authorization=`Bearer ${e}`:delete W.defaults.headers.common.Authorization}W.interceptors.request.use(e=>{try{const t=(e.url||"").toLowerCase();if(!(t.includes("/auth/login")||t.includes("/auth/register")||t.includes("/auth/refresh"))){const n=localStorage.getItem("access_token");n&&(e.headers=e.headers||{},e.headers.Authorization=`Bearer ${n}`)}}catch{}return e});let _r=!1,zo=[];function Pi(e){zo.forEach(t=>t(e)),zo=[]}W.interceptors.response.use(e=>e,async e=>{var n;const t=e.config;if(!t)return Promise.reject(e);if(((n=e.response)==null?void 0:n.status)===401&&!t._retry){t._retry=!0;try{if(_r)return new Promise((d,f)=>{zo.push(h=>{h?(t.headers.Authorization=`Bearer ${h}`,d(W(t))):f(e)})});_r=!0;const a=localStorage.getItem("refresh_token");if(!a){Pi(null),_r=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}try{window.location.href="/login"}catch{}return Promise.reject(e)}const o=(await ce.post("/api/v1/auth/refresh",{refresh_token:a})).data,l=o==null?void 0:o.access_token,c=o==null?void 0:o.refresh_token;if(l)return localStorage.setItem("access_token",l),c&&localStorage.setItem("refresh_token",c),W.defaults.headers.common.Authorization=`Bearer ${l}`,Pi(l),_r=!1,t.headers.Authorization=`Bearer ${l}`,W(t);Pi(null),_r=!1}catch{Pi(null),_r=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}try{window.location.href="/login"}catch{}return Promise.reject(e)}}return Promise.reject(e)});const Tf=v.createContext(void 0);function n1({children:e}){const[t,r]=v.useState(null),[n,a]=v.useState(null),[s,o]=v.useState(!0);v.useEffect(()=>{const c=localStorage.getItem("access_token"),d=localStorage.getItem("user");c&&a(c),d&&r(JSON.parse(d)),o(!1)},[]),v.useEffect(()=>{wd(n)},[n]);const l=v.useMemo(()=>({user:t,accessToken:n,loading:s,login:async(c,d)=>{const f=await W.post("/auth/login",{email:c,password:d}),{access_token:h,refresh_token:p,user:b}=f.data;r(b),a(h),localStorage.setItem("access_token",h),p&&localStorage.setItem("refresh_token",p),localStorage.setItem("user",JSON.stringify(b)),wd(h)},register:async(c,d,f)=>{await W.post("/auth/register",{email:c,password:d,full_name:f})},logout:()=>{r(null),a(null),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")},updateUser:c=>{r(d=>{const f={...d||{},...c};try{localStorage.setItem("user",JSON.stringify(f))}catch{}return f})}}),[t,n,s]);return i.jsx(Tf.Provider,{value:l,children:e})}function mt(){const e=v.useContext(Tf);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}function jd(){const{user:e}=mt();return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"hero",children:i.jsxs("div",{className:"container hero-inner",children:[i.jsxs("div",{className:"hero-copy",children:[i.jsx("p",{className:"kicker",children:"Welcome to"}),i.jsx("h1",{className:"headline",children:"Everyday Essentials, Thoughtfully Made"}),i.jsx("p",{className:"subhead",children:"Curated apparel and accessories crafted for comfort, durability, and timeless style."}),e?i.jsxs("div",{className:"hero-ctas",children:[i.jsx(I,{to:"/about",className:"btn btn-primary",children:"Learn More"}),i.jsx(I,{to:"/shop",className:"btn btn-ghost",children:"Visit Shop"})]}):i.jsxs("div",{className:"hero-ctas",children:[i.jsx(I,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),i.jsx(I,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]}),i.jsxs("div",{className:"hero-images",children:[i.jsx("img",{src:"/images/hero-1.jpg",alt:"Lifestyle banner"}),i.jsx("img",{src:"/images/hero-2.jpg",alt:"Crafted details"})]})]})}),!e&&i.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:i.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[i.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to See More?"}),i.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to explore our full collections, view features, and start shopping!"}),i.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[i.jsx(I,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),i.jsx(I,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),e&&i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"section alt",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"About Us"}),i.jsx("p",{className:"lead",children:"We’re a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance. Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care."}),i.jsxs("div",{className:"cards three",children:[i.jsxs("div",{className:"info-card",children:[i.jsx("h3",{children:"What we do"}),i.jsx("p",{children:"From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use."})]}),i.jsxs("div",{className:"info-card",children:[i.jsx("h3",{children:"How we work"}),i.jsx("p",{children:"Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what’s delivered."})]}),i.jsxs("div",{className:"info-card",children:[i.jsx("h3",{children:"Our promise"}),i.jsx("p",{children:"Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition."})]})]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Our Mission"}),i.jsx("p",{className:"lead",children:"Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends."}),i.jsxs("ul",{className:"bullets",children:[i.jsx("li",{children:"Material-first design choices with soft-hand, responsibly sourced textiles."}),i.jsx("li",{children:"Timeless palettes and silhouettes that pair across wardrobes."}),i.jsx("li",{children:"Continuous improvements guided by real customer feedback."})]})]})}),i.jsx("section",{className:"section alt",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Why Choose Us"}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"feature",children:[i.jsx("div",{className:"feature-badge",children:"Quality"}),i.jsx("h3",{children:"Built to last"}),i.jsx("p",{children:"Reinforced stitching, reliable hardware, and color-fast finishes keep pieces in rotation longer."})]}),i.jsxs("div",{className:"feature",children:[i.jsx("div",{className:"feature-badge",children:"Trust"}),i.jsx("h3",{children:"Transparent sourcing"}),i.jsx("p",{children:"Clear specs, care guides, and honest descriptions so purchasing decisions are easy and informed."})]}),i.jsxs("div",{className:"feature",children:[i.jsx("div",{className:"feature-badge",children:"Care"}),i.jsx("h3",{children:"Responsive support"}),i.jsx("p",{children:"Friendly, prompt help from real people for sizing, care, and post-purchase questions."})]}),i.jsxs("div",{className:"feature",children:[i.jsx("div",{className:"feature-badge",children:"Value"}),i.jsx("h3",{children:"Fair pricing"}),i.jsx("p",{children:"Essentials priced for everyday use without compromising on materials or finish."})]})]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"What Customers Say"}),i.jsxs("div",{className:"testimonials",children:[i.jsxs("blockquote",{className:"quote",children:["“The fabric quality is excellent and the fit stays consistent after washes. Great staples.”",i.jsx("footer",{children:"— A. Perera"})]}),i.jsxs("blockquote",{className:"quote",children:["“Support was quick to help with sizing. Delivery was on time and packaging was neat.”",i.jsx("footer",{children:"— S. Fernando"})]}),i.jsxs("blockquote",{className:"quote",children:["“Clean design and no loud branding. Exactly what I wanted for daily wear.”",i.jsx("footer",{children:"— N. Jayasuriya"})]})]})]})}),i.jsx("section",{className:"section alt",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Special Highlights"}),i.jsxs("div",{className:"cards three",children:[i.jsxs("div",{className:"promo-card",children:[i.jsx("h3",{children:"Seasonal Edit"}),i.jsx("p",{children:"Limited colorways and refreshed textures—perfect for the current season."}),i.jsx(I,{to:"/shop",className:"btn btn-link",children:"Explore"})]}),i.jsxs("div",{className:"promo-card",children:[i.jsx("h3",{children:"Bundle Savings"}),i.jsx("p",{children:"Save on curated combos like tee + cap or backpack + organizer."}),i.jsx(I,{to:"/shop",className:"btn btn-link",children:"View Bundles"})]}),i.jsxs("div",{className:"promo-card",children:[i.jsx("h3",{children:"Student Perks"}),i.jsx("p",{children:"Verified students enjoy an extra 10% off select collections."}),i.jsx(I,{to:"/shop",className:"btn btn-link",children:"Check Eligibility"})]})]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Delivery & Returns"}),i.jsxs("div",{className:"grid-3",children:[i.jsxs("div",{className:"mini-feature",children:[i.jsx("h3",{children:"Fast Dispatch"}),i.jsx("p",{children:"Orders ship within 1–2 business days with tracked delivery."})]}),i.jsxs("div",{className:"mini-feature",children:[i.jsx("h3",{children:"Easy Returns"}),i.jsx("p",{children:"30-day returns on unused items in original condition and packaging."})]}),i.jsxs("div",{className:"mini-feature",children:[i.jsx("h3",{children:"Care Guides"}),i.jsx("p",{children:"Simple wash and storage instructions included with every order."})]})]})]})})]}),i.jsx("style",{children:`
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
      `})]})}function yt(e,t="success",r=2200){const n=new CustomEvent("app:toast",{detail:{message:e,type:t,duration:r}});window.dispatchEvent(n)}const Lf=v.createContext(void 0);function i1({children:e}){const{user:t}=mt(),[r,n]=v.useState([]),[a,s]=v.useState(!1);v.useEffect(()=>{if(!(t!=null&&t.email)){n([]);return}(async()=>{s(!0);try{const d=(await W.get("/cart")).data;n(d.items||[]),localStorage.removeItem(`cart_${t.email}`),localStorage.removeItem("cart_guest")}catch(c){console.error("Failed to load cart from server:",c);try{const d=localStorage.getItem(`cart_${t.email}`);if(d){const f=JSON.parse(d);if(f.length>0){await W.post("/cart/sync",f);const h=await W.get("/cart");n(h.data.items||[]),localStorage.removeItem(`cart_${t.email}`)}}}catch(d){console.error("Failed to sync cart:",d)}}finally{s(!1)}})()},[t==null?void 0:t.email]);const o=v.useMemo(()=>{const c=!!localStorage.getItem("access_token");return{items:r,count:r.reduce((d,f)=>d+f.qty,0),isAuthenticated:c,isLoading:a,add:(d,f=1)=>{if(!c){alert("Please login or register to add items to cart"),window.location.href="/login";return}const h=crypto.randomUUID();n(p=>p.find(m=>m.productId===d.productId)?p.map(m=>m.productId===d.productId?{...m,qty:m.qty+f}:m):[...p,{...d,id:h,qty:f}]);try{yt(`${d.name} added to cart`,"success")}catch{}W.post("/cart/add",{productId:d.productId,slug:d.slug,name:d.name,price:d.price,qty:f,image:d.image}).then(()=>W.get("/cart")).then(p=>{n(p.data.items||[])}).catch(p=>{console.error("Failed to add item to cart:",p),yt("Failed to sync cart with server","error"),W.get("/cart").then(b=>{n(b.data.items||[])}).catch(()=>{})})},remove:d=>{n(f=>f.filter(h=>h.id!==d)),W.delete(`/cart/remove/${d}`).catch(f=>{console.error("Failed to remove item from cart:",f),W.get("/cart").then(h=>{n(h.data.items||[])}).catch(()=>{})})},update:(d,f)=>{f<1||(n(h=>h.map(p=>p.id===d?{...p,qty:f}:p)),W.put(`/cart/update/${d}`,null,{params:{qty:f}}).catch(h=>{console.error("Failed to update cart item:",h),W.get("/cart").then(p=>{n(p.data.items||[])}).catch(()=>{})}))},clear:()=>{n([]),W.delete("/cart/clear").catch(d=>{console.error("Failed to clear cart:",d),W.get("/cart").then(f=>{n(f.data.items||[])}).catch(()=>{})})}}},[r,a]);return i.jsx(Lf.Provider,{value:o,children:e})}function li(){const e=v.useContext(Lf);if(!e)throw new Error("useCart must be used within CartProvider");return e}async function To(e){const t=document.querySelector(".cart-link .badge");if(!e||!t)return;const r=e.getBoundingClientRect(),n=t.getBoundingClientRect();let a;if(e instanceof HTMLImageElement){const d=document.createElement("img");d.src=e.currentSrc||e.src,d.alt="",a=d}else{const d=document.createElement("div");d.style.background="rgba(255,255,255,0.9)",a=d}a.style.position="fixed",a.style.left=`${r.left}px`,a.style.top=`${r.top}px`,a.style.width=`${r.width}px`,a.style.height=`${r.height}px`,a.style.borderRadius="12px",a.style.boxShadow="0 10px 30px rgba(0,0,0,0.35)",a.style.zIndex="3000",a.style.pointerEvents="none",document.body.appendChild(a);const s=n.left+n.width/2-(r.left+r.width/2),o=n.top+n.height/2-(r.top+r.height/2),l=[{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${s*.2}px, ${o*.2}px) scale(0.9)`,opacity:.9},{transform:`translate(${s}px, ${o}px) scale(0.15)`,opacity:.1}],c={duration:600,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"};await a.animate(l,c).finished.catch(()=>{}),a.remove();try{t.classList.add("sparkle"),setTimeout(()=>t.classList.remove("sparkle"),700)}catch{}}function a1(){const{slug:e}=tf(),[t,r]=v.useState(null),[n,a]=v.useState(0),{add:s}=li(),o=Nt(),l=v.useRef(null);if(v.useEffect(()=>{e&&ce.get(`/api/v1/products/${e}`).then(p=>r(p.data))},[e]),!t)return i.jsx("div",{className:"container",style:{padding:24},children:"Loading..."});const c=t.images&&t.images.length>0?t.images:["https://via.placeholder.com/600x400"],d=()=>{a(p=>(p+1)%c.length)},f=()=>{a(p=>(p-1+c.length)%c.length)},h=p=>{a(p)};return i.jsx("div",{className:"container",style:{padding:24},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[i.jsxs("div",{children:[i.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",boxShadow:"var(--shadow)"},children:[i.jsx("img",{ref:l,src:c[n],alt:`${t.name} - Image ${n+1}`,style:{width:"100%",display:"block",aspectRatio:"4/3",objectFit:"cover"}}),c.length>1&&i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:f,style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:p=>p.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Previous image",children:"‹"}),i.jsx("button",{onClick:d,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:p=>p.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Next image",children:"›"}),i.jsxs("div",{style:{position:"absolute",bottom:12,right:12,background:"rgba(0,0,0,0.6)",color:"white",padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:500},children:[n+1," / ",c.length]})]})]}),c.length>1&&i.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto",paddingBottom:8},children:c.map((p,b)=>i.jsx("button",{onClick:()=>h(b),style:{border:n===b?"2px solid var(--brand)":"2px solid transparent",borderRadius:8,overflow:"hidden",cursor:"pointer",padding:0,background:"transparent",flexShrink:0,opacity:n===b?1:.6,transition:"opacity 0.2s, border-color 0.2s"},onMouseEnter:m=>m.currentTarget.style.opacity="1",onMouseLeave:m=>m.currentTarget.style.opacity=n===b?"1":"0.6","aria-label":`View image ${b+1}`,children:i.jsx("img",{src:p,alt:`${t.name} thumbnail ${b+1}`,style:{width:80,height:80,objectFit:"cover",display:"block"}})},b))})]}),i.jsxs("div",{children:[i.jsx("h1",{style:{marginTop:0},children:t.name}),i.jsxs("div",{className:"price",style:{fontSize:22},children:["LKR ",t.price]}),i.jsx("p",{style:{color:"var(--muted)"},children:t.description||"A beautiful product made for you."}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsx("button",{className:"btn",onClick:()=>{l.current&&To(l.current),s({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]})},children:"Add to Cart"}),i.jsx("button",{className:"btn",onClick:()=>{l.current&&To(l.current),s({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]}),o("/cart")},children:"Buy Now"})]})]})]})})}function s1(){var u;const{login:e}=mt(),[t,r]=v.useState(""),[n,a]=v.useState(""),[s,o]=v.useState(null),[l,c]=v.useState(!1),[d,f]=v.useState(!1),[h,p]=v.useState(!0),b=Nt(),m=st(),y=v.useRef(null),w=((u=m.state)==null?void 0:u.from)||"/";v.useEffect(()=>{s&&y.current&&y.current.focus()},[s]),v.useEffect(()=>{let g;return d&&(g=window.setTimeout(()=>f(!1),5e3)),()=>{g&&window.clearTimeout(g)}},[d]);async function x(g){if(g.preventDefault(),o(null),!t||!n){o("Email and password are required.");return}try{c(!0),await e(t,n),h&&typeof localStorage<"u"?localStorage.setItem("remember","1"):localStorage.removeItem("remember"),b(w)}catch{o("Invalid credentials")}finally{c(!1)}}return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"login-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("h1",{className:"headline",children:"Welcome back"}),i.jsx("p",{className:"subhead",children:"Sign in to manage orders, track deliveries, and update account details."})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container login-wrap",children:[i.jsxs("div",{className:"panel",children:[i.jsx("h2",{className:"section-title",children:"Login"}),i.jsx("div",{ref:y,tabIndex:-1,"aria-live":"assertive","aria-atomic":"true",className:"live",children:s&&i.jsx("div",{className:"alert error",children:s})}),i.jsxs("form",{className:"form",onSubmit:x,noValidate:!0,children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"email",children:"Email"}),i.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:g=>r(g.target.value),required:!0})]}),i.jsxs("div",{className:"field",children:[i.jsxs("div",{className:"label-row",children:[i.jsx("label",{htmlFor:"password",children:"Password"}),i.jsx(I,{to:"/forgot",className:"link",children:"Forgot password?"})]}),i.jsxs("div",{className:"pw-wrap",children:[i.jsx("input",{id:"password",type:d?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:n,onChange:g=>a(g.target.value),required:!0}),i.jsx("button",{type:"button",className:"pw-toggle","aria-label":d?"Hide password":"Show password","aria-pressed":d,"aria-controls":"password",onClick:()=>f(g=>!g),title:d?"Hide password":"Show password",children:d?"🙈":"👁️"})]}),i.jsx("p",{className:"tiny muted",children:"Password visibility will auto-hide after 5 seconds."})]}),i.jsxs("div",{className:"row between",children:[i.jsxs("label",{className:"check",children:[i.jsx("input",{type:"checkbox",checked:h,onChange:g=>p(g.target.checked)}),i.jsx("span",{children:"Remember me"})]}),i.jsxs("span",{className:"tiny muted",children:["Need an account? ",i.jsx(I,{to:"/register",className:"link",children:"Register"})]})]}),i.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,children:l?"Signing in…":"Login"}),i.jsxs("div",{className:"or",children:[i.jsx("span",{className:"line"}),i.jsx("span",{className:"muted",children:"or continue with"}),i.jsx("span",{className:"line"})]}),i.jsxs("div",{className:"oauth",children:[i.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>alert("Coming soon"),children:"Google"}),i.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>alert("Coming soon"),children:"GitHub"})]})]})]}),i.jsxs("aside",{className:"panel tips",children:[i.jsx("h3",{children:"Tips"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Use the email registered during checkout."}),i.jsx("li",{children:"Passwords are case-sensitive; check CAPS LOCK."}),i.jsx("li",{children:"After multiple failed attempts, wait a minute before retrying."})]}),i.jsxs("div",{className:"support",children:[i.jsx("p",{className:"muted",children:"Still need help?"}),i.jsx(I,{to:"/contact",className:"btn",children:"Contact support"})]})]})]})}),i.jsx("style",{children:`
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
      `})]})}function o1(){const{register:e}=mt(),[t,r]=v.useState(""),[n,a]=v.useState(""),[s,o]=v.useState(""),[l,c]=v.useState(""),[d,f]=v.useState(!1),[h,p]=v.useState(!0),[b,m]=v.useState(!1),[y,w]=v.useState(!1),[x,u]=v.useState(null),[g,j]=v.useState(null),[k,_]=v.useState(!1),P=Nt(),R=v.useRef(null);v.useEffect(()=>{(x||g)&&R.current&&R.current.focus()},[x,g]);const U=v.useMemo(()=>{let B=0;return n.length>=8&&B++,/[A-Z]/.test(n)&&B++,/[a-z]/.test(n)&&B++,/\d/.test(n)&&B++,/[^A-Za-z0-9]/.test(n)&&B++,B},[n]),O=["Very weak","Weak","Fair","Good","Strong","Excellent"][U];async function Y(B){if(B.preventDefault(),j(null),u(null),!l||!t||!n||!s){j("All fields are required.");return}if(n!==s){j("Passwords do not match.");return}if(!d){j("Please agree to the Terms and Privacy Policy.");return}try{_(!0),await e(t,n,l),u("Check the inbox to verify the account. Redirecting to Login…"),setTimeout(()=>P("/login"),1e3)}catch{j("Could not create the account. Try again later.")}finally{_(!1)}}return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"register-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("h1",{className:"headline",children:"Create an account"}),i.jsx("p",{className:"subhead",children:"Join to track orders, save preferences, and get faster checkout."})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container reg-wrap",children:[i.jsxs("div",{className:"panel",children:[i.jsx("h2",{className:"section-title",children:"Register"}),i.jsxs("div",{ref:R,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[x&&i.jsx("div",{className:"alert success",children:x}),g&&i.jsx("div",{className:"alert error",children:g})]}),i.jsxs("form",{className:"form",onSubmit:Y,noValidate:!0,children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"fullName",children:"Full name"}),i.jsx("input",{id:"fullName",type:"text",autoComplete:"name",placeholder:"e.g., Ishfaque Mif",value:l,onChange:B=>c(B.target.value),required:!0})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"email",children:"Email"}),i.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:B=>r(B.target.value),required:!0})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"password",children:"Password"}),i.jsxs("div",{className:"pw-wrap",children:[i.jsx("input",{id:"password",type:b?"text":"password",autoComplete:"new-password",placeholder:"At least 8 characters",value:n,onChange:B=>a(B.target.value),required:!0,"aria-describedby":"pw-help"}),i.jsx("button",{type:"button",className:"pw-toggle","aria-label":b?"Hide password":"Show password","aria-pressed":b,"aria-controls":"password",onClick:()=>m(B=>!B),children:b?"🙈":"👁️"})]}),i.jsx("div",{id:"pw-help",className:"tiny muted",children:"Use 8+ chars with a mix of upper/lowercase, numbers, and a symbol."}),i.jsxs("div",{className:"meter","aria-hidden":"true",children:[i.jsx("span",{className:`m${U}`}),i.jsx("em",{className:"muted",children:O})]}),i.jsxs("ul",{className:"reqs",children:[i.jsx("li",{className:n.length>=8?"ok":"",children:"8+ characters"}),i.jsx("li",{className:/[A-Z]/.test(n)?"ok":"",children:"Uppercase letter"}),i.jsx("li",{className:/[a-z]/.test(n)?"ok":"",children:"Lowercase letter"}),i.jsx("li",{className:/\d/.test(n)?"ok":"",children:"Number"}),i.jsx("li",{className:/[^A-Za-z0-9]/.test(n)?"ok":"",children:"Symbol"})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"confirm",children:"Confirm password"}),i.jsxs("div",{className:"pw-wrap",children:[i.jsx("input",{id:"confirm",type:y?"text":"password",autoComplete:"new-password",placeholder:"Re-enter password",value:s,onChange:B=>o(B.target.value),required:!0}),i.jsx("button",{type:"button",className:"pw-toggle","aria-label":y?"Hide password":"Show password","aria-pressed":y,"aria-controls":"confirm",onClick:()=>w(B=>!B),children:y?"🙈":"👁️"})]}),s&&s!==n&&i.jsx("div",{className:"tiny error-text",children:"Passwords do not match."})]}),i.jsxs("label",{className:"check",children:[i.jsx("input",{type:"checkbox",checked:d,onChange:B=>f(B.target.checked),required:!0}),i.jsxs("span",{children:["I agree to the ",i.jsx(I,{to:"/terms",className:"link",children:"Terms"})," and"," ",i.jsx(I,{to:"/privacy",className:"link",children:"Privacy Policy"}),"."]})]}),i.jsxs("label",{className:"check",children:[i.jsx("input",{type:"checkbox",checked:h,onChange:B=>p(B.target.checked)}),i.jsx("span",{children:"Send occasional product updates and offers."})]}),i.jsx("button",{className:"btn btn-primary",type:"submit",disabled:k,children:k?"Creating…":"Create account"}),i.jsxs("div",{className:"row between",children:[i.jsx("span",{className:"tiny muted",children:"Already have an account?"}),i.jsx(I,{to:"/login",className:"link",children:"Login"})]})]})]}),i.jsxs("aside",{className:"panel tips",children:[i.jsx("h3",{children:"Why create an account?"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Faster checkout and saved details."}),i.jsx("li",{children:"Order history and tracking."}),i.jsx("li",{children:"Early access to limited releases."})]}),i.jsxs("div",{className:"support",children:[i.jsx("p",{className:"muted",children:"Need help?"}),i.jsx(I,{to:"/contact",className:"btn",children:"Contact support"})]})]})]})}),i.jsx("style",{children:`
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
      `})]})}function l1(){const{items:e,update:t,remove:r,clear:n}=li(),a=Nt(),[s,o]=v.useState(!1),l=v.useMemo(()=>e.reduce((h,p)=>h+p.price*p.qty,0),[e]),c=(h,p)=>{p<1||Number.isNaN(p)||t(h,p)},d=()=>o(!0),f=encodeURIComponent(`Hello, I have transferred LKR ${l.toFixed(2)} for my order. Here is my payment confirmation.`);return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"cart-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("h1",{className:"headline",children:"Your Cart"}),i.jsx("p",{className:"subhead",children:"Review items and complete checkout using bank transfer."})]})}),i.jsx("section",{className:"section",children:i.jsx("div",{className:"container",children:e.length===0?i.jsxs("div",{className:"empty",children:[i.jsx("div",{className:"empty-anim","aria-hidden":!0,children:i.jsxs("svg",{className:"cart-svg",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("g",{className:"animate-cart",children:[i.jsx("rect",{x:"26",y:"36",width:"60",height:"34",rx:"6",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.08)"}),i.jsx("path",{d:"M20 36h10M86 36h14",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),i.jsx("path",{d:"M32 70l-4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),i.jsx("path",{d:"M80 70l4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),i.jsx("circle",{cx:"40",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"}),i.jsx("circle",{cx:"72",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"})]}),i.jsxs("g",{className:"float-bubbles",children:[i.jsx("circle",{cx:"54",cy:"26",r:"3",fill:"var(--brand)"}),i.jsx("circle",{cx:"68",cy:"18",r:"2",fill:"var(--brand)"}),i.jsx("circle",{cx:"44",cy:"16",r:"2.5",fill:"var(--brand)"})]})]})}),i.jsx("p",{children:"Your cart is empty"}),i.jsx("div",{className:"actions",children:i.jsx(I,{to:"/shop",className:"btn btn-primary",children:"Continue Shopping"})})]}):i.jsx(i.Fragment,{children:i.jsxs("div",{className:"cart-wrap",children:[i.jsx("div",{className:"table-wrap",role:"region","aria-label":"Cart items",children:i.jsxs("table",{className:"cart-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Product"}),i.jsx("th",{children:"Qty"}),i.jsx("th",{children:"Price"}),i.jsx("th",{children:"Total"}),i.jsx("th",{children:"Action"})]})}),i.jsx("tbody",{children:e.map(h=>i.jsxs("tr",{children:[i.jsx("td",{className:"prod-cell",children:i.jsxs("div",{className:"prod",children:[h.image?i.jsx("img",{src:h.image,alt:h.name}):i.jsx("div",{className:"img-fallback","aria-hidden":!0}),i.jsxs("div",{className:"prod-meta",children:[i.jsx(I,{to:`/product/${h.slug}`,className:"prod-name",children:h.name}),i.jsxs("div",{className:"sku",children:["ID: ",h.id]})]})]})}),i.jsx("td",{className:"qty-cell",children:i.jsxs("div",{className:"qty",children:[i.jsx("button",{className:"btn-qty","aria-label":"Decrease quantity",onClick:()=>c(h.id,h.qty-1),children:"−"}),i.jsx("input",{type:"number",min:1,inputMode:"numeric",value:h.qty,onChange:p=>c(h.id,Number(p.target.value)),"aria-label":`Quantity for ${h.name}`}),i.jsx("button",{className:"btn-qty","aria-label":"Increase quantity",onClick:()=>c(h.id,h.qty+1),children:"+"})]})}),i.jsxs("td",{children:["LKR ",Number(h.price).toFixed(2)]}),i.jsxs("td",{children:["LKR ",(h.price*h.qty).toFixed(2)]}),i.jsx("td",{children:i.jsx("button",{className:"btn btn-ghost",onClick:()=>r(h.id),children:"Remove"})})]},h.id))}),i.jsx("tfoot",{children:i.jsxs("tr",{children:[i.jsx("td",{colSpan:3,className:"right",children:"Subtotal"}),i.jsxs("td",{colSpan:2,className:"subtotal",children:["LKR ",l.toFixed(2)]})]})})]})}),i.jsxs("aside",{className:"summary",children:[i.jsx("h2",{className:"summary-title",children:"Order Summary"}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Subtotal"}),i.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Shipping"}),i.jsx("span",{children:"Calculated at checkout"})]}),i.jsxs("div",{className:"summary-total",children:[i.jsx("span",{children:"Estimated Total"}),i.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),i.jsxs("div",{className:"summary-actions",children:[i.jsx("button",{className:"btn btn-primary",onClick:d,children:"Proceed with Bank Transfer"}),i.jsx("button",{className:"btn btn-ghost",onClick:n,children:"Clear Cart"}),i.jsx(I,{className:"btn",to:"/shop",children:"Continue Shopping"})]}),s&&i.jsxs("div",{className:"transfer",children:[i.jsx("h3",{children:"Bank Transfer Instructions"}),i.jsx("p",{className:"muted",children:"Please transfer the estimated total amount to the bank account listed below. After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification."}),i.jsxs("div",{className:"bank-box",children:[i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Name"}),i.jsx("span",{children:"Ishfaque Mif"})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Bank"}),i.jsx("span",{children:"BOC"})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Branch"}),i.jsx("span",{children:"Puttalam"})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Account No."}),i.jsx("span",{children:"89001476"})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Amount"}),i.jsxs("span",{children:["$",l.toFixed(2)]})]}),i.jsxs("div",{className:"row",children:[i.jsx("span",{children:"Reference"}),i.jsx("span",{children:"Order by your full name"})]})]}),i.jsxs("div",{className:"transfer-actions",children:[i.jsx("a",{className:"btn btn-primary",href:`https://wa.me/94768976222?text=${f}`,target:"_blank",rel:"noopener noreferrer",children:"Send Confirmation via WhatsApp"}),i.jsxs("button",{className:"btn-cta mega-cta",onClick:h=>{const p=h.currentTarget,b=p.getBoundingClientRect(),m=h.clientX-b.left,y=h.clientY-b.top,w=document.createElement("span");w.className="burst",w.style.left=`${m}px`,w.style.top=`${y}px`,p.appendChild(w),setTimeout(()=>w.remove(),800),p.classList.add("pressed"),setTimeout(()=>p.classList.remove("pressed"),150),a("/checkout")},onMouseMove:h=>{const p=h.currentTarget,b=p.getBoundingClientRect(),m=b.left+b.width/2,y=b.top+b.height/2,w=(h.clientX-m)/(b.width/2),x=(h.clientY-y)/(b.height/2),u=8;p.style.setProperty("--tx",`${w*6}px`),p.style.setProperty("--ty",`${x*6}px`),p.style.setProperty("--rx",`${-x*u}deg`),p.style.setProperty("--ry",`${w*u}deg`),p.style.setProperty("--mx",`${(w+1)/2*100}%`)},onMouseLeave:h=>{const p=h.currentTarget;p.style.removeProperty("--tx"),p.style.removeProperty("--ty"),p.style.removeProperty("--rx"),p.style.removeProperty("--ry"),p.style.removeProperty("--mx")},title:"Optionally upload the payment screenshot on the order page","aria-label":"Go to order page",children:[i.jsx("span",{className:"mega-cta__bg","aria-hidden":"true"}),i.jsx("span",{className:"mega-cta__border","aria-hidden":"true"}),i.jsx("span",{className:"mega-cta__glow","aria-hidden":"true"}),i.jsx("span",{className:"mega-cta__sheen","aria-hidden":"true"}),i.jsx("span",{className:"mega-cta__text",children:"Go to Order Page"}),i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",style:{marginLeft:10},children:[i.jsx("path",{d:"M5 12h14"}),i.jsx("path",{d:"M12 5l7 7-7 7"})]})]})]}),i.jsx("p",{className:"note",children:"Optional: On the order/checkout page, include an upload option to attach the payment screenshot for records. Ensure the name and order reference match the WhatsApp message."})]})]})]})})})}),i.jsx("style",{children:`
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
      `})]})}const c1=["Commercial Bank of Ceylon","Bank of Ceylon (BOC)","Hatton National Bank (HNB)","Sampath Bank","Nations Trust Bank","DFCC Bank","Seylan Bank","Union Bank","Pan Asia Banking Corporation","Amana Bank","Cargills Bank","National Development Bank (NDB)","People's Bank"],or={accountHolder:"Ishfaque Mif",bank:"Bank of Ceylon (BOC)",branch:"Puttalam",accountNumber:"89001476",whatsapp:"+94 76 897 6222"};function d1(){const{items:e,clear:t}=li(),{user:r}=mt(),[n,a]=v.useState({line1:"",city:"",postal_code:"",country:"LK"}),[s,o]=v.useState(null),[l,c]=v.useState(null),[d,f]=v.useState(!1),[h,p]=v.useState(null),[b,m]=v.useState(null),[y,w]=v.useState(""),[x,u]=v.useState(""),[g,j]=v.useState(""),[k,_]=v.useState(""),[P,R]=v.useState(null),[U,O]=v.useState(null),[Y,B]=v.useState(!1),[oe,ve]=v.useState(""),[F,D]=v.useState("");v.useEffect(()=>{r!=null&&r.email&&!g&&j(r.email)},[r,g]);async function G(S){var H;const T=(H=S.target.files)==null?void 0:H[0];if(!T)return;if(!["application/pdf","image/jpeg","image/jpg","image/png"].includes(T.type)){p("Only PDF, JPG, and PNG files are allowed");return}if(T.size>5*1024*1024){p("File size must be less than 5MB");return}R(T),p(null),B(!0);try{const je=new FormData;je.append("file",T);const ye=await W.post("/checkout/upload-receipt",je,{headers:{"Content-Type":"multipart/form-data"}});O(ye.data.url)}catch{p("Failed to upload receipt. Please try again."),R(null)}finally{B(!1)}}async function C(S){var T,q;S.preventDefault(),p(null),f(!0);try{if(!y||!x||!g||!k||!U){p("Please fill all required fields and upload receipt"),f(!1);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){p("Please enter a valid email address"),f(!1);return}const je={shipping_address:n,payment_method:"bank_transfer",customer_name:y,customer_phone:x,customer_email:g,selected_bank:k,transfer_receipt_url:U,transaction_reference:oe,additional_notes:F,items:e.map(Fe=>({product_id:Fe.id,title:Fe.name,quantity:Fe.qty,price:Fe.price})),total_amount:e.reduce((Fe,Ie)=>Fe+Ie.price*Ie.qty,0)},ye=await W.post("/checkout",je);o(ye.data.order_id),c(ye.data.bank_transfer),t()}catch(H){p(((q=(T=H.response)==null?void 0:T.data)==null?void 0:q.detail)||"Failed to create order. Please try again.")}finally{f(!1)}}return i.jsx("div",{className:"checkout-wrap",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"head",children:[i.jsxs("div",{children:[i.jsx("p",{className:"kicker",children:"Checkout"}),i.jsx("h1",{className:"headline",children:"Complete your order"}),i.jsx("p",{className:"muted",children:"Secure bank transfer • Upload receipt • Fast verification"})]}),e.length>0&&i.jsxs("div",{className:"pill",children:[i.jsx("span",{children:e.reduce((S,T)=>S+T.qty,0)})," items"]})]}),h&&i.jsx("div",{className:"alert error",children:h}),s?i.jsxs("div",{style:{maxWidth:"600px",margin:"40px auto",padding:"0",position:"relative"},children:[i.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",padding:"48px 32px",boxShadow:"0 20px 60px rgba(102, 126, 234, 0.4)",textAlign:"center",position:"relative",overflow:"hidden"},children:[i.jsx("div",{style:{position:"absolute",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",top:"-100px",right:"-100px"}}),i.jsx("div",{style:{position:"absolute",width:"150px",height:"150px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",bottom:"-75px",left:"-75px"}}),i.jsx("div",{style:{width:"100px",height:"100px",margin:"0 auto 24px",background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(56, 239, 125, 0.4)",position:"relative",animation:"bounce 1s ease infinite"},children:i.jsx("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"20 6 9 17 4 12"})})}),i.jsx("h1",{style:{color:"white",fontSize:"32px",fontWeight:"bold",marginBottom:"16px",textShadow:"0 2px 10px rgba(0,0,0,0.2)",position:"relative"},children:"Order Placed Successfully!"}),i.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(10px)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"20px",marginBottom:"24px",position:"relative"},children:[i.jsx("div",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"14px",marginBottom:"8px",fontWeight:"500"},children:"Order ID"}),i.jsxs("div",{style:{color:"white",fontSize:"24px",fontWeight:"bold",letterSpacing:"1px",fontFamily:"monospace"},children:["#",s]})]}),i.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"12px",padding:"20px",marginBottom:"24px",textAlign:"left",position:"relative"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[i.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"rgba(255, 183, 77, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px"},children:i.jsx("span",{style:{fontSize:"24px"},children:"⏳"})}),i.jsxs("div",{children:[i.jsx("div",{style:{color:"white",fontSize:"16px",fontWeight:"bold"},children:"Pending Verification"}),i.jsx("div",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"13px"},children:"Your order is being reviewed"})]})]}),i.jsx("div",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"14px",lineHeight:"1.6"},children:"We will review your payment receipt and update your order status shortly. You will be notified once your payment is verified."})]}),i.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative"},children:[i.jsxs("button",{onClick:()=>window.location.href="/orders",style:{padding:"14px 32px",background:"white",color:"#667eea",border:"none",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.2)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:S=>{S.currentTarget.style.transform="translateY(-2px)",S.currentTarget.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.3)"},onMouseOut:S=>{S.currentTarget.style.transform="translateY(0)",S.currentTarget.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"},children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),i.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"View Order History"]}),i.jsxs("button",{onClick:()=>window.location.href="/shop",style:{padding:"14px 32px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",backdropFilter:"blur(10px)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:S=>{S.currentTarget.style.background="rgba(255, 255, 255, 0.3)",S.currentTarget.style.transform="translateY(-2px)"},onMouseOut:S=>{S.currentTarget.style.background="rgba(255, 255, 255, 0.2)",S.currentTarget.style.transform="translateY(0)"},children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("circle",{cx:"9",cy:"21",r:"1"}),i.jsx("circle",{cx:"20",cy:"21",r:"1"}),i.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Continue Shopping"]})]})]}),i.jsxs("div",{style:{marginTop:"24px",background:"white",borderRadius:"12px",padding:"24px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[i.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"16px",color:"#333"},children:"What's Next?"}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[i.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e3f2fd",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx("span",{style:{fontSize:"18px"},children:"📧"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Email Confirmation"}),i.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Check your email for order confirmation and receipt"})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[i.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#fff3e0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx("span",{style:{fontSize:"18px"},children:"🔍"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Payment Review"}),i.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Our team will verify your payment receipt within 24 hours"})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[i.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx("span",{style:{fontSize:"18px"},children:"📦"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Track Your Order"}),i.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Monitor your order status in real-time from Order History"})]})]})]})]}),i.jsx("style",{children:`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `})]}):i.jsxs("div",{className:"grid",children:[i.jsxs("form",{onSubmit:C,className:"panel form",children:[i.jsx("h3",{className:"section-title",children:"Customer information"}),i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Full name",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsx("input",{value:y,onChange:S=>w(S.target.value),required:!0,placeholder:"e.g. John Perera"})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Phone number",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsx("input",{type:"tel",value:x,onChange:S=>u(S.target.value),required:!0,placeholder:"07x xxx xxxx"})]})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Email",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsx("input",{type:"email",value:g,onChange:S=>j(S.target.value),required:!0,disabled:!!(r!=null&&r.email),placeholder:"you@example.com"}),(r==null?void 0:r.email)&&i.jsx("p",{className:"tiny muted",children:"Using logged-in account email"})]}),i.jsx("h3",{className:"section-title",children:"Delivery address"}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Address line 1",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsx("input",{value:n.line1,onChange:S=>a({...n,line1:S.target.value}),required:!0})]}),i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["City",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsx("input",{value:n.city,onChange:S=>a({...n,city:S.target.value}),required:!0})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Postal code",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsx("input",{value:n.postal_code,onChange:S=>a({...n,postal_code:S.target.value}),required:!0})]})]}),i.jsx("h3",{className:"section-title",children:"Bank transfer"}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Select your bank",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsxs("select",{value:k,onChange:S=>_(S.target.value),required:!0,children:[i.jsx("option",{value:"",children:"-- Select your bank --"}),c1.map(S=>i.jsx("option",{value:S,children:S},S))]})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{children:["Upload transfer receipt",i.jsx("span",{"aria-hidden":!0,children:" *"})]}),i.jsxs("div",{className:"drop",children:[i.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:G,disabled:Y}),i.jsxs("div",{className:"note",children:[i.jsx("strong",{children:Y?"Uploading…":P?`${P.name}`:"Choose PDF/JPG/PNG (max 5MB)"}),P&&!Y&&i.jsx("span",{className:"ok",children:"✓ Ready"})]})]}),i.jsx("p",{className:"tiny muted",children:"We’ll verify the receipt within 24 hours."})]}),i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Transaction / reference (optional)"}),i.jsx("input",{value:oe,onChange:S=>ve(S.target.value),placeholder:"e.g. BOCPAY12345"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Additional notes (optional)"}),i.jsx("input",{value:F,onChange:S=>D(S.target.value),placeholder:"Delivery instructions, etc."})]})]}),i.jsx("button",{className:"btn btn-primary",type:"submit",disabled:e.length===0||d||!U,children:d?"Processing…":"Complete order"})]}),i.jsxs("aside",{className:"stack",children:[i.jsxs("div",{className:"panel sticky",children:[i.jsx("h3",{className:"section-title",children:"Company bank account"}),i.jsxs("div",{className:"kv",children:[i.jsxs("div",{children:[i.jsx("span",{className:"muted",children:"Account holder"}),i.jsx("div",{className:"val",children:or.accountHolder})]}),i.jsxs("div",{children:[i.jsx("span",{className:"muted",children:"Bank"}),i.jsx("div",{className:"val",children:or.bank})]}),i.jsxs("div",{children:[i.jsx("span",{className:"muted",children:"Branch"}),i.jsx("div",{className:"val",children:or.branch})]}),i.jsxs("div",{children:[i.jsx("span",{className:"muted",children:"Account number"}),i.jsxs("div",{className:"val row-inline",children:[i.jsx("code",{className:"code",children:or.accountNumber}),i.jsx("button",{type:"button",className:"btn btn-ghost sm",onClick:()=>{navigator.clipboard.writeText(or.accountNumber),m("acc"),setTimeout(()=>m(null),1500)},children:"Copy"})]})]}),i.jsxs("div",{children:[i.jsx("span",{className:"muted",children:"WhatsApp"}),i.jsxs("div",{className:"val row-inline",children:[i.jsx("code",{className:"code",children:or.whatsapp}),i.jsx("a",{className:"btn btn-ghost sm",href:`https://wa.me/${or.whatsapp.replace(/[^\d]/g,"")}`,target:"_blank",children:"Chat"})]})]})]}),i.jsx("p",{className:"tiny muted",children:"Transfer the total to this account, then upload the receipt on the left."}),b==="acc"&&i.jsx("div",{className:"toast",children:"Account number copied"})]}),i.jsxs("div",{className:"panel",children:[i.jsx("h3",{className:"section-title",children:"Order summary"}),i.jsx("div",{className:"items",children:e.length===0?i.jsx("p",{className:"muted",children:"Your cart is empty."}):e.map(S=>i.jsxs("div",{className:"item",children:[i.jsxs("div",{className:"name",children:[S.name," ",i.jsxs("span",{className:"muted",children:["×",S.qty]})]}),i.jsxs("div",{className:"price",children:["Rs. ",(S.price*S.qty).toFixed(2)]})]},S.id))}),i.jsxs("div",{className:"total",children:[i.jsx("div",{children:"Total"}),i.jsxs("div",{className:"price",children:["Rs. ",e.reduce((S,T)=>S+T.price*T.qty,0).toFixed(2)]})]})]})]})]}),i.jsx("style",{children:`
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
        `})]})})}function u1(){const e=Nt(),[t,r]=v.useState([]),[n,a]=v.useState(!0),[s,o]=v.useState(null),[l,c]=v.useState("all"),[d,f]=v.useState(!1),[h,p]=v.useState(null),b=v.useCallback(async()=>{var k,_,P;a(!0),o(null);try{const R=await W.get("/orders/history",{params:{status_filter:l}});r(R.data.orders||[])}catch(R){((k=R==null?void 0:R.response)==null?void 0:k.status)===401?(f(!0),o("Not authenticated")):o(((P=(_=R.response)==null?void 0:_.data)==null?void 0:P.detail)||"Failed to load orders")}finally{a(!1)}},[l]);v.useEffect(()=>{b()},[b]);function m(k){if(!k)return"N/A";try{return new Date(k).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"N/A"}}function y(k){return k?`LKR ${k.toFixed(2)}`:"LKR 0.00"}function w(k){switch(k){case"placed":return"#d97706";case"verified":return"#0284c7";case"processing":return"#ea580c";case"shipped":return"#2563eb";case"delivered":return"#16a34a";case"rejected":return"#dc2626";case"cancelled":return"#9ca3af";default:return"#6D74FF"}}function x(k){switch(k){case"placed":return 20;case"verified":return 40;case"processing":return 60;case"shipped":return 80;case"delivered":return 100;default:return 0}}function u(k){switch(k){case"all":return"All";case"pending":return"In Progress";case"completed":return"Completed";case"cancelled":return"Cancelled";default:return k.charAt(0).toUpperCase()+k.slice(1)}}async function g(k){var _,P;try{await W.post(`/orders/${k}/reorder`),alert("Items added to cart!"),e("/cart")}catch(R){alert(((P=(_=R.response)==null?void 0:_.data)==null?void 0:P.detail)||"Failed to reorder")}}async function j(k){p(k);const _=localStorage.getItem("access_token")||"";if(!_){alert("Not authenticated");return}const P=`/api/v1/orders/${k}/invoice?token=${encodeURIComponent(_)}`;try{const R=document.createElement("iframe");R.style.display="none",R.src=P,document.body.appendChild(R);const U=()=>{p(null);try{R.removeEventListener("load",U)}catch{}};try{R.addEventListener("load",U)}catch{}setTimeout(()=>{try{document.body.removeChild(R)}catch{}p(null)},1e4)}catch(R){console.error("Invoice download error:",R);try{window.location.href=P}catch{}p(null)}}return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[i.jsxs("div",{children:[i.jsx("h1",{className:"section-title",children:"📦 Order History"}),i.jsx("p",{className:"lead",children:"Track your orders and manage your purchase history."})]}),i.jsxs("button",{onClick:()=>b(),disabled:n,style:{padding:"12px 24px",background:n?"#ccc":"#6D74FF",color:"white",border:"none",borderRadius:"8px",cursor:n?"not-allowed":"pointer",fontSize:"16px",fontWeight:"bold",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(109, 116, 255, 0.3)"},onMouseOver:k=>{n||(k.currentTarget.style.background="#5a61d6",k.currentTarget.style.transform="translateY(-2px)",k.currentTarget.style.boxShadow="0 4px 12px rgba(109, 116, 255, 0.4)")},onMouseOut:k=>{n||(k.currentTarget.style.background="#6D74FF",k.currentTarget.style.transform="translateY(0)",k.currentTarget.style.boxShadow="0 2px 8px rgba(109, 116, 255, 0.3)")},children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{animation:n?"spin 1s linear infinite":"none"},children:[i.jsx("polyline",{points:"23 4 23 10 17 10"}),i.jsx("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),n?"Refreshing...":"Refresh"]})]}),i.jsx("div",{className:"order-filters",children:["all","pending","completed","cancelled"].map(k=>i.jsx("button",{className:`btn ${l===k?"btn-primary":"btn-ghost"}`,onClick:()=>c(k),children:u(k)},k))}),i.jsx("style",{children:`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}),s&&i.jsx("div",{className:"alert error",children:s}),d&&i.jsx("div",{className:"alert warning",children:i.jsx("button",{onClick:()=>e("/login?next=/orders"),className:"btn btn-primary",children:"Go to Login"})}),n&&i.jsx("div",{className:"loading",children:"Loading orders..."}),!n&&t.length===0&&i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{children:"📭"}),i.jsx("h3",{children:"No Orders Found"}),i.jsx("p",{children:l==="all"?"You haven’t placed any orders yet.":`No ${u(l)} orders found.`}),i.jsx("button",{onClick:()=>e("/shop"),className:"btn btn-primary",children:"Start Shopping"})]}),!n&&t.length>0&&i.jsx("div",{className:"order-list",children:t.map(k=>{var _;return i.jsxs("div",{className:"order-card",children:[i.jsxs("div",{className:"order-header",children:[i.jsxs("div",{children:[i.jsxs("h3",{children:["Order #",k.id.slice(-8)]}),i.jsx("p",{children:m(k.created_at)})]}),i.jsx("div",{className:"order-total",children:y(k.total_amount)})]}),i.jsxs("div",{className:"order-progress",children:[i.jsx("div",{className:"progress-bar",children:i.jsx("div",{style:{width:`${x(k.tracking_status)}%`,backgroundColor:w(k.tracking_status)}})}),i.jsx("p",{className:"status",style:{color:w(k.tracking_status)},children:(_=k.tracking_status)==null?void 0:_.toUpperCase()})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{onClick:()=>e(`/orders/${k.id}`),className:"btn btn-primary",children:"View"}),i.jsx("button",{onClick:()=>g(k.id),className:"btn btn-ghost",children:"🔁 Reorder"}),k.payment_status==="verified"&&i.jsx("button",{onClick:()=>j(k.id),className:"btn btn-ghost invoice-btn",disabled:h===k.id,"aria-busy":h===k.id,children:h===k.id?i.jsxs(i.Fragment,{children:[i.jsxs("svg",{className:"invoice-spinner",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.25"}),i.jsx("path",{d:"M22 12a10 10 0 0 1-10 10",strokeLinecap:"round"})]}),"Downloading..."]}):i.jsx(i.Fragment,{children:"📄 Invoice"})}),k.tracking_status==="delivered"&&i.jsx("button",{onClick:()=>e(`/orders/${k.id}/review`),className:"btn btn-ghost",children:"⭐ Review"})]})]},k.id)})})]})}),i.jsx("style",{children:`
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
      `})]})}function kd(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"}function zi(e){return`LKR ${e.toFixed(2)}`}const Nd={placed:{icon:"📦",color:"#FFD700"},verified:{icon:"✅",color:"#0284c7"},processing:{icon:"⚙️",color:"#ea580c"},shipped:{icon:"🚚",color:"#2563eb"},delivered:{icon:"🎉",color:"#11998e"}},Sd=["placed","verified","processing","shipped","delivered"];function p1(){const{orderId:e}=tf(),t=Nt(),[r,n]=v.useState(null),[a,s]=v.useState(!0),[o,l]=v.useState(null),[c,d]=v.useState(!1),f=v.useCallback(async()=>{var m,y;s(!0),l(null);try{const w=await W.get(`/orders/${e}`);n(w.data)}catch(w){l(((y=(m=w.response)==null?void 0:m.data)==null?void 0:y.detail)||"Failed to load order details")}finally{s(!1)}},[e]);v.useEffect(()=>{f()},[f]);const h=v.useCallback(async m=>{var w,x,u;const y=(w=m.target.files)==null?void 0:w[0];if(y){d(!0);try{const g=new FormData;g.append("file",y),await W.put(`/orders/${e}/receipt`,g,{headers:{"Content-Type":"multipart/form-data"}}),alert("Receipt uploaded successfully! Awaiting admin verification."),f()}catch(g){alert(((u=(x=g.response)==null?void 0:x.data)==null?void 0:u.detail)||"Failed to upload receipt")}finally{d(!1)}}},[e,f]);v.useEffect(()=>{let m=null,y=!1;async function w(){try{const x=await W.get(`/orders/${e}`);if(y)return;const u=x.data;(!r||u.tracking_status!==r.tracking_status||u.payment_status!==r.payment_status)&&n(u),(u.tracking_status==="delivered"||u.tracking_status==="cancelled")&&m&&(clearInterval(m),m=null)}catch{}}return r&&r.tracking_status!=="delivered"&&r.tracking_status!=="cancelled"&&(w(),m=setInterval(w,5e3)),()=>{y=!0,m&&clearInterval(m)}},[r==null?void 0:r.tracking_status,r==null?void 0:r.payment_status,e]);const p=v.useMemo(()=>r?Sd.indexOf(r.tracking_status):-1,[r==null?void 0:r.tracking_status]),b=v.useMemo(()=>r?Nd[r.tracking_status]||{icon:"📝",color:"#6D74FF"}:null,[r==null?void 0:r.tracking_status]);return a?i.jsx("section",{className:"section",children:i.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:i.jsx("div",{style:{fontSize:"18px",color:"var(--muted)"},children:"Loading order details..."})})}):o||!r?i.jsx("section",{className:"section",children:i.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:i.jsxs("div",{className:"empty-state",style:{padding:"48px",background:"var(--card)",borderRadius:"14px",boxShadow:"var(--shadow)"},children:[i.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"❌"}),i.jsx("h2",{children:o||"Order not found"}),i.jsx("button",{onClick:()=>t("/orders"),className:"btn",style:{marginTop:"16px"},children:"Back to Orders"})]})})}):i.jsxs("section",{className:"section",children:[i.jsxs("div",{className:"container",children:[i.jsxs("button",{onClick:()=>t("/orders"),className:"btn",style:{marginBottom:"24px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Orders"]}),i.jsxs("div",{className:"order-detail-header",children:[i.jsxs("div",{className:"order-detail-header-left",children:[i.jsxs("h1",{className:"section-title",children:["Order #",r.id.slice(-8)]}),i.jsxs("p",{style:{color:"var(--muted)",margin:"4px 0 0"},children:["📅 ",kd(r.created_at)]})]}),i.jsxs("div",{className:"order-detail-header-right",children:[i.jsx("div",{style:{fontSize:"12px",color:"var(--muted)",marginBottom:"4px"},children:"Total Amount"}),i.jsx("div",{className:"price",style:{fontSize:"32px",margin:"0 0 12px"},children:zi(r.total_amount)}),i.jsxs("div",{className:"status-badge",style:{backgroundColor:(b==null?void 0:b.color)||"#6D74FF",color:"white",padding:"8px 16px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",display:"inline-flex",alignItems:"center",gap:"6px"},children:[b==null?void 0:b.icon," ",r.tracking_status.charAt(0).toUpperCase()+r.tracking_status.slice(1)]})]})]}),r.admin_feedback&&i.jsxs("div",{className:"alert",style:{background:r.payment_status==="rejected"?"#fee2e2":"#fef3c7",border:`1px solid ${r.payment_status==="rejected"?"#dc2626":"#f59e0b"}`,borderRadius:"12px",padding:"20px",marginBottom:"24px"},children:[i.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",color:r.payment_status==="rejected"?"#991b1b":"#92400e",marginBottom:"12px"},children:"⚠️ Admin Feedback"}),i.jsx("div",{style:{color:r.payment_status==="rejected"?"#991b1b":"#92400e",fontSize:"14px",lineHeight:"1.6",marginBottom:r.resubmit_required?"16px":"0"},children:r.admin_feedback}),r.resubmit_required&&i.jsxs("div",{children:[i.jsxs("label",{className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",cursor:c?"not-allowed":"pointer",opacity:c?.7:1},children:["📤 ",c?"Uploading...":"Re-upload Receipt",i.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:h,disabled:c,style:{display:"none"}})]}),i.jsx("p",{style:{fontSize:"13px",color:"var(--muted)",marginTop:"8px"},children:"Please upload a valid payment receipt (PDF, JPG, PNG)"})]})]}),r.items&&r.items.length>0&&i.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[i.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"🛒 Order Items"}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:r.items.map((m,y)=>i.jsxs("div",{className:"order-item",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontWeight:"600",marginBottom:"4px"},children:m.title||m.name||"Product"}),i.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)"},children:["Quantity: ",m.quantity," × ",zi(m.price)]})]}),i.jsx("div",{className:"price",style:{fontSize:"18px"},children:zi(m.price*m.quantity)})]},y))}),i.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"2px solid var(--bg)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Total Amount"}),i.jsx("span",{className:"price",style:{fontSize:"24px"},children:zi(r.total_amount)})]})]}),i.jsxs("div",{className:"card",style:{padding:"28px",marginBottom:"24px"},children:[i.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"24px"},children:"📊 Order Timeline"}),i.jsx("div",{style:{position:"relative",paddingLeft:"48px"},children:Sd.map((m,y)=>{const w=p>=y,x=r.tracking_status===m,u=Nd[m];return i.jsxs("div",{style:{position:"relative",paddingBottom:y<4?"32px":"0"},children:[y<4&&i.jsx("div",{style:{position:"absolute",left:"-28px",top:"32px",width:"3px",height:"32px",background:w?"var(--primary)":"#e5e7eb"}}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[i.jsx("div",{style:{position:"absolute",left:"-36px",width:"18px",height:"18px",borderRadius:"50%",background:w?"var(--primary)":"#e5e7eb",border:x?"4px solid rgba(109, 40, 217, 0.3)":"none",boxShadow:x?"0 0 0 4px rgba(109, 40, 217, 0.1)":"none",display:"flex",alignItems:"center",justifyContent:"center"},children:x&&i.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"white"}})}),i.jsxs("div",{style:{flex:1,padding:"16px",background:x?"rgba(109, 40, 217, 0.05)":"transparent",borderRadius:"12px",border:x?"2px solid rgba(109, 40, 217, 0.2)":"none"},children:[i.jsxs("div",{style:{fontWeight:x?"bold":"600",fontSize:x?"18px":"16px",color:w?"var(--text)":"var(--muted)",textTransform:"capitalize",display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx("span",{children:u.icon}),m,x&&i.jsx("span",{style:{marginLeft:"8px",padding:"4px 12px",background:"var(--primary)",color:"white",fontSize:"12px",borderRadius:"12px",fontWeight:"bold"},children:"CURRENT"})]}),x&&r.estimated_delivery_date&&m==="shipped"&&i.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)",marginTop:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),i.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),i.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Est. delivery: ",kd(r.estimated_delivery_date)]})]})]})]},m)})})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",marginBottom:"24px"},children:[i.jsxs("div",{className:"card",style:{padding:"24px"},children:[i.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"👤 Customer Information"}),i.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[i.jsxs("div",{style:{marginBottom:"8px"},children:[i.jsx("strong",{style:{color:"var(--muted)"},children:"Name:"})," ",i.jsx("span",{style:{fontWeight:"600"},children:r.customer_name})]}),i.jsxs("div",{style:{marginBottom:"8px"},children:[i.jsx("strong",{style:{color:"var(--muted)"},children:"Phone:"})," ",i.jsx("span",{style:{fontWeight:"600"},children:r.customer_phone})]}),r.customer_email&&i.jsxs("div",{children:[i.jsx("strong",{style:{color:"var(--muted)"},children:"Email:"})," ",i.jsx("span",{style:{fontWeight:"600",wordBreak:"break-all"},children:r.customer_email})]})]})]}),i.jsxs("div",{className:"card",style:{padding:"24px"},children:[i.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"📍 Delivery Address"}),i.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[i.jsx("div",{style:{marginBottom:"8px",fontWeight:"600"},children:r.shipping_address.line1}),i.jsxs("div",{style:{marginBottom:"8px",fontWeight:"600"},children:[r.shipping_address.city,", ",r.shipping_address.postal_code]}),i.jsx("div",{style:{fontWeight:"600"},children:r.shipping_address.country})]})]})]}),i.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[i.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"💳 Payment Information"}),i.jsxs("div",{style:{fontSize:"15px",lineHeight:"2",marginBottom:"16px"},children:[i.jsxs("div",{style:{marginBottom:"12px"},children:[i.jsx("strong",{style:{color:"var(--muted)"},children:"Bank:"})," ",i.jsx("span",{style:{fontWeight:"600"},children:r.selected_bank||"N/A"})]}),r.transaction_reference&&i.jsxs("div",{children:[i.jsx("strong",{style:{color:"var(--muted)"},children:"Reference:"})," ",i.jsx("span",{style:{fontWeight:"600",fontFamily:"monospace",fontSize:"14px",background:"var(--bg)",padding:"4px 8px",borderRadius:"6px"},children:r.transaction_reference})]})]}),r.transfer_receipt_url&&i.jsx("div",{style:{marginBottom:"16px"},children:i.jsx("a",{href:r.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",textDecoration:"none"},children:"📄 View Receipt"})}),r.additional_notes&&i.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[i.jsx("strong",{style:{color:"var(--muted)",fontSize:"14px"},children:"Additional Notes:"}),i.jsx("div",{style:{marginTop:"8px",fontSize:"15px",lineHeight:"1.6"},children:r.additional_notes})]})]})]}),i.jsx("style",{children:`
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
      `})]})}function f1(){const{user:e,logout:t}=mt(),{count:r}=li(),[n,a]=v.useState(!1),[s,o]=v.useState(!1),[l,c]=v.useState(!1),d=st(),f=v.useRef(null),h=v.useRef(null);v.useEffect(()=>{o(!1),c(!1),setTimeout(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},100)},[d.pathname]),v.useEffect(()=>{const y=w=>{w.key==="Escape"&&(o(!1),c(!1))};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),v.useEffect(()=>{if(r<=0)return;a(!0);const y=setTimeout(()=>a(!1),300);return()=>clearTimeout(y)},[r]),v.useEffect(()=>{const y=w=>{h.current&&(h.current.contains(w.target)||c(!1))};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const p=({isActive:y})=>y?"nav-link active":"nav-link",b=({isActive:y})=>y?"auth-btn active":"auth-btn",m=d.pathname.startsWith("/admin");return i.jsxs("header",{className:"header",ref:f,children:[i.jsxs("div",{className:"container header-inner",children:[i.jsxs("div",{className:"left",children:[i.jsxs("button",{className:"hamburger","aria-label":"Toggle navigation","aria-controls":"main-menu","aria-expanded":s,onClick:()=>o(y=>!y),children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsx(I,{to:"/",className:"brand",children:"Own Setup 💼"})]}),i.jsxs("nav",{id:"main-menu",className:`nav ${s?"open":""}`,"aria-label":"Main navigation",children:[!m&&i.jsxs(i.Fragment,{children:[i.jsx(Dt,{to:"/",end:!0,className:p,children:"Home"}),i.jsx(Dt,{to:"/about",className:p,children:"About"}),e&&i.jsxs(i.Fragment,{children:[i.jsx(Dt,{to:"/shop",className:p,children:"Shop"}),i.jsx(Dt,{to:"/contact",className:p,children:"Contact"}),i.jsxs(Dt,{to:"/cart",className:({isActive:y})=>y?"nav-link cart-link active":"nav-link cart-link",children:["Cart",i.jsx("span",{className:`badge ${n?"bump":""}`,"aria-label":`${r} items in cart`,children:r})]})]})]}),i.jsx("div",{className:"divider","aria-hidden":!0}),e?i.jsxs("div",{className:"user-wrap",ref:h,children:[e.is_staff&&!m&&i.jsx(Dt,{to:"/admin",className:p,children:"Admin"}),i.jsxs("button",{className:"user-btn","aria-haspopup":"menu","aria-expanded":l,onClick:()=>c(y=>!y),title:e.email,children:[i.jsx("div",{className:"avatar","aria-hidden":!0,children:e!=null&&e.avatar_url?i.jsx("img",{src:e.avatar_url,alt:""}):null}),i.jsx("span",{className:"email",children:e.email})]}),l&&i.jsxs("div",{className:"user-menu",role:"menu",children:[i.jsx(I,{to:"/account",className:"menu-item",role:"menuitem",children:"Account"}),i.jsx(I,{to:"/orders",className:"menu-item",role:"menuitem",children:"Orders"}),i.jsx("button",{className:"menu-item",role:"menuitem",onClick:t,children:"Logout"})]})]}):i.jsxs("div",{className:"auth",children:[i.jsx(Dt,{to:"/login",end:!0,className:b,children:"Login"}),i.jsx(Dt,{to:"/register",className:b,children:"Register"})]})]})]}),s&&i.jsx("div",{className:"overlay",onClick:()=>o(!1),"aria-hidden":!0}),i.jsx("style",{children:`
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
        .header{position:sticky;top:0;z-index:50;background:rgba(13,13,15,.8);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
        .header-inner{display:flex;align-items:center;justify-content:space-between;height:64px}
        .left{display:flex;align-items:center;gap:10px}
        .brand{color:var(--text);text-decoration:none;font-weight:800;letter-spacing:.2px}
        .hamburger{display:none;flex-direction:column;gap:4px;width:36px;height:36px;align-items:center;justify-content:center;border-radius:8px;border:1px solid var(--line);background:var(--ghost);color:var(--text)}
        .hamburger span{display:block;width:18px;height:2px;background:var(--text);border-radius:2px}
        .nav{display:flex;align-items:center;gap:14px}
        
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
        /* Sparkle pulse when fly-to-cart lands */
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
        
        /* Auth button styles - separate from regular nav-link */
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
        
        /* Remove focus outline */
        .auth-btn:focus {
          outline:none;
        }
        
        /* Hover state - only on NON-active buttons */
        .auth-btn:not(.active):hover{
          background:var(--brand-600);
          border-color:var(--brand-600);
          color:white;
        }
        
        /* Active state - ONLY when route matches */
        .auth-btn.active{
          background:var(--brand);
          border-color:var(--brand);
          color:white;
          box-shadow:0 4px 12px rgba(109,116,255,0.3);
        }
        
        /* Ensure active state persists even on hover */
        .auth-btn.active:hover {
          background:var(--brand);
          border-color:var(--brand);
        }
        
        /* Focus-visible only on non-active buttons */
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
          .divider{display:none}
          .auth{margin-top:6px;flex-direction:column;width:100%}
          .auth-btn{width:100%}
        }
      `})]})}function h1(){const e=new Date().getFullYear();return i.jsxs("footer",{className:"footer",role:"contentinfo",children:[i.jsxs("div",{className:"container footer-inner",children:[i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"col brand-col",children:[i.jsx(I,{to:"/",className:"brand",children:"Own Setup 💼"}),i.jsx("p",{className:"tagline",children:"Everyday essentials with thoughtful design and lasting quality."})]}),i.jsxs("nav",{className:"col","aria-label":"Footer navigation",children:[i.jsx("h3",{className:"col-title",children:"Navigate"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:i.jsx(I,{to:"/",children:"Home"})}),i.jsx("li",{children:i.jsx(I,{to:"/shop",children:"Shop"})}),i.jsx("li",{children:i.jsx(I,{to:"/about",children:"About"})}),i.jsx("li",{children:i.jsx(I,{to:"/contact",children:"Contact"})}),i.jsx("li",{children:i.jsx(I,{to:"/cart",children:"Cart"})})]})]}),i.jsxs("nav",{className:"col","aria-label":"Help and policies",children:[i.jsx("h3",{className:"col-title",children:"Help"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:i.jsx(I,{to:"/support",children:"Support"})}),i.jsx("li",{children:i.jsx(I,{to:"/faq",children:"FAQ"})}),i.jsx("li",{children:i.jsx(I,{to:"/shipping-returns",children:"Shipping & Returns"})}),i.jsx("li",{children:i.jsx(I,{to:"/privacy",children:"Privacy Policy"})}),i.jsx("li",{children:i.jsx(I,{to:"/terms",children:"Terms of Service"})})]})]}),i.jsxs("div",{className:"col",children:[i.jsx("h3",{className:"col-title",children:"Contact"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),i.jsx("li",{children:"Phone: +94 76 89 76 222"}),i.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00"}),i.jsx("li",{children:"Address: 252/1A Mannar Road, Puttalam"})]}),i.jsxs("div",{className:"social",children:[i.jsx("a",{href:"https://www.instagram.com/","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:"IG"}),i.jsx("a",{href:"https://facebook.com/","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:"FB"}),i.jsx("a",{href:"https://x.com/","aria-label":"X (Twitter)",target:"_blank",rel:"noopener noreferrer",children:"X"})]})]}),i.jsxs("div",{className:"col newsletter",children:[i.jsx("h3",{className:"col-title",children:"Stay in the loop"}),i.jsx("p",{className:"muted",children:"Subscribe for product drops, care tips, and seasonal edits."}),i.jsxs("form",{className:"signup",onSubmit:t=>{t.preventDefault(),alert("Thanks for subscribing!")},children:[i.jsx("label",{htmlFor:"footer-email",className:"sr-only",children:"Email address"}),i.jsx("input",{id:"footer-email",type:"email",required:!0,placeholder:"email@example.com",autoComplete:"email"}),i.jsx("button",{className:"btn btn-primary",type:"submit",children:"Subscribe"})]}),i.jsx("p",{className:"tiny muted",children:"By subscribing, consent to receive marketing emails; unsubscribe anytime."})]})]}),i.jsxs("div",{className:"footer-bottom",children:[i.jsxs("div",{className:"left",children:[i.jsxs("span",{children:["© ",e," Own Setup 💼"]}),i.jsx("span",{className:"dot",children:"•"}),i.jsx(I,{to:"/privacy",children:"Privacy"}),i.jsx("span",{className:"dot",children:"•"}),i.jsx(I,{to:"/terms",children:"Terms"}),i.jsx("span",{className:"dot",children:"•"}),i.jsx(I,{to:"/support",children:"Support"})]}),i.jsxs("div",{className:"right",children:[i.jsx(I,{to:"/sitemap",children:"Sitemap"}),i.jsx("span",{className:"dot",children:"•"}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:"Back to top ↑"})]})]})]}),i.jsx("style",{children:`
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
        .brand{color:var(--text);text-decoration:none;font-weight:800;letter-spacing:.2px}
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
      `})]})}function m1(){return i.jsxs(i.Fragment,{children:[i.jsx(f1,{}),i.jsx(sf,{}),i.jsx(h1,{})]})}function g1(){const[e,t]=v.useState([]),[r,n]=v.useState(1),[a]=v.useState(10),[s,o]=v.useState(0),[l,c]=v.useState(!1),[d,f]=v.useState(null),h=v.useRef(r);v.useEffect(()=>{h.current=r},[r]);async function p(u){var j;c(!0),f(null);const g=new AbortController;try{const _=(await W.get("/admin/orders",{params:{page:u,size:a},signal:g.signal})).data;t(Array.isArray(_.items)?_.items:[]),o(Number.isFinite(_.total)?_.total:0),n(Number.isFinite(_.page)?_.page:u)}catch(k){const _=k;if(((j=_==null?void 0:_.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}f("Failed to fetch orders")}finally{c(!1)}return()=>g.abort()}v.useEffect(()=>{let u=!1;const g=new AbortController;return(async()=>{var j;try{const k=await W.get("/admin/orders",{params:{page:1,size:a},signal:g.signal});if(u)return;t(Array.isArray(k.data.items)?k.data.items:[]),o(Number.isFinite(k.data.total)?k.data.total:0),n(Number.isFinite(k.data.page)?k.data.page:1),f(null)}catch(k){if(u)return;const _=k;if(((j=_==null?void 0:_.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}f("Failed to fetch orders")}finally{u||c(!1)}})(),()=>{u=!0,g.abort()}},[]),v.useEffect(()=>{const u=window.setInterval(()=>{const g=h.current;p(g)},5e3);return()=>window.clearInterval(u)},[]),v.useEffect(()=>{r<=0||p(r)},[r]);const b=v.useMemo(()=>Math.max(1,Math.ceil((s||0)/a)),[s,a]);function m(u){return`LKR ${(Number.isFinite(u)?u:0).toFixed(2)}`}async function y(u,g){var j;try{await W.put(`/admin/orders/${u}/status`,{new_status:g,admin_feedback:null,resubmit_required:!1,estimated_delivery_date:null}),await p(h.current)}catch(k){const _=k;if(((j=_==null?void 0:_.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}console.error("Failed to update status",k),alert("Failed to update status. Please try again.")}}const w=r>1,x=r<b;return i.jsxs("div",{className:"orders-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("div",{className:"page-header-content",children:[i.jsxs("h1",{className:"page-title",children:[i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"10px"},children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),"Order Management"]}),i.jsx("p",{className:"page-subtitle",children:"View and manage customer orders"})]}),i.jsxs("div",{className:"page-header-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:s}),i.jsx("div",{className:"stat-label",children:"Total Orders"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:e.filter(u=>u.status==="pending_verification").length}),i.jsx("div",{className:"stat-label",children:"Pending Verification"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:e.filter(u=>u.status==="payment_verified").length}),i.jsx("div",{className:"stat-label",children:"Payment Verified"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:e.filter(u=>u.status==="processing").length}),i.jsx("div",{className:"stat-label",children:"Processing"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:e.filter(u=>u.status==="delivered").length}),i.jsx("div",{className:"stat-label",children:"Delivered"})]})]})]}),d&&i.jsxs("div",{className:"alert-error",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),d]}),i.jsxs("div",{className:"card-modern",children:[i.jsxs("div",{className:"card-header",children:[i.jsxs("h2",{className:"card-title",children:[i.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"8px"},children:[i.jsx("path",{d:"M21 10H7"}),i.jsx("path",{d:"M21 6H3"}),i.jsx("path",{d:"M21 14H3"}),i.jsx("path",{d:"M21 18H7"})]}),"All Orders",i.jsx("span",{className:"badge-count",children:s})]}),i.jsxs("button",{className:"btn-refresh",onClick:()=>p(1),disabled:l,type:"button",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:l?"spinner":"",children:i.jsx("path",{d:"M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"})}),l?"Refreshing...":"Refresh"]})]}),l&&e.length===0&&i.jsxs("div",{className:"loading-state",children:[i.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:i.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),i.jsx("p",{children:"Loading orders..."})]}),!l&&e.length===0&&i.jsxs("div",{className:"empty-state-large",children:[i.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.3",children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),i.jsx("h3",{children:"No Orders Yet"}),i.jsx("p",{children:"Orders will appear here when customers make purchases"})]}),e.length>0&&i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.map(u=>i.jsxs("div",{style:{border:"1px solid #e0e0e0",borderRadius:"8px",padding:"20px",backgroundColor:"#fff"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px",paddingBottom:"12px",borderBottom:"2px solid #f0f0f0"},children:[i.jsxs("div",{children:[i.jsxs("h3",{style:{margin:0,fontSize:"18px",fontWeight:"bold"},children:["Order #",u.id]}),i.jsx("p",{style:{margin:"4px 0 0",fontSize:"13px",color:"#666"},children:u.created_at?new Date(u.created_at).toLocaleString():"N/A"})]}),i.jsx("div",{style:{fontSize:"20px",fontWeight:"bold",color:"#6D74FF"},children:m(u.total_amount)})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"16px"},children:[i.jsxs("div",{children:[i.jsx("h4",{style:{margin:"0 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"👤 Customer Information"}),i.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.8"},children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Name:"})," ",u.customer_name||"N/A"]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Phone:"})," ",u.customer_phone||"N/A"]}),u.customer_email&&i.jsxs("div",{children:[i.jsx("strong",{children:"Email:"})," ",u.customer_email]})]}),i.jsx("h4",{style:{margin:"16px 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"📍 Delivery Address"}),i.jsx("div",{style:{fontSize:"14px",lineHeight:"1.8"},children:u.shipping_address?i.jsxs(i.Fragment,{children:[i.jsx("div",{children:u.shipping_address.line1}),i.jsxs("div",{children:[u.shipping_address.city,", ",u.shipping_address.postal_code]}),i.jsx("div",{children:u.shipping_address.country})]}):i.jsx("div",{children:"No address provided"})})]}),i.jsxs("div",{children:[i.jsx("h4",{style:{margin:"0 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"💳 Payment Information"}),i.jsxs("div",{style:{fontSize:"14px",lineHeight:"1.8"},children:[i.jsxs("div",{children:[i.jsx("strong",{children:"Bank:"})," ",u.selected_bank||"N/A"]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Payment Status:"})," ",u.payment_status||"N/A"]}),u.transaction_reference&&i.jsxs("div",{children:[i.jsx("strong",{children:"Reference ID:"})," ",u.transaction_reference]})]}),u.transfer_receipt_url&&i.jsxs(i.Fragment,{children:[i.jsx("h4",{style:{margin:"16px 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"📄 Transfer Receipt"}),i.jsx("div",{children:i.jsx("a",{href:u.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"8px 16px",backgroundColor:"#6D74FF",color:"white",textDecoration:"none",borderRadius:"4px",fontSize:"14px"},children:"📥 View/Download Receipt"})})]}),u.additional_notes&&i.jsxs(i.Fragment,{children:[i.jsx("h4",{style:{margin:"16px 0 12px",fontSize:"14px",fontWeight:"bold",color:"#333"},children:"📝 Notes"}),i.jsx("div",{style:{fontSize:"14px",color:"#666",fontStyle:"italic"},children:u.additional_notes})]})]})]}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"16px",borderTop:"1px solid #f0f0f0"},children:[i.jsx("div",{children:i.jsxs("span",{style:{fontSize:"14px",fontWeight:"bold",padding:"6px 12px",borderRadius:"20px",backgroundColor:u.status==="pending_verification"?"#fff4e5":u.status==="payment_verified"?"#e5f5ff":u.status==="processing"?"#fff0e5":u.status==="shipped"?"#e5f0ff":u.status==="delivered"?"#e5ffe5":u.status==="cancelled"?"#ffe5e5":"#f0f0f0",color:u.status==="pending_verification"?"#d97706":u.status==="payment_verified"?"#0284c7":u.status==="processing"?"#ea580c":u.status==="shipped"?"#2563eb":u.status==="delivered"?"#16a34a":u.status==="cancelled"?"#dc2626":"#666"},children:[u.status==="pending_verification"&&"⏳ ",u.status==="payment_verified"&&"✅ ",u.status==="processing"&&"⚙️ ",u.status==="shipped"&&"🚚 ",u.status==="delivered"&&"📦 ",u.status==="cancelled"&&"❌ ",u.status.replace(/_/g," ").toUpperCase()]})}),i.jsx("div",{style:{display:"flex",gap:"8px"},children:i.jsxs("select",{onChange:g=>y(u.id,g.target.value),value:u.status,style:{padding:"8px 12px",borderRadius:"4px",border:"1px solid #ccc",fontSize:"14px",cursor:"pointer"},children:[i.jsx("option",{value:"pending_verification",children:"⏳ Pending Verification"}),i.jsx("option",{value:"payment_verified",children:"✅ Payment Verified"}),i.jsx("option",{value:"processing",children:"⚙️ Order Processing"}),i.jsx("option",{value:"shipped",children:"🚚 Shipped"}),i.jsx("option",{value:"delivered",children:"📦 Delivered"}),i.jsx("option",{value:"cancelled",children:"❌ Cancelled"})]})})]})]},u.id))}),e.length>0&&i.jsxs("div",{className:"pagination-footer",children:[i.jsxs("div",{className:"pagination-info",children:["Showing page ",i.jsx("strong",{children:r})," of ",i.jsx("strong",{children:b})," — ",i.jsx("strong",{children:s})," total orders"]}),i.jsxs("div",{className:"pagination-controls",children:[i.jsxs("button",{className:"btn-page",onClick:()=>n(u=>Math.max(1,u-1)),disabled:!w,type:"button",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),i.jsx("div",{className:"page-number",children:i.jsx("span",{children:r})}),i.jsxs("button",{className:"btn-page",onClick:()=>n(u=>Math.min(b,u+1)),disabled:!x,type:"button",children:["Next",i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]})]})]}),i.jsx("style",{children:`
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
      `})]})}function x1(){const[e,t]=v.useState(null),[r,n]=v.useState(null),[a,s]=v.useState(!0);v.useEffect(()=>{let l=!0;const c=new AbortController;return(async()=>{var d,f,h,p,b;try{const m=await W.get("/admin/metrics",{signal:c.signal});if(!l)return;t(m.data),n(null)}catch(m){if(!l)return;const y=m;if(((d=y==null?void 0:y.response)==null?void 0:d.status)===401){try{window.location.href="/login"}catch{}return}const x=((h=(f=y==null?void 0:y.response)==null?void 0:f.data)==null?void 0:h.detail)||((b=(p=y==null?void 0:y.response)==null?void 0:p.data)==null?void 0:b.message);n(x||"Failed to load metrics")}finally{l&&s(!1)}})(),()=>{l=!1,c.abort()}},[]);const o=v.useMemo(()=>({users:(e==null?void 0:e.total_users)??0,products:(e==null?void 0:e.total_products)??0,orders:(e==null?void 0:e.total_orders)??0,sales:(e==null?void 0:e.total_sales)??0}),[e]);return a?i.jsx("div",{className:"dashboard-page",children:i.jsxs("div",{className:"loading-state",children:[i.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:i.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),i.jsx("p",{children:"Loading dashboard..."})]})}):r?i.jsx("div",{className:"dashboard-page",children:i.jsxs("div",{className:"alert-error",role:"alert",children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),r]})}):i.jsxs("div",{className:"dashboard-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{className:"page-header-content",children:[i.jsxs("h1",{className:"page-title",children:[i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"10px"},children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Dashboard Overview"]}),i.jsx("p",{className:"page-subtitle",children:"Monitor your e-commerce metrics at a glance"})]})}),i.jsxs("div",{className:"metrics-grid",role:"region","aria-label":"Key performance indicators",children:[i.jsxs("div",{className:"metric-card users",children:[i.jsx("div",{className:"metric-icon",children:i.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),i.jsxs("div",{className:"metric-content",children:[i.jsx("div",{className:"metric-label",children:"Total Users"}),i.jsx("div",{className:"metric-value","aria-live":"polite",children:o.users.toLocaleString()}),i.jsx("div",{className:"metric-subtitle",children:"Registered accounts"})]})]}),i.jsxs("div",{className:"metric-card products",children:[i.jsx("div",{className:"metric-icon",children:i.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),i.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})}),i.jsxs("div",{className:"metric-content",children:[i.jsx("div",{className:"metric-label",children:"Total Products"}),i.jsx("div",{className:"metric-value","aria-live":"polite",children:o.products.toLocaleString()}),i.jsx("div",{className:"metric-subtitle",children:"In catalog"})]})]}),i.jsxs("div",{className:"metric-card orders",children:[i.jsx("div",{className:"metric-icon",children:i.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[i.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),i.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]})}),i.jsxs("div",{className:"metric-content",children:[i.jsx("div",{className:"metric-label",children:"Total Orders"}),i.jsx("div",{className:"metric-value","aria-live":"polite",children:o.orders.toLocaleString()}),i.jsx("div",{className:"metric-subtitle",children:"All time orders"})]})]})]}),i.jsx("div",{className:"card-modern welcome-card",children:i.jsxs("div",{className:"welcome-content",children:[i.jsxs("div",{className:"welcome-text",children:[i.jsx("h2",{children:"Welcome to Your Dashboard!"}),i.jsx("p",{children:"Your e-commerce platform is running smoothly. Monitor key metrics and manage your store efficiently."})]}),i.jsxs("div",{className:"welcome-stats",children:[i.jsxs("div",{className:"welcome-stat",children:[i.jsx("span",{className:"stat-number",children:(o.sales/o.orders||0).toFixed(2)}),i.jsx("span",{className:"stat-label",children:"Avg Order Value"})]}),i.jsxs("div",{className:"welcome-stat",children:[i.jsxs("span",{className:"stat-number",children:[o.orders>0?(o.products/o.orders*100).toFixed(1):"0","%"]}),i.jsx("span",{className:"stat-label",children:"Conversion Rate"})]})]})]})}),i.jsx("style",{children:`
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
      `})]})}var Lo=function(e,t){return Lo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},Lo(e,t)};function v1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Lo(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var ke=function(){return ke=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},ke.apply(this,arguments)};var Cd=!1,dr,Fo,Oo,Ki,Qi,Ff,Xi,Mo,Ao,Do,Of,Io,Bo,Mf,Af;function Be(){if(!Cd){Cd=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),r=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(Io=/\b(iPhone|iP[ao]d)/.exec(e),Bo=/\b(iP[ao]d)/.exec(e),Do=/Android/i.exec(e),Mf=/FBAN\/\w+;/i.exec(e),Af=/Mobile/i.exec(e),Of=!!/Win64/.exec(e),t){dr=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,dr&&document&&document.documentMode&&(dr=document.documentMode);var n=/(?:Trident\/(\d+.\d+))/.exec(e);Ff=n?parseFloat(n[1])+4:dr,Fo=t[2]?parseFloat(t[2]):NaN,Oo=t[3]?parseFloat(t[3]):NaN,Ki=t[4]?parseFloat(t[4]):NaN,Ki?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),Qi=t&&t[1]?parseFloat(t[1]):NaN):Qi=NaN}else dr=Fo=Oo=Qi=Ki=NaN;if(r){if(r[1]){var a=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);Xi=a?parseFloat(a[1].replace("_",".")):!0}else Xi=!1;Mo=!!r[2],Ao=!!r[3]}else Xi=Mo=Ao=!1}}var Uo={ie:function(){return Be()||dr},ieCompatibilityMode:function(){return Be()||Ff>dr},ie64:function(){return Uo.ie()&&Of},firefox:function(){return Be()||Fo},opera:function(){return Be()||Oo},webkit:function(){return Be()||Ki},safari:function(){return Uo.webkit()},chrome:function(){return Be()||Qi},windows:function(){return Be()||Mo},osx:function(){return Be()||Xi},linux:function(){return Be()||Ao},iphone:function(){return Be()||Io},mobile:function(){return Be()||Io||Bo||Do||Af},nativeApp:function(){return Be()||Mf},android:function(){return Be()||Do},ipad:function(){return Be()||Bo}},y1=Uo,b1=!!(typeof window<"u"&&window.document&&window.document.createElement),w1={canUseDOM:b1},j1=w1,Df=j1,If;Df.canUseDOM&&(If=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function k1(e,t){if(!Df.canUseDOM||t&&!("addEventListener"in document))return!1;var r="on"+e,n=r in document;if(!n){var a=document.createElement("div");a.setAttribute(r,"return;"),n=typeof a[r]=="function"}return!n&&If&&e==="wheel"&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}var N1=k1,S1=y1,C1=N1,Ed=10,_d=40,Rd=800;function Bf(e){var t=0,r=0,n=0,a=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=r,r=0),n=t*Ed,a=r*Ed,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||a)&&e.deltaMode&&(e.deltaMode==1?(n*=_d,a*=_d):(n*=Rd,a*=Rd)),n&&!t&&(t=n<1?-1:1),a&&!r&&(r=a<1?-1:1),{spinX:t,spinY:r,pixelX:n,pixelY:a}}Bf.getEventType=function(){return S1.firefox()?"DOMMouseScroll":C1("wheel")?"wheel":"mousewheel"};var E1=Bf,_1=E1;const R1=Fd(_1);function P1(e,t,r,n,a,s){s===void 0&&(s=0);var o=rn(e,t,s),l=o.width,c=o.height,d=Math.min(l,r),f=Math.min(c,n);return d>f*a?{width:f*a,height:f}:{width:d,height:d/a}}function z1(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}function bn(e,t,r,n,a){a===void 0&&(a=0);var s=rn(t.width,t.height,a),o=s.width,l=s.height;return{x:Pd(e.x,o,r.width,n),y:Pd(e.y,l,r.height,n)}}function Pd(e,t,r,n){var a=t*n/2-r/2;return Ka(e,-a,a)}function zd(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function Td(e,t){return Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI}function T1(e,t,r,n,a,s,o){s===void 0&&(s=0),o===void 0&&(o=!0);var l=o?L1:F1,c=rn(t.width,t.height,s),d=rn(t.naturalWidth,t.naturalHeight,s),f={x:l(100,((c.width-r.width/a)/2-e.x/a)/c.width*100),y:l(100,((c.height-r.height/a)/2-e.y/a)/c.height*100),width:l(100,r.width/c.width*100/a),height:l(100,r.height/c.height*100/a)},h=Math.round(l(d.width,f.width*d.width/100)),p=Math.round(l(d.height,f.height*d.height/100)),b=d.width>=d.height*n,m=b?{width:Math.round(p*n),height:p}:{width:h,height:Math.round(h/n)},y=ke(ke({},m),{x:Math.round(l(d.width-m.width,f.x*d.width/100)),y:Math.round(l(d.height-m.height,f.y*d.height/100))});return{croppedAreaPercentages:f,croppedAreaPixels:y}}function L1(e,t){return Math.min(e,Math.max(0,t))}function F1(e,t){return t}function O1(e,t,r,n,a,s){var o=rn(t.width,t.height,r),l=Ka(n.width/o.width*(100/e.width),a,s),c={x:l*o.width/2-n.width/2-o.width*l*(e.x/100),y:l*o.height/2-n.height/2-o.height*l*(e.y/100)};return{crop:c,zoom:l}}function M1(e,t,r){var n=z1(t);return r.height>r.width?r.height/(e.height*n):r.width/(e.width*n)}function A1(e,t,r,n,a,s){r===void 0&&(r=0);var o=rn(t.naturalWidth,t.naturalHeight,r),l=Ka(M1(e,t,n),a,s),c=n.height>n.width?n.height/e.height:n.width/e.width,d={x:((o.width-e.width)/2-e.x)*c,y:((o.height-e.height)/2-e.y)*c};return{crop:d,zoom:l}}function Ld(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function D1(e){return e*Math.PI/180}function rn(e,t,r){var n=D1(r);return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}function Ka(e,t,r){return Math.min(Math.max(e,t),r)}function Ti(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(r){return typeof r=="string"&&r.length>0}).join(" ").trim()}var I1=`.reactEasyCrop_Container {
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
`,B1=1,U1=3,W1=1,$1=function(e){v1(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.cropperRef=v.createRef(),r.imageRef=v.createRef(),r.videoRef=v.createRef(),r.containerPosition={x:0,y:0},r.containerRef=null,r.styleRef=null,r.containerRect=null,r.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},r.dragStartPosition={x:0,y:0},r.dragStartCrop={x:0,y:0},r.gestureZoomStart=0,r.gestureRotationStart=0,r.isTouching=!1,r.lastPinchDistance=0,r.lastPinchRotation=0,r.rafDragTimeout=null,r.rafPinchTimeout=null,r.wheelTimer=null,r.currentDoc=typeof document<"u"?document:null,r.currentWindow=typeof window<"u"?window:null,r.resizeObserver=null,r.previousCropSize=null,r.isInitialized=!1,r.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},r.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!r.containerRef)){var n=!0;r.resizeObserver=new window.ResizeObserver(function(a){if(n){n=!1;return}r.computeSizes()}),r.resizeObserver.observe(r.containerRef)}},r.preventZoomSafari=function(n){return n.preventDefault()},r.cleanEvents=function(){r.currentDoc&&(r.currentDoc.removeEventListener("mousemove",r.onMouseMove),r.currentDoc.removeEventListener("mouseup",r.onDragStopped),r.currentDoc.removeEventListener("touchmove",r.onTouchMove),r.currentDoc.removeEventListener("touchend",r.onDragStopped),r.currentDoc.removeEventListener("gesturechange",r.onGestureChange),r.currentDoc.removeEventListener("gestureend",r.onGestureEnd),r.currentDoc.removeEventListener("scroll",r.onScroll))},r.clearScrollEvent=function(){r.containerRef&&r.containerRef.removeEventListener("wheel",r.onWheel),r.wheelTimer&&clearTimeout(r.wheelTimer)},r.onMediaLoad=function(){var n=r.computeSizes();n&&(r.previousCropSize=n,r.emitCropData(),r.setInitialCrop(n),r.isInitialized=!0),r.props.onMediaLoaded&&r.props.onMediaLoaded(r.mediaSize)},r.setInitialCrop=function(n){if(r.props.initialCroppedAreaPercentages){var a=O1(r.props.initialCroppedAreaPercentages,r.mediaSize,r.props.rotation,n,r.props.minZoom,r.props.maxZoom),s=a.crop,o=a.zoom;r.props.onCropChange(s),r.props.onZoomChange&&r.props.onZoomChange(o)}else if(r.props.initialCroppedAreaPixels){var l=A1(r.props.initialCroppedAreaPixels,r.mediaSize,r.props.rotation,n,r.props.minZoom,r.props.maxZoom),s=l.crop,o=l.zoom;r.props.onCropChange(s),r.props.onZoomChange&&r.props.onZoomChange(o)}},r.computeSizes=function(){var n,a,s,o,l,c,d=r.imageRef.current||r.videoRef.current;if(d&&r.containerRef){r.containerRect=r.containerRef.getBoundingClientRect(),r.saveContainerPosition();var f=r.containerRect.width/r.containerRect.height,h=((n=r.imageRef.current)===null||n===void 0?void 0:n.naturalWidth)||((a=r.videoRef.current)===null||a===void 0?void 0:a.videoWidth)||0,p=((s=r.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((o=r.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,b=d.offsetWidth<h||d.offsetHeight<p,m=h/p,y=void 0;if(b)switch(r.state.mediaObjectFit){default:case"contain":y=f>m?{width:r.containerRect.height*m,height:r.containerRect.height}:{width:r.containerRect.width,height:r.containerRect.width/m};break;case"horizontal-cover":y={width:r.containerRect.width,height:r.containerRect.width/m};break;case"vertical-cover":y={width:r.containerRect.height*m,height:r.containerRect.height};break}else y={width:d.offsetWidth,height:d.offsetHeight};r.mediaSize=ke(ke({},y),{naturalWidth:h,naturalHeight:p}),r.props.setMediaSize&&r.props.setMediaSize(r.mediaSize);var w=r.props.cropSize?r.props.cropSize:P1(r.mediaSize.width,r.mediaSize.height,r.containerRect.width,r.containerRect.height,r.props.aspect,r.props.rotation);return(((l=r.state.cropSize)===null||l===void 0?void 0:l.height)!==w.height||((c=r.state.cropSize)===null||c===void 0?void 0:c.width)!==w.width)&&r.props.onCropSizeChange&&r.props.onCropSizeChange(w),r.setState({cropSize:w},r.recomputeCropPosition),r.props.setCropSize&&r.props.setCropSize(w),w}},r.saveContainerPosition=function(){if(r.containerRef){var n=r.containerRef.getBoundingClientRect();r.containerPosition={x:n.left,y:n.top}}},r.onMouseDown=function(n){r.currentDoc&&(n.preventDefault(),r.currentDoc.addEventListener("mousemove",r.onMouseMove),r.currentDoc.addEventListener("mouseup",r.onDragStopped),r.saveContainerPosition(),r.onDragStart(t.getMousePoint(n)))},r.onMouseMove=function(n){return r.onDrag(t.getMousePoint(n))},r.onScroll=function(n){r.currentDoc&&(n.preventDefault(),r.saveContainerPosition())},r.onTouchStart=function(n){r.currentDoc&&(r.isTouching=!0,!(r.props.onTouchRequest&&!r.props.onTouchRequest(n))&&(r.currentDoc.addEventListener("touchmove",r.onTouchMove,{passive:!1}),r.currentDoc.addEventListener("touchend",r.onDragStopped),r.saveContainerPosition(),n.touches.length===2?r.onPinchStart(n):n.touches.length===1&&r.onDragStart(t.getTouchPoint(n.touches[0]))))},r.onTouchMove=function(n){n.preventDefault(),n.touches.length===2?r.onPinchMove(n):n.touches.length===1&&r.onDrag(t.getTouchPoint(n.touches[0]))},r.onGestureStart=function(n){r.currentDoc&&(n.preventDefault(),r.currentDoc.addEventListener("gesturechange",r.onGestureChange),r.currentDoc.addEventListener("gestureend",r.onGestureEnd),r.gestureZoomStart=r.props.zoom,r.gestureRotationStart=r.props.rotation)},r.onGestureChange=function(n){if(n.preventDefault(),!r.isTouching){var a=t.getMousePoint(n),s=r.gestureZoomStart-1+n.scale;if(r.setNewZoom(s,a,{shouldUpdatePosition:!0}),r.props.onRotationChange){var o=r.gestureRotationStart+n.rotation;r.props.onRotationChange(o)}}},r.onGestureEnd=function(n){r.cleanEvents()},r.onDragStart=function(n){var a,s,o=n.x,l=n.y;r.dragStartPosition={x:o,y:l},r.dragStartCrop=ke({},r.props.crop),(s=(a=r.props).onInteractionStart)===null||s===void 0||s.call(a)},r.onDrag=function(n){var a=n.x,s=n.y;r.currentWindow&&(r.rafDragTimeout&&r.currentWindow.cancelAnimationFrame(r.rafDragTimeout),r.rafDragTimeout=r.currentWindow.requestAnimationFrame(function(){if(r.state.cropSize&&!(a===void 0||s===void 0)){var o=a-r.dragStartPosition.x,l=s-r.dragStartPosition.y,c={x:r.dragStartCrop.x+o,y:r.dragStartCrop.y+l},d=r.props.restrictPosition?bn(c,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):c;r.props.onCropChange(d)}}))},r.onDragStopped=function(){var n,a;r.isTouching=!1,r.cleanEvents(),r.emitCropData(),(a=(n=r.props).onInteractionEnd)===null||a===void 0||a.call(n)},r.onWheel=function(n){if(r.currentWindow&&!(r.props.onWheelRequest&&!r.props.onWheelRequest(n))){n.preventDefault();var a=t.getMousePoint(n),s=R1(n).pixelY,o=r.props.zoom-s*r.props.zoomSpeed/200;r.setNewZoom(o,a,{shouldUpdatePosition:!0}),r.state.hasWheelJustStarted||r.setState({hasWheelJustStarted:!0},function(){var l,c;return(c=(l=r.props).onInteractionStart)===null||c===void 0?void 0:c.call(l)}),r.wheelTimer&&clearTimeout(r.wheelTimer),r.wheelTimer=r.currentWindow.setTimeout(function(){return r.setState({hasWheelJustStarted:!1},function(){var l,c;return(c=(l=r.props).onInteractionEnd)===null||c===void 0?void 0:c.call(l)})},250)}},r.getPointOnContainer=function(n,a){var s=n.x,o=n.y;if(!r.containerRect)throw new Error("The Cropper is not mounted");return{x:r.containerRect.width/2-(s-a.x),y:r.containerRect.height/2-(o-a.y)}},r.getPointOnMedia=function(n){var a=n.x,s=n.y,o=r.props,l=o.crop,c=o.zoom;return{x:(a+l.x)/c,y:(s+l.y)/c}},r.setNewZoom=function(n,a,s){var o=s===void 0?{}:s,l=o.shouldUpdatePosition,c=l===void 0?!0:l;if(!(!r.state.cropSize||!r.props.onZoomChange)){var d=Ka(n,r.props.minZoom,r.props.maxZoom);if(c){var f=r.getPointOnContainer(a,r.containerPosition),h=r.getPointOnMedia(f),p={x:h.x*d-f.x,y:h.y*d-f.y},b=r.props.restrictPosition?bn(p,r.mediaSize,r.state.cropSize,d,r.props.rotation):p;r.props.onCropChange(b)}r.props.onZoomChange(d)}},r.getCropData=function(){if(!r.state.cropSize)return null;var n=r.props.restrictPosition?bn(r.props.crop,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):r.props.crop;return T1(n,r.mediaSize,r.state.cropSize,r.getAspect(),r.props.zoom,r.props.rotation,r.props.restrictPosition)},r.emitCropData=function(){var n=r.getCropData();if(n){var a=n.croppedAreaPercentages,s=n.croppedAreaPixels;r.props.onCropComplete&&r.props.onCropComplete(a,s),r.props.onCropAreaChange&&r.props.onCropAreaChange(a,s)}},r.emitCropAreaChange=function(){var n=r.getCropData();if(n){var a=n.croppedAreaPercentages,s=n.croppedAreaPixels;r.props.onCropAreaChange&&r.props.onCropAreaChange(a,s)}},r.recomputeCropPosition=function(){if(r.state.cropSize){var n=r.props.crop;if(r.isInitialized&&r.previousCropSize){var a=Math.abs(r.previousCropSize.width-r.state.cropSize.width)>1e-6||Math.abs(r.previousCropSize.height-r.state.cropSize.height)>1e-6;if(a){var s=r.state.cropSize.width/r.previousCropSize.width,o=r.state.cropSize.height/r.previousCropSize.height;n={x:r.props.crop.x*s,y:r.props.crop.y*o}}}var l=r.props.restrictPosition?bn(n,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):n;r.previousCropSize=r.state.cropSize,r.props.onCropChange(l),r.emitCropData()}},r.onKeyDown=function(n){var a,s,o=r.props,l=o.crop,c=o.onCropChange,d=o.keyboardStep,f=o.zoom,h=o.rotation,p=d;if(r.state.cropSize){n.shiftKey&&(p*=.2);var b=ke({},l);switch(n.key){case"ArrowUp":b.y-=p,n.preventDefault();break;case"ArrowDown":b.y+=p,n.preventDefault();break;case"ArrowLeft":b.x-=p,n.preventDefault();break;case"ArrowRight":b.x+=p,n.preventDefault();break;default:return}r.props.restrictPosition&&(b=bn(b,r.mediaSize,r.state.cropSize,f,h)),n.repeat||(s=(a=r.props).onInteractionStart)===null||s===void 0||s.call(a),c(b)}},r.onKeyUp=function(n){var a,s;switch(n.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":n.preventDefault();break;default:return}r.emitCropData(),(s=(a=r.props).onInteractionEnd)===null||s===void 0||s.call(a)},r}return t.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=I1,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},t.prototype.componentWillUnmount=function(){var r,n;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(r=this.resizeObserver)===null||r===void 0||r.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((n=this.styleRef.parentNode)===null||n===void 0||n.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},t.prototype.componentDidUpdate=function(r){var n,a,s,o,l,c,d,f,h;r.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):r.aspect!==this.props.aspect?this.computeSizes():r.objectFit!==this.props.objectFit?this.computeSizes():r.zoom!==this.props.zoom?this.recomputeCropPosition():((n=r.cropSize)===null||n===void 0?void 0:n.height)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.height)||((s=r.cropSize)===null||s===void 0?void 0:s.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((l=r.crop)===null||l===void 0?void 0:l.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((d=r.crop)===null||d===void 0?void 0:d.y)!==((f=this.props.crop)===null||f===void 0?void 0:f.y))&&this.emitCropAreaChange(),r.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),r.video!==this.props.video&&((h=this.videoRef.current)===null||h===void 0||h.load());var p=this.getObjectFit();p!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:p},this.computeSizes)},t.prototype.getAspect=function(){var r=this.props,n=r.cropSize,a=r.aspect;return n?n.width/n.height:a},t.prototype.getObjectFit=function(){var r,n,a,s;if(this.props.objectFit==="cover"){var o=this.imageRef.current||this.videoRef.current;if(o&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var l=this.containerRect.width/this.containerRect.height,c=((r=this.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((n=this.videoRef.current)===null||n===void 0?void 0:n.videoWidth)||0,d=((a=this.imageRef.current)===null||a===void 0?void 0:a.naturalHeight)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoHeight)||0,f=c/d;return f<l?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},t.prototype.onPinchStart=function(r){var n=t.getTouchPoint(r.touches[0]),a=t.getTouchPoint(r.touches[1]);this.lastPinchDistance=zd(n,a),this.lastPinchRotation=Td(n,a),this.onDragStart(Ld(n,a))},t.prototype.onPinchMove=function(r){var n=this;if(!(!this.currentDoc||!this.currentWindow)){var a=t.getTouchPoint(r.touches[0]),s=t.getTouchPoint(r.touches[1]),o=Ld(a,s);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var l=zd(a,s),c=n.props.zoom*(l/n.lastPinchDistance);n.setNewZoom(c,o,{shouldUpdatePosition:!1}),n.lastPinchDistance=l;var d=Td(a,s),f=n.props.rotation+(d-n.lastPinchRotation);n.props.onRotationChange&&n.props.onRotationChange(f),n.lastPinchRotation=d})}},t.prototype.render=function(){var r=this,n,a=this.props,s=a.image,o=a.video,l=a.mediaProps,c=a.cropperProps,d=a.transform,f=a.crop,h=f.x,p=f.y,b=a.rotation,m=a.zoom,y=a.cropShape,w=a.showGrid,x=a.roundCropAreaPixels,u=a.style,g=u.containerStyle,j=u.cropAreaStyle,k=u.mediaStyle,_=a.classes,P=_.containerClassName,R=_.cropAreaClassName,U=_.mediaClassName,O=(n=this.state.mediaObjectFit)!==null&&n!==void 0?n:this.getObjectFit();return v.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(B){return r.containerRef=B},"data-testid":"container",style:g,className:Ti("reactEasyCrop_Container",P)},s?v.createElement("img",ke({alt:"",className:Ti("reactEasyCrop_Image",O==="contain"&&"reactEasyCrop_Contain",O==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",O==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",U)},l,{src:s,ref:this.imageRef,style:ke(ke({},k),{transform:d||"translate(".concat(h,"px, ").concat(p,"px) rotate(").concat(b,"deg) scale(").concat(m,")")}),onLoad:this.onMediaLoad})):o&&v.createElement("video",ke({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:Ti("reactEasyCrop_Video",O==="contain"&&"reactEasyCrop_Contain",O==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",O==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",U)},l,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:ke(ke({},k),{transform:d||"translate(".concat(h,"px, ").concat(p,"px) rotate(").concat(b,"deg) scale(").concat(m,")")}),controls:!1}),(Array.isArray(o)?o:[{src:o}]).map(function(Y){return v.createElement("source",ke({key:Y.src},Y))})),this.state.cropSize&&v.createElement("div",ke({ref:this.cropperRef,style:ke(ke({},j),{width:x?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:x?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:Ti("reactEasyCrop_CropArea",y==="round"&&"reactEasyCrop_CropAreaRound",w&&"reactEasyCrop_CropAreaGrid",R)},c)))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:U1,minZoom:B1,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:W1},t.getMousePoint=function(r){return{x:Number(r.clientX),y:Number(r.clientY)}},t.getTouchPoint=function(r){return{x:Number(r.clientX),y:Number(r.clientY)}},t}(v.Component);function H1(){var Ul;const[e,t]=v.useState([]),[r,n]=v.useState({name:"",slug:"",price:0,stock:0,images:[],description:""}),[a,s]=v.useState([]),[o,l]=v.useState([]),[c,d]=v.useState(null),[f,h]=v.useState(!1),[p,b]=v.useState(!1),[m,y]=v.useState(null),[w,x]=v.useState(!1),[u,g]=v.useState(!1),[j,k]=v.useState(0),[_,P]=v.useState(!1),[R,U]=v.useState(0),[O,Y]=v.useState({x:0,y:0}),[B,oe]=v.useState(1),[ve,F]=v.useState(null),D=v.useMemo(()=>{var te;const E=r.name.trim(),L=r.slug.trim(),V=((te=r.description)==null?void 0:te.trim())||"",K=Number.isFinite(r.price)&&r.price>=0,ie=Number.isInteger(r.stock)&&r.stock>=0;return{nameOk:E.length>1,slugOk:L.length>1,descriptionOk:V.length>=10,priceOk:K,stockOk:ie}},[r]),G=D.nameOk&&D.slugOk&&D.descriptionOk&&D.priceOk&&D.stockOk;function C(E){const L=parseFloat(E);return Number.isFinite(L)&&L>=0?L:0}function S(E){const L=parseInt(E,10);return Number.isFinite(L)&&L>=0?L:0}async function T(){var E,L,V,K,ie,te;h(!0),d(null);try{const Z=await W.get("/admin/products");t(Array.isArray((E=Z.data)==null?void 0:E.items)?Z.data.items:[])}catch(Z){const A=Z;if(((L=A==null?void 0:A.response)==null?void 0:L.status)===401){try{window.location.href="/login"}catch{}return}d(((K=(V=A==null?void 0:A.response)==null?void 0:V.data)==null?void 0:K.detail)||((te=(ie=A==null?void 0:A.response)==null?void 0:ie.data)==null?void 0:te.message)||"Failed to load")}finally{h(!1)}}v.useEffect(()=>{T()},[]);async function q(E){var V,K,ie,te,Z;if(E.length===0)return[];console.log(`Uploading ${E.length} files...`);const L=[];for(const A of E)try{console.log("Uploading file:",A.name,A.type,A.size,"bytes");const J=new FormData;J.append("file",A,A.name);const re=await W.post("/admin/products/upload",J);console.log("Upload successful, URL:",re.data.url),L.push(re.data.url)}catch(J){const re=J;if(console.error("Upload error for file:",A.name,re),((V=re==null?void 0:re.response)==null?void 0:V.status)===401){console.error("Upload failed: 401 Unauthorized");try{window.location.href="/login"}catch{}return[]}const di=((ie=(K=re==null?void 0:re.response)==null?void 0:K.data)==null?void 0:ie.detail)||((Z=(te=re==null?void 0:re.response)==null?void 0:te.data)==null?void 0:Z.message)||"Upload failed";throw console.error("Upload failed with message:",di),new Error(`Failed to upload ${A.name}: ${di}`)}return L}function H(E){const L=Array.from(E.target.files||[]);if(L.length>5){d("Maximum 5 images allowed per product");return}s(L);const V=L.map(K=>URL.createObjectURL(K));l(V),L.length>0&&(g(!0),k(0))}function je(E){s(L=>L.filter((V,K)=>K!==E)),l(L=>(URL.revokeObjectURL(L[E]),L.filter((V,K)=>K!==E))),a.length<=1?g(!1):j>=a.length-1&&k(Math.max(0,a.length-2))}function ye(){k(E=>(E+1)%o.length)}function Fe(){k(E=>(E-1+o.length)%o.length)}function Ie(E){U(E),Y({x:0,y:0}),oe(1),F(null),P(!0)}const Cr=v.useCallback((E,L)=>{F(L)},[]);async function Uf(E,L){const V=new Image;V.src=E,await new Promise(te=>{V.onload=te});const K=document.createElement("canvas"),ie=K.getContext("2d");if(!ie)throw new Error("Failed to get canvas context");return K.width=L.width,K.height=L.height,ie.drawImage(V,L.x,L.y,L.width,L.height,0,0,L.width,L.height),new Promise((te,Z)=>{K.toBlob(A=>{A?te(A):Z(new Error("Canvas is empty"))},"image/jpeg",.95)})}async function Wf(){if(ve)try{const E=o[R],L=await Uf(E,ve),K=a[R].name.replace(/\.[^/.]+$/,"_cropped.jpg"),ie=new File([L],K,{type:"image/jpeg"});s(te=>{const Z=[...te];return Z[R]=ie,Z}),l(te=>{const Z=[...te];return URL.revokeObjectURL(Z[R]),Z[R]=URL.createObjectURL(ie),Z}),P(!1)}catch(E){console.error("Error cropping image:",E),d("Failed to crop image")}}async function $f(){var E,L,V,K,ie,te;if(d(null),!G){d("Please fill all fields correctly");return}if(a.length===0&&(!r.images||r.images.length===0)){d("Please add at least 1 image (maximum 5 images)");return}b(!0);try{console.log("Creating product, uploading images first..."),console.log("Selected files:",a.length,"files");const Z=await q(a);console.log("✅ Image upload complete! URLs:",Z);const J=[...r.images||[],...Z].slice(0,5);if(console.log("📸 Final images array:",J),J.length===0){d("At least 1 image is required"),b(!1);return}const re={name:r.name.trim(),slug:r.slug.trim(),description:(E=r.description)==null?void 0:E.trim(),price:r.price,stock:r.stock,images:J,is_published:!0};console.log("📦 Creating product with payload:",JSON.stringify(re,null,2));const Mt={id:`tmp-${Date.now()}`,...re,name:re.name||"",slug:re.slug||"",description:re.description||"",price:re.price||0,stock:re.stock||0,images:re.images||[]};t(ui=>[Mt,...ui]);const di=await W.post("/admin/products",re);console.log("✅ Product created successfully! Response:",di.data),n({name:"",slug:"",price:0,stock:0,images:[],description:""}),s([]),l(ui=>(ui.forEach(Kf=>URL.revokeObjectURL(Kf)),[])),g(!1),await T();try{localStorage.setItem("products:update",String(Date.now()))}catch{}}catch(Z){const A=Z;if(((L=A==null?void 0:A.response)==null?void 0:L.status)===401){try{window.location.href="/login"}catch{}return}const Mt=((K=(V=A==null?void 0:A.response)==null?void 0:V.data)==null?void 0:K.detail)||((te=(ie=A==null?void 0:A.response)==null?void 0:ie.data)==null?void 0:te.message)||(A==null?void 0:A.message)||"Failed to create product";console.error("create product error",A),d(Mt)}finally{b(!1)}}async function Qa(E,L){var V,K,ie,te,Z;d(null);try{t(A=>A.map(J=>J.id===E?{...J,...L}:J)),await W.put(`/admin/products/${E}`,L)}catch(A){const J=A;if(((V=J==null?void 0:J.response)==null?void 0:V.status)===401){try{window.location.href="/login"}catch{}return}d(((ie=(K=J==null?void 0:J.response)==null?void 0:K.data)==null?void 0:ie.detail)||((Z=(te=J==null?void 0:J.response)==null?void 0:te.data)==null?void 0:Z.message)||"Failed to update"),await T()}}async function Hf(E){var L,V,K,ie,te;d(null);try{const Z=e;t(A=>A.filter(J=>J.id!==E)),await W.delete(`/admin/products/${E}`)}catch(Z){const A=Z;if(((L=A==null?void 0:A.response)==null?void 0:L.status)===401){try{window.location.href="/login"}catch{}return}d(((K=(V=A==null?void 0:A.response)==null?void 0:V.data)==null?void 0:K.detail)||((te=(ie=A==null?void 0:A.response)==null?void 0:ie.data)==null?void 0:te.message)||"Failed to delete"),await T()}}function Vf(E){y({...E}),x(!0),d(null)}function ci(){y(null),x(!1),s([]),l(E=>(E.forEach(L=>URL.revokeObjectURL(L)),[])),d(null)}function qf(E){var L;m&&y({...m,images:((L=m.images)==null?void 0:L.filter((V,K)=>K!==E))||[]})}async function Yf(){var E,L,V,K,ie,te;if(!(!m||!m.id)){d(null),b(!0);try{const Z=await q(a),A=[...m.images||[],...Z];if(A.length===0){d("At least 1 image is required"),b(!1);return}if(A.length>5){d("Maximum 5 images allowed"),b(!1);return}const J={name:m.name.trim(),slug:m.slug.trim(),description:(E=m.description)==null?void 0:E.trim(),price:m.price,stock:m.stock,images:A};await W.put(`/admin/products/${m.id}`,J),t(re=>re.map(Mt=>Mt.id===m.id?{...Mt,...J}:Mt)),ci(),await T()}catch(Z){const A=Z;if(((L=A==null?void 0:A.response)==null?void 0:L.status)===401){try{window.location.href="/login"}catch{}return}d(((K=(V=A==null?void 0:A.response)==null?void 0:V.data)==null?void 0:K.detail)||((te=(ie=A==null?void 0:A.response)==null?void 0:ie.data)==null?void 0:te.message)||"Failed to update product")}finally{b(!1)}}}return i.jsxs("div",{className:"products-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("div",{className:"page-header-content",children:[i.jsxs("h1",{className:"page-title",children:[i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:12},children:i.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}),"Product Management"]}),i.jsx("p",{className:"page-subtitle",children:"Manage your product inventory"})]}),i.jsxs("div",{className:"page-header-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:e.length}),i.jsx("div",{className:"stat-label",children:"Total Products"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:e.filter(E=>E.is_published).length}),i.jsx("div",{className:"stat-label",children:"Published"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:e.filter(E=>!E.is_published).length}),i.jsx("div",{className:"stat-label",children:"Draft"})]})]})]}),c&&i.jsxs("div",{className:"alert-error",children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),c]}),i.jsxs("div",{className:"card-modern",children:[i.jsxs("div",{className:"card-header",children:[i.jsxs("h2",{className:"card-title",children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add New Product"]}),i.jsx("p",{className:"card-subtitle",children:"Fill in the details below to add a new product"})]}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{className:"form-label",children:[i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[i.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),i.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Product Name *"]}),i.jsx("input",{className:"form-input",placeholder:"e.g., Premium Headphones",value:r.name,onChange:E=>n({...r,name:E.target.value})}),!D.nameOk&&i.jsx("span",{className:"form-error",children:"Name must be at least 2 characters"})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"})}),"URL Slug *"]}),i.jsx("input",{className:"form-input",placeholder:"e.g., premium-headphones",value:r.slug,onChange:E=>n({...r,slug:E.target.value})}),!D.slugOk&&i.jsx("span",{className:"form-error",children:"Slug must be at least 2 characters"})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{className:"form-label",children:[i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[i.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"})]}),"Price (LKR) *"]}),i.jsx("input",{className:"form-input",placeholder:"e.g., 5000.00",type:"number",inputMode:"decimal",value:Number.isFinite(r.price)?r.price:0,onChange:E=>n({...r,price:C(E.target.value)}),min:0,step:"0.01"}),!D.priceOk&&i.jsx("span",{className:"form-error",children:"Price must be ≥ 0"})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),"Stock Quantity *"]}),i.jsx("input",{className:"form-input",placeholder:"e.g., 100",type:"number",inputMode:"numeric",value:Number.isFinite(r.stock)?r.stock:0,onChange:E=>n({...r,stock:S(E.target.value)}),min:0,step:1}),!D.stockOk&&i.jsx("span",{className:"form-error",children:"Stock must be an integer ≥ 0"})]})]}),i.jsxs("div",{className:"form-group-full",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 7.707A1 1 0 014 7V4zm2 0v3.586l6.293 6.293 3.586-3.586L9.586 4H6z"})}),"Product Description *"]}),i.jsx("textarea",{className:"form-input",placeholder:"Describe your product in detail (minimum 10 characters)...",value:r.description||"",onChange:E=>n({...r,description:E.target.value}),rows:4,style:{resize:"vertical",minHeight:"80px"}}),!D.descriptionOk&&i.jsx("span",{className:"form-error",children:"Description must be at least 10 characters"})]}),i.jsxs("div",{className:"form-group-full",children:[i.jsxs("label",{className:"form-label",children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),"Product Images ",i.jsxs("span",{className:"badge-info",children:[a.length,"/5 selected"]})]}),i.jsxs("div",{className:"upload-zone",children:[i.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:H,id:"file-upload",className:"file-input"}),i.jsxs("label",{htmlFor:"file-upload",className:"upload-button",children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images (1-5)"]}),a.length>0&&i.jsxs("button",{type:"button",onClick:()=>g(!0),className:"preview-button",children:[i.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:[i.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),i.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}),"Preview & Edit (",a.length,")"]})]}),a.length>0&&i.jsx("div",{className:"image-preview-grid",children:o.map((E,L)=>i.jsxs("div",{className:"image-preview-item",children:[i.jsx("img",{src:E,alt:`Preview ${L+1}`}),i.jsx("button",{onClick:()=>Ie(L),className:"btn-crop",type:"button",title:"Crop image",children:"✂️"}),i.jsx("button",{onClick:()=>je(L),className:"btn-remove",type:"button",children:"×"})]},L))}),a.length===0&&i.jsxs("div",{className:"empty-state",children:[i.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.3",children:i.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),i.jsx("p",{children:"No images selected. Please select 1-5 images."})]})]}),i.jsx("button",{onClick:$f,disabled:!G||p||a.length===0,type:"button",className:"btn-primary",children:p?i.jsxs(i.Fragment,{children:[i.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),i.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Adding Product..."]}):i.jsxs(i.Fragment,{children:[i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add Product"]})})]})]}),i.jsx("div",{style:{margin:"8px 0",color:"#8aa"},children:f?"Loading products…":`Total: ${e.length}`}),i.jsxs("div",{className:"card-modern",style:{marginTop:24},children:[i.jsxs("div",{className:"card-header",children:[i.jsxs("h2",{className:"card-title",children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:i.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Products"]}),i.jsxs("span",{className:"badge-count",children:[e.length," total"]})]}),f?i.jsxs("div",{className:"loading-state",children:[i.jsxs("svg",{className:"spinner",width:"48",height:"48",viewBox:"0 0 24 24",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",fill:"none",opacity:"0.25"}),i.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),i.jsx("p",{children:"Loading products..."})]}):e.length===0?i.jsxs("div",{className:"empty-state-large",children:[i.jsx("svg",{width:"64",height:"64",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.2",children:i.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),i.jsx("h3",{children:"No Products Yet"}),i.jsx("p",{children:"Start by adding your first product above"})]}):i.jsxs("div",{className:"products-table",children:[i.jsxs("div",{className:"table-header",children:[i.jsx("div",{className:"th-product",children:"Product"}),i.jsx("div",{className:"th-slug",children:"Slug"}),i.jsx("div",{className:"th-price",children:"Price (LKR)"}),i.jsx("div",{className:"th-stock",children:"Stock"}),i.jsx("div",{className:"th-status",children:"Status"}),i.jsx("div",{className:"th-actions",children:"Actions"})]}),e.map(E=>i.jsxs("div",{className:"table-row",children:[i.jsx("div",{className:"td-product",children:i.jsxs("div",{className:"product-cell",children:[E.images&&E.images.length>0?i.jsxs("div",{className:"product-images",children:[E.images.slice(0,3).map((L,V)=>{var K;return i.jsx("img",{src:L,alt:`${E.name} ${V+1}`,className:"product-thumbnail",title:`Image ${V+1} of ${((K=E.images)==null?void 0:K.length)||0}`},V)}),E.images.length>3&&i.jsxs("span",{className:"image-count",children:["+",E.images.length-3]})]}):i.jsx("div",{className:"no-image",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.3",children:i.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})})}),i.jsx("span",{className:"product-name",children:E.name})]})}),i.jsx("td",{className:"td-slug",children:i.jsx("code",{children:E.slug})}),i.jsx("td",{className:"td-price",children:i.jsx("input",{type:"number",className:"inline-input",defaultValue:E.price,onBlur:L=>{const V=C(L.target.value);E.id&&V!==E.price&&Qa(E.id,{price:V})},min:0,step:"0.01"})}),i.jsx("td",{className:"td-stock",children:i.jsx("input",{type:"number",className:"inline-input",defaultValue:E.stock,onBlur:L=>{const V=S(L.target.value);E.id&&V!==E.stock&&Qa(E.id,{stock:V})},min:0,step:1})}),i.jsx("td",{className:"td-status",children:i.jsx("span",{className:`status-badge ${E.is_published?"published":"draft"}`,children:E.is_published?"Published":"Draft"})}),i.jsx("td",{className:"td-actions",children:i.jsxs("div",{className:"action-buttons",children:[i.jsx("button",{onClick:()=>Vf(E),type:"button",className:"btn-action btn-edit",title:"Edit product",children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),i.jsx("button",{onClick:()=>E.id&&Qa(E.id,{is_published:!E.is_published}),type:"button",className:`btn-action btn-toggle ${E.is_published?"unpublish":"publish"}`,title:E.is_published?"Mark as Draft (unpublish)":"Publish product",children:E.is_published?i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("path",{d:"M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z"}),i.jsx("path",{d:"M12 9a3 3 0 100 6 3 3 0 000-6z"})]}):i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:[i.jsx("path",{d:"M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10z",opacity:"0.4"}),i.jsx("path",{d:"M12 9a3 3 0 100 6 3 3 0 000-6z"})]})}),i.jsx("button",{onClick:()=>E.id&&Hf(E.id),type:"button",className:"btn-action btn-delete",title:"Delete product",children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},E.id||`${E.slug}-${E.name}`))]})]}),w&&m&&i.jsx("div",{className:"modal-overlay",onClick:ci,children:i.jsxs("div",{className:"modal-content-modern",onClick:E=>E.stopPropagation(),children:[i.jsxs("div",{className:"modal-header-modern",children:[i.jsxs("h2",{children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:i.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit Product"]}),i.jsx("button",{onClick:ci,className:"btn-close",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),c&&i.jsxs("div",{className:"alert-error",style:{margin:"16px 0"},children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),c]}),i.jsx("div",{className:"modal-body-modern",children:i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Product Name"}),i.jsx("input",{type:"text",className:"form-input",value:m.name,onChange:E=>y({...m,name:E.target.value}),style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),i.jsxs("div",{children:[i.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Slug"}),i.jsx("input",{type:"text",value:m.slug,onChange:E=>y({...m,slug:E.target.value}),style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[i.jsxs("div",{children:[i.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Price"}),i.jsx("input",{type:"number",value:m.price,onChange:E=>y({...m,price:C(E.target.value)}),min:0,step:"0.01",style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),i.jsxs("div",{children:[i.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Stock"}),i.jsx("input",{type:"number",value:m.stock,onChange:E=>y({...m,stock:S(E.target.value)}),min:0,step:1,style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]})]}),i.jsxs("div",{children:[i.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Description"}),i.jsx("textarea",{value:m.description||"",onChange:E=>y({...m,description:E.target.value}),rows:4,style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef",resize:"vertical",minHeight:"80px"}})]}),i.jsxs("div",{children:[i.jsxs("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:["Current Images (",((Ul=m.images)==null?void 0:Ul.length)||0,"/5)"]}),i.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:m.images&&m.images.length>0?m.images.map((E,L)=>i.jsxs("div",{style:{position:"relative",width:100,height:100},children:[i.jsx("img",{src:E,alt:`Product ${L+1}`,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:8,border:"2px solid #6D74FF"}}),i.jsx("button",{onClick:()=>qf(L),style:{position:"absolute",top:-8,right:-8,width:24,height:24,borderRadius:"50%",background:"#ff5d5d",color:"white",border:"none",cursor:"pointer",fontSize:14,lineHeight:"24px",padding:0},type:"button",children:"×"})]},L)):i.jsx("p",{style:{color:"#b8bbd9"},children:"No images yet"})}),i.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Add New Images (Total must be 1-5)"}),i.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:H,style:{marginBottom:8}}),o.length>0&&i.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:8},children:o.map((E,L)=>i.jsxs("div",{style:{position:"relative",width:80,height:80},children:[i.jsx("img",{src:E,alt:`New ${L+1}`,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:8,border:"2px solid #4ade80"}}),i.jsx("button",{onClick:()=>je(L),style:{position:"absolute",top:-8,right:-8,width:24,height:24,borderRadius:"50%",background:"#ff5d5d",color:"white",border:"none",cursor:"pointer",fontSize:14,lineHeight:"24px",padding:0},type:"button",children:"×"})]},L))})]}),i.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end",marginTop:12},children:[i.jsx("button",{onClick:ci,type:"button",style:{padding:"10px 20px",background:"#2a2b36",color:"#e9e9ef"},children:"Cancel"}),i.jsx("button",{onClick:Yf,disabled:p,type:"button",style:{padding:"10px 20px",background:"#6D74FF",color:"white"},children:p?"Saving...":"Save Changes"})]})]})})]})}),u&&a.length>0&&i.jsx("div",{className:"modal-overlay",onClick:()=>g(!1),children:i.jsxs("div",{className:"preview-modal-content",onClick:E=>E.stopPropagation(),style:{background:"#14151d",borderRadius:12,padding:24,maxWidth:"90vw",maxHeight:"90vh",display:"flex",flexDirection:"column",gap:16,border:"1px solid #2a2b36"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsxs("h2",{style:{margin:0},children:["Image Preview (",j+1,"/",a.length,")"]}),i.jsx("button",{onClick:()=>g(!1),style:{background:"transparent",border:"none",color:"#e9e9ef",fontSize:24,cursor:"pointer",padding:0,width:32,height:32},children:"×"})]}),i.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0f",borderRadius:8,padding:16,width:"100%",height:500,position:"relative",overflow:"hidden"},children:o[j]&&i.jsx("img",{src:o[j],alt:`Preview ${j+1}`,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:4}})}),i.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:[i.jsx("button",{onClick:Fe,disabled:a.length<=1,style:{padding:"8px 16px",background:a.length>1?"#2a2b36":"#1a1b26",color:a.length>1?"#e9e9ef":"#666",border:"none",borderRadius:4,cursor:a.length>1?"pointer":"not-allowed"},children:"← Previous"}),i.jsx("button",{onClick:()=>Ie(j),style:{padding:"8px 16px",background:"#6D74FF",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"✂️ Crop Image"}),i.jsx("button",{onClick:()=>je(j),style:{padding:"8px 16px",background:"#5b1a1a",color:"#ffd1d1",border:"none",borderRadius:4,cursor:"pointer"},children:"🗑️ Remove"}),i.jsx("button",{onClick:ye,disabled:a.length<=1,style:{padding:"8px 16px",background:a.length>1?"#2a2b36":"#1a1b26",color:a.length>1?"#e9e9ef":"#666",border:"none",borderRadius:4,cursor:a.length>1?"pointer":"not-allowed"},children:"Next →"})]}),a.length>1&&i.jsx("div",{style:{display:"flex",gap:8,overflowX:"auto",padding:"8px 0",borderTop:"1px solid #2a2b36",paddingTop:16},children:o.map((E,L)=>i.jsxs("div",{style:{position:"relative",flexShrink:0},children:[i.jsx("img",{src:E,alt:`Thumbnail ${L+1}`,onClick:()=>k(L),style:{width:80,height:80,objectFit:"cover",borderRadius:4,cursor:"pointer",border:L===j?"3px solid #6D74FF":"3px solid transparent",opacity:L===j?1:.6,transition:"all 0.2s",display:"block"}}),i.jsx("button",{onClick:V=>{V.stopPropagation(),Ie(L)},style:{position:"absolute",bottom:4,right:4,background:"rgba(109, 116, 255, 0.9)",color:"white",border:"none",borderRadius:3,padding:"2px 6px",fontSize:11,cursor:"pointer",fontWeight:"bold"},title:"Crop this image",children:"✂️"})]},L))}),i.jsx("div",{style:{textAlign:"center",color:"#999",fontSize:14},children:"Navigate with arrow buttons or click thumbnails • Remove unwanted images • Close when done"})]})}),_&&o[R]&&i.jsx("div",{className:"modal-overlay",onClick:()=>P(!1),children:i.jsxs("div",{className:"cropper-modal-content",onClick:E=>E.stopPropagation(),style:{background:"#14151d",borderRadius:12,padding:24,maxWidth:"800px",width:"90%",display:"flex",flexDirection:"column",gap:16,border:"1px solid #2a2b36"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsxs("h2",{style:{margin:0},children:["✂️ Crop Image (",R+1,"/",a.length,")"]}),i.jsx("button",{onClick:()=>P(!1),style:{background:"transparent",border:"none",color:"#e9e9ef",fontSize:24,cursor:"pointer",padding:0,width:32,height:32},children:"×"})]}),i.jsx("div",{style:{position:"relative",width:"100%",height:400,background:"#0a0a0f",borderRadius:8,overflow:"hidden"},children:i.jsx($1,{image:o[R],crop:O,zoom:B,aspect:1,onCropChange:Y,onZoomChange:oe,onCropComplete:Cr})}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("label",{style:{color:"#e9e9ef",minWidth:60},children:"Zoom:"}),i.jsx("input",{type:"range",min:1,max:3,step:.1,value:B,onChange:E=>oe(Number(E.target.value)),style:{flex:1}}),i.jsxs("span",{style:{color:"#999",minWidth:40},children:[B.toFixed(1),"x"]})]}),i.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[i.jsx("button",{onClick:()=>P(!1),style:{padding:"10px 20px",background:"#2a2b36",color:"#e9e9ef",border:"none",borderRadius:4,cursor:"pointer"},children:"Cancel"}),i.jsx("button",{onClick:Wf,style:{padding:"10px 20px",background:"#6D74FF",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"✓ Apply Crop"})]}),i.jsx("div",{style:{textAlign:"center",color:"#999",fontSize:14},children:"Drag to position • Scroll or use slider to zoom • Square crop (1:1 ratio)"})]})}),i.jsx("style",{children:`
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
          align-items: center;
          gap: 12px;
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
      `})]})}function V1(){const[e,t]=v.useState([]),[r,n]=v.useState(null),[a,s]=v.useState(!1),[o,l]=v.useState(!1),c=v.useMemo(()=>e.map(p=>({...p,is_active:p.is_active??!0,is_staff:p.is_staff??!1,is_superuser:p.is_superuser??!1})),[e]);async function d(){var p,b,m,y,w,x;s(!0),n(null);try{const u=await W.get("/admin/users"),g=Array.isArray((p=u.data)==null?void 0:p.items)?u.data.items:[];t(g)}catch(u){const g=u;if(((b=g==null?void 0:g.response)==null?void 0:b.status)===401){try{window.location.href="/login"}catch{}return}n(((y=(m=g==null?void 0:g.response)==null?void 0:m.data)==null?void 0:y.detail)||((x=(w=g==null?void 0:g.response)==null?void 0:w.data)==null?void 0:x.message)||"Failed to load")}finally{s(!1)}}v.useEffect(()=>{d()},[]);async function f(p,b){var m,y,w,x,u;l(!0);try{await W.put(`/admin/users/${p}/block`,null,{params:{block:b}}),await d()}catch(g){const j=g;if(((m=j==null?void 0:j.response)==null?void 0:m.status)===401){try{window.location.href="/login"}catch{}return}n(((w=(y=j==null?void 0:j.response)==null?void 0:y.data)==null?void 0:w.detail)||((u=(x=j==null?void 0:j.response)==null?void 0:x.data)==null?void 0:u.message)||"Failed to update user")}finally{l(!1)}}async function h(p){var b,m,y,w,x;l(!0);try{await W.delete(`/admin/users/${p}`),await d()}catch(u){const g=u;if(((b=g==null?void 0:g.response)==null?void 0:b.status)===401){try{window.location.href="/login"}catch{}return}n(((y=(m=g==null?void 0:g.response)==null?void 0:m.data)==null?void 0:y.detail)||((x=(w=g==null?void 0:g.response)==null?void 0:w.data)==null?void 0:x.message)||"Failed to delete user")}finally{l(!1)}}return i.jsxs("div",{className:"users-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("div",{className:"page-header-content",children:[i.jsxs("h1",{className:"page-title",children:[i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:12},children:i.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),"User Management"]}),i.jsx("p",{className:"page-subtitle",children:"Manage user accounts and permissions"})]}),i.jsxs("div",{className:"page-header-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:c.length}),i.jsx("div",{className:"stat-label",children:"Total Users"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:c.filter(p=>p.is_active).length}),i.jsx("div",{className:"stat-label",children:"Active"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-value",children:c.filter(p=>p.is_superuser).length}),i.jsx("div",{className:"stat-label",children:"Admins"})]})]})]}),r&&i.jsxs("div",{className:"alert-error",children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),r]}),i.jsxs("div",{className:"card-modern",children:[i.jsxs("div",{className:"card-header",children:[i.jsxs("h2",{className:"card-title",children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:i.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Users"]}),i.jsxs("span",{className:"badge-count",children:[c.length," total"]})]}),a?i.jsxs("div",{className:"loading-state",children:[i.jsxs("svg",{className:"spinner",width:"48",height:"48",viewBox:"0 0 24 24",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",fill:"none",opacity:"0.25"}),i.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),i.jsx("p",{children:"Loading users..."})]}):c.length===0?i.jsxs("div",{className:"empty-state-large",children:[i.jsx("svg",{width:"64",height:"64",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.2",children:i.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),i.jsx("h3",{children:"No Users Yet"}),i.jsx("p",{children:"No registered users in the system"})]}):i.jsxs("div",{className:"users-table",children:[i.jsxs("div",{className:"table-header-users",children:[i.jsx("div",{className:"th-email",children:"Email"}),i.jsx("div",{className:"th-status",children:"Active"}),i.jsx("div",{className:"th-role",children:"Staff"}),i.jsx("div",{className:"th-role",children:"Superuser"}),i.jsx("div",{className:"th-actions-users",children:"Actions"})]}),c.map(p=>i.jsxs("div",{className:"table-row-users",children:[i.jsx("div",{className:"td-email",children:i.jsxs("div",{className:"user-cell",children:[i.jsx("div",{className:"user-avatar",children:p.avatar_url?i.jsx("img",{src:p.avatar_url,alt:""}):p.email.charAt(0).toUpperCase()}),i.jsxs("div",{className:"user-info",children:[i.jsx("div",{className:"user-email",children:p.email}),i.jsxs("div",{className:"user-id",children:["ID: ",p.id]})]})]})}),i.jsx("div",{className:"td-status",children:i.jsx("span",{className:`status-pill ${p.is_active?"active":"inactive"}`,children:p.is_active?i.jsxs(i.Fragment,{children:[i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Active"]}):i.jsxs(i.Fragment,{children:[i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),"Blocked"]})})}),i.jsx("div",{className:"td-role",children:i.jsx("span",{className:`role-badge ${p.is_staff?"yes":"no"}`,children:p.is_staff?"Yes":"No"})}),i.jsx("div",{className:"td-role",children:i.jsx("span",{className:`role-badge ${p.is_superuser?"yes":"no"}`,children:p.is_superuser?"Yes":"No"})}),i.jsx("div",{className:"td-actions-users",children:i.jsxs("div",{className:"action-buttons",children:[i.jsx("button",{onClick:()=>f(p.id,!p.is_active),disabled:o,type:"button",className:`btn-action ${p.is_active?"btn-block":"btn-unblock"}`,title:p.is_active?"Block user":"Unblock user",children:p.is_active?i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}):i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),i.jsx("button",{onClick:()=>h(p.id),disabled:o,type:"button",className:"btn-action btn-delete",title:"Delete user",children:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},p.id))]})]}),i.jsx("style",{children:`
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
      `})]})}function q1({children:e}){const{user:t,loading:r}=mt(),n=st();return r?i.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[i.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),i.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):t?t.is_staff||t.is_superuser?e:i.jsx(jo,{to:"/",replace:!0}):i.jsx(jo,{to:"/login",state:{from:n.pathname},replace:!0})}function It({children:e}){const{user:t,accessToken:r,loading:n}=mt(),a=st();return n?i.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[i.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),i.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):!t||!r?i.jsx(jo,{to:"/login",state:{from:a},replace:!0}):i.jsx(i.Fragment,{children:e})}function Y1(){var s;const{pathname:e}=st(),{user:t,logout:r}=mt(),n=Nt(),a=()=>{r(),n("/login")};return i.jsxs("div",{className:"admin-container",children:[i.jsxs("header",{className:"admin-header",children:[i.jsx("div",{className:"admin-header-left",children:i.jsxs("div",{className:"admin-logo",children:[i.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[i.jsx("rect",{width:"32",height:"32",rx:"8",fill:"url(#grad)"}),i.jsx("path",{d:"M16 8L24 14L16 20L8 14L16 8Z",fill:"white",fillOpacity:"0.9"}),i.jsx("path",{d:"M16 20L24 26L16 32L8 26L16 20Z",fill:"white",fillOpacity:"0.6"}),i.jsx("defs",{children:i.jsxs("linearGradient",{id:"grad",x1:"0",y1:"0",x2:"32",y2:"32",children:[i.jsx("stop",{offset:"0%",stopColor:"#667eea"}),i.jsx("stop",{offset:"100%",stopColor:"#764ba2"})]})})]}),i.jsx("span",{className:"admin-brand",children:"Admin Panel"})]})}),i.jsxs("div",{className:"admin-header-right",children:[i.jsx("button",{className:"admin-btn-icon",title:"Notifications",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})})}),i.jsxs("div",{className:"admin-user-menu",children:[i.jsxs("div",{className:"admin-user-info",children:[i.jsx("div",{className:"admin-avatar",children:(s=t==null?void 0:t.email)==null?void 0:s.charAt(0).toUpperCase()}),i.jsxs("div",{className:"admin-user-details",children:[i.jsx("div",{className:"admin-user-name",children:(t==null?void 0:t.full_name)||(t==null?void 0:t.email)}),i.jsx("div",{className:"admin-user-role",children:t!=null&&t.is_superuser?"Super Admin":"Admin"})]})]}),i.jsxs("button",{className:"admin-btn-logout",onClick:a,children:[i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:i.jsx("path",{d:"M3 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H3zm7.5 10.5L7 8l3.5-3.5.707.707L8.914 7.5H14v1H8.914l2.293 2.293-.707.707z"})}),"Logout"]})]})]})]}),i.jsxs("div",{className:"admin-layout",children:[i.jsx("aside",{className:"admin-sidebar",children:i.jsxs("nav",{className:"admin-nav",children:[i.jsxs(I,{to:"/admin",className:`admin-nav-item ${e==="/admin"?"active":""}`,children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})}),i.jsx("span",{children:"Dashboard"})]}),i.jsxs(I,{to:"/admin/products",className:`admin-nav-item ${e.startsWith("/admin/products")?"active":""}`,children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}),i.jsx("span",{children:"Products"})]}),i.jsxs(I,{to:"/admin/users",className:`admin-nav-item ${e.startsWith("/admin/users")?"active":""}`,children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),i.jsx("span",{children:"Users"})]}),i.jsxs(I,{to:"/admin/orders",className:`admin-nav-item ${e.startsWith("/admin/orders")?"active":""}`,children:[i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[i.jsx("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),i.jsx("path",{fillRule:"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"})]}),i.jsx("span",{children:"Orders"})]}),i.jsx("div",{className:"admin-nav-divider"}),i.jsxs(I,{to:"/",className:"admin-nav-item",children:[i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"})}),i.jsx("span",{children:"Back to Site"})]})]})}),i.jsx("main",{className:"admin-main",children:i.jsx(sf,{})})]}),i.jsx("style",{children:`
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
      `})]})}function K1(){const[e,t]=v.useState([]),[r,n]=v.useState(!1),[a,s]=v.useState(null),[o,l]=E0(),[c,d]=v.useState(o.get("q")||""),[f,h]=v.useState(o.get("category")||"All"),[p,b]=v.useState(o.get("min")||""),[m,y]=v.useState(o.get("max")||""),[w,x]=v.useState(o.get("sort")||"newest"),[u,g]=v.useState(Number(o.get("page")||1)),[j,k]=v.useState(12),{add:_}=li();v.useEffect(()=>{let F=!1;async function D(){var C;n(!0),s(null);try{const S=await ce.get("/api/v1/products");if(F)return;const T=(C=S.data)==null?void 0:C.items;T&&T.length?t(T):t([])}catch{F||t([])}finally{F||n(!1)}}D();function G(C){C.key==="products:update"&&D()}return window.addEventListener("storage",G),()=>{F=!0,window.removeEventListener("storage",G)}},[]),v.useEffect(()=>{const F=new URLSearchParams;c&&F.set("q",c),f&&f!=="All"&&F.set("category",f),p&&F.set("min",p),m&&F.set("max",m),w&&w!=="newest"&&F.set("sort",w),u!==1&&F.set("page",String(u)),l(F)},[c,f,p,m,w,u,l]);const P=v.useMemo(()=>{const F=new Set(["All"]);return e.forEach(D=>F.add(D.category||"Other")),Array.from(F)},[e]),R=v.useMemo(()=>{let F=[...e];if(c.trim()){const C=c.toLowerCase();F=F.filter(S=>S.name.toLowerCase().includes(C)||S.slug.toLowerCase().includes(C)||(S.category||"").toLowerCase().includes(C))}f!=="All"&&(F=F.filter(C=>(C.category||"Other")===f));const D=Number(p),G=Number(m);switch(!Number.isNaN(D)&&p!==""&&(F=F.filter(C=>C.price>=D)),!Number.isNaN(G)&&m!==""&&(F=F.filter(C=>C.price<=G)),w){case"price-asc":F.sort((C,S)=>C.price-S.price);break;case"price-desc":F.sort((C,S)=>S.price-C.price);break;case"name-asc":F.sort((C,S)=>C.name.localeCompare(S.name));break;case"name-desc":F.sort((C,S)=>S.name.localeCompare(C.name));break;default:F.sort((C,S)=>{const T=C.createdAt?Date.parse(C.createdAt):0;return(S.createdAt?Date.parse(S.createdAt):0)-T})}return F},[e,c,f,p,m,w]),U=R.length,O=Math.max(1,Math.ceil(U/j)),Y=Math.min(u,O),B=(Y-1)*j,oe=R.slice(B,B+j);v.useEffect(()=>{u>O&&g(O)},[O,u]);const ve=()=>{d(""),h("All"),b(""),y(""),x("newest"),g(1)};return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"shop-hero",children:i.jsx("div",{className:"container hero-inner",children:i.jsxs("div",{children:[i.jsx("p",{className:"kicker",children:"Shop"}),i.jsx("h1",{className:"headline",children:"Find the next daily favorite"}),i.jsx("p",{className:"subhead",children:"Browse curated essentials across apparel, accessories, and more."})]})})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"toolbar",children:[i.jsxs("div",{className:"toolbar-left",children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"search",children:"Search"}),i.jsx("input",{id:"search",type:"search",placeholder:"Search products",value:c,onChange:F=>{d(F.target.value),g(1)}})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"category",children:"Category"}),i.jsx("select",{id:"category",value:f,onChange:F=>{h(F.target.value),g(1)},children:P.map(F=>i.jsx("option",{value:F,children:F},F))})]}),i.jsxs("div",{className:"field price",children:[i.jsx("label",{children:"Price"}),i.jsxs("div",{className:"price-row",children:[i.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Min",value:p,onChange:F=>{b(F.target.value),g(1)}}),i.jsx("span",{children:"—"}),i.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Max",value:m,onChange:F=>{y(F.target.value),g(1)}})]})]})]}),i.jsxs("div",{className:"toolbar-right",children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"sort",children:"Sort"}),i.jsxs("select",{id:"sort",value:w,onChange:F=>x(F.target.value),children:[i.jsx("option",{value:"newest",children:"Newest"}),i.jsx("option",{value:"price-asc",children:"Price: Low to High"}),i.jsx("option",{value:"price-desc",children:"Price: High to Low"}),i.jsx("option",{value:"name-asc",children:"Name: A–Z"}),i.jsx("option",{value:"name-desc",children:"Name: Z–A"})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"perPage",children:"Per page"}),i.jsxs("select",{id:"perPage",value:j,onChange:F=>{k(Number(F.target.value)),g(1)},children:[i.jsx("option",{value:12,children:"12"}),i.jsx("option",{value:24,children:"24"}),i.jsx("option",{value:48,children:"48"})]})]}),i.jsx("button",{className:"btn btn-ghost",onClick:ve,children:"Clear"})]})]}),r&&i.jsx("div",{className:"notice",children:"Loading products…"}),a&&i.jsx("div",{className:"error",children:"Could not load products. Showing demo catalog."}),!r&&oe.length===0&&i.jsx("div",{className:"notice",children:"No products match the current filters."}),i.jsx("div",{className:"grid",children:oe.map(F=>{var D;return i.jsxs("div",{className:"card",children:[i.jsx(I,{to:`/product/${F.slug}`,className:"card-img",children:i.jsx("img",{src:((D=F.images)==null?void 0:D[0])||"https://via.placeholder.com/600x400",alt:F.name,loading:"lazy"})}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"meta",children:[i.jsx("span",{className:"tag",children:F.category||"General"}),i.jsxs("span",{className:"price",children:["LKR ",Number(F.price).toFixed(2)]})]}),i.jsx(I,{to:`/product/${F.slug}`,className:"card-title",children:F.name}),i.jsxs("div",{className:"card-actions",children:[i.jsx("button",{className:"btn btn-primary",onClick:G=>{var T;const C=G.currentTarget.closest(".card"),S=C==null?void 0:C.querySelector("img");S&&To(S),_({productId:F.id,slug:F.slug,name:F.name,price:F.price,image:(T=F.images)==null?void 0:T[0]})},children:"Add to Cart"}),i.jsx(I,{to:`/product/${F.slug}`,className:"btn btn-ghost",children:"Details"})]})]})]},F.id)})}),i.jsxs("div",{className:"pagination",children:[i.jsx("button",{className:"btn btn-ghost",disabled:Y<=1,onClick:()=>g(F=>Math.max(1,F-1)),children:"Prev"}),i.jsxs("span",{className:"page-info",children:["Page ",Y," of ",O," • ",U," items"]}),i.jsx("button",{className:"btn btn-ghost",disabled:Y>=O,onClick:()=>g(F=>Math.min(O,F+1)),children:"Next"})]})]})}),i.jsx("style",{children:`
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
      `})]})}function Q1(){const{user:e}=mt();return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"about-hero",children:i.jsx("div",{className:"container hero-inner",children:i.jsxs("div",{children:[i.jsx("p",{className:"kicker",children:"About Us"}),i.jsx("h1",{className:"headline",children:"Design-led essentials, made to last"}),i.jsx("p",{className:"subhead",children:"Everyday apparel and accessories built with comfort, durability, and timeless aesthetics at the core."}),e?i.jsxs("div",{className:"hero-ctas",children:[i.jsx(I,{to:"/contact",className:"btn btn-primary",children:"Contact Us"}),i.jsx(I,{to:"/shop",className:"btn btn-ghost",children:"Browse Collections"})]}):i.jsxs("div",{className:"hero-ctas",children:[i.jsx(I,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),i.jsx(I,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]})})}),!e&&i.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:i.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[i.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to Learn More?"}),i.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to see our full story, team, values, and start exploring our collections!"}),i.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[i.jsx(I,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),i.jsx(I,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),e&&i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"section alt",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Our Story"}),i.jsx("p",{className:"lead",children:"Started as a small studio with a big belief: daily wear should feel great, look refined, and hold up over time. We partner with trusted makers and keep batches small, so attention to detail never slips."}),i.jsxs("div",{className:"timeline",children:[i.jsx("div",{className:"tl-item",children:i.jsxs("div",{className:"tl-content",children:[i.jsx("h3",{children:"Where it began"}),i.jsx("p",{children:"Sketches, fabric swatches, and countless prototypes—our journey started with a focus on essentials."})]})}),i.jsx("div",{className:"tl-item",children:i.jsxs("div",{className:"tl-content",children:[i.jsx("h3",{children:"Finding our partners"}),i.jsx("p",{children:"We sourced mills and workshops that matched our standards for consistency and fair practices."})]})}),i.jsx("div",{className:"tl-item",children:i.jsxs("div",{className:"tl-content",children:[i.jsx("h3",{children:"Refining the craft"}),i.jsx("p",{children:"With customer feedback, we tuned fits, finishes, and care guides to make pieces last longer."})]})})]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Mission & Values"}),i.jsxs("div",{className:"grid-3",children:[i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Mission"}),i.jsx("p",{children:"Make everyday dressing simpler through reliable, comfortable essentials that blend form and function."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Quality"}),i.jsx("p",{children:"From reinforced seams to color-fast dyes, we design beyond the first wear and wash."})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{children:"Trust"}),i.jsx("p",{children:"Clear specs, honest descriptions, and responsive support keep decisions easy and informed."})]})]})]})}),i.jsx("section",{className:"section alt",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Sustainability & Craft"}),i.jsxs("div",{className:"grid-2",children:[i.jsxs("div",{className:"info",children:[i.jsx("h3",{children:"Responsible choices"}),i.jsx("p",{children:"We prioritize durable textiles, mindful packaging, and small-batch production to reduce waste while keeping quality high."}),i.jsxs("ul",{className:"bullets",children:[i.jsx("li",{children:"Material-first selection with long-life wear in mind."}),i.jsx("li",{children:"Repair-friendly construction and care guides."}),i.jsx("li",{children:"Continuous iteration based on real-world use."})]})]}),i.jsxs("div",{className:"info",children:[i.jsx("h3",{children:"Attention to detail"}),i.jsx("p",{children:"Fit, finish, and feel are tested across sizes and seasons, ensuring each piece earns a place in daily rotation."}),i.jsxs("ul",{className:"bullets",children:[i.jsx("li",{children:"Reinforced stress points and reliable hardware."}),i.jsx("li",{children:"Neutral palettes for effortless pairing."}),i.jsx("li",{children:"Consistent measurements for repeat buys."})]})]})]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Customer Promise"}),i.jsxs("div",{className:"grid-3",children:[i.jsxs("div",{className:"mini-feature",children:[i.jsx("h3",{children:"30-Day Returns"}),i.jsx("p",{children:"Hassle-free returns on unused items in original condition within 30 days."})]}),i.jsxs("div",{className:"mini-feature",children:[i.jsx("h3",{children:"Fast Support"}),i.jsx("p",{children:"Friendly assistance with sizing, care, and orders via chat or email."})]}),i.jsxs("div",{className:"mini-feature",children:[i.jsx("h3",{children:"Honest Pricing"}),i.jsx("p",{children:"Fair prices without inflated markups—value built into each piece."})]})]})]})}),i.jsx("section",{className:"section alt",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Who We Are"}),i.jsxs("div",{className:"grid-3",children:[i.jsxs("div",{className:"person",children:[i.jsx("div",{className:"avatar"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Design Lead"}),i.jsx("p",{children:"Focuses on silhouettes, fit blocks, and fabric hand-feel for comfort and longevity."})]})]}),i.jsxs("div",{className:"person",children:[i.jsx("div",{className:"avatar"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Production"}),i.jsx("p",{children:"Oversees sourcing, QC, and small-batch timelines to maintain consistency."})]})]}),i.jsxs("div",{className:"person",children:[i.jsx("div",{className:"avatar"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Care & Support"}),i.jsx("p",{children:"Helps with sizing, exchanges, and care tips to keep favorites in rotation."})]})]})]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"FAQs"}),i.jsxs("div",{className:"faq",children:[i.jsxs("details",{children:[i.jsx("summary",{children:"What sizes do you carry?"}),i.jsx("p",{children:"Core styles generally run XS–XXL. Fit notes and measurements are listed on product pages."})]}),i.jsxs("details",{children:[i.jsx("summary",{children:"How do returns work?"}),i.jsx("p",{children:"Submit a request within 30 days for unused items. We’ll guide through label creation and refund steps."})]}),i.jsxs("details",{children:[i.jsx("summary",{children:"Do you ship internationally?"}),i.jsx("p",{children:"Yes, with tracked delivery options at checkout. Timelines vary by destination."})]})]})]})}),i.jsx("section",{className:"section alt",children:i.jsxs("div",{className:"container contact-cta",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"section-title",children:"Get in touch"}),i.jsx("p",{className:"lead",children:"Questions about sizing, care, or orders? The team is ready to help."})]}),i.jsxs("div",{className:"cta-buttons",children:[i.jsx(I,{to:"/contact",className:"btn btn-primary",children:"Contact Support"}),i.jsx(I,{to:"/shop",className:"btn btn-ghost",children:"Explore the Shop"})]})]})})]}),i.jsx("style",{children:`
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
      `})]})}const X1="mgvnjvjw",G1=()=>`https://formspree.io/f/${X1}`;function Z1(){const[e,t]=v.useState({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"}),[r,n]=v.useState(!1),[a,s]=v.useState(null),[o,l]=v.useState(null),c=v.useRef(null);v.useEffect(()=>{a&&c.current&&c.current.focus(),o&&c.current&&c.current.focus()},[a,o]);const d=p=>{const{name:b,value:m}=p.target;t(y=>({...y,[b]:m}))},f=async p=>{var b;p.preventDefault(),n(!0),s(null),l(null);try{const m=G1();if(!m)throw new Error("Contact form is not configured. Missing VITE_FORMSPREE_FORM_ID.");const y={name:e.name,email:e.email,_replyto:e.email,subject:e.subject,message:e.message,order_id:e.orderId,preferred_channel:e.channel,_subject:`[Store Contact] ${e.subject}`},w=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(y)});if(!w.ok){let x="Could not send message. Please try again.";try{const u=await w.json();(b=u==null?void 0:u.errors)!=null&&b.length&&(x=u.errors.map(g=>g.message).join(`
`))}catch{}throw new Error(x)}s("Message sent! We'll reply to your email within 1–2 business days."),t({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"})}catch(m){const y=m instanceof Error?m.message:"Could not send message. Please try again or use another contact method.";l(y)}finally{n(!1)}},h=`https://wa.me/94768976222?text=${encodeURIComponent(`Hello, I need help with my order.
Name: ${e.name}
Email: ${e.email}
Order ID: ${e.orderId||"-"}
Subject: ${e.subject}
Message: ${e.message}`)}`;return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"contact-hero",children:i.jsx("div",{className:"container hero-inner",children:i.jsxs("div",{children:[i.jsx("p",{className:"kicker",children:"Contact"}),i.jsx("h1",{className:"headline",children:"How can we help?"}),i.jsx("p",{className:"subhead",children:"Questions about orders, sizing, delivery, or returns—support is here."})]})})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container contact-grid",children:[i.jsxs("div",{className:"panel",children:[i.jsx("h2",{className:"section-title",children:"Send a message"}),i.jsxs("div",{ref:c,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[a&&i.jsx("div",{className:"alert success",children:a}),o&&i.jsx("div",{className:"alert error",children:o})]}),i.jsxs("form",{className:"form",onSubmit:f,noValidate:!0,children:[i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"name",children:["Name",i.jsx("span",{"aria-hidden":"true",children:" *"})]}),i.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e.name,onChange:d,autoComplete:"name"})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"email",children:["Email",i.jsx("span",{"aria-hidden":"true",children:" *"})]}),i.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:d,autoComplete:"email"})]})]}),i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"orderId",children:"Order ID"}),i.jsx("input",{id:"orderId",name:"orderId",type:"text",value:e.orderId,onChange:d,placeholder:"Optional, helps us locate your order"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"channel",children:"Preferred channel"}),i.jsxs("select",{id:"channel",name:"channel",value:e.channel,onChange:d,children:[i.jsx("option",{value:"email",children:"Email"}),i.jsx("option",{value:"phone",children:"Phone"}),i.jsx("option",{value:"whatsapp",children:"WhatsApp"})]})]})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"subject",children:["Subject",i.jsx("span",{"aria-hidden":"true",children:" *"})]}),i.jsx("input",{id:"subject",name:"subject",type:"text",required:!0,value:e.subject,onChange:d})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"message",children:["Message",i.jsx("span",{"aria-hidden":"true",children:" *"})]}),i.jsx("textarea",{id:"message",name:"message",required:!0,rows:6,value:e.message,onChange:d})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"btn btn-primary",type:"submit",disabled:r,children:r?"Sending…":"Send message"}),i.jsx("a",{className:"btn btn-ghost",href:h,target:"_blank",rel:"noopener noreferrer",children:"Message on WhatsApp"})]}),i.jsx("p",{className:"tiny muted",children:"Fields marked with * are required."})]})]}),i.jsxs("aside",{className:"panel",children:[i.jsx("h2",{className:"section-title",children:"Contact details"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),i.jsx("li",{children:"Phone: +94 76 89 76 222"}),i.jsx("li",{children:"WhatsApp: +94 76 897 6222"}),i.jsx("li",{children:"Address: 252/1A Mannar Road , Puttalam"}),i.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00 (UTC+5:30)"}),i.jsx("li",{children:"Response time: within 1–2 business days"})]}),i.jsx("div",{className:"divider"}),i.jsx("h3",{children:"Quick help"}),i.jsxs("ul",{className:"list",children:[i.jsx("li",{children:i.jsx("a",{href:"/faq",children:"FAQ"})}),i.jsx("li",{children:i.jsx("a",{href:"/shipping-returns",children:"Shipping & Returns"})}),i.jsx("li",{children:i.jsx("a",{href:"/orders",children:"Track orders"})}),i.jsx("li",{children:i.jsx("a",{href:"/care",children:"Care guides"})})]}),i.jsx("div",{className:"mapbox",children:i.jsx("div",{className:"map-fallback",children:"Map placeholder"})})]})]})}),i.jsx("style",{children:`
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
      `})]})}function J1(){const[e,t]=v.useState([]),r=v.useRef({});return v.useEffect(()=>{function n(a){var d,f;const s=a,o=crypto.randomUUID(),l=Date.now()+(((d=s.detail)==null?void 0:d.duration)??2200);t(h=>{var p,b;return[...h,{id:o,message:((p=s.detail)==null?void 0:p.message)??"",type:((b=s.detail)==null?void 0:b.type)??"success",ttl:l}]});const c=((f=s.detail)==null?void 0:f.duration)??2200;r.current[o]=window.setTimeout(()=>{t(h=>h.filter(p=>p.id!==o)),delete r.current[o]},c)}return window.addEventListener("app:toast",n),()=>{window.removeEventListener("app:toast",n),Object.values(r.current).forEach(a=>window.clearTimeout(a))}},[]),i.jsxs("div",{style:{position:"fixed",bottom:20,right:20,zIndex:2e3,display:"flex",flexDirection:"column",gap:8},"aria-live":"polite","aria-atomic":"true",children:[e.map(n=>i.jsx("div",{role:"status",style:{minWidth:220,maxWidth:360,padding:"10px 14px",borderRadius:10,color:"white",background:n.type==="success"?"linear-gradient(180deg, #22c55e, #16a34a)":n.type==="error"?"linear-gradient(180deg, #ef4444, #b91c1c)":"linear-gradient(180deg, #3b82f6, #1d4ed8)",boxShadow:"0 10px 24px rgba(0,0,0,0.35)",transform:"translateY(0)",transition:"opacity .2s, transform .2s",fontWeight:600},children:n.message},n.id)),i.jsx("style",{children:`
        @media (max-width: 600px) {
          div[aria-live='polite']{ left: 12px; right: 12px; top: auto; bottom: 20px; align-items: center; }
        }
      `})]})}function ev(){const{user:e,updateUser:t}=mt(),[r,n]=v.useState(!0),[a,s]=v.useState(!1),[o,l]=v.useState(!1),[c,d]=v.useState(""),[f,h]=v.useState(""),[p,b]=v.useState(""),[m,y]=v.useState(""),[w,x]=v.useState(void 0),[u,g]=v.useState(null),[j,k]=v.useState(null),[_,P]=v.useState(""),[R,U]=v.useState(""),[O,Y]=v.useState(""),B=v.useRef(null);v.useEffect(()=>{(u||j)&&B.current&&B.current.focus()},[u,j]),v.useEffect(()=>{async function D(){try{n(!0);const C=(await W.get("/auth/me")).data||{};d(C.full_name||""),h(C.email||""),b(C.phone||""),y(C.address||""),x(C.avatar_url||(e==null?void 0:e.avatar_url)||void 0)}catch{d((e==null?void 0:e.full_name)||""),h((e==null?void 0:e.email)||""),b((e==null?void 0:e.phone)||""),y((e==null?void 0:e.address)||""),x((e==null?void 0:e.avatar_url)||void 0)}finally{n(!1)}}D()},[]);async function oe(D){var G,C;if(D.preventDefault(),k(null),g(null),!f){k("Email is required");return}try{s(!0);const T=(await W.put("/auth/me",{email:f,full_name:c,phone:p,address:m})).data;t({email:T.email,full_name:T.full_name,phone:T.phone,address:T.address}),g("Profile updated successfully"),yt("Profile updated","success")}catch(S){const T=((C=(G=S==null?void 0:S.response)==null?void 0:G.data)==null?void 0:C.detail)||"Failed to update profile";k(String(T)),yt("Could not update profile","error")}finally{s(!1)}}async function ve(D){var G,C;if(D.preventDefault(),k(null),g(null),!_||!R||!O){k("Please fill all password fields");return}if(R.length<8){k("New password must be at least 8 characters");return}if(R!==O){k("Passwords do not match");return}try{l(!0),await W.post("/auth/change-password",{old_password:_,new_password:R}),g("Password changed successfully"),P(""),U(""),Y(""),yt("Password updated","success")}catch(S){const T=((C=(G=S==null?void 0:S.response)==null?void 0:G.data)==null?void 0:C.detail)||"Failed to change password";k(String(T)),yt("Could not change password","error")}finally{l(!1)}}async function F(D){var S,T;const G=(S=D.target.files)==null?void 0:S[0];if(!G)return;if(!/image\/(png|jpe?g|webp)/.test(G.type)){yt("Please select a PNG, JPG, or WEBP image","error");return}if(G.size>3*1024*1024){yt("Image must be under 3MB","error");return}const C=new FormData;C.append("file",G);try{let H=(T=(await W.post("/auth/avatar",C,{headers:{"Content-Type":"multipart/form-data"}})).data)==null?void 0:T.avatar_url;H&&(H=`${H}${H.includes("?")?"&":"?"}v=${Date.now()}`),x(H),t({avatar_url:H}),yt("Profile picture updated","success")}catch{yt("Failed to upload picture","error")}}return i.jsxs(i.Fragment,{children:[i.jsx("section",{className:"account-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("h1",{className:"headline",children:"Account Settings"}),i.jsx("p",{className:"subhead",children:"Update your profile details, password, and picture."})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container acct-wrap",children:[i.jsxs("div",{className:"panel",children:[i.jsx("h2",{className:"section-title",children:"Profile"}),i.jsxs("div",{ref:B,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[u&&i.jsx("div",{className:"alert success",children:u}),j&&i.jsx("div",{className:"alert error",children:j})]}),i.jsxs("form",{className:"form",onSubmit:oe,noValidate:!0,children:[i.jsxs("div",{className:"avatar-row",children:[i.jsx("div",{className:"avatar","aria-label":"Profile picture",children:w?i.jsx("img",{src:w,alt:"Profile"}):i.jsx("div",{className:"img-fallback","aria-hidden":!0})}),i.jsxs("label",{className:"btn",role:"button",children:["Change picture",i.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",onChange:F,hidden:!0})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"fullName",children:"Full name"}),i.jsx("input",{id:"fullName",type:"text",value:c,onChange:D=>d(D.target.value),placeholder:"Your name"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"email",children:"Email"}),i.jsx("input",{id:"email",type:"email",value:f,onChange:D=>h(D.target.value),required:!0})]}),i.jsxs("div",{className:"row2",children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"phone",children:"Phone"}),i.jsx("input",{id:"phone",type:"tel",value:p,onChange:D=>b(D.target.value),placeholder:"Optional"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"address",children:"Address"}),i.jsx("input",{id:"address",type:"text",value:m,onChange:D=>y(D.target.value),placeholder:"Optional"})]})]}),i.jsx("button",{className:"btn btn-primary",type:"submit",disabled:a,children:a?"Saving…":"Save changes"})]})]}),i.jsxs("aside",{className:"panel",children:[i.jsx("h2",{className:"section-title",children:"Change password"}),i.jsxs("form",{className:"form",onSubmit:ve,noValidate:!0,children:[i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"old",children:"Current password"}),i.jsx("input",{id:"old",type:"password",value:_,onChange:D=>P(D.target.value),autoComplete:"current-password",required:!0})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"new",children:"New password"}),i.jsx("input",{id:"new",type:"password",value:R,onChange:D=>U(D.target.value),autoComplete:"new-password",required:!0})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"confirm",children:"Confirm new password"}),i.jsx("input",{id:"confirm",type:"password",value:O,onChange:D=>Y(D.target.value),autoComplete:"new-password",required:!0})]}),i.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?"Updating…":"Update password"})]})]})]})}),i.jsx("style",{children:`
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
      `})]})}Cs.createRoot(document.getElementById("root")).render(i.jsx(Vd.StrictMode,{children:i.jsx(j0,{children:i.jsx(n1,{children:i.jsxs(i1,{children:[i.jsx(J1,{}),i.jsxs(f0,{children:[i.jsxs(ge,{element:i.jsx(m1,{}),children:[i.jsx(ge,{path:"/",element:i.jsx(jd,{})}),i.jsx(ge,{path:"/home",element:i.jsx(jd,{})}),i.jsx(ge,{path:"/about",element:i.jsx(Q1,{})}),i.jsx(ge,{path:"/login",element:i.jsx(s1,{})}),i.jsx(ge,{path:"/register",element:i.jsx(o1,{})}),i.jsx(ge,{path:"/product/:slug",element:i.jsx(It,{children:i.jsx(a1,{})})}),i.jsx(ge,{path:"/shop",element:i.jsx(It,{children:i.jsx(K1,{})})}),i.jsx(ge,{path:"/contact",element:i.jsx(It,{children:i.jsx(Z1,{})})}),i.jsx(ge,{path:"/account",element:i.jsx(It,{children:i.jsx(ev,{})})}),i.jsx(ge,{path:"/cart",element:i.jsx(It,{children:i.jsx(l1,{})})}),i.jsx(ge,{path:"/checkout",element:i.jsx(It,{children:i.jsx(d1,{})})}),i.jsx(ge,{path:"/orders",element:i.jsx(It,{children:i.jsx(u1,{})})}),i.jsx(ge,{path:"/orders/:orderId",element:i.jsx(It,{children:i.jsx(p1,{})})})]}),i.jsxs(ge,{path:"/admin",element:i.jsx(q1,{children:i.jsx(Y1,{})}),children:[i.jsx(ge,{index:!0,element:i.jsx(x1,{})}),i.jsx(ge,{path:"products",element:i.jsx(H1,{})}),i.jsx(ge,{path:"users",element:i.jsx(V1,{})}),i.jsx(ge,{path:"orders",element:i.jsx(g1,{})})]})]})]})})})}));
