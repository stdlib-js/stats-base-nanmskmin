// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e};var f=e;function c(e){return e!=e}var _=Number.NEGATIVE_INFINITY;function p(e){return 0===e&&1/e===_}function d(e,r,t,n,o){var a,i,u,l,f;if(e<=0)return NaN;for(i=t<0?(1-e)*t:0,u=o<0?(1-e)*o:0,f=0;f<e&&((l=r[i])!=l||0!==n[u]);f++)i+=t,u+=o;if(f===e)return NaN;for(a=l,f+=1;f<e;f++)i+=t,n[u+=o]||c(l=r[i])||(l<a||l===a&&p(l))&&(a=l);return a}return f(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n,o,a,i){var u,l,f,_,d;if(e<=0)return NaN;for(l=n,f=i,d=0;d<e&&((_=r[l])!=_||0!==o[f]);d++)l+=t,f+=a;if(d===e)return NaN;for(u=_,d+=1;d<e;d++)l+=t,o[f+=a]||c(_=r[l])||(_<u||_===u&&p(_))&&(u=_);return u}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanmskmin=r();
//# sourceMappingURL=browser.js.map
