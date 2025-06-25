"use strict";var y=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var p=y(function(K,l){
var w=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-assert-is-negative-zero/dist');function A(e,i,v,x,o,s,b){var u,t,c,q,f,r,a,n,m;for(u=i.data,c=o.data,t=i.accessors[0],q=o.accessors[0],r=x,a=b,m=0;m<e&&(n=t(u,r),!(n===n&&q(c,a)===0));m++)r+=v,a+=s;if(m===e)return NaN;for(f=n,m+=1,m;m<e;m++)r+=v,a+=s,!q(c,a)&&(n=t(u,r),!w(n)&&(n<f||n===f&&z(n))&&(f=n));return f}l.exports=A
});var g=y(function(L,Z){
var B=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-negative-zero/dist'),P=require('@stdlib/array-base-arraylike2object/dist'),D=p();function E(e,i,v,x,o,s,b){var u,t,c,q,f,r,a;if(e<=0)return NaN;if(q=P(i),f=P(o),q.accessorProtocol||f.accessorProtocol)return D(e,q,v,x,f,s,b);for(t=x,c=b,a=0;a<e&&(r=i[t],!(r===r&&o[c]===0));a++)t+=v,c+=s;if(a===e)return NaN;for(u=r,a+=1,a;a<e;a++)t+=v,c+=s,!o[c]&&(r=i[t],!B(r)&&(r<u||r===u&&C(r))&&(u=r));return u}Z.exports=E
});var R=y(function(N,O){
var j=require('@stdlib/strided-base-stride2offset/dist'),F=g();function G(e,i,v,x,o){var s=j(e,o),b=j(e,v);return F(e,i,v,b,x,o,s)}O.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),I=g();H(h,"ndarray",I);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
