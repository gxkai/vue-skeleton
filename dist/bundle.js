!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define("Skeleton",["vue"],e):"object"==typeof exports?exports.Skeleton=e(require("vue")):t.Skeleton=e(t.vue)}(window,function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var o=n(3);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(6).default)("6fc749bb",o,!1,{})},function(t,e,n){"use strict";
/**
  * vue-class-component v7.0.2
  * (c) 2015-present Evan You
  * @license MIT
  */Object.defineProperty(e,"__esModule",{value:!0});var o,r=(o=n(2))&&"object"==typeof o&&"default"in o?o.default:o,i="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach(function(o){var r=n?Reflect.getOwnMetadata(o,e,n):Reflect.getOwnMetadata(o,e);n?Reflect.defineMetadata(o,r,t,n):Reflect.defineMetadata(o,r,t)})}var a={__proto__:[]}instanceof Array;var p=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function f(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach(function(t){if("constructor"!==t)if(p.indexOf(t)>-1)e[t]=n[t];else{var o=Object.getOwnPropertyDescriptor(n,t);void 0!==o.value?"function"==typeof o.value?(e.methods||(e.methods={}))[t]=o.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=o.value,e}}):(o.get||o.set)&&((e.computed||(e.computed={}))[t]={get:o.get,set:o.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var o in t.$options.props)t.hasOwnProperty(o)||n.push(o);n.forEach(function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})})};var o=new e;e.prototype._init=n;var r={};return Object.keys(o).forEach(function(t){void 0!==o[t]&&(r[t]=o[t])}),r}(this,t)}});var o=t.__decorators__;o&&(o.forEach(function(t){return t(e)}),delete t.__decorators__);var f,s,l=Object.getPrototypeOf(t.prototype),d=l instanceof r?l.constructor:r,y=d.extend(e);return function(t,e,n){Object.getOwnPropertyNames(e).forEach(function(o){if(!u[o]){var r=Object.getOwnPropertyDescriptor(t,o);if(!r||r.configurable){var i,c,p=Object.getOwnPropertyDescriptor(e,o);if(!a){if("cid"===o)return;var f=Object.getOwnPropertyDescriptor(n,o);if(i=p.value,c=typeof i,null!=i&&("object"===c||"function"===c)&&f&&f.value===p.value)return}0,Object.defineProperty(t,o,p)}}})}(y,t,d),i&&(c(f=y,s=t),Object.getOwnPropertyNames(s.prototype).forEach(function(t){c(f.prototype,s.prototype,t)}),Object.getOwnPropertyNames(s).forEach(function(t){c(f,s,t)})),y}var u={prototype:!0,arguments:!0,callee:!0,caller:!0};function s(t){return"function"==typeof t?f(t):function(e){return f(e,t)}}s.registerHooks=function(t){p.push.apply(p,t)},e.default=s,e.createDecorator=function(t){return function(e,n,o){var r="function"==typeof e?e:e.constructor;r.__decorators__||(r.__decorators__=[]),"number"!=typeof o&&(o=void 0),r.__decorators__.push(function(e){return t(e,n,o)})}},e.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.extend({mixins:t})}},function(e,n){e.exports=t},function(t,e,n){(e=t.exports=n(4)(!1)).push([t.i,'.contianer_S8Y9lJLI {\n  height: 100%;\n}\n.contianer_S8Y9lJLI * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.prog_2och0xgT {\n  position: relative;\n}\n.progActive_3tSycGMF {\n  -webkit-transition: all 0.25s ease-in-out;\n  -o-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  background: #e6e6e6;\n  position: relative;\n  list-style: none;\n}\n.progActive_3tSycGMF:after {\n  content: "";\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: -o-linear-gradient(315deg, #f2f2f2 25%, #ffffff 37%, #f2f2f2 63%);\n  background: linear-gradient(135deg, #f2f2f2 25%, #ffffff 37%, #f2f2f2 63%);\n  background-size: 400% 100%;\n  -webkit-animation: progshow_3s0jwAKZ 1.4s ease infinite;\n          animation: progshow_3s0jwAKZ 1.4s ease infinite;\n}\n@-webkit-keyframes progshow_3s0jwAKZ {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n@keyframes progshow_3s0jwAKZ {\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0 50%;\n  }\n}\n.title_2cRrtpZ8 {\n  width: 200px;\n  height: 30px;\n  margin-bottom: 20px;\n}\n.circle_2ziksTVy {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  padding: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.card_2ubg7lLl {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n.listCom_2QHM1mDh {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n  padding: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.customList_6KpNFJxi {\n  display: grid;\n}\n',""]),e.locals={contianer:"contianer_S8Y9lJLI",prog:"prog_2och0xgT",progActive:"progActive_3tSycGMF",progshow:"progshow_3s0jwAKZ",title:"title_2cRrtpZ8",circle:"circle_2ziksTVy",card:"card_2ubg7lLl",listCom:"listCom_2QHM1mDh",customList:"customList_6KpNFJxi"}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(c=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var c;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var c=t[r];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),i=n(1),c=n.n(i);var a="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function p(t,e,n){a&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function f(t){return void 0===t&&(t={}),function(e,n){p(t,e,n),Object(i.createDecorator)(function(e,n){(e.props||(e.props={}))[n]=t})(e,n)}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s,l=(s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":u(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var n;return l(e,t),n=e,e.componentName="Skeleton",e.install=function(t){return t.component(n.componentName,n)},d([f({type:[Object,Array],default:function(){return{}}})],e.prototype,"options",void 0),d([f({type:[Object,Array],default:function(){return{}}})],e.prototype,"childrenOption",void 0),d([f({type:String,default:"rect"})],e.prototype,"type",void 0),d([f({type:Boolean,default:!0})],e.prototype,"active",void 0),d([f({type:Boolean,default:!0})],e.prototype,"loading",void 0),d([f({type:Boolean,default:!1})],e.prototype,"title",void 0),d([f({type:[String,Array,Boolean],default:!1})],e.prototype,"rules",void 0),e=n=d([c.a],e)}(r.a),h=n(0),v=n.n(h);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var m=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="Rectangular",e}var n;return m(e,t),n=e,e.prototype.render=function(t){var e=this.$props,n=(e.type,e.options),o=(e.title,e.loading,e.active),r={width:n.width,height:n.height,background:"#f2f2f2"};return t("div",{class:o?v.a.progActive:v.a.prog,style:r})},e.componentName="Rectangular",e.install=function(t){return t.component(n.componentName,n)},e=n=b([c.a],e)}(y);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var O=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),S=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":w(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="List",e}var n;return O(e,t),n=e,e.prototype.render=function(t){var e=this.$props,n=(e.type,e.options),o=(e.title,e.loading,e.active),r=n.row,i=n.lineHight,c=n.avatar,a=n.width,p=Array(r).fill(0),f=i*r*1.6,u={large:.8*f,small:.6*f,default:f},s={width:a?a+"px":"auto"},l={},d={};if(c){var y=c.position,h=c.size,g=c.shape;s=Object.assign(s,{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:{left:"row",right:"row-reverse",top:"column",bottom:"column-reverse"}[y]}),d={flex:"1",marginLeft:"left"===y?"20px":0,marginRight:"right"===y?"20px":0},l={width:u[h]+"px",height:u[h]+"px",borderRadius:"circle"===g?"50%":"0",overflow:"hidden"}}return t("div",{style:s},[c&&t("div",{class:[o?v.a.progActive:v.a.prog],style:l}),t("ul",{style:d},[p.map(function(e,n){return t("li",{key:n,class:[o?v.a.progActive:v.a.prog],style:{height:i+"px",marginBottom:.6*i+"px",width:n===p.length-1?"60%":"100%"}})})])])},e.componentName="List",e.install=function(t){return t.component(n.componentName,n)},e=n=S([c.a],e)}(y);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var R=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),P=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":x(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},A=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="Avatar",e}var n;return R(e,t),n=e,e.prototype.render=function(t){var e={large:60,small:28,default:40},n=this.$props,o=n.options,r=(n.title,n.loading,n.active),i=o.position,c=o.size,a=o.shape,p={width:e[c]+"px",height:e[c]+"px",borderRadius:"circle"===a?"50%":"0",overflow:"hidden"},f={width:1.5*e[c]+"px",height:.5*e[c]+"px"};return t("div",{style:{display:"inline-flex",justifyContent:"space-between",alignItems:"center",width:"left"===i||"right"===i?3*e[c]+"px":"auto",height:"top"===i||"bottom"===i?2*e[c]+"px":"auto",flexDirection:{left:"row",right:"row-reverse",top:"column",bottom:"column-reverse"}[i]}},[t("div",{class:r?v.a.progActive:v.a.prog,style:p}),t("div",{class:r?v.a.progActive:v.a.prog,style:f})])},e.componentName="Avatar",e.install=function(t){return t.component(n.componentName,n)},e=n=P([c.a],e)}(y);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var k=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),C=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":N(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},M=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="Article",e}var n;return k(e,t),n=e,e.prototype.mounted=function(){console.log("Article")},e.prototype.render=function(t){return t("div",[t("h1",["Article"])])},e.componentName="Article",e.install=function(t){return t.component(n.componentName,n)},e=n=C([c.a],e)}(r.a);const D=function(){this.dataStore=[],this.listSize=0,this.pos=0};D.prototype.append=function(t){this.dataStore[this.listSize++]=t},D.prototype.remove=function(t){var e=this.find(t);return-1!==e&&(isNaN(e)?void this.remove(e):(this.dataStore.splice(e,1),this.listSize--,!0))},D.prototype.find=function(t){var e=parseInt(t);if(isNaN(e)){for(var n=0;n<this.dataStore.length;n++)if(this.dataStore[n]==t)return n;return-1}return e>=this.dataStore.length?-1:this.dataStore[e]},D.prototype.length=function(){return this.listSize},D.prototype.toShow=function(){return this.dataStore},D.prototype.insert=function(t,e){var n=this.find(e);return-1!=n&&(isNaN(n)?this.dataStore.splice(e,0,t):(n=this._find(e),this.dataStore.splice(n+1,0,t)),this.listSize++,!0)},D.prototype.clear=function(){this.dataStore=[],this.listSize=0,this.pos=0},D.prototype.contains=function(t){return-1!=this._find(t)},D.prototype.front=function(){this.pos=0},D.prototype.end=function(){this.pos=this.dataStore.length-1},D.prototype.prev=function(){--this.pos},D.prototype.next=function(){this.pos<this.dataStore.length&&++this.pos},D.prototype.currPos=function(){return this.pos},D.prototype.moveTo=function(t){t>=0&&t<=this.dataStore.length&&(this.pos=t)},D.prototype.getElement=function(){return this.dataStore[this.pos]},D.prototype.hasPrev=function(){return this.pos>=0},D.prototype.hasNext=function(){return this.pos<this.listSize},D.prototype._find=function(t){for(var e=0;e<this.dataStore.length;e++)if(this.dataStore[e]==t)return e;return-1};var L=D;function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var E=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),T=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":z(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},$=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="CustomList",e}var n;return E(e,t),n=e,e.prototype.render=function(t){var e=this.$props,n=(e.type,e.options),o=(e.title,e.loading,e.active,e.childrenOption),r=n.width,i=n.height,c=o.slice(0,9),a=new L,p=["a","b","c","d","e","f","g","h","i"];p.forEach(function(t){return a.append(t)});var f=[];c.forEach(function(t){var e=t.componentOptions.propsData.rules;if(e){var n="string"==typeof e?e.split(","):e,o=n[0];n.forEach(function(t){p=p.join(",").replace(new RegExp(t.trim(),"g"),o).split(","),a.remove(t)}),f.push({vNode:t,position:o})}else f.push({vNode:t,position:null}),a.next()});var u="height: "+i+";\n                           width: "+r+';\n                           overflow: hidden;\n                           grid-template-rows: repeat(3, 33.3%);\n                           grid-template-columns: repeat(3, 33.3%);\n                           grid-template-areas: "'+p.slice(0,3).join(",").replace(/\,/gi," ")+'" "'+p.slice(3,6).join(",").replace(/\,/gi," ")+'" "'+p.slice(6,9).join(",").replace(/\,/gi," ")+'"';return t("div",{style:u,class:[v.a.customList]},[f.map(function(e){return t("div",{style:{width:"100%",height:"100%","grid-area":e.position}},[e.vNode])})])},e.componentName="CustomList",e.install=function(t){return t.component(n.componentName,n)},e=n=T([c.a],e)}(y);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var K=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),U=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":B(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="StraightLine",e}var n;return K(e,t),n=e,e.prototype.render=function(t){var e=this.$props,n=(e.type,e.options),o=(e.title,e.loading,e.active),r=void 0!==o&&o,i=n.height,c=void 0===i?"10px":i,a=n.width,p=void 0===a?"100%":a,f=n.position,u=void 0===f?"top":f,s=+c.split("px")[0]+30,l={width:p,height:c,background:"#ebebeb"};return t("div",{style:{width:"100%",height:"100%","padding-top":"top"===u?0:"50%","box-sizing":"border-box"}},[t("div",{style:"top"===u?"padding: 15px 0;":"center"===u?"padding: 15px 0; margin-top: -"+(s+s/2)+"px":"padding: 15px 0;"},[t("div",{class:[r?v.a.progActive:v.a.prog],style:l})])])},e.componentName="StraightLine",e.install=function(t){return t.component(n.componentName,n)},e=n=U([c.a],e)}(y);function J(t){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Z=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),F=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":J(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},G=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="Circle",e}var n;return Z(e,t),n=e,e.prototype.mounted=function(){},e.prototype.render=function(t){var e=this,n=this.$props,o=(n.type,n.title,n.options),r=(n.loading,n.active),i=void 0!==r&&r,c=(n.start,n.center,n.end,o.width),a=void 0===c?"100%":c;o.size;this.$nextTick(function(){console.log(e.$el.clientWidth)});var p={width:a,height:a,background:"#ebebeb","border-radius":"50%",overflow:"hidden",margin:"auto"};return t("div",{class:[v.a.circle]},[t("div",{style:[p],class:[i?v.a.progActive:v.a.prog]})])},e.componentName="Circle",e.install=function(t){return t.component(n.componentName,n)},e=n=F([c.a],e)}(y);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var V=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),q=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":H(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},Y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="Card",e}var n;return V(e,t),n=e,e.prototype.mounted=function(){},e.prototype.render=function(t){var e=this.$props,n=(e.type,e.title,e.options),o=(e.loading,e.active),r=void 0!==o&&o,i=(e.start,e.center,e.end,n.width),c=void 0===i?"100%":i,a=n.height,p={width:c,height:void 0===a?"100%":a,overflow:"hidden",margin:"auto"};return t("div",{class:[v.a.card],style:"margin: '15%'"},[t("div",{style:[p],class:[r?v.a.progActive:v.a.prog]})])},e.componentName="Card",e.install=function(t){return t.component(n.componentName,n)},e=n=q([c.a],e)}(y);function Q(t){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var W=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),X=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":Q(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},tt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="ListCom",e}var n;return W(e,t),n=e,e.prototype.render=function(t){var e=this.$props,n=(e.type,e.title,e.options),o=(e.loading,e.active),r=void 0!==o&&o,i=(e.start,e.center,e.end,n.row),c=void 0===i?4:i,a=n.lineHight,p=void 0===a?20:a,f=(n.width,n.height),u=void 0===f?"20px":f,s=Array(+c).fill(0);return t("div",{class:[v.a.listCom]},[t("ul",{style:"{width: 100%}"},[s.map(function(e,n){return t("li",{key:n,class:[r?v.a.progActive:v.a.prog],style:{height:u,marginBottom:.6*p+"px",width:n===s.length-1?"60%":"100%"}})})])])},e.componentName="ListCom",e.install=function(t){return t.component(n.componentName,n)},e=n=X([c.a],e)}(y);function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var nt=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),ot=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":et(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},rt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var n;return nt(e,t),n=e,e.prototype.render=function(t){var e=this.$props,n=e.type,o=e.options,r=e.title,i=e.loading,c=e.active,a=e.childrenOption,p=(e.start,e.center,e.end,e.rules);return t("div",{class:v.a.contianer},[i?t("div",{style:{height:"100%"}},[r&&t("div",{class:[c?v.a.progActive:v.a.prog,v.a.title]}),"rect"===n&&t(_,{attrs:{title:r,loading:i,active:c,options:o}}),"list"===n&&t(j,{attrs:{title:r,loading:i,active:c,options:o}}),"article"===n&&t(M,{attrs:{title:r,loading:i,active:c,options:o}}),"avatar"===n&&t(A,{attrs:{title:r,loading:i,active:c,options:o}}),"custom"===n&&t($,{attrs:{title:r,loading:i,active:c,options:o,childrenOption:a}}),"straightLine"===n&&t(I,{attrs:{title:r,rules:p,loading:i,active:c,options:o}}),"circle"===n&&t(G,{attrs:{title:r,rules:p,loading:i,active:c,options:o}}),"card"===n&&t(Y,{attrs:{title:r,rules:p,loading:i,active:c,options:o}}),"listCom"===n&&t(tt,{attrs:{title:r,rules:p,loading:i,active:c,options:o}})]):this.$slots.default])},e.componentName="Skeleton",e.install=function(t){return t.component(n.componentName,n)},e=n=ot([c.a],e)}(y),it=[M,A,Y,j,$,G,tt,I],ct=function(t,e){void 0===e&&(e={}),it.map(function(e){t.component(e.componentName,e)})};"undefined"!=typeof window&&window.Vue&&ct(window.Vue);e.default={install:ct,Skeleton:rt}},function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],c=i[0],a={id:t+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[c]?o[c].parts.push(a):n.push(o[c]={id:c,parts:[a]})}return n}n.r(e),n.d(e,"default",function(){return y});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},c=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,p=0,f=!1,u=function(){},s=null,l="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function y(t,e,n,r){f=n,s=r||{};var c=o(t,e);return h(c),function(e){for(var n=[],r=0;r<c.length;r++){var a=c[r];(p=i[a.id]).refs--,n.push(p)}e?h(c=o(t,e)):c=[];for(r=0;r<n.length;r++){var p;if(0===(p=n[r]).refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete i[p.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(g(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var c=[];for(r=0;r<n.parts.length;r++)c.push(g(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:c}}}}function v(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function g(t){var e,n,o=document.querySelector("style["+l+'~="'+t.id+'"]');if(o){if(f)return u;o.parentNode.removeChild(o)}if(d){var r=p++;o=a||(a=v()),e=_.bind(null,o,r,!1),n=_.bind(null,o,r,!0)}else o=v(),e=function(t,e){var n=e.css,o=e.media,r=e.sourceMap;o&&t.setAttribute("media",o);s.ssrId&&t.setAttribute(l,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var m,b=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function _(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var i=document.createTextNode(r),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}}])});