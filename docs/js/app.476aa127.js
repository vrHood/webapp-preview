(function(e){function t(t){for(var a,o,s=t[0],n=t[1],c=t[2],u=0,y=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&y.push(l[o][0]),l[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);p&&p(t);while(y.length)y.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var n=r[s];0!==l[n]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},l={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],n=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=n;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"13c3":function(e,t,r){"use strict";var a=r("23a2"),l=r.n(a);l.a},"23a2":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",[r("retailer-dialog",{staticStyle:{position:"absolute",bottom:"10px",left:"45%","z-index":"9999"}}),r("retailer-list",{ref:"retailerList",staticStyle:{position:"absolute",top:"0px",right:"0px","z-index":"9999",height:"100%","background-color":"white"},attrs:{retailers:e.retailers}}),r("GmapMap",{staticStyle:{width:"100%",height:"100%"},attrs:{center:{lat:49.0134297,lng:12.1016236},zoom:14,options:{streetViewControl:!1,fullscreenControl:!1,mapTypeControl:!1,styles:e.map}}},e._l(e.retailers,(function(t,a){return r("GmapMarker",{key:a,attrs:{position:t.position,icon:{url:"/info-i_maps.png",scaledSize:{height:32,width:32}},clickable:!0},on:{click:function(r){return e.selectRetailer(t)}}})})),1)],1)],1)},i=[],o=(r("4de4"),r("d81d"),r("13d5"),r("b64b"),r("ac1f"),r("5319"),r("2ca0"),r("96cf"),r("1da1")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},n=[],c={data:function(){return{dialog:!1}}},p=c,u=r("2877"),y=Object(u["a"])(p,s,n,!1,null,null,null),f=y.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.retailers.length?r("div",[r("v-card",[r("div",{staticClass:"pa-4",staticStyle:{"background-color":"#4ba797"}},[r("img",{staticStyle:{height:"80px"},attrs:{src:"https://www.vrhood.de/wp-content/uploads/2020/03/vrhood-logo-white.svg"}})]),r("v-card-title",[e._v(" Händler "),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Suche","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{staticStyle:{height:"100%"},attrs:{headers:e.headers,items:e.retailers,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[r("v-btn",{attrs:{text:""},on:{click:function(t){return e.selectRetailer(a)}}},[r("v-icon",[e._v("mdi-eye-outline")])],1)]}}],null,!1,767548540)})],1),r("v-dialog",{attrs:{"max-width":"1000"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.retailer.name?r("v-card",[r("v-card-text",{staticClass:"pa-4"},[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("h2",[e._v(e._s(e.retailer.name))]),r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",[e._v("mdi-map-marker")])],1),r("v-col",[e._v(" "+e._s(e.retailer.straße)),r("br"),e._v(" "+e._s(e.retailer.plz)+" "+e._s(e.retailer.stadt)+" ")])],1),r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",[e._v("mdi-phone-outline")])],1),r("v-col",[e._v(" "+e._s(e.retailer.festnetz)),r("br"),e._v(" "+e._s(e.retailer.mobil)+" ")])],1),r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",[e._v("mdi-email-outline")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:"mailto: "+e.retailer.emailkunden,target:"_blank"}},[e._v(e._s(e.retailer.emailkunden))])])],1),e.retailer.webseite?r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",[e._v("mdi-web")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:e.retailer.webseite,target:"_blank"}},[e._v(e._s(e.retailer.webseite))])])],1):e._e(),e.retailer.facebook?r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",[e._v("mdi-facebook")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:e.retailer.facebook,target:"_blank"}},[e._v(e._s(e.retailer.facebook))])])],1):e._e(),e.retailer.insta?r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-icon",[e._v("mdi-instagram")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:e.retailer.insta,target:"_blank"}},[e._v(e._s(e.retailer.insta))])])],1):e._e()],1),r("v-col",{attrs:{cols:"6"}},[r("h2",[e._v("Geschichte")]),e._v(" "+e._s(e.retailer.geschichte)+" "),r("h2",{staticClass:"mt-4"},[e._v("Sortiment")]),e._v(" "+e._s(e.retailer.sortiment)+" "),r("div",{staticClass:"mt-4 ml-3"},[r("v-row",[e._v(" Bestellung: "+e._s(e.retailer.bestellung))]),r("v-row",[e._v(" Bezahlen: "+e._s(e.retailer.bezahlen))]),r("v-row",[e._v(" Lieferung: "+e._s(e.retailer.lieferung))])],1)])],1)],1)],1):e._e()],1),e._m(0)],1):e._e()},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"impress",staticStyle:{position:"relativ:bottom: 0px"}},[r("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSd2N11xmbKPPcTXwX92BobqYvlkzyYt7bXLvNsSk6LJD1Sf6g/viewform",target:"_blank"}},[e._v("HÄNDLER REGISTRIERUNG")]),e._v(" | "),r("a",{attrs:{href:"https://www.vrhood.de/impressum",target:"_blank"}},[e._v("IMPRESSUM")]),e._v(" | "),r("a",{attrs:{href:"https://www.vrhood.de/datenschutz",target:"_blank"}},[e._v("DATENSCHUTZ")])])}],d={name:"",components:{},props:{retailers:Array},data:function(){return{retailer:{},search:"",dialog:!1,headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Branche",align:"start",sortable:!0,value:"branche"},{text:"",value:"actions",sortable:!1}]}},computed:{},watch:{},methods:{selectRetailer:function(e){this.dialog=!0,this.retailer=e}},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},h=d,b=(r("13c3"),r("6544")),g=r.n(b),_=r("8336"),T=r("b0af"),w=r("99d9"),C=r("62ad"),x=r("8fea"),k=r("169a"),B=r("132d"),E=r("0fd9"),S=r("2fa4"),D=r("8654"),A=Object(u["a"])(h,m,v,!1,null,"3647a2f3",null),F=A.exports;function j(e){var t=Object.keys(e).reduce((function(t,r){return r.startsWith("gsx$")&&(t[r.replace("gsx$","")]=e[r].$t),t}),{});return t.position={lat:parseFloat(t.lat),lng:parseFloat(t.lng)},t}g()(A,{VBtn:_["a"],VCard:T["a"],VCardText:w["a"],VCardTitle:w["b"],VCol:C["a"],VDataTable:x["a"],VDialog:k["a"],VIcon:B["a"],VRow:E["a"],VSpacer:S["a"],VTextField:D["a"]});var O={components:{RetailerDialog:f,RetailerList:F},data:function(){return{retailers:[],retailer:{},map:[{featureType:"administrative.country",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.land_parcel",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.locality",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.neighborhood",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.province",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{color:"#EEEDEB"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#C9D7CB"},{saturation:-20},{lightness:40},{visibility:"on"},{weight:1.5}]},{featureType:"landscape.natural.landcover",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"landscape.natural.terrain",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{color:"#C9D7CB"},{visibility:"off"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{color:"#C9D7CB"}]},{featureType:"poi.business",elementType:"labels",stylers:[{color:"#C9D7CB"},{visibility:"off"}]},{featureType:"poi.government",elementType:"geometry",stylers:[{color:"#C9D7CB"}]},{featureType:"poi.government",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#E1C4C6"}]},{featureType:"poi.medical",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.place_of_worship",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.school",elementType:"labels",stylers:[{color:"#AECDBF"},{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.sports_complex",elementType:"labels",stylers:[{color:"#AECDBF"},{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#E9D5BC"},{saturation:5},{lightness:5},{visibility:"on"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.highway.controlled_access",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#A4BCBF"}]}]}},methods:{selectRetailer:function(e){this.$refs.retailerList.selectRetailer(e)}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("https://spreadsheets.google.com/feeds/list/1l6Lzh20BLcN_Gl4dvwmZ8cbmyJ5jIuIOx7Pn3KPN0pg/1/public/full?alt=json");case 2:r=t.sent,a=r.data,e.retailers=a.feed.entry.map((function(e){return j(e)})).filter((function(e){return e.aktiv})),console.log(e.retailers);case 6:case"end":return t.stop()}}),t)})))()}},R=O,V=(r("5c0b"),r("7496")),z=Object(u["a"])(R,l,i,!1,null,null,null),P=z.exports;g()(z,{VApp:V["a"]});var L=r("8c4f");a["a"].use(L["a"]);var M=[{path:"/",name:"Home"},{path:"/about",name:"About"}],$=new L["a"]({mode:"history",base:"/",routes:M}),I=$,N=r("2f62");a["a"].use(N["a"]);var G=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=r("755e");a["a"].use(H,{load:{key:"AIzaSyCHSgM2AXU8ue0kDi4Zu_vSjoh2wQFhti4"}});var J=r("f309");a["a"].use(J["a"]);var U=new J["a"]({theme:{themes:{light:{primary:"#4ba797"}}}}),X=r("bc3a"),Z=r.n(X),K=r("a7fe"),Q=r.n(K);a["a"].use(Q.a,Z.a),a["a"].config.productionTip=!1,new a["a"]({router:I,store:G,vuetify:U,render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("7694"),l=r.n(a);l.a},7694:function(e,t,r){}});
//# sourceMappingURL=app.476aa127.js.map