var K1=Object.defineProperty;var X1=(e,t,n)=>t in e?K1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>X1(e,typeof t!="symbol"?t+"":t,n);function G1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Uf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wf={exports:{}},So={},$f={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.element"),Q1=Symbol.for("react.portal"),Z1=Symbol.for("react.fragment"),J1=Symbol.for("react.strict_mode"),ex=Symbol.for("react.profiler"),tx=Symbol.for("react.provider"),nx=Symbol.for("react.context"),rx=Symbol.for("react.forward_ref"),ix=Symbol.for("react.suspense"),sx=Symbol.for("react.memo"),ax=Symbol.for("react.lazy"),Eu=Symbol.iterator;function ox(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qf=Object.assign,Yf={};function ai(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Vf}ai.prototype.isReactComponent={};ai.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kf(){}Kf.prototype=ai.prototype;function pd(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Vf}var fd=pd.prototype=new Kf;fd.constructor=pd;qf(fd,ai.prototype);fd.isPureReactComponent=!0;var Pu=Array.isArray,Xf=Object.prototype.hasOwnProperty,md={current:null},Gf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Xf.call(t,r)&&!Gf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ss,type:e,key:a,ref:o,props:i,_owner:md.current}}function lx(e,t){return{$$typeof:Ss,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ss}function cx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ru=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cx(""+e.key):t.toString(36)}function xa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ss:case Q1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+el(o,0):r,Pu(i)?(n="",e!=null&&(n=e.replace(Ru,"$&/")+"/"),xa(i,t,n,"",function(d){return d})):i!=null&&(gd(i)&&(i=lx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ru,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Pu(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+el(a,l);o+=xa(a,t,n,c,i)}else if(c=ox(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+el(a,l++),o+=xa(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Is(e,t,n){if(e==null)return e;var r=[],i=0;return xa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function dx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},va={transition:null},ux={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:va,ReactCurrentOwner:md};function Zf(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!gd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=ai;Z.Fragment=Z1;Z.Profiler=ex;Z.PureComponent=pd;Z.StrictMode=J1;Z.Suspense=ix;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ux;Z.act=Zf;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qf({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=md.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Xf.call(t,c)&&!Gf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ss,type:e.type,key:i,ref:a,props:r,_owner:o}};Z.createContext=function(e){return e={$$typeof:nx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tx,_context:e},e.Consumer=e};Z.createElement=Qf;Z.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:rx,render:e}};Z.isValidElement=gd;Z.lazy=function(e){return{$$typeof:ax,_payload:{_status:-1,_result:e},_init:dx}};Z.memo=function(e,t){return{$$typeof:sx,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=va.transition;va.transition={};try{e()}finally{va.transition=t}};Z.unstable_act=Zf;Z.useCallback=function(e,t){return Ze.current.useCallback(e,t)};Z.useContext=function(e){return Ze.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Ze.current.useEffect(e,t)};Z.useId=function(){return Ze.current.useId()};Z.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Ze.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};Z.useRef=function(e){return Ze.current.useRef(e)};Z.useState=function(e){return Ze.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Ze.current.useTransition()};Z.version="18.3.1";$f.exports=Z;var w=$f.exports;const Jf=Uf(w),hx=G1({__proto__:null,default:Jf},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=w,fx=Symbol.for("react.element"),mx=Symbol.for("react.fragment"),gx=Object.prototype.hasOwnProperty,xx=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vx={key:!0,ref:!0,__self:!0,__source:!0};function e0(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)gx.call(t,r)&&!vx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fx,type:e,key:a,ref:o,props:i,_owner:xx.current}}So.Fragment=mx;So.jsx=e0;So.jsxs=e0;Wf.exports=So;var s=Wf.exports,Wl={},t0={exports:{}},ft={},n0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,C){var O=z.length;z.push(C);e:for(;0<O;){var K=O-1>>>1,X=z[K];if(0<i(X,C))z[K]=C,z[O]=X,O=K;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var C=z[0],O=z.pop();if(O!==C){z[0]=O;e:for(var K=0,X=z.length,ve=X>>>1;K<ve;){var ce=2*(K+1)-1,_e=z[ce],Ce=ce+1,wr=z[Ce];if(0>i(_e,O))Ce<X&&0>i(wr,_e)?(z[K]=wr,z[Ce]=O,K=Ce):(z[K]=_e,z[ce]=O,K=ce);else if(Ce<X&&0>i(wr,O))z[K]=wr,z[Ce]=O,K=Ce;else break e}}return C}function i(z,C){var O=z.sortIndex-C.sortIndex;return O!==0?O:z.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,p=null,h=3,m=!1,f=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var C=n(d);C!==null;){if(C.callback===null)r(d);else if(C.startTime<=z)r(d),C.sortIndex=C.expirationTime,t(c,C);else break;C=n(d)}}function k(z){if(x=!1,b(z),!f)if(n(c)!==null)f=!0,T(j);else{var C=n(d);C!==null&&V(k,C.startTime-z)}}function j(z,C){f=!1,x&&(x=!1,g(_),_=-1),m=!0;var O=h;try{for(b(C),p=n(c);p!==null&&(!(p.expirationTime>C)||z&&!I());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var X=K(p.expirationTime<=C);C=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(c)&&r(c),b(C)}else r(c);p=n(c)}if(p!==null)var ve=!0;else{var ce=n(d);ce!==null&&V(k,ce.startTime-C),ve=!1}return ve}finally{p=null,h=O,m=!1}}var N=!1,S=null,_=-1,A=5,R=-1;function I(){return!(e.unstable_now()-R<A)}function U(){if(S!==null){var z=e.unstable_now();R=z;var C=!0;try{C=S(!0,z)}finally{C?B():(N=!1,S=null)}}else N=!1}var B;if(typeof v=="function")B=function(){v(U)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,P=F.port2;F.port1.onmessage=U,B=function(){P.postMessage(null)}}else B=function(){y(U,0)};function T(z){S=z,N||(N=!0,B())}function V(z,C){_=y(function(){z(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){f||m||(f=!0,T(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var C=3;break;default:C=h}var O=h;h=C;try{return z()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,C){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var O=h;h=z;try{return C()}finally{h=O}},e.unstable_scheduleCallback=function(z,C,O){var K=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?K+O:K):O=K,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,z={id:u++,callback:C,priorityLevel:z,startTime:O,expirationTime:X,sortIndex:-1},O>K?(z.sortIndex=O,t(d,z),n(c)===null&&z===n(d)&&(x?(g(_),_=-1):x=!0,V(k,O-K))):(z.sortIndex=X,t(c,z),f||m||(f=!0,T(j))),z},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(z){var C=h;return function(){var O=h;h=C;try{return z.apply(this,arguments)}finally{h=O}}}})(r0);n0.exports=r0;var bx=n0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=w,pt=bx;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i0=new Set,Zi={};function vr(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Zi[e]=t,e=0;e<t.length;e++)i0.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,wx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Au={},Tu={};function jx(e){return $l.call(Tu,e)?!0:$l.call(Au,e)?!1:wx.test(e)?Tu[e]=!0:(Au[e]=!0,!1)}function kx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sx(e,t,n,r){if(t===null||typeof t>"u"||kx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xd,vd);He[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xd,vd);He[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xd,vd);He[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function bd(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sx(t,n,i,r)&&(n=null),r||i===null?jx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hn=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),o0=Symbol.for("react.offscreen"),Lu=Symbol.iterator;function mi(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,tl;function Ei(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ei(e):""}function Nx(e){switch(e.tag){case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case _r:return"Portal";case Vl:return"Profiler";case yd:return"StrictMode";case ql:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case a0:return(e.displayName||"Context")+".Consumer";case s0:return(e._context.displayName||"Context")+".Provider";case wd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jd:return t=e.displayName||null,t!==null?t:Kl(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return Kl(e(t))}catch{}}return null}function _x(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(t);case 8:return t===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function l0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cx(e){var t=l0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fs(e){e._valueTracker||(e._valueTracker=Cx(e))}function c0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=l0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function d0(e,t){t=t.checked,t!=null&&bd(e,"checked",t,!1)}function Gl(e,t){d0(e,t);var n=Bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,Bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function Dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Du(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Pi(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bn(n)}}function u0(e,t){var n=Bn(t.value),r=Bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function h0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?h0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,p0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ji(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zx=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(e){zx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fi[t]=Fi[e]})});function f0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fi.hasOwnProperty(e)&&Fi[e]?(""+t).trim():t+"px"}function m0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=f0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Mx=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(Mx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function kd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rc=null,Fr=null,Br=null;function Bu(e){if(e=Cs(e)){if(typeof rc!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Mo(t),rc(e.stateNode,e.type,t))}}function g0(e){Fr?Br?Br.push(e):Br=[e]:Fr=e}function x0(){if(Fr){var e=Fr,t=Br;if(Br=Fr=null,Bu(e),t)for(e=0;e<t.length;e++)Bu(t[e])}}function v0(e,t){return e(t)}function b0(){}var il=!1;function y0(e,t,n){if(il)return e(t,n);il=!0;try{return v0(e,t,n)}finally{il=!1,(Fr!==null||Br!==null)&&(b0(),x0())}}function es(e,t){var n=e.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var ic=!1;if(ln)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){ic=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{ic=!1}function Ex(e,t,n,r,i,a,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Bi=!1,Ua=null,Wa=!1,sc=null,Px={onError:function(e){Bi=!0,Ua=e}};function Rx(e,t,n,r,i,a,o,l,c){Bi=!1,Ua=null,Ex.apply(Px,arguments)}function Ax(e,t,n,r,i,a,o,l,c){if(Rx.apply(this,arguments),Bi){if(Bi){var d=Ua;Bi=!1,Ua=null}else throw Error(L(198));Wa||(Wa=!0,sc=d)}}function br(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function w0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hu(e){if(br(e)!==e)throw Error(L(188))}function Tx(e){var t=e.alternate;if(!t){if(t=br(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Hu(i),e;if(a===r)return Hu(i),t;a=a.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function j0(e){return e=Tx(e),e!==null?k0(e):null}function k0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=k0(e);if(t!==null)return t;e=e.sibling}return null}var S0=pt.unstable_scheduleCallback,Uu=pt.unstable_cancelCallback,Lx=pt.unstable_shouldYield,Ox=pt.unstable_requestPaint,ze=pt.unstable_now,Ix=pt.unstable_getCurrentPriorityLevel,Sd=pt.unstable_ImmediatePriority,N0=pt.unstable_UserBlockingPriority,$a=pt.unstable_NormalPriority,Dx=pt.unstable_LowPriority,_0=pt.unstable_IdlePriority,No=null,Yt=null;function Fx(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:Ux,Bx=Math.log,Hx=Math.LN2;function Ux(e){return e>>>=0,e===0?32:31-(Bx(e)/Hx|0)|0}var Hs=64,Us=4194304;function Ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Va(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ri(l):(a&=o,a!==0&&(r=Ri(a)))}else o=n&~i,o!==0?r=Ri(o):a!==0&&(r=Ri(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Rt(a),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=Wx(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function ac(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function C0(){var e=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ns(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function Vx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function z0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var M0,_d,E0,P0,R0,oc=!1,Ws=[],En=null,Pn=null,Rn=null,ts=new Map,ns=new Map,wn=[],qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wu(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ts.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(t.pointerId)}}function xi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Cs(t),t!==null&&_d(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yx(e,t,n,r,i){switch(t){case"focusin":return En=xi(En,e,t,n,r,i),!0;case"dragenter":return Pn=xi(Pn,e,t,n,r,i),!0;case"mouseover":return Rn=xi(Rn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ts.set(a,xi(ts.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ns.set(a,xi(ns.get(a)||null,e,t,n,r,i)),!0}return!1}function A0(e){var t=tr(e.target);if(t!==null){var n=br(t);if(n!==null){if(t=n.tag,t===13){if(t=w0(n),t!==null){e.blockedOn=t,R0(e.priority,function(){E0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ba(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nc=r,n.target.dispatchEvent(r),nc=null}else return t=Cs(n),t!==null&&_d(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){ba(e)&&n.delete(t)}function Kx(){oc=!1,En!==null&&ba(En)&&(En=null),Pn!==null&&ba(Pn)&&(Pn=null),Rn!==null&&ba(Rn)&&(Rn=null),ts.forEach($u),ns.forEach($u)}function vi(e,t){e.blockedOn===t&&(e.blockedOn=null,oc||(oc=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Kx)))}function rs(e){function t(i){return vi(i,e)}if(0<Ws.length){vi(Ws[0],e);for(var n=1;n<Ws.length;n++){var r=Ws[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&vi(En,e),Pn!==null&&vi(Pn,e),Rn!==null&&vi(Rn,e),ts.forEach(t),ns.forEach(t),n=0;n<wn.length;n++)r=wn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&wn.shift()}var Hr=hn.ReactCurrentBatchConfig,qa=!0;function Xx(e,t,n,r){var i=oe,a=Hr.transition;Hr.transition=null;try{oe=1,Cd(e,t,n,r)}finally{oe=i,Hr.transition=a}}function Gx(e,t,n,r){var i=oe,a=Hr.transition;Hr.transition=null;try{oe=4,Cd(e,t,n,r)}finally{oe=i,Hr.transition=a}}function Cd(e,t,n,r){if(qa){var i=lc(e,t,n,r);if(i===null)ml(e,t,r,Ya,n),Wu(e,r);else if(Yx(i,e,t,n,r))r.stopPropagation();else if(Wu(e,r),t&4&&-1<qx.indexOf(e)){for(;i!==null;){var a=Cs(i);if(a!==null&&M0(a),a=lc(e,t,n,r),a===null&&ml(e,t,r,Ya,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var Ya=null;function lc(e,t,n,r){if(Ya=null,e=kd(r),e=tr(e),e!==null)if(t=br(e),t===null)e=null;else if(n=t.tag,n===13){if(e=w0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ya=e,null}function T0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ix()){case Sd:return 1;case N0:return 4;case $a:case Dx:return 16;case _0:return 536870912;default:return 16}default:return 16}}var kn=null,zd=null,ya=null;function L0(){if(ya)return ya;var e,t=zd,n=t.length,r,i="value"in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ya=i.slice(e,1<r?1-r:void 0)}function wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $s(){return!0}function Vu(){return!1}function mt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$s:Vu,this.isPropagationStopped=Vu,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=mt(oi),_s=ke({},oi,{view:0,detail:0}),Qx=mt(_s),al,ol,bi,_o=ke({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(al=e.screenX-bi.screenX,ol=e.screenY-bi.screenY):ol=al=0,bi=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),qu=mt(_o),Zx=ke({},_o,{dataTransfer:0}),Jx=mt(Zx),e2=ke({},_s,{relatedTarget:0}),ll=mt(e2),t2=ke({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),n2=mt(t2),r2=ke({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i2=mt(r2),s2=ke({},oi,{data:0}),Yu=mt(s2),a2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=l2[e])?!!t[e]:!1}function Ed(){return c2}var d2=ke({},_s,{key:function(e){if(e.key){var t=a2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u2=mt(d2),h2=ke({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=mt(h2),p2=ke({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),f2=mt(p2),m2=ke({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),g2=mt(m2),x2=ke({},_o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v2=mt(x2),b2=[9,13,27,32],Pd=ln&&"CompositionEvent"in window,Hi=null;ln&&"documentMode"in document&&(Hi=document.documentMode);var y2=ln&&"TextEvent"in window&&!Hi,O0=ln&&(!Pd||Hi&&8<Hi&&11>=Hi),Xu=" ",Gu=!1;function I0(e,t){switch(e){case"keyup":return b2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function w2(e,t){switch(e){case"compositionend":return D0(t);case"keypress":return t.which!==32?null:(Gu=!0,Xu);case"textInput":return e=t.data,e===Xu&&Gu?null:e;default:return null}}function j2(e,t){if(zr)return e==="compositionend"||!Pd&&I0(e,t)?(e=L0(),ya=zd=kn=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return O0&&t.locale!=="ko"?null:t.data;default:return null}}var k2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!k2[e.type]:t==="textarea"}function F0(e,t,n,r){g0(r),t=Ka(t,"onChange"),0<t.length&&(n=new Md("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ui=null,is=null;function S2(e){G0(e,0)}function Co(e){var t=Pr(e);if(c0(t))return e}function N2(e,t){if(e==="change")return t}var B0=!1;if(ln){var cl;if(ln){var dl="oninput"in document;if(!dl){var Zu=document.createElement("div");Zu.setAttribute("oninput","return;"),dl=typeof Zu.oninput=="function"}cl=dl}else cl=!1;B0=cl&&(!document.documentMode||9<document.documentMode)}function Ju(){Ui&&(Ui.detachEvent("onpropertychange",H0),is=Ui=null)}function H0(e){if(e.propertyName==="value"&&Co(is)){var t=[];F0(t,is,e,kd(e)),y0(S2,t)}}function _2(e,t,n){e==="focusin"?(Ju(),Ui=t,is=n,Ui.attachEvent("onpropertychange",H0)):e==="focusout"&&Ju()}function C2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(is)}function z2(e,t){if(e==="click")return Co(t)}function M2(e,t){if(e==="input"||e==="change")return Co(t)}function E2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:E2;function ss(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$l.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function th(e,t){var n=eh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eh(n)}}function U0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function W0(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function P2(e){var t=W0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&U0(n.ownerDocument.documentElement,n)){if(r!==null&&Rd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=th(n,a);var o=th(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R2=ln&&"documentMode"in document&&11>=document.documentMode,Mr=null,cc=null,Wi=null,dc=!1;function nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||Mr==null||Mr!==Ha(r)||(r=Mr,"selectionStart"in r&&Rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&ss(Wi,r)||(Wi=r,r=Ka(cc,"onSelect"),0<r.length&&(t=new Md("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Vs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},ul={},$0={};ln&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function zo(e){if(ul[e])return ul[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $0)return ul[e]=t[n];return e}var V0=zo("animationend"),q0=zo("animationiteration"),Y0=zo("animationstart"),K0=zo("transitionend"),X0=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,t){X0.set(e,t),vr(t,[e])}for(var hl=0;hl<rh.length;hl++){var pl=rh[hl],A2=pl.toLowerCase(),T2=pl[0].toUpperCase()+pl.slice(1);Wn(A2,"on"+T2)}Wn(V0,"onAnimationEnd");Wn(q0,"onAnimationIteration");Wn(Y0,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(K0,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function ih(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ax(r,t,void 0,e),e.currentTarget=null}function G0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;ih(i,l,d),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;ih(i,l,d),a=c}}}if(Wa)throw e=sc,Wa=!1,sc=null,e}function fe(e,t){var n=t[mc];n===void 0&&(n=t[mc]=new Set);var r=e+"__bubble";n.has(r)||(Q0(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),Q0(n,e,r,t)}var qs="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[qs]){e[qs]=!0,i0.forEach(function(n){n!=="selectionchange"&&(L2.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qs]||(t[qs]=!0,fl("selectionchange",!1,t))}}function Q0(e,t,n,r){switch(T0(t)){case 1:var i=Xx;break;case 4:i=Gx;break;default:i=Cd}n=i.bind(null,t,n,e),i=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=tr(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}y0(function(){var d=a,u=kd(n),p=[];e:{var h=X0.get(e);if(h!==void 0){var m=Md,f=e;switch(e){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":m=u2;break;case"focusin":f="focus",m=ll;break;case"focusout":f="blur",m=ll;break;case"beforeblur":case"afterblur":m=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=f2;break;case V0:case q0:case Y0:m=n2;break;case K0:m=g2;break;case"scroll":m=Qx;break;case"wheel":m=v2;break;case"copy":case"cut":case"paste":m=i2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ku}var x=(t&4)!==0,y=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var v=d,b;v!==null;){b=v;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,g!==null&&(k=es(v,g),k!=null&&x.push(os(v,k,b)))),y)break;v=v.return}0<x.length&&(h=new m(h,f,null,n,u),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==nc&&(f=n.relatedTarget||n.fromElement)&&(tr(f)||f[cn]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(f=n.relatedTarget||n.toElement,m=d,f=f?tr(f):null,f!==null&&(y=br(f),f!==y||f.tag!==5&&f.tag!==6)&&(f=null)):(m=null,f=d),m!==f)){if(x=qu,k="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ku,k="onPointerLeave",g="onPointerEnter",v="pointer"),y=m==null?h:Pr(m),b=f==null?h:Pr(f),h=new x(k,v+"leave",m,n,u),h.target=y,h.relatedTarget=b,k=null,tr(u)===d&&(x=new x(g,v+"enter",f,n,u),x.target=b,x.relatedTarget=y,k=x),y=k,m&&f)t:{for(x=m,g=f,v=0,b=x;b;b=jr(b))v++;for(b=0,k=g;k;k=jr(k))b++;for(;0<v-b;)x=jr(x),v--;for(;0<b-v;)g=jr(g),b--;for(;v--;){if(x===g||g!==null&&x===g.alternate)break t;x=jr(x),g=jr(g)}x=null}else x=null;m!==null&&sh(p,h,m,x,!1),f!==null&&y!==null&&sh(p,y,f,x,!0)}}e:{if(h=d?Pr(d):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var j=N2;else if(Qu(h))if(B0)j=M2;else{j=C2;var N=_2}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=z2);if(j&&(j=j(e,d))){F0(p,j,n,u);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Ql(h,"number",h.value)}switch(N=d?Pr(d):window,e){case"focusin":(Qu(N)||N.contentEditable==="true")&&(Mr=N,cc=d,Wi=null);break;case"focusout":Wi=cc=Mr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,nh(p,n,u);break;case"selectionchange":if(R2)break;case"keydown":case"keyup":nh(p,n,u)}var S;if(Pd)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else zr?I0(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(O0&&n.locale!=="ko"&&(zr||_!=="onCompositionStart"?_==="onCompositionEnd"&&zr&&(S=L0()):(kn=u,zd="value"in kn?kn.value:kn.textContent,zr=!0)),N=Ka(d,_),0<N.length&&(_=new Yu(_,e,null,n,u),p.push({event:_,listeners:N}),S?_.data=S:(S=D0(n),S!==null&&(_.data=S)))),(S=y2?w2(e,n):j2(e,n))&&(d=Ka(d,"onBeforeInput"),0<d.length&&(u=new Yu("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=S))}G0(p,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ka(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=es(e,n),a!=null&&r.unshift(os(e,a,i)),a=es(e,t),a!=null&&r.push(os(e,a,i))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sh(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=es(n,a),c!=null&&o.unshift(os(n,c,l))):i||(c=es(n,a),c!=null&&o.push(os(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var O2=/\r\n?/g,I2=/\u0000|\uFFFD/g;function ah(e){return(typeof e=="string"?e:""+e).replace(O2,`
`).replace(I2,"")}function Ys(e,t,n){if(t=ah(t),ah(e)!==t&&n)throw Error(L(425))}function Xa(){}var uc=null,hc=null;function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,D2=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,F2=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(e){return oh.resolve(null).then(e).catch(B2)}:fc;function B2(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),rs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rs(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var li=Math.random().toString(36).slice(2),qt="__reactFiber$"+li,ls="__reactProps$"+li,cn="__reactContainer$"+li,mc="__reactEvents$"+li,H2="__reactListeners$"+li,U2="__reactHandles$"+li;function tr(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lh(e);e!==null;){if(n=e[qt])return n;e=lh(e)}return t}e=n,n=e.parentNode}return null}function Cs(e){return e=e[qt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Mo(e){return e[ls]||null}var gc=[],Rr=-1;function $n(e){return{current:e}}function ge(e){0>Rr||(e.current=gc[Rr],gc[Rr]=null,Rr--)}function he(e,t){Rr++,gc[Rr]=e.current,e.current=t}var Hn={},Xe=$n(Hn),st=$n(!1),ur=Hn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function Ga(){ge(st),ge(Xe)}function ch(e,t,n){if(Xe.current!==Hn)throw Error(L(168));he(Xe,t),he(st,n)}function Z0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,_x(e)||"Unknown",i));return ke({},n,r)}function Qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,ur=Xe.current,he(Xe,e),he(st,st.current),!0}function dh(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Z0(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,ge(st),ge(Xe),he(Xe,e)):ge(st),he(st,n)}var nn=null,Eo=!1,xl=!1;function J0(e){nn===null?nn=[e]:nn.push(e)}function W2(e){Eo=!0,J0(e)}function Vn(){if(!xl&&nn!==null){xl=!0;var e=0,t=oe;try{var n=nn;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nn=null,Eo=!1}catch(i){throw nn!==null&&(nn=nn.slice(e+1)),S0(Sd,Vn),i}finally{oe=t,xl=!1}}return null}var Ar=[],Tr=0,Za=null,Ja=0,xt=[],vt=0,hr=null,sn=1,an="";function Gn(e,t){Ar[Tr++]=Ja,Ar[Tr++]=Za,Za=e,Ja=t}function em(e,t,n){xt[vt++]=sn,xt[vt++]=an,xt[vt++]=hr,hr=e;var r=sn;e=an;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var a=32-Rt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-Rt(t)+i|n<<i|r,an=a+e}else sn=1<<a|n<<i|r,an=e}function Ad(e){e.return!==null&&(Gn(e,1),em(e,1,0))}function Td(e){for(;e===Za;)Za=Ar[--Tr],Ar[Tr]=null,Ja=Ar[--Tr],Ar[Tr]=null;for(;e===hr;)hr=xt[--vt],xt[vt]=null,an=xt[--vt],xt[vt]=null,sn=xt[--vt],xt[vt]=null}var ht=null,ut=null,be=!1,Pt=null;function tm(e,t){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ut=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:sn,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ut=null,!0):!1;default:return!1}}function xc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vc(e){if(be){var t=ut;if(t){var n=t;if(!uh(e,t)){if(xc(e))throw Error(L(418));t=An(n.nextSibling);var r=ht;t&&uh(e,t)?tm(r,n):(e.flags=e.flags&-4097|2,be=!1,ht=e)}}else{if(xc(e))throw Error(L(418));e.flags=e.flags&-4097|2,be=!1,ht=e}}}function hh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Ks(e){if(e!==ht)return!1;if(!be)return hh(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pc(e.type,e.memoizedProps)),t&&(t=ut)){if(xc(e))throw nm(),Error(L(418));for(;t;)tm(e,t),t=An(t.nextSibling)}if(hh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=ht?An(e.stateNode.nextSibling):null;return!0}function nm(){for(var e=ut;e;)e=An(e.nextSibling)}function Xr(){ut=ht=null,be=!1}function Ld(e){Pt===null?Pt=[e]:Pt.push(e)}var $2=hn.ReactCurrentBatchConfig;function yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Xs(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ph(e){var t=e._init;return t(e._payload)}function rm(e){function t(g,v){if(e){var b=g.deletions;b===null?(g.deletions=[v],g.flags|=16):b.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=In(g,v),g.index=0,g.sibling=null,g}function a(g,v,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<v?(g.flags|=2,v):b):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,v,b,k){return v===null||v.tag!==6?(v=Sl(b,g.mode,k),v.return=g,v):(v=i(v,b),v.return=g,v)}function c(g,v,b,k){var j=b.type;return j===Cr?u(g,v,b.props.children,k,b.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&ph(j)===v.type)?(k=i(v,b.props),k.ref=yi(g,v,b),k.return=g,k):(k=za(b.type,b.key,b.props,null,g.mode,k),k.ref=yi(g,v,b),k.return=g,k)}function d(g,v,b,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=Nl(b,g.mode,k),v.return=g,v):(v=i(v,b.children||[]),v.return=g,v)}function u(g,v,b,k,j){return v===null||v.tag!==7?(v=lr(b,g.mode,k,j),v.return=g,v):(v=i(v,b),v.return=g,v)}function p(g,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Sl(""+v,g.mode,b),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ds:return b=za(v.type,v.key,v.props,null,g.mode,b),b.ref=yi(g,null,v),b.return=g,b;case _r:return v=Nl(v,g.mode,b),v.return=g,v;case bn:var k=v._init;return p(g,k(v._payload),b)}if(Pi(v)||mi(v))return v=lr(v,g.mode,b,null),v.return=g,v;Xs(g,v)}return null}function h(g,v,b,k){var j=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return j!==null?null:l(g,v,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ds:return b.key===j?c(g,v,b,k):null;case _r:return b.key===j?d(g,v,b,k):null;case bn:return j=b._init,h(g,v,j(b._payload),k)}if(Pi(b)||mi(b))return j!==null?null:u(g,v,b,k,null);Xs(g,b)}return null}function m(g,v,b,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(b)||null,l(v,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ds:return g=g.get(k.key===null?b:k.key)||null,c(v,g,k,j);case _r:return g=g.get(k.key===null?b:k.key)||null,d(v,g,k,j);case bn:var N=k._init;return m(g,v,b,N(k._payload),j)}if(Pi(k)||mi(k))return g=g.get(b)||null,u(v,g,k,j,null);Xs(v,k)}return null}function f(g,v,b,k){for(var j=null,N=null,S=v,_=v=0,A=null;S!==null&&_<b.length;_++){S.index>_?(A=S,S=null):A=S.sibling;var R=h(g,S,b[_],k);if(R===null){S===null&&(S=A);break}e&&S&&R.alternate===null&&t(g,S),v=a(R,v,_),N===null?j=R:N.sibling=R,N=R,S=A}if(_===b.length)return n(g,S),be&&Gn(g,_),j;if(S===null){for(;_<b.length;_++)S=p(g,b[_],k),S!==null&&(v=a(S,v,_),N===null?j=S:N.sibling=S,N=S);return be&&Gn(g,_),j}for(S=r(g,S);_<b.length;_++)A=m(S,g,_,b[_],k),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?_:A.key),v=a(A,v,_),N===null?j=A:N.sibling=A,N=A);return e&&S.forEach(function(I){return t(g,I)}),be&&Gn(g,_),j}function x(g,v,b,k){var j=mi(b);if(typeof j!="function")throw Error(L(150));if(b=j.call(b),b==null)throw Error(L(151));for(var N=j=null,S=v,_=v=0,A=null,R=b.next();S!==null&&!R.done;_++,R=b.next()){S.index>_?(A=S,S=null):A=S.sibling;var I=h(g,S,R.value,k);if(I===null){S===null&&(S=A);break}e&&S&&I.alternate===null&&t(g,S),v=a(I,v,_),N===null?j=I:N.sibling=I,N=I,S=A}if(R.done)return n(g,S),be&&Gn(g,_),j;if(S===null){for(;!R.done;_++,R=b.next())R=p(g,R.value,k),R!==null&&(v=a(R,v,_),N===null?j=R:N.sibling=R,N=R);return be&&Gn(g,_),j}for(S=r(g,S);!R.done;_++,R=b.next())R=m(S,g,_,R.value,k),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?_:R.key),v=a(R,v,_),N===null?j=R:N.sibling=R,N=R);return e&&S.forEach(function(U){return t(g,U)}),be&&Gn(g,_),j}function y(g,v,b,k){if(typeof b=="object"&&b!==null&&b.type===Cr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ds:e:{for(var j=b.key,N=v;N!==null;){if(N.key===j){if(j=b.type,j===Cr){if(N.tag===7){n(g,N.sibling),v=i(N,b.props.children),v.return=g,g=v;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&ph(j)===N.type){n(g,N.sibling),v=i(N,b.props),v.ref=yi(g,N,b),v.return=g,g=v;break e}n(g,N);break}else t(g,N);N=N.sibling}b.type===Cr?(v=lr(b.props.children,g.mode,k,b.key),v.return=g,g=v):(k=za(b.type,b.key,b.props,null,g.mode,k),k.ref=yi(g,v,b),k.return=g,g=k)}return o(g);case _r:e:{for(N=b.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(g,v.sibling),v=i(v,b.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=Nl(b,g.mode,k),v.return=g,g=v}return o(g);case bn:return N=b._init,y(g,v,N(b._payload),k)}if(Pi(b))return f(g,v,b,k);if(mi(b))return x(g,v,b,k);Xs(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,b),v.return=g,g=v):(n(g,v),v=Sl(b,g.mode,k),v.return=g,g=v),o(g)):n(g,v)}return y}var Gr=rm(!0),im=rm(!1),eo=$n(null),to=null,Lr=null,Od=null;function Id(){Od=Lr=to=null}function Dd(e){var t=eo.current;ge(eo),e._currentValue=t}function bc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ur(e,t){to=e,Od=Lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(Od!==e)if(e={context:e,memoizedValue:t,next:null},Lr===null){if(to===null)throw Error(L(308));Lr=e,to.dependencies={lanes:0,firstContext:e}}else Lr=Lr.next=e;return t}var nr=null;function Fd(e){nr===null?nr=[e]:nr.push(e)}function sm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fd(t)):(n.next=i.next,i.next=n),t.interleaved=n,dn(e,r)}function dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yn=!1;function Bd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dn(e,n)}return i=r.interleaved,i===null?(t.next=t,Fd(r)):(t.next=i.next,i.next=t),r.interleaved=t,dn(e,n)}function ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}function fh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function no(e,t,n,r){var i=e.updateQueue;yn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;o=0,u=d=c=null,l=a;do{var h=l.lane,m=l.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var f=e,x=l;switch(h=t,m=n,x.tag){case 1:if(f=x.payload,typeof f=="function"){p=f.call(m,p,h);break e}p=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=x.payload,h=typeof f=="function"?f.call(m,p,h):f,h==null)break e;p=ke({},p,h);break e;case 2:yn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=m,c=p):u=u.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);fr|=o,e.lanes=o,e.memoizedState=p}}function mh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var zs={},Kt=$n(zs),cs=$n(zs),ds=$n(zs);function rr(e){if(e===zs)throw Error(L(174));return e}function Hd(e,t){switch(he(ds,t),he(cs,e),he(Kt,zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jl(t,e)}ge(Kt),he(Kt,t)}function Qr(){ge(Kt),ge(cs),ge(ds)}function om(e){rr(ds.current);var t=rr(Kt.current),n=Jl(t,e.type);t!==n&&(he(cs,e),he(Kt,n))}function Ud(e){cs.current===e&&(ge(Kt),ge(cs))}var ye=$n(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Wd(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var ka=hn.ReactCurrentDispatcher,bl=hn.ReactCurrentBatchConfig,pr=0,we=null,Pe=null,Le=null,io=!1,$i=!1,us=0,V2=0;function Ue(){throw Error(L(321))}function $d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Vd(e,t,n,r,i,a){if(pr=a,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?X2:G2,e=n(r,i),$i){a=0;do{if($i=!1,us=0,25<=a)throw Error(L(301));a+=1,Le=Pe=null,t.updateQueue=null,ka.current=Q2,e=n(r,i)}while($i)}if(ka.current=so,t=Pe!==null&&Pe.next!==null,pr=0,Le=Pe=we=null,io=!1,t)throw Error(L(300));return e}function qd(){var e=us!==0;return us=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?we.memoizedState=Le=e:Le=Le.next=e,Le}function kt(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Le===null?we.memoizedState:Le.next;if(t!==null)Le=t,Pe=e;else{if(e===null)throw Error(L(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Le===null?we.memoizedState=Le=e:Le=Le.next=e}return Le}function hs(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=kt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,c=null,d=a;do{var u=d.lane;if((pr&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=r):c=c.next=p,we.lanes|=u,fr|=u}d=d.next}while(d!==null&&d!==a);c===null?o=r:c.next=l,Tt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,we.lanes|=a,fr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=kt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Tt(a,t.memoizedState)||(it=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function lm(){}function cm(e,t){var n=we,r=kt(),i=t(),a=!Tt(r.memoizedState,i);if(a&&(r.memoizedState=i,it=!0),r=r.queue,Yd(hm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,ps(9,um.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(L(349));pr&30||dm(n,t,i)}return i}function dm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function um(e,t,n,r){t.value=n,t.getSnapshot=r,pm(t)&&fm(e)}function hm(e,t,n){return n(function(){pm(t)&&fm(e)})}function pm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function fm(e){var t=dn(e,1);t!==null&&At(t,e,1,-1)}function gh(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t.queue=e,e=e.dispatch=K2.bind(null,we,e),[t.memoizedState,e]}function ps(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mm(){return kt().memoizedState}function Sa(e,t,n,r){var i=Wt();we.flags|=e,i.memoizedState=ps(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var i=kt();r=r===void 0?null:r;var a=void 0;if(Pe!==null){var o=Pe.memoizedState;if(a=o.destroy,r!==null&&$d(r,o.deps)){i.memoizedState=ps(t,n,a,r);return}}we.flags|=e,i.memoizedState=ps(1|t,n,a,r)}function xh(e,t){return Sa(8390656,8,e,t)}function Yd(e,t){return Po(2048,8,e,t)}function gm(e,t){return Po(4,2,e,t)}function xm(e,t){return Po(4,4,e,t)}function vm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bm(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,vm.bind(null,t,e),n)}function Kd(){}function ym(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wm(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jm(e,t,n){return pr&21?(Tt(n,t)||(n=C0(),we.lanes|=n,fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function q2(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{oe=n,bl.transition=r}}function km(){return kt().memoizedState}function Y2(e,t,n){var r=On(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sm(e))Nm(t,n);else if(n=sm(e,t,n,r),n!==null){var i=Qe();At(n,e,r,i),_m(n,t,r)}}function K2(e,t,n){var r=On(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sm(e))Nm(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Tt(l,o)){var c=t.interleaved;c===null?(i.next=i,Fd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=sm(e,t,i,r),n!==null&&(i=Qe(),At(n,e,r,i),_m(n,t,r))}}function Sm(e){var t=e.alternate;return e===we||t!==null&&t===we}function Nm(e,t){$i=io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _m(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nd(e,n)}}var so={readContext:jt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},X2={readContext:jt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:xh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sa(4194308,4,vm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sa(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y2.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:gh,useDebugValue:Kd,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=gh(!1),t=e[0];return e=q2.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=we,i=Wt();if(be){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Oe===null)throw Error(L(349));pr&30||dm(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,xh(hm.bind(null,r,a,e),[e]),r.flags|=2048,ps(9,um.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Wt(),t=Oe.identifierPrefix;if(be){var n=an,r=sn;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=us++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=V2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G2={readContext:jt,useCallback:ym,useContext:jt,useEffect:Yd,useImperativeHandle:bm,useInsertionEffect:gm,useLayoutEffect:xm,useMemo:wm,useReducer:yl,useRef:mm,useState:function(){return yl(hs)},useDebugValue:Kd,useDeferredValue:function(e){var t=kt();return jm(t,Pe.memoizedState,e)},useTransition:function(){var e=yl(hs)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lm,useSyncExternalStore:cm,useId:km,unstable_isNewReconciler:!1},Q2={readContext:jt,useCallback:ym,useContext:jt,useEffect:Yd,useImperativeHandle:bm,useInsertionEffect:gm,useLayoutEffect:xm,useMemo:wm,useReducer:wl,useRef:mm,useState:function(){return wl(hs)},useDebugValue:Kd,useDeferredValue:function(e){var t=kt();return Pe===null?t.memoizedState=e:jm(t,Pe.memoizedState,e)},useTransition:function(){var e=wl(hs)[0],t=kt().memoizedState;return[e,t]},useMutableSource:lm,useSyncExternalStore:cm,useId:km,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?br(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=On(e),a=on(r,i);a.payload=t,n!=null&&(a.callback=n),t=Tn(e,a,i),t!==null&&(At(t,e,i,r),ja(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=On(e),a=on(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Tn(e,a,i),t!==null&&(At(t,e,i,r),ja(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=On(e),i=on(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tn(e,i,r),t!==null&&(At(t,e,r,n),ja(t,e,r))}};function vh(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ss(n,r)||!ss(i,a):!0}function Cm(e,t,n){var r=!1,i=Hn,a=t.contextType;return typeof a=="object"&&a!==null?a=jt(a):(i=at(t)?ur:Xe.current,r=t.contextTypes,a=(r=r!=null)?Kr(e,i):Hn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function bh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function wc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=jt(a):(a=at(t)?ur:Xe.current,i.context=Kr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(yc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ro.enqueueReplaceState(i,i.state,null),no(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t){try{var n="",r=t;do n+=Nx(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z2=typeof WeakMap=="function"?WeakMap:Map;function zm(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Rc=r),jc(e,t)},n}function Mm(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){jc(e,t),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function yh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hv.bind(null,e,t,n),t.then(e,e))}function wh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,Tn(n,t,1))),n.lanes|=1),e)}var J2=hn.ReactCurrentOwner,it=!1;function Ge(e,t,n,r){t.child=e===null?im(t,null,n,r):Gr(t,e.child,n,r)}function kh(e,t,n,r,i){n=n.render;var a=t.ref;return Ur(t,i),r=Vd(e,t,n,r,a,i),n=qd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(be&&n&&Ad(t),t.flags|=1,Ge(e,t,r,i),t.child)}function Sh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!nu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Em(e,t,a,r,i)):(e=za(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(o,r)&&e.ref===t.ref)return un(e,t,i)}return t.flags|=1,e=In(a,r),e.ref=t.ref,e.return=t,t.child=e}function Em(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ss(a,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,un(e,t,i)}return kc(e,t,n,r,i)}function Pm(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ir,dt),dt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Ir,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,he(Ir,dt),dt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,he(Ir,dt),dt|=r;return Ge(e,t,i,n),t.child}function Rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kc(e,t,n,r,i){var a=at(n)?ur:Xe.current;return a=Kr(t,a),Ur(t,i),n=Vd(e,t,n,r,a,i),r=qd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(be&&r&&Ad(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Nh(e,t,n,r,i){if(at(n)){var a=!0;Qa(t)}else a=!1;if(Ur(t,i),t.stateNode===null)Na(e,t),Cm(t,n,r),wc(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=jt(d):(d=at(n)?ur:Xe.current,d=Kr(t,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&bh(t,o,r,d),yn=!1;var h=t.memoizedState;o.state=h,no(t,r,o,i),c=t.memoizedState,l!==r||h!==c||st.current||yn?(typeof u=="function"&&(yc(t,n,u,r),c=t.memoizedState),(l=yn||vh(t,n,l,r,h,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,am(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:zt(t.type,l),o.props=d,p=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=jt(c):(c=at(n)?ur:Xe.current,c=Kr(t,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==c)&&bh(t,o,r,c),yn=!1,h=t.memoizedState,o.state=h,no(t,r,o,i);var f=t.memoizedState;l!==p||h!==f||st.current||yn?(typeof m=="function"&&(yc(t,n,m,r),f=t.memoizedState),(d=yn||vh(t,n,d,r,h,f,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,f,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,f,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Sc(e,t,n,r,a,i)}function Sc(e,t,n,r,i,a){Rm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dh(t,n,!1),un(e,t,a);r=t.stateNode,J2.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Gr(t,e.child,null,a),t.child=Gr(t,null,l,a)):Ge(e,t,l,a),t.memoizedState=r.state,i&&dh(t,n,!0),t.child}function Am(e){var t=e.stateNode;t.pendingContext?ch(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ch(e,t.context,!1),Hd(e,t.containerInfo)}function _h(e,t,n,r,i){return Xr(),Ld(i),t.flags|=256,Ge(e,t,n,r),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function _c(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tm(e,t,n){var r=t.pendingProps,i=ye.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(ye,i&1),e===null)return vc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Lo(o,r,0,null),e=lr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=_c(n),t.memoizedState=Nc,e):Xd(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ev(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=In(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=In(l,a):(a=lr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?_c(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Nc,r}return a=e.child,e=a.sibling,r=In(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xd(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gs(e,t,n,r){return r!==null&&Ld(r),Gr(t,e.child,null,n),e=Xd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ev(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(L(422))),Gs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),a=lr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Gr(t,e.child,null,o),t.child.memoizedState=_c(o),t.memoizedState=Nc,a);if(!(t.mode&1))return Gs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(L(419)),r=jl(a,r,void 0),Gs(e,t,o,r)}if(l=(o&e.childLanes)!==0,it||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,dn(e,i),At(r,e,i,-1))}return tu(),r=jl(Error(L(421))),Gs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=pv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ut=An(i.nextSibling),ht=t,be=!0,Pt=null,e!==null&&(xt[vt++]=sn,xt[vt++]=an,xt[vt++]=hr,sn=e.id,an=e.overflow,hr=t),t=Xd(t,r.children),t.flags|=4096,t)}function Ch(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bc(e.return,t,n)}function kl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Lm(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ge(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ch(e,n,t);else if(e.tag===19)Ch(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kl(t,!0,n,null,a);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tv(e,t,n){switch(t.tag){case 3:Am(t),Xr();break;case 5:om(t);break;case 1:at(t.type)&&Qa(t);break;case 4:Hd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?Tm(e,t,n):(he(ye,ye.current&1),e=un(e,t,n),e!==null?e.sibling:null);he(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,Pm(e,t,n)}return un(e,t,n)}var Om,Cc,Im,Dm;Om=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cc=function(){};Im=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rr(Kt.current);var a=null;switch(n){case"input":i=Xl(e,i),r=Xl(e,r),a=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),a=[];break;case"textarea":i=Zl(e,i),r=Zl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}ec(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Zi.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&fe("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Dm=function(e,t,n,r){n!==r&&(t.flags|=4)};function wi(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nv(e,t,n){var r=t.pendingProps;switch(Td(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return at(t.type)&&Ga(),We(t),null;case 3:return r=t.stateNode,Qr(),ge(st),ge(Xe),Wd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ks(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Lc(Pt),Pt=null))),Cc(e,t),We(t),null;case 5:Ud(t);var i=rr(ds.current);if(n=t.type,e!==null&&t.stateNode!=null)Im(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return We(t),null}if(e=rr(Kt.current),Ks(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[qt]=t,r[ls]=a,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ai.length;i++)fe(Ai[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Ou(r,a),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},fe("invalid",r);break;case"textarea":Du(r,a),fe("invalid",r)}ec(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ys(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ys(r.textContent,l,e),i=["children",""+l]):Zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Fs(r),Iu(r,a,!0);break;case"textarea":Fs(r),Fu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Xa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=h0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[qt]=t,e[ls]=r,Om(e,t,!1,!1),t.stateNode=e;e:{switch(o=tc(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ai.length;i++)fe(Ai[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":Ou(e,r),i=Xl(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Du(e,r),i=Zl(e,r),fe("invalid",e);break;default:i=r}ec(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?m0(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&p0(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ji(e,c):typeof c=="number"&&Ji(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Zi.hasOwnProperty(a)?c!=null&&a==="onScroll"&&fe("scroll",e):c!=null&&bd(e,a,c,o))}switch(n){case"input":Fs(e),Iu(e,r,!1);break;case"textarea":Fs(e),Fu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Dr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Dm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=rr(ds.current),rr(Kt.current),Ks(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(a=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:Ys(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return We(t),null;case 13:if(ge(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&ut!==null&&t.mode&1&&!(t.flags&128))nm(),Xr(),t.flags|=98560,a=!1;else if(a=Ks(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(L(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(L(317));a[qt]=t}else Xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),a=!1}else Pt!==null&&(Lc(Pt),Pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?Ae===0&&(Ae=3):tu())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Qr(),Cc(e,t),e===null&&as(t.stateNode.containerInfo),We(t),null;case 10:return Dd(t.type._context),We(t),null;case 17:return at(t.type)&&Ga(),We(t),null;case 19:if(ge(ye),a=t.memoizedState,a===null)return We(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)wi(a,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ro(e),o!==null){for(t.flags|=128,wi(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(ye,ye.current&1|2),t.child}e=e.sibling}a.tail!==null&&ze()>Jr&&(t.flags|=128,r=!0,wi(a,!1),t.lanes=4194304)}else{if(!r)if(e=ro(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!be)return We(t),null}else 2*ze()-a.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,wi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ze(),t.sibling=null,n=ye.current,he(ye,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function rv(e,t){switch(Td(t),t.tag){case 1:return at(t.type)&&Ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),ge(st),ge(Xe),Wd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ud(t),null;case 13:if(ge(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ye),null;case 4:return Qr(),null;case 10:return Dd(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Qs=!1,Ve=!1,iv=typeof WeakSet=="function"?WeakSet:Set,H=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function zc(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var zh=!1;function sv(e,t){if(uc=qa,e=W0(),Rd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,u=0,p=e,h=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==a||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===e)break t;if(h===n&&++d===i&&(l=o),h===a&&++u===r&&(c=o),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},qa=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var f=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var x=f.memoizedProps,y=f.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:zt(t.type,x),y);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(k){Ne(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return f=zh,zh=!1,f}function Vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&zc(t,n,a)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fm(e){var t=e.alternate;t!==null&&(e.alternate=null,Fm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[ls],delete t[mc],delete t[H2],delete t[U2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bm(e){return e.tag===5||e.tag===3||e.tag===4}function Mh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}function Pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}var Ie=null,Mt=!1;function mn(e,t,n){for(n=n.child;n!==null;)Hm(e,t,n),n=n.sibling}function Hm(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:Ve||Or(n,t);case 6:var r=Ie,i=Mt;Ie=null,mn(e,t,n),Ie=r,Mt=i,Ie!==null&&(Mt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(Mt?(e=Ie,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),rs(e)):gl(Ie,n.stateNode));break;case 4:r=Ie,i=Mt,Ie=n.stateNode.containerInfo,Mt=!0,mn(e,t,n),Ie=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&zc(n,t,o),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Ve&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,t,l)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,mn(e,t,n),Ve=r):mn(e,t,n);break;default:mn(e,t,n)}}function Eh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new iv),t.forEach(function(r){var i=fv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,Mt=!1;break e;case 3:Ie=l.stateNode.containerInfo,Mt=!0;break e;case 4:Ie=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(Ie===null)throw Error(L(160));Hm(a,o,i),Ie=null,Mt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Ne(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Um(t,e),t=t.sibling}function Um(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Ft(e),r&4){try{Vi(3,e,e.return),Ao(3,e)}catch(x){Ne(e,e.return,x)}try{Vi(5,e,e.return)}catch(x){Ne(e,e.return,x)}}break;case 1:Ct(t,e),Ft(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(Ct(t,e),Ft(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var i=e.stateNode;try{Ji(i,"")}catch(x){Ne(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&d0(i,a),tc(l,o);var d=tc(l,a);for(o=0;o<c.length;o+=2){var u=c[o],p=c[o+1];u==="style"?m0(i,p):u==="dangerouslySetInnerHTML"?p0(i,p):u==="children"?Ji(i,p):bd(i,u,p,d)}switch(l){case"input":Gl(i,a);break;case"textarea":u0(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Dr(i,!!a.multiple,m,!1):h!==!!a.multiple&&(a.defaultValue!=null?Dr(i,!!a.multiple,a.defaultValue,!0):Dr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ls]=a}catch(x){Ne(e,e.return,x)}}break;case 6:if(Ct(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(x){Ne(e,e.return,x)}}break;case 3:if(Ct(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rs(t.containerInfo)}catch(x){Ne(e,e.return,x)}break;case 4:Ct(t,e),Ft(e);break;case 13:Ct(t,e),Ft(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Zd=ze())),r&4&&Eh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(d=Ve)||u,Ct(t,e),Ve=d):Ct(t,e),Ft(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(p=H=u;H!==null;){switch(h=H,m=h.child,h.tag){case 0:case 11:case 14:case 15:Vi(4,h,h.return);break;case 1:Or(h,h.return);var f=h.stateNode;if(typeof f.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(x){Ne(r,n,x)}}break;case 5:Or(h,h.return);break;case 22:if(h.memoizedState!==null){Rh(p);continue}}m!==null?(m.return=h,H=m):Rh(p)}u=u.sibling}e:for(u=null,p=e;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=f0("display",o))}catch(x){Ne(e,e.return,x)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(x){Ne(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ct(t,e),Ft(e),r&4&&Eh(e);break;case 21:break;default:Ct(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bm(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ji(i,""),r.flags&=-33);var a=Mh(e);Pc(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Mh(e);Ec(e,l,o);break;default:throw Error(L(161))}}catch(c){Ne(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function av(e,t,n){H=e,Wm(e)}function Wm(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qs;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ve;l=Qs;var d=Ve;if(Qs=o,(Ve=c)&&!d)for(H=i;H!==null;)o=H,c=o.child,o.tag===22&&o.memoizedState!==null?Ah(i):c!==null?(c.return=o,H=c):Ah(i);for(;a!==null;)H=a,Wm(a),a=a.sibling;H=i,Qs=l,Ve=d}Ph(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,H=a):Ph(e)}}function Ph(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&mh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mh(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&rs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ve||t.flags&512&&Mc(t)}catch(h){Ne(t,t.return,h)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function Rh(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function Ah(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(c){Ne(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ne(t,i,c)}}var a=t.return;try{Mc(t)}catch(c){Ne(t,a,c)}break;case 5:var o=t.return;try{Mc(t)}catch(c){Ne(t,o,c)}}}catch(c){Ne(t,t.return,c)}if(t===e){H=null;break}var l=t.sibling;if(l!==null){l.return=t.return,H=l;break}H=t.return}}var ov=Math.ceil,ao=hn.ReactCurrentDispatcher,Gd=hn.ReactCurrentOwner,wt=hn.ReactCurrentBatchConfig,te=0,Oe=null,Ee=null,Fe=0,dt=0,Ir=$n(0),Ae=0,fs=null,fr=0,To=0,Qd=0,qi=null,nt=null,Zd=0,Jr=1/0,tn=null,oo=!1,Rc=null,Ln=null,Zs=!1,Sn=null,lo=0,Yi=0,Ac=null,_a=-1,Ca=0;function Qe(){return te&6?ze():_a!==-1?_a:_a=ze()}function On(e){return e.mode&1?te&2&&Fe!==0?Fe&-Fe:$2.transition!==null?(Ca===0&&(Ca=C0()),Ca):(e=oe,e!==0||(e=window.event,e=e===void 0?16:T0(e.type)),e):1}function At(e,t,n,r){if(50<Yi)throw Yi=0,Ac=null,Error(L(185));Ns(e,n,r),(!(te&2)||e!==Oe)&&(e===Oe&&(!(te&2)&&(To|=n),Ae===4&&jn(e,Fe)),ot(e,r),n===1&&te===0&&!(t.mode&1)&&(Jr=ze()+500,Eo&&Vn()))}function ot(e,t){var n=e.callbackNode;$x(e,t);var r=Va(e,e===Oe?Fe:0);if(r===0)n!==null&&Uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uu(n),t===1)e.tag===0?W2(Th.bind(null,e)):J0(Th.bind(null,e)),F2(function(){!(te&6)&&Vn()}),n=null;else{switch(z0(r)){case 1:n=Sd;break;case 4:n=N0;break;case 16:n=$a;break;case 536870912:n=_0;break;default:n=$a}n=Qm(n,$m.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $m(e,t){if(_a=-1,Ca=0,te&6)throw Error(L(327));var n=e.callbackNode;if(Wr()&&e.callbackNode!==n)return null;var r=Va(e,e===Oe?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=co(e,r);else{t=r;var i=te;te|=2;var a=qm();(Oe!==e||Fe!==t)&&(tn=null,Jr=ze()+500,or(e,t));do try{dv();break}catch(l){Vm(e,l)}while(!0);Id(),ao.current=a,te=i,Ee!==null?t=0:(Oe=null,Fe=0,t=Ae)}if(t!==0){if(t===2&&(i=ac(e),i!==0&&(r=i,t=Tc(e,i))),t===1)throw n=fs,or(e,0),jn(e,r),ot(e,ze()),n;if(t===6)jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!lv(i)&&(t=co(e,r),t===2&&(a=ac(e),a!==0&&(r=a,t=Tc(e,a))),t===1))throw n=fs,or(e,0),jn(e,r),ot(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Qn(e,nt,tn);break;case 3:if(jn(e,r),(r&130023424)===r&&(t=Zd+500-ze(),10<t)){if(Va(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fc(Qn.bind(null,e,nt,tn),t);break}Qn(e,nt,tn);break;case 4:if(jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Rt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ov(r/1960))-r,10<r){e.timeoutHandle=fc(Qn.bind(null,e,nt,tn),r);break}Qn(e,nt,tn);break;case 5:Qn(e,nt,tn);break;default:throw Error(L(329))}}}return ot(e,ze()),e.callbackNode===n?$m.bind(null,e):null}function Tc(e,t){var n=qi;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=co(e,t),e!==2&&(t=nt,nt=n,t!==null&&Lc(t)),e}function Lc(e){nt===null?nt=e:nt.push.apply(nt,e)}function lv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t){for(t&=~Qd,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Th(e){if(te&6)throw Error(L(327));Wr();var t=Va(e,0);if(!(t&1))return ot(e,ze()),null;var n=co(e,t);if(e.tag!==0&&n===2){var r=ac(e);r!==0&&(t=r,n=Tc(e,r))}if(n===1)throw n=fs,or(e,0),jn(e,t),ot(e,ze()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,nt,tn),ot(e,ze()),null}function Jd(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Jr=ze()+500,Eo&&Vn())}}function mr(e){Sn!==null&&Sn.tag===0&&!(te&6)&&Wr();var t=te;te|=1;var n=wt.transition,r=oe;try{if(wt.transition=null,oe=1,e)return e()}finally{oe=r,wt.transition=n,te=t,!(te&6)&&Vn()}}function eu(){dt=Ir.current,ge(Ir)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D2(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ga();break;case 3:Qr(),ge(st),ge(Xe),Wd();break;case 5:Ud(r);break;case 4:Qr();break;case 13:ge(ye);break;case 19:ge(ye);break;case 10:Dd(r.type._context);break;case 22:case 23:eu()}n=n.return}if(Oe=e,Ee=e=In(e.current,null),Fe=dt=t,Ae=0,fs=null,Qd=To=fr=0,nt=qi=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}nr=null}return e}function Vm(e,t){do{var n=Ee;try{if(Id(),ka.current=so,io){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}io=!1}if(pr=0,Le=Pe=we=null,$i=!1,us=0,Gd.current=null,n===null||n.return===null){Ae=1,fs=t,Ee=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=Fe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=wh(o);if(m!==null){m.flags&=-257,jh(m,o,l,a,t),m.mode&1&&yh(a,d,t),t=m,c=d;var f=t.updateQueue;if(f===null){var x=new Set;x.add(c),t.updateQueue=x}else f.add(c);break e}else{if(!(t&1)){yh(a,d,t),tu();break e}c=Error(L(426))}}else if(be&&l.mode&1){var y=wh(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),jh(y,o,l,a,t),Ld(Zr(c,l));break e}}a=c=Zr(c,l),Ae!==4&&(Ae=2),qi===null?qi=[a]:qi.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=zm(a,c,t);fh(a,g);break e;case 1:l=c;var v=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ln===null||!Ln.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Mm(a,l,t);fh(a,k);break e}}a=a.return}while(a!==null)}Km(n)}catch(j){t=j,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function qm(){var e=ao.current;return ao.current=so,e===null?so:e}function tu(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Oe===null||!(fr&268435455)&&!(To&268435455)||jn(Oe,Fe)}function co(e,t){var n=te;te|=2;var r=qm();(Oe!==e||Fe!==t)&&(tn=null,or(e,t));do try{cv();break}catch(i){Vm(e,i)}while(!0);if(Id(),te=n,ao.current=r,Ee!==null)throw Error(L(261));return Oe=null,Fe=0,Ae}function cv(){for(;Ee!==null;)Ym(Ee)}function dv(){for(;Ee!==null&&!Lx();)Ym(Ee)}function Ym(e){var t=Gm(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Km(e):Ee=t,Gd.current=null}function Km(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rv(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ee=null;return}}else if(n=nv(n,t,dt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ae===0&&(Ae=5)}function Qn(e,t,n){var r=oe,i=wt.transition;try{wt.transition=null,oe=1,uv(e,t,n,r)}finally{wt.transition=i,oe=r}return null}function uv(e,t,n,r){do Wr();while(Sn!==null);if(te&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Vx(e,a),e===Oe&&(Ee=Oe=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zs||(Zs=!0,Qm($a,function(){return Wr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=wt.transition,wt.transition=null;var o=oe;oe=1;var l=te;te|=4,Gd.current=null,sv(e,n),Um(n,e),P2(hc),qa=!!uc,hc=uc=null,e.current=n,av(n),Ox(),te=l,oe=o,wt.transition=a}else e.current=n;if(Zs&&(Zs=!1,Sn=e,lo=i),a=e.pendingLanes,a===0&&(Ln=null),Fx(n.stateNode),ot(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Rc,Rc=null,e;return lo&1&&e.tag!==0&&Wr(),a=e.pendingLanes,a&1?e===Ac?Yi++:(Yi=0,Ac=e):Yi=0,Vn(),null}function Wr(){if(Sn!==null){var e=z0(lo),t=wt.transition,n=oe;try{if(wt.transition=null,oe=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,lo=0,te&6)throw Error(L(331));var i=te;for(te|=4,H=e.current;H!==null;){var a=H,o=a.child;if(H.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:Vi(8,u,a)}var p=u.child;if(p!==null)p.return=u,H=p;else for(;H!==null;){u=H;var h=u.sibling,m=u.return;if(Fm(u),u===d){H=null;break}if(h!==null){h.return=m,H=h;break}H=m}}}var f=a.alternate;if(f!==null){var x=f.child;if(x!==null){f.child=null;do{var y=x.sibling;x.sibling=null,x=y}while(x!==null)}}H=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,H=o;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Vi(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,H=g;break e}H=a.return}}var v=e.current;for(H=v;H!==null;){o=H;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,H=b;else e:for(o=v;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ao(9,l)}}catch(j){Ne(l,l.return,j)}if(l===o){H=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,H=k;break e}H=l.return}}if(te=i,Vn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{oe=n,wt.transition=t}}return!1}function Lh(e,t,n){t=Zr(n,t),t=zm(e,t,1),e=Tn(e,t,1),t=Qe(),e!==null&&(Ns(e,1,t),ot(e,t))}function Ne(e,t,n){if(e.tag===3)Lh(e,e,n);else for(;t!==null;){if(t.tag===3){Lh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=Zr(n,e),e=Mm(t,e,1),t=Tn(t,e,1),e=Qe(),t!==null&&(Ns(t,1,e),ot(t,e));break}}t=t.return}}function hv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Fe&n)===n&&(Ae===4||Ae===3&&(Fe&130023424)===Fe&&500>ze()-Zd?or(e,0):Qd|=n),ot(e,t)}function Xm(e,t){t===0&&(e.mode&1?(t=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):t=1);var n=Qe();e=dn(e,t),e!==null&&(Ns(e,t,n),ot(e,n))}function pv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xm(e,n)}function fv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),Xm(e,n)}var Gm;Gm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,tv(e,t,n);it=!!(e.flags&131072)}else it=!1,be&&t.flags&1048576&&em(t,Ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Na(e,t),e=t.pendingProps;var i=Kr(t,Xe.current);Ur(t,n),i=Vd(null,t,r,e,i,n);var a=qd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(a=!0,Qa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bd(t),i.updater=Ro,t.stateNode=i,i._reactInternals=t,wc(t,r,e,n),t=Sc(null,t,r,!0,a,n)):(t.tag=0,be&&a&&Ad(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Na(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=gv(r),e=zt(r,e),i){case 0:t=kc(null,t,r,e,n);break e;case 1:t=Nh(null,t,r,e,n);break e;case 11:t=kh(null,t,r,e,n);break e;case 14:t=Sh(null,t,r,zt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),kc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Nh(e,t,r,i,n);case 3:e:{if(Am(t),e===null)throw Error(L(387));r=t.pendingProps,a=t.memoizedState,i=a.element,am(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Zr(Error(L(423)),t),t=_h(e,t,r,n,i);break e}else if(r!==i){i=Zr(Error(L(424)),t),t=_h(e,t,r,n,i);break e}else for(ut=An(t.stateNode.containerInfo.firstChild),ht=t,be=!0,Pt=null,n=im(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){t=un(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return om(t),e===null&&vc(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,pc(r,i)?o=null:a!==null&&pc(r,a)&&(t.flags|=32),Rm(e,t),Ge(e,t,o,n),t.child;case 6:return e===null&&vc(t),null;case 13:return Tm(e,t,n);case 4:return Hd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),kh(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,he(eo,r._currentValue),r._currentValue=o,a!==null)if(Tt(a.value,o)){if(a.children===i.children&&!st.current){t=un(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=on(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),bc(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bc(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ur(t,n),i=jt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),Sh(e,t,r,i,n);case 15:return Em(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Na(e,t),t.tag=1,at(r)?(e=!0,Qa(t)):e=!1,Ur(t,n),Cm(t,r,i),wc(t,r,i,n),Sc(null,t,r,!0,e,n);case 19:return Lm(e,t,n);case 22:return Pm(e,t,n)}throw Error(L(156,t.tag))};function Qm(e,t){return S0(e,t)}function mv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,n,r){return new mv(e,t,n,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gv(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wd)return 11;if(e===jd)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function za(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")nu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Cr:return lr(n.children,i,a,t);case yd:o=8,i|=8;break;case Vl:return e=bt(12,n,t,i|2),e.elementType=Vl,e.lanes=a,e;case ql:return e=bt(13,n,t,i),e.elementType=ql,e.lanes=a,e;case Yl:return e=bt(19,n,t,i),e.elementType=Yl,e.lanes=a,e;case o0:return Lo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case s0:o=10;break e;case a0:o=9;break e;case wd:o=11;break e;case jd:o=14;break e;case bn:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=bt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function lr(e,t,n,r){return e=bt(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=bt(22,e,r,t),e.elementType=o0,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=bt(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,a,o,l,c){return e=new xv(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=bt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(a),e}function vv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zm(e){if(!e)return Hn;e=e._reactInternals;e:{if(br(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(at(n))return Z0(e,n,t)}return t}function Jm(e,t,n,r,i,a,o,l,c){return e=ru(n,r,!0,e,i,a,o,l,c),e.context=Zm(null),n=e.current,r=Qe(),i=On(n),a=on(r,i),a.callback=t??null,Tn(n,a,i),e.current.lanes=i,Ns(e,i,r),ot(e,r),e}function Oo(e,t,n,r){var i=t.current,a=Qe(),o=On(i);return n=Zm(n),t.context===null?t.context=n:t.pendingContext=n,t=on(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tn(i,t,o),e!==null&&(At(e,i,o,a),ja(e,i,o)),o}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){Oh(e,t),(e=e.alternate)&&Oh(e,t)}function bv(){return null}var eg=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}Io.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Oo(e,t,null,null)};Io.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){Oo(null,e,null,null)}),t[cn]=null}};function Io(e){this._internalRoot=e}Io.prototype.unstable_scheduleHydration=function(e){if(e){var t=P0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wn.length&&t!==0&&t<wn[n].priority;n++);wn.splice(n,0,e),n===0&&A0(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ih(){}function yv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=uo(o);a.call(d)}}var o=Jm(t,r,e,0,null,!1,!1,"",Ih);return e._reactRootContainer=o,e[cn]=o.current,as(e.nodeType===8?e.parentNode:e),mr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=uo(c);l.call(d)}}var c=ru(e,0,!1,null,null,!1,!1,"",Ih);return e._reactRootContainer=c,e[cn]=c.current,as(e.nodeType===8?e.parentNode:e),mr(function(){Oo(t,c,n,r)}),c}function Fo(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var c=uo(o);l.call(c)}}Oo(t,o,e,i)}else o=yv(n,t,e,i,r);return uo(o)}M0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ri(t.pendingLanes);n!==0&&(Nd(t,n|1),ot(t,ze()),!(te&6)&&(Jr=ze()+500,Vn()))}break;case 13:mr(function(){var r=dn(e,1);if(r!==null){var i=Qe();At(r,e,1,i)}}),iu(e,1)}};_d=function(e){if(e.tag===13){var t=dn(e,134217728);if(t!==null){var n=Qe();At(t,e,134217728,n)}iu(e,134217728)}};E0=function(e){if(e.tag===13){var t=On(e),n=dn(e,t);if(n!==null){var r=Qe();At(n,e,t,r)}iu(e,t)}};P0=function(){return oe};R0=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};rc=function(e,t,n){switch(t){case"input":if(Gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mo(r);if(!i)throw Error(L(90));c0(r),Gl(r,i)}}}break;case"textarea":u0(e,n);break;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}};v0=Jd;b0=mr;var wv={usingClientEntryPoint:!1,Events:[Cs,Pr,Mo,g0,x0,Jd]},ji={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jv={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=j0(e),e===null?null:e.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{No=Js.inject(jv),Yt=Js}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(L(200));return vv(e,t,null,n)};ft.createRoot=function(e,t){if(!au(e))throw Error(L(299));var n=!1,r="",i=eg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,r,i),e[cn]=t.current,as(e.nodeType===8?e.parentNode:e),new su(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=j0(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return mr(e)};ft.hydrate=function(e,t,n){if(!Do(t))throw Error(L(200));return Fo(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!au(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=eg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Jm(t,null,e,1,n??null,i,!1,a,o),e[cn]=t.current,as(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Io(t)};ft.render=function(e,t,n){if(!Do(t))throw Error(L(200));return Fo(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!Do(e))throw Error(L(40));return e._reactRootContainer?(mr(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};ft.unstable_batchedUpdates=Jd;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Fo(e,t,n,!1,r)};ft.version="18.3.1-next-f1338f8080-20240426";function tg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tg)}catch(e){console.error(e)}}tg(),t0.exports=ft;var kv=t0.exports,Dh=kv;Wl.createRoot=Dh.createRoot,Wl.hydrateRoot=Dh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}var Nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nn||(Nn={}));const Fh="popstate";function Sv(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:l}=r.location;return Oc("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ho(i)}return _v(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ng(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nv(){return Math.random().toString(36).substr(2,8)}function Bh(e,t){return{usr:e.state,key:e.key,idx:t}}function Oc(e,t,n,r){return n===void 0&&(n=null),ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ci(t):t,{state:n,key:t&&t.key||r||Nv()})}function ho(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ci(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _v(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=Nn.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(ms({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function p(){l=Nn.Pop;let y=u(),g=y==null?null:y-d;d=y,c&&c({action:l,location:x.location,delta:g})}function h(y,g){l=Nn.Push;let v=Oc(x.location,y,g);d=u()+1;let b=Bh(v,d),k=x.createHref(v);try{o.pushState(b,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(k)}a&&c&&c({action:l,location:x.location,delta:1})}function m(y,g){l=Nn.Replace;let v=Oc(x.location,y,g);d=u();let b=Bh(v,d),k=x.createHref(v);o.replaceState(b,"",k),a&&c&&c({action:l,location:x.location,delta:0})}function f(y){let g=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof y=="string"?y:ho(y);return v=v.replace(/ $/,"%20"),je(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let x={get action(){return l},get location(){return e(i,o)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Fh,p),c=y,()=>{i.removeEventListener(Fh,p),c=null}},createHref(y){return t(i,y)},createURL:f,encodeLocation(y){let g=f(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(y){return o.go(y)}};return x}var Hh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hh||(Hh={}));function Cv(e,t,n){return n===void 0&&(n="/"),zv(e,t,n)}function zv(e,t,n,r){let i=typeof t=="string"?ci(t):t,a=ei(i.pathname||"/",n);if(a==null)return null;let o=rg(e);Mv(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=Bv(a);l=Dv(o[c],d)}return l}function rg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Dn([r,c.relativePath]),u=n.concat(c);a.children&&a.children.length>0&&(je(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),rg(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Ov(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let c of ig(a.path))i(a,o,c)}),t}function ig(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=ig(r.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Mv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Iv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ev=/^:[\w-]+$/,Pv=3,Rv=2,Av=1,Tv=10,Lv=-2,Uh=e=>e==="*";function Ov(e,t){let n=e.split("/"),r=n.length;return n.some(Uh)&&(r+=Lv),t&&(r+=Rv),n.filter(i=>!Uh(i)).reduce((i,a)=>i+(Ev.test(a)?Pv:a===""?Av:Tv),r)}function Iv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Dv(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",p=Ic({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),h=c.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Dn([a,p.pathname]),pathnameBase:$v(Dn([a,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(a=Dn([a,p.pathnameBase]))}return o}function Ic(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Fv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,u,p)=>{let{paramName:h,isOptional:m}=u;if(h==="*"){let x=l[p]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const f=l[p];return m&&!f?d[h]=void 0:d[h]=(f||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function Fv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ng(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ng(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ei(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Hv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ci(e):e;return{pathname:n?n.startsWith("/")?n:Uv(n,t):t,search:Vv(r),hash:qv(i)}}function Uv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ou(e,t){let n=Wv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ci(e):(i=ms({},e),je(!i.pathname||!i.pathname.includes("?"),_l("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),_l("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),_l("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(o==null)l=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let c=Hv(i,l),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const Dn=e=>e.join("/").replace(/\/\/+/g,"/"),$v=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sg=["post","put","patch","delete"];new Set(sg);const Kv=["get",...sg];new Set(Kv);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gs.apply(this,arguments)}const Bo=w.createContext(null),ag=w.createContext(null),pn=w.createContext(null),Ho=w.createContext(null),Gt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),og=w.createContext(null);function Xv(e,t){let{relative:n}=t===void 0?{}:t;di()||je(!1);let{basename:r,navigator:i}=w.useContext(pn),{hash:a,pathname:o,search:l}=Uo(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Dn([r,o])),i.createHref({pathname:c,search:l,hash:a})}function di(){return w.useContext(Ho)!=null}function _t(){return di()||je(!1),w.useContext(Ho).location}function lg(e){w.useContext(pn).static||w.useLayoutEffect(e)}function Ot(){let{isDataRoute:e}=w.useContext(Gt);return e?db():Gv()}function Gv(){di()||je(!1);let e=w.useContext(Bo),{basename:t,future:n,navigator:r}=w.useContext(pn),{matches:i}=w.useContext(Gt),{pathname:a}=_t(),o=JSON.stringify(ou(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return lg(()=>{l.current=!0}),w.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=lu(d,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Dn([t,p.pathname])),(u.replace?r.replace:r.push)(p,u.state,u)},[t,r,o,a,e])}const Qv=w.createContext(null);function Zv(e){let t=w.useContext(Gt).outlet;return t&&w.createElement(Qv.Provider,{value:e},t)}function cg(){let{matches:e}=w.useContext(Gt),t=e[e.length-1];return t?t.params:{}}function Uo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(pn),{matches:i}=w.useContext(Gt),{pathname:a}=_t(),o=JSON.stringify(ou(i,r.v7_relativeSplatPath));return w.useMemo(()=>lu(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function Jv(e,t){return eb(e,t)}function eb(e,t,n,r){di()||je(!1);let{navigator:i}=w.useContext(pn),{matches:a}=w.useContext(Gt),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=_t(),u;if(t){var p;let y=typeof t=="string"?ci(t):t;c==="/"||(p=y.pathname)!=null&&p.startsWith(c)||je(!1),u=y}else u=d;let h=u.pathname||"/",m=h;if(c!=="/"){let y=c.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(y.length).join("/")}let f=Cv(e,{pathname:m}),x=sb(f&&f.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Dn([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Dn([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,n,r);return t&&x?w.createElement(Ho.Provider,{value:{location:gs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Nn.Pop}},x):x}function tb(){let e=cb(),t=Yv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const nb=w.createElement(tb,null);class rb extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Gt.Provider,{value:this.props.routeContext},w.createElement(og.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ib(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Bo);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Gt.Provider,{value:t},r)}function sb(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||je(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:h,errors:m}=n,f=p.route.loader&&h[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||f){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,p,h)=>{let m,f=!1,x=null,y=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||nb,c&&(d<0&&h===0?(ub("route-fallback"),f=!0,y=null):d===h&&(f=!0,y=p.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,h+1)),v=()=>{let b;return m?b=x:f?b=y:p.route.Component?b=w.createElement(p.route.Component,null):p.route.element?b=p.route.element:b=u,w.createElement(ib,{match:p,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:b})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?w.createElement(rb,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var dg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dg||{}),ug=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ug||{});function ab(e){let t=w.useContext(Bo);return t||je(!1),t}function ob(e){let t=w.useContext(ag);return t||je(!1),t}function lb(e){let t=w.useContext(Gt);return t||je(!1),t}function hg(e){let t=lb(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function cb(){var e;let t=w.useContext(og),n=ob(),r=hg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function db(){let{router:e}=ab(dg.UseNavigateStable),t=hg(ug.UseNavigateStable),n=w.useRef(!1);return lg(()=>{n.current=!0}),w.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,gs({fromRouteId:t},a)))},[e,t])}const Wh={};function ub(e,t,n){Wh[e]||(Wh[e]=!0)}function hb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dc(e){let{to:t,replace:n,state:r,relative:i}=e;di()||je(!1);let{future:a,static:o}=w.useContext(pn),{matches:l}=w.useContext(Gt),{pathname:c}=_t(),d=Ot(),u=lu(t,ou(l,a.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(u);return w.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:i}),[d,p,i,n,r]),null}function pg(e){return Zv(e.context)}function Se(e){je(!1)}function pb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:a,static:o=!1,future:l}=e;di()&&je(!1);let c=t.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:a,static:o,future:gs({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof r=="string"&&(r=ci(r));let{pathname:u="/",search:p="",hash:h="",state:m=null,key:f="default"}=r,x=w.useMemo(()=>{let y=ei(u,c);return y==null?null:{location:{pathname:y,search:p,hash:h,state:m,key:f},navigationType:i}},[c,u,p,h,m,f,i]);return x==null?null:w.createElement(pn.Provider,{value:d},w.createElement(Ho.Provider,{children:n,value:x}))}function fb(e){let{children:t,location:n}=e;return Jv(Fc(t),n)}new Promise(()=>{});function Fc(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let a=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Fc(r.props.children,a));return}r.type!==Se&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fc(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}function fg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gb(e,t){return e.button===0&&(!t||t==="_self")&&!mb(e)}function Bc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function xb(e,t){let n=Bc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const vb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bb=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],yb="6";try{window.__reactRouterVersion=yb}catch{}const wb=w.createContext({isTransitioning:!1}),jb="startTransition",$h=hx[jb];function kb(e){let{basename:t,children:n,future:r,window:i}=e,a=w.useRef();a.current==null&&(a.current=Sv({window:i,v5Compat:!0}));let o=a.current,[l,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},u=w.useCallback(p=>{d&&$h?$h(()=>c(p)):c(p)},[c,d]);return w.useLayoutEffect(()=>o.listen(u),[o,u]),w.useEffect(()=>hb(r),[r]),w.createElement(pb,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Sb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:p}=t,h=fg(t,vb),{basename:m}=w.useContext(pn),f,x=!1;if(typeof d=="string"&&Nb.test(d)&&(f=d,Sb))try{let b=new URL(window.location.href),k=d.startsWith("//")?new URL(b.protocol+d):new URL(d),j=ei(k.pathname,m);k.origin===b.origin&&j!=null?d=j+k.search+k.hash:x=!0}catch{}let y=Xv(d,{relative:i}),g=Cb(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:i,viewTransition:p});function v(b){r&&r(b),b.defaultPrevented||g(b)}return w.createElement("a",po({},h,{href:f||y,onClick:x||a?r:v,ref:n,target:c}))}),gn=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:l,to:c,viewTransition:d,children:u}=t,p=fg(t,bb),h=Uo(c,{relative:p.relative}),m=_t(),f=w.useContext(ag),{navigator:x,basename:y}=w.useContext(pn),g=f!=null&&zb(h)&&d===!0,v=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,b=m.pathname,k=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(b=b.toLowerCase(),k=k?k.toLowerCase():null,v=v.toLowerCase()),k&&y&&(k=ei(k,y)||k);const j=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let N=b===v||!o&&b.startsWith(v)&&b.charAt(j)==="/",S=k!=null&&(k===v||!o&&k.startsWith(v)&&k.charAt(v.length)==="/"),_={isActive:N,isPending:S,isTransitioning:g},A=N?r:void 0,R;typeof a=="function"?R=a(_):R=[a,N?"active":null,S?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let I=typeof l=="function"?l(_):l;return w.createElement($,po({},p,{"aria-current":A,className:R,ref:n,style:I,to:c,viewTransition:d}),typeof u=="function"?u(_):u)});var Hc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hc||(Hc={}));var Vh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vh||(Vh={}));function _b(e){let t=w.useContext(Bo);return t||je(!1),t}function Cb(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=Ot(),d=_t(),u=Uo(e,{relative:o});return w.useCallback(p=>{if(gb(p,n)){p.preventDefault();let h=r!==void 0?r:ho(d)===ho(u);c(e,{replace:h,state:i,preventScrollReset:a,relative:o,viewTransition:l})}},[d,c,u,r,i,n,e,a,o,l])}function mg(e){let t=w.useRef(Bc(e)),n=w.useRef(!1),r=_t(),i=w.useMemo(()=>xb(r.search,n.current?null:t.current),[r.search]),a=Ot(),o=w.useCallback((l,c)=>{const d=Bc(typeof l=="function"?l(i):l);n.current=!0,a("?"+d,c)},[a,i]);return[i,o]}function zb(e,t){t===void 0&&(t={});let n=w.useContext(wb);n==null&&je(!1);let{basename:r}=_b(Hc.useViewTransitionState),i=Uo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=ei(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ei(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ic(i.pathname,o)!=null||Ic(i.pathname,a)!=null}function gg(e,t){return function(){return e.apply(t,arguments)}}const{toString:Mb}=Object.prototype,{getPrototypeOf:cu}=Object,{iterator:Wo,toStringTag:xg}=Symbol,$o=(e=>t=>{const n=Mb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),It=e=>(e=e.toLowerCase(),t=>$o(t)===e),Vo=e=>t=>typeof t===e,{isArray:ui}=Array,ti=Vo("undefined");function Ms(e){return e!==null&&!ti(e)&&e.constructor!==null&&!ti(e.constructor)&&lt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const vg=It("ArrayBuffer");function Eb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&vg(e.buffer),t}const Pb=Vo("string"),lt=Vo("function"),bg=Vo("number"),Es=e=>e!==null&&typeof e=="object",Rb=e=>e===!0||e===!1,Ma=e=>{if($o(e)!=="object")return!1;const t=cu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(xg in e)&&!(Wo in e)},Ab=e=>{if(!Es(e)||Ms(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Tb=It("Date"),Lb=It("File"),Ob=It("Blob"),Ib=It("FileList"),Db=e=>Es(e)&&lt(e.pipe),Fb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||lt(e.append)&&((t=$o(e))==="formdata"||t==="object"&&lt(e.toString)&&e.toString()==="[object FormData]"))},Bb=It("URLSearchParams"),[Hb,Ub,Wb,$b]=["ReadableStream","Request","Response","Headers"].map(It),Vb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ps(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),ui(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(Ms(e))return;const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(r=0;r<o;r++)l=a[r],t.call(null,e[l],l,e)}}function yg(e,t){if(Ms(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wg=e=>!ti(e)&&e!==ir;function Uc(){const{caseless:e,skipUndefined:t}=wg(this)&&this||{},n={},r=(i,a)=>{const o=e&&yg(n,a)||a;Ma(n[o])&&Ma(i)?n[o]=Uc(n[o],i):Ma(i)?n[o]=Uc({},i):ui(i)?n[o]=i.slice():(!t||!ti(i))&&(n[o]=i)};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&Ps(arguments[i],r);return n}const qb=(e,t,n,{allOwnKeys:r}={})=>(Ps(t,(i,a)=>{n&&lt(i)?e[a]=gg(i,n):e[a]=i},{allOwnKeys:r}),e),Yb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Xb=(e,t,n,r)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&cu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Gb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Qb=e=>{if(!e)return null;if(ui(e))return e;let t=e.length;if(!bg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Zb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&cu(Uint8Array)),Jb=(e,t)=>{const r=(e&&e[Wo]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},ey=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ty=It("HTMLFormElement"),ny=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),qh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ry=It("RegExp"),jg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ps(n,(i,a)=>{let o;(o=t(i,a,e))!==!1&&(r[a]=o||i)}),Object.defineProperties(e,r)},iy=e=>{jg(e,(t,n)=>{if(lt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(lt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sy=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return ui(e)?r(e):r(String(e).split(t)),n},ay=()=>{},oy=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ly(e){return!!(e&&lt(e.append)&&e[xg]==="FormData"&&e[Wo])}const cy=e=>{const t=new Array(10),n=(r,i)=>{if(Es(r)){if(t.indexOf(r)>=0)return;if(Ms(r))return r;if(!("toJSON"in r)){t[i]=r;const a=ui(r)?[]:{};return Ps(r,(o,l)=>{const c=n(o,i+1);!ti(c)&&(a[l]=c)}),t[i]=void 0,a}}return r};return n(e,0)},dy=It("AsyncFunction"),uy=e=>e&&(Es(e)||lt(e))&&lt(e.then)&&lt(e.catch),kg=((e,t)=>e?setImmediate:t?((n,r)=>(ir.addEventListener("message",({source:i,data:a})=>{i===ir&&a===n&&r.length&&r.shift()()},!1),i=>{r.push(i),ir.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",lt(ir.postMessage)),hy=typeof queueMicrotask<"u"?queueMicrotask.bind(ir):typeof process<"u"&&process.nextTick||kg,py=e=>e!=null&&lt(e[Wo]),M={isArray:ui,isArrayBuffer:vg,isBuffer:Ms,isFormData:Fb,isArrayBufferView:Eb,isString:Pb,isNumber:bg,isBoolean:Rb,isObject:Es,isPlainObject:Ma,isEmptyObject:Ab,isReadableStream:Hb,isRequest:Ub,isResponse:Wb,isHeaders:$b,isUndefined:ti,isDate:Tb,isFile:Lb,isBlob:Ob,isRegExp:ry,isFunction:lt,isStream:Db,isURLSearchParams:Bb,isTypedArray:Zb,isFileList:Ib,forEach:Ps,merge:Uc,extend:qb,trim:Vb,stripBOM:Yb,inherits:Kb,toFlatObject:Xb,kindOf:$o,kindOfTest:It,endsWith:Gb,toArray:Qb,forEachEntry:Jb,matchAll:ey,isHTMLForm:ty,hasOwnProperty:qh,hasOwnProp:qh,reduceDescriptors:jg,freezeMethods:iy,toObjectSet:sy,toCamelCase:ny,noop:ay,toFiniteNumber:oy,findKey:yg,global:ir,isContextDefined:wg,isSpecCompliantForm:ly,toJSONObject:cy,isAsyncFn:dy,isThenable:uy,setImmediate:kg,asap:hy,isIterable:py};function G(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}M.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.status}}});const Sg=G.prototype,Ng={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ng[e]={value:e}});Object.defineProperties(G,Ng);Object.defineProperty(Sg,"isAxiosError",{value:!0});G.from=(e,t,n,r,i,a)=>{const o=Object.create(Sg);M.toFlatObject(e,o,function(u){return u!==Error.prototype},d=>d!=="isAxiosError");const l=e&&e.message?e.message:"Error",c=t==null&&e?e.code:t;return G.call(o,l,c,n,r,i),e&&o.cause==null&&Object.defineProperty(o,"cause",{value:e,configurable:!0}),o.name=e&&e.name||"Error",a&&Object.assign(o,a),o};const fy=null;function Wc(e){return M.isPlainObject(e)||M.isArray(e)}function _g(e){return M.endsWith(e,"[]")?e.slice(0,-2):e}function Yh(e,t,n){return e?e.concat(t).map(function(i,a){return i=_g(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function my(e){return M.isArray(e)&&!e.some(Wc)}const gy=M.toFlatObject(M,{},null,function(t){return/^is[A-Z]/.test(t)});function qo(e,t,n){if(!M.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,y){return!M.isUndefined(y[x])});const r=n.metaTokens,i=n.visitor||u,a=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(t);if(!M.isFunction(i))throw new TypeError("visitor must be a function");function d(f){if(f===null)return"";if(M.isDate(f))return f.toISOString();if(M.isBoolean(f))return f.toString();if(!c&&M.isBlob(f))throw new G("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(f)||M.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,x,y){let g=f;if(f&&!y&&typeof f=="object"){if(M.endsWith(x,"{}"))x=r?x:x.slice(0,-2),f=JSON.stringify(f);else if(M.isArray(f)&&my(f)||(M.isFileList(f)||M.endsWith(x,"[]"))&&(g=M.toArray(f)))return x=_g(x),g.forEach(function(b,k){!(M.isUndefined(b)||b===null)&&t.append(o===!0?Yh([x],k,a):o===null?x:x+"[]",d(b))}),!1}return Wc(f)?!0:(t.append(Yh(y,x,a),d(f)),!1)}const p=[],h=Object.assign(gy,{defaultVisitor:u,convertValue:d,isVisitable:Wc});function m(f,x){if(!M.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+x.join("."));p.push(f),M.forEach(f,function(g,v){(!(M.isUndefined(g)||g===null)&&i.call(t,g,M.isString(v)?v.trim():v,x,h))===!0&&m(g,x?x.concat(v):[v])}),p.pop()}}if(!M.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Kh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function du(e,t){this._pairs=[],e&&qo(e,this,t)}const Cg=du.prototype;Cg.append=function(t,n){this._pairs.push([t,n])};Cg.toString=function(t){const n=t?function(r){return t.call(this,r,Kh)}:Kh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function xy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function zg(e,t,n){if(!t)return e;const r=n&&n.encode||xy;M.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let a;if(i?a=i(t,n):a=M.isURLSearchParams(t)?t.toString():new du(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Xh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){M.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Mg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vy=typeof URLSearchParams<"u"?URLSearchParams:du,by=typeof FormData<"u"?FormData:null,yy=typeof Blob<"u"?Blob:null,wy={isBrowser:!0,classes:{URLSearchParams:vy,FormData:by,Blob:yy},protocols:["http","https","file","blob","url","data"]},uu=typeof window<"u"&&typeof document<"u",$c=typeof navigator=="object"&&navigator||void 0,jy=uu&&(!$c||["ReactNative","NativeScript","NS"].indexOf($c.product)<0),ky=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Sy=uu&&window.location.href||"http://localhost",Ny=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:uu,hasStandardBrowserEnv:jy,hasStandardBrowserWebWorkerEnv:ky,navigator:$c,origin:Sy},Symbol.toStringTag,{value:"Module"})),qe={...Ny,...wy};function _y(e,t){return qo(e,new qe.classes.URLSearchParams,{visitor:function(n,r,i,a){return qe.isNode&&M.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function Cy(e){return M.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zy(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Eg(e){function t(n,r,i,a){let o=n[a++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=a>=n.length;return o=!o&&M.isArray(i)?i.length:o,c?(M.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!M.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&M.isArray(i[o])&&(i[o]=zy(i[o])),!l)}if(M.isFormData(e)&&M.isFunction(e.entries)){const n={};return M.forEachEntry(e,(r,i)=>{t(Cy(r),i,n,0)}),n}return null}function My(e,t,n){if(M.isString(e))try{return(t||JSON.parse)(e),M.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Rs={transitional:Mg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=M.isObject(t);if(a&&M.isHTMLForm(t)&&(t=new FormData(t)),M.isFormData(t))return i?JSON.stringify(Eg(t)):t;if(M.isArrayBuffer(t)||M.isBuffer(t)||M.isStream(t)||M.isFile(t)||M.isBlob(t)||M.isReadableStream(t))return t;if(M.isArrayBufferView(t))return t.buffer;if(M.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return _y(t,this.formSerializer).toString();if((l=M.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return qo(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),My(t)):t}],transformResponse:[function(t){const n=this.transitional||Rs.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(M.isResponse(t)||M.isReadableStream(t))return t;if(t&&M.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?G.from(l,G.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qe.classes.FormData,Blob:qe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],e=>{Rs.headers[e]={}});const Ey=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Py=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&Ey[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Gh=Symbol("internals");function ki(e){return e&&String(e).trim().toLowerCase()}function Ea(e){return e===!1||e==null?e:M.isArray(e)?e.map(Ea):String(e)}function Ry(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ay=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cl(e,t,n,r,i){if(M.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!M.isString(t)){if(M.isString(r))return t.indexOf(r)!==-1;if(M.isRegExp(r))return r.test(t)}}function Ty(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ly(e,t){const n=M.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}let ct=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(l,c,d){const u=ki(c);if(!u)throw new Error("header name must be a non-empty string");const p=M.findKey(i,u);(!p||i[p]===void 0||d===!0||d===void 0&&i[p]!==!1)&&(i[p||c]=Ea(l))}const o=(l,c)=>M.forEach(l,(d,u)=>a(d,u,c));if(M.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(M.isString(t)&&(t=t.trim())&&!Ay(t))o(Py(t),n);else if(M.isObject(t)&&M.isIterable(t)){let l={},c,d;for(const u of t){if(!M.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[d=u[0]]=(c=l[d])?M.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(l,n)}else t!=null&&a(n,t,r);return this}get(t,n){if(t=ki(t),t){const r=M.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Ry(i);if(M.isFunction(n))return n.call(this,i,r);if(M.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ki(t),t){const r=M.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=ki(o),o){const l=M.findKey(r,o);l&&(!n||Cl(r,r[l],l,n))&&(delete r[l],i=!0)}}return M.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Cl(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return M.forEach(this,(i,a)=>{const o=M.findKey(r,a);if(o){n[o]=Ea(i),delete n[a];return}const l=t?Ty(a):String(a).trim();l!==a&&delete n[a],n[l]=Ea(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return M.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&M.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Gh]=this[Gh]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=ki(o);r[l]||(Ly(i,o),r[l]=!0)}return M.isArray(t)?t.forEach(a):a(t),this}};ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});M.freezeMethods(ct);function zl(e,t){const n=this||Rs,r=t||n,i=ct.from(r.headers);let a=r.data;return M.forEach(e,function(l){a=l.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Pg(e){return!!(e&&e.__CANCEL__)}function hi(e,t,n){G.call(this,e??"canceled",G.ERR_CANCELED,t,n),this.name="CanceledError"}M.inherits(hi,G,{__CANCEL__:!0});function Rg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Oy(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Iy(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),u=r[a];o||(o=d),n[i]=c,r[i]=d;let p=a,h=0;for(;p!==i;)h+=n[p++],p=p%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),d-o<t)return;const m=u&&d-u;return m?Math.round(h*1e3/m):void 0}}function Dy(e,t){let n=0,r=1e3/t,i,a;const o=(d,u=Date.now())=>{n=u,i=null,a&&(clearTimeout(a),a=null),e(...d)};return[(...d)=>{const u=Date.now(),p=u-n;p>=r?o(d,u):(i=d,a||(a=setTimeout(()=>{a=null,o(i)},r-p)))},()=>i&&o(i)]}const fo=(e,t,n=3)=>{let r=0;const i=Iy(50,250);return Dy(a=>{const o=a.loaded,l=a.lengthComputable?a.total:void 0,c=o-r,d=i(c),u=o<=l;r=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&u?(l-o)/d:void 0,event:a,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(p)},n)},Qh=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Zh=e=>(...t)=>M.asap(()=>e(...t)),Fy=qe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,qe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(qe.origin),qe.navigator&&/(msie|trident)/i.test(qe.navigator.userAgent)):()=>!0,By=qe.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const o=[e+"="+encodeURIComponent(t)];M.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),M.isString(r)&&o.push("path="+r),M.isString(i)&&o.push("domain="+i),a===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Hy(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Uy(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ag(e,t,n){let r=!Hy(t);return e&&(r||n==!1)?Uy(e,t):t}const Jh=e=>e instanceof ct?{...e}:e;function gr(e,t){t=t||{};const n={};function r(d,u,p,h){return M.isPlainObject(d)&&M.isPlainObject(u)?M.merge.call({caseless:h},d,u):M.isPlainObject(u)?M.merge({},u):M.isArray(u)?u.slice():u}function i(d,u,p,h){if(M.isUndefined(u)){if(!M.isUndefined(d))return r(void 0,d,p,h)}else return r(d,u,p,h)}function a(d,u){if(!M.isUndefined(u))return r(void 0,u)}function o(d,u){if(M.isUndefined(u)){if(!M.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function l(d,u,p){if(p in t)return r(d,u);if(p in e)return r(void 0,d)}const c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(d,u,p)=>i(Jh(d),Jh(u),p,!0)};return M.forEach(Object.keys({...e,...t}),function(u){const p=c[u]||i,h=p(e[u],t[u],u);M.isUndefined(h)&&p!==l||(n[u]=h)}),n}const Tg=e=>{const t=gr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:l}=t;if(t.headers=o=ct.from(o),t.url=zg(Ag(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),M.isFormData(n)){if(qe.hasStandardBrowserEnv||qe.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(M.isFunction(n.getHeaders)){const c=n.getHeaders(),d=["content-type","content-length"];Object.entries(c).forEach(([u,p])=>{d.includes(u.toLowerCase())&&o.set(u,p)})}}if(qe.hasStandardBrowserEnv&&(r&&M.isFunction(r)&&(r=r(t)),r||r!==!1&&Fy(t.url))){const c=i&&a&&By.read(a);c&&o.set(i,c)}return t},Wy=typeof XMLHttpRequest<"u",$y=Wy&&function(e){return new Promise(function(n,r){const i=Tg(e);let a=i.data;const o=ct.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,u,p,h,m,f;function x(){m&&m(),f&&f(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let y=new XMLHttpRequest;y.open(i.method.toUpperCase(),i.url,!0),y.timeout=i.timeout;function g(){if(!y)return;const b=ct.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:b,config:e,request:y};Rg(function(S){n(S),x()},function(S){r(S),x()},j),y=null}"onloadend"in y?y.onloadend=g:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(g)},y.onabort=function(){y&&(r(new G("Request aborted",G.ECONNABORTED,e,y)),y=null)},y.onerror=function(k){const j=k&&k.message?k.message:"Network Error",N=new G(j,G.ERR_NETWORK,e,y);N.event=k||null,r(N),y=null},y.ontimeout=function(){let k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const j=i.transitional||Mg;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),r(new G(k,j.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,e,y)),y=null},a===void 0&&o.setContentType(null),"setRequestHeader"in y&&M.forEach(o.toJSON(),function(k,j){y.setRequestHeader(j,k)}),M.isUndefined(i.withCredentials)||(y.withCredentials=!!i.withCredentials),l&&l!=="json"&&(y.responseType=i.responseType),d&&([h,f]=fo(d,!0),y.addEventListener("progress",h)),c&&y.upload&&([p,m]=fo(c),y.upload.addEventListener("progress",p),y.upload.addEventListener("loadend",m)),(i.cancelToken||i.signal)&&(u=b=>{y&&(r(!b||b.type?new hi(null,e,y):b),y.abort(),y=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const v=Oy(i.url);if(v&&qe.protocols.indexOf(v)===-1){r(new G("Unsupported protocol "+v+":",G.ERR_BAD_REQUEST,e));return}y.send(a||null)})},Vy=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const a=function(d){if(!i){i=!0,l();const u=d instanceof Error?d:this.reason;r.abort(u instanceof G?u:new hi(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,a(new G(`timeout ${t} of ms exceeded`,G.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(a):d.removeEventListener("abort",a)}),e=null)};e.forEach(d=>d.addEventListener("abort",a));const{signal:c}=r;return c.unsubscribe=()=>M.asap(l),c}},qy=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Yy=async function*(e,t){for await(const n of Ky(e))yield*qy(n,t)},Ky=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},ep=(e,t,n,r)=>{const i=Yy(e,t);let a=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await i.next();if(d){l(),c.close();return}let p=u.byteLength;if(n){let h=a+=p;n(h)}c.enqueue(new Uint8Array(u))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},tp=64*1024,{isFunction:ea}=M,Xy=(({Request:e,Response:t})=>({Request:e,Response:t}))(M.global),{ReadableStream:np,TextEncoder:rp}=M.global,ip=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Gy=e=>{e=M.merge.call({skipUndefined:!0},Xy,e);const{fetch:t,Request:n,Response:r}=e,i=t?ea(t):typeof fetch=="function",a=ea(n),o=ea(r);if(!i)return!1;const l=i&&ea(np),c=i&&(typeof rp=="function"?(f=>x=>f.encode(x))(new rp):async f=>new Uint8Array(await new n(f).arrayBuffer())),d=a&&l&&ip(()=>{let f=!1;const x=new n(qe.origin,{body:new np,method:"POST",get duplex(){return f=!0,"half"}}).headers.has("Content-Type");return f&&!x}),u=o&&l&&ip(()=>M.isReadableStream(new r("").body)),p={stream:u&&(f=>f.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!p[f]&&(p[f]=(x,y)=>{let g=x&&x[f];if(g)return g.call(x);throw new G(`Response type '${f}' is not supported`,G.ERR_NOT_SUPPORT,y)})});const h=async f=>{if(f==null)return 0;if(M.isBlob(f))return f.size;if(M.isSpecCompliantForm(f))return(await new n(qe.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(M.isArrayBufferView(f)||M.isArrayBuffer(f))return f.byteLength;if(M.isURLSearchParams(f)&&(f=f+""),M.isString(f))return(await c(f)).byteLength},m=async(f,x)=>{const y=M.toFiniteNumber(f.getContentLength());return y??h(x)};return async f=>{let{url:x,method:y,data:g,signal:v,cancelToken:b,timeout:k,onDownloadProgress:j,onUploadProgress:N,responseType:S,headers:_,withCredentials:A="same-origin",fetchOptions:R}=Tg(f),I=t||fetch;S=S?(S+"").toLowerCase():"text";let U=Vy([v,b&&b.toAbortSignal()],k),B=null;const F=U&&U.unsubscribe&&(()=>{U.unsubscribe()});let P;try{if(N&&d&&y!=="get"&&y!=="head"&&(P=await m(_,g))!==0){let K=new n(x,{method:"POST",body:g,duplex:"half"}),X;if(M.isFormData(g)&&(X=K.headers.get("content-type"))&&_.setContentType(X),K.body){const[ve,ce]=Qh(P,fo(Zh(N)));g=ep(K.body,tp,ve,ce)}}M.isString(A)||(A=A?"include":"omit");const T=a&&"credentials"in n.prototype,V={...R,signal:U,method:y.toUpperCase(),headers:_.normalize().toJSON(),body:g,duplex:"half",credentials:T?A:void 0};B=a&&new n(x,V);let z=await(a?I(B,R):I(x,V));const C=u&&(S==="stream"||S==="response");if(u&&(j||C&&F)){const K={};["status","statusText","headers"].forEach(_e=>{K[_e]=z[_e]});const X=M.toFiniteNumber(z.headers.get("content-length")),[ve,ce]=j&&Qh(X,fo(Zh(j),!0))||[];z=new r(ep(z.body,tp,ve,()=>{ce&&ce(),F&&F()}),K)}S=S||"text";let O=await p[M.findKey(p,S)||"text"](z,f);return!C&&F&&F(),await new Promise((K,X)=>{Rg(K,X,{data:O,headers:ct.from(z.headers),status:z.status,statusText:z.statusText,config:f,request:B})})}catch(T){throw F&&F(),T&&T.name==="TypeError"&&/Load failed|fetch/i.test(T.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,f,B),{cause:T.cause||T}):G.from(T,T&&T.code,f,B)}}},Qy=new Map,Lg=e=>{let t=e?e.env:{};const{fetch:n,Request:r,Response:i}=t,a=[r,i,n];let o=a.length,l=o,c,d,u=Qy;for(;l--;)c=a[l],d=u.get(c),d===void 0&&u.set(c,d=l?new Map:Gy(t)),u=d;return d};Lg();const Vc={http:fy,xhr:$y,fetch:{get:Lg}};M.forEach(Vc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const sp=e=>`- ${e}`,Zy=e=>M.isFunction(e)||e===null||e===!1,Og={getAdapter:(e,t)=>{e=M.isArray(e)?e:[e];const{length:n}=e;let r,i;const a={};for(let o=0;o<n;o++){r=e[o];let l;if(i=r,!Zy(r)&&(i=Vc[(l=String(r)).toLowerCase()],i===void 0))throw new G(`Unknown adapter '${l}'`);if(i&&(M.isFunction(i)||(i=i.get(t))))break;a[l||"#"+o]=i}if(!i){const o=Object.entries(a).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(sp).join(`
`):" "+sp(o[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i},adapters:Vc};function Ml(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hi(null,e)}function ap(e){return Ml(e),e.headers=ct.from(e.headers),e.data=zl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Og.getAdapter(e.adapter||Rs.adapter,e)(e).then(function(r){return Ml(e),r.data=zl.call(e,e.transformResponse,r),r.headers=ct.from(r.headers),r},function(r){return Pg(r)||(Ml(e),r&&r.response&&(r.response.data=zl.call(e,e.transformResponse,r.response),r.response.headers=ct.from(r.response.headers))),Promise.reject(r)})}const Ig="1.12.2",Yo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const op={};Yo.transitional=function(t,n,r){function i(a,o){return"[Axios v"+Ig+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,l)=>{if(t===!1)throw new G(i(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!op[o]&&(op[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,l):!0}};Yo.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Jy(e,t,n){if(typeof e!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const l=e[a],c=l===void 0||o(l,a,e);if(c!==!0)throw new G("option "+a+" must be "+c,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+a,G.ERR_BAD_OPTION)}}const Pa={assertOptions:Jy,validators:Yo},Bt=Pa.validators;let cr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Xh,response:new Xh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=gr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Pa.assertOptions(r,{silentJSONParsing:Bt.transitional(Bt.boolean),forcedJSONParsing:Bt.transitional(Bt.boolean),clarifyTimeoutError:Bt.transitional(Bt.boolean)},!1),i!=null&&(M.isFunction(i)?n.paramsSerializer={serialize:i}:Pa.assertOptions(i,{encode:Bt.function,serialize:Bt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Pa.assertOptions(n,{baseUrl:Bt.spelling("baseURL"),withXsrfToken:Bt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=a&&M.merge(a.common,a[n.method]);a&&M.forEach(["delete","get","head","post","put","patch","common"],f=>{delete a[f]}),n.headers=ct.concat(o,a);const l=[];let c=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(c=c&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const d=[];this.interceptors.response.forEach(function(x){d.push(x.fulfilled,x.rejected)});let u,p=0,h;if(!c){const f=[ap.bind(this),void 0];for(f.unshift(...l),f.push(...d),h=f.length,u=Promise.resolve(n);p<h;)u=u.then(f[p++],f[p++]);return u}h=l.length;let m=n;for(;p<h;){const f=l[p++],x=l[p++];try{m=f(m)}catch(y){x.call(this,y);break}}try{u=ap.call(this,m)}catch(f){return Promise.reject(f)}for(p=0,h=d.length;p<h;)u=u.then(d[p++],d[p++]);return u}getUri(t){t=gr(this.defaults,t);const n=Ag(t.baseURL,t.url,t.allowAbsoluteUrls);return zg(n,t.params,t.paramsSerializer)}};M.forEach(["delete","get","head","options"],function(t){cr.prototype[t]=function(n,r){return this.request(gr(r||{},{method:t,url:n,data:(r||{}).data}))}});M.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,l){return this.request(gr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}cr.prototype[t]=n(),cr.prototype[t+"Form"]=n(!0)});let ew=class Dg{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{r.subscribe(l),a=l}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,l){r.reason||(r.reason=new hi(a,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Dg(function(i){t=i}),cancel:t}}};function tw(e){return function(n){return e.apply(null,n)}}function nw(e){return M.isObject(e)&&e.isAxiosError===!0}const qc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qc).forEach(([e,t])=>{qc[t]=e});function Fg(e){const t=new cr(e),n=gg(cr.prototype.request,t);return M.extend(n,cr.prototype,t,{allOwnKeys:!0}),M.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Fg(gr(e,i))},n}const xe=Fg(Rs);xe.Axios=cr;xe.CanceledError=hi;xe.CancelToken=ew;xe.isCancel=Pg;xe.VERSION=Ig;xe.toFormData=qo;xe.AxiosError=G;xe.Cancel=xe.CanceledError;xe.all=function(t){return Promise.all(t)};xe.spread=tw;xe.isAxiosError=nw;xe.mergeConfig=gr;xe.AxiosHeaders=ct;xe.formToJSON=e=>Eg(M.isHTMLForm(e)?new FormData(e):e);xe.getAdapter=Og.getAdapter;xe.HttpStatusCode=qc;xe.default=xe;const{Axios:Gk,AxiosError:Qk,CanceledError:Zk,isCancel:Jk,CancelToken:e3,VERSION:t3,all:n3,Cancel:r3,isAxiosError:i3,spread:s3,toFormData:a3,AxiosHeaders:o3,HttpStatusCode:l3,formToJSON:c3,getAdapter:d3,mergeConfig:u3}=xe,Y=xe.create({baseURL:"/api/v1"}),lp=typeof window<"u"?localStorage.getItem("access_token"):null;lp&&(Y.defaults.headers.common.Authorization=`Bearer ${lp}`);function cp(e){e?Y.defaults.headers.common.Authorization=`Bearer ${e}`:delete Y.defaults.headers.common.Authorization}Y.interceptors.request.use(e=>{try{const t=(e.url||"").toLowerCase();if(!(t.includes("/auth/login")||t.includes("/auth/register")||t.includes("/auth/refresh"))){const r=localStorage.getItem("access_token");r&&(e.headers=e.headers||{},e.headers.Authorization=`Bearer ${r}`)}}catch{}return e});let kr=!1,Yc=[];function ta(e){Yc.forEach(t=>t(e)),Yc=[]}Y.interceptors.response.use(e=>e,async e=>{var r;const t=e.config;if(!t)return Promise.reject(e);if(((r=e.response)==null?void 0:r.status)===401&&!t._retry){t._retry=!0;try{if(kr)return new Promise((d,u)=>{Yc.push(p=>{p?(t.headers.Authorization=`Bearer ${p}`,d(Y(t))):u(e)})});kr=!0;const i=localStorage.getItem("refresh_token");if(!i){ta(null),kr=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(e)}const o=(await xe.post("/api/v1/auth/refresh",{refresh_token:i})).data,l=o==null?void 0:o.access_token,c=o==null?void 0:o.refresh_token;if(l)return localStorage.setItem("access_token",l),c&&localStorage.setItem("refresh_token",c),Y.defaults.headers.common.Authorization=`Bearer ${l}`,ta(l),kr=!1,t.headers.Authorization=`Bearer ${l}`,Y(t);ta(null),kr=!1}catch{ta(null),kr=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(e)}}return Promise.reject(e)});const Bg=w.createContext(void 0);function rw({children:e}){const[t,n]=w.useState(null),[r,i]=w.useState(null),[a,o]=w.useState(!0);w.useEffect(()=>{(async()=>{const d=localStorage.getItem("access_token"),u=localStorage.getItem("user");if(d&&u)try{await Y.get("/auth/me"),n(JSON.parse(u)),i(d)}catch{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")}o(!1)})()},[]),w.useEffect(()=>{cp(r)},[r]);const l=w.useMemo(()=>({user:t,accessToken:r,loading:a,login:async(c,d)=>{const u=await Y.post("/auth/login",{email:c,password:d}),{access_token:p,refresh_token:h,user:m}=u.data;n(m),i(p),localStorage.setItem("access_token",p),h&&localStorage.setItem("refresh_token",h),localStorage.setItem("user",JSON.stringify(m)),cp(p)},register:async(c,d,u)=>{await Y.post("/auth/register",{email:c,password:d,full_name:u})},logout:()=>{n(null),i(null),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")},updateUser:c=>{n(d=>{const u={...d||{},...c};try{localStorage.setItem("user",JSON.stringify(u))}catch{}return u})}}),[t,r,a]);return s.jsx(Bg.Provider,{value:l,children:e})}function Dt(){const e=w.useContext(Bg);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}function dp(){const{user:e}=Dt();return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"hero",children:s.jsxs("div",{className:"container hero-inner",children:[s.jsxs("div",{className:"hero-copy",children:[s.jsx("p",{className:"kicker",children:"Welcome to"}),s.jsx("h1",{className:"headline",children:"Everyday Essentials, Thoughtfully Made"}),s.jsx("p",{className:"subhead",children:"Curated apparel and accessories crafted for comfort, durability, and timeless style."}),e?s.jsxs("div",{className:"hero-ctas",children:[s.jsx($,{to:"/about",className:"btn btn-primary",children:"Learn More"}),s.jsx($,{to:"/shop",className:"btn btn-ghost",children:"Visit Shop"})]}):s.jsxs("div",{className:"hero-ctas",children:[s.jsx($,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),s.jsx($,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]}),s.jsxs("div",{className:"hero-images",children:[s.jsx("img",{src:"/images/hero-1.jpg",alt:"Lifestyle banner"}),s.jsx("img",{src:"/images/hero-2.jpg",alt:"Crafted details"})]})]})}),!e&&s.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:s.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[s.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to See More?"}),s.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to explore our full collections, view features, and start shopping!"}),s.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[s.jsx($,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),s.jsx($,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),e&&s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"section alt",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"About Us"}),s.jsx("p",{className:"lead",children:"We’re a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance. Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care."}),s.jsxs("div",{className:"cards three",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("h3",{children:"What we do"}),s.jsx("p",{children:"From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use."})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("h3",{children:"How we work"}),s.jsx("p",{children:"Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what’s delivered."})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("h3",{children:"Our promise"}),s.jsx("p",{children:"Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition."})]})]})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Our Mission"}),s.jsx("p",{className:"lead",children:"Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends."}),s.jsxs("ul",{className:"bullets",children:[s.jsx("li",{children:"Material-first design choices with soft-hand, responsibly sourced textiles."}),s.jsx("li",{children:"Timeless palettes and silhouettes that pair across wardrobes."}),s.jsx("li",{children:"Continuous improvements guided by real customer feedback."})]})]})}),s.jsx("section",{className:"section alt",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Why Choose Us"}),s.jsxs("div",{className:"grid-2",children:[s.jsxs("div",{className:"feature",children:[s.jsx("div",{className:"feature-badge",children:"Quality"}),s.jsx("h3",{children:"Built to last"}),s.jsx("p",{children:"Reinforced stitching, reliable hardware, and color-fast finishes keep pieces in rotation longer."})]}),s.jsxs("div",{className:"feature",children:[s.jsx("div",{className:"feature-badge",children:"Trust"}),s.jsx("h3",{children:"Transparent sourcing"}),s.jsx("p",{children:"Clear specs, care guides, and honest descriptions so purchasing decisions are easy and informed."})]}),s.jsxs("div",{className:"feature",children:[s.jsx("div",{className:"feature-badge",children:"Care"}),s.jsx("h3",{children:"Responsive support"}),s.jsx("p",{children:"Friendly, prompt help from real people for sizing, care, and post-purchase questions."})]}),s.jsxs("div",{className:"feature",children:[s.jsx("div",{className:"feature-badge",children:"Value"}),s.jsx("h3",{children:"Fair pricing"}),s.jsx("p",{children:"Essentials priced for everyday use without compromising on materials or finish."})]})]})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"What Customers Say"}),s.jsxs("div",{className:"testimonials",children:[s.jsxs("blockquote",{className:"quote",children:["“The fabric quality is excellent and the fit stays consistent after washes. Great staples.”",s.jsx("footer",{children:"— A. Perera"})]}),s.jsxs("blockquote",{className:"quote",children:["“Support was quick to help with sizing. Delivery was on time and packaging was neat.”",s.jsx("footer",{children:"— S. Fernando"})]}),s.jsxs("blockquote",{className:"quote",children:["“Clean design and no loud branding. Exactly what I wanted for daily wear.”",s.jsx("footer",{children:"— N. Jayasuriya"})]})]})]})}),s.jsx("section",{className:"section alt",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Special Highlights"}),s.jsxs("div",{className:"cards three",children:[s.jsxs("div",{className:"promo-card",children:[s.jsx("h3",{children:"Seasonal Edit"}),s.jsx("p",{children:"Limited colorways and refreshed textures—perfect for the current season."}),s.jsx($,{to:"/shop",className:"btn btn-link",children:"Explore"})]}),s.jsxs("div",{className:"promo-card",children:[s.jsx("h3",{children:"Bundle Savings"}),s.jsx("p",{children:"Save on curated combos like tee + cap or backpack + organizer."}),s.jsx($,{to:"/shop",className:"btn btn-link",children:"View Bundles"})]}),s.jsxs("div",{className:"promo-card",children:[s.jsx("h3",{children:"Student Perks"}),s.jsx("p",{children:"Verified students enjoy an extra 10% off select collections."}),s.jsx($,{to:"/shop",className:"btn btn-link",children:"Check Eligibility"})]})]})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Delivery & Returns"}),s.jsxs("div",{className:"grid-3",children:[s.jsxs("div",{className:"mini-feature",children:[s.jsx("h3",{children:"Fast Dispatch"}),s.jsx("p",{children:"Orders ship within 1–2 business days with tracked delivery."})]}),s.jsxs("div",{className:"mini-feature",children:[s.jsx("h3",{children:"Easy Returns"}),s.jsx("p",{children:"30-day returns on unused items in original condition and packaging."})]}),s.jsxs("div",{className:"mini-feature",children:[s.jsx("h3",{children:"Care Guides"}),s.jsx("p",{children:"Simple wash and storage instructions included with every order."})]})]})]})})]}),s.jsx("style",{children:`
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
      `})]})}function $t(e,t="success",n=2200){const r=new CustomEvent("app:toast",{detail:{message:e,type:t,duration:n}});window.dispatchEvent(r)}const Hg=w.createContext(void 0);function iw({children:e}){const{user:t}=Dt(),[n,r]=w.useState([]),[i,a]=w.useState(!1);w.useEffect(()=>{if(typeof window<"u"&&(window.location.pathname==="/login"||window.location.pathname==="/register"))return;if(!(t!=null&&t.email)){r([]);return}(async()=>{a(!0);try{const d=(await Y.get("/cart")).data;r(d.items||[]),localStorage.removeItem(`cart_${t.email}`),localStorage.removeItem("cart_guest")}catch(c){console.error("Failed to load cart from server:",c);try{const d=localStorage.getItem(`cart_${t.email}`);if(d){const u=JSON.parse(d);if(u.length>0){await Y.post("/cart/sync",u);const p=await Y.get("/cart");r(p.data.items||[]),localStorage.removeItem(`cart_${t.email}`)}}}catch(d){console.error("Failed to sync cart:",d)}}finally{a(!1)}})()},[t==null?void 0:t.email]);const o=w.useMemo(()=>{const c=!!localStorage.getItem("access_token");return{items:n,count:n.reduce((d,u)=>d+u.qty,0),isAuthenticated:c,isLoading:i,add:(d,u=1)=>{if(!c){alert("Please login or register to add items to cart"),window.location.href="/login";return}const p=crypto.randomUUID();r(h=>h.find(f=>f.productId===d.productId)?h.map(f=>f.productId===d.productId?{...f,qty:f.qty+u}:f):[...h,{...d,id:p,qty:u}]);try{$t(`${d.name} added to cart`,"success")}catch{}Y.post("/cart/add",{productId:d.productId,slug:d.slug,name:d.name,price:d.price,qty:u,image:d.image}).then(()=>Y.get("/cart")).then(h=>{r(h.data.items||[])}).catch(h=>{console.error("Failed to add item to cart:",h),$t("Failed to sync cart with server","error"),Y.get("/cart").then(m=>{r(m.data.items||[])}).catch(()=>{})})},remove:d=>{r(u=>u.filter(p=>p.id!==d)),Y.delete(`/cart/remove/${d}`).catch(u=>{console.error("Failed to remove item from cart:",u),Y.get("/cart").then(p=>{r(p.data.items||[])}).catch(()=>{})})},update:(d,u)=>{u<1||(r(p=>p.map(h=>h.id===d?{...h,qty:u}:h)),Y.put(`/cart/update/${d}`,null,{params:{qty:u}}).catch(p=>{console.error("Failed to update cart item:",p),Y.get("/cart").then(h=>{r(h.data.items||[])}).catch(()=>{})}))},clear:()=>{r([]),Y.delete("/cart/clear").catch(d=>{console.error("Failed to clear cart:",d),Y.get("/cart").then(u=>{r(u.data.items||[])}).catch(()=>{})})}}},[n,i]);return s.jsx(Hg.Provider,{value:o,children:e})}function pi(){const e=w.useContext(Hg);if(!e)throw new Error("useCart must be used within CartProvider");return e}async function mo(e){const t=document.querySelector(".cart-link .badge");if(!e||!t)return;const n=e.getBoundingClientRect(),r=t.getBoundingClientRect();let i;if(e instanceof HTMLImageElement){const d=document.createElement("img");d.src=e.currentSrc||e.src,d.alt="",i=d}else{const d=document.createElement("div");d.style.background="rgba(255,255,255,0.9)",i=d}i.style.position="fixed",i.style.left=`${n.left}px`,i.style.top=`${n.top}px`,i.style.width=`${n.width}px`,i.style.height=`${n.height}px`,i.style.borderRadius="12px",i.style.boxShadow="0 10px 30px rgba(0,0,0,0.35)",i.style.zIndex="3000",i.style.pointerEvents="none",document.body.appendChild(i);const a=r.left+r.width/2-(n.left+n.width/2),o=r.top+r.height/2-(n.top+n.height/2),l=[{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${a*.2}px, ${o*.2}px) scale(0.9)`,opacity:.9},{transform:`translate(${a}px, ${o}px) scale(0.15)`,opacity:.1}],c={duration:600,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"};await i.animate(l,c).finished.catch(()=>{}),i.remove();try{t.classList.add("sparkle"),setTimeout(()=>t.classList.remove("sparkle"),700)}catch{}}function sw(){const{slug:e}=cg(),[t,n]=w.useState(null),[r,i]=w.useState(0),{add:a}=pi(),o=Ot(),l=w.useRef(null);if(w.useEffect(()=>{e&&xe.get(`/api/v1/products/${e}`).then(h=>n(h.data))},[e]),!t)return s.jsx("div",{className:"container",style:{padding:24},children:"Loading..."});const c=t.images&&t.images.length>0?t.images:["https://via.placeholder.com/600x400"],d=()=>{i(h=>(h+1)%c.length)},u=()=>{i(h=>(h-1+c.length)%c.length)},p=h=>{i(h)};return s.jsx("div",{className:"container",style:{padding:24},children:s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",boxShadow:"var(--shadow)"},children:[s.jsx("img",{ref:l,src:c[r],alt:`${t.name} - Image ${r+1}`,style:{width:"100%",display:"block",aspectRatio:"4/3",objectFit:"cover"}}),c.length>1&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:u,style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:h=>h.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:h=>h.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Previous image",children:"‹"}),s.jsx("button",{onClick:d,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:h=>h.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:h=>h.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Next image",children:"›"}),s.jsxs("div",{style:{position:"absolute",bottom:12,right:12,background:"rgba(0,0,0,0.6)",color:"white",padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:500},children:[r+1," / ",c.length]})]})]}),c.length>1&&s.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto",paddingBottom:8},children:c.map((h,m)=>s.jsx("button",{onClick:()=>p(m),style:{border:r===m?"2px solid var(--brand)":"2px solid transparent",borderRadius:8,overflow:"hidden",cursor:"pointer",padding:0,background:"transparent",flexShrink:0,opacity:r===m?1:.6,transition:"opacity 0.2s, border-color 0.2s"},onMouseEnter:f=>f.currentTarget.style.opacity="1",onMouseLeave:f=>f.currentTarget.style.opacity=r===m?"1":"0.6","aria-label":`View image ${m+1}`,children:s.jsx("img",{src:h,alt:`${t.name} thumbnail ${m+1}`,style:{width:80,height:80,objectFit:"cover",display:"block"}})},m))})]}),s.jsxs("div",{children:[s.jsx("h1",{style:{marginTop:0},children:t.name}),s.jsxs("div",{className:"price",style:{fontSize:22},children:["LKR ",t.price]}),s.jsx("p",{style:{color:"var(--muted)"},children:t.description||"A beautiful product made for you."}),s.jsxs("div",{style:{display:"flex",gap:8},children:[s.jsx("button",{className:"btn",onClick:()=>{l.current&&mo(l.current),a({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]})},children:"Add to Cart"}),s.jsx("button",{className:"btn",onClick:()=>{l.current&&mo(l.current),a({productId:t.id,slug:t.slug,name:t.name,price:t.price,image:c[0]}),o("/cart")},children:"Buy Now"})]})]})]})})}function aw(){var k;const{login:e}=Dt(),[t,n]=w.useState(""),[r,i]=w.useState(""),[a,o]=w.useState(null),[l,c]=w.useState(!1),[d,u]=w.useState(!1),[p,h]=w.useState(!0),[m,f]=w.useState(!1),x=Ot(),y=_t(),g=w.useRef(null),v=((k=y.state)==null?void 0:k.from)||"/";w.useEffect(()=>{f(!0)},[]),w.useEffect(()=>{a&&g.current&&g.current.focus()},[a]),w.useEffect(()=>{let j;return d&&(j=window.setTimeout(()=>u(!1),5e3)),()=>{j&&window.clearTimeout(j)}},[d]);async function b(j){if(j.preventDefault(),o(null),!t||!r){o("Email and password are required.");return}try{c(!0),await e(t,r),p&&typeof localStorage<"u"?localStorage.setItem("remember","1"):localStorage.removeItem("remember"),x(v)}catch{o("Invalid credentials")}finally{c(!1)}}return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"page-background",children:[s.jsx("div",{className:"gradient-orb orb-1"}),s.jsx("div",{className:"gradient-orb orb-2"}),s.jsx("div",{className:"gradient-orb orb-3"}),s.jsx("div",{className:"grid-overlay"})]}),s.jsx("section",{className:`login-hero ${m?"animate-in":""}`,children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"hero-content",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Secure Login"]}),s.jsx("h1",{className:"headline",children:"Welcome back"}),s.jsx("p",{className:"subhead",children:"Sign in to manage orders, track deliveries, and update account details."}),s.jsxs("div",{className:"hero-decorations",children:[s.jsx("div",{className:"decoration-line line-1"}),s.jsx("div",{className:"decoration-line line-2"}),s.jsx("div",{className:"decoration-dot dot-1"}),s.jsx("div",{className:"decoration-dot dot-2"}),s.jsx("div",{className:"decoration-dot dot-3"})]})]})})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:`container login-wrap ${m?"animate-in":""}`,children:[s.jsxs("div",{className:"panel main-panel",children:[s.jsxs("div",{className:"panel-header",children:[s.jsx("h2",{className:"section-title",children:"Login"}),s.jsx("div",{className:"title-underline"})]}),s.jsx("div",{ref:g,tabIndex:-1,"aria-live":"assertive","aria-atomic":"true",className:"live",children:a&&s.jsxs("div",{className:"alert error",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),a]})}),s.jsxs("form",{className:"form",onSubmit:b,noValidate:!0,children:[s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"email",children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),s.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),s.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:j=>n(j.target.value),required:!0})]}),s.jsxs("div",{className:"field",children:[s.jsxs("div",{className:"label-row",children:[s.jsxs("label",{htmlFor:"password",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Password"]}),s.jsx($,{to:"/forgot",className:"link",children:"Forgot password?"})]}),s.jsxs("div",{className:"pw-wrap",children:[s.jsx("input",{id:"password",type:d?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:r,onChange:j=>i(j.target.value),required:!0}),s.jsx("button",{type:"button",className:"pw-toggle","aria-label":d?"Hide password":"Show password","aria-pressed":d,"aria-controls":"password",onClick:()=>u(j=>!j),title:d?"Hide password":"Show password",children:d?s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),s.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),s.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),s.jsx("p",{className:"tiny muted",children:"Password visibility will auto-hide after 5 seconds."})]}),s.jsxs("div",{className:"row between",children:[s.jsxs("label",{className:"check",children:[s.jsx("input",{type:"checkbox",checked:p,onChange:j=>h(j.target.checked)}),s.jsx("span",{className:"checkmark",children:s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),s.jsx("span",{children:"Remember me"})]}),s.jsxs("span",{className:"tiny muted",children:["Need an account? ",s.jsx($,{to:"/register",className:"link",children:"Register"})]})]}),s.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,children:l?s.jsxs(s.Fragment,{children:[s.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),s.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Signing in…"]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"})}),"Login"]})}),s.jsxs("div",{className:"or",children:[s.jsx("span",{className:"line"}),s.jsx("span",{className:"muted",children:"or continue with"}),s.jsx("span",{className:"line"})]}),s.jsxs("div",{className:"oauth",children:[s.jsxs("button",{type:"button",className:"btn btn-ghost oauth-btn",onClick:()=>alert("Coming soon"),children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:[s.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),s.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),s.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),s.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Google"]}),s.jsxs("button",{type:"button",className:"btn btn-ghost oauth-btn",onClick:()=>alert("Coming soon"),children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),"GitHub"]})]})]})]}),s.jsxs("aside",{className:"panel tips",children:[s.jsx("div",{className:"tips-icon",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})})}),s.jsx("h3",{children:"Tips"}),s.jsxs("ul",{className:"list",children:[s.jsxs("li",{children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Use the email registered during checkout."]}),s.jsxs("li",{children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Passwords are case-sensitive; check CAPS LOCK."]}),s.jsxs("li",{children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"After multiple failed attempts, wait a minute before retrying."]})]}),s.jsxs("div",{className:"support",children:[s.jsx("p",{className:"muted",children:"Still need help?"}),s.jsxs($,{to:"/contact",className:"btn btn-support",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Contact support"]})]})]})]})}),s.jsx("style",{children:`
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
      `})]})}function ow(){const{register:e}=Dt(),[t,n]=w.useState(""),[r,i]=w.useState(""),[a,o]=w.useState(""),[l,c]=w.useState(""),[d,u]=w.useState(!1),[p,h]=w.useState(!0),[m,f]=w.useState(!1),[x,y]=w.useState(!1),[g,v]=w.useState(null),[b,k]=w.useState(null),[j,N]=w.useState(!1),[S,_]=w.useState(!1),A=Ot(),R=w.useRef(null);w.useEffect(()=>{_(!0)},[]),w.useEffect(()=>{(g||b)&&R.current&&R.current.focus()},[g,b]);const I=w.useMemo(()=>{let F=0;return r.length>=8&&F++,/[A-Z]/.test(r)&&F++,/[a-z]/.test(r)&&F++,/\d/.test(r)&&F++,/[^A-Za-z0-9]/.test(r)&&F++,F},[r]),U=["Very weak","Weak","Fair","Good","Strong","Excellent"][I];async function B(F){if(F.preventDefault(),k(null),v(null),!l||!t||!r||!a){k("All fields are required.");return}if(r!==a){k("Passwords do not match.");return}if(!d){k("Please agree to the Terms and Privacy Policy.");return}try{N(!0),await e(t,r,l),v("Check the inbox to verify the account. Redirecting to Login…"),setTimeout(()=>A("/login"),1e3)}catch{k("Could not create the account. Try again later.")}finally{N(!1)}}return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"page-background",children:[s.jsx("div",{className:"gradient-orb orb-1"}),s.jsx("div",{className:"gradient-orb orb-2"}),s.jsx("div",{className:"gradient-orb orb-3"}),s.jsx("div",{className:"grid-overlay"}),s.jsx("div",{className:"particles",children:[...Array(20)].map((F,P)=>s.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`}},P))})]}),s.jsx("section",{className:`register-hero ${S?"animate-in":""}`,children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"hero-content",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"Join Us Today"]}),s.jsx("h1",{className:"headline",children:"Create an account"}),s.jsx("p",{className:"subhead",children:"Join to track orders, save preferences, and get faster checkout."}),s.jsxs("div",{className:"hero-decorations",children:[s.jsx("div",{className:"decoration-circle circle-1"}),s.jsx("div",{className:"decoration-circle circle-2"}),s.jsx("div",{className:"decoration-line line-1"}),s.jsx("div",{className:"decoration-line line-2"})]})]})})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:`container reg-wrap ${S?"animate-in":""}`,children:[s.jsxs("div",{className:"panel main-panel",children:[s.jsxs("div",{className:"panel-header",children:[s.jsx("h2",{className:"section-title",children:"Register"}),s.jsx("div",{className:"title-underline"})]}),s.jsxs("div",{ref:R,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[g&&s.jsxs("div",{className:"alert success",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),g]}),b&&s.jsxs("div",{className:"alert error",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),b]})]}),s.jsxs("form",{className:"form",onSubmit:B,noValidate:!0,children:[s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"fullName",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Full name"]}),s.jsx("input",{id:"fullName",type:"text",autoComplete:"name",placeholder:"e.g., Ishfaque Mif",value:l,onChange:F=>c(F.target.value),required:!0})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"email",children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),s.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),s.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:t,onChange:F=>n(F.target.value),required:!0})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"password",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Password"]}),s.jsxs("div",{className:"pw-wrap",children:[s.jsx("input",{id:"password",type:m?"text":"password",autoComplete:"new-password",placeholder:"At least 8 characters",value:r,onChange:F=>i(F.target.value),required:!0,"aria-describedby":"pw-help"}),s.jsx("button",{type:"button",className:"pw-toggle","aria-label":m?"Hide password":"Show password","aria-pressed":m,"aria-controls":"password",onClick:()=>f(F=>!F),children:m?s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),s.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),s.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),s.jsx("div",{id:"pw-help",className:"tiny muted",children:"Use 8+ chars with a mix of upper/lowercase, numbers, and a symbol."}),s.jsxs("div",{className:"meter","aria-hidden":"true",children:[s.jsx("span",{className:`m${I}`}),s.jsx("em",{className:"muted",children:U})]}),s.jsxs("ul",{className:"reqs",children:[s.jsxs("li",{className:r.length>=8?"ok":"",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"8+ characters"]}),s.jsxs("li",{className:/[A-Z]/.test(r)?"ok":"",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Uppercase letter"]}),s.jsxs("li",{className:/[a-z]/.test(r)?"ok":"",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Lowercase letter"]}),s.jsxs("li",{className:/\d/.test(r)?"ok":"",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Number"]}),s.jsxs("li",{className:/[^A-Za-z0-9]/.test(r)?"ok":"",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Symbol"]})]})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"confirm",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Confirm password"]}),s.jsxs("div",{className:"pw-wrap",children:[s.jsx("input",{id:"confirm",type:x?"text":"password",autoComplete:"new-password",placeholder:"Re-enter password",value:a,onChange:F=>o(F.target.value),required:!0}),s.jsx("button",{type:"button",className:"pw-toggle","aria-label":x?"Hide password":"Show password","aria-pressed":x,"aria-controls":"confirm",onClick:()=>y(F=>!F),children:x?s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),s.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),s.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),a&&a!==r&&s.jsxs("div",{className:"tiny error-text",children:[s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"})}),"Passwords do not match."]})]}),s.jsxs("label",{className:"check",children:[s.jsx("input",{type:"checkbox",checked:d,onChange:F=>u(F.target.checked),required:!0}),s.jsx("span",{className:"checkmark",children:s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),s.jsxs("span",{children:["I agree to the ",s.jsx($,{to:"/terms",className:"link",children:"Terms"})," and"," ",s.jsx($,{to:"/privacy",className:"link",children:"Privacy Policy"}),"."]})]}),s.jsxs("label",{className:"check",children:[s.jsx("input",{type:"checkbox",checked:p,onChange:F=>h(F.target.checked)}),s.jsx("span",{className:"checkmark",children:s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),s.jsx("span",{children:"Send occasional product updates and offers."})]}),s.jsx("button",{className:"btn btn-primary",type:"submit",disabled:j,children:j?s.jsxs(s.Fragment,{children:[s.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),s.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Creating…"]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"Create account"]})}),s.jsxs("div",{className:"row between",children:[s.jsx("span",{className:"tiny muted",children:"Already have an account?"}),s.jsx($,{to:"/login",className:"link",children:"Login"})]})]})]}),s.jsxs("aside",{className:"panel tips",children:[s.jsx("div",{className:"tips-icon",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),s.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})]})}),s.jsx("h3",{children:"Why create an account?"}),s.jsxs("ul",{className:"list",children:[s.jsxs("li",{children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Faster checkout and saved details."]}),s.jsxs("li",{children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Order history and tracking."]}),s.jsxs("li",{children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Early access to limited releases."]})]}),s.jsxs("div",{className:"support",children:[s.jsx("p",{className:"muted",children:"Need help?"}),s.jsxs($,{to:"/contact",className:"btn btn-support",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Contact support"]})]})]})]})}),s.jsx("style",{children:`
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
      `})]})}function lw(){const{items:e,update:t,remove:n,clear:r}=pi(),i=Ot(),[a,o]=w.useState(!1),l=w.useMemo(()=>e.reduce((p,h)=>p+h.price*h.qty,0),[e]),c=(p,h)=>{h<1||Number.isNaN(h)||t(p,h)},d=()=>o(!0),u=encodeURIComponent(`Hello, I have transferred LKR ${l.toFixed(2)} for my order. Here is my payment confirmation.`);return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"cart-hero",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"headline",children:"Your Cart"}),s.jsx("p",{className:"subhead",children:"Review items and complete checkout using bank transfer."})]})}),s.jsx("section",{className:"section",children:s.jsx("div",{className:"container",children:e.length===0?s.jsxs("div",{className:"empty",children:[s.jsx("div",{className:"empty-anim","aria-hidden":!0,children:s.jsxs("svg",{className:"cart-svg",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsxs("g",{className:"animate-cart",children:[s.jsx("rect",{x:"26",y:"36",width:"60",height:"34",rx:"6",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.08)"}),s.jsx("path",{d:"M20 36h10M86 36h14",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),s.jsx("path",{d:"M32 70l-4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),s.jsx("path",{d:"M80 70l4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),s.jsx("circle",{cx:"40",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"}),s.jsx("circle",{cx:"72",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"})]}),s.jsxs("g",{className:"float-bubbles",children:[s.jsx("circle",{cx:"54",cy:"26",r:"3",fill:"var(--brand)"}),s.jsx("circle",{cx:"68",cy:"18",r:"2",fill:"var(--brand)"}),s.jsx("circle",{cx:"44",cy:"16",r:"2.5",fill:"var(--brand)"})]})]})}),s.jsx("p",{children:"Your cart is empty"}),s.jsx("div",{className:"actions",children:s.jsx($,{to:"/shop",className:"btn btn-primary",children:"Continue Shopping"})})]}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"cart-wrap",children:[s.jsx("div",{className:"table-wrap",role:"region","aria-label":"Cart items",children:s.jsxs("table",{className:"cart-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Product"}),s.jsx("th",{children:"Qty"}),s.jsx("th",{children:"Price"}),s.jsx("th",{children:"Total"}),s.jsx("th",{children:"Action"})]})}),s.jsx("tbody",{children:e.map(p=>s.jsxs("tr",{children:[s.jsx("td",{className:"prod-cell",children:s.jsxs("div",{className:"prod",children:[p.image?s.jsx("img",{src:p.image,alt:p.name}):s.jsx("div",{className:"img-fallback","aria-hidden":!0}),s.jsxs("div",{className:"prod-meta",children:[s.jsx($,{to:`/product/${p.slug}`,className:"prod-name",children:p.name}),s.jsxs("div",{className:"sku",children:["ID: ",p.id]})]})]})}),s.jsx("td",{className:"qty-cell",children:s.jsxs("div",{className:"qty",children:[s.jsx("button",{className:"btn-qty","aria-label":"Decrease quantity",onClick:()=>c(p.id,p.qty-1),children:"−"}),s.jsx("input",{type:"number",min:1,inputMode:"numeric",value:p.qty,onChange:h=>c(p.id,Number(h.target.value)),"aria-label":`Quantity for ${p.name}`}),s.jsx("button",{className:"btn-qty","aria-label":"Increase quantity",onClick:()=>c(p.id,p.qty+1),children:"+"})]})}),s.jsxs("td",{children:["LKR ",Number(p.price).toFixed(2)]}),s.jsxs("td",{children:["LKR ",(p.price*p.qty).toFixed(2)]}),s.jsx("td",{children:s.jsx("button",{className:"btn btn-ghost",onClick:()=>n(p.id),children:"Remove"})})]},p.id))}),s.jsx("tfoot",{children:s.jsxs("tr",{children:[s.jsx("td",{colSpan:3,className:"right",children:"Subtotal"}),s.jsxs("td",{colSpan:2,className:"subtotal",children:["LKR ",l.toFixed(2)]})]})})]})}),s.jsxs("aside",{className:"summary",children:[s.jsx("h2",{className:"summary-title",children:"Order Summary"}),s.jsxs("div",{className:"summary-row",children:[s.jsx("span",{children:"Subtotal"}),s.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),s.jsxs("div",{className:"summary-row",children:[s.jsx("span",{children:"Shipping"}),s.jsx("span",{children:"Calculated at checkout"})]}),s.jsxs("div",{className:"summary-total",children:[s.jsx("span",{children:"Estimated Total"}),s.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),s.jsxs("div",{className:"summary-actions",children:[s.jsx("button",{className:"btn btn-primary",onClick:d,children:"Proceed with Bank Transfer"}),s.jsx("button",{className:"btn btn-ghost",onClick:r,children:"Clear Cart"}),s.jsx($,{className:"btn",to:"/shop",children:"Continue Shopping"})]}),a&&s.jsxs("div",{className:"transfer",children:[s.jsx("h3",{children:"Bank Transfer Instructions"}),s.jsx("p",{className:"muted",children:"Please transfer the estimated total amount to the bank account listed below. After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification."}),s.jsxs("div",{className:"bank-box",children:[s.jsxs("div",{className:"row",children:[s.jsx("span",{children:"Name"}),s.jsx("span",{children:"Ishfaque Mif"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{children:"Bank"}),s.jsx("span",{children:"BOC"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{children:"Branch"}),s.jsx("span",{children:"Puttalam"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{children:"Account No."}),s.jsx("span",{children:"89001476"})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{children:"Amount"}),s.jsxs("span",{children:["$",l.toFixed(2)]})]}),s.jsxs("div",{className:"row",children:[s.jsx("span",{children:"Reference"}),s.jsx("span",{children:"Order by your full name"})]})]}),s.jsxs("div",{className:"transfer-actions",children:[s.jsx("a",{className:"btn btn-primary",href:`https://wa.me/94768976222?text=${u}`,target:"_blank",rel:"noopener noreferrer",children:"Send Confirmation via WhatsApp"}),s.jsxs("button",{className:"btn-cta mega-cta",onClick:p=>{const h=p.currentTarget,m=h.getBoundingClientRect(),f=p.clientX-m.left,x=p.clientY-m.top,y=document.createElement("span");y.className="burst",y.style.left=`${f}px`,y.style.top=`${x}px`,h.appendChild(y),setTimeout(()=>y.remove(),800),h.classList.add("pressed"),setTimeout(()=>h.classList.remove("pressed"),150),i("/checkout")},onMouseMove:p=>{const h=p.currentTarget,m=h.getBoundingClientRect(),f=m.left+m.width/2,x=m.top+m.height/2,y=(p.clientX-f)/(m.width/2),g=(p.clientY-x)/(m.height/2),v=8;h.style.setProperty("--tx",`${y*6}px`),h.style.setProperty("--ty",`${g*6}px`),h.style.setProperty("--rx",`${-g*v}deg`),h.style.setProperty("--ry",`${y*v}deg`),h.style.setProperty("--mx",`${(y+1)/2*100}%`)},onMouseLeave:p=>{const h=p.currentTarget;h.style.removeProperty("--tx"),h.style.removeProperty("--ty"),h.style.removeProperty("--rx"),h.style.removeProperty("--ry"),h.style.removeProperty("--mx")},title:"Optionally upload the payment screenshot on the order page","aria-label":"Go to order page",children:[s.jsx("span",{className:"mega-cta__bg","aria-hidden":"true"}),s.jsx("span",{className:"mega-cta__border","aria-hidden":"true"}),s.jsx("span",{className:"mega-cta__glow","aria-hidden":"true"}),s.jsx("span",{className:"mega-cta__sheen","aria-hidden":"true"}),s.jsx("span",{className:"mega-cta__text",children:"Go to Order Page"}),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",style:{marginLeft:10},children:[s.jsx("path",{d:"M5 12h14"}),s.jsx("path",{d:"M12 5l7 7-7 7"})]})]})]}),s.jsx("p",{className:"note",children:"Optional: On the order/checkout page, include an upload option to attach the payment screenshot for records. Ensure the name and order reference match the WhatsApp message."})]})]})]})})})}),s.jsx("style",{children:`
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
      `})]})}const cw=["Commercial Bank of Ceylon","Bank of Ceylon (BOC)","Hatton National Bank (HNB)","Sampath Bank","Nations Trust Bank","DFCC Bank","Seylan Bank","Union Bank","Pan Asia Banking Corporation","Amana Bank","Cargills Bank","National Development Bank (NDB)","People's Bank"],qn={accountHolder:"Ishfaque Mif",bank:"Bank of Ceylon (BOC)",branch:"Puttalam",accountNumber:"89001476",whatsapp:"+94 76 897 6222"};function dw(){const{items:e,clear:t}=pi(),{user:n}=Dt(),[r,i]=w.useState({line1:"",city:"",postal_code:"",country:"LK"}),[a,o]=w.useState(null),[l,c]=w.useState(null),[d,u]=w.useState(!1),[p,h]=w.useState(null),[m,f]=w.useState(null),[x,y]=w.useState(""),[g,v]=w.useState(""),[b,k]=w.useState(""),[j,N]=w.useState(""),[S,_]=w.useState(null),[A,R]=w.useState(null),[I,U]=w.useState(!1),[B,F]=w.useState(""),[P,T]=w.useState("");w.useEffect(()=>{n!=null&&n.email&&!b&&k(n.email)},[n,b]);async function V(C){var X;const O=(X=C.target.files)==null?void 0:X[0];if(!O)return;if(!["application/pdf","image/jpeg","image/jpg","image/png"].includes(O.type)){h("Only PDF, JPG, and PNG files are allowed");return}if(O.size>5*1024*1024){h("File size must be less than 5MB");return}_(O),h(null),U(!0);try{const ve=new FormData;ve.append("file",O);const ce=await Y.post("/checkout/upload-receipt",ve,{headers:{"Content-Type":"multipart/form-data"}});R(ce.data.url)}catch{h("Failed to upload receipt. Please try again."),_(null)}finally{U(!1)}}async function z(C){var O,K;C.preventDefault(),h(null),u(!0);try{if(!x||!g||!b||!j||!A){h("Please fill all required fields and upload receipt"),u(!1);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b)){h("Please enter a valid email address"),u(!1);return}const ve={shipping_address:r,payment_method:"bank_transfer",customer_name:x,customer_phone:g,customer_email:b,selected_bank:j,transfer_receipt_url:A,transaction_reference:B,additional_notes:P,items:e.map(_e=>({product_id:_e.id,title:_e.name,quantity:_e.qty,price:_e.price})),total_amount:e.reduce((_e,Ce)=>_e+Ce.price*Ce.qty,0)},ce=await Y.post("/checkout",ve);o(ce.data.order_id),c(ce.data.bank_transfer),t()}catch(X){h(((K=(O=X.response)==null?void 0:O.data)==null?void 0:K.detail)||"Failed to create order. Please try again.")}finally{u(!1)}}return s.jsx("div",{className:"checkout-wrap",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"kicker",children:"Checkout"}),s.jsx("h1",{className:"headline",children:"Complete your order"}),s.jsx("p",{className:"muted",children:"Secure bank transfer • Upload receipt • Fast verification"})]}),e.length>0&&s.jsxs("div",{className:"pill",children:[s.jsx("span",{children:e.reduce((C,O)=>C+O.qty,0)})," items"]})]}),p&&s.jsx("div",{className:"alert error",children:p}),a?s.jsxs("div",{style:{maxWidth:"600px",margin:"40px auto",padding:"0",position:"relative"},children:[s.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",padding:"48px 32px",boxShadow:"0 20px 60px rgba(102, 126, 234, 0.4)",textAlign:"center",position:"relative",overflow:"hidden"},children:[s.jsx("div",{style:{position:"absolute",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",top:"-100px",right:"-100px"}}),s.jsx("div",{style:{position:"absolute",width:"150px",height:"150px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",bottom:"-75px",left:"-75px"}}),s.jsx("div",{style:{width:"100px",height:"100px",margin:"0 auto 24px",background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(56, 239, 125, 0.4)",position:"relative",animation:"bounce 1s ease infinite"},children:s.jsx("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("polyline",{points:"20 6 9 17 4 12"})})}),s.jsx("h1",{style:{color:"white",fontSize:"32px",fontWeight:"bold",marginBottom:"16px",textShadow:"0 2px 10px rgba(0,0,0,0.2)",position:"relative"},children:"Order Placed Successfully!"}),s.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(10px)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"20px",marginBottom:"24px",position:"relative"},children:[s.jsx("div",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"14px",marginBottom:"8px",fontWeight:"500"},children:"Order ID"}),s.jsxs("div",{style:{color:"white",fontSize:"24px",fontWeight:"bold",letterSpacing:"1px",fontFamily:"monospace"},children:["#",a]})]}),s.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"12px",padding:"20px",marginBottom:"24px",textAlign:"left",position:"relative"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[s.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"rgba(255, 183, 77, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px"},children:s.jsx("span",{style:{fontSize:"24px"},children:"⏳"})}),s.jsxs("div",{children:[s.jsx("div",{style:{color:"white",fontSize:"16px",fontWeight:"bold"},children:"Pending Verification"}),s.jsx("div",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"13px"},children:"Your order is being reviewed"})]})]}),s.jsx("div",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"14px",lineHeight:"1.6"},children:"We will review your payment receipt and update your order status shortly. You will be notified once your payment is verified."})]}),s.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative"},children:[s.jsxs("button",{onClick:()=>window.location.href="/orders",style:{padding:"14px 32px",background:"white",color:"#667eea",border:"none",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.2)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:C=>{C.currentTarget.style.transform="translateY(-2px)",C.currentTarget.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.3)"},onMouseOut:C=>{C.currentTarget.style.transform="translateY(0)",C.currentTarget.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"},children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),s.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"View Order History"]}),s.jsxs("button",{onClick:()=>window.location.href="/shop",style:{padding:"14px 32px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",backdropFilter:"blur(10px)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:C=>{C.currentTarget.style.background="rgba(255, 255, 255, 0.3)",C.currentTarget.style.transform="translateY(-2px)"},onMouseOut:C=>{C.currentTarget.style.background="rgba(255, 255, 255, 0.2)",C.currentTarget.style.transform="translateY(0)"},children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"9",cy:"21",r:"1"}),s.jsx("circle",{cx:"20",cy:"21",r:"1"}),s.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Continue Shopping"]})]})]}),s.jsxs("div",{style:{marginTop:"24px",background:"white",borderRadius:"12px",padding:"24px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[s.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"16px",color:"#333"},children:"What's Next?"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[s.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e3f2fd",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx("span",{style:{fontSize:"18px"},children:"📧"})}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Email Confirmation"}),s.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Check your email for order confirmation and receipt"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[s.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#fff3e0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx("span",{style:{fontSize:"18px"},children:"🔍"})}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Payment Review"}),s.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Our team will verify your payment receipt within 24 hours"})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[s.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx("span",{style:{fontSize:"18px"},children:"📦"})}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Track Your Order"}),s.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Monitor your order status in real-time from Order History"})]})]})]})]}),s.jsx("style",{children:`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `})]}):s.jsxs("div",{className:"grid",children:[s.jsxs("form",{onSubmit:z,className:"panel form",children:[s.jsx("h3",{className:"section-title",children:"Customer information"}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Full name",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsx("input",{value:x,onChange:C=>y(C.target.value),required:!0,placeholder:"e.g. John Perera"})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Phone number",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsx("input",{type:"tel",value:g,onChange:C=>v(C.target.value),required:!0,placeholder:"07x xxx xxxx"})]})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Email",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsx("input",{type:"email",value:b,onChange:C=>k(C.target.value),required:!0,disabled:!!(n!=null&&n.email),placeholder:"you@example.com"}),(n==null?void 0:n.email)&&s.jsx("p",{className:"tiny muted",children:"Using logged-in account email"})]}),s.jsx("h3",{className:"section-title",children:"Delivery address"}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Address line 1",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsx("input",{value:r.line1,onChange:C=>i({...r,line1:C.target.value}),required:!0})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["City",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsx("input",{value:r.city,onChange:C=>i({...r,city:C.target.value}),required:!0})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Postal code",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsx("input",{value:r.postal_code,onChange:C=>i({...r,postal_code:C.target.value}),required:!0})]})]}),s.jsx("h3",{className:"section-title",children:"Bank transfer"}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Select your bank",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsxs("select",{value:j,onChange:C=>N(C.target.value),required:!0,children:[s.jsx("option",{value:"",children:"-- Select your bank --"}),cw.map(C=>s.jsx("option",{value:C,children:C},C))]})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{children:["Upload transfer receipt",s.jsx("span",{"aria-hidden":!0,children:" *"})]}),s.jsxs("div",{className:"drop",children:[s.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:V,disabled:I}),s.jsxs("div",{className:"note",children:[s.jsx("strong",{children:I?"Uploading…":S?`${S.name}`:"Choose PDF/JPG/PNG (max 5MB)"}),S&&!I&&s.jsx("span",{className:"ok",children:"✓ Ready"})]})]}),s.jsx("p",{className:"tiny muted",children:"We’ll verify the receipt within 24 hours."})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Transaction / reference (optional)"}),s.jsx("input",{value:B,onChange:C=>F(C.target.value),placeholder:"e.g. BOCPAY12345"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{children:"Additional notes (optional)"}),s.jsx("input",{value:P,onChange:C=>T(C.target.value),placeholder:"Delivery instructions, etc."})]})]}),s.jsx("button",{className:"btn btn-primary",type:"submit",disabled:e.length===0||d||!A,children:d?"Processing…":"Complete order"})]}),s.jsxs("aside",{className:"stack",children:[s.jsxs("div",{className:"panel sticky",children:[s.jsx("h3",{className:"section-title",children:"Company bank account"}),s.jsxs("div",{className:"kv",children:[s.jsxs("div",{children:[s.jsx("span",{className:"muted",children:"Account holder"}),s.jsx("div",{className:"val",children:qn.accountHolder})]}),s.jsxs("div",{children:[s.jsx("span",{className:"muted",children:"Bank"}),s.jsx("div",{className:"val",children:qn.bank})]}),s.jsxs("div",{children:[s.jsx("span",{className:"muted",children:"Branch"}),s.jsx("div",{className:"val",children:qn.branch})]}),s.jsxs("div",{children:[s.jsx("span",{className:"muted",children:"Account number"}),s.jsxs("div",{className:"val row-inline",children:[s.jsx("code",{className:"code",children:qn.accountNumber}),s.jsx("button",{type:"button",className:"btn btn-ghost sm",onClick:()=>{navigator.clipboard.writeText(qn.accountNumber),f("acc"),setTimeout(()=>f(null),1500)},children:"Copy"})]})]}),s.jsxs("div",{children:[s.jsx("span",{className:"muted",children:"WhatsApp"}),s.jsxs("div",{className:"val row-inline",children:[s.jsx("code",{className:"code",children:qn.whatsapp}),s.jsx("a",{className:"btn btn-ghost sm",href:`https://wa.me/${qn.whatsapp.replace(/[^\d]/g,"")}`,target:"_blank",children:"Chat"})]})]})]}),s.jsx("p",{className:"tiny muted",children:"Transfer the total to this account, then upload the receipt on the left."}),m==="acc"&&s.jsx("div",{className:"toast",children:"Account number copied"})]}),s.jsxs("div",{className:"panel",children:[s.jsx("h3",{className:"section-title",children:"Order summary"}),s.jsx("div",{className:"items",children:e.length===0?s.jsx("p",{className:"muted",children:"Your cart is empty."}):e.map(C=>s.jsxs("div",{className:"item",children:[s.jsxs("div",{className:"name",children:[C.name," ",s.jsxs("span",{className:"muted",children:["×",C.qty]})]}),s.jsxs("div",{className:"price",children:["Rs. ",(C.price*C.qty).toFixed(2)]})]},C.id))}),s.jsxs("div",{className:"total",children:[s.jsx("div",{children:"Total"}),s.jsxs("div",{className:"price",children:["Rs. ",e.reduce((C,O)=>C+O.price*O.qty,0).toFixed(2)]})]})]})]})]}),s.jsx("style",{children:`
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
        `})]})})}function uw(){const e=Ot(),[t,n]=w.useState([]),[r,i]=w.useState(!0),[a,o]=w.useState(null),[l,c]=w.useState("all"),[d,u]=w.useState(!1),[p,h]=w.useState(null),m=w.useCallback(async()=>{var j,N,S;i(!0),o(null);try{const _=await Y.get("/orders/history",{params:{status_filter:l}});n(_.data.orders||[])}catch(_){((j=_==null?void 0:_.response)==null?void 0:j.status)===401?(u(!0),o("Not authenticated")):o(((S=(N=_.response)==null?void 0:N.data)==null?void 0:S.detail)||"Failed to load orders")}finally{i(!1)}},[l]);w.useEffect(()=>{m()},[m]);function f(j){if(!j)return"N/A";try{return new Date(j).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"N/A"}}function x(j){return j?`LKR ${j.toFixed(2)}`:"LKR 0.00"}function y(j){switch(j){case"placed":return"#d97706";case"verified":return"#0284c7";case"processing":return"#ea580c";case"shipped":return"#2563eb";case"delivered":return"#16a34a";case"rejected":return"#dc2626";case"cancelled":return"#9ca3af";default:return"#6D74FF"}}function g(j){switch(j){case"placed":return 20;case"verified":return 40;case"processing":return 60;case"shipped":return 80;case"delivered":return 100;default:return 0}}function v(j){switch(j){case"all":return"All";case"pending":return"In Progress";case"completed":return"Completed";case"cancelled":return"Cancelled";default:return j.charAt(0).toUpperCase()+j.slice(1)}}async function b(j){var N,S;try{await Y.post(`/orders/${j}/reorder`),alert("Items added to cart!"),e("/cart")}catch(_){alert(((S=(N=_.response)==null?void 0:N.data)==null?void 0:S.detail)||"Failed to reorder")}}async function k(j){h(j);const N=localStorage.getItem("access_token")||"";if(!N){alert("Not authenticated");return}const S=`/api/v1/orders/${j}/invoice?token=${encodeURIComponent(N)}`;try{const _=document.createElement("iframe");_.style.display="none",_.src=S,document.body.appendChild(_);const A=()=>{h(null);try{_.removeEventListener("load",A)}catch{}};try{_.addEventListener("load",A)}catch{}setTimeout(()=>{try{document.body.removeChild(_)}catch{}h(null)},1e4)}catch(_){console.error("Invoice download error:",_);try{window.location.href=S}catch{}h(null)}}return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[s.jsxs("div",{children:[s.jsx("h1",{className:"section-title",children:"📦 Order History"}),s.jsx("p",{className:"lead",children:"Track your orders and manage your purchase history."})]}),s.jsxs("button",{onClick:()=>m(),disabled:r,style:{padding:"12px 24px",background:r?"#ccc":"#6D74FF",color:"white",border:"none",borderRadius:"8px",cursor:r?"not-allowed":"pointer",fontSize:"16px",fontWeight:"bold",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(109, 116, 255, 0.3)"},onMouseOver:j=>{r||(j.currentTarget.style.background="#5a61d6",j.currentTarget.style.transform="translateY(-2px)",j.currentTarget.style.boxShadow="0 4px 12px rgba(109, 116, 255, 0.4)")},onMouseOut:j=>{r||(j.currentTarget.style.background="#6D74FF",j.currentTarget.style.transform="translateY(0)",j.currentTarget.style.boxShadow="0 2px 8px rgba(109, 116, 255, 0.3)")},children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{animation:r?"spin 1s linear infinite":"none"},children:[s.jsx("polyline",{points:"23 4 23 10 17 10"}),s.jsx("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),r?"Refreshing...":"Refresh"]})]}),s.jsx("div",{className:"order-filters",children:["all","pending","completed","cancelled"].map(j=>s.jsx("button",{className:`btn ${l===j?"btn-primary":"btn-ghost"}`,onClick:()=>c(j),children:v(j)},j))}),s.jsx("style",{children:`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}),a&&s.jsx("div",{className:"alert error",children:a}),d&&s.jsx("div",{className:"alert warning",children:s.jsx("button",{onClick:()=>e("/login?next=/orders"),className:"btn btn-primary",children:"Go to Login"})}),r&&s.jsx("div",{className:"loading",children:"Loading orders..."}),!r&&t.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{children:"📭"}),s.jsx("h3",{children:"No Orders Found"}),s.jsx("p",{children:l==="all"?"You haven’t placed any orders yet.":`No ${v(l)} orders found.`}),s.jsx("button",{onClick:()=>e("/shop"),className:"btn btn-primary",children:"Start Shopping"})]}),!r&&t.length>0&&s.jsx("div",{className:"order-list",children:t.map(j=>{var N;return s.jsxs("div",{className:"order-card",children:[s.jsxs("div",{className:"order-header",children:[s.jsxs("div",{children:[s.jsxs("h3",{children:["Order #",j.id.slice(-8)]}),s.jsx("p",{children:f(j.created_at)})]}),s.jsx("div",{className:"order-total",children:x(j.total_amount)})]}),s.jsxs("div",{className:"order-progress",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{style:{width:`${g(j.tracking_status)}%`,backgroundColor:y(j.tracking_status)}})}),s.jsx("p",{className:"status",style:{color:y(j.tracking_status)},children:(N=j.tracking_status)==null?void 0:N.toUpperCase()})]}),s.jsxs("div",{className:"actions",children:[s.jsx("button",{onClick:()=>e(`/orders/${j.id}`),className:"btn btn-primary",children:"View"}),s.jsx("button",{onClick:()=>b(j.id),className:"btn btn-ghost",children:"🔁 Reorder"}),j.payment_status==="verified"&&s.jsx("button",{onClick:()=>k(j.id),className:"btn btn-ghost invoice-btn",disabled:p===j.id,"aria-busy":p===j.id,children:p===j.id?s.jsxs(s.Fragment,{children:[s.jsxs("svg",{className:"invoice-spinner",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.25"}),s.jsx("path",{d:"M22 12a10 10 0 0 1-10 10",strokeLinecap:"round"})]}),"Downloading..."]}):s.jsx(s.Fragment,{children:"📄 Invoice"})}),j.tracking_status==="delivered"&&s.jsx("button",{onClick:()=>e(`/orders/${j.id}/review`),className:"btn btn-ghost",children:"⭐ Review"})]})]},j.id)})})]})}),s.jsx("style",{children:`
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
      `})]})}function up(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"}function na(e){return`LKR ${e.toFixed(2)}`}const hp={placed:{icon:"📦",color:"#FFD700"},verified:{icon:"✅",color:"#0284c7"},processing:{icon:"⚙️",color:"#ea580c"},shipped:{icon:"🚚",color:"#2563eb"},delivered:{icon:"🎉",color:"#11998e"}},pp=["placed","verified","processing","shipped","delivered"];function hw(){const{orderId:e}=cg(),t=Ot(),[n,r]=w.useState(null),[i,a]=w.useState(!0),[o,l]=w.useState(null),[c,d]=w.useState(!1),u=w.useCallback(async()=>{var f,x;a(!0),l(null);try{const y=await Y.get(`/orders/${e}`);r(y.data)}catch(y){l(((x=(f=y.response)==null?void 0:f.data)==null?void 0:x.detail)||"Failed to load order details")}finally{a(!1)}},[e]);w.useEffect(()=>{u()},[u]);const p=w.useCallback(async f=>{var y,g,v;const x=(y=f.target.files)==null?void 0:y[0];if(x){d(!0);try{const b=new FormData;b.append("file",x),await Y.put(`/orders/${e}/receipt`,b,{headers:{"Content-Type":"multipart/form-data"}}),alert("Receipt uploaded successfully! Awaiting admin verification."),u()}catch(b){alert(((v=(g=b.response)==null?void 0:g.data)==null?void 0:v.detail)||"Failed to upload receipt")}finally{d(!1)}}},[e,u]);w.useEffect(()=>{let f=null,x=!1;async function y(){try{const g=await Y.get(`/orders/${e}`);if(x)return;const v=g.data;(!n||v.tracking_status!==n.tracking_status||v.payment_status!==n.payment_status)&&r(v),(v.tracking_status==="delivered"||v.tracking_status==="cancelled")&&f&&(clearInterval(f),f=null)}catch{}}return n&&n.tracking_status!=="delivered"&&n.tracking_status!=="cancelled"&&(y(),f=setInterval(y,5e3)),()=>{x=!0,f&&clearInterval(f)}},[n==null?void 0:n.tracking_status,n==null?void 0:n.payment_status,e]);const h=w.useMemo(()=>n?pp.indexOf(n.tracking_status):-1,[n==null?void 0:n.tracking_status]),m=w.useMemo(()=>n?hp[n.tracking_status]||{icon:"📝",color:"#6D74FF"}:null,[n==null?void 0:n.tracking_status]);return i?s.jsx("section",{className:"section",children:s.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:s.jsx("div",{style:{fontSize:"18px",color:"var(--muted)"},children:"Loading order details..."})})}):o||!n?s.jsx("section",{className:"section",children:s.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:s.jsxs("div",{className:"empty-state",style:{padding:"48px",background:"var(--card)",borderRadius:"14px",boxShadow:"var(--shadow)"},children:[s.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"❌"}),s.jsx("h2",{children:o||"Order not found"}),s.jsx("button",{onClick:()=>t("/orders"),className:"btn",style:{marginTop:"16px"},children:"Back to Orders"})]})})}):s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"container",children:[s.jsxs("button",{onClick:()=>t("/orders"),className:"btn",style:{marginBottom:"24px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Orders"]}),s.jsxs("div",{className:"order-detail-header",children:[s.jsxs("div",{className:"order-detail-header-left",children:[s.jsxs("h1",{className:"section-title",children:["Order #",n.id.slice(-8)]}),s.jsxs("p",{style:{color:"var(--muted)",margin:"4px 0 0"},children:["📅 ",up(n.created_at)]})]}),s.jsxs("div",{className:"order-detail-header-right",children:[s.jsx("div",{style:{fontSize:"12px",color:"var(--muted)",marginBottom:"4px"},children:"Total Amount"}),s.jsx("div",{className:"price",style:{fontSize:"32px",margin:"0 0 12px"},children:na(n.total_amount)}),s.jsxs("div",{className:"status-badge",style:{backgroundColor:(m==null?void 0:m.color)||"#6D74FF",color:"white",padding:"8px 16px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",display:"inline-flex",alignItems:"center",gap:"6px"},children:[m==null?void 0:m.icon," ",n.tracking_status.charAt(0).toUpperCase()+n.tracking_status.slice(1)]})]})]}),n.admin_feedback&&s.jsxs("div",{className:"alert",style:{background:n.payment_status==="rejected"?"#fee2e2":"#fef3c7",border:`1px solid ${n.payment_status==="rejected"?"#dc2626":"#f59e0b"}`,borderRadius:"12px",padding:"20px",marginBottom:"24px"},children:[s.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",color:n.payment_status==="rejected"?"#991b1b":"#92400e",marginBottom:"12px"},children:"⚠️ Admin Feedback"}),s.jsx("div",{style:{color:n.payment_status==="rejected"?"#991b1b":"#92400e",fontSize:"14px",lineHeight:"1.6",marginBottom:n.resubmit_required?"16px":"0"},children:n.admin_feedback}),n.resubmit_required&&s.jsxs("div",{children:[s.jsxs("label",{className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",cursor:c?"not-allowed":"pointer",opacity:c?.7:1},children:["📤 ",c?"Uploading...":"Re-upload Receipt",s.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:p,disabled:c,style:{display:"none"}})]}),s.jsx("p",{style:{fontSize:"13px",color:"var(--muted)",marginTop:"8px"},children:"Please upload a valid payment receipt (PDF, JPG, PNG)"})]})]}),n.items&&n.items.length>0&&s.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[s.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"🛒 Order Items"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:n.items.map((f,x)=>s.jsxs("div",{className:"order-item",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontWeight:"600",marginBottom:"4px"},children:f.title||f.name||"Product"}),s.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)"},children:["Quantity: ",f.quantity," × ",na(f.price)]})]}),s.jsx("div",{className:"price",style:{fontSize:"18px"},children:na(f.price*f.quantity)})]},x))}),s.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"2px solid var(--bg)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Total Amount"}),s.jsx("span",{className:"price",style:{fontSize:"24px"},children:na(n.total_amount)})]})]}),s.jsxs("div",{className:"card",style:{padding:"28px",marginBottom:"24px"},children:[s.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"24px"},children:"📊 Order Timeline"}),s.jsx("div",{style:{position:"relative",paddingLeft:"48px"},children:pp.map((f,x)=>{const y=h>=x,g=n.tracking_status===f,v=hp[f];return s.jsxs("div",{style:{position:"relative",paddingBottom:x<4?"32px":"0"},children:[x<4&&s.jsx("div",{style:{position:"absolute",left:"-28px",top:"32px",width:"3px",height:"32px",background:y?"var(--primary)":"#e5e7eb"}}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[s.jsx("div",{style:{position:"absolute",left:"-36px",width:"18px",height:"18px",borderRadius:"50%",background:y?"var(--primary)":"#e5e7eb",border:g?"4px solid rgba(109, 40, 217, 0.3)":"none",boxShadow:g?"0 0 0 4px rgba(109, 40, 217, 0.1)":"none",display:"flex",alignItems:"center",justifyContent:"center"},children:g&&s.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"white"}})}),s.jsxs("div",{style:{flex:1,padding:"16px",background:g?"rgba(109, 40, 217, 0.05)":"transparent",borderRadius:"12px",border:g?"2px solid rgba(109, 40, 217, 0.2)":"none"},children:[s.jsxs("div",{style:{fontWeight:g?"bold":"600",fontSize:g?"18px":"16px",color:y?"var(--text)":"var(--muted)",textTransform:"capitalize",display:"flex",alignItems:"center",gap:"8px"},children:[s.jsx("span",{children:v.icon}),f,g&&s.jsx("span",{style:{marginLeft:"8px",padding:"4px 12px",background:"var(--primary)",color:"white",fontSize:"12px",borderRadius:"12px",fontWeight:"bold"},children:"CURRENT"})]}),g&&n.estimated_delivery_date&&f==="shipped"&&s.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)",marginTop:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),s.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Est. delivery: ",up(n.estimated_delivery_date)]})]})]})]},f)})})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",marginBottom:"24px"},children:[s.jsxs("div",{className:"card",style:{padding:"24px"},children:[s.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"👤 Customer Information"}),s.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[s.jsxs("div",{style:{marginBottom:"8px"},children:[s.jsx("strong",{style:{color:"var(--muted)"},children:"Name:"})," ",s.jsx("span",{style:{fontWeight:"600"},children:n.customer_name})]}),s.jsxs("div",{style:{marginBottom:"8px"},children:[s.jsx("strong",{style:{color:"var(--muted)"},children:"Phone:"})," ",s.jsx("span",{style:{fontWeight:"600"},children:n.customer_phone})]}),n.customer_email&&s.jsxs("div",{children:[s.jsx("strong",{style:{color:"var(--muted)"},children:"Email:"})," ",s.jsx("span",{style:{fontWeight:"600",wordBreak:"break-all"},children:n.customer_email})]})]})]}),s.jsxs("div",{className:"card",style:{padding:"24px"},children:[s.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"📍 Delivery Address"}),s.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[s.jsx("div",{style:{marginBottom:"8px",fontWeight:"600"},children:n.shipping_address.line1}),s.jsxs("div",{style:{marginBottom:"8px",fontWeight:"600"},children:[n.shipping_address.city,", ",n.shipping_address.postal_code]}),s.jsx("div",{style:{fontWeight:"600"},children:n.shipping_address.country})]})]})]}),s.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[s.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"💳 Payment Information"}),s.jsxs("div",{style:{fontSize:"15px",lineHeight:"2",marginBottom:"16px"},children:[s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsx("strong",{style:{color:"var(--muted)"},children:"Bank:"})," ",s.jsx("span",{style:{fontWeight:"600"},children:n.selected_bank||"N/A"})]}),n.transaction_reference&&s.jsxs("div",{children:[s.jsx("strong",{style:{color:"var(--muted)"},children:"Reference:"})," ",s.jsx("span",{style:{fontWeight:"600",fontFamily:"monospace",fontSize:"14px",background:"var(--bg)",padding:"4px 8px",borderRadius:"6px"},children:n.transaction_reference})]})]}),n.transfer_receipt_url&&s.jsx("div",{style:{marginBottom:"16px"},children:s.jsx("a",{href:n.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",textDecoration:"none"},children:"📄 View Receipt"})}),n.additional_notes&&s.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[s.jsx("strong",{style:{color:"var(--muted)",fontSize:"14px"},children:"Additional Notes:"}),s.jsx("div",{style:{marginTop:"8px",fontSize:"15px",lineHeight:"1.6"},children:n.additional_notes})]})]})]}),s.jsx("style",{children:`
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
      `})]})}function pw(){const{user:e,logout:t}=Dt(),{count:n}=pi(),[r,i]=w.useState(!1),[a,o]=w.useState(!1),[l,c]=w.useState(!1),[d,u]=w.useState(!1),[p,h]=w.useState(""),[m,f]=w.useState([]),[x,y]=w.useState(!1),[g,v]=w.useState(-1),b=_t(),k=Ot(),j=w.useRef(null),N=w.useRef(null),S=w.useRef(null),_=w.useRef(null);w.useEffect(()=>{o(!1),c(!1),setTimeout(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},100)},[b.pathname]),w.useEffect(()=>{const B=F=>{var P;if(F.key==="Escape")o(!1),c(!1),y(!1),v(-1),(P=_.current)==null||P.blur();else if(x&&m.length>0){if(F.key==="ArrowDown")F.preventDefault(),v(T=>T<m.length-1?T+1:0);else if(F.key==="ArrowUp")F.preventDefault(),v(T=>T>0?T-1:m.length-1);else if(F.key==="Enter"&&g>=0){F.preventDefault();const T=m[g];k(`/search?q=${encodeURIComponent(T.name)}`),h(""),y(!1),v(-1),o(!1)}}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[x,m,g,k]),w.useEffect(()=>{if(n<=0)return;i(!0);const B=setTimeout(()=>i(!1),300);return()=>clearTimeout(B)},[n]),w.useEffect(()=>{const B=F=>{N.current&&(N.current.contains(F.target)||c(!1),S.current&&(S.current.contains(F.target)||(y(!1),v(-1))))};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[]);const A=({isActive:B})=>B?"nav-link active":"nav-link",R=({isActive:B})=>B?"auth-btn active":"auth-btn",I=b.pathname.startsWith("/admin"),U=B=>{B.preventDefault();const F=g>=0?m[g].name:p.trim();F&&(k(`/search?q=${encodeURIComponent(F)}`),h(""),y(!1),v(-1),o(!1))};return w.useEffect(()=>{if(!p.trim()){f([]),y(!1),v(-1);return}const B=setTimeout(async()=>{var F;try{const T=((F=(await Y.get("/api/v1/products",{params:{q:p.trim(),size:10}})).data)==null?void 0:F.items)||[],V=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],z=p.toLowerCase(),C=V.filter(K=>K.name.toLowerCase().includes(z)||K.content.toLowerCase().includes(z)),O=[...T.map(K=>({id:`product-${K.id}`,name:K.name,type:"product",url:`/product/${K.slug}`,content:K.category||"Product"})),...C].slice(0,8);f(O),y(!0),v(-1)}catch{const T=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],V=p.toLowerCase(),z=T.filter(C=>C.name.toLowerCase().includes(V)||C.content.toLowerCase().includes(V));f(z.slice(0,8)),y(z.length>0),v(-1)}},300);return()=>clearTimeout(B)},[p]),s.jsxs("header",{className:"header",ref:j,children:[s.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),s.jsxs("div",{className:"container header-inner",children:[s.jsxs("div",{className:"left",children:[s.jsxs("button",{className:"hamburger","aria-label":"Toggle navigation","aria-controls":"main-menu","aria-expanded":a,onClick:()=>o(B=>!B),children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]}),s.jsx($,{to:"/",className:"brand","aria-label":"Home",children:s.jsx("div",{className:"logo-container",children:s.jsxs("div",{className:`logo-wrapper ${d?"loaded":""}`,children:[s.jsx("img",{src:"/images/title.png",alt:"Own Setup logo",onLoad:()=>u(!0)}),s.jsx("div",{className:"logo-glow","aria-hidden":"true"}),s.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),s.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),s.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})})]}),s.jsxs("nav",{id:"main-menu",className:`nav ${a?"open":""}`,"aria-label":"Main navigation",children:[!I&&s.jsxs(s.Fragment,{children:[s.jsx(gn,{to:"/",end:!0,className:A,children:"Home"}),s.jsx(gn,{to:"/shop",className:A,children:"Shop"}),s.jsxs("div",{className:"search-container",ref:S,children:[s.jsxs("form",{onSubmit:U,className:"search-form",children:[s.jsx("input",{ref:_,type:"search",placeholder:"Search...",value:p,onChange:B=>h(B.target.value),onFocus:()=>{m.length>0&&y(!0)},className:"search-input","aria-label":"Search",autoComplete:"off"}),p&&s.jsx("button",{type:"button",className:"search-clear",onClick:()=>{var B;h(""),y(!1),v(-1),(B=_.current)==null||B.focus()},"aria-label":"Clear search",children:"×"}),s.jsx("button",{type:"submit",className:"search-btn","aria-label":"Submit search",children:s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("path",{d:"m21 21-4.35-4.35"})]})})]}),x&&m.length>0&&s.jsx("div",{className:"search-suggestions",children:m.map((B,F)=>s.jsxs("button",{type:"button",className:`suggestion-item ${g===F?"selected":""}`,onClick:()=>{k(B.url),h(""),y(!1),v(-1),o(!1)},onMouseEnter:()=>v(F),children:[s.jsxs("div",{className:"suggestion-icon",children:[B.type==="product"&&s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"}),s.jsx("line",{x1:"7",y1:"7",x2:"7",y2:"7"})]}),B.type==="faq"&&s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),s.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),B.type==="page"&&s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),s.jsx("polyline",{points:"14,2 14,8 20,8"})]})]}),s.jsxs("div",{className:"suggestion-content",children:[s.jsx("span",{className:"suggestion-title",children:B.name}),s.jsx("span",{className:"suggestion-type",children:B.type})]})]},B.id))})]}),s.jsx(gn,{to:"/about",className:A,children:"About"}),e&&s.jsxs(s.Fragment,{children:[s.jsx(gn,{to:"/contact",className:A,children:"Contact"}),s.jsxs(gn,{to:"/cart",className:({isActive:B})=>B?"nav-link cart-link active":"nav-link cart-link",children:["Cart",s.jsx("span",{className:`badge ${r?"bump":""}`,"aria-label":`${n} items in cart`,children:n})]})]})]}),s.jsx("div",{className:"divider","aria-hidden":!0}),!e&&s.jsxs("div",{className:"auth",children:[s.jsx(gn,{to:"/login",end:!0,className:R,children:"Login"}),s.jsx(gn,{to:"/register",className:R,children:"Register"})]})]}),e&&s.jsxs("div",{className:"user-wrap",ref:N,children:[e.is_staff&&!I&&s.jsx(gn,{to:"/admin",className:A,children:"Admin"}),s.jsxs("button",{className:"user-btn","aria-haspopup":"menu","aria-expanded":l,onClick:()=>c(B=>!B),title:e.email,children:[s.jsx("div",{className:"avatar","aria-hidden":!0,children:e!=null&&e.avatar_url?s.jsx("img",{src:e.avatar_url,alt:""}):null}),s.jsx("span",{className:"email",children:e.email})]}),l&&s.jsxs("div",{className:"user-menu",role:"menu",children:[s.jsx($,{to:"/account",className:"menu-item",role:"menuitem",children:"Account"}),s.jsx($,{to:"/orders",className:"menu-item",role:"menuitem",children:"Orders"}),s.jsx("button",{className:"menu-item",role:"menuitem",onClick:t,children:"Logout"})]})]})]}),a&&s.jsx("div",{className:"overlay",onClick:()=>o(!1),"aria-hidden":!0}),s.jsx("style",{children:`
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
      `})]})}function fw(){const e=new Date().getFullYear();return s.jsxs("footer",{className:"footer",role:"contentinfo",children:[s.jsxs("div",{className:"container footer-inner",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"col brand-col",children:[s.jsxs($,{to:"/",className:"brand","aria-label":"Home",children:[s.jsx("img",{src:"/images/title.png",alt:"Own Setup logo"}),s.jsx("span",{className:"sr-only",children:"Own Setup"})]}),s.jsx("p",{className:"tagline",children:"Everyday essentials with thoughtful design and lasting quality."})]}),s.jsxs("nav",{className:"col","aria-label":"Footer navigation",children:[s.jsx("h3",{className:"col-title",children:"Navigate"}),s.jsxs("ul",{className:"list",children:[s.jsx("li",{children:s.jsx($,{to:"/",children:"Home"})}),s.jsx("li",{children:s.jsx($,{to:"/shop",children:"Shop"})}),s.jsx("li",{children:s.jsx($,{to:"/about",children:"About"})}),s.jsx("li",{children:s.jsx($,{to:"/contact",children:"Contact"})}),s.jsx("li",{children:s.jsx($,{to:"/cart",children:"Cart"})})]})]}),s.jsxs("nav",{className:"col","aria-label":"Help and policies",children:[s.jsx("h3",{className:"col-title",children:"Help"}),s.jsxs("ul",{className:"list",children:[s.jsx("li",{children:s.jsx($,{to:"/support",children:"Support"})}),s.jsx("li",{children:s.jsx($,{to:"/faq",children:"FAQ"})}),s.jsx("li",{children:s.jsx($,{to:"/shipping-returns",children:"Shipping & Returns"})}),s.jsx("li",{children:s.jsx($,{to:"/privacy",children:"Privacy Policy"})}),s.jsx("li",{children:s.jsx($,{to:"/terms",children:"Terms of Service"})})]})]}),s.jsxs("div",{className:"col",children:[s.jsx("h3",{className:"col-title",children:"Contact"}),s.jsxs("ul",{className:"list",children:[s.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),s.jsx("li",{children:"Phone: +94 76 89 76 222"}),s.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00"}),s.jsx("li",{children:"Address: 252/1A Mannar Road, Puttalam"})]}),s.jsxs("div",{className:"social",children:[s.jsx("a",{href:"https://www.instagram.com/","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:"IG"}),s.jsx("a",{href:"https://facebook.com/","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:"FB"}),s.jsx("a",{href:"https://x.com/","aria-label":"X (Twitter)",target:"_blank",rel:"noopener noreferrer",children:"X"})]})]}),s.jsxs("div",{className:"col newsletter",children:[s.jsx("h3",{className:"col-title",children:"Stay in the loop"}),s.jsx("p",{className:"muted",children:"Subscribe for product drops, care tips, and seasonal edits."}),s.jsxs("form",{className:"signup",onSubmit:t=>{t.preventDefault(),alert("Thanks for subscribing!")},children:[s.jsx("label",{htmlFor:"footer-email",className:"sr-only",children:"Email address"}),s.jsx("input",{id:"footer-email",type:"email",required:!0,placeholder:"email@example.com",autoComplete:"email"}),s.jsx("button",{className:"btn btn-primary",type:"submit",children:"Subscribe"})]}),s.jsx("p",{className:"tiny muted",children:"By subscribing, consent to receive marketing emails; unsubscribe anytime."})]})]}),s.jsxs("div",{className:"footer-bottom",children:[s.jsxs("div",{className:"left",children:[s.jsxs("span",{children:["© ",e," Own Setup 💼"]}),s.jsx("span",{className:"dot",children:"•"}),s.jsx($,{to:"/privacy",children:"Privacy"}),s.jsx("span",{className:"dot",children:"•"}),s.jsx($,{to:"/terms",children:"Terms"}),s.jsx("span",{className:"dot",children:"•"}),s.jsx($,{to:"/support",children:"Support"})]}),s.jsxs("div",{className:"right",children:[s.jsx($,{to:"/sitemap",children:"Sitemap"}),s.jsx("span",{className:"dot",children:"•"}),s.jsx("button",{className:"btn btn-ghost",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:"Back to top ↑"})]})]})]}),s.jsx("style",{children:`
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
      `})]})}function mw(){return s.jsxs(s.Fragment,{children:[s.jsx(pw,{}),s.jsx(pg,{}),s.jsx(fw,{})]})}function gw(){const[e,t]=w.useState([]),[n,r]=w.useState(1),[i]=w.useState(10),[a,o]=w.useState(0),[l,c]=w.useState(!1),[d,u]=w.useState(null),p=w.useRef(n);w.useEffect(()=>{p.current=n},[n]);async function h(b){var j;c(!0),u(null);const k=new AbortController;try{const S=(await Y.get("/admin/orders",{params:{page:b,size:i},signal:k.signal})).data;t(Array.isArray(S.items)?S.items:[]),o(Number.isFinite(S.total)?S.total:0),r(Number.isFinite(S.page)?S.page:b)}catch(N){const S=N;if(((j=S==null?void 0:S.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{c(!1)}return()=>k.abort()}w.useEffect(()=>{let b=!1;const k=new AbortController;return(async()=>{var j;try{const N=await Y.get("/admin/orders",{params:{page:1,size:i},signal:k.signal});if(b)return;t(Array.isArray(N.data.items)?N.data.items:[]),o(Number.isFinite(N.data.total)?N.data.total:0),r(Number.isFinite(N.data.page)?N.data.page:1),u(null)}catch(N){if(b)return;const S=N;if(((j=S==null?void 0:S.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{b||c(!1)}})(),()=>{b=!0,k.abort()}},[]),w.useEffect(()=>{const b=window.setInterval(()=>{const k=p.current;h(k)},5e3);return()=>window.clearInterval(b)},[]),w.useEffect(()=>{n<=0||h(n)},[n]);const m=w.useMemo(()=>Math.max(1,Math.ceil((a||0)/i)),[a,i]);function f(b){return`LKR ${(Number.isFinite(b)?b:0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}async function x(b,k){var j;try{await Y.put(`/admin/orders/${b}/status`,{new_status:k,admin_feedback:null,resubmit_required:!1,estimated_delivery_date:null}),await h(p.current)}catch(N){const S=N;if(((j=S==null?void 0:S.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}console.error("Failed to update status",N),alert("Failed to update status. Please try again.")}}const y=n>1,g=n<m;function v(b){return{pending_verification:{bg:"#fff4e5",color:"#d97706",icon:"⏳",label:"Pending Verification"},payment_verified:{bg:"#dbeafe",color:"#2563eb",icon:"✓",label:"Payment Verified"},processing:{bg:"#fef3c7",color:"#f59e0b",icon:"⚙️",label:"Processing"},shipped:{bg:"#e0e7ff",color:"#6366f1",icon:"🚚",label:"Shipped"},delivered:{bg:"#d1fae5",color:"#10b981",icon:"✓",label:"Delivered"},cancelled:{bg:"#fee2e2",color:"#ef4444",icon:"✕",label:"Cancelled"}}[b]||{bg:"#f3f4f6",color:"#6b7280",icon:"?",label:b}}return s.jsxs("div",{className:"orders-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{className:"page-header-content",children:[s.jsxs("h1",{className:"page-title",children:[s.jsx("div",{className:"title-icon-wrapper",children:s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),s.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"})]})}),"Order Management"]}),s.jsx("p",{className:"page-subtitle",children:"Track and manage customer orders in real-time"})]}),s.jsxs("div",{className:"header-badge",children:[s.jsx("div",{className:"live-indicator"}),s.jsx("span",{children:"Auto-refresh: 5s"})]})]}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card-modern total",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Total Orders"}),s.jsx("div",{className:"stat-value-modern",children:a})]})]}),s.jsxs("div",{className:"stat-card-modern pending",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Pending"}),s.jsx("div",{className:"stat-value-modern",children:e.filter(b=>b.status==="pending_verification").length})]})]}),s.jsxs("div",{className:"stat-card-modern verified",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Verified"}),s.jsx("div",{className:"stat-value-modern",children:e.filter(b=>b.status==="payment_verified").length})]})]}),s.jsxs("div",{className:"stat-card-modern processing",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Processing"}),s.jsx("div",{className:"stat-value-modern",children:e.filter(b=>b.status==="processing").length})]})]}),s.jsxs("div",{className:"stat-card-modern delivered",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),s.jsx("path",{d:"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"})]})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Delivered"}),s.jsx("div",{className:"stat-value-modern",children:e.filter(b=>b.status==="delivered").length})]})]})]}),d&&s.jsxs("div",{className:"alert-error",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),s.jsx("span",{children:d})]}),s.jsxs("div",{className:"card-modern",children:[s.jsxs("div",{className:"card-header-orders",children:[s.jsxs("div",{children:[s.jsxs("h2",{className:"card-title-orders",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Orders"]}),s.jsx("p",{className:"card-subtitle-orders",children:"Manage and track order status"})]}),s.jsxs("button",{className:"btn-refresh",onClick:()=>h(1),disabled:l,type:"button",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",className:l?"spinner":"",children:s.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"})}),l?"Refreshing...":"Refresh"]})]}),l&&e.length===0&&s.jsxs("div",{className:"loading-state",children:[s.jsxs("div",{className:"loading-spinner-modern",children:[s.jsx("div",{className:"spinner-ring-modern"}),s.jsx("div",{className:"spinner-ring-modern"}),s.jsx("div",{className:"spinner-ring-modern"})]}),s.jsx("p",{children:"Loading orders..."})]}),!l&&e.length===0&&s.jsxs("div",{className:"empty-state-large",children:[s.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),s.jsx("h3",{children:"No Orders Yet"}),s.jsx("p",{children:"Orders will appear here when customers make purchases"})]}),e.length>0&&s.jsx("div",{className:"orders-list",children:e.map(b=>{const k=v(b.status);return s.jsxs("div",{className:"order-card",children:[s.jsxs("div",{className:"order-header",children:[s.jsxs("div",{className:"order-id-section",children:[s.jsx("div",{className:"order-id-badge",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"})})}),s.jsxs("div",{children:[s.jsxs("h3",{className:"order-number",children:["Order #",b.id.substring(0,8)]}),s.jsx("p",{className:"order-date",children:b.created_at?new Date(b.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"})]})]}),s.jsx("div",{className:"order-amount",children:f(b.total_amount)})]}),s.jsxs("div",{className:"order-content",children:[s.jsxs("div",{className:"order-section",children:[s.jsxs("h4",{className:"section-title-order",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Customer Information"]}),s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Name:"}),s.jsx("span",{className:"info-value",children:b.customer_name||"N/A"})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Phone:"}),s.jsx("span",{className:"info-value",children:b.customer_phone||"N/A"})]}),b.customer_email&&s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Email:"}),s.jsx("span",{className:"info-value",children:b.customer_email})]})]}),s.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"})}),"Delivery Address"]}),s.jsx("div",{className:"address-box",children:b.shipping_address?s.jsxs(s.Fragment,{children:[s.jsx("div",{children:b.shipping_address.line1}),s.jsxs("div",{children:[b.shipping_address.city,", ",b.shipping_address.postal_code]}),s.jsx("div",{children:b.shipping_address.country})]}):s.jsx("div",{className:"text-muted",children:"No address provided"})})]}),s.jsxs("div",{className:"order-section",children:[s.jsxs("h4",{className:"section-title-order",children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),s.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"})]}),"Payment Information"]}),s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Bank:"}),s.jsx("span",{className:"info-value",children:b.selected_bank||"N/A"})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Status:"}),s.jsx("span",{className:"info-value",children:b.payment_status||"N/A"})]}),b.transaction_reference&&s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Reference:"}),s.jsx("span",{className:"info-value",children:b.transaction_reference})]})]}),b.transfer_receipt_url&&s.jsxs(s.Fragment,{children:[s.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"})}),"Transfer Receipt"]}),s.jsxs("a",{href:b.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"receipt-link",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"})}),"View Receipt"]})]}),b.additional_notes&&s.jsxs(s.Fragment,{children:[s.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"})}),"Notes"]}),s.jsx("div",{className:"notes-box",children:b.additional_notes})]})]})]}),s.jsxs("div",{className:"order-footer",children:[s.jsxs("div",{className:"status-badge-order",style:{backgroundColor:k.bg,color:k.color},children:[s.jsx("span",{className:"status-icon",children:k.icon}),k.label]}),s.jsxs("select",{onChange:j=>x(b.id,j.target.value),value:b.status,className:"status-select",children:[s.jsx("option",{value:"pending_verification",children:"⏳ Pending Verification"}),s.jsx("option",{value:"payment_verified",children:"✓ Payment Verified"}),s.jsx("option",{value:"processing",children:"⚙️ Processing"}),s.jsx("option",{value:"shipped",children:"🚚 Shipped"}),s.jsx("option",{value:"delivered",children:"✓ Delivered"}),s.jsx("option",{value:"cancelled",children:"✕ Cancelled"})]})]})]},b.id)})}),e.length>0&&s.jsxs("div",{className:"pagination-footer",children:[s.jsxs("div",{className:"pagination-info",children:["Showing ",s.jsxs("strong",{children:["page ",n]})," of ",s.jsx("strong",{children:m})," — ",s.jsx("strong",{children:a})," total orders"]}),s.jsxs("div",{className:"pagination-controls",children:[s.jsxs("button",{className:"btn-page",onClick:()=>r(b=>Math.max(1,b-1)),disabled:!y,type:"button",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"})}),"Previous"]}),s.jsx("div",{className:"page-indicator",children:s.jsx("span",{children:n})}),s.jsxs("button",{className:"btn-page",onClick:()=>r(b=>Math.min(m,b+1)),disabled:!g,type:"button",children:["Next",s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})]})]})]})]}),s.jsx("style",{children:`
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
      `})]})}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function As(e){return e+.5|0}const _n=(e,t,n)=>Math.max(Math.min(e,n),t);function Ti(e){return _n(As(e*2.55),0,255)}function Fn(e){return _n(As(e*255),0,255)}function rn(e){return _n(As(e/2.55)/100,0,1)}function fp(e){return _n(As(e*100),0,100)}const gt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Kc=[..."0123456789ABCDEF"],xw=e=>Kc[e&15],vw=e=>Kc[(e&240)>>4]+Kc[e&15],ra=e=>(e&240)>>4===(e&15),bw=e=>ra(e.r)&&ra(e.g)&&ra(e.b)&&ra(e.a);function yw(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&gt[e[1]]*17,g:255&gt[e[2]]*17,b:255&gt[e[3]]*17,a:t===5?gt[e[4]]*17:255}:(t===7||t===9)&&(n={r:gt[e[1]]<<4|gt[e[2]],g:gt[e[3]]<<4|gt[e[4]],b:gt[e[5]]<<4|gt[e[6]],a:t===9?gt[e[7]]<<4|gt[e[8]]:255})),n}const ww=(e,t)=>e<255?t(e):"";function jw(e){var t=bw(e)?xw:vw;return e?"#"+t(e.r)+t(e.g)+t(e.b)+ww(e.a,t):void 0}const kw=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ug(e,t,n){const r=t*Math.min(n,1-n),i=(a,o=(a+e/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function Sw(e,t,n){const r=(i,a=(i+e/60)%6)=>n-n*t*Math.max(Math.min(a,4-a,1),0);return[r(5),r(3),r(1)]}function Nw(e,t,n){const r=Ug(e,1,.5);let i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function _w(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function hu(e){const n=e.r/255,r=e.g/255,i=e.b/255,a=Math.max(n,r,i),o=Math.min(n,r,i),l=(a+o)/2;let c,d,u;return a!==o&&(u=a-o,d=l>.5?u/(2-a-o):u/(a+o),c=_w(n,r,i,u,a),c=c*60+.5),[c|0,d||0,l]}function pu(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(Fn)}function fu(e,t,n){return pu(Ug,e,t,n)}function Cw(e,t,n){return pu(Nw,e,t,n)}function zw(e,t,n){return pu(Sw,e,t,n)}function Wg(e){return(e%360+360)%360}function Mw(e){const t=kw.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Ti(+t[5]):Fn(+t[5]));const i=Wg(+t[2]),a=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?r=Cw(i,a,o):t[1]==="hsv"?r=zw(i,a,o):r=fu(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function Ew(e,t){var n=hu(e);n[0]=Wg(n[0]+t),n=fu(n),e.r=n[0],e.g=n[1],e.b=n[2]}function Pw(e){if(!e)return;const t=hu(e),n=t[0],r=fp(t[1]),i=fp(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${rn(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const mp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},gp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Rw(){const e={},t=Object.keys(gp),n=Object.keys(mp);let r,i,a,o,l;for(r=0;r<t.length;r++){for(o=l=t[r],i=0;i<n.length;i++)a=n[i],l=l.replace(a,mp[a]);a=parseInt(gp[o],16),e[l]=[a>>16&255,a>>8&255,a&255]}return e}let ia;function Aw(e){ia||(ia=Rw(),ia.transparent=[0,0,0,0]);const t=ia[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Tw=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Lw(e){const t=Tw.exec(e);let n=255,r,i,a;if(t){if(t[7]!==r){const o=+t[7];n=t[8]?Ti(o):_n(o*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?Ti(r):_n(r,0,255)),i=255&(t[4]?Ti(i):_n(i,0,255)),a=255&(t[6]?Ti(a):_n(a,0,255)),{r,g:i,b:a,a:n}}}function Ow(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${rn(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const El=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Sr=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function Iw(e,t,n){const r=Sr(rn(e.r)),i=Sr(rn(e.g)),a=Sr(rn(e.b));return{r:Fn(El(r+n*(Sr(rn(t.r))-r))),g:Fn(El(i+n*(Sr(rn(t.g))-i))),b:Fn(El(a+n*(Sr(rn(t.b))-a))),a:e.a+n*(t.a-e.a)}}function sa(e,t,n){if(e){let r=hu(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=fu(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function $g(e,t){return e&&Object.assign(t||{},e)}function xp(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=Fn(e[3]))):(t=$g(e,{r:0,g:0,b:0,a:1}),t.a=Fn(t.a)),t}function Dw(e){return e.charAt(0)==="r"?Lw(e):Mw(e)}class xs{constructor(t){if(t instanceof xs)return t;const n=typeof t;let r;n==="object"?r=xp(t):n==="string"&&(r=yw(t)||Aw(t)||Dw(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=$g(this._rgb);return t&&(t.a=rn(t.a)),t}set rgb(t){this._rgb=xp(t)}rgbString(){return this._valid?Ow(this._rgb):void 0}hexString(){return this._valid?jw(this._rgb):void 0}hslString(){return this._valid?Pw(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,i=t.rgb;let a;const o=n===a?.5:n,l=2*o-1,c=r.a-i.a,d=((l*c===-1?l:(l+c)/(1+l*c))+1)/2;a=1-d,r.r=255&d*r.r+a*i.r+.5,r.g=255&d*r.g+a*i.g+.5,r.b=255&d*r.b+a*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=Iw(this._rgb,t._rgb,n)),this}clone(){return new xs(this.rgb)}alpha(t){return this._rgb.a=Fn(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=As(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return sa(this._rgb,2,t),this}darken(t){return sa(this._rgb,2,-t),this}saturate(t){return sa(this._rgb,1,t),this}desaturate(t){return sa(this._rgb,1,-t),this}rotate(t){return Ew(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Zt(){}const Fw=(()=>{let e=0;return()=>e++})();function se(e){return e==null}function Re(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ne(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function St(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Ht(e,t){return St(e)?e:t}function Q(e,t){return typeof e>"u"?t:e}const Bw=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function me(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function ae(e,t,n,r){let i,a,o;if(Re(e))for(a=e.length,i=0;i<a;i++)t.call(n,e[i],i);else if(ne(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function go(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function xo(e){if(Re(e))return e.map(xo);if(ne(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let i=0;for(;i<r;++i)t[n[i]]=xo(e[n[i]]);return t}return e}function Vg(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Hw(e,t,n,r){if(!Vg(e))return;const i=t[e],a=n[e];ne(i)&&ne(a)?vs(i,a,r):t[e]=xo(a)}function vs(e,t,n){const r=Re(t)?t:[t],i=r.length;if(!ne(e))return e;n=n||{};const a=n.merger||Hw;let o;for(let l=0;l<i;++l){if(o=r[l],!ne(o))continue;const c=Object.keys(o);for(let d=0,u=c.length;d<u;++d)a(c[d],e,o,n)}return e}function Ki(e,t){return vs(e,t,{merger:Uw})}function Uw(e,t,n){if(!Vg(e))return;const r=t[e],i=n[e];ne(r)&&ne(i)?Ki(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=xo(i))}const vp={"":e=>e,x:e=>e.x,y:e=>e.y};function Ww(e){const t=e.split("."),n=[];let r="";for(const i of t)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function $w(e){const t=Ww(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function ni(e,t){return(vp[t]||(vp[t]=$w(t)))(e)}function mu(e){return e.charAt(0).toUpperCase()+e.slice(1)}const bs=e=>typeof e<"u",Un=e=>typeof e=="function",bp=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function Vw(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const ue=Math.PI,Be=2*ue,qw=Be+ue,vo=Number.POSITIVE_INFINITY,Yw=ue/180,De=ue/2,Yn=ue/4,yp=ue*2/3,qg=Math.log10,Xt=Math.sign;function Xi(e,t,n){return Math.abs(e-t)<n}function wp(e){const t=Math.round(e);e=Xi(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(qg(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function Kw(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((i,a)=>i-a).pop(),t}function Xw(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function ys(e){return!Xw(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Gw(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function Qw(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function sr(e){return e*(ue/180)}function Zw(e){return e*(180/ue)}function jp(e){if(!St(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Yg(e,t){const n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r);let a=Math.atan2(r,n);return a<-.5*ue&&(a+=Be),{angle:a,distance:i}}function Xc(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Jw(e,t){return(e-t+qw)%Be-ue}function Et(e){return(e%Be+Be)%Be}function gu(e,t,n,r){const i=Et(e),a=Et(t),o=Et(n),l=Et(a-i),c=Et(o-i),d=Et(i-a),u=Et(i-o);return i===a||i===o||r&&a===o||l>c&&d<u}function Ye(e,t,n){return Math.max(t,Math.min(n,e))}function e4(e){return Ye(e,-32768,32767)}function Cn(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function xu(e,t,n){n=n||(o=>e[o]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}const ar=(e,t,n,r)=>xu(e,n,r?i=>{const a=e[i][t];return a<n||a===n&&e[i+1][t]===n}:i=>e[i][t]<n),t4=(e,t,n)=>xu(e,n,r=>e[r][t]>=n);function n4(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}const Kg=["push","pop","shift","splice","unshift"];function r4(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Kg.forEach(n=>{const r="_onData"+mu(n),i=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...a){const o=i.apply(this,a);return e._chartjs.listeners.forEach(l=>{typeof l[r]=="function"&&l[r](...a)}),o}})})}function kp(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(Kg.forEach(a=>{delete e[a]}),delete e._chartjs)}function Xg(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Gg=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function Qg(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Gg.call(window,()=>{r=!1,e.apply(t,n)}))}}function i4(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const vu=e=>e==="start"?"left":e==="end"?"right":"center",$e=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,s4=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function a4(e,t,n){const r=t.length;let i=0,a=r;if(e._sorted){const{iScale:o,vScale:l,_parsed:c}=e,d=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:p,max:h,minDefined:m,maxDefined:f}=o.getUserBounds();if(m){if(i=Math.min(ar(c,u,p).lo,n?r:ar(t,u,o.getPixelForValue(p)).lo),d){const x=c.slice(0,i+1).reverse().findIndex(y=>!se(y[l.axis]));i-=Math.max(0,x)}i=Ye(i,0,r-1)}if(f){let x=Math.max(ar(c,o.axis,h,!0).hi+1,n?0:ar(t,u,o.getPixelForValue(h),!0).hi+1);if(d){const y=c.slice(x-1).findIndex(g=>!se(g[l.axis]));x+=Math.max(0,y)}a=Ye(x,i,r)-i}else a=r-i}return{start:i,count:a}}function o4(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;const a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}const aa=e=>e===0||e===1,Sp=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Be/n)),Np=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Be/n)+1,Gi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*De)+1,easeOutSine:e=>Math.sin(e*De),easeInOutSine:e=>-.5*(Math.cos(ue*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>aa(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>aa(e)?e:Sp(e,.075,.3),easeOutElastic:e=>aa(e)?e:Np(e,.075,.3),easeInOutElastic(e){return aa(e)?e:e<.5?.5*Sp(e*2,.1125,.45):.5+.5*Np(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Gi.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Gi.easeInBounce(e*2)*.5:Gi.easeOutBounce(e*2-1)*.5+.5};function bu(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function _p(e){return bu(e)?e:new xs(e)}function Pl(e){return bu(e)?e:new xs(e).saturate(.5).darken(.1).hexString()}const l4=["x","y","borderWidth","radius","tension"],c4=["color","borderColor","backgroundColor"];function d4(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:c4},numbers:{type:"number",properties:l4}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function u4(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Cp=new Map;function h4(e,t){t=t||{};const n=e+JSON.stringify(t);let r=Cp.get(n);return r||(r=new Intl.NumberFormat(e,t),Cp.set(n,r)),r}function Zg(e,t,n){return h4(t,n).format(e)}const p4={values(e){return Re(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let i,a=e;if(n.length>1){const d=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(d<1e-4||d>1e15)&&(i="scientific"),a=f4(e,n)}const o=qg(Math.abs(a)),l=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(c,this.options.ticks.format),Zg(e,r,c)}};function f4(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Jg={formatters:p4};function m4(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Jg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const xr=Object.create(null),Gc=Object.create(null);function Qi(e,t){if(!t)return e;const n=t.split(".");for(let r=0,i=n.length;r<i;++r){const a=n[r];e=e[a]||(e[a]=Object.create(null))}return e}function Rl(e,t,n){return typeof t=="string"?vs(Qi(e,t),n):vs(Qi(e,""),t)}class g4{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Pl(i.backgroundColor),this.hoverBorderColor=(r,i)=>Pl(i.borderColor),this.hoverColor=(r,i)=>Pl(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Rl(this,t,n)}get(t){return Qi(this,t)}describe(t,n){return Rl(Gc,t,n)}override(t,n){return Rl(xr,t,n)}route(t,n,r,i){const a=Qi(this,t),o=Qi(this,r),l="_"+n;Object.defineProperties(a,{[l]:{value:a[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[l],d=o[i];return ne(c)?Object.assign({},d,c):Q(c,d)},set(c){this[l]=c}}})}apply(t){t.forEach(n=>n(this))}}var Me=new g4({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[d4,u4,m4]);function x4(e){return!e||se(e.size)||se(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function zp(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function Kn(e,t,n){const r=e.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((t-i)*r)/r+i}function Mp(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Qc(e,t,n,r){e1(e,t,n,r,null)}function e1(e,t,n,r,i){let a,o,l,c,d,u,p,h;const m=t.pointStyle,f=t.rotation,x=t.radius;let y=(f||0)*Yw;if(m&&typeof m=="object"&&(a=m.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(y),e.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),e.restore();return}if(!(isNaN(x)||x<=0)){switch(e.beginPath(),m){default:i?e.ellipse(n,r,i/2,x,0,0,Be):e.arc(n,r,x,0,Be),e.closePath();break;case"triangle":u=i?i/2:x,e.moveTo(n+Math.sin(y)*u,r-Math.cos(y)*x),y+=yp,e.lineTo(n+Math.sin(y)*u,r-Math.cos(y)*x),y+=yp,e.lineTo(n+Math.sin(y)*u,r-Math.cos(y)*x),e.closePath();break;case"rectRounded":d=x*.516,c=x-d,o=Math.cos(y+Yn)*c,p=Math.cos(y+Yn)*(i?i/2-d:c),l=Math.sin(y+Yn)*c,h=Math.sin(y+Yn)*(i?i/2-d:c),e.arc(n-p,r-l,d,y-ue,y-De),e.arc(n+h,r-o,d,y-De,y),e.arc(n+p,r+l,d,y,y+De),e.arc(n-h,r+o,d,y+De,y+ue),e.closePath();break;case"rect":if(!f){c=Math.SQRT1_2*x,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}y+=Yn;case"rectRot":p=Math.cos(y)*(i?i/2:x),o=Math.cos(y)*x,l=Math.sin(y)*x,h=Math.sin(y)*(i?i/2:x),e.moveTo(n-p,r-l),e.lineTo(n+h,r-o),e.lineTo(n+p,r+l),e.lineTo(n-h,r+o),e.closePath();break;case"crossRot":y+=Yn;case"cross":p=Math.cos(y)*(i?i/2:x),o=Math.cos(y)*x,l=Math.sin(y)*x,h=Math.sin(y)*(i?i/2:x),e.moveTo(n-p,r-l),e.lineTo(n+p,r+l),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o);break;case"star":p=Math.cos(y)*(i?i/2:x),o=Math.cos(y)*x,l=Math.sin(y)*x,h=Math.sin(y)*(i?i/2:x),e.moveTo(n-p,r-l),e.lineTo(n+p,r+l),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o),y+=Yn,p=Math.cos(y)*(i?i/2:x),o=Math.cos(y)*x,l=Math.sin(y)*x,h=Math.sin(y)*(i?i/2:x),e.moveTo(n-p,r-l),e.lineTo(n+p,r+l),e.moveTo(n+h,r-o),e.lineTo(n-h,r+o);break;case"line":o=i?i/2:Math.cos(y)*x,l=Math.sin(y)*x,e.moveTo(n-o,r-l),e.lineTo(n+o,r+l);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(y)*(i?i/2:x),r+Math.sin(y)*x);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function ws(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function yu(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function wu(e){e.restore()}function v4(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i==="middle"){const a=(t.x+n.x)/2;e.lineTo(a,t.y),e.lineTo(a,n.y)}else i==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function b4(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function y4(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),se(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function w4(e,t,n,r,i){if(i.strikethrough||i.underline){const a=e.measureText(r),o=t-a.actualBoundingBoxLeft,l=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,d=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+d)/2:d;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(l,u),e.stroke()}}function j4(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function js(e,t,n,r,i,a={}){const o=Re(t)?t:[t],l=a.strokeWidth>0&&a.strokeColor!=="";let c,d;for(e.save(),e.font=i.string,y4(e,a),c=0;c<o.length;++c)d=o[c],a.backdrop&&j4(e,a.backdrop),l&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),se(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(d,n,r,a.maxWidth)),e.fillText(d,n,r,a.maxWidth),w4(e,n,r,d,a),r+=Number(i.lineHeight);e.restore()}function bo(e,t){const{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*ue,ue,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,ue,De,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,De,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-De,!0),e.lineTo(n+o.topLeft,r)}const k4=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,S4=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function N4(e,t){const n=(""+e).match(k4);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const _4=e=>+e||0;function ju(e,t){const n={},r=ne(t),i=r?Object.keys(t):t,a=ne(e)?r?o=>Q(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of i)n[o]=_4(a(o));return n}function t1(e){return ju(e,{top:"y",right:"x",bottom:"y",left:"x"})}function $r(e){return ju(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Nt(e){const t=t1(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ke(e,t){e=e||{},t=t||Me.font;let n=Q(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=Q(e.style,t.style);r&&!(""+r).match(S4)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:Q(e.family,t.family),lineHeight:N4(Q(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:Q(e.weight,t.weight),string:""};return i.string=x4(i),i}function oa(e,t,n,r){let i,a,o;for(i=0,a=e.length;i<a;++i)if(o=e[i],o!==void 0&&o!==void 0)return o}function C4(e,t,n){const{min:r,max:i}=e,a=Bw(t,(i-r)/2),o=(l,c)=>n&&l===0?0:l+c;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function yr(e,t){return Object.assign(Object.create(e),t)}function ku(e,t=[""],n,r,i=()=>e[0]){const a=n||e;typeof r>"u"&&(r=s1("_fallback",e));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:l=>ku([l,...e],t,a,r)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete l._keys,delete e[0][c],!0},get(l,c){return r1(l,c,()=>L4(c,t,e,l))},getOwnPropertyDescriptor(l,c){return Reflect.getOwnPropertyDescriptor(l._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(l,c){return Pp(l).includes(c)},ownKeys(l){return Pp(l)},set(l,c,d){const u=l._storage||(l._storage=i());return l[c]=u[c]=d,delete l._keys,!0}})}function ri(e,t,n,r){const i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:n1(e,r),setContext:a=>ri(e,a,n,r),override:a=>ri(e.override(a),t,n,r)};return new Proxy(i,{deleteProperty(a,o){return delete a[o],delete e[o],!0},get(a,o,l){return r1(a,o,()=>M4(a,o,l))},getOwnPropertyDescriptor(a,o){return a._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(a,o,l){return e[o]=l,delete a[o],!0}})}function n1(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Un(n)?n:()=>n,isIndexable:Un(r)?r:()=>r}}const z4=(e,t)=>e?e+mu(t):t,Su=(e,t)=>ne(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function r1(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function M4(e,t,n){const{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e;let l=r[t];return Un(l)&&o.isScriptable(t)&&(l=E4(t,l,e,n)),Re(l)&&l.length&&(l=P4(t,l,e,o.isIndexable)),Su(t,l)&&(l=ri(l,i,a&&a[t],o)),l}function E4(e,t,n,r){const{_proxy:i,_context:a,_subProxy:o,_stack:l}=n;if(l.has(e))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+e);l.add(e);let c=t(a,o||r);return l.delete(e),Su(e,c)&&(c=Nu(i._scopes,i,e,c)),c}function P4(e,t,n,r){const{_proxy:i,_context:a,_subProxy:o,_descriptors:l}=n;if(typeof a.index<"u"&&r(e))return t[a.index%t.length];if(ne(t[0])){const c=t,d=i._scopes.filter(u=>u!==c);t=[];for(const u of c){const p=Nu(d,i,e,u);t.push(ri(p,a,o&&o[e],l))}}return t}function i1(e,t,n){return Un(e)?e(t,n):e}const R4=(e,t)=>e===!0?t:typeof e=="string"?ni(t,e):void 0;function A4(e,t,n,r,i){for(const a of t){const o=R4(n,a);if(o){e.add(o);const l=i1(o._fallback,n,i);if(typeof l<"u"&&l!==n&&l!==r)return l}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function Nu(e,t,n,r){const i=t._rootScopes,a=i1(t._fallback,n,r),o=[...e,...i],l=new Set;l.add(r);let c=Ep(l,o,n,a||n,r);return c===null||typeof a<"u"&&a!==n&&(c=Ep(l,o,a,c,r),c===null)?!1:ku(Array.from(l),[""],i,a,()=>T4(t,n,r))}function Ep(e,t,n,r,i){for(;n;)n=A4(e,t,n,r,i);return n}function T4(e,t,n){const r=e._getTarget();t in r||(r[t]={});const i=r[t];return Re(i)&&ne(n)?n:i||{}}function L4(e,t,n,r){let i;for(const a of t)if(i=s1(z4(a,e),n),typeof i<"u")return Su(e,i)?Nu(n,r,e,i):i}function s1(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function Pp(e){let t=e._keys;return t||(t=e._keys=O4(e._scopes)),t}function O4(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))t.add(r);return Array.from(t)}const I4=Number.EPSILON||1e-14,ii=(e,t)=>t<e.length&&!e[t].skip&&e[t],a1=e=>e==="x"?"y":"x";function D4(e,t,n,r){const i=e.skip?t:e,a=t,o=n.skip?t:n,l=Xc(a,i),c=Xc(o,a);let d=l/(l+c),u=c/(l+c);d=isNaN(d)?0:d,u=isNaN(u)?0:u;const p=r*d,h=r*u;return{previous:{x:a.x-p*(o.x-i.x),y:a.y-p*(o.y-i.y)},next:{x:a.x+h*(o.x-i.x),y:a.y+h*(o.y-i.y)}}}function F4(e,t,n){const r=e.length;let i,a,o,l,c,d=ii(e,0);for(let u=0;u<r-1;++u)if(c=d,d=ii(e,u+1),!(!c||!d)){if(Xi(t[u],0,I4)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],l=Math.pow(i,2)+Math.pow(a,2),!(l<=9)&&(o=3/Math.sqrt(l),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function B4(e,t,n="x"){const r=a1(n),i=e.length;let a,o,l,c=ii(e,0);for(let d=0;d<i;++d){if(o=l,l=c,c=ii(e,d+1),!l)continue;const u=l[n],p=l[r];o&&(a=(u-o[n])/3,l[`cp1${n}`]=u-a,l[`cp1${r}`]=p-a*t[d]),c&&(a=(c[n]-u)/3,l[`cp2${n}`]=u+a,l[`cp2${r}`]=p+a*t[d])}}function H4(e,t="x"){const n=a1(t),r=e.length,i=Array(r).fill(0),a=Array(r);let o,l,c,d=ii(e,0);for(o=0;o<r;++o)if(l=c,c=d,d=ii(e,o+1),!!c){if(d){const u=d[t]-c[t];i[o]=u!==0?(d[n]-c[n])/u:0}a[o]=l?d?Xt(i[o-1])!==Xt(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}F4(e,i,a),B4(e,a,t)}function la(e,t,n){return Math.max(Math.min(e,n),t)}function U4(e,t){let n,r,i,a,o,l=ws(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=l,l=n<r-1&&ws(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=la(i.cp1x,t.left,t.right),i.cp1y=la(i.cp1y,t.top,t.bottom)),l&&(i.cp2x=la(i.cp2x,t.left,t.right),i.cp2y=la(i.cp2y,t.top,t.bottom)))}function W4(e,t,n,r,i){let a,o,l,c;if(t.spanGaps&&(e=e.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")H4(e,i);else{let d=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)l=e[a],c=D4(d,l,e[Math.min(a+1,o-(r?0:1))%o],t.tension),l.cp1x=c.previous.x,l.cp1y=c.previous.y,l.cp2x=c.next.x,l.cp2y=c.next.y,d=l}t.capBezierPoints&&U4(e,n)}function _u(){return typeof window<"u"&&typeof document<"u"}function Cu(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function yo(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const Ko=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function $4(e,t){return Ko(e).getPropertyValue(t)}const V4=["top","right","bottom","left"];function dr(e,t,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const a=V4[i];r[a]=parseFloat(e[t+"-"+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const q4=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function Y4(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r;let o=!1,l,c;if(q4(i,a,e.target))l=i,c=a;else{const d=t.getBoundingClientRect();l=r.clientX-d.left,c=r.clientY-d.top,o=!0}return{x:l,y:c,box:o}}function Zn(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,i=Ko(n),a=i.boxSizing==="border-box",o=dr(i,"padding"),l=dr(i,"border","width"),{x:c,y:d,box:u}=Y4(e,n),p=o.left+(u&&l.left),h=o.top+(u&&l.top);let{width:m,height:f}=t;return a&&(m-=o.width+l.width,f-=o.height+l.height),{x:Math.round((c-p)/m*n.width/r),y:Math.round((d-h)/f*n.height/r)}}function K4(e,t,n){let r,i;if(t===void 0||n===void 0){const a=e&&Cu(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{const o=a.getBoundingClientRect(),l=Ko(a),c=dr(l,"border","width"),d=dr(l,"padding");t=o.width-d.width-c.width,n=o.height-d.height-c.height,r=yo(l.maxWidth,a,"clientWidth"),i=yo(l.maxHeight,a,"clientHeight")}}return{width:t,height:n,maxWidth:r||vo,maxHeight:i||vo}}const zn=e=>Math.round(e*10)/10;function X4(e,t,n,r){const i=Ko(e),a=dr(i,"margin"),o=yo(i.maxWidth,e,"clientWidth")||vo,l=yo(i.maxHeight,e,"clientHeight")||vo,c=K4(e,t,n);let{width:d,height:u}=c;if(i.boxSizing==="content-box"){const h=dr(i,"border","width"),m=dr(i,"padding");d-=m.width+h.width,u-=m.height+h.height}return d=Math.max(0,d-a.width),u=Math.max(0,r?d/r:u-a.height),d=zn(Math.min(d,o,c.maxWidth)),u=zn(Math.min(u,l,c.maxHeight)),d&&!u&&(u=zn(d/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,d=zn(Math.floor(u*r))),{width:d,height:u}}function Rp(e,t,n){const r=t||1,i=zn(e.height*r),a=zn(e.width*r);e.height=zn(e.height),e.width=zn(e.width);const o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const G4=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};_u()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function Ap(e,t){const n=$4(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Jn(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function Q4(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function Z4(e,t,n,r){const i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=Jn(e,i,n),l=Jn(i,a,n),c=Jn(a,t,n),d=Jn(o,l,n),u=Jn(l,c,n);return Jn(d,u,n)}const J4=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},ej=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Vr(e,t,n){return e?J4(t,n):ej()}function o1(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function l1(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function c1(e){return e==="angle"?{between:gu,compare:Jw,normalize:Et}:{between:Cn,compare:(t,n)=>t-n,normalize:t=>t}}function Tp({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function tj(e,t,n){const{property:r,start:i,end:a}=n,{between:o,normalize:l}=c1(r),c=t.length;let{start:d,end:u,loop:p}=e,h,m;if(p){for(d+=c,u+=c,h=0,m=c;h<m&&o(l(t[d%c][r]),i,a);++h)d--,u--;d%=c,u%=c}return u<d&&(u+=c),{start:d,end:u,loop:p,style:e.style}}function nj(e,t,n){if(!n)return[e];const{property:r,start:i,end:a}=n,o=t.length,{compare:l,between:c,normalize:d}=c1(r),{start:u,end:p,loop:h,style:m}=tj(e,t,n),f=[];let x=!1,y=null,g,v,b;const k=()=>c(i,b,g)&&l(i,b)!==0,j=()=>l(a,g)===0||c(a,b,g),N=()=>x||k(),S=()=>!x||j();for(let _=u,A=u;_<=p;++_)v=t[_%o],!v.skip&&(g=d(v[r]),g!==b&&(x=c(g,i,a),y===null&&N()&&(y=l(g,i)===0?_:A),y!==null&&S()&&(f.push(Tp({start:y,end:_,loop:h,count:o,style:m})),y=null),A=_,b=g));return y!==null&&f.push(Tp({start:y,end:p,loop:h,count:o,style:m})),f}function rj(e,t){const n=[],r=e.segments;for(let i=0;i<r.length;i++){const a=nj(r[i],e.points,t);a.length&&n.push(...a)}return n}function ij(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function sj(e,t,n,r){const i=e.length,a=[];let o=t,l=e[t],c;for(c=t+1;c<=n;++c){const d=e[c%i];d.skip||d.stop?l.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=d.stop?c:null):(o=c,l.skip&&(t=c)),l=d}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function aj(e,t){const n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];const a=!!e._loop,{start:o,end:l}=ij(n,i,a,r);if(r===!0)return Lp(e,[{start:o,end:l,loop:a}],n,t);const c=l<o?l+i:l,d=!!e._fullLoop&&o===0&&l===i-1;return Lp(e,sj(n,o,c,d),n,t)}function Lp(e,t,n,r){return!r||!r.setContext||!n?t:oj(e,t,n,r)}function oj(e,t,n,r){const i=e._chart.getContext(),a=Op(e.options),{_datasetIndex:o,options:{spanGaps:l}}=e,c=n.length,d=[];let u=a,p=t[0].start,h=p;function m(f,x,y,g){const v=l?-1:1;if(f!==x){for(f+=c;n[f%c].skip;)f-=v;for(;n[x%c].skip;)x+=v;f%c!==x%c&&(d.push({start:f%c,end:x%c,loop:y,style:g}),u=g,p=x%c)}}for(const f of t){p=l?p:f.start;let x=n[p%c],y;for(h=p+1;h<=f.end;h++){const g=n[h%c];y=Op(r.setContext(yr(i,{type:"segment",p0:x,p1:g,p0DataIndex:(h-1)%c,p1DataIndex:h%c,datasetIndex:o}))),lj(y,u)&&m(p,h-1,f.loop,u),x=g,u=y}p<h-1&&m(p,h-1,f.loop,u)}return d}function Op(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function lj(e,t){if(!t)return!1;const n=[],r=function(i,a){return bu(a)?(n.includes(a)||n.push(a),n.indexOf(a)):a};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function ca(e,t,n){return e.options.clip?e[n]:t[n]}function cj(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:ca(n,t,"left"),right:ca(n,t,"right"),top:ca(r,t,"top"),bottom:ca(r,t,"bottom")}:t}function dj(e,t){const n=t._clip;if(n.disabled)return!1;const r=cj(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class uj{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,i){const a=n.listeners[i],o=n.duration;a.forEach(l=>l({chart:t,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Gg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const a=r.items;let o=a.length-1,l=!1,c;for(;o>=0;--o)c=a[o],c._active?(c._total>r.duration&&(r.duration=c._total),c.tick(t),l=!0):(a[o]=a[a.length-1],a.pop());l&&(i.draw(),this._notify(i,r,t,"progress")),a.length||(r.running=!1,this._notify(i,r,t,"complete"),r.initial=!1),n+=a.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Jt=new uj;const Ip="transparent",hj={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=_p(e||Ip),i=r.valid&&_p(t||Ip);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class pj{constructor(t,n,r,i){const a=n[r];i=oa([t.to,i,a,t.from]);const o=oa([t.from,a,i]);this._active=!0,this._fn=t.fn||hj[t.type||typeof o],this._easing=Gi[t.easing]||Gi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],a=r-this._start,o=this._duration-a;this._start=r,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=oa([t.to,n,i,t.from]),this._from=oa([t.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,i=this._prop,a=this._from,o=this._loop,l=this._to;let c;if(this._active=a!==l&&(o||n<r),!this._active){this._target[i]=l,this._notify(!0);return}if(n<0){this._target[i]=a;return}c=n/r%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(a,l,c)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class d1{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!ne(t))return;const n=Object.keys(Me.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const a=t[i];if(!ne(a))return;const o={};for(const l of n)o[l]=a[l];(Re(a.properties)&&a.properties||[i]).forEach(l=>{(l===i||!r.has(l))&&r.set(l,o)})})}_animateOptions(t,n){const r=n.options,i=mj(t,r);if(!i)return[];const a=this._createAnimations(i,r);return r.$shared&&fj(t.options.$animations,r).then(()=>{t.options=r},()=>{}),a}_createAnimations(t,n){const r=this._properties,i=[],a=t.$animations||(t.$animations={}),o=Object.keys(n),l=Date.now();let c;for(c=o.length-1;c>=0;--c){const d=o[c];if(d.charAt(0)==="$")continue;if(d==="options"){i.push(...this._animateOptions(t,n));continue}const u=n[d];let p=a[d];const h=r.get(d);if(p)if(h&&p.active()){p.update(h,u,l);continue}else p.cancel();if(!h||!h.duration){t[d]=u;continue}a[d]=p=new pj(h,t,d,u),i.push(p)}return i}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Jt.add(this._chart,r),!0}}function fj(e,t){const n=[],r=Object.keys(t);for(let i=0;i<r.length;i++){const a=e[r[i]];a&&a.active()&&n.push(a.wait())}return Promise.all(n)}function mj(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Dp(e,t){const n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function gj(e,t,n){if(n===!1)return!1;const r=Dp(e,n),i=Dp(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function xj(e){let t,n,r,i;return ne(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function u1(e,t){const n=[],r=e._getSortedDatasetMetas(t);let i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function Fp(e,t,n,r={}){const i=e.keys,a=r.mode==="single";let o,l,c,d;if(t===null)return;let u=!1;for(o=0,l=i.length;o<l;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}d=e.values[c],St(d)&&(a||t===0||Xt(t)===Xt(d))&&(t+=d)}return!u&&!r.all?0:t}function vj(e,t){const{iScale:n,vScale:r}=t,i=n.axis==="x"?"x":"y",a=r.axis==="x"?"x":"y",o=Object.keys(e),l=new Array(o.length);let c,d,u;for(c=0,d=o.length;c<d;++c)u=o[c],l[c]={[i]:u,[a]:e[u]};return l}function Al(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function bj(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function yj(e){const{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function wj(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function Bp(e,t,n,r){for(const i of t.getMatchingVisibleMetas(r).reverse()){const a=e[i.index];if(n&&a>0||!n&&a<0)return i.index}return null}function Hp(e,t){const{chart:n,_cachedMeta:r}=e,i=n._stacks||(n._stacks={}),{iScale:a,vScale:o,index:l}=r,c=a.axis,d=o.axis,u=bj(a,o,r),p=t.length;let h;for(let m=0;m<p;++m){const f=t[m],{[c]:x,[d]:y}=f,g=f._stacks||(f._stacks={});h=g[d]=wj(i,u,x),h[l]=y,h._top=Bp(h,o,!0,r.type),h._bottom=Bp(h,o,!1,r.type);const v=h._visualValues||(h._visualValues={});v[l]=y}}function Tl(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function jj(e,t){return yr(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function kj(e,t,n){return yr(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Si(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const i of t){const a=i._stacks;if(!a||a[r]===void 0||a[r][n]===void 0)return;delete a[r][n],a[r]._visualValues!==void 0&&a[r]._visualValues[n]!==void 0&&delete a[r]._visualValues[n]}}}const Ll=e=>e==="reset"||e==="none",Up=(e,t)=>t?e:Object.assign({},e),Sj=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:u1(n,!0),values:null};class qr{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Al(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Si(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(p,h,m,f)=>p==="x"?h:p==="r"?f:m,a=n.xAxisID=Q(r.xAxisID,Tl(t,"x")),o=n.yAxisID=Q(r.yAxisID,Tl(t,"y")),l=n.rAxisID=Q(r.rAxisID,Tl(t,"r")),c=n.indexAxis,d=n.iAxisID=i(c,a,o,l),u=n.vAxisID=i(c,o,a,l);n.xScale=this.getScaleForId(a),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(l),n.iScale=this.getScaleForId(d),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&kp(this._data,this),t._stacked&&Si(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(ne(n)){const i=this._cachedMeta;this._data=vj(n,i)}else if(r!==n){if(r){kp(r,this);const i=this._cachedMeta;Si(i),i._parsed=[]}n&&Object.isExtensible(n)&&r4(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const a=n._stacked;n._stacked=Al(n.vScale,n),n.stack!==r.stack&&(i=!0,Si(n),n.stack=r.stack),this._resyncElements(t),(i||a!==n._stacked)&&(Hp(this,n._parsed),n._stacked=Al(n.vScale,n))}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:i}=this,{iScale:a,_stacked:o}=r,l=a.axis;let c=t===0&&n===i.length?!0:r._sorted,d=t>0&&r._parsed[t-1],u,p,h;if(this._parsing===!1)r._parsed=i,r._sorted=!0,h=i;else{Re(i[t])?h=this.parseArrayData(r,i,t,n):ne(i[t])?h=this.parseObjectData(r,i,t,n):h=this.parsePrimitiveData(r,i,t,n);const m=()=>p[l]===null||d&&p[l]<d[l];for(u=0;u<n;++u)r._parsed[u+t]=p=h[u],c&&(m()&&(c=!1),d=p);r._sorted=c}o&&Hp(this,h)}parsePrimitiveData(t,n,r,i){const{iScale:a,vScale:o}=t,l=a.axis,c=o.axis,d=a.getLabels(),u=a===o,p=new Array(i);let h,m,f;for(h=0,m=i;h<m;++h)f=h+r,p[h]={[l]:u||a.parse(d[f],f),[c]:o.parse(n[f],f)};return p}parseArrayData(t,n,r,i){const{xScale:a,yScale:o}=t,l=new Array(i);let c,d,u,p;for(c=0,d=i;c<d;++c)u=c+r,p=n[u],l[c]={x:a.parse(p[0],u),y:o.parse(p[1],u)};return l}parseObjectData(t,n,r,i){const{xScale:a,yScale:o}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=new Array(i);let u,p,h,m;for(u=0,p=i;u<p;++u)h=u+r,m=n[h],d[u]={x:a.parse(ni(m,l),h),y:o.parse(ni(m,c),h)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const i=this.chart,a=this._cachedMeta,o=n[t.axis],l={keys:u1(i,!0),values:n._stacks[t.axis]._visualValues};return Fp(l,o,a.index,{mode:r})}updateRangeFromParsed(t,n,r,i){const a=r[n.axis];let o=a===null?NaN:a;const l=i&&r._stacks[n.axis];i&&l&&(i.values=l,o=Fp(i,a,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,n){const r=this._cachedMeta,i=r._parsed,a=r._sorted&&t===r.iScale,o=i.length,l=this._getOtherScale(t),c=Sj(n,r,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:p}=yj(l);let h,m;function f(){m=i[h];const x=m[l.axis];return!St(m[t.axis])||u>x||p<x}for(h=0;h<o&&!(!f()&&(this.updateRangeFromParsed(d,t,m,c),a));++h);if(a){for(h=o-1;h>=0;--h)if(!f()){this.updateRangeFromParsed(d,t,m,c);break}}return d}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let i,a,o;for(i=0,a=n.length;i<a;++i)o=n[i][t.axis],St(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,i=n.vScale,a=this.getParsed(t);return{label:r?""+r.getLabelForValue(a[r.axis]):"",value:i?""+i.getLabelForValue(a[i.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=xj(Q(this.options.clip,gj(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],a=n.chartArea,o=[],l=this._drawStart||0,c=this._drawCount||i.length-l,d=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,a,l,c),u=l;u<l+c;++u){const p=i[u];p.hidden||(p.active&&d?o.push(p):p.draw(t,a))}for(u=0;u<o.length;++u)o[u].draw(t,a)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const i=this.getDataset();let a;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];a=o.$context||(o.$context=kj(this.getContext(),t,o)),a.parsed=this.getParsed(t),a.raw=i.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=jj(this.chart.getContext(),this.index)),a.dataset=i,a.index=a.datasetIndex=this.index;return a.active=!!n,a.mode=r,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const i=n==="active",a=this._cachedDataOpts,o=t+"-"+n,l=a[o],c=this.enableOptionSharing&&bs(r);if(l)return Up(l,c);const d=this.chart.config,u=d.datasetElementScopeKeys(this._type,t),p=i?[`${t}Hover`,"hover",t,""]:[t,""],h=d.getOptionScopes(this.getDataset(),u),m=Object.keys(Me.elements[t]),f=()=>this.getContext(r,i,n),x=d.resolveNamedOptions(h,m,f,p);return x.$shared&&(x.$shared=c,a[o]=Object.freeze(Up(x,c))),x}_resolveAnimations(t,n,r){const i=this.chart,a=this._cachedDataOpts,o=`animation-${n}`,l=a[o];if(l)return l;let c;if(i.options.animation!==!1){const u=this.chart.config,p=u.datasetAnimationScopeKeys(this._type,n),h=u.getOptionScopes(this.getDataset(),p);c=u.createResolver(h,this.getContext(t,r,n))}const d=new d1(i,c&&c.animations);return c&&c._cacheable&&(a[o]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Ll(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),i=this._sharedOptions,a=this.getSharedOptions(r),o=this.includeOptions(n,a)||a!==i;return this.updateSharedOptions(a,n,r),{sharedOptions:a,includeOptions:o}}updateElement(t,n,r,i){Ll(i)?Object.assign(t,r):this._resolveAnimations(n,i).update(t,r)}updateSharedOptions(t,n,r){t&&!Ll(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,i){t.active=i;const a=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(t,{options:!i&&this.getSharedOptions(a)||a})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[l,c,d]of this._syncList)this[l](c,d);this._syncList=[];const i=r.length,a=n.length,o=Math.min(a,i);o&&this.parse(0,o),a>i?this._insertElements(i,a-i,t):a<i&&this._removeElements(a,i-a)}_insertElements(t,n,r=!0){const i=this._cachedMeta,a=i.data,o=t+n;let l;const c=d=>{for(d.length+=n,l=d.length-1;l>=o;l--)d[l]=d[l-n]};for(c(a),l=t;l<o;++l)a[l]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(t,n),r&&this.updateElements(a,t,n,"reset")}updateElements(t,n,r,i){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(t,n);r._stacked&&Si(r,i)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,i]=t;this[n](r,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}q(qr,"defaults",{}),q(qr,"datasetElementType",null),q(qr,"dataElementType",null);function Nj(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let i=0,a=n.length;i<a;i++)r=r.concat(n[i].controller.getAllParsedValues(e));e._cache.$bar=Xg(r.sort((i,a)=>i-a))}return e._cache.$bar}function _j(e){const t=e.iScale,n=Nj(t,e.type);let r=t._length,i,a,o,l;const c=()=>{o===32767||o===-32768||(bs(l)&&(r=Math.min(r,Math.abs(o-l)||r)),l=o)};for(i=0,a=n.length;i<a;++i)o=t.getPixelForValue(n[i]),c();for(l=void 0,i=0,a=t.ticks.length;i<a;++i)o=t.getPixelForTick(i),c();return r}function Cj(e,t,n,r){const i=n.barThickness;let a,o;return se(i)?(a=t.min*n.categoryPercentage,o=n.barPercentage):(a=i*r,o=1),{chunk:a/r,ratio:o,start:t.pixels[e]-a/2}}function zj(e,t,n,r){const i=t.pixels,a=i[e];let o=e>0?i[e-1]:null,l=e<i.length-1?i[e+1]:null;const c=n.categoryPercentage;o===null&&(o=a-(l===null?t.end-t.start:l-a)),l===null&&(l=a+a-o);const d=a-(a-Math.min(o,l))/2*c;return{chunk:Math.abs(l-o)/2*c/r,ratio:n.barPercentage,start:d}}function Mj(e,t,n,r){const i=n.parse(e[0],r),a=n.parse(e[1],r),o=Math.min(i,a),l=Math.max(i,a);let c=o,d=l;Math.abs(o)>Math.abs(l)&&(c=l,d=o),t[n.axis]=d,t._custom={barStart:c,barEnd:d,start:i,end:a,min:o,max:l}}function h1(e,t,n,r){return Re(e)?Mj(e,t,n,r):t[n.axis]=n.parse(e,r),t}function Wp(e,t,n,r){const i=e.iScale,a=e.vScale,o=i.getLabels(),l=i===a,c=[];let d,u,p,h;for(d=n,u=n+r;d<u;++d)h=t[d],p={},p[i.axis]=l||i.parse(o[d],d),c.push(h1(h,p,a,d));return c}function Ol(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Ej(e,t,n){return e!==0?Xt(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function Pj(e){let t,n,r,i,a;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(i="end",a="start"):(i="start",a="end"),{start:n,end:r,reverse:t,top:i,bottom:a}}function Rj(e,t,n,r){let i=t.borderSkipped;const a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:l,reverse:c,top:d,bottom:u}=Pj(e);i==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=d:(n._bottom||0)===r?i=u:(a[$p(u,o,l,c)]=!0,i=d)),a[$p(i,o,l,c)]=!0,e.borderSkipped=a}function $p(e,t,n,r){return r?(e=Aj(e,t,n),e=Vp(e,n,t)):e=Vp(e,t,n),e}function Aj(e,t,n){return e===t?n:e===n?t:e}function Vp(e,t,n){return e==="start"?t:e==="end"?n:e}function Tj(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Ra extends qr{parsePrimitiveData(t,n,r,i){return Wp(t,n,r,i)}parseArrayData(t,n,r,i){return Wp(t,n,r,i)}parseObjectData(t,n,r,i){const{iScale:a,vScale:o}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=a.axis==="x"?l:c,u=o.axis==="x"?l:c,p=[];let h,m,f,x;for(h=r,m=r+i;h<m;++h)x=n[h],f={},f[a.axis]=a.parse(ni(x,d),h),p.push(h1(ni(x,u),f,o,h));return p}updateRangeFromParsed(t,n,r,i){super.updateRangeFromParsed(t,n,r,i);const a=r._custom;a&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:i}=n,a=this.getParsed(t),o=a._custom,l=Ol(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(a[i.axis]);return{label:""+r.getLabelForValue(a[r.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,i){const a=i==="reset",{index:o,_cachedMeta:{vScale:l}}=this,c=l.getBasePixel(),d=l.isHorizontal(),u=this._getRuler(),{sharedOptions:p,includeOptions:h}=this._getSharedOptions(n,i);for(let m=n;m<n+r;m++){const f=this.getParsed(m),x=a||se(f[l.axis])?{base:c,head:c}:this._calculateBarValuePixels(m),y=this._calculateBarIndexPixels(m,u),g=(f._stacks||{})[l.axis],v={horizontal:d,base:x.base,enableBorderRadius:!g||Ol(f._custom)||o===g._top||o===g._bottom,x:d?x.head:y.center,y:d?y.center:x.head,height:d?y.size:Math.abs(x.size),width:d?Math.abs(x.size):y.size};h&&(v.options=p||this.resolveDataElementOptions(m,t[m].active?"active":i));const b=v.options||t[m].options;Rj(v,b,g,o),Tj(v,b,u.ratio),this.updateElement(t[m],m,v,i)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),a=r.options.stacked,o=[],l=this._cachedMeta.controller.getParsed(n),c=l&&l[r.axis],d=u=>{const p=u._parsed.find(m=>m[r.axis]===c),h=p&&p[u.vScale.axis];if(se(h)||isNaN(h))return!0};for(const u of i)if(!(n!==void 0&&d(u))&&((a===!1||o.indexOf(u.stack)===-1||a===void 0&&u.stack===void 0)&&o.push(u.stack),u.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(t).filter(r=>t[r].axis===n).shift()}_getAxis(){const t={},n=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)t[Q(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,n)]=!0;return Object.keys(t)}_getStackIndex(t,n,r){const i=this._getStacks(t,r),a=n!==void 0?i.indexOf(n):-1;return a===-1?i.length-1:a}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,i=[];let a,o;for(a=0,o=n.data.length;a<o;++a)i.push(r.getPixelForValue(this.getParsed(a)[r.axis],a));const l=t.barThickness;return{min:l||_j(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:l?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:a,minBarLength:o}}=this,l=a||0,c=this.getParsed(t),d=c._custom,u=Ol(d);let p=c[n.axis],h=0,m=r?this.applyStack(n,c,r):p,f,x;m!==p&&(h=m-p,m=p),u&&(p=d.barStart,m=d.barEnd-d.barStart,p!==0&&Xt(p)!==Xt(d.barEnd)&&(h=0),h+=p);const y=!se(a)&&!u?a:h;let g=n.getPixelForValue(y);if(this.chart.getDataVisibility(t)?f=n.getPixelForValue(h+m):f=g,x=f-g,Math.abs(x)<o){x=Ej(x,n,l)*o,p===l&&(g-=x/2);const v=n.getPixelForDecimal(0),b=n.getPixelForDecimal(1),k=Math.min(v,b),j=Math.max(v,b);g=Math.max(Math.min(g,j),k),f=g+x,r&&!u&&(c._stacks[n.axis]._visualValues[i]=n.getValueForPixel(f)-n.getValueForPixel(g))}if(g===n.getPixelForValue(l)){const v=Xt(x)*n.getLineWidthForValue(l)/2;g+=v,x-=v}return{size:x,base:g,head:f,center:f+x/2}}_calculateBarIndexPixels(t,n){const r=n.scale,i=this.options,a=i.skipNull,o=Q(i.maxBarThickness,1/0);let l,c;const d=this._getAxisCount();if(n.grouped){const u=a?this._getStackCount(t):n.stackCount,p=i.barThickness==="flex"?zj(t,n,i,u*d):Cj(t,n,i,u*d),h=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,m=this._getAxis().indexOf(Q(h,this.getFirstScaleIdForIndexAxis())),f=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+m;l=p.start+p.chunk*f+p.chunk/2,c=Math.min(o,p.chunk*p.ratio)}else l=r.getPixelForValue(this.getParsed(t)[r.axis],t),c=Math.min(o,n.min*n.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,i=r.length;let a=0;for(;a<i;++a)this.getParsed(a)[n.axis]!==null&&!r[a].hidden&&r[a].draw(this._ctx)}}q(Ra,"id","bar"),q(Ra,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),q(Ra,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Aa extends qr{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:a}=n,o=this.chart._animationsDisabled;let{start:l,count:c}=a4(n,i,o);this._drawStart=l,this._drawCount=c,o4(n)&&(l=0,c=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!a._decimated,r.points=i;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(r,void 0,{animated:!o,options:d},t),this.updateElements(i,l,c,t)}updateElements(t,n,r,i){const a=i==="reset",{iScale:o,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,{sharedOptions:u,includeOptions:p}=this._getSharedOptions(n,i),h=o.axis,m=l.axis,{spanGaps:f,segment:x}=this.options,y=ys(f)?f:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||a||i==="none",v=n+r,b=t.length;let k=n>0&&this.getParsed(n-1);for(let j=0;j<b;++j){const N=t[j],S=g?N:{};if(j<n||j>=v){S.skip=!0;continue}const _=this.getParsed(j),A=se(_[m]),R=S[h]=o.getPixelForValue(_[h],j),I=S[m]=a||A?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,_,c):_[m],j);S.skip=isNaN(R)||isNaN(I)||A,S.stop=j>0&&Math.abs(_[h]-k[h])>y,x&&(S.parsed=_,S.raw=d.data[j]),p&&(S.options=u||this.resolveDataElementOptions(j,N.active?"active":i)),g||this.updateElement(N,j,S,i),k=_}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,i=t.data||[];if(!i.length)return r;const a=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,a,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}q(Aa,"id","line"),q(Aa,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),q(Aa,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Xn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class zu{constructor(t){q(this,"options");this.options=t||{}}static override(t){Object.assign(zu.prototype,t)}init(){}formats(){return Xn()}parse(){return Xn()}format(){return Xn()}add(){return Xn()}diff(){return Xn()}startOf(){return Xn()}endOf(){return Xn()}}var Lj={_date:zu};function Oj(e,t,n,r){const{controller:i,data:a,_sorted:o}=e,l=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(l&&t===l.axis&&t!=="r"&&o&&a.length){const d=l._reversePixels?t4:ar;if(r){if(i._sharedOptions){const u=a[0],p=typeof u.getRange=="function"&&u.getRange(t);if(p){const h=d(a,t,n-p),m=d(a,t,n+p);return{lo:h.lo,hi:m.hi}}}}else{const u=d(a,t,n);if(c){const{vScale:p}=i._cachedMeta,{_parsed:h}=e,m=h.slice(0,u.lo+1).reverse().findIndex(x=>!se(x[p.axis]));u.lo-=Math.max(0,m);const f=h.slice(u.hi).findIndex(x=>!se(x[p.axis]));u.hi+=Math.max(0,f)}return u}}return{lo:0,hi:a.length-1}}function Xo(e,t,n,r,i){const a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let l=0,c=a.length;l<c;++l){const{index:d,data:u}=a[l],{lo:p,hi:h}=Oj(a[l],t,o,i);for(let m=p;m<=h;++m){const f=u[m];f.skip||r(f,d,m)}}}function Ij(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,i){const a=t?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function Il(e,t,n,r,i){const a=[];return!i&&!e.isPointInArea(t)||Xo(e,n,t,function(l,c,d){!i&&!ws(l,e.chartArea,0)||l.inRange(t.x,t.y,r)&&a.push({element:l,datasetIndex:c,index:d})},!0),a}function Dj(e,t,n,r){let i=[];function a(o,l,c){const{startAngle:d,endAngle:u}=o.getProps(["startAngle","endAngle"],r),{angle:p}=Yg(o,{x:t.x,y:t.y});gu(p,d,u)&&i.push({element:o,datasetIndex:l,index:c})}return Xo(e,n,t,a),i}function Fj(e,t,n,r,i,a){let o=[];const l=Ij(n);let c=Number.POSITIVE_INFINITY;function d(u,p,h){const m=u.inRange(t.x,t.y,i);if(r&&!m)return;const f=u.getCenterPoint(i);if(!(!!a||e.isPointInArea(f))&&!m)return;const y=l(t,f);y<c?(o=[{element:u,datasetIndex:p,index:h}],c=y):y===c&&o.push({element:u,datasetIndex:p,index:h})}return Xo(e,n,t,d),o}function Dl(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n==="r"&&!r?Dj(e,t,n,i):Fj(e,t,n,r,i,a)}function qp(e,t,n,r,i){const a=[],o=n==="x"?"inXRange":"inYRange";let l=!1;return Xo(e,n,t,(c,d,u)=>{c[o]&&c[o](t[n],i)&&(a.push({element:c,datasetIndex:d,index:u}),l=l||c.inRange(t.x,t.y,i))}),r&&!l?[]:a}var Bj={modes:{index(e,t,n,r){const i=Zn(t,e),a=n.axis||"x",o=n.includeInvisible||!1,l=n.intersect?Il(e,i,a,r,o):Dl(e,i,a,!1,r,o),c=[];return l.length?(e.getSortedVisibleDatasetMetas().forEach(d=>{const u=l[0].index,p=d.data[u];p&&!p.skip&&c.push({element:p,datasetIndex:d.index,index:u})}),c):[]},dataset(e,t,n,r){const i=Zn(t,e),a=n.axis||"xy",o=n.includeInvisible||!1;let l=n.intersect?Il(e,i,a,r,o):Dl(e,i,a,!1,r,o);if(l.length>0){const c=l[0].datasetIndex,d=e.getDatasetMeta(c).data;l=[];for(let u=0;u<d.length;++u)l.push({element:d[u],datasetIndex:c,index:u})}return l},point(e,t,n,r){const i=Zn(t,e),a=n.axis||"xy",o=n.includeInvisible||!1;return Il(e,i,a,r,o)},nearest(e,t,n,r){const i=Zn(t,e),a=n.axis||"xy",o=n.includeInvisible||!1;return Dl(e,i,a,n.intersect,r,o)},x(e,t,n,r){const i=Zn(t,e);return qp(e,i,"x",n.intersect,r)},y(e,t,n,r){const i=Zn(t,e);return qp(e,i,"y",n.intersect,r)}}};const p1=["left","top","right","bottom"];function Ni(e,t){return e.filter(n=>n.pos===t)}function Yp(e,t){return e.filter(n=>p1.indexOf(n.pos)===-1&&n.box.axis===t)}function _i(e,t){return e.sort((n,r)=>{const i=t?r:n,a=t?n:r;return i.weight===a.weight?i.index-a.index:i.weight-a.weight})}function Hj(e){const t=[];let n,r,i,a,o,l;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:l=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:l});return t}function Uj(e){const t={};for(const n of e){const{stack:r,pos:i,stackWeight:a}=n;if(!r||!p1.includes(i))continue;const o=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=a}return t}function Wj(e,t){const n=Uj(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t;let a,o,l;for(a=0,o=e.length;a<o;++a){l=e[a];const{fullSize:c}=l.box,d=n[l.stack],u=d&&l.stackWeight/d.weight;l.horizontal?(l.width=u?u*r:c&&t.availableWidth,l.height=i):(l.width=r,l.height=u?u*i:c&&t.availableHeight)}return n}function $j(e){const t=Hj(e),n=_i(t.filter(d=>d.box.fullSize),!0),r=_i(Ni(t,"left"),!0),i=_i(Ni(t,"right")),a=_i(Ni(t,"top"),!0),o=_i(Ni(t,"bottom")),l=Yp(t,"x"),c=Yp(t,"y");return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(l),chartArea:Ni(t,"chartArea"),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(l)}}function Kp(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function f1(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function Vj(e,t,n,r){const{pos:i,box:a}=n,o=e.maxPadding;if(!ne(i)){n.size&&(e[i]-=n.size);const p=r[n.stack]||{size:0,count:1};p.size=Math.max(p.size,n.horizontal?a.height:a.width),n.size=p.size/p.count,e[i]+=n.size}a.getPadding&&f1(o,a.getPadding());const l=Math.max(0,t.outerWidth-Kp(o,e,"left","right")),c=Math.max(0,t.outerHeight-Kp(o,e,"top","bottom")),d=l!==e.w,u=c!==e.h;return e.w=l,e.h=c,n.horizontal?{same:d,other:u}:{same:u,other:d}}function qj(e){const t=e.maxPadding;function n(r){const i=Math.max(t[r]-e[r],0);return e[r]+=i,i}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function Yj(e,t){const n=t.maxPadding;function r(i){const a={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{a[o]=Math.max(t[o],n[o])}),a}return r(e?["left","right"]:["top","bottom"])}function Li(e,t,n,r){const i=[];let a,o,l,c,d,u;for(a=0,o=e.length,d=0;a<o;++a){l=e[a],c=l.box,c.update(l.width||t.w,l.height||t.h,Yj(l.horizontal,t));const{same:p,other:h}=Vj(t,n,l,r);d|=p&&i.length,u=u||h,c.fullSize||i.push(l)}return d&&Li(i,t,n,r)||u}function da(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function Xp(e,t,n,r){const i=n.padding;let{x:a,y:o}=t;for(const l of e){const c=l.box,d=r[l.stack]||{placed:0,weight:1},u=l.stackWeight/d.weight||1;if(l.horizontal){const p=t.w*u,h=d.size||c.height;bs(d.start)&&(o=d.start),c.fullSize?da(c,i.left,o,n.outerWidth-i.right-i.left,h):da(c,t.left+d.placed,o,p,h),d.start=o,d.placed+=p,o=c.bottom}else{const p=t.h*u,h=d.size||c.width;bs(d.start)&&(a=d.start),c.fullSize?da(c,a,i.top,h,n.outerHeight-i.bottom-i.top):da(c,a,t.top+d.placed,h,p),d.start=a,d.placed+=p,a=c.right}}t.x=a,t.y=o}var yt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const i=Nt(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),l=$j(e.boxes),c=l.vertical,d=l.horizontal;ae(e.boxes,x=>{typeof x.beforeLayout=="function"&&x.beforeLayout()});const u=c.reduce((x,y)=>y.box.options&&y.box.options.display===!1?x:x+1,0)||1,p=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),h=Object.assign({},i);f1(h,Nt(r));const m=Object.assign({maxPadding:h,w:a,h:o,x:i.left,y:i.top},i),f=Wj(c.concat(d),p);Li(l.fullSize,m,p,f),Li(c,m,p,f),Li(d,m,p,f)&&Li(c,m,p,f),qj(m),Xp(l.leftAndTop,m,p,f),m.x+=m.w,m.y+=m.h,Xp(l.rightAndBottom,m,p,f),e.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},ae(l.chartArea,x=>{const y=x.box;Object.assign(y,e.chartArea),y.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class m1{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,i){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(t){return!0}updateConfig(t){}}class Kj extends m1{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ta="$chartjs",Xj={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Gp=e=>e===null||e==="";function Gj(e,t){const n=e.style,r=e.getAttribute("height"),i=e.getAttribute("width");if(e[Ta]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Gp(i)){const a=Ap(e,"width");a!==void 0&&(e.width=a)}if(Gp(r))if(e.style.height==="")e.height=e.width/(t||2);else{const a=Ap(e,"height");a!==void 0&&(e.height=a)}return e}const g1=G4?{passive:!0}:!1;function Qj(e,t,n){e&&e.addEventListener(t,n,g1)}function Zj(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,g1)}function Jj(e,t){const n=Xj[e.type]||e.type,{x:r,y:i}=Zn(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:i!==void 0?i:null}}function wo(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function e5(e,t,n){const r=e.canvas,i=new MutationObserver(a=>{let o=!1;for(const l of a)o=o||wo(l.addedNodes,r),o=o&&!wo(l.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function t5(e,t,n){const r=e.canvas,i=new MutationObserver(a=>{let o=!1;for(const l of a)o=o||wo(l.removedNodes,r),o=o&&!wo(l.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const ks=new Map;let Qp=0;function x1(){const e=window.devicePixelRatio;e!==Qp&&(Qp=e,ks.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function n5(e,t){ks.size||window.addEventListener("resize",x1),ks.set(e,t)}function r5(e){ks.delete(e),ks.size||window.removeEventListener("resize",x1)}function i5(e,t,n){const r=e.canvas,i=r&&Cu(r);if(!i)return;const a=Qg((l,c)=>{const d=i.clientWidth;n(l,c),d<i.clientWidth&&n()},window),o=new ResizeObserver(l=>{const c=l[0],d=c.contentRect.width,u=c.contentRect.height;d===0&&u===0||a(d,u)});return o.observe(i),n5(e,a),o}function Fl(e,t,n){n&&n.disconnect(),t==="resize"&&r5(e)}function s5(e,t,n){const r=e.canvas,i=Qg(a=>{e.ctx!==null&&n(Jj(a,e))},e);return Qj(r,t,i),i}class a5 extends m1{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(Gj(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[Ta])return!1;const r=n[Ta].initial;["height","width"].forEach(a=>{const o=r[a];se(o)?n.removeAttribute(a):n.setAttribute(a,o)});const i=r.style||{};return Object.keys(i).forEach(a=>{n.style[a]=i[a]}),n.width=n.width,delete n[Ta],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const i=t.$proxies||(t.$proxies={}),o={attach:e5,detach:t5,resize:i5}[n]||s5;i[n]=o(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),i=r[n];if(!i)return;({attach:Fl,detach:Fl,resize:Fl}[n]||Zj)(t,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,i){return X4(t,n,r,i)}isAttached(t){const n=t&&Cu(t);return!!(n&&n.isConnected)}}function o5(e){return!_u()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?Kj:a5}class Lt{constructor(){q(this,"x");q(this,"y");q(this,"active",!1);q(this,"options");q(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return ys(this.x)&&ys(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const i={};return t.forEach(a=>{i[a]=r[a]&&r[a].active()?r[a]._to:this[a]}),i}}q(Lt,"defaults",{}),q(Lt,"defaultRoutes");function l5(e,t){const n=e.options.ticks,r=c5(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?u5(t):[],o=a.length,l=a[0],c=a[o-1],d=[];if(o>i)return h5(t,d,a,o/i),d;const u=d5(a,t,i);if(o>0){let p,h;const m=o>1?Math.round((c-l)/(o-1)):null;for(ua(t,d,u,se(m)?0:l-m,l),p=0,h=o-1;p<h;p++)ua(t,d,u,a[p],a[p+1]);return ua(t,d,u,c,se(m)?t.length:c+m),d}return ua(t,d,u),d}function c5(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),i=e._maxLength/n;return Math.floor(Math.min(r,i))}function d5(e,t,n){const r=p5(e),i=t.length/n;if(!r)return Math.max(i,1);const a=Kw(r);for(let o=0,l=a.length-1;o<l;o++){const c=a[o];if(c>i)return c}return Math.max(i,1)}function u5(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function h5(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function ua(e,t,n,r,i){const a=Q(r,0),o=Math.min(Q(i,e.length),e.length);let l=0,c,d,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)l++,u=Math.round(a+l*n);for(d=Math.max(a,0);d<o;d++)d===u&&(t.push(e[d]),l++,u=Math.round(a+l*n))}function p5(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const f5=e=>e==="left"?"right":e==="right"?"left":e,Zp=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,Jp=(e,t)=>Math.min(t||e,e);function ef(e,t){const n=[],r=e.length/t,i=e.length;let a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function m5(e,t,n){const r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,l=1e-6;let c=e.getPixelForTick(i),d;if(!(n&&(r===1?d=Math.max(c-a,o-c):t===0?d=(e.getPixelForTick(1)-c)/2:d=(c-e.getPixelForTick(i-1))/2,c+=i<t?d:-d,c<a-l||c>o+l)))return c}function g5(e,t){ae(e,n=>{const r=n.gc,i=r.length/2;let a;if(i>t){for(a=0;a<i;++a)delete n.data[r[a]];r.splice(0,i)}})}function Ci(e){return e.drawTicks?e.tickLength:0}function tf(e,t){if(!e.display)return 0;const n=Ke(e.font,t),r=Nt(e.padding);return(Re(e.text)?e.text.length:1)*n.lineHeight+r.height}function x5(e,t){return yr(e,{scale:t,type:"scale"})}function v5(e,t,n){return yr(e,{tick:n,index:t,type:"tick"})}function b5(e,t,n){let r=vu(e);return(n&&t!=="right"||!n&&t==="right")&&(r=f5(r)),r}function y5(e,t,n,r){const{top:i,left:a,bottom:o,right:l,chart:c}=e,{chartArea:d,scales:u}=c;let p=0,h,m,f;const x=o-i,y=l-a;if(e.isHorizontal()){if(m=$e(r,a,l),ne(n)){const g=Object.keys(n)[0],v=n[g];f=u[g].getPixelForValue(v)+x-t}else n==="center"?f=(d.bottom+d.top)/2+x-t:f=Zp(e,n,t);h=l-a}else{if(ne(n)){const g=Object.keys(n)[0],v=n[g];m=u[g].getPixelForValue(v)-y+t}else n==="center"?m=(d.left+d.right)/2-y+t:m=Zp(e,n,t);f=$e(r,o,i),p=n==="left"?-De:De}return{titleX:m,titleY:f,maxWidth:h,rotation:p}}class fi extends Lt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return t=Ht(t,Number.POSITIVE_INFINITY),n=Ht(n,Number.NEGATIVE_INFINITY),r=Ht(r,Number.POSITIVE_INFINITY),i=Ht(i,Number.NEGATIVE_INFINITY),{min:Ht(t,r),max:Ht(n,i),minDefined:St(t),maxDefined:St(n)}}getMinMax(t){let{min:n,max:r,minDefined:i,maxDefined:a}=this.getUserBounds(),o;if(i&&a)return{min:n,max:r};const l=this.getMatchingVisibleMetas();for(let c=0,d=l.length;c<d;++c)o=l[c].controller.getMinMax(this,t),i||(n=Math.min(n,o.min)),a||(r=Math.max(r,o.max));return n=a&&n>r?r:n,r=i&&n>r?n:r,{min:Ht(n,Ht(r,n)),max:Ht(r,Ht(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){me(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:i,grace:a,ticks:o}=this.options,l=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=C4(this,a,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=l<this.ticks.length;this._convertTicksToLabels(c?ef(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=l5(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){me(this.options.afterUpdate,[this])}beforeSetDimensions(){me(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){me(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),me(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){me(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,i,a;for(r=0,i=t.length;r<i;r++)a=t[r],a.label=me(n.callback,[a.value,r,t],this)}afterTickToLabelConversion(){me(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){me(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=Jp(this.ticks.length,t.ticks.maxTicksLimit),i=n.minRotation||0,a=n.maxRotation;let o=i,l,c,d;if(!this._isVisible()||!n.display||i>=a||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),p=u.widest.width,h=u.highest.height,m=Ye(this.chart.width-p,0,this.maxWidth);l=t.offset?this.maxWidth/r:m/(r-1),p+6>l&&(l=m/(r-(t.offset?.5:1)),c=this.maxHeight-Ci(t.grid)-n.padding-tf(t.title,this.chart.options.font),d=Math.sqrt(p*p+h*h),o=Zw(Math.min(Math.asin(Ye((u.highest.height+6)/l,-1,1)),Math.asin(Ye(c/d,-1,1))-Math.asin(Ye(h/d,-1,1)))),o=Math.max(i,Math.min(a,o))),this.labelRotation=o}afterCalculateLabelRotation(){me(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){me(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:a}}=this,o=this._isVisible(),l=this.isHorizontal();if(o){const c=tf(i,n.options.font);if(l?(t.width=this.maxWidth,t.height=Ci(a)+c):(t.height=this.maxHeight,t.width=Ci(a)+c),r.display&&this.ticks.length){const{first:d,last:u,widest:p,highest:h}=this._getLabelSizes(),m=r.padding*2,f=sr(this.labelRotation),x=Math.cos(f),y=Math.sin(f);if(l){const g=r.mirror?0:y*p.width+x*h.height;t.height=Math.min(this.maxHeight,t.height+g+m)}else{const g=r.mirror?0:x*p.width+y*h.height;t.width=Math.min(this.maxWidth,t.width+g+m)}this._calculatePadding(d,u,y,x)}}this._handleMargins(),l?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,i){const{ticks:{align:a,padding:o},position:l}=this.options,c=this.labelRotation!==0,d=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,p=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,m=0;c?d?(h=i*t.width,m=r*n.height):(h=r*t.height,m=i*n.width):a==="start"?m=n.width:a==="end"?h=t.width:a!=="inner"&&(h=t.width/2,m=n.width/2),this.paddingLeft=Math.max((h-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((m-p+o)*this.width/(this.width-p),0)}else{let u=n.height/2,p=t.height/2;a==="start"?(u=0,p=t.height):a==="end"&&(u=n.height,p=0),this.paddingTop=u+o,this.paddingBottom=p+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){me(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)se(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=ef(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:i,_longestTextCache:a}=this,o=[],l=[],c=Math.floor(n/Jp(n,r));let d=0,u=0,p,h,m,f,x,y,g,v,b,k,j;for(p=0;p<n;p+=c){if(f=t[p].label,x=this._resolveTickFontOptions(p),i.font=y=x.string,g=a[y]=a[y]||{data:{},gc:[]},v=x.lineHeight,b=k=0,!se(f)&&!Re(f))b=zp(i,g.data,g.gc,b,f),k=v;else if(Re(f))for(h=0,m=f.length;h<m;++h)j=f[h],!se(j)&&!Re(j)&&(b=zp(i,g.data,g.gc,b,j),k+=v);o.push(b),l.push(k),d=Math.max(b,d),u=Math.max(k,u)}g5(a,n);const N=o.indexOf(d),S=l.indexOf(u),_=A=>({width:o[A]||0,height:l[A]||0});return{first:_(0),last:_(n-1),widest:_(N),highest:_(S),widths:o,heights:l}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return e4(this._alignToPixels?Kn(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=v5(this.getContext(),t,r))}return this.$context||(this.$context=x5(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=sr(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),a=this._getLabelSizes(),o=t.autoSkipPadding||0,l=a?a.widest.width+o:0,c=a?a.highest.height+o:0;return this.isHorizontal()?c*r>l*i?l/r:c/i:c*i<l*r?c/r:l/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,i=this.options,{grid:a,position:o,border:l}=i,c=a.offset,d=this.isHorizontal(),p=this.ticks.length+(c?1:0),h=Ci(a),m=[],f=l.setContext(this.getContext()),x=f.display?f.width:0,y=x/2,g=function(T){return Kn(r,T,x)};let v,b,k,j,N,S,_,A,R,I,U,B;if(o==="top")v=g(this.bottom),S=this.bottom-h,A=v-y,I=g(t.top)+y,B=t.bottom;else if(o==="bottom")v=g(this.top),I=t.top,B=g(t.bottom)-y,S=v+y,A=this.top+h;else if(o==="left")v=g(this.right),N=this.right-h,_=v-y,R=g(t.left)+y,U=t.right;else if(o==="right")v=g(this.left),R=t.left,U=g(t.right)-y,N=v+y,_=this.left+h;else if(n==="x"){if(o==="center")v=g((t.top+t.bottom)/2+.5);else if(ne(o)){const T=Object.keys(o)[0],V=o[T];v=g(this.chart.scales[T].getPixelForValue(V))}I=t.top,B=t.bottom,S=v+y,A=S+h}else if(n==="y"){if(o==="center")v=g((t.left+t.right)/2);else if(ne(o)){const T=Object.keys(o)[0],V=o[T];v=g(this.chart.scales[T].getPixelForValue(V))}N=v-y,_=N-h,R=t.left,U=t.right}const F=Q(i.ticks.maxTicksLimit,p),P=Math.max(1,Math.ceil(p/F));for(b=0;b<p;b+=P){const T=this.getContext(b),V=a.setContext(T),z=l.setContext(T),C=V.lineWidth,O=V.color,K=z.dash||[],X=z.dashOffset,ve=V.tickWidth,ce=V.tickColor,_e=V.tickBorderDash||[],Ce=V.tickBorderDashOffset;k=m5(this,b,c),k!==void 0&&(j=Kn(r,k,C),d?N=_=R=U=j:S=A=I=B=j,m.push({tx1:N,ty1:S,tx2:_,ty2:A,x1:R,y1:I,x2:U,y2:B,width:C,color:O,borderDash:K,borderDashOffset:X,tickWidth:ve,tickColor:ce,tickBorderDash:_e,tickBorderDashOffset:Ce}))}return this._ticksLength=p,this._borderValue=v,m}_computeLabelItems(t){const n=this.axis,r=this.options,{position:i,ticks:a}=r,o=this.isHorizontal(),l=this.ticks,{align:c,crossAlign:d,padding:u,mirror:p}=a,h=Ci(r.grid),m=h+u,f=p?-u:m,x=-sr(this.labelRotation),y=[];let g,v,b,k,j,N,S,_,A,R,I,U,B="middle";if(i==="top")N=this.bottom-f,S=this._getXAxisLabelAlignment();else if(i==="bottom")N=this.top+f,S=this._getXAxisLabelAlignment();else if(i==="left"){const P=this._getYAxisLabelAlignment(h);S=P.textAlign,j=P.x}else if(i==="right"){const P=this._getYAxisLabelAlignment(h);S=P.textAlign,j=P.x}else if(n==="x"){if(i==="center")N=(t.top+t.bottom)/2+m;else if(ne(i)){const P=Object.keys(i)[0],T=i[P];N=this.chart.scales[P].getPixelForValue(T)+m}S=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")j=(t.left+t.right)/2-m;else if(ne(i)){const P=Object.keys(i)[0],T=i[P];j=this.chart.scales[P].getPixelForValue(T)}S=this._getYAxisLabelAlignment(h).textAlign}n==="y"&&(c==="start"?B="top":c==="end"&&(B="bottom"));const F=this._getLabelSizes();for(g=0,v=l.length;g<v;++g){b=l[g],k=b.label;const P=a.setContext(this.getContext(g));_=this.getPixelForTick(g)+a.labelOffset,A=this._resolveTickFontOptions(g),R=A.lineHeight,I=Re(k)?k.length:1;const T=I/2,V=P.color,z=P.textStrokeColor,C=P.textStrokeWidth;let O=S;o?(j=_,S==="inner"&&(g===v-1?O=this.options.reverse?"left":"right":g===0?O=this.options.reverse?"right":"left":O="center"),i==="top"?d==="near"||x!==0?U=-I*R+R/2:d==="center"?U=-F.highest.height/2-T*R+R:U=-F.highest.height+R/2:d==="near"||x!==0?U=R/2:d==="center"?U=F.highest.height/2-T*R:U=F.highest.height-I*R,p&&(U*=-1),x!==0&&!P.showLabelBackdrop&&(j+=R/2*Math.sin(x))):(N=_,U=(1-I)*R/2);let K;if(P.showLabelBackdrop){const X=Nt(P.backdropPadding),ve=F.heights[g],ce=F.widths[g];let _e=U-X.top,Ce=0-X.left;switch(B){case"middle":_e-=ve/2;break;case"bottom":_e-=ve;break}switch(S){case"center":Ce-=ce/2;break;case"right":Ce-=ce;break;case"inner":g===v-1?Ce-=ce:g>0&&(Ce-=ce/2);break}K={left:Ce,top:_e,width:ce+X.width,height:ve+X.height,color:P.backdropColor}}y.push({label:k,font:A,textOffset:U,options:{rotation:x,color:V,strokeColor:z,strokeWidth:C,textAlign:O,textBaseline:B,translation:[j,N],backdrop:K}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-sr(this.labelRotation))return t==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:i,padding:a}}=this.options,o=this._getLabelSizes(),l=t+a,c=o.widest.width;let d,u;return n==="left"?i?(u=this.right+a,r==="near"?d="left":r==="center"?(d="center",u+=c/2):(d="right",u+=c)):(u=this.right-l,r==="near"?d="right":r==="center"?(d="center",u-=c/2):(d="left",u=this.left)):n==="right"?i?(u=this.left+a,r==="near"?d="right":r==="center"?(d="center",u-=c/2):(d="left",u-=c)):(u=this.left+l,r==="near"?d="left":r==="center"?(d="center",u+=c/2):(d="right",u=this.right)):d="right",{textAlign:d,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:i,width:a,height:o}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,i,a,o),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(a=>a.value===t);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let a,o;const l=(c,d,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(c.x,c.y),r.lineTo(d.x,d.y),r.stroke(),r.restore())};if(n.display)for(a=0,o=i.length;a<o;++a){const c=i[a];n.drawOnChartArea&&l({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&l({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:i}}=this,a=r.setContext(this.getContext()),o=r.display?a.width:0;if(!o)return;const l=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let d,u,p,h;this.isHorizontal()?(d=Kn(t,this.left,o)-o/2,u=Kn(t,this.right,l)+l/2,p=h=c):(p=Kn(t,this.top,o)-o/2,h=Kn(t,this.bottom,l)+l/2,d=u=c),n.save(),n.lineWidth=a.width,n.strokeStyle=a.color,n.beginPath(),n.moveTo(d,p),n.lineTo(u,h),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&yu(r,i);const a=this.getLabelItems(t);for(const o of a){const l=o.options,c=o.font,d=o.label,u=o.textOffset;js(r,d,0,u,c,l)}i&&wu(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const a=Ke(r.font),o=Nt(r.padding),l=r.align;let c=a.lineHeight/2;n==="bottom"||n==="center"||ne(n)?(c+=o.bottom,Re(r.text)&&(c+=a.lineHeight*(r.text.length-1))):c+=o.top;const{titleX:d,titleY:u,maxWidth:p,rotation:h}=y5(this,c,n,l);js(t,r.text,0,0,a,{color:r.color,maxWidth:p,rotation:h,textAlign:b5(l,n,i),textBaseline:"middle",translation:[d,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=Q(t.grid&&t.grid.z,-1),i=Q(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==fi.prototype.draw?[{z:n,draw:a=>{this.draw(a)}}]:[{z:r,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let a,o;for(a=0,o=n.length;a<o;++a){const l=n[a];l[r]===this.id&&(!t||l.type===t)&&i.push(l)}return i}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return Ke(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class ha{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;k5(n)&&(r=this.register(n));const i=this.items,a=t.id,o=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in i||(i[a]=t,w5(t,o,r),this.override&&Me.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,i=this.scope;r in n&&delete n[r],i&&r in Me[i]&&(delete Me[i][r],this.override&&delete xr[r])}}function w5(e,t,n){const r=vs(Object.create(null),[n?Me.get(n):{},Me.get(t),e.defaults]);Me.set(t,r),e.defaultRoutes&&j5(t,e.defaultRoutes),e.descriptors&&Me.describe(t,e.descriptors)}function j5(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),i=r.pop(),a=[e].concat(r).join("."),o=t[n].split("."),l=o.pop(),c=o.join(".");Me.route(a,i,c,l)})}function k5(e){return"id"in e&&"defaults"in e}class S5{constructor(){this.controllers=new ha(qr,"datasets",!0),this.elements=new ha(Lt,"elements"),this.plugins=new ha(Object,"plugins"),this.scales=new ha(fi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(i=>{const a=r||this._getRegistryForType(i);r||a.isForType(i)||a===this.plugins&&i.id?this._exec(t,a,i):ae(i,o=>{const l=r||this._getRegistryForType(o);this._exec(t,l,o)})})}_exec(t,n,r){const i=mu(t);me(r["before"+i],[],r),n[t](r),me(r["after"+i],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const i=n.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return i}}var Vt=new S5;class N5{constructor(){this._init=void 0}notify(t,n,r,i){if(n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const a=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(a,t,n,r);return n==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,n,r,i){i=i||{};for(const a of t){const o=a.plugin,l=o[r],c=[n,i,a.options];if(me(l,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){se(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,i=Q(r.options&&r.options.plugins,{}),a=_5(r);return i===!1&&!n?[]:z5(t,a,i,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,i=(a,o)=>a.filter(l=>!o.some(c=>l.plugin.id===c.plugin.id));this._notify(i(n,r),t,"stop"),this._notify(i(r,n),t,"start")}}function _5(e){const t={},n=[],r=Object.keys(Vt.plugins.items);for(let a=0;a<r.length;a++)n.push(Vt.getPlugin(r[a]));const i=e.plugins||[];for(let a=0;a<i.length;a++){const o=i[a];n.indexOf(o)===-1&&(n.push(o),t[o.id]=!0)}return{plugins:n,localIds:t}}function C5(e,t){return!t&&e===!1?null:e===!0?{}:e}function z5(e,{plugins:t,localIds:n},r,i){const a=[],o=e.getContext();for(const l of t){const c=l.id,d=C5(r[c],i);d!==null&&a.push({plugin:l,options:M5(e.config,{plugin:l,local:n[c]},d,o)})}return a}function M5(e,{plugin:t,local:n},r,i){const a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Zc(e,t){const n=Me.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function E5(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function P5(e,t){return e===t?"_index_":"_value_"}function nf(e){if(e==="x"||e==="y"||e==="r")return e}function R5(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Jc(e,...t){if(nf(e))return e;for(const n of t){const r=n.axis||R5(n.position)||e.length>1&&nf(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function rf(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function A5(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return rf(e,"x",n[0])||rf(e,"y",n[0])}return{}}function T5(e,t){const n=xr[e.type]||{scales:{}},r=t.scales||{},i=Zc(e.type,t),a=Object.create(null);return Object.keys(r).forEach(o=>{const l=r[o];if(!ne(l))return console.error(`Invalid scale configuration for scale: ${o}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=Jc(o,l,A5(o,e),Me.scales[l.type]),d=P5(c,i),u=n.scales||{};a[o]=Ki(Object.create(null),[{axis:c},l,u[c],u[d]])}),e.data.datasets.forEach(o=>{const l=o.type||e.type,c=o.indexAxis||Zc(l,t),u=(xr[l]||{}).scales||{};Object.keys(u).forEach(p=>{const h=E5(p,c),m=o[h+"AxisID"]||h;a[m]=a[m]||Object.create(null),Ki(a[m],[{axis:h},r[m],u[p]])})}),Object.keys(a).forEach(o=>{const l=a[o];Ki(l,[Me.scales[l.type],Me.scale])}),a}function v1(e){const t=e.options||(e.options={});t.plugins=Q(t.plugins,{}),t.scales=T5(e,t)}function b1(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function L5(e){return e=e||{},e.data=b1(e.data),v1(e),e}const sf=new Map,y1=new Set;function pa(e,t){let n=sf.get(e);return n||(n=t(),sf.set(e,n),y1.add(n)),n}const zi=(e,t,n)=>{const r=ni(t,n);r!==void 0&&e.add(r)};class O5{constructor(t){this._config=L5(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=b1(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),v1(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return pa(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return pa(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return pa(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return pa(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let i=r.get(t);return(!i||n)&&(i=new Map,r.set(t,i)),i}getOptionScopes(t,n,r){const{options:i,type:a}=this,o=this._cachedScopes(t,r),l=o.get(n);if(l)return l;const c=new Set;n.forEach(u=>{t&&(c.add(t),u.forEach(p=>zi(c,t,p))),u.forEach(p=>zi(c,i,p)),u.forEach(p=>zi(c,xr[a]||{},p)),u.forEach(p=>zi(c,Me,p)),u.forEach(p=>zi(c,Gc,p))});const d=Array.from(c);return d.length===0&&d.push(Object.create(null)),y1.has(n)&&o.set(n,d),d}chartOptionScopes(){const{options:t,type:n}=this;return[t,xr[n]||{},Me.datasets[n]||{},{type:n},Me,Gc]}resolveNamedOptions(t,n,r,i=[""]){const a={$shared:!0},{resolver:o,subPrefixes:l}=af(this._resolverCache,t,i);let c=o;if(D5(o,n)){a.$shared=!1,r=Un(r)?r():r;const d=this.createResolver(t,r,l);c=ri(o,r,d)}for(const d of n)a[d]=c[d];return a}createResolver(t,n,r=[""],i){const{resolver:a}=af(this._resolverCache,t,r);return ne(n)?ri(a,n,void 0,i):a}}function af(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const i=n.join();let a=r.get(i);return a||(a={resolver:ku(t,n),subPrefixes:n.filter(l=>!l.toLowerCase().includes("hover"))},r.set(i,a)),a}const I5=e=>ne(e)&&Object.getOwnPropertyNames(e).some(t=>Un(e[t]));function D5(e,t){const{isScriptable:n,isIndexable:r}=n1(e);for(const i of t){const a=n(i),o=r(i),l=(o||a)&&e[i];if(a&&(Un(l)||I5(l))||o&&Re(l))return!0}return!1}var F5="4.5.1";const B5=["top","bottom","left","right","chartArea"];function of(e,t){return e==="top"||e==="bottom"||B5.indexOf(e)===-1&&t==="x"}function lf(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function cf(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),me(n&&n.onComplete,[e],t)}function H5(e){const t=e.chart,n=t.options.animation;me(n&&n.onProgress,[e],t)}function w1(e){return _u()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const La={},df=e=>{const t=w1(e);return Object.values(La).filter(n=>n.canvas===t).pop()};function U5(e,t,n){const r=Object.keys(e);for(const i of r){const a=+i;if(a>=t){const o=e[i];delete e[i],(n>0||a>t)&&(e[a+n]=o)}}}function W5(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}var vn;let Go=(vn=class{static register(...t){Vt.add(...t),uf()}static unregister(...t){Vt.remove(...t),uf()}constructor(t,n){const r=this.config=new O5(n),i=w1(t),a=df(i);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||o5(i)),this.platform.updateConfig(r);const l=this.platform.acquireContext(i,o.aspectRatio),c=l&&l.canvas,d=c&&c.height,u=c&&c.width;if(this.id=Fw(),this.ctx=l,this.canvas=c,this.width=u,this.height=d,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new N5,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=i4(p=>this.update(p),o.resizeDelay||0),this._dataChanges=[],La[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}Jt.listen(this,"complete",cf),Jt.listen(this,"progress",H5),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:i,_aspectRatio:a}=this;return se(t)?n&&a?a:i?r/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Vt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Rp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Mp(this.canvas,this.ctx),this}stop(){return Jt.stop(this),this}resize(t,n){Jt.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,i=this.canvas,a=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,n,a),l=r.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Rp(this,l,!0)&&(this.notifyPlugins("resize",{size:o}),me(r.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ae(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,i=Object.keys(r).reduce((o,l)=>(o[l]=!1,o),{});let a=[];n&&(a=a.concat(Object.keys(n).map(o=>{const l=n[o],c=Jc(o,l),d=c==="r",u=c==="x";return{options:l,dposition:d?"chartArea":u?"bottom":"left",dtype:d?"radialLinear":u?"category":"linear"}}))),ae(a,o=>{const l=o.options,c=l.id,d=Jc(c,l),u=Q(l.type,o.dtype);(l.position===void 0||of(l.position,d)!==of(o.dposition))&&(l.position=o.dposition),i[c]=!0;let p=null;if(c in r&&r[c].type===u)p=r[c];else{const h=Vt.getScale(u);p=new h({id:c,type:u,ctx:this.ctx,chart:this}),r[p.id]=p}p.init(l,t)}),ae(i,(o,l)=>{o||delete r[l]}),ae(r,o=>{yt.configure(this,o,o.options),yt.addBox(this,o)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((i,a)=>i.index-a.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(lf("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,i)=>{n.filter(a=>a===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const a=n[r];let o=this.getDatasetMeta(r);const l=a.type||this.config.type;if(o.type&&o.type!==l&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=l,o.indexAxis=a.indexAxis||Zc(l,this.options),o.order=a.order||0,o.index=r,o.label=""+a.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const c=Vt.getController(l),{datasetElementType:d,dataElementType:u}=Me.datasets[l];Object.assign(c,{dataElementType:Vt.getElement(u),datasetElementType:d&&Vt.getElement(d)}),o.controller=new c(this,r),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){ae(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let d=0,u=this.data.datasets.length;d<u;d++){const{controller:p}=this.getDatasetMeta(d),h=!i&&a.indexOf(p)===-1;p.buildOrUpdateElements(h),o=Math.max(+p.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||ae(a,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(lf("z","_idx"));const{_active:l,_lastEvent:c}=this;c?this._eventHandler(c,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){ae(this.scales,t=>{yt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!bp(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:a}of n){const o=r==="_removeElements"?-a:a;U5(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=a=>new Set(t.filter(o=>o[0]===a).map((o,l)=>l+","+o.splice(1).join(","))),i=r(0);for(let a=1;a<n;a++)if(!bp(i,r(a)))return;return Array.from(i).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;yt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],ae(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,a)=>{i._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,Un(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),i={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Jt.has(this)?this.attached&&!Jt.running(this)&&Jt.start(this):(this.draw(),cf({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let i,a;for(i=0,a=n.length;i<a;++i){const o=n[i];(!t||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r={meta:t,index:t.index,cancelable:!0},i=dj(this,t);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(i&&yu(n,i),t.controller.draw(),i&&wu(n),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return ws(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,i){const a=Bj.modes[n];return typeof a=="function"?a(this,t,r,i):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let i=r.filter(a=>a&&a._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=yr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const i=r?"show":"hide",a=this.getDatasetMeta(t),o=a.controller._resolveAnimations(void 0,i);bs(n)?(a.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),o.update(a,{visible:r}),this.update(l=>l.datasetIndex===t?i:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Jt.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Mp(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete La[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(a,o)=>{n.addEventListener(this,a,o),t[a]=o},i=(a,o,l)=>{a.offsetX=o,a.offsetY=l,this._eventHandler(a)};ae(this.options.events,a=>r(a,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(c,d)=>{n.addEventListener(this,c,d),t[c]=d},i=(c,d)=>{t[c]&&(n.removeEventListener(this,c,d),delete t[c])},a=(c,d)=>{this.canvas&&this.resize(c,d)};let o;const l=()=>{i("attach",l),this.attached=!0,this.resize(),r("resize",a),r("detach",o)};o=()=>{this.attached=!1,i("resize",a),this._stop(),this._resize(0,0),r("attach",l)},n.isAttached(this.canvas)?l():o()}unbindEvents(){ae(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},ae(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const i=r?"set":"remove";let a,o,l,c;for(n==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+i+"DatasetHoverStyle"]()),l=0,c=t.length;l<c;++l){o=t[l];const d=o&&this.getDatasetMeta(o.datasetIndex).controller;d&&d[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:a,index:o})=>{const l=this.getDatasetMeta(a);if(!l)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:l.data[o],index:o}});!go(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const i=this.options.hover,a=(c,d)=>c.filter(u=>!d.some(p=>u.datasetIndex===p.datasetIndex&&u.index===p.index)),o=a(n,t),l=r?t:a(t,n);o.length&&this.updateHoverStyle(o,i.mode,!1),l.length&&i.mode&&this.updateHoverStyle(l,i.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const a=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(a||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:i=[],options:a}=this,o=n,l=this._getActiveElements(t,i,r,o),c=Vw(t),d=W5(t,this._lastEvent,r,c);r&&(this._lastEvent=null,me(a.onHover,[t,l,this],this),c&&me(a.onClick,[t,l,this],this));const u=!go(l,i);return(u||n)&&(this._active=l,this._updateHoverStyles(l,i,n)),this._lastEvent=d,u}_getActiveElements(t,n,r,i){if(t.type==="mouseout")return[];if(!r)return n;const a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,i)}},q(vn,"defaults",Me),q(vn,"instances",La),q(vn,"overrides",xr),q(vn,"registry",Vt),q(vn,"version",F5),q(vn,"getChart",df),vn);function uf(){return ae(Go.instances,e=>e._plugins.invalidate())}function $5(e,t,n){const{startAngle:r,x:i,y:a,outerRadius:o,innerRadius:l,options:c}=t,{borderWidth:d,borderJoinStyle:u}=c,p=Math.min(d/o,Et(r-n));if(e.beginPath(),e.arc(i,a,o-d/2,r+p/2,n-p/2),l>0){const h=Math.min(d/l,Et(r-n));e.arc(i,a,l+d/2,n-h/2,r+h/2,!0)}else{const h=Math.min(d/2,o*Et(r-n));if(u==="round")e.arc(i,a,h,n-ue/2,r+ue/2,!0);else if(u==="bevel"){const m=2*h*h,f=-m*Math.cos(n+ue/2)+i,x=-m*Math.sin(n+ue/2)+a,y=m*Math.cos(r+ue/2)+i,g=m*Math.sin(r+ue/2)+a;e.lineTo(f,x),e.lineTo(y,g)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function V5(e,t,n){const{startAngle:r,pixelMargin:i,x:a,y:o,outerRadius:l,innerRadius:c}=t;let d=i/l;e.beginPath(),e.arc(a,o,l,r-d,n+d),c>i?(d=i/c,e.arc(a,o,c,n+d,r-d,!0)):e.arc(a,o,i,n+De,r-De),e.closePath(),e.clip()}function q5(e){return ju(e,["outerStart","outerEnd","innerStart","innerEnd"])}function Y5(e,t,n,r){const i=q5(e.options.borderRadius),a=(n-t)/2,o=Math.min(a,r*t/2),l=c=>{const d=(n-Math.min(a,c))*r/2;return Ye(c,0,Math.min(a,d))};return{outerStart:l(i.outerStart),outerEnd:l(i.outerEnd),innerStart:Ye(i.innerStart,0,o),innerEnd:Ye(i.innerEnd,0,o)}}function Nr(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function jo(e,t,n,r,i,a){const{x:o,y:l,startAngle:c,pixelMargin:d,innerRadius:u}=t,p=Math.max(t.outerRadius+r+n-d,0),h=u>0?u+r+n+d:0;let m=0;const f=i-c;if(r){const P=u>0?u-r:0,T=p>0?p-r:0,V=(P+T)/2,z=V!==0?f*V/(V+r):f;m=(f-z)/2}const x=Math.max(.001,f*p-n/ue)/p,y=(f-x)/2,g=c+y+m,v=i-y-m,{outerStart:b,outerEnd:k,innerStart:j,innerEnd:N}=Y5(t,h,p,v-g),S=p-b,_=p-k,A=g+b/S,R=v-k/_,I=h+j,U=h+N,B=g+j/I,F=v-N/U;if(e.beginPath(),a){const P=(A+R)/2;if(e.arc(o,l,p,A,P),e.arc(o,l,p,P,R),k>0){const C=Nr(_,R,o,l);e.arc(C.x,C.y,k,R,v+De)}const T=Nr(U,v,o,l);if(e.lineTo(T.x,T.y),N>0){const C=Nr(U,F,o,l);e.arc(C.x,C.y,N,v+De,F+Math.PI)}const V=(v-N/h+(g+j/h))/2;if(e.arc(o,l,h,v-N/h,V,!0),e.arc(o,l,h,V,g+j/h,!0),j>0){const C=Nr(I,B,o,l);e.arc(C.x,C.y,j,B+Math.PI,g-De)}const z=Nr(S,g,o,l);if(e.lineTo(z.x,z.y),b>0){const C=Nr(S,A,o,l);e.arc(C.x,C.y,b,g-De,A)}}else{e.moveTo(o,l);const P=Math.cos(A)*p+o,T=Math.sin(A)*p+l;e.lineTo(P,T);const V=Math.cos(R)*p+o,z=Math.sin(R)*p+l;e.lineTo(V,z)}e.closePath()}function K5(e,t,n,r,i){const{fullCircles:a,startAngle:o,circumference:l}=t;let c=t.endAngle;if(a){jo(e,t,n,r,c,i);for(let d=0;d<a;++d)e.fill();isNaN(l)||(c=o+(l%Be||Be))}return jo(e,t,n,r,c,i),e.fill(),c}function X5(e,t,n,r,i){const{fullCircles:a,startAngle:o,circumference:l,options:c}=t,{borderWidth:d,borderJoinStyle:u,borderDash:p,borderDashOffset:h,borderRadius:m}=c,f=c.borderAlign==="inner";if(!d)return;e.setLineDash(p||[]),e.lineDashOffset=h,f?(e.lineWidth=d*2,e.lineJoin=u||"round"):(e.lineWidth=d,e.lineJoin=u||"bevel");let x=t.endAngle;if(a){jo(e,t,n,r,x,i);for(let y=0;y<a;++y)e.stroke();isNaN(l)||(x=o+(l%Be||Be))}f&&V5(e,t,x),c.selfJoin&&x-o>=ue&&m===0&&u!=="miter"&&$5(e,t,x),a||(jo(e,t,n,r,x,i),e.stroke())}class Oi extends Lt{constructor(n){super();q(this,"circumference");q(this,"endAngle");q(this,"fullCircles");q(this,"innerRadius");q(this,"outerRadius");q(this,"pixelMargin");q(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const a=this.getProps(["x","y"],i),{angle:o,distance:l}=Yg(a,{x:n,y:r}),{startAngle:c,endAngle:d,innerRadius:u,outerRadius:p,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,f=Q(h,d-c),x=gu(o,c,d)&&c!==d,y=f>=Be||x,g=Cn(l,u+m,p+m);return y&&g}getCenterPoint(n){const{x:r,y:i,startAngle:a,endAngle:o,innerRadius:l,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:d,spacing:u}=this.options,p=(a+o)/2,h=(l+c+u+d)/2;return{x:r+Math.cos(p)*h,y:i+Math.sin(p)*h}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,a=(r.offset||0)/4,o=(r.spacing||0)/2,l=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>Be?Math.floor(i/Be):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const c=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(c)*a,Math.sin(c)*a);const d=1-Math.sin(Math.min(ue,i||0)),u=a*d;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,K5(n,this,u,o,l),X5(n,this,u,o,l),n.restore()}}q(Oi,"id","arc"),q(Oi,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),q(Oi,"defaultRoutes",{backgroundColor:"backgroundColor"}),q(Oi,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function j1(e,t,n=t){e.lineCap=Q(n.borderCapStyle,t.borderCapStyle),e.setLineDash(Q(n.borderDash,t.borderDash)),e.lineDashOffset=Q(n.borderDashOffset,t.borderDashOffset),e.lineJoin=Q(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Q(n.borderWidth,t.borderWidth),e.strokeStyle=Q(n.borderColor,t.borderColor)}function G5(e,t,n){e.lineTo(n.x,n.y)}function Q5(e){return e.stepped?v4:e.tension||e.cubicInterpolationMode==="monotone"?b4:G5}function k1(e,t,n={}){const r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:l}=t,c=Math.max(i,o),d=Math.min(a,l),u=i<o&&a<o||i>l&&a>l;return{count:r,start:c,loop:t.loop,ilen:d<c&&!u?r+d-c:d-c}}function Z5(e,t,n,r){const{points:i,options:a}=t,{count:o,start:l,loop:c,ilen:d}=k1(i,n,r),u=Q5(a);let{move:p=!0,reverse:h}=r||{},m,f,x;for(m=0;m<=d;++m)f=i[(l+(h?d-m:m))%o],!f.skip&&(p?(e.moveTo(f.x,f.y),p=!1):u(e,x,f,h,a.stepped),x=f);return c&&(f=i[(l+(h?d:0))%o],u(e,x,f,h,a.stepped)),!!c}function J5(e,t,n,r){const i=t.points,{count:a,start:o,ilen:l}=k1(i,n,r),{move:c=!0,reverse:d}=r||{};let u=0,p=0,h,m,f,x,y,g;const v=k=>(o+(d?l-k:k))%a,b=()=>{x!==y&&(e.lineTo(u,y),e.lineTo(u,x),e.lineTo(u,g))};for(c&&(m=i[v(0)],e.moveTo(m.x,m.y)),h=0;h<=l;++h){if(m=i[v(h)],m.skip)continue;const k=m.x,j=m.y,N=k|0;N===f?(j<x?x=j:j>y&&(y=j),u=(p*u+k)/++p):(b(),e.lineTo(k,j),f=N,p=0,x=y=j),g=j}b()}function ed(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?J5:Z5}function e6(e){return e.stepped?Q4:e.tension||e.cubicInterpolationMode==="monotone"?Z4:Jn}function t6(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),j1(e,t.options),e.stroke(i)}function n6(e,t,n,r){const{segments:i,options:a}=t,o=ed(t);for(const l of i)j1(e,a,l.style),e.beginPath(),o(e,t,l,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const r6=typeof Path2D=="function";function i6(e,t,n,r){r6&&!t.options.segment?t6(e,t,n,r):n6(e,t,n,r)}class Ii extends Lt{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;W4(this._points,r,t,i,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=aj(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,i=t[n],a=this.points,o=rj(this,{property:n,start:i,end:i});if(!o.length)return;const l=[],c=e6(r);let d,u;for(d=0,u=o.length;d<u;++d){const{start:p,end:h}=o[d],m=a[p],f=a[h];if(m===f){l.push(m);continue}const x=Math.abs((i-m[n])/(f[n]-m[n])),y=c(m,f,x,r.stepped);y[n]=t[n],l.push(y)}return l.length===1?l[0]:l}pathSegment(t,n,r){return ed(this)(t,this,n,r)}path(t,n,r){const i=this.segments,a=ed(this);let o=this._loop;n=n||0,r=r||this.points.length-n;for(const l of i)o&=a(t,this,l,{start:n,end:n+r-1});return!!o}draw(t,n,r,i){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),i6(t,this,r,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}q(Ii,"id","line"),q(Ii,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),q(Ii,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),q(Ii,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function hf(e,t,n,r){const i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}class Oa extends Lt{constructor(n){super();q(this,"parsed");q(this,"skip");q(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const a=this.options,{x:o,y:l}=this.getProps(["x","y"],i);return Math.pow(n-o,2)+Math.pow(r-l,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(n,r){return hf(this,n,"x",r)}inYRange(n,r){return hf(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!ws(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,Qc(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}q(Oa,"id","point"),q(Oa,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),q(Oa,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function S1(e,t){const{x:n,y:r,base:i,width:a,height:o}=e.getProps(["x","y","base","width","height"],t);let l,c,d,u,p;return e.horizontal?(p=o/2,l=Math.min(n,i),c=Math.max(n,i),d=r-p,u=r+p):(p=a/2,l=n-p,c=n+p,d=Math.min(r,i),u=Math.max(r,i)),{left:l,top:d,right:c,bottom:u}}function Mn(e,t,n,r){return e?0:Ye(t,n,r)}function s6(e,t,n){const r=e.options.borderWidth,i=e.borderSkipped,a=t1(r);return{t:Mn(i.top,a.top,0,n),r:Mn(i.right,a.right,0,t),b:Mn(i.bottom,a.bottom,0,n),l:Mn(i.left,a.left,0,t)}}function a6(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),i=e.options.borderRadius,a=$r(i),o=Math.min(t,n),l=e.borderSkipped,c=r||ne(i);return{topLeft:Mn(!c||l.top||l.left,a.topLeft,0,o),topRight:Mn(!c||l.top||l.right,a.topRight,0,o),bottomLeft:Mn(!c||l.bottom||l.left,a.bottomLeft,0,o),bottomRight:Mn(!c||l.bottom||l.right,a.bottomRight,0,o)}}function o6(e){const t=S1(e),n=t.right-t.left,r=t.bottom-t.top,i=s6(e,n/2,r/2),a=a6(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function Bl(e,t,n,r){const i=t===null,a=n===null,l=e&&!(i&&a)&&S1(e,r);return l&&(i||Cn(t,l.left,l.right))&&(a||Cn(n,l.top,l.bottom))}function l6(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function c6(e,t){e.rect(t.x,t.y,t.w,t.h)}function Hl(e,t,n={}){const r=e.x!==n.x?-t:0,i=e.y!==n.y?-t:0,a=(e.x+e.w!==n.x+n.w?t:0)-r,o=(e.y+e.h!==n.y+n.h?t:0)-i;return{x:e.x+r,y:e.y+i,w:e.w+a,h:e.h+o,radius:e.radius}}class Ia extends Lt{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:a,outer:o}=o6(this),l=l6(o.radius)?bo:c6;t.save(),(o.w!==a.w||o.h!==a.h)&&(t.beginPath(),l(t,Hl(o,n,a)),t.clip(),l(t,Hl(a,-n,o)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),l(t,Hl(a,n)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,n,r){return Bl(this,t,n,r)}inXRange(t,n){return Bl(this,t,null,n)}inYRange(t,n){return Bl(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:i,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(n+i)/2:n,y:a?r:(r+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}q(Ia,"id","bar"),q(Ia,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),q(Ia,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const pf=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},d6=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class ff extends Lt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=me(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,i)=>t.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,i=Ke(r.font),a=i.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:c}=pf(r,a);let d,u;n.font=i.string,this.isHorizontal()?(d=this.maxWidth,u=this._fitRows(o,a,l,c)+10):(u=this.maxHeight,d=this._fitCols(o,i,l,c)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,i){const{ctx:a,maxWidth:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.lineWidths=[0],u=i+l;let p=t;a.textAlign="left",a.textBaseline="middle";let h=-1,m=-u;return this.legendItems.forEach((f,x)=>{const y=r+n/2+a.measureText(f.text).width;(x===0||d[d.length-1]+y+2*l>o)&&(p+=u,d[d.length-(x>0?0:1)]=0,m+=u,h++),c[x]={left:0,top:m,row:h,width:y,height:i},d[d.length-1]+=y+l}),p}_fitCols(t,n,r,i){const{ctx:a,maxHeight:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.columnSizes=[],u=o-t;let p=l,h=0,m=0,f=0,x=0;return this.legendItems.forEach((y,g)=>{const{itemWidth:v,itemHeight:b}=u6(r,n,a,y,i);g>0&&m+b+2*l>u&&(p+=h+l,d.push({width:h,height:m}),f+=h+l,x++,h=m=0),c[g]={left:f,top:m,col:x,width:v,height:b},h=Math.max(h,v),m+=b+l}),p+=h,d.push({width:h,height:m}),p}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:a}}=this,o=Vr(a,this.left,this.width);if(this.isHorizontal()){let l=0,c=$e(r,this.left+i,this.right-this.lineWidths[l]);for(const d of n)l!==d.row&&(l=d.row,c=$e(r,this.left+i,this.right-this.lineWidths[l])),d.top+=this.top+t+i,d.left=o.leftForLtr(o.x(c),d.width),c+=d.width+i}else{let l=0,c=$e(r,this.top+t+i,this.bottom-this.columnSizes[l].height);for(const d of n)d.col!==l&&(l=d.col,c=$e(r,this.top+t+i,this.bottom-this.columnSizes[l].height)),d.top=c,d.left+=this.left+i,d.left=o.leftForLtr(o.x(d.left),d.width),c+=d.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;yu(t,this),this._draw(),wu(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:i}=this,{align:a,labels:o}=t,l=Me.color,c=Vr(t.rtl,this.left,this.width),d=Ke(o.font),{padding:u}=o,p=d.size,h=p/2;let m;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=d.string;const{boxWidth:f,boxHeight:x,itemHeight:y}=pf(o,p),g=function(N,S,_){if(isNaN(f)||f<=0||isNaN(x)||x<0)return;i.save();const A=Q(_.lineWidth,1);if(i.fillStyle=Q(_.fillStyle,l),i.lineCap=Q(_.lineCap,"butt"),i.lineDashOffset=Q(_.lineDashOffset,0),i.lineJoin=Q(_.lineJoin,"miter"),i.lineWidth=A,i.strokeStyle=Q(_.strokeStyle,l),i.setLineDash(Q(_.lineDash,[])),o.usePointStyle){const R={radius:x*Math.SQRT2/2,pointStyle:_.pointStyle,rotation:_.rotation,borderWidth:A},I=c.xPlus(N,f/2),U=S+h;e1(i,R,I,U,o.pointStyleWidth&&f)}else{const R=S+Math.max((p-x)/2,0),I=c.leftForLtr(N,f),U=$r(_.borderRadius);i.beginPath(),Object.values(U).some(B=>B!==0)?bo(i,{x:I,y:R,w:f,h:x,radius:U}):i.rect(I,R,f,x),i.fill(),A!==0&&i.stroke()}i.restore()},v=function(N,S,_){js(i,_.text,N,S+y/2,d,{strikethrough:_.hidden,textAlign:c.textAlign(_.textAlign)})},b=this.isHorizontal(),k=this._computeTitleHeight();b?m={x:$e(a,this.left+u,this.right-r[0]),y:this.top+u+k,line:0}:m={x:this.left+u,y:$e(a,this.top+k+u,this.bottom-n[0].height),line:0},o1(this.ctx,t.textDirection);const j=y+u;this.legendItems.forEach((N,S)=>{i.strokeStyle=N.fontColor,i.fillStyle=N.fontColor;const _=i.measureText(N.text).width,A=c.textAlign(N.textAlign||(N.textAlign=o.textAlign)),R=f+h+_;let I=m.x,U=m.y;c.setWidth(this.width),b?S>0&&I+R+u>this.right&&(U=m.y+=j,m.line++,I=m.x=$e(a,this.left+u,this.right-r[m.line])):S>0&&U+j>this.bottom&&(I=m.x=I+n[m.line].width+u,m.line++,U=m.y=$e(a,this.top+k+u,this.bottom-n[m.line].height));const B=c.x(I);if(g(B,U,N),I=s4(A,I+f+h,b?I+R:this.right,t.rtl),v(c.x(I),U,N),b)m.x+=R+u;else if(typeof N.text!="string"){const F=d.lineHeight;m.y+=N1(N,F)+u}else m.y+=j}),l1(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=Ke(n.font),i=Nt(n.padding);if(!n.display)return;const a=Vr(t.rtl,this.left,this.width),o=this.ctx,l=n.position,c=r.size/2,d=i.top+c;let u,p=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+d,p=$e(t.align,p,this.right-h);else{const f=this.columnSizes.reduce((x,y)=>Math.max(x,y.height),0);u=d+$e(t.align,this.top,this.bottom-f-t.labels.padding-this._computeTitleHeight())}const m=$e(l,p,p+h);o.textAlign=a.textAlign(vu(l)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,js(o,n.text,m,u,r)}_computeTitleHeight(){const t=this.options.title,n=Ke(t.font),r=Nt(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,i,a;if(Cn(t,this.left,this.right)&&Cn(n,this.top,this.bottom)){for(a=this.legendHitBoxes,r=0;r<a.length;++r)if(i=a[r],Cn(t,i.left,i.left+i.width)&&Cn(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!f6(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,a=d6(i,r);i&&!a&&me(n.onLeave,[t,i,this],this),this._hoveredItem=r,r&&!a&&me(n.onHover,[t,r,this],this)}else r&&me(n.onClick,[t,r,this],this)}}function u6(e,t,n,r,i){const a=h6(r,e,t,n),o=p6(i,r,t.lineHeight);return{itemWidth:a,itemHeight:o}}function h6(e,t,n,r){let i=e.text;return i&&typeof i!="string"&&(i=i.reduce((a,o)=>a.length>o.length?a:o)),t+n.size/2+r.measureText(i).width}function p6(e,t,n){let r=e;return typeof t.text!="string"&&(r=N1(t,n)),r}function N1(e,t){const n=e.text?e.text.length:0;return t*n}function f6(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var m6={id:"legend",_element:ff,start(e,t,n){const r=e.legend=new ff({ctx:e.ctx,options:n,chart:e});yt.configure(e,r,n),yt.addBox(e,r)},stop(e){yt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;yt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:a,useBorderRadius:o,borderRadius:l}}=e.legend.options;return e._getSortedDatasetMetas().map(c=>{const d=c.controller.getStyle(n?0:void 0),u=Nt(d.borderWidth);return{text:t[c.index].label,fillStyle:d.backgroundColor,fontColor:a,hidden:!c.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:d.borderColor,pointStyle:r||d.pointStyle,rotation:d.rotation,textAlign:i||d.textAlign,borderRadius:o&&(l||d.borderRadius),datasetIndex:c.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class _1 extends Lt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const i=Re(r.text)?r.text.length:1;this._padding=Nt(r.padding);const a=i*Ke(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:i,right:a,options:o}=this,l=o.align;let c=0,d,u,p;return this.isHorizontal()?(u=$e(l,r,a),p=n+t,d=a-r):(o.position==="left"?(u=r+t,p=$e(l,i,n),c=ue*-.5):(u=a-t,p=$e(l,n,i),c=ue*.5),d=i-n),{titleX:u,titleY:p,maxWidth:d,rotation:c}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=Ke(n.font),a=r.lineHeight/2+this._padding.top,{titleX:o,titleY:l,maxWidth:c,rotation:d}=this._drawArgs(a);js(t,n.text,0,0,r,{color:n.color,maxWidth:c,rotation:d,textAlign:vu(n.align),textBaseline:"middle",translation:[o,l]})}}function g6(e,t){const n=new _1({ctx:e.ctx,options:t,chart:e});yt.configure(e,n,t),yt.addBox(e,n),e.titleBlock=n}var x6={id:"title",_element:_1,start(e,t,n){g6(e,n)},stop(e){const t=e.titleBlock;yt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;yt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Di={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){const l=e[t].element;if(l&&l.hasValue()){const c=l.tooltipPosition();r.add(c.x),i+=c.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((l,c)=>l+c)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=Number.POSITIVE_INFINITY,a,o,l;for(a=0,o=e.length;a<o;++a){const c=e[a].element;if(c&&c.hasValue()){const d=c.getCenterPoint(),u=Xc(t,d);u<i&&(i=u,l=c)}}if(l){const c=l.tooltipPosition();n=c.x,r=c.y}return{x:n,y:r}}};function Ut(e,t){return t&&(Re(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function en(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function v6(e,t){const{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:l}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:l,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function mf(e,t){const n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:l}=t,c=Ke(t.bodyFont),d=Ke(t.titleFont),u=Ke(t.footerFont),p=a.length,h=i.length,m=r.length,f=Nt(t.padding);let x=f.height,y=0,g=r.reduce((k,j)=>k+j.before.length+j.lines.length+j.after.length,0);if(g+=e.beforeBody.length+e.afterBody.length,p&&(x+=p*d.lineHeight+(p-1)*t.titleSpacing+t.titleMarginBottom),g){const k=t.displayColors?Math.max(l,c.lineHeight):c.lineHeight;x+=m*k+(g-m)*c.lineHeight+(g-1)*t.bodySpacing}h&&(x+=t.footerMarginTop+h*u.lineHeight+(h-1)*t.footerSpacing);let v=0;const b=function(k){y=Math.max(y,n.measureText(k).width+v)};return n.save(),n.font=d.string,ae(e.title,b),n.font=c.string,ae(e.beforeBody.concat(e.afterBody),b),v=t.displayColors?o+2+t.boxPadding:0,ae(r,k=>{ae(k.before,b),ae(k.lines,b),ae(k.after,b)}),v=0,n.font=u.string,ae(e.footer,b),n.restore(),y+=f.width,{width:y,height:x}}function b6(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function y6(e,t,n,r){const{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e==="left"&&i+a+o>t.width||e==="right"&&i-a-o<0)return!0}function w6(e,t,n,r){const{x:i,width:a}=n,{width:o,chartArea:{left:l,right:c}}=e;let d="center";return r==="center"?d=i<=(l+c)/2?"left":"right":i<=a/2?d="left":i>=o-a/2&&(d="right"),y6(d,e,t,n)&&(d="center"),d}function gf(e,t,n){const r=n.yAlign||t.yAlign||b6(e,n);return{xAlign:n.xAlign||t.xAlign||w6(e,t,n,r),yAlign:r}}function j6(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function k6(e,t,n){let{y:r,height:i}=e;return t==="top"?r+=n:t==="bottom"?r-=i+n:r-=i/2,r}function xf(e,t,n,r){const{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:l,yAlign:c}=n,d=i+a,{topLeft:u,topRight:p,bottomLeft:h,bottomRight:m}=$r(o);let f=j6(t,l);const x=k6(t,c,d);return c==="center"?l==="left"?f+=d:l==="right"&&(f-=d):l==="left"?f-=Math.max(u,h)+i:l==="right"&&(f+=Math.max(p,m)+i),{x:Ye(f,0,r.width-t.width),y:Ye(x,0,r.height-t.height)}}function fa(e,t,n){const r=Nt(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function vf(e){return Ut([],en(e))}function S6(e,t,n){return yr(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function bf(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const C1={beforeTitle:Zt,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Zt,beforeBody:Zt,beforeLabel:Zt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return se(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Zt,afterBody:Zt,beforeFooter:Zt,footer:Zt,afterFooter:Zt};function et(e,t,n,r){const i=e[t].call(n,r);return typeof i>"u"?C1[t].call(n,r):i}class td extends Lt{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,a=new d1(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=S6(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,i=et(r,"beforeTitle",this,t),a=et(r,"title",this,t),o=et(r,"afterTitle",this,t);let l=[];return l=Ut(l,en(i)),l=Ut(l,en(a)),l=Ut(l,en(o)),l}getBeforeBody(t,n){return vf(et(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,i=[];return ae(t,a=>{const o={before:[],lines:[],after:[]},l=bf(r,a);Ut(o.before,en(et(l,"beforeLabel",this,a))),Ut(o.lines,et(l,"label",this,a)),Ut(o.after,en(et(l,"afterLabel",this,a))),i.push(o)}),i}getAfterBody(t,n){return vf(et(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,i=et(r,"beforeFooter",this,t),a=et(r,"footer",this,t),o=et(r,"afterFooter",this,t);let l=[];return l=Ut(l,en(i)),l=Ut(l,en(a)),l=Ut(l,en(o)),l}_createItems(t){const n=this._active,r=this.chart.data,i=[],a=[],o=[];let l=[],c,d;for(c=0,d=n.length;c<d;++c)l.push(v6(this.chart,n[c]));return t.filter&&(l=l.filter((u,p,h)=>t.filter(u,p,h,r))),t.itemSort&&(l=l.sort((u,p)=>t.itemSort(u,p,r))),ae(l,u=>{const p=bf(t.callbacks,u);i.push(et(p,"labelColor",this,u)),a.push(et(p,"labelPointStyle",this,u)),o.push(et(p,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=a,this.labelTextColors=o,this.dataPoints=l,l}update(t,n){const r=this.options.setContext(this.getContext()),i=this._active;let a,o=[];if(!i.length)this.opacity!==0&&(a={opacity:0});else{const l=Di[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const c=this._size=mf(this,r),d=Object.assign({},l,c),u=gf(this.chart,r,d),p=xf(r,d,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,a={opacity:1,x:p.x,y:p.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}this._tooltipItems=o,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,i){const a=this.getCaretPosition(t,r,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)}getCaretPosition(t,n,r){const{xAlign:i,yAlign:a}=this,{caretSize:o,cornerRadius:l}=r,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:p}=$r(l),{x:h,y:m}=t,{width:f,height:x}=n;let y,g,v,b,k,j;return a==="center"?(k=m+x/2,i==="left"?(y=h,g=y-o,b=k+o,j=k-o):(y=h+f,g=y+o,b=k-o,j=k+o),v=y):(i==="left"?g=h+Math.max(c,u)+o:i==="right"?g=h+f-Math.max(d,p)-o:g=this.caretX,a==="top"?(b=m,k=b-o,y=g-o,v=g+o):(b=m+x,k=b+o,y=g+o,v=g-o),j=b),{x1:y,x2:g,x3:v,y1:b,y2:k,y3:j}}drawTitle(t,n,r){const i=this.title,a=i.length;let o,l,c;if(a){const d=Vr(r.rtl,this.x,this.width);for(t.x=fa(this,r.titleAlign,r),n.textAlign=d.textAlign(r.titleAlign),n.textBaseline="middle",o=Ke(r.titleFont),l=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,c=0;c<a;++c)n.fillText(i[c],d.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+l,c+1===a&&(t.y+=r.titleMarginBottom-l)}}_drawColorBox(t,n,r,i,a){const o=this.labelColors[r],l=this.labelPointStyles[r],{boxHeight:c,boxWidth:d}=a,u=Ke(a.bodyFont),p=fa(this,"left",a),h=i.x(p),m=c<u.lineHeight?(u.lineHeight-c)/2:0,f=n.y+m;if(a.usePointStyle){const x={radius:Math.min(d,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},y=i.leftForLtr(h,d)+d/2,g=f+c/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,Qc(t,x,y,g),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Qc(t,x,y,g)}else{t.lineWidth=ne(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const x=i.leftForLtr(h,d),y=i.leftForLtr(i.xPlus(h,1),d-2),g=$r(o.borderRadius);Object.values(g).some(v=>v!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,bo(t,{x,y:f,w:d,h:c,radius:g}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),bo(t,{x:y,y:f+1,w:d-2,h:c-2,radius:g}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(x,f,d,c),t.strokeRect(x,f,d,c),t.fillStyle=o.backgroundColor,t.fillRect(y,f+1,d-2,c-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:i}=this,{bodySpacing:a,bodyAlign:o,displayColors:l,boxHeight:c,boxWidth:d,boxPadding:u}=r,p=Ke(r.bodyFont);let h=p.lineHeight,m=0;const f=Vr(r.rtl,this.x,this.width),x=function(_){n.fillText(_,f.x(t.x+m),t.y+h/2),t.y+=h+a},y=f.textAlign(o);let g,v,b,k,j,N,S;for(n.textAlign=o,n.textBaseline="middle",n.font=p.string,t.x=fa(this,y,r),n.fillStyle=r.bodyColor,ae(this.beforeBody,x),m=l&&y!=="right"?o==="center"?d/2+u:d+2+u:0,k=0,N=i.length;k<N;++k){for(g=i[k],v=this.labelTextColors[k],n.fillStyle=v,ae(g.before,x),b=g.lines,l&&b.length&&(this._drawColorBox(n,t,k,f,r),h=Math.max(p.lineHeight,c)),j=0,S=b.length;j<S;++j)x(b[j]),h=p.lineHeight;ae(g.after,x)}m=0,h=p.lineHeight,ae(this.afterBody,x),t.y-=a}drawFooter(t,n,r){const i=this.footer,a=i.length;let o,l;if(a){const c=Vr(r.rtl,this.x,this.width);for(t.x=fa(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=c.textAlign(r.footerAlign),n.textBaseline="middle",o=Ke(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,l=0;l<a;++l)n.fillText(i[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+r.footerSpacing}}drawBackground(t,n,r,i){const{xAlign:a,yAlign:o}=this,{x:l,y:c}=t,{width:d,height:u}=r,{topLeft:p,topRight:h,bottomLeft:m,bottomRight:f}=$r(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(l+p,c),o==="top"&&this.drawCaret(t,n,r,i),n.lineTo(l+d-h,c),n.quadraticCurveTo(l+d,c,l+d,c+h),o==="center"&&a==="right"&&this.drawCaret(t,n,r,i),n.lineTo(l+d,c+u-f),n.quadraticCurveTo(l+d,c+u,l+d-f,c+u),o==="bottom"&&this.drawCaret(t,n,r,i),n.lineTo(l+m,c+u),n.quadraticCurveTo(l,c+u,l,c+u-m),o==="center"&&a==="left"&&this.drawCaret(t,n,r,i),n.lineTo(l,c+p),n.quadraticCurveTo(l,c,l+p,c),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,i=r&&r.x,a=r&&r.y;if(i||a){const o=Di[t.position].call(this,this._active,this._eventPosition);if(!o)return;const l=this._size=mf(this,t),c=Object.assign({},o,this._size),d=gf(n,t,c),u=xf(t,c,d,n);(i._to!==u.x||a._to!==u.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=l.width,this.height=l.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},a={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=Nt(n.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&l&&(t.save(),t.globalAlpha=r,this.drawBackground(a,t,i,n),o1(t,n.textDirection),a.y+=o.top,this.drawTitle(a,t,n),this.drawBody(a,t,n),this.drawFooter(a,t,n),l1(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,i=t.map(({datasetIndex:l,index:c})=>{const d=this.chart.getDatasetMeta(l);if(!d)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:d.data[c],index:c}}),a=!go(r,i),o=this._positionChanged(i,n);(a||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,a=this._active||[],o=this._getActiveElements(t,a,n,r),l=this._positionChanged(o,t),c=n||!go(o,a)||l;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),c}_getActiveElements(t,n,r,i){const a=this.options;if(t.type==="mouseout")return[];if(!i)return n.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,a.mode,a,r);return a.reverse&&o.reverse(),o}_positionChanged(t,n){const{caretX:r,caretY:i,options:a}=this,o=Di[a.position].call(this,t,n);return o!==!1&&(r!==o.x||i!==o.y)}}q(td,"positioners",Di);var N6={id:"tooltip",_element:td,positioners:Di,afterInit(e,t,n){n&&(e.tooltip=new td({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:C1},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const _6=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function C6(e,t,n,r){const i=e.indexOf(t);if(i===-1)return _6(e,t,n,r);const a=e.lastIndexOf(t);return i!==a?n:i}const z6=(e,t)=>e===null?null:Ye(Math.round(e),0,t);function yf(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class nd extends fi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:a}of n)r[i]===a&&r.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(se(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:C6(r,t,Q(n,t),this._addedLabels),z6(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,i=[];let a=this.getLabels();a=t===0&&n===a.length-1?a:a.slice(t,n+1),this._valueRange=Math.max(a.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=t;o<=n;o++)i.push({value:o});return i}getLabelForValue(t){return yf.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}q(nd,"id","category"),q(nd,"defaults",{ticks:{callback:yf}});function M6(e,t){const n=[],{bounds:i,step:a,min:o,max:l,precision:c,count:d,maxTicks:u,maxDigits:p,includeBounds:h}=e,m=a||1,f=u-1,{min:x,max:y}=t,g=!se(o),v=!se(l),b=!se(d),k=(y-x)/(p+1);let j=wp((y-x)/f/m)*m,N,S,_,A;if(j<1e-14&&!g&&!v)return[{value:x},{value:y}];A=Math.ceil(y/j)-Math.floor(x/j),A>f&&(j=wp(A*j/f/m)*m),se(c)||(N=Math.pow(10,c),j=Math.ceil(j*N)/N),i==="ticks"?(S=Math.floor(x/j)*j,_=Math.ceil(y/j)*j):(S=x,_=y),g&&v&&a&&Gw((l-o)/a,j/1e3)?(A=Math.round(Math.min((l-o)/j,u)),j=(l-o)/A,S=o,_=l):b?(S=g?o:S,_=v?l:_,A=d-1,j=(_-S)/A):(A=(_-S)/j,Xi(A,Math.round(A),j/1e3)?A=Math.round(A):A=Math.ceil(A));const R=Math.max(jp(j),jp(S));N=Math.pow(10,se(c)?R:c),S=Math.round(S*N)/N,_=Math.round(_*N)/N;let I=0;for(g&&(h&&S!==o?(n.push({value:o}),S<o&&I++,Xi(Math.round((S+I*j)*N)/N,o,wf(o,k,e))&&I++):S<o&&I++);I<A;++I){const U=Math.round((S+I*j)*N)/N;if(v&&U>l)break;n.push({value:U})}return v&&h&&_!==l?n.length&&Xi(n[n.length-1].value,l,wf(l,k,e))?n[n.length-1].value=l:n.push({value:l}):(!v||_===l)&&n.push({value:_}),n}function wf(e,t,{horizontal:n,minRotation:r}){const i=sr(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+e).length;return Math.min(t/a,o)}class E6 extends fi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return se(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:a}=this;const o=c=>i=n?i:c,l=c=>a=r?a:c;if(t){const c=Xt(i),d=Xt(a);c<0&&d<0?l(0):c>0&&d>0&&o(0)}if(i===a){let c=a===0?1:Math.abs(a*.05);l(a+c),t||o(i-c)}this.min=i,this.max=a}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},a=this._range||this,o=M6(i,a);return t.bounds==="ticks"&&Qw(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const i=(r-n)/Math.max(t.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return Zg(t,this.chart.options.locale,this.options.ticks.format)}}class rd extends E6{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=St(t)?t:0,this.max=St(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=sr(this.options.ticks.minRotation),i=(t?Math.sin(r):Math.cos(r))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,a.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}q(rd,"id","linear"),q(rd,"defaults",{ticks:{callback:Jg.formatters.numeric}});const Qo={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},rt=Object.keys(Qo);function jf(e,t){return e-t}function kf(e,t){if(se(t))return null;const n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts;let o=t;return typeof r=="function"&&(o=r(o)),St(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(ys(a)||a===!0)?n.startOf(o,"isoWeek",a):n.startOf(o,i)),+o)}function Sf(e,t,n,r){const i=rt.length;for(let a=rt.indexOf(e);a<i-1;++a){const o=Qo[rt[a]],l=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-t)/(l*o.size))<=r)return rt[a]}return rt[i-1]}function P6(e,t,n,r,i){for(let a=rt.length-1;a>=rt.indexOf(n);a--){const o=rt[a];if(Qo[o].common&&e._adapter.diff(i,r,o)>=t-1)return o}return rt[n?rt.indexOf(n):0]}function R6(e){for(let t=rt.indexOf(e)+1,n=rt.length;t<n;++t)if(Qo[rt[t]].common)return rt[t]}function Nf(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:i}=xu(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function A6(e,t,n,r){const i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value;let l,c;for(l=a;l<=o;l=+i.add(l,1,r))c=n[l],c>=0&&(t[c].major=!0);return t}function _f(e,t,n){const r=[],i={},a=t.length;let o,l;for(o=0;o<a;++o)l=t[o],i[l]=o,r.push({value:l,major:!1});return a===0||!n?r:A6(e,r,i,n)}class ko extends fi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),i=this._adapter=new Lj._date(t.adapters.date);i.init(n),Ki(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:kf(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:i,max:a,minDefined:o,maxDefined:l}=this.getUserBounds();function c(d){!o&&!isNaN(d.min)&&(i=Math.min(i,d.min)),!l&&!isNaN(d.max)&&(a=Math.max(a,d.max))}(!o||!l)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=St(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),a=St(a)&&!isNaN(a)?a:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,a-1),this.max=Math.max(i+1,a)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const a=this.min,o=this.max,l=n4(i,a,o);return this._unit=n.unit||(r.autoSkip?Sf(n.minUnit,this.min,this.max,this._getLabelCapacity(a)):P6(this,l.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:R6(this._unit),this.initOffsets(i),t.reverse&&l.reverse(),_f(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,i,a;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?n=1-i:n=(this.getDecimalForValue(t[1])-i)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?r=a:r=(a-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;n=Ye(n,0,o),r=Ye(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,i=this.options,a=i.time,o=a.unit||Sf(a.minUnit,n,r,this._getLabelCapacity(n)),l=Q(i.ticks.stepSize,1),c=o==="week"?a.isoWeekday:!1,d=ys(c)||c===!0,u={};let p=n,h,m;if(d&&(p=+t.startOf(p,"isoWeek",c)),p=+t.startOf(p,d?"day":o),t.diff(r,n,o)>1e5*l)throw new Error(n+" and "+r+" are too far apart with stepSize of "+l+" "+o);const f=i.ticks.source==="data"&&this.getDataTimestamps();for(h=p,m=0;h<r;h=+t.add(h,l,o),m++)Nf(u,h,f);return(h===r||i.bounds==="ticks"||m===1)&&Nf(u,h,f),Object.keys(u).sort(jf).map(x=>+x)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const i=this.options.time.displayFormats,a=this._unit,o=n||i[a];return this._adapter.format(t,o)}_tickFormatFunction(t,n,r,i){const a=this.options,o=a.ticks.callback;if(o)return me(o,[t,n,r],this);const l=a.time.displayFormats,c=this._unit,d=this._majorUnit,u=c&&l[c],p=d&&l[d],h=r[n],m=d&&p&&h&&h.major;return this._adapter.format(t,i||(m?p:u))}generateTickLabels(t){let n,r,i;for(n=0,r=t.length;n<r;++n)i=t[n],i.label=this._tickFormatFunction(i.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,i=sr(this.isHorizontal()?n.maxRotation:n.minRotation),a=Math.cos(i),o=Math.sin(i),l=this._resolveTickFontOptions(0).size;return{w:r*a+l*o,h:r*o+l*a}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,a=this._tickFormatFunction(t,0,_f(this,[t],this._majorUnit),i),o=this._getLabelSize(a),l=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return l>0?l:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)t=t.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)t.push(kf(this,i[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Xg(t.sort(jf))}}q(ko,"id","time"),q(ko,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ma(e,t,n){let r=0,i=e.length-1,a,o,l,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=ar(e,"pos",t)),{pos:a,time:l}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=ar(e,"time",t)),{time:a,pos:l}=e[r],{time:o,pos:c}=e[i]);const d=o-a;return d?l+(c-l)*(t-a)/d:l}class Cf extends ko{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=ma(n,this.min),this._tableRange=ma(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,i=[],a=[];let o,l,c,d,u;for(o=0,l=t.length;o<l;++o)d=t[o],d>=n&&d<=r&&i.push(d);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,l=i.length;o<l;++o)u=i[o+1],c=i[o-1],d=i[o],Math.round((u+c)/2)!==d&&a.push({time:d,pos:o/(l-1)});return a}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,a)=>i-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(ma(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return ma(this._table,r*this._tableRange+this._minPos,!0)}}q(Cf,"id","timeseries"),q(Cf,"defaults",ko.defaults);const z1="label";function zf(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function T6(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function M1(e,t){e.labels=t}function E1(e,t,n=z1){const r=[];e.datasets=t.map(i=>{const a=e.datasets.find(o=>o[n]===i[n]);return!a||!i.data||r.includes(a)?{...i}:(r.push(a),Object.assign(a,i),a)})}function L6(e,t=z1){const n={labels:[],datasets:[]};return M1(n,e.labels),E1(n,e.datasets,t),n}function O6(e,t){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:a,type:o,data:l,options:c,plugins:d=[],fallbackContent:u,updateMode:p,...h}=e,m=w.useRef(null),f=w.useRef(null),x=()=>{m.current&&(f.current=new Go(m.current,{type:o,data:L6(l,a),options:c&&{...c},plugins:d}),zf(t,f.current))},y=()=>{zf(t,null),f.current&&(f.current.destroy(),f.current=null)};return w.useEffect(()=>{!i&&f.current&&c&&T6(f.current,c)},[i,c]),w.useEffect(()=>{!i&&f.current&&M1(f.current.config.data,l.labels)},[i,l.labels]),w.useEffect(()=>{!i&&f.current&&l.datasets&&E1(f.current.config.data,l.datasets,a)},[i,l.datasets]),w.useEffect(()=>{f.current&&(i?(y(),setTimeout(x)):f.current.update(p))},[i,c,l.labels,l.datasets,p]),w.useEffect(()=>{f.current&&(y(),setTimeout(x))},[o]),w.useEffect(()=>(x(),()=>y()),[]),s.jsx("canvas",{ref:m,role:"img",height:n,width:r,...h,children:u})}const I6=w.forwardRef(O6);function P1(e,t){return Go.register(t),w.forwardRef((n,r)=>s.jsx(I6,{...n,ref:r,type:e}))}const D6=P1("line",Aa),Mf=P1("bar",Ra);Go.register(nd,rd,Oa,Ii,Ia,x6,N6,m6,Oi);function F6(){const[e,t]=w.useState(null),[n,r]=w.useState(null),[i,a]=w.useState(!0),[o,l]=w.useState(null),[c,d]=w.useState(null),[u,p]=w.useState(null);w.useEffect(()=>{let m=!0;const f=new AbortController;return(async()=>{var x,y,g,v,b;try{const k=await Y.get("/admin/metrics",{signal:f.signal});if(!m)return;t(k.data);const[j,N,S]=await Promise.all([Y.get("/admin/metrics/charts/sales-trends",{signal:f.signal}),Y.get("/admin/metrics/charts/revenue-growth",{signal:f.signal}),Y.get("/admin/metrics/charts/user-activity",{signal:f.signal})]);if(!m)return;l(j.data),d(N.data),p(S.data),r(null)}catch(k){if(!m)return;const j=k;if(((x=j==null?void 0:j.response)==null?void 0:x.status)===401){try{window.location.href="/login"}catch{}return}const S=((g=(y=j==null?void 0:j.response)==null?void 0:y.data)==null?void 0:g.detail)||((b=(v=j==null?void 0:j.response)==null?void 0:v.data)==null?void 0:b.message);r(S||"Failed to load dashboard data")}finally{m&&a(!1)}})(),()=>{m=!1,f.abort()}},[]),w.useEffect(()=>{let m=!0;const x=setInterval(async()=>{try{const[y,g,v,b]=await Promise.all([Y.get("/admin/metrics"),Y.get("/admin/metrics/charts/sales-trends"),Y.get("/admin/metrics/charts/revenue-growth"),Y.get("/admin/metrics/charts/user-activity")]);if(!m)return;t(y.data),l(g.data),d(v.data),p(b.data)}catch{}},3e4);return()=>{m=!1,clearInterval(x)}},[]),w.useEffect(()=>{let m=!0,f=null;const x=()=>{if(!m)return;const y=localStorage.getItem("access_token");if(!y)return;const g=`${window.location.origin}/api/v1/admin/stream-metrics?token=${encodeURIComponent(y)}`;f=new EventSource(g),f.onmessage=v=>{if(m)try{const b=JSON.parse(v.data);b&&typeof b=="object"&&!b.error&&t(b)}catch{}},f.onerror=()=>{f&&(f.close(),f=null),setTimeout(x,5e3)}};return x(),()=>{m=!1,f&&f.close()}},[]);const h=w.useMemo(()=>({users:(e==null?void 0:e.total_users)??0,products:(e==null?void 0:e.total_products)??0,orders:(e==null?void 0:e.total_orders)??0,sales:(e==null?void 0:e.total_sales)??0,revenue:(e==null?void 0:e.total_revenue)??0}),[e]);return i?s.jsx("div",{className:"dashboard-page",children:s.jsxs("div",{className:"loading-state",children:[s.jsxs("div",{className:"loading-spinner",children:[s.jsx("div",{className:"spinner-ring"}),s.jsx("div",{className:"spinner-ring"}),s.jsx("div",{className:"spinner-ring"})]}),s.jsx("p",{children:"Loading dashboard..."})]})}):n?s.jsx("div",{className:"dashboard-page",children:s.jsxs("div",{className:"alert-error",role:"alert",children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),s.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),s.jsx("span",{children:n})]})}):s.jsxs("div",{className:"dashboard-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{className:"page-header-content",children:[s.jsxs("h1",{className:"page-title",children:[s.jsx("div",{className:"title-icon",children:s.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),s.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),s.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),s.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]})}),"Dashboard Overview"]}),s.jsx("p",{className:"page-subtitle",children:"Real-time insights and analytics for your e-commerce platform"})]}),s.jsxs("div",{className:"header-badge",children:[s.jsx("div",{className:"live-indicator"}),s.jsx("span",{children:"Live Data"})]})]}),s.jsxs("div",{className:"metrics-grid",role:"region","aria-label":"Key performance indicators",children:[s.jsxs("div",{className:"metric-card users",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("div",{className:"metric-icon",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),s.jsx("circle",{cx:"9",cy:"7",r:"4"}),s.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),s.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),s.jsx("div",{className:"metric-badge",children:s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),s.jsxs("div",{className:"metric-content",children:[s.jsx("div",{className:"metric-label",children:"Total Users"}),s.jsx("div",{className:"metric-value","aria-live":"polite",children:h.users.toLocaleString()}),s.jsx("div",{className:"metric-footer",children:s.jsx("span",{className:"metric-subtitle",children:"Registered accounts"})})]})]}),s.jsxs("div",{className:"metric-card products",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("div",{className:"metric-icon",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),s.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})}),s.jsx("div",{className:"metric-badge",children:s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),s.jsxs("div",{className:"metric-content",children:[s.jsx("div",{className:"metric-label",children:"Total Products"}),s.jsx("div",{className:"metric-value","aria-live":"polite",children:h.products.toLocaleString()}),s.jsx("div",{className:"metric-footer",children:s.jsx("span",{className:"metric-subtitle",children:"In catalog"})})]})]}),s.jsxs("div",{className:"metric-card orders",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("div",{className:"metric-icon",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"9",cy:"21",r:"1"}),s.jsx("circle",{cx:"20",cy:"21",r:"1"}),s.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]})}),s.jsx("div",{className:"metric-badge",children:s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),s.jsxs("div",{className:"metric-content",children:[s.jsx("div",{className:"metric-label",children:"Total Orders"}),s.jsx("div",{className:"metric-value","aria-live":"polite",children:h.orders.toLocaleString()}),s.jsx("div",{className:"metric-footer",children:s.jsx("span",{className:"metric-subtitle",children:"All time orders"})})]})]}),s.jsxs("div",{className:"metric-card revenue",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("div",{className:"metric-icon",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),s.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]})}),s.jsx("div",{className:"metric-badge",children:s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),s.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),s.jsxs("div",{className:"metric-content",children:[s.jsx("div",{className:"metric-label",children:"Total Revenue"}),s.jsxs("div",{className:"metric-value","aria-live":"polite",children:["LKR ",Number.isFinite(h.revenue)?h.revenue.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"]}),s.jsx("div",{className:"metric-footer",children:s.jsx("span",{className:"metric-subtitle",children:"Total earnings"})})]})]})]}),s.jsxs("div",{className:"quick-stats-banner",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-icon",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),s.jsxs("div",{className:"stat-info",children:[s.jsxs("div",{className:"stat-value",children:["LKR ",(h.revenue/h.orders||0).toFixed(2)]}),s.jsx("div",{className:"stat-name",children:"Avg Order Value"})]})]}),s.jsx("div",{className:"stat-divider"}),s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-icon",children:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),s.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),s.jsxs("div",{className:"stat-info",children:[s.jsxs("div",{className:"stat-value",children:[h.orders>0?(h.orders/h.users*100).toFixed(1):"0","%"]}),s.jsx("div",{className:"stat-name",children:"Order Rate"})]})]}),s.jsx("div",{className:"stat-divider"}),s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-icon",children:s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),s.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),s.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("div",{className:"stat-value",children:h.products>0?(h.products/10).toFixed(0):"0"}),s.jsx("div",{className:"stat-name",children:"Product Categories"})]})]})]}),s.jsxs("div",{className:"charts-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-title",children:"Analytics & Insights"}),s.jsx("p",{className:"section-subtitle",children:"Track your business performance over time"})]}),s.jsxs("div",{className:"time-filter",children:[s.jsx("button",{className:"filter-btn active",children:"30D"}),s.jsx("button",{className:"filter-btn",children:"90D"}),s.jsx("button",{className:"filter-btn",children:"1Y"})]})]}),s.jsxs("div",{className:"charts-grid",children:[s.jsxs("div",{className:"chart-card featured",children:[s.jsxs("div",{className:"chart-header",children:[s.jsxs("div",{className:"chart-title-group",children:[s.jsx("h3",{className:"chart-title",children:"Sales Performance"}),s.jsx("p",{className:"chart-subtitle",children:"Last 30 days overview"})]}),s.jsxs("div",{className:"chart-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-dot orders"}),s.jsx("span",{children:"Orders"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("div",{className:"legend-dot revenue"}),s.jsx("span",{children:"Revenue"})]})]})]}),s.jsx("div",{className:"chart-container",children:o!=null&&o.data?s.jsx(D6,{data:{labels:o.data.map(m=>new Date(m.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})),datasets:[{label:"Orders",data:o.data.map(m=>m.orders||0),borderColor:"#667eea",backgroundColor:"rgba(102, 126, 234, 0.1)",yAxisID:"y",tension:.4,fill:!0,borderWidth:3,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:"#667eea",pointBorderColor:"#fff",pointBorderWidth:2},{label:"Revenue (LKR)",data:o.data.map(m=>m.revenue||0),borderColor:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",yAxisID:"y1",tension:.4,fill:!0,borderWidth:3,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:"#10b981",pointBorderColor:"#fff",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",padding:12,titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:1,displayColors:!0,callbacks:{label:function(m){return m.datasetIndex===0?`Orders: ${m.parsed.y||0}`:`Revenue: LKR ${(m.parsed.y||0).toLocaleString()}`}}}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280",font:{size:11}}},y:{type:"linear",display:!0,position:"left",title:{display:!0,text:"Orders",color:"#667eea",font:{size:12,weight:"600"}},grid:{color:"rgba(0, 0, 0, 0.05)",drawBorder:!1},ticks:{color:"#6b7280",font:{size:11}}},y1:{type:"linear",display:!0,position:"right",title:{display:!0,text:"Revenue (LKR)",color:"#10b981",font:{size:12,weight:"600"}},grid:{drawOnChartArea:!1},ticks:{color:"#6b7280",font:{size:11}}}}}}):s.jsxs("div",{className:"chart-loading",children:[s.jsx("div",{className:"loading-spinner-small",children:s.jsx("div",{className:"spinner-ring-small"})}),s.jsx("p",{children:"Loading sales data..."})]})})]}),s.jsxs("div",{className:"chart-card",children:[s.jsx("div",{className:"chart-header",children:s.jsxs("div",{className:"chart-title-group",children:[s.jsx("h3",{className:"chart-title",children:"Revenue Growth"}),s.jsx("p",{className:"chart-subtitle",children:"Monthly performance"})]})}),s.jsx("div",{className:"chart-container",children:c!=null&&c.data?s.jsx(Mf,{data:{labels:c.data.map(m=>{const[f,x]=(m.month||"").split("-");return new Date(parseInt(f),parseInt(x)-1).toLocaleDateString("en-US",{month:"short",year:"numeric"})}),datasets:[{label:"Revenue (LKR)",data:c.data.map(m=>m.revenue||0),backgroundColor:"rgba(16, 185, 129, 0.8)",borderColor:"#10b981",borderWidth:0,borderRadius:8,borderSkipped:!1,hoverBackgroundColor:"rgba(16, 185, 129, 1)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",padding:12,titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:1,callbacks:{label:function(m){return`Revenue: LKR ${(m.parsed.y||0).toLocaleString()}`}}}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.05)",drawBorder:!1},ticks:{color:"#6b7280",font:{size:11},callback:function(m){return"LKR "+m.toLocaleString()}}}}}}):s.jsxs("div",{className:"chart-loading",children:[s.jsx("div",{className:"loading-spinner-small",children:s.jsx("div",{className:"spinner-ring-small"})}),s.jsx("p",{children:"Loading revenue data..."})]})})]}),s.jsxs("div",{className:"chart-card",children:[s.jsx("div",{className:"chart-header",children:s.jsxs("div",{className:"chart-title-group",children:[s.jsx("h3",{className:"chart-title",children:"User Growth"}),s.jsx("p",{className:"chart-subtitle",children:"New registrations"})]})}),s.jsx("div",{className:"chart-container",children:u!=null&&u.data?s.jsx(Mf,{data:{labels:u.data.map(m=>new Date(m.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})),datasets:[{label:"Registrations",data:u.data.map(m=>m.registrations||0),backgroundColor:"rgba(102, 126, 234, 0.8)",borderColor:"#667eea",borderWidth:0,borderRadius:8,borderSkipped:!1,hoverBackgroundColor:"rgba(102, 126, 234, 1)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",padding:12,titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:1,callbacks:{label:function(m){return`Registrations: ${m.parsed.y}`}}}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.05)",drawBorder:!1},ticks:{color:"#6b7280",font:{size:11},precision:0}}}}}):s.jsxs("div",{className:"chart-loading",children:[s.jsx("div",{className:"loading-spinner-small",children:s.jsx("div",{className:"spinner-ring-small"})}),s.jsx("p",{children:"Loading user data..."})]})})]})]})]}),s.jsx("style",{children:`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .dashboard-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          opacity: 0;
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
          }
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
        
        .title-icon {
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
          font-weight: 400;
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
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
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
        
        /* Loading State */
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          gap: 20px;
        }
        
        .loading-spinner {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
        
        .loading-state p {
          font-size: 15px;
          color: #64748b;
          font-weight: 500;
        }
        
        .loading-spinner-small {
          position: relative;
          width: 40px;
          height: 40px;
        }
        
        .spinner-ring-small {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid #e5e7eb;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        /* Error State */
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
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 28px;
        }
        
        .metric-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .metric-card:nth-child(1) { animation-delay: 0.2s; }
        .metric-card:nth-child(2) { animation-delay: 0.3s; }
        .metric-card:nth-child(3) { animation-delay: 0.4s; }
        .metric-card:nth-child(4) { animation-delay: 0.5s; }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: rgba(102, 126, 234, 0.2);
        }
        
        .metric-card:hover::before {
          opacity: 1;
        }
        
        .metric-card.users::before {
          background: linear-gradient(90deg, transparent, #667eea, transparent);
        }
        
        .metric-card.products::before {
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
        }
        
        .metric-card.orders::before {
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
        }
        
        .metric-card.revenue::before {
          background: linear-gradient(90deg, transparent, #10b981, transparent);
        }
        
        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .metric-card.users .metric-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
        }
        
        .metric-card.products .metric-icon {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);
        }
        
        .metric-card.orders .metric-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
        }
        
        .metric-card.revenue .metric-icon {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }
        
        .metric-card:hover .metric-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .metric-badge {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #f0fdf4;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .metric-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .metric-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .metric-value {
          font-size: 36px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -1px;
        }
        
        .metric-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4px;
        }
        
        .metric-subtitle {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
        }
        
        /* Quick Stats Banner */
        .quick-stats-banner {
          background: white;
          border-radius: 16px;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 32px;
          margin-bottom: 32px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
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
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }
        
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }
        
        .stat-name {
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        
        .stat-divider {
          width: 1px;
          height: 40px;
          background: #e5e7eb;
        }
        
        /* Charts Section */
        .charts-section {
          margin-top: 32px;
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        
        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          letter-spacing: -0.5px;
        }
        
        .section-subtitle {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          font-weight: 400;
        }
        
        .time-filter {
          display: flex;
          gap: 8px;
          background: white;
          padding: 4px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
        }
        
        .filter-btn {
          padding: 8px 16px;
          border: none;
          background: transparent;
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .filter-btn:hover {
          background: #f8fafc;
          color: #0f172a;
        }
        
        .filter-btn.active {
          background: #667eea;
          color: white;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }
        
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 24px;
        }
        
        .chart-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .chart-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }
        
        .chart-card.featured {
          grid-column: 1 / -1;
        }
        
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        
        .chart-title-group {
          flex: 1;
        }
        
        .chart-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }
        
        .chart-subtitle {
          font-size: 13px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }
        
        .chart-legend {
          display: flex;
          gap: 20px;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #64748b;
          font-weight: 500;
        }
        
        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }
        
        .legend-dot.orders {
          background: #667eea;
        }
        
        .legend-dot.revenue {
          background: #10b981;
        }
        
        .chart-container {
          height: 350px;
          position: relative;
        }
        
        .chart-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          color: #94a3b8;
        }
        
        .chart-loading p {
          font-size: 14px;
          margin: 0;
          font-weight: 500;
        }
        
        /* Responsive Design */
        @media (max-width: 1400px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .quick-stats-banner {
            flex-direction: column;
            gap: 20px;
          }
          
          .stat-divider {
            display: none;
          }
          
          .stat-item {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .dashboard-page {
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
          
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .metric-value {
            font-size: 28px;
          }
          
          .charts-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .chart-card {
            padding: 20px;
          }
          
          .chart-container {
            height: 280px;
          }
          
          .chart-header {
            flex-direction: column;
            gap: 12px;
          }
          
          .section-header {
            flex-direction: column;
            gap: 16px;
          }
          
          .time-filter {
            align-self: flex-start;
          }
        }
        
        @media (max-width: 480px) {
          .page-title {
            font-size: 20px;
          }
          
          .title-icon {
            width: 40px;
            height: 40px;
          }
          
          .title-icon svg {
            width: 22px;
            height: 22px;
          }
          
          .metric-icon {
            width: 40px;
            height: 40px;
          }
          
          .metric-icon svg {
            width: 20px;
            height: 20px;
          }
          
          .metric-value {
            font-size: 24px;
          }
          
          .stat-value {
            font-size: 20px;
          }
        }
      `})]})}var id=function(e,t){return id=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},id(e,t)};function B6(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");id(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Te.apply(this,arguments)};var Ef=!1,er,sd,ad,Da,Fa,R1,Ba,od,ld,cd,A1,dd,ud,T1,L1;function tt(){if(!Ef){Ef=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),n=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(dd=/\b(iPhone|iP[ao]d)/.exec(e),ud=/\b(iP[ao]d)/.exec(e),cd=/Android/i.exec(e),T1=/FBAN\/\w+;/i.exec(e),L1=/Mobile/i.exec(e),A1=!!/Win64/.exec(e),t){er=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,er&&document&&document.documentMode&&(er=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(e);R1=r?parseFloat(r[1])+4:er,sd=t[2]?parseFloat(t[2]):NaN,ad=t[3]?parseFloat(t[3]):NaN,Da=t[4]?parseFloat(t[4]):NaN,Da?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),Fa=t&&t[1]?parseFloat(t[1]):NaN):Fa=NaN}else er=sd=ad=Fa=Da=NaN;if(n){if(n[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);Ba=i?parseFloat(i[1].replace("_",".")):!0}else Ba=!1;od=!!n[2],ld=!!n[3]}else Ba=od=ld=!1}}var hd={ie:function(){return tt()||er},ieCompatibilityMode:function(){return tt()||R1>er},ie64:function(){return hd.ie()&&A1},firefox:function(){return tt()||sd},opera:function(){return tt()||ad},webkit:function(){return tt()||Da},safari:function(){return hd.webkit()},chrome:function(){return tt()||Fa},windows:function(){return tt()||od},osx:function(){return tt()||Ba},linux:function(){return tt()||ld},iphone:function(){return tt()||dd},mobile:function(){return tt()||dd||ud||cd||L1},nativeApp:function(){return tt()||T1},android:function(){return tt()||cd},ipad:function(){return tt()||ud}},H6=hd,U6=!!(typeof window<"u"&&window.document&&window.document.createElement),W6={canUseDOM:U6},$6=W6,O1=$6,I1;O1.canUseDOM&&(I1=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function V6(e,t){if(!O1.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r=typeof i[n]=="function"}return!r&&I1&&e==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var q6=V6,Y6=H6,K6=q6,Pf=10,Rf=40,Af=800;function D1(e){var t=0,n=0,r=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=n,n=0),r=t*Pf,i=n*Pf,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(r=e.deltaX),(r||i)&&e.deltaMode&&(e.deltaMode==1?(r*=Rf,i*=Rf):(r*=Af,i*=Af)),r&&!t&&(t=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:t,spinY:n,pixelX:r,pixelY:i}}D1.getEventType=function(){return Y6.firefox()?"DOMMouseScroll":K6("wheel")?"wheel":"mousewheel"};var X6=D1,G6=X6;const Q6=Uf(G6);function Z6(e,t,n,r,i,a){a===void 0&&(a=0);var o=si(e,t,a),l=o.width,c=o.height,d=Math.min(l,n),u=Math.min(c,r);return d>u*i?{width:u*i,height:u}:{width:d,height:d/i}}function J6(e){return e.width>e.height?e.width/e.naturalWidth:e.height/e.naturalHeight}function Mi(e,t,n,r,i){i===void 0&&(i=0);var a=si(t.width,t.height,i),o=a.width,l=a.height;return{x:Tf(e.x,o,n.width,r),y:Tf(e.y,l,n.height,r)}}function Tf(e,t,n,r){var i=t*r/2-n/2;return Zo(e,-i,i)}function Lf(e,t){return Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))}function Of(e,t){return Math.atan2(t.y-e.y,t.x-e.x)*180/Math.PI}function ek(e,t,n,r,i,a,o){a===void 0&&(a=0),o===void 0&&(o=!0);var l=o?tk:nk,c=si(t.width,t.height,a),d=si(t.naturalWidth,t.naturalHeight,a),u={x:l(100,((c.width-n.width/i)/2-e.x/i)/c.width*100),y:l(100,((c.height-n.height/i)/2-e.y/i)/c.height*100),width:l(100,n.width/c.width*100/i),height:l(100,n.height/c.height*100/i)},p=Math.round(l(d.width,u.width*d.width/100)),h=Math.round(l(d.height,u.height*d.height/100)),m=d.width>=d.height*r,f=m?{width:Math.round(h*r),height:h}:{width:p,height:Math.round(p/r)},x=Te(Te({},f),{x:Math.round(l(d.width-f.width,u.x*d.width/100)),y:Math.round(l(d.height-f.height,u.y*d.height/100))});return{croppedAreaPercentages:u,croppedAreaPixels:x}}function tk(e,t){return Math.min(e,Math.max(0,t))}function nk(e,t){return t}function rk(e,t,n,r,i,a){var o=si(t.width,t.height,n),l=Zo(r.width/o.width*(100/e.width),i,a),c={x:l*o.width/2-r.width/2-o.width*l*(e.x/100),y:l*o.height/2-r.height/2-o.height*l*(e.y/100)};return{crop:c,zoom:l}}function ik(e,t,n){var r=J6(t);return n.height>n.width?n.height/(e.height*r):n.width/(e.width*r)}function sk(e,t,n,r,i,a){n===void 0&&(n=0);var o=si(t.naturalWidth,t.naturalHeight,n),l=Zo(ik(e,t,r),i,a),c=r.height>r.width?r.height/e.height:r.width/e.width,d={x:((o.width-e.width)/2-e.x)*c,y:((o.height-e.height)/2-e.y)*c};return{crop:d,zoom:l}}function If(e,t){return{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}function ak(e){return e*Math.PI/180}function si(e,t,n){var r=ak(n);return{width:Math.abs(Math.cos(r)*e)+Math.abs(Math.sin(r)*t),height:Math.abs(Math.sin(r)*e)+Math.abs(Math.cos(r)*t)}}function Zo(e,t,n){return Math.min(Math.max(e,t),n)}function ga(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(n){return typeof n=="string"&&n.length>0}).join(" ").trim()}var ok=`.reactEasyCrop_Container {
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
`,lk=1,ck=3,dk=1,uk=function(e){B6(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.cropperRef=w.createRef(),n.imageRef=w.createRef(),n.videoRef=w.createRef(),n.containerPosition={x:0,y:0},n.containerRef=null,n.styleRef=null,n.containerRect=null,n.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},n.dragStartPosition={x:0,y:0},n.dragStartCrop={x:0,y:0},n.gestureZoomStart=0,n.gestureRotationStart=0,n.isTouching=!1,n.lastPinchDistance=0,n.lastPinchRotation=0,n.rafDragTimeout=null,n.rafPinchTimeout=null,n.wheelTimer=null,n.currentDoc=typeof document<"u"?document:null,n.currentWindow=typeof window<"u"?window:null,n.resizeObserver=null,n.previousCropSize=null,n.isInitialized=!1,n.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},n.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!n.containerRef)){var r=!0;n.resizeObserver=new window.ResizeObserver(function(i){if(r){r=!1;return}n.computeSizes()}),n.resizeObserver.observe(n.containerRef)}},n.preventZoomSafari=function(r){return r.preventDefault()},n.cleanEvents=function(){n.currentDoc&&(n.currentDoc.removeEventListener("mousemove",n.onMouseMove),n.currentDoc.removeEventListener("mouseup",n.onDragStopped),n.currentDoc.removeEventListener("touchmove",n.onTouchMove),n.currentDoc.removeEventListener("touchend",n.onDragStopped),n.currentDoc.removeEventListener("gesturechange",n.onGestureChange),n.currentDoc.removeEventListener("gestureend",n.onGestureEnd),n.currentDoc.removeEventListener("scroll",n.onScroll))},n.clearScrollEvent=function(){n.containerRef&&n.containerRef.removeEventListener("wheel",n.onWheel),n.wheelTimer&&clearTimeout(n.wheelTimer)},n.onMediaLoad=function(){var r=n.computeSizes();r&&(n.previousCropSize=r,n.emitCropData(),n.setInitialCrop(r),n.isInitialized=!0),n.props.onMediaLoaded&&n.props.onMediaLoaded(n.mediaSize)},n.setInitialCrop=function(r){if(n.props.initialCroppedAreaPercentages){var i=rk(n.props.initialCroppedAreaPercentages,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),a=i.crop,o=i.zoom;n.props.onCropChange(a),n.props.onZoomChange&&n.props.onZoomChange(o)}else if(n.props.initialCroppedAreaPixels){var l=sk(n.props.initialCroppedAreaPixels,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),a=l.crop,o=l.zoom;n.props.onCropChange(a),n.props.onZoomChange&&n.props.onZoomChange(o)}},n.computeSizes=function(){var r,i,a,o,l,c,d=n.imageRef.current||n.videoRef.current;if(d&&n.containerRef){n.containerRect=n.containerRef.getBoundingClientRect(),n.saveContainerPosition();var u=n.containerRect.width/n.containerRect.height,p=((r=n.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((i=n.videoRef.current)===null||i===void 0?void 0:i.videoWidth)||0,h=((a=n.imageRef.current)===null||a===void 0?void 0:a.naturalHeight)||((o=n.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,m=d.offsetWidth<p||d.offsetHeight<h,f=p/h,x=void 0;if(m)switch(n.state.mediaObjectFit){default:case"contain":x=u>f?{width:n.containerRect.height*f,height:n.containerRect.height}:{width:n.containerRect.width,height:n.containerRect.width/f};break;case"horizontal-cover":x={width:n.containerRect.width,height:n.containerRect.width/f};break;case"vertical-cover":x={width:n.containerRect.height*f,height:n.containerRect.height};break}else x={width:d.offsetWidth,height:d.offsetHeight};n.mediaSize=Te(Te({},x),{naturalWidth:p,naturalHeight:h}),n.props.setMediaSize&&n.props.setMediaSize(n.mediaSize);var y=n.props.cropSize?n.props.cropSize:Z6(n.mediaSize.width,n.mediaSize.height,n.containerRect.width,n.containerRect.height,n.props.aspect,n.props.rotation);return(((l=n.state.cropSize)===null||l===void 0?void 0:l.height)!==y.height||((c=n.state.cropSize)===null||c===void 0?void 0:c.width)!==y.width)&&n.props.onCropSizeChange&&n.props.onCropSizeChange(y),n.setState({cropSize:y},n.recomputeCropPosition),n.props.setCropSize&&n.props.setCropSize(y),y}},n.saveContainerPosition=function(){if(n.containerRef){var r=n.containerRef.getBoundingClientRect();n.containerPosition={x:r.left,y:r.top}}},n.onMouseDown=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("mousemove",n.onMouseMove),n.currentDoc.addEventListener("mouseup",n.onDragStopped),n.saveContainerPosition(),n.onDragStart(t.getMousePoint(r)))},n.onMouseMove=function(r){return n.onDrag(t.getMousePoint(r))},n.onScroll=function(r){n.currentDoc&&(r.preventDefault(),n.saveContainerPosition())},n.onTouchStart=function(r){n.currentDoc&&(n.isTouching=!0,!(n.props.onTouchRequest&&!n.props.onTouchRequest(r))&&(n.currentDoc.addEventListener("touchmove",n.onTouchMove,{passive:!1}),n.currentDoc.addEventListener("touchend",n.onDragStopped),n.saveContainerPosition(),r.touches.length===2?n.onPinchStart(r):r.touches.length===1&&n.onDragStart(t.getTouchPoint(r.touches[0]))))},n.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?n.onPinchMove(r):r.touches.length===1&&n.onDrag(t.getTouchPoint(r.touches[0]))},n.onGestureStart=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("gesturechange",n.onGestureChange),n.currentDoc.addEventListener("gestureend",n.onGestureEnd),n.gestureZoomStart=n.props.zoom,n.gestureRotationStart=n.props.rotation)},n.onGestureChange=function(r){if(r.preventDefault(),!n.isTouching){var i=t.getMousePoint(r),a=n.gestureZoomStart-1+r.scale;if(n.setNewZoom(a,i,{shouldUpdatePosition:!0}),n.props.onRotationChange){var o=n.gestureRotationStart+r.rotation;n.props.onRotationChange(o)}}},n.onGestureEnd=function(r){n.cleanEvents()},n.onDragStart=function(r){var i,a,o=r.x,l=r.y;n.dragStartPosition={x:o,y:l},n.dragStartCrop=Te({},n.props.crop),(a=(i=n.props).onInteractionStart)===null||a===void 0||a.call(i)},n.onDrag=function(r){var i=r.x,a=r.y;n.currentWindow&&(n.rafDragTimeout&&n.currentWindow.cancelAnimationFrame(n.rafDragTimeout),n.rafDragTimeout=n.currentWindow.requestAnimationFrame(function(){if(n.state.cropSize&&!(i===void 0||a===void 0)){var o=i-n.dragStartPosition.x,l=a-n.dragStartPosition.y,c={x:n.dragStartCrop.x+o,y:n.dragStartCrop.y+l},d=n.props.restrictPosition?Mi(c,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):c;n.props.onCropChange(d)}}))},n.onDragStopped=function(){var r,i;n.isTouching=!1,n.cleanEvents(),n.emitCropData(),(i=(r=n.props).onInteractionEnd)===null||i===void 0||i.call(r)},n.onWheel=function(r){if(n.currentWindow&&!(n.props.onWheelRequest&&!n.props.onWheelRequest(r))){r.preventDefault();var i=t.getMousePoint(r),a=Q6(r).pixelY,o=n.props.zoom-a*n.props.zoomSpeed/200;n.setNewZoom(o,i,{shouldUpdatePosition:!0}),n.state.hasWheelJustStarted||n.setState({hasWheelJustStarted:!0},function(){var l,c;return(c=(l=n.props).onInteractionStart)===null||c===void 0?void 0:c.call(l)}),n.wheelTimer&&clearTimeout(n.wheelTimer),n.wheelTimer=n.currentWindow.setTimeout(function(){return n.setState({hasWheelJustStarted:!1},function(){var l,c;return(c=(l=n.props).onInteractionEnd)===null||c===void 0?void 0:c.call(l)})},250)}},n.getPointOnContainer=function(r,i){var a=r.x,o=r.y;if(!n.containerRect)throw new Error("The Cropper is not mounted");return{x:n.containerRect.width/2-(a-i.x),y:n.containerRect.height/2-(o-i.y)}},n.getPointOnMedia=function(r){var i=r.x,a=r.y,o=n.props,l=o.crop,c=o.zoom;return{x:(i+l.x)/c,y:(a+l.y)/c}},n.setNewZoom=function(r,i,a){var o=a===void 0?{}:a,l=o.shouldUpdatePosition,c=l===void 0?!0:l;if(!(!n.state.cropSize||!n.props.onZoomChange)){var d=Zo(r,n.props.minZoom,n.props.maxZoom);if(c){var u=n.getPointOnContainer(i,n.containerPosition),p=n.getPointOnMedia(u),h={x:p.x*d-u.x,y:p.y*d-u.y},m=n.props.restrictPosition?Mi(h,n.mediaSize,n.state.cropSize,d,n.props.rotation):h;n.props.onCropChange(m)}n.props.onZoomChange(d)}},n.getCropData=function(){if(!n.state.cropSize)return null;var r=n.props.restrictPosition?Mi(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;return ek(r,n.mediaSize,n.state.cropSize,n.getAspect(),n.props.zoom,n.props.rotation,n.props.restrictPosition)},n.emitCropData=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,a=r.croppedAreaPixels;n.props.onCropComplete&&n.props.onCropComplete(i,a),n.props.onCropAreaChange&&n.props.onCropAreaChange(i,a)}},n.emitCropAreaChange=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,a=r.croppedAreaPixels;n.props.onCropAreaChange&&n.props.onCropAreaChange(i,a)}},n.recomputeCropPosition=function(){if(n.state.cropSize){var r=n.props.crop;if(n.isInitialized&&n.previousCropSize){var i=Math.abs(n.previousCropSize.width-n.state.cropSize.width)>1e-6||Math.abs(n.previousCropSize.height-n.state.cropSize.height)>1e-6;if(i){var a=n.state.cropSize.width/n.previousCropSize.width,o=n.state.cropSize.height/n.previousCropSize.height;r={x:n.props.crop.x*a,y:n.props.crop.y*o}}}var l=n.props.restrictPosition?Mi(r,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):r;n.previousCropSize=n.state.cropSize,n.props.onCropChange(l),n.emitCropData()}},n.onKeyDown=function(r){var i,a,o=n.props,l=o.crop,c=o.onCropChange,d=o.keyboardStep,u=o.zoom,p=o.rotation,h=d;if(n.state.cropSize){r.shiftKey&&(h*=.2);var m=Te({},l);switch(r.key){case"ArrowUp":m.y-=h,r.preventDefault();break;case"ArrowDown":m.y+=h,r.preventDefault();break;case"ArrowLeft":m.x-=h,r.preventDefault();break;case"ArrowRight":m.x+=h,r.preventDefault();break;default:return}n.props.restrictPosition&&(m=Mi(m,n.mediaSize,n.state.cropSize,u,p)),r.repeat||(a=(i=n.props).onInteractionStart)===null||a===void 0||a.call(i),c(m)}},n.onKeyUp=function(r){var i,a;switch(r.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":r.preventDefault();break;default:return}n.emitCropData(),(a=(i=n.props).onInteractionEnd)===null||a===void 0||a.call(i)},n}return t.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=ok,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},t.prototype.componentWillUnmount=function(){var n,r;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(n=this.resizeObserver)===null||n===void 0||n.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((r=this.styleRef.parentNode)===null||r===void 0||r.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},t.prototype.componentDidUpdate=function(n){var r,i,a,o,l,c,d,u,p;n.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):n.aspect!==this.props.aspect?this.computeSizes():n.objectFit!==this.props.objectFit?this.computeSizes():n.zoom!==this.props.zoom?this.recomputeCropPosition():((r=n.cropSize)===null||r===void 0?void 0:r.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((a=n.cropSize)===null||a===void 0?void 0:a.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((l=n.crop)===null||l===void 0?void 0:l.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((d=n.crop)===null||d===void 0?void 0:d.y)!==((u=this.props.crop)===null||u===void 0?void 0:u.y))&&this.emitCropAreaChange(),n.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),n.video!==this.props.video&&((p=this.videoRef.current)===null||p===void 0||p.load());var h=this.getObjectFit();h!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:h},this.computeSizes)},t.prototype.getAspect=function(){var n=this.props,r=n.cropSize,i=n.aspect;return r?r.width/r.height:i},t.prototype.getObjectFit=function(){var n,r,i,a;if(this.props.objectFit==="cover"){var o=this.imageRef.current||this.videoRef.current;if(o&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var l=this.containerRect.width/this.containerRect.height,c=((n=this.imageRef.current)===null||n===void 0?void 0:n.naturalWidth)||((r=this.videoRef.current)===null||r===void 0?void 0:r.videoWidth)||0,d=((i=this.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((a=this.videoRef.current)===null||a===void 0?void 0:a.videoHeight)||0,u=c/d;return u<l?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},t.prototype.onPinchStart=function(n){var r=t.getTouchPoint(n.touches[0]),i=t.getTouchPoint(n.touches[1]);this.lastPinchDistance=Lf(r,i),this.lastPinchRotation=Of(r,i),this.onDragStart(If(r,i))},t.prototype.onPinchMove=function(n){var r=this;if(!(!this.currentDoc||!this.currentWindow)){var i=t.getTouchPoint(n.touches[0]),a=t.getTouchPoint(n.touches[1]),o=If(i,a);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var l=Lf(i,a),c=r.props.zoom*(l/r.lastPinchDistance);r.setNewZoom(c,o,{shouldUpdatePosition:!1}),r.lastPinchDistance=l;var d=Of(i,a),u=r.props.rotation+(d-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(u),r.lastPinchRotation=d})}},t.prototype.render=function(){var n=this,r,i=this.props,a=i.image,o=i.video,l=i.mediaProps,c=i.cropperProps,d=i.transform,u=i.crop,p=u.x,h=u.y,m=i.rotation,f=i.zoom,x=i.cropShape,y=i.showGrid,g=i.roundCropAreaPixels,v=i.style,b=v.containerStyle,k=v.cropAreaStyle,j=v.mediaStyle,N=i.classes,S=N.containerClassName,_=N.cropAreaClassName,A=N.mediaClassName,R=(r=this.state.mediaObjectFit)!==null&&r!==void 0?r:this.getObjectFit();return w.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(U){return n.containerRef=U},"data-testid":"container",style:b,className:ga("reactEasyCrop_Container",S)},a?w.createElement("img",Te({alt:"",className:ga("reactEasyCrop_Image",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",A)},l,{src:a,ref:this.imageRef,style:Te(Te({},j),{transform:d||"translate(".concat(p,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(f,")")}),onLoad:this.onMediaLoad})):o&&w.createElement("video",Te({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:ga("reactEasyCrop_Video",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",A)},l,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:Te(Te({},j),{transform:d||"translate(".concat(p,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(f,")")}),controls:!1}),(Array.isArray(o)?o:[{src:o}]).map(function(I){return w.createElement("source",Te({key:I.src},I))})),this.state.cropSize&&w.createElement("div",Te({ref:this.cropperRef,style:Te(Te({},k),{width:g?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:g?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:ga("reactEasyCrop_CropArea",x==="round"&&"reactEasyCrop_CropAreaRound",y&&"reactEasyCrop_CropAreaGrid",_)},c)))},t.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:ck,minZoom:lk,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:dk},t.getMousePoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},t.getTouchPoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},t}(w.Component);function hk(){var Mu;const[e,t]=w.useState([]),[n,r]=w.useState({name:"",slug:"",price:0,stock:0,images:[],description:""}),[i,a]=w.useState([]),[o,l]=w.useState([]),[c,d]=w.useState(null),[u,p]=w.useState(!1),[h,m]=w.useState(!1),[f,x]=w.useState(null),[y,g]=w.useState(!1),[v,b]=w.useState(!1),[k,j]=w.useState(0),[N,S]=w.useState(!1),[_,A]=w.useState(0),[R,I]=w.useState({x:0,y:0}),[U,B]=w.useState(1),[F,P]=w.useState(null),T=w.useMemo(()=>{var le;const E=n.name.trim(),D=n.slug.trim(),J=((le=n.description)==null?void 0:le.trim())||"",ee=Number.isFinite(n.price)&&n.price>=0,pe=Number.isInteger(n.stock)&&n.stock>=0;return{nameOk:E.length>1,slugOk:D.length>1,descriptionOk:J.length>=10,priceOk:ee,stockOk:pe}},[n]),V=T.nameOk&&T.slugOk&&T.descriptionOk&&T.priceOk&&T.stockOk;function z(E){const D=parseFloat(E);return Number.isFinite(D)&&D>=0?D:0}function C(E){const D=parseInt(E,10);return Number.isFinite(D)&&D>=0?D:0}async function O(){var E,D,J,ee,pe,le;p(!0),d(null);try{const re=await Y.get("/admin/products");t(Array.isArray((E=re.data)==null?void 0:E.items)?re.data.items:[])}catch(re){const W=re;if(((D=W==null?void 0:W.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}d(((ee=(J=W==null?void 0:W.response)==null?void 0:J.data)==null?void 0:ee.detail)||((le=(pe=W==null?void 0:W.response)==null?void 0:pe.data)==null?void 0:le.message)||"Failed to load")}finally{p(!1)}}w.useEffect(()=>{O()},[]);async function K(E){var J,ee,pe,le,re;if(E.length===0)return[];console.log(`Uploading ${E.length} files...`);const D=[];for(const W of E)try{console.log("Uploading file:",W.name,W.type,W.size,"bytes");const ie=new FormData;ie.append("file",W,W.name);const de=await Y.post("/admin/products/upload",ie);console.log("Upload successful, URL:",de.data.url),D.push(de.data.url)}catch(ie){const de=ie;if(console.error("Upload error for file:",W.name,de),((J=de==null?void 0:de.response)==null?void 0:J.status)===401){console.error("Upload failed: 401 Unauthorized");try{window.location.href="/login"}catch{}return[]}const Ls=((pe=(ee=de==null?void 0:de.response)==null?void 0:ee.data)==null?void 0:pe.detail)||((re=(le=de==null?void 0:de.response)==null?void 0:le.data)==null?void 0:re.message)||"Upload failed";throw console.error("Upload failed with message:",Ls),new Error(`Failed to upload ${W.name}: ${Ls}`)}return D}function X(E){const D=Array.from(E.target.files||[]);if(D.length>5){d("Maximum 5 images allowed per product");return}a(D);const J=D.map(ee=>URL.createObjectURL(ee));l(J),D.length>0&&(b(!0),j(0))}function ve(E){a(D=>D.filter((J,ee)=>ee!==E)),l(D=>(URL.revokeObjectURL(D[E]),D.filter((J,ee)=>ee!==E))),i.length<=1?b(!1):k>=i.length-1&&j(Math.max(0,i.length-2))}function ce(){j(E=>(E+1)%o.length)}function _e(){j(E=>(E-1+o.length)%o.length)}function Ce(E){A(E),I({x:0,y:0}),B(1),P(null),S(!0)}const wr=w.useCallback((E,D)=>{P(D)},[]);async function B1(E,D){const J=new Image;J.src=E,await new Promise(le=>{J.onload=le});const ee=document.createElement("canvas"),pe=ee.getContext("2d");if(!pe)throw new Error("Failed to get canvas context");return ee.width=D.width,ee.height=D.height,pe.drawImage(J,D.x,D.y,D.width,D.height,0,0,D.width,D.height),new Promise((le,re)=>{ee.toBlob(W=>{W?le(W):re(new Error("Canvas is empty"))},"image/jpeg",.95)})}async function H1(){if(F)try{const E=o[_],D=await B1(E,F),ee=i[_].name.replace(/\.[^/.]+$/,"_cropped.jpg"),pe=new File([D],ee,{type:"image/jpeg"});a(le=>{const re=[...le];return re[_]=pe,re}),l(le=>{const re=[...le];return URL.revokeObjectURL(re[_]),re[_]=URL.createObjectURL(pe),re}),S(!1)}catch(E){console.error("Error cropping image:",E),d("Failed to crop image")}}async function U1(){var E,D,J,ee,pe,le;if(d(null),!V){d("Please fill all fields correctly");return}if(i.length===0&&(!n.images||n.images.length===0)){d("Please add at least 1 image (maximum 5 images)");return}m(!0);try{console.log("Creating product, uploading images first..."),console.log("Selected files:",i.length,"files");const re=await K(i);console.log("✅ Image upload complete! URLs:",re);const ie=[...n.images||[],...re].slice(0,5);if(console.log("📸 Final images array:",ie),ie.length===0){d("At least 1 image is required"),m(!1);return}const de={name:n.name.trim(),slug:n.slug.trim(),description:(E=n.description)==null?void 0:E.trim(),price:n.price,stock:n.stock,images:ie,is_published:!0};console.log("📦 Creating product with payload:",JSON.stringify(de,null,2));const fn={id:`tmp-${Date.now()}`,...de,name:de.name||"",slug:de.slug||"",description:de.description||"",price:de.price||0,stock:de.stock||0,images:de.images||[]};t(Os=>[fn,...Os]);const Ls=await Y.post("/admin/products",de);console.log("✅ Product created successfully! Response:",Ls.data),r({name:"",slug:"",price:0,stock:0,images:[],description:""}),a([]),l(Os=>(Os.forEach(Y1=>URL.revokeObjectURL(Y1)),[])),b(!1),await O();try{localStorage.setItem("products:update",String(Date.now()))}catch{}}catch(re){const W=re;if(((D=W==null?void 0:W.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}const fn=((ee=(J=W==null?void 0:W.response)==null?void 0:J.data)==null?void 0:ee.detail)||((le=(pe=W==null?void 0:W.response)==null?void 0:pe.data)==null?void 0:le.message)||(W==null?void 0:W.message)||"Failed to create product";console.error("create product error",W),d(fn)}finally{m(!1)}}async function Jo(E,D){var J,ee,pe,le,re;d(null);try{t(W=>W.map(ie=>ie.id===E?{...ie,...D}:ie)),await Y.put(`/admin/products/${E}`,D)}catch(W){const ie=W;if(((J=ie==null?void 0:ie.response)==null?void 0:J.status)===401){try{window.location.href="/login"}catch{}return}d(((pe=(ee=ie==null?void 0:ie.response)==null?void 0:ee.data)==null?void 0:pe.detail)||((re=(le=ie==null?void 0:ie.response)==null?void 0:le.data)==null?void 0:re.message)||"Failed to update"),await O()}}async function W1(E){var D,J,ee,pe,le;d(null);try{const re=e;t(W=>W.filter(ie=>ie.id!==E)),await Y.delete(`/admin/products/${E}`)}catch(re){const W=re;if(((D=W==null?void 0:W.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}d(((ee=(J=W==null?void 0:W.response)==null?void 0:J.data)==null?void 0:ee.detail)||((le=(pe=W==null?void 0:W.response)==null?void 0:pe.data)==null?void 0:le.message)||"Failed to delete"),await O()}}function $1(E){x({...E}),g(!0),d(null)}function Ts(){x(null),g(!1),a([]),l(E=>(E.forEach(D=>URL.revokeObjectURL(D)),[])),d(null)}function V1(E){var D;f&&x({...f,images:((D=f.images)==null?void 0:D.filter((J,ee)=>ee!==E))||[]})}async function q1(){var E,D,J,ee,pe,le;if(!(!f||!f.id)){d(null),m(!0);try{const re=await K(i),W=[...f.images||[],...re];if(W.length===0){d("At least 1 image is required"),m(!1);return}if(W.length>5){d("Maximum 5 images allowed"),m(!1);return}const ie={name:f.name.trim(),slug:f.slug.trim(),description:(E=f.description)==null?void 0:E.trim(),price:f.price,stock:f.stock,images:W};await Y.put(`/admin/products/${f.id}`,ie),t(de=>de.map(fn=>fn.id===f.id?{...fn,...ie}:fn)),Ts(),await O()}catch(re){const W=re;if(((D=W==null?void 0:W.response)==null?void 0:D.status)===401){try{window.location.href="/login"}catch{}return}d(((ee=(J=W==null?void 0:W.response)==null?void 0:J.data)==null?void 0:ee.detail)||((le=(pe=W==null?void 0:W.response)==null?void 0:pe.data)==null?void 0:le.message)||"Failed to update product")}finally{m(!1)}}}return s.jsxs("div",{className:"products-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{className:"page-header-content",children:[s.jsxs("h1",{className:"page-title",children:[s.jsx("div",{className:"title-icon-wrapper",children:s.jsx("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}),"Product Management"]}),s.jsx("p",{className:"page-subtitle",children:"Manage your product catalog and inventory"})]}),s.jsxs("div",{className:"page-header-stats",children:[s.jsxs("div",{className:"stat-card total",children:[s.jsx("div",{className:"stat-icon",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("div",{className:"stat-value",children:e.length}),s.jsx("div",{className:"stat-label",children:"Total Products"})]})]}),s.jsxs("div",{className:"stat-card published",children:[s.jsx("div",{className:"stat-icon",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),s.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("div",{className:"stat-value",children:e.filter(E=>E.is_published).length}),s.jsx("div",{className:"stat-label",children:"Published"})]})]}),s.jsxs("div",{className:"stat-card draft",children:[s.jsx("div",{className:"stat-icon",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("div",{className:"stat-value",children:e.filter(E=>!E.is_published).length}),s.jsx("div",{className:"stat-label",children:"Draft"})]})]})]})]}),c&&s.jsxs("div",{className:"alert-error",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),s.jsx("span",{children:c})]}),s.jsxs("div",{className:"card-modern",children:[s.jsx("div",{className:"card-header",children:s.jsxs("div",{children:[s.jsxs("h2",{className:"card-title",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add New Product"]}),s.jsx("p",{className:"card-subtitle",children:"Fill in the product details and upload images"})]})}),s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),s.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Product Name",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{className:`form-input ${!T.nameOk&&n.name?"error":""}`,placeholder:"e.g., Premium Wireless Headphones",value:n.name,onChange:E=>r({...n,name:E.target.value})}),!T.nameOk&&n.name&&s.jsx("span",{className:"form-error",children:"Name must be at least 2 characters"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"})}),"URL Slug",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{className:`form-input ${!T.slugOk&&n.slug?"error":""}`,placeholder:"e.g., premium-wireless-headphones",value:n.slug,onChange:E=>r({...n,slug:E.target.value})}),!T.slugOk&&n.slug&&s.jsx("span",{className:"form-error",children:"Slug must be at least 2 characters"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"})]}),"Price (LKR)",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{className:`form-input ${!T.priceOk&&n.price>0?"error":""}`,placeholder:"e.g., 15000.00",type:"number",inputMode:"decimal",value:Number.isFinite(n.price)?n.price:0,onChange:E=>r({...n,price:z(E.target.value)}),min:0,step:"0.01"}),!T.priceOk&&n.price>0&&s.jsx("span",{className:"form-error",children:"Price must be ≥ 0"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),"Stock Quantity",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{className:`form-input ${!T.stockOk&&n.stock>0?"error":""}`,placeholder:"e.g., 50",type:"number",inputMode:"numeric",value:Number.isFinite(n.stock)?n.stock:0,onChange:E=>r({...n,stock:C(E.target.value)}),min:0,step:1}),!T.stockOk&&n.stock>0&&s.jsx("span",{className:"form-error",children:"Stock must be an integer ≥ 0"})]})]}),s.jsxs("div",{className:"form-group-full",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 7.707A1 1 0 014 7V4zm2 0v3.586l6.293 6.293 3.586-3.586L9.586 4H6z"})}),"Product Description",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("textarea",{className:`form-input ${!T.descriptionOk&&n.description?"error":""}`,placeholder:"Describe your product in detail (minimum 10 characters)...",value:n.description||"",onChange:E=>r({...n,description:E.target.value}),rows:4}),!T.descriptionOk&&n.description&&s.jsx("span",{className:"form-error",children:"Description must be at least 10 characters"})]}),s.jsxs("div",{className:"form-group-full",children:[s.jsxs("label",{className:"form-label",children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),"Product Images",s.jsxs("span",{className:"badge-count",children:[i.length,"/5"]}),s.jsx("span",{className:"required",children:"*"})]}),s.jsxs("div",{className:"upload-zone",children:[s.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:X,id:"file-upload",className:"file-input"}),s.jsxs("label",{htmlFor:"file-upload",className:"upload-button",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images"]}),i.length>0&&s.jsxs("button",{type:"button",onClick:()=>b(!0),className:"preview-button",children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),s.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}),"Preview & Edit"]})]}),i.length>0&&s.jsx("div",{className:"image-preview-grid",children:o.map((E,D)=>s.jsxs("div",{className:"image-preview-item",children:[s.jsx("img",{src:E,alt:`Preview ${D+1}`}),s.jsxs("div",{className:"image-overlay",children:[s.jsx("button",{onClick:()=>Ce(D),className:"btn-overlay btn-crop-overlay",type:"button",title:"Crop image",children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})})}),s.jsx("button",{onClick:()=>ve(D),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})]}),s.jsx("div",{className:"image-badge",children:D+1})]},D))}),i.length===0&&s.jsxs("div",{className:"empty-state-upload",children:[s.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),s.jsx("p",{children:"No images selected"}),s.jsx("span",{children:"Upload 1-5 product images"})]})]}),s.jsx("button",{onClick:U1,disabled:!V||h||i.length===0,type:"button",className:"btn-primary",children:h?s.jsxs(s.Fragment,{children:[s.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),s.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Creating Product..."]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add Product"]})})]})]}),s.jsxs("div",{className:"card-modern",style:{marginTop:24},children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{children:[s.jsxs("h2",{className:"card-title",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Products"]}),s.jsx("p",{className:"card-subtitle",children:"Manage existing products"})]}),s.jsxs("span",{className:"badge-count-lg",children:[e.length," total"]})]}),u?s.jsxs("div",{className:"loading-state",children:[s.jsxs("div",{className:"loading-spinner-modern",children:[s.jsx("div",{className:"spinner-ring-modern"}),s.jsx("div",{className:"spinner-ring-modern"}),s.jsx("div",{className:"spinner-ring-modern"})]}),s.jsx("p",{children:"Loading products..."})]}):e.length===0?s.jsxs("div",{className:"empty-state-large",children:[s.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),s.jsx("h3",{children:"No Products Yet"}),s.jsx("p",{children:"Start by adding your first product using the form above"})]}):s.jsx("div",{className:"products-table-wrapper",children:s.jsxs("div",{className:"products-table",children:[s.jsxs("div",{className:"table-header",children:[s.jsx("div",{className:"th-product",children:"Product"}),s.jsx("div",{className:"th-slug",children:"Slug"}),s.jsx("div",{className:"th-price",children:"Price"}),s.jsx("div",{className:"th-stock",children:"Stock"}),s.jsx("div",{className:"th-status",children:"Status"}),s.jsx("div",{className:"th-actions",children:"Actions"})]}),e.map(E=>s.jsxs("div",{className:"table-row",children:[s.jsx("div",{className:"td-product",children:s.jsxs("div",{className:"product-cell",children:[E.images&&E.images.length>0?s.jsxs("div",{className:"product-images",children:[s.jsx("img",{src:E.images[0],alt:E.name,className:"product-thumbnail-main"}),E.images.length>1&&s.jsxs("span",{className:"image-count-badge",children:["+",E.images.length-1]})]}):s.jsx("div",{className:"no-image",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})})}),s.jsxs("div",{className:"product-info",children:[s.jsx("span",{className:"product-name",children:E.name}),E.description&&s.jsxs("span",{className:"product-desc",children:[E.description.substring(0,50),"..."]})]})]})}),s.jsx("div",{className:"td-slug",children:s.jsx("code",{children:E.slug})}),s.jsx("div",{className:"td-price",children:s.jsx("input",{type:"number",className:"inline-input",defaultValue:E.price,onBlur:D=>{const J=z(D.target.value);E.id&&J!==E.price&&Jo(E.id,{price:J})},min:0,step:"0.01"})}),s.jsx("div",{className:"td-stock",children:s.jsx("input",{type:"number",className:"inline-input",defaultValue:E.stock,onBlur:D=>{const J=C(D.target.value);E.id&&J!==E.stock&&Jo(E.id,{stock:J})},min:0,step:1})}),s.jsx("div",{className:"td-status",children:s.jsx("span",{className:`status-badge ${E.is_published?"published":"draft"}`,children:E.is_published?s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Published"]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"})}),"Draft"]})})}),s.jsx("div",{className:"td-actions",children:s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{onClick:()=>$1(E),type:"button",className:"btn-action btn-edit",title:"Edit product",children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),s.jsx("button",{onClick:()=>E.id&&Jo(E.id,{is_published:!E.is_published}),type:"button",className:`btn-action ${E.is_published?"btn-unpublish":"btn-publish"}`,title:E.is_published?"Unpublish":"Publish",children:E.is_published?s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),s.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}):s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),s.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]})}),s.jsx("button",{onClick:()=>E.id&&W1(E.id),type:"button",className:"btn-action btn-delete",title:"Delete product",children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},E.id||`${E.slug}-${E.name}`))]})})]}),y&&f&&s.jsx("div",{className:"modal-overlay",onClick:Ts,children:s.jsxs("div",{className:"modal-content-modern",onClick:E=>E.stopPropagation(),children:[s.jsxs("div",{className:"modal-header-modern",children:[s.jsxs("h2",{children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit Product"]}),s.jsx("button",{onClick:Ts,className:"btn-close",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),c&&s.jsxs("div",{className:"alert-error",style:{margin:"0 24px 16px"},children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),s.jsx("span",{children:c})]}),s.jsxs("div",{className:"modal-body-modern",children:[s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Product Name"}),s.jsx("input",{type:"text",className:"form-input",value:f.name,onChange:E=>x({...f,name:E.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Slug"}),s.jsx("input",{type:"text",className:"form-input",value:f.slug,onChange:E=>x({...f,slug:E.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Price (LKR)"}),s.jsx("input",{type:"number",className:"form-input",value:f.price,onChange:E=>x({...f,price:z(E.target.value)}),min:0,step:"0.01"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Stock"}),s.jsx("input",{type:"number",className:"form-input",value:f.stock,onChange:E=>x({...f,stock:C(E.target.value)}),min:0,step:1})]})]}),s.jsxs("div",{className:"form-group-full",children:[s.jsx("label",{className:"form-label",children:"Description"}),s.jsx("textarea",{className:"form-input",value:f.description||"",onChange:E=>x({...f,description:E.target.value}),rows:4})]}),s.jsxs("div",{className:"form-group-full",children:[s.jsxs("label",{className:"form-label",children:["Current Images (",((Mu=f.images)==null?void 0:Mu.length)||0,"/5)"]}),f.images&&f.images.length>0?s.jsx("div",{className:"image-preview-grid",children:f.images.map((E,D)=>s.jsxs("div",{className:"image-preview-item",children:[s.jsx("img",{src:E,alt:`Product ${D+1}`}),s.jsx("div",{className:"image-overlay",children:s.jsx("button",{onClick:()=>V1(D),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})}),s.jsx("div",{className:"image-badge",children:D+1})]},D))}):s.jsxs("div",{className:"empty-state-upload",children:[s.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),s.jsx("p",{children:"No images yet"})]}),s.jsx("label",{className:"form-label",style:{marginTop:16},children:"Add New Images"}),s.jsxs("div",{className:"upload-zone",children:[s.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:X,id:"edit-file-upload",className:"file-input"}),s.jsxs("label",{htmlFor:"edit-file-upload",className:"upload-button",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images"]})]}),o.length>0&&s.jsx("div",{className:"image-preview-grid",style:{marginTop:12},children:o.map((E,D)=>s.jsxs("div",{className:"image-preview-item",children:[s.jsx("img",{src:E,alt:`New ${D+1}`}),s.jsx("div",{className:"image-overlay",children:s.jsx("button",{onClick:()=>ve(D),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})}),s.jsx("div",{className:"image-badge new",children:"New"})]},D))})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:Ts,type:"button",className:"btn-secondary",children:"Cancel"}),s.jsx("button",{onClick:q1,disabled:h,type:"button",className:"btn-primary",children:h?s.jsxs(s.Fragment,{children:[s.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),s.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Saving..."]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Save Changes"]})})]})]})]})}),v&&i.length>0&&s.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:s.jsxs("div",{className:"preview-modal-content",onClick:E=>E.stopPropagation(),children:[s.jsxs("div",{className:"preview-modal-header",children:[s.jsxs("h2",{children:["Image Preview (",k+1,"/",i.length,")"]}),s.jsx("button",{onClick:()=>b(!1),className:"btn-close",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),s.jsx("div",{className:"preview-image-container",children:o[k]&&s.jsx("img",{src:o[k],alt:`Preview ${k+1}`})}),s.jsxs("div",{className:"preview-controls",children:[s.jsxs("button",{onClick:_e,disabled:i.length<=1,className:"btn-nav",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"})}),"Previous"]}),s.jsxs("button",{onClick:()=>Ce(k),className:"btn-crop-main",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})}),"Crop Image"]}),s.jsxs("button",{onClick:()=>ve(k),className:"btn-remove-main",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})}),"Remove"]}),s.jsxs("button",{onClick:ce,disabled:i.length<=1,className:"btn-nav",children:["Next",s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})]})]}),i.length>1&&s.jsx("div",{className:"preview-thumbnails",children:o.map((E,D)=>s.jsxs("div",{className:`preview-thumbnail ${D===k?"active":""}`,onClick:()=>j(D),children:[s.jsx("img",{src:E,alt:`Thumbnail ${D+1}`}),s.jsx("div",{className:"thumbnail-number",children:D+1})]},D))})]})}),N&&o[_]&&s.jsx("div",{className:"modal-overlay",onClick:()=>S(!1),children:s.jsxs("div",{className:"cropper-modal-content",onClick:E=>E.stopPropagation(),children:[s.jsxs("div",{className:"modal-header-modern",children:[s.jsxs("h2",{children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})}),"Crop Image (",_+1,"/",i.length,")"]}),s.jsx("button",{onClick:()=>S(!1),className:"btn-close",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),s.jsx("div",{className:"cropper-container",children:s.jsx(uk,{image:o[_],crop:R,zoom:U,aspect:1,onCropChange:I,onZoomChange:B,onCropComplete:wr})}),s.jsxs("div",{className:"cropper-controls",children:[s.jsxs("label",{className:"zoom-label",children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("path",{d:"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"}),s.jsx("path",{fillRule:"evenodd",d:"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"})]}),"Zoom: ",U.toFixed(1),"x"]}),s.jsx("input",{type:"range",min:1,max:3,step:.1,value:U,onChange:E=>B(Number(E.target.value)),className:"zoom-slider"})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>S(!1),className:"btn-secondary",children:"Cancel"}),s.jsxs("button",{onClick:H1,className:"btn-primary",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Apply Crop"]})]})]})}),s.jsx("style",{children:`
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
      `})]})}function pk(){const[e,t]=w.useState([]),[n,r]=w.useState(null),[i,a]=w.useState(!1),[o,l]=w.useState(!1),c=w.useMemo(()=>e.map(h=>({...h,is_active:h.is_active??!0,is_staff:h.is_staff??!1,is_superuser:h.is_superuser??!1})).sort((h,m)=>(m.is_superuser?1:0)-(h.is_superuser?1:0)),[e]);async function d(){var h,m,f,x,y,g;a(!0),r(null);try{const v=await Y.get("/admin/users"),b=Array.isArray((h=v.data)==null?void 0:h.items)?v.data.items:[];t(b)}catch(v){const b=v;if(((m=b==null?void 0:b.response)==null?void 0:m.status)===401){try{window.location.href="/login"}catch{}return}r(((x=(f=b==null?void 0:b.response)==null?void 0:f.data)==null?void 0:x.detail)||((g=(y=b==null?void 0:b.response)==null?void 0:y.data)==null?void 0:g.message)||"Failed to load")}finally{a(!1)}}w.useEffect(()=>{d()},[]);async function u(h,m){var f,x,y,g,v;l(!0);try{await Y.put(`/admin/users/${h}/block`,null,{params:{block:m}}),await d()}catch(b){const k=b;if(((f=k==null?void 0:k.response)==null?void 0:f.status)===401){try{window.location.href="/login"}catch{}return}r(((y=(x=k==null?void 0:k.response)==null?void 0:x.data)==null?void 0:y.detail)||((v=(g=k==null?void 0:k.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to update user")}finally{l(!1)}}async function p(h){var m,f,x,y,g;l(!0);try{await Y.delete(`/admin/users/${h}`),await d()}catch(v){const b=v;if(((m=b==null?void 0:b.response)==null?void 0:m.status)===401){try{window.location.href="/login"}catch{}return}r(((x=(f=b==null?void 0:b.response)==null?void 0:f.data)==null?void 0:x.detail)||((g=(y=b==null?void 0:b.response)==null?void 0:y.data)==null?void 0:g.message)||"Failed to delete user")}finally{l(!1)}}return s.jsxs("div",{className:"users-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{className:"page-header-content",children:[s.jsxs("h1",{className:"page-title",children:[s.jsx("div",{className:"title-icon-wrapper",children:s.jsx("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),"User Management"]}),s.jsx("p",{className:"page-subtitle",children:"Manage user accounts, permissions, and access control"})]})}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card-modern total",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Total Users"}),s.jsx("div",{className:"stat-value-modern",children:c.length})]})]}),s.jsxs("div",{className:"stat-card-modern active",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Active Users"}),s.jsx("div",{className:"stat-value-modern",children:c.filter(h=>h.is_active).length})]})]}),s.jsxs("div",{className:"stat-card-modern staff",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Staff Members"}),s.jsx("div",{className:"stat-value-modern",children:c.filter(h=>h.is_staff).length})]})]}),s.jsxs("div",{className:"stat-card-modern admins",children:[s.jsx("div",{className:"stat-icon-modern",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),s.jsxs("div",{className:"stat-content-modern",children:[s.jsx("div",{className:"stat-label-modern",children:"Administrators"}),s.jsx("div",{className:"stat-value-modern",children:c.filter(h=>h.is_superuser).length})]})]})]}),n&&s.jsxs("div",{className:"alert-error",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),s.jsx("span",{children:n})]}),s.jsxs("div",{className:"card-modern",children:[s.jsxs("div",{className:"card-header-users",children:[s.jsxs("div",{children:[s.jsxs("h2",{className:"card-title-users",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Users"]}),s.jsx("p",{className:"card-subtitle-users",children:"View and manage registered users"})]}),s.jsxs("span",{className:"badge-count-users",children:[c.length," total"]})]}),i?s.jsxs("div",{className:"loading-state",children:[s.jsxs("div",{className:"loading-spinner-modern",children:[s.jsx("div",{className:"spinner-ring-modern"}),s.jsx("div",{className:"spinner-ring-modern"}),s.jsx("div",{className:"spinner-ring-modern"})]}),s.jsx("p",{children:"Loading users..."})]}):c.length===0?s.jsxs("div",{className:"empty-state-large",children:[s.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),s.jsx("h3",{children:"No Users Yet"}),s.jsx("p",{children:"No registered users in the system"})]}):s.jsxs("div",{className:"users-table",children:[s.jsxs("div",{className:"table-header-users",children:[s.jsx("div",{className:"th-user",children:"User"}),s.jsx("div",{className:"th-status",children:"Status"}),s.jsx("div",{className:"th-role",children:"Staff"}),s.jsx("div",{className:"th-role",children:"Admin"}),s.jsx("div",{className:"th-actions-users",children:"Actions"})]}),c.map(h=>s.jsxs("div",{className:`table-row-users ${h.is_superuser?"admin-row":""}`,children:[s.jsx("div",{className:"td-user",children:s.jsxs("div",{className:"user-cell",children:[s.jsx("div",{className:"user-avatar",children:h.avatar_url?s.jsx("img",{src:h.avatar_url,alt:""}):h.email.charAt(0).toUpperCase()}),s.jsxs("div",{className:"user-info",children:[s.jsx("div",{className:"user-email",children:h.email}),s.jsxs("div",{className:"user-id",children:["ID: ",h.id.substring(0,8),"..."]})]})]})}),s.jsx("div",{className:"td-status",children:s.jsx("span",{className:`status-badge ${h.is_active?"active":"inactive"}`,children:h.is_active?s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Active"]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}),"Blocked"]})})}),s.jsx("div",{className:"td-role",children:s.jsx("span",{className:`role-badge ${h.is_staff?"yes":"no"}`,children:h.is_staff?s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Yes"]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})}),"No"]})})}),s.jsx("div",{className:"td-role",children:s.jsx("span",{className:`role-badge ${h.is_superuser?"admin":"no"}`,children:h.is_superuser?s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Yes"]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})}),"No"]})})}),s.jsx("div",{className:"td-actions-users",children:h.is_superuser?s.jsxs("div",{className:"admin-indicator",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),s.jsx("span",{children:"System Admin"})]}):s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{onClick:()=>u(h.id,h.is_active),disabled:o,type:"button",className:`btn-action ${h.is_active?"btn-block":"btn-unblock"}`,title:h.is_active?"Block user":"Unblock user",children:h.is_active?s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}):s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),s.jsx("button",{onClick:()=>p(h.id),disabled:o,type:"button",className:"btn-action btn-delete",title:"Delete user",children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},h.id))]})]}),s.jsx("style",{children:`
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
      `})]})}function fk({children:e}){const{user:t,loading:n}=Dt(),r=_t();return n?s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[s.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),s.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):t?t.is_staff||t.is_superuser?e:s.jsx(Dc,{to:"/",replace:!0}):s.jsx(Dc,{to:"/login",state:{from:r.pathname},replace:!0})}function xn({children:e}){const{user:t,accessToken:n,loading:r}=Dt(),i=_t();return r?s.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[s.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),s.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):!t||!n?s.jsx(Dc,{to:"/login",state:{from:i},replace:!0}):s.jsx(s.Fragment,{children:e})}function mk(){var d;const{pathname:e}=_t(),{user:t,logout:n}=Dt(),r=Ot(),[i,a]=w.useState(new Date),o=()=>{n(),r("/login")};w.useEffect(()=>{const u=setInterval(()=>{a(new Date)},1e3);return()=>clearInterval(u)},[]);const l=u=>u.toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"}),c=u=>u.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return s.jsxs("div",{className:"admin-container",children:[s.jsxs("div",{className:"animated-background",children:[s.jsx("div",{className:"gradient-orb orb-1"}),s.jsx("div",{className:"gradient-orb orb-2"}),s.jsx("div",{className:"gradient-orb orb-3"}),s.jsx("div",{className:"grid-pattern"})]}),s.jsxs("header",{className:"admin-header",children:[s.jsxs("div",{className:"admin-header-left",children:[s.jsx($,{to:"/",className:"admin-brand-link","aria-label":"Home",children:s.jsx("div",{className:"logo-container",children:s.jsxs("div",{className:"logo-wrapper",children:[s.jsx("img",{src:"/images/title1.png",alt:"Own Setup logo"}),s.jsx("div",{className:"logo-glow","aria-hidden":"true"}),s.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),s.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),s.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})}),s.jsxs("div",{className:"brand-info",children:[s.jsx("span",{className:"admin-brand animated-text",children:"Own Setup"}),s.jsx("span",{className:"brand-tagline",children:"Admin Dashboard"})]})]}),s.jsxs("div",{className:"admin-header-right",children:[s.jsxs("div",{className:"admin-clock",children:[s.jsx("div",{className:"clock-icon",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"})})}),s.jsxs("div",{className:"clock-content",children:[s.jsx("div",{className:"clock-time",children:l(i)}),s.jsx("div",{className:"clock-date",children:c(i)})]})]}),s.jsxs("button",{className:"admin-btn-icon",title:"Notifications",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})}),s.jsx("span",{className:"notification-badge",children:"3"}),s.jsx("span",{className:"btn-glow"})]}),s.jsxs("div",{className:"admin-user-menu",children:[s.jsxs("div",{className:"admin-user-info",children:[s.jsxs("div",{className:"admin-avatar",children:[s.jsx("div",{className:`avatar-inner ${t!=null&&t.avatar_url?"has-image":""}`,children:t!=null&&t.avatar_url?s.jsx("img",{src:t.avatar_url,alt:"Profile",style:{width:"100%",height:"100%",borderRadius:"12px",objectFit:"cover"}}):(d=t==null?void 0:t.email)==null?void 0:d.charAt(0).toUpperCase()}),s.jsx("div",{className:"avatar-ring"})]}),s.jsxs("div",{className:"admin-user-details",children:[s.jsx("div",{className:"admin-user-name",children:(t==null?void 0:t.full_name)||(t==null?void 0:t.email)}),s.jsxs("div",{className:"admin-user-role",children:[s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),t!=null&&t.is_superuser?"Super Admin":"Admin"]})]})]}),s.jsxs("button",{className:"admin-btn-logout",onClick:o,children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"})}),"Logout"]})]})]})]}),s.jsxs("div",{className:"admin-layout",children:[s.jsxs("aside",{className:"admin-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Navigation"}),s.jsx("div",{className:"sidebar-decoration"})]}),s.jsxs("nav",{className:"admin-nav",children:[s.jsxs($,{to:"/admin",className:`admin-nav-item ${e==="/admin"?"active":""}`,children:[s.jsx("div",{className:"nav-icon",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})}),s.jsx("span",{className:"nav-text",children:"Dashboard"}),s.jsx("div",{className:"nav-shine"})]}),s.jsxs($,{to:"/admin/products",className:`admin-nav-item ${e.startsWith("/admin/products")?"active":""}`,children:[s.jsx("div",{className:"nav-icon",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}),s.jsx("span",{className:"nav-text",children:"Products"}),s.jsx("div",{className:"nav-shine"})]}),s.jsxs($,{to:"/admin/users",className:`admin-nav-item ${e.startsWith("/admin/users")?"active":""}`,children:[s.jsx("div",{className:"nav-icon",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),s.jsx("span",{className:"nav-text",children:"Users"}),s.jsx("div",{className:"nav-shine"})]}),s.jsxs($,{to:"/admin/orders",className:`admin-nav-item ${e.startsWith("/admin/orders")?"active":""}`,children:[s.jsx("div",{className:"nav-icon",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"})})}),s.jsx("span",{className:"nav-text",children:"Orders"}),s.jsx("div",{className:"nav-shine"})]}),s.jsx("div",{className:"admin-nav-divider",children:s.jsx("span",{children:"Quick Actions"})}),s.jsxs($,{to:"/",className:"admin-nav-item back-to-site",children:[s.jsx("div",{className:"nav-icon",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:s.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"})})}),s.jsx("span",{className:"nav-text",children:"Back to Site"}),s.jsx("div",{className:"nav-shine"})]})]})]}),s.jsx("main",{className:"admin-main",children:s.jsx("div",{className:"content-wrapper",children:s.jsx(pg,{})})})]}),s.jsx("style",{children:`
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
      `})]})}function gk(){const[e,t]=w.useState([]),[n,r]=w.useState(!1),[i,a]=w.useState(null),[o,l]=mg(),[c,d]=w.useState(o.get("q")||""),[u,p]=w.useState(o.get("category")||"All"),[h,m]=w.useState(o.get("min")||""),[f,x]=w.useState(o.get("max")||""),[y,g]=w.useState(o.get("sort")||"newest"),[v,b]=w.useState(Number(o.get("page")||1)),[k,j]=w.useState(12),{add:N}=pi();w.useEffect(()=>{let P=!1;async function T(){var z;r(!0),a(null);try{const C=await xe.get("/api/v1/products");if(P)return;const O=(z=C.data)==null?void 0:z.items;O&&O.length?t(O):t([])}catch{P||t([])}finally{P||r(!1)}}T();function V(z){z.key==="products:update"&&T()}return window.addEventListener("storage",V),()=>{P=!0,window.removeEventListener("storage",V)}},[]),w.useEffect(()=>{const P=new URLSearchParams;c&&P.set("q",c),u&&u!=="All"&&P.set("category",u),h&&P.set("min",h),f&&P.set("max",f),y&&y!=="newest"&&P.set("sort",y),v!==1&&P.set("page",String(v)),l(P)},[c,u,h,f,y,v,l]);const S=w.useMemo(()=>{const P=new Set(["All"]);return e.forEach(T=>P.add(T.category||"Other")),Array.from(P)},[e]),_=w.useMemo(()=>{let P=[...e];if(c.trim()){const z=c.toLowerCase();P=P.filter(C=>C.name.toLowerCase().includes(z)||C.slug.toLowerCase().includes(z)||(C.category||"").toLowerCase().includes(z))}u!=="All"&&(P=P.filter(z=>(z.category||"Other")===u));const T=Number(h),V=Number(f);switch(!Number.isNaN(T)&&h!==""&&(P=P.filter(z=>z.price>=T)),!Number.isNaN(V)&&f!==""&&(P=P.filter(z=>z.price<=V)),y){case"price-asc":P.sort((z,C)=>z.price-C.price);break;case"price-desc":P.sort((z,C)=>C.price-z.price);break;case"name-asc":P.sort((z,C)=>z.name.localeCompare(C.name));break;case"name-desc":P.sort((z,C)=>C.name.localeCompare(z.name));break;default:P.sort((z,C)=>{const O=z.createdAt?Date.parse(z.createdAt):0;return(C.createdAt?Date.parse(C.createdAt):0)-O})}return P},[e,c,u,h,f,y]),A=_.length,R=Math.max(1,Math.ceil(A/k)),I=Math.min(v,R),U=(I-1)*k,B=_.slice(U,U+k);w.useEffect(()=>{v>R&&b(R)},[R,v]);const F=()=>{d(""),p("All"),m(""),x(""),g("newest"),b(1)};return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"shop-hero",children:s.jsx("div",{className:"container hero-inner",children:s.jsxs("div",{children:[s.jsx("p",{className:"kicker",children:"Shop"}),s.jsx("h1",{className:"headline",children:"Find the next daily favorite"}),s.jsx("p",{className:"subhead",children:"Browse curated essentials across apparel, accessories, and more."})]})})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-left",children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"search",children:"Search"}),s.jsx("input",{id:"search",type:"search",placeholder:"Search products",value:c,onChange:P=>{d(P.target.value),b(1)}})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"category",children:"Category"}),s.jsx("select",{id:"category",value:u,onChange:P=>{p(P.target.value),b(1)},children:S.map(P=>s.jsx("option",{value:P,children:P},P))})]}),s.jsxs("div",{className:"field price",children:[s.jsx("label",{children:"Price"}),s.jsxs("div",{className:"price-row",children:[s.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Min",value:h,onChange:P=>{m(P.target.value),b(1)}}),s.jsx("span",{children:"—"}),s.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Max",value:f,onChange:P=>{x(P.target.value),b(1)}})]})]})]}),s.jsxs("div",{className:"toolbar-right",children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"sort",children:"Sort"}),s.jsxs("select",{id:"sort",value:y,onChange:P=>g(P.target.value),children:[s.jsx("option",{value:"newest",children:"Newest"}),s.jsx("option",{value:"price-asc",children:"Price: Low to High"}),s.jsx("option",{value:"price-desc",children:"Price: High to Low"}),s.jsx("option",{value:"name-asc",children:"Name: A–Z"}),s.jsx("option",{value:"name-desc",children:"Name: Z–A"})]})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"perPage",children:"Per page"}),s.jsxs("select",{id:"perPage",value:k,onChange:P=>{j(Number(P.target.value)),b(1)},children:[s.jsx("option",{value:12,children:"12"}),s.jsx("option",{value:24,children:"24"}),s.jsx("option",{value:48,children:"48"})]})]}),s.jsx("button",{className:"btn btn-ghost",onClick:F,children:"Clear"})]})]}),n&&s.jsx("div",{className:"notice",children:"Loading products…"}),i&&s.jsx("div",{className:"error",children:"Could not load products. Showing demo catalog."}),!n&&B.length===0&&s.jsx("div",{className:"notice",children:"No products match the current filters."}),s.jsx("div",{className:"grid",children:B.map(P=>{var T;return s.jsxs("div",{className:"card",children:[s.jsx($,{to:`/product/${P.slug}`,className:"card-img",children:s.jsx("img",{src:((T=P.images)==null?void 0:T[0])||"https://via.placeholder.com/600x400",alt:P.name,loading:"lazy"})}),s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{className:"meta",children:[s.jsx("span",{className:"tag",children:P.category||"General"}),s.jsxs("span",{className:"price",children:["LKR ",Number(P.price).toFixed(2)]})]}),s.jsx($,{to:`/product/${P.slug}`,className:"card-title",children:P.name}),s.jsxs("div",{className:"card-actions",children:[s.jsx("button",{className:"btn btn-primary",onClick:V=>{var O;const z=V.currentTarget.closest(".card"),C=z==null?void 0:z.querySelector("img");C&&mo(C),N({productId:P.id,slug:P.slug,name:P.name,price:P.price,image:(O=P.images)==null?void 0:O[0]})},children:"Add to Cart"}),s.jsx($,{to:`/product/${P.slug}`,className:"btn btn-ghost",children:"Details"})]})]})]},P.id)})}),s.jsxs("div",{className:"pagination",children:[s.jsx("button",{className:"btn btn-ghost",disabled:I<=1,onClick:()=>b(P=>Math.max(1,P-1)),children:"Prev"}),s.jsxs("span",{className:"page-info",children:["Page ",I," of ",R," • ",A," items"]}),s.jsx("button",{className:"btn btn-ghost",disabled:I>=R,onClick:()=>b(P=>Math.min(R,P+1)),children:"Next"})]})]})}),s.jsx("style",{children:`
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
      `})]})}function xk(){const{user:e}=Dt();return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"about-hero",children:s.jsx("div",{className:"container hero-inner",children:s.jsxs("div",{children:[s.jsx("p",{className:"kicker",children:"About Us"}),s.jsx("h1",{className:"headline",children:"Design-led essentials, made to last"}),s.jsx("p",{className:"subhead",children:"Everyday apparel and accessories built with comfort, durability, and timeless aesthetics at the core."}),e?s.jsxs("div",{className:"hero-ctas",children:[s.jsx($,{to:"/contact",className:"btn btn-primary",children:"Contact Us"}),s.jsx($,{to:"/shop",className:"btn btn-ghost",children:"Browse Collections"})]}):s.jsxs("div",{className:"hero-ctas",children:[s.jsx($,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),s.jsx($,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]})})}),!e&&s.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:s.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[s.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to Learn More?"}),s.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to see our full story, team, values, and start exploring our collections!"}),s.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[s.jsx($,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),s.jsx($,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),e&&s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"section alt",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Our Story"}),s.jsx("p",{className:"lead",children:"Started as a small studio with a big belief: daily wear should feel great, look refined, and hold up over time. We partner with trusted makers and keep batches small, so attention to detail never slips."}),s.jsxs("div",{className:"timeline",children:[s.jsx("div",{className:"tl-item",children:s.jsxs("div",{className:"tl-content",children:[s.jsx("h3",{children:"Where it began"}),s.jsx("p",{children:"Sketches, fabric swatches, and countless prototypes—our journey started with a focus on essentials."})]})}),s.jsx("div",{className:"tl-item",children:s.jsxs("div",{className:"tl-content",children:[s.jsx("h3",{children:"Finding our partners"}),s.jsx("p",{children:"We sourced mills and workshops that matched our standards for consistency and fair practices."})]})}),s.jsx("div",{className:"tl-item",children:s.jsxs("div",{className:"tl-content",children:[s.jsx("h3",{children:"Refining the craft"}),s.jsx("p",{children:"With customer feedback, we tuned fits, finishes, and care guides to make pieces last longer."})]})})]})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Mission & Values"}),s.jsxs("div",{className:"grid-3",children:[s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Mission"}),s.jsx("p",{children:"Make everyday dressing simpler through reliable, comfortable essentials that blend form and function."})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Quality"}),s.jsx("p",{children:"From reinforced seams to color-fast dyes, we design beyond the first wear and wash."})]}),s.jsxs("div",{className:"card",children:[s.jsx("h3",{children:"Trust"}),s.jsx("p",{children:"Clear specs, honest descriptions, and responsive support keep decisions easy and informed."})]})]})]})}),s.jsx("section",{className:"section alt",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Sustainability & Craft"}),s.jsxs("div",{className:"grid-2",children:[s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Responsible choices"}),s.jsx("p",{children:"We prioritize durable textiles, mindful packaging, and small-batch production to reduce waste while keeping quality high."}),s.jsxs("ul",{className:"bullets",children:[s.jsx("li",{children:"Material-first selection with long-life wear in mind."}),s.jsx("li",{children:"Repair-friendly construction and care guides."}),s.jsx("li",{children:"Continuous iteration based on real-world use."})]})]}),s.jsxs("div",{className:"info",children:[s.jsx("h3",{children:"Attention to detail"}),s.jsx("p",{children:"Fit, finish, and feel are tested across sizes and seasons, ensuring each piece earns a place in daily rotation."}),s.jsxs("ul",{className:"bullets",children:[s.jsx("li",{children:"Reinforced stress points and reliable hardware."}),s.jsx("li",{children:"Neutral palettes for effortless pairing."}),s.jsx("li",{children:"Consistent measurements for repeat buys."})]})]})]})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Customer Promise"}),s.jsxs("div",{className:"grid-3",children:[s.jsxs("div",{className:"mini-feature",children:[s.jsx("h3",{children:"30-Day Returns"}),s.jsx("p",{children:"Hassle-free returns on unused items in original condition within 30 days."})]}),s.jsxs("div",{className:"mini-feature",children:[s.jsx("h3",{children:"Fast Support"}),s.jsx("p",{children:"Friendly assistance with sizing, care, and orders via chat or email."})]}),s.jsxs("div",{className:"mini-feature",children:[s.jsx("h3",{children:"Honest Pricing"}),s.jsx("p",{children:"Fair prices without inflated markups—value built into each piece."})]})]})]})}),s.jsx("section",{className:"section alt",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Who We Are"}),s.jsxs("div",{className:"grid-3",children:[s.jsxs("div",{className:"person",children:[s.jsx("div",{className:"avatar"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Design Lead"}),s.jsx("p",{children:"Focuses on silhouettes, fit blocks, and fabric hand-feel for comfort and longevity."})]})]}),s.jsxs("div",{className:"person",children:[s.jsx("div",{className:"avatar"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Production"}),s.jsx("p",{children:"Oversees sourcing, QC, and small-batch timelines to maintain consistency."})]})]}),s.jsxs("div",{className:"person",children:[s.jsx("div",{className:"avatar"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Care & Support"}),s.jsx("p",{children:"Helps with sizing, exchanges, and care tips to keep favorites in rotation."})]})]})]})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"FAQs"}),s.jsxs("div",{className:"faq",children:[s.jsxs("details",{children:[s.jsx("summary",{children:"What sizes do you carry?"}),s.jsx("p",{children:"Core styles generally run XS–XXL. Fit notes and measurements are listed on product pages."})]}),s.jsxs("details",{children:[s.jsx("summary",{children:"How do returns work?"}),s.jsx("p",{children:"Submit a request within 30 days for unused items. We’ll guide through label creation and refund steps."})]}),s.jsxs("details",{children:[s.jsx("summary",{children:"Do you ship internationally?"}),s.jsx("p",{children:"Yes, with tracked delivery options at checkout. Timelines vary by destination."})]})]})]})}),s.jsx("section",{className:"section alt",children:s.jsxs("div",{className:"container contact-cta",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"section-title",children:"Get in touch"}),s.jsx("p",{className:"lead",children:"Questions about sizing, care, or orders? The team is ready to help."})]}),s.jsxs("div",{className:"cta-buttons",children:[s.jsx($,{to:"/contact",className:"btn btn-primary",children:"Contact Support"}),s.jsx($,{to:"/shop",className:"btn btn-ghost",children:"Explore the Shop"})]})]})})]}),s.jsx("style",{children:`
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
      `})]})}const vk="mgvnjvjw",bk=()=>`https://formspree.io/f/${vk}`;function yk(){const[e,t]=w.useState({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"}),[n,r]=w.useState(!1),[i,a]=w.useState(null),[o,l]=w.useState(null),c=w.useRef(null);w.useEffect(()=>{i&&c.current&&c.current.focus(),o&&c.current&&c.current.focus()},[i,o]);const d=h=>{const{name:m,value:f}=h.target;t(x=>({...x,[m]:f}))},u=async h=>{var m;h.preventDefault(),r(!0),a(null),l(null);try{const f=bk();if(!f)throw new Error("Contact form is not configured. Missing VITE_FORMSPREE_FORM_ID.");const x={name:e.name,email:e.email,_replyto:e.email,subject:e.subject,message:e.message,order_id:e.orderId,preferred_channel:e.channel,_subject:`[Store Contact] ${e.subject}`},y=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(x)});if(!y.ok){let g="Could not send message. Please try again.";try{const v=await y.json();(m=v==null?void 0:v.errors)!=null&&m.length&&(g=v.errors.map(b=>b.message).join(`
`))}catch{}throw new Error(g)}a("Message sent! We'll reply to your email within 1–2 business days."),t({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"})}catch(f){const x=f instanceof Error?f.message:"Could not send message. Please try again or use another contact method.";l(x)}finally{r(!1)}},p=`https://wa.me/94768976222?text=${encodeURIComponent(`Hello, I need help with my order.
Name: ${e.name}
Email: ${e.email}
Order ID: ${e.orderId||"-"}
Subject: ${e.subject}
Message: ${e.message}`)}`;return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"contact-hero",children:s.jsx("div",{className:"container hero-inner",children:s.jsxs("div",{children:[s.jsx("p",{className:"kicker",children:"Contact"}),s.jsx("h1",{className:"headline",children:"How can we help?"}),s.jsx("p",{className:"subhead",children:"Questions about orders, sizing, delivery, or returns—support is here."})]})})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container contact-grid",children:[s.jsxs("div",{className:"panel",children:[s.jsx("h2",{className:"section-title",children:"Send a message"}),s.jsxs("div",{ref:c,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[i&&s.jsx("div",{className:"alert success",children:i}),o&&s.jsx("div",{className:"alert error",children:o})]}),s.jsxs("form",{className:"form",onSubmit:u,noValidate:!0,children:[s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"name",children:["Name",s.jsx("span",{"aria-hidden":"true",children:" *"})]}),s.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:e.name,onChange:d,autoComplete:"name"})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"email",children:["Email",s.jsx("span",{"aria-hidden":"true",children:" *"})]}),s.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:e.email,onChange:d,autoComplete:"email"})]})]}),s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"orderId",children:"Order ID"}),s.jsx("input",{id:"orderId",name:"orderId",type:"text",value:e.orderId,onChange:d,placeholder:"Optional, helps us locate your order"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"channel",children:"Preferred channel"}),s.jsxs("select",{id:"channel",name:"channel",value:e.channel,onChange:d,children:[s.jsx("option",{value:"email",children:"Email"}),s.jsx("option",{value:"phone",children:"Phone"}),s.jsx("option",{value:"whatsapp",children:"WhatsApp"})]})]})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"subject",children:["Subject",s.jsx("span",{"aria-hidden":"true",children:" *"})]}),s.jsx("input",{id:"subject",name:"subject",type:"text",required:!0,value:e.subject,onChange:d})]}),s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:"message",children:["Message",s.jsx("span",{"aria-hidden":"true",children:" *"})]}),s.jsx("textarea",{id:"message",name:"message",required:!0,rows:6,value:e.message,onChange:d})]}),s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Sending…":"Send message"}),s.jsx("a",{className:"btn btn-ghost",href:p,target:"_blank",rel:"noopener noreferrer",children:"Message on WhatsApp"})]}),s.jsx("p",{className:"tiny muted",children:"Fields marked with * are required."})]})]}),s.jsxs("aside",{className:"panel",children:[s.jsx("h2",{className:"section-title",children:"Contact details"}),s.jsxs("ul",{className:"list",children:[s.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),s.jsx("li",{children:"Phone: +94 76 89 76 222"}),s.jsx("li",{children:"WhatsApp: +94 76 897 6222"}),s.jsx("li",{children:"Address: 252/1A Mannar Road , Puttalam"}),s.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00 (UTC+5:30)"}),s.jsx("li",{children:"Response time: within 1–2 business days"})]}),s.jsx("div",{className:"divider"}),s.jsx("h3",{children:"Quick help"}),s.jsxs("ul",{className:"list",children:[s.jsx("li",{children:s.jsx("a",{href:"/faq",children:"FAQ"})}),s.jsx("li",{children:s.jsx("a",{href:"/shipping-returns",children:"Shipping & Returns"})}),s.jsx("li",{children:s.jsx("a",{href:"/orders",children:"Track orders"})}),s.jsx("li",{children:s.jsx("a",{href:"/care",children:"Care guides"})})]}),s.jsx("div",{className:"mapbox",children:s.jsx("div",{className:"map-fallback",children:"Map placeholder"})})]})]})}),s.jsx("style",{children:`
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
 */const wk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jk=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Df=e=>{const t=jk(e);return t.charAt(0).toUpperCase()+t.slice(1)},F1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),kk=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...l},c)=>w.createElement("svg",{ref:c,...Sk,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:F1("lucide",i),...!a&&!kk(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,u])=>w.createElement(d,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(e,t)=>{const n=w.forwardRef(({className:r,...i},a)=>w.createElement(Nk,{ref:a,iconNode:t,className:F1(`lucide-${wk(Df(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Df(e),n};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Ck=Qt("arrow-up",_k);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Mk=Qt("book",zk);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Pk=Qt("chevron-down",Ek);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ff=Qt("circle-question-mark",Rk);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Tk=Qt("external-link",Ak);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Ok=Qt("funnel",Lk);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Dk=Qt("hash",Ik);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Bf=Qt("message-circle",Fk);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Hf=Qt("search",Bk);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Uk=Qt("star",Hk),Wk=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(new Set),[i,a]=w.useState(!1),[o,l]=w.useState("all"),[c,d]=w.useState(!1),[u]=w.useState(["How do I create an account?","What payment methods are available?","How do I view my order history?","How do I add items to my cart?"]);w.useEffect(()=>{const g=()=>{d(window.scrollY>300)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const p=[{title:"General Questions",icon:"❓",items:[{question:"What is this platform?",answer:"This is a modern e-commerce platform built with FastAPI backend and React frontend, offering a complete shopping experience with product catalog, secure checkout, order tracking, and administrative management tools."},{question:"Do I need to create an account to shop?",answer:"Yes, you must register and login to access shopping features including the product catalog, cart, checkout, and order history. This ensures a secure and personalized shopping experience."},{question:"What currency is used?",answer:"All prices are displayed in Sri Lankan Rupees (LKR). The platform is optimized for Sri Lankan customers with local payment methods and shipping."}]},{title:"Account & Authentication",icon:"🔐",items:[{question:"How do I create an account?",answer:`Click on "Register" in the navigation menu, fill in your details including name, email, and password, then submit the form. You'll be automatically logged in after registration.`},{question:"I forgot my password. What should I do?",answer:s.jsxs(s.Fragment,{children:["Currently, password reset functionality is not implemented. Please contact support through the"," ",s.jsx($,{to:"/contact",className:"text-[#6D74FF] hover:text-[#9b87f5] underline",children:"contact page"})," ","for assistance."]})},{question:"How do I logout?",answer:'Click on your user avatar in the top navigation and select "Logout" from the dropdown menu.'},{question:"Can I update my account information?",answer:"Yes, after logging in, access your profile settings to update your name, email, and other account details."}]},{title:"Shopping & Products",icon:"🛍️",items:[{question:"How do I browse products?",answer:`After logging in, click "Shop" in the navigation menu. You'll see all available products with images, prices, and descriptions. Click on any product to view detailed information.`},{question:"Can I see multiple images for products?",answer:"Yes! Products can have up to 5 images. In the product detail view, you can browse through all available images to see the product from different angles."},{question:"How do I add items to my cart?",answer:'On the product detail page, select the quantity you want and click "Add to Cart". The item will be added to your shopping cart, which you can access from the navigation menu.'},{question:"Can I modify items in my cart?",answer:"Yes, visit your cart page to update quantities or remove items. Changes are saved automatically."},{question:"What if a product is out of stock?",answer:"Out of stock products will be clearly marked. You can check back later or contact support to inquire about restocking dates."}]},{title:"Checkout & Payments",icon:"💳",items:[{question:"What payment methods are available?",answer:s.jsxs(s.Fragment,{children:["We accept two payment methods:",s.jsx("br",{}),"• ",s.jsx("strong",{children:"Stripe:"})," Credit/debit cards (Visa, Mastercard, American Express)",s.jsx("br",{}),"• ",s.jsx("strong",{children:"Bank Transfer:"})," Direct bank transfer to our account"]})},{question:"How does bank transfer payment work?",answer:`During checkout, select "Bank Transfer" as payment method. You'll receive payment details including account number, account holder name, and reference number. Transfer the exact amount to our bank account and use the reference number. Your order status will be updated once payment is verified.`},{question:"What information do I need to provide during checkout?",answer:s.jsxs(s.Fragment,{children:["You\\'ll need to provide:",s.jsx("br",{}),"• Customer name and contact information",s.jsx("br",{}),"• Shipping address (pre-filled for Sri Lanka)",s.jsx("br",{}),"• Payment method selection and details"]})},{question:"Is my payment information secure?",answer:"Yes, we use industry-standard security measures. Stripe payments are processed through Stripe's secure servers. Bank transfer details are displayed securely without storing sensitive payment information on our servers."},{question:"Can I use international credit cards?",answer:"Yes, Stripe supports international credit and debit cards. However, currency conversion fees may apply from your card issuer."}]},{title:"Orders & Tracking",icon:"📦",items:[{question:"How do I view my order history?",answer:`After logging in, click "Orders" in the navigation menu. You'll see all your orders with status, date, and total amount. Click on any order to view detailed information.`},{question:"What do the order statuses mean?",answer:s.jsxs(s.Fragment,{children:["Order statuses include:",s.jsx("br",{}),"• ",s.jsx("strong",{children:"Pending Verification:"})," Order placed, payment being verified",s.jsx("br",{}),"• ",s.jsx("strong",{children:"Processing:"})," Payment verified, order being prepared",s.jsx("br",{}),"• ",s.jsx("strong",{children:"Shipped:"})," Order has been dispatched",s.jsx("br",{}),"• ",s.jsx("strong",{children:"Delivered:"})," Order completed successfully",s.jsx("br",{}),"• ",s.jsx("strong",{children:"Cancelled:"})," Order was cancelled"]})},{question:"How do I download my invoice?",answer:'Once your payment is verified, an "Invoice" button will appear in your order details. Click it to download a professional PDF invoice with all order details, pricing, and payment information.'},{question:"Can I cancel my order?",answer:"Orders can only be cancelled before payment verification. Please contact support immediately if you need to cancel an order after payment."},{question:"What is your shipping policy?",answer:"We ship within Sri Lanka. Shipping times vary based on location. You'll receive tracking information once your order is shipped."}]},{title:"Admin Panel",icon:"👑",items:[{question:"How do I access the admin panel?",answer:`Admin access requires special permissions. If you have admin privileges, you'll see an "Admin" button in the navigation after logging in. Click it to access the admin dashboard.`},{question:"What can I do in the admin panel?",answer:s.jsxs(s.Fragment,{children:["Admin users can:",s.jsx("br",{}),"• Manage products (add, edit, delete, upload images)",s.jsx("br",{}),"• View and manage user accounts",s.jsx("br",{}),"• Update order statuses and track orders",s.jsx("br",{}),"• View dashboard metrics and analytics"]})},{question:"How do I add new products?",answer:'In the admin panel, go to "Products" section, click "Add Product", fill in the details including name, price, stock, and upload 1-5 product images. The product will appear in the shop immediately.'},{question:"Can I bulk upload products?",answer:"Currently, products must be added individually through the admin panel. Bulk upload functionality may be added in future updates."}]},{title:"Technical Issues",icon:"⚙️",items:[{question:"The website is not loading properly.",answer:"Try clearing your browser cache and cookies, or try a different browser. If the issue persists, check if both backend and frontend servers are running."},{question:"I can't login even with correct credentials.",answer:"Clear your browser's localStorage (press F12 → Application → Local Storage → Clear All), then try logging in again. Make sure you're using the correct email and password format."},{question:"Images are not displaying.",answer:"Product images are served from the backend server. Make sure the backend is running and the static files are properly configured. Try refreshing the page."},{question:"Payment is not processing.",answer:"For Stripe payments, ensure your card details are correct and you have sufficient funds. For bank transfers, double-check the account details and reference number. Contact support if issues persist."},{question:"The site is slow or unresponsive.",answer:"Check your internet connection first. If the problem persists, try clearing your cache or using a different browser. Contact support if issues continue."}]}],h=(g,v)=>{const b=`${g}-${v}`,k=new Set(n);k.has(b)?k.delete(b):k.add(b),r(k)},m=()=>{if(i)r(new Set);else{const g=new Set;p.forEach((v,b)=>{v.items.forEach((k,j)=>{g.add(`${b}-${j}`)})}),r(g)}a(!i)},f=w.useMemo(()=>{let g=p;if(o!=="all"&&(g=g.filter(v=>v.title.toLowerCase().includes(o.toLowerCase()))),e.trim()){const v=e.toLowerCase();g=g.map(b=>({...b,items:b.items.filter(k=>k.question.toLowerCase().includes(v)||typeof k.answer=="string"&&k.answer.toLowerCase().includes(v))})).filter(b=>b.items.length>0)}return g},[e,o]),x=()=>{window.scrollTo({top:0,behavior:"smooth"})},y=g=>{const v=document.getElementById(`section-${g.replace(/\s+/g,"-").toLowerCase()}`);v&&v.scrollIntoView({behavior:"smooth",block:"start"})};return s.jsxs("div",{className:"faq-page",children:[c&&s.jsx("button",{onClick:x,className:"faq-scroll-top","aria-label":"Scroll to top",children:s.jsx(Ck,{})}),s.jsxs("div",{className:"faq-container",children:[s.jsx("div",{className:"faq-header",children:s.jsxs("div",{className:"faq-header-content",children:[s.jsxs("div",{className:"faq-title-section",children:[s.jsxs("div",{className:"faq-icon-wrapper",children:[s.jsx(Ff,{className:"faq-icon"}),s.jsx("div",{className:"faq-ping"})]}),s.jsxs("div",{children:[s.jsx("h1",{className:"faq-title",children:"FAQ Center"}),s.jsxs("p",{className:"faq-subtitle",children:["Your comprehensive guide to our e-commerce platform. Find instant answers or",s.jsx($,{to:"/contact",children:" contact support"}),"."]})]})]}),s.jsxs("div",{className:"faq-stats",children:[s.jsxs("div",{className:"faq-stat-card",children:[s.jsx("div",{className:"faq-stat-value",children:p.reduce((g,v)=>g+v.items.length,0)}),s.jsx("div",{className:"faq-stat-label",children:"Questions"})]}),s.jsxs("div",{className:"faq-stat-card",children:[s.jsx("div",{className:"faq-stat-value",children:p.length}),s.jsx("div",{className:"faq-stat-label",children:"Categories"})]}),s.jsxs("div",{className:"faq-stat-card",children:[s.jsx("div",{className:"faq-stat-value",children:"24h"}),s.jsx("div",{className:"faq-stat-label",children:"Response"})]})]})]})}),s.jsxs("div",{className:"faq-search-wrapper",children:[s.jsxs("div",{className:"faq-search-container",children:[s.jsx(Hf,{className:"faq-search-icon"}),s.jsx("input",{type:"text",placeholder:"Search questions, answers, or keywords...",value:e,onChange:g=>t(g.target.value),className:"faq-search-input"}),e&&s.jsx("button",{onClick:()=>t(""),className:"faq-search-clear",children:"✕"})]}),s.jsxs("div",{className:"faq-search-footer",children:[s.jsxs("p",{className:"faq-search-count",children:[f.reduce((g,v)=>g+v.items.length,0)," questions available"]}),s.jsxs("button",{onClick:m,className:"faq-expand-btn",children:[s.jsx(Dk,{}),i?"Collapse All":"Expand All"]})]})]}),s.jsxs("div",{className:"faq-filters",children:[s.jsxs("button",{onClick:()=>l("all"),className:`faq-filter-btn ${o==="all"?"active":""}`,children:[s.jsx(Ok,{}),"All Categories"]}),p.map(g=>s.jsxs("button",{onClick:()=>l(g.title),className:`faq-filter-btn ${o===g.title?"active":""}`,children:[s.jsx("span",{children:g.icon}),g.title]},g.title))]}),s.jsxs("div",{className:"faq-feature-grid",children:[s.jsxs("div",{className:"faq-feature-card",children:[s.jsxs("div",{className:"faq-feature-header",children:[s.jsx(Uk,{className:"faq-feature-icon"}),s.jsx("h3",{className:"faq-feature-title",children:"Popular Questions"})]}),s.jsx("div",{className:"faq-feature-list",children:u.map((g,v)=>s.jsxs("button",{onClick:()=>t(g),className:"faq-feature-item",children:[s.jsxs("span",{className:"faq-feature-number",children:["#",v+1]}),s.jsx("span",{className:"faq-feature-text",children:g})]},v))})]}),s.jsxs("div",{className:"faq-feature-card",children:[s.jsxs("div",{className:"faq-feature-header",children:[s.jsx(Bf,{className:"faq-feature-icon"}),s.jsx("h3",{className:"faq-feature-title",children:"Quick Navigation"})]}),s.jsx("div",{className:"faq-quick-nav",children:p.map(g=>s.jsxs("button",{onClick:()=>y(g.title),className:"faq-nav-item",children:[s.jsxs("div",{className:"faq-nav-item-header",children:[s.jsx("span",{className:"faq-nav-emoji",children:g.icon}),s.jsxs("span",{className:"faq-nav-count",children:[g.items.length," Q&A"]})]}),s.jsx("span",{className:"faq-nav-title",children:g.title})]},g.title))})]})]}),s.jsx("div",{className:"faq-sections",children:f.length>0?f.map((g,v)=>s.jsxs("div",{id:`section-${g.title.replace(/\s+/g,"-").toLowerCase()}`,className:"faq-section",children:[s.jsxs("div",{className:"faq-section-header",children:[s.jsx("div",{className:"faq-section-icon-wrapper",children:g.icon}),s.jsxs("div",{children:[s.jsx("h2",{className:"faq-section-title",children:g.title}),s.jsxs("p",{className:"faq-section-count",children:[g.items.length," questions"]})]})]}),s.jsx("div",{className:"faq-items",children:g.items.map((b,k)=>{const j=`${v}-${k}`,N=n.has(j);return s.jsxs("div",{className:"faq-item",children:[s.jsxs("button",{onClick:()=>h(v,k),className:"faq-question-btn",children:[s.jsx("h3",{className:"faq-question-text",children:b.question}),s.jsx("div",{className:`faq-chevron-wrapper ${N?"expanded":""}`,children:s.jsx(Pk,{className:"faq-chevron"})})]}),s.jsx("div",{className:`faq-answer-wrapper ${N?"expanded":""}`,children:s.jsx("div",{className:"faq-answer",children:b.answer})})]},k)})})]},v)):s.jsxs("div",{className:"faq-no-results",children:[s.jsx(Hf,{className:"faq-no-results-icon"}),s.jsx("h3",{className:"faq-no-results-title",children:"No results found"}),s.jsxs("p",{className:"faq-no-results-text",children:["Try adjusting your search terms or"," ",s.jsx("button",{onClick:()=>{t(""),l("all")},className:"faq-no-results-btn",children:"clear filters"}),"."]})]})}),s.jsxs("div",{className:"faq-contact-section",children:[s.jsx("h2",{className:"faq-contact-title",children:"Still Need Help?"}),s.jsx("p",{className:"faq-contact-text",children:"If you couldn't find the answer to your question, our support team is here to assist you. We typically respond within 24 hours with detailed solutions."}),s.jsxs("div",{className:"faq-contact-buttons",children:[s.jsxs($,{to:"/contact",className:"faq-btn-primary",children:[s.jsx(Bf,{}),"Contact Support"]}),s.jsxs($,{to:"/about",className:"faq-btn-secondary",children:[s.jsx(Ff,{}),"About Us"]})]})]}),s.jsxs("div",{className:"faq-docs-section",children:[s.jsxs("div",{className:"faq-docs-header",children:[s.jsx("div",{className:"faq-docs-icon-wrapper",children:s.jsx(Mk,{className:"faq-docs-icon"})}),s.jsxs("div",{children:[s.jsx("h3",{className:"faq-docs-title",children:"Technical Documentation"}),s.jsx("p",{className:"faq-docs-subtitle",children:"Comprehensive guides for developers covering implementation details and system architecture."})]})]}),s.jsx("div",{className:"faq-docs-grid",children:[{name:"🚀 Quick Start Guide",url:"/docs/QUICK_START.md",desc:"Get started in minutes"},{name:"🔐 Authentication Guide",url:"/docs/AUTHENTICATION_IMPLEMENTATION.md",desc:"User management & security"},{name:"📦 Order Status System",url:"/docs/ORDER_STATUS_TECHNICAL_DOCS.md",desc:"Order lifecycle management"},{name:"📄 Invoice Feature",url:"/docs/INVOICE_FEATURE_COMPLETE.md",desc:"PDF generation & billing"},{name:"📸 Multiple Images Guide",url:"/docs/MULTIPLE_IMAGES_FEATURE.md",desc:"Product image handling"},{name:"💰 Currency Configuration",url:"/docs/CURRENCY_CHANGE.md",desc:"Multi-currency support"},{name:"👑 Admin Panel Fixes",url:"/docs/ADMIN_PANEL_FIXES.md",desc:"Admin interface updates"},{name:"🏦 Bank Transfer Payments",url:"/docs/BANK_TRANSFER_UPGRADE.md",desc:"Payment processing"},{name:"🖼️ Image Upload System",url:"/docs/IMAGE_UPLOAD_FIX.md",desc:"File upload & storage"}].map((g,v)=>s.jsxs("a",{href:g.url,target:"_blank",rel:"noopener noreferrer",className:"faq-doc-card",children:[s.jsxs("div",{className:"faq-doc-card-header",children:[s.jsx("span",{className:"faq-doc-emoji",children:g.name.split(" ")[0]}),s.jsx(Tk,{className:"faq-doc-external-icon"})]}),s.jsx("div",{className:"faq-doc-name",children:g.name.substring(g.name.indexOf(" ")+1)}),s.jsx("div",{className:"faq-doc-desc",children:g.desc})]},v))}),s.jsxs("div",{className:"faq-footer-stats",children:[s.jsxs("div",{className:"faq-footer-stat",children:[s.jsx("div",{className:"faq-footer-stat-value",children:"9"}),s.jsx("div",{className:"faq-footer-stat-label",children:"Documentation"}),s.jsx("div",{className:"faq-footer-stat-desc",children:"Technical guides"})]}),s.jsxs("div",{className:"faq-footer-stat",children:[s.jsx("div",{className:"faq-footer-stat-value",children:"7"}),s.jsx("div",{className:"faq-footer-stat-label",children:"Categories"}),s.jsx("div",{className:"faq-footer-stat-desc",children:"Organized topics"})]}),s.jsxs("div",{className:"faq-footer-stat",children:[s.jsx("div",{className:"faq-footer-stat-value",children:p.reduce((g,v)=>g+v.items.length,0)}),s.jsx("div",{className:"faq-footer-stat-label",children:"Q&A Total"}),s.jsx("div",{className:"faq-footer-stat-desc",children:"Common questions"})]}),s.jsxs("div",{className:"faq-footer-stat",children:[s.jsx("div",{className:"faq-footer-stat-value",children:"24/7"}),s.jsx("div",{className:"faq-footer-stat-label",children:"Support"}),s.jsx("div",{className:"faq-footer-stat-desc",children:"Always available"})]})]})]})]})]})};function $k(){const[e,t]=w.useState([]),[n,r]=w.useState(!1),[i,a]=w.useState(null),[o]=mg(),l=o.get("q")||"",{add:c}=pi();w.useEffect(()=>{if(!l.trim()){t([]);return}let h=!1;async function m(){var f;r(!0),a(null);try{const x=await xe.get("/api/v1/products");if(h)return;const y=((f=x.data)==null?void 0:f.items)||[];t(y)}catch{h||(a("Failed to load products"),t([]))}finally{h||r(!1)}}return m(),()=>{h=!0}},[l]);const d=w.useMemo(()=>{if(!l.trim())return[];const h=l.toLowerCase();return e.filter(m=>m.name.toLowerCase().includes(h)||m.slug.toLowerCase().includes(h)||(m.category||"").toLowerCase().includes(h))},[e,l]),u=w.useMemo(()=>{if(!l.trim())return[];const h=l.toLowerCase();return[{id:"faq",name:"Frequently Asked Questions",url:"/faq",type:"FAQ Page"},{id:"about",name:"About Us",url:"/about",type:"About Page"},{id:"contact",name:"Contact Support",url:"/contact",type:"Contact Page"},{id:"home",name:"Home Page",url:"/",type:"Home Page"},{id:"shop",name:"Shop",url:"/shop",type:"Shop Page"}].filter(f=>f.name.toLowerCase().includes(h)||f.type.toLowerCase().includes(h))},[l]),p=(h,m)=>{const x=m.currentTarget.closest("div"),y=x==null?void 0:x.querySelector("img");y&&mo(y),c({productId:h.id,slug:h.slug,name:h.name,price:h.price,image:h.images[0]})};return l.trim()?s.jsxs("div",{className:"container",style:{padding:"2rem"},children:[s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("h1",{children:"Search Results"}),s.jsxs("p",{children:["Showing results for: ",s.jsxs("strong",{children:['"',l,'"']})]}),s.jsxs("p",{children:[d.length," product",d.length!==1?"s":""," found"]})]}),n&&s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:s.jsx("p",{children:"Loading products..."})}),i&&s.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"red"},children:s.jsx("p",{children:i})}),!n&&!i&&s.jsxs(s.Fragment,{children:[d.length>0&&s.jsxs(s.Fragment,{children:[s.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Products (",d.length,")"]}),s.jsx("div",{className:"grid",children:d.map(h=>s.jsxs("div",{className:"card",children:[s.jsx($,{to:`/product/${h.slug}`,className:"card-img",children:s.jsx("img",{src:h.images[0]||"/placeholder.jpg",alt:h.name})}),s.jsxs("div",{className:"card-body",children:[s.jsx("span",{className:"tag",children:h.category||"General"}),s.jsxs("span",{className:"price",children:["LKR ",Number(h.price).toFixed(2)]}),s.jsx($,{to:`/product/${h.slug}`,className:"card-title",children:h.name}),s.jsx("div",{className:"card-actions",children:s.jsx("button",{className:"btn btn-primary",onClick:m=>p(h,m),children:"Add to Cart"})})]})]},h.id))})]}),u.length>0&&s.jsxs(s.Fragment,{children:[d.length>0&&s.jsx("hr",{style:{margin:"2rem 0",border:"none",borderTop:"1px solid var(--line)"}}),s.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Pages (",u.length,")"]}),s.jsx("div",{style:{display:"grid",gap:"1rem"},children:u.map(h=>s.jsx($,{to:h.url,style:{display:"block",padding:"1rem",background:"var(--surface)",border:"1px solid var(--line)",borderRadius:"8px",textDecoration:"none",color:"var(--text)",transition:"all 0.2s ease"},onMouseEnter:m=>m.currentTarget.style.background="var(--ghost)",onMouseLeave:m=>m.currentTarget.style.background="var(--surface)",children:s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:"500"},children:h.name}),s.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)",padding:"2px 8px",background:"var(--surface-alt)",borderRadius:"12px"},children:h.type})]})},h.id))})]})]}),!n&&!i&&d.length===0&&u.length===0&&l.trim()&&s.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[s.jsxs("p",{children:['No results found for "',l,'"']}),s.jsxs("p",{children:["Try searching for something else or ",s.jsx($,{to:"/shop",children:"browse all products"})]})]})]}):s.jsxs("div",{className:"container",style:{padding:"2rem",textAlign:"center"},children:[s.jsx("h1",{children:"Search"}),s.jsx("p",{children:"Enter a search term to find products across our store."})]})}function Vk(){const[e,t]=w.useState([]),n=w.useRef({});return w.useEffect(()=>{function r(i){var d,u;const a=i,o=crypto.randomUUID(),l=Date.now()+(((d=a.detail)==null?void 0:d.duration)??2200);t(p=>{var h,m;return[...p,{id:o,message:((h=a.detail)==null?void 0:h.message)??"",type:((m=a.detail)==null?void 0:m.type)??"success",ttl:l}]});const c=((u=a.detail)==null?void 0:u.duration)??2200;n.current[o]=window.setTimeout(()=>{t(p=>p.filter(h=>h.id!==o)),delete n.current[o]},c)}return window.addEventListener("app:toast",r),()=>{window.removeEventListener("app:toast",r),Object.values(n.current).forEach(i=>window.clearTimeout(i))}},[]),s.jsxs("div",{style:{position:"fixed",bottom:20,right:20,zIndex:2e3,display:"flex",flexDirection:"column",gap:8},"aria-live":"polite","aria-atomic":"true",children:[e.map(r=>s.jsx("div",{role:"status",style:{minWidth:220,maxWidth:360,padding:"10px 14px",borderRadius:10,color:"white",background:r.type==="success"?"linear-gradient(180deg, #22c55e, #16a34a)":r.type==="error"?"linear-gradient(180deg, #ef4444, #b91c1c)":"linear-gradient(180deg, #3b82f6, #1d4ed8)",boxShadow:"0 10px 24px rgba(0,0,0,0.35)",transform:"translateY(0)",transition:"opacity .2s, transform .2s",fontWeight:600},children:r.message},r.id)),s.jsx("style",{children:`
        @media (max-width: 600px) {
          div[aria-live='polite']{ left: 12px; right: 12px; top: auto; bottom: 20px; align-items: center; }
        }
      `})]})}function qk(){const{user:e,updateUser:t}=Dt(),[n,r]=w.useState(!0),[i,a]=w.useState(!1),[o,l]=w.useState(!1),[c,d]=w.useState(""),[u,p]=w.useState(""),[h,m]=w.useState(""),[f,x]=w.useState(""),[y,g]=w.useState(void 0),[v,b]=w.useState(null),[k,j]=w.useState(null),[N,S]=w.useState(""),[_,A]=w.useState(""),[R,I]=w.useState(""),U=w.useRef(null);w.useEffect(()=>{(v||k)&&U.current&&U.current.focus()},[v,k]),w.useEffect(()=>{async function T(){try{r(!0);const z=(await Y.get("/auth/me")).data||{};d(z.full_name||""),p(z.email||""),m(z.phone||""),x(z.address||""),g(z.avatar_url||(e==null?void 0:e.avatar_url)||void 0)}catch{d((e==null?void 0:e.full_name)||""),p((e==null?void 0:e.email)||""),m((e==null?void 0:e.phone)||""),x((e==null?void 0:e.address)||""),g((e==null?void 0:e.avatar_url)||void 0)}finally{r(!1)}}T()},[]);async function B(T){var V,z;if(T.preventDefault(),j(null),b(null),!u){j("Email is required");return}try{a(!0);const O=(await Y.put("/auth/me",{email:u,full_name:c,phone:h,address:f})).data;t({email:O.email,full_name:O.full_name,phone:O.phone,address:O.address}),b("Profile updated successfully"),$t("Profile updated","success")}catch(C){const O=((z=(V=C==null?void 0:C.response)==null?void 0:V.data)==null?void 0:z.detail)||"Failed to update profile";j(String(O)),$t("Could not update profile","error")}finally{a(!1)}}async function F(T){var V,z;if(T.preventDefault(),j(null),b(null),!N||!_||!R){j("Please fill all password fields");return}if(_.length<8){j("New password must be at least 8 characters");return}if(_!==R){j("Passwords do not match");return}try{l(!0),await Y.post("/auth/change-password",{old_password:N,new_password:_}),b("Password changed successfully"),S(""),A(""),I(""),$t("Password updated","success")}catch(C){const O=((z=(V=C==null?void 0:C.response)==null?void 0:V.data)==null?void 0:z.detail)||"Failed to change password";j(String(O)),$t("Could not change password","error")}finally{l(!1)}}async function P(T){var C,O;const V=(C=T.target.files)==null?void 0:C[0];if(!V)return;if(!/image\/(png|jpe?g|webp)/.test(V.type)){$t("Please select a PNG, JPG, or WEBP image","error");return}if(V.size>3*1024*1024){$t("Image must be under 3MB","error");return}const z=new FormData;z.append("file",V);try{let X=(O=(await Y.post("/auth/avatar",z,{headers:{"Content-Type":"multipart/form-data"}})).data)==null?void 0:O.avatar_url;X&&(X=`${X}${X.includes("?")?"&":"?"}v=${Date.now()}`),g(X),t({avatar_url:X}),$t("Profile picture updated","success")}catch{$t("Failed to upload picture","error")}}return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"account-hero",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"headline",children:"Account Settings"}),s.jsx("p",{className:"subhead",children:"Update your profile details, password, and picture."})]})}),s.jsx("section",{className:"section",children:s.jsxs("div",{className:"container acct-wrap",children:[s.jsxs("div",{className:"panel",children:[s.jsx("h2",{className:"section-title",children:"Profile"}),s.jsxs("div",{ref:U,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[v&&s.jsx("div",{className:"alert success",children:v}),k&&s.jsx("div",{className:"alert error",children:k})]}),s.jsxs("form",{className:"form",onSubmit:B,noValidate:!0,children:[s.jsxs("div",{className:"avatar-row",children:[s.jsx("div",{className:"avatar","aria-label":"Profile picture",children:y?s.jsx("img",{src:y,alt:"Profile"}):s.jsx("div",{className:"img-fallback","aria-hidden":!0})}),s.jsxs("label",{className:"btn",role:"button",children:["Change picture",s.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",onChange:P,hidden:!0})]})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"fullName",children:"Full name"}),s.jsx("input",{id:"fullName",type:"text",value:c,onChange:T=>d(T.target.value),placeholder:"Your name"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"email",children:"Email"}),s.jsx("input",{id:"email",type:"email",value:u,onChange:T=>p(T.target.value),required:!0})]}),s.jsxs("div",{className:"row2",children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"phone",children:"Phone"}),s.jsx("input",{id:"phone",type:"tel",value:h,onChange:T=>m(T.target.value),placeholder:"Optional"})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"address",children:"Address"}),s.jsx("input",{id:"address",type:"text",value:f,onChange:T=>x(T.target.value),placeholder:"Optional"})]})]}),s.jsx("button",{className:"btn btn-primary",type:"submit",disabled:i,children:i?"Saving…":"Save changes"})]})]}),s.jsxs("aside",{className:"panel",children:[s.jsx("h2",{className:"section-title",children:"Change password"}),s.jsxs("form",{className:"form",onSubmit:F,noValidate:!0,children:[s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"old",children:"Current password"}),s.jsx("input",{id:"old",type:"password",value:N,onChange:T=>S(T.target.value),autoComplete:"current-password",required:!0})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"new",children:"New password"}),s.jsx("input",{id:"new",type:"password",value:_,onChange:T=>A(T.target.value),autoComplete:"new-password",required:!0})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:"confirm",children:"Confirm new password"}),s.jsx("input",{id:"confirm",type:"password",value:R,onChange:T=>I(T.target.value),autoComplete:"new-password",required:!0})]}),s.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?"Updating…":"Update password"})]})]})]})}),s.jsx("style",{children:`
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
      `})]})}const Ul=sessionStorage.redirect;delete sessionStorage.redirect;Ul&&Ul!==location.href&&history.replaceState(null,"",Ul);Wl.createRoot(document.getElementById("root")).render(function(){return s.jsx(Jf.StrictMode,{children:s.jsx(kb,{children:s.jsx(rw,{children:s.jsxs(iw,{children:[s.jsx(Vk,{}),s.jsxs(fb,{children:[s.jsxs(Se,{element:s.jsx(mw,{}),children:[s.jsx(Se,{path:"/",element:s.jsx(dp,{})}),s.jsx(Se,{path:"/home",element:s.jsx(dp,{})}),s.jsx(Se,{path:"/about",element:s.jsx(xk,{})}),s.jsx(Se,{path:"/faq",element:s.jsx(Wk,{})}),s.jsx(Se,{path:"/search",element:s.jsx($k,{})}),s.jsx(Se,{path:"/login",element:s.jsx(aw,{})}),s.jsx(Se,{path:"/register",element:s.jsx(ow,{})}),s.jsx(Se,{path:"/product/:slug",element:s.jsx(xn,{children:s.jsx(sw,{})})}),s.jsx(Se,{path:"/shop",element:s.jsx(xn,{children:s.jsx(gk,{})})}),s.jsx(Se,{path:"/contact",element:s.jsx(xn,{children:s.jsx(yk,{})})}),s.jsx(Se,{path:"/account",element:s.jsx(xn,{children:s.jsx(qk,{})})}),s.jsx(Se,{path:"/cart",element:s.jsx(xn,{children:s.jsx(lw,{})})}),s.jsx(Se,{path:"/checkout",element:s.jsx(xn,{children:s.jsx(dw,{})})}),s.jsx(Se,{path:"/orders",element:s.jsx(xn,{children:s.jsx(uw,{})})}),s.jsx(Se,{path:"/orders/:orderId",element:s.jsx(xn,{children:s.jsx(hw,{})})})]}),s.jsxs(Se,{path:"/admin",element:s.jsx(fk,{children:s.jsx(mk,{})}),children:[s.jsx(Se,{index:!0,element:s.jsx(F6,{})}),s.jsx(Se,{path:"products",element:s.jsx(hk,{})}),s.jsx(Se,{path:"users",element:s.jsx(pk,{})}),s.jsx(Se,{path:"orders",element:s.jsx(gw,{})})]})]})]})})})})}());
