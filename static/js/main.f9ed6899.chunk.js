(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(28),i=n.n(r),s=n(15),l=n(7),o=n(34),u=n(16),d=n(30),j=n(35),b=n.n(j),m=n(36),p=n.n(m),h={sections:[{title:"PUZZLE MODELS",image:n.p+"static/media/image_1.711fdf58.jpg",size:"small",id:1,linkUrl:"shop"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;return t.type,e},f=n(3),v="SET_CURRENT_USER",g={currentUser:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(f.a)(Object(f.a)({},e),{},{currentUser:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},N=n(38),w=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(N.a)(e),[Object(f.a)(Object(f.a)({},t),{},{quantity:1})])},E=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity-1}):e}))},C={hidden:!0,cartItems:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(f.a)(Object(f.a)({},e),{},{hidden:!e.hidden});case y.ADD_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:w(e.cartItems,t.payload)});case y.REMOVE_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:E(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},k={collections:[{id:1,title:"Puzzles",routeName:"puzzle-detail",items:[{id:1,name:"Puzzle Model 1",imageUrl:n.p+"static/media/image_2_reduced.8e9ce2fa.jpg",price:30},{id:2,name:"Puzzle Model 2",imageUrl:n.p+"static/media/image_3_reduced.1e7fb78c.jpg",price:25},{id:3,name:"Puzzle Model 3",imageUrl:n.p+"static/media/image_4_reduced.5e32a487.jpg",price:35}]}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return t.type,e},z={key:"root",storage:p.a,whitelist:["cart"]},_=Object(u.b)({user:x,cart:I,directory:O,shop:M}),S=Object(d.a)(z,_),T=[b.a],A=Object(u.c)(S,u.a.apply(void 0,T)),P=Object(d.b)(A),U=n(14),R=n.n(U),D=n(17),G=n(21),q=n(22),H=n(24),L=n(23),V=n(6),F=n(5),B=(n(49),n(18)),W=(n(50),n(1)),J=Object(V.g)((function(e){var t=e.title,n=e.image,c=e.size,a=e.history,r=e.linkUrl,i=e.match;return Object(W.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(i.url).concat(r))},children:[Object(W.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(W.jsxs)("div",{className:"content",children:[Object(W.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(W.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})})),Z=Object(F.a)([function(e){return e.directory}],(function(e){return e.sections})),$=(n(53),["id"]),K=Object(F.b)({sections:Z}),Q=Object(l.b)(K)((function(e){var t=e.sections;return Object(W.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(B.a)(e,$);return Object(W.jsx)(J,Object(f.a)({},n),t)}))})})),X=(n(54),function(){return Object(W.jsx)("div",{className:"homepage",children:Object(W.jsx)(Q,{})})}),Y=(n(55),["children","isGoogleSignIn","inverted"]),ee=function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,a=Object(B.a)(e,Y);return Object(W.jsx)("button",Object(f.a)(Object(f.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))},te=function(){return{type:y.TOGGLE_CART_HIDDEN}},ne=function(e){return{type:y.ADD_ITEM,payload:e}},ce=(n(56),Object(l.b)(null,(function(e){return{addItem:function(t){return e(ne(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,r=t.imageUrl;return Object(W.jsxs)("div",{className:"collection-item",children:[Object(W.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(r,")")}}),Object(W.jsxs)("div",{className:"collection-footer",children:[Object(W.jsx)("span",{className:"name",children:c}),Object(W.jsxs)("span",{className:"price",children:[a,"$"]})]}),Object(W.jsx)(ee,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),ae=(n(57),function(e){var t=e.title,n=e.items;return Object(W.jsxs)("div",{className:"collection-preview",children:[Object(W.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(W.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(W.jsx)(ce,{item:e},e.id)}))})]})}),re=Object(F.a)([function(e){return e.shop}],(function(e){return e.collections})),ie=["id"],se=Object(F.b)({collections:re}),le=Object(l.b)(se)((function(e){var t=e.collections;return Object(W.jsx)("div",{className:"shop-page",children:t.map((function(e){var t=e.id,n=Object(B.a)(e,ie);return Object(W.jsx)(ae,Object(f.a)({},n),t)}))})})),oe=n(20),ue=(n(58),["handleChange","label"]),de=function(e){var t=e.handleChange,n=e.label,c=Object(B.a)(e,ue);return Object(W.jsxs)("div",{className:"group",children:[Object(W.jsx)("input",Object(f.a)({className:"form-input",onChange:t},c)),n?Object(W.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},je=n(25);n(59),n(61);je.a.initializeApp({apiKey:"AIzaSyBNT_y31P_M7ti7cij2MMgCMcn8vGAMy58",authDomain:"crwn-db-433c1.firebaseapp.com",projectId:"crwn-db-433c1",storageBucket:"crwn-db-433c1.appspot.com",messagingSenderId:"43081720070",appId:"1:43081720070:web:0e1fbb58f52727c097fe87",measurementId:"G-6J033VNZMC"});var be,me,pe,he,Oe,fe,ve,ge,xe,ye,Ne,we,Ee,Ce,Ie,ke=function(){var e=Object(D.a)(R.a.mark((function e(t,n){var c,a,r,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=ze.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,r=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(f.a)({displayName:a,email:r,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),Me=je.a.auth(),ze=je.a.firestore(),_e=new je.a.auth.GoogleAuthProvider,Se=function(){return Me.signInWithPopup(_e).then((function(e){console.log("test")})).catch((function(e){console.log(e)}))},Te=(je.a,n(63),function(e){Object(H.a)(n,e);var t=Object(L.a)(n);function n(e){var c;return Object(G.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(D.a)(R.a.mark((function e(t){var n,a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,a=n.email,r=n.password,e.prev=2,e.next=5,Me.signInWithEmailAndPassword(a,r);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(oe.a)({},a,n))},c.state={email:"",password:""},c}return Object(q.a)(n,[{key:"render",value:function(){return Object(W.jsxs)("div",{className:"sign-in",children:[Object(W.jsx)("h2",{children:"I already have an account"}),Object(W.jsx)("span",{children:"Sign in with your email and password"}),Object(W.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(W.jsx)(de,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(W.jsx)(de,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(W.jsxs)("div",{className:"buttons",children:[Object(W.jsx)(ee,{type:"submit",children:" Sign in "}),Object(W.jsx)(ee,{type:"button",onClick:Se,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(a.a.Component)),Ae=(n(64),function(e){Object(H.a)(n,e);var t=Object(L.a)(n);function n(){var e;return Object(G.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(D.a)(R.a.mark((function t(n){var c,a,r,i,s,l,o;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,a=c.displayName,r=c.email,i=c.password,s=c.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Me.createUserWithEmailAndPassword(r,i);case 8:return l=t.sent,o=l.user,t.next=12,ke(o,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(oe.a)({},c,a))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(q.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,a=e.confirmPassword;return Object(W.jsxs)("div",{className:"sign-up",children:[Object(W.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(W.jsx)("span",{children:"Sign up with your email and password"}),Object(W.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(W.jsx)(de,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(W.jsx)(de,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(W.jsx)(de,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(W.jsx)(de,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(W.jsx)(ee,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),Pe=(n(65),function(){return Object(W.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(W.jsx)(Te,{}),Object(W.jsx)(Ae,{})]})}),Ue=(n(66),Object(l.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(ne(t))},removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,r=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(W.jsxs)("div",{className:"checkout-item",children:[Object(W.jsx)("div",{className:"image-container",children:Object(W.jsx)("img",{src:i,alt:"item"})}),Object(W.jsx)("span",{className:"name",children:r}),Object(W.jsxs)("span",{className:"quantity",children:[Object(W.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(W.jsx)("span",{className:"value",children:l}),Object(W.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(W.jsx)("span",{className:"price",children:s}),Object(W.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Re=function(e){return e.cart},De=Object(F.a)([Re],(function(e){return e.cartItems})),Ge=Object(F.a)([Re],(function(e){return e.hidden})),qe=Object(F.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),He=Object(F.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Le=(n(67),Object(F.b)({cartItems:De,total:He})),Ve=Object(l.b)(Le)((function(e){var t=e.cartItems,n=e.total;return Object(W.jsxs)("div",{className:"checkout-page",children:[Object(W.jsxs)("div",{className:"checkout-header",children:[Object(W.jsx)("div",{className:"header-block",children:Object(W.jsx)("span",{children:"Product"})}),Object(W.jsx)("div",{className:"header-block",children:Object(W.jsx)("span",{children:"Description"})}),Object(W.jsx)("div",{className:"header-block",children:Object(W.jsx)("span",{children:"Quantity"})}),Object(W.jsx)("div",{className:"header-block",children:Object(W.jsx)("span",{children:"Price"})}),Object(W.jsx)("div",{className:"header-block",children:Object(W.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(W.jsx)(Ue,{cartItem:e},e.id)})),Object(W.jsxs)("div",{className:"total",children:["TOTAL: ",n," $CAD"]})]})})),Fe=Object(F.a)([function(e){return e.user}],(function(e){return e.currentUser})),Be=["title","titleId"];function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Je(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ze(e,t){var n=e.title,a=e.titleId,r=Je(e,Be);return c.createElement("svg",We({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),be||(be=c.createElement("g",null)),me||(me=c.createElement("g",null)),pe||(pe=c.createElement("g",null)),he||(he=c.createElement("g",null)),Oe||(Oe=c.createElement("g",null)),fe||(fe=c.createElement("g",null)),ve||(ve=c.createElement("g",null)),ge||(ge=c.createElement("g",null)),xe||(xe=c.createElement("g",null)),ye||(ye=c.createElement("g",null)),Ne||(Ne=c.createElement("g",null)),we||(we=c.createElement("g",null)),Ee||(Ee=c.createElement("g",null)),Ce||(Ce=c.createElement("g",null)),Ie||(Ie=c.createElement("g",null)))}var $e,Ke,Qe,Xe=c.forwardRef(Ze),Ye=(n.p,n(68),Object(F.b)({itemCount:qe})),et=Object(l.b)(Ye,(function(e){return{toggleCartHidden:function(){return e(te())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(W.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(W.jsx)(Xe,{className:"shopping-icon"}),Object(W.jsx)("span",{className:"item-count",children:n})]})})),tt=["title","titleId"];function nt(){return(nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ct(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function at(e,t){var n=e.title,a=e.titleId,r=ct(e,tt);return c.createElement("svg",nt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"40px",height:"40px",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,$e||($e=c.createElement("path",{fill:"#e1ebf2",d:"M36.62,28.775c-0.879,1.901-1.299,2.751-2.427,4.428c-1.576,2.346-3.803,5.273-6.555,5.294 c-2.446,0.019-3.131-1.022-6.451-0.997c-3.32,0.017-3.96,1.026-6.41,0.999c-2.75-0.023-4.857-2.661-6.434-5 c-4.329-6.444-4.794-14.39-2.151-18.361c1.928-2.904,4.981-4.61,7.846-4.61c2.919,0,4.754,1.91,7.166,1.91 c2.344,0,3.769-1.913,7.145-1.913c2.553,0,5.253,1.36,7.181,3.704C29.462,17.479,30.595,26.546,36.62,28.775z"})),Ke||(Ke=c.createElement("path",{fill:"#788b9c",d:"M14.873,38.999l-0.101,0c-2.946-0.024-5.113-2.653-6.844-5.221 C3.72,27.514,2.815,19.309,5.776,14.86c1.979-2.981,5.145-4.833,8.262-4.833c1.631,0,2.958,0.565,4.129,1.063 c1.023,0.436,1.99,0.847,3.037,0.847c0.958,0,1.761-0.362,2.69-0.782c1.174-0.53,2.506-1.131,4.455-1.131 c2.736,0,5.565,1.453,7.568,3.887l0.387,0.471l-0.538,0.288c-2.551,1.366-3.951,3.969-3.745,6.963 c0.21,3.06,2.083,5.679,4.772,6.673l0.507,0.188l-0.227,0.491c-0.91,1.967-1.329,2.806-2.466,4.498 c-1.824,2.715-4.078,5.493-6.966,5.515c-0.001,0-0.001,0-0.002,0c-1.232,0-2.01-0.225-2.835-0.462 C23.894,38.271,22.951,38,21.309,38l-0.117,0c-1.695,0.008-2.644,0.28-3.56,0.543C16.813,38.777,16.039,38.999,14.873,38.999z M14.038,11.027c-2.786,0-5.633,1.681-7.429,4.386c-2.701,4.058-1.776,11.962,2.149,17.806c1.585,2.352,3.541,4.759,6.023,4.779 l0.092,0.5v-0.5c1.025,0,1.701-0.193,2.483-0.417c0.936-0.269,1.997-0.572,3.829-0.582l0.124,0c1.783,0,2.841,0.305,3.773,0.574 c0.788,0.228,1.469,0.424,2.492,0.424c2.484-0.019,4.526-2.575,6.204-5.073c1.001-1.49,1.428-2.299,2.168-3.886 c-2.787-1.256-4.698-4.078-4.923-7.337c-0.219-3.182,1.167-5.979,3.733-7.601c-1.779-1.936-4.137-3.077-6.408-3.077 c-1.733,0-2.908,0.53-4.043,1.042c-0.992,0.448-1.929,0.871-3.102,0.871c-1.25,0-2.358-0.471-3.428-0.927 C16.639,11.527,15.465,11.027,14.038,11.027z"})),Qe||(Qe=c.createElement("g",null,c.createElement("path",{fill:"#e1ebf2",d:"M26.339,7.491c1.315-1.634,2.456-3.641,2.093-5.991c-2.144,0.143-4.796,1.169-6.261,2.886 c-1.328,1.565-1.98,3.865-1.551,6.114C22.96,10.571,24.933,9.245,26.339,7.491z"}),c.createElement("path",{fill:"#788b9c",d:"M20.799,11.003C20.799,11.003,20.799,11.003,20.799,11.003l-0.596-0.015l-0.075-0.394 c-0.439-2.304,0.197-4.807,1.661-6.531c1.638-1.919,4.5-2.92,6.609-3.062l0.458-0.03l0.07,0.453 c0.424,2.746-1.051,4.957-2.197,6.381C25.075,9.867,22.969,11.003,20.799,11.003z M27.989,2.046 c-1.794,0.231-4.118,1.118-5.438,2.665c-1.187,1.397-1.747,3.39-1.505,5.286c1.775-0.084,3.507-1.078,4.903-2.819 C27.44,5.326,28.096,3.682,27.989,2.046z"}))))}var rt=c.forwardRef(at),it=(n.p,n(69),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,r=t.quantity;return Object(W.jsxs)("div",{className:"cart-item",children:[Object(W.jsx)("img",{src:n,alt:"item"}),Object(W.jsxs)("div",{className:"item-details",children:[Object(W.jsx)("span",{className:"name",children:a}),Object(W.jsxs)("span",{className:"price",children:[r," x $",c]})]})]})}),st=(n(70),Object(F.b)({cartItems:De})),lt=Object(V.g)(Object(l.b)(st)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(W.jsxs)("div",{className:"cart-dropdown",children:[Object(W.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(W.jsx)(it,{item:e},e.id)})):Object(W.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(W.jsx)(ee,{onClick:function(){n.push("/checkout"),c(te())},children:"GO TO CHECKOUT"})]})}))),ot=(n(71),Object(l.b)((function(e){return Object(F.b)({currentUser:Fe,hidden:Ge})}))((function(e){var t=e.currentUser,n=e.hidden;return Object(W.jsxs)("div",{className:"header",children:[Object(W.jsx)(s.b,{className:"logo-container",to:"/puzzle/",children:Object(W.jsx)(rt,{className:"logo"})}),Object(W.jsxs)("div",{className:"options",children:[Object(W.jsx)(s.b,{className:"option",to:"/puzzle/shop/",children:"SHOP"}),Object(W.jsx)(s.b,{className:"option",to:"/puzzle/shop/",children:"CONTACT"}),t?Object(W.jsx)("div",{className:"option",onClick:function(){return Me.signOut()},children:"SIGN OUT"}):Object(W.jsx)(s.b,{className:"option",to:"/puzzle/signin",children:"SIGN IN"}),Object(W.jsx)(et,{})]}),n?null:Object(W.jsx)(lt,{})]})}))),ut=function(e){Object(H.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.setCurrentUser;this.unsubscribeFromAuth=Me.onAuthStateChanged(function(){var n=Object(D.a)(R.a.mark((function n(c){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c){n.next=5;break}return n.next=3,ke(c);case 3:n.sent.onSnapshot((function(n){t(Object(f.a)({id:n.id},n.data())),console.log(e.state)}));case 5:t(c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(W.jsxs)("div",{children:[Object(W.jsx)(ot,{}),Object(W.jsxs)(V.d,{children:[Object(W.jsx)(V.b,{exact:!0,path:"/puzzle",component:X}),Object(W.jsx)(V.b,{path:"/puzzle/shop/",component:le}),Object(W.jsx)(V.b,{exact:!0,path:"/checkout",component:Ve}),Object(W.jsx)(V.b,{exact:!0,path:"/puzzle/signIn/",render:function(){return e.props.currentUser?Object(W.jsx)(V.a,{to:"/puzzle"}):Object(W.jsx)(Pe,{})}})]})]})}}]),n}(a.a.Component),dt=Object(F.b)({currentUser:Fe}),jt=Object(l.b)(dt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:v,payload:e}}(t))}}}))(ut);i.a.render(Object(W.jsx)(l.a,{store:A,children:Object(W.jsx)(s.a,{children:Object(W.jsx)(o.a,{persistor:P,children:Object(W.jsx)(jt,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f9ed6899.chunk.js.map