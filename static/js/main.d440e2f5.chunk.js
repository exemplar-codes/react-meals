(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,,,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(13),c=n.n(a),r=(n(28),n(2)),i=n(1),s=n.n(i),o=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),l=s.a.createContext({showCart:function(){},hideCart:function(){}}),u=n(7),d=n.n(u),j=n(10),m=n.n(j),b=n(0);function x(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})}function O(e){return Object(b.jsx)("div",{className:m.a.modal,children:e.children})}var h=document.getElementById("overlays");var p=function(e){return Object(b.jsxs)(b.Fragment,{children:[d.a.createPortal(Object(b.jsx)(x,{onClose:e.onClose}),h),d.a.createPortal(Object(b.jsx)(O,{children:e.children}),h)]})},f=n(4),_=n.n(f),v=n(5),C=n.n(v),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:C.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:C.a.summary,children:[Object(b.jsx)("span",{className:C.a.price,children:t}),Object(b.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:C.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},y=n(6),g=n.n(y);var w=function(e){return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(b.jsxs)("div",{className:g.a.control,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name"})]}),Object(b.jsxs)("div",{className:g.a.control,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street"})]}),Object(b.jsxs)("div",{className:g.a.control,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"postak"})]}),Object(b.jsxs)("div",{className:g.a.control,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city"})]}),Object(b.jsx)("button",{onClick:e.onCancel,type:"button",children:"Cancel"}),"\xa0",Object(b.jsx)("button",{type:"submit",children:"Confirm"})]})};var A=function(){var e=Object(i.useContext)(l),t=Object(i.useContext)(o),n=function(e){return t.removeItem(e)},a=function(e){return t.addItem(e)},c=Object(b.jsx)("ul",{className:_.a["cart-items"],children:t.items.map((function(e){return Object(b.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onRemove:n.bind(null,e.id),onAdd:a.bind(null,e)},e.id)}))}),s="$".concat(t.totalAmount.toFixed(2)),u=t.items.length>0,d=Object(i.useState)(!1),j=Object(r.a)(d,2),m=j[0],x=j[1];return Object(b.jsxs)(p,{onClose:e.hideCart,children:[c,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:s})]}),m?Object(b.jsx)(w,{onCancel:e.hideCart}):Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button--alt"],onClick:e.hideCart,children:"Close"}),u&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){x(!0)},children:"Order"})]})]})},I=n.p+"static/media/meals.2971f633.jpg",M=n(14),k=n.n(M),F=n(8),S=n.n(F),D=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})};var E=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(l),u=Object(i.useContext)(o).items,d=u.reduce((function(e,t){return e+t.amount}),0),j="".concat(S.a.button," ").concat(a?S.a.bump:"");return Object(i.useEffect)((function(){if(0!==u.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){return clearTimeout(e)}}}),[u]),Object(b.jsxs)("button",{className:j,onClick:s.showCart,children:[Object(b.jsx)("span",{children:Object(b.jsx)(D,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:S.a.badge,children:d})]})};var H=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:k.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(E,{})]}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:I,alt:"A table full of delicious food!"})})]})},R=n(3),B=n(15),P=n(11),T=n.n(P),Y=n(16),z=n.n(Y);var L=function(e){return Object(b.jsx)("div",{className:z.a.card,children:e.children})},U=n(9),V=n.n(U),J=n(17),Q=n.n(J),q=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:Q.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(R.a)(Object(R.a)({id:e.input.id},e.input),{},{ref:t}))]})})),X=n(18),Z=n.n(X);var $=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(b.jsxs)("form",{className:Z.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,r=+n;0===n.trim().length||n<1||r>5?c(!1):(e.onAddToCart(r),console.log(n),a||c(!0))},children:[Object(b.jsx)(q,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!a&&Object(b.jsx)("p",{children:"Please entered a valid amount (1-5)."})]})};var K=function(e){var t=Object(i.useContext)(o),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:V.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:V.a.description,children:e.description}),Object(b.jsx)("div",{className:V.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)($,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},W=n(19),G=n.n(W);var ee=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!0),s=Object(r.a)(c,2),o=s[0],l=s[1],u=Object(i.useState)(null),d=Object(r.a)(u,2),j=d[0],m=d[1],x=function(){var e=Object(B.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,fetch("https://react-http-88257-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Empty response");case 7:return e.next=9,t.json();case 9:n=e.sent,a(Object.entries(n).map((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(R.a)(Object(R.a)({},a),{},{id:n})}))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),m(e.t0);case 16:return e.prev=16,l(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){x()}),[]);var O=n.map((function(e){return Object(b.jsx)(K,{id:e.id,name:e.name,price:e.price,description:e.description},e.id)}));return Object(b.jsxs)("section",{className:G.a.meals,children:[!(o||j)&&Object(b.jsx)(L,{children:Object(b.jsx)("ul",{children:O})}),o&&Object(b.jsx)("p",{children:"Loading..."}),j&&Object(b.jsx)("p",{children:"".concat(j)})]})},te=n(20),ne=n.n(te);var ae=function(){return Object(b.jsxs)("section",{className:ne.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})};var ce=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ae,{}),Object(b.jsx)(ee,{})]})},re={items:[],totalAmount:0};function ie(e,t){switch(t.type){case"ADD":var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id}));return-1===c?n=e.items.concat(t.item):(e.items[c].amount+=t.item.amount,n=e.items),{items:n,totalAmount:a};case"REMOVE":var r=e.items.findIndex((function(e){return e.id===t.id})),i=e.totalAmount-e.items[r].price;return e.items[r].amount>1?e.items[r].amount--:e.items.splice(r,1),{items:e.items,totalAmount:i};default:return re}}var se=function(e){var t=Object(i.useReducer)(ie,re),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){return c({type:"ADD",item:e})},removeItem:function(e){return c({type:"REMOVE",id:e})}};return Object(b.jsx)(o.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)(l.Provider,{value:{showCart:function(){return a(!0)},hideCart:function(){return a(!1)}},children:Object(b.jsxs)(se,{children:[n&&Object(b.jsx)(A,{}),Object(b.jsx)(H,{}),Object(b.jsx)("main",{children:Object(b.jsx)(ce,{})})]})})};c.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(oe,{}))}],[[31,1,2]]]);
//# sourceMappingURL=main.d440e2f5.chunk.js.map