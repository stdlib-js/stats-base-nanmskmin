// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";var n=e,s=t;var a=e,i=t;var o=function(r,e,t,a,i){var o,d,f,m,u;if(r<=0)return NaN;for(d=t<0?(1-r)*t:0,f=i<0?(1-r)*i:0,u=0;u<r&&((m=e[d])!=m||0!==a[f]);u++)d+=t,f+=i;if(u===r)return NaN;for(o=m,u+=1;u<r;u++)d+=t,a[f+=i]||(m=e[d],n(m)||(m<o||m===o&&s(m))&&(o=m));return o};r(o,"ndarray",(function(r,e,t,n,s,o,d){var f,m,u,l,v;if(r<=0)return NaN;for(m=n,u=d,v=0;v<r&&((l=e[m])!=l||0!==s[u]);v++)m+=t,u+=o;if(v===r)return NaN;for(f=l,v+=1;v<r;v++)m+=t,s[u+=o]||(l=e[m],a(l)||(l<f||l===f&&i(l))&&(f=l));return f}));var d=o;export{d as default};
//# sourceMappingURL=index.mjs.map
