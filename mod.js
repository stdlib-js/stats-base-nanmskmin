// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var b=function(r){return r!=r},v=Number.NEGATIVE_INFINITY;var y=function(r){return 0===r&&1/r===v};function d(r,e,t,n,o){var a,u,i,l,c;if(r<=0)return NaN;for(u=t<0?(1-r)*t:0,i=o<0?(1-r)*o:0,c=0;c<r&&((l=e[u])!=l||0!==n[i]);c++)u+=t,i+=o;if(c===r)return NaN;for(a=l,c+=1;c<r;c++)u+=t,n[i+=o]||(l=e[u],b(l)||(l<a||l===a&&y(l))&&(a=l));return a}function s(r,e,t,n,o,a,u){var i,l,c,f,_;if(r<=0)return NaN;for(l=n,c=u,_=0;_<r&&((f=e[l])!=f||0!==o[c]);_++)l+=t,c+=a;if(_===r)return NaN;for(i=f,_+=1;_<r;_++)l+=t,o[c+=a]||(f=e[l],b(f)||(f<i||f===i&&y(f))&&(i=f));return i}p(d,"ndarray",s);export{d as default,s as ndarray};
//# sourceMappingURL=mod.js.map
