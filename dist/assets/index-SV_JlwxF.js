function up(s,u){for(var o=0;o<u.length;o++){const f=u[o];if(typeof f!="string"&&!Array.isArray(f)){for(const p in f)if(p!=="default"&&!(p in s)){const g=Object.getOwnPropertyDescriptor(f,p);g&&Object.defineProperty(s,p,g.get?g:{enumerable:!0,get:()=>f[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))f(p);new MutationObserver(p=>{for(const g of p)if(g.type==="childList")for(const v of g.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function o(p){const g={};return p.integrity&&(g.integrity=p.integrity),p.referrerPolicy&&(g.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?g.credentials="include":p.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function f(p){if(p.ep)return;p.ep=!0;const g=o(p);fetch(p.href,g)}})();function $u(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var os={exports:{}},$r={},cs={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function dp(){if(Nu)return ne;Nu=1;var s=Symbol.for("react.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),v=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),S=Symbol.iterator;function O(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,T={};function C(x,R,te){this.props=x,this.context=R,this.refs=T,this.updater=te||z}C.prototype.isReactComponent={},C.prototype.setState=function(x,R){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,R,"setState")},C.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function K(){}K.prototype=C.prototype;function Y(x,R,te){this.props=x,this.context=R,this.refs=T,this.updater=te||z}var A=Y.prototype=new K;A.constructor=Y,I(A,C.prototype),A.isPureReactComponent=!0;var $=Array.isArray,de=Object.prototype.hasOwnProperty,fe={current:null},Re={key:!0,ref:!0,__self:!0,__source:!0};function Ee(x,R,te){var le,ae={},se=null,me=null;if(R!=null)for(le in R.ref!==void 0&&(me=R.ref),R.key!==void 0&&(se=""+R.key),R)de.call(R,le)&&!Re.hasOwnProperty(le)&&(ae[le]=R[le]);var ce=arguments.length-2;if(ce===1)ae.children=te;else if(1<ce){for(var ye=Array(ce),rt=0;rt<ce;rt++)ye[rt]=arguments[rt+2];ae.children=ye}if(x&&x.defaultProps)for(le in ce=x.defaultProps,ce)ae[le]===void 0&&(ae[le]=ce[le]);return{$$typeof:s,type:x,key:se,ref:me,props:ae,_owner:fe.current}}function U(x,R){return{$$typeof:s,type:x.type,key:R,ref:x.ref,props:x.props,_owner:x._owner}}function re(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function pe(x){var R={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(te){return R[te]})}var ge=/\/+/g;function Te(x,R){return typeof x=="object"&&x!==null&&x.key!=null?pe(""+x.key):R.toString(36)}function Le(x,R,te,le,ae){var se=typeof x;(se==="undefined"||se==="boolean")&&(x=null);var me=!1;if(x===null)me=!0;else switch(se){case"string":case"number":me=!0;break;case"object":switch(x.$$typeof){case s:case u:me=!0}}if(me)return me=x,ae=ae(me),x=le===""?"."+Te(me,0):le,$(ae)?(te="",x!=null&&(te=x.replace(ge,"$&/")+"/"),Le(ae,R,te,"",function(rt){return rt})):ae!=null&&(re(ae)&&(ae=U(ae,te+(!ae.key||me&&me.key===ae.key?"":(""+ae.key).replace(ge,"$&/")+"/")+x)),R.push(ae)),1;if(me=0,le=le===""?".":le+":",$(x))for(var ce=0;ce<x.length;ce++){se=x[ce];var ye=le+Te(se,ce);me+=Le(se,R,te,ye,ae)}else if(ye=O(x),typeof ye=="function")for(x=ye.call(x),ce=0;!(se=x.next()).done;)se=se.value,ye=le+Te(se,ce++),me+=Le(se,R,te,ye,ae);else if(se==="object")throw R=String(x),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return me}function Ke(x,R,te){if(x==null)return x;var le=[],ae=0;return Le(x,le,"","",function(se){return R.call(te,se,ae++)}),le}function Ye(x){if(x._status===-1){var R=x._result;R=R(),R.then(function(te){(x._status===0||x._status===-1)&&(x._status=1,x._result=te)},function(te){(x._status===0||x._status===-1)&&(x._status=2,x._result=te)}),x._status===-1&&(x._status=0,x._result=R)}if(x._status===1)return x._result.default;throw x._result}var be={current:null},F={transition:null},X={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:F,ReactCurrentOwner:fe};function Q(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Ke,forEach:function(x,R,te){Ke(x,function(){R.apply(this,arguments)},te)},count:function(x){var R=0;return Ke(x,function(){R++}),R},toArray:function(x){return Ke(x,function(R){return R})||[]},only:function(x){if(!re(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=C,ne.Fragment=o,ne.Profiler=p,ne.PureComponent=Y,ne.StrictMode=f,ne.Suspense=j,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ne.act=Q,ne.cloneElement=function(x,R,te){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var le=I({},x.props),ae=x.key,se=x.ref,me=x._owner;if(R!=null){if(R.ref!==void 0&&(se=R.ref,me=fe.current),R.key!==void 0&&(ae=""+R.key),x.type&&x.type.defaultProps)var ce=x.type.defaultProps;for(ye in R)de.call(R,ye)&&!Re.hasOwnProperty(ye)&&(le[ye]=R[ye]===void 0&&ce!==void 0?ce[ye]:R[ye])}var ye=arguments.length-2;if(ye===1)le.children=te;else if(1<ye){ce=Array(ye);for(var rt=0;rt<ye;rt++)ce[rt]=arguments[rt+2];le.children=ce}return{$$typeof:s,type:x.type,key:ae,ref:se,props:le,_owner:me}},ne.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:g,_context:x},x.Consumer=x},ne.createElement=Ee,ne.createFactory=function(x){var R=Ee.bind(null,x);return R.type=x,R},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:N,render:x}},ne.isValidElement=re,ne.lazy=function(x){return{$$typeof:P,_payload:{_status:-1,_result:x},_init:Ye}},ne.memo=function(x,R){return{$$typeof:b,type:x,compare:R===void 0?null:R}},ne.startTransition=function(x){var R=F.transition;F.transition={};try{x()}finally{F.transition=R}},ne.unstable_act=Q,ne.useCallback=function(x,R){return be.current.useCallback(x,R)},ne.useContext=function(x){return be.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return be.current.useDeferredValue(x)},ne.useEffect=function(x,R){return be.current.useEffect(x,R)},ne.useId=function(){return be.current.useId()},ne.useImperativeHandle=function(x,R,te){return be.current.useImperativeHandle(x,R,te)},ne.useInsertionEffect=function(x,R){return be.current.useInsertionEffect(x,R)},ne.useLayoutEffect=function(x,R){return be.current.useLayoutEffect(x,R)},ne.useMemo=function(x,R){return be.current.useMemo(x,R)},ne.useReducer=function(x,R,te){return be.current.useReducer(x,R,te)},ne.useRef=function(x){return be.current.useRef(x)},ne.useState=function(x){return be.current.useState(x)},ne.useSyncExternalStore=function(x,R,te){return be.current.useSyncExternalStore(x,R,te)},ne.useTransition=function(){return be.current.useTransition()},ne.version="18.3.1",ne}var ku;function ws(){return ku||(ku=1,cs.exports=dp()),cs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu;function fp(){if(bu)return $r;bu=1;var s=ws(),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function v(N,j,b){var P,S={},O=null,z=null;b!==void 0&&(O=""+b),j.key!==void 0&&(O=""+j.key),j.ref!==void 0&&(z=j.ref);for(P in j)f.call(j,P)&&!g.hasOwnProperty(P)&&(S[P]=j[P]);if(N&&N.defaultProps)for(P in j=N.defaultProps,j)S[P]===void 0&&(S[P]=j[P]);return{$$typeof:u,type:N,key:O,ref:z,props:S,_owner:p.current}}return $r.Fragment=o,$r.jsx=v,$r.jsxs=v,$r}var Cu;function pp(){return Cu||(Cu=1,os.exports=fp()),os.exports}var l=pp(),E=ws();const Wu=$u(E),mp=up({__proto__:null,default:Wu},[E]);var ai={},us={exports:{}},tt={},ds={exports:{}},fs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu;function hp(){return Eu||(Eu=1,(function(s){function u(F,X){var Q=F.length;F.push(X);e:for(;0<Q;){var x=Q-1>>>1,R=F[x];if(0<p(R,X))F[x]=X,F[Q]=R,Q=x;else break e}}function o(F){return F.length===0?null:F[0]}function f(F){if(F.length===0)return null;var X=F[0],Q=F.pop();if(Q!==X){F[0]=Q;e:for(var x=0,R=F.length,te=R>>>1;x<te;){var le=2*(x+1)-1,ae=F[le],se=le+1,me=F[se];if(0>p(ae,Q))se<R&&0>p(me,ae)?(F[x]=me,F[se]=Q,x=se):(F[x]=ae,F[le]=Q,x=le);else if(se<R&&0>p(me,Q))F[x]=me,F[se]=Q,x=se;else break e}}return X}function p(F,X){var Q=F.sortIndex-X.sortIndex;return Q!==0?Q:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;s.unstable_now=function(){return g.now()}}else{var v=Date,N=v.now();s.unstable_now=function(){return v.now()-N}}var j=[],b=[],P=1,S=null,O=3,z=!1,I=!1,T=!1,C=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(F){for(var X=o(b);X!==null;){if(X.callback===null)f(b);else if(X.startTime<=F)f(b),X.sortIndex=X.expirationTime,u(j,X);else break;X=o(b)}}function $(F){if(T=!1,A(F),!I)if(o(j)!==null)I=!0,Ye(de);else{var X=o(b);X!==null&&be($,X.startTime-F)}}function de(F,X){I=!1,T&&(T=!1,K(Ee),Ee=-1),z=!0;var Q=O;try{for(A(X),S=o(j);S!==null&&(!(S.expirationTime>X)||F&&!pe());){var x=S.callback;if(typeof x=="function"){S.callback=null,O=S.priorityLevel;var R=x(S.expirationTime<=X);X=s.unstable_now(),typeof R=="function"?S.callback=R:S===o(j)&&f(j),A(X)}else f(j);S=o(j)}if(S!==null)var te=!0;else{var le=o(b);le!==null&&be($,le.startTime-X),te=!1}return te}finally{S=null,O=Q,z=!1}}var fe=!1,Re=null,Ee=-1,U=5,re=-1;function pe(){return!(s.unstable_now()-re<U)}function ge(){if(Re!==null){var F=s.unstable_now();re=F;var X=!0;try{X=Re(!0,F)}finally{X?Te():(fe=!1,Re=null)}}else fe=!1}var Te;if(typeof Y=="function")Te=function(){Y(ge)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,Ke=Le.port2;Le.port1.onmessage=ge,Te=function(){Ke.postMessage(null)}}else Te=function(){C(ge,0)};function Ye(F){Re=F,fe||(fe=!0,Te())}function be(F,X){Ee=C(function(){F(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){I||z||(I=!0,Ye(de))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_getFirstCallbackNode=function(){return o(j)},s.unstable_next=function(F){switch(O){case 1:case 2:case 3:var X=3;break;default:X=O}var Q=O;O=X;try{return F()}finally{O=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=O;O=F;try{return X()}finally{O=Q}},s.unstable_scheduleCallback=function(F,X,Q){var x=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?x+Q:x):Q=x,F){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=Q+R,F={id:P++,callback:X,priorityLevel:F,startTime:Q,expirationTime:R,sortIndex:-1},Q>x?(F.sortIndex=Q,u(b,F),o(j)===null&&F===o(b)&&(T?(K(Ee),Ee=-1):T=!0,be($,Q-x))):(F.sortIndex=R,u(j,F),I||z||(I=!0,Ye(de))),F},s.unstable_shouldYield=pe,s.unstable_wrapCallback=function(F){var X=O;return function(){var Q=O;O=X;try{return F.apply(this,arguments)}finally{O=Q}}}})(fs)),fs}var Tu;function gp(){return Tu||(Tu=1,ds.exports=hp()),ds.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function xp(){if(Pu)return tt;Pu=1;var s=ws(),u=gp();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function g(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),j=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},S={};function O(e){return j.call(S,e)?!0:j.call(P,e)?!1:b.test(e)?S[e]=!0:(P[e]=!0,!1)}function z(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,n,r){if(t===null||typeof t>"u"||z(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,n,r,i,a,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=c}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];C[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(K,Y);C[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(K,Y);C[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(K,Y);C[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,n,r){var i=C.hasOwnProperty(t)?C[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,n,i,r)&&(n=null),r||i===null?O(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),fe=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),pe=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),F=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,x;function R(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var te=!1;function le(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(k){var r=k}Reflect.construct(e,[],t)}else{try{t.call()}catch(k){r=k}e.call(t.prototype)}else{try{throw Error()}catch(k){r=k}e()}}catch(k){if(k&&r&&typeof k.stack=="string"){for(var i=k.stack.split(`
`),a=r.stack.split(`
`),c=i.length-1,d=a.length-1;1<=c&&0<=d&&i[c]!==a[d];)d--;for(;1<=c&&0<=d;c--,d--)if(i[c]!==a[d]){if(c!==1||d!==1)do if(c--,d--,0>d||i[c]!==a[d]){var m=`
`+i[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=d);break}}}finally{te=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function ae(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Re:return"Fragment";case fe:return"Portal";case U:return"Profiler";case Ee:return"StrictMode";case Te:return"Suspense";case Le:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case re:return(e._context.displayName||"Context")+".Provider";case ge:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ke:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rt(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){r=""+c,a.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=rt(e))}function Ts(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hi(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ps(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zs(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function gi(e,t){zs(e,t);var n=ce(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xi(e,t.type,n):t.hasOwnProperty("defaultValue")&&xi(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _s(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xi(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(ar(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function Ms(e,t){var n=ce(t.value),r=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ls(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ls(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,Os=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pd=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(e){pd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),or[t]=or[e]})});function Is(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||or.hasOwnProperty(e)&&or[e]?(""+t).trim():t+"px"}function Us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Is(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var md=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,En=null,Tn=null;function As(e){if(e=zr(e)){if(typeof ki!="function")throw Error(o(280));var t=e.stateNode;t&&(t=wl(t),ki(e.stateNode,e.type,t))}}function Fs(e){En?Tn?Tn.push(e):Tn=[e]:En=e}function Bs(){if(En){var e=En,t=Tn;if(Tn=En=null,As(e),t)for(e=0;e<t.length;e++)As(t[e])}}function Vs(e,t){return e(t)}function Qs(){}var bi=!1;function qs(e,t,n){if(bi)return e(t,n);bi=!0;try{return Vs(e,t,n)}finally{bi=!1,(En!==null||Tn!==null)&&(Qs(),Bs())}}function cr(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Ci=!1;if(N)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Ci=!1}function hd(e,t,n,r,i,a,c,d,m){var k=Array.prototype.slice.call(arguments,3);try{t.apply(n,k)}catch(M){this.onError(M)}}var dr=!1,Zr=null,el=!1,Ei=null,gd={onError:function(e){dr=!0,Zr=e}};function xd(e,t,n,r,i,a,c,d,m){dr=!1,Zr=null,hd.apply(gd,arguments)}function vd(e,t,n,r,i,a,c,d,m){if(xd.apply(this,arguments),dr){if(dr){var k=Zr;dr=!1,Zr=null}else throw Error(o(198));el||(el=!0,Ei=k)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ws(e){if(un(e)!==e)throw Error(o(188))}function yd(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ws(i),e;if(a===r)return Ws(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var c=!1,d=i.child;d;){if(d===n){c=!0,n=i,r=a;break}if(d===r){c=!0,r=i,n=a;break}d=d.sibling}if(!c){for(d=a.child;d;){if(d===n){c=!0,n=a,r=i;break}if(d===r){c=!0,r=a,n=i;break}d=d.sibling}if(!c)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function Hs(e){return e=yd(e),e!==null?Ks(e):null}function Ks(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ks(e);if(t!==null)return t;e=e.sibling}return null}var Ys=u.unstable_scheduleCallback,Gs=u.unstable_cancelCallback,jd=u.unstable_shouldYield,wd=u.unstable_requestPaint,Pe=u.unstable_now,Sd=u.unstable_getCurrentPriorityLevel,Ti=u.unstable_ImmediatePriority,Js=u.unstable_UserBlockingPriority,tl=u.unstable_NormalPriority,Nd=u.unstable_LowPriority,Xs=u.unstable_IdlePriority,nl=null,kt=null;function kd(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Ed,bd=Math.log,Cd=Math.LN2;function Ed(e){return e>>>=0,e===0?32:31-(bd(e)/Cd|0)|0}var rl=64,ll=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,c=n&268435455;if(c!==0){var d=c&~i;d!==0?r=fr(d):(a&=c,a!==0&&(r=fr(a)))}else c=n&~i,c!==0?r=fr(c):a!==0&&(r=fr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-ht(a),d=1<<c,m=i[c];m===-1?((d&n)===0||(d&r)!==0)&&(i[c]=Td(d,t)):m<=t&&(e.expiredLanes|=d),a&=~d}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zs(){var e=rl;return rl<<=1,(rl&4194240)===0&&(rl=64),e}function zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function zd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function _i(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function eo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var to,Ri,no,ro,lo,Mi=!1,al=[],Ft=null,Bt=null,Vt=null,mr=new Map,hr=new Map,Qt=[],_d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function io(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function gr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=zr(t),t!==null&&Ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rd(e,t,n,r,i){switch(t){case"focusin":return Ft=gr(Ft,e,t,n,r,i),!0;case"dragenter":return Bt=gr(Bt,e,t,n,r,i),!0;case"mouseover":return Vt=gr(Vt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return mr.set(a,gr(mr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,hr.set(a,gr(hr.get(a)||null,e,t,n,r,i)),!0}return!1}function ao(e){var t=dn(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=$s(n),t!==null){e.blockedOn=t,lo(e.priority,function(){no(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Li(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Si=r,n.target.dispatchEvent(r),Si=null}else return t=zr(n),t!==null&&Ri(t),e.blockedOn=n,!1;t.shift()}return!0}function so(e,t,n){sl(e)&&n.delete(t)}function Md(){Mi=!1,Ft!==null&&sl(Ft)&&(Ft=null),Bt!==null&&sl(Bt)&&(Bt=null),Vt!==null&&sl(Vt)&&(Vt=null),mr.forEach(so),hr.forEach(so)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Md)))}function vr(e){function t(i){return xr(i,e)}if(0<al.length){xr(al[0],e);for(var n=1;n<al.length;n++){var r=al[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&xr(Ft,e),Bt!==null&&xr(Bt,e),Vt!==null&&xr(Vt,e),mr.forEach(t),hr.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)ao(n),n.blockedOn===null&&Qt.shift()}var Pn=$.ReactCurrentBatchConfig,ol=!0;function Dd(e,t,n,r){var i=ue,a=Pn.transition;Pn.transition=null;try{ue=1,Di(e,t,n,r)}finally{ue=i,Pn.transition=a}}function Ld(e,t,n,r){var i=ue,a=Pn.transition;Pn.transition=null;try{ue=4,Di(e,t,n,r)}finally{ue=i,Pn.transition=a}}function Di(e,t,n,r){if(ol){var i=Li(e,t,n,r);if(i===null)Xi(e,t,r,cl,n),io(e,r);else if(Rd(i,e,t,n,r))r.stopPropagation();else if(io(e,r),t&4&&-1<_d.indexOf(e)){for(;i!==null;){var a=zr(i);if(a!==null&&to(a),a=Li(e,t,n,r),a===null&&Xi(e,t,r,cl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Xi(e,t,r,null,n)}}var cl=null;function Li(e,t,n,r){if(cl=null,e=Ni(r),e=dn(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return cl=e,null}function oo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sd()){case Ti:return 1;case Js:return 4;case tl:case Nd:return 16;case Xs:return 536870912;default:return 16}default:return 16}}var qt=null,Oi=null,ul=null;function co(){if(ul)return ul;var e,t=Oi,n=t.length,r,i="value"in qt?qt.value:qt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===i[a-r];r++);return ul=i.slice(e,1<r?1-r:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function uo(){return!1}function lt(e){function t(n,r,i,a,c){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?fl:uo,this.isPropagationStopped=uo,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=lt(zn),yr=Q({},zn,{view:0,detail:0}),Od=lt(yr),Ui,Ai,jr,pl=Q({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Ui=e.screenX-jr.screenX,Ai=e.screenY-jr.screenY):Ai=Ui=0,jr=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),fo=lt(pl),Id=Q({},pl,{dataTransfer:0}),Ud=lt(Id),Ad=Q({},yr,{relatedTarget:0}),Fi=lt(Ad),Fd=Q({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bd=lt(Fd),Vd=Q({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qd=lt(Vd),qd=Q({},zn,{data:0}),po=lt(qd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hd[e])?!!t[e]:!1}function Bi(){return Kd}var Yd=Q({},yr,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bi,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=lt(Yd),Jd=Q({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mo=lt(Jd),Xd=Q({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bi}),Zd=lt(Xd),ef=Q({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tf=lt(ef),nf=Q({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rf=lt(nf),lf=[9,13,27,32],Vi=N&&"CompositionEvent"in window,wr=null;N&&"documentMode"in document&&(wr=document.documentMode);var af=N&&"TextEvent"in window&&!wr,ho=N&&(!Vi||wr&&8<wr&&11>=wr),go=" ",xo=!1;function vo(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function sf(e,t){switch(e){case"compositionend":return yo(t);case"keypress":return t.which!==32?null:(xo=!0,go);case"textInput":return e=t.data,e===go&&xo?null:e;default:return null}}function of(e,t){if(_n)return e==="compositionend"||!Vi&&vo(e,t)?(e=co(),ul=Oi=qt=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ho&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function wo(e,t,n,r){Fs(r),t=vl(t,"onChange"),0<t.length&&(n=new Ii("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Nr=null;function uf(e){Ao(e,0)}function ml(e){var t=On(e);if(Ts(t))return e}function df(e,t){if(e==="change")return t}var So=!1;if(N){var Qi;if(N){var qi="oninput"in document;if(!qi){var No=document.createElement("div");No.setAttribute("oninput","return;"),qi=typeof No.oninput=="function"}Qi=qi}else Qi=!1;So=Qi&&(!document.documentMode||9<document.documentMode)}function ko(){Sr&&(Sr.detachEvent("onpropertychange",bo),Nr=Sr=null)}function bo(e){if(e.propertyName==="value"&&ml(Nr)){var t=[];wo(t,Nr,e,Ni(e)),qs(uf,t)}}function ff(e,t,n){e==="focusin"?(ko(),Sr=t,Nr=n,Sr.attachEvent("onpropertychange",bo)):e==="focusout"&&ko()}function pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Nr)}function mf(e,t){if(e==="click")return ml(t)}function hf(e,t){if(e==="input"||e==="change")return ml(t)}function gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:gf;function kr(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!j.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Co(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eo(e,t){var n=Co(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Co(n)}}function To(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?To(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Po(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function $i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xf(e){var t=Po(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&To(n.ownerDocument.documentElement,n)){if(r!==null&&$i(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Eo(n,a);var c=Eo(n,r);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vf=N&&"documentMode"in document&&11>=document.documentMode,Rn=null,Wi=null,br=null,Hi=!1;function zo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hi||Rn==null||Rn!==Jr(r)||(r=Rn,"selectionStart"in r&&$i(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&kr(br,r)||(br=r,r=vl(Wi,"onSelect"),0<r.length&&(t=new Ii("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function hl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Ki={},_o={};N&&(_o=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function gl(e){if(Ki[e])return Ki[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _o)return Ki[e]=t[n];return e}var Ro=gl("animationend"),Mo=gl("animationiteration"),Do=gl("animationstart"),Lo=gl("transitionend"),Oo=new Map,Io="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){Oo.set(e,t),g(t,[e])}for(var Yi=0;Yi<Io.length;Yi++){var Gi=Io[Yi],yf=Gi.toLowerCase(),jf=Gi[0].toUpperCase()+Gi.slice(1);$t(yf,"on"+jf)}$t(Ro,"onAnimationEnd"),$t(Mo,"onAnimationIteration"),$t(Do,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(Lo,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Uo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vd(r,t,void 0,e),e.currentTarget=null}function Ao(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var c=r.length-1;0<=c;c--){var d=r[c],m=d.instance,k=d.currentTarget;if(d=d.listener,m!==a&&i.isPropagationStopped())break e;Uo(i,d,k),a=m}else for(c=0;c<r.length;c++){if(d=r[c],m=d.instance,k=d.currentTarget,d=d.listener,m!==a&&i.isPropagationStopped())break e;Uo(i,d,k),a=m}}}if(el)throw e=Ei,el=!1,Ei=null,e}function xe(e,t){var n=t[la];n===void 0&&(n=t[la]=new Set);var r=e+"__bubble";n.has(r)||(Fo(t,e,2,!1),n.add(r))}function Ji(e,t,n){var r=0;t&&(r|=4),Fo(n,e,r,t)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[xl]){e[xl]=!0,f.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||Ji(n,!1,e),Ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xl]||(t[xl]=!0,Ji("selectionchange",!1,t))}}function Fo(e,t,n,r){switch(oo(t)){case 1:var i=Dd;break;case 4:i=Ld;break;default:i=Di}n=i.bind(null,t,n,e),i=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xi(e,t,n,r,i){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(c===4)for(c=r.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;c=c.return}for(;d!==null;){if(c=dn(d),c===null)return;if(m=c.tag,m===5||m===6){r=a=c;continue e}d=d.parentNode}}r=r.return}qs(function(){var k=a,M=Ni(n),D=[];e:{var _=Oo.get(e);if(_!==void 0){var B=Ii,q=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":B=Gd;break;case"focusin":q="focus",B=Fi;break;case"focusout":q="blur",B=Fi;break;case"beforeblur":case"afterblur":B=Fi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Zd;break;case Ro:case Mo:case Do:B=Bd;break;case Lo:B=tf;break;case"scroll":B=Od;break;case"wheel":B=rf;break;case"copy":case"cut":case"paste":B=Qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=mo}var W=(t&4)!==0,ze=!W&&e==="scroll",y=W?_!==null?_+"Capture":null:_;W=[];for(var h=k,w;h!==null;){w=h;var L=w.stateNode;if(w.tag===5&&L!==null&&(w=L,y!==null&&(L=cr(h,y),L!=null&&W.push(Tr(h,L,w)))),ze)break;h=h.return}0<W.length&&(_=new B(_,q,null,n,M),D.push({event:_,listeners:W}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",_&&n!==Si&&(q=n.relatedTarget||n.fromElement)&&(dn(q)||q[Pt]))break e;if((B||_)&&(_=M.window===M?M:(_=M.ownerDocument)?_.defaultView||_.parentWindow:window,B?(q=n.relatedTarget||n.toElement,B=k,q=q?dn(q):null,q!==null&&(ze=un(q),q!==ze||q.tag!==5&&q.tag!==6)&&(q=null)):(B=null,q=k),B!==q)){if(W=fo,L="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(W=mo,L="onPointerLeave",y="onPointerEnter",h="pointer"),ze=B==null?_:On(B),w=q==null?_:On(q),_=new W(L,h+"leave",B,n,M),_.target=ze,_.relatedTarget=w,L=null,dn(M)===k&&(W=new W(y,h+"enter",q,n,M),W.target=w,W.relatedTarget=ze,L=W),ze=L,B&&q)t:{for(W=B,y=q,h=0,w=W;w;w=Dn(w))h++;for(w=0,L=y;L;L=Dn(L))w++;for(;0<h-w;)W=Dn(W),h--;for(;0<w-h;)y=Dn(y),w--;for(;h--;){if(W===y||y!==null&&W===y.alternate)break t;W=Dn(W),y=Dn(y)}W=null}else W=null;B!==null&&Bo(D,_,B,W,!1),q!==null&&ze!==null&&Bo(D,ze,q,W,!0)}}e:{if(_=k?On(k):window,B=_.nodeName&&_.nodeName.toLowerCase(),B==="select"||B==="input"&&_.type==="file")var H=df;else if(jo(_))if(So)H=hf;else{H=pf;var G=ff}else(B=_.nodeName)&&B.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(H=mf);if(H&&(H=H(e,k))){wo(D,H,n,M);break e}G&&G(e,_,k),e==="focusout"&&(G=_._wrapperState)&&G.controlled&&_.type==="number"&&xi(_,"number",_.value)}switch(G=k?On(k):window,e){case"focusin":(jo(G)||G.contentEditable==="true")&&(Rn=G,Wi=k,br=null);break;case"focusout":br=Wi=Rn=null;break;case"mousedown":Hi=!0;break;case"contextmenu":case"mouseup":case"dragend":Hi=!1,zo(D,n,M);break;case"selectionchange":if(vf)break;case"keydown":case"keyup":zo(D,n,M)}var J;if(Vi)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else _n?vo(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(ho&&n.locale!=="ko"&&(_n||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&_n&&(J=co()):(qt=M,Oi="value"in qt?qt.value:qt.textContent,_n=!0)),G=vl(k,Z),0<G.length&&(Z=new po(Z,e,null,n,M),D.push({event:Z,listeners:G}),J?Z.data=J:(J=yo(n),J!==null&&(Z.data=J)))),(J=af?sf(e,n):of(e,n))&&(k=vl(k,"onBeforeInput"),0<k.length&&(M=new po("onBeforeInput","beforeinput",null,n,M),D.push({event:M,listeners:k}),M.data=J))}Ao(D,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=cr(e,n),a!=null&&r.unshift(Tr(e,a,i)),a=cr(e,t),a!=null&&r.push(Tr(e,a,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bo(e,t,n,r,i){for(var a=t._reactName,c=[];n!==null&&n!==r;){var d=n,m=d.alternate,k=d.stateNode;if(m!==null&&m===r)break;d.tag===5&&k!==null&&(d=k,i?(m=cr(n,a),m!=null&&c.unshift(Tr(n,m,d))):i||(m=cr(n,a),m!=null&&c.push(Tr(n,m,d)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Sf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function Vo(e){return(typeof e=="string"?e:""+e).replace(Sf,`
`).replace(Nf,"")}function yl(e,t,n){if(t=Vo(t),Vo(e)!==t&&n)throw Error(o(425))}function jl(){}var Zi=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,Qo=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Qo<"u"?function(e){return Qo.resolve(null).then(e).catch(Cf)}:na;function Cf(e){setTimeout(function(){throw e})}function ra(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ln,Pr="__reactProps$"+Ln,Pt="__reactContainer$"+Ln,la="__reactEvents$"+Ln,Ef="__reactListeners$"+Ln,Tf="__reactHandles$"+Ln;function dn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qo(e);e!==null;){if(n=e[bt])return n;e=qo(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[bt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function wl(e){return e[Pr]||null}var ia=[],In=-1;function Ht(e){return{current:e}}function ve(e){0>In||(e.current=ia[In],ia[In]=null,In--)}function he(e,t){In++,ia[In]=e.current,e.current=t}var Kt={},Ve=Ht(Kt),Ge=Ht(!1),fn=Kt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function Sl(){ve(Ge),ve(Ve)}function $o(e,t,n){if(Ve.current!==Kt)throw Error(o(168));he(Ve,t),he(Ge,n)}function Wo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(o(108,me(e)||"Unknown",i));return Q({},n,r)}function Nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,fn=Ve.current,he(Ve,e),he(Ge,Ge.current),!0}function Ho(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Wo(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,ve(Ge),ve(Ve),he(Ve,e)):ve(Ge),he(Ge,n)}var zt=null,kl=!1,aa=!1;function Ko(e){zt===null?zt=[e]:zt.push(e)}function Pf(e){kl=!0,Ko(e)}function Yt(){if(!aa&&zt!==null){aa=!0;var e=0,t=ue;try{var n=zt;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,kl=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),Ys(Ti,Yt),i}finally{ue=t,aa=!1}}return null}var An=[],Fn=0,bl=null,Cl=0,ot=[],ct=0,pn=null,_t=1,Rt="";function mn(e,t){An[Fn++]=Cl,An[Fn++]=bl,bl=e,Cl=t}function Yo(e,t,n){ot[ct++]=_t,ot[ct++]=Rt,ot[ct++]=pn,pn=e;var r=_t;e=Rt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var a=32-ht(t)+i;if(30<a){var c=i-i%5;a=(r&(1<<c)-1).toString(32),r>>=c,i-=c,_t=1<<32-ht(t)+i|n<<i|r,Rt=a+e}else _t=1<<a|n<<i|r,Rt=e}function sa(e){e.return!==null&&(mn(e,1),Yo(e,1,0))}function oa(e){for(;e===bl;)bl=An[--Fn],An[Fn]=null,Cl=An[--Fn],An[Fn]=null;for(;e===pn;)pn=ot[--ct],ot[ct]=null,Rt=ot[--ct],ot[ct]=null,_t=ot[--ct],ot[ct]=null}var it=null,at=null,je=!1,xt=null;function Go(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,at=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:_t,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,at=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(je){var t=at;if(t){var n=t;if(!Jo(e,t)){if(ca(e))throw Error(o(418));t=Wt(n.nextSibling);var r=it;t&&Jo(e,t)?Go(r,n):(e.flags=e.flags&-4097|2,je=!1,it=e)}}else{if(ca(e))throw Error(o(418));e.flags=e.flags&-4097|2,je=!1,it=e}}}function Xo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function El(e){if(e!==it)return!1;if(!je)return Xo(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=at)){if(ca(e))throw Zo(),Error(o(418));for(;t;)Go(e,t),t=Wt(t.nextSibling)}if(Xo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=it?Wt(e.stateNode.nextSibling):null;return!0}function Zo(){for(var e=at;e;)e=Wt(e.nextSibling)}function Bn(){at=it=null,je=!1}function da(e){xt===null?xt=[e]:xt.push(e)}var zf=$.ReactCurrentBatchConfig;function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(c){var d=i.refs;c===null?delete d[a]:d[a]=c},t._stringRef=a,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Tl(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ec(e){var t=e._init;return t(e._payload)}function tc(e){function t(y,h){if(e){var w=y.deletions;w===null?(y.deletions=[h],y.flags|=16):w.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=rn(y,h),y.index=0,y.sibling=null,y}function a(y,h,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<h?(y.flags|=2,h):w):(y.flags|=2,h)):(y.flags|=1048576,h)}function c(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,h,w,L){return h===null||h.tag!==6?(h=ns(w,y.mode,L),h.return=y,h):(h=i(h,w),h.return=y,h)}function m(y,h,w,L){var H=w.type;return H===Re?M(y,h,w.props.children,L,w.key):h!==null&&(h.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ye&&ec(H)===h.type)?(L=i(h,w.props),L.ref=_r(y,h,w),L.return=y,L):(L=Xl(w.type,w.key,w.props,null,y.mode,L),L.ref=_r(y,h,w),L.return=y,L)}function k(y,h,w,L){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=rs(w,y.mode,L),h.return=y,h):(h=i(h,w.children||[]),h.return=y,h)}function M(y,h,w,L,H){return h===null||h.tag!==7?(h=Sn(w,y.mode,L,H),h.return=y,h):(h=i(h,w),h.return=y,h)}function D(y,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ns(""+h,y.mode,w),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case de:return w=Xl(h.type,h.key,h.props,null,y.mode,w),w.ref=_r(y,null,h),w.return=y,w;case fe:return h=rs(h,y.mode,w),h.return=y,h;case Ye:var L=h._init;return D(y,L(h._payload),w)}if(ar(h)||X(h))return h=Sn(h,y.mode,w,null),h.return=y,h;Tl(y,h)}return null}function _(y,h,w,L){var H=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return H!==null?null:d(y,h,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case de:return w.key===H?m(y,h,w,L):null;case fe:return w.key===H?k(y,h,w,L):null;case Ye:return H=w._init,_(y,h,H(w._payload),L)}if(ar(w)||X(w))return H!==null?null:M(y,h,w,L,null);Tl(y,w)}return null}function B(y,h,w,L,H){if(typeof L=="string"&&L!==""||typeof L=="number")return y=y.get(w)||null,d(h,y,""+L,H);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case de:return y=y.get(L.key===null?w:L.key)||null,m(h,y,L,H);case fe:return y=y.get(L.key===null?w:L.key)||null,k(h,y,L,H);case Ye:var G=L._init;return B(y,h,w,G(L._payload),H)}if(ar(L)||X(L))return y=y.get(w)||null,M(h,y,L,H,null);Tl(h,L)}return null}function q(y,h,w,L){for(var H=null,G=null,J=h,Z=h=0,Ue=null;J!==null&&Z<w.length;Z++){J.index>Z?(Ue=J,J=null):Ue=J.sibling;var oe=_(y,J,w[Z],L);if(oe===null){J===null&&(J=Ue);break}e&&J&&oe.alternate===null&&t(y,J),h=a(oe,h,Z),G===null?H=oe:G.sibling=oe,G=oe,J=Ue}if(Z===w.length)return n(y,J),je&&mn(y,Z),H;if(J===null){for(;Z<w.length;Z++)J=D(y,w[Z],L),J!==null&&(h=a(J,h,Z),G===null?H=J:G.sibling=J,G=J);return je&&mn(y,Z),H}for(J=r(y,J);Z<w.length;Z++)Ue=B(J,y,Z,w[Z],L),Ue!==null&&(e&&Ue.alternate!==null&&J.delete(Ue.key===null?Z:Ue.key),h=a(Ue,h,Z),G===null?H=Ue:G.sibling=Ue,G=Ue);return e&&J.forEach(function(ln){return t(y,ln)}),je&&mn(y,Z),H}function W(y,h,w,L){var H=X(w);if(typeof H!="function")throw Error(o(150));if(w=H.call(w),w==null)throw Error(o(151));for(var G=H=null,J=h,Z=h=0,Ue=null,oe=w.next();J!==null&&!oe.done;Z++,oe=w.next()){J.index>Z?(Ue=J,J=null):Ue=J.sibling;var ln=_(y,J,oe.value,L);if(ln===null){J===null&&(J=Ue);break}e&&J&&ln.alternate===null&&t(y,J),h=a(ln,h,Z),G===null?H=ln:G.sibling=ln,G=ln,J=Ue}if(oe.done)return n(y,J),je&&mn(y,Z),H;if(J===null){for(;!oe.done;Z++,oe=w.next())oe=D(y,oe.value,L),oe!==null&&(h=a(oe,h,Z),G===null?H=oe:G.sibling=oe,G=oe);return je&&mn(y,Z),H}for(J=r(y,J);!oe.done;Z++,oe=w.next())oe=B(J,y,Z,oe.value,L),oe!==null&&(e&&oe.alternate!==null&&J.delete(oe.key===null?Z:oe.key),h=a(oe,h,Z),G===null?H=oe:G.sibling=oe,G=oe);return e&&J.forEach(function(cp){return t(y,cp)}),je&&mn(y,Z),H}function ze(y,h,w,L){if(typeof w=="object"&&w!==null&&w.type===Re&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case de:e:{for(var H=w.key,G=h;G!==null;){if(G.key===H){if(H=w.type,H===Re){if(G.tag===7){n(y,G.sibling),h=i(G,w.props.children),h.return=y,y=h;break e}}else if(G.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ye&&ec(H)===G.type){n(y,G.sibling),h=i(G,w.props),h.ref=_r(y,G,w),h.return=y,y=h;break e}n(y,G);break}else t(y,G);G=G.sibling}w.type===Re?(h=Sn(w.props.children,y.mode,L,w.key),h.return=y,y=h):(L=Xl(w.type,w.key,w.props,null,y.mode,L),L.ref=_r(y,h,w),L.return=y,y=L)}return c(y);case fe:e:{for(G=w.key;h!==null;){if(h.key===G)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){n(y,h.sibling),h=i(h,w.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=rs(w,y.mode,L),h.return=y,y=h}return c(y);case Ye:return G=w._init,ze(y,h,G(w._payload),L)}if(ar(w))return q(y,h,w,L);if(X(w))return W(y,h,w,L);Tl(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,w),h.return=y,y=h):(n(y,h),h=ns(w,y.mode,L),h.return=y,y=h),c(y)):n(y,h)}return ze}var Vn=tc(!0),nc=tc(!1),Pl=Ht(null),zl=null,Qn=null,fa=null;function pa(){fa=Qn=zl=null}function ma(e){var t=Pl.current;ve(Pl),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){zl=e,fa=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(fa!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(zl===null)throw Error(o(308));Qn=e,zl.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var hn=null;function ga(e){hn===null?hn=[e]:hn.push(e)}function rc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ga(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,ga(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function _l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_i(e,n)}}function ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=c:a=a.next=c,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Rl(e,t,n,r){var i=e.updateQueue;Gt=!1;var a=i.firstBaseUpdate,c=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var m=d,k=m.next;m.next=null,c===null?a=k:c.next=k,c=m;var M=e.alternate;M!==null&&(M=M.updateQueue,d=M.lastBaseUpdate,d!==c&&(d===null?M.firstBaseUpdate=k:d.next=k,M.lastBaseUpdate=m))}if(a!==null){var D=i.baseState;c=0,M=k=m=null,d=a;do{var _=d.lane,B=d.eventTime;if((r&_)===_){M!==null&&(M=M.next={eventTime:B,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var q=e,W=d;switch(_=t,B=n,W.tag){case 1:if(q=W.payload,typeof q=="function"){D=q.call(B,D,_);break e}D=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=W.payload,_=typeof q=="function"?q.call(B,D,_):q,_==null)break e;D=Q({},D,_);break e;case 2:Gt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,_=i.effects,_===null?i.effects=[d]:_.push(d))}else B={eventTime:B,lane:_,tag:d.tag,payload:d.payload,callback:d.callback,next:null},M===null?(k=M=B,m=D):M=M.next=B,c|=_;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;_=d,d=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(M===null&&(m=D),i.baseState=m,i.firstBaseUpdate=k,i.lastBaseUpdate=M,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);vn|=c,e.lanes=c,e.memoizedState=D}}function ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(o(191,i));i.call(r)}}}var Rr={},Ct=Ht(Rr),Mr=Ht(Rr),Dr=Ht(Rr);function gn(e){if(e===Rr)throw Error(o(174));return e}function va(e,t){switch(he(Dr,t),he(Mr,e),he(Ct,Rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yi(t,e)}ve(Ct),he(Ct,t)}function $n(){ve(Ct),ve(Mr),ve(Dr)}function sc(e){gn(Dr.current);var t=gn(Ct.current),n=yi(t,e.type);t!==n&&(he(Mr,e),he(Ct,n))}function ya(e){Mr.current===e&&(ve(Ct),ve(Mr))}var we=Ht(0);function Ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ja=[];function wa(){for(var e=0;e<ja.length;e++)ja[e]._workInProgressVersionPrimary=null;ja.length=0}var Dl=$.ReactCurrentDispatcher,Sa=$.ReactCurrentBatchConfig,xn=0,Se=null,Me=null,Oe=null,Ll=!1,Lr=!1,Or=0,_f=0;function Qe(){throw Error(o(321))}function Na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function ka(e,t,n,r,i,a){if(xn=a,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dl.current=e===null||e.memoizedState===null?Lf:Of,e=n(r,i),Lr){a=0;do{if(Lr=!1,Or=0,25<=a)throw Error(o(301));a+=1,Oe=Me=null,t.updateQueue=null,Dl.current=If,e=n(r,i)}while(Lr)}if(Dl.current=Ul,t=Me!==null&&Me.next!==null,xn=0,Oe=Me=Se=null,Ll=!1,t)throw Error(o(300));return e}function ba(){var e=Or!==0;return Or=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function dt(){if(Me===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Oe===null?Se.memoizedState:Oe.next;if(t!==null)Oe=t,Me=e;else{if(e===null)throw Error(o(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Ir(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=dt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=Me,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var c=i.next;i.next=a.next,a.next=c}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var d=c=null,m=null,k=a;do{var M=k.lane;if((xn&M)===M)m!==null&&(m=m.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),r=k.hasEagerState?k.eagerState:e(r,k.action);else{var D={lane:M,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};m===null?(d=m=D,c=r):m=m.next=D,Se.lanes|=M,vn|=M}k=k.next}while(k!==null&&k!==a);m===null?c=r:m.next=d,gt(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Se.lanes|=a,vn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ea(e){var t=dt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var c=i=i.next;do a=e(a,c.action),c=c.next;while(c!==i);gt(a,t.memoizedState)||(Xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function oc(){}function cc(e,t){var n=Se,r=dt(),i=t(),a=!gt(r.memoizedState,i);if(a&&(r.memoizedState=i,Xe=!0),r=r.queue,Ta(fc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Ur(9,dc.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(o(349));(xn&30)!==0||uc(n,t,i)}return i}function uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dc(e,t,n,r){t.value=n,t.getSnapshot=r,pc(t)&&mc(e)}function fc(e,t,n){return n(function(){pc(t)&&mc(e)})}function pc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function mc(e){var t=Mt(e,1);t!==null&&wt(t,e,1,-1)}function hc(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Df.bind(null,Se,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gc(){return dt().memoizedState}function Ol(e,t,n,r){var i=Et();Se.flags|=e,i.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function Il(e,t,n,r){var i=dt();r=r===void 0?null:r;var a=void 0;if(Me!==null){var c=Me.memoizedState;if(a=c.destroy,r!==null&&Na(r,c.deps)){i.memoizedState=Ur(t,n,a,r);return}}Se.flags|=e,i.memoizedState=Ur(1|t,n,a,r)}function xc(e,t){return Ol(8390656,8,e,t)}function Ta(e,t){return Il(2048,8,e,t)}function vc(e,t){return Il(4,2,e,t)}function yc(e,t){return Il(4,4,e,t)}function jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wc(e,t,n){return n=n!=null?n.concat([e]):null,Il(4,4,jc.bind(null,t,e),n)}function Pa(){}function Sc(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nc(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kc(e,t,n){return(xn&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n):(gt(n,t)||(n=Zs(),Se.lanes|=n,vn|=n,e.baseState=!0),t)}function Rf(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Sa.transition;Sa.transition={};try{e(!1),t()}finally{ue=n,Sa.transition=r}}function bc(){return dt().memoizedState}function Mf(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cc(e))Ec(t,n);else if(n=rc(e,t,n,r),n!==null){var i=He();wt(n,e,r,i),Tc(n,t,r)}}function Df(e,t,n){var r=tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cc(e))Ec(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var c=t.lastRenderedState,d=a(c,n);if(i.hasEagerState=!0,i.eagerState=d,gt(d,c)){var m=t.interleaved;m===null?(i.next=i,ga(t)):(i.next=m.next,m.next=i),t.interleaved=i;return}}catch{}finally{}n=rc(e,t,i,r),n!==null&&(i=He(),wt(n,e,r,i),Tc(n,t,r))}}function Cc(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Ec(e,t){Lr=Ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_i(e,n)}}var Ul={readContext:ut,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Lf={readContext:ut,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ol(4194308,4,jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ol(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Mf.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:hc,useDebugValue:Pa,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=hc(!1),t=e[0];return e=Rf.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=Et();if(je){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ie===null)throw Error(o(349));(xn&30)!==0||uc(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,xc(fc.bind(null,r,a,e),[e]),r.flags|=2048,Ur(9,dc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ie.identifierPrefix;if(je){var n=Rt,r=_t;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_f++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Of={readContext:ut,useCallback:Sc,useContext:ut,useEffect:Ta,useImperativeHandle:wc,useInsertionEffect:vc,useLayoutEffect:yc,useMemo:Nc,useReducer:Ca,useRef:gc,useState:function(){return Ca(Ir)},useDebugValue:Pa,useDeferredValue:function(e){var t=dt();return kc(t,Me.memoizedState,e)},useTransition:function(){var e=Ca(Ir)[0],t=dt().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:cc,useId:bc,unstable_isNewReconciler:!1},If={readContext:ut,useCallback:Sc,useContext:ut,useEffect:Ta,useImperativeHandle:wc,useInsertionEffect:vc,useLayoutEffect:yc,useMemo:Nc,useReducer:Ea,useRef:gc,useState:function(){return Ea(Ir)},useDebugValue:Pa,useDeferredValue:function(e){var t=dt();return Me===null?t.memoizedState=e:kc(t,Me.memoizedState,e)},useTransition:function(){var e=Ea(Ir)[0],t=dt().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:cc,useId:bc,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function za(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=tn(e),a=Dt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Jt(e,a,i),t!==null&&(wt(t,e,i,r),_l(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=tn(e),a=Dt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Jt(e,a,i),t!==null&&(wt(t,e,i,r),_l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=tn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(wt(t,e,r,n),_l(t,e,r))}};function Pc(e,t,n,r,i,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,c):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function zc(e,t,n){var r=!1,i=Kt,a=t.contextType;return typeof a=="object"&&a!==null?a=ut(a):(i=Je(t)?fn:Ve.current,r=t.contextTypes,a=(r=r!=null)?Un(e,i):Kt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function _c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function _a(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xa(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ut(a):(a=Je(t)?fn:Ve.current,i.context=Un(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(za(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Al.enqueueReplaceState(i,i.state,null),Rl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Ka=r),Ma(e,t)},n}function Mc(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ma(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Dc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xf.bind(null,e,t,n),t.then(e,e))}function Lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Oc(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Af=$.ReactCurrentOwner,Xe=!1;function We(e,t,n,r){t.child=e===null?nc(t,null,n,r):Vn(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var a=t.ref;return qn(t,i),r=ka(e,t,n,r,a,i),n=ba(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(je&&n&&sa(t),t.flags|=1,We(e,t,r,i),t.child)}function Uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ts(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ac(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var c=a.memoizedProps;if(n=n.compare,n=n!==null?n:kr,n(c,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=rn(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return Da(e,t,n,r,i)}function Fc(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Kn,st),st|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Kn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,he(Kn,st),st|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,he(Kn,st),st|=r;return We(e,t,i,n),t.child}function Bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Da(e,t,n,r,i){var a=Je(n)?fn:Ve.current;return a=Un(t,a),qn(t,i),n=ka(e,t,n,r,a,i),r=ba(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(je&&r&&sa(t),t.flags|=1,We(e,t,n,i),t.child)}function Vc(e,t,n,r,i){if(Je(n)){var a=!0;Nl(t)}else a=!1;if(qn(t,i),t.stateNode===null)Bl(e,t),zc(t,n,r),_a(t,n,r,i),r=!0;else if(e===null){var c=t.stateNode,d=t.memoizedProps;c.props=d;var m=c.context,k=n.contextType;typeof k=="object"&&k!==null?k=ut(k):(k=Je(n)?fn:Ve.current,k=Un(t,k));var M=n.getDerivedStateFromProps,D=typeof M=="function"||typeof c.getSnapshotBeforeUpdate=="function";D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==r||m!==k)&&_c(t,c,r,k),Gt=!1;var _=t.memoizedState;c.state=_,Rl(t,r,c,i),m=t.memoizedState,d!==r||_!==m||Ge.current||Gt?(typeof M=="function"&&(za(t,n,M,r),m=t.memoizedState),(d=Gt||Pc(t,n,d,r,_,m,k))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),c.props=r,c.state=m,c.context=k,r=d):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,lc(e,t),d=t.memoizedProps,k=t.type===t.elementType?d:vt(t.type,d),c.props=k,D=t.pendingProps,_=c.context,m=n.contextType,typeof m=="object"&&m!==null?m=ut(m):(m=Je(n)?fn:Ve.current,m=Un(t,m));var B=n.getDerivedStateFromProps;(M=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==D||_!==m)&&_c(t,c,r,m),Gt=!1,_=t.memoizedState,c.state=_,Rl(t,r,c,i);var q=t.memoizedState;d!==D||_!==q||Ge.current||Gt?(typeof B=="function"&&(za(t,n,B,r),q=t.memoizedState),(k=Gt||Pc(t,n,k,r,_,q,m)||!1)?(M||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,q,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,q,m)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=q),c.props=r,c.state=q,c.context=m,r=k):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return La(e,t,n,r,a,i)}function La(e,t,n,r,i,a){Bc(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return i&&Ho(t,n,!1),Lt(e,t,a);r=t.stateNode,Af.current=t;var d=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=Vn(t,e.child,null,a),t.child=Vn(t,null,d,a)):We(e,t,d,a),t.memoizedState=r.state,i&&Ho(t,n,!0),t.child}function Qc(e){var t=e.stateNode;t.pendingContext?$o(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$o(e,t.context,!1),va(e,t.containerInfo)}function qc(e,t,n,r,i){return Bn(),da(i),t.flags|=256,We(e,t,n,r),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function $c(e,t,n){var r=t.pendingProps,i=we.current,a=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,a?(r=t.mode,a=t.child,c={mode:"hidden",children:c},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=Zl(c,r,0,null),e=Sn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ia(n),t.memoizedState=Oa,e):Ua(t,c));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Ff(e,t,c,r,d,i,n);if(a){a=r.fallback,c=t.mode,i=e.child,d=i.sibling;var m={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=rn(i,m),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?a=rn(d,a):(a=Sn(a,c,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,c=e.child.memoizedState,c=c===null?Ia(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~n,t.memoizedState=Oa,r}return a=e.child,e=a.sibling,r=rn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ua(e,t){return t=Zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fl(e,t,n,r){return r!==null&&da(r),Vn(t,e.child,null,n),e=Ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ff(e,t,n,r,i,a,c){if(n)return t.flags&256?(t.flags&=-257,r=Ra(Error(o(422))),Fl(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Zl({mode:"visible",children:r.children},i,0,null),a=Sn(a,i,c,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Vn(t,e.child,null,c),t.child.memoizedState=Ia(c),t.memoizedState=Oa,a);if((t.mode&1)===0)return Fl(e,t,c,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,a=Error(o(419)),r=Ra(a,r,void 0),Fl(e,t,c,r)}if(d=(c&e.childLanes)!==0,Xe||d){if(r=Ie,r!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|c))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Mt(e,i),wt(r,e,i,-1))}return es(),r=Ra(Error(o(421))),Fl(e,t,c,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zf.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,at=Wt(i.nextSibling),it=t,je=!0,xt=null,e!==null&&(ot[ct++]=_t,ot[ct++]=Rt,ot[ct++]=pn,_t=e.id,Rt=e.overflow,pn=t),t=Ua(t,r.children),t.flags|=4096,t)}function Wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function Aa(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Hc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(We(e,t,r.children,n),r=we.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wc(e,n,t);else if(e.tag===19)Wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ml(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Aa(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ml(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Aa(t,!0,n,null,a);break;case"together":Aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Bf(e,t,n){switch(t.tag){case 3:Qc(t),Bn();break;case 5:sc(t);break;case 1:Je(t.type)&&Nl(t);break;case 4:va(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Pl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?$c(e,t,n):(he(we,we.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Hc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,Fc(e,t,n)}return Lt(e,t,n)}var Kc,Fa,Yc,Gc;Kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Fa=function(){},Yc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(Ct.current);var a=null;switch(n){case"input":i=hi(e,i),r=hi(e,r),a=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),a=[];break;case"textarea":i=vi(e,i),r=vi(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jl)}ji(n,r);var c;n=null;for(k in i)if(!r.hasOwnProperty(k)&&i.hasOwnProperty(k)&&i[k]!=null)if(k==="style"){var d=i[k];for(c in d)d.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(p.hasOwnProperty(k)?a||(a=[]):(a=a||[]).push(k,null));for(k in r){var m=r[k];if(d=i!=null?i[k]:void 0,r.hasOwnProperty(k)&&m!==d&&(m!=null||d!=null))if(k==="style")if(d){for(c in d)!d.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in m)m.hasOwnProperty(c)&&d[c]!==m[c]&&(n||(n={}),n[c]=m[c])}else n||(a||(a=[]),a.push(k,n)),n=m;else k==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,d=d?d.__html:void 0,m!=null&&d!==m&&(a=a||[]).push(k,m)):k==="children"?typeof m!="string"&&typeof m!="number"||(a=a||[]).push(k,""+m):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(p.hasOwnProperty(k)?(m!=null&&k==="onScroll"&&xe("scroll",e),a||d===m||(a=[])):(a=a||[]).push(k,m))}n&&(a=a||[]).push("style",n);var k=a;(t.updateQueue=k)&&(t.flags|=4)}},Gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vf(e,t,n){var r=t.pendingProps;switch(oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return Je(t.type)&&Sl(),qe(t),null;case 3:return r=t.stateNode,$n(),ve(Ge),ve(Ve),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(El(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xt!==null&&(Ja(xt),xt=null))),Fa(e,t),qe(t),null;case 5:ya(t);var i=gn(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Yc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return qe(t),null}if(e=gn(Ct.current),El(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[bt]=t,r[Pr]=a,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Cr.length;i++)xe(Cr[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Ps(r,a),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},xe("invalid",r);break;case"textarea":Rs(r,a),xe("invalid",r)}ji(n,a),i=null;for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];c==="children"?typeof d=="string"?r.textContent!==d&&(a.suppressHydrationWarning!==!0&&yl(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&yl(r.textContent,d,e),i=["children",""+d]):p.hasOwnProperty(c)&&d!=null&&c==="onScroll"&&xe("scroll",r)}switch(n){case"input":Gr(r),_s(r,a,!0);break;case"textarea":Gr(r),Ds(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=jl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ls(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[bt]=t,e[Pr]=r,Kc(e,t,!1,!1),t.stateNode=e;e:{switch(c=wi(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cr.length;i++)xe(Cr[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":Ps(e,r),i=hi(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),xe("invalid",e);break;case"textarea":Rs(e,r),i=vi(e,r),xe("invalid",e);break;default:i=r}ji(n,i),d=i;for(a in d)if(d.hasOwnProperty(a)){var m=d[a];a==="style"?Us(e,m):a==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Os(e,m)):a==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&sr(e,m):typeof m=="number"&&sr(e,""+m):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?m!=null&&a==="onScroll"&&xe("scroll",e):m!=null&&A(e,a,m,c))}switch(n){case"input":Gr(e),_s(e,r,!1);break;case"textarea":Gr(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ce(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Cn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)Gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=gn(Dr.current),gn(Ct.current),El(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(a=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:yl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return qe(t),null;case 13:if(ve(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Zo(),Bn(),t.flags|=98560,a=!1;else if(a=El(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[bt]=t}else Bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else xt!==null&&(Ja(xt),xt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(we.current&1)!==0?De===0&&(De=3):es())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return $n(),Fa(e,t),e===null&&Er(t.stateNode.containerInfo),qe(t),null;case 10:return ma(t.type._context),qe(t),null;case 17:return Je(t.type)&&Sl(),qe(t),null;case 19:if(ve(we),a=t.memoizedState,a===null)return qe(t),null;if(r=(t.flags&128)!==0,c=a.rendering,c===null)if(r)Ar(a,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Ml(e),c!==null){for(t.flags|=128,Ar(a,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(we,we.current&1|2),t.child}e=e.sibling}a.tail!==null&&Pe()>Yn&&(t.flags|=128,r=!0,Ar(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ml(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!je)return qe(t),null}else 2*Pe()-a.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,Ar(a,!1),t.lanes=4194304);a.isBackwards?(c.sibling=t.child,t.child=c):(n=a.last,n!==null?n.sibling=c:t.child=c,a.last=c)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Pe(),t.sibling=null,n=we.current,he(we,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Qf(e,t){switch(oa(t),t.tag){case 1:return Je(t.type)&&Sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),ve(Ge),ve(Ve),wa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ya(t),null;case 13:if(ve(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(we),null;case 4:return $n(),null;case 10:return ma(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var Vl=!1,$e=!1,qf=typeof WeakSet=="function"?WeakSet:Set,V=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Ba(e,t,n){try{n()}catch(r){Ce(e,t,r)}}var Jc=!1;function $f(e,t){if(Zi=ol,e=Po(),$i(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var c=0,d=-1,m=-1,k=0,M=0,D=e,_=null;t:for(;;){for(var B;D!==n||i!==0&&D.nodeType!==3||(d=c+i),D!==a||r!==0&&D.nodeType!==3||(m=c+r),D.nodeType===3&&(c+=D.nodeValue.length),(B=D.firstChild)!==null;)_=D,D=B;for(;;){if(D===e)break t;if(_===n&&++k===i&&(d=c),_===a&&++M===r&&(m=c),(B=D.nextSibling)!==null)break;D=_,_=D.parentNode}D=B}n=d===-1||m===-1?null:{start:d,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},ol=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var W=q.memoizedProps,ze=q.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?W:vt(t.type,W),ze);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(L){Ce(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return q=Jc,Jc=!1,q}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ba(t,n,a)}i=i.next}while(i!==r)}}function Ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xc(e){var t=e.alternate;t!==null&&(e.alternate=null,Xc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Pr],delete t[la],delete t[Ef],delete t[Tf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zc(e){return e.tag===5||e.tag===3||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jl));else if(r!==4&&(e=e.child,e!==null))for(Qa(e,t,n),e=e.sibling;e!==null;)Qa(e,t,n),e=e.sibling}function qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qa(e,t,n),e=e.sibling;e!==null;)qa(e,t,n),e=e.sibling}var Ae=null,yt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)tu(e,t,n),n=n.sibling}function tu(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:$e||Hn(n,t);case 6:var r=Ae,i=yt;Ae=null,Xt(e,t,n),Ae=r,yt=i,Ae!==null&&(yt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(yt?(e=Ae,n=n.stateNode,e.nodeType===8?ra(e.parentNode,n):e.nodeType===1&&ra(e,n),vr(e)):ra(Ae,n.stateNode));break;case 4:r=Ae,i=yt,Ae=n.stateNode.containerInfo,yt=!0,Xt(e,t,n),Ae=r,yt=i;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Ba(n,t,c),i=i.next}while(i!==r)}Xt(e,t,n);break;case 1:if(!$e&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Ce(n,t,d)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,Xt(e,t,n),$e=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qf),t.forEach(function(r){var i=ep.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 5:Ae=d.stateNode,yt=!1;break e;case 3:Ae=d.stateNode.containerInfo,yt=!0;break e;case 4:Ae=d.stateNode.containerInfo,yt=!0;break e}d=d.return}if(Ae===null)throw Error(o(160));tu(a,c,i),Ae=null,yt=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(k){Ce(i,t,k)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ru(t,e),t=t.sibling}function ru(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Tt(e),r&4){try{Fr(3,e,e.return),Ql(3,e)}catch(W){Ce(e,e.return,W)}try{Fr(5,e,e.return)}catch(W){Ce(e,e.return,W)}}break;case 1:jt(t,e),Tt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(jt(t,e),Tt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var i=e.stateNode;try{sr(i,"")}catch(W){Ce(e,e.return,W)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,c=n!==null?n.memoizedProps:a,d=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&zs(i,a),wi(d,c);var k=wi(d,a);for(c=0;c<m.length;c+=2){var M=m[c],D=m[c+1];M==="style"?Us(i,D):M==="dangerouslySetInnerHTML"?Os(i,D):M==="children"?sr(i,D):A(i,M,D,k)}switch(d){case"input":gi(i,a);break;case"textarea":Ms(i,a);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var B=a.value;B!=null?Cn(i,!!a.multiple,B,!1):_!==!!a.multiple&&(a.defaultValue!=null?Cn(i,!!a.multiple,a.defaultValue,!0):Cn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Pr]=a}catch(W){Ce(e,e.return,W)}}break;case 6:if(jt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(W){Ce(e,e.return,W)}}break;case 3:if(jt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(W){Ce(e,e.return,W)}break;case 4:jt(t,e),Tt(e);break;case 13:jt(t,e),Tt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ha=Pe())),r&4&&nu(e);break;case 22:if(M=n!==null&&n.memoizedState!==null,e.mode&1?($e=(k=$e)||M,jt(t,e),$e=k):jt(t,e),Tt(e),r&8192){if(k=e.memoizedState!==null,(e.stateNode.isHidden=k)&&!M&&(e.mode&1)!==0)for(V=e,M=e.child;M!==null;){for(D=V=M;V!==null;){switch(_=V,B=_.child,_.tag){case 0:case 11:case 14:case 15:Fr(4,_,_.return);break;case 1:Hn(_,_.return);var q=_.stateNode;if(typeof q.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(W){Ce(r,n,W)}}break;case 5:Hn(_,_.return);break;case 22:if(_.memoizedState!==null){au(D);continue}}B!==null?(B.return=_,V=B):au(D)}M=M.sibling}e:for(M=null,D=e;;){if(D.tag===5){if(M===null){M=D;try{i=D.stateNode,k?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=D.stateNode,m=D.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,d.style.display=Is("display",c))}catch(W){Ce(e,e.return,W)}}}else if(D.tag===6){if(M===null)try{D.stateNode.nodeValue=k?"":D.memoizedProps}catch(W){Ce(e,e.return,W)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;M===D&&(M=null),D=D.return}M===D&&(M=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:jt(t,e),Tt(e),r&4&&nu(e);break;case 21:break;default:jt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zc(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(sr(i,""),r.flags&=-33);var a=eu(e);qa(e,a,i);break;case 3:case 4:var c=r.stateNode.containerInfo,d=eu(e);Qa(e,d,c);break;default:throw Error(o(161))}}catch(m){Ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e,t,n){V=e,lu(e)}function lu(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,a=i.child;if(i.tag===22&&r){var c=i.memoizedState!==null||Vl;if(!c){var d=i.alternate,m=d!==null&&d.memoizedState!==null||$e;d=Vl;var k=$e;if(Vl=c,($e=m)&&!k)for(V=i;V!==null;)c=V,m=c.child,c.tag===22&&c.memoizedState!==null?su(i):m!==null?(m.return=c,V=m):su(i);for(;a!==null;)V=a,lu(a),a=a.sibling;V=i,Vl=d,$e=k}iu(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,V=a):iu(e)}}function iu(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:$e||Ql(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ac(t,a,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ac(t,c,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var k=t.alternate;if(k!==null){var M=k.memoizedState;if(M!==null){var D=M.dehydrated;D!==null&&vr(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}$e||t.flags&512&&Va(t)}catch(_){Ce(t,t.return,_)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function au(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function su(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ql(4,t)}catch(m){Ce(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(m){Ce(t,i,m)}}var a=t.return;try{Va(t)}catch(m){Ce(t,a,m)}break;case 5:var c=t.return;try{Va(t)}catch(m){Ce(t,c,m)}}}catch(m){Ce(t,t.return,m)}if(t===e){V=null;break}var d=t.sibling;if(d!==null){d.return=t.return,V=d;break}V=t.return}}var Hf=Math.ceil,ql=$.ReactCurrentDispatcher,$a=$.ReactCurrentOwner,ft=$.ReactCurrentBatchConfig,ie=0,Ie=null,_e=null,Fe=0,st=0,Kn=Ht(0),De=0,Br=null,vn=0,$l=0,Wa=0,Vr=null,Ze=null,Ha=0,Yn=1/0,Ot=null,Wl=!1,Ka=null,Zt=null,Hl=!1,en=null,Kl=0,Qr=0,Ya=null,Yl=-1,Gl=0;function He(){return(ie&6)!==0?Pe():Yl!==-1?Yl:Yl=Pe()}function tn(e){return(e.mode&1)===0?1:(ie&2)!==0&&Fe!==0?Fe&-Fe:zf.transition!==null?(Gl===0&&(Gl=Zs()),Gl):(e=ue,e!==0||(e=window.event,e=e===void 0?16:oo(e.type)),e)}function wt(e,t,n,r){if(50<Qr)throw Qr=0,Ya=null,Error(o(185));pr(e,n,r),((ie&2)===0||e!==Ie)&&(e===Ie&&((ie&2)===0&&($l|=n),De===4&&nn(e,Fe)),et(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Yn=Pe()+500,kl&&Yt()))}function et(e,t){var n=e.callbackNode;Pd(e,t);var r=il(e,e===Ie?Fe:0);if(r===0)n!==null&&Gs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gs(n),t===1)e.tag===0?Pf(cu.bind(null,e)):Ko(cu.bind(null,e)),bf(function(){(ie&6)===0&&Yt()}),n=null;else{switch(eo(r)){case 1:n=Ti;break;case 4:n=Js;break;case 16:n=tl;break;case 536870912:n=Xs;break;default:n=tl}n=xu(n,ou.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ou(e,t){if(Yl=-1,Gl=0,(ie&6)!==0)throw Error(o(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=il(e,e===Ie?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Jl(e,r);else{t=r;var i=ie;ie|=2;var a=du();(Ie!==e||Fe!==t)&&(Ot=null,Yn=Pe()+500,jn(e,t));do try{Gf();break}catch(d){uu(e,d)}while(!0);pa(),ql.current=a,ie=i,_e!==null?t=0:(Ie=null,Fe=0,t=De)}if(t!==0){if(t===2&&(i=Pi(e),i!==0&&(r=i,t=Ga(e,i))),t===1)throw n=Br,jn(e,0),nn(e,r),et(e,Pe()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Kf(i)&&(t=Jl(e,r),t===2&&(a=Pi(e),a!==0&&(r=a,t=Ga(e,a))),t===1))throw n=Br,jn(e,0),nn(e,r),et(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:wn(e,Ze,Ot);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Ha+500-Pe(),10<t)){if(il(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=na(wn.bind(null,e,Ze,Ot),t);break}wn(e,Ze,Ot);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var c=31-ht(r);a=1<<c,c=t[c],c>i&&(i=c),r&=~a}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hf(r/1960))-r,10<r){e.timeoutHandle=na(wn.bind(null,e,Ze,Ot),r);break}wn(e,Ze,Ot);break;case 5:wn(e,Ze,Ot);break;default:throw Error(o(329))}}}return et(e,Pe()),e.callbackNode===n?ou.bind(null,e):null}function Ga(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(jn(e,t).flags|=256),e=Jl(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Ja(t)),e}function Ja(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!gt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Wa,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function cu(e){if((ie&6)!==0)throw Error(o(327));Gn();var t=il(e,0);if((t&1)===0)return et(e,Pe()),null;var n=Jl(e,t);if(e.tag!==0&&n===2){var r=Pi(e);r!==0&&(t=r,n=Ga(e,r))}if(n===1)throw n=Br,jn(e,0),nn(e,t),et(e,Pe()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Ze,Ot),et(e,Pe()),null}function Xa(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Yn=Pe()+500,kl&&Yt())}}function yn(e){en!==null&&en.tag===0&&(ie&6)===0&&Gn();var t=ie;ie|=1;var n=ft.transition,r=ue;try{if(ft.transition=null,ue=1,e)return e()}finally{ue=r,ft.transition=n,ie=t,(ie&6)===0&&Yt()}}function Za(){st=Kn.current,ve(Kn)}function jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kf(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:$n(),ve(Ge),ve(Ve),wa();break;case 5:ya(r);break;case 4:$n();break;case 13:ve(we);break;case 19:ve(we);break;case 10:ma(r.type._context);break;case 22:case 23:Za()}n=n.return}if(Ie=e,_e=e=rn(e.current,null),Fe=st=t,De=0,Br=null,Wa=$l=vn=0,Ze=Vr=null,hn!==null){for(t=0;t<hn.length;t++)if(n=hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var c=a.next;a.next=i,r.next=c}n.pending=r}hn=null}return e}function uu(e,t){do{var n=_e;try{if(pa(),Dl.current=Ul,Ll){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(xn=0,Oe=Me=Se=null,Lr=!1,Or=0,$a.current=null,n===null||n.return===null){De=1,Br=t,_e=null;break}e:{var a=e,c=n.return,d=n,m=t;if(t=Fe,d.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var k=m,M=d,D=M.tag;if((M.mode&1)===0&&(D===0||D===11||D===15)){var _=M.alternate;_?(M.updateQueue=_.updateQueue,M.memoizedState=_.memoizedState,M.lanes=_.lanes):(M.updateQueue=null,M.memoizedState=null)}var B=Lc(c);if(B!==null){B.flags&=-257,Oc(B,c,d,a,t),B.mode&1&&Dc(a,k,t),t=B,m=k;var q=t.updateQueue;if(q===null){var W=new Set;W.add(m),t.updateQueue=W}else q.add(m);break e}else{if((t&1)===0){Dc(a,k,t),es();break e}m=Error(o(426))}}else if(je&&d.mode&1){var ze=Lc(c);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Oc(ze,c,d,a,t),da(Wn(m,d));break e}}a=m=Wn(m,d),De!==4&&(De=2),Vr===null?Vr=[a]:Vr.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=Rc(a,m,t);ic(a,y);break e;case 1:d=m;var h=a.type,w=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Zt===null||!Zt.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var L=Mc(a,d,t);ic(a,L);break e}}a=a.return}while(a!==null)}pu(n)}catch(H){t=H,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function du(){var e=ql.current;return ql.current=Ul,e===null?Ul:e}function es(){(De===0||De===3||De===2)&&(De=4),Ie===null||(vn&268435455)===0&&($l&268435455)===0||nn(Ie,Fe)}function Jl(e,t){var n=ie;ie|=2;var r=du();(Ie!==e||Fe!==t)&&(Ot=null,jn(e,t));do try{Yf();break}catch(i){uu(e,i)}while(!0);if(pa(),ie=n,ql.current=r,_e!==null)throw Error(o(261));return Ie=null,Fe=0,De}function Yf(){for(;_e!==null;)fu(_e)}function Gf(){for(;_e!==null&&!jd();)fu(_e)}function fu(e){var t=gu(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?pu(e):_e=t,$a.current=null}function pu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Vf(n,t,st),n!==null){_e=n;return}}else{if(n=Qf(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,_e=null;return}}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);De===0&&(De=5)}function wn(e,t,n){var r=ue,i=ft.transition;try{ft.transition=null,ue=1,Jf(e,t,n,r)}finally{ft.transition=i,ue=r}return null}function Jf(e,t,n,r){do Gn();while(en!==null);if((ie&6)!==0)throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(zd(e,a),e===Ie&&(_e=Ie=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Hl||(Hl=!0,xu(tl,function(){return Gn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=ft.transition,ft.transition=null;var c=ue;ue=1;var d=ie;ie|=4,$a.current=null,$f(e,n),ru(n,e),xf(ea),ol=!!Zi,ea=Zi=null,e.current=n,Wf(n),wd(),ie=d,ue=c,ft.transition=a}else e.current=n;if(Hl&&(Hl=!1,en=e,Kl=i),a=e.pendingLanes,a===0&&(Zt=null),kd(n.stateNode),et(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Ka,Ka=null,e;return(Kl&1)!==0&&e.tag!==0&&Gn(),a=e.pendingLanes,(a&1)!==0?e===Ya?Qr++:(Qr=0,Ya=e):Qr=0,Yt(),null}function Gn(){if(en!==null){var e=eo(Kl),t=ft.transition,n=ue;try{if(ft.transition=null,ue=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Kl=0,(ie&6)!==0)throw Error(o(331));var i=ie;for(ie|=4,V=e.current;V!==null;){var a=V,c=a.child;if((V.flags&16)!==0){var d=a.deletions;if(d!==null){for(var m=0;m<d.length;m++){var k=d[m];for(V=k;V!==null;){var M=V;switch(M.tag){case 0:case 11:case 15:Fr(8,M,a)}var D=M.child;if(D!==null)D.return=M,V=D;else for(;V!==null;){M=V;var _=M.sibling,B=M.return;if(Xc(M),M===k){V=null;break}if(_!==null){_.return=B,V=_;break}V=B}}}var q=a.alternate;if(q!==null){var W=q.child;if(W!==null){q.child=null;do{var ze=W.sibling;W.sibling=null,W=ze}while(W!==null)}}V=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,V=c;else e:for(;V!==null;){if(a=V,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Fr(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,V=y;break e}V=a.return}}var h=e.current;for(V=h;V!==null;){c=V;var w=c.child;if((c.subtreeFlags&2064)!==0&&w!==null)w.return=c,V=w;else e:for(c=h;V!==null;){if(d=V,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Ql(9,d)}}catch(H){Ce(d,d.return,H)}if(d===c){V=null;break e}var L=d.sibling;if(L!==null){L.return=d.return,V=L;break e}V=d.return}}if(ie=i,Yt(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{ue=n,ft.transition=t}}return!1}function mu(e,t,n){t=Wn(n,t),t=Rc(e,t,1),e=Jt(e,t,1),t=He(),e!==null&&(pr(e,1,t),et(e,t))}function Ce(e,t,n){if(e.tag===3)mu(e,e,n);else for(;t!==null;){if(t.tag===3){mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Wn(n,e),e=Mc(t,e,1),t=Jt(t,e,1),e=He(),t!==null&&(pr(t,1,e),et(t,e));break}}t=t.return}}function Xf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Fe&n)===n&&(De===4||De===3&&(Fe&130023424)===Fe&&500>Pe()-Ha?jn(e,0):Wa|=n),et(e,t)}function hu(e,t){t===0&&((e.mode&1)===0?t=1:(t=ll,ll<<=1,(ll&130023424)===0&&(ll=4194304)));var n=He();e=Mt(e,t),e!==null&&(pr(e,t,n),et(e,n))}function Zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hu(e,n)}function ep(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),hu(e,n)}var gu;gu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Xe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Xe=!1,Bf(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,je&&(t.flags&1048576)!==0&&Yo(t,Cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bl(e,t),e=t.pendingProps;var i=Un(t,Ve.current);qn(t,n),i=ka(null,t,r,e,i,n);var a=ba();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(a=!0,Nl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xa(t),i.updater=Al,t.stateNode=i,i._reactInternals=t,_a(t,r,e,n),t=La(null,t,r,!0,a,n)):(t.tag=0,je&&a&&sa(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=np(r),e=vt(r,e),i){case 0:t=Da(null,t,r,e,n);break e;case 1:t=Vc(null,t,r,e,n);break e;case 11:t=Ic(null,t,r,e,n);break e;case 14:t=Uc(null,t,r,vt(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Da(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Vc(e,t,r,i,n);case 3:e:{if(Qc(t),e===null)throw Error(o(387));r=t.pendingProps,a=t.memoizedState,i=a.element,lc(e,t),Rl(t,r,null,n);var c=t.memoizedState;if(r=c.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Wn(Error(o(423)),t),t=qc(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(o(424)),t),t=qc(e,t,r,n,i);break e}else for(at=Wt(t.stateNode.containerInfo.firstChild),it=t,je=!0,xt=null,n=nc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===i){t=Lt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return sc(t),e===null&&ua(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,c=i.children,ta(r,i)?c=null:a!==null&&ta(r,a)&&(t.flags|=32),Bc(e,t),We(e,t,c,n),t.child;case 6:return e===null&&ua(t),null;case 13:return $c(e,t,n);case 4:return va(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Ic(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,c=i.value,he(Pl,r._currentValue),r._currentValue=c,a!==null)if(gt(a.value,c)){if(a.children===i.children&&!Ge.current){t=Lt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var d=a.dependencies;if(d!==null){c=a.child;for(var m=d.firstContext;m!==null;){if(m.context===r){if(a.tag===1){m=Dt(-1,n&-n),m.tag=2;var k=a.updateQueue;if(k!==null){k=k.shared;var M=k.pending;M===null?m.next=m:(m.next=M.next,M.next=m),k.pending=m}}a.lanes|=n,m=a.alternate,m!==null&&(m.lanes|=n),ha(a.return,n,t),d.lanes|=n;break}m=m.next}}else if(a.tag===10)c=a.type===t.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(o(341));c.lanes|=n,d=c.alternate,d!==null&&(d.lanes|=n),ha(c,n,t),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===t){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qn(t,n),i=ut(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=vt(r,t.pendingProps),i=vt(r.type,i),Uc(e,t,r,i,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vt(r,i),Bl(e,t),t.tag=1,Je(r)?(e=!0,Nl(t)):e=!1,qn(t,n),zc(t,r,i),_a(t,r,i,n),La(null,t,r,!0,e,n);case 19:return Hc(e,t,n);case 22:return Fc(e,t,n)}throw Error(o(156,t.tag))};function xu(e,t){return Ys(e,t)}function tp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new tp(e,t,n,r)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function np(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ge)return 11;if(e===Ke)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,r,i,a){var c=2;if(r=e,typeof e=="function")ts(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Re:return Sn(n.children,i,a,t);case Ee:c=8,i|=8;break;case U:return e=pt(12,n,t,i|2),e.elementType=U,e.lanes=a,e;case Te:return e=pt(13,n,t,i),e.elementType=Te,e.lanes=a,e;case Le:return e=pt(19,n,t,i),e.elementType=Le,e.lanes=a,e;case be:return Zl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:c=10;break e;case pe:c=9;break e;case ge:c=11;break e;case Ke:c=14;break e;case Ye:c=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=pt(c,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Sn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Zl(e,t,n,r){return e=pt(22,e,r,t),e.elementType=be,e.lanes=n,e.stateNode={isHidden:!1},e}function ns(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function rs(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,n,r,i,a,c,d,m){return e=new rp(e,t,n,d,m),t===1?(t=1,a===!0&&(t|=8)):t=0,a=pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(a),e}function lp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vu(e){if(!e)return Kt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(Je(n))return Wo(e,n,t)}return t}function yu(e,t,n,r,i,a,c,d,m){return e=ls(n,r,!0,e,i,a,c,d,m),e.context=vu(null),n=e.current,r=He(),i=tn(n),a=Dt(r,i),a.callback=t??null,Jt(n,a,i),e.current.lanes=i,pr(e,i,r),et(e,r),e}function ei(e,t,n,r){var i=t.current,a=He(),c=tn(i);return n=vu(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(a,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,c),e!==null&&(wt(e,i,c,a),_l(e,i,c)),c}function ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function is(e,t){ju(e,t),(e=e.alternate)&&ju(e,t)}function ip(){return null}var wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function as(e){this._internalRoot=e}ni.prototype.render=as.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));ei(e,t,null,null)},ni.prototype.unmount=as.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){ei(null,e,null,null)}),t[Pt]=null}};function ni(e){this._internalRoot=e}ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=ro();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&ao(e)}};function ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function ap(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var k=ti(c);a.call(k)}}var c=yu(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=c,e[Pt]=c.current,Er(e.nodeType===8?e.parentNode:e),yn(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var k=ti(m);d.call(k)}}var m=ls(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=m,e[Pt]=m.current,Er(e.nodeType===8?e.parentNode:e),yn(function(){ei(t,m,n,r)}),m}function li(e,t,n,r,i){var a=n._reactRootContainer;if(a){var c=a;if(typeof i=="function"){var d=i;i=function(){var m=ti(c);d.call(m)}}ei(t,c,e,i)}else c=ap(n,t,e,i,r);return ti(c)}to=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(_i(t,n|1),et(t,Pe()),(ie&6)===0&&(Yn=Pe()+500,Yt()))}break;case 13:yn(function(){var r=Mt(e,1);if(r!==null){var i=He();wt(r,e,1,i)}}),is(e,1)}},Ri=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=He();wt(t,e,134217728,n)}is(e,134217728)}},no=function(e){if(e.tag===13){var t=tn(e),n=Mt(e,t);if(n!==null){var r=He();wt(n,e,t,r)}is(e,t)}},ro=function(){return ue},lo=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}},ki=function(e,t,n){switch(t){case"input":if(gi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wl(r);if(!i)throw Error(o(90));Ts(r),gi(r,i)}}}break;case"textarea":Ms(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}},Vs=Xa,Qs=yn;var sp={usingClientEntryPoint:!1,Events:[zr,On,wl,Fs,Bs,Xa]},qr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},op={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hs(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{nl=ii.inject(op),kt=ii}catch{}}return tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp,tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ss(t))throw Error(o(200));return lp(e,t,null,n)},tt.createRoot=function(e,t){if(!ss(e))throw Error(o(299));var n=!1,r="",i=wu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,Er(e.nodeType===8?e.parentNode:e),new as(t)},tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Hs(t),e=e===null?null:e.stateNode,e},tt.flushSync=function(e){return yn(e)},tt.hydrate=function(e,t,n){if(!ri(t))throw Error(o(200));return li(null,e,t,!0,n)},tt.hydrateRoot=function(e,t,n){if(!ss(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",c=wu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=yu(t,null,e,1,n??null,i,!1,a,c),e[Pt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ni(t)},tt.render=function(e,t,n){if(!ri(t))throw Error(o(200));return li(null,e,t,!1,n)},tt.unmountComponentAtNode=function(e){if(!ri(e))throw Error(o(40));return e._reactRootContainer?(yn(function(){li(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1},tt.unstable_batchedUpdates=Xa,tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ri(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return li(e,t,n,!1,r)},tt.version="18.3.1-next-f1338f8080-20240426",tt}var zu;function Hu(){if(zu)return us.exports;zu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(u){console.error(u)}}return s(),us.exports=xp(),us.exports}var _u;function vp(){if(_u)return ai;_u=1;var s=Hu();return ai.createRoot=s.createRoot,ai.hydrateRoot=s.hydrateRoot,ai}var yp=vp();const jp=$u(yp);Hu();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var f in o)({}).hasOwnProperty.call(o,f)&&(s[f]=o[f])}return s},Wr.apply(null,arguments)}var an;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(an||(an={}));const Ru="popstate";function wp(s){s===void 0&&(s={});function u(f,p){let{pathname:g,search:v,hash:N}=f.location;return gs("",{pathname:g,search:v,hash:N},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function o(f,p){return typeof p=="string"?p:si(p)}return Np(u,o,null,s)}function ke(s,u){if(s===!1||s===null||typeof s>"u")throw new Error(u)}function Ku(s,u){if(!s){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Sp(){return Math.random().toString(36).substr(2,8)}function Mu(s,u){return{usr:s.state,key:s.key,idx:u}}function gs(s,u,o,f){return o===void 0&&(o=null),Wr({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof u=="string"?tr(u):u,{state:o,key:u&&u.key||f||Sp()})}function si(s){let{pathname:u="/",search:o="",hash:f=""}=s;return o&&o!=="?"&&(u+=o.charAt(0)==="?"?o:"?"+o),f&&f!=="#"&&(u+=f.charAt(0)==="#"?f:"#"+f),u}function tr(s){let u={};if(s){let o=s.indexOf("#");o>=0&&(u.hash=s.substr(o),s=s.substr(0,o));let f=s.indexOf("?");f>=0&&(u.search=s.substr(f),s=s.substr(0,f)),s&&(u.pathname=s)}return u}function Np(s,u,o,f){f===void 0&&(f={});let{window:p=document.defaultView,v5Compat:g=!1}=f,v=p.history,N=an.Pop,j=null,b=P();b==null&&(b=0,v.replaceState(Wr({},v.state,{idx:b}),""));function P(){return(v.state||{idx:null}).idx}function S(){N=an.Pop;let C=P(),K=C==null?null:C-b;b=C,j&&j({action:N,location:T.location,delta:K})}function O(C,K){N=an.Push;let Y=gs(T.location,C,K);b=P()+1;let A=Mu(Y,b),$=T.createHref(Y);try{v.pushState(A,"",$)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;p.location.assign($)}g&&j&&j({action:N,location:T.location,delta:1})}function z(C,K){N=an.Replace;let Y=gs(T.location,C,K);b=P();let A=Mu(Y,b),$=T.createHref(Y);v.replaceState(A,"",$),g&&j&&j({action:N,location:T.location,delta:0})}function I(C){let K=p.location.origin!=="null"?p.location.origin:p.location.href,Y=typeof C=="string"?C:si(C);return Y=Y.replace(/ $/,"%20"),ke(K,"No window.location.(origin|href) available to create URL for href: "+Y),new URL(Y,K)}let T={get action(){return N},get location(){return s(p,v)},listen(C){if(j)throw new Error("A history only accepts one active listener");return p.addEventListener(Ru,S),j=C,()=>{p.removeEventListener(Ru,S),j=null}},createHref(C){return u(p,C)},createURL:I,encodeLocation(C){let K=I(C);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:O,replace:z,go(C){return v.go(C)}};return T}var Du;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Du||(Du={}));function kp(s,u,o){return o===void 0&&(o="/"),bp(s,u,o)}function bp(s,u,o,f){let p=typeof u=="string"?tr(u):u,g=Zn(p.pathname||"/",o);if(g==null)return null;let v=Yu(s);Cp(v);let N=null,j=Ip(g);for(let b=0;N==null&&b<v.length;++b)N=Lp(v[b],j);return N}function Yu(s,u,o,f){u===void 0&&(u=[]),o===void 0&&(o=[]),f===void 0&&(f="");let p=(g,v,N)=>{let j={relativePath:N===void 0?g.path||"":N,caseSensitive:g.caseSensitive===!0,childrenIndex:v,route:g};j.relativePath.startsWith("/")&&(ke(j.relativePath.startsWith(f),'Absolute route path "'+j.relativePath+'" nested under path '+('"'+f+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),j.relativePath=j.relativePath.slice(f.length));let b=sn([f,j.relativePath]),P=o.concat(j);g.children&&g.children.length>0&&(ke(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),Yu(g.children,u,P,b)),!(g.path==null&&!g.index)&&u.push({path:b,score:Mp(b,g.index),routesMeta:P})};return s.forEach((g,v)=>{var N;if(g.path===""||!((N=g.path)!=null&&N.includes("?")))p(g,v);else for(let j of Gu(g.path))p(g,v,j)}),u}function Gu(s){let u=s.split("/");if(u.length===0)return[];let[o,...f]=u,p=o.endsWith("?"),g=o.replace(/\?$/,"");if(f.length===0)return p?[g,""]:[g];let v=Gu(f.join("/")),N=[];return N.push(...v.map(j=>j===""?g:[g,j].join("/"))),p&&N.push(...v),N.map(j=>s.startsWith("/")&&j===""?"/":j)}function Cp(s){s.sort((u,o)=>u.score!==o.score?o.score-u.score:Dp(u.routesMeta.map(f=>f.childrenIndex),o.routesMeta.map(f=>f.childrenIndex)))}const Ep=/^:[\w-]+$/,Tp=3,Pp=2,zp=1,_p=10,Rp=-2,Lu=s=>s==="*";function Mp(s,u){let o=s.split("/"),f=o.length;return o.some(Lu)&&(f+=Rp),u&&(f+=Pp),o.filter(p=>!Lu(p)).reduce((p,g)=>p+(Ep.test(g)?Tp:g===""?zp:_p),f)}function Dp(s,u){return s.length===u.length&&s.slice(0,-1).every((f,p)=>f===u[p])?s[s.length-1]-u[u.length-1]:0}function Lp(s,u,o){let{routesMeta:f}=s,p={},g="/",v=[];for(let N=0;N<f.length;++N){let j=f[N],b=N===f.length-1,P=g==="/"?u:u.slice(g.length)||"/",S=xs({path:j.relativePath,caseSensitive:j.caseSensitive,end:b},P),O=j.route;if(!S)return null;Object.assign(p,S.params),v.push({params:p,pathname:sn([g,S.pathname]),pathnameBase:Fp(sn([g,S.pathnameBase])),route:O}),S.pathnameBase!=="/"&&(g=sn([g,S.pathnameBase]))}return v}function xs(s,u){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,f]=Op(s.path,s.caseSensitive,s.end),p=u.match(o);if(!p)return null;let g=p[0],v=g.replace(/(.)\/+$/,"$1"),N=p.slice(1);return{params:f.reduce((b,P,S)=>{let{paramName:O,isOptional:z}=P;if(O==="*"){let T=N[S]||"";v=g.slice(0,g.length-T.length).replace(/(.)\/+$/,"$1")}const I=N[S];return z&&!I?b[O]=void 0:b[O]=(I||"").replace(/%2F/g,"/"),b},{}),pathname:g,pathnameBase:v,pattern:s}}function Op(s,u,o){u===void 0&&(u=!1),o===void 0&&(o=!0),Ku(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let f=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,N,j)=>(f.push({paramName:N,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(f.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),f]}function Ip(s){try{return s.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Ku(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+u+").")),s}}function Zn(s,u){if(u==="/")return s;if(!s.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,f=s.charAt(o);return f&&f!=="/"?null:s.slice(o)||"/"}function Up(s,u){u===void 0&&(u="/");let{pathname:o,search:f="",hash:p=""}=typeof s=="string"?tr(s):s,g;return o?(o=Ju(o),o.startsWith("/")?g=Ou(o.substring(1),"/"):g=Ou(o,u)):g=u,{pathname:g,search:Bp(f),hash:Vp(p)}}function Ou(s,u){let o=u.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?o.length>1&&o.pop():p!=="."&&o.push(p)}),o.length>1?o.join("/"):"/"}function ps(s,u,o,f){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+u+"` field ["+JSON.stringify(f)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ap(s){return s.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function Ss(s,u){let o=Ap(s);return u?o.map((f,p)=>p===o.length-1?f.pathname:f.pathnameBase):o.map(f=>f.pathnameBase)}function Ns(s,u,o,f){f===void 0&&(f=!1);let p;typeof s=="string"?p=tr(s):(p=Wr({},s),ke(!p.pathname||!p.pathname.includes("?"),ps("?","pathname","search",p)),ke(!p.pathname||!p.pathname.includes("#"),ps("#","pathname","hash",p)),ke(!p.search||!p.search.includes("#"),ps("#","search","hash",p)));let g=s===""||p.pathname==="",v=g?"/":p.pathname,N;if(v==null)N=o;else{let S=u.length-1;if(!f&&v.startsWith("..")){let O=v.split("/");for(;O[0]==="..";)O.shift(),S-=1;p.pathname=O.join("/")}N=S>=0?u[S]:"/"}let j=Up(p,N),b=v&&v!=="/"&&v.endsWith("/"),P=(g||v===".")&&o.endsWith("/");return!j.pathname.endsWith("/")&&(b||P)&&(j.pathname+="/"),j}const Ju=s=>s.replace(/\/\/+/g,"/"),sn=s=>Ju(s.join("/")),Fp=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Bp=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Vp=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Qp(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Xu=["post","put","patch","delete"];new Set(Xu);const qp=["get",...Xu];new Set(qp);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var f in o)({}).hasOwnProperty.call(o,f)&&(s[f]=o[f])}return s},Hr.apply(null,arguments)}const di=E.createContext(null),Zu=E.createContext(null),At=E.createContext(null),fi=E.createContext(null),on=E.createContext({outlet:null,matches:[],isDataRoute:!1}),ed=E.createContext(null);function $p(s,u){let{relative:o}=u===void 0?{}:u;nr()||ke(!1);let{basename:f,navigator:p}=E.useContext(At),{hash:g,pathname:v,search:N}=pi(s,{relative:o}),j=v;return f!=="/"&&(j=v==="/"?f:sn([f,v])),p.createHref({pathname:j,search:N,hash:g})}function nr(){return E.useContext(fi)!=null}function rr(){return nr()||ke(!1),E.useContext(fi).location}function td(s){E.useContext(At).static||E.useLayoutEffect(s)}function lr(){let{isDataRoute:s}=E.useContext(on);return s?lm():Wp()}function Wp(){nr()||ke(!1);let s=E.useContext(di),{basename:u,future:o,navigator:f}=E.useContext(At),{matches:p}=E.useContext(on),{pathname:g}=rr(),v=JSON.stringify(Ss(p,o.v7_relativeSplatPath)),N=E.useRef(!1);return td(()=>{N.current=!0}),E.useCallback(function(b,P){if(P===void 0&&(P={}),!N.current)return;if(typeof b=="number"){f.go(b);return}let S=Ns(b,JSON.parse(v),g,P.relative==="path");s==null&&u!=="/"&&(S.pathname=S.pathname==="/"?u:sn([u,S.pathname])),(P.replace?f.replace:f.push)(S,P.state,P)},[u,f,v,g,s])}function pi(s,u){let{relative:o}=u===void 0?{}:u,{future:f}=E.useContext(At),{matches:p}=E.useContext(on),{pathname:g}=rr(),v=JSON.stringify(Ss(p,f.v7_relativeSplatPath));return E.useMemo(()=>Ns(s,JSON.parse(v),g,o==="path"),[s,v,g,o])}function Hp(s,u){return Kp(s,u)}function Kp(s,u,o,f){nr()||ke(!1);let{navigator:p}=E.useContext(At),{matches:g}=E.useContext(on),v=g[g.length-1],N=v?v.params:{};v&&v.pathname;let j=v?v.pathnameBase:"/";v&&v.route;let b=rr(),P;if(u){var S;let C=typeof u=="string"?tr(u):u;j==="/"||(S=C.pathname)!=null&&S.startsWith(j)||ke(!1),P=C}else P=b;let O=P.pathname||"/",z=O;if(j!=="/"){let C=j.replace(/^\//,"").split("/");z="/"+O.replace(/^\//,"").split("/").slice(C.length).join("/")}let I=kp(s,{pathname:z}),T=Zp(I&&I.map(C=>Object.assign({},C,{params:Object.assign({},N,C.params),pathname:sn([j,p.encodeLocation?p.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?j:sn([j,p.encodeLocation?p.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),g,o,f);return u&&T?E.createElement(fi.Provider,{value:{location:Hr({pathname:"/",search:"",hash:"",state:null,key:"default"},P),navigationType:an.Pop}},T):T}function Yp(){let s=rm(),u=Qp(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},u),o?E.createElement("pre",{style:p},o):null,null)}const Gp=E.createElement(Yp,null);class Jp extends E.Component{constructor(u){super(u),this.state={location:u.location,revalidation:u.revalidation,error:u.error}}static getDerivedStateFromError(u){return{error:u}}static getDerivedStateFromProps(u,o){return o.location!==u.location||o.revalidation!=="idle"&&u.revalidation==="idle"?{error:u.error,location:u.location,revalidation:u.revalidation}:{error:u.error!==void 0?u.error:o.error,location:o.location,revalidation:u.revalidation||o.revalidation}}componentDidCatch(u,o){console.error("React Router caught the following error during render",u,o)}render(){return this.state.error!==void 0?E.createElement(on.Provider,{value:this.props.routeContext},E.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xp(s){let{routeContext:u,match:o,children:f}=s,p=E.useContext(di);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),E.createElement(on.Provider,{value:u},f)}function Zp(s,u,o,f){var p;if(u===void 0&&(u=[]),o===void 0&&(o=null),f===void 0&&(f=null),s==null){var g;if(!o)return null;if(o.errors)s=o.matches;else if((g=f)!=null&&g.v7_partialHydration&&u.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let v=s,N=(p=o)==null?void 0:p.errors;if(N!=null){let P=v.findIndex(S=>S.route.id&&(N==null?void 0:N[S.route.id])!==void 0);P>=0||ke(!1),v=v.slice(0,Math.min(v.length,P+1))}let j=!1,b=-1;if(o&&f&&f.v7_partialHydration)for(let P=0;P<v.length;P++){let S=v[P];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(b=P),S.route.id){let{loaderData:O,errors:z}=o,I=S.route.loader&&O[S.route.id]===void 0&&(!z||z[S.route.id]===void 0);if(S.route.lazy||I){j=!0,b>=0?v=v.slice(0,b+1):v=[v[0]];break}}}return v.reduceRight((P,S,O)=>{let z,I=!1,T=null,C=null;o&&(z=N&&S.route.id?N[S.route.id]:void 0,T=S.route.errorElement||Gp,j&&(b<0&&O===0?(im("route-fallback"),I=!0,C=null):b===O&&(I=!0,C=S.route.hydrateFallbackElement||null)));let K=u.concat(v.slice(0,O+1)),Y=()=>{let A;return z?A=T:I?A=C:S.route.Component?A=E.createElement(S.route.Component,null):S.route.element?A=S.route.element:A=P,E.createElement(Xp,{match:S,routeContext:{outlet:P,matches:K,isDataRoute:o!=null},children:A})};return o&&(S.route.ErrorBoundary||S.route.errorElement||O===0)?E.createElement(Jp,{location:o.location,revalidation:o.revalidation,component:T,error:z,children:Y(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):Y()},null)}var nd=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(nd||{}),rd=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(rd||{});function em(s){let u=E.useContext(di);return u||ke(!1),u}function tm(s){let u=E.useContext(Zu);return u||ke(!1),u}function nm(s){let u=E.useContext(on);return u||ke(!1),u}function ld(s){let u=nm(),o=u.matches[u.matches.length-1];return o.route.id||ke(!1),o.route.id}function rm(){var s;let u=E.useContext(ed),o=tm(),f=ld();return u!==void 0?u:(s=o.errors)==null?void 0:s[f]}function lm(){let{router:s}=em(nd.UseNavigateStable),u=ld(rd.UseNavigateStable),o=E.useRef(!1);return td(()=>{o.current=!0}),E.useCallback(function(p,g){g===void 0&&(g={}),o.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,Hr({fromRouteId:u},g)))},[s,u])}const Iu={};function im(s,u,o){Iu[s]||(Iu[s]=!0)}function am(s,u){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function vs(s){let{to:u,replace:o,state:f,relative:p}=s;nr()||ke(!1);let{future:g,static:v}=E.useContext(At),{matches:N}=E.useContext(on),{pathname:j}=rr(),b=lr(),P=Ns(u,Ss(N,g.v7_relativeSplatPath),j,p==="path"),S=JSON.stringify(P);return E.useEffect(()=>b(JSON.parse(S),{replace:o,state:f,relative:p}),[b,S,p,o,f]),null}function Be(s){ke(!1)}function sm(s){let{basename:u="/",children:o=null,location:f,navigationType:p=an.Pop,navigator:g,static:v=!1,future:N}=s;nr()&&ke(!1);let j=u.replace(/^\/*/,"/"),b=E.useMemo(()=>({basename:j,navigator:g,static:v,future:Hr({v7_relativeSplatPath:!1},N)}),[j,N,g,v]);typeof f=="string"&&(f=tr(f));let{pathname:P="/",search:S="",hash:O="",state:z=null,key:I="default"}=f,T=E.useMemo(()=>{let C=Zn(P,j);return C==null?null:{location:{pathname:C,search:S,hash:O,state:z,key:I},navigationType:p}},[j,P,S,O,z,I,p]);return T==null?null:E.createElement(At.Provider,{value:b},E.createElement(fi.Provider,{children:o,value:T}))}function om(s){let{children:u,location:o}=s;return Hp(ys(u),o)}new Promise(()=>{});function ys(s,u){u===void 0&&(u=[]);let o=[];return E.Children.forEach(s,(f,p)=>{if(!E.isValidElement(f))return;let g=[...u,p];if(f.type===E.Fragment){o.push.apply(o,ys(f.props.children,g));return}f.type!==Be&&ke(!1),!f.props.index||!f.props.children||ke(!1);let v={id:f.props.id||g.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,loader:f.props.loader,action:f.props.action,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(v.children=ys(f.props.children,g)),o.push(v)}),o}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(s){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var f in o)({}).hasOwnProperty.call(o,f)&&(s[f]=o[f])}return s},oi.apply(null,arguments)}function id(s,u){if(s==null)return{};var o={};for(var f in s)if({}.hasOwnProperty.call(s,f)){if(u.indexOf(f)!==-1)continue;o[f]=s[f]}return o}function cm(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function um(s,u){return s.button===0&&(!u||u==="_self")&&!cm(s)}const dm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],pm="6";try{window.__reactRouterVersion=pm}catch{}const mm=E.createContext({isTransitioning:!1}),hm="startTransition",Uu=mp[hm];function gm(s){let{basename:u,children:o,future:f,window:p}=s,g=E.useRef();g.current==null&&(g.current=wp({window:p,v5Compat:!0}));let v=g.current,[N,j]=E.useState({action:v.action,location:v.location}),{v7_startTransition:b}=f||{},P=E.useCallback(S=>{b&&Uu?Uu(()=>j(S)):j(S)},[j,b]);return E.useLayoutEffect(()=>v.listen(P),[v,P]),E.useEffect(()=>am(f),[f]),E.createElement(sm,{basename:u,children:o,location:N.location,navigationType:N.action,navigator:v,future:f})}const xm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ym=E.forwardRef(function(u,o){let{onClick:f,relative:p,reloadDocument:g,replace:v,state:N,target:j,to:b,preventScrollReset:P,viewTransition:S}=u,O=id(u,dm),{basename:z}=E.useContext(At),I,T=!1;if(typeof b=="string"&&vm.test(b)&&(I=b,xm))try{let A=new URL(window.location.href),$=b.startsWith("//")?new URL(A.protocol+b):new URL(b),de=Zn($.pathname,z);$.origin===A.origin&&de!=null?b=de+$.search+$.hash:T=!0}catch{}let C=$p(b,{relative:p}),K=wm(b,{replace:v,state:N,target:j,preventScrollReset:P,relative:p,viewTransition:S});function Y(A){f&&f(A),A.defaultPrevented||K(A)}return E.createElement("a",oi({},O,{href:I||C,onClick:T||g?f:Y,ref:o,target:j}))}),ms=E.forwardRef(function(u,o){let{"aria-current":f="page",caseSensitive:p=!1,className:g="",end:v=!1,style:N,to:j,viewTransition:b,children:P}=u,S=id(u,fm),O=pi(j,{relative:S.relative}),z=rr(),I=E.useContext(Zu),{navigator:T,basename:C}=E.useContext(At),K=I!=null&&Sm(O)&&b===!0,Y=T.encodeLocation?T.encodeLocation(O).pathname:O.pathname,A=z.pathname,$=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;p||(A=A.toLowerCase(),$=$?$.toLowerCase():null,Y=Y.toLowerCase()),$&&C&&($=Zn($,C)||$);const de=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let fe=A===Y||!v&&A.startsWith(Y)&&A.charAt(de)==="/",Re=$!=null&&($===Y||!v&&$.startsWith(Y)&&$.charAt(Y.length)==="/"),Ee={isActive:fe,isPending:Re,isTransitioning:K},U=fe?f:void 0,re;typeof g=="function"?re=g(Ee):re=[g,fe?"active":null,Re?"pending":null,K?"transitioning":null].filter(Boolean).join(" ");let pe=typeof N=="function"?N(Ee):N;return E.createElement(ym,oi({},S,{"aria-current":U,className:re,ref:o,style:pe,to:j,viewTransition:b}),typeof P=="function"?P(Ee):P)});var js;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(js||(js={}));var Au;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Au||(Au={}));function jm(s){let u=E.useContext(di);return u||ke(!1),u}function wm(s,u){let{target:o,replace:f,state:p,preventScrollReset:g,relative:v,viewTransition:N}=u===void 0?{}:u,j=lr(),b=rr(),P=pi(s,{relative:v});return E.useCallback(S=>{if(um(S,o)){S.preventDefault();let O=f!==void 0?f:si(b)===si(P);j(s,{replace:O,state:p,preventScrollReset:g,relative:v,viewTransition:N})}},[b,j,P,f,p,o,s,g,v,N])}function Sm(s,u){u===void 0&&(u={});let o=E.useContext(mm);o==null&&ke(!1);let{basename:f}=jm(js.useViewTransitionState),p=pi(s,{relative:u.relative});if(!o.isTransitioning)return!1;let g=Zn(o.currentLocation.pathname,f)||o.currentLocation.pathname,v=Zn(o.nextLocation.pathname,f)||o.nextLocation.pathname;return xs(p.pathname,v)!=null||xs(p.pathname,g)!=null}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ad=(...s)=>s.filter((u,o,f)=>!!u&&u.trim()!==""&&f.indexOf(u)===o).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var km={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=E.forwardRef(({color:s="currentColor",size:u=24,strokeWidth:o=2,absoluteStrokeWidth:f,className:p="",children:g,iconNode:v,...N},j)=>E.createElement("svg",{ref:j,...km,width:u,height:u,stroke:s,strokeWidth:f?Number(o)*24/Number(u):o,className:ad("lucide",p),...N},[...v.map(([b,P])=>E.createElement(b,P)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(s,u)=>{const o=E.forwardRef(({className:f,...p},g)=>E.createElement(bm,{ref:g,iconNode:u,className:ad(`lucide-${Nm(s)}`,f),...p}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=ee("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ee("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=ee("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=ee("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=ee("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=ee("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=ee("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ee("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ee("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=ee("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=ee("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=ee("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=ee("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=ee("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=ee("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=ee("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=ee("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=ee("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ee("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ee("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=ee("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=ee("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=ee("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=ee("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=ee("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ee("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=ee("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=ee("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=ee("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=ee("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=ee("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=ee("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=ee("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=ee("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=ee("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=ee("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=ee("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ym({user:s,onLogout:u}){const[o,f]=E.useState(!1),p=lr(),g=()=>{u(),p("/login")},v=[{label:"HOME",path:"/",icon:Mm},{label:"STUDENT",path:"/student",icon:zm},{label:"EXAM",path:"/exam",icon:Nt},{label:"RESULT",path:"/result",icon:Kr},{label:"FORMS",path:"/forms",icon:kn},{label:"NOTIFICATIONS",path:"/notifications",icon:ci}];return l.jsxs("header",{className:"navbar-wrapper",children:[l.jsx("div",{className:"demo-notice-bar",children:l.jsxs("span",{children:["🎓 ",l.jsx("strong",{children:"KTU SmartHub Demo Portal"})," — APJ Abdul Kalam Technological University Student Resource Center"]})}),l.jsxs("div",{className:"navbar-container",children:[l.jsx("div",{className:"navbar-brand",children:l.jsxs(ms,{to:"/",className:"brand-link",children:[l.jsx("div",{className:"logo-icon-box",children:l.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 100 100",fill:"none",children:[l.jsx("rect",{width:"100",height:"100",rx:"20",fill:"#0d3b66"}),l.jsx("path",{d:"M25 30 L50 18 L75 30 L50 42 Z",fill:"#60a5fa",stroke:"#ffffff",strokeWidth:"3"}),l.jsx("path",{d:"M32 40 L32 58 C32 68 68 68 68 58 L68 40",stroke:"#ffffff",strokeWidth:"5",strokeLinecap:"round"}),l.jsx("circle",{cx:"75",cy:"55",r:"4",fill:"#60a5fa"})]})}),l.jsxs("div",{className:"brand-text",children:[l.jsx("span",{className:"brand-title",children:"KTU SmartHub"}),l.jsx("span",{className:"brand-subtitle",children:"Student Portal"})]})]})}),l.jsx("nav",{className:"desktop-nav",children:v.map(N=>{const j=N.icon;return l.jsxs(ms,{to:N.path,className:({isActive:b})=>`nav-tab ${b?"nav-tab-active":""}`,end:N.path==="/",children:[l.jsx(j,{size:17,className:"nav-icon"}),l.jsx("span",{children:N.label})]},N.label)})}),l.jsxs("div",{className:"nav-actions",children:[s&&l.jsxs("div",{className:"user-badge",title:`${s.name} (${s.registerNo})`,children:[l.jsx("div",{className:"avatar-circle",children:l.jsx(ui,{size:15})}),l.jsxs("div",{className:"user-details",children:[l.jsx("span",{className:"user-name",children:s.name}),l.jsxs("span",{className:"user-sem",children:[s.semester," ",s.branchCode]})]})]}),l.jsxs("button",{onClick:g,className:"logout-btn",title:"Logout of demo portal",children:[l.jsx(Om,{size:16}),l.jsx("span",{className:"logout-text",children:"Logout"})]}),l.jsx("button",{className:"mobile-toggle-btn",onClick:()=>f(!o),"aria-label":"Toggle Navigation Menu",children:o?l.jsx(Cs,{size:24}):l.jsx(Um,{size:24})})]})]}),o&&l.jsx("div",{className:"mobile-nav-drawer",children:v.map(N=>{const j=N.icon;return l.jsxs(ms,{to:N.path,className:({isActive:b})=>`mobile-nav-item ${b?"mobile-nav-active":""}`,end:N.path==="/",onClick:()=>f(!1),children:[l.jsx(j,{size:18}),l.jsx("span",{children:N.label})]},N.label)})}),l.jsx("style",{children:`
        .navbar-wrapper {
          background-color: #ffffff;
          border-bottom: 2px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 900;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--primary-navy);
          line-height: 1.1;
          letter-spacing: -0.3px;
        }

        .brand-subtitle {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: var(--bg-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .nav-tab {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.86rem;
          color: var(--text-muted);
          transition: var(--transition-fast);
          text-decoration: none;
          letter-spacing: 0.5px;
        }

        .nav-tab:hover {
          color: var(--primary-navy);
          background-color: #ffffff;
        }

        .nav-tab-active {
          color: #ffffff !important;
          background-color: var(--primary-navy) !important;
          box-shadow: 0 2px 6px rgba(13, 59, 102, 0.25);
        }

        .nav-icon {
          opacity: 0.9;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--light-blue-bg);
          padding: 5px 12px 5px 6px;
          border-radius: 9999px;
          border: 1px solid var(--light-blue-border);
        }

        .avatar-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--primary-navy);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .user-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .user-sem {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--urgent-red);
          background-color: #fef2f2;
          border: 1px solid #fca5a5;
        }

        .logout-btn:hover {
          background-color: var(--urgent-red);
          color: #ffffff;
        }

        .mobile-toggle-btn {
          display: none;
          color: var(--primary-navy);
          padding: 6px;
        }

        .mobile-nav-drawer {
          display: none;
          flex-direction: column;
          background-color: #ffffff;
          border-top: 1px solid var(--border-color);
          padding: 12px 20px;
          gap: 8px;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
        }

        .mobile-nav-active {
          background-color: var(--light-blue-bg);
          color: var(--primary-blue);
          border-left: 4px solid var(--primary-blue);
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .mobile-nav-drawer {
            display: flex;
          }
          .user-details {
            display: none;
          }
        }
      `})]})}function Gm(){return l.jsxs("footer",{className:"footer-wrapper",children:[l.jsxs("div",{className:"footer-container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-col brand-col",children:[l.jsxs("div",{className:"footer-logo",children:[l.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 100 100",fill:"none",children:[l.jsx("rect",{width:"100",height:"100",rx:"20",fill:"#60a5fa"}),l.jsx("path",{d:"M25 30 L50 18 L75 30 L50 42 Z",fill:"#0d3b66",stroke:"#ffffff",strokeWidth:"3"}),l.jsx("path",{d:"M32 40 L32 58 C32 68 68 68 68 58 L68 40",stroke:"#ffffff",strokeWidth:"5",strokeLinecap:"round"})]}),l.jsx("span",{children:"KTU SmartHub"})]}),l.jsx("p",{className:"footer-desc",children:"Centralized student portal for APJ Abdul Kalam Technological University. Streamlining academic timetables, examination results, question papers, and university notifications."}),l.jsxs("div",{className:"disclaimer-chip",children:[l.jsx(bn,{size:14})," Prototype demonstration only. Not officially affiliated with KTU."]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-title",children:"Quick Portals"}),l.jsxs("ul",{className:"footer-links",children:[l.jsx("li",{children:l.jsxs("a",{href:"https://ktu.edu.in",target:"_blank",rel:"noreferrer",children:["KTU Official Website ",l.jsx(Xn,{size:12})]})}),l.jsx("li",{children:l.jsxs("a",{href:"https://app.ktu.edu.in",target:"_blank",rel:"noreferrer",children:["KTU e-Gov Student Portal ",l.jsx(Xn,{size:12})]})}),l.jsx("li",{children:l.jsxs("a",{href:"https://ktu.edu.in/eu/core/announcements.htm",target:"_blank",rel:"noreferrer",children:["Official Announcements ",l.jsx(Xn,{size:12})]})})]})]}),l.jsxs("div",{className:"footer-col",children:[l.jsx("h4",{className:"footer-title",children:"Student Support"}),l.jsxs("ul",{className:"footer-contact",children:[l.jsxs("li",{children:[l.jsx(Im,{size:15})," CET Campus, Thiruvananthapuram, Kerala"]}),l.jsxs("li",{children:[l.jsx(cd,{size:15})," support@ktu.edu.in"]}),l.jsxs("li",{children:[l.jsx(Bm,{size:15})," +91 471 2598522 (Helpdesk)"]})]})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsxs("span",{children:["© ",new Date().getFullYear()," KTU SmartHub. Designed for KTU Engineering Students."]}),l.jsxs("span",{className:"security-note",children:[l.jsx(ud,{size:13})," Frontend Demo Environment"]})]})]}),l.jsx("style",{children:`
        .footer-wrapper {
          background-color: var(--primary-navy);
          color: #e2e8f0;
          padding: 48px 20px 24px 20px;
          margin-top: auto;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 36px;
          margin-bottom: 36px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .footer-desc {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .disclaimer-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          background-color: rgba(255,255,255,0.1);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          color: #cbd5e1;
        }

        .footer-title {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 16px;
          border-bottom: 2px solid var(--accent-blue);
          padding-bottom: 6px;
          display: inline-block;
        }

        .footer-links, .footer-contact {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.88rem;
        }

        .footer-links a {
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #cbd5e1;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: #94a3b8;
          flex-wrap: wrap;
          gap: 12px;
        }

        .security-note {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-blue);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `})]})}function nt({user:s,children:u}){return s?u:l.jsx(vs,{to:"/login",replace:!0})}const Jm=new Date,mt=(s,u=23,o=59)=>{const f=new Date(Jm);return f.setDate(f.getDate()+s),f.setHours(u,o,59,0),f.toISOString()},Ne={id:"TVE22CS045",name:"Abinash S",email:"student@ktu.edu.in",course:"B.Tech",branch:"Computer Science & Engineering",branchCode:"CSE",semester:"S5",academicYear:"2026-2027",college:"College of Engineering Trivandrum (CET)",registerNo:"TVE22CS045",phone:"+91 98765 43210",cgpa:"8.64",batch:"2022 - 2026",status:"Active Student"},Fu=[{id:"DL-101",title:"S5 B.Tech Regular Exam Registration Deadline",dueDate:mt(0),category:"Registration",formId:"FORM-201",shortDescription:"Final date for submitting examination fee and course registration on KTU e-Gov portal for S5 B.Tech Regular (2026).",details:"All S5 B.Tech students must verify their registered courses, pay the prescribed examination fee via student portal, and submit the online application before 11:59 PM today. Late submission will not be entertained.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"},{id:"DL-102",title:"S3 B.Tech Supplementary Exam Registration Closing",dueDate:mt(1),category:"Supplementary",formId:"FORM-202",shortDescription:"Last date to apply for S3 B.Tech Supplementary Examinations with standard fee payment.",details:"Registration for S3 B.Tech Supplementary examinations ends tomorrow. Ensure hall ticket eligibility and clear pending attendance requirements prior to submission.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"},{id:"DL-103",title:"S7 B.Tech Revaluation Application Deadline",dueDate:mt(2),category:"Revaluation",formId:"FORM-203",shortDescription:"Online application deadline for answer script copy and revaluation for S7 B.Tech results.",details:"Students seeking revaluation or copy of answer scripts for S7 B.Tech examinations (2026) must apply through their student login portal before the due date.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"},{id:"DL-104",title:"M.Tech S3 Thesis Intermediate Evaluation Upload",dueDate:mt(5),category:"Academic Applications",formId:"FORM-204",shortDescription:"Submission of progress report and internal thesis draft for M.Tech S3 research evaluation.",details:"Postgraduate candidates are instructed to upload their intermediate thesis report signed by the internal guide on the portal.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"},{id:"DL-105",title:"Condonation Application for Shortage of Attendance (Odd Sem)",dueDate:mt(8),category:"Academic Applications",formId:"FORM-205",shortDescription:"Submission of medical condonation certificates for students with 65%-74% attendance.",details:"Applications for attendance condonation along with authenticated medical certificates must be recommended by the Principal and submitted online.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"}],dd=[{id:"NOTIF-301",title:"Schedule of S5 & S3 B.Tech Regular & Supplementary Examinations Oct 2026",publishDate:"2026-10-08",category:"Examination",isNew:!0,shortDescription:"Detailed timetable published for S5 and S3 B.Tech regular/supplementary university theory exams starting Nov 2026.",content:"The Controller of Examinations, APJ Abdul Kalam Technological University, has published the provisional timetable for S5 and S3 B.Tech examinations scheduled for November 2026. Detailed subject-wise dates are accessible in the Examination section. Grievances regarding overlaps should be emailed through college principals by Oct 15, 2026.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm",refNo:"KTU/EX-II/3401/2026"},{id:"NOTIF-302",title:"Publication of S4 B.Tech Regular Examination Results (2022 Scheme)",publishDate:"2026-10-06",category:"Results",isNew:!0,shortDescription:"S4 B.Tech (2022 Scheme) regular examination results are announced and available on student login.",content:"It is hereby notified that the results of S4 B.Tech Regular Examinations held in June/July 2026 have been published. Students can view their grade cards on the KTU portal. Registration for revaluation and answer script copy opens on Oct 10, 2026.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm",refNo:"KTU/EX-I/1892/2026"},{id:"NOTIF-303",title:"Revised Academic Calendar for B.Tech & M.Tech S3/S5/S7 (Odd Semesters 2026-27)",publishDate:"2026-10-02",category:"Academic",isNew:!1,shortDescription:"Updated academic schedule including internal assessment dates, lab exams, and semester break.",content:"The Academic Committee has released the revised academic calendar for Odd Semesters (S3, S5, S7) of B.Tech, M.Tech, and MCA programs for 2026-2027. First internal examination completion deadline is set for Oct 25, 2026.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm",refNo:"KTU/ACAD/882/2026"},{id:"NOTIF-304",title:"Registration Extension for Ph.D. Entrance Examination 2026 Phase II",publishDate:"2026-09-28",category:"Registration",isNew:!1,shortDescription:"The last date for Phase II Ph.D. online application has been extended up to October 15, 2026.",content:"In response to requests from applicants, the University has extended the online portal registration window for Ph.D. Phase II admission until October 15, 2026.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm",refNo:"KTU/RESEARCH/402/2026"},{id:"NOTIF-305",title:"Guidelines for Mandatory Activity Points Verification for S8 Graduating Batch",publishDate:"2026-09-20",category:"General",isNew:!1,shortDescription:"Verification portal open for uploading certificates of 100 KTU activity points for final year students.",content:"Colleges are directed to complete the online upload and verification of Student Activity Points (100 points requirement) for the 2022-2026 batch. Student portal document verification tab is active.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm",refNo:"KTU/STUDENTAFFAIRS/112/2026"}],hs=[{id:"TT-2026-S5-REG-CSE",year:"2026",examType:"Regular Examination",semester:"S5",branch:"CSE",title:"S5 B.Tech (CSE) Regular Examination Timetable - Nov 2026",publishDate:"2026-10-08",pdfUrl:"/documents/sample_timetable_s5_regular.pdf",fileName:"KTU_S5_CSE_Regular_Timetable_2026.pdf",schedule:[{code:"CST301",name:"Formal Languages & Automata Theory",date:"2026-11-10",time:"09:30 AM - 12:30 PM"},{code:"CST303",name:"Computer Networks",date:"2026-11-13",time:"09:30 AM - 12:30 PM"},{code:"CST305",name:"System Software",date:"2026-11-16",time:"09:30 AM - 12:30 PM"},{code:"CST307",name:"Microprocessors & Microcontrollers",date:"2026-11-19",time:"09:30 AM - 12:30 PM"},{code:"MCN301",name:"Disaster Management",date:"2026-11-23",time:"09:30 AM - 12:30 PM"}]},{id:"TT-2026-S3-SUP-CSE",year:"2026",examType:"Supplementary Examination",semester:"S3",branch:"CSE",title:"S3 B.Tech (CSE) Supplementary Examination Timetable - Nov 2026",publishDate:"2026-10-07",pdfUrl:"/documents/sample_timetable_s3_supple.pdf",fileName:"KTU_S3_CSE_Supple_Timetable_2026.pdf",schedule:[{code:"MAT203",name:"Discrete Mathematical Structures",date:"2026-11-11",time:"01:30 PM - 04:30 PM"},{code:"CST201",name:"Data Structures",date:"2026-11-14",time:"01:30 PM - 04:30 PM"},{code:"CST203",name:"Logic System Design",date:"2026-11-17",time:"01:30 PM - 04:30 PM"},{code:"CST205",name:"Object Oriented Programming using Java",date:"2026-11-20",time:"01:30 PM - 04:30 PM"}]},{id:"TT-2025-S4-REG-ECE",year:"2025",examType:"Regular Examination",semester:"S4",branch:"ECE",title:"S4 B.Tech (ECE) Regular Examination Timetable - May 2025",publishDate:"2025-04-20",pdfUrl:"/documents/sample_timetable_s5_regular.pdf",fileName:"KTU_S4_ECE_Regular_Timetable_2025.pdf",schedule:[{code:"ECT202",name:"Analog Circuits",date:"2025-05-15",time:"09:30 AM - 12:30 PM"},{code:"ECT204",name:"Signals & Systems",date:"2025-05-18",time:"09:30 AM - 12:30 PM"},{code:"ECT206",name:"Computer Organization & Architecture",date:"2025-05-21",time:"09:30 AM - 12:30 PM"}]},{id:"TT-2025-S7-IMP-ME",year:"2025",examType:"Improvement Examination",semester:"S7",branch:"Mechanical Engineering",title:"S7 B.Tech (Mechanical) Improvement Examination Timetable - Dec 2025",publishDate:"2025-11-15",pdfUrl:"/documents/sample_timetable_s3_supple.pdf",fileName:"KTU_S7_ME_Improvement_2025.pdf",schedule:[{code:"MET401",name:"Design of Machine Elements",date:"2025-12-05",time:"09:30 AM - 12:30 PM"},{code:"MET403",name:"Mechatronics",date:"2025-12-08",time:"09:30 AM - 12:30 PM"}]},{id:"TT-2024-S1-REG-CE",year:"2024",examType:"Regular Examination",semester:"S1",branch:"Civil Engineering",title:"S1 B.Tech (Civil Engineering) Regular Examination Timetable - Jan 2024",publishDate:"2023-12-28",pdfUrl:"/documents/sample_timetable_s5_regular.pdf",fileName:"KTU_S1_Civil_Regular_2024.pdf",schedule:[{code:"MAT101",name:"Linear Algebra & Calculus",date:"2024-01-15",time:"09:30 AM - 12:30 PM"},{code:"CYT100",name:"Engineering Chemistry",date:"2024-01-18",time:"09:30 AM - 12:30 PM"},{code:"EST100",name:"Engineering Mechanics",date:"2024-01-22",time:"09:30 AM - 12:30 PM"}]}],Xm=[{id:"PYQ-501",title:"Data Structures (CST201) - May 2025 Question Paper",course:"B.Tech",branch:"CSE",semester:"S3",subject:"Data Structures",subjectCode:"CST201",year:"2025",pdfUrl:"/documents/sample_pyq_ds_2025.pdf",fileName:"KTU_CST201_Data_Structures_2025.pdf",downloads:1420},{id:"PYQ-502",title:"Database Management Systems (CST304) - Dec 2024 Question Paper",course:"B.Tech",branch:"CSE",semester:"S5",subject:"Database Management Systems",subjectCode:"CST304",year:"2024",pdfUrl:"/documents/sample_pyq_dbms_2024.pdf",fileName:"KTU_CST304_DBMS_2024.pdf",downloads:980},{id:"PYQ-503",title:"Operating Systems (CST206) - May 2024 Question Paper",course:"B.Tech",branch:"CSE",semester:"S4",subject:"Operating Systems",subjectCode:"CST206",year:"2024",pdfUrl:"/documents/sample_pyq_os_2024.pdf",fileName:"KTU_CST206_Operating_Systems_2024.pdf",downloads:1150},{id:"PYQ-504",title:"Discrete Mathematical Structures (MAT203) - Dec 2025 Question Paper",course:"B.Tech",branch:"CSE",semester:"S3",subject:"Discrete Mathematics",subjectCode:"MAT203",year:"2025",pdfUrl:"/documents/sample_pyq_ds_2025.pdf",fileName:"KTU_MAT203_Discrete_Math_2025.pdf",downloads:870},{id:"PYQ-505",title:"Analog Circuits (ECT202) - May 2025 Question Paper",course:"B.Tech",branch:"ECE",semester:"S4",subject:"Analog Circuits",subjectCode:"ECT202",year:"2025",pdfUrl:"/documents/sample_pyq_dbms_2024.pdf",fileName:"KTU_ECT202_Analog_Circuits_2025.pdf",downloads:640},{id:"PYQ-506",title:"Advanced Data Structures (RLCA201) - Jan 2025 Question Paper",course:"MCA",branch:"Computer Applications",semester:"S2",subject:"Advanced Data Structures",subjectCode:"RLCA201",year:"2025",pdfUrl:"/documents/sample_pyq_ds_2025.pdf",fileName:"KTU_MCA_RLCA201_2025.pdf",downloads:410}],Jn=[{id:"MOCK-DS-01",subject:"Data Structures",subjectCode:"CST201",topic:"Arrays, Stacks & Queues",timeLimitMinutes:10,questions:[{id:"Q1",question:"Which data structure operates on a Last-In, First-Out (LIFO) order?",options:["Queue","Stack","Array","Linked List"],correctIndex:1,explanation:"A Stack adds and removes elements from the top, following the Last-In First-Out (LIFO) protocol."},{id:"Q2",question:"What is the worst-case time complexity of accessing an element in an array by index?",options:["O(1)","O(n)","O(log n)","O(n^2)"],correctIndex:0,explanation:"Array elements are stored in contiguous memory locations, allowing direct O(1) random access via index calculation."},{id:"Q3",question:"Which of the following queue variants allows insertion and deletion from both ends?",options:["Circular Queue","Priority Queue","Deque (Double-Ended Queue)","Simple Queue"],correctIndex:2,explanation:"A Deque (Double-Ended Queue) allows elements to be added or removed from either the front or the rear."},{id:"Q4",question:"In a circular queue implemented using array of size N, what is the condition for Queue Full?",options:["(rear + 1) % N == front","rear == N - 1","front == rear + 1","front == -1"],correctIndex:0,explanation:"The modulo arithmetic `(rear + 1) % N == front` checks if the next index wraps around to meet the front pointer."},{id:"Q5",question:"Which data structure is typically used for expression evaluation and syntax parsing?",options:["Tree","Stack","Queue","Heap"],correctIndex:1,explanation:"Stacks are heavily used for converting and evaluating infix, prefix, and postfix expressions."}]},{id:"MOCK-OS-01",subject:"Operating Systems",subjectCode:"CST206",topic:"Process Management & CPU Scheduling",timeLimitMinutes:10,questions:[{id:"Q101",question:"Which CPU scheduling algorithm gives the minimum average waiting time for a given set of processes?",options:["Round Robin","First-Come First-Served (FCFS)","Shortest Job First (SJF)","Priority Scheduling"],correctIndex:2,explanation:"Shortest Job First (SJF) is provably optimal for minimizing average waiting time."},{id:"Q102",question:"What is a 'deadlock' condition in an Operating System?",options:["When a process consumes 100% CPU","When two or more processes are waiting indefinitely for resources held by each other","When main memory runs out of space","When a process crashes due to segmentation fault"],correctIndex:1,explanation:"A deadlock occurs when a set of processes are blocked because each process holds a resource and waits for another resource held by another process."},{id:"Q103",question:"Which system call creates a new child process in Unix/Linux operating systems?",options:["exec()","fork()","create()","spawn()"],correctIndex:1,explanation:"The `fork()` system call duplicates the calling process to create an exact child process."},{id:"Q104",question:"What is the phenomenon called when memory space is fragmented into small unusable chunks?",options:["Paging","Fragmentation","Thrashing","Segmentation"],correctIndex:1,explanation:"Fragmentation occurs when free memory is split into non-contiguous small blocks that cannot fit new allocations."},{id:"Q105",question:"Round Robin CPU scheduling relies heavily on which concept?",options:["Static Priority","Time Quantum / Time Slice","Burst Ratio","Job Size"],correctIndex:1,explanation:"Round Robin assigns a small fixed unit of CPU time (time quantum) to each process in a circular queue."}]},{id:"MOCK-DBMS-01",subject:"Database Management Systems",subjectCode:"CST304",topic:"SQL & Relational Algebra",timeLimitMinutes:10,questions:[{id:"Q201",question:"What does ACID stand for in DBMS transactions?",options:["Atomicity, Consistency, Isolation, Durability","Accuracy, Control, Integrity, Data","Aggregation, Concurrency, Indexing, Disk","Access, Continuity, Isolation, Dependency"],correctIndex:0,explanation:"ACID properties ensure reliable processing of database transactions."},{id:"Q202",question:"Which SQL clause is used to filter records AFTER an aggregate function (GROUP BY) has been applied?",options:["WHERE","HAVING","ORDER BY","FILTER"],correctIndex:1,explanation:"The HAVING clause applies condition filters to grouped records produced by GROUP BY."},{id:"Q203",question:"In relational algebra, which operator is represented by the Greek symbol Sigma (σ)?",options:["Projection","Selection","Join","Cartesian Product"],correctIndex:1,explanation:"Sigma (σ) represents the Selection operator, which filters rows that satisfy a predicate condition."},{id:"Q204",question:"Which normal form eliminates partial dependencies (where non-prime attribute depends on part of candidate key)?",options:["1NF","2NF","3NF","BCNF"],correctIndex:1,explanation:"Second Normal Form (2NF) requires 1NF and that no non-prime attribute is dependent on a proper subset of any candidate key."},{id:"Q205",question:"Which type of JOIN returns all rows from the left table, even if there are no matches in the right table?",options:["INNER JOIN","LEFT OUTER JOIN","RIGHT OUTER JOIN","FULL OUTER JOIN"],correctIndex:1,explanation:"LEFT OUTER JOIN returns all tuples from the left table and matched tuples from the right table (with NULLs for unmatched right rows)."}]}],Zm=[{id:"CAL-01",title:"Commencement of S3/S5/S7 B.Tech Classes (Odd Sem 2026-27)",date:"2026-08-01",endDate:"2026-08-01",academicYear:"2026-2027",semester:"S5",category:"Semester Commencement",description:"Official reopening of engineering colleges in Kerala for Odd semester academic sessions."},{id:"CAL-02",title:"First Series Internal Examination (S3, S5, S7)",date:"2026-09-22",endDate:"2026-09-26",academicYear:"2026-2027",semester:"S5",category:"Internal Examinations",description:"Conduct of 1st internal assessment exams by respective affiliated institutions."},{id:"CAL-03",title:"S5 B.Tech Regular Exam Registration Closes",date:mt(0).split("T")[0],endDate:mt(0).split("T")[0],academicYear:"2026-2027",semester:"S5",category:"Registration Deadlines",description:"Deadline for exam portal course mapping and fee submission."},{id:"CAL-04",title:"Second Series Internal Examination & Attendance Publishing",date:"2026-10-20",endDate:"2026-10-24",academicYear:"2026-2027",semester:"S5",category:"Internal Examinations",description:"Completion of 2nd internal series test and final internal mark submission on KTU portal."},{id:"CAL-05",title:"Odd Semester Course Commencement End & Study Leave",date:"2026-11-02",endDate:"2026-11-08",academicYear:"2026-2027",semester:"S5",category:"Semester-end Dates",description:"Classes end for Odd semester; study leave and practical exams period."},{id:"CAL-06",title:"KTU End-Semester University Examinations Begin",date:"2026-11-10",endDate:"2026-12-04",academicYear:"2026-2027",semester:"S5",category:"University Examinations",description:"Commencement of regular and supplementary theory examinations across state examination centers."},{id:"CAL-07",title:"Deepavali Institutional Holiday",date:"2026-11-01",endDate:"2026-11-01",academicYear:"2026-2027",semester:"All",category:"Holidays",description:"University declared holiday."}],eh=[{id:"RES-701",title:"S4 B.Tech Regular Examination Results (June/July 2026)",publishDate:"2026-10-06",year:"2026",semester:"S4",examType:"Regular Examination",description:"Results of B.Tech S4 Regular Exams held in June 2026 have been published. Check SGPA and grade sheets.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"},{id:"RES-702",title:"S2 M.Tech Regular & Supplementary Results (May 2026)",publishDate:"2026-09-29",year:"2026",semester:"S2",examType:"Regular Examination",description:"Postgraduate M.Tech Semester 2 regular and supplementary exam results released on portal.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"},{id:"RES-703",title:"S6 B.Tech Supplementary Examination Results (Jan 2026)",publishDate:"2026-08-15",year:"2026",semester:"S6",examType:"Supplementary Examination",description:"Re-evaluation results and supplementary marklists updated for S6 B.Tech.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"},{id:"RES-704",title:"S3 B.Tech Improvement & Supplementary Results (Dec 2025)",publishDate:"2025-03-12",year:"2025",semester:"S3",examType:"Improvement Examination",description:"S3 B.Tech improvement exam results published for 2021 & 2022 schemes.",officialUrl:"https://ktu.edu.in/eu/core/announcements.htm"}],th=[{id:"FORM-201",title:"S5 B.Tech Regular Exam Registration Form",category:"Examination Registration",deadlineId:"DL-101",dueDate:mt(0),description:"Official form for enrolling in S5 regular theory and practical university examinations.",formFields:[{name:"studentName",label:"Student Name",type:"text",defaultValue:"Abinash S"},{name:"registerNo",label:"Register Number",type:"text",defaultValue:"TVE22CS045"},{name:"college",label:"College Name",type:"text",defaultValue:"College of Engineering Trivandrum"},{name:"branch",label:"Branch",type:"text",defaultValue:"Computer Science & Engineering"},{name:"sem",label:"Semester",type:"text",defaultValue:"S5 B.Tech"},{name:"examFee",label:"Fee Amount",type:"text",defaultValue:"₹ 1,500"}],pdfUrl:"/documents/sample_form_exam_reg.pdf"},{id:"FORM-202",title:"Supplementary Exam Application Form",category:"Supplementary Examination",deadlineId:"DL-102",dueDate:mt(1),description:"Application for registering backlog subjects in upcoming supplementary examinations.",formFields:[{name:"studentName",label:"Student Name",type:"text",defaultValue:"Abinash S"},{name:"registerNo",label:"Register Number",type:"text",defaultValue:"TVE22CS045"},{name:"backlogCourses",label:"Select Backlog Subjects",type:"select",options:["MAT203 - Discrete Math","CST201 - Data Structures"]},{name:"feePerCourse",label:"Fee per Subject",type:"text",defaultValue:"₹ 500"}],pdfUrl:"/documents/sample_form_exam_reg.pdf"},{id:"FORM-203",title:"Answer Script Revaluation & Copy Request Form",category:"Revaluation",deadlineId:"DL-103",dueDate:mt(2),description:"Request form for re-checking evaluation or receiving digital copy of valuation script.",formFields:[{name:"studentName",label:"Student Name",type:"text",defaultValue:"Abinash S"},{name:"subjectCode",label:"Subject Code & Name",type:"text",defaultValue:"CST206 - Operating Systems"},{name:"requestType",label:"Request Type",type:"select",options:["Revaluation Only (₹600)","Copy of Answer Script Only (₹500)","Both Revaluation & Copy (₹1100)"]}],pdfUrl:"/documents/sample_form_exam_reg.pdf"},{id:"FORM-204",title:"Certificate Request & Migration Application",category:"Academic Applications",dueDate:mt(14),description:"Application for issuing Conduct Certificate, Provisional Degree, Transcripts, or Migration Certificate.",formFields:[{name:"studentName",label:"Student Name",type:"text",defaultValue:"Abinash S"},{name:"certType",label:"Certificate Requested",type:"select",options:["Official Transcript","Provisional Certificate","Migration Certificate","Grade Card Correction"]},{name:"purpose",label:"Purpose of Application",type:"text",defaultValue:"Higher Education / Employment"}],pdfUrl:"/documents/sample_form_exam_reg.pdf"},{id:"FORM-205",title:"Medical Condonation of Attendance Form",category:"Academic Applications",deadlineId:"DL-105",dueDate:mt(8),description:"Official form for condoning shortage of attendance (65%-74%) on valid medical grounds.",formFields:[{name:"studentName",label:"Student Name",type:"text",defaultValue:"Abinash S"},{name:"attendancePercentage",label:"Current Attendance %",type:"text",defaultValue:"68%"},{name:"doctorName",label:"Attending Doctor Name & Reg No",type:"text",defaultValue:"Dr. K. Nair (Reg #48291)"}],pdfUrl:"/documents/sample_form_exam_reg.pdf"}];function nh({onLogin:s}){const[u,o]=E.useState("student@ktu.edu.in"),[f,p]=E.useState("ktu12345"),[g,v]=E.useState(!1),[N,j]=E.useState(""),[b,P]=E.useState(!1),S=lr(),O=I=>{if(I.preventDefault(),!u.trim()||!f.trim()){j("Please enter both User ID/Email and Password.");return}s(Ne),S("/")},z=()=>{o(Ne.email),p("ktu12345"),j("")};return l.jsxs("div",{className:"login-page-container",children:[l.jsxs("div",{className:"login-card-wrapper",children:[l.jsxs("div",{className:"login-brand-panel",children:[l.jsx("div",{className:"brand-logo-large",children:l.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 100 100",fill:"none",children:[l.jsx("rect",{width:"100",height:"100",rx:"22",fill:"#ffffff"}),l.jsx("path",{d:"M25 30 L50 18 L75 30 L50 42 Z",fill:"#0d3b66",stroke:"#1d4ed8",strokeWidth:"3"}),l.jsx("path",{d:"M32 40 L32 58 C32 68 68 68 68 58 L68 40",stroke:"#0d3b66",strokeWidth:"5",strokeLinecap:"round"}),l.jsx("circle",{cx:"75",cy:"55",r:"4",fill:"#3b82f6"})]})}),l.jsx("h1",{className:"brand-heading",children:"KTU SmartHub"}),l.jsx("p",{className:"brand-subtext",children:"APJ Abdul Kalam Technological University"}),l.jsxs("div",{className:"features-list",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx(St,{size:18})," ",l.jsx("span",{children:"Unified Examination Timetables & Results"})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx(St,{size:18})," ",l.jsx("span",{children:"Dynamic University Deadline Alerts"})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx(St,{size:18})," ",l.jsx("span",{children:"Interactive PYQs & Practice Mock Tests"})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx(St,{size:18})," ",l.jsx("span",{children:"Digital Forms & Academic Calendar"})]})]}),l.jsxs("div",{className:"security-disclaimer",children:[l.jsx(Wm,{size:15}),l.jsx("span",{children:"Demo Prototype Environment — Strictly Frontend Powered"})]})]}),l.jsxs("div",{className:"login-form-panel",children:[l.jsxs("div",{className:"form-header",children:[l.jsx("h2",{children:"Welcome to KTU SmartHub"}),l.jsx("p",{children:"Please enter your KTU Student ID or Registered Email"})]}),N&&l.jsx("div",{className:"error-banner",children:N}),l.jsxs("form",{onSubmit:O,className:"login-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"User ID / Email Address"}),l.jsxs("div",{className:"input-with-icon",children:[l.jsx(cd,{size:18,className:"input-icon"}),l.jsx("input",{type:"text",className:"form-input",placeholder:"e.g. student@ktu.edu.in or TVE22CS045",value:u,onChange:I=>o(I.target.value),required:!0})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("div",{className:"label-row",children:[l.jsx("label",{className:"form-label",children:"Password"}),l.jsx("button",{type:"button",className:"forgot-link",onClick:()=>P(!0),children:"Forgot password?"})]}),l.jsxs("div",{className:"input-with-icon",children:[l.jsx(Lm,{size:18,className:"input-icon"}),l.jsx("input",{type:g?"text":"password",className:"form-input",placeholder:"Enter your password",value:f,onChange:I=>p(I.target.value),required:!0}),l.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>v(!g),"aria-label":g?"Hide password":"Show password",children:g?l.jsx(Pm,{size:18}):l.jsx(bs,{size:18})})]})]}),l.jsxs("button",{type:"submit",className:"btn btn-primary btn-full login-btn",children:["Login to SmartHub ",l.jsx(sd,{size:16})]})]}),l.jsxs("div",{className:"demo-credentials-box",children:[l.jsxs("div",{className:"demo-box-header",children:[l.jsxs("span",{children:["🚀 ",l.jsx("strong",{children:"Demo Credentials"})]}),l.jsx("button",{type:"button",onClick:z,className:"btn-fill-demo",children:"Auto Fill Credentials"})]}),l.jsxs("p",{className:"demo-cred-text",children:["User ID: ",l.jsx("code",{children:"student@ktu.edu.in"})," | Password: ",l.jsx("code",{children:"ktu12345"})]}),l.jsx("p",{className:"security-notice-text",children:"* Note: This demo login operates strictly on local state and localStorage. It does not claim production database security."})]})]})]}),b&&l.jsx("div",{className:"modal-overlay",onClick:()=>P(!1),children:l.jsxs("div",{className:"modal-container",onClick:I=>I.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:"Reset Password Instructions"}),l.jsx("button",{className:"close-btn",onClick:()=>P(!1),children:"×"})]}),l.jsxs("div",{className:"modal-body",children:[l.jsx("p",{style:{marginBottom:"12px"},children:"In official production, KTU password reset requests are handled through your college institutional email or by contacting your KTU e-Gov institutional Nodal Officer."}),l.jsxs("div",{className:"demo-notice-bar",style:{textAlign:"left",borderRadius:"8px"},children:["🔑 For this ",l.jsx("strong",{children:"KTU SmartHub Demo"}),", simply use password ",l.jsx("code",{children:"ktu12345"})," with any email ID to login."]})]}),l.jsx("div",{className:"modal-footer",children:l.jsx("button",{className:"btn btn-primary",onClick:()=>P(!1),children:"Got it"})})]})}),l.jsx("style",{children:`
        .login-page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d3b66 0%, #1e3a8a 50%, #0f172a 100%);
          padding: 24px 16px;
        }

        .login-card-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          max-width: 960px;
          width: 100%;
          background-color: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .login-brand-panel {
          background: linear-gradient(180deg, #0d3b66 0%, #1d4ed8 100%);
          color: #ffffff;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .brand-logo-large {
          margin-bottom: 16px;
        }

        .brand-heading {
          font-size: 2.1rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 4px;
          letter-spacing: -0.5px;
        }

        .brand-subtext {
          color: #93c5fd;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #e0f2fe;
        }

        .feature-item svg {
          color: #60a5fa;
          flex-shrink: 0;
        }

        .security-disclaimer {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          color: #93c5fd;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }

        .login-form-panel {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header h2 {
          font-size: 1.6rem;
          color: var(--primary-navy);
          margin-bottom: 6px;
        }

        .form-header p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }

        .error-banner {
          background-color: var(--urgent-bg);
          color: var(--urgent-red);
          border: 1px solid var(--urgent-border);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          font-size: 0.86rem;
          margin-bottom: 18px;
          font-weight: 600;
        }

        .label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .forgot-link {
          font-size: 0.82rem;
          color: var(--primary-blue);
          font-weight: 600;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .input-with-icon {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .input-with-icon .form-input {
          padding-left: 38px;
          padding-right: 38px;
        }

        .eye-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .login-btn {
          margin-top: 10px;
          padding: 12px;
          font-size: 1rem;
        }

        .demo-credentials-box {
          margin-top: 28px;
          background-color: var(--light-blue-bg);
          border: 1px dashed var(--light-blue-border);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .demo-box-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
          font-size: 0.85rem;
          color: var(--primary-navy);
        }

        .btn-fill-demo {
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          background-color: var(--primary-blue);
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .btn-fill-demo:hover {
          background-color: var(--primary-dark);
        }

        .demo-cred-text {
          font-size: 0.82rem;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .demo-cred-text code {
          background-color: #ffffff;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          font-weight: 700;
        }

        .security-notice-text {
          font-size: 0.74rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .login-card-wrapper {
            grid-template-columns: 1fr;
          }
          .login-brand-panel {
            padding: 24px;
          }
          .features-list {
            display: none;
          }
          .login-form-panel {
            padding: 28px 20px;
          }
        }
      `})]})}function rh(){return new Date}function er(s){const u=rh(),o=new Date(s),f=o.getTime()-u.getTime();if(f<=0)return{isPast:!0,urgency:"EXPIRED",badgeClass:"badge-expired",remainingText:"Expired",diffDays:-1};const p=Math.floor(f/1e3),g=Math.floor(p/60),v=Math.floor(g/60),N=Math.floor(v/24),j=v%24,b=g%60,P=u.toLocaleDateString("en-US",{timeZone:"Asia/Kolkata"}),S=o.toLocaleDateString("en-US",{timeZone:"Asia/Kolkata"}),O=new Date(P),z=new Date(S),I=Math.round((z-O)/(1e3*60*60*24));let T="NORMAL",C="badge-normal",K="🔵 UPDATE";I===0?(T="URGENT",C="badge-urgent",K="🔴 URGENT"):I===1?(T="WARNING",C="badge-warning",K="🟠 WARNING"):I>=2&&I<=3&&(T="UPCOMING",C="badge-upcoming",K="🟡 UPCOMING");let Y="";return N>0?Y=`${N}d ${j}h remaining`:v>0?Y=`${v}h ${b}m remaining`:Y=`${b} mins remaining`,{isPast:!1,urgency:T,badgeClass:C,bannerPrefix:K,remainingText:Y,diffDays:I,days:N,hours:j,minutes:b}}function Ut(s){return s?new Date(s).toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata",year:"numeric",month:"short",day:"numeric"}):"N/A"}function lh({deadlines:s=[],onSelectDeadline:u}){const[o,f]=E.useState(0),[p,g]=E.useState(!1),v=s.filter(S=>!er(S.dueDate).isPast);if(E.useEffect(()=>{if(v.length<=1||p)return;const S=setInterval(()=>{f(O=>(O+1)%v.length)},6e3);return()=>clearInterval(S)},[v.length,p]),v.length===0)return l.jsx("div",{className:"deadline-banner banner-normal",children:l.jsxs("div",{className:"banner-content",children:[l.jsx(bn,{size:18,className:"banner-icon"}),l.jsxs("span",{className:"banner-text",children:[l.jsx("strong",{children:"🔵 UPDATE:"})," No immediate urgent university deadlines pending at this time."]})]})});const N=v[o]||v[0],j=er(N.dueDate);let b="banner-normal",P="";return j.urgency==="URGENT"?(b="banner-urgent",P="animate-pulse-urgent"):j.urgency==="WARNING"?b="banner-warning":j.urgency==="UPCOMING"&&(b="banner-upcoming"),l.jsxs("div",{className:`deadline-banner ${b} ${p?"paused-animation":P}`,children:[l.jsxs("div",{className:"banner-main",onClick:()=>u&&u(N),children:[l.jsxs("div",{className:"banner-badge-group",children:[l.jsx("span",{className:"banner-prefix",children:j.bannerPrefix}),l.jsxs("span",{className:"banner-counter",children:[o+1," of ",v.length]})]}),l.jsxs("div",{className:"banner-text-content",children:[l.jsx("span",{className:"banner-title",children:N.title}),l.jsxs("span",{className:"banner-time",children:[l.jsx(Nn,{size:13}),l.jsx("span",{children:j.remainingText})]})]}),l.jsx("div",{className:"banner-action",children:l.jsxs("span",{className:"action-link",children:["View Details ",l.jsx(It,{size:14})]})})]}),l.jsx("div",{className:"banner-controls",children:l.jsx("button",{onClick:S=>{S.stopPropagation(),g(!p)},className:"pause-btn",title:p?"Play slide animation":"Pause banner animation for accessibility","aria-label":p?"Play animation":"Pause animation",children:p?l.jsx(Vm,{size:15}):l.jsx(Am,{size:15})})}),l.jsx("style",{children:`
        .deadline-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: var(--radius-lg);
          padding: 12px 18px;
          margin-bottom: 24px;
          transition: var(--transition-normal);
          cursor: pointer;
          border: 2px solid transparent;
        }

        .banner-urgent {
          background-color: var(--urgent-bg);
          border-color: var(--urgent-red);
          color: #991b1b;
        }

        .banner-warning {
          background-color: var(--warning-bg);
          border-color: var(--warning-orange);
          color: #c2410c;
        }

        .banner-upcoming {
          background-color: var(--upcoming-bg);
          border-color: var(--upcoming-yellow);
          color: #854d0e;
        }

        .banner-normal {
          background-color: var(--normal-bg);
          border-color: var(--light-blue-border);
          color: var(--primary-navy);
        }

        .banner-main {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          flex-wrap: wrap;
        }

        .banner-badge-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .banner-prefix {
          font-weight: 800;
          font-size: 0.88rem;
          white-space: nowrap;
          letter-spacing: 0.5px;
        }

        .banner-counter {
          font-size: 0.75rem;
          background-color: rgba(255, 255, 255, 0.7);
          padding: 2px 8px;
          border-radius: 9999px;
          font-weight: 700;
        }

        .banner-text-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          flex-wrap: wrap;
        }

        .banner-title {
          font-weight: 700;
          font-size: 0.95rem;
        }

        .banner-time {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          background-color: rgba(255, 255, 255, 0.85);
          padding: 3px 10px;
          border-radius: var(--radius-sm);
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .banner-action {
          display: flex;
          align-items: center;
        }

        .action-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.84rem;
          font-weight: 700;
          text-decoration: underline;
        }

        .banner-controls {
          display: flex;
          align-items: center;
          padding-left: 12px;
          border-left: 1px solid rgba(0,0,0,0.1);
        }

        .pause-btn {
          padding: 6px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.7);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pause-btn:hover {
          background-color: #ffffff;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .deadline-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .banner-controls {
            align-self: flex-end;
            border-left: none;
            padding-left: 0;
          }
        }
      `})]})}function fd({isOpen:s,onClose:u,item:o,type:f="deadline"}){if(!s||!o)return null;const p=o.dueDate?er(o.dueDate):null;return l.jsxs("div",{className:"modal-overlay",onClick:u,children:[l.jsxs("div",{className:"modal-container",onClick:g=>g.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsxs("div",{className:"modal-title-group",children:[f==="deadline"&&p&&l.jsx("span",{className:`badge ${p.badgeClass}`,children:p.urgency}),f==="notification"&&o.category&&l.jsx("span",{className:"badge badge-normal",children:o.category}),f==="form"&&o.category&&l.jsx("span",{className:"badge badge-normal",children:o.category}),l.jsx("h3",{className:"modal-title",children:o.title})]}),l.jsx("button",{className:"close-btn",onClick:u,"aria-label":"Close details modal",children:l.jsx(Cs,{size:20})})]}),l.jsxs("div",{className:"modal-body",children:[f==="deadline"&&l.jsxs("div",{className:"detail-meta-box",children:[l.jsxs("div",{className:"meta-item",children:[l.jsx(Nt,{size:16}),l.jsxs("span",{children:["Due Date: ",l.jsx("strong",{children:Ut(o.dueDate)})]})]}),p&&l.jsxs("div",{className:"meta-item",children:[l.jsx(Nn,{size:16}),l.jsxs("span",{children:["Time Remaining: ",l.jsx("strong",{children:p.remainingText})]})]})]}),f==="notification"&&l.jsxs("div",{className:"detail-meta-box",children:[l.jsxs("div",{className:"meta-item",children:[l.jsx(Nt,{size:16}),l.jsxs("span",{children:["Published Date: ",l.jsx("strong",{children:Ut(o.publishDate)})]})]}),o.refNo&&l.jsxs("div",{className:"meta-item",children:[l.jsx(Hm,{size:16}),l.jsxs("span",{children:["Reference: ",l.jsx("strong",{children:o.refNo})]})]})]}),l.jsxs("div",{className:"detail-content",children:[l.jsx("h4",{children:"Description & Details"}),l.jsx("p",{children:o.details||o.content||o.shortDescription||o.description})]}),l.jsx("div",{className:"notice-disclaimer",children:l.jsx("small",{children:"📌 Note: This is sample data formatted for KTU SmartHub demonstration."})})]}),l.jsxs("div",{className:"modal-footer",children:[o.officialUrl&&l.jsxs("a",{href:o.officialUrl,target:"_blank",rel:"noreferrer",className:"btn btn-primary",children:[l.jsx(Xn,{size:16})," Visit Official Portal"]}),l.jsx("button",{className:"btn btn-secondary",onClick:u,children:"Close"})]})]}),l.jsx("style",{children:`
        .modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .modal-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .close-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: 50%;
        }

        .close-btn:hover {
          background-color: var(--border-color);
          color: var(--text-main);
        }

        .detail-meta-box {
          display: flex;
          gap: 18px;
          background-color: var(--light-blue-bg);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          flex-wrap: wrap;
          font-size: 0.9rem;
          color: var(--primary-navy);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-content h4 {
          font-size: 0.95rem;
          margin-bottom: 8px;
          color: var(--primary-navy);
        }

        .detail-content p {
          font-size: 0.93rem;
          color: var(--text-main);
          line-height: 1.6;
          white-space: pre-line;
        }

        .notice-disclaimer {
          margin-top: 20px;
          padding-top: 12px;
          border-top: 1px dashed var(--border-color);
          color: var(--text-muted);
        }
      `})]})}function ih({user:s}){const[u,o]=E.useState(null),[f,p]=E.useState("deadline"),g=lr(),v=b=>{o(b),p("deadline")},N=b=>{o(b),p("notification")},j=Fu.map(b=>({...b,status:er(b.dueDate)})).filter(b=>!b.status.isPast);return l.jsxs("div",{className:"home-dashboard-container",children:[l.jsxs("div",{className:"welcome-header",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"welcome-title",children:"Welcome to KTU SmartHub"}),l.jsxs("p",{className:"welcome-subtitle",children:["Hello, ",l.jsx("strong",{children:(s==null?void 0:s.name)||"Student"})," (",(s==null?void 0:s.registerNo)||"TVE22CS045",") — ",(s==null?void 0:s.semester)||"S5"," ",(s==null?void 0:s.branchCode)||"CSE"," | ",(s==null?void 0:s.college)||"CET Thiruvananthapuram"]})]}),l.jsxs("div",{className:"status-pill",children:[l.jsx("span",{className:"dot pulse-dot"})," Active Semester: 2026-27 (Odd)"]})]}),l.jsx(lh,{deadlines:Fu,onSelectDeadline:v}),l.jsxs("div",{className:"dashboard-grid",children:[l.jsxs("div",{className:"dash-col main-dash-col",children:[l.jsxs("section",{className:"dash-section card",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"header-title-box",children:[l.jsx(Nn,{className:"section-icon text-red",size:20}),l.jsx("h2",{children:"Upcoming University Deadlines"})]}),l.jsxs("span",{className:"badge badge-normal",children:[j.length," Active"]})]}),l.jsx("div",{className:"deadlines-list",children:j.length===0?l.jsx("p",{className:"no-data-text",children:"No active deadlines pending at this moment."}):j.map(b=>l.jsxs("div",{className:`deadline-item-row ${b.status.urgency==="URGENT"?"urgent-row":""}`,onClick:()=>v(b),children:[l.jsxs("div",{className:"item-left",children:[l.jsx("span",{className:`badge ${b.status.badgeClass}`,children:b.status.urgency}),l.jsxs("div",{className:"item-text",children:[l.jsx("h4",{className:"item-title",children:b.title}),l.jsxs("span",{className:"item-date",children:["Due: ",Ut(b.dueDate)]})]})]}),l.jsxs("div",{className:"item-right",children:[l.jsxs("span",{className:"time-rem-chip",children:[l.jsx(Nn,{size:13})," ",b.status.remainingText]}),l.jsx("button",{className:"btn btn-secondary btn-sm",children:"View Details"})]})]},b.id))})]}),l.jsxs("section",{className:"dash-section card",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"header-title-box",children:[l.jsx(ci,{className:"section-icon text-blue",size:20}),l.jsx("h2",{children:"Latest University Notifications"})]}),l.jsxs("button",{className:"view-all-link",onClick:()=>g("/notifications"),children:["View All ",l.jsx(It,{size:14})]})]}),l.jsx("div",{className:"notifications-preview-list",children:dd.slice(0,3).map(b=>l.jsxs("div",{className:"notif-row-card",onClick:()=>N(b),children:[l.jsxs("div",{className:"notif-row-top",children:[l.jsx("span",{className:"badge badge-normal",children:b.category}),b.isNew&&l.jsx("span",{className:"badge badge-urgent",children:"NEW"}),l.jsx("span",{className:"notif-row-date",children:Ut(b.publishDate)})]}),l.jsx("h4",{className:"notif-row-title",children:b.title}),l.jsx("p",{className:"notif-row-desc",children:b.shortDescription})]},b.id))})]})]}),l.jsxs("div",{className:"dash-col side-dash-col",children:[l.jsxs("section",{className:"dash-section card exam-highlight-card",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"header-title-box",children:[l.jsx(Nt,{className:"section-icon text-navy",size:20}),l.jsx("h2",{children:"Upcoming Examination"})]}),l.jsx("span",{className:"badge badge-urgent",children:"Nov 2026"})]}),l.jsxs("div",{className:"exam-card-body",children:[l.jsxs("div",{className:"exam-badge-title",children:[l.jsx("h3",{children:"S5 B.Tech Regular Theory Exams"}),l.jsx("span",{className:"exam-sub-info",children:"Scheme: 2019 / 2022 | Mode: Offline"})]}),l.jsxs("div",{className:"exam-schedule-highlights",children:[l.jsxs("div",{className:"sched-item",children:[l.jsx("span",{className:"sched-subject",children:"CST301 Formal Languages"}),l.jsx("span",{className:"sched-date",children:"Nov 10, 2026"})]}),l.jsxs("div",{className:"sched-item",children:[l.jsx("span",{className:"sched-subject",children:"CST303 Computer Networks"}),l.jsx("span",{className:"sched-date",children:"Nov 13, 2026"})]})]}),l.jsxs("button",{className:"btn btn-primary btn-full",onClick:()=>g("/exam"),children:["View Complete Timetable ",l.jsx(It,{size:16})]})]})]}),l.jsxs("div",{className:"quick-cards-grid",children:[l.jsxs("div",{className:"quick-access-card card card-hover",onClick:()=>g("/student/pyq"),children:[l.jsx("div",{className:"quick-icon pyq-icon",children:l.jsx(Yr,{size:24})}),l.jsxs("div",{className:"quick-info",children:[l.jsx("h3",{children:"Previous Year Question Papers"}),l.jsx("p",{children:"Access KTU solved & official PYQs filtered by subject & semester."})]}),l.jsxs("span",{className:"quick-arrow",children:["Explore PYQs ",l.jsx(It,{size:15})]})]}),l.jsxs("div",{className:"quick-access-card card card-hover",onClick:()=>g("/student/mock-test"),children:[l.jsx("div",{className:"quick-icon mock-icon",children:l.jsx(ks,{size:24})}),l.jsxs("div",{className:"quick-info",children:[l.jsx("h3",{children:"Interactive Mock Tests"}),l.jsx("p",{children:"Practice MCQs with countdown timer, score report & explanations."})]}),l.jsxs("span",{className:"quick-arrow",children:["Start Practice ",l.jsx(It,{size:15})]})]})]}),l.jsxs("section",{className:"dash-section card calendar-shortcut-card",onClick:()=>g("/student/academic-calendar"),children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{className:"header-title-box",children:[l.jsx(Nt,{className:"section-icon text-cyan",size:20}),l.jsx("h2",{children:"Academic Calendar Shortcut"})]}),l.jsx(It,{size:18,className:"text-muted"})]}),l.jsxs("div",{className:"calendar-upcoming-item",children:[l.jsxs("div",{className:"cal-date-badge",children:[l.jsx("span",{className:"cal-month",children:"OCT"}),l.jsx("span",{className:"cal-day",children:"20"})]}),l.jsxs("div",{className:"cal-details",children:[l.jsx("h4",{children:"2nd Series Internal Exams"}),l.jsx("p",{children:"Odd Semester internal evaluation & attendance upload window."})]})]})]})]})]}),l.jsx(fd,{isOpen:!!u,onClose:()=>o(null),item:u,type:f}),l.jsx("style",{children:`
        .home-dashboard-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .welcome-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #0d3b66 0%, #1d4ed8 100%);
          color: #ffffff;
          padding: 24px 28px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          flex-wrap: wrap;
          gap: 16px;
        }

        .welcome-title {
          font-size: 1.85rem;
          color: #ffffff;
          margin-bottom: 4px;
          letter-spacing: -0.3px;
        }

        .welcome-subtitle {
          color: #bfdbfe;
          font-size: 0.94rem;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(255, 255, 255, 0.15);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          backdrop-filter: blur(4px);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #4ade80;
          box-shadow: 0 0 8px #4ade80;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }

        .dash-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .dash-section {
          padding: 24px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
        }

        .header-title-box {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .header-title-box h2 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .text-red { color: var(--urgent-red); }
        .text-blue { color: var(--primary-blue); }
        .text-navy { color: var(--primary-navy); }
        .text-cyan { color: var(--accent-cyan); }

        .view-all-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--primary-blue);
        }

        .deadlines-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .deadline-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-color);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .deadline-item-row:hover {
          background-color: var(--light-blue-bg);
          border-color: var(--light-blue-border);
        }

        .urgent-row {
          border-left: 4px solid var(--urgent-red);
          background-color: #fef2f2;
        }

        .item-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .item-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .item-date {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
        }

        .item-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .time-rem-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--urgent-red);
          background-color: #ffffff;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--urgent-border);
        }

        .notifications-preview-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .notif-row-card {
          padding: 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background-color: #ffffff;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .notif-row-card:hover {
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-sm);
        }

        .notif-row-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .notif-row-date {
          margin-left: auto;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .notif-row-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }

        .notif-row-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .exam-highlight-card {
          background: linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);
        }

        .exam-badge-title {
          margin-bottom: 16px;
        }

        .exam-badge-title h3 {
          font-size: 1.1rem;
          color: var(--primary-navy);
        }

        .exam-sub-info {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .exam-schedule-highlights {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .sched-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #ffffff;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          font-size: 0.86rem;
        }

        .sched-subject {
          font-weight: 600;
          color: var(--text-main);
        }

        .sched-date {
          font-weight: 700;
          color: var(--primary-blue);
        }

        .quick-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .quick-access-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          cursor: pointer;
        }

        .quick-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pyq-icon {
          background-color: #e0e7ff;
          color: #4338ca;
        }

        .mock-icon {
          background-color: #fae8ff;
          color: #a21caf;
        }

        .quick-info h3 {
          font-size: 1.05rem;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }

        .quick-info p {
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .quick-arrow {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--primary-blue);
          margin-top: 4px;
        }

        .calendar-shortcut-card {
          cursor: pointer;
        }

        .calendar-upcoming-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background-color: var(--bg-subtle);
          padding: 14px;
          border-radius: var(--radius-md);
        }

        .cal-date-badge {
          background-color: var(--primary-navy);
          color: #ffffff;
          border-radius: var(--radius-md);
          padding: 6px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 54px;
        }

        .cal-month {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .cal-day {
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1;
        }

        .cal-details h4 {
          font-size: 0.95rem;
          color: var(--primary-navy);
        }

        .cal-details p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function ah(){const s=lr(),u=[{id:"pyq",title:"Previous Year Question Papers",subtitle:"PYQ Repository",description:"Search, filter, view, and download official KTU previous year question papers for all engineering branches and semesters.",icon:Yr,path:"/student/pyq",badge:"B.Tech / M.Tech / MCA",color:"#4338ca",bgColor:"#e0e7ff"},{id:"mock-test",title:"Interactive Mock Tests",subtitle:"Self Assessment",description:"Practice subject-wise multiple choice tests with automatic countdown timer, instant score breakdown, and detailed answer keys.",icon:ks,path:"/student/mock-test",badge:"MCQ Practice",color:"#a21caf",bgColor:"#fae8ff"},{id:"calendar",title:"Academic Calendar",subtitle:"Schedules & Events",description:"Filter university academic schedules, semester commencement dates, series exam windows, registration deadlines, and holidays.",icon:Nt,path:"/student/academic-calendar",badge:"2026-2027 Academic Year",color:"#0284c7",bgColor:"#e0f2fe"},{id:"profile",title:"Student Profile",subtitle:"Account & Records",description:"View and update demo student profile details, academic records, saved mock test performance history, and registered branch data.",icon:ui,path:"/student/profile",badge:"Editable Demo Details",color:"#059669",bgColor:"#d1fae5"}];return l.jsxs("div",{className:"student-resources-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Yr,{className:"text-blue",size:32})," Student Resources"]}),l.jsx("p",{className:"page-subtitle",children:"Organized study materials, self-assessment tools, academic schedules, and student profile management."})]}),l.jsx("div",{className:"resources-grid",children:u.map(o=>{const f=o.icon;return l.jsxs("div",{className:"resource-card card card-hover",onClick:()=>s(o.path),children:[l.jsxs("div",{className:"card-top-bar",children:[l.jsx("div",{className:"resource-icon-box",style:{backgroundColor:o.bgColor,color:o.color},children:l.jsx(f,{size:28})}),l.jsx("span",{className:"badge badge-normal",children:o.badge})]}),l.jsxs("div",{className:"resource-body",children:[l.jsx("h3",{className:"resource-title",children:o.title}),l.jsx("span",{className:"resource-subtitle",children:o.subtitle}),l.jsx("p",{className:"resource-desc",children:o.description})]}),l.jsx("div",{className:"resource-footer",children:l.jsxs("span",{className:"open-link",style:{color:o.color},children:["Open ",o.title," ",l.jsx(sd,{size:16})]})})]},o.id)})}),l.jsx("style",{children:`
        .student-resources-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .resource-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          cursor: pointer;
          min-height: 260px;
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .resource-icon-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .resource-title {
          font-size: 1.25rem;
          color: var(--primary-navy);
          margin-bottom: 2px;
        }

        .resource-subtitle {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 12px;
        }

        .resource-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .resource-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }

        .open-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 0.9rem;
        }
      `})]})}function ir({filters:s=[],filterValues:u={},onFilterChange:o,onReset:f,searchQuery:p="",onSearchChange:g,searchPlaceholder:v="Search by keyword..."}){return l.jsxs("div",{className:"filter-bar-card card",children:[l.jsxs("div",{className:"filter-grid",children:[g!==void 0&&l.jsxs("div",{className:"filter-group search-group",children:[l.jsx("label",{className:"form-label",children:"Search"}),l.jsxs("div",{className:"search-input-wrapper",children:[l.jsx(qm,{size:16,className:"search-icon"}),l.jsx("input",{type:"text",className:"form-input search-input",placeholder:v,value:p,onChange:N=>g(N.target.value)})]})]}),s.map(N=>l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{className:"form-label",children:N.label}),l.jsxs("select",{className:"form-select",value:u[N.key]||"",onChange:j=>o(N.key,j.target.value),children:[l.jsx("option",{value:"",children:N.allLabel||`All ${N.label}s`}),N.options.map(j=>{const b=typeof j=="object"?j.value:j,P=typeof j=="object"?j.label:j;return l.jsx("option",{value:b,children:P},b)})]})]},N.key)),f&&l.jsxs("div",{className:"filter-group reset-group",children:[l.jsx("label",{className:"form-label",style:{visibility:"hidden"},children:"Reset"}),l.jsxs("button",{className:"btn btn-secondary btn-reset",onClick:f,children:[l.jsx(cn,{size:15})," Reset Filters"]})]})]}),l.jsx("style",{children:`
        .filter-bar-card {
          margin-bottom: 24px;
          padding: 20px;
          background-color: #ffffff;
        }

        .filter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          align-items: flex-end;
        }

        .search-group {
          grid-column: span 1;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-input {
          padding-left: 38px;
        }

        .btn-reset {
          width: 100%;
          height: 42px;
        }

        @media (max-width: 640px) {
          .filter-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Es({isOpen:s,onClose:u,document:o}){if(!s||!o)return null;const f=()=>{const p=window.document.createElement("a");p.href=o.pdfUrl,p.download=o.fileName||"KTU_Document.pdf",window.document.body.appendChild(p),p.click(),window.document.body.removeChild(p)};return l.jsxs("div",{className:"modal-overlay",onClick:u,children:[l.jsxs("div",{className:"modal-container doc-modal",onClick:p=>p.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsxs("div",{className:"doc-title-box",children:[l.jsx(kn,{size:20,className:"doc-icon"}),l.jsxs("div",{children:[l.jsx("h3",{className:"modal-title",children:o.title||o.fileName}),l.jsx("span",{className:"doc-sub",children:o.fileName})]})]}),l.jsx("button",{className:"close-btn",onClick:u,"aria-label":"Close PDF viewer",children:l.jsx(Cs,{size:20})})]}),l.jsx("div",{className:"modal-body doc-body",children:l.jsx("div",{className:"pdf-frame-wrapper",children:l.jsx("iframe",{src:o.pdfUrl,title:o.title,className:"pdf-iframe"})})}),l.jsxs("div",{className:"modal-footer",children:[l.jsxs("a",{href:o.pdfUrl,target:"_blank",rel:"noreferrer",className:"btn btn-secondary",children:[l.jsx(Xn,{size:16})," Open in New Tab"]}),l.jsxs("button",{className:"btn btn-primary",onClick:f,children:[l.jsx(mi,{size:16})," Download PDF"]})]})]}),l.jsx("style",{children:`
        .doc-modal {
          max-width: 850px;
          height: 85vh;
          display: flex;
          flex-direction: column;
        }

        .doc-title-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .doc-icon {
          color: var(--primary-blue);
        }

        .doc-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .doc-body {
          flex: 1;
          padding: 0;
          overflow: hidden;
          background-color: #525659;
        }

        .pdf-frame-wrapper {
          width: 100%;
          height: 100%;
        }

        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      `})]})}function Bu(){const[s,u]=E.useState({course:"",branch:"",semester:"",subject:"",year:""}),[o,f]=E.useState(""),[p,g]=E.useState(null),v=["B.Tech","M.Tech","MCA"],N=["CSE","ECE","EEE","Civil Engineering","Mechanical Engineering","Computer Applications"],j=["S1","S2","S3","S4","S5","S6","S7","S8"],b=["2025","2024","2023","2022","2021"],P=["Data Structures","Database Management Systems","Operating Systems","Discrete Mathematics","Analog Circuits","Advanced Data Structures"],S=(C,K)=>{u(Y=>({...Y,[C]:K}))},O=()=>{u({course:"",branch:"",semester:"",subject:"",year:""}),f("")},z=Xm.filter(C=>{if(s.course&&C.course!==s.course||s.branch&&C.branch!==s.branch||s.semester&&C.semester!==s.semester||s.subject&&C.subject!==s.subject||s.year&&C.year!==s.year)return!1;if(o.trim()){const K=o.toLowerCase(),Y=C.title.toLowerCase().includes(K),A=C.subject.toLowerCase().includes(K),$=C.subjectCode?C.subjectCode.toLowerCase().includes(K):!1;if(!Y&&!A&&!$)return!1}return!0}),I=[{key:"course",label:"Course",options:v},{key:"branch",label:"Branch",options:N},{key:"semester",label:"Semester",options:j},{key:"subject",label:"Subject",options:P},{key:"year",label:"Exam Year",options:b}],T=C=>{const K=document.createElement("a");K.href=C.pdfUrl,K.download=C.fileName||`${C.subjectCode}_${C.year}.pdf`,document.body.appendChild(K),K.click(),document.body.removeChild(K)};return l.jsxs("div",{className:"pyq-page-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Yr,{className:"text-blue",size:30})," Previous Year Question Papers (PYQ)"]}),l.jsx("p",{className:"page-subtitle",children:"Search and download KTU university theory question papers for all engineering branches and semesters."})]}),l.jsxs("div",{className:"disclaimer-banner card",children:[l.jsx(Tm,{size:18,className:"text-blue"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Sample Notice:"})," Document files are verified sample KTU question papers for portal demonstration."]})]}),l.jsx(ir,{filters:I,filterValues:s,onFilterChange:S,onReset:O,searchQuery:o,onSearchChange:f,searchPlaceholder:"Search by subject code, title e.g. CST201..."}),l.jsx("div",{className:"results-header",children:l.jsxs("h3",{children:["Matching Question Papers (",z.length,")"]})}),z.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(kn,{size:48}),l.jsx("h3",{children:"No question papers found for your selection."}),l.jsx("p",{children:"Try clearing filters or searching for another subject or year."}),l.jsxs("button",{className:"btn btn-secondary",style:{marginTop:"16px"},onClick:O,children:[l.jsx(cn,{size:15})," Reset Filters"]})]}):l.jsx("div",{className:"pyq-grid",children:z.map(C=>l.jsxs("div",{className:"pyq-card card card-hover",children:[l.jsxs("div",{className:"pyq-card-header",children:[l.jsx("span",{className:"badge badge-normal",children:C.course}),l.jsxs("span",{className:"badge badge-upcoming",children:[C.semester," ",C.branch]}),l.jsxs("span",{className:"badge badge-urgent",children:[C.year," Exam"]})]}),l.jsx("h3",{className:"pyq-card-title",children:C.title}),l.jsxs("div",{className:"pyq-meta",children:[l.jsxs("div",{className:"meta-line",children:[l.jsx("span",{className:"meta-lbl",children:"Subject:"}),l.jsxs("span",{className:"meta-val",children:[C.subject," (",C.subjectCode,")"]})]}),l.jsxs("div",{className:"meta-line",children:[l.jsx("span",{className:"meta-lbl",children:"Branch:"}),l.jsx("span",{className:"meta-val",children:C.branch})]})]}),l.jsxs("div",{className:"pyq-card-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(C),children:[l.jsx(bs,{size:15})," View PDF"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>T(C),children:[l.jsx(mi,{size:15})," Download"]})]})]},C.id))}),l.jsx(Es,{isOpen:!!p,onClose:()=>g(null),document:p}),l.jsx("style",{children:`
        .pyq-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .disclaimer-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background-color: var(--light-blue-bg);
          border: 1px solid var(--light-blue-border);
          font-size: 0.88rem;
          color: var(--primary-navy);
        }

        .results-header {
          margin-top: 8px;
        }

        .pyq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .pyq-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px;
        }

        .pyq-card-header {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .pyq-card-title {
          font-size: 1.08rem;
          color: var(--primary-navy);
          margin-bottom: 14px;
          line-height: 1.35;
        }

        .pyq-meta {
          background-color: var(--bg-subtle);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          margin-bottom: 16px;
          font-size: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .meta-line {
          display: flex;
          gap: 8px;
        }

        .meta-lbl {
          color: var(--text-muted);
          font-weight: 600;
        }

        .meta-val {
          color: var(--primary-navy);
          font-weight: 700;
        }

        .pyq-card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }

        .pyq-card-actions .btn {
          flex: 1;
        }
      `})]})}function Vu(){const[s,u]=E.useState("setup"),[o,f]=E.useState(Jn[0].id),[p,g]=E.useState(null),[v,N]=E.useState(0),[j,b]=E.useState({}),[P,S]=E.useState(0),[O,z]=E.useState(!1),[I,T]=E.useState([]),C=E.useRef(null);E.useEffect(()=>{try{const U=localStorage.getItem("ktu_mock_test_history");U&&T(JSON.parse(U))}catch(U){console.error("Failed to load mock history",U)}},[]);const K=U=>{const re=[U,...I];T(re);try{localStorage.setItem("ktu_mock_test_history",JSON.stringify(re))}catch(pe){console.error("Failed to save mock history",pe)}},Y=()=>{T([]);try{localStorage.removeItem("ktu_mock_test_history")}catch(U){console.error("Failed to clear history",U)}},A=()=>{const U=Jn.find(re=>re.id===o)||Jn[0];g(U),N(0),b({}),S(U.timeLimitMinutes*60),u("testing")};E.useEffect(()=>{if(s==="testing")return C.current=setInterval(()=>{S(U=>U<=1?(clearInterval(C.current),de(),0):U-1)},1e3),()=>clearInterval(C.current)},[s]);const $=(U,re)=>{b(pe=>({...pe,[U]:re}))},de=()=>{fe()},fe=()=>{if(O)return;z(!0),C.current&&clearInterval(C.current);let U=0;const re=p.questions.length;p.questions.forEach(Te=>{j[Te.id]===Te.correctIndex&&(U+=1)});const pe=Math.round(U/re*100),ge={id:`HIST-${Date.now()}`,date:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}),subject:p.subject,topic:p.topic,score:U,total:re,percentage:pe};K(ge),u("result"),z(!1)},Re=U=>{const re=Math.floor(U/60),pe=U%60;return`${re.toString().padStart(2,"0")}:${pe.toString().padStart(2,"0")}`},Ee=Jn.find(U=>U.id===o)||Jn[0];return l.jsxs("div",{className:"mock-test-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(ks,{className:"text-blue",size:32})," Interactive Mock Test System"]}),l.jsx("p",{className:"page-subtitle",children:"Test your knowledge with KTU subject-wise multiple choice quizzes, timed practice, and detailed answers."})]}),s==="setup"&&l.jsxs("div",{className:"setup-grid",children:[l.jsxs("div",{className:"setup-card card",children:[l.jsxs("h2",{className:"setup-title",children:[l.jsx(Yr,{size:20,className:"text-blue"})," Configure Mock Examination"]}),l.jsxs("div",{className:"form-group",style:{marginTop:"20px"},children:[l.jsx("label",{className:"form-label",children:"Select Subject & Topic"}),l.jsx("select",{className:"form-select",value:o,onChange:U=>f(U.target.value),children:Jn.map(U=>l.jsxs("option",{value:U.id,children:[U.subject," (",U.subjectCode,") — ",U.topic]},U.id))})]}),l.jsxs("div",{className:"quiz-summary-box card",children:[l.jsx("h4",{children:"Test Details"}),l.jsxs("ul",{className:"summary-list",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Subject Code:"})," ",Ee.subjectCode]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Topic Covered:"})," ",Ee.topic]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Total Questions:"})," ",Ee.questions.length," MCQs"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Time Limit:"})," ",Ee.timeLimitMinutes," Minutes"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Scoring:"})," 1 mark per correct answer, 0 for wrong"]})]})]}),l.jsx("div",{className:"demo-notice-bar",style:{borderRadius:"8px",marginBottom:"20px"},children:"📌 Questions are sample practice MCQs for demonstration."}),l.jsxs("button",{className:"btn btn-primary btn-full btn-start",onClick:A,children:["Start Practice Test ",l.jsx(It,{size:18})]})]}),l.jsxs("div",{className:"history-card card",children:[l.jsxs("div",{className:"history-header",children:[l.jsxs("div",{className:"history-title",children:[l.jsx(Rm,{size:18,className:"text-blue"}),l.jsx("h3",{children:"Past Test History"})]}),I.length>0&&l.jsx("button",{className:"btn-clear-hist",onClick:Y,children:"Clear History"})]}),I.length===0?l.jsx("p",{className:"no-hist-text",children:"No past test attempts found. Complete a test to record your score history here in localStorage."}):l.jsx("div",{className:"history-list",children:I.map(U=>l.jsxs("div",{className:"history-item",children:[l.jsxs("div",{className:"hist-top",children:[l.jsx("span",{className:"hist-subject",children:U.subject}),l.jsxs("span",{className:`badge ${U.percentage>=70?"badge-success":"badge-warning"}`,children:[U.score,"/",U.total," (",U.percentage,"%)"]})]}),l.jsx("span",{className:"hist-topic",children:U.topic}),l.jsx("span",{className:"hist-date",children:U.date})]},U.id))})]})]}),s==="testing"&&p&&l.jsxs("div",{className:"testing-wrapper card",children:[l.jsxs("div",{className:"testing-header",children:[l.jsxs("div",{children:[l.jsx("span",{className:"badge badge-normal",children:p.subjectCode}),l.jsx("h2",{className:"testing-title",children:p.subject}),l.jsx("span",{className:"testing-topic",children:p.topic})]}),l.jsxs("div",{className:`timer-box ${P<120?"timer-warning":""}`,children:[l.jsx(Nn,{size:18}),l.jsxs("span",{children:["Time Remaining: ",l.jsx("strong",{children:Re(P)})]})]})]}),l.jsxs("div",{className:"q-nav-bar",children:[l.jsx("span",{children:"Questions:"}),l.jsx("div",{className:"q-nav-buttons",children:p.questions.map((U,re)=>{const pe=j[U.id]!==void 0,ge=v===re;return l.jsx("button",{className:`q-nav-btn ${ge?"q-nav-active":""} ${pe?"q-nav-answered":""}`,onClick:()=>N(re),children:re+1},U.id)})})]}),(()=>{const U=p.questions[v],re=j[U.id];return l.jsxs("div",{className:"question-box",children:[l.jsxs("div",{className:"q-number-badge",children:["Question ",v+1," of ",p.questions.length]}),l.jsx("h3",{className:"q-text",children:U.question}),l.jsx("div",{className:"options-list",children:U.options.map((pe,ge)=>{const Te=re===ge;return l.jsxs("label",{className:`option-card ${Te?"option-selected":""}`,onClick:()=>$(U.id,ge),children:[l.jsx("input",{type:"radio",name:`question-${U.id}`,checked:Te,onChange:()=>$(U.id,ge)}),l.jsxs("span",{className:"opt-label",children:[String.fromCharCode(65+ge),"."]}),l.jsx("span",{className:"opt-text",children:pe})]},ge)})})]})})(),l.jsxs("div",{className:"testing-footer",children:[l.jsxs("button",{className:"btn btn-secondary",disabled:v===0,onClick:()=>N(U=>Math.max(0,U-1)),children:[l.jsx(Em,{size:16})," Previous"]}),v<p.questions.length-1?l.jsxs("button",{className:"btn btn-primary",onClick:()=>N(U=>U+1),children:["Next Question ",l.jsx(It,{size:16})]}):l.jsxs("button",{className:"btn btn-primary btn-submit-test",onClick:fe,children:["Submit Test ",l.jsx(St,{size:16})]})]})]}),s==="result"&&p&&l.jsxs("div",{className:"result-wrapper card",children:[l.jsxs("div",{className:"result-score-banner",children:[l.jsx(Kr,{size:48,className:"score-icon"}),l.jsx("h2",{children:"Test Completed!"}),(()=>{let U=0;p.questions.forEach(pe=>{j[pe.id]===pe.correctIndex&&(U+=1)});const re=Math.round(U/p.questions.length*100);return l.jsxs("div",{className:"score-details",children:[l.jsxs("div",{className:"score-number",children:[U," / ",p.questions.length]}),l.jsxs("div",{className:"score-percentage",children:["Score: ",l.jsxs("strong",{children:[re,"%"]})]}),l.jsx("p",{className:"score-feedback",children:re>=80?"🌟 Excellent performance!":re>=50?"👍 Good attempt! Review answers below.":"📖 Needs improvement. Practice more tests."})]})})()]}),l.jsx("h3",{className:"review-title",children:"Detailed Answer Explanations"}),l.jsx("div",{className:"review-list",children:p.questions.map((U,re)=>{const pe=j[U.id],ge=pe===U.correctIndex;return l.jsxs("div",{className:`review-card ${ge?"review-correct":"review-wrong"}`,children:[l.jsxs("div",{className:"review-header",children:[l.jsxs("span",{className:"q-badge",children:["Q",re+1]}),l.jsx("h4",{className:"q-title",children:U.question}),ge?l.jsxs("span",{className:"badge badge-success",children:[l.jsx(St,{size:14})," Correct"]}):l.jsxs("span",{className:"badge badge-urgent",children:[l.jsx(od,{size:14})," Incorrect"]})]}),l.jsx("div",{className:"options-review",children:U.options.map((Te,Le)=>{let Ke="opt-review-item";return Le===U.correctIndex&&(Ke+=" opt-is-correct"),pe===Le&&!ge&&(Ke+=" opt-is-user-wrong"),l.jsxs("div",{className:Ke,children:[l.jsxs("span",{children:[String.fromCharCode(65+Le),". ",Te]}),Le===U.correctIndex&&l.jsx("span",{className:"lbl-right",children:"✓ Correct Answer"}),pe===Le&&!ge&&l.jsx("span",{className:"lbl-user",children:"Your Answer"})]},Le)})}),l.jsxs("div",{className:"explanation-box",children:[l.jsx("strong",{children:"💡 Explanation:"})," ",U.explanation]})]},U.id)})}),l.jsx("div",{className:"result-footer-actions",children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>u("setup"),children:[l.jsx(cn,{size:16})," Retake Test or Choose Another Subject"]})})]}),l.jsx("style",{children:`
        .mock-test-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .setup-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }

        .setup-title {
          font-size: 1.25rem;
          color: var(--primary-navy);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .quiz-summary-box {
          margin: 20px 0;
          background-color: var(--bg-subtle);
          padding: 16px;
        }

        .summary-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.9rem;
          margin-top: 10px;
        }

        .btn-start {
          padding: 12px;
          font-size: 1rem;
        }

        .history-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 10px;
        }

        .history-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .history-title h3 {
          font-size: 1.1rem;
          color: var(--primary-navy);
        }

        .btn-clear-hist {
          font-size: 0.78rem;
          color: var(--urgent-red);
          font-weight: 600;
        }

        .no-hist-text {
          font-size: 0.86rem;
          color: var(--text-muted);
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .history-item {
          background-color: var(--bg-subtle);
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .hist-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .hist-subject {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary-navy);
        }

        .hist-topic {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
        }

        .hist-date {
          font-size: 0.72rem;
          color: var(--text-light);
          display: block;
          margin-top: 4px;
        }

        /* Testing stage */
        .testing-wrapper {
          padding: 28px;
        }

        .testing-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .testing-title {
          font-size: 1.4rem;
          color: var(--primary-navy);
        }

        .testing-topic {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .timer-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--light-blue-bg);
          border: 1px solid var(--light-blue-border);
          padding: 10px 16px;
          border-radius: var(--radius-md);
          color: var(--primary-navy);
          font-size: 0.95rem;
        }

        .timer-warning {
          background-color: var(--urgent-bg);
          border-color: var(--urgent-border);
          color: var(--urgent-red);
          animation: pulseGlow 1.5s infinite;
        }

        .q-nav-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          background-color: var(--bg-subtle);
          padding: 10px 16px;
          border-radius: var(--radius-md);
        }

        .q-nav-buttons {
          display: flex;
          gap: 8px;
        }

        .q-nav-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-main);
        }

        .q-nav-active {
          background-color: var(--primary-navy);
          color: #ffffff;
          border-color: var(--primary-navy);
        }

        .q-nav-answered {
          background-color: var(--accent-blue);
          color: #ffffff;
          border-color: var(--accent-blue);
        }

        .question-box {
          margin-bottom: 28px;
        }

        .q-number-badge {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-blue);
          margin-bottom: 8px;
        }

        .q-text {
          font-size: 1.25rem;
          color: var(--primary-navy);
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .option-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: var(--radius-md);
          border: 2px solid var(--border-color);
          background-color: #ffffff;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .option-card:hover {
          border-color: var(--light-blue-border);
          background-color: var(--light-blue-bg);
        }

        .option-selected {
          border-color: var(--primary-blue) !important;
          background-color: var(--light-blue-bg) !important;
        }

        .opt-label {
          font-weight: 800;
          color: var(--primary-navy);
        }

        .opt-text {
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .testing-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 20px;
        }

        .btn-submit-test {
          background-color: var(--success-green);
        }

        .btn-submit-test:hover {
          background-color: #059669;
        }

        /* Result Stage */
        .result-score-banner {
          text-align: center;
          padding: 32px;
          background-color: var(--light-blue-bg);
          border-radius: var(--radius-lg);
          margin-bottom: 28px;
        }

        .score-icon {
          color: var(--primary-navy);
          margin-bottom: 12px;
        }

        .score-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary-navy);
        }

        .score-percentage {
          font-size: 1.1rem;
          color: var(--primary-blue);
        }

        .score-feedback {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-top: 8px;
        }

        .review-title {
          font-size: 1.2rem;
          color: var(--primary-navy);
          margin-bottom: 16px;
        }

        .review-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 28px;
        }

        .review-card {
          padding: 20px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }

        .review-correct {
          border-left: 4px solid var(--success-green);
          background-color: #f0fdf4;
        }

        .review-wrong {
          border-left: 4px solid var(--urgent-red);
          background-color: #fef2f2;
        }

        .review-header {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
        }

        .q-badge {
          font-weight: 800;
          color: var(--primary-navy);
        }

        .q-title {
          flex: 1;
          font-size: 1rem;
          color: var(--primary-navy);
        }

        .options-review {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
        }

        .opt-review-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          background-color: #ffffff;
          border: 1px solid var(--border-color);
        }

        .opt-is-correct {
          border-color: var(--success-green);
          background-color: #ecfdf5;
          font-weight: 700;
        }

        .opt-is-user-wrong {
          border-color: var(--urgent-red);
          background-color: #fef2f2;
          color: var(--urgent-red);
        }

        .lbl-right {
          font-size: 0.76rem;
          color: var(--success-green);
          font-weight: 700;
        }

        .lbl-user {
          font-size: 0.76rem;
          color: var(--urgent-red);
          font-weight: 700;
        }

        .explanation-box {
          font-size: 0.88rem;
          color: var(--text-main);
          background-color: #ffffff;
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px dashed var(--border-color);
        }

        .result-footer-actions {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .setup-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Qu(){const[s,u]=E.useState({academicYear:"",semester:"",category:""}),[o,f]=E.useState(""),[p,g]=E.useState("list"),v=["2026-2027","2025-2026"],N=["S1","S2","S3","S4","S5","S6","S7","S8"],j=["Semester Commencement","Internal Examinations","University Examinations","Holidays","Registration Deadlines","Semester-end Dates"],b=(z,I)=>{u(T=>({...T,[z]:I}))},P=()=>{u({academicYear:"",semester:"",category:""}),f("")},S=Zm.filter(z=>{if(s.academicYear&&z.academicYear!==s.academicYear||s.semester&&z.semester!=="All"&&z.semester!==s.semester||s.category&&z.category!==s.category)return!1;if(o.trim()){const I=o.toLowerCase(),T=z.title.toLowerCase().includes(I),C=z.description.toLowerCase().includes(I);if(!T&&!C)return!1}return!0}),O=[{key:"academicYear",label:"Academic Year",options:v},{key:"semester",label:"Semester",options:N},{key:"category",label:"Event Category",options:j}];return l.jsxs("div",{className:"academic-calendar-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Nt,{className:"text-blue",size:32})," KTU Academic Calendar"]}),l.jsx("p",{className:"page-subtitle",children:"Official University academic schedules, semester commencement dates, exam periods, and institutional holidays."})]}),l.jsxs("div",{className:"disclaimer-banner card",children:[l.jsx(bn,{size:18,className:"text-blue"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Sample Calendar:"})," Event schedules are sample data for portal demonstration. Verify official KTU notifications for binding academic dates."]})]}),l.jsx(ir,{filters:O,filterValues:s,onFilterChange:b,onReset:P,searchQuery:o,onSearchChange:f,searchPlaceholder:"Search calendar events e.g. Internal Exams..."}),l.jsxs("div",{className:"calendar-toolbar",children:[l.jsxs("h3",{children:["Academic Schedule Events (",S.length,")"]}),l.jsxs("div",{className:"view-toggle-btns",children:[l.jsxs("button",{className:`btn btn-sm ${p==="list"?"btn-primary":"btn-secondary"}`,onClick:()=>g("list"),children:[l.jsx(Dm,{size:15})," Organized List"]}),l.jsxs("button",{className:`btn btn-sm ${p==="grid"?"btn-primary":"btn-secondary"}`,onClick:()=>g("grid"),children:[l.jsx(_m,{size:15})," Card Grid"]})]})]}),S.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Nt,{size:48}),l.jsx("h3",{children:"No events found for your selection."}),l.jsx("p",{children:"Try resetting the category or semester filters."})]}):p==="list"?l.jsx("div",{className:"events-list-view",children:S.map(z=>l.jsxs("div",{className:"event-list-item card",children:[l.jsxs("div",{className:"event-date-col",children:[l.jsxs("div",{className:"date-block",children:[l.jsx("span",{className:"date-month",children:new Date(z.date).toLocaleString("en-US",{month:"short"})}),l.jsx("span",{className:"date-day",children:new Date(z.date).getDate()})]}),l.jsx("span",{className:"date-year",children:new Date(z.date).getFullYear()})]}),l.jsxs("div",{className:"event-info-col",children:[l.jsxs("div",{className:"event-tags",children:[l.jsx("span",{className:"badge badge-normal",children:z.category}),l.jsxs("span",{className:"badge badge-upcoming",children:[z.semester," Sem"]}),l.jsx("span",{className:"badge badge-expired",children:z.academicYear})]}),l.jsx("h3",{className:"event-title",children:z.title}),l.jsx("p",{className:"event-desc",children:z.description})]})]},z.id))}):l.jsx("div",{className:"events-grid-view",children:S.map(z=>l.jsxs("div",{className:"event-grid-card card card-hover",children:[l.jsxs("div",{className:"grid-card-top",children:[l.jsx("span",{className:"badge badge-normal",children:z.category}),l.jsx("span",{className:"badge badge-upcoming",children:z.semester})]}),l.jsx("h3",{className:"event-title",children:z.title}),l.jsxs("div",{className:"event-date-chip",children:[l.jsx(Nn,{size:14})," ",Ut(z.date)]}),l.jsx("p",{className:"event-desc",children:z.description})]},z.id))}),l.jsx("style",{children:`
        .academic-calendar-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .calendar-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;
        }

        .view-toggle-btns {
          display: flex;
          gap: 8px;
        }

        .events-list-view {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .event-list-item {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 20px;
        }

        .event-date-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          background-color: var(--light-blue-bg);
          padding: 12px;
          border-radius: var(--radius-md);
          border: 1px solid var(--light-blue-border);
        }

        .date-month {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--primary-blue);
          text-transform: uppercase;
        }

        .date-day {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--primary-navy);
          line-height: 1;
        }

        .date-year {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .event-info-col {
          flex: 1;
        }

        .event-tags {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .event-title {
          font-size: 1.1rem;
          color: var(--primary-navy);
          margin-bottom: 4px;
        }

        .event-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .events-grid-view {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .event-grid-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 22px;
        }

        .grid-card-top {
          display: flex;
          justify-content: space-between;
        }

        .event-date-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-blue);
          background-color: var(--light-blue-bg);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          width: fit-content;
        }

        @media (max-width: 640px) {
          .event-list-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .event-date-col {
            width: 100%;
            flex-direction: row;
            gap: 12px;
          }
        }
      `})]})}function qu({user:s,onUpdateUser:u}){const[o,f]=E.useState(!1),[p,g]=E.useState({name:(s==null?void 0:s.name)||Ne.name,email:(s==null?void 0:s.email)||Ne.email,phone:(s==null?void 0:s.phone)||Ne.phone,semester:(s==null?void 0:s.semester)||Ne.semester,branch:(s==null?void 0:s.branch)||Ne.branch,college:(s==null?void 0:s.college)||Ne.college}),[v,N]=E.useState(!1),j=(S,O)=>{g(z=>({...z,[S]:O}))},b=S=>{S.preventDefault();const O={...s,...p};u(O),f(!1),N(!0),setTimeout(()=>N(!1),3e3)},P=()=>{g({name:Ne.name,email:Ne.email,phone:Ne.phone,semester:Ne.semester,branch:Ne.branch,college:Ne.college}),u(Ne),f(!1),N(!0),setTimeout(()=>N(!1),3e3)};return l.jsxs("div",{className:"student-profile-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(ui,{className:"text-blue",size:32})," Student Profile & Academic Record"]}),l.jsx("p",{className:"page-subtitle",children:"Manage demo student account details, enrolled engineering branch, and academic preferences."})]}),l.jsxs("div",{className:"demo-notice-bar",style:{borderRadius:"10px"},children:["📌 ",l.jsx("strong",{children:"Demo Data Disclaimer:"})," Editable profile details are saved locally in your browser's ",l.jsx("code",{children:"localStorage"}),"."]}),v&&l.jsxs("div",{className:"save-alert",children:[l.jsx(St,{size:18})," Profile details saved successfully in localStorage!"]}),l.jsxs("div",{className:"profile-layout-grid",children:[l.jsxs("div",{className:"profile-card card",children:[l.jsxs("div",{className:"profile-card-header",children:[l.jsx("div",{className:"avatar-large",children:l.jsx(ui,{size:40})}),l.jsxs("div",{className:"profile-header-text",children:[l.jsx("h2",{children:p.name}),l.jsxs("p",{className:"reg-no",children:["KTU Register No: ",l.jsx("strong",{children:(s==null?void 0:s.registerNo)||Ne.registerNo})]}),l.jsxs("div",{className:"header-badges",children:[l.jsxs("span",{className:"badge badge-normal",children:[p.semester," B.Tech"]}),l.jsx("span",{className:"badge badge-upcoming",children:(s==null?void 0:s.branchCode)||Ne.branchCode}),l.jsxs("span",{className:"badge badge-success",children:["CGPA: ",(s==null?void 0:s.cgpa)||Ne.cgpa]})]})]}),o?l.jsx("button",{className:"btn btn-secondary btn-edit-toggle",onClick:()=>f(!1),children:"Cancel"}):l.jsxs("button",{className:"btn btn-secondary btn-edit-toggle",onClick:()=>f(!0),children:[l.jsx(Fm,{size:15})," Edit Profile"]})]}),l.jsxs("form",{onSubmit:b,className:"profile-form",children:[l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Full Name"}),l.jsx("input",{type:"text",className:"form-input",value:p.name,disabled:!o,onChange:S=>j("name",S.target.value),required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"KTU Register Number (Read-only)"}),l.jsx("input",{type:"text",className:"form-input",value:(s==null?void 0:s.registerNo)||Ne.registerNo,disabled:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Email Address"}),l.jsx("input",{type:"email",className:"form-input",value:p.email,disabled:!o,onChange:S=>j("email",S.target.value),required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Contact Mobile Number"}),l.jsx("input",{type:"text",className:"form-input",value:p.phone,disabled:!o,onChange:S=>j("phone",S.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Enrolled Course"}),l.jsx("input",{type:"text",className:"form-input",value:(s==null?void 0:s.course)||Ne.course,disabled:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Current Semester"}),l.jsxs("select",{className:"form-select",value:p.semester,disabled:!o,onChange:S=>j("semester",S.target.value),children:[l.jsx("option",{value:"S1",children:"S1"}),l.jsx("option",{value:"S2",children:"S2"}),l.jsx("option",{value:"S3",children:"S3"}),l.jsx("option",{value:"S4",children:"S4"}),l.jsx("option",{value:"S5",children:"S5"}),l.jsx("option",{value:"S6",children:"S6"}),l.jsx("option",{value:"S7",children:"S7"}),l.jsx("option",{value:"S8",children:"S8"})]})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label",children:"Engineering Branch"}),l.jsx("input",{type:"text",className:"form-input",value:p.branch,disabled:!o,onChange:S=>j("branch",S.target.value)})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{className:"form-label",children:"Affiliated Institution / College"}),l.jsx("input",{type:"text",className:"form-input",value:p.college,disabled:!o,onChange:S=>j("college",S.target.value)})]})]}),o&&l.jsxs("div",{className:"form-actions",children:[l.jsxs("button",{type:"submit",className:"btn btn-primary",children:[l.jsx(Qm,{size:16})," Save Profile Changes"]}),l.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:P,children:[l.jsx(cn,{size:16})," Reset Default Demo"]})]})]})]}),l.jsxs("div",{className:"profile-side-col",children:[l.jsxs("div",{className:"side-stat-card card",children:[l.jsxs("h3",{className:"side-card-title",children:[l.jsx(Kr,{size:18,className:"text-blue"})," Academic Performance"]}),l.jsxs("div",{className:"stat-rows",children:[l.jsxs("div",{className:"stat-row",children:[l.jsx("span",{className:"stat-lbl",children:"Cumulative CGPA"}),l.jsx("span",{className:"stat-val text-blue",children:"8.64 / 10.0"})]}),l.jsxs("div",{className:"stat-row",children:[l.jsx("span",{className:"stat-lbl",children:"Batch"}),l.jsx("span",{className:"stat-val",children:"2022 - 2026"})]}),l.jsxs("div",{className:"stat-row",children:[l.jsx("span",{className:"stat-lbl",children:"Activity Points"}),l.jsx("span",{className:"stat-val text-success",children:"85 / 100 Earned"})]})]})]}),l.jsxs("div",{className:"side-stat-card card",children:[l.jsxs("h3",{className:"side-card-title",children:[l.jsx(ud,{size:18,className:"text-navy"})," Portal Security Notice"]}),l.jsx("p",{className:"side-card-desc",children:"Your session is currently authenticated in local demo mode. No credentials or personal identification data are transmitted to external servers."})]})]})]}),l.jsx("style",{children:`
        .student-profile-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .save-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background-color: var(--success-bg);
          border: 1px solid #a7f3d0;
          color: var(--success-green);
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .profile-layout-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 24px;
        }

        .profile-card {
          padding: 28px;
        }

        .profile-card-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .avatar-large {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: var(--primary-navy);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .profile-header-text {
          flex: 1;
        }

        .profile-header-text h2 {
          font-size: 1.5rem;
          color: var(--primary-navy);
        }

        .reg-no {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .header-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .btn-edit-toggle {
          align-self: flex-start;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .full-width {
          grid-column: span 2;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid var(--border-color);
        }

        .profile-side-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-stat-card {
          padding: 22px;
        }

        .side-card-title {
          font-size: 1.1rem;
          color: var(--primary-navy);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stat-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-color);
        }

        .stat-row:last-child {
          border-bottom: none;
        }

        .stat-lbl {
          color: var(--text-muted);
        }

        .stat-val {
          font-weight: 700;
          color: var(--primary-navy);
        }

        .text-success { color: var(--success-green); }

        .side-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .profile-layout-grid {
            grid-template-columns: 1fr;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .full-width {
            grid-column: span 1;
          }
        }
      `})]})}function sh(){const[s,u]=E.useState({year:"",examType:"",semester:"",branch:""}),[o,f]=E.useState(""),[p,g]=E.useState(null),v=Array.from(new Set(hs.map(T=>T.year))).sort((T,C)=>C-T),N=Array.from(new Set(hs.map(T=>T.examType))),j=["S1","S2","S3","S4","S5","S6","S7","S8"],b=["CSE","ECE","EEE","Civil Engineering","Mechanical Engineering"],P=(T,C)=>{u(K=>({...K,[T]:C}))},S=()=>{u({year:"",examType:"",semester:"",branch:""}),f("")},O=hs.filter(T=>{if(s.year&&T.year!==s.year||s.examType&&T.examType!==s.examType||s.semester&&T.semester!==s.semester||s.branch&&T.branch!==s.branch)return!1;if(o.trim()){const C=o.toLowerCase(),K=T.title.toLowerCase().includes(C),Y=T.branch.toLowerCase().includes(C);if(!K&&!Y)return!1}return!0}),z=[{key:"year",label:"Examination Year",options:v},{key:"examType",label:"Examination Type",options:N},{key:"semester",label:"Semester",options:j},{key:"branch",label:"Branch",options:b}],I=T=>{const C=document.createElement("a");C.href=T.pdfUrl,C.download=T.fileName||`${T.id}.pdf`,document.body.appendChild(C),C.click(),document.body.removeChild(C)};return l.jsxs("div",{className:"exam-page-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Nt,{className:"text-blue",size:32})," Examination Timetables"]}),l.jsx("p",{className:"page-subtitle",children:"Select exam year, examination type, semester, and branch to quickly locate official KTU theory timetables."})]}),l.jsxs("div",{className:"disclaimer-banner card",children:[l.jsx(bn,{size:18,className:"text-blue"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Sample Timetables:"})," The timetables displayed below contain verified sample schedules for demonstration purposes."]})]}),l.jsx(ir,{filters:z,filterValues:s,onFilterChange:P,onReset:S,searchQuery:o,onSearchChange:f,searchPlaceholder:"Search timetables e.g. S5 Regular Nov 2026..."}),l.jsx("div",{className:"results-summary-bar",children:l.jsxs("h3",{children:["Matching Examination Timetables (",O.length,")"]})}),O.length===0?l.jsxs("div",{className:"empty-state card",children:[l.jsx(kn,{size:48}),l.jsx("h3",{children:"No examination timetables found matching your filter criteria."}),l.jsx("p",{children:"Try clearing your active filters or selecting another semester or branch."}),l.jsxs("button",{className:"btn btn-secondary",style:{marginTop:"16px"},onClick:S,children:[l.jsx(cn,{size:15})," Reset All Filters"]})]}):l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"custom-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Exam Year"}),l.jsx("th",{children:"Exam Type"}),l.jsx("th",{children:"Semester"}),l.jsx("th",{children:"Branch"}),l.jsx("th",{children:"Timetable Title"}),l.jsx("th",{children:"Published Date"}),l.jsx("th",{style:{textAlign:"center"},children:"Actions"})]})}),l.jsx("tbody",{children:O.map(T=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("span",{className:"badge badge-urgent",children:T.year})}),l.jsx("td",{children:l.jsx("span",{className:"badge badge-normal",children:T.examType})}),l.jsx("td",{children:l.jsx("strong",{children:T.semester})}),l.jsx("td",{children:T.branch}),l.jsx("td",{children:l.jsxs("div",{className:"timetable-title-cell",children:[l.jsx(kn,{size:16,className:"text-blue"}),l.jsx("strong",{children:T.title})]})}),l.jsx("td",{children:Ut(T.publishDate)}),l.jsx("td",{children:l.jsxs("div",{className:"table-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(T),children:[l.jsx(bs,{size:14})," View"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>I(T),children:[l.jsx(mi,{size:14})," Download PDF"]})]})})]},T.id))})]})}),l.jsx(Es,{isOpen:!!p,onClose:()=>g(null),document:p}),l.jsx("style",{children:`
        .exam-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .results-summary-bar {
          margin-top: 4px;
        }

        .timetable-title-cell {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--primary-navy);
        }

        .table-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
      `})]})}function oh(){const[s,u]=E.useState({year:"",semester:"",examType:""}),[o,f]=E.useState(""),p=["2026","2025","2024"],g=["S1","S2","S3","S4","S5","S6","S7","S8"],v=["Regular Examination","Supplementary Examination","Improvement Examination"],N=(S,O)=>{u(z=>({...z,[S]:O}))},j=()=>{u({year:"",semester:"",examType:""}),f("")},b=eh.filter(S=>{if(s.year&&S.year!==s.year||s.semester&&S.semester!==s.semester||s.examType&&S.examType!==s.examType)return!1;if(o.trim()){const O=o.toLowerCase(),z=S.title.toLowerCase().includes(O),I=S.description.toLowerCase().includes(O);if(!z&&!I)return!1}return!0}),P=[{key:"year",label:"Exam Year",options:p},{key:"semester",label:"Semester",options:g},{key:"examType",label:"Exam Type",options:v}];return l.jsxs("div",{className:"result-page-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(Kr,{className:"text-blue",size:32})," Examination Results"]}),l.jsx("p",{className:"page-subtitle",children:"Official KTU university result publication announcements and portal result login shortcuts."})]}),l.jsxs("div",{className:"disclaimer-banner card",children:[l.jsx(bn,{size:18,className:"text-blue"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Privacy Disclaimer:"})," This portal displays official result announcement notifications. Private marks and grade cards require authentic KTU e-Gov student login."]})]}),l.jsx(ir,{filters:P,filterValues:s,onFilterChange:N,onReset:j,searchQuery:o,onSearchChange:f,searchPlaceholder:"Search result announcements e.g. S4 Regular..."}),l.jsx("div",{className:"results-header-bar",children:l.jsxs("h3",{children:["Result Publication Announcements (",b.length,")"]})}),b.length===0?l.jsxs("div",{className:"empty-state card",children:[l.jsx(Kr,{size:48}),l.jsx("h3",{children:"No result announcements found for your selection."}),l.jsxs("button",{className:"btn btn-secondary",style:{marginTop:"16px"},onClick:j,children:[l.jsx(cn,{size:15})," Reset Filters"]})]}):l.jsx("div",{className:"result-cards-list",children:b.map(S=>l.jsxs("div",{className:"result-announcement-card card card-hover",children:[l.jsxs("div",{className:"result-card-top",children:[l.jsxs("div",{className:"result-tags",children:[l.jsxs("span",{className:"badge badge-normal",children:[S.semester," Semester"]}),l.jsx("span",{className:"badge badge-upcoming",children:S.examType}),l.jsxs("span",{className:"badge badge-urgent",children:["Year ",S.year]})]}),l.jsxs("div",{className:"result-pub-date",children:[l.jsx(Nt,{size:14})," Published: ",Ut(S.publishDate)]})]}),l.jsx("h3",{className:"result-card-title",children:S.title}),l.jsx("p",{className:"result-card-desc",children:S.description}),l.jsxs("div",{className:"result-card-footer",children:[l.jsxs("span",{className:"portal-notice",children:[l.jsx(St,{size:15,className:"text-green"})," Result Active on KTU Portal"]}),l.jsxs("a",{href:S.officialUrl,target:"_blank",rel:"noreferrer",className:"btn btn-primary",children:[l.jsx(Xn,{size:15})," Check Official KTU Result Portal"]})]})]},S.id))}),l.jsx("style",{children:`
        .result-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .result-cards-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .result-announcement-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .result-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .result-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .result-pub-date {
          font-size: 0.82rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .result-card-title {
          font-size: 1.25rem;
          color: var(--primary-navy);
        }

        .result-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .result-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .portal-notice {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--primary-navy);
        }

        .text-green { color: var(--success-green); }
      `})]})}function ch({user:s}){const[u,o]=E.useState({category:""}),[f,p]=E.useState(""),[g,v]=E.useState(null),[N,j]=E.useState(!1),[b,P]=E.useState(null),S=["Examination Registration","Supplementary Examination","Revaluation","Academic Applications","Other University Forms"],O=(A,$)=>{o(de=>({...de,[A]:$}))},z=()=>{o({category:""}),p("")},I=th.filter(A=>{if(u.category&&A.category!==u.category)return!1;if(f.trim()){const $=f.toLowerCase(),de=A.title.toLowerCase().includes($),fe=A.description.toLowerCase().includes($);if(!de&&!fe)return!1}return!0}),T=A=>{if(!A)return{label:"Open",badgeClass:"badge-success",icon:St};const $=er(A);return $.isPast?{label:"Closed",badgeClass:"badge-expired",icon:od}:$.urgency==="URGENT"||$.urgency==="WARNING"?{label:"Closing Soon",badgeClass:"badge-warning",icon:Km}:{label:"Open",badgeClass:"badge-success",icon:St}},C=A=>{v(A),j(!1)},K=A=>{A.preventDefault(),j(!0),setTimeout(()=>{j(!1),v(null)},2500)},Y=[{key:"category",label:"Form Category",options:S}];return l.jsxs("div",{className:"forms-page-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(kn,{className:"text-blue",size:32})," University Forms & Online Applications"]}),l.jsx("p",{className:"page-subtitle",children:"Official KTU examination registration, revaluation requests, supplementary applications, and certificate request forms."})]}),l.jsxs("div",{className:"disclaimer-banner card",children:[l.jsx(bn,{size:18,className:"text-blue"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Sample Forms:"})," Digital applications on KTU SmartHub are interactive interactive demonstrations for student guidance."]})]}),l.jsx(ir,{filters:Y,filterValues:u,onFilterChange:O,onReset:z,searchQuery:f,onSearchChange:p,searchPlaceholder:"Search forms e.g. Revaluation, Supplementary..."}),l.jsx("div",{className:"forms-results-header",children:l.jsxs("h3",{children:["Available University Forms (",I.length,")"]})}),I.length===0?l.jsxs("div",{className:"empty-state card",children:[l.jsx(kn,{size:48}),l.jsx("h3",{children:"No forms found for your selection."}),l.jsxs("button",{className:"btn btn-secondary",style:{marginTop:"16px"},onClick:z,children:[l.jsx(cn,{size:15})," Reset Filter"]})]}):l.jsx("div",{className:"forms-grid",children:I.map(A=>{const $=T(A.dueDate),de=$.icon,fe=A.dueDate?er(A.dueDate):null;return l.jsxs("div",{className:"form-card card card-hover",children:[l.jsxs("div",{className:"form-card-top",children:[l.jsx("span",{className:"badge badge-normal",children:A.category}),l.jsxs("span",{className:`badge ${$.badgeClass}`,children:[l.jsx(de,{size:13})," ",$.label]})]}),l.jsx("h3",{className:"form-card-title",children:A.title}),l.jsx("p",{className:"form-card-desc",children:A.description}),A.dueDate&&fe&&!fe.isPast&&l.jsxs("div",{className:"form-deadline-chip",children:[l.jsx(Nn,{size:14})," Deadline: ",Ut(A.dueDate)," (",fe.remainingText,")"]}),l.jsxs("div",{className:"form-card-footer",children:[A.pdfUrl&&l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P({title:A.title,pdfUrl:A.pdfUrl,fileName:`${A.id}.pdf`}),children:[l.jsx(mi,{size:14})," PDF Template"]}),l.jsx("button",{className:`btn ${$.label==="Closed"?"btn-secondary":"btn-primary"} btn-sm`,disabled:$.label==="Closed",onClick:()=>C(A),children:"Open Form & Apply"})]})]},A.id)})}),g&&l.jsx("div",{className:"modal-overlay",onClick:()=>v(null),children:l.jsxs("div",{className:"modal-container form-interactive-modal",onClick:A=>A.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsxs("div",{children:[l.jsx("span",{className:"badge badge-normal",children:g.category}),l.jsx("h3",{className:"modal-title",style:{marginTop:"4px"},children:g.title})]}),l.jsx("button",{className:"close-btn",onClick:()=>v(null),children:"×"})]}),l.jsx("div",{className:"modal-body",children:N?l.jsxs("div",{className:"submission-success-box",children:[l.jsx(St,{size:48,className:"text-green"}),l.jsx("h3",{children:"Application Submitted Successfully!"}),l.jsxs("p",{children:["Your demo application reference token has been generated: ",l.jsxs("strong",{children:["KTU-APP-",Date.now().toString().slice(-6)]})]})]}):l.jsxs("form",{onSubmit:K,className:"interactive-form",children:[l.jsxs("p",{className:"form-modal-sub",children:["Pre-filled with authenticated student details for ",l.jsx("strong",{children:(s==null?void 0:s.name)||Ne.name})," (",(s==null?void 0:s.registerNo)||Ne.registerNo,")."]}),g.formFields.map(A=>l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:A.label}),A.type==="select"?l.jsx("select",{className:"form-select",children:A.options.map($=>l.jsx("option",{value:$,children:$},$))}):l.jsx("input",{type:A.type,className:"form-input",defaultValue:A.defaultValue,required:!0})]},A.name)),l.jsxs("div",{className:"modal-footer",style:{padding:0,marginTop:"20px",background:"transparent"},children:[l.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>v(null),children:"Cancel"}),l.jsxs("button",{type:"submit",className:"btn btn-primary",children:[l.jsx($m,{size:16})," Submit Application"]})]})]})})]})}),l.jsx(Es,{isOpen:!!b,onClose:()=>P(null),document:b}),l.jsx("style",{children:`
        .forms-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .forms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .form-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .form-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .form-card-title {
          font-size: 1.15rem;
          color: var(--primary-navy);
          margin-bottom: 6px;
        }

        .form-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .form-deadline-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--urgent-red);
          background-color: var(--urgent-bg);
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          margin-bottom: 16px;
        }

        .form-card-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
          margin-top: 6px;
        }

        .form-card-footer .btn {
          flex: 1;
        }

        .form-interactive-modal {
          max-width: 580px;
        }

        .form-modal-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 18px;
          background-color: var(--light-blue-bg);
          padding: 10px;
          border-radius: var(--radius-sm);
        }

        .submission-success-box {
          text-align: center;
          padding: 36px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .submission-success-box h3 {
          font-size: 1.3rem;
          color: var(--primary-navy);
        }

        .text-green { color: var(--success-green); }
      `})]})}function uh(){const[s,u]=E.useState({category:""}),[o,f]=E.useState(""),[p,g]=E.useState("newest"),[v,N]=E.useState(null),j=["Examination","Registration","Academic","Results","Applications","General"],b=(z,I)=>{u(T=>({...T,[z]:I}))},P=()=>{u({category:""}),f(""),g("newest")};let S=dd.filter(z=>{if(s.category&&z.category!==s.category)return!1;if(o.trim()){const I=o.toLowerCase(),T=z.title.toLowerCase().includes(I),C=z.shortDescription.toLowerCase().includes(I),K=z.refNo?z.refNo.toLowerCase().includes(I):!1;if(!T&&!C&&!K)return!1}return!0});S.sort((z,I)=>{const T=new Date(z.publishDate).getTime(),C=new Date(I.publishDate).getTime();return p==="newest"?C-T:T-C});const O=[{key:"category",label:"Notification Category",options:j}];return l.jsxs("div",{className:"notifications-page-container",children:[l.jsxs("div",{className:"page-header-box",children:[l.jsxs("h1",{className:"page-title",children:[l.jsx(ci,{className:"text-blue",size:32})," Central University Notifications"]}),l.jsx("p",{className:"page-subtitle",children:"Official KTU circulars, examination schedules, result announcements, and administrative orders."})]}),l.jsxs("div",{className:"disclaimer-banner card",children:[l.jsx(bn,{size:18,className:"text-blue"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Sample Notices:"})," Notifications listed are verified sample records for KTU SmartHub portal demonstration."]})]}),l.jsxs("div",{className:"notif-filter-wrapper",children:[l.jsx(ir,{filters:O,filterValues:s,onFilterChange:b,onReset:P,searchQuery:o,onSearchChange:f,searchPlaceholder:"Search notifications by title or circular ref no..."}),l.jsx("div",{className:"sort-control-card card",children:l.jsxs("div",{className:"sort-group",children:[l.jsxs("label",{className:"form-label",style:{display:"flex",alignItems:"center",gap:"6px"},children:[l.jsx(Cm,{size:14})," Sort By Date"]}),l.jsxs("select",{className:"form-select",value:p,onChange:z=>g(z.target.value),children:[l.jsx("option",{value:"newest",children:"Newest First"}),l.jsx("option",{value:"oldest",children:"Oldest First"})]})]})})]}),l.jsx("div",{className:"notifs-results-header",children:l.jsxs("h3",{children:["University Notifications (",S.length,")"]})}),S.length===0?l.jsxs("div",{className:"empty-state card",children:[l.jsx(ci,{size:48}),l.jsx("h3",{children:"No notifications found for your search query."}),l.jsxs("button",{className:"btn btn-secondary",style:{marginTop:"16px"},onClick:P,children:[l.jsx(cn,{size:15})," Reset Filters"]})]}):l.jsx("div",{className:"notifs-grid",children:S.map(z=>l.jsxs("div",{className:"notif-card card card-hover",onClick:()=>N(z),children:[l.jsxs("div",{className:"notif-card-header",children:[l.jsxs("div",{className:"notif-badge-group",children:[l.jsx("span",{className:"badge badge-normal",children:z.category}),z.isNew&&l.jsx("span",{className:"badge badge-urgent",children:"NEW"})]}),l.jsxs("div",{className:"notif-date-badge",children:[l.jsx(Nt,{size:13})," ",Ut(z.publishDate)]})]}),l.jsx("h3",{className:"notif-card-title",children:z.title}),l.jsx("p",{className:"notif-card-desc",children:z.shortDescription}),l.jsxs("div",{className:"notif-card-footer",children:[l.jsx("span",{className:"ref-number",children:z.refNo}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:I=>{I.stopPropagation(),N(z)},children:["View Details ",l.jsx(It,{size:14})]})]})]},z.id))}),l.jsx(fd,{isOpen:!!v,onClose:()=>N(null),item:v,type:"notification"}),l.jsx("style",{children:`
        .notifications-page-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .notif-filter-wrapper {
          display: flex;
          gap: 16px;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .notif-filter-wrapper .filter-bar-card {
          flex: 1;
          margin-bottom: 0;
        }

        .sort-control-card {
          min-width: 200px;
          padding: 20px;
          margin-bottom: 0;
          background-color: #ffffff;
        }

        .notifs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .notif-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .notif-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .notif-badge-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .notif-date-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .notif-card-title {
          font-size: 1.1rem;
          color: var(--primary-navy);
          margin-bottom: 8px;
          line-height: 1.35;
        }

        .notif-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .notif-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
        }

        .ref-number {
          font-size: 0.76rem;
          color: var(--text-light);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .notif-filter-wrapper {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `})]})}function dh(){const[s,u]=E.useState(()=>{try{const g=localStorage.getItem("ktu_user_session");return g?JSON.parse(g):null}catch(g){return console.error("Failed to parse user session",g),null}}),o=g=>{const v=g||Ne;u(v);try{localStorage.setItem("ktu_user_session",JSON.stringify(v))}catch(N){console.error("Failed to save user session",N)}},f=()=>{u(null);try{localStorage.removeItem("ktu_user_session")}catch(g){console.error("Failed to remove user session",g)}},p=g=>{u(g);try{localStorage.setItem("ktu_user_session",JSON.stringify(g))}catch(v){console.error("Failed to update user session",v)}};return l.jsx(gm,{children:l.jsxs("div",{className:"app-container",children:[s&&l.jsx(Ym,{user:s,onLogout:f}),l.jsx("main",{className:"main-content",children:l.jsxs(om,{children:[l.jsx(Be,{path:"/login",element:s?l.jsx(vs,{to:"/",replace:!0}):l.jsx(nh,{onLogin:o})}),l.jsx(Be,{path:"/",element:l.jsx(nt,{user:s,children:l.jsx(ih,{user:s})})}),l.jsx(Be,{path:"/student",element:l.jsx(nt,{user:s,children:l.jsx(ah,{})})}),l.jsx(Be,{path:"/student/pyq",element:l.jsx(nt,{user:s,children:l.jsx(Bu,{})})}),l.jsx(Be,{path:"/pyq",element:l.jsx(nt,{user:s,children:l.jsx(Bu,{})})}),l.jsx(Be,{path:"/student/mock-test",element:l.jsx(nt,{user:s,children:l.jsx(Vu,{})})}),l.jsx(Be,{path:"/mock-test",element:l.jsx(nt,{user:s,children:l.jsx(Vu,{})})}),l.jsx(Be,{path:"/student/academic-calendar",element:l.jsx(nt,{user:s,children:l.jsx(Qu,{})})}),l.jsx(Be,{path:"/academic-calendar",element:l.jsx(nt,{user:s,children:l.jsx(Qu,{})})}),l.jsx(Be,{path:"/student/profile",element:l.jsx(nt,{user:s,children:l.jsx(qu,{user:s,onUpdateUser:p})})}),l.jsx(Be,{path:"/profile",element:l.jsx(nt,{user:s,children:l.jsx(qu,{user:s,onUpdateUser:p})})}),l.jsx(Be,{path:"/exam",element:l.jsx(nt,{user:s,children:l.jsx(sh,{})})}),l.jsx(Be,{path:"/result",element:l.jsx(nt,{user:s,children:l.jsx(oh,{})})}),l.jsx(Be,{path:"/forms",element:l.jsx(nt,{user:s,children:l.jsx(ch,{user:s})})}),l.jsx(Be,{path:"/notifications",element:l.jsx(nt,{user:s,children:l.jsx(uh,{})})}),l.jsx(Be,{path:"*",element:l.jsx(vs,{to:s?"/":"/login",replace:!0})})]})}),s&&l.jsx(Gm,{})]})})}jp.createRoot(document.getElementById("root")).render(l.jsx(Wu.StrictMode,{children:l.jsx(dh,{})}));
