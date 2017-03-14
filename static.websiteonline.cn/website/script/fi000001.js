/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);;
var MobileUtils = {
	getScreenWidth: function(){
        var smallerSide = Math.min(screen.width, screen.height);
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            smallerSide = smallerSide / window.devicePixelRatio;
        }
        return smallerSide;
    },
    isAppleMobileDevice: function(){
        return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
    },
    isAndroidMobileDevice: function(){
        return (/android/i.test(navigator.userAgent.toLowerCase()));
    },
    isNewChromeOnAndroid: function(){
        if (this.isAndroidMobileDevice()) {
            var userAgent = navigator.userAgent.toLowerCase();
            if (/chrome/i.test(userAgent) && !/micromessenger/i.test(userAgent)) {
                var parts = userAgent.split('chrome/');
                var fullVersionString = parts[1].split(" ")[0];
                var versionString = fullVersionString.split('.')[0];
                var version = parseInt(versionString);
                if (version >= 27) return true;
            }
        }
        return false;
    },
    isAndroidOldBrowser: function () {
        var isChrome = (/chrome/i.test(navigator.userAgent.toLowerCase()));
        if (this.isAndroidMobileDevice() && !isChrome) return true;
        return false;
    },
    isSafariOnAndroid: function(){
	    if (this.isAndroidMobileDevice()) {
	    	var userAgent = navigator.userAgent.toLowerCase(),
	    	regarr = /android\s*([\.0-9]+);?/i.exec(userAgent);
	    	if ((regarr == null) || (parseFloat((regarr||[0,0])[1]) >= 4)) return false;
        	if (/micromessenger/i.test(userAgent)
        	 || !(/browser\b[\/\.\s\w]+safari/i.test(userAgent))) return true;
	    }
	    return false;
    },	
	isWeiXin: function (){ 
		var ua = window.navigator.userAgent.toLowerCase(); 
		if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
			return true; 
		}else{ 
			return false; 
		} 
	},
	isAndroidQqBrowser: function(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/mqqbrowser/i)){return true;} else{return false;}
	}
};
(function(){
    MobileUtils.isMSMobileDevice = function(){
        return (/iemobile/i.test(navigator.userAgent.toLowerCase()));
    };
	
    MobileUtils._getDevicePixelRatio = function(){
        if (this.isMSMobileDevice()) {
            return Math.round(window.screen.availWidth / document.documentElement.clientWidth);
        }
        return window.devicePixelRatio;
    };
	
    MobileUtils._getDeviceParamsByUA = function(){
        if (!(navigator && navigator.userAgent)) return false;
        var ua = navigator.userAgent.toLowerCase();
		
        var specificAndroidParams = this._paramsForSpecificAndroidDevices(ua);
        var width  = Math.min(screen.width, screen.height);
        var height = Math.max(screen.width, screen.height);
        if (specificAndroidParams) {
            width = specificAndroidParams.width;
            height = specificAndroidParams.height;
        }
		
        switch(true){
            case /ip(hone|od|ad)/i.test(ua):
                break;
            case /android/i.test(ua):
                if (!this.isNewChromeOnAndroid() || specificAndroidParams) {
                    width  = width / this._getDevicePixelRatio();
                    height = height / this._getDevicePixelRatio();
                }
                break;
            case /iemobile/i.test(ua):
                width  = document.documentElement.clientWidth;
                height = document.documentElement.clientHeight;
                break;
            default:
//          	width =  screen.width;
//          	height = screen.height;
                break;
        }
        return {width:width, height: height};
    };
	
    MobileUtils.getScreenWidth = function(){
        var sizes = this._getDeviceParamsByUA();
        if (sizes && sizes.width) return sizes.width;
        return false;
    };
	
    MobileUtils.getScreenHeight = function(){
        var sizes = this._getDeviceParamsByUA();
        if (sizes && sizes.height) return sizes.height;
        return false;
    };
	
    MobileUtils._paramsForSpecificAndroidDevices = function(userAgent){
        switch(true){
            case (/(GT-S5300B|GT-S5360|GT-S5367|GT-S5570I|GT-S6102B|LG-E400f|LG-E400g|LG-E405f|LG-L38C|LGL35G)/i).test(userAgent):
                return {width:240, height: 320};
                break;
            case (/(Ls 670|GT-S5830|GT-S5839i|GT-S6500D|GT-S6802B|GT-S7500L|H866C|Huawei-U8665|LG-C800|LG-MS695|LG-VM696|LGL55C|M865|Prism|SCH-R720|SCH-R820|SCH-S720C|SPH-M820-BST|SPH-M930BST|U8667|X501_USA_Cricket|ZTE-Z990G)/i).test(userAgent):
                return {width:320, height: 480};
                break;
            case (/(5860E|ADR6300|ADR6330VW|ADR8995|APA9292KT|C771|GT-I8160|GT-I9070|GT-I9100|HTC-A9192|myTouch4G|N860|PantechP9070|PC36100|pcdadr6350|SAMSUNG-SGH-I727|SAMSUNG-SGH-I777|SAMSUNG-SGH-I997|SC-03D|SCH-I405|SCH-I500|SCH-I510|SCH-R760|SGH-S959G|SGH-T679|SGH-T769|SGH-T959V|SGH-T989|SPH-D700)/i).test(userAgent):
                return {width:480, height: 800};
                break;
            case (/(DROIDX|SonyEricssonSO-02C|SonyEricssonST25i)/i).test(userAgent):
                return {width:480, height: 854};
                break;
            case (/(DROID3|MB855)/i).test(userAgent):
                return {width:540, height: 960};
                break;
            case (/F-05D/i).test(userAgent):
                return {width:720, height: 1280};
                break;
			case (/T1-821w/i).test(userAgent):
                return {width:600, height: 1280};
                break;
            default:
                return false;
                break;
        }
    };
}());
// Adaptive handheld
(function(){
	if (/firefox/i.test(navigator.userAgent.toLowerCase())) return false;
	var event = ("orientation" in window) && ("onorientationchange" in window)?"orientationchange":"resize";
	try {
		// initial
		var mviewport,metas = document.getElementsByTagName('meta')||[];
		for(var i in metas){
			var meta = metas[i]||{},mtname = meta.name||"";
			if (mtname.toLowerCase() == "viewport") {
				mviewport = meta;break;
			}
		}
		if ((mviewport.content||"").length == 0) return false;
		var screenWidth = MobileUtils.getScreenWidth(),screenHeight = MobileUtils.getScreenHeight(),
		uiWidth = 320,initContent = mviewport.content;
		// addevent
		var _bind = function(dom, type, fn, ucapture){
			if (dom.addEventListener) dom.addEventListener(type, fn, ucapture);//DOM2.0
			else if (dom.attachEvent) dom.attachEvent("on"+type, fn);//IE5+
			else dom['on'+type] = fn;//DOM 0
		};
		// orientationchange
		var gtOrientation = function(){
			var orientation = window.orientation||null;
			if (orientation) return ((orientation == 90)||(orientation == -90))?'landspcape':'portrait';
			else return (screen.width > screen.height)?'landspcape':'portrait';
		};
		// fireevent
		_bind(window, event, function(e){
			var newContent = '',envTag = false;
			var layoutWidth = document.documentElement.clientWidth;
			if (layoutWidth <= uiWidth + 1) return false;
			// Android
			if (MobileUtils.isAndroidMobileDevice()) {
				// target-densitydpi
				if (MobileUtils.isSafariOnAndroid()) newContent = initContent+',width='+uiWidth;
				else if( (/[p|P]ad/i.test(navigator.userAgent.toLowerCase())) && !(/coolpad/i.test(navigator.userAgent.toLowerCase()))  ){
					//适配android平板，未想到更好方案，暂时先这样处理 by lsf 2015.04.10
					var scale = 1.0,
					deviceWidth = (gtOrientation() == 'portrait')?Math.min(screenWidth, screenHeight):Math.max(screenWidth, screenHeight),
			        scale = deviceWidth / uiWidth,propstr = '';
			        if(/ucbrowser/i.test(navigator.userAgent.toLowerCase())) propstr = ',target-densitydpi=device-dpi';//+densitydpi;
			        newContent = 'width='+uiWidth+', initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+propstr;
			        setTimeout(function(){
			        	document.body.style.width = uiWidth+'px';
//						$('body').css('width',uiWidth);
					},800);
				}
				else {
					var androidv = deviceWidth = 0,propstr = '',densitydpi = 'medium-dpi';
					// 70 ~ 640
					var devicePixelRatio = MobileUtils._getDevicePixelRatio();
					deviceWidth = Math[(gtOrientation() == 'portrait')?'min':'max'](screen.width, screen.height);
					densitydpi = Math.floor(uiWidth / deviceWidth * devicePixelRatio * 160);
					propstr = ',target-densitydpi='+densitydpi;
					if (devicePixelRatio < 1.5) propstr = ',initial-scale='+(deviceWidth / uiWidth);
					newContent = initContent+',width='+uiWidth+propstr;
				}
				//修复bug(3211/手机访问异常/fpf)
				if(MobileUtils.isAndroidQqBrowser()){
					setTimeout(function(){
						mviewport.content = newContent;
						var ntdom = document.getElementById('wp-mobile_navtab');
						if (ntdom != null) {
							with(ntdom){style.position = 'fixed';style.bottom = '0px';style.left = '0px'}
						}
						var nhdom = document.getElementById('wp-mobile_navhandler');
						if (nhdom != null) {
							with(nhdom){style.position = 'fixed';style.bottom = '30px';style.left = '0px'}
						}
//						$('#wp-mobile_navtab').css({'position':'fixed','bottom':'0px','left':'0px'});
//						$('#wp-mobile_navhandler').css({'position':'fixed','bottom':'30px','left':'0px'});
					},0);
				}
			}
			// Apple
			else if (MobileUtils.isAppleMobileDevice()) newContent = initContent+',width='+uiWidth;
			else {
				// Other
		        var scale = 1.0,envTag = true,isOldBrowser = MobileUtils.isAndroidOldBrowser(),
		        deviceWidth = Math[(gtOrientation() == 'portrait')?'min':'max'](MobileUtils.getScreenWidth(), MobileUtils.getScreenHeight());
		        scale = deviceWidth / uiWidth;
		        newContent = 'width='+(uiWidth + (isOldBrowser ? 0 : 1))+',initial-scale='+scale+',maximum-scale='+scale;
			}
			// Set viewport
			if(MobileUtils.isWeiXin()){
				setTimeout(function(){
					mviewport.content = newContent;
				},0);
			}else{
				mviewport.content = newContent;
			}
			if (envTag && window.WQuickActions) window.WQuickActions.delayedFixZoom();
			if(!$(document).data('mobile_removeLoad')){
				var func=function(){
					if($('#scroll_container').length&&$('.mloading-mask').length){
						$('#scroll_container').css("visibility", 'visible');
						$('.mloading-mask').remove();
					}else{
						setTimeout(func,60);
					}
				}
				func();
				$(document).data('mobile_removeLoad',true);
			}	
		}, false);
		// fireEvent
		if (window.dispatchEvent) {
			var e = document.createEvent('Event');
			e.initEvent(event, true, true);
			window.dispatchEvent(e);
		} else {
			window.fireEvent("on"+event);
		}
//		// hide the address bar
//		window.onload = function(){
//			/mobi/i.test(navigator.userAgent) && !location.hash && setTimeout(function(){
//			  if (!pageYOffset) window.scrollTo(0, 1);
//			}, 100);
//		};
	} catch(e) {
		// alert(e.message);
	}
}());;
(function(D,B){function A(E){return !D(E).parents().andSelf().filter(function(){return D.curCSS(this,"visibility")==="hidden"||D.expr.filters.hidden(this)}).length}function C(H,I){var G=H.nodeName.toLowerCase();if("area"===G){var J=H.parentNode,E=J.name,F;if(!H.href||!E||J.nodeName.toLowerCase()!=="map"){return !1}F=D("img[usemap=#"+E+"]")[0];return !!F&&A(F)}return(/input|select|textarea|button|object/.test(G)?!H.disabled:"a"==G?H.href||I:I)&&A(H)}D.ui=D.ui||{};D.ui.version||(D.extend(D.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),D.fn.extend({propAttr:D.fn.prop||D.fn.attr,_focus:D.fn.focus,focus:function(E,F){return typeof E=="number"?this.each(function(){var G=this;setTimeout(function(){D(G).focus(),F&&F.call(G)},E)}):this._focus.apply(this,arguments)},scrollParent:function(){var E;D.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?E=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(D.curCSS(this,"position",1))&&/(auto|scroll)/.test(D.curCSS(this,"overflow",1)+D.curCSS(this,"overflow-y",1)+D.curCSS(this,"overflow-x",1))}).eq(0):E=this.parents().filter(function(){return/(auto|scroll)/.test(D.curCSS(this,"overflow",1)+D.curCSS(this,"overflow-y",1)+D.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!E.length?D(document):E},zIndex:function(G){if(G!==B){return this.css("zIndex",G)}if(this.length){var E=D(this[0]),F,H;while(E.length&&E[0]!==document){F=E.css("position");if(F==="absolute"||F==="relative"||F==="fixed"){H=parseInt(E.css("zIndex"),10);if(!isNaN(H)&&H!==0){return H}}E=E.parent()}}return 0},disableSelection:function(){return this.bind((D.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(E){E.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),D.each(["Width","Height"],function(I,F){function E(L,M,K,N){D.each(G,function(){M-=parseFloat(D.curCSS(L,"padding"+this,!0))||0,K&&(M-=parseFloat(D.curCSS(L,"border"+this+"Width",!0))||0),N&&(M-=parseFloat(D.curCSS(L,"margin"+this,!0))||0)});return M}var G=F==="Width"?["Left","Right"]:["Top","Bottom"],J=F.toLowerCase(),H={innerWidth:D.fn.innerWidth,innerHeight:D.fn.innerHeight,outerWidth:D.fn.outerWidth,outerHeight:D.fn.outerHeight};D.fn["inner"+F]=function(K){if(K===B){return H["inner"+F].call(this)}return this.each(function(){D(this).css(J,E(this,K)+"px")})},D.fn["outer"+F]=function(K,L){if(typeof K!="number"){return H["outer"+F].call(this,K)}return this.each(function(){D(this).css(J,E(this,K,!0,L)+"px")})}}),D.extend(D.expr[":"],{data:function(F,G,E){return !!D.data(F,E[3])},focusable:function(E){return C(E,!isNaN(D.attr(E,"tabindex")))},tabbable:function(G){var E=D.attr(G,"tabindex"),F=isNaN(E);return(F||E>=0)&&C(G,!F)}}),D(function(){var E=document.body,F=E.appendChild(F=document.createElement("div"));D.extend(F.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),D.support.minHeight=F.offsetHeight===100,D.support.selectstart="onselectstart" in F,E.removeChild(F).style.display="none"}),D.extend(D.ui,{plugin:{add:function(G,H,E){var F=D.ui[G].prototype;for(var I in E){F.plugins[I]=F.plugins[I]||[],F.plugins[I].push([H,E[I]])}},call:function(I,G,H){var E=I.plugins[G];if(!!E&&!!I.element[0].parentNode){for(var F=0;F<E.length;F++){I.options[E[F][0]]&&E[F][1].apply(I.element,H)}}}},contains:function(F,E){return document.compareDocumentPosition?F.compareDocumentPosition(E)&16:F!==E&&F.contains(E)},hasScroll:function(G,H){if(D(G).css("overflow")==="hidden"){return !1}var E=H&&H==="left"?"scrollLeft":"scrollTop",F=!1;if(G[E]>0){return !0}G[E]=1,F=G[E]>0,G[E]=0;return F},isOverAxis:function(G,E,F){return G>E&&G<E+F},isOver:function(H,I,F,G,J,E){return D.ui.isOverAxis(H,F,J)&&D.ui.isOverAxis(I,G,E)}}))})(jQuery);(function(D,B){if(D.cleanData){var C=D.cleanData;D.cleanData=function(G){for(var E=0,F;(F=G[E])!=null;E++){try{D(F).triggerHandler("remove")}catch(H){}}C(G)}}else{var A=D.fn.remove;D.fn.remove=function(E,F){return this.each(function(){F||(!E||D.filter(E,[this]).length)&&D("*",this).add([this]).each(function(){try{D(this).triggerHandler("remove")}catch(G){}});return A.call(D(this),E,F)})}}D.widget=function(H,I,F){var G=H.split(".")[0],J;H=H.split(".")[1],J=G+"-"+H,F||(F=I,I=D.Widget),D.expr[":"][J]=function(K){return !!D.data(K,H)},D[G]=D[G]||{},D[G][H]=function(L,K){arguments.length&&this._createWidget(L,K)};var E=new I;E.options=D.extend(!0,{},E.options),D[G][H].prototype=D.extend(!0,E,{namespace:G,widgetName:H,widgetEventPrefix:D[G][H].prototype.widgetEventPrefix||H,widgetBaseClass:J},F),D.widget.bridge(H,D[G][H])},D.widget.bridge=function(F,E){D.fn[F]=function(I){var J=typeof I=="string",G=Array.prototype.slice.call(arguments,1),H=this;I=!J&&G.length?D.extend.apply(null,[!0,I].concat(G)):I;if(J&&I.charAt(0)==="_"){return H}J?this.each(function(){var K=D.data(this,F),L=K&&D.isFunction(K[I])?K[I].apply(K,G):K;if(L!==K&&L!==B){H=L;return !1}}):this.each(function(){var K=D.data(this,F);K?K.option(I||{})._init():D.data(this,F,new E(I,this))});return H}},D.Widget=function(F,E){arguments.length&&this._createWidget(F,E)},D.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(F,G){D.data(G,this.widgetName,this),this.element=D(G),this.options=D.extend(!0,{},this.options,this._getCreateOptions(),F);var E=this;this.element.bind("remove."+this.widgetName,function(){E.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return D.metadata&&D.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(G,E){var F=G;if(arguments.length===0){return D.extend({},this.options)}if(typeof G=="string"){if(E===B){return this.options[G]}F={},F[G]=E}this._setOptions(F);return this},_setOptions:function(E){var F=this;D.each(E,function(H,G){F._setOption(H,G)});return this},_setOption:function(F,E){this.options[F]=E,F==="disabled"&&this.widget()[E?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",E);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(H,I,F){var G,J,E=this.options[H];F=F||{},I=D.Event(I),I.type=(H===this.widgetEventPrefix?H:this.widgetEventPrefix+H).toLowerCase(),I.target=this.element[0],J=I.originalEvent;if(J){for(G in J){G in I||(I[G]=J[G])}}this.element.trigger(I,F);return !(D.isFunction(E)&&E.call(this.element[0],I,F)===!1||I.isDefaultPrevented())}}})(jQuery);(function(C,A){var B=!1;C(document).mouseup(function(D){B=!1}),C.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var D=this;this.element.bind("mousedown."+this.widgetName,function(E){return D._mouseDown(E)}).bind("click."+this.widgetName,function(E){if(!0===C.data(E.target,D.widgetName+".preventClickEvent")){C.removeData(E.target,D.widgetName+".preventClickEvent"),E.stopImmediatePropagation();return !1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(F){if(!B){this._mouseStarted&&this._mouseUp(F),this._mouseDownEvent=F;var D=this,E=F.which==1,G=typeof this.options.cancel=="string"&&F.target.nodeName?C(F.target).closest(this.options.cancel).length:!1;if(!E||G||!this._mouseCapture(F)){return !0}this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){D.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(F)&&this._mouseDelayMet(F)){this._mouseStarted=this._mouseStart(F)!==!1;if(!this._mouseStarted){F.preventDefault();return !0}}!0===C.data(F.target,this.widgetName+".preventClickEvent")&&C.removeData(F.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(H){return D._mouseMove(H)},this._mouseUpDelegate=function(H){return D._mouseUp(H)},C(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),F.preventDefault(),B=!0;return !0}},_mouseMove:function(D){if(C.browser.msie&&!(document.documentMode>=9)&&!D.button){return this._mouseUp(D)}if(this._mouseStarted){this._mouseDrag(D);return D.preventDefault()}this._mouseDistanceMet(D)&&this._mouseDelayMet(D)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,D)!==!1,this._mouseStarted?this._mouseDrag(D):this._mouseUp(D));return !this._mouseStarted},_mouseUp:function(D){C(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,D.target==this._mouseDownEvent.target&&C.data(D.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(D));return !1},_mouseDistanceMet:function(D){return Math.max(Math.abs(this._mouseDownEvent.pageX-D.pageX),Math.abs(this._mouseDownEvent.pageY-D.pageY))>=this.options.distance},_mouseDelayMet:function(D){return this.mouseDelayMet},_mouseStart:function(D){},_mouseDrag:function(D){},_mouseStop:function(D){},_mouseCapture:function(D){return !0}})})(jQuery);function get_plugin_css(tagid,css){var setcss=$("#page_set_css").html();setcss=setcss.replace(/<style>/ig,"").replace(/<\/style>/ig,"").replace(/[\r]/g," ").replace(/[\n]/g," ").replace(/[\r\n]/g," ").replace(/\s+/g," ");var reg=eval("/\\/\\*"+tagid+"\\*\\/(.*)\\/\\*"+tagid+"\\*\\//ig");setcss=setcss.replace(reg,"");if(setcss&&$.trim(setcss)!=""){css=css.replace(/@charset [^;]+;/i,"")}var tempcss=setcss+" /*"+tagid+"*/ "+css+" /*"+tagid+"*/ ";tempcss=tempcss.replace(/&gt;/ig,">");$("#page_set_css").html("<style> "+tempcss+"</style>")}(function(B){B.widget("ui.menu",{_create:function(){var A=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(D){if(!B(D.target).closest(".ui-menu-item a").length){return}D.preventDefault();A.select(D)});this.refresh()},refresh:function(){var D=this;var A=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");A.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(C){D.activate(C,B(this).parent())}).mouseleave(function(){D.deactivate()})},activate:function(J,A){this.deactivate();if(this.hasScroll()){var G=A.offset().top-this.element.offset().top,H=this.element.scrollTop(),I=this.element.height();if(G<0){this.element.scrollTop(H+G)}else{if(G>=I){this.element.scrollTop(H+G-I+A.height())}}}this.active=A.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",J,{item:A})},deactivate:function(){if(!this.active){return}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(A){this.move("next",".ui-menu-item:first",A)},previous:function(A){this.move("prev",".ui-menu-item:last",A)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(H,G,A){if(!this.active){this.activate(A,this.element.children(G));return}var F=this.active[H+"All"](".ui-menu-item").eq(0);if(F.length){this.activate(A,F)}else{this.activate(A,this.element.children(G))}},nextPage:function(F){if(this.hasScroll()){if(!this.active||this.last()){this.activate(F,this.element.children(".ui-menu-item:first"));return}var G=this.active.offset().top,A=this.element.height(),H=this.element.children(".ui-menu-item").filter(function(){var C=B(this).offset().top-G-A+B(this).height();return C<10&&C>-10});if(!H.length){H=this.element.children(".ui-menu-item:last")}this.activate(F,H)}else{this.activate(F,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(A){if(this.hasScroll()){if(!this.active||this.first()){this.activate(A,this.element.children(".ui-menu-item:last"));return}var E=this.active.offset().top,F=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var C=B(this).offset().top-E+F-B(this).height();return C<10&&C>-10});if(!result.length){result=this.element.children(".ui-menu-item:first")}this.activate(A,result)}else{this.activate(A,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[B.fn.prop?"prop":"attr"]("scrollHeight")},select:function(A){this._trigger("selected",A,{item:this.active})}})}(jQuery));(function(D,E){var F=0;D.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,width:"auto",position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var A=this,B=this.element[0].ownerDocument,C;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(I){if(A.options.disabled||A.element.propAttr("readOnly")){return}C=false;var J=D.ui.keyCode;switch(I.keyCode){case J.PAGE_UP:A._move("previousPage",I);break;case J.PAGE_DOWN:A._move("nextPage",I);break;case J.UP:A._move("previous",I);I.preventDefault();break;case J.DOWN:A._move("next",I);I.preventDefault();break;case J.ENTER:case J.NUMPAD_ENTER:if(A.menu.active){C=true;I.preventDefault()}case J.TAB:if(!A.menu.active){return}A.menu.select(I);break;case J.ESCAPE:A.element.val(A.term);A.close(I);break;default:clearTimeout(A.searching);A.searching=setTimeout(function(){if(A.term!=A.element.val()){A.selectedItem=null;A.search(null,I)}},A.options.delay);break}}).bind("keypress.autocomplete",function(H){if(C){C=false;H.preventDefault()}}).bind("focus.autocomplete",function(){if(A.options.disabled){return}A.selectedItem=null;A.previous=A.element.val()}).bind("blur.autocomplete",function(H){if(A.options.disabled){return}clearTimeout(A.searching);A.closing=setTimeout(function(){A.close(H);A._change(H)},150)});this._initSource();this.response=function(){return A._response.apply(A,arguments)};this.menu=D("<ul></ul>").addClass("ui-autocomplete").appendTo(D(this.options.appendTo||"body",B)[0]).mousedown(function(J){var I=A.menu.element[0];if(!D(J.target).closest(".ui-menu-item").length){setTimeout(function(){D(document).one("mousedown",function(G){if(G.target!==A.element[0]&&G.target!==I&&!D.ui.contains(I,G.target)){A.close()}})},1)}setTimeout(function(){clearTimeout(A.closing)},13)}).menu({focus:function(K,L){var J=L.item.data("item.autocomplete");if(false!==A._trigger("focus",K,{item:J})){if(/^key/.test(K.originalEvent.type)){A.element.val(J.value)}}},selected:function(L,M){var N=M.item.data("item.autocomplete"),K=A.previous;if(A.element[0]!==B.activeElement){A.element.focus();A.previous=K;setTimeout(function(){A.previous=K;A.selectedItem=N},1)}if(false!==A._trigger("select",L,{item:N})){A.element.val(N.value)}A.term=A.element.val();A.close(L);A.selectedItem=N},blur:function(I,J){if(A.menu.element.is(":visible")&&(A.element.val()!==A.term)){A.element.val(A.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(D.fn.bgiframe){this.menu.element.bgiframe()}A.beforeunloadHandler=function(){A.element.removeAttr("autocomplete")};D(window).bind("beforeunload",A.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();D(window).unbind("beforeunload",this.beforeunloadHandler);D.Widget.prototype.destroy.call(this)},_setOption:function(B,A){D.Widget.prototype._setOption.apply(this,arguments);if(B==="source"){this._initSource()}if(B==="appendTo"){this.menu.element.appendTo(D(A||"body",this.element[0].ownerDocument)[0])}if(B==="disabled"&&A&&this.xhr){this.xhr.abort()}},_initSource:function(){var C=this,A,B;if(D.isArray(this.options.source)){A=this.options.source;this.source=function(I,J){J(D.ui.autocomplete.filter(A,I.term))}}else{if(typeof this.options.source==="string"){B=this.options.source;this.source=function(I,J){if(C.xhr){C.xhr.abort()}C.xhr=D.ajax({url:B,data:I,dataType:"json",autocompleteRequest:++F,success:function(H,G){if(this.autocompleteRequest===F){J(H)}},error:function(){if(this.autocompleteRequest===F){J([])}}})}}else{this.source=this.options.source}}},search:function(A,B){A=A!=null?A:this.element.val();this.term=this.element.val();if(A.length<this.options.minLength){return this.close(B)}clearTimeout(this.closing);if(this._trigger("search",B)===false){return}return this._search(A)},_search:function(A){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:A},this.response)},_response:function(A){if(!this.options.disabled&&A&&A.length){A=this._normalize(A);this._suggest(A);this._trigger("open")}else{this.close()}this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},close:function(A){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",A)}},_change:function(A){if(this.previous!==this.element.val()){this._trigger("change",A,{item:this.selectedItem})}},_normalize:function(A){if(A.length&&A[0].label&&A[0].value){return A}return D.map(A,function(B){if(typeof B==="string"){return{label:B,value:B}}return D.extend({label:B.label||B.value,value:B.value||B.label},B)})},_suggest:function(A){var B=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(B,A);this.menu.deactivate();this.menu.refresh();B.show();this._resizeMenu();B.position(D.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new D.Event("mouseover"))}},_resizeMenu:function(){var A=this.menu.element;if(this.options.width=="auto"){A.outerWidth(Math.max(A.width("").outerWidth()+1,this.element.outerWidth()))}else{A.outerWidth(this.options.width).css({"overflow-x":"hidden"})}},_renderMenu:function(A,B){var C=this;D.each(B,function(I,J){C._renderItem(A,J)})},_renderItem:function(B,A){return D("<li></li>").data("item.autocomplete",A).append(D("<a></a>").text(A.label)).appendTo(B)},_move:function(A,B){if(!this.menu.element.is(":visible")){this.search(null,B);return}if(this.menu.first()&&/^previous/.test(A)||this.menu.last()&&/^next/.test(A)){this.element.val(this.term);this.menu.deactivate();return}this.menu[A](B)},widget:function(){return this.menu.element}});D.extend(D.ui.autocomplete,{escapeRegex:function(A){return A.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(A,C){var B=new RegExp(D.ui.autocomplete.escapeRegex(C),"i");return D.grep(A,function(H){return B.test(H.label||H.value||H)})}})}(jQuery));;
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
			if($('.fullpage_alllist').length){
				$this.trigger("appear");
				counter = 0;
			}else{
				if (settings.container === undefined || settings.container === window) {
						var fold = $window.scrollTop();
				} else {
						var fold = $(settings.container).offset().top;
				}
				if($this.offset().top-fold<0){
					$this.trigger("appear");
					/* if we found an image we'll load, reset the counter */
					counter = 0;
				}else if ($.abovethetop(this, settings) ||
						$.leftofbegin(this, settings)) {
								/* Nothing. */
				} else if (!$.belowthefold(this, settings) &&
						!$.rightoffold(this, settings)) {
								$this.trigger("appear");
								/* if we found an image we'll load, reset the counter */
								counter = 0;
				} else {
						if (++counter > settings.failure_limit) {
								return false;
						}
				}
			}
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
		  var ret=true;
		  var timer;
            $container.bind(settings.event, function() {
			if(timer) clearTimeout(timer);				
			 timer=setTimeout(function(){
				 ret= update();
			 },200)
			 return ret;
                
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }
            /* fixed bug#1630 */
            //if(parseInt($self.css("top"))<-100) $self.css("top","");
            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
				});
			}
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }
	  update();
        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }
        //bug#2660
        var eleparwid = $(element).height();
        if(eleparwid==0&&$(element).parents().parents().attr('class')=='img_over'){
        	var eleparwid = $(element).parents().parents().height();
        }
        return fold >= $(element).offset().top + settings.threshold  + eleparwid;
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= Math.max($(element).offset().left + $(element).width(),2)+ settings.threshold ;
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);;
(function(D,C){var B={0:0};var A={0:1};D.math={};D.math.sin=function(F){if(F<0){F=F+360}if(F>=360){F=F%360}if(B[F]==C){var E=Math.sin(F*Math.PI/180);B[F]=E}return B[F]};D.math.cos=function(F){if(F<0){F=F+360}if(F>=360){F=F%360}if(A[F]==C){var E=Math.cos(F*Math.PI/180);A[F]=E}return A[F]};D.parseInteger=function(F){var E=parseInt(F);if(isNaN(E)){return 0}return E};D.getElementFatherid=function(E){if(E.prop("id")=="canvas"||E.prop("id")=="site_footer"){return"none"}var F=E.attr("fatherid");if(!F||F==""){if(E.closest("#canvas").length>0){F="canvas"}else{if(E.closest("#site_footer").length>0){F="site_footer"}}}if(!D("#"+F).length){if(E.closest("#canvas").length>0){F="canvas"}else{if(E.closest("#site_footer").length>0){F="site_footer"}}E.removeAttr("fatherid")}return F};D.fn.ab_pos=function(F){var E=D(this);if(E.prop("id")=="canvas"||E.prop("id")=="site_footer"){return 0}if(F=="left"||F=="top"){if(!E.attr("fatherid")||E.attr("fatherid")==""){return E.rel_pos(F)}return E.rel_pos(F)+D("#"+E.attr("fatherid")).ab_pos(F)}};D.fn.ab_pos_cnter=function(E){var F=D(this).ab_pos(E);if(D(this).closest("#site_footer").length>0&&E=="top"){return F+D.parseInteger(D("#site_footer").css(E))}return F};D.fn.rel_pos=function(E){if(E=="left"||E=="top"){return D.parseInteger(D(this).css(E))}};D.divrotate=function(K,F,L,E){K=D(K);var G=K.width();var J=K.height();if(E){G=E[0];J=E[1]}if(L){var I=L[0];var H=L[1];if(D.browser.msie&&D.browser.version<9){G=parseInt(K.data("IEWidth"));J=parseInt(K.data("IEHeight"));I=K.data("IELeft");if(I==C){I=L[0];K.data("IELeft",I)}H=K.data("IETop");if(H==C){H=L[1];K.data("IETop",H)}ieRotate({degree:F,left:I,top:H,width:G,height:J,dom:K})}else{K[0].style.left=Math.round(I)+"px";K[0].style.top=Math.round(H)+"px"}}if(D.browser.safari||D.browser.mozilla||D.browser.opera||(D.browser.msie&&D.browser.version=="9.0")){ieRotate({degree:F,dom:K})}};D.divrotate.getDegreeModMaxPointOrigin=function(N,F,M,G,Q){var K=D.getElementFatherid(N);var E=D("#"+K).ab_pos_cnter("top");var F=F;if(!F){var L=0;var I=G[0];var J=G[1];switch(Q){case"left":L=M[0];break;case"right":L=M[0]+I;break;case"top":L=M[1]+E;break;case"buttom":L=M[1]+J+E;break}return L}else{if(D.browser.msie&&D.browser.version<9){var L=0;switch(Q){case"left":L=N.position().left;break;case"right":L=N.position().left+N.width();break;case"top":L=N.position().top;break;case"buttom":L=N.position().top+N.height();break}return L}var L=0;var I=G[0];var J=G[1];var O=M[0];var H=M[1];if(F>360){F=F%360}var P=D.math.cos(F);var R=D.math.sin(F);switch(Q){case"left":if(F<=90){L=O-J*R}else{if(F>90&&F<=180){L=O-J*R+I*P}else{if(F>180&&F<=270){L=O+I*P}else{if(F>270&&F<=360){L=O}}}}break;case"right":if(F<=90){L=O+I*P}else{if(F>90&&F<=180){L=O}else{if(F>180&&F<=270){L=O-J*R}else{if(F>270&&F<=360){L=O-J*R+I*P}}}}break;case"top":if(F<=90){L=H}else{if(F>90&&F<=180){L=H+J*P}else{if(F>180&&F<=270){L=H+J*P+I*R}else{if(F>270&&F<=360){L=H+I*R}}}}L=L+E;break;case"buttom":if(F<=90){L=H+J*P+I*R}else{if(F>90&&F<=180){L=H+I*R}else{if(F>180&&F<=270){L=H}else{if(F>270&&F<=360){L=H+J*P}}}}L=L+E;break}return L}}})(jQuery);;
/*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.3 (c) Kyle Simpson
    MIT License
*/
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);;
var mclick = 'click',mtouchstart = 'mousedown',mtouchend = 'mouseup',mtouchmove = 'mousemove';
if (window.ontouchstart !== undefined) {
	mclick = 'click';mtouchstart = 'touchstart';mtouchend = 'touchend';mtouchmove = 'touchmove';
}
/**Global Function**/
function getSessionExpiredUrl()
{
	$(window).unbind('beforeunload');
	alert(translate('page.sessionTimeout')); 
	window.close();
	return null;
}

function wp_heightAdapt(dom,oldHeight){}

function is_website_mobile(){
	var type=getWebSiteType();
	return type=='mobile';
}

function layer_img_lzld(layerid){
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('#'+layerid+'  img.img_lazy_load').lazyload({
		     threshold  : 200,
			failure_limit : $('#'+layerid+'  img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
}

function initScrollcontainerHeight(){
	var container=$('#scroll_container');
	var cvhgt = window.innerHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	container.height(cvhgt);
	$('#scroll_container_bg').css('height',cvhgt);
}

function noRightClick(){
	//禁用鼠标右键  CTRL+C 复制   CTRL+V  粘贴   CTRL+S 保存
	$(function(){
		document.body.oncontextmenu=function(){return false;}
		$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86)) {
							return false;
					}        
			})
			$(document).keydown(function(event) {
					if ((event.ctrlKey&&event.which==67) || (event.ctrlKey&&event.which==86) || (event.ctrlKey&&event.which==83)) {
							return false;
					}        
			})
	})
}

function doc_end_exec(){
	$(function(){
		$(document).triggerHandler('lastexec');
	})
	$('#scroll_container').css("visibility", 'visible');
	$('.mloading-mask').remove();
	$(window).load(function(){ 
		var heightadaptel=$("#canvas").find(".cstlayer[type='article_detail'],.cstlayer[type='product_detail'],.cstlayer[type='wzl'],.cstlayer[type='fxdp'],.cstlayer[type='tb_product_detail'],.cstlayer[type='tb_product_list'],.cstlayer[type='product_list'],.cstlayer[type='wkj'],.cstlayer[type='crowdfunding'],.cstlayer[type='btag'],.cstlayer[type='greetingcard'],.cstlayer[type='weiredpack'],.cstlayer[type='mseckill_detail'],.cstlayer[type='mgroupon_detail'],.cstlayer[type='mgroupons_detail'],.cstlayer[type='groupon_detail']");
		if(heightadaptel.length){
			heightadaptel.each(function(){
				if($(this).data('not_need_heightadapt')) return;
				wp_heightAdapt($(this));
			}) 		
			window.scroll_container_adjust();
		}
	});
	
	var imgcontainer=$('#scroll_container');
	var ismobile=is_website_mobile();
	if(!ismobile){
		var chromebug=$('#scroll_container').data('chrome_bug');
		if(chromebug){
			imgcontainer=window;
		}
	}else imgcontainer=window;
	$('img.img_lazy_load').lazyload({
		     threshold  : 0,
			failure_limit : $('img.img_lazy_load').length,
			container : imgcontainer,	
			placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
			load:function(){
			 var self=$(this);
			 var id=self.closest('.cstlayer').prop('id');
			if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
		 }
	});
	
	$(window).load(function(){
		$('.cstlayer').showEffects();
	})
}

function wpfullcolumn_float(){
    var wp_ibody = $('#scroll_container'),wp_icontent = $('#canvas'),wp_icontent_foot = $('#site_footer #footer_content');
    $('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
        var fc_lid = '#'+$(this).attr('id');
        var $fc_lid = $(this);
        var wp_layer_abs = $('#canvas '+fc_lid),wp_layer_abs_footer = $('#site_footer #footer_content '+fc_lid),wp_layer_fix= $('#scroll_container '+fc_lid);
        var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
        var isinfixed = $fc_lid.attr('infixed');
        if(isinfixed==1) {
            var nPos = $('#scroll_container').scrollTop() ;
		  var container=$('#scroll_container');
		  var is_mobile_preview=false;
		  if(is_website_mobile()){
				nPos = $(window).scrollTop() ;
			}
		if($('.wp-mobile-device-premask').length){
			is_mobile_preview=true;
		}
            //oPos get第一次正确的值,以后不再获得
            var oPos_tmp = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
		  var inbuttom=$(document).data("fixed_"+$(this).attr('id')+"_inbuttom");
            if(!oPos_tmp){
                oPos_tmp =  $fc_lid.ab_pos_cnter('top');
                $(document).data("fixed_"+$(this).attr('id')+"_oPos",oPos_tmp);
            }
		if(inbuttom==null){
                inbuttom =  $fc_lid.attr('inbuttom');
                $(document).data("fixed_"+$(this).attr('id')+"_inbuttom",inbuttom);
            }
            var oPos = $(document).data("fixed_"+$(this).attr('id')+"_oPos");
            if(oPos==0 && $fc_lid.parent().is('#canvas')) return;
            if(oPos==0){
				var oldsty = $fc_lid.attr('oldstyle')||'';
				if(oldsty.match(/top:\d+px/)){
					var oldtop = oldsty.match(/top:\d+px/);
					oldtop = oldtop[0].match(/\d+/);
					oPos = oldtop[0];
				}
            }
            if(inbuttom>0){
                //存在页脚中
                if(nPos > oPos){
                    var newleft = $('.full_column').ab_pos('left') + currpoor ;
				if(wp_layer_abs_footer.is('.cstlayer')){
					newleft =wp_layer_abs_footer.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs_footer .ab_pos_cnter('left');
					}
				}
                    if(wp_layer_abs_footer.length>0){
                        var oldstyle = wp_layer_abs_footer.attr('style');
                        wp_layer_fix = wp_layer_abs_footer.clone(true).appendTo(container)
                        .attr('oldstyle',oldstyle).attr('inbuttom','1')
                        .addClass('full_column-fixed');
				if(wp_layer_abs_footer.attr('fatherid')) wp_layer_fix.attr('fatherid',wp_layer_abs.attr('fatherid'));
                    wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
				if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
				}
                    wp_layer_abs_footer.remove();
                    }else{
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}							
				}
                }else{
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(wp_layer_abs_footer.length==0){
					wp_icontent_foot=$('#site_footer #footer_content');
					if(wp_layer_fix.attr('fatherid')){
						wp_icontent_foot=$('#'+wp_layer_fix.attr('fatherid'));
					}
                        wp_layer_abs_footer = wp_layer_fix.clone(true).appendTo(wp_icontent_foot)
                        .attr('style',oldstyle).attr('inbuttom','1').removeClass('full_column-fixed');
					if(wp_layer_fix.attr('fatherid')){
						wp_layer_abs_footer.attr('fatherid',wp_layer_fix.attr('fatherid'));
					}
                        wp_layer_abs_footer.show();wp_layer_fix.remove();
                    }
                }
            }else{
                var infixed_html = $('#canvas').data('infixed_content');
                if(!infixed_html){
                    infixed_html =wp_layer_abs.html(); $('#canvas').data('infixed_content',infixed_html);
                }
                if(nPos > oPos){
                    var newleft = Math.abs(parseFloat($('.full_column').find('.full_width').css('left')));
				if(wp_layer_abs.is('.cstlayer')){
					newleft =wp_layer_abs.offset().left+$(container).scrollLeft();
					if(is_mobile_preview){
						newleft =wp_layer_abs.ab_pos_cnter('left');
					}
				}
				var fatherid=$.getElementFatherid(wp_layer_abs);
				$(document).data("fixed_"+wp_layer_abs.attr('id')+"_father",$('#'+fatherid));
                    //clone(true) has true 可以存储data
                    if(wp_layer_abs.length>0){
                        //////////////////////
                        var oldstyle = wp_layer_abs.attr('style');
                        var func=function(){ //未加载完拖拽滚动条为空异常处理
                            var success=true;
                            var newleft = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(newleft)){success=false;}
                            if(success){
                                $(fc_lid).css('left',newleft);
                            }else {
                                setTimeout(func,100);
                            }
                         }
                         func();
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_abs.attr('id'),'class':wp_layer_abs.attr('class'),'infixed':1,'style':wp_layer_abs.attr('style')});
				    if(wp_layer_abs.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_abs.attr('fatherid'));
                        container.append(layerdiv);
                        wp_layer_abs.remove();
                        var wp_layer_fix =$(fc_lid).html(infixed_html)
                        .attr('oldstyle',oldstyle)
                        .addClass('full_column-fixed');
                        wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'});
				    if(is_mobile_preview){
							wp_layer_fix.css({top:nPos+'px'});
					}
                        ////fix时 full_width宽为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!full_width_val){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
                        //////////
					var imgcontainer=$('#scroll_container');
					var ismobile=is_website_mobile();
					if(!ismobile){
						var chromebug=$('#scroll_container').data('chrome_bug');
						if(chromebug){
							imgcontainer=window;
						}
					}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 0,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }else{
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}						
				}
                }else{
                    if( wp_layer_fix.data('always_fix')){
					if(is_mobile_preview){
						wp_layer_fix.css({top:nPos+'px'});
					}	
					return;
				}
                    oldstyle = wp_layer_fix.attr('oldstyle');
                    if(!wp_layer_abs.length>0){
                        //////////////////////////////
                        var layerdiv=$("<div/>").attr({
                                'id':wp_layer_fix.attr('id'),'class':wp_layer_fix.attr('class'),'infixed':1,'style':wp_layer_fix.attr('oldstyle')});
				    if(wp_layer_fix.attr('fatherid')) layerdiv.attr('fatherid',wp_layer_fix.attr('fatherid'));
				    wp_icontent = $(document).data("fixed_"+wp_layer_fix.attr('id')+"_father");
				    if(!wp_icontent.length) wp_icontent=$('#canvas');
                        wp_icontent.append(layerdiv);
                        wp_layer_fix.remove();
                        wp_layer_abs =$(fc_lid).html(infixed_html)
                        .attr('oldstyle',oldstyle)
                        .removeClass('full_column-fixed');
                        wp_layer_abs.show();
                        //为空异常处理
                        var funco=function(){
                            var full_width_val = Math.abs(parseFloat($(fc_lid).find('.full_width').css('left')));
                            if(!(full_width_val)){
                                $(fc_lid).children('.full_width').css({left:0-$('#canvas').offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
                                if(!(Math.abs(parseFloat($(fc_lid).find('.full_width').css('left'))))){
                                    setTimeout(funco,100);
                                }
                            }
                        }
                        funco();
                        //////////////////////////////
				    var imgcontainer=$('#scroll_container');
					var ismobile=is_website_mobile();
					if(!ismobile){
						var chromebug=$('#scroll_container').data('chrome_bug');
						if(chromebug){
							imgcontainer=window;
						}
					}else imgcontainer=window;
                        $('.full_content img.img_lazy_load').lazyload({
                           threshold  : 0,
                        	  failure_limit : $('img.img_lazy_load').length,
                        	  container : imgcontainer,	
                        	  placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
                        	  load:function(){
                        		 var self=$(this);
                        		 var id=self.closest('.cstlayer').prop('id');
                        		if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
                        	 }
                        });	
                    }
                }
            }
        }
    });
}

