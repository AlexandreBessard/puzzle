(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c,a,i=n(0),l=n.n(i),r=n(21),s=n.n(r),o=(n(28),n(8)),j=n(9),u=n(11),d=n(12),m=n(14),b=n(13),p=n(2),h=(n(29),n(1)),O=Object(p.f)((function(e){var t=e.title,n=e.image,c=e.size,a=e.history,i=e.linkUrl,l=e.match;return Object(h.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(l.url).concat(i))},children:[Object(h.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(h.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),f=(n(36),n.p+"static/media/image_1.711fdf58.jpg"),x=["id"],g=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={sections:[{title:"PUZZLE MODELS",image:f,size:"small",id:1,linkUrl:"shop"}]},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(j.a)(e,x);return Object(h.jsx)(O,Object(o.a)({},n),t)}))})}}]),n}(l.a.Component),v=(n(37),function(){return Object(h.jsx)("div",{className:"homepage",children:Object(h.jsx)(g,{})})}),N=(n(38),function(e){e.id;var t=e.name,n=e.price,c=e.imageUrl;return Object(h.jsxs)("div",{className:"collection-item",children:[Object(h.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(h.jsxs)("div",{className:"collection-footer",children:[Object(h.jsx)("span",{className:"name",children:t}),Object(h.jsx)("span",{className:"price",children:n})]})]})}),y=(n(39),["id"]),z=function(e){var t=e.title,n=e.items;return Object(h.jsxs)("div",{className:"collection-preview",children:[Object(h.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(h.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){var t=e.id,n=Object(j.a)(e,y);return Object(h.jsx)(N,Object(o.a)({},n),t)}))})]})},w=[{id:1,title:"Puzzles",routeName:"puzzle-detail",items:[{id:1,name:"Puzzle Model 1",imageUrl:n.p+"static/media/image_2.0002e319.jpg",price:"30$"},{id:2,name:"Puzzle Model 2",imageUrl:n.p+"static/media/image_3.4becadeb.jpg",price:"25$"},{id:3,name:"Puzzle Model 3",imageUrl:n.p+"static/media/image_4.0d7d4355.jpg",price:"35$"}]}],E=["id"],k=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={collections:w},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.collections;return Object(h.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,n=Object(j.a)(e,E);return Object(h.jsx)(z,Object(o.a)({},n),t)}))})}}]),n}(l.a.Component),C=n(7),I=["title","titleId"];function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e,t){var n=e.title,l=e.titleId,r=S(e,I);return i.createElement("svg",P({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":l},r),void 0===n?i.createElement("title",{id:l},"Group"):n?i.createElement("title",{id:l},n):null,c||(c=i.createElement("desc",null,"Created with Sketch.")),a||(a=i.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},i.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},i.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),i.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),i.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),i.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),i.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var A=i.forwardRef(U),B=(n.p,n(40),function(){return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(C.b,{className:"logo-container",to:"/puzzle/",children:Object(h.jsx)(A,{className:"logo"})}),Object(h.jsxs)("div",{className:"options",children:[Object(h.jsx)(C.b,{className:"option",to:"/puzzle/shop",children:"SHOP"}),Object(h.jsx)(C.b,{className:"option",to:"/puzzle/",children:"BLOG"}),Object(h.jsx)(C.b,{className:"option",to:"/puzzle/",children:"CONTACT"}),Object(h.jsx)(C.b,{className:"option",to:"/puzzle/signIn",children:"SIGN IN"})]})]})}),G=n(16),M=(n(41),function(){return Object(h.jsx)("button",{className:"custom-button",children:"Button"})}),_=(n(42),["handleChange","label"]),L=function(e){var t=e.handleChange,n=e.label,c=Object(j.a)(e,_);return Object(h.jsxs)("div",{className:"group",children:[Object(h.jsx)("input",Object(o.a)({className:"form-input",onChange:t},c)),n?Object(h.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},R=(n(43),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(G.a)({},a,n))},c.state={email:"",password:""},c}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"sign-in",children:[Object(h.jsx)("h2",{children:"I already have an account"}),Object(h.jsx)("span",{children:"Sign in with your email and password"}),Object(h.jsxs)("form",{children:[Object(h.jsx)(L,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(h.jsx)(L,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(h.jsx)(M,{type:"submit",children:" Sign in "})]})]})}}]),n}(l.a.Component)),T=(n(44),function(){return Object(h.jsx)("div",{className:"sign-in-and-sign-up",children:Object(h.jsx)(R,{})})});n(45);var W=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(B,{}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",component:v}),Object(h.jsx)(p.a,{exact:!0,path:"/puzzle/",component:v}),Object(h.jsx)(p.a,{exact:!0,path:"/puzzle/shop/",component:k}),Object(h.jsx)(p.a,{exact:!0,path:"/puzzle/signIn/",component:T})]})]})};s.a.render(Object(h.jsx)(C.a,{children:Object(h.jsx)(W,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c07afec5.chunk.js.map