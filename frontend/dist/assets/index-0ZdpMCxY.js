var b2=Object.defineProperty;var y2=(t,e,n)=>e in t?b2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>y2(t,typeof e!="symbol"?e+"":e,n);function w2(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bm={exports:{}},Ul={},Hm={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),j2=Symbol.for("react.portal"),k2=Symbol.for("react.fragment"),_2=Symbol.for("react.strict_mode"),S2=Symbol.for("react.profiler"),N2=Symbol.for("react.provider"),C2=Symbol.for("react.context"),z2=Symbol.for("react.forward_ref"),E2=Symbol.for("react.suspense"),R2=Symbol.for("react.memo"),M2=Symbol.for("react.lazy"),gp=Symbol.iterator;function P2(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var Um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$m=Object.assign,Wm={};function Ui(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Um}Ui.prototype.isReactComponent={};Ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vm(){}Vm.prototype=Ui.prototype;function Yu(t,e,n){this.props=t,this.context=e,this.refs=Wm,this.updater=n||Um}var Zu=Yu.prototype=new Vm;Zu.constructor=Yu;$m(Zu,Ui.prototype);Zu.isPureReactComponent=!0;var xp=Array.isArray,qm=Object.prototype.hasOwnProperty,Gu={current:null},Ym={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,r)&&!Ym.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ra,type:t,key:s,ref:o,props:i,_owner:Gu.current}}function T2(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ku(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function A2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?A2(""+t.key):e.toString(36)}function So(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case j2:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wc(o,0):r,xp(i)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),So(i,e,n,"",function(d){return d})):i!=null&&(Ku(i)&&(i=T2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xp(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+wc(s,l);o+=So(s,e,n,c,i)}else if(c=P2(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+wc(s,l++),o+=So(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var r=[],i=0;return So(t,r,"","",function(s){return e.call(n,s,i++)}),r}function O2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},No={transition:null},L2={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:No,ReactCurrentOwner:Gu};function Gm(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!Ku(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Ui;ae.Fragment=k2;ae.Profiler=S2;ae.PureComponent=Yu;ae.StrictMode=_2;ae.Suspense=E2;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L2;ae.act=Gm;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$m({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)qm.call(e,c)&&!Ym.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ra,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:C2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N2,_context:t},t.Consumer=t};ae.createElement=Zm;ae.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:z2,render:t}};ae.isValidElement=Ku;ae.lazy=function(t){return{$$typeof:M2,_payload:{_status:-1,_result:t},_init:O2}};ae.memo=function(t,e){return{$$typeof:R2,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};ae.unstable_act=Gm;ae.useCallback=function(t,e){return ft.current.useCallback(t,e)};ae.useContext=function(t){return ft.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ae.useEffect=function(t,e){return ft.current.useEffect(t,e)};ae.useId=function(){return ft.current.useId()};ae.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return ft.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ae.useRef=function(t){return ft.current.useRef(t)};ae.useState=function(t){return ft.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return ft.current.useTransition()};ae.version="18.3.1";Hm.exports=ae;var w=Hm.exports;const Km=Fm(w),I2=w2({__proto__:null,default:Km},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D2=w,F2=Symbol.for("react.element"),B2=Symbol.for("react.fragment"),H2=Object.prototype.hasOwnProperty,U2=D2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$2={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)H2.call(e,r)&&!$2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:F2,type:t,key:s,ref:o,props:i,_owner:U2.current}}Ul.Fragment=B2;Ul.jsx=Xm;Ul.jsxs=Xm;Bm.exports=Ul;var a=Bm.exports,pd={},Qm={exports:{}},Mt={},Jm={exports:{}},eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,z){var H=M.length;M.push(z);e:for(;0<H;){var G=H-1>>>1,J=M[G];if(0<i(J,z))M[G]=z,M[H]=J,H=G;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var z=M[0],H=M.pop();if(H!==z){M[0]=H;e:for(var G=0,J=M.length,xe=J>>>1;G<xe;){var pe=2*(G+1)-1,_e=M[pe],Me=pe+1,de=M[Me];if(0>i(_e,H))Me<J&&0>i(de,_e)?(M[G]=de,M[Me]=H,G=Me):(M[G]=_e,M[pe]=H,G=pe);else if(Me<J&&0>i(de,H))M[G]=de,M[Me]=H,G=Me;else break e}}return z}function i(M,z){var H=M.sortIndex-z.sortIndex;return H!==0?H:M.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,h=null,p=3,f=!1,m=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=M)r(d),z.sortIndex=z.expirationTime,e(c,z);else break;z=n(d)}}function k(M){if(g=!1,y(M),!m)if(n(c)!==null)m=!0,F(j);else{var z=n(d);z!==null&&W(k,z.startTime-M)}}function j(M,z){m=!1,g&&(g=!1,x(N),N=-1),f=!0;var H=p;try{for(y(z),h=n(c);h!==null&&(!(h.expirationTime>z)||M&&!C());){var G=h.callback;if(typeof G=="function"){h.callback=null,p=h.priorityLevel;var J=G(h.expirationTime<=z);z=t.unstable_now(),typeof J=="function"?h.callback=J:h===n(c)&&r(c),y(z)}else r(c);h=n(c)}if(h!==null)var xe=!0;else{var pe=n(d);pe!==null&&W(k,pe.startTime-z),xe=!1}return xe}finally{h=null,p=H,f=!1}}var S=!1,_=null,N=-1,A=5,E=-1;function C(){return!(t.unstable_now()-E<A)}function B(){if(_!==null){var M=t.unstable_now();E=M;var z=!0;try{z=_(!0,M)}finally{z?O():(S=!1,_=null)}}else S=!1}var O;if(typeof v=="function")O=function(){v(B)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,P=L.port2;L.port1.onmessage=B,O=function(){P.postMessage(null)}}else O=function(){b(B,0)};function F(M){_=M,S||(S=!0,O())}function W(M,z){N=b(function(){M(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,F(j))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(M){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var H=p;p=z;try{return M()}finally{p=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var H=p;p=M;try{return z()}finally{p=H}},t.unstable_scheduleCallback=function(M,z,H){var G=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?G+H:G):H=G,M){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=H+J,M={id:u++,callback:z,priorityLevel:M,startTime:H,expirationTime:J,sortIndex:-1},H>G?(M.sortIndex=H,e(d,M),n(c)===null&&M===n(d)&&(g?(x(N),N=-1):g=!0,W(k,H-G))):(M.sortIndex=J,e(c,M),m||f||(m=!0,F(j))),M},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(M){var z=p;return function(){var H=p;p=z;try{return M.apply(this,arguments)}finally{p=H}}}})(eg);Jm.exports=eg;var W2=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V2=w,Rt=W2;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tg=new Set,Us={};function Gr(t,e){Si(t,e),Si(t+"Capture",e)}function Si(t,e){for(Us[t]=e,t=0;t<e.length;t++)tg.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,q2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},yp={};function Y2(t){return fd.call(yp,t)?!0:fd.call(bp,t)?!1:q2.test(t)?yp[t]=!0:(bp[t]=!0,!1)}function Z2(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G2(t,e,n,r){if(e===null||typeof e>"u"||Z2(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xu=/[\-:]([a-z])/g;function Qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xu,Qu);tt[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xu,Qu);tt[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xu,Qu);tt[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ju(t,e,n,r){var i=tt.hasOwnProperty(e)?tt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G2(e,n,i,r)&&(n=null),r||i===null?Y2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=V2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),ri=Symbol.for("react.portal"),ii=Symbol.for("react.fragment"),eh=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),rg=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),xd=Symbol.for("react.suspense_list"),nh=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),ig=Symbol.for("react.offscreen"),wp=Symbol.iterator;function es(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,jc;function xs(t){if(jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||""}return`
`+jc+t}var kc=!1;function _c(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function K2(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ii:return"Fragment";case ri:return"Portal";case md:return"Profiler";case eh:return"StrictMode";case gd:return"Suspense";case xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rg:return(t.displayName||"Context")+".Consumer";case ng:return(t._context.displayName||"Context")+".Provider";case th:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nh:return e=t.displayName||null,e!==null?e:vd(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return vd(t(e))}catch{}}return null}function X2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===eh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q2(t){var e=sg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=Q2(t))}function ag(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=sg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bd(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&Ju(t,"checked",e,!1)}function yd(t,e){og(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||Xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(vs(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function lg(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ya,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J2=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(t){J2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Es[e]=Es[t]})});function ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Es.hasOwnProperty(t)&&Es[t]?(""+e).trim():e+"px"}function hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ug(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eb=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _d(t,e){if(e){if(eb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=null;function rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cd=null,xi=null,vi=null;function Np(t){if(t=Ta(t)){if(typeof Cd!="function")throw Error(D(280));var e=t.stateNode;e&&(e=Yl(e),Cd(t.stateNode,t.type,e))}}function pg(t){xi?vi?vi.push(t):vi=[t]:xi=t}function fg(){if(xi){var t=xi,e=vi;if(vi=xi=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function mg(t,e){return t(e)}function gg(){}var Sc=!1;function xg(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return mg(t,e,n)}finally{Sc=!1,(xi!==null||vi!==null)&&(gg(),fg())}}function Ws(t,e){var n=t.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var zd=!1;if(Tn)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){zd=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{zd=!1}function tb(t,e,n,r,i,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(u){this.onError(u)}}var Rs=!1,Qo=null,Jo=!1,Ed=null,nb={onError:function(t){Rs=!0,Qo=t}};function rb(t,e,n,r,i,s,o,l,c){Rs=!1,Qo=null,tb.apply(nb,arguments)}function ib(t,e,n,r,i,s,o,l,c){if(rb.apply(this,arguments),Rs){if(Rs){var d=Qo;Rs=!1,Qo=null}else throw Error(D(198));Jo||(Jo=!0,Ed=d)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cp(t){if(Kr(t)!==t)throw Error(D(188))}function sb(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cp(i),t;if(s===r)return Cp(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function bg(t){return t=sb(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var wg=Rt.unstable_scheduleCallback,zp=Rt.unstable_cancelCallback,ab=Rt.unstable_shouldYield,ob=Rt.unstable_requestPaint,De=Rt.unstable_now,lb=Rt.unstable_getCurrentPriorityLevel,ih=Rt.unstable_ImmediatePriority,jg=Rt.unstable_UserBlockingPriority,el=Rt.unstable_NormalPriority,cb=Rt.unstable_LowPriority,kg=Rt.unstable_IdlePriority,$l=null,mn=null;function db(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:pb,ub=Math.log,hb=Math.LN2;function pb(t){return t>>>=0,t===0?32:31-(ub(t)/hb|0)|0}var Za=64,Ga=4194304;function bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=bs(l):(s&=o,s!==0&&(r=bs(s)))}else o=n&~i,o!==0?r=bs(o):s!==0&&(r=bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),i=1<<n,r|=t[n],e&=~i;return r}function fb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qt(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=fb(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _g(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function gb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var be=0;function Sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ng,ah,Cg,zg,Eg,Md=!1,Ka=[],nr=null,rr=null,ir=null,Vs=new Map,qs=new Map,Yn=[],xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ta(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vb(t,e,n,r,i){switch(e){case"focusin":return nr=ns(nr,t,e,n,r,i),!0;case"dragenter":return rr=ns(rr,t,e,n,r,i),!0;case"mouseover":return ir=ns(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vs.set(s,ns(Vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qs.set(s,ns(qs.get(s)||null,t,e,n,r,i)),!0}return!1}function Rg(t){var e=Er(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=vg(n),e!==null){t.blockedOn=e,Eg(t.priority,function(){Cg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Co(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nd=r,n.target.dispatchEvent(r),Nd=null}else return e=Ta(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function Rp(t,e,n){Co(t)&&n.delete(e)}function bb(){Md=!1,nr!==null&&Co(nr)&&(nr=null),rr!==null&&Co(rr)&&(rr=null),ir!==null&&Co(ir)&&(ir=null),Vs.forEach(Rp),qs.forEach(Rp)}function rs(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,bb)))}function Ys(t){function e(i){return rs(i,t)}if(0<Ka.length){rs(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&rs(nr,t),rr!==null&&rs(rr,t),ir!==null&&rs(ir,t),Vs.forEach(e),qs.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&Yn.shift()}var bi=Dn.ReactCurrentBatchConfig,nl=!0;function yb(t,e,n,r){var i=be,s=bi.transition;bi.transition=null;try{be=1,oh(t,e,n,r)}finally{be=i,bi.transition=s}}function wb(t,e,n,r){var i=be,s=bi.transition;bi.transition=null;try{be=4,oh(t,e,n,r)}finally{be=i,bi.transition=s}}function oh(t,e,n,r){if(nl){var i=Pd(t,e,n,r);if(i===null)Lc(t,e,r,rl,n),Ep(t,r);else if(vb(i,t,e,n,r))r.stopPropagation();else if(Ep(t,r),e&4&&-1<xb.indexOf(t)){for(;i!==null;){var s=Ta(i);if(s!==null&&Ng(s),s=Pd(t,e,n,r),s===null&&Lc(t,e,r,rl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lc(t,e,r,null,n)}}var rl=null;function Pd(t,e,n,r){if(rl=null,t=rh(r),t=Er(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function Mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lb()){case ih:return 1;case jg:return 4;case el:case cb:return 16;case kg:return 536870912;default:return 16}default:return 16}}var Gn=null,lh=null,zo=null;function Pg(){if(zo)return zo;var t,e=lh,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zo=i.slice(t,1<r?1-r:void 0)}function Eo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xa(){return!0}function Mp(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xa:Mp,this.isPropagationStopped=Mp,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),e}var $i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=Pt($i),Pa=Oe({},$i,{view:0,detail:0}),jb=Pt(Pa),Cc,zc,is,Wl=Oe({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==is&&(is&&t.type==="mousemove"?(Cc=t.screenX-is.screenX,zc=t.screenY-is.screenY):zc=Cc=0,is=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),Pp=Pt(Wl),kb=Oe({},Wl,{dataTransfer:0}),_b=Pt(kb),Sb=Oe({},Pa,{relatedTarget:0}),Ec=Pt(Sb),Nb=Oe({},$i,{animationName:0,elapsedTime:0,pseudoElement:0}),Cb=Pt(Nb),zb=Oe({},$i,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eb=Pt(zb),Rb=Oe({},$i,{data:0}),Tp=Pt(Rb),Mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ab(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tb[t])?!!e[t]:!1}function dh(){return Ab}var Ob=Oe({},Pa,{key:function(t){if(t.key){var e=Mb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Eo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(t){return t.type==="keypress"?Eo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Eo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lb=Pt(Ob),Ib=Oe({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ap=Pt(Ib),Db=Oe({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),Fb=Pt(Db),Bb=Oe({},$i,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hb=Pt(Bb),Ub=Oe({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$b=Pt(Ub),Wb=[9,13,27,32],uh=Tn&&"CompositionEvent"in window,Ms=null;Tn&&"documentMode"in document&&(Ms=document.documentMode);var Vb=Tn&&"TextEvent"in window&&!Ms,Tg=Tn&&(!uh||Ms&&8<Ms&&11>=Ms),Op=" ",Lp=!1;function Ag(t,e){switch(t){case"keyup":return Wb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function qb(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(Lp=!0,Op);case"textInput":return t=e.data,t===Op&&Lp?null:t;default:return null}}function Yb(t,e){if(si)return t==="compositionend"||!uh&&Ag(t,e)?(t=Pg(),zo=lh=Gn=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var Zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zb[t.type]:e==="textarea"}function Lg(t,e,n,r){pg(r),e=il(e,"onChange"),0<e.length&&(n=new ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ps=null,Zs=null;function Gb(t){Yg(t,0)}function Vl(t){var e=li(t);if(ag(e))return t}function Kb(t,e){if(t==="change")return e}var Ig=!1;if(Tn){var Rc;if(Tn){var Mc="oninput"in document;if(!Mc){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Mc=typeof Dp.oninput=="function"}Rc=Mc}else Rc=!1;Ig=Rc&&(!document.documentMode||9<document.documentMode)}function Fp(){Ps&&(Ps.detachEvent("onpropertychange",Dg),Zs=Ps=null)}function Dg(t){if(t.propertyName==="value"&&Vl(Zs)){var e=[];Lg(e,Zs,t,rh(t)),xg(Gb,e)}}function Xb(t,e,n){t==="focusin"?(Fp(),Ps=e,Zs=n,Ps.attachEvent("onpropertychange",Dg)):t==="focusout"&&Fp()}function Qb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Zs)}function Jb(t,e){if(t==="click")return Vl(e)}function ey(t,e){if(t==="input"||t==="change")return Vl(e)}function ty(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:ty;function Gs(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fd.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function Fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=Xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xo(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ny(t){var e=Bg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(r!==null&&hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hp(n,s);var o=Hp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ry=Tn&&"documentMode"in document&&11>=document.documentMode,ai=null,Td=null,Ts=null,Ad=!1;function Up(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||ai==null||ai!==Xo(r)||(r=ai,"selectionStart"in r&&hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ts&&Gs(Ts,r)||(Ts=r,r=il(Td,"onSelect"),0<r.length&&(e=new ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oi={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Pc={},Hg={};Tn&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function ql(t){if(Pc[t])return Pc[t];if(!oi[t])return t;var e=oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hg)return Pc[t]=e[n];return t}var Ug=ql("animationend"),$g=ql("animationiteration"),Wg=ql("animationstart"),Vg=ql("transitionend"),qg=new Map,$p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){qg.set(t,e),Gr(e,[t])}for(var Tc=0;Tc<$p.length;Tc++){var Ac=$p[Tc],iy=Ac.toLowerCase(),sy=Ac[0].toUpperCase()+Ac.slice(1);xr(iy,"on"+sy)}xr(Ug,"onAnimationEnd");xr($g,"onAnimationIteration");xr(Wg,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Vg,"onTransitionEnd");Si("onMouseEnter",["mouseout","mouseover"]);Si("onMouseLeave",["mouseout","mouseover"]);Si("onPointerEnter",["pointerout","pointerover"]);Si("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ay=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function Wp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ib(r,e,void 0,t),t.currentTarget=null}function Yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Wp(i,l,d),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Wp(i,l,d),s=c}}}if(Jo)throw t=Ed,Jo=!1,Ed=null,t}function Ne(t,e){var n=e[Fd];n===void 0&&(n=e[Fd]=new Set);var r=t+"__bubble";n.has(r)||(Zg(e,t,2,!1),n.add(r))}function Oc(t,e,n){var r=0;e&&(r|=4),Zg(n,t,r,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function Ks(t){if(!t[Ja]){t[Ja]=!0,tg.forEach(function(n){n!=="selectionchange"&&(ay.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,Oc("selectionchange",!1,e))}}function Zg(t,e,n,r){switch(Mg(e)){case 1:var i=yb;break;case 4:i=wb;break;default:i=oh}n=i.bind(null,e,n,t),i=void 0,!zd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}xg(function(){var d=s,u=rh(n),h=[];e:{var p=qg.get(t);if(p!==void 0){var f=ch,m=t;switch(t){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":f=Lb;break;case"focusin":m="focus",f=Ec;break;case"focusout":m="blur",f=Ec;break;case"beforeblur":case"afterblur":f=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=_b;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Fb;break;case Ug:case $g:case Wg:f=Cb;break;case Vg:f=Hb;break;case"scroll":f=jb;break;case"wheel":f=$b;break;case"copy":case"cut":case"paste":f=Eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Ap}var g=(e&4)!==0,b=!g&&t==="scroll",x=g?p!==null?p+"Capture":null:p;g=[];for(var v=d,y;v!==null;){y=v;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,x!==null&&(k=Ws(v,x),k!=null&&g.push(Xs(v,k,y)))),b)break;v=v.return}0<g.length&&(p=new f(p,m,null,n,u),h.push({event:p,listeners:g}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",p&&n!==Nd&&(m=n.relatedTarget||n.fromElement)&&(Er(m)||m[An]))break e;if((f||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,f?(m=n.relatedTarget||n.toElement,f=d,m=m?Er(m):null,m!==null&&(b=Kr(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(f=null,m=d),f!==m)){if(g=Pp,k="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=Ap,k="onPointerLeave",x="onPointerEnter",v="pointer"),b=f==null?p:li(f),y=m==null?p:li(m),p=new g(k,v+"leave",f,n,u),p.target=b,p.relatedTarget=y,k=null,Er(u)===d&&(g=new g(x,v+"enter",m,n,u),g.target=y,g.relatedTarget=b,k=g),b=k,f&&m)t:{for(g=f,x=m,v=0,y=g;y;y=Qr(y))v++;for(y=0,k=x;k;k=Qr(k))y++;for(;0<v-y;)g=Qr(g),v--;for(;0<y-v;)x=Qr(x),y--;for(;v--;){if(g===x||x!==null&&g===x.alternate)break t;g=Qr(g),x=Qr(x)}g=null}else g=null;f!==null&&Vp(h,p,f,g,!1),m!==null&&b!==null&&Vp(h,b,m,g,!0)}}e:{if(p=d?li(d):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var j=Kb;else if(Ip(p))if(Ig)j=ey;else{j=Qb;var S=Xb}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=Jb);if(j&&(j=j(t,d))){Lg(h,j,n,u);break e}S&&S(t,p,d),t==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&wd(p,"number",p.value)}switch(S=d?li(d):window,t){case"focusin":(Ip(S)||S.contentEditable==="true")&&(ai=S,Td=d,Ts=null);break;case"focusout":Ts=Td=ai=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,Up(h,n,u);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Up(h,n,u)}var _;if(uh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else si?Ag(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Tg&&n.locale!=="ko"&&(si||N!=="onCompositionStart"?N==="onCompositionEnd"&&si&&(_=Pg()):(Gn=u,lh="value"in Gn?Gn.value:Gn.textContent,si=!0)),S=il(d,N),0<S.length&&(N=new Tp(N,t,null,n,u),h.push({event:N,listeners:S}),_?N.data=_:(_=Og(n),_!==null&&(N.data=_)))),(_=Vb?qb(t,n):Yb(t,n))&&(d=il(d,"onBeforeInput"),0<d.length&&(u=new Tp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:d}),u.data=_))}Yg(h,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ws(t,n),s!=null&&r.unshift(Xs(t,s,i)),s=Ws(t,e),s!=null&&r.push(Xs(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=Ws(n,s),c!=null&&o.unshift(Xs(n,c,l))):i||(c=Ws(n,s),c!=null&&o.push(Xs(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oy=/\r\n?/g,ly=/\u0000|\uFFFD/g;function qp(t){return(typeof t=="string"?t:""+t).replace(oy,`
`).replace(ly,"")}function eo(t,e,n){if(e=qp(e),qp(t)!==e&&n)throw Error(D(425))}function sl(){}var Od=null,Ld=null;function Id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(t){return Yp.resolve(null).then(t).catch(uy)}:Dd;function uy(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ys(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Wi,Qs="__reactProps$"+Wi,An="__reactContainer$"+Wi,Fd="__reactEvents$"+Wi,hy="__reactListeners$"+Wi,py="__reactHandles$"+Wi;function Er(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[An]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zp(t);t!==null;){if(n=t[fn])return n;t=Zp(t)}return e}t=n,n=t.parentNode}return null}function Ta(t){return t=t[fn]||t[An],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function Yl(t){return t[Qs]||null}var Bd=[],ci=-1;function vr(t){return{current:t}}function ze(t){0>ci||(t.current=Bd[ci],Bd[ci]=null,ci--)}function ke(t,e){ci++,Bd[ci]=t.current,t.current=e}var pr={},ct=vr(pr),wt=vr(!1),Br=pr;function Ni(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function al(){ze(wt),ze(ct)}function Gp(t,e,n){if(ct.current!==pr)throw Error(D(168));ke(ct,e),ke(wt,n)}function Gg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,X2(t)||"Unknown",i));return Oe({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Br=ct.current,ke(ct,t),ke(wt,wt.current),!0}function Kp(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=Gg(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,ze(wt),ze(ct),ke(ct,t)):ze(wt),ke(wt,n)}var Cn=null,Zl=!1,Dc=!1;function Kg(t){Cn===null?Cn=[t]:Cn.push(t)}function fy(t){Zl=!0,Kg(t)}function br(){if(!Dc&&Cn!==null){Dc=!0;var t=0,e=be;try{var n=Cn;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,Zl=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),wg(ih,br),i}finally{be=e,Dc=!1}}return null}var di=[],ui=0,ll=null,cl=0,At=[],Ot=0,Hr=null,Rn=1,Mn="";function _r(t,e){di[ui++]=cl,di[ui++]=ll,ll=t,cl=e}function Xg(t,e,n){At[Ot++]=Rn,At[Ot++]=Mn,At[Ot++]=Hr,Hr=t;var r=Rn;t=Mn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var s=32-Qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-Qt(e)+i|n<<i|r,Mn=s+t}else Rn=1<<s|n<<i|r,Mn=t}function ph(t){t.return!==null&&(_r(t,1),Xg(t,1,0))}function fh(t){for(;t===ll;)ll=di[--ui],di[ui]=null,cl=di[--ui],di[ui]=null;for(;t===Hr;)Hr=At[--Ot],At[Ot]=null,Mn=At[--Ot],At[Ot]=null,Rn=At[--Ot],At[Ot]=null}var Et=null,zt=null,Re=!1,Xt=null;function Qg(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,zt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Rn,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,zt=null,!0):!1;default:return!1}}function Hd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(Re){var e=zt;if(e){var n=e;if(!Xp(t,e)){if(Hd(t))throw Error(D(418));e=sr(n.nextSibling);var r=Et;e&&Xp(t,e)?Qg(r,n):(t.flags=t.flags&-4097|2,Re=!1,Et=t)}}else{if(Hd(t))throw Error(D(418));t.flags=t.flags&-4097|2,Re=!1,Et=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function to(t){if(t!==Et)return!1;if(!Re)return Qp(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Id(t.type,t.memoizedProps)),e&&(e=zt)){if(Hd(t))throw Jg(),Error(D(418));for(;e;)Qg(t,e),e=sr(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Et?sr(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=zt;t;)t=sr(t.nextSibling)}function Ci(){zt=Et=null,Re=!1}function mh(t){Xt===null?Xt=[t]:Xt.push(t)}var my=Dn.ReactCurrentBatchConfig;function ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function no(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function e1(t){function e(x,v){if(t){var y=x.deletions;y===null?(x.deletions=[v],x.flags|=16):y.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function i(x,v){return x=cr(x,v),x.index=0,x.sibling=null,x}function s(x,v,y){return x.index=y,t?(y=x.alternate,y!==null?(y=y.index,y<v?(x.flags|=2,v):y):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,v,y,k){return v===null||v.tag!==6?(v=Vc(y,x.mode,k),v.return=x,v):(v=i(v,y),v.return=x,v)}function c(x,v,y,k){var j=y.type;return j===ii?u(x,v,y.props.children,k,y.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Vn&&Jp(j)===v.type)?(k=i(v,y.props),k.ref=ss(x,v,y),k.return=x,k):(k=Lo(y.type,y.key,y.props,null,x.mode,k),k.ref=ss(x,v,y),k.return=x,k)}function d(x,v,y,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=qc(y,x.mode,k),v.return=x,v):(v=i(v,y.children||[]),v.return=x,v)}function u(x,v,y,k,j){return v===null||v.tag!==7?(v=Lr(y,x.mode,k,j),v.return=x,v):(v=i(v,y),v.return=x,v)}function h(x,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vc(""+v,x.mode,y),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return y=Lo(v.type,v.key,v.props,null,x.mode,y),y.ref=ss(x,null,v),y.return=x,y;case ri:return v=qc(v,x.mode,y),v.return=x,v;case Vn:var k=v._init;return h(x,k(v._payload),y)}if(vs(v)||es(v))return v=Lr(v,x.mode,y,null),v.return=x,v;no(x,v)}return null}function p(x,v,y,k){var j=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(x,v,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return y.key===j?c(x,v,y,k):null;case ri:return y.key===j?d(x,v,y,k):null;case Vn:return j=y._init,p(x,v,j(y._payload),k)}if(vs(y)||es(y))return j!==null?null:u(x,v,y,k,null);no(x,y)}return null}function f(x,v,y,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(y)||null,l(v,x,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Va:return x=x.get(k.key===null?y:k.key)||null,c(v,x,k,j);case ri:return x=x.get(k.key===null?y:k.key)||null,d(v,x,k,j);case Vn:var S=k._init;return f(x,v,y,S(k._payload),j)}if(vs(k)||es(k))return x=x.get(y)||null,u(v,x,k,j,null);no(v,k)}return null}function m(x,v,y,k){for(var j=null,S=null,_=v,N=v=0,A=null;_!==null&&N<y.length;N++){_.index>N?(A=_,_=null):A=_.sibling;var E=p(x,_,y[N],k);if(E===null){_===null&&(_=A);break}t&&_&&E.alternate===null&&e(x,_),v=s(E,v,N),S===null?j=E:S.sibling=E,S=E,_=A}if(N===y.length)return n(x,_),Re&&_r(x,N),j;if(_===null){for(;N<y.length;N++)_=h(x,y[N],k),_!==null&&(v=s(_,v,N),S===null?j=_:S.sibling=_,S=_);return Re&&_r(x,N),j}for(_=r(x,_);N<y.length;N++)A=f(_,x,N,y[N],k),A!==null&&(t&&A.alternate!==null&&_.delete(A.key===null?N:A.key),v=s(A,v,N),S===null?j=A:S.sibling=A,S=A);return t&&_.forEach(function(C){return e(x,C)}),Re&&_r(x,N),j}function g(x,v,y,k){var j=es(y);if(typeof j!="function")throw Error(D(150));if(y=j.call(y),y==null)throw Error(D(151));for(var S=j=null,_=v,N=v=0,A=null,E=y.next();_!==null&&!E.done;N++,E=y.next()){_.index>N?(A=_,_=null):A=_.sibling;var C=p(x,_,E.value,k);if(C===null){_===null&&(_=A);break}t&&_&&C.alternate===null&&e(x,_),v=s(C,v,N),S===null?j=C:S.sibling=C,S=C,_=A}if(E.done)return n(x,_),Re&&_r(x,N),j;if(_===null){for(;!E.done;N++,E=y.next())E=h(x,E.value,k),E!==null&&(v=s(E,v,N),S===null?j=E:S.sibling=E,S=E);return Re&&_r(x,N),j}for(_=r(x,_);!E.done;N++,E=y.next())E=f(_,x,N,E.value,k),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?N:E.key),v=s(E,v,N),S===null?j=E:S.sibling=E,S=E);return t&&_.forEach(function(B){return e(x,B)}),Re&&_r(x,N),j}function b(x,v,y,k){if(typeof y=="object"&&y!==null&&y.type===ii&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:e:{for(var j=y.key,S=v;S!==null;){if(S.key===j){if(j=y.type,j===ii){if(S.tag===7){n(x,S.sibling),v=i(S,y.props.children),v.return=x,x=v;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Vn&&Jp(j)===S.type){n(x,S.sibling),v=i(S,y.props),v.ref=ss(x,S,y),v.return=x,x=v;break e}n(x,S);break}else e(x,S);S=S.sibling}y.type===ii?(v=Lr(y.props.children,x.mode,k,y.key),v.return=x,x=v):(k=Lo(y.type,y.key,y.props,null,x.mode,k),k.ref=ss(x,v,y),k.return=x,x=k)}return o(x);case ri:e:{for(S=y.key;v!==null;){if(v.key===S)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(x,v.sibling),v=i(v,y.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=qc(y,x.mode,k),v.return=x,x=v}return o(x);case Vn:return S=y._init,b(x,v,S(y._payload),k)}if(vs(y))return m(x,v,y,k);if(es(y))return g(x,v,y,k);no(x,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(x,v.sibling),v=i(v,y),v.return=x,x=v):(n(x,v),v=Vc(y,x.mode,k),v.return=x,x=v),o(x)):n(x,v)}return b}var zi=e1(!0),t1=e1(!1),dl=vr(null),ul=null,hi=null,gh=null;function xh(){gh=hi=ul=null}function vh(t){var e=dl.current;ze(dl),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){ul=t,gh=hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(gh!==t)if(t={context:t,memoizedValue:e,next:null},hi===null){if(ul===null)throw Error(D(308));hi=t,ul.dependencies={lanes:0,firstContext:t}}else hi=hi.next=t;return e}var Rr=null;function bh(t){Rr===null?Rr=[t]:Rr.push(t)}function n1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bh(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,bh(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function Ro(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sh(t,n)}}function ef(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(s!==null){var h=i.baseState;o=0,u=d=c=null,l=s;do{var p=l.lane,f=l.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=t,g=l;switch(p=e,f=n,g.tag){case 1:if(m=g.payload,typeof m=="function"){h=m.call(f,h,p);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,p=typeof m=="function"?m.call(f,h,p):m,p==null)break e;h=Oe({},h,p);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=f,c=h):u=u.next=f,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(c=h),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=h}}function tf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Aa={},gn=vr(Aa),Js=vr(Aa),ea=vr(Aa);function Mr(t){if(t===Aa)throw Error(D(174));return t}function wh(t,e){switch(ke(ea,e),ke(Js,t),ke(gn,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}ze(gn),ke(gn,e)}function Ei(){ze(gn),ze(Js),ze(ea)}function i1(t){Mr(ea.current);var e=Mr(gn.current),n=kd(e,t.type);e!==n&&(ke(Js,t),ke(gn,n))}function jh(t){Js.current===t&&(ze(gn),ze(Js))}var Pe=vr(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function kh(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var Mo=Dn.ReactCurrentDispatcher,Bc=Dn.ReactCurrentBatchConfig,Ur=0,Te=null,Ue=null,Ze=null,fl=!1,As=!1,ta=0,gy=0;function nt(){throw Error(D(321))}function _h(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Sh(t,e,n,r,i,s){if(Ur=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mo.current=t===null||t.memoizedState===null?yy:wy,t=n(r,i),As){s=0;do{if(As=!1,ta=0,25<=s)throw Error(D(301));s+=1,Ze=Ue=null,e.updateQueue=null,Mo.current=jy,t=n(r,i)}while(As)}if(Mo.current=ml,e=Ue!==null&&Ue.next!==null,Ur=0,Ze=Ue=Te=null,fl=!1,e)throw Error(D(300));return t}function Nh(){var t=ta!==0;return ta=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Te.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Bt(){if(Ue===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ze===null?Te.memoizedState:Ze.next;if(e!==null)Ze=e,Ue=t;else{if(t===null)throw Error(D(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ze===null?Te.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function na(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,d=s;do{var u=d.lane;if((Ur&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var h={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=h,o=r):c=c.next=h,Te.lanes|=u,$r|=u}d=d.next}while(d!==null&&d!==s);c===null?o=r:c.next=l,tn(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function s1(){}function a1(t,e){var n=Te,r=Bt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Ch(c1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,ra(9,l1.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(D(349));Ur&30||o1(n,e,i)}return i}function o1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l1(t,e,n,r){e.value=n,e.getSnapshot=r,d1(e)&&u1(t)}function c1(t,e,n){return n(function(){d1(e)&&u1(t)})}function d1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function u1(t){var e=On(t,1);e!==null&&Jt(e,t,1,-1)}function nf(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},e.queue=t,t=t.dispatch=by.bind(null,Te,t),[e.memoizedState,t]}function ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h1(){return Bt().memoizedState}function Po(t,e,n,r){var i=hn();Te.flags|=t,i.memoizedState=ra(1|e,n,void 0,r===void 0?null:r)}function Gl(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&_h(r,o.deps)){i.memoizedState=ra(e,n,s,r);return}}Te.flags|=t,i.memoizedState=ra(1|e,n,s,r)}function rf(t,e){return Po(8390656,8,t,e)}function Ch(t,e){return Gl(2048,8,t,e)}function p1(t,e){return Gl(4,2,t,e)}function f1(t,e){return Gl(4,4,t,e)}function m1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g1(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4,4,m1.bind(null,e,t),n)}function zh(){}function x1(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_h(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v1(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_h(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function b1(t,e,n){return Ur&21?(tn(n,e)||(n=_g(),Te.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function xy(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Bc.transition;Bc.transition={};try{t(!1),e()}finally{be=n,Bc.transition=r}}function y1(){return Bt().memoizedState}function vy(t,e,n){var r=lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w1(t))j1(e,n);else if(n=n1(t,e,n,r),n!==null){var i=ht();Jt(n,t,r,i),k1(n,e,r)}}function by(t,e,n){var r=lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w1(t))j1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,o)){var c=e.interleaved;c===null?(i.next=i,bh(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=n1(t,e,i,r),n!==null&&(i=ht(),Jt(n,t,r,i),k1(n,e,r))}}function w1(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function j1(t,e){As=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sh(t,n)}}var ml={readContext:Ft,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},yy={readContext:Ft,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:rf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Po(4194308,4,m1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Po(4194308,4,t,e)},useInsertionEffect:function(t,e){return Po(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vy.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:nf,useDebugValue:zh,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=nf(!1),e=t[0];return t=xy.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=hn();if(Re){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),Ge===null)throw Error(D(349));Ur&30||o1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rf(c1.bind(null,r,s,t),[t]),r.flags|=2048,ra(9,l1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=Ge.identifierPrefix;if(Re){var n=Mn,r=Rn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wy={readContext:Ft,useCallback:x1,useContext:Ft,useEffect:Ch,useImperativeHandle:g1,useInsertionEffect:p1,useLayoutEffect:f1,useMemo:v1,useReducer:Hc,useRef:h1,useState:function(){return Hc(na)},useDebugValue:zh,useDeferredValue:function(t){var e=Bt();return b1(e,Ue.memoizedState,t)},useTransition:function(){var t=Hc(na)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:a1,useId:y1,unstable_isNewReconciler:!1},jy={readContext:Ft,useCallback:x1,useContext:Ft,useEffect:Ch,useImperativeHandle:g1,useInsertionEffect:p1,useLayoutEffect:f1,useMemo:v1,useReducer:Uc,useRef:h1,useState:function(){return Uc(na)},useDebugValue:zh,useDeferredValue:function(t){var e=Bt();return Ue===null?e.memoizedState=t:b1(e,Ue.memoizedState,t)},useTransition:function(){var t=Uc(na)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:a1,useId:y1,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=lr(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Jt(e,t,i,r),Ro(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=lr(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Jt(e,t,i,r),Ro(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=lr(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Jt(e,t,r,n),Ro(e,t,r))}};function sf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,r)||!Gs(i,s):!0}function _1(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=jt(e)?Br:ct.current,r=e.contextTypes,s=(r=r!=null)?Ni(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function af(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function Vd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},yh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=jt(e)?Br:ct.current,i.context=Ni(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Kl.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ri(t,e){try{var n="",r=e;do n+=K2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function S1(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xl||(xl=!0,nu=r),qd(t,e)},n}function N1(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function of(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ky;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Iy.bind(null,t,e,n),e.then(t,t))}function lf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var _y=Dn.ReactCurrentOwner,yt=!1;function ut(t,e,n,r){e.child=t===null?t1(e,null,n,r):zi(e,t.child,n,r)}function df(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=Sh(t,e,n,r,s,i),n=Nh(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Re&&n&&ph(e),e.flags|=1,ut(t,e,r,i),e.child)}function uf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C1(t,e,s,r,i)):(t=Lo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(o,r)&&t.ref===e.ref)return Ln(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function C1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gs(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Ln(t,e,i)}return Yd(t,e,n,r,i)}function z1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(fi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(fi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(fi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(fi,Ct),Ct|=r;return ut(t,e,i,n),e.child}function E1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yd(t,e,n,r,i){var s=jt(n)?Br:ct.current;return s=Ni(e,s),yi(e,i),n=Sh(t,e,n,r,s,i),r=Nh(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ln(t,e,i)):(Re&&r&&ph(e),e.flags|=1,ut(t,e,n,i),e.child)}function hf(t,e,n,r,i){if(jt(n)){var s=!0;ol(e)}else s=!1;if(yi(e,i),e.stateNode===null)To(t,e),_1(e,n,r),Vd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ft(d):(d=jt(n)?Br:ct.current,d=Ni(e,d));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&af(e,o,r,d),qn=!1;var p=e.memoizedState;o.state=p,hl(e,r,o,i),c=e.memoizedState,l!==r||p!==c||wt.current||qn?(typeof u=="function"&&(Wd(e,n,u,r),c=e.memoizedState),(l=qn||sf(e,n,l,r,p,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,r1(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Yt(e.type,l),o.props=d,h=e.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ft(c):(c=jt(n)?Br:ct.current,c=Ni(e,c));var f=n.getDerivedStateFromProps;(u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||p!==c)&&af(e,o,r,c),qn=!1,p=e.memoizedState,o.state=p,hl(e,r,o,i);var m=e.memoizedState;l!==h||p!==m||wt.current||qn?(typeof f=="function"&&(Wd(e,n,f,r),m=e.memoizedState),(d=qn||sf(e,n,d,r,p,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Zd(t,e,n,r,s,i)}function Zd(t,e,n,r,i,s){E1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kp(e,n,!1),Ln(t,e,s);r=e.stateNode,_y.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,s),e.child=zi(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&Kp(e,n,!0),e.child}function R1(t){var e=t.stateNode;e.pendingContext?Gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gp(t,e.context,!1),wh(t,e.containerInfo)}function pf(t,e,n,r,i){return Ci(),mh(i),e.flags|=256,ut(t,e,n,r),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function M1(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Pe,i&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kd(n),e.memoizedState=Gd,t):Eh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Sy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=cr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gd,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Eh(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ro(t,e,n,r){return r!==null&&mh(r),zi(e,t.child,null,n),t=Eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$c(Error(D(422))),ro(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=Kd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return ro(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(D(419)),r=$c(s,r,void 0),ro(t,e,o,r)}if(l=(o&t.childLanes)!==0,yt||l){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),Jt(r,t,i,-1))}return Oh(),r=$c(Error(D(421))),ro(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dy.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=sr(i.nextSibling),Et=e,Re=!0,Xt=null,t!==null&&(At[Ot++]=Rn,At[Ot++]=Mn,At[Ot++]=Hr,Rn=t.id,Mn=t.overflow,Hr=e),e=Eh(e,r.children),e.flags|=4096,e)}function ff(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$d(t.return,e,n)}function Wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function P1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ff(t,n,e);else if(t.tag===19)ff(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function To(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ny(t,e,n){switch(e.tag){case 3:R1(e),Ci();break;case 5:i1(e);break;case 1:jt(e.type)&&ol(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?M1(t,e,n):(ke(Pe,Pe.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return P1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,z1(t,e,n)}return Ln(t,e,n)}var T1,Xd,A1,O1;T1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xd=function(){};A1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(gn.current);var s=null;switch(n){case"input":i=bd(t,i),r=bd(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=jd(t,i),r=jd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sl)}_d(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Us.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Us.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ne("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};O1=function(t,e,n,r){n!==r&&(e.flags|=4)};function as(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Cy(t,e,n){var r=e.pendingProps;switch(fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return jt(e.type)&&al(),rt(e),null;case 3:return r=e.stateNode,Ei(),ze(wt),ze(ct),kh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(to(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(su(Xt),Xt=null))),Xd(t,e),rt(e),null;case 5:jh(e);var i=Mr(ea.current);if(n=e.type,t!==null&&e.stateNode!=null)A1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return rt(e),null}if(t=Mr(gn.current),to(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Qs]=s,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<ys.length;i++)Ne(ys[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":jp(r,s),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ne("invalid",r);break;case"textarea":_p(r,s),Ne("invalid",r)}_d(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&eo(r.textContent,l,t),i=["children",""+l]):Us.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":qa(r),kp(r,s,!0);break;case"textarea":qa(r),Sp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Qs]=r,T1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<ys.length;i++)Ne(ys[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":jp(t,r),i=bd(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":_p(t,r),i=jd(t,r),Ne("invalid",t);break;default:i=r}_d(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?hg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$s(t,c):typeof c=="number"&&$s(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Us.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ne("scroll",t):c!=null&&Ju(t,s,c,o))}switch(n){case"input":qa(t),kp(t,r,!1);break;case"textarea":qa(t),Sp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)O1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=Mr(ea.current),Mr(gn.current),to(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return rt(e),null;case 13:if(ze(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&zt!==null&&e.mode&1&&!(e.flags&128))Jg(),Ci(),e.flags|=98560,s=!1;else if(s=to(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(D(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[fn]=e}else Ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Xt!==null&&(su(Xt),Xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?We===0&&(We=3):Oh())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Ei(),Xd(t,e),t===null&&Ks(e.stateNode.containerInfo),rt(e),null;case 10:return vh(e.type._context),rt(e),null;case 17:return jt(e.type)&&al(),rt(e),null;case 19:if(ze(Pe),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)as(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pl(t),o!==null){for(e.flags|=128,as(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>Mi&&(e.flags|=128,r=!0,as(s,!1),e.lanes=4194304)}else{if(!r)if(t=pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),as(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return rt(e),null}else 2*De()-s.renderingStartTime>Mi&&n!==1073741824&&(e.flags|=128,r=!0,as(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Pe.current,ke(Pe,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Ah(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function zy(t,e){switch(fh(e),e.tag){case 1:return jt(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ei(),ze(wt),ze(ct),kh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jh(e),null;case 13:if(ze(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ze(Pe),null;case 4:return Ei(),null;case 10:return vh(e.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var io=!1,st=!1,Ey=typeof WeakSet=="function"?WeakSet:Set,q=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Qd(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var mf=!1;function Ry(t,e){if(Od=nl,t=Bg(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,u=0,h=t,p=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)p=h,h=f;for(;;){if(h===t)break t;if(p===n&&++d===i&&(l=o),p===s&&++u===r&&(c=o),(f=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=f}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},nl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var g=m.memoizedProps,b=m.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?g:Yt(e.type,g),b);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){Ie(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return m=mf,mf=!1,m}function Os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qd(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Jd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L1(t){var e=t.alternate;e!==null&&(t.alternate=null,L1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Qs],delete e[Fd],delete e[hy],delete e[py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I1(t){return t.tag===5||t.tag===3||t.tag===4}function gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(r!==4&&(t=t.child,t!==null))for(eu(t,e,n),t=t.sibling;t!==null;)eu(t,e,n),t=t.sibling}function tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tu(t,e,n),t=t.sibling;t!==null;)tu(t,e,n),t=t.sibling}var Xe=null,Gt=!1;function Hn(t,e,n){for(n=n.child;n!==null;)D1(t,e,n),n=n.sibling}function D1(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:st||pi(n,e);case 6:var r=Xe,i=Gt;Xe=null,Hn(t,e,n),Xe=r,Gt=i,Xe!==null&&(Gt?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Gt?(t=Xe,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),Ys(t)):Ic(Xe,n.stateNode));break;case 4:r=Xe,i=Gt,Xe=n.stateNode.containerInfo,Gt=!0,Hn(t,e,n),Xe=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qd(n,e,o),i=i.next}while(i!==r)}Hn(t,e,n);break;case 1:if(!st&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Hn(t,e,n);break;case 21:Hn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Hn(t,e,n),st=r):Hn(t,e,n);break;default:Hn(t,e,n)}}function xf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ey),e.forEach(function(r){var i=Fy.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,Gt=!1;break e;case 3:Xe=l.stateNode.containerInfo,Gt=!0;break e;case 4:Xe=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(Xe===null)throw Error(D(160));D1(s,o,i),Xe=null,Gt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Ie(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F1(e,t),e=e.sibling}function F1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),ln(t),r&4){try{Os(3,t,t.return),Xl(3,t)}catch(g){Ie(t,t.return,g)}try{Os(5,t,t.return)}catch(g){Ie(t,t.return,g)}}break;case 1:Vt(e,t),ln(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(Vt(e,t),ln(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{$s(i,"")}catch(g){Ie(t,t.return,g)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&og(i,s),Sd(l,o);var d=Sd(l,s);for(o=0;o<c.length;o+=2){var u=c[o],h=c[o+1];u==="style"?hg(i,h):u==="dangerouslySetInnerHTML"?dg(i,h):u==="children"?$s(i,h):Ju(i,u,h,d)}switch(l){case"input":yd(i,s);break;case"textarea":lg(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?gi(i,!!s.multiple,f,!1):p!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qs]=s}catch(g){Ie(t,t.return,g)}}break;case 6:if(Vt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(g){Ie(t,t.return,g)}}break;case 3:if(Vt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ys(e.containerInfo)}catch(g){Ie(t,t.return,g)}break;case 4:Vt(e,t),ln(t);break;case 13:Vt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ph=De())),r&4&&xf(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(st=(d=st)||u,Vt(e,t),st=d):Vt(e,t),ln(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(q=t,u=t.child;u!==null;){for(h=q=u;q!==null;){switch(p=q,f=p.child,p.tag){case 0:case 11:case 14:case 15:Os(4,p,p.return);break;case 1:pi(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(g){Ie(r,n,g)}}break;case 5:pi(p,p.return);break;case 22:if(p.memoizedState!==null){bf(h);continue}}f!==null?(f.return=p,q=f):bf(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{i=h.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ug("display",o))}catch(g){Ie(t,t.return,g)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(g){Ie(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),ln(t),r&4&&xf(t);break;case 21:break;default:Vt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I1(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($s(i,""),r.flags&=-33);var s=gf(t);tu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gf(t);eu(t,l,o);break;default:throw Error(D(161))}}catch(c){Ie(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function My(t,e,n){q=t,B1(t)}function B1(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||io;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||st;l=io;var d=st;if(io=o,(st=c)&&!d)for(q=i;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null?yf(i):c!==null?(c.return=o,q=c):yf(i);for(;s!==null;)q=s,B1(s),s=s.sibling;q=i,io=l,st=d}vf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):vf(t)}}function vf(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Ys(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}st||e.flags&512&&Jd(e)}catch(p){Ie(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function bf(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function yf(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(c){Ie(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ie(e,i,c)}}var s=e.return;try{Jd(e)}catch(c){Ie(e,s,c)}break;case 5:var o=e.return;try{Jd(e)}catch(c){Ie(e,o,c)}}}catch(c){Ie(e,e.return,c)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var Py=Math.ceil,gl=Dn.ReactCurrentDispatcher,Rh=Dn.ReactCurrentOwner,Dt=Dn.ReactCurrentBatchConfig,ue=0,Ge=null,Be=null,Je=0,Ct=0,fi=vr(0),We=0,ia=null,$r=0,Ql=0,Mh=0,Ls=null,vt=null,Ph=0,Mi=1/0,Nn=null,xl=!1,nu=null,or=null,so=!1,Kn=null,vl=0,Is=0,ru=null,Ao=-1,Oo=0;function ht(){return ue&6?De():Ao!==-1?Ao:Ao=De()}function lr(t){return t.mode&1?ue&2&&Je!==0?Je&-Je:my.transition!==null?(Oo===0&&(Oo=_g()),Oo):(t=be,t!==0||(t=window.event,t=t===void 0?16:Mg(t.type)),t):1}function Jt(t,e,n,r){if(50<Is)throw Is=0,ru=null,Error(D(185));Ma(t,n,r),(!(ue&2)||t!==Ge)&&(t===Ge&&(!(ue&2)&&(Ql|=n),We===4&&Zn(t,Je)),kt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Mi=De()+500,Zl&&br()))}function kt(t,e){var n=t.callbackNode;mb(t,e);var r=tl(t,t===Ge?Je:0);if(r===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?fy(wf.bind(null,t)):Kg(wf.bind(null,t)),dy(function(){!(ue&6)&&br()}),n=null;else{switch(Sg(r)){case 1:n=ih;break;case 4:n=jg;break;case 16:n=el;break;case 536870912:n=kg;break;default:n=el}n=Z1(n,H1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H1(t,e){if(Ao=-1,Oo=0,ue&6)throw Error(D(327));var n=t.callbackNode;if(wi()&&t.callbackNode!==n)return null;var r=tl(t,t===Ge?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bl(t,r);else{e=r;var i=ue;ue|=2;var s=$1();(Ge!==t||Je!==e)&&(Nn=null,Mi=De()+500,Or(t,e));do try{Oy();break}catch(l){U1(t,l)}while(!0);xh(),gl.current=s,ue=i,Be!==null?e=0:(Ge=null,Je=0,e=We)}if(e!==0){if(e===2&&(i=Rd(t),i!==0&&(r=i,e=iu(t,i))),e===1)throw n=ia,Or(t,0),Zn(t,r),kt(t,De()),n;if(e===6)Zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ty(i)&&(e=bl(t,r),e===2&&(s=Rd(t),s!==0&&(r=s,e=iu(t,s))),e===1))throw n=ia,Or(t,0),Zn(t,r),kt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:Sr(t,vt,Nn);break;case 3:if(Zn(t,r),(r&130023424)===r&&(e=Ph+500-De(),10<e)){if(tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dd(Sr.bind(null,t,vt,Nn),e);break}Sr(t,vt,Nn);break;case 4:if(Zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Py(r/1960))-r,10<r){t.timeoutHandle=Dd(Sr.bind(null,t,vt,Nn),r);break}Sr(t,vt,Nn);break;case 5:Sr(t,vt,Nn);break;default:throw Error(D(329))}}}return kt(t,De()),t.callbackNode===n?H1.bind(null,t):null}function iu(t,e){var n=Ls;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=bl(t,e),t!==2&&(e=vt,vt=n,e!==null&&su(e)),t}function su(t){vt===null?vt=t:vt.push.apply(vt,t)}function Ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zn(t,e){for(e&=~Mh,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function wf(t){if(ue&6)throw Error(D(327));wi();var e=tl(t,0);if(!(e&1))return kt(t,De()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var r=Rd(t);r!==0&&(e=r,n=iu(t,r))}if(n===1)throw n=ia,Or(t,0),Zn(t,e),kt(t,De()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,vt,Nn),kt(t,De()),null}function Th(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Mi=De()+500,Zl&&br())}}function Wr(t){Kn!==null&&Kn.tag===0&&!(ue&6)&&wi();var e=ue;ue|=1;var n=Dt.transition,r=be;try{if(Dt.transition=null,be=1,t)return t()}finally{be=r,Dt.transition=n,ue=e,!(ue&6)&&br()}}function Ah(){Ct=fi.current,ze(fi)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cy(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Ei(),ze(wt),ze(ct),kh();break;case 5:jh(r);break;case 4:Ei();break;case 13:ze(Pe);break;case 19:ze(Pe);break;case 10:vh(r.type._context);break;case 22:case 23:Ah()}n=n.return}if(Ge=t,Be=t=cr(t.current,null),Je=Ct=e,We=0,ia=null,Mh=Ql=$r=0,vt=Ls=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return t}function U1(t,e){do{var n=Be;try{if(xh(),Mo.current=ml,fl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(Ur=0,Ze=Ue=Te=null,As=!1,ta=0,Rh.current=null,n===null||n.return===null){We=1,ia=e,Be=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=Je,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=lf(o);if(f!==null){f.flags&=-257,cf(f,o,l,s,e),f.mode&1&&of(s,d,e),e=f,c=d;var m=e.updateQueue;if(m===null){var g=new Set;g.add(c),e.updateQueue=g}else m.add(c);break e}else{if(!(e&1)){of(s,d,e),Oh();break e}c=Error(D(426))}}else if(Re&&l.mode&1){var b=lf(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),cf(b,o,l,s,e),mh(Ri(c,l));break e}}s=c=Ri(c,l),We!==4&&(We=2),Ls===null?Ls=[s]:Ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=S1(s,c,e);ef(s,x);break e;case 1:l=c;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(or===null||!or.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var k=N1(s,l,e);ef(s,k);break e}}s=s.return}while(s!==null)}V1(n)}catch(j){e=j,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function $1(){var t=gl.current;return gl.current=ml,t===null?ml:t}function Oh(){(We===0||We===3||We===2)&&(We=4),Ge===null||!($r&268435455)&&!(Ql&268435455)||Zn(Ge,Je)}function bl(t,e){var n=ue;ue|=2;var r=$1();(Ge!==t||Je!==e)&&(Nn=null,Or(t,e));do try{Ay();break}catch(i){U1(t,i)}while(!0);if(xh(),ue=n,gl.current=r,Be!==null)throw Error(D(261));return Ge=null,Je=0,We}function Ay(){for(;Be!==null;)W1(Be)}function Oy(){for(;Be!==null&&!ab();)W1(Be)}function W1(t){var e=Y1(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?V1(t):Be=e,Rh.current=null}function V1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zy(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Be=null;return}}else if(n=Cy(n,e,Ct),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);We===0&&(We=5)}function Sr(t,e,n){var r=be,i=Dt.transition;try{Dt.transition=null,be=1,Ly(t,e,n,r)}finally{Dt.transition=i,be=r}return null}function Ly(t,e,n,r){do wi();while(Kn!==null);if(ue&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gb(t,s),t===Ge&&(Be=Ge=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,Z1(el,function(){return wi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=be;be=1;var l=ue;ue|=4,Rh.current=null,Ry(t,n),F1(n,t),ny(Ld),nl=!!Od,Ld=Od=null,t.current=n,My(n),ob(),ue=l,be=o,Dt.transition=s}else t.current=n;if(so&&(so=!1,Kn=t,vl=i),s=t.pendingLanes,s===0&&(or=null),db(n.stateNode),kt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xl)throw xl=!1,t=nu,nu=null,t;return vl&1&&t.tag!==0&&wi(),s=t.pendingLanes,s&1?t===ru?Is++:(Is=0,ru=t):Is=0,br(),null}function wi(){if(Kn!==null){var t=Sg(vl),e=Dt.transition,n=be;try{if(Dt.transition=null,be=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,vl=0,ue&6)throw Error(D(331));var i=ue;for(ue|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(q=d;q!==null;){var u=q;switch(u.tag){case 0:case 11:case 15:Os(8,u,s)}var h=u.child;if(h!==null)h.return=u,q=h;else for(;q!==null;){u=q;var p=u.sibling,f=u.return;if(L1(u),u===d){q=null;break}if(p!==null){p.return=f,q=p;break}q=f}}}var m=s.alternate;if(m!==null){var g=m.child;if(g!==null){m.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Os(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,q=x;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,q=y;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(j){Ie(l,l.return,j)}if(l===o){q=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,q=k;break e}q=l.return}}if(ue=i,br(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot($l,t)}catch{}r=!0}return r}finally{be=n,Dt.transition=e}}return!1}function jf(t,e,n){e=Ri(n,e),e=S1(t,e,1),t=ar(t,e,1),e=ht(),t!==null&&(Ma(t,1,e),kt(t,e))}function Ie(t,e,n){if(t.tag===3)jf(t,t,n);else for(;e!==null;){if(e.tag===3){jf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=Ri(n,t),t=N1(e,t,1),e=ar(e,t,1),t=ht(),e!==null&&(Ma(e,1,t),kt(e,t));break}}e=e.return}}function Iy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Je&n)===n&&(We===4||We===3&&(Je&130023424)===Je&&500>De()-Ph?Or(t,0):Mh|=n),kt(t,e)}function q1(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=ht();t=On(t,e),t!==null&&(Ma(t,e,n),kt(t,n))}function Dy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),q1(t,n)}function Fy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),q1(t,n)}var Y1;Y1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,Ny(t,e,n);yt=!!(t.flags&131072)}else yt=!1,Re&&e.flags&1048576&&Xg(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;To(t,e),t=e.pendingProps;var i=Ni(e,ct.current);yi(e,n),i=Sh(null,e,r,t,i,n);var s=Nh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yh(e),i.updater=Kl,e.stateNode=i,i._reactInternals=e,Vd(e,r,t,n),e=Zd(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&ph(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(To(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Hy(r),t=Yt(r,t),i){case 0:e=Yd(null,e,r,t,n);break e;case 1:e=hf(null,e,r,t,n);break e;case 11:e=df(null,e,r,t,n);break e;case 14:e=uf(null,e,r,Yt(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Yd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),hf(t,e,r,i,n);case 3:e:{if(R1(e),t===null)throw Error(D(387));r=e.pendingProps,s=e.memoizedState,i=s.element,r1(t,e),hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ri(Error(D(423)),e),e=pf(t,e,r,n,i);break e}else if(r!==i){i=Ri(Error(D(424)),e),e=pf(t,e,r,n,i);break e}else for(zt=sr(e.stateNode.containerInfo.firstChild),Et=e,Re=!0,Xt=null,n=t1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ci(),r===i){e=Ln(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return i1(e),t===null&&Ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Id(r,i)?o=null:s!==null&&Id(r,s)&&(e.flags|=32),E1(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return M1(t,e,n);case 4:return wh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),df(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(dl,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!wt.current){e=Ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Pn(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),$d(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$d(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=Ft(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),uf(t,e,r,i,n);case 15:return C1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),To(t,e),e.tag=1,jt(r)?(t=!0,ol(e)):t=!1,yi(e,n),_1(e,r,i),Vd(e,r,i,n),Zd(null,e,r,!0,t,n);case 19:return P1(t,e,n);case 22:return z1(t,e,n)}throw Error(D(156,e.tag))};function Z1(t,e){return wg(t,e)}function By(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new By(t,e,n,r)}function Lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hy(t){if(typeof t=="function")return Lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===th)return 11;if(t===nh)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ii:return Lr(n.children,i,s,e);case eh:o=8,i|=8;break;case md:return t=Lt(12,n,e,i|2),t.elementType=md,t.lanes=s,t;case gd:return t=Lt(13,n,e,i),t.elementType=gd,t.lanes=s,t;case xd:return t=Lt(19,n,e,i),t.elementType=xd,t.lanes=s,t;case ig:return Jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ng:o=10;break e;case rg:o=9;break e;case th:o=11;break e;case nh:o=14;break e;case Vn:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Jl(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=ig,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function qc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Uy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ih(t,e,n,r,i,s,o,l,c){return t=new Uy(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yh(s),t}function $y(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G1(t){if(!t)return pr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(jt(n))return Gg(t,n,e)}return e}function K1(t,e,n,r,i,s,o,l,c){return t=Ih(n,r,!0,t,i,s,o,l,c),t.context=G1(null),n=t.current,r=ht(),i=lr(n),s=Pn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Ma(t,i,r),kt(t,r),t}function ec(t,e,n,r){var i=e.current,s=ht(),o=lr(i);return n=G1(n),e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Jt(t,i,o,s),Ro(t,i,o)),o}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dh(t,e){kf(t,e),(t=t.alternate)&&kf(t,e)}function Wy(){return null}var X1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fh(t){this._internalRoot=t}tc.prototype.render=Fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));ec(t,e,null,null)};tc.prototype.unmount=Fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){ec(null,t,null,null)}),e[An]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&Rg(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _f(){}function Vy(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=yl(o);s.call(d)}}var o=K1(e,r,t,0,null,!1,!1,"",_f);return t._reactRootContainer=o,t[An]=o.current,Ks(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=yl(c);l.call(d)}}var c=Ih(t,0,!1,null,null,!1,!1,"",_f);return t._reactRootContainer=c,t[An]=c.current,Ks(t.nodeType===8?t.parentNode:t),Wr(function(){ec(e,c,n,r)}),c}function rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=yl(o);l.call(c)}}ec(e,o,t,i)}else o=Vy(n,e,t,i,r);return yl(o)}Ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bs(e.pendingLanes);n!==0&&(sh(e,n|1),kt(e,De()),!(ue&6)&&(Mi=De()+500,br()))}break;case 13:Wr(function(){var r=On(t,1);if(r!==null){var i=ht();Jt(r,t,1,i)}}),Dh(t,1)}};ah=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=ht();Jt(e,t,134217728,n)}Dh(t,134217728)}};Cg=function(t){if(t.tag===13){var e=lr(t),n=On(t,e);if(n!==null){var r=ht();Jt(n,t,e,r)}Dh(t,e)}};zg=function(){return be};Eg=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};Cd=function(t,e,n){switch(e){case"input":if(yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yl(r);if(!i)throw Error(D(90));ag(r),yd(r,i)}}}break;case"textarea":lg(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};mg=Th;gg=Wr;var qy={usingClientEntryPoint:!1,Events:[Ta,li,Yl,pg,fg,Th]},os={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bg(t),t===null?null:t.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{$l=ao.inject(Yy),mn=ao}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error(D(200));return $y(t,e,null,n)};Mt.createRoot=function(t,e){if(!Bh(t))throw Error(D(299));var n=!1,r="",i=X1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ih(t,1,!1,null,null,n,!1,r,i),t[An]=e.current,Ks(t.nodeType===8?t.parentNode:t),new Fh(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=bg(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return Wr(t)};Mt.hydrate=function(t,e,n){if(!nc(e))throw Error(D(200));return rc(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=X1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=K1(e,null,t,1,n??null,i,!1,s,o),t[An]=e.current,Ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tc(e)};Mt.render=function(t,e,n){if(!nc(e))throw Error(D(200));return rc(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!nc(t))throw Error(D(40));return t._reactRootContainer?(Wr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[An]=null})}),!0):!1};Mt.unstable_batchedUpdates=Th;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return rc(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function Q1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q1)}catch(t){console.error(t)}}Q1(),Qm.exports=Mt;var Zy=Qm.exports,Sf=Zy;pd.createRoot=Sf.createRoot,pd.hydrateRoot=Sf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sa.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Nf="popstate";function Gy(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return au("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wl(i)}return Xy(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function J1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ky(){return Math.random().toString(36).substr(2,8)}function Cf(t,e){return{usr:t.state,key:t.key,idx:e}}function au(t,e,n,r){return n===void 0&&(n=null),sa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vi(e):e,{state:n,key:e&&e.key||r||Ky()})}function wl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Xy(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Xn.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(sa({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function h(){l=Xn.Pop;let b=u(),x=b==null?null:b-d;d=b,c&&c({action:l,location:g.location,delta:x})}function p(b,x){l=Xn.Push;let v=au(g.location,b,x);d=u()+1;let y=Cf(v,d),k=g.createHref(v);try{o.pushState(y,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(k)}s&&c&&c({action:l,location:g.location,delta:1})}function f(b,x){l=Xn.Replace;let v=au(g.location,b,x);d=u();let y=Cf(v,d),k=g.createHref(v);o.replaceState(y,"",k),s&&c&&c({action:l,location:g.location,delta:0})}function m(b){let x=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:wl(b);return v=v.replace(/ $/,"%20"),Ae(x,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,x)}let g={get action(){return l},get location(){return t(i,o)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Nf,h),c=b,()=>{i.removeEventListener(Nf,h),c=null}},createHref(b){return e(i,b)},createURL:m,encodeLocation(b){let x=m(b);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:f,go(b){return o.go(b)}};return g}var zf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zf||(zf={}));function Qy(t,e,n){return n===void 0&&(n="/"),Jy(t,e,n)}function Jy(t,e,n,r){let i=typeof e=="string"?Vi(e):e,s=Pi(i.pathname||"/",n);if(s==null)return null;let o=ex(t);ew(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=uw(s);l=cw(o[c],d)}return l}function ex(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ae(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=dr([r,c.relativePath]),u=n.concat(c);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ex(s.children,e,u,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:ow(d,s.index),routesMeta:u})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of tx(s.path))i(s,o,c)}),e}function tx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=tx(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function ew(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tw=/^:[\w-]+$/,nw=3,rw=2,iw=1,sw=10,aw=-2,Ef=t=>t==="*";function ow(t,e){let n=t.split("/"),r=n.length;return n.some(Ef)&&(r+=aw),e&&(r+=rw),n.filter(i=>!Ef(i)).reduce((i,s)=>i+(tw.test(s)?nw:s===""?iw:sw),r)}function lw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function cw(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=ou({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),p=c.route;if(!h)return null;Object.assign(i,h.params),o.push({params:i,pathname:dr([s,h.pathname]),pathnameBase:mw(dr([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=dr([s,h.pathnameBase]))}return o}function ou(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,u,h)=>{let{paramName:p,isOptional:f}=u;if(p==="*"){let g=l[h]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const m=l[h];return f&&!m?d[p]=void 0:d[p]=(m||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function dw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),J1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return J1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vi(t):t;return{pathname:n?n.startsWith("/")?n:pw(n,e):e,search:gw(r),hash:xw(i)}}function pw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hh(t,e){let n=fw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Uh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vi(t):(i=sa({},t),Ae(!i.pathname||!i.pathname.includes("?"),Yc("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Yc("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Yc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}l=h>=0?e[h]:"/"}let c=hw(i,l),d=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const dr=t=>t.join("/").replace(/\/\/+/g,"/"),mw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vw(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nx=["post","put","patch","delete"];new Set(nx);const bw=["get",...nx];new Set(bw);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},aa.apply(this,arguments)}const ic=w.createContext(null),rx=w.createContext(null),Fn=w.createContext(null),sc=w.createContext(null),yn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),ix=w.createContext(null);function yw(t,e){let{relative:n}=e===void 0?{}:e;qi()||Ae(!1);let{basename:r,navigator:i}=w.useContext(Fn),{hash:s,pathname:o,search:l}=ac(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:dr([r,o])),i.createHref({pathname:c,search:l,hash:s})}function qi(){return w.useContext(sc)!=null}function Wt(){return qi()||Ae(!1),w.useContext(sc).location}function sx(t){w.useContext(Fn).static||w.useLayoutEffect(t)}function sn(){let{isDataRoute:t}=w.useContext(yn);return t?Ow():ww()}function ww(){qi()||Ae(!1);let t=w.useContext(ic),{basename:e,future:n,navigator:r}=w.useContext(Fn),{matches:i}=w.useContext(yn),{pathname:s}=Wt(),o=JSON.stringify(Hh(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return sx(()=>{l.current=!0}),w.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let h=Uh(d,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:dr([e,h.pathname])),(u.replace?r.replace:r.push)(h,u.state,u)},[e,r,o,s,t])}const jw=w.createContext(null);function kw(t){let e=w.useContext(yn).outlet;return e&&w.createElement(jw.Provider,{value:t},e)}function ax(){let{matches:t}=w.useContext(yn),e=t[t.length-1];return e?e.params:{}}function ac(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(Fn),{matches:i}=w.useContext(yn),{pathname:s}=Wt(),o=JSON.stringify(Hh(i,r.v7_relativeSplatPath));return w.useMemo(()=>Uh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function _w(t,e){return Sw(t,e)}function Sw(t,e,n,r){qi()||Ae(!1);let{navigator:i}=w.useContext(Fn),{matches:s}=w.useContext(yn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Wt(),u;if(e){var h;let b=typeof e=="string"?Vi(e):e;c==="/"||(h=b.pathname)!=null&&h.startsWith(c)||Ae(!1),u=b}else u=d;let p=u.pathname||"/",f=p;if(c!=="/"){let b=c.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let m=Qy(t,{pathname:f}),g=Rw(m&&m.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:dr([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:dr([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&g?w.createElement(sc.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xn.Pop}},g):g}function Nw(){let t=Aw(),e=vw(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const Cw=w.createElement(Nw,null);class zw extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(yn.Provider,{value:this.props.routeContext},w.createElement(ix.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ew(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(ic);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(yn.Provider,{value:e},r)}function Rw(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);u>=0||Ae(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=u),h.route.id){let{loaderData:p,errors:f}=n,m=h.route.loader&&p[h.route.id]===void 0&&(!f||f[h.route.id]===void 0);if(h.route.lazy||m){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,h,p)=>{let f,m=!1,g=null,b=null;n&&(f=l&&h.route.id?l[h.route.id]:void 0,g=h.route.errorElement||Cw,c&&(d<0&&p===0?(Lw("route-fallback"),m=!0,b=null):d===p&&(m=!0,b=h.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,p+1)),v=()=>{let y;return f?y=g:m?y=b:h.route.Component?y=w.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=u,w.createElement(Ew,{match:h,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?w.createElement(zw,{location:n.location,revalidation:n.revalidation,component:g,error:f,children:v(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):v()},null)}var ox=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ox||{}),lx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lx||{});function Mw(t){let e=w.useContext(ic);return e||Ae(!1),e}function Pw(t){let e=w.useContext(rx);return e||Ae(!1),e}function Tw(t){let e=w.useContext(yn);return e||Ae(!1),e}function cx(t){let e=Tw(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function Aw(){var t;let e=w.useContext(ix),n=Pw(),r=cx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ow(){let{router:t}=Mw(ox.UseNavigateStable),e=cx(lx.UseNavigateStable),n=w.useRef(!1);return sx(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,aa({fromRouteId:e},s)))},[t,e])}const Rf={};function Lw(t,e,n){Rf[t]||(Rf[t]=!0)}function Iw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function lu(t){let{to:e,replace:n,state:r,relative:i}=t;qi()||Ae(!1);let{future:s,static:o}=w.useContext(Fn),{matches:l}=w.useContext(yn),{pathname:c}=Wt(),d=sn(),u=Uh(e,Hh(l,s.v7_relativeSplatPath),c,i==="path"),h=JSON.stringify(u);return w.useEffect(()=>d(JSON.parse(h),{replace:n,state:r,relative:i}),[d,h,i,n,r]),null}function dx(t){return kw(t.context)}function Le(t){Ae(!1)}function Dw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1,future:l}=t;qi()&&Ae(!1);let c=e.replace(/^\/*/,"/"),d=w.useMemo(()=>({basename:c,navigator:s,static:o,future:aa({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=Vi(r));let{pathname:u="/",search:h="",hash:p="",state:f=null,key:m="default"}=r,g=w.useMemo(()=>{let b=Pi(u,c);return b==null?null:{location:{pathname:b,search:h,hash:p,state:f,key:m},navigationType:i}},[c,u,h,p,f,m,i]);return g==null?null:w.createElement(Fn.Provider,{value:d},w.createElement(sc.Provider,{children:n,value:g}))}function Fw(t){let{children:e,location:n}=t;return _w(cu(e),n)}new Promise(()=>{});function cu(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,cu(r.props.children,s));return}r.type!==Le&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}function ux(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Bw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Hw(t,e){return t.button===0&&(!e||e==="_self")&&!Bw(t)}function du(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Uw(t,e){let n=du(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const $w=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ww=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Vw="6";try{window.__reactRouterVersion=Vw}catch{}const qw=w.createContext({isTransitioning:!1}),Yw="startTransition",Mf=I2[Yw];function Zw(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=Gy({window:i,v5Compat:!0}));let o=s.current,[l,c]=w.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},u=w.useCallback(h=>{d&&Mf?Mf(()=>c(h)):c(h)},[c,d]);return w.useLayoutEffect(()=>o.listen(u),[o,u]),w.useEffect(()=>Iw(r),[r]),w.createElement(Dw,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Gw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:h}=e,p=ux(e,$w),{basename:f}=w.useContext(Fn),m,g=!1;if(typeof d=="string"&&Kw.test(d)&&(m=d,Gw))try{let y=new URL(window.location.href),k=d.startsWith("//")?new URL(y.protocol+d):new URL(d),j=Pi(k.pathname,f);k.origin===y.origin&&j!=null?d=j+k.search+k.hash:g=!0}catch{}let b=yw(d,{relative:i}),x=Qw(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:i,viewTransition:h});function v(y){r&&r(y),y.defaultPrevented||x(y)}return w.createElement("a",jl({},p,{href:m||b,onClick:g||s?r:v,ref:n,target:c}))}),Un=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:d,children:u}=e,h=ux(e,Ww),p=ac(c,{relative:h.relative}),f=Wt(),m=w.useContext(rx),{navigator:g,basename:b}=w.useContext(Fn),x=m!=null&&Jw(p)&&d===!0,v=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,y=f.pathname,k=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(y=y.toLowerCase(),k=k?k.toLowerCase():null,v=v.toLowerCase()),k&&b&&(k=Pi(k,b)||k);const j=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let S=y===v||!o&&y.startsWith(v)&&y.charAt(j)==="/",_=k!=null&&(k===v||!o&&k.startsWith(v)&&k.charAt(v.length)==="/"),N={isActive:S,isPending:_,isTransitioning:x},A=S?r:void 0,E;typeof s=="function"?E=s(N):E=[s,S?"active":null,_?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(N):l;return w.createElement(Z,jl({},h,{"aria-current":A,className:E,ref:n,style:C,to:c,viewTransition:d}),typeof u=="function"?u(N):u)});var uu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(uu||(uu={}));var Pf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function Xw(t){let e=w.useContext(ic);return e||Ae(!1),e}function Qw(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,c=sn(),d=Wt(),u=ac(t,{relative:o});return w.useCallback(h=>{if(Hw(h,n)){h.preventDefault();let p=r!==void 0?r:wl(d)===wl(u);c(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,c,u,r,i,n,t,s,o,l])}function hx(t){let e=w.useRef(du(t)),n=w.useRef(!1),r=Wt(),i=w.useMemo(()=>Uw(r.search,n.current?null:e.current),[r.search]),s=sn(),o=w.useCallback((l,c)=>{const d=du(typeof l=="function"?l(i):l);n.current=!0,s("?"+d,c)},[s,i]);return[i,o]}function Jw(t,e){e===void 0&&(e={});let n=w.useContext(qw);n==null&&Ae(!1);let{basename:r}=Xw(uu.useViewTransitionState),i=ac(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Pi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Pi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ou(i.pathname,o)!=null||ou(i.pathname,s)!=null}function px(t,e){return function(){return t.apply(e,arguments)}}const{toString:e4}=Object.prototype,{getPrototypeOf:$h}=Object,{iterator:oc,toStringTag:fx}=Symbol,lc=(t=>e=>{const n=e4.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),an=t=>(t=t.toLowerCase(),e=>lc(e)===t),cc=t=>e=>typeof e===t,{isArray:Yi}=Array,Ti=cc("undefined");function Oa(t){return t!==null&&!Ti(t)&&t.constructor!==null&&!Ti(t.constructor)&&_t(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mx=an("ArrayBuffer");function t4(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mx(t.buffer),e}const n4=cc("string"),_t=cc("function"),gx=cc("number"),La=t=>t!==null&&typeof t=="object",r4=t=>t===!0||t===!1,Io=t=>{if(lc(t)!=="object")return!1;const e=$h(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(fx in t)&&!(oc in t)},i4=t=>{if(!La(t)||Oa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},s4=an("Date"),a4=an("File"),o4=an("Blob"),l4=an("FileList"),c4=t=>La(t)&&_t(t.pipe),d4=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||_t(t.append)&&((e=lc(t))==="formdata"||e==="object"&&_t(t.toString)&&t.toString()==="[object FormData]"))},u4=an("URLSearchParams"),[h4,p4,f4,m4]=["ReadableStream","Request","Response","Headers"].map(an),g4=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ia(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Yi(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{if(Oa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function xx(t,e){if(Oa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Pr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vx=t=>!Ti(t)&&t!==Pr;function hu(){const{caseless:t,skipUndefined:e}=vx(this)&&this||{},n={},r=(i,s)=>{const o=t&&xx(n,s)||s;Io(n[o])&&Io(i)?n[o]=hu(n[o],i):Io(i)?n[o]=hu({},i):Yi(i)?n[o]=i.slice():(!e||!Ti(i))&&(n[o]=i)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Ia(arguments[i],r);return n}const x4=(t,e,n,{allOwnKeys:r}={})=>(Ia(e,(i,s)=>{n&&_t(i)?t[s]=px(i,n):t[s]=i},{allOwnKeys:r}),t),v4=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),b4=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},y4=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&$h(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},w4=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},j4=t=>{if(!t)return null;if(Yi(t))return t;let e=t.length;if(!gx(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},k4=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&$h(Uint8Array)),_4=(t,e)=>{const r=(t&&t[oc]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},S4=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},N4=an("HTMLFormElement"),C4=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Tf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),z4=an("RegExp"),bx=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ia(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},E4=t=>{bx(t,(e,n)=>{if(_t(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(_t(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},R4=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Yi(t)?r(t):r(String(t).split(e)),n},M4=()=>{},P4=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function T4(t){return!!(t&&_t(t.append)&&t[fx]==="FormData"&&t[oc])}const A4=t=>{const e=new Array(10),n=(r,i)=>{if(La(r)){if(e.indexOf(r)>=0)return;if(Oa(r))return r;if(!("toJSON"in r)){e[i]=r;const s=Yi(r)?[]:{};return Ia(r,(o,l)=>{const c=n(o,i+1);!Ti(c)&&(s[l]=c)}),e[i]=void 0,s}}return r};return n(t,0)},O4=an("AsyncFunction"),L4=t=>t&&(La(t)||_t(t))&&_t(t.then)&&_t(t.catch),yx=((t,e)=>t?setImmediate:e?((n,r)=>(Pr.addEventListener("message",({source:i,data:s})=>{i===Pr&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Pr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_t(Pr.postMessage)),I4=typeof queueMicrotask<"u"?queueMicrotask.bind(Pr):typeof process<"u"&&process.nextTick||yx,D4=t=>t!=null&&_t(t[oc]),R={isArray:Yi,isArrayBuffer:mx,isBuffer:Oa,isFormData:d4,isArrayBufferView:t4,isString:n4,isNumber:gx,isBoolean:r4,isObject:La,isPlainObject:Io,isEmptyObject:i4,isReadableStream:h4,isRequest:p4,isResponse:f4,isHeaders:m4,isUndefined:Ti,isDate:s4,isFile:a4,isBlob:o4,isRegExp:z4,isFunction:_t,isStream:c4,isURLSearchParams:u4,isTypedArray:k4,isFileList:l4,forEach:Ia,merge:hu,extend:x4,trim:g4,stripBOM:v4,inherits:b4,toFlatObject:y4,kindOf:lc,kindOfTest:an,endsWith:w4,toArray:j4,forEachEntry:_4,matchAll:S4,isHTMLForm:N4,hasOwnProperty:Tf,hasOwnProp:Tf,reduceDescriptors:bx,freezeMethods:E4,toObjectSet:R4,toCamelCase:C4,noop:M4,toFiniteNumber:P4,findKey:xx,global:Pr,isContextDefined:vx,isSpecCompliantForm:T4,toJSONObject:A4,isAsyncFn:O4,isThenable:L4,setImmediate:yx,asap:I4,isIterable:D4};function ne(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}R.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.status}}});const wx=ne.prototype,jx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{jx[t]={value:t}});Object.defineProperties(ne,jx);Object.defineProperty(wx,"isAxiosError",{value:!0});ne.from=(t,e,n,r,i,s)=>{const o=Object.create(wx);R.toFlatObject(t,o,function(u){return u!==Error.prototype},d=>d!=="isAxiosError");const l=t&&t.message?t.message:"Error",c=e==null&&t?t.code:e;return ne.call(o,l,c,n,r,i),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",s&&Object.assign(o,s),o};const F4=null;function pu(t){return R.isPlainObject(t)||R.isArray(t)}function kx(t){return R.endsWith(t,"[]")?t.slice(0,-2):t}function Af(t,e,n){return t?t.concat(e).map(function(i,s){return i=kx(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function B4(t){return R.isArray(t)&&!t.some(pu)}const H4=R.toFlatObject(R,{},null,function(e){return/^is[A-Z]/.test(e)});function dc(t,e,n){if(!R.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,b){return!R.isUndefined(b[g])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(e);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function d(m){if(m===null)return"";if(R.isDate(m))return m.toISOString();if(R.isBoolean(m))return m.toString();if(!c&&R.isBlob(m))throw new ne("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(m)||R.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,g,b){let x=m;if(m&&!b&&typeof m=="object"){if(R.endsWith(g,"{}"))g=r?g:g.slice(0,-2),m=JSON.stringify(m);else if(R.isArray(m)&&B4(m)||(R.isFileList(m)||R.endsWith(g,"[]"))&&(x=R.toArray(m)))return g=kx(g),x.forEach(function(y,k){!(R.isUndefined(y)||y===null)&&e.append(o===!0?Af([g],k,s):o===null?g:g+"[]",d(y))}),!1}return pu(m)?!0:(e.append(Af(b,g,s),d(m)),!1)}const h=[],p=Object.assign(H4,{defaultVisitor:u,convertValue:d,isVisitable:pu});function f(m,g){if(!R.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(m),R.forEach(m,function(x,v){(!(R.isUndefined(x)||x===null)&&i.call(e,x,R.isString(v)?v.trim():v,g,p))===!0&&f(x,g?g.concat(v):[v])}),h.pop()}}if(!R.isObject(t))throw new TypeError("data must be an object");return f(t),e}function Of(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Wh(t,e){this._pairs=[],t&&dc(t,this,e)}const _x=Wh.prototype;_x.append=function(e,n){this._pairs.push([e,n])};_x.toString=function(e){const n=e?function(r){return e.call(this,r,Of)}:Of;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function U4(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Sx(t,e,n){if(!e)return t;const r=n&&n.encode||U4;R.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(i?s=i(e,n):s=R.isURLSearchParams(e)?e.toString():new Wh(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Lf{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){R.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Nx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$4=typeof URLSearchParams<"u"?URLSearchParams:Wh,W4=typeof FormData<"u"?FormData:null,V4=typeof Blob<"u"?Blob:null,q4={isBrowser:!0,classes:{URLSearchParams:$4,FormData:W4,Blob:V4},protocols:["http","https","file","blob","url","data"]},Vh=typeof window<"u"&&typeof document<"u",fu=typeof navigator=="object"&&navigator||void 0,Y4=Vh&&(!fu||["ReactNative","NativeScript","NS"].indexOf(fu.product)<0),Z4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",G4=Vh&&window.location.href||"http://localhost",K4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vh,hasStandardBrowserEnv:Y4,hasStandardBrowserWebWorkerEnv:Z4,navigator:fu,origin:G4},Symbol.toStringTag,{value:"Module"})),at={...K4,...q4};function X4(t,e){return dc(t,new at.classes.URLSearchParams,{visitor:function(n,r,i,s){return at.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function Q4(t){return R.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function J4(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Cx(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=s>=n.length;return o=!o&&R.isArray(i)?i.length:o,c?(R.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!R.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&R.isArray(i[o])&&(i[o]=J4(i[o])),!l)}if(R.isFormData(t)&&R.isFunction(t.entries)){const n={};return R.forEachEntry(t,(r,i)=>{e(Q4(r),i,n,0)}),n}return null}function ej(t,e,n){if(R.isString(t))try{return(e||JSON.parse)(t),R.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Da={transitional:Nx,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=R.isObject(e);if(s&&R.isHTMLForm(e)&&(e=new FormData(e)),R.isFormData(e))return i?JSON.stringify(Cx(e)):e;if(R.isArrayBuffer(e)||R.isBuffer(e)||R.isStream(e)||R.isFile(e)||R.isBlob(e)||R.isReadableStream(e))return e;if(R.isArrayBufferView(e))return e.buffer;if(R.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return X4(e,this.formSerializer).toString();if((l=R.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return dc(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),ej(e)):e}],transformResponse:[function(e){const n=this.transitional||Da.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(R.isResponse(e)||R.isReadableStream(e))return e;if(e&&R.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e,this.parseReviver)}catch(l){if(o)throw l.name==="SyntaxError"?ne.from(l,ne.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:at.classes.FormData,Blob:at.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};R.forEach(["delete","get","head","post","put","patch"],t=>{Da.headers[t]={}});const tj=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nj=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&tj[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},If=Symbol("internals");function ls(t){return t&&String(t).trim().toLowerCase()}function Do(t){return t===!1||t==null?t:R.isArray(t)?t.map(Do):String(t)}function rj(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const ij=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Zc(t,e,n,r,i){if(R.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!R.isString(e)){if(R.isString(r))return e.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(e)}}function sj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function aj(t,e){const n=R.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}let St=class{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,c,d){const u=ls(c);if(!u)throw new Error("header name must be a non-empty string");const h=R.findKey(i,u);(!h||i[h]===void 0||d===!0||d===void 0&&i[h]!==!1)&&(i[h||c]=Do(l))}const o=(l,c)=>R.forEach(l,(d,u)=>s(d,u,c));if(R.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(R.isString(e)&&(e=e.trim())&&!ij(e))o(nj(e),n);else if(R.isObject(e)&&R.isIterable(e)){let l={},c,d;for(const u of e){if(!R.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[d=u[0]]=(c=l[d])?R.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(l,n)}else e!=null&&s(n,e,r);return this}get(e,n){if(e=ls(e),e){const r=R.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return rj(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ls(e),e){const r=R.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Zc(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=ls(o),o){const l=R.findKey(r,o);l&&(!n||Zc(r,r[l],l,n))&&(delete r[l],i=!0)}}return R.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Zc(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return R.forEach(this,(i,s)=>{const o=R.findKey(r,s);if(o){n[o]=Do(i),delete n[s];return}const l=e?sj(s):String(s).trim();l!==s&&delete n[s],n[l]=Do(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[If]=this[If]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=ls(o);r[l]||(aj(i,o),r[l]=!0)}return R.isArray(e)?e.forEach(s):s(e),this}};St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.reduceDescriptors(St.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});R.freezeMethods(St);function Gc(t,e){const n=this||Da,r=e||n,i=St.from(r.headers);let s=r.data;return R.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function zx(t){return!!(t&&t.__CANCEL__)}function Zi(t,e,n){ne.call(this,t??"canceled",ne.ERR_CANCELED,e,n),this.name="CanceledError"}R.inherits(Zi,ne,{__CANCEL__:!0});function Ex(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function oj(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function lj(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(c){const d=Date.now(),u=r[s];o||(o=d),n[i]=c,r[i]=d;let h=s,p=0;for(;h!==i;)p+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),d-o<e)return;const f=u&&d-u;return f?Math.round(p*1e3/f):void 0}}function cj(t,e){let n=0,r=1e3/e,i,s;const o=(d,u=Date.now())=>{n=u,i=null,s&&(clearTimeout(s),s=null),t(...d)};return[(...d)=>{const u=Date.now(),h=u-n;h>=r?o(d,u):(i=d,s||(s=setTimeout(()=>{s=null,o(i)},r-h)))},()=>i&&o(i)]}const kl=(t,e,n=3)=>{let r=0;const i=lj(50,250);return cj(s=>{const o=s.loaded,l=s.lengthComputable?s.total:void 0,c=o-r,d=i(c),u=o<=l;r=o;const h={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l&&u?(l-o)/d:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(h)},n)},Df=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Ff=t=>(...e)=>R.asap(()=>t(...e)),dj=at.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,at.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(at.origin),at.navigator&&/(msie|trident)/i.test(at.navigator.userAgent)):()=>!0,uj=at.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];R.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),R.isString(r)&&o.push("path="+r),R.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function hj(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function pj(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Rx(t,e,n){let r=!hj(e);return t&&(r||n==!1)?pj(t,e):e}const Bf=t=>t instanceof St?{...t}:t;function Vr(t,e){e=e||{};const n={};function r(d,u,h,p){return R.isPlainObject(d)&&R.isPlainObject(u)?R.merge.call({caseless:p},d,u):R.isPlainObject(u)?R.merge({},u):R.isArray(u)?u.slice():u}function i(d,u,h,p){if(R.isUndefined(u)){if(!R.isUndefined(d))return r(void 0,d,h,p)}else return r(d,u,h,p)}function s(d,u){if(!R.isUndefined(u))return r(void 0,u)}function o(d,u){if(R.isUndefined(u)){if(!R.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function l(d,u,h){if(h in e)return r(d,u);if(h in t)return r(void 0,d)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(d,u,h)=>i(Bf(d),Bf(u),h,!0)};return R.forEach(Object.keys({...t,...e}),function(u){const h=c[u]||i,p=h(t[u],e[u],u);R.isUndefined(p)&&h!==l||(n[u]=p)}),n}const Mx=t=>{const e=Vr({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:l}=e;if(e.headers=o=St.from(o),e.url=Sx(Rx(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),R.isFormData(n)){if(at.hasStandardBrowserEnv||at.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(R.isFunction(n.getHeaders)){const c=n.getHeaders(),d=["content-type","content-length"];Object.entries(c).forEach(([u,h])=>{d.includes(u.toLowerCase())&&o.set(u,h)})}}if(at.hasStandardBrowserEnv&&(r&&R.isFunction(r)&&(r=r(e)),r||r!==!1&&dj(e.url))){const c=i&&s&&uj.read(s);c&&o.set(i,c)}return e},fj=typeof XMLHttpRequest<"u",mj=fj&&function(t){return new Promise(function(n,r){const i=Mx(t);let s=i.data;const o=St.from(i.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=i,u,h,p,f,m;function g(){f&&f(),m&&m(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(i.method.toUpperCase(),i.url,!0),b.timeout=i.timeout;function x(){if(!b)return;const y=St.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!l||l==="text"||l==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:y,config:t,request:b};Ex(function(_){n(_),g()},function(_){r(_),g()},j),b=null}"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(x)},b.onabort=function(){b&&(r(new ne("Request aborted",ne.ECONNABORTED,t,b)),b=null)},b.onerror=function(k){const j=k&&k.message?k.message:"Network Error",S=new ne(j,ne.ERR_NETWORK,t,b);S.event=k||null,r(S),b=null},b.ontimeout=function(){let k=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const j=i.transitional||Nx;i.timeoutErrorMessage&&(k=i.timeoutErrorMessage),r(new ne(k,j.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,t,b)),b=null},s===void 0&&o.setContentType(null),"setRequestHeader"in b&&R.forEach(o.toJSON(),function(k,j){b.setRequestHeader(j,k)}),R.isUndefined(i.withCredentials)||(b.withCredentials=!!i.withCredentials),l&&l!=="json"&&(b.responseType=i.responseType),d&&([p,m]=kl(d,!0),b.addEventListener("progress",p)),c&&b.upload&&([h,f]=kl(c),b.upload.addEventListener("progress",h),b.upload.addEventListener("loadend",f)),(i.cancelToken||i.signal)&&(u=y=>{b&&(r(!y||y.type?new Zi(null,t,b):y),b.abort(),b=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const v=oj(i.url);if(v&&at.protocols.indexOf(v)===-1){r(new ne("Unsupported protocol "+v+":",ne.ERR_BAD_REQUEST,t));return}b.send(s||null)})},gj=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(d){if(!i){i=!0,l();const u=d instanceof Error?d:this.reason;r.abort(u instanceof ne?u:new Zi(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new ne(`timeout ${e} of ms exceeded`,ne.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(d=>{d.unsubscribe?d.unsubscribe(s):d.removeEventListener("abort",s)}),t=null)};t.forEach(d=>d.addEventListener("abort",s));const{signal:c}=r;return c.unsubscribe=()=>R.asap(l),c}},xj=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},vj=async function*(t,e){for await(const n of bj(t))yield*xj(n,e)},bj=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Hf=(t,e,n,r)=>{const i=vj(t,e);let s=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:u}=await i.next();if(d){l(),c.close();return}let h=u.byteLength;if(n){let p=s+=h;n(p)}c.enqueue(new Uint8Array(u))}catch(d){throw l(d),d}},cancel(c){return l(c),i.return()}},{highWaterMark:2})},Uf=64*1024,{isFunction:oo}=R,yj=(({Request:t,Response:e})=>({Request:t,Response:e}))(R.global),{ReadableStream:$f,TextEncoder:Wf}=R.global,Vf=(t,...e)=>{try{return!!t(...e)}catch{return!1}},wj=t=>{t=R.merge.call({skipUndefined:!0},yj,t);const{fetch:e,Request:n,Response:r}=t,i=e?oo(e):typeof fetch=="function",s=oo(n),o=oo(r);if(!i)return!1;const l=i&&oo($f),c=i&&(typeof Wf=="function"?(m=>g=>m.encode(g))(new Wf):async m=>new Uint8Array(await new n(m).arrayBuffer())),d=s&&l&&Vf(()=>{let m=!1;const g=new n(at.origin,{body:new $f,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return m&&!g}),u=o&&l&&Vf(()=>R.isReadableStream(new r("").body)),h={stream:u&&(m=>m.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!h[m]&&(h[m]=(g,b)=>{let x=g&&g[m];if(x)return x.call(g);throw new ne(`Response type '${m}' is not supported`,ne.ERR_NOT_SUPPORT,b)})});const p=async m=>{if(m==null)return 0;if(R.isBlob(m))return m.size;if(R.isSpecCompliantForm(m))return(await new n(at.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(R.isArrayBufferView(m)||R.isArrayBuffer(m))return m.byteLength;if(R.isURLSearchParams(m)&&(m=m+""),R.isString(m))return(await c(m)).byteLength},f=async(m,g)=>{const b=R.toFiniteNumber(m.getContentLength());return b??p(g)};return async m=>{let{url:g,method:b,data:x,signal:v,cancelToken:y,timeout:k,onDownloadProgress:j,onUploadProgress:S,responseType:_,headers:N,withCredentials:A="same-origin",fetchOptions:E}=Mx(m),C=e||fetch;_=_?(_+"").toLowerCase():"text";let B=gj([v,y&&y.toAbortSignal()],k),O=null;const L=B&&B.unsubscribe&&(()=>{B.unsubscribe()});let P;try{if(S&&d&&b!=="get"&&b!=="head"&&(P=await f(N,x))!==0){let G=new n(g,{method:"POST",body:x,duplex:"half"}),J;if(R.isFormData(x)&&(J=G.headers.get("content-type"))&&N.setContentType(J),G.body){const[xe,pe]=Df(P,kl(Ff(S)));x=Hf(G.body,Uf,xe,pe)}}R.isString(A)||(A=A?"include":"omit");const F=s&&"credentials"in n.prototype,W={...E,signal:B,method:b.toUpperCase(),headers:N.normalize().toJSON(),body:x,duplex:"half",credentials:F?A:void 0};O=s&&new n(g,W);let M=await(s?C(O,E):C(g,W));const z=u&&(_==="stream"||_==="response");if(u&&(j||z&&L)){const G={};["status","statusText","headers"].forEach(_e=>{G[_e]=M[_e]});const J=R.toFiniteNumber(M.headers.get("content-length")),[xe,pe]=j&&Df(J,kl(Ff(j),!0))||[];M=new r(Hf(M.body,Uf,xe,()=>{pe&&pe(),L&&L()}),G)}_=_||"text";let H=await h[R.findKey(h,_)||"text"](M,m);return!z&&L&&L(),await new Promise((G,J)=>{Ex(G,J,{data:H,headers:St.from(M.headers),status:M.status,statusText:M.statusText,config:m,request:O})})}catch(F){throw L&&L(),F&&F.name==="TypeError"&&/Load failed|fetch/i.test(F.message)?Object.assign(new ne("Network Error",ne.ERR_NETWORK,m,O),{cause:F.cause||F}):ne.from(F,F&&F.code,m,O)}}},jj=new Map,Px=t=>{let e=t?t.env:{};const{fetch:n,Request:r,Response:i}=e,s=[r,i,n];let o=s.length,l=o,c,d,u=jj;for(;l--;)c=s[l],d=u.get(c),d===void 0&&u.set(c,d=l?new Map:wj(e)),u=d;return d};Px();const mu={http:F4,xhr:mj,fetch:{get:Px}};R.forEach(mu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const qf=t=>`- ${t}`,kj=t=>R.isFunction(t)||t===null||t===!1,Tx={getAdapter:(t,e)=>{t=R.isArray(t)?t:[t];const{length:n}=t;let r,i;const s={};for(let o=0;o<n;o++){r=t[o];let l;if(i=r,!kj(r)&&(i=mu[(l=String(r)).toLowerCase()],i===void 0))throw new ne(`Unknown adapter '${l}'`);if(i&&(R.isFunction(i)||(i=i.get(e))))break;s[l||"#"+o]=i}if(!i){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(qf).join(`
`):" "+qf(o[0]):"as no adapter specified";throw new ne("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i},adapters:mu};function Kc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Zi(null,t)}function Yf(t){return Kc(t),t.headers=St.from(t.headers),t.data=Gc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tx.getAdapter(t.adapter||Da.adapter,t)(t).then(function(r){return Kc(t),r.data=Gc.call(t,t.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return zx(r)||(Kc(t),r&&r.response&&(r.response.data=Gc.call(t,t.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}const Ax="1.12.2",uc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{uc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Zf={};uc.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Ax+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new ne(i(o," has been removed"+(n?" in "+n:"")),ne.ERR_DEPRECATED);return n&&!Zf[o]&&(Zf[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};uc.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function _j(t,e,n){if(typeof t!="object")throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],c=l===void 0||o(l,s,t);if(c!==!0)throw new ne("option "+s+" must be "+c,ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ne("Unknown option "+s,ne.ERR_BAD_OPTION)}}const Fo={assertOptions:_j,validators:uc},cn=Fo.validators;let Ir=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Lf,response:new Lf}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Vr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Fo.assertOptions(r,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Fo.assertOptions(i,{encode:cn.function,serialize:cn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Fo.assertOptions(n,{baseUrl:cn.spelling("baseURL"),withXsrfToken:cn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&R.merge(s.common,s[n.method]);s&&R.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=St.concat(o,s);const l=[];let c=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(c=c&&g.synchronous,l.unshift(g.fulfilled,g.rejected))});const d=[];this.interceptors.response.forEach(function(g){d.push(g.fulfilled,g.rejected)});let u,h=0,p;if(!c){const m=[Yf.bind(this),void 0];for(m.unshift(...l),m.push(...d),p=m.length,u=Promise.resolve(n);h<p;)u=u.then(m[h++],m[h++]);return u}p=l.length;let f=n;for(;h<p;){const m=l[h++],g=l[h++];try{f=m(f)}catch(b){g.call(this,b);break}}try{u=Yf.call(this,f)}catch(m){return Promise.reject(m)}for(h=0,p=d.length;h<p;)u=u.then(d[h++],d[h++]);return u}getUri(e){e=Vr(this.defaults,e);const n=Rx(e.baseURL,e.url,e.allowAbsoluteUrls);return Sx(n,e.params,e.paramsSerializer)}};R.forEach(["delete","get","head","options"],function(e){Ir.prototype[e]=function(n,r){return this.request(Vr(r||{},{method:e,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(Vr(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ir.prototype[e]=n(),Ir.prototype[e+"Form"]=n(!0)});let Sj=class Ox{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Zi(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ox(function(i){e=i}),cancel:e}}};function Nj(t){return function(n){return t.apply(null,n)}}function Cj(t){return R.isObject(t)&&t.isAxiosError===!0}const gu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gu).forEach(([t,e])=>{gu[e]=t});function Lx(t){const e=new Ir(t),n=px(Ir.prototype.request,e);return R.extend(n,Ir.prototype,e,{allOwnKeys:!0}),R.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Lx(Vr(t,i))},n}const Ee=Lx(Da);Ee.Axios=Ir;Ee.CanceledError=Zi;Ee.CancelToken=Sj;Ee.isCancel=zx;Ee.VERSION=Ax;Ee.toFormData=dc;Ee.AxiosError=ne;Ee.Cancel=Ee.CanceledError;Ee.all=function(e){return Promise.all(e)};Ee.spread=Nj;Ee.isAxiosError=Cj;Ee.mergeConfig=Vr;Ee.AxiosHeaders=St;Ee.formToJSON=t=>Cx(R.isHTMLForm(t)?new FormData(t):t);Ee.getAdapter=Tx.getAdapter;Ee.HttpStatusCode=gu;Ee.default=Ee;const{Axios:WC,AxiosError:VC,CanceledError:qC,isCancel:YC,CancelToken:ZC,VERSION:GC,all:KC,Cancel:XC,isAxiosError:QC,spread:JC,toFormData:e7,AxiosHeaders:t7,HttpStatusCode:n7,formToJSON:r7,getAdapter:i7,mergeConfig:s7}=Ee,Q=Ee.create({baseURL:"/api/v1"}),Gf=typeof window<"u"?localStorage.getItem("access_token"):null;Gf&&(Q.defaults.headers.common.Authorization=`Bearer ${Gf}`);function Kf(t){t?Q.defaults.headers.common.Authorization=`Bearer ${t}`:delete Q.defaults.headers.common.Authorization}Q.interceptors.request.use(t=>{try{const e=(t.url||"").toLowerCase();if(!(e.includes("/auth/login")||e.includes("/auth/register")||e.includes("/auth/refresh"))){const r=localStorage.getItem("access_token");r&&(t.headers=t.headers||{},t.headers.Authorization=`Bearer ${r}`)}}catch{}return t});let Jr=!1,xu=[];function lo(t){xu.forEach(e=>e(t)),xu=[]}Q.interceptors.response.use(t=>t,async t=>{var r;const e=t.config;if(!e)return Promise.reject(t);if(((r=t.response)==null?void 0:r.status)===401&&!e._retry){e._retry=!0;try{if(Jr)return new Promise((d,u)=>{xu.push(h=>{h?(e.headers.Authorization=`Bearer ${h}`,d(Q(e))):u(t)})});Jr=!0;const i=localStorage.getItem("refresh_token");if(!i){lo(null),Jr=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(t)}const o=(await Ee.post("/api/v1/auth/refresh",{refresh_token:i})).data,l=o==null?void 0:o.access_token,c=o==null?void 0:o.refresh_token;if(l)return localStorage.setItem("access_token",l),c&&localStorage.setItem("refresh_token",c),Q.defaults.headers.common.Authorization=`Bearer ${l}`,lo(l),Jr=!1,e.headers.Authorization=`Bearer ${l}`,Q(e);lo(null),Jr=!1}catch{lo(null),Jr=!1;try{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")}catch{}if(typeof window<"u"&&window.location.pathname!=="/login")try{window.location.href="/login"}catch{}return Promise.reject(t)}}return Promise.reject(t)});const Ix=w.createContext(void 0);function zj({children:t}){const[e,n]=w.useState(null),[r,i]=w.useState(null),[s,o]=w.useState(!0);w.useEffect(()=>{(async()=>{const d=localStorage.getItem("access_token"),u=localStorage.getItem("user");if(d&&u)try{await Q.get("/auth/me"),n(JSON.parse(u)),i(d)}catch{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")}o(!1)})()},[]),w.useEffect(()=>{Kf(r)},[r]);const l=w.useMemo(()=>({user:e,accessToken:r,loading:s,login:async(c,d)=>{const u=await Q.post("/auth/login",{email:c,password:d}),{access_token:h,refresh_token:p,user:f}=u.data;n(f),i(h),localStorage.setItem("access_token",h),p&&localStorage.setItem("refresh_token",p),localStorage.setItem("user",JSON.stringify(f)),Kf(h)},register:async(c,d,u)=>{await Q.post("/auth/register",{email:c,password:d,full_name:u})},logout:()=>{n(null),i(null),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")},updateUser:c=>{n(d=>{const u={...d||{},...c};try{localStorage.setItem("user",JSON.stringify(u))}catch{}return u})}}),[e,r,s]);return a.jsx(Ix.Provider,{value:l,children:t})}function on(){const t=w.useContext(Ix);if(!t)throw new Error("useAuth must be used within AuthProvider");return t}function Xf(){const{user:t}=on();return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"hero",children:a.jsxs("div",{className:"container hero-inner",children:[a.jsxs("div",{className:"hero-copy",children:[a.jsx("p",{className:"kicker",children:"Welcome to"}),a.jsx("h1",{className:"headline",children:"Everyday Essentials, Thoughtfully Made"}),a.jsx("p",{className:"subhead",children:"Curated apparel and accessories crafted for comfort, durability, and timeless style."}),t?a.jsxs("div",{className:"hero-ctas",children:[a.jsx(Z,{to:"/about",className:"btn btn-primary",children:"Learn More"}),a.jsx(Z,{to:"/shop",className:"btn btn-ghost",children:"Visit Shop"})]}):a.jsxs("div",{className:"hero-ctas",children:[a.jsx(Z,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),a.jsx(Z,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]}),a.jsxs("div",{className:"hero-images",children:[a.jsx("img",{src:"/images/hero-1.jpg",alt:"Lifestyle banner"}),a.jsx("img",{src:"/images/hero-2.jpg",alt:"Crafted details"})]})]})}),!t&&a.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:a.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[a.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to See More?"}),a.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to explore our full collections, view features, and start shopping!"}),a.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[a.jsx(Z,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),a.jsx(Z,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),t&&a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"About Us"}),a.jsx("p",{className:"lead",children:"We’re a small, quality-first studio focused on everyday wear and carry goods that blend modern design with reliable performance. Each piece is sourced from trusted partners and produced in small batches to maintain consistency and care."}),a.jsxs("div",{className:"cards three",children:[a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"What we do"}),a.jsx("p",{children:"From classic tees to minimalist accessories, our collections prioritize breathable fabrics, clean lines, and versatile colorways for daily use."})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"How we work"}),a.jsx("p",{children:"Limited-run releases, materials vetted for comfort and longevity, and transparent details so expectations match what’s delivered."})]}),a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:"Our promise"}),a.jsx("p",{children:"Honest pricing, responsive support, and a 30-day hassle-free return policy on unused items in original condition."})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Our Mission"}),a.jsx("p",{className:"lead",children:"Make everyday dressing simpler with durable essentials that feel good, look refined, and last beyond seasonal trends."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Material-first design choices with soft-hand, responsibly sourced textiles."}),a.jsx("li",{children:"Timeless palettes and silhouettes that pair across wardrobes."}),a.jsx("li",{children:"Continuous improvements guided by real customer feedback."})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Why Choose Us"}),a.jsxs("div",{className:"grid-2",children:[a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Quality"}),a.jsx("h3",{children:"Built to last"}),a.jsx("p",{children:"Reinforced stitching, reliable hardware, and color-fast finishes keep pieces in rotation longer."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Trust"}),a.jsx("h3",{children:"Transparent sourcing"}),a.jsx("p",{children:"Clear specs, care guides, and honest descriptions so purchasing decisions are easy and informed."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Care"}),a.jsx("h3",{children:"Responsive support"}),a.jsx("p",{children:"Friendly, prompt help from real people for sizing, care, and post-purchase questions."})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"feature-badge",children:"Value"}),a.jsx("h3",{children:"Fair pricing"}),a.jsx("p",{children:"Essentials priced for everyday use without compromising on materials or finish."})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"What Customers Say"}),a.jsxs("div",{className:"testimonials",children:[a.jsxs("blockquote",{className:"quote",children:["“The fabric quality is excellent and the fit stays consistent after washes. Great staples.”",a.jsx("footer",{children:"— A. Perera"})]}),a.jsxs("blockquote",{className:"quote",children:["“Support was quick to help with sizing. Delivery was on time and packaging was neat.”",a.jsx("footer",{children:"— S. Fernando"})]}),a.jsxs("blockquote",{className:"quote",children:["“Clean design and no loud branding. Exactly what I wanted for daily wear.”",a.jsx("footer",{children:"— N. Jayasuriya"})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Special Highlights"}),a.jsxs("div",{className:"cards three",children:[a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Seasonal Edit"}),a.jsx("p",{children:"Limited colorways and refreshed textures—perfect for the current season."}),a.jsx(Z,{to:"/shop",className:"btn btn-link",children:"Explore"})]}),a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Bundle Savings"}),a.jsx("p",{children:"Save on curated combos like tee + cap or backpack + organizer."}),a.jsx(Z,{to:"/shop",className:"btn btn-link",children:"View Bundles"})]}),a.jsxs("div",{className:"promo-card",children:[a.jsx("h3",{children:"Student Perks"}),a.jsx("p",{children:"Verified students enjoy an extra 10% off select collections."}),a.jsx(Z,{to:"/shop",className:"btn btn-link",children:"Check Eligibility"})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Delivery & Returns"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Fast Dispatch"}),a.jsx("p",{children:"Orders ship within 1–2 business days with tracked delivery."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Easy Returns"}),a.jsx("p",{children:"30-day returns on unused items in original condition and packaging."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Care Guides"}),a.jsx("p",{children:"Simple wash and storage instructions included with every order."})]})]})]})})]}),a.jsx("style",{children:`
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
      `})]})}function Zt(t,e="success",n=2200){const r=new CustomEvent("app:toast",{detail:{message:t,type:e,duration:n}});window.dispatchEvent(r)}const Dx=w.createContext(void 0);function Ej({children:t}){const{user:e}=on(),[n,r]=w.useState([]),[i,s]=w.useState(!1);w.useEffect(()=>{if(typeof window<"u"&&(window.location.pathname==="/login"||window.location.pathname==="/register"))return;if(!(e!=null&&e.email)){r([]);return}(async()=>{s(!0);try{const d=(await Q.get("/cart")).data;r(d.items||[]),localStorage.removeItem(`cart_${e.email}`),localStorage.removeItem("cart_guest")}catch(c){console.error("Failed to load cart from server:",c);try{const d=localStorage.getItem(`cart_${e.email}`);if(d){const u=JSON.parse(d);if(u.length>0){await Q.post("/cart/sync",u);const h=await Q.get("/cart");r(h.data.items||[]),localStorage.removeItem(`cart_${e.email}`)}}}catch(d){console.error("Failed to sync cart:",d)}}finally{s(!1)}})()},[e==null?void 0:e.email]);const o=w.useMemo(()=>{const c=!!localStorage.getItem("access_token");return{items:n,count:n.reduce((d,u)=>d+u.qty,0),isAuthenticated:c,isLoading:i,add:(d,u=1)=>{if(!c){alert("Please login or register to add items to cart"),window.location.href="/login";return}const h=crypto.randomUUID();r(p=>p.find(m=>m.productId===d.productId)?p.map(m=>m.productId===d.productId?{...m,qty:m.qty+u}:m):[...p,{...d,id:h,qty:u}]);try{Zt(`${d.name} added to cart`,"success")}catch{}Q.post("/cart/add",{productId:d.productId,slug:d.slug,name:d.name,price:d.price,qty:u,image:d.image}).then(()=>Q.get("/cart")).then(p=>{r(p.data.items||[])}).catch(p=>{console.error("Failed to add item to cart:",p),Zt("Failed to sync cart with server","error"),Q.get("/cart").then(f=>{r(f.data.items||[])}).catch(()=>{})})},remove:d=>{r(u=>u.filter(h=>h.id!==d)),Q.delete(`/cart/remove/${d}`).catch(u=>{console.error("Failed to remove item from cart:",u),Q.get("/cart").then(h=>{r(h.data.items||[])}).catch(()=>{})})},update:(d,u)=>{u<1||(r(h=>h.map(p=>p.id===d?{...p,qty:u}:p)),Q.put(`/cart/update/${d}`,null,{params:{qty:u}}).catch(h=>{console.error("Failed to update cart item:",h),Q.get("/cart").then(p=>{r(p.data.items||[])}).catch(()=>{})}))},clear:()=>{r([]),Q.delete("/cart/clear").catch(d=>{console.error("Failed to clear cart:",d),Q.get("/cart").then(u=>{r(u.data.items||[])}).catch(()=>{})})}}},[n,i]);return a.jsx(Dx.Provider,{value:o,children:t})}function Gi(){const t=w.useContext(Dx);if(!t)throw new Error("useCart must be used within CartProvider");return t}async function _l(t){const e=document.querySelector(".cart-link .badge");if(!t||!e)return;const n=t.getBoundingClientRect(),r=e.getBoundingClientRect();let i;if(t instanceof HTMLImageElement){const d=document.createElement("img");d.src=t.currentSrc||t.src,d.alt="",i=d}else{const d=document.createElement("div");d.style.background="rgba(255,255,255,0.9)",i=d}i.style.position="fixed",i.style.left=`${n.left}px`,i.style.top=`${n.top}px`,i.style.width=`${n.width}px`,i.style.height=`${n.height}px`,i.style.borderRadius="12px",i.style.boxShadow="0 10px 30px rgba(0,0,0,0.35)",i.style.zIndex="3000",i.style.pointerEvents="none",document.body.appendChild(i);const s=r.left+r.width/2-(n.left+n.width/2),o=r.top+r.height/2-(n.top+n.height/2),l=[{transform:"translate(0, 0) scale(1)",opacity:1},{transform:`translate(${s*.2}px, ${o*.2}px) scale(0.9)`,opacity:.9},{transform:`translate(${s}px, ${o}px) scale(0.15)`,opacity:.1}],c={duration:600,easing:"cubic-bezier(0.22, 1, 0.36, 1)",fill:"forwards"};await i.animate(l,c).finished.catch(()=>{}),i.remove();try{e.classList.add("sparkle"),setTimeout(()=>e.classList.remove("sparkle"),700)}catch{}}function Rj(){const{slug:t}=ax(),[e,n]=w.useState(null),[r,i]=w.useState(0),{add:s}=Gi(),o=sn(),l=w.useRef(null);if(w.useEffect(()=>{t&&Ee.get(`/api/v1/products/${t}`).then(p=>n(p.data))},[t]),!e)return a.jsx("div",{className:"container",style:{padding:24},children:"Loading..."});const c=e.images&&e.images.length>0?e.images:["https://via.placeholder.com/600x400"],d=()=>{i(p=>(p+1)%c.length)},u=()=>{i(p=>(p-1+c.length)%c.length)},h=p=>{i(p)};return a.jsx("div",{className:"container",style:{padding:24},children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{position:"relative",borderRadius:12,overflow:"hidden",boxShadow:"var(--shadow)"},children:[a.jsx("img",{ref:l,src:c[r],alt:`${e.name} - Image ${r+1}`,style:{width:"100%",display:"block",aspectRatio:"4/3",objectFit:"cover"}}),c.length>1&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:u,style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:p=>p.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Previous image",children:"‹"}),a.jsx("button",{onClick:d,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.6)",color:"white",border:"none",borderRadius:"50%",width:40,height:40,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,transition:"background 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="rgba(0,0,0,0.8)",onMouseLeave:p=>p.currentTarget.style.background="rgba(0,0,0,0.6)","aria-label":"Next image",children:"›"}),a.jsxs("div",{style:{position:"absolute",bottom:12,right:12,background:"rgba(0,0,0,0.6)",color:"white",padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:500},children:[r+1," / ",c.length]})]})]}),c.length>1&&a.jsx("div",{style:{display:"flex",gap:8,marginTop:12,overflowX:"auto",paddingBottom:8},children:c.map((p,f)=>a.jsx("button",{onClick:()=>h(f),style:{border:r===f?"2px solid var(--brand)":"2px solid transparent",borderRadius:8,overflow:"hidden",cursor:"pointer",padding:0,background:"transparent",flexShrink:0,opacity:r===f?1:.6,transition:"opacity 0.2s, border-color 0.2s"},onMouseEnter:m=>m.currentTarget.style.opacity="1",onMouseLeave:m=>m.currentTarget.style.opacity=r===f?"1":"0.6","aria-label":`View image ${f+1}`,children:a.jsx("img",{src:p,alt:`${e.name} thumbnail ${f+1}`,style:{width:80,height:80,objectFit:"cover",display:"block"}})},f))})]}),a.jsxs("div",{children:[a.jsx("h1",{style:{marginTop:0},children:e.name}),a.jsxs("div",{className:"price",style:{fontSize:22},children:["LKR ",e.price]}),a.jsx("p",{style:{color:"var(--muted)"},children:e.description||"A beautiful product made for you."}),a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{className:"btn",onClick:()=>{l.current&&_l(l.current),s({productId:e.id,slug:e.slug,name:e.name,price:e.price,image:c[0]})},children:"Add to Cart"}),a.jsx("button",{className:"btn",onClick:()=>{l.current&&_l(l.current),s({productId:e.id,slug:e.slug,name:e.name,price:e.price,image:c[0]}),o("/cart")},children:"Buy Now"})]})]})]})})}function Mj(){var k;const{login:t}=on(),[e,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(null),[l,c]=w.useState(!1),[d,u]=w.useState(!1),[h,p]=w.useState(!0),[f,m]=w.useState(!1),g=sn(),b=Wt(),x=w.useRef(null),v=((k=b.state)==null?void 0:k.from)||"/";w.useEffect(()=>{m(!0)},[]),w.useEffect(()=>{s&&x.current&&x.current.focus()},[s]),w.useEffect(()=>{let j;return d&&(j=window.setTimeout(()=>u(!1),5e3)),()=>{j&&window.clearTimeout(j)}},[d]);async function y(j){if(j.preventDefault(),o(null),!e||!r){o("Email and password are required.");return}try{c(!0),await t(e,r),h&&typeof localStorage<"u"?localStorage.setItem("remember","1"):localStorage.removeItem("remember"),g(v)}catch{o("Invalid credentials")}finally{c(!1)}}return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"page-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"grid-overlay"})]}),a.jsx("section",{className:`login-hero ${f?"animate-in":""}`,children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Secure Login"]}),a.jsx("h1",{className:"headline",children:"Welcome back"}),a.jsx("p",{className:"subhead",children:"Sign in to manage orders, track deliveries, and update account details."}),a.jsxs("div",{className:"hero-decorations",children:[a.jsx("div",{className:"decoration-line line-1"}),a.jsx("div",{className:"decoration-line line-2"}),a.jsx("div",{className:"decoration-dot dot-1"}),a.jsx("div",{className:"decoration-dot dot-2"}),a.jsx("div",{className:"decoration-dot dot-3"})]})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:`container login-wrap ${f?"animate-in":""}`,children:[a.jsxs("div",{className:"panel main-panel",children:[a.jsxs("div",{className:"panel-header",children:[a.jsx("h2",{className:"section-title",children:"Login"}),a.jsx("div",{className:"title-underline"})]}),a.jsx("div",{ref:x,tabIndex:-1,"aria-live":"assertive","aria-atomic":"true",className:"live",children:s&&a.jsxs("div",{className:"alert error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),s]})}),a.jsxs("form",{className:"form",onSubmit:y,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"email",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),a.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),a.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:e,onChange:j=>n(j.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("div",{className:"label-row",children:[a.jsxs("label",{htmlFor:"password",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Password"]}),a.jsx(Z,{to:"/forgot",className:"link",children:"Forgot password?"})]}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"password",type:d?"text":"password",autoComplete:"current-password",placeholder:"••••••••",value:r,onChange:j=>i(j.target.value),required:!0}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":d?"Hide password":"Show password","aria-pressed":d,"aria-controls":"password",onClick:()=>u(j=>!j),title:d?"Hide password":"Show password",children:d?a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),a.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),a.jsx("p",{className:"tiny muted",children:"Password visibility will auto-hide after 5 seconds."})]}),a.jsxs("div",{className:"row between",children:[a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:h,onChange:j=>p(j.target.checked)}),a.jsx("span",{className:"checkmark",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),a.jsx("span",{children:"Remember me"})]}),a.jsxs("span",{className:"tiny muted",children:["Need an account? ",a.jsx(Z,{to:"/register",className:"link",children:"Register"})]})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l,children:l?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Signing in…"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"})}),"Login"]})}),a.jsxs("div",{className:"or",children:[a.jsx("span",{className:"line"}),a.jsx("span",{className:"muted",children:"or continue with"}),a.jsx("span",{className:"line"})]}),a.jsxs("div",{className:"oauth",children:[a.jsxs("button",{type:"button",className:"btn btn-ghost oauth-btn",onClick:()=>alert("Coming soon"),children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:[a.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),a.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),a.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),a.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),"Google"]}),a.jsxs("button",{type:"button",className:"btn btn-ghost oauth-btn",onClick:()=>alert("Coming soon"),children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),"GitHub"]})]})]})]}),a.jsxs("aside",{className:"panel tips",children:[a.jsx("div",{className:"tips-icon",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"})})}),a.jsx("h3",{children:"Tips"}),a.jsxs("ul",{className:"list",children:[a.jsxs("li",{children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Use the email registered during checkout."]}),a.jsxs("li",{children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Passwords are case-sensitive; check CAPS LOCK."]}),a.jsxs("li",{children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"After multiple failed attempts, wait a minute before retrying."]})]}),a.jsxs("div",{className:"support",children:[a.jsx("p",{className:"muted",children:"Still need help?"}),a.jsxs(Z,{to:"/contact",className:"btn btn-support",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Contact support"]})]})]})]})}),a.jsx("style",{children:`
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
      `})]})}function Pj(){const{register:t}=on(),[e,n]=w.useState(""),[r,i]=w.useState(""),[s,o]=w.useState(""),[l,c]=w.useState(""),[d,u]=w.useState(!1),[h,p]=w.useState(!0),[f,m]=w.useState(!1),[g,b]=w.useState(!1),[x,v]=w.useState(null),[y,k]=w.useState(null),[j,S]=w.useState(!1),[_,N]=w.useState(!1),A=sn(),E=w.useRef(null);w.useEffect(()=>{N(!0)},[]),w.useEffect(()=>{(x||y)&&E.current&&E.current.focus()},[x,y]);const C=w.useMemo(()=>{let L=0;return r.length>=8&&L++,/[A-Z]/.test(r)&&L++,/[a-z]/.test(r)&&L++,/\d/.test(r)&&L++,/[^A-Za-z0-9]/.test(r)&&L++,L},[r]),B=["Very weak","Weak","Fair","Good","Strong","Excellent"][C];async function O(L){if(L.preventDefault(),k(null),v(null),!l||!e||!r||!s){k("All fields are required.");return}if(r!==s){k("Passwords do not match.");return}if(!d){k("Please agree to the Terms and Privacy Policy.");return}try{S(!0),await t(e,r,l),v("Check the inbox to verify the account. Redirecting to Login…"),setTimeout(()=>A("/login"),1e3)}catch{k("Could not create the account. Try again later.")}finally{S(!1)}}return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"page-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"grid-overlay"}),a.jsx("div",{className:"particles",children:[...Array(20)].map((L,P)=>a.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`}},P))})]}),a.jsx("section",{className:`register-hero ${_?"animate-in":""}`,children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"Join Us Today"]}),a.jsx("h1",{className:"headline",children:"Create an account"}),a.jsx("p",{className:"subhead",children:"Join to track orders, save preferences, and get faster checkout."}),a.jsxs("div",{className:"hero-decorations",children:[a.jsx("div",{className:"decoration-circle circle-1"}),a.jsx("div",{className:"decoration-circle circle-2"}),a.jsx("div",{className:"decoration-line line-1"}),a.jsx("div",{className:"decoration-line line-2"})]})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:`container reg-wrap ${_?"animate-in":""}`,children:[a.jsxs("div",{className:"panel main-panel",children:[a.jsxs("div",{className:"panel-header",children:[a.jsx("h2",{className:"section-title",children:"Register"}),a.jsx("div",{className:"title-underline"})]}),a.jsxs("div",{ref:E,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[x&&a.jsxs("div",{className:"alert success",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),x]}),y&&a.jsxs("div",{className:"alert error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),y]})]}),a.jsxs("form",{className:"form",onSubmit:O,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"fullName",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Full name"]}),a.jsx("input",{id:"fullName",type:"text",autoComplete:"name",placeholder:"e.g., Ishfaque Mif",value:l,onChange:L=>c(L.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"email",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),a.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),a.jsx("input",{id:"email",type:"email",inputMode:"email",autoComplete:"email",placeholder:"email@example.com",value:e,onChange:L=>n(L.target.value),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"password",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Password"]}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"password",type:f?"text":"password",autoComplete:"new-password",placeholder:"At least 8 characters",value:r,onChange:L=>i(L.target.value),required:!0,"aria-describedby":"pw-help"}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":f?"Hide password":"Show password","aria-pressed":f,"aria-controls":"password",onClick:()=>m(L=>!L),children:f?a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),a.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),a.jsx("div",{id:"pw-help",className:"tiny muted",children:"Use 8+ chars with a mix of upper/lowercase, numbers, and a symbol."}),a.jsxs("div",{className:"meter","aria-hidden":"true",children:[a.jsx("span",{className:`m${C}`}),a.jsx("em",{className:"muted",children:B})]}),a.jsxs("ul",{className:"reqs",children:[a.jsxs("li",{className:r.length>=8?"ok":"",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"8+ characters"]}),a.jsxs("li",{className:/[A-Z]/.test(r)?"ok":"",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Uppercase letter"]}),a.jsxs("li",{className:/[a-z]/.test(r)?"ok":"",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Lowercase letter"]}),a.jsxs("li",{className:/\d/.test(r)?"ok":"",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Number"]}),a.jsxs("li",{className:/[^A-Za-z0-9]/.test(r)?"ok":"",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Symbol"]})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"confirm",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Confirm password"]}),a.jsxs("div",{className:"pw-wrap",children:[a.jsx("input",{id:"confirm",type:g?"text":"password",autoComplete:"new-password",placeholder:"Re-enter password",value:s,onChange:L=>o(L.target.value),required:!0}),a.jsx("button",{type:"button",className:"pw-toggle","aria-label":g?"Hide password":"Show password","aria-pressed":g,"aria-controls":"confirm",onClick:()=>b(L=>!L),children:g?a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),a.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]}):a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})})]}),s&&s!==r&&a.jsxs("div",{className:"tiny error-text",children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"})}),"Passwords do not match."]})]}),a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:d,onChange:L=>u(L.target.checked),required:!0}),a.jsx("span",{className:"checkmark",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),a.jsxs("span",{children:["I agree to the ",a.jsx(Z,{to:"/terms",className:"link",children:"Terms"})," and"," ",a.jsx(Z,{to:"/privacy",className:"link",children:"Privacy Policy"}),"."]})]}),a.jsxs("label",{className:"check",children:[a.jsx("input",{type:"checkbox",checked:h,onChange:L=>p(L.target.checked)}),a.jsx("span",{className:"checkmark",children:a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})})}),a.jsx("span",{children:"Send occasional product updates and offers."})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:j,children:j?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Creating…"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})}),"Create account"]})}),a.jsxs("div",{className:"row between",children:[a.jsx("span",{className:"tiny muted",children:"Already have an account?"}),a.jsx(Z,{to:"/login",className:"link",children:"Login"})]})]})]}),a.jsxs("aside",{className:"panel tips",children:[a.jsx("div",{className:"tips-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),a.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})]})}),a.jsx("h3",{children:"Why create an account?"}),a.jsxs("ul",{className:"list",children:[a.jsxs("li",{children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Faster checkout and saved details."]}),a.jsxs("li",{children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Order history and tracking."]}),a.jsxs("li",{children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Early access to limited releases."]})]}),a.jsxs("div",{className:"support",children:[a.jsx("p",{className:"muted",children:"Need help?"}),a.jsxs(Z,{to:"/contact",className:"btn btn-support",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"})}),"Contact support"]})]})]})]})}),a.jsx("style",{children:`
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
      `})]})}function Tj(){const{items:t,update:e,remove:n,clear:r}=Gi(),i=sn(),[s,o]=w.useState(!1),l=w.useMemo(()=>t.reduce((h,p)=>h+p.price*p.qty,0),[t]),c=(h,p)=>{p<1||Number.isNaN(p)||e(h,p)},d=()=>o(!0),u=encodeURIComponent(`Hello, I have transferred LKR ${l.toFixed(2)} for my order. Here is my payment confirmation.`);return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"cart-hero",children:a.jsxs("div",{className:"container",children:[a.jsx("h1",{className:"headline",children:"Your Cart"}),a.jsx("p",{className:"subhead",children:"Review items and complete checkout using bank transfer."})]})}),a.jsx("section",{className:"section",children:a.jsx("div",{className:"container",children:t.length===0?a.jsxs("div",{className:"empty",children:[a.jsx("div",{className:"empty-anim","aria-hidden":!0,children:a.jsxs("svg",{className:"cart-svg",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsxs("g",{className:"animate-cart",children:[a.jsx("rect",{x:"26",y:"36",width:"60",height:"34",rx:"6",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.08)"}),a.jsx("path",{d:"M20 36h10M86 36h14",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("path",{d:"M32 70l-4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("path",{d:"M80 70l4 12",stroke:"var(--brand)",strokeWidth:"3",strokeLinecap:"round"}),a.jsx("circle",{cx:"40",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"}),a.jsx("circle",{cx:"72",cy:"88",r:"7",stroke:"var(--brand)",strokeWidth:"3",fill:"rgba(109,116,255,0.1)"})]}),a.jsxs("g",{className:"float-bubbles",children:[a.jsx("circle",{cx:"54",cy:"26",r:"3",fill:"var(--brand)"}),a.jsx("circle",{cx:"68",cy:"18",r:"2",fill:"var(--brand)"}),a.jsx("circle",{cx:"44",cy:"16",r:"2.5",fill:"var(--brand)"})]})]})}),a.jsx("p",{children:"Your cart is empty"}),a.jsx("div",{className:"actions",children:a.jsx(Z,{to:"/shop",className:"btn btn-primary",children:"Continue Shopping"})})]}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"cart-wrap",children:[a.jsx("div",{className:"table-wrap",role:"region","aria-label":"Cart items",children:a.jsxs("table",{className:"cart-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Product"}),a.jsx("th",{children:"Qty"}),a.jsx("th",{children:"Price"}),a.jsx("th",{children:"Total"}),a.jsx("th",{children:"Action"})]})}),a.jsx("tbody",{children:t.map(h=>a.jsxs("tr",{children:[a.jsx("td",{className:"prod-cell",children:a.jsxs("div",{className:"prod",children:[h.image?a.jsx("img",{src:h.image,alt:h.name}):a.jsx("div",{className:"img-fallback","aria-hidden":!0}),a.jsxs("div",{className:"prod-meta",children:[a.jsx(Z,{to:`/product/${h.slug}`,className:"prod-name",children:h.name}),a.jsxs("div",{className:"sku",children:["ID: ",h.id]})]})]})}),a.jsx("td",{className:"qty-cell",children:a.jsxs("div",{className:"qty",children:[a.jsx("button",{className:"btn-qty","aria-label":"Decrease quantity",onClick:()=>c(h.id,h.qty-1),children:"−"}),a.jsx("input",{type:"number",min:1,inputMode:"numeric",value:h.qty,onChange:p=>c(h.id,Number(p.target.value)),"aria-label":`Quantity for ${h.name}`}),a.jsx("button",{className:"btn-qty","aria-label":"Increase quantity",onClick:()=>c(h.id,h.qty+1),children:"+"})]})}),a.jsxs("td",{children:["LKR ",Number(h.price).toFixed(2)]}),a.jsxs("td",{children:["LKR ",(h.price*h.qty).toFixed(2)]}),a.jsx("td",{children:a.jsx("button",{className:"btn btn-ghost",onClick:()=>n(h.id),children:"Remove"})})]},h.id))}),a.jsx("tfoot",{children:a.jsxs("tr",{children:[a.jsx("td",{colSpan:3,className:"right",children:"Subtotal"}),a.jsxs("td",{colSpan:2,className:"subtotal",children:["LKR ",l.toFixed(2)]})]})})]})}),a.jsxs("aside",{className:"summary",children:[a.jsx("h2",{className:"summary-title",children:"Order Summary"}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Subtotal"}),a.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),a.jsxs("div",{className:"summary-row",children:[a.jsx("span",{children:"Shipping"}),a.jsx("span",{children:"Calculated at checkout"})]}),a.jsxs("div",{className:"summary-total",children:[a.jsx("span",{children:"Estimated Total"}),a.jsxs("span",{children:["LKR ",l.toFixed(2)]})]}),a.jsxs("div",{className:"summary-actions",children:[a.jsx("button",{className:"btn btn-primary",onClick:d,children:"Proceed with Bank Transfer"}),a.jsx("button",{className:"btn btn-ghost",onClick:r,children:"Clear Cart"}),a.jsx(Z,{className:"btn",to:"/shop",children:"Continue Shopping"})]}),s&&a.jsxs("div",{className:"transfer",children:[a.jsx("h3",{children:"Bank Transfer Instructions"}),a.jsx("p",{className:"muted",children:"Please transfer the estimated total amount to the bank account listed below. After transferring, send the payment confirmation (screenshot or message) to WhatsApp for verification."}),a.jsxs("div",{className:"bank-box",children:[a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Name"}),a.jsx("span",{children:"Ishfaque Mif"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Bank"}),a.jsx("span",{children:"BOC"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Branch"}),a.jsx("span",{children:"Puttalam"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Account No."}),a.jsx("span",{children:"89001476"})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Amount"}),a.jsxs("span",{children:["$",l.toFixed(2)]})]}),a.jsxs("div",{className:"row",children:[a.jsx("span",{children:"Reference"}),a.jsx("span",{children:"Order by your full name"})]})]}),a.jsxs("div",{className:"transfer-actions",children:[a.jsx("a",{className:"btn btn-primary",href:`https://wa.me/94768976222?text=${u}`,target:"_blank",rel:"noopener noreferrer",children:"Send Confirmation via WhatsApp"}),a.jsxs("button",{className:"btn-cta mega-cta",onClick:h=>{const p=h.currentTarget,f=p.getBoundingClientRect(),m=h.clientX-f.left,g=h.clientY-f.top,b=document.createElement("span");b.className="burst",b.style.left=`${m}px`,b.style.top=`${g}px`,p.appendChild(b),setTimeout(()=>b.remove(),800),p.classList.add("pressed"),setTimeout(()=>p.classList.remove("pressed"),150),i("/checkout")},onMouseMove:h=>{const p=h.currentTarget,f=p.getBoundingClientRect(),m=f.left+f.width/2,g=f.top+f.height/2,b=(h.clientX-m)/(f.width/2),x=(h.clientY-g)/(f.height/2),v=8;p.style.setProperty("--tx",`${b*6}px`),p.style.setProperty("--ty",`${x*6}px`),p.style.setProperty("--rx",`${-x*v}deg`),p.style.setProperty("--ry",`${b*v}deg`),p.style.setProperty("--mx",`${(b+1)/2*100}%`)},onMouseLeave:h=>{const p=h.currentTarget;p.style.removeProperty("--tx"),p.style.removeProperty("--ty"),p.style.removeProperty("--rx"),p.style.removeProperty("--ry"),p.style.removeProperty("--mx")},title:"Optionally upload the payment screenshot on the order page","aria-label":"Go to order page",children:[a.jsx("span",{className:"mega-cta__bg","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__border","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__glow","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__sheen","aria-hidden":"true"}),a.jsx("span",{className:"mega-cta__text",children:"Go to Order Page"}),a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",style:{marginLeft:10},children:[a.jsx("path",{d:"M5 12h14"}),a.jsx("path",{d:"M12 5l7 7-7 7"})]})]})]}),a.jsx("p",{className:"note",children:"Optional: On the order/checkout page, include an upload option to attach the payment screenshot for records. Ensure the name and order reference match the WhatsApp message."})]})]})]})})})}),a.jsx("style",{children:`
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
      `})]})}const Aj=["Commercial Bank of Ceylon","Bank of Ceylon (BOC)","Hatton National Bank (HNB)","Sampath Bank","Nations Trust Bank","DFCC Bank","Seylan Bank","Union Bank","Pan Asia Banking Corporation","Amana Bank","Cargills Bank","National Development Bank (NDB)","People's Bank"],yr={accountHolder:"Ishfaque Mif",bank:"Bank of Ceylon (BOC)",branch:"Puttalam",accountNumber:"89001476",whatsapp:"+94 76 897 6222"};function Oj(){const{items:t,clear:e}=Gi(),{user:n}=on(),[r,i]=w.useState({line1:"",city:"",postal_code:"",country:"LK"}),[s,o]=w.useState(null),[l,c]=w.useState(null),[d,u]=w.useState(!1),[h,p]=w.useState(null),[f,m]=w.useState(null),[g,b]=w.useState(""),[x,v]=w.useState(""),[y,k]=w.useState(""),[j,S]=w.useState(""),[_,N]=w.useState(null),[A,E]=w.useState(null),[C,B]=w.useState(!1),[O,L]=w.useState(""),[P,F]=w.useState("");w.useEffect(()=>{n!=null&&n.email&&!y&&k(n.email)},[n,y]);async function W(z){var J;const H=(J=z.target.files)==null?void 0:J[0];if(!H)return;if(!["application/pdf","image/jpeg","image/jpg","image/png"].includes(H.type)){p("Only PDF, JPG, and PNG files are allowed");return}if(H.size>5*1024*1024){p("File size must be less than 5MB");return}N(H),p(null),B(!0);try{const xe=new FormData;xe.append("file",H);const pe=await Q.post("/checkout/upload-receipt",xe,{headers:{"Content-Type":"multipart/form-data"}});E(pe.data.url)}catch{p("Failed to upload receipt. Please try again."),N(null)}finally{B(!1)}}async function M(z){var H,G;z.preventDefault(),p(null),u(!0);try{if(!g||!x||!y||!j||!A){p("Please fill all required fields and upload receipt"),u(!1);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)){p("Please enter a valid email address"),u(!1);return}const xe={shipping_address:r,payment_method:"bank_transfer",customer_name:g,customer_phone:x,customer_email:y,selected_bank:j,transfer_receipt_url:A,transaction_reference:O,additional_notes:P,items:t.map(_e=>({product_id:_e.id,title:_e.name,quantity:_e.qty,price:_e.price})),total_amount:t.reduce((_e,Me)=>_e+Me.price*Me.qty,0)},pe=await Q.post("/checkout",xe);o(pe.data.order_id),c(pe.data.bank_transfer),e()}catch(J){p(((G=(H=J.response)==null?void 0:H.data)==null?void 0:G.detail)||"Failed to create order. Please try again.")}finally{u(!1)}}return a.jsx("div",{className:"checkout-wrap",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"head",children:[a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Checkout"}),a.jsx("h1",{className:"headline",children:"Complete your order"}),a.jsx("p",{className:"muted",children:"Secure bank transfer • Upload receipt • Fast verification"})]}),t.length>0&&a.jsxs("div",{className:"pill",children:[a.jsx("span",{children:t.reduce((z,H)=>z+H.qty,0)})," items"]})]}),h&&a.jsx("div",{className:"alert error",children:h}),s?a.jsxs("div",{style:{maxWidth:"600px",margin:"40px auto",padding:"0",position:"relative"},children:[a.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"20px",padding:"48px 32px",boxShadow:"0 20px 60px rgba(102, 126, 234, 0.4)",textAlign:"center",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",width:"200px",height:"200px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",top:"-100px",right:"-100px"}}),a.jsx("div",{style:{position:"absolute",width:"150px",height:"150px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.1)",bottom:"-75px",left:"-75px"}}),a.jsx("div",{style:{width:"100px",height:"100px",margin:"0 auto 24px",background:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(56, 239, 125, 0.4)",position:"relative",animation:"bounce 1s ease infinite"},children:a.jsx("svg",{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"20 6 9 17 4 12"})})}),a.jsx("h1",{style:{color:"white",fontSize:"32px",fontWeight:"bold",marginBottom:"16px",textShadow:"0 2px 10px rgba(0,0,0,0.2)",position:"relative"},children:"Order Placed Successfully!"}),a.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.15)",backdropFilter:"blur(10px)",border:"2px solid rgba(255, 255, 255, 0.2)",borderRadius:"12px",padding:"20px",marginBottom:"24px",position:"relative"},children:[a.jsx("div",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"14px",marginBottom:"8px",fontWeight:"500"},children:"Order ID"}),a.jsxs("div",{style:{color:"white",fontSize:"24px",fontWeight:"bold",letterSpacing:"1px",fontFamily:"monospace"},children:["#",s]})]}),a.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(10px)",borderRadius:"12px",padding:"20px",marginBottom:"24px",textAlign:"left",position:"relative"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",background:"rgba(255, 183, 77, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"12px"},children:a.jsx("span",{style:{fontSize:"24px"},children:"⏳"})}),a.jsxs("div",{children:[a.jsx("div",{style:{color:"white",fontSize:"16px",fontWeight:"bold"},children:"Pending Verification"}),a.jsx("div",{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"13px"},children:"Your order is being reviewed"})]})]}),a.jsx("div",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"14px",lineHeight:"1.6"},children:"We will review your payment receipt and update your order status shortly. You will be notified once your payment is verified."})]}),a.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",position:"relative"},children:[a.jsxs("button",{onClick:()=>window.location.href="/orders",style:{padding:"14px 32px",background:"white",color:"#667eea",border:"none",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.2)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:z=>{z.currentTarget.style.transform="translateY(-2px)",z.currentTarget.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.3)"},onMouseOut:z=>{z.currentTarget.style.transform="translateY(0)",z.currentTarget.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"},children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),a.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"View Order History"]}),a.jsxs("button",{onClick:()=>window.location.href="/shop",style:{padding:"14px 32px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"12px",cursor:"pointer",fontSize:"16px",fontWeight:"bold",backdropFilter:"blur(10px)",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px"},onMouseOver:z=>{z.currentTarget.style.background="rgba(255, 255, 255, 0.3)",z.currentTarget.style.transform="translateY(-2px)"},onMouseOut:z=>{z.currentTarget.style.background="rgba(255, 255, 255, 0.2)",z.currentTarget.style.transform="translateY(0)"},children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"Continue Shopping"]})]})]}),a.jsxs("div",{style:{marginTop:"24px",background:"white",borderRadius:"12px",padding:"24px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"16px",color:"#333"},children:"What's Next?"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[a.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e3f2fd",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("span",{style:{fontSize:"18px"},children:"📧"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Email Confirmation"}),a.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Check your email for order confirmation and receipt"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[a.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#fff3e0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("span",{style:{fontSize:"18px"},children:"🔍"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Payment Review"}),a.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Our team will verify your payment receipt within 24 hours"})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"12px"},children:[a.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("span",{style:{fontSize:"18px"},children:"📦"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"600",color:"#333",marginBottom:"4px"},children:"Track Your Order"}),a.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Monitor your order status in real-time from Order History"})]})]})]})]}),a.jsx("style",{children:`
              @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `})]}):a.jsxs("div",{className:"grid",children:[a.jsxs("form",{onSubmit:M,className:"panel form",children:[a.jsx("h3",{className:"section-title",children:"Customer information"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Full name",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:g,onChange:z=>b(z.target.value),required:!0,placeholder:"e.g. John Perera"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Phone number",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{type:"tel",value:x,onChange:z=>v(z.target.value),required:!0,placeholder:"07x xxx xxxx"})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Email",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{type:"email",value:y,onChange:z=>k(z.target.value),required:!0,disabled:!!(n!=null&&n.email),placeholder:"you@example.com"}),(n==null?void 0:n.email)&&a.jsx("p",{className:"tiny muted",children:"Using logged-in account email"})]}),a.jsx("h3",{className:"section-title",children:"Delivery address"}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Address line 1",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:r.line1,onChange:z=>i({...r,line1:z.target.value}),required:!0})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["City",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:r.city,onChange:z=>i({...r,city:z.target.value}),required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Postal code",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsx("input",{value:r.postal_code,onChange:z=>i({...r,postal_code:z.target.value}),required:!0})]})]}),a.jsx("h3",{className:"section-title",children:"Bank transfer"}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Select your bank",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsxs("select",{value:j,onChange:z=>S(z.target.value),required:!0,children:[a.jsx("option",{value:"",children:"-- Select your bank --"}),Aj.map(z=>a.jsx("option",{value:z,children:z},z))]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{children:["Upload transfer receipt",a.jsx("span",{"aria-hidden":!0,children:" *"})]}),a.jsxs("div",{className:"drop",children:[a.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:W,disabled:C}),a.jsxs("div",{className:"note",children:[a.jsx("strong",{children:C?"Uploading…":_?`${_.name}`:"Choose PDF/JPG/PNG (max 5MB)"}),_&&!C&&a.jsx("span",{className:"ok",children:"✓ Ready"})]})]}),a.jsx("p",{className:"tiny muted",children:"We’ll verify the receipt within 24 hours."})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Transaction / reference (optional)"}),a.jsx("input",{value:O,onChange:z=>L(z.target.value),placeholder:"e.g. BOCPAY12345"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{children:"Additional notes (optional)"}),a.jsx("input",{value:P,onChange:z=>F(z.target.value),placeholder:"Delivery instructions, etc."})]})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:t.length===0||d||!A,children:d?"Processing…":"Complete order"})]}),a.jsxs("aside",{className:"stack",children:[a.jsxs("div",{className:"panel sticky",children:[a.jsx("h3",{className:"section-title",children:"Company bank account"}),a.jsxs("div",{className:"kv",children:[a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Account holder"}),a.jsx("div",{className:"val",children:yr.accountHolder})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Bank"}),a.jsx("div",{className:"val",children:yr.bank})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Branch"}),a.jsx("div",{className:"val",children:yr.branch})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"Account number"}),a.jsxs("div",{className:"val row-inline",children:[a.jsx("code",{className:"code",children:yr.accountNumber}),a.jsx("button",{type:"button",className:"btn btn-ghost sm",onClick:()=>{navigator.clipboard.writeText(yr.accountNumber),m("acc"),setTimeout(()=>m(null),1500)},children:"Copy"})]})]}),a.jsxs("div",{children:[a.jsx("span",{className:"muted",children:"WhatsApp"}),a.jsxs("div",{className:"val row-inline",children:[a.jsx("code",{className:"code",children:yr.whatsapp}),a.jsx("a",{className:"btn btn-ghost sm",href:`https://wa.me/${yr.whatsapp.replace(/[^\d]/g,"")}`,target:"_blank",children:"Chat"})]})]})]}),a.jsx("p",{className:"tiny muted",children:"Transfer the total to this account, then upload the receipt on the left."}),f==="acc"&&a.jsx("div",{className:"toast",children:"Account number copied"})]}),a.jsxs("div",{className:"panel",children:[a.jsx("h3",{className:"section-title",children:"Order summary"}),a.jsx("div",{className:"items",children:t.length===0?a.jsx("p",{className:"muted",children:"Your cart is empty."}):t.map(z=>a.jsxs("div",{className:"item",children:[a.jsxs("div",{className:"name",children:[z.name," ",a.jsxs("span",{className:"muted",children:["×",z.qty]})]}),a.jsxs("div",{className:"price",children:["Rs. ",(z.price*z.qty).toFixed(2)]})]},z.id))}),a.jsxs("div",{className:"total",children:[a.jsx("div",{children:"Total"}),a.jsxs("div",{className:"price",children:["Rs. ",t.reduce((z,H)=>z+H.price*H.qty,0).toFixed(2)]})]})]})]})]}),a.jsx("style",{children:`
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
        `})]})})}function Lj(){const t=sn(),[e,n]=w.useState([]),[r,i]=w.useState(!0),[s,o]=w.useState(null),[l,c]=w.useState("all"),[d,u]=w.useState(!1),[h,p]=w.useState(null),f=w.useCallback(async()=>{var j,S,_;i(!0),o(null);try{const N=await Q.get("/orders/history",{params:{status_filter:l}});n(N.data.orders||[])}catch(N){((j=N==null?void 0:N.response)==null?void 0:j.status)===401?(u(!0),o("Not authenticated")):o(((_=(S=N.response)==null?void 0:S.data)==null?void 0:_.detail)||"Failed to load orders")}finally{i(!1)}},[l]);w.useEffect(()=>{f()},[f]);function m(j){if(!j)return"N/A";try{return new Date(j).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return"N/A"}}function g(j){return j?`LKR ${j.toFixed(2)}`:"LKR 0.00"}function b(j){switch(j){case"placed":return"#d97706";case"verified":return"#0284c7";case"processing":return"#ea580c";case"shipped":return"#2563eb";case"delivered":return"#16a34a";case"rejected":return"#dc2626";case"cancelled":return"#9ca3af";default:return"#6D74FF"}}function x(j){switch(j){case"placed":return 20;case"verified":return 40;case"processing":return 60;case"shipped":return 80;case"delivered":return 100;default:return 0}}function v(j){switch(j){case"all":return"All";case"pending":return"In Progress";case"completed":return"Completed";case"cancelled":return"Cancelled";default:return j.charAt(0).toUpperCase()+j.slice(1)}}async function y(j){var S,_;try{await Q.post(`/orders/${j}/reorder`),alert("Items added to cart!"),t("/cart")}catch(N){alert(((_=(S=N.response)==null?void 0:S.data)==null?void 0:_.detail)||"Failed to reorder")}}async function k(j){p(j);const S=localStorage.getItem("access_token")||"";if(!S){alert("Not authenticated");return}const _=`/api/v1/orders/${j}/invoice?token=${encodeURIComponent(S)}`;try{const N=document.createElement("iframe");N.style.display="none",N.src=_,document.body.appendChild(N);const A=()=>{p(null);try{N.removeEventListener("load",A)}catch{}};try{N.addEventListener("load",A)}catch{}setTimeout(()=>{try{document.body.removeChild(N)}catch{}p(null)},1e4)}catch(N){console.error("Invoice download error:",N);try{window.location.href=_}catch{}p(null)}}return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[a.jsxs("div",{children:[a.jsx("h1",{className:"section-title",children:"📦 Order History"}),a.jsx("p",{className:"lead",children:"Track your orders and manage your purchase history."})]}),a.jsxs("button",{onClick:()=>f(),disabled:r,style:{padding:"12px 24px",background:r?"#ccc":"#6D74FF",color:"white",border:"none",borderRadius:"8px",cursor:r?"not-allowed":"pointer",fontSize:"16px",fontWeight:"bold",display:"flex",alignItems:"center",gap:"8px",transition:"all 0.3s ease",boxShadow:"0 2px 8px rgba(109, 116, 255, 0.3)"},onMouseOver:j=>{r||(j.currentTarget.style.background="#5a61d6",j.currentTarget.style.transform="translateY(-2px)",j.currentTarget.style.boxShadow="0 4px 12px rgba(109, 116, 255, 0.4)")},onMouseOut:j=>{r||(j.currentTarget.style.background="#6D74FF",j.currentTarget.style.transform="translateY(0)",j.currentTarget.style.boxShadow="0 2px 8px rgba(109, 116, 255, 0.3)")},children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",style:{animation:r?"spin 1s linear infinite":"none"},children:[a.jsx("polyline",{points:"23 4 23 10 17 10"}),a.jsx("path",{d:"M20.49 15a9 9 0 1 1-2.12-9.36L23 10"})]}),r?"Refreshing...":"Refresh"]})]}),a.jsx("div",{className:"order-filters",children:["all","pending","completed","cancelled"].map(j=>a.jsx("button",{className:`btn ${l===j?"btn-primary":"btn-ghost"}`,onClick:()=>c(j),children:v(j)},j))}),a.jsx("style",{children:`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}),s&&a.jsx("div",{className:"alert error",children:s}),d&&a.jsx("div",{className:"alert warning",children:a.jsx("button",{onClick:()=>t("/login?next=/orders"),className:"btn btn-primary",children:"Go to Login"})}),r&&a.jsx("div",{className:"loading",children:"Loading orders..."}),!r&&e.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{children:"📭"}),a.jsx("h3",{children:"No Orders Found"}),a.jsx("p",{children:l==="all"?"You haven’t placed any orders yet.":`No ${v(l)} orders found.`}),a.jsx("button",{onClick:()=>t("/shop"),className:"btn btn-primary",children:"Start Shopping"})]}),!r&&e.length>0&&a.jsx("div",{className:"order-list",children:e.map(j=>{var S;return a.jsxs("div",{className:"order-card",children:[a.jsxs("div",{className:"order-header",children:[a.jsxs("div",{children:[a.jsxs("h3",{children:["Order #",j.id.slice(-8)]}),a.jsx("p",{children:m(j.created_at)})]}),a.jsx("div",{className:"order-total",children:g(j.total_amount)})]}),a.jsxs("div",{className:"order-progress",children:[a.jsx("div",{className:"progress-bar",children:a.jsx("div",{style:{width:`${x(j.tracking_status)}%`,backgroundColor:b(j.tracking_status)}})}),a.jsx("p",{className:"status",style:{color:b(j.tracking_status)},children:(S=j.tracking_status)==null?void 0:S.toUpperCase()})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{onClick:()=>t(`/orders/${j.id}`),className:"btn btn-primary",children:"View"}),a.jsx("button",{onClick:()=>y(j.id),className:"btn btn-ghost",children:"🔁 Reorder"}),j.payment_status==="verified"&&a.jsx("button",{onClick:()=>k(j.id),className:"btn btn-ghost invoice-btn",disabled:h===j.id,"aria-busy":h===j.id,children:h===j.id?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"invoice-spinner",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.25"}),a.jsx("path",{d:"M22 12a10 10 0 0 1-10 10",strokeLinecap:"round"})]}),"Downloading..."]}):a.jsx(a.Fragment,{children:"📄 Invoice"})}),j.tracking_status==="delivered"&&a.jsx("button",{onClick:()=>t(`/orders/${j.id}/review`),className:"btn btn-ghost",children:"⭐ Review"})]})]},j.id)})})]})}),a.jsx("style",{children:`
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
      `})]})}function Qf(t){return t?new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"}function co(t){return`LKR ${t.toFixed(2)}`}const Jf={placed:{icon:"📦",color:"#FFD700"},verified:{icon:"✅",color:"#0284c7"},processing:{icon:"⚙️",color:"#ea580c"},shipped:{icon:"🚚",color:"#2563eb"},delivered:{icon:"🎉",color:"#11998e"}},e0=["placed","verified","processing","shipped","delivered"];function Ij(){const{orderId:t}=ax(),e=sn(),[n,r]=w.useState(null),[i,s]=w.useState(!0),[o,l]=w.useState(null),[c,d]=w.useState(!1),u=w.useCallback(async()=>{var m,g;s(!0),l(null);try{const b=await Q.get(`/orders/${t}`);r(b.data)}catch(b){l(((g=(m=b.response)==null?void 0:m.data)==null?void 0:g.detail)||"Failed to load order details")}finally{s(!1)}},[t]);w.useEffect(()=>{u()},[u]);const h=w.useCallback(async m=>{var b,x,v;const g=(b=m.target.files)==null?void 0:b[0];if(g){d(!0);try{const y=new FormData;y.append("file",g),await Q.put(`/orders/${t}/receipt`,y,{headers:{"Content-Type":"multipart/form-data"}}),alert("Receipt uploaded successfully! Awaiting admin verification."),u()}catch(y){alert(((v=(x=y.response)==null?void 0:x.data)==null?void 0:v.detail)||"Failed to upload receipt")}finally{d(!1)}}},[t,u]);w.useEffect(()=>{let m=null,g=!1;async function b(){try{const x=await Q.get(`/orders/${t}`);if(g)return;const v=x.data;(!n||v.tracking_status!==n.tracking_status||v.payment_status!==n.payment_status)&&r(v),(v.tracking_status==="delivered"||v.tracking_status==="cancelled")&&m&&(clearInterval(m),m=null)}catch{}}return n&&n.tracking_status!=="delivered"&&n.tracking_status!=="cancelled"&&(b(),m=setInterval(b,5e3)),()=>{g=!0,m&&clearInterval(m)}},[n==null?void 0:n.tracking_status,n==null?void 0:n.payment_status,t]);const p=w.useMemo(()=>n?e0.indexOf(n.tracking_status):-1,[n==null?void 0:n.tracking_status]),f=w.useMemo(()=>n?Jf[n.tracking_status]||{icon:"📝",color:"#6D74FF"}:null,[n==null?void 0:n.tracking_status]);return i?a.jsx("section",{className:"section",children:a.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:a.jsx("div",{style:{fontSize:"18px",color:"var(--muted)"},children:"Loading order details..."})})}):o||!n?a.jsx("section",{className:"section",children:a.jsx("div",{className:"container",style:{textAlign:"center",padding:"48px 0"},children:a.jsxs("div",{className:"empty-state",style:{padding:"48px",background:"var(--card)",borderRadius:"14px",boxShadow:"var(--shadow)"},children:[a.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"❌"}),a.jsx("h2",{children:o||"Order not found"}),a.jsx("button",{onClick:()=>e("/orders"),className:"btn",style:{marginTop:"16px"},children:"Back to Orders"})]})})}):a.jsxs("section",{className:"section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("button",{onClick:()=>e("/orders"),className:"btn",style:{marginBottom:"24px",display:"inline-flex",alignItems:"center",gap:"8px"},children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Back to Orders"]}),a.jsxs("div",{className:"order-detail-header",children:[a.jsxs("div",{className:"order-detail-header-left",children:[a.jsxs("h1",{className:"section-title",children:["Order #",n.id.slice(-8)]}),a.jsxs("p",{style:{color:"var(--muted)",margin:"4px 0 0"},children:["📅 ",Qf(n.created_at)]})]}),a.jsxs("div",{className:"order-detail-header-right",children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--muted)",marginBottom:"4px"},children:"Total Amount"}),a.jsx("div",{className:"price",style:{fontSize:"32px",margin:"0 0 12px"},children:co(n.total_amount)}),a.jsxs("div",{className:"status-badge",style:{backgroundColor:(f==null?void 0:f.color)||"#6D74FF",color:"white",padding:"8px 16px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",display:"inline-flex",alignItems:"center",gap:"6px"},children:[f==null?void 0:f.icon," ",n.tracking_status.charAt(0).toUpperCase()+n.tracking_status.slice(1)]})]})]}),n.admin_feedback&&a.jsxs("div",{className:"alert",style:{background:n.payment_status==="rejected"?"#fee2e2":"#fef3c7",border:`1px solid ${n.payment_status==="rejected"?"#dc2626":"#f59e0b"}`,borderRadius:"12px",padding:"20px",marginBottom:"24px"},children:[a.jsx("div",{style:{fontWeight:"bold",fontSize:"16px",color:n.payment_status==="rejected"?"#991b1b":"#92400e",marginBottom:"12px"},children:"⚠️ Admin Feedback"}),a.jsx("div",{style:{color:n.payment_status==="rejected"?"#991b1b":"#92400e",fontSize:"14px",lineHeight:"1.6",marginBottom:n.resubmit_required?"16px":"0"},children:n.admin_feedback}),n.resubmit_required&&a.jsxs("div",{children:[a.jsxs("label",{className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",cursor:c?"not-allowed":"pointer",opacity:c?.7:1},children:["📤 ",c?"Uploading...":"Re-upload Receipt",a.jsx("input",{type:"file",accept:".pdf,.jpg,.jpeg,.png",onChange:h,disabled:c,style:{display:"none"}})]}),a.jsx("p",{style:{fontSize:"13px",color:"var(--muted)",marginTop:"8px"},children:"Please upload a valid payment receipt (PDF, JPG, PNG)"})]})]}),n.items&&n.items.length>0&&a.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"🛒 Order Items"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:n.items.map((m,g)=>a.jsxs("div",{className:"order-item",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontWeight:"600",marginBottom:"4px"},children:m.title||m.name||"Product"}),a.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)"},children:["Quantity: ",m.quantity," × ",co(m.price)]})]}),a.jsx("div",{className:"price",style:{fontSize:"18px"},children:co(m.price*m.quantity)})]},g))}),a.jsxs("div",{style:{marginTop:"16px",paddingTop:"16px",borderTop:"2px solid var(--bg)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Total Amount"}),a.jsx("span",{className:"price",style:{fontSize:"24px"},children:co(n.total_amount)})]})]}),a.jsxs("div",{className:"card",style:{padding:"28px",marginBottom:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"24px"},children:"📊 Order Timeline"}),a.jsx("div",{style:{position:"relative",paddingLeft:"48px"},children:e0.map((m,g)=>{const b=p>=g,x=n.tracking_status===m,v=Jf[m];return a.jsxs("div",{style:{position:"relative",paddingBottom:g<4?"32px":"0"},children:[g<4&&a.jsx("div",{style:{position:"absolute",left:"-28px",top:"32px",width:"3px",height:"32px",background:b?"var(--primary)":"#e5e7eb"}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("div",{style:{position:"absolute",left:"-36px",width:"18px",height:"18px",borderRadius:"50%",background:b?"var(--primary)":"#e5e7eb",border:x?"4px solid rgba(109, 40, 217, 0.3)":"none",boxShadow:x?"0 0 0 4px rgba(109, 40, 217, 0.1)":"none",display:"flex",alignItems:"center",justifyContent:"center"},children:x&&a.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"white"}})}),a.jsxs("div",{style:{flex:1,padding:"16px",background:x?"rgba(109, 40, 217, 0.05)":"transparent",borderRadius:"12px",border:x?"2px solid rgba(109, 40, 217, 0.2)":"none"},children:[a.jsxs("div",{style:{fontWeight:x?"bold":"600",fontSize:x?"18px":"16px",color:b?"var(--text)":"var(--muted)",textTransform:"capitalize",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{children:v.icon}),m,x&&a.jsx("span",{style:{marginLeft:"8px",padding:"4px 12px",background:"var(--primary)",color:"white",fontSize:"12px",borderRadius:"12px",fontWeight:"bold"},children:"CURRENT"})]}),x&&n.estimated_delivery_date&&m==="shipped"&&a.jsxs("div",{style:{fontSize:"14px",color:"var(--muted)",marginTop:"8px",display:"flex",alignItems:"center",gap:"6px"},children:[a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),a.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),a.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),"Est. delivery: ",Qf(n.estimated_delivery_date)]})]})]})]},m)})})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",marginBottom:"24px"},children:[a.jsxs("div",{className:"card",style:{padding:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"👤 Customer Information"}),a.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[a.jsxs("div",{style:{marginBottom:"8px"},children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Name:"})," ",a.jsx("span",{style:{fontWeight:"600"},children:n.customer_name})]}),a.jsxs("div",{style:{marginBottom:"8px"},children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Phone:"})," ",a.jsx("span",{style:{fontWeight:"600"},children:n.customer_phone})]}),n.customer_email&&a.jsxs("div",{children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Email:"})," ",a.jsx("span",{style:{fontWeight:"600",wordBreak:"break-all"},children:n.customer_email})]})]})]}),a.jsxs("div",{className:"card",style:{padding:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"📍 Delivery Address"}),a.jsxs("div",{style:{fontSize:"15px",lineHeight:"2"},children:[a.jsx("div",{style:{marginBottom:"8px",fontWeight:"600"},children:n.shipping_address.line1}),a.jsxs("div",{style:{marginBottom:"8px",fontWeight:"600"},children:[n.shipping_address.city,", ",n.shipping_address.postal_code]}),a.jsx("div",{style:{fontWeight:"600"},children:n.shipping_address.country})]})]})]}),a.jsxs("div",{className:"card",style:{padding:"24px",marginBottom:"24px"},children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginTop:0,marginBottom:"16px"},children:"💳 Payment Information"}),a.jsxs("div",{style:{fontSize:"15px",lineHeight:"2",marginBottom:"16px"},children:[a.jsxs("div",{style:{marginBottom:"12px"},children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Bank:"})," ",a.jsx("span",{style:{fontWeight:"600"},children:n.selected_bank||"N/A"})]}),n.transaction_reference&&a.jsxs("div",{children:[a.jsx("strong",{style:{color:"var(--muted)"},children:"Reference:"})," ",a.jsx("span",{style:{fontWeight:"600",fontFamily:"monospace",fontSize:"14px",background:"var(--bg)",padding:"4px 8px",borderRadius:"6px"},children:n.transaction_reference})]})]}),n.transfer_receipt_url&&a.jsx("div",{style:{marginBottom:"16px"},children:a.jsx("a",{href:n.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"btn",style:{display:"inline-flex",alignItems:"center",gap:"8px",textDecoration:"none"},children:"📄 View Receipt"})}),n.additional_notes&&a.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"var(--bg)",borderRadius:"8px"},children:[a.jsx("strong",{style:{color:"var(--muted)",fontSize:"14px"},children:"Additional Notes:"}),a.jsx("div",{style:{marginTop:"8px",fontSize:"15px",lineHeight:"1.6"},children:n.additional_notes})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function Dj(){const{user:t,logout:e}=on(),{count:n}=Gi(),[r,i]=w.useState(!1),[s,o]=w.useState(!1),[l,c]=w.useState(!1),[d,u]=w.useState(!1),[h,p]=w.useState(""),[f,m]=w.useState([]),[g,b]=w.useState(!1),[x,v]=w.useState(-1),y=Wt(),k=sn(),j=w.useRef(null),S=w.useRef(null),_=w.useRef(null),N=w.useRef(null);w.useEffect(()=>{o(!1),c(!1),setTimeout(()=>{document.activeElement instanceof HTMLElement&&document.activeElement.blur()},100)},[y.pathname]),w.useEffect(()=>{const O=L=>{var P;if(L.key==="Escape")o(!1),c(!1),b(!1),v(-1),(P=N.current)==null||P.blur();else if(g&&f.length>0){if(L.key==="ArrowDown")L.preventDefault(),v(F=>F<f.length-1?F+1:0);else if(L.key==="ArrowUp")L.preventDefault(),v(F=>F>0?F-1:f.length-1);else if(L.key==="Enter"&&x>=0){L.preventDefault();const F=f[x];k(`/search?q=${encodeURIComponent(F.name)}`),p(""),b(!1),v(-1),o(!1)}}};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[g,f,x,k]),w.useEffect(()=>{if(n<=0)return;i(!0);const O=setTimeout(()=>i(!1),300);return()=>clearTimeout(O)},[n]),w.useEffect(()=>{const O=L=>{S.current&&(S.current.contains(L.target)||c(!1),_.current&&(_.current.contains(L.target)||(b(!1),v(-1))))};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[]);const A=({isActive:O})=>O?"nav-link active":"nav-link",E=({isActive:O})=>O?"auth-btn active":"auth-btn",C=y.pathname.startsWith("/admin"),B=O=>{O.preventDefault();const L=x>=0?f[x].name:h.trim();L&&(k(`/search?q=${encodeURIComponent(L)}`),p(""),b(!1),v(-1),o(!1))};return w.useEffect(()=>{if(!h.trim()){m([]),b(!1),v(-1);return}const O=setTimeout(async()=>{var L;try{const F=((L=(await Q.get("/api/v1/products",{params:{q:h.trim(),size:10}})).data)==null?void 0:L.items)||[],W=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],M=h.toLowerCase(),z=W.filter(G=>G.name.toLowerCase().includes(M)||G.content.toLowerCase().includes(M)),H=[...F.map(G=>({id:`product-${G.id}`,name:G.name,type:"product",url:`/product/${G.slug}`,content:G.category||"Product"})),...z].slice(0,8);m(H),b(!0),v(-1)}catch{const F=[{id:"faq-general",name:"What is this platform?",type:"faq",url:"/faq",content:"modern e-commerce platform built with FastAPI backend and React frontend"},{id:"faq-account",name:"How do I create an account?",type:"faq",url:"/faq",content:"Click on Register in the navigation menu, fill in your details"},{id:"faq-payment",name:"What payment methods are available?",type:"faq",url:"/faq",content:"Stripe credit/debit cards and Bank Transfer"},{id:"faq-shopping",name:"How do I browse products?",type:"faq",url:"/faq",content:"After logging in, click Shop in the navigation menu"},{id:"faq-cart",name:"How do I add items to my cart?",type:"faq",url:"/faq",content:"On the product detail page, select quantity and click Add to Cart"},{id:"faq-checkout",name:"What information do I need to provide during checkout?",type:"faq",url:"/faq",content:"Customer name, contact information, shipping address, payment method"},{id:"faq-orders",name:"How do I view my order history?",type:"faq",url:"/faq",content:"Access your order history from the Orders page in navigation"},{id:"faq-password",name:"I forgot my password. What should I do?",type:"faq",url:"/faq",content:"Contact support through the contact page for assistance"},{id:"about-story",name:"Our Story",type:"page",url:"/about",content:"Design-led essentials, made to last. Everyday apparel and accessories built with comfort, durability"},{id:"about-values",name:"Our Values",type:"page",url:"/about",content:"Quality, sustainability, transparency, and customer satisfaction"},{id:"about-team",name:"Our Team",type:"page",url:"/about",content:"Passionate designers and craftsmen dedicated to creating timeless pieces"},{id:"contact-support",name:"Contact Support",type:"page",url:"/contact",content:"Get in touch with our support team for help with orders, products, or account issues"},{id:"contact-form",name:"Contact Form",type:"page",url:"/contact",content:"Send us a message through our contact form and we'll respond within 1-2 business days"},{id:"contact-whatsapp",name:"WhatsApp Support",type:"page",url:"/contact",content:"Chat with us on WhatsApp for immediate assistance"},{id:"contact-phone",name:"Phone Support",type:"page",url:"/contact",content:"Call us directly for urgent inquiries and support"},{id:"home",name:"Home",type:"page",url:"/",content:"Welcome to our e-commerce platform. Browse our latest collections and featured products"},{id:"shop",name:"Shop",type:"page",url:"/shop",content:"Browse our complete product catalog with advanced filtering and search"}],W=h.toLowerCase(),M=F.filter(z=>z.name.toLowerCase().includes(W)||z.content.toLowerCase().includes(W));m(M.slice(0,8)),b(M.length>0),v(-1)}},300);return()=>clearTimeout(O)},[h]),a.jsxs("header",{className:"header",ref:j,children:[a.jsx("a",{href:"#main-content",className:"skip-link",children:"Skip to main content"}),a.jsxs("div",{className:"container header-inner",children:[a.jsxs("div",{className:"left",children:[a.jsxs("button",{className:"hamburger","aria-label":"Toggle navigation","aria-controls":"main-menu","aria-expanded":s,onClick:()=>o(O=>!O),children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx(Z,{to:"/",className:"brand","aria-label":"Home",children:a.jsx("div",{className:"logo-container",children:a.jsxs("div",{className:`logo-wrapper ${d?"loaded":""}`,children:[a.jsx("img",{src:"/images/title.png",alt:"Own Setup logo",onLoad:()=>u(!0)}),a.jsx("div",{className:"logo-glow","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})})]}),a.jsxs("nav",{id:"main-menu",className:`nav ${s?"open":""}`,"aria-label":"Main navigation",children:[!C&&a.jsxs(a.Fragment,{children:[a.jsx(Un,{to:"/",end:!0,className:A,children:"Home"}),a.jsx(Un,{to:"/shop",className:A,children:"Shop"}),a.jsxs("div",{className:"search-container",ref:_,children:[a.jsxs("form",{onSubmit:B,className:"search-form",children:[a.jsx("input",{ref:N,type:"search",placeholder:"Search...",value:h,onChange:O=>p(O.target.value),onFocus:()=>{f.length>0&&b(!0)},className:"search-input","aria-label":"Search",autoComplete:"off"}),h&&a.jsx("button",{type:"button",className:"search-clear",onClick:()=>{var O;p(""),b(!1),v(-1),(O=N.current)==null||O.focus()},"aria-label":"Clear search",children:"×"}),a.jsx("button",{type:"submit",className:"search-btn","aria-label":"Submit search",children:a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("path",{d:"m21 21-4.35-4.35"})]})})]}),g&&f.length>0&&a.jsx("div",{className:"search-suggestions",children:f.map((O,L)=>a.jsxs("button",{type:"button",className:`suggestion-item ${x===L?"selected":""}`,onClick:()=>{k(O.url),p(""),b(!1),v(-1),o(!1)},onMouseEnter:()=>v(L),children:[a.jsxs("div",{className:"suggestion-icon",children:[O.type==="product"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"}),a.jsx("line",{x1:"7",y1:"7",x2:"7",y2:"7"})]}),O.type==="faq"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),a.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),O.type==="page"&&a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),a.jsx("polyline",{points:"14,2 14,8 20,8"})]})]}),a.jsxs("div",{className:"suggestion-content",children:[a.jsx("span",{className:"suggestion-title",children:O.name}),a.jsx("span",{className:"suggestion-type",children:O.type})]})]},O.id))})]}),a.jsx(Un,{to:"/about",className:A,children:"About"}),t&&a.jsxs(a.Fragment,{children:[a.jsx(Un,{to:"/contact",className:A,children:"Contact"}),a.jsxs(Un,{to:"/cart",className:({isActive:O})=>O?"nav-link cart-link active":"nav-link cart-link",children:["Cart",a.jsx("span",{className:`badge ${r?"bump":""}`,"aria-label":`${n} items in cart`,children:n})]})]})]}),a.jsx("div",{className:"divider","aria-hidden":!0}),!t&&a.jsxs("div",{className:"auth",children:[a.jsx(Un,{to:"/login",end:!0,className:E,children:"Login"}),a.jsx(Un,{to:"/register",className:E,children:"Register"})]})]}),t&&a.jsxs("div",{className:"user-wrap",ref:S,children:[t.is_staff&&!C&&a.jsx(Un,{to:"/admin",className:A,children:"Admin"}),a.jsxs("button",{className:"user-btn","aria-haspopup":"menu","aria-expanded":l,onClick:()=>c(O=>!O),title:t.email,children:[a.jsx("div",{className:"avatar","aria-hidden":!0,children:t!=null&&t.avatar_url?a.jsx("img",{src:t.avatar_url,alt:""}):null}),a.jsx("span",{className:"email",children:t.email})]}),l&&a.jsxs("div",{className:"user-menu",role:"menu",children:[a.jsx(Z,{to:"/account",className:"menu-item",role:"menuitem",children:"Account"}),a.jsx(Z,{to:"/orders",className:"menu-item",role:"menuitem",children:"Orders"}),a.jsx("button",{className:"menu-item",role:"menuitem",onClick:e,children:"Logout"})]})]})]}),s&&a.jsx("div",{className:"overlay",onClick:()=>o(!1),"aria-hidden":!0}),a.jsx("style",{children:`
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
      `})]})}function Fj(){const t=new Date().getFullYear();return a.jsxs("footer",{className:"footer",role:"contentinfo",children:[a.jsxs("div",{className:"container footer-inner",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"col brand-col",children:[a.jsxs(Z,{to:"/",className:"brand","aria-label":"Home",children:[a.jsx("img",{src:"/images/title.png",alt:"Own Setup logo"}),a.jsx("span",{className:"sr-only",children:"Own Setup"})]}),a.jsx("p",{className:"tagline",children:"Everyday essentials with thoughtful design and lasting quality."})]}),a.jsxs("nav",{className:"col","aria-label":"Footer navigation",children:[a.jsx("h3",{className:"col-title",children:"Navigate"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx(Z,{to:"/",children:"Home"})}),a.jsx("li",{children:a.jsx(Z,{to:"/shop",children:"Shop"})}),a.jsx("li",{children:a.jsx(Z,{to:"/about",children:"About"})}),a.jsx("li",{children:a.jsx(Z,{to:"/contact",children:"Contact"})}),a.jsx("li",{children:a.jsx(Z,{to:"/cart",children:"Cart"})})]})]}),a.jsxs("nav",{className:"col","aria-label":"Help and policies",children:[a.jsx("h3",{className:"col-title",children:"Help"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx(Z,{to:"/support",children:"Support"})}),a.jsx("li",{children:a.jsx(Z,{to:"/faq",children:"FAQ"})}),a.jsx("li",{children:a.jsx(Z,{to:"/shipping-returns",children:"Shipping & Returns"})}),a.jsx("li",{children:a.jsx(Z,{to:"/privacy",children:"Privacy Policy"})}),a.jsx("li",{children:a.jsx(Z,{to:"/terms",children:"Terms of Service"})})]})]}),a.jsxs("div",{className:"col",children:[a.jsx("h3",{className:"col-title",children:"Contact"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),a.jsx("li",{children:"Phone: +94 76 89 76 222"}),a.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00"}),a.jsx("li",{children:"Address: 252/1A Mannar Road, Puttalam"})]}),a.jsxs("div",{className:"social",children:[a.jsx("a",{href:"https://www.instagram.com/","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:"IG"}),a.jsx("a",{href:"https://facebook.com/","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:"FB"}),a.jsx("a",{href:"https://x.com/","aria-label":"X (Twitter)",target:"_blank",rel:"noopener noreferrer",children:"X"})]})]}),a.jsxs("div",{className:"col newsletter",children:[a.jsx("h3",{className:"col-title",children:"Stay in the loop"}),a.jsx("p",{className:"muted",children:"Subscribe for product drops, care tips, and seasonal edits."}),a.jsxs("form",{className:"signup",onSubmit:e=>{e.preventDefault(),alert("Thanks for subscribing!")},children:[a.jsx("label",{htmlFor:"footer-email",className:"sr-only",children:"Email address"}),a.jsx("input",{id:"footer-email",type:"email",required:!0,placeholder:"email@example.com",autoComplete:"email"}),a.jsx("button",{className:"btn btn-primary",type:"submit",children:"Subscribe"})]}),a.jsx("p",{className:"tiny muted",children:"By subscribing, consent to receive marketing emails; unsubscribe anytime."})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("div",{className:"left",children:[a.jsxs("span",{children:["© ",t," Own Setup 💼"]}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(Z,{to:"/privacy",children:"Privacy"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(Z,{to:"/terms",children:"Terms"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx(Z,{to:"/support",children:"Support"})]}),a.jsxs("div",{className:"right",children:[a.jsx(Z,{to:"/sitemap",children:"Sitemap"}),a.jsx("span",{className:"dot",children:"•"}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",children:"Back to top ↑"})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function Bj(){return a.jsxs(a.Fragment,{children:[a.jsx(Dj,{}),a.jsx(dx,{}),a.jsx(Fj,{})]})}function Hj(){const[t,e]=w.useState([]),[n,r]=w.useState(1),[i]=w.useState(10),[s,o]=w.useState(0),[l,c]=w.useState(!1),[d,u]=w.useState(null),h=w.useRef(n);w.useEffect(()=>{h.current=n},[n]);async function p(y){var j;c(!0),u(null);const k=new AbortController;try{const _=(await Q.get("/admin/orders",{params:{page:y,size:i},signal:k.signal})).data;e(Array.isArray(_.items)?_.items:[]),o(Number.isFinite(_.total)?_.total:0),r(Number.isFinite(_.page)?_.page:y)}catch(S){const _=S;if(((j=_==null?void 0:_.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{c(!1)}return()=>k.abort()}w.useEffect(()=>{let y=!1;const k=new AbortController;return(async()=>{var j;try{const S=await Q.get("/admin/orders",{params:{page:1,size:i},signal:k.signal});if(y)return;e(Array.isArray(S.data.items)?S.data.items:[]),o(Number.isFinite(S.data.total)?S.data.total:0),r(Number.isFinite(S.data.page)?S.data.page:1),u(null)}catch(S){if(y)return;const _=S;if(((j=_==null?void 0:_.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}u("Failed to fetch orders")}finally{y||c(!1)}})(),()=>{y=!0,k.abort()}},[]),w.useEffect(()=>{const y=window.setInterval(()=>{const k=h.current;p(k)},5e3);return()=>window.clearInterval(y)},[]),w.useEffect(()=>{n<=0||p(n)},[n]);const f=w.useMemo(()=>Math.max(1,Math.ceil((s||0)/i)),[s,i]);function m(y){return`LKR ${(Number.isFinite(y)?y:0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}async function g(y,k){var j;try{await Q.put(`/admin/orders/${y}/status`,{new_status:k,admin_feedback:null,resubmit_required:!1,estimated_delivery_date:null}),await p(h.current)}catch(S){const _=S;if(((j=_==null?void 0:_.response)==null?void 0:j.status)===401){try{window.location.href="/login"}catch{}return}console.error("Failed to update status",S),alert("Failed to update status. Please try again.")}}const b=n>1,x=n<f;function v(y){return{pending_verification:{bg:"#fff4e5",color:"#d97706",icon:"⏳",label:"Pending Verification"},payment_verified:{bg:"#dbeafe",color:"#2563eb",icon:"✓",label:"Payment Verified"},processing:{bg:"#fef3c7",color:"#f59e0b",icon:"⚙️",label:"Processing"},shipped:{bg:"#e0e7ff",color:"#6366f1",icon:"🚚",label:"Shipped"},delivered:{bg:"#d1fae5",color:"#10b981",icon:"✓",label:"Delivered"},cancelled:{bg:"#fee2e2",color:"#ef4444",icon:"✕",label:"Cancelled"}}[y]||{bg:"#f3f4f6",color:"#6b7280",icon:"?",label:y}}return a.jsxs("div",{className:"orders-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("div",{className:"title-icon-wrapper",children:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),a.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"})]})}),"Order Management"]}),a.jsx("p",{className:"page-subtitle",children:"Track and manage customer orders in real-time"})]}),a.jsxs("div",{className:"header-badge",children:[a.jsx("div",{className:"live-indicator"}),a.jsx("span",{children:"Auto-refresh: 5s"})]})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card-modern total",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Total Orders"}),a.jsx("div",{className:"stat-value-modern",children:s})]})]}),a.jsxs("div",{className:"stat-card-modern pending",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Pending"}),a.jsx("div",{className:"stat-value-modern",children:t.filter(y=>y.status==="pending_verification").length})]})]}),a.jsxs("div",{className:"stat-card-modern verified",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Verified"}),a.jsx("div",{className:"stat-value-modern",children:t.filter(y=>y.status==="payment_verified").length})]})]}),a.jsxs("div",{className:"stat-card-modern processing",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Processing"}),a.jsx("div",{className:"stat-value-modern",children:t.filter(y=>y.status==="processing").length})]})]}),a.jsxs("div",{className:"stat-card-modern delivered",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}),a.jsx("path",{d:"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"})]})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Delivered"}),a.jsx("div",{className:"stat-value-modern",children:t.filter(y=>y.status==="delivered").length})]})]})]}),d&&a.jsxs("div",{className:"alert-error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),a.jsx("span",{children:d})]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header-orders",children:[a.jsxs("div",{children:[a.jsxs("h2",{className:"card-title-orders",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Orders"]}),a.jsx("p",{className:"card-subtitle-orders",children:"Manage and track order status"})]}),a.jsxs("button",{className:"btn-refresh",onClick:()=>p(1),disabled:l,type:"button",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",className:l?"spinner":"",children:a.jsx("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"})}),l?"Refreshing...":"Refresh"]})]}),l&&t.length===0&&a.jsxs("div",{className:"loading-state",children:[a.jsxs("div",{className:"loading-spinner-modern",children:[a.jsx("div",{className:"spinner-ring-modern"}),a.jsx("div",{className:"spinner-ring-modern"}),a.jsx("div",{className:"spinner-ring-modern"})]}),a.jsx("p",{children:"Loading orders..."})]}),!l&&t.length===0&&a.jsxs("div",{className:"empty-state-large",children:[a.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),a.jsx("h3",{children:"No Orders Yet"}),a.jsx("p",{children:"Orders will appear here when customers make purchases"})]}),t.length>0&&a.jsx("div",{className:"orders-list",children:t.map(y=>{const k=v(y.status);return a.jsxs("div",{className:"order-card",children:[a.jsxs("div",{className:"order-header",children:[a.jsxs("div",{className:"order-id-section",children:[a.jsx("div",{className:"order-id-badge",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"})})}),a.jsxs("div",{children:[a.jsxs("h3",{className:"order-number",children:["Order #",y.id.substring(0,8)]}),a.jsx("p",{className:"order-date",children:y.created_at?new Date(y.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"})]})]}),a.jsx("div",{className:"order-amount",children:m(y.total_amount)})]}),a.jsxs("div",{className:"order-content",children:[a.jsxs("div",{className:"order-section",children:[a.jsxs("h4",{className:"section-title-order",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Customer Information"]}),a.jsxs("div",{className:"info-grid",children:[a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Name:"}),a.jsx("span",{className:"info-value",children:y.customer_name||"N/A"})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Phone:"}),a.jsx("span",{className:"info-value",children:y.customer_phone||"N/A"})]}),y.customer_email&&a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Email:"}),a.jsx("span",{className:"info-value",children:y.customer_email})]})]}),a.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"})}),"Delivery Address"]}),a.jsx("div",{className:"address-box",children:y.shipping_address?a.jsxs(a.Fragment,{children:[a.jsx("div",{children:y.shipping_address.line1}),a.jsxs("div",{children:[y.shipping_address.city,", ",y.shipping_address.postal_code]}),a.jsx("div",{children:y.shipping_address.country})]}):a.jsx("div",{className:"text-muted",children:"No address provided"})})]}),a.jsxs("div",{className:"order-section",children:[a.jsxs("h4",{className:"section-title-order",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}),a.jsx("path",{fillRule:"evenodd",d:"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"})]}),"Payment Information"]}),a.jsxs("div",{className:"info-grid",children:[a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Bank:"}),a.jsx("span",{className:"info-value",children:y.selected_bank||"N/A"})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Status:"}),a.jsx("span",{className:"info-value",children:y.payment_status||"N/A"})]}),y.transaction_reference&&a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"info-label",children:"Reference:"}),a.jsx("span",{className:"info-value",children:y.transaction_reference})]})]}),y.transfer_receipt_url&&a.jsxs(a.Fragment,{children:[a.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"})}),"Transfer Receipt"]}),a.jsxs("a",{href:y.transfer_receipt_url,target:"_blank",rel:"noopener noreferrer",className:"receipt-link",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"})}),"View Receipt"]})]}),y.additional_notes&&a.jsxs(a.Fragment,{children:[a.jsxs("h4",{className:"section-title-order",style:{marginTop:"20px"},children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"})}),"Notes"]}),a.jsx("div",{className:"notes-box",children:y.additional_notes})]})]})]}),a.jsxs("div",{className:"order-footer",children:[a.jsxs("div",{className:"status-badge-order",style:{backgroundColor:k.bg,color:k.color},children:[a.jsx("span",{className:"status-icon",children:k.icon}),k.label]}),a.jsxs("select",{onChange:j=>g(y.id,j.target.value),value:y.status,className:"status-select",children:[a.jsx("option",{value:"pending_verification",children:"⏳ Pending Verification"}),a.jsx("option",{value:"payment_verified",children:"✓ Payment Verified"}),a.jsx("option",{value:"processing",children:"⚙️ Processing"}),a.jsx("option",{value:"shipped",children:"🚚 Shipped"}),a.jsx("option",{value:"delivered",children:"✓ Delivered"}),a.jsx("option",{value:"cancelled",children:"✕ Cancelled"})]})]})]},y.id)})}),t.length>0&&a.jsxs("div",{className:"pagination-footer",children:[a.jsxs("div",{className:"pagination-info",children:["Showing ",a.jsxs("strong",{children:["page ",n]})," of ",a.jsx("strong",{children:f})," — ",a.jsx("strong",{children:s})," total orders"]}),a.jsxs("div",{className:"pagination-controls",children:[a.jsxs("button",{className:"btn-page",onClick:()=>r(y=>Math.max(1,y-1)),disabled:!b,type:"button",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"})}),"Previous"]}),a.jsx("div",{className:"page-indicator",children:a.jsx("span",{children:n})}),a.jsxs("button",{className:"btn-page",onClick:()=>r(y=>Math.min(f,y+1)),disabled:!x,type:"button",children:["Next",a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})]})]})]})]}),a.jsx("style",{children:`
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
 */function Fa(t){return t+.5|0}const Qn=(t,e,n)=>Math.max(Math.min(t,n),e);function ws(t){return Qn(Fa(t*2.55),0,255)}function ur(t){return Qn(Fa(t*255),0,255)}function zn(t){return Qn(Fa(t/2.55)/100,0,1)}function t0(t){return Qn(Fa(t*100),0,100)}const Tt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},vu=[..."0123456789ABCDEF"],Uj=t=>vu[t&15],$j=t=>vu[(t&240)>>4]+vu[t&15],uo=t=>(t&240)>>4===(t&15),Wj=t=>uo(t.r)&&uo(t.g)&&uo(t.b)&&uo(t.a);function Vj(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Tt[t[1]]*17,g:255&Tt[t[2]]*17,b:255&Tt[t[3]]*17,a:e===5?Tt[t[4]]*17:255}:(e===7||e===9)&&(n={r:Tt[t[1]]<<4|Tt[t[2]],g:Tt[t[3]]<<4|Tt[t[4]],b:Tt[t[5]]<<4|Tt[t[6]],a:e===9?Tt[t[7]]<<4|Tt[t[8]]:255})),n}const qj=(t,e)=>t<255?e(t):"";function Yj(t){var e=Wj(t)?Uj:$j;return t?"#"+e(t.r)+e(t.g)+e(t.b)+qj(t.a,e):void 0}const Zj=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Fx(t,e,n){const r=e*Math.min(n,1-n),i=(s,o=(s+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function Gj(t,e,n){const r=(i,s=(i+t/60)%6)=>n-n*e*Math.max(Math.min(s,4-s,1),0);return[r(5),r(3),r(1)]}function Kj(t,e,n){const r=Fx(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)r[i]*=1-e-n,r[i]+=e;return r}function Xj(t,e,n,r,i){return t===i?(e-n)/r+(e<n?6:0):e===i?(n-t)/r+2:(t-e)/r+4}function qh(t){const n=t.r/255,r=t.g/255,i=t.b/255,s=Math.max(n,r,i),o=Math.min(n,r,i),l=(s+o)/2;let c,d,u;return s!==o&&(u=s-o,d=l>.5?u/(2-s-o):u/(s+o),c=Xj(n,r,i,u,s),c=c*60+.5),[c|0,d||0,l]}function Yh(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(ur)}function Zh(t,e,n){return Yh(Fx,t,e,n)}function Qj(t,e,n){return Yh(Kj,t,e,n)}function Jj(t,e,n){return Yh(Gj,t,e,n)}function Bx(t){return(t%360+360)%360}function e5(t){const e=Zj.exec(t);let n=255,r;if(!e)return;e[5]!==r&&(n=e[6]?ws(+e[5]):ur(+e[5]));const i=Bx(+e[2]),s=+e[3]/100,o=+e[4]/100;return e[1]==="hwb"?r=Qj(i,s,o):e[1]==="hsv"?r=Jj(i,s,o):r=Zh(i,s,o),{r:r[0],g:r[1],b:r[2],a:n}}function t5(t,e){var n=qh(t);n[0]=Bx(n[0]+e),n=Zh(n),t.r=n[0],t.g=n[1],t.b=n[2]}function n5(t){if(!t)return;const e=qh(t),n=e[0],r=t0(e[1]),i=t0(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${i}%, ${zn(t.a)})`:`hsl(${n}, ${r}%, ${i}%)`}const n0={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},r0={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function r5(){const t={},e=Object.keys(r0),n=Object.keys(n0);let r,i,s,o,l;for(r=0;r<e.length;r++){for(o=l=e[r],i=0;i<n.length;i++)s=n[i],l=l.replace(s,n0[s]);s=parseInt(r0[o],16),t[l]=[s>>16&255,s>>8&255,s&255]}return t}let ho;function i5(t){ho||(ho=r5(),ho.transparent=[0,0,0,0]);const e=ho[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const s5=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function a5(t){const e=s5.exec(t);let n=255,r,i,s;if(e){if(e[7]!==r){const o=+e[7];n=e[8]?ws(o):Qn(o*255,0,255)}return r=+e[1],i=+e[3],s=+e[5],r=255&(e[2]?ws(r):Qn(r,0,255)),i=255&(e[4]?ws(i):Qn(i,0,255)),s=255&(e[6]?ws(s):Qn(s,0,255)),{r,g:i,b:s,a:n}}}function o5(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${zn(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Xc=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,ei=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function l5(t,e,n){const r=ei(zn(t.r)),i=ei(zn(t.g)),s=ei(zn(t.b));return{r:ur(Xc(r+n*(ei(zn(e.r))-r))),g:ur(Xc(i+n*(ei(zn(e.g))-i))),b:ur(Xc(s+n*(ei(zn(e.b))-s))),a:t.a+n*(e.a-t.a)}}function po(t,e,n){if(t){let r=qh(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,e===0?360:1)),r=Zh(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Hx(t,e){return t&&Object.assign(e||{},t)}function i0(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ur(t[3]))):(e=Hx(t,{r:0,g:0,b:0,a:1}),e.a=ur(e.a)),e}function c5(t){return t.charAt(0)==="r"?a5(t):e5(t)}class oa{constructor(e){if(e instanceof oa)return e;const n=typeof e;let r;n==="object"?r=i0(e):n==="string"&&(r=Vj(e)||i5(e)||c5(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Hx(this._rgb);return e&&(e.a=zn(e.a)),e}set rgb(e){this._rgb=i0(e)}rgbString(){return this._valid?o5(this._rgb):void 0}hexString(){return this._valid?Yj(this._rgb):void 0}hslString(){return this._valid?n5(this._rgb):void 0}mix(e,n){if(e){const r=this.rgb,i=e.rgb;let s;const o=n===s?.5:n,l=2*o-1,c=r.a-i.a,d=((l*c===-1?l:(l+c)/(1+l*c))+1)/2;s=1-d,r.r=255&d*r.r+s*i.r+.5,r.g=255&d*r.g+s*i.g+.5,r.b=255&d*r.b+s*i.b+.5,r.a=o*r.a+(1-o)*i.a,this.rgb=r}return this}interpolate(e,n){return e&&(this._rgb=l5(this._rgb,e._rgb,n)),this}clone(){return new oa(this.rgb)}alpha(e){return this._rgb.a=ur(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Fa(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return po(this._rgb,2,e),this}darken(e){return po(this._rgb,2,-e),this}saturate(e){return po(this._rgb,1,e),this}desaturate(e){return po(this._rgb,1,-e),this}rotate(e){return t5(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function jn(){}const d5=(()=>{let t=0;return()=>t++})();function ge(t){return t==null}function $e(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function he(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function Ht(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function dn(t,e){return Ht(t)?t:e}function se(t,e){return typeof t>"u"?e:t}const u5=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Ce(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function ve(t,e,n,r){let i,s,o;if($e(t))for(s=t.length,i=0;i<s;i++)e.call(n,t[i],i);else if(he(t))for(o=Object.keys(t),s=o.length,i=0;i<s;i++)e.call(n,t[o[i]],o[i])}function Sl(t,e){let n,r,i,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(i=t[n],s=e[n],i.datasetIndex!==s.datasetIndex||i.index!==s.index)return!1;return!0}function Nl(t){if($e(t))return t.map(Nl);if(he(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let i=0;for(;i<r;++i)e[n[i]]=Nl(t[n[i]]);return e}return t}function Ux(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function h5(t,e,n,r){if(!Ux(t))return;const i=e[t],s=n[t];he(i)&&he(s)?la(i,s,r):e[t]=Nl(s)}function la(t,e,n){const r=$e(e)?e:[e],i=r.length;if(!he(t))return t;n=n||{};const s=n.merger||h5;let o;for(let l=0;l<i;++l){if(o=r[l],!he(o))continue;const c=Object.keys(o);for(let d=0,u=c.length;d<u;++d)s(c[d],t,o,n)}return t}function Ds(t,e){return la(t,e,{merger:p5})}function p5(t,e,n){if(!Ux(t))return;const r=e[t],i=n[t];he(r)&&he(i)?Ds(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Nl(i))}const s0={"":t=>t,x:t=>t.x,y:t=>t.y};function f5(t){const e=t.split("."),n=[];let r="";for(const i of e)r+=i,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function m5(t){const e=f5(t);return n=>{for(const r of e){if(r==="")break;n=n&&n[r]}return n}}function Ai(t,e){return(s0[e]||(s0[e]=m5(e)))(t)}function Gh(t){return t.charAt(0).toUpperCase()+t.slice(1)}const ca=t=>typeof t<"u",fr=t=>typeof t=="function",a0=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function g5(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const je=Math.PI,et=2*je,x5=et+je,Cl=Number.POSITIVE_INFINITY,v5=je/180,Qe=je/2,wr=je/4,o0=je*2/3,$x=Math.log10,xn=Math.sign;function Fs(t,e,n){return Math.abs(t-e)<n}function l0(t){const e=Math.round(t);t=Fs(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor($x(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function b5(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(n|0)&&e.push(n),e.sort((i,s)=>i-s).pop(),e}function y5(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function da(t){return!y5(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function w5(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function j5(t,e,n){let r,i,s;for(r=0,i=t.length;r<i;r++)s=t[r][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Tr(t){return t*(je/180)}function k5(t){return t*(180/je)}function c0(t){if(!Ht(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function Wx(t,e){const n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);let s=Math.atan2(r,n);return s<-.5*je&&(s+=et),{angle:s,distance:i}}function bu(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function _5(t,e){return(t-e+x5)%et-je}function Kt(t){return(t%et+et)%et}function Kh(t,e,n,r){const i=Kt(t),s=Kt(e),o=Kt(n),l=Kt(s-i),c=Kt(o-i),d=Kt(i-s),u=Kt(i-o);return i===s||i===o||r&&s===o||l>c&&d<u}function ot(t,e,n){return Math.max(e,Math.min(n,t))}function S5(t){return ot(t,-32768,32767)}function Jn(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function Xh(t,e,n){n=n||(o=>t[o]<e);let r=t.length-1,i=0,s;for(;r-i>1;)s=i+r>>1,n(s)?i=s:r=s;return{lo:i,hi:r}}const Ar=(t,e,n,r)=>Xh(t,n,r?i=>{const s=t[i][e];return s<n||s===n&&t[i+1][e]===n}:i=>t[i][e]<n),N5=(t,e,n)=>Xh(t,n,r=>t[r][e]>=n);function C5(t,e,n){let r=0,i=t.length;for(;r<i&&t[r]<e;)r++;for(;i>r&&t[i-1]>n;)i--;return r>0||i<t.length?t.slice(r,i):t}const Vx=["push","pop","shift","splice","unshift"];function z5(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Vx.forEach(n=>{const r="_onData"+Gh(n),i=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...s){const o=i.apply(this,s);return t._chartjs.listeners.forEach(l=>{typeof l[r]=="function"&&l[r](...s)}),o}})})}function d0(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(e);i!==-1&&r.splice(i,1),!(r.length>0)&&(Vx.forEach(s=>{delete t[s]}),delete t._chartjs)}function qx(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Yx=function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame}();function Zx(t,e){let n=[],r=!1;return function(...i){n=i,r||(r=!0,Yx.call(window,()=>{r=!1,t.apply(e,n)}))}}function E5(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const Qh=t=>t==="start"?"left":t==="end"?"right":"center",it=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,R5=(t,e,n,r)=>t===(r?"left":"right")?n:t==="center"?(e+n)/2:e;function M5(t,e,n){const r=e.length;let i=0,s=r;if(t._sorted){const{iScale:o,vScale:l,_parsed:c}=t,d=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,u=o.axis,{min:h,max:p,minDefined:f,maxDefined:m}=o.getUserBounds();if(f){if(i=Math.min(Ar(c,u,h).lo,n?r:Ar(e,u,o.getPixelForValue(h)).lo),d){const g=c.slice(0,i+1).reverse().findIndex(b=>!ge(b[l.axis]));i-=Math.max(0,g)}i=ot(i,0,r-1)}if(m){let g=Math.max(Ar(c,o.axis,p,!0).hi+1,n?0:Ar(e,u,o.getPixelForValue(p),!0).hi+1);if(d){const b=c.slice(g-1).findIndex(x=>!ge(x[l.axis]));g+=Math.max(0,b)}s=ot(g,i,r)-i}else s=r-i}return{start:i,count:s}}function P5(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,i={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=i,!0;const s=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),s}const fo=t=>t===0||t===1,u0=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*et/n)),h0=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*et/n)+1,Bs={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Qe)+1,easeOutSine:t=>Math.sin(t*Qe),easeInOutSine:t=>-.5*(Math.cos(je*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>fo(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>fo(t)?t:u0(t,.075,.3),easeOutElastic:t=>fo(t)?t:h0(t,.075,.3),easeInOutElastic(t){return fo(t)?t:t<.5?.5*u0(t*2,.1125,.45):.5+.5*h0(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Bs.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Bs.easeInBounce(t*2)*.5:Bs.easeOutBounce(t*2-1)*.5+.5};function Jh(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function p0(t){return Jh(t)?t:new oa(t)}function Qc(t){return Jh(t)?t:new oa(t).saturate(.5).darken(.1).hexString()}const T5=["x","y","borderWidth","radius","tension"],A5=["color","borderColor","backgroundColor"];function O5(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:A5},numbers:{type:"number",properties:T5}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function L5(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const f0=new Map;function I5(t,e){e=e||{};const n=t+JSON.stringify(e);let r=f0.get(n);return r||(r=new Intl.NumberFormat(t,e),f0.set(n,r)),r}function Gx(t,e,n){return I5(e,n).format(t)}const D5={values(t){return $e(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const r=this.chart.options.locale;let i,s=t;if(n.length>1){const d=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(d<1e-4||d>1e15)&&(i="scientific"),s=F5(t,n)}const o=$x(Math.abs(s)),l=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(c,this.options.ticks.format),Gx(t,r,c)}};function F5(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Kx={formatters:D5};function B5(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Kx.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const qr=Object.create(null),yu=Object.create(null);function Hs(t,e){if(!e)return t;const n=e.split(".");for(let r=0,i=n.length;r<i;++r){const s=n[r];t=t[s]||(t[s]=Object.create(null))}return t}function Jc(t,e,n){return typeof e=="string"?la(Hs(t,e),n):la(Hs(t,""),e)}class H5{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,i)=>Qc(i.backgroundColor),this.hoverBorderColor=(r,i)=>Qc(i.borderColor),this.hoverColor=(r,i)=>Qc(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Jc(this,e,n)}get(e){return Hs(this,e)}describe(e,n){return Jc(yu,e,n)}override(e,n){return Jc(qr,e,n)}route(e,n,r,i){const s=Hs(this,e),o=Hs(this,r),l="_"+n;Object.defineProperties(s,{[l]:{value:s[n],writable:!0},[n]:{enumerable:!0,get(){const c=this[l],d=o[i];return he(c)?Object.assign({},d,c):se(c,d)},set(c){this[l]=c}}})}apply(e){e.forEach(n=>n(this))}}var Fe=new H5({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[O5,L5,B5]);function U5(t){return!t||ge(t.size)||ge(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function m0(t,e,n,r,i){let s=e[i];return s||(s=e[i]=t.measureText(i).width,n.push(i)),s>r&&(r=s),r}function jr(t,e,n){const r=t.currentDevicePixelRatio,i=n!==0?Math.max(n/2,.5):0;return Math.round((e-i)*r)/r+i}function g0(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function wu(t,e,n,r){Xx(t,e,n,r,null)}function Xx(t,e,n,r,i){let s,o,l,c,d,u,h,p;const f=e.pointStyle,m=e.rotation,g=e.radius;let b=(m||0)*v5;if(f&&typeof f=="object"&&(s=f.toString(),s==="[object HTMLImageElement]"||s==="[object HTMLCanvasElement]")){t.save(),t.translate(n,r),t.rotate(b),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!(isNaN(g)||g<=0)){switch(t.beginPath(),f){default:i?t.ellipse(n,r,i/2,g,0,0,et):t.arc(n,r,g,0,et),t.closePath();break;case"triangle":u=i?i/2:g,t.moveTo(n+Math.sin(b)*u,r-Math.cos(b)*g),b+=o0,t.lineTo(n+Math.sin(b)*u,r-Math.cos(b)*g),b+=o0,t.lineTo(n+Math.sin(b)*u,r-Math.cos(b)*g),t.closePath();break;case"rectRounded":d=g*.516,c=g-d,o=Math.cos(b+wr)*c,h=Math.cos(b+wr)*(i?i/2-d:c),l=Math.sin(b+wr)*c,p=Math.sin(b+wr)*(i?i/2-d:c),t.arc(n-h,r-l,d,b-je,b-Qe),t.arc(n+p,r-o,d,b-Qe,b),t.arc(n+h,r+l,d,b,b+Qe),t.arc(n-p,r+o,d,b+Qe,b+je),t.closePath();break;case"rect":if(!m){c=Math.SQRT1_2*g,u=i?i/2:c,t.rect(n-u,r-c,2*u,2*c);break}b+=wr;case"rectRot":h=Math.cos(b)*(i?i/2:g),o=Math.cos(b)*g,l=Math.sin(b)*g,p=Math.sin(b)*(i?i/2:g),t.moveTo(n-h,r-l),t.lineTo(n+p,r-o),t.lineTo(n+h,r+l),t.lineTo(n-p,r+o),t.closePath();break;case"crossRot":b+=wr;case"cross":h=Math.cos(b)*(i?i/2:g),o=Math.cos(b)*g,l=Math.sin(b)*g,p=Math.sin(b)*(i?i/2:g),t.moveTo(n-h,r-l),t.lineTo(n+h,r+l),t.moveTo(n+p,r-o),t.lineTo(n-p,r+o);break;case"star":h=Math.cos(b)*(i?i/2:g),o=Math.cos(b)*g,l=Math.sin(b)*g,p=Math.sin(b)*(i?i/2:g),t.moveTo(n-h,r-l),t.lineTo(n+h,r+l),t.moveTo(n+p,r-o),t.lineTo(n-p,r+o),b+=wr,h=Math.cos(b)*(i?i/2:g),o=Math.cos(b)*g,l=Math.sin(b)*g,p=Math.sin(b)*(i?i/2:g),t.moveTo(n-h,r-l),t.lineTo(n+h,r+l),t.moveTo(n+p,r-o),t.lineTo(n-p,r+o);break;case"line":o=i?i/2:Math.cos(b)*g,l=Math.sin(b)*g,t.moveTo(n-o,r-l),t.lineTo(n+o,r+l);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(b)*(i?i/2:g),r+Math.sin(b)*g);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function ua(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function ep(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function tp(t){t.restore()}function $5(t,e,n,r,i){if(!e)return t.lineTo(n.x,n.y);if(i==="middle"){const s=(e.x+n.x)/2;t.lineTo(s,e.y),t.lineTo(s,n.y)}else i==="after"!=!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function W5(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function V5(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),ge(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function q5(t,e,n,r,i){if(i.strikethrough||i.underline){const s=t.measureText(r),o=e-s.actualBoundingBoxLeft,l=e+s.actualBoundingBoxRight,c=n-s.actualBoundingBoxAscent,d=n+s.actualBoundingBoxDescent,u=i.strikethrough?(c+d)/2:d;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=i.decorationWidth||2,t.moveTo(o,u),t.lineTo(l,u),t.stroke()}}function Y5(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function ha(t,e,n,r,i,s={}){const o=$e(e)?e:[e],l=s.strokeWidth>0&&s.strokeColor!=="";let c,d;for(t.save(),t.font=i.string,V5(t,s),c=0;c<o.length;++c)d=o[c],s.backdrop&&Y5(t,s.backdrop),l&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),ge(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(d,n,r,s.maxWidth)),t.fillText(d,n,r,s.maxWidth),q5(t,n,r,d,s),r+=Number(i.lineHeight);t.restore()}function zl(t,e){const{x:n,y:r,w:i,h:s,radius:o}=e;t.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*je,je,!0),t.lineTo(n,r+s-o.bottomLeft),t.arc(n+o.bottomLeft,r+s-o.bottomLeft,o.bottomLeft,je,Qe,!0),t.lineTo(n+i-o.bottomRight,r+s),t.arc(n+i-o.bottomRight,r+s-o.bottomRight,o.bottomRight,Qe,0,!0),t.lineTo(n+i,r+o.topRight),t.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-Qe,!0),t.lineTo(n+o.topLeft,r)}const Z5=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,G5=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function K5(t,e){const n=(""+t).match(Z5);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const X5=t=>+t||0;function np(t,e){const n={},r=he(e),i=r?Object.keys(e):e,s=he(t)?r?o=>se(t[o],t[e[o]]):o=>t[o]:()=>t;for(const o of i)n[o]=X5(s(o));return n}function Qx(t){return np(t,{top:"y",right:"x",bottom:"y",left:"x"})}function ji(t){return np(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ut(t){const e=Qx(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function lt(t,e){t=t||{},e=e||Fe.font;let n=se(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let r=se(t.style,e.style);r&&!(""+r).match(G5)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const i={family:se(t.family,e.family),lineHeight:K5(se(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:se(t.weight,e.weight),string:""};return i.string=U5(i),i}function mo(t,e,n,r){let i,s,o;for(i=0,s=t.length;i<s;++i)if(o=t[i],o!==void 0&&o!==void 0)return o}function Q5(t,e,n){const{min:r,max:i}=t,s=u5(e,(i-r)/2),o=(l,c)=>n&&l===0?0:l+c;return{min:o(r,-Math.abs(s)),max:o(i,s)}}function Xr(t,e){return Object.assign(Object.create(t),e)}function rp(t,e=[""],n,r,i=()=>t[0]){const s=n||t;typeof r>"u"&&(r=nv("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:r,_getTarget:i,override:l=>rp([l,...t],e,s,r)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete l._keys,delete t[0][c],!0},get(l,c){return ev(l,c,()=>ak(c,e,t,l))},getOwnPropertyDescriptor(l,c){return Reflect.getOwnPropertyDescriptor(l._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(l,c){return v0(l).includes(c)},ownKeys(l){return v0(l)},set(l,c,d){const u=l._storage||(l._storage=i());return l[c]=u[c]=d,delete l._keys,!0}})}function Oi(t,e,n,r){const i={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Jx(t,r),setContext:s=>Oi(t,s,n,r),override:s=>Oi(t.override(s),e,n,r)};return new Proxy(i,{deleteProperty(s,o){return delete s[o],delete t[o],!0},get(s,o,l){return ev(s,o,()=>ek(s,o,l))},getOwnPropertyDescriptor(s,o){return s._descriptors.allKeys?Reflect.has(t,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,o)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(s,o){return Reflect.has(t,o)},ownKeys(){return Reflect.ownKeys(t)},set(s,o,l){return t[o]=l,delete s[o],!0}})}function Jx(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:i=e.allKeys}=t;return{allKeys:i,scriptable:n,indexable:r,isScriptable:fr(n)?n:()=>n,isIndexable:fr(r)?r:()=>r}}const J5=(t,e)=>t?t+Gh(e):e,ip=(t,e)=>he(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function ev(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=n();return t[e]=r,r}function ek(t,e,n){const{_proxy:r,_context:i,_subProxy:s,_descriptors:o}=t;let l=r[e];return fr(l)&&o.isScriptable(e)&&(l=tk(e,l,t,n)),$e(l)&&l.length&&(l=nk(e,l,t,o.isIndexable)),ip(e,l)&&(l=Oi(l,i,s&&s[e],o)),l}function tk(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_stack:l}=n;if(l.has(t))throw new Error("Recursion detected: "+Array.from(l).join("->")+"->"+t);l.add(t);let c=e(s,o||r);return l.delete(t),ip(t,c)&&(c=sp(i._scopes,i,t,c)),c}function nk(t,e,n,r){const{_proxy:i,_context:s,_subProxy:o,_descriptors:l}=n;if(typeof s.index<"u"&&r(t))return e[s.index%e.length];if(he(e[0])){const c=e,d=i._scopes.filter(u=>u!==c);e=[];for(const u of c){const h=sp(d,i,t,u);e.push(Oi(h,s,o&&o[t],l))}}return e}function tv(t,e,n){return fr(t)?t(e,n):t}const rk=(t,e)=>t===!0?e:typeof t=="string"?Ai(e,t):void 0;function ik(t,e,n,r,i){for(const s of e){const o=rk(n,s);if(o){t.add(o);const l=tv(o._fallback,n,i);if(typeof l<"u"&&l!==n&&l!==r)return l}else if(o===!1&&typeof r<"u"&&n!==r)return null}return!1}function sp(t,e,n,r){const i=e._rootScopes,s=tv(e._fallback,n,r),o=[...t,...i],l=new Set;l.add(r);let c=x0(l,o,n,s||n,r);return c===null||typeof s<"u"&&s!==n&&(c=x0(l,o,s,c,r),c===null)?!1:rp(Array.from(l),[""],i,s,()=>sk(e,n,r))}function x0(t,e,n,r,i){for(;n;)n=ik(t,e,n,r,i);return n}function sk(t,e,n){const r=t._getTarget();e in r||(r[e]={});const i=r[e];return $e(i)&&he(n)?n:i||{}}function ak(t,e,n,r){let i;for(const s of e)if(i=nv(J5(s,t),n),typeof i<"u")return ip(t,i)?sp(n,r,t,i):i}function nv(t,e){for(const n of e){if(!n)continue;const r=n[t];if(typeof r<"u")return r}}function v0(t){let e=t._keys;return e||(e=t._keys=ok(t._scopes)),e}function ok(t){const e=new Set;for(const n of t)for(const r of Object.keys(n).filter(i=>!i.startsWith("_")))e.add(r);return Array.from(e)}const lk=Number.EPSILON||1e-14,Li=(t,e)=>e<t.length&&!t[e].skip&&t[e],rv=t=>t==="x"?"y":"x";function ck(t,e,n,r){const i=t.skip?e:t,s=e,o=n.skip?e:n,l=bu(s,i),c=bu(o,s);let d=l/(l+c),u=c/(l+c);d=isNaN(d)?0:d,u=isNaN(u)?0:u;const h=r*d,p=r*u;return{previous:{x:s.x-h*(o.x-i.x),y:s.y-h*(o.y-i.y)},next:{x:s.x+p*(o.x-i.x),y:s.y+p*(o.y-i.y)}}}function dk(t,e,n){const r=t.length;let i,s,o,l,c,d=Li(t,0);for(let u=0;u<r-1;++u)if(c=d,d=Li(t,u+1),!(!c||!d)){if(Fs(e[u],0,lk)){n[u]=n[u+1]=0;continue}i=n[u]/e[u],s=n[u+1]/e[u],l=Math.pow(i,2)+Math.pow(s,2),!(l<=9)&&(o=3/Math.sqrt(l),n[u]=i*o*e[u],n[u+1]=s*o*e[u])}}function uk(t,e,n="x"){const r=rv(n),i=t.length;let s,o,l,c=Li(t,0);for(let d=0;d<i;++d){if(o=l,l=c,c=Li(t,d+1),!l)continue;const u=l[n],h=l[r];o&&(s=(u-o[n])/3,l[`cp1${n}`]=u-s,l[`cp1${r}`]=h-s*e[d]),c&&(s=(c[n]-u)/3,l[`cp2${n}`]=u+s,l[`cp2${r}`]=h+s*e[d])}}function hk(t,e="x"){const n=rv(e),r=t.length,i=Array(r).fill(0),s=Array(r);let o,l,c,d=Li(t,0);for(o=0;o<r;++o)if(l=c,c=d,d=Li(t,o+1),!!c){if(d){const u=d[e]-c[e];i[o]=u!==0?(d[n]-c[n])/u:0}s[o]=l?d?xn(i[o-1])!==xn(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}dk(t,i,s),uk(t,s,e)}function go(t,e,n){return Math.max(Math.min(t,n),e)}function pk(t,e){let n,r,i,s,o,l=ua(t[0],e);for(n=0,r=t.length;n<r;++n)o=s,s=l,l=n<r-1&&ua(t[n+1],e),s&&(i=t[n],o&&(i.cp1x=go(i.cp1x,e.left,e.right),i.cp1y=go(i.cp1y,e.top,e.bottom)),l&&(i.cp2x=go(i.cp2x,e.left,e.right),i.cp2y=go(i.cp2y,e.top,e.bottom)))}function fk(t,e,n,r,i){let s,o,l,c;if(e.spanGaps&&(t=t.filter(d=>!d.skip)),e.cubicInterpolationMode==="monotone")hk(t,i);else{let d=r?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)l=t[s],c=ck(d,l,t[Math.min(s+1,o-(r?0:1))%o],e.tension),l.cp1x=c.previous.x,l.cp1y=c.previous.y,l.cp2x=c.next.x,l.cp2y=c.next.y,d=l}e.capBezierPoints&&pk(t,n)}function ap(){return typeof window<"u"&&typeof document<"u"}function op(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function El(t,e,n){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[n])):r=t,r}const hc=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function mk(t,e){return hc(t).getPropertyValue(e)}const gk=["top","right","bottom","left"];function Dr(t,e,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const s=gk[i];r[s]=parseFloat(t[e+"-"+s+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const xk=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function vk(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:i,offsetY:s}=r;let o=!1,l,c;if(xk(i,s,t.target))l=i,c=s;else{const d=e.getBoundingClientRect();l=r.clientX-d.left,c=r.clientY-d.top,o=!0}return{x:l,y:c,box:o}}function Nr(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,i=hc(n),s=i.boxSizing==="border-box",o=Dr(i,"padding"),l=Dr(i,"border","width"),{x:c,y:d,box:u}=vk(t,n),h=o.left+(u&&l.left),p=o.top+(u&&l.top);let{width:f,height:m}=e;return s&&(f-=o.width+l.width,m-=o.height+l.height),{x:Math.round((c-h)/f*n.width/r),y:Math.round((d-p)/m*n.height/r)}}function bk(t,e,n){let r,i;if(e===void 0||n===void 0){const s=t&&op(t);if(!s)e=t.clientWidth,n=t.clientHeight;else{const o=s.getBoundingClientRect(),l=hc(s),c=Dr(l,"border","width"),d=Dr(l,"padding");e=o.width-d.width-c.width,n=o.height-d.height-c.height,r=El(l.maxWidth,s,"clientWidth"),i=El(l.maxHeight,s,"clientHeight")}}return{width:e,height:n,maxWidth:r||Cl,maxHeight:i||Cl}}const er=t=>Math.round(t*10)/10;function yk(t,e,n,r){const i=hc(t),s=Dr(i,"margin"),o=El(i.maxWidth,t,"clientWidth")||Cl,l=El(i.maxHeight,t,"clientHeight")||Cl,c=bk(t,e,n);let{width:d,height:u}=c;if(i.boxSizing==="content-box"){const p=Dr(i,"border","width"),f=Dr(i,"padding");d-=f.width+p.width,u-=f.height+p.height}return d=Math.max(0,d-s.width),u=Math.max(0,r?d/r:u-s.height),d=er(Math.min(d,o,c.maxWidth)),u=er(Math.min(u,l,c.maxHeight)),d&&!u&&(u=er(d/2)),(e!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,d=er(Math.floor(u*r))),{width:d,height:u}}function b0(t,e,n){const r=e||1,i=er(t.height*r),s=er(t.width*r);t.height=er(t.height),t.width=er(t.width);const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${t.height}px`,o.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||o.height!==i||o.width!==s?(t.currentDevicePixelRatio=r,o.height=i,o.width=s,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const wk=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};ap()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t}();function y0(t,e){const n=mk(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Cr(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function jk(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:r==="middle"?n<.5?t.y:e.y:r==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function kk(t,e,n,r){const i={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=Cr(t,i,n),l=Cr(i,s,n),c=Cr(s,e,n),d=Cr(o,l,n),u=Cr(l,c,n);return Cr(d,u,n)}const _k=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},Sk=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function ki(t,e,n){return t?_k(e,n):Sk()}function iv(t,e){let n,r;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function sv(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function av(t){return t==="angle"?{between:Kh,compare:_5,normalize:Kt}:{between:Jn,compare:(e,n)=>e-n,normalize:e=>e}}function w0({start:t,end:e,count:n,loop:r,style:i}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:i}}function Nk(t,e,n){const{property:r,start:i,end:s}=n,{between:o,normalize:l}=av(r),c=e.length;let{start:d,end:u,loop:h}=t,p,f;if(h){for(d+=c,u+=c,p=0,f=c;p<f&&o(l(e[d%c][r]),i,s);++p)d--,u--;d%=c,u%=c}return u<d&&(u+=c),{start:d,end:u,loop:h,style:t.style}}function Ck(t,e,n){if(!n)return[t];const{property:r,start:i,end:s}=n,o=e.length,{compare:l,between:c,normalize:d}=av(r),{start:u,end:h,loop:p,style:f}=Nk(t,e,n),m=[];let g=!1,b=null,x,v,y;const k=()=>c(i,y,x)&&l(i,y)!==0,j=()=>l(s,x)===0||c(s,y,x),S=()=>g||k(),_=()=>!g||j();for(let N=u,A=u;N<=h;++N)v=e[N%o],!v.skip&&(x=d(v[r]),x!==y&&(g=c(x,i,s),b===null&&S()&&(b=l(x,i)===0?N:A),b!==null&&_()&&(m.push(w0({start:b,end:N,loop:p,count:o,style:f})),b=null),A=N,y=x));return b!==null&&m.push(w0({start:b,end:h,loop:p,count:o,style:f})),m}function zk(t,e){const n=[],r=t.segments;for(let i=0;i<r.length;i++){const s=Ck(r[i],t.points,e);s.length&&n.push(...s)}return n}function Ek(t,e,n,r){let i=0,s=e-1;if(n&&!r)for(;i<e&&!t[i].skip;)i++;for(;i<e&&t[i].skip;)i++;for(i%=e,n&&(s+=i);s>i&&t[s%e].skip;)s--;return s%=e,{start:i,end:s}}function Rk(t,e,n,r){const i=t.length,s=[];let o=e,l=t[e],c;for(c=e+1;c<=n;++c){const d=t[c%i];d.skip||d.stop?l.skip||(r=!1,s.push({start:e%i,end:(c-1)%i,loop:r}),e=o=d.stop?c:null):(o=c,l.skip&&(e=c)),l=d}return o!==null&&s.push({start:e%i,end:o%i,loop:r}),s}function Mk(t,e){const n=t.points,r=t.options.spanGaps,i=n.length;if(!i)return[];const s=!!t._loop,{start:o,end:l}=Ek(n,i,s,r);if(r===!0)return j0(t,[{start:o,end:l,loop:s}],n,e);const c=l<o?l+i:l,d=!!t._fullLoop&&o===0&&l===i-1;return j0(t,Rk(n,o,c,d),n,e)}function j0(t,e,n,r){return!r||!r.setContext||!n?e:Pk(t,e,n,r)}function Pk(t,e,n,r){const i=t._chart.getContext(),s=k0(t.options),{_datasetIndex:o,options:{spanGaps:l}}=t,c=n.length,d=[];let u=s,h=e[0].start,p=h;function f(m,g,b,x){const v=l?-1:1;if(m!==g){for(m+=c;n[m%c].skip;)m-=v;for(;n[g%c].skip;)g+=v;m%c!==g%c&&(d.push({start:m%c,end:g%c,loop:b,style:x}),u=x,h=g%c)}}for(const m of e){h=l?h:m.start;let g=n[h%c],b;for(p=h+1;p<=m.end;p++){const x=n[p%c];b=k0(r.setContext(Xr(i,{type:"segment",p0:g,p1:x,p0DataIndex:(p-1)%c,p1DataIndex:p%c,datasetIndex:o}))),Tk(b,u)&&f(h,p-1,m.loop,u),g=x,u=b}h<p-1&&f(h,p-1,m.loop,u)}return d}function k0(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Tk(t,e){if(!e)return!1;const n=[],r=function(i,s){return Jh(s)?(n.includes(s)||n.push(s),n.indexOf(s)):s};return JSON.stringify(t,r)!==JSON.stringify(e,r)}function xo(t,e,n){return t.options.clip?t[n]:e[n]}function Ak(t,e){const{xScale:n,yScale:r}=t;return n&&r?{left:xo(n,e,"left"),right:xo(n,e,"right"),top:xo(r,e,"top"),bottom:xo(r,e,"bottom")}:e}function Ok(t,e){const n=e._clip;if(n.disabled)return!1;const r=Ak(e,t.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?t.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?t.height:r.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Lk{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,r,i){const s=n.listeners[i],o=n.duration;s.forEach(l=>l({chart:e,initial:n.initial,numSteps:o,currentStep:Math.min(r-n.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Yx.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((r,i)=>{if(!r.running||!r.items.length)return;const s=r.items;let o=s.length-1,l=!1,c;for(;o>=0;--o)c=s[o],c._active?(c._total>r.duration&&(r.duration=c._total),c.tick(e),l=!0):(s[o]=s[s.length-1],s.pop());l&&(i.draw(),this._notify(i,r,e,"progress")),s.length||(r.running=!1,this._notify(i,r,e,"complete"),r.initial=!1),n+=s.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let r=n.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,r)),r}listen(e,n,r){this._getAnims(e).listeners[n].push(r)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,i)=>Math.max(r,i._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const r=n.items;let i=r.length-1;for(;i>=0;--i)r[i].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var kn=new Lk;const _0="transparent",Ik={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const r=p0(t||_0),i=r.valid&&p0(e||_0);return i&&i.valid?i.mix(r,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Dk{constructor(e,n,r,i){const s=n[r];i=mo([e.to,i,s,e.from]);const o=mo([e.from,s,i]);this._active=!0,this._fn=e.fn||Ik[e.type||typeof o],this._easing=Bs[e.easing]||Bs.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=r,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(e,n,r){if(this._active){this._notify(!1);const i=this._target[this._prop],s=r-this._start,o=this._duration-s;this._start=r,this._duration=Math.floor(Math.max(o,e.duration)),this._total+=s,this._loop=!!e.loop,this._to=mo([e.to,n,i,e.from]),this._from=mo([e.from,i,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,r=this._duration,i=this._prop,s=this._from,o=this._loop,l=this._to;let c;if(this._active=s!==l&&(o||n<r),!this._active){this._target[i]=l,this._notify(!0);return}if(n<0){this._target[i]=s;return}c=n/r%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[i]=this._fn(s,l,c)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,r)=>{e.push({res:n,rej:r})})}_notify(e){const n=e?"res":"rej",r=this._promises||[];for(let i=0;i<r.length;i++)r[i][n]()}}class ov{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!he(e))return;const n=Object.keys(Fe.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(i=>{const s=e[i];if(!he(s))return;const o={};for(const l of n)o[l]=s[l];($e(s.properties)&&s.properties||[i]).forEach(l=>{(l===i||!r.has(l))&&r.set(l,o)})})}_animateOptions(e,n){const r=n.options,i=Bk(e,r);if(!i)return[];const s=this._createAnimations(i,r);return r.$shared&&Fk(e.options.$animations,r).then(()=>{e.options=r},()=>{}),s}_createAnimations(e,n){const r=this._properties,i=[],s=e.$animations||(e.$animations={}),o=Object.keys(n),l=Date.now();let c;for(c=o.length-1;c>=0;--c){const d=o[c];if(d.charAt(0)==="$")continue;if(d==="options"){i.push(...this._animateOptions(e,n));continue}const u=n[d];let h=s[d];const p=r.get(d);if(h)if(p&&h.active()){h.update(p,u,l);continue}else h.cancel();if(!p||!p.duration){e[d]=u;continue}s[d]=h=new Dk(p,e,d,u),i.push(h)}return i}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const r=this._createAnimations(e,n);if(r.length)return kn.add(this._chart,r),!0}}function Fk(t,e){const n=[],r=Object.keys(e);for(let i=0;i<r.length;i++){const s=t[r[i]];s&&s.active()&&n.push(s.wait())}return Promise.all(n)}function Bk(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function S0(t,e){const n=t&&t.options||{},r=n.reverse,i=n.min===void 0?e:0,s=n.max===void 0?e:0;return{start:r?s:i,end:r?i:s}}function Hk(t,e,n){if(n===!1)return!1;const r=S0(t,n),i=S0(e,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function Uk(t){let e,n,r,i;return he(t)?(e=t.top,n=t.right,r=t.bottom,i=t.left):e=n=r=i=t,{top:e,right:n,bottom:r,left:i,disabled:t===!1}}function lv(t,e){const n=[],r=t._getSortedDatasetMetas(e);let i,s;for(i=0,s=r.length;i<s;++i)n.push(r[i].index);return n}function N0(t,e,n,r={}){const i=t.keys,s=r.mode==="single";let o,l,c,d;if(e===null)return;let u=!1;for(o=0,l=i.length;o<l;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}d=t.values[c],Ht(d)&&(s||e===0||xn(e)===xn(d))&&(e+=d)}return!u&&!r.all?0:e}function $k(t,e){const{iScale:n,vScale:r}=e,i=n.axis==="x"?"x":"y",s=r.axis==="x"?"x":"y",o=Object.keys(t),l=new Array(o.length);let c,d,u;for(c=0,d=o.length;c<d;++c)u=o[c],l[c]={[i]:u,[s]:t[u]};return l}function ed(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Wk(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function Vk(t){const{min:e,max:n,minDefined:r,maxDefined:i}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}function qk(t,e,n){const r=t[e]||(t[e]={});return r[n]||(r[n]={})}function C0(t,e,n,r){for(const i of e.getMatchingVisibleMetas(r).reverse()){const s=t[i.index];if(n&&s>0||!n&&s<0)return i.index}return null}function z0(t,e){const{chart:n,_cachedMeta:r}=t,i=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:l}=r,c=s.axis,d=o.axis,u=Wk(s,o,r),h=e.length;let p;for(let f=0;f<h;++f){const m=e[f],{[c]:g,[d]:b}=m,x=m._stacks||(m._stacks={});p=x[d]=qk(i,u,g),p[l]=b,p._top=C0(p,o,!0,r.type),p._bottom=C0(p,o,!1,r.type);const v=p._visualValues||(p._visualValues={});v[l]=b}}function td(t,e){const n=t.scales;return Object.keys(n).filter(r=>n[r].axis===e).shift()}function Yk(t,e){return Xr(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Zk(t,e,n){return Xr(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function cs(t,e){const n=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const i of e){const s=i._stacks;if(!s||s[r]===void 0||s[r][n]===void 0)return;delete s[r][n],s[r]._visualValues!==void 0&&s[r]._visualValues[n]!==void 0&&delete s[r]._visualValues[n]}}}const nd=t=>t==="reset"||t==="none",E0=(t,e)=>e?t:Object.assign({},t),Gk=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:lv(n,!0),values:null};class _i{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=ed(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&cs(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,r=this.getDataset(),i=(h,p,f,m)=>h==="x"?p:h==="r"?m:f,s=n.xAxisID=se(r.xAxisID,td(e,"x")),o=n.yAxisID=se(r.yAxisID,td(e,"y")),l=n.rAxisID=se(r.rAxisID,td(e,"r")),c=n.indexAxis,d=n.iAxisID=i(c,s,o,l),u=n.vAxisID=i(c,o,s,l);n.xScale=this.getScaleForId(s),n.yScale=this.getScaleForId(o),n.rScale=this.getScaleForId(l),n.iScale=this.getScaleForId(d),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&d0(this._data,this),e._stacked&&cs(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),r=this._data;if(he(n)){const i=this._cachedMeta;this._data=$k(n,i)}else if(r!==n){if(r){d0(r,this);const i=this._cachedMeta;cs(i),i._parsed=[]}n&&Object.isExtensible(n)&&z5(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,r=this.getDataset();let i=!1;this._dataCheck();const s=n._stacked;n._stacked=ed(n.vScale,n),n.stack!==r.stack&&(i=!0,cs(n),n.stack=r.stack),this._resyncElements(e),(i||s!==n._stacked)&&(z0(this,n._parsed),n._stacked=ed(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:r,_data:i}=this,{iScale:s,_stacked:o}=r,l=s.axis;let c=e===0&&n===i.length?!0:r._sorted,d=e>0&&r._parsed[e-1],u,h,p;if(this._parsing===!1)r._parsed=i,r._sorted=!0,p=i;else{$e(i[e])?p=this.parseArrayData(r,i,e,n):he(i[e])?p=this.parseObjectData(r,i,e,n):p=this.parsePrimitiveData(r,i,e,n);const f=()=>h[l]===null||d&&h[l]<d[l];for(u=0;u<n;++u)r._parsed[u+e]=h=p[u],c&&(f()&&(c=!1),d=h);r._sorted=c}o&&z0(this,p)}parsePrimitiveData(e,n,r,i){const{iScale:s,vScale:o}=e,l=s.axis,c=o.axis,d=s.getLabels(),u=s===o,h=new Array(i);let p,f,m;for(p=0,f=i;p<f;++p)m=p+r,h[p]={[l]:u||s.parse(d[m],m),[c]:o.parse(n[m],m)};return h}parseArrayData(e,n,r,i){const{xScale:s,yScale:o}=e,l=new Array(i);let c,d,u,h;for(c=0,d=i;c<d;++c)u=c+r,h=n[u],l[c]={x:s.parse(h[0],u),y:o.parse(h[1],u)};return l}parseObjectData(e,n,r,i){const{xScale:s,yScale:o}=e,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=new Array(i);let u,h,p,f;for(u=0,h=i;u<h;++u)p=u+r,f=n[p],d[u]={x:s.parse(Ai(f,l),p),y:o.parse(Ai(f,c),p)};return d}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,r){const i=this.chart,s=this._cachedMeta,o=n[e.axis],l={keys:lv(i,!0),values:n._stacks[e.axis]._visualValues};return N0(l,o,s.index,{mode:r})}updateRangeFromParsed(e,n,r,i){const s=r[n.axis];let o=s===null?NaN:s;const l=i&&r._stacks[n.axis];i&&l&&(i.values=l,o=N0(i,s,this._cachedMeta.index)),e.min=Math.min(e.min,o),e.max=Math.max(e.max,o)}getMinMax(e,n){const r=this._cachedMeta,i=r._parsed,s=r._sorted&&e===r.iScale,o=i.length,l=this._getOtherScale(e),c=Gk(n,r,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=Vk(l);let p,f;function m(){f=i[p];const g=f[l.axis];return!Ht(f[e.axis])||u>g||h<g}for(p=0;p<o&&!(!m()&&(this.updateRangeFromParsed(d,e,f,c),s));++p);if(s){for(p=o-1;p>=0;--p)if(!m()){this.updateRangeFromParsed(d,e,f,c);break}}return d}getAllParsedValues(e){const n=this._cachedMeta._parsed,r=[];let i,s,o;for(i=0,s=n.length;i<s;++i)o=n[i][e.axis],Ht(o)&&r.push(o);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,r=n.iScale,i=n.vScale,s=this.getParsed(e);return{label:r?""+r.getLabelForValue(s[r.axis]):"",value:i?""+i.getLabelForValue(s[i.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Uk(se(this.options.clip,Hk(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,r=this._cachedMeta,i=r.data||[],s=n.chartArea,o=[],l=this._drawStart||0,c=this._drawCount||i.length-l,d=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(e,s,l,c),u=l;u<l+c;++u){const h=i[u];h.hidden||(h.active&&d?o.push(h):h.draw(e,s))}for(u=0;u<o.length;++u)o[u].draw(e,s)}getStyle(e,n){const r=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,n,r){const i=this.getDataset();let s;if(e>=0&&e<this._cachedMeta.data.length){const o=this._cachedMeta.data[e];s=o.$context||(o.$context=Zk(this.getContext(),e,o)),s.parsed=this.getParsed(e),s.raw=i.data[e],s.index=s.dataIndex=e}else s=this.$context||(this.$context=Yk(this.chart.getContext(),this.index)),s.dataset=i,s.index=s.datasetIndex=this.index;return s.active=!!n,s.mode=r,s}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",r){const i=n==="active",s=this._cachedDataOpts,o=e+"-"+n,l=s[o],c=this.enableOptionSharing&&ca(r);if(l)return E0(l,c);const d=this.chart.config,u=d.datasetElementScopeKeys(this._type,e),h=i?[`${e}Hover`,"hover",e,""]:[e,""],p=d.getOptionScopes(this.getDataset(),u),f=Object.keys(Fe.elements[e]),m=()=>this.getContext(r,i,n),g=d.resolveNamedOptions(p,f,m,h);return g.$shared&&(g.$shared=c,s[o]=Object.freeze(E0(g,c))),g}_resolveAnimations(e,n,r){const i=this.chart,s=this._cachedDataOpts,o=`animation-${n}`,l=s[o];if(l)return l;let c;if(i.options.animation!==!1){const u=this.chart.config,h=u.datasetAnimationScopeKeys(this._type,n),p=u.getOptionScopes(this.getDataset(),h);c=u.createResolver(p,this.getContext(e,r,n))}const d=new ov(i,c&&c.animations);return c&&c._cacheable&&(s[o]=Object.freeze(d)),d}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||nd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const r=this.resolveDataElementOptions(e,n),i=this._sharedOptions,s=this.getSharedOptions(r),o=this.includeOptions(n,s)||s!==i;return this.updateSharedOptions(s,n,r),{sharedOptions:s,includeOptions:o}}updateElement(e,n,r,i){nd(i)?Object.assign(e,r):this._resolveAnimations(n,i).update(e,r)}updateSharedOptions(e,n,r){e&&!nd(n)&&this._resolveAnimations(void 0,n).update(e,r)}_setStyle(e,n,r,i){e.active=i;const s=this.getStyle(n,i);this._resolveAnimations(n,r,i).update(e,{options:!i&&this.getSharedOptions(s)||s})}removeHoverStyle(e,n,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,n,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,r=this._cachedMeta.data;for(const[l,c,d]of this._syncList)this[l](c,d);this._syncList=[];const i=r.length,s=n.length,o=Math.min(s,i);o&&this.parse(0,o),s>i?this._insertElements(i,s-i,e):s<i&&this._removeElements(s,i-s)}_insertElements(e,n,r=!0){const i=this._cachedMeta,s=i.data,o=e+n;let l;const c=d=>{for(d.length+=n,l=d.length-1;l>=o;l--)d[l]=d[l-n]};for(c(s),l=e;l<o;++l)s[l]=new this.dataElementType;this._parsing&&c(i._parsed),this.parse(e,n),r&&this.updateElements(s,e,n,"reset")}updateElements(e,n,r,i){}_removeElements(e,n){const r=this._cachedMeta;if(this._parsing){const i=r._parsed.splice(e,n);r._stacked&&cs(r,i)}r.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,r,i]=e;this[n](r,i)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}X(_i,"defaults",{}),X(_i,"datasetElementType",null),X(_i,"dataElementType",null);function Kk(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let r=[];for(let i=0,s=n.length;i<s;i++)r=r.concat(n[i].controller.getAllParsedValues(t));t._cache.$bar=qx(r.sort((i,s)=>i-s))}return t._cache.$bar}function Xk(t){const e=t.iScale,n=Kk(e,t.type);let r=e._length,i,s,o,l;const c=()=>{o===32767||o===-32768||(ca(l)&&(r=Math.min(r,Math.abs(o-l)||r)),l=o)};for(i=0,s=n.length;i<s;++i)o=e.getPixelForValue(n[i]),c();for(l=void 0,i=0,s=e.ticks.length;i<s;++i)o=e.getPixelForTick(i),c();return r}function Qk(t,e,n,r){const i=n.barThickness;let s,o;return ge(i)?(s=e.min*n.categoryPercentage,o=n.barPercentage):(s=i*r,o=1),{chunk:s/r,ratio:o,start:e.pixels[t]-s/2}}function Jk(t,e,n,r){const i=e.pixels,s=i[t];let o=t>0?i[t-1]:null,l=t<i.length-1?i[t+1]:null;const c=n.categoryPercentage;o===null&&(o=s-(l===null?e.end-e.start:l-s)),l===null&&(l=s+s-o);const d=s-(s-Math.min(o,l))/2*c;return{chunk:Math.abs(l-o)/2*c/r,ratio:n.barPercentage,start:d}}function e_(t,e,n,r){const i=n.parse(t[0],r),s=n.parse(t[1],r),o=Math.min(i,s),l=Math.max(i,s);let c=o,d=l;Math.abs(o)>Math.abs(l)&&(c=l,d=o),e[n.axis]=d,e._custom={barStart:c,barEnd:d,start:i,end:s,min:o,max:l}}function cv(t,e,n,r){return $e(t)?e_(t,e,n,r):e[n.axis]=n.parse(t,r),e}function R0(t,e,n,r){const i=t.iScale,s=t.vScale,o=i.getLabels(),l=i===s,c=[];let d,u,h,p;for(d=n,u=n+r;d<u;++d)p=e[d],h={},h[i.axis]=l||i.parse(o[d],d),c.push(cv(p,h,s,d));return c}function rd(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function t_(t,e,n){return t!==0?xn(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function n_(t){let e,n,r,i,s;return t.horizontal?(e=t.base>t.x,n="left",r="right"):(e=t.base<t.y,n="bottom",r="top"),e?(i="end",s="start"):(i="start",s="end"),{start:n,end:r,reverse:e,top:i,bottom:s}}function r_(t,e,n,r){let i=e.borderSkipped;const s={};if(!i){t.borderSkipped=s;return}if(i===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:l,reverse:c,top:d,bottom:u}=n_(t);i==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===r?i=d:(n._bottom||0)===r?i=u:(s[M0(u,o,l,c)]=!0,i=d)),s[M0(i,o,l,c)]=!0,t.borderSkipped=s}function M0(t,e,n,r){return r?(t=i_(t,e,n),t=P0(t,n,e)):t=P0(t,e,n),t}function i_(t,e,n){return t===e?n:t===n?e:t}function P0(t,e,n){return t==="start"?e:t==="end"?n:t}function s_(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class Bo extends _i{parsePrimitiveData(e,n,r,i){return R0(e,n,r,i)}parseArrayData(e,n,r,i){return R0(e,n,r,i)}parseObjectData(e,n,r,i){const{iScale:s,vScale:o}=e,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=s.axis==="x"?l:c,u=o.axis==="x"?l:c,h=[];let p,f,m,g;for(p=r,f=r+i;p<f;++p)g=n[p],m={},m[s.axis]=s.parse(Ai(g,d),p),h.push(cv(Ai(g,u),m,o,p));return h}updateRangeFromParsed(e,n,r,i){super.updateRangeFromParsed(e,n,r,i);const s=r._custom;s&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,s.min),e.max=Math.max(e.max,s.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:r,vScale:i}=n,s=this.getParsed(e),o=s._custom,l=rd(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(s[i.axis]);return{label:""+r.getLabelForValue(s[r.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,r,i){const s=i==="reset",{index:o,_cachedMeta:{vScale:l}}=this,c=l.getBasePixel(),d=l.isHorizontal(),u=this._getRuler(),{sharedOptions:h,includeOptions:p}=this._getSharedOptions(n,i);for(let f=n;f<n+r;f++){const m=this.getParsed(f),g=s||ge(m[l.axis])?{base:c,head:c}:this._calculateBarValuePixels(f),b=this._calculateBarIndexPixels(f,u),x=(m._stacks||{})[l.axis],v={horizontal:d,base:g.base,enableBorderRadius:!x||rd(m._custom)||o===x._top||o===x._bottom,x:d?g.head:b.center,y:d?b.center:g.head,height:d?b.size:Math.abs(g.size),width:d?Math.abs(g.size):b.size};p&&(v.options=h||this.resolveDataElementOptions(f,e[f].active?"active":i));const y=v.options||e[f].options;r_(v,y,x,o),s_(v,y,u.ratio),this.updateElement(e[f],f,v,i)}}_getStacks(e,n){const{iScale:r}=this._cachedMeta,i=r.getMatchingVisibleMetas(this._type).filter(u=>u.controller.options.grouped),s=r.options.stacked,o=[],l=this._cachedMeta.controller.getParsed(n),c=l&&l[r.axis],d=u=>{const h=u._parsed.find(f=>f[r.axis]===c),p=h&&h[u.vScale.axis];if(ge(p)||isNaN(p))return!0};for(const u of i)if(!(n!==void 0&&d(u))&&((s===!1||o.indexOf(u.stack)===-1||s===void 0&&u.stack===void 0)&&o.push(u.stack),u.index===e))break;return o.length||o.push(void 0),o}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(e).filter(r=>e[r].axis===n).shift()}_getAxis(){const e={},n=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)e[se(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,n)]=!0;return Object.keys(e)}_getStackIndex(e,n,r){const i=this._getStacks(e,r),s=n!==void 0?i.indexOf(n):-1;return s===-1?i.length-1:s}_getRuler(){const e=this.options,n=this._cachedMeta,r=n.iScale,i=[];let s,o;for(s=0,o=n.data.length;s<o;++s)i.push(r.getPixelForValue(this.getParsed(s)[r.axis],s));const l=e.barThickness;return{min:l||Xk(n),pixels:i,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:l?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:r,index:i},options:{base:s,minBarLength:o}}=this,l=s||0,c=this.getParsed(e),d=c._custom,u=rd(d);let h=c[n.axis],p=0,f=r?this.applyStack(n,c,r):h,m,g;f!==h&&(p=f-h,f=h),u&&(h=d.barStart,f=d.barEnd-d.barStart,h!==0&&xn(h)!==xn(d.barEnd)&&(p=0),p+=h);const b=!ge(s)&&!u?s:p;let x=n.getPixelForValue(b);if(this.chart.getDataVisibility(e)?m=n.getPixelForValue(p+f):m=x,g=m-x,Math.abs(g)<o){g=t_(g,n,l)*o,h===l&&(x-=g/2);const v=n.getPixelForDecimal(0),y=n.getPixelForDecimal(1),k=Math.min(v,y),j=Math.max(v,y);x=Math.max(Math.min(x,j),k),m=x+g,r&&!u&&(c._stacks[n.axis]._visualValues[i]=n.getValueForPixel(m)-n.getValueForPixel(x))}if(x===n.getPixelForValue(l)){const v=xn(g)*n.getLineWidthForValue(l)/2;x+=v,g-=v}return{size:g,base:x,head:m,center:m+g/2}}_calculateBarIndexPixels(e,n){const r=n.scale,i=this.options,s=i.skipNull,o=se(i.maxBarThickness,1/0);let l,c;const d=this._getAxisCount();if(n.grouped){const u=s?this._getStackCount(e):n.stackCount,h=i.barThickness==="flex"?Jk(e,n,i,u*d):Qk(e,n,i,u*d),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(se(p,this.getFirstScaleIdForIndexAxis())),m=this._getStackIndex(this.index,this._cachedMeta.stack,s?e:void 0)+f;l=h.start+h.chunk*m+h.chunk/2,c=Math.min(o,h.chunk*h.ratio)}else l=r.getPixelForValue(this.getParsed(e)[r.axis],e),c=Math.min(o,n.min*n.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){const e=this._cachedMeta,n=e.vScale,r=e.data,i=r.length;let s=0;for(;s<i;++s)this.getParsed(s)[n.axis]!==null&&!r[s].hidden&&r[s].draw(this._ctx)}}X(Bo,"id","bar"),X(Bo,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),X(Bo,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ho extends _i{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:r,data:i=[],_dataset:s}=n,o=this.chart._animationsDisabled;let{start:l,count:c}=M5(n,i,o);this._drawStart=l,this._drawCount=c,P5(n)&&(l=0,c=i.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=i;const d=this.resolveDatasetElementOptions(e);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(r,void 0,{animated:!o,options:d},e),this.updateElements(i,l,c,e)}updateElements(e,n,r,i){const s=i==="reset",{iScale:o,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,{sharedOptions:u,includeOptions:h}=this._getSharedOptions(n,i),p=o.axis,f=l.axis,{spanGaps:m,segment:g}=this.options,b=da(m)?m:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||s||i==="none",v=n+r,y=e.length;let k=n>0&&this.getParsed(n-1);for(let j=0;j<y;++j){const S=e[j],_=x?S:{};if(j<n||j>=v){_.skip=!0;continue}const N=this.getParsed(j),A=ge(N[f]),E=_[p]=o.getPixelForValue(N[p],j),C=_[f]=s||A?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,N,c):N[f],j);_.skip=isNaN(E)||isNaN(C)||A,_.stop=j>0&&Math.abs(N[p]-k[p])>b,g&&(_.parsed=N,_.raw=d.data[j]),h&&(_.options=u||this.resolveDataElementOptions(j,S.active?"active":i)),x||this.updateElement(S,j,_,i),k=N}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,r=n.options&&n.options.borderWidth||0,i=e.data||[];if(!i.length)return r;const s=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(r,s,o)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}X(Ho,"id","line"),X(Ho,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),X(Ho,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function kr(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class lp{constructor(e){X(this,"options");this.options=e||{}}static override(e){Object.assign(lp.prototype,e)}init(){}formats(){return kr()}parse(){return kr()}format(){return kr()}add(){return kr()}diff(){return kr()}startOf(){return kr()}endOf(){return kr()}}var a_={_date:lp};function o_(t,e,n,r){const{controller:i,data:s,_sorted:o}=t,l=i._cachedMeta.iScale,c=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(l&&e===l.axis&&e!=="r"&&o&&s.length){const d=l._reversePixels?N5:Ar;if(r){if(i._sharedOptions){const u=s[0],h=typeof u.getRange=="function"&&u.getRange(e);if(h){const p=d(s,e,n-h),f=d(s,e,n+h);return{lo:p.lo,hi:f.hi}}}}else{const u=d(s,e,n);if(c){const{vScale:h}=i._cachedMeta,{_parsed:p}=t,f=p.slice(0,u.lo+1).reverse().findIndex(g=>!ge(g[h.axis]));u.lo-=Math.max(0,f);const m=p.slice(u.hi).findIndex(g=>!ge(g[h.axis]));u.hi+=Math.max(0,m)}return u}}return{lo:0,hi:s.length-1}}function pc(t,e,n,r,i){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let l=0,c=s.length;l<c;++l){const{index:d,data:u}=s[l],{lo:h,hi:p}=o_(s[l],e,o,i);for(let f=h;f<=p;++f){const m=u[f];m.skip||r(m,d,f)}}}function l_(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(r,i){const s=e?Math.abs(r.x-i.x):0,o=n?Math.abs(r.y-i.y):0;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}}function id(t,e,n,r,i){const s=[];return!i&&!t.isPointInArea(e)||pc(t,n,e,function(l,c,d){!i&&!ua(l,t.chartArea,0)||l.inRange(e.x,e.y,r)&&s.push({element:l,datasetIndex:c,index:d})},!0),s}function c_(t,e,n,r){let i=[];function s(o,l,c){const{startAngle:d,endAngle:u}=o.getProps(["startAngle","endAngle"],r),{angle:h}=Wx(o,{x:e.x,y:e.y});Kh(h,d,u)&&i.push({element:o,datasetIndex:l,index:c})}return pc(t,n,e,s),i}function d_(t,e,n,r,i,s){let o=[];const l=l_(n);let c=Number.POSITIVE_INFINITY;function d(u,h,p){const f=u.inRange(e.x,e.y,i);if(r&&!f)return;const m=u.getCenterPoint(i);if(!(!!s||t.isPointInArea(m))&&!f)return;const b=l(e,m);b<c?(o=[{element:u,datasetIndex:h,index:p}],c=b):b===c&&o.push({element:u,datasetIndex:h,index:p})}return pc(t,n,e,d),o}function sd(t,e,n,r,i,s){return!s&&!t.isPointInArea(e)?[]:n==="r"&&!r?c_(t,e,n,i):d_(t,e,n,r,i,s)}function T0(t,e,n,r,i){const s=[],o=n==="x"?"inXRange":"inYRange";let l=!1;return pc(t,n,e,(c,d,u)=>{c[o]&&c[o](e[n],i)&&(s.push({element:c,datasetIndex:d,index:u}),l=l||c.inRange(e.x,e.y,i))}),r&&!l?[]:s}var u_={modes:{index(t,e,n,r){const i=Nr(e,t),s=n.axis||"x",o=n.includeInvisible||!1,l=n.intersect?id(t,i,s,r,o):sd(t,i,s,!1,r,o),c=[];return l.length?(t.getSortedVisibleDatasetMetas().forEach(d=>{const u=l[0].index,h=d.data[u];h&&!h.skip&&c.push({element:h,datasetIndex:d.index,index:u})}),c):[]},dataset(t,e,n,r){const i=Nr(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;let l=n.intersect?id(t,i,s,r,o):sd(t,i,s,!1,r,o);if(l.length>0){const c=l[0].datasetIndex,d=t.getDatasetMeta(c).data;l=[];for(let u=0;u<d.length;++u)l.push({element:d[u],datasetIndex:c,index:u})}return l},point(t,e,n,r){const i=Nr(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return id(t,i,s,r,o)},nearest(t,e,n,r){const i=Nr(e,t),s=n.axis||"xy",o=n.includeInvisible||!1;return sd(t,i,s,n.intersect,r,o)},x(t,e,n,r){const i=Nr(e,t);return T0(t,i,"x",n.intersect,r)},y(t,e,n,r){const i=Nr(e,t);return T0(t,i,"y",n.intersect,r)}}};const dv=["left","top","right","bottom"];function ds(t,e){return t.filter(n=>n.pos===e)}function A0(t,e){return t.filter(n=>dv.indexOf(n.pos)===-1&&n.box.axis===e)}function us(t,e){return t.sort((n,r)=>{const i=e?r:n,s=e?n:r;return i.weight===s.weight?i.index-s.index:i.weight-s.weight})}function h_(t){const e=[];let n,r,i,s,o,l;for(n=0,r=(t||[]).length;n<r;++n)i=t[n],{position:s,options:{stack:o,stackWeight:l=1}}=i,e.push({index:n,box:i,pos:s,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&s+o,stackWeight:l});return e}function p_(t){const e={};for(const n of t){const{stack:r,pos:i,stackWeight:s}=n;if(!r||!dv.includes(i))continue;const o=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=s}return e}function f_(t,e){const n=p_(t),{vBoxMaxWidth:r,hBoxMaxHeight:i}=e;let s,o,l;for(s=0,o=t.length;s<o;++s){l=t[s];const{fullSize:c}=l.box,d=n[l.stack],u=d&&l.stackWeight/d.weight;l.horizontal?(l.width=u?u*r:c&&e.availableWidth,l.height=i):(l.width=r,l.height=u?u*i:c&&e.availableHeight)}return n}function m_(t){const e=h_(t),n=us(e.filter(d=>d.box.fullSize),!0),r=us(ds(e,"left"),!0),i=us(ds(e,"right")),s=us(ds(e,"top"),!0),o=us(ds(e,"bottom")),l=A0(e,"x"),c=A0(e,"y");return{fullSize:n,leftAndTop:r.concat(s),rightAndBottom:i.concat(c).concat(o).concat(l),chartArea:ds(e,"chartArea"),vertical:r.concat(i).concat(c),horizontal:s.concat(o).concat(l)}}function O0(t,e,n,r){return Math.max(t[n],e[n])+Math.max(t[r],e[r])}function uv(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function g_(t,e,n,r){const{pos:i,box:s}=n,o=t.maxPadding;if(!he(i)){n.size&&(t[i]-=n.size);const h=r[n.stack]||{size:0,count:1};h.size=Math.max(h.size,n.horizontal?s.height:s.width),n.size=h.size/h.count,t[i]+=n.size}s.getPadding&&uv(o,s.getPadding());const l=Math.max(0,e.outerWidth-O0(o,t,"left","right")),c=Math.max(0,e.outerHeight-O0(o,t,"top","bottom")),d=l!==t.w,u=c!==t.h;return t.w=l,t.h=c,n.horizontal?{same:d,other:u}:{same:u,other:d}}function x_(t){const e=t.maxPadding;function n(r){const i=Math.max(e[r]-t[r],0);return t[r]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function v_(t,e){const n=e.maxPadding;function r(i){const s={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{s[o]=Math.max(e[o],n[o])}),s}return r(t?["left","right"]:["top","bottom"])}function js(t,e,n,r){const i=[];let s,o,l,c,d,u;for(s=0,o=t.length,d=0;s<o;++s){l=t[s],c=l.box,c.update(l.width||e.w,l.height||e.h,v_(l.horizontal,e));const{same:h,other:p}=g_(e,n,l,r);d|=h&&i.length,u=u||p,c.fullSize||i.push(l)}return d&&js(i,e,n,r)||u}function vo(t,e,n,r,i){t.top=n,t.left=e,t.right=e+r,t.bottom=n+i,t.width=r,t.height=i}function L0(t,e,n,r){const i=n.padding;let{x:s,y:o}=e;for(const l of t){const c=l.box,d=r[l.stack]||{placed:0,weight:1},u=l.stackWeight/d.weight||1;if(l.horizontal){const h=e.w*u,p=d.size||c.height;ca(d.start)&&(o=d.start),c.fullSize?vo(c,i.left,o,n.outerWidth-i.right-i.left,p):vo(c,e.left+d.placed,o,h,p),d.start=o,d.placed+=h,o=c.bottom}else{const h=e.h*u,p=d.size||c.width;ca(d.start)&&(s=d.start),c.fullSize?vo(c,s,i.top,p,n.outerHeight-i.bottom-i.top):vo(c,s,e.top+d.placed,p,h),d.start=s,d.placed+=h,s=c.right}}e.x=s,e.y=o}var It={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,r){if(!t)return;const i=Ut(t.options.layout.padding),s=Math.max(e-i.width,0),o=Math.max(n-i.height,0),l=m_(t.boxes),c=l.vertical,d=l.horizontal;ve(t.boxes,g=>{typeof g.beforeLayout=="function"&&g.beforeLayout()});const u=c.reduce((g,b)=>b.box.options&&b.box.options.display===!1?g:g+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:i,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/u,hBoxMaxHeight:o/2}),p=Object.assign({},i);uv(p,Ut(r));const f=Object.assign({maxPadding:p,w:s,h:o,x:i.left,y:i.top},i),m=f_(c.concat(d),h);js(l.fullSize,f,h,m),js(c,f,h,m),js(d,f,h,m)&&js(c,f,h,m),x_(f),L0(l.leftAndTop,f,h,m),f.x+=f.w,f.y+=f.h,L0(l.rightAndBottom,f,h,m),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},ve(l.chartArea,g=>{const b=g.box;Object.assign(b,t.chartArea),b.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class hv{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,r){}removeEventListener(e,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,r,i){return n=Math.max(0,n||e.width),r=r||e.height,{width:n,height:Math.max(0,i?Math.floor(n/i):r)}}isAttached(e){return!0}updateConfig(e){}}class b_ extends hv{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Uo="$chartjs",y_={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},I0=t=>t===null||t==="";function w_(t,e){const n=t.style,r=t.getAttribute("height"),i=t.getAttribute("width");if(t[Uo]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",I0(i)){const s=y0(t,"width");s!==void 0&&(t.width=s)}if(I0(r))if(t.style.height==="")t.height=t.width/(e||2);else{const s=y0(t,"height");s!==void 0&&(t.height=s)}return t}const pv=wk?{passive:!0}:!1;function j_(t,e,n){t&&t.addEventListener(e,n,pv)}function k_(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,pv)}function __(t,e){const n=y_[t.type]||t.type,{x:r,y:i}=Nr(t,e);return{type:n,chart:e,native:t,x:r!==void 0?r:null,y:i!==void 0?i:null}}function Rl(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function S_(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||Rl(l.addedNodes,r),o=o&&!Rl(l.removedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function N_(t,e,n){const r=t.canvas,i=new MutationObserver(s=>{let o=!1;for(const l of s)o=o||Rl(l.removedNodes,r),o=o&&!Rl(l.addedNodes,r);o&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}const pa=new Map;let D0=0;function fv(){const t=window.devicePixelRatio;t!==D0&&(D0=t,pa.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function C_(t,e){pa.size||window.addEventListener("resize",fv),pa.set(t,e)}function z_(t){pa.delete(t),pa.size||window.removeEventListener("resize",fv)}function E_(t,e,n){const r=t.canvas,i=r&&op(r);if(!i)return;const s=Zx((l,c)=>{const d=i.clientWidth;n(l,c),d<i.clientWidth&&n()},window),o=new ResizeObserver(l=>{const c=l[0],d=c.contentRect.width,u=c.contentRect.height;d===0&&u===0||s(d,u)});return o.observe(i),C_(t,s),o}function ad(t,e,n){n&&n.disconnect(),e==="resize"&&z_(t)}function R_(t,e,n){const r=t.canvas,i=Zx(s=>{t.ctx!==null&&n(__(s,t))},t);return j_(r,e,i),i}class M_ extends hv{acquireContext(e,n){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(w_(e,n),r):null}releaseContext(e){const n=e.canvas;if(!n[Uo])return!1;const r=n[Uo].initial;["height","width"].forEach(s=>{const o=r[s];ge(o)?n.removeAttribute(s):n.setAttribute(s,o)});const i=r.style||{};return Object.keys(i).forEach(s=>{n.style[s]=i[s]}),n.width=n.width,delete n[Uo],!0}addEventListener(e,n,r){this.removeEventListener(e,n);const i=e.$proxies||(e.$proxies={}),o={attach:S_,detach:N_,resize:E_}[n]||R_;i[n]=o(e,n,r)}removeEventListener(e,n){const r=e.$proxies||(e.$proxies={}),i=r[n];if(!i)return;({attach:ad,detach:ad,resize:ad}[n]||k_)(e,n,i),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,r,i){return yk(e,n,r,i)}isAttached(e){const n=e&&op(e);return!!(n&&n.isConnected)}}function P_(t){return!ap()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?b_:M_}class nn{constructor(){X(this,"x");X(this,"y");X(this,"active",!1);X(this,"options");X(this,"$animations")}tooltipPosition(e){const{x:n,y:r}=this.getProps(["x","y"],e);return{x:n,y:r}}hasValue(){return da(this.x)&&da(this.y)}getProps(e,n){const r=this.$animations;if(!n||!r)return this;const i={};return e.forEach(s=>{i[s]=r[s]&&r[s].active()?r[s]._to:this[s]}),i}}X(nn,"defaults",{}),X(nn,"defaultRoutes");function T_(t,e){const n=t.options.ticks,r=A_(t),i=Math.min(n.maxTicksLimit||r,r),s=n.major.enabled?L_(e):[],o=s.length,l=s[0],c=s[o-1],d=[];if(o>i)return I_(e,d,s,o/i),d;const u=O_(s,e,i);if(o>0){let h,p;const f=o>1?Math.round((c-l)/(o-1)):null;for(bo(e,d,u,ge(f)?0:l-f,l),h=0,p=o-1;h<p;h++)bo(e,d,u,s[h],s[h+1]);return bo(e,d,u,c,ge(f)?e.length:c+f),d}return bo(e,d,u),d}function A_(t){const e=t.options.offset,n=t._tickSize(),r=t._length/n+(e?0:1),i=t._maxLength/n;return Math.floor(Math.min(r,i))}function O_(t,e,n){const r=D_(t),i=e.length/n;if(!r)return Math.max(i,1);const s=b5(r);for(let o=0,l=s.length-1;o<l;o++){const c=s[o];if(c>i)return c}return Math.max(i,1)}function L_(t){const e=[];let n,r;for(n=0,r=t.length;n<r;n++)t[n].major&&e.push(n);return e}function I_(t,e,n,r){let i=0,s=n[0],o;for(r=Math.ceil(r),o=0;o<t.length;o++)o===s&&(e.push(t[o]),i++,s=n[i*r])}function bo(t,e,n,r,i){const s=se(r,0),o=Math.min(se(i,t.length),t.length);let l=0,c,d,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=s;u<0;)l++,u=Math.round(s+l*n);for(d=Math.max(s,0);d<o;d++)d===u&&(e.push(t[d]),l++,u=Math.round(s+l*n))}function D_(t){const e=t.length;let n,r;if(e<2)return!1;for(r=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==r)return!1;return r}const F_=t=>t==="left"?"right":t==="right"?"left":t,F0=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,B0=(t,e)=>Math.min(e||t,t);function H0(t,e){const n=[],r=t.length/e,i=t.length;let s=0;for(;s<i;s+=r)n.push(t[Math.floor(s)]);return n}function B_(t,e,n){const r=t.ticks.length,i=Math.min(e,r-1),s=t._startPixel,o=t._endPixel,l=1e-6;let c=t.getPixelForTick(i),d;if(!(n&&(r===1?d=Math.max(c-s,o-c):e===0?d=(t.getPixelForTick(1)-c)/2:d=(c-t.getPixelForTick(i-1))/2,c+=i<e?d:-d,c<s-l||c>o+l)))return c}function H_(t,e){ve(t,n=>{const r=n.gc,i=r.length/2;let s;if(i>e){for(s=0;s<i;++s)delete n.data[r[s]];r.splice(0,i)}})}function hs(t){return t.drawTicks?t.tickLength:0}function U0(t,e){if(!t.display)return 0;const n=lt(t.font,e),r=Ut(t.padding);return($e(t.text)?t.text.length:1)*n.lineHeight+r.height}function U_(t,e){return Xr(t,{scale:e,type:"scale"})}function $_(t,e,n){return Xr(t,{tick:n,index:e,type:"tick"})}function W_(t,e,n){let r=Qh(t);return(n&&e!=="right"||!n&&e==="right")&&(r=F_(r)),r}function V_(t,e,n,r){const{top:i,left:s,bottom:o,right:l,chart:c}=t,{chartArea:d,scales:u}=c;let h=0,p,f,m;const g=o-i,b=l-s;if(t.isHorizontal()){if(f=it(r,s,l),he(n)){const x=Object.keys(n)[0],v=n[x];m=u[x].getPixelForValue(v)+g-e}else n==="center"?m=(d.bottom+d.top)/2+g-e:m=F0(t,n,e);p=l-s}else{if(he(n)){const x=Object.keys(n)[0],v=n[x];f=u[x].getPixelForValue(v)-b+e}else n==="center"?f=(d.left+d.right)/2-b+e:f=F0(t,n,e);m=it(r,o,i),h=n==="left"?-Qe:Qe}return{titleX:f,titleY:m,maxWidth:p,rotation:h}}class Ki extends nn{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:r,_suggestedMax:i}=this;return e=dn(e,Number.POSITIVE_INFINITY),n=dn(n,Number.NEGATIVE_INFINITY),r=dn(r,Number.POSITIVE_INFINITY),i=dn(i,Number.NEGATIVE_INFINITY),{min:dn(e,r),max:dn(n,i),minDefined:Ht(e),maxDefined:Ht(n)}}getMinMax(e){let{min:n,max:r,minDefined:i,maxDefined:s}=this.getUserBounds(),o;if(i&&s)return{min:n,max:r};const l=this.getMatchingVisibleMetas();for(let c=0,d=l.length;c<d;++c)o=l[c].controller.getMinMax(this,e),i||(n=Math.min(n,o.min)),s||(r=Math.max(r,o.max));return n=s&&n>r?r:n,r=i&&n>r?n:r,{min:dn(n,dn(r,n)),max:dn(r,dn(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Ce(this.options.beforeUpdate,[this])}update(e,n,r){const{beginAtZero:i,grace:s,ticks:o}=this.options,l=o.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Q5(this,s,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const c=l<this.ticks.length;this._convertTicksToLabels(c?H0(this.ticks,l):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=T_(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,e=!e),this._startPixel=n,this._endPixel=r,this._reversePixels=e,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Ce(this.options.afterUpdate,[this])}beforeSetDimensions(){Ce(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Ce(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Ce(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Ce(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let r,i,s;for(r=0,i=e.length;r<i;r++)s=e[r],s.label=Ce(n.callback,[s.value,r,e],this)}afterTickToLabelConversion(){Ce(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Ce(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,r=B0(this.ticks.length,e.ticks.maxTicksLimit),i=n.minRotation||0,s=n.maxRotation;let o=i,l,c,d;if(!this._isVisible()||!n.display||i>=s||r<=1||!this.isHorizontal()){this.labelRotation=i;return}const u=this._getLabelSizes(),h=u.widest.width,p=u.highest.height,f=ot(this.chart.width-h,0,this.maxWidth);l=e.offset?this.maxWidth/r:f/(r-1),h+6>l&&(l=f/(r-(e.offset?.5:1)),c=this.maxHeight-hs(e.grid)-n.padding-U0(e.title,this.chart.options.font),d=Math.sqrt(h*h+p*p),o=k5(Math.min(Math.asin(ot((u.highest.height+6)/l,-1,1)),Math.asin(ot(c/d,-1,1))-Math.asin(ot(p/d,-1,1)))),o=Math.max(i,Math.min(s,o))),this.labelRotation=o}afterCalculateLabelRotation(){Ce(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Ce(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:r,title:i,grid:s}}=this,o=this._isVisible(),l=this.isHorizontal();if(o){const c=U0(i,n.options.font);if(l?(e.width=this.maxWidth,e.height=hs(s)+c):(e.height=this.maxHeight,e.width=hs(s)+c),r.display&&this.ticks.length){const{first:d,last:u,widest:h,highest:p}=this._getLabelSizes(),f=r.padding*2,m=Tr(this.labelRotation),g=Math.cos(m),b=Math.sin(m);if(l){const x=r.mirror?0:b*h.width+g*p.height;e.height=Math.min(this.maxHeight,e.height+x+f)}else{const x=r.mirror?0:g*h.width+b*p.height;e.width=Math.min(this.maxWidth,e.width+x+f)}this._calculatePadding(d,u,b,g)}}this._handleMargins(),l?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,r,i){const{ticks:{align:s,padding:o},position:l}=this.options,c=this.labelRotation!==0,d=l!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,f=0;c?d?(p=i*e.width,f=r*n.height):(p=r*e.height,f=i*n.width):s==="start"?f=n.width:s==="end"?p=e.width:s!=="inner"&&(p=e.width/2,f=n.width/2),this.paddingLeft=Math.max((p-u+o)*this.width/(this.width-u),0),this.paddingRight=Math.max((f-h+o)*this.width/(this.width-h),0)}else{let u=n.height/2,h=e.height/2;s==="start"?(u=0,h=e.height):s==="end"&&(u=n.height,h=0),this.paddingTop=u+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Ce(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,r;for(n=0,r=e.length;n<r;n++)ge(e[n].label)&&(e.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=H0(r,n)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,r){const{ctx:i,_longestTextCache:s}=this,o=[],l=[],c=Math.floor(n/B0(n,r));let d=0,u=0,h,p,f,m,g,b,x,v,y,k,j;for(h=0;h<n;h+=c){if(m=e[h].label,g=this._resolveTickFontOptions(h),i.font=b=g.string,x=s[b]=s[b]||{data:{},gc:[]},v=g.lineHeight,y=k=0,!ge(m)&&!$e(m))y=m0(i,x.data,x.gc,y,m),k=v;else if($e(m))for(p=0,f=m.length;p<f;++p)j=m[p],!ge(j)&&!$e(j)&&(y=m0(i,x.data,x.gc,y,j),k+=v);o.push(y),l.push(k),d=Math.max(y,d),u=Math.max(k,u)}H_(s,n);const S=o.indexOf(d),_=l.indexOf(u),N=A=>({width:o[A]||0,height:l[A]||0});return{first:N(0),last:N(n-1),widest:N(S),highest:N(_),widths:o,heights:l}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return S5(this._alignToPixels?jr(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const r=n[e];return r.$context||(r.$context=$_(this.getContext(),e,r))}return this.$context||(this.$context=U_(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Tr(this.labelRotation),r=Math.abs(Math.cos(n)),i=Math.abs(Math.sin(n)),s=this._getLabelSizes(),o=e.autoSkipPadding||0,l=s?s.widest.width+o:0,c=s?s.highest.height+o:0;return this.isHorizontal()?c*r>l*i?l/r:c/i:c*i<l*r?c/r:l/i}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,r=this.chart,i=this.options,{grid:s,position:o,border:l}=i,c=s.offset,d=this.isHorizontal(),h=this.ticks.length+(c?1:0),p=hs(s),f=[],m=l.setContext(this.getContext()),g=m.display?m.width:0,b=g/2,x=function(F){return jr(r,F,g)};let v,y,k,j,S,_,N,A,E,C,B,O;if(o==="top")v=x(this.bottom),_=this.bottom-p,A=v-b,C=x(e.top)+b,O=e.bottom;else if(o==="bottom")v=x(this.top),C=e.top,O=x(e.bottom)-b,_=v+b,A=this.top+p;else if(o==="left")v=x(this.right),S=this.right-p,N=v-b,E=x(e.left)+b,B=e.right;else if(o==="right")v=x(this.left),E=e.left,B=x(e.right)-b,S=v+b,N=this.left+p;else if(n==="x"){if(o==="center")v=x((e.top+e.bottom)/2+.5);else if(he(o)){const F=Object.keys(o)[0],W=o[F];v=x(this.chart.scales[F].getPixelForValue(W))}C=e.top,O=e.bottom,_=v+b,A=_+p}else if(n==="y"){if(o==="center")v=x((e.left+e.right)/2);else if(he(o)){const F=Object.keys(o)[0],W=o[F];v=x(this.chart.scales[F].getPixelForValue(W))}S=v-b,N=S-p,E=e.left,B=e.right}const L=se(i.ticks.maxTicksLimit,h),P=Math.max(1,Math.ceil(h/L));for(y=0;y<h;y+=P){const F=this.getContext(y),W=s.setContext(F),M=l.setContext(F),z=W.lineWidth,H=W.color,G=M.dash||[],J=M.dashOffset,xe=W.tickWidth,pe=W.tickColor,_e=W.tickBorderDash||[],Me=W.tickBorderDashOffset;k=B_(this,y,c),k!==void 0&&(j=jr(r,k,z),d?S=N=E=B=j:_=A=C=O=j,f.push({tx1:S,ty1:_,tx2:N,ty2:A,x1:E,y1:C,x2:B,y2:O,width:z,color:H,borderDash:G,borderDashOffset:J,tickWidth:xe,tickColor:pe,tickBorderDash:_e,tickBorderDashOffset:Me}))}return this._ticksLength=h,this._borderValue=v,f}_computeLabelItems(e){const n=this.axis,r=this.options,{position:i,ticks:s}=r,o=this.isHorizontal(),l=this.ticks,{align:c,crossAlign:d,padding:u,mirror:h}=s,p=hs(r.grid),f=p+u,m=h?-u:f,g=-Tr(this.labelRotation),b=[];let x,v,y,k,j,S,_,N,A,E,C,B,O="middle";if(i==="top")S=this.bottom-m,_=this._getXAxisLabelAlignment();else if(i==="bottom")S=this.top+m,_=this._getXAxisLabelAlignment();else if(i==="left"){const P=this._getYAxisLabelAlignment(p);_=P.textAlign,j=P.x}else if(i==="right"){const P=this._getYAxisLabelAlignment(p);_=P.textAlign,j=P.x}else if(n==="x"){if(i==="center")S=(e.top+e.bottom)/2+f;else if(he(i)){const P=Object.keys(i)[0],F=i[P];S=this.chart.scales[P].getPixelForValue(F)+f}_=this._getXAxisLabelAlignment()}else if(n==="y"){if(i==="center")j=(e.left+e.right)/2-f;else if(he(i)){const P=Object.keys(i)[0],F=i[P];j=this.chart.scales[P].getPixelForValue(F)}_=this._getYAxisLabelAlignment(p).textAlign}n==="y"&&(c==="start"?O="top":c==="end"&&(O="bottom"));const L=this._getLabelSizes();for(x=0,v=l.length;x<v;++x){y=l[x],k=y.label;const P=s.setContext(this.getContext(x));N=this.getPixelForTick(x)+s.labelOffset,A=this._resolveTickFontOptions(x),E=A.lineHeight,C=$e(k)?k.length:1;const F=C/2,W=P.color,M=P.textStrokeColor,z=P.textStrokeWidth;let H=_;o?(j=N,_==="inner"&&(x===v-1?H=this.options.reverse?"left":"right":x===0?H=this.options.reverse?"right":"left":H="center"),i==="top"?d==="near"||g!==0?B=-C*E+E/2:d==="center"?B=-L.highest.height/2-F*E+E:B=-L.highest.height+E/2:d==="near"||g!==0?B=E/2:d==="center"?B=L.highest.height/2-F*E:B=L.highest.height-C*E,h&&(B*=-1),g!==0&&!P.showLabelBackdrop&&(j+=E/2*Math.sin(g))):(S=N,B=(1-C)*E/2);let G;if(P.showLabelBackdrop){const J=Ut(P.backdropPadding),xe=L.heights[x],pe=L.widths[x];let _e=B-J.top,Me=0-J.left;switch(O){case"middle":_e-=xe/2;break;case"bottom":_e-=xe;break}switch(_){case"center":Me-=pe/2;break;case"right":Me-=pe;break;case"inner":x===v-1?Me-=pe:x>0&&(Me-=pe/2);break}G={left:Me,top:_e,width:pe+J.width,height:xe+J.height,color:P.backdropColor}}b.push({label:k,font:A,textOffset:B,options:{rotation:g,color:W,strokeColor:M,strokeWidth:z,textAlign:H,textBaseline:O,translation:[j,S],backdrop:G}})}return b}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Tr(this.labelRotation))return e==="top"?"left":"right";let i="center";return n.align==="start"?i="left":n.align==="end"?i="right":n.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:r,mirror:i,padding:s}}=this.options,o=this._getLabelSizes(),l=e+s,c=o.widest.width;let d,u;return n==="left"?i?(u=this.right+s,r==="near"?d="left":r==="center"?(d="center",u+=c/2):(d="right",u+=c)):(u=this.right-l,r==="near"?d="right":r==="center"?(d="center",u-=c/2):(d="left",u=this.left)):n==="right"?i?(u=this.left+s,r==="near"?d="right":r==="center"?(d="center",u-=c/2):(d="left",u-=c)):(u=this.left+l,r==="near"?d="left":r==="center"?(d="center",u+=c/2):(d="right",u=this.right)):d="right",{textAlign:d,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:r,top:i,width:s,height:o}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(r,i,s,o),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const i=this.ticks.findIndex(s=>s.value===e);return i>=0?n.setContext(this.getContext(i)).lineWidth:0}drawGrid(e){const n=this.options.grid,r=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let s,o;const l=(c,d,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(c.x,c.y),r.lineTo(d.x,d.y),r.stroke(),r.restore())};if(n.display)for(s=0,o=i.length;s<o;++s){const c=i[s];n.drawOnChartArea&&l({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),n.drawTicks&&l({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:r,grid:i}}=this,s=r.setContext(this.getContext()),o=r.display?s.width:0;if(!o)return;const l=i.setContext(this.getContext(0)).lineWidth,c=this._borderValue;let d,u,h,p;this.isHorizontal()?(d=jr(e,this.left,o)-o/2,u=jr(e,this.right,l)+l/2,h=p=c):(h=jr(e,this.top,o)-o/2,p=jr(e,this.bottom,l)+l/2,d=u=c),n.save(),n.lineWidth=s.width,n.strokeStyle=s.color,n.beginPath(),n.moveTo(d,h),n.lineTo(u,p),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,i=this._computeLabelArea();i&&ep(r,i);const s=this.getLabelItems(e);for(const o of s){const l=o.options,c=o.font,d=o.label,u=o.textOffset;ha(r,d,0,u,c,l)}i&&tp(r)}drawTitle(){const{ctx:e,options:{position:n,title:r,reverse:i}}=this;if(!r.display)return;const s=lt(r.font),o=Ut(r.padding),l=r.align;let c=s.lineHeight/2;n==="bottom"||n==="center"||he(n)?(c+=o.bottom,$e(r.text)&&(c+=s.lineHeight*(r.text.length-1))):c+=o.top;const{titleX:d,titleY:u,maxWidth:h,rotation:p}=V_(this,c,n,l);ha(e,r.text,0,0,s,{color:r.color,maxWidth:h,rotation:p,textAlign:W_(l,n,i),textBaseline:"middle",translation:[d,u]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,r=se(e.grid&&e.grid.z,-1),i=se(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Ki.prototype.draw?[{z:n,draw:s=>{this.draw(s)}}]:[{z:r,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",i=[];let s,o;for(s=0,o=n.length;s<o;++s){const l=n[s];l[r]===this.id&&(!e||l.type===e)&&i.push(l)}return i}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return lt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class yo{constructor(e,n,r){this.type=e,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let r;Z_(n)&&(r=this.register(n));const i=this.items,s=e.id,o=this.scope+"."+s;if(!s)throw new Error("class does not have id: "+e);return s in i||(i[s]=e,q_(e,o,r),this.override&&Fe.override(e.id,e.overrides)),o}get(e){return this.items[e]}unregister(e){const n=this.items,r=e.id,i=this.scope;r in n&&delete n[r],i&&r in Fe[i]&&(delete Fe[i][r],this.override&&delete qr[r])}}function q_(t,e,n){const r=la(Object.create(null),[n?Fe.get(n):{},Fe.get(e),t.defaults]);Fe.set(e,r),t.defaultRoutes&&Y_(e,t.defaultRoutes),t.descriptors&&Fe.describe(e,t.descriptors)}function Y_(t,e){Object.keys(e).forEach(n=>{const r=n.split("."),i=r.pop(),s=[t].concat(r).join("."),o=e[n].split("."),l=o.pop(),c=o.join(".");Fe.route(s,i,c,l)})}function Z_(t){return"id"in t&&"defaults"in t}class G_{constructor(){this.controllers=new yo(_i,"datasets",!0),this.elements=new yo(nn,"elements"),this.plugins=new yo(Object,"plugins"),this.scales=new yo(Ki,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,r){[...n].forEach(i=>{const s=r||this._getRegistryForType(i);r||s.isForType(i)||s===this.plugins&&i.id?this._exec(e,s,i):ve(i,o=>{const l=r||this._getRegistryForType(o);this._exec(e,l,o)})})}_exec(e,n,r){const i=Gh(e);Ce(r["before"+i],[],r),n[e](r),Ce(r["after"+i],[],r)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(e))return r}return this.plugins}_get(e,n,r){const i=n.get(e);if(i===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return i}}var pn=new G_;class K_{constructor(){this._init=void 0}notify(e,n,r,i){if(n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const s=i?this._descriptors(e).filter(i):this._descriptors(e),o=this._notify(s,e,n,r);return n==="afterDestroy"&&(this._notify(s,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),o}_notify(e,n,r,i){i=i||{};for(const s of e){const o=s.plugin,l=o[r],c=[n,i,s.options];if(Ce(l,c,o)===!1&&i.cancelable)return!1}return!0}invalidate(){ge(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const r=e&&e.config,i=se(r.options&&r.options.plugins,{}),s=X_(r);return i===!1&&!n?[]:J_(e,s,i,n)}_notifyStateChanges(e){const n=this._oldCache||[],r=this._cache,i=(s,o)=>s.filter(l=>!o.some(c=>l.plugin.id===c.plugin.id));this._notify(i(n,r),e,"stop"),this._notify(i(r,n),e,"start")}}function X_(t){const e={},n=[],r=Object.keys(pn.plugins.items);for(let s=0;s<r.length;s++)n.push(pn.getPlugin(r[s]));const i=t.plugins||[];for(let s=0;s<i.length;s++){const o=i[s];n.indexOf(o)===-1&&(n.push(o),e[o.id]=!0)}return{plugins:n,localIds:e}}function Q_(t,e){return!e&&t===!1?null:t===!0?{}:t}function J_(t,{plugins:e,localIds:n},r,i){const s=[],o=t.getContext();for(const l of e){const c=l.id,d=Q_(r[c],i);d!==null&&s.push({plugin:l,options:e6(t.config,{plugin:l,local:n[c]},d,o)})}return s}function e6(t,{plugin:e,local:n},r,i){const s=t.pluginScopeKeys(e),o=t.getOptionScopes(r,s);return n&&e.defaults&&o.push(e.defaults),t.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ju(t,e){const n=Fe.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function t6(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function n6(t,e){return t===e?"_index_":"_value_"}function $0(t){if(t==="x"||t==="y"||t==="r")return t}function r6(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function ku(t,...e){if($0(t))return t;for(const n of e){const r=n.axis||r6(n.position)||t.length>1&&$0(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function W0(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function i6(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(n.length)return W0(t,"x",n[0])||W0(t,"y",n[0])}return{}}function s6(t,e){const n=qr[t.type]||{scales:{}},r=e.scales||{},i=ju(t.type,e),s=Object.create(null);return Object.keys(r).forEach(o=>{const l=r[o];if(!he(l))return console.error(`Invalid scale configuration for scale: ${o}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const c=ku(o,l,i6(o,t),Fe.scales[l.type]),d=n6(c,i),u=n.scales||{};s[o]=Ds(Object.create(null),[{axis:c},l,u[c],u[d]])}),t.data.datasets.forEach(o=>{const l=o.type||t.type,c=o.indexAxis||ju(l,e),u=(qr[l]||{}).scales||{};Object.keys(u).forEach(h=>{const p=t6(h,c),f=o[p+"AxisID"]||p;s[f]=s[f]||Object.create(null),Ds(s[f],[{axis:p},r[f],u[h]])})}),Object.keys(s).forEach(o=>{const l=s[o];Ds(l,[Fe.scales[l.type],Fe.scale])}),s}function mv(t){const e=t.options||(t.options={});e.plugins=se(e.plugins,{}),e.scales=s6(t,e)}function gv(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function a6(t){return t=t||{},t.data=gv(t.data),mv(t),t}const V0=new Map,xv=new Set;function wo(t,e){let n=V0.get(t);return n||(n=e(),V0.set(t,n),xv.add(n)),n}const ps=(t,e,n)=>{const r=Ai(e,n);r!==void 0&&t.add(r)};class o6{constructor(e){this._config=a6(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=gv(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),mv(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return wo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return wo(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return wo(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,r=this.type;return wo(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const r=this._scopeCache;let i=r.get(e);return(!i||n)&&(i=new Map,r.set(e,i)),i}getOptionScopes(e,n,r){const{options:i,type:s}=this,o=this._cachedScopes(e,r),l=o.get(n);if(l)return l;const c=new Set;n.forEach(u=>{e&&(c.add(e),u.forEach(h=>ps(c,e,h))),u.forEach(h=>ps(c,i,h)),u.forEach(h=>ps(c,qr[s]||{},h)),u.forEach(h=>ps(c,Fe,h)),u.forEach(h=>ps(c,yu,h))});const d=Array.from(c);return d.length===0&&d.push(Object.create(null)),xv.has(n)&&o.set(n,d),d}chartOptionScopes(){const{options:e,type:n}=this;return[e,qr[n]||{},Fe.datasets[n]||{},{type:n},Fe,yu]}resolveNamedOptions(e,n,r,i=[""]){const s={$shared:!0},{resolver:o,subPrefixes:l}=q0(this._resolverCache,e,i);let c=o;if(c6(o,n)){s.$shared=!1,r=fr(r)?r():r;const d=this.createResolver(e,r,l);c=Oi(o,r,d)}for(const d of n)s[d]=c[d];return s}createResolver(e,n,r=[""],i){const{resolver:s}=q0(this._resolverCache,e,r);return he(n)?Oi(s,n,void 0,i):s}}function q0(t,e,n){let r=t.get(e);r||(r=new Map,t.set(e,r));const i=n.join();let s=r.get(i);return s||(s={resolver:rp(e,n),subPrefixes:n.filter(l=>!l.toLowerCase().includes("hover"))},r.set(i,s)),s}const l6=t=>he(t)&&Object.getOwnPropertyNames(t).some(e=>fr(t[e]));function c6(t,e){const{isScriptable:n,isIndexable:r}=Jx(t);for(const i of e){const s=n(i),o=r(i),l=(o||s)&&t[i];if(s&&(fr(l)||l6(l))||o&&$e(l))return!0}return!1}var d6="4.5.1";const u6=["top","bottom","left","right","chartArea"];function Y0(t,e){return t==="top"||t==="bottom"||u6.indexOf(t)===-1&&e==="x"}function Z0(t,e){return function(n,r){return n[t]===r[t]?n[e]-r[e]:n[t]-r[t]}}function G0(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Ce(n&&n.onComplete,[t],e)}function h6(t){const e=t.chart,n=e.options.animation;Ce(n&&n.onProgress,[t],e)}function vv(t){return ap()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const $o={},K0=t=>{const e=vv(t);return Object.values($o).filter(n=>n.canvas===e).pop()};function p6(t,e,n){const r=Object.keys(t);for(const i of r){const s=+i;if(s>=e){const o=t[i];delete t[i],(n>0||s>e)&&(t[s+n]=o)}}}function f6(t,e,n,r){return!n||t.type==="mouseout"?null:r?e:t}var Wn;let fc=(Wn=class{static register(...e){pn.add(...e),X0()}static unregister(...e){pn.remove(...e),X0()}constructor(e,n){const r=this.config=new o6(n),i=vv(e),s=K0(i);if(s)throw new Error("Canvas is already in use. Chart with ID '"+s.id+"' must be destroyed before the canvas with ID '"+s.canvas.id+"' can be reused.");const o=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||P_(i)),this.platform.updateConfig(r);const l=this.platform.acquireContext(i,o.aspectRatio),c=l&&l.canvas,d=c&&c.height,u=c&&c.width;if(this.id=d5(),this.ctx=l,this.canvas=c,this.width=u,this.height=d,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new K_,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=E5(h=>this.update(h),o.resizeDelay||0),this._dataChanges=[],$o[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}kn.listen(this,"complete",G0),kn.listen(this,"progress",h6),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:r,height:i,_aspectRatio:s}=this;return ge(e)?n&&s?s:i?r/i:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return pn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():b0(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return g0(this.canvas,this.ctx),this}stop(){return kn.stop(this),this}resize(e,n){kn.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const r=this.options,i=this.canvas,s=r.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,e,n,s),l=r.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,b0(this,l,!0)&&(this.notifyPlugins("resize",{size:o}),Ce(r.onResize,[this,o],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ve(n,(r,i)=>{r.id=i})}buildOrUpdateScales(){const e=this.options,n=e.scales,r=this.scales,i=Object.keys(r).reduce((o,l)=>(o[l]=!1,o),{});let s=[];n&&(s=s.concat(Object.keys(n).map(o=>{const l=n[o],c=ku(o,l),d=c==="r",u=c==="x";return{options:l,dposition:d?"chartArea":u?"bottom":"left",dtype:d?"radialLinear":u?"category":"linear"}}))),ve(s,o=>{const l=o.options,c=l.id,d=ku(c,l),u=se(l.type,o.dtype);(l.position===void 0||Y0(l.position,d)!==Y0(o.dposition))&&(l.position=o.dposition),i[c]=!0;let h=null;if(c in r&&r[c].type===u)h=r[c];else{const p=pn.getScale(u);h=new p({id:c,type:u,ctx:this.ctx,chart:this}),r[h.id]=h}h.init(l,e)}),ve(i,(o,l)=>{o||delete r[l]}),ve(r,o=>{It.configure(this,o,o.options),It.addBox(this,o)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,r=e.length;if(e.sort((i,s)=>i.index-s.index),r>n){for(let i=n;i<r;++i)this._destroyDatasetMeta(i);e.splice(n,r-n)}this._sortedMetasets=e.slice(0).sort(Z0("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((r,i)=>{n.filter(s=>s===r._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let r,i;for(this._removeUnreferencedMetasets(),r=0,i=n.length;r<i;r++){const s=n[r];let o=this.getDatasetMeta(r);const l=s.type||this.config.type;if(o.type&&o.type!==l&&(this._destroyDatasetMeta(r),o=this.getDatasetMeta(r)),o.type=l,o.indexAxis=s.indexAxis||ju(l,this.options),o.order=s.order||0,o.index=r,o.label=""+s.label,o.visible=this.isDatasetVisible(r),o.controller)o.controller.updateIndex(r),o.controller.linkScales();else{const c=pn.getController(l),{datasetElementType:d,dataElementType:u}=Fe.datasets[l];Object.assign(c,{dataElementType:pn.getElement(u),datasetElementType:d&&pn.getElement(d)}),o.controller=new c(this,r),e.push(o.controller)}}return this._updateMetasets(),e}_resetElements(){ve(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let d=0,u=this.data.datasets.length;d<u;d++){const{controller:h}=this.getDatasetMeta(d),p=!i&&s.indexOf(h)===-1;h.buildOrUpdateElements(p),o=Math.max(+h.getMaxOverflow(),o)}o=this._minPadding=r.layout.autoPadding?o:0,this._updateLayout(o),i||ve(s,d=>{d.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Z0("z","_idx"));const{_active:l,_lastEvent:c}=this;c?this._eventHandler(c,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){ve(this.scales,e=>{It.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!a0(n,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:i,count:s}of n){const o=r==="_removeElements"?-s:s;p6(e,i,o)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=s=>new Set(e.filter(o=>o[0]===s).map((o,l)=>l+","+o.splice(1).join(","))),i=r(0);for(let s=1;s<n;s++)if(!a0(i,r(s)))return;return Array.from(i).map(s=>s.split(",")).map(s=>({method:s[1],start:+s[2],count:+s[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;It.update(this,this.width,this.height,e);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],ve(this.boxes,i=>{r&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,s)=>{i._idx=s}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,fr(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const r=this.getDatasetMeta(e),i={meta:r,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(r.controller._update(n),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(kn.has(this)?this.attached&&!kn.running(this)&&kn.start(this):(this.draw(),G0({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,r=[];let i,s;for(i=0,s=n.length;i<s;++i){const o=n[i];(!e||o.visible)&&r.push(o)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,r={meta:e,index:e.index,cancelable:!0},i=Ok(this,e);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(i&&ep(n,i),e.controller.draw(),i&&tp(n),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(e){return ua(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,r,i){const s=u_.modes[n];return typeof s=="function"?s(this,e,r,i):[]}getDatasetMeta(e){const n=this.data.datasets[e],r=this._metasets;let i=r.filter(s=>s&&s._dataset===n).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},r.push(i)),i}getContext(){return this.$context||(this.$context=Xr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(e,n){const r=this.getDatasetMeta(e);r.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,r){const i=r?"show":"hide",s=this.getDatasetMeta(e),o=s.controller._resolveAnimations(void 0,i);ca(n)?(s.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),o.update(s,{visible:r}),this.update(l=>l.datasetIndex===e?i:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),kn.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),g0(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete $o[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,r=(s,o)=>{n.addEventListener(this,s,o),e[s]=o},i=(s,o,l)=>{s.offsetX=o,s.offsetY=l,this._eventHandler(s)};ve(this.options.events,s=>r(s,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,r=(c,d)=>{n.addEventListener(this,c,d),e[c]=d},i=(c,d)=>{e[c]&&(n.removeEventListener(this,c,d),delete e[c])},s=(c,d)=>{this.canvas&&this.resize(c,d)};let o;const l=()=>{i("attach",l),this.attached=!0,this.resize(),r("resize",s),r("detach",o)};o=()=>{this.attached=!1,i("resize",s),this._stop(),this._resize(0,0),r("attach",l)},n.isAttached(this.canvas)?l():o()}unbindEvents(){ve(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},ve(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,r){const i=r?"set":"remove";let s,o,l,c;for(n==="dataset"&&(s=this.getDatasetMeta(e[0].datasetIndex),s.controller["_"+i+"DatasetHoverStyle"]()),l=0,c=e.length;l<c;++l){o=e[l];const d=o&&this.getDatasetMeta(o.datasetIndex).controller;d&&d[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],r=e.map(({datasetIndex:s,index:o})=>{const l=this.getDatasetMeta(s);if(!l)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:l.data[o],index:o}});!Sl(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(e,n,r){return this._plugins.notify(this,e,n,r)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,r){const i=this.options.hover,s=(c,d)=>c.filter(u=>!d.some(h=>u.datasetIndex===h.datasetIndex&&u.index===h.index)),o=s(n,e),l=r?e:s(e,n);o.length&&this.updateHoverStyle(o,i.mode,!1),l.length&&i.mode&&this.updateHoverStyle(l,i.mode,!0)}_eventHandler(e,n){const r={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},i=o=>(o.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,i)===!1)return;const s=this._handleEvent(e,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,i),(s||r.changed)&&this.render(),this}_handleEvent(e,n,r){const{_active:i=[],options:s}=this,o=n,l=this._getActiveElements(e,i,r,o),c=g5(e),d=f6(e,this._lastEvent,r,c);r&&(this._lastEvent=null,Ce(s.onHover,[e,l,this],this),c&&Ce(s.onClick,[e,l,this],this));const u=!Sl(l,i);return(u||n)&&(this._active=l,this._updateHoverStyles(l,i,n)),this._lastEvent=d,u}_getActiveElements(e,n,r,i){if(e.type==="mouseout")return[];if(!r)return n;const s=this.options.hover;return this.getElementsAtEventForMode(e,s.mode,s,i)}},X(Wn,"defaults",Fe),X(Wn,"instances",$o),X(Wn,"overrides",qr),X(Wn,"registry",pn),X(Wn,"version",d6),X(Wn,"getChart",K0),Wn);function X0(){return ve(fc.instances,t=>t._plugins.invalidate())}function m6(t,e,n){const{startAngle:r,x:i,y:s,outerRadius:o,innerRadius:l,options:c}=e,{borderWidth:d,borderJoinStyle:u}=c,h=Math.min(d/o,Kt(r-n));if(t.beginPath(),t.arc(i,s,o-d/2,r+h/2,n-h/2),l>0){const p=Math.min(d/l,Kt(r-n));t.arc(i,s,l+d/2,n-p/2,r+p/2,!0)}else{const p=Math.min(d/2,o*Kt(r-n));if(u==="round")t.arc(i,s,p,n-je/2,r+je/2,!0);else if(u==="bevel"){const f=2*p*p,m=-f*Math.cos(n+je/2)+i,g=-f*Math.sin(n+je/2)+s,b=f*Math.cos(r+je/2)+i,x=f*Math.sin(r+je/2)+s;t.lineTo(m,g),t.lineTo(b,x)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function g6(t,e,n){const{startAngle:r,pixelMargin:i,x:s,y:o,outerRadius:l,innerRadius:c}=e;let d=i/l;t.beginPath(),t.arc(s,o,l,r-d,n+d),c>i?(d=i/c,t.arc(s,o,c,n+d,r-d,!0)):t.arc(s,o,i,n+Qe,r-Qe),t.closePath(),t.clip()}function x6(t){return np(t,["outerStart","outerEnd","innerStart","innerEnd"])}function v6(t,e,n,r){const i=x6(t.options.borderRadius),s=(n-e)/2,o=Math.min(s,r*e/2),l=c=>{const d=(n-Math.min(s,c))*r/2;return ot(c,0,Math.min(s,d))};return{outerStart:l(i.outerStart),outerEnd:l(i.outerEnd),innerStart:ot(i.innerStart,0,o),innerEnd:ot(i.innerEnd,0,o)}}function ti(t,e,n,r){return{x:n+t*Math.cos(e),y:r+t*Math.sin(e)}}function Ml(t,e,n,r,i,s){const{x:o,y:l,startAngle:c,pixelMargin:d,innerRadius:u}=e,h=Math.max(e.outerRadius+r+n-d,0),p=u>0?u+r+n+d:0;let f=0;const m=i-c;if(r){const P=u>0?u-r:0,F=h>0?h-r:0,W=(P+F)/2,M=W!==0?m*W/(W+r):m;f=(m-M)/2}const g=Math.max(.001,m*h-n/je)/h,b=(m-g)/2,x=c+b+f,v=i-b-f,{outerStart:y,outerEnd:k,innerStart:j,innerEnd:S}=v6(e,p,h,v-x),_=h-y,N=h-k,A=x+y/_,E=v-k/N,C=p+j,B=p+S,O=x+j/C,L=v-S/B;if(t.beginPath(),s){const P=(A+E)/2;if(t.arc(o,l,h,A,P),t.arc(o,l,h,P,E),k>0){const z=ti(N,E,o,l);t.arc(z.x,z.y,k,E,v+Qe)}const F=ti(B,v,o,l);if(t.lineTo(F.x,F.y),S>0){const z=ti(B,L,o,l);t.arc(z.x,z.y,S,v+Qe,L+Math.PI)}const W=(v-S/p+(x+j/p))/2;if(t.arc(o,l,p,v-S/p,W,!0),t.arc(o,l,p,W,x+j/p,!0),j>0){const z=ti(C,O,o,l);t.arc(z.x,z.y,j,O+Math.PI,x-Qe)}const M=ti(_,x,o,l);if(t.lineTo(M.x,M.y),y>0){const z=ti(_,A,o,l);t.arc(z.x,z.y,y,x-Qe,A)}}else{t.moveTo(o,l);const P=Math.cos(A)*h+o,F=Math.sin(A)*h+l;t.lineTo(P,F);const W=Math.cos(E)*h+o,M=Math.sin(E)*h+l;t.lineTo(W,M)}t.closePath()}function b6(t,e,n,r,i){const{fullCircles:s,startAngle:o,circumference:l}=e;let c=e.endAngle;if(s){Ml(t,e,n,r,c,i);for(let d=0;d<s;++d)t.fill();isNaN(l)||(c=o+(l%et||et))}return Ml(t,e,n,r,c,i),t.fill(),c}function y6(t,e,n,r,i){const{fullCircles:s,startAngle:o,circumference:l,options:c}=e,{borderWidth:d,borderJoinStyle:u,borderDash:h,borderDashOffset:p,borderRadius:f}=c,m=c.borderAlign==="inner";if(!d)return;t.setLineDash(h||[]),t.lineDashOffset=p,m?(t.lineWidth=d*2,t.lineJoin=u||"round"):(t.lineWidth=d,t.lineJoin=u||"bevel");let g=e.endAngle;if(s){Ml(t,e,n,r,g,i);for(let b=0;b<s;++b)t.stroke();isNaN(l)||(g=o+(l%et||et))}m&&g6(t,e,g),c.selfJoin&&g-o>=je&&f===0&&u!=="miter"&&m6(t,e,g),s||(Ml(t,e,n,r,g,i),t.stroke())}class ks extends nn{constructor(n){super();X(this,"circumference");X(this,"endAngle");X(this,"fullCircles");X(this,"innerRadius");X(this,"outerRadius");X(this,"pixelMargin");X(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.getProps(["x","y"],i),{angle:o,distance:l}=Wx(s,{x:n,y:r}),{startAngle:c,endAngle:d,innerRadius:u,outerRadius:h,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),f=(this.options.spacing+this.options.borderWidth)/2,m=se(p,d-c),g=Kh(o,c,d)&&c!==d,b=m>=et||g,x=Jn(l,u+f,h+f);return b&&x}getCenterPoint(n){const{x:r,y:i,startAngle:s,endAngle:o,innerRadius:l,outerRadius:c}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:d,spacing:u}=this.options,h=(s+o)/2,p=(l+c+u+d)/2;return{x:r+Math.cos(h)*p,y:i+Math.sin(h)*p}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:i}=this,s=(r.offset||0)/4,o=(r.spacing||0)/2,l=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=i>et?Math.floor(i/et):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const c=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(c)*s,Math.sin(c)*s);const d=1-Math.sin(Math.min(je,i||0)),u=s*d;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,b6(n,this,u,o,l),y6(n,this,u,o,l),n.restore()}}X(ks,"id","arc"),X(ks,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),X(ks,"defaultRoutes",{backgroundColor:"backgroundColor"}),X(ks,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function bv(t,e,n=e){t.lineCap=se(n.borderCapStyle,e.borderCapStyle),t.setLineDash(se(n.borderDash,e.borderDash)),t.lineDashOffset=se(n.borderDashOffset,e.borderDashOffset),t.lineJoin=se(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=se(n.borderWidth,e.borderWidth),t.strokeStyle=se(n.borderColor,e.borderColor)}function w6(t,e,n){t.lineTo(n.x,n.y)}function j6(t){return t.stepped?$5:t.tension||t.cubicInterpolationMode==="monotone"?W5:w6}function yv(t,e,n={}){const r=t.length,{start:i=0,end:s=r-1}=n,{start:o,end:l}=e,c=Math.max(i,o),d=Math.min(s,l),u=i<o&&s<o||i>l&&s>l;return{count:r,start:c,loop:e.loop,ilen:d<c&&!u?r+d-c:d-c}}function k6(t,e,n,r){const{points:i,options:s}=e,{count:o,start:l,loop:c,ilen:d}=yv(i,n,r),u=j6(s);let{move:h=!0,reverse:p}=r||{},f,m,g;for(f=0;f<=d;++f)m=i[(l+(p?d-f:f))%o],!m.skip&&(h?(t.moveTo(m.x,m.y),h=!1):u(t,g,m,p,s.stepped),g=m);return c&&(m=i[(l+(p?d:0))%o],u(t,g,m,p,s.stepped)),!!c}function _6(t,e,n,r){const i=e.points,{count:s,start:o,ilen:l}=yv(i,n,r),{move:c=!0,reverse:d}=r||{};let u=0,h=0,p,f,m,g,b,x;const v=k=>(o+(d?l-k:k))%s,y=()=>{g!==b&&(t.lineTo(u,b),t.lineTo(u,g),t.lineTo(u,x))};for(c&&(f=i[v(0)],t.moveTo(f.x,f.y)),p=0;p<=l;++p){if(f=i[v(p)],f.skip)continue;const k=f.x,j=f.y,S=k|0;S===m?(j<g?g=j:j>b&&(b=j),u=(h*u+k)/++h):(y(),t.lineTo(k,j),m=S,h=0,g=b=j),x=j}y()}function _u(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?_6:k6}function S6(t){return t.stepped?jk:t.tension||t.cubicInterpolationMode==="monotone"?kk:Cr}function N6(t,e,n,r){let i=e._path;i||(i=e._path=new Path2D,e.path(i,n,r)&&i.closePath()),bv(t,e.options),t.stroke(i)}function C6(t,e,n,r){const{segments:i,options:s}=e,o=_u(e);for(const l of i)bv(t,s,l.style),t.beginPath(),o(t,e,l,{start:n,end:n+r-1})&&t.closePath(),t.stroke()}const z6=typeof Path2D=="function";function E6(t,e,n,r){z6&&!e.options.segment?N6(t,e,n,r):C6(t,e,n,r)}class _s extends nn{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const i=r.spanGaps?this._loop:this._fullLoop;fk(this._points,r,e,i,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Mk(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,r=e.length;return r&&n[e[r-1].end]}interpolate(e,n){const r=this.options,i=e[n],s=this.points,o=zk(this,{property:n,start:i,end:i});if(!o.length)return;const l=[],c=S6(r);let d,u;for(d=0,u=o.length;d<u;++d){const{start:h,end:p}=o[d],f=s[h],m=s[p];if(f===m){l.push(f);continue}const g=Math.abs((i-f[n])/(m[n]-f[n])),b=c(f,m,g,r.stepped);b[n]=e[n],l.push(b)}return l.length===1?l[0]:l}pathSegment(e,n,r){return _u(this)(e,this,n,r)}path(e,n,r){const i=this.segments,s=_u(this);let o=this._loop;n=n||0,r=r||this.points.length-n;for(const l of i)o&=s(e,this,l,{start:n,end:n+r-1});return!!o}draw(e,n,r,i){const s=this.options||{};(this.points||[]).length&&s.borderWidth&&(e.save(),E6(e,this,r,i),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}X(_s,"id","line"),X(_s,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),X(_s,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),X(_s,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Q0(t,e,n,r){const i=t.options,{[n]:s}=t.getProps([n],r);return Math.abs(e-s)<i.radius+i.hitRadius}class Wo extends nn{constructor(n){super();X(this,"parsed");X(this,"skip");X(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,i){const s=this.options,{x:o,y:l}=this.getProps(["x","y"],i);return Math.pow(n-o,2)+Math.pow(r-l,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(n,r){return Q0(this,n,"x",r)}inYRange(n,r){return Q0(this,n,"y",r)}getCenterPoint(n){const{x:r,y:i}=this.getProps(["x","y"],n);return{x:r,y:i}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const i=r&&n.borderWidth||0;return(r+i)*2}draw(n,r){const i=this.options;this.skip||i.radius<.1||!ua(this,r,this.size(i)/2)||(n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.fillStyle=i.backgroundColor,wu(n,i,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}X(Wo,"id","point"),X(Wo,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),X(Wo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function wv(t,e){const{x:n,y:r,base:i,width:s,height:o}=t.getProps(["x","y","base","width","height"],e);let l,c,d,u,h;return t.horizontal?(h=o/2,l=Math.min(n,i),c=Math.max(n,i),d=r-h,u=r+h):(h=s/2,l=n-h,c=n+h,d=Math.min(r,i),u=Math.max(r,i)),{left:l,top:d,right:c,bottom:u}}function tr(t,e,n,r){return t?0:ot(e,n,r)}function R6(t,e,n){const r=t.options.borderWidth,i=t.borderSkipped,s=Qx(r);return{t:tr(i.top,s.top,0,n),r:tr(i.right,s.right,0,e),b:tr(i.bottom,s.bottom,0,n),l:tr(i.left,s.left,0,e)}}function M6(t,e,n){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),i=t.options.borderRadius,s=ji(i),o=Math.min(e,n),l=t.borderSkipped,c=r||he(i);return{topLeft:tr(!c||l.top||l.left,s.topLeft,0,o),topRight:tr(!c||l.top||l.right,s.topRight,0,o),bottomLeft:tr(!c||l.bottom||l.left,s.bottomLeft,0,o),bottomRight:tr(!c||l.bottom||l.right,s.bottomRight,0,o)}}function P6(t){const e=wv(t),n=e.right-e.left,r=e.bottom-e.top,i=R6(t,n/2,r/2),s=M6(t,n/2,r/2);return{outer:{x:e.left,y:e.top,w:n,h:r,radius:s},inner:{x:e.left+i.l,y:e.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,s.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(i.b,i.r))}}}}function od(t,e,n,r){const i=e===null,s=n===null,l=t&&!(i&&s)&&wv(t,r);return l&&(i||Jn(e,l.left,l.right))&&(s||Jn(n,l.top,l.bottom))}function T6(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function A6(t,e){t.rect(e.x,e.y,e.w,e.h)}function ld(t,e,n={}){const r=t.x!==n.x?-e:0,i=t.y!==n.y?-e:0,s=(t.x+t.w!==n.x+n.w?e:0)-r,o=(t.y+t.h!==n.y+n.h?e:0)-i;return{x:t.x+r,y:t.y+i,w:t.w+s,h:t.h+o,radius:t.radius}}class Vo extends nn{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:r,backgroundColor:i}}=this,{inner:s,outer:o}=P6(this),l=T6(o.radius)?zl:A6;e.save(),(o.w!==s.w||o.h!==s.h)&&(e.beginPath(),l(e,ld(o,n,s)),e.clip(),l(e,ld(s,-n,o)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),l(e,ld(s,n)),e.fillStyle=i,e.fill(),e.restore()}inRange(e,n,r){return od(this,e,n,r)}inXRange(e,n){return od(this,e,null,n)}inYRange(e,n){return od(this,null,e,n)}getCenterPoint(e){const{x:n,y:r,base:i,horizontal:s}=this.getProps(["x","y","base","horizontal"],e);return{x:s?(n+i)/2:n,y:s?r:(r+i)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}X(Vo,"id","bar"),X(Vo,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),X(Vo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});const J0=(t,e)=>{let{boxHeight:n=e,boxWidth:r=e}=t;return t.usePointStyle&&(n=Math.min(n,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(e,n)}},O6=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class em extends nn{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,r){this.maxWidth=e,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Ce(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(r=>e.filter(r,this.chart.data))),e.sort&&(n=n.sort((r,i)=>e.sort(r,i,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,i=lt(r.font),s=i.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:c}=J0(r,s);let d,u;n.font=i.string,this.isHorizontal()?(d=this.maxWidth,u=this._fitRows(o,s,l,c)+10):(u=this.maxHeight,d=this._fitCols(o,i,l,c)+10),this.width=Math.min(d,e.maxWidth||this.maxWidth),this.height=Math.min(u,e.maxHeight||this.maxHeight)}_fitRows(e,n,r,i){const{ctx:s,maxWidth:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.lineWidths=[0],u=i+l;let h=e;s.textAlign="left",s.textBaseline="middle";let p=-1,f=-u;return this.legendItems.forEach((m,g)=>{const b=r+n/2+s.measureText(m.text).width;(g===0||d[d.length-1]+b+2*l>o)&&(h+=u,d[d.length-(g>0?0:1)]=0,f+=u,p++),c[g]={left:0,top:f,row:p,width:b,height:i},d[d.length-1]+=b+l}),h}_fitCols(e,n,r,i){const{ctx:s,maxHeight:o,options:{labels:{padding:l}}}=this,c=this.legendHitBoxes=[],d=this.columnSizes=[],u=o-e;let h=l,p=0,f=0,m=0,g=0;return this.legendItems.forEach((b,x)=>{const{itemWidth:v,itemHeight:y}=L6(r,n,s,b,i);x>0&&f+y+2*l>u&&(h+=p+l,d.push({width:p,height:f}),m+=p+l,g++,p=f=0),c[x]={left:m,top:f,col:g,width:v,height:y},p=Math.max(p,v),f+=y+l}),h+=p,d.push({width:p,height:f}),h}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:i},rtl:s}}=this,o=ki(s,this.left,this.width);if(this.isHorizontal()){let l=0,c=it(r,this.left+i,this.right-this.lineWidths[l]);for(const d of n)l!==d.row&&(l=d.row,c=it(r,this.left+i,this.right-this.lineWidths[l])),d.top+=this.top+e+i,d.left=o.leftForLtr(o.x(c),d.width),c+=d.width+i}else{let l=0,c=it(r,this.top+e+i,this.bottom-this.columnSizes[l].height);for(const d of n)d.col!==l&&(l=d.col,c=it(r,this.top+e+i,this.bottom-this.columnSizes[l].height)),d.top=c,d.left+=this.left+i,d.left=o.leftForLtr(o.x(d.left),d.width),c+=d.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;ep(e,this),this._draw(),tp(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:r,ctx:i}=this,{align:s,labels:o}=e,l=Fe.color,c=ki(e.rtl,this.left,this.width),d=lt(o.font),{padding:u}=o,h=d.size,p=h/2;let f;this.drawTitle(),i.textAlign=c.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=d.string;const{boxWidth:m,boxHeight:g,itemHeight:b}=J0(o,h),x=function(S,_,N){if(isNaN(m)||m<=0||isNaN(g)||g<0)return;i.save();const A=se(N.lineWidth,1);if(i.fillStyle=se(N.fillStyle,l),i.lineCap=se(N.lineCap,"butt"),i.lineDashOffset=se(N.lineDashOffset,0),i.lineJoin=se(N.lineJoin,"miter"),i.lineWidth=A,i.strokeStyle=se(N.strokeStyle,l),i.setLineDash(se(N.lineDash,[])),o.usePointStyle){const E={radius:g*Math.SQRT2/2,pointStyle:N.pointStyle,rotation:N.rotation,borderWidth:A},C=c.xPlus(S,m/2),B=_+p;Xx(i,E,C,B,o.pointStyleWidth&&m)}else{const E=_+Math.max((h-g)/2,0),C=c.leftForLtr(S,m),B=ji(N.borderRadius);i.beginPath(),Object.values(B).some(O=>O!==0)?zl(i,{x:C,y:E,w:m,h:g,radius:B}):i.rect(C,E,m,g),i.fill(),A!==0&&i.stroke()}i.restore()},v=function(S,_,N){ha(i,N.text,S,_+b/2,d,{strikethrough:N.hidden,textAlign:c.textAlign(N.textAlign)})},y=this.isHorizontal(),k=this._computeTitleHeight();y?f={x:it(s,this.left+u,this.right-r[0]),y:this.top+u+k,line:0}:f={x:this.left+u,y:it(s,this.top+k+u,this.bottom-n[0].height),line:0},iv(this.ctx,e.textDirection);const j=b+u;this.legendItems.forEach((S,_)=>{i.strokeStyle=S.fontColor,i.fillStyle=S.fontColor;const N=i.measureText(S.text).width,A=c.textAlign(S.textAlign||(S.textAlign=o.textAlign)),E=m+p+N;let C=f.x,B=f.y;c.setWidth(this.width),y?_>0&&C+E+u>this.right&&(B=f.y+=j,f.line++,C=f.x=it(s,this.left+u,this.right-r[f.line])):_>0&&B+j>this.bottom&&(C=f.x=C+n[f.line].width+u,f.line++,B=f.y=it(s,this.top+k+u,this.bottom-n[f.line].height));const O=c.x(C);if(x(O,B,S),C=R5(A,C+m+p,y?C+E:this.right,e.rtl),v(c.x(C),B,S),y)f.x+=E+u;else if(typeof S.text!="string"){const L=d.lineHeight;f.y+=jv(S,L)+u}else f.y+=j}),sv(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,r=lt(n.font),i=Ut(n.padding);if(!n.display)return;const s=ki(e.rtl,this.left,this.width),o=this.ctx,l=n.position,c=r.size/2,d=i.top+c;let u,h=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),u=this.top+d,h=it(e.align,h,this.right-p);else{const m=this.columnSizes.reduce((g,b)=>Math.max(g,b.height),0);u=d+it(e.align,this.top,this.bottom-m-e.labels.padding-this._computeTitleHeight())}const f=it(l,h,h+p);o.textAlign=s.textAlign(Qh(l)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=r.string,ha(o,n.text,f,u,r)}_computeTitleHeight(){const e=this.options.title,n=lt(e.font),r=Ut(e.padding);return e.display?n.lineHeight+r.height:0}_getLegendItemAt(e,n){let r,i,s;if(Jn(e,this.left,this.right)&&Jn(n,this.top,this.bottom)){for(s=this.legendHitBoxes,r=0;r<s.length;++r)if(i=s[r],Jn(e,i.left,i.left+i.width)&&Jn(n,i.top,i.top+i.height))return this.legendItems[r]}return null}handleEvent(e){const n=this.options;if(!F6(e.type,n))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const i=this._hoveredItem,s=O6(i,r);i&&!s&&Ce(n.onLeave,[e,i,this],this),this._hoveredItem=r,r&&!s&&Ce(n.onHover,[e,r,this],this)}else r&&Ce(n.onClick,[e,r,this],this)}}function L6(t,e,n,r,i){const s=I6(r,t,e,n),o=D6(i,r,e.lineHeight);return{itemWidth:s,itemHeight:o}}function I6(t,e,n,r){let i=t.text;return i&&typeof i!="string"&&(i=i.reduce((s,o)=>s.length>o.length?s:o)),e+n.size/2+r.measureText(i).width}function D6(t,e,n){let r=t;return typeof e.text!="string"&&(r=jv(e,n)),r}function jv(t,e){const n=t.text?t.text.length:0;return e*n}function F6(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var B6={id:"legend",_element:em,start(t,e,n){const r=t.legend=new em({ctx:t.ctx,options:n,chart:t});It.configure(t,r,n),It.addBox(t,r)},stop(t){It.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const r=t.legend;It.configure(t,r,n),r.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const r=e.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),e.hidden=!0):(i.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:s,useBorderRadius:o,borderRadius:l}}=t.legend.options;return t._getSortedDatasetMetas().map(c=>{const d=c.controller.getStyle(n?0:void 0),u=Ut(d.borderWidth);return{text:e[c.index].label,fillStyle:d.backgroundColor,fontColor:s,hidden:!c.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:d.borderColor,pointStyle:r||d.pointStyle,rotation:d.rotation,textAlign:i||d.textAlign,borderRadius:o&&(l||d.borderRadius),datasetIndex:c.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class kv extends nn{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const i=$e(r.text)?r.text.length:1;this._padding=Ut(r.padding);const s=i*lt(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:r,bottom:i,right:s,options:o}=this,l=o.align;let c=0,d,u,h;return this.isHorizontal()?(u=it(l,r,s),h=n+e,d=s-r):(o.position==="left"?(u=r+e,h=it(l,i,n),c=je*-.5):(u=s-e,h=it(l,n,i),c=je*.5),d=i-n),{titleX:u,titleY:h,maxWidth:d,rotation:c}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const r=lt(n.font),s=r.lineHeight/2+this._padding.top,{titleX:o,titleY:l,maxWidth:c,rotation:d}=this._drawArgs(s);ha(e,n.text,0,0,r,{color:n.color,maxWidth:c,rotation:d,textAlign:Qh(n.align),textBaseline:"middle",translation:[o,l]})}}function H6(t,e){const n=new kv({ctx:t.ctx,options:e,chart:t});It.configure(t,n,e),It.addBox(t,n),t.titleBlock=n}var U6={id:"title",_element:kv,start(t,e,n){H6(t,n)},stop(t){const e=t.titleBlock;It.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const r=t.titleBlock;It.configure(t,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ss={average(t){if(!t.length)return!1;let e,n,r=new Set,i=0,s=0;for(e=0,n=t.length;e<n;++e){const l=t[e].element;if(l&&l.hasValue()){const c=l.tooltipPosition();r.add(c.x),i+=c.y,++s}}return s===0||r.size===0?!1:{x:[...r].reduce((l,c)=>l+c)/r.size,y:i/s}},nearest(t,e){if(!t.length)return!1;let n=e.x,r=e.y,i=Number.POSITIVE_INFINITY,s,o,l;for(s=0,o=t.length;s<o;++s){const c=t[s].element;if(c&&c.hasValue()){const d=c.getCenterPoint(),u=bu(e,d);u<i&&(i=u,l=c)}}if(l){const c=l.tooltipPosition();n=c.x,r=c.y}return{x:n,y:r}}};function un(t,e){return e&&($e(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function _n(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function $6(t,e){const{element:n,datasetIndex:r,index:i}=e,s=t.getDatasetMeta(r).controller,{label:o,value:l}=s.getLabelAndValue(i);return{chart:t,label:o,parsed:s.getParsed(i),raw:t.data.datasets[r].data[i],formattedValue:l,dataset:s.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function tm(t,e){const n=t.chart.ctx,{body:r,footer:i,title:s}=t,{boxWidth:o,boxHeight:l}=e,c=lt(e.bodyFont),d=lt(e.titleFont),u=lt(e.footerFont),h=s.length,p=i.length,f=r.length,m=Ut(e.padding);let g=m.height,b=0,x=r.reduce((k,j)=>k+j.before.length+j.lines.length+j.after.length,0);if(x+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*d.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),x){const k=e.displayColors?Math.max(l,c.lineHeight):c.lineHeight;g+=f*k+(x-f)*c.lineHeight+(x-1)*e.bodySpacing}p&&(g+=e.footerMarginTop+p*u.lineHeight+(p-1)*e.footerSpacing);let v=0;const y=function(k){b=Math.max(b,n.measureText(k).width+v)};return n.save(),n.font=d.string,ve(t.title,y),n.font=c.string,ve(t.beforeBody.concat(t.afterBody),y),v=e.displayColors?o+2+e.boxPadding:0,ve(r,k=>{ve(k.before,y),ve(k.lines,y),ve(k.after,y)}),v=0,n.font=u.string,ve(t.footer,y),n.restore(),b+=m.width,{width:b,height:g}}function W6(t,e){const{y:n,height:r}=e;return n<r/2?"top":n>t.height-r/2?"bottom":"center"}function V6(t,e,n,r){const{x:i,width:s}=r,o=n.caretSize+n.caretPadding;if(t==="left"&&i+s+o>e.width||t==="right"&&i-s-o<0)return!0}function q6(t,e,n,r){const{x:i,width:s}=n,{width:o,chartArea:{left:l,right:c}}=t;let d="center";return r==="center"?d=i<=(l+c)/2?"left":"right":i<=s/2?d="left":i>=o-s/2&&(d="right"),V6(d,t,e,n)&&(d="center"),d}function nm(t,e,n){const r=n.yAlign||e.yAlign||W6(t,n);return{xAlign:n.xAlign||e.xAlign||q6(t,e,n,r),yAlign:r}}function Y6(t,e){let{x:n,width:r}=t;return e==="right"?n-=r:e==="center"&&(n-=r/2),n}function Z6(t,e,n){let{y:r,height:i}=t;return e==="top"?r+=n:e==="bottom"?r-=i+n:r-=i/2,r}function rm(t,e,n,r){const{caretSize:i,caretPadding:s,cornerRadius:o}=t,{xAlign:l,yAlign:c}=n,d=i+s,{topLeft:u,topRight:h,bottomLeft:p,bottomRight:f}=ji(o);let m=Y6(e,l);const g=Z6(e,c,d);return c==="center"?l==="left"?m+=d:l==="right"&&(m-=d):l==="left"?m-=Math.max(u,p)+i:l==="right"&&(m+=Math.max(h,f)+i),{x:ot(m,0,r.width-e.width),y:ot(g,0,r.height-e.height)}}function jo(t,e,n){const r=Ut(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function im(t){return un([],_n(t))}function G6(t,e,n){return Xr(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function sm(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const _v={beforeTitle:jn,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return n[e.dataIndex]}return""},afterTitle:jn,beforeBody:jn,beforeLabel:jn,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return ge(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:jn,afterBody:jn,beforeFooter:jn,footer:jn,afterFooter:jn};function gt(t,e,n,r){const i=t[e].call(n,r);return typeof i>"u"?_v[e].call(n,r):i}class Su extends nn{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,r=this.options.setContext(this.getContext()),i=r.enabled&&n.options.animation&&r.animations,s=new ov(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(s)),s}getContext(){return this.$context||(this.$context=G6(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:r}=n,i=gt(r,"beforeTitle",this,e),s=gt(r,"title",this,e),o=gt(r,"afterTitle",this,e);let l=[];return l=un(l,_n(i)),l=un(l,_n(s)),l=un(l,_n(o)),l}getBeforeBody(e,n){return im(gt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:r}=n,i=[];return ve(e,s=>{const o={before:[],lines:[],after:[]},l=sm(r,s);un(o.before,_n(gt(l,"beforeLabel",this,s))),un(o.lines,gt(l,"label",this,s)),un(o.after,_n(gt(l,"afterLabel",this,s))),i.push(o)}),i}getAfterBody(e,n){return im(gt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:r}=n,i=gt(r,"beforeFooter",this,e),s=gt(r,"footer",this,e),o=gt(r,"afterFooter",this,e);let l=[];return l=un(l,_n(i)),l=un(l,_n(s)),l=un(l,_n(o)),l}_createItems(e){const n=this._active,r=this.chart.data,i=[],s=[],o=[];let l=[],c,d;for(c=0,d=n.length;c<d;++c)l.push($6(this.chart,n[c]));return e.filter&&(l=l.filter((u,h,p)=>e.filter(u,h,p,r))),e.itemSort&&(l=l.sort((u,h)=>e.itemSort(u,h,r))),ve(l,u=>{const h=sm(e.callbacks,u);i.push(gt(h,"labelColor",this,u)),s.push(gt(h,"labelPointStyle",this,u)),o.push(gt(h,"labelTextColor",this,u))}),this.labelColors=i,this.labelPointStyles=s,this.labelTextColors=o,this.dataPoints=l,l}update(e,n){const r=this.options.setContext(this.getContext()),i=this._active;let s,o=[];if(!i.length)this.opacity!==0&&(s={opacity:0});else{const l=Ss[r.position].call(this,i,this._eventPosition);o=this._createItems(r),this.title=this.getTitle(o,r),this.beforeBody=this.getBeforeBody(o,r),this.body=this.getBody(o,r),this.afterBody=this.getAfterBody(o,r),this.footer=this.getFooter(o,r);const c=this._size=tm(this,r),d=Object.assign({},l,c),u=nm(this.chart,r,d),h=rm(r,d,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,s={opacity:1,x:h.x,y:h.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}this._tooltipItems=o,this.$context=void 0,s&&this._resolveAnimations().update(this,s),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,r,i){const s=this.getCaretPosition(e,r,i);n.lineTo(s.x1,s.y1),n.lineTo(s.x2,s.y2),n.lineTo(s.x3,s.y3)}getCaretPosition(e,n,r){const{xAlign:i,yAlign:s}=this,{caretSize:o,cornerRadius:l}=r,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:h}=ji(l),{x:p,y:f}=e,{width:m,height:g}=n;let b,x,v,y,k,j;return s==="center"?(k=f+g/2,i==="left"?(b=p,x=b-o,y=k+o,j=k-o):(b=p+m,x=b+o,y=k-o,j=k+o),v=b):(i==="left"?x=p+Math.max(c,u)+o:i==="right"?x=p+m-Math.max(d,h)-o:x=this.caretX,s==="top"?(y=f,k=y-o,b=x-o,v=x+o):(y=f+g,k=y+o,b=x+o,v=x-o),j=y),{x1:b,x2:x,x3:v,y1:y,y2:k,y3:j}}drawTitle(e,n,r){const i=this.title,s=i.length;let o,l,c;if(s){const d=ki(r.rtl,this.x,this.width);for(e.x=jo(this,r.titleAlign,r),n.textAlign=d.textAlign(r.titleAlign),n.textBaseline="middle",o=lt(r.titleFont),l=r.titleSpacing,n.fillStyle=r.titleColor,n.font=o.string,c=0;c<s;++c)n.fillText(i[c],d.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+l,c+1===s&&(e.y+=r.titleMarginBottom-l)}}_drawColorBox(e,n,r,i,s){const o=this.labelColors[r],l=this.labelPointStyles[r],{boxHeight:c,boxWidth:d}=s,u=lt(s.bodyFont),h=jo(this,"left",s),p=i.x(h),f=c<u.lineHeight?(u.lineHeight-c)/2:0,m=n.y+f;if(s.usePointStyle){const g={radius:Math.min(d,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},b=i.leftForLtr(p,d)+d/2,x=m+c/2;e.strokeStyle=s.multiKeyBackground,e.fillStyle=s.multiKeyBackground,wu(e,g,b,x),e.strokeStyle=o.borderColor,e.fillStyle=o.backgroundColor,wu(e,g,b,x)}else{e.lineWidth=he(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,e.strokeStyle=o.borderColor,e.setLineDash(o.borderDash||[]),e.lineDashOffset=o.borderDashOffset||0;const g=i.leftForLtr(p,d),b=i.leftForLtr(i.xPlus(p,1),d-2),x=ji(o.borderRadius);Object.values(x).some(v=>v!==0)?(e.beginPath(),e.fillStyle=s.multiKeyBackground,zl(e,{x:g,y:m,w:d,h:c,radius:x}),e.fill(),e.stroke(),e.fillStyle=o.backgroundColor,e.beginPath(),zl(e,{x:b,y:m+1,w:d-2,h:c-2,radius:x}),e.fill()):(e.fillStyle=s.multiKeyBackground,e.fillRect(g,m,d,c),e.strokeRect(g,m,d,c),e.fillStyle=o.backgroundColor,e.fillRect(b,m+1,d-2,c-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,n,r){const{body:i}=this,{bodySpacing:s,bodyAlign:o,displayColors:l,boxHeight:c,boxWidth:d,boxPadding:u}=r,h=lt(r.bodyFont);let p=h.lineHeight,f=0;const m=ki(r.rtl,this.x,this.width),g=function(N){n.fillText(N,m.x(e.x+f),e.y+p/2),e.y+=p+s},b=m.textAlign(o);let x,v,y,k,j,S,_;for(n.textAlign=o,n.textBaseline="middle",n.font=h.string,e.x=jo(this,b,r),n.fillStyle=r.bodyColor,ve(this.beforeBody,g),f=l&&b!=="right"?o==="center"?d/2+u:d+2+u:0,k=0,S=i.length;k<S;++k){for(x=i[k],v=this.labelTextColors[k],n.fillStyle=v,ve(x.before,g),y=x.lines,l&&y.length&&(this._drawColorBox(n,e,k,m,r),p=Math.max(h.lineHeight,c)),j=0,_=y.length;j<_;++j)g(y[j]),p=h.lineHeight;ve(x.after,g)}f=0,p=h.lineHeight,ve(this.afterBody,g),e.y-=s}drawFooter(e,n,r){const i=this.footer,s=i.length;let o,l;if(s){const c=ki(r.rtl,this.x,this.width);for(e.x=jo(this,r.footerAlign,r),e.y+=r.footerMarginTop,n.textAlign=c.textAlign(r.footerAlign),n.textBaseline="middle",o=lt(r.footerFont),n.fillStyle=r.footerColor,n.font=o.string,l=0;l<s;++l)n.fillText(i[l],c.x(e.x),e.y+o.lineHeight/2),e.y+=o.lineHeight+r.footerSpacing}}drawBackground(e,n,r,i){const{xAlign:s,yAlign:o}=this,{x:l,y:c}=e,{width:d,height:u}=r,{topLeft:h,topRight:p,bottomLeft:f,bottomRight:m}=ji(i.cornerRadius);n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,n.lineWidth=i.borderWidth,n.beginPath(),n.moveTo(l+h,c),o==="top"&&this.drawCaret(e,n,r,i),n.lineTo(l+d-p,c),n.quadraticCurveTo(l+d,c,l+d,c+p),o==="center"&&s==="right"&&this.drawCaret(e,n,r,i),n.lineTo(l+d,c+u-m),n.quadraticCurveTo(l+d,c+u,l+d-m,c+u),o==="bottom"&&this.drawCaret(e,n,r,i),n.lineTo(l+f,c+u),n.quadraticCurveTo(l,c+u,l,c+u-f),o==="center"&&s==="left"&&this.drawCaret(e,n,r,i),n.lineTo(l,c+h),n.quadraticCurveTo(l,c,l+h,c),n.closePath(),n.fill(),i.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,r=this.$animations,i=r&&r.x,s=r&&r.y;if(i||s){const o=Ss[e.position].call(this,this._active,this._eventPosition);if(!o)return;const l=this._size=tm(this,e),c=Object.assign({},o,this._size),d=nm(n,e,c),u=rm(e,c,d,n);(i._to!==u.x||s._to!==u.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=l.width,this.height=l.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const i={width:this.width,height:this.height},s={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const o=Ut(n.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&l&&(e.save(),e.globalAlpha=r,this.drawBackground(s,e,i,n),iv(e,n.textDirection),s.y+=o.top,this.drawTitle(s,e,n),this.drawBody(s,e,n),this.drawFooter(s,e,n),sv(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const r=this._active,i=e.map(({datasetIndex:l,index:c})=>{const d=this.chart.getDatasetMeta(l);if(!d)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:d.data[c],index:c}}),s=!Sl(r,i),o=this._positionChanged(i,n);(s||o)&&(this._active=i,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,s=this._active||[],o=this._getActiveElements(e,s,n,r),l=this._positionChanged(o,e),c=n||!Sl(o,s)||l;return c&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),c}_getActiveElements(e,n,r,i){const s=this.options;if(e.type==="mouseout")return[];if(!i)return n.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);const o=this.chart.getElementsAtEventForMode(e,s.mode,s,r);return s.reverse&&o.reverse(),o}_positionChanged(e,n){const{caretX:r,caretY:i,options:s}=this,o=Ss[s.position].call(this,e,n);return o!==!1&&(r!==o.x||i!==o.y)}}X(Su,"positioners",Ss);var K6={id:"tooltip",_element:Su,positioners:Ss,afterInit(t,e,n){n&&(t.tooltip=new Su({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:_v},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const X6=(t,e,n,r)=>(typeof e=="string"?(n=t.push(e)-1,r.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function Q6(t,e,n,r){const i=t.indexOf(e);if(i===-1)return X6(t,e,n,r);const s=t.lastIndexOf(e);return i!==s?n:i}const J6=(t,e)=>t===null?null:ot(Math.round(t),0,e);function am(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Nu extends Ki{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:i,label:s}of n)r[i]===s&&r.splice(i,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(ge(e))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===e?n:Q6(r,e,se(n,e),this._addedLabels),J6(n,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),n||(i=this.getLabels().length-1)),this.min=r,this.max=i}buildTicks(){const e=this.min,n=this.max,r=this.options.offset,i=[];let s=this.getLabels();s=e===0&&n===s.length-1?s:s.slice(e,n+1),this._valueRange=Math.max(s.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let o=e;o<=n;o++)i.push({value:o});return i}getLabelForValue(e){return am.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}X(Nu,"id","category"),X(Nu,"defaults",{ticks:{callback:am}});function e3(t,e){const n=[],{bounds:i,step:s,min:o,max:l,precision:c,count:d,maxTicks:u,maxDigits:h,includeBounds:p}=t,f=s||1,m=u-1,{min:g,max:b}=e,x=!ge(o),v=!ge(l),y=!ge(d),k=(b-g)/(h+1);let j=l0((b-g)/m/f)*f,S,_,N,A;if(j<1e-14&&!x&&!v)return[{value:g},{value:b}];A=Math.ceil(b/j)-Math.floor(g/j),A>m&&(j=l0(A*j/m/f)*f),ge(c)||(S=Math.pow(10,c),j=Math.ceil(j*S)/S),i==="ticks"?(_=Math.floor(g/j)*j,N=Math.ceil(b/j)*j):(_=g,N=b),x&&v&&s&&w5((l-o)/s,j/1e3)?(A=Math.round(Math.min((l-o)/j,u)),j=(l-o)/A,_=o,N=l):y?(_=x?o:_,N=v?l:N,A=d-1,j=(N-_)/A):(A=(N-_)/j,Fs(A,Math.round(A),j/1e3)?A=Math.round(A):A=Math.ceil(A));const E=Math.max(c0(j),c0(_));S=Math.pow(10,ge(c)?E:c),_=Math.round(_*S)/S,N=Math.round(N*S)/S;let C=0;for(x&&(p&&_!==o?(n.push({value:o}),_<o&&C++,Fs(Math.round((_+C*j)*S)/S,o,om(o,k,t))&&C++):_<o&&C++);C<A;++C){const B=Math.round((_+C*j)*S)/S;if(v&&B>l)break;n.push({value:B})}return v&&p&&N!==l?n.length&&Fs(n[n.length-1].value,l,om(l,k,t))?n[n.length-1].value=l:n.push({value:l}):(!v||N===l)&&n.push({value:N}),n}function om(t,e,{horizontal:n,minRotation:r}){const i=Tr(r),s=(n?Math.sin(i):Math.cos(i))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}class t3 extends Ki{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return ge(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:i,max:s}=this;const o=c=>i=n?i:c,l=c=>s=r?s:c;if(e){const c=xn(i),d=xn(s);c<0&&d<0?l(0):c>0&&d>0&&o(0)}if(i===s){let c=s===0?1:Math.abs(s*.05);l(s+c),e||o(i-c)}this.min=i,this.max=s}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=e,i;return r?(i=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),n=n||11),n&&(i=Math.min(n,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const i={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},s=this._range||this,o=e3(i,s);return e.bounds==="ticks"&&j5(o,this,"value"),e.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const e=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const i=(r-n)/Math.max(e.length-1,1)/2;n-=i,r+=i}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(e){return Gx(e,this.chart.options.locale,this.options.ticks.format)}}class Cu extends t3{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=Ht(e)?e:0,this.max=Ht(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,r=Tr(this.options.ticks.minRotation),i=(e?Math.sin(r):Math.cos(r))||.001,s=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/i))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}X(Cu,"id","linear"),X(Cu,"defaults",{ticks:{callback:Kx.formatters.numeric}});const mc={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},bt=Object.keys(mc);function lm(t,e){return t-e}function cm(t,e){if(ge(e))return null;const n=t._adapter,{parser:r,round:i,isoWeekday:s}=t._parseOpts;let o=e;return typeof r=="function"&&(o=r(o)),Ht(o)||(o=typeof r=="string"?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i==="week"&&(da(s)||s===!0)?n.startOf(o,"isoWeek",s):n.startOf(o,i)),+o)}function dm(t,e,n,r){const i=bt.length;for(let s=bt.indexOf(t);s<i-1;++s){const o=mc[bt[s]],l=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((n-e)/(l*o.size))<=r)return bt[s]}return bt[i-1]}function n3(t,e,n,r,i){for(let s=bt.length-1;s>=bt.indexOf(n);s--){const o=bt[s];if(mc[o].common&&t._adapter.diff(i,r,o)>=e-1)return o}return bt[n?bt.indexOf(n):0]}function r3(t){for(let e=bt.indexOf(t)+1,n=bt.length;e<n;++e)if(mc[bt[e]].common)return bt[e]}function um(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:r,hi:i}=Xh(n,e),s=n[r]>=e?n[r]:n[i];t[s]=!0}}function i3(t,e,n,r){const i=t._adapter,s=+i.startOf(e[0].value,r),o=e[e.length-1].value;let l,c;for(l=s;l<=o;l=+i.add(l,1,r))c=n[l],c>=0&&(e[c].major=!0);return e}function hm(t,e,n){const r=[],i={},s=e.length;let o,l;for(o=0;o<s;++o)l=e[o],i[l]=o,r.push({value:l,major:!1});return s===0||!n?r:i3(t,r,i,n)}class Pl extends Ki{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const r=e.time||(e.time={}),i=this._adapter=new a_._date(e.adapters.date);i.init(n),Ds(r.displayFormats,i.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:cm(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,r=e.time.unit||"day";let{min:i,max:s,minDefined:o,maxDefined:l}=this.getUserBounds();function c(d){!o&&!isNaN(d.min)&&(i=Math.min(i,d.min)),!l&&!isNaN(d.max)&&(s=Math.max(s,d.max))}(!o||!l)&&(c(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&c(this.getMinMax(!1))),i=Ht(i)&&!isNaN(i)?i:+n.startOf(Date.now(),r),s=Ht(s)&&!isNaN(s)?s:+n.endOf(Date.now(),r)+1,this.min=Math.min(i,s-1),this.max=Math.max(i+1,s)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],r=e[e.length-1]),{min:n,max:r}}buildTicks(){const e=this.options,n=e.time,r=e.ticks,i=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const s=this.min,o=this.max,l=C5(i,s,o);return this._unit=n.unit||(r.autoSkip?dm(n.minUnit,this.min,this.max,this._getLabelCapacity(s)):n3(this,l.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:r3(this._unit),this.initOffsets(i),e.reverse&&l.reverse(),hm(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,r=0,i,s;this.options.offset&&e.length&&(i=this.getDecimalForValue(e[0]),e.length===1?n=1-i:n=(this.getDecimalForValue(e[1])-i)/2,s=this.getDecimalForValue(e[e.length-1]),e.length===1?r=s:r=(s-this.getDecimalForValue(e[e.length-2]))/2);const o=e.length<3?.5:.25;n=ot(n,0,o),r=ot(r,0,o),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const e=this._adapter,n=this.min,r=this.max,i=this.options,s=i.time,o=s.unit||dm(s.minUnit,n,r,this._getLabelCapacity(n)),l=se(i.ticks.stepSize,1),c=o==="week"?s.isoWeekday:!1,d=da(c)||c===!0,u={};let h=n,p,f;if(d&&(h=+e.startOf(h,"isoWeek",c)),h=+e.startOf(h,d?"day":o),e.diff(r,n,o)>1e5*l)throw new Error(n+" and "+r+" are too far apart with stepSize of "+l+" "+o);const m=i.ticks.source==="data"&&this.getDataTimestamps();for(p=h,f=0;p<r;p=+e.add(p,l,o),f++)um(u,p,m);return(p===r||i.bounds==="ticks"||f===1)&&um(u,p,m),Object.keys(u).sort(lm).map(g=>+g)}getLabelForValue(e){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(e,r.tooltipFormat):n.format(e,r.displayFormats.datetime)}format(e,n){const i=this.options.time.displayFormats,s=this._unit,o=n||i[s];return this._adapter.format(e,o)}_tickFormatFunction(e,n,r,i){const s=this.options,o=s.ticks.callback;if(o)return Ce(o,[e,n,r],this);const l=s.time.displayFormats,c=this._unit,d=this._majorUnit,u=c&&l[c],h=d&&l[d],p=r[n],f=d&&h&&p&&p.major;return this._adapter.format(e,i||(f?h:u))}generateTickLabels(e){let n,r,i;for(n=0,r=e.length;n<r;++n)i=e[n],i.label=this._tickFormatFunction(i.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,r=this.ctx.measureText(e).width,i=Tr(this.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(i),o=Math.sin(i),l=this._resolveTickFontOptions(0).size;return{w:r*s+l*o,h:r*o+l*s}}_getLabelCapacity(e){const n=this.options.time,r=n.displayFormats,i=r[n.unit]||r.millisecond,s=this._tickFormatFunction(e,0,hm(this,[e],this._majorUnit),i),o=this._getLabelSize(s),l=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return l>0?l:1}getDataTimestamps(){let e=this._cache.data||[],n,r;if(e.length)return e;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(n=0,r=i.length;n<r;++n)e=e.concat(i[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,r;if(e.length)return e;const i=this.getLabels();for(n=0,r=i.length;n<r;++n)e.push(cm(this,i[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return qx(e.sort(lm))}}X(Pl,"id","time"),X(Pl,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ko(t,e,n){let r=0,i=t.length-1,s,o,l,c;n?(e>=t[r].pos&&e<=t[i].pos&&({lo:r,hi:i}=Ar(t,"pos",e)),{pos:s,time:l}=t[r],{pos:o,time:c}=t[i]):(e>=t[r].time&&e<=t[i].time&&({lo:r,hi:i}=Ar(t,"time",e)),{time:s,pos:l}=t[r],{time:o,pos:c}=t[i]);const d=o-s;return d?l+(c-l)*(e-s)/d:l}class pm extends Pl{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=ko(n,this.min),this._tableRange=ko(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:r}=this,i=[],s=[];let o,l,c,d,u;for(o=0,l=e.length;o<l;++o)d=e[o],d>=n&&d<=r&&i.push(d);if(i.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(o=0,l=i.length;o<l;++o)u=i[o+1],c=i[o-1],d=i[o],Math.round((u+c)/2)!==d&&s.push({time:d,pos:o/(l-1)});return s}_generate(){const e=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((i,s)=>i-s)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?e=this.normalize(n.concat(r)):e=n.length?n:r,e=this._cache.all=e,e}getDecimalForValue(e){return(ko(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,r=this.getDecimalForPixel(e)/n.factor-n.end;return ko(this._table,r*this._tableRange+this._minPos,!0)}}X(pm,"id","timeseries"),X(pm,"defaults",Pl.defaults);const Sv="label";function fm(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function s3(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Nv(t,e){t.labels=e}function Cv(t,e,n=Sv){const r=[];t.datasets=e.map(i=>{const s=t.datasets.find(o=>o[n]===i[n]);return!s||!i.data||r.includes(s)?{...i}:(r.push(s),Object.assign(s,i),s)})}function a3(t,e=Sv){const n={labels:[],datasets:[]};return Nv(n,t.labels),Cv(n,t.datasets,e),n}function o3(t,e){const{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:s,type:o,data:l,options:c,plugins:d=[],fallbackContent:u,updateMode:h,...p}=t,f=w.useRef(null),m=w.useRef(null),g=()=>{f.current&&(m.current=new fc(f.current,{type:o,data:a3(l,s),options:c&&{...c},plugins:d}),fm(e,m.current))},b=()=>{fm(e,null),m.current&&(m.current.destroy(),m.current=null)};return w.useEffect(()=>{!i&&m.current&&c&&s3(m.current,c)},[i,c]),w.useEffect(()=>{!i&&m.current&&Nv(m.current.config.data,l.labels)},[i,l.labels]),w.useEffect(()=>{!i&&m.current&&l.datasets&&Cv(m.current.config.data,l.datasets,s)},[i,l.datasets]),w.useEffect(()=>{m.current&&(i?(b(),setTimeout(g)):m.current.update(h))},[i,c,l.labels,l.datasets,h]),w.useEffect(()=>{m.current&&(b(),setTimeout(g))},[o]),w.useEffect(()=>(g(),()=>b()),[]),a.jsx("canvas",{ref:f,role:"img",height:n,width:r,...p,children:u})}const l3=w.forwardRef(o3);function zv(t,e){return fc.register(e),w.forwardRef((n,r)=>a.jsx(l3,{...n,ref:r,type:t}))}const c3=zv("line",Ho),mm=zv("bar",Bo);fc.register(Nu,Cu,Wo,_s,Vo,U6,K6,B6,ks);function d3(){const[t,e]=w.useState(null),[n,r]=w.useState(null),[i,s]=w.useState(!0),[o,l]=w.useState(null),[c,d]=w.useState(null),[u,h]=w.useState(null);w.useEffect(()=>{let f=!0;const m=new AbortController;return(async()=>{var g,b,x,v,y;try{const k=await Q.get("/admin/metrics",{signal:m.signal});if(!f)return;e(k.data);const[j,S,_]=await Promise.all([Q.get("/admin/metrics/charts/sales-trends",{signal:m.signal}),Q.get("/admin/metrics/charts/revenue-growth",{signal:m.signal}),Q.get("/admin/metrics/charts/user-activity",{signal:m.signal})]);if(!f)return;l(j.data),d(S.data),h(_.data),r(null)}catch(k){if(!f)return;const j=k;if(((g=j==null?void 0:j.response)==null?void 0:g.status)===401){try{window.location.href="/login"}catch{}return}const _=((x=(b=j==null?void 0:j.response)==null?void 0:b.data)==null?void 0:x.detail)||((y=(v=j==null?void 0:j.response)==null?void 0:v.data)==null?void 0:y.message);r(_||"Failed to load dashboard data")}finally{f&&s(!1)}})(),()=>{f=!1,m.abort()}},[]),w.useEffect(()=>{let f=!0;const g=setInterval(async()=>{try{const[b,x,v,y]=await Promise.all([Q.get("/admin/metrics"),Q.get("/admin/metrics/charts/sales-trends"),Q.get("/admin/metrics/charts/revenue-growth"),Q.get("/admin/metrics/charts/user-activity")]);if(!f)return;e(b.data),l(x.data),d(v.data),h(y.data)}catch{}},3e4);return()=>{f=!1,clearInterval(g)}},[]),w.useEffect(()=>{let f=!0,m=null;const g=()=>{if(!f)return;const b=localStorage.getItem("access_token");if(!b)return;const x=`${window.location.origin}/api/v1/admin/stream-metrics?token=${encodeURIComponent(b)}`;m=new EventSource(x),m.onmessage=v=>{if(f)try{const y=JSON.parse(v.data);y&&typeof y=="object"&&!y.error&&e(y)}catch{}},m.onerror=()=>{m&&(m.close(),m=null),setTimeout(g,5e3)}};return g(),()=>{f=!1,m&&m.close()}},[]);const p=w.useMemo(()=>({users:(t==null?void 0:t.total_users)??0,products:(t==null?void 0:t.total_products)??0,orders:(t==null?void 0:t.total_orders)??0,sales:(t==null?void 0:t.total_sales)??0,revenue:(t==null?void 0:t.total_revenue)??0}),[t]);return i?a.jsx("div",{className:"dashboard-page",children:a.jsxs("div",{className:"loading-state",children:[a.jsxs("div",{className:"loading-spinner",children:[a.jsx("div",{className:"spinner-ring"}),a.jsx("div",{className:"spinner-ring"}),a.jsx("div",{className:"spinner-ring"})]}),a.jsx("p",{children:"Loading dashboard..."})]})}):n?a.jsx("div",{className:"dashboard-page",children:a.jsxs("div",{className:"alert-error",role:"alert",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),a.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),a.jsx("span",{children:n})]})}):a.jsxs("div",{className:"dashboard-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("div",{className:"title-icon",children:a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),a.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),a.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]})}),"Dashboard Overview"]}),a.jsx("p",{className:"page-subtitle",children:"Real-time insights and analytics for your e-commerce platform"})]}),a.jsxs("div",{className:"header-badge",children:[a.jsx("div",{className:"live-indicator"}),a.jsx("span",{children:"Live Data"})]})]}),a.jsxs("div",{className:"metrics-grid",role:"region","aria-label":"Key performance indicators",children:[a.jsxs("div",{className:"metric-card users",children:[a.jsxs("div",{className:"metric-header",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"9",cy:"7",r:"4"}),a.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),a.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})}),a.jsx("div",{className:"metric-badge",children:a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),a.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Users"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:p.users.toLocaleString()}),a.jsx("div",{className:"metric-footer",children:a.jsx("span",{className:"metric-subtitle",children:"Registered accounts"})})]})]}),a.jsxs("div",{className:"metric-card products",children:[a.jsxs("div",{className:"metric-header",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),a.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})}),a.jsx("div",{className:"metric-badge",children:a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),a.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Products"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:p.products.toLocaleString()}),a.jsx("div",{className:"metric-footer",children:a.jsx("span",{className:"metric-subtitle",children:"In catalog"})})]})]}),a.jsxs("div",{className:"metric-card orders",children:[a.jsxs("div",{className:"metric-header",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("circle",{cx:"9",cy:"21",r:"1"}),a.jsx("circle",{cx:"20",cy:"21",r:"1"}),a.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]})}),a.jsx("div",{className:"metric-badge",children:a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),a.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Orders"}),a.jsx("div",{className:"metric-value","aria-live":"polite",children:p.orders.toLocaleString()}),a.jsx("div",{className:"metric-footer",children:a.jsx("span",{className:"metric-subtitle",children:"All time orders"})})]})]}),a.jsxs("div",{className:"metric-card revenue",children:[a.jsxs("div",{className:"metric-header",children:[a.jsx("div",{className:"metric-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),a.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})]})}),a.jsx("div",{className:"metric-badge",children:a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),a.jsx("polyline",{points:"17 6 23 6 23 12"})]})})]}),a.jsxs("div",{className:"metric-content",children:[a.jsx("div",{className:"metric-label",children:"Total Revenue"}),a.jsxs("div",{className:"metric-value","aria-live":"polite",children:["LKR ",Number.isFinite(p.revenue)?p.revenue.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"0.00"]}),a.jsx("div",{className:"metric-footer",children:a.jsx("span",{className:"metric-subtitle",children:"Total earnings"})})]})]})]}),a.jsxs("div",{className:"quick-stats-banner",children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"stat-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),a.jsxs("div",{className:"stat-info",children:[a.jsxs("div",{className:"stat-value",children:["LKR ",(p.revenue/p.orders||0).toFixed(2)]}),a.jsx("div",{className:"stat-name",children:"Avg Order Value"})]})]}),a.jsx("div",{className:"stat-divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"stat-icon",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),a.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),a.jsxs("div",{className:"stat-info",children:[a.jsxs("div",{className:"stat-value",children:[p.orders>0?(p.orders/p.users*100).toFixed(1):"0","%"]}),a.jsx("div",{className:"stat-name",children:"Order Rate"})]})]}),a.jsx("div",{className:"stat-divider"}),a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"stat-icon",children:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),a.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),a.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-value",children:p.products>0?(p.products/10).toFixed(0):"0"}),a.jsx("div",{className:"stat-name",children:"Product Categories"})]})]})]}),a.jsxs("div",{className:"charts-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"section-title",children:"Analytics & Insights"}),a.jsx("p",{className:"section-subtitle",children:"Track your business performance over time"})]}),a.jsxs("div",{className:"time-filter",children:[a.jsx("button",{className:"filter-btn active",children:"30D"}),a.jsx("button",{className:"filter-btn",children:"90D"}),a.jsx("button",{className:"filter-btn",children:"1Y"})]})]}),a.jsxs("div",{className:"charts-grid",children:[a.jsxs("div",{className:"chart-card featured",children:[a.jsxs("div",{className:"chart-header",children:[a.jsxs("div",{className:"chart-title-group",children:[a.jsx("h3",{className:"chart-title",children:"Sales Performance"}),a.jsx("p",{className:"chart-subtitle",children:"Last 30 days overview"})]}),a.jsxs("div",{className:"chart-legend",children:[a.jsxs("div",{className:"legend-item",children:[a.jsx("div",{className:"legend-dot orders"}),a.jsx("span",{children:"Orders"})]}),a.jsxs("div",{className:"legend-item",children:[a.jsx("div",{className:"legend-dot revenue"}),a.jsx("span",{children:"Revenue"})]})]})]}),a.jsx("div",{className:"chart-container",children:o!=null&&o.data?a.jsx(c3,{data:{labels:o.data.map(f=>new Date(f.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})),datasets:[{label:"Orders",data:o.data.map(f=>f.orders||0),borderColor:"#667eea",backgroundColor:"rgba(102, 126, 234, 0.1)",yAxisID:"y",tension:.4,fill:!0,borderWidth:3,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:"#667eea",pointBorderColor:"#fff",pointBorderWidth:2},{label:"Revenue (LKR)",data:o.data.map(f=>f.revenue||0),borderColor:"#10b981",backgroundColor:"rgba(16, 185, 129, 0.1)",yAxisID:"y1",tension:.4,fill:!0,borderWidth:3,pointRadius:4,pointHoverRadius:6,pointBackgroundColor:"#10b981",pointBorderColor:"#fff",pointBorderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",padding:12,titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:1,displayColors:!0,callbacks:{label:function(f){return f.datasetIndex===0?`Orders: ${f.parsed.y||0}`:`Revenue: LKR ${(f.parsed.y||0).toLocaleString()}`}}}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280",font:{size:11}}},y:{type:"linear",display:!0,position:"left",title:{display:!0,text:"Orders",color:"#667eea",font:{size:12,weight:"600"}},grid:{color:"rgba(0, 0, 0, 0.05)",drawBorder:!1},ticks:{color:"#6b7280",font:{size:11}}},y1:{type:"linear",display:!0,position:"right",title:{display:!0,text:"Revenue (LKR)",color:"#10b981",font:{size:12,weight:"600"}},grid:{drawOnChartArea:!1},ticks:{color:"#6b7280",font:{size:11}}}}}}):a.jsxs("div",{className:"chart-loading",children:[a.jsx("div",{className:"loading-spinner-small",children:a.jsx("div",{className:"spinner-ring-small"})}),a.jsx("p",{children:"Loading sales data..."})]})})]}),a.jsxs("div",{className:"chart-card",children:[a.jsx("div",{className:"chart-header",children:a.jsxs("div",{className:"chart-title-group",children:[a.jsx("h3",{className:"chart-title",children:"Revenue Growth"}),a.jsx("p",{className:"chart-subtitle",children:"Monthly performance"})]})}),a.jsx("div",{className:"chart-container",children:c!=null&&c.data?a.jsx(mm,{data:{labels:c.data.map(f=>{const[m,g]=(f.month||"").split("-");return new Date(parseInt(m),parseInt(g)-1).toLocaleDateString("en-US",{month:"short",year:"numeric"})}),datasets:[{label:"Revenue (LKR)",data:c.data.map(f=>f.revenue||0),backgroundColor:"rgba(16, 185, 129, 0.8)",borderColor:"#10b981",borderWidth:0,borderRadius:8,borderSkipped:!1,hoverBackgroundColor:"rgba(16, 185, 129, 1)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",padding:12,titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:1,callbacks:{label:function(f){return`Revenue: LKR ${(f.parsed.y||0).toLocaleString()}`}}}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.05)",drawBorder:!1},ticks:{color:"#6b7280",font:{size:11},callback:function(f){return"LKR "+f.toLocaleString()}}}}}}):a.jsxs("div",{className:"chart-loading",children:[a.jsx("div",{className:"loading-spinner-small",children:a.jsx("div",{className:"spinner-ring-small"})}),a.jsx("p",{children:"Loading revenue data..."})]})})]}),a.jsxs("div",{className:"chart-card",children:[a.jsx("div",{className:"chart-header",children:a.jsxs("div",{className:"chart-title-group",children:[a.jsx("h3",{className:"chart-title",children:"User Growth"}),a.jsx("p",{className:"chart-subtitle",children:"New registrations"})]})}),a.jsx("div",{className:"chart-container",children:u!=null&&u.data?a.jsx(mm,{data:{labels:u.data.map(f=>new Date(f.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})),datasets:[{label:"Registrations",data:u.data.map(f=>f.registrations||0),backgroundColor:"rgba(102, 126, 234, 0.8)",borderColor:"#667eea",borderWidth:0,borderRadius:8,borderSkipped:!1,hoverBackgroundColor:"rgba(102, 126, 234, 1)"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",padding:12,titleColor:"#fff",bodyColor:"#fff",borderColor:"rgba(255, 255, 255, 0.1)",borderWidth:1,callbacks:{label:function(f){return`Registrations: ${f.parsed.y}`}}}},scales:{x:{grid:{display:!1},ticks:{color:"#6b7280",font:{size:11}}},y:{beginAtZero:!0,grid:{color:"rgba(0, 0, 0, 0.05)",drawBorder:!1},ticks:{color:"#6b7280",font:{size:11},precision:0}}}}}):a.jsxs("div",{className:"chart-loading",children:[a.jsx("div",{className:"loading-spinner-small",children:a.jsx("div",{className:"spinner-ring-small"})}),a.jsx("p",{children:"Loading user data..."})]})})]})]})]}),a.jsx("style",{children:`
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
      `})]})}var zu=function(t,e){return zu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},zu(t,e)};function u3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");zu(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var Ye=function(){return Ye=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ye.apply(this,arguments)};var gm=!1,zr,Eu,Ru,qo,Yo,Ev,Zo,Mu,Pu,Tu,Rv,Au,Ou,Mv,Pv;function xt(){if(!gm){gm=!0;var t=navigator.userAgent,e=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),n=/(Mac OS X)|(Windows)|(Linux)/.exec(t);if(Au=/\b(iPhone|iP[ao]d)/.exec(t),Ou=/\b(iP[ao]d)/.exec(t),Tu=/Android/i.exec(t),Mv=/FBAN\/\w+;/i.exec(t),Pv=/Mobile/i.exec(t),Rv=!!/Win64/.exec(t),e){zr=e[1]?parseFloat(e[1]):e[5]?parseFloat(e[5]):NaN,zr&&document&&document.documentMode&&(zr=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(t);Ev=r?parseFloat(r[1])+4:zr,Eu=e[2]?parseFloat(e[2]):NaN,Ru=e[3]?parseFloat(e[3]):NaN,qo=e[4]?parseFloat(e[4]):NaN,qo?(e=/(?:Chrome\/(\d+\.\d+))/.exec(t),Yo=e&&e[1]?parseFloat(e[1]):NaN):Yo=NaN}else zr=Eu=Ru=Yo=qo=NaN;if(n){if(n[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);Zo=i?parseFloat(i[1].replace("_",".")):!0}else Zo=!1;Mu=!!n[2],Pu=!!n[3]}else Zo=Mu=Pu=!1}}var Lu={ie:function(){return xt()||zr},ieCompatibilityMode:function(){return xt()||Ev>zr},ie64:function(){return Lu.ie()&&Rv},firefox:function(){return xt()||Eu},opera:function(){return xt()||Ru},webkit:function(){return xt()||qo},safari:function(){return Lu.webkit()},chrome:function(){return xt()||Yo},windows:function(){return xt()||Mu},osx:function(){return xt()||Zo},linux:function(){return xt()||Pu},iphone:function(){return xt()||Au},mobile:function(){return xt()||Au||Ou||Tu||Pv},nativeApp:function(){return xt()||Mv},android:function(){return xt()||Tu},ipad:function(){return xt()||Ou}},h3=Lu,p3=!!(typeof window<"u"&&window.document&&window.document.createElement),f3={canUseDOM:p3},m3=f3,Tv=m3,Av;Tv.canUseDOM&&(Av=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function g3(t,e){if(!Tv.canUseDOM||e&&!("addEventListener"in document))return!1;var n="on"+t,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r=typeof i[n]=="function"}return!r&&Av&&t==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var x3=g3,v3=h3,b3=x3,xm=10,vm=40,bm=800;function Ov(t){var e=0,n=0,r=0,i=0;return"detail"in t&&(n=t.detail),"wheelDelta"in t&&(n=-t.wheelDelta/120),"wheelDeltaY"in t&&(n=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=n,n=0),r=e*xm,i=n*xm,"deltaY"in t&&(i=t.deltaY),"deltaX"in t&&(r=t.deltaX),(r||i)&&t.deltaMode&&(t.deltaMode==1?(r*=vm,i*=vm):(r*=bm,i*=bm)),r&&!e&&(e=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:e,spinY:n,pixelX:r,pixelY:i}}Ov.getEventType=function(){return v3.firefox()?"DOMMouseScroll":b3("wheel")?"wheel":"mousewheel"};var y3=Ov,w3=y3;const j3=Fm(w3);function k3(t,e,n,r,i,s){s===void 0&&(s=0);var o=Ii(t,e,s),l=o.width,c=o.height,d=Math.min(l,n),u=Math.min(c,r);return d>u*i?{width:u*i,height:u}:{width:d,height:d/i}}function _3(t){return t.width>t.height?t.width/t.naturalWidth:t.height/t.naturalHeight}function fs(t,e,n,r,i){i===void 0&&(i=0);var s=Ii(e.width,e.height,i),o=s.width,l=s.height;return{x:ym(t.x,o,n.width,r),y:ym(t.y,l,n.height,r)}}function ym(t,e,n,r){var i=e*r/2-n/2;return gc(t,-i,i)}function wm(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function jm(t,e){return Math.atan2(e.y-t.y,e.x-t.x)*180/Math.PI}function S3(t,e,n,r,i,s,o){s===void 0&&(s=0),o===void 0&&(o=!0);var l=o?N3:C3,c=Ii(e.width,e.height,s),d=Ii(e.naturalWidth,e.naturalHeight,s),u={x:l(100,((c.width-n.width/i)/2-t.x/i)/c.width*100),y:l(100,((c.height-n.height/i)/2-t.y/i)/c.height*100),width:l(100,n.width/c.width*100/i),height:l(100,n.height/c.height*100/i)},h=Math.round(l(d.width,u.width*d.width/100)),p=Math.round(l(d.height,u.height*d.height/100)),f=d.width>=d.height*r,m=f?{width:Math.round(p*r),height:p}:{width:h,height:Math.round(h/r)},g=Ye(Ye({},m),{x:Math.round(l(d.width-m.width,u.x*d.width/100)),y:Math.round(l(d.height-m.height,u.y*d.height/100))});return{croppedAreaPercentages:u,croppedAreaPixels:g}}function N3(t,e){return Math.min(t,Math.max(0,e))}function C3(t,e){return e}function z3(t,e,n,r,i,s){var o=Ii(e.width,e.height,n),l=gc(r.width/o.width*(100/t.width),i,s),c={x:l*o.width/2-r.width/2-o.width*l*(t.x/100),y:l*o.height/2-r.height/2-o.height*l*(t.y/100)};return{crop:c,zoom:l}}function E3(t,e,n){var r=_3(e);return n.height>n.width?n.height/(t.height*r):n.width/(t.width*r)}function R3(t,e,n,r,i,s){n===void 0&&(n=0);var o=Ii(e.naturalWidth,e.naturalHeight,n),l=gc(E3(t,e,r),i,s),c=r.height>r.width?r.height/t.height:r.width/t.width,d={x:((o.width-t.width)/2-t.x)*c,y:((o.height-t.height)/2-t.y)*c};return{crop:d,zoom:l}}function km(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function M3(t){return t*Math.PI/180}function Ii(t,e,n){var r=M3(n);return{width:Math.abs(Math.cos(r)*t)+Math.abs(Math.sin(r)*e),height:Math.abs(Math.sin(r)*t)+Math.abs(Math.cos(r)*e)}}function gc(t,e,n){return Math.min(Math.max(t,e),n)}function _o(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter(function(n){return typeof n=="string"&&n.length>0}).join(" ").trim()}var P3=`.reactEasyCrop_Container {
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
`,T3=1,A3=3,O3=1,Lv=function(t){u3(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.cropperRef=w.createRef(),n.imageRef=w.createRef(),n.videoRef=w.createRef(),n.containerPosition={x:0,y:0},n.containerRef=null,n.styleRef=null,n.containerRect=null,n.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},n.dragStartPosition={x:0,y:0},n.dragStartCrop={x:0,y:0},n.gestureZoomStart=0,n.gestureRotationStart=0,n.isTouching=!1,n.lastPinchDistance=0,n.lastPinchRotation=0,n.rafDragTimeout=null,n.rafPinchTimeout=null,n.wheelTimer=null,n.currentDoc=typeof document<"u"?document:null,n.currentWindow=typeof window<"u"?window:null,n.resizeObserver=null,n.previousCropSize=null,n.isInitialized=!1,n.state={cropSize:null,hasWheelJustStarted:!1,mediaObjectFit:void 0},n.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!n.containerRef)){var r=!0;n.resizeObserver=new window.ResizeObserver(function(i){if(r){r=!1;return}n.computeSizes()}),n.resizeObserver.observe(n.containerRef)}},n.preventZoomSafari=function(r){return r.preventDefault()},n.cleanEvents=function(){n.currentDoc&&(n.currentDoc.removeEventListener("mousemove",n.onMouseMove),n.currentDoc.removeEventListener("mouseup",n.onDragStopped),n.currentDoc.removeEventListener("touchmove",n.onTouchMove),n.currentDoc.removeEventListener("touchend",n.onDragStopped),n.currentDoc.removeEventListener("gesturechange",n.onGestureChange),n.currentDoc.removeEventListener("gestureend",n.onGestureEnd),n.currentDoc.removeEventListener("scroll",n.onScroll))},n.clearScrollEvent=function(){n.containerRef&&n.containerRef.removeEventListener("wheel",n.onWheel),n.wheelTimer&&clearTimeout(n.wheelTimer)},n.onMediaLoad=function(){var r=n.computeSizes();r&&(n.previousCropSize=r,n.emitCropData(),n.setInitialCrop(r),n.isInitialized=!0),n.props.onMediaLoaded&&n.props.onMediaLoaded(n.mediaSize)},n.setInitialCrop=function(r){if(n.props.initialCroppedAreaPercentages){var i=z3(n.props.initialCroppedAreaPercentages,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=i.crop,o=i.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}else if(n.props.initialCroppedAreaPixels){var l=R3(n.props.initialCroppedAreaPixels,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=l.crop,o=l.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}},n.computeSizes=function(){var r,i,s,o,l,c,d=n.imageRef.current||n.videoRef.current;if(d&&n.containerRef){n.containerRect=n.containerRef.getBoundingClientRect(),n.saveContainerPosition();var u=n.containerRect.width/n.containerRect.height,h=((r=n.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((i=n.videoRef.current)===null||i===void 0?void 0:i.videoWidth)||0,p=((s=n.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((o=n.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,f=d.offsetWidth<h||d.offsetHeight<p,m=h/p,g=void 0;if(f)switch(n.state.mediaObjectFit){default:case"contain":g=u>m?{width:n.containerRect.height*m,height:n.containerRect.height}:{width:n.containerRect.width,height:n.containerRect.width/m};break;case"horizontal-cover":g={width:n.containerRect.width,height:n.containerRect.width/m};break;case"vertical-cover":g={width:n.containerRect.height*m,height:n.containerRect.height};break}else g={width:d.offsetWidth,height:d.offsetHeight};n.mediaSize=Ye(Ye({},g),{naturalWidth:h,naturalHeight:p}),n.props.setMediaSize&&n.props.setMediaSize(n.mediaSize);var b=n.props.cropSize?n.props.cropSize:k3(n.mediaSize.width,n.mediaSize.height,n.containerRect.width,n.containerRect.height,n.props.aspect,n.props.rotation);return(((l=n.state.cropSize)===null||l===void 0?void 0:l.height)!==b.height||((c=n.state.cropSize)===null||c===void 0?void 0:c.width)!==b.width)&&n.props.onCropSizeChange&&n.props.onCropSizeChange(b),n.setState({cropSize:b},n.recomputeCropPosition),n.props.setCropSize&&n.props.setCropSize(b),b}},n.saveContainerPosition=function(){if(n.containerRef){var r=n.containerRef.getBoundingClientRect();n.containerPosition={x:r.left,y:r.top}}},n.onMouseDown=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("mousemove",n.onMouseMove),n.currentDoc.addEventListener("mouseup",n.onDragStopped),n.saveContainerPosition(),n.onDragStart(e.getMousePoint(r)))},n.onMouseMove=function(r){return n.onDrag(e.getMousePoint(r))},n.onScroll=function(r){n.currentDoc&&(r.preventDefault(),n.saveContainerPosition())},n.onTouchStart=function(r){n.currentDoc&&(n.isTouching=!0,!(n.props.onTouchRequest&&!n.props.onTouchRequest(r))&&(n.currentDoc.addEventListener("touchmove",n.onTouchMove,{passive:!1}),n.currentDoc.addEventListener("touchend",n.onDragStopped),n.saveContainerPosition(),r.touches.length===2?n.onPinchStart(r):r.touches.length===1&&n.onDragStart(e.getTouchPoint(r.touches[0]))))},n.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?n.onPinchMove(r):r.touches.length===1&&n.onDrag(e.getTouchPoint(r.touches[0]))},n.onGestureStart=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("gesturechange",n.onGestureChange),n.currentDoc.addEventListener("gestureend",n.onGestureEnd),n.gestureZoomStart=n.props.zoom,n.gestureRotationStart=n.props.rotation)},n.onGestureChange=function(r){if(r.preventDefault(),!n.isTouching){var i=e.getMousePoint(r),s=n.gestureZoomStart-1+r.scale;if(n.setNewZoom(s,i,{shouldUpdatePosition:!0}),n.props.onRotationChange){var o=n.gestureRotationStart+r.rotation;n.props.onRotationChange(o)}}},n.onGestureEnd=function(r){n.cleanEvents()},n.onDragStart=function(r){var i,s,o=r.x,l=r.y;n.dragStartPosition={x:o,y:l},n.dragStartCrop=Ye({},n.props.crop),(s=(i=n.props).onInteractionStart)===null||s===void 0||s.call(i)},n.onDrag=function(r){var i=r.x,s=r.y;n.currentWindow&&(n.rafDragTimeout&&n.currentWindow.cancelAnimationFrame(n.rafDragTimeout),n.rafDragTimeout=n.currentWindow.requestAnimationFrame(function(){if(n.state.cropSize&&!(i===void 0||s===void 0)){var o=i-n.dragStartPosition.x,l=s-n.dragStartPosition.y,c={x:n.dragStartCrop.x+o,y:n.dragStartCrop.y+l},d=n.props.restrictPosition?fs(c,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):c;n.props.onCropChange(d)}}))},n.onDragStopped=function(){var r,i;n.isTouching=!1,n.cleanEvents(),n.emitCropData(),(i=(r=n.props).onInteractionEnd)===null||i===void 0||i.call(r)},n.onWheel=function(r){if(n.currentWindow&&!(n.props.onWheelRequest&&!n.props.onWheelRequest(r))){r.preventDefault();var i=e.getMousePoint(r),s=j3(r).pixelY,o=n.props.zoom-s*n.props.zoomSpeed/200;n.setNewZoom(o,i,{shouldUpdatePosition:!0}),n.state.hasWheelJustStarted||n.setState({hasWheelJustStarted:!0},function(){var l,c;return(c=(l=n.props).onInteractionStart)===null||c===void 0?void 0:c.call(l)}),n.wheelTimer&&clearTimeout(n.wheelTimer),n.wheelTimer=n.currentWindow.setTimeout(function(){return n.setState({hasWheelJustStarted:!1},function(){var l,c;return(c=(l=n.props).onInteractionEnd)===null||c===void 0?void 0:c.call(l)})},250)}},n.getPointOnContainer=function(r,i){var s=r.x,o=r.y;if(!n.containerRect)throw new Error("The Cropper is not mounted");return{x:n.containerRect.width/2-(s-i.x),y:n.containerRect.height/2-(o-i.y)}},n.getPointOnMedia=function(r){var i=r.x,s=r.y,o=n.props,l=o.crop,c=o.zoom;return{x:(i+l.x)/c,y:(s+l.y)/c}},n.setNewZoom=function(r,i,s){var o=s===void 0?{}:s,l=o.shouldUpdatePosition,c=l===void 0?!0:l;if(!(!n.state.cropSize||!n.props.onZoomChange)){var d=gc(r,n.props.minZoom,n.props.maxZoom);if(c){var u=n.getPointOnContainer(i,n.containerPosition),h=n.getPointOnMedia(u),p={x:h.x*d-u.x,y:h.y*d-u.y},f=n.props.restrictPosition?fs(p,n.mediaSize,n.state.cropSize,d,n.props.rotation):p;n.props.onCropChange(f)}n.props.onZoomChange(d)}},n.getCropData=function(){if(!n.state.cropSize)return null;var r=n.props.restrictPosition?fs(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;return S3(r,n.mediaSize,n.state.cropSize,n.getAspect(),n.props.zoom,n.props.rotation,n.props.restrictPosition)},n.emitCropData=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropComplete&&n.props.onCropComplete(i,s),n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.emitCropAreaChange=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.recomputeCropPosition=function(){if(n.state.cropSize){var r=n.props.crop;if(n.isInitialized&&n.previousCropSize){var i=Math.abs(n.previousCropSize.width-n.state.cropSize.width)>1e-6||Math.abs(n.previousCropSize.height-n.state.cropSize.height)>1e-6;if(i){var s=n.state.cropSize.width/n.previousCropSize.width,o=n.state.cropSize.height/n.previousCropSize.height;r={x:n.props.crop.x*s,y:n.props.crop.y*o}}}var l=n.props.restrictPosition?fs(r,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):r;n.previousCropSize=n.state.cropSize,n.props.onCropChange(l),n.emitCropData()}},n.onKeyDown=function(r){var i,s,o=n.props,l=o.crop,c=o.onCropChange,d=o.keyboardStep,u=o.zoom,h=o.rotation,p=d;if(n.state.cropSize){r.shiftKey&&(p*=.2);var f=Ye({},l);switch(r.key){case"ArrowUp":f.y-=p,r.preventDefault();break;case"ArrowDown":f.y+=p,r.preventDefault();break;case"ArrowLeft":f.x-=p,r.preventDefault();break;case"ArrowRight":f.x+=p,r.preventDefault();break;default:return}n.props.restrictPosition&&(f=fs(f,n.mediaSize,n.state.cropSize,u,h)),r.repeat||(s=(i=n.props).onInteractionStart)===null||s===void 0||s.call(i),c(f)}},n.onKeyUp=function(r){var i,s;switch(r.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":r.preventDefault();break;default:return}n.emitCropData(),(s=(i=n.props).onInteractionEnd)===null||s===void 0||s.call(i)},n}return e.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.currentDoc.addEventListener("scroll",this.onScroll),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=P3,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef),this.props.setCropperRef&&this.props.setCropperRef(this.cropperRef))},e.prototype.componentWillUnmount=function(){var n,r;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(n=this.resizeObserver)===null||n===void 0||n.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((r=this.styleRef.parentNode)===null||r===void 0||r.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},e.prototype.componentDidUpdate=function(n){var r,i,s,o,l,c,d,u,h;n.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):n.aspect!==this.props.aspect?this.computeSizes():n.objectFit!==this.props.objectFit?this.computeSizes():n.zoom!==this.props.zoom?this.recomputeCropPosition():((r=n.cropSize)===null||r===void 0?void 0:r.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((s=n.cropSize)===null||s===void 0?void 0:s.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((l=n.crop)===null||l===void 0?void 0:l.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((d=n.crop)===null||d===void 0?void 0:d.y)!==((u=this.props.crop)===null||u===void 0?void 0:u.y))&&this.emitCropAreaChange(),n.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),n.video!==this.props.video&&((h=this.videoRef.current)===null||h===void 0||h.load());var p=this.getObjectFit();p!==this.state.mediaObjectFit&&this.setState({mediaObjectFit:p},this.computeSizes)},e.prototype.getAspect=function(){var n=this.props,r=n.cropSize,i=n.aspect;return r?r.width/r.height:i},e.prototype.getObjectFit=function(){var n,r,i,s;if(this.props.objectFit==="cover"){var o=this.imageRef.current||this.videoRef.current;if(o&&this.containerRef){this.containerRect=this.containerRef.getBoundingClientRect();var l=this.containerRect.width/this.containerRect.height,c=((n=this.imageRef.current)===null||n===void 0?void 0:n.naturalWidth)||((r=this.videoRef.current)===null||r===void 0?void 0:r.videoWidth)||0,d=((i=this.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((s=this.videoRef.current)===null||s===void 0?void 0:s.videoHeight)||0,u=c/d;return u<l?"horizontal-cover":"vertical-cover"}return"horizontal-cover"}return this.props.objectFit},e.prototype.onPinchStart=function(n){var r=e.getTouchPoint(n.touches[0]),i=e.getTouchPoint(n.touches[1]);this.lastPinchDistance=wm(r,i),this.lastPinchRotation=jm(r,i),this.onDragStart(km(r,i))},e.prototype.onPinchMove=function(n){var r=this;if(!(!this.currentDoc||!this.currentWindow)){var i=e.getTouchPoint(n.touches[0]),s=e.getTouchPoint(n.touches[1]),o=km(i,s);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var l=wm(i,s),c=r.props.zoom*(l/r.lastPinchDistance);r.setNewZoom(c,o,{shouldUpdatePosition:!1}),r.lastPinchDistance=l;var d=jm(i,s),u=r.props.rotation+(d-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(u),r.lastPinchRotation=d})}},e.prototype.render=function(){var n=this,r,i=this.props,s=i.image,o=i.video,l=i.mediaProps,c=i.cropperProps,d=i.transform,u=i.crop,h=u.x,p=u.y,f=i.rotation,m=i.zoom,g=i.cropShape,b=i.showGrid,x=i.roundCropAreaPixels,v=i.style,y=v.containerStyle,k=v.cropAreaStyle,j=v.mediaStyle,S=i.classes,_=S.containerClassName,N=S.cropAreaClassName,A=S.mediaClassName,E=(r=this.state.mediaObjectFit)!==null&&r!==void 0?r:this.getObjectFit();return w.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(B){return n.containerRef=B},"data-testid":"container",style:y,className:_o("reactEasyCrop_Container",_)},s?w.createElement("img",Ye({alt:"",className:_o("reactEasyCrop_Image",E==="contain"&&"reactEasyCrop_Contain",E==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",E==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",A)},l,{src:s,ref:this.imageRef,style:Ye(Ye({},j),{transform:d||"translate(".concat(h,"px, ").concat(p,"px) rotate(").concat(f,"deg) scale(").concat(m,")")}),onLoad:this.onMediaLoad})):o&&w.createElement("video",Ye({autoPlay:!0,playsInline:!0,loop:!0,muted:!0,className:_o("reactEasyCrop_Video",E==="contain"&&"reactEasyCrop_Contain",E==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",E==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",A)},l,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:Ye(Ye({},j),{transform:d||"translate(".concat(h,"px, ").concat(p,"px) rotate(").concat(f,"deg) scale(").concat(m,")")}),controls:!1}),(Array.isArray(o)?o:[{src:o}]).map(function(C){return w.createElement("source",Ye({key:C.src},C))})),this.state.cropSize&&w.createElement("div",Ye({ref:this.cropperRef,style:Ye(Ye({},k),{width:x?Math.round(this.state.cropSize.width):this.state.cropSize.width,height:x?Math.round(this.state.cropSize.height):this.state.cropSize.height}),tabIndex:0,onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,"data-testid":"cropper",className:_o("reactEasyCrop_CropArea",g==="round"&&"reactEasyCrop_CropAreaRound",b&&"reactEasyCrop_CropAreaGrid",N)},c)))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:A3,minZoom:T3,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},cropperProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0,keyboardStep:O3},e.getMousePoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},e.getTouchPoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},e}(w.Component);function L3(){var mp;const[t,e]=w.useState([]),[n,r]=w.useState({name:"",slug:"",price:0,stock:0,images:[],description:""}),[i,s]=w.useState([]),[o,l]=w.useState([]),[c,d]=w.useState(null),[u,h]=w.useState(!1),[p,f]=w.useState(!1),[m,g]=w.useState(null),[b,x]=w.useState(!1),[v,y]=w.useState(!1),[k,j]=w.useState(0),[S,_]=w.useState(!1),[N,A]=w.useState(0),[E,C]=w.useState({x:0,y:0}),[B,O]=w.useState(1),[L,P]=w.useState(null),F=w.useMemo(()=>{var ye;const T=n.name.trim(),U=n.slug.trim(),oe=((ye=n.description)==null?void 0:ye.trim())||"",le=Number.isFinite(n.price)&&n.price>=0,Se=Number.isInteger(n.stock)&&n.stock>=0;return{nameOk:T.length>1,slugOk:U.length>1,descriptionOk:oe.length>=10,priceOk:le,stockOk:Se}},[n]),W=F.nameOk&&F.slugOk&&F.descriptionOk&&F.priceOk&&F.stockOk;function M(T){const U=parseFloat(T);return Number.isFinite(U)&&U>=0?U:0}function z(T){const U=parseInt(T,10);return Number.isFinite(U)&&U>=0?U:0}async function H(){var T,U,oe,le,Se,ye;h(!0),d(null);try{const fe=await Q.get("/admin/products");e(Array.isArray((T=fe.data)==null?void 0:T.items)?fe.data.items:[])}catch(fe){const Y=fe;if(((U=Y==null?void 0:Y.response)==null?void 0:U.status)===401){try{window.location.href="/login"}catch{}return}d(((le=(oe=Y==null?void 0:Y.response)==null?void 0:oe.data)==null?void 0:le.detail)||((ye=(Se=Y==null?void 0:Y.response)==null?void 0:Se.data)==null?void 0:ye.message)||"Failed to load")}finally{h(!1)}}w.useEffect(()=>{H()},[]);async function G(T){var oe,le,Se,ye,fe;if(T.length===0)return[];console.log(`Uploading ${T.length} files...`);const U=[];for(const Y of T)try{console.log("Uploading file:",Y.name,Y.type,Y.size,"bytes");const me=new FormData;me.append("file",Y,Y.name);const we=await Q.post("/admin/products/upload",me);console.log("Upload successful, URL:",we.data.url),U.push(we.data.url)}catch(me){const we=me;if(console.error("Upload error for file:",Y.name,we),((oe=we==null?void 0:we.response)==null?void 0:oe.status)===401){console.error("Upload failed: 401 Unauthorized");try{window.location.href="/login"}catch{}return[]}const Ua=((Se=(le=we==null?void 0:we.response)==null?void 0:le.data)==null?void 0:Se.detail)||((fe=(ye=we==null?void 0:we.response)==null?void 0:ye.data)==null?void 0:fe.message)||"Upload failed";throw console.error("Upload failed with message:",Ua),new Error(`Failed to upload ${Y.name}: ${Ua}`)}return U}function J(T){const U=Array.from(T.target.files||[]);if(U.length>5){d("Maximum 5 images allowed per product");return}s(U);const oe=U.map(le=>URL.createObjectURL(le));l(oe),U.length>0&&(y(!0),j(0))}function xe(T){s(U=>U.filter((oe,le)=>le!==T)),l(U=>(URL.revokeObjectURL(U[T]),U.filter((oe,le)=>le!==T))),i.length<=1?y(!1):k>=i.length-1&&j(Math.max(0,i.length-2))}function pe(){j(T=>(T+1)%o.length)}function _e(){j(T=>(T-1+o.length)%o.length)}function Me(T){A(T),C({x:0,y:0}),O(1),P(null),_(!0)}const de=w.useCallback((T,U)=>{P(U)},[]);async function Ve(T,U){const oe=new Image;oe.src=T,await new Promise(ye=>{oe.onload=ye});const le=document.createElement("canvas"),Se=le.getContext("2d");if(!Se)throw new Error("Failed to get canvas context");return le.width=U.width,le.height=U.height,Se.drawImage(oe,U.x,U.y,U.width,U.height,0,0,U.width,U.height),new Promise((ye,fe)=>{le.toBlob(Y=>{Y?ye(Y):fe(new Error("Canvas is empty"))},"image/jpeg",.95)})}async function qe(){if(L)try{const T=o[N],U=await Ve(T,L),le=i[N].name.replace(/\.[^/.]+$/,"_cropped.jpg"),Se=new File([U],le,{type:"image/jpeg"});s(ye=>{const fe=[...ye];return fe[N]=Se,fe}),l(ye=>{const fe=[...ye];return URL.revokeObjectURL(fe[N]),fe[N]=URL.createObjectURL(Se),fe}),_(!1)}catch(T){console.error("Error cropping image:",T),d("Failed to crop image")}}async function dt(){var T,U,oe,le,Se,ye;if(d(null),!W){d("Please fill all fields correctly");return}if(i.length===0&&(!n.images||n.images.length===0)){d("Please add at least 1 image (maximum 5 images)");return}f(!0);try{console.log("Creating product, uploading images first..."),console.log("Selected files:",i.length,"files");const fe=await G(i);console.log("✅ Image upload complete! URLs:",fe);const me=[...n.images||[],...fe].slice(0,5);if(console.log("📸 Final images array:",me),me.length===0){d("At least 1 image is required"),f(!1);return}const we={name:n.name.trim(),slug:n.slug.trim(),description:(T=n.description)==null?void 0:T.trim(),price:n.price,stock:n.stock,images:me,is_published:!0};console.log("📦 Creating product with payload:",JSON.stringify(we,null,2));const Bn={id:`tmp-${Date.now()}`,...we,name:we.name||"",slug:we.slug||"",description:we.description||"",price:we.price||0,stock:we.stock||0,images:we.images||[]};e($a=>[Bn,...$a]);const Ua=await Q.post("/admin/products",we);console.log("✅ Product created successfully! Response:",Ua.data),r({name:"",slug:"",price:0,stock:0,images:[],description:""}),s([]),l($a=>($a.forEach(v2=>URL.revokeObjectURL(v2)),[])),y(!1),await H();try{localStorage.setItem("products:update",String(Date.now()))}catch{}}catch(fe){const Y=fe;if(((U=Y==null?void 0:Y.response)==null?void 0:U.status)===401){try{window.location.href="/login"}catch{}return}const Bn=((le=(oe=Y==null?void 0:Y.response)==null?void 0:oe.data)==null?void 0:le.detail)||((ye=(Se=Y==null?void 0:Y.response)==null?void 0:Se.data)==null?void 0:ye.message)||(Y==null?void 0:Y.message)||"Failed to create product";console.error("create product error",Y),d(Bn)}finally{f(!1)}}async function He(T,U){var oe,le,Se,ye,fe;d(null);try{e(Y=>Y.map(me=>me.id===T?{...me,...U}:me)),await Q.put(`/admin/products/${T}`,U)}catch(Y){const me=Y;if(((oe=me==null?void 0:me.response)==null?void 0:oe.status)===401){try{window.location.href="/login"}catch{}return}d(((Se=(le=me==null?void 0:me.response)==null?void 0:le.data)==null?void 0:Se.detail)||((fe=(ye=me==null?void 0:me.response)==null?void 0:ye.data)==null?void 0:fe.message)||"Failed to update"),await H()}}async function f2(T){var U,oe,le,Se,ye;d(null);try{const fe=t;e(Y=>Y.filter(me=>me.id!==T)),await Q.delete(`/admin/products/${T}`)}catch(fe){const Y=fe;if(((U=Y==null?void 0:Y.response)==null?void 0:U.status)===401){try{window.location.href="/login"}catch{}return}d(((le=(oe=Y==null?void 0:Y.response)==null?void 0:oe.data)==null?void 0:le.detail)||((ye=(Se=Y==null?void 0:Y.response)==null?void 0:Se.data)==null?void 0:ye.message)||"Failed to delete"),await H()}}function m2(T){g({...T}),x(!0),d(null)}function Ha(){g(null),x(!1),s([]),l(T=>(T.forEach(U=>URL.revokeObjectURL(U)),[])),d(null)}function g2(T){var U;m&&g({...m,images:((U=m.images)==null?void 0:U.filter((oe,le)=>le!==T))||[]})}async function x2(){var T,U,oe,le,Se,ye;if(!(!m||!m.id)){d(null),f(!0);try{const fe=await G(i),Y=[...m.images||[],...fe];if(Y.length===0){d("At least 1 image is required"),f(!1);return}if(Y.length>5){d("Maximum 5 images allowed"),f(!1);return}const me={name:m.name.trim(),slug:m.slug.trim(),description:(T=m.description)==null?void 0:T.trim(),price:m.price,stock:m.stock,images:Y};await Q.put(`/admin/products/${m.id}`,me),e(we=>we.map(Bn=>Bn.id===m.id?{...Bn,...me}:Bn)),Ha(),await H()}catch(fe){const Y=fe;if(((U=Y==null?void 0:Y.response)==null?void 0:U.status)===401){try{window.location.href="/login"}catch{}return}d(((le=(oe=Y==null?void 0:Y.response)==null?void 0:oe.data)==null?void 0:le.detail)||((ye=(Se=Y==null?void 0:Y.response)==null?void 0:Se.data)==null?void 0:ye.message)||"Failed to update product")}finally{f(!1)}}}return a.jsxs("div",{className:"products-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("div",{className:"title-icon-wrapper",children:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}),"Product Management"]}),a.jsx("p",{className:"page-subtitle",children:"Manage your product catalog and inventory"})]}),a.jsxs("div",{className:"page-header-stats",children:[a.jsxs("div",{className:"stat-card total",children:[a.jsx("div",{className:"stat-icon",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-value",children:t.length}),a.jsx("div",{className:"stat-label",children:"Total Products"})]})]}),a.jsxs("div",{className:"stat-card published",children:[a.jsx("div",{className:"stat-icon",children:a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-value",children:t.filter(T=>T.is_published).length}),a.jsx("div",{className:"stat-label",children:"Published"})]})]}),a.jsxs("div",{className:"stat-card draft",children:[a.jsx("div",{className:"stat-icon",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-value",children:t.filter(T=>!T.is_published).length}),a.jsx("div",{className:"stat-label",children:"Draft"})]})]})]})]}),c&&a.jsxs("div",{className:"alert-error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),a.jsx("span",{children:c})]}),a.jsxs("div",{className:"card-modern",children:[a.jsx("div",{className:"card-header",children:a.jsxs("div",{children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add New Product"]}),a.jsx("p",{className:"card-subtitle",children:"Fill in the product details and upload images"})]})}),a.jsxs("div",{className:"card-body",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),a.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Product Name",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{className:`form-input ${!F.nameOk&&n.name?"error":""}`,placeholder:"e.g., Premium Wireless Headphones",value:n.name,onChange:T=>r({...n,name:T.target.value})}),!F.nameOk&&n.name&&a.jsx("span",{className:"form-error",children:"Name must be at least 2 characters"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"})}),"URL Slug",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{className:`form-input ${!F.slugOk&&n.slug?"error":""}`,placeholder:"e.g., premium-wireless-headphones",value:n.slug,onChange:T=>r({...n,slug:T.target.value})}),!F.slugOk&&n.slug&&a.jsx("span",{className:"form-error",children:"Slug must be at least 2 characters"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"})]}),"Price (LKR)",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{className:`form-input ${!F.priceOk&&n.price>0?"error":""}`,placeholder:"e.g., 15000.00",type:"number",inputMode:"decimal",value:Number.isFinite(n.price)?n.price:0,onChange:T=>r({...n,price:M(T.target.value)}),min:0,step:"0.01"}),!F.priceOk&&n.price>0&&a.jsx("span",{className:"form-error",children:"Price must be ≥ 0"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),"Stock Quantity",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{className:`form-input ${!F.stockOk&&n.stock>0?"error":""}`,placeholder:"e.g., 50",type:"number",inputMode:"numeric",value:Number.isFinite(n.stock)?n.stock:0,onChange:T=>r({...n,stock:z(T.target.value)}),min:0,step:1}),!F.stockOk&&n.stock>0&&a.jsx("span",{className:"form-error",children:"Stock must be an integer ≥ 0"})]})]}),a.jsxs("div",{className:"form-group-full",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586a1 1 0 01.707.293l7.414 7.414a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 7.707A1 1 0 014 7V4zm2 0v3.586l6.293 6.293 3.586-3.586L9.586 4H6z"})}),"Product Description",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("textarea",{className:`form-input ${!F.descriptionOk&&n.description?"error":""}`,placeholder:"Describe your product in detail (minimum 10 characters)...",value:n.description||"",onChange:T=>r({...n,description:T.target.value}),rows:4}),!F.descriptionOk&&n.description&&a.jsx("span",{className:"form-error",children:"Description must be at least 10 characters"})]}),a.jsxs("div",{className:"form-group-full",children:[a.jsxs("label",{className:"form-label",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),"Product Images",a.jsxs("span",{className:"badge-count",children:[i.length,"/5"]}),a.jsx("span",{className:"required",children:"*"})]}),a.jsxs("div",{className:"upload-zone",children:[a.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:J,id:"file-upload",className:"file-input"}),a.jsxs("label",{htmlFor:"file-upload",className:"upload-button",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images"]}),i.length>0&&a.jsxs("button",{type:"button",onClick:()=>y(!0),className:"preview-button",children:[a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}),"Preview & Edit"]})]}),i.length>0&&a.jsx("div",{className:"image-preview-grid",children:o.map((T,U)=>a.jsxs("div",{className:"image-preview-item",children:[a.jsx("img",{src:T,alt:`Preview ${U+1}`}),a.jsxs("div",{className:"image-overlay",children:[a.jsx("button",{onClick:()=>Me(U),className:"btn-overlay btn-crop-overlay",type:"button",title:"Crop image",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})})}),a.jsx("button",{onClick:()=>xe(U),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})]}),a.jsx("div",{className:"image-badge",children:U+1})]},U))}),i.length===0&&a.jsxs("div",{className:"empty-state-upload",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),a.jsx("p",{children:"No images selected"}),a.jsx("span",{children:"Upload 1-5 product images"})]})]}),a.jsx("button",{onClick:dt,disabled:!W||p||i.length===0,type:"button",className:"btn-primary",children:p?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Creating Product..."]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"})}),"Add Product"]})})]})]}),a.jsxs("div",{className:"card-modern",style:{marginTop:24},children:[a.jsxs("div",{className:"card-header",children:[a.jsxs("div",{children:[a.jsxs("h2",{className:"card-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Products"]}),a.jsx("p",{className:"card-subtitle",children:"Manage existing products"})]}),a.jsxs("span",{className:"badge-count-lg",children:[t.length," total"]})]}),u?a.jsxs("div",{className:"loading-state",children:[a.jsxs("div",{className:"loading-spinner-modern",children:[a.jsx("div",{className:"spinner-ring-modern"}),a.jsx("div",{className:"spinner-ring-modern"}),a.jsx("div",{className:"spinner-ring-modern"})]}),a.jsx("p",{children:"Loading products..."})]}):t.length===0?a.jsxs("div",{className:"empty-state-large",children:[a.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"})}),a.jsx("h3",{children:"No Products Yet"}),a.jsx("p",{children:"Start by adding your first product using the form above"})]}):a.jsx("div",{className:"products-table-wrapper",children:a.jsxs("div",{className:"products-table",children:[a.jsxs("div",{className:"table-header",children:[a.jsx("div",{className:"th-product",children:"Product"}),a.jsx("div",{className:"th-slug",children:"Slug"}),a.jsx("div",{className:"th-price",children:"Price"}),a.jsx("div",{className:"th-stock",children:"Stock"}),a.jsx("div",{className:"th-status",children:"Status"}),a.jsx("div",{className:"th-actions",children:"Actions"})]}),t.map(T=>a.jsxs("div",{className:"table-row",children:[a.jsx("div",{className:"td-product",children:a.jsxs("div",{className:"product-cell",children:[T.images&&T.images.length>0?a.jsxs("div",{className:"product-images",children:[a.jsx("img",{src:T.images[0],alt:T.name,className:"product-thumbnail-main"}),T.images.length>1&&a.jsxs("span",{className:"image-count-badge",children:["+",T.images.length-1]})]}):a.jsx("div",{className:"no-image",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})})}),a.jsxs("div",{className:"product-info",children:[a.jsx("span",{className:"product-name",children:T.name}),T.description&&a.jsxs("span",{className:"product-desc",children:[T.description.substring(0,50),"..."]})]})]})}),a.jsx("div",{className:"td-slug",children:a.jsx("code",{children:T.slug})}),a.jsx("div",{className:"td-price",children:a.jsx("input",{type:"number",className:"inline-input",defaultValue:T.price,onBlur:U=>{const oe=M(U.target.value);T.id&&oe!==T.price&&He(T.id,{price:oe})},min:0,step:"0.01"})}),a.jsx("div",{className:"td-stock",children:a.jsx("input",{type:"number",className:"inline-input",defaultValue:T.stock,onBlur:U=>{const oe=z(U.target.value);T.id&&oe!==T.stock&&He(T.id,{stock:oe})},min:0,step:1})}),a.jsx("div",{className:"td-status",children:a.jsx("span",{className:`status-badge ${T.is_published?"published":"draft"}`,children:T.is_published?a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Published"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"})}),"Draft"]})})}),a.jsx("div",{className:"td-actions",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{onClick:()=>m2(T),type:"button",className:"btn-action btn-edit",title:"Edit product",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})}),a.jsx("button",{onClick:()=>T.id&&He(T.id,{is_published:!T.is_published}),type:"button",className:`btn-action ${T.is_published?"btn-unpublish":"btn-publish"}`,title:T.is_published?"Unpublish":"Publish",children:T.is_published?a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),a.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"})]}):a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"}),a.jsx("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})]})}),a.jsx("button",{onClick:()=>T.id&&f2(T.id),type:"button",className:"btn-action btn-delete",title:"Delete product",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},T.id||`${T.slug}-${T.name}`))]})})]}),b&&m&&a.jsx("div",{className:"modal-overlay",onClick:Ha,children:a.jsxs("div",{className:"modal-content-modern",onClick:T=>T.stopPropagation(),children:[a.jsxs("div",{className:"modal-header-modern",children:[a.jsxs("h2",{children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit Product"]}),a.jsx("button",{onClick:Ha,className:"btn-close",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),c&&a.jsxs("div",{className:"alert-error",style:{margin:"0 24px 16px"},children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),a.jsx("span",{children:c})]}),a.jsxs("div",{className:"modal-body-modern",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Product Name"}),a.jsx("input",{type:"text",className:"form-input",value:m.name,onChange:T=>g({...m,name:T.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Slug"}),a.jsx("input",{type:"text",className:"form-input",value:m.slug,onChange:T=>g({...m,slug:T.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Price (LKR)"}),a.jsx("input",{type:"number",className:"form-input",value:m.price,onChange:T=>g({...m,price:M(T.target.value)}),min:0,step:"0.01"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Stock"}),a.jsx("input",{type:"number",className:"form-input",value:m.stock,onChange:T=>g({...m,stock:z(T.target.value)}),min:0,step:1})]})]}),a.jsxs("div",{className:"form-group-full",children:[a.jsx("label",{className:"form-label",children:"Description"}),a.jsx("textarea",{className:"form-input",value:m.description||"",onChange:T=>g({...m,description:T.target.value}),rows:4})]}),a.jsxs("div",{className:"form-group-full",children:[a.jsxs("label",{className:"form-label",children:["Current Images (",((mp=m.images)==null?void 0:mp.length)||0,"/5)"]}),m.images&&m.images.length>0?a.jsx("div",{className:"image-preview-grid",children:m.images.map((T,U)=>a.jsxs("div",{className:"image-preview-item",children:[a.jsx("img",{src:T,alt:`Product ${U+1}`}),a.jsx("div",{className:"image-overlay",children:a.jsx("button",{onClick:()=>g2(U),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})}),a.jsx("div",{className:"image-badge",children:U+1})]},U))}):a.jsxs("div",{className:"empty-state-upload",children:[a.jsx("svg",{width:"48",height:"48",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"})}),a.jsx("p",{children:"No images yet"})]}),a.jsx("label",{className:"form-label",style:{marginTop:16},children:"Add New Images"}),a.jsxs("div",{className:"upload-zone",children:[a.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:J,id:"edit-file-upload",className:"file-input"}),a.jsxs("label",{htmlFor:"edit-file-upload",className:"upload-button",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"})}),"Choose Images"]})]}),o.length>0&&a.jsx("div",{className:"image-preview-grid",style:{marginTop:12},children:o.map((T,U)=>a.jsxs("div",{className:"image-preview-item",children:[a.jsx("img",{src:T,alt:`New ${U+1}`}),a.jsx("div",{className:"image-overlay",children:a.jsx("button",{onClick:()=>xe(U),className:"btn-overlay btn-remove-overlay",type:"button",children:"×"})}),a.jsx("div",{className:"image-badge new",children:"New"})]},U))})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{onClick:Ha,type:"button",className:"btn-secondary",children:"Cancel"}),a.jsx("button",{onClick:x2,disabled:p,type:"button",className:"btn-primary",children:p?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Saving..."]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Save Changes"]})})]})]})]})}),v&&i.length>0&&a.jsx("div",{className:"modal-overlay",onClick:()=>y(!1),children:a.jsxs("div",{className:"preview-modal-content",onClick:T=>T.stopPropagation(),children:[a.jsxs("div",{className:"preview-modal-header",children:[a.jsxs("h2",{children:["Image Preview (",k+1,"/",i.length,")"]}),a.jsx("button",{onClick:()=>y(!1),className:"btn-close",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),a.jsx("div",{className:"preview-image-container",children:o[k]&&a.jsx("img",{src:o[k],alt:`Preview ${k+1}`})}),a.jsxs("div",{className:"preview-controls",children:[a.jsxs("button",{onClick:_e,disabled:i.length<=1,className:"btn-nav",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"})}),"Previous"]}),a.jsxs("button",{onClick:()=>Me(k),className:"btn-crop-main",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})}),"Crop Image"]}),a.jsxs("button",{onClick:()=>xe(k),className:"btn-remove-main",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})}),"Remove"]}),a.jsxs("button",{onClick:pe,disabled:i.length<=1,className:"btn-nav",children:["Next",a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"})})]})]}),i.length>1&&a.jsx("div",{className:"preview-thumbnails",children:o.map((T,U)=>a.jsxs("div",{className:`preview-thumbnail ${U===k?"active":""}`,onClick:()=>j(U),children:[a.jsx("img",{src:T,alt:`Thumbnail ${U+1}`}),a.jsx("div",{className:"thumbnail-number",children:U+1})]},U))})]})}),S&&o[N]&&a.jsx("div",{className:"modal-overlay",onClick:()=>_(!1),children:a.jsxs("div",{className:"cropper-modal-content",onClick:T=>T.stopPropagation(),children:[a.jsxs("div",{className:"modal-header-modern",children:[a.jsxs("h2",{children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"})}),"Crop Image (",N+1,"/",i.length,")"]}),a.jsx("button",{onClick:()=>_(!1),className:"btn-close",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})})})]}),a.jsx("div",{className:"cropper-container",children:a.jsx(Lv,{image:o[N],crop:E,zoom:B,aspect:1,onCropChange:C,onZoomChange:O,onCropComplete:de})}),a.jsxs("div",{className:"cropper-controls",children:[a.jsxs("label",{className:"zoom-label",children:[a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"}),a.jsx("path",{fillRule:"evenodd",d:"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z"})]}),"Zoom: ",B.toFixed(1),"x"]}),a.jsx("input",{type:"range",min:1,max:3,step:.1,value:B,onChange:T=>O(Number(T.target.value)),className:"zoom-slider"})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{onClick:()=>_(!1),className:"btn-secondary",children:"Cancel"}),a.jsxs("button",{onClick:qe,className:"btn-primary",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Apply Crop"]})]})]})}),a.jsx("style",{children:`
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
      `})]})}function I3(){const[t,e]=w.useState([]),[n,r]=w.useState(null),[i,s]=w.useState(!1),[o,l]=w.useState(!1),c=w.useMemo(()=>t.map(p=>({...p,is_active:p.is_active??!0,is_staff:p.is_staff??!1,is_superuser:p.is_superuser??!1})).sort((p,f)=>(f.is_superuser?1:0)-(p.is_superuser?1:0)),[t]);async function d(){var p,f,m,g,b,x;s(!0),r(null);try{const v=await Q.get("/admin/users"),y=Array.isArray((p=v.data)==null?void 0:p.items)?v.data.items:[];e(y)}catch(v){const y=v;if(((f=y==null?void 0:y.response)==null?void 0:f.status)===401){try{window.location.href="/login"}catch{}return}r(((g=(m=y==null?void 0:y.response)==null?void 0:m.data)==null?void 0:g.detail)||((x=(b=y==null?void 0:y.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to load")}finally{s(!1)}}w.useEffect(()=>{d()},[]);async function u(p,f){var m,g,b,x,v;l(!0);try{await Q.put(`/admin/users/${p}/block`,null,{params:{block:f}}),await d()}catch(y){const k=y;if(((m=k==null?void 0:k.response)==null?void 0:m.status)===401){try{window.location.href="/login"}catch{}return}r(((b=(g=k==null?void 0:k.response)==null?void 0:g.data)==null?void 0:b.detail)||((v=(x=k==null?void 0:k.response)==null?void 0:x.data)==null?void 0:v.message)||"Failed to update user")}finally{l(!1)}}async function h(p){var f,m,g,b,x;l(!0);try{await Q.delete(`/admin/users/${p}`),await d()}catch(v){const y=v;if(((f=y==null?void 0:y.response)==null?void 0:f.status)===401){try{window.location.href="/login"}catch{}return}r(((g=(m=y==null?void 0:y.response)==null?void 0:m.data)==null?void 0:g.detail)||((x=(b=y==null?void 0:y.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to delete user")}finally{l(!1)}}return a.jsxs("div",{className:"users-page",children:[a.jsx("div",{className:"page-header",children:a.jsxs("div",{className:"page-header-content",children:[a.jsxs("h1",{className:"page-title",children:[a.jsx("div",{className:"title-icon-wrapper",children:a.jsx("svg",{width:"28",height:"28",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),"User Management"]}),a.jsx("p",{className:"page-subtitle",children:"Manage user accounts, permissions, and access control"})]})}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card-modern total",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Total Users"}),a.jsx("div",{className:"stat-value-modern",children:c.length})]})]}),a.jsxs("div",{className:"stat-card-modern active",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Active Users"}),a.jsx("div",{className:"stat-value-modern",children:c.filter(p=>p.is_active).length})]})]}),a.jsxs("div",{className:"stat-card-modern staff",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Staff Members"}),a.jsx("div",{className:"stat-value-modern",children:c.filter(p=>p.is_staff).length})]})]}),a.jsxs("div",{className:"stat-card-modern admins",children:[a.jsx("div",{className:"stat-icon-modern",children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),a.jsxs("div",{className:"stat-content-modern",children:[a.jsx("div",{className:"stat-label-modern",children:"Administrators"}),a.jsx("div",{className:"stat-value-modern",children:c.filter(p=>p.is_superuser).length})]})]})]}),n&&a.jsxs("div",{className:"alert-error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),a.jsx("span",{children:n})]}),a.jsxs("div",{className:"card-modern",children:[a.jsxs("div",{className:"card-header-users",children:[a.jsxs("div",{children:[a.jsxs("h2",{className:"card-title-users",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"})}),"All Users"]}),a.jsx("p",{className:"card-subtitle-users",children:"View and manage registered users"})]}),a.jsxs("span",{className:"badge-count-users",children:[c.length," total"]})]}),i?a.jsxs("div",{className:"loading-state",children:[a.jsxs("div",{className:"loading-spinner-modern",children:[a.jsx("div",{className:"spinner-ring-modern"}),a.jsx("div",{className:"spinner-ring-modern"}),a.jsx("div",{className:"spinner-ring-modern"})]}),a.jsx("p",{children:"Loading users..."})]}):c.length===0?a.jsxs("div",{className:"empty-state-large",children:[a.jsx("svg",{width:"80",height:"80",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})}),a.jsx("h3",{children:"No Users Yet"}),a.jsx("p",{children:"No registered users in the system"})]}):a.jsxs("div",{className:"users-table",children:[a.jsxs("div",{className:"table-header-users",children:[a.jsx("div",{className:"th-user",children:"User"}),a.jsx("div",{className:"th-status",children:"Status"}),a.jsx("div",{className:"th-role",children:"Staff"}),a.jsx("div",{className:"th-role",children:"Admin"}),a.jsx("div",{className:"th-actions-users",children:"Actions"})]}),c.map(p=>a.jsxs("div",{className:`table-row-users ${p.is_superuser?"admin-row":""}`,children:[a.jsx("div",{className:"td-user",children:a.jsxs("div",{className:"user-cell",children:[a.jsx("div",{className:"user-avatar",children:p.avatar_url?a.jsx("img",{src:p.avatar_url,alt:""}):p.email.charAt(0).toUpperCase()}),a.jsxs("div",{className:"user-info",children:[a.jsx("div",{className:"user-email",children:p.email}),a.jsxs("div",{className:"user-id",children:["ID: ",p.id.substring(0,8),"..."]})]})]})}),a.jsx("div",{className:"td-status",children:a.jsx("span",{className:`status-badge ${p.is_active?"active":"inactive"}`,children:p.is_active?a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Active"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}),"Blocked"]})})}),a.jsx("div",{className:"td-role",children:a.jsx("span",{className:`role-badge ${p.is_staff?"yes":"no"}`,children:p.is_staff?a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"})}),"Yes"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})}),"No"]})})}),a.jsx("div",{className:"td-role",children:a.jsx("span",{className:`role-badge ${p.is_superuser?"admin":"no"}`,children:p.is_superuser?a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Yes"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"})}),"No"]})})}),a.jsx("div",{className:"td-actions-users",children:p.is_superuser?a.jsxs("div",{className:"admin-indicator",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),a.jsx("span",{children:"System Admin"})]}):a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{onClick:()=>u(p.id,p.is_active),disabled:o,type:"button",className:`btn-action ${p.is_active?"btn-block":"btn-unblock"}`,title:p.is_active?"Block user":"Unblock user",children:p.is_active?a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"})}):a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})})}),a.jsx("button",{onClick:()=>h(p.id),disabled:o,type:"button",className:"btn-action btn-delete",title:"Delete user",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"})})})]})})]},p.id))]})]}),a.jsx("style",{children:`
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
      `})]})}function D3({children:t}){const{user:e,loading:n}=on(),r=Wt();return n?a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[a.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),a.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):e?e.is_staff||e.is_superuser?t:a.jsx(lu,{to:"/",replace:!0}):a.jsx(lu,{to:"/login",state:{from:r.pathname},replace:!0})}function $n({children:t}){const{user:e,accessToken:n,loading:r}=on(),i=Wt();return r?a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:[a.jsx("div",{style:{border:"3px solid #f3f3f3",borderTop:"3px solid var(--primary)",borderRadius:"50%",width:"40px",height:"40px",animation:"spin 1s linear infinite"}}),a.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]}):!e||!n?a.jsx(lu,{to:"/login",state:{from:i},replace:!0}):a.jsx(a.Fragment,{children:t})}function F3(){var d;const{pathname:t}=Wt(),{user:e,logout:n}=on(),r=sn(),[i,s]=w.useState(new Date),o=()=>{n(),r("/login")};w.useEffect(()=>{const u=setInterval(()=>{s(new Date)},1e3);return()=>clearInterval(u)},[]);const l=u=>u.toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"}),c=u=>u.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return a.jsxs("div",{className:"admin-container",children:[a.jsxs("div",{className:"animated-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"grid-pattern"})]}),a.jsxs("header",{className:"admin-header",children:[a.jsxs("div",{className:"admin-header-left",children:[a.jsx(Z,{to:"/",className:"admin-brand-link","aria-label":"Home",children:a.jsx("div",{className:"logo-container",children:a.jsxs("div",{className:"logo-wrapper",children:[a.jsx("img",{src:"/images/title1.png",alt:"Own Setup logo"}),a.jsx("div",{className:"logo-glow","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-1","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-2","aria-hidden":"true"}),a.jsx("div",{className:"logo-ring ring-3","aria-hidden":"true"})]})})}),a.jsxs("div",{className:"brand-info",children:[a.jsx("span",{className:"admin-brand animated-text",children:"Own Setup"}),a.jsx("span",{className:"brand-tagline",children:"Admin Dashboard"})]})]}),a.jsxs("div",{className:"admin-header-right",children:[a.jsxs("div",{className:"admin-clock",children:[a.jsx("div",{className:"clock-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"})})}),a.jsxs("div",{className:"clock-content",children:[a.jsx("div",{className:"clock-time",children:l(i)}),a.jsx("div",{className:"clock-date",children:c(i)})]})]}),a.jsxs("button",{className:"admin-btn-icon",title:"Notifications",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"})}),a.jsx("span",{className:"notification-badge",children:"3"}),a.jsx("span",{className:"btn-glow"})]}),a.jsxs("div",{className:"admin-user-menu",children:[a.jsxs("div",{className:"admin-user-info",children:[a.jsxs("div",{className:"admin-avatar",children:[a.jsx("div",{className:`avatar-inner ${e!=null&&e.avatar_url?"has-image":""}`,children:e!=null&&e.avatar_url?a.jsx("img",{src:e.avatar_url,alt:"Profile",style:{width:"100%",height:"100%",borderRadius:"12px",objectFit:"cover"}}):(d=e==null?void 0:e.email)==null?void 0:d.charAt(0).toUpperCase()}),a.jsx("div",{className:"avatar-ring"})]}),a.jsxs("div",{className:"admin-user-details",children:[a.jsx("div",{className:"admin-user-name",children:(e==null?void 0:e.full_name)||(e==null?void 0:e.email)}),a.jsxs("div",{className:"admin-user-role",children:[a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),e!=null&&e.is_superuser?"Super Admin":"Admin"]})]})]}),a.jsxs("button",{className:"admin-btn-logout",onClick:o,children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"})}),"Logout"]})]})]})]}),a.jsxs("div",{className:"admin-layout",children:[a.jsxs("aside",{className:"admin-sidebar",children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsx("h3",{children:"Navigation"}),a.jsx("div",{className:"sidebar-decoration"})]}),a.jsxs("nav",{className:"admin-nav",children:[a.jsxs(Z,{to:"/admin",className:`admin-nav-item ${t==="/admin"?"active":""}`,children:[a.jsx("div",{className:"nav-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})})}),a.jsx("span",{className:"nav-text",children:"Dashboard"}),a.jsx("div",{className:"nav-shine"})]}),a.jsxs(Z,{to:"/admin/products",className:`admin-nav-item ${t.startsWith("/admin/products")?"active":""}`,children:[a.jsx("div",{className:"nav-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}),a.jsx("span",{className:"nav-text",children:"Products"}),a.jsx("div",{className:"nav-shine"})]}),a.jsxs(Z,{to:"/admin/users",className:`admin-nav-item ${t.startsWith("/admin/users")?"active":""}`,children:[a.jsx("div",{className:"nav-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"})})}),a.jsx("span",{className:"nav-text",children:"Users"}),a.jsx("div",{className:"nav-shine"})]}),a.jsxs(Z,{to:"/admin/orders",className:`admin-nav-item ${t.startsWith("/admin/orders")?"active":""}`,children:[a.jsx("div",{className:"nav-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"})})}),a.jsx("span",{className:"nav-text",children:"Orders"}),a.jsx("div",{className:"nav-shine"})]}),a.jsx("div",{className:"admin-nav-divider",children:a.jsx("span",{children:"Quick Actions"})}),a.jsxs(Z,{to:"/",className:"admin-nav-item back-to-site",children:[a.jsx("div",{className:"nav-icon",children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"})})}),a.jsx("span",{className:"nav-text",children:"Back to Site"}),a.jsx("div",{className:"nav-shine"})]})]})]}),a.jsx("main",{className:"admin-main",children:a.jsx("div",{className:"content-wrapper",children:a.jsx(dx,{})})})]}),a.jsx("style",{children:`
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
      `})]})}function B3(){const[t,e]=w.useState([]),[n,r]=w.useState(!1),[i,s]=w.useState(null),[o,l]=hx(),[c,d]=w.useState(o.get("q")||""),[u,h]=w.useState(o.get("category")||"All"),[p,f]=w.useState(o.get("min")||""),[m,g]=w.useState(o.get("max")||""),[b,x]=w.useState(o.get("sort")||"newest"),[v,y]=w.useState(Number(o.get("page")||1)),[k,j]=w.useState(12),{add:S}=Gi();w.useEffect(()=>{let P=!1;async function F(){var M;r(!0),s(null);try{const z=await Ee.get("/api/v1/products");if(P)return;const H=(M=z.data)==null?void 0:M.items;H&&H.length?e(H):e([])}catch{P||e([])}finally{P||r(!1)}}F();function W(M){M.key==="products:update"&&F()}return window.addEventListener("storage",W),()=>{P=!0,window.removeEventListener("storage",W)}},[]),w.useEffect(()=>{const P=new URLSearchParams;c&&P.set("q",c),u&&u!=="All"&&P.set("category",u),p&&P.set("min",p),m&&P.set("max",m),b&&b!=="newest"&&P.set("sort",b),v!==1&&P.set("page",String(v)),l(P)},[c,u,p,m,b,v,l]);const _=w.useMemo(()=>{const P=new Set(["All"]);return t.forEach(F=>P.add(F.category||"Other")),Array.from(P)},[t]),N=w.useMemo(()=>{let P=[...t];if(c.trim()){const M=c.toLowerCase();P=P.filter(z=>z.name.toLowerCase().includes(M)||z.slug.toLowerCase().includes(M)||(z.category||"").toLowerCase().includes(M))}u!=="All"&&(P=P.filter(M=>(M.category||"Other")===u));const F=Number(p),W=Number(m);switch(!Number.isNaN(F)&&p!==""&&(P=P.filter(M=>M.price>=F)),!Number.isNaN(W)&&m!==""&&(P=P.filter(M=>M.price<=W)),b){case"price-asc":P.sort((M,z)=>M.price-z.price);break;case"price-desc":P.sort((M,z)=>z.price-M.price);break;case"name-asc":P.sort((M,z)=>M.name.localeCompare(z.name));break;case"name-desc":P.sort((M,z)=>z.name.localeCompare(M.name));break;default:P.sort((M,z)=>{const H=M.createdAt?Date.parse(M.createdAt):0;return(z.createdAt?Date.parse(z.createdAt):0)-H})}return P},[t,c,u,p,m,b]),A=N.length,E=Math.max(1,Math.ceil(A/k)),C=Math.min(v,E),B=(C-1)*k,O=N.slice(B,B+k);w.useEffect(()=>{v>E&&y(E)},[E,v]);const L=()=>{d(""),h("All"),f(""),g(""),x("newest"),y(1)};return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"shop-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Shop"}),a.jsx("h1",{className:"headline",children:"Find the next daily favorite"}),a.jsx("p",{className:"subhead",children:"Browse curated essentials across apparel, accessories, and more."})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"toolbar",children:[a.jsxs("div",{className:"toolbar-left",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"search",children:"Search"}),a.jsx("input",{id:"search",type:"search",placeholder:"Search products",value:c,onChange:P=>{d(P.target.value),y(1)}})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"category",children:"Category"}),a.jsx("select",{id:"category",value:u,onChange:P=>{h(P.target.value),y(1)},children:_.map(P=>a.jsx("option",{value:P,children:P},P))})]}),a.jsxs("div",{className:"field price",children:[a.jsx("label",{children:"Price"}),a.jsxs("div",{className:"price-row",children:[a.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Min",value:p,onChange:P=>{f(P.target.value),y(1)}}),a.jsx("span",{children:"—"}),a.jsx("input",{type:"number",min:"0",inputMode:"decimal",placeholder:"Max",value:m,onChange:P=>{g(P.target.value),y(1)}})]})]})]}),a.jsxs("div",{className:"toolbar-right",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"sort",children:"Sort"}),a.jsxs("select",{id:"sort",value:b,onChange:P=>x(P.target.value),children:[a.jsx("option",{value:"newest",children:"Newest"}),a.jsx("option",{value:"price-asc",children:"Price: Low to High"}),a.jsx("option",{value:"price-desc",children:"Price: High to Low"}),a.jsx("option",{value:"name-asc",children:"Name: A–Z"}),a.jsx("option",{value:"name-desc",children:"Name: Z–A"})]})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"perPage",children:"Per page"}),a.jsxs("select",{id:"perPage",value:k,onChange:P=>{j(Number(P.target.value)),y(1)},children:[a.jsx("option",{value:12,children:"12"}),a.jsx("option",{value:24,children:"24"}),a.jsx("option",{value:48,children:"48"})]})]}),a.jsx("button",{className:"btn btn-ghost",onClick:L,children:"Clear"})]})]}),n&&a.jsx("div",{className:"notice",children:"Loading products…"}),i&&a.jsx("div",{className:"error",children:"Could not load products. Showing demo catalog."}),!n&&O.length===0&&a.jsx("div",{className:"notice",children:"No products match the current filters."}),a.jsx("div",{className:"grid",children:O.map(P=>{var F;return a.jsxs("div",{className:"card",children:[a.jsx(Z,{to:`/product/${P.slug}`,className:"card-img",children:a.jsx("img",{src:((F=P.images)==null?void 0:F[0])||"https://via.placeholder.com/600x400",alt:P.name,loading:"lazy"})}),a.jsxs("div",{className:"card-body",children:[a.jsxs("div",{className:"meta",children:[a.jsx("span",{className:"tag",children:P.category||"General"}),a.jsxs("span",{className:"price",children:["LKR ",Number(P.price).toFixed(2)]})]}),a.jsx(Z,{to:`/product/${P.slug}`,className:"card-title",children:P.name}),a.jsxs("div",{className:"card-actions",children:[a.jsx("button",{className:"btn btn-primary",onClick:W=>{var H;const M=W.currentTarget.closest(".card"),z=M==null?void 0:M.querySelector("img");z&&_l(z),S({productId:P.id,slug:P.slug,name:P.name,price:P.price,image:(H=P.images)==null?void 0:H[0]})},children:"Add to Cart"}),a.jsx(Z,{to:`/product/${P.slug}`,className:"btn btn-ghost",children:"Details"})]})]})]},P.id)})}),a.jsxs("div",{className:"pagination",children:[a.jsx("button",{className:"btn btn-ghost",disabled:C<=1,onClick:()=>y(P=>Math.max(1,P-1)),children:"Prev"}),a.jsxs("span",{className:"page-info",children:["Page ",C," of ",E," • ",A," items"]}),a.jsx("button",{className:"btn btn-ghost",disabled:C>=E,onClick:()=>y(P=>Math.min(E,P+1)),children:"Next"})]})]})}),a.jsx("style",{children:`
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
      `})]})}function H3(){const{user:t}=on();return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"about-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"About Us"}),a.jsx("h1",{className:"headline",children:"Design-led essentials, made to last"}),a.jsx("p",{className:"subhead",children:"Everyday apparel and accessories built with comfort, durability, and timeless aesthetics at the core."}),t?a.jsxs("div",{className:"hero-ctas",children:[a.jsx(Z,{to:"/contact",className:"btn btn-primary",children:"Contact Us"}),a.jsx(Z,{to:"/shop",className:"btn btn-ghost",children:"Browse Collections"})]}):a.jsxs("div",{className:"hero-ctas",children:[a.jsx(Z,{to:"/login",className:"btn btn-primary",children:"Login to Shop"}),a.jsx(Z,{to:"/register",className:"btn btn-ghost",children:"Register"})]})]})})}),!t&&a.jsx("section",{className:"section",style:{background:"linear-gradient(135deg, rgba(109, 116, 255, 0.1), rgba(109, 40, 217, 0.05))",borderTop:"1px solid rgba(109, 116, 255, 0.2)",borderBottom:"1px solid rgba(109, 116, 255, 0.2)"},children:a.jsxs("div",{className:"container",style:{textAlign:"center",padding:"32px 20px"},children:[a.jsx("h2",{style:{fontSize:"28px",marginBottom:"12px",color:"var(--text)"},children:"🔐 Want to Learn More?"}),a.jsx("p",{style:{fontSize:"16px",color:"var(--muted)",marginBottom:"20px",maxWidth:"600px",margin:"0 auto 20px"},children:"Login or create an account to see our full story, team, values, and start exploring our collections!"}),a.jsxs("div",{style:{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},children:[a.jsx(Z,{to:"/login",className:"btn btn-primary",style:{fontSize:"16px",padding:"12px 24px"},children:"Login Now"}),a.jsx(Z,{to:"/register",className:"btn",style:{fontSize:"16px",padding:"12px 24px"},children:"Create Account"})]})]})}),t&&a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Our Story"}),a.jsx("p",{className:"lead",children:"Started as a small studio with a big belief: daily wear should feel great, look refined, and hold up over time. We partner with trusted makers and keep batches small, so attention to detail never slips."}),a.jsxs("div",{className:"timeline",children:[a.jsx("div",{className:"tl-item",children:a.jsxs("div",{className:"tl-content",children:[a.jsx("h3",{children:"Where it began"}),a.jsx("p",{children:"Sketches, fabric swatches, and countless prototypes—our journey started with a focus on essentials."})]})}),a.jsx("div",{className:"tl-item",children:a.jsxs("div",{className:"tl-content",children:[a.jsx("h3",{children:"Finding our partners"}),a.jsx("p",{children:"We sourced mills and workshops that matched our standards for consistency and fair practices."})]})}),a.jsx("div",{className:"tl-item",children:a.jsxs("div",{className:"tl-content",children:[a.jsx("h3",{children:"Refining the craft"}),a.jsx("p",{children:"With customer feedback, we tuned fits, finishes, and care guides to make pieces last longer."})]})})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Mission & Values"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Mission"}),a.jsx("p",{children:"Make everyday dressing simpler through reliable, comfortable essentials that blend form and function."})]}),a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Quality"}),a.jsx("p",{children:"From reinforced seams to color-fast dyes, we design beyond the first wear and wash."})]}),a.jsxs("div",{className:"card",children:[a.jsx("h3",{children:"Trust"}),a.jsx("p",{children:"Clear specs, honest descriptions, and responsive support keep decisions easy and informed."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Sustainability & Craft"}),a.jsxs("div",{className:"grid-2",children:[a.jsxs("div",{className:"info",children:[a.jsx("h3",{children:"Responsible choices"}),a.jsx("p",{children:"We prioritize durable textiles, mindful packaging, and small-batch production to reduce waste while keeping quality high."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Material-first selection with long-life wear in mind."}),a.jsx("li",{children:"Repair-friendly construction and care guides."}),a.jsx("li",{children:"Continuous iteration based on real-world use."})]})]}),a.jsxs("div",{className:"info",children:[a.jsx("h3",{children:"Attention to detail"}),a.jsx("p",{children:"Fit, finish, and feel are tested across sizes and seasons, ensuring each piece earns a place in daily rotation."}),a.jsxs("ul",{className:"bullets",children:[a.jsx("li",{children:"Reinforced stress points and reliable hardware."}),a.jsx("li",{children:"Neutral palettes for effortless pairing."}),a.jsx("li",{children:"Consistent measurements for repeat buys."})]})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Customer Promise"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"30-Day Returns"}),a.jsx("p",{children:"Hassle-free returns on unused items in original condition within 30 days."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Fast Support"}),a.jsx("p",{children:"Friendly assistance with sizing, care, and orders via chat or email."})]}),a.jsxs("div",{className:"mini-feature",children:[a.jsx("h3",{children:"Honest Pricing"}),a.jsx("p",{children:"Fair prices without inflated markups—value built into each piece."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"Who We Are"}),a.jsxs("div",{className:"grid-3",children:[a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Design Lead"}),a.jsx("p",{children:"Focuses on silhouettes, fit blocks, and fabric hand-feel for comfort and longevity."})]})]}),a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Production"}),a.jsx("p",{children:"Oversees sourcing, QC, and small-batch timelines to maintain consistency."})]})]}),a.jsxs("div",{className:"person",children:[a.jsx("div",{className:"avatar"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Care & Support"}),a.jsx("p",{children:"Helps with sizing, exchanges, and care tips to keep favorites in rotation."})]})]})]})]})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container",children:[a.jsx("h2",{className:"section-title",children:"FAQs"}),a.jsxs("div",{className:"faq",children:[a.jsxs("details",{children:[a.jsx("summary",{children:"What sizes do you carry?"}),a.jsx("p",{children:"Core styles generally run XS–XXL. Fit notes and measurements are listed on product pages."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"How do returns work?"}),a.jsx("p",{children:"Submit a request within 30 days for unused items. We’ll guide through label creation and refund steps."})]}),a.jsxs("details",{children:[a.jsx("summary",{children:"Do you ship internationally?"}),a.jsx("p",{children:"Yes, with tracked delivery options at checkout. Timelines vary by destination."})]})]})]})}),a.jsx("section",{className:"section alt",children:a.jsxs("div",{className:"container contact-cta",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"section-title",children:"Get in touch"}),a.jsx("p",{className:"lead",children:"Questions about sizing, care, or orders? The team is ready to help."})]}),a.jsxs("div",{className:"cta-buttons",children:[a.jsx(Z,{to:"/contact",className:"btn btn-primary",children:"Contact Support"}),a.jsx(Z,{to:"/shop",className:"btn btn-ghost",children:"Explore the Shop"})]})]})})]}),a.jsx("style",{children:`
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
      `})]})}const U3="mgvnjvjw",$3=()=>`https://formspree.io/f/${U3}`;function W3(){const[t,e]=w.useState({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"}),[n,r]=w.useState(!1),[i,s]=w.useState(null),[o,l]=w.useState(null),c=w.useRef(null);w.useEffect(()=>{i&&c.current&&c.current.focus(),o&&c.current&&c.current.focus()},[i,o]);const d=p=>{const{name:f,value:m}=p.target;e(g=>({...g,[f]:m}))},u=async p=>{var f;p.preventDefault(),r(!0),s(null),l(null);try{const m=$3();if(!m)throw new Error("Contact form is not configured. Missing VITE_FORMSPREE_FORM_ID.");const g={name:t.name,email:t.email,_replyto:t.email,subject:t.subject,message:t.message,order_id:t.orderId,preferred_channel:t.channel,_subject:`[Store Contact] ${t.subject}`},b=await fetch(m,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(g)});if(!b.ok){let x="Could not send message. Please try again.";try{const v=await b.json();(f=v==null?void 0:v.errors)!=null&&f.length&&(x=v.errors.map(y=>y.message).join(`
`))}catch{}throw new Error(x)}s("Message sent! We'll reply to your email within 1–2 business days."),e({name:"",email:"",subject:"",message:"",orderId:"",channel:"email"})}catch(m){const g=m instanceof Error?m.message:"Could not send message. Please try again or use another contact method.";l(g)}finally{r(!1)}},h=`https://wa.me/94768976222?text=${encodeURIComponent(`Hello, I need help with my order.
Name: ${t.name}
Email: ${t.email}
Order ID: ${t.orderId||"-"}
Subject: ${t.subject}
Message: ${t.message}`)}`;return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:"contact-hero",children:a.jsx("div",{className:"container hero-inner",children:a.jsxs("div",{children:[a.jsx("p",{className:"kicker",children:"Contact"}),a.jsx("h1",{className:"headline",children:"How can we help?"}),a.jsx("p",{className:"subhead",children:"Questions about orders, sizing, delivery, or returns—support is here."})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:"container contact-grid",children:[a.jsxs("div",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Send a message"}),a.jsxs("div",{ref:c,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[i&&a.jsx("div",{className:"alert success",children:i}),o&&a.jsx("div",{className:"alert error",children:o})]}),a.jsxs("form",{className:"form",onSubmit:u,noValidate:!0,children:[a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"name",children:["Name",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"name",name:"name",type:"text",required:!0,value:t.name,onChange:d,autoComplete:"name"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"email",children:["Email",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"email",name:"email",type:"email",required:!0,value:t.email,onChange:d,autoComplete:"email"})]})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"orderId",children:"Order ID"}),a.jsx("input",{id:"orderId",name:"orderId",type:"text",value:t.orderId,onChange:d,placeholder:"Optional, helps us locate your order"})]}),a.jsxs("div",{className:"field",children:[a.jsx("label",{htmlFor:"channel",children:"Preferred channel"}),a.jsxs("select",{id:"channel",name:"channel",value:t.channel,onChange:d,children:[a.jsx("option",{value:"email",children:"Email"}),a.jsx("option",{value:"phone",children:"Phone"}),a.jsx("option",{value:"whatsapp",children:"WhatsApp"})]})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"subject",children:["Subject",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("input",{id:"subject",name:"subject",type:"text",required:!0,value:t.subject,onChange:d})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"message",children:["Message",a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsx("textarea",{id:"message",name:"message",required:!0,rows:6,value:t.message,onChange:d})]}),a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n,children:n?"Sending…":"Send message"}),a.jsx("a",{className:"btn btn-ghost",href:h,target:"_blank",rel:"noopener noreferrer",children:"Message on WhatsApp"})]}),a.jsx("p",{className:"tiny muted",children:"Fields marked with * are required."})]})]}),a.jsxs("aside",{className:"panel",children:[a.jsx("h2",{className:"section-title",children:"Contact details"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"Email: memberofpfc20@gmail.com"}),a.jsx("li",{children:"Phone: +94 76 89 76 222"}),a.jsx("li",{children:"WhatsApp: +94 76 897 6222"}),a.jsx("li",{children:"Address: 252/1A Mannar Road , Puttalam"}),a.jsx("li",{children:"Hours: Mon–Fri, 9:00–17:00 (UTC+5:30)"}),a.jsx("li",{children:"Response time: within 1–2 business days"})]}),a.jsx("div",{className:"divider"}),a.jsx("h3",{children:"Quick help"}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:a.jsx("a",{href:"/faq",children:"FAQ"})}),a.jsx("li",{children:a.jsx("a",{href:"/shipping-returns",children:"Shipping & Returns"})}),a.jsx("li",{children:a.jsx("a",{href:"/orders",children:"Track orders"})}),a.jsx("li",{children:a.jsx("a",{href:"/care",children:"Care guides"})})]}),a.jsx("div",{className:"mapbox",children:a.jsx("div",{className:"map-fallback",children:"Map placeholder"})})]})]})}),a.jsx("style",{children:`
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
 */const V3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q3=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),_m=t=>{const e=q3(t);return e.charAt(0).toUpperCase()+e.slice(1)},Iv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),Y3=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=w.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},c)=>w.createElement("svg",{ref:c,...Z3,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Iv("lucide",i),...!s&&!Y3(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,u])=>w.createElement(d,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=(t,e)=>{const n=w.forwardRef(({className:r,...i},s)=>w.createElement(G3,{ref:s,iconNode:e,className:Iv(`lucide-${V3(_m(t))}`,`lucide-${t}`,r),...i}));return n.displayName=_m(t),n};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],X3=wn("arrow-up",K3);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],J3=wn("book",Q3);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],tS=wn("chevron-down",eS);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Sm=wn("circle-question-mark",nS);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],iS=wn("external-link",rS);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aS=wn("funnel",sS);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],lS=wn("hash",oS);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Nm=wn("message-circle",cS);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Cm=wn("search",dS);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],hS=wn("star",uS),pS=()=>{const[t,e]=w.useState(""),[n,r]=w.useState(new Set),[i,s]=w.useState(!1),[o,l]=w.useState("all"),[c,d]=w.useState(!1),[u]=w.useState(["How do I create an account?","What payment methods are available?","How do I view my order history?","How do I add items to my cart?"]);w.useEffect(()=>{const x=()=>{d(window.scrollY>300)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const h=[{title:"General Questions",icon:"❓",items:[{question:"What is this platform?",answer:"This is a modern e-commerce platform built with FastAPI backend and React frontend, offering a complete shopping experience with product catalog, secure checkout, order tracking, and administrative management tools."},{question:"Do I need to create an account to shop?",answer:"Yes, you must register and login to access shopping features including the product catalog, cart, checkout, and order history. This ensures a secure and personalized shopping experience."},{question:"What currency is used?",answer:"All prices are displayed in Sri Lankan Rupees (LKR). The platform is optimized for Sri Lankan customers with local payment methods and shipping."}]},{title:"Account & Authentication",icon:"🔐",items:[{question:"How do I create an account?",answer:`Click on "Register" in the navigation menu, fill in your details including name, email, and password, then submit the form. You'll be automatically logged in after registration.`},{question:"I forgot my password. What should I do?",answer:a.jsxs(a.Fragment,{children:["Currently, password reset functionality is not implemented. Please contact support through the"," ",a.jsx(Z,{to:"/contact",className:"text-[#6D74FF] hover:text-[#9b87f5] underline",children:"contact page"})," ","for assistance."]})},{question:"How do I logout?",answer:'Click on your user avatar in the top navigation and select "Logout" from the dropdown menu.'},{question:"Can I update my account information?",answer:"Yes, after logging in, access your profile settings to update your name, email, and other account details."}]},{title:"Shopping & Products",icon:"🛍️",items:[{question:"How do I browse products?",answer:`After logging in, click "Shop" in the navigation menu. You'll see all available products with images, prices, and descriptions. Click on any product to view detailed information.`},{question:"Can I see multiple images for products?",answer:"Yes! Products can have up to 5 images. In the product detail view, you can browse through all available images to see the product from different angles."},{question:"How do I add items to my cart?",answer:'On the product detail page, select the quantity you want and click "Add to Cart". The item will be added to your shopping cart, which you can access from the navigation menu.'},{question:"Can I modify items in my cart?",answer:"Yes, visit your cart page to update quantities or remove items. Changes are saved automatically."},{question:"What if a product is out of stock?",answer:"Out of stock products will be clearly marked. You can check back later or contact support to inquire about restocking dates."}]},{title:"Checkout & Payments",icon:"💳",items:[{question:"What payment methods are available?",answer:a.jsxs(a.Fragment,{children:["We accept two payment methods:",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Stripe:"})," Credit/debit cards (Visa, Mastercard, American Express)",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Bank Transfer:"})," Direct bank transfer to our account"]})},{question:"How does bank transfer payment work?",answer:`During checkout, select "Bank Transfer" as payment method. You'll receive payment details including account number, account holder name, and reference number. Transfer the exact amount to our bank account and use the reference number. Your order status will be updated once payment is verified.`},{question:"What information do I need to provide during checkout?",answer:a.jsxs(a.Fragment,{children:["You\\'ll need to provide:",a.jsx("br",{}),"• Customer name and contact information",a.jsx("br",{}),"• Shipping address (pre-filled for Sri Lanka)",a.jsx("br",{}),"• Payment method selection and details"]})},{question:"Is my payment information secure?",answer:"Yes, we use industry-standard security measures. Stripe payments are processed through Stripe's secure servers. Bank transfer details are displayed securely without storing sensitive payment information on our servers."},{question:"Can I use international credit cards?",answer:"Yes, Stripe supports international credit and debit cards. However, currency conversion fees may apply from your card issuer."}]},{title:"Orders & Tracking",icon:"📦",items:[{question:"How do I view my order history?",answer:`After logging in, click "Orders" in the navigation menu. You'll see all your orders with status, date, and total amount. Click on any order to view detailed information.`},{question:"What do the order statuses mean?",answer:a.jsxs(a.Fragment,{children:["Order statuses include:",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Pending Verification:"})," Order placed, payment being verified",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Processing:"})," Payment verified, order being prepared",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Shipped:"})," Order has been dispatched",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Delivered:"})," Order completed successfully",a.jsx("br",{}),"• ",a.jsx("strong",{children:"Cancelled:"})," Order was cancelled"]})},{question:"How do I download my invoice?",answer:'Once your payment is verified, an "Invoice" button will appear in your order details. Click it to download a professional PDF invoice with all order details, pricing, and payment information.'},{question:"Can I cancel my order?",answer:"Orders can only be cancelled before payment verification. Please contact support immediately if you need to cancel an order after payment."},{question:"What is your shipping policy?",answer:"We ship within Sri Lanka. Shipping times vary based on location. You'll receive tracking information once your order is shipped."}]},{title:"Admin Panel",icon:"👑",items:[{question:"How do I access the admin panel?",answer:`Admin access requires special permissions. If you have admin privileges, you'll see an "Admin" button in the navigation after logging in. Click it to access the admin dashboard.`},{question:"What can I do in the admin panel?",answer:a.jsxs(a.Fragment,{children:["Admin users can:",a.jsx("br",{}),"• Manage products (add, edit, delete, upload images)",a.jsx("br",{}),"• View and manage user accounts",a.jsx("br",{}),"• Update order statuses and track orders",a.jsx("br",{}),"• View dashboard metrics and analytics"]})},{question:"How do I add new products?",answer:'In the admin panel, go to "Products" section, click "Add Product", fill in the details including name, price, stock, and upload 1-5 product images. The product will appear in the shop immediately.'},{question:"Can I bulk upload products?",answer:"Currently, products must be added individually through the admin panel. Bulk upload functionality may be added in future updates."}]},{title:"Technical Issues",icon:"⚙️",items:[{question:"The website is not loading properly.",answer:"Try clearing your browser cache and cookies, or try a different browser. If the issue persists, check if both backend and frontend servers are running."},{question:"I can't login even with correct credentials.",answer:"Clear your browser's localStorage (press F12 → Application → Local Storage → Clear All), then try logging in again. Make sure you're using the correct email and password format."},{question:"Images are not displaying.",answer:"Product images are served from the backend server. Make sure the backend is running and the static files are properly configured. Try refreshing the page."},{question:"Payment is not processing.",answer:"For Stripe payments, ensure your card details are correct and you have sufficient funds. For bank transfers, double-check the account details and reference number. Contact support if issues persist."},{question:"The site is slow or unresponsive.",answer:"Check your internet connection first. If the problem persists, try clearing your cache or using a different browser. Contact support if issues continue."}]}],p=(x,v)=>{const y=`${x}-${v}`,k=new Set(n);k.has(y)?k.delete(y):k.add(y),r(k)},f=()=>{if(i)r(new Set);else{const x=new Set;h.forEach((v,y)=>{v.items.forEach((k,j)=>{x.add(`${y}-${j}`)})}),r(x)}s(!i)},m=w.useMemo(()=>{let x=h;if(o!=="all"&&(x=x.filter(v=>v.title.toLowerCase().includes(o.toLowerCase()))),t.trim()){const v=t.toLowerCase();x=x.map(y=>({...y,items:y.items.filter(k=>k.question.toLowerCase().includes(v)||typeof k.answer=="string"&&k.answer.toLowerCase().includes(v))})).filter(y=>y.items.length>0)}return x},[t,o]),g=()=>{window.scrollTo({top:0,behavior:"smooth"})},b=x=>{const v=document.getElementById(`section-${x.replace(/\s+/g,"-").toLowerCase()}`);v&&v.scrollIntoView({behavior:"smooth",block:"start"})};return a.jsxs("div",{className:"faq-page",children:[c&&a.jsx("button",{onClick:g,className:"faq-scroll-top","aria-label":"Scroll to top",children:a.jsx(X3,{})}),a.jsxs("div",{className:"faq-container",children:[a.jsx("div",{className:"faq-header",children:a.jsxs("div",{className:"faq-header-content",children:[a.jsxs("div",{className:"faq-title-section",children:[a.jsxs("div",{className:"faq-icon-wrapper",children:[a.jsx(Sm,{className:"faq-icon"}),a.jsx("div",{className:"faq-ping"})]}),a.jsxs("div",{children:[a.jsx("h1",{className:"faq-title",children:"FAQ Center"}),a.jsxs("p",{className:"faq-subtitle",children:["Your comprehensive guide to our e-commerce platform. Find instant answers or",a.jsx(Z,{to:"/contact",children:" contact support"}),"."]})]})]}),a.jsxs("div",{className:"faq-stats",children:[a.jsxs("div",{className:"faq-stat-card",children:[a.jsx("div",{className:"faq-stat-value",children:h.reduce((x,v)=>x+v.items.length,0)}),a.jsx("div",{className:"faq-stat-label",children:"Questions"})]}),a.jsxs("div",{className:"faq-stat-card",children:[a.jsx("div",{className:"faq-stat-value",children:h.length}),a.jsx("div",{className:"faq-stat-label",children:"Categories"})]}),a.jsxs("div",{className:"faq-stat-card",children:[a.jsx("div",{className:"faq-stat-value",children:"24h"}),a.jsx("div",{className:"faq-stat-label",children:"Response"})]})]})]})}),a.jsxs("div",{className:"faq-search-wrapper",children:[a.jsxs("div",{className:"faq-search-container",children:[a.jsx(Cm,{className:"faq-search-icon"}),a.jsx("input",{type:"text",placeholder:"Search questions, answers, or keywords...",value:t,onChange:x=>e(x.target.value),className:"faq-search-input"}),t&&a.jsx("button",{onClick:()=>e(""),className:"faq-search-clear",children:"✕"})]}),a.jsxs("div",{className:"faq-search-footer",children:[a.jsxs("p",{className:"faq-search-count",children:[m.reduce((x,v)=>x+v.items.length,0)," questions available"]}),a.jsxs("button",{onClick:f,className:"faq-expand-btn",children:[a.jsx(lS,{}),i?"Collapse All":"Expand All"]})]})]}),a.jsxs("div",{className:"faq-filters",children:[a.jsxs("button",{onClick:()=>l("all"),className:`faq-filter-btn ${o==="all"?"active":""}`,children:[a.jsx(aS,{}),"All Categories"]}),h.map(x=>a.jsxs("button",{onClick:()=>l(x.title),className:`faq-filter-btn ${o===x.title?"active":""}`,children:[a.jsx("span",{children:x.icon}),x.title]},x.title))]}),a.jsxs("div",{className:"faq-feature-grid",children:[a.jsxs("div",{className:"faq-feature-card",children:[a.jsxs("div",{className:"faq-feature-header",children:[a.jsx(hS,{className:"faq-feature-icon"}),a.jsx("h3",{className:"faq-feature-title",children:"Popular Questions"})]}),a.jsx("div",{className:"faq-feature-list",children:u.map((x,v)=>a.jsxs("button",{onClick:()=>e(x),className:"faq-feature-item",children:[a.jsxs("span",{className:"faq-feature-number",children:["#",v+1]}),a.jsx("span",{className:"faq-feature-text",children:x})]},v))})]}),a.jsxs("div",{className:"faq-feature-card",children:[a.jsxs("div",{className:"faq-feature-header",children:[a.jsx(Nm,{className:"faq-feature-icon"}),a.jsx("h3",{className:"faq-feature-title",children:"Quick Navigation"})]}),a.jsx("div",{className:"faq-quick-nav",children:h.map(x=>a.jsxs("button",{onClick:()=>b(x.title),className:"faq-nav-item",children:[a.jsxs("div",{className:"faq-nav-item-header",children:[a.jsx("span",{className:"faq-nav-emoji",children:x.icon}),a.jsxs("span",{className:"faq-nav-count",children:[x.items.length," Q&A"]})]}),a.jsx("span",{className:"faq-nav-title",children:x.title})]},x.title))})]})]}),a.jsx("div",{className:"faq-sections",children:m.length>0?m.map((x,v)=>a.jsxs("div",{id:`section-${x.title.replace(/\s+/g,"-").toLowerCase()}`,className:"faq-section",children:[a.jsxs("div",{className:"faq-section-header",children:[a.jsx("div",{className:"faq-section-icon-wrapper",children:x.icon}),a.jsxs("div",{children:[a.jsx("h2",{className:"faq-section-title",children:x.title}),a.jsxs("p",{className:"faq-section-count",children:[x.items.length," questions"]})]})]}),a.jsx("div",{className:"faq-items",children:x.items.map((y,k)=>{const j=`${v}-${k}`,S=n.has(j);return a.jsxs("div",{className:"faq-item",children:[a.jsxs("button",{onClick:()=>p(v,k),className:"faq-question-btn",children:[a.jsx("h3",{className:"faq-question-text",children:y.question}),a.jsx("div",{className:`faq-chevron-wrapper ${S?"expanded":""}`,children:a.jsx(tS,{className:"faq-chevron"})})]}),a.jsx("div",{className:`faq-answer-wrapper ${S?"expanded":""}`,children:a.jsx("div",{className:"faq-answer",children:y.answer})})]},k)})})]},v)):a.jsxs("div",{className:"faq-no-results",children:[a.jsx(Cm,{className:"faq-no-results-icon"}),a.jsx("h3",{className:"faq-no-results-title",children:"No results found"}),a.jsxs("p",{className:"faq-no-results-text",children:["Try adjusting your search terms or"," ",a.jsx("button",{onClick:()=>{e(""),l("all")},className:"faq-no-results-btn",children:"clear filters"}),"."]})]})}),a.jsxs("div",{className:"faq-contact-section",children:[a.jsx("h2",{className:"faq-contact-title",children:"Still Need Help?"}),a.jsx("p",{className:"faq-contact-text",children:"If you couldn't find the answer to your question, our support team is here to assist you. We typically respond within 24 hours with detailed solutions."}),a.jsxs("div",{className:"faq-contact-buttons",children:[a.jsxs(Z,{to:"/contact",className:"faq-btn-primary",children:[a.jsx(Nm,{}),"Contact Support"]}),a.jsxs(Z,{to:"/about",className:"faq-btn-secondary",children:[a.jsx(Sm,{}),"About Us"]})]})]}),a.jsxs("div",{className:"faq-docs-section",children:[a.jsxs("div",{className:"faq-docs-header",children:[a.jsx("div",{className:"faq-docs-icon-wrapper",children:a.jsx(J3,{className:"faq-docs-icon"})}),a.jsxs("div",{children:[a.jsx("h3",{className:"faq-docs-title",children:"Technical Documentation"}),a.jsx("p",{className:"faq-docs-subtitle",children:"Comprehensive guides for developers covering implementation details and system architecture."})]})]}),a.jsx("div",{className:"faq-docs-grid",children:[{name:"🚀 Quick Start Guide",url:"/docs/QUICK_START.md",desc:"Get started in minutes"},{name:"🔐 Authentication Guide",url:"/docs/AUTHENTICATION_IMPLEMENTATION.md",desc:"User management & security"},{name:"📦 Order Status System",url:"/docs/ORDER_STATUS_TECHNICAL_DOCS.md",desc:"Order lifecycle management"},{name:"📄 Invoice Feature",url:"/docs/INVOICE_FEATURE_COMPLETE.md",desc:"PDF generation & billing"},{name:"📸 Multiple Images Guide",url:"/docs/MULTIPLE_IMAGES_FEATURE.md",desc:"Product image handling"},{name:"💰 Currency Configuration",url:"/docs/CURRENCY_CHANGE.md",desc:"Multi-currency support"},{name:"👑 Admin Panel Fixes",url:"/docs/ADMIN_PANEL_FIXES.md",desc:"Admin interface updates"},{name:"🏦 Bank Transfer Payments",url:"/docs/BANK_TRANSFER_UPGRADE.md",desc:"Payment processing"},{name:"🖼️ Image Upload System",url:"/docs/IMAGE_UPLOAD_FIX.md",desc:"File upload & storage"}].map((x,v)=>a.jsxs("a",{href:x.url,target:"_blank",rel:"noopener noreferrer",className:"faq-doc-card",children:[a.jsxs("div",{className:"faq-doc-card-header",children:[a.jsx("span",{className:"faq-doc-emoji",children:x.name.split(" ")[0]}),a.jsx(iS,{className:"faq-doc-external-icon"})]}),a.jsx("div",{className:"faq-doc-name",children:x.name.substring(x.name.indexOf(" ")+1)}),a.jsx("div",{className:"faq-doc-desc",children:x.desc})]},v))}),a.jsxs("div",{className:"faq-footer-stats",children:[a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:"9"}),a.jsx("div",{className:"faq-footer-stat-label",children:"Documentation"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Technical guides"})]}),a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:"7"}),a.jsx("div",{className:"faq-footer-stat-label",children:"Categories"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Organized topics"})]}),a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:h.reduce((x,v)=>x+v.items.length,0)}),a.jsx("div",{className:"faq-footer-stat-label",children:"Q&A Total"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Common questions"})]}),a.jsxs("div",{className:"faq-footer-stat",children:[a.jsx("div",{className:"faq-footer-stat-value",children:"24/7"}),a.jsx("div",{className:"faq-footer-stat-label",children:"Support"}),a.jsx("div",{className:"faq-footer-stat-desc",children:"Always available"})]})]})]})]})]})};function fS(){const[t,e]=w.useState([]),[n,r]=w.useState(!1),[i,s]=w.useState(null),[o]=hx(),l=o.get("q")||"",{add:c}=Gi();w.useEffect(()=>{if(!l.trim()){e([]);return}let p=!1;async function f(){var m;r(!0),s(null);try{const g=await Ee.get("/api/v1/products");if(p)return;const b=((m=g.data)==null?void 0:m.items)||[];e(b)}catch{p||(s("Failed to load products"),e([]))}finally{p||r(!1)}}return f(),()=>{p=!0}},[l]);const d=w.useMemo(()=>{if(!l.trim())return[];const p=l.toLowerCase();return t.filter(f=>f.name.toLowerCase().includes(p)||f.slug.toLowerCase().includes(p)||(f.category||"").toLowerCase().includes(p))},[t,l]),u=w.useMemo(()=>{if(!l.trim())return[];const p=l.toLowerCase();return[{id:"faq",name:"Frequently Asked Questions",url:"/faq",type:"FAQ Page"},{id:"about",name:"About Us",url:"/about",type:"About Page"},{id:"contact",name:"Contact Support",url:"/contact",type:"Contact Page"},{id:"home",name:"Home Page",url:"/",type:"Home Page"},{id:"shop",name:"Shop",url:"/shop",type:"Shop Page"}].filter(m=>m.name.toLowerCase().includes(p)||m.type.toLowerCase().includes(p))},[l]),h=(p,f)=>{const g=f.currentTarget.closest("div"),b=g==null?void 0:g.querySelector("img");b&&_l(b),c({productId:p.id,slug:p.slug,name:p.name,price:p.price,image:p.images[0]})};return l.trim()?a.jsxs("div",{className:"container",style:{padding:"2rem"},children:[a.jsxs("div",{style:{marginBottom:"2rem"},children:[a.jsx("h1",{children:"Search Results"}),a.jsxs("p",{children:["Showing results for: ",a.jsxs("strong",{children:['"',l,'"']})]}),a.jsxs("p",{children:[d.length," product",d.length!==1?"s":""," found"]})]}),n&&a.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:a.jsx("p",{children:"Loading products..."})}),i&&a.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"red"},children:a.jsx("p",{children:i})}),!n&&!i&&a.jsxs(a.Fragment,{children:[d.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Products (",d.length,")"]}),a.jsx("div",{className:"grid",children:d.map(p=>a.jsxs("div",{className:"card",children:[a.jsx(Z,{to:`/product/${p.slug}`,className:"card-img",children:a.jsx("img",{src:p.images[0]||"/placeholder.jpg",alt:p.name})}),a.jsxs("div",{className:"card-body",children:[a.jsx("span",{className:"tag",children:p.category||"General"}),a.jsxs("span",{className:"price",children:["LKR ",Number(p.price).toFixed(2)]}),a.jsx(Z,{to:`/product/${p.slug}`,className:"card-title",children:p.name}),a.jsx("div",{className:"card-actions",children:a.jsx("button",{className:"btn btn-primary",onClick:f=>h(p,f),children:"Add to Cart"})})]})]},p.id))})]}),u.length>0&&a.jsxs(a.Fragment,{children:[d.length>0&&a.jsx("hr",{style:{margin:"2rem 0",border:"none",borderTop:"1px solid var(--line)"}}),a.jsxs("h2",{style:{marginBottom:"1rem",color:"var(--text)"},children:["Pages (",u.length,")"]}),a.jsx("div",{style:{display:"grid",gap:"1rem"},children:u.map(p=>a.jsx(Z,{to:p.url,style:{display:"block",padding:"1rem",background:"var(--surface)",border:"1px solid var(--line)",borderRadius:"8px",textDecoration:"none",color:"var(--text)",transition:"all 0.2s ease"},onMouseEnter:f=>f.currentTarget.style.background="var(--ghost)",onMouseLeave:f=>f.currentTarget.style.background="var(--surface)",children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx("span",{style:{fontSize:"1.1rem",fontWeight:"500"},children:p.name}),a.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)",padding:"2px 8px",background:"var(--surface-alt)",borderRadius:"12px"},children:p.type})]})},p.id))})]})]}),!n&&!i&&d.length===0&&u.length===0&&l.trim()&&a.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[a.jsxs("p",{children:['No results found for "',l,'"']}),a.jsxs("p",{children:["Try searching for something else or ",a.jsx(Z,{to:"/shop",children:"browse all products"})]})]})]}):a.jsxs("div",{className:"container",style:{padding:"2rem",textAlign:"center"},children:[a.jsx("h1",{children:"Search"}),a.jsx("p",{children:"Enter a search term to find products across our store."})]})}function mS(){const[t,e]=w.useState([]),n=w.useRef({});return w.useEffect(()=>{function r(i){var d,u;const s=i,o=crypto.randomUUID(),l=Date.now()+(((d=s.detail)==null?void 0:d.duration)??2200);e(h=>{var p,f;return[...h,{id:o,message:((p=s.detail)==null?void 0:p.message)??"",type:((f=s.detail)==null?void 0:f.type)??"success",ttl:l}]});const c=((u=s.detail)==null?void 0:u.duration)??2200;n.current[o]=window.setTimeout(()=>{e(h=>h.filter(p=>p.id!==o)),delete n.current[o]},c)}return window.addEventListener("app:toast",r),()=>{window.removeEventListener("app:toast",r),Object.values(n.current).forEach(i=>window.clearTimeout(i))}},[]),a.jsxs("div",{style:{position:"fixed",bottom:20,right:20,zIndex:2e3,display:"flex",flexDirection:"column",gap:8},"aria-live":"polite","aria-atomic":"true",children:[t.map(r=>a.jsx("div",{role:"status",style:{minWidth:220,maxWidth:360,padding:"10px 14px",borderRadius:10,color:"white",background:r.type==="success"?"linear-gradient(180deg, #22c55e, #16a34a)":r.type==="error"?"linear-gradient(180deg, #ef4444, #b91c1c)":"linear-gradient(180deg, #3b82f6, #1d4ed8)",boxShadow:"0 10px 24px rgba(0,0,0,0.35)",transform:"translateY(0)",transition:"opacity .2s, transform .2s",fontWeight:600},children:r.message},r.id)),a.jsx("style",{children:`
        @media (max-width: 600px) {
          div[aria-live='polite']{ left: 12px; right: 12px; top: auto; bottom: 20px; align-items: center; }
        }
      `})]})}const gS="modulepreload",xS=function(t){return"/"+t},zm={},Em=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=xS(c),c in zm)return;zm[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":gS,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((p,f)=>{h.addEventListener("load",p),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var vS=Object.create,Dv=Object.defineProperty,bS=Object.getOwnPropertyDescriptor,Fv=Object.getOwnPropertyNames,yS=Object.getPrototypeOf,wS=Object.prototype.hasOwnProperty,cp=(t,e)=>function(){return e||(0,t[Fv(t)[0]])((e={exports:{}}).exports,e),e.exports},jS=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Fv(e))!wS.call(t,i)&&i!==n&&Dv(t,i,{get:()=>e[i],enumerable:!(r=bS(e,i))||r.enumerable});return t},xc=(t,e,n)=>(n=t!=null?vS(yS(t)):{},jS(!t||!t.__esModule?Dv(n,"default",{value:t,enumerable:!0}):n,t)),kS=cp({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(t,e){function n(r){for(var i=new Array(r),s=0;s<r;++s)i[s]=s;return i}e.exports=n}}),_S=cp({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(t,e){e.exports=function(i){return i!=null&&(n(i)||r(i)||!!i._isBuffer)};function n(i){return!!i.constructor&&typeof i.constructor.isBuffer=="function"&&i.constructor.isBuffer(i)}function r(i){return typeof i.readFloatLE=="function"&&typeof i.slice=="function"&&n(i.slice(0,0))}}}),vc=cp({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(t,e){var n=kS(),r=_S(),i=typeof Float64Array<"u";function s(h,p){return h[0]-p[0]}function o(){var h=this.stride,p=new Array(h.length),f;for(f=0;f<p.length;++f)p[f]=[Math.abs(h[f]),f];p.sort(s);var m=new Array(p.length);for(f=0;f<m.length;++f)m[f]=p[f][1];return m}function l(h,p){var f=["View",p,"d",h].join("");p<0&&(f="View_Nil"+h);var m=h==="generic";if(p===-1){var g="function "+f+"(a){this.data=a;};var proto="+f+".prototype;proto.dtype='"+h+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+f+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+f+"(a){return new "+f+"(a);}",E=new Function(g);return E()}else if(p===0){var g="function "+f+"(a,d) {this.data = a;this.offset = d};var proto="+f+".prototype;proto.dtype='"+h+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+f+"_copy() {return new "+f+"(this.data,this.offset)};proto.pick=function "+f+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+f+"_get(){return "+(m?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+f+"_set(v){return "+(m?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+f+"(a,b,c,d){return new "+f+"(a,d)}",E=new Function("TrivialArray",g);return E(d[h][0])}var g=["'use strict'"],b=n(p),x=b.map(function(C){return"i"+C}),v="this.offset+"+b.map(function(C){return"this.stride["+C+"]*i"+C}).join("+"),y=b.map(function(C){return"b"+C}).join(","),k=b.map(function(C){return"c"+C}).join(",");g.push("function "+f+"(a,"+y+","+k+",d){this.data=a","this.shape=["+y+"]","this.stride=["+k+"]","this.offset=d|0}","var proto="+f+".prototype","proto.dtype='"+h+"'","proto.dimension="+p),g.push("Object.defineProperty(proto,'size',{get:function "+f+"_size(){return "+b.map(function(C){return"this.shape["+C+"]"}).join("*"),"}})"),p===1?g.push("proto.order=[0]"):(g.push("Object.defineProperty(proto,'order',{get:"),p<4?(g.push("function "+f+"_order(){"),p===2?g.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):p===3&&g.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):g.push("ORDER})")),g.push("proto.set=function "+f+"_set("+x.join(",")+",v){"),m?g.push("return this.data.set("+v+",v)}"):g.push("return this.data["+v+"]=v}"),g.push("proto.get=function "+f+"_get("+x.join(",")+"){"),m?g.push("return this.data.get("+v+")}"):g.push("return this.data["+v+"]}"),g.push("proto.index=function "+f+"_index(",x.join(),"){return "+v+"}"),g.push("proto.hi=function "+f+"_hi("+x.join(",")+"){return new "+f+"(this.data,"+b.map(function(C){return["(typeof i",C,"!=='number'||i",C,"<0)?this.shape[",C,"]:i",C,"|0"].join("")}).join(",")+","+b.map(function(C){return"this.stride["+C+"]"}).join(",")+",this.offset)}");var j=b.map(function(C){return"a"+C+"=this.shape["+C+"]"}),S=b.map(function(C){return"c"+C+"=this.stride["+C+"]"});g.push("proto.lo=function "+f+"_lo("+x.join(",")+"){var b=this.offset,d=0,"+j.join(",")+","+S.join(","));for(var _=0;_<p;++_)g.push("if(typeof i"+_+"==='number'&&i"+_+">=0){d=i"+_+"|0;b+=c"+_+"*d;a"+_+"-=d}");g.push("return new "+f+"(this.data,"+b.map(function(C){return"a"+C}).join(",")+","+b.map(function(C){return"c"+C}).join(",")+",b)}"),g.push("proto.step=function "+f+"_step("+x.join(",")+"){var "+b.map(function(C){return"a"+C+"=this.shape["+C+"]"}).join(",")+","+b.map(function(C){return"b"+C+"=this.stride["+C+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var _=0;_<p;++_)g.push("if(typeof i"+_+"==='number'){d=i"+_+"|0;if(d<0){c+=b"+_+"*(a"+_+"-1);a"+_+"=ceil(-a"+_+"/d)}else{a"+_+"=ceil(a"+_+"/d)}b"+_+"*=d}");g.push("return new "+f+"(this.data,"+b.map(function(C){return"a"+C}).join(",")+","+b.map(function(C){return"b"+C}).join(",")+",c)}");for(var N=new Array(p),A=new Array(p),_=0;_<p;++_)N[_]="a[i"+_+"]",A[_]="b[i"+_+"]";g.push("proto.transpose=function "+f+"_transpose("+x+"){"+x.map(function(C,B){return C+"=("+C+"===undefined?"+B+":"+C+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+f+"(this.data,"+N.join(",")+","+A.join(",")+",this.offset)}"),g.push("proto.pick=function "+f+"_pick("+x+"){var a=[],b=[],c=this.offset");for(var _=0;_<p;++_)g.push("if(typeof i"+_+"==='number'&&i"+_+">=0){c=(c+this.stride["+_+"]*i"+_+")|0}else{a.push(this.shape["+_+"]);b.push(this.stride["+_+"])}");g.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),g.push("return function construct_"+f+"(data,shape,stride,offset){return new "+f+"(data,"+b.map(function(C){return"shape["+C+"]"}).join(",")+","+b.map(function(C){return"stride["+C+"]"}).join(",")+",offset)}");var E=new Function("CTOR_LIST","ORDER",g.join(`
`));return E(d[h],o)}function c(h){if(r(h))return"buffer";if(i)switch(Object.prototype.toString.call(h)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(h)?"array":"generic"}var d={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function u(h,p,f,m){if(h===void 0){var k=d.array[0];return k([])}else typeof h=="number"&&(h=[h]);p===void 0&&(p=[h.length]);var g=p.length;if(f===void 0){f=new Array(g);for(var b=g-1,x=1;b>=0;--b)f[b]=x,x*=p[b]}if(m===void 0){m=0;for(var b=0;b<g;++b)f[b]<0&&(m-=(p[b]-1)*f[b])}for(var v=c(h),y=d[v];y.length<=g+1;)y.push(l(v,y.length-1));var k=y[g+1];return k(h,p,f,m)}e.exports=u}}),SS=typeof global=="object"&&global&&global.Object===Object&&global,NS=SS,CS=typeof self=="object"&&self&&self.Object===Object&&self,zS=NS||CS||Function("return this")(),dp=zS,ES=dp.Symbol,Tl=ES,Bv=Object.prototype,RS=Bv.hasOwnProperty,MS=Bv.toString,ms=Tl?Tl.toStringTag:void 0;function PS(t){var e=RS.call(t,ms),n=t[ms];try{t[ms]=void 0;var r=!0}catch{}var i=MS.call(t);return r&&(e?t[ms]=n:delete t[ms]),i}var TS=PS,AS=Object.prototype,OS=AS.toString;function LS(t){return OS.call(t)}var IS=LS,DS="[object Null]",FS="[object Undefined]",Rm=Tl?Tl.toStringTag:void 0;function BS(t){return t==null?t===void 0?FS:DS:Rm&&Rm in Object(t)?TS(t):IS(t)}var HS=BS;function US(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Hv=US,$S="[object AsyncFunction]",WS="[object Function]",VS="[object GeneratorFunction]",qS="[object Proxy]";function YS(t){if(!Hv(t))return!1;var e=HS(t);return e==WS||e==VS||e==$S||e==qS}var ZS=YS,GS=dp["__core-js_shared__"],cd=GS,Mm=function(){var t=/[^.]+$/.exec(cd&&cd.keys&&cd.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function KS(t){return!!Mm&&Mm in t}var XS=KS,QS=Function.prototype,JS=QS.toString;function eN(t){if(t!=null){try{return JS.call(t)}catch{}try{return t+""}catch{}}return""}var tN=eN,nN=/[\\^$.*+?()[\]{}|]/g,rN=/^\[object .+?Constructor\]$/,iN=Function.prototype,sN=Object.prototype,aN=iN.toString,oN=sN.hasOwnProperty,lN=RegExp("^"+aN.call(oN).replace(nN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function cN(t){if(!Hv(t)||XS(t))return!1;var e=ZS(t)?lN:rN;return e.test(tN(t))}var dN=cN;function uN(t,e){return t==null?void 0:t[e]}var hN=uN;function pN(t,e){var n=hN(t,e);return dN(n)?n:void 0}var Uv=pN,fN=Uv(Object,"create"),fa=fN;function mN(){this.__data__=fa?fa(null):{},this.size=0}var gN=mN;function xN(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var vN=xN,bN="__lodash_hash_undefined__",yN=Object.prototype,wN=yN.hasOwnProperty;function jN(t){var e=this.__data__;if(fa){var n=e[t];return n===bN?void 0:n}return wN.call(e,t)?e[t]:void 0}var kN=jN,_N=Object.prototype,SN=_N.hasOwnProperty;function NN(t){var e=this.__data__;return fa?e[t]!==void 0:SN.call(e,t)}var CN=NN,zN="__lodash_hash_undefined__";function EN(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=fa&&e===void 0?zN:e,this}var RN=EN;function Xi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Xi.prototype.clear=gN;Xi.prototype.delete=vN;Xi.prototype.get=kN;Xi.prototype.has=CN;Xi.prototype.set=RN;var Pm=Xi;function MN(){this.__data__=[],this.size=0}var PN=MN;function TN(t,e){return t===e||t!==t&&e!==e}var AN=TN;function ON(t,e){for(var n=t.length;n--;)if(AN(t[n][0],e))return n;return-1}var bc=ON,LN=Array.prototype,IN=LN.splice;function DN(t){var e=this.__data__,n=bc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():IN.call(e,n,1),--this.size,!0}var FN=DN;function BN(t){var e=this.__data__,n=bc(e,t);return n<0?void 0:e[n][1]}var HN=BN;function UN(t){return bc(this.__data__,t)>-1}var $N=UN;function WN(t,e){var n=this.__data__,r=bc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var VN=WN;function Qi(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qi.prototype.clear=PN;Qi.prototype.delete=FN;Qi.prototype.get=HN;Qi.prototype.has=$N;Qi.prototype.set=VN;var qN=Qi,YN=Uv(dp,"Map"),ZN=YN;function GN(){this.size=0,this.__data__={hash:new Pm,map:new(ZN||qN),string:new Pm}}var KN=GN;function XN(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var QN=XN;function JN(t,e){var n=t.__data__;return QN(e)?n[typeof e=="string"?"string":"hash"]:n.map}var yc=JN;function e8(t){var e=yc(this,t).delete(t);return this.size-=e?1:0,e}var t8=e8;function n8(t){return yc(this,t).get(t)}var r8=n8;function i8(t){return yc(this,t).has(t)}var s8=i8;function a8(t,e){var n=yc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o8=a8;function Ji(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ji.prototype.clear=KN;Ji.prototype.delete=t8;Ji.prototype.get=r8;Ji.prototype.has=s8;Ji.prototype.set=o8;var $v=Ji,l8="Expected a function";function up(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(l8);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(up.Cache||$v),n}up.Cache=$v;var c8=up,hp=xc(vc()),Wv=class Iu{constructor(e,n){this.type="application/octet-stream",this.params={},this.type=e,this.params=n}toString(){const e=[];for(const n in this.params){const r=this.params[n];e.push(`${n}=${r}`)}return[this.type,...e].join(";")}static create(e,n){return new Iu(e,n)}isIdentical(e){return this.type===e.type&&this.params===e.params}isEqual(e){return this.type===e.type}static fromString(e){const[n,...r]=e.split(";"),i={};for(const s of r){const[o,l]=s.split("=");i[o.trim()]=l.trim()}return new Iu(n,i)}},dd=xc(vc());async function d8(t){const e=Wv.fromString(t.type);switch(e.type){case"image/x-alpha8":{const n=parseInt(e.params.width),r=parseInt(e.params.height);return(0,dd.default)(new Uint8Array(await t.arrayBuffer()),[r,n,1])}case"image/x-rgba8":{const n=parseInt(e.params.width),r=parseInt(e.params.height);return(0,dd.default)(new Uint8Array(await t.arrayBuffer()),[r,n,4])}case"application/octet-stream":case"image/png":case"image/jpeg":case"image/jpg":case"image/webp":{const n=await createImageBitmap(t),r=f8(n);return(0,dd.default)(new Uint8Array(r.data),[r.height,r.width,4])}default:throw new Error(`Invalid format: ${e.type} with params: ${e.params}`)}}async function u8(t,e=.8,n="image/png"){const[r,i,s]=t.shape;switch(n){case"image/x-alpha8":case"image/x-rgba8":{const c=Wv.create(n,{width:i.toString(),height:r.toString()});return new Blob([t.data],{type:c.toString()})}case"image/png":case"image/jpeg":case"image/webp":{const c=new ImageData(new Uint8ClampedArray(t.data),i,r);var o=Vv(c.width,c.height),l=o.getContext("2d");return l.putImageData(c,0,0),o.convertToBlob({quality:e,type:n})}default:throw new Error(`Invalid format: ${n}`)}}function h8(t){return new RegExp("^(?:[a-z+]+:)?//","i").test(t)}function p8(t,e){return h8(t)?t:new URL(t,e).href}function f8(t){var e=Vv(t.width,t.height),n=e.getContext("2d");return n.drawImage(t,0,0),n.getImageData(0,0,e.width,e.height)}function m8(t){if(typeof Uint8Array<"u")return new Uint8Array(t);if(typeof Uint8ClampedArray<"u")return new Uint8ClampedArray(t);if(typeof Uint16Array<"u")return new Uint16Array(t);if(typeof Uint32Array<"u")return new Uint32Array(t);if(typeof Float32Array<"u")return new Float32Array(t);if(typeof Float64Array<"u")return new Float64Array(t);throw new Error("TypedArray not supported")}function Tm(t,e,n,r=!1){const[i,s,o]=t.shape;let l=s/e,c=i/n;r&&(l=c=Math.max(l,c)>1?Math.max(l,c):Math.min(l,c));const d=(0,hp.default)(m8(o*e*n),[n,e,o]);for(let u=0;u<n;u++)for(let h=0;h<e;h++){const p=h*l,f=u*c,m=Math.max(Math.floor(p),0),g=Math.min(Math.ceil(p),s-1),b=Math.max(Math.floor(f),0),x=Math.min(Math.ceil(f),i-1),v=p-m,y=f-b;for(let k=0;k<o;k++){const j=t.get(b,m,k),S=t.get(b,g,k),_=t.get(x,m,k),N=t.get(x,g,k),A=(1-v)*(1-y)*j+v*(1-y)*S+(1-v)*y*_+v*y*N;d.set(u,h,k,A)}}return d}function g8(t,e=[128,128,128],n=[256,256,256]){var r=t.data;const[i,s,o]=t.shape,l=i*s,c=new Float32Array(3*l);for(let d=0,u=0;d<r.length;d+=4,u+=1)c[u]=(r[d]-e[0])/n[0],c[u+l]=(r[d+1]-e[1])/n[1],c[u+l+l]=(r[d+2]-e[2])/n[2];return(0,hp.default)(c,[1,3,i,s])}async function x8(t,e){return typeof t=="string"&&(t=p8(t,e.publicPath),t=new URL(t)),t instanceof URL&&(t=await(await fetch(t,{})).blob()),(t instanceof ArrayBuffer||ArrayBuffer.isView(t))&&(t=new Blob([t])),t instanceof Blob&&(t=await d8(t)),t}function v8(t){const e=new Uint8Array(t.data.length);for(let n=0;n<t.data.length;n++)e[n]=t.data[n]*255;return(0,hp.default)(e,t.shape)}function Vv(t,e){let n;if(typeof OffscreenCanvas<"u"?n=new OffscreenCanvas(t,e):n=document.createElement("canvas"),!n)throw new Error("Canvas nor OffscreenCanvas are available in the current context.");return n}var b8=xc(vc()),qv=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,y8=()=>navigator.hardwareConcurrency??4;async function Am(t,e){return URL.createObjectURL(await Yv(t,e))}async function Yv(t,e){const n=new URL("resources.json",e.publicPath),r=await fetch(n);if(!r.ok)throw new Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");const s=(await r.json())[t];if(!s)throw new Error(`Resource ${t} not found. Ensure that the config.publicPath is configured correctly.`);const o=s.chunks;let l=0;const c=o.map(async h=>{const p=h.offsets[1]-h.offsets[0],f=e.publicPath?new URL(h.name,e.publicPath).toString():h.name,g=await(await fetch(f,e.fetchArgs)).blob();if(p!==g.size)throw new Error(`Failed to fetch ${t} with size ${p} but got ${g.size}`);return e.progress&&(l+=p,e.progress(`fetch:${t}`,l,s.size)),g}),d=await Promise.all(c),u=new Blob(d,{type:s.mime});if(u.size!==s.size)throw new Error(`Failed to fetch ${t} with size ${s.size} but got ${u.size}`);return u}var gs=null,Zv=async t=>(gs!==null||(t?gs=(await Em(async()=>{const{default:e}=await import("./ort.webgpu.bundle.min-BjDy62bb.js");return{default:e}},[])).default:gs=(await Em(async()=>{const{default:e}=await import("./ort.bundle.min-CmHfnmOO.js");return{default:e}},[])).default),gs);async function w8(t,e){const n=e.device==="gpu"&&await qv(),r=n&&e.proxyToWorker,i=[n?"webgpu":"wasm"],s=await Zv(n);e.debug&&(console.debug("	Using WebGPU:",n),console.debug("	Proxy to Worker:",r),s.env.debug=!0,s.env.logLevel="verbose"),s.env.wasm.numThreads=y8(),s.env.wasm.proxy=r;const o=n?"/onnxruntime-web/ort-wasm-simd-threaded.jsep":"/onnxruntime-web/ort-wasm-simd-threaded",l=await Am(`${o}.wasm`,e),c=await Am(`${o}.mjs`,e);s.env.wasm.wasmPaths={mjs:c,wasm:l},e.debug&&console.debug("ort.env.wasm:",s.env.wasm);const d={executionProviders:i,graphOptimizationLevel:"all",executionMode:"parallel",enableCpuMemArena:!0};return await s.InferenceSession.create(t,d).catch(h=>{throw new Error(`Failed to create session: "${h}". Please check if the publicPath is set correctly.`)})}async function j8(t,e,n,r){const i=r.device==="gpu"&&await qv(),s=await Zv(i),o={};for(const[d,u]of e)o[d]=new s.Tensor("float32",new Float32Array(u.data),u.shape);const l=await t.run(o,{}),c=[];for(const d of n){const u=l[d],h=u.dims,p=u.data,f=(0,b8.default)(p,h);c.push(f)}return c}var ce;(function(t){t.assertEqual=i=>i;function e(i){}t.assertIs=e;function n(i){throw new Error}t.assertNever=n,t.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},t.getValidEnumValues=i=>{const s=t.objectKeys(i).filter(l=>typeof i[i[l]]!="number"),o={};for(const l of s)o[l]=i[l];return t.objectValues(o)},t.objectValues=i=>t.objectKeys(i).map(function(s){return i[s]}),t.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},t.find=(i,s)=>{for(const o of i)if(s(o))return o},t.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}t.joinValues=r,t.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(ce||(ce={}));var Du;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Du||(Du={}));var V=ce.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),En=t=>{switch(typeof t){case"undefined":return V.undefined;case"string":return V.string;case"number":return isNaN(t)?V.nan:V.number;case"boolean":return V.boolean;case"function":return V.function;case"bigint":return V.bigint;case"symbol":return V.symbol;case"object":return Array.isArray(t)?V.array:t===null?V.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?V.promise:typeof Map<"u"&&t instanceof Map?V.map:typeof Set<"u"&&t instanceof Set?V.set:typeof Date<"u"&&t instanceof Date?V.date:V.object;default:return V.unknown}},I=ce.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),k8=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),en=class Gv extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}format(e){const n=e||function(s){return s.message},r={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let l=r,c=0;for(;c<o.path.length;){const d=o.path[c];c===o.path.length-1?(l[d]=l[d]||{_errors:[]},l[d]._errors.push(n(o))):l[d]=l[d]||{_errors:[]},l=l[d],c++}}};return i(this),r}static assert(e){if(!(e instanceof Gv))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,ce.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}};en.create=t=>new en(t);var Di=(t,e)=>{let n;switch(t.code){case I.invalid_type:t.received===V.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case I.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,ce.jsonStringifyReplacer)}`;break;case I.unrecognized_keys:n=`Unrecognized key(s) in object: ${ce.joinValues(t.keys,", ")}`;break;case I.invalid_union:n="Invalid input";break;case I.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${ce.joinValues(t.options)}`;break;case I.invalid_enum_value:n=`Invalid enum value. Expected ${ce.joinValues(t.options)}, received '${t.received}'`;break;case I.invalid_arguments:n="Invalid function arguments";break;case I.invalid_return_type:n="Invalid function return type";break;case I.invalid_date:n="Invalid date";break;case I.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:ce.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case I.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case I.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case I.custom:n="Invalid input";break;case I.invalid_intersection_types:n="Intersection results could not be merged";break;case I.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case I.not_finite:n="Number must be finite";break;default:n=e.defaultError,ce.assertNever(t)}return{message:n}},Kv=Di;function _8(t){Kv=t}function Al(){return Kv}var Ol=t=>{const{data:e,path:n,errorMaps:r,issueData:i}=t,s=[...n,...i.path||[]],o={...i,path:s};if(i.message!==void 0)return{...i,path:s,message:i.message};let l="";const c=r.filter(d=>!!d).slice().reverse();for(const d of c)l=d(o,{data:e,defaultError:l}).message;return{...i,path:s,message:l}},S8=[];function $(t,e){const n=Al(),r=Ol({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===Di?void 0:Di].filter(i=>!!i)});t.common.issues.push(r)}var Nt=class Xv{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const r=[];for(const i of n){if(i.status==="aborted")return te;i.status==="dirty"&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){const r=[];for(const i of n){const s=await i.key,o=await i.value;r.push({key:s,value:o})}return Xv.mergeObjectSync(e,r)}static mergeObjectSync(e,n){const r={};for(const i of n){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return te;s.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof o.value<"u"||i.alwaysSet)&&(r[s.value]=o.value)}return{status:e.value,value:r}}},te=Object.freeze({status:"aborted"}),mi=t=>({status:"dirty",value:t}),pt=t=>({status:"valid",value:t}),Fu=t=>t.status==="aborted",Bu=t=>t.status==="dirty",Yr=t=>t.status==="valid",ma=t=>typeof Promise<"u"&&t instanceof Promise;function Ll(t,e,n,r){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(t)}function Qv(t,e,n,r,i){if(typeof e=="function"?t!==e||!0:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(t,n),n}var K;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(K||(K={}));var Ns,Cs,bn=class{constructor(t,e,n,r){this._cachedPath=[],this.parent=t,this.data=e,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Om=(t,e)=>{if(Yr(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new en(t.common.issues);return this._error=n,this._error}}};function re(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:r,description:i}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:i}:{errorMap:(o,l)=>{var c,d;const{message:u}=t;return o.code==="invalid_enum_value"?{message:u??l.defaultError}:typeof l.data>"u"?{message:(c=u??r)!==null&&c!==void 0?c:l.defaultError}:o.code!=="invalid_type"?{message:l.defaultError}:{message:(d=u??n)!==null&&d!==void 0?d:l.defaultError}},description:i}}var ie=class{get description(){return this._def.description}_getType(t){return En(t.data)}_getOrReturnCtx(t,e){return e||{common:t.parent.common,data:t.data,parsedType:En(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Nt,ctx:{common:t.parent.common,data:t.data,parsedType:En(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const e=this._parse(t);if(ma(e))throw new Error("Synchronous parse encountered promise.");return e}_parseAsync(t){const e=this._parse(t);return Promise.resolve(e)}parse(t,e){const n=this.safeParse(t,e);if(n.success)return n.data;throw n.error}safeParse(t,e){var n;const r={common:{issues:[],async:(n=e==null?void 0:e.async)!==null&&n!==void 0?n:!1,contextualErrorMap:e==null?void 0:e.errorMap},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:En(t)},i=this._parseSync({data:t,path:r.path,parent:r});return Om(r,i)}"~validate"(t){var e,n;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:En(t)};if(!this["~standard"].async)try{const i=this._parseSync({data:t,path:[],parent:r});return Yr(i)?{value:i.value}:{issues:r.common.issues}}catch(i){!((n=(e=i==null?void 0:i.message)===null||e===void 0?void 0:e.toLowerCase())===null||n===void 0)&&n.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:r}).then(i=>Yr(i)?{value:i.value}:{issues:r.common.issues})}async parseAsync(t,e){const n=await this.safeParseAsync(t,e);if(n.success)return n.data;throw n.error}async safeParseAsync(t,e){const n={common:{issues:[],contextualErrorMap:e==null?void 0:e.errorMap,async:!0},path:(e==null?void 0:e.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:En(t)},r=this._parse({data:t,path:n.path,parent:n}),i=await(ma(r)?r:Promise.resolve(r));return Om(n,i)}refine(t,e){const n=r=>typeof e=="string"||typeof e>"u"?{message:e}:typeof e=="function"?e(r):e;return this._refinement((r,i)=>{const s=t(r),o=()=>i.addIssue({code:I.custom,...n(r)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(o(),!1)):s?!0:(o(),!1)})}refinement(t,e){return this._refinement((n,r)=>t(n)?!0:(r.addIssue(typeof e=="function"?e(n,r):e),!1))}_refinement(t){return new rn({schema:this,typeName:ee.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}optional(){return vn.create(this,this._def)}nullable(){return gr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Zr.create(this)}promise(){return Hi.create(this,this._def)}or(t){return ja.create([this,t],this._def)}and(t){return ka.create(this,t,this._def)}transform(t){return new rn({...re(this._def),schema:this,typeName:ee.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const e=typeof t=="function"?t:()=>t;return new Ca({...re(this._def),innerType:this,defaultValue:e,typeName:ee.ZodDefault})}brand(){return new pp({typeName:ee.ZodBranded,type:this,...re(this._def)})}catch(t){const e=typeof t=="function"?t:()=>t;return new za({...re(this._def),innerType:this,catchValue:e,typeName:ee.ZodCatch})}describe(t){const e=this.constructor;return new e({...this._def,description:t})}pipe(t){return fp.create(this,t)}readonly(){return Ea.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},N8=/^c[^\s-]{8,}$/i,C8=/^[0-9a-z]+$/,z8=/^[0-9A-HJKMNP-TV-Z]{26}$/i,E8=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,R8=/^[a-z0-9_-]{21}$/i,M8=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,P8=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,T8=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,A8="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",ud,O8=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,L8=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,I8=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,D8=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,F8=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,B8=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Jv="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",H8=new RegExp(`^${Jv}$`);function e2(t){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`),e}function U8(t){return new RegExp(`^${e2(t)}$`)}function t2(t){let e=`${Jv}T${e2(t)}`;const n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function $8(t,e){return!!((e==="v4"||!e)&&O8.test(t)||(e==="v6"||!e)&&I8.test(t))}function W8(t,e){if(!M8.test(t))return!1;try{const[n]=t.split("."),r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),i=JSON.parse(atob(r));return!(typeof i!="object"||i===null||!i.typ||!i.alg||e&&i.alg!==e)}catch{return!1}}function V8(t,e){return!!((e==="v4"||!e)&&L8.test(t)||(e==="v6"||!e)&&D8.test(t))}var Fi=class zs extends ie{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==V.string){const s=this._getOrReturnCtx(e);return $(s,{code:I.invalid_type,expected:V.string,received:s.parsedType}),te}const r=new Nt;let i;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(i=this._getOrReturnCtx(e,i),$(i,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="max")e.data.length>s.value&&(i=this._getOrReturnCtx(e,i),$(i,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="length"){const o=e.data.length>s.value,l=e.data.length<s.value;(o||l)&&(i=this._getOrReturnCtx(e,i),o?$(i,{code:I.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):l&&$(i,{code:I.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),r.dirty())}else if(s.kind==="email")T8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"email",code:I.invalid_string,message:s.message}),r.dirty());else if(s.kind==="emoji")ud||(ud=new RegExp(A8,"u")),ud.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"emoji",code:I.invalid_string,message:s.message}),r.dirty());else if(s.kind==="uuid")E8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"uuid",code:I.invalid_string,message:s.message}),r.dirty());else if(s.kind==="nanoid")R8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"nanoid",code:I.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid")N8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"cuid",code:I.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid2")C8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"cuid2",code:I.invalid_string,message:s.message}),r.dirty());else if(s.kind==="ulid")z8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"ulid",code:I.invalid_string,message:s.message}),r.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),$(i,{validation:"url",code:I.invalid_string,message:s.message}),r.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"regex",code:I.invalid_string,message:s.message}),r.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(e,i),$(i,{code:I.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),r.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(i=this._getOrReturnCtx(e,i),$(i,{code:I.invalid_string,validation:{startsWith:s.value},message:s.message}),r.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(i=this._getOrReturnCtx(e,i),$(i,{code:I.invalid_string,validation:{endsWith:s.value},message:s.message}),r.dirty()):s.kind==="datetime"?t2(s).test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{code:I.invalid_string,validation:"datetime",message:s.message}),r.dirty()):s.kind==="date"?H8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{code:I.invalid_string,validation:"date",message:s.message}),r.dirty()):s.kind==="time"?U8(s).test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{code:I.invalid_string,validation:"time",message:s.message}),r.dirty()):s.kind==="duration"?P8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"duration",code:I.invalid_string,message:s.message}),r.dirty()):s.kind==="ip"?$8(e.data,s.version)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"ip",code:I.invalid_string,message:s.message}),r.dirty()):s.kind==="jwt"?W8(e.data,s.alg)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"jwt",code:I.invalid_string,message:s.message}),r.dirty()):s.kind==="cidr"?V8(e.data,s.version)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"cidr",code:I.invalid_string,message:s.message}),r.dirty()):s.kind==="base64"?F8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"base64",code:I.invalid_string,message:s.message}),r.dirty()):s.kind==="base64url"?B8.test(e.data)||(i=this._getOrReturnCtx(e,i),$(i,{validation:"base64url",code:I.invalid_string,message:s.message}),r.dirty()):ce.assertNever(s);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(i=>e.test(i),{validation:n,code:I.invalid_string,...K.errToObj(r)})}_addCheck(e){return new zs({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...K.errToObj(e)})}url(e){return this._addCheck({kind:"url",...K.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...K.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...K.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...K.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...K.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...K.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...K.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...K.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...K.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...K.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...K.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...K.errToObj(e)})}datetime(e){var n,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...K.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...K.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...K.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...K.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...K.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...K.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...K.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...K.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...K.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...K.errToObj(n)})}nonempty(e){return this.min(1,K.errToObj(e))}trim(){return new zs({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new zs({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new zs({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};Fi.create=t=>{var e;return new Fi({checks:[],typeName:ee.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...re(t)})};function q8(t,e){const n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,i=n>r?n:r,s=parseInt(t.toFixed(i).replace(".","")),o=parseInt(e.toFixed(i).replace(".",""));return s%o/Math.pow(10,i)}var ga=class Hu extends ie{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==V.number){const s=this._getOrReturnCtx(e);return $(s,{code:I.invalid_type,expected:V.number,received:s.parsedType}),te}let r;const i=new Nt;for(const s of this._def.checks)s.kind==="int"?ce.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),$(r,{code:I.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),$(r,{code:I.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),$(r,{code:I.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?q8(e.data,s.value)!==0&&(r=this._getOrReturnCtx(e,r),$(r,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),$(r,{code:I.not_finite,message:s.message}),i.dirty()):ce.assertNever(s);return{status:i.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,K.toString(n))}gt(e,n){return this.setLimit("min",e,!1,K.toString(n))}lte(e,n){return this.setLimit("max",e,!0,K.toString(n))}lt(e,n){return this.setLimit("max",e,!1,K.toString(n))}setLimit(e,n,r,i){return new Hu({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:K.toString(i)}]})}_addCheck(e){return new Hu({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:K.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:K.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:K.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:K.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:K.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:K.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&ce.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}};ga.create=t=>new ga({checks:[],typeName:ee.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...re(t)});var xa=class Uu extends ie{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==V.bigint)return this._getInvalidInput(e);let r;const i=new Nt;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(r=this._getOrReturnCtx(e,r),$(r,{code:I.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(r=this._getOrReturnCtx(e,r),$(r,{code:I.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),$(r,{code:I.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):ce.assertNever(s);return{status:i.value,value:e.data}}_getInvalidInput(e){const n=this._getOrReturnCtx(e);return $(n,{code:I.invalid_type,expected:V.bigint,received:n.parsedType}),te}gte(e,n){return this.setLimit("min",e,!0,K.toString(n))}gt(e,n){return this.setLimit("min",e,!1,K.toString(n))}lte(e,n){return this.setLimit("max",e,!0,K.toString(n))}lt(e,n){return this.setLimit("max",e,!1,K.toString(n))}setLimit(e,n,r,i){return new Uu({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:K.toString(i)}]})}_addCheck(e){return new Uu({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:K.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:K.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:K.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:K.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:K.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};xa.create=t=>{var e;return new xa({checks:[],typeName:ee.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...re(t)})};var va=class extends ie{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==V.boolean){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:V.boolean,received:n.parsedType}),te}return pt(t.data)}};va.create=t=>new va({typeName:ee.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...re(t)});var ba=class n2 extends ie{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==V.date){const s=this._getOrReturnCtx(e);return $(s,{code:I.invalid_type,expected:V.date,received:s.parsedType}),te}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return $(s,{code:I.invalid_date}),te}const r=new Nt;let i;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(i=this._getOrReturnCtx(e,i),$(i,{code:I.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),r.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(i=this._getOrReturnCtx(e,i),$(i,{code:I.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),r.dirty()):ce.assertNever(s);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new n2({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:K.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:K.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}};ba.create=t=>new ba({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:ee.ZodDate,...re(t)});var Il=class extends ie{_parse(t){if(this._getType(t)!==V.symbol){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:V.symbol,received:n.parsedType}),te}return pt(t.data)}};Il.create=t=>new Il({typeName:ee.ZodSymbol,...re(t)});var ya=class extends ie{_parse(t){if(this._getType(t)!==V.undefined){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:V.undefined,received:n.parsedType}),te}return pt(t.data)}};ya.create=t=>new ya({typeName:ee.ZodUndefined,...re(t)});var wa=class extends ie{_parse(t){if(this._getType(t)!==V.null){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:V.null,received:n.parsedType}),te}return pt(t.data)}};wa.create=t=>new wa({typeName:ee.ZodNull,...re(t)});var Bi=class extends ie{constructor(){super(...arguments),this._any=!0}_parse(t){return pt(t.data)}};Bi.create=t=>new Bi({typeName:ee.ZodAny,...re(t)});var Fr=class extends ie{constructor(){super(...arguments),this._unknown=!0}_parse(t){return pt(t.data)}};Fr.create=t=>new Fr({typeName:ee.ZodUnknown,...re(t)});var In=class extends ie{_parse(t){const e=this._getOrReturnCtx(t);return $(e,{code:I.invalid_type,expected:V.never,received:e.parsedType}),te}};In.create=t=>new In({typeName:ee.ZodNever,...re(t)});var Dl=class extends ie{_parse(t){if(this._getType(t)!==V.undefined){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:V.void,received:n.parsedType}),te}return pt(t.data)}};Dl.create=t=>new Dl({typeName:ee.ZodVoid,...re(t)});var Zr=class Go extends ie{_parse(e){const{ctx:n,status:r}=this._processInputParams(e),i=this._def;if(n.parsedType!==V.array)return $(n,{code:I.invalid_type,expected:V.array,received:n.parsedType}),te;if(i.exactLength!==null){const o=n.data.length>i.exactLength.value,l=n.data.length<i.exactLength.value;(o||l)&&($(n,{code:o?I.too_big:I.too_small,minimum:l?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&($(n,{code:I.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&($(n,{code:I.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,l)=>i.type._parseAsync(new bn(n,o,n.path,l)))).then(o=>Nt.mergeArray(r,o));const s=[...n.data].map((o,l)=>i.type._parseSync(new bn(n,o,n.path,l)));return Nt.mergeArray(r,s)}get element(){return this._def.type}min(e,n){return new Go({...this._def,minLength:{value:e,message:K.toString(n)}})}max(e,n){return new Go({...this._def,maxLength:{value:e,message:K.toString(n)}})}length(e,n){return new Go({...this._def,exactLength:{value:e,message:K.toString(n)}})}nonempty(e){return this.min(1,e)}};Zr.create=(t,e)=>new Zr({type:t,minLength:null,maxLength:null,exactLength:null,typeName:ee.ZodArray,...re(e)});function ni(t){if(t instanceof $t){const e={};for(const n in t.shape){const r=t.shape[n];e[n]=vn.create(ni(r))}return new $t({...t._def,shape:()=>e})}else return t instanceof Zr?new Zr({...t._def,type:ni(t.element)}):t instanceof vn?vn.create(ni(t.unwrap())):t instanceof gr?gr.create(ni(t.unwrap())):t instanceof mr?mr.create(t.items.map(e=>ni(e))):t}var $t=class qt extends ie{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=ce.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==V.object){const d=this._getOrReturnCtx(e);return $(d,{code:I.invalid_type,expected:V.object,received:d.parsedType}),te}const{status:r,ctx:i}=this._processInputParams(e),{shape:s,keys:o}=this._getCached(),l=[];if(!(this._def.catchall instanceof In&&this._def.unknownKeys==="strip"))for(const d in i.data)o.includes(d)||l.push(d);const c=[];for(const d of o){const u=s[d],h=i.data[d];c.push({key:{status:"valid",value:d},value:u._parse(new bn(i,h,i.path,d)),alwaysSet:d in i.data})}if(this._def.catchall instanceof In){const d=this._def.unknownKeys;if(d==="passthrough")for(const u of l)c.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(d==="strict")l.length>0&&($(i,{code:I.unrecognized_keys,keys:l}),r.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const u of l){const h=i.data[u];c.push({key:{status:"valid",value:u},value:d._parse(new bn(i,h,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const d=[];for(const u of c){const h=await u.key,p=await u.value;d.push({key:h,value:p,alwaysSet:u.alwaysSet})}return d}).then(d=>Nt.mergeObjectSync(r,d)):Nt.mergeObjectSync(r,c)}get shape(){return this._def.shape()}strict(e){return K.errToObj,new qt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{var i,s,o,l;const c=(o=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(l=K.errToObj(e).message)!==null&&l!==void 0?l:c}:{message:c}}}:{}})}strip(){return new qt({...this._def,unknownKeys:"strip"})}passthrough(){return new qt({...this._def,unknownKeys:"passthrough"})}extend(e){return new qt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new qt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ee.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new qt({...this._def,catchall:e})}pick(e){const n={};return ce.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new qt({...this._def,shape:()=>n})}omit(e){const n={};return ce.objectKeys(this.shape).forEach(r=>{e[r]||(n[r]=this.shape[r])}),new qt({...this._def,shape:()=>n})}deepPartial(){return ni(this)}partial(e){const n={};return ce.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];e&&!e[r]?n[r]=i:n[r]=i.optional()}),new qt({...this._def,shape:()=>n})}required(e){const n={};return ce.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])n[r]=this.shape[r];else{let s=this.shape[r];for(;s instanceof vn;)s=s._def.innerType;n[r]=s}}),new qt({...this._def,shape:()=>n})}keyof(){return l2(ce.objectKeys(this.shape))}};$t.create=(t,e)=>new $t({shape:()=>t,unknownKeys:"strip",catchall:In.create(),typeName:ee.ZodObject,...re(e)});$t.strictCreate=(t,e)=>new $t({shape:()=>t,unknownKeys:"strict",catchall:In.create(),typeName:ee.ZodObject,...re(e)});$t.lazycreate=(t,e)=>new $t({shape:t,unknownKeys:"strip",catchall:In.create(),typeName:ee.ZodObject,...re(e)});var ja=class extends ie{_parse(t){const{ctx:e}=this._processInputParams(t),n=this._def.options;function r(i){for(const o of i)if(o.result.status==="valid")return o.result;for(const o of i)if(o.result.status==="dirty")return e.common.issues.push(...o.ctx.common.issues),o.result;const s=i.map(o=>new en(o.ctx.common.issues));return $(e,{code:I.invalid_union,unionErrors:s}),te}if(e.common.async)return Promise.all(n.map(async i=>{const s={...e,common:{...e.common,issues:[]},parent:null};return{result:await i._parseAsync({data:e.data,path:e.path,parent:s}),ctx:s}})).then(r);{let i;const s=[];for(const l of n){const c={...e,common:{...e.common,issues:[]},parent:null},d=l._parseSync({data:e.data,path:e.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!i&&(i={result:d,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(i)return e.common.issues.push(...i.ctx.common.issues),i.result;const o=s.map(l=>new en(l));return $(e,{code:I.invalid_union,unionErrors:o}),te}}get options(){return this._def.options}};ja.create=(t,e)=>new ja({options:t,typeName:ee.ZodUnion,...re(e)});var Sn=t=>t instanceof _a?Sn(t.schema):t instanceof rn?Sn(t.innerType()):t instanceof Sa?[t.value]:t instanceof Ba?t.options:t instanceof Na?ce.objectValues(t.enum):t instanceof Ca?Sn(t._def.innerType):t instanceof ya?[void 0]:t instanceof wa?[null]:t instanceof vn?[void 0,...Sn(t.unwrap())]:t instanceof gr?[null,...Sn(t.unwrap())]:t instanceof pp||t instanceof Ea?Sn(t.unwrap()):t instanceof za?Sn(t._def.innerType):[],r2=class i2 extends ie{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==V.object)return $(n,{code:I.invalid_type,expected:V.object,received:n.parsedType}),te;const r=this.discriminator,i=n.data[r],s=this.optionsMap.get(i);return s?n.common.async?s._parseAsync({data:n.data,path:n.path,parent:n}):s._parseSync({data:n.data,path:n.path,parent:n}):($(n,{code:I.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),te)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){const i=new Map;for(const s of n){const o=Sn(s.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const l of o){if(i.has(l))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(l)}`);i.set(l,s)}}return new i2({typeName:ee.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:i,...re(r)})}};function $u(t,e){const n=En(t),r=En(e);if(t===e)return{valid:!0,data:t};if(n===V.object&&r===V.object){const i=ce.objectKeys(e),s=ce.objectKeys(t).filter(l=>i.indexOf(l)!==-1),o={...t,...e};for(const l of s){const c=$u(t[l],e[l]);if(!c.valid)return{valid:!1};o[l]=c.data}return{valid:!0,data:o}}else if(n===V.array&&r===V.array){if(t.length!==e.length)return{valid:!1};const i=[];for(let s=0;s<t.length;s++){const o=t[s],l=e[s],c=$u(o,l);if(!c.valid)return{valid:!1};i.push(c.data)}return{valid:!0,data:i}}else return n===V.date&&r===V.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var ka=class extends ie{_parse(t){const{status:e,ctx:n}=this._processInputParams(t),r=(i,s)=>{if(Fu(i)||Fu(s))return te;const o=$u(i.value,s.value);return o.valid?((Bu(i)||Bu(s))&&e.dirty(),{status:e.value,value:o.data}):($(n,{code:I.invalid_intersection_types}),te)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([i,s])=>r(i,s)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};ka.create=(t,e,n)=>new ka({left:t,right:e,typeName:ee.ZodIntersection,...re(n)});var mr=class s2 extends ie{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==V.array)return $(r,{code:I.invalid_type,expected:V.array,received:r.parsedType}),te;if(r.data.length<this._def.items.length)return $(r,{code:I.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),te;!this._def.rest&&r.data.length>this._def.items.length&&($(r,{code:I.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const s=[...r.data].map((o,l)=>{const c=this._def.items[l]||this._def.rest;return c?c._parse(new bn(r,o,r.path,l)):null}).filter(o=>!!o);return r.common.async?Promise.all(s).then(o=>Nt.mergeArray(n,o)):Nt.mergeArray(n,s)}get items(){return this._def.items}rest(e){return new s2({...this._def,rest:e})}};mr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new mr({items:t,typeName:ee.ZodTuple,rest:null,...re(e)})};var a2=class Wu extends ie{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==V.object)return $(r,{code:I.invalid_type,expected:V.object,received:r.parsedType}),te;const i=[],s=this._def.keyType,o=this._def.valueType;for(const l in r.data)i.push({key:s._parse(new bn(r,l,r.path,l)),value:o._parse(new bn(r,r.data[l],r.path,l)),alwaysSet:l in r.data});return r.common.async?Nt.mergeObjectAsync(n,i):Nt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof ie?new Wu({keyType:e,valueType:n,typeName:ee.ZodRecord,...re(r)}):new Wu({keyType:Fi.create(),valueType:e,typeName:ee.ZodRecord,...re(n)})}},Fl=class extends ie{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:e,ctx:n}=this._processInputParams(t);if(n.parsedType!==V.map)return $(n,{code:I.invalid_type,expected:V.map,received:n.parsedType}),te;const r=this._def.keyType,i=this._def.valueType,s=[...n.data.entries()].map(([o,l],c)=>({key:r._parse(new bn(n,o,n.path,[c,"key"])),value:i._parse(new bn(n,l,n.path,[c,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of s){const c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return te;(c.status==="dirty"||d.status==="dirty")&&e.dirty(),o.set(c.value,d.value)}return{status:e.value,value:o}})}else{const o=new Map;for(const l of s){const c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return te;(c.status==="dirty"||d.status==="dirty")&&e.dirty(),o.set(c.value,d.value)}return{status:e.value,value:o}}}};Fl.create=(t,e,n)=>new Fl({valueType:e,keyType:t,typeName:ee.ZodMap,...re(n)});var Bl=class Vu extends ie{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==V.set)return $(r,{code:I.invalid_type,expected:V.set,received:r.parsedType}),te;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&($(r,{code:I.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&($(r,{code:I.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const s=this._def.valueType;function o(c){const d=new Set;for(const u of c){if(u.status==="aborted")return te;u.status==="dirty"&&n.dirty(),d.add(u.value)}return{status:n.value,value:d}}const l=[...r.data.values()].map((c,d)=>s._parse(new bn(r,c,r.path,d)));return r.common.async?Promise.all(l).then(c=>o(c)):o(l)}min(e,n){return new Vu({...this._def,minSize:{value:e,message:K.toString(n)}})}max(e,n){return new Vu({...this._def,maxSize:{value:e,message:K.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}};Bl.create=(t,e)=>new Bl({valueType:t,minSize:null,maxSize:null,typeName:ee.ZodSet,...re(e)});var o2=class Ko extends ie{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==V.function)return $(n,{code:I.invalid_type,expected:V.function,received:n.parsedType}),te;function r(l,c){return Ol({data:l,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Al(),Di].filter(d=>!!d),issueData:{code:I.invalid_arguments,argumentsError:c}})}function i(l,c){return Ol({data:l,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Al(),Di].filter(d=>!!d),issueData:{code:I.invalid_return_type,returnTypeError:c}})}const s={errorMap:n.common.contextualErrorMap},o=n.data;if(this._def.returns instanceof Hi){const l=this;return pt(async function(...c){const d=new en([]),u=await l._def.args.parseAsync(c,s).catch(f=>{throw d.addIssue(r(c,f)),d}),h=await Reflect.apply(o,this,u);return await l._def.returns._def.type.parseAsync(h,s).catch(f=>{throw d.addIssue(i(h,f)),d})})}else{const l=this;return pt(function(...c){const d=l._def.args.safeParse(c,s);if(!d.success)throw new en([r(c,d.error)]);const u=Reflect.apply(o,this,d.data),h=l._def.returns.safeParse(u,s);if(!h.success)throw new en([i(u,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ko({...this._def,args:mr.create(e).rest(Fr.create())})}returns(e){return new Ko({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new Ko({args:e||mr.create([]).rest(Fr.create()),returns:n||Fr.create(),typeName:ee.ZodFunction,...re(r)})}},_a=class extends ie{get schema(){return this._def.getter()}_parse(t){const{ctx:e}=this._processInputParams(t);return this._def.getter()._parse({data:e.data,path:e.path,parent:e})}};_a.create=(t,e)=>new _a({getter:t,typeName:ee.ZodLazy,...re(e)});var Sa=class extends ie{_parse(t){if(t.data!==this._def.value){const e=this._getOrReturnCtx(t);return $(e,{received:e.data,code:I.invalid_literal,expected:this._def.value}),te}return{status:"valid",value:t.data}}get value(){return this._def.value}};Sa.create=(t,e)=>new Sa({value:t,typeName:ee.ZodLiteral,...re(e)});function l2(t,e){return new Ba({values:t,typeName:ee.ZodEnum,...re(e)})}var Ba=class qu extends ie{constructor(){super(...arguments),Ns.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),r=this._def.values;return $(n,{expected:ce.joinValues(r),received:n.parsedType,code:I.invalid_type}),te}if(Ll(this,Ns)||Qv(this,Ns,new Set(this._def.values)),!Ll(this,Ns).has(e.data)){const n=this._getOrReturnCtx(e),r=this._def.values;return $(n,{received:n.data,code:I.invalid_enum_value,options:r}),te}return pt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return qu.create(e,{...this._def,...n})}exclude(e,n=this._def){return qu.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}};Ns=new WeakMap;Ba.create=l2;var Na=class extends ie{constructor(){super(...arguments),Cs.set(this,void 0)}_parse(t){const e=ce.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(t);if(n.parsedType!==V.string&&n.parsedType!==V.number){const r=ce.objectValues(e);return $(n,{expected:ce.joinValues(r),received:n.parsedType,code:I.invalid_type}),te}if(Ll(this,Cs)||Qv(this,Cs,new Set(ce.getValidEnumValues(this._def.values))),!Ll(this,Cs).has(t.data)){const r=ce.objectValues(e);return $(n,{received:n.data,code:I.invalid_enum_value,options:r}),te}return pt(t.data)}get enum(){return this._def.values}};Cs=new WeakMap;Na.create=(t,e)=>new Na({values:t,typeName:ee.ZodNativeEnum,...re(e)});var Hi=class extends ie{unwrap(){return this._def.type}_parse(t){const{ctx:e}=this._processInputParams(t);if(e.parsedType!==V.promise&&e.common.async===!1)return $(e,{code:I.invalid_type,expected:V.promise,received:e.parsedType}),te;const n=e.parsedType===V.promise?e.data:Promise.resolve(e.data);return pt(n.then(r=>this._def.type.parseAsync(r,{path:e.path,errorMap:e.common.contextualErrorMap})))}};Hi.create=(t,e)=>new Hi({type:t,typeName:ee.ZodPromise,...re(e)});var rn=class extends ie{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ee.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:e,ctx:n}=this._processInputParams(t),r=this._def.effect||null,i={addIssue:s=>{$(n,s),s.fatal?e.abort():e.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type==="preprocess"){const s=r.transform(n.data,i);if(n.common.async)return Promise.resolve(s).then(async o=>{if(e.value==="aborted")return te;const l=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return l.status==="aborted"?te:l.status==="dirty"||e.value==="dirty"?mi(l.value):l});{if(e.value==="aborted")return te;const o=this._def.schema._parseSync({data:s,path:n.path,parent:n});return o.status==="aborted"?te:o.status==="dirty"||e.value==="dirty"?mi(o.value):o}}if(r.type==="refinement"){const s=o=>{const l=r.refinement(o,i);if(n.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?te:(o.status==="dirty"&&e.dirty(),s(o.value),{status:e.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?te:(o.status==="dirty"&&e.dirty(),s(o.value).then(()=>({status:e.value,value:o.value}))))}if(r.type==="transform")if(n.common.async===!1){const s=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Yr(s))return s;const o=r.transform(s.value,i);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:e.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(s=>Yr(s)?Promise.resolve(r.transform(s.value,i)).then(o=>({status:e.value,value:o})):s);ce.assertNever(r)}};rn.create=(t,e,n)=>new rn({schema:t,typeName:ee.ZodEffects,effect:e,...re(n)});rn.createWithPreprocess=(t,e,n)=>new rn({schema:e,effect:{type:"preprocess",transform:t},typeName:ee.ZodEffects,...re(n)});var vn=class extends ie{_parse(t){return this._getType(t)===V.undefined?pt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}};vn.create=(t,e)=>new vn({innerType:t,typeName:ee.ZodOptional,...re(e)});var gr=class extends ie{_parse(t){return this._getType(t)===V.null?pt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}};gr.create=(t,e)=>new gr({innerType:t,typeName:ee.ZodNullable,...re(e)});var Ca=class extends ie{_parse(t){const{ctx:e}=this._processInputParams(t);let n=e.data;return e.parsedType===V.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:e.path,parent:e})}removeDefault(){return this._def.innerType}};Ca.create=(t,e)=>new Ca({innerType:t,typeName:ee.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...re(e)});var za=class extends ie{_parse(t){const{ctx:e}=this._processInputParams(t),n={...e,common:{...e.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return ma(r)?r.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new en(n.common.issues)},input:n.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new en(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};za.create=(t,e)=>new za({innerType:t,typeName:ee.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...re(e)});var Hl=class extends ie{_parse(t){if(this._getType(t)!==V.nan){const n=this._getOrReturnCtx(t);return $(n,{code:I.invalid_type,expected:V.nan,received:n.parsedType}),te}return{status:"valid",value:t.data}}};Hl.create=t=>new Hl({typeName:ee.ZodNaN,...re(t)});var Y8=Symbol("zod_brand"),pp=class extends ie{_parse(t){const{ctx:e}=this._processInputParams(t),n=e.data;return this._def.type._parse({data:n,path:e.path,parent:e})}unwrap(){return this._def.type}},fp=class c2 extends ie{_parse(e){const{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?te:s.status==="dirty"?(n.dirty(),mi(s.value)):this._def.out._parseAsync({data:s.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?te:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(e,n){return new c2({in:e,out:n,typeName:ee.ZodPipeline})}},Ea=class extends ie{_parse(t){const e=this._def.innerType._parse(t),n=r=>(Yr(r)&&(r.value=Object.freeze(r.value)),r);return ma(e)?e.then(r=>n(r)):n(e)}unwrap(){return this._def.innerType}};Ea.create=(t,e)=>new Ea({innerType:t,typeName:ee.ZodReadonly,...re(e)});function Lm(t,e){const n=typeof t=="function"?t(e):typeof t=="string"?{message:t}:t;return typeof n=="string"?{message:n}:n}function d2(t,e={},n){return t?Bi.create().superRefine((r,i)=>{var s,o;const l=t(r);if(l instanceof Promise)return l.then(c=>{var d,u;if(!c){const h=Lm(e,r),p=(u=(d=h.fatal)!==null&&d!==void 0?d:n)!==null&&u!==void 0?u:!0;i.addIssue({code:"custom",...h,fatal:p})}});if(!l){const c=Lm(e,r),d=(o=(s=c.fatal)!==null&&s!==void 0?s:n)!==null&&o!==void 0?o:!0;i.addIssue({code:"custom",...c,fatal:d})}}):Bi.create()}var Z8={object:$t.lazycreate},ee;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(ee||(ee={}));var G8=(t,e={message:`Input not instance of ${t.name}`})=>d2(n=>n instanceof t,e),u2=Fi.create,h2=ga.create,K8=Hl.create,X8=xa.create,p2=va.create,Q8=ba.create,J8=Il.create,eC=ya.create,tC=wa.create,nC=Bi.create,rC=Fr.create,iC=In.create,sC=Dl.create,aC=Zr.create,oC=$t.create,lC=$t.strictCreate,cC=ja.create,dC=r2.create,uC=ka.create,hC=mr.create,pC=a2.create,fC=Fl.create,mC=Bl.create,gC=o2.create,xC=_a.create,vC=Sa.create,bC=Ba.create,yC=Na.create,wC=Hi.create,Im=rn.create,jC=vn.create,kC=gr.create,_C=rn.createWithPreprocess,SC=fp.create,NC=()=>u2().optional(),CC=()=>h2().optional(),zC=()=>p2().optional(),EC={string:t=>Fi.create({...t,coerce:!0}),number:t=>ga.create({...t,coerce:!0}),boolean:t=>va.create({...t,coerce:!0}),bigint:t=>xa.create({...t,coerce:!0}),date:t=>ba.create({...t,coerce:!0})},RC=te,Ke=Object.freeze({__proto__:null,defaultErrorMap:Di,setErrorMap:_8,getErrorMap:Al,makeIssue:Ol,EMPTY_PATH:S8,addIssueToContext:$,ParseStatus:Nt,INVALID:te,DIRTY:mi,OK:pt,isAborted:Fu,isDirty:Bu,isValid:Yr,isAsync:ma,get util(){return ce},get objectUtil(){return Du},ZodParsedType:V,getParsedType:En,ZodType:ie,datetimeRegex:t2,ZodString:Fi,ZodNumber:ga,ZodBigInt:xa,ZodBoolean:va,ZodDate:ba,ZodSymbol:Il,ZodUndefined:ya,ZodNull:wa,ZodAny:Bi,ZodUnknown:Fr,ZodNever:In,ZodVoid:Dl,ZodArray:Zr,ZodObject:$t,ZodUnion:ja,ZodDiscriminatedUnion:r2,ZodIntersection:ka,ZodTuple:mr,ZodRecord:a2,ZodMap:Fl,ZodSet:Bl,ZodFunction:o2,ZodLazy:_a,ZodLiteral:Sa,ZodEnum:Ba,ZodNativeEnum:Na,ZodPromise:Hi,ZodEffects:rn,ZodTransformer:rn,ZodOptional:vn,ZodNullable:gr,ZodDefault:Ca,ZodCatch:za,ZodNaN:Hl,BRAND:Y8,ZodBranded:pp,ZodPipeline:fp,ZodReadonly:Ea,custom:d2,Schema:ie,ZodSchema:ie,late:Z8,get ZodFirstPartyTypeKind(){return ee},coerce:EC,any:nC,array:aC,bigint:X8,boolean:p2,date:Q8,discriminatedUnion:dC,effect:Im,enum:bC,function:gC,instanceof:G8,intersection:uC,lazy:xC,literal:vC,map:fC,nan:K8,nativeEnum:yC,never:iC,null:tC,nullable:kC,number:h2,object:oC,oboolean:zC,onumber:CC,optional:jC,ostring:NC,pipeline:SC,preprocess:_C,promise:wC,record:pC,set:mC,strictObject:lC,string:u2,symbol:J8,transformer:Im,tuple:hC,undefined:eC,union:cC,unknown:rC,void:sC,NEVER:RC,ZodIssueCode:I,quotelessJson:k8,ZodError:en}),Dm={name:"@imgly/background-removal",version:"1.7.0"},MC=Ke.object({publicPath:Ke.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(t=>t.replace("${PACKAGE_NAME}",Dm.name).replace("${PACKAGE_VERSION}",Dm.version)),debug:Ke.boolean().default(!1).describe("Whether to enable debug logging."),rescale:Ke.boolean().default(!0).describe("Whether to rescale the image."),device:Ke.enum(["cpu","gpu"]).default("cpu").describe("The device to run the model on."),proxyToWorker:Ke.boolean().default(!1).describe("Whether to proxy inference to a web worker."),fetchArgs:Ke.any().default({}).describe("Arguments to pass to fetch when loading the model."),progress:Ke.function().args(Ke.string(),Ke.number(),Ke.number()).returns(Ke.void()).describe("Progress callback.").optional(),model:Ke.preprocess(t=>{switch(t){case"large":return"isnet";case"small":return"isnet_quint8";case"medium":return"isnet_fp16";default:return t}},Ke.enum(["isnet","isnet_fp16","isnet_quint8"])).default("medium"),output:Ke.object({format:Ke.enum(["image/png","image/jpeg","image/webp","image/x-rgba8","image/x-alpha8"]).default("image/png"),quality:Ke.number().default(.8)}).default({})}).default({}).transform(t=>(t.debug&&console.log("Config:",t),t.debug&&!t.progress&&(t.progress=t.progress??((e,n,r)=>{console.debug(`Downloading ${e}: ${n} of ${r}`)}),crossOriginIsolated||t.debug&&console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")),t));function PC(t){return MC.parse(t??{})}var TC=xc(vc());async function AC(t){t.debug&&console.debug("Loading model...",t.model);const e=t.model,r=await(await Yv(`/models/${e}`,t)).arrayBuffer();return await w8(r,t)}async function OC(t){t=PC(t);const e=await AC(t);return{config:t,session:{base:e}}}async function LC(t,e,n){const[i,s,o]=t.shape,l=!1;let c=Tm(t,1024,1024,l);const d=g8(c);let u=await j8(n.base,[["input",d]],["output"],e),h=(0,TC.default)(u[0].data,[1024,1024,1]),p=v8(h);return e.rescale?(p=Tm(p,s,i,l),[p,t]):[p,c]}var IC=c8(OC,t=>JSON.stringify(t));async function DC(t,e){var p,f,m,g;const{config:n,session:r}=await IC(e);n.progress&&n.progress("compute:decode",0,4);const i=await x8(t,n);(p=n.progress)==null||p.call(n,"compute:inference",1,4);const[s,o]=await LC(i,n,r);(f=n.progress)==null||f.call(n,"compute:mask",2,4);const l=o,[c,d]=l.shape,u=c*d;for(let b=0;b<u;b+=1)l.data[4*b+3]=s.data[b];(m=n.progress)==null||m.call(n,"compute:encode",3,4);const h=await u8(l,n.output.quality,n.output.format);return(g=n.progress)==null||g.call(n,"compute:encode",4,4),h}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/function FC({imageSrc:t,onSave:e,onCancel:n}){const[r,i]=w.useState({x:0,y:0}),[s,o]=w.useState(1),[l,c]=w.useState(null),[d,u]=w.useState(0),[h,p]=w.useState(!1),[f,m]=w.useState(!1),[g,b]=w.useState(null);w.useRef(null);const x=()=>{try{const E=document.createElement("canvas");return!!(E.getContext("webgl")||E.getContext("experimental-webgl"))}catch{return!1}},v=async E=>new Promise((C,B)=>{const O=new Image;O.crossOrigin="anonymous",O.onload=()=>{const L=document.createElement("canvas"),P=L.getContext("2d");if(!P){B(new Error("Canvas not supported"));return}L.width=O.width,L.height=O.height,P.drawImage(O,0,0);const F=P.getImageData(0,0,L.width,L.height),W=F.data;for(let M=0;M<W.length;M+=4){const z=W[M],H=W[M+1],G=W[M+2],J=Math.max(z,H,G),xe=Math.min(z,H,G),pe=(J+xe)/2,_e=J===0?0:(J-xe)/J;pe>200&&_e<.1&&(W[M+3]=0)}P.putImageData(F,0,0),C(L.toDataURL("image/png"))},O.onerror=()=>B(new Error("Failed to load image")),O.src=E});w.useEffect(()=>{const E=C=>{C.key==="Escape"?n():C.key==="Enter"&&C.ctrlKey&&N()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[n]);const y=w.useCallback((E,C)=>{c(C)},[]),k=w.useCallback(async(E,C,B=0)=>{const O=new Image;O.src=E,await new Promise(G=>{O.onload=G});const L=document.createElement("canvas"),P=L.getContext("2d");if(!P)throw new Error("No 2d context");const W=2*(Math.max(O.width,O.height)/2*Math.sqrt(2));L.width=W,L.height=W,P.translate(W/2,W/2),P.rotate(B*Math.PI/180),P.translate(-W/2,-W/2),P.drawImage(O,W/2-O.width*.5,W/2-O.height*.5);const M=P.getImageData(0,0,W,W),z=document.createElement("canvas");z.width=C.width,z.height=C.height;const H=z.getContext("2d");if(!H)throw new Error("No 2d context");return H.putImageData(M,0-W/2+O.width*.5-C.x,0-W/2+O.height*.5-C.y),new Promise(G=>{z.toBlob(J=>{J&&G(URL.createObjectURL(J))},"image/jpeg",.95)})},[]),j=async()=>{if(!t)return;const E=()=>{try{const C=document.createElement("canvas");return!!(C.getContext("webgl")||C.getContext("experimental-webgl"))}catch{return!1}};p(!0);try{let C,B;if(E())try{let O=t;t.startsWith("blob:")&&(O=await(await fetch(t)).blob()),C=await DC(O),B=URL.createObjectURL(C)}catch(O){console.warn("AI background removal failed, trying fallback:",O),B=await v(t)}else console.log("AI background removal not supported, using fallback"),B=await v(t);b(B),m(!0),Zt("Background removed successfully!","success")}catch(C){console.error("Background removal failed:",C);let B="Background removal failed. ";C instanceof Error&&(C.message.includes("WebGL")||C.message.includes("WebGPU")?B+="Your browser may not support the required graphics acceleration. Try using a modern browser like Chrome or Edge.":C.message.includes("CORS")?B+="The image cannot be processed due to security restrictions.":C.message.includes("format")?B+="The image format is not supported.":B+="Please try again or use a different image."),alert(B+`

You can still crop and resize your image.`)}finally{p(!1)}},S=async(E,C)=>{const B=new Image;B.src=g||t,await new Promise(F=>{B.onload=F});const O=document.createElement("canvas"),L=O.getContext("2d");if(!L)return;O.width=E,O.height=C,L.drawImage(B,0,0,E,C);const P=O.toDataURL("image/jpeg",.95);b(P)},_=async()=>{if(l)try{const E=await k(g||t,l,d);b(E)}catch(E){console.error("Cropping failed:",E)}},N=async()=>{if(!g&&!l){const L=await(await fetch(t)).blob();e(L);return}let E=g||t;l&&!g&&(E=await k(t,l,d));const B=await(await fetch(E)).blob();e(B)},A=()=>{b(null),m(!1),i({x:0,y:0}),o(1),u(0)};return a.jsxs("div",{className:"image-editor-modal",children:[a.jsx("div",{className:"image-editor-overlay",onClick:n}),a.jsxs("div",{className:"image-editor-content",children:[a.jsxs("div",{className:"image-editor-header",children:[a.jsx("h3",{children:"Edit Profile Picture"}),a.jsx("button",{className:"close-btn",onClick:n,children:"×"})]}),a.jsxs("div",{className:"image-editor-body",children:[a.jsxs("div",{className:"image-preview",children:[g?a.jsx("div",{className:"processed-image-container",children:a.jsx("img",{src:g,alt:"Processed",className:"processed-image"})}):a.jsx(Lv,{image:t,crop:r,zoom:s,aspect:1,onCropChange:i,onZoomChange:o,onCropComplete:y,cropShape:"round",showGrid:!1}),h&&a.jsx("div",{className:"processing-overlay",children:a.jsxs("div",{className:"processing-content",children:[a.jsx("div",{className:"processing-spinner"}),a.jsx("div",{className:"processing-text",children:"Removing background..."}),a.jsxs("div",{className:"processing-method",children:["Using ",x()?"AI-powered":"basic"," removal"]})]})})]}),a.jsxs("div",{className:"editor-controls",children:[!g&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"control-group",children:[a.jsxs("label",{children:["Zoom: ",s.toFixed(1),"x"]}),a.jsx("input",{type:"range",min:"1",max:"3",step:"0.1",value:s,onChange:E=>o(Number(E.target.value))})]}),a.jsxs("div",{className:"control-group",children:[a.jsxs("label",{children:["Rotation: ",d,"°"]}),a.jsx("input",{type:"range",min:"-180",max:"180",step:"15",value:d,onChange:E=>u(Number(E.target.value))})]}),a.jsx("button",{className:"editor-btn",onClick:_,disabled:!l,children:"Apply Crop"})]}),a.jsx("div",{className:"control-group",children:a.jsx("button",{className:"editor-btn secondary",onClick:j,disabled:h||f,title:x()?"Remove background using AI":"Using basic background removal (AI not supported in this browser)",children:h?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"loading-spinner"}),"Removing..."]}):f?"Background Removed":a.jsxs(a.Fragment,{children:["Remove Background",!x()&&a.jsx("span",{className:"bg-removal-note",children:" (Basic)"})]})})}),a.jsxs("div",{className:"control-group",children:[a.jsx("label",{children:"Resize:"}),a.jsxs("div",{className:"resize-options",children:[a.jsx("button",{className:"editor-btn small",onClick:()=>S(256,256),children:"256×256"}),a.jsx("button",{className:"editor-btn small",onClick:()=>S(512,512),children:"512×512"}),a.jsx("button",{className:"editor-btn small",onClick:()=>S(1024,1024),children:"1024×1024"})]})]}),a.jsx("div",{className:"control-group",children:a.jsx("button",{className:"editor-btn secondary",onClick:A,children:"Reset"})})]})]}),a.jsxs("div",{className:"image-editor-footer",children:[a.jsx("button",{className:"editor-btn cancel",onClick:n,children:"Cancel"}),a.jsx("button",{className:"editor-btn primary",onClick:N,children:"Save Changes"})]})]}),a.jsx("style",{children:`
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
      `})]})}function BC(){const{user:t,updateUser:e}=on(),[n,r]=w.useState(!0),[i,s]=w.useState(!1),[o,l]=w.useState(!1),[c,d]=w.useState(""),[u,h]=w.useState(""),[p,f]=w.useState(""),[m,g]=w.useState(""),[b,x]=w.useState(void 0),[v,y]=w.useState(null),[k,j]=w.useState(null),[S,_]=w.useState(""),[N,A]=w.useState(""),[E,C]=w.useState(""),[B,O]=w.useState(!1),[L,P]=w.useState(null),[F,W]=w.useState(""),[M,z]=w.useState(!1),H=w.useRef(null);w.useEffect(()=>{z(!0)},[]),w.useEffect(()=>{(v||k)&&H.current&&H.current.focus()},[v,k]),w.useEffect(()=>{async function de(){try{r(!0);const qe=(await Q.get("/auth/me")).data||{};d(qe.full_name||""),h(qe.email||""),f(qe.phone||""),g(qe.address||""),x(qe.avatar_url||(t==null?void 0:t.avatar_url)||void 0)}catch{d((t==null?void 0:t.full_name)||""),h((t==null?void 0:t.email)||""),f((t==null?void 0:t.phone)||""),g((t==null?void 0:t.address)||""),x((t==null?void 0:t.avatar_url)||void 0)}finally{r(!1)}}de()},[]);async function G(de){var Ve,qe;if(de.preventDefault(),j(null),y(null),!u){j("Email is required");return}try{s(!0);const He=(await Q.put("/auth/me",{email:u,full_name:c,phone:p,address:m})).data;e({email:He.email,full_name:He.full_name,phone:He.phone,address:He.address}),y("Profile updated successfully"),Zt("Profile updated","success")}catch(dt){const He=((qe=(Ve=dt==null?void 0:dt.response)==null?void 0:Ve.data)==null?void 0:qe.detail)||"Failed to update profile";j(String(He)),Zt("Could not update profile","error")}finally{s(!1)}}async function J(de){var Ve,qe;if(de.preventDefault(),j(null),y(null),!S||!N||!E){j("Please fill all password fields");return}if(N.length<8){j("New password must be at least 8 characters");return}if(N!==E){j("Passwords do not match");return}try{l(!0),await Q.post("/auth/change-password",{old_password:S,new_password:N}),y("Password changed successfully"),_(""),A(""),C(""),Zt("Password updated","success")}catch(dt){const He=((qe=(Ve=dt==null?void 0:dt.response)==null?void 0:Ve.data)==null?void 0:qe.detail)||"Failed to change password";j(String(He)),Zt("Could not change password","error")}finally{l(!1)}}async function xe(de){var dt;const Ve=(dt=de.target.files)==null?void 0:dt[0];if(!Ve)return;if(!/image\/(png|jpe?g|webp)/.test(Ve.type)){Zt("Please select a PNG, JPG, or WEBP image","error");return}if(Ve.size>3*1024*1024){Zt("Image must be under 3MB","error");return}const qe=URL.createObjectURL(Ve);P(Ve),W(qe),O(!0)}async function pe(de){var qe;if(!L)return;const Ve=new FormData;Ve.append("file",de,L.name);try{let He=(qe=(await Q.post("/auth/avatar",Ve,{headers:{"Content-Type":"multipart/form-data"}})).data)==null?void 0:qe.avatar_url;He&&(He=`${He}${He.includes("?")?"&":"?"}v=${Date.now()}`),x(He),e({avatar_url:He}),Zt("Profile picture updated","success"),O(!1),P(null),W("")}catch{Zt("Failed to upload picture","error")}}function _e(){O(!1),P(null),W("");const de=document.querySelector('input[type="file"]');de&&(de.value="")}function Me(){b&&(W(b),O(!0))}return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"page-background",children:[a.jsx("div",{className:"gradient-orb orb-1"}),a.jsx("div",{className:"gradient-orb orb-2"}),a.jsx("div",{className:"gradient-orb orb-3"}),a.jsx("div",{className:"grid-overlay"}),a.jsxs("div",{className:"floating-shapes",children:[a.jsx("div",{className:"shape shape-1"}),a.jsx("div",{className:"shape shape-2"}),a.jsx("div",{className:"shape shape-3"}),a.jsx("div",{className:"shape shape-4"})]})]}),a.jsx("section",{className:`account-hero ${M?"animate-in":""}`,children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"})}),"Your Profile"]}),a.jsx("h1",{className:"headline",children:"Account Settings"}),a.jsx("p",{className:"subhead",children:"Update your profile details, password, and picture."}),a.jsxs("div",{className:"hero-decorations",children:[a.jsx("div",{className:"decoration-wave wave-1"}),a.jsx("div",{className:"decoration-wave wave-2"})]})]})})}),a.jsx("section",{className:"section",children:a.jsxs("div",{className:`container acct-wrap ${M?"animate-in":""}`,children:[a.jsxs("div",{className:"panel main-panel",children:[a.jsxs("div",{className:"panel-header",children:[a.jsxs("h2",{className:"section-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Profile"]}),a.jsx("div",{className:"title-underline"})]}),a.jsxs("div",{ref:H,tabIndex:-1,"aria-live":"polite","aria-atomic":"true",className:"live",children:[v&&a.jsxs("div",{className:"alert success",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),v]}),k&&a.jsxs("div",{className:"alert error",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"})}),k]})]}),a.jsxs("form",{className:"form",onSubmit:G,noValidate:!0,children:[a.jsxs("div",{className:"avatar-row",children:[a.jsxs("div",{className:"avatar-container",children:[a.jsx("div",{className:"avatar","aria-label":"Profile picture",children:b?a.jsx("img",{src:b,alt:"Profile"}):a.jsx("div",{className:"img-fallback","aria-hidden":!0,children:a.jsx("svg",{width:"32",height:"32",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})})})}),a.jsx("div",{className:"avatar-ring"}),a.jsx("div",{className:"avatar-pulse"})]}),a.jsxs("div",{className:"avatar-buttons",children:[a.jsxs("label",{className:"btn btn-upload",role:"button",children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"})}),"Change picture",a.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg,image/webp",onChange:xe,hidden:!0})]}),b&&a.jsxs("button",{className:"btn btn-secondary",type:"button",onClick:Me,children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}),"Edit picture"]})]})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"fullName",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"})}),"Full name"]}),a.jsx("input",{id:"fullName",type:"text",value:c,onChange:de=>d(de.target.value),placeholder:"Your name"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"email",children:[a.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:[a.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),a.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"Email"]}),a.jsx("input",{id:"email",type:"email",value:u,onChange:de=>h(de.target.value),required:!0})]}),a.jsxs("div",{className:"row2",children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"phone",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})}),"Phone"]}),a.jsx("input",{id:"phone",type:"tel",value:p,onChange:de=>f(de.target.value),placeholder:"Optional"})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"address",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"})}),"Address"]}),a.jsx("input",{id:"address",type:"text",value:m,onChange:de=>g(de.target.value),placeholder:"Optional"})]})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:i,children:i?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Saving…"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{d:"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"})}),"Save changes"]})})]})]}),a.jsxs("aside",{className:"panel side-panel",children:[a.jsxs("div",{className:"panel-header",children:[a.jsxs("h2",{className:"section-title",children:[a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"Change password"]}),a.jsx("div",{className:"title-underline"})]}),a.jsxs("form",{className:"form",onSubmit:J,noValidate:!0,children:[a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"old",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"})}),"Current password"]}),a.jsx("input",{id:"old",type:"password",value:S,onChange:de=>_(de.target.value),autoComplete:"current-password",required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"new",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"})}),"New password"]}),a.jsx("input",{id:"new",type:"password",value:N,onChange:de=>A(de.target.value),autoComplete:"new-password",required:!0})]}),a.jsxs("div",{className:"field",children:[a.jsxs("label",{htmlFor:"confirm",children:[a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Confirm new password"]}),a.jsx("input",{id:"confirm",type:"password",value:E,onChange:de=>C(de.target.value),autoComplete:"new-password",required:!0})]}),a.jsx("button",{className:"btn btn-primary",type:"submit",disabled:o,children:o?a.jsxs(a.Fragment,{children:[a.jsxs("svg",{className:"spinner-icon",width:"18",height:"18",viewBox:"0 0 24 24",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none",opacity:"0.25"}),a.jsx("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]}),"Updating…"]}):a.jsxs(a.Fragment,{children:[a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"})}),"Update password"]})})]})]})]})}),a.jsx("style",{children:`
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
      `}),B&&F&&a.jsx(FC,{imageSrc:F,onSave:pe,onCancel:_e})]})}const hd=sessionStorage.redirect;delete sessionStorage.redirect;hd&&hd!==location.href&&history.replaceState(null,"",hd);pd.createRoot(document.getElementById("root")).render(function(){return a.jsx(Km.StrictMode,{children:a.jsx(Zw,{children:a.jsx(zj,{children:a.jsxs(Ej,{children:[a.jsx(mS,{}),a.jsxs(Fw,{children:[a.jsxs(Le,{element:a.jsx(Bj,{}),children:[a.jsx(Le,{path:"/",element:a.jsx(Xf,{})}),a.jsx(Le,{path:"/home",element:a.jsx(Xf,{})}),a.jsx(Le,{path:"/about",element:a.jsx(H3,{})}),a.jsx(Le,{path:"/faq",element:a.jsx(pS,{})}),a.jsx(Le,{path:"/search",element:a.jsx(fS,{})}),a.jsx(Le,{path:"/login",element:a.jsx(Mj,{})}),a.jsx(Le,{path:"/register",element:a.jsx(Pj,{})}),a.jsx(Le,{path:"/product/:slug",element:a.jsx($n,{children:a.jsx(Rj,{})})}),a.jsx(Le,{path:"/shop",element:a.jsx($n,{children:a.jsx(B3,{})})}),a.jsx(Le,{path:"/contact",element:a.jsx($n,{children:a.jsx(W3,{})})}),a.jsx(Le,{path:"/account",element:a.jsx($n,{children:a.jsx(BC,{})})}),a.jsx(Le,{path:"/cart",element:a.jsx($n,{children:a.jsx(Tj,{})})}),a.jsx(Le,{path:"/checkout",element:a.jsx($n,{children:a.jsx(Oj,{})})}),a.jsx(Le,{path:"/orders",element:a.jsx($n,{children:a.jsx(Lj,{})})}),a.jsx(Le,{path:"/orders/:orderId",element:a.jsx($n,{children:a.jsx(Ij,{})})})]}),a.jsxs(Le,{path:"/admin",element:a.jsx(D3,{children:a.jsx(F3,{})}),children:[a.jsx(Le,{index:!0,element:a.jsx(d3,{})}),a.jsx(Le,{path:"products",element:a.jsx(L3,{})}),a.jsx(Le,{path:"users",element:a.jsx(I3,{})}),a.jsx(Le,{path:"orders",element:a.jsx(Hj,{})})]})]})]})})})})}());
