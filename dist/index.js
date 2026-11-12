"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=l(function(S,d){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-strides/dist'),f=require('@stdlib/ndarray-base-stride/dist'),n=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/blas-base-strsv/dist').ndarray;function p(e){var r,a,s,v,t,i;return i=e[0],t=e[1],s=u(e[2]),r=u(e[3]),a=u(e[4]),v=c(i,!1),m(s,r,a,o(i,0),q(i),v[0],v[1],n(i),q(t),f(t,0),n(t)),t}d.exports=p
});var x=g();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
