!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){n(8),e.exports=n(4)},function(e,t,n){"use strict";function r(){}function o(e){try{return e.then}catch(e){return m=e,b}}function i(e,t){try{return e(t)}catch(e){return m=e,b}}function a(e,t,n){try{e(t,n)}catch(e){return m=e,b}}function s(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._45=0,this._81=0,this._65=null,this._54=null,e!==r&&p(e,this)}function u(e,t,n){return new e.constructor(function(o,i){var a=new s(r);a.then(o,i),l(e,new h(t,n,a))})}function l(e,t){for(;3===e._81;)e=e._65;return s._10&&s._10(e),0===e._81?0===e._45?(e._45=1,void(e._54=t)):1===e._45?(e._45=2,void(e._54=[e._54,t])):void e._54.push(t):void c(e,t)}function c(e,t){_(function(){var n=1===e._81?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._81?f(t.promise,e._65):d(t.promise,e._65));var r=i(n,e._65);r===b?d(t.promise,m):f(t.promise,r)})}function f(e,t){if(t===e)return d(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"==typeof t||"function"==typeof t)){var n=o(t);if(n===b)return d(e,m);if(n===e.then&&t instanceof s)return e._81=3,e._65=t,void y(e);if("function"==typeof n)return void p(n.bind(t),e)}e._81=1,e._65=t,y(e)}function d(e,t){e._81=2,e._65=t,s._97&&s._97(e,t),y(e)}function y(e){if(1===e._45&&(l(e,e._54),e._54=null),2===e._45){for(var t=0;t<e._54.length;t++)l(e,e._54[t]);e._54=null}}function h(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1,r=a(e,function(e){n||(n=!0,f(t,e))},function(e){n||(n=!0,d(t,e))});n||r!==b||(n=!0,d(t,m))}var _=n(2),m=null,b={};e.exports=s,s._10=null,s._97=null,s._61=r,s.prototype.then=function(e,t){if(this.constructor!==s)return u(this,e,t);var n=new s(r);return l(this,new h(e,t,n)),n}},function(e,t){(function(t){"use strict";function n(e){s.length||(a(),u=!0),s[s.length]=e}function r(){for(;l<s.length;){var e=l;if(l+=1,s[e].call(),l>c){for(var t=0,n=s.length-l;t<n;t++)s[t]=s[t+l];s.length-=l,l=0}}s.length=0,l=0,u=!1}function o(e){var t=1,n=new d(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}function i(e){return function(){function t(){clearTimeout(n),clearInterval(r),e()}var n=setTimeout(t,0),r=setInterval(t,50)}}e.exports=n;var a,s=[],u=!1,l=0,c=1024,f="undefined"!=typeof t?t:self,d=f.MutationObserver||f.WebKitMutationObserver;a="function"==typeof d?o(r):i(r),n.requestFlush=a,n.makeRequestCallFromTimer=i}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={insults:["Get [disease] and [die][you_blank].","I hope [bad_thing_happens_to_you][you_blank].","I hope [bad_thing_happens_to_you_2][you_blank].","I hope [bad_thing_happens_to_you_3][you_blank].","your [relative] (p)[hate] you[you_blank].","[you_smell] like [animal_excrement].","[you_are] (s)[noun].","[you_are] (s)[adj] [noun].","[you_are] (s)[noun], (s)[adj] [noun].","[you_are] (s)[noun] and your [relative] is (s)[noun].","[noun].","a thousand (p)[sex_anatomy] upon [your_face].","you are (s)[walking] [anatomy].","[your_or_your_relatives] [body_part_or_parts_are_ugly].","you [walk] like (s)[animal][you_blank].","I [hate] your [animal]-[body_part_or_body_parts].","my, what [ugly_body_part_or_parts] you have!","on [certain_day] you [doing_something_embarrassing][maybe_while_your_relative_watches].","between you and r{(s)[adj] [noun]}, I'd rather be r{(s)[adj] [noun]}.","your [hygiene] is [atrocious][you_blank].","your [body_parts] are [ugly], your [body_part] is [ugly], and you smell like (s)[smelly_noun].","you're like (s)[noun], but [dumber]."],your_or_your_relatives:["your","your [relative]'s"],body_part_or_parts_are_ugly:["[body_part] is [ugly]","[body_parts] are [ugly]"],bad_thing_happens_to_you:["it smells like (s)[smelly_noun] on your [nice_day]","[you_get] [disease]","[you_get] [hiccups]","your child grows up (s)[adj] [noun]","[you_get] [raped] by a [pack] of (p)[animal]","you fall [off_a_cliff] and die","[you_get] [crucified]","[you_get] [hanged]","your car gets towed","you walk in on your [relative] masturbating","your [relative] catches you masturbating","you have an unplanned child","someone steals your car","you get a nose bleed","no one remembers your birthday","you miss a mortgage payment and lose your home"],bad_thing_happens_to_you_2:["[you_get] [slapped]","you spontaneously combust","your [relative] has an affair with your [relative]","[you_get] stabbed with (s)[dirty] [knife]","your [relative] marries a [racist]","you lose your job","you marry the wrong person","you fall into a ditch","you miss the bus","you get gum stuck in your hair","you drop your phone","you shit your pants","you miss an important phone call","you get a parking ticket"],bad_thing_happens_to_you_3:["you get [hiccups]","(s)[fly] [flies_in_your_eye]","you stub your toe","you lose your keys","your leg falls asleep","you get locked out of your house","you get your identity stolen","you get passed on a promotion","you fall down in public","you step in [animal] [feces]","you never find true love","you get caught watching [animal] porn","you get arrested for fraud"],animal_excrement:["[animal] [excrement]","fresh [animal] [excrement]","a piece of [animal] [feces]","a fresh piece of [animal] [feces]"],racist:["racist","nazi"],knife:["knife","knife","pitchfork","fork","syringe","stick"],dirty:["dirty","rusty","AIDS-infected"],crucified:["crucified","crucified upside-down"],hanged:["hanged","hanged for (v)[fuck] (p)[animal]"],slapped:["slapped","bitch-slapped","slapped silly","spat on"],off_a_cliff:["off a cliff","down a well","off a mountain"],you_blank:["",", you [noun]",", you [adj] [noun]"],you_get:["your [relative] gets","you get"],you_smell:["you smell","your [relative] smells","your breath smells"],you_are:["you are","your [relative] is"],you_have:["you have","your [relative] has"],your:["your","your [relative]'s"],your_face:["you","your face","your family","you and your family"],relative:["brother","child","sister","dad","mom","grandpa","grandma","dog","cat","boyfriend","girlfriend"],disease:["AIDS","cholera","ebola","smallpox","leprosy"],hiccups:["hiccups","jock-itch","sunburn","athlete's foot","bad breath","frizzy hair","a paper cut","pink eye","the runs","food poisoning"],adj:["[compound_adj]","[single_word_adj]","[single_word_adj], [compound_adj]"],compound_adj:["[penis]-sucking","[fluid]-(v)[guzzle]","[feces]-(v)[eat]","[excrement]-stained","[animal]-(v)[fuck]","[disease]-ridden","[animal]-infested"],single_word_adj:["bloody","brain-dead","degenerate","depraved","despicable","disgusting","drooling","fat","festering","filthy","half-witted","insignificant","insecure","meat-headed","miserable","pathetic","puerile","rancid","repulsive","ridiculous","slack-jawed","ugly","vulgar","worthless"],noun:["[anatomy]","[fluid_container]","[smelly_noun]-[food]","[sex_anatomy]-face","[smelly_noun]-breath","piece of [feces]","piece of [animal] [feces]","son of (s)[animal]","[buffoon]","[fluid]-(n)[guzzle]","[feces]-(n)[eat]","[animal]-(n)[fuck]","[fruit]-[sex_anatomy]","[excrement]-stain","[sex_anatomy]-monster","miscreant","troglodyte","paper cut","canker sore","dildo","slut","[racist]"],fluid_container:["[fluid]-[container]","[container] of [fluid]"],container:["bag","sack","bucket","bowl"],buffoon:["buffoon","moron","nincompoop","idiot","loser","dummy"],anatomy:["[penis]","[pubic_hair]","[anus]","canker","pustule","wart","ovary","tit","testicle"],smelly_noun:["[penis]","[anus]","[feces]","fart","armpit"],sex_anatomy:["[penis]","[anus]"],anus:["anus","ass","rectum","butt"],penis:["cock","dick","penis","dong"],animal:["alligator","ape","baboon","camel","chicken","chimpanzee","chihuahua","cow","crocodile","dog","donkey","elephant","fish","goat","hippo","horse","hyena","llama","monkey","pig","rat","skunk","warthog"],fuck:["fist","fuck","hump","molest","slap","violate"],excrement:["[feces]","[semen]","[urine]","[vomit]","douche"],fluid:["[semen]","[urine]","[vomit]","douche","diarrhea"],feces:["poop","shit","turd"],feces_verb:["poop","shit"],eat:["eat","lick","sniff"],semen:["cum","jizz"],guzzle:["chug","drink","guzzle"],urine:["piss","urine"],vomit:["puke","vomit"],pubic_hair:["pube","pubic hair"],raped:["eaten","humped","violated","captured","imprisoned","enslaved"],pack:["group","family","pack","swarm"],fruit:["banana","lemon","mango","kiwi","cheese"],food:["burger","sandwich","cake","biscuit"],small_object:["[fruit]","[small_animal]"],small_animal:["rat","gerbil","hamster","kitten","insect","maggot"],nice_day:["wedding day","anniversary","birthday"],walking:["walking","talking"],die:["die","fall down a set of stairs","run into a wall","walk into oncoming traffic"],fly:["mosquito","gnat","bee"],flies_in_your_eye:["lands on your eye","lands in your ear","flies up your butt","flies in your mouth"],ugly:["atrocious","sub-par","vomit-inducing","disgusting","deformed","malformed","ugly","gross","nauseating","weird"],body_part:["face","nose","head","beard","skin","hair","forehead"],countable_body_part:["face","nose","head","beard","forehead"],body_parts:["ears","eyes","arms","legs","teeth","lips"],body_part_or_body_parts:["[body_part]","[body_parts]"],ugly_body_part_or_parts:["[ugly] [body_parts]","(s)[ugly] [countable_body_part]"],walk:["walk","smell","look","sound","laugh"],hate:["hate","loathe","despise","detest"],doing_something_embarrassing:["[feces_verb] on (p)[animal]","expose yourself to children","sniff (s)[smelly_noun]","bathe in [fluid]","drink [animal] [urine]","eat [animal] [feces]","masturbate to [animal] porn"],maybe_while_your_relative_watches:[""," while your [relative] [watches]"],watches:["watches","films it"],certain_day:["Mondays","Tuesdays","Wednesdays","Thursdays","Fridays","Saturdays","Sundays","Christmas","New Years","New Years Eve","Halloween","Valentine's Day","Martin Luther King Day","President's Day","Memorial Day","Labour Day"],hygiene:["personal hygiene","oral hygiene","hygiene"],atrocious:["terrible","horrendous","atrocious","sub-par","not good","disgusting"],dumber:["dumber","stupider","more annoying","smellier","fatter","grosser","worse"]};t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(5),i=r(o),a=document.getElementById("insult"),s=document.getElementById("more"),u=function(){a.innerHTML=(0,i.default)().replace(/\s(?=[^\s]{1,5}$)/g,"&nbsp;").replace(/-/g,"&#8209;")};u(),s.addEventListener("click",u)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=e,r=e.match(/r{(.*?)}/);if(r){var i=o(r[1],t);n=n.replace(/r{.*?}/g,i)}return n.replace(/\((.)\)\[(.*?)]/g,p(t)).replace(/\[(.*?)]/g,_(t))}function i(e,t){var n=l(t[e]);return o(n,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ingify=t.nounify=t.pluralize=t.capitalize=t.addIndefiniteArticle=void 0;var a=n(3),s=r(a),u=function(e){return["a","e","i","o","u"].includes(e.toLowerCase())},l=function(e){var t=Math.floor(Math.random()*e.length);return e[t]},c=t.addIndefiniteArticle=function(e){return e.match(/^(use|urin)/)?"a "+e:u(e[0])?"an "+e:"a "+e},f=t.capitalize=function(e){return e[0].toUpperCase()+e.slice(1)},d=t.pluralize=function(e){return"s"===e.slice(-1)?e+"es":"sh"===e.slice(-2)?e+"es":e+"s"},y=t.nounify=function(e){return"ate"===e.slice(-3)?e.slice(0,e.length-1)+"or":u(e.slice(-1))?e+"r":u(e[e.length-2])&&u(e[e.length-3])?e+"er":u(e[e.length-2])?e+e.slice(-1)+"er":e+"er"},h=t.ingify=function(e){return u(e.slice(-1))?e.slice(0,e.length-1)+"ing":u(e[e.length-2])&&u(e[e.length-3])?e+"ing":u(e[e.length-2])?e+e.slice(-1)+"ing":e+"ing"},p=function(e){return function(t,n,r){var o=i(r,e);switch(n){case"s":return c(o);case"c":return f(o);case"p":return d(o);case"n":return y(o);case"v":return h(o);default:return o}}},_=function(e){return function(t,n){return i(n,e)}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.default,t=i("insults",e).replace("'","’");return f(t)};t.default=m},function(e,t,n){"use strict";function r(e){var t=new o(o._61);return t._81=1,t._65=e,t}var o=n(1);e.exports=o;var i=r(!0),a=r(!1),s=r(null),u=r(void 0),l=r(0),c=r("");o.resolve=function(e){if(e instanceof o)return e;if(null===e)return s;if(void 0===e)return u;if(e===!0)return i;if(e===!1)return a;if(0===e)return l;if(""===e)return c;if("object"==typeof e||"function"==typeof e)try{var t=e.then;if("function"==typeof t)return new o(t.bind(e))}catch(e){return new o(function(t,n){n(e)})}return r(e)},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(a,s){if(s&&("object"==typeof s||"function"==typeof s)){if(s instanceof o&&s.then===o.prototype.then){for(;3===s._81;)s=s._65;return 1===s._81?r(a,s._65):(2===s._81&&n(s._65),void s.then(function(e){r(a,e)},n))}var u=s.then;if("function"==typeof u){var l=new o(u.bind(s));return void l.then(function(e){r(a,e)},n)}}t[a]=s,0===--i&&e(t)}if(0===t.length)return e([]);for(var i=t.length,a=0;a<t.length;a++)r(a,t[a])})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){e.forEach(function(e){o.resolve(e).then(t,n)})})},o.prototype.catch=function(e){return this.then(null,e)}},function(e,t,n){"use strict";function r(){l=!1,s._10=null,s._97=null}function o(e){function t(t){(e.allRejections||a(f[t].error,e.whitelist||u))&&(f[t].displayId=c++,e.onUnhandled?(f[t].logged=!0,e.onUnhandled(f[t].displayId,f[t].error)):(f[t].logged=!0,i(f[t].displayId,f[t].error)))}function n(t){f[t].logged&&(e.onHandled?e.onHandled(f[t].displayId,f[t].error):f[t].onUnhandled||(console.warn("Promise Rejection Handled (id: "+f[t].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+f[t].displayId+".")))}e=e||{},l&&r(),l=!0;var o=0,c=0,f={};s._10=function(e){2===e._81&&f[e._72]&&(f[e._72].logged?n(e._72):clearTimeout(f[e._72].timeout),delete f[e._72])},s._97=function(e,n){0===e._45&&(e._72=o++,f[e._72]={displayId:null,error:n,timeout:setTimeout(t.bind(null,e._72),a(n,u)?100:2e3),logged:!1})}}function i(e,t){console.warn("Possible Unhandled Promise Rejection (id: "+e+"):");var n=(t&&(t.stack||t))+"";n.split("\n").forEach(function(e){console.warn("  "+e)})}function a(e,t){return t.some(function(t){return e instanceof t})}var s=n(1),u=[ReferenceError,TypeError,RangeError],l=!1;t.disable=r,t.enable=o},function(e,t,n){"undefined"==typeof Promise&&(n(7).enable(),window.Promise=n(6)),n(10),Object.assign=n(9)},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,a,s=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var l in r)o.call(r,l)&&(s[l]=r[l]);if(Object.getOwnPropertySymbols){a=Object.getOwnPropertySymbols(r);for(var c=0;c<a.length;c++)i.call(r,a[c])&&(s[a[c]]=r[a[c]])}}return s}},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return p.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader;return t.readAsArrayBuffer(e),a(t)}function u(e){var t=new FileReader;return t.readAsText(e),a(t)}function l(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(p.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(p.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(p.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(e){if(!p.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e))throw new Error("unsupported BodyInit type")}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob?(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(s)},this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=i(this);return e?e:Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function c(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function f(e,t){t=t||{};var n=t.body;if(f.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=c(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function d(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function y(e){var t=new o,n=(e.getAllResponseHeaders()||"").trim().split("\n");return n.forEach(function(e){var n=e.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();t.append(r,o)}),t}function h(e,t){t||(t={}),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof o?t.headers:new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var p={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];o||(o=[],this.map[e]=o),o.push(r)},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){var n=this.map[t(e)];return n?n[0]:null},o.prototype.getAll=function(e){return this.map[t(e)]||[]},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=[n(r)]},o.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){e.call(t,r,n,this)},this)},this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},p.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this)},l.call(f.prototype),l.call(h.prototype),h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var m=[301,302,303,307,308];h.redirect=function(e,t){if(m.indexOf(t)===-1)throw new RangeError("Invalid status code");return new h(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=f,e.Response=h,e.fetch=function(e,t){return new Promise(function(n,r){function o(){return"responseURL"in a?a.responseURL:/^X-Request-URL:/m.test(a.getAllResponseHeaders())?a.getResponseHeader("X-Request-URL"):void 0}var i;i=f.prototype.isPrototypeOf(e)&&!t?e:new f(e,t);var a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:y(a),url:o()},t="response"in a?a.response:a.responseText;n(new h(t,e))},a.onerror=function(){r(new TypeError("Network request failed"))},a.ontimeout=function(){r(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&p.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send("undefined"==typeof i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}]);
//# sourceMappingURL=main.6d86ccad.js.map