(this.webpackJsonpbebidas=this.webpackJsonpbebidas||[]).push([[0],{29:function(e,t,a){e.exports=a(56)},34:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(34),a(35),function(){return r.a.createElement("header",{className:"bg-alert"},r.a.createElement("h1",null,"Busca Recetas de bebidas"))}),l=a(14),i=a(27),u=a(3),m=a(6),b=a.n(m),d=a(9),p=a(10),f=a.n(p),v=Object(n.createContext)(),h=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",e.next=3,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 3:t=e.sent,o(t.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(v.Provider,{value:{categorias:c}},e.children)},E=Object(n.createContext)(),g=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({nombre:"",categoria:""}),l=Object(u.a)(s,2),i=l[0],m=l[1],p=Object(n.useState)(!1),v=Object(u.a)(p,2),h=v[0],g=v[1],j=i.nombre,O=i.categoria;return Object(n.useEffect)((function(){h&&function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(j,"&c=").concat(O),e.next=3,f.a.get(t);case 3:a=e.sent,o(a.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]),r.a.createElement(E.Provider,{value:{recetas:c,buscarRecetas:m,guardarConsultar:g}},e.children)},j=function(){var e=Object(n.useState)({nombre:"",categoria:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(v).categorias,s=Object(n.useContext)(E),m=s.buscarRecetas,b=s.guardarConsultar,d=function(e){c(Object(i.a)({},a,Object(l.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),console.log("nonnnnnnnnn"),m(a),b(!0)}},r.a.createElement("fieldset",{className:"text-center"},r.a.createElement("legend",null,"Busca bebidas por Categor\xeda o Ingredientes")),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Buscar por Ingredientes",name:"nombre",onChange:d})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("select",{className:"form-control",name:"categoria",onChange:d},r.a.createElement("option",{value:""},"-- Selecciona Categor\xeda --"),o.map((function(e){return r.a.createElement("option",{key:e.strCategory,value:e.strCategory},e.strCategory)})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"Buscar Bebidas"}))))},O=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({}),l=Object(u.a)(s,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return t="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(c),e.next=5,f.a.get(t);case 5:a=e.sent,m(a.data.drinks[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),r.a.createElement(O.Provider,{value:{informacion:i,guardarIdReceta:o,guardarReceta:m}},e.children)},k=a(69),N=a(68);function C(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var x=Object(N.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),y=function(e){var t=e.receta,a=Object(n.useContext)(O),c=a.informacion,o=a.guardarIdReceta,s=a.guardarReceta,l=Object(n.useState)(C),i=Object(u.a)(l,1)[0],m=Object(n.useState)(!1),b=Object(u.a)(m,2),d=b[0],p=b[1],f=x();return r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"card-header"},t.strDrink),r.a.createElement("img",{src:t.strDrinkThumb,alt:"\xccmagen de ".concat(t.strDrink),className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",onClick:function(){o(t.idDrink),p(!0),s({})}},"Receta"),r.a.createElement(k.a,{open:d,onClose:function(){o(null),p(!1)}},r.a.createElement("div",{style:i,className:f.paper},r.a.createElement("h2",null,c.strDrink),r.a.createElement("h3",{className:"mt-4"},"Instrucciones"),r.a.createElement("p",null,c.strInstructions),r.a.createElement("img",{src:c.strDrinkThumb,alt:"",className:"img-fluid my-4"}))))))},S=function(){var e=Object(n.useContext)(E).recetas;return console.log(e),r.a.createElement("div",{className:"row mt-4"},e.map((function(e){return r.a.createElement(y,{key:e.idDrink,receta:e})})))};var D=function(){return r.a.createElement(h,null,r.a.createElement(g,null,r.a.createElement(w,null,r.a.createElement(s,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement(j,null)),r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1a5d3109.chunk.js.map