module.exports=__NEXT_REGISTER_PAGE("/post",function(){return{page:webpackJsonp([4],{122:function(e,t,n){e.exports=window.fetch||(window.fetch=n(46).default||n(46))},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var s in o.open(t.method||"get",e),t.headers)o.setRequestHeader(s,t.headers[s]);function u(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,s,u){t.push(s=s.toLowerCase()),n.push([s,u]),e=r[s],r[s]=e?e+","+u:u}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:u,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(u())},o.onerror=r,o.send(t.body)})};t.default=r},524:function(e,t,n){e.exports=n(525)},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),o=n.n(r),s=n(1),u=n.n(s),a=n(57),c=n(122),i=n.n(c);var f=function(e){return u.a.createElement(a.a,null,u.a.createElement("h1",null,e.show.name),u.a.createElement("p",null,e.show.summary.replace(/<[/]?p>/g,"")),u.a.createElement("img",{src:e.show.image.medium}))};f.getInitialProps=function(){var e,t=(e=o.a.mark(function e(t){var n,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.id,e.next=3,i()("https://api.tvmaze.com/shows/".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,console.log("Fetched show: ".concat(s.name)),e.abrupt("return",{show:s});case 9:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var s=e.apply(t,n);function u(e,t){try{var n=s[e](t),u=n.value}catch(e){return void o(e)}n.done?r(u):Promise.resolve(u).then(a,c)}function a(e){u("next",e)}function c(e){u("throw",e)}a()})});return function(e){return t.apply(this,arguments)}}(),t.default=f}},[524]).default}});