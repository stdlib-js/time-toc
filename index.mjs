// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/time-tic@v0.1.1-esm/index.mjs";function n(n){var i,s,a=r();if(!e(n))throw new TypeError(t("invalid argument. Must provide an array of nonnegative integers. Value: `%s`.",n));if(2!==n.length)throw new RangeError(t("invalid argument. Input array must contain two elements. Value: `%s`.",n));return i=a[0]-n[0],s=a[1]-n[1],i>0&&s<0?(i-=1,s+=1e9):i<0&&s>0&&(i+=1,s-=1e9),[i,s]}export{n as default};
//# sourceMappingURL=index.mjs.map