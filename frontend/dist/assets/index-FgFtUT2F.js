function Uf(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function Cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eu={exports:{}},va={},Pu={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),Bf=Symbol.for("react.portal"),Hf=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),qf=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Yf=Symbol.for("react.memo"),Xf=Symbol.for("react.lazy"),Al=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=Al&&e[Al]||e["@@iterator"],typeof e=="function"?e:null)}var Ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_u=Object.assign,zu={};function Gr(e,t,r){this.props=e,this.context=t,this.refs=zu,this.updater=r||Ru}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lu(){}Lu.prototype=Gr.prototype;function Oo(e,t,r){this.props=e,this.context=t,this.refs=zu,this.updater=r||Ru}var Mo=Oo.prototype=new Lu;Mo.constructor=Oo;_u(Mo,Gr.prototype);Mo.isPureReactComponent=!0;var Fl=Array.isArray,Tu=Object.prototype.hasOwnProperty,Ao={current:null},Ou={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,r){var n,i={},s=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Tu.call(t,n)&&!Ou.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Kn,type:e,key:s,ref:o,props:i,_owner:Ao.current}}function Gf(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function Jf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Dl=/\/+/g;function Wa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jf(""+e.key):t.toString(36)}function Ei(e,t,r,n,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case Bf:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+Wa(o,0):n,Fl(i)?(r="",e!=null&&(r=e.replace(Dl,"$&/")+"/"),Ei(i,t,r,"",function(u){return u})):i!=null&&(Fo(i)&&(i=Gf(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dl,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",Fl(e))for(var l=0;l<e.length;l++){s=e[l];var c=n+Wa(s,l);o+=Ei(s,t,r,c,i)}else if(c=Zf(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=n+Wa(s,l++),o+=Ei(s,t,r,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function si(e,t,r){if(e==null)return e;var n=[],i=0;return Ei(e,n,"","",function(s){return t.call(r,s,i++)}),n}function eh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Pi={transition:null},th={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Pi,ReactCurrentOwner:Ao};function Au(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:si,forEach:function(e,t,r){si(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!Fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Gr;V.Fragment=Hf;V.Profiler=$f;V.PureComponent=Oo;V.StrictMode=Wf;V.Suspense=Kf;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th;V.act=Au;V.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=_u({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ao.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Tu.call(t,c)&&!Ou.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:Kn,type:e.type,key:i,ref:s,props:n,_owner:o}};V.createContext=function(e){return e={$$typeof:qf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vf,_context:e},e.Consumer=e};V.createElement=Mu;V.createFactory=function(e){var t=Mu.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Qf,render:e}};V.isValidElement=Fo;V.lazy=function(e){return{$$typeof:Xf,_payload:{_status:-1,_result:e},_init:eh}};V.memo=function(e,t){return{$$typeof:Yf,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Pi.transition;Pi.transition={};try{e()}finally{Pi.transition=t}};V.unstable_act=Au;V.useCallback=function(e,t){return Oe.current.useCallback(e,t)};V.useContext=function(e){return Oe.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};V.useEffect=function(e,t){return Oe.current.useEffect(e,t)};V.useId=function(){return Oe.current.useId()};V.useImperativeHandle=function(e,t,r){return Oe.current.useImperativeHandle(e,t,r)};V.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Oe.current.useMemo(e,t)};V.useReducer=function(e,t,r){return Oe.current.useReducer(e,t,r)};V.useRef=function(e){return Oe.current.useRef(e)};V.useState=function(e){return Oe.current.useState(e)};V.useSyncExternalStore=function(e,t,r){return Oe.current.useSyncExternalStore(e,t,r)};V.useTransition=function(){return Oe.current.useTransition()};V.version="18.3.1";Pu.exports=V;var v=Pu.exports;const Fu=Cu(v),rh=Uf({__proto__:null,default:Fu},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=v,ih=Symbol.for("react.element"),ah=Symbol.for("react.fragment"),sh=Object.prototype.hasOwnProperty,oh=nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lh={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,r){var n,i={},s=null,o=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)sh.call(t,n)&&!lh.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:ih,type:e,key:s,ref:o,props:i,_owner:oh.current}}va.Fragment=ah;va.jsx=Du;va.jsxs=Du;Eu.exports=va;var a=Eu.exports,ws={},Iu={exports:{}},Ye={},Uu={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var A=C.length;C.push(T);e:for(;0<A;){var Q=A-1>>>1,G=C[Q];if(0<i(G,T))C[Q]=T,C[A]=G,A=Q;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var T=C[0],A=C.pop();if(A!==T){C[0]=A;e:for(var Q=0,G=C.length,Ze=G>>>1;Q<Ze;){var Ae=2*(Q+1)-1,Lt=C[Ae],it=Ae+1,jr=C[it];if(0>i(Lt,A))it<G&&0>i(jr,Lt)?(C[Q]=jr,C[it]=A,Q=it):(C[Q]=Lt,C[Ae]=A,Q=Ae);else if(it<G&&0>i(jr,A))C[Q]=jr,C[it]=A,Q=it;else break e}}return T}function i(C,T){var A=C.sortIndex-T.sortIndex;return A!==0?A:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,p=null,h=3,w=!1,g=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var T=r(u);T!==null;){if(T.callback===null)n(u);else if(T.startTime<=C)n(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=r(u)}}function j(C){if(y=!1,m(C),!g)if(r(c)!==null)g=!0,q(N);else{var T=r(u);T!==null&&ve(j,T.startTime-C)}}function N(C,T){g=!1,y&&(y=!1,x(z),z=-1),w=!0;var A=h;try{for(m(T),p=r(c);p!==null&&(!(p.expirationTime>T)||C&&!X());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,h=p.priorityLevel;var G=Q(p.expirationTime<=T);T=e.unstable_now(),typeof G=="function"?p.callback=G:p===r(c)&&n(c),m(T)}else n(c);p=r(c)}if(p!==null)var Ze=!0;else{var Ae=r(u);Ae!==null&&ve(j,Ae.startTime-T),Ze=!1}return Ze}finally{p=null,h=A,w=!1}}var E=!1,R=null,z=-1,W=5,M=-1;function X(){return!(e.unstable_now()-M<W)}function U(){if(R!==null){var C=e.unstable_now();M=C;var T=!0;try{T=R(!0,C)}finally{T?me():(E=!1,R=null)}}else E=!1}var me;if(typeof f=="function")me=function(){f(U)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,L=ze.port2;ze.port1.onmessage=U,me=function(){L.postMessage(null)}}else me=function(){b(U,0)};function q(C){R=C,E||(E=!0,me())}function ve(C,T){z=b(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||w||(g=!0,q(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var A=h;h=T;try{return C()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=h;h=C;try{return T()}finally{h=A}},e.unstable_scheduleCallback=function(C,T,A){var Q=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Q+A:Q):A=Q,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=A+G,C={id:d++,callback:T,priorityLevel:C,startTime:A,expirationTime:G,sortIndex:-1},A>Q?(C.sortIndex=A,t(u,C),r(c)===null&&C===r(u)&&(y?(x(z),z=-1):y=!0,ve(j,A-Q))):(C.sortIndex=G,t(c,C),g||w||(g=!0,q(N))),C},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(C){var T=h;return function(){var A=h;h=T;try{return C.apply(this,arguments)}finally{h=A}}}})(Bu);Uu.exports=Bu;var ch=Uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=v,Ke=ch;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hu=new Set,Rn={};function vr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(Rn[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),js=Object.prototype.hasOwnProperty,dh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Il={},Ul={};function ph(e){return js.call(Ul,e)?!0:js.call(Il,e)?!1:dh.test(e)?Ul[e]=!0:(Il[e]=!0,!1)}function fh(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hh(e,t,r,n){if(t===null||typeof t>"u"||fh(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,r,n,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Do=/[\-:]([a-z])/g;function Io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Do,Io);Se[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Do,Io);Se[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Do,Io);Se[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uo(e,t,r,n){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hh(t,r,i,n)&&(r=null),n||i===null?ph(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var _t=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),Bo=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),$u=Symbol.for("react.context"),Ho=Symbol.for("react.forward_ref"),ks=Symbol.for("react.suspense"),Ns=Symbol.for("react.suspense_list"),Wo=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),Bl=Symbol.iterator;function sn(e){return e===null||typeof e!="object"?null:(e=Bl&&e[Bl]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,$a;function gn(e){if($a===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);$a=t&&t[1]||""}return`
`+$a+e}var Va=!1;function qa(e,t){if(!e||Va)return"";Va=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=n.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Va=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?gn(e):""}function mh(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=qa(e.type,!1),e;case 11:return e=qa(e.type.render,!1),e;case 1:return e=qa(e.type,!0),e;default:return""}}function Ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case Nr:return"Portal";case bs:return"Profiler";case Bo:return"StrictMode";case ks:return"Suspense";case Ns:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $u:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case Ho:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wo:return t=e.displayName||null,t!==null?t:Ss(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return Ss(e(t))}catch{}}return null}function gh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ss(t);case 8:return t===Bo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xh(e){var t=qu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=xh(e))}function Qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=qu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cs(e,t){var r=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Xt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ku(e,t){t=t.checked,t!=null&&Uo(e,"checked",t,!1)}function Es(e,t){Ku(e,t);var r=Xt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ps(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ps(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ps(e,t,r){(t!=="number"||Vi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var xn=Array.isArray;function Ar(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Xt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $l(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(P(92));if(xn(r)){if(1<r.length)throw Error(P(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Xt(r)}}function Yu(e,t){var r=Xt(t.value),n=Xt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Vl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ci,Zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ci=ci||document.createElement("div"),ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _n(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vh=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function Gu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function Ju(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Gu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var yh=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zs(e,t){if(t){if(yh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Ls(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Fr=null,Dr=null;function ql(e){if(e=Zn(e)){if(typeof Os!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ka(t),Os(e.stateNode,e.type,t))}}function ed(e){Fr?Dr?Dr.push(e):Dr=[e]:Fr=e}function td(){if(Fr){var e=Fr,t=Dr;if(Dr=Fr=null,ql(e),t)for(e=0;e<t.length;e++)ql(t[e])}}function rd(e,t){return e(t)}function nd(){}var Qa=!1;function id(e,t,r){if(Qa)return e(t,r);Qa=!0;try{return rd(e,t,r)}finally{Qa=!1,(Fr!==null||Dr!==null)&&(nd(),td())}}function zn(e,t){var r=e.stateNode;if(r===null)return null;var n=ka(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(P(231,t,typeof r));return r}var Ms=!1;if(Ct)try{var on={};Object.defineProperty(on,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{Ms=!1}function wh(e,t,r,n,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var jn=!1,qi=null,Qi=!1,As=null,jh={onError:function(e){jn=!0,qi=e}};function bh(e,t,r,n,i,s,o,l,c){jn=!1,qi=null,wh.apply(jh,arguments)}function kh(e,t,r,n,i,s,o,l,c){if(bh.apply(this,arguments),jn){if(jn){var u=qi;jn=!1,qi=null}else throw Error(P(198));Qi||(Qi=!0,As=u)}}function yr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ql(e){if(yr(e)!==e)throw Error(P(188))}function Nh(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Ql(i),e;if(s===n)return Ql(i),t;s=s.sibling}throw Error(P(188))}if(r.return!==n.return)r=i,n=s;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,n=s;break}if(l===n){o=!0,n=i,r=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===r){o=!0,r=s,n=i;break}if(l===n){o=!0,n=s,r=i;break}l=l.sibling}if(!o)throw Error(P(189))}}if(r.alternate!==n)throw Error(P(190))}if(r.tag!==3)throw Error(P(188));return r.stateNode.current===r?e:t}function sd(e){return e=Nh(e),e!==null?od(e):null}function od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=od(e);if(t!==null)return t;e=e.sibling}return null}var ld=Ke.unstable_scheduleCallback,Kl=Ke.unstable_cancelCallback,Sh=Ke.unstable_shouldYield,Ch=Ke.unstable_requestPaint,fe=Ke.unstable_now,Eh=Ke.unstable_getCurrentPriorityLevel,Vo=Ke.unstable_ImmediatePriority,cd=Ke.unstable_UserBlockingPriority,Ki=Ke.unstable_NormalPriority,Ph=Ke.unstable_LowPriority,ud=Ke.unstable_IdlePriority,ya=null,vt=null;function Rh(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ya,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Lh,_h=Math.log,zh=Math.LN2;function Lh(e){return e>>>=0,e===0?32:31-(_h(e)/zh|0)|0}var ui=64,di=4194304;function vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~i;l!==0?n=vn(l):(s&=o,s!==0&&(n=vn(s)))}else o=r&~i,o!==0?n=vn(o):s!==0&&(n=vn(s));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ct(t),i=1<<r,n|=e[r],t&=~i;return n}function Th(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oh(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-ct(s),l=1<<o,c=i[o];c===-1?(!(l&r)||l&n)&&(i[o]=Th(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Fs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dd(){var e=ui;return ui<<=1,!(ui&4194240)&&(ui=64),e}function Ka(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Yn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=r}function Mh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ct(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function qo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ct(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var Z=0;function pd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fd,Qo,hd,md,gd,Ds=!1,pi=[],Bt=null,Ht=null,Wt=null,Ln=new Map,Tn=new Map,At=[],Ah="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yl(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function ln(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Zn(t),t!==null&&Qo(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fh(e,t,r,n,i){switch(t){case"focusin":return Bt=ln(Bt,e,t,r,n,i),!0;case"dragenter":return Ht=ln(Ht,e,t,r,n,i),!0;case"mouseover":return Wt=ln(Wt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return Ln.set(s,ln(Ln.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Tn.set(s,ln(Tn.get(s)||null,e,t,r,n,i)),!0}return!1}function xd(e){var t=ar(e.target);if(t!==null){var r=yr(t);if(r!==null){if(t=r.tag,t===13){if(t=ad(r),t!==null){e.blockedOn=t,gd(e.priority,function(){hd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ts=n,r.target.dispatchEvent(n),Ts=null}else return t=Zn(r),t!==null&&Qo(t),e.blockedOn=r,!1;t.shift()}return!0}function Xl(e,t,r){Ri(e)&&r.delete(t)}function Dh(){Ds=!1,Bt!==null&&Ri(Bt)&&(Bt=null),Ht!==null&&Ri(Ht)&&(Ht=null),Wt!==null&&Ri(Wt)&&(Wt=null),Ln.forEach(Xl),Tn.forEach(Xl)}function cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ds||(Ds=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Dh)))}function On(e){function t(i){return cn(i,e)}if(0<pi.length){cn(pi[0],e);for(var r=1;r<pi.length;r++){var n=pi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Bt!==null&&cn(Bt,e),Ht!==null&&cn(Ht,e),Wt!==null&&cn(Wt,e),Ln.forEach(t),Tn.forEach(t),r=0;r<At.length;r++)n=At[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<At.length&&(r=At[0],r.blockedOn===null);)xd(r),r.blockedOn===null&&At.shift()}var Ir=_t.ReactCurrentBatchConfig,Xi=!0;function Ih(e,t,r,n){var i=Z,s=Ir.transition;Ir.transition=null;try{Z=1,Ko(e,t,r,n)}finally{Z=i,Ir.transition=s}}function Uh(e,t,r,n){var i=Z,s=Ir.transition;Ir.transition=null;try{Z=4,Ko(e,t,r,n)}finally{Z=i,Ir.transition=s}}function Ko(e,t,r,n){if(Xi){var i=Is(e,t,r,n);if(i===null)is(e,t,n,Zi,r),Yl(e,n);else if(Fh(i,e,t,r,n))n.stopPropagation();else if(Yl(e,n),t&4&&-1<Ah.indexOf(e)){for(;i!==null;){var s=Zn(i);if(s!==null&&fd(s),s=Is(e,t,r,n),s===null&&is(e,t,n,Zi,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else is(e,t,n,null,r)}}var Zi=null;function Is(e,t,r,n){if(Zi=null,e=$o(n),e=ar(e),e!==null)if(t=yr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ad(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zi=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eh()){case Vo:return 1;case cd:return 4;case Ki:case Ph:return 16;case ud:return 536870912;default:return 16}default:return 16}}var Dt=null,Yo=null,_i=null;function yd(){if(_i)return _i;var e,t=Yo,r=t.length,n,i="value"in Dt?Dt.value:Dt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[s-n];n++);return _i=i.slice(e,1<n?1-n:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fi(){return!0}function Zl(){return!1}function Xe(e){function t(r,n,i,s,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fi:Zl,this.isPropagationStopped=Zl,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),t}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Xe(Jr),Xn=ue({},Jr,{view:0,detail:0}),Bh=Xe(Xn),Ya,Xa,un,wa=ue({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==un&&(un&&e.type==="mousemove"?(Ya=e.screenX-un.screenX,Xa=e.screenY-un.screenY):Xa=Ya=0,un=e),Ya)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),Gl=Xe(wa),Hh=ue({},wa,{dataTransfer:0}),Wh=Xe(Hh),$h=ue({},Xn,{relatedTarget:0}),Za=Xe($h),Vh=ue({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=Xe(Vh),Qh=ue({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kh=Xe(Qh),Yh=ue({},Jr,{data:0}),Jl=Xe(Yh),Xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gh[e])?!!t[e]:!1}function Zo(){return Jh}var em=ue({},Xn,{key:function(e){if(e.key){var t=Xh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zo,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tm=Xe(em),rm=ue({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=Xe(rm),nm=ue({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zo}),im=Xe(nm),am=ue({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sm=Xe(am),om=ue({},wa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lm=Xe(om),cm=[9,13,27,32],Go=Ct&&"CompositionEvent"in window,bn=null;Ct&&"documentMode"in document&&(bn=document.documentMode);var um=Ct&&"TextEvent"in window&&!bn,wd=Ct&&(!Go||bn&&8<bn&&11>=bn),tc=" ",rc=!1;function jd(e,t){switch(e){case"keyup":return cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function dm(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(rc=!0,tc);case"textInput":return e=t.data,e===tc&&rc?null:e;default:return null}}function pm(e,t){if(Cr)return e==="compositionend"||!Go&&jd(e,t)?(e=yd(),_i=Yo=Dt=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wd&&t.locale!=="ko"?null:t.data;default:return null}}var fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fm[e.type]:t==="textarea"}function kd(e,t,r,n){ed(n),t=Gi(t,"onChange"),0<t.length&&(r=new Xo("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var kn=null,Mn=null;function hm(e){Od(e,0)}function ja(e){var t=Rr(e);if(Qu(t))return e}function mm(e,t){if(e==="change")return t}var Nd=!1;if(Ct){var Ga;if(Ct){var Ja="oninput"in document;if(!Ja){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),Ja=typeof ic.oninput=="function"}Ga=Ja}else Ga=!1;Nd=Ga&&(!document.documentMode||9<document.documentMode)}function ac(){kn&&(kn.detachEvent("onpropertychange",Sd),Mn=kn=null)}function Sd(e){if(e.propertyName==="value"&&ja(Mn)){var t=[];kd(t,Mn,e,$o(e)),id(hm,t)}}function gm(e,t,r){e==="focusin"?(ac(),kn=t,Mn=r,kn.attachEvent("onpropertychange",Sd)):e==="focusout"&&ac()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(Mn)}function vm(e,t){if(e==="click")return ja(t)}function ym(e,t){if(e==="input"||e==="change")return ja(t)}function wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:wm;function An(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!js.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oc(e,t){var r=sc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=sc(r)}}function Cd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ed(){for(var e=window,t=Vi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Vi(e.document)}return t}function Jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jm(e){var t=Ed(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Cd(r.ownerDocument.documentElement,r)){if(n!==null&&Jo(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=oc(r,s);var o=oc(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bm=Ct&&"documentMode"in document&&11>=document.documentMode,Er=null,Us=null,Nn=null,Bs=!1;function lc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Bs||Er==null||Er!==Vi(n)||(n=Er,"selectionStart"in n&&Jo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Nn&&An(Nn,n)||(Nn=n,n=Gi(Us,"onSelect"),0<n.length&&(t=new Xo("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Er)))}function hi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Pr={animationend:hi("Animation","AnimationEnd"),animationiteration:hi("Animation","AnimationIteration"),animationstart:hi("Animation","AnimationStart"),transitionend:hi("Transition","TransitionEnd")},es={},Pd={};Ct&&(Pd=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function ba(e){if(es[e])return es[e];if(!Pr[e])return e;var t=Pr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Pd)return es[e]=t[r];return e}var Rd=ba("animationend"),_d=ba("animationiteration"),zd=ba("animationstart"),Ld=ba("transitionend"),Td=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Td.set(e,t),vr(t,[e])}for(var ts=0;ts<cc.length;ts++){var rs=cc[ts],km=rs.toLowerCase(),Nm=rs[0].toUpperCase()+rs.slice(1);Gt(km,"on"+Nm)}Gt(Rd,"onAnimationEnd");Gt(_d,"onAnimationIteration");Gt(zd,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Ld,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(yn));function uc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,kh(n,t,void 0,e),e.currentTarget=null}function Od(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var l=n[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;uc(i,l,u),s=c}else for(o=0;o<n.length;o++){if(l=n[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;uc(i,l,u),s=c}}}if(Qi)throw e=As,Qi=!1,As=null,e}function te(e,t){var r=t[qs];r===void 0&&(r=t[qs]=new Set);var n=e+"__bubble";r.has(n)||(Md(t,e,2,!1),r.add(n))}function ns(e,t,r){var n=0;t&&(n|=4),Md(r,e,n,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[mi]){e[mi]=!0,Hu.forEach(function(r){r!=="selectionchange"&&(Sm.has(r)||ns(r,!1,e),ns(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,ns("selectionchange",!1,t))}}function Md(e,t,r,n){switch(vd(t)){case 1:var i=Ih;break;case 4:i=Uh;break;default:i=Ko}r=i.bind(null,t,r,e),i=void 0,!Ms||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function is(e,t,r,n,i){var s=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ar(l),o===null)return;if(c=o.tag,c===5||c===6){n=s=o;continue e}l=l.parentNode}}n=n.return}id(function(){var u=s,d=$o(r),p=[];e:{var h=Td.get(e);if(h!==void 0){var w=Xo,g=e;switch(e){case"keypress":if(zi(r)===0)break e;case"keydown":case"keyup":w=tm;break;case"focusin":g="focus",w=Za;break;case"focusout":g="blur",w=Za;break;case"beforeblur":case"afterblur":w=Za;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=im;break;case Rd:case _d:case zd:w=qh;break;case Ld:w=sm;break;case"scroll":w=Bh;break;case"wheel":w=lm;break;case"copy":case"cut":case"paste":w=Kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ec}var y=(t&4)!==0,b=!y&&e==="scroll",x=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,x!==null&&(j=zn(f,x),j!=null&&y.push(Dn(f,j,m)))),b)break;f=f.return}0<y.length&&(h=new w(h,g,null,r,d),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&r!==Ts&&(g=r.relatedTarget||r.fromElement)&&(ar(g)||g[Et]))break e;if((w||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,w?(g=r.relatedTarget||r.toElement,w=u,g=g?ar(g):null,g!==null&&(b=yr(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(w=null,g=u),w!==g)){if(y=Gl,j="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=ec,j="onPointerLeave",x="onPointerEnter",f="pointer"),b=w==null?h:Rr(w),m=g==null?h:Rr(g),h=new y(j,f+"leave",w,r,d),h.target=b,h.relatedTarget=m,j=null,ar(d)===u&&(y=new y(x,f+"enter",g,r,d),y.target=m,y.relatedTarget=b,j=y),b=j,w&&g)t:{for(y=w,x=g,f=0,m=y;m;m=br(m))f++;for(m=0,j=x;j;j=br(j))m++;for(;0<f-m;)y=br(y),f--;for(;0<m-f;)x=br(x),m--;for(;f--;){if(y===x||x!==null&&y===x.alternate)break t;y=br(y),x=br(x)}y=null}else y=null;w!==null&&dc(p,h,w,y,!1),g!==null&&b!==null&&dc(p,b,g,y,!0)}}e:{if(h=u?Rr(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var N=mm;else if(nc(h))if(Nd)N=ym;else{N=xm;var E=gm}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=vm);if(N&&(N=N(e,u))){kd(p,N,r,d);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Ps(h,"number",h.value)}switch(E=u?Rr(u):window,e){case"focusin":(nc(E)||E.contentEditable==="true")&&(Er=E,Us=u,Nn=null);break;case"focusout":Nn=Us=Er=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,lc(p,r,d);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":lc(p,r,d)}var R;if(Go)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Cr?jd(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(wd&&r.locale!=="ko"&&(Cr||z!=="onCompositionStart"?z==="onCompositionEnd"&&Cr&&(R=yd()):(Dt=d,Yo="value"in Dt?Dt.value:Dt.textContent,Cr=!0)),E=Gi(u,z),0<E.length&&(z=new Jl(z,e,null,r,d),p.push({event:z,listeners:E}),R?z.data=R:(R=bd(r),R!==null&&(z.data=R)))),(R=um?dm(e,r):pm(e,r))&&(u=Gi(u,"onBeforeInput"),0<u.length&&(d=new Jl("onBeforeInput","beforeinput",null,r,d),p.push({event:d,listeners:u}),d.data=R))}Od(p,t)})}function Dn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Gi(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zn(e,r),s!=null&&n.unshift(Dn(e,s,i)),s=zn(e,t),s!=null&&n.push(Dn(e,s,i))),e=e.return}return n}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dc(e,t,r,n,i){for(var s=t._reactName,o=[];r!==null&&r!==n;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&u!==null&&(l=u,i?(c=zn(r,s),c!=null&&o.unshift(Dn(r,c,l))):i||(c=zn(r,s),c!=null&&o.push(Dn(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Cm=/\r\n?/g,Em=/\u0000|\uFFFD/g;function pc(e){return(typeof e=="string"?e:""+e).replace(Cm,`
`).replace(Em,"")}function gi(e,t,r){if(t=pc(t),pc(e)!==t&&r)throw Error(P(425))}function Ji(){}var Hs=null,Ws=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,fc=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof fc<"u"?function(e){return fc.resolve(null).then(e).catch(_m)}:Vs;function _m(e){setTimeout(function(){throw e})}function as(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),On(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);On(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var en=Math.random().toString(36).slice(2),xt="__reactFiber$"+en,In="__reactProps$"+en,Et="__reactContainer$"+en,qs="__reactEvents$"+en,zm="__reactListeners$"+en,Lm="__reactHandles$"+en;function ar(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Et]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=hc(e);e!==null;){if(r=e[xt])return r;e=hc(e)}return t}e=r,r=e.parentNode}return null}function Zn(e){return e=e[xt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ka(e){return e[In]||null}var Qs=[],_r=-1;function Jt(e){return{current:e}}function re(e){0>_r||(e.current=Qs[_r],Qs[_r]=null,_r--)}function ee(e,t){_r++,Qs[_r]=e.current,e.current=t}var Zt={},_e=Jt(Zt),Ue=Jt(!1),pr=Zt;function Wr(e,t){var r=e.type.contextTypes;if(!r)return Zt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function ea(){re(Ue),re(_e)}function mc(e,t,r){if(_e.current!==Zt)throw Error(P(168));ee(_e,t),ee(Ue,r)}function Ad(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(P(108,gh(e)||"Unknown",i));return ue({},r,n)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,pr=_e.current,ee(_e,e),ee(Ue,Ue.current),!0}function gc(e,t,r){var n=e.stateNode;if(!n)throw Error(P(169));r?(e=Ad(e,t,pr),n.__reactInternalMemoizedMergedChildContext=e,re(Ue),re(_e),ee(_e,e)):re(Ue),ee(Ue,r)}var bt=null,Na=!1,ss=!1;function Fd(e){bt===null?bt=[e]:bt.push(e)}function Tm(e){Na=!0,Fd(e)}function er(){if(!ss&&bt!==null){ss=!0;var e=0,t=Z;try{var r=bt;for(Z=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}bt=null,Na=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),ld(Vo,er),i}finally{Z=t,ss=!1}}return null}var zr=[],Lr=0,ra=null,na=0,Ge=[],Je=0,fr=null,kt=1,Nt="";function rr(e,t){zr[Lr++]=na,zr[Lr++]=ra,ra=e,na=t}function Dd(e,t,r){Ge[Je++]=kt,Ge[Je++]=Nt,Ge[Je++]=fr,fr=e;var n=kt;e=Nt;var i=32-ct(n)-1;n&=~(1<<i),r+=1;var s=32-ct(t)+i;if(30<s){var o=i-i%5;s=(n&(1<<o)-1).toString(32),n>>=o,i-=o,kt=1<<32-ct(t)+i|r<<i|n,Nt=s+e}else kt=1<<s|r<<i|n,Nt=e}function el(e){e.return!==null&&(rr(e,1),Dd(e,1,0))}function tl(e){for(;e===ra;)ra=zr[--Lr],zr[Lr]=null,na=zr[--Lr],zr[Lr]=null;for(;e===fr;)fr=Ge[--Je],Ge[Je]=null,Nt=Ge[--Je],Ge[Je]=null,kt=Ge[--Je],Ge[Je]=null}var Qe=null,qe=null,ne=!1,lt=null;function Id(e,t){var r=et(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function xc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,qe=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=fr!==null?{id:kt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=et(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Qe=e,qe=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ys(e){if(ne){var t=qe;if(t){var r=t;if(!xc(e,t)){if(Ks(e))throw Error(P(418));t=$t(r.nextSibling);var n=Qe;t&&xc(e,t)?Id(n,r):(e.flags=e.flags&-4097|2,ne=!1,Qe=e)}}else{if(Ks(e))throw Error(P(418));e.flags=e.flags&-4097|2,ne=!1,Qe=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function xi(e){if(e!==Qe)return!1;if(!ne)return vc(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=qe)){if(Ks(e))throw Ud(),Error(P(418));for(;t;)Id(e,t),t=$t(t.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){qe=$t(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Qe?$t(e.stateNode.nextSibling):null;return!0}function Ud(){for(var e=qe;e;)e=$t(e.nextSibling)}function $r(){qe=Qe=null,ne=!1}function rl(e){lt===null?lt=[e]:lt.push(e)}var Om=_t.ReactCurrentBatchConfig;function dn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(P(309));var n=r.stateNode}if(!n)throw Error(P(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!r._owner)throw Error(P(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yc(e){var t=e._init;return t(e._payload)}function Bd(e){function t(x,f){if(e){var m=x.deletions;m===null?(x.deletions=[f],x.flags|=16):m.push(f)}}function r(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function n(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function i(x,f){return x=Kt(x,f),x.index=0,x.sibling=null,x}function s(x,f,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<f?(x.flags|=2,f):m):(x.flags|=2,f)):(x.flags|=1048576,f)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,f,m,j){return f===null||f.tag!==6?(f=fs(m,x.mode,j),f.return=x,f):(f=i(f,m),f.return=x,f)}function c(x,f,m,j){var N=m.type;return N===Sr?d(x,f,m.props.children,j,m.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ot&&yc(N)===f.type)?(j=i(f,m.props),j.ref=dn(x,f,m),j.return=x,j):(j=Di(m.type,m.key,m.props,null,x.mode,j),j.ref=dn(x,f,m),j.return=x,j)}function u(x,f,m,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=hs(m,x.mode,j),f.return=x,f):(f=i(f,m.children||[]),f.return=x,f)}function d(x,f,m,j,N){return f===null||f.tag!==7?(f=ur(m,x.mode,j,N),f.return=x,f):(f=i(f,m),f.return=x,f)}function p(x,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fs(""+f,x.mode,m),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oi:return m=Di(f.type,f.key,f.props,null,x.mode,m),m.ref=dn(x,null,f),m.return=x,m;case Nr:return f=hs(f,x.mode,m),f.return=x,f;case Ot:var j=f._init;return p(x,j(f._payload),m)}if(xn(f)||sn(f))return f=ur(f,x.mode,m,null),f.return=x,f;vi(x,f)}return null}function h(x,f,m,j){var N=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:l(x,f,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:return m.key===N?c(x,f,m,j):null;case Nr:return m.key===N?u(x,f,m,j):null;case Ot:return N=m._init,h(x,f,N(m._payload),j)}if(xn(m)||sn(m))return N!==null?null:d(x,f,m,j,null);vi(x,m)}return null}function w(x,f,m,j,N){if(typeof j=="string"&&j!==""||typeof j=="number")return x=x.get(m)||null,l(f,x,""+j,N);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case oi:return x=x.get(j.key===null?m:j.key)||null,c(f,x,j,N);case Nr:return x=x.get(j.key===null?m:j.key)||null,u(f,x,j,N);case Ot:var E=j._init;return w(x,f,m,E(j._payload),N)}if(xn(j)||sn(j))return x=x.get(m)||null,d(f,x,j,N,null);vi(f,j)}return null}function g(x,f,m,j){for(var N=null,E=null,R=f,z=f=0,W=null;R!==null&&z<m.length;z++){R.index>z?(W=R,R=null):W=R.sibling;var M=h(x,R,m[z],j);if(M===null){R===null&&(R=W);break}e&&R&&M.alternate===null&&t(x,R),f=s(M,f,z),E===null?N=M:E.sibling=M,E=M,R=W}if(z===m.length)return r(x,R),ne&&rr(x,z),N;if(R===null){for(;z<m.length;z++)R=p(x,m[z],j),R!==null&&(f=s(R,f,z),E===null?N=R:E.sibling=R,E=R);return ne&&rr(x,z),N}for(R=n(x,R);z<m.length;z++)W=w(R,x,z,m[z],j),W!==null&&(e&&W.alternate!==null&&R.delete(W.key===null?z:W.key),f=s(W,f,z),E===null?N=W:E.sibling=W,E=W);return e&&R.forEach(function(X){return t(x,X)}),ne&&rr(x,z),N}function y(x,f,m,j){var N=sn(m);if(typeof N!="function")throw Error(P(150));if(m=N.call(m),m==null)throw Error(P(151));for(var E=N=null,R=f,z=f=0,W=null,M=m.next();R!==null&&!M.done;z++,M=m.next()){R.index>z?(W=R,R=null):W=R.sibling;var X=h(x,R,M.value,j);if(X===null){R===null&&(R=W);break}e&&R&&X.alternate===null&&t(x,R),f=s(X,f,z),E===null?N=X:E.sibling=X,E=X,R=W}if(M.done)return r(x,R),ne&&rr(x,z),N;if(R===null){for(;!M.done;z++,M=m.next())M=p(x,M.value,j),M!==null&&(f=s(M,f,z),E===null?N=M:E.sibling=M,E=M);return ne&&rr(x,z),N}for(R=n(x,R);!M.done;z++,M=m.next())M=w(R,x,z,M.value,j),M!==null&&(e&&M.alternate!==null&&R.delete(M.key===null?z:M.key),f=s(M,f,z),E===null?N=M:E.sibling=M,E=M);return e&&R.forEach(function(U){return t(x,U)}),ne&&rr(x,z),N}function b(x,f,m,j){if(typeof m=="object"&&m!==null&&m.type===Sr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case oi:e:{for(var N=m.key,E=f;E!==null;){if(E.key===N){if(N=m.type,N===Sr){if(E.tag===7){r(x,E.sibling),f=i(E,m.props.children),f.return=x,x=f;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ot&&yc(N)===E.type){r(x,E.sibling),f=i(E,m.props),f.ref=dn(x,E,m),f.return=x,x=f;break e}r(x,E);break}else t(x,E);E=E.sibling}m.type===Sr?(f=ur(m.props.children,x.mode,j,m.key),f.return=x,x=f):(j=Di(m.type,m.key,m.props,null,x.mode,j),j.ref=dn(x,f,m),j.return=x,x=j)}return o(x);case Nr:e:{for(E=m.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){r(x,f.sibling),f=i(f,m.children||[]),f.return=x,x=f;break e}else{r(x,f);break}else t(x,f);f=f.sibling}f=hs(m,x.mode,j),f.return=x,x=f}return o(x);case Ot:return E=m._init,b(x,f,E(m._payload),j)}if(xn(m))return g(x,f,m,j);if(sn(m))return y(x,f,m,j);vi(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(r(x,f.sibling),f=i(f,m),f.return=x,x=f):(r(x,f),f=fs(m,x.mode,j),f.return=x,x=f),o(x)):r(x,f)}return b}var Vr=Bd(!0),Hd=Bd(!1),ia=Jt(null),aa=null,Tr=null,nl=null;function il(){nl=Tr=aa=null}function al(e){var t=ia.current;re(ia),e._currentValue=t}function Xs(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ur(e,t){aa=e,nl=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(nl!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(aa===null)throw Error(P(308));Tr=e,aa.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var sr=null;function sl(e){sr===null?sr=[e]:sr.push(e)}function Wd(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,sl(t)):(r.next=i.next,i.next=r),t.interleaved=r,Pt(e,n)}function Pt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mt=!1;function ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Y&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Pt(e,r)}return i=n.interleaved,i===null?(t.next=t,sl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Pt(e,r)}function Li(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,qo(e,r)}}function wc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=o:s=s.next=o,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function sa(e,t,r,n){var i=e.updateQueue;Mt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,d=u=c=null,l=s;do{var h=l.lane,w=l.eventTime;if((n&h)===h){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,y=l;switch(h=t,w=r,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(w,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(w,p,h):g,h==null)break e;p=ue({},p,h);break e;case 2:Mt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=p):d=d.next=w,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);mr|=o,e.lanes=o,e.memoizedState=p}}function jc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(P(191,i));i.call(n)}}}var Gn={},yt=Jt(Gn),Un=Jt(Gn),Bn=Jt(Gn);function or(e){if(e===Gn)throw Error(P(174));return e}function ll(e,t){switch(ee(Bn,t),ee(Un,e),ee(yt,Gn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_s(t,e)}re(yt),ee(yt,t)}function qr(){re(yt),re(Un),re(Bn)}function Vd(e){or(Bn.current);var t=or(yt.current),r=_s(t,e.type);t!==r&&(ee(Un,e),ee(yt,r))}function cl(e){Un.current===e&&(re(yt),re(Un))}var oe=Jt(0);function oa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var os=[];function ul(){for(var e=0;e<os.length;e++)os[e]._workInProgressVersionPrimary=null;os.length=0}var Ti=_t.ReactCurrentDispatcher,ls=_t.ReactCurrentBatchConfig,hr=0,le=null,ge=null,we=null,la=!1,Sn=!1,Hn=0,Mm=0;function Ce(){throw Error(P(321))}function dl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!dt(e[r],t[r]))return!1;return!0}function pl(e,t,r,n,i,s){if(hr=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ti.current=e===null||e.memoizedState===null?Im:Um,e=r(n,i),Sn){s=0;do{if(Sn=!1,Hn=0,25<=s)throw Error(P(301));s+=1,we=ge=null,t.updateQueue=null,Ti.current=Bm,e=r(n,i)}while(Sn)}if(Ti.current=ca,t=ge!==null&&ge.next!==null,hr=0,we=ge=le=null,la=!1,t)throw Error(P(300));return e}function fl(){var e=Hn!==0;return Hn=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function nt(){if(ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?le.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(P(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function Wn(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=nt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=ge,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((hr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=n):c=c.next=p,le.lanes|=d,mr|=d}u=u.next}while(u!==null&&u!==s);c===null?o=n:c.next=l,dt(n,t.memoizedState)||(Ie=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,le.lanes|=s,mr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function us(e){var t=nt(),r=t.queue;if(r===null)throw Error(P(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);dt(s,t.memoizedState)||(Ie=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function qd(){}function Qd(e,t){var r=le,n=nt(),i=t(),s=!dt(n.memoizedState,i);if(s&&(n.memoizedState=i,Ie=!0),n=n.queue,hl(Xd.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(r.flags|=2048,$n(9,Yd.bind(null,r,n,i,t),void 0,null),je===null)throw Error(P(349));hr&30||Kd(r,t,i)}return i}function Kd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Yd(e,t,r,n){t.value=r,t.getSnapshot=n,Zd(t)&&Gd(e)}function Xd(e,t,r){return r(function(){Zd(t)&&Gd(e)})}function Zd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!dt(e,r)}catch{return!0}}function Gd(e){var t=Pt(e,1);t!==null&&ut(t,e,1,-1)}function bc(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},t.queue=e,e=e.dispatch=Dm.bind(null,le,e),[t.memoizedState,e]}function $n(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Jd(){return nt().memoizedState}function Oi(e,t,r,n){var i=gt();le.flags|=e,i.memoizedState=$n(1|t,r,void 0,n===void 0?null:n)}function Sa(e,t,r,n){var i=nt();n=n===void 0?null:n;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,n!==null&&dl(n,o.deps)){i.memoizedState=$n(t,r,s,n);return}}le.flags|=e,i.memoizedState=$n(1|t,r,s,n)}function kc(e,t){return Oi(8390656,8,e,t)}function hl(e,t){return Sa(2048,8,e,t)}function ep(e,t){return Sa(4,2,e,t)}function tp(e,t){return Sa(4,4,e,t)}function rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function np(e,t,r){return r=r!=null?r.concat([e]):null,Sa(4,4,rp.bind(null,t,e),r)}function ml(){}function ip(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&dl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ap(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&dl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function sp(e,t,r){return hr&21?(dt(r,t)||(r=dd(),le.lanes|=r,mr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=r)}function Am(e,t){var r=Z;Z=r!==0&&4>r?r:4,e(!0);var n=ls.transition;ls.transition={};try{e(!1),t()}finally{Z=r,ls.transition=n}}function op(){return nt().memoizedState}function Fm(e,t,r){var n=Qt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},lp(e))cp(t,r);else if(r=Wd(e,t,r,n),r!==null){var i=Te();ut(r,e,n,i),up(r,t,n)}}function Dm(e,t,r){var n=Qt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(lp(e))cp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,r);if(i.hasEagerState=!0,i.eagerState=l,dt(l,o)){var c=t.interleaved;c===null?(i.next=i,sl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Wd(e,t,i,n),r!==null&&(i=Te(),ut(r,e,n,i),up(r,t,n))}}function lp(e){var t=e.alternate;return e===le||t!==null&&t===le}function cp(e,t){Sn=la=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function up(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,qo(e,r)}}var ca={readContext:rt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Im={readContext:rt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:kc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Oi(4194308,4,rp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var r=gt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=gt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Fm.bind(null,le,e),[n.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:ml,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=Am.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=le,i=gt();if(ne){if(r===void 0)throw Error(P(407));r=r()}else{if(r=t(),je===null)throw Error(P(349));hr&30||Kd(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,kc(Xd.bind(null,n,s,e),[e]),n.flags|=2048,$n(9,Yd.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=gt(),t=je.identifierPrefix;if(ne){var r=Nt,n=kt;r=(n&~(1<<32-ct(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Mm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Um={readContext:rt,useCallback:ip,useContext:rt,useEffect:hl,useImperativeHandle:np,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ap,useReducer:cs,useRef:Jd,useState:function(){return cs(Wn)},useDebugValue:ml,useDeferredValue:function(e){var t=nt();return sp(t,ge.memoizedState,e)},useTransition:function(){var e=cs(Wn)[0],t=nt().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:Qd,useId:op,unstable_isNewReconciler:!1},Bm={readContext:rt,useCallback:ip,useContext:rt,useEffect:hl,useImperativeHandle:np,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ap,useReducer:us,useRef:Jd,useState:function(){return us(Wn)},useDebugValue:ml,useDeferredValue:function(e){var t=nt();return ge===null?t.memoizedState=e:sp(t,ge.memoizedState,e)},useTransition:function(){var e=us(Wn)[0],t=nt().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:Qd,useId:op,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ue({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ca={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Te(),i=Qt(e),s=St(n,i);s.payload=t,r!=null&&(s.callback=r),t=Vt(e,s,i),t!==null&&(ut(t,e,i,n),Li(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Te(),i=Qt(e),s=St(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Vt(e,s,i),t!==null&&(ut(t,e,i,n),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Te(),n=Qt(e),i=St(r,n);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,n),t!==null&&(ut(t,e,n,r),Li(t,e,n))}};function Nc(e,t,r,n,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!An(r,n)||!An(i,s):!0}function dp(e,t,r){var n=!1,i=Zt,s=t.contextType;return typeof s=="object"&&s!==null?s=rt(s):(i=Be(t)?pr:_e.current,n=t.contextTypes,s=(n=n!=null)?Wr(e,i):Zt),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ca,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ca.enqueueReplaceState(t,t.state,null)}function Gs(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ol(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=rt(s):(s=Be(t)?pr:_e.current,i.context=Wr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Zs(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ca.enqueueReplaceState(i,i.state,null),sa(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var r="",n=t;do r+=mh(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Js(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Hm=typeof WeakMap=="function"?WeakMap:Map;function pp(e,t,r){r=St(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){da||(da=!0,co=n),Js(e,t)},r}function fp(e,t,r){r=St(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Js(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Js(e,t),typeof n!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Cc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Hm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=rg.bind(null,e,t,r),t.then(e,e))}function Ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pc(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=St(-1,1),t.tag=2,Vt(r,t,1))),r.lanes|=1),e)}var Wm=_t.ReactCurrentOwner,Ie=!1;function Le(e,t,r,n){t.child=e===null?Hd(t,null,r,n):Vr(t,e.child,r,n)}function Rc(e,t,r,n,i){r=r.render;var s=t.ref;return Ur(t,i),n=pl(e,t,r,n,s,i),r=fl(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ne&&r&&el(t),t.flags|=1,Le(e,t,n,i),t.child)}function _c(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!kl(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,hp(e,t,s,n,i)):(e=Di(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(r=r.compare,r=r!==null?r:An,r(o,n)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=Kt(s,n),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(An(s,n)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=n=s,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return eo(e,t,r,n,i)}function mp(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Mr,Ve),Ve|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Mr,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ee(Mr,Ve),Ve|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,ee(Mr,Ve),Ve|=n;return Le(e,t,i,r),t.child}function gp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function eo(e,t,r,n,i){var s=Be(r)?pr:_e.current;return s=Wr(t,s),Ur(t,i),r=pl(e,t,r,n,s,i),n=fl(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ne&&n&&el(t),t.flags|=1,Le(e,t,r,i),t.child)}function zc(e,t,r,n,i){if(Be(r)){var s=!0;ta(t)}else s=!1;if(Ur(t,i),t.stateNode===null)Mi(e,t),dp(t,r,n),Gs(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Be(r)?pr:_e.current,u=Wr(t,u));var d=r.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||c!==u)&&Sc(t,o,n,u),Mt=!1;var h=t.memoizedState;o.state=h,sa(t,n,o,i),c=t.memoizedState,l!==n||h!==c||Ue.current||Mt?(typeof d=="function"&&(Zs(t,r,d,n),c=t.memoizedState),(l=Mt||Nc(t,r,l,n,h,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=u,n=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,$d(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),o.props=u,p=t.pendingProps,h=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=rt(c):(c=Be(r)?pr:_e.current,c=Wr(t,c));var w=r.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==c)&&Sc(t,o,n,c),Mt=!1,h=t.memoizedState,o.state=h,sa(t,n,o,i);var g=t.memoizedState;l!==p||h!==g||Ue.current||Mt?(typeof w=="function"&&(Zs(t,r,w,n),g=t.memoizedState),(u=Mt||Nc(t,r,u,n,h,g,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,g,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=g),o.props=n,o.state=g,o.context=c,n=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return to(e,t,r,n,s,i)}function to(e,t,r,n,i,s){gp(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&gc(t,r,!1),Rt(e,t,s);n=t.stateNode,Wm.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Vr(t,e.child,null,s),t.child=Vr(t,null,l,s)):Le(e,t,l,s),t.memoizedState=n.state,i&&gc(t,r,!0),t.child}function xp(e){var t=e.stateNode;t.pendingContext?mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mc(e,t.context,!1),ll(e,t.containerInfo)}function Lc(e,t,r,n,i){return $r(),rl(i),t.flags|=256,Le(e,t,r,n),t.child}var ro={dehydrated:null,treeContext:null,retryLane:0};function no(e){return{baseLanes:e,cachePool:null,transitions:null}}function vp(e,t,r){var n=t.pendingProps,i=oe.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(oe,i&1),e===null)return Ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,s?(n=t.mode,s=t.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ra(o,n,0,null),e=ur(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=no(r),t.memoizedState=ro,e):gl(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $m(e,t,o,n,l,i,r);if(s){s=n.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Kt(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Kt(l,s):(s=ur(s,o,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,o=e.child.memoizedState,o=o===null?no(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~r,t.memoizedState=ro,n}return s=e.child,e=s.sibling,n=Kt(s,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function gl(e,t){return t=Ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yi(e,t,r,n){return n!==null&&rl(n),Vr(t,e.child,null,r),e=gl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $m(e,t,r,n,i,s,o){if(r)return t.flags&256?(t.flags&=-257,n=ds(Error(P(422))),yi(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=Ra({mode:"visible",children:n.children},i,0,null),s=ur(s,i,o,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,t.mode&1&&Vr(t,e.child,null,o),t.child.memoizedState=no(o),t.memoizedState=ro,s);if(!(t.mode&1))return yi(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(P(419)),n=ds(s,n,void 0),yi(e,t,o,n)}if(l=(o&e.childLanes)!==0,Ie||l){if(n=je,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pt(e,i),ut(n,e,i,-1))}return bl(),n=ds(Error(P(421))),yi(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ng.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qe=$t(i.nextSibling),Qe=t,ne=!0,lt=null,e!==null&&(Ge[Je++]=kt,Ge[Je++]=Nt,Ge[Je++]=fr,kt=e.id,Nt=e.overflow,fr=t),t=gl(t,n.children),t.flags|=4096,t)}function Tc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xs(e.return,t,r)}function ps(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function yp(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Le(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,r,t);else if(e.tag===19)Tc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ee(oe,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&oa(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ps(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oa(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ps(t,!0,r,null,s);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),mr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,r=Kt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Kt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Vm(e,t,r){switch(t.tag){case 3:xp(t),$r();break;case 5:Vd(t);break;case 1:Be(t.type)&&ta(t);break;case 4:ll(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ee(ia,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?vp(e,t,r):(ee(oe,oe.current&1),e=Rt(e,t,r),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return yp(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,mp(e,t,r)}return Rt(e,t,r)}var wp,io,jp,bp;wp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};io=function(){};jp=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,or(yt.current);var s=null;switch(r){case"input":i=Cs(e,i),n=Cs(e,n),s=[];break;case"select":i=ue({},i,{value:void 0}),n=ue({},n,{value:void 0}),s=[];break;case"textarea":i=Rs(e,i),n=Rs(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ji)}zs(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in n){var c=n[u];if(l=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(s||(s=[]),s.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&te("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};bp=function(e,t,r,n){r!==n&&(t.flags|=4)};function pn(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function qm(e,t,r){var n=t.pendingProps;switch(tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Be(t.type)&&ea(),Ee(t),null;case 3:return n=t.stateNode,qr(),re(Ue),re(_e),ul(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(fo(lt),lt=null))),io(e,t),Ee(t),null;case 5:cl(t);var i=or(Bn.current);if(r=t.type,e!==null&&t.stateNode!=null)jp(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(P(166));return Ee(t),null}if(e=or(yt.current),xi(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[xt]=t,n[In]=s,e=(t.mode&1)!==0,r){case"dialog":te("cancel",n),te("close",n);break;case"iframe":case"object":case"embed":te("load",n);break;case"video":case"audio":for(i=0;i<yn.length;i++)te(yn[i],n);break;case"source":te("error",n);break;case"img":case"image":case"link":te("error",n),te("load",n);break;case"details":te("toggle",n);break;case"input":Hl(n,s),te("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},te("invalid",n);break;case"textarea":$l(n,s),te("invalid",n)}zs(r,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&gi(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&gi(n.textContent,l,e),i=["children",""+l]):Rn.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",n)}switch(r){case"input":li(n),Wl(n,s,!0);break;case"textarea":li(n),Vl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ji)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[xt]=t,e[In]=n,wp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ls(r,n),r){case"dialog":te("cancel",e),te("close",e),i=n;break;case"iframe":case"object":case"embed":te("load",e),i=n;break;case"video":case"audio":for(i=0;i<yn.length;i++)te(yn[i],e);i=n;break;case"source":te("error",e),i=n;break;case"img":case"image":case"link":te("error",e),te("load",e),i=n;break;case"details":te("toggle",e),i=n;break;case"input":Hl(e,n),i=Cs(e,n),te("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=ue({},n,{value:void 0}),te("invalid",e);break;case"textarea":$l(e,n),i=Rs(e,n),te("invalid",e);break;default:i=n}zs(r,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Ju(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zu(e,c)):s==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&_n(e,c):typeof c=="number"&&_n(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Rn.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",e):c!=null&&Uo(e,s,c,o))}switch(r){case"input":li(e),Wl(e,n,!1);break;case"textarea":li(e),Vl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Xt(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Ar(e,!!n.multiple,s,!1):n.defaultValue!=null&&Ar(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ji)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)bp(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(P(166));if(r=or(Bn.current),or(yt.current),xi(t)){if(n=t.stateNode,r=t.memoizedProps,n[xt]=t,(s=n.nodeValue!==r)&&(e=Qe,e!==null))switch(e.tag){case 3:gi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[xt]=t,t.stateNode=n}return Ee(t),null;case 13:if(re(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&qe!==null&&t.mode&1&&!(t.flags&128))Ud(),$r(),t.flags|=98560,s=!1;else if(s=xi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[xt]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else lt!==null&&(fo(lt),lt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?xe===0&&(xe=3):bl())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return qr(),io(e,t),e===null&&Fn(t.stateNode.containerInfo),Ee(t),null;case 10:return al(t.type._context),Ee(t),null;case 17:return Be(t.type)&&ea(),Ee(t),null;case 19:if(re(oe),s=t.memoizedState,s===null)return Ee(t),null;if(n=(t.flags&128)!==0,o=s.rendering,o===null)if(n)pn(s,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=oa(e),o!==null){for(t.flags|=128,pn(s,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>Kr&&(t.flags|=128,n=!0,pn(s,!1),t.lanes=4194304)}else{if(!n)if(e=oa(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),pn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ee(t),null}else 2*fe()-s.renderingStartTime>Kr&&r!==1073741824&&(t.flags|=128,n=!0,pn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(r=s.last,r!==null?r.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,r=oe.current,ee(oe,n?r&1|2:r&1),t):(Ee(t),null);case 22:case 23:return jl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ve&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Qm(e,t){switch(tl(t),t.tag){case 1:return Be(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),re(Ue),re(_e),ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cl(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return qr(),null;case 10:return al(t.type._context),null;case 22:case 23:return jl(),null;case 24:return null;default:return null}}var wi=!1,Pe=!1,Km=typeof WeakSet=="function"?WeakSet:Set,O=null;function Or(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){pe(e,t,n)}else r.current=null}function ao(e,t,r){try{r()}catch(n){pe(e,t,n)}}var Oc=!1;function Ym(e,t){if(Hs=Xi,e=Ed(),Jo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var w;p!==r||i!==0&&p.nodeType!==3||(l=o+i),p!==s||n!==0&&p.nodeType!==3||(c=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break t;if(h===r&&++u===i&&(l=o),h===s&&++d===n&&(c=o),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ws={focusedElem:e,selectionRange:r},Xi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,b=g.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),b);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(j){pe(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return g=Oc,Oc=!1,g}function Cn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ao(t,r,s)}i=i.next}while(i!==n)}}function Ea(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function so(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function kp(e){var t=e.alternate;t!==null&&(e.alternate=null,kp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[In],delete t[qs],delete t[zm],delete t[Lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Np(e){return e.tag===5||e.tag===3||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ji));else if(n!==4&&(e=e.child,e!==null))for(oo(e,t,r),e=e.sibling;e!==null;)oo(e,t,r),e=e.sibling}function lo(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(lo(e,t,r),e=e.sibling;e!==null;)lo(e,t,r),e=e.sibling}var ke=null,ot=!1;function Tt(e,t,r){for(r=r.child;r!==null;)Sp(e,t,r),r=r.sibling}function Sp(e,t,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ya,r)}catch{}switch(r.tag){case 5:Pe||Or(r,t);case 6:var n=ke,i=ot;ke=null,Tt(e,t,r),ke=n,ot=i,ke!==null&&(ot?(e=ke,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ke.removeChild(r.stateNode));break;case 18:ke!==null&&(ot?(e=ke,r=r.stateNode,e.nodeType===8?as(e.parentNode,r):e.nodeType===1&&as(e,r),On(e)):as(ke,r.stateNode));break;case 4:n=ke,i=ot,ke=r.stateNode.containerInfo,ot=!0,Tt(e,t,r),ke=n,ot=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ao(r,t,o),i=i.next}while(i!==n)}Tt(e,t,r);break;case 1:if(!Pe&&(Or(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){pe(r,t,l)}Tt(e,t,r);break;case 21:Tt(e,t,r);break;case 22:r.mode&1?(Pe=(n=Pe)||r.memoizedState!==null,Tt(e,t,r),Pe=n):Tt(e,t,r);break;default:Tt(e,t,r)}}function Ac(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Km),t.forEach(function(n){var i=ig.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function at(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,ot=!1;break e;case 3:ke=l.stateNode.containerInfo,ot=!0;break e;case 4:ke=l.stateNode.containerInfo,ot=!0;break e}l=l.return}if(ke===null)throw Error(P(160));Sp(s,o,i),ke=null,ot=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cp(t,e),t=t.sibling}function Cp(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),ht(e),n&4){try{Cn(3,e,e.return),Ea(3,e)}catch(y){pe(e,e.return,y)}try{Cn(5,e,e.return)}catch(y){pe(e,e.return,y)}}break;case 1:at(t,e),ht(e),n&512&&r!==null&&Or(r,r.return);break;case 5:if(at(t,e),ht(e),n&512&&r!==null&&Or(r,r.return),e.flags&32){var i=e.stateNode;try{_n(i,"")}catch(y){pe(e,e.return,y)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=r!==null?r.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ku(i,s),Ls(l,o);var u=Ls(l,s);for(o=0;o<c.length;o+=2){var d=c[o],p=c[o+1];d==="style"?Ju(i,p):d==="dangerouslySetInnerHTML"?Zu(i,p):d==="children"?_n(i,p):Uo(i,d,p,u)}switch(l){case"input":Es(i,s);break;case"textarea":Yu(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Ar(i,!!s.multiple,w,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ar(i,!!s.multiple,s.defaultValue,!0):Ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[In]=s}catch(y){pe(e,e.return,y)}}break;case 6:if(at(t,e),ht(e),n&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){pe(e,e.return,y)}}break;case 3:if(at(t,e),ht(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(y){pe(e,e.return,y)}break;case 4:at(t,e),ht(e);break;case 13:at(t,e),ht(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yl=fe())),n&4&&Ac(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||d,at(t,e),Pe=u):at(t,e),ht(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(p=O=d;O!==null;){switch(h=O,w=h.child,h.tag){case 0:case 11:case 14:case 15:Cn(4,h,h.return);break;case 1:Or(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){pe(n,r,y)}}break;case 5:Or(h,h.return);break;case 22:if(h.memoizedState!==null){Dc(p);continue}}w!==null?(w.return=h,O=w):Dc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Gu("display",o))}catch(y){pe(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){pe(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:at(t,e),ht(e),n&4&&Ac(e);break;case 21:break;default:at(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Np(r)){var n=r;break e}r=r.return}throw Error(P(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(_n(i,""),n.flags&=-33);var s=Mc(e);lo(e,s,i);break;case 3:case 4:var o=n.stateNode.containerInfo,l=Mc(e);oo(e,l,o);break;default:throw Error(P(161))}}catch(c){pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xm(e,t,r){O=e,Ep(e)}function Ep(e,t,r){for(var n=(e.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||wi;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Pe;l=wi;var u=Pe;if(wi=o,(Pe=c)&&!u)for(O=i;O!==null;)o=O,c=o.child,o.tag===22&&o.memoizedState!==null?Ic(i):c!==null?(c.return=o,O=c):Ic(i);for(;s!==null;)O=s,Ep(s),s=s.sibling;O=i,wi=l,Pe=u}Fc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Fc(e)}}function Fc(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Ea(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Pe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:st(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&jc(t,s,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}jc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&On(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Pe||t.flags&512&&so(t)}catch(h){pe(t,t.return,h)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function Dc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function Ic(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ea(4,t)}catch(c){pe(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){pe(t,i,c)}}var s=t.return;try{so(t)}catch(c){pe(t,s,c)}break;case 5:var o=t.return;try{so(t)}catch(c){pe(t,o,c)}}}catch(c){pe(t,t.return,c)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var Zm=Math.ceil,ua=_t.ReactCurrentDispatcher,xl=_t.ReactCurrentOwner,tt=_t.ReactCurrentBatchConfig,Y=0,je=null,he=null,Ne=0,Ve=0,Mr=Jt(0),xe=0,Vn=null,mr=0,Pa=0,vl=0,En=null,De=null,yl=0,Kr=1/0,jt=null,da=!1,co=null,qt=null,ji=!1,It=null,pa=0,Pn=0,uo=null,Ai=-1,Fi=0;function Te(){return Y&6?fe():Ai!==-1?Ai:Ai=fe()}function Qt(e){return e.mode&1?Y&2&&Ne!==0?Ne&-Ne:Om.transition!==null?(Fi===0&&(Fi=dd()),Fi):(e=Z,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e):1}function ut(e,t,r,n){if(50<Pn)throw Pn=0,uo=null,Error(P(185));Yn(e,r,n),(!(Y&2)||e!==je)&&(e===je&&(!(Y&2)&&(Pa|=r),xe===4&&Ft(e,Ne)),He(e,n),r===1&&Y===0&&!(t.mode&1)&&(Kr=fe()+500,Na&&er()))}function He(e,t){var r=e.callbackNode;Oh(e,t);var n=Yi(e,e===je?Ne:0);if(n===0)r!==null&&Kl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Kl(r),t===1)e.tag===0?Tm(Uc.bind(null,e)):Fd(Uc.bind(null,e)),Rm(function(){!(Y&6)&&er()}),r=null;else{switch(pd(n)){case 1:r=Vo;break;case 4:r=cd;break;case 16:r=Ki;break;case 536870912:r=ud;break;default:r=Ki}r=Mp(r,Pp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Pp(e,t){if(Ai=-1,Fi=0,Y&6)throw Error(P(327));var r=e.callbackNode;if(Br()&&e.callbackNode!==r)return null;var n=Yi(e,e===je?Ne:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=fa(e,n);else{t=n;var i=Y;Y|=2;var s=_p();(je!==e||Ne!==t)&&(jt=null,Kr=fe()+500,cr(e,t));do try{eg();break}catch(l){Rp(e,l)}while(!0);il(),ua.current=s,Y=i,he!==null?t=0:(je=null,Ne=0,t=xe)}if(t!==0){if(t===2&&(i=Fs(e),i!==0&&(n=i,t=po(e,i))),t===1)throw r=Vn,cr(e,0),Ft(e,n),He(e,fe()),r;if(t===6)Ft(e,n);else{if(i=e.current.alternate,!(n&30)&&!Gm(i)&&(t=fa(e,n),t===2&&(s=Fs(e),s!==0&&(n=s,t=po(e,s))),t===1))throw r=Vn,cr(e,0),Ft(e,n),He(e,fe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(P(345));case 2:nr(e,De,jt);break;case 3:if(Ft(e,n),(n&130023424)===n&&(t=yl+500-fe(),10<t)){if(Yi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Vs(nr.bind(null,e,De,jt),t);break}nr(e,De,jt);break;case 4:if(Ft(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-ct(n);s=1<<o,o=t[o],o>i&&(i=o),n&=~s}if(n=i,n=fe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Zm(n/1960))-n,10<n){e.timeoutHandle=Vs(nr.bind(null,e,De,jt),n);break}nr(e,De,jt);break;case 5:nr(e,De,jt);break;default:throw Error(P(329))}}}return He(e,fe()),e.callbackNode===r?Pp.bind(null,e):null}function po(e,t){var r=En;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=fa(e,t),e!==2&&(t=De,De=r,t!==null&&fo(t)),e}function fo(e){De===null?De=e:De.push.apply(De,e)}function Gm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~vl,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ct(t),n=1<<r;e[r]=-1,t&=~n}}function Uc(e){if(Y&6)throw Error(P(327));Br();var t=Yi(e,0);if(!(t&1))return He(e,fe()),null;var r=fa(e,t);if(e.tag!==0&&r===2){var n=Fs(e);n!==0&&(t=n,r=po(e,n))}if(r===1)throw r=Vn,cr(e,0),Ft(e,t),He(e,fe()),r;if(r===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nr(e,De,jt),He(e,fe()),null}function wl(e,t){var r=Y;Y|=1;try{return e(t)}finally{Y=r,Y===0&&(Kr=fe()+500,Na&&er())}}function gr(e){It!==null&&It.tag===0&&!(Y&6)&&Br();var t=Y;Y|=1;var r=tt.transition,n=Z;try{if(tt.transition=null,Z=1,e)return e()}finally{Z=n,tt.transition=r,Y=t,!(Y&6)&&er()}}function jl(){Ve=Mr.current,re(Mr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Pm(r)),he!==null)for(r=he.return;r!==null;){var n=r;switch(tl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ea();break;case 3:qr(),re(Ue),re(_e),ul();break;case 5:cl(n);break;case 4:qr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:al(n.type._context);break;case 22:case 23:jl()}r=r.return}if(je=e,he=e=Kt(e.current,null),Ne=Ve=t,xe=0,Vn=null,vl=Pa=mr=0,De=En=null,sr!==null){for(t=0;t<sr.length;t++)if(r=sr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var o=s.next;s.next=i,n.next=o}r.pending=n}sr=null}return e}function Rp(e,t){do{var r=he;try{if(il(),Ti.current=ca,la){for(var n=le.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}la=!1}if(hr=0,we=ge=le=null,Sn=!1,Hn=0,xl.current=null,r===null||r.return===null){xe=1,Vn=t,he=null;break}e:{var s=e,o=r.return,l=r,c=t;if(t=Ne,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Ec(o);if(w!==null){w.flags&=-257,Pc(w,o,l,s,t),w.mode&1&&Cc(s,u,t),t=w,c=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(c),t.updateQueue=y}else g.add(c);break e}else{if(!(t&1)){Cc(s,u,t),bl();break e}c=Error(P(426))}}else if(ne&&l.mode&1){var b=Ec(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Pc(b,o,l,s,t),rl(Qr(c,l));break e}}s=c=Qr(c,l),xe!==4&&(xe=2),En===null?En=[s]:En.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=pp(s,c,t);wc(s,x);break e;case 1:l=c;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=fp(s,l,t);wc(s,j);break e}}s=s.return}while(s!==null)}Lp(r)}catch(N){t=N,he===r&&r!==null&&(he=r=r.return);continue}break}while(!0)}function _p(){var e=ua.current;return ua.current=ca,e===null?ca:e}function bl(){(xe===0||xe===3||xe===2)&&(xe=4),je===null||!(mr&268435455)&&!(Pa&268435455)||Ft(je,Ne)}function fa(e,t){var r=Y;Y|=2;var n=_p();(je!==e||Ne!==t)&&(jt=null,cr(e,t));do try{Jm();break}catch(i){Rp(e,i)}while(!0);if(il(),Y=r,ua.current=n,he!==null)throw Error(P(261));return je=null,Ne=0,xe}function Jm(){for(;he!==null;)zp(he)}function eg(){for(;he!==null&&!Sh();)zp(he)}function zp(e){var t=Op(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Lp(e):he=t,xl.current=null}function Lp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Qm(r,t),r!==null){r.flags&=32767,he=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,he=null;return}}else if(r=qm(r,t,Ve),r!==null){he=r;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);xe===0&&(xe=5)}function nr(e,t,r){var n=Z,i=tt.transition;try{tt.transition=null,Z=1,tg(e,t,r,n)}finally{tt.transition=i,Z=n}return null}function tg(e,t,r,n){do Br();while(It!==null);if(Y&6)throw Error(P(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Mh(e,s),e===je&&(he=je=null,Ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ji||(ji=!0,Mp(Ki,function(){return Br(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=Z;Z=1;var l=Y;Y|=4,xl.current=null,Ym(e,r),Cp(r,e),jm(Ws),Xi=!!Hs,Ws=Hs=null,e.current=r,Xm(r),Ch(),Y=l,Z=o,tt.transition=s}else e.current=r;if(ji&&(ji=!1,It=e,pa=i),s=e.pendingLanes,s===0&&(qt=null),Rh(r.stateNode),He(e,fe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(da)throw da=!1,e=co,co=null,e;return pa&1&&e.tag!==0&&Br(),s=e.pendingLanes,s&1?e===uo?Pn++:(Pn=0,uo=e):Pn=0,er(),null}function Br(){if(It!==null){var e=pd(pa),t=tt.transition,r=Z;try{if(tt.transition=null,Z=16>e?16:e,It===null)var n=!1;else{if(e=It,It=null,pa=0,Y&6)throw Error(P(331));var i=Y;for(Y|=4,O=e.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:Cn(8,d,s)}var p=d.child;if(p!==null)p.return=d,O=p;else for(;O!==null;){d=O;var h=d.sibling,w=d.return;if(kp(d),d===u){O=null;break}if(h!==null){h.return=w,O=h;break}O=w}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Cn(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,O=x;break e}O=s.return}}var f=e.current;for(O=f;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ea(9,l)}}catch(N){pe(l,l.return,N)}if(l===o){O=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,O=j;break e}O=l.return}}if(Y=i,er(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ya,e)}catch{}n=!0}return n}finally{Z=r,tt.transition=t}}return!1}function Bc(e,t,r){t=Qr(r,t),t=pp(e,t,1),e=Vt(e,t,1),t=Te(),e!==null&&(Yn(e,1,t),He(e,t))}function pe(e,t,r){if(e.tag===3)Bc(e,e,r);else for(;t!==null;){if(t.tag===3){Bc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(qt===null||!qt.has(n))){e=Qr(r,e),e=fp(t,e,1),t=Vt(t,e,1),e=Te(),t!==null&&(Yn(t,1,e),He(t,e));break}}t=t.return}}function rg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&r,je===e&&(Ne&r)===r&&(xe===4||xe===3&&(Ne&130023424)===Ne&&500>fe()-yl?cr(e,0):vl|=r),He(e,t)}function Tp(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var r=Te();e=Pt(e,t),e!==null&&(Yn(e,t,r),He(e,r))}function ng(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Tp(e,r)}function ig(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(P(314))}n!==null&&n.delete(t),Tp(e,r)}var Op;Op=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Ie=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ie=!1,Vm(e,t,r);Ie=!!(e.flags&131072)}else Ie=!1,ne&&t.flags&1048576&&Dd(t,na,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Mi(e,t),e=t.pendingProps;var i=Wr(t,_e.current);Ur(t,r),i=pl(null,t,n,e,i,r);var s=fl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(n)?(s=!0,ta(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ol(t),i.updater=Ca,t.stateNode=i,i._reactInternals=t,Gs(t,n,e,r),t=to(null,t,n,!0,s,r)):(t.tag=0,ne&&s&&el(t),Le(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Mi(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=sg(n),e=st(n,e),i){case 0:t=eo(null,t,n,e,r);break e;case 1:t=zc(null,t,n,e,r);break e;case 11:t=Rc(null,t,n,e,r);break e;case 14:t=_c(null,t,n,st(n.type,e),r);break e}throw Error(P(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:st(n,i),eo(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:st(n,i),zc(e,t,n,i,r);case 3:e:{if(xp(t),e===null)throw Error(P(387));n=t.pendingProps,s=t.memoizedState,i=s.element,$d(e,t),sa(t,n,null,r);var o=t.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Qr(Error(P(423)),t),t=Lc(e,t,n,r,i);break e}else if(n!==i){i=Qr(Error(P(424)),t),t=Lc(e,t,n,r,i);break e}else for(qe=$t(t.stateNode.containerInfo.firstChild),Qe=t,ne=!0,lt=null,r=Hd(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if($r(),n===i){t=Rt(e,t,r);break e}Le(e,t,n,r)}t=t.child}return t;case 5:return Vd(t),e===null&&Ys(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,$s(n,i)?o=null:s!==null&&$s(n,s)&&(t.flags|=32),gp(e,t),Le(e,t,o,r),t.child;case 6:return e===null&&Ys(t),null;case 13:return vp(e,t,r);case 4:return ll(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vr(t,null,n,r):Le(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:st(n,i),Rc(e,t,n,i,r);case 7:return Le(e,t,t.pendingProps,r),t.child;case 8:return Le(e,t,t.pendingProps.children,r),t.child;case 12:return Le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ee(ia,n._currentValue),n._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!Ue.current){t=Rt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=St(-1,r&-r),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Xs(s.return,r,t),l.lanes|=r;break}c=c.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Xs(o,r,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Ur(t,r),i=rt(i),n=n(i),t.flags|=1,Le(e,t,n,r),t.child;case 14:return n=t.type,i=st(n,t.pendingProps),i=st(n.type,i),_c(e,t,n,i,r);case 15:return hp(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:st(n,i),Mi(e,t),t.tag=1,Be(n)?(e=!0,ta(t)):e=!1,Ur(t,r),dp(t,n,i),Gs(t,n,i,r),to(null,t,n,!0,e,r);case 19:return yp(e,t,r);case 22:return mp(e,t,r)}throw Error(P(156,t.tag))};function Mp(e,t){return ld(e,t)}function ag(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,r,n){return new ag(e,t,r,n)}function kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ho)return 11;if(e===Wo)return 14}return 2}function Kt(e,t){var r=e.alternate;return r===null?(r=et(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Di(e,t,r,n,i,s){var o=2;if(n=e,typeof e=="function")kl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sr:return ur(r.children,i,s,t);case Bo:o=8,i|=8;break;case bs:return e=et(12,r,t,i|2),e.elementType=bs,e.lanes=s,e;case ks:return e=et(13,r,t,i),e.elementType=ks,e.lanes=s,e;case Ns:return e=et(19,r,t,i),e.elementType=Ns,e.lanes=s,e;case Vu:return Ra(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:o=10;break e;case $u:o=9;break e;case Ho:o=11;break e;case Wo:o=14;break e;case Ot:o=16,n=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=et(o,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function ur(e,t,r,n){return e=et(7,e,n,t),e.lanes=r,e}function Ra(e,t,r,n){return e=et(22,e,n,t),e.elementType=Vu,e.lanes=r,e.stateNode={isHidden:!1},e}function fs(e,t,r){return e=et(6,e,null,t),e.lanes=r,e}function hs(e,t,r){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function og(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nl(e,t,r,n,i,s,o,l,c){return e=new og(e,t,r,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=et(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ol(s),e}function lg(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ap(e){if(!e)return Zt;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var r=e.type;if(Be(r))return Ad(e,r,t)}return t}function Fp(e,t,r,n,i,s,o,l,c){return e=Nl(r,n,!0,e,i,s,o,l,c),e.context=Ap(null),r=e.current,n=Te(),i=Qt(r),s=St(n,i),s.callback=t??null,Vt(r,s,i),e.current.lanes=i,Yn(e,i,n),He(e,n),e}function _a(e,t,r,n){var i=t.current,s=Te(),o=Qt(i);return r=Ap(r),t.context===null?t.context=r:t.pendingContext=r,t=St(s,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Vt(i,t,o),e!==null&&(ut(e,i,o,s),Li(e,i,o)),o}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Sl(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}function cg(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cl(e){this._internalRoot=e}za.prototype.render=Cl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));_a(e,t,null,null)};za.prototype.unmount=Cl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){_a(null,e,null,null)}),t[Et]=null}};function za(e){this._internalRoot=e}za.prototype.unstable_scheduleHydration=function(e){if(e){var t=md();e={blockedOn:null,target:e,priority:t};for(var r=0;r<At.length&&t!==0&&t<At[r].priority;r++);At.splice(r,0,e),r===0&&xd(e)}};function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function ug(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var u=ha(o);s.call(u)}}var o=Fp(t,n,e,0,null,!1,!1,"",Wc);return e._reactRootContainer=o,e[Et]=o.current,Fn(e.nodeType===8?e.parentNode:e),gr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var u=ha(c);l.call(u)}}var c=Nl(e,0,!1,null,null,!1,!1,"",Wc);return e._reactRootContainer=c,e[Et]=c.current,Fn(e.nodeType===8?e.parentNode:e),gr(function(){_a(t,c,r,n)}),c}function Ta(e,t,r,n,i){var s=r._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=ha(o);l.call(c)}}_a(t,o,e,i)}else o=ug(r,t,e,i,n);return ha(o)}fd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=vn(t.pendingLanes);r!==0&&(qo(t,r|1),He(t,fe()),!(Y&6)&&(Kr=fe()+500,er()))}break;case 13:gr(function(){var n=Pt(e,1);if(n!==null){var i=Te();ut(n,e,1,i)}}),Sl(e,1)}};Qo=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var r=Te();ut(t,e,134217728,r)}Sl(e,134217728)}};hd=function(e){if(e.tag===13){var t=Qt(e),r=Pt(e,t);if(r!==null){var n=Te();ut(r,e,t,n)}Sl(e,t)}};md=function(){return Z};gd=function(e,t){var r=Z;try{return Z=e,t()}finally{Z=r}};Os=function(e,t,r){switch(t){case"input":if(Es(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ka(n);if(!i)throw Error(P(90));Qu(n),Es(n,i)}}}break;case"textarea":Yu(e,r);break;case"select":t=r.value,t!=null&&Ar(e,!!r.multiple,t,!1)}};rd=wl;nd=gr;var dg={usingClientEntryPoint:!1,Events:[Zn,Rr,ka,ed,td,wl]},fn={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pg={bundleType:fn.bundleType,version:fn.version,rendererPackageName:fn.rendererPackageName,rendererConfig:fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sd(e),e===null?null:e.stateNode},findFiberByHostInstance:fn.findFiberByHostInstance||cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{ya=bi.inject(pg),vt=bi}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dg;Ye.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!El(t))throw Error(P(200));return lg(e,t,null,r)};Ye.createRoot=function(e,t){if(!El(e))throw Error(P(299));var r=!1,n="",i=Dp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nl(e,1,!1,null,null,r,!1,n,i),e[Et]=t.current,Fn(e.nodeType===8?e.parentNode:e),new Cl(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=sd(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return gr(e)};Ye.hydrate=function(e,t,r){if(!La(t))throw Error(P(200));return Ta(null,e,t,!0,r)};Ye.hydrateRoot=function(e,t,r){if(!El(e))throw Error(P(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",o=Dp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Fp(t,null,e,1,r??null,i,!1,s,o),e[Et]=t.current,Fn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new za(t)};Ye.render=function(e,t,r){if(!La(t))throw Error(P(200));return Ta(null,e,t,!1,r)};Ye.unmountComponentAtNode=function(e){if(!La(e))throw Error(P(40));return e._reactRootContainer?(gr(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ye.unstable_batchedUpdates=wl;Ye.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!La(r))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Ta(e,t,r,!1,n)};Ye.version="18.3.1-next-f1338f8080-20240426";function Ip(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ip)}catch(e){console.error(e)}}Ip(),Iu.exports=Ye;var fg=Iu.exports,$c=fg;ws.createRoot=$c.createRoot,ws.hydrateRoot=$c.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qn(){return qn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qn.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const Vc="popstate";function hg(e){e===void 0&&(e={});function t(n,i){let{pathname:s,search:o,hash:l}=n.location;return ho("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:ma(i)}return gg(t,r,null,e)}function ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Up(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mg(){return Math.random().toString(36).substr(2,8)}function qc(e,t){return{usr:e.state,key:e.key,idx:t}}function ho(e,t,r,n){return r===void 0&&(r=null),qn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tn(t):t,{state:r,key:t&&t.key||n||mg()})}function ma(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function tn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function gg(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,l=Ut.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(qn({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Ut.Pop;let b=d(),x=b==null?null:b-u;u=b,c&&c({action:l,location:y.location,delta:x})}function h(b,x){l=Ut.Push;let f=ho(y.location,b,x);u=d()+1;let m=qc(f,u),j=y.createHref(f);try{o.pushState(m,"",j)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(j)}s&&c&&c({action:l,location:y.location,delta:1})}function w(b,x){l=Ut.Replace;let f=ho(y.location,b,x);u=d();let m=qc(f,u),j=y.createHref(f);o.replaceState(m,"",j),s&&c&&c({action:l,location:y.location,delta:0})}function g(b){let x=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof b=="string"?b:ma(b);return f=f.replace(/ $/,"%20"),ce(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let y={get action(){return l},get location(){return e(i,o)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vc,p),c=b,()=>{i.removeEventListener(Vc,p),c=null}},createHref(b){return t(i,b)},createURL:g,encodeLocation(b){let x=g(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:w,go(b){return o.go(b)}};return y}var Qc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qc||(Qc={}));function xg(e,t,r){return r===void 0&&(r="/"),vg(e,t,r)}function vg(e,t,r,n){let i=typeof t=="string"?tn(t):t,s=Yr(i.pathname||"/",r);if(s==null)return null;let o=Bp(e);yg(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=_g(s);l=Pg(o[c],u)}return l}function Bp(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(ce(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Yt([n,c.relativePath]),d=r.concat(c);s.children&&s.children.length>0&&(ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bp(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Cg(u,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of Hp(s.path))i(s,o,c)}),t}function Hp(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=Hp(n.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function yg(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Eg(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const wg=/^:[\w-]+$/,jg=3,bg=2,kg=1,Ng=10,Sg=-2,Kc=e=>e==="*";function Cg(e,t){let r=e.split("/"),n=r.length;return r.some(Kc)&&(n+=Sg),t&&(n+=bg),r.filter(i=>!Kc(i)).reduce((i,s)=>i+(wg.test(s)?jg:s===""?kg:Ng),n)}function Eg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function Pg(e,t,r){let{routesMeta:n}=e,i={},s="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],u=l===n.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=mo({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Yt([s,p.pathname]),pathnameBase:Og(Yt([s,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(s=Yt([s,p.pathnameBase]))}return o}function mo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Rg(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((u,d,p)=>{let{paramName:h,isOptional:w}=d;if(h==="*"){let y=l[p]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const g=l[p];return w&&!g?u[h]=void 0:u[h]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function Rg(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Up(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function _g(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Up(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Yr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function zg(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?tn(e):e;return{pathname:r?r.startsWith("/")?r:Lg(r,t):t,search:Mg(n),hash:Ag(i)}}function Lg(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ms(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tg(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Pl(e,t){let r=Tg(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Rl(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=tn(e):(i=qn({},e),ce(!i.pathname||!i.pathname.includes("?"),ms("?","pathname","search",i)),ce(!i.pathname||!i.pathname.includes("#"),ms("#","pathname","hash",i)),ce(!i.search||!i.search.includes("#"),ms("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!n&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let c=zg(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Yt=e=>e.join("/").replace(/\/\/+/g,"/"),Og=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ag=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wp=["post","put","patch","delete"];new Set(Wp);const Dg=["get",...Wp];new Set(Dg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qn(){return Qn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qn.apply(this,arguments)}const Oa=v.createContext(null),$p=v.createContext(null),zt=v.createContext(null),Ma=v.createContext(null),wt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Vp=v.createContext(null);function Ig(e,t){let{relative:r}=t===void 0?{}:t;rn()||ce(!1);let{basename:n,navigator:i}=v.useContext(zt),{hash:s,pathname:o,search:l}=Aa(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:Yt([n,o])),i.createHref({pathname:c,search:l,hash:s})}function rn(){return v.useContext(Ma)!=null}function pt(){return rn()||ce(!1),v.useContext(Ma).location}function qp(e){v.useContext(zt).static||v.useLayoutEffect(e)}function wr(){let{isDataRoute:e}=v.useContext(wt);return e?t0():Ug()}function Ug(){rn()||ce(!1);let e=v.useContext(Oa),{basename:t,future:r,navigator:n}=v.useContext(zt),{matches:i}=v.useContext(wt),{pathname:s}=pt(),o=JSON.stringify(Pl(i,r.v7_relativeSplatPath)),l=v.useRef(!1);return qp(()=>{l.current=!0}),v.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let p=Rl(u,JSON.parse(o),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Yt([t,p.pathname])),(d.replace?n.replace:n.push)(p,d.state,d)},[t,n,o,s,e])}const Bg=v.createContext(null);function Hg(e){let t=v.useContext(wt).outlet;return t&&v.createElement(Bg.Provider,{value:e},t)}function Wg(){let{matches:e}=v.useContext(wt),t=e[e.length-1];return t?t.params:{}}function Aa(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=v.useContext(zt),{matches:i}=v.useContext(wt),{pathname:s}=pt(),o=JSON.stringify(Pl(i,n.v7_relativeSplatPath));return v.useMemo(()=>Rl(e,JSON.parse(o),s,r==="path"),[e,o,s,r])}function $g(e,t){return Vg(e,t)}function Vg(e,t,r,n){rn()||ce(!1);let{navigator:i}=v.useContext(zt),{matches:s}=v.useContext(wt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=pt(),d;if(t){var p;let b=typeof t=="string"?tn(t):t;c==="/"||(p=b.pathname)!=null&&p.startsWith(c)||ce(!1),d=b}else d=u;let h=d.pathname||"/",w=h;if(c!=="/"){let b=c.replace(/^\//,"").split("/");w="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=xg(e,{pathname:w}),y=Xg(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Yt([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Yt([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,r,n);return t&&y?v.createElement(Ma.Provider,{value:{location:Qn({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ut.Pop}},y):y}function qg(){let e=e0(),t=Fg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:i},r):null,null)}const Qg=v.createElement(qg,null);class Kg extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(wt.Provider,{value:this.props.routeContext},v.createElement(Vp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yg(e){let{routeContext:t,match:r,children:n}=e,i=v.useContext(Oa);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(wt.Provider,{value:t},n)}function Xg(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=n)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ce(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:h,errors:w}=r,g=p.route.loader&&h[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||g){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,h)=>{let w,g=!1,y=null,b=null;r&&(w=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||Qg,c&&(u<0&&h===0?(r0("route-fallback"),g=!0,b=null):u===h&&(g=!0,b=p.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,h+1)),f=()=>{let m;return w?m=y:g?m=b:p.route.Component?m=v.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,v.createElement(Yg,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:r!=null},children:m})};return r&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?v.createElement(Kg,{location:r.location,revalidation:r.revalidation,component:y,error:w,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var Qp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qp||{}),Kp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kp||{});function Zg(e){let t=v.useContext(Oa);return t||ce(!1),t}function Gg(e){let t=v.useContext($p);return t||ce(!1),t}function Jg(e){let t=v.useContext(wt);return t||ce(!1),t}function Yp(e){let t=Jg(),r=t.matches[t.matches.length-1];return r.route.id||ce(!1),r.route.id}function e0(){var e;let t=v.useContext(Vp),r=Gg(),n=Yp();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function t0(){let{router:e}=Zg(Qp.UseNavigateStable),t=Yp(Kp.UseNavigateStable),r=v.useRef(!1);return qp(()=>{r.current=!0}),v.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Qn({fromRouteId:t},s)))},[e,t])}const Yc={};function r0(e,t,r){Yc[e]||(Yc[e]=!0)}function n0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Xc(e){let{to:t,replace:r,state:n,relative:i}=e;rn()||ce(!1);let{future:s,static:o}=v.useContext(zt),{matches:l}=v.useContext(wt),{pathname:c}=pt(),u=wr(),d=Rl(t,Pl(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return v.useEffect(()=>u(JSON.parse(p),{replace:r,state:n,relative:i}),[u,p,i,r,n]),null}function Xp(e){return Hg(e.context)}function be(e){ce(!1)}function i0(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Ut.Pop,navigator:s,static:o=!1,future:l}=e;rn()&&ce(!1);let c=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:c,navigator:s,static:o,future:Qn({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof n=="string"&&(n=tn(n));let{pathname:d="/",search:p="",hash:h="",state:w=null,key:g="default"}=n,y=v.useMemo(()=>{let b=Yr(d,c);return b==null?null:{location:{pathname:b,search:p,hash:h,state:w,key:g},navigationType:i}},[c,d,p,h,w,g,i]);return y==null?null:v.createElement(zt.Provider,{value:u},v.createElement(Ma.Provider,{children:r,value:y}))}function a0(e){let{children:t,location:r}=e;return $g(go(t),r)}new Promise(()=>{});function go(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,i)=>{if(!v.isValidElement(n))return;let s=[...t,i];if(n.type===v.Fragment){r.push.apply(r,go(n.props.children,s));return}n.type!==be&&ce(!1),!n.props.index||!n.props.children||ce(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=go(n.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ga.apply(this,arguments)}function Zp(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function s0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function o0(e,t){return e.button===0&&(!t||t==="_self")&&!s0(e)}function xo(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function l0(e,t){let r=xo(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(s=>{r.append(i,s)})}),r}const c0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],u0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],d0="6";try{window.__reactRouterVersion=d0}catch{}const p0=v.createContext({isTransitioning:!1}),f0="startTransition",Zc=rh[f0];function h0(e){let{basename:t,children:r,future:n,window:i}=e,s=v.useRef();s.current==null&&(s.current=hg({window:i,v5Compat:!0}));let o=s.current,[l,c]=v.useState({action:o.action,location:o.location}),{v7_startTransition:u}=n||{},d=v.useCallback(p=>{u&&Zc?Zc(()=>c(p)):c(p)},[c,u]);return v.useLayoutEffect(()=>o.listen(d),[o,d]),v.useEffect(()=>n0(n),[n]),v.createElement(i0,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o,future:n})}const m0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F=v.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:d,viewTransition:p}=t,h=Zp(t,c0),{basename:w}=v.useContext(zt),g,y=!1;if(typeof u=="string"&&g0.test(u)&&(g=u,m0))try{let m=new URL(window.location.href),j=u.startsWith("//")?new URL(m.protocol+u):new URL(u),N=Yr(j.pathname,w);j.origin===m.origin&&N!=null?u=N+j.search+j.hash:y=!0}catch{}let b=Ig(u,{relative:i}),x=v0(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:p});function f(m){n&&n(m),m.defaultPrevented||x(m)}return v.createElement("a",ga({},h,{href:g||b,onClick:y||s?n:f,ref:r,target:c}))}),ki=v.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:u,children:d}=t,p=Zp(t,u0),h=Aa(c,{relative:p.relative}),w=pt(),g=v.useContext($p),{navigator:y,basename:b}=v.useContext(zt),x=g!=null&&w0(h)&&u===!0,f=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,m=w.pathname,j=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(m=m.toLowerCase(),j=j?j.toLowerCase():null,f=f.toLowerCase()),j&&b&&(j=Yr(j,b)||j);const N=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let E=m===f||!o&&m.startsWith(f)&&m.charAt(N)==="/",R=j!=null&&(j===f||!o&&j.startsWith(f)&&j.charAt(f.length)==="/"),z={isActive:E,isPending:R,isTransitioning:x},W=E?n:void 0,M;typeof s=="function"?M=s(z):M=[s,E?"active":null,R?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let X=typeof l=="function"?l(z):l;return v.createElement(F,ga({},p,{"aria-current":W,className:M,ref:r,style:X,to:c,viewTransition:u}),typeof d=="function"?d(z):d)});var vo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vo||(vo={}));var Gc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gc||(Gc={}));function x0(e){let t=v.useContext(Oa);return t||ce(!1),t}function v0(e,t){let{target:r,replace:n,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,c=wr(),u=pt(),d=Aa(e,{relative:o});return v.useCallback(p=>{if(o0(p,r)){p.preventDefault();let h=n!==void 0?n:ma(u)===ma(d);c(e,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,d,n,i,r,e,s,o,l])}function y0(e){let t=v.useRef(xo(e)),r=v.useRef(!1),n=pt(),i=v.useMemo(()=>l0(n.search,r.current?null:t.current),[n.search]),s=wr(),o=v.useCallback((l,c)=>{const u=xo(typeof l=="function"?l(i):l);r.current=!0,s("?"+u,c)},[s,i]);return[i,o]}function w0(e,t){t===void 0&&(t={});let r=v.useContext(p0);r==null&&ce(!1);let{basename:n}=x0(vo.useViewTransitionState),i=Aa(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=Yr(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=Yr(r.nextLocation.pathname,n)||r.nextLocation.pathname;return mo(i.pathname,o)!=null||mo(i.pathname,s)!=null}function Jc(){return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"hero",children:a.jsxs("div",{className:"container hero-inner",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsx("p",{className:"kicker",children:"Welcome to"}),a.jsx("h1",{className:"headline",children:"Everyday Essentials, Thoughtfully Made"}),a.jsx("p",{className:"subhead",children:"Curated apparel and accessories crafted for comfort, durability, and timeless style."}),a.jsxs("div",{className:"hero-ctas",children:[a.jsx(F,{to:"/about",className:"btn btn-primary",children:"Learn More"}),a.jsx(F,{to:"/shop",className:"btn btn-ghost",children:"Visit Shop"})]})]}),a.jsxs("div",{className:"hero-images",children:[a.jsx("img",{src:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1200&auto=format&fit=crop",alt:"Lifestyle banner"}),a.jsx("img",{src:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",alt:"Crafted details"})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"About Us"}),a.jsx("p",{className:"lead",children:"We’re a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance. Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care."}),a.jsxs("div",{className:"cards three",children:[a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"What we do"}),a.jsx("p",{children:"From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use."})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"How we work"}),a.jsx("p",{children:"Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what’s delivered."})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"Our promise"}),a.jsx("p",{children:"Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition."})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Our Mission"}),a.jsx("p",{className:"lead",children:"Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Material-first design choices with soft-hand, responsibly sourced textiles."}),a.jsx("li",{children:"Timeless palettes and silhouettes that pair across wardrobes."}),a.jsx("li",{children:"Continuous improvements guided by real customer feedback."})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Why Choose Us"}),a.jsxs("div",{className:"grid-2",children:[a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Quality"}),a.jsx("h3",{children:"Built to last"}),a.jsx("p",{children:"Reinforced stitching, reliable hardware, and color-fast finishes keep pieces in rotation longer."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Trust"}),a.jsx("h3",{children:"Transparent sourcing"}),a.jsx("p",{children:"Clear specs, care guides, and honest descriptions so purchasing decisions are easy and informed."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Care"}),a.jsx("h3",{children:"Responsive support"}),a.jsx("p",{children:"Friendly, prompt help from real people for sizing, care, and post-purchase questions."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Value"}),a.jsx("h3",{children:"Fair pricing"}),a.jsx("p",{children:"Essentials priced for everyday use without compromising on materials or finish."})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"What Customers Say"}),a.jsxs("div",{className:"testimonials",children:[a.jsxs("blockquote",{className:"quote",children:["“The fabric quality is excellent and the fit stays consistent after washes. Great staples.”",a.jsx("footer",{children:"— A. Perera"})]}),a.jsxs("blockquote",{className:"quote",children:["“Support was quick to help with sizing. Delivery was on time and packaging was neat.”",a.jsx("footer",{children:"— S. Fernando"})]}),a.jsxs("blockquote",{className:"quote",children:["“Clean design and no loud branding. Exactly what I wanted for daily wear.”",a.jsx("footer",{children:"— N. Jayasuriya"})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Special Highlights"}),a.jsxs("div",{className:"cards three",children:[a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Seasonal Edit"}),a.jsx("p",{children:"Limited colorways and refreshed textures—perfect for the current season."}),a.jsx(F,{to:"/shop",className:"btn btn-link",children:"Explore"})]}),a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Bundle Savings"}),a.jsx("p",{children:"Save on curated combos like tee + cap or backpack + organizer."}),a.jsx(F,{to:"/shop",className:"btn btn-link",children:"View Bundles"})]}),a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Student Perks"}),a.jsx("p",{children:"Verified students enjoy an extra 10% off select collections."}),a.jsx(F,{to:"/shop",className:"btn btn-link",children:"Check Eligibility"})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Delivery & Returns"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Fast Dispatch"}),a.jsx("p",{children:"Orders ship within 1–2 business days with tracked delivery."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Easy Returns"}),a.jsx("p",{children:"30-day returns on unused items in original condition and packaging."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Care Guides"}),a.jsx("p",{children:"Simple wash and storage instructions included with every order."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Contact Info"}),a.jsxs("div",{className:"contact",children:[a.jsxs("div",{children:[a.jsx("p",{children:"Email: support@yourstore.com"}),a.jsx("p",{children:"Phone: +94 11 234 5678"}),a.jsx("p",{children:"Hours: Mon–Fri, 9:00–17:00"})]}),a.jsxs("div",{children:[a.jsx("p",{children:"Address: 123 Market Street, Colombo"}),a.jsx("p",{children:"Instagram: @yourstore"}),a.jsx("p",{children:"Facebook: /yourstore"})]})]}),a.jsxs("div",{className:"contact-cta",children:[a.jsx(F,{to:"/contact",className:"btn btn-primary",children:"Get in Touch"}),a.jsx(F,{to:"/shop",className:"btn btn-ghost",children:"Browse Collections"})]})]})}),a.jsx("style",{children:`
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
      `})]})}function Gp(e,t){return function(){return e.apply(t,arguments)}}const{toString:j0}=Object.prototype,{getPrototypeOf:_l}=Object,{iterator:Fa,toStringTag:Jp}=Symbol,Da=(e=>t=>{const r=j0.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),ft=e=>(e=e.toLowerCase(),t=>Da(t)===e),Ia=e=>t=>typeof t===e,{isArray:nn}=Array,Xr=Ia("undefined");function Jn(e){return e!==null&&!Xr(e)&&e.constructor!==null&&!Xr(e.constructor)&&We(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ef=ft("ArrayBuffer");function b0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ef(e.buffer),t}const k0=Ia("string"),We=Ia("function"),tf=Ia("number"),ei=e=>e!==null&&typeof e=="object",N0=e=>e===!0||e===!1,Ii=e=>{if(Da(e)!=="object")return!1;const t=_l(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Jp in e)&&!(Fa in e)},S0=e=>{if(!ei(e)||Jn(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},C0=ft("Date"),E0=ft("File"),P0=ft("Blob"),R0=ft("FileList"),_0=e=>ei(e)&&We(e.pipe),z0=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||We(e.append)&&((t=Da(e))==="formdata"||t==="object"&&We(e.toString)&&e.toString()==="[object FormData]"))},L0=ft("URLSearchParams"),[T0,O0,M0,A0]=["ReadableStream","Request","Response","Headers"].map(ft),F0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ti(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),nn(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{if(Jn(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(n=0;n<o;n++)l=s[n],t.call(null,e[l],l,e)}}function rf(e,t){if(Jn(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,nf=e=>!Xr(e)&&e!==lr;function yo(){const{caseless:e,skipUndefined:t}=nf(this)&&this||{},r={},n=(i,s)=>{const o=e&&rf(r,s)||s;Ii(r[o])&&Ii(i)?r[o]=yo(r[o],i):Ii(i)?r[o]=yo({},i):nn(i)?r[o]=i.slice():(!t||!Xr(i))&&(r[o]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&ti(arguments[i],n);return r}const D0=(e,t,r,{allOwnKeys:n}={})=>(ti(t,(i,s)=>{r&&We(i)?e[s]=Gp(i,r):e[s]=i},{allOwnKeys:n}),e),I0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),U0=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},B0=(e,t,r,n)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!n||n(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&_l(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},H0=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},W0=e=>{if(!e)return null;if(nn(e))return e;let t=e.length;if(!tf(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},$0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&_l(Uint8Array)),V0=(e,t)=>{const n=(e&&e[Fa]).call(e);let i;for(;(i=n.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},q0=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Q0=ft("HTMLFormElement"),K0=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),eu=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Y0=ft("RegExp"),af=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ti(r,(i,s)=>{let o;(o=t(i,s,e))!==!1&&(n[s]=o||i)}),Object.defineProperties(e,n)},X0=e=>{af(e,(t,r)=>{if(We(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(We(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Z0=(e,t)=>{const r={},n=i=>{i.forEach(s=>{r[s]=!0})};return nn(e)?n(e):n(String(e).split(t)),r},G0=()=>{},J0=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function e1(e){return!!(e&&We(e.append)&&e[Jp]==="FormData"&&e[Fa])}const t1=e=>{const t=new Array(10),r=(n,i)=>{if(ei(n)){if(t.indexOf(n)>=0)return;if(Jn(n))return n;if(!("toJSON"in n)){t[i]=n;const s=nn(n)?[]:{};return ti(n,(o,l)=>{const c=r(o,i+1);!Xr(c)&&(s[l]=c)}),t[i]=void 0,s}}return n};return r(e,0)},r1=ft("AsyncFunction"),n1=e=>e&&(ei(e)||We(e))&&We(e.then)&&We(e.catch),sf=((e,t)=>e?setImmediate:t?((r,n)=>(lr.addEventListener("message",({source:i,data:s})=>{i===lr&&s===r&&n.length&&n.shift()()},!1),i=>{n.push(i),lr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",We(lr.postMessage)),i1=typeof queueMicrotask<"u"?queueMicrotask.bind(lr):typeof process<"u"&&process.nextTick||sf,a1=e=>e!=null&&We(e[Fa]),k={isArray:nn,isArrayBuffer:ef,isBuffer:Jn,isFormData:z0,isArrayBufferView:b0,isString:k0,isNumber:tf,isBoolean:N0,isObject:ei,isPlainObject:Ii,isEmptyObject:S0,isReadableStream:T0,isRequest:O0,isResponse:M0,isHeaders:A0,isUndefined:Xr,isDate:C0,isFile:E0,isBlob:P0,isRegExp:Y0,isFunction:We,isStream:_0,isURLSearchParams:L0,isTypedArray:$0,isFileList:R0,forEach:ti,merge:yo,extend:D0,trim:F0,stripBOM:I0,inherits:U0,toFlatObject:B0,kindOf:Da,kindOfTest:ft,endsWith:H0,toArray:W0,forEachEntry:V0,matchAll:q0,isHTMLForm:Q0,hasOwnProperty:eu,hasOwnProp:eu,reduceDescriptors:af,freezeMethods:X0,toObjectSet:Z0,toCamelCase:K0,noop:G0,toFiniteNumber:J0,findKey:rf,global:lr,isContextDefined:nf,isSpecCompliantForm:e1,toJSONObject:t1,isAsyncFn:r1,isThenable:n1,setImmediate:sf,asap:i1,isIterable:a1};function B(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}k.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const of=B.prototype,lf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{lf[e]={value:e}});Object.defineProperties(B,lf);Object.defineProperty(of,"isAxiosError",{value:!0});B.from=(e,t,r,n,i,s)=>{const o=Object.create(of);k.toFlatObject(e,o,function(d){return d!==Error.prototype},u=>u!=="isAxiosError");const l=e&&e.message?e.message:"Error",c=t==null&&e?e.code:t;return B.call(o,l,c,r,n,i),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",s&&Object.assign(o,s),o};const s1=null;function wo(e){return k.isPlainObject(e)||k.isArray(e)}function cf(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function tu(e,t,r){return e?e.concat(t).map(function(i,s){return i=cf(i),!r&&s?"["+i+"]":i}).join(r?".":""):t}function o1(e){return k.isArray(e)&&!e.some(wo)}const l1=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Ua(e,t,r){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=k.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!k.isUndefined(b[y])});const n=r.metaTokens,i=r.visitor||d,s=r.dots,o=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(k.isDate(g))return g.toISOString();if(k.isBoolean(g))return g.toString();if(!c&&k.isBlob(g))throw new B("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(g)||k.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function d(g,y,b){let x=g;if(g&&!b&&typeof g=="object"){if(k.endsWith(y,"{}"))y=n?y:y.slice(0,-2),g=JSON.stringify(g);else if(k.isArray(g)&&o1(g)||(k.isFileList(g)||k.endsWith(y,"[]"))&&(x=k.toArray(g)))return y=cf(y),x.forEach(function(m,j){!(k.isUndefined(m)||m===null)&&t.append(o===!0?tu([y],j,s):o===null?y:y+"[]",u(m))}),!1}return wo(g)?!0:(t.append(tu(b,y,s),u(g)),!1)}const p=[],h=Object.assign(l1,{defaultVisitor:d,convertValue:u,isVisitable:wo});function w(g,y){if(!k.isUndefined(g)){if(p.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(g),k.forEach(g,function(x,f){(!(k.isUndefined(x)||x===null)&&i.call(t,x,k.isString(f)?f.trim():f,y,h))===!0&&w(x,y?y.concat(f):[f])}),p.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function ru(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function zl(e,t){this._pairs=[],e&&Ua(e,this,t)}const uf=zl.prototype;uf.append=function(t,r){this._pairs.push([t,r])};uf.toString=function(t){const r=t?function(n){return t.call(this,n,ru)}:ru;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function c1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function df(e,t,r){if(!t)return e;const n=r&&r.encode||c1;k.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let s;if(i?s=i(t,r):s=k.isURLSearchParams(t)?t.toString():new zl(t,r).toString(n),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class nu{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(n){n!==null&&t(n)})}}const pf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},u1=typeof URLSearchParams<"u"?URLSearchParams:zl,d1=typeof FormData<"u"?FormData:null,p1=typeof Blob<"u"?Blob:null,f1={isBrowser:!0,classes:{URLSearchParams:u1,FormData:d1,Blob:p1},protocols:["http","https","file","blob","url","data"]},Ll=typeof window<"u"&&typeof document<"u",jo=typeof navigator=="object"&&navigator||void 0,h1=Ll&&(!jo||["ReactNative","NativeScript","NS"].indexOf(jo.product)<0),m1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",g1=Ll&&window.location.href||"http://localhost",x1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ll,hasStandardBrowserEnv:h1,hasStandardBrowserWebWorkerEnv:m1,navigator:jo,origin:g1},Symbol.toStringTag,{value:"Module"})),Re={...x1,...f1};function v1(e,t){return Ua(e,new Re.classes.URLSearchParams,{visitor:function(r,n,i,s){return Re.isNode&&k.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function y1(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function w1(e){const t={},r=Object.keys(e);let n;const i=r.length;let s;for(n=0;n<i;n++)s=r[n],t[s]=e[s];return t}function ff(e){function t(r,n,i,s){let o=r[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=s>=r.length;return o=!o&&k.isArray(i)?i.length:o,c?(k.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!l):((!i[o]||!k.isObject(i[o]))&&(i[o]=[]),t(r,n,i[o],s)&&k.isArray(i[o])&&(i[o]=w1(i[o])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const r={};return k.forEachEntry(e,(n,i)=>{t(y1(n),i,r,0)}),r}return null}function j1(e,t,r){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ri={transitional:pf,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,s=k.isObject(t);if(s&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i?JSON.stringify(ff(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return v1(t,this.formSerializer).toString();if((l=k.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ua(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||i?(r.setContentType("application/json",!1),j1(t)):t}],transformResponse:[function(t){const r=this.transitional||ri.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(n&&!this.responseType||i)){const o=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?B.from(l,B.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Re.classes.FormData,Blob:Re.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{ri.headers[e]={}});const b1=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),k1=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!r||t[r]&&b1[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},iu=Symbol("internals");function hn(e){return e&&String(e).trim().toLowerCase()}function Ui(e){return e===!1||e==null?e:k.isArray(e)?e.map(Ui):String(e)}function N1(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const S1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function gs(e,t,r,n,i){if(k.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!k.isString(t)){if(k.isString(n))return t.indexOf(n)!==-1;if(k.isRegExp(n))return n.test(t)}}function C1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function E1(e,t){const r=k.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,s,o){return this[n].call(this,t,i,s,o)},configurable:!0})})}let $e=class{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function s(l,c,u){const d=hn(c);if(!d)throw new Error("header name must be a non-empty string");const p=k.findKey(i,d);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||c]=Ui(l))}const o=(l,c)=>k.forEach(l,(u,d)=>s(u,d,c));if(k.isPlainObject(t)||t instanceof this.constructor)o(t,r);else if(k.isString(t)&&(t=t.trim())&&!S1(t))o(k1(t),r);else if(k.isObject(t)&&k.isIterable(t)){let l={},c,u;for(const d of t){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[u=d[0]]=(c=l[u])?k.isArray(c)?[...c,d[1]]:[c,d[1]]:d[1]}o(l,r)}else t!=null&&s(r,t,n);return this}get(t,r){if(t=hn(t),t){const n=k.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return N1(i);if(k.isFunction(r))return r.call(this,i,n);if(k.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=hn(t),t){const n=k.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||gs(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function s(o){if(o=hn(o),o){const l=k.findKey(n,o);l&&(!r||gs(n,n[l],l,r))&&(delete n[l],i=!0)}}return k.isArray(t)?t.forEach(s):s(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const s=r[n];(!t||gs(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const r=this,n={};return k.forEach(this,(i,s)=>{const o=k.findKey(n,s);if(o){r[o]=Ui(i),delete r[s];return}const l=t?C1(s):String(s).trim();l!==s&&delete r[s],r[l]=Ui(i),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return k.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&k.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[iu]=this[iu]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=hn(o);n[l]||(E1(i,o),n[l]=!0)}return k.isArray(t)?t.forEach(s):s(t),this}};$e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors($e.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});k.freezeMethods($e);function xs(e,t){const r=this||ri,n=t||r,i=$e.from(n.headers);let s=n.data;return k.forEach(e,function(l){s=l.call(r,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function hf(e){return!!(e&&e.__CANCEL__)}function an(e,t,r){B.call(this,e??"canceled",B.ERR_CANCELED,t,r),this.name="CanceledError"}k.inherits(an,B,{__CANCEL__:!0});function mf(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new B("Request failed with status code "+r.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function P1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function R1(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=n[s];o||(o=u),r[i]=c,n[i]=u;let p=s,h=0;for(;p!==i;)h+=r[p++],p=p%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const w=d&&u-d;return w?Math.round(h*1e3/w):void 0}}function _1(e,t){let r=0,n=1e3/t,i,s;const o=(u,d=Date.now())=>{r=d,i=null,s&&(clearTimeout(s),s=null),e(...u)};return[(...u)=>{const d=Date.now(),p=d-r;p>=n?o(u,d):(i=u,s||(s=setTimeout(()=>{s=null,o(i)},n-p)))},()=>i&&o(i)]}const xa=(e,t,r=3)=>{let n=0;const i=R1(50,250);return _1(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,c=o-n,u=i(c),d=o<=l;n=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-o)/u:void 0,event:s,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(p)},r)},au=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},su=e=>(...t)=>k.asap(()=>e(...t)),z1=Re.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Re.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Re.origin),Re.navigator&&/(msie|trident)/i.test(Re.navigator.userAgent)):()=>!0,L1=Re.hasStandardBrowserEnv?{write(e,t,r,n,i,s){const o=[e+"="+encodeURIComponent(t)];k.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),k.isString(n)&&o.push("path="+n),k.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function T1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function O1(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function gf(e,t,r){let n=!T1(t);return e&&(n||r==!1)?O1(e,t):t}const ou=e=>e instanceof $e?{...e}:e;function xr(e,t){t=t||{};const r={};function n(u,d,p,h){return k.isPlainObject(u)&&k.isPlainObject(d)?k.merge.call({caseless:h},u,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function i(u,d,p,h){if(k.isUndefined(d)){if(!k.isUndefined(u))return n(void 0,u,p,h)}else return n(u,d,p,h)}function s(u,d){if(!k.isUndefined(d))return n(void 0,d)}function o(u,d){if(k.isUndefined(d)){if(!k.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function l(u,d,p){if(p in t)return n(u,d);if(p in e)return n(void 0,u)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,d,p)=>i(ou(u),ou(d),p,!0)};return k.forEach(Object.keys({...e,...t}),function(d){const p=c[d]||i,h=p(e[d],t[d],d);k.isUndefined(h)&&p!==l||(r[d]=h)}),r}const xf=e=>{const t=xr({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=t;if(t.headers=o=$e.from(o),t.url=df(gf(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),k.isFormData(r)){if(Re.hasStandardBrowserEnv||Re.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(k.isFunction(r.getHeaders)){const c=r.getHeaders(),u=["content-type","content-length"];Object.entries(c).forEach(([d,p])=>{u.includes(d.toLowerCase())&&o.set(d,p)})}}if(Re.hasStandardBrowserEnv&&(n&&k.isFunction(n)&&(n=n(t)),n||n!==!1&&z1(t.url))){const c=i&&s&&L1.read(s);c&&o.set(i,c)}return t},M1=typeof XMLHttpRequest<"u",A1=M1&&function(e){return new Promise(function(r,n){const i=xf(e);let s=i.data;const o=$e.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=i,d,p,h,w,g;function y(){w&&w(),g&&g(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let b=new XMLHttpRequest;b.open(i.method.toUpperCase(),i.url,!0),b.timeout=i.timeout;function x(){if(!b)return;const m=$e.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),N={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:m,config:e,request:b};mf(function(R){r(R),y()},function(R){n(R),y()},N),b=null}"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(x)},b.onabort=function(){b&&(n(new B("Request aborted",B.ECONNABORTED,e,b)),b=null)},b.onerror=function(j){const N=j&&j.message?j.message:"Network Error",E=new B(N,B.ERR_NETWORK,e,b);E.event=j||null,n(E),b=null},b.ontimeout=function(){let j=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const N=i.transitional||pf;i.timeoutErrorMessage&&(j=i.timeoutErrorMessage),n(new B(j,N.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,b)),b=null},s===void 0&&o.setContentType(null),"setRequestHeader"in b&&k.forEach(o.toJSON(),function(j,N){b.setRequestHeader(N,j)}),k.isUndefined(i.withCredentials)||(b.withCredentials=!!i.withCredentials),l&&l!=="json"&&(b.responseType=i.responseType),u&&([h,g]=xa(u,!0),b.addEventListener("progress",h)),c&&b.upload&&([p,w]=xa(c),b.upload.addEventListener("progress",p),b.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(d=m=>{b&&(n(!m||m.type?new an(null,e,b):m),b.abort(),b=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const f=P1(i.url);if(f&&Re.protocols.indexOf(f)===-1){n(new B("Unsupported protocol "+f+":",B.ERR_BAD_REQUEST,e));return}b.send(s||null)})},F1=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,i;const s=function(u){if(!i){i=!0,l();const d=u instanceof Error?u:this.reason;n.abort(d instanceof B?d:new an(d instanceof Error?d.message:d))}};let o=t&&setTimeout(()=>{o=null,s(new B(`timeout ${t} of ms exceeded`,B.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),e=null)};e.forEach(u=>u.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=()=>k.asap(l),c}},D1=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,i;for(;n<r;)i=n+t,yield e.slice(n,i),n=i},I1=async function*(e,t){for await(const r of U1(e))yield*D1(r,t)},U1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},lu=(e,t,r,n)=>{const i=I1(e,t);let s=0,o,l=c=>{o||(o=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await i.next();if(u){l(),c.close();return}let p=d.byteLength;if(r){let h=s+=p;r(h)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},cu=64*1024,{isFunction:Ni}=k,B1=(({Request:e,Response:t})=>({Request:e,Response:t}))(k.global),{ReadableStream:uu,TextEncoder:du}=k.global,pu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},H1=e=>{e=k.merge.call({skipUndefined:!0},B1,e);const{fetch:t,Request:r,Response:n}=e,i=t?Ni(t):typeof fetch=="function",s=Ni(r),o=Ni(n);if(!i)return!1;const l=i&&Ni(uu),c=i&&(typeof du=="function"?(g=>y=>g.encode(y))(new du):async g=>new Uint8Array(await new r(g).arrayBuffer())),u=s&&l&&pu(()=>{let g=!1;const y=new r(Re.origin,{body:new uu,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!y}),d=o&&l&&pu(()=>k.isReadableStream(new n("").body)),p={stream:d&&(g=>g.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!p[g]&&(p[g]=(y,b)=>{let x=y&&y[g];if(x)return x.call(y);throw new B(`Response type '${g}' is not supported`,B.ERR_NOT_SUPPORT,b)})});const h=async g=>{if(g==null)return 0;if(k.isBlob(g))return g.size;if(k.isSpecCompliantForm(g))return(await new r(Re.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(k.isArrayBufferView(g)||k.isArrayBuffer(g))return g.byteLength;if(k.isURLSearchParams(g)&&(g=g+""),k.isString(g))return(await c(g)).byteLength},w=async(g,y)=>{const b=k.toFiniteNumber(g.getContentLength());return b??h(y)};return async g=>{let{url:y,method:b,data:x,signal:f,cancelToken:m,timeout:j,onDownloadProgress:N,onUploadProgress:E,responseType:R,headers:z,withCredentials:W="same-origin",fetchOptions:M}=xf(g),X=t||fetch;R=R?(R+"").toLowerCase():"text";let U=F1([f,m&&m.toAbortSignal()],j),me=null;const ze=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let L;try{if(E&&u&&b!=="get"&&b!=="head"&&(L=await w(z,x))!==0){let Q=new r(y,{method:"POST",body:x,duplex:"half"}),G;if(k.isFormData(x)&&(G=Q.headers.get("content-type"))&&z.setContentType(G),Q.body){const[Ze,Ae]=au(L,xa(su(E)));x=lu(Q.body,cu,Ze,Ae)}}k.isString(W)||(W=W?"include":"omit");const q=s&&"credentials"in r.prototype,ve={...M,signal:U,method:b.toUpperCase(),headers:z.normalize().toJSON(),body:x,duplex:"half",credentials:q?W:void 0};me=s&&new r(y,ve);let C=await(s?X(me,M):X(y,ve));const T=d&&(R==="stream"||R==="response");if(d&&(N||T&&ze)){const Q={};["status","statusText","headers"].forEach(Lt=>{Q[Lt]=C[Lt]});const G=k.toFiniteNumber(C.headers.get("content-length")),[Ze,Ae]=N&&au(G,xa(su(N),!0))||[];C=new n(lu(C.body,cu,Ze,()=>{Ae&&Ae(),ze&&ze()}),Q)}R=R||"text";let A=await p[k.findKey(p,R)||"text"](C,g);return!T&&ze&&ze(),await new Promise((Q,G)=>{mf(Q,G,{data:A,headers:$e.from(C.headers),status:C.status,statusText:C.statusText,config:g,request:me})})}catch(q){throw ze&&ze(),q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,g,me),{cause:q.cause||q}):B.from(q,q&&q.code,g,me)}}},W1=new Map,vf=e=>{let t=e?e.env:{};const{fetch:r,Request:n,Response:i}=t,s=[n,i,r];let o=s.length,l=o,c,u,d=W1;for(;l--;)c=s[l],u=d.get(c),u===void 0&&d.set(c,u=l?new Map:H1(t)),d=u;return u};vf();const bo={http:s1,xhr:A1,fetch:{get:vf}};k.forEach(bo,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fu=e=>`- ${e}`,$1=e=>k.isFunction(e)||e===null||e===!1,yf={getAdapter:(e,t)=>{e=k.isArray(e)?e:[e];const{length:r}=e;let n,i;const s={};for(let o=0;o<r;o++){n=e[o];let l;if(i=n,!$1(n)&&(i=bo[(l=String(n)).toLowerCase()],i===void 0))throw new B(`Unknown adapter '${l}'`);if(i&&(k.isFunction(i)||(i=i.get(t))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=r?o.length>1?`since :
`+o.map(fu).join(`
`):" "+fu(o[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i},adapters:bo};function vs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new an(null,e)}function hu(e){return vs(e),e.headers=$e.from(e.headers),e.data=xs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),yf.getAdapter(e.adapter||ri.adapter,e)(e).then(function(n){return vs(e),n.data=xs.call(e,e.transformResponse,n),n.headers=$e.from(n.headers),n},function(n){return hf(n)||(vs(e),n&&n.response&&(n.response.data=xs.call(e,e.transformResponse,n.response),n.response.headers=$e.from(n.response.headers))),Promise.reject(n)})}const wf="1.12.2",Ba={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ba[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const mu={};Ba.transitional=function(t,r,n){function i(s,o){return"[Axios v"+wf+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return(s,o,l)=>{if(t===!1)throw new B(i(o," has been removed"+(r?" in "+r:"")),B.ERR_DEPRECATED);return r&&!mu[o]&&(mu[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,o,l):!0}};Ba.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function V1(e,t,r){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const s=n[i],o=t[s];if(o){const l=e[s],c=l===void 0||o(l,s,e);if(c!==!0)throw new B("option "+s+" must be "+c,B.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new B("Unknown option "+s,B.ERR_BAD_OPTION)}}const Bi={assertOptions:V1,validators:Ba},mt=Bi.validators;let dr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new nu,response:new nu}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=xr(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:s}=r;n!==void 0&&Bi.assertOptions(n,{silentJSONParsing:mt.transitional(mt.boolean),forcedJSONParsing:mt.transitional(mt.boolean),clarifyTimeoutError:mt.transitional(mt.boolean)},!1),i!=null&&(k.isFunction(i)?r.paramsSerializer={serialize:i}:Bi.assertOptions(i,{encode:mt.function,serialize:mt.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Bi.assertOptions(r,{baseUrl:mt.spelling("baseURL"),withXsrfToken:mt.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=s&&k.merge(s.common,s[r.method]);s&&k.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),r.headers=$e.concat(o,s);const l=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(c=c&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let d,p=0,h;if(!c){const g=[hu.bind(this),void 0];for(g.unshift(...l),g.push(...u),h=g.length,d=Promise.resolve(r);p<h;)d=d.then(g[p++],g[p++]);return d}h=l.length;let w=r;for(;p<h;){const g=l[p++],y=l[p++];try{w=g(w)}catch(b){y.call(this,b);break}}try{d=hu.call(this,w)}catch(g){return Promise.reject(g)}for(p=0,h=u.length;p<h;)d=d.then(u[p++],u[p++]);return d}getUri(t){t=xr(this.defaults,t);const r=gf(t.baseURL,t.url,t.allowAbsoluteUrls);return df(r,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){dr.prototype[t]=function(r,n){return this.request(xr(n||{},{method:t,url:r,data:(n||{}).data}))}});k.forEach(["post","put","patch"],function(t){function r(n){return function(s,o,l){return this.request(xr(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}dr.prototype[t]=r(),dr.prototype[t+"Form"]=r(!0)});let q1=class jf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(i=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](i);n._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{n.subscribe(l),s=l}).then(i);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s,o,l){n.reason||(n.reason=new an(s,o,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new jf(function(i){t=i}),cancel:t}}};function Q1(e){return function(r){return e.apply(null,r)}}function K1(e){return k.isObject(e)&&e.isAxiosError===!0}const ko={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ko).forEach(([e,t])=>{ko[t]=e});function bf(e){const t=new dr(e),r=Gp(dr.prototype.request,t);return k.extend(r,dr.prototype,t,{allOwnKeys:!0}),k.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return bf(xr(e,i))},r}const ae=bf(ri);ae.Axios=dr;ae.CanceledError=an;ae.CancelToken=q1;ae.isCancel=hf;ae.VERSION=wf;ae.toFormData=Ua;ae.AxiosError=B;ae.Cancel=ae.CanceledError;ae.all=function(t){return Promise.all(t)};ae.spread=Q1;ae.isAxiosError=K1;ae.mergeConfig=xr;ae.AxiosHeaders=$e;ae.formToJSON=e=>ff(k.isHTMLForm(e)?new FormData(e):e);ae.getAdapter=yf.getAdapter;ae.HttpStatusCode=ko;ae.default=ae;const{Axios:Hx,AxiosError:Wx,CanceledError:$x,isCancel:Vx,CancelToken:qx,VERSION:Qx,all:Kx,Cancel:Yx,isAxiosError:Xx,spread:Zx,toFormData:Gx,AxiosHeaders:Jx,HttpStatusCode:ev,formToJSON:tv,getAdapter:rv,mergeConfig:nv}=ae,kf=v.createContext(void 0);function Y1({children:e}){const[t,r]=v.useState([]);v.useEffect(()=>{const i=localStorage.getItem("cart");i&&r(JSON.parse(i))},[]),v.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(t))},[t]);const n=v.useMemo(()=>({items:t,count:t.reduce((i,s)=>i+s.qty,0),add:(i,s=1)=>{r(o=>o.find(c=>c.productId===i.productId)?o.map(c=>c.productId===i.productId?{...c,qty:c.qty+s}:c):[...o,{...i,id:crypto.randomUUID(),qty:s}])},remove:i=>r(s=>s.filter(o=>o.id!==i)),update:(i,s)=>r(o=>o.map(l=>l.id===i?{...l,qty:s}:l)),clear:()=>r([])}),[t]);return a.jsx(kf.Provider,{value:n,children:e})}function ni(){const e=v.useContext(kf);if(!e)throw new Error("useCart must be used within CartProvider");return e}function X1(){var i;const{slug:e}=Wg(),[t,r]=v.useState(null),{add:n}=ni();return v.useEffect(()=>{e&&ae.get(`/api/v1/products/${e}`).then(s=>r(s.data))},[e]),t?a.jsx("div",{className:"container",style:{padding:24},children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[a.jsx("div",{children:a.jsx("img",{src:((i=t.images)==null?void 0:i[0])||"https://via.placeholder.com/600x400",alt:t.name,style:{width:"100%",borderRadius:12,boxShadow:"var(--shadow)"}})}),a.jsxs("div",{children:[a.jsx("h1",{style:{marginTop:0},children:t.name}),a.jsxs("div",{className:"price",style:{fontSize:22},children:["LKR ",t.price]}),a.jsx("p",{style:{color:"var(--muted)"},children:t.description||"A beautiful product made for you."}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{className:"btn",onClick:()=>{var s;return n({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:(s=t.images)==null?void 0:s[0]})},children:"Add to Cart"}),a.jsx("button",{className:"btn",onClick:()=>{var s;return n({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:(s=t.images)==null?void 0:s[0]})},children:"Buy Now"})]})]})]})}):a.jsx("div",{className:"container",style:{padding:24},children:"Loading..."})}const ie=ae.create({baseURL:"/api/v1"}),gu=typeof window<"u"?localStorage.getItem("access_token"):null;gu&&(ie.defaults.headers.common.Authorization=`Bearer ${gu}`);function xu(e){e?ie.defaults.headers.common.Authorization=`Bearer ${e}`:delete ie.defaults.headers.common.Authorization}ie.interceptors.request.use(e=>{try{const t=(e.url||"").toLowerCase();if(!(t.includes("/auth/login")||t.includes("/auth/register"))){const n=localStorage.getItem("access_token");n&&(e.headers=e.headers||{},e.headers.Authorization=`Bearer ${n}`)}}catch{}return e});let kr=!1,No=[];function Si(e){No.forEach(t=>t(e)),No=[]}ie.interceptors.response.use(e=>e,async e=>{var n;const t=e.config;if(!t)return Promise.reject(e);if(((n=e.response)==null?void 0:n.status)===401&&!t._retry){t._retry=!0;try{if(kr)return new Promise((u,d)=>{No.push(p=>{p?(t.headers.Authorization=`Bearer ${p}`,u(ie(t))):d(e)})});kr=!0;const i=localStorage.getItem("refresh_token");if(!i)return Si(null),kr=!1,Promise.reject(e);const o=(await ae.post("/api/v1/auth/refresh",{refresh_token:i})).data,l=o==null?void 0:o.access_token,c=o==null?void 0:o.refresh_token;if(l)return localStorage.setItem("access_token",l),c&&localStorage.setItem("refresh_token",c),ie.defaults.headers.common.Authorization=`Bearer ${l}`,Si(l),kr=!1,t.headers.Authorization=`Bearer ${l}`,ie(t);Si(null),kr=!1}catch{Si(null),kr=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}try{window.location.href="/login"}catch{}return Promise.reject(e)}}return Promise.reject(e)});const Nf=v.createContext(void 0);function Z1({children:e}){const[t,r]=v.useState(null),[n,i]=v.useState(null);v.useEffect(()=>{const o=localStorage.getItem("access_token"),l=localStorage.getItem("user");o&&i(o),l&&r(JSON.parse(l))},[]),v.useEffect(()=>{xu(n)},[n]);const s=v.useMemo(()=>({user:t,accessToken:n,login:async(o,l)=>{const c=await ie.post("/auth/login",{email:o,password:l}),{access_token:u,refresh_token:d,user:p}=c.data;r(p),i(u),localStorage.setItem("access_token",u),d&&localStorage.setItem("refresh_token",d),localStorage.setItem("user",JSON.stringify(p)),xu(u)},register:async(o,l,c)=>{await ie.post("/auth/register",{email:o,password:l,full_name:c})},logout:()=>{r(null),i(null),localStorage.removeItem("access_token"),localStorage.removeItem("user")}}),[t,n]);return a.jsx(Nf.Provider,{value:s,children:e})}function ii(){const e=v.useContext(Nf);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}function G1(){var f;const{login:e}=ii(),[t,r]=v.useState(""),[n,i]=v.useState(""),[s,o]=v.useState(null),[l,c]=v.useState(!1),[u,d]=v.useState(!1),[p,h]=v.useState(!0),w=wr(),g=pt(),y=v.useRef(null),b=((f=g.state)==null?void 0:f.from)||"/";v.useEffect(()=>{s&&y.current&&y.current.focus()},[s]),v.useEffect(()=>{let m;return u&&(m=window.setTimeout(()=>d(!1),5e3)),()=>{m&&window.clearTimeout(m)}},[u]);async function x(m){if(m.preventDefault(),o(null),!t||!n){o("Email and password are required.");return}try{c(!0),await e(t,n),p&&typeof localStorage<"u"?localStorage.setItem("remember","1"):localStorage.removeItem("remember"),w(b)}catch{o("Invalid credentials")}finally{c(!1)}}return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"login-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Welcome back"}),a.jsx("p",{className:"subhead",children:"Sign in to manage orders, track deliveries, and update account details."})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container login-wrap",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Login"}),a.jsx("div",{ref:y,tabIndex:-1,"aria-live":"assertive","aria-atomic":"true",className:"live",children:s&&a.jsx("div",{className:"alert error",children:s})}),a.jsxs("form",{className:"form",onSubmit:x,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:m=>r(m.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("div",{className:"label-row",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsx(F,{to:"/forgot",className:"link",children:"Forgot password?"})]}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"password",type:u?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:n,onChange:m=>i(m.target.value),required:!0}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":u?"Hide password":"Show password","aria-pressed":u,"aria-controls":"password",onClick:()=>d(m=>!m),title:u?"Hide password":"Show password",children:u?"🙈":"👁️"})]}),a.jsx("p",{className:"tiny muted",children:"Password visibility will auto-hide after 5 seconds."})]}),a.jsxs("div",{className:"row between",children:[a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:p,onChange:m=>h(m.target.checked)}),a.jsx("span",{children:"Remember me"})]}),a.jsxs("span",{className:"tiny muted",children:["Need an account? ",a.jsx(F,{to:"/register",className:"link",children:"Register"})]})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,children:l?"Signing in…":"Login"}),a.jsxs("div",{className:"or",children:[a.jsx("span",{className:"line"}),a.jsx("span",{className:"muted",children:"or continue with"}),a.jsx("span",{className:"line"})]}),a.jsxs("div",{className:"oauth",children:[a.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>alert("Coming soon"),children:"Google"}),a.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>alert("Coming soon"),children:"GitHub"})]})]})]}),a.jsxs("aside",{className:"panel tips",children:[a.jsx("h3",{children:"Tips"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Use the email registered during checkout."}),a.jsx("li",{children:"Passwords are case-sensitive; check CAPS LOCK."}),a.jsx("li",{children:"After multiple failed attempts, wait a minute before retrying."})]}),a.jsxs("div",{className:"support",children:[a.jsx("p",{className:"muted",children:"Still need help?"}),a.jsx(F,{to:"/contact",className:"btn",children:"Contact support"})]})]})]})}),a.jsx("style",{children:`
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
      `})]})}function J1(){const{register:e}=ii(),[t,r]=v.useState(""),[n,i]=v.useState(""),[s,o]=v.useState(""),[l,c]=v.useState(""),[u,d]=v.useState(!1),[p,h]=v.useState(!0),[w,g]=v.useState(!1),[y,b]=v.useState(!1),[x,f]=v.useState(null),[m,j]=v.useState(null),[N,E]=v.useState(!1),R=wr(),z=v.useRef(null);v.useEffect(()=>{(x||m)&&z.current&&z.current.focus()},[x,m]);const W=v.useMemo(()=>{let U=0;return n.length>=8&&U++,/[A-Z]/.test(n)&&U++,/[a-z]/.test(n)&&U++,/\d/.test(n)&&U++,/[^A-Za-z0-9]/.test(n)&&U++,U},[n]),M=["Very weak","Weak","Fair","Good","Strong","Excellent"][W];async function X(U){if(U.preventDefault(),j(null),f(null),!l||!t||!n||!s){j("All fields are required.");return}if(n!==s){j("Passwords do not match.");return}if(!u){j("Please agree to the Terms and Privacy Policy.");return}try{E(!0),await e(t,n,l),f("Check the inbox to verify the account. Redirecting to Login…"),setTimeout(()=>R("/login"),1e3)}catch{j("Could not create the account. Try again later.")}finally{E(!1)}}return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"register-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Create an account"}),a.jsx("p",{className:"subhead",children:"Join to track orders, save preferences, and get faster checkout."})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container reg-wrap",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Register"}),a.jsxs("div",{ref:z,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[x&&a.jsx("div",{className:"alert success",children:x}),m&&a.jsx("div",{className:"alert error",children:m})]}),a.jsxs("form",{className:"form",onSubmit:X,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"fullName",children:"Full name"}),a.jsx("input",{id:"fullName",type:"text",autoComplete:"name",placeholder:"e.g., Ishfaque Mif",value:l,onChange:U=>c(U.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"email",children:"Email"}),a.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:U=>r(U.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"password",children:"Password"}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"password",type:w?"text":"password",autoComplete:"new-password",placeholder:"At least 8 characters",value:n,onChange:U=>i(U.target.value),required:!0,"aria-describedby":"pw-help"}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":w?"Hide password":"Show password","aria-pressed":w,"aria-controls":"password",onClick:()=>g(U=>!U),children:w?"🙈":"👁️"})]}),a.jsx("div",{id:"pw-help",className:"tiny muted",children:"Use 8+ chars with a mix of upper/lowercase, numbers, and a symbol."}),a.jsxs("div",{className:"meter","aria-hidden":"true",children:[a.jsx("span",{className:`m${W}`}),a.jsx("em",{className:"muted",children:M})]}),a.jsxs("ul",{className:"reqs",children:[a.jsx("li",{className:n.length>=8?"ok":"",children:"8+ characters"}),a.jsx("li",{className:/[A-Z]/.test(n)?"ok":"",children:"Uppercase letter"}),a.jsx("li",{className:/[a-z]/.test(n)?"ok":"",children:"Lowercase letter"}),a.jsx("li",{className:/\d/.test(n)?"ok":"",children:"Number"}),a.jsx("li",{className:/[^A-Za-z0-9]/.test(n)?"ok":"",children:"Symbol"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"confirm",children:"Confirm password"}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"confirm",type:y?"text":"password",autoComplete:"new-password",placeholder:"Re-enter password",value:s,onChange:U=>o(U.target.value),required:!0}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":y?"Hide password":"Show password","aria-pressed":y,"aria-controls":"confirm",onClick:()=>b(U=>!U),children:y?"🙈":"👁️"})]}),s&&s!==n&&a.jsx("div",{className:"tiny error-text",children:"Passwords do not match."})]}),a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:u,onChange:U=>d(U.target.checked),required:!0}),a.jsxs("span",{children:["I agree to the ",a.jsx(F,{to:"/terms",className:"link",children:"Terms"})," and"," ",a.jsx(F,{to:"/privacy",className:"link",children:"Privacy Policy"}),"."]})]}),a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:p,onChange:U=>h(U.target.checked)}),a.jsx("span",{children:"Send occasional product updates and offers."})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:N,children:N?"Creating…":"Create account"}),a.jsxs("div",{className:"row between",children:[a.jsx("span",{className:"tiny muted",children:"Already have an account?"}),a.jsx(F,{to:"/login",className:"link",children:"Login"})]})]})]}),a.jsxs("aside",{className:"panel tips",children:[a.jsx("h3",{children:"Why create an account?"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Faster checkout and saved details."}),a.jsx("li",{children:"Order history and tracking."}),a.jsx("li",{children:"Early access to limited releases."})]}),a.jsxs("div",{className:"support",children:[a.jsx("p",{className:"muted",children:"Need help?"}),a.jsx(F,{to:"/contact",className:"btn",children:"Contact support"})]})]})]})}),a.jsx("style",{children:`
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
      `})]})}function ex(){const{items:e,update:t,remove:r,clear:n}=ni(),i=wr(),[s,o]=v.useState(!1),l=v.useMemo(()=>e.reduce((p,h)=>p+h.price*h.qty,0),[e]),c=(p,h)=>{h<1||Number.isNaN(h)||t(p,h)},u=()=>o(!0),d=encodeURIComponent(`Hello, I have transferred LKR ${l.toFixed(2)} for my order. Here is my payment confirmation.`);return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"cart-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Your Cart"}),a.jsx("p",{className:"subhead",children:"Review items and complete checkout using bank transfer."})]})}),a.jsx("section",{className:"section",children:a.jsx("div",{className:"container",children:e.length===0?a.jsxs("div",{className:"empty",children:[a.jsx("p",{children:"Cart is empty."}),a.jsx("div",{className:"actions",children:a.jsx(F,{to:"/shop",className:"btn btn-primary",children:"Continue Shopping"})})]}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"cart-wrap",children:[a.jsx("div",{className:"table-wrap",role:"region","aria-label":"Cart items",children:a.jsxs("table",{className:"cart-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Product"}),a.jsx("th",{children:"Qty"}),a.jsx("th",{children:"Price"}),a.jsx("th",{children:"Total"}),a.jsx("th",{children:"Action"})]})}),a.jsx("tbody",{children:e.map(p=>a.jsxs("tr",{children:[a.jsx("td",{className:"prod-cell",children:a.jsxs("div",{className:"prod",children:[p.image?a.jsx("img",{src:p.image,alt:p.name}):a.jsx("div",{className:"img-fallback","aria-hidden":!0}),a.jsxs("div",{className:"prod-meta",children:[a.jsx(F,{to:`/product/${p.slug}`,className:"prod-name",children:p.name}),a.jsxs("div",{className:"sku",children:["ID: ",p.id]})]})]})}),a.jsx("td",{className:"qty-cell",children:a.jsxs("div",{className:"qty",children:[a.jsx("button",{className:"btn-qty","aria-label":"Decrease quantity",onClick:()=>c(p.id,p.qty-1),children:"−"}),a.jsx("input",{type:"number",min:1,inputMode:"numeric",value:p.qty,onChange:h=>c(p.id,Number(h.target.value)),"aria-label":`Quantity for ${p.name}`}),a.jsx("button",{className:"btn-qty","aria-label":"Increase quantity",onClick:()=>c(p.id,p.qty+1),children:"+"})]})}),a.jsxs("td",{children:["LKR ",Number(p.price).toFixed(2)]}),a.jsxs("td",{children:["LKR ",(p.price*p.qty).toFixed(2)]}),a.jsx("td",{children:a.jsx("button",{className:"btn btn-ghost",onClick:()=>r(p.id),children:"Remove"})})]},p.id))}),a.jsx("tfoot",{children:a.jsxs("tr",{children:[a.jsx("td",{colSpan:3,className:"right",children:"Subtotal"}),a.jsxs("td",{colSpan:2,className:"subtotal",children:["LKR ",l.toFixed(2)]})]})})]})}),a.jsxs("aside",{className:"summary",children:[a.jsx("h2",{className:"summary-title",children:"Order Summary"}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Subtotal"}),a.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Shipping"}),a.jsx("span",{children:"Calculated at checkout"})]}),a.jsxs("div",{className:"summary-total",children:[a.jsx("span",{children:"Estimated Total"}),a.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),a.jsxs("div",{className:"summary-actions",children:[a.jsx("button",{className:"btn btn-primary",onClick:u,children:"Proceed with Bank Transfer"}),a.jsx("button",{className:"btn btn-ghost",onClick:n,children:"Clear Cart"}),a.jsx(F,{className:"btn",to:"/shop",children:"Continue Shopping"})]}),s&&a.jsxs("div",{className:"transfer",children:[a.jsx("h3",{children:"Bank Transfer Instructions"}),a.jsx("p",{className:"muted",children:"Please transfer the estimated total amount to the bank account listed below. After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification."}),a.jsxs("div",{className:"bank-box",children:[a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Name"}),a.jsx("span",{children:"Ishfaque Mif"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Bank"}),a.jsx("span",{children:"BOC"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Branch"}),a.jsx("span",{children:"Puttalam"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Account No."}),a.jsx("span",{children:"89001476"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Amount"}),a.jsxs("span",{children:["$",l.toFixed(2)]})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Reference"}),a.jsx("span",{children:"Order by your full name"})]})]}),a.jsxs("div",{className:"transfer-actions",children:[a.jsx("a",{className:"btn btn-primary",href:`https://wa.me/94768976222?text=${d}`,target:"_blank",rel:"noopener noreferrer",children:"Send Confirmation via WhatsApp"}),a.jsx("button",{className:"btn",onClick:()=>i("/checkout"),title:"Optionally upload the payment screenshot on the order page",children:"Go to Order Page"})]}),a.jsx("p",{className:"note",children:"Optional: On the order/checkout page, include an upload option to attach the payment screenshot for records. Ensure the name and order reference match the WhatsApp message."})]})]})]})})})}),a.jsx("style",{children:`
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

        .empty{border:1px dashed var(--line);padding:16px;border-radius:12px;background:var(--surface)}
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
        .note{color:var(--muted);font-size:14px;margin-top:8px}

        @media (max-width:1024px){
          .cart-wrap{grid-template-columns:1fr}
          .summary{position:static}
        }
      `})]})}function tx(){const{items:e,clear:t}=ni(),[r,n]=v.useState({line1:"",city:"",postal_code:"",country:"LK"}),[i,s]=v.useState(null),[o,l]=v.useState(null),[c,u]=v.useState("stripe"),[d,p]=v.useState(null);async function h(w){w.preventDefault();const g=await ie.post("/checkout",{shipping_address:r,payment_method:c});c==="stripe"?(s(g.data.payment_intent_client_secret),l(g.data.order_id),t()):(l(g.data.order_id),p(g.data.bank_transfer),t())}return a.jsxs("div",{className:"container",style:{padding:24},children:[a.jsx("h1",{children:"Checkout"}),i?a.jsxs("div",{children:[a.jsxs("div",{children:["Order #",o]}),i&&a.jsxs("div",{children:["Client secret: ",i]}),d&&a.jsxs("div",{style:{marginTop:12},children:[a.jsx("h3",{children:"Bank Transfer Instructions"}),a.jsxs("div",{children:["Name: ",d.name]}),a.jsxs("div",{children:["Bank: ",d.bank]}),a.jsxs("div",{children:["Branch: ",d.branch]}),a.jsxs("div",{children:["Account number: ",d.account_number]}),a.jsxs("div",{children:["WhatsApp: ",d.whatsapp]}),a.jsx("p",{style:{marginTop:8},children:d.instructions}),a.jsx("p",{children:"Please make the transfer and send confirmation to the WhatsApp number. You can upload a payment screenshot from your Orders page after the transfer."})]}),!d&&a.jsx("div",{children:"Use Stripe test cards to confirm payment in your Stripe dashboard."})]}):a.jsxs("form",{onSubmit:h,style:{display:"grid",gap:8,maxWidth:400},children:[a.jsx("input",{placeholder:"Address line 1",value:r.line1,onChange:w=>n({...r,line1:w.target.value})}),a.jsx("input",{placeholder:"City",value:r.city,onChange:w=>n({...r,city:w.target.value})}),a.jsx("input",{placeholder:"Postal code",value:r.postal_code,onChange:w=>n({...r,postal_code:w.target.value})}),a.jsx("input",{placeholder:"Country",value:r.country,onChange:w=>n({...r,country:w.target.value})}),a.jsxs("div",{children:[a.jsxs("label",{children:[a.jsx("input",{type:"radio",checked:c==="stripe",onChange:()=>u("stripe")})," Pay with Card (Stripe)"]}),a.jsx("br",{}),a.jsxs("label",{children:[a.jsx("input",{type:"radio",checked:c==="bank_transfer",onChange:()=>u("bank_transfer")})," Bank Transfer"]})]}),a.jsx("button",{className:"btn",type:"submit",disabled:e.length===0,children:"Create Payment"})]})]})}function rx(){const{user:e,logout:t}=ii(),{count:r}=ni(),[n,i]=v.useState(!1),[s,o]=v.useState(!1),l=pt(),c=v.useRef(null);v.useEffect(()=>{i(!1),o(!1)},[l.pathname]),v.useEffect(()=>{const p=h=>{h.key==="Escape"&&(i(!1),o(!1))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]),v.useEffect(()=>{const p=h=>{c.current&&(c.current.contains(h.target)||o(!1))};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]);const u=({isActive:p})=>p?"nav-link active":"nav-link",d=l.pathname.startsWith("/admin");return a.jsxs("header",{className:"header",children:[a.jsxs("div",{className:"container header-inner",children:[a.jsxs("div",{className:"left",children:[a.jsxs("button",{className:"hamburger","aria-label":"Toggle navigation","aria-controls":"main-menu","aria-expanded":n,onClick:()=>i(p=>!p),children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx(F,{to:"/",className:"brand",children:"Ecommerce"})]}),a.jsxs("nav",{id:"main-menu",className:`nav ${n?"open":""}`,"aria-label":"Main navigation",children:[!d&&a.jsxs(a.Fragment,{children:[a.jsx(ki,{to:"/",end:!0,className:u,children:"Home"}),a.jsx(ki,{to:"/shop",className:u,children:"Shop"}),a.jsx(ki,{to:"/about",className:u,children:"About"}),a.jsx(ki,{to:"/contact",className:u,children:"Contact"}),a.jsxs(F,{to:"/cart",className:"nav-link cart-link",children:["Cart",a.jsx("span",{className:"badge","aria-label":`${r} items in cart`,children:r})]})]}),a.jsx("div",{className:"divider","aria-hidden":!0}),e?a.jsxs("div",{className:"user-wrap",ref:c,children:[e.is_staff&&!d&&a.jsx(F,{to:"/admin",className:"nav-link",children:"Admin"}),a.jsxs("button",{className:"user-btn","aria-haspopup":"menu","aria-expanded":s,onClick:()=>o(p=>!p),title:e.email,children:[a.jsx("div",{className:"avatar","aria-hidden":!0}),a.jsx("span",{className:"email",children:e.email})]}),s&&a.jsxs("div",{className:"user-menu",role:"menu",children:[a.jsx(F,{to:"/account",className:"menu-item",role:"menuitem",children:"Account"}),a.jsx(F,{to:"/orders",className:"menu-item",role:"menuitem",children:"Orders"}),a.jsx("button",{className:"menu-item",role:"menuitem",onClick:t,children:"Logout"})]})]}):a.jsxs("div",{className:"auth",children:[a.jsx(F,{to:"/login",className:"nav-link",children:"Login"}),a.jsx(F,{to:"/register",className:"btn btn-primary",children:"Register"})]})]})]}),n&&a.jsx("div",{className:"overlay",onClick:()=>i(!1),"aria-hidden":!0}),a.jsx("style",{children:`
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
        .nav-link{color:var(--text);text-decoration:none;padding:8px 10px;border-radius:8px}
        .nav-link:hover{background:var(--ghost)}
        .nav-link.active{color:white;background:var(--brand)}
        .cart-link{display:inline-flex;align-items:center;gap:8px}
        .badge{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;border-radius:999px;background:var(--brand);color:white;font-size:12px}
        .divider{width:1px;height:24px;background:var(--line);margin:0 6px}
        .auth{display:flex;align-items:center;gap:10px}
        .btn{display:inline-flex;align-items:center;gap:8px;border-radius:8px;padding:8px 12px;border:1px solid var(--line);background:var(--ghost);color:var(--text);text-decoration:none}
        .btn-primary{background:var(--brand);border-color:var(--brand);color:white}
        .btn-primary:hover{background:var(--brand-600)}
        .user-wrap{position:relative;display:flex;align-items:center;gap:8px}
        .user-btn{display:inline-flex;align-items:center;gap:8px;border-radius:999px;padding:4px 8px;border:1px solid var(--line);background:transparent;color:var(--text)}
        .avatar{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#2a2b36,#171821);border:1px solid var(--line)}
        .email{color:var(--muted);font-size:12px}
        .user-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:180px;border:1px solid var(--line);background:var(--surface);border-radius:10px;box-shadow:0 6px 22px rgba(0,0,0,.3);padding:6px}
        .menu-item{display:block;width:100%;text-align:left;padding:8px 10px;border-radius:8px;color:var(--text);text-decoration:none;border:none;background:transparent}
        .menu-item:hover{background:var(--ghost)}
        .overlay{position:fixed;inset:0;background:rgba(0,0,0,.4)}
        @media (max-width:900px){
          .hamburger{display:flex}
          .nav{position:fixed;inset:64px 0 auto auto;top:64px;right:0;flex-direction:column;align-items:stretch;background:var(--surface);border-left:1px solid var(--line);padding:12px;gap:6px;width:min(300px,90vw);height:calc(100vh - 64px);transform:translateX(100%);transition:.2s}
          .nav.open{transform:translateX(0)}
          .divider{display:none}
          .auth{margin-top:6px}
        }
      `})]})}function nx(){const e=new Date().getFullYear();return a.jsxs("footer",{className:"footer",role:"contentinfo",children:[a.jsxs("div",{className:"container footer-inner",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"col brand-col",children:[a.jsx(F,{to:"/",className:"brand",children:"Ecommerce"}),a.jsx("p",{className:"tagline",children:"Everyday essentials with thoughtful design and lasting quality."})]}),a.jsxs("nav",{className:"col","aria-label":"Footer navigation",children:[a.jsx("h3",{className:"col-title",children:"Navigate"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx(F,{to:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(F,{to:"/shop",children:"Shop"})}),a.jsx("li",{children:a.jsx(F,{to:"/about",children:"About"})}),a.jsx("li",{children:a.jsx(F,{to:"/contact",children:"Contact"})}),a.jsx("li",{children:a.jsx(F,{to:"/cart",children:"Cart"})})]})]}),a.jsxs("nav",{className:"col","aria-label":"Help and policies",children:[a.jsx("h3",{className:"col-title",children:"Help"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx(F,{to:"/support",children:"Support"})}),a.jsx("li",{children:a.jsx(F,{to:"/faq",children:"FAQ"})}),a.jsx("li",{children:a.jsx(F,{to:"/shipping-returns",children:"Shipping & Returns"})}),a.jsx("li",{children:a.jsx(F,{to:"/privacy",children:"Privacy Policy"})}),a.jsx("li",{children:a.jsx(F,{to:"/terms",children:"Terms of Service"})})]})]}),a.jsxs("div",{className:"col",children:[a.jsx("h3",{className:"col-title",children:"Contact"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Email: support@yourstore.com"}),a.jsx("li",{children:"Phone: +94 11 234 5678"}),a.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00"}),a.jsx("li",{children:"Address: 123 Market Street, Colombo"})]}),a.jsxs("div",{className:"social",children:[a.jsx("a",{href:"https://instagram.com/yourstore","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:"IG"}),a.jsx("a",{href:"https://facebook.com/yourstore","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:"FB"}),a.jsx("a",{href:"https://x.com/yourstore","aria-label":"X (Twitter)",target:"_blank",rel:"noopener noreferrer",children:"X"})]})]}),a.jsxs("div",{className:"col newsletter",children:[a.jsx("h3",{className:"col-title",children:"Stay in the loop"}),a.jsx("p",{className:"muted",children:"Subscribe for product drops, care tips, and seasonal edits."}),a.jsxs("form",{className:"signup",onSubmit:t=>{t.preventDefault(),alert("Thanks for subscribing!")},children:[a.jsx("label",{htmlFor:"footer-email",className:"sr-only",children:"Email address"}),a.jsx("input",{id:"footer-email",type:"email",required:!0,placeholder:"email@example.com",autoComplete:"email"}),a.jsx("button",{className:"btn btn-primary",type:"submit",children:"Subscribe"})]}),a.jsx("p",{className:"tiny muted",children:"By subscribing, consent to receive marketing emails; unsubscribe anytime."})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"left",children:[a.jsxs("span",{children:["© ",e," Ecommerce"]}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(F,{to:"/privacy",children:"Privacy"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(F,{to:"/terms",children:"Terms"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(F,{to:"/support",children:"Support"})]}),a.jsxs("div",{className:"right",children:[a.jsx(F,{to:"/sitemap",children:"Sitemap"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:"Back to top ↑"})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function ix(){return a.jsxs(a.Fragment,{children:[a.jsx(rx,{}),a.jsx(Xp,{}),a.jsx(nx,{})]})}function ax(){const[e,t]=v.useState([]),[r,n]=v.useState(1),[i]=v.useState(10),[s,o]=v.useState(0),[l,c]=v.useState(!1),[u,d]=v.useState(null),p=v.useRef(r);v.useEffect(()=>{p.current=r},[r]);async function h(f){var j;c(!0),d(null);const m=new AbortController;try{const E=(await ie.get("/admin/orders",{params:{page:f,size:i},signal:m.signal})).data;t(Array.isArray(E.items)?E.items:[]),o(Number.isFinite(E.total)?E.total:0),n(Number.isFinite(E.page)?E.page:f)}catch(N){const E=N;if(((j=E==null?void 0:E.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}d("Failed to fetch orders")}finally{c(!1)}return()=>m.abort()}v.useEffect(()=>{let f=!1;const m=new AbortController;return(async()=>{var j;try{const N=await ie.get("/admin/orders",{params:{page:1,size:i},signal:m.signal});if(f)return;t(Array.isArray(N.data.items)?N.data.items:[]),o(Number.isFinite(N.data.total)?N.data.total:0),n(Number.isFinite(N.data.page)?N.data.page:1),d(null)}catch(N){if(f)return;const E=N;if(((j=E==null?void 0:E.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}d("Failed to fetch orders")}finally{f||c(!1)}})(),()=>{f=!0,m.abort()}},[]),v.useEffect(()=>{const f=window.setInterval(()=>{const m=p.current;h(m)},5e3);return()=>window.clearInterval(f)},[]),v.useEffect(()=>{r<=0||h(r)},[r]);const w=v.useMemo(()=>Math.max(1,Math.ceil((s||0)/i)),[s,i]);function g(f){return`LKR ${(Number.isFinite(f)?f:0).toFixed(2)}`}async function y(f,m){var j;try{await ie.put(`/admin/orders/${f}/status`,null,{params:{new_status:m}}),await h(p.current)}catch(N){const E=N;if(((j=E==null?void 0:E.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}d("Failed to update status")}}const b=r>1,x=r<w;return a.jsxs("div",{className:"orders-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"10px"},children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),"Order Management"]}),a.jsx("p",{className:"page-subtitle",children:"View and manage customer orders"})]}),a.jsxs("div",{className:"page-header-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:s}),a.jsx("div",{className:"stat-label",children:"Total Orders"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(f=>f.status==="pending").length}),a.jsx("div",{className:"stat-label",children:"Pending"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(f=>f.status==="processing").length}),a.jsx("div",{className:"stat-label",children:"Processing"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(f=>f.status==="delivered").length}),a.jsx("div",{className:"stat-label",children:"Delivered"})]})]})]}),u&&a.jsxs("div",{className:"alert-error",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),u]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"8px"},children:[a.jsx("path",{d:"M21 10H7"}),a.jsx("path",{d:"M21 6H3"}),a.jsx("path",{d:"M21 14H3"}),a.jsx("path",{d:"M21 18H7"})]}),"All Orders",a.jsx("span",{className:"badge-count",children:s})]}),a.jsxs("button",{className:"btn-refresh",onClick:()=>h(1),disabled:l,type:"button",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:l?"spinner":"",children:a.jsx("path",{d:"M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"})}),l?"Refreshing...":"Refresh"]})]}),l&&e.length===0&&a.jsxs("div",{className:"loading-state",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:a.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),a.jsx("p",{children:"Loading orders..."})]}),!l&&e.length===0&&a.jsxs("div",{className:"empty-state-large",children:[a.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.3",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]}),a.jsx("h3",{children:"No Orders Yet"}),a.jsx("p",{children:"Orders will appear here when customers make purchases"})]}),e.length>0&&a.jsxs("div",{className:"orders-table",children:[a.jsxs("div",{className:"table-header-orders",children:[a.jsx("div",{className:"th-order",children:"Order"}),a.jsx("div",{className:"th-status",children:"Status"}),a.jsx("div",{className:"th-total",children:"Total"}),a.jsx("div",{className:"th-actions-orders",children:"Actions"})]}),e.map(f=>a.jsxs("div",{className:"table-row-orders",children:[a.jsx("div",{className:"td-order",children:a.jsxs("div",{className:"order-cell",children:[a.jsx("div",{className:"order-icon",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]})}),a.jsxs("div",{className:"order-info",children:[a.jsxs("div",{className:"order-number",children:["Order #",f.id]}),a.jsxs("div",{className:"order-id",children:["ID: ",f.id]})]})]})}),a.jsx("div",{className:"td-status",children:a.jsxs("span",{className:`status-badge status-${f.status}`,children:[f.status==="pending"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("polyline",{points:"12 6 12 12 16 14"})]}),f.status==="processing"&&a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),f.status==="shipped"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"1",y:"3",width:"15",height:"13"}),a.jsx("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),a.jsx("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),a.jsx("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]}),f.status==="delivered"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),f.status==="canceled"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),a.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),f.status]})}),a.jsx("div",{className:"td-total",children:a.jsx("div",{className:"amount-display",children:g(f.total_amount)})}),a.jsx("div",{className:"td-actions-orders",children:a.jsxs("div",{className:"action-buttons",children:[f.status!=="processing"&&a.jsx("button",{className:"btn-action btn-processing",onClick:()=>y(f.id,"processing"),type:"button",title:"Mark as Processing",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})})}),f.status!=="shipped"&&a.jsx("button",{className:"btn-action btn-shipped",onClick:()=>y(f.id,"shipped"),type:"button",title:"Mark as Shipped",children:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"1",y:"3",width:"15",height:"13"}),a.jsx("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),a.jsx("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),a.jsx("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]})}),f.status!=="delivered"&&a.jsx("button",{className:"btn-action btn-delivered",onClick:()=>y(f.id,"delivered"),type:"button",title:"Mark as Delivered",children:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})})]})})]},f.id))]}),e.length>0&&a.jsxs("div",{className:"pagination-footer",children:[a.jsxs("div",{className:"pagination-info",children:["Showing page ",a.jsx("strong",{children:r})," of ",a.jsx("strong",{children:w})," — ",a.jsx("strong",{children:s})," total orders"]}),a.jsxs("div",{className:"pagination-controls",children:[a.jsxs("button",{className:"btn-page",onClick:()=>n(f=>Math.max(1,f-1)),disabled:!b,type:"button",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("polyline",{points:"15 18 9 12 15 6"})}),"Previous"]}),a.jsx("div",{className:"page-number",children:a.jsx("span",{children:r})}),a.jsxs("button",{className:"btn-page",onClick:()=>n(f=>Math.min(w,f+1)),disabled:!x,type:"button",children:["Next",a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function sx(){const[e,t]=v.useState(null),[r,n]=v.useState(null),[i,s]=v.useState(!0);v.useEffect(()=>{let l=!0;const c=new AbortController;return(async()=>{var u,d,p,h,w;try{const g=await ie.get("/admin/metrics",{signal:c.signal});if(!l)return;t(g.data),n(null)}catch(g){if(!l)return;const y=g;if(((u=y==null?void 0:y.response)==null?void 0:u.status)===401){try{window.location.href="/login"}catch{}return}const x=((p=(d=y==null?void 0:y.response)==null?void 0:d.data)==null?void 0:p.detail)||((w=(h=y==null?void 0:y.response)==null?void 0:h.data)==null?void 0:w.message);n(x||"Failed to load metrics")}finally{l&&s(!1)}})(),()=>{l=!1,c.abort()}},[]);const o=v.useMemo(()=>({users:(e==null?void 0:e.total_users)??0,products:(e==null?void 0:e.total_products)??0,orders:(e==null?void 0:e.total_orders)??0,sales:(e==null?void 0:e.total_sales)??0}),[e]);return i?a.jsx("div",{className:"dashboard-page",children:a.jsxs("div",{className:"loading-state",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:a.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),a.jsx("p",{children:"Loading dashboard..."})]})}):r?a.jsx("div",{className:"dashboard-page",children:a.jsxs("div",{className:"alert-error",role:"alert",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),r]})}):a.jsxs("div",{className:"dashboard-page",children:[a.jsx("div",{className:"page-header",children:a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{marginRight:"10px"},children:[a.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),a.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),"Dashboard Overview"]}),a.jsx("p",{className:"page-subtitle",children:"Monitor your e-commerce metrics at a glance"})]})}),a.jsxs("div",{className:"metrics-grid",role:"region","aria-label":"Key performance indicators",children:[a.jsxs("div",{className:"metric-card users",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Users"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:o.users.toLocaleString()}),a.jsx("div",{className:"metric-subtitle",children:"Registered accounts"})]})]}),a.jsxs("div",{className:"metric-card products",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),a.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Products"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:o.products.toLocaleString()}),a.jsx("div",{className:"metric-subtitle",children:"In catalog"})]})]}),a.jsxs("div",{className:"metric-card orders",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"9",y1:"3",x2:"9",y2:"21"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Orders"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:o.orders.toLocaleString()}),a.jsx("div",{className:"metric-subtitle",children:"All time orders"})]})]}),a.jsxs("div",{className:"metric-card sales",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),a.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]})}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Sales"}),a.jsxs("div",{className:"metric-value","aria-live":"polite",children:["LKR ",Number.isFinite(o.sales)?o.sales.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"]}),a.jsx("div",{className:"metric-subtitle",children:"Revenue generated"})]})]})]}),a.jsx("div",{className:"card-modern welcome-card",children:a.jsxs("div",{className:"welcome-content",children:[a.jsxs("div",{className:"welcome-text",children:[a.jsx("h2",{children:"Welcome to Your Dashboard!"}),a.jsx("p",{children:"Your e-commerce platform is running smoothly. Monitor key metrics and manage your store efficiently."})]}),a.jsxs("div",{className:"welcome-stats",children:[a.jsxs("div",{className:"welcome-stat",children:[a.jsx("span",{className:"stat-number",children:(o.sales/o.orders||0).toFixed(2)}),a.jsx("span",{className:"stat-label",children:"Avg Order Value"})]}),a.jsxs("div",{className:"welcome-stat",children:[a.jsxs("span",{className:"stat-number",children:[o.orders>0?(o.products/o.orders*100).toFixed(1):"0","%"]}),a.jsx("span",{className:"stat-label",children:"Conversion Rate"})]})]})]})}),a.jsx("style",{children:`
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
      `})]})}var So=function(e,t){return So=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},So(e,t)};function ox(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");So(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var ye=function(){return ye=Object.assign||function(t){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},ye.apply(this,arguments)};var vu=!1,ir,Co,Eo,Hi,Wi,Sf,$i,Po,Ro,_o,Cf,zo,Lo,Ef,Pf;function Fe(){if(!vu){vu=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),r=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(zo=/\b(iPhone|iP[ao]d)/.exec(e),Lo=/\b(iP[ao]d)/.exec(e),_o=/Android/i.exec(e),Ef=/FBAN\/\w+;/i.exec(e),Pf=/Mobile/i.exec(e),Cf=!!/Win64/.exec(e),t){ir=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,ir&&document&&document.documentMode&&(ir=document.documentMode);var n=/(?:Trident\/(\d+.\d+))/.exec(e);Sf=n?parseFloat(n[1])+4:ir,Co=t[2]?parseFloat(t[2]):NaN,Eo=t[3]?parseFloat(t[3]):NaN,Hi=t[4]?parseFloat(t[4]):NaN,Hi?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),Wi=t&&t[1]?parseFloat(t[1]):NaN):Wi=NaN}else ir=Co=Eo=Wi=Hi=NaN;if(r){if(r[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);$i=i?parseFloat(i[1].replace("_",".")):!0}else $i=!1;Po=!!r[2],Ro=!!r[3]}else $i=Po=Ro=!1}}var To={ie:function(){return Fe()||ir},ieCompatibilityMode:function(){return Fe()||Sf>ir},ie64:function(){return To.ie()&&Cf},firefox:function(){return Fe()||Co},opera:function(){return Fe()||Eo},webkit:function(){return Fe()||Hi},safari:function(){return To.webkit()},chrome:function(){return Fe()||Wi},windows:function(){return Fe()||Po},osx:function(){return Fe()||$i},linux:function(){return Fe()||Ro},iphone:function(){return Fe()||zo},mobile:function(){return Fe()||zo||Lo||_o||Pf},nativeApp:function(){return Fe()||Ef},android:function(){return Fe()||_o},ipad:function(){return Fe()||Lo}},lx=To,cx=!!(typeof window<"u"&&window.document&&window.document.createElement),ux={canUseDOM:cx},dx=ux,Rf=dx,_f;Rf.canUseDOM&&(_f=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function px(e,t){if(!Rf.canUseDOM||t&&!("addEventListener"in document))return!1;var r="on"+e,n=r in document;if(!n){var i=document.createElement("div");i.setAttribute(r,"return;"),n=typeof i[r]=="function"}return!n&&_f&&e==="wheel"&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}var fx=px,hx=lx,mx=fx,yu=10,wu=40,ju=800;function zf(e){var t=0,r=0,n=0,i=0;return"detail"in e&&(r=e.detail),"wheelDelta"in e&&(r=-e.wheelDelta/120),"wheelDeltaY"in e&&(r=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=r,r=0),n=t*yu,i=r*yu,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||i)&&e.deltaMode&&(e.deltaMode==1?(n*=wu,i*=wu):(n*=ju,i*=ju)),n&&!t&&(t=n<1?-1:1),i&&!r&&(r=i<1?-1:1),{spinX:t,spinY:r,pixelX:n,pixelY:i}}zf.getEventType=function(){return hx.firefox()?"DOMMouseScroll":mx("wheel")?"wheel":"mousewheel"};var gx=zf,xx=gx;const vx=Cu(xx);function yx(e,t,r,n,i,s){s===void 0&&(s=0);var o=Zr(e,t,s),l=o.width,c=o.height,u=Math.min(l,r),d=Math.min(c,n);return u>d*i?{width:d*i,height:d}:{width:u,height:u/i}}function wx(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}function mn(e,t,r,n,i){i===void 0&&(i=0);var s=Zr(t.width,t.height,i),o=s.width,l=s.height;return{x:bu(e.x,o,r.width,n),y:bu(e.y,l,r.height,n)}}function bu(e,t,r,n){var i=t*n/2-r/2;return Ha(e,-i,i)}function ku(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function Nu(e,t){return Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI}function jx(e,t,r,n,i,s,o){s===void 0&&(s=0),o===void 0&&(o=!0);var l=o?bx:kx,c=Zr(t.width,t.height,s),u=Zr(t.naturalWidth,t.naturalHeight,s),d={x:l(100,((c.width-r.width/i)/2-e.x/i)/c.width*100),y:l(100,((c.height-r.height/i)/2-e.y/i)/c.height*100),width:l(100,r.width/c.width*100/i),height:l(100,r.height/c.height*100/i)},p=Math.round(l(u.width,d.width*u.width/100)),h=Math.round(l(u.height,d.height*u.height/100)),w=u.width>=u.height*n,g=w?{width:Math.round(h*n),height:h}:{width:p,height:Math.round(p/n)},y=ye(ye({},g),{x:Math.round(l(u.width-g.width,d.x*u.width/100)),y:Math.round(l(u.height-g.height,d.y*u.height/100))});return{croppedAreaPercentages:d,croppedAreaPixels:y}}function bx(e,t){return Math.min(e,Math.max(0,t))}function kx(e,t){return t}function Nx(e,t,r,n,i,s){var o=Zr(t.width,t.height,r),l=Ha(n.width/o.width*(100/e.width),i,s),c={x:l*o.width/2-n.width/2-o.width*l*(e.x/100),y:l*o.height/2-n.height/2-o.height*l*(e.y/100)};return{crop:c,zoom:l}}function Sx(e,t,r){var n=wx(t);return r.height>r.width?r.height/(e.height*n):r.width/(e.width*n)}function Cx(e,t,r,n,i,s){r===void 0&&(r=0);var o=Zr(t.naturalWidth,t.naturalHeight,r),l=Ha(Sx(e,t,n),i,s),c=n.height>n.width?n.height/e.height:n.width/e.width,u={x:((o.width-e.width)/2-e.x)*c,y:((o.height-e.height)/2-e.y)*c};return{crop:u,zoom:l}}function Su(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function Ex(e){return e*Math.PI/180}function Zr(e,t,r){var n=Ex(r);return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}function Ha(e,t,r){return Math.min(Math.max(e,t),r)}function Ci(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(r){return typeof r=="string"&&r.length>0}).join(" ").trim()}var Px=`.reactEasyCrop_Container {
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
`,Rx=1,_x=3,zx=1,Lx=function(e){ox(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.cropperRef=v.createRef(),r.imageRef=v.createRef(),r.videoRef=v.createRef(),r.containerPosition={x:0,y:0},r.containerRef=null,r.styleRef=null,r.containerRect=null,r.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},r.dragStartPosition={x:0,y:0},r.dragStartCrop={x:0,y:0},r.gestureZoomStart=0,r.gestureRotationStart=0,r.isTouching=!1,r.lastPinchDistance=0,r.lastPinchRotation=0,r.rafDragTimeout=null,r.rafPinchTimeout=null,r.wheelTimer=null,r.currentDoc=typeof document<"u"?document:null,r.currentWindow=typeof window<"u"?window:null,r.resizeObserver=null,r.previousCropSize=null,r.isInitialized=!1,r.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},r.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!r.containerRef)){var n=!0;r.resizeObserver=new window.ResizeObserver(function(i){if(n){n=!1;return}r.computeSizes()}),r.resizeObserver.observe(r.containerRef)}},r.preventZoomSafari=function(n){return n.preventDefault()},r.cleanEvents=function(){r.currentDoc&&(r.currentDoc.removeEventListener("mousemove",r.onMouseMove),r.currentDoc.removeEventListener("mouseup",r.onDragStopped),r.currentDoc.removeEventListener("touchmove",r.onTouchMove),r.currentDoc.removeEventListener("touchend",r.onDragStopped),r.currentDoc.removeEventListener("gesturechange",r.onGestureChange),r.currentDoc.removeEventListener("gestureend",r.onGestureEnd),r.currentDoc.removeEventListener("scroll",r.onScroll))},r.clearScrollEvent=function(){r.containerRef&&r.containerRef.removeEventListener("wheel",r.onWheel),r.wheelTimer&&clearTimeout(r.wheelTimer)},r.onMediaLoad=function(){var n=r.computeSizes();n&&(r.previousCropSize=n,r.emitCropData(),r.setInitialCrop(n),r.isInitialized=!0),r.props.onMediaLoaded&&r.props.onMediaLoaded(r.mediaSize)},r.setInitialCrop=function(n){if(r.props.initialCroppedAreaPercentages){var i=Nx(r.props.initialCroppedAreaPercentages,r.mediaSize,r.props.rotation,n,r.props.minZoom,r.props.maxZoom),s=i.crop,o=i.zoom;r.props.onCropChange(s),r.props.onZoomChange&&r.props.onZoomChange(o)}else if(r.props.initialCroppedAreaPixels){var l=Cx(r.props.initialCroppedAreaPixels,r.mediaSize,r.props.rotation,n,r.props.minZoom,r.props.maxZoom),s=l.crop,o=l.zoom;r.props.onCropChange(s),r.props.onZoomChange&&r.props.onZoomChange(o)}},r.computeSizes=function(){var n,i,s,o,l,c,u=r.imageRef.current||r.videoRef.current;if(u&&r.containerRef){r.containerRect=r.containerRef.getBoundingClientRect(),r.saveContainerPosition();var d=r.containerRect.width/r.containerRect.height,p=((n=r.imageRef.current)===null||n===void 0?void 0:n.naturalWidth)||((i=r.videoRef.current)===null||i===void 0?void 0:i.videoWidth)||0,h=((s=r.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((o=r.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,w=u.offsetWidth<p||u.offsetHeight<h,g=p/h,y=void 0;if(w)switch(r.state.mediaObjectFit){default:case"contain":y=d>g?{width:r.containerRect.height*g,height:r.containerRect.height}:{width:r.containerRect.width,height:r.containerRect.width/g};break;case"horizontal-cover":y={width:r.containerRect.width,height:r.containerRect.width/g};break;case"vertical-cover":y={width:r.containerRect.height*g,height:r.containerRect.height};break}else y={width:u.offsetWidth,height:u.offsetHeight};r.mediaSize=ye(ye({},y),{naturalWidth:p,naturalHeight:h}),r.props.setMediaSize&&r.props.setMediaSize(r.mediaSize);var b=r.props.cropSize?r.props.cropSize:yx(r.mediaSize.width,r.mediaSize.height,r.containerRect.width,r.containerRect.height,r.props.aspect,r.props.rotation);return(((l=r.state.cropSize)===null||l===void 0?void 0:l.height)!==b.height||((c=r.state.cropSize)===null||c===void 0?void 0:c.width)!==b.width)&&r.props.onCropSizeChange&&r.props.onCropSizeChange(b),r.setState({cropSize:b},r.recomputeCropPosition),r.props.setCropSize&&r.props.setCropSize(b),b}},r.saveContainerPosition=function(){if(r.containerRef){var n=r.containerRef.getBoundingClientRect();r.containerPosition={x:n.left,y:n.top}}},r.onMouseDown=function(n){r.currentDoc&&(n.preventDefault(),r.currentDoc.addEventListener("mousemove",r.onMouseMove),r.currentDoc.addEventListener("mouseup",r.onDragStopped),r.saveContainerPosition(),r.onDragStart(t.getMousePoint(n)))},r.onMouseMove=function(n){return r.onDrag(t.getMousePoint(n))},r.onScroll=function(n){r.currentDoc&&(n.preventDefault(),r.saveContainerPosition())},r.onTouchStart=function(n){r.currentDoc&&(r.isTouching=!0,!(r.props.onTouchRequest&&!r.props.onTouchRequest(n))&&(r.currentDoc.addEventListener("touchmove",r.onTouchMove,{passive:!1}),r.currentDoc.addEventListener("touchend",r.onDragStopped),r.saveContainerPosition(),n.touches.length===2?r.onPinchStart(n):n.touches.length===1&&r.onDragStart(t.getTouchPoint(n.touches[0]))))},r.onTouchMove=function(n){n.preventDefault(),n.touches.length===2?r.onPinchMove(n):n.touches.length===1&&r.onDrag(t.getTouchPoint(n.touches[0]))},r.onGestureStart=function(n){r.currentDoc&&(n.preventDefault(),r.currentDoc.addEventListener("gesturechange",r.onGestureChange),r.currentDoc.addEventListener("gestureend",r.onGestureEnd),r.gestureZoomStart=r.props.zoom,r.gestureRotationStart=r.props.rotation)},r.onGestureChange=function(n){if(n.preventDefault(),!r.isTouching){var i=t.getMousePoint(n),s=r.gestureZoomStart-1+n.scale;if(r.setNewZoom(s,i,{shouldUpdatePosition:!0}),r.props.onRotationChange){var o=r.gestureRotationStart+n.rotation;r.props.onRotationChange(o)}}},r.onGestureEnd=function(n){r.cleanEvents()},r.onDragStart=function(n){var i,s,o=n.x,l=n.y;r.dragStartPosition={x:o,y:l},r.dragStartCrop=ye({},r.props.crop),(s=(i=r.props).onInteractionStart)===null||s===void 0||s.call(i)},r.onDrag=function(n){var i=n.x,s=n.y;r.currentWindow&&(r.rafDragTimeout&&r.currentWindow.cancelAnimationFrame(r.rafDragTimeout),r.rafDragTimeout=r.currentWindow.requestAnimationFrame(function(){if(r.state.cropSize&&!(i===void 0||s===void 0)){var o=i-r.dragStartPosition.x,l=s-r.dragStartPosition.y,c={x:r.dragStartCrop.x+o,y:r.dragStartCrop.y+l},u=r.props.restrictPosition?mn(c,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):c;r.props.onCropChange(u)}}))},r.onDragStopped=function(){var n,i;r.isTouching=!1,r.cleanEvents(),r.emitCropData(),(i=(n=r.props).onInteractionEnd)===null||i===void 0||i.call(n)},r.onWheel=function(n){if(r.currentWindow&&!(r.props.onWheelRequest&&!r.props.onWheelRequest(n))){n.preventDefault();var i=t.getMousePoint(n),s=vx(n).pixelY,o=r.props.zoom-s*r.props.zoomSpeed/200;r.setNewZoom(o,i,{shouldUpdatePosition:!0}),r.state.hasWheelJustStarted||r.setState({hasWheelJustStarted:!0},function(){var l,c;return(c=(l=r.props).onInteractionStart)===null||c===void 0?void 0:c.call(l)}),r.wheelTimer&&clearTimeout(r.wheelTimer),r.wheelTimer=r.currentWindow.setTimeout(function(){return r.setState({hasWheelJustStarted:!1},function(){var l,c;return(c=(l=r.props).onInteractionEnd)===null||c===void 0?void 0:c.call(l)})},250)}},r.getPointOnContainer=function(n,i){var s=n.x,o=n.y;if(!r.containerRect)throw new Error("The Cropper is not mounted");return{x:r.containerRect.width/2-(s-i.x),y:r.containerRect.height/2-(o-i.y)}},r.getPointOnMedia=function(n){var i=n.x,s=n.y,o=r.props,l=o.crop,c=o.zoom;return{x:(i+l.x)/c,y:(s+l.y)/c}},r.setNewZoom=function(n,i,s){var o=s===void 0?{}:s,l=o.shouldUpdatePosition,c=l===void 0?!0:l;if(!(!r.state.cropSize||!r.props.onZoomChange)){var u=Ha(n,r.props.minZoom,r.props.maxZoom);if(c){var d=r.getPointOnContainer(i,r.containerPosition),p=r.getPointOnMedia(d),h={x:p.x*u-d.x,y:p.y*u-d.y},w=r.props.restrictPosition?mn(h,r.mediaSize,r.state.cropSize,u,r.props.rotation):h;r.props.onCropChange(w)}r.props.onZoomChange(u)}},r.getCropData=function(){if(!r.state.cropSize)return null;var n=r.props.restrictPosition?mn(r.props.crop,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):r.props.crop;return jx(n,r.mediaSize,r.state.cropSize,r.getAspect(),r.props.zoom,r.props.rotation,r.props.restrictPosition)},r.emitCropData=function(){var n=r.getCropData();if(n){var i=n.croppedAreaPercentages,s=n.croppedAreaPixels;r.props.onCropComplete&&r.props.onCropComplete(i,s),r.props.onCropAreaChange&&r.props.onCropAreaChange(i,s)}},r.emitCropAreaChange=function(){var n=r.getCropData();if(n){var i=n.croppedAreaPercentages,s=n.croppedAreaPixels;r.props.onCropAreaChange&&r.props.onCropAreaChange(i,s)}},r.recomputeCropPosition=function(){if(r.state.cropSize){var n=r.props.crop;if(r.isInitialized&&r.previousCropSize){var i=Math.abs(r.previousCropSize.width-r.state.cropSize.width)>1e-6||Math.abs(r.previousCropSize.height-r.state.cropSize.height)>1e-6;if(i){var s=r.state.cropSize.width/r.previousCropSize.width,o=r.state.cropSize.height/r.previousCropSize.height;n={x:r.props.crop.x*s,y:r.props.crop.y*o}}}var l=r.props.restrictPosition?mn(n,r.mediaSize,r.state.cropSize,r.props.zoom,r.props.rotation):n;r.previousCropSize=r.state.cropSize,r.props.onCropChange(l),r.emitCropData()}},r.onKeyDown=function(n){var i,s,o=r.props,l=o.crop,c=o.onCropChange,u=o.keyboardStep,d=o.zoom,p=o.rotation,h=u;if(r.state.cropSize){n.shiftKey&&(h*=.2);var w=ye({},l);switch(n.key){case"ArrowUp":w.y-=h,n.preventDefault();break;case"ArrowDown":w.y+=h,n.preventDefault();break;case"ArrowLeft":w.x-=h,n.preventDefault();break;case"ArrowRight":w.x+=h,n.preventDefault();break;default:return}r.props.restrictPosition&&(w=mn(w,r.mediaSize,r.state.cropSize,d,p)),n.repeat||(s=(i=r.props).onInteractionStart)===null||s===void 0||s.call(i),c(w)}},r.onKeyUp=function(n){var i,s;switch(n.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":n.preventDefault();break;default:return}r.emitCropData(),(s=(i=r.props).onInteractionEnd)===null||s===void 0||s.call(i)},r}return t.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=Px,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},t.prototype.componentWillUnmount=function(){var r,n;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(r=this.resizeObserver)===null||r===void 0||r.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((n=this.styleRef.parentNode)===null||n===void 0||n.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},t.prototype.componentDidUpdate=function(r){var n,i,s,o,l,c,u,d,p;r.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):r.aspect!==this.props.aspect?this.computeSizes():r.objectFit!==this.props.objectFit?this.computeSizes():r.zoom!==this.props.zoom?this.recomputeCropPosition():((n=r.cropSize)===null||n===void 0?void 0:n.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((s=r.cropSize)===null||s===void 0?void 0:s.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((l=r.crop)===null||l===void 0?void 0:l.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((u=r.crop)===null||u===void 0?void 0:u.y)!==((d=this.props.crop)===null||d===void 0?void 0:d.y))&&this.emitCropAreaChange(),r.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),r.video!==this.props.video&&((p=this.videoRef.current)===null||p===void 0||p.load());var h=this.getObjectFit();h!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:h},this.computeSizes)},t.prototype.getAspect=function(){var r=this.props,n=r.cropSize,i=r.aspect;return n?n.width/n.height:i},t.prototype.getObjectFit=function(){var r,n,i,s;if(this.props.objectFit==="cover"){var o=this.imageRef.current||this.videoRef.current;if(o&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var l=this.containerRect.width/this.containerRect.height,c=((r=this.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((n=this.videoRef.current)===null||n===void 0?void 0:n.videoWidth)||0,u=((i=this.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoHeight)||0,d=c/u;return d<l?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},t.prototype.onPinchStart=function(r){var n=t.getTouchPoint(r.touches[0]),i=t.getTouchPoint(r.touches[1]);this.lastPinchDistance=ku(n,i),this.lastPinchRotation=Nu(n,i),this.onDragStart(Su(n,i))},t.prototype.onPinchMove=function(r){var n=this;if(!(!this.currentDoc||!this.currentWindow)){var i=t.getTouchPoint(r.touches[0]),s=t.getTouchPoint(r.touches[1]),o=Su(i,s);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var l=ku(i,s),c=n.props.zoom*(l/n.lastPinchDistance);n.setNewZoom(c,o,{shouldUpdatePosition:!1}),n.lastPinchDistance=l;var u=Nu(i,s),d=n.props.rotation+(u-n.lastPinchRotation);n.props.onRotationChange&&n.props.onRotationChange(d),n.lastPinchRotation=u})}},t.prototype.render=function(){var r=this,n,i=this.props,s=i.image,o=i.video,l=i.mediaProps,c=i.cropperProps,u=i.transform,d=i.crop,p=d.x,h=d.y,w=i.rotation,g=i.zoom,y=i.cropShape,b=i.showGrid,x=i.roundCropAreaPixels,f=i.style,m=f.containerStyle,j=f.cropAreaStyle,N=f.mediaStyle,E=i.classes,R=E.containerClassName,z=E.cropAreaClassName,W=E.mediaClassName,M=(n=this.state.mediaObjectFit)!==null&&n!==void 0?n:this.getObjectFit();return v.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(U){return r.containerRef=U},"data-testid":"container",style:m,className:Ci("reactEasyCrop_Container",R)},s?v.createElement("img",ye({alt:"",className:Ci("reactEasyCrop_Image",M==="contain"&&"reactEasyCrop_Contain",M==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",M==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",W)},l,{src:s,ref:this.imageRef,style:ye(ye({},N),{transform:u||"translate(".concat(p,"px, ").concat(h,"px) rotate(").concat(w,"deg) scale(").concat(g,")")}),onLoad:this.onMediaLoad})):o&&v.createElement("video",ye({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:Ci("reactEasyCrop_Video",M==="contain"&&"reactEasyCrop_Contain",M==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",M==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",W)},l,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:ye(ye({},N),{transform:u||"translate(".concat(p,"px, ").concat(h,"px) rotate(").concat(w,"deg) scale(").concat(g,")")}),controls:!1}),(Array.isArray(o)?o:[{src:o}]).map(function(X){return v.createElement("source",ye({key:X.src},X))})),this.state.cropSize&&v.createElement("div",ye({ref:this.cropperRef,style:ye(ye({},j),{width:x?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:x?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:Ci("reactEasyCrop_CropArea",y==="round"&&"reactEasyCrop_CropAreaRound",b&&"reactEasyCrop_CropAreaGrid",z)},c)))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:_x,minZoom:Rx,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:zx},t.getMousePoint=function(r){return{x:Number(r.clientX),y:Number(r.clientY)}},t.getTouchPoint=function(r){return{x:Number(r.clientX),y:Number(r.clientY)}},t}(v.Component);function Tx(){var Ol;const[e,t]=v.useState([]),[r,n]=v.useState({name:"",slug:"",price:0,stock:0,images:[]}),[i,s]=v.useState([]),[o,l]=v.useState([]),[c,u]=v.useState(null),[d,p]=v.useState(!1),[h,w]=v.useState(!1),[g,y]=v.useState(null),[b,x]=v.useState(!1),[f,m]=v.useState(!1),[j,N]=v.useState(0),[E,R]=v.useState(!1),[z,W]=v.useState(0),[M,X]=v.useState({x:0,y:0}),[U,me]=v.useState(1),[ze,L]=v.useState(null),q=v.useMemo(()=>{const S=r.name.trim(),_=r.slug.trim(),H=Number.isFinite(r.price)&&r.price>=0,$=Number.isInteger(r.stock)&&r.stock>=0;return{nameOk:S.length>1,slugOk:_.length>1,priceOk:H,stockOk:$}},[r]),ve=q.nameOk&&q.slugOk&&q.priceOk&&q.stockOk;function C(S){const _=parseFloat(S);return Number.isFinite(_)&&_>=0?_:0}function T(S){const _=parseInt(S,10);return Number.isFinite(_)&&_>=0?_:0}async function A(){var S,_,H,$,se,J;p(!0),u(null);try{const D=await ie.get("/admin/products");t(Array.isArray((S=D.data)==null?void 0:S.items)?D.data.items:[])}catch(D){const I=D;if(((_=I==null?void 0:I.response)==null?void 0:_.status)===401){try{window.location.href="/login"}catch{}return}u((($=(H=I==null?void 0:I.response)==null?void 0:H.data)==null?void 0:$.detail)||((J=(se=I==null?void 0:I.response)==null?void 0:se.data)==null?void 0:J.message)||"Failed to load")}finally{p(!1)}}v.useEffect(()=>{A()},[]);async function Q(S){var H,$,se,J,D;if(S.length===0)return[];console.log(`Uploading ${S.length} files...`);const _=[];for(const I of S)try{console.log("Uploading file:",I.name,I.type,I.size,"bytes");const K=new FormData;K.append("file",I,I.name);const de=await ie.post("/admin/products/upload",K);console.log("Upload successful, URL:",de.data.url),_.push(de.data.url)}catch(K){const de=K;if(console.error("Upload error for file:",I.name,de),((H=de==null?void 0:de.response)==null?void 0:H.status)===401){console.error("Upload failed: 401 Unauthorized");try{window.location.href="/login"}catch{}return[]}const tr=((se=($=de==null?void 0:de.response)==null?void 0:$.data)==null?void 0:se.detail)||((D=(J=de==null?void 0:de.response)==null?void 0:J.data)==null?void 0:D.message)||"Upload failed";throw console.error("Upload failed with message:",tr),new Error(`Failed to upload ${I.name}: ${tr}`)}return _}function G(S){const _=Array.from(S.target.files||[]);if(_.length>5){u("Maximum 5 images allowed per product");return}s(_);const H=_.map($=>URL.createObjectURL($));l(H),_.length>0&&(m(!0),N(0))}function Ze(S){s(_=>_.filter((H,$)=>$!==S)),l(_=>(URL.revokeObjectURL(_[S]),_.filter((H,$)=>$!==S))),i.length<=1?m(!1):j>=i.length-1&&N(Math.max(0,i.length-2))}function Ae(){N(S=>(S+1)%o.length)}function Lt(){N(S=>(S-1+o.length)%o.length)}function it(S){W(S),X({x:0,y:0}),me(1),L(null),R(!0)}const jr=v.useCallback((S,_)=>{L(_)},[]);async function Lf(S,_){const H=new Image;H.src=S,await new Promise(J=>{H.onload=J});const $=document.createElement("canvas"),se=$.getContext("2d");if(!se)throw new Error("Failed to get canvas context");return $.width=_.width,$.height=_.height,se.drawImage(H,_.x,_.y,_.width,_.height,0,0,_.width,_.height),new Promise((J,D)=>{$.toBlob(I=>{I?J(I):D(new Error("Canvas is empty"))},"image/jpeg",.95)})}async function Tf(){if(ze)try{const S=o[z],_=await Lf(S,ze),$=i[z].name.replace(/\.[^/.]+$/,"_cropped.jpg"),se=new File([_],$,{type:"image/jpeg"});s(J=>{const D=[...J];return D[z]=se,D}),l(J=>{const D=[...J];return URL.revokeObjectURL(D[z]),D[z]=URL.createObjectURL(se),D}),R(!1)}catch(S){console.error("Error cropping image:",S),u("Failed to crop image")}}async function Of(){var S,_,H,$,se;if(u(null),!ve){u("Please fill all fields correctly");return}if(i.length===0&&(!r.images||r.images.length===0)){u("Please add at least 1 image (maximum 5 images)");return}w(!0);try{console.log("Creating product, uploading images first..."),console.log("Selected files:",i.length,"files");const J=await Q(i);console.log("✅ Image upload complete! URLs:",J);const I=[...r.images||[],...J].slice(0,5);if(console.log("📸 Final images array:",I),I.length===0){u("At least 1 image is required"),w(!1);return}const K={name:r.name.trim(),slug:r.slug.trim(),price:r.price,stock:r.stock,images:I,is_published:!0};console.log("📦 Creating product with payload:",JSON.stringify(K,null,2));const de={id:`tmp-${Date.now()}`,...K,name:K.name||"",slug:K.slug||"",price:K.price||0,stock:K.stock||0,images:K.images||[]};t(tr=>[de,...tr]);const Ml=await ie.post("/admin/products",K);console.log("✅ Product created successfully! Response:",Ml.data),n({name:"",slug:"",price:0,stock:0,images:[]}),s([]),l(tr=>(tr.forEach(If=>URL.revokeObjectURL(If)),[])),m(!1),await A();try{localStorage.setItem("products:update",String(Date.now()))}catch{}}catch(J){const D=J;if(((S=D==null?void 0:D.response)==null?void 0:S.status)===401){try{window.location.href="/login"}catch{}return}const de=((H=(_=D==null?void 0:D.response)==null?void 0:_.data)==null?void 0:H.detail)||((se=($=D==null?void 0:D.response)==null?void 0:$.data)==null?void 0:se.message)||(D==null?void 0:D.message)||"Failed to create product";console.error("create product error",D),u(de)}finally{w(!1)}}async function Tl(S,_){var H,$,se,J,D;u(null);try{t(I=>I.map(K=>K.id===S?{...K,..._}:K)),await ie.put(`/admin/products/${S}`,_)}catch(I){const K=I;if(((H=K==null?void 0:K.response)==null?void 0:H.status)===401){try{window.location.href="/login"}catch{}return}u(((se=($=K==null?void 0:K.response)==null?void 0:$.data)==null?void 0:se.detail)||((D=(J=K==null?void 0:K.response)==null?void 0:J.data)==null?void 0:D.message)||"Failed to update"),await A()}}async function Mf(S){var _,H,$,se,J;u(null);try{const D=e;t(I=>I.filter(K=>K.id!==S)),await ie.delete(`/admin/products/${S}`)}catch(D){const I=D;if(((_=I==null?void 0:I.response)==null?void 0:_.status)===401){try{window.location.href="/login"}catch{}return}u((($=(H=I==null?void 0:I.response)==null?void 0:H.data)==null?void 0:$.detail)||((J=(se=I==null?void 0:I.response)==null?void 0:se.data)==null?void 0:J.message)||"Failed to delete"),await A()}}function Af(S){y({...S}),x(!0),u(null)}function ai(){y(null),x(!1),s([]),l(S=>(S.forEach(_=>URL.revokeObjectURL(_)),[])),u(null)}function Ff(S){var _;g&&y({...g,images:((_=g.images)==null?void 0:_.filter((H,$)=>$!==S))||[]})}async function Df(){var S,_,H,$,se;if(!(!g||!g.id)){u(null),w(!0);try{const J=await Q(i),D=[...g.images||[],...J];if(D.length===0){u("At least 1 image is required"),w(!1);return}if(D.length>5){u("Maximum 5 images allowed"),w(!1);return}const I={name:g.name.trim(),slug:g.slug.trim(),price:g.price,stock:g.stock,images:D};await ie.put(`/admin/products/${g.id}`,I),t(K=>K.map(de=>de.id===g.id?{...de,...I}:de)),ai(),await A()}catch(J){const D=J;if(((S=D==null?void 0:D.response)==null?void 0:S.status)===401){try{window.location.href="/login"}catch{}return}u(((H=(_=D==null?void 0:D.response)==null?void 0:_.data)==null?void 0:H.detail)||((se=($=D==null?void 0:D.response)==null?void 0:$.data)==null?void 0:se.message)||"Failed to update product")}finally{w(!1)}}}return a.jsxs("div",{className:"products-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:12},children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}),"Product Management"]}),a.jsx("p",{className:"page-subtitle",children:"Manage your product inventory"})]}),a.jsxs("div",{className:"page-header-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.length}),a.jsx("div",{className:"stat-label",children:"Total Products"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(S=>S.is_published).length}),a.jsx("div",{className:"stat-label",children:"Published"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:e.filter(S=>!S.is_published).length}),a.jsx("div",{className:"stat-label",children:"Draft"})]})]})]}),c&&a.jsxs("div",{className:"alert-error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),c]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add New Product"]}),a.jsx("p",{className:"card-subtitle",children:"Fill in the details below to add a new product"})]}),a.jsxs("div",{className:"card-body",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),a.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Product Name *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., Premium Headphones",value:r.name,onChange:S=>n({...r,name:S.target.value})}),!q.nameOk&&a.jsx("span",{className:"form-error",children:"Name must be at least 2 characters"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"})}),"URL Slug *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., premium-headphones",value:r.slug,onChange:S=>n({...r,slug:S.target.value})}),!q.slugOk&&a.jsx("span",{className:"form-error",children:"Slug must be at least 2 characters"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"})]}),"Price (LKR) *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., 5000.00",type:"number",inputMode:"decimal",value:Number.isFinite(r.price)?r.price:0,onChange:S=>n({...r,price:C(S.target.value)}),min:0,step:"0.01"}),!q.priceOk&&a.jsx("span",{className:"form-error",children:"Price must be ≥ 0"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),"Stock Quantity *"]}),a.jsx("input",{className:"form-input",placeholder:"e.g., 100",type:"number",inputMode:"numeric",value:Number.isFinite(r.stock)?r.stock:0,onChange:S=>n({...r,stock:T(S.target.value)}),min:0,step:1}),!q.stockOk&&a.jsx("span",{className:"form-error",children:"Stock must be an integer ≥ 0"})]})]}),a.jsxs("div",{className:"form-group-full",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),"Product Images ",a.jsxs("span",{className:"badge-info",children:[i.length,"/5 selected"]})]}),a.jsxs("div",{className:"upload-zone",children:[a.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:G,id:"file-upload",className:"file-input"}),a.jsxs("label",{htmlFor:"file-upload",className:"upload-button",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images (1-5)"]}),i.length>0&&a.jsxs("button",{type:"button",onClick:()=>m(!0),className:"preview-button",children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}),"Preview & Edit (",i.length,")"]})]}),i.length>0&&a.jsx("div",{className:"image-preview-grid",children:o.map((S,_)=>a.jsxs("div",{className:"image-preview-item",children:[a.jsx("img",{src:S,alt:`Preview ${_+1}`}),a.jsx("button",{onClick:()=>it(_),className:"btn-crop",type:"button",title:"Crop image",children:"✂️"}),a.jsx("button",{onClick:()=>Ze(_),className:"btn-remove",type:"button",children:"×"})]},_))}),i.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.3",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),a.jsx("p",{children:"No images selected. Please select 1-5 images."})]})]}),a.jsx("button",{onClick:Of,disabled:!ve||h||i.length===0,type:"button",className:"btn-primary",children:h?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Adding Product..."]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add Product"]})})]})]}),a.jsx("div",{style:{margin:"8px 0",color:"#8aa"},children:d?"Loading products…":`Total: ${e.length}`}),a.jsxs("div",{className:"card-modern",style:{marginTop:24},children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Products"]}),a.jsxs("span",{className:"badge-count",children:[e.length," total"]})]}),d?a.jsxs("div",{className:"loading-state",children:[a.jsxs("svg",{className:"spinner",width:"48",height:"48",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),a.jsx("p",{children:"Loading products..."})]}):e.length===0?a.jsxs("div",{className:"empty-state-large",children:[a.jsx("svg",{width:"64",height:"64",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.2",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),a.jsx("h3",{children:"No Products Yet"}),a.jsx("p",{children:"Start by adding your first product above"})]}):a.jsxs("div",{className:"products-table",children:[a.jsxs("div",{className:"table-header",children:[a.jsx("div",{className:"th-product",children:"Product"}),a.jsx("div",{className:"th-slug",children:"Slug"}),a.jsx("div",{className:"th-price",children:"Price (LKR)"}),a.jsx("div",{className:"th-stock",children:"Stock"}),a.jsx("div",{className:"th-status",children:"Status"}),a.jsx("div",{className:"th-actions",children:"Actions"})]}),e.map(S=>a.jsxs("div",{className:"table-row",children:[a.jsx("div",{className:"td-product",children:a.jsxs("div",{className:"product-cell",children:[S.images&&S.images.length>0?a.jsxs("div",{className:"product-images",children:[S.images.slice(0,3).map((_,H)=>{var $;return a.jsx("img",{src:_,alt:`${S.name} ${H+1}`,className:"product-thumbnail",title:`Image ${H+1} of ${(($=S.images)==null?void 0:$.length)||0}`},H)}),S.images.length>3&&a.jsxs("span",{className:"image-count",children:["+",S.images.length-3]})]}):a.jsx("div",{className:"no-image",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.3",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})})}),a.jsx("span",{className:"product-name",children:S.name})]})}),a.jsx("td",{className:"td-slug",children:a.jsx("code",{children:S.slug})}),a.jsx("td",{className:"td-price",children:a.jsx("input",{type:"number",className:"inline-input",defaultValue:S.price,onBlur:_=>{const H=C(_.target.value);S.id&&H!==S.price&&Tl(S.id,{price:H})},min:0,step:"0.01"})}),a.jsx("td",{className:"td-stock",children:a.jsx("input",{type:"number",className:"inline-input",defaultValue:S.stock,onBlur:_=>{const H=T(_.target.value);S.id&&H!==S.stock&&Tl(S.id,{stock:H})},min:0,step:1})}),a.jsx("td",{className:"td-status",children:a.jsx("span",{className:`status-badge ${S.is_published?"published":"draft"}`,children:S.is_published?"Published":"Draft"})}),a.jsx("td",{className:"td-actions",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{onClick:()=>Af(S),type:"button",className:"btn-action btn-edit",title:"Edit product",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),a.jsx("button",{onClick:()=>S.id&&Mf(S.id),type:"button",className:"btn-action btn-delete",title:"Delete product",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},S.id||`${S.slug}-${S.name}`))]})]}),b&&g&&a.jsx("div",{className:"modal-overlay",onClick:ai,children:a.jsxs("div",{className:"modal-content-modern",onClick:S=>S.stopPropagation(),children:[a.jsxs("div",{className:"modal-header-modern",children:[a.jsxs("h2",{children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit Product"]}),a.jsx("button",{onClick:ai,className:"btn-close",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),c&&a.jsxs("div",{className:"alert-error",style:{margin:"16px 0"},children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),c]}),a.jsx("div",{className:"modal-body-modern",children:a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Product Name"}),a.jsx("input",{type:"text",className:"form-input",value:g.name,onChange:S=>y({...g,name:S.target.value}),style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Slug"}),a.jsx("input",{type:"text",value:g.slug,onChange:S=>y({...g,slug:S.target.value}),style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Price"}),a.jsx("input",{type:"number",value:g.price,onChange:S=>y({...g,price:C(S.target.value)}),min:0,step:"0.01",style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Stock"}),a.jsx("input",{type:"number",value:g.stock,onChange:S=>y({...g,stock:T(S.target.value)}),min:0,step:1,style:{width:"100%",padding:8,borderRadius:4,background:"#14151d",border:"1px solid #2a2b36",color:"#e9e9ef"}})]})]}),a.jsxs("div",{children:[a.jsxs("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:["Current Images (",((Ol=g.images)==null?void 0:Ol.length)||0,"/5)"]}),a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12},children:g.images&&g.images.length>0?g.images.map((S,_)=>a.jsxs("div",{style:{position:"relative",width:100,height:100},children:[a.jsx("img",{src:S,alt:`Product ${_+1}`,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:8,border:"2px solid #6D74FF"}}),a.jsx("button",{onClick:()=>Ff(_),style:{position:"absolute",top:-8,right:-8,width:24,height:24,borderRadius:"50%",background:"#ff5d5d",color:"white",border:"none",cursor:"pointer",fontSize:14,lineHeight:"24px",padding:0},type:"button",children:"×"})]},_)):a.jsx("p",{style:{color:"#b8bbd9"},children:"No images yet"})}),a.jsx("label",{style:{display:"block",marginBottom:4,color:"#e9e9ef"},children:"Add New Images (Total must be 1-5)"}),a.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:G,style:{marginBottom:8}}),o.length>0&&a.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:8},children:o.map((S,_)=>a.jsxs("div",{style:{position:"relative",width:80,height:80},children:[a.jsx("img",{src:S,alt:`New ${_+1}`,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:8,border:"2px solid #4ade80"}}),a.jsx("button",{onClick:()=>Ze(_),style:{position:"absolute",top:-8,right:-8,width:24,height:24,borderRadius:"50%",background:"#ff5d5d",color:"white",border:"none",cursor:"pointer",fontSize:14,lineHeight:"24px",padding:0},type:"button",children:"×"})]},_))})]}),a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end",marginTop:12},children:[a.jsx("button",{onClick:ai,type:"button",style:{padding:"10px 20px",background:"#2a2b36",color:"#e9e9ef"},children:"Cancel"}),a.jsx("button",{onClick:Df,disabled:h,type:"button",style:{padding:"10px 20px",background:"#6D74FF",color:"white"},children:h?"Saving...":"Save Changes"})]})]})})]})}),f&&i.length>0&&a.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:a.jsxs("div",{className:"preview-modal-content",onClick:S=>S.stopPropagation(),style:{background:"#14151d",borderRadius:12,padding:24,maxWidth:"90vw",maxHeight:"90vh",display:"flex",flexDirection:"column",gap:16,border:"1px solid #2a2b36"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("h2",{style:{margin:0},children:["Image Preview (",j+1,"/",i.length,")"]}),a.jsx("button",{onClick:()=>m(!1),style:{background:"transparent",border:"none",color:"#e9e9ef",fontSize:24,cursor:"pointer",padding:0,width:32,height:32},children:"×"})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0f",borderRadius:8,padding:16,width:"100%",height:500,position:"relative",overflow:"hidden"},children:o[j]&&a.jsx("img",{src:o[j],alt:`Preview ${j+1}`,style:{width:"100%",height:"100%",objectFit:"contain",borderRadius:4}})}),a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:[a.jsx("button",{onClick:Lt,disabled:i.length<=1,style:{padding:"8px 16px",background:i.length>1?"#2a2b36":"#1a1b26",color:i.length>1?"#e9e9ef":"#666",border:"none",borderRadius:4,cursor:i.length>1?"pointer":"not-allowed"},children:"← Previous"}),a.jsx("button",{onClick:()=>it(j),style:{padding:"8px 16px",background:"#6D74FF",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"✂️ Crop Image"}),a.jsx("button",{onClick:()=>Ze(j),style:{padding:"8px 16px",background:"#5b1a1a",color:"#ffd1d1",border:"none",borderRadius:4,cursor:"pointer"},children:"🗑️ Remove"}),a.jsx("button",{onClick:Ae,disabled:i.length<=1,style:{padding:"8px 16px",background:i.length>1?"#2a2b36":"#1a1b26",color:i.length>1?"#e9e9ef":"#666",border:"none",borderRadius:4,cursor:i.length>1?"pointer":"not-allowed"},children:"Next →"})]}),i.length>1&&a.jsx("div",{style:{display:"flex",gap:8,overflowX:"auto",padding:"8px 0",borderTop:"1px solid #2a2b36",paddingTop:16},children:o.map((S,_)=>a.jsxs("div",{style:{position:"relative",flexShrink:0},children:[a.jsx("img",{src:S,alt:`Thumbnail ${_+1}`,onClick:()=>N(_),style:{width:80,height:80,objectFit:"cover",borderRadius:4,cursor:"pointer",border:_===j?"3px solid #6D74FF":"3px solid transparent",opacity:_===j?1:.6,transition:"all 0.2s",display:"block"}}),a.jsx("button",{onClick:H=>{H.stopPropagation(),it(_)},style:{position:"absolute",bottom:4,right:4,background:"rgba(109, 116, 255, 0.9)",color:"white",border:"none",borderRadius:3,padding:"2px 6px",fontSize:11,cursor:"pointer",fontWeight:"bold"},title:"Crop this image",children:"✂️"})]},_))}),a.jsx("div",{style:{textAlign:"center",color:"#999",fontSize:14},children:"Navigate with arrow buttons or click thumbnails • Remove unwanted images • Close when done"})]})}),E&&o[z]&&a.jsx("div",{className:"modal-overlay",onClick:()=>R(!1),children:a.jsxs("div",{className:"cropper-modal-content",onClick:S=>S.stopPropagation(),style:{background:"#14151d",borderRadius:12,padding:24,maxWidth:"800px",width:"90%",display:"flex",flexDirection:"column",gap:16,border:"1px solid #2a2b36"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsxs("h2",{style:{margin:0},children:["✂️ Crop Image (",z+1,"/",i.length,")"]}),a.jsx("button",{onClick:()=>R(!1),style:{background:"transparent",border:"none",color:"#e9e9ef",fontSize:24,cursor:"pointer",padding:0,width:32,height:32},children:"×"})]}),a.jsx("div",{style:{position:"relative",width:"100%",height:400,background:"#0a0a0f",borderRadius:8,overflow:"hidden"},children:a.jsx(Lx,{image:o[z],crop:M,zoom:U,aspect:1,onCropChange:X,onZoomChange:me,onCropComplete:jr})}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[a.jsx("label",{style:{color:"#e9e9ef",minWidth:60},children:"Zoom:"}),a.jsx("input",{type:"range",min:1,max:3,step:.1,value:U,onChange:S=>me(Number(S.target.value)),style:{flex:1}}),a.jsxs("span",{style:{color:"#999",minWidth:40},children:[U.toFixed(1),"x"]})]}),a.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[a.jsx("button",{onClick:()=>R(!1),style:{padding:"10px 20px",background:"#2a2b36",color:"#e9e9ef",border:"none",borderRadius:4,cursor:"pointer"},children:"Cancel"}),a.jsx("button",{onClick:Tf,style:{padding:"10px 20px",background:"#6D74FF",color:"white",border:"none",borderRadius:4,cursor:"pointer"},children:"✓ Apply Crop"})]}),a.jsx("div",{style:{textAlign:"center",color:"#999",fontSize:14},children:"Drag to position • Scroll or use slider to zoom • Square crop (1:1 ratio)"})]})}),a.jsx("style",{children:`
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
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group-full {
          width: 100%;
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
      `})]})}function Ox(){const[e,t]=v.useState([]),[r,n]=v.useState(null),[i,s]=v.useState(!1),[o,l]=v.useState(!1),c=v.useMemo(()=>e.map(h=>({...h,is_active:h.is_active??!0,is_staff:h.is_staff??!1,is_superuser:h.is_superuser??!1})),[e]);async function u(){var h,w,g,y,b,x;s(!0),n(null);try{const f=await ie.get("/admin/users"),m=Array.isArray((h=f.data)==null?void 0:h.items)?f.data.items:[];t(m)}catch(f){const m=f;if(((w=m==null?void 0:m.response)==null?void 0:w.status)===401){try{window.location.href="/login"}catch{}return}n(((y=(g=m==null?void 0:m.response)==null?void 0:g.data)==null?void 0:y.detail)||((x=(b=m==null?void 0:m.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to load")}finally{s(!1)}}v.useEffect(()=>{u()},[]);async function d(h,w){var g,y,b,x,f;l(!0);try{await ie.put(`/admin/users/${h}/block`,null,{params:{block:w}}),await u()}catch(m){const j=m;if(((g=j==null?void 0:j.response)==null?void 0:g.status)===401){try{window.location.href="/login"}catch{}return}n(((b=(y=j==null?void 0:j.response)==null?void 0:y.data)==null?void 0:b.detail)||((f=(x=j==null?void 0:j.response)==null?void 0:x.data)==null?void 0:f.message)||"Failed to update user")}finally{l(!1)}}async function p(h){var w,g,y,b,x;l(!0);try{await ie.delete(`/admin/users/${h}`),await u()}catch(f){const m=f;if(((w=m==null?void 0:m.response)==null?void 0:w.status)===401){try{window.location.href="/login"}catch{}return}n(((y=(g=m==null?void 0:m.response)==null?void 0:g.data)==null?void 0:y.detail)||((x=(b=m==null?void 0:m.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to delete user")}finally{l(!1)}}return a.jsxs("div",{className:"users-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:12},children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),"User Management"]}),a.jsx("p",{className:"page-subtitle",children:"Manage user accounts and permissions"})]}),a.jsxs("div",{className:"page-header-stats",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:c.length}),a.jsx("div",{className:"stat-label",children:"Total Users"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:c.filter(h=>h.is_active).length}),a.jsx("div",{className:"stat-label",children:"Active"})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-value",children:c.filter(h=>h.is_superuser).length}),a.jsx("div",{className:"stat-label",children:"Admins"})]})]})]}),r&&a.jsxs("div",{className:"alert-error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),r]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",style:{marginRight:8},children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Users"]}),a.jsxs("span",{className:"badge-count",children:[c.length," total"]})]}),i?a.jsxs("div",{className:"loading-state",children:[a.jsxs("svg",{className:"spinner",width:"48",height:"48",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),a.jsx("p",{children:"Loading users..."})]}):c.length===0?a.jsxs("div",{className:"empty-state-large",children:[a.jsx("svg",{width:"64",height:"64",viewBox:"0 0 20 20",fill:"currentColor",opacity:"0.2",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),a.jsx("h3",{children:"No Users Yet"}),a.jsx("p",{children:"No registered users in the system"})]}):a.jsxs("div",{className:"users-table",children:[a.jsxs("div",{className:"table-header-users",children:[a.jsx("div",{className:"th-email",children:"Email"}),a.jsx("div",{className:"th-status",children:"Active"}),a.jsx("div",{className:"th-role",children:"Staff"}),a.jsx("div",{className:"th-role",children:"Superuser"}),a.jsx("div",{className:"th-actions-users",children:"Actions"})]}),c.map(h=>a.jsxs("div",{className:"table-row-users",children:[a.jsx("div",{className:"td-email",children:a.jsxs("div",{className:"user-cell",children:[a.jsx("div",{className:"user-avatar",children:h.email.charAt(0).toUpperCase()}),a.jsxs("div",{className:"user-info",children:[a.jsx("div",{className:"user-email",children:h.email}),a.jsxs("div",{className:"user-id",children:["ID: ",h.id]})]})]})}),a.jsx("div",{className:"td-status",children:a.jsx("span",{className:`status-pill ${h.is_active?"active":"inactive"}`,children:h.is_active?a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Active"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),"Blocked"]})})}),a.jsx("div",{className:"td-role",children:a.jsx("span",{className:`role-badge ${h.is_staff?"yes":"no"}`,children:h.is_staff?"Yes":"No"})}),a.jsx("div",{className:"td-role",children:a.jsx("span",{className:`role-badge ${h.is_superuser?"yes":"no"}`,children:h.is_superuser?"Yes":"No"})}),a.jsx("div",{className:"td-actions-users",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{onClick:()=>d(h.id,!h.is_active),disabled:o,type:"button",className:`btn-action ${h.is_active?"btn-block":"btn-unblock"}`,title:h.is_active?"Block user":"Unblock user",children:h.is_active?a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}):a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),a.jsx("button",{onClick:()=>p(h.id),disabled:o,type:"button",className:"btn-action btn-delete",title:"Delete user",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},h.id))]})]}),a.jsx("style",{children:`
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
        }
        
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
      `})]})}function Mx({children:e}){const{user:t}=ii(),r=pt();return t?t.is_staff||t.is_superuser?e:a.jsx(Xc,{to:"/",replace:!0}):a.jsx(Xc,{to:"/login",state:{from:r.pathname},replace:!0})}function Ax(){var s;const{pathname:e}=pt(),{user:t,logout:r}=ii(),n=wr(),i=()=>{r(),n("/login")};return a.jsxs("div",{className:"admin-container",children:[a.jsxs("header",{className:"admin-header",children:[a.jsx("div",{className:"admin-header-left",children:a.jsxs("div",{className:"admin-logo",children:[a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[a.jsx("rect",{width:"32",height:"32",rx:"8",fill:"url(#grad)"}),a.jsx("path",{d:"M16 8L24 14L16 20L8 14L16 8Z",fill:"white",fillOpacity:"0.9"}),a.jsx("path",{d:"M16 20L24 26L16 32L8 26L16 20Z",fill:"white",fillOpacity:"0.6"}),a.jsx("defs",{children:a.jsxs("linearGradient",{id:"grad",x1:"0",y1:"0",x2:"32",y2:"32",children:[a.jsx("stop",{offset:"0%",stopColor:"#667eea"}),a.jsx("stop",{offset:"100%",stopColor:"#764ba2"})]})})]}),a.jsx("span",{className:"admin-brand",children:"Admin Panel"})]})}),a.jsxs("div",{className:"admin-header-right",children:[a.jsx("button",{className:"admin-btn-icon",title:"Notifications",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})})}),a.jsxs("div",{className:"admin-user-menu",children:[a.jsxs("div",{className:"admin-user-info",children:[a.jsx("div",{className:"admin-avatar",children:(s=t==null?void 0:t.email)==null?void 0:s.charAt(0).toUpperCase()}),a.jsxs("div",{className:"admin-user-details",children:[a.jsx("div",{className:"admin-user-name",children:(t==null?void 0:t.full_name)||(t==null?void 0:t.email)}),a.jsx("div",{className:"admin-user-role",children:t!=null&&t.is_superuser?"Super Admin":"Admin"})]})]}),a.jsxs("button",{className:"admin-btn-logout",onClick:i,children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H3zm7.5 10.5L7 8l3.5-3.5.707.707L8.914 7.5H14v1H8.914l2.293 2.293-.707.707z"})}),"Logout"]})]})]})]}),a.jsxs("div",{className:"admin-layout",children:[a.jsx("aside",{className:"admin-sidebar",children:a.jsxs("nav",{className:"admin-nav",children:[a.jsxs(F,{to:"/admin",className:`admin-nav-item ${e==="/admin"?"active":""}`,children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})}),a.jsx("span",{children:"Dashboard"})]}),a.jsxs(F,{to:"/admin/products",className:`admin-nav-item ${e.startsWith("/admin/products")?"active":""}`,children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})}),a.jsx("span",{children:"Products"})]}),a.jsxs(F,{to:"/admin/users",className:`admin-nav-item ${e.startsWith("/admin/users")?"active":""}`,children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),a.jsx("span",{children:"Users"})]}),a.jsxs(F,{to:"/admin/orders",className:`admin-nav-item ${e.startsWith("/admin/orders")?"active":""}`,children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),a.jsx("path",{fillRule:"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"})]}),a.jsx("span",{children:"Orders"})]}),a.jsx("div",{className:"admin-nav-divider"}),a.jsxs(F,{to:"/",className:"admin-nav-item",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"})}),a.jsx("span",{children:"Back to Site"})]})]})}),a.jsx("main",{className:"admin-main",children:a.jsx(Xp,{})})]}),a.jsx("style",{children:`
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
      `})]})}function Fx(){const[e,t]=v.useState([]),[r,n]=v.useState(!1),[i,s]=v.useState(null),[o,l]=y0(),[c,u]=v.useState(o.get("q")||""),[d,p]=v.useState(o.get("category")||"All"),[h,w]=v.useState(o.get("min")||""),[g,y]=v.useState(o.get("max")||""),[b,x]=v.useState(o.get("sort")||"newest"),[f,m]=v.useState(Number(o.get("page")||1)),[j,N]=v.useState(12),{add:E}=ni();v.useEffect(()=>{let L=!1;async function q(){var C;n(!0),s(null);try{const T=await ae.get("/api/v1/products");if(L)return;const A=(C=T.data)==null?void 0:C.items;A&&A.length?t(A):t([])}catch{L||t([])}finally{L||n(!1)}}q();function ve(C){C.key==="products:update"&&q()}return window.addEventListener("storage",ve),()=>{L=!0,window.removeEventListener("storage",ve)}},[]),v.useEffect(()=>{const L=new URLSearchParams;c&&L.set("q",c),d&&d!=="All"&&L.set("category",d),h&&L.set("min",h),g&&L.set("max",g),b&&b!=="newest"&&L.set("sort",b),f!==1&&L.set("page",String(f)),l(L)},[c,d,h,g,b,f,l]);const R=v.useMemo(()=>{const L=new Set(["All"]);return e.forEach(q=>L.add(q.category||"Other")),Array.from(L)},[e]),z=v.useMemo(()=>{let L=[...e];if(c.trim()){const C=c.toLowerCase();L=L.filter(T=>T.name.toLowerCase().includes(C)||T.slug.toLowerCase().includes(C)||(T.category||"").toLowerCase().includes(C))}d!=="All"&&(L=L.filter(C=>(C.category||"Other")===d));const q=Number(h),ve=Number(g);switch(!Number.isNaN(q)&&h!==""&&(L=L.filter(C=>C.price>=q)),!Number.isNaN(ve)&&g!==""&&(L=L.filter(C=>C.price<=ve)),b){case"price-asc":L.sort((C,T)=>C.price-T.price);break;case"price-desc":L.sort((C,T)=>T.price-C.price);break;case"name-asc":L.sort((C,T)=>C.name.localeCompare(T.name));break;case"name-desc":L.sort((C,T)=>T.name.localeCompare(C.name));break;default:L.sort((C,T)=>{const A=C.createdAt?Date.parse(C.createdAt):0;return(T.createdAt?Date.parse(T.createdAt):0)-A})}return L},[e,c,d,h,g,b]),W=z.length,M=Math.max(1,Math.ceil(W/j)),X=Math.min(f,M),U=(X-1)*j,me=z.slice(U,U+j);v.useEffect(()=>{f>M&&m(M)},[M,f]);const ze=()=>{u(""),p("All"),w(""),y(""),x("newest"),m(1)};return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"shop-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Shop"}),a.jsx("h1",{className:"headline",children:"Find the next daily favorite"}),a.jsx("p",{className:"subhead",children:"Browse curated essentials across apparel, accessories, and more."})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"toolbar",children:[a.jsxs("div",{className:"toolbar-left",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"search",children:"Search"}),a.jsx("input",{id:"search",type:"search",placeholder:"Search products",value:c,onChange:L=>{u(L.target.value),m(1)}})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"category",children:"Category"}),a.jsx("select",{id:"category",value:d,onChange:L=>{p(L.target.value),m(1)},children:R.map(L=>a.jsx("option",{value:L,children:L},L))})]}),a.jsxs("div",{className:"field price",children:[a.jsx("label",{children:"Price"}),a.jsxs("div",{className:"price-row",children:[a.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Min",value:h,onChange:L=>{w(L.target.value),m(1)}}),a.jsx("span",{children:"—"}),a.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Max",value:g,onChange:L=>{y(L.target.value),m(1)}})]})]})]}),a.jsxs("div",{className:"toolbar-right",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"sort",children:"Sort"}),a.jsxs("select",{id:"sort",value:b,onChange:L=>x(L.target.value),children:[a.jsx("option",{value:"newest",children:"Newest"}),a.jsx("option",{value:"price-asc",children:"Price: Low to High"}),a.jsx("option",{value:"price-desc",children:"Price: High to Low"}),a.jsx("option",{value:"name-asc",children:"Name: A–Z"}),a.jsx("option",{value:"name-desc",children:"Name: Z–A"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"perPage",children:"Per page"}),a.jsxs("select",{id:"perPage",value:j,onChange:L=>{N(Number(L.target.value)),m(1)},children:[a.jsx("option",{value:12,children:"12"}),a.jsx("option",{value:24,children:"24"}),a.jsx("option",{value:48,children:"48"})]})]}),a.jsx("button",{className:"btn btn-ghost",onClick:ze,children:"Clear"})]})]}),r&&a.jsx("div",{className:"notice",children:"Loading products…"}),i&&a.jsx("div",{className:"error",children:"Could not load products. Showing demo catalog."}),!r&&me.length===0&&a.jsx("div",{className:"notice",children:"No products match the current filters."}),a.jsx("div",{className:"grid",children:me.map(L=>{var q;return a.jsxs("div",{className:"card",children:[a.jsx(F,{to:`/product/${L.slug}`,className:"card-img",children:a.jsx("img",{src:((q=L.images)==null?void 0:q[0])||"https://via.placeholder.com/600x400",alt:L.name,loading:"lazy"})}),a.jsxs("div",{className:"card-body",children:[a.jsxs("div",{className:"meta",children:[a.jsx("span",{className:"tag",children:L.category||"General"}),a.jsxs("span",{className:"price",children:["LKR ",Number(L.price).toFixed(2)]})]}),a.jsx(F,{to:`/product/${L.slug}`,className:"card-title",children:L.name}),a.jsxs("div",{className:"card-actions",children:[a.jsx("button",{className:"btn btn-primary",onClick:()=>{var ve;return E({productId:L.id,slug:L.slug,name:L.name,price:L.price,image:(ve=L.images)==null?void 0:ve[0]})},children:"Add to Cart"}),a.jsx(F,{to:`/product/${L.slug}`,className:"btn btn-ghost",children:"Details"})]})]})]},L.id)})}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"btn btn-ghost",disabled:X<=1,onClick:()=>m(L=>Math.max(1,L-1)),children:"Prev"}),a.jsxs("span",{className:"page-info",children:["Page ",X," of ",M," • ",W," items"]}),a.jsx("button",{className:"btn btn-ghost",disabled:X>=M,onClick:()=>m(L=>Math.min(M,L+1)),children:"Next"})]})]})}),a.jsx("style",{children:`
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
      `})]})}function Dx(){return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"about-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"About Us"}),a.jsx("h1",{className:"headline",children:"Design-led essentials, made to last"}),a.jsx("p",{className:"subhead",children:"Everyday apparel and accessories built with comfort, durability, and timeless aesthetics at the core."}),a.jsxs("div",{className:"hero-ctas",children:[a.jsx(F,{to:"/contact",className:"btn btn-primary",children:"Contact Us"}),a.jsx(F,{to:"/shop",className:"btn btn-ghost",children:"Browse Collections"})]})]})})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Our Story"}),a.jsx("p",{className:"lead",children:"Started as a small studio with a big belief: daily wear should feel great, look refined, and hold up over time. We partner with trusted makers and keep batches small, so attention to detail never slips."}),a.jsxs("div",{className:"timeline",children:[a.jsxs("div",{className:"tl-item",children:[a.jsx("div",{className:"dot"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Where it began"}),a.jsx("p",{children:"Sketches, fabric swatches, and countless prototypes—our journey started with a focus on essentials."})]})]}),a.jsxs("div",{className:"tl-item",children:[a.jsx("div",{className:"dot"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Finding our partners"}),a.jsx("p",{children:"We sourced mills and workshops that matched our standards for consistency and fair practices."})]})]}),a.jsxs("div",{className:"tl-item",children:[a.jsx("div",{className:"dot"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Refining the craft"}),a.jsx("p",{children:"With customer feedback, we tuned fits, finishes, and care guides to make pieces last longer."})]})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Mission & Values"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Mission"}),a.jsx("p",{children:"Make everyday dressing simpler through reliable, comfortable essentials that blend form and function."})]}),a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Quality"}),a.jsx("p",{children:"From reinforced seams to color-fast dyes, we design beyond the first wear and wash."})]}),a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Trust"}),a.jsx("p",{children:"Clear specs, honest descriptions, and responsive support keep decisions easy and informed."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Sustainability & Craft"}),a.jsxs("div",{className:"grid-2",children:[a.jsxs("div",{className:"info",children:[a.jsx("h3",{children:"Responsible choices"}),a.jsx("p",{children:"We prioritize durable textiles, mindful packaging, and small-batch production to reduce waste while keeping quality high."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Material-first selection with long-life wear in mind."}),a.jsx("li",{children:"Repair-friendly construction and care guides."}),a.jsx("li",{children:"Continuous iteration based on real-world use."})]})]}),a.jsxs("div",{className:"info",children:[a.jsx("h3",{children:"Attention to detail"}),a.jsx("p",{children:"Fit, finish, and feel are tested across sizes and seasons, ensuring each piece earns a place in daily rotation."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Reinforced stress points and reliable hardware."}),a.jsx("li",{children:"Neutral palettes for effortless pairing."}),a.jsx("li",{children:"Consistent measurements for repeat buys."})]})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Customer Promise"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"30-Day Returns"}),a.jsx("p",{children:"Hassle-free returns on unused items in original condition within 30 days."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Fast Support"}),a.jsx("p",{children:"Friendly assistance with sizing, care, and orders via chat or email."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Honest Pricing"}),a.jsx("p",{children:"Fair prices without inflated markups—value built into each piece."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Who We Are"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Design Lead"}),a.jsx("p",{children:"Focuses on silhouettes, fit blocks, and fabric hand-feel for comfort and longevity."})]})]}),a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Production"}),a.jsx("p",{children:"Oversees sourcing, QC, and small-batch timelines to maintain consistency."})]})]}),a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Care & Support"}),a.jsx("p",{children:"Helps with sizing, exchanges, and care tips to keep favorites in rotation."})]})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"FAQs"}),a.jsxs("div",{className:"faq",children:[a.jsxs("details",{children:[a.jsx("summary",{children:"What sizes do you carry?"}),a.jsx("p",{children:"Core styles generally run XS–XXL. Fit notes and measurements are listed on product pages."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"How do returns work?"}),a.jsx("p",{children:"Submit a request within 30 days for unused items. We’ll guide through label creation and refund steps."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Do you ship internationally?"}),a.jsx("p",{children:"Yes, with tracked delivery options at checkout. Timelines vary by destination."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container contact-cta",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"section-title",children:"Get in touch"}),a.jsx("p",{className:"lead",children:"Questions about sizing, care, or orders? The team is ready to help."})]}),a.jsxs("div",{className:"cta-buttons",children:[a.jsx(F,{to:"/contact",className:"btn btn-primary",children:"Contact Support"}),a.jsx(F,{to:"/shop",className:"btn btn-ghost",children:"Explore the Shop"})]})]})}),a.jsx("style",{children:`
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
        .lead{color:var(--muted);margin:0 0 18px;max-width:70ch}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .card{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .info{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .bullets{margin:8px 0 0; padding-left:18px}
        .mini-feature{border:1px solid var(--line);background:var(--card);border-radius:12px;padding:16px}
        .timeline{display:grid;gap:14px;margin-top:8px}
        .tl-item{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start}
        .tl-item .dot{width:10px;height:10px;border-radius:50%;background:var(--brand);margin-top:8px}
        .person{display:grid;grid-template-columns:48px 1fr;gap:12px;align-items:center;border:1px solid var(--line);background:var(--card);border-radius:12px;padding:12px}
        .avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg, var(--surface-alt), var(--card));border:1px solid var(--line)}
        .faq details{border:1px solid var(--line);background:var(--card);border-radius:10px;padding:12px}
        .faq details + details{margin-top:10px}
        .contact-cta{display:flex;justify-content:space-between;align-items:center;gap:16px}
        .cta-buttons{display:flex;gap:12px}
        @media (max-width:900px){
          .grid-2,.grid-3{grid-template-columns:1fr}
          .contact-cta{flex-direction:column;align-items:flex-start}
        }
      `})]})}function Ix(){const[e,t]=v.useState({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"}),[r,n]=v.useState(!1),[i,s]=v.useState(null),[o,l]=v.useState(null),c=v.useRef(null);v.useEffect(()=>{i&&c.current&&c.current.focus(),o&&c.current&&c.current.focus()},[i,o]);const u=h=>{const{name:w,value:g}=h.target;t(y=>({...y,[w]:g}))},d=async h=>{h.preventDefault(),n(!0),s(null),l(null);try{await new Promise(w=>setTimeout(w,800)),s("Thanks for reaching out. The team will reply within 1–2 business days."),t({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"})}catch{l("Could not send message. Please try again or use another contact method.")}finally{n(!1)}},p=`https://wa.me/94768976222?text=${encodeURIComponent(`Hello, I need help with my order.
Name: ${e.name}
Email: ${e.email}
Order ID: ${e.orderId||"-"}
Subject: ${e.subject}
Message: ${e.message}`)}`;return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"contact-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Contact"}),a.jsx("h1",{className:"headline",children:"How can we help?"}),a.jsx("p",{className:"subhead",children:"Questions about orders, sizing, delivery, or returns—support is here."})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container contact-grid",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Send a message"}),a.jsxs("div",{ref:c,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[i&&a.jsx("div",{className:"alert success",children:i}),o&&a.jsx("div",{className:"alert error",children:o})]}),a.jsxs("form",{className:"form",onSubmit:d,noValidate:!0,children:[a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"name",children:["Name",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e.name,onChange:u,autoComplete:"name"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"email",children:["Email",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:u,autoComplete:"email"})]})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"orderId",children:"Order ID"}),a.jsx("input",{id:"orderId",name:"orderId",type:"text",value:e.orderId,onChange:u,placeholder:"Optional, helps us locate your order"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"channel",children:"Preferred channel"}),a.jsxs("select",{id:"channel",name:"channel",value:e.channel,onChange:u,children:[a.jsx("option",{value:"email",children:"Email"}),a.jsx("option",{value:"phone",children:"Phone"}),a.jsx("option",{value:"whatsapp",children:"WhatsApp"})]})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"subject",children:["Subject",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"subject",name:"subject",type:"text",required:!0,value:e.subject,onChange:u})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"message",children:["Message",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("textarea",{id:"message",name:"message",required:!0,rows:6,value:e.message,onChange:u})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:r,children:r?"Sending…":"Send message"}),a.jsx("a",{className:"btn btn-ghost",href:p,target:"_blank",rel:"noopener noreferrer",children:"Message on WhatsApp"})]}),a.jsx("p",{className:"tiny muted",children:"Fields marked with * are required."})]})]}),a.jsxs("aside",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Contact details"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Email: support@yourstore.com"}),a.jsx("li",{children:"Phone: +94 11 234 5678"}),a.jsx("li",{children:"WhatsApp: +94 76 897 6222"}),a.jsx("li",{children:"Address: 123 Market Street, Colombo"}),a.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00 (UTC+5:30)"}),a.jsx("li",{children:"Response time: within 1–2 business days"})]}),a.jsx("div",{className:"divider"}),a.jsx("h3",{children:"Quick help"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx("a",{href:"/faq",children:"FAQ"})}),a.jsx("li",{children:a.jsx("a",{href:"/shipping-returns",children:"Shipping & Returns"})}),a.jsx("li",{children:a.jsx("a",{href:"/orders",children:"Track orders"})}),a.jsx("li",{children:a.jsx("a",{href:"/care",children:"Care guides"})})]}),a.jsx("div",{className:"mapbox",children:a.jsx("div",{className:"map-fallback",children:"Map placeholder"})})]})]})}),a.jsx("style",{children:`
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
      `})]})}ws.createRoot(document.getElementById("root")).render(a.jsx(Fu.StrictMode,{children:a.jsx(h0,{children:a.jsx(Z1,{children:a.jsx(Y1,{children:a.jsxs(a0,{children:[a.jsxs(be,{element:a.jsx(ix,{}),children:[a.jsx(be,{path:"/",element:a.jsx(Jc,{})}),a.jsx(be,{path:"/home",element:a.jsx(Jc,{})}),a.jsx(be,{path:"/product/:slug",element:a.jsx(X1,{})}),a.jsx(be,{path:"/shop",element:a.jsx(Fx,{})}),a.jsx(be,{path:"/about",element:a.jsx(Dx,{})}),a.jsx(be,{path:"/contact",element:a.jsx(Ix,{})}),a.jsx(be,{path:"/login",element:a.jsx(G1,{})}),a.jsx(be,{path:"/register",element:a.jsx(J1,{})}),a.jsx(be,{path:"/cart",element:a.jsx(ex,{})}),a.jsx(be,{path:"/checkout",element:a.jsx(tx,{})})]}),a.jsxs(be,{path:"/admin",element:a.jsx(Mx,{children:a.jsx(Ax,{})}),children:[a.jsx(be,{index:!0,element:a.jsx(sx,{})}),a.jsx(be,{path:"products",element:a.jsx(Tx,{})}),a.jsx(be,{path:"users",element:a.jsx(Ox,{})}),a.jsx(be,{path:"orders",element:a.jsx(ax,{})})]})]})})})})}));
