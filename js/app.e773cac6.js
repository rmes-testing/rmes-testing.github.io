(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"023a":function(t,e,a){t.exports=a.p+"img/slide-1.e6986562.jpg"},"0358":function(t,e,a){t.exports=a.p+"img/mpd-4.e75a7cca.jpg"},"0bdb":function(t,e,a){t.exports=a.p+"img/mpd-5.639e8e9a.jpg"},"150b":function(t,e,a){},1793:function(t,e,a){t.exports=a.p+"img/profile-8.e73fbd14.jpg"},2385:function(t,e,a){t.exports=a.p+"img/cert-7.a55673a5.jpg"},"299a":function(t,e,a){t.exports=a.p+"img/media-6.cd46b6e8.jpg"},"29a8":function(t,e,a){t.exports=a.p+"img/about-us-1.590965c2.jpg"},"3c1a":function(t,e,a){t.exports=a.p+"img/products-4.66eab0c1.jpg"},4044:function(t,e,a){t.exports=a.p+"img/cert-11.94511fcf.jpg"},4241:function(t,e,a){t.exports=a.p+"img/cert-3.4e16a6f7.jpg"},4463:function(t,e,a){t.exports=a.p+"img/mpd-3.3c2ab54c.jpg"},"44a1":function(t,e,a){t.exports=a.p+"img/products-1.c0bb85e0.jpg"},"45da":function(t,e,a){t.exports=a.p+"img/mpd-1.ac001b96.png"},"49b3":function(t,e,a){"use strict";a("b527")},"4d6f":function(t,e,a){var i={"./cert-1.jpg":"a6b3","./cert-10.jpg":"b5d3","./cert-11.jpg":"4044","./cert-12.jpg":"c055","./cert-13.jpg":"ae8c","./cert-14.jpg":"7757","./cert-2.jpg":"6b7e","./cert-3.jpg":"4241","./cert-4.jpg":"8e21","./cert-5.jpg":"750d","./cert-6.jpg":"fca5","./cert-7.jpg":"2385","./cert-8.jpg":"dc5f","./cert-9.jpg":"ca0f"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="4d6f"},"50ff":function(t,e,a){t.exports=a.p+"img/profile-3.8cc8d0cc.jpg"},5260:function(t,e,a){var i={"./slide-1.jpg":"023a","./slide-2.jpg":"b184","./slide-3.jpg":"b0dd"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="5260"},"53fc":function(t,e,a){t.exports=a.p+"img/products-2.7d695930.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("v-main",[a("router-view")],1),a("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",[i("v-app-bar",{staticClass:"bg-grey d-flex justify-lg-space-around pl-lg-0",attrs:{app:"","elevate-on-scroll":""}},[i("v-app-bar-nav-icon",{staticClass:"d-lg-none mr-6",on:{click:function(e){t.drawer=!0}}}),i("router-link",{staticClass:"router-link mr-16",attrs:{to:"/"}},[i("v-img",{attrs:{"max-height":"50px","max-width":"50px",src:a("cf05")}})],1),i("v-spacer"),t._l(t.navLinks,(function(e){return i("router-link",{key:e.text,staticClass:"d-lg-inline-block d-none pl-3 router-link",attrs:{to:e.route}},[i("v-btn",{attrs:{text:""}},[t._v(t._s(e.text))])],1)}))],2),i("v-navigation-drawer",{staticClass:"d-lg-none",attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",{attrs:{"active-class":"t-red"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.navLinks,(function(e){return i("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[i("v-list-item-icon",[i("v-icon",{attrs:{small:""},domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1)},o=[],c={name:"Navbar",data:function(){return{drawer:!1,navLinks:[{text:"About Us",icon:"mdi-information",route:"/about-us"},{text:"Our Business",icon:"mdi-domain",route:"/our-business"},{text:"QHSE",icon:"mdi-file-document-multiple",route:"/qhse"},{text:"Media",icon:"mdi-folder-multiple-image",route:"/media"},{text:"Resources",icon:"mdi-semantic-web",route:"/resources"},{text:"Career Opportunities",icon:"mdi-bag-checked",route:"/career-opportunities"},{text:"Contact Us",icon:"mdi-phone-in-talk",route:"/contact-us"}]}}},l=c,p=(a("f6b0"),a("2877")),u=a("6544"),m=a.n(u),d=a("40dc"),v=a("5bc1"),f=a("8336"),g=a("132d"),h=a("adda"),b=a("8860"),C=a("da13"),_=a("5d23"),y=a("1baa"),x=a("34c3"),w=a("f774"),j=a("8dd9"),S=a("2fa4"),k=Object(p["a"])(l,r,o,!1,null,"36155677",null),O=k.exports;m()(k,{VAppBar:d["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VIcon:g["a"],VImg:h["a"],VList:b["a"],VListItem:C["a"],VListItemContent:_["a"],VListItemGroup:y["a"],VListItemIcon:x["a"],VListItemTitle:_["c"],VNavigationDrawer:w["a"],VSheet:j["a"],VSpacer:S["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",[a("v-row",{staticClass:"ma-0 bg-grey text-center py-2"},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"t-h5 medium"},[t._v("Copyright © "+t._s((new Date).getFullYear())+" RMES | All rights reserved")])]),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"t-h5 medium"},[a("router-link",{attrs:{to:"/privacy"}},[t._v("Privacy Policy")])],1)])],1)],1)},A=[],P={name:"Footer"},E=P,T=(a("49b3"),a("62ad")),I=a("0fd9"),D=Object(p["a"])(E,V,A,!1,null,"a483a91a",null),M=D.exports;m()(D,{VCol:T["a"],VRow:I["a"],VSheet:j["a"]});var L={name:"App",components:{Navbar:O,Footer:M}},R=L,N=a("7496"),B=a("f6c4"),H=Object(p["a"])(R,n,s,!1,null,null,null),F=H.exports;m()(H,{VApp:N["a"],VMain:B["a"]});var U=a("8c4f"),W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-carousel",{attrs:{"hide-delimiters":"",height:"95vh"}},t._l(3,(function(t){return i("v-carousel-item",{key:t,attrs:{src:a("5260")("./slide-"+t+".jpg")}})})),1),i("div",{staticClass:"inward"},[i("div",{staticClass:"bold t-h2 py-8"},[t._v("OUR CERTIFICATES")]),i("v-row",[t._l(5,(function(t){return i("v-col",{key:t,staticClass:"pa-2 pa-md-6",attrs:{cols:"6",md:"4"}},[i("v-card",{staticClass:"pa-md-6 pa-2",attrs:{elevation:"12"}},[i("v-img",{attrs:{width:"100%",contain:"",src:a("4d6f")("./cert-"+t+".jpg")}})],1)],1)})),i("v-col",{staticClass:"pa-2 pa-md-6",attrs:{cols:"6",md:"4"}},[i("v-btn",{staticClass:"t-h2 bold",attrs:{height:"100%",width:"100%",elevation:"12",color:"white"},on:{click:t.gotoCertificates}},[t._v(" VIEW ALL "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-double-right ")])],1)],1)],2)],1),i("div",{staticClass:"inward"},[i("div",{staticClass:"bold t-h2 py-8"},[t._v("OUR CLIENTS")]),i("v-row",[t._l(5,(function(t){return i("v-col",{key:t,staticClass:"pa-2 pa-md-6",attrs:{cols:"6",md:"4"}},[i("v-card",{staticClass:"px-6",attrs:{elevation:"12",height:"150px"}},[i("v-img",{attrs:{height:"100%",contain:"",src:a("6b21")("./client-"+t+".png")}})],1)],1)})),i("v-col",{staticClass:"pa-2 pa-md-6",attrs:{cols:"6",md:"4"}},[i("v-btn",{staticClass:"t-h2 bold",attrs:{height:"100%",width:"100%",elevation:"12",color:"white"},on:{click:t.goToClients}},[t._v(" VIEW ALL "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-double-right ")])],1)],1)],2)],1),i("div",{staticClass:"mb-16"})],1)},q=[],$={name:"Home",methods:{gotoCertificates:function(){this.$router.push({name:"QHSE",params:{tab:2}})},goToClients:function(){this.$router.push({name:"OurBusiness",params:{tab:4}})}}},z=$,Q=a("b0af"),G=a("5e66"),J=a("3e35"),K=Object(p["a"])(z,W,q,!1,null,null,null),Y=K.exports;m()(K,{VBtn:f["a"],VCard:Q["a"],VCarousel:G["a"],VCarouselItem:J["a"],VCol:T["a"],VIcon:g["a"],VImg:h["a"],VRow:I["a"]});var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inward"},[i("v-tabs",{staticClass:"mb-16 medium",attrs:{"center-active":"","show-arrows":"",color:"#D40A0A"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tabs-slider",{attrs:{color:"#D40A0A"}}),i("v-tab",[t._v("Company Background")]),i("v-tab",[t._v("Leadership")]),i("v-tab",[t._v("Milestones")])],1),i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab-item",[i("div",{staticClass:"t-h4 medium mb-16"},[t._v("Regional Marine & Engineering Services (RMES), a Singapore based company with primary business focus in serving the offshore oil and gas industry, as well as the marine and onshore industry, has more than 20 years solid track records with commitment to customer satisfaction and meeting the ever evolving industrial demand.")]),i("ImageText",{attrs:{right:!0,src:a("29a8"),text:"RMES offers a one-stop solution in designing, engineering, manufacturing, re-manufacturing, servicing, inspection, testing, field-support, and product or process customization which meets customer requirements."}}),i("div",{staticClass:"mb-16"}),i("ImageText",{attrs:{left:!0,src:a("84ef"),text:"Today, RMES is highly regarded as an organization that is proactive, dynamic and specialized in the industry. With over 100 employees and well equipped facilities, we deliver the products and services in an excellent Quality and professional manner while observing the Health, Safety, and Environmental concerns of all interested parties."}}),i("div",{staticClass:"mb-16"}),i("v-list",t._l(t.initialism,(function(e,a){return i("v-list-item",{key:a,attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[i("div",{staticClass:"t-h2 medium"},[i("b",[t._v(t._s(e.heading[0]))]),t._v(t._s(e.heading.slice(1)))])]),i("v-list-item-subtitle",[i("div",{staticClass:"t-h4 medium text-wrap"},[t._v(t._s(e.text))])])],1)],1)})),1),i("div",{staticClass:"mb-16"}),i("v-row",[i("v-col",{staticClass:"pr-md-6",attrs:{cols:"12",md:"6"}},[i("v-img",{attrs:{src:a("7c35")}})],1),i("v-col",{staticClass:"pl-md-6",attrs:{cols:"12",md:"6"}},[i("v-img",{attrs:{src:a("f3a7")}})],1)],1)],1),i("v-tab-item",[i("v-img",{attrs:{src:a("e5a2")}}),i("div",{staticClass:"mb-16"}),i("v-row",t._l(t.profiles,(function(t,e){return i("v-col",{key:e,staticClass:"pa-6",attrs:{cols:"12",md:"6"}},[i("Profile",{attrs:{name:t.name,src:a("ad9c")("./profile-"+(e+1)+".jpg"),role:t.role}})],1)})),1)],1),i("v-tab-item",[i("v-stepper",{attrs:{vertical:""},model:{value:t.stepper,callback:function(e){t.stepper=e},expression:"stepper"}},[i("v-stepper-step",{attrs:{complete:t.stepper>1,step:"1",color:"#D40A0A"}},[t._v(" PC "),i("small",[t._v("Procurement / Construction")])]),i("v-stepper-content",{attrs:{step:"1"}},[i("v-timeline",{attrs:{dense:""}},t._l(t.pc,(function(e,a){return i("v-timeline-item",{key:a,attrs:{color:"#D40A0A"}},[i("v-card",{staticClass:"elevation-2"},[i("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.year)+" ")]),i("v-card-text",[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1),i("v-btn",{staticClass:"mt-6",attrs:{color:"#D40A0A",text:""},on:{click:function(e){t.stepper=2}}},[t._v(" Next ")])],1),i("v-stepper-step",{attrs:{complete:t.stepper>2,step:"2",color:"#D40A0A"}},[t._v(" EPCI "),i("small",[t._v("Engineering, Procurement, Construction, Installation")])]),i("v-stepper-content",{attrs:{step:"2"}},[i("v-timeline",{attrs:{dense:""}},t._l(t.epci,(function(e,a){return i("v-timeline-item",{key:a,attrs:{color:"#D40A0A"}},[i("v-card",{staticClass:"elevation-2"},[i("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.year)+" ")]),i("v-card-text",[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1),i("v-btn",{staticClass:"mt-6",attrs:{color:"#D40A0A",text:""},on:{click:function(e){t.stepper=3}}},[t._v(" Next ")])],1),i("v-stepper-step",{attrs:{complete:t.stepper>3,step:"3",color:"#D40A0A"}},[t._v(" FEED "),i("small",[t._v("Front End Engineering Design")])]),i("v-stepper-content",{attrs:{step:"3"}},[i("v-timeline",{attrs:{dense:""}},t._l(t.feed,(function(e,a){return i("v-timeline-item",{key:a,attrs:{color:"#D40A0A"}},[i("v-card",{staticClass:"elevation-2"},[i("v-card-title",{staticClass:"text-h5"},[t._v(" "+t._s(e.year)+" ")]),i("v-card-text",[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1),i("v-btn",{staticClass:"mt-6",attrs:{color:"#D40A0A",text:""},on:{click:function(e){t.stepper=1}}},[t._v(" Back ")])],1)],1)],1)],1),i("div",{staticClass:"mb-16"})],1)},Z=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pr-md-6",attrs:{cols:"12",md:"6"}},[t.left?a("div",{staticClass:"t-h4 medium"},[t._v(t._s(t.text))]):t._e(),t.right?a("v-img",{attrs:{src:t.src}}):t._e()],1),a("v-col",{staticClass:"pl-md-6",attrs:{cols:"12",md:"6"}},[t.right?a("div",{staticClass:"t-h4 medium"},[t._v(t._s(t.text))]):t._e(),t.left?a("v-img",{attrs:{src:t.src}}):t._e()],1)],1)},et=[],at={name:"ImageText",props:["left","right","src","text"]},it=at,nt=Object(p["a"])(it,tt,et,!1,null,null,null),st=nt.exports;m()(nt,{VCol:T["a"],VImg:h["a"],VRow:I["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"py-6",attrs:{elevation:"12"}},[a("v-img",{attrs:{src:t.src,contain:"",height:"300px"}}),a("div",{staticClass:"t-h2 bold text-center"},[t._v(t._s(t.name))]),a("div",{staticClass:"t-h3 medium text-center"},[t._v(t._s(t.role))])],1)},ot=[],ct={name:"Profile",props:["name","src","role"]},lt=ct,pt=Object(p["a"])(lt,rt,ot,!1,null,null,null),ut=pt.exports;m()(pt,{VCard:Q["a"],VImg:h["a"]});var mt={components:{ImageText:st,Profile:ut},data:function(){return{tab:null,stepper:1,initialism:[{heading:"Reliable",text:"We pride ourselves on our consistent performance, quick responsiveness and flexibility in meeting the requirements of our clients whom we have been entrusted with."},{heading:"Meticulous",text:"We are committed to pay attention to details, and take extra care in the precision of our work and in protecting our clients' interests."},{heading:"Expert",text:"Each of our executives, engineers, project responsible, quality responsible, technicians and shop floor personnel are equipped with a wealth of hands-on skills, experience and in-depth technical knowledge."},{heading:"Sturdy",text:"We prioritize quality and safety above all in the production of our products and services, and work efficiently to ensure that products are produced in a timely, safe and vigorous manner."}],profiles:[{name:"Ronnie Chang",role:"Chairman / Owner"},{name:"Cindy Niam",role:"Shareholder"},{name:"Norman Yaw",role:"Chief Executive Officer"},{name:"Heng Wee Koon",role:"Advisor"},{name:"Michael Lok",role:"Controller of Finance & Legal"},{name:"Herbert M. Frohlich",role:"Technical Manager"},{name:"Jeff S. Mardon",role:"Subsea Manager"},{name:"Ben J. Gedge",role:"MPD, Drilling & Well Services Specialist"},{name:"Lim Eng Hua",role:"Accounts / Admin"},{name:"Haffiny Leong",role:"Accounts / Admin"}],pc:[{year:1995,name:"Inception"},{year:1999,name:"ISO 9001"},{year:2005,name:"ISO 14001, OHSAS 18001"},{year:2006,name:"Workshop Capacity Expansion"}],epci:[{year:2010,name:"Ensco Best Asia Pacific Supplier Award"},{year:2012,name:"New Strategy (Manufacturing, MRO, Testing, Rental)"},{year:2013,name:"API Licenses (API Q1, API 6A, API 16A)"}],feed:[{year:2015,name:"MPD System"},{year:2016,name:"New Product Development, API Licenses (API 16C, API 16RCD, API 17D)"},{year:2018,name:"API Licenses (API 20E, API 20F), ASME Section VIII (Division 1), RCD Field Test & Implementation"}]}}},dt=mt,vt=a("99d9"),ft=a("7e85"),gt=a("e516"),ht=a("56a4"),bt=a("71a3"),Ct=a("c671"),_t=a("fe57"),yt=a("aac8"),xt=a("9a96"),wt=a("8414"),jt=a("1e06"),St=Object(p["a"])(dt,X,Z,!1,null,null,null),kt=St.exports;m()(St,{VBtn:f["a"],VCard:Q["a"],VCardText:vt["a"],VCardTitle:vt["b"],VCol:T["a"],VImg:h["a"],VList:b["a"],VListItem:C["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:I["a"],VStepper:ft["a"],VStepperContent:gt["a"],VStepperStep:ht["a"],VTab:bt["a"],VTabItem:Ct["a"],VTabs:_t["a"],VTabsItems:yt["a"],VTabsSlider:xt["a"],VTimeline:wt["a"],VTimelineItem:jt["a"]});var Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inward"},[i("v-tabs",{staticClass:"mb-16 medium",attrs:{"center-active":"","show-arrows":"",color:"#D40A0A"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tabs-slider",{attrs:{color:"#D40A0A"}}),i("v-tab",[t._v("Facilities & Capabilities")]),i("v-tab",[t._v("Products & Services")]),i("v-tab",[t._v("Rental")]),i("v-tab",[t._v("MPD / RCD")]),i("v-tab",[t._v("Our Clients")])],1),i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab-item",[i("v-expansion-panels",{staticClass:"pa-1"},t._l(t.facilities,(function(e,a){return i("v-expansion-panel",{key:a},[i("v-expansion-panel-header",{staticClass:"t-h4 medium"},[t._v(" "+t._s(e.header)+" ")]),i("v-expansion-panel-content",[i("v-list",t._l(e.subitems,(function(e,a){return i("v-list-item",{key:a},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"t-h5 medium"},[t._v(t._s(e))])],1)],1)})),1)],1)],1)})),1)],1),i("v-tab-item",[i("v-expansion-panels",{staticClass:"pa-1"},t._l(t.products,(function(e,n){return i("v-expansion-panel",{key:n},[i("v-expansion-panel-header",{staticClass:"t-h4 medium"},[t._v(" "+t._s(e.header)+" ")]),i("v-expansion-panel-content",[i("v-list",t._l(e.subitems,(function(e,a){return i("v-list-item",{key:a},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"t-h5 medium"},[t._v(t._s(e.title))]),t._l(e.subtitles,(function(e,a){return i("v-list-item-subtitle",{key:a,staticClass:"text-wrap pt-6 medium"},[t._v(" "+t._s(e)+" ")])}))],2)],1)})),1),i("v-img",{attrs:{src:a("8192")("./products-"+(n+1)+".jpg")}})],1)],1)})),1)],1),i("v-tab-item",[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"pr-md-6",attrs:{cols:"12",md:"6"}},[i("v-img",{attrs:{src:a("5cb2")}})],1),i("v-col",{staticClass:"pl-md-6",attrs:{cols:"12",md:"6"}},[i("div",{staticClass:"t-h4 medium"},[t._v("BOP Stack 1")]),i("div",{staticClass:"t-h5 medium py-8"},[t._v(' 13-5/8" 10K Double Ram BOP, Cameron Type U '),i("br"),t._v(' 13-5/8" 10K Single Ram BOP, Cameron Type U '),i("br"),t._v(' 13-5/8" 5K GK Annular BOP, Hydril ')]),i("div",{staticClass:"t-h4 medium"},[t._v("BOP Stack 2")]),i("div",{staticClass:"t-h5 medium py-8"},[t._v(' 13-5/8" 5K Double Ram BOP, Hydril '),i("br"),t._v(' 13-5/8" 5K GX Annular BOP, Hydril ')]),i("div",{staticClass:"t-h4 medium"},[t._v("Please email "),i("a",{attrs:{href:"mailto:sales@rmes.com.sg"}},[t._v("sales@rmes.com.sg")]),t._v(" for further enquiries.")])])],1)],1),i("v-tab-item",[i("div",{staticClass:"t-h4 medium"},[t._v("The RMES MPD/RCD is designed to be a flexible system that can be constructed to suit the customers' requirements.")]),i("div",{staticClass:"t-h4 medium"},[t._v("“THE ADAPTIVE SYSTEM” Available basic configurations are:")]),i("ul",{staticClass:"my-6 t-h5 medium"},[i("li",[t._v("Below tension ring (BTR)")]),i("li",[t._v("Above tension ring (ATR)")]),i("li",[t._v("Jack-up (JU)")]),i("li",[t._v("Land Drilling (LD)")])]),i("div",{staticClass:"t-h4 medium"},[t._v("The RMES MPD system is designed to be flexible and can be constructed to the requirements of the Oil Company, the Drilling Contractor and the rig or vessels limitations.")]),i("v-row",[i("v-col",{staticClass:"pr-6",attrs:{cols:"6"}},[i("v-img",{attrs:{src:a("45da"),height:"500px",contain:""}})],1),i("v-col",{staticClass:"pl-6",attrs:{cols:"6"}},[i("v-img",{attrs:{src:a("9657"),height:"500px",contain:""}})],1)],1),i("div",{staticClass:"t-h4 bold"},[t._v("RMES MPD Joint")]),i("div",{staticClass:"t-h4 bold mt-8"},[t._v("RMES Rotating Control Device")]),i("ul",{staticClass:"my-6 t-h5 medium"},[i("li",[t._v("Dual Packer Elements")]),i("li",[t._v("ID Through Bearing Assembly Ø9-1/4”")]),i("li",[t._v("ID Through Bore Protector Ø17-5/8”")]),i("li",[t._v("ID Through RCD Housing Ø18-3/4”")])]),i("div",{staticClass:"t-h4 bold mt-8"},[t._v("RMES MPD Annular")]),i("ul",{staticClass:"my-6 t-h5 medium"},[i("li",[t._v("Quick Close or Standard")])]),i("div",{staticClass:"t-h4 bold mt-8"},[t._v("RMES Flow Spool")]),i("ul",{staticClass:"my-6 t-h5 medium"},[i("li",[t._v("2 x 6” Flowlines")]),i("li",[t._v("Dual Block Isolation Ball Valves Standard")])]),i("div",{staticClass:"t-h4 bold mt-8"},[t._v("Advanced Element Simulation")]),i("v-img",{staticClass:"mt-8",attrs:{src:a("4463"),width:"100%",contain:""}}),i("v-row",{staticClass:"mt-8"},t._l(3,(function(t){return i("v-col",{key:t,attrs:{cols:"4"}},[i("v-img",{attrs:{src:a("b34e")("./mpd-"+(t+3)+".jpg")}})],1)})),1)],1),i("v-tab-item",[i("v-list",t._l(t.customers,(function(e){return i("v-list-item",{key:e},[i("div",{staticClass:"t-h4 medium"},[t._v(t._s(e))])])})),1)],1)],1),i("div",{staticClass:"mb-16"})],1)},Vt=[],At={data:function(){return{tab:null,facilities:[{header:"Cranes",subitems:["50T Overhead Gantry Cranes","20T Overhead Cranes","16T Overhead Gantry Crane","10T Overhead Cranes","6T Overhead Cranes","5T Overhead Cranes","100T Capacity Spreader Bar"]},{header:"Welding",subitems:["Cladding (Inconel 625, SS 316L, Aluminum Bronze)","Automatic welding SAW","Semi-automatic welding FCAW & MIG","Manual welding TIG & SMAW"]},{header:"Machining",subitems:["CNC 5-face double column gantry machining centers","Large CNC horizontal boring-milling","Large CNC vertical turn-mill","Large CNC horizontal turn-mill","CNC horizontal lathes","CNC vertical machining centers","And various supporting machines"]},{header:"Inspection",subitems:["D&I","Positive material identification","Hardness testing","Ultrasonic testing","Magnetic particle testing","Dye penetrant testing"]},{header:"Facility & Equipment",subitems:["Post Weld Heat Treatment Furnace","High Pressure Waterjet Cleaning","Blasting and Painting","Hydraulic Power Units","Diesel Powered Generator","Electrical Test Units","Pneumatic Test Units","High Pressure Test Pits","BOP Stacking Pads","80 feet boom lift","60 feet boom lift","Scissor lift"]}],products:[{header:"API Manufacturing",subitems:[{title:"API 6A - PSL 1, PSL 2, PSL 3",subtitles:["Adapter and Spacer Spools, Cross-Over Connectors, Flanged Connectors, Other End Connectors, Tees and Crosses","Threaded Connectors, Top Connectors","QMS Exclusions - None"]},{title:"API 16A",subtitles:["Drilling Spools, Adapters","QMS Exclusions - None"]},{title:"API 16C",subtitles:["Choke & Kill Line, Buffer Chamber"]},{title:"API 17D",subtitles:["Other End Connectors"]}]},{header:"Fabrication, Assembly & Testing"},{header:"Inspection, Repair, Modification & Re-Manufacturing"},{header:"BOP Stacking & Services"},{header:"High Pressure testing"},{header:"On-site Inspection, Machining, Fit-up and Welding"}],customers:["Black & Veatch","Cameron, A Schlumberger Company","Diamond Offshore","Ensco","Forum Energy Technologies","Heerema Marine","Japan Drilling Company","Josco","KCA Deutag","Keppel FELS","MacGregor","Maersk Drilling","MHWirth","National Oilwell Varco","Noble Drilling","Oceaneering Service","Opus Offshore","Parker Drilling","Risers International","Seadrill","SEVAN Drilling","SH Group","Songa Offshore","Songa Opus Offshore","Transocean","UMW JDC Drilling"]}},mounted:function(){this.tab=this.$route.params.tab}},Pt=At,Et=a("cd55"),Tt=a("49e2"),It=a("c865"),Dt=a("0393"),Mt=Object(p["a"])(Pt,Ot,Vt,!1,null,null,null),Lt=Mt.exports;m()(Mt,{VCol:T["a"],VExpansionPanel:Et["a"],VExpansionPanelContent:Tt["a"],VExpansionPanelHeader:It["a"],VExpansionPanels:Dt["a"],VImg:h["a"],VList:b["a"],VListItem:C["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:I["a"],VTab:bt["a"],VTabItem:Ct["a"],VTabs:_t["a"],VTabsItems:yt["a"],VTabsSlider:xt["a"]});var Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inward"},[i("v-tabs",{staticClass:"mb-16 medium",attrs:{"center-active":"","show-arrows":"",color:"#D40A0A"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tabs-slider",{attrs:{color:"#D40A0A"}}),i("v-tab",[t._v("Quality")]),i("v-tab",[t._v("HSE")]),i("v-tab",[t._v("Certificates")])],1),i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab-item",[i("div",{staticClass:"t-h3 bold"},[t._v("Quality Policy")]),i("div",{staticClass:"t-h4 medium pt-8"},[t._v("The Company is committed to provide products and services in a quality and professional manner that comply with the requirements to achieve customer satisfaction.")]),i("div",{staticClass:"t-h4 medium pt-8"},[t._v("The Company shall continually improve its effectiveness through developing, implementing, and maintaining the Quality Management System (QMS) at all relevant functions and levels within the Company that meets the requirements of API Specification Q1 and ISO 9001 Standard.")])]),i("v-tab-item",[i("div",{staticClass:"t-h3 bold"},[t._v("Occupational Health and Safety (OHS) Policy")]),i("div",{staticClass:"t-h4 medium pt-8"},[t._v("The Company's Health and Safety Policy is to perform work in a manner that protects the health and safety of employees and other interested party within the workplace and prevent property damage. The health and safety are the priority considerations in planning and execution of all work activities, which shall include health and safety training and education for all employees. It is also the Policy of the Company to comply with OHSAS 18001 standard and the relevant Health and Safety laws, regulations and other applicable requirements.")]),i("div",{staticClass:"t-h3 bold pt-8"},[t._v("Environmental Policy")]),i("div",{staticClass:"t-h4 medium pt-8"},[t._v("The Company shall operate in an environmentally responsible manner, which minimizes environmental impact through continual improvement in prevention of pollution, environmental aspects and compliance with ISO 14001 requirements, legal and other applicable requirements that the Company subscribes. We are committed to communicate this Policy to all employees working for or on behalf of the Company on this Policy, train and educate all employees on all relevant environmental issues and to ensure that this Policy stay relevant and is made available to all interested parties.")])]),i("v-tab-item",[i("v-row",{staticClass:"px-2"},t._l(14,(function(t){return i("v-col",{key:t,staticClass:"pa-2 pa-md-6",attrs:{cols:"6",md:"4"}},[i("v-card",{staticClass:"pa-md-6 pa-2",attrs:{elevation:"12"}},[i("v-img",{attrs:{width:"100%",contain:"",src:a("4d6f")("./cert-"+t+".jpg")}})],1)],1)})),1)],1)],1),i("div",{staticClass:"mt-16"})],1)},Nt=[],Bt={data:function(){return{tab:null}},mounted:function(){this.tab=this.$route.params.tab}},Ht=Bt,Ft=Object(p["a"])(Ht,Rt,Nt,!1,null,null,null),Ut=Ft.exports;m()(Ft,{VCard:Q["a"],VCol:T["a"],VImg:h["a"],VRow:I["a"],VTab:bt["a"],VTabItem:Ct["a"],VTabs:_t["a"],VTabsItems:yt["a"],VTabsSlider:xt["a"]});var Wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inward my-16"},[i("v-carousel",{attrs:{"hide-delimiters":"",height:"95vh"}},t._l(6,(function(t){return i("v-carousel-item",{key:t,attrs:{src:a("fd6e")("./media-"+t+".jpg")}})})),1)],1)},qt=[],$t={},zt=Object(p["a"])($t,Wt,qt,!1,null,null,null),Qt=zt.exports;m()(zt,{VCarousel:G["a"],VCarouselItem:J["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inward my-16"},[a("div",{staticClass:"t-h4 bold"},[t._v("View or Download Files")]),a("v-list",t._l(t.files,(function(e,i){return a("v-list-item",{key:i},[a("router-link",{attrs:{to:"/resources/files/"+e.link}},[t._v(t._s(e.name))])],1)})),1)],1)},Jt=[],Kt={data:function(){return{files:[{name:"2311.002 Services",link:"2311.002_Services.pdf"},{name:"2311.003 MPD Services",link:"2311.003_MPD_Services.pdf"},{name:"2311.004 Below Tension Ring",link:"2311.004_Below_Tension_Ring.pdf"},{name:"2311.005 Above Tension Ring",link:"2311.005_Above_Tension_Ring.pdf"},{name:"2311.006 Surface Stack Solution",link:"2311.006_Surface_Stack_Solution.pdf"},{name:"2311.007 Single Element",link:"2311.007_Single_Element.pdf"},{name:"2311.008 Riser System Solution",link:"2311.008_Riser_System_Solution.pdf"}]}}},Yt=Kt,Xt=Object(p["a"])(Yt,Gt,Jt,!1,null,null,null),Zt=Xt.exports;m()(Xt,{VList:b["a"],VListItem:C["a"]});var te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inward my-16"},[i("v-img",{attrs:{src:a("8ac9")}}),i("div",{staticClass:"t-h4 medium pt-8"},[t._v("At RMES, we offer exciting career opportunities. We welcome talents of diverse backgrounds and cultures to join our team. Maximize your potential, expand your horizons and tackle new challenges when you join us.")]),i("div",{staticClass:"t-h4 medium pt-8"},[t._v("We offer opportunities to enhance your career across a full range of exciting roles.")]),t._m(0)],1)},ee=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"t-h4 bold pt-8"},[t._v("Interested candidates, please email a detailed CV to "),a("a",{attrs:{href:"mailto:recruitment@rmes.com.sg"}},[t._v("recruitment@rmes.com.sg")]),t._v(".")])}],ae={},ie=Object(p["a"])(ae,te,ee,!1,null,null,null),ne=ie.exports;m()(ie,{VImg:h["a"]});var se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inward my-16"},[a("div",{staticClass:"t-h3 bold"},[t._v("WE WANT TO HEAR FROM YOU")]),a("div",{staticClass:"t-h4 medium"},[t._v("Thank you for visiting our website")]),a("div",{staticClass:"t-h3 bold mt-16"},[t._v("No. 16 Pioneer Sector 1, Singapore 628427")]),a("v-btn",{staticClass:"mt-6",attrs:{tile:"",depressed:"","x-large":""}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-phone-classic")]),a("div",{staticClass:"medium"},[t._v("Tel: +65 6862 3781")])],1),a("br"),a("v-btn",{staticClass:"mt-6",attrs:{tile:"",depressed:"","x-large":""}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-fax")]),a("div",{staticClass:"medium"},[t._v("Fax: +65 6862 3783")])],1),a("div",{staticClass:"t-h3 bold mt-16"},[t._v("Email List")]),a("v-list",t._l(t.emails,(function(e,i){return a("v-list-item",{key:i},[a("div",{staticClass:"t-h4 medium"},[a("a",{attrs:{href:"mailto:"+e}},[t._v(t._s(e))])])])})),1)],1)},re=[],oe={data:function(){return{emails:["sales@rmes.com.sg","recruitment@rmes.com.sg","qhse@rmes.com.sg"]}}},ce=oe,le=Object(p["a"])(ce,se,re,!1,null,null,null),pe=le.exports;m()(le,{VBtn:f["a"],VIcon:g["a"],VList:b["a"],VListItem:C["a"]});var ue=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},me=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inward my-16"},[a("div",{staticClass:"t-h3 bold"},[t._v("Privacy Policy")]),a("div",{staticClass:"t-h4 medium"},[t._v("Updated November 21, 2016")]),a("div",{staticClass:"t-h4 medium mt-6"},[t._v('The following details our Privacy Policy ("Policy") for this site and describes the types of information we may gather from those users visiting www.rmes.com.sg (“Site”) and how we use such information. We understand the importance of privacy and treat all information received in a responsible manner. This Policy applies to all features of RMES ("Service") on the Site. By accessing the Site, you agree to be bound by the Policy. If you do not agree to the terms of this Policy, please do not use the Site. This Policy may change eventually and each new version applies accordingly.')]),a("div",{staticClass:"t-h4 medium mt-6"},[t._v("The Site may collect personal information, if you agree to provide, such as name and email address.")]),a("div",{staticClass:"t-h4 medium mt-6"},[t._v("RMES will never share, rent, sell or disclose personal information to third parties.")]),a("div",{staticClass:"t-h4 medium mt-6"},[t._v("We take appropriate security measures to protect against unauthorized access or unauthorized alteration, disclosure or destruction of data. These include strictly encryption from transmission to storing of data, and internal reviews of our data collection.")]),a("div",{staticClass:"t-h4 medium mt-6"},[t._v("If you have any question about our policy, please don't hesitate to contact us.")])])}],de={},ve=Object(p["a"])(de,ue,me,!1,null,null,null),fe=ve.exports;i["a"].use(U["a"]);var ge=[{path:"/",name:"Home",component:Y},{path:"/about-us",name:"AboutUs",component:kt},{path:"/our-business",name:"OurBusiness",component:Lt,props:!0},{path:"/qhse",name:"QHSE",component:Ut,props:!0},{path:"/media",name:"Media",component:Qt},{path:"/resources",name:"Resources",component:Zt},{path:"/career-opportunities",name:"CareerOpportunities",component:ne},{path:"/contact-us",name:"ContactUs",component:pe},{path:"/privacy",name:"Privacy",component:fe}],he=new U["a"]({scrollBehavior:function(){return{x:0,y:0}},mode:"history",base:"/",routes:ge}),be=he,Ce=a("f309");i["a"].use(Ce["a"]);var _e=new Ce["a"]({});a("150b");i["a"].config.productionTip=!1,new i["a"]({router:be,vuetify:_e,render:function(t){return t(F)}}).$mount("#app")},5927:function(t,e,a){t.exports=a.p+"img/media-1.3b5d2524.jpg"},"5c04":function(t,e,a){t.exports=a.p+"img/client-2.2018e8ff.png"},"5cb2":function(t,e,a){t.exports=a.p+"img/rental-1.ee2abcd5.jpg"},"6b21":function(t,e,a){var i={"./client-1.png":"f557","./client-2.png":"5c04","./client-3.png":"fd8b","./client-4.png":"8e61","./client-5.png":"7aca"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="6b21"},"6b7e":function(t,e,a){t.exports=a.p+"img/cert-2.dbc151ce.jpg"},"716c":function(t,e,a){t.exports=a.p+"img/profile-1.12ef7482.jpg"},"750d":function(t,e,a){t.exports=a.p+"img/cert-5.a68b60af.jpg"},7757:function(t,e,a){t.exports=a.p+"img/cert-14.d80138e9.jpg"},"7aca":function(t,e,a){t.exports=a.p+"img/client-5.8dc1a177.png"},"7ad3":function(t,e,a){t.exports=a.p+"img/media-3.9440570a.jpg"},"7c35":function(t,e,a){t.exports=a.p+"img/about-us-3.5fcc40d7.jpg"},"811d":function(t,e,a){t.exports=a.p+"img/profile-9.396cc34b.jpg"},8192:function(t,e,a){var i={"./products-1.jpg":"44a1","./products-2.jpg":"53fc","./products-3.jpg":"8fd2","./products-4.jpg":"3c1a","./products-5.jpg":"b1da","./products-6.jpg":"d8aa"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="8192"},"84ef":function(t,e,a){t.exports=a.p+"img/about-us-2.4ffc4493.jpg"},"8ac9":function(t,e,a){t.exports=a.p+"img/career-1.590965c2.jpg"},"8e21":function(t,e,a){t.exports=a.p+"img/cert-4.1b2bbd5c.jpg"},"8e61":function(t,e,a){t.exports=a.p+"img/client-4.a389821e.png"},"8fd2":function(t,e,a){t.exports=a.p+"img/products-3.5c564109.jpg"},9657:function(t,e,a){t.exports=a.p+"img/mpd-2.d40dffa8.png"},"9ef5":function(t,e,a){t.exports=a.p+"img/media-2.b74111f6.jpg"},"9fca":function(t,e,a){t.exports=a.p+"img/profile-5.4ac29b94.jpg"},a6b3:function(t,e,a){t.exports=a.p+"img/cert-1.9cc3d7ce.jpg"},ad9c:function(t,e,a){var i={"./profile-1.jpg":"716c","./profile-10.jpg":"f897","./profile-2.jpg":"e350","./profile-3.jpg":"50ff","./profile-4.jpg":"db0a","./profile-5.jpg":"9fca","./profile-6.jpg":"b763","./profile-7.jpg":"afd8","./profile-8.jpg":"1793","./profile-9.jpg":"811d"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="ad9c"},ae8c:function(t,e,a){t.exports=a.p+"img/cert-13.0eb640d5.jpg"},afd8:function(t,e,a){t.exports=a.p+"img/profile-7.9226a692.jpg"},b0dd:function(t,e,a){t.exports=a.p+"img/slide-3.3503ab9c.jpg"},b184:function(t,e,a){t.exports=a.p+"img/slide-2.57d29981.jpg"},b1da:function(t,e,a){t.exports=a.p+"img/products-5.c655c0be.jpg"},b34e:function(t,e,a){var i={"./mpd-3.jpg":"4463","./mpd-4.jpg":"0358","./mpd-5.jpg":"0bdb","./mpd-6.jpg":"ce43"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="b34e"},b527:function(t,e,a){},b5d3:function(t,e,a){t.exports=a.p+"img/cert-10.e51cfcd4.jpg"},b763:function(t,e,a){t.exports=a.p+"img/profile-6.f9aedb2b.jpg"},c055:function(t,e,a){t.exports=a.p+"img/cert-12.ee33c8bd.jpg"},ca0f:function(t,e,a){t.exports=a.p+"img/cert-9.728c733b.jpg"},ce43:function(t,e,a){t.exports=a.p+"img/mpd-6.f5cfa523.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.1fcbe704.png"},d188:function(t,e,a){t.exports=a.p+"img/media-5.39034aa5.jpg"},d3f9:function(t,e,a){},d8aa:function(t,e,a){t.exports=a.p+"img/products-6.79765e0c.jpg"},db0a:function(t,e,a){t.exports=a.p+"img/profile-4.b32e82b6.jpg"},dc5f:function(t,e,a){t.exports=a.p+"img/cert-8.0308ad93.jpg"},e350:function(t,e,a){t.exports=a.p+"img/profile-2.e12b2c87.jpg"},e5a2:function(t,e,a){t.exports=a.p+"img/about-us-5.e49f6c1b.jpg"},f3a7:function(t,e,a){t.exports=a.p+"img/about-us-4.96930312.jpg"},f557:function(t,e,a){t.exports=a.p+"img/client-1.621773df.png"},f6b0:function(t,e,a){"use strict";a("d3f9")},f897:function(t,e,a){t.exports=a.p+"img/profile-10.d72cbe8c.jpg"},fca5:function(t,e,a){t.exports=a.p+"img/cert-6.e6b6ff92.jpg"},fcd8:function(t,e,a){t.exports=a.p+"img/media-4.aa67e07b.jpg"},fd6e:function(t,e,a){var i={"./media-1.jpg":"5927","./media-2.jpg":"9ef5","./media-3.jpg":"7ad3","./media-4.jpg":"fcd8","./media-5.jpg":"d188","./media-6.jpg":"299a"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=s,t.exports=n,n.id="fd6e"},fd8b:function(t,e,a){t.exports=a.p+"img/client-3.97aaffd4.png"}});
//# sourceMappingURL=app.e773cac6.js.map