// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/time-tic@v0.2.1-esm/index.mjs";function s(s){var i,n,o=t();if(!e(s))throw new TypeError(r("1QbAe",s));if(2!==s.length)throw new RangeError(r("1QbAf",s));return i=o[0]-s[0],n=o[1]-s[1],i>0&&n<0?(i-=1,n+=1e9):i<0&&n>0&&(i+=1,n-=1e9),[i,n]}export{s as default};
//# sourceMappingURL=index.mjs.map