function getTop(){//for ie6 css hack
  return document.documentElement.scrollTop;
}

function init_fullcolumn_fixed_code(){
	$(function(){
			setTimeout(function(){
					$('.full_column,.cstlayer').filter('[infixed=1]').each(function(){
					var self=$(this);
					 var container=$('#scroll_container');
					 var is_mobile_preview=false;
					 if($('.wp-mobile-device-premask').length){
						is_mobile_preview=true;
					}
					if(self.parent().is('#canvas')&&parseInt(self.css('top'))==0){
					var currpoor = ($('.full_width').width() - $('.full_content').width())/2;
					var newleft = self.ab_pos('left') + currpoor ;
					if(self.is('.cstlayer')){
						newleft =self.offset().left+$('#scroll_container').scrollLeft();
						if(is_mobile_preview){
							newleft =self.ab_pos_cnter('left');
						}
					}
					var wp_layer_abs=self;
					var layerid=wp_layer_abs.attr('id');
					 var oldstyle = wp_layer_abs.attr('style');
					var layerhtml=wp_layer_abs.html();
					var layerdiv=$("<div/>").attr({
						id:wp_layer_abs.attr('id'),
						'class':wp_layer_abs.attr('class'),
						infixed:1,
						style:wp_layer_abs.attr('style'),
					});
					wp_layer_abs.remove();
					container.append(layerdiv);
					var wp_layer_fix =$('#'+layerid).html(layerhtml)
					.attr('oldstyle',oldstyle)
					.addClass('full_column-fixed');
					wp_layer_fix.data('always_fix',true);
					wp_layer_fix.show();wp_layer_fix.css({'position':'fixed','top':'','left':newleft,'z-index':'999'})
					if($.browser.msie && ($.browser.version < 9)){
						wp_layer_fix.css({'top':'0px'});
						wp_layer_fix.find('.full_width').css({'top':'0px'});
					}
					var ismobile=is_website_mobile();
					var imgcontainer=window;
					if(!ismobile) imgcontainer=$('#scroll_container').add(window);
					wp_layer_fix.find('img.img_lazy_load').lazyload({
							threshold  : 0,
							failure_limit : wp_layer_fix.find('img.img_lazy_load').length,
							container : imgcontainer,
							placeholder:relativeToAbsoluteURL('template/default/images/blank.gif'),
							load:function(){
								 var self=$(this);
								 var id=self.closest('.cstlayer').prop('id');
								if(window['set_thumb_'+id]) window['set_thumb_'+id](this);
							 }
					});	
					// 固定通栏里显示动画
					wp_layer_fix.find('.cstlayer:not(.now_effecting)').showEffects();
									//explain:修复bug(2282多语言模块放置固定的通栏后异常),author:fpf,date:2015/03/30,action:add;
									var $multilingual = $(document).find('.wp-multilingual_content');
									if($multilingual.get(0) != 'undefined'){
											var $multilingual_content = $multilingual.find('.wp-content > .overz');
											if(parseInt($multilingual_content.length) > 1){
													$multilingual.find('.wp-content > .overz:last').remove();
											}
									}
							}
					});
		// 修复“通栏设置‘固定显示’后导致‘鼠标滚轮’事件异常（bug#4230）”
		$(document).bind("mousewheel DomMouseScroll MozMousePixelScroll", function(e){
			e = e || window.event;			
			var $target = $(e.target).closest('.full_column[infixed="1"],.cstlayer[infixed="1"]');
			if ($target.length > 0) {
				var wheeldelta=e.wheelDelta;
				var detail=e.detail||e.originalEvent.detail;
				if(e.type=='mousewheel'){
					var wheeldelta=e.deltaY || e.originalEvent.deltaY;
					wheeldelta=(wheeldelta>0)?1:-1;
				}else{
					var wheeldelta=e.wheelDelta || e.originalEvent.wheelDelta;
					if(!wheeldelta) wheeldelta=detail;
				}
				var $win = $(window),$stainer = $('#scroll_container'),
				$scroll = $stainer.height() <= $win.height() ? $stainer : $win,
				movey = wheeldelta * -(Math.abs(detail) > 3 ? 1 : 40);
				$scroll.scrollTop($scroll.scrollTop() - movey);
				$win = $stainer = $scroll = movey = null;
			}
			$target = null;
		});
					//explain:修复flash模块在360安全浏览器极速模式下鼠标:hover后无法触发滚动效果，该事件在采用Webkit内核的浏览器下都会触发,author:fpf,date:2015-01-15,action:add;
					$('div.wp-flash_content').each(function(){
							$(this).unbind('mousewheel').bind('mousewheel',function(event){
									var scrolltop=$('#scroll_container').scrollTop();
									if(event.wheelDelta>0){
											$('#scroll_container').scrollTop(scrolltop-50);
									} else{
											$('#scroll_container').scrollTop(scrolltop+50);
									}
							});
					});

			},300);
	})
	
	if(is_website_mobile()){
		$(window).scroll(function(){
			wpfullcolumn_float();
		});
	}else{
		$('#scroll_container').scroll(function(){
			wpfullcolumn_float();
		});
	}
}

