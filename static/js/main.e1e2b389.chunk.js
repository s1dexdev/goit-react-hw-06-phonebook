(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={input:"Filter_input__2DoVp"}},17:function(t,e,n){t.exports={btn:"ContactList_btn__1Xk4q",item:"ContactList_item__3YsZK"}},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=n(5),u=n(21),l=n(18),b=n(3),j=n(39),m={addContact:Object(b.b)("phoneBook/addContact",(function(t,e){return{payload:{id:Object(j.a)(),name:t,number:e}}})),deleteContact:Object(b.b)("phoneBook/deleteContact"),changeFilter:Object(b.b)("phoneBook/filterContacts")},d=n(6),f=n.n(d),O=n(1),p=Object(s.b)((function(t){return{items:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(m.addContact(e,n))}}}))((function(t){var e=t.items,n=t.onSubmit,c=Object(a.useState)(""),r=Object(l.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),u=Object(l.a)(s,2),b=u[0],j=u[1],m=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":i(c);break;case"number":j(c)}},d=function(){i(""),j("")};return Object(O.jsxs)("form",{className:f.a.form,onSubmit:function(t){return t.preventDefault(),e.some((function(t){return t.name===o}))?(d(),alert("".concat(o," is already in contacts"))):(d(),n(o,b))},children:[Object(O.jsxs)("label",{className:f.a.labelName,children:["Name",Object(O.jsx)("input",{className:f.a.input,type:"text",name:"name",value:o,onChange:m})]}),Object(O.jsxs)("label",{children:["Number",Object(O.jsx)("input",{className:f.a.input,type:"text",name:"number",value:b,onChange:m})]}),Object(O.jsx)("button",{className:f.a.btn,type:"submit",disabled:!(o&&b)&&!0,children:"Add contact"})]})})),h=n(16),x=n.n(h),C=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onFilter:function(e){return t(m.changeFilter(e.target.value))}}}))((function(t){var e=t.onFilter,n=t.filter;return Object(O.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(O.jsx)("input",{className:x.a.input,type:"text",name:"filter",value:n,onChange:e})]})})),_=n(17),v=n.n(_),g=Object(s.b)((function(t){var e=t.contacts,n=e.filter;return{visibleContacts:function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(e.items,n)}}),(function(t){return{onDeleteContact:function(e){return t(m.deleteContact(e))}}}))((function(t){var e=t.onDeleteContact,n=t.visibleContacts;return Object(O.jsx)("ul",{children:n.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(O.jsxs)("li",{className:v.a.item,children:[c,": ",a,Object(O.jsx)("button",{className:v.a.btn,type:"button",name:n,onClick:function(){return e(n)},children:"Delete"})]},n)}))})})),k=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(p,{}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(C,{}),Object(O.jsx)(g,{})]})},N=n(10),y=n(4),F=n(22),w=n.n(F),S=n(23),B=n.n(S),D=n(11),L=n(2),q=Object(b.c)([],(c={},Object(D.a)(c,m.addContact,(function(t,e){var n=e.payload;return[].concat(Object(N.a)(t),[n])})),Object(D.a)(c,m.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),z=Object(b.c)("",Object(D.a)({},m.changeFilter,(function(t,e){return e.payload}))),A=Object(L.c)({items:q,filter:z}),J={key:"contacts",storage:w.a,blacklist:["filter"]},T=[].concat(Object(N.a)(Object(b.d)({serializableCheck:{ignoredActions:[y.a,y.f,y.b,y.c,y.d,y.e]}})),[B.a]),V=Object(b.a)({reducer:{contacts:Object(y.g)(J,A)},middleware:T,devTools:!1}),K={store:V,persistor:Object(y.h)(V)};n(36);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(s.a,{store:K.store,children:Object(O.jsx)(u.a,{loading:null,persistor:K.persistor,children:Object(O.jsx)(k,{})})})}),document.querySelector("#root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",labelName:"ContactForm_labelName__3V3cS",input:"ContactForm_input__gm87B",btn:"ContactForm_btn__2Bpnz"}}},[[37,1,2]]]);
//# sourceMappingURL=main.e1e2b389.chunk.js.map