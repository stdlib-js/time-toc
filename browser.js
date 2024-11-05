// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).toc=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,m=/\.0*e/,b=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=f.call(n,b,"$1e"),n=f.call(n,m,"e"),n=f.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),e.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):s.call(n)}function y(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,T=Array.isArray;function E(e){return e!=e}function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,u,s,l,f,p,g,d,h;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+y(h):y(h)+p)),u+=n.arg||"",s+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=S.exec(e);n;)(r=e.slice(i,S.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=S.lastIndex,n=S.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var P=Object.prototype,V=P.toString,A=P.__defineGetter__,N=P.__defineSetter__,F=P.__lookupGetter__,$=P.__lookupSetter__;var L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(F.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&A&&A.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};function R(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return M&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var W="function"==typeof Symbol?Symbol:void 0,z="function"==typeof W?W.toStringTag:"";var U=G()?function(e){var r,t,n,i,o;if(null==e)return Z.call(e);t=e[z],o=z,r=null!=(i=e)&&D.call(i,o);try{e[z]=void 0}catch(r){return Z.call(e)}return n=Z.call(e),r?e[z]=t:delete e[z],n}:function(e){return Z.call(e)},Q=Number,X=Q.prototype.toString;var Y=G();function q(e){return"object"==typeof e&&(e instanceof Q||(Y?function(e){try{return X.call(e),!0}catch(e){return!1}}(e):"[object Number]"===U(e)))}function B(e){return C(e)||q(e)}R(B,"isPrimitive",C),R(B,"isObject",q);var H=Number.POSITIVE_INFINITY,J=Q.NEGATIVE_INFINITY,K=Math.floor;function ee(e){return K(e)===e}function re(e){return e<H&&e>J&&ee(e)}function te(e){return C(e)&&re(e)}function ne(e){return q(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function oe(e){return te(e)&&e>=0}function ae(e){return ne(e)&&e.valueOf()>=0}function ce(e){return oe(e)||ae(e)}R(ie,"isPrimitive",te),R(ie,"isObject",ne),R(ce,"isPrimitive",oe),R(ce,"isObject",ae);var ue=4294967295;function se(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!function(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&ee(e.length)&&e.length>=0&&e.length<=ue}(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}var le=se(ce.isPrimitive),fe=se(ce.isObject),pe=se(ce);function ge(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function de(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}R(pe,"primitives",le),R(pe,"objects",fe);var he="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function ve(){throw new Error("setTimeout has not been defined")}function me(){throw new Error("clearTimeout has not been defined")}var be=ve,we=me;function ye(e){if(be===setTimeout)return setTimeout(e,0);if((be===ve||!be)&&setTimeout)return be=setTimeout,setTimeout(e,0);try{return be(e,0)}catch(r){try{return be.call(null,e,0)}catch(r){return be.call(this,e,0)}}}"function"==typeof he.setTimeout&&(be=setTimeout),"function"==typeof he.clearTimeout&&(we=clearTimeout);var _e,Te=[],Ee=!1,je=-1;function ke(){Ee&&_e&&(Ee=!1,_e.length?Te=_e.concat(Te):je=-1,Te.length&&Se())}function Se(){if(!Ee){var e=ye(ke);Ee=!0;for(var r=Te.length;r;){for(_e=Te,Te=[];++je<r;)_e&&_e[je].run();je=-1,r=Te.length}_e=null,Ee=!1,function(e){if(we===clearTimeout)return clearTimeout(e);if((we===me||!we)&&clearTimeout)return we=clearTimeout,clearTimeout(e);try{return we(e)}catch(r){try{return we.call(null,e)}catch(r){return we.call(this,e)}}}(e)}}function xe(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Te.push(new Oe(e,r)),1!==Te.length||Ee||ye(Se)}function Oe(e,r){this.fun=e,this.array=r}Oe.prototype.run=function(){this.fun.apply(null,this.array)};var Ie="browser",Pe="browser",Ve={},Ae=[],Ne={},Fe={},$e={};function Le(){}var Re=Le,Ce=Le,Me=Le,Ge=Le,Ze=Le,De=Le,We=Le;function ze(e){throw new Error("process.binding is not supported")}function Ue(){return"/"}function Qe(e){throw new Error("process.chdir is not supported")}function Xe(){return 0}var Ye=he.performance||{},qe=Ye.now||Ye.mozNow||Ye.msNow||Ye.oNow||Ye.webkitNow||function(){return(new Date).getTime()};function Be(e){var r=.001*qe.call(Ye),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var He=new Date;function Je(){return(new Date-He)/1e3}var Ke={nextTick:xe,title:Ie,browser:true,env:Ve,argv:Ae,version:"",versions:Ne,on:Re,addListener:Ce,once:Me,off:Ge,removeListener:Ze,removeAllListeners:De,emit:We,binding:ze,cwd:Ue,chdir:Qe,umask:Xe,hrtime:Be,platform:Pe,release:Fe,config:$e,uptime:Je},er=de(Object.freeze({__proto__:null,addListener:Ce,argv:Ae,binding:ze,browser:true,chdir:Qe,config:$e,cwd:Ue,default:Ke,emit:We,env:Ve,hrtime:Be,nextTick:xe,off:Ge,on:Re,once:Me,platform:Pe,release:Fe,removeAllListeners:De,removeListener:Ze,title:Ie,umask:Xe,uptime:Je,version:"",versions:Ne}));return function(e){var r,t,n=er.hrtime();if(!le(e))throw new TypeError(ge("1QbAe",e));if(2!==e.length)throw new RangeError(ge("1QbAf",e));return r=n[0]-e[0],t=n[1]-e[1],r>0&&t<0?(r-=1,t+=1e9):r<0&&t>0&&(r+=1,t-=1e9),[r,t]}}));
//# sourceMappingURL=browser.js.map
