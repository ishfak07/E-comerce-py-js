function Of(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(a,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qp={exports:{}},Vs={},Vp={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),Lf=Symbol.for("react.portal"),If=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Df=Symbol.for("react.provider"),Uf=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Hf=Symbol.for("react.suspense"),Wf=Symbol.for("react.memo"),qf=Symbol.for("react.lazy"),Ad=Symbol.iterator;function Vf(e){return e===null||typeof e!="object"?null:(e=Ad&&e[Ad]||e["@@iterator"],typeof e=="function"?e:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zp=Object.assign,Gp={};function Un(e,t,r){this.props=e,this.context=t,this.refs=Gp,this.updater=r||Yp}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kp(){}Kp.prototype=Un.prototype;function zc(e,t,r){this.props=e,this.context=t,this.refs=Gp,this.updater=r||Yp}var Ec=zc.prototype=new Kp;Ec.constructor=zc;Zp(Ec,Un.prototype);Ec.isPureReactComponent=!0;var Od=Array.isArray,Qp=Object.prototype.hasOwnProperty,Rc={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,r){var a,i={},s=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Qp.call(t,a)&&!Xp.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:li,type:e,key:s,ref:o,props:i,_owner:Rc.current}}function Yf(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pc(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function Zf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ld=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zf(""+e.key):t.toString(36)}function Hi(e,t,r,a,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case li:case Lf:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+jo(o,0):a,Od(i)?(r="",e!=null&&(r=e.replace(Ld,"$&/")+"/"),Hi(i,t,r,"",function(d){return d})):i!=null&&(Pc(i)&&(i=Yf(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ld,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",Od(e))for(var l=0;l<e.length;l++){s=e[l];var c=a+jo(s,l);o+=Hi(s,t,r,c,i)}else if(c=Vf(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=a+jo(s,l++),o+=Hi(s,t,r,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function wi(e,t,r){if(e==null)return e;var a=[],i=0;return Hi(e,a,"","",function(s){return t.call(r,s,i++)}),a}function Gf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var et={current:null},Wi={transition:null},Kf={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:Rc};function e0(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:wi,forEach:function(e,t,r){wi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return wi(e,function(){t++}),t},toArray:function(e){return wi(e,function(t){return t})||[]},only:function(e){if(!Pc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Un;le.Fragment=If;le.Profiler=Bf;le.PureComponent=zc;le.StrictMode=Ff;le.Suspense=Hf;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf;le.act=e0;le.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Zp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Rc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Qp.call(t,c)&&!Xp.hasOwnProperty(c)&&(a[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:li,type:e.type,key:i,ref:s,props:a,_owner:o}};le.createContext=function(e){return e={$$typeof:Uf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Df,_context:e},e.Consumer=e};le.createElement=Jp;le.createFactory=function(e){var t=Jp.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:$f,render:e}};le.isValidElement=Pc;le.lazy=function(e){return{$$typeof:qf,_payload:{_status:-1,_result:e},_init:Gf}};le.memo=function(e,t){return{$$typeof:Wf,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=Wi.transition;Wi.transition={};try{e()}finally{Wi.transition=t}};le.unstable_act=e0;le.useCallback=function(e,t){return et.current.useCallback(e,t)};le.useContext=function(e){return et.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return et.current.useDeferredValue(e)};le.useEffect=function(e,t){return et.current.useEffect(e,t)};le.useId=function(){return et.current.useId()};le.useImperativeHandle=function(e,t,r){return et.current.useImperativeHandle(e,t,r)};le.useInsertionEffect=function(e,t){return et.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return et.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return et.current.useMemo(e,t)};le.useReducer=function(e,t,r){return et.current.useReducer(e,t,r)};le.useRef=function(e){return et.current.useRef(e)};le.useState=function(e){return et.current.useState(e)};le.useSyncExternalStore=function(e,t,r){return et.current.useSyncExternalStore(e,t,r)};le.useTransition=function(){return et.current.useTransition()};le.version="18.3.1";Vp.exports=le;var b=Vp.exports;const t0=Wp(b),Qf=Of({__proto__:null,default:t0},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=b,Jf=Symbol.for("react.element"),em=Symbol.for("react.fragment"),tm=Object.prototype.hasOwnProperty,rm=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nm={key:!0,ref:!0,__self:!0,__source:!0};function r0(e,t,r){var a,i={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)tm.call(t,a)&&!nm.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:Jf,type:e,key:s,ref:o,props:i,_owner:rm.current}}Vs.Fragment=em;Vs.jsx=r0;Vs.jsxs=r0;qp.exports=Vs;var n=qp.exports,al={},n0={exports:{}},mt={},a0={exports:{}},i0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,E){var O=T.length;T.push(E);e:for(;0<O;){var U=O-1>>>1,Q=T[U];if(0<i(Q,E))T[U]=E,T[O]=Q,O=U;else break e}}function r(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var E=T[0],O=T.pop();if(O!==E){T[0]=O;e:for(var U=0,Q=T.length,me=Q>>>1;U<me;){var _=2*(U+1)-1,X=T[_],re=_+1,ne=T[re];if(0>i(X,O))re<Q&&0>i(ne,X)?(T[U]=ne,T[re]=O,U=re):(T[U]=X,T[_]=O,U=_);else if(re<Q&&0>i(ne,O))T[U]=ne,T[re]=O,U=re;else break e}}return E}function i(T,E){var O=T.sortIndex-E.sortIndex;return O!==0?O:T.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,h=null,p=3,x=!1,m=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(T){for(var E=r(d);E!==null;){if(E.callback===null)a(d);else if(E.startTime<=T)a(d),E.sortIndex=E.expirationTime,t(c,E);else break;E=r(d)}}function j(T){if(y=!1,f(T),!m)if(r(c)!==null)m=!0,K(k);else{var E=r(d);E!==null&&M(j,E.startTime-T)}}function k(T,E){m=!1,y&&(y=!1,v(z),z=-1),x=!0;var O=p;try{for(f(E),h=r(c);h!==null&&(!(h.expirationTime>E)||T&&!P());){var U=h.callback;if(typeof U=="function"){h.callback=null,p=h.priorityLevel;var Q=U(h.expirationTime<=E);E=e.unstable_now(),typeof Q=="function"?h.callback=Q:h===r(c)&&a(c),f(E)}else a(c);h=r(c)}if(h!==null)var me=!0;else{var _=r(d);_!==null&&M(j,_.startTime-E),me=!1}return me}finally{h=null,p=O,x=!1}}var C=!1,N=null,z=-1,W=5,A=-1;function P(){return!(e.unstable_now()-A<W)}function Z(){if(N!==null){var T=e.unstable_now();A=T;var E=!0;try{E=N(!0,T)}finally{E?L():(C=!1,N=null)}}else C=!1}var L;if(typeof g=="function")L=function(){g(Z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,se=B.port2;B.port1.onmessage=Z,L=function(){se.postMessage(null)}}else L=function(){w(Z,0)};function K(T){N=T,C||(C=!0,L())}function M(T,E){z=w(function(){T(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||x||(m=!0,K(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var E=3;break;default:E=p}var O=p;p=E;try{return T()}finally{p=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,E){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=p;p=T;try{return E()}finally{p=O}},e.unstable_scheduleCallback=function(T,E,O){var U=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?U+O:U):O=U,T){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=O+Q,T={id:u++,callback:E,priorityLevel:T,startTime:O,expirationTime:Q,sortIndex:-1},O>U?(T.sortIndex=O,t(d,T),r(c)===null&&T===r(d)&&(y?(v(z),z=-1):y=!0,M(j,O-U))):(T.sortIndex=Q,t(c,T),m||x||(m=!0,K(k))),T},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(T){var E=p;return function(){var O=p;p=E;try{return T.apply(this,arguments)}finally{p=O}}}})(i0);a0.exports=i0;var am=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=b,ft=am;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,_a={};function rn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(_a[e]=t,e=0;e<t.length;e++)s0.add(t[e])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=Object.prototype.hasOwnProperty,sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Id={},Fd={};function om(e){return il.call(Fd,e)?!0:il.call(Id,e)?!1:sm.test(e)?Fd[e]=!0:(Id[e]=!0,!1)}function lm(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cm(e,t,r,a){if(t===null||typeof t>"u"||lm(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tt(e,t,r,a,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new tt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new tt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new tt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new tt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new tt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new tt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new tt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new tt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new tt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tc=/[\-:]([a-z])/g;function Mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tc,Mc);qe[t]=new tt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tc,Mc);qe[t]=new tt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tc,Mc);qe[t]=new tt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new tt(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new tt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ac(e,t,r,a){var i=qe.hasOwnProperty(t)?qe[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cm(t,r,i,a)&&(r=null),a||i===null?om(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,a=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var or=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ji=Symbol.for("react.element"),ln=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),Oc=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),Ic=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),c0=Symbol.for("react.offscreen"),Bd=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=Bd&&e[Bd]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,ko;function ua(e){if(ko===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ko=t&&t[1]||""}return`
`+ko+e}var No=!1;function So(e,t){if(!e||No)return"";No=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var a=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){a=d}e.call(t.prototype)}else{try{throw Error()}catch(d){a=d}e()}}catch(d){if(d&&a&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=a.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{No=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ua(e):""}function dm(e){switch(e.tag){case 5:return ua(e.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return e=So(e.type,!1),e;case 11:return e=So(e.type.render,!1),e;case 1:return e=So(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case ln:return"Portal";case sl:return"Profiler";case Oc:return"StrictMode";case ol:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case l0:return(e.displayName||"Context")+".Consumer";case o0:return(e._context.displayName||"Context")+".Provider";case Lc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ic:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case hr:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function um(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===Oc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function d0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=d0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ki(e){e._valueTracker||(e._valueTracker=pm(e))}function u0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=d0(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function cs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var r=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Dd(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=Er(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function p0(e,t){t=t.checked,t!=null&&Ac(e,"checked",t,!1)}function ul(e,t){p0(e,t);var r=Er(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pl(e,t.type,r):t.hasOwnProperty("defaultValue")&&pl(e,t.type,Er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ud(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function pl(e,t,r){(t!=="number"||cs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var pa=Array.isArray;function wn(e,t,r,a){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Er(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $d(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(F(92));if(pa(r)){if(1<r.length)throw Error(F(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Er(r)}}function h0(e,t){var r=Er(t.value),a=Er(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Hd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function f0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?f0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ni,m0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ni=Ni||document.createElement("div"),Ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function za(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hm=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(e){hm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),va[t]=va[e]})});function g0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||va.hasOwnProperty(e)&&va[e]?(""+t).trim():t+"px"}function x0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,i=g0(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,i):e[r]=i}}var fm=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,jn=null,kn=null;function Wd(e){if(e=ui(e)){if(typeof vl!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Qs(t),vl(e.stateNode,e.type,t))}}function v0(e){jn?kn?kn.push(e):kn=[e]:jn=e}function b0(){if(jn){var e=jn,t=kn;if(kn=jn=null,Wd(e),t)for(e=0;e<t.length;e++)Wd(t[e])}}function y0(e,t){return e(t)}function w0(){}var Co=!1;function j0(e,t,r){if(Co)return e(t,r);Co=!0;try{return y0(e,t,r)}finally{Co=!1,(jn!==null||kn!==null)&&(w0(),b0())}}function Ea(e,t){var r=e.stateNode;if(r===null)return null;var a=Qs(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,t,typeof r));return r}var bl=!1;if(rr)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){bl=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{bl=!1}function mm(e,t,r,a,i,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(u){this.onError(u)}}var ba=!1,ds=null,us=!1,yl=null,gm={onError:function(e){ba=!0,ds=e}};function xm(e,t,r,a,i,s,o,l,c){ba=!1,ds=null,mm.apply(gm,arguments)}function vm(e,t,r,a,i,s,o,l,c){if(xm.apply(this,arguments),ba){if(ba){var d=ds;ba=!1,ds=null}else throw Error(F(198));us||(us=!0,yl=d)}}function nn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function k0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qd(e){if(nn(e)!==e)throw Error(F(188))}function bm(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var r=e,a=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){r=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return qd(i),e;if(s===a)return qd(i),t;s=s.sibling}throw Error(F(188))}if(r.return!==a.return)r=i,a=s;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,a=s;break}if(l===a){o=!0,a=i,r=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===r){o=!0,r=s,a=i;break}if(l===a){o=!0,a=s,r=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(r.alternate!==a)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:t}function N0(e){return e=bm(e),e!==null?S0(e):null}function S0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=S0(e);if(t!==null)return t;e=e.sibling}return null}var C0=ft.unstable_scheduleCallback,Vd=ft.unstable_cancelCallback,ym=ft.unstable_shouldYield,wm=ft.unstable_requestPaint,Ae=ft.unstable_now,jm=ft.unstable_getCurrentPriorityLevel,Bc=ft.unstable_ImmediatePriority,_0=ft.unstable_UserBlockingPriority,ps=ft.unstable_NormalPriority,km=ft.unstable_LowPriority,z0=ft.unstable_IdlePriority,Ys=null,Ht=null;function Nm(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Ys,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:_m,Sm=Math.log,Cm=Math.LN2;function _m(e){return e>>>=0,e===0?32:31-(Sm(e)/Cm|0)|0}var Si=64,Ci=4194304;function ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hs(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~i;l!==0?a=ha(l):(s&=o,s!==0&&(a=ha(s)))}else o=r&~i,o!==0?a=ha(o):s!==0&&(a=ha(s));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(a&4&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Tt(t),i=1<<r,a|=e[r],t&=~i;return a}function zm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Em(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Tt(s),l=1<<o,c=i[o];c===-1?(!(l&r)||l&a)&&(i[o]=zm(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function E0(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function _o(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ci(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=r}function Rm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Tt(r),s=1<<i;t[i]=0,a[i]=-1,e[i]=-1,r&=~s}}function Dc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Tt(r),i=1<<a;i&t|e[a]&t&&(e[a]|=t),r&=~i}}var ge=0;function R0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var P0,Uc,T0,M0,A0,jl=!1,_i=[],yr=null,wr=null,jr=null,Ra=new Map,Pa=new Map,mr=[],Pm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function ea(e,t,r,a,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ui(t),t!==null&&Uc(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tm(e,t,r,a,i){switch(t){case"focusin":return yr=ea(yr,e,t,r,a,i),!0;case"dragenter":return wr=ea(wr,e,t,r,a,i),!0;case"mouseover":return jr=ea(jr,e,t,r,a,i),!0;case"pointerover":var s=i.pointerId;return Ra.set(s,ea(Ra.get(s)||null,e,t,r,a,i)),!0;case"gotpointercapture":return s=i.pointerId,Pa.set(s,ea(Pa.get(s)||null,e,t,r,a,i)),!0}return!1}function O0(e){var t=Dr(e.target);if(t!==null){var r=nn(t);if(r!==null){if(t=r.tag,t===13){if(t=k0(r),t!==null){e.blockedOn=t,A0(e.priority,function(){T0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);xl=a,r.target.dispatchEvent(a),xl=null}else return t=ui(r),t!==null&&Uc(t),e.blockedOn=r,!1;t.shift()}return!0}function Zd(e,t,r){qi(e)&&r.delete(t)}function Mm(){jl=!1,yr!==null&&qi(yr)&&(yr=null),wr!==null&&qi(wr)&&(wr=null),jr!==null&&qi(jr)&&(jr=null),Ra.forEach(Zd),Pa.forEach(Zd)}function ta(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,Mm)))}function Ta(e){function t(i){return ta(i,e)}if(0<_i.length){ta(_i[0],e);for(var r=1;r<_i.length;r++){var a=_i[r];a.blockedOn===e&&(a.blockedOn=null)}}for(yr!==null&&ta(yr,e),wr!==null&&ta(wr,e),jr!==null&&ta(jr,e),Ra.forEach(t),Pa.forEach(t),r=0;r<mr.length;r++)a=mr[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)O0(r),r.blockedOn===null&&mr.shift()}var Nn=or.ReactCurrentBatchConfig,fs=!0;function Am(e,t,r,a){var i=ge,s=Nn.transition;Nn.transition=null;try{ge=1,$c(e,t,r,a)}finally{ge=i,Nn.transition=s}}function Om(e,t,r,a){var i=ge,s=Nn.transition;Nn.transition=null;try{ge=4,$c(e,t,r,a)}finally{ge=i,Nn.transition=s}}function $c(e,t,r,a){if(fs){var i=kl(e,t,r,a);if(i===null)Io(e,t,a,ms,r),Yd(e,a);else if(Tm(i,e,t,r,a))a.stopPropagation();else if(Yd(e,a),t&4&&-1<Pm.indexOf(e)){for(;i!==null;){var s=ui(i);if(s!==null&&P0(s),s=kl(e,t,r,a),s===null&&Io(e,t,a,ms,r),s===i)break;i=s}i!==null&&a.stopPropagation()}else Io(e,t,a,null,r)}}var ms=null;function kl(e,t,r,a){if(ms=null,e=Fc(a),e=Dr(e),e!==null)if(t=nn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=k0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ms=e,null}function L0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jm()){case Bc:return 1;case _0:return 4;case ps:case km:return 16;case z0:return 536870912;default:return 16}default:return 16}}var xr=null,Hc=null,Vi=null;function I0(){if(Vi)return Vi;var e,t=Hc,r=t.length,a,i="value"in xr?xr.value:xr.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(a=1;a<=o&&t[r-a]===i[s-a];a++);return Vi=i.slice(e,1<a?1-a:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function Gd(){return!1}function gt(e){function t(r,a,i,s,o){this._reactName=r,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zi:Gd,this.isPropagationStopped=Gd,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=gt($n),di=Pe({},$n,{view:0,detail:0}),Lm=gt(di),zo,Eo,ra,Zs=Pe({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ra&&(ra&&e.type==="mousemove"?(zo=e.screenX-ra.screenX,Eo=e.screenY-ra.screenY):Eo=zo=0,ra=e),zo)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),Kd=gt(Zs),Im=Pe({},Zs,{dataTransfer:0}),Fm=gt(Im),Bm=Pe({},di,{relatedTarget:0}),Ro=gt(Bm),Dm=Pe({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Um=gt(Dm),$m=Pe({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hm=gt($m),Wm=Pe({},$n,{data:0}),Qd=gt(Wm),qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ym[e])?!!t[e]:!1}function qc(){return Zm}var Gm=Pe({},di,{key:function(e){if(e.key){var t=qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Km=gt(Gm),Qm=Pe({},Zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=gt(Qm),Xm=Pe({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),Jm=gt(Xm),eg=Pe({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=gt(eg),rg=Pe({},Zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ng=gt(rg),ag=[9,13,27,32],Vc=rr&&"CompositionEvent"in window,ya=null;rr&&"documentMode"in document&&(ya=document.documentMode);var ig=rr&&"TextEvent"in window&&!ya,F0=rr&&(!Vc||ya&&8<ya&&11>=ya),Jd=" ",eu=!1;function B0(e,t){switch(e){case"keyup":return ag.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function sg(e,t){switch(e){case"compositionend":return D0(t);case"keypress":return t.which!==32?null:(eu=!0,Jd);case"textInput":return e=t.data,e===Jd&&eu?null:e;default:return null}}function og(e,t){if(dn)return e==="compositionend"||!Vc&&B0(e,t)?(e=I0(),Vi=Hc=xr=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return F0&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function U0(e,t,r,a){v0(a),t=gs(t,"onChange"),0<t.length&&(r=new Wc("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var wa=null,Ma=null;function cg(e){X0(e,0)}function Gs(e){var t=hn(e);if(u0(t))return e}function dg(e,t){if(e==="change")return t}var $0=!1;if(rr){var Po;if(rr){var To="oninput"in document;if(!To){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),To=typeof ru.oninput=="function"}Po=To}else Po=!1;$0=Po&&(!document.documentMode||9<document.documentMode)}function nu(){wa&&(wa.detachEvent("onpropertychange",H0),Ma=wa=null)}function H0(e){if(e.propertyName==="value"&&Gs(Ma)){var t=[];U0(t,Ma,e,Fc(e)),j0(cg,t)}}function ug(e,t,r){e==="focusin"?(nu(),wa=t,Ma=r,wa.attachEvent("onpropertychange",H0)):e==="focusout"&&nu()}function pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(Ma)}function hg(e,t){if(e==="click")return Gs(t)}function fg(e,t){if(e==="input"||e==="change")return Gs(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:mg;function Aa(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var i=r[a];if(!il.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var r=au(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=au(r)}}function W0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?W0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function q0(){for(var e=window,t=cs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=cs(e.document)}return t}function Yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=q0(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&W0(r.ownerDocument.documentElement,r)){if(a!==null&&Yc(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(a.start,i);a=a.end===void 0?s:Math.min(a.end,i),!e.extend&&s>a&&(i=a,a=s,s=i),i=iu(r,s);var o=iu(r,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xg=rr&&"documentMode"in document&&11>=document.documentMode,un=null,Nl=null,ja=null,Sl=!1;function su(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Sl||un==null||un!==cs(a)||(a=un,"selectionStart"in a&&Yc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ja&&Aa(ja,a)||(ja=a,a=gs(Nl,"onSelect"),0<a.length&&(t=new Wc("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=un)))}function Ei(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var pn={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},Mo={},V0={};rr&&(V0=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Ks(e){if(Mo[e])return Mo[e];if(!pn[e])return e;var t=pn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in V0)return Mo[e]=t[r];return e}var Y0=Ks("animationend"),Z0=Ks("animationiteration"),G0=Ks("animationstart"),K0=Ks("transitionend"),Q0=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){Q0.set(e,t),rn(t,[e])}for(var Ao=0;Ao<ou.length;Ao++){var Oo=ou[Ao],vg=Oo.toLowerCase(),bg=Oo[0].toUpperCase()+Oo.slice(1);Mr(vg,"on"+bg)}Mr(Y0,"onAnimationEnd");Mr(Z0,"onAnimationIteration");Mr(G0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(K0,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function lu(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,vm(a,t,void 0,e),e.currentTarget=null}function X0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],i=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;lu(i,l,d),s=c}else for(o=0;o<a.length;o++){if(l=a[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;lu(i,l,d),s=c}}}if(us)throw e=yl,us=!1,yl=null,e}function ke(e,t){var r=t[Rl];r===void 0&&(r=t[Rl]=new Set);var a=e+"__bubble";r.has(a)||(J0(t,e,2,!1),r.add(a))}function Lo(e,t,r){var a=0;t&&(a|=4),J0(r,e,a,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Oa(e){if(!e[Ri]){e[Ri]=!0,s0.forEach(function(r){r!=="selectionchange"&&(yg.has(r)||Lo(r,!1,e),Lo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,Lo("selectionchange",!1,t))}}function J0(e,t,r,a){switch(L0(t)){case 1:var i=Am;break;case 4:i=Om;break;default:i=$c}r=i.bind(null,t,r,e),i=void 0,!bl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Io(e,t,r,a,i){var s=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dr(l),o===null)return;if(c=o.tag,c===5||c===6){a=s=o;continue e}l=l.parentNode}}a=a.return}j0(function(){var d=s,u=Fc(r),h=[];e:{var p=Q0.get(e);if(p!==void 0){var x=Wc,m=e;switch(e){case"keypress":if(Yi(r)===0)break e;case"keydown":case"keyup":x=Km;break;case"focusin":m="focus",x=Ro;break;case"focusout":m="blur",x=Ro;break;case"beforeblur":case"afterblur":x=Ro;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Jm;break;case Y0:case Z0:case G0:x=Um;break;case K0:x=tg;break;case"scroll":x=Lm;break;case"wheel":x=ng;break;case"copy":case"cut":case"paste":x=Hm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xd}var y=(t&4)!==0,w=!y&&e==="scroll",v=y?p!==null?p+"Capture":null:p;y=[];for(var g=d,f;g!==null;){f=g;var j=f.stateNode;if(f.tag===5&&j!==null&&(f=j,v!==null&&(j=Ea(g,v),j!=null&&y.push(La(g,j,f)))),w)break;g=g.return}0<y.length&&(p=new x(p,m,null,r,u),h.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&r!==xl&&(m=r.relatedTarget||r.fromElement)&&(Dr(m)||m[nr]))break e;if((x||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,x?(m=r.relatedTarget||r.toElement,x=d,m=m?Dr(m):null,m!==null&&(w=nn(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(x=null,m=d),x!==m)){if(y=Kd,j="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=Xd,j="onPointerLeave",v="onPointerEnter",g="pointer"),w=x==null?p:hn(x),f=m==null?p:hn(m),p=new y(j,g+"leave",x,r,u),p.target=w,p.relatedTarget=f,j=null,Dr(u)===d&&(y=new y(v,g+"enter",m,r,u),y.target=f,y.relatedTarget=w,j=y),w=j,x&&m)t:{for(y=x,v=m,g=0,f=y;f;f=an(f))g++;for(f=0,j=v;j;j=an(j))f++;for(;0<g-f;)y=an(y),g--;for(;0<f-g;)v=an(v),f--;for(;g--;){if(y===v||v!==null&&y===v.alternate)break t;y=an(y),v=an(v)}y=null}else y=null;x!==null&&cu(h,p,x,y,!1),m!==null&&w!==null&&cu(h,w,m,y,!0)}}e:{if(p=d?hn(d):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var k=dg;else if(tu(p))if($0)k=fg;else{k=pg;var C=ug}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=hg);if(k&&(k=k(e,d))){U0(h,k,r,u);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&pl(p,"number",p.value)}switch(C=d?hn(d):window,e){case"focusin":(tu(C)||C.contentEditable==="true")&&(un=C,Nl=d,ja=null);break;case"focusout":ja=Nl=un=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,su(h,r,u);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":su(h,r,u)}var N;if(Vc)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else dn?B0(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(F0&&r.locale!=="ko"&&(dn||z!=="onCompositionStart"?z==="onCompositionEnd"&&dn&&(N=I0()):(xr=u,Hc="value"in xr?xr.value:xr.textContent,dn=!0)),C=gs(d,z),0<C.length&&(z=new Qd(z,e,null,r,u),h.push({event:z,listeners:C}),N?z.data=N:(N=D0(r),N!==null&&(z.data=N)))),(N=ig?sg(e,r):og(e,r))&&(d=gs(d,"onBeforeInput"),0<d.length&&(u=new Qd("onBeforeInput","beforeinput",null,r,u),h.push({event:u,listeners:d}),u.data=N))}X0(h,t)})}function La(e,t,r){return{instance:e,listener:t,currentTarget:r}}function gs(e,t){for(var r=t+"Capture",a=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ea(e,r),s!=null&&a.unshift(La(e,s,i)),s=Ea(e,t),s!=null&&a.push(La(e,s,i))),e=e.return}return a}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,r,a,i){for(var s=t._reactName,o=[];r!==null&&r!==a;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===a)break;l.tag===5&&d!==null&&(l=d,i?(c=Ea(r,s),c!=null&&o.unshift(La(r,c,l))):i||(c=Ea(r,s),c!=null&&o.push(La(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var wg=/\r\n?/g,jg=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(wg,`
`).replace(jg,"")}function Pi(e,t,r){if(t=du(t),du(e)!==t&&r)throw Error(F(425))}function xs(){}var Cl=null,_l=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(Sg)}:El;function Sg(e){setTimeout(function(){throw e})}function Fo(e,t){var r=t,a=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(a===0){e.removeChild(i),Ta(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=i}while(r);Ta(t)}function kr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),$t="__reactFiber$"+Hn,Ia="__reactProps$"+Hn,nr="__reactContainer$"+Hn,Rl="__reactEvents$"+Hn,Cg="__reactListeners$"+Hn,_g="__reactHandles$"+Hn;function Dr(e){var t=e[$t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nr]||r[$t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=pu(e);e!==null;){if(r=e[$t])return r;e=pu(e)}return t}e=r,r=e.parentNode}return null}function ui(e){return e=e[$t]||e[nr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Qs(e){return e[Ia]||null}var Pl=[],fn=-1;function Ar(e){return{current:e}}function Ne(e){0>fn||(e.current=Pl[fn],Pl[fn]=null,fn--)}function we(e,t){fn++,Pl[fn]=e.current,e.current=t}var Rr={},Ke=Ar(Rr),it=Ar(!1),Zr=Rr;function zn(e,t){var r=e.type.contextTypes;if(!r)return Rr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function vs(){Ne(it),Ne(Ke)}function hu(e,t,r){if(Ke.current!==Rr)throw Error(F(168));we(Ke,t),we(it,r)}function eh(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(F(108,um(e)||"Unknown",i));return Pe({},r,a)}function bs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rr,Zr=Ke.current,we(Ke,e),we(it,it.current),!0}function fu(e,t,r){var a=e.stateNode;if(!a)throw Error(F(169));r?(e=eh(e,t,Zr),a.__reactInternalMemoizedMergedChildContext=e,Ne(it),Ne(Ke),we(Ke,e)):Ne(it),we(it,r)}var Qt=null,Xs=!1,Bo=!1;function th(e){Qt===null?Qt=[e]:Qt.push(e)}function zg(e){Xs=!0,th(e)}function Or(){if(!Bo&&Qt!==null){Bo=!0;var e=0,t=ge;try{var r=Qt;for(ge=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Qt=null,Xs=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),C0(Bc,Or),i}finally{ge=t,Bo=!1}}return null}var mn=[],gn=0,ys=null,ws=0,xt=[],vt=0,Gr=null,Jt=1,er="";function Ir(e,t){mn[gn++]=ws,mn[gn++]=ys,ys=e,ws=t}function rh(e,t,r){xt[vt++]=Jt,xt[vt++]=er,xt[vt++]=Gr,Gr=e;var a=Jt;e=er;var i=32-Tt(a)-1;a&=~(1<<i),r+=1;var s=32-Tt(t)+i;if(30<s){var o=i-i%5;s=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Jt=1<<32-Tt(t)+i|r<<i|a,er=s+e}else Jt=1<<s|r<<i|a,er=e}function Zc(e){e.return!==null&&(Ir(e,1),rh(e,1,0))}function Gc(e){for(;e===ys;)ys=mn[--gn],mn[gn]=null,ws=mn[--gn],mn[gn]=null;for(;e===Gr;)Gr=xt[--vt],xt[vt]=null,er=xt[--vt],xt[vt]=null,Jt=xt[--vt],xt[vt]=null}var ht=null,pt=null,_e=!1,Pt=null;function nh(e,t){var r=bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function mu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=kr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Gr!==null?{id:Jt,overflow:er}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ht=e,pt=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(_e){var t=pt;if(t){var r=t;if(!mu(e,t)){if(Tl(e))throw Error(F(418));t=kr(r.nextSibling);var a=ht;t&&mu(e,t)?nh(a,r):(e.flags=e.flags&-4097|2,_e=!1,ht=e)}}else{if(Tl(e))throw Error(F(418));e.flags=e.flags&-4097|2,_e=!1,ht=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ti(e){if(e!==ht)return!1;if(!_e)return gu(e),_e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=pt)){if(Tl(e))throw ah(),Error(F(418));for(;t;)nh(e,t),t=kr(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){pt=kr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?kr(e.stateNode.nextSibling):null;return!0}function ah(){for(var e=pt;e;)e=kr(e.nextSibling)}function En(){pt=ht=null,_e=!1}function Kc(e){Pt===null?Pt=[e]:Pt.push(e)}var Eg=or.ReactCurrentBatchConfig;function na(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var a=r.stateNode}if(!a)throw Error(F(147,e));var i=a,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function Mi(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xu(e){var t=e._init;return t(e._payload)}function ih(e){function t(v,g){if(e){var f=v.deletions;f===null?(v.deletions=[g],v.flags|=16):f.push(g)}}function r(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function a(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=_r(v,g),v.index=0,v.sibling=null,v}function s(v,g,f){return v.index=f,e?(f=v.alternate,f!==null?(f=f.index,f<g?(v.flags|=2,g):f):(v.flags|=2,g)):(v.flags|=1048576,g)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,g,f,j){return g===null||g.tag!==6?(g=Vo(f,v.mode,j),g.return=v,g):(g=i(g,f),g.return=v,g)}function c(v,g,f,j){var k=f.type;return k===cn?u(v,g,f.props.children,j,f.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hr&&xu(k)===g.type)?(j=i(g,f.props),j.ref=na(v,g,f),j.return=v,j):(j=es(f.type,f.key,f.props,null,v.mode,j),j.ref=na(v,g,f),j.return=v,j)}function d(v,g,f,j){return g===null||g.tag!==4||g.stateNode.containerInfo!==f.containerInfo||g.stateNode.implementation!==f.implementation?(g=Yo(f,v.mode,j),g.return=v,g):(g=i(g,f.children||[]),g.return=v,g)}function u(v,g,f,j,k){return g===null||g.tag!==7?(g=qr(f,v.mode,j,k),g.return=v,g):(g=i(g,f),g.return=v,g)}function h(v,g,f){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vo(""+g,v.mode,f),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ji:return f=es(g.type,g.key,g.props,null,v.mode,f),f.ref=na(v,null,g),f.return=v,f;case ln:return g=Yo(g,v.mode,f),g.return=v,g;case hr:var j=g._init;return h(v,j(g._payload),f)}if(pa(g)||Xn(g))return g=qr(g,v.mode,f,null),g.return=v,g;Mi(v,g)}return null}function p(v,g,f,j){var k=g!==null?g.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:l(v,g,""+f,j);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ji:return f.key===k?c(v,g,f,j):null;case ln:return f.key===k?d(v,g,f,j):null;case hr:return k=f._init,p(v,g,k(f._payload),j)}if(pa(f)||Xn(f))return k!==null?null:u(v,g,f,j,null);Mi(v,f)}return null}function x(v,g,f,j,k){if(typeof j=="string"&&j!==""||typeof j=="number")return v=v.get(f)||null,l(g,v,""+j,k);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ji:return v=v.get(j.key===null?f:j.key)||null,c(g,v,j,k);case ln:return v=v.get(j.key===null?f:j.key)||null,d(g,v,j,k);case hr:var C=j._init;return x(v,g,f,C(j._payload),k)}if(pa(j)||Xn(j))return v=v.get(f)||null,u(g,v,j,k,null);Mi(g,j)}return null}function m(v,g,f,j){for(var k=null,C=null,N=g,z=g=0,W=null;N!==null&&z<f.length;z++){N.index>z?(W=N,N=null):W=N.sibling;var A=p(v,N,f[z],j);if(A===null){N===null&&(N=W);break}e&&N&&A.alternate===null&&t(v,N),g=s(A,g,z),C===null?k=A:C.sibling=A,C=A,N=W}if(z===f.length)return r(v,N),_e&&Ir(v,z),k;if(N===null){for(;z<f.length;z++)N=h(v,f[z],j),N!==null&&(g=s(N,g,z),C===null?k=N:C.sibling=N,C=N);return _e&&Ir(v,z),k}for(N=a(v,N);z<f.length;z++)W=x(N,v,z,f[z],j),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?z:W.key),g=s(W,g,z),C===null?k=W:C.sibling=W,C=W);return e&&N.forEach(function(P){return t(v,P)}),_e&&Ir(v,z),k}function y(v,g,f,j){var k=Xn(f);if(typeof k!="function")throw Error(F(150));if(f=k.call(f),f==null)throw Error(F(151));for(var C=k=null,N=g,z=g=0,W=null,A=f.next();N!==null&&!A.done;z++,A=f.next()){N.index>z?(W=N,N=null):W=N.sibling;var P=p(v,N,A.value,j);if(P===null){N===null&&(N=W);break}e&&N&&P.alternate===null&&t(v,N),g=s(P,g,z),C===null?k=P:C.sibling=P,C=P,N=W}if(A.done)return r(v,N),_e&&Ir(v,z),k;if(N===null){for(;!A.done;z++,A=f.next())A=h(v,A.value,j),A!==null&&(g=s(A,g,z),C===null?k=A:C.sibling=A,C=A);return _e&&Ir(v,z),k}for(N=a(v,N);!A.done;z++,A=f.next())A=x(N,v,z,A.value,j),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?z:A.key),g=s(A,g,z),C===null?k=A:C.sibling=A,C=A);return e&&N.forEach(function(Z){return t(v,Z)}),_e&&Ir(v,z),k}function w(v,g,f,j){if(typeof f=="object"&&f!==null&&f.type===cn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ji:e:{for(var k=f.key,C=g;C!==null;){if(C.key===k){if(k=f.type,k===cn){if(C.tag===7){r(v,C.sibling),g=i(C,f.props.children),g.return=v,v=g;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===hr&&xu(k)===C.type){r(v,C.sibling),g=i(C,f.props),g.ref=na(v,C,f),g.return=v,v=g;break e}r(v,C);break}else t(v,C);C=C.sibling}f.type===cn?(g=qr(f.props.children,v.mode,j,f.key),g.return=v,v=g):(j=es(f.type,f.key,f.props,null,v.mode,j),j.ref=na(v,g,f),j.return=v,v=j)}return o(v);case ln:e:{for(C=f.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===f.containerInfo&&g.stateNode.implementation===f.implementation){r(v,g.sibling),g=i(g,f.children||[]),g.return=v,v=g;break e}else{r(v,g);break}else t(v,g);g=g.sibling}g=Yo(f,v.mode,j),g.return=v,v=g}return o(v);case hr:return C=f._init,w(v,g,C(f._payload),j)}if(pa(f))return m(v,g,f,j);if(Xn(f))return y(v,g,f,j);Mi(v,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,g!==null&&g.tag===6?(r(v,g.sibling),g=i(g,f),g.return=v,v=g):(r(v,g),g=Vo(f,v.mode,j),g.return=v,v=g),o(v)):r(v,g)}return w}var Rn=ih(!0),sh=ih(!1),js=Ar(null),ks=null,xn=null,Qc=null;function Xc(){Qc=xn=ks=null}function Jc(e){var t=js.current;Ne(js),e._currentValue=t}function Al(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function Sn(e,t){ks=e,Qc=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Qc!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(ks===null)throw Error(F(308));xn=e,ks.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Ur=null;function ed(e){Ur===null?Ur=[e]:Ur.push(e)}function oh(e,t,r,a){var i=t.interleaved;return i===null?(r.next=r,ed(t)):(r.next=i.next,i.next=r),t.interleaved=r,ar(e,a)}function ar(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var fr=!1;function td(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,pe&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,ar(e,r)}return i=a.interleaved,i===null?(t.next=t,ed(a)):(t.next=i.next,i.next=t),a.interleaved=t,ar(e,r)}function Zi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Dc(e,r)}}function vu(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ns(e,t,r,a){var i=e.updateQueue;fr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(s!==null){var h=i.baseState;o=0,u=d=c=null,l=s;do{var p=l.lane,x=l.eventTime;if((a&p)===p){u!==null&&(u=u.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,y=l;switch(p=t,x=r,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(x,h,p);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,p=typeof m=="function"?m.call(x,h,p):m,p==null)break e;h=Pe({},h,p);break e;case 2:fr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else x={eventTime:x,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=x,c=h):u=u.next=x,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Qr|=o,e.lanes=o,e.memoizedState=h}}function bu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=r,typeof i!="function")throw Error(F(191,i));i.call(a)}}}var pi={},Wt=Ar(pi),Fa=Ar(pi),Ba=Ar(pi);function $r(e){if(e===pi)throw Error(F(174));return e}function rd(e,t){switch(we(Ba,t),we(Fa,e),we(Wt,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fl(t,e)}Ne(Wt),we(Wt,t)}function Pn(){Ne(Wt),Ne(Fa),Ne(Ba)}function ch(e){$r(Ba.current);var t=$r(Wt.current),r=fl(t,e.type);t!==r&&(we(Fa,e),we(Wt,r))}function nd(e){Fa.current===e&&(Ne(Wt),Ne(Fa))}var ze=Ar(0);function Ss(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Do=[];function ad(){for(var e=0;e<Do.length;e++)Do[e]._workInProgressVersionPrimary=null;Do.length=0}var Gi=or.ReactCurrentDispatcher,Uo=or.ReactCurrentBatchConfig,Kr=0,Ee=null,Ie=null,De=null,Cs=!1,ka=!1,Da=0,Rg=0;function Ve(){throw Error(F(321))}function id(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ot(e[r],t[r]))return!1;return!0}function sd(e,t,r,a,i,s){if(Kr=s,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?Ag:Og,e=r(a,i),ka){s=0;do{if(ka=!1,Da=0,25<=s)throw Error(F(301));s+=1,De=Ie=null,t.updateQueue=null,Gi.current=Lg,e=r(a,i)}while(ka)}if(Gi.current=_s,t=Ie!==null&&Ie.next!==null,Kr=0,De=Ie=Ee=null,Cs=!1,t)throw Error(F(300));return e}function od(){var e=Da!==0;return Da=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Ee.memoizedState=De=e:De=De.next=e,De}function jt(){if(Ie===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=De===null?Ee.memoizedState:De.next;if(t!==null)De=t,Ie=e;else{if(e===null)throw Error(F(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},De===null?Ee.memoizedState=De=e:De=De.next=e}return De}function Ua(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=jt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var a=Ie,i=a.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}a.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,a=a.baseState;var l=o=null,c=null,d=s;do{var u=d.lane;if((Kr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),a=d.hasEagerState?d.eagerState:e(a,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=h,o=a):c=c.next=h,Ee.lanes|=u,Qr|=u}d=d.next}while(d!==null&&d!==s);c===null?o=a:c.next=l,Ot(a,t.memoizedState)||(at=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=c,r.lastRenderedState=a}if(e=r.interleaved,e!==null){i=e;do s=i.lane,Ee.lanes|=s,Qr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ho(e){var t=jt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var a=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ot(s,t.memoizedState)||(at=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,a]}function dh(){}function uh(e,t){var r=Ee,a=jt(),i=t(),s=!Ot(a.memoizedState,i);if(s&&(a.memoizedState=i,at=!0),a=a.queue,ld(fh.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||De!==null&&De.memoizedState.tag&1){if(r.flags|=2048,$a(9,hh.bind(null,r,a,i,t),void 0,null),Ue===null)throw Error(F(349));Kr&30||ph(r,t,i)}return i}function ph(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function hh(e,t,r,a){t.value=r,t.getSnapshot=a,mh(t)&&gh(e)}function fh(e,t,r){return r(function(){mh(t)&&gh(e)})}function mh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ot(e,r)}catch{return!0}}function gh(e){var t=ar(e,1);t!==null&&Mt(t,e,1,-1)}function yu(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t.queue=e,e=e.dispatch=Mg.bind(null,Ee,e),[t.memoizedState,e]}function $a(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function xh(){return jt().memoizedState}function Ki(e,t,r,a){var i=Ut();Ee.flags|=e,i.memoizedState=$a(1|t,r,void 0,a===void 0?null:a)}function Js(e,t,r,a){var i=jt();a=a===void 0?null:a;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,a!==null&&id(a,o.deps)){i.memoizedState=$a(t,r,s,a);return}}Ee.flags|=e,i.memoizedState=$a(1|t,r,s,a)}function wu(e,t){return Ki(8390656,8,e,t)}function ld(e,t){return Js(2048,8,e,t)}function vh(e,t){return Js(4,2,e,t)}function bh(e,t){return Js(4,4,e,t)}function yh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,r){return r=r!=null?r.concat([e]):null,Js(4,4,yh.bind(null,t,e),r)}function cd(){}function jh(e,t){var r=jt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&id(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function kh(e,t){var r=jt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&id(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Nh(e,t,r){return Kr&21?(Ot(r,t)||(r=E0(),Ee.lanes|=r,Qr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=r)}function Pg(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var a=Uo.transition;Uo.transition={};try{e(!1),t()}finally{ge=r,Uo.transition=a}}function Sh(){return jt().memoizedState}function Tg(e,t,r){var a=Cr(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Ch(e))_h(t,r);else if(r=oh(e,t,r,a),r!==null){var i=Xe();Mt(r,e,a,i),zh(r,t,a)}}function Mg(e,t,r){var a=Cr(e),i={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ch(e))_h(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,r);if(i.hasEagerState=!0,i.eagerState=l,Ot(l,o)){var c=t.interleaved;c===null?(i.next=i,ed(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=oh(e,t,i,a),r!==null&&(i=Xe(),Mt(r,e,a,i),zh(r,t,a))}}function Ch(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function _h(e,t){ka=Cs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function zh(e,t,r){if(r&4194240){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Dc(e,r)}}var _s={readContext:wt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Ag={readContext:wt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:wu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ki(4194308,4,yh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var r=Ut();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=Ut();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Tg.bind(null,Ee,e),[a.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:cd,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=Pg.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Ee,i=Ut();if(_e){if(r===void 0)throw Error(F(407));r=r()}else{if(r=t(),Ue===null)throw Error(F(349));Kr&30||ph(a,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,wu(fh.bind(null,a,s,e),[e]),a.flags|=2048,$a(9,hh.bind(null,a,s,r,t),void 0,null),r},useId:function(){var e=Ut(),t=Ue.identifierPrefix;if(_e){var r=er,a=Jt;r=(a&~(1<<32-Tt(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=Da++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Rg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Og={readContext:wt,useCallback:jh,useContext:wt,useEffect:ld,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:bh,useMemo:kh,useReducer:$o,useRef:xh,useState:function(){return $o(Ua)},useDebugValue:cd,useDeferredValue:function(e){var t=jt();return Nh(t,Ie.memoizedState,e)},useTransition:function(){var e=$o(Ua)[0],t=jt().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:uh,useId:Sh,unstable_isNewReconciler:!1},Lg={readContext:wt,useCallback:jh,useContext:wt,useEffect:ld,useImperativeHandle:wh,useInsertionEffect:vh,useLayoutEffect:bh,useMemo:kh,useReducer:Ho,useRef:xh,useState:function(){return Ho(Ua)},useDebugValue:cd,useDeferredValue:function(e){var t=jt();return Ie===null?t.memoizedState=e:Nh(t,Ie.memoizedState,e)},useTransition:function(){var e=Ho(Ua)[0],t=jt().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:uh,useId:Sh,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ol(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:Pe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var eo={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=Xe(),i=Cr(e),s=tr(a,i);s.payload=t,r!=null&&(s.callback=r),t=Nr(e,s,i),t!==null&&(Mt(t,e,i,a),Zi(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=Xe(),i=Cr(e),s=tr(a,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Nr(e,s,i),t!==null&&(Mt(t,e,i,a),Zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Xe(),a=Cr(e),i=tr(r,a);i.tag=2,t!=null&&(i.callback=t),t=Nr(e,i,a),t!==null&&(Mt(t,e,a,r),Zi(t,e,a))}};function ju(e,t,r,a,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,o):t.prototype&&t.prototype.isPureReactComponent?!Aa(r,a)||!Aa(i,s):!0}function Eh(e,t,r){var a=!1,i=Rr,s=t.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=st(t)?Zr:Ke.current,a=t.contextTypes,s=(a=a!=null)?zn(e,i):Rr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ku(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function Ll(e,t,r,a){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},td(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=st(t)?Zr:Ke.current,i.context=zn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ol(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Ns(e,r,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var r="",a=t;do r+=dm(a),a=a.return;while(a);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Wo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Il(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ig=typeof WeakMap=="function"?WeakMap:Map;function Rh(e,t,r){r=tr(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){Es||(Es=!0,Yl=a),Il(e,t)},r}function Ph(e,t,r){r=tr(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;r.payload=function(){return a(i)},r.callback=function(){Il(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Il(e,t),typeof a!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Nu(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Ig;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(r)||(i.add(r),e=Qg.bind(null,e,t,r),t.then(e,e))}function Su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,r,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=tr(-1,1),t.tag=2,Nr(r,t,1))),r.lanes|=1),e)}var Fg=or.ReactCurrentOwner,at=!1;function Qe(e,t,r,a){t.child=e===null?sh(t,null,r,a):Rn(t,e.child,r,a)}function _u(e,t,r,a,i){r=r.render;var s=t.ref;return Sn(t,i),a=sd(e,t,r,a,s,i),r=od(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ir(e,t,i)):(_e&&r&&Zc(t),t.flags|=1,Qe(e,t,a,i),t.child)}function zu(e,t,r,a,i){if(e===null){var s=r.type;return typeof s=="function"&&!xd(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,Th(e,t,s,a,i)):(e=es(r.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:Aa,r(o,a)&&e.ref===t.ref)return ir(e,t,i)}return t.flags|=1,e=_r(s,a),e.ref=t.ref,e.return=t,t.child=e}function Th(e,t,r,a,i){if(e!==null){var s=e.memoizedProps;if(Aa(s,a)&&e.ref===t.ref)if(at=!1,t.pendingProps=a=s,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,ir(e,t,i)}return Fl(e,t,r,a,i)}function Mh(e,t,r){var a=t.pendingProps,i=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(bn,ut),ut|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(bn,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:r,we(bn,ut),ut|=a}else s!==null?(a=s.baseLanes|r,t.memoizedState=null):a=r,we(bn,ut),ut|=a;return Qe(e,t,i,r),t.child}function Ah(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,r,a,i){var s=st(r)?Zr:Ke.current;return s=zn(t,s),Sn(t,i),r=sd(e,t,r,a,s,i),a=od(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ir(e,t,i)):(_e&&a&&Zc(t),t.flags|=1,Qe(e,t,r,i),t.child)}function Eu(e,t,r,a,i){if(st(r)){var s=!0;bs(t)}else s=!1;if(Sn(t,i),t.stateNode===null)Qi(e,t),Eh(t,r,a),Ll(t,r,a,i),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=r.contextType;typeof d=="object"&&d!==null?d=wt(d):(d=st(r)?Zr:Ke.current,d=zn(t,d));var u=r.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||c!==d)&&ku(t,o,a,d),fr=!1;var p=t.memoizedState;o.state=p,Ns(t,a,o,i),c=t.memoizedState,l!==a||p!==c||it.current||fr?(typeof u=="function"&&(Ol(t,r,u,a),c=t.memoizedState),(l=fr||ju(t,r,l,a,p,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=c),o.props=a,o.state=c,o.context=d,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,lh(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:zt(t.type,l),o.props=d,h=t.pendingProps,p=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=wt(c):(c=st(r)?Zr:Ke.current,c=zn(t,c));var x=r.getDerivedStateFromProps;(u=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||p!==c)&&ku(t,o,a,c),fr=!1,p=t.memoizedState,o.state=p,Ns(t,a,o,i);var m=t.memoizedState;l!==h||p!==m||it.current||fr?(typeof x=="function"&&(Ol(t,r,x,a),m=t.memoizedState),(d=fr||ju(t,r,d,a,p,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,m,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,m,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=m),o.props=a,o.state=m,o.context=c,a=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return Bl(e,t,r,a,s,i)}function Bl(e,t,r,a,i,s){Ah(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&fu(t,r,!1),ir(e,t,s);a=t.stateNode,Fg.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=Rn(t,e.child,null,s),t.child=Rn(t,null,l,s)):Qe(e,t,l,s),t.memoizedState=a.state,i&&fu(t,r,!0),t.child}function Oh(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),rd(e,t.containerInfo)}function Ru(e,t,r,a,i){return En(),Kc(i),t.flags|=256,Qe(e,t,r,a),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lh(e,t,r){var a=t.pendingProps,i=ze.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(ze,i&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,s?(a=t.mode,s=t.child,o={mode:"hidden",children:o},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=no(o,a,0,null),e=qr(e,a,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ul(r),t.memoizedState=Dl,e):dd(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Bg(e,t,o,a,l,i,r);if(s){s=a.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=c,t.deletions=null):(a=_r(i,c),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=qr(s,o,r,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,a=s,s=t.child,o=e.child.memoizedState,o=o===null?Ul(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=Dl,a}return s=e.child,e=s.sibling,a=_r(s,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function dd(e,t){return t=no({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,r,a){return a!==null&&Kc(a),Rn(t,e.child,null,r),e=dd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bg(e,t,r,a,i,s,o){if(r)return t.flags&256?(t.flags&=-257,a=Wo(Error(F(422))),Ai(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=a.fallback,i=t.mode,a=no({mode:"visible",children:a.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,t.mode&1&&Rn(t,e.child,null,o),t.child.memoizedState=Ul(o),t.memoizedState=Dl,s);if(!(t.mode&1))return Ai(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(F(419)),a=Wo(s,a,void 0),Ai(e,t,o,a)}if(l=(o&e.childLanes)!==0,at||l){if(a=Ue,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(e,i),Mt(a,e,i,-1))}return gd(),a=Wo(Error(F(421))),Ai(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xg.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,pt=kr(i.nextSibling),ht=t,_e=!0,Pt=null,e!==null&&(xt[vt++]=Jt,xt[vt++]=er,xt[vt++]=Gr,Jt=e.id,er=e.overflow,Gr=t),t=dd(t,a.children),t.flags|=4096,t)}function Pu(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Al(e.return,t,r)}function qo(e,t,r,a,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=r,s.tailMode=i)}function Ih(e,t,r){var a=t.pendingProps,i=a.revealOrder,s=a.tail;if(Qe(e,t,a.children,r),a=ze.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,r,t);else if(e.tag===19)Pu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(we(ze,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ss(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),qo(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ss(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}qo(t,!0,r,null,s);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ir(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Qr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,r=_r(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=_r(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Dg(e,t,r){switch(t.tag){case 3:Oh(t),En();break;case 5:ch(t);break;case 1:st(t.type)&&bs(t);break;case 4:rd(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;we(js,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(we(ze,ze.current&1),t.flags|=128,null):r&t.child.childLanes?Lh(e,t,r):(we(ze,ze.current&1),e=ir(e,t,r),e!==null?e.sibling:null);we(ze,ze.current&1);break;case 19:if(a=(r&t.childLanes)!==0,e.flags&128){if(a)return Ih(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(ze,ze.current),a)break;return null;case 22:case 23:return t.lanes=0,Mh(e,t,r)}return ir(e,t,r)}var Fh,$l,Bh,Dh;Fh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};$l=function(){};Bh=function(e,t,r,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,$r(Wt.current);var s=null;switch(r){case"input":i=dl(e,i),a=dl(e,a),s=[];break;case"select":i=Pe({},i,{value:void 0}),a=Pe({},a,{value:void 0}),s=[];break;case"textarea":i=hl(e,i),a=hl(e,a),s=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=xs)}ml(r,a);var o;r=null;for(d in i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(_a.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in a){var c=a[d];if(l=i!=null?i[d]:void 0,a.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(_a.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ke("scroll",e),s||l===c||(s=[])):(s=s||[]).push(d,c))}r&&(s=s||[]).push("style",r);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Dh=function(e,t,r,a){r!==a&&(t.flags|=4)};function aa(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function Ug(e,t,r){var a=t.pendingProps;switch(Gc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return st(t.type)&&vs(),Ye(t),null;case 3:return a=t.stateNode,Pn(),Ne(it),Ne(Ke),ad(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Kl(Pt),Pt=null))),$l(e,t),Ye(t),null;case 5:nd(t);var i=$r(Ba.current);if(r=t.type,e!==null&&t.stateNode!=null)Bh(e,t,r,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(F(166));return Ye(t),null}if(e=$r(Wt.current),Ti(t)){a=t.stateNode,r=t.type;var s=t.memoizedProps;switch(a[$t]=t,a[Ia]=s,e=(t.mode&1)!==0,r){case"dialog":ke("cancel",a),ke("close",a);break;case"iframe":case"object":case"embed":ke("load",a);break;case"video":case"audio":for(i=0;i<fa.length;i++)ke(fa[i],a);break;case"source":ke("error",a);break;case"img":case"image":case"link":ke("error",a),ke("load",a);break;case"details":ke("toggle",a);break;case"input":Dd(a,s),ke("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},ke("invalid",a);break;case"textarea":$d(a,s),ke("invalid",a)}ml(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Pi(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Pi(a.textContent,l,e),i=["children",""+l]):_a.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",a)}switch(r){case"input":ki(a),Ud(a,s,!0);break;case"textarea":ki(a),Hd(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=xs)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=f0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(r,{is:a.is}):(e=o.createElement(r),r==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,r),e[$t]=t,e[Ia]=a,Fh(e,t,!1,!1),t.stateNode=e;e:{switch(o=gl(r,a),r){case"dialog":ke("cancel",e),ke("close",e),i=a;break;case"iframe":case"object":case"embed":ke("load",e),i=a;break;case"video":case"audio":for(i=0;i<fa.length;i++)ke(fa[i],e);i=a;break;case"source":ke("error",e),i=a;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=a;break;case"details":ke("toggle",e),i=a;break;case"input":Dd(e,a),i=dl(e,a),ke("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=Pe({},a,{value:void 0}),ke("invalid",e);break;case"textarea":$d(e,a),i=hl(e,a),ke("invalid",e);break;default:i=a}ml(r,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?x0(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&m0(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&za(e,c):typeof c=="number"&&za(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ke("scroll",e):c!=null&&Ac(e,s,c,o))}switch(r){case"input":ki(e),Ud(e,a,!1);break;case"textarea":ki(e),Hd(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Er(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?wn(e,!!a.multiple,s,!1):a.defaultValue!=null&&wn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xs)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Dh(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(F(166));if(r=$r(Ba.current),$r(Wt.current),Ti(t)){if(a=t.stateNode,r=t.memoizedProps,a[$t]=t,(s=a.nodeValue!==r)&&(e=ht,e!==null))switch(e.tag){case 3:Pi(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(a.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[$t]=t,t.stateNode=a}return Ye(t),null;case 13:if(Ne(ze),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_e&&pt!==null&&t.mode&1&&!(t.flags&128))ah(),En(),t.flags|=98560,s=!1;else if(s=Ti(t),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(F(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[$t]=t}else En(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),s=!1}else Pt!==null&&(Kl(Pt),Pt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||ze.current&1?Fe===0&&(Fe=3):gd())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Pn(),$l(e,t),e===null&&Oa(t.stateNode.containerInfo),Ye(t),null;case 10:return Jc(t.type._context),Ye(t),null;case 17:return st(t.type)&&vs(),Ye(t),null;case 19:if(Ne(ze),s=t.memoizedState,s===null)return Ye(t),null;if(a=(t.flags&128)!==0,o=s.rendering,o===null)if(a)aa(s,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ss(e),o!==null){for(t.flags|=128,aa(s,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)s=r,e=a,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return we(ze,ze.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ae()>Mn&&(t.flags|=128,a=!0,aa(s,!1),t.lanes=4194304)}else{if(!a)if(e=Ss(o),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return Ye(t),null}else 2*Ae()-s.renderingStartTime>Mn&&r!==1073741824&&(t.flags|=128,a=!0,aa(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ae(),t.sibling=null,r=ze.current,we(ze,a?r&1|2:r&1),t):(Ye(t),null);case 22:case 23:return md(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?ut&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function $g(e,t){switch(Gc(t),t.tag){case 1:return st(t.type)&&vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),Ne(it),Ne(Ke),ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nd(t),null;case 13:if(Ne(ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(ze),null;case 4:return Pn(),null;case 10:return Jc(t.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Oi=!1,Ze=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,q=null;function vn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Me(e,t,a)}else r.current=null}function Hl(e,t,r){try{r()}catch(a){Me(e,t,a)}}var Tu=!1;function Wg(e,t){if(Cl=fs,e=q0(),Yc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,d=0,u=0,h=e,p=null;t:for(;;){for(var x;h!==r||i!==0&&h.nodeType!==3||(l=o+i),h!==s||a!==0&&h.nodeType!==3||(c=o+a),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)p=h,h=x;for(;;){if(h===e)break t;if(p===r&&++d===i&&(l=o),p===s&&++u===a&&(c=o),(x=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=x}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(_l={focusedElem:e,selectionRange:r},fs=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,w=m.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:zt(t.type,y),w);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(j){Me(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return m=Tu,Tu=!1,m}function Na(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hl(t,r,s)}i=i.next}while(i!==a)}}function to(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function Wl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Uh(e){var t=e.alternate;t!==null&&(e.alternate=null,Uh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Ia],delete t[Rl],delete t[Cg],delete t[_g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $h(e){return e.tag===5||e.tag===3||e.tag===4}function Mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xs));else if(a!==4&&(e=e.child,e!==null))for(ql(e,t,r),e=e.sibling;e!==null;)ql(e,t,r),e=e.sibling}function Vl(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Vl(e,t,r),e=e.sibling;e!==null;)Vl(e,t,r),e=e.sibling}var He=null,Rt=!1;function dr(e,t,r){for(r=r.child;r!==null;)Hh(e,t,r),r=r.sibling}function Hh(e,t,r){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Ys,r)}catch{}switch(r.tag){case 5:Ze||vn(r,t);case 6:var a=He,i=Rt;He=null,dr(e,t,r),He=a,Rt=i,He!==null&&(Rt?(e=He,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):He.removeChild(r.stateNode));break;case 18:He!==null&&(Rt?(e=He,r=r.stateNode,e.nodeType===8?Fo(e.parentNode,r):e.nodeType===1&&Fo(e,r),Ta(e)):Fo(He,r.stateNode));break;case 4:a=He,i=Rt,He=r.stateNode.containerInfo,Rt=!0,dr(e,t,r),He=a,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hl(r,t,o),i=i.next}while(i!==a)}dr(e,t,r);break;case 1:if(!Ze&&(vn(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(l){Me(r,t,l)}dr(e,t,r);break;case 21:dr(e,t,r);break;case 22:r.mode&1?(Ze=(a=Ze)||r.memoizedState!==null,dr(e,t,r),Ze=a):dr(e,t,r);break;default:dr(e,t,r)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Hg),t.forEach(function(a){var i=Jg.bind(null,e,a);r.has(a)||(r.add(a),a.then(i,i))})}}function Ct(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Rt=!1;break e;case 3:He=l.stateNode.containerInfo,Rt=!0;break e;case 4:He=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(He===null)throw Error(F(160));Hh(s,o,i),He=null,Rt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Me(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wh(t,e),t=t.sibling}function Wh(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Bt(e),a&4){try{Na(3,e,e.return),to(3,e)}catch(y){Me(e,e.return,y)}try{Na(5,e,e.return)}catch(y){Me(e,e.return,y)}}break;case 1:Ct(t,e),Bt(e),a&512&&r!==null&&vn(r,r.return);break;case 5:if(Ct(t,e),Bt(e),a&512&&r!==null&&vn(r,r.return),e.flags&32){var i=e.stateNode;try{za(i,"")}catch(y){Me(e,e.return,y)}}if(a&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&p0(i,s),gl(l,o);var d=gl(l,s);for(o=0;o<c.length;o+=2){var u=c[o],h=c[o+1];u==="style"?x0(i,h):u==="dangerouslySetInnerHTML"?m0(i,h):u==="children"?za(i,h):Ac(i,u,h,d)}switch(l){case"input":ul(i,s);break;case"textarea":h0(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?wn(i,!!s.multiple,x,!1):p!==!!s.multiple&&(s.defaultValue!=null?wn(i,!!s.multiple,s.defaultValue,!0):wn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ia]=s}catch(y){Me(e,e.return,y)}}break;case 6:if(Ct(t,e),Bt(e),a&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){Me(e,e.return,y)}}break;case 3:if(Ct(t,e),Bt(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Ta(t.containerInfo)}catch(y){Me(e,e.return,y)}break;case 4:Ct(t,e),Bt(e);break;case 13:Ct(t,e),Bt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hd=Ae())),a&4&&Au(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Ze=(d=Ze)||u,Ct(t,e),Ze=d):Ct(t,e),Bt(e),a&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(q=e,u=e.child;u!==null;){for(h=q=u;q!==null;){switch(p=q,x=p.child,p.tag){case 0:case 11:case 14:case 15:Na(4,p,p.return);break;case 1:vn(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){a=p,r=p.return;try{t=a,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){Me(a,r,y)}}break;case 5:vn(p,p.return);break;case 22:if(p.memoizedState!==null){Lu(h);continue}}x!==null?(x.return=p,q=x):Lu(h)}u=u.sibling}e:for(u=null,h=e;;){if(h.tag===5){if(u===null){u=h;try{i=h.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=g0("display",o))}catch(y){Me(e,e.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){Me(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ct(t,e),Bt(e),a&4&&Au(e);break;case 21:break;default:Ct(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if($h(r)){var a=r;break e}r=r.return}throw Error(F(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(za(i,""),a.flags&=-33);var s=Mu(e);Vl(e,s,i);break;case 3:case 4:var o=a.stateNode.containerInfo,l=Mu(e);ql(e,l,o);break;default:throw Error(F(161))}}catch(c){Me(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qg(e,t,r){q=e,qh(e)}function qh(e,t,r){for(var a=(e.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Oi;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ze;l=Oi;var d=Ze;if(Oi=o,(Ze=c)&&!d)for(q=i;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null?Iu(i):c!==null?(c.return=o,q=c):Iu(i);for(;s!==null;)q=s,qh(s),s=s.sibling;q=i,Oi=l,Ze=d}Ou(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Ou(e)}}function Ou(e){for(;q!==null;){var t=q;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||to(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ze)if(r===null)a.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:zt(t.type,r.memoizedProps);a.componentDidUpdate(i,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&bu(t,s,a);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}bu(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||t.flags&512&&Wl(t)}catch(p){Me(t,t.return,p)}}if(t===e){q=null;break}if(r=t.sibling,r!==null){r.return=t.return,q=r;break}q=t.return}}function Lu(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var r=t.sibling;if(r!==null){r.return=t.return,q=r;break}q=t.return}}function Iu(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{to(4,t)}catch(c){Me(t,r,c)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(c){Me(t,i,c)}}var s=t.return;try{Wl(t)}catch(c){Me(t,s,c)}break;case 5:var o=t.return;try{Wl(t)}catch(c){Me(t,o,c)}}}catch(c){Me(t,t.return,c)}if(t===e){q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,q=l;break}q=t.return}}var Vg=Math.ceil,zs=or.ReactCurrentDispatcher,ud=or.ReactCurrentOwner,yt=or.ReactCurrentBatchConfig,pe=0,Ue=null,Oe=null,We=0,ut=0,bn=Ar(0),Fe=0,Ha=null,Qr=0,ro=0,pd=0,Sa=null,nt=null,hd=0,Mn=1/0,Kt=null,Es=!1,Yl=null,Sr=null,Li=!1,vr=null,Rs=0,Ca=0,Zl=null,Xi=-1,Ji=0;function Xe(){return pe&6?Ae():Xi!==-1?Xi:Xi=Ae()}function Cr(e){return e.mode&1?pe&2&&We!==0?We&-We:Eg.transition!==null?(Ji===0&&(Ji=E0()),Ji):(e=ge,e!==0||(e=window.event,e=e===void 0?16:L0(e.type)),e):1}function Mt(e,t,r,a){if(50<Ca)throw Ca=0,Zl=null,Error(F(185));ci(e,r,a),(!(pe&2)||e!==Ue)&&(e===Ue&&(!(pe&2)&&(ro|=r),Fe===4&&gr(e,We)),ot(e,a),r===1&&pe===0&&!(t.mode&1)&&(Mn=Ae()+500,Xs&&Or()))}function ot(e,t){var r=e.callbackNode;Em(e,t);var a=hs(e,e===Ue?We:0);if(a===0)r!==null&&Vd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&Vd(r),t===1)e.tag===0?zg(Fu.bind(null,e)):th(Fu.bind(null,e)),Ng(function(){!(pe&6)&&Or()}),r=null;else{switch(R0(a)){case 1:r=Bc;break;case 4:r=_0;break;case 16:r=ps;break;case 536870912:r=z0;break;default:r=ps}r=Jh(r,Vh.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vh(e,t){if(Xi=-1,Ji=0,pe&6)throw Error(F(327));var r=e.callbackNode;if(Cn()&&e.callbackNode!==r)return null;var a=hs(e,e===Ue?We:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Ps(e,a);else{t=a;var i=pe;pe|=2;var s=Zh();(Ue!==e||We!==t)&&(Kt=null,Mn=Ae()+500,Wr(e,t));do try{Gg();break}catch(l){Yh(e,l)}while(!0);Xc(),zs.current=s,pe=i,Oe!==null?t=0:(Ue=null,We=0,t=Fe)}if(t!==0){if(t===2&&(i=wl(e),i!==0&&(a=i,t=Gl(e,i))),t===1)throw r=Ha,Wr(e,0),gr(e,a),ot(e,Ae()),r;if(t===6)gr(e,a);else{if(i=e.current.alternate,!(a&30)&&!Yg(i)&&(t=Ps(e,a),t===2&&(s=wl(e),s!==0&&(a=s,t=Gl(e,s))),t===1))throw r=Ha,Wr(e,0),gr(e,a),ot(e,Ae()),r;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(F(345));case 2:Fr(e,nt,Kt);break;case 3:if(gr(e,a),(a&130023424)===a&&(t=hd+500-Ae(),10<t)){if(hs(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=El(Fr.bind(null,e,nt,Kt),t);break}Fr(e,nt,Kt);break;case 4:if(gr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-Tt(a);s=1<<o,o=t[o],o>i&&(i=o),a&=~s}if(a=i,a=Ae()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Vg(a/1960))-a,10<a){e.timeoutHandle=El(Fr.bind(null,e,nt,Kt),a);break}Fr(e,nt,Kt);break;case 5:Fr(e,nt,Kt);break;default:throw Error(F(329))}}}return ot(e,Ae()),e.callbackNode===r?Vh.bind(null,e):null}function Gl(e,t){var r=Sa;return e.current.memoizedState.isDehydrated&&(Wr(e,t).flags|=256),e=Ps(e,t),e!==2&&(t=nt,nt=r,t!==null&&Kl(t)),e}function Kl(e){nt===null?nt=e:nt.push.apply(nt,e)}function Yg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var i=r[a],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gr(e,t){for(t&=~pd,t&=~ro,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Tt(t),a=1<<r;e[r]=-1,t&=~a}}function Fu(e){if(pe&6)throw Error(F(327));Cn();var t=hs(e,0);if(!(t&1))return ot(e,Ae()),null;var r=Ps(e,t);if(e.tag!==0&&r===2){var a=wl(e);a!==0&&(t=a,r=Gl(e,a))}if(r===1)throw r=Ha,Wr(e,0),gr(e,t),ot(e,Ae()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fr(e,nt,Kt),ot(e,Ae()),null}function fd(e,t){var r=pe;pe|=1;try{return e(t)}finally{pe=r,pe===0&&(Mn=Ae()+500,Xs&&Or())}}function Xr(e){vr!==null&&vr.tag===0&&!(pe&6)&&Cn();var t=pe;pe|=1;var r=yt.transition,a=ge;try{if(yt.transition=null,ge=1,e)return e()}finally{ge=a,yt.transition=r,pe=t,!(pe&6)&&Or()}}function md(){ut=bn.current,Ne(bn)}function Wr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,kg(r)),Oe!==null)for(r=Oe.return;r!==null;){var a=r;switch(Gc(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&vs();break;case 3:Pn(),Ne(it),Ne(Ke),ad();break;case 5:nd(a);break;case 4:Pn();break;case 13:Ne(ze);break;case 19:Ne(ze);break;case 10:Jc(a.type._context);break;case 22:case 23:md()}r=r.return}if(Ue=e,Oe=e=_r(e.current,null),We=ut=t,Fe=0,Ha=null,pd=ro=Qr=0,nt=Sa=null,Ur!==null){for(t=0;t<Ur.length;t++)if(r=Ur[t],a=r.interleaved,a!==null){r.interleaved=null;var i=a.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,a.next=o}r.pending=a}Ur=null}return e}function Yh(e,t){do{var r=Oe;try{if(Xc(),Gi.current=_s,Cs){for(var a=Ee.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Cs=!1}if(Kr=0,De=Ie=Ee=null,ka=!1,Da=0,ud.current=null,r===null||r.return===null){Fe=1,Ha=t,Oe=null;break}e:{var s=e,o=r.return,l=r,c=t;if(t=We,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var x=Su(o);if(x!==null){x.flags&=-257,Cu(x,o,l,s,t),x.mode&1&&Nu(s,d,t),t=x,c=d;var m=t.updateQueue;if(m===null){var y=new Set;y.add(c),t.updateQueue=y}else m.add(c);break e}else{if(!(t&1)){Nu(s,d,t),gd();break e}c=Error(F(426))}}else if(_e&&l.mode&1){var w=Su(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Cu(w,o,l,s,t),Kc(Tn(c,l));break e}}s=c=Tn(c,l),Fe!==4&&(Fe=2),Sa===null?Sa=[s]:Sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=Rh(s,c,t);vu(s,v);break e;case 1:l=c;var g=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sr===null||!Sr.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=Ph(s,l,t);vu(s,j);break e}}s=s.return}while(s!==null)}Kh(r)}catch(k){t=k,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function Zh(){var e=zs.current;return zs.current=_s,e===null?_s:e}function gd(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||!(Qr&268435455)&&!(ro&268435455)||gr(Ue,We)}function Ps(e,t){var r=pe;pe|=2;var a=Zh();(Ue!==e||We!==t)&&(Kt=null,Wr(e,t));do try{Zg();break}catch(i){Yh(e,i)}while(!0);if(Xc(),pe=r,zs.current=a,Oe!==null)throw Error(F(261));return Ue=null,We=0,Fe}function Zg(){for(;Oe!==null;)Gh(Oe)}function Gg(){for(;Oe!==null&&!ym();)Gh(Oe)}function Gh(e){var t=Xh(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Kh(e):Oe=t,ud.current=null}function Kh(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=$g(r,t),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Oe=null;return}}else if(r=Ug(r,t,ut),r!==null){Oe=r;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Fe===0&&(Fe=5)}function Fr(e,t,r){var a=ge,i=yt.transition;try{yt.transition=null,ge=1,Kg(e,t,r,a)}finally{yt.transition=i,ge=a}return null}function Kg(e,t,r,a){do Cn();while(vr!==null);if(pe&6)throw Error(F(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Rm(e,s),e===Ue&&(Oe=Ue=null,We=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Li||(Li=!0,Jh(ps,function(){return Cn(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=ge;ge=1;var l=pe;pe|=4,ud.current=null,Wg(e,r),Wh(r,e),gg(_l),fs=!!Cl,_l=Cl=null,e.current=r,qg(r),wm(),pe=l,ge=o,yt.transition=s}else e.current=r;if(Li&&(Li=!1,vr=e,Rs=i),s=e.pendingLanes,s===0&&(Sr=null),Nm(r.stateNode),ot(e,Ae()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],a(i.value,{componentStack:i.stack,digest:i.digest});if(Es)throw Es=!1,e=Yl,Yl=null,e;return Rs&1&&e.tag!==0&&Cn(),s=e.pendingLanes,s&1?e===Zl?Ca++:(Ca=0,Zl=e):Ca=0,Or(),null}function Cn(){if(vr!==null){var e=R0(Rs),t=yt.transition,r=ge;try{if(yt.transition=null,ge=16>e?16:e,vr===null)var a=!1;else{if(e=vr,vr=null,Rs=0,pe&6)throw Error(F(331));var i=pe;for(pe|=4,q=e.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(q=d;q!==null;){var u=q;switch(u.tag){case 0:case 11:case 15:Na(8,u,s)}var h=u.child;if(h!==null)h.return=u,q=h;else for(;q!==null;){u=q;var p=u.sibling,x=u.return;if(Uh(u),u===d){q=null;break}if(p!==null){p.return=x,q=p;break}q=x}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,q=v;break e}q=s.return}}var g=e.current;for(q=g;q!==null;){o=q;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,q=f;else e:for(o=g;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:to(9,l)}}catch(k){Me(l,l.return,k)}if(l===o){q=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,q=j;break e}q=l.return}}if(pe=i,Or(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Ys,e)}catch{}a=!0}return a}finally{ge=r,yt.transition=t}}return!1}function Bu(e,t,r){t=Tn(r,t),t=Rh(e,t,1),e=Nr(e,t,1),t=Xe(),e!==null&&(ci(e,1,t),ot(e,t))}function Me(e,t,r){if(e.tag===3)Bu(e,e,r);else for(;t!==null;){if(t.tag===3){Bu(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sr===null||!Sr.has(a))){e=Tn(r,e),e=Ph(t,e,1),t=Nr(t,e,1),e=Xe(),t!==null&&(ci(t,1,e),ot(t,e));break}}t=t.return}}function Qg(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(We&r)===r&&(Fe===4||Fe===3&&(We&130023424)===We&&500>Ae()-hd?Wr(e,0):pd|=r),ot(e,t)}function Qh(e,t){t===0&&(e.mode&1?(t=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):t=1);var r=Xe();e=ar(e,t),e!==null&&(ci(e,t,r),ot(e,r))}function Xg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Qh(e,r)}function Jg(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(F(314))}a!==null&&a.delete(t),Qh(e,r)}var Xh;Xh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)at=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return at=!1,Dg(e,t,r);at=!!(e.flags&131072)}else at=!1,_e&&t.flags&1048576&&rh(t,ws,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Qi(e,t),e=t.pendingProps;var i=zn(t,Ke.current);Sn(t,r),i=sd(null,t,a,e,i,r);var s=od();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(a)?(s=!0,bs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,td(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,Ll(t,a,e,r),t=Bl(null,t,a,!0,s,r)):(t.tag=0,_e&&s&&Zc(t),Qe(null,t,i,r),t=t.child),t;case 16:a=t.elementType;e:{switch(Qi(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=tx(a),e=zt(a,e),i){case 0:t=Fl(null,t,a,e,r);break e;case 1:t=Eu(null,t,a,e,r);break e;case 11:t=_u(null,t,a,e,r);break e;case 14:t=zu(null,t,a,zt(a.type,e),r);break e}throw Error(F(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:zt(a,i),Fl(e,t,a,i,r);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:zt(a,i),Eu(e,t,a,i,r);case 3:e:{if(Oh(t),e===null)throw Error(F(387));a=t.pendingProps,s=t.memoizedState,i=s.element,lh(e,t),Ns(t,a,null,r);var o=t.memoizedState;if(a=o.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Tn(Error(F(423)),t),t=Ru(e,t,a,r,i);break e}else if(a!==i){i=Tn(Error(F(424)),t),t=Ru(e,t,a,r,i);break e}else for(pt=kr(t.stateNode.containerInfo.firstChild),ht=t,_e=!0,Pt=null,r=sh(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(En(),a===i){t=ir(e,t,r);break e}Qe(e,t,a,r)}t=t.child}return t;case 5:return ch(t),e===null&&Ml(t),a=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,zl(a,i)?o=null:s!==null&&zl(a,s)&&(t.flags|=32),Ah(e,t),Qe(e,t,o,r),t.child;case 6:return e===null&&Ml(t),null;case 13:return Lh(e,t,r);case 4:return rd(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Rn(t,null,a,r):Qe(e,t,a,r),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:zt(a,i),_u(e,t,a,i,r);case 7:return Qe(e,t,t.pendingProps,r),t.child;case 8:return Qe(e,t,t.pendingProps.children,r),t.child;case 12:return Qe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,we(js,a._currentValue),a._currentValue=o,s!==null)if(Ot(s.value,o)){if(s.children===i.children&&!it.current){t=ir(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===a){if(s.tag===1){c=tr(-1,r&-r),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Al(s.return,r,t),l.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Al(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Sn(t,r),i=wt(i),a=a(i),t.flags|=1,Qe(e,t,a,r),t.child;case 14:return a=t.type,i=zt(a,t.pendingProps),i=zt(a.type,i),zu(e,t,a,i,r);case 15:return Th(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:zt(a,i),Qi(e,t),t.tag=1,st(a)?(e=!0,bs(t)):e=!1,Sn(t,r),Eh(t,a,i),Ll(t,a,i,r),Bl(null,t,a,!0,e,r);case 19:return Ih(e,t,r);case 22:return Mh(e,t,r)}throw Error(F(156,t.tag))};function Jh(e,t){return C0(e,t)}function ex(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,r,a){return new ex(e,t,r,a)}function xd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tx(e){if(typeof e=="function")return xd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lc)return 11;if(e===Ic)return 14}return 2}function _r(e,t){var r=e.alternate;return r===null?(r=bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function es(e,t,r,a,i,s){var o=2;if(a=e,typeof e=="function")xd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case cn:return qr(r.children,i,s,t);case Oc:o=8,i|=8;break;case sl:return e=bt(12,r,t,i|2),e.elementType=sl,e.lanes=s,e;case ol:return e=bt(13,r,t,i),e.elementType=ol,e.lanes=s,e;case ll:return e=bt(19,r,t,i),e.elementType=ll,e.lanes=s,e;case c0:return no(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case o0:o=10;break e;case l0:o=9;break e;case Lc:o=11;break e;case Ic:o=14;break e;case hr:o=16,a=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=bt(o,r,t,i),t.elementType=e,t.type=a,t.lanes=s,t}function qr(e,t,r,a){return e=bt(7,e,a,t),e.lanes=r,e}function no(e,t,r,a){return e=bt(22,e,a,t),e.elementType=c0,e.lanes=r,e.stateNode={isHidden:!1},e}function Vo(e,t,r){return e=bt(6,e,null,t),e.lanes=r,e}function Yo(e,t,r){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rx(e,t,r,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_o(0),this.expirationTimes=_o(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vd(e,t,r,a,i,s,o,l,c){return e=new rx(e,t,r,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=bt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(s),e}function nx(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function e1(e){if(!e)return Rr;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(st(r))return eh(e,r,t)}return t}function t1(e,t,r,a,i,s,o,l,c){return e=vd(r,a,!0,e,i,s,o,l,c),e.context=e1(null),r=e.current,a=Xe(),i=Cr(r),s=tr(a,i),s.callback=t??null,Nr(r,s,i),e.current.lanes=i,ci(e,i,a),ot(e,a),e}function ao(e,t,r,a){var i=t.current,s=Xe(),o=Cr(i);return r=e1(r),t.context===null?t.context=r:t.pendingContext=r,t=tr(s,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Nr(i,t,o),e!==null&&(Mt(e,i,o,s),Zi(e,i,o)),o}function Ts(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function bd(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function ax(){return null}var r1=typeof reportError=="function"?reportError:function(e){console.error(e)};function yd(e){this._internalRoot=e}io.prototype.render=yd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));ao(e,t,null,null)};io.prototype.unmount=yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xr(function(){ao(null,e,null,null)}),t[nr]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=M0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<mr.length&&t!==0&&t<mr[r].priority;r++);mr.splice(r,0,e),r===0&&O0(e)}};function wd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function so(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function ix(e,t,r,a,i){if(i){if(typeof a=="function"){var s=a;a=function(){var d=Ts(o);s.call(d)}}var o=t1(t,a,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=o,e[nr]=o.current,Oa(e.nodeType===8?e.parentNode:e),Xr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var d=Ts(c);l.call(d)}}var c=vd(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=c,e[nr]=c.current,Oa(e.nodeType===8?e.parentNode:e),Xr(function(){ao(t,c,r,a)}),c}function oo(e,t,r,a,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=Ts(o);l.call(c)}}ao(t,o,e,i)}else o=ix(r,t,e,i,a);return Ts(o)}P0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ha(t.pendingLanes);r!==0&&(Dc(t,r|1),ot(t,Ae()),!(pe&6)&&(Mn=Ae()+500,Or()))}break;case 13:Xr(function(){var a=ar(e,1);if(a!==null){var i=Xe();Mt(a,e,1,i)}}),bd(e,1)}};Uc=function(e){if(e.tag===13){var t=ar(e,134217728);if(t!==null){var r=Xe();Mt(t,e,134217728,r)}bd(e,134217728)}};T0=function(e){if(e.tag===13){var t=Cr(e),r=ar(e,t);if(r!==null){var a=Xe();Mt(r,e,t,a)}bd(e,t)}};M0=function(){return ge};A0=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}};vl=function(e,t,r){switch(t){case"input":if(ul(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var i=Qs(a);if(!i)throw Error(F(90));u0(a),ul(a,i)}}}break;case"textarea":h0(e,r);break;case"select":t=r.value,t!=null&&wn(e,!!r.multiple,t,!1)}};y0=fd;w0=Xr;var sx={usingClientEntryPoint:!1,Events:[ui,hn,Qs,v0,b0,fd]},ia={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ox={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=N0(e),e===null?null:e.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Ys=Ii.inject(ox),Ht=Ii}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;mt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(t))throw Error(F(200));return nx(e,t,null,r)};mt.createRoot=function(e,t){if(!wd(e))throw Error(F(299));var r=!1,a="",i=r1;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vd(e,1,!1,null,null,r,!1,a,i),e[nr]=t.current,Oa(e.nodeType===8?e.parentNode:e),new yd(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=N0(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return Xr(e)};mt.hydrate=function(e,t,r){if(!so(t))throw Error(F(200));return oo(null,e,t,!0,r)};mt.hydrateRoot=function(e,t,r){if(!wd(e))throw Error(F(405));var a=r!=null&&r.hydratedSources||null,i=!1,s="",o=r1;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=t1(t,null,e,1,r??null,i,!1,s,o),e[nr]=t.current,Oa(e),a)for(e=0;e<a.length;e++)r=a[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new io(t)};mt.render=function(e,t,r){if(!so(t))throw Error(F(200));return oo(null,e,t,!1,r)};mt.unmountComponentAtNode=function(e){if(!so(e))throw Error(F(40));return e._reactRootContainer?(Xr(function(){oo(null,null,e,!1,function(){e._reactRootContainer=null,e[nr]=null})}),!0):!1};mt.unstable_batchedUpdates=fd;mt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!so(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return oo(e,t,r,!1,a)};mt.version="18.3.1-next-f1338f8080-20240426";function n1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n1)}catch(e){console.error(e)}}n1(),n0.exports=mt;var lx=n0.exports,$u=lx;al.createRoot=$u.createRoot,al.hydrateRoot=$u.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Wa.apply(this,arguments)}var br;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(br||(br={}));const Hu="popstate";function cx(e){e===void 0&&(e={});function t(a,i){let{pathname:s,search:o,hash:l}=a.location;return Ql("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(a,i){return typeof i=="string"?i:Ms(i)}return ux(t,r,null,e)}function Re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function a1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function dx(){return Math.random().toString(36).substr(2,8)}function Wu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ql(e,t,r,a){return r===void 0&&(r=null),Wa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wn(t):t,{state:r,key:t&&t.key||a||dx()})}function Ms(e){let{pathname:t="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Wn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function ux(e,t,r,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,o=i.history,l=br.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(Wa({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function h(){l=br.Pop;let w=u(),v=w==null?null:w-d;d=w,c&&c({action:l,location:y.location,delta:v})}function p(w,v){l=br.Push;let g=Ql(y.location,w,v);d=u()+1;let f=Wu(g,d),j=y.createHref(g);try{o.pushState(f,"",j)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(j)}s&&c&&c({action:l,location:y.location,delta:1})}function x(w,v){l=br.Replace;let g=Ql(y.location,w,v);d=u();let f=Wu(g,d),j=y.createHref(g);o.replaceState(f,"",j),s&&c&&c({action:l,location:y.location,delta:0})}function m(w){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:Ms(w);return g=g.replace(/ $/,"%20"),Re(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let y={get action(){return l},get location(){return e(i,o)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Hu,h),c=w,()=>{i.removeEventListener(Hu,h),c=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let v=m(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:x,go(w){return o.go(w)}};return y}var qu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qu||(qu={}));function px(e,t,r){return r===void 0&&(r="/"),hx(e,t,r)}function hx(e,t,r,a){let i=typeof t=="string"?Wn(t):t,s=An(i.pathname||"/",r);if(s==null)return null;let o=i1(e);fx(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=Sx(s);l=kx(o[c],d)}return l}function i1(e,t,r,a){t===void 0&&(t=[]),r===void 0&&(r=[]),a===void 0&&(a="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Re(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let d=zr([a,c.relativePath]),u=r.concat(c);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),i1(s.children,t,u,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:wx(d,s.index),routesMeta:u})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of s1(s.path))i(s,o,c)}),t}function s1(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(a.length===0)return i?[s,""]:[s];let o=s1(a.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function fx(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:jx(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const mx=/^:[\w-]+$/,gx=3,xx=2,vx=1,bx=10,yx=-2,Vu=e=>e==="*";function wx(e,t){let r=e.split("/"),a=r.length;return r.some(Vu)&&(a+=yx),t&&(a+=xx),r.filter(i=>!Vu(i)).reduce((i,s)=>i+(mx.test(s)?gx:s===""?vx:bx),a)}function jx(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function kx(e,t,r){let{routesMeta:a}=e,i={},s="/",o=[];for(let l=0;l<a.length;++l){let c=a[l],d=l===a.length-1,u=s==="/"?t:t.slice(s.length)||"/",h=Xl({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),p=c.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:zr([s,h.pathname]),pathnameBase:Ex(zr([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=zr([s,h.pathnameBase]))}return o}function Xl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=Nx(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((d,u,h)=>{let{paramName:p,isOptional:x}=u;if(p==="*"){let y=l[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=l[h];return x&&!m?d[p]=void 0:d[p]=(m||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:e}}function Nx(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),a1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(a.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function Sx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return a1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function An(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function Cx(e,t){t===void 0&&(t="/");let{pathname:r,search:a="",hash:i=""}=typeof e=="string"?Wn(e):e;return{pathname:r?r.startsWith("/")?r:_x(r,t):t,search:Rx(a),hash:Px(i)}}function _x(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Zo(e,t,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zx(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function jd(e,t){let r=zx(e);return t?r.map((a,i)=>i===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function kd(e,t,r,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=Wn(e):(i=Wa({},e),Re(!i.pathname||!i.pathname.includes("?"),Zo("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Zo("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Zo("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=r;else{let h=t.length-1;if(!a&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}l=h>=0?t[h]:"/"}let c=Cx(i,l),d=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const zr=e=>e.join("/").replace(/\/\/+/g,"/"),Ex=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Px=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const o1=["post","put","patch","delete"];new Set(o1);const Mx=["get",...o1];new Set(Mx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},qa.apply(this,arguments)}const lo=b.createContext(null),l1=b.createContext(null),lr=b.createContext(null),co=b.createContext(null),Yt=b.createContext({outlet:null,matches:[],isDataRoute:!1}),c1=b.createContext(null);function Ax(e,t){let{relative:r}=t===void 0?{}:t;qn()||Re(!1);let{basename:a,navigator:i}=b.useContext(lr),{hash:s,pathname:o,search:l}=uo(e,{relative:r}),c=o;return a!=="/"&&(c=o==="/"?a:zr([a,o])),i.createHref({pathname:c,search:l,hash:s})}function qn(){return b.useContext(co)!=null}function Nt(){return qn()||Re(!1),b.useContext(co).location}function d1(e){b.useContext(lr).static||b.useLayoutEffect(e)}function St(){let{isDataRoute:e}=b.useContext(Yt);return e?Gx():Ox()}function Ox(){qn()||Re(!1);let e=b.useContext(lo),{basename:t,future:r,navigator:a}=b.useContext(lr),{matches:i}=b.useContext(Yt),{pathname:s}=Nt(),o=JSON.stringify(jd(i,r.v7_relativeSplatPath)),l=b.useRef(!1);return d1(()=>{l.current=!0}),b.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){a.go(d);return}let h=kd(d,JSON.parse(o),s,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:zr([t,h.pathname])),(u.replace?a.replace:a.push)(h,u.state,u)},[t,a,o,s,e])}const Lx=b.createContext(null);function Ix(e){let t=b.useContext(Yt).outlet;return t&&b.createElement(Lx.Provider,{value:e},t)}function u1(){let{matches:e}=b.useContext(Yt),t=e[e.length-1];return t?t.params:{}}function uo(e,t){let{relative:r}=t===void 0?{}:t,{future:a}=b.useContext(lr),{matches:i}=b.useContext(Yt),{pathname:s}=Nt(),o=JSON.stringify(jd(i,a.v7_relativeSplatPath));return b.useMemo(()=>kd(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function Fx(e,t){return Bx(e,t)}function Bx(e,t,r,a){qn()||Re(!1);let{navigator:i}=b.useContext(lr),{matches:s}=b.useContext(Yt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Nt(),u;if(t){var h;let w=typeof t=="string"?Wn(t):t;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||Re(!1),u=w}else u=d;let p=u.pathname||"/",x=p;if(c!=="/"){let w=c.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=px(e,{pathname:x}),y=Wx(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:zr([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:zr([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,r,a);return t&&y?b.createElement(co.Provider,{value:{location:qa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:br.Pop}},y):y}function Dx(){let e=Zx(),t=Tx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:i},r):null,null)}const Ux=b.createElement(Dx,null);class $x extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(Yt.Provider,{value:this.props.routeContext},b.createElement(c1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hx(e){let{routeContext:t,match:r,children:a}=e,i=b.useContext(lo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Yt.Provider,{value:t},a)}function Wx(e,t,r,a){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=a)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);u>=0||Re(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:p,errors:x}=r,m=h.route.loader&&p[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||m){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,h,p)=>{let x,m=!1,y=null,w=null;r&&(x=l&&h.route.id?l[h.route.id]:void 0,y=h.route.errorElement||Ux,c&&(d<0&&p===0?(Kx("route-fallback"),m=!0,w=null):d===p&&(m=!0,w=h.route.hydrateFallbackElement||null)));let v=t.concat(o.slice(0,p+1)),g=()=>{let f;return x?f=y:m?f=w:h.route.Component?f=b.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=u,b.createElement(Hx,{match:h,routeContext:{outlet:u,matches:v,isDataRoute:r!=null},children:f})};return r&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?b.createElement($x,{location:r.location,revalidation:r.revalidation,component:y,error:x,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var p1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(p1||{}),h1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(h1||{});function qx(e){let t=b.useContext(lo);return t||Re(!1),t}function Vx(e){let t=b.useContext(l1);return t||Re(!1),t}function Yx(e){let t=b.useContext(Yt);return t||Re(!1),t}function f1(e){let t=Yx(),r=t.matches[t.matches.length-1];return r.route.id||Re(!1),r.route.id}function Zx(){var e;let t=b.useContext(c1),r=Vx(),a=f1();return t!==void 0?t:(e=r.errors)==null?void 0:e[a]}function Gx(){let{router:e}=qx(p1.UseNavigateStable),t=f1(h1.UseNavigateStable),r=b.useRef(!1);return d1(()=>{r.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,qa({fromRouteId:t},s)))},[e,t])}const Yu={};function Kx(e,t,r){Yu[e]||(Yu[e]=!0)}function Qx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jl(e){let{to:t,replace:r,state:a,relative:i}=e;qn()||Re(!1);let{future:s,static:o}=b.useContext(lr),{matches:l}=b.useContext(Yt),{pathname:c}=Nt(),d=St(),u=kd(t,jd(l,s.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(u);return b.useEffect(()=>d(JSON.parse(h),{replace:r,state:a,relative:i}),[d,h,i,r,a]),null}function m1(e){return Ix(e.context)}function Te(e){Re(!1)}function Xx(e){let{basename:t="/",children:r=null,location:a,navigationType:i=br.Pop,navigator:s,static:o=!1,future:l}=e;qn()&&Re(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:s,static:o,future:qa({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof a=="string"&&(a=Wn(a));let{pathname:u="/",search:h="",hash:p="",state:x=null,key:m="default"}=a,y=b.useMemo(()=>{let w=An(u,c);return w==null?null:{location:{pathname:w,search:h,hash:p,state:x,key:m},navigationType:i}},[c,u,h,p,x,m,i]);return y==null?null:b.createElement(lr.Provider,{value:d},b.createElement(co.Provider,{children:r,value:y}))}function Jx(e){let{children:t,location:r}=e;return Fx(ec(t),r)}new Promise(()=>{});function ec(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(a,i)=>{if(!b.isValidElement(a))return;let s=[...t,i];if(a.type===b.Fragment){r.push.apply(r,ec(a.props.children,s));return}a.type!==Te&&Re(!1),!a.props.index||!a.props.children||Re(!1);let o={id:a.props.id||s.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=ec(a.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},As.apply(this,arguments)}function g1(e,t){if(e==null)return{};var r={},a=Object.keys(e),i,s;for(s=0;s<a.length;s++)i=a[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function e2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function t2(e,t){return e.button===0&&(!t||t==="_self")&&!e2(e)}function tc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let a=e[r];return t.concat(Array.isArray(a)?a.map(i=>[r,i]):[[r,a]])},[]))}function r2(e,t){let r=tc(e);return t&&t.forEach((a,i)=>{r.has(i)||t.getAll(i).forEach(s=>{r.append(i,s)})}),r}const n2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],a2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],i2="6";try{window.__reactRouterVersion=i2}catch{}const s2=b.createContext({isTransitioning:!1}),o2="startTransition",Zu=Qf[o2];function l2(e){let{basename:t,children:r,future:a,window:i}=e,s=b.useRef();s.current==null&&(s.current=cx({window:i,v5Compat:!0}));let o=s.current,[l,c]=b.useState({action:o.action,location:o.location}),{v7_startTransition:d}=a||{},u=b.useCallback(h=>{d&&Zu?Zu(()=>c(h)):c(h)},[c,d]);return b.useLayoutEffect(()=>o.listen(u),[o,u]),b.useEffect(()=>Qx(a),[a]),b.createElement(Xx,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:a})}const c2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",d2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y=b.forwardRef(function(t,r){let{onClick:a,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:h}=t,p=g1(t,n2),{basename:x}=b.useContext(lr),m,y=!1;if(typeof d=="string"&&d2.test(d)&&(m=d,c2))try{let f=new URL(window.location.href),j=d.startsWith("//")?new URL(f.protocol+d):new URL(d),k=An(j.pathname,x);j.origin===f.origin&&k!=null?d=k+j.search+j.hash:y=!0}catch{}let w=Ax(d,{relative:i}),v=p2(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:i,viewTransition:h});function g(f){a&&a(f),f.defaultPrevented||v(f)}return b.createElement("a",As({},p,{href:m||w,onClick:y||s?a:g,ref:r,target:c}))}),ur=b.forwardRef(function(t,r){let{"aria-current":a="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:d,children:u}=t,h=g1(t,a2),p=uo(c,{relative:h.relative}),x=Nt(),m=b.useContext(l1),{navigator:y,basename:w}=b.useContext(lr),v=m!=null&&h2(p)&&d===!0,g=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,f=x.pathname,j=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(f=f.toLowerCase(),j=j?j.toLowerCase():null,g=g.toLowerCase()),j&&w&&(j=An(j,w)||j);const k=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=f===g||!o&&f.startsWith(g)&&f.charAt(k)==="/",N=j!=null&&(j===g||!o&&j.startsWith(g)&&j.charAt(g.length)==="/"),z={isActive:C,isPending:N,isTransitioning:v},W=C?a:void 0,A;typeof s=="function"?A=s(z):A=[s,C?"active":null,N?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(z):l;return b.createElement(Y,As({},h,{"aria-current":W,className:A,ref:r,style:P,to:c,viewTransition:d}),typeof u=="function"?u(z):u)});var rc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(rc||(rc={}));var Gu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gu||(Gu={}));function u2(e){let t=b.useContext(lo);return t||Re(!1),t}function p2(e,t){let{target:r,replace:a,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,c=St(),d=Nt(),u=uo(e,{relative:o});return b.useCallback(h=>{if(t2(h,r)){h.preventDefault();let p=a!==void 0?a:Ms(d)===Ms(u);c(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,c,u,a,i,r,e,s,o,l])}function x1(e){let t=b.useRef(tc(e)),r=b.useRef(!1),a=Nt(),i=b.useMemo(()=>r2(a.search,r.current?null:t.current),[a.search]),s=St(),o=b.useCallback((l,c)=>{const d=tc(typeof l=="function"?l(i):l);r.current=!0,s("?"+d,c)},[s,i]);return[i,o]}function h2(e,t){t===void 0&&(t={});let r=b.useContext(s2);r==null&&Re(!1);let{basename:a}=u2(rc.useViewTransitionState),i=uo(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=An(r.currentLocation.pathname,a)||r.currentLocation.pathname,o=An(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Xl(i.pathname,o)!=null||Xl(i.pathname,s)!=null}function v1(e,t){return function(){return e.apply(t,arguments)}}const{toString:f2}=Object.prototype,{getPrototypeOf:Nd}=Object,{iterator:po,toStringTag:b1}=Symbol,ho=(e=>t=>{const r=f2.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),It=e=>(e=e.toLowerCase(),t=>ho(t)===e),fo=e=>t=>typeof t===e,{isArray:Vn}=Array,On=fo("undefined");function hi(e){return e!==null&&!On(e)&&e.constructor!==null&&!On(e.constructor)&&lt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const y1=It("ArrayBuffer");function m2(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&y1(e.buffer),t}const g2=fo("string"),lt=fo("function"),w1=fo("number"),fi=e=>e!==null&&typeof e=="object",x2=e=>e===!0||e===!1,ts=e=>{if(ho(e)!=="object")return!1;const t=Nd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(b1 in e)&&!(po in e)},v2=e=>{if(!fi(e)||hi(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},b2=It("Date"),y2=It("File"),w2=It("Blob"),j2=It("FileList"),k2=e=>fi(e)&&lt(e.pipe),N2=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||lt(e.append)&&((t=ho(e))==="formdata"||t==="object"&&lt(e.toString)&&e.toString()==="[object FormData]"))},S2=It("URLSearchParams"),[C2,_2,z2,E2]=["ReadableStream","Request","Response","Headers"].map(It),R2=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mi(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let a,i;if(typeof e!="object"&&(e=[e]),Vn(e))for(a=0,i=e.length;a<i;a++)t.call(null,e[a],a,e);else{if(hi(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(a=0;a<o;a++)l=s[a],t.call(null,e[l],l,e)}}function j1(e,t){if(hi(e))return null;t=t.toLowerCase();const r=Object.keys(e);let a=r.length,i;for(;a-- >0;)if(i=r[a],t===i.toLowerCase())return i;return null}const Hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,k1=e=>!On(e)&&e!==Hr;function nc(){const{caseless:e,skipUndefined:t}=k1(this)&&this||{},r={},a=(i,s)=>{const o=e&&j1(r,s)||s;ts(r[o])&&ts(i)?r[o]=nc(r[o],i):ts(i)?r[o]=nc({},i):Vn(i)?r[o]=i.slice():(!t||!On(i))&&(r[o]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&mi(arguments[i],a);return r}const P2=(e,t,r,{allOwnKeys:a}={})=>(mi(t,(i,s)=>{r&&lt(i)?e[s]=v1(i,r):e[s]=i},{allOwnKeys:a}),e),T2=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),M2=(e,t,r,a)=>{e.prototype=Object.create(t.prototype,a),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},A2=(e,t,r,a)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!a||a(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&Nd(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},O2=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const a=e.indexOf(t,r);return a!==-1&&a===r},L2=e=>{if(!e)return null;if(Vn(e))return e;let t=e.length;if(!w1(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},I2=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Nd(Uint8Array)),F2=(e,t)=>{const a=(e&&e[po]).call(e);let i;for(;(i=a.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},B2=(e,t)=>{let r;const a=[];for(;(r=e.exec(t))!==null;)a.push(r);return a},D2=It("HTMLFormElement"),U2=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,a,i){return a.toUpperCase()+i}),Ku=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),$2=It("RegExp"),N1=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),a={};mi(r,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(a[s]=o||i)}),Object.defineProperties(e,a)},H2=e=>{N1(e,(t,r)=>{if(lt(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const a=e[r];if(lt(a)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},W2=(e,t)=>{const r={},a=i=>{i.forEach(s=>{r[s]=!0})};return Vn(e)?a(e):a(String(e).split(t)),r},q2=()=>{},V2=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Y2(e){return!!(e&&lt(e.append)&&e[b1]==="FormData"&&e[po])}const Z2=e=>{const t=new Array(10),r=(a,i)=>{if(fi(a)){if(t.indexOf(a)>=0)return;if(hi(a))return a;if(!("toJSON"in a)){t[i]=a;const s=Vn(a)?[]:{};return mi(a,(o,l)=>{const c=r(o,i+1);!On(c)&&(s[l]=c)}),t[i]=void 0,s}}return a};return r(e,0)},G2=It("AsyncFunction"),K2=e=>e&&(fi(e)||lt(e))&&lt(e.then)&&lt(e.catch),S1=((e,t)=>e?setImmediate:t?((r,a)=>(Hr.addEventListener("message",({source:i,data:s})=>{i===Hr&&s===r&&a.length&&a.shift()()},!1),i=>{a.push(i),Hr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",lt(Hr.postMessage)),Q2=typeof queueMicrotask<"u"?queueMicrotask.bind(Hr):typeof process<"u"&&process.nextTick||S1,X2=e=>e!=null&&lt(e[po]),S={isArray:Vn,isArrayBuffer:y1,isBuffer:hi,isFormData:N2,isArrayBufferView:m2,isString:g2,isNumber:w1,isBoolean:x2,isObject:fi,isPlainObject:ts,isEmptyObject:v2,isReadableStream:C2,isRequest:_2,isResponse:z2,isHeaders:E2,isUndefined:On,isDate:b2,isFile:y2,isBlob:w2,isRegExp:$2,isFunction:lt,isStream:k2,isURLSearchParams:S2,isTypedArray:I2,isFileList:j2,forEach:mi,merge:nc,extend:P2,trim:R2,stripBOM:T2,inherits:M2,toFlatObject:A2,kindOf:ho,kindOfTest:It,endsWith:O2,toArray:L2,forEachEntry:F2,matchAll:B2,isHTMLForm:D2,hasOwnProperty:Ku,hasOwnProp:Ku,reduceDescriptors:N1,freezeMethods:H2,toObjectSet:W2,toCamelCase:U2,noop:q2,toFiniteNumber:V2,findKey:j1,global:Hr,isContextDefined:k1,isSpecCompliantForm:Y2,toJSONObject:Z2,isAsyncFn:G2,isThenable:K2,setImmediate:S1,asap:Q2,isIterable:X2};function ae(e,t,r,a,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),i&&(this.response=i,this.status=i.status?i.status:null)}S.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.status}}});const C1=ae.prototype,_1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_1[e]={value:e}});Object.defineProperties(ae,_1);Object.defineProperty(C1,"isAxiosError",{value:!0});ae.from=(e,t,r,a,i,s)=>{const o=Object.create(C1);S.toFlatObject(e,o,function(u){return u!==Error.prototype},d=>d!=="isAxiosError");const l=e&&e.message?e.message:"Error",c=t==null&&e?e.code:t;return ae.call(o,l,c,r,a,i),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",s&&Object.assign(o,s),o};const J2=null;function ac(e){return S.isPlainObject(e)||S.isArray(e)}function z1(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function Qu(e,t,r){return e?e.concat(t).map(function(i,s){return i=z1(i),!r&&s?"["+i+"]":i}).join(r?".":""):t}function ev(e){return S.isArray(e)&&!e.some(ac)}const tv=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function mo(e,t,r){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=S.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!S.isUndefined(w[y])});const a=r.metaTokens,i=r.visitor||u,s=r.dots,o=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(i))throw new TypeError("visitor must be a function");function d(m){if(m===null)return"";if(S.isDate(m))return m.toISOString();if(S.isBoolean(m))return m.toString();if(!c&&S.isBlob(m))throw new ae("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(m)||S.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,y,w){let v=m;if(m&&!w&&typeof m=="object"){if(S.endsWith(y,"{}"))y=a?y:y.slice(0,-2),m=JSON.stringify(m);else if(S.isArray(m)&&ev(m)||(S.isFileList(m)||S.endsWith(y,"[]"))&&(v=S.toArray(m)))return y=z1(y),v.forEach(function(f,j){!(S.isUndefined(f)||f===null)&&t.append(o===!0?Qu([y],j,s):o===null?y:y+"[]",d(f))}),!1}return ac(m)?!0:(t.append(Qu(w,y,s),d(m)),!1)}const h=[],p=Object.assign(tv,{defaultVisitor:u,convertValue:d,isVisitable:ac});function x(m,y){if(!S.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(m),S.forEach(m,function(v,g){(!(S.isUndefined(v)||v===null)&&i.call(t,v,S.isString(g)?g.trim():g,y,p))===!0&&x(v,y?y.concat(g):[g])}),h.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Xu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(a){return t[a]})}function Sd(e,t){this._pairs=[],e&&mo(e,this,t)}const E1=Sd.prototype;E1.append=function(t,r){this._pairs.push([t,r])};E1.toString=function(t){const r=t?function(a){return t.call(this,a,Xu)}:Xu;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function rv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function R1(e,t,r){if(!t)return e;const a=r&&r.encode||rv;S.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let s;if(i?s=i(t,r):s=S.isURLSearchParams(t)?t.toString():new Sd(t,r).toString(a),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Ju{constructor(){this.handlers=[]}use(t,r,a){return this.handlers.push({fulfilled:t,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(a){a!==null&&t(a)})}}const P1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nv=typeof URLSearchParams<"u"?URLSearchParams:Sd,av=typeof FormData<"u"?FormData:null,iv=typeof Blob<"u"?Blob:null,sv={isBrowser:!0,classes:{URLSearchParams:nv,FormData:av,Blob:iv},protocols:["http","https","file","blob","url","data"]},Cd=typeof window<"u"&&typeof document<"u",ic=typeof navigator=="object"&&navigator||void 0,ov=Cd&&(!ic||["ReactNative","NativeScript","NS"].indexOf(ic.product)<0),lv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cv=Cd&&window.location.href||"http://localhost",dv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cd,hasStandardBrowserEnv:ov,hasStandardBrowserWebWorkerEnv:lv,navigator:ic,origin:cv},Symbol.toStringTag,{value:"Module"})),Ge={...dv,...sv};function uv(e,t){return mo(e,new Ge.classes.URLSearchParams,{visitor:function(r,a,i,s){return Ge.isNode&&S.isBuffer(r)?(this.append(a,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function pv(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function hv(e){const t={},r=Object.keys(e);let a;const i=r.length;let s;for(a=0;a<i;a++)s=r[a],t[s]=e[s];return t}function T1(e){function t(r,a,i,s){let o=r[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=s>=r.length;return o=!o&&S.isArray(i)?i.length:o,c?(S.hasOwnProp(i,o)?i[o]=[i[o],a]:i[o]=a,!l):((!i[o]||!S.isObject(i[o]))&&(i[o]=[]),t(r,a,i[o],s)&&S.isArray(i[o])&&(i[o]=hv(i[o])),!l)}if(S.isFormData(e)&&S.isFunction(e.entries)){const r={};return S.forEachEntry(e,(a,i)=>{t(pv(a),i,r,0)}),r}return null}function fv(e,t,r){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(e)}const gi={transitional:P1,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const a=r.getContentType()||"",i=a.indexOf("application/json")>-1,s=S.isObject(t);if(s&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return i?JSON.stringify(T1(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t)||S.isReadableStream(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(a.indexOf("application/x-www-form-urlencoded")>-1)return uv(t,this.formSerializer).toString();if((l=S.isFileList(t))||a.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return mo(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||i?(r.setContentType("application/json",!1),fv(t)):t}],transformResponse:[function(t){const r=this.transitional||gi.transitional,a=r&&r.forcedJSONParsing,i=this.responseType==="json";if(S.isResponse(t)||S.isReadableStream(t))return t;if(t&&S.isString(t)&&(a&&!this.responseType||i)){const o=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?ae.from(l,ae.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{gi.headers[e]={}});const mv=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gv=e=>{const t={};let r,a,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),a=o.substring(i+1).trim(),!(!r||t[r]&&mv[r])&&(r==="set-cookie"?t[r]?t[r].push(a):t[r]=[a]:t[r]=t[r]?t[r]+", "+a:a)}),t},ep=Symbol("internals");function sa(e){return e&&String(e).trim().toLowerCase()}function rs(e){return e===!1||e==null?e:S.isArray(e)?e.map(rs):String(e)}function xv(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let a;for(;a=r.exec(e);)t[a[1]]=a[2];return t}const vv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Go(e,t,r,a,i){if(S.isFunction(a))return a.call(this,t,r);if(i&&(t=r),!!S.isString(t)){if(S.isString(a))return t.indexOf(a)!==-1;if(S.isRegExp(a))return a.test(t)}}function bv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,a)=>r.toUpperCase()+a)}function yv(e,t){const r=S.toCamelCase(" "+t);["get","set","has"].forEach(a=>{Object.defineProperty(e,a+r,{value:function(i,s,o){return this[a].call(this,t,i,s,o)},configurable:!0})})}let ct=class{constructor(t){t&&this.set(t)}set(t,r,a){const i=this;function s(l,c,d){const u=sa(c);if(!u)throw new Error("header name must be a non-empty string");const h=S.findKey(i,u);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||c]=rs(l))}const o=(l,c)=>S.forEach(l,(d,u)=>s(d,u,c));if(S.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(S.isString(t)&&(t=t.trim())&&!vv(t))o(gv(t),r);else if(S.isObject(t)&&S.isIterable(t)){let l={},c,d;for(const u of t){if(!S.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[d=u[0]]=(c=l[d])?S.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(l,r)}else t!=null&&s(r,t,a);return this}get(t,r){if(t=sa(t),t){const a=S.findKey(this,t);if(a){const i=this[a];if(!r)return i;if(r===!0)return xv(i);if(S.isFunction(r))return r.call(this,i,a);if(S.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=sa(t),t){const a=S.findKey(this,t);return!!(a&&this[a]!==void 0&&(!r||Go(this,this[a],a,r)))}return!1}delete(t,r){const a=this;let i=!1;function s(o){if(o=sa(o),o){const l=S.findKey(a,o);l&&(!r||Go(a,a[l],l,r))&&(delete a[l],i=!0)}}return S.isArray(t)?t.forEach(s):s(t),i}clear(t){const r=Object.keys(this);let a=r.length,i=!1;for(;a--;){const s=r[a];(!t||Go(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const r=this,a={};return S.forEach(this,(i,s)=>{const o=S.findKey(a,s);if(o){r[o]=rs(i),delete r[s];return}const l=t?bv(s):String(s).trim();l!==s&&delete r[s],r[l]=rs(i),a[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return S.forEach(this,(a,i)=>{a!=null&&a!==!1&&(r[i]=t&&S.isArray(a)?a.join(", "):a)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const a=new this(t);return r.forEach(i=>a.set(i)),a}static accessor(t){const a=(this[ep]=this[ep]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=sa(o);a[l]||(yv(i,o),a[l]=!0)}return S.isArray(t)?t.forEach(s):s(t),this}};ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(ct.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(a){this[r]=a}}});S.freezeMethods(ct);function Ko(e,t){const r=this||gi,a=t||r,i=ct.from(a.headers);let s=a.data;return S.forEach(e,function(l){s=l.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function M1(e){return!!(e&&e.__CANCEL__)}function Yn(e,t,r){ae.call(this,e??"canceled",ae.ERR_CANCELED,t,r),this.name="CanceledError"}S.inherits(Yn,ae,{__CANCEL__:!0});function A1(e,t,r){const a=r.config.validateStatus;!r.status||!a||a(r.status)?e(r):t(new ae("Request failed with status code "+r.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function wv(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jv(e,t){e=e||10;const r=new Array(e),a=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),u=a[s];o||(o=d),r[i]=c,a[i]=d;let h=s,p=0;for(;h!==i;)p+=r[h++],h=h%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),d-o<t)return;const x=u&&d-u;return x?Math.round(p*1e3/x):void 0}}function kv(e,t){let r=0,a=1e3/t,i,s;const o=(d,u=Date.now())=>{r=u,i=null,s&&(clearTimeout(s),s=null),e(...d)};return[(...d)=>{const u=Date.now(),h=u-r;h>=a?o(d,u):(i=d,s||(s=setTimeout(()=>{s=null,o(i)},a-h)))},()=>i&&o(i)]}const Os=(e,t,r=3)=>{let a=0;const i=jv(50,250);return kv(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,c=o-a,d=i(c),u=o<=l;a=o;const h={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&u?(l-o)/d:void 0,event:s,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(h)},r)},tp=(e,t)=>{const r=e!=null;return[a=>t[0]({lengthComputable:r,total:e,loaded:a}),t[1]]},rp=e=>(...t)=>S.asap(()=>e(...t)),Nv=Ge.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Ge.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Ge.origin),Ge.navigator&&/(msie|trident)/i.test(Ge.navigator.userAgent)):()=>!0,Sv=Ge.hasStandardBrowserEnv?{write(e,t,r,a,i,s){const o=[e+"="+encodeURIComponent(t)];S.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),S.isString(a)&&o.push("path="+a),S.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Cv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _v(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function O1(e,t,r){let a=!Cv(t);return e&&(a||r==!1)?_v(e,t):t}const np=e=>e instanceof ct?{...e}:e;function Jr(e,t){t=t||{};const r={};function a(d,u,h,p){return S.isPlainObject(d)&&S.isPlainObject(u)?S.merge.call({caseless:p},d,u):S.isPlainObject(u)?S.merge({},u):S.isArray(u)?u.slice():u}function i(d,u,h,p){if(S.isUndefined(u)){if(!S.isUndefined(d))return a(void 0,d,h,p)}else return a(d,u,h,p)}function s(d,u){if(!S.isUndefined(u))return a(void 0,u)}function o(d,u){if(S.isUndefined(u)){if(!S.isUndefined(d))return a(void 0,d)}else return a(void 0,u)}function l(d,u,h){if(h in t)return a(d,u);if(h in e)return a(void 0,d)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(d,u,h)=>i(np(d),np(u),h,!0)};return S.forEach(Object.keys({...e,...t}),function(u){const h=c[u]||i,p=h(e[u],t[u],u);S.isUndefined(p)&&h!==l||(r[u]=p)}),r}const L1=e=>{const t=Jr({},e);let{data:r,withXSRFToken:a,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=t;if(t.headers=o=ct.from(o),t.url=R1(O1(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),S.isFormData(r)){if(Ge.hasStandardBrowserEnv||Ge.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(S.isFunction(r.getHeaders)){const c=r.getHeaders(),d=["content-type","content-length"];Object.entries(c).forEach(([u,h])=>{d.includes(u.toLowerCase())&&o.set(u,h)})}}if(Ge.hasStandardBrowserEnv&&(a&&S.isFunction(a)&&(a=a(t)),a||a!==!1&&Nv(t.url))){const c=i&&s&&Sv.read(s);c&&o.set(i,c)}return t},zv=typeof XMLHttpRequest<"u",Ev=zv&&function(e){return new Promise(function(r,a){const i=L1(e);let s=i.data;const o=ct.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,u,h,p,x,m;function y(){x&&x(),m&&m(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let w=new XMLHttpRequest;w.open(i.method.toUpperCase(),i.url,!0),w.timeout=i.timeout;function v(){if(!w)return;const f=ct.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:f,config:e,request:w};A1(function(N){r(N),y()},function(N){a(N),y()},k),w=null}"onloadend"in w?w.onloadend=v:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(v)},w.onabort=function(){w&&(a(new ae("Request aborted",ae.ECONNABORTED,e,w)),w=null)},w.onerror=function(j){const k=j&&j.message?j.message:"Network Error",C=new ae(k,ae.ERR_NETWORK,e,w);C.event=j||null,a(C),w=null},w.ontimeout=function(){let j=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const k=i.transitional||P1;i.timeoutErrorMessage&&(j=i.timeoutErrorMessage),a(new ae(j,k.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,e,w)),w=null},s===void 0&&o.setContentType(null),"setRequestHeader"in w&&S.forEach(o.toJSON(),function(j,k){w.setRequestHeader(k,j)}),S.isUndefined(i.withCredentials)||(w.withCredentials=!!i.withCredentials),l&&l!=="json"&&(w.responseType=i.responseType),d&&([p,m]=Os(d,!0),w.addEventListener("progress",p)),c&&w.upload&&([h,x]=Os(c),w.upload.addEventListener("progress",h),w.upload.addEventListener("loadend",x)),(i.cancelToken||i.signal)&&(u=f=>{w&&(a(!f||f.type?new Yn(null,e,w):f),w.abort(),w=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const g=wv(i.url);if(g&&Ge.protocols.indexOf(g)===-1){a(new ae("Unsupported protocol "+g+":",ae.ERR_BAD_REQUEST,e));return}w.send(s||null)})},Rv=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let a=new AbortController,i;const s=function(d){if(!i){i=!0,l();const u=d instanceof Error?d:this.reason;a.abort(u instanceof ae?u:new Yn(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,s(new ae(`timeout ${t} of ms exceeded`,ae.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(s):d.removeEventListener("abort",s)}),e=null)};e.forEach(d=>d.addEventListener("abort",s));const{signal:c}=a;return c.unsubscribe=()=>S.asap(l),c}},Pv=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let a=0,i;for(;a<r;)i=a+t,yield e.slice(a,i),a=i},Tv=async function*(e,t){for await(const r of Mv(e))yield*Pv(r,t)},Mv=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:a}=await t.read();if(r)break;yield a}}finally{await t.cancel()}},ap=(e,t,r,a)=>{const i=Tv(e,t);let s=0,o,l=c=>{o||(o=!0,a&&a(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await i.next();if(d){l(),c.close();return}let h=u.byteLength;if(r){let p=s+=h;r(p)}c.enqueue(new Uint8Array(u))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},ip=64*1024,{isFunction:Fi}=S,Av=(({Request:e,Response:t})=>({Request:e,Response:t}))(S.global),{ReadableStream:sp,TextEncoder:op}=S.global,lp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ov=e=>{e=S.merge.call({skipUndefined:!0},Av,e);const{fetch:t,Request:r,Response:a}=e,i=t?Fi(t):typeof fetch=="function",s=Fi(r),o=Fi(a);if(!i)return!1;const l=i&&Fi(sp),c=i&&(typeof op=="function"?(m=>y=>m.encode(y))(new op):async m=>new Uint8Array(await new r(m).arrayBuffer())),d=s&&l&&lp(()=>{let m=!1;const y=new r(Ge.origin,{body:new sp,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!y}),u=o&&l&&lp(()=>S.isReadableStream(new a("").body)),h={stream:u&&(m=>m.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!h[m]&&(h[m]=(y,w)=>{let v=y&&y[m];if(v)return v.call(y);throw new ae(`Response type '${m}' is not supported`,ae.ERR_NOT_SUPPORT,w)})});const p=async m=>{if(m==null)return 0;if(S.isBlob(m))return m.size;if(S.isSpecCompliantForm(m))return(await new r(Ge.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(S.isArrayBufferView(m)||S.isArrayBuffer(m))return m.byteLength;if(S.isURLSearchParams(m)&&(m=m+""),S.isString(m))return(await c(m)).byteLength},x=async(m,y)=>{const w=S.toFiniteNumber(m.getContentLength());return w??p(y)};return async m=>{let{url:y,method:w,data:v,signal:g,cancelToken:f,timeout:j,onDownloadProgress:k,onUploadProgress:C,responseType:N,headers:z,withCredentials:W="same-origin",fetchOptions:A}=L1(m),P=t||fetch;N=N?(N+"").toLowerCase():"text";let Z=Rv([g,f&&f.toAbortSignal()],j),L=null;const B=Z&&Z.unsubscribe&&(()=>{Z.unsubscribe()});let se;try{if(C&&d&&w!=="get"&&w!=="head"&&(se=await x(z,v))!==0){let U=new r(y,{method:"POST",body:v,duplex:"half"}),Q;if(S.isFormData(v)&&(Q=U.headers.get("content-type"))&&z.setContentType(Q),U.body){const[me,_]=tp(se,Os(rp(C)));v=ap(U.body,ip,me,_)}}S.isString(W)||(W=W?"include":"omit");const K=s&&"credentials"in r.prototype,M={...A,signal:Z,method:w.toUpperCase(),headers:z.normalize().toJSON(),body:v,duplex:"half",credentials:K?W:void 0};L=s&&new r(y,M);let T=await(s?P(L,A):P(y,M));const E=u&&(N==="stream"||N==="response");if(u&&(k||E&&B)){const U={};["status","statusText","headers"].forEach(X=>{U[X]=T[X]});const Q=S.toFiniteNumber(T.headers.get("content-length")),[me,_]=k&&tp(Q,Os(rp(k),!0))||[];T=new a(ap(T.body,ip,me,()=>{_&&_(),B&&B()}),U)}N=N||"text";let O=await h[S.findKey(h,N)||"text"](T,m);return!E&&B&&B(),await new Promise((U,Q)=>{A1(U,Q,{data:O,headers:ct.from(T.headers),status:T.status,statusText:T.statusText,config:m,request:L})})}catch(K){throw B&&B(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new ae("Network Error",ae.ERR_NETWORK,m,L),{cause:K.cause||K}):ae.from(K,K&&K.code,m,L)}}},Lv=new Map,I1=e=>{let t=e?e.env:{};const{fetch:r,Request:a,Response:i}=t,s=[a,i,r];let o=s.length,l=o,c,d,u=Lv;for(;l--;)c=s[l],d=u.get(c),d===void 0&&u.set(c,d=l?new Map:Ov(t)),u=d;return d};I1();const sc={http:J2,xhr:Ev,fetch:{get:I1}};S.forEach(sc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cp=e=>`- ${e}`,Iv=e=>S.isFunction(e)||e===null||e===!1,F1={getAdapter:(e,t)=>{e=S.isArray(e)?e:[e];const{length:r}=e;let a,i;const s={};for(let o=0;o<r;o++){a=e[o];let l;if(i=a,!Iv(a)&&(i=sc[(l=String(a)).toLowerCase()],i===void 0))throw new ae(`Unknown adapter '${l}'`);if(i&&(S.isFunction(i)||(i=i.get(t))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(cp).join(`
`):" "+cp(o[0]):"as no adapter specified";throw new ae("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i},adapters:sc};function Qo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Yn(null,e)}function dp(e){return Qo(e),e.headers=ct.from(e.headers),e.data=Ko.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),F1.getAdapter(e.adapter||gi.adapter,e)(e).then(function(a){return Qo(e),a.data=Ko.call(e,e.transformResponse,a),a.headers=ct.from(a.headers),a},function(a){return M1(a)||(Qo(e),a&&a.response&&(a.response.data=Ko.call(e,e.transformResponse,a.response),a.response.headers=ct.from(a.response.headers))),Promise.reject(a)})}const B1="1.12.2",go={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{go[e]=function(a){return typeof a===e||"a"+(t<1?"n ":" ")+e}});const up={};go.transitional=function(t,r,a){function i(s,o){return"[Axios v"+B1+"] Transitional option '"+s+"'"+o+(a?". "+a:"")}return(s,o,l)=>{if(t===!1)throw new ae(i(o," has been removed"+(r?" in "+r:"")),ae.ERR_DEPRECATED);return r&&!up[o]&&(up[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,l):!0}};go.spelling=function(t){return(r,a)=>(console.warn(`${a} is likely a misspelling of ${t}`),!0)};function Fv(e,t,r){if(typeof e!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const a=Object.keys(e);let i=a.length;for(;i-- >0;){const s=a[i],o=t[s];if(o){const l=e[s],c=l===void 0||o(l,s,e);if(c!==!0)throw new ae("option "+s+" must be "+c,ae.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ae("Unknown option "+s,ae.ERR_BAD_OPTION)}}const ns={assertOptions:Fv,validators:go},Dt=ns.validators;let Vr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Ju,response:new Ju}}async request(t,r){try{return await this._request(t,r)}catch(a){if(a instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{a.stack?s&&!String(a.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(a.stack+=`
`+s):a.stack=s}catch{}}throw a}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Jr(this.defaults,r);const{transitional:a,paramsSerializer:i,headers:s}=r;a!==void 0&&ns.assertOptions(a,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),i!=null&&(S.isFunction(i)?r.paramsSerializer={serialize:i}:ns.assertOptions(i,{encode:Dt.function,serialize:Dt.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ns.assertOptions(r,{baseUrl:Dt.spelling("baseURL"),withXsrfToken:Dt.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=s&&S.merge(s.common,s[r.method]);s&&S.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),r.headers=ct.concat(o,s);const l=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(c=c&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const d=[];this.interceptors.response.forEach(function(y){d.push(y.fulfilled,y.rejected)});let u,h=0,p;if(!c){const m=[dp.bind(this),void 0];for(m.unshift(...l),m.push(...d),p=m.length,u=Promise.resolve(r);h<p;)u=u.then(m[h++],m[h++]);return u}p=l.length;let x=r;for(;h<p;){const m=l[h++],y=l[h++];try{x=m(x)}catch(w){y.call(this,w);break}}try{u=dp.call(this,x)}catch(m){return Promise.reject(m)}for(h=0,p=d.length;h<p;)u=u.then(d[h++],d[h++]);return u}getUri(t){t=Jr(this.defaults,t);const r=O1(t.baseURL,t.url,t.allowAbsoluteUrls);return R1(r,t.params,t.paramsSerializer)}};S.forEach(["delete","get","head","options"],function(t){Vr.prototype[t]=function(r,a){return this.request(Jr(a||{},{method:t,url:r,data:(a||{}).data}))}});S.forEach(["post","put","patch"],function(t){function r(a){return function(s,o,l){return this.request(Jr(l||{},{method:t,headers:a?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Vr.prototype[t]=r(),Vr.prototype[t+"Form"]=r(!0)});let Bv=class D1{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const a=this;this.promise.then(i=>{if(!a._listeners)return;let s=a._listeners.length;for(;s-- >0;)a._listeners[s](i);a._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{a.subscribe(l),s=l}).then(i);return o.cancel=function(){a.unsubscribe(s)},o},t(function(s,o,l){a.reason||(a.reason=new Yn(s,o,l),r(a.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=a=>{t.abort(a)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new D1(function(i){t=i}),cancel:t}}};function Dv(e){return function(r){return e.apply(null,r)}}function Uv(e){return S.isObject(e)&&e.isAxiosError===!0}const oc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(oc).forEach(([e,t])=>{oc[t]=e});function U1(e){const t=new Vr(e),r=v1(Vr.prototype.request,t);return S.extend(r,Vr.prototype,t,{allOwnKeys:!0}),S.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return U1(Jr(e,i))},r}const Se=U1(gi);Se.Axios=Vr;Se.CanceledError=Yn;Se.CancelToken=Bv;Se.isCancel=M1;Se.VERSION=B1;Se.toFormData=mo;Se.AxiosError=ae;Se.Cancel=Se.CanceledError;Se.all=function(t){return Promise.all(t)};Se.spread=Dv;Se.isAxiosError=Uv;Se.mergeConfig=Jr;Se.AxiosHeaders=ct;Se.formToJSON=e=>T1(S.isHTMLForm(e)?new FormData(e):e);Se.getAdapter=F1.getAdapter;Se.HttpStatusCode=oc;Se.default=Se;const{Axios:L5,AxiosError:I5,CanceledError:F5,isCancel:B5,CancelToken:D5,VERSION:U5,all:$5,Cancel:H5,isAxiosError:W5,spread:q5,toFormData:V5,AxiosHeaders:Y5,HttpStatusCode:Z5,formToJSON:G5,getAdapter:K5,mergeConfig:Q5}=Se,te=Se.create({baseURL:"/api/v1"}),pp=typeof window<"u"?localStorage.getItem("access_token"):null;pp&&(te.defaults.headers.common.Authorization=`Bearer ${pp}`);function hp(e){e?te.defaults.headers.common.Authorization=`Bearer ${e}`:delete te.defaults.headers.common.Authorization}te.interceptors.request.use(e=>{try{const t=(e.url||"").toLowerCase();if(!(t.includes("/auth/login")||t.includes("/auth/register")||t.includes("/auth/refresh"))){const a=localStorage.getItem("access_token");a&&(e.headers=e.headers||{},e.headers.Authorization=`Bearer ${a}`)}}catch{}return e});let sn=!1,lc=[];function Bi(e){lc.forEach(t=>t(e)),lc=[]}te.interceptors.response.use(e=>e,async e=>{var a;const t=e.config;if(!t)return Promise.reject(e);if(((a=e.response)==null?void 0:a.status)===401&&!t._retry){t._retry=!0;try{if(sn)return new Promise((d,u)=>{lc.push(h=>{h?(t.headers.Authorization=`Bearer ${h}`,d(te(t))):u(e)})});sn=!0;const i=localStorage.getItem("refresh_token");if(!i){Bi(null),sn=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(e)}const o=(await Se.post("/api/v1/auth/refresh",{refresh_token:i})).data,l=o==null?void 0:o.access_token,c=o==null?void 0:o.refresh_token;if(l)return localStorage.setItem("access_token",l),c&&localStorage.setItem("refresh_token",c),te.defaults.headers.common.Authorization=`Bearer ${l}`,Bi(l),sn=!1,t.headers.Authorization=`Bearer ${l}`,te(t);Bi(null),sn=!1}catch{Bi(null),sn=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(e)}}return Promise.reject(e)});const $1=b.createContext(void 0);function $v({children:e}){const[t,r]=b.useState(null),[a,i]=b.useState(null),[s,o]=b.useState(!0);b.useEffect(()=>{(async()=>{const d=localStorage.getItem("access_token"),u=localStorage.getItem("user");if(d&&u)try{await te.get("/auth/me"),r(JSON.parse(u)),i(d)}catch{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")}o(!1)})()},[]),b.useEffect(()=>{hp(a)},[a]);const l=b.useMemo(()=>({user:t,accessToken:a,loading:s,login:async(c,d)=>{const u=await te.post("/auth/login",{email:c,password:d}),{access_token:h,refresh_token:p,user:x}=u.data;r(x),i(h),localStorage.setItem("access_token",h),p&&localStorage.setItem("refresh_token",p),localStorage.setItem("user",JSON.stringify(x)),hp(h)},register:async(c,d,u)=>{await te.post("/auth/register",{email:c,password:d,full_name:u})},logout:()=>{r(null),i(null),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")},updateUser:c=>{r(d=>{const u={...d||{},...c};try{localStorage.setItem("user",JSON.stringify(u))}catch{}return u})}}),[t,a,s]);return n.jsx($1.Provider,{value:l,children:e})}function Ft(){const e=b.useContext($1);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}function fp(){const{user:e}=Ft(),[t,r]=b.useState(!1),[a,i]=b.useState({siteName:"Own Setup 💼",supportEmail:"",supportPhone:"",currency:"LKR",brandColor:"#6D74FF",bankTransferNote:"",heroImage1:"/images/hero-1.jpg",heroImage2:"/images/hero-2.jpg"});return b.useEffect(()=>{r(!0);async function s(){try{const o=await fetch("/api/v1/admin/settings");if(o.ok){const l=await o.json();i(c=>({...c,...l}))}}catch(o){console.error("Error loading settings:",o)}}s()},[]),n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"gradient-orb orb-4"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"stars-container",children:[...Array(50)].map((s,o)=>n.jsx("div",{className:"star",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${2+Math.random()*3}s`}},o))})]}),n.jsx("section",{className:`hero ${t?"animate-in":""}`,children:n.jsxs("div",{className:"container hero-inner",children:[n.jsxs("div",{className:"hero-copy",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),n.jsx("path",{d:"M2 17l10 5 10-5"}),n.jsx("path",{d:"M2 12l10 5 10-5"})]}),"Welcome to Own Setup"]}),n.jsx("p",{className:"kicker",children:"WELCOME TO"}),n.jsx("h1",{className:"headline",children:"Everyday Essentials, Thoughtfully Made"}),n.jsx("p",{className:"subhead",children:"Curated apparel and accessories crafted for comfort, durability, and timeless style."}),e?n.jsxs("div",{className:"hero-ctas",children:[n.jsxs(Y,{to:"/about",className:"btn btn-primary",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),"Learn More"]}),n.jsxs(Y,{to:"/shop",className:"btn btn-ghost",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),n.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),n.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"Visit Shop"]})]}):n.jsxs("div",{className:"hero-ctas",children:[n.jsxs(Y,{to:"/login",className:"btn btn-primary",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),n.jsx("polyline",{points:"10 17 15 12 10 7"}),n.jsx("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]}),"Login to Shop"]}),n.jsxs(Y,{to:"/register",className:"btn btn-ghost",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),n.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),n.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),"Register"]})]})]}),n.jsxs("div",{className:"hero-images",children:[n.jsxs("div",{className:"image-wrapper img-1",children:[n.jsx("img",{src:a.heroImage1,alt:"Lifestyle banner"}),n.jsx("div",{className:"image-shine"})]}),n.jsxs("div",{className:"image-wrapper img-2",children:[n.jsx("img",{src:a.heroImage2,alt:"Crafted details"}),n.jsx("div",{className:"image-shine"})]})]})]})}),!e&&n.jsx("section",{className:`login-prompt ${t?"animate-in":""}`,children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"prompt-content",children:[n.jsx("div",{className:"prompt-icon",children:n.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),n.jsx("h2",{children:"🔐 Want to See More?"}),n.jsx("p",{children:"Login or create an account to explore our full collections, view features, and start shopping!"}),n.jsxs("div",{className:"prompt-actions",children:[n.jsxs(Y,{to:"/login",className:"btn btn-primary",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),n.jsx("polyline",{points:"10 17 15 12 10 7"}),n.jsx("line",{x1:"15",y1:"12",x2:"3",y2:"12"})]}),"Login Now"]}),n.jsxs(Y,{to:"/register",className:"btn btn-secondary",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),n.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),n.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),"Create Account"]})]})]})})}),e&&n.jsxs(n.Fragment,{children:[n.jsx("section",{className:`section alt ${t?"animate-in":""}`,children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),"About Us"]}),n.jsx("div",{className:"title-underline"})]}),n.jsx("p",{className:"lead",children:"We're a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance. Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care."}),n.jsxs("div",{className:"cards three",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"card-icon",children:n.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),n.jsx("path",{d:"M2 17l10 5 10-5"}),n.jsx("path",{d:"M2 12l10 5 10-5"})]})}),n.jsx("h3",{children:"What we do"}),n.jsx("p",{children:"From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use."})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"card-icon",children:n.jsx("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),n.jsx("h3",{children:"How we work"}),n.jsx("p",{children:"Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what's delivered."})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"card-icon",children:n.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),n.jsx("h3",{children:"Our promise"}),n.jsx("p",{children:"Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition."})]})]})]})}),n.jsx("section",{className:`section ${t?"animate-in":""}`,children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),n.jsx("polyline",{points:"2 17 12 22 22 17"}),n.jsx("polyline",{points:"2 12 12 17 22 12"})]}),"Our Mission"]}),n.jsx("div",{className:"title-underline"})]}),n.jsx("p",{className:"lead",children:"Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Material-first design choices with soft-hand, responsibly sourced textiles."]}),n.jsxs("li",{children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Timeless palettes and silhouettes that pair across wardrobes."]}),n.jsxs("li",{children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Continuous improvements guided by real customer feedback."]})]})]})}),n.jsx("section",{className:`section alt ${t?"animate-in":""}`,children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),"Why Choose Us"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{className:"grid-2",children:[n.jsxs("div",{className:"feature",children:[n.jsx("div",{className:"feature-badge",children:"Quality"}),n.jsx("h3",{children:"Built to last"}),n.jsx("p",{children:"Reinforced stitching, reliable hardware, and color-fast finishes keep pieces in rotation longer."})]}),n.jsxs("div",{className:"feature",children:[n.jsx("div",{className:"feature-badge",children:"Trust"}),n.jsx("h3",{children:"Transparent sourcing"}),n.jsx("p",{children:"Clear specs, care guides, and honest descriptions so purchasing decisions are easy and informed."})]}),n.jsxs("div",{className:"feature",children:[n.jsx("div",{className:"feature-badge",children:"Care"}),n.jsx("h3",{children:"Responsive support"}),n.jsx("p",{children:"Friendly, prompt help from real people for sizing, care, and post-purchase questions."})]}),n.jsxs("div",{className:"feature",children:[n.jsx("div",{className:"feature-badge",children:"Value"}),n.jsx("h3",{children:"Fair pricing"}),n.jsx("p",{children:"Essentials priced for everyday use without compromising on materials or finish."})]})]})]})}),n.jsx("section",{className:`section ${t?"animate-in":""}`,children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"What Customers Say"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{className:"testimonials",children:[n.jsxs("blockquote",{className:"quote",children:[n.jsx("div",{className:"quote-icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"})})}),n.jsx("p",{children:'"The fabric quality is excellent and the fit stays consistent after washes. Great staples."'}),n.jsxs("footer",{children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"A. Perera"]})]}),n.jsxs("blockquote",{className:"quote",children:[n.jsx("div",{className:"quote-icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"})})}),n.jsx("p",{children:'"Support was quick to help with sizing. Delivery was on time and packaging was neat."'}),n.jsxs("footer",{children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"S. Fernando"]})]}),n.jsxs("blockquote",{className:"quote",children:[n.jsx("div",{className:"quote-icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"})})}),n.jsx("p",{children:'"Clean design and no loud branding. Exactly what I wanted for daily wear."'}),n.jsxs("footer",{children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"N. Jayasuriya"]})]})]})]})}),n.jsx("section",{className:`section alt ${t?"animate-in":""}`,children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})}),"Special Highlights"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{className:"cards three",children:[n.jsxs("div",{className:"promo-card",children:[n.jsx("div",{className:"promo-icon",children:"🌟"}),n.jsx("h3",{children:"Seasonal Edit"}),n.jsx("p",{children:"Limited colorways and refreshed textures—perfect for the current season."}),n.jsxs(Y,{to:"/shop",className:"btn btn-link",children:["Explore",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]}),n.jsxs("div",{className:"promo-card",children:[n.jsx("div",{className:"promo-icon",children:"💰"}),n.jsx("h3",{children:"Bundle Savings"}),n.jsx("p",{children:"Save on curated combos like tee + cap or backpack + organizer."}),n.jsxs(Y,{to:"/shop",className:"btn btn-link",children:["View Bundles",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]}),n.jsxs("div",{className:"promo-card",children:[n.jsx("div",{className:"promo-icon",children:"🎓"}),n.jsx("h3",{children:"Student Perks"}),n.jsx("p",{children:"Verified students enjoy an extra 10% off select collections."}),n.jsxs(Y,{to:"/shop",className:"btn btn-link",children:["Check Eligibility",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]})]})]})}),n.jsx("section",{className:`section ${t?"animate-in":""}`,children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"1",y:"3",width:"15",height:"13"}),n.jsx("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),n.jsx("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),n.jsx("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]}),"Delivery & Returns"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{className:"grid-3",children:[n.jsxs("div",{className:"mini-feature",children:[n.jsx("div",{className:"mini-icon",children:n.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("polyline",{points:"23 4 23 10 17 10"}),n.jsx("polyline",{points:"1 20 1 14 7 14"}),n.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]})}),n.jsx("h3",{children:"Fast Dispatch"}),n.jsx("p",{children:"Orders ship within 1–2 business days with tracked delivery."})]}),n.jsxs("div",{className:"mini-feature",children:[n.jsx("div",{className:"mini-icon",children:n.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("polyline",{points:"1 4 1 10 7 10"}),n.jsx("path",{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"})]})}),n.jsx("h3",{children:"Easy Returns"}),n.jsx("p",{children:"30-day returns on unused items in original condition and packaging."})]}),n.jsxs("div",{className:"mini-feature",children:[n.jsx("div",{className:"mini-icon",children:n.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),n.jsx("polyline",{points:"14 2 14 8 20 8"}),n.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),n.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),n.jsx("polyline",{points:"10 9 9 9 8 9"})]})}),n.jsx("h3",{children:"Care Guides"}),n.jsx("p",{children:"Simple wash and storage instructions included with every order."})]})]})]})})]}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --positive:#1fbf75;
        }
        
        *{box-sizing:border-box}
        
        body{
          background:var(--bg);
          color:var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           EPIC ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.2;
          animation: float 25s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -300px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          bottom: -200px;
          right: -150px;
          animation-delay: -8s;
        }
        
        .orb-3 {
          width: 450px;
          height: 450px;
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          top: 40%;
          left: 60%;
          animation-delay: -16s;
        }
        
        .orb-4 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
          top: 60%;
          right: 70%;
          animation-delay: -12s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(100px, -100px) scale(1.1);
          }
          50% {
            transform: translate(-50px, 50px) scale(0.9);
          }
          75% {
            transform: translate(50px, 100px) scale(1.05);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 30s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(109, 116, 255, 0.5);
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        /* ========================================
           HERO ENTRANCE ANIMATIONS
           ======================================== */
        
        .hero {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero.animate-in .hero-badge {
          animation: badgeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        @keyframes badgeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero.animate-in .kicker {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .hero.animate-in .headline {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .hero.animate-in .subhead {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .hero.animate-in .hero-ctas {
          animation: fadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero.animate-in .image-wrapper {
          animation: imageZoomIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        .hero.animate-in .img-1 {
          animation-delay: 0.5s;
        }
        
        .hero.animate-in .img-2 {
          animation-delay: 0.7s;
        }
        
        @keyframes imageZoomIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .login-prompt {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.8s;
        }
        
        .login-prompt.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section.animate-in .info-card,
        .section.animate-in .promo-card,
        .section.animate-in .feature,
        .section.animate-in .mini-feature,
        .section.animate-in .quote {
          opacity: 0;
          transform: translateY(20px);
          animation: cardSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .section.animate-in .info-card:nth-child(1),
        .section.animate-in .promo-card:nth-child(1),
        .section.animate-in .feature:nth-child(1),
        .section.animate-in .mini-feature:nth-child(1),
        .section.animate-in .quote:nth-child(1) { animation-delay: 0.1s; }
        
        .section.animate-in .info-card:nth-child(2),
        .section.animate-in .promo-card:nth-child(2),
        .section.animate-in .feature:nth-child(2),
        .section.animate-in .mini-feature:nth-child(2),
        .section.animate-in .quote:nth-child(2) { animation-delay: 0.2s; }
        
        .section.animate-in .info-card:nth-child(3),
        .section.animate-in .promo-card:nth-child(3),
        .section.animate-in .feature:nth-child(3),
        .section.animate-in .mini-feature:nth-child(3),
        .section.animate-in .quote:nth-child(3) { animation-delay: 0.3s; }
        
        .section.animate-in .info-card:nth-child(4),
        .section.animate-in .feature:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* ========================================
           CONTAINER & LAYOUT
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        /* ========================================
           HERO SECTION - COMPLETELY REDESIGNED
           ======================================== */
        
        .hero{
          padding:100px 0 80px;
          position: relative;
          background: transparent;
        }
        
        .hero-inner{
          display:grid;
          grid-template-columns:1.1fr .9fr;
          gap:60px;
          align-items:center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(109, 116, 255, 0.1);
          border: 1px solid rgba(109, 116, 255, 0.3);
          border-radius: 20px;
          color: var(--brand);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(109, 116, 255, 0.4);
          }
        }
        
        .kicker{
          letter-spacing:.25em;
          text-transform:uppercase;
          color:var(--brand);
          font-weight:700;
          margin:0 0 16px;
          font-size: 13px;
        }
        
        .headline{
          font-size:clamp(36px,5.5vw,64px);
          line-height:1.1;
          margin:0 0 24px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -2px;
        }
        
        .subhead{
          color:var(--muted);
          font-size:clamp(17px,2.2vw,20px);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        
        .hero-ctas{
          display:flex;
          gap:16px;
        }
        
        .hero-images{
          display:grid;
          gap:24px;
        }
        
        .image-wrapper {
          position: relative;
          border-radius:20px;
          overflow: hidden;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .hero-images img{
          width:100%;
          height:350px;
          object-fit:cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .image-wrapper:hover img {
          transform: scale(1.05);
        }
        
        .image-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        
        .image-wrapper:hover .image-shine {
          left: 100%;
        }
        
        /* ========================================
           LOGIN PROMPT - REDESIGNED
           ======================================== */
        
        .login-prompt {
          padding: 60px 0;
          background: rgba(18, 18, 22, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(109, 116, 255, 0.2);
          border-bottom: 1px solid rgba(109, 116, 255, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .prompt-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .prompt-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(109, 116, 255, 0.1);
          border: 2px solid rgba(109, 116, 255, 0.3);
          border-radius: 50%;
          color: var(--brand);
          margin-bottom: 24px;
          animation: iconPulse 2s ease-in-out infinite;
        }
        
        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(109, 116, 255, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(109, 116, 255, 0);
          }
        }
        
        .login-prompt h2 {
          font-size: 32px;
          margin: 0 0 16px 0;
          color: var(--text);
        }
        
        .login-prompt p {
          font-size: 18px;
          color: var(--muted);
          margin: 0 0 32px 0;
          line-height: 1.7;
        }
        
        .prompt-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          gap:10px;
          border-radius:12px;
          padding:14px 24px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.3s;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
        }
        
        .btn:hover{
          transform:translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-ghost{
          background:rgba(35, 36, 52, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .btn-ghost:hover {
          background: rgba(35, 36, 52, 0.9);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .btn-secondary {
          background: rgba(109, 116, 255, 0.1);
          border-color: rgba(109, 116, 255, 0.3);
          color: var(--brand);
        }
        
        .btn-secondary:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        .btn-link{
          background:transparent;
          border:none;
          color:var(--brand);
          padding:8px 0;
          font-size: 14px;
        }
        
        .btn-link:hover {
          color: var(--brand-600);
        }
        
        /* ========================================
           SECTION STYLES
           ======================================== */
        
        .section{
          padding:80px 0;
          border-top:1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        
        .section.alt{
          background: rgba(18, 18, 22, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .section-header {
          margin-bottom: 40px;
        }
        
        .section-title{
          margin:0 0 12px;
          font-size:32px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .title-underline {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 60px;
            opacity: 1;
          }
        }
        
        .lead{
          color:var(--muted);
          margin:0 0 32px;
          max-width:70ch;
          font-size: 18px;
          line-height: 1.7;
        }
        
        .bullets{
          margin:0;
          padding:0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .bullets li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.6;
        }
        
        .bullets li svg {
          color: var(--positive);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        /* ========================================
           GRID LAYOUTS
           ======================================== */
        
        .grid-2{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:24px;
        }
        
        .grid-3{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }
        
        .cards.three{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }
        
        /* ========================================
           CARD STYLES
           ======================================== */
        
        .info-card,.promo-card,.feature,.mini-feature{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding:32px;
          border-radius:16px;
          transition: all 0.3s;
        }
        
        .info-card:hover, .promo-card:hover, .feature:hover, .mini-feature:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(109, 116, 255, 0.3);
        }
        
        .card-icon {
          width: 64px;
          height: 64px;
          background: rgba(109, 116, 255, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          margin-bottom: 20px;
        }
        
        .info-card h3, .promo-card h3, .feature h3, .mini-feature h3 {
          margin: 0 0 12px 0;
          font-size: 20px;
        }
        
        .info-card p, .promo-card p, .feature p, .mini-feature p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0 0 16px 0;
        }
        
        .feature-badge{
          display:inline-block;
          font-size:12px;
          padding:6px 12px;
          border-radius:999px;
          background: rgba(109, 116, 255, 0.1);
          border:1px solid rgba(109, 116, 255, 0.3);
          color:var(--brand);
          margin-bottom:12px;
          font-weight: 600;
        }
        
        .promo-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .mini-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 116, 255, 0.05));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          margin: 0 auto 20px;
        }
        
        /* ========================================
           TESTIMONIALS
           ======================================== */
        
        .testimonials{
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
          gap:24px;
        }
        
        .quote{
          margin:0;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding:32px;
          border-radius:16px;
          color:var(--muted);
          position: relative;
          transition: all 0.3s;
        }
        
        .quote:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(109, 116, 255, 0.3);
        }
        
        .quote-icon {
          color: rgba(109, 116, 255, 0.3);
          margin-bottom: 16px;
        }
        
        .quote p {
          font-style: italic;
          line-height: 1.7;
          margin: 0 0 16px 0;
        }
        
        .quote footer{
          margin-top:16px;
          color:var(--text);
          font-style:normal;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .quote footer svg {
          color: var(--brand);
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:900px){
          .hero-inner{
            grid-template-columns:1fr;
            gap: 40px;
          }
          
          .grid-2,.grid-3,.cards.three,.testimonials{
            grid-template-columns:1fr;
          }
          
          .hero-images img{
            height:280px;
          }
          
          .hero {
            padding: 80px 0 60px;
          }
          
          .section {
            padding: 60px 0;
          }
          
          .headline {
            font-size: 40px;
          }
        }
      `})]})}function Et(e,t="success",r=2200){const a=new CustomEvent("app:toast",{detail:{message:e,type:t,duration:r}});window.dispatchEvent(a)}const H1=b.createContext(void 0);function Hv({children:e}){const{user:t}=Ft(),[r,a]=b.useState([]),[i,s]=b.useState(!1);b.useEffect(()=>{if(typeof window<"u"&&(window.location.pathname==="/login"||window.location.pathname==="/register"))return;if(!(t!=null&&t.email)){a([]);return}(async()=>{s(!0);try{const d=(await te.get("/cart")).data;a(d.items||[]),localStorage.removeItem(`cart_${t.email}`),localStorage.removeItem("cart_guest")}catch(c){console.error("Failed to load cart from server:",c);try{const d=localStorage.getItem(`cart_${t.email}`);if(d){const u=JSON.parse(d);if(u.length>0){await te.post("/cart/sync",u);const h=await te.get("/cart");a(h.data.items||[]),localStorage.removeItem(`cart_${t.email}`)}}}catch(d){console.error("Failed to sync cart:",d)}}finally{s(!1)}})()},[t==null?void 0:t.email]);const o=b.useMemo(()=>{const c=!!localStorage.getItem("access_token");return{items:r,count:r.reduce((d,u)=>d+u.qty,0),isAuthenticated:c,isLoading:i,add:(d,u=1)=>{if(!c){alert("Please login or register to add items to cart"),window.location.href="/login";return}const h=crypto.randomUUID();a(p=>p.find(m=>m.productId===d.productId)?p.map(m=>m.productId===d.productId?{...m,qty:m.qty+u}:m):[...p,{...d,id:h,qty:u}]);try{Et(`${d.name} added to cart`,"success")}catch{}te.post("/cart/add",{productId:d.productId,slug:d.slug,name:d.name,price:d.price,qty:u,image:d.image}).then(()=>te.get("/cart")).then(p=>{a(p.data.items||[])}).catch(p=>{console.error("Failed to add item to cart:",p),Et("Failed to sync cart with server","error"),te.get("/cart").then(x=>{a(x.data.items||[])}).catch(()=>{})})},remove:d=>{a(u=>u.filter(h=>h.id!==d)),te.delete(`/cart/remove/${d}`).catch(u=>{console.error("Failed to remove item from cart:",u),te.get("/cart").then(h=>{a(h.data.items||[])}).catch(()=>{})})},update:(d,u)=>{u<1||(a(h=>h.map(p=>p.id===d?{...p,qty:u}:p)),te.put(`/cart/update/${d}`,null,{params:{qty:u}}).catch(h=>{console.error("Failed to update cart item:",h),te.get("/cart").then(p=>{a(p.data.items||[])}).catch(()=>{})}))},clear:()=>{a([]),te.delete("/cart/clear").catch(d=>{console.error("Failed to clear cart:",d),te.get("/cart").then(u=>{a(u.data.items||[])}).catch(()=>{})})}}},[r,i]);return n.jsx(H1.Provider,{value:o,children:e})}function Zn(){const e=b.useContext(H1);if(!e)throw new Error("useCart must be used within CartProvider");return e}async function Ls(e){const t=document.querySelector(".cart-link .badge");if(!e||!t)return;const r=e.getBoundingClientRect(),a=t.getBoundingClientRect();let i;if(e instanceof HTMLImageElement){const d=document.createElement("img");d.src=e.currentSrc||e.src,d.alt="",i=d}else{const d=document.createElement("div");d.style.background="rgba(255,255,255,0.9)",i=d}i.style.position="fixed",i.style.left=`${r.left}px`,i.style.top=`${r.top}px`,i.style.width=`${r.width}px`,i.style.height=`${r.height}px`,i.style.borderRadius="12px",i.style.boxShadow="0 10px 30px rgba(0,0,0,0.35)",i.style.zIndex="3000",i.style.pointerEvents="none",document.body.appendChild(i);const s=a.left+a.width/2-(r.left+r.width/2),o=a.top+a.height/2-(r.top+r.height/2),l=[{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${s*.2}px, ${o*.2}px) scale(0.9)`,opacity:.9},{transform:`translate(${s}px, ${o}px) scale(0.15)`,opacity:.1}],c={duration:600,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"};await i.animate(l,c).finished.catch(()=>{}),i.remove();try{t.classList.add("sparkle"),setTimeout(()=>t.classList.remove("sparkle"),700)}catch{}}function Wv(){const{slug:e}=u1(),[t,r]=b.useState(null),[a,i]=b.useState(0),{add:s}=Zn(),o=St(),l=b.useRef(null);if(b.useEffect(()=>{e&&Se.get(`/api/v1/products/${e}`).then(p=>r(p.data))},[e]),!t)return n.jsx("div",{className:"container",style:{padding:24},children:"Loading..."});const c=t.images&&t.images.length>0?t.images:["https://via.placeholder.com/600x400"],d=()=>{i(p=>(p+1)%c.length)},u=()=>{i(p=>(p-1+c.length)%c.length)},h=p=>{i(p)};return n.jsx("div",{className:"container",style:{padding:24},children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",boxShadow:"var(--shadow)"},children:[n.jsx("img",{ref:l,src:c[a],alt:`${t.name} - Image ${a+1}`,style:{width:"100%",display:"block",aspectRatio:"4/3",objectFit:"cover"}}),c.length>1&&n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:u,style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:p=>p.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Previous image",children:"‹"}),n.jsx("button",{onClick:d,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:p=>p.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Next image",children:"›"}),n.jsxs("div",{style:{position:"absolute",bottom:12,right:12,background:"rgba(0,0,0,0.6)",color:"white",padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:500},children:[a+1," / ",c.length]})]})]}),c.length>1&&n.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto",paddingBottom:8},children:c.map((p,x)=>n.jsx("button",{onClick:()=>h(x),style:{border:a===x?"2px solid var(--brand)":"2px solid transparent",borderRadius:8,overflow:"hidden",cursor:"pointer",padding:0,background:"transparent",flexShrink:0,opacity:a===x?1:.6,transition:"opacity 0.2s, border-color 0.2s"},onMouseEnter:m=>m.currentTarget.style.opacity="1",onMouseLeave:m=>m.currentTarget.style.opacity=a===x?"1":"0.6","aria-label":`View image ${x+1}`,children:n.jsx("img",{src:p,alt:`${t.name} thumbnail ${x+1}`,style:{width:80,height:80,objectFit:"cover",display:"block"}})},x))})]}),n.jsxs("div",{children:[n.jsx("h1",{style:{marginTop:0},children:t.name}),n.jsxs("div",{className:"price",style:{fontSize:22},children:["LKR ",t.price]}),n.jsx("p",{style:{color:"var(--muted)"},children:t.description||"A beautiful product made for you."}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{className:"btn",onClick:()=>{l.current&&Ls(l.current),s({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]})},children:"Add to Cart"}),n.jsx("button",{className:"btn",onClick:()=>{l.current&&Ls(l.current),s({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]}),o("/cart")},children:"Buy Now"})]})]})]})})}function qv(){var j;const{login:e}=Ft(),[t,r]=b.useState(""),[a,i]=b.useState(""),[s,o]=b.useState(null),[l,c]=b.useState(!1),[d,u]=b.useState(!1),[h,p]=b.useState(!0),[x,m]=b.useState(!1),y=St(),w=Nt(),v=b.useRef(null),g=((j=w.state)==null?void 0:j.from)||"/";b.useEffect(()=>{m(!0)},[]),b.useEffect(()=>{s&&v.current&&v.current.focus()},[s]),b.useEffect(()=>{let k;return d&&(k=window.setTimeout(()=>u(!1),5e3)),()=>{k&&window.clearTimeout(k)}},[d]);async function f(k){if(k.preventDefault(),o(null),!t||!a){o("Email and password are required.");return}try{c(!0),await e(t,a),h&&typeof localStorage<"u"?localStorage.setItem("remember","1"):localStorage.removeItem("remember"),y(g)}catch{o("Invalid credentials")}finally{c(!1)}}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"})]}),n.jsx("section",{className:`login-hero ${x?"animate-in":""}`,children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Secure Login"]}),n.jsx("h1",{className:"headline",children:"Welcome back"}),n.jsx("p",{className:"subhead",children:"Sign in to manage orders, track deliveries, and update account details."}),n.jsxs("div",{className:"hero-decorations",children:[n.jsx("div",{className:"decoration-line line-1"}),n.jsx("div",{className:"decoration-line line-2"}),n.jsx("div",{className:"decoration-dot dot-1"}),n.jsx("div",{className:"decoration-dot dot-2"}),n.jsx("div",{className:"decoration-dot dot-3"})]})]})})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:`container login-wrap ${x?"animate-in":""}`,children:[n.jsxs("div",{className:"panel main-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsx("h2",{className:"section-title",children:"Login"}),n.jsx("div",{className:"title-underline"})]}),n.jsx("div",{ref:v,tabIndex:-1,"aria-live":"assertive","aria-atomic":"true",className:"live",children:s&&n.jsxs("div",{className:"alert error",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),s]})}),n.jsxs("form",{className:"form",onSubmit:f,noValidate:!0,children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"email",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),n.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),n.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:k=>r(k.target.value),required:!0})]}),n.jsxs("div",{className:"field",children:[n.jsxs("div",{className:"label-row",children:[n.jsxs("label",{htmlFor:"password",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Password"]}),n.jsx(Y,{to:"/forgot",className:"link",children:"Forgot password?"})]}),n.jsxs("div",{className:"pw-wrap",children:[n.jsx("input",{id:"password",type:d?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:a,onChange:k=>i(k.target.value),required:!0}),n.jsx("button",{type:"button",className:"pw-toggle","aria-label":d?"Hide password":"Show password","aria-pressed":d,"aria-controls":"password",onClick:()=>u(k=>!k),title:d?"Hide password":"Show password",children:d?n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),n.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),n.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),n.jsx("p",{className:"tiny muted",children:"Password visibility will auto-hide after 5 seconds."})]}),n.jsxs("div",{className:"row between",children:[n.jsxs("label",{className:"check",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:k=>p(k.target.checked)}),n.jsx("span",{className:"checkmark",children:n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),n.jsx("span",{children:"Remember me"})]}),n.jsxs("span",{className:"tiny muted",children:["Need an account? ",n.jsx(Y,{to:"/register",className:"link",children:"Register"})]})]}),n.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,children:l?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Signing in…"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"})}),"Login"]})}),n.jsxs("div",{className:"or",children:[n.jsx("span",{className:"line"}),n.jsx("span",{className:"muted",children:"or continue with"}),n.jsx("span",{className:"line"})]}),n.jsxs("div",{className:"oauth",children:[n.jsxs("button",{type:"button",className:"btn btn-ghost oauth-btn",onClick:()=>alert("Coming soon"),children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:[n.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),n.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),n.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),n.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Google"]}),n.jsxs("button",{type:"button",className:"btn btn-ghost oauth-btn",onClick:()=>alert("Coming soon"),children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),"GitHub"]})]})]})]}),n.jsxs("aside",{className:"panel tips",children:[n.jsx("div",{className:"tips-icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})})}),n.jsx("h3",{children:"Tips"}),n.jsxs("ul",{className:"list",children:[n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Use the email registered during checkout."]}),n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Passwords are case-sensitive; check CAPS LOCK."]}),n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"After multiple failed attempts, wait a minute before retrying."]})]}),n.jsxs("div",{className:"support",children:[n.jsx("p",{className:"muted",children:"Still need help?"}),n.jsxs(Y,{to:"/contact",className:"btn btn-support",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Contact support"]})]})]})]})}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .login-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .login-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .login-wrap {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .login-wrap.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .login-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-content {
          position: relative;
          text-align: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(109, 116, 255, 0.1);
          border: 1px solid rgba(109, 116, 255, 0.3);
          border-radius: 20px;
          color: var(--brand);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(109, 116, 255, 0.5);
          }
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .hero-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .decoration-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--brand), transparent);
          opacity: 0.3;
        }
        
        .line-1 {
          width: 200px;
          top: 20%;
          left: 10%;
          animation: lineSlide 3s ease-in-out infinite;
        }
        
        .line-2 {
          width: 150px;
          bottom: 20%;
          right: 15%;
          animation: lineSlide 3s ease-in-out infinite;
          animation-delay: -1.5s;
        }
        
        @keyframes lineSlide {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateX(20px);
            opacity: 0.6;
          }
        }
        
        .decoration-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--brand);
          border-radius: 50%;
          animation: dotFloat 4s ease-in-out infinite;
        }
        
        .dot-1 {
          top: 15%;
          right: 20%;
          animation-delay: 0s;
        }
        
        .dot-2 {
          bottom: 25%;
          left: 15%;
          animation-delay: -1.3s;
        }
        
        .dot-3 {
          top: 50%;
          right: 10%;
          animation-delay: -2.6s;
        }
        
        @keyframes dotFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }
        
        /* ========================================
           MAIN SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .login-wrap{
          display:grid;
          grid-template-columns:1.2fr .8fr;
          gap:24px;
        }
        
        /* ========================================
           PANEL STYLES (GLASSMORPHISM)
           ======================================== */
        
        .panel{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:20px;
          padding:32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }
        
        .main-panel {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes panelSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .panel-header {
          margin-bottom: 24px;
        }
        
        .section-title{
          margin:0 0 8px;
          font-size:28px;
          font-weight: 700;
          color: var(--text);
        }
        
        .title-underline {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 60px;
            opacity: 1;
          }
        }
        
        /* ========================================
           FORM STYLES
           ======================================== */
        
        .form{
          display:grid;
          gap:20px;
        }
        
        .field{
          display:grid;
          gap:10px;
        }
        
        .label-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
        
        label{
          font-size:14px;
          color:var(--muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        input{
          height:48px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          color:var(--text);
          padding:0 16px;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        input:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        .pw-wrap{
          position:relative;
        }
        
        .pw-toggle{
          position:absolute;
          right:12px;
          top:50%;
          transform:translateY(-50%);
          height:36px;
          width:40px;
          border-radius:10px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(35, 36, 52, 0.6);
          color:var(--muted);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .pw-toggle:hover {
          background: rgba(35, 36, 52, 0.9);
          border-color: var(--brand);
          color: var(--brand);
        }
        
        .tiny{
          font-size:12px;
          margin-top: 4px;
        }
        
        .muted{
          color:var(--muted);
        }
        
        .row.between{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        /* ========================================
           CUSTOM CHECKBOX
           ======================================== */
        
        .check{
          display:flex;
          align-items:center;
          gap:10px;
          cursor: pointer;
          user-select: none;
        }
        
        .check input[type="checkbox"] {
          display: none;
        }
        
        .checkmark {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        
        .checkmark svg {
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s;
        }
        
        .check input[type="checkbox"]:checked + .checkmark {
          background: var(--brand);
          border-color: var(--brand);
        }
        
        .check input[type="checkbox"]:checked + .checkmark svg {
          opacity: 1;
          transform: scale(1);
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:10px;
          border-radius:12px;
          padding:14px 20px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-ghost{
          background:rgba(35, 36, 52, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .btn-ghost:hover {
          background: rgba(35, 36, 52, 0.9);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .spinner-icon {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* ========================================
           OAUTH SECTION
           ======================================== */
        
        .or{
          display:flex;
          align-items:center;
          gap:12px;
          margin:8px 0;
        }
        
        .line{
          flex:1;
          height:1px;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .oauth{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }
        
        .oauth-btn {
          flex: 1;
          min-width: 120px;
        }
        
        /* ========================================
           TIPS PANEL
           ======================================== */
        
        .tips {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .tips-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(109, 116, 255, 0.2), rgba(118, 75, 162, 0.2));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
          margin-bottom: 16px;
        }
        
        .tips h3{
          margin:0 0 16px;
          font-size: 20px;
          color: var(--text);
        }
        
        .list{
          list-style:none;
          padding:0;
          margin:0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--muted);
          line-height: 1.6;
        }
        
        .list li svg {
          flex-shrink: 0;
          color: var(--brand);
          margin-top: 2px;
        }
        
        .support{
          display:flex;
          flex-direction: column;
          gap:12px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn-support {
          background: rgba(109, 116, 255, 0.1);
          border-color: rgba(109, 116, 255, 0.3);
          color: var(--brand);
        }
        
        .btn-support:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        /* ========================================
           ALERT STYLES
           ======================================== */
        
        .live{
          outline:none;
        }
        
        .alert{
          border-radius:12px;
          padding:14px 16px;
          margin-bottom:16px;
          border:1px solid rgba(255,93,93,.5);
          background: rgba(255,93,93,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#ffc9c9;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: alertSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes alertSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* ========================================
           LINK STYLES
           ======================================== */
        
        .link{
          color:var(--brand);
          text-decoration:none;
          transition: all 0.2s;
        }
        
        .link:hover{
          color: var(--brand-600);
          text-decoration:underline;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:900px){
          .login-wrap{
            grid-template-columns:1fr;
          }
          
          .hero-decorations {
            display: none;
          }
          
          .headline {
            font-size: 36px;
          }
          
          .subhead {
            font-size: 16px;
          }
          
          .panel {
            padding: 24px;
          }
        }
        
        @media (max-width:480px){
          .oauth {
            flex-direction: column;
          }
          
          .oauth-btn {
            width: 100%;
          }
          
          .row.between {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Vv(){const{register:e}=Ft(),[t,r]=b.useState(""),[a,i]=b.useState(""),[s,o]=b.useState(""),[l,c]=b.useState(""),[d,u]=b.useState(!1),[h,p]=b.useState(!0),[x,m]=b.useState(!1),[y,w]=b.useState(!1),[v,g]=b.useState(null),[f,j]=b.useState(null),[k,C]=b.useState(!1),[N,z]=b.useState(!1),W=St(),A=b.useRef(null);b.useEffect(()=>{z(!0)},[]),b.useEffect(()=>{(v||f)&&A.current&&A.current.focus()},[v,f]);const P=b.useMemo(()=>{let B=0;return a.length>=8&&B++,/[A-Z]/.test(a)&&B++,/[a-z]/.test(a)&&B++,/\d/.test(a)&&B++,/[^A-Za-z0-9]/.test(a)&&B++,B},[a]),Z=["Very weak","Weak","Fair","Good","Strong","Excellent"][P];async function L(B){if(B.preventDefault(),j(null),g(null),!l||!t||!a||!s){j("All fields are required.");return}if(a!==s){j("Passwords do not match.");return}if(!d){j("Please agree to the Terms and Privacy Policy.");return}try{C(!0),await e(t,a,l),g("Check the inbox to verify the account. Redirecting to Login…"),setTimeout(()=>W("/login"),1e3)}catch{j("Could not create the account. Try again later.")}finally{C(!1)}}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"particles",children:[...Array(20)].map((B,se)=>n.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`}},se))})]}),n.jsx("section",{className:`register-hero ${N?"animate-in":""}`,children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"Join Us Today"]}),n.jsx("h1",{className:"headline",children:"Create an account"}),n.jsx("p",{className:"subhead",children:"Join to track orders, save preferences, and get faster checkout."}),n.jsxs("div",{className:"hero-decorations",children:[n.jsx("div",{className:"decoration-circle circle-1"}),n.jsx("div",{className:"decoration-circle circle-2"}),n.jsx("div",{className:"decoration-line line-1"}),n.jsx("div",{className:"decoration-line line-2"})]})]})})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:`container reg-wrap ${N?"animate-in":""}`,children:[n.jsxs("div",{className:"panel main-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsx("h2",{className:"section-title",children:"Register"}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{ref:A,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[v&&n.jsxs("div",{className:"alert success",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),v]}),f&&n.jsxs("div",{className:"alert error",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),f]})]}),n.jsxs("form",{className:"form",onSubmit:L,noValidate:!0,children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"fullName",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Full name"]}),n.jsx("input",{id:"fullName",type:"text",autoComplete:"name",placeholder:"e.g., Ishfaque Mif",value:l,onChange:B=>c(B.target.value),required:!0})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"email",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),n.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),n.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:B=>r(B.target.value),required:!0})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"password",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Password"]}),n.jsxs("div",{className:"pw-wrap",children:[n.jsx("input",{id:"password",type:x?"text":"password",autoComplete:"new-password",placeholder:"At least 8 characters",value:a,onChange:B=>i(B.target.value),required:!0,"aria-describedby":"pw-help"}),n.jsx("button",{type:"button",className:"pw-toggle","aria-label":x?"Hide password":"Show password","aria-pressed":x,"aria-controls":"password",onClick:()=>m(B=>!B),children:x?n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),n.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),n.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),n.jsx("div",{id:"pw-help",className:"tiny muted",children:"Use 8+ chars with a mix of upper/lowercase, numbers, and a symbol."}),n.jsxs("div",{className:"meter","aria-hidden":"true",children:[n.jsx("span",{className:`m${P}`}),n.jsx("em",{className:"muted",children:Z})]}),n.jsxs("ul",{className:"reqs",children:[n.jsxs("li",{className:a.length>=8?"ok":"",children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"8+ characters"]}),n.jsxs("li",{className:/[A-Z]/.test(a)?"ok":"",children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Uppercase letter"]}),n.jsxs("li",{className:/[a-z]/.test(a)?"ok":"",children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Lowercase letter"]}),n.jsxs("li",{className:/\d/.test(a)?"ok":"",children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Number"]}),n.jsxs("li",{className:/[^A-Za-z0-9]/.test(a)?"ok":"",children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Symbol"]})]})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"confirm",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Confirm password"]}),n.jsxs("div",{className:"pw-wrap",children:[n.jsx("input",{id:"confirm",type:y?"text":"password",autoComplete:"new-password",placeholder:"Re-enter password",value:s,onChange:B=>o(B.target.value),required:!0}),n.jsx("button",{type:"button",className:"pw-toggle","aria-label":y?"Hide password":"Show password","aria-pressed":y,"aria-controls":"confirm",onClick:()=>w(B=>!B),children:y?n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),n.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),n.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),s&&s!==a&&n.jsxs("div",{className:"tiny error-text",children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"})}),"Passwords do not match."]})]}),n.jsxs("label",{className:"check",children:[n.jsx("input",{type:"checkbox",checked:d,onChange:B=>u(B.target.checked),required:!0}),n.jsx("span",{className:"checkmark",children:n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),n.jsxs("span",{children:["I agree to the ",n.jsx(Y,{to:"/terms",className:"link",children:"Terms"})," and"," ",n.jsx(Y,{to:"/privacy",className:"link",children:"Privacy Policy"}),"."]})]}),n.jsxs("label",{className:"check",children:[n.jsx("input",{type:"checkbox",checked:h,onChange:B=>p(B.target.checked)}),n.jsx("span",{className:"checkmark",children:n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),n.jsx("span",{children:"Send occasional product updates and offers."})]}),n.jsx("button",{className:"btn btn-primary",type:"submit",disabled:k,children:k?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Creating…"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"Create account"]})}),n.jsxs("div",{className:"row between",children:[n.jsx("span",{className:"tiny muted",children:"Already have an account?"}),n.jsx(Y,{to:"/login",className:"link",children:"Login"})]})]})]}),n.jsxs("aside",{className:"panel tips",children:[n.jsx("div",{className:"tips-icon",children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),n.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})]})}),n.jsx("h3",{children:"Why create an account?"}),n.jsxs("ul",{className:"list",children:[n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Faster checkout and saved details."]}),n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Order history and tracking."]}),n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Early access to limited releases."]})]}),n.jsxs("div",{className:"support",children:[n.jsx("p",{className:"muted",children:"Need help?"}),n.jsxs(Y,{to:"/contact",className:"btn btn-support",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Contact support"]})]})]})]})}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --positive:#1fbf75;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #1fbf75 0%, #06d6a0 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(109, 116, 255, 0.5);
          border-radius: 50%;
          animation: particleFloat 5s ease-in-out infinite;
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .register-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .register-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .reg-wrap {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .reg-wrap.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .register-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-content {
          position: relative;
          text-align: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(31, 191, 117, 0.1);
          border: 1px solid rgba(31, 191, 117, 0.3);
          border-radius: 20px;
          color: var(--positive);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(31, 191, 117, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(31, 191, 117, 0.5);
          }
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .hero-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .decoration-circle {
          position: absolute;
          border: 2px solid rgba(109, 116, 255, 0.3);
          border-radius: 50%;
          animation: circleRotate 10s linear infinite;
        }
        
        .circle-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 15%;
        }
        
        .circle-2 {
          width: 60px;
          height: 60px;
          bottom: 20%;
          right: 20%;
          animation-delay: -5s;
        }
        
        @keyframes circleRotate {
          0% {
            transform: rotate(0deg);
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.3;
          }
        }
        
        .decoration-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--positive), transparent);
          opacity: 0.3;
        }
        
        .line-1 {
          width: 200px;
          top: 30%;
          left: 10%;
          animation: lineSlide 3s ease-in-out infinite;
        }
        
        .line-2 {
          width: 150px;
          bottom: 30%;
          right: 15%;
          animation: lineSlide 3s ease-in-out infinite;
          animation-delay: -1.5s;
        }
        
        @keyframes lineSlide {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateX(20px);
            opacity: 0.6;
          }
        }
        
        /* ========================================
           MAIN SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .reg-wrap{
          display:grid;
          grid-template-columns:1.2fr .8fr;
          gap:24px;
        }
        
        /* ========================================
           PANEL STYLES (GLASSMORPHISM)
           ======================================== */
        
        .panel{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:20px;
          padding:32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }
        
        .main-panel {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes panelSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .panel-header {
          margin-bottom: 24px;
        }
        
        .section-title{
          margin:0 0 8px;
          font-size:28px;
          font-weight: 700;
          color: var(--text);
        }
        
        .title-underline {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 60px;
            opacity: 1;
          }
        }
        
        /* ========================================
           FORM STYLES
           ======================================== */
        
        .form{
          display:grid;
          gap:20px;
        }
        
        .field{
          display:grid;
          gap:10px;
        }
        
        label{
          font-size:14px;
          color:var(--muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        input{
          height:48px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          color:var(--text);
          padding:0 16px;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        input:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        .pw-wrap{
          position:relative;
        }
        
        .pw-toggle{
          position:absolute;
          right:12px;
          top:50%;
          transform:translateY(-50%);
          height:36px;
          width:40px;
          border-radius:10px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(35, 36, 52, 0.6);
          color:var(--muted);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .pw-toggle:hover {
          background: rgba(35, 36, 52, 0.9);
          border-color: var(--brand);
          color: var(--brand);
        }
        
        /* ========================================
           PASSWORD STRENGTH METER
           ======================================== */
        
        .meter{
          display:flex;
          align-items:center;
          gap:12px;
          margin-top:10px;
        }
        
        .meter span{
          display:block;
          height:8px;
          border-radius:999px;
          background: rgba(35, 36, 52, 0.6);
          position:relative;
          flex:1;
          overflow:hidden;
        }
        
        .meter span::after{
          content:'';
          position:absolute;
          left:0;
          top:0;
          bottom:0;
          background:linear-gradient(90deg,#ff6363,#ffd166,#06d6a0);
          width:0%;
          transition: width 0.3s;
        }
        
        .meter span.m0::after{width:5%}
        .meter span.m1::after{width:20%}
        .meter span.m2::after{width:40%}
        .meter span.m3::after{width:60%}
        .meter span.m4::after{width:80%}
        .meter span.m5::after{width:100%}
        
        .meter em {
          font-size: 13px;
          font-style: normal;
          font-weight: 600;
        }
        
        .reqs{
          display:grid;
          gap:8px;
          font-size:13px;
          color:var(--muted);
          margin:12px 0 0;
          padding:0;
          list-style:none;
        }
        
        .reqs li {
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
        }
        
        .reqs li svg {
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s;
        }
        
        .reqs .ok{
          color:#9be7c4;
        }
        
        .reqs .ok svg {
          opacity: 1;
          transform: scale(1);
        }
        
        /* ========================================
           CUSTOM CHECKBOX
           ======================================== */
        
        .check{
          display:flex;
          align-items:center;
          gap:10px;
          cursor: pointer;
          user-select: none;
        }
        
        .check input[type="checkbox"] {
          display: none;
        }
        
        .checkmark {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        
        .checkmark svg {
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s;
        }
        
        .check input[type="checkbox"]:checked + .checkmark {
          background: var(--brand);
          border-color: var(--brand);
        }
        
        .check input[type="checkbox"]:checked + .checkmark svg {
          opacity: 1;
          transform: scale(1);
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:10px;
          border-radius:12px;
          padding:14px 20px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-support {
          background: rgba(109, 116, 255, 0.1);
          border-color: rgba(109, 116, 255, 0.3);
          color: var(--brand);
        }
        
        .btn-support:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        .spinner-icon {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* ========================================
           TIPS PANEL
           ======================================== */
        
        .tips {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .tips-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(31, 191, 117, 0.2), rgba(6, 214, 160, 0.2));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--positive);
          margin-bottom: 16px;
        }
        
        .tips h3{
          margin:0 0 16px;
          font-size: 20px;
          color: var(--text);
        }
        
        .list{
          list-style:none;
          padding:0;
          margin:0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--muted);
          line-height: 1.6;
        }
        
        .list li svg {
          flex-shrink: 0;
          color: var(--positive);
          margin-top: 2px;
        }
        
        .support{
          display:flex;
          flex-direction: column;
          gap:12px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .row.between{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-top:8px;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .tiny{
          font-size:12px;
        }
        
        .muted{
          color:var(--muted);
        }
        
        /* ========================================
           ALERT STYLES
           ======================================== */
        
        .live{
          outline:none;
        }
        
        .alert{
          border-radius:12px;
          padding:14px 16px;
          margin-bottom:16px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: alertSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes alertSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .alert.success{
          border:1px solid rgba(31,191,117,.5);
          background: rgba(31,191,117,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#c7f5df;
        }
        
        .alert.error{
          border:1px solid rgba(255,93,93,.5);
          background: rgba(255,93,93,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#ffc9c9;
        }
        
        .error-text{
          color:#ffbcbc;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
        }
        
        /* ========================================
           LINK STYLES
           ======================================== */
        
        .link{
          color:var(--brand);
          text-decoration:none;
          transition: all 0.2s;
        }
        
        .link:hover{
          color: var(--brand-600);
          text-decoration:underline;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:900px){
          .reg-wrap{
            grid-template-columns:1fr;
          }
          
          .hero-decorations {
            display: none;
          }
          
          .headline {
            font-size: 36px;
          }
          
          .subhead {
            font-size: 16px;
          }
          
          .panel {
            padding: 24px;
          }
        }
        
        @media (max-width:480px){
          .row.between {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Yv(){const{items:e,update:t,remove:r,clear:a}=Zn(),i=St(),[s,o]=b.useState(!1),[l,c]=b.useState(!1);b.useEffect(()=>{c(!0)},[]);const d=b.useMemo(()=>e.reduce((x,m)=>x+m.price*m.qty,0),[e]),u=(x,m)=>{m<1||Number.isNaN(m)||t(x,m)},h=()=>o(!0),p=encodeURIComponent(`Hello, I have transferred LKR ${d.toFixed(2)} for my order. Here is my payment confirmation.`);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"floating-carts",children:[...Array(5)].map((x,m)=>n.jsx("div",{className:"floating-cart",style:{left:`${10+Math.random()*80}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${8+Math.random()*4}s`},children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"21",r:"1"}),n.jsx("circle",{cx:"20",cy:"21",r:"1"}),n.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]})},m))})]}),n.jsx("section",{className:`cart-hero ${l?"animate-in":""}`,children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"21",r:"1"}),n.jsx("circle",{cx:"20",cy:"21",r:"1"}),n.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Shopping Cart"]}),n.jsx("h1",{className:"headline",children:"Your Cart"}),n.jsx("p",{className:"subhead",children:"Review items and complete checkout using bank transfer."}),e.length>0&&n.jsxs("div",{className:"cart-stats",children:[n.jsxs("div",{className:"stat",children:[n.jsx("span",{className:"stat-number",children:e.length}),n.jsx("span",{className:"stat-label",children:e.length===1?"Item":"Items"})]}),n.jsxs("div",{className:"stat",children:[n.jsxs("span",{className:"stat-number",children:["LKR ",d.toFixed(2)]}),n.jsx("span",{className:"stat-label",children:"Total"})]})]})]})})}),n.jsx("section",{className:"section",children:n.jsx("div",{className:"container",children:e.length===0?n.jsxs("div",{className:`empty ${l?"animate-in":""}`,children:[n.jsx("div",{className:"empty-anim","aria-hidden":!0,children:n.jsxs("svg",{className:"cart-svg",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsxs("g",{className:"animate-cart",children:[n.jsx("rect",{x:"26",y:"36",width:"60",height:"34",rx:"6",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.08)"}),n.jsx("path",{d:"M20 36h10M86 36h14",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),n.jsx("path",{d:"M32 70l-4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),n.jsx("path",{d:"M80 70l4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),n.jsx("circle",{cx:"40",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"}),n.jsx("circle",{cx:"72",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"})]}),n.jsxs("g",{className:"float-bubbles",children:[n.jsx("circle",{cx:"54",cy:"26",r:"3",fill:"var(--brand)"}),n.jsx("circle",{cx:"68",cy:"18",r:"2",fill:"var(--brand)"}),n.jsx("circle",{cx:"44",cy:"16",r:"2.5",fill:"var(--brand)"})]})]})}),n.jsx("h2",{children:"Your cart is empty"}),n.jsx("p",{className:"empty-text",children:"Looks like you haven't added any items yet. Start shopping to fill your cart!"}),n.jsx("div",{className:"actions",children:n.jsxs(Y,{to:"/shop",className:"btn btn-primary",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),n.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),n.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"Continue Shopping"]})})]}):n.jsx(n.Fragment,{children:n.jsxs("div",{className:`cart-wrap ${l?"animate-in":""}`,children:[n.jsx("div",{className:"table-wrap",role:"region","aria-label":"Cart items",children:n.jsxs("table",{className:"cart-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Product"}),n.jsx("th",{children:"Qty"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Total"}),n.jsx("th",{children:"Action"})]})}),n.jsx("tbody",{children:e.map((x,m)=>n.jsxs("tr",{style:{animationDelay:`${.1+m*.05}s`},children:[n.jsx("td",{className:"prod-cell",children:n.jsxs("div",{className:"prod",children:[x.image?n.jsx("img",{src:x.image,alt:x.name}):n.jsx("div",{className:"img-fallback","aria-hidden":!0,children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),n.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),n.jsx("polyline",{points:"21 15 16 10 5 21"})]})}),n.jsxs("div",{className:"prod-meta",children:[n.jsx(Y,{to:`/product/${x.slug}`,className:"prod-name",children:x.name}),n.jsxs("div",{className:"sku",children:["ID: ",x.id]})]})]})}),n.jsx("td",{className:"qty-cell",children:n.jsxs("div",{className:"qty",children:[n.jsx("button",{className:"btn-qty","aria-label":"Decrease quantity",onClick:()=>u(x.id,x.qty-1),children:n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),n.jsx("input",{type:"number",min:1,inputMode:"numeric",value:x.qty,onChange:y=>u(x.id,Number(y.target.value)),"aria-label":`Quantity for ${x.name}`}),n.jsx("button",{className:"btn-qty","aria-label":"Increase quantity",onClick:()=>u(x.id,x.qty+1),children:n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})}),n.jsxs("td",{children:["LKR ",Number(x.price).toFixed(2)]}),n.jsxs("td",{className:"total-price",children:["LKR ",(x.price*x.qty).toFixed(2)]}),n.jsx("td",{children:n.jsxs("button",{className:"btn btn-remove",onClick:()=>r(x.id),children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("polyline",{points:"3 6 5 6 21 6"}),n.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),n.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),n.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),"Remove"]})})]},x.id))}),n.jsx("tfoot",{children:n.jsxs("tr",{children:[n.jsx("td",{colSpan:3,className:"right",children:"Subtotal"}),n.jsxs("td",{colSpan:2,className:"subtotal",children:["LKR ",d.toFixed(2)]})]})})]})}),n.jsxs("aside",{className:"summary",children:[n.jsxs("div",{className:"summary-header",children:[n.jsxs("h2",{className:"summary-title",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),n.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),n.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),n.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),n.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),n.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),"Order Summary"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Subtotal"}),n.jsxs("span",{children:["LKR ",d.toFixed(2)]})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Shipping"}),n.jsx("span",{children:"Calculated at checkout"})]}),n.jsxs("div",{className:"summary-total",children:[n.jsx("span",{children:"Estimated Total"}),n.jsxs("span",{children:["LKR ",d.toFixed(2)]})]}),n.jsxs("div",{className:"summary-actions",children:[n.jsxs("button",{className:"btn btn-primary",onClick:h,children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),n.jsx("line",{x1:"2",y1:"10",x2:"22",y2:"10"})]}),"Proceed with Bank Transfer"]}),n.jsxs("button",{className:"btn btn-ghost",onClick:a,children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("polyline",{points:"3 6 5 6 21 6"}),n.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Clear Cart"]}),n.jsxs(Y,{className:"btn",to:"/shop",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Continue Shopping"]})]}),s&&n.jsxs("div",{className:"transfer",children:[n.jsx("div",{className:"transfer-header",children:n.jsxs("h3",{children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),n.jsx("line",{x1:"2",y1:"10",x2:"22",y2:"10"})]}),"Bank Transfer Instructions"]})}),n.jsx("p",{className:"muted",children:"Please transfer the estimated total amount to the bank account listed below. After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification."}),n.jsxs("div",{className:"bank-box",children:[n.jsxs("div",{className:"row",children:[n.jsxs("span",{children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Name"]}),n.jsx("strong",{children:"Ishfaque Mif"})]}),n.jsxs("div",{className:"row",children:[n.jsxs("span",{children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),n.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),"Bank"]}),n.jsx("strong",{children:"BOC"})]}),n.jsxs("div",{className:"row",children:[n.jsxs("span",{children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Branch"]}),n.jsx("strong",{children:"Puttalam"})]}),n.jsxs("div",{className:"row",children:[n.jsxs("span",{children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),n.jsx("line",{x1:"2",y1:"10",x2:"22",y2:"10"})]}),"Account No."]}),n.jsx("strong",{children:"89001476"})]}),n.jsxs("div",{className:"row highlight",children:[n.jsxs("span",{children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),n.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),"Amount"]}),n.jsxs("strong",{children:["LKR ",d.toFixed(2)]})]}),n.jsxs("div",{className:"row",children:[n.jsxs("span",{children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),n.jsx("polyline",{points:"14 2 14 8 20 8"})]}),"Reference"]}),n.jsx("strong",{children:"Order by your full name"})]})]}),n.jsxs("div",{className:"transfer-actions",children:[n.jsxs("a",{className:"btn btn-whatsapp",href:`https://wa.me/94768976222?text=${p}`,target:"_blank",rel:"noopener noreferrer",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"Send Confirmation via WhatsApp"]}),n.jsxs("button",{className:"btn-cta mega-cta",onClick:x=>{const m=x.currentTarget,y=m.getBoundingClientRect(),w=x.clientX-y.left,v=x.clientY-y.top,g=document.createElement("span");g.className="burst",g.style.left=`${w}px`,g.style.top=`${v}px`,m.appendChild(g),setTimeout(()=>g.remove(),800),m.classList.add("pressed"),setTimeout(()=>m.classList.remove("pressed"),150),i("/checkout")},onMouseMove:x=>{const m=x.currentTarget,y=m.getBoundingClientRect(),w=y.left+y.width/2,v=y.top+y.height/2,g=(x.clientX-w)/(y.width/2),f=(x.clientY-v)/(y.height/2),j=8;m.style.setProperty("--tx",`${g*6}px`),m.style.setProperty("--ty",`${f*6}px`),m.style.setProperty("--rx",`${-f*j}deg`),m.style.setProperty("--ry",`${g*j}deg`),m.style.setProperty("--mx",`${(g+1)/2*100}%`)},onMouseLeave:x=>{const m=x.currentTarget;m.style.removeProperty("--tx"),m.style.removeProperty("--ty"),m.style.removeProperty("--rx"),m.style.removeProperty("--ry"),m.style.removeProperty("--mx")},title:"Optionally upload the payment screenshot on the order page","aria-label":"Go to order page",children:[n.jsx("span",{className:"mega-cta__bg","aria-hidden":"true"}),n.jsx("span",{className:"mega-cta__border","aria-hidden":"true"}),n.jsx("span",{className:"mega-cta__glow","aria-hidden":"true"}),n.jsx("span",{className:"mega-cta__sheen","aria-hidden":"true"}),n.jsx("span",{className:"mega-cta__text",children:"Go to Order Page"}),n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",style:{marginLeft:10},children:[n.jsx("path",{d:"M5 12h14"}),n.jsx("path",{d:"M12 5l7 7-7 7"})]})]})]}),n.jsxs("p",{className:"note",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),"Optional: On the order/checkout page, include an upload option to attach the payment screenshot for records. Ensure the name and order reference match the WhatsApp message."]})]})]})]})})})}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --whatsapp:#25D366;
          --positive:#1fbf75;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #1fbf75 0%, #06d6a0 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #ff5d5d 0%, #ff4444 100%);
          top: 50%;
          right: 20%;
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .floating-carts {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .floating-cart {
          position: absolute;
          color: rgba(109, 116, 255, 0.2);
          animation: cartFloat 10s ease-in-out infinite;
        }
        
        @keyframes cartFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .cart-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .cart-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cart-wrap {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .cart-wrap.animate-in {
          opacity: 1;
        }
        
        .cart-wrap.animate-in tbody tr {
          opacity: 0;
          transform: translateX(-30px);
          animation: rowSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes rowSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .empty {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .empty.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .cart-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-content {
          max-width: 700px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(109, 116, 255, 0.1);
          border: 1px solid rgba(109, 116, 255, 0.3);
          border-radius: 20px;
          color: var(--brand);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(109, 116, 255, 0.5);
          }
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .cart-stats {
          display: flex;
          gap: 32px;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: var(--brand);
        }
        
        .stat-label {
          font-size: 13px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        /* ========================================
           SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        /* ========================================
           EMPTY CART
           ======================================== */
        
        .empty{
          border:1px solid rgba(255, 255, 255, 0.1);
          padding:60px 20px;
          border-radius:16px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          text-align:center;
        }
        
        .empty h2 {
          font-size: 24px;
          margin: 0 0 8px 0;
        }
        
        .empty-text {
          color: var(--muted);
          margin: 0 0 24px 0;
        }
        
        .empty-anim{
          display:flex;
          justify-content:center;
          margin:0 0 24px;
        }
        
        .cart-svg{
          width:120px;
          height:120px;
          filter:drop-shadow(0 6px 20px rgba(109,116,255,0.15));
        }
        
        .animate-cart{
          animation: cartFloatEmpty 2.6s ease-in-out infinite;
        }
        
        .float-bubbles circle:nth-child(1){
          animation: bubbleUp 3s ease-in-out infinite;
        }
        
        .float-bubbles circle:nth-child(2){
          animation: bubbleUp 2.6s ease-in-out infinite 0.3s;
        }
        
        .float-bubbles circle:nth-child(3){
          animation: bubbleUp 2.2s ease-in-out infinite 0.6s;
        }
        
        @keyframes cartFloatEmpty{
          0%,100%{ transform: translateY(0) }
          50%{ transform: translateY(-6px) }
        }
        
        @keyframes bubbleUp{
          0%{ transform: translateY(0); opacity:.8 }
          70%{ transform: translateY(-10px); opacity:.3 }
          100%{ transform: translateY(0); opacity:.8 }
        }
        
        .actions{
          margin-top:24px;
          display: flex;
          justify-content: center;
        }
        
        /* ========================================
           CART WRAP
           ======================================== */
        
        .cart-wrap{
          display:grid;
          grid-template-columns:1.5fr .8fr;
          gap:24px;
        }
        
        /* ========================================
           TABLE STYLES
           ======================================== */
        
        .table-wrap{
          overflow:auto;
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:16px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        table{
          width:100%;
          border-collapse:separate;
          border-spacing:0;
        }
        
        thead th{
          position:sticky;
          top:0;
          background: rgba(18, 18, 22, 0.95);
          backdrop-filter: blur(10px);
          text-align:left;
          padding:16px;
          border-bottom:1px solid rgba(255, 255, 255, 0.1);
          font-weight: 600;
          font-size: 14px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        tbody td{
          padding:16px;
          border-bottom:1px solid rgba(255, 255, 255, 0.05);
        }
        
        tbody tr:last-child td {
          border-bottom: none;
        }
        
        tbody tr:hover {
          background: rgba(109, 116, 255, 0.05);
        }
        
        tfoot td{
          padding:16px;
          background: rgba(18, 18, 22, 0.95);
          font-weight:700;
          border-top:1px solid rgba(255, 255, 255, 0.1);
        }
        
        .right{
          text-align:right;
        }
        
        .subtotal{
          font-weight:800;
          font-size: 18px;
          color: var(--brand);
        }
        
        .total-price {
          font-weight: 600;
          color: var(--positive);
        }
        
        /* ========================================
           PRODUCT CELL
           ======================================== */
        
        .prod{
          display:grid;
          grid-template-columns:80px 1fr;
          gap:12px;
          align-items:center;
        }
        
        .prod img,.img-fallback{
          width:80px;
          height:80px;
          border-radius:12px;
          object-fit:cover;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(23, 24, 33, 0.6);
        }
        
        .img-fallback {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
        }
        
        .prod-name{
          color:var(--text);
          text-decoration:none;
          font-weight:600;
          font-size: 15px;
          display: block;
          margin-bottom: 4px;
        }
        
        .prod-name:hover{
          color: var(--brand);
        }
        
        .sku{
          font-size:12px;
          color:var(--muted);
        }
        
        /* ========================================
           QUANTITY CONTROLS
           ======================================== */
        
        .qty{
          display:flex;
          align-items:center;
          gap:8px;
        }
        
        .btn-qty{
          width:32px;
          height:32px;
          border-radius:8px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(35, 36, 52, 0.6);
          color:var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .btn-qty:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        .qty input{
          width:64px;
          height:36px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:8px;
          color:var(--text);
          text-align:center;
          font-weight: 600;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:8px;
          border-radius:10px;
          padding:12px 18px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.3s;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        
        .btn:hover{
          transform:translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-ghost{
          background:rgba(35, 36, 52, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .btn-remove {
          background: rgba(255, 93, 93, 0.1);
          border-color: rgba(255, 93, 93, 0.3);
          color: var(--danger);
        }
        
        .btn-remove:hover {
          background: rgba(255, 93, 93, 0.2);
          border-color: var(--danger);
        }
        
        .btn-whatsapp {
          background: rgba(37, 211, 102, 0.1);
          border-color: rgba(37, 211, 102, 0.3);
          color: var(--whatsapp);
        }
        
        .btn-whatsapp:hover {
          background: rgba(37, 211, 102, 0.2);
          border-color: var(--whatsapp);
        }
        
        /* ========================================
           SUMMARY PANEL
           ======================================== */
        
        .summary{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:16px;
          padding:24px;
          position:sticky;
          top:16px;
          height:max-content;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .summary-header {
          margin-bottom: 20px;
        }
        
        .summary-title{
          margin:0 0 8px;
          font-size:20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .title-underline {
          height: 3px;
          width: 50px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 50px;
            opacity: 1;
          }
        }
        
        .summary-row{
          display:flex;
          justify-content:space-between;
          padding:12px 0;
          border-bottom:1px dashed rgba(255, 255, 255, 0.1);
          color:var(--muted);
        }
        
        .summary-total{
          display:flex;
          justify-content:space-between;
          padding:16px 0;
          margin-top:8px;
          font-weight:800;
          font-size: 18px;
          color: var(--brand);
        }
        
        .summary-actions{
          display:flex;
          flex-direction:column;
          gap:10px;
          margin-top:20px;
        }
        
        /* ========================================
           TRANSFER SECTION
           ======================================== */
        
        .transfer{
          margin-top:20px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(23, 24, 33, 0.6);
          border-radius:12px;
          padding:20px;
          animation: transferSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes transferSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .transfer-header h3{
          margin:0 0 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
        }
        
        .muted{
          color:var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }
        
        .bank-box{
          margin:16px 0;
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(18, 18, 22, 0.6);
          border-radius:12px;
        }
        
        .bank-box .row{
          display:flex;
          justify-content:space-between;
          align-items: center;
          padding:14px 16px;
          border-top:1px dashed rgba(255, 255, 255, 0.05);
        }
        
        .bank-box .row:first-child{
          border-top:none;
        }
        
        .bank-box .row span {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 14px;
        }
        
        .bank-box .row strong {
          color: var(--text);
        }
        
        .bank-box .row.highlight {
          background: rgba(109, 116, 255, 0.1);
        }
        
        .bank-box .row.highlight strong {
          color: var(--brand);
          font-size: 16px;
        }
        
        .transfer-actions{
          display:flex;
          gap:10px;
          flex-wrap:wrap;
          margin-top: 16px;
        }
        
        .note {
          margin-top: 16px;
          padding: 12px;
          background: rgba(109, 116, 255, 0.05);
          border: 1px solid rgba(109, 116, 255, 0.1);
          border-radius: 8px;
          font-size: 13px;
          color: var(--muted);
          display: flex;
          gap: 10px;
          line-height: 1.6;
        }
        
        .note svg {
          flex-shrink: 0;
          color: var(--brand);
          margin-top: 2px;
        }
        
        /* ========================================
           RED THEME MAX-ATTENTION CTA
           ======================================== */
        
        .btn-cta{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding:12px 18px;
          border-radius:10px;
          background:linear-gradient(90deg,var(--brand),#8a6bff);
          color:white;
          border:none;
          font-weight:700;
          box-shadow:0 10px 30px rgba(109,116,255,0.08);
          transition:transform .16s ease,box-shadow .16s ease,opacity .12s ease;
        }
        
        .btn-cta:hover{
          transform:translateY(-4px);
          box-shadow:0 18px 40px rgba(109,116,255,0.14);
          opacity:0.98;
        }
        
        .btn-cta:active{
          transform:translateY(-1px);
        }
        
        .btn-cta:focus{
          outline:none;
          box-shadow:0 0 0 4px rgba(109,116,255,0.14),0 18px 40px rgba(109,116,255,0.14);
        }
        
        .btn-cta svg{
          opacity:.95;
        }
        
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
          cursor: pointer;
          width: 100%;
          font-size: 15px;
          font-weight: 700;
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
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:1024px){
          .cart-wrap{
            grid-template-columns:1fr;
          }
          
          .summary{
            position:static;
          }
          
          .cart-stats {
            flex-direction: column;
            gap: 16px;
          }
        }
        
        @media (max-width:640px){
          .prod {
            grid-template-columns: 60px 1fr;
          }
          
          .prod img, .img-fallback {
            width: 60px;
            height: 60px;
          }
          
          .transfer-actions {
            flex-direction: column;
          }
          
          .mega-cta {
            width: 100%;
          }
        }
      `})]})}const Zv=["Commercial Bank of Ceylon","Bank of Ceylon (BOC)","Hatton National Bank (HNB)","Sampath Bank","Nations Trust Bank","DFCC Bank","Seylan Bank","Union Bank","Pan Asia Banking Corporation","Amana Bank","Cargills Bank","National Development Bank (NDB)","People's Bank"],Lr={accountHolder:"Ishfaque Mif",bank:"Bank of Ceylon (BOC)",branch:"Puttalam",accountNumber:"89001476",whatsapp:"+94 76 897 6222"};function Gv(){const{items:e,clear:t}=Zn(),{user:r}=Ft(),[a,i]=b.useState({line1:"",city:"",postal_code:"",country:"LK"}),[s,o]=b.useState(null),[l,c]=b.useState(null),[d,u]=b.useState(!1),[h,p]=b.useState(null),[x,m]=b.useState(null),[y,w]=b.useState(""),[v,g]=b.useState(""),[f,j]=b.useState(""),[k,C]=b.useState(""),[N,z]=b.useState(null),[W,A]=b.useState(null),[P,Z]=b.useState(!1),[L,B]=b.useState(""),[se,K]=b.useState("");b.useEffect(()=>{r!=null&&r.email&&!f&&j(r.email)},[r,f]);async function M(E){var Q;const O=(Q=E.target.files)==null?void 0:Q[0];if(!O)return;if(!["application/pdf","image/jpeg","image/jpg","image/png"].includes(O.type)){p("Only PDF, JPG, and PNG files are allowed");return}if(O.size>5*1024*1024){p("File size must be less than 5MB");return}z(O),p(null),Z(!0);try{const me=new FormData;me.append("file",O);const _=await te.post("/checkout/upload-receipt",me,{headers:{"Content-Type":"multipart/form-data"}});A(_.data.url)}catch{p("Failed to upload receipt. Please try again."),z(null)}finally{Z(!1)}}async function T(E){var O,U;E.preventDefault(),p(null),u(!0);try{if(!y||!v||!f||!k||!W){p("Please fill all required fields and upload receipt"),u(!1);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)){p("Please enter a valid email address"),u(!1);return}const me={shipping_address:a,payment_method:"bank_transfer",customer_name:y,customer_phone:v,customer_email:f,selected_bank:k,transfer_receipt_url:W,transaction_reference:L,additional_notes:se,items:e.map(X=>({product_id:X.id,title:X.name,quantity:X.qty,price:X.price})),total_amount:e.reduce((X,re)=>X+re.price*re.qty,0)},_=await te.post("/checkout",me);o(_.data.order_id),c(_.data.bank_transfer),t()}catch(Q){p(((U=(O=Q.response)==null?void 0:O.data)==null?void 0:U.detail)||"Failed to create order. Please try again.")}finally{u(!1)}}return n.jsx("div",{className:"checkout-wrap",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"head",children:[n.jsxs("div",{children:[n.jsx("p",{className:"kicker",children:"Checkout"}),n.jsx("h1",{className:"headline",children:"Complete your order"}),n.jsx("p",{className:"muted",children:"Secure bank transfer • Upload receipt • Fast verification"})]}),e.length>0&&n.jsxs("div",{className:"pill",children:[n.jsx("span",{children:e.reduce((E,O)=>E+O.qty,0)})," items"]})]}),h&&n.jsx("div",{className:"alert error",children:h}),s?n.jsxs("div",{style:{maxWidth:"600px",margin:"40px auto",padding:"0",position:"relative"},children:[n.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",padding:"48px 32px",boxShadow:"0 20px 60px rgba(102, 126, 234, 0.4)",textAlign:"center",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",top:"-100px",right:"-100px"}}),n.jsx("div",{style:{position:"absolute",width:"150px",height:"150px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",bottom:"-75px",left:"-75px"}}),n.jsx("div",{style:{width:"100px",height:"100px",margin:"0 auto 24px",background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(56, 239, 125, 0.4)",position:"relative",animation:"bounce 1s ease infinite"},children:n.jsx("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})})}),n.jsx("h1",{style:{color:"white",fontSize:"32px",fontWeight:"bold",marginBottom:"16px",textShadow:"0 2px 10px rgba(0,0,0,0.2)",position:"relative"},children:"Order Placed Successfully!"}),n.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(10px)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"20px",marginBottom:"24px",position:"relative"},children:[n.jsx("div",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"14px",marginBottom:"8px",fontWeight:"500"},children:"Order ID"}),n.jsxs("div",{style:{color:"white",fontSize:"24px",fontWeight:"bold",letterSpacing:"1px",fontFamily:"monospace"},children:["#",s]})]}),n.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"12px",padding:"20px",marginBottom:"24px",textAlign:"left",position:"relative"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[n.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"rgba(255, 183, 77, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px"},children:n.jsx("span",{style:{fontSize:"24px"},children:"⏳"})}),n.jsxs("div",{children:[n.jsx("div",{style:{color:"white",fontSize:"16px",fontWeight:"bold"},children:"Pending Verification"}),n.jsx("div",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"13px"},children:"Your order is being reviewed"})]})]}),n.jsx("div",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"14px",lineHeight:"1.6"},children:"We will review your payment receipt and update your order status shortly. You will be notified once your payment is verified."})]}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative"},children:[n.jsxs("button",{onClick:()=>window.location.href="/orders",style:{padding:"14px 32px",background:"white",color:"#667eea",border:"none",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.2)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:E=>{E.currentTarget.style.transform="translateY(-2px)",E.currentTarget.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.3)"},onMouseOut:E=>{E.currentTarget.style.transform="translateY(0)",E.currentTarget.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"},children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),n.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"View Order History"]}),n.jsxs("button",{onClick:()=>window.location.href="/shop",style:{padding:"14px 32px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",backdropFilter:"blur(10px)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:E=>{E.currentTarget.style.background="rgba(255, 255, 255, 0.3)",E.currentTarget.style.transform="translateY(-2px)"},onMouseOut:E=>{E.currentTarget.style.background="rgba(255, 255, 255, 0.2)",E.currentTarget.style.transform="translateY(0)"},children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"21",r:"1"}),n.jsx("circle",{cx:"20",cy:"21",r:"1"}),n.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Continue Shopping"]})]})]}),n.jsxs("div",{style:{marginTop:"24px",background:"white",borderRadius:"12px",padding:"24px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"16px",color:"#333"},children:"What's Next?"}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e3f2fd",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx("span",{style:{fontSize:"18px"},children:"📧"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Email Confirmation"}),n.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Check your email for order confirmation and receipt"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#fff3e0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx("span",{style:{fontSize:"18px"},children:"🔍"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Payment Review"}),n.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Our team will verify your payment receipt within 24 hours"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[n.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx("span",{style:{fontSize:"18px"},children:"📦"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Track Your Order"}),n.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Monitor your order status in real-time from Order History"})]})]})]})]}),n.jsx("style",{children:`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `})]}):n.jsxs("div",{className:"grid",children:[n.jsxs("form",{onSubmit:T,className:"panel form",children:[n.jsx("h3",{className:"section-title",children:"Customer information"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["Full name",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsx("input",{value:y,onChange:E=>w(E.target.value),required:!0,placeholder:"e.g. John Perera"})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["Phone number",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsx("input",{type:"tel",value:v,onChange:E=>g(E.target.value),required:!0,placeholder:"07x xxx xxxx"})]})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["Email",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsx("input",{type:"email",value:f,onChange:E=>j(E.target.value),required:!0,disabled:!!(r!=null&&r.email),placeholder:"you@example.com"}),(r==null?void 0:r.email)&&n.jsx("p",{className:"tiny muted",children:"Using logged-in account email"})]}),n.jsx("h3",{className:"section-title",children:"Delivery address"}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["Address line 1",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsx("input",{value:a.line1,onChange:E=>i({...a,line1:E.target.value}),required:!0})]}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["City",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsx("input",{value:a.city,onChange:E=>i({...a,city:E.target.value}),required:!0})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["Postal code",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsx("input",{value:a.postal_code,onChange:E=>i({...a,postal_code:E.target.value}),required:!0})]})]}),n.jsx("h3",{className:"section-title",children:"Bank transfer"}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["Select your bank",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsxs("select",{value:k,onChange:E=>C(E.target.value),required:!0,children:[n.jsx("option",{value:"",children:"-- Select your bank --"}),Zv.map(E=>n.jsx("option",{value:E,children:E},E))]})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{children:["Upload transfer receipt",n.jsx("span",{"aria-hidden":!0,children:" *"})]}),n.jsxs("div",{className:"drop",children:[n.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:M,disabled:P}),n.jsxs("div",{className:"note",children:[n.jsx("strong",{children:P?"Uploading…":N?`${N.name}`:"Choose PDF/JPG/PNG (max 5MB)"}),N&&!P&&n.jsx("span",{className:"ok",children:"✓ Ready"})]})]}),n.jsx("p",{className:"tiny muted",children:"We’ll verify the receipt within 24 hours."})]}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Transaction / reference (optional)"}),n.jsx("input",{value:L,onChange:E=>B(E.target.value),placeholder:"e.g. BOCPAY12345"})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Additional notes (optional)"}),n.jsx("input",{value:se,onChange:E=>K(E.target.value),placeholder:"Delivery instructions, etc."})]})]}),n.jsx("button",{className:"btn btn-primary",type:"submit",disabled:e.length===0||d||!W,children:d?"Processing…":"Complete order"})]}),n.jsxs("aside",{className:"stack",children:[n.jsxs("div",{className:"panel sticky",children:[n.jsx("h3",{className:"section-title",children:"Company bank account"}),n.jsxs("div",{className:"kv",children:[n.jsxs("div",{children:[n.jsx("span",{className:"muted",children:"Account holder"}),n.jsx("div",{className:"val",children:Lr.accountHolder})]}),n.jsxs("div",{children:[n.jsx("span",{className:"muted",children:"Bank"}),n.jsx("div",{className:"val",children:Lr.bank})]}),n.jsxs("div",{children:[n.jsx("span",{className:"muted",children:"Branch"}),n.jsx("div",{className:"val",children:Lr.branch})]}),n.jsxs("div",{children:[n.jsx("span",{className:"muted",children:"Account number"}),n.jsxs("div",{className:"val row-inline",children:[n.jsx("code",{className:"code",children:Lr.accountNumber}),n.jsx("button",{type:"button",className:"btn btn-ghost sm",onClick:()=>{navigator.clipboard.writeText(Lr.accountNumber),m("acc"),setTimeout(()=>m(null),1500)},children:"Copy"})]})]}),n.jsxs("div",{children:[n.jsx("span",{className:"muted",children:"WhatsApp"}),n.jsxs("div",{className:"val row-inline",children:[n.jsx("code",{className:"code",children:Lr.whatsapp}),n.jsx("a",{className:"btn btn-ghost sm",href:`https://wa.me/${Lr.whatsapp.replace(/[^\d]/g,"")}`,target:"_blank",children:"Chat"})]})]})]}),n.jsx("p",{className:"tiny muted",children:"Transfer the total to this account, then upload the receipt on the left."}),x==="acc"&&n.jsx("div",{className:"toast",children:"Account number copied"})]}),n.jsxs("div",{className:"panel",children:[n.jsx("h3",{className:"section-title",children:"Order summary"}),n.jsx("div",{className:"items",children:e.length===0?n.jsx("p",{className:"muted",children:"Your cart is empty."}):e.map(E=>n.jsxs("div",{className:"item",children:[n.jsxs("div",{className:"name",children:[E.name," ",n.jsxs("span",{className:"muted",children:["×",E.qty]})]}),n.jsxs("div",{className:"price",children:["Rs. ",(E.price*E.qty).toFixed(2)]})]},E.id))}),n.jsxs("div",{className:"total",children:[n.jsx("div",{children:"Total"}),n.jsxs("div",{className:"price",children:["Rs. ",e.reduce((E,O)=>E+O.price*O.qty,0).toFixed(2)]})]})]})]})]}),n.jsx("style",{children:`
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
        `})]})})}function Kv(){const e=St(),[t,r]=b.useState([]),[a,i]=b.useState(!0),[s,o]=b.useState(null),[l,c]=b.useState("all"),[d,u]=b.useState(!1),[h,p]=b.useState(null),x=b.useCallback(async()=>{var k,C,N;i(!0),o(null);try{const z=await te.get("/orders/history",{params:{status_filter:l}});r(z.data.orders||[])}catch(z){((k=z==null?void 0:z.response)==null?void 0:k.status)===401?(u(!0),o("Not authenticated")):o(((N=(C=z.response)==null?void 0:C.data)==null?void 0:N.detail)||"Failed to load orders")}finally{i(!1)}},[l]);b.useEffect(()=>{x()},[x]);function m(k){if(!k)return"N/A";try{return new Date(k).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"N/A"}}function y(k){return k?`LKR ${k.toFixed(2)}`:"LKR 0.00"}function w(k){switch(k){case"placed":return"#d97706";case"verified":return"#0284c7";case"processing":return"#ea580c";case"shipped":return"#2563eb";case"delivered":return"#16a34a";case"rejected":return"#dc2626";case"cancelled":return"#9ca3af";default:return"#6D74FF"}}function v(k){switch(k){case"placed":return 20;case"verified":return 40;case"processing":return 60;case"shipped":return 80;case"delivered":return 100;default:return 0}}function g(k){switch(k){case"all":return"All";case"pending":return"In Progress";case"completed":return"Completed";case"cancelled":return"Cancelled";default:return k.charAt(0).toUpperCase()+k.slice(1)}}async function f(k){var C,N;try{await te.post(`/orders/${k}/reorder`),alert("Items added to cart!"),e("/cart")}catch(z){alert(((N=(C=z.response)==null?void 0:C.data)==null?void 0:N.detail)||"Failed to reorder")}}async function j(k){p(k);const C=localStorage.getItem("access_token")||"";if(!C){alert("Not authenticated");return}const N=`/api/v1/orders/${k}/invoice?token=${encodeURIComponent(C)}`;try{const z=document.createElement("iframe");z.style.display="none",z.src=N,document.body.appendChild(z);const W=()=>{p(null);try{z.removeEventListener("load",W)}catch{}};try{z.addEventListener("load",W)}catch{}setTimeout(()=>{try{document.body.removeChild(z)}catch{}p(null)},1e4)}catch(z){console.error("Invoice download error:",z);try{window.location.href=N}catch{}p(null)}}return n.jsxs(n.Fragment,{children:[n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[n.jsxs("div",{children:[n.jsx("h1",{className:"section-title",children:"📦 Order History"}),n.jsx("p",{className:"lead",children:"Track your orders and manage your purchase history."})]}),n.jsxs("button",{onClick:()=>x(),disabled:a,style:{padding:"12px 24px",background:a?"#ccc":"#6D74FF",color:"white",border:"none",borderRadius:"8px",cursor:a?"not-allowed":"pointer",fontSize:"16px",fontWeight:"bold",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(109, 116, 255, 0.3)"},onMouseOver:k=>{a||(k.currentTarget.style.background="#5a61d6",k.currentTarget.style.transform="translateY(-2px)",k.currentTarget.style.boxShadow="0 4px 12px rgba(109, 116, 255, 0.4)")},onMouseOut:k=>{a||(k.currentTarget.style.background="#6D74FF",k.currentTarget.style.transform="translateY(0)",k.currentTarget.style.boxShadow="0 2px 8px rgba(109, 116, 255, 0.3)")},children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{animation:a?"spin 1s linear infinite":"none"},children:[n.jsx("polyline",{points:"23 4 23 10 17 10"}),n.jsx("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),a?"Refreshing...":"Refresh"]})]}),n.jsx("div",{className:"order-filters",children:["all","pending","completed","cancelled"].map(k=>n.jsx("button",{className:`btn ${l===k?"btn-primary":"btn-ghost"}`,onClick:()=>c(k),children:g(k)},k))}),n.jsx("style",{children:`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}),s&&n.jsx("div",{className:"alert error",children:s}),d&&n.jsx("div",{className:"alert warning",children:n.jsx("button",{onClick:()=>e("/login?next=/orders"),className:"btn btn-primary",children:"Go to Login"})}),a&&n.jsx("div",{className:"loading",children:"Loading orders..."}),!a&&t.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{children:"📭"}),n.jsx("h3",{children:"No Orders Found"}),n.jsx("p",{children:l==="all"?"You haven’t placed any orders yet.":`No ${g(l)} orders found.`}),n.jsx("button",{onClick:()=>e("/shop"),className:"btn btn-primary",children:"Start Shopping"})]}),!a&&t.length>0&&n.jsx("div",{className:"order-list",children:t.map(k=>{var C;return n.jsxs("div",{className:"order-card",children:[n.jsxs("div",{className:"order-header",children:[n.jsxs("div",{children:[n.jsxs("h3",{children:["Order #",k.id.slice(-8)]}),n.jsx("p",{children:m(k.created_at)})]}),n.jsx("div",{className:"order-total",children:y(k.total_amount)})]}),n.jsxs("div",{className:"order-progress",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{style:{width:`${v(k.tracking_status)}%`,backgroundColor:w(k.tracking_status)}})}),n.jsx("p",{className:"status",style:{color:w(k.tracking_status)},children:(C=k.tracking_status)==null?void 0:C.toUpperCase()})]}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{onClick:()=>e(`/orders/${k.id}`),className:"btn btn-primary",children:"View"}),n.jsx("button",{onClick:()=>f(k.id),className:"btn btn-ghost",children:"🔁 Reorder"}),k.payment_status==="verified"&&n.jsx("button",{onClick:()=>j(k.id),className:"btn btn-ghost invoice-btn",disabled:h===k.id,"aria-busy":h===k.id,children:h===k.id?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"invoice-spinner",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.25"}),n.jsx("path",{d:"M22 12a10 10 0 0 1-10 10",strokeLinecap:"round"})]}),"Downloading..."]}):n.jsx(n.Fragment,{children:"📄 Invoice"})}),k.tracking_status==="delivered"&&n.jsx("button",{onClick:()=>e(`/orders/${k.id}/review`),className:"btn btn-ghost",children:"⭐ Review"})]})]},k.id)})})]})}),n.jsx("style",{children:`
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
      `})]})}function mp(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"}function Di(e){return`LKR ${e.toFixed(2)}`}const gp={placed:{icon:"📦",color:"#FFD700"},verified:{icon:"✅",color:"#0284c7"},processing:{icon:"⚙️",color:"#ea580c"},shipped:{icon:"🚚",color:"#2563eb"},delivered:{icon:"🎉",color:"#11998e"}},xp=["placed","verified","processing","shipped","delivered"];function Qv(){const{orderId:e}=u1(),t=St(),[r,a]=b.useState(null),[i,s]=b.useState(!0),[o,l]=b.useState(null),[c,d]=b.useState(!1),u=b.useCallback(async()=>{var m,y;s(!0),l(null);try{const w=await te.get(`/orders/${e}`);a(w.data)}catch(w){l(((y=(m=w.response)==null?void 0:m.data)==null?void 0:y.detail)||"Failed to load order details")}finally{s(!1)}},[e]);b.useEffect(()=>{u()},[u]);const h=b.useCallback(async m=>{var w,v,g;const y=(w=m.target.files)==null?void 0:w[0];if(y){d(!0);try{const f=new FormData;f.append("file",y),await te.put(`/orders/${e}/receipt`,f,{headers:{"Content-Type":"multipart/form-data"}}),alert("Receipt uploaded successfully! Awaiting admin verification."),u()}catch(f){alert(((g=(v=f.response)==null?void 0:v.data)==null?void 0:g.detail)||"Failed to upload receipt")}finally{d(!1)}}},[e,u]);b.useEffect(()=>{let m=null,y=!1;async function w(){try{const v=await te.get(`/orders/${e}`);if(y)return;const g=v.data;(!r||g.tracking_status!==r.tracking_status||g.payment_status!==r.payment_status)&&a(g),(g.tracking_status==="delivered"||g.tracking_status==="cancelled")&&m&&(clearInterval(m),m=null)}catch{}}return r&&r.tracking_status!=="delivered"&&r.tracking_status!=="cancelled"&&(w(),m=setInterval(w,5e3)),()=>{y=!0,m&&clearInterval(m)}},[r==null?void 0:r.tracking_status,r==null?void 0:r.payment_status,e]);const p=b.useMemo(()=>r?xp.indexOf(r.tracking_status):-1,[r==null?void 0:r.tracking_status]),x=b.useMemo(()=>r?gp[r.tracking_status]||{icon:"📝",color:"#6D74FF"}:null,[r==null?void 0:r.tracking_status]);return i?n.jsx("section",{className:"section",children:n.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:n.jsx("div",{style:{fontSize:"18px",color:"var(--muted)"},children:"Loading order details..."})})}):o||!r?n.jsx("section",{className:"section",children:n.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:n.jsxs("div",{className:"empty-state",style:{padding:"48px",background:"var(--card)",borderRadius:"14px",boxShadow:"var(--shadow)"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"❌"}),n.jsx("h2",{children:o||"Order not found"}),n.jsx("button",{onClick:()=>t("/orders"),className:"btn",style:{marginTop:"16px"},children:"Back to Orders"})]})})}):n.jsxs("section",{className:"section",children:[n.jsxs("div",{className:"container",children:[n.jsxs("button",{onClick:()=>t("/orders"),className:"btn",style:{marginBottom:"24px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Orders"]}),n.jsxs("div",{className:"order-detail-header",children:[n.jsxs("div",{className:"order-detail-header-left",children:[n.jsxs("h1",{className:"section-title",children:["Order #",r.id.slice(-8)]}),n.jsxs("p",{style:{color:"var(--muted)",margin:"4px 0 0"},children:["📅 ",mp(r.created_at)]})]}),n.jsxs("div",{className:"order-detail-header-right",children:[n.jsx("div",{style:{fontSize:"12px",color:"var(--muted)",marginBottom:"4px"},children:"Total Amount"}),n.jsx("div",{className:"price",style:{fontSize:"32px",margin:"0 0 12px"},children:Di(r.total_amount)}),n.jsxs("div",{className:"status-badge",style:{backgroundColor:(x==null?void 0:x.color)||"#6D74FF",color:"white",padding:"8px 16px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",display:"inline-flex",alignItems:"center",gap:"6px"},children:[x==null?void 0:x.icon," ",r.tracking_status.charAt(0).toUpperCase()+r.tracking_status.slice(1)]})]})]}),r.admin_feedback&&n.jsxs("div",{className:"alert",style:{background:r.payment_status==="rejected"?"#fee2e2":"#fef3c7",border:`1px solid ${r.payment_status==="rejected"?"#dc2626":"#f59e0b"}`,borderRadius:"12px",padding:"20px",marginBottom:"24px"},children:[n.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",color:r.payment_status==="rejected"?"#991b1b":"#92400e",marginBottom:"12px"},children:"⚠️ Admin Feedback"}),n.jsx("div",{style:{color:r.payment_status==="rejected"?"#991b1b":"#92400e",fontSize:"14px",lineHeight:"1.6",marginBottom:r.resubmit_required?"16px":"0"},children:r.admin_feedback}),r.resubmit_required&&n.jsxs("div",{children:[n.jsxs("label",{className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",cursor:c?"not-allowed":"pointer",opacity:c?.7:1},children:["📤 ",c?"Uploading...":"Re-upload Receipt",n.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:h,disabled:c,style:{display:"none"}})]}),n.jsx("p",{style:{fontSize:"13px",color:"var(--muted)",marginTop:"8px"},children:"Please upload a valid payment receipt (PDF, JPG, PNG)"})]})]}),r.items&&r.items.length>0&&n.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"🛒 Order Items"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:r.items.map((m,y)=>n.jsxs("div",{className:"order-item",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontWeight:"600",marginBottom:"4px"},children:m.title||m.name||"Product"}),n.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)"},children:["Quantity: ",m.quantity," × ",Di(m.price)]})]}),n.jsx("div",{className:"price",style:{fontSize:"18px"},children:Di(m.price*m.quantity)})]},y))}),n.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"2px solid var(--bg)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Total Amount"}),n.jsx("span",{className:"price",style:{fontSize:"24px"},children:Di(r.total_amount)})]})]}),n.jsxs("div",{className:"card",style:{padding:"28px",marginBottom:"24px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"24px"},children:"📊 Order Timeline"}),n.jsx("div",{style:{position:"relative",paddingLeft:"48px"},children:xp.map((m,y)=>{const w=p>=y,v=r.tracking_status===m,g=gp[m];return n.jsxs("div",{style:{position:"relative",paddingBottom:y<4?"32px":"0"},children:[y<4&&n.jsx("div",{style:{position:"absolute",left:"-28px",top:"32px",width:"3px",height:"32px",background:w?"var(--primary)":"#e5e7eb"}}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[n.jsx("div",{style:{position:"absolute",left:"-36px",width:"18px",height:"18px",borderRadius:"50%",background:w?"var(--primary)":"#e5e7eb",border:v?"4px solid rgba(109, 40, 217, 0.3)":"none",boxShadow:v?"0 0 0 4px rgba(109, 40, 217, 0.1)":"none",display:"flex",alignItems:"center",justifyContent:"center"},children:v&&n.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"white"}})}),n.jsxs("div",{style:{flex:1,padding:"16px",background:v?"rgba(109, 40, 217, 0.05)":"transparent",borderRadius:"12px",border:v?"2px solid rgba(109, 40, 217, 0.2)":"none"},children:[n.jsxs("div",{style:{fontWeight:v?"bold":"600",fontSize:v?"18px":"16px",color:w?"var(--text)":"var(--muted)",textTransform:"capitalize",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{children:g.icon}),m,v&&n.jsx("span",{style:{marginLeft:"8px",padding:"4px 12px",background:"var(--primary)",color:"white",fontSize:"12px",borderRadius:"12px",fontWeight:"bold"},children:"CURRENT"})]}),v&&r.estimated_delivery_date&&m==="shipped"&&n.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)",marginTop:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),n.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),n.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),n.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Est. delivery: ",mp(r.estimated_delivery_date)]})]})]})]},m)})})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",marginBottom:"24px"},children:[n.jsxs("div",{className:"card",style:{padding:"24px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"👤 Customer Information"}),n.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[n.jsxs("div",{style:{marginBottom:"8px"},children:[n.jsx("strong",{style:{color:"var(--muted)"},children:"Name:"})," ",n.jsx("span",{style:{fontWeight:"600"},children:r.customer_name})]}),n.jsxs("div",{style:{marginBottom:"8px"},children:[n.jsx("strong",{style:{color:"var(--muted)"},children:"Phone:"})," ",n.jsx("span",{style:{fontWeight:"600"},children:r.customer_phone})]}),r.customer_email&&n.jsxs("div",{children:[n.jsx("strong",{style:{color:"var(--muted)"},children:"Email:"})," ",n.jsx("span",{style:{fontWeight:"600",wordBreak:"break-all"},children:r.customer_email})]})]})]}),n.jsxs("div",{className:"card",style:{padding:"24px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"📍 Delivery Address"}),n.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[n.jsx("div",{style:{marginBottom:"8px",fontWeight:"600"},children:r.shipping_address.line1}),n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"600"},children:[r.shipping_address.city,", ",r.shipping_address.postal_code]}),n.jsx("div",{style:{fontWeight:"600"},children:r.shipping_address.country})]})]})]}),n.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[n.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"💳 Payment Information"}),n.jsxs("div",{style:{fontSize:"15px",lineHeight:"2",marginBottom:"16px"},children:[n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("strong",{style:{color:"var(--muted)"},children:"Bank:"})," ",n.jsx("span",{style:{fontWeight:"600"},children:r.selected_bank||"N/A"})]}),r.transaction_reference&&n.jsxs("div",{children:[n.jsx("strong",{style:{color:"var(--muted)"},children:"Reference:"})," ",n.jsx("span",{style:{fontWeight:"600",fontFamily:"monospace",fontSize:"14px",background:"var(--bg)",padding:"4px 8px",borderRadius:"6px"},children:r.transaction_reference})]})]}),r.transfer_receipt_url&&n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx("a",{href:r.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",textDecoration:"none"},children:"📄 View Receipt"})}),r.additional_notes&&n.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[n.jsx("strong",{style:{color:"var(--muted)",fontSize:"14px"},children:"Additional Notes:"}),n.jsx("div",{style:{marginTop:"8px",fontSize:"15px",lineHeight:"1.6"},children:r.additional_notes})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function Xv(){const{user:e,logout:t}=Ft(),{count:r}=Zn(),[a,i]=b.useState(!1),[s,o]=b.useState(!1),[l,c]=b.useState(!1),[d,u]=b.useState(!1),[h,p]=b.useState(""),[x,m]=b.useState([]),[y,w]=b.useState(!1),[v,g]=b.useState(-1),f=Nt(),j=St(),k=b.useRef(null),C=b.useRef(null),N=b.useRef(null),z=b.useRef(null);b.useEffect(()=>{o(!1),c(!1),setTimeout(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},100)},[f.pathname]),b.useEffect(()=>{const L=B=>{var se;if(B.key==="Escape")o(!1),c(!1),w(!1),g(-1),(se=z.current)==null||se.blur();else if(y&&x.length>0){if(B.key==="ArrowDown")B.preventDefault(),g(K=>K<x.length-1?K+1:0);else if(B.key==="ArrowUp")B.preventDefault(),g(K=>K>0?K-1:x.length-1);else if(B.key==="Enter"&&v>=0){B.preventDefault();const K=x[v];j(`/search?q=${encodeURIComponent(K.name)}`),p(""),w(!1),g(-1),o(!1)}}};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[y,x,v,j]),b.useEffect(()=>{if(r<=0)return;i(!0);const L=setTimeout(()=>i(!1),300);return()=>clearTimeout(L)},[r]),b.useEffect(()=>{const L=B=>{C.current&&(C.current.contains(B.target)||c(!1),N.current&&(N.current.contains(B.target)||(w(!1),g(-1))))};return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[]);const W=({isActive:L})=>L?"nav-link active":"nav-link",A=({isActive:L})=>L?"auth-btn active":"auth-btn",P=f.pathname.startsWith("/admin"),Z=L=>{L.preventDefault();const B=v>=0?x[v].name:h.trim();B&&(j(`/search?q=${encodeURIComponent(B)}`),p(""),w(!1),g(-1),o(!1))};return b.useEffect(()=>{if(!h.trim()){m([]),w(!1),g(-1);return}const L=setTimeout(async()=>{var B;try{const K=((B=(await te.get("/api/v1/products",{params:{q:h.trim(),size:10}})).data)==null?void 0:B.items)||[],M=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],T=h.toLowerCase(),E=M.filter(U=>U.name.toLowerCase().includes(T)||U.content.toLowerCase().includes(T)),O=[...K.map(U=>({id:`product-${U.id}`,name:U.name,type:"product",url:`/product/${U.slug}`,content:U.category||"Product"})),...E].slice(0,8);m(O),w(!0),g(-1)}catch{const K=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],M=h.toLowerCase(),T=K.filter(E=>E.name.toLowerCase().includes(M)||E.content.toLowerCase().includes(M));m(T.slice(0,8)),w(T.length>0),g(-1)}},300);return()=>clearTimeout(L)},[h]),n.jsxs("header",{className:"header",ref:k,children:[n.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),n.jsxs("div",{className:"container header-inner",children:[n.jsxs("div",{className:"left",children:[n.jsxs("button",{className:"hamburger","aria-label":"Toggle navigation","aria-controls":"main-menu","aria-expanded":s,onClick:()=>o(L=>!L),children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsx(Y,{to:"/",className:"brand","aria-label":"Home",children:n.jsx("div",{className:"logo-container",children:n.jsxs("div",{className:`logo-wrapper ${d?"loaded":""}`,children:[n.jsx("img",{src:"/images/title.png",alt:"Own Setup logo",onLoad:()=>u(!0)}),n.jsx("div",{className:"logo-glow","aria-hidden":"true"}),n.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),n.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),n.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})})]}),n.jsxs("nav",{id:"main-menu",className:`nav ${s?"open":""}`,"aria-label":"Main navigation",children:[!P&&n.jsxs(n.Fragment,{children:[n.jsx(ur,{to:"/",end:!0,className:W,children:"Home"}),n.jsx(ur,{to:"/shop",className:W,children:"Shop"}),n.jsxs("div",{className:"search-container",ref:N,children:[n.jsxs("form",{onSubmit:Z,className:"search-form",children:[n.jsx("input",{ref:z,type:"search",placeholder:"Search...",value:h,onChange:L=>p(L.target.value),onFocus:()=>{x.length>0&&w(!0)},className:"search-input","aria-label":"Search",autoComplete:"off"}),h&&n.jsx("button",{type:"button",className:"search-clear",onClick:()=>{var L;p(""),w(!1),g(-1),(L=z.current)==null||L.focus()},"aria-label":"Clear search",children:"×"}),n.jsx("button",{type:"submit",className:"search-btn","aria-label":"Submit search",children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"})]})})]}),y&&x.length>0&&n.jsx("div",{className:"search-suggestions",children:x.map((L,B)=>n.jsxs("button",{type:"button",className:`suggestion-item ${v===B?"selected":""}`,onClick:()=>{j(L.url),p(""),w(!1),g(-1),o(!1)},onMouseEnter:()=>g(B),children:[n.jsxs("div",{className:"suggestion-icon",children:[L.type==="product"&&n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"}),n.jsx("line",{x1:"7",y1:"7",x2:"7",y2:"7"})]}),L.type==="faq"&&n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),n.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),L.type==="page"&&n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),n.jsx("polyline",{points:"14,2 14,8 20,8"})]})]}),n.jsxs("div",{className:"suggestion-content",children:[n.jsx("span",{className:"suggestion-title",children:L.name}),n.jsx("span",{className:"suggestion-type",children:L.type})]})]},L.id))})]}),n.jsx(ur,{to:"/about",className:W,children:"About"}),e&&n.jsxs(n.Fragment,{children:[n.jsx(ur,{to:"/contact",className:W,children:"Contact"}),n.jsxs(ur,{to:"/cart",className:({isActive:L})=>L?"nav-link cart-link active":"nav-link cart-link",children:["Cart",n.jsx("span",{className:`badge ${a?"bump":""}`,"aria-label":`${r} items in cart`,children:r})]})]})]}),n.jsx("div",{className:"divider","aria-hidden":!0}),!e&&n.jsxs("div",{className:"auth",children:[n.jsx(ur,{to:"/login",end:!0,className:A,children:"Login"}),n.jsx(ur,{to:"/register",className:A,children:"Register"})]})]}),e&&n.jsxs("div",{className:"user-wrap",ref:C,children:[e.is_staff&&!P&&n.jsx(ur,{to:"/admin",className:W,children:"Admin"}),n.jsxs("button",{className:"user-btn","aria-haspopup":"menu","aria-expanded":l,onClick:()=>c(L=>!L),title:e.email,children:[n.jsx("div",{className:"avatar","aria-hidden":!0,children:e!=null&&e.avatar_url?n.jsx("img",{src:e.avatar_url,alt:""}):null}),n.jsx("span",{className:"email",children:e.email})]}),l&&n.jsxs("div",{className:"user-menu",role:"menu",children:[n.jsx(Y,{to:"/account",className:"menu-item",role:"menuitem",children:"Account"}),n.jsx(Y,{to:"/orders",className:"menu-item",role:"menuitem",children:"Orders"}),n.jsx("button",{className:"menu-item",role:"menuitem",onClick:t,children:"Logout"})]})]})]}),s&&n.jsx("div",{className:"overlay",onClick:()=>o(!1),"aria-hidden":!0}),n.jsx("style",{children:`
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
        .user-btn .avatar{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#2a2b36,#171821);border:1px solid var(--line);overflow:hidden}
        .user-btn .avatar img{width:100%;height:100%;object-fit:cover;display:block}
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
      `})]})}function Jv(){const e=new Date().getFullYear();return n.jsxs("footer",{className:"footer",role:"contentinfo",children:[n.jsxs("div",{className:"container footer-inner",children:[n.jsxs("div",{className:"footer-grid",children:[n.jsxs("div",{className:"col brand-col",children:[n.jsxs(Y,{to:"/",className:"brand","aria-label":"Home",children:[n.jsx("img",{src:"/images/title.png",alt:"Own Setup logo"}),n.jsx("span",{className:"sr-only",children:"Own Setup"})]}),n.jsx("p",{className:"tagline",children:"Everyday essentials with thoughtful design and lasting quality."})]}),n.jsxs("nav",{className:"col","aria-label":"Footer navigation",children:[n.jsx("h3",{className:"col-title",children:"Navigate"}),n.jsxs("ul",{className:"list",children:[n.jsx("li",{children:n.jsx(Y,{to:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(Y,{to:"/shop",children:"Shop"})}),n.jsx("li",{children:n.jsx(Y,{to:"/about",children:"About"})}),n.jsx("li",{children:n.jsx(Y,{to:"/contact",children:"Contact"})}),n.jsx("li",{children:n.jsx(Y,{to:"/cart",children:"Cart"})})]})]}),n.jsxs("nav",{className:"col","aria-label":"Help and policies",children:[n.jsx("h3",{className:"col-title",children:"Help"}),n.jsxs("ul",{className:"list",children:[n.jsx("li",{children:n.jsx(Y,{to:"/support",children:"Support"})}),n.jsx("li",{children:n.jsx(Y,{to:"/faq",children:"FAQ"})}),n.jsx("li",{children:n.jsx(Y,{to:"/shipping-returns",children:"Shipping & Returns"})}),n.jsx("li",{children:n.jsx(Y,{to:"/privacy",children:"Privacy Policy"})}),n.jsx("li",{children:n.jsx(Y,{to:"/terms",children:"Terms of Service"})})]})]}),n.jsxs("div",{className:"col",children:[n.jsx("h3",{className:"col-title",children:"Contact"}),n.jsxs("ul",{className:"list",children:[n.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),n.jsx("li",{children:"Phone: +94 76 89 76 222"}),n.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00"}),n.jsx("li",{children:"Address: 252/1A Mannar Road, Puttalam"})]}),n.jsxs("div",{className:"social",children:[n.jsx("a",{href:"https://www.instagram.com/","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:"IG"}),n.jsx("a",{href:"https://facebook.com/","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:"FB"}),n.jsx("a",{href:"https://x.com/","aria-label":"X (Twitter)",target:"_blank",rel:"noopener noreferrer",children:"X"})]})]}),n.jsxs("div",{className:"col newsletter",children:[n.jsx("h3",{className:"col-title",children:"Stay in the loop"}),n.jsx("p",{className:"muted",children:"Subscribe for product drops, care tips, and seasonal edits."}),n.jsxs("form",{className:"signup",onSubmit:t=>{t.preventDefault(),alert("Thanks for subscribing!")},children:[n.jsx("label",{htmlFor:"footer-email",className:"sr-only",children:"Email address"}),n.jsx("input",{id:"footer-email",type:"email",required:!0,placeholder:"email@example.com",autoComplete:"email"}),n.jsx("button",{className:"btn btn-primary",type:"submit",children:"Subscribe"})]}),n.jsx("p",{className:"tiny muted",children:"By subscribing, consent to receive marketing emails; unsubscribe anytime."})]})]}),n.jsxs("div",{className:"footer-bottom",children:[n.jsxs("div",{className:"left",children:[n.jsxs("span",{children:["© ",e," Own Setup 💼"]}),n.jsx("span",{className:"dot",children:"•"}),n.jsx(Y,{to:"/privacy",children:"Privacy"}),n.jsx("span",{className:"dot",children:"•"}),n.jsx(Y,{to:"/terms",children:"Terms"}),n.jsx("span",{className:"dot",children:"•"}),n.jsx(Y,{to:"/support",children:"Support"})]}),n.jsxs("div",{className:"right",children:[n.jsx(Y,{to:"/sitemap",children:"Sitemap"}),n.jsx("span",{className:"dot",children:"•"}),n.jsx("button",{className:"btn btn-ghost",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:"Back to top ↑"})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function eb(){return n.jsxs(n.Fragment,{children:[n.jsx(Xv,{}),n.jsx(m1,{}),n.jsx(Jv,{})]})}function tb(){const[e,t]=b.useState([]),[r,a]=b.useState(1),[i]=b.useState(10),[s,o]=b.useState(0),[l,c]=b.useState(!1),[d,u]=b.useState(null),h=b.useRef(r);b.useEffect(()=>{h.current=r},[r]);async function p(f){var k;c(!0),u(null);const j=new AbortController;try{const N=(await te.get("/admin/orders",{params:{page:f,size:i},signal:j.signal})).data;t(Array.isArray(N.items)?N.items:[]),o(Number.isFinite(N.total)?N.total:0),a(Number.isFinite(N.page)?N.page:f)}catch(C){const N=C;if(((k=N==null?void 0:N.response)==null?void 0:k.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{c(!1)}return()=>j.abort()}b.useEffect(()=>{let f=!1;const j=new AbortController;return(async()=>{var k;try{const C=await te.get("/admin/orders",{params:{page:1,size:i},signal:j.signal});if(f)return;t(Array.isArray(C.data.items)?C.data.items:[]),o(Number.isFinite(C.data.total)?C.data.total:0),a(Number.isFinite(C.data.page)?C.data.page:1),u(null)}catch(C){if(f)return;const N=C;if(((k=N==null?void 0:N.response)==null?void 0:k.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{f||c(!1)}})(),()=>{f=!0,j.abort()}},[]),b.useEffect(()=>{const f=window.setInterval(()=>{const j=h.current;p(j)},5e3);return()=>window.clearInterval(f)},[]),b.useEffect(()=>{r<=0||p(r)},[r]);const x=b.useMemo(()=>Math.max(1,Math.ceil((s||0)/i)),[s,i]);function m(f){return`LKR ${(Number.isFinite(f)?f:0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}async function y(f,j){var k;try{await te.put(`/admin/orders/${f}/status`,{new_status:j,admin_feedback:null,resubmit_required:!1,estimated_delivery_date:null}),await p(h.current)}catch(C){const N=C;if(((k=N==null?void 0:N.response)==null?void 0:k.status)===401){try{window.location.href="/login"}catch{}return}console.error("Failed to update status",C),alert("Failed to update status. Please try again.")}}const w=r>1,v=r<x;function g(f){return{pending_verification:{bg:"#fff4e5",color:"#d97706",icon:"⏳",label:"Pending Verification"},payment_verified:{bg:"#dbeafe",color:"#2563eb",icon:"✓",label:"Payment Verified"},processing:{bg:"#fef3c7",color:"#f59e0b",icon:"⚙️",label:"Processing"},shipped:{bg:"#e0e7ff",color:"#6366f1",icon:"🚚",label:"Shipped"},delivered:{bg:"#d1fae5",color:"#10b981",icon:"✓",label:"Delivered"},cancelled:{bg:"#fee2e2",color:"#ef4444",icon:"✕",label:"Cancelled"}}[f]||{bg:"#f3f4f6",color:"#6b7280",icon:"?",label:f}}return n.jsxs("div",{className:"orders-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"page-header-content",children:[n.jsxs("h1",{className:"page-title",children:[n.jsx("div",{className:"title-icon-wrapper",children:n.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),n.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"})]})}),"Order Management"]}),n.jsx("p",{className:"page-subtitle",children:"Track and manage customer orders in real-time"})]}),n.jsxs("div",{className:"header-badge",children:[n.jsx("div",{className:"live-indicator"}),n.jsx("span",{children:"Auto-refresh: 5s"})]})]}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card-modern total",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Total Orders"}),n.jsx("div",{className:"stat-value-modern",children:s})]})]}),n.jsxs("div",{className:"stat-card-modern pending",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Pending"}),n.jsx("div",{className:"stat-value-modern",children:e.filter(f=>f.status==="pending_verification").length})]})]}),n.jsxs("div",{className:"stat-card-modern verified",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Verified"}),n.jsx("div",{className:"stat-value-modern",children:e.filter(f=>f.status==="payment_verified").length})]})]}),n.jsxs("div",{className:"stat-card-modern processing",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Processing"}),n.jsx("div",{className:"stat-value-modern",children:e.filter(f=>f.status==="processing").length})]})]}),n.jsxs("div",{className:"stat-card-modern delivered",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),n.jsx("path",{d:"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"})]})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Delivered"}),n.jsx("div",{className:"stat-value-modern",children:e.filter(f=>f.status==="delivered").length})]})]})]}),d&&n.jsxs("div",{className:"alert-error",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),n.jsx("span",{children:d})]}),n.jsxs("div",{className:"card-modern",children:[n.jsxs("div",{className:"card-header-orders",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"card-title-orders",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Orders"]}),n.jsx("p",{className:"card-subtitle-orders",children:"Manage and track order status"})]}),n.jsxs("button",{className:"btn-refresh",onClick:()=>p(1),disabled:l,type:"button",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",className:l?"spinner":"",children:n.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"})}),l?"Refreshing...":"Refresh"]})]}),l&&e.length===0&&n.jsxs("div",{className:"loading-state",children:[n.jsxs("div",{className:"loading-spinner-modern",children:[n.jsx("div",{className:"spinner-ring-modern"}),n.jsx("div",{className:"spinner-ring-modern"}),n.jsx("div",{className:"spinner-ring-modern"})]}),n.jsx("p",{children:"Loading orders..."})]}),!l&&e.length===0&&n.jsxs("div",{className:"empty-state-large",children:[n.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),n.jsx("h3",{children:"No Orders Yet"}),n.jsx("p",{children:"Orders will appear here when customers make purchases"})]}),e.length>0&&n.jsx("div",{className:"orders-list",children:e.map(f=>{const j=g(f.status);return n.jsxs("div",{className:"order-card",children:[n.jsxs("div",{className:"order-header",children:[n.jsxs("div",{className:"order-id-section",children:[n.jsx("div",{className:"order-id-badge",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"})})}),n.jsxs("div",{children:[n.jsxs("h3",{className:"order-number",children:["Order #",f.id.substring(0,8)]}),n.jsx("p",{className:"order-date",children:f.created_at?new Date(f.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"})]})]}),n.jsx("div",{className:"order-amount",children:m(f.total_amount)})]}),n.jsxs("div",{className:"order-content",children:[n.jsxs("div",{className:"order-section",children:[n.jsxs("h4",{className:"section-title-order",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Customer Information"]}),n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Name:"}),n.jsx("span",{className:"info-value",children:f.customer_name||"N/A"})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Phone:"}),n.jsx("span",{className:"info-value",children:f.customer_phone||"N/A"})]}),f.customer_email&&n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Email:"}),n.jsx("span",{className:"info-value",children:f.customer_email})]})]}),n.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"})}),"Delivery Address"]}),n.jsx("div",{className:"address-box",children:f.shipping_address?n.jsxs(n.Fragment,{children:[n.jsx("div",{children:f.shipping_address.line1}),n.jsxs("div",{children:[f.shipping_address.city,", ",f.shipping_address.postal_code]}),n.jsx("div",{children:f.shipping_address.country})]}):n.jsx("div",{className:"text-muted",children:"No address provided"})})]}),n.jsxs("div",{className:"order-section",children:[n.jsxs("h4",{className:"section-title-order",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),n.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"})]}),"Payment Information"]}),n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Bank:"}),n.jsx("span",{className:"info-value",children:f.selected_bank||"N/A"})]}),n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Status:"}),n.jsx("span",{className:"info-value",children:f.payment_status||"N/A"})]}),f.transaction_reference&&n.jsxs("div",{className:"info-item",children:[n.jsx("span",{className:"info-label",children:"Reference:"}),n.jsx("span",{className:"info-value",children:f.transaction_reference})]})]}),f.transfer_receipt_url&&n.jsxs(n.Fragment,{children:[n.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"})}),"Transfer Receipt"]}),n.jsxs("a",{href:f.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"receipt-link",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"})}),"View Receipt"]})]}),f.additional_notes&&n.jsxs(n.Fragment,{children:[n.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"})}),"Notes"]}),n.jsx("div",{className:"notes-box",children:f.additional_notes})]})]})]}),n.jsxs("div",{className:"order-footer",children:[n.jsxs("div",{className:"status-badge-order",style:{backgroundColor:j.bg,color:j.color},children:[n.jsx("span",{className:"status-icon",children:j.icon}),j.label]}),n.jsxs("select",{onChange:k=>y(f.id,k.target.value),value:f.status,className:"status-select",children:[n.jsx("option",{value:"pending_verification",children:"⏳ Pending Verification"}),n.jsx("option",{value:"payment_verified",children:"✓ Payment Verified"}),n.jsx("option",{value:"processing",children:"⚙️ Processing"}),n.jsx("option",{value:"shipped",children:"🚚 Shipped"}),n.jsx("option",{value:"delivered",children:"✓ Delivered"}),n.jsx("option",{value:"cancelled",children:"✕ Cancelled"})]})]})]},f.id)})}),e.length>0&&n.jsxs("div",{className:"pagination-footer",children:[n.jsxs("div",{className:"pagination-info",children:["Showing ",n.jsxs("strong",{children:["page ",r]})," of ",n.jsx("strong",{children:x})," — ",n.jsx("strong",{children:s})," total orders"]}),n.jsxs("div",{className:"pagination-controls",children:[n.jsxs("button",{className:"btn-page",onClick:()=>a(f=>Math.max(1,f-1)),disabled:!w,type:"button",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"})}),"Previous"]}),n.jsx("div",{className:"page-indicator",children:n.jsx("span",{children:r})}),n.jsxs("button",{className:"btn-page",onClick:()=>a(f=>Math.min(x,f+1)),disabled:!v,type:"button",children:["Next",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})]})]})]})]}),n.jsx("style",{children:`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .orders-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        /* Page Header */
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
          opacity: 0;
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .page-header-content {
          flex: 1;
        }
        
        .page-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.5px;
        }
        
        .title-icon-wrapper {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .page-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }
        
        .header-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 10px 18px;
          border-radius: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          font-size: 13px;
          font-weight: 600;
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.1);
        }
        
        .live-indicator {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        /* Statistics Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-card-modern {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .stat-card-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card-modern:hover::before {
          opacity: 1;
        }
        
        .stat-card-modern.total { color: #667eea; }
        .stat-card-modern.pending { color: #f59e0b; }
        .stat-card-modern.verified { color: #3b82f6; }
        .stat-card-modern.processing { color: #8b5cf6; }
        .stat-card-modern.delivered { color: #10b981; }
        
        .stat-icon-modern {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        
        .stat-card-modern.total .stat-icon-modern {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
        }
        
        .stat-card-modern.pending .stat-icon-modern {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .stat-card-modern.verified .stat-icon-modern {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }
        
        .stat-card-modern.processing .stat-icon-modern {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }
        
        .stat-card-modern.delivered .stat-icon-modern {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .stat-card-modern:hover .stat-icon-modern {
          transform: scale(1.1) rotate(5deg);
        }
        
        .stat-content-modern {
          flex: 1;
        }
        
        .stat-label-modern {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        
        .stat-value-modern {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          color: #dc2626;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Card Modern */
        .card-modern {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          overflow: hidden;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .card-header-orders {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .card-title-orders {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .card-subtitle-orders {
          font-size: 14px;
          color: #64748b;
          margin: 0;
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
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .btn-refresh:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .btn-refresh:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        
        .loading-spinner-modern {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring-modern {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring-modern:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring-modern:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        .loading-state p {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
        }
        
        /* Empty State */
        .empty-state-large {
          text-align: center;
          padding: 80px 40px;
        }
        
        .empty-state-large svg {
          opacity: 0.2;
          margin-bottom: 20px;
        }
        
        .empty-state-large h3 {
          font-size: 24px;
          color: #475569;
          margin: 0 0 8px 0;
        }
        
        .empty-state-large p {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
        }
        
        /* Orders List */
        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 24px;
        }
        
        .order-card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 24px;
          background: white;
          transition: all 0.3s;
        }
        
        .order-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 2px solid #f1f5f9;
          margin-bottom: 20px;
        }
        
        .order-id-section {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .order-id-badge {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .order-number {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }
        
        .order-date {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }
        
        .order-amount {
          font-size: 24px;
          font-weight: 700;
          color: #667eea;
        }
        
        .order-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 20px;
        }
        
        .order-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .section-title-order {
          font-size: 14px;
          font-weight: 700;
          color: #374151;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .info-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .info-item {
          display: flex;
          gap: 8px;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .info-label {
          font-weight: 600;
          color: #64748b;
          min-width: 80px;
        }
        
        .info-value {
          color: #0f172a;
        }
        
        .address-box {
          background: #f8fafc;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          line-height: 1.8;
          color: #0f172a;
          border: 1px solid #e5e7eb;
        }
        
        .notes-box {
          background: #fef3c7;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          color: #92400e;
          font-style: italic;
          border: 1px solid #fbbf24;
        }
        
        .text-muted {
          color: #94a3b8;
          font-style: italic;
        }
        
        .receipt-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }
        
        .receipt-link:hover {
          background: #5568d3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        
        .order-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #f1f5f9;
          gap: 16px;
        }
        
        .status-badge-order {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
          text-transform: capitalize;
        }
        
        .status-icon {
          font-size: 16px;
        }
        
        .status-select {
          padding: 10px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s;
          background: white;
        }
        
        .status-select:hover {
          border-color: #667eea;
        }
        
        .status-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        /* Pagination */
        .pagination-footer {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .pagination-info {
          font-size: 14px;
          color: #64748b;
        }
        
        .pagination-info strong {
          color: #0f172a;
          font-weight: 700;
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
          padding: 10px 18px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-page:hover:not(:disabled) {
          background: #f8fafc;
          border-color: #667eea;
          color: #667eea;
        }
        
        .btn-page:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .page-indicator {
          padding: 10px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          font-size: 16px;
          min-width: 56px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .order-content {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .orders-page {
            padding: 16px;
          }
          
          .page-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .header-badge {
            align-self: flex-start;
          }
          
          .page-title {
            font-size: 24px;
          }
          
          .title-icon-wrapper {
            width: 40px;
            height: 40px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .stat-card-modern {
            padding: 20px;
          }
          
          .stat-value-modern {
            font-size: 28px;
          }
          
          .orders-list {
            padding: 16px;
            gap: 16px;
          }
          
          .order-card {
            padding: 20px;
          }
          
          .order-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .order-amount {
            font-size: 20px;
          }
          
          .order-footer {
            flex-direction: column;
            gap: 12px;
          }
          
          .status-select {
            width: 100%;
          }
          
          .pagination-footer {
            flex-direction: column;
            gap: 16px;
          }
          
          .card-header-orders {
            flex-direction: column;
            gap: 16px;
          }
          
          .btn-refresh {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .order-id-badge {
            width: 40px;
            height: 40px;
          }
          
          .order-number {
            font-size: 16px;
          }
          
          .stat-icon-modern {
            width: 48px;
            height: 48px;
          }
        }
      `})]})}const vp={siteName:"Own Setup 💼",supportEmail:"",supportPhone:"",currency:"LKR",brandColor:"#6D74FF",bankTransferNote:"",heroImage1:"/images/hero-1.jpg",heroImage2:"/images/hero-2.jpg"};function oa(e,t){return`${t==="USD"?"$":t==="LKR"?"LKR ":"€"}${e.toFixed(2)}`}function bp(e){return typeof e=="string"?e:""}function Xo(e,t){return e.map((r,a)=>({el:r,index:a})).sort((r,a)=>{const i=t(r.el,a.el);return i!==0?i:r.index-a.index}).map(({el:r})=>r)}function Jo(e,t){return typeof e==="number"&&typeof t==="number"?e-t:String(e??"").localeCompare(String(t??""))}function rb(e,t,r){b.useEffect(()=>{if(!e||!t.current)return;const a=t.current,i=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","),s=document.activeElement,o=()=>{const u=Array.from(a.querySelectorAll(i))[0];u&&u.focus()},l=d=>{if(d.key==="Escape"){d.stopPropagation(),r==null||r();return}if(d.key==="Tab"){const u=Array.from(a.querySelectorAll(i)).filter(m=>m.offsetParent!==null||m.getClientRects().length>0);if(u.length===0){d.preventDefault();return}const h=u[0],p=u[u.length-1],x=document.activeElement;d.shiftKey?(!x||x===h)&&(d.preventDefault(),p.focus()):(!x||x===p)&&(d.preventDefault(),h.focus())}},c=setTimeout(o,0);return document.addEventListener("keydown",l,!0),()=>{var d;clearTimeout(c),document.removeEventListener("keydown",l,!0),(d=s==null?void 0:s.focus)==null||d.call(s)}},[e,t,r])}function yp({open:e,title:t,onClose:r,children:a,actions:i,labelledById:s,describedById:o}){const l=b.useRef(null);if(rb(e,l,r),!e)return null;const c=s||"modal-title",d=o||"modal-desc";return n.jsxs("div",{className:"modal",role:"dialog","aria-modal":"true","aria-labelledby":c,"aria-describedby":d,children:[n.jsx("div",{className:"modal-backdrop",onClick:r}),n.jsxs("div",{className:"modal-card",ref:l,children:[n.jsxs("div",{className:"modal-head",children:[n.jsx("h3",{id:c,children:t}),n.jsx("button",{className:"icon-btn",onClick:r,"aria-label":"Close dialog",children:"✕"})]}),n.jsx("div",{className:"modal-body",id:d,children:a}),i&&n.jsx("div",{className:"modal-actions",children:i})]})]})}function Ui({columns:e,rows:t,keyField:r,onSort:a,sortKey:i,sortDir:s,empty:o}){return n.jsx("div",{className:"table-wrap",children:n.jsxs("table",{className:"admin-table",children:[n.jsx("thead",{children:n.jsx("tr",{children:e.map(l=>n.jsx("th",{style:l.width?{width:l.width}:void 0,children:n.jsxs("div",{className:"th-inner",children:[n.jsx("span",{children:l.label}),l.sortable&&a&&n.jsx("button",{className:"sort-btn",onClick:()=>a(String(l.key)),"aria-label":`Sort by ${l.label}`,title:`Sort by ${l.label}`,type:"button",children:i===l.key?s==="asc"?"▲":"▼":"↕"})]})},String(l.key)))})}),n.jsx("tbody",{children:t.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:e.length,className:"empty",children:o||"No data"})}):t.map(l=>n.jsx("tr",{children:e.map(c=>n.jsx("td",{children:c.render?c.render(l):String(l[c.key]??"")},String(c.key)))},String(l[r])))})]})})}function nb(){const e=St(),[t,r]=b.useState("dashboard"),[a,i]=b.useState([]),[s,o]=b.useState([]),[l,c]=b.useState([]),[d,u]=b.useState(vp),[h,p]=b.useState(""),[x,m]=b.useState(""),[y,w]=b.useState("asc"),[v,g]=b.useState(!1),[f,j]=b.useState(null),[k,C]=b.useState(!1),[N,z]=b.useState(null);b.useEffect(()=>{async function _(){try{const X=await fetch("/api/v1/admin/settings",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});if(X.ok){const re=await X.json();u({...vp,...re})}}catch(X){console.error("Error loading settings:",X)}}_()},[]);const W=b.useCallback(_=>{m(X=>X===_?(w(re=>re==="asc"?"desc":"asc"),X):(w("asc"),_))},[]),A=b.useMemo(()=>{const _=h.trim().toLowerCase();let X=_?a.filter(re=>{const ne=re.name.toLowerCase(),xe=re.slug.toLowerCase(),ve=(re.category||"").toLowerCase();return ne.includes(_)||xe.includes(_)||ve.includes(_)}):[...a];return x&&(X=Xo(X,(re,ne)=>{const xe=re[x],ve=ne[x],Ce=Jo(xe,ve);return y==="asc"?Ce:-Ce})),X},[a,h,x,y]),P=b.useMemo(()=>{const _=h.trim().toLowerCase();let X=_?s.filter(re=>{const ne=re.number.toLowerCase(),xe=re.customerName.toLowerCase(),ve=re.status.toLowerCase();return ne.includes(_)||xe.includes(_)||ve.includes(_)}):[...s];return x&&(X=Xo(X,(re,ne)=>{const xe=re[x],ve=ne[x],Ce=Jo(xe,ve);return y==="asc"?Ce:-Ce})),X},[s,h,x,y]),Z=b.useMemo(()=>{const _=h.trim().toLowerCase();let X=_?l.filter(re=>re.name.toLowerCase().includes(_)||re.email.toLowerCase().includes(_)):[...l];return x&&(X=Xo(X,(re,ne)=>{const xe=re[x],ve=ne[x],Ce=Jo(xe,ve);return y==="asc"?Ce:-Ce})),X},[l,h,x,y]);function L(){j({id:Date.now(),name:"",slug:"",price:0,stock:0,category:"",active:!0,createdAt:new Date().toISOString().slice(0,10),images:[]}),g(!0)}function B(_){j({..._,images:[..._.images||[]]}),g(!0)}function se(){f&&(i(_=>_.some(re=>re.id===f.id)?_.map(re=>re.id===f.id?f:re):[f,..._]),g(!1))}function K(_){window.confirm("Delete this product?")&&i(X=>X.filter(re=>re.id!==_))}function M(_){z({..._}),C(!0)}function T(){N&&(o(_=>_.map(X=>X.id===N.id?N:X)),C(!1))}async function E(){try{(await fetch("/api/v1/admin/settings",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify(d)})).ok?window.alert("Settings saved successfully!"):window.alert("Failed to save settings")}catch(_){console.error("Error saving settings:",_),window.alert("Error saving settings")}}const O=b.useMemo(()=>s.reduce((_,X)=>_+X.total,0),[s]),U=s.length,Q=a.filter(_=>_.stock<=10).length,me=a.filter(_=>_.active).length;return b.useEffect(()=>{m(""),w("asc"),p("")},[t]),n.jsxs("div",{className:"admin",style:{opacity:0,transform:"translateY(30px)",animation:"pageEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards"},children:[n.jsx("style",{children:`
        @keyframes pageEntrance {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}),n.jsxs("aside",{className:"sidebar",children:[n.jsx("div",{className:"brand",children:"Admin"}),n.jsxs("nav",{className:"menu","aria-label":"Admin navigation",children:[n.jsx("button",{className:`menu-item ${t==="dashboard"?"active":""}`,onClick:()=>r("dashboard"),type:"button",children:"Dashboard"}),n.jsx("button",{className:`menu-item ${t==="products"?"active":""}`,onClick:()=>r("products"),type:"button",children:"Products"}),n.jsx("button",{className:`menu-item ${t==="orders"?"active":""}`,onClick:()=>r("orders"),type:"button",children:"Orders"}),n.jsx("button",{className:`menu-item ${t==="customers"?"active":""}`,onClick:()=>r("customers"),type:"button",children:"Customers"}),n.jsx("button",{className:`menu-item ${t==="settings"?"active":""}`,onClick:()=>r("settings"),type:"button",children:"Settings"})]}),n.jsx("div",{className:"sidebar-foot",children:n.jsx("button",{className:"btn btn-ghost",onClick:()=>e("/"),type:"button",children:"View site"})})]}),n.jsxs("main",{className:"main",children:[n.jsxs("header",{className:"topbar",children:[n.jsx("input",{className:"search",placeholder:`Search ${t}...`,value:h,onChange:_=>p(_.target.value)}),n.jsx("div",{className:"top-actions",children:t==="products"&&n.jsx("button",{className:"btn btn-primary",onClick:L,type:"button",children:"Add product"})})]}),n.jsxs("section",{className:"content",children:[t==="dashboard"&&n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"title",children:"Overview"}),n.jsxs("div",{className:"cards",children:[n.jsxs("div",{className:"kpi",children:[n.jsx("div",{className:"kpi-label",children:"Total revenue"}),n.jsx("div",{className:"kpi-value",children:oa(O,d.currency)})]}),n.jsxs("div",{className:"kpi",children:[n.jsx("div",{className:"kpi-label",children:"Orders"}),n.jsx("div",{className:"kpi-value",children:U})]}),n.jsxs("div",{className:"kpi",children:[n.jsx("div",{className:"kpi-label",children:"Active products"}),n.jsx("div",{className:"kpi-value",children:me})]}),n.jsxs("div",{className:"kpi warn",children:[n.jsx("div",{className:"kpi-label",children:"Low stock"}),n.jsx("div",{className:"kpi-value",children:Q})]})]}),n.jsxs("div",{className:"panel",children:[n.jsx("h2",{className:"panel-title",children:"Recent orders"}),n.jsx(Ui,{keyField:"id",sortKey:x,sortDir:y,onSort:W,empty:"No recent orders",columns:[{key:"number",label:"Order",sortable:!0},{key:"customerName",label:"Customer",sortable:!0},{key:"total",label:"Total",sortable:!0,render:_=>oa(_.total,d.currency)},{key:"status",label:"Status",sortable:!0,render:_=>n.jsx("span",{className:`pill ${_.status}`,children:_.status})},{key:"createdAt",label:"Date",sortable:!0}],rows:[...s].slice(0,5)})]})]}),t==="products"&&n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"title",children:"Products"}),n.jsx("div",{className:"panel",children:n.jsx(Ui,{keyField:"id",sortKey:x,sortDir:y,onSort:W,empty:"No products found",columns:[{key:"name",label:"Name",sortable:!0,render:_=>n.jsxs("div",{className:"cell-main",children:[n.jsx("div",{className:"cell-strong",children:_.name}),n.jsx("div",{className:"cell-muted",children:_.slug})]})},{key:"category",label:"Category",sortable:!0,render:_=>bp(_.category)},{key:"price",label:"Price",sortable:!0,render:_=>oa(_.price,d.currency)},{key:"stock",label:"Stock",sortable:!0,render:_=>n.jsx("span",{className:_.stock<=10?"danger":"",children:_.stock})},{key:"active",label:"Active",sortable:!0,render:_=>n.jsx("span",{className:`pill ${_.active?"paid":"canceled"}`,children:_.active?"Yes":"No"})},{key:"createdAt",label:"Created",sortable:!0,render:_=>bp(_.createdAt)},{key:"actions",label:"Actions",render:_=>n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"btn btn-ghost",onClick:()=>B(_),type:"button",children:"Edit"}),n.jsx("button",{className:"btn btn-ghost danger",onClick:()=>K(_.id),type:"button",children:"Delete"})]})}],rows:A})})]}),t==="orders"&&n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"title",children:"Orders"}),n.jsx("div",{className:"panel",children:n.jsx(Ui,{keyField:"id",sortKey:x,sortDir:y,onSort:W,empty:"No orders found",columns:[{key:"number",label:"Order",sortable:!0},{key:"customerName",label:"Customer",sortable:!0},{key:"total",label:"Total",sortable:!0,render:_=>oa(_.total,d.currency)},{key:"status",label:"Status",sortable:!0,render:_=>n.jsx("span",{className:`pill ${_.status}`,children:_.status})},{key:"createdAt",label:"Date",sortable:!0},{key:"actions",label:"Actions",render:_=>n.jsx("div",{className:"actions",children:n.jsx("button",{className:"btn btn-ghost",onClick:()=>M(_),type:"button",children:"Update"})})}],rows:P})})]}),t==="customers"&&n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"title",children:"Customers"}),n.jsx("div",{className:"panel",children:n.jsx(Ui,{keyField:"id",sortKey:x,sortDir:y,onSort:W,empty:"No customers found",columns:[{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"orders",label:"Orders",sortable:!0},{key:"totalSpent",label:"Total Spent",sortable:!0,render:_=>oa(_.totalSpent,d.currency)},{key:"createdAt",label:"Since",sortable:!0}],rows:Z})})]}),t==="settings"&&n.jsxs(n.Fragment,{children:[n.jsx("h1",{className:"title",children:"Settings"}),n.jsxs("div",{className:"panel",children:[n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"siteName",children:"Site name"}),n.jsx("input",{id:"siteName",value:d.siteName,onChange:_=>u({...d,siteName:_.target.value})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"supportEmail",children:"Support email"}),n.jsx("input",{id:"supportEmail",type:"email",value:d.supportEmail,onChange:_=>u({...d,supportEmail:_.target.value})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"supportPhone",children:"Support phone"}),n.jsx("input",{id:"supportPhone",value:d.supportPhone,onChange:_=>u({...d,supportPhone:_.target.value})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"currency",children:"Currency"}),n.jsxs("select",{id:"currency",value:d.currency,onChange:_=>u({...d,currency:_.target.value}),children:[n.jsx("option",{value:"USD",children:"USD"}),n.jsx("option",{value:"LKR",children:"LKR"}),n.jsx("option",{value:"EUR",children:"EUR"})]})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"brandColor",children:"Brand color"}),n.jsx("input",{id:"brandColor",type:"color",value:d.brandColor,onChange:_=>u({...d,brandColor:_.target.value})})]}),n.jsxs("div",{className:"field col-span",children:[n.jsx("label",{htmlFor:"bankTransferNote",children:"Bank transfer note"}),n.jsx("textarea",{id:"bankTransferNote",rows:4,value:d.bankTransferNote,onChange:_=>u({...d,bankTransferNote:_.target.value})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"heroImage1",children:"Hero image 1 URL"}),n.jsx("input",{id:"heroImage1",type:"url",value:d.heroImage1,onChange:_=>u({...d,heroImage1:_.target.value}),placeholder:"https://example.com/image.jpg"})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"heroImage2",children:"Hero image 2 URL"}),n.jsx("input",{id:"heroImage2",type:"url",value:d.heroImage2,onChange:_=>u({...d,heroImage2:_.target.value}),placeholder:"https://example.com/image.jpg"})]})]}),n.jsx("div",{className:"actions",children:n.jsx("button",{className:"btn btn-primary",onClick:E,type:"button",children:"Save settings"})})]})]})]})]}),n.jsx(yp,{open:v,title:f!=null&&f.name?"Edit product":"Add product",onClose:()=>g(!1),actions:n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"btn btn-ghost",onClick:()=>g(!1),type:"button",children:"Cancel"}),n.jsx("button",{className:"btn btn-primary",onClick:se,type:"button",children:"Save"})]}),children:f&&n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"pname",children:"Name"}),n.jsx("input",{id:"pname",value:f.name,onChange:_=>j({...f,name:_.target.value})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"pslug",children:"Slug"}),n.jsx("input",{id:"pslug",value:f.slug,onChange:_=>j({...f,slug:_.target.value})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"pcat",children:"Category"}),n.jsx("input",{id:"pcat",value:f.category||"",onChange:_=>j({...f,category:_.target.value})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"pprice",children:"Price"}),n.jsx("input",{id:"pprice",type:"number",step:"0.01",value:f.price,onChange:_=>j({...f,price:Number(_.target.value)||0})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"pstock",children:"Stock"}),n.jsx("input",{id:"pstock",type:"number",value:f.stock,onChange:_=>j({...f,stock:Number(_.target.value)||0})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{htmlFor:"pactive",children:"Active"}),n.jsxs("select",{id:"pactive",value:f.active?"yes":"no",onChange:_=>j({...f,active:_.target.value==="yes"}),children:[n.jsx("option",{value:"yes",children:"Yes"}),n.jsx("option",{value:"no",children:"No"})]})]}),n.jsxs("div",{className:"field col-span",children:[n.jsx("label",{htmlFor:"pimages",children:"Image URLs (comma separated)"}),n.jsx("textarea",{id:"pimages",rows:3,value:(f.images||[]).join(", "),onChange:_=>j({...f,images:_.target.value.split(",").map(X=>X.trim()).filter(Boolean)})})]})]})}),n.jsx(yp,{open:k,title:"Update order",onClose:()=>C(!1),actions:n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"btn btn-ghost",onClick:()=>C(!1),type:"button",children:"Cancel"}),n.jsx("button",{className:"btn btn-primary",onClick:T,type:"button",children:"Save"})]}),children:N&&n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Order"}),n.jsx("input",{disabled:!0,value:N.number})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Customer"}),n.jsx("input",{disabled:!0,value:N.customerName})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Status"}),n.jsxs("select",{value:N.status,onChange:_=>z({...N,status:_.target.value}),children:[n.jsx("option",{value:"pending",children:"pending"}),n.jsx("option",{value:"paid",children:"paid"}),n.jsx("option",{value:"shipped",children:"shipped"}),n.jsx("option",{value:"delivered",children:"delivered"}),n.jsx("option",{value:"canceled",children:"canceled"})]})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Total"}),n.jsx("input",{type:"number",step:"0.01",value:N.total,onChange:_=>z({...N,total:Number(_.target.value)||0})})]}),n.jsxs("div",{className:"field",children:[n.jsx("label",{children:"Date"}),n.jsx("input",{type:"date",value:N.createdAt,onChange:_=>z({...N,createdAt:_.target.value})})]})]})}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:${d.brandColor};
          --brand-600:#5860ff;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --positive:#1fbf75;
          --warn:#ffb020;
        }
        .admin{display:grid;grid-template-columns:260px 1fr;min-height:100vh;background:var(--bg);color:var(--text)}
        .sidebar{position:sticky;top:0;height:100vh;border-right:1px solid var(--line);background:var(--surface);display:flex;flex-direction:column}
        .brand{padding:16px;font-weight:800;letter-spacing:.2px;color:white;border-bottom:1px solid var(--line)}
        .menu{display:flex;flex-direction:column;padding:8px}
        .menu-item{appearance:none;border:none;background:transparent;text-align:left;color:var(--text);padding:10px 12px;border-radius:8px;cursor:pointer}
        .menu-item:hover{background:var(--ghost)}
        .menu-item.active{background:var(--brand);color:white}
        .sidebar-foot{margin-top:auto;padding:8px;border-top:1px solid var(--line)}
        .main{display:flex;flex-direction:column;min-width:0}
        .topbar{display:flex;gap:12px;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--line);background:linear-gradient(180deg, rgba(109,116,255,0.07), transparent 80%)}
        .search{flex:1;min-width:200px;height:38px;background:var(--surface);border:1px solid var(--line);border-radius:10px;color:var(--text);padding:0 12px}
        .top-actions{display:flex;gap:8px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:10px 14px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none;cursor:pointer}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .btn-ghost{background:transparent}
        .btn-ghost.danger{color:#ffbcbc;border-color:var(--line)}
        .content{padding:16px;display:grid;gap:16px}
        .title{margin:0 0 4px;font-size:22px}
        .cards{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
        .kpi{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:12px}
        .kpi.warn{box-shadow:inset 0 0 0 1px rgba(255,176,32,.25)}
        .kpi-label{color:var(--muted);font-size:12px}
        .kpi-value{font-size:22px;font-weight:800;margin-top:4px}
        .panel{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:12px}
        .panel-title{margin:0 0 8px;font-size:16px}
        .table-wrap{overflow:auto;border:1px solid var(--line);border-radius:12px;background:var(--surface);margin-top:8px}
        table{width:100%;border-collapse:separate;border-spacing:0}
        thead th{position:sticky;top:0;background:var(--surface-alt);text-align:left;padding:10px;border-bottom:1px solid var(--line);z-index:1}
        tbody td{padding:10px;border-bottom:1px solid var(--line);vertical-align:top}
        .empty{color:var(--muted);text-align:center;padding:14px}
        .th-inner{display:flex;align-items:center;gap:6px}
        .sort-btn{border:1px solid var(--line);background:var(--ghost);border-radius:6px;color:var(--text);padding:0 6px;height:22px;cursor:pointer}
        .cell-main{display:flex;flex-direction:column}
        .cell-strong{font-weight:600}
        .cell-muted{color:var(--muted);font-size:12px}
        .pill{display:inline-flex;align-items:center;justify-content:center;padding:2px 8px;border-radius:999px;border:1px solid var(--line);background:var(--surface)}
        .pill.pending{background:rgba(255,176,32,.08);color:#ffd891;border-color:rgba(255,176,32,.3)}
        .pill.paid{background:rgba(31,191,117,.08);color:#9be7c4;border-color:rgba(31,191,117,.3)}
        .pill.shipped{background:rgba(109,116,255,.08);color:#bfc4ff;border-color:rgba(109,116,255,.3)}
        .pill.delivered{background:rgba(31,191,117,.1);color:#d5f7e9;border-color:rgba(31,191,117,.35)}
        .pill.canceled{background:rgba(255,93,93,.08);color:#ffbcbc;border-color:rgba(255,93,93,.3)}
        .danger{color:#ffbcbc}
        .actions{display:flex;gap:8px}
        .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .field{display:grid;gap:6px}
        .field.col-span{grid-column:1 / -1}
        label{font-size:12px;color:var(--muted)}
        input, select, textarea{background:var(--surface);border:1px solid var(--line);border-radius:10px;color:var(--text);padding:10px}
        textarea{resize:vertical}
        .icon-btn{border:1px solid var(--line);background:var(--ghost);color:var(--text);border-radius:8px;padding:6px 8px}
        .modal{position:fixed;inset:0;z-index:100}
        .modal-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.5)}
        .modal-card{position:relative;z-index:101;max-width:720px;margin:10vh auto;background:var(--card);border:1px solid var(--line);border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.4);padding:12px}
        .modal-head{display:flex;align-items:center;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid var(--line)}
        .modal-body{padding:12px 0}
        .modal-actions{display:flex;gap:8px;justify-content:flex-end;padding-top:8px;border-top:1px solid var(--line)}
        @media (max-width:1200px){ .cards{grid-template-columns:repeat(2,1fr)} .form-grid{grid-template-columns:1fr} }
        @media (max-width:900px){ .admin{grid-template-columns:1fr} .sidebar{position:static;height:auto} }
      `})]})}var cc=function(e,t){return cc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(r[i]=a[i])},cc(e,t)};function ab(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");cc(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var Be=function(){return Be=Object.assign||function(t){for(var r,a=1,i=arguments.length;a<i;a++){r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},Be.apply(this,arguments)};var wp=!1,Br,dc,uc,as,is,W1,ss,pc,hc,fc,q1,mc,gc,V1,Y1;function rt(){if(!wp){wp=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),r=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(mc=/\b(iPhone|iP[ao]d)/.exec(e),gc=/\b(iP[ao]d)/.exec(e),fc=/Android/i.exec(e),V1=/FBAN\/\w+;/i.exec(e),Y1=/Mobile/i.exec(e),q1=!!/Win64/.exec(e),t){Br=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,Br&&document&&document.documentMode&&(Br=document.documentMode);var a=/(?:Trident\/(\d+.\d+))/.exec(e);W1=a?parseFloat(a[1])+4:Br,dc=t[2]?parseFloat(t[2]):NaN,uc=t[3]?parseFloat(t[3]):NaN,as=t[4]?parseFloat(t[4]):NaN,as?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),is=t&&t[1]?parseFloat(t[1]):NaN):is=NaN}else Br=dc=uc=is=as=NaN;if(r){if(r[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);ss=i?parseFloat(i[1].replace("_",".")):!0}else ss=!1;pc=!!r[2],hc=!!r[3]}else ss=pc=hc=!1}}var xc={ie:function(){return rt()||Br},ieCompatibilityMode:function(){return rt()||W1>Br},ie64:function(){return xc.ie()&&q1},firefox:function(){return rt()||dc},opera:function(){return rt()||uc},webkit:function(){return rt()||as},safari:function(){return xc.webkit()},chrome:function(){return rt()||is},windows:function(){return rt()||pc},osx:function(){return rt()||ss},linux:function(){return rt()||hc},iphone:function(){return rt()||mc},mobile:function(){return rt()||mc||gc||fc||Y1},nativeApp:function(){return rt()||V1},android:function(){return rt()||fc},ipad:function(){return rt()||gc}},ib=xc,sb=!!(typeof window<"u"&&window.document&&window.document.createElement),ob={canUseDOM:sb},lb=ob,Z1=lb,G1;Z1.canUseDOM&&(G1=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function cb(e,t){if(!Z1.canUseDOM||t&&!("addEventListener"in document))return!1;var r="on"+e,a=r in document;if(!a){var i=document.createElement("div");i.setAttribute(r,"return;"),a=typeof i[r]=="function"}return!a&&G1&&e==="wheel"&&(a=document.implementation.hasFeature("Events.wheel","3.0")),a}var db=cb,ub=ib,pb=db,jp=10,kp=40,Np=800;function K1(e){var t=0,r=0,a=0,i=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=r,r=0),a=t*jp,i=r*jp,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),(a||i)&&e.deltaMode&&(e.deltaMode==1?(a*=kp,i*=kp):(a*=Np,i*=Np)),a&&!t&&(t=a<1?-1:1),i&&!r&&(r=i<1?-1:1),{spinX:t,spinY:r,pixelX:a,pixelY:i}}K1.getEventType=function(){return ub.firefox()?"DOMMouseScroll":pb("wheel")?"wheel":"mousewheel"};var hb=K1,fb=hb;const mb=Wp(fb);function gb(e,t,r,a,i,s){s===void 0&&(s=0);var o=Ln(e,t,s),l=o.width,c=o.height,d=Math.min(l,r),u=Math.min(c,a);return d>u*i?{width:u*i,height:u}:{width:d,height:d/i}}function xb(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}function la(e,t,r,a,i){i===void 0&&(i=0);var s=Ln(t.width,t.height,i),o=s.width,l=s.height;return{x:Sp(e.x,o,r.width,a),y:Sp(e.y,l,r.height,a)}}function Sp(e,t,r,a){var i=t*a/2-r/2;return xo(e,-i,i)}function Cp(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function _p(e,t){return Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI}function vb(e,t,r,a,i,s,o){s===void 0&&(s=0),o===void 0&&(o=!0);var l=o?bb:yb,c=Ln(t.width,t.height,s),d=Ln(t.naturalWidth,t.naturalHeight,s),u={x:l(100,((c.width-r.width/i)/2-e.x/i)/c.width*100),y:l(100,((c.height-r.height/i)/2-e.y/i)/c.height*100),width:l(100,r.width/c.width*100/i),height:l(100,r.height/c.height*100/i)},h=Math.round(l(d.width,u.width*d.width/100)),p=Math.round(l(d.height,u.height*d.height/100)),x=d.width>=d.height*a,m=x?{width:Math.round(p*a),height:p}:{width:h,height:Math.round(h/a)},y=Be(Be({},m),{x:Math.round(l(d.width-m.width,u.x*d.width/100)),y:Math.round(l(d.height-m.height,u.y*d.height/100))});return{croppedAreaPercentages:u,croppedAreaPixels:y}}function bb(e,t){return Math.min(e,Math.max(0,t))}function yb(e,t){return t}function wb(e,t,r,a,i,s){var o=Ln(t.width,t.height,r),l=xo(a.width/o.width*(100/e.width),i,s),c={x:l*o.width/2-a.width/2-o.width*l*(e.x/100),y:l*o.height/2-a.height/2-o.height*l*(e.y/100)};return{crop:c,zoom:l}}function jb(e,t,r){var a=xb(t);return r.height>r.width?r.height/(e.height*a):r.width/(e.width*a)}function kb(e,t,r,a,i,s){r===void 0&&(r=0);var o=Ln(t.naturalWidth,t.naturalHeight,r),l=xo(jb(e,t,a),i,s),c=a.height>a.width?a.height/e.height:a.width/e.width,d={x:((o.width-e.width)/2-e.x)*c,y:((o.height-e.height)/2-e.y)*c};return{crop:d,zoom:l}}function zp(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function Nb(e){return e*Math.PI/180}function Ln(e,t,r){var a=Nb(r);return{width:Math.abs(Math.cos(a)*e)+Math.abs(Math.sin(a)*t),height:Math.abs(Math.sin(a)*e)+Math.abs(Math.cos(a)*t)}}function xo(e,t,r){return Math.min(Math.max(e,t),r)}function $i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(r){return typeof r=="string"&&r.length>0}).join(" ").trim()}var Sb=`.reactEasyCrop_Container {
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
`,Cb=1,_b=3,zb=1,Q1=function(e){ab(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.cropperRef=b.createRef(),r.imageRef=b.createRef(),r.videoRef=b.createRef(),r.containerPosition={x:0,y:0},r.containerRef=null,r.styleRef=null,r.containerRect=null,r.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},r.dragStartPosition={x:0,y:0},r.dragStartCrop={x:0,y:0},r.gestureZoomStart=0,r.gestureRotationStart=0,r.isTouching=!1,r.lastPinchDistance=0,r.lastPinchRotation=0,r.rafDragTimeout=null,r.rafPinchTimeout=null,r.wheelTimer=null,r.currentDoc=typeof document<"u"?document:null,r.currentWindow=typeof window<"u"?window:null,r.resizeObserver=null,r.previousCropSize=null,r.isInitialized=!1,r.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},r.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!r.containerRef)){var a=!0;r.resizeObserver=new window.ResizeObserver(function(i){if(a){a=!1;return}r.computeSizes()}),r.resizeObserver.observe(r.containerRef)}},r.preventZoomSafari=function(a){return a.preventDefault()},r.cleanEvents=function(){r.currentDoc&&(r.currentDoc.removeEventListener("mousemove",r.onMouseMove),r.currentDoc.removeEventListener("mouseup",r.onDragStopped),r.currentDoc.removeEventListener("touchmove",r.onTouchMove),r.currentDoc.removeEventListener("touchend",r.onDragStopped),r.currentDoc.removeEventListener("gesturechange",r.onGestureChange),r.currentDoc.removeEventListener("gestureend",r.onGestureEnd),r.currentDoc.removeEventListener("scroll",r.onScroll))},r.clearScrollEvent=function(){r.containerRef&&r.containerRef.removeEventListener("wheel",r.onWheel),r.wheelTimer&&clearTimeout(r.wheelTimer)},r.onMediaLoad=function(){var a=r.computeSizes();a&&(r.previousCropSize=a,r.emitCropData(),r.setInitialCrop(a),r.isInitialized=!0),r.props.onMediaLoaded&&r.props.onMediaLoaded(r.mediaSize)},r.setInitialCrop=function(a){if(r.props.initialCroppedAreaPercentages){var i=wb(r.props.initialCroppedAreaPercentages,r.mediaSize,r.props.rotation,a,r.props.minZoom,r.props.maxZoom),s=i.crop,o=i.zoom;r.props.onCropChange(s),r.props.onZoomChange&&r.props.onZoomChange(o)}else if(r.props.initialCroppedAreaPixels){var l=kb(r.props.initialCroppedAreaPixels,r.mediaSize,r.props.rotation,a,r.props.minZoom,r.props.maxZoom),s=l.crop,o=l.zoom;r.props.onCropChange(s),r.props.onZoomChange&&r.props.onZoomChange(o)}},r.computeSizes=function(){var a,i,s,o,l,c,d=r.imageRef.current||r.videoRef.current;if(d&&r.containerRef){r.containerRect=r.containerRef.getBoundingClientRect(),r.saveContainerPosition();var u=r.containerRect.width/r.containerRect.height,h=((a=r.imageRef.current)===null||a===void 0?void 0:a.naturalWidth)||((i=r.videoRef.current)===null||i===void 0?void 0:i.videoWidth)||0,p=((s=r.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((o=r.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,x=d.offsetWidth<h||d.offsetHeight<p,m=h/p,y=void 0;if(x)switch(r.state.mediaObjectFit){default:case"contain":y=u>m?{width:r.containerRect.height*m,height:r.containerRect.height}:{width:r.containerRect.width,height:r.containerRect.width/m};break;case"horizontal-cover":y={width:r.containerRect.width,height:r.containerRect.width/m};break;case"vertical-cover":y={width:r.containerRect.height*m,height:r.containerRect.height};break}else y={width:d.offsetWidth,height:d.offsetHeight};r.mediaSize=Be(Be({},y),{naturalWidth:h,naturalHeight:p}),r.props.setMediaSize&&r.props.setMediaSize(r.mediaSize);var w=r.props.cropSize?r.props.cropSize:gb(r.mediaSize.width,r.mediaSize.height,r.containerRect.width,r.containerRect.height,r.props.aspect,r.props.rotation);return(((l=r.state.cropSize)===null||l===void 0?void 0:l.height)!==w.height||((c=r.state.cropSize)===null||c===void 0?void 0:c.width)!==w.width)&&r.props.onCropSizeChange&&r.props.onCropSizeChange(w),r.setState({cropSize:w},r.recomputeCropPosition),r.props.setCropSize&&r.props.setCropSize(w),w}},r.saveContainerPosition=function(){if(r.containerRef){var a=r.containerRef.getBoundingClientRect();r.containerPosition={x:a.left,y:a.top}}},r.onMouseDown=function(a){r.currentDoc&&(a.preventDefault(),r.currentDoc.addEventListener("mousemove",r.onMouseMove),r.currentDoc.addEventListener("mouseup",r.onDragStopped),r.saveContainerPosition(),r.onDragStart(t.getMousePoint(a)))},r.onMouseMove=function(a){return r.onDrag(t.getMousePoint(a))},r.onScroll=function(a){r.currentDoc&&(a.preventDefault(),r.saveContainerPosition())},r.onTouchStart=function(a){r.currentDoc&&(r.isTouching=!0,!(r.props.onTouchRequest&&!r.props.onTouchRequest(a))&&(r.currentDoc.addEventListener("touchmove",r.onTouchMove,{passive:!1}),r.currentDoc.addEventListener("touchend",r.onDragStopped),r.saveContainerPosition(),a.touches.length===2?r.onPinchStart(a):a.touches.length===1&&r.onDragStart(t.getTouchPoint(a.touches[0]))))},r.onTouchMove=function(a){a.preventDefault(),a.touches.length===2?r.onPinchMove(a):a.touches.length===1&&r.onDrag(t.getTouchPoint(a.touches[0]))},r.onGestureStart=function(a){r.currentDoc&&(a.preventDefault(),r.currentDoc.addEventListener("gesturechange",r.onGestureChange),r.currentDoc.addEventListener("gestureend",r.onGestureEnd),r.gestureZoomStart=r.props.zoom,r.gestureRotationStart=r.props.rotation)},r.onGestureChange=function(a){if(a.preventDefault(),!r.isTouching){var i=t.getMousePoint(a),s=r.gestureZoomStart-1+a.scale;if(r.setNewZoom(s,i,{shouldUpdatePosition:!0}),r.props.onRotationChange){var o=r.gestureRotationStart+a.rotation;r.props.onRotationChange(o)}}},r.onGestureEnd=function(a){r.cleanEvents()},r.onDragStart=function(a){var i,s,o=a.x,l=a.y;r.dragStartPosition={x:o,y:l},r.dragStartCrop=Be({},r.props.crop),(s=(i=r.props).onInteractionStart)===null||s===void 0||s.call(i)},r.onDrag=function(a){var i=a.x,s=a.y;r.currentWindow&&(r.rafDragTimeout&&r.currentWindow.cancelAnimationFrame(r.rafDragTimeout),r.rafDragTimeout=r.currentWindow.requestAnimationFrame(function(){if(r.state.cropSize&&!(i===void 0||s===void 0)){var o=i-r.dragStartPosition.x,l=s-r.dragStartPosition.y,c={x:r.dragStartCrop.x+o,y:r.dragStartCrop.y+l},d=r.props.restrictPosition?la(c,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):c;r.props.onCropChange(d)}}))},r.onDragStopped=function(){var a,i;r.isTouching=!1,r.cleanEvents(),r.emitCropData(),(i=(a=r.props).onInteractionEnd)===null||i===void 0||i.call(a)},r.onWheel=function(a){if(r.currentWindow&&!(r.props.onWheelRequest&&!r.props.onWheelRequest(a))){a.preventDefault();var i=t.getMousePoint(a),s=mb(a).pixelY,o=r.props.zoom-s*r.props.zoomSpeed/200;r.setNewZoom(o,i,{shouldUpdatePosition:!0}),r.state.hasWheelJustStarted||r.setState({hasWheelJustStarted:!0},function(){var l,c;return(c=(l=r.props).onInteractionStart)===null||c===void 0?void 0:c.call(l)}),r.wheelTimer&&clearTimeout(r.wheelTimer),r.wheelTimer=r.currentWindow.setTimeout(function(){return r.setState({hasWheelJustStarted:!1},function(){var l,c;return(c=(l=r.props).onInteractionEnd)===null||c===void 0?void 0:c.call(l)})},250)}},r.getPointOnContainer=function(a,i){var s=a.x,o=a.y;if(!r.containerRect)throw new Error("The Cropper is not mounted");return{x:r.containerRect.width/2-(s-i.x),y:r.containerRect.height/2-(o-i.y)}},r.getPointOnMedia=function(a){var i=a.x,s=a.y,o=r.props,l=o.crop,c=o.zoom;return{x:(i+l.x)/c,y:(s+l.y)/c}},r.setNewZoom=function(a,i,s){var o=s===void 0?{}:s,l=o.shouldUpdatePosition,c=l===void 0?!0:l;if(!(!r.state.cropSize||!r.props.onZoomChange)){var d=xo(a,r.props.minZoom,r.props.maxZoom);if(c){var u=r.getPointOnContainer(i,r.containerPosition),h=r.getPointOnMedia(u),p={x:h.x*d-u.x,y:h.y*d-u.y},x=r.props.restrictPosition?la(p,r.mediaSize,r.state.cropSize,d,r.props.rotation):p;r.props.onCropChange(x)}r.props.onZoomChange(d)}},r.getCropData=function(){if(!r.state.cropSize)return null;var a=r.props.restrictPosition?la(r.props.crop,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):r.props.crop;return vb(a,r.mediaSize,r.state.cropSize,r.getAspect(),r.props.zoom,r.props.rotation,r.props.restrictPosition)},r.emitCropData=function(){var a=r.getCropData();if(a){var i=a.croppedAreaPercentages,s=a.croppedAreaPixels;r.props.onCropComplete&&r.props.onCropComplete(i,s),r.props.onCropAreaChange&&r.props.onCropAreaChange(i,s)}},r.emitCropAreaChange=function(){var a=r.getCropData();if(a){var i=a.croppedAreaPercentages,s=a.croppedAreaPixels;r.props.onCropAreaChange&&r.props.onCropAreaChange(i,s)}},r.recomputeCropPosition=function(){if(r.state.cropSize){var a=r.props.crop;if(r.isInitialized&&r.previousCropSize){var i=Math.abs(r.previousCropSize.width-r.state.cropSize.width)>1e-6||Math.abs(r.previousCropSize.height-r.state.cropSize.height)>1e-6;if(i){var s=r.state.cropSize.width/r.previousCropSize.width,o=r.state.cropSize.height/r.previousCropSize.height;a={x:r.props.crop.x*s,y:r.props.crop.y*o}}}var l=r.props.restrictPosition?la(a,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):a;r.previousCropSize=r.state.cropSize,r.props.onCropChange(l),r.emitCropData()}},r.onKeyDown=function(a){var i,s,o=r.props,l=o.crop,c=o.onCropChange,d=o.keyboardStep,u=o.zoom,h=o.rotation,p=d;if(r.state.cropSize){a.shiftKey&&(p*=.2);var x=Be({},l);switch(a.key){case"ArrowUp":x.y-=p,a.preventDefault();break;case"ArrowDown":x.y+=p,a.preventDefault();break;case"ArrowLeft":x.x-=p,a.preventDefault();break;case"ArrowRight":x.x+=p,a.preventDefault();break;default:return}r.props.restrictPosition&&(x=la(x,r.mediaSize,r.state.cropSize,u,h)),a.repeat||(s=(i=r.props).onInteractionStart)===null||s===void 0||s.call(i),c(x)}},r.onKeyUp=function(a){var i,s;switch(a.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":a.preventDefault();break;default:return}r.emitCropData(),(s=(i=r.props).onInteractionEnd)===null||s===void 0||s.call(i)},r}return t.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=Sb,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},t.prototype.componentWillUnmount=function(){var r,a;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(r=this.resizeObserver)===null||r===void 0||r.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((a=this.styleRef.parentNode)===null||a===void 0||a.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},t.prototype.componentDidUpdate=function(r){var a,i,s,o,l,c,d,u,h;r.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):r.aspect!==this.props.aspect?this.computeSizes():r.objectFit!==this.props.objectFit?this.computeSizes():r.zoom!==this.props.zoom?this.recomputeCropPosition():((a=r.cropSize)===null||a===void 0?void 0:a.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((s=r.cropSize)===null||s===void 0?void 0:s.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((l=r.crop)===null||l===void 0?void 0:l.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((d=r.crop)===null||d===void 0?void 0:d.y)!==((u=this.props.crop)===null||u===void 0?void 0:u.y))&&this.emitCropAreaChange(),r.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),r.video!==this.props.video&&((h=this.videoRef.current)===null||h===void 0||h.load());var p=this.getObjectFit();p!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:p},this.computeSizes)},t.prototype.getAspect=function(){var r=this.props,a=r.cropSize,i=r.aspect;return a?a.width/a.height:i},t.prototype.getObjectFit=function(){var r,a,i,s;if(this.props.objectFit==="cover"){var o=this.imageRef.current||this.videoRef.current;if(o&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var l=this.containerRect.width/this.containerRect.height,c=((r=this.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((a=this.videoRef.current)===null||a===void 0?void 0:a.videoWidth)||0,d=((i=this.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoHeight)||0,u=c/d;return u<l?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},t.prototype.onPinchStart=function(r){var a=t.getTouchPoint(r.touches[0]),i=t.getTouchPoint(r.touches[1]);this.lastPinchDistance=Cp(a,i),this.lastPinchRotation=_p(a,i),this.onDragStart(zp(a,i))},t.prototype.onPinchMove=function(r){var a=this;if(!(!this.currentDoc||!this.currentWindow)){var i=t.getTouchPoint(r.touches[0]),s=t.getTouchPoint(r.touches[1]),o=zp(i,s);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var l=Cp(i,s),c=a.props.zoom*(l/a.lastPinchDistance);a.setNewZoom(c,o,{shouldUpdatePosition:!1}),a.lastPinchDistance=l;var d=_p(i,s),u=a.props.rotation+(d-a.lastPinchRotation);a.props.onRotationChange&&a.props.onRotationChange(u),a.lastPinchRotation=d})}},t.prototype.render=function(){var r=this,a,i=this.props,s=i.image,o=i.video,l=i.mediaProps,c=i.cropperProps,d=i.transform,u=i.crop,h=u.x,p=u.y,x=i.rotation,m=i.zoom,y=i.cropShape,w=i.showGrid,v=i.roundCropAreaPixels,g=i.style,f=g.containerStyle,j=g.cropAreaStyle,k=g.mediaStyle,C=i.classes,N=C.containerClassName,z=C.cropAreaClassName,W=C.mediaClassName,A=(a=this.state.mediaObjectFit)!==null&&a!==void 0?a:this.getObjectFit();return b.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(Z){return r.containerRef=Z},"data-testid":"container",style:f,className:$i("reactEasyCrop_Container",N)},s?b.createElement("img",Be({alt:"",className:$i("reactEasyCrop_Image",A==="contain"&&"reactEasyCrop_Contain",A==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",A==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",W)},l,{src:s,ref:this.imageRef,style:Be(Be({},k),{transform:d||"translate(".concat(h,"px, ").concat(p,"px) rotate(").concat(x,"deg) scale(").concat(m,")")}),onLoad:this.onMediaLoad})):o&&b.createElement("video",Be({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:$i("reactEasyCrop_Video",A==="contain"&&"reactEasyCrop_Contain",A==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",A==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",W)},l,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:Be(Be({},k),{transform:d||"translate(".concat(h,"px, ").concat(p,"px) rotate(").concat(x,"deg) scale(").concat(m,")")}),controls:!1}),(Array.isArray(o)?o:[{src:o}]).map(function(P){return b.createElement("source",Be({key:P.src},P))})),this.state.cropSize&&b.createElement("div",Be({ref:this.cropperRef,style:Be(Be({},j),{width:v?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:v?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:$i("reactEasyCrop_CropArea",y==="round"&&"reactEasyCrop_CropAreaRound",w&&"reactEasyCrop_CropAreaGrid",z)},c)))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:_b,minZoom:Cb,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:zb},t.getMousePoint=function(r){return{x:Number(r.clientX),y:Number(r.clientY)}},t.getTouchPoint=function(r){return{x:Number(r.clientX),y:Number(r.clientY)}},t}(b.Component);function Eb(){var Md;const[e,t]=b.useState([]),[r,a]=b.useState({name:"",slug:"",price:0,stock:0,images:[],description:""}),[i,s]=b.useState([]),[o,l]=b.useState([]),[c,d]=b.useState(null),[u,h]=b.useState(!1),[p,x]=b.useState(!1),[m,y]=b.useState(null),[w,v]=b.useState(!1),[g,f]=b.useState(!1),[j,k]=b.useState(0),[C,N]=b.useState(!1),[z,W]=b.useState(0),[A,P]=b.useState({x:0,y:0}),[Z,L]=b.useState(1),[B,se]=b.useState(null),K=b.useMemo(()=>{var be;const R=r.name.trim(),D=r.slug.trim(),ce=((be=r.description)==null?void 0:be.trim())||"",de=Number.isFinite(r.price)&&r.price>=0,je=Number.isInteger(r.stock)&&r.stock>=0;return{nameOk:R.length>1,slugOk:D.length>1,descriptionOk:ce.length>=10,priceOk:de,stockOk:je}},[r]),M=K.nameOk&&K.slugOk&&K.descriptionOk&&K.priceOk&&K.stockOk;function T(R){const D=parseFloat(R);return Number.isFinite(D)&&D>=0?D:0}function E(R){const D=parseInt(R,10);return Number.isFinite(D)&&D>=0?D:0}async function O(){var R,D,ce,de,je,be;h(!0),d(null);try{const he=await te.get("/admin/products");t(Array.isArray((R=he.data)==null?void 0:R.items)?he.data.items:[])}catch(he){const V=he;if(((D=V==null?void 0:V.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}d(((de=(ce=V==null?void 0:V.response)==null?void 0:ce.data)==null?void 0:de.detail)||((be=(je=V==null?void 0:V.response)==null?void 0:je.data)==null?void 0:be.message)||"Failed to load")}finally{h(!1)}}b.useEffect(()=>{O()},[]);async function U(R){var ce,de,je,be,he;if(R.length===0)return[];console.log(`Uploading ${R.length} files...`);const D=[];for(const V of R)try{console.log("Uploading file:",V.name,V.type,V.size,"bytes");const fe=new FormData;fe.append("file",V,V.name);const ye=await te.post("/admin/products/upload",fe);console.log("Upload successful, URL:",ye.data.url),D.push(ye.data.url)}catch(fe){const ye=fe;if(console.error("Upload error for file:",V.name,ye),((ce=ye==null?void 0:ye.response)==null?void 0:ce.status)===401){console.error("Upload failed: 401 Unauthorized");try{window.location.href="/login"}catch{}return[]}const bi=((je=(de=ye==null?void 0:ye.response)==null?void 0:de.data)==null?void 0:je.detail)||((he=(be=ye==null?void 0:ye.response)==null?void 0:be.data)==null?void 0:he.message)||"Upload failed";throw console.error("Upload failed with message:",bi),new Error(`Failed to upload ${V.name}: ${bi}`)}return D}function Q(R){const D=Array.from(R.target.files||[]);if(D.length>5){d("Maximum 5 images allowed per product");return}s(D);const ce=D.map(de=>URL.createObjectURL(de));l(ce),D.length>0&&(f(!0),k(0))}function me(R){s(D=>D.filter((ce,de)=>de!==R)),l(D=>(URL.revokeObjectURL(D[R]),D.filter((ce,de)=>de!==R))),i.length<=1?f(!1):j>=i.length-1&&k(Math.max(0,i.length-2))}function _(){k(R=>(R+1)%o.length)}function X(){k(R=>(R-1+o.length)%o.length)}function re(R){W(R),P({x:0,y:0}),L(1),se(null),N(!0)}const ne=b.useCallback((R,D)=>{se(D)},[]);async function xe(R,D){const ce=new Image;ce.src=R,await new Promise(be=>{ce.onload=be});const de=document.createElement("canvas"),je=de.getContext("2d");if(!je)throw new Error("Failed to get canvas context");return de.width=D.width,de.height=D.height,je.drawImage(ce,D.x,D.y,D.width,D.height,0,0,D.width,D.height),new Promise((be,he)=>{de.toBlob(V=>{V?be(V):he(new Error("Canvas is empty"))},"image/jpeg",.95)})}async function ve(){if(B)try{const R=o[z],D=await xe(R,B),de=i[z].name.replace(/\.[^/.]+$/,"_cropped.jpg"),je=new File([D],de,{type:"image/jpeg"});s(be=>{const he=[...be];return he[z]=je,he}),l(be=>{const he=[...be];return URL.revokeObjectURL(he[z]),he[z]=URL.createObjectURL(je),he}),N(!1)}catch(R){console.error("Error cropping image:",R),d("Failed to crop image")}}async function Ce(){var R,D,ce,de,je,be;if(d(null),!M){d("Please fill all fields correctly");return}if(i.length===0&&(!r.images||r.images.length===0)){d("Please add at least 1 image (maximum 5 images)");return}x(!0);try{console.log("Creating product, uploading images first..."),console.log("Selected files:",i.length,"files");const he=await U(i);console.log("✅ Image upload complete! URLs:",he);const fe=[...r.images||[],...he].slice(0,5);if(console.log("📸 Final images array:",fe),fe.length===0){d("At least 1 image is required"),x(!1);return}const ye={name:r.name.trim(),slug:r.slug.trim(),description:(R=r.description)==null?void 0:R.trim(),price:r.price,stock:r.stock,images:fe,is_published:!0};console.log("📦 Creating product with payload:",JSON.stringify(ye,null,2));const cr={id:`tmp-${Date.now()}`,...ye,name:ye.name||"",slug:ye.slug||"",description:ye.description||"",price:ye.price||0,stock:ye.stock||0,images:ye.images||[]};t(yi=>[cr,...yi]);const bi=await te.post("/admin/products",ye);console.log("✅ Product created successfully! Response:",bi.data),a({name:"",slug:"",price:0,stock:0,images:[],description:""}),s([]),l(yi=>(yi.forEach(Af=>URL.revokeObjectURL(Af)),[])),f(!1),await O();try{localStorage.setItem("products:update",String(Date.now()))}catch{}}catch(he){const V=he;if(((D=V==null?void 0:V.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}const cr=((de=(ce=V==null?void 0:V.response)==null?void 0:ce.data)==null?void 0:de.detail)||((be=(je=V==null?void 0:V.response)==null?void 0:je.data)==null?void 0:be.message)||(V==null?void 0:V.message)||"Failed to create product";console.error("create product error",V),d(cr)}finally{x(!1)}}async function Le(R,D){var ce,de,je,be,he;d(null);try{t(V=>V.map(fe=>fe.id===R?{...fe,...D}:fe)),await te.put(`/admin/products/${R}`,D)}catch(V){const fe=V;if(((ce=fe==null?void 0:fe.response)==null?void 0:ce.status)===401){try{window.location.href="/login"}catch{}return}d(((je=(de=fe==null?void 0:fe.response)==null?void 0:de.data)==null?void 0:je.detail)||((he=(be=fe==null?void 0:fe.response)==null?void 0:be.data)==null?void 0:he.message)||"Failed to update"),await O()}}async function Rf(R){var D,ce,de,je,be;d(null);try{const he=e;t(V=>V.filter(fe=>fe.id!==R)),await te.delete(`/admin/products/${R}`)}catch(he){const V=he;if(((D=V==null?void 0:V.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}d(((de=(ce=V==null?void 0:V.response)==null?void 0:ce.data)==null?void 0:de.detail)||((be=(je=V==null?void 0:V.response)==null?void 0:je.data)==null?void 0:be.message)||"Failed to delete"),await O()}}function Pf(R){y({...R}),v(!0),d(null)}function vi(){y(null),v(!1),s([]),l(R=>(R.forEach(D=>URL.revokeObjectURL(D)),[])),d(null)}function Tf(R){var D;m&&y({...m,images:((D=m.images)==null?void 0:D.filter((ce,de)=>de!==R))||[]})}async function Mf(){var R,D,ce,de,je,be;if(!(!m||!m.id)){d(null),x(!0);try{const he=await U(i),V=[...m.images||[],...he];if(V.length===0){d("At least 1 image is required"),x(!1);return}if(V.length>5){d("Maximum 5 images allowed"),x(!1);return}const fe={name:m.name.trim(),slug:m.slug.trim(),description:(R=m.description)==null?void 0:R.trim(),price:m.price,stock:m.stock,images:V};await te.put(`/admin/products/${m.id}`,fe),t(ye=>ye.map(cr=>cr.id===m.id?{...cr,...fe}:cr)),vi(),await O()}catch(he){const V=he;if(((D=V==null?void 0:V.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}d(((de=(ce=V==null?void 0:V.response)==null?void 0:ce.data)==null?void 0:de.detail)||((be=(je=V==null?void 0:V.response)==null?void 0:je.data)==null?void 0:be.message)||"Failed to update product")}finally{x(!1)}}}return n.jsxs("div",{className:"products-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"page-header-content",children:[n.jsxs("h1",{className:"page-title",children:[n.jsx("div",{className:"title-icon-wrapper",children:n.jsx("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}),"Product Management"]}),n.jsx("p",{className:"page-subtitle",children:"Manage your product catalog and inventory"})]}),n.jsxs("div",{className:"page-header-stats",children:[n.jsxs("div",{className:"stat-card total",children:[n.jsx("div",{className:"stat-icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),n.jsxs("div",{className:"stat-info",children:[n.jsx("div",{className:"stat-value",children:e.length}),n.jsx("div",{className:"stat-label",children:"Total Products"})]})]}),n.jsxs("div",{className:"stat-card published",children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),n.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})}),n.jsxs("div",{className:"stat-info",children:[n.jsx("div",{className:"stat-value",children:e.filter(R=>R.is_published).length}),n.jsx("div",{className:"stat-label",children:"Published"})]})]}),n.jsxs("div",{className:"stat-card draft",children:[n.jsx("div",{className:"stat-icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})})}),n.jsxs("div",{className:"stat-info",children:[n.jsx("div",{className:"stat-value",children:e.filter(R=>!R.is_published).length}),n.jsx("div",{className:"stat-label",children:"Draft"})]})]})]})]}),c&&n.jsxs("div",{className:"alert-error",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),n.jsx("span",{children:c})]}),n.jsxs("div",{className:"card-modern",children:[n.jsx("div",{className:"card-header",children:n.jsxs("div",{children:[n.jsxs("h2",{className:"card-title",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add New Product"]}),n.jsx("p",{className:"card-subtitle",children:"Fill in the product details and upload images"})]})}),n.jsxs("div",{className:"card-body",children:[n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),n.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Product Name",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{className:`form-input ${!K.nameOk&&r.name?"error":""}`,placeholder:"e.g., Premium Wireless Headphones",value:r.name,onChange:R=>a({...r,name:R.target.value})}),!K.nameOk&&r.name&&n.jsx("span",{className:"form-error",children:"Name must be at least 2 characters"})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"})}),"URL Slug",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{className:`form-input ${!K.slugOk&&r.slug?"error":""}`,placeholder:"e.g., premium-wireless-headphones",value:r.slug,onChange:R=>a({...r,slug:R.target.value})}),!K.slugOk&&r.slug&&n.jsx("span",{className:"form-error",children:"Slug must be at least 2 characters"})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"})]}),"Price (LKR)",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{className:`form-input ${!K.priceOk&&r.price>0?"error":""}`,placeholder:"e.g., 15000.00",type:"number",inputMode:"decimal",value:Number.isFinite(r.price)?r.price:0,onChange:R=>a({...r,price:T(R.target.value)}),min:0,step:"0.01"}),!K.priceOk&&r.price>0&&n.jsx("span",{className:"form-error",children:"Price must be ≥ 0"})]}),n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{className:"form-label",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),"Stock Quantity",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{className:`form-input ${!K.stockOk&&r.stock>0?"error":""}`,placeholder:"e.g., 50",type:"number",inputMode:"numeric",value:Number.isFinite(r.stock)?r.stock:0,onChange:R=>a({...r,stock:E(R.target.value)}),min:0,step:1}),!K.stockOk&&r.stock>0&&n.jsx("span",{className:"form-error",children:"Stock must be an integer ≥ 0"})]})]}),n.jsxs("div",{className:"form-group-full",children:[n.jsxs("label",{className:"form-label",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 7.707A1 1 0 014 7V4zm2 0v3.586l6.293 6.293 3.586-3.586L9.586 4H6z"})}),"Product Description",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("textarea",{className:`form-input ${!K.descriptionOk&&r.description?"error":""}`,placeholder:"Describe your product in detail (minimum 10 characters)...",value:r.description||"",onChange:R=>a({...r,description:R.target.value}),rows:4}),!K.descriptionOk&&r.description&&n.jsx("span",{className:"form-error",children:"Description must be at least 10 characters"})]}),n.jsxs("div",{className:"form-group-full",children:[n.jsxs("label",{className:"form-label",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),"Product Images",n.jsxs("span",{className:"badge-count",children:[i.length,"/5"]}),n.jsx("span",{className:"required",children:"*"})]}),n.jsxs("div",{className:"upload-zone",children:[n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:Q,id:"file-upload",className:"file-input"}),n.jsxs("label",{htmlFor:"file-upload",className:"upload-button",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images"]}),i.length>0&&n.jsxs("button",{type:"button",onClick:()=>f(!0),className:"preview-button",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),n.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}),"Preview & Edit"]})]}),i.length>0&&n.jsx("div",{className:"image-preview-grid",children:o.map((R,D)=>n.jsxs("div",{className:"image-preview-item",children:[n.jsx("img",{src:R,alt:`Preview ${D+1}`}),n.jsxs("div",{className:"image-overlay",children:[n.jsx("button",{onClick:()=>re(D),className:"btn-overlay btn-crop-overlay",type:"button",title:"Crop image",children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})})}),n.jsx("button",{onClick:()=>me(D),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})]}),n.jsx("div",{className:"image-badge",children:D+1})]},D))}),i.length===0&&n.jsxs("div",{className:"empty-state-upload",children:[n.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),n.jsx("p",{children:"No images selected"}),n.jsx("span",{children:"Upload 1-5 product images"})]})]}),n.jsx("button",{onClick:Ce,disabled:!M||p||i.length===0,type:"button",className:"btn-primary",children:p?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Creating Product..."]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add Product"]})})]})]}),n.jsxs("div",{className:"card-modern",style:{marginTop:24},children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"card-title",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Products"]}),n.jsx("p",{className:"card-subtitle",children:"Manage existing products"})]}),n.jsxs("span",{className:"badge-count-lg",children:[e.length," total"]})]}),u?n.jsxs("div",{className:"loading-state",children:[n.jsxs("div",{className:"loading-spinner-modern",children:[n.jsx("div",{className:"spinner-ring-modern"}),n.jsx("div",{className:"spinner-ring-modern"}),n.jsx("div",{className:"spinner-ring-modern"})]}),n.jsx("p",{children:"Loading products..."})]}):e.length===0?n.jsxs("div",{className:"empty-state-large",children:[n.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),n.jsx("h3",{children:"No Products Yet"}),n.jsx("p",{children:"Start by adding your first product using the form above"})]}):n.jsx("div",{className:"products-table-wrapper",children:n.jsxs("div",{className:"products-table",children:[n.jsxs("div",{className:"table-header",children:[n.jsx("div",{className:"th-product",children:"Product"}),n.jsx("div",{className:"th-slug",children:"Slug"}),n.jsx("div",{className:"th-price",children:"Price"}),n.jsx("div",{className:"th-stock",children:"Stock"}),n.jsx("div",{className:"th-status",children:"Status"}),n.jsx("div",{className:"th-actions",children:"Actions"})]}),e.map(R=>n.jsxs("div",{className:"table-row",children:[n.jsx("div",{className:"td-product",children:n.jsxs("div",{className:"product-cell",children:[R.images&&R.images.length>0?n.jsxs("div",{className:"product-images",children:[n.jsx("img",{src:R.images[0],alt:R.name,className:"product-thumbnail-main"}),R.images.length>1&&n.jsxs("span",{className:"image-count-badge",children:["+",R.images.length-1]})]}):n.jsx("div",{className:"no-image",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})})}),n.jsxs("div",{className:"product-info",children:[n.jsx("span",{className:"product-name",children:R.name}),R.description&&n.jsxs("span",{className:"product-desc",children:[R.description.substring(0,50),"..."]})]})]})}),n.jsx("div",{className:"td-slug",children:n.jsx("code",{children:R.slug})}),n.jsx("div",{className:"td-price",children:n.jsx("input",{type:"number",className:"inline-input",defaultValue:R.price,onBlur:D=>{const ce=T(D.target.value);R.id&&ce!==R.price&&Le(R.id,{price:ce})},min:0,step:"0.01"})}),n.jsx("div",{className:"td-stock",children:n.jsx("input",{type:"number",className:"inline-input",defaultValue:R.stock,onBlur:D=>{const ce=E(D.target.value);R.id&&ce!==R.stock&&Le(R.id,{stock:ce})},min:0,step:1})}),n.jsx("div",{className:"td-status",children:n.jsx("span",{className:`status-badge ${R.is_published?"published":"draft"}`,children:R.is_published?n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Published"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"})}),"Draft"]})})}),n.jsx("div",{className:"td-actions",children:n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>Pf(R),type:"button",className:"btn-action btn-edit",title:"Edit product",children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),n.jsx("button",{onClick:()=>R.id&&Le(R.id,{is_published:!R.is_published}),type:"button",className:`btn-action ${R.is_published?"btn-unpublish":"btn-publish"}`,title:R.is_published?"Unpublish":"Publish",children:R.is_published?n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),n.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}):n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),n.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]})}),n.jsx("button",{onClick:()=>R.id&&Rf(R.id),type:"button",className:"btn-action btn-delete",title:"Delete product",children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},R.id||`${R.slug}-${R.name}`))]})})]}),w&&m&&n.jsx("div",{className:"modal-overlay",onClick:vi,children:n.jsxs("div",{className:"modal-content-modern",onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{className:"modal-header-modern",children:[n.jsxs("h2",{children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit Product"]}),n.jsx("button",{onClick:vi,className:"btn-close",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),c&&n.jsxs("div",{className:"alert-error",style:{margin:"0 24px 16px"},children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),n.jsx("span",{children:c})]}),n.jsxs("div",{className:"modal-body-modern",children:[n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Product Name"}),n.jsx("input",{type:"text",className:"form-input",value:m.name,onChange:R=>y({...m,name:R.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Slug"}),n.jsx("input",{type:"text",className:"form-input",value:m.slug,onChange:R=>y({...m,slug:R.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Price (LKR)"}),n.jsx("input",{type:"number",className:"form-input",value:m.price,onChange:R=>y({...m,price:T(R.target.value)}),min:0,step:"0.01"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Stock"}),n.jsx("input",{type:"number",className:"form-input",value:m.stock,onChange:R=>y({...m,stock:E(R.target.value)}),min:0,step:1})]})]}),n.jsxs("div",{className:"form-group-full",children:[n.jsx("label",{className:"form-label",children:"Description"}),n.jsx("textarea",{className:"form-input",value:m.description||"",onChange:R=>y({...m,description:R.target.value}),rows:4})]}),n.jsxs("div",{className:"form-group-full",children:[n.jsxs("label",{className:"form-label",children:["Current Images (",((Md=m.images)==null?void 0:Md.length)||0,"/5)"]}),m.images&&m.images.length>0?n.jsx("div",{className:"image-preview-grid",children:m.images.map((R,D)=>n.jsxs("div",{className:"image-preview-item",children:[n.jsx("img",{src:R,alt:`Product ${D+1}`}),n.jsx("div",{className:"image-overlay",children:n.jsx("button",{onClick:()=>Tf(D),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})}),n.jsx("div",{className:"image-badge",children:D+1})]},D))}):n.jsxs("div",{className:"empty-state-upload",children:[n.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),n.jsx("p",{children:"No images yet"})]}),n.jsx("label",{className:"form-label",style:{marginTop:16},children:"Add New Images"}),n.jsxs("div",{className:"upload-zone",children:[n.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:Q,id:"edit-file-upload",className:"file-input"}),n.jsxs("label",{htmlFor:"edit-file-upload",className:"upload-button",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images"]})]}),o.length>0&&n.jsx("div",{className:"image-preview-grid",style:{marginTop:12},children:o.map((R,D)=>n.jsxs("div",{className:"image-preview-item",children:[n.jsx("img",{src:R,alt:`New ${D+1}`}),n.jsx("div",{className:"image-overlay",children:n.jsx("button",{onClick:()=>me(D),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})}),n.jsx("div",{className:"image-badge new",children:"New"})]},D))})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:vi,type:"button",className:"btn-secondary",children:"Cancel"}),n.jsx("button",{onClick:Mf,disabled:p,type:"button",className:"btn-primary",children:p?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Saving..."]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Save Changes"]})})]})]})]})}),g&&i.length>0&&n.jsx("div",{className:"modal-overlay",onClick:()=>f(!1),children:n.jsxs("div",{className:"preview-modal-content",onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{className:"preview-modal-header",children:[n.jsxs("h2",{children:["Image Preview (",j+1,"/",i.length,")"]}),n.jsx("button",{onClick:()=>f(!1),className:"btn-close",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),n.jsx("div",{className:"preview-image-container",children:o[j]&&n.jsx("img",{src:o[j],alt:`Preview ${j+1}`})}),n.jsxs("div",{className:"preview-controls",children:[n.jsxs("button",{onClick:X,disabled:i.length<=1,className:"btn-nav",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"})}),"Previous"]}),n.jsxs("button",{onClick:()=>re(j),className:"btn-crop-main",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})}),"Crop Image"]}),n.jsxs("button",{onClick:()=>me(j),className:"btn-remove-main",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})}),"Remove"]}),n.jsxs("button",{onClick:_,disabled:i.length<=1,className:"btn-nav",children:["Next",n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})]})]}),i.length>1&&n.jsx("div",{className:"preview-thumbnails",children:o.map((R,D)=>n.jsxs("div",{className:`preview-thumbnail ${D===j?"active":""}`,onClick:()=>k(D),children:[n.jsx("img",{src:R,alt:`Thumbnail ${D+1}`}),n.jsx("div",{className:"thumbnail-number",children:D+1})]},D))})]})}),C&&o[z]&&n.jsx("div",{className:"modal-overlay",onClick:()=>N(!1),children:n.jsxs("div",{className:"cropper-modal-content",onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{className:"modal-header-modern",children:[n.jsxs("h2",{children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})}),"Crop Image (",z+1,"/",i.length,")"]}),n.jsx("button",{onClick:()=>N(!1),className:"btn-close",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),n.jsx("div",{className:"cropper-container",children:n.jsx(Q1,{image:o[z],crop:A,zoom:Z,aspect:1,onCropChange:P,onZoomChange:L,onCropComplete:ne})}),n.jsxs("div",{className:"cropper-controls",children:[n.jsxs("label",{className:"zoom-label",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"}),n.jsx("path",{fillRule:"evenodd",d:"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"})]}),"Zoom: ",Z.toFixed(1),"x"]}),n.jsx("input",{type:"range",min:1,max:3,step:.1,value:Z,onChange:R=>L(Number(R.target.value)),className:"zoom-slider"})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>N(!1),className:"btn-secondary",children:"Cancel"}),n.jsxs("button",{onClick:ve,className:"btn-primary",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Apply Crop"]})]})]})}),n.jsx("style",{children:`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .products-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        /* Page Header */
        .page-header {
          margin-bottom: 32px;
          opacity: 0;
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.5px;
        }
        
        .title-icon-wrapper {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .page-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card.total { border-left: 4px solid #667eea; }
        .stat-card.published { border-left: 4px solid #10b981; }
        .stat-card.draft { border-left: 4px solid #f59e0b; }
        
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
        }
        
        .stat-card.published .stat-icon {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .stat-card.draft .stat-icon {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .stat-info {
          flex: 1;
        }
        
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          color: #dc2626;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Card Modern */
        .card-modern {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          overflow: hidden;
          margin-bottom: 24px;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .card-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .card-subtitle {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          margin-left: 8px;
        }
        
        .badge-count-lg {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
        }
        
        .card-body {
          padding: 24px;
        }
        
        /* Forms */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group-full {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .required {
          color: #ef4444;
          font-weight: 700;
        }
        
        .form-input {
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          color: #0f172a;
          transition: all 0.2s;
          background: white;
          font-family: inherit;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-input.error {
          border-color: #ef4444;
        }
        
        .form-input.error:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
        
        .form-error {
          font-size: 13px;
          color: #ef4444;
          font-weight: 500;
        }
        
        textarea.form-input {
          resize: vertical;
          min-height: 100px;
        }
        
        /* Upload Zone */
        .upload-zone {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 12px;
          flex-wrap: wrap;
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
          transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          border: none;
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
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        
        .image-preview-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
          background: #f8fafc;
        }
        
        .image-preview-item:hover {
          border-color: #667eea;
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        .image-preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .image-preview-item:hover .image-overlay {
          opacity: 1;
        }
        
        .btn-overlay {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          font-weight: 600;
        }
        
        .btn-crop-overlay {
          background: #667eea;
          color: white;
        }
        
        .btn-crop-overlay:hover {
          background: #5568d3;
          transform: scale(1.1);
        }
        
        .btn-remove-overlay {
          background: #ef4444;
          color: white;
          font-size: 24px;
          line-height: 1;
        }
        
        .btn-remove-overlay:hover {
          background: #dc2626;
          transform: scale(1.1);
        }
        
        .image-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
        }
        
        .image-badge.new {
          background: #10b981;
        }
        
        /* Empty State */
        .empty-state-upload {
          text-align: center;
          padding: 40px 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 2px dashed #cbd5e1;
          margin-top: 12px;
        }
        
        .empty-state-upload svg {
          opacity: 0.3;
          margin-bottom: 12px;
        }
        
        .empty-state-upload p {
          margin: 0 0 4px 0;
          color: #64748b;
          font-weight: 600;
          font-size: 15px;
        }
        
        .empty-state-upload span {
          color: #94a3b8;
          font-size: 13px;
        }
        
        .empty-state-large {
          text-align: center;
          padding: 80px 40px;
          color: #94a3b8;
        }
        
        .empty-state-large svg {
          opacity: 0.2;
          margin-bottom: 20px;
        }
        
        .empty-state-large h3 {
          font-size: 24px;
          color: #475569;
          margin: 0 0 8px 0;
        }
        
        .empty-state-large p {
          font-size: 15px;
          margin: 0;
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        
        .loading-spinner-modern {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring-modern {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring-modern:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring-modern:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        
        .loading-state p {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
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
          transition: all 0.3s;
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
        
        .btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          background: white;
          color: #64748b;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #475569;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        /* Products Table */
        .products-table-wrapper {
          overflow-x: auto;
        }
        
        .products-table {
          display: flex;
          flex-direction: column;
          min-width: 1000px;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2.5fr 1.5fr 1fr 1fr 1.2fr 140px;
          gap: 16px;
          padding: 16px 24px;
          background: #f8fafc;
          font-weight: 700;
          font-size: 13px;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2.5fr 1.5fr 1fr 1fr 1.2fr 140px;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row:hover {
          background: #f8fafc;
        }
        
        .td-product {
          display: flex;
          align-items: center;
        }
        
        .product-cell {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .product-images {
          position: relative;
          flex-shrink: 0;
        }
        
        .product-thumbnail-main {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
        }
        
        .product-thumbnail-main:hover {
          border-color: #667eea;
          transform: scale(1.1);
        }
        
        .image-count-badge {
          position: absolute;
          bottom: -6px;
          right: -6px;
          background: #667eea;
          color: white;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          border: 2px solid white;
        }
        
        .no-image {
          width: 64px;
          height: 64px;
          background: #f8fafc;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #e5e7eb;
          flex-shrink: 0;
        }
        
        .no-image svg {
          opacity: 0.3;
        }
        
        .product-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .product-name {
          font-weight: 600;
          color: #0f172a;
          font-size: 15px;
        }
        
        .product-desc {
          font-size: 13px;
          color: #64748b;
        }
        
        .td-slug code {
          background: #f8fafc;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          color: #475569;
          font-family: 'Monaco', 'Menlo', monospace;
          border: 1px solid #e5e7eb;
        }
        
        .inline-input {
          padding: 8px 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          width: 100%;
          max-width: 120px;
          transition: all 0.2s;
          font-family: inherit;
        }
        
        .inline-input:focus {
          outline: none;
          border-color: #667eea;
        }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        
        .status-badge.published {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.draft {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 40px;
          height: 40px;
          border-radius: 10px;
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
          transform: scale(1.1);
        }
        
        .btn-publish {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .btn-publish:hover {
          background: #10b981;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-unpublish {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .btn-unpublish:hover {
          background: #f59e0b;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover {
          background: #ef4444;
          color: white;
          transform: scale(1.1);
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
        
        .modal-content-modern,
        .preview-modal-content,
        .cropper-modal-content {
          background: white;
          border-radius: 16px;
          max-width: 700px;
          width: 90%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s;
        }
        
        .preview-modal-content {
          max-width: 1000px;
        }
        
        .cropper-modal-content {
          max-width: 800px;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .modal-header-modern,
        .preview-modal-header {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-header-modern h2,
        .preview-modal-header h2 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-close {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          color: #64748b;
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
          max-height: calc(90vh - 180px);
          overflow-y: auto;
        }
        
        .modal-body-modern::-webkit-scrollbar {
          width: 8px;
        }
        
        .modal-body-modern::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .modal-body-modern::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 4px;
        }
        
        .modal-footer {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
        
        /* Preview Modal */
        .preview-image-container {
          background: #0f172a;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 500px;
        }
        
        .preview-image-container img {
          max-width: 100%;
          max-height: 500px;
          object-fit: contain;
          border-radius: 8px;
        }
        
        .preview-controls {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: white;
          color: #64748b;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-nav:hover:not(:disabled) {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #475569;
        }
        
        .btn-nav:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        
        .btn-crop-main {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-crop-main:hover {
          background: #5568d3;
        }
        
        .btn-remove-main {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-remove-main:hover {
          background: #dc2626;
        }
        
        .preview-thumbnails {
          padding: 20px 24px;
          display: flex;
          gap: 12px;
          overflow-x: auto;
        }
        
        .preview-thumbnail {
          position: relative;
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          border: 3px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .preview-thumbnail:hover {
          border-color: #cbd5e1;
        }
        
        .preview-thumbnail.active {
          border-color: #667eea;
        }
        
        .preview-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .thumbnail-number {
          position: absolute;
          top: 4px;
          left: 4px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
        }
        
        /* Cropper Modal */
        .cropper-container {
          position: relative;
          width: 100%;
          height: 450px;
          background: #0f172a;
        }
        
        .cropper-controls {
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .zoom-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          margin-bottom: 12px;
        }
        
        .zoom-slider {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e5e7eb;
          outline: none;
          cursor: pointer;
        }
        
        .zoom-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #667eea;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .zoom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .page-header-stats {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .products-page {
            padding: 16px;
          }
          
          .page-title {
            font-size: 24px;
          }
          
          .title-icon-wrapper {
            width: 40px;
            height: 40px;
          }
          
          .page-header-stats {
            grid-template-columns: 1fr;
          }
          
          .stat-card {
            padding: 16px;
          }
          
          .stat-value {
            font-size: 24px;
          }
          
          .card-header {
            flex-direction: column;
            gap: 12px;
          }
          
          .badge-count-lg {
            align-self: flex-start;
          }
          
          .products-table {
            min-width: 800px;
          }
          
          .table-header,
          .table-row {
            grid-template-columns: 2fr 1fr 100px;
          }
          
          .th-slug, .td-slug,
          .th-price, .td-price,
          .th-stock, .td-stock {
            display: none;
          }
          
          .preview-image-container {
            min-height: 300px;
            padding: 20px;
          }
          
          .preview-image-container img {
            max-height: 300px;
          }
          
          .preview-controls {
            flex-direction: column;
          }
          
          .cropper-container {
            height: 300px;
          }
        }
      `})]})}function Rb(){const[e,t]=b.useState([]),[r,a]=b.useState(null),[i,s]=b.useState(!1),[o,l]=b.useState(!1),c=b.useMemo(()=>e.map(p=>({...p,is_active:p.is_active??!0,is_staff:p.is_staff??!1,is_superuser:p.is_superuser??!1})).sort((p,x)=>(x.is_superuser?1:0)-(p.is_superuser?1:0)),[e]);async function d(){var p,x,m,y,w,v;s(!0),a(null);try{const g=await te.get("/admin/users"),f=Array.isArray((p=g.data)==null?void 0:p.items)?g.data.items:[];t(f)}catch(g){const f=g;if(((x=f==null?void 0:f.response)==null?void 0:x.status)===401){try{window.location.href="/login"}catch{}return}a(((y=(m=f==null?void 0:f.response)==null?void 0:m.data)==null?void 0:y.detail)||((v=(w=f==null?void 0:f.response)==null?void 0:w.data)==null?void 0:v.message)||"Failed to load")}finally{s(!1)}}b.useEffect(()=>{d()},[]);async function u(p,x){var m,y,w,v,g;l(!0);try{await te.put(`/admin/users/${p}/block`,null,{params:{block:x}}),await d()}catch(f){const j=f;if(((m=j==null?void 0:j.response)==null?void 0:m.status)===401){try{window.location.href="/login"}catch{}return}a(((w=(y=j==null?void 0:j.response)==null?void 0:y.data)==null?void 0:w.detail)||((g=(v=j==null?void 0:j.response)==null?void 0:v.data)==null?void 0:g.message)||"Failed to update user")}finally{l(!1)}}async function h(p){var x,m,y,w,v;l(!0);try{await te.delete(`/admin/users/${p}`),await d()}catch(g){const f=g;if(((x=f==null?void 0:f.response)==null?void 0:x.status)===401){try{window.location.href="/login"}catch{}return}a(((y=(m=f==null?void 0:f.response)==null?void 0:m.data)==null?void 0:y.detail)||((v=(w=f==null?void 0:f.response)==null?void 0:w.data)==null?void 0:v.message)||"Failed to delete user")}finally{l(!1)}}return n.jsxs("div",{className:"users-page",children:[n.jsx("div",{className:"page-header",children:n.jsxs("div",{className:"page-header-content",children:[n.jsxs("h1",{className:"page-title",children:[n.jsx("div",{className:"title-icon-wrapper",children:n.jsx("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),"User Management"]}),n.jsx("p",{className:"page-subtitle",children:"Manage user accounts, permissions, and access control"})]})}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card-modern total",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Total Users"}),n.jsx("div",{className:"stat-value-modern",children:c.length})]})]}),n.jsxs("div",{className:"stat-card-modern active",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Active Users"}),n.jsx("div",{className:"stat-value-modern",children:c.filter(p=>p.is_active).length})]})]}),n.jsxs("div",{className:"stat-card-modern staff",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Staff Members"}),n.jsx("div",{className:"stat-value-modern",children:c.filter(p=>p.is_staff).length})]})]}),n.jsxs("div",{className:"stat-card-modern admins",children:[n.jsx("div",{className:"stat-icon-modern",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),n.jsxs("div",{className:"stat-content-modern",children:[n.jsx("div",{className:"stat-label-modern",children:"Administrators"}),n.jsx("div",{className:"stat-value-modern",children:c.filter(p=>p.is_superuser).length})]})]})]}),r&&n.jsxs("div",{className:"alert-error",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),n.jsx("span",{children:r})]}),n.jsxs("div",{className:"card-modern",children:[n.jsxs("div",{className:"card-header-users",children:[n.jsxs("div",{children:[n.jsxs("h2",{className:"card-title-users",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Users"]}),n.jsx("p",{className:"card-subtitle-users",children:"View and manage registered users"})]}),n.jsxs("span",{className:"badge-count-users",children:[c.length," total"]})]}),i?n.jsxs("div",{className:"loading-state",children:[n.jsxs("div",{className:"loading-spinner-modern",children:[n.jsx("div",{className:"spinner-ring-modern"}),n.jsx("div",{className:"spinner-ring-modern"}),n.jsx("div",{className:"spinner-ring-modern"})]}),n.jsx("p",{children:"Loading users..."})]}):c.length===0?n.jsxs("div",{className:"empty-state-large",children:[n.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),n.jsx("h3",{children:"No Users Yet"}),n.jsx("p",{children:"No registered users in the system"})]}):n.jsxs("div",{className:"users-table",children:[n.jsxs("div",{className:"table-header-users",children:[n.jsx("div",{className:"th-user",children:"User"}),n.jsx("div",{className:"th-status",children:"Status"}),n.jsx("div",{className:"th-role",children:"Staff"}),n.jsx("div",{className:"th-role",children:"Admin"}),n.jsx("div",{className:"th-actions-users",children:"Actions"})]}),c.map(p=>n.jsxs("div",{className:`table-row-users ${p.is_superuser?"admin-row":""}`,children:[n.jsx("div",{className:"td-user",children:n.jsxs("div",{className:"user-cell",children:[n.jsx("div",{className:"user-avatar",children:p.avatar_url?n.jsx("img",{src:p.avatar_url,alt:""}):p.email.charAt(0).toUpperCase()}),n.jsxs("div",{className:"user-info",children:[n.jsx("div",{className:"user-email",children:p.email}),n.jsxs("div",{className:"user-id",children:["ID: ",p.id.substring(0,8),"..."]})]})]})}),n.jsx("div",{className:"td-status",children:n.jsx("span",{className:`status-badge ${p.is_active?"active":"inactive"}`,children:p.is_active?n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Active"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}),"Blocked"]})})}),n.jsx("div",{className:"td-role",children:n.jsx("span",{className:`role-badge ${p.is_staff?"yes":"no"}`,children:p.is_staff?n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Yes"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})}),"No"]})})}),n.jsx("div",{className:"td-role",children:n.jsx("span",{className:`role-badge ${p.is_superuser?"admin":"no"}`,children:p.is_superuser?n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Yes"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})}),"No"]})})}),n.jsx("div",{className:"td-actions-users",children:p.is_superuser?n.jsxs("div",{className:"admin-indicator",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),n.jsx("span",{children:"System Admin"})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>u(p.id,p.is_active),disabled:o,type:"button",className:`btn-action ${p.is_active?"btn-block":"btn-unblock"}`,title:p.is_active?"Block user":"Unblock user",children:p.is_active?n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}):n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),n.jsx("button",{onClick:()=>h(p.id),disabled:o,type:"button",className:"btn-action btn-delete",title:"Delete user",children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},p.id))]})]}),n.jsx("style",{children:`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .users-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        /* Page Header */
        .page-header {
          margin-bottom: 32px;
          opacity: 0;
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .page-header-content {
          margin-bottom: 24px;
        }
        
        .page-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.5px;
        }
        
        .title-icon-wrapper {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .page-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }
        
        /* Statistics Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-card-modern {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .stat-card-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card-modern:hover::before {
          opacity: 1;
        }
        
        .stat-card-modern.total { color: #667eea; }
        .stat-card-modern.active { color: #10b981; }
        .stat-card-modern.staff { color: #3b82f6; }
        .stat-card-modern.admins { color: #f59e0b; }
        
        .stat-icon-modern {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        
        .stat-card-modern.total .stat-icon-modern {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
        }
        
        .stat-card-modern.active .stat-icon-modern {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .stat-card-modern.staff .stat-icon-modern {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }
        
        .stat-card-modern.admins .stat-icon-modern {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .stat-card-modern:hover .stat-icon-modern {
          transform: scale(1.1) rotate(5deg);
        }
        
        .stat-content-modern {
          flex: 1;
        }
        
        .stat-label-modern {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        
        .stat-value-modern {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          color: #dc2626;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Card Modern */
        .card-modern {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          overflow: hidden;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .card-header-users {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .card-title-users {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .card-subtitle-users {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }
        
        .badge-count-users {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        
        .loading-spinner-modern {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring-modern {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring-modern:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring-modern:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        
        .loading-state p {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
        }
        
        /* Empty State */
        .empty-state-large {
          text-align: center;
          padding: 80px 40px;
        }
        
        .empty-state-large svg {
          opacity: 0.2;
          margin-bottom: 20px;
        }
        
        .empty-state-large h3 {
          font-size: 24px;
          color: #475569;
          margin: 0 0 8px 0;
        }
        
        .empty-state-large p {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
        }
        
        /* Users Table */
        .users-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header-users {
          display: grid;
          grid-template-columns: 2.5fr 1.2fr 1fr 1fr 140px;
          gap: 16px;
          padding: 16px 24px;
          background: #f8fafc;
          font-weight: 700;
          font-size: 13px;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .table-row-users {
          display: grid;
          grid-template-columns: 2.5fr 1.2fr 1fr 1fr 140px;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          align-items: center;
          transition: all 0.3s;
          position: relative;
        }
        
        .table-row-users:hover {
          background: #f8fafc;
        }
        
        .admin-row {
          background: linear-gradient(90deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%);
          border-left: 4px solid #f59e0b;
          position: relative;
        }
        
        .admin-row::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(245, 158, 11, 0.03), transparent);
          pointer-events: none;
        }
        
        .admin-row:hover {
          background: linear-gradient(90deg, rgba(245, 158, 11, 0.08) 0%, transparent 100%);
        }
        
        .td-user, .td-status, .td-role, .td-actions-users {
          display: flex;
          align-items: center;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .user-avatar {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
        }
        
        .user-avatar img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
        }
        
        .user-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .user-email {
          font-weight: 600;
          color: #0f172a;
          font-size: 15px;
        }
        
        .user-id {
          font-size: 12px;
          color: #94a3b8;
          font-family: 'Monaco', 'Menlo', monospace;
        }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          text-transform: capitalize;
        }
        
        .status-badge.active {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.inactive {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }
        
        .role-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .role-badge.yes {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .role-badge.admin {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }
        
        .role-badge.no {
          background: rgba(148, 163, 184, 0.1);
          color: #64748b;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .admin-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 12px;
          color: #d97706;
          font-weight: 700;
          font-size: 13px;
        }
        
        .btn-action {
          width: 40px;
          height: 40px;
          border-radius: 10px;
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
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .btn-block:hover:not(:disabled) {
          background: #f59e0b;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-unblock {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .btn-unblock:hover:not(:disabled) {
          background: #10b981;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover:not(:disabled) {
          background: #ef4444;
          color: white;
          transform: scale(1.1);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .table-header-users, .table-row-users {
            grid-template-columns: 2fr 1fr 120px;
          }
          
          .td-role, .th-role {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .users-page {
            padding: 16px;
          }
          
          .page-title {
            font-size: 24px;
          }
          
          .title-icon-wrapper {
            width: 40px;
            height: 40px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .stat-card-modern {
            padding: 20px;
          }
          
          .stat-value-modern {
            font-size: 28px;
          }
          
          .table-header-users, .table-row-users {
            grid-template-columns: 2fr 120px;
          }
          
          .td-status, .th-status {
            display: none;
          }
          
          .user-avatar {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .card-header-users {
            flex-direction: column;
            gap: 12px;
          }
          
          .badge-count-users {
            align-self: flex-start;
          }
        }
        
        @media (max-width: 480px) {
          .user-cell {
            gap: 12px;
          }
          
          .user-email {
            font-size: 14px;
          }
          
          .stat-icon-modern {
            width: 48px;
            height: 48px;
          }
        }
      `})]})}function Pb({children:e}){const{user:t,loading:r}=Ft(),a=Nt();return r?n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[n.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),n.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):t?t.is_staff||t.is_superuser?e:n.jsx(Jl,{to:"/",replace:!0}):n.jsx(Jl,{to:"/login",state:{from:a.pathname},replace:!0})}function pr({children:e}){const{user:t,accessToken:r,loading:a}=Ft(),i=Nt();return a?n.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[n.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),n.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):!t||!r?n.jsx(Jl,{to:"/login",state:{from:i},replace:!0}):n.jsx(n.Fragment,{children:e})}function Tb(){var d;const{pathname:e}=Nt(),{user:t,logout:r}=Ft(),a=St(),[i,s]=b.useState(new Date),o=()=>{r(),a("/login")};b.useEffect(()=>{const u=setInterval(()=>{s(new Date)},1e3);return()=>clearInterval(u)},[]);const l=u=>u.toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"}),c=u=>u.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return n.jsxs("div",{className:"admin-container",children:[n.jsxs("div",{className:"animated-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-pattern"})]}),n.jsxs("header",{className:"admin-header",children:[n.jsxs("div",{className:"admin-header-left",children:[n.jsx(Y,{to:"/",className:"admin-brand-link","aria-label":"Home",children:n.jsx("div",{className:"logo-container",children:n.jsxs("div",{className:"logo-wrapper",children:[n.jsx("img",{src:"/images/title1.png",alt:"Own Setup logo"}),n.jsx("div",{className:"logo-glow","aria-hidden":"true"}),n.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),n.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),n.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})}),n.jsxs("div",{className:"brand-info",children:[n.jsx("span",{className:"admin-brand animated-text",children:"Own Setup"}),n.jsx("span",{className:"brand-tagline",children:"Admin Dashboard"})]})]}),n.jsxs("div",{className:"admin-header-right",children:[n.jsxs("div",{className:"admin-clock",children:[n.jsx("div",{className:"clock-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"})})}),n.jsxs("div",{className:"clock-content",children:[n.jsx("div",{className:"clock-time",children:l(i)}),n.jsx("div",{className:"clock-date",children:c(i)})]})]}),n.jsxs("button",{className:"admin-btn-icon",title:"Notifications",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})}),n.jsx("span",{className:"notification-badge",children:"3"}),n.jsx("span",{className:"btn-glow"})]}),n.jsxs("div",{className:"admin-user-menu",children:[n.jsxs("div",{className:"admin-user-info",children:[n.jsxs("div",{className:"admin-avatar",children:[n.jsx("div",{className:`avatar-inner ${t!=null&&t.avatar_url?"has-image":""}`,children:t!=null&&t.avatar_url?n.jsx("img",{src:t.avatar_url,alt:"Profile",style:{width:"100%",height:"100%",borderRadius:"12px",objectFit:"cover"}}):(d=t==null?void 0:t.email)==null?void 0:d.charAt(0).toUpperCase()}),n.jsx("div",{className:"avatar-ring"})]}),n.jsxs("div",{className:"admin-user-details",children:[n.jsx("div",{className:"admin-user-name",children:(t==null?void 0:t.full_name)||(t==null?void 0:t.email)}),n.jsxs("div",{className:"admin-user-role",children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),t!=null&&t.is_superuser?"Super Admin":"Admin"]})]})]}),n.jsxs("button",{className:"admin-btn-logout",onClick:o,children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"})}),"Logout"]})]})]})]}),n.jsxs("div",{className:"admin-layout",children:[n.jsxs("aside",{className:"admin-sidebar",children:[n.jsxs("div",{className:"sidebar-header",children:[n.jsx("h3",{children:"Navigation"}),n.jsx("div",{className:"sidebar-decoration"})]}),n.jsxs("nav",{className:"admin-nav",children:[n.jsxs(Y,{to:"/admin",className:`admin-nav-item ${e==="/admin"?"active":""}`,children:[n.jsx("div",{className:"nav-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})}),n.jsx("span",{className:"nav-text",children:"Dashboard"}),n.jsx("div",{className:"nav-shine"})]}),n.jsxs(Y,{to:"/admin/products",className:`admin-nav-item ${e.startsWith("/admin/products")?"active":""}`,children:[n.jsx("div",{className:"nav-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}),n.jsx("span",{className:"nav-text",children:"Products"}),n.jsx("div",{className:"nav-shine"})]}),n.jsxs(Y,{to:"/admin/users",className:`admin-nav-item ${e.startsWith("/admin/users")?"active":""}`,children:[n.jsx("div",{className:"nav-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),n.jsx("span",{className:"nav-text",children:"Users"}),n.jsx("div",{className:"nav-shine"})]}),n.jsxs(Y,{to:"/admin/orders",className:`admin-nav-item ${e.startsWith("/admin/orders")?"active":""}`,children:[n.jsx("div",{className:"nav-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"})})}),n.jsx("span",{className:"nav-text",children:"Orders"}),n.jsx("div",{className:"nav-shine"})]}),n.jsx("div",{className:"admin-nav-divider",children:n.jsx("span",{children:"Quick Actions"})}),n.jsxs(Y,{to:"/",className:"admin-nav-item back-to-site",children:[n.jsx("div",{className:"nav-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"})})}),n.jsx("span",{className:"nav-text",children:"Back to Site"}),n.jsx("div",{className:"nav-shine"})]})]})]}),n.jsx("main",{className:"admin-main",children:n.jsx("div",{className:"content-wrapper",children:n.jsx(m1,{})})})]}),n.jsx("style",{children:`
        /* Global Styles */
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }
        
        .admin-container {
          min-height: 100vh;
          background: #0f0f1e;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .animated-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        /* ========================================
           HEADER STYLES (GLASSMORPHISM)
           ======================================== */
        
        .admin-header {
          height: 80px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .admin-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        }
        
        .admin-header-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        /* ========================================
           LOGO STYLES (KEEP ORIGINAL ANIMATIONS)
           ======================================== */
        
        .admin-brand-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .logo-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          overflow: hidden;
        }
        
        .logo-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: logoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
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
        
        .logo-wrapper img {
          display: block;
          height: 35px;
          width: auto;
          position: relative;
          z-index: 3;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite;
        }
        
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
        
        .logo-glow {
          position: absolute;
          width: 50px;
          height: 50px;
          background: radial-gradient(circle at center, rgba(102, 126, 234, 0.6), transparent 70%);
          border-radius: 50%;
          z-index: 1;
          filter: blur(12px);
          animation: glowPulse 3s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        
        .logo-ring {
          position: absolute;
          border: 2px solid transparent;
          border-radius: 50%;
          z-index: 2;
        }
        
        .ring-1 {
          width: 42px;
          height: 42px;
          border-top-color: rgba(102, 126, 234, 0.8);
          border-right-color: rgba(102, 126, 234, 0.4);
          animation: ringRotate 4s linear infinite;
        }
        
        .ring-2 {
          width: 48px;
          height: 48px;
          border-bottom-color: rgba(118, 75, 162, 0.7);
          border-left-color: rgba(118, 75, 162, 0.3);
          animation: ringRotate 6s linear infinite reverse;
        }
        
        .ring-3 {
          width: 54px;
          height: 54px;
          border-top-color: rgba(240, 147, 251, 0.6);
          border-bottom-color: rgba(240, 147, 251, 0.2);
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
        
        .admin-brand-link:hover .logo-wrapper img {
          animation: logoFloat 4s ease-in-out infinite, logoRotate 8s linear infinite, logoHoverBounce 0.6s ease;
        }
        
        @keyframes logoHoverBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        
        /* ========================================
           BRAND INFO
           ======================================== */
        
        .brand-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .admin-brand {
          font-size: 24px;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
        }
        
        .brand-tagline {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        
        .admin-header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        /* ========================================
           DIGITAL CLOCK (GLASSMORPHISM)
           ======================================== */
        
        .admin-clock {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 12px 20px;
          min-width: 200px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .admin-clock::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        .admin-clock:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
          border-color: rgba(102, 126, 234, 0.5);
        }
        
        .clock-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        
        .clock-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .clock-time {
          font-family: 'Courier New', monospace;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 1px;
        }
        
        .clock-date {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        /* ========================================
           NOTIFICATION BUTTON
           ======================================== */
        
        .admin-btn-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          position: relative;
        }
        
        .admin-btn-icon:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }
        
        .notification-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(15, 15, 30, 0.8);
          animation: pulse 2s ease-in-out infinite;
        }
        
        .btn-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: rgba(102, 126, 234, 0.2);
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .admin-btn-icon:hover .btn-glow {
          opacity: 1;
        }
        
        /* ========================================
           USER MENU (GLASSMORPHISM)
           ======================================== */
        
        .admin-user-menu {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .admin-user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px 8px 8px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s;
        }
        
        .admin-user-info:hover {
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
        }
        
        .admin-avatar {
          position: relative;
          width: 44px;
          height: 44px;
        }
        
        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          position: relative;
          z-index: 2;
        }
        
        .avatar-inner.has-image {
          background: none;
          box-shadow: none;
        }
        
        .avatar-ring {
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border-radius: 14px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          animation: ringRotate 3s linear infinite;
          z-index: 1;
        }
        
        .admin-user-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .admin-user-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
        
        .admin-user-role {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        /* ========================================
           LOGOUT BUTTON
           ======================================== */
        
        .admin-btn-logout {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 12px;
          border: 1px solid rgba(239, 68, 68, 0.3);
          background: rgba(239, 68, 68, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          color: #ef4444;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .admin-btn-logout:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);
        }
        
        /* ========================================
           LAYOUT STYLES
           ======================================== */
        
        .admin-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 32px;
          padding: 32px;
          min-height: calc(100vh - 80px);
          position: relative;
          z-index: 1;
        }
        
        /* ========================================
           SIDEBAR (GLASSMORPHISM)
           ======================================== */
        
        .admin-sidebar {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px;
          height: fit-content;
          position: sticky;
          top: 112px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .sidebar-header {
          margin-bottom: 24px;
          position: relative;
        }
        
        .sidebar-header h3 {
          font-size: 12px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }
        
        .sidebar-decoration {
          height: 2px;
          background: linear-gradient(90deg, rgba(102, 126, 234, 0.5), transparent);
          border-radius: 1px;
        }
        
        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        
        .nav-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s;
          position: relative;
          z-index: 2;
        }
        
        .nav-text {
          flex: 1;
          position: relative;
          z-index: 2;
        }
        
        .nav-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .admin-nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          transform: translateX(4px);
        }
        
        .admin-nav-item:hover .nav-icon {
          background: rgba(102, 126, 234, 0.3);
          transform: scale(1.05);
        }
        
        .admin-nav-item:hover .nav-shine {
          left: 100%;
        }
        
        .admin-nav-item.active {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
          color: #fff;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
          border: 1px solid rgba(102, 126, 234, 0.5);
        }
        
        .admin-nav-item.active .nav-icon {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }
        
        .admin-nav-item.back-to-site {
          color: rgba(255, 255, 255, 0.5);
          margin-top: 8px;
        }
        
        .admin-nav-item.back-to-site .nav-icon {
          background: rgba(148, 163, 184, 0.1);
        }
        
        .admin-nav-item.back-to-site:hover {
          background: rgba(148, 163, 184, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }
        
        .admin-nav-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 16px 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .admin-nav-divider span {
          font-size: 10px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 1px;
          background: rgba(15, 15, 30, 0.8);
          padding: 4px 12px;
          border-radius: 8px;
        }
        
        /* ========================================
           MAIN CONTENT (GLASSMORPHISM)
           ======================================== */
        
        .admin-main {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 0;
          min-height: 600px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .content-wrapper {
          padding: 32px;
          background: rgba(255, 255, 255, 0.98);
          min-height: 100%;
          border-radius: 20px;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width: 1024px) {
          .admin-layout {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }
          
          .admin-sidebar {
            position: static;
          }
          
          .admin-header {
            padding: 0 20px;
          }
          
          .brand-tagline {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .admin-header {
            height: 70px;
            padding: 0 16px;
          }
          
          .admin-header-left {
            gap: 16px;
          }
          
          .logo-wrapper img {
            height: 30px;
          }
          
          .admin-brand {
            font-size: 20px;
          }
          
          .admin-user-details,
          .clock-date {
            display: none;
          }
          
          .admin-clock {
            min-width: 120px;
            padding: 10px 16px;
          }
          
          .clock-time {
            font-size: 14px;
          }
          
          .admin-layout {
            padding: 16px;
            gap: 16px;
          }
          
          .content-wrapper {
            padding: 20px;
          }
          
          .admin-sidebar {
            padding: 20px;
          }
          
          .admin-nav-item {
            padding: 12px 16px;
            font-size: 14px;
          }
          
          .nav-icon {
            width: 40px;
            height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .admin-header-right {
            gap: 12px;
          }
          
          .admin-user-info {
            padding: 6px;
          }
          
          .avatar-inner {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
          
          .admin-btn-logout span {
            display: none;
          }
          
          .admin-btn-logout {
            padding: 12px;
          }
          
          .brand-info {
            display: none;
          }
          
          .admin-clock {
            display: none;
          }
        }
      `})]})}function Mb(){const[e,t]=b.useState([]),[r,a]=b.useState(!1),[i,s]=b.useState(null),[o,l]=b.useState(!1),[c,d]=x1(),[u,h]=b.useState(c.get("q")||""),[p,x]=b.useState(c.get("category")||"All"),[m,y]=b.useState(c.get("min")||""),[w,v]=b.useState(c.get("max")||""),[g,f]=b.useState(c.get("sort")||"newest"),[j,k]=b.useState(Number(c.get("page")||1)),[C,N]=b.useState(12),{add:z}=Zn();b.useEffect(()=>{l(!0)},[]),b.useEffect(()=>{let M=!1;async function T(){var O;a(!0),s(null);try{const U=await Se.get("/api/v1/products");if(M)return;const Q=(O=U.data)==null?void 0:O.items;Q&&Q.length?t(Q):t([])}catch{M||t([])}finally{M||a(!1)}}T();function E(O){O.key==="products:update"&&T()}return window.addEventListener("storage",E),()=>{M=!0,window.removeEventListener("storage",E)}},[]),b.useEffect(()=>{const M=new URLSearchParams;u&&M.set("q",u),p&&p!=="All"&&M.set("category",p),m&&M.set("min",m),w&&M.set("max",w),g&&g!=="newest"&&M.set("sort",g),j!==1&&M.set("page",String(j)),d(M)},[u,p,m,w,g,j,d]);const W=b.useMemo(()=>{const M=new Set(["All"]);return e.forEach(T=>M.add(T.category||"Other")),Array.from(M)},[e]),A=b.useMemo(()=>{let M=[...e];if(u.trim()){const O=u.toLowerCase();M=M.filter(U=>U.name.toLowerCase().includes(O)||U.slug.toLowerCase().includes(O)||(U.category||"").toLowerCase().includes(O))}p!=="All"&&(M=M.filter(O=>(O.category||"Other")===p));const T=Number(m),E=Number(w);switch(!Number.isNaN(T)&&m!==""&&(M=M.filter(O=>O.price>=T)),!Number.isNaN(E)&&w!==""&&(M=M.filter(O=>O.price<=E)),g){case"price-asc":M.sort((O,U)=>O.price-U.price);break;case"price-desc":M.sort((O,U)=>U.price-O.price);break;case"name-asc":M.sort((O,U)=>O.name.localeCompare(U.name));break;case"name-desc":M.sort((O,U)=>U.name.localeCompare(O.name));break;default:M.sort((O,U)=>{const Q=O.createdAt?Date.parse(O.createdAt):0;return(U.createdAt?Date.parse(U.createdAt):0)-Q})}return M},[e,u,p,m,w,g]),P=A.length,Z=Math.max(1,Math.ceil(P/C)),L=Math.min(j,Z),B=(L-1)*C,se=A.slice(B,B+C);b.useEffect(()=>{j>Z&&k(Z)},[Z,j]);const K=()=>{h(""),x("All"),y(""),v(""),f("newest"),k(1)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"floating-icons",children:[...Array(8)].map((M,T)=>n.jsx("div",{className:"floating-icon",style:{left:`${10+Math.random()*80}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${8+Math.random()*4}s`},children:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"}),n.jsx("line",{x1:"7",y1:"7",x2:"7",y2:"7"})]})},T))})]}),n.jsx("section",{className:`shop-hero ${o?"animate-in":""}`,children:n.jsx("div",{className:"container hero-inner",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),n.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),n.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"Shop Collection"]}),n.jsx("p",{className:"kicker",children:"Shop"}),n.jsx("h1",{className:"headline",children:"Find the next daily favorite"}),n.jsx("p",{className:"subhead",children:"Browse curated essentials across apparel, accessories, and more."}),n.jsxs("div",{className:"hero-stats",children:[n.jsxs("div",{className:"stat",children:[n.jsxs("span",{className:"stat-number",children:[e.length,"+"]}),n.jsx("span",{className:"stat-label",children:"Products"})]}),n.jsxs("div",{className:"stat",children:[n.jsx("span",{className:"stat-number",children:W.length-1}),n.jsx("span",{className:"stat-label",children:"Categories"})]})]})]})})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:`toolbar ${o?"animate-in":""}`,children:[n.jsxs("div",{className:"toolbar-left",children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"search",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"})]}),"Search"]}),n.jsx("input",{id:"search",type:"search",placeholder:"Search products",value:u,onChange:M=>{h(M.target.value),k(1)}})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"category",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Category"]}),n.jsx("select",{id:"category",value:p,onChange:M=>{x(M.target.value),k(1)},children:W.map(M=>n.jsx("option",{value:M,children:M},M))})]}),n.jsxs("div",{className:"field price",children:[n.jsxs("label",{children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),n.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]}),"Price Range"]}),n.jsxs("div",{className:"price-row",children:[n.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Min",value:m,onChange:M=>{y(M.target.value),k(1)}}),n.jsx("span",{children:"—"}),n.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Max",value:w,onChange:M=>{v(M.target.value),k(1)}})]})]})]}),n.jsxs("div",{className:"toolbar-right",children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"sort",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"4",y1:"6",x2:"16",y2:"6"}),n.jsx("line",{x1:"4",y1:"12",x2:"13",y2:"12"}),n.jsx("line",{x1:"4",y1:"18",x2:"11",y2:"18"})]}),"Sort By"]}),n.jsxs("select",{id:"sort",value:g,onChange:M=>f(M.target.value),children:[n.jsx("option",{value:"newest",children:"Newest"}),n.jsx("option",{value:"price-asc",children:"Price: Low to High"}),n.jsx("option",{value:"price-desc",children:"Price: High to Low"}),n.jsx("option",{value:"name-asc",children:"Name: A–Z"}),n.jsx("option",{value:"name-desc",children:"Name: Z–A"})]})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"perPage",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Per Page"]}),n.jsxs("select",{id:"perPage",value:C,onChange:M=>{N(Number(M.target.value)),k(1)},children:[n.jsx("option",{value:12,children:"12"}),n.jsx("option",{value:24,children:"24"}),n.jsx("option",{value:48,children:"48"})]})]}),n.jsxs("button",{className:"btn btn-clear",onClick:K,children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),"Clear Filters"]})]})]}),r&&n.jsxs("div",{className:"notice loading",children:[n.jsxs("svg",{className:"spinner",width:"24",height:"24",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Loading products…"]}),i&&n.jsxs("div",{className:"error",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),"Could not load products. Showing demo catalog."]}),!r&&se.length===0&&n.jsxs("div",{className:"notice empty",children:[n.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),n.jsx("p",{children:"No products match the current filters."}),n.jsx("button",{className:"btn btn-primary",onClick:K,children:"Clear All Filters"})]}),n.jsx("div",{className:`grid ${o?"animate-in":""}`,children:se.map((M,T)=>{var E;return n.jsxs("div",{className:"card",style:{animationDelay:`${.1+T*.05}s`},children:[n.jsxs(Y,{to:`/product/${M.slug}`,className:"card-img",children:[n.jsx("img",{src:((E=M.images)==null?void 0:E[0])||"https://via.placeholder.com/600x400",alt:M.name,loading:"lazy"}),n.jsx("div",{className:"card-overlay",children:n.jsx("span",{className:"view-details",children:"View Details"})})]}),n.jsxs("div",{className:"card-body",children:[n.jsxs("div",{className:"meta",children:[n.jsx("span",{className:"tag",children:M.category||"General"}),n.jsxs("span",{className:"price",children:["LKR ",Number(M.price).toFixed(2)]})]}),n.jsx(Y,{to:`/product/${M.slug}`,className:"card-title",children:M.name}),n.jsxs("div",{className:"card-actions",children:[n.jsxs("button",{className:"btn btn-primary",onClick:O=>{var me;const U=O.currentTarget.closest(".card"),Q=U==null?void 0:U.querySelector("img");Q&&Ls(Q),z({productId:M.id,slug:M.slug,name:M.name,price:M.price,image:(me=M.images)==null?void 0:me[0]})},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"9",cy:"21",r:"1"}),n.jsx("circle",{cx:"20",cy:"21",r:"1"}),n.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Add to Cart"]}),n.jsxs(Y,{to:`/product/${M.slug}`,className:"btn btn-ghost",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),n.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),"Details"]})]})]})]},M.id)})}),P>0&&n.jsxs("div",{className:`pagination ${o?"animate-in":""}`,children:[n.jsxs("button",{className:"btn btn-ghost",disabled:L<=1,onClick:()=>k(M=>Math.max(1,M-1)),children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),n.jsxs("span",{className:"page-info",children:["Page ",n.jsx("strong",{children:L})," of ",n.jsx("strong",{children:Z})," • ",P," items"]}),n.jsxs("button",{className:"btn btn-ghost",disabled:L>=Z,onClick:()=>k(M=>Math.min(Z,M+1)),children:["Next",n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]})]})}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --positive:#1fbf75;
          --warning:#ffb020;
          --danger:#ff5d5d;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #1fbf75 0%, #06d6a0 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .floating-icon {
          position: absolute;
          color: rgba(109, 116, 255, 0.2);
          animation: iconFloat 10s ease-in-out infinite;
        }
        
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .shop-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .shop-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .toolbar {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .toolbar.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .grid {
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.3s;
        }
        
        .grid.animate-in {
          opacity: 1;
        }
        
        .grid.animate-in .card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          animation: cardSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes cardSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .pagination {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.5s;
        }
        
        .pagination.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .shop-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-inner{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap:24px;
        }
        
        .hero-content {
          max-width: 600px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(31, 191, 117, 0.1);
          border: 1px solid rgba(31, 191, 117, 0.3);
          border-radius: 20px;
          color: var(--positive);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(31, 191, 117, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(31, 191, 117, 0.5);
          }
        }
        
        .kicker{
          letter-spacing:.2em;
          text-transform:uppercase;
          color:var(--brand);
          font-weight:700;
          margin:0 0 12px;
          font-size: 14px;
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size:clamp(16px,2vw,18px);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .hero-stats {
          display: flex;
          gap: 32px;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-number {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--brand) 0%, var(--positive) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 13px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        /* ========================================
           SECTION & TOOLBAR
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .toolbar{
          display:flex;
          flex-wrap:wrap;
          gap:16px;
          justify-content:space-between;
          align-items:flex-end;
          margin-bottom:32px;
          padding: 24px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }
        
        .toolbar-left,.toolbar-right{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
          align-items:flex-end;
        }
        
        .field{
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        
        label{
          font-size:13px;
          color:var(--muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        input,select{
          height:44px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:10px;
          color:var(--text);
          padding:0 14px;
          font-size: 14px;
          transition: all 0.3s;
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        input[type="number"]{
          width:120px;
        }
        
        .field.price .price-row{
          display:flex;
          gap:8px;
          align-items:center;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:8px;
          border-radius:10px;
          padding:12px 18px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          transition:all 0.3s;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        
        .btn:hover{
          transform:translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-ghost{
          background:rgba(35, 36, 52, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .btn-ghost:hover {
          background: rgba(35, 36, 52, 0.9);
        }
        
        .btn-clear {
          background: rgba(255, 93, 93, 0.1);
          border-color: rgba(255, 93, 93, 0.3);
          color: var(--danger);
        }
        
        .btn-clear:hover {
          background: rgba(255, 93, 93, 0.2);
          border-color: var(--danger);
        }
        
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
        
        /* ========================================
           NOTICES
           ======================================== */
        
        .notice{
          border:1px solid rgba(109, 116, 255, 0.3);
          background: rgba(109, 116, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding:20px;
          border-radius:12px;
          color:var(--muted);
          margin:24px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        
        .notice.loading {
          color: var(--brand);
        }
        
        .notice.empty {
          flex-direction: column;
          padding: 60px 20px;
          color: var(--muted);
        }
        
        .notice.empty svg {
          opacity: 0.3;
          margin-bottom: 12px;
        }
        
        .notice.empty p {
          margin: 0 0 16px 0;
          font-size: 16px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .error{
          border:1px solid rgba(255, 93, 93, 0.5);
          background: rgba(255, 93, 93, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding:16px 20px;
          border-radius:12px;
          color:#ffbcbc;
          margin:24px 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        /* ========================================
           PRODUCT GRID
           ======================================== */
        
        .grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }
        
        .card{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:16px;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          transition: all 0.3s;
          position: relative;
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          border-color: rgba(109, 116, 255, 0.3);
        }
        
        .card-img{
          display:block;
          aspect-ratio:4/3;
          background:var(--surface);
          border-bottom:1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .card-img img{
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          transition: transform 0.5s;
        }
        
        .card:hover .card-img img {
          transform: scale(1.1);
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .card:hover .card-overlay {
          opacity: 1;
        }
        
        .view-details {
          color: white;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 20px;
          background: rgba(109, 116, 255, 0.9);
          border-radius: 8px;
        }
        
        .card-body{
          padding:20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .meta{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:12px;
        }
        
        .tag{
          font-size:12px;
          color:var(--muted);
          padding:4px 12px;
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:999px;
          background:rgba(35, 36, 52, 0.6);
          font-weight: 600;
        }
        
        .price{
          font-weight:700;
          font-size: 16px;
          color: var(--positive);
        }
        
        .card-title{
          display:inline-block;
          margin-top:4px;
          color:var(--text);
          text-decoration:none;
          font-weight:600;
          font-size: 16px;
          line-height: 1.4;
          margin-bottom: auto;
        }
        
        .card-title:hover{
          color: var(--brand);
        }
        
        .card-actions{
          display:flex;
          gap:10px;
          margin-top:16px;
        }
        
        /* ========================================
           PAGINATION
           ======================================== */
        
        .pagination{
          display:flex;
          gap:16px;
          justify-content:center;
          align-items:center;
          margin-top:48px;
          padding: 20px;
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        
        .page-info{
          color:var(--muted);
          font-size: 14px;
        }
        
        .page-info strong {
          color: var(--brand);
          font-weight: 700;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:1024px){
          .grid{
            grid-template-columns:repeat(2,1fr);
          }
        }
        
        @media (max-width:768px){
          .hero-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .headline {
            font-size: 32px;
          }
          
          .toolbar {
            flex-direction: column;
            align-items: stretch;
          }
          
          .toolbar-left, .toolbar-right {
            width: 100%;
            flex-direction: column;
          }
          
          .field {
            width: 100%;
          }
          
          input[type="number"] {
            width: 100%;
          }
        }
        
        @media (max-width:640px){
          .grid{
            grid-template-columns:1fr;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 16px;
          }
          
          .card-actions {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      `})]})}function Ab(){const{user:e}=Ft();return n.jsxs(n.Fragment,{children:[n.jsx("section",{className:"about-hero",children:n.jsx("div",{className:"container hero-inner",children:n.jsxs("div",{children:[n.jsx("p",{className:"kicker",children:"About Us"}),n.jsx("h1",{className:"headline",children:"Design-led essentials, made to last"}),n.jsx("p",{className:"subhead",children:"Everyday apparel and accessories built with comfort, durability, and timeless aesthetics at the core."}),e?n.jsxs("div",{className:"hero-ctas",children:[n.jsx(Y,{to:"/contact",className:"btn btn-primary",children:"Contact Us"}),n.jsx(Y,{to:"/shop",className:"btn btn-ghost",children:"Browse Collections"})]}):n.jsxs("div",{className:"hero-ctas",children:[n.jsx(Y,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),n.jsx(Y,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]})})}),!e&&n.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:n.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[n.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to Learn More?"}),n.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to see our full story, team, values, and start exploring our collections!"}),n.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx(Y,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),n.jsx(Y,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),e&&n.jsxs(n.Fragment,{children:[n.jsx("section",{className:"section alt",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"section-title",children:"Our Story"}),n.jsx("p",{className:"lead",children:"Started as a small studio with a big belief: daily wear should feel great, look refined, and hold up over time. We partner with trusted makers and keep batches small, so attention to detail never slips."}),n.jsxs("div",{className:"timeline",children:[n.jsx("div",{className:"tl-item",children:n.jsxs("div",{className:"tl-content",children:[n.jsx("h3",{children:"Where it began"}),n.jsx("p",{children:"Sketches, fabric swatches, and countless prototypes—our journey started with a focus on essentials."})]})}),n.jsx("div",{className:"tl-item",children:n.jsxs("div",{className:"tl-content",children:[n.jsx("h3",{children:"Finding our partners"}),n.jsx("p",{children:"We sourced mills and workshops that matched our standards for consistency and fair practices."})]})}),n.jsx("div",{className:"tl-item",children:n.jsxs("div",{className:"tl-content",children:[n.jsx("h3",{children:"Refining the craft"}),n.jsx("p",{children:"With customer feedback, we tuned fits, finishes, and care guides to make pieces last longer."})]})})]})]})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"section-title",children:"Mission & Values"}),n.jsxs("div",{className:"grid-3",children:[n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Mission"}),n.jsx("p",{children:"Make everyday dressing simpler through reliable, comfortable essentials that blend form and function."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Quality"}),n.jsx("p",{children:"From reinforced seams to color-fast dyes, we design beyond the first wear and wash."})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{children:"Trust"}),n.jsx("p",{children:"Clear specs, honest descriptions, and responsive support keep decisions easy and informed."})]})]})]})}),n.jsx("section",{className:"section alt",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"section-title",children:"Sustainability & Craft"}),n.jsxs("div",{className:"grid-2",children:[n.jsxs("div",{className:"info",children:[n.jsx("h3",{children:"Responsible choices"}),n.jsx("p",{children:"We prioritize durable textiles, mindful packaging, and small-batch production to reduce waste while keeping quality high."}),n.jsxs("ul",{className:"bullets",children:[n.jsx("li",{children:"Material-first selection with long-life wear in mind."}),n.jsx("li",{children:"Repair-friendly construction and care guides."}),n.jsx("li",{children:"Continuous iteration based on real-world use."})]})]}),n.jsxs("div",{className:"info",children:[n.jsx("h3",{children:"Attention to detail"}),n.jsx("p",{children:"Fit, finish, and feel are tested across sizes and seasons, ensuring each piece earns a place in daily rotation."}),n.jsxs("ul",{className:"bullets",children:[n.jsx("li",{children:"Reinforced stress points and reliable hardware."}),n.jsx("li",{children:"Neutral palettes for effortless pairing."}),n.jsx("li",{children:"Consistent measurements for repeat buys."})]})]})]})]})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"section-title",children:"Customer Promise"}),n.jsxs("div",{className:"grid-3",children:[n.jsxs("div",{className:"mini-feature",children:[n.jsx("h3",{children:"30-Day Returns"}),n.jsx("p",{children:"Hassle-free returns on unused items in original condition within 30 days."})]}),n.jsxs("div",{className:"mini-feature",children:[n.jsx("h3",{children:"Fast Support"}),n.jsx("p",{children:"Friendly assistance with sizing, care, and orders via chat or email."})]}),n.jsxs("div",{className:"mini-feature",children:[n.jsx("h3",{children:"Honest Pricing"}),n.jsx("p",{children:"Fair prices without inflated markups—value built into each piece."})]})]})]})}),n.jsx("section",{className:"section alt",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"section-title",children:"Who We Are"}),n.jsxs("div",{className:"grid-3",children:[n.jsxs("div",{className:"person",children:[n.jsx("div",{className:"avatar"}),n.jsxs("div",{children:[n.jsx("h3",{children:"Design Lead"}),n.jsx("p",{children:"Focuses on silhouettes, fit blocks, and fabric hand-feel for comfort and longevity."})]})]}),n.jsxs("div",{className:"person",children:[n.jsx("div",{className:"avatar"}),n.jsxs("div",{children:[n.jsx("h3",{children:"Production"}),n.jsx("p",{children:"Oversees sourcing, QC, and small-batch timelines to maintain consistency."})]})]}),n.jsxs("div",{className:"person",children:[n.jsx("div",{className:"avatar"}),n.jsxs("div",{children:[n.jsx("h3",{children:"Care & Support"}),n.jsx("p",{children:"Helps with sizing, exchanges, and care tips to keep favorites in rotation."})]})]})]})]})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"section-title",children:"FAQs"}),n.jsxs("div",{className:"faq",children:[n.jsxs("details",{children:[n.jsx("summary",{children:"What sizes do you carry?"}),n.jsx("p",{children:"Core styles generally run XS–XXL. Fit notes and measurements are listed on product pages."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"How do returns work?"}),n.jsx("p",{children:"Submit a request within 30 days for unused items. We’ll guide through label creation and refund steps."})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"Do you ship internationally?"}),n.jsx("p",{children:"Yes, with tracked delivery options at checkout. Timelines vary by destination."})]})]})]})}),n.jsx("section",{className:"section alt",children:n.jsxs("div",{className:"container contact-cta",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"section-title",children:"Get in touch"}),n.jsx("p",{className:"lead",children:"Questions about sizing, care, or orders? The team is ready to help."})]}),n.jsxs("div",{className:"cta-buttons",children:[n.jsx(Y,{to:"/contact",className:"btn btn-primary",children:"Contact Support"}),n.jsx(Y,{to:"/shop",className:"btn btn-ghost",children:"Explore the Shop"})]})]})})]}),n.jsx("style",{children:`
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
      `})]})}const Ob="mgvnjvjw",Lb=()=>`https://formspree.io/f/${Ob}`;function Ib(){const[e,t]=b.useState({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"}),[r,a]=b.useState(!1),[i,s]=b.useState(null),[o,l]=b.useState(null),[c,d]=b.useState(!1),u=b.useRef(null);b.useEffect(()=>{d(!0)},[]),b.useEffect(()=>{i&&u.current&&u.current.focus(),o&&u.current&&u.current.focus()},[i,o]);const h=m=>{const{name:y,value:w}=m.target;t(v=>({...v,[y]:w}))},p=async m=>{var y;m.preventDefault(),a(!0),s(null),l(null);try{const w=Lb();if(!w)throw new Error("Contact form is not configured. Missing VITE_FORMSPREE_FORM_ID.");const v={name:e.name,email:e.email,_replyto:e.email,subject:e.subject,message:e.message,order_id:e.orderId,preferred_channel:e.channel,_subject:`[Store Contact] ${e.subject}`},g=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(v)});if(!g.ok){let f="Could not send message. Please try again.";try{const j=await g.json();(y=j==null?void 0:j.errors)!=null&&y.length&&(f=j.errors.map(k=>k.message).join(`
`))}catch{}throw new Error(f)}s("Message sent! We'll reply to your email within 1–2 business days."),t({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"})}catch(w){const v=w instanceof Error?w.message:"Could not send message. Please try again or use another contact method.";l(v)}finally{a(!1)}},x=`https://wa.me/94768976222?text=${encodeURIComponent(`Hello, I need help with my order.
Name: ${e.name}
Email: ${e.email}
Order ID: ${e.orderId||"-"}
Subject: ${e.subject}
Message: ${e.message}`)}`;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsx("div",{className:"floating-elements",children:[...Array(6)].map((m,y)=>n.jsxs("div",{className:"floating-element",style:{left:`${15+Math.random()*70}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${6+Math.random()*4}s`},children:[y%3===0&&n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]}),y%3===1&&n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),y%3===2&&n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})]},y))})]}),n.jsx("section",{className:`contact-hero ${c?"animate-in":""}`,children:n.jsx("div",{className:"container hero-inner",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Get in Touch"]}),n.jsx("p",{className:"kicker",children:"Contact"}),n.jsx("h1",{className:"headline",children:"How can we help?"}),n.jsx("p",{className:"subhead",children:"Questions about orders, sizing, delivery, or returns—support is here."}),n.jsxs("div",{className:"hero-features",children:[n.jsxs("div",{className:"feature",children:[n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("polyline",{points:"12 6 12 12 16 14"})]}),n.jsx("span",{children:"1-2 day response"})]}),n.jsxs("div",{className:"feature",children:[n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),n.jsx("span",{children:"Multiple channels"})]}),n.jsxs("div",{className:"feature",children:[n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),n.jsx("span",{children:"Dedicated support"})]})]})]})})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container contact-grid",children:[n.jsxs("div",{className:`panel form-panel ${c?"animate-in":""}`,children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Send a message"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{ref:u,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[i&&n.jsxs("div",{className:"alert success",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),i]}),o&&n.jsxs("div",{className:"alert error",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),n.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),o]})]}),n.jsxs("form",{className:"form",onSubmit:p,noValidate:!0,children:[n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"name",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),n.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"Name",n.jsx("span",{"aria-hidden":"true",children:" *"})]}),n.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e.name,onChange:h,autoComplete:"name",placeholder:"John Doe"})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"email",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"Email",n.jsx("span",{"aria-hidden":"true",children:" *"})]}),n.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:h,autoComplete:"email",placeholder:"john@example.com"})]})]}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"orderId",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),n.jsx("polyline",{points:"14 2 14 8 20 8"}),n.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),n.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),n.jsx("polyline",{points:"10 9 9 9 8 9"})]}),"Order ID"]}),n.jsx("input",{id:"orderId",name:"orderId",type:"text",value:e.orderId,onChange:h,placeholder:"Optional, helps us locate your order"})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"channel",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),n.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),"Preferred channel"]}),n.jsxs("select",{id:"channel",name:"channel",value:e.channel,onChange:h,children:[n.jsx("option",{value:"email",children:"Email"}),n.jsx("option",{value:"phone",children:"Phone"}),n.jsx("option",{value:"whatsapp",children:"WhatsApp"})]})]})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"subject",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),n.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),n.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),n.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),n.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),n.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),"Subject",n.jsx("span",{"aria-hidden":"true",children:" *"})]}),n.jsx("input",{id:"subject",name:"subject",type:"text",required:!0,value:e.subject,onChange:h,placeholder:"How can we help you?"})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"message",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Message",n.jsx("span",{"aria-hidden":"true",children:" *"})]}),n.jsx("textarea",{id:"message",name:"message",required:!0,rows:6,value:e.message,onChange:h,placeholder:"Tell us more about your inquiry..."})]}),n.jsxs("div",{className:"actions",children:[n.jsx("button",{className:"btn btn-primary",type:"submit",disabled:r,children:r?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Sending…"]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),n.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),"Send message"]})}),n.jsxs("a",{className:"btn btn-whatsapp",href:x,target:"_blank",rel:"noopener noreferrer",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]})]}),n.jsx("p",{className:"tiny muted",children:"Fields marked with * are required."})]})]}),n.jsxs("aside",{className:`panel info-panel ${c?"animate-in":""}`,children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),"Contact details"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("ul",{className:"list contact-list",children:[n.jsxs("li",{children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.jsx("polyline",{points:"22,6 12,13 2,6"})]}),n.jsx("span",{children:"memberofpfc20@gmail.com"})]}),n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),n.jsx("span",{children:"+94 76 89 76 222"})]}),n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),n.jsx("span",{children:"+94 76 897 6222"})]}),n.jsxs("li",{children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.jsx("span",{children:"252/1A Mannar Road, Puttalam"})]}),n.jsxs("li",{children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("polyline",{points:"12 6 12 12 16 14"})]}),n.jsx("span",{children:"Mon–Fri, 9:00–17:00 (UTC+5:30)"})]}),n.jsxs("li",{children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),n.jsx("span",{children:"Response time: 1–2 business days"})]})]}),n.jsx("div",{className:"divider"}),n.jsxs("h3",{className:"quick-help-title",children:[n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),n.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),"Quick help"]}),n.jsxs("ul",{className:"list quick-help-list",children:[n.jsx("li",{children:n.jsxs("a",{href:"/faq",children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})}),"FAQ"]})}),n.jsx("li",{children:n.jsxs("a",{href:"/shipping-returns",children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})}),"Shipping & Returns"]})}),n.jsx("li",{children:n.jsxs("a",{href:"/orders",children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})}),"Track orders"]})}),n.jsx("li",{children:n.jsxs("a",{href:"/care",children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polyline",{points:"9 18 15 12 9 6"})}),"Care guides"]})})]}),n.jsx("div",{className:"mapbox",children:n.jsxs("div",{className:"map-fallback",children:[n.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),n.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.jsx("span",{children:"Map Coming Soon"})]})})]})]})}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --danger:#ff5d5d;
          --positive:#1fbf75;
          --whatsapp:#25D366;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .floating-element {
          position: absolute;
          color: rgba(109, 116, 255, 0.2);
          animation: elementFloat 10s ease-in-out infinite;
        }
        
        @keyframes elementFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .contact-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .contact-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .form-panel {
          opacity: 0;
          transform: translateX(-40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .form-panel.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .info-panel {
          opacity: 0;
          transform: translateX(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.3s;
        }
        
        .info-panel.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .contact-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-inner{
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        
        .hero-content {
          max-width: 700px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(109, 116, 255, 0.1);
          border: 1px solid rgba(109, 116, 255, 0.3);
          border-radius: 20px;
          color: var(--brand);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          width: fit-content;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(109, 116, 255, 0.5);
          }
        }
        
        .kicker{
          letter-spacing:.2em;
          text-transform:uppercase;
          color:var(--brand);
          font-weight:700;
          margin:0 0 12px;
          font-size: 14px;
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .hero-features {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--muted);
          font-size: 14px;
        }
        
        .feature svg {
          color: var(--brand);
        }
        
        /* ========================================
           SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .contact-grid{
          display:grid;
          grid-template-columns:1.4fr .9fr;
          gap:24px;
        }
        
        /* ========================================
           PANEL STYLES (GLASSMORPHISM)
           ======================================== */
        
        .panel{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:20px;
          padding:32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }
        
        .panel-header {
          margin-bottom: 24px;
        }
        
        .section-title{
          margin:0 0 8px;
          font-size:24px;
          font-weight: 700;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .title-underline {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 60px;
            opacity: 1;
          }
        }
        
        /* ========================================
           FORM STYLES
           ======================================== */
        
        .form{
          display:grid;
          gap:20px;
        }
        
        .row{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
        }
        
        .field{
          display:grid;
          gap:10px;
        }
        
        label{
          font-size:14px;
          color:var(--muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        input,select,textarea{
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          color:var(--text);
          padding:12px 16px;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        textarea{
          resize:vertical;
          font-family: inherit;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .actions{
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:10px;
          border-radius:12px;
          padding:14px 24px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
          flex: 1;
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-whatsapp {
          background: rgba(37, 211, 102, 0.1);
          border-color: rgba(37, 211, 102, 0.3);
          color: var(--whatsapp);
        }
        
        .btn-whatsapp:hover {
          background: rgba(37, 211, 102, 0.2);
          border-color: var(--whatsapp);
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .tiny{
          font-size:12px;
          margin-top: 8px;
        }
        
        .muted{
          color:var(--muted);
        }
        
        /* ========================================
           LISTS
           ======================================== */
        
        .list{
          list-style:none;
          margin:0;
          padding:0;
          display:grid;
          gap:12px;
        }
        
        .contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--muted);
          line-height: 1.6;
        }
        
        .contact-list svg {
          flex-shrink: 0;
          color: var(--brand);
          margin-top: 2px;
        }
        
        .divider{
          height:1px;
          background: rgba(255, 255, 255, 0.1);
          margin:24px 0;
        }
        
        .quick-help-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 16px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .quick-help-list li {
          padding: 0;
        }
        
        .quick-help-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--muted);
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 10px;
          transition: all 0.3s;
        }
        
        .quick-help-list a:hover {
          background: rgba(109, 116, 255, 0.1);
          color: var(--brand);
          transform: translateX(4px);
        }
        
        .quick-help-list svg {
          color: var(--brand);
        }
        
        /* ========================================
           MAP
           ======================================== */
        
        .mapbox{
          margin-top:24px;
        }
        
        .map-fallback{
          height:200px;
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          display:flex;
          flex-direction: column;
          align-items:center;
          justify-content:center;
          gap: 12px;
          color:var(--muted);
          background: rgba(23, 24, 33, 0.6);
        }
        
        .map-fallback svg {
          color: var(--brand);
        }
        
        /* ========================================
           ALERTS
           ======================================== */
        
        .live{
          outline:none;
        }
        
        .alert{
          border-radius:12px;
          padding:14px 16px;
          margin-bottom:16px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: alertSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes alertSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .alert.success{
          border:1px solid rgba(31,191,117,.5);
          background: rgba(31,191,117,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#c7f5df;
        }
        
        .alert.error{
          border:1px solid rgba(255,93,93,.5);
          background: rgba(255,93,93,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#ffc9c9;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:900px){
          .contact-grid{
            grid-template-columns:1fr;
          }
          
          .row{
            grid-template-columns:1fr;
          }
          
          .hero-features {
            flex-direction: column;
            gap: 16px;
          }
          
          .headline {
            font-size: 36px;
          }
        }
        
        @media (max-width:640px){
          .actions {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
          }
        }
      `})]})}/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,a)=>a?a.toUpperCase():r.toLowerCase()),Ep=e=>{const t=Bb(e);return t.charAt(0).toUpperCase()+t.slice(1)},X1=(...e)=>e.filter((t,r,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===r).join(" ").trim(),Db=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ub={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:i="",children:s,iconNode:o,...l},c)=>b.createElement("svg",{ref:c,...Ub,width:t,height:t,stroke:e,strokeWidth:a?Number(r)*24/Number(t):r,className:X1("lucide",i),...!s&&!Db(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,u])=>b.createElement(d,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=(e,t)=>{const r=b.forwardRef(({className:a,...i},s)=>b.createElement($b,{ref:s,iconNode:t,className:X1(`lucide-${Fb(Ep(e))}`,`lucide-${e}`,a),...i}));return r.displayName=Ep(e),r};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Wb=Zt("arrow-up",Hb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Vb=Zt("book",qb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Zb=Zt("chevron-down",Yb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Rp=Zt("circle-question-mark",Gb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Qb=Zt("external-link",Kb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Jb=Zt("funnel",Xb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],ty=Zt("hash",ey);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Pp=Zt("message-circle",ry);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Tp=Zt("search",ny);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],iy=Zt("star",ay),sy=()=>{const[e,t]=b.useState(""),[r,a]=b.useState(new Set),[i,s]=b.useState(!1),[o,l]=b.useState("all"),[c,d]=b.useState(!1),[u]=b.useState(["How do I create an account?","What payment methods are available?","How do I view my order history?","How do I add items to my cart?"]);b.useEffect(()=>{const v=()=>{d(window.scrollY>300)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]);const h=[{title:"General Questions",icon:"❓",items:[{question:"What is this platform?",answer:"This is a modern e-commerce platform built with FastAPI backend and React frontend, offering a complete shopping experience with product catalog, secure checkout, order tracking, and administrative management tools."},{question:"Do I need to create an account to shop?",answer:"Yes, you must register and login to access shopping features including the product catalog, cart, checkout, and order history. This ensures a secure and personalized shopping experience."},{question:"What currency is used?",answer:"All prices are displayed in Sri Lankan Rupees (LKR). The platform is optimized for Sri Lankan customers with local payment methods and shipping."}]},{title:"Account & Authentication",icon:"🔐",items:[{question:"How do I create an account?",answer:`Click on "Register" in the navigation menu, fill in your details including name, email, and password, then submit the form. You'll be automatically logged in after registration.`},{question:"I forgot my password. What should I do?",answer:n.jsxs(n.Fragment,{children:["Currently, password reset functionality is not implemented. Please contact support through the"," ",n.jsx(Y,{to:"/contact",className:"text-[#6D74FF] hover:text-[#9b87f5] underline",children:"contact page"})," ","for assistance."]})},{question:"How do I logout?",answer:'Click on your user avatar in the top navigation and select "Logout" from the dropdown menu.'},{question:"Can I update my account information?",answer:"Yes, after logging in, access your profile settings to update your name, email, and other account details."}]},{title:"Shopping & Products",icon:"🛍️",items:[{question:"How do I browse products?",answer:`After logging in, click "Shop" in the navigation menu. You'll see all available products with images, prices, and descriptions. Click on any product to view detailed information.`},{question:"Can I see multiple images for products?",answer:"Yes! Products can have up to 5 images. In the product detail view, you can browse through all available images to see the product from different angles."},{question:"How do I add items to my cart?",answer:'On the product detail page, select the quantity you want and click "Add to Cart". The item will be added to your shopping cart, which you can access from the navigation menu.'},{question:"Can I modify items in my cart?",answer:"Yes, visit your cart page to update quantities or remove items. Changes are saved automatically."},{question:"What if a product is out of stock?",answer:"Out of stock products will be clearly marked. You can check back later or contact support to inquire about restocking dates."}]},{title:"Checkout & Payments",icon:"💳",items:[{question:"What payment methods are available?",answer:n.jsxs(n.Fragment,{children:["We accept two payment methods:",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Stripe:"})," Credit/debit cards (Visa, Mastercard, American Express)",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Bank Transfer:"})," Direct bank transfer to our account"]})},{question:"How does bank transfer payment work?",answer:`During checkout, select "Bank Transfer" as payment method. You'll receive payment details including account number, account holder name, and reference number. Transfer the exact amount to our bank account and use the reference number. Your order status will be updated once payment is verified.`},{question:"What information do I need to provide during checkout?",answer:n.jsxs(n.Fragment,{children:["You\\'ll need to provide:",n.jsx("br",{}),"• Customer name and contact information",n.jsx("br",{}),"• Shipping address (pre-filled for Sri Lanka)",n.jsx("br",{}),"• Payment method selection and details"]})},{question:"Is my payment information secure?",answer:"Yes, we use industry-standard security measures. Stripe payments are processed through Stripe's secure servers. Bank transfer details are displayed securely without storing sensitive payment information on our servers."},{question:"Can I use international credit cards?",answer:"Yes, Stripe supports international credit and debit cards. However, currency conversion fees may apply from your card issuer."}]},{title:"Orders & Tracking",icon:"📦",items:[{question:"How do I view my order history?",answer:`After logging in, click "Orders" in the navigation menu. You'll see all your orders with status, date, and total amount. Click on any order to view detailed information.`},{question:"What do the order statuses mean?",answer:n.jsxs(n.Fragment,{children:["Order statuses include:",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Pending Verification:"})," Order placed, payment being verified",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Processing:"})," Payment verified, order being prepared",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Shipped:"})," Order has been dispatched",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Delivered:"})," Order completed successfully",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Cancelled:"})," Order was cancelled"]})},{question:"How do I download my invoice?",answer:'Once your payment is verified, an "Invoice" button will appear in your order details. Click it to download a professional PDF invoice with all order details, pricing, and payment information.'},{question:"Can I cancel my order?",answer:"Orders can only be cancelled before payment verification. Please contact support immediately if you need to cancel an order after payment."},{question:"What is your shipping policy?",answer:"We ship within Sri Lanka. Shipping times vary based on location. You'll receive tracking information once your order is shipped."}]},{title:"Admin Panel",icon:"👑",items:[{question:"How do I access the admin panel?",answer:`Admin access requires special permissions. If you have admin privileges, you'll see an "Admin" button in the navigation after logging in. Click it to access the admin dashboard.`},{question:"What can I do in the admin panel?",answer:n.jsxs(n.Fragment,{children:["Admin users can:",n.jsx("br",{}),"• Manage products (add, edit, delete, upload images)",n.jsx("br",{}),"• View and manage user accounts",n.jsx("br",{}),"• Update order statuses and track orders",n.jsx("br",{}),"• View dashboard metrics and analytics"]})},{question:"How do I add new products?",answer:'In the admin panel, go to "Products" section, click "Add Product", fill in the details including name, price, stock, and upload 1-5 product images. The product will appear in the shop immediately.'},{question:"Can I bulk upload products?",answer:"Currently, products must be added individually through the admin panel. Bulk upload functionality may be added in future updates."}]},{title:"Technical Issues",icon:"⚙️",items:[{question:"The website is not loading properly.",answer:"Try clearing your browser cache and cookies, or try a different browser. If the issue persists, check if both backend and frontend servers are running."},{question:"I can't login even with correct credentials.",answer:"Clear your browser's localStorage (press F12 → Application → Local Storage → Clear All), then try logging in again. Make sure you're using the correct email and password format."},{question:"Images are not displaying.",answer:"Product images are served from the backend server. Make sure the backend is running and the static files are properly configured. Try refreshing the page."},{question:"Payment is not processing.",answer:"For Stripe payments, ensure your card details are correct and you have sufficient funds. For bank transfers, double-check the account details and reference number. Contact support if issues persist."},{question:"The site is slow or unresponsive.",answer:"Check your internet connection first. If the problem persists, try clearing your cache or using a different browser. Contact support if issues continue."}]}],p=(v,g)=>{const f=`${v}-${g}`,j=new Set(r);j.has(f)?j.delete(f):j.add(f),a(j)},x=()=>{if(i)a(new Set);else{const v=new Set;h.forEach((g,f)=>{g.items.forEach((j,k)=>{v.add(`${f}-${k}`)})}),a(v)}s(!i)},m=b.useMemo(()=>{let v=h;if(o!=="all"&&(v=v.filter(g=>g.title.toLowerCase().includes(o.toLowerCase()))),e.trim()){const g=e.toLowerCase();v=v.map(f=>({...f,items:f.items.filter(j=>j.question.toLowerCase().includes(g)||typeof j.answer=="string"&&j.answer.toLowerCase().includes(g))})).filter(f=>f.items.length>0)}return v},[e,o]),y=()=>{window.scrollTo({top:0,behavior:"smooth"})},w=v=>{const g=document.getElementById(`section-${v.replace(/\s+/g,"-").toLowerCase()}`);g&&g.scrollIntoView({behavior:"smooth",block:"start"})};return n.jsxs("div",{className:"faq-page",children:[c&&n.jsx("button",{onClick:y,className:"faq-scroll-top","aria-label":"Scroll to top",children:n.jsx(Wb,{})}),n.jsxs("div",{className:"faq-container",children:[n.jsx("div",{className:"faq-header",children:n.jsxs("div",{className:"faq-header-content",children:[n.jsxs("div",{className:"faq-title-section",children:[n.jsxs("div",{className:"faq-icon-wrapper",children:[n.jsx(Rp,{className:"faq-icon"}),n.jsx("div",{className:"faq-ping"})]}),n.jsxs("div",{children:[n.jsx("h1",{className:"faq-title",children:"FAQ Center"}),n.jsxs("p",{className:"faq-subtitle",children:["Your comprehensive guide to our e-commerce platform. Find instant answers or",n.jsx(Y,{to:"/contact",children:" contact support"}),"."]})]})]}),n.jsxs("div",{className:"faq-stats",children:[n.jsxs("div",{className:"faq-stat-card",children:[n.jsx("div",{className:"faq-stat-value",children:h.reduce((v,g)=>v+g.items.length,0)}),n.jsx("div",{className:"faq-stat-label",children:"Questions"})]}),n.jsxs("div",{className:"faq-stat-card",children:[n.jsx("div",{className:"faq-stat-value",children:h.length}),n.jsx("div",{className:"faq-stat-label",children:"Categories"})]}),n.jsxs("div",{className:"faq-stat-card",children:[n.jsx("div",{className:"faq-stat-value",children:"24h"}),n.jsx("div",{className:"faq-stat-label",children:"Response"})]})]})]})}),n.jsxs("div",{className:"faq-search-wrapper",children:[n.jsxs("div",{className:"faq-search-container",children:[n.jsx(Tp,{className:"faq-search-icon"}),n.jsx("input",{type:"text",placeholder:"Search questions, answers, or keywords...",value:e,onChange:v=>t(v.target.value),className:"faq-search-input"}),e&&n.jsx("button",{onClick:()=>t(""),className:"faq-search-clear",children:"✕"})]}),n.jsxs("div",{className:"faq-search-footer",children:[n.jsxs("p",{className:"faq-search-count",children:[m.reduce((v,g)=>v+g.items.length,0)," questions available"]}),n.jsxs("button",{onClick:x,className:"faq-expand-btn",children:[n.jsx(ty,{}),i?"Collapse All":"Expand All"]})]})]}),n.jsxs("div",{className:"faq-filters",children:[n.jsxs("button",{onClick:()=>l("all"),className:`faq-filter-btn ${o==="all"?"active":""}`,children:[n.jsx(Jb,{}),"All Categories"]}),h.map(v=>n.jsxs("button",{onClick:()=>l(v.title),className:`faq-filter-btn ${o===v.title?"active":""}`,children:[n.jsx("span",{children:v.icon}),v.title]},v.title))]}),n.jsxs("div",{className:"faq-feature-grid",children:[n.jsxs("div",{className:"faq-feature-card",children:[n.jsxs("div",{className:"faq-feature-header",children:[n.jsx(iy,{className:"faq-feature-icon"}),n.jsx("h3",{className:"faq-feature-title",children:"Popular Questions"})]}),n.jsx("div",{className:"faq-feature-list",children:u.map((v,g)=>n.jsxs("button",{onClick:()=>t(v),className:"faq-feature-item",children:[n.jsxs("span",{className:"faq-feature-number",children:["#",g+1]}),n.jsx("span",{className:"faq-feature-text",children:v})]},g))})]}),n.jsxs("div",{className:"faq-feature-card",children:[n.jsxs("div",{className:"faq-feature-header",children:[n.jsx(Pp,{className:"faq-feature-icon"}),n.jsx("h3",{className:"faq-feature-title",children:"Quick Navigation"})]}),n.jsx("div",{className:"faq-quick-nav",children:h.map(v=>n.jsxs("button",{onClick:()=>w(v.title),className:"faq-nav-item",children:[n.jsxs("div",{className:"faq-nav-item-header",children:[n.jsx("span",{className:"faq-nav-emoji",children:v.icon}),n.jsxs("span",{className:"faq-nav-count",children:[v.items.length," Q&A"]})]}),n.jsx("span",{className:"faq-nav-title",children:v.title})]},v.title))})]})]}),n.jsx("div",{className:"faq-sections",children:m.length>0?m.map((v,g)=>n.jsxs("div",{id:`section-${v.title.replace(/\s+/g,"-").toLowerCase()}`,className:"faq-section",children:[n.jsxs("div",{className:"faq-section-header",children:[n.jsx("div",{className:"faq-section-icon-wrapper",children:v.icon}),n.jsxs("div",{children:[n.jsx("h2",{className:"faq-section-title",children:v.title}),n.jsxs("p",{className:"faq-section-count",children:[v.items.length," questions"]})]})]}),n.jsx("div",{className:"faq-items",children:v.items.map((f,j)=>{const k=`${g}-${j}`,C=r.has(k);return n.jsxs("div",{className:"faq-item",children:[n.jsxs("button",{onClick:()=>p(g,j),className:"faq-question-btn",children:[n.jsx("h3",{className:"faq-question-text",children:f.question}),n.jsx("div",{className:`faq-chevron-wrapper ${C?"expanded":""}`,children:n.jsx(Zb,{className:"faq-chevron"})})]}),n.jsx("div",{className:`faq-answer-wrapper ${C?"expanded":""}`,children:n.jsx("div",{className:"faq-answer",children:f.answer})})]},j)})})]},g)):n.jsxs("div",{className:"faq-no-results",children:[n.jsx(Tp,{className:"faq-no-results-icon"}),n.jsx("h3",{className:"faq-no-results-title",children:"No results found"}),n.jsxs("p",{className:"faq-no-results-text",children:["Try adjusting your search terms or"," ",n.jsx("button",{onClick:()=>{t(""),l("all")},className:"faq-no-results-btn",children:"clear filters"}),"."]})]})}),n.jsxs("div",{className:"faq-contact-section",children:[n.jsx("h2",{className:"faq-contact-title",children:"Still Need Help?"}),n.jsx("p",{className:"faq-contact-text",children:"If you couldn't find the answer to your question, our support team is here to assist you. We typically respond within 24 hours with detailed solutions."}),n.jsxs("div",{className:"faq-contact-buttons",children:[n.jsxs(Y,{to:"/contact",className:"faq-btn-primary",children:[n.jsx(Pp,{}),"Contact Support"]}),n.jsxs(Y,{to:"/about",className:"faq-btn-secondary",children:[n.jsx(Rp,{}),"About Us"]})]})]}),n.jsxs("div",{className:"faq-docs-section",children:[n.jsxs("div",{className:"faq-docs-header",children:[n.jsx("div",{className:"faq-docs-icon-wrapper",children:n.jsx(Vb,{className:"faq-docs-icon"})}),n.jsxs("div",{children:[n.jsx("h3",{className:"faq-docs-title",children:"Technical Documentation"}),n.jsx("p",{className:"faq-docs-subtitle",children:"Comprehensive guides for developers covering implementation details and system architecture."})]})]}),n.jsx("div",{className:"faq-docs-grid",children:[{name:"🚀 Quick Start Guide",url:"/docs/QUICK_START.md",desc:"Get started in minutes"},{name:"🔐 Authentication Guide",url:"/docs/AUTHENTICATION_IMPLEMENTATION.md",desc:"User management & security"},{name:"📦 Order Status System",url:"/docs/ORDER_STATUS_TECHNICAL_DOCS.md",desc:"Order lifecycle management"},{name:"📄 Invoice Feature",url:"/docs/INVOICE_FEATURE_COMPLETE.md",desc:"PDF generation & billing"},{name:"📸 Multiple Images Guide",url:"/docs/MULTIPLE_IMAGES_FEATURE.md",desc:"Product image handling"},{name:"💰 Currency Configuration",url:"/docs/CURRENCY_CHANGE.md",desc:"Multi-currency support"},{name:"👑 Admin Panel Fixes",url:"/docs/ADMIN_PANEL_FIXES.md",desc:"Admin interface updates"},{name:"🏦 Bank Transfer Payments",url:"/docs/BANK_TRANSFER_UPGRADE.md",desc:"Payment processing"},{name:"🖼️ Image Upload System",url:"/docs/IMAGE_UPLOAD_FIX.md",desc:"File upload & storage"}].map((v,g)=>n.jsxs("a",{href:v.url,target:"_blank",rel:"noopener noreferrer",className:"faq-doc-card",children:[n.jsxs("div",{className:"faq-doc-card-header",children:[n.jsx("span",{className:"faq-doc-emoji",children:v.name.split(" ")[0]}),n.jsx(Qb,{className:"faq-doc-external-icon"})]}),n.jsx("div",{className:"faq-doc-name",children:v.name.substring(v.name.indexOf(" ")+1)}),n.jsx("div",{className:"faq-doc-desc",children:v.desc})]},g))}),n.jsxs("div",{className:"faq-footer-stats",children:[n.jsxs("div",{className:"faq-footer-stat",children:[n.jsx("div",{className:"faq-footer-stat-value",children:"9"}),n.jsx("div",{className:"faq-footer-stat-label",children:"Documentation"}),n.jsx("div",{className:"faq-footer-stat-desc",children:"Technical guides"})]}),n.jsxs("div",{className:"faq-footer-stat",children:[n.jsx("div",{className:"faq-footer-stat-value",children:"7"}),n.jsx("div",{className:"faq-footer-stat-label",children:"Categories"}),n.jsx("div",{className:"faq-footer-stat-desc",children:"Organized topics"})]}),n.jsxs("div",{className:"faq-footer-stat",children:[n.jsx("div",{className:"faq-footer-stat-value",children:h.reduce((v,g)=>v+g.items.length,0)}),n.jsx("div",{className:"faq-footer-stat-label",children:"Q&A Total"}),n.jsx("div",{className:"faq-footer-stat-desc",children:"Common questions"})]}),n.jsxs("div",{className:"faq-footer-stat",children:[n.jsx("div",{className:"faq-footer-stat-value",children:"24/7"}),n.jsx("div",{className:"faq-footer-stat-label",children:"Support"}),n.jsx("div",{className:"faq-footer-stat-desc",children:"Always available"})]})]})]})]})]})};function oy(){const[e,t]=b.useState([]),[r,a]=b.useState(!1),[i,s]=b.useState(null),[o]=x1(),l=o.get("q")||"",{add:c}=Zn();b.useEffect(()=>{if(!l.trim()){t([]);return}let p=!1;async function x(){var m;a(!0),s(null);try{const y=await Se.get("/api/v1/products");if(p)return;const w=((m=y.data)==null?void 0:m.items)||[];t(w)}catch{p||(s("Failed to load products"),t([]))}finally{p||a(!1)}}return x(),()=>{p=!0}},[l]);const d=b.useMemo(()=>{if(!l.trim())return[];const p=l.toLowerCase();return e.filter(x=>x.name.toLowerCase().includes(p)||x.slug.toLowerCase().includes(p)||(x.category||"").toLowerCase().includes(p))},[e,l]),u=b.useMemo(()=>{if(!l.trim())return[];const p=l.toLowerCase();return[{id:"faq",name:"Frequently Asked Questions",url:"/faq",type:"FAQ Page"},{id:"about",name:"About Us",url:"/about",type:"About Page"},{id:"contact",name:"Contact Support",url:"/contact",type:"Contact Page"},{id:"home",name:"Home Page",url:"/",type:"Home Page"},{id:"shop",name:"Shop",url:"/shop",type:"Shop Page"}].filter(m=>m.name.toLowerCase().includes(p)||m.type.toLowerCase().includes(p))},[l]),h=(p,x)=>{const y=x.currentTarget.closest("div"),w=y==null?void 0:y.querySelector("img");w&&Ls(w),c({productId:p.id,slug:p.slug,name:p.name,price:p.price,image:p.images[0]})};return l.trim()?n.jsxs("div",{className:"container",style:{padding:"2rem"},children:[n.jsxs("div",{style:{marginBottom:"2rem"},children:[n.jsx("h1",{children:"Search Results"}),n.jsxs("p",{children:["Showing results for: ",n.jsxs("strong",{children:['"',l,'"']})]}),n.jsxs("p",{children:[d.length," product",d.length!==1?"s":""," found"]})]}),r&&n.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:n.jsx("p",{children:"Loading products..."})}),i&&n.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"red"},children:n.jsx("p",{children:i})}),!r&&!i&&n.jsxs(n.Fragment,{children:[d.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Products (",d.length,")"]}),n.jsx("div",{className:"grid",children:d.map(p=>n.jsxs("div",{className:"card",children:[n.jsx(Y,{to:`/product/${p.slug}`,className:"card-img",children:n.jsx("img",{src:p.images[0]||"/placeholder.jpg",alt:p.name})}),n.jsxs("div",{className:"card-body",children:[n.jsx("span",{className:"tag",children:p.category||"General"}),n.jsxs("span",{className:"price",children:["LKR ",Number(p.price).toFixed(2)]}),n.jsx(Y,{to:`/product/${p.slug}`,className:"card-title",children:p.name}),n.jsx("div",{className:"card-actions",children:n.jsx("button",{className:"btn btn-primary",onClick:x=>h(p,x),children:"Add to Cart"})})]})]},p.id))})]}),u.length>0&&n.jsxs(n.Fragment,{children:[d.length>0&&n.jsx("hr",{style:{margin:"2rem 0",border:"none",borderTop:"1px solid var(--line)"}}),n.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Pages (",u.length,")"]}),n.jsx("div",{style:{display:"grid",gap:"1rem"},children:u.map(p=>n.jsx(Y,{to:p.url,style:{display:"block",padding:"1rem",background:"var(--surface)",border:"1px solid var(--line)",borderRadius:"8px",textDecoration:"none",color:"var(--text)",transition:"all 0.2s ease"},onMouseEnter:x=>x.currentTarget.style.background="var(--ghost)",onMouseLeave:x=>x.currentTarget.style.background="var(--surface)",children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[n.jsx("span",{style:{fontSize:"1.1rem",fontWeight:"500"},children:p.name}),n.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)",padding:"2px 8px",background:"var(--surface-alt)",borderRadius:"12px"},children:p.type})]})},p.id))})]})]}),!r&&!i&&d.length===0&&u.length===0&&l.trim()&&n.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[n.jsxs("p",{children:['No results found for "',l,'"']}),n.jsxs("p",{children:["Try searching for something else or ",n.jsx(Y,{to:"/shop",children:"browse all products"})]})]})]}):n.jsxs("div",{className:"container",style:{padding:"2rem",textAlign:"center"},children:[n.jsx("h1",{children:"Search"}),n.jsx("p",{children:"Enter a search term to find products across our store."})]})}function ly(){const[e,t]=b.useState([]),r=b.useRef({});return b.useEffect(()=>{function a(i){var d,u;const s=i,o=crypto.randomUUID(),l=Date.now()+(((d=s.detail)==null?void 0:d.duration)??2200);t(h=>{var p,x;return[...h,{id:o,message:((p=s.detail)==null?void 0:p.message)??"",type:((x=s.detail)==null?void 0:x.type)??"success",ttl:l}]});const c=((u=s.detail)==null?void 0:u.duration)??2200;r.current[o]=window.setTimeout(()=>{t(h=>h.filter(p=>p.id!==o)),delete r.current[o]},c)}return window.addEventListener("app:toast",a),()=>{window.removeEventListener("app:toast",a),Object.values(r.current).forEach(i=>window.clearTimeout(i))}},[]),n.jsxs("div",{style:{position:"fixed",bottom:20,right:20,zIndex:2e3,display:"flex",flexDirection:"column",gap:8},"aria-live":"polite","aria-atomic":"true",children:[e.map(a=>n.jsx("div",{role:"status",style:{minWidth:220,maxWidth:360,padding:"10px 14px",borderRadius:10,color:"white",background:a.type==="success"?"linear-gradient(180deg, #22c55e, #16a34a)":a.type==="error"?"linear-gradient(180deg, #ef4444, #b91c1c)":"linear-gradient(180deg, #3b82f6, #1d4ed8)",boxShadow:"0 10px 24px rgba(0,0,0,0.35)",transform:"translateY(0)",transition:"opacity .2s, transform .2s",fontWeight:600},children:a.message},a.id)),n.jsx("style",{children:`
        @media (max-width: 600px) {
          div[aria-live='polite']{ left: 12px; right: 12px; top: auto; bottom: 20px; align-items: center; }
        }
      `})]})}const cy="modulepreload",dy=function(e){return"/"+e},Mp={},Ap=function(t,r,a){let i=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(r.map(c=>{if(c=dy(c),c in Mp)return;Mp[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":cy,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((p,x)=>{h.addEventListener("load",p),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};var uy=Object.create,J1=Object.defineProperty,py=Object.getOwnPropertyDescriptor,ef=Object.getOwnPropertyNames,hy=Object.getPrototypeOf,fy=Object.prototype.hasOwnProperty,_d=(e,t)=>function(){return t||(0,e[ef(e)[0]])((t={exports:{}}).exports,t),t.exports},my=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ef(t))!fy.call(e,i)&&i!==r&&J1(e,i,{get:()=>t[i],enumerable:!(a=py(t,i))||a.enumerable});return e},vo=(e,t,r)=>(r=e!=null?uy(hy(e)):{},my(!e||!e.__esModule?J1(r,"default",{value:e,enumerable:!0}):r,e)),gy=_d({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(e,t){function r(a){for(var i=new Array(a),s=0;s<a;++s)i[s]=s;return i}t.exports=r}}),xy=_d({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(e,t){t.exports=function(i){return i!=null&&(r(i)||a(i)||!!i._isBuffer)};function r(i){return!!i.constructor&&typeof i.constructor.isBuffer=="function"&&i.constructor.isBuffer(i)}function a(i){return typeof i.readFloatLE=="function"&&typeof i.slice=="function"&&r(i.slice(0,0))}}}),bo=_d({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(e,t){var r=gy(),a=xy(),i=typeof Float64Array<"u";function s(h,p){return h[0]-p[0]}function o(){var h=this.stride,p=new Array(h.length),x;for(x=0;x<p.length;++x)p[x]=[Math.abs(h[x]),x];p.sort(s);var m=new Array(p.length);for(x=0;x<m.length;++x)m[x]=p[x][1];return m}function l(h,p){var x=["View",p,"d",h].join("");p<0&&(x="View_Nil"+h);var m=h==="generic";if(p===-1){var y="function "+x+"(a){this.data=a;};var proto="+x+".prototype;proto.dtype='"+h+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+x+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+x+"(a){return new "+x+"(a);}",A=new Function(y);return A()}else if(p===0){var y="function "+x+"(a,d) {this.data = a;this.offset = d};var proto="+x+".prototype;proto.dtype='"+h+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+x+"_copy() {return new "+x+"(this.data,this.offset)};proto.pick=function "+x+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+x+"_get(){return "+(m?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+x+"_set(v){return "+(m?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+x+"(a,b,c,d){return new "+x+"(a,d)}",A=new Function("TrivialArray",y);return A(d[h][0])}var y=["'use strict'"],w=r(p),v=w.map(function(P){return"i"+P}),g="this.offset+"+w.map(function(P){return"this.stride["+P+"]*i"+P}).join("+"),f=w.map(function(P){return"b"+P}).join(","),j=w.map(function(P){return"c"+P}).join(",");y.push("function "+x+"(a,"+f+","+j+",d){this.data=a","this.shape=["+f+"]","this.stride=["+j+"]","this.offset=d|0}","var proto="+x+".prototype","proto.dtype='"+h+"'","proto.dimension="+p),y.push("Object.defineProperty(proto,'size',{get:function "+x+"_size(){return "+w.map(function(P){return"this.shape["+P+"]"}).join("*"),"}})"),p===1?y.push("proto.order=[0]"):(y.push("Object.defineProperty(proto,'order',{get:"),p<4?(y.push("function "+x+"_order(){"),p===2?y.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):p===3&&y.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):y.push("ORDER})")),y.push("proto.set=function "+x+"_set("+v.join(",")+",v){"),m?y.push("return this.data.set("+g+",v)}"):y.push("return this.data["+g+"]=v}"),y.push("proto.get=function "+x+"_get("+v.join(",")+"){"),m?y.push("return this.data.get("+g+")}"):y.push("return this.data["+g+"]}"),y.push("proto.index=function "+x+"_index(",v.join(),"){return "+g+"}"),y.push("proto.hi=function "+x+"_hi("+v.join(",")+"){return new "+x+"(this.data,"+w.map(function(P){return["(typeof i",P,"!=='number'||i",P,"<0)?this.shape[",P,"]:i",P,"|0"].join("")}).join(",")+","+w.map(function(P){return"this.stride["+P+"]"}).join(",")+",this.offset)}");var k=w.map(function(P){return"a"+P+"=this.shape["+P+"]"}),C=w.map(function(P){return"c"+P+"=this.stride["+P+"]"});y.push("proto.lo=function "+x+"_lo("+v.join(",")+"){var b=this.offset,d=0,"+k.join(",")+","+C.join(","));for(var N=0;N<p;++N)y.push("if(typeof i"+N+"==='number'&&i"+N+">=0){d=i"+N+"|0;b+=c"+N+"*d;a"+N+"-=d}");y.push("return new "+x+"(this.data,"+w.map(function(P){return"a"+P}).join(",")+","+w.map(function(P){return"c"+P}).join(",")+",b)}"),y.push("proto.step=function "+x+"_step("+v.join(",")+"){var "+w.map(function(P){return"a"+P+"=this.shape["+P+"]"}).join(",")+","+w.map(function(P){return"b"+P+"=this.stride["+P+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var N=0;N<p;++N)y.push("if(typeof i"+N+"==='number'){d=i"+N+"|0;if(d<0){c+=b"+N+"*(a"+N+"-1);a"+N+"=ceil(-a"+N+"/d)}else{a"+N+"=ceil(a"+N+"/d)}b"+N+"*=d}");y.push("return new "+x+"(this.data,"+w.map(function(P){return"a"+P}).join(",")+","+w.map(function(P){return"b"+P}).join(",")+",c)}");for(var z=new Array(p),W=new Array(p),N=0;N<p;++N)z[N]="a[i"+N+"]",W[N]="b[i"+N+"]";y.push("proto.transpose=function "+x+"_transpose("+v+"){"+v.map(function(P,Z){return P+"=("+P+"===undefined?"+Z+":"+P+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+x+"(this.data,"+z.join(",")+","+W.join(",")+",this.offset)}"),y.push("proto.pick=function "+x+"_pick("+v+"){var a=[],b=[],c=this.offset");for(var N=0;N<p;++N)y.push("if(typeof i"+N+"==='number'&&i"+N+">=0){c=(c+this.stride["+N+"]*i"+N+")|0}else{a.push(this.shape["+N+"]);b.push(this.stride["+N+"])}");y.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),y.push("return function construct_"+x+"(data,shape,stride,offset){return new "+x+"(data,"+w.map(function(P){return"shape["+P+"]"}).join(",")+","+w.map(function(P){return"stride["+P+"]"}).join(",")+",offset)}");var A=new Function("CTOR_LIST","ORDER",y.join(`
`));return A(d[h],o)}function c(h){if(a(h))return"buffer";if(i)switch(Object.prototype.toString.call(h)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(h)?"array":"generic"}var d={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function u(h,p,x,m){if(h===void 0){var j=d.array[0];return j([])}else typeof h=="number"&&(h=[h]);p===void 0&&(p=[h.length]);var y=p.length;if(x===void 0){x=new Array(y);for(var w=y-1,v=1;w>=0;--w)x[w]=v,v*=p[w]}if(m===void 0){m=0;for(var w=0;w<y;++w)x[w]<0&&(m-=(p[w]-1)*x[w])}for(var g=c(h),f=d[g];f.length<=y+1;)f.push(l(g,f.length-1));var j=f[y+1];return j(h,p,x,m)}t.exports=u}}),vy=typeof global=="object"&&global&&global.Object===Object&&global,by=vy,yy=typeof self=="object"&&self&&self.Object===Object&&self,wy=by||yy||Function("return this")(),zd=wy,jy=zd.Symbol,Is=jy,tf=Object.prototype,ky=tf.hasOwnProperty,Ny=tf.toString,ca=Is?Is.toStringTag:void 0;function Sy(e){var t=ky.call(e,ca),r=e[ca];try{e[ca]=void 0;var a=!0}catch{}var i=Ny.call(e);return a&&(t?e[ca]=r:delete e[ca]),i}var Cy=Sy,_y=Object.prototype,zy=_y.toString;function Ey(e){return zy.call(e)}var Ry=Ey,Py="[object Null]",Ty="[object Undefined]",Op=Is?Is.toStringTag:void 0;function My(e){return e==null?e===void 0?Ty:Py:Op&&Op in Object(e)?Cy(e):Ry(e)}var Ay=My;function Oy(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var rf=Oy,Ly="[object AsyncFunction]",Iy="[object Function]",Fy="[object GeneratorFunction]",By="[object Proxy]";function Dy(e){if(!rf(e))return!1;var t=Ay(e);return t==Iy||t==Fy||t==Ly||t==By}var Uy=Dy,$y=zd["__core-js_shared__"],el=$y,Lp=function(){var e=/[^.]+$/.exec(el&&el.keys&&el.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Hy(e){return!!Lp&&Lp in e}var Wy=Hy,qy=Function.prototype,Vy=qy.toString;function Yy(e){if(e!=null){try{return Vy.call(e)}catch{}try{return e+""}catch{}}return""}var Zy=Yy,Gy=/[\\^$.*+?()[\]{}|]/g,Ky=/^\[object .+?Constructor\]$/,Qy=Function.prototype,Xy=Object.prototype,Jy=Qy.toString,e4=Xy.hasOwnProperty,t4=RegExp("^"+Jy.call(e4).replace(Gy,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function r4(e){if(!rf(e)||Wy(e))return!1;var t=Uy(e)?t4:Ky;return t.test(Zy(e))}var n4=r4;function a4(e,t){return e==null?void 0:e[t]}var i4=a4;function s4(e,t){var r=i4(e,t);return n4(r)?r:void 0}var nf=s4,o4=nf(Object,"create"),Va=o4;function l4(){this.__data__=Va?Va(null):{},this.size=0}var c4=l4;function d4(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var u4=d4,p4="__lodash_hash_undefined__",h4=Object.prototype,f4=h4.hasOwnProperty;function m4(e){var t=this.__data__;if(Va){var r=t[e];return r===p4?void 0:r}return f4.call(t,e)?t[e]:void 0}var g4=m4,x4=Object.prototype,v4=x4.hasOwnProperty;function b4(e){var t=this.__data__;return Va?t[e]!==void 0:v4.call(t,e)}var y4=b4,w4="__lodash_hash_undefined__";function j4(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Va&&t===void 0?w4:t,this}var k4=j4;function Gn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}Gn.prototype.clear=c4;Gn.prototype.delete=u4;Gn.prototype.get=g4;Gn.prototype.has=y4;Gn.prototype.set=k4;var Ip=Gn;function N4(){this.__data__=[],this.size=0}var S4=N4;function C4(e,t){return e===t||e!==e&&t!==t}var _4=C4;function z4(e,t){for(var r=e.length;r--;)if(_4(e[r][0],t))return r;return-1}var yo=z4,E4=Array.prototype,R4=E4.splice;function P4(e){var t=this.__data__,r=yo(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():R4.call(t,r,1),--this.size,!0}var T4=P4;function M4(e){var t=this.__data__,r=yo(t,e);return r<0?void 0:t[r][1]}var A4=M4;function O4(e){return yo(this.__data__,e)>-1}var L4=O4;function I4(e,t){var r=this.__data__,a=yo(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var F4=I4;function Kn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}Kn.prototype.clear=S4;Kn.prototype.delete=T4;Kn.prototype.get=A4;Kn.prototype.has=L4;Kn.prototype.set=F4;var B4=Kn,D4=nf(zd,"Map"),U4=D4;function $4(){this.size=0,this.__data__={hash:new Ip,map:new(U4||B4),string:new Ip}}var H4=$4;function W4(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var q4=W4;function V4(e,t){var r=e.__data__;return q4(t)?r[typeof t=="string"?"string":"hash"]:r.map}var wo=V4;function Y4(e){var t=wo(this,e).delete(e);return this.size-=t?1:0,t}var Z4=Y4;function G4(e){return wo(this,e).get(e)}var K4=G4;function Q4(e){return wo(this,e).has(e)}var X4=Q4;function J4(e,t){var r=wo(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var ew=J4;function Qn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}Qn.prototype.clear=H4;Qn.prototype.delete=Z4;Qn.prototype.get=K4;Qn.prototype.has=X4;Qn.prototype.set=ew;var af=Qn,tw="Expected a function";function Ed(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(tw);var r=function(){var a=arguments,i=t?t.apply(this,a):a[0],s=r.cache;if(s.has(i))return s.get(i);var o=e.apply(this,a);return r.cache=s.set(i,o)||s,o};return r.cache=new(Ed.Cache||af),r}Ed.Cache=af;var rw=Ed,Rd=vo(bo()),sf=class vc{constructor(t,r){this.type="application/octet-stream",this.params={},this.type=t,this.params=r}toString(){const t=[];for(const r in this.params){const a=this.params[r];t.push(`${r}=${a}`)}return[this.type,...t].join(";")}static create(t,r){return new vc(t,r)}isIdentical(t){return this.type===t.type&&this.params===t.params}isEqual(t){return this.type===t.type}static fromString(t){const[r,...a]=t.split(";"),i={};for(const s of a){const[o,l]=s.split("=");i[o.trim()]=l.trim()}return new vc(r,i)}},tl=vo(bo());async function nw(e){const t=sf.fromString(e.type);switch(t.type){case"image/x-alpha8":{const r=parseInt(t.params.width),a=parseInt(t.params.height);return(0,tl.default)(new Uint8Array(await e.arrayBuffer()),[a,r,1])}case"image/x-rgba8":{const r=parseInt(t.params.width),a=parseInt(t.params.height);return(0,tl.default)(new Uint8Array(await e.arrayBuffer()),[a,r,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const r=await createImageBitmap(e),a=ow(r);return(0,tl.default)(new Uint8Array(a.data),[a.height,a.width,4])}default:throw new Error(`Invalid format: ${t.type} with params: ${t.params}`)}}async function aw(e,t=.8,r="image/png"){const[a,i,s]=e.shape;switch(r){case"image/x-alpha8":case"image/x-rgba8":{const c=sf.create(r,{width:i.toString(),height:a.toString()});return new Blob([e.data],{type:c.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const c=new ImageData(new Uint8ClampedArray(e.data),i,a);var o=of(c.width,c.height),l=o.getContext("2d");return l.putImageData(c,0,0),o.convertToBlob({quality:t,type:r})}default:throw new Error(`Invalid format: ${r}`)}}function iw(e){return new RegExp("^(?:[a-z+]+:)?//","i").test(e)}function sw(e,t){return iw(e)?e:new URL(e,t).href}function ow(e){var t=of(e.width,e.height),r=t.getContext("2d");return r.drawImage(e,0,0),r.getImageData(0,0,t.width,t.height)}function lw(e){if(typeof Uint8Array<"u")return new Uint8Array(e);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(e);if(typeof Uint16Array<"u")return new Uint16Array(e);if(typeof Uint32Array<"u")return new Uint32Array(e);if(typeof Float32Array<"u")return new Float32Array(e);if(typeof Float64Array<"u")return new Float64Array(e);throw new Error("TypedArray not supported")}function Fp(e,t,r,a=!1){const[i,s,o]=e.shape;let l=s/t,c=i/r;a&&(l=c=Math.max(l,c)>1?Math.max(l,c):Math.min(l,c));const d=(0,Rd.default)(lw(o*t*r),[r,t,o]);for(let u=0;u<r;u++)for(let h=0;h<t;h++){const p=h*l,x=u*c,m=Math.max(Math.floor(p),0),y=Math.min(Math.ceil(p),s-1),w=Math.max(Math.floor(x),0),v=Math.min(Math.ceil(x),i-1),g=p-m,f=x-w;for(let j=0;j<o;j++){const k=e.get(w,m,j),C=e.get(w,y,j),N=e.get(v,m,j),z=e.get(v,y,j),W=(1-g)*(1-f)*k+g*(1-f)*C+(1-g)*f*N+g*f*z;d.set(u,h,j,W)}}return d}function cw(e,t=[128,128,128],r=[256,256,256]){var a=e.data;const[i,s,o]=e.shape,l=i*s,c=new Float32Array(3*l);for(let d=0,u=0;d<a.length;d+=4,u+=1)c[u]=(a[d]-t[0])/r[0],c[u+l]=(a[d+1]-t[1])/r[1],c[u+l+l]=(a[d+2]-t[2])/r[2];return(0,Rd.default)(c,[1,3,i,s])}async function dw(e,t){return typeof e=="string"&&(e=sw(e,t.publicPath),e=new URL(e)),e instanceof URL&&(e=await(await fetch(e,{})).blob()),(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e=new Blob([e])),e instanceof Blob&&(e=await nw(e)),e}function uw(e){const t=new Uint8Array(e.data.length);for(let r=0;r<e.data.length;r++)t[r]=e.data[r]*255;return(0,Rd.default)(t,e.shape)}function of(e,t){let r;if(typeof OffscreenCanvas<"u"?r=new OffscreenCanvas(e,t):r=document.createElement("canvas"),!r)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return r}var pw=vo(bo()),lf=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,hw=()=>navigator.hardwareConcurrency??4;async function Bp(e,t){return URL.createObjectURL(await cf(e,t))}async function cf(e,t){const r=new URL("resources.json",t.publicPath),a=await fetch(r);if(!a.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const s=(await a.json())[e];if(!s)throw new Error(`Resource ${e} not found. Ensure that the config.publicPath is configured correctly.`);const o=s.chunks;let l=0;const c=o.map(async h=>{const p=h.offsets[1]-h.offsets[0],x=t.publicPath?new URL(h.name,t.publicPath).toString():h.name,y=await(await fetch(x,t.fetchArgs)).blob();if(p!==y.size)throw new Error(`Failed to fetch ${e} with size ${p} but got ${y.size}`);return t.progress&&(l+=p,t.progress(`fetch:${e}`,l,s.size)),y}),d=await Promise.all(c),u=new Blob(d,{type:s.mime});if(u.size!==s.size)throw new Error(`Failed to fetch ${e} with size ${s.size} but got ${u.size}`);return u}var da=null,df=async e=>(da!==null||(e?da=(await Ap(async()=>{const{default:t}=await import("./ort.webgpu.bundle.min-BjDy62bb.js");return{default:t}},[])).default:da=(await Ap(async()=>{const{default:t}=await import("./ort.bundle.min-CmHfnmOO.js");return{default:t}},[])).default),da);async function fw(e,t){const r=t.device==="gpu"&&await lf(),a=r&&t.proxyToWorker,i=[r?"webgpu":"wasm"],s=await df(r);t.debug&&(console.debug("	Using WebGPU:",r),console.debug("	Proxy to Worker:",a),s.env.debug=!0,s.env.logLevel="verbose"),s.env.wasm.numThreads=hw(),s.env.wasm.proxy=a;const o=r?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",l=await Bp(`${o}.wasm`,t),c=await Bp(`${o}.mjs`,t);s.env.wasm.wasmPaths={mjs:c,wasm:l},t.debug&&console.debug("ort.env.wasm:",s.env.wasm);const d={executionProviders:i,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await s.InferenceSession.create(e,d).catch(h=>{throw new Error(`Failed to create session: "${h}". Please check if the publicPath is set correctly.`)})}async function mw(e,t,r,a){const i=a.device==="gpu"&&await lf(),s=await df(i),o={};for(const[d,u]of t)o[d]=new s.Tensor("float32",new Float32Array(u.data),u.shape);const l=await e.run(o,{}),c=[];for(const d of r){const u=l[d],h=u.dims,p=u.data,x=(0,pw.default)(p,h);c.push(x)}return c}var ue;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function r(i){throw new Error}e.assertNever=r,e.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},e.getValidEnumValues=i=>{const s=e.objectKeys(i).filter(l=>typeof i[i[l]]!="number"),o={};for(const l of s)o[l]=i[l];return e.objectValues(o)},e.objectValues=i=>e.objectKeys(i).map(function(s){return i[s]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},e.find=(i,s)=>{for(const o of i)if(s(o))return o},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function a(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}e.joinValues=a,e.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(ue||(ue={}));var bc;(function(e){e.mergeShapes=(t,r)=>({...t,...r})})(bc||(bc={}));var H=ue.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Xt=e=>{switch(typeof e){case"undefined":return H.undefined;case"string":return H.string;case"number":return isNaN(e)?H.nan:H.number;case"boolean":return H.boolean;case"function":return H.function;case"bigint":return H.bigint;case"symbol":return H.symbol;case"object":return Array.isArray(e)?H.array:e===null?H.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?H.promise:typeof Map<"u"&&e instanceof Map?H.map:typeof Set<"u"&&e instanceof Set?H.set:typeof Date<"u"&&e instanceof Date?H.date:H.object;default:return H.unknown}},I=ue.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),gw=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),At=class uf extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=a=>{this.issues=[...this.issues,a]},this.addIssues=(a=[])=>{this.issues=[...this.issues,...a]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=t}format(t){const r=t||function(s){return s.message},a={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)a._errors.push(r(o));else{let l=a,c=0;for(;c<o.path.length;){const d=o.path[c];c===o.path.length-1?(l[d]=l[d]||{_errors:[]},l[d]._errors.push(r(o))):l[d]=l[d]||{_errors:[]},l=l[d],c++}}};return i(this),a}static assert(t){if(!(t instanceof uf))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ue.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=r=>r.message){const r={},a=[];for(const i of this.issues)i.path.length>0?(r[i.path[0]]=r[i.path[0]]||[],r[i.path[0]].push(t(i))):a.push(t(i));return{formErrors:a,fieldErrors:r}}get formErrors(){return this.flatten()}};At.create=e=>new At(e);var In=(e,t)=>{let r;switch(e.code){case I.invalid_type:e.received===H.undefined?r="Required":r=`Expected ${e.expected}, received ${e.received}`;break;case I.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,ue.jsonStringifyReplacer)}`;break;case I.unrecognized_keys:r=`Unrecognized key(s) in object: ${ue.joinValues(e.keys,", ")}`;break;case I.invalid_union:r="Invalid input";break;case I.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${ue.joinValues(e.options)}`;break;case I.invalid_enum_value:r=`Invalid enum value. Expected ${ue.joinValues(e.options)}, received '${e.received}'`;break;case I.invalid_arguments:r="Invalid function arguments";break;case I.invalid_return_type:r="Invalid function return type";break;case I.invalid_date:r="Invalid date";break;case I.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:ue.assertNever(e.validation):e.validation!=="regex"?r=`Invalid ${e.validation}`:r="Invalid";break;case I.too_small:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:r="Invalid input";break;case I.too_big:e.type==="array"?r=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?r=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?r=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?r=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?r=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:r="Invalid input";break;case I.custom:r="Invalid input";break;case I.invalid_intersection_types:r="Intersection results could not be merged";break;case I.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case I.not_finite:r="Number must be finite";break;default:r=t.defaultError,ue.assertNever(e)}return{message:r}},pf=In;function xw(e){pf=e}function Fs(){return pf}var Bs=e=>{const{data:t,path:r,errorMaps:a,issueData:i}=e,s=[...r,...i.path||[]],o={...i,path:s};if(i.message!==void 0)return{...i,path:s,message:i.message};let l="";const c=a.filter(d=>!!d).slice().reverse();for(const d of c)l=d(o,{data:t,defaultError:l}).message;return{...i,path:s,message:l}},vw=[];function $(e,t){const r=Fs(),a=Bs({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,r,r===In?void 0:In].filter(i=>!!i)});e.common.issues.push(a)}var dt=class hf{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,r){const a=[];for(const i of r){if(i.status==="aborted")return ee;i.status==="dirty"&&t.dirty(),a.push(i.value)}return{status:t.value,value:a}}static async mergeObjectAsync(t,r){const a=[];for(const i of r){const s=await i.key,o=await i.value;a.push({key:s,value:o})}return hf.mergeObjectSync(t,a)}static mergeObjectSync(t,r){const a={};for(const i of r){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return ee;s.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),s.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(a[s.value]=o.value)}return{status:t.value,value:a}}},ee=Object.freeze({status:"aborted"}),yn=e=>({status:"dirty",value:e}),Je=e=>({status:"valid",value:e}),yc=e=>e.status==="aborted",wc=e=>e.status==="dirty",en=e=>e.status==="valid",Ya=e=>typeof Promise<"u"&&e instanceof Promise;function Ds(e,t,r,a){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function ff(e,t,r,a,i){if(typeof t=="function"?e!==t||!0:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,r),r}var G;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(G||(G={}));var ma,ga,Vt=class{constructor(e,t,r,a){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=a}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Dp=(e,t)=>{if(en(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new At(e.common.issues);return this._error=r,this._error}}};function ie(e){if(!e)return{};const{errorMap:t,invalid_type_error:r,required_error:a,description:i}=e;if(t&&(r||a))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(o,l)=>{var c,d;const{message:u}=e;return o.code==="invalid_enum_value"?{message:u??l.defaultError}:typeof l.data>"u"?{message:(c=u??a)!==null&&c!==void 0?c:l.defaultError}:o.code!=="invalid_type"?{message:l.defaultError}:{message:(d=u??r)!==null&&d!==void 0?d:l.defaultError}},description:i}}var oe=class{get description(){return this._def.description}_getType(e){return Xt(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Xt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new dt,ctx:{common:e.parent.common,data:e.data,parsedType:Xt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Ya(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const a={common:{issues:[],async:(r=t==null?void 0:t.async)!==null&&r!==void 0?r:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Xt(e)},i=this._parseSync({data:e,path:a.path,parent:a});return Dp(a,i)}"~validate"(e){var t,r;const a={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Xt(e)};if(!this["~standard"].async)try{const i=this._parseSync({data:e,path:[],parent:a});return en(i)?{value:i.value}:{issues:a.common.issues}}catch(i){!((r=(t=i==null?void 0:i.message)===null||t===void 0?void 0:t.toLowerCase())===null||r===void 0)&&r.includes("encountered")&&(this["~standard"].async=!0),a.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:a}).then(i=>en(i)?{value:i.value}:{issues:a.common.issues})}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Xt(e)},a=this._parse({data:e,path:r.path,parent:r}),i=await(Ya(a)?a:Promise.resolve(a));return Dp(r,i)}refine(e,t){const r=a=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(a):t;return this._refinement((a,i)=>{const s=e(a),o=()=>i.addIssue({code:I.custom,...r(a)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(o(),!1)):s?!0:(o(),!1)})}refinement(e,t){return this._refinement((r,a)=>e(r)?!0:(a.addIssue(typeof t=="function"?t(r,a):t),!1))}_refinement(e){return new Lt({schema:this,typeName:J.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return qt.create(this,this._def)}nullable(){return Tr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return tn.create(this)}promise(){return Dn.create(this,this._def)}or(e){return ei.create([this,e],this._def)}and(e){return ti.create(this,e,this._def)}transform(e){return new Lt({...ie(this._def),schema:this,typeName:J.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new ii({...ie(this._def),innerType:this,defaultValue:t,typeName:J.ZodDefault})}brand(){return new Pd({typeName:J.ZodBranded,type:this,...ie(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new si({...ie(this._def),innerType:this,catchValue:t,typeName:J.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Td.create(this,e)}readonly(){return oi.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},bw=/^c[^\s-]{8,}$/i,yw=/^[0-9a-z]+$/,ww=/^[0-9A-HJKMNP-TV-Z]{26}$/i,jw=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,kw=/^[a-z0-9_-]{21}$/i,Nw=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Sw=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Cw=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,_w="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",rl,zw=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ew=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Rw=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Pw=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Tw=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Mw=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,mf="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Aw=new RegExp(`^${mf}$`);function gf(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`),t}function Ow(e){return new RegExp(`^${gf(e)}$`)}function xf(e){let t=`${mf}T${gf(e)}`;const r=[];return r.push(e.local?"Z?":"Z"),e.offset&&r.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${r.join("|")})`,new RegExp(`^${t}$`)}function Lw(e,t){return!!((t==="v4"||!t)&&zw.test(e)||(t==="v6"||!t)&&Rw.test(e))}function Iw(e,t){if(!Nw.test(e))return!1;try{const[r]=e.split("."),a=r.replace(/-/g,"+").replace(/_/g,"/").padEnd(r.length+(4-r.length%4)%4,"="),i=JSON.parse(atob(a));return!(typeof i!="object"||i===null||!i.typ||!i.alg||t&&i.alg!==t)}catch{return!1}}function Fw(e,t){return!!((t==="v4"||!t)&&Ew.test(e)||(t==="v6"||!t)&&Pw.test(e))}var Fn=class xa extends oe{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==H.string){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_type,expected:H.string,received:s.parsedType}),ee}const a=new dt;let i;for(const s of this._def.checks)if(s.kind==="min")t.data.length<s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),a.dirty());else if(s.kind==="max")t.data.length>s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),a.dirty());else if(s.kind==="length"){const o=t.data.length>s.value,l=t.data.length<s.value;(o||l)&&(i=this._getOrReturnCtx(t,i),o?$(i,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):l&&$(i,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),a.dirty())}else if(s.kind==="email")Cw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"email",code:I.invalid_string,message:s.message}),a.dirty());else if(s.kind==="emoji")rl||(rl=new RegExp(_w,"u")),rl.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"emoji",code:I.invalid_string,message:s.message}),a.dirty());else if(s.kind==="uuid")jw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"uuid",code:I.invalid_string,message:s.message}),a.dirty());else if(s.kind==="nanoid")kw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"nanoid",code:I.invalid_string,message:s.message}),a.dirty());else if(s.kind==="cuid")bw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"cuid",code:I.invalid_string,message:s.message}),a.dirty());else if(s.kind==="cuid2")yw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"cuid2",code:I.invalid_string,message:s.message}),a.dirty());else if(s.kind==="ulid")ww.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"ulid",code:I.invalid_string,message:s.message}),a.dirty());else if(s.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),$(i,{validation:"url",code:I.invalid_string,message:s.message}),a.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"regex",code:I.invalid_string,message:s.message}),a.dirty())):s.kind==="trim"?t.data=t.data.trim():s.kind==="includes"?t.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),a.dirty()):s.kind==="toLowerCase"?t.data=t.data.toLowerCase():s.kind==="toUpperCase"?t.data=t.data.toUpperCase():s.kind==="startsWith"?t.data.startsWith(s.value)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:{startsWith:s.value},message:s.message}),a.dirty()):s.kind==="endsWith"?t.data.endsWith(s.value)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:{endsWith:s.value},message:s.message}),a.dirty()):s.kind==="datetime"?xf(s).test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:"datetime",message:s.message}),a.dirty()):s.kind==="date"?Aw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:"date",message:s.message}),a.dirty()):s.kind==="time"?Ow(s).test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{code:I.invalid_string,validation:"time",message:s.message}),a.dirty()):s.kind==="duration"?Sw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"duration",code:I.invalid_string,message:s.message}),a.dirty()):s.kind==="ip"?Lw(t.data,s.version)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"ip",code:I.invalid_string,message:s.message}),a.dirty()):s.kind==="jwt"?Iw(t.data,s.alg)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"jwt",code:I.invalid_string,message:s.message}),a.dirty()):s.kind==="cidr"?Fw(t.data,s.version)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"cidr",code:I.invalid_string,message:s.message}),a.dirty()):s.kind==="base64"?Tw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"base64",code:I.invalid_string,message:s.message}),a.dirty()):s.kind==="base64url"?Mw.test(t.data)||(i=this._getOrReturnCtx(t,i),$(i,{validation:"base64url",code:I.invalid_string,message:s.message}),a.dirty()):ue.assertNever(s);return{status:a.value,value:t.data}}_regex(t,r,a){return this.refinement(i=>t.test(i),{validation:r,code:I.invalid_string,...G.errToObj(a)})}_addCheck(t){return new xa({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...G.errToObj(t)})}url(t){return this._addCheck({kind:"url",...G.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...G.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...G.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...G.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...G.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...G.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...G.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...G.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...G.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...G.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...G.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...G.errToObj(t)})}datetime(t){var r,a;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(r=t==null?void 0:t.offset)!==null&&r!==void 0?r:!1,local:(a=t==null?void 0:t.local)!==null&&a!==void 0?a:!1,...G.errToObj(t==null?void 0:t.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,...G.errToObj(t==null?void 0:t.message)})}duration(t){return this._addCheck({kind:"duration",...G.errToObj(t)})}regex(t,r){return this._addCheck({kind:"regex",regex:t,...G.errToObj(r)})}includes(t,r){return this._addCheck({kind:"includes",value:t,position:r==null?void 0:r.position,...G.errToObj(r==null?void 0:r.message)})}startsWith(t,r){return this._addCheck({kind:"startsWith",value:t,...G.errToObj(r)})}endsWith(t,r){return this._addCheck({kind:"endsWith",value:t,...G.errToObj(r)})}min(t,r){return this._addCheck({kind:"min",value:t,...G.errToObj(r)})}max(t,r){return this._addCheck({kind:"max",value:t,...G.errToObj(r)})}length(t,r){return this._addCheck({kind:"length",value:t,...G.errToObj(r)})}nonempty(t){return this.min(1,G.errToObj(t))}trim(){return new xa({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new xa({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new xa({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxLength(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}};Fn.create=e=>{var t;return new Fn({checks:[],typeName:J.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...ie(e)})};function Bw(e,t){const r=(e.toString().split(".")[1]||"").length,a=(t.toString().split(".")[1]||"").length,i=r>a?r:a,s=parseInt(e.toFixed(i).replace(".","")),o=parseInt(t.toFixed(i).replace(".",""));return s%o/Math.pow(10,i)}var Za=class jc extends oe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==H.number){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_type,expected:H.number,received:s.parsedType}),ee}let a;const i=new dt;for(const s of this._def.checks)s.kind==="int"?ue.isInteger(t.data)||(a=this._getOrReturnCtx(t,a),$(a,{code:I.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(a=this._getOrReturnCtx(t,a),$(a,{code:I.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(a=this._getOrReturnCtx(t,a),$(a,{code:I.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?Bw(t.data,s.value)!==0&&(a=this._getOrReturnCtx(t,a),$(a,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(t.data)||(a=this._getOrReturnCtx(t,a),$(a,{code:I.not_finite,message:s.message}),i.dirty()):ue.assertNever(s);return{status:i.value,value:t.data}}gte(t,r){return this.setLimit("min",t,!0,G.toString(r))}gt(t,r){return this.setLimit("min",t,!1,G.toString(r))}lte(t,r){return this.setLimit("max",t,!0,G.toString(r))}lt(t,r){return this.setLimit("max",t,!1,G.toString(r))}setLimit(t,r,a,i){return new jc({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:a,message:G.toString(i)}]})}_addCheck(t){return new jc({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:G.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:G.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:G.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:G.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:G.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:G.toString(r)})}finite(t){return this._addCheck({kind:"finite",message:G.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:G.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:G.toString(t)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&ue.isInteger(t.value))}get isFinite(){let t=null,r=null;for(const a of this._def.checks){if(a.kind==="finite"||a.kind==="int"||a.kind==="multipleOf")return!0;a.kind==="min"?(r===null||a.value>r)&&(r=a.value):a.kind==="max"&&(t===null||a.value<t)&&(t=a.value)}return Number.isFinite(r)&&Number.isFinite(t)}};Za.create=e=>new Za({checks:[],typeName:J.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...ie(e)});var Ga=class kc extends oe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==H.bigint)return this._getInvalidInput(t);let a;const i=new dt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(a=this._getOrReturnCtx(t,a),$(a,{code:I.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(a=this._getOrReturnCtx(t,a),$(a,{code:I.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?t.data%s.value!==BigInt(0)&&(a=this._getOrReturnCtx(t,a),$(a,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):ue.assertNever(s);return{status:i.value,value:t.data}}_getInvalidInput(t){const r=this._getOrReturnCtx(t);return $(r,{code:I.invalid_type,expected:H.bigint,received:r.parsedType}),ee}gte(t,r){return this.setLimit("min",t,!0,G.toString(r))}gt(t,r){return this.setLimit("min",t,!1,G.toString(r))}lte(t,r){return this.setLimit("max",t,!0,G.toString(r))}lt(t,r){return this.setLimit("max",t,!1,G.toString(r))}setLimit(t,r,a,i){return new kc({...this._def,checks:[...this._def.checks,{kind:t,value:r,inclusive:a,message:G.toString(i)}]})}_addCheck(t){return new kc({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:G.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:G.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:G.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:G.toString(t)})}multipleOf(t,r){return this._addCheck({kind:"multipleOf",value:t,message:G.toString(r)})}get minValue(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t}get maxValue(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t}};Ga.create=e=>{var t;return new Ga({checks:[],typeName:J.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...ie(e)})};var Ka=class extends oe{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==H.boolean){const r=this._getOrReturnCtx(e);return $(r,{code:I.invalid_type,expected:H.boolean,received:r.parsedType}),ee}return Je(e.data)}};Ka.create=e=>new Ka({typeName:J.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...ie(e)});var Qa=class vf extends oe{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==H.date){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_type,expected:H.date,received:s.parsedType}),ee}if(isNaN(t.data.getTime())){const s=this._getOrReturnCtx(t);return $(s,{code:I.invalid_date}),ee}const a=new dt;let i;for(const s of this._def.checks)s.kind==="min"?t.data.getTime()<s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),a.dirty()):s.kind==="max"?t.data.getTime()>s.value&&(i=this._getOrReturnCtx(t,i),$(i,{code:I.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),a.dirty()):ue.assertNever(s);return{status:a.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vf({...this._def,checks:[...this._def.checks,t]})}min(t,r){return this._addCheck({kind:"min",value:t.getTime(),message:G.toString(r)})}max(t,r){return this._addCheck({kind:"max",value:t.getTime(),message:G.toString(r)})}get minDate(){let t=null;for(const r of this._def.checks)r.kind==="min"&&(t===null||r.value>t)&&(t=r.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const r of this._def.checks)r.kind==="max"&&(t===null||r.value<t)&&(t=r.value);return t!=null?new Date(t):null}};Qa.create=e=>new Qa({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:J.ZodDate,...ie(e)});var Us=class extends oe{_parse(e){if(this._getType(e)!==H.symbol){const r=this._getOrReturnCtx(e);return $(r,{code:I.invalid_type,expected:H.symbol,received:r.parsedType}),ee}return Je(e.data)}};Us.create=e=>new Us({typeName:J.ZodSymbol,...ie(e)});var Xa=class extends oe{_parse(e){if(this._getType(e)!==H.undefined){const r=this._getOrReturnCtx(e);return $(r,{code:I.invalid_type,expected:H.undefined,received:r.parsedType}),ee}return Je(e.data)}};Xa.create=e=>new Xa({typeName:J.ZodUndefined,...ie(e)});var Ja=class extends oe{_parse(e){if(this._getType(e)!==H.null){const r=this._getOrReturnCtx(e);return $(r,{code:I.invalid_type,expected:H.null,received:r.parsedType}),ee}return Je(e.data)}};Ja.create=e=>new Ja({typeName:J.ZodNull,...ie(e)});var Bn=class extends oe{constructor(){super(...arguments),this._any=!0}_parse(e){return Je(e.data)}};Bn.create=e=>new Bn({typeName:J.ZodAny,...ie(e)});var Yr=class extends oe{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Je(e.data)}};Yr.create=e=>new Yr({typeName:J.ZodUnknown,...ie(e)});var sr=class extends oe{_parse(e){const t=this._getOrReturnCtx(e);return $(t,{code:I.invalid_type,expected:H.never,received:t.parsedType}),ee}};sr.create=e=>new sr({typeName:J.ZodNever,...ie(e)});var $s=class extends oe{_parse(e){if(this._getType(e)!==H.undefined){const r=this._getOrReturnCtx(e);return $(r,{code:I.invalid_type,expected:H.void,received:r.parsedType}),ee}return Je(e.data)}};$s.create=e=>new $s({typeName:J.ZodVoid,...ie(e)});var tn=class os extends oe{_parse(t){const{ctx:r,status:a}=this._processInputParams(t),i=this._def;if(r.parsedType!==H.array)return $(r,{code:I.invalid_type,expected:H.array,received:r.parsedType}),ee;if(i.exactLength!==null){const o=r.data.length>i.exactLength.value,l=r.data.length<i.exactLength.value;(o||l)&&($(r,{code:o?I.too_big:I.too_small,minimum:l?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),a.dirty())}if(i.minLength!==null&&r.data.length<i.minLength.value&&($(r,{code:I.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),a.dirty()),i.maxLength!==null&&r.data.length>i.maxLength.value&&($(r,{code:I.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),a.dirty()),r.common.async)return Promise.all([...r.data].map((o,l)=>i.type._parseAsync(new Vt(r,o,r.path,l)))).then(o=>dt.mergeArray(a,o));const s=[...r.data].map((o,l)=>i.type._parseSync(new Vt(r,o,r.path,l)));return dt.mergeArray(a,s)}get element(){return this._def.type}min(t,r){return new os({...this._def,minLength:{value:t,message:G.toString(r)}})}max(t,r){return new os({...this._def,maxLength:{value:t,message:G.toString(r)}})}length(t,r){return new os({...this._def,exactLength:{value:t,message:G.toString(r)}})}nonempty(t){return this.min(1,t)}};tn.create=(e,t)=>new tn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:J.ZodArray,...ie(t)});function on(e){if(e instanceof kt){const t={};for(const r in e.shape){const a=e.shape[r];t[r]=qt.create(on(a))}return new kt({...e._def,shape:()=>t})}else return e instanceof tn?new tn({...e._def,type:on(e.element)}):e instanceof qt?qt.create(on(e.unwrap())):e instanceof Tr?Tr.create(on(e.unwrap())):e instanceof Pr?Pr.create(e.items.map(t=>on(t))):e}var kt=class _t extends oe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),r=ue.objectKeys(t);return this._cached={shape:t,keys:r}}_parse(t){if(this._getType(t)!==H.object){const d=this._getOrReturnCtx(t);return $(d,{code:I.invalid_type,expected:H.object,received:d.parsedType}),ee}const{status:a,ctx:i}=this._processInputParams(t),{shape:s,keys:o}=this._getCached(),l=[];if(!(this._def.catchall instanceof sr&&this._def.unknownKeys==="strip"))for(const d in i.data)o.includes(d)||l.push(d);const c=[];for(const d of o){const u=s[d],h=i.data[d];c.push({key:{status:"valid",value:d},value:u._parse(new Vt(i,h,i.path,d)),alwaysSet:d in i.data})}if(this._def.catchall instanceof sr){const d=this._def.unknownKeys;if(d==="passthrough")for(const u of l)c.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(d==="strict")l.length>0&&($(i,{code:I.unrecognized_keys,keys:l}),a.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const u of l){const h=i.data[u];c.push({key:{status:"valid",value:u},value:d._parse(new Vt(i,h,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const d=[];for(const u of c){const h=await u.key,p=await u.value;d.push({key:h,value:p,alwaysSet:u.alwaysSet})}return d}).then(d=>dt.mergeObjectSync(a,d)):dt.mergeObjectSync(a,c)}get shape(){return this._def.shape()}strict(t){return G.errToObj,new _t({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(r,a)=>{var i,s,o,l;const c=(o=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,r,a).message)!==null&&o!==void 0?o:a.defaultError;return r.code==="unrecognized_keys"?{message:(l=G.errToObj(t).message)!==null&&l!==void 0?l:c}:{message:c}}}:{}})}strip(){return new _t({...this._def,unknownKeys:"strip"})}passthrough(){return new _t({...this._def,unknownKeys:"passthrough"})}extend(t){return new _t({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new _t({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:J.ZodObject})}setKey(t,r){return this.augment({[t]:r})}catchall(t){return new _t({...this._def,catchall:t})}pick(t){const r={};return ue.objectKeys(t).forEach(a=>{t[a]&&this.shape[a]&&(r[a]=this.shape[a])}),new _t({...this._def,shape:()=>r})}omit(t){const r={};return ue.objectKeys(this.shape).forEach(a=>{t[a]||(r[a]=this.shape[a])}),new _t({...this._def,shape:()=>r})}deepPartial(){return on(this)}partial(t){const r={};return ue.objectKeys(this.shape).forEach(a=>{const i=this.shape[a];t&&!t[a]?r[a]=i:r[a]=i.optional()}),new _t({...this._def,shape:()=>r})}required(t){const r={};return ue.objectKeys(this.shape).forEach(a=>{if(t&&!t[a])r[a]=this.shape[a];else{let s=this.shape[a];for(;s instanceof qt;)s=s._def.innerType;r[a]=s}}),new _t({...this._def,shape:()=>r})}keyof(){return Nf(ue.objectKeys(this.shape))}};kt.create=(e,t)=>new kt({shape:()=>e,unknownKeys:"strip",catchall:sr.create(),typeName:J.ZodObject,...ie(t)});kt.strictCreate=(e,t)=>new kt({shape:()=>e,unknownKeys:"strict",catchall:sr.create(),typeName:J.ZodObject,...ie(t)});kt.lazycreate=(e,t)=>new kt({shape:e,unknownKeys:"strip",catchall:sr.create(),typeName:J.ZodObject,...ie(t)});var ei=class extends oe{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function a(i){for(const o of i)if(o.result.status==="valid")return o.result;for(const o of i)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const s=i.map(o=>new At(o.ctx.common.issues));return $(t,{code:I.invalid_union,unionErrors:s}),ee}if(t.common.async)return Promise.all(r.map(async i=>{const s={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:s}),ctx:s}})).then(a);{let i;const s=[];for(const l of r){const c={...t,common:{...t.common,issues:[]},parent:null},d=l._parseSync({data:t.data,path:t.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!i&&(i={result:d,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const o=s.map(l=>new At(l));return $(t,{code:I.invalid_union,unionErrors:o}),ee}}get options(){return this._def.options}};ei.create=(e,t)=>new ei({options:e,typeName:J.ZodUnion,...ie(t)});var Gt=e=>e instanceof ri?Gt(e.schema):e instanceof Lt?Gt(e.innerType()):e instanceof ni?[e.value]:e instanceof xi?e.options:e instanceof ai?ue.objectValues(e.enum):e instanceof ii?Gt(e._def.innerType):e instanceof Xa?[void 0]:e instanceof Ja?[null]:e instanceof qt?[void 0,...Gt(e.unwrap())]:e instanceof Tr?[null,...Gt(e.unwrap())]:e instanceof Pd||e instanceof oi?Gt(e.unwrap()):e instanceof si?Gt(e._def.innerType):[],bf=class yf extends oe{_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==H.object)return $(r,{code:I.invalid_type,expected:H.object,received:r.parsedType}),ee;const a=this.discriminator,i=r.data[a],s=this.optionsMap.get(i);return s?r.common.async?s._parseAsync({data:r.data,path:r.path,parent:r}):s._parseSync({data:r.data,path:r.path,parent:r}):($(r,{code:I.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[a]}),ee)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,r,a){const i=new Map;for(const s of r){const o=Gt(s.shape[t]);if(!o.length)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const l of o){if(i.has(l))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(l)}`);i.set(l,s)}}return new yf({typeName:J.ZodDiscriminatedUnion,discriminator:t,options:r,optionsMap:i,...ie(a)})}};function Nc(e,t){const r=Xt(e),a=Xt(t);if(e===t)return{valid:!0,data:e};if(r===H.object&&a===H.object){const i=ue.objectKeys(t),s=ue.objectKeys(e).filter(l=>i.indexOf(l)!==-1),o={...e,...t};for(const l of s){const c=Nc(e[l],t[l]);if(!c.valid)return{valid:!1};o[l]=c.data}return{valid:!0,data:o}}else if(r===H.array&&a===H.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let s=0;s<e.length;s++){const o=e[s],l=t[s],c=Nc(o,l);if(!c.valid)return{valid:!1};i.push(c.data)}return{valid:!0,data:i}}else return r===H.date&&a===H.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}var ti=class extends oe{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),a=(i,s)=>{if(yc(i)||yc(s))return ee;const o=Nc(i.value,s.value);return o.valid?((wc(i)||wc(s))&&t.dirty(),{status:t.value,value:o.data}):($(r,{code:I.invalid_intersection_types}),ee)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>a(i,s)):a(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};ti.create=(e,t,r)=>new ti({left:e,right:t,typeName:J.ZodIntersection,...ie(r)});var Pr=class wf extends oe{_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.parsedType!==H.array)return $(a,{code:I.invalid_type,expected:H.array,received:a.parsedType}),ee;if(a.data.length<this._def.items.length)return $(a,{code:I.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ee;!this._def.rest&&a.data.length>this._def.items.length&&($(a,{code:I.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const s=[...a.data].map((o,l)=>{const c=this._def.items[l]||this._def.rest;return c?c._parse(new Vt(a,o,a.path,l)):null}).filter(o=>!!o);return a.common.async?Promise.all(s).then(o=>dt.mergeArray(r,o)):dt.mergeArray(r,s)}get items(){return this._def.items}rest(t){return new wf({...this._def,rest:t})}};Pr.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Pr({items:e,typeName:J.ZodTuple,rest:null,...ie(t)})};var jf=class Sc extends oe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.parsedType!==H.object)return $(a,{code:I.invalid_type,expected:H.object,received:a.parsedType}),ee;const i=[],s=this._def.keyType,o=this._def.valueType;for(const l in a.data)i.push({key:s._parse(new Vt(a,l,a.path,l)),value:o._parse(new Vt(a,a.data[l],a.path,l)),alwaysSet:l in a.data});return a.common.async?dt.mergeObjectAsync(r,i):dt.mergeObjectSync(r,i)}get element(){return this._def.valueType}static create(t,r,a){return r instanceof oe?new Sc({keyType:t,valueType:r,typeName:J.ZodRecord,...ie(a)}):new Sc({keyType:Fn.create(),valueType:t,typeName:J.ZodRecord,...ie(r)})}},Hs=class extends oe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==H.map)return $(r,{code:I.invalid_type,expected:H.map,received:r.parsedType}),ee;const a=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([o,l],c)=>({key:a._parse(new Vt(r,o,r.path,[c,"key"])),value:i._parse(new Vt(r,l,r.path,[c,"value"]))}));if(r.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of s){const c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return ee;(c.status==="dirty"||d.status==="dirty")&&t.dirty(),o.set(c.value,d.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const l of s){const c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return ee;(c.status==="dirty"||d.status==="dirty")&&t.dirty(),o.set(c.value,d.value)}return{status:t.value,value:o}}}};Hs.create=(e,t,r)=>new Hs({valueType:t,keyType:e,typeName:J.ZodMap,...ie(r)});var Ws=class Cc extends oe{_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.parsedType!==H.set)return $(a,{code:I.invalid_type,expected:H.set,received:a.parsedType}),ee;const i=this._def;i.minSize!==null&&a.data.size<i.minSize.value&&($(a,{code:I.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),r.dirty()),i.maxSize!==null&&a.data.size>i.maxSize.value&&($(a,{code:I.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),r.dirty());const s=this._def.valueType;function o(c){const d=new Set;for(const u of c){if(u.status==="aborted")return ee;u.status==="dirty"&&r.dirty(),d.add(u.value)}return{status:r.value,value:d}}const l=[...a.data.values()].map((c,d)=>s._parse(new Vt(a,c,a.path,d)));return a.common.async?Promise.all(l).then(c=>o(c)):o(l)}min(t,r){return new Cc({...this._def,minSize:{value:t,message:G.toString(r)}})}max(t,r){return new Cc({...this._def,maxSize:{value:t,message:G.toString(r)}})}size(t,r){return this.min(t,r).max(t,r)}nonempty(t){return this.min(1,t)}};Ws.create=(e,t)=>new Ws({valueType:e,minSize:null,maxSize:null,typeName:J.ZodSet,...ie(t)});var kf=class ls extends oe{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:r}=this._processInputParams(t);if(r.parsedType!==H.function)return $(r,{code:I.invalid_type,expected:H.function,received:r.parsedType}),ee;function a(l,c){return Bs({data:l,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Fs(),In].filter(d=>!!d),issueData:{code:I.invalid_arguments,argumentsError:c}})}function i(l,c){return Bs({data:l,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,Fs(),In].filter(d=>!!d),issueData:{code:I.invalid_return_type,returnTypeError:c}})}const s={errorMap:r.common.contextualErrorMap},o=r.data;if(this._def.returns instanceof Dn){const l=this;return Je(async function(...c){const d=new At([]),u=await l._def.args.parseAsync(c,s).catch(x=>{throw d.addIssue(a(c,x)),d}),h=await Reflect.apply(o,this,u);return await l._def.returns._def.type.parseAsync(h,s).catch(x=>{throw d.addIssue(i(h,x)),d})})}else{const l=this;return Je(function(...c){const d=l._def.args.safeParse(c,s);if(!d.success)throw new At([a(c,d.error)]);const u=Reflect.apply(o,this,d.data),h=l._def.returns.safeParse(u,s);if(!h.success)throw new At([i(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new ls({...this._def,args:Pr.create(t).rest(Yr.create())})}returns(t){return new ls({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,r,a){return new ls({args:t||Pr.create([]).rest(Yr.create()),returns:r||Yr.create(),typeName:J.ZodFunction,...ie(a)})}},ri=class extends oe{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};ri.create=(e,t)=>new ri({getter:e,typeName:J.ZodLazy,...ie(t)});var ni=class extends oe{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return $(t,{received:t.data,code:I.invalid_literal,expected:this._def.value}),ee}return{status:"valid",value:e.data}}get value(){return this._def.value}};ni.create=(e,t)=>new ni({value:e,typeName:J.ZodLiteral,...ie(t)});function Nf(e,t){return new xi({values:e,typeName:J.ZodEnum,...ie(t)})}var xi=class _c extends oe{constructor(){super(...arguments),ma.set(this,void 0)}_parse(t){if(typeof t.data!="string"){const r=this._getOrReturnCtx(t),a=this._def.values;return $(r,{expected:ue.joinValues(a),received:r.parsedType,code:I.invalid_type}),ee}if(Ds(this,ma)||ff(this,ma,new Set(this._def.values)),!Ds(this,ma).has(t.data)){const r=this._getOrReturnCtx(t),a=this._def.values;return $(r,{received:r.data,code:I.invalid_enum_value,options:a}),ee}return Je(t.data)}get options(){return this._def.values}get enum(){const t={};for(const r of this._def.values)t[r]=r;return t}get Values(){const t={};for(const r of this._def.values)t[r]=r;return t}get Enum(){const t={};for(const r of this._def.values)t[r]=r;return t}extract(t,r=this._def){return _c.create(t,{...this._def,...r})}exclude(t,r=this._def){return _c.create(this.options.filter(a=>!t.includes(a)),{...this._def,...r})}};ma=new WeakMap;xi.create=Nf;var ai=class extends oe{constructor(){super(...arguments),ga.set(this,void 0)}_parse(e){const t=ue.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==H.string&&r.parsedType!==H.number){const a=ue.objectValues(t);return $(r,{expected:ue.joinValues(a),received:r.parsedType,code:I.invalid_type}),ee}if(Ds(this,ga)||ff(this,ga,new Set(ue.getValidEnumValues(this._def.values))),!Ds(this,ga).has(e.data)){const a=ue.objectValues(t);return $(r,{received:r.data,code:I.invalid_enum_value,options:a}),ee}return Je(e.data)}get enum(){return this._def.values}};ga=new WeakMap;ai.create=(e,t)=>new ai({values:e,typeName:J.ZodNativeEnum,...ie(t)});var Dn=class extends oe{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==H.promise&&t.common.async===!1)return $(t,{code:I.invalid_type,expected:H.promise,received:t.parsedType}),ee;const r=t.parsedType===H.promise?t.data:Promise.resolve(t.data);return Je(r.then(a=>this._def.type.parseAsync(a,{path:t.path,errorMap:t.common.contextualErrorMap})))}};Dn.create=(e,t)=>new Dn({type:e,typeName:J.ZodPromise,...ie(t)});var Lt=class extends oe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===J.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),a=this._def.effect||null,i={addIssue:s=>{$(r,s),s.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),a.type==="preprocess"){const s=a.transform(r.data,i);if(r.common.async)return Promise.resolve(s).then(async o=>{if(t.value==="aborted")return ee;const l=await this._def.schema._parseAsync({data:o,path:r.path,parent:r});return l.status==="aborted"?ee:l.status==="dirty"||t.value==="dirty"?yn(l.value):l});{if(t.value==="aborted")return ee;const o=this._def.schema._parseSync({data:s,path:r.path,parent:r});return o.status==="aborted"?ee:o.status==="dirty"||t.value==="dirty"?yn(o.value):o}}if(a.type==="refinement"){const s=o=>{const l=a.refinement(o,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?ee:(o.status==="dirty"&&t.dirty(),s(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>o.status==="aborted"?ee:(o.status==="dirty"&&t.dirty(),s(o.value).then(()=>({status:t.value,value:o.value}))))}if(a.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!en(s))return s;const o=a.transform(s.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>en(s)?Promise.resolve(a.transform(s.value,i)).then(o=>({status:t.value,value:o})):s);ue.assertNever(a)}};Lt.create=(e,t,r)=>new Lt({schema:e,typeName:J.ZodEffects,effect:t,...ie(r)});Lt.createWithPreprocess=(e,t,r)=>new Lt({schema:t,effect:{type:"preprocess",transform:e},typeName:J.ZodEffects,...ie(r)});var qt=class extends oe{_parse(e){return this._getType(e)===H.undefined?Je(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};qt.create=(e,t)=>new qt({innerType:e,typeName:J.ZodOptional,...ie(t)});var Tr=class extends oe{_parse(e){return this._getType(e)===H.null?Je(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Tr.create=(e,t)=>new Tr({innerType:e,typeName:J.ZodNullable,...ie(t)});var ii=class extends oe{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===H.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};ii.create=(e,t)=>new ii({innerType:e,typeName:J.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...ie(t)});var si=class extends oe{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},a=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Ya(a)?a.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new At(r.common.issues)},input:r.data})})):{status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new At(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};si.create=(e,t)=>new si({innerType:e,typeName:J.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...ie(t)});var qs=class extends oe{_parse(e){if(this._getType(e)!==H.nan){const r=this._getOrReturnCtx(e);return $(r,{code:I.invalid_type,expected:H.nan,received:r.parsedType}),ee}return{status:"valid",value:e.data}}};qs.create=e=>new qs({typeName:J.ZodNaN,...ie(e)});var Dw=Symbol("zod_brand"),Pd=class extends oe{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}},Td=class Sf extends oe{_parse(t){const{status:r,ctx:a}=this._processInputParams(t);if(a.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:a.data,path:a.path,parent:a});return s.status==="aborted"?ee:s.status==="dirty"?(r.dirty(),yn(s.value)):this._def.out._parseAsync({data:s.value,path:a.path,parent:a})})();{const i=this._def.in._parseSync({data:a.data,path:a.path,parent:a});return i.status==="aborted"?ee:i.status==="dirty"?(r.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:a.path,parent:a})}}static create(t,r){return new Sf({in:t,out:r,typeName:J.ZodPipeline})}},oi=class extends oe{_parse(e){const t=this._def.innerType._parse(e),r=a=>(en(a)&&(a.value=Object.freeze(a.value)),a);return Ya(t)?t.then(a=>r(a)):r(t)}unwrap(){return this._def.innerType}};oi.create=(e,t)=>new oi({innerType:e,typeName:J.ZodReadonly,...ie(t)});function Up(e,t){const r=typeof e=="function"?e(t):typeof e=="string"?{message:e}:e;return typeof r=="string"?{message:r}:r}function Cf(e,t={},r){return e?Bn.create().superRefine((a,i)=>{var s,o;const l=e(a);if(l instanceof Promise)return l.then(c=>{var d,u;if(!c){const h=Up(t,a),p=(u=(d=h.fatal)!==null&&d!==void 0?d:r)!==null&&u!==void 0?u:!0;i.addIssue({code:"custom",...h,fatal:p})}});if(!l){const c=Up(t,a),d=(o=(s=c.fatal)!==null&&s!==void 0?s:r)!==null&&o!==void 0?o:!0;i.addIssue({code:"custom",...c,fatal:d})}}):Bn.create()}var Uw={object:kt.lazycreate},J;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(J||(J={}));var $w=(e,t={message:`Input not instance of ${e.name}`})=>Cf(r=>r instanceof e,t),_f=Fn.create,zf=Za.create,Hw=qs.create,Ww=Ga.create,Ef=Ka.create,qw=Qa.create,Vw=Us.create,Yw=Xa.create,Zw=Ja.create,Gw=Bn.create,Kw=Yr.create,Qw=sr.create,Xw=$s.create,Jw=tn.create,e5=kt.create,t5=kt.strictCreate,r5=ei.create,n5=bf.create,a5=ti.create,i5=Pr.create,s5=jf.create,o5=Hs.create,l5=Ws.create,c5=kf.create,d5=ri.create,u5=ni.create,p5=xi.create,h5=ai.create,f5=Dn.create,$p=Lt.create,m5=qt.create,g5=Tr.create,x5=Lt.createWithPreprocess,v5=Td.create,b5=()=>_f().optional(),y5=()=>zf().optional(),w5=()=>Ef().optional(),j5={string:e=>Fn.create({...e,coerce:!0}),number:e=>Za.create({...e,coerce:!0}),boolean:e=>Ka.create({...e,coerce:!0}),bigint:e=>Ga.create({...e,coerce:!0}),date:e=>Qa.create({...e,coerce:!0})},k5=ee,$e=Object.freeze({__proto__:null,defaultErrorMap:In,setErrorMap:xw,getErrorMap:Fs,makeIssue:Bs,EMPTY_PATH:vw,addIssueToContext:$,ParseStatus:dt,INVALID:ee,DIRTY:yn,OK:Je,isAborted:yc,isDirty:wc,isValid:en,isAsync:Ya,get util(){return ue},get objectUtil(){return bc},ZodParsedType:H,getParsedType:Xt,ZodType:oe,datetimeRegex:xf,ZodString:Fn,ZodNumber:Za,ZodBigInt:Ga,ZodBoolean:Ka,ZodDate:Qa,ZodSymbol:Us,ZodUndefined:Xa,ZodNull:Ja,ZodAny:Bn,ZodUnknown:Yr,ZodNever:sr,ZodVoid:$s,ZodArray:tn,ZodObject:kt,ZodUnion:ei,ZodDiscriminatedUnion:bf,ZodIntersection:ti,ZodTuple:Pr,ZodRecord:jf,ZodMap:Hs,ZodSet:Ws,ZodFunction:kf,ZodLazy:ri,ZodLiteral:ni,ZodEnum:xi,ZodNativeEnum:ai,ZodPromise:Dn,ZodEffects:Lt,ZodTransformer:Lt,ZodOptional:qt,ZodNullable:Tr,ZodDefault:ii,ZodCatch:si,ZodNaN:qs,BRAND:Dw,ZodBranded:Pd,ZodPipeline:Td,ZodReadonly:oi,custom:Cf,Schema:oe,ZodSchema:oe,late:Uw,get ZodFirstPartyTypeKind(){return J},coerce:j5,any:Gw,array:Jw,bigint:Ww,boolean:Ef,date:qw,discriminatedUnion:n5,effect:$p,enum:p5,function:c5,instanceof:$w,intersection:a5,lazy:d5,literal:u5,map:o5,nan:Hw,nativeEnum:h5,never:Qw,null:Zw,nullable:g5,number:zf,object:e5,oboolean:w5,onumber:y5,optional:m5,ostring:b5,pipeline:v5,preprocess:x5,promise:f5,record:s5,set:l5,strictObject:t5,string:_f,symbol:Vw,transformer:$p,tuple:i5,undefined:Yw,union:r5,unknown:Kw,void:Xw,NEVER:k5,ZodIssueCode:I,quotelessJson:gw,ZodError:At}),Hp={name:"@imgly/background-removal",version:"1.7.0"},N5=$e.object({publicPath:$e.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(e=>e.replace("${PACKAGE_NAME}",Hp.name).replace("${PACKAGE_VERSION}",Hp.version)),debug:$e.boolean().default(!1).describe("Whether to enable debug logging."),rescale:$e.boolean().default(!0).describe("Whether to rescale the image."),device:$e.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:$e.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:$e.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:$e.function().args($e.string(),$e.number(),$e.number()).returns($e.void()).describe("Progress callback.").optional(),model:$e.preprocess(e=>{switch(e){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return e}},$e.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:$e.object({format:$e.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:$e.number().default(.8)}).default({})}).default({}).transform(e=>(e.debug&&console.log("Config:",e),e.debug&&!e.progress&&(e.progress=e.progress??((t,r,a)=>{console.debug(`Downloading ${t}: ${r} of ${a}`)}),crossOriginIsolated||e.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),e));function S5(e){return N5.parse(e??{})}var C5=vo(bo());async function _5(e){e.debug&&console.debug("Loading model...",e.model);const t=e.model,a=await(await cf(`/models/${t}`,e)).arrayBuffer();return await fw(a,e)}async function z5(e){e=S5(e);const t=await _5(e);return{config:e,session:{base:t}}}async function E5(e,t,r){const[i,s,o]=e.shape,l=!1;let c=Fp(e,1024,1024,l);const d=cw(c);let u=await mw(r.base,[["input",d]],["output"],t),h=(0,C5.default)(u[0].data,[1024,1024,1]),p=uw(h);return t.rescale?(p=Fp(p,s,i,l),[p,e]):[p,c]}var R5=rw(z5,e=>JSON.stringify(e));async function P5(e,t){var p,x,m,y;const{config:r,session:a}=await R5(t);r.progress&&r.progress("compute:decode",0,4);const i=await dw(e,r);(p=r.progress)==null||p.call(r,"compute:inference",1,4);const[s,o]=await E5(i,r,a);(x=r.progress)==null||x.call(r,"compute:mask",2,4);const l=o,[c,d]=l.shape,u=c*d;for(let w=0;w<u;w+=1)l.data[4*w+3]=s.data[w];(m=r.progress)==null||m.call(r,"compute:encode",3,4);const h=await aw(l,r.output.quality,r.output.format);return(y=r.progress)==null||y.call(r,"compute:encode",4,4),h}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/function T5({imageSrc:e,onSave:t,onCancel:r}){const[a,i]=b.useState({x:0,y:0}),[s,o]=b.useState(1),[l,c]=b.useState(null),[d,u]=b.useState(0),[h,p]=b.useState(!1),[x,m]=b.useState(!1),[y,w]=b.useState(null);b.useRef(null);const v=()=>{try{const A=document.createElement("canvas");return!!(A.getContext("webgl")||A.getContext("experimental-webgl"))}catch{return!1}},g=async A=>new Promise((P,Z)=>{const L=new Image;L.crossOrigin="anonymous",L.onload=()=>{const B=document.createElement("canvas"),se=B.getContext("2d");if(!se){Z(new Error("Canvas not supported"));return}B.width=L.width,B.height=L.height,se.drawImage(L,0,0);const K=se.getImageData(0,0,B.width,B.height),M=K.data;for(let T=0;T<M.length;T+=4){const E=M[T],O=M[T+1],U=M[T+2],Q=Math.max(E,O,U),me=Math.min(E,O,U),_=(Q+me)/2,X=Q===0?0:(Q-me)/Q;_>200&&X<.1&&(M[T+3]=0)}se.putImageData(K,0,0),P(B.toDataURL("image/png"))},L.onerror=()=>Z(new Error("Failed to load image")),L.src=A});b.useEffect(()=>{const A=P=>{P.key==="Escape"?r():P.key==="Enter"&&P.ctrlKey&&z()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[r]);const f=b.useCallback((A,P)=>{c(P)},[]),j=b.useCallback(async(A,P,Z=0)=>{const L=new Image;L.src=A,await new Promise(U=>{L.onload=U});const B=document.createElement("canvas"),se=B.getContext("2d");if(!se)throw new Error("No 2d context");const M=2*(Math.max(L.width,L.height)/2*Math.sqrt(2));B.width=M,B.height=M,se.translate(M/2,M/2),se.rotate(Z*Math.PI/180),se.translate(-M/2,-M/2),se.drawImage(L,M/2-L.width*.5,M/2-L.height*.5);const T=se.getImageData(0,0,M,M),E=document.createElement("canvas");E.width=P.width,E.height=P.height;const O=E.getContext("2d");if(!O)throw new Error("No 2d context");return O.putImageData(T,0-M/2+L.width*.5-P.x,0-M/2+L.height*.5-P.y),new Promise(U=>{E.toBlob(Q=>{Q&&U(URL.createObjectURL(Q))},"image/jpeg",.95)})},[]),k=async()=>{if(!e)return;const A=()=>{try{const P=document.createElement("canvas");return!!(P.getContext("webgl")||P.getContext("experimental-webgl"))}catch{return!1}};p(!0);try{let P,Z;if(A())try{let L=e;e.startsWith("blob:")&&(L=await(await fetch(e)).blob()),P=await P5(L),Z=URL.createObjectURL(P)}catch(L){console.warn("AI background removal failed, trying fallback:",L),Z=await g(e)}else console.log("AI background removal not supported, using fallback"),Z=await g(e);w(Z),m(!0),Et("Background removed successfully!","success")}catch(P){console.error("Background removal failed:",P);let Z="Background removal failed. ";P instanceof Error&&(P.message.includes("WebGL")||P.message.includes("WebGPU")?Z+="Your browser may not support the required graphics acceleration. Try using a modern browser like Chrome or Edge.":P.message.includes("CORS")?Z+="The image cannot be processed due to security restrictions.":P.message.includes("format")?Z+="The image format is not supported.":Z+="Please try again or use a different image."),alert(Z+`

You can still crop and resize your image.`)}finally{p(!1)}},C=async(A,P)=>{const Z=new Image;Z.src=y||e,await new Promise(K=>{Z.onload=K});const L=document.createElement("canvas"),B=L.getContext("2d");if(!B)return;L.width=A,L.height=P,B.drawImage(Z,0,0,A,P);const se=L.toDataURL("image/jpeg",.95);w(se)},N=async()=>{if(l)try{const A=await j(y||e,l,d);w(A)}catch(A){console.error("Cropping failed:",A)}},z=async()=>{if(!y&&!l){const B=await(await fetch(e)).blob();t(B);return}let A=y||e;l&&!y&&(A=await j(e,l,d));const Z=await(await fetch(A)).blob();t(Z)},W=()=>{w(null),m(!1),i({x:0,y:0}),o(1),u(0)};return n.jsxs("div",{className:"image-editor-modal",children:[n.jsx("div",{className:"image-editor-overlay",onClick:r}),n.jsxs("div",{className:"image-editor-content",children:[n.jsxs("div",{className:"image-editor-header",children:[n.jsx("h3",{children:"Edit Profile Picture"}),n.jsx("button",{className:"close-btn",onClick:r,children:"×"})]}),n.jsxs("div",{className:"image-editor-body",children:[n.jsxs("div",{className:"image-preview",children:[y?n.jsx("div",{className:"processed-image-container",children:n.jsx("img",{src:y,alt:"Processed",className:"processed-image"})}):n.jsx(Q1,{image:e,crop:a,zoom:s,aspect:1,onCropChange:i,onZoomChange:o,onCropComplete:f,cropShape:"round",showGrid:!1}),h&&n.jsx("div",{className:"processing-overlay",children:n.jsxs("div",{className:"processing-content",children:[n.jsx("div",{className:"processing-spinner"}),n.jsx("div",{className:"processing-text",children:"Removing background..."}),n.jsxs("div",{className:"processing-method",children:["Using ",v()?"AI-powered":"basic"," removal"]})]})})]}),n.jsxs("div",{className:"editor-controls",children:[!y&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"control-group",children:[n.jsxs("label",{children:["Zoom: ",s.toFixed(1),"x"]}),n.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:s,onChange:A=>o(Number(A.target.value))})]}),n.jsxs("div",{className:"control-group",children:[n.jsxs("label",{children:["Rotation: ",d,"°"]}),n.jsx("input",{type:"range",min:"-180",max:"180",step:"15",value:d,onChange:A=>u(Number(A.target.value))})]}),n.jsx("button",{className:"editor-btn",onClick:N,disabled:!l,children:"Apply Crop"})]}),n.jsx("div",{className:"control-group",children:n.jsx("button",{className:"editor-btn secondary",onClick:k,disabled:h||x,title:v()?"Remove background using AI":"Using basic background removal (AI not supported in this browser)",children:h?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"loading-spinner"}),"Removing..."]}):x?"Background Removed":n.jsxs(n.Fragment,{children:["Remove Background",!v()&&n.jsx("span",{className:"bg-removal-note",children:" (Basic)"})]})})}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"Resize:"}),n.jsxs("div",{className:"resize-options",children:[n.jsx("button",{className:"editor-btn small",onClick:()=>C(256,256),children:"256×256"}),n.jsx("button",{className:"editor-btn small",onClick:()=>C(512,512),children:"512×512"}),n.jsx("button",{className:"editor-btn small",onClick:()=>C(1024,1024),children:"1024×1024"})]})]}),n.jsx("div",{className:"control-group",children:n.jsx("button",{className:"editor-btn secondary",onClick:W,children:"Reset"})})]})]}),n.jsxs("div",{className:"image-editor-footer",children:[n.jsx("button",{className:"editor-btn cancel",onClick:r,children:"Cancel"}),n.jsx("button",{className:"editor-btn primary",onClick:z,children:"Save Changes"})]})]}),n.jsx("style",{children:`
        .image-editor-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-editor-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
        }

        .image-editor-content {
          position: relative;
          background: white;
          border-radius: 16px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .image-editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .image-editor-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #111827;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6b7280;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #374151;
        }

        .image-editor-body {
          display: flex;
          gap: 24px;
          padding: 24px;
          max-height: calc(90vh - 140px);
          overflow-y: auto;
        }

        .image-preview {
          flex: 1;
          position: relative;
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          background: #f9fafb;
          border: 2px dashed #d1d5db;
        }

        .processed-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .processed-image {
          max-width: 100%;
          max-height: 100%;
          border-radius: 8px;
          object-fit: contain;
        }

        .processing-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .processing-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .processing-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid #e5e7eb;
          border-top: 3px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .processing-text {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          text-align: center;
        }

        .processing-method {
          font-size: 12px;
          color: #6b7280;
          margin-top: 4px;
        }

        .editor-controls {
          width: 250px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .control-group label {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .control-group input[type="range"] {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #e5e7eb;
          outline: none;
          -webkit-appearance: none;
        }

        .control-group input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .editor-btn {
          padding: 10px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          background: white;
          color: #374151;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .editor-btn:hover:not(:disabled) {
          background: #f9fafb;
          border-color: #9ca3af;
        }

        .editor-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .editor-btn.primary {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .editor-btn.primary:hover:not(:disabled) {
          background: #2563eb;
        }

        .editor-btn.secondary {
          background: #f3f4f6;
          border-color: #d1d5db;
        }

        .editor-btn.cancel {
          background: #fef2f2;
          border-color: #fecaca;
          color: #dc2626;
        }

        .editor-btn.cancel:hover:not(:disabled) {
          background: #fee2e2;
        }

        .editor-btn.small {
          padding: 6px 12px;
          font-size: 12px;
        }

        .resize-options {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .image-editor-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .bg-removal-note {
          font-size: 11px;
          color: #6b7280;
          margin-left: 4px;
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})}function M5(){const{user:e,updateUser:t}=Ft(),[r,a]=b.useState(!0),[i,s]=b.useState(!1),[o,l]=b.useState(!1),[c,d]=b.useState(""),[u,h]=b.useState(""),[p,x]=b.useState(""),[m,y]=b.useState(""),[w,v]=b.useState(void 0),[g,f]=b.useState(null),[j,k]=b.useState(null),[C,N]=b.useState(""),[z,W]=b.useState(""),[A,P]=b.useState(""),[Z,L]=b.useState(!1),[B,se]=b.useState(null),[K,M]=b.useState(""),[T,E]=b.useState(!1),O=b.useRef(null);b.useEffect(()=>{E(!0)},[]),b.useEffect(()=>{(g||j)&&O.current&&O.current.focus()},[g,j]),b.useEffect(()=>{async function ne(){try{a(!0);const ve=(await te.get("/auth/me")).data||{};d(ve.full_name||""),h(ve.email||""),x(ve.phone||""),y(ve.address||""),v(ve.avatar_url||(e==null?void 0:e.avatar_url)||void 0)}catch{d((e==null?void 0:e.full_name)||""),h((e==null?void 0:e.email)||""),x((e==null?void 0:e.phone)||""),y((e==null?void 0:e.address)||""),v((e==null?void 0:e.avatar_url)||void 0)}finally{a(!1)}}ne()},[]);async function U(ne){var xe,ve;if(ne.preventDefault(),k(null),f(null),!u){k("Email is required");return}try{s(!0);const Le=(await te.put("/auth/me",{email:u,full_name:c,phone:p,address:m})).data;t({email:Le.email,full_name:Le.full_name,phone:Le.phone,address:Le.address}),f("Profile updated successfully"),Et("Profile updated","success")}catch(Ce){const Le=((ve=(xe=Ce==null?void 0:Ce.response)==null?void 0:xe.data)==null?void 0:ve.detail)||"Failed to update profile";k(String(Le)),Et("Could not update profile","error")}finally{s(!1)}}async function Q(ne){var xe,ve;if(ne.preventDefault(),k(null),f(null),!C||!z||!A){k("Please fill all password fields");return}if(z.length<8){k("New password must be at least 8 characters");return}if(z!==A){k("Passwords do not match");return}try{l(!0),await te.post("/auth/change-password",{old_password:C,new_password:z}),f("Password changed successfully"),N(""),W(""),P(""),Et("Password updated","success")}catch(Ce){const Le=((ve=(xe=Ce==null?void 0:Ce.response)==null?void 0:xe.data)==null?void 0:ve.detail)||"Failed to change password";k(String(Le)),Et("Could not change password","error")}finally{l(!1)}}async function me(ne){var Ce;const xe=(Ce=ne.target.files)==null?void 0:Ce[0];if(!xe)return;if(!/image\/(png|jpe?g|webp)/.test(xe.type)){Et("Please select a PNG, JPG, or WEBP image","error");return}if(xe.size>3*1024*1024){Et("Image must be under 3MB","error");return}const ve=URL.createObjectURL(xe);se(xe),M(ve),L(!0)}async function _(ne){var ve;if(!B)return;const xe=new FormData;xe.append("file",ne,B.name);try{let Le=(ve=(await te.post("/auth/avatar",xe,{headers:{"Content-Type":"multipart/form-data"}})).data)==null?void 0:ve.avatar_url;Le&&(Le=`${Le}${Le.includes("?")?"&":"?"}v=${Date.now()}`),v(Le),t({avatar_url:Le}),Et("Profile picture updated","success"),L(!1),se(null),M("")}catch{Et("Failed to upload picture","error")}}function X(){L(!1),se(null),M("");const ne=document.querySelector('input[type="file"]');ne&&(ne.value="")}function re(){w&&(M(w),L(!0))}return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"page-background",children:[n.jsx("div",{className:"gradient-orb orb-1"}),n.jsx("div",{className:"gradient-orb orb-2"}),n.jsx("div",{className:"gradient-orb orb-3"}),n.jsx("div",{className:"grid-overlay"}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"}),n.jsx("div",{className:"shape shape-3"}),n.jsx("div",{className:"shape shape-4"})]})]}),n.jsx("section",{className:`account-hero ${T?"animate-in":""}`,children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"hero-content",children:[n.jsxs("div",{className:"hero-badge",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"})}),"Your Profile"]}),n.jsx("h1",{className:"headline",children:"Account Settings"}),n.jsx("p",{className:"subhead",children:"Update your profile details, password, and picture."}),n.jsxs("div",{className:"hero-decorations",children:[n.jsx("div",{className:"decoration-wave wave-1"}),n.jsx("div",{className:"decoration-wave wave-2"})]})]})})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:`container acct-wrap ${T?"animate-in":""}`,children:[n.jsxs("div",{className:"panel main-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Profile"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("div",{ref:O,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[g&&n.jsxs("div",{className:"alert success",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),g]}),j&&n.jsxs("div",{className:"alert error",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),j]})]}),n.jsxs("form",{className:"form",onSubmit:U,noValidate:!0,children:[n.jsxs("div",{className:"avatar-row",children:[n.jsxs("div",{className:"avatar-container",children:[n.jsx("div",{className:"avatar","aria-label":"Profile picture",children:w?n.jsx("img",{src:w,alt:"Profile"}):n.jsx("div",{className:"img-fallback","aria-hidden":!0,children:n.jsx("svg",{width:"32",height:"32",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})})})}),n.jsx("div",{className:"avatar-ring"}),n.jsx("div",{className:"avatar-pulse"})]}),n.jsxs("div",{className:"avatar-buttons",children:[n.jsxs("label",{className:"btn btn-upload",role:"button",children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"})}),"Change picture",n.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",onChange:me,hidden:!0})]}),w&&n.jsxs("button",{className:"btn btn-secondary",type:"button",onClick:re,children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit picture"]})]})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"fullName",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Full name"]}),n.jsx("input",{id:"fullName",type:"text",value:c,onChange:ne=>d(ne.target.value),placeholder:"Your name"})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"email",children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[n.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),n.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),n.jsx("input",{id:"email",type:"email",value:u,onChange:ne=>h(ne.target.value),required:!0})]}),n.jsxs("div",{className:"row2",children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"phone",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})}),"Phone"]}),n.jsx("input",{id:"phone",type:"tel",value:p,onChange:ne=>x(ne.target.value),placeholder:"Optional"})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"address",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"})}),"Address"]}),n.jsx("input",{id:"address",type:"text",value:m,onChange:ne=>y(ne.target.value),placeholder:"Optional"})]})]}),n.jsx("button",{className:"btn btn-primary",type:"submit",disabled:i,children:i?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Saving…"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{d:"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"})}),"Save changes"]})})]})]}),n.jsxs("aside",{className:"panel side-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("h2",{className:"section-title",children:[n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Change password"]}),n.jsx("div",{className:"title-underline"})]}),n.jsxs("form",{className:"form",onSubmit:Q,noValidate:!0,children:[n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"old",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"})}),"Current password"]}),n.jsx("input",{id:"old",type:"password",value:C,onChange:ne=>N(ne.target.value),autoComplete:"current-password",required:!0})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"new",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"New password"]}),n.jsx("input",{id:"new",type:"password",value:z,onChange:ne=>W(ne.target.value),autoComplete:"new-password",required:!0})]}),n.jsxs("div",{className:"field",children:[n.jsxs("label",{htmlFor:"confirm",children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Confirm new password"]}),n.jsx("input",{id:"confirm",type:"password",value:A,onChange:ne=>P(ne.target.value),autoComplete:"new-password",required:!0})]}),n.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?n.jsxs(n.Fragment,{children:[n.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),n.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Updating…"]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Update password"]})})]})]})]})}),n.jsx("style",{children:`
        :root{
          --bg:#0d0d0f;
          --surface:#121216;
          --surface-alt:#171821;
          --text:#e9e9ef;
          --muted:#b8bbd9;
          --brand:#6D74FF;
          --brand-600:#5860ff;
          --brand-700:#4a52e6;
          --line:#2a2b36;
          --card:#14151d;
          --ghost:#232434;
          --positive:#1fbf75;
        }
        
        body {
          background: var(--bg);
          color: var(--text);
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          overflow-x: hidden;
        }
        
        /* ========================================
           ANIMATED BACKGROUND
           ======================================== */
        
        .page-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }
        
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #6D74FF 0%, #764ba2 100%);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #00f2fe 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          top: 50%;
          right: 20%;
          animation-delay: -14s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(100px, -100px) scale(1.1);
          }
          66% {
            transform: translate(-100px, 100px) scale(0.9);
          }
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(109, 116, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 116, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .shape {
          position: absolute;
          border: 2px solid rgba(109, 116, 255, 0.2);
          animation: shapeFloat 15s ease-in-out infinite;
        }
        
        .shape-1 {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          top: 60%;
          right: 15%;
          animation-delay: -5s;
        }
        
        .shape-3 {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          bottom: 15%;
          left: 20%;
          animation-delay: -10s;
        }
        
        .shape-4 {
          width: 70px;
          height: 70px;
          border-radius: 12px;
          top: 40%;
          right: 25%;
          animation-delay: -7.5s;
        }
        
        @keyframes shapeFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translate(20px, -20px) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translate(-10px, 30px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translate(30px, 10px) rotate(270deg);
            opacity: 0.4;
          }
        }
        
        /* ========================================
           PAGE ENTRANCE ANIMATIONS
           ======================================== */
        
        .account-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .account-hero.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .acct-wrap {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: 0.2s;
        }
        
        .acct-wrap.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* ========================================
           HERO SECTION
           ======================================== */
        
        .container{
          max-width:1120px;
          margin:0 auto;
          padding:0 20px;
          position: relative;
          z-index: 1;
        }
        
        .account-hero{
          padding:60px 0 40px;
          position: relative;
        }
        
        .hero-content {
          position: relative;
          text-align: center;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(109, 116, 255, 0.1);
          border: 1px solid rgba(109, 116, 255, 0.3);
          border-radius: 20px;
          color: var(--brand);
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          animation: badgePulse 2s ease-in-out infinite;
        }
        
        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(109, 116, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(109, 116, 255, 0.5);
          }
        }
        
        .headline{
          font-size:clamp(32px,5vw,52px);
          line-height:1.1;
          margin:0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .subhead{
          color:var(--muted);
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .hero-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }
        
        .decoration-wave {
          position: absolute;
          height: 100px;
          width: 100%;
          background: linear-gradient(90deg, transparent, rgba(109, 116, 255, 0.1), transparent);
          filter: blur(20px);
        }
        
        .wave-1 {
          top: 20%;
          animation: waveMove 8s ease-in-out infinite;
        }
        
        .wave-2 {
          bottom: 20%;
          animation: waveMove 8s ease-in-out infinite;
          animation-delay: -4s;
        }
        
        @keyframes waveMove {
          0%, 100% {
            transform: translateX(-50%) scaleY(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(50%) scaleY(1.2);
            opacity: 0.5;
          }
        }
        
        /* ========================================
           MAIN SECTION
           ======================================== */
        
        .section{
          padding:40px 0;
          position: relative;
        }
        
        .acct-wrap{
          display:grid;
          grid-template-columns:1.2fr .8fr;
          gap:24px;
        }
        
        /* ========================================
           PANEL STYLES (GLASSMORPHISM)
           ======================================== */
        
        .panel{
          border:1px solid rgba(255, 255, 255, 0.1);
          background: rgba(20, 21, 29, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius:20px;
          padding:32px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }
        
        .main-panel {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .side-panel {
          animation: panelSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          animation-delay: 0.15s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        @keyframes panelSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .panel-header {
          margin-bottom: 24px;
        }
        
        .section-title{
          margin:0 0 8px;
          font-size:24px;
          font-weight: 700;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .title-underline {
          height: 3px;
          width: 60px;
          background: linear-gradient(90deg, var(--brand), var(--brand-600));
          border-radius: 2px;
          animation: underlineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes underlineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 60px;
            opacity: 1;
          }
        }
        
        /* ========================================
           FORM STYLES
           ======================================== */
        
        .form{
          display:grid;
          gap:20px;
        }
        
        .field{
          display:grid;
          gap:10px;
        }
        
        label{
          font-size:14px;
          color:var(--muted);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        input{
          height:48px;
          background: rgba(23, 24, 33, 0.6);
          border:1px solid rgba(255, 255, 255, 0.1);
          border-radius:12px;
          color:var(--text);
          padding:0 16px;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        input:focus {
          outline: none;
          border-color: var(--brand);
          background: rgba(23, 24, 33, 0.8);
          box-shadow: 0 0 0 3px rgba(109, 116, 255, 0.1);
        }
        
        /* ========================================
           AVATAR SECTION
           ======================================== */
        
        .avatar-row{
          display:flex;
          align-items:center;
          gap:20px;
          padding: 20px;
          background: rgba(109, 116, 255, 0.05);
          border: 1px solid rgba(109, 116, 255, 0.1);
          border-radius: 16px;
        }
        
        .avatar-container {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .avatar{
          width:80px;
          height:80px;
          border-radius:50%;
          overflow:hidden;
          border:3px solid rgba(109, 116, 255, 0.3);
          background:var(--surface);
          position: relative;
          z-index: 3;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .avatar img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        
        .img-fallback{
          width:100%;
          height:100%;
          background:linear-gradient(135deg,rgba(109, 116, 255, 0.2),rgba(118, 75, 162, 0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand);
        }
        
        .avatar-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: var(--brand);
          border-right-color: var(--brand);
          animation: avatarRingRotate 3s linear infinite;
          z-index: 2;
        }
        
        @keyframes avatarRingRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .avatar-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(109, 116, 255, 0.3), transparent 70%);
          transform: translate(-50%, -50%);
          animation: avatarPulse 2s ease-in-out infinite;
          z-index: 1;
        }
        
        @keyframes avatarPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }
        
        .avatar-buttons{
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        
        /* ========================================
           BUTTON STYLES
           ======================================== */
        
        .btn{
          display:inline-flex;
          align-items:center;
          justify-content: center;
          gap:8px;
          border-radius:12px;
          padding:12px 18px;
          border:1px solid rgba(255, 255, 255, 0.1);
          background:var(--ghost);
          color:var(--text);
          text-decoration:none;
          cursor:pointer;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary{
          background: linear-gradient(135deg, var(--brand) 0%, var(--brand-600) 100%);
          border-color:var(--brand);
          color:white;
          box-shadow: 0 4px 12px rgba(109, 116, 255, 0.3);
        }
        
        .btn-primary:hover{
          background: linear-gradient(135deg, var(--brand-600) 0%, var(--brand-700) 100%);
          box-shadow: 0 8px 24px rgba(109, 116, 255, 0.5);
        }
        
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-secondary{
          background: rgba(35, 36, 52, 0.6);
          border-color: rgba(255, 255, 255, 0.1);
          color:var(--text);
        }
        
        .btn-secondary:hover{
          background: rgba(35, 36, 52, 0.9);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .btn-upload {
          background: rgba(109, 116, 255, 0.1);
          border-color: rgba(109, 116, 255, 0.3);
          color: var(--brand);
        }
        
        .btn-upload:hover {
          background: rgba(109, 116, 255, 0.2);
          border-color: var(--brand);
        }
        
        .spinner-icon {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .row2{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:16px;
        }
        
        /* ========================================
           ALERT STYLES
           ======================================== */
        
        .live{
          outline:none;
        }
        
        .alert{
          border-radius:12px;
          padding:14px 16px;
          margin-bottom:16px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: alertSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes alertSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .alert.success{
          border:1px solid rgba(31,191,117,.5);
          background: rgba(31,191,117,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#c7f5df;
        }
        
        .alert.error{
          border:1px solid rgba(255,93,93,.5);
          background: rgba(255,93,93,.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color:#ffc9c9;
        }
        
        /* ========================================
           RESPONSIVE STYLES
           ======================================== */
        
        @media (max-width:900px){
          .acct-wrap{
            grid-template-columns:1fr;
          }
          
          .hero-decorations {
            display: none;
          }
          
          .headline {
            font-size: 36px;
          }
          
          .subhead {
            font-size: 16px;
          }
          
          .panel {
            padding: 24px;
          }
          
          .row2 {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width:480px){
          .avatar-row {
            flex-direction: column;
            text-align: center;
          }
          
          .avatar-buttons {
            width: 100%;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}),Z&&K&&n.jsx(T5,{imageSrc:K,onSave:_,onCancel:X})]})}const nl=sessionStorage.redirect;delete sessionStorage.redirect;nl&&nl!==location.href&&history.replaceState(null,"",nl);al.createRoot(document.getElementById("root")).render(function(){return n.jsx(t0.StrictMode,{children:n.jsx(l2,{children:n.jsx($v,{children:n.jsxs(Hv,{children:[n.jsx(ly,{}),n.jsxs(Jx,{children:[n.jsxs(Te,{element:n.jsx(eb,{}),children:[n.jsx(Te,{path:"/",element:n.jsx(fp,{})}),n.jsx(Te,{path:"/home",element:n.jsx(fp,{})}),n.jsx(Te,{path:"/about",element:n.jsx(Ab,{})}),n.jsx(Te,{path:"/faq",element:n.jsx(sy,{})}),n.jsx(Te,{path:"/search",element:n.jsx(oy,{})}),n.jsx(Te,{path:"/login",element:n.jsx(qv,{})}),n.jsx(Te,{path:"/register",element:n.jsx(Vv,{})}),n.jsx(Te,{path:"/product/:slug",element:n.jsx(pr,{children:n.jsx(Wv,{})})}),n.jsx(Te,{path:"/shop",element:n.jsx(pr,{children:n.jsx(Mb,{})})}),n.jsx(Te,{path:"/contact",element:n.jsx(pr,{children:n.jsx(Ib,{})})}),n.jsx(Te,{path:"/account",element:n.jsx(pr,{children:n.jsx(M5,{})})}),n.jsx(Te,{path:"/cart",element:n.jsx(pr,{children:n.jsx(Yv,{})})}),n.jsx(Te,{path:"/checkout",element:n.jsx(pr,{children:n.jsx(Gv,{})})}),n.jsx(Te,{path:"/orders",element:n.jsx(pr,{children:n.jsx(Kv,{})})}),n.jsx(Te,{path:"/orders/:orderId",element:n.jsx(pr,{children:n.jsx(Qv,{})})})]}),n.jsxs(Te,{path:"/admin",element:n.jsx(Pb,{children:n.jsx(Tb,{})}),children:[n.jsx(Te,{index:!0,element:n.jsx(nb,{})}),n.jsx(Te,{path:"products",element:n.jsx(Eb,{})}),n.jsx(Te,{path:"users",element:n.jsx(Rb,{})}),n.jsx(Te,{path:"orders",element:n.jsx(tb,{})})]})]})]})})})})}());
