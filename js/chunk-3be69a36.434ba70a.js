(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be69a36"],{"0745":function(t,e,a){t.exports=a.p+"img/estado_vacio.2893b194.svg"},"08dc":function(t,e,a){t.exports=a.p+"img/dinero.207c07ef.png"},"148e":function(t,e,a){t.exports=a.p+"img/menu_estado_vacio.f6ff0435.svg"},"19b8":function(t,e,a){},"34a0":function(t,e,a){"use strict";var o=a("20aa"),n=a("0dcc"),r=function(){var t=o["a"].BASE_URL+"/categorias-productos";return n["a"].get(t)};e["a"]={getCategorias:r}},"3bf4":function(t,e,a){"use strict";a("5d3d")},5092:function(t,e,a){"use strict";var o=a("20aa"),n=a("0dcc"),r=function(t){var e=o["a"].BASE_URL+"/menus/id-cliente/"+t;return n["a"].get(e)},i=function(){var t=o["a"].BASE_URL+"/menus/disponibles";return n["a"].get(t)},c=function(){var t=o["a"].BASE_URL+"/menus/semanales";return n["a"].get(t)},s=function(t){var e=o["a"].BASE_URL+"/menus";return n["a"].post(e,t)},l=function(t){var e=o["a"].BASE_URL+"/menus";return n["a"].put(e,t)};e["a"]={getByCliente:r,getMenusDisponibles:i,getMenusSemanales:c,crearMenu:s,updateMenu:l}},5246:function(t,e,a){},5981:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("wrapper",{attrs:{titulo:"Productos"}},[t.listaAlumnos.length>0?[o("v-row",{attrs:{justify:"space-around"}},[t.$usuario.esPadreDeFamilia?o("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[o("v-menu",{attrs:{"offset-y":"",rounded:"b-xl"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({staticStyle:{"border-width":"5px"},attrs:{text:"",outlined:"",rounded:""}},"v-btn",n,!1),a),[t._v(" "+t._s(t.alumnoSeleccionado.nombreCompleto)),o("v-icon",[t._v("mdi-menu-down")])],1)]}}],null,!1,1880996152)},[o("v-list",t._l(t.listaAlumnos,(function(e,a){return o("v-list-item",{key:a,attrs:{link:""},on:{click:function(a){return t.seleccionarHijo(e)}}},[o("v-list-item-title",[t._v(t._s(e.nombreCompleto))])],1)})),1)],1)],1):t._e(),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("panel-opciones",{attrs:{fecha:t.fecha,saldo:t.saldoCafeteriaAlumnoSeleccionado},on:{"cambiar-fecha":function(e){t.fecha=e},"seleccionar-hijo":t.seleccionarHijo}})],1)],1),o("v-row",[t.menusFiltrados.length>0?o("v-col",{attrs:{cols:"12"}},[o("v-fade-transition",{attrs:{mode:"out-in","hide-on-leave":""}},[o("carrusel",{key:t.alumnoSeleccionado.id,attrs:{"per-page-escritorio":"2"}},t._l(t.menusFiltrados,(function(e,a){return o("carrusel-item",{key:a},[o("tarjeta-menu",{attrs:{menu:e,"opcion-agregar":!t.estaMenuEnCarrito(e.id),cargando:t.alumnoSeleccionado.cargandoSaldo,"mostrar-acciones":""},on:{seleccionar:function(a){return t.seleccionarMenu(t.alumnoSeleccionado,t.fecha,e)}}})],1)})),1)],1)],1):o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[o("img",{style:t.$vuetify.breakpoint.smAndDown?"width:100%":"width:50%",attrs:{src:a("148e")}})]),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("h2",{staticClass:"text--disabled",staticStyle:{"font-family":"Nunito"}},[t._v("No hay menús disponibles para este día")])])],1)],1)],1),o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("carrusel",t._l(t.categorias,(function(e,a){return o("carrusel-item",{key:a,attrs:{size:"41%"}},[o("categoria",{attrs:{categoria:e,"esta-seleccionada":t.categoriaSeleccionada&&e.id===t.categoriaSeleccionada},on:{seleccionarCategoria:function(a){return t.seleccionarCategoria(e)}}})],1)})),1)],1),t.productosFiltrados&&t.productosFiltrados.length>0?t._l(t.productosFiltrados,(function(e,a){return o("v-col",{key:a,attrs:{cols:"12",md:"6"}},[o("producto",{attrs:{producto:e,"opcion-agregar":"","mostrar-acciones":"","productos-bloqueados-alumno":t.alumnoSeleccionado.productosBloqueados,"producto-agregado":t.estaProductoEnCarrito(e.id)},on:{seleccionar:function(a){return t.seleccionarProducto(t.alumnoSeleccionado,t.fecha,e)}}})],1)})):o("v-row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[o("img",{style:t.$vuetify.breakpoint.smAndDown?"width:100%":"width:50%",attrs:{src:a("7931")}})]),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("h2",{staticClass:"text--disabled",staticStyle:{"font-family":"Nunito"}},[t._v("No hay productos disponibles")])])],1)],2)]:o("v-row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[o("img",{style:t.$vuetify.breakpoint.smAndDown?"width:100%":"width:50%",attrs:{src:a("148e")}})]),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("h2",{staticClass:"text--disabled",staticStyle:{"font-family":"Nunito"}},[t._v("No tiene alumnos agregados")])]),o("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[o("v-btn",{attrs:{rounded:"",to:{name:"Alumnos"}}},[o("span",{staticClass:"primary--text",staticStyle:{"font-family":"Nunito"}},[t._v("Ir a alumnos")])])],1)],1),o("v-snackbar",{attrs:{color:"success",bottom:"",app:""},model:{value:t.mensajeProductoAgregado,callback:function(e){t.mensajeProductoAgregado=e},expression:"mensajeProductoAgregado"}},[t._v("Producto agregado")])],2)},n=[],r=a("5530"),i=a("b85c"),c=a("1da1"),s=(a("96cf"),a("d3b7"),a("4de4"),a("c740"),a("e9c4"),a("b078")),l=a("5092"),u=a("4bdc"),d=a("cc46"),f=a("f28e"),m=a("8b83"),p=a("e822"),g=a("20aa"),v=a("34a0"),h=a("8eab"),b=a("9d42"),y=a("e637"),S=a("6f35"),x=a("c26f"),_=a("334e"),C=a("901c"),A={name:"VistaProductosParaAlumno",components:{PanelOpciones:C["a"],CarruselItem:d["a"],Carrusel:u["a"],TarjetaMenu:s["a"],Producto:m["a"],Categoria:p["a"]},data:function(){return{calendario:!1,fecha:null,dialogSeleccionarAlumno:!1,menus:[],ordenes:[],listaAlumnos:[],alumnoSeleccionado:{},mensajeProductoAgregado:!1,menusFiltrados:[],productos:[],categorias:[],categoriaSeleccionada:null,productosFiltrados:[]}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,o,n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listaAlumnos=_["a"].getListaAlumnos(t.$usuario),t.alumnoSeleccionado=t.listaAlumnos.length?t.listaAlumnos[0]:{},t.$loader=!0,e.prev=3,e.next=6,l["a"].getMenusSemanales();case 6:t.menus=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),t.menus=[];case 12:return e.prev=12,a=x["a"].getPromiseOrdenesById(t.$usuario),e.next=16,a(t.$usuario.id);case 16:t.ordenes=e.sent,e.next=22;break;case 19:e.prev=19,e.t1=e["catch"](12),console.log(e.t1);case 22:return e.prev=22,e.next=25,h["a"].getProductos();case 25:t.productos=e.sent,e.next=31;break;case 28:e.prev=28,e.t2=e["catch"](22),t.productos=[];case 31:return e.prev=31,e.next=34,v["a"].getCategorias();case 34:t.categorias=e.sent,e.next=40;break;case 37:e.prev=37,e.t3=e["catch"](31),t.categorias=[];case 40:if(t.categoriaSeleccionada||(t.productosFiltrados=t.productos),t.fecha=b["a"].getFechaString(),t.$loader=!1,o=t,t.$usuario.esPadreDeFamilia){n=Object(i["a"])(t.$usuario.hijos);try{for(c=function(){var t=r.value;o.$set(t.alumno,"cargandoSaldo",!0),y["a"].getSaldoPorCafeteria(o.$usuario.idCliente,t.alumno.id).then((function(e){o.$set(t.alumno.cafeteria,"saldoAlumno",o.$getSaldoDeAlumnoParaCafeteria(t.alumno.cafeteria.id,e))})).catch((function(){})).finally((function(){return o.$set(t.alumno,"cargandoSaldo",!1)}))},n.s();!(r=n.n()).done;)c()}catch(s){n.e(s)}finally{n.f()}}else t.$usuario.esAlumno&&(o.$set(o.$usuario,"cargandoSaldo",!0),y["a"].getSaldoPorCafeteria(o.$usuario.idCliente,o.$usuario.id).then((function(t){o.$set(o.$usuario.cafeteria,"saldoAlumno",o.$getSaldoDeAlumnoParaCafeteria(o.$usuario.cafeteria.id,t))})).catch((function(){})).finally((function(){return o.$set(o.$usuario,"cargandoSaldo",!1)})));case 45:case"end":return e.stop()}}),e,null,[[3,9],[12,19],[22,28],[31,37]])})))()},watch:{fecha:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$loader=!0;try{e.filtrarMenu(t)}catch(o){console.log(o)}e.$loader=!1;case 3:case"end":return a.stop()}}),a)})))()}},computed:{saldoCafeteriaAlumnoSeleccionado:function(){return this.alumnoSeleccionado.cafeteria.saldoAlumno-S["a"].getCostoTotalOrdenes(this.alumnoSeleccionado,this.ordenes.filter((function(t){return"CREADA"===t.estatus.titulo})))-S["a"].getCostoTotalOrdenes(this.alumnoSeleccionado,this.$ordenesNuevas)}},methods:{seleccionarMenu:function(t,e,a){var o=this;if($(this,a,t,e))this.$showAlerta("600","warning","mdi-alert-circle","Sólo se puede agregar un menú por día",!1);else{var n,c=Object(i["a"])(a.detalles);try{var s=function(){var i=n.value;S["a"].esSaldoSuficiente(o.$ordenesNuevas,t,i.producto,i.cantidad)?t.productosBloqueados.some((function(t){return i.producto.id===t.producto.id}))?o.$showAlerta("600","warning","mdi-alert-circle","El producto "+i.producto.nombre+" no se ha agregado a la orden porque se encuentra bloqueado para "+t.nombre,!1):w(o,t,e,Object(r["a"])(Object(r["a"])({},i.producto),{},{menu:a}),i.cantidad):o.$showAlerta("600","warning","mdi-alert-circle","El alumno no cuenta con saldo suficiente",!1)};for(c.s();!(n=c.n()).done;)s()}catch(l){c.e(l)}finally{c.f()}}},seleccionarHijo:function(t){this.alumnoSeleccionado=t,this.filtrarMenu(this.fecha)},filtrarMenu:function(t){if(t&&this.alumnoSeleccionado.id){var e=this;this.menusFiltrados=e.menus.filter((function(a){return(a.esSemanal||t===a.fecha)&&(!e.alumnoSeleccionado.cafeteria||e.alumnoSeleccionado.cafeteria.id===a.cafeteria.id)&&e.alumnoSeleccionado.seccion.id===a.seccionEscolar.id}))}else this.menusFiltrados=[]},estaMenuEnCarrito:function(t){var e=this;return this.$ordenesNuevas.some((function(a){return e.fecha===a.fecha&&e.alumnoSeleccionado.id===a.alumno.id&&a.productos.some((function(e){return e.menu&&t===e.menu.id}))}))},seleccionarCategoria:function(t){var e=this;e.categoriaSeleccionada=t.id,e.categoriaSeleccionada?e.productosFiltrados=e.productos.filter((function(t){var a=t.categoria.id;return a==e.categoriaSeleccionada})):e.productosFiltrados=e.productos},seleccionarProducto:function(t,e,a){S["a"].esSaldoSuficiente(this.$ordenesNuevas,t,a,1)?t.productosBloqueados.some((function(t){return a.id===t.producto.id}))?this.$showAlerta("600","warning","mdi-alert-circle","El producto "+a.nombre+" no se ha agregado a la orden porque se encuentra bloqueado para "+t.nombre,!1):w(this,t,e,a,1):this.$showAlerta("600","warning","mdi-alert-circle","El alumno no cuenta con saldo suficiente",!1)},estaProductoEnCarrito:function(t){var e=this;return this.$ordenesNuevas.some((function(a){return e.fecha===a.fecha&&e.alumnoSeleccionado.id===a.alumno.id&&a.productos.some((function(e){return e.producto&&t===e.producto.id}))}))}}};function w(t,e,a,o,n){var r=t.$usuario.esPadreDeFamilia?t.$usuario:null,i=t.$ordenesNuevas.findIndex((function(t){return t.idAlumno===e.id&&t.fecha===a}));i<0&&(i=t.$ordenesNuevas.push(new f["a"]({alumno:e,fecha:a,clienteInternet:r,cafeteria:e.cafeteria}))-1);var c=t.$ordenesNuevas[i];c.productos.push({id:0,cantidad:n,producto:o,costo:n*o.costo,menu:o.menu}),t.$set(c,"costo",c.productos.reduce((function(t,e){return t+e.costo}),0)),t.mensajeProductoAgregado=!0,localStorage.setItem(g["a"].CARRITO_KEY,JSON.stringify(t.$ordenesNuevas))}function $(t,e,a,o){return t.$ordenesNuevas.some((function(t){return o===t.fecha&&a.id===t.alumno.id&&t.productos.some((function(t){return!!t.menu}))}))}var B=A,k=a("2877"),j=a("6544"),V=a.n(j),P=a("8336"),E=a("62ad"),O=a("0789"),R=a("132d"),q=a("8860"),N=a("da13"),I=a("5d23"),L=a("e449"),F=a("0fd9"),U=a("2db4"),D=Object(k["a"])(B,o,n,!1,null,"f144b65e",null);e["default"]=D.exports;V()(D,{VBtn:P["a"],VCol:E["a"],VFadeTransition:O["c"],VIcon:R["a"],VList:q["a"],VListItem:N["a"],VListItemTitle:I["c"],VMenu:L["a"],VRow:F["a"],VSnackbar:U["a"]})},"5d3d":function(t,e,a){},"613a":function(t,e,a){"use strict";a("19b8")},7931:function(t,e,a){t.exports=a.p+"img/productos_estado_vacio.96899fd0.svg"},"8b83":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticStyle:{"border-radius":"40px"},attrs:{color:"#eaf1f6",flat:"",disabled:t.estaBloqueado&&!t.opcionBloquear}},[t.editarProducto?o("v-card-title",{staticClass:"pa-2 text-center",staticStyle:{"background-color":"gray",display:"flex","margin-left":"85%","border-bottom-left-radius":"inherit"}},[o("v-btn",{attrs:{icon:"","x-small":"",dark:""},on:{click:function(e){return t.editarProducto()}}},[o("v-icon",[t._v("mdi-pencil")])],1)],1):t._e(),o("v-row",[o("v-col",{staticClass:"text-center flex-column pr-0",staticStyle:{display:"flex"},attrs:{cols:"4"}},[o("div",{staticClass:"py-2 flex-column text-center alineacion"},[o("v-img",{attrs:{height:"100px",width:"100px",src:t.imgSrc,"lazy-src":a("0745")}})],1)]),o("v-col",{staticClass:"pl-0 ml-0",attrs:{cols:"8"}},[o("v-card-text",{staticClass:"pa-0"},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h3",{staticClass:"black--text",staticStyle:{"font-family":"Nunito"}},[t._v(t._s(t.producto.nombre))]),o("h4",{staticClass:"text--disabled",staticStyle:{"font-family":"Readex Pro, sans-serif"}},[t._v(t._s(t.producto.descripcion))]),o("h4",{staticClass:"text--disabled",staticStyle:{"font-family":"Readex Pro, sans-serif"}},[t._v(t._s(t.producto.contenidoNeto))]),o("h4",{staticClass:"font-weight-bold precios--text",staticStyle:{"font-family":"Readex Pro, sans-serif"}},[t._v(t._s(t._f("moneda")(t.producto.costo)))])])],1)],1)],1)],1),t.mostrarAcciones?[t.estaBloqueado?[t.opcionBloquear?o("v-card-actions",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","background-color":"grey"}},[o("v-btn",{attrs:{text:"",small:"",dark:""},on:{click:function(e){return t.$emit("desbloquear-producto")}}},[t._v("Desbloquear")])],1):o("v-card-actions",{staticClass:"font-weight-bold white--text",staticStyle:{display:"flex","justify-content":"center","align-items":"center","background-color":"grey"}},[t._v(" Producto Bloqueado ")])]:t.opcionBloquear?o("v-card-actions",{staticClass:"primary",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[o("v-btn",{attrs:{text:"",small:"",dark:""},on:{click:function(e){return t.$emit("bloquear-producto")}}},[t._v("Bloquear")])],1):t.productoAgregado?o("v-card-actions",{staticClass:"font-weight-bold white--text",staticStyle:{display:"flex","justify-content":"center","align-items":"center","background-color":"#8bc34a"}},[o("v-btn",{attrs:{text:"",small:"",dark:""}},[t._v("Producto Agregado")])],1):[o("v-card-actions",{staticClass:"primary",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t.opcionAgregar?o("v-btn",{attrs:{text:"",small:"",dark:""},on:{click:function(e){return t.$emit("seleccionar")}}},[t._v("Agregar")]):t._e()],1)]]:t._e()],2)},n=[],r=(a("d3b7"),{name:"Producto",props:{opcionAgregar:{type:Boolean,default:!1},opcionBloquear:{type:Boolean,default:!1},producto:{type:Object,required:!0},productosBloqueadosAlumno:{type:Array,default:function(){return[]}},mostrarAcciones:{type:Boolean,default:!1},productoAgregado:{type:Boolean,default:!1},editarProducto:{type:Function}},data:function(){return{verDetalles:!1}},computed:{estaBloqueado:function(){var t=this.producto;return this.productosBloqueadosAlumno.some((function(e){return t.id===e.producto.id}))},imgSrc:function(){return this.$getImgCategoria(this.producto.categoria.id)}}}),i=r,c=(a("613a"),a("2877")),s=a("6544"),l=a.n(s),u=a("8336"),d=a("b0af"),f=a("99d9"),m=a("62ad"),p=a("132d"),g=a("adda"),v=a("0fd9"),h=Object(c["a"])(i,o,n,!1,null,"35d953f6",null);e["a"]=h.exports;l()(h,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VIcon:p["a"],VImg:g["a"],VRow:v["a"]})},"8e6b":function(t,e,a){"use strict";a("5246")},"8eab":function(t,e,a){"use strict";var o=a("20aa"),n=a("0dcc"),r=function(){var t=o["a"].BASE_URL+"/productos";return n["a"].get(t)},i=function(t){var e=o["a"].BASE_URL+"/productos/id-cliente/"+t;return n["a"].get(e)},c=function(t){var e=o["a"].BASE_URL+"/productos";return n["a"].post(e,t)},s=function(t){var e=o["a"].BASE_URL+"/productos";return n["a"].put(e,t)},l=function(t){var e=o["a"].BASE_URL+"/productos/bloqueos";return n["a"].post(e,t)},u=function(t){var e=o["a"].BASE_URL+"/productos/bloqueos/"+t;return n["a"].remove(e)};e["a"]={getProductos:r,getByCliente:i,create:c,update:s,bloquearProducto:l,desbloquearProducto:u}},"901c":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.$vuetify.breakpoint.smAndDown?o("v-bottom-navigation",{staticStyle:{"font-family":"Nunito"},attrs:{grow:"",fixed:"",app:"",color:"primary","background-color":"blue lighten-5"}},[t.alumno?o("v-btn",{on:{click:function(e){t.dialogSeleccionarAlumno=!0}}},[o("span",[t._v(" "+t._s(t.alumno.nombre)+" ")]),o("img",{attrs:{src:t.alumno.refImagen,width:"30"}})]):t._e(),o("select-fecha",{attrs:{value:t.fecha},on:{input:function(e){return t.$emit("cambiar-fecha",e)}}}),o("v-btn",[o("span",[t._v(" "+t._s(t._f("moneda")(t.saldo))+" ")]),o("img",{attrs:{src:a("08dc"),width:"30"}})])],1):o("v-card",{staticClass:"text-center",staticStyle:{"font-family":"Nunito"},attrs:{color:"blue lighten-5",flat:"",rounded:""}},[o("v-card-text",[o("v-row",[t.alumno?o("v-col",{attrs:{cols:"4"},on:{click:function(e){t.dialogSeleccionarAlumno=!0}}},[o("item-opcion",{attrs:{texto:t.alumno.nombre,imagen:t.alumno.refImagen,descripcion:"Alumno"}})],1):t._e(),o("v-col",{attrs:{cols:"4"}},[o("select-fecha",{attrs:{value:t.fecha},on:{input:function(e){return t.$emit("cambiar-fecha",e)}}})],1),o("v-col",{attrs:{cols:"4"}},[o("item-opcion",{attrs:{texto:t._f("moneda")(t.saldo),imagen:a("08dc"),descripcion:"Saldo disponible"}})],1)],1)],1)],1),o("dialogo",{attrs:{title:""},model:{value:t.dialogSeleccionarAlumno,callback:function(e){t.dialogSeleccionarAlumno=e},expression:"dialogSeleccionarAlumno"}},[o("v-card",{staticClass:"text-center",staticStyle:{"font-family":"Nunito"},attrs:{flat:""}},[o("v-card-title",{staticStyle:{display:"grid","text-align":"center"}},[o("h4",{staticClass:"text--disabled"},[t._v("Seleccione un alumno")])]),o("v-card-text",t._l(t.$usuario.hijos,(function(e,a){return o("div",{key:a,on:{click:function(a){return t.seleccionarHijo(e)}}},[o("item-opcion",{attrs:{texto:e.alumno.nombreCompleto,imagen:e.alumno.refImagen}})],1)})),0)],1)],1)],1)},n=[],r=(a("a9e3"),a("137f")),i=a("e3fc"),c={name:"PanelOpciones",props:{alumno:{type:Object,required:!1},fecha:{type:String,required:!1},saldo:{type:Number,required:!0}},components:{SelectFecha:i["a"],ItemOpcion:r["a"]},data:function(){return{dialogSeleccionarAlumno:!1}},methods:{seleccionarHijo:function(t){this.$emit("seleccionar-hijo",t),this.dialogSeleccionarAlumno=!1}}},s=c,l=a("2877"),u=a("6544"),d=a.n(u),f=a("b81c"),m=a("8336"),p=a("b0af"),g=a("99d9"),v=a("62ad"),h=a("0fd9"),b=Object(l["a"])(s,o,n,!1,null,"7023b634",null);e["a"]=b.exports;d()(b,{VBottomNavigation:f["a"],VBtn:m["a"],VCard:p["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:v["a"],VRow:h["a"]})},b078:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticStyle:{"border-radius":"40px","font-family":"Nunito"},attrs:{color:"#ededed",flat:"",to:t.redireccionar?{name:"DashboardMenu"}:""}},[a("v-card-title",{staticStyle:{"background-color":"#BBDEFB","word-break":"normal!important"}},[t._v(" "+t._s(t.menu.nombre)+" "),a("v-spacer"),a("span",{staticClass:"caption"},[t._v(t._s(t._f("moneda")(t.menu.costo)))])],1),a("v-card-text",{staticClass:"text-left pt-4",staticStyle:{"background-color":"#E3F2FD",height:"100px","overflow-y":"scroll"}},[a("v-row",t._l(t.menu.detalles,(function(e,o){return a("v-col",{key:o,staticClass:"py-0",attrs:{cols:"12"}},[a("small",[t._v(t._s(e.cantidad)+" pza"),e.cantidad>1?a("span",[t._v("s ")]):t._e(),t._v(" "+t._s(e.producto.nombre)+" ")])])})),1)],1),t.mostrarAcciones?[t.opcionAgregar?a("v-card-actions",{staticClass:"text-center",staticStyle:{display:"grid","background-color":"#2196f3"}},[a("v-btn",{attrs:{text:"",dark:""},on:{click:function(e){return t.$emit("seleccionar")}}},[t._v("Agregar")])],1):a("v-card-actions",{staticClass:"text-center",staticStyle:{display:"grid","background-color":"#8bc34a"}},[a("v-btn",{attrs:{text:"",dark:""}},[t._v("Agregado")])],1),t.opcionQuitar?a("v-card-actions",{staticClass:"text-center",staticStyle:{display:"grid","background-color":"#2196f3"}},[a("v-btn",{attrs:{text:"",dark:""}},[t._v("Quitar")])],1):t._e()]:t._e()],2)},n=[],r={name:"TarjetaMenu",props:{opcionAgregar:{type:Boolean,default:!1},opcionQuitar:{type:Boolean,default:!1},agregado:{type:Boolean,default:!1},menu:{type:Object,required:!0},cargando:{type:Boolean,default:!1},mostrarAcciones:{type:Boolean,default:!1},redireccionar:{type:Boolean,required:!1}},data:function(){return{verDetalles:!1}}},i=r,c=(a("3bf4"),a("2877")),s=a("6544"),l=a.n(s),u=a("8336"),d=a("b0af"),f=a("99d9"),m=a("62ad"),p=a("0fd9"),g=a("2fa4"),v=Object(c["a"])(i,o,n,!1,null,"4d0d342e",null);e["a"]=v.exports;l()(v,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VRow:p["a"],VSpacer:g["a"]})},b81c:function(t,e,a){"use strict";var o=a("5530"),n=(a("a9e3"),a("c7cd"),a("dd43"),a("3a66")),r=a("604c"),i=r["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r["a"].options.computed.classes.call(this)}},methods:{genData:r["a"].options.methods.genData}}),c=a("a9ad"),s=a("24b2"),l=a("a452"),u=a("277e"),d=a("7560"),f=a("f2e7"),m=a("58df"),p=a("d9bd");e["a"]=Object(m["a"])(Object(n["a"])("bottom",["height","inputValue"]),c["a"],s["a"],Object(f["b"])("inputValue"),l["a"],u["a"],d["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return u["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(o["a"])(Object(o["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(p["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(i,this.setTextColor(this.color,e),this.$slots.default)}})},c26f:function(t,e,a){"use strict";var o=a("20aa"),n=a("0dcc"),r=function(t){var e=o["a"].BASE_URL+"/ordenes/id-cliente-internet/"+t+"/hijos";return n["a"].get(e)},i=function(t){var e=o["a"].BASE_URL+"/ordenes/batch";return n["a"].post(e,t)},c=function(t){var e=o["a"].BASE_URL+"/ordenes/"+t+"/cancelar";return n["a"].patch(e)},s=function(t){var e=o["a"].BASE_URL+"/ordenes";return n["a"].put(e,t)},l=function(t,e){var a=o["a"].BASE_URL+"/ordenes/id-cliente-internet/"+t+"/hijos/estatus/"+e;return n["a"].get(a)},u=function(t){var e=o["a"].BASE_URL+"/ordenes/id-alumno/"+t;return n["a"].get(e)},d=function(t){var e=o["a"].BASE_URL+"/ordenes/matricula-alumno/"+t;return n["a"].get(e)},f=function(t,e){var a=o["a"].BASE_URL+"/ordenes/id-alumno/"+t+"/estatus/"+e;return n["a"].get(a)},m=function(t){if(t.esPadreDeFamilia)return r;if(t.esAlumno)return u;throw new Error("User type not found")},p=function(t){if(t.esPadreDeFamilia)return l;if(t.esAlumno)return f;throw new Error("User type not found")},g=function(t){var e=o["a"].BASE_URL+"/ordenes/"+t+"/entregar";return n["a"].patch(e)};e["a"]={getOrdenesPorCliente:r,createOrdenesBatch:i,updateOrdenes:s,cancelarOrden:c,getOrdenesPorClienteAndEstatus:l,getPorIdAlumno:u,getPorMatriculaAlumno:d,getPorIdAlumnoAndEstatus:f,getPromiseOrdenesById:m,getPromiseOrdenesByIdAndEstatus:p,entregarOrden:g}},dd43:function(t,e,a){},e822:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"text-center mx-0",staticStyle:{"border-radius":"10px"},attrs:{color:t.estaSeleccionada?"#2cafca":"",dark:t.estaSeleccionada,elevation:t.estaSeleccionada?"0":"",to:t.to?{name:t.to}:null},on:{click:function(e){return t.$emit("seleccionarCategoria")}}},[o("div",{staticClass:"py-2 flex-column text-center alineacion"},[o("v-img",{attrs:{height:"100px",width:"100px",src:t.imgSrc,"lazy-src":a("0745")}})],1),o("v-card-text",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h2",[t._v(t._s(t.categoria.titulo))])])],1)],1)],1)},n=[],r={name:"Categoria",props:{categoria:{type:Object,required:!0},estaSeleccionada:{type:Boolean,required:!1},to:{type:String,default:null}},data:function(){return{imgSrc:this.$getImgCategoria(this.categoria.id)}}},i=r,c=(a("8e6b"),a("2877")),s=a("6544"),l=a.n(s),u=a("b0af"),d=a("99d9"),f=a("62ad"),m=a("adda"),p=a("0fd9"),g=Object(c["a"])(i,o,n,!1,null,"afc342f0",null);e["a"]=g.exports;l()(g,{VCard:u["a"],VCardText:d["c"],VCol:f["a"],VImg:m["a"],VRow:p["a"]})},f28e:function(t,e,a){"use strict";var o=a("d4ec"),n=function t(e){var a=e.id,n=void 0===a?0:a,r=e.alumno,i=e.fecha,c=e.ciclo,s=void 0===c?null:c,l=e.productos,u=void 0===l?[]:l,d=e.cafeteria,f=e.clienteInternet,m=e.menu;Object(o["a"])(this,t),this.id=n,this.alumno=r||null,this.idAlumno=r?r.id:null,this.fecha=i,this.ciclo=s,this.costo=0,this.estaEntregada=!1,this.productos=u,this.cafeteria=d||null,this.idCafeteria=d?d.id:null,this.clienteInternet=f||null,this.idClienteInternet=f?f.id:null,this.menu=m||null,this.idMenu=m?m.id:null};e["a"]=n}}]);
//# sourceMappingURL=chunk-3be69a36.434ba70a.js.map