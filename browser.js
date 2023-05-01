// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).toc=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var l,f,s,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(e,t)||a.call(e,t)?(l=e.__proto__,e.__proto__=r,delete e[t],e[t]=c.value,e.__proto__=l):e[t]=c.value),s="get"in c,p="set"in c,f&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(e,t,c.get),p&&i&&i.call(e,t,c.set),e};function l(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"number"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;var v="function"==typeof Symbol?Symbol.toStringTag:"";var d=p()?function(e){var t,r,n,o,i;if(null==e)return m.call(e);r=e[v],i=v,t=null!=(o=e)&&y.call(o,i);try{e[v]=void 0}catch(t){return m.call(e)}return n=m.call(e),t?e[v]=r:delete e[v],n}:function(e){return m.call(e)},b=Number,h=b.prototype.toString;var g=p();function w(e){return"object"==typeof e&&(e instanceof b||(g?function(e){try{return h.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function _(e){return f(e)||w(e)}l(_,"isPrimitive",f),l(_,"isObject",w);var T=Number.POSITIVE_INFINITY,j=b.NEGATIVE_INFINITY,O=Math.floor;function E(e){return O(e)===e}function P(e){return e<T&&e>j&&E(e)}function S(e){return f(e)&&P(e)}function N(e){return w(e)&&P(e.valueOf())}function I(e){return S(e)||N(e)}function k(e){return S(e)&&e>=0}function M(e){return N(e)&&e.valueOf()>=0}function A(e){return k(e)||M(e)}l(I,"isPrimitive",S),l(I,"isObject",N),l(A,"isPrimitive",k),l(A,"isObject",M);function L(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&E(e.length)&&e.length>=0&&e.length<=4294967295}(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}var V=L(A.isPrimitive),x=L(A.isObject),D=L(A);function F(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}function G(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(t,r);return new n}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}l(D,"primitives",V),l(D,"objects",x);var z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function C(){throw new Error("setTimeout has not been defined")}function R(){throw new Error("clearTimeout has not been defined")}var Y=C,B=R;function U(e){if(Y===setTimeout)return setTimeout(e,0);if((Y===C||!Y)&&setTimeout)return Y=setTimeout,setTimeout(e,0);try{return Y(e,0)}catch(t){try{return Y.call(null,e,0)}catch(t){return Y.call(this,e,0)}}}"function"==typeof z.setTimeout&&(Y=setTimeout),"function"==typeof z.clearTimeout&&(B=clearTimeout);var q,H=[],J=!1,K=-1;function Q(){J&&q&&(J=!1,q.length?H=q.concat(H):K=-1,H.length&&W())}function W(){if(!J){var e=U(Q);J=!0;for(var t=H.length;t;){for(q=H,H=[];++K<t;)q&&q[K].run();K=-1,t=H.length}q=null,J=!1,function(e){if(B===clearTimeout)return clearTimeout(e);if((B===R||!B)&&clearTimeout)return B=clearTimeout,clearTimeout(e);try{B(e)}catch(t){try{return B.call(null,e)}catch(t){return B.call(this,e)}}}(e)}}function X(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];H.push(new Z(e,t)),1!==H.length||J||U(W)}function Z(e,t){this.fun=e,this.array=t}Z.prototype.run=function(){this.fun.apply(null,this.array)};var $="browser",ee="browser",te={},re=[],ne={},oe={},ie={};function ue(){}var ae=ue,ce=ue,le=ue,fe=ue,se=ue,pe=ue,me=ue;function ye(e){throw new Error("process.binding is not supported")}function ve(){return"/"}function de(e){throw new Error("process.chdir is not supported")}function be(){return 0}var he=z.performance||{},ge=he.now||he.mozNow||he.msNow||he.oNow||he.webkitNow||function(){return(new Date).getTime()};function we(e){var t=.001*ge.call(he),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var _e=new Date;function Te(){return(new Date-_e)/1e3}var je={nextTick:X,title:$,browser:true,env:te,argv:re,version:"",versions:ne,on:ae,addListener:ce,once:le,off:fe,removeListener:se,removeAllListeners:pe,emit:me,binding:ye,cwd:ve,chdir:de,umask:be,hrtime:we,platform:ee,release:oe,config:ie,uptime:Te},Oe=G(Object.freeze({__proto__:null,addListener:ce,argv:re,binding:ye,browser:true,chdir:de,config:ie,cwd:ve,default:je,emit:me,env:te,hrtime:we,nextTick:X,off:fe,on:ae,once:le,platform:ee,release:oe,removeAllListeners:pe,removeListener:se,title:$,umask:be,uptime:Te,version:"",versions:ne}));return function(e){var t,r,n=Oe.hrtime();if(!V(e))throw new TypeError(F("0i9BM",e));if(2!==e.length)throw new RangeError(F("invalid argument. Input array must contain two elements. Value: `%s`.",e));return t=n[0]-e[0],r=n[1]-e[1],t>0&&r<0?(t-=1,r+=1e9):t<0&&r>0&&(t+=1,r-=1e9),[t,r]}}));
//# sourceMappingURL=browser.js.map
