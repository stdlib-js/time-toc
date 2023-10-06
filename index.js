// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,y,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var j=String.fromCharCode,x=isNaN,T=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,i,n,o,c,l,p,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,p=0;p<e.length;p++)if(u(i=e[p]))c+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,x(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=_(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),c+=i.arg||"",l+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=O.exec(e);i;)(r=e.slice(n,O.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=O.lastIndex,i=O.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function F(e){var r,t,i;if(!A(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return I.apply(null,t)}var P=Object.prototype,N=P.toString,C=P.__defineGetter__,R=P.__defineSetter__,G=P.__lookupGetter__,L=P.__lookupSetter__,Z=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&R&&R.call(e,r,t.set),e};function W(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return U&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=q()?function(e){var r,t,i,n,a;if(null==e)return Q.call(e);t=e[z],a=z,r=null!=(n=e)&&X.call(n,a);try{e[z]=void 0}catch(r){return Q.call(e)}return i=Q.call(e),r?e[z]=t:delete e[z],i}:function(e){return Q.call(e)},D=Number,H=D.prototype.toString,J=q();function K(e){return"object"==typeof e&&(e instanceof D||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===B(e)))}function ee(e){return M(e)||K(e)}W(ee,"isPrimitive",M),W(ee,"isObject",K);var re=Number.POSITIVE_INFINITY,te=D.NEGATIVE_INFINITY,ie=Math.floor;function ne(e){return ie(e)===e}function ae(e){return e<re&&e>te&&ne(e)}function oe(e){return M(e)&&ae(e)}function ce(e){return K(e)&&ae(e.valueOf())}function se(e){return oe(e)||ce(e)}function ue(e){return oe(e)&&e>=0}function le(e){return ce(e)&&e.valueOf()>=0}function pe(e){return ue(e)||le(e)}function fe(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&ne(e.length)&&e.length>=0&&e.length<=4294967295}(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}W(se,"isPrimitive",oe),W(se,"isObject",ce),W(pe,"isPrimitive",ue),W(pe,"isObject",le);var ge=fe(pe.isPrimitive),de=fe(pe.isObject),he=fe(pe);function be(){var e,r=arguments,t=r[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)i+="&arg[]="+encodeURIComponent(r[e]);return i}W(he,"primitives",ge),W(he,"objects",de);var ye=e;return function(e){var r,t,i=ye.hrtime();if(!ge(e))throw new TypeError(be("1QbAe,LS",e));if(2!==e.length)throw new RangeError(be("1QbAf,LT",e));return r=i[0]-e[0],t=i[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).toc=r(e.require$$0);
//# sourceMappingURL=index.js.map
