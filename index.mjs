// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/time-tic@esm/index.mjs";function s(s){var n,i,o=r();if(!t(s))throw new TypeError(e("0i9BM",s));if(2!==s.length)throw new RangeError(e("invalid argument. Input array must contain two elements. Value: `%s`.",s));return n=o[0]-s[0],i=o[1]-s[1],n>0&&i<0?(n-=1,i+=1e9):n<0&&i>0&&(n+=1,i-=1e9),[n,i]}export{s as default};
//# sourceMappingURL=index.mjs.map
