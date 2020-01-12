(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(13),n(1)),u=n(7),i=n(6),m=n.n(i),s=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}},f=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},d={container:{marginLeft:"auto",marginRight:"auto",padding:"0 24px"}},p=function(e){var t=e.children;return r.a.createElement("div",{style:d.container},t)},b={form:{width:320,border:"solid",borderWidth:1,padding:10},label:{display:"flex",flexDirection:"column"}};function E(e){var t=e.addContact,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],u=c[1],i=Object(a.useState)(""),m=Object(l.a)(i,2),s=m[0],f=m[1];return r.a.createElement("form",{style:b.form,onSubmit:function(e){e.preventDefault(),t({name:o,number:s}),u(""),f("")}},r.a.createElement("label",{style:b.label},r.a.createElement("span",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("label",{style:b.label},r.a.createElement("span",null,"Number"),r.a.createElement("input",{type:"text",name:"number",value:s,onChange:function(e){return f(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Add contact"))}function v(e){var t=e.filter,n=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("input",{type:"text",value:t,onChange:n}))}function y(e){var t=e.filterContact,n=e.removeContact;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",null,e.name,":"),r.a.createElement("span",null,e.number),r.a.createElement("button",{onClick:function(){return n(e.id)}},"Delete"))})))}var h=function(e,t){switch(t.type){case"addContact":return[].concat(Object(u.a)(e),[t.payload.contact]);case"removeContact":return e.filter((function(e){return e.id!==t.payload.contactId}));case"setStorage":return t.payload.contacts;default:return e}};var g=function(){var e=Object(a.useReducer)(h,[]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=f("contacts");e&&c({type:"setStorage",payload:{contacts:e}})}),[]),Object(a.useEffect)((function(){s("contacts",n)}),[n]);var o=Object(a.useState)(""),u=Object(l.a)(o,2),i=u[0],d=u[1],b=Object(a.useMemo)((function(){return n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}))}),[n,i]);return r.a.createElement(p,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(E,{addContact:function(e){var t=e.name,n=e.number,a={id:m()(),name:t,number:n};c({type:"addContact",payload:{contact:a}})}}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(v,{value:i,onChange:function(e){return d(e.target.value)}}),r.a.createElement(y,{filterContact:b,removeContact:function(e){c({type:"removeContact",payload:{contactId:e}})}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.9aa67f0b.chunk.js.map