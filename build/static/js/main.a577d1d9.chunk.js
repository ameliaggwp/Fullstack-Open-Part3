(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(14),u=t.n(r),l=(t(20),t(4)),o=t(2),i=t(3),m=t.n(i),d="/api/persons",s=function(){return m.a.get(d).then((function(e){return e.data}))},f=function(e){return m.a.post(d,e).then((function(e){return e.data}))},b=function(e){m.a.delete("".concat(d,"/").concat(e))},h=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return c.a.createElement("div",null,e.name," ",e.number," ",c.a.createElement("button",{onClick:function(){return e.handleClick(e)}},"delete"))},E=function(e){var n=e.persons,t=e.newSearch,a=e.handleDelete,r=[];if(t){for(var u=0;u<n.length;u++)n[u].name.toLowerCase().includes(t.toLowerCase())&&r.push(n[u]);return c.a.createElement("div",null,r.map((function(e){return c.a.createElement("div",{key:e.id},e.name," ",e.number)})))}return c.a.createElement("div",null,n.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(v,{name:e.name,number:e.number,id:e.id,handleClick:a}))})))},p=function(e){return c.a.createElement("div",null,c.a.createElement("h2",null,e.title),c.a.createElement("form",{onSubmit:e.onSubmit},e.children,c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))))},g=function(e){return c.a.createElement("div",null,e.inputTitle," ",c.a.createElement("input",{value:e.value,onChange:e.onChange}))},j=function(e){var n=e.message,t=e.classStyle;return null===n?null:c.a.createElement("div",{className:t},n)},O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],v=Object(a.useState)(""),O=Object(o.a)(v,2),S=O[0],k=O[1],w=Object(a.useState)(""),C=Object(o.a)(w,2),y=C[0],T=C[1],N=Object(a.useState)(null),D=Object(o.a)(N,2),A=D[0],L=D[1],J=Object(a.useState)(null),x=Object(o.a)(J,2),B=x[0],I=x[1];Object(a.useEffect)((function(){s().then((function(e){r(e)}))}),[]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(j,{message:B,classStyle:"error"}),c.a.createElement(j,{message:A,classStyle:"success"}),c.a.createElement("div",null,c.a.createElement(g,{inputTitle:"filter names",value:y,onChange:function(e){T(e.target.value)}})),c.a.createElement(p,{title:"Add New",onSubmit:function(e){e.preventDefault();var n={name:m,number:S};0===t.length&&f(n).then((function(e){r(t.concat(e)),L("Added ".concat(e.name)),setTimeout((function(){L(null)}),3e3),d(""),k("")}));for(var a=0;a<t.length;a++){if(t[a].name===n.name){if("break"===function(){var e=t[a],c=Object(l.a)(Object(l.a)({},e),{},{number:n.number});return window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))&&h(e.id,c).then((function(n){r(t.map((function(t){return t.id!==e.id?t:n}))),L("Updated ".concat(c.name)),setTimeout((function(){L(null)}),3e3),d(""),k("")})).catch((function(n){I("".concat(e.name," has already been removed from the server")),setTimeout((function(){I(null)}),3e3),r(t.filter((function(n){return n.id!==e.id})))})),"break"}())break}else f(n).then((function(e){r(t.concat(e)),L("Added ".concat(n.name)),setTimeout((function(){L(null)}),3e3),d(""),k("")})).catch((function(e){var n=e.response.data.error;I(n),setTimeout((function(){I(null)}),3e3)}))}}},c.a.createElement(g,{inputTitle:"Name",value:m,onChange:function(e){d(e.target.value)}}),c.a.createElement(g,{inputTitle:"Number",value:S,onChange:function(e){k(e.target.value)}})),c.a.createElement("h2",null,"Numbers"),t?c.a.createElement(E,{persons:t,newSearch:y,handleDelete:function(e){var n=e.id,a=e.name;window.confirm("Delete ".concat(a))&&(b(n),r(t.filter((function(e){return e.id!==n}))))}}):c.a.createElement("div",null,"Loading..."))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a577d1d9.chunk.js.map