(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),i=n.n(c),s=(n(39),n(12)),l=n.n(s),o=n(4),u=n(18),d=n(13),m=n(14),j=n(17),p=n(16),b=n(19),h=n(5),f=(n(41),n(1)),O=Object(h.g)((function(e){var t=e.title,n=e.image,a=e.size,r=e.history,c=e.linkUrl,i=e.match;return Object(f.jsxs)("div",{className:"".concat(a," menu-item"),onClick:function(){return r.push("".concat(i.url).concat(c))},children:[Object(f.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(f.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),g=(n(50),n.p+"static/media/image_1.711fdf58.jpg"),v=["id"],x=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={sections:[{title:"PUZZLE MODELS",image:g,size:"small",id:1,linkUrl:"/shop"}]},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(b.a)(e,v);return Object(f.jsx)(O,Object(o.a)({},n),t)}))})}}]),n}(r.a.Component),y=(n(51),function(){return Object(f.jsx)("div",{className:"homepage",children:Object(f.jsx)(x,{})})}),w=n(11),N=(n(53),["children","isGoogleSignIn","inverted"]),E=function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,r=Object(b.a)(e,N);return Object(f.jsx)("button",Object(o.a)(Object(o.a)({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},r),{},{children:t}))},C={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM"},I=C,k=(n(54),Object(w.b)(null,(function(e){return{addItem:function(t){return e(function(e){return{type:I.ADD_ITEM,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,r=t.price,c=t.imageUrl;return Object(f.jsxs)("div",{className:"collection-item",children:[Object(f.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(f.jsxs)("div",{className:"collection-footer",children:[Object(f.jsx)("span",{className:"name",children:a}),Object(f.jsx)("span",{className:"price",children:r})]}),Object(f.jsx)(E,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),S=(n(55),function(e){var t=e.title,n=e.items;return Object(f.jsxs)("div",{className:"collection-preview",children:[Object(f.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(f.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(f.jsx)(k,{item:e},e.id)}))})]})}),z=[{id:1,title:"Puzzles",routeName:"puzzle-detail",items:[{id:1,name:"Puzzle Model 1",imageUrl:n.p+"static/media/image_2_reduced.8e9ce2fa.jpg",price:"30$"},{id:2,name:"Puzzle Model 2",imageUrl:n.p+"static/media/image_3_reduced.1e7fb78c.jpg",price:"25$"},{id:3,name:"Puzzle Model 3",imageUrl:n.p+"static/media/image_4_reduced.5e32a487.jpg",price:"35$"}]}],P=["id"],U=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={collections:z},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.collections;return Object(f.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,n=Object(b.a)(e,P);return Object(f.jsx)(S,Object(o.a)({},n),t)}))})}}]),n}(r.a.Component),A=n(15),_=n(22);n(56),n(58);_.a.initializeApp({apiKey:"AIzaSyBNT_y31P_M7ti7cij2MMgCMcn8vGAMy58",authDomain:"crwn-db-433c1.firebaseapp.com",projectId:"crwn-db-433c1",storageBucket:"crwn-db-433c1.appspot.com",messagingSenderId:"43081720070",appId:"1:43081720070:web:0e1fbb58f52727c097fe87",measurementId:"G-6J033VNZMC"});var D,G,T,M,H,q,R,W,B,L,V,$,F,J,Z,K=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Q.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(o.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),X=_.a.auth(),Q=_.a.firestore(),Y=new _.a.auth.GoogleAuthProvider,ee=function(){return X.signInWithPopup(Y).then((function(e){console.log("test")})).catch((function(e){console.log(e)}))},te=(_.a,["title","titleId"]);function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function re(e,t){var n=e.title,r=e.titleId,c=ae(e,te);return a.createElement("svg",ne({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,a.createElement("g",null,a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),D||(D=a.createElement("g",null)),G||(G=a.createElement("g",null)),T||(T=a.createElement("g",null)),M||(M=a.createElement("g",null)),H||(H=a.createElement("g",null)),q||(q=a.createElement("g",null)),R||(R=a.createElement("g",null)),W||(W=a.createElement("g",null)),B||(B=a.createElement("g",null)),L||(L=a.createElement("g",null)),V||(V=a.createElement("g",null)),$||($=a.createElement("g",null)),F||(F=a.createElement("g",null)),J||(J=a.createElement("g",null)),Z||(Z=a.createElement("g",null)))}var ce,ie,se=a.forwardRef(re),le=(n.p,n(60),Object(w.b)((function(e){return{itemCount:e.cart.cartItems.reduce((function(e,t){return e+t.quantity}),0)}}),(function(e){return{toggleCartHidden:function(){return e({type:I.TOGGLE_CART_HIDDEN})}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(f.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(f.jsx)(se,{className:"shopping-icon"}),Object(f.jsx)("span",{className:"item-count",children:n})]})}))),oe=["title","titleId"];function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function me(e,t){var n=e.title,r=e.titleId,c=de(e,oe);return a.createElement("svg",ue({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"Group"):n?a.createElement("title",{id:r},n):null,ce||(ce=a.createElement("desc",null,"Created with Sketch.")),ie||(ie=a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var je=a.forwardRef(me),pe=(n.p,n(61),function(e){var t=e.item,n=t.imageUrl,a=t.price,r=t.name,c=t.quantity;return Object(f.jsxs)("div",{className:"cart-item",children:[Object(f.jsx)("img",{src:n,alt:"item"}),Object(f.jsxs)("div",{className:"item-details",children:[Object(f.jsx)("span",{className:"name",children:r}),Object(f.jsxs)("span",{className:"price",children:[c," x $",a]})]})]})}),be=(n(62),Object(w.b)((function(e){return{cartItems:e.cart.cartItems}}))((function(e){var t=e.cartItems;return Object(f.jsxs)("div",{className:"cart-dropdown",children:[Object(f.jsx)("div",{className:"cart-items",children:t.map((function(e){return Object(f.jsx)(pe,{item:e},e.id)}))}),Object(f.jsx)(E,{children:"GO TO CHECKOUT"})]})}))),he=(n(63),Object(w.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,n=e.hidden;return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(A.b,{className:"logo-container",to:"/puzzle",children:Object(f.jsx)(je,{className:"logo"})}),Object(f.jsxs)("div",{className:"options",children:[Object(f.jsx)(A.b,{className:"option",to:"/puzzle/shop/",children:"SHOP"}),Object(f.jsx)(A.b,{className:"option",to:"/puzzle/shop/",children:"CONTACT"}),t?Object(f.jsx)("div",{className:"option",onClick:function(){return X.signOut()},children:"SIGN OUT"}):Object(f.jsx)(A.b,{className:"option",to:"/puzzle/signin",children:"SIGN IN"}),Object(f.jsx)(le,{})]}),n?null:Object(f.jsx)(be,{})]})}))),fe=n(21),Oe=(n(64),["handleChange","label"]),ge=function(e){var t=e.handleChange,n=e.label,a=Object(b.a)(e,Oe);return Object(f.jsxs)("div",{className:"group",children:[Object(f.jsx)("input",Object(o.a)({className:"form-input",onChange:t},a)),n?Object(f.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})},ve=(n(65),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,X.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(fe.a)({},r,n))},a.state={email:"",password:""},a}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"sign-in",children:[Object(f.jsx)("h2",{children:"I already have an account"}),Object(f.jsx)("span",{children:"Sign in with your email and password"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)(ge,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(f.jsx)(ge,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsx)(E,{type:"submit",children:" Sign in "}),Object(f.jsx)(E,{type:"button",onClick:ee,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(r.a.Component)),xe=(n(66),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(l.a.mark((function t(n){var a,r,c,i,s,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,s=a.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,X.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,u=o.user,t.next=12,K(u,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(fe.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,r=e.confirmPassword;return Object(f.jsxs)("div",{className:"sign-up",children:[Object(f.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(f.jsx)("span",{children:"Sign up with your email and password"}),Object(f.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(f.jsx)(ge,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(f.jsx)(ge,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(f.jsx)(ge,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(f.jsx)(ge,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(f.jsx)(E,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(r.a.Component)),ye=(n(67),function(){return Object(f.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(f.jsx)(ve,{}),Object(f.jsx)(xe,{})]})}),we="SET_CURRENT_USER",Ne=(n(68),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.setCurrentUser;this.unsubscribeFromAuth=X.onAuthStateChanged(function(){var n=Object(u.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=5;break}return n.next=3,K(a);case 3:n.sent.onSnapshot((function(n){t(Object(o.a)({id:n.id},n.data())),console.log(e.state)}));case 5:t(a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(he,{}),Object(f.jsxs)(h.d,{children:[Object(f.jsx)(h.b,{exact:!0,path:"/puzzle",component:y}),Object(f.jsx)(h.b,{path:"/puzzle/shop/",component:U}),Object(f.jsx)(h.b,{exact:!0,path:"/puzzle/signIn/",render:function(){return e.props.currentUser?Object(f.jsx)(h.a,{to:"/puzzle"}):Object(f.jsx)(ye,{})}})]})]})}}]),n}(r.a.Component)),Ee=Object(w.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:we,payload:e}}(t))}}}))(Ne),Ce=n(25),Ie=n(33),ke=n.n(Ie),Se={currentUser:null},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload});default:return e}},Pe=n(34),Ue=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Pe.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},Ae={hidden:!0,cartItems:[]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.TOGGLE_CART_HIDDEN:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case C.ADD_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:Ue(e.cartItems,t.payload)});default:return e}},De=Object(Ce.b)({user:ze,cart:_e}),Ge=[ke.a],Te=Object(Ce.c)(De,Ce.a.apply(void 0,Ge));i.a.render(Object(f.jsx)(w.a,{store:Te,children:Object(f.jsx)(A.a,{children:Object(f.jsx)(Ee,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.27f34e4d.chunk.js.map