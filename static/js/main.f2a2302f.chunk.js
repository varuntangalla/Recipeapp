(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=(n(11),n(2)),s=n.n(o),l=n(5),u=n(1),p=function(e){var t=e.title,n=e.calories,a=e.image,r=e.ingredients;return c.a.createElement("div",null,c.a.createElement("h1",null,t),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,n),c.a.createElement("img",{src:a,alt:""}))},m=(n(13),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),m=o[0],f=o[1],h=Object(a.useState)(""),b=Object(u.a)(h,2),d=b[0],v=b[1];Object(a.useEffect)((function(){g()}),[d]);var g=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(d,"&app_id=").concat("1940c5b1","&app_key=").concat("9b87347f9282a8cefc3fcfcbd75f8bc4"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.hits),console.log(n.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(m),f("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){f(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),n.map((function(e){return c.a.createElement(p,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.f2a2302f.chunk.js.map