(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(49)},27:function(e,n,t){},28:function(e,n,t){e.exports=t.p+"static/media/logo.495d93cc.svg"},29:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(15),i=t.n(c),r=(t(27),t(16)),l=t(17),u=t(20),s=t(18),d=t(21),f=(t(28),t(29),t(2)),g=t(19),v=t(4),h=t(3),p=t.n(h);var m=function(e){var n=Object(o.useState)({event:"",location:"",successMessage:null}),t=Object(v.a)(n,2),c=t[0],i=t[1],r=function(e){var n=e.target,t=n.id,o=n.value;i(function(e){return Object(g.a)({},e,Object(f.a)({},t,o))})};return a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("label",null,"What happened?"),a.a.createElement("input",{type:"text",placeholder:"I...",value:c.event,onChange:r,id:"event"}),a.a.createElement("label",null,"Where at?"),a.a.createElement("input",{type:"text",placeholder:"Location",value:c.location,onChange:r,id:"location"}),a.a.createElement("button",{type:"submit",onClick:function(n){n.preventDefault();var t={event:c.event,location:c.location};p.a.post("/data/add",t).then(function(n){console.log(t),console.log("Attemping to add..."),console.log(n),200===n.status?console.log("Added"):e.showError("Something failed!")}).catch(function(e){console.log(e)})}},"Submit")))};var w=function(){var e=Object(o.useState)([]),n=Object(v.a)(e,2),t=(n[0],n[1],[]),c=[];return t.push(p.a.get("/data/get").then(function(e){console.log("get req"),console.log(e.data),c.push(e.data)})),Object(o.useEffect)(function(){Promise.all(t).then(function(){console.log(c)})},[]),a.a.createElement("div",null,a.a.createElement("div",null))},b=function(e){function n(){return Object(r.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement(w,null))}}]),n}(o.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");E?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):j(e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.b52a4800.chunk.js.map