"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(l,i){
var u=require('@stdlib/assert-is-nonnegative-integer-array/dist').primitives,t=require('@stdlib/error-tools-fmtprodmsg/dist'),v=require('@stdlib/time-tic/dist');function g(r){var e=v(),a,n;if(!u(r))throw new TypeError(t('1QbAe',r));if(r.length!==2)throw new RangeError(t('1QbAf',r));return a=e[0]-r[0],n=e[1]-r[1],a>0&&n<0?(a-=1,n+=1e9):a<0&&n>0&&(a+=1,n-=1e9),[a,n]}i.exports=g
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
