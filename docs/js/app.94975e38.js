(function(e){function t(t){for(var a,s,o=t[0],n=t[1],c=t[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&f.push(l[s][0]),l[s]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var n=r[o];0!==l[n]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},l={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=n;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},5012:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",[r("v-navigation-drawer",{attrs:{absolute:"",right:"","enable-resize-watcher":"",app:"",width:"500"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("retailer-list",{attrs:{retailers:e.retailers},on:{selectRetailer:e.selectRetailer}})],1),r("v-content",[r("retailer-dialog",{ref:"retailerDialog"}),r("div",{staticClass:"mt-2",staticStyle:{position:"absolute","z-index":"99",right:"5px",top:"28px"}},[r("v-btn",{staticClass:"mx-2 primary",attrs:{fab:"",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1)],1),r("GmapMap",{staticStyle:{width:"100%",height:"100%"},attrs:{center:{lat:49.0134297,lng:12.1016236},zoom:12,options:{streetViewControl:!1,fullscreenControl:!1,mapTypeControl:!1,styles:e.map}}},e._l(e.retailers,(function(t,a){return r("GmapMarker",{key:a,attrs:{position:t.position,icon:t.icon,clickable:!0},on:{click:function(r){return e.selectRetailer(t)}}})})),1)],1)],1)],1)},i=[],s=(r("4de4"),r("d81d"),r("13d5"),r("b64b"),r("ac1f"),r("5319"),r("2ca0"),r("96cf"),r("1da1")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.retailers?r("div",{staticStyle:{height:"100%",display:"flex","flex-direction":"column"}},[e._m(0),r("v-card-title",[e._v(" Händler "),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Suche","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{attrs:{headers:e.headers,items:e.retailers,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[r("v-btn",{attrs:{text:""},on:{click:function(t){return e.$emit("selectRetailer",a)}}},[r("v-icon",[e._v("mdi-eye-outline")])],1)]}}],null,!1,2828151425)}),r("div",{staticClass:"impress"},[r("v-btn",{staticClass:"primary mb-3",attrs:{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSd2N11xmbKPPcTXwX92BobqYvlkzyYt7bXLvNsSk6LJD1Sf6g/viewform"}},[e._v(" Händler Registrierung")]),r("br"),r("a",{attrs:{href:"https://www.vrhood.de/impressum",target:"_blank"}},[e._v("IMPRESSUM")]),e._v(" | "),r("a",{attrs:{href:"https://www.vrhood.de/datenschutz",target:"_blank"}},[e._v("DATENSCHUTZ")])],1)],1):e._e()},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pa-4",staticStyle:{"background-color":"#4ba797"}},[r("img",{staticStyle:{height:"80px"},attrs:{src:"https://www.vrhood.de/wp-content/uploads/2020/03/vrhood-logo-white.svg"}})])}],c={name:"",components:{},props:{retailers:Array},data:function(){return{drawer:!0,retailer:{},search:"",dialog:!1,headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Branche",align:"start",sortable:!0,value:"branche"},{text:"",value:"actions",sortable:!1}]}},computed:{},watch:{},methods:{},mounted:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},p=c,u=(r("7ea7"),r("2877")),f=r("6544"),y=r.n(f),m=r("8336"),v=r("99d9"),d=r("8fea"),b=r("132d"),h=r("2fa4"),g=r("8654"),_=Object(u["a"])(p,o,n,!1,null,"63690335",null),T=_.exports;y()(_,{VBtn:m["a"],VCardTitle:v["b"],VDataTable:d["a"],VIcon:b["a"],VSpacer:h["a"],VTextField:g["a"]});var w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{"max-width":"1000"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.retailer.name?r("v-card",[r("v-card-text",{staticClass:"pa-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",lg:"4"}},[r("h1",{staticClass:"primary--text ml-1 mb-4"},[e._v(e._s(e.retailer.name))]),r("v-row",[r("v-col",{staticClass:"icon-col"},[r("v-icon",[e._v("mdi-map-marker")])],1),r("v-col",[e._v(" "+e._s(e.retailer.straße)),r("br"),e._v(" "+e._s(e.retailer.plz)+" "+e._s(e.retailer.stadt)+" ")])],1),r("v-row",[r("v-col",{staticClass:"icon-col"},[r("v-icon",[e._v("mdi-phone-outline")])],1),r("v-col",[e._v(" "+e._s(e.retailer.festnetz)),r("br"),e._v(" "+e._s(e.retailer.mobil)+" ")])],1),r("v-row",[r("v-col",{staticClass:"icon-col"},[r("v-icon",[e._v("mdi-email-outline")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:"mailto: "+e.retailer.emailkunden,target:"_blank"}},[e._v(e._s(e.retailer.emailkunden))])])],1),e.retailer.webseite?r("v-row",[r("v-col",{staticClass:"icon-col"},[r("v-icon",[e._v("mdi-web")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:e.retailer.webseite,target:"_blank"}},[e._v(e._s(e.retailer.webseite))])])],1):e._e(),e.retailer.facebook?r("v-row",[r("v-col",{staticClass:"icon-col"},[r("v-icon",[e._v("mdi-facebook")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:e.retailer.facebook,target:"_blank"}},[e._v(e._s(e.formatUrlText(e.retailer.facebook)))])])],1):e._e(),e.retailer.insta?r("v-row",[r("v-col",{staticClass:"icon-col"},[r("v-icon",[e._v("mdi-instagram")])],1),r("v-col",[r("a",{staticClass:"limit-text",attrs:{href:e.retailer.insta,target:"_blank"}},[e._v(e._s(e.formatUrlText(e.retailer.insta)))])])],1):e._e()],1),r("v-col",{attrs:{cols:"12",lg:"8"}},[e.retailer.geschichte?r("div",[r("h2",{staticClass:"primary--text"},[e._v("Geschichte")]),e._v(" "+e._s(e.retailer.geschichte)+" ")]):e._e(),e.retailer.sortiment?r("div",[r("h2",{staticClass:"mt-4 primary--text"},[e._v("Sortiment")]),e._v(" "+e._s(e.retailer.sortiment)+" ")]):e._e(),r("div",{staticClass:"mt-4 ml-3"},[r("v-row",{staticClass:"mt-1"},[r("b",{staticClass:"width-list"},[e._v("Bestellung: ")]),e._v(" "+e._s(e.retailer.bestellung))]),r("v-row",{staticClass:"mt-1"},[r("b",{staticClass:"width-list"},[e._v("Bezahlen: ")]),e._v(" "+e._s(e.retailer.bezahlen))]),r("v-row",{staticClass:"mt-1"},[r("b",{staticClass:"width-list"},[e._v("Lieferung: ")]),e._v(" "+e._s(e.retailer.lieferung))])],1)])],1)],1)],1):e._e()],1)},C=[],x=a["a"].extend({name:"",components:{},props:{},data(){return{retailer:{},dialog:!1}},computed:{},watch:{},methods:{selectRetailer(e){this.dialog=!0,this.retailer=e},formatUrlText(e){return e.replace("https://","").replace("http://","").split("/")[1]}}}),k=x,B=(r("5f2a"),r("b0af")),D=r("62ad"),E=r("169a"),S=r("0fd9"),A=Object(u["a"])(k,w,C,!1,null,"f3f85a7a",null),F=A.exports;function j(e){var t=Object.keys(e).reduce((function(t,r){return r.startsWith("gsx$")&&(t[r.replace("gsx$","")]=e[r].$t),t}),{});return t.position={lat:parseFloat(t.lat),lng:parseFloat(t.lng)},delete t.icon,t}y()(A,{VCard:B["a"],VCardText:v["a"],VCol:D["a"],VDialog:E["a"],VIcon:b["a"],VRow:S["a"]});var O={components:{RetailerList:T,RetailerDialog:F},data:function(){return{drawer:!1,retailers:[],retailer:{},map:[{featureType:"administrative.country",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.land_parcel",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.locality",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.neighborhood",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"administrative.province",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{color:"#EEEDEB"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#C9D7CB"},{saturation:-20},{lightness:40},{visibility:"on"},{weight:1.5}]},{featureType:"landscape.natural.landcover",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"landscape.natural.terrain",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{color:"#C9D7CB"},{visibility:"off"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{color:"#C9D7CB"}]},{featureType:"poi.business",elementType:"labels",stylers:[{color:"#C9D7CB"},{visibility:"off"}]},{featureType:"poi.government",elementType:"geometry",stylers:[{color:"#C9D7CB"}]},{featureType:"poi.government",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"geometry",stylers:[{color:"#E1C4C6"}]},{featureType:"poi.medical",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.place_of_worship",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.school",elementType:"labels",stylers:[{color:"#AECDBF"},{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#AECDBF"}]},{featureType:"poi.sports_complex",elementType:"labels",stylers:[{color:"#AECDBF"},{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#E9D5BC"},{saturation:5},{lightness:5},{visibility:"on"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.highway.controlled_access",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#A4BCBF"}]}]}},methods:{selectRetailer:function(e){this.$refs.retailerDialog.selectRetailer(e)}},computed:{},watch:{},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vuetify.breakpoint.smAndUp&&(e.drawer=!0),t.next=3,e.axios.get("https://spreadsheets.google.com/feeds/list/1l6Lzh20BLcN_Gl4dvwmZ8cbmyJ5jIuIOx7Pn3KPN0pg/1/public/full?alt=json");case 3:r=t.sent,a=r.data,e.retailers=a.feed.entry.map((function(e){return j(e)})).filter((function(e){return parseInt(e.aktiv,10)}));case 6:case"end":return t.stop()}}),t)})))()}},V=O,R=(r("5c0b"),r("7496")),P=r("5bc1"),z=r("a75b"),$=r("f774"),I=Object(u["a"])(V,l,i,!1,null,null,null),M=I.exports;y()(I,{VApp:R["a"],VAppBarNavIcon:P["a"],VBtn:m["a"],VContent:z["a"],VNavigationDrawer:$["a"]});var N=r("8c4f");a["a"].use(N["a"]);var L=[{path:"/",name:"Home"},{path:"/about",name:"About"}],U=new N["a"]({mode:"history",base:"/",routes:L}),H=U,G=r("2f62");a["a"].use(G["a"]);var J=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}}),X=r("755e");a["a"].use(X,{load:{key:"AIzaSyCHSgM2AXU8ue0kDi4Zu_vSjoh2wQFhti4"}});var Z=r("f309");a["a"].use(Z["a"]);var K=new Z["a"]({theme:{themes:{light:{primary:"#4ba797"}}}}),Q=r("bc3a"),Y=r.n(Q),q=r("a7fe"),W=r.n(q);a["a"].use(W.a,Y.a),a["a"].config.productionTip=!1,new a["a"]({router:H,store:J,vuetify:K,render:function(e){return e(M)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("7694"),l=r.n(a);l.a},"5f2a":function(e,t,r){"use strict";var a=r("5012"),l=r.n(a);l.a},7694:function(e,t,r){},"7ea7":function(e,t,r){"use strict";var a=r("bcde"),l=r.n(a);l.a},bcde:function(e,t,r){}});
//# sourceMappingURL=app.94975e38.js.map