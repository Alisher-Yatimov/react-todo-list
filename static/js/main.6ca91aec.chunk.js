(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],[,,,function(e,t,n){"use strict";n.r(t),n.d(t,"ADD_TODO",(function(){return o})),n.d(t,"REMOVE_TODO",(function(){return a})),n.d(t,"TOGGLE_TODO",(function(){return r})),n.d(t,"EDIT_TODO",(function(){return c}));var o="ADD_TODO",a="REMOVE_TODO",r="TOGGLE_TODO",c="EDIT_TODO"},,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/notepad.fd0c3d2b.svg"},function(e,t,n){e.exports=n(35)},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o,a=n(0),r=n.n(a),c=n(7),u=n.n(c),i=n(1),l=n(4),d=n(15),s=n(6),m=n(12);function O(e,t){localStorage.setItem(e,JSON.stringify(t))}var f=n(3),E=f.ADD_TODO,v=f.REMOVE_TODO,T=f.TOGGLE_TODO,b=f.EDIT_TODO,p=null!==(o=function(e){var t=localStorage.getItem(e);return JSON.parse(t)}("todos"))&&void 0!==o?o:[],D=(n(28),n(16)),g=n.n(D);n(29);var _=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:g.a,alt:"logo"}),r.a.createElement("span",null,"todo list"))))},j=n(2),x=n(3);n(30);var N={addTodo:function(e){return{type:x.ADD_TODO,text:e}}},h=Object(i.b)((function(e){return{todos:e}}),N)((function(e){var t=e.addTodo,n=e.todos,o=Object(a.useState)(""),c=Object(j.a)(o,2),u=c[0],i=c[1];return Object(a.useEffect)((function(){O("todos",n)})),r.a.createElement("div",{className:"add-todo-form"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),e.target.todo.value="",t(u)}},r.a.createElement("input",{type:"text",name:"todo",vaule:u,onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Add"))))}));n(31);function y(e){var t=e.editTodo,n=e.todoText,o=Object(a.useState)(n),c=Object(j.a)(o,2),u=c[0],i=c[1];return r.a.createElement("form",{onSubmit:t,className:"editForm"},r.a.createElement("input",{type:"text",name:"todo",onChange:function(e){return i(e.target.value)},value:u}),r.a.createElement("button",{type:"submit"},"\u2714"))}n(32);var S=Object(i.b)((function(e){return{todos:e}}),{removeTodo:function(e){return{type:x.REMOVE_TODO,id:e}},toggleTodo:function(e){return{type:x.TOGGLE_TODO,id:e}},editTodo:function(e,t){return{type:x.EDIT_TODO,id:t,text:e}}})((function(e){var t=e.todoText,n=e.removeTodo,o=e.todoId,c=e.toggleTodo,u=e.classes,i=e.editTodo,l=Object(a.useState)(!1),d=Object(j.a)(l,2),s=d[0],m=d[1];return r.a.createElement("li",{className:u},s?r.a.createElement(y,{editTodo:function(e){e.preventDefault(),i(e.target.todo.value,o),m(!1)},todoText:t}):r.a.createElement("p",null,t),r.a.createElement("div",{className:s?"dis":"btn-block"},r.a.createElement("button",{className:"btn ed",onClick:function(){return m(!0)}},"edit"),r.a.createElement("button",{className:"btn imp",onClick:function(){c(o),O("todos")}},"!"),r.a.createElement("button",{className:"btn rm",onClick:function(){n(o),O("todos")}},"\xd7")))}));n(33);var I=Object(i.b)((function(e){return{todos:e}}),null)((function(e){var t=e.todos;return t.length?t.map((function(e){var t=e.done?"todo-element done":"todo-element";return r.a.createElement(S,{todoText:e.text,classes:t,key:e._id,todoId:e._id})})):r.a.createElement("h5",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b \u043f\u0443\u0441\u0442")}));n(34);var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"todo-list"},r.a.createElement(I,null))))},k=Object(l.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return[].concat(Object(m.a)(e),[{_id:Date.now(),text:t.text,done:!1}]);case v:var n=e.filter((function(e){return e._id!==t.id}));return Object(m.a)(n);case T:return e.map((function(e){return e._id===t.id?Object(s.a)(Object(s.a)({},e),{},{done:!e.done}):e}));case b:return e.map((function(e){return e._id===t.id?Object(s.a)(Object(s.a)({},e),{},{text:t.text}):e}));default:return e}}),Object(d.composeWithDevTools)());u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:k},r.a.createElement(G,null))),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.6ca91aec.chunk.js.map