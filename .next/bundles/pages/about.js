module.exports=__NEXT_REGISTER_PAGE("/about",function(){return{page:webpackJsonp([1],{100:function(e,t,n){n(41),n(16),n(21),n(101),n(102),n(103),n(104),e.exports=n(0).Map},101:function(e,t,n){"use strict";var s=n(86),r=n(56);e.exports=n(87)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=s.getEntry(r(this,"Map"),e);return t&&t.v},set:function(e,t){return s.def(r(this,"Map"),0===e?0:e,t)}},s,!0)},102:function(e,t,n){var s=n(2);s(s.P+s.R,"Map",{toJSON:n(88)("Map")})},103:function(e,t,n){n(89)("Map")},104:function(e,t,n){n(90)("Map")},105:function(e,t,n){"use strict";t.__esModule=!0;var s=i(n(106)),r=i(n(108));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){if(Array.isArray(e))return e;if((0,s.default)(Object(e)))return function(e,t){var n=[],s=!0,i=!1,o=void 0;try{for(var u,l=(0,r.default)(e);!(s=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{!s&&l.return&&l.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},106:function(e,t,n){e.exports={default:n(107),__esModule:!0}},108:function(e,t,n){e.exports={default:n(76),__esModule:!0}},109:function(e,t,n){e.exports={default:n(93),__esModule:!0}},110:function(e,t,n){e.exports={default:n(66),__esModule:!0}},111:function(e,t,n){"use strict";t.__esModule=!0;var s,r=n(45),i=(s=r)&&s.__esModule?s:{default:s};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}},112:function(e,t,n){e.exports={default:n(84),__esModule:!0}},113:function(e,t,n){e.exports={default:n(85),__esModule:!0}},114:function(e,t,n){"use strict";t.__esModule=!0;var s=o(n(115)),r=o(n(116)),i=o(n(45));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s.default?(0,s.default)(e,t):e.__proto__=t)}},115:function(e,t,n){e.exports={default:n(95),__esModule:!0}},116:function(e,t,n){e.exports={default:n(96),__esModule:!0}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l(n(118)),r=l(n(26)),i=l(n(27)),o=l(n(119)),u=l(n(120));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,s=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,l=t.isBrowser,a=void 0===l?"undefined"!=typeof window:l;(0,r.default)(this,e),this._sheet=s||new u.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),s&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return(0,i.default)(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=(0,s.default)(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});o.length>0&&(this._indices[r]=o,this._instancesCounts[r]=1)}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var s=this._fromServer&&this._fromServer[n];s?(s.parentNode.removeChild(s),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?(0,s.default)(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat((0,s.default)(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var s=String(n),r=t+s;return e[r]||(e[r]="jsx-"+(0,o.default)(t+"-"+s)),e[r]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,s){this._isBrowser||(s=s.replace(/\/style/gi,"\\/style"));var r=n+s;return t[r]||(t[r]=s.replace(e,n)),t[r]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=a},118:function(e,t,n){e.exports={default:n(75),__esModule:!0}},119:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},120:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(26)),r=i(n(27));function i(e){return e&&e.__esModule?e:{default:e}}var o=e.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,l=void 0===i?o:i,c=t.isBrowser,d=void 0===c?"undefined"!=typeof window:c;(0,s.default)(this,e),a(u(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",a("boolean"==typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=d,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0}return(0,r.default)(e,[{key:"setOptimizeForSpeed",value:function(e){a("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(a(u(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];a(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&a(u(t),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(s,n):r.appendChild(s),s}},{key:"length",get:function(){return this._rulesCount}}]),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=l}).call(t,n(44))},248:function(e,t,n){e.exports=n(249)},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(97),r=n.n(s),i=n(1),o=n.n(i),u=n(57),l=n(121),a=n.n(l);t.default=function(){return o.a.createElement(u.a,null,o.a.createElement("p",{className:"jsx-1630301058"},"This is the about page"),o.a.createElement("ul",{className:"jsx-1630301058"},[{id:"hello-nextjs",title:"Hello Next.js"},{id:"learn-nextjs",title:"Learn Next.js is awesome"},{id:"deploy-nextjs",title:"Deploy apps with ZEIT"}].map(function(e){return o.a.createElement("li",{key:e.id,className:"jsx-1630301058 testClass"},o.a.createElement(a.a,{as:"/p/".concat(e.id),href:"/post?title=".concat(e.title)},o.a.createElement("a",{className:"jsx-1630301058"},e.title)))})),o.a.createElement(r.a,{styleId:"1630301058",css:['h1.jsx-1630301058,a.jsx-1630301058{font-family:"Arial";}',".testClass.jsx-1630301058{background-color:orange;}","ul.jsx-1630301058{padding:0;}","li.jsx-1630301058{list-style:none;margin:5px 0;}","a.jsx-1630301058{-webkit-text-decoration:none;text-decoration:none;color:red;}","a.jsx-1630301058:hover{opacity:0.6;}"]}))}},26:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},27:function(e,t,n){"use strict";t.__esModule=!0;var s,r=n(110),i=(s=r)&&s.__esModule?s:{default:s};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,i.default)(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}()},45:function(e,t,n){"use strict";t.__esModule=!0;var s=o(n(112)),r=o(n(113)),i="function"==typeof r.default&&"symbol"==typeof s.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function o(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===i(s.default)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":i(e)}},97:function(e,t,n){e.exports=n(98)},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=d(n(99)),r=d(n(105)),i=d(n(109)),o=d(n(26)),u=d(n(27)),l=d(n(111)),a=d(n(114));t.flush=function(){var e=f.cssRules();return f.flush(),new s.default(e)};var c=n(1);function d(e){return e&&e.__esModule?e:{default:e}}var f=new(d(n(117)).default),h=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,a.default)(t,e),(0,u.default)(t,[{key:"componentWillMount",value:function(){f.add(this.props)}},{key:"shouldComponentUpdate",value:function(e){return this.props.css!==e.css}},{key:"componentWillUpdate",value:function(e){f.update(this.props,e)}},{key:"componentWillUnmount",value:function(){f.remove(this.props)}},{key:"render",value:function(){return null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=(0,r.default)(e,2),n=t[0],s=t[1];return f.computeId(n,s)}).join(" ")}}]),t}(c.Component);t.default=h},99:function(e,t,n){e.exports={default:n(100),__esModule:!0}}},[248]).default}});