function initCanvasHeight(){
	var maxheight=0;
	var helperfunc=function(dom){
		var degree=dom.data('deg')||dom.attr('deg');
		var pos=[parseInt(dom.css('left')),parseInt(dom.css('top'))]
		var w=dom.width();
		var h=dom.height();
		if(dom.hasClass('cstlayer')){
			var buttompos=$.divrotate.getDegreeModMaxPointOrigin(dom,degree,pos,[w,h],'buttom');
		}else{
			var buttompos=dom.ab_pos_cnter('top')+parseInt(dom.css('height'));
		}
		return buttompos;
	}
	var filterfunc=function(){
		return $(this).is(":not(div[deleted='deleted'])") && $(this).attr('childdel') != 'del';
	}
	$('#canvas  .cstlayer,#canvas  .full_column').filter(filterfunc).each(function(){
		var canvheight=helperfunc($(this));
		if(canvheight>maxheight) maxheight=canvheight;
	})
	$("#canvas").data('layermaxheight',maxheight);
	//#5460
	setTimeout(function(){
		$('#site_footer').find('.cstlayer').each(function(){
			var sitetop = parseInt($('#site_footer').css('top'));
			var thistop = parseInt($(this).css('top'))
			if(thistop<0&&sitetop<-thistop) {$(this).css('top',-sitetop);}
		})
	},100)
}

$.fn.layer_ready=function(func){
	var is_exec=false;
	var execfunc=function(){
		if(is_exec) return;
		func();
		is_exec=true;
	}
	$(this).bind('layer_ready',function(){
		execfunc();
	})
	
	$(function(){
		execfunc();
	})
};

(function(){
	var is_init=false;
	var init_pageinfo={}
	var is_layer_add={};
	var PageHistory={
		init:function(layerid,pageid){
			if(history && history.pushState){
				init_pageinfo[layerid]=pageid;
				if(is_init) return;
				window.onpopstate=function(e){
					var state=e.state;
					if(state && state.action=='page'){
						var layerid=state.layerid;
						$('#'+layerid).trigger('to_page',state.page);
					}
				}
				is_init=true;
			}
		},
		add_page:function(layerid,pageid){
			if(history && history.pushState){
				var loc=window.location.href;
				var layerend=layerid.replace(/.+(\w{5})$/,'$1');
				var paramregexp=new RegExp(layerend+'_p=[^&]+');
				var newloc='';
				if(loc.match(paramregexp)){
					newloc=loc.replace(paramregexp,layerend+'_p='+pageid);
				}else{
					if(loc.indexOf('?')>0){
						newloc=loc+'&'+layerend+"_p="+pageid
					}else{
						newloc=loc+'?'+layerend+"_p="+pageid
					}
				}
				newloc=newloc.replace(/.+?\?/,'?');
				if(!is_layer_add[layerid] && pageid != init_pageinfo[layerid]){
					history.replaceState({action:'page',layerid:layerid,page:init_pageinfo[layerid]}, document.title, loc);
					is_layer_add[layerid]=true;
				}
				history.pushState({action:'page',layerid:layerid,page:pageid}, document.title, newloc);
			}
		}
	};
	window.PageHistory=PageHistory;
})();

/**document ready js**/
$(document).bind('lastexec',function(){

	// Mobile device 2014/01/06
	if (window.MobileModel) {
		var $scontainer = $('#scroll_container'),canvaswidth = $('#canvas').width();
		$scontainer.unbind(".mbprevredhat.tmpredhat");
		if ($('#wp-mobile-device-header').length > 0) {
			// 手机模型定位
			var screenWidth = window.innerWidth||self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
			deviceOtherHeight = $('#wp-mobile-device-header').closest('.wp-new-manage-toolbar-position').height() + $('#wp-mobile-device-footer').height();
			var onlyOnce_resize_width = false;
			$(window).bind("resize.mbeditor", function(e, status){
				var screenHeight = window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
				$('#wp-mobile-device-sides').height(screenHeight - deviceOtherHeight).children('.mwrapper').height(screenHeight - deviceOtherHeight - 2);
				// 自定义滚动条样式
				var sidewidth = 14;/* 手机模型边缘宽度 */
				var mbtimer = setTimeout(function(){
					var newleft = ($._parseFloat($('#wp-mobile-device-header').css("left"))||0) + sidewidth;
					$scontainer.css({"left": (newleft - 10)+'px',"width": function(){/*-10是为了修复"缩放句柄被遮"问题*/
						if( onlyOnce_resize_width == false ){
							onlyOnce_resize_width = true;
							return ($(this).width() + (status?(sidewidth + 15 + 10):0))+'px';
						}else{
							return ;
						}
					},"margin": '0',"padding-left": '11px',"top": '-6px',"overflow-y": 'scroll'});
					$('#site_footer').css("left", '11px');/*11px是为了修复"缩放句柄被遮"问题*/
					if (status == undefined) $scontainer.mscroll("destroy");
					$scontainer.mscroll({difleft: 10,maskbg: '#ccc'});clearTimeout(mbtimer);
				}, 100);
			}).triggerHandler("resize.mbeditor", ['init']);
			$('#wp-mobile-device-header,#wp-mobile-device-sides,#wp-mobile-device-footer').css({"left": function(){
				return ((screenWidth - $(this).width()) / 2)+'px';
			}, "visibility": 'visible'});
			// 保存布局
			$('#wp-mobile-device-footer > span').click(function(){
				wp_floatpanel(parseToURL('wp_widgets','save_page'),{
					title: translate('page.saveLayout'),width: 418,overlay: true,isCenter: true,
					contentClass: 'wp-site-set_panel_c',id: 'wp-page_save',zIndex: 9999
				});
			});
		} else {/* 预览模式 */
			$scontainer.css("visibility", 'visible');
			$(window).load(function(){
				var $win = $(this),frmwidth = $win.width(),frmheight = window.getdeviceheight||565;
				$scontainer.height(frmheight);
				var mprevtimer = setTimeout(function(){
					$scontainer.mscroll({"maskcname": 'wp-mobile-device-premask',"difleft": -6,
					"height": frmheight,"barcname": 'wp-mobile-prescrollbar',"maskleft": frmwidth,"barleft": frmwidth});
					$win.triggerHandler("pageloaded");clearTimeout(mprevtimer);
					// 模拟“触屏”模式
					var maxtop = frmheight - $('.wp-mobile-prescrollbar > span.pane').height();
					$scontainer.bind("mousedown.mbprevredhat", function(e){
						e.preventDefault();
						var $prebar = $('.wp-mobile-prescrollbar'),pagey = e.pageY;
						$scontainer.bind("mousemove.tmpredhat", function(e){
							e.preventDefault();
							var scrltop = $scontainer.scrollTop(),movey = e.pageY - pagey;
							if (scrltop < 0) scrltop = 0;
							$scontainer.scrollTop(scrltop - movey);
						}).bind("mouseup.tmpredhat", function(e){
							e.preventDefault();$scontainer.unbind(".tmpredhat");
							$(parent.document).unbind(".rmredhat");
						});
						$(parent.document).bind("mouseup.rmredhat",function(){$scontainer.unbind(".tmpredhat")});
					});
				}, 150);
			});
		}
		$('#site_footer,#footer_content').width(canvaswidth);
	}
	
	function resizeCanvasHeight(){
		window.canv = $("#canvas");
		var container=$('#scroll_container');
		// 画布高度
		var cvhgt = window.getdeviceheight || window.innerHeight || self.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//$(window).height();
		var ua = /micromessenger/i.test(navigator.userAgent.toLowerCase());
		if (window.isHandheld&&!ua) cvhgt = Math.min(cvhgt, MobileUtils.getScreenHeight());
		cvhgt -= container.offset().top,mfooterheight = $('#wp-mobile-device-footer').height()||0;
		container.height(cvhgt - mfooterheight);
		if($('#site_footer').length>0){
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-$('#site_footer').height()-mfooterheight);
			if($('#site_footer:not(.only_copyright)').length>0){
				canvheight=Math.max(canvheight,$("#canvas").height());
			}
		}else{
			var canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt);
			canvheight=Math.max($("#canvas").data('layermaxheight'),cvhgt-mfooterheight);//没有页脚时去设备底部高度，防没有任何模块时有滚动条bug/4574
		}
		// 重置bSlider模块高度 2013/03/25
		$('.cstlayer[type="bslider"]:not(.isplate)').each(function(i, dom){
			$(dom).triggerHandler('resetbsliderheight', [canvheight]);
		});
		if(!canv) var canv = $("#canvas");
		canv.css('height',canvheight+'px');
		$('#scroll_container_bg').css('height',(canvheight+$('#site_footer').height())+'px');
		if($(window).width()-canv.width()<0) $('#scroll_container_bg').width(canv.width());
		else  $('#scroll_container_bg').css('width','100%');
		// 更新标尺位置Start 2012/3/2
		var canvleft = canv.offset().left;
		if (typeof $.fn.ruler_locate != 'undefined') {
			$.fn.ruler_locate({
				x : {left:canvleft+'px'},
				y : {height:canvheight+'px', left:(canvleft>17?canvleft-17:0)+'px'}
			});
			$('.line_y').height(canvheight);// 辅助线高度
		}
		// 在手机设备上访问 2014/02/08
		if (window.isHandheld) {
			var $container = $('#scroll_container'),$footer = $('#site_footer'),
			maxheight = $('#scroll_container_bg').height() + $('>.mblank_placeholder',$container).height();
			$container.css({"height": maxheight+'px',"overflow-x": 'hidden',"overflow-y": 'hidden'});
			if($footer.length) {
				if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
					$footer.css({'position':'absolute','top':$('#canvas').height()});
				}
				$footer.find('#footer_content').andSelf().width($('#canvas').width());
			}
			/*adpHandheld();*/$('.mloading-mask').remove();
			$container.css("visibility", 'visible');$(window).triggerHandler("pageloaded");
			// 修复ipad中iframe touchmove冲突问题(bug#97) 2014/09/16
			if (/ipad/.test(navigator.userAgent.toLowerCase())) {
				$(document.body).parent().andSelf().css({"overflow-x": 'hidden',"overflow-y": 'auto'});
				container.css({"height": 'auto',"overflow-y": 'auto'});
			}
		}
	}
	
	function correctFooterPos(){
		var canv = $("#canvas");
		var canvheight=canv.height();
		var canvwidth=canv.width();
		var containerOffsetLeft = $('#scroll_container').offset().left;
		$('#site_footer').css({left:canv.offset().left-containerOffsetLeft+$('#scroll_container').scrollLeft()+$.parseInteger($('#canvas').css("borderLeftWidth")),top:canvheight});
		$('#site_footer >.full_width').css({left:0-canv.offset().left+containerOffsetLeft-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$(window.MobileModel?'#canvas':'#scroll_container_bg').width()});
		if($('#wp-mobile-device-header').length) $('#site_footer >.full_width').css("left", '0px');
	}
	window.correctFooterPos=correctFooterPos;
	
	window.scroll_container_adjust=function(){
		initCanvasHeight();
		//resizeCanvasHeight();
        //微信下初始化加载cvans高度过大出现滚动条。bug/4574
        if (/micromessenger/i.test(navigator.userAgent.toLowerCase())) {
            setTimeout(function(){
            // fixed bug#1107
            var fxdpstr = $(window).data("fxdp_scrollpage")||'',_scrtop = $(window).scrollTop();
            resizeCanvasHeight();
            if(fxdpstr == 'fxdp') $(window).scrollTop(_scrtop);
            correctFooterPos();
            // 修复"微信浏览器中锚点异常(bug#1059)"问题
            var hstr = location.hash||'';
            if(hstr.length > 0){location.href = location.href;location.hash = hstr.substr(1)}
            },600)
        }else {
            resizeCanvasHeight();
            correctFooterPos();
        }
		
	}
	window.scroll_container_adjust();
	if(!canv) var canv = $("#canvas");
	$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	//浏览器缩放是自动调整高度
	var me = "orientation" in window && "onorientationchange" in window ? "orientationchange" : "resize"
	$(window).bind(me, function(e){
		if(e.target==window||e.target==document){
			resizeCanvasHeight();
			correctFooterPos();
			$('.full_column>.full_width').css({left:0-canv.offset().left+$('#scroll_container').offset().left-$('#scroll_container').scrollLeft()-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
			if($('.full_column-fixed').length){
				var full_column_left = 0-$('.full_column-fixed>.full_width').position().left;
				$('.full_column-fixed').css("left",full_column_left+"px");
			}
		}
	})
	
	if (!window.isHandheld) rotateDom($('.cstlayer'));
	//Preview need resize window
	if(window.opener){
		var winH = screen.availHeight || 768,winW = screen.availWidth || 1024;
		window.resizeTo(winW, winH);
	}
	// 新窗口打开超链接
	$.extend({
		openNewWin: function(URI){
			var win = window.open(URI,'_blank');
			win.focus;
		}
	});
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
;
/*! VelocityJS.org (1.3.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;f<g&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;f<g&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(a){for(var b=a.offsetParent||document;b&&"html"!==b.nodeType.toLowerCase&&"static"===b.style.position;)b=b.offsetParent;return b||document}var b=this[0],d=a(b),e=this.offset(),f=/^(?:body|html)$/i.test(d.nodeName)?{top:0,left:0}:c(d).offset();return e.top-=parseFloat(b.style.marginTop)||0,e.left-=parseFloat(b.style.marginLeft)||0,d.style&&(f.top+=parseFloat(d.style.borderTopWidth)||0,f.left+=parseFloat(d.style.borderLeftWidth)||0),{top:e.top-f.top,left:e.left-f.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):!(!p.isArray(a)||4!==a.length)&&i.apply(null,a),c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls),c=t.State.calls.length);for(var f=0;f<c;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;s<u;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{var G;if(v.Hooks.registered[B]){G=v.Hooks.getRoot(B);var H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(v.Normalizations.registered[G]?g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]("extract",null,I[1]):g(y).rootPropertyValueCache[G]=I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility));var n=g(l);if(f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&n){n.isAnimating=!1,n.rootPropertyValueCache={};var o=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=n.transformCache[b];n.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(o=!0,delete n.transformCache[b])}),f.mobileHA&&(o=!0,delete n.transformCache.translate3d),o&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(p){setTimeout(function(){throw p},1)}h&&f.loop!==!0&&h(e),n&&f.loop===!0&&!b&&(m.each(n.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360===0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var q=0,r=t.State.calls.length;q<r;q++)if(t.State.calls[q]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,n<=8&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(n<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:3,patch:0},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var g in e){var h=c+e[g],i=g;v.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(n<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){n&&!(n>9)||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var b=0;b<v.Lists.colors.length;b++)!function(){var a=v.Lists.colors[b];v.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!n||n>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return n<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(n<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(n<=8)e=m.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(i=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a)));var j=function(){i&&v.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===n&&"filter"===c?o.getPropertyValue(c):o[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(e=m(a).position()[c]+"px")}return e}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i)){var p=g(a);if(p&&p.isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0])}return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],n<=8)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var l=g(a);l&&l.isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((n||t.State.isAndroid&&!t.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(v.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;m.each(g(a).transformCache,function(c){return f=g(a).transformCache[c],"transformPerspective"===c?(h=f,!0):(9===n&&"rotateZ"===c&&(c="rotate"),void(b+=c+f+" "))}),h&&(b="perspective"+h+" "+b)}v.setPropertyValue(a,"transform",b)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return i?C.promise||null:n}function e(a,e){function f(f){var n,o;if(i.begin&&0===z)try{i.begin.call(q,q)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===D){var w,x,A,B=/^x$/i.test(i.axis)?"Left":"Top",E=parseFloat(i.offset)||0;i.container?p.isWrapped(i.container)||p.isNode(i.container)?(i.container=i.container[0]||i.container,w=i.container["scroll"+B],A=w+m(a).position()[B.toLowerCase()]+E):i.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+B]],x=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===B?"Top":"Left")]],A=m(a).offset()[B.toLowerCase()]+E),l={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:B,alternateValue:x}},element:a},t.debug&&console.log("tweensContainer (scroll): ",l.scroll,a)}else if("reverse"===D){if(n=g(a),!n)return;if(!n.tweensContainer)return void m.dequeue(a,i.queue);"none"===n.opts.display&&(n.opts.display="auto"),"hidden"===n.opts.visibility&&(n.opts.visibility="visible"),n.opts.loop=!1,n.opts.begin=null,n.opts.complete=null,u.easing||delete i.easing,u.duration||delete i.duration,i=m.extend({},n.opts,i),o=m.extend(!0,{},n?n.tweensContainer:null);for(var F in o)if("element"!==F){var G=o[F].startValue;o[F].startValue=o[F].currentValue=o[F].endValue,o[F].endValue=G,p.isEmptyObject(u)||(o[F].easing=i.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(o[F]),a)}l=o}else if("start"===D){n=g(a),n&&n.tweensContainer&&n.isAnimating===!0&&(o=n.tweensContainer);var H=function(b,c){var f,g,h;return p.isArray(b)?(f=b[0],!p.isArray(b[1])&&/^[\d-]/.test(b[1])||p.isFunction(b[1])||v.RegEx.isHex.test(b[1])?h=b[1]:(p.isString(b[1])&&!v.RegEx.isHex.test(b[1])||p.isArray(b[1]))&&(g=c?b[1]:j(b[1],i.duration),b[2]!==d&&(h=b[2]))):f=b,c||(g=g||i.easing),p.isFunction(f)&&(f=f.call(a,e,y)),p.isFunction(h)&&(h=h.call(a,e,y)),[f||0,g,h]};m.each(s,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(v.Names.camelCase(a))){var c=H(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var l=[i[k]];f&&l.push(f),j!==d&&l.push(j[k]),s[v.Names.camelCase(a)+h[k]]=l}delete s[a]}}});for(var K in s){var L=H(s[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(n&&n.isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),i._cacheValues&&o&&o[K]?(O===d&&(O=o[K].endValue+o[K].unitType),Q=n.rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(a,P),O=v.getPropertyValue(a,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(a,K));var R,S,T,U=!1,V=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]};R=V(K,O),O=R[0],T=R[1],R=V(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S=""));var W=function(){var d={myParent:a.parentNode||c.body,position:v.getPropertyValue(a,"position"),fontSize:v.getPropertyValue(a,"fontSize")},e=d.position===I.lastPosition&&d.myParent===I.lastParent,f=d.fontSize===I.lastFontSize;I.lastParent=d.myParent,I.lastPosition=d.position,I.lastFontSize=d.fontSize;var g=100,h={};if(f&&e)h.emToPx=I.lastEmToPx,h.percentToPxWidth=I.lastPercentToPxWidth,h.percentToPxHeight=I.lastPercentToPxHeight;else{var i=n&&n.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(i),d.myParent.appendChild(i),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(i,b,"hidden")}),t.CSS.setPropertyValue(i,"position",d.position),t.CSS.setPropertyValue(i,"fontSize",d.fontSize),t.CSS.setPropertyValue(i,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(i,b,g+"%")}),t.CSS.setPropertyValue(i,"paddingLeft",g+"em"),h.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(i,"width",null,!0))||1)/g,h.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(i,"height",null,!0))||1)/g,h.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(i,"paddingLeft"))||1)/g,d.myParent.removeChild(i)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),h.remToPx=I.remToPx,h.vwToPx=I.vwToPx,h.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(h),a),h};if(/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{h=h||W();var X=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===X?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:O*=h[T+"ToPx"]}switch(S){case"%":O*=1/("x"===X?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:O*=1/h[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}l[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(l[K]),a)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}l.element=a}l.element&&(v.Values.addClass(a,"velocity-animating"),J.push(l),n=g(a),n&&(""===i.queue&&(n.tweensContainer=l,n.opts=i),n.isAnimating=!0),z===y-1?(t.State.calls.push([J,q,i,null,C.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):z++)}var h,i=m.extend({},t.defaults,u),l={};switch(g(a)===d&&t.init(a),parseFloat(i.delay)&&i.queue!==!1&&m.queue(a,i.queue,function(b){t.velocityQueueEntryFlag=!0,g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:b}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=r;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}t.mock!==!1&&(t.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(t.mock)||1,i.delay*=parseFloat(t.mock)||1)),i.easing=j(i.easing,i.duration),i.begin&&!p.isFunction(i.begin)&&(i.begin=null),i.progress&&!p.isFunction(i.progress)&&(i.progress=null),i.complete&&!p.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=t.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,i.queue===!1?i.delay?setTimeout(f,i.delay):f():m.queue(a,i.queue,function(a,b){return b===!0?(C.promise&&C.resolver(q),!0):(t.velocityQueueEntryFlag=!0,void f(a))}),""!==i.queue&&"fx"!==i.queue||"inprogress"===m.queue(a)[0]||m.dequeue(a)}var h,i,n,o,q,s,u,x=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(i=!1,o=0,q=this,n=this):(i=!0,o=1,q=x?arguments[0].elements||arguments[0].e:arguments[0]),q=f(q)){x?(s=arguments[0].properties||arguments[0].p,u=arguments[0].options||arguments[0].o):(s=arguments[o],u=arguments[o+1]);var y=q.length,z=0;if(!/^(stop|finish|finishAll)$/i.test(s)&&!m.isPlainObject(u)){var A=o+1;u={};for(var B=A;B<arguments.length;B++)p.isArray(arguments[B])||!/^(fast|normal|slow)$/i.test(arguments[B])&&!/^\d/.test(arguments[B])?p.isString(arguments[B])||p.isArray(arguments[B])?u.easing=arguments[B]:p.isFunction(arguments[B])&&(u.complete=arguments[B]):u.duration=arguments[B]}var C={promise:null,resolver:null,rejecter:null};i&&t.Promise&&(C.promise=new t.Promise(function(a,b){C.resolver=a,C.rejecter=b}));var D;switch(s){case"scroll":D="scroll";break;case"reverse":D="reverse";break;case"finish":case"finishAll":case"stop":m.each(q,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||u!==!0&&!p.isString(u)||(m.each(m.queue(b,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(u)?u:"",[]))});var E=[];return m.each(t.State.calls,function(a,b){
b&&m.each(b[1],function(c,e){var f=u===d?"":u;return f!==!0&&b[2].queue!==f&&(u!==d||b[2].queue!==!1)||void m.each(q,function(c,d){if(d===e)if((u===!0||p.isString(u))&&(m.each(m.queue(d,p.isString(u)?u:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(u)?u:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&m.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),E.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(m.each(E,function(a,b){l(b,!0)}),C.promise&&C.resolver(q)),a();default:if(!m.isPlainObject(s)||p.isEmptyObject(s)){if(p.isString(s)&&t.Redirects[s]){h=m.extend({},u);var F=h.duration,G=h.delay||0;return h.backwards===!0&&(q=m.extend(!0,[],q).reverse()),m.each(q,function(a,b){parseFloat(h.stagger)?h.delay=G+parseFloat(h.stagger)*a:p.isFunction(h.stagger)&&(h.delay=G+h.stagger.call(b,a,y)),h.drag&&(h.duration=parseFloat(F)||(/^(callout|transition)/.test(s)?1e3:r),h.duration=Math.max(h.duration*(h.backwards?1-a/y:(a+1)/y),.75*h.duration,200)),t.Redirects[s].call(b,b,h||{},a,y,q,C.promise?C:d)}),a()}var H="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return C.promise?C.rejecter(new Error(H)):console.log(H),a()}D="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(q,function(a,b){p.isNode(b)&&e(b,a)}),h=m.extend({},t.defaults,u),h.loop=parseInt(h.loop,10);var K=2*h.loop-1;if(h.loop)for(var L=0;L<K;L++){var M={delay:h.delay,progress:h.progress};L===K-1&&(M.display=h.display,M.visibility=h.visibility,M.complete=h.complete),w(q,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};e!==f-1?i.complete=i.begin=null:i.complete=function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,k,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});;
/**********************
   Velocity UI Pack
**********************/

/* VelocityJS.org UI Pack (5.0.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */

;(function (factory) {
    /* CommonJS module. */
    if (typeof require === "function" && typeof exports === "object" ) {
        module.exports = factory();
    /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define([ "velocity" ], factory);
    /* Browser globals. */
    } else {
        factory();
    }
}(function() {
return function (global, window, document, undefined) {

    /*************
        Checks
    *************/

    if (!global.Velocity || !global.Velocity.Utilities) {
        window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
        return;
    } else {
        var Velocity = global.Velocity,
            $ = Velocity.Utilities;
    }

    var velocityVersion = Velocity.version,
        requiredVersion = { major: 1, minor: 1, patch: 0 };

    function greaterSemver (primary, secondary) {
        var versionInts = [];

        if (!primary || !secondary) { return false; }

        $.each([ primary, secondary ], function(i, versionObject) {
            var versionIntsComponents = [];

            $.each(versionObject, function(component, value) {
                while (value.toString().length < 5) {
                    value = "0" + value;
                }
                versionIntsComponents.push(value);
            });

            versionInts.push(versionIntsComponents.join(""))
        });

        return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));
    }

    if (greaterSemver(requiredVersion, velocityVersion)){
        var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
        alert(abortError);
        throw new Error(abortError);
    }

    /************************
       Effect Registration
    ************************/

    /* Note: RegisterUI is a legacy name. */
    Velocity.RegisterEffect = Velocity.RegisterUI = function (effectName, properties) {
        /* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
        function animateParentHeight (elements, direction, totalDuration, stagger) {
            var totalHeightDelta = 0,
                parentNode;

            /* Sum the total height (including padding and margin) of all targeted elements. */
            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                if (stagger) {
                    /* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
                    totalDuration += i * stagger;
                }

                parentNode = element.parentNode;

                $.each([ "height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(i, property) {
                    totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
                });
            });

            /* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
            Velocity.animate(
                parentNode,
                { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta },
                { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) }
            );
        }

        /* Register a custom redirect for each effect. */
        Velocity.Redirects[effectName] = function (element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
            var finalElement = (elementsIndex === elementsSize - 1);

            if (typeof properties.defaultDuration === "function") {
                properties.defaultDuration = properties.defaultDuration.call(elements, elements);
            } else {
                properties.defaultDuration = parseFloat(properties.defaultDuration);
            }

            /* Iterate through each effect's call array. */
            for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
                var call = properties.calls[callIndex],
                    propertyMap = call[0],
                    redirectDuration = (redirectOptions.duration || properties.defaultDuration || 1000),
                    durationPercentage = call[1],
                    callOptions = call[2] || {},
                    opts = {};

                /* Assign the whitelisted per-call options. */
                opts.duration = redirectDuration * (durationPercentage || 1);
                opts.queue = redirectOptions.queue || "";
                opts.easing = callOptions.easing || "ease";
                opts.delay = parseFloat(callOptions.delay) || 0;
                opts._cacheValues = callOptions._cacheValues || true;

                /* Special processing for the first effect call. */
                if (callIndex === 0) {
                    /* If a delay was passed into the redirect, combine it with the first call's delay. */
                    opts.delay += (parseFloat(redirectOptions.delay) || 0);

                    if (elementsIndex === 0) {
                        opts.begin = function() {
                            /* Only trigger a begin callback on the first effect call with the first element in the set. */
                            redirectOptions.begin && redirectOptions.begin.call(elements, elements);

                            var direction = effectName.match(/(In|Out)$/);

                            /* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
                               and the first RAF tick. */
                            if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {
                                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                    Velocity.CSS.setPropertyValue(element, "opacity", 0);
                                });
                            }

                            /* Only trigger animateParentHeight() if we're using an In/Out transition. */
                            if (redirectOptions.animateParentHeight && direction) {
                                animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
                            }
                        }
                    }

                    /* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
                    if (redirectOptions.display !== null) {
                        if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
                            opts.display = redirectOptions.display;
                        } else if (/In$/.test(effectName)) {
                            /* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
                            var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
                            opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
                        }
                    }

                    if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
                        opts.visibility = redirectOptions.visibility;
                    }
                }

                /* Special processing for the last effect call. */
                if (callIndex === properties.calls.length - 1) {
                    /* Append promise resolving onto the user's redirect callback. */
                    function injectFinalCallbacks () {
                        if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
                            $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                Velocity.CSS.setPropertyValue(element, "display", "none");
                            });
                        }

                        redirectOptions.complete && redirectOptions.complete.call(elements, elements);

                        if (promiseData) {
                            promiseData.resolver(elements || element);
                        }
                    }

                    opts.complete = function() {
                        if (properties.reset) {
                            for (var resetProperty in properties.reset) {
                                var resetValue = properties.reset[resetProperty];

                                /* Format each non-array value in the reset property map to [ value, value ] so that changes apply
                                   immediately and DOM querying is avoided (via forcefeeding). */
                                /* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
                                if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
                                    properties.reset[resetProperty] = [ properties.reset[resetProperty], properties.reset[resetProperty] ];
                                }
                            }

                            /* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
                            var resetOptions = { duration: 0, queue: false };

                            /* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
                            if (finalElement) {
                                resetOptions.complete = injectFinalCallbacks;
                            }

                            Velocity.animate(element, properties.reset, resetOptions);
                        /* Only trigger the user's complete callback on the last effect call with the last element in the set. */
                        } else if (finalElement) {
                            injectFinalCallbacks();
                        }
                    };

                    if (redirectOptions.visibility === "hidden") {
                        opts.visibility = redirectOptions.visibility;
                    }
                }

                Velocity.animate(element, propertyMap, opts);
            }
        };

        /* Return the Velocity object so that RegisterUI calls can be chained. */
        return Velocity;
    };

    /*********************
       Packaged Effects
    *********************/

    /* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
    /* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
    Velocity.RegisterEffect.packagedEffects =
        {
            /* Animate.css */
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [ { translateY: -30 }, 0.25 ],
                    [ { translateY: 0 }, 0.125 ],
                    [ { translateY: -15 }, 0.125 ],
                    [ { translateY: 0 }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 0 }, 0.125 ]
                ]
            },
            /* Animate.css */
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuad", 1 ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 0, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [ { scaleX: 1.1, scaleY: 1.1 }, 0.50, { easing: "easeInExpo" } ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [ { rotateZ: 15 }, 0.20 ],
                    [ { rotateZ: -10 }, 0.20 ],
                    [ { rotateZ: 5 }, 0.20 ],
                    [ { rotateZ: -5 }, 0.20 ],
                    [ { rotateZ: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "callout.tada": {
                defaultDuration: 1000,
                calls: [
                    [ { scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20 ]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 1, 0 ] } ]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 0, 1 ] } ]
                ]
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -45 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 25 } ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateY: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateY: 10 }, 0.25 ],
                    [ { opacity: 1, rotateY: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateY: -10 }, 0.50 ],
                    [ { opacity: 0, rotateY: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateX: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateX: 10 }, 0.25 ],
                    [ { opacity: 1, rotateX: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateX: -15 }, 0.50 ],
                    [ { opacity: 0, rotateX: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Magic.css */
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "100%", "50%" ], transformOriginY: [ "100%", "100%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "100%" ], transformOriginY: [ "100%", "100%" ], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], rotateY: [ 0, 160 ] }, 1, { easing: "easeInOutSine" } ]
                ]
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuint", 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" } ]
                ],
                reset: { scaleX: 1, scaleY: 1, rotateY: 0 }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 1.5 ], scaleY: [ 1, 1.5 ], translateZ: 0 } ]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0.5, scaleY: 0.5, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0.625 ], scaleY: [ 1, 0.625 ], translateZ: 0 } ]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 1.3, scaleY: 1.3, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],
                    [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [ { scaleX: 0.95, scaleY: 0.95 }, 0.35 ],
                    [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],
                    [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.30 ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: 10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceUpOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: 20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 30, -1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: -10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceDownOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: -20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: 1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 30, -1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: -10 }, 0.20 ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [ { translateX: 30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: -1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            /* Animate.css */
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ -30, 1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: 10 }, 0.20 ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [ { translateX: -30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: 1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            /* Magic.css */
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: [ 0, -180 ] } ]
                ]
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: [ 0, -180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            }
        };

    /* Register the packaged effects. */
    for (var effectName in Velocity.RegisterEffect.packagedEffects) {
        Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
    }

    /*********************
       Sequence Running
    **********************/

    /* Note: Sequence calls must use Velocity's single-object arguments syntax. */
    Velocity.RunSequence = function (originalSequence) {
        var sequence = $.extend(true, [], originalSequence);

        if (sequence.length > 1) {
            $.each(sequence.reverse(), function(i, currentCall) {
                var nextCall = sequence[i + 1];

                if (nextCall) {
                    /* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
                       in the previous call's begin callback. Otherwise, chained calls are normally triggered
                       in the previous call's complete callback. */
                    var timing = (currentCall.options && currentCall.options.sequenceQueue === false) ? "begin" : "complete",
                        callbackOriginal = nextCall.options && nextCall.options[timing],
                        options = {};

                    options[timing] = function() {
                        var nextCallElements = nextCall.elements || nextCall.e;
                        var elements = nextCallElements.nodeType ? [ nextCallElements ] : nextCallElements;

                        callbackOriginal && callbackOriginal.call(elements, elements);
                        Velocity(currentCall);
                    }

                    nextCall.options = $.extend({}, nextCall.options, options);
                }
            });

            sequence.reverse();
        }

        Velocity(sequence[0]);
    };
}((window.jQuery || window.Zepto || window), window, document);
}));;
;(function (window) {
	$.WOPOP_EFFECTS={};
	$.WOPOP_EFFECTS['fromleft']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',0-$(dom).width());
			dom.velocity({left:orileft+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['frombottom']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('top',container.scrollTop()+container.height()+$(dom).height());
			dom.velocity({top:oritop+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fromright']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',container.width()-$(dom).width());
			dom.velocity({left:orileft+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fromtop']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			// 考虑「通栏」元素（bug#4284）
			var $layer = $(dom),
			initop = ($layer.attr("fatherid")||"").length ? 0 : (container.scrollTop() - $(dom).height());
			$layer.css("top", initop);
			//$(dom).css('top',container.scrollTop()-$(dom).height());
			dom.velocity({top:oritop+'px'},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fade']=function(dom,options){
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('opacity',0);
			dom.velocity({opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-out',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['rotation']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "rotateY", "180deg");
		$(dom).show();
		_getEffectDom(dom).done(function(dom){
			dom.velocity({rotateY:["0deg","180deg"]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['rotation2d']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$(dom).show();
		_getEffectDom(dom).done(function(dom){
			dom.velocity({rotateZ:["360deg","0deg"]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'linear'})
			.velocity({rotateZ:["360deg","0deg"]},
			{delay:0,duration: (duration*1000),display: "block",loop:true,easing:'linear',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['bounceIn']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "0.3");
		$(dom).css('opacity',0);
		_getEffectDom(dom).done(function(dom){
			dom
			.velocity({scale:[1.05,0.3],opacity:[1,0]},{delay:(delay*1000),duration: (duration*333),display: "block"})
			.velocity({scale:[0.7,1.05]},{delay:0,duration: (duration*333),display: "block"})
			.velocity({scale:[1,0.7]},{delay:0,duration: (duration*333),display: "block",complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['big2small']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "2");
		_getEffectDom(dom).done(function(dom){
			dom.velocity({scale:[1,2],opacity:[1,0]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-in',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['small2big']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		$.Velocity.hook($(dom), "scale", "0.5");
		_getEffectDom(dom).done(function(dom){
			dom.velocity({scale:[1,0.5],opacity:[1,0]},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease-in',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromLeft']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',0-$(dom).width());
			$(dom).css('opacity',0);
			dom.velocity({left:orileft+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromBottom']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('top',container.scrollTop()+container.height()+$(dom).height());
			$(dom).css('opacity',0);
			dom.velocity({top:oritop+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromRight']=function(dom,options){
		var orileft=parseInt($(dom).css('left'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('left',container.width()-$(dom).width());
			dom.velocity({left:orileft+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['fadeFromTop']=function(dom,options){
		var oritop=parseInt($(dom).css('top'))||0;
		var orival=parseInt($(dom).css('opacity'))||1;
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);
		if(!$.wismobile||$.WOPOP_EFFECTS._isEditMode()){
			var container=$('#scroll_container');
		}else{
			var container=$(window);
		}
		_getEffectDom(dom).done(function(dom){
			$(dom).css('top',container.scrollTop()-$(dom).height());
			dom.velocity({top:oritop+'px',opacity:orival},
			{delay:(delay*1000),duration: (duration*1000),display: "block",easing:'ease',complete:create_complete(options)})
		})
	}
	
	$.WOPOP_EFFECTS['light']=function(dom,options){
		var delay=$.WOPOP_EFFECTS._parseNum(options['delay'],1);
		var duration=$.WOPOP_EFFECTS._parseNum(options['duration'],1);

		_getEffectDom(dom).done(function(dom){
			dom.velocity({opacity: 1},
			{delay:(delay*1000),duration:(duration*500),display: "block",easing:'ease-in-out'})
			.velocity({opacity:[0,1]},
			{delay:0,duration: (duration*500),display: "block",loop:true,easing:'ease-in-out',complete:create_complete(options)})
		})
	}
	
	var effect_map = 'callout.bounce,callout.shake,callout.flash,callout.pulse,callout.swing,callout.tada,';
	effect_map += 'transition.flipBounceXOut,transition.flipBounceYOut,transition.whirlOut,transition.shrinkOut,transition.perspectiveLeftOut,';
	effect_map += 'transition.expandOut,transition.bounceOut,transition.slideUpBigOut,transition.slideDownBigOut,transition.perspectiveRightOut,';
	effect_map += 'transition.slideLeftBigOut,transition.slideRightBigOut,transition.perspectiveUpOut,transition.perspectiveDownOut';
	$.each(effect_map.split(','), function(i, effect_name){
		$.WOPOP_EFFECTS[effect_name] = function(dom, options){
			var delay = $.WOPOP_EFFECTS._parseNum(options['delay'], 1);
			var duration = $.WOPOP_EFFECTS._parseNum(options['duration'], 1);
			var l = 0,loop = $.WOPOP_EFFECTS._parseNum(options['loop'], 0),
			loop_infinite = $.WOPOP_EFFECTS._parseNum(options['loop_infinite'], 0);
			
			_getEffectDom(dom).done(function(dom){
				(function(){
					var self = arguments.callee;
					dom.velocity(effect_name, {
						delay: (delay * 1000),duration: (duration * 1000),
						display: 'block',complete: function(){
							if (loop_infinite ? true : l < loop) self();
							else create_complete(options).call(this);
							l++;
						}
					});
				})();
			});
		};
	});
	
	function create_complete(effects){
		//返回conplete函数
		return function(){
			var dom=$(this);
			if(dom.data('wopop_effect_oristyle')){
				dom.attr('style',dom.data('wopop_effect_oristyle')).show();
				dom.removeData('wopop_effect_oristyle');
			}
			dom.trigger('effect_complete');
			dom.removeClass('now_effecting');
			var cancontainer=$('#overflow_canvas_container');
			if(cancontainer.length){
				var stacks=cancontainer.data('stacks');
				if(stacks && stacks.length){
					var newstacks=[];
					for(var i=0;i<stacks.length;i++){
						if(!stacks[i].is(dom)){
							newstacks.push(stacks[i]);
						}
					}
					cancontainer.data('stacks',newstacks);
					if(!newstacks.length){
						cancontainer.css('overflow-y','').css('height','').removeData('is_overflow');
					}
				}
			}
		}
	}
	
	$.fn.showEffects=function(force_show,show_effects){
		$.Velocity.defaults.mobileHA=false;
		var fullpagedom=$('.fullpage_alllist');
		var browsersupport=!($.browser.msie && $.browser.version <9); //IE 9以下不支持动画效果
		if(!fullpagedom.length || force_show){
			return this.each(function() {
				var self = $(this); 
				var effects=show_effects;
				if(!(effects&&effects.effect)) effects=self.data('wopop_effects');
				if(effects&&effects.effect){
					var deg=self.data('deg')||0;
					// 固定通栏里显示动画
					var infixedparentel=self.closest('.full_column[infixed=1],.cstlayer[infixed=1]');
					if(infixedparentel.length){
						if(infixedparentel.parent().is('#canvas')&&parseInt(infixedparentel.css('top'))==0){
							return;
						}
						if(self.is('.now_effecting')) return;
					}
					var style=self.attr('style').replace(/display:\s*none\s*;?/,'');
					if(!deg){
						style=style.replace(/ (-\w+-)?transform-origin:[^;]+;/g,'');
					}
					if(!self.data('wopop_effect_oristyle')) self.data('wopop_effect_oristyle',style);
					
					$.Velocity.hook($(self), "rotateZ", deg+"deg");
					
					self.hide();
					if($.WOPOP_EFFECTS[effects.effect] && browsersupport){
						self.addClass('now_effecting');
						if(!$.wismobile&&self.closest('#canvas').length ){ 
							_getEffectDom(self).done(function(){
								var cancontainer=$('#overflow_canvas_container');
								if(cancontainer.length){
									var stacks=cancontainer.data('stacks');
									if(!stacks) stacks=[];
									if(!cancontainer.data('is_overflow')){
										var canh=$('#canvas').outerHeight();
										cancontainer.css('overflow-y','hidden').css('height',canh+'px').data('is_overflow',true);
										var timer=setInterval(function(){
											if(cancontainer.data('is_overflow')){
												var nowcanh=$('#canvas').outerHeight();
												if(nowcanh != canh){
													canh=nowcanh;
													cancontainer.css('height',canh+'px');
												}
											}else{
												clearInterval(timer);
											}
										},1000);
									}
									stacks.push(self);
									cancontainer.data('stacks',stacks);
								}
							})
						}
						$.WOPOP_EFFECTS[effects.effect](self,effects);
					}else{
						self.show();
					}
				}
			});
		}
	}
	
	$.fn.wopop_effect_command=function(command,args){
		if(command=='stop'){
			return this.each(function() {
				stop_effect($(this));
			});
		}
	}
	
	$.WOPOP_EFFECTS._parseNum=function(num,orival){
		if(num==0) return 0;
		return num || orival;
	}
	
	function stop_effect(dom){
		dom.velocity("stop", true);
		if(dom.data('wopop_effect_oristyle')) {
			$.Velocity.hook($(dom), "scale", "1");
			$.Velocity.hook($(dom), "rotateY", "0deg");
			var deg=dom.data('deg')||0;
			$.Velocity.hook($(dom), "rotateZ", deg+"deg");

			dom.attr('style',dom.data('wopop_effect_oristyle'));
		}

//		if(dom.data('wopop_effect_oristyle')) console.log(dom,dom.data('wopop_effect_oristyle'))
		dom.removeData('wopop_effect_oristyle');
		dom.removeClass('now_effecting');
		dom.trigger('effect_complete');
		var cancontainer=$('#overflow_canvas_container');
		if(cancontainer.length){
			var stacks=cancontainer.data('stacks');
			if(stacks && stacks.length){
				var newstacks=[];
				for(var i=0;i<stacks.length;i++){
					if(!stacks[i].is(dom)){
						newstacks.push(stacks[i]);
					}
				}
				cancontainer.data('stacks',newstacks);
				if(!newstacks.length){
					cancontainer.css('overflow-y','').css('height','').removeData('is_overflow');
				}
			}
		}
	}
	
	function _getEffectDom(dom){
		var fullpagedom=$('.fullpage_alllist');
		var dfd=$.Deferred();
		if(fullpagedom.length){
			dfd.resolve($(dom));
		}else{
			var ismobile=(typeof(MobileUtils)=='object');
			if(!ismobile){
				var container=$('#scroll_container');
				/**
				 * 修复因“固定背景”而导致chrome下图片显示异常问题（bug#4394）
				 * bug#4394,bug#4162,bug#4172,bug#4208,bug#4322,bug#4337均由“固定背景”的修复方案导致的，伤不起呀！！！
				 */ 
				if (container.data('chrome_bug')) container = window;
			}else{
				var container=window;
			}
			if(isDomInView($(dom),container)){
				dfd.resolve($(dom));
			}else{
				$(container).bind('scroll',function(e){
					if(isDomInView($(dom),container)){
						dfd.resolve($(dom));
						$(this).unbind(e);
					}
				})
			}
		}
		return dfd;
	}
	
	function isDomInView(dom,container){
		var fold=0;var containerheight=0;
		if (container=== undefined || container === window) {
				fold = $(window).scrollTop();
				containerheight=$(window).height();
		} else {
				fold = $(container).scrollTop();
				containerheight=$(container).height();
		}
		var navheight=$('#wp-mobile_navhandler').height()+$('#wp-mobile_navhandler').height();
		return fold+containerheight-navheight > dom.ab_pos('top');//parseInt(dom.css('top'));
	}
	
	$.WOPOP_EFFECTS._hasEffectFilter=function(){
		var self=$(this);
		if(self.attr('deleted')=='deleted') return false;
		var effects=self.data('wopop_effects');
		if(effects&&effects.effect){
			return true;
		}
		return false;
	}
	
	$.WOPOP_EFFECTS._isEditMode=function(){
		if($.saveLayout&&$.isFunction($.saveLayout.save)) return true;
		return false;
	}
	
	var curfullpageindex;
	$.WOPOP_EFFECTS._setindex=function(index){
		curfullpageindex=index;
	}
	
	$.WOPOP_EFFECTS._getindex=function(){
		return curfullpageindex;
	}
	
	var effectparams={
		fromleft:{delay:0,duration:1.20},
		frombottom:{delay:0,duration:1.20},
		fromright:{delay:0,duration:1.20},
		fromtop:{delay:0,duration:1.20},
		fade:{delay:0,duration:0.90},
		rotation:{delay:0,duration:1.20},
		rotation2d:{delay:0,duration:1.20},
		bounceIn:{delay:0,duration:2.20},
		big2small:{delay:0,duration:1.20},
		small2big:{delay:0,duration:1.20},
		fadeFromLeft:{delay:0,duration:1.20},
		fadeFromBottom:{delay:0,duration:1.20},
		fadeFromRight:{delay:0,duration:1.20},
		fadeFromTop:{delay:0,duration:1.20},
		light:{delay:0,duration:1.20}
	}
	$.WOPOP_EFFECTS._getDefaultParam=function(effectname){
		var opts=effectparams[effectname];
		if(!opts) opts={delay:0,duration:1.20}
		return opts;
	}
})(window);

;
function fullpagefooterinit(){
	//fullpagefooterdrag();
	//fullpagefooterresize();
	//$.showSiteFooterTips();
	$('.fullpage_alllist').each(function(){
		if($('.full_column:not([deleted="deleted"])').length > 0){
	        wp_alert(translate('full_column.already in backplane'));
	    }
	})
	$('.full_pagescroll').each(function(){
		fullpagescrollinit($(this));
	})
        //点亮滚亮操作
        $(document).bind('fullpage_scroll_pro',function(e,section){
            setTimeout(function(){
                if($('#wp-property_settings2').length){
                    //var index=$.parseInteger(section.replace('page',''));
                    var index='';
                    $('#canvas #fullPage-nav li').each(function(e){
                       // if($(this).find('a.active').length>0) index = e + 1;
                    })
                    $('.fullpage_alllist .section').each(function(e){
                        if($(this).hasClass('active')) index = e + 1;
                    })
                    
                    if(index>0){
                        //$('#wp-property_settings2 .wp-manage-panel-album-img:eq('+(index-1)+')').css('border-color','red');
                        $('#all_extra_img_div .wp-manage-panel-album-img').each(function(i){
                            var j = i + 1;
                            if(j==index) $(this).addClass('action');
                            else         $(this).removeClass('action');
                        })
                    }
                }
            },100)
        })
}

function fullpagescrollinit(dom){
	dom.children('.full_width').css({left:0-canv.offset().left-$.parseInteger($('#canvas').css("borderLeftWidth")),width:$('#scroll_container_bg').width()});
	dom.wp_rightkey(); 
	if(dom.is(':not(.isplate)')){
//		fullpagescrolldrag(dom);    
		fullpagescrollresize(dom);
                setTimeout(function(){
                        fullpagescrolldrop(dom);
                },1300);
		//fullpagescrolldrop(dom);
	}
	
}
/*
function fullpagefooterdrag(){
	var maxminusheight=0;
	var curcanvheight=canv.height();
	var Command=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			blockel.css('top',val.top);
			canv.height(val.canvheight);
			$('#scroll_container_bg').css('height',(val.canvheight+blockel.height())+'px');
			$.fullpageupdateselectbgopt();
			$.updatepospropblk();
			$.canvasHeightChange();
	 },null,{returntype:'class'});
	 
	 var undoobj=null;
	$('#site_footer').draggable({
			cursor: 'move',
			axis: "y",
			start: function(event, ui){
				initCanvasHeight();
				var canvasminheight=canv.data('layermaxheight')||0;
				curcanvheight=canv.height();
				maxminusheight=curcanvheight-canvasminheight;
				undoobj=new Command('site_footer');
				undoobj.setOldVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight});
			},
			drag: function(event, ui){

				var topmovepx = ui.position.top - ui.originalPosition.top;
				if(topmovepx<0){
					var delta=0-topmovepx;
					if(delta>maxminusheight){
						var canvasminheight=canv.data('layermaxheight')||0;
						ui.position.top=ui.originalPosition.top-maxminusheight;
						canv.height(canvasminheight);
						$('#scroll_container_bg').css('height',(canvasminheight+$(this).height()+100)+'px');
						$.fullpageshowselectbgopt($(this));
						$(this).triggerHandler('drag_progress',[{left:0,top:ui.position.top}]);
						return;
					} 
				}
				$(this).triggerHandler('drag_progress',[{left:0,top:ui.position.top}]);
				canv.height(curcanvheight+topmovepx);
				$.fullpageshowselectbgopt($(this));
				$('#scroll_container_bg').css('height',(curcanvheight+topmovepx+$(this).height()+100)+'px');
			},
			stop:function(event, ui){
				var topmovepx = ui.position.top - ui.originalPosition.top;
				canv.height(curcanvheight+topmovepx);
				$('#scroll_container_bg').css('height',(curcanvheight+topmovepx+$(this).height()+100)+'px');
				$.canvasHeightChange();
				correctFooterPos();
				undoobj.insertWithNewVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight+topmovepx});		
				undoobj=null;
				$(this).trigger('drag_stop',[{left:parseInt($(this).css('left')),top:parseInt($(this).css('top'))}]);
			}
			
	});
}
*/

function fullpagescrolldrag(dom){
	dom.wp_drag();
}

function fullpagescrollresize(dom){
	var createhandlefunc=function(handle){
		     dom.each(function(){
					 var hname = 'ui-resizable-'+handle;
					var axis = $('<div class="ui-resizable-handle ' + hname + '"><p class="knob "></p></div>');
					
					axis.css({zIndex: 1000});
					$(this).children('.full_width').append(axis);
			 })
				
	}
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000}).hide();
					$(this).children('.full_width').append(axis);
			  })
	}
	createhandlefunc('n');
	createhandlefunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var fullpagescrollbuttompos;
	dom.resizable({
			handles: {n: '>.full_width .ui-resizable-n',s: '>.full_width .ui-resizable-s'},
			noinit:true,
			canvascontain: '#canvas',
			distance: 0,
		     concernLock:true,
			scroll: true,
			create:function(){
				$(this).children('.full_width').find('.ui-resizable-handle').hide();
			},
			start: function(event, ui){
				fullpagescrollbuttompos=$.getFullColChildMaxButtomfullpage(dom);
				var self=$(this);
				var resizeundo=new ResizeCommand(self.attr('id'));
				var oldcssarr=['top','height'];
				var oldval={};
				for(var i=0;i<oldcssarr.length;i++){
					oldval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				resizeundo.setOldVal(oldval);
				$(document).data('resizeundo',resizeundo);
			},
			resize: function(event, ui){
				
				var curtop=dom.ab_pos_cnter('top');
				var curheight=$.parseInteger(dom.css('height'));
				if($.getElementAreaInf($(this))=='canvas'){
					var maxbuttom=Math.max(curtop+fullpagescrollbuttompos,curtop+curheight);
					$.canvasheightresizeOrigin(maxbuttom);
				}
				
				$(this).children('.full_content,.full_width').height($(this).height());
				$(this).triggerHandler('resize_progress',[{ui:ui}]);
				$.fullpageshowselectbgopt($(this));
				
			},
			stop:function(event, ui){
				$(this).children('.full_content,.full_width').height($(this).height());
				$.fullpageshowselectbgopt($(this));
				var resizeundo=$(document).data('resizeundo');
				$(document).removeData('resizeundo');
				var self=$(this);
				var oldcssarr=['top','height'];
				var newval={};
				for(var i=0;i<oldcssarr.length;i++){
					newval[oldcssarr[i]]=self.css(oldcssarr[i]);
				}
				$(this).triggerHandler('resize_stop',[{ui:ui}]);
				resizeundo.insertWithNewVal(newval);	
			}
			
	});
        //初始化resize 第一屏自适应处理
//        $(this).css({"width":($(window).width()-0) + "px","left":-$.fullpagecanvasleft() + "px"});//浏览器大小缩放处理
//        var $paragraph_image = $(this).find('.section .bg > img');
//        var maxjson = {width:$(window).width(),height:$(window).height()};
//        var json = {width:$paragraph_image.width(),height:$paragraph_image.height()};
//        $.wp_fullpagezoom($(this),maxjson,json,'noresize');
}
/*
function fullpagefooterresize(){
	var createhandlefunc=function(handle){
				var hname = 'ui-resizable-'+handle;
				var axis = $('<div class="ui-resizable-handle ' + hname + '"><p class="knob "></p></div>');
				axis.css({zIndex: 1000});
				$('#site_footer >.full_width').append(axis);
	}
	var createplaceholderfunc=function(handle){
				var hname = 'placeholder-'+handle;
				var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
				axis.css({zIndex: 1000});
				$('#site_footer> .full_width').append(axis);
	}
	createhandlefunc('n');
	createhandlefunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	
	var maxminusheight=0;
	var curcanvheight=canv.height();
	var canvasminheight=0;
	
	var Command=Undo.Command.createModuleCommand(function(blockid,val){
			var blockel=$('#'+blockid);
			blockel.css('top',val.top);
			blockel.css('height',val.height);
			canv.height(val.canvheight);
			blockel.children('.full_content,.full_width').height(val.height);
			$('#scroll_container_bg').css('height',(val.canvheight+blockel.height())+'px');
			$.fullpageupdateselectbgopt();
			$.updatepospropblk();
			$.canvasHeightChange();
	 },null,{returntype:'class'});
	 
	 var undoobj=null;
	 var resizertimer=null;
	$('#site_footer').resizable({
			handles: {n: '>.full_width .ui-resizable-n',s: '>.full_width .ui-resizable-s'},
			noinit:true,
			distance: 0,
			scroll: true,
			create:function(){
				$(this).children('.full_width').find('.ui-resizable-handle').hide();
			},
			start: function(event, ui){
				initCanvasHeight();
				if(resizertimer){
					clearTimeout(resizertimer);
					resizertimer=null;
				}
				canvasminheight=canv.data('layermaxheight')||0;
				curcanvheight=canv.height();
				maxminusheight=curcanvheight-canvasminheight;
				
				undoobj=new Command('site_footer');
				undoobj.setOldVal({top:$.parseInteger($(this).css('top')),canvheight:curcanvheight,height:$(this).height()});
				$(this).triggerHandler('resize_progress',[{ui:ui}]);
			},
			resize: function(event, ui){
				var resizeobj=$(this).data('resizable');
				var theaxis=resizeobj.axis;
				if(theaxis=='n'){
					var changey= $(this).height()-ui.originalSize.height;
					if(changey>maxminusheight){
						var mintop=canvasminheight;
						$(this).css({top:mintop,height:ui.originalSize.height+maxminusheight});
						var oriscrolltop=$(this).data('resize_oriscrolltop');
						$(this).scrollParent().scrollTop(oriscrolltop);
						$(this).children('.full_content,.full_width').height($(this).height());
						canv.height(canvasminheight);
						$('#scroll_container_bg').css('height',(canvasminheight+$(this).height()+100)+'px');
						$.fullpageshowselectbgopt($(this));
						return;
					}
					canv.height(curcanvheight-changey);
					$(this).children('.full_content,.full_width').height($(this).height());
					$('#scroll_container_bg').css('height',(canv.height()+$(this).height()+100)+'px');
				}else{
					$(this).children('.full_content,.full_width').height($(this).height());
					$('#scroll_container_bg').css('height',(canv.height()+$(this).height()+100)+'px');
				}
				$.fullpageshowselectbgopt($(this));
				$(this).triggerHandler('resize_stop',[{ui:ui}]);
			},
			stop:function(event, ui){
				var self=$(this);
				undoobj.insertWithNewVal({top:$.parseInteger(self.css('top')),canvheight:canv.height(),height:self.height()});		
				undoobj=null;
				$.canvasHeightChange();
			}
			
	});
}
*/
function fullpagescrolldrop(dom){
    if($.wismobile!=1) dom.css({'border':'dashed #AF6935 2px'});
	var createplaceholderfunc=function(handle){
			  dom.each(function(){
					var hname = 'placeholder-'+handle;
					var axis = $('<div class="li-placeholder  ' + hname + '"></div>');
					axis.css({zIndex: 1000});
					$(this).children('.full_content').append(axis);
			  })
	}
	createplaceholderfunc('n');
	createplaceholderfunc('s');
	createplaceholderfunc('w');
	createplaceholderfunc('e');
	
	var contentblock=dom.children('.full_content');
	contentblock.children('.li-placeholder').hide();
	contentblock.children('.placeholder-n').css({'border-top':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-s').css({'border-bottom':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-e').css({'border-right':'#FF9900 dashed 4px'});
	contentblock.children('.placeholder-w').css({'border-left':'#FF9900 dashed 4px'});
	contentblock.droppable({
			tolerance: 'pointer',
			accept:'.full_pagescroll,.cstlayer,.wp-new-tool-second-link,.wp-manage-plugin-block',//fullpage拖拽即时响应
			drop: function( event, ui ) {
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						$(this).children('.li-placeholder').hide();
						var existcolumn=$(document).data('layer_final_drop_id');
						var biggercolumn=$.chooseBiggerColumn(existcolumn,dom.attr('id'));

						$(document).data('layer_final_drop_id',biggercolumn);
					}
				}
			},
			over: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom) ||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						var thisid=dom.attr('id');
						var existid=$(document).data('layer_drop_over_id');
						if(thisid != existid){
							var biggerid=$.chooseBiggerColumn(existid,thisid);
							if(biggerid == thisid){
								var $this=$(this);
								$(this).children('.li-placeholder').show();
								if(existid){
									var existcolumnel = $('#'+existid);
									var dropobj=existcolumnel.children('.full_content').data('droppable');
									dropobj['isover'] = 0;
									dropobj['isout'] = 1;
									dropobj._out.call(dropobj, event);
								}
								$(document).data('layer_drop_over_id', thisid);
							}else{
								var dropobj1=$(this).data('droppable');
								dropobj1['isover'] = 0;
								dropobj1['isout'] = 1;
							}
						}

					}
				}
			},
			out: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){//fullpage拖拽即时响应
						$(this).children('.li-placeholder').hide();
						var curoverid=$(document).data('layer_drop_over_id');
						if(curoverid == dom.attr('id')) $(document).removeData('layer_drop_over_id');
					} 
				}
				
			}
	});

}

function full_page_block_drop(contentBlock){
    var dom=contentBlock.closest('.full_pagescroll');
    contentBlock.droppable({
			tolerance: 'pointer',
			accept:'.full_pagescroll,.cstlayer,.wp-new-tool-second-link,.wp-manage-plugin-block',//fullpage拖拽即时响应
			drop: function( event, ui ) {
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						$(this).children('.li-placeholder').hide();
						var existcolumn=$(document).data('layer_final_drop_id');
						var biggercolumn=$.chooseBiggerColumn(existcolumn,dom.attr('id'));

						$(document).data('layer_final_drop_id',biggercolumn);
					}
				}
			},
			over: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
                                
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom) ||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						var thisid=dom.attr('id');
						var existid=$(document).data('layer_drop_over_id');
						if(thisid != existid){
							var biggerid=$.chooseBiggerColumn(existid,thisid);
							if(biggerid == thisid){
								var $this=$(this);
								$(this).children('.li-placeholder').show();
								if(existid){
									var existcolumnel = $('#'+existid);
									if(!existcolumnel.is('.wp_droppable')){
										var dropobj=existcolumnel.children('.full_content').data('droppable');
									}else{
										var dropobj=existcolumnel.children('.drop_box').data('droppable');
									}
									dropobj['isover'] = 0;
									dropobj['isout'] = 1;
									dropobj._out.call(dropobj, event);
								}
								$(document).data('layer_drop_over_id', thisid);
							}else{
								var dropobj1=$(this).data('droppable');
								dropobj1['isover'] = 0;
								dropobj1['isout'] = 1;
							}
						}

					}
				}
			},
			out: function(event, ui){
				//判断是否包含锁定元素
				var has_layer_lock=false;
				$('.ui-modselected').each(function(){
						if($(this).data('cstlayerstatus') == 'unlock' ){
							has_layer_lock=true;
						}
				});
				if(has_layer_lock) return;
				var draggable = $.ui.ddmanager.current;
				if($.getElementAreaInf($(draggable.element))==$.getElementAreaInf(dom)){
					if(!dom.hasClass('ui-modselected')||$(draggable.element).is('.wp-new-tool-second-link')||$(draggable.element).is('.wp-manage-plugin-block')){
						$(this).children('.li-placeholder').hide();
						var curoverid=$(document).data('layer_drop_over_id');
						if(curoverid == dom.attr('id')) $(document).removeData('layer_drop_over_id');
					} 
				}
				
			}
	});
}

function fullpagescroll_propblk_init(){
	var lvtimer;
	for(var key in $.fullpagebackgroundPropDefaults){
		(function(){	
			var curkey=key;
			var otherfunc=null;
			if($.inArray(curkey,['fullpage_moveto_prevop','fullpage_moveto_nextop']) != -1){
				var innertxt ='', lvtype = '';
				switch(curkey){
					case 'fullpage_moveto_prevop':
						lvtype = 'top';
						innertxt = '<div class="wp-moveto_fstlevel"><a class="property-bar-top" href="###" title="'+translate('Move to top')+'"><span>&nbsp;</span></a></div>';
						break;
					case 'fullpage_moveto_nextop':
						lvtype = 'bottom';
						innertxt = '<div class="wp-moveto_lstlevel"><a class="property-bar-bottom" href="###" title="'+translate('Move to bottom')+'"><span>&nbsp;</span></a></div>';
						break;
				}
				otherfunc={
					mousedown:function(){
						var $target = $(this)
						var apos =$target.offset();
						var scrollctner=$('#scroll_container');
						var scrolltop=scrollctner.scrollTop();

						$(innertxt).appendTo(scrollctner).css({
							top: function(){
								return (apos.top+scrolltop - 25-39)+'px'
							},left: apos.left+'px'
						}).click(function(e){
							$('#'+$.bgselectedid).wp_setorder(lvtype,$.bgselectedid);
							$(this).remove();
							$target.removeClass('local');
							e.preventDefault();
						});

					},
					mouseup:function(){

					}
				}
			}
			$('#'+curkey).mousedown(function(e){
					var $target = $(this);	
					$target.addClass('local');
					if($('.wp-moveto_fstlevel,.wp-moveto_lstlevel').size()) $('.wp-moveto_fstlevel,.wp-moveto_lstlevel').remove();
					if(otherfunc != null){
						otherfunc.mousedown.apply(this);
					}
					e.preventDefault();
			}).mouseup(function(e){
					var self = this,$target = $(self);
					$target.removeClass('local');
					$.fullpagebackgroundPropDefaults[curkey].apply(this);
					if(otherfunc != null){
						otherfunc.mouseup.apply(this);
					}
					e.preventDefault();
			})
		})();
	}
}

(function($){
function fullpagegetAllParents(el){
	var parents={};
	parents[el.prop('id')]='null';
	var curel=el;
	while(true){
		var parentid=$.getElementFatherid(curel);
		if(parentid =='none') break;
		parents[parentid]=curel.prop('id');
		curel=$('#'+parentid);
	}
	return parents;
}

$.chooseBiggerColumn=function(existcolumnid,newcolumnid){
	var biggercolumnid=newcolumnid;
	if(existcolumnid==newcolumnid) return biggercolumnid;
	if(existcolumnid){
		var existcolumnel=$('#'+existcolumnid);
		var newcolumnel=$('#'+newcolumnid);
		
		var existcolumnfathers=fullpagegetAllParents(existcolumnel);
		var newcolumnfathers=fullpagegetAllParents(newcolumnel);
		var rootid='canvas';
		if(!existcolumnfathers[rootid])  rootid='site_footer';
		var existdifffather=rootid;
		var newdifffather=rootid;
		while(existdifffather == newdifffather){
			existdifffather =existcolumnfathers[existdifffather];
			newdifffather =newcolumnfathers[newdifffather];
			if(existdifffather=='null' || newdifffather=='null') break;
		}
		if(existdifffather=='null') biggercolumnid=newcolumnid;
		else if(newdifffather=='null') biggercolumnid=existcolumnid;
		else{
			var existfatherzindex=$.parseInteger($('#'+existdifffather).css('z-index'));
			var newfatherzindex=$.parseInteger($('#'+newdifffather).css('z-index'));
			if(existfatherzindex > newfatherzindex) biggercolumnid=existcolumnid;
		}
	}
	return biggercolumnid;
}	

$.transferToColumn=function(dom,fathercolid){
	var oldfatherid=$.getElementFatherid(dom);
	if(oldfatherid!=fathercolid){
		var newfatherel=$('#'+fathercolid);
		var domabpos=dom.ab_pos('top');
		var newfatherabpos=newfatherel.ab_pos('top');
		var domableft=dom.ab_pos('left');
		var newfatherl=newfatherel.ab_pos('left');
		var contentblock=newfatherel;
		if(fathercolid!='canvas'){
			if(newfatherel.is('.wp_droppable')){
				contentblock=newfatherel.children('.drop_box');
			}else contentblock=newfatherel.children('.full_content');
		}
		dom.detach().attr('fatherid',fathercolid).css({'top':(domabpos-newfatherabpos),'left':(domableft-newfatherl)}).appendTo(contentblock);
		if(fathercolid=='site_footer'||fathercolid=='canvas') dom.removeAttr('fatherid');
	}
}

$.getElementAreaInf=function(dom){
	return dom.attr('inbuttom')=='1'?'site_footer':'canvas';
}


$.addFullPagescroll=function(top){
    if($.wisplate){
        wp_alert(translate('fullpage.plate do not support add'));
        return false;
    }
    if($('.fullpage_alllist:not([deleted="deleted"])').length > 0){
        wp_alert(translate('fullpage.already plugin'));
        return false;
    }
    if($('.cstlayer[type="mads"]:not([deleted="deleted"])').length>0){
        wp_alert(translate('Multi-filter and fullpage.already plugin'));
        return false;
	}
    if($('.full_column:not([deleted="deleted"])').length > 0){
        wp_alert(translate('full_column.already Please remove'));
        return false;
    }
    //存在页脚元素时移除处理
    setTimeout(function(){
//    if($.wismobile){
    if($('#site_footer').length > 0){
        var fullpageClass='fullpage';
        if($.wismobile) fullpageClass='mfullpage';
        if (confirm(translate('fullpage.Please hide site_footer'))) {
                $.post(parseToURL(fullpageClass,"prosf"), {pid:$.page_id},function(response){
                    var o_result = $.parseJSON(response);
                    if(o_result.result == "OK") {
                        $('#site_footer').remove();
                    }else{
                        location.reload();
                        return false;
                    }
                }).error(function() {
                        location.reload();
                        return false;
                });
        }else{
            return false;
        }
    }
//    }
    },500)
         var successfunc=function(resp,needchangeid){
				var fullpagescrollhtml=resp;
				if(needchangeid){
					var fullpagescrollels=$(fullpagescrollhtml).filter('.full_pagescroll');
					var nowid=fullpagescrollels.prop('id');
					var newid='layer'+fGuid();
					fullpagescrollhtml=fullpagescrollhtml.replace(new RegExp(nowid,"g"),newid);
				}
				var fullpagescrollel=$(fullpagescrollhtml).appendTo('#canvas');
//				fullpagescrollel=fullpagescrollel.filter('.full_pagescroll');
                                fullpagescrollel.find('.full_pagescroll').each(function(){
                                    fullpagescrollinit($(this));
                                })
                                
				//初始化加截 默认模块内,内容模块加载样式
				fullpagescrollel.css('z-index',100);
				var titlecss=relativeToAbsoluteURL('plugin/title/css/title.css');
                                if($('body').data('title') !=titlecss){
						$('body').data('title',titlecss);
						var head = document.getElementsByTagName('head').item(0);
					    var css = document.createElement('link');
					    css.href = titlecss;
					    css.rel = 'stylesheet';
					    css.type = 'text/css';
					    head.appendChild(css);					 
				 }          
            
				$('.ui-modselected').each(function(){
					$.hidWidgetBorder($(this));
					// 图文模块相关 2012/2/14
					if($(this).hasClass('graphic_edited')) actived_graphic();
				});	
				$.fullpageunselectbgdiv(fullpagescrollel);
                                //显示属性 初始显示属性.ui-modselected绑定至第一屏上.再根id .fullpage_alllist初始存在问题
                                $.fullpageselectbgdiv(fullpagescrollel.find('.full_pagescroll:eq(0)'));
//                                $.showWidgetBorder(fullpagescrollel);
				new AddCommand(fullpagescrollel.prop('id')).insert();
				
				var objarray=new Array();
				objarray[0]=new Array(parseInt($('#'+fullpagescrollel.prop('id')).css('z-index')),fullpagescrollel.prop('id'));
				$.zindexsort_new(objarray);				
		}	
		//使用缓存有问题 停用
		if($.addFullPagescroll.html_cache){
			successfunc($.addFullPagescroll.html_cache,true);
			return;
		}
		
		$.ajax({
	        type: "GET",
	        url: parseToURL("wp_widgets","gtfullpagescroll"),
	        success: function(response){
//				$.addFullPagescroll.html_cache=response;
				successfunc(response,false);
			},
			error: function(xhr, textStatus, errorThrown){
				wp_alert((errorThrown||textStatus)+"(add a fullpagescroll).<br/>"+translate("Request failed!"));
				return false;
			}
	    });
           
}

$.curSelectableFather=function(){
	var selmods=$('.ui-modselected');
	if(selmods.length==0){
		$(document).data('cur_selectable_father',null);
		return null;
	}else{
		var fatherid=$.getElementFatherid(selmods.filter(':first'));
		$(document).data('cur_selectable_father',fatherid);
		return fatherid;
		
	}
}

$.getElementFatherid=function(dom){
	if(dom.prop('id')=='canvas'||dom.prop('id')=='site_footer') return 'none';
	var fatherid=dom.attr('fatherid');
	if(!fatherid||fatherid==''){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
	}
	if(!$('#'+fatherid).length){
		if(dom.closest('#canvas').length>0){
			fatherid='canvas';
		}else if(dom.closest('#site_footer').length>0){
			fatherid='site_footer';
		}
		dom.removeAttr('fatherid');
	}
	return fatherid;
}


/*
$.fn.ab_pos=function(direct){
	var dom=$(this);
	if(dom.prop('id')=='canvas'||dom.prop('id')=='site_footer') return 0;
	if(direct=='left'||direct=='top'){
		if(!dom.attr('fatherid')||dom.attr('fatherid')=='') return dom.rel_pos(direct);
		return dom.rel_pos(direct)+$('#'+dom.attr('fatherid')).ab_pos(direct);
	}
}

$.fn.ab_pos_cnter=function(direct){
	var abpos=$(this).ab_pos(direct);
	if($(this).closest('#site_footer').length>0&&direct=='top'){
		return abpos+$.parseInteger($('#site_footer').css(direct));
	}
	return abpos;
}

$.fn.rel_pos=function(direct){
	if(direct=='left'||direct=='top'){
		return $.parseInteger($(this).css(direct));
	}
}
*/
$.getFullColChildMaxButtomfullpage=function(dom){
		var parenttoppos=dom.ab_pos_cnter('top');
		var maxbuttompos=parenttoppos;
		dom.find('.cstlayer,.full_pagescroll').each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos-parenttoppos;
	
}

$.getFullPagescrollButtomPos=function(dom){
	if(dom.hasClass('cstlayer')){
		return $.divrotate.getDegreeModMaxPoint(dom,null,'buttom');
	}else if(dom.hasClass('full_pagescroll')){
		var maxbuttompos=0;
		dom.find('.cstlayer,.full_pagescroll').andSelf().each(function(){
			var el=$(this);
			var buttompos=0;
			if(el.hasClass('cstlayer')) buttompos=$.divrotate.getDegreeModMaxPoint(el,null,'buttom');
			else buttompos=el.ab_pos_cnter('top')+$.parseInteger(el.css('height'));
			if(maxbuttompos<buttompos) maxbuttompos=buttompos
		})
		return maxbuttompos;
	}
}


$.saveFullPagescrollObj=function(dom){
	var footerheight=dom.height();
	var otherparam={};
	if(dom.prop('id') != 'site_footer') otherparam={fullpageext:dom.data('fullpageext'),top:$.parseInteger(dom.css('top'))};
	return $.extend({
		footerheight:footerheight
	},otherparam);
}
$.fullpagecanvasleft=function(){
    if($(window).width()<=$('#canvas').width()) return '0';
    else return ($(window).width()-$('#canvas').width())/2;
}
//fullpage 切屏图片自适应处理
$.wp_fullpagezoom=function(dom,size,originalSize,status){
        // 获取padding或border信息
        var $target = dom;
        var extw = 0,exth = 0,neww = size.width,newh = size.height;
        // 获取缩放信息
        var $img = $target.find('.fullimgc');
        $img.css("position", 'relative');// fixed bug#4459
        var lastw = neww - extw,lasth = newh - exth;
        var difw = neww - originalSize.width,difh = newh - originalSize.height;
        // 自适应处理
        var curdifw = 0,curdifh = 0;
        if (difw || (difw > difh)) {
                $img.width(lastw).height('auto');
                // 自动修复高度
                curdifh = lasth - $img.height();
//                if(curdifh < 0) $img.css({top:Math.ceil(curdifh/2)+'px',left:'0px',position:'relative'});
                if(curdifh < 0) $img.css({top:Math.ceil(curdifh/2)+'px',left:'0px'});
                else if(curdifh > 0){
                        $img.height(lasth).width('auto');
                        curdifw = lastw - $img.width();
//                        $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px',position:'relative'});
                        $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px'});
                }else $img.css({top:'',left:'',position:''});
        } else if (difh || (difw < difh)) {
                $img.height(lasth).width('auto');
                // 自动修复宽度
                curdifw = lastw - $img.width();
                //if(curdifw < 0) $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px',position:'relative'});
                if(curdifw < 0) $img.css({top:'0px',left:Math.ceil(curdifw/2)+'px'});
                else if(curdifw > 0){
                        $img.width(lastw).height('auto');
                        curdifh = lasth - $img.height();
                        //$img.css({top:Math.ceil(curdifh/2)+'px',left:'0px',position:'relative'});
                        $img.css({top:Math.ceil(curdifh/2)+'px',left:'0px'});
                }else $img.css({top:'',left:'',position:''});
        }
}
//判断浏览（PC｜手机）
$.wp_fullpag_mobile=function(){
    return (/iphone|ipod|ipad|Macintosh|android|Windows phone/i.test(navigator.userAgent.toLowerCase()));
}

//初始化resize 第一屏自适应处理 手机预览，编辑不处理
setTimeout(function(){
    if($.wismobile&&$.wisviewmode){}else{
        var maxjson = {width:320,height:$(window).height()};
        if(!$.wiseditmode){
            maxjson = {width:$(window).width(),height:$(window).height()};
            var fullnode = $('.fullpage_alllist');
            var $paragraph_image = fullnode.find('.section.active .bg > img');
            //var maxjson = {width:$(window).width(),height:$(window).height()};
            var json = {width:0,height:0};
            $.wp_fullpagezoom(fullnode,maxjson,json,'noresize');
        }
    }
},800);

})(jQuery);
/**
 * 个性化下拉框
 */
;(function($,undefined){
	var namespace = '.wpcstselect';
	$.widget('wp.cstselect',{
		options : {
			selectclass:'wp-diy-selected'//样式
		}, // 配置项
		_create : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			// 忽略多选的SELECT控件
			if(self.element.prop("multiple")) return;
			self._doinit(self).done(function(dom,selopts){
				var $ctarget = dom,$diysel = $ctarget.next('.'+selectclass+'-outside').find('.'+selectclass+'');
				// 设置默认值
				setTimeout(function(){
					var $cursel = $diysel.children('.'+selectclass+'-left'),difw = $cursel.siblings('.'+selectclass+'-button').outerWidth() + 2,
					pad = self._int($cursel.css("paddingLeft")) + self._int($cursel.css("paddingRight")),finalw = $diysel.width() - difw - pad;
					if (finalw <= 0) finalw = Math.max(65, $ctarget.width()) - pad - 16;
					$cursel.width(finalw).attr("val",$ctarget.val()).html($ctarget.find('option:selected').html());$cursel = difw = finalw = null;
				},50);
				// 绑定CLICK事件
				$diysel.bind('click'+namespace,function(e){
					if(self.options.disabled || !selopts.length) return;
					var $selectedcnt = $(selopts).appendTo('body'),maxheight = $selectedcnt.outerHeight(true);
					self._selected($selectedcnt, $ctarget.val()); // 设置默认值
					// 绑定LI:HOVER及CLICK事件
					if ($selectedcnt.is(':hidden')) {
						var $target = $(this);
						$selectedcnt.find('li').bind('mouseenter'+namespace, function(e){
							$(this).addClass('local').siblings().removeClass('local');
						}).bind('mouseleave'+namespace, function(e){
							$(this).removeClass('local');
						}).bind('click'+namespace, function(e){
							var $li = $(this),selval = $li.attr("val");
							$target.children('.'+selectclass+'-left').html($li.html()).attr("val", selval);
							$ctarget.val(selval).trigger('change');// 捕获已绑定SELECT事件
						}).end().slideDown('slow',function(){
							var $selcnt = $(this);
							// 定位滚动条 2012/11/09
							var selcnt = $selcnt[0],clienth = selcnt.clientHeight,$selected = $selcnt.find('li.local');
							if ($selected.size() > 0) {
								var seltop = $._parseFloat($selcnt.css("top")),
								litop = seltop + $selected[0].offsetTop - selcnt.offsetTop + $selected.height();
								if(clienth < litop) selcnt.scrollTop = litop - clienth;
							}
							// End
							$(document).one('click'+namespace,function(e){
								$selcnt.slideUp().remove();
								return false;
							});
						});
						setSeloptsPos($target,$selectedcnt,maxheight);
						// 绑定RESIZE事件
						$(window).resize(function(){
							setSeloptsPos($target,$selectedcnt,maxheight);
						});
					}
				});
				function setSeloptsPos(target,dom,maxh){
					var $target = target,pos = $target.offset();
					dom.css({
						"top": function(i,val){
							var wnh = window.innerHeight||self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,
							_top = self._int(pos.top),_oh = $target.outerHeight(true),newtop = 0;
							if (wnh < _top + maxh + _oh) {
								newtop = Math.max(0, _top - maxh - 1);
								$(this).css({"border-bottom": 'none',"border-top": '1px solid #B5B5B5'});
							} else newtop = _top + _oh + 1;
							wnh = _top = _oh = null;
							return newtop+'px';
						},"left": function(i,val){
							return self._int(pos.left)+'px';
						}
					});
				}
			});
		},
	    value : function(value){
	    	var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $target = self.element,$select = $target.next('.'+selectclass+'-outside');
	    	$target.val(value);
	    	$select.find('.'+selectclass+'-left').attr("val",value).html($target.children('option:selected').html());
	    },
		_doinit : function(dom){
			var dtd = $.Deferred(),self = dom,$target = self.element;
			var selectclass=self.options.selectclass,_stripslashes = function(str){
				return (str + '').replace(/\\(.?)/g, function(s, $1){
				    switch ($1) {
				    	case '\\': return '\\';
				    	case '0': return '\u0000';
				    	case '': return '';
				    	default: return $1;
				    }
			  	});
			};
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			$target.hide();// 隐藏SELECT控件
			// 自定义类SELECT
			var selopt = '',selw = Math.max($target.width(), 65);
			var selhtm = '<div class="'+selectclass+'-outside overz" style="float:left;width:'+selw+'px;"><div class="'+selectclass+'">';
			$target.children('option').each(function(i,c){
				var self = c;
				selopt += '<li val="'+self.value+'">'+_stripslashes(self.innerHTML)+'</li>';
			});
			selhtm += '<div class="'+selectclass+'-left" val="0">&nbsp;</div><div class="'+selectclass+'-button"><a href="###" onclick="return false;"></a></div></div></div>';
			$target.after(selhtm);
			dtd.resolve($target,'<div class="'+selectclass+'-content overz" style="width:'+(selw-2)+'px;"><ul>'+selopt+'</ul></div>');
			return dtd.promise();
		},
		_int : function(numstr){
			var number = parseInt(numstr);
			if(isNaN(number)) return 0;
			return number;
		},
		_selected : function(dom,value){
			dom.find('li').each(function(i,c){
				var $target = $(c),ent = '';
				ent = ($target.attr("val") == value)?'addClass':'removeClass';
				$target[ent]('local');
			});
			return true;
		},
		enable : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $select = self.element.next('.'+selectclass+'-outside');
			$select.find('.'+selectclass+'-left').css("color","#5A5A5A");
			$select.find('.'+selectclass+'-button > a').removeClass('disabled');
			$.Widget.prototype.enable.call(self);
		},
		disable : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			var $target = self.element,$select = $target.next('.'+selectclass+'-outside');
			// 还原SELECT控件默认值
			var firstopt = $target.find('option')[0];
			$target[0].selectedIndex = 0;
			$select.find('.'+selectclass+'-left').css("color","#7C7C7C").attr("val",firstopt.value).html(firstopt.innerHTML);
			$select.find('.'+selectclass+'-button > a').addClass('disabled');
			$.Widget.prototype.disable.call(self);
		},
		destroy : function(){
			var self = this;
			var selectclass=self.options.selectclass;
			if(selectclass.length==0){ selectclass='wp-diy-selected';}
			$(document).unbind(namespace);
			self.element.next('.'+selectclass+'-outside').unbind(namespace).remove();
			$.Widget.prototype.destroy.call(self);
		}
	});
})(jQuery);

$._parseFloat = function(numString){
	var number = parseFloat(numString);
	if(isNaN(number)) return 0;
	return number;
}

/**
 * 手机站弹窗(模拟新窗口打开) 2014/06/09
 */
function msite_popup(url){
	var $container = $('#scroll_container'),maxh = $(window).height(),
	bgimg = relativeToAbsoluteURL('template/default/images/loading.gif'),
	css = 'position:absolute;top:0;left:0;width:320px;overflow:hidden;z-index:10000',
	ihtml = '<div class="mspopup_mask" style="background:url('+bgimg+') no-repeat 50% 20% #fff;height:'
	+maxh+'px;'+css+'"><iframe allowtransparency="true" frameborder="0" scrolling="no" width="320" height="'
	+maxh+'" src="'+url+'" onload="mspopup_onload(this)"></iframe></div>';
	
	var $mask = $container.children('.mspopup_mask');
	if(! $mask.length) $container.append(ihtml).attr("data-height", $container.height()).height(maxh);
}

function mspopup_onload(win){
	win.height = 'auto';
	var bodh = win.contentWindow.document.body.scrollHeight,
	doch = win.contentWindow.document.documentElement.scrollHeight,
	maxheight = Math.max(bodh, doch);
	
	// Reset height
	win.height = maxheight;
	$(win).parent('.mspopup_mask').height(maxheight)
	.parent('#scroll_container').height(maxheight);
}

function create_pc_media_set_pic(layer_id,editmode){
	var func=function(obj) {
		var callback=function(img){
				img.show();
				img.closest('.img_over').children('.imgloading').remove();
				if(!editmode){
					$(function(){			
						var super_id=layer_id;
						var dom_img=$("#"+super_id).find('.paragraph_image');
						var left_img=parseInt(dom_img.css('left'));
						var top_img=parseInt(dom_img.css('top'));
						var width_img=parseInt(dom_img.css("width"));
						var height_img=parseInt(dom_img.css("height"));
						if(isNaN(left_img)){ left_img=0; }
						if(isNaN(top_img)){ top_img=0; }
						var ii=0;
						$("#"+super_id).find(".wp_mapclass").each(function(){
							var shape="rect";
							shape=$(this).attr('shape');
							if(shape != "circle"){
								shape="rect";
							}

							var leftz=parseInt($(this).css("left"));
							var topz=parseInt($(this).css("top"));
							var widthz=parseInt($(this).css("width"));
							var heightz=parseInt($(this).css("height"));

							if(shape != "circle"){
								var coords='0,0,0,0';
							}else{
								var coords='0,0,0';
							}		
							if( (leftz+widthz) < left_img || (topz+heightz)< top_img){
							}else{
								var cleft=0;
								var ctop=0;
								var r=0;
								if(shape != "circle"){
									cleft=leftz-left_img;
									ctop=topz-top_img;
									coords=cleft+','+ctop+','+(cleft+widthz)+','+(ctop+heightz);
								}else{
									r=widthz/2;
									cleft=leftz-left_img+r;
									ctop=topz-top_img+r;
									coords=cleft+','+ctop+','+r;
								}
							}	

							//var classid=$(this).attr('id');
							var classid="map_arear_"+ii;
							ii++;
							var mapd=$(this).parent().find("."+classid);
							mapd.attr('coords',coords);
							$(this).remove();

						});
					})
				}
		}
		$(obj).each(function() {
			var img=$(this);
			callback(img);
		});      
	}
	window['set_thumb_'+layer_id]=func;
};
/*
 * 模块高度自适应，对外接口，功能待扩展
 * 
 */

/**
 * 高度自适应模块,预览模式下触发 TODO:面向对象写法
 */
function wp_heightAdapt(dom,oldHeight)
{	
	if(dom== undefined) return false;
	if ($.inArray(dom.attr("type"), ['bslider']) != -1) return;
	var heightfunc=function(){
		var before=dom.data('oriheight');
		if(!before){
			before=dom.children('div').eq(0).height();
			dom.data('oriheight',before);
		}
		return before;
	}
	
	var resetPos=function(el){
		var oritop=el.data('adaptoritop');
		var oriheight=el.data('adaptoriheight');
		var pressArr=el.data('adaptpress');
		var wrapArr=el.data('adaptwrap');
		var id=dom.prop('id');
		var toppos=$.parseInteger(el.css('top'));
		if(!oritop&&oritop !==0){
			el.data('adaptoritop',toppos);
			el.data('adaptoriheight',el.height());
			return;
		}

		if(pressArr && pressArr.length){
			for(var i=0;i<pressArr.length;i++){
				var press=pressArr[i];
				if(press.id !=id){
					oritop+=press.diffY;
				}
			}
		}
		
		if(wrapArr && wrapArr.length){
			var h=oriheight;
			for(var i=0;i<wrapArr.length;i++){
				var wrap=wrapArr[i];
				if(wrap.id !=id){
					h+=wrap.diffH;
				}
			}
			if(h!=el.height()){
				el.css('height',h+'px');
				var wrapListPadding = parseInt(el.children('div').eq(0).css('padding-top')) + parseInt(el.children('div').eq(0).css('padding-bottom'));
				var wrapListBorder = parseInt(el.children('div').eq(0).css('border-top-width')) + parseInt(el.children('div').eq(0).css('border-bottom-width'));
				el.children('div').eq(0).height(el.height() - wrapListPadding - wrapListBorder);
			}
		}
		if(oritop!=toppos){ 
			el.css('top',oritop+'px');
		}
	}
	
	var canvheight=$('#canvas').data('adaptoriheight');
	if(!canvheight){
		$('#canvas').data('adaptoriheight',$('#canvas').height());
		canvheight=$('#canvas').data('adaptoriheight');
	}
	var adaptModuleBefore = heightfunc();//自适应之前原始高度
	var actualContentHeight=dom.children('div').eq(0).height();
	resetPos(dom);
//	dom.children().eq(0).css('height','auto');//模块自适应
     //有些模块第一个元素不是div，比如：产品详情
	dom.children('div').eq(0).css('height','auto');//模块自适应
	var adaptModuleAfter = dom.children('div').eq(0).height();//自适应之后高度
	if(adaptModuleAfter < adaptModuleBefore){ 
		dom.children('div').eq(0).css('height',adaptModuleBefore+'px');
		if(adaptModuleBefore==actualContentHeight) return;
	}//还原
	else{
		var borderwidth=parseInt(dom.children('div').eq(0).css('border-top-width'))+parseInt(dom.children('div').eq(0).css('border-bottom-width'));
		if(borderwidth>0){
			adaptModuleAfter=adaptModuleAfter-borderwidth;
		}
		dom.children('div').eq(0).css('height',adaptModuleAfter+'px');
		if(adaptModuleAfter==actualContentHeight) return;
	}

	var domPadding = parseInt(dom.children('div').eq(0).css('padding-top')) + parseInt(dom.children('div').eq(0).css('padding-bottom'));
	var domBorder = parseInt(dom.children('div').eq(0).css('border-top-width')) + parseInt(dom.children('div').eq(0).css('border-bottom-width'));
	var moduleLayerHeight = oldHeight || adaptModuleBefore+domPadding+domBorder;
	var moduleHeight = dom.children('div').eq(0).outerHeight();//模块取 wp-模块名_content层的高度
	var moduleWidth = dom.outerWidth();
	var moduleTop = dom.ab_pos_cnter('top');//获取画布坐标系y值
	
	var left_boundray = dom.ab_pos_cnter('left');//左右边界
	var right_boundray = left_boundray + dom.outerWidth();
	
	var offsetY = 0;//发生重合后往下压位置与高度自适应模块空出原有高度
	var pressList = new Array();//记录往下压的模块列表
	var wrapList = new Array();//包在高度自适应外层模块列表
	
	var minTop = 0,minId = 0;
	//页面上的模块可能有不同坐标系，但往下压多少像素的相对偏移量都相同的，获取这些偏移量
	var diffY = 0;//向下移动偏移量
	
	$("#canvas").find('.cstlayer,.full_column').each(function(){
		//判断页面模块是不是在高度自适应模块左右边界中,通栏模块肯定在,不需要判断
		resetPos($(this));
		var tmp_left = $(this).ab_pos_cnter('left'),tmp_top =$(this).ab_pos_cnter('top'),tmp_width = $(this).outerWidth(),tmp_height = $(this).outerHeight();
		if($(this).hasClass('cstlayer'))
		{
			if(tmp_left + tmp_width < left_boundray) return true;
			if(tmp_left > right_boundray) return true;
			if(dom.attr('id') == $(this).attr('id'))  return true;//自己除外
			
			//包在高度自适应模块外面的模块也要改变高度
			if((tmp_left <= left_boundray && tmp_left+tmp_width >= right_boundray) && (tmp_top <= moduleTop && tmp_top+tmp_height >= moduleTop+moduleLayerHeight))
			{
				wrapList.push($(this).attr('id'));
				return true;
			}
			
			if($(this).parent().hasClass('full_content') || $(this).parent().hasClass('footer_content') || $(this).parent().hasClass('drop_box')) return true;//通栏和底部元素暂时不考虑
		}

		if(tmp_top >= (moduleTop + moduleLayerHeight))
		{
			pressList.push($(this).attr('id'));
			if(minTop == 0) {minTop = tmp_top;minId = $(this).attr('id');}
			else
			{
				if(minTop > tmp_top) {minTop = tmp_top;minId = $(this).attr('id');}
			}
		}
	});
	//ceshi
	offsetY = $("#"+minId).ab_pos_cnter('top') - (moduleTop + moduleLayerHeight);

	if(pressList.length > 0 && (moduleTop + moduleHeight) >= minTop)
	{
		diffY = moduleTop + moduleHeight + offsetY - minTop;
		for(var i = 0;i < pressList.length;i++)
		{
			var theel=$("#"+pressList[i]);
			
			theel.css('top',(parseInt(theel.ab_pos_cnter('top'))+diffY)+'px');
			
			var pressArrOld=theel.data('adaptpress');
			if(!pressArrOld) pressArrOld=[];
			var pressArr=[];
			for(var j=0;j<pressArrOld.length;j++){
				if(pressArrOld[j].id != dom.prop('id')) pressArr.push(pressArrOld[j]);
			}
			pressArr.push({id:dom.prop('id'),diffY:diffY});
			theel.data('adaptpress',pressArr);
		}
	}
	
	if(wrapList.length > 0)
	{
		for(var i = 0;i < wrapList.length;i++)
		{
			var diffH=moduleHeight-moduleLayerHeight;
			var theel=$("#"+wrapList[i]);
			theel.height($("#"+wrapList[i]).height()+(diffH));
			var wrapListPadding = parseInt(theel.children('div').eq(0).css('padding-top')) + parseInt($("#"+wrapList[i]).children('div').eq(0).css('padding-bottom'));
			var wrapListBorder = parseInt(theel.children('div').eq(0).css('border-top-width')) + parseInt($("#"+wrapList[i]).children('div').eq(0).css('border-bottom-width'));
			theel.children('div').eq(0).height(theel.height() - wrapListPadding - wrapListBorder);
			var wrapArrOld=theel.data('adaptwrap');
			if(!wrapArrOld) wrapArrOld=[];
			var wrapArr=[];
			for(var j=0;j<wrapArrOld.length;j++){
				if(wrapArrOld[j].id != dom.prop('id')) wrapArr.push(wrapArrOld[j]);
			}
			wrapArr.push({id:dom.prop('id'),diffH:diffH});
			theel.data('adaptwrap',wrapArr);
		}
	}
	
	if(dom.attr("type")=='fxdp'){
		dom.height(dom.children('div').eq(0).height() + domPadding + domBorder + 50);
	}else{
		dom.height(dom.children('div').eq(0).height() + domPadding + domBorder);
	}
	var nowcanvheight=$('#canvas').height();
	if(nowcanvheight != canvheight) $('#canvas').css('height',canvheight);
	scroll_container_adjust();
}