"use strict";var q=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var p=q(function(C,s){
var N=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-negative-zero/dist');function O(e,a,o,m,c){var v,f,n,r,i;if(e<=0)return NaN;for(o<0?f=(1-e)*o:f=0,c<0?n=(1-e)*c:n=0,i=0;i<e&&(r=a[f],!(r===r&&m[n]===0));i++)f+=o,n+=c;if(i===e)return NaN;for(v=r,i+=1,i;i<e;i++)f+=o,n+=c,!m[n]&&(r=a[f],!N(r)&&(r<v||r===v&&Z(r))&&(v=r));return v}s.exports=O
});var l=q(function(D,x){
var R=require('@stdlib/math-base-assert-is-nan/dist'),h=require('@stdlib/math-base-assert-is-negative-zero/dist');function j(e,a,o,m,c,v,f){var n,r,i,u,t;if(e<=0)return NaN;for(r=m,i=f,t=0;t<e&&(u=a[r],!(u===u&&c[i]===0));t++)r+=o,i+=v;if(t===e)return NaN;for(n=u,t+=1,t;t<e;t++)r+=o,i+=v,!c[i]&&(u=a[r],!R(u)&&(u<n||u===n&&h(u))&&(n=u));return n}x.exports=j
});var g=q(function(E,b){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),z=l();w(y,"ndarray",z);b.exports=y
});var A=g();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
