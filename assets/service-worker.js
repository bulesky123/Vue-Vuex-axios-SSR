"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/assets/css/common.387598ae874dd5716761.css","d76e84bee33615d9c2f34e64b4eb5a38"],["/assets/js/0.d2daa19751f85de12e1d.js","e492943a22a18b59fa040e94e908a7dc"],["/assets/js/1.6e3d48efa6a1fec884fd.js","a601471e0c39ed27bfce2b81d742ea35"],["/assets/js/2.18e5bac323c205796d49.js","eccc46860c33efee6268a5338486459c"],["/assets/js/3.c299a5f8bda21fc21fdd.js","cf4104349321c63ff52cb8473f6a8608"],["/assets/js/4.2ba8b0ea69ab323082d9.js","33931d1563d8c04ec79da78166c205cb"],["/assets/js/5.95f3fcb64e74ab55624c.js","5f066e9ec192e6c0bdcd84d4a27a9cd9"],["/assets/js/app.387598ae874dd5716761.js","8c3afd3c3e3360a10a7c87b77904d9a6"],["/assets/js/manifest.6a5fd1fc2b981fe18281.js","3784e8317c89bb2aec28807bbf7e2210"],["/assets/js/vendor.f1900eede566b13fec5c.js","0e81e1252f7196203b4be19341748df5"],["/assets/public/logo-120.png","55e35e95d673d6b9e53e0e696cf9a553"],["/assets/public/logo-144.png","f0170a92ee640a1e1b89089f2e3ac8ac"],["/assets/public/logo-152.png","dc9e52708bbdc7b81e56e49cf427111a"],["/assets/public/logo-192.png","14ac5a9d514b5033fdb5cb8b58f82135"],["/assets/public/logo-256.png","da4fc4c05d16915d707045b0331e7f69"],["/assets/public/logo-384.png","fbb09f53254b91bcbd2f54b63b681720"],["/assets/public/logo-48.png","3c4042394dca3b62462322757eb56b6b"],["/assets/public/logo-512.png","93e59fdb68d54fe7cb5deb9ca9b5806d"]],cacheName="sw-precache-v3-vue-hn-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,/./);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var i="function"==typeof require&&require;if(!c&&i)return i(a,!0);if(s)return s(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){function r(e,t){t=t||{},(t.debug||m.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function s(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&a(e,n,r)})}),r.clone()})}function a(e,t,n){var r=c.bind(null,e,t,n);d=d?d.then(r):r()}function c(e,t,n){var o=e.url,s=n.maxAgeSeconds,a=n.maxEntries,c=n.name,i=Date.now();return r("Updating LRU order for "+o+". Max entries is "+a+", max age is "+s),g.getDb(c).then(function(e){return g.setTimestampForUrl(e,o,i)}).then(function(e){return g.expireEntries(e,a,s,i)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function i(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||l(e),m.preCacheItems=m.preCacheItems.concat(e)}function l(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function p(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:s,openCache:o,renameCache:i,cache:u,uncache:f,precache:h,validatePrecacheInput:l,isResponseFresh:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){r.result.createObjectStore(h,{keyPath:l}).createIndex(p,p,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function s(e,t,n){return new Promise(function(r,o){var s=e.transaction(h,"readwrite");s.objectStore(h).put({url:t,timestamp:n}),s.oncomplete=function(){r(e)},s.onabort=function(){o(s.error)}})}function a(e,t,n){return t?new Promise(function(r,o){var s=1e3*t,a=[],c=e.transaction(h,"readwrite"),i=c.objectStore(h);i.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[p]){var r=t.value[l];a.push(r),i.delete(r),t.continue()}},c.oncomplete=function(){r(a)},c.onabort=o}):Promise.resolve([])}function c(e,t){return t?new Promise(function(n,r){var o=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),c=a.index(p),i=c.count();c.count().onsuccess=function(){var e=i.result;e>t&&(c.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var s=r.value[l];o.push(s),a.delete(s),e-o.length>t&&r.continue()}})},s.oncomplete=function(){n(o)},s.onabort=r}):Promise.resolve([])}function i(e,t,n,r){return a(e,n,r).then(function(n){return c(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",l="url",p="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:s,expireEntries:i}},{}],3:[function(e,t,n){function r(e){var t=i.match(e.request);t?e.respondWith(t(e.request)):i.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(i.default(e.request))}function o(e){c.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,u.cache.name))}function s(e){return e.reduce(function(e,t){return e.concat(t)},[])}function a(e){var t=u.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(s).then(c.validatePrecacheInput).then(function(t){return c.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var c=e("./helpers"),i=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:a}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location),o=r.pathname,s=e("path-to-regexp"),a=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=s(t,this.keys)),this.method=e,this.options=r,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),s=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,a){a=a||{};var c;t instanceof RegExp?c=RegExp:(c=a.origin||self.location.origin,c=c instanceof RegExp?c.source:r(c)),e=e.toLowerCase();var i=new o(e,t,n,a);this.routes.has(c)||this.routes.set(c,new Map);var u=this.routes.get(c);u.has(e)||u.set(e,new Map);var f=u.get(e),h=i.regexp||i.fullUrlRegExp;f.has(h.source)&&s.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,i)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],s=o&&o.get(e.toLowerCase());if(s){var c=a(s,n);if(c.length>0)return c[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){function r(e,t,n){return n=n||{},s.debug("Strategy: cache first ["+e.url+"]",n),s.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,a=Date.now();return s.isResponseFresh(t,r.maxAgeSeconds,a)?t:s.fetchAndCache(e,n)})})}var o=e("../options"),s=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){function r(e,t,n){return n=n||{},s.debug("Strategy: cache only ["+e.url+"]",n),s.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(s.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),s=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,a){var c=!1,i=[],u=function(e){i.push(e.toString()),c?a(new Error('Both cache and network failed: "'+i.join('", "')+'"')):c=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),s(e,t,n).then(f,u)})}var o=e("../helpers"),s=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,a=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return s.debug("Strategy: network first ["+e.url+"]",n),s.openCache(n).then(function(t){var c,i,u=[];if(a){var f=new Promise(function(r){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,a=Date.now(),c=t.maxAgeSeconds;s.isResponseFresh(e,c,a)&&r(e)})},1e3*a)});u.push(f)}var h=s.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),r.test(e.status))return e;throw s.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return s.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),s=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),s=e("./helpers"),a=e("./strategies"),c=e("./listeners");s.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:a.networkOnly,networkFirst:a.networkFirst,cacheOnly:a.cacheOnly,cacheFirst:a.cacheFirst,fastest:a.fastest,router:o,options:r,cache:s.cache,uncache:s.uncache,precache:s.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,s=0,a="",c=t&&t.delimiter||"/";null!=(n=b.exec(e));){var f=n[0],h=n[1],l=n.index;if(a+=e.slice(s,l),s=l+f.length,h)a+=h[1];else{var p=e[s],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],x=n[7];a&&(r.push(a),a="");var y=null!=d&&null!=p&&p!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,C=n[2]||c,k=g||v;r.push({name:m||o++,prefix:d||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!x,pattern:k?u(k):x?".*":"[^"+i(C)+"]+?"})}}return s<e.length&&(a+=e.substr(s)),a&&r.push(a),r}function o(e,t){return c(r(e,t))}function s(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",c=n||{},i=r||{},u=i.pretty?s:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var l,p=c[h.name];if(null==p){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(p)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!t[f].test(l))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===d?h.prefix:h.delimiter)+l}}else{if(l=h.asterisk?a(p):u(p),!t[f].test(l))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+l+'"');o+=h.prefix+l}}else o+=h}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function l(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function p(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,s="",a=0;a<e.length;a++){var c=e[a];if("string"==typeof c)s+=i(c);else{var u=i(c.prefix),l="(?:"+c.pattern+")";t.push(c),c.repeat&&(l+="(?:"+u+l+")*"),l=c.optional?c.partial?u+"("+l+")?":"(?:"+u+"("+l+"))?":u+"("+l+")",s+=l}}var p=i(n.delimiter||"/"),d=s.slice(-p.length)===p;return r||(s=(d?s.slice(0,-p.length):s)+"(?:"+p+"(?=$))?"),s+=o?"$":r&&d?"":"(?="+p+"|$)",f(new RegExp("^"+s,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?l(e,t):v(e)?p(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=c,t.exports.tokensToRegExp=m;var b=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/",toolbox.networkFirst,{}),toolbox.router.get(/\/(top|new|show|ask|jobs)/,toolbox.networkFirst,{}),toolbox.router.get("/item/:id",toolbox.networkFirst,{}),toolbox.router.get("/user/:id",toolbox.networkFirst,{});