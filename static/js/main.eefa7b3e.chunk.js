(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],[,,,,,,function(e,t,a){e.exports={container:"Teasers_container__z1TGA",Teaser:"Teasers_Teaser__27mb6",TeaserImg:"Teasers_TeaserImg__29YZF",TeaserInfo:"Teasers_TeaserInfo__25QXZ"}},function(e,t,a){e.exports={header:"Header_header__1CGKd",logo:"Header_logo__ffv_d",info:"Header_info__3BNgf",container:"Header_container__3CIGk",tel:"Header_tel__2O0oE",cart:"Header_cart__2BAWb",cartInfo:"Header_cartInfo__3XpH5",cartImg:"Header_cartImg__NUXeC",total:"Header_total__2mbLL"}},function(e,t,a){e.exports={item:"item_item__3WROG",itemImg:"item_itemImg__2tK2H",itemName:"item_itemName__N_1EB",venderCode:"item_venderCode__xn_Iu",itemPrice:"item_itemPrice__2Beve",itemButton:"item_itemButton__THZzi",incart:"item_incart__3KmDl",cart:"item_cart__2WT_Y"}},function(e,t,a){e.exports={app:"App_app__1kX79",intro:"App_intro__32qgl",info:"App_info__3tKmE",infoImg:"App_infoImg__28ebW",infoText:"App_infoText__3vsHN"}},function(e,t,a){e.exports={footer:"Footer_footer__3kRR3",container:"Footer_container__Yet5m"}},function(e,t,a){e.exports={row:"content_row__26Cv7",container:"content_container__rJ_QP",basket:"content_basket__23yVA",basketElements:"content_basketElements__3K550",total:"content_total__21gcc"}},function(e,t,a){e.exports={slider:"Slider_slider__2eNvc",sliderBlock:"Slider_sliderBlock__2G2gy"}},,,function(e,t,a){e.exports={item:"BasketItem_item__1ne9A"}},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=(a(21),a(9)),s=a.n(l),o=a(1),m=a(2),u=a(4),d=a(3),p=a(5),_=a(7),h=a.n(_),E=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.header},r.a.createElement("div",{className:h.a.logo},r.a.createElement("h1",null,"BledHuid")),r.a.createElement("div",{className:h.a.info},"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d ",r.a.createElement("br",null),"\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438"),r.a.createElement("div",{className:h.a.container},r.a.createElement("div",{className:h.a.tel},r.a.createElement("img",{src:"https://zurmarket.ru/bitrix/templates/aspro_next/images/svg/Phone_black.svg",alt:""}),"+7 (843) 240-65-10"),r.a.createElement("div",{className:h.a.cart},r.a.createElement("div",{className:h.a.cartImg},r.a.createElement("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png",alt:""})),r.a.createElement("div",{className:h.a.cartInfo},r.a.createElement("p",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement("p",{className:h.a.total},"12 980 \u0420")))))}}]),t}(n.Component),b=a(11),f=a.n(b),v=a(8),g=a.n(v),k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"addProductOnCart",value:function(){var e=this.props.id,t=this.props.name,a=this.props.price,n=this.props.icon,r=this.props.count;this.props.addProductOnCart(e,t,a,n,r)}},{key:"render",value:function(){return r.a.createElement("div",{className:g.a.item},r.a.createElement("div",{className:g.a.itemImg},r.a.createElement("img",{src:this.props.icon,alt:""}),r.a.createElement("br",null)),r.a.createElement("div",{className:g.a.itemName},r.a.createElement("a",null,r.a.createElement("h3",null,this.props.name))),r.a.createElement("div",{className:g.a.venderCode},"\u0410\u0440\u0442\u0438\u043a\u0443\u043b: ",this.props.id),r.a.createElement("div",{className:g.a.itemPrice},r.a.createElement("h4",null,this.props.price.toLocaleString("ru")," \u20bd/\u0448\u0442 ")),r.a.createElement("div",{className:g.a.itemButton},r.a.createElement("div",{className:g.a.incart},r.a.createElement("button",{className:g.a.test,onClick:this.addProductOnCart.bind(this)},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")),r.a.createElement("div",{className:g.a.cart},r.a.createElement("button",{href:"/23"},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435"))))}}]),t}(n.Component),N=a(15),j=a.n(N),O=(n.Component,function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={product:[{id:1,name:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Xiaomi Mi9T 6/64Gb Black",price:19980,icon:"https://zurmarket.ru/upload/resize_cache/iblock/7d7/170_170_1/25658.750x0.jpg"},{id:2,name:"\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 Apple AirPods Pro",price:20480,icon:"https://zurmarket.ru/upload/resize_cache/iblock/548/170_170_1/orig1.jpg"},{id:3,name:"\u0424\u0438\u0442\u043d\u0435\u0441-\u0431\u0440\u0430\u0441\u043b\u0435\u0442 Xiaomi Mi Band 4",price:2049,icon:"https://zurmarket.ru/upload/resize_cache/iblock/f47/170_170_1/orig.jpg"},{id:4,name:"\u0411\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 Apple AirPods 2 (\u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0430\u044f \u0437\u0430\u0440\u044f\u0434\u043a\u0430 \u0447\u0435\u0445\u043b\u0430)",price:12980,icon:"https://zurmarket.ru/upload/resize_cache/iblock/cba/170_170_1/vtoroy1.jpg"},{id:5,name:"\u0411\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 Apple AirPods 2 (\u0431\u0435\u0437 \u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u0440\u044f\u0434\u043a\u0438 \u0447\u0435\u0445\u043b\u0430)",price:10460,icon:"https://zurmarket.ru/upload/resize_cache/iblock/e30/170_170_1/tretiy.jpg"},{id:6,name:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung Galaxy S10e 6/128Gb \u0446\u0438\u0442\u0440\u0443\u0441",price:35890,icon:"https://zurmarket.ru/upload/resize_cache/iblock/7c4/170_170_1/s10_e_yellow.jpg"},{id:7,name:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung Galaxy S10e 6/128Gb \u0430\u043a\u0432\u0430\u043c\u0430\u0440\u0438\u043d",price:35890,icon:"https://zurmarket.ru/upload/resize_cache/iblock/f9d/170_170_1/60yn0kx4u5d18lq_db5b2af8.jpg"},{id:8,name:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung Galaxy S10e 6/128Gb \u043f\u0435\u0440\u043b\u0430\u043c\u0443\u0442\u0440",price:35890,icon:"https://zurmarket.ru/upload/resize_cache/iblock/bd0/170_170_1/f.png"},{id:9,name:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung Galaxy S10e 6/128Gb \u043f\u0435\u0440\u043b\u0430\u043c\u0443\u0442\u0440",price:35490,icon:"https://zurmarket.ru/upload/resize_cache/iblock/e95/170_170_1/aaaaaaaa.jpeg"},{id:10,name:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Xiaomi Redmi Note 7 4/64gb Black (\u0447\u0435\u0440\u043d\u044b\u0439)",price:19990,icon:"https://zurmarket.ru/upload/resize_cache/iblock/b01/170_170_1/y.jpg"}],cart:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"rerender",value:function(){this.setState({state:this.state})}},{key:"addProductOnCart",value:function(e,t,a,n){for(var r=!1,c=0;c<this.state.cart.length;c++)this.state.cart[c].id==e&&(r=!0,this.state.cart[c].count+=1,this.rerender());1!=r&&this.setState({cart:this.state.cart.concat({id:e,name:t,price:a,icon:n,count:1})})}},{key:"dellProductOnCart",value:function(e,t){this.setState({cart:this.state.cart.filter((function(t){return t.name!=e}))})}},{key:"countIncr",value:function(e){for(var t=0;t<this.state.cart.length;t++)this.state.cart[t].id==e&&(this.state.cart[t].count+=1,this.rerender())}},{key:"countDecr",value:function(e){for(var t=0;t<this.state.cart.length;t++)this.state.cart[t].id==e&&this.state.cart[t].count>1&&(this.state.cart[t].count-=1,this.rerender())}},{key:"render",value:function(){var e=this,t=0,a=this.state.cart;return function(){for(var e=0;e<a.length;e++)t+=a[e].price*a[e].count}(),r.a.createElement("div",null,r.a.createElement("div",{className:f.a.row},r.a.createElement("h3",null,"BLEDHUID - \u043b\u044e\u0431\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u0434\u0430\u0436\u0435 \u0431\u043e\u043b\u044c\u0448\u0435")),r.a.createElement("div",{className:f.a.container},this.state.product.map((function(a){return r.a.createElement(k,{id:a.id,name:a.name,icon:a.icon,price:a.price,state:e.state,total:t,addProductOnCart:e.addProductOnCart.bind(e)})}))))}}]),t}(n.Component)),y=a(12),z=a.n(y),I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:z.a.slider},r.a.createElement("div",{className:z.a.sliderBlock},r.a.createElement("img",{src:"https://img5.goodfon.ru/original/2000x1333/5/ee/andrew-neel-noutbuk-telefon-iphone-kruzhka-ruchka-bloknot-st.jpg",alt:""})))}}]),t}(n.Component),T=a(6),x=a.n(T),C=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.container},r.a.createElement("div",{className:x.a.Teaser},r.a.createElement("div",{className:x.a.TeaserImg},r.a.createElement("img",{src:"https://zurmarket.ru/upload/iblock/1ea/a970a7b4269ae431dd116d89f1e81fdb.png",alt:""})),r.a.createElement("div",{className:x.a.TeaserInfo},r.a.createElement("p",null,"\u0410\u043a\u0446\u0438\u0438"))),r.a.createElement("div",{className:x.a.Teaser},r.a.createElement("div",{className:x.a.TeaserImg},r.a.createElement("img",{src:"https://zurmarket.ru/upload/iblock/78e/5919a535332800567dd2816811239c25.png",alt:""})),r.a.createElement("p",null,"\u0412\u0435\u0441\u044c \u0442\u043e\u0432\u0430\u0440 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d")),r.a.createElement("div",{className:x.a.Teaser},r.a.createElement("div",{className:x.a.TeaserImg},r.a.createElement("img",{src:"https://zurmarket.ru/upload/iblock/728/e5df9380338e4e6f2d047ed55918af4b.png",alt:""})),r.a.createElement("p",null,"\u0414\u043e 30 \u0434\u043d\u0435\u0439 \u043e\u0431\u043c\u0435\u043d \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0442\u043e\u0432\u0430\u0440\u0430")),r.a.createElement("div",{className:x.a.Teaser},r.a.createElement("div",{className:x.a.TeaserImg},r.a.createElement("img",{src:"https://zurmarket.ru/upload/iblock/b6f/15cb3aab3d8da3702fe6130bb00d0cbe.png",alt:""})),r.a.createElement("p",null,"\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u0438 \u043a\u0440\u0435\u0434\u0438\u0442")))}}]),t}(n.Component),B=a(10),A=a.n(B),P=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:A.a.footer},r.a.createElement("div",{className:A.a.container},r.a.createElement("h3",null,"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"),r.a.createElement("p",null,"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),r.a.createElement("p",null,"\u0410\u043a\u0446\u0438\u0438"),r.a.createElement("p",null,"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438"),r.a.createElement("p",null,"\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b"),r.a.createElement("p",null,"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430")),r.a.createElement("div",{className:A.a.container},r.a.createElement("h3",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),r.a.createElement("p",null,"\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430"),r.a.createElement("p",null,"\u0421\u0435\u0440\u0432\u0438\u0441")),r.a.createElement("div",{className:A.a.container},r.a.createElement("div",null,r.a.createElement("h3",null,"\u0411\u0443\u0434\u044c\u0442\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0432 \u043a\u0443\u0440\u0441\u0435!"),r.a.createElement("input",{type:"text"}),r.a.createElement("button",null)),r.a.createElement("div",null,r.a.createElement("h3",null,"\u041e\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0441\u0432\u044f\u0437\u0438"))),r.a.createElement("div",{className:A.a.container},r.a.createElement("h3",null,"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"),r.a.createElement("p",null,"+7 (843) 240-65-10")))}}]),t}(n.Component),H=function(e){return r.a.createElement("div",{className:s.a.app},r.a.createElement("div",{className:s.a.intro},r.a.createElement(E,null),r.a.createElement(I,null)),r.a.createElement(C,null),r.a.createElement(O,{message:e.message}),r.a.createElement("div",{className:s.a.info},r.a.createElement("div",{className:s.a.infoImg},r.a.createElement("img",{src:"https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg",alt:""})),r.a.createElement("div",{className:s.a.infoText},r.a.createElement("h2",null,"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),r.a.createElement("p",null,"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u0417\u0443\u0440\u043c\u0430\u0440\u043a\u0435\u0442, \u0440\u0430\u0431\u043e\u0442\u0430\u044f \u0441 2011 \u0433\u043e\u0434\u0430, \u0437\u0430\u0441\u043b\u0443\u0436\u0438\u043b \u0434\u043e\u0432\u0435\u0440\u0438\u0435 \u0442\u044b\u0441\u044f\u0447 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u043a \u043d\u0430\u043c, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043c\u044b \u043b\u0438\u0434\u0435\u0440\u044b \u043f\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432, \u0433\u0430\u0434\u0436\u0435\u0442\u043e\u0432 \u0438 \u0431\u044b\u0442\u043e\u0432\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438. \u0417\u0443\u0440\u043c\u0430\u0440\u043a\u0435\u0442 - \u044d\u0442\u043e \u0438\u043c\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0437\u043d\u0430\u044e\u0442 \u0438 \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442 \u0435\u043c\u0443."),r.a.createElement("button",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.eefa7b3e.chunk.js.map