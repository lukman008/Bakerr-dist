(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,v=[];d<s.length;d++)i=s[d],o[i]&&v.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"204b":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bb71"),r=(a("da64"),a("5363"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-content",[a("router-view")],1)],1)}),i=[],s={name:"Bakerr",data:function(){return{}}},l=s,c=a("2877"),u=a("6544"),d=a.n(u),v=a("7496"),p=a("549c"),m=Object(c["a"])(l,r,i,!1,null,null,null),f=m.exports;d()(m,{VApp:v["a"],VContent:p["a"]});var h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[t._l(t.menus,function(e){return[e.heading?a("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[e.heading?a("v-subheader",[t._v("\n              "+t._s(e.heading)+"\n            ")]):t._e()],1),a("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?a("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(a){t.$set(e,"model",a)},expression:"item.model"}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)],1),t._l(e.children,function(e,n){return a("v-list-tile",{key:n,on:{click:function(a){"add"==e.icon&&t.new_sig()}}},[e.icon?a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1):a("v-list-tile-action",[a("v-icon",{attrs:{small:""}},[t._v("mdi-key")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                "+t._s(e.text||e.name)+"\n              ")])],1),"SUPER"===e.type?a("v-list-tile-action",[a("v-icon",{attrs:{small:"",color:"accent"}},[t._v("verified_user")])],1):t._e()],1)})],2):a("v-list-tile",{key:e.text,attrs:{to:e.to}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1)]})],2)],1),a("v-toolbar",{attrs:{app:"",fixed:""}},[a("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("span",{staticClass:"hidden-sm-and-down"},[t._v("Bakerr Pay")])],1),a("v-spacer"),a("v-btn-toggle",{attrs:{block:""},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[a("v-btn",{staticClass:"elevation-0",attrs:{to:"/vendors",block:"",depressed:"",color:"accent",large:"",value:"vendors"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp||"vendors"==t.$route.name,expression:"$vuetify.breakpoint.mdAndUp || $route.name == 'vendors' "}]},[t._v("VENDORS")]),a("v-icon",{attrs:{medium:""}},[t._v("mdi-account-multiple")])],1),a("v-btn",{attrs:{to:"/history",depressed:"",block:"",color:"accent",large:"",value:"center"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp||"history"==t.$route.name,expression:"$vuetify.breakpoint.mdAndUp || $route.name == 'history' "}]},[t._v("PAYMENT HISTORY")]),a("v-icon",{attrs:{medium:""}},[t._v("mdi-history")])],1),a("v-btn",{attrs:{to:"/pay",depressed:"",color:"primary",large:"",value:"justify"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp||"pay"==t.$route.name,expression:"$vuetify.breakpoint.mdAndUp || $route.name == 'pay' "}]},[t._v("PAY AN INVOICE")]),a("v-icon",[t._v("mdi-cash-multiple")])],1)],1)],1),a("v-content",{staticStyle:{padding:"0"}},[t.isLoading?a("v-progress-linear",{attrs:{indeterminate:"",color:"accent"}}):t._e(),t.hasLoaded?a("router-view",{attrs:{payments:t.payments,vendors:t.vendors},on:{reload:function(e){return t.getSignatories()}}}):t._e(),t.isLoading||t.hasLoaded?t._e():a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",layout:"",wrap:""}},[a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[a("v-icon",{attrs:{size:"144"}},[t._v("mdi-server-remove")])],1),a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[a("p",{staticClass:"subheading",staticStyle:{"text-align":"center"}},[t._v("\n                A network error occured, please try again\n              ")])]),a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[a("v-btn",{attrs:{color:"pink lighten-1 white--text"},on:{click:function(e){return t.getSignatories()}}},[t._v("RELOAD")])],1)],1)],1)],1),a("v-footer",{staticStyle:{"padding-bottom":"30px"},attrs:{color:"transparent",fixed:"",inset:""}},[a("v-toolbar",{staticClass:"elevation-0",attrs:{color:"transparent","full-width":""}},[a("v-spacer")],1)],1),a("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.newSig,callback:function(e){t.newSig=e},expression:"newSig"}},[a("v-card",{attrs:{dark:""}},[a("v-toolbar",{attrs:{color:"accent"}},[a("v-toolbar-title",[t._v("ADD NEW SIGNATORY")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.newSig=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("NewSig",{ref:"new_signatory"})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{loading:t.isLoading,flat:"",color:"accent"},on:{click:function(e){return t.retrieve()}}},[t._v("\n                  SUBMIT\n                ")])],1)],1)],1),a("v-snackbar",{model:{value:t.showSnack,callback:function(e){t.showSnack=e},expression:"showSnack"}},[t._v("\n    "+t._s(t.snackText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)},b=[],y=(a("7f7f"),a("ac6a"),a("bc3a")),k=a.n(y),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"_form",attrs:{"lazy-validation":""},model:{value:t.validSignatory,callback:function(e){t.validSignatory=e},expression:"validSignatory"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:t.emailRules,color:"accent",label:"Signatory email"},model:{value:t.signatory.email,callback:function(e){t.$set(t.signatory,"email",e)},expression:"signatory.email"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-combobox",{attrs:{color:"accent",items:t.types,label:"Authorization level",required:"",rules:t.reqRules},model:{value:t.signatory.type,callback:function(e){t.$set(t.signatory,"type",e)},expression:"signatory.type"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:t.bvnRules,counter:"11",type:"tel",color:"accent",label:"Bank Verification Number"},model:{value:t.signatory.bvn,callback:function(e){t.$set(t.signatory,"bvn",e)},expression:"signatory.bvn"}})],1)],1)],1)],1)},w=[],_={name:"NewSignatory",methods:{collect:function(){if(this.$refs._form.validate())return this.signatory}},data:function(){return{signatory:{bvn:""},validSignatory:!1,isLoading:!1,accountErrors:[],validAccount:!1,accountLoading:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],reqRules:[function(t){return!!t||"This field is required"}],bvnRules:[function(t){return!!t||"BVN is required"},function(t){return 11==t.length||"BVN must be 11 characters"}],types:["REGULAR","SUPER"]}}},V=_,S=a("2b5d"),T=a("a523"),L=a("0e8f"),A=a("4bd4"),C=a("a722"),$=a("2677"),N=Object(c["a"])(V,x,w,!1,null,null,null),E=N.exports;d()(N,{VCombobox:S["a"],VContainer:T["a"],VFlex:L["a"],VForm:A["a"],VLayout:C["a"],VTextField:$["a"]});var R={components:{NewSig:E},data:function(){return{showSnack:!1,snackText:null,signatory:{},dialog:!1,newSig:!1,drawer:null,hasLoaded:!1,current:null,isLoading:!0,signatories:[],vendors:[],payments:[],menus:[{icon:"mdi-account-key","icon-alt":"mdi-account-key",text:"Signatories",model:!1,children:[{icon:"add",text:"Add new"}]},{icon:"settings",text:"Settings",to:"#"},{icon:"chat_bubble",text:"Send feedback",to:"#"},{icon:"help",text:"Help",to:"#"},{icon:"mdi-logout",text:"Log out",to:"/login"}]}},props:{source:String},methods:{new_sig:function(){this.newSig=!this.newSig},retrieve:function(){var t=this,e=this.$refs.new_signatory.collect();e&&(this.isLoading=!0,k.a.post("https://bakerrpay.herokuapp.com/api/signatories",e).then(function(e){t.isLoading=!1,console.log(e),"OK"==e.data.state?(t.newSig=!1,t.$refs.new_signatory.$refs._form.reset(),t.snackText="New signatory added successfully, signatory should log on to complete registration",t.getSignatories(),t.showSnack=!0):(t.newSig=!1,t.$refs.new_signatory.$refs._form.reset(),t.showSnack=!0,t.snackText=e.data.state)}).catch(function(e){t.showSnack=!0,t.snackText="Oooops! An error occured, try again",t.isLoading=!1,console.log(e)}))},getSignatories:function(){var t=this;this.isLoading=!0,this.hasLoaded=!1,k()({url:"https://bakerrpay.herokuapp.com/api/signatories",method:"GET",withCredentials:!0}).then(function(e){t.isLoading=!1,t.signatories=e.data.payload,t.menus[0].children=[{icon:"add",text:"Add new"}],t.signatories.forEach(function(e){t.menus[0].children.push(e)}),t.getVendors()}).catch(function(e){t.isLoading=!1,403==e.response.status&&t.$router.push({name:"login"})})},getVendors:function(){var t=this;this.isLoading=!0,this.hasLoaded=!1,k()({url:"https://bakerrpay.herokuapp.com/api/vendors",method:"GET",withCredentials:!0}).then(function(e){t.vendors=e.data.payload,t.getPayments()}).catch(function(e){t.isLoading=!1,403==e.response.status&&t.$router.push({name:"login"})})},getPayments:function(){var t=this;this.isLoading=!0,this.hasLoaded=!1,k()({url:"https://bakerrpay.herokuapp.com/api/pay",method:"GET",withCredentials:!0}).then(function(e){t.isLoading=!1,t.payments=e.data.payload,t.hasLoaded=!0}).catch(function(e){t.isLoading=!1,403==e.response.status&&t.$router.push({name:"login"})})}},mounted:function(){this.current=this.$route.name,this.getSignatories()}},B=R,I=(a("8494"),a("8336")),O=a("a609"),P=a("b0af"),q=a("99d9"),j=a("169a"),F=a("553a"),M=a("132d"),D=a("8860"),U=a("56b0"),z=a("ba95"),H=a("40fe"),J=a("5d23"),Y=a("f774"),W=a("8e36"),X=a("2db4"),G=a("9910"),Z=a("e0c7"),Q=a("71d9"),K=a("706c"),tt=a("2a7f"),et=Object(c["a"])(B,g,b,!1,null,"02f361c1",null),at=et.exports;d()(et,{VApp:v["a"],VBtn:I["a"],VBtnToggle:O["a"],VCard:P["a"],VCardActions:q["a"],VCardText:q["b"],VContainer:T["a"],VContent:p["a"],VDialog:j["a"],VFlex:L["a"],VFooter:F["a"],VIcon:M["a"],VLayout:C["a"],VList:D["a"],VListGroup:U["a"],VListTile:z["a"],VListTileAction:H["a"],VListTileContent:J["b"],VListTileTitle:J["d"],VNavigationDrawer:Y["a"],VProgressLinear:W["a"],VSnackbar:X["a"],VSpacer:G["a"],VSubheader:Z["a"],VToolbar:Q["a"],VToolbarSideIcon:K["a"],VToolbarTitle:tt["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"dummy-bg--wrapper",style:{"background-image":"url("+t.bg}}),a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-slide-x-transition",[a("v-form",{ref:"login_form",staticStyle:{height:"100%"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"accent"}},[a("v-toolbar-title",[t._v("Sign in")]),a("v-spacer")],1),a("v-card-text",{staticStyle:{padding:"20px"}},[a("v-form",[a("v-text-field",{attrs:{color:"accent",required:"",rules:t.emailRules,"prepend-icon":"person",name:"login",label:"Email",type:"text"},model:{value:t.auth.email,callback:function(e){t.$set(t.auth,"email",e)},expression:"auth.email"}}),a("v-text-field",{attrs:{color:"accent","prepend-icon":"lock",rules:t.passwordRules,name:"password",label:"Password",id:"password",type:"password"},model:{value:t.auth.password,callback:function(e){t.$set(t.auth,"password",e)},expression:"auth.password"}})],1)],1),a("v-card-actions",{staticStyle:{padding:"20px"}},[a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{to:"/register",flat:"",color:"white"}},[t._v("I'm new here")]),a("v-spacer"),a("v-btn",{attrs:{loading:t.isLoading,color:"accent"},on:{click:function(e){return t.submit()}}},[t._v("Login")])],1)],1)],1)],1)],1),a("v-snackbar",{attrs:{color:"pink lighten-1"},model:{value:t.showSnack,callback:function(e){t.showSnack=e},expression:"showSnack"}},[t._v("\n      "+t._s(t.snackText)+"\n      "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.showSnack=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)],1)],1)],1)},ot=[],rt=a("d68e"),it=a.n(rt),st={methods:{submit:function(){var t=this;this.$refs.login_form.validate(),this.isLoading=!0,k()({url:"https://bakerrpay.herokuapp.com/api/auth/signin",method:"POST",withCredentials:!0,data:this.auth}).then(function(e){console.log(e),"OK"==e.data.state&&t.$router.push({name:"home"})}).catch(function(e){return t.isLoading=!1,401==e.response.status?(t.snackText="Email or password is incorrect",void(t.showSnack=!0)):404==e.response.status?(t.snackText="No user found with this email address",void(t.showSnack=!0)):(t.snackText="Ooooops! A network error occured, please try again",void(t.showSnack=!0))})}},data:function(){return{showSnack:!1,snackText:null,valid:!1,bg:it.a,drawer:null,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}],isLoading:!1,auth:{email:"",password:""}}},props:{source:String}},lt=st,ct=(a("cdad"),a("0789")),ut=Object(c["a"])(lt,nt,ot,!1,null,null,null),dt=ut.exports;d()(ut,{VApp:v["a"],VBtn:I["a"],VCard:P["a"],VCardActions:q["a"],VCardText:q["b"],VContainer:T["a"],VContent:p["a"],VFlex:L["a"],VForm:A["a"],VLayout:C["a"],VSlideXTransition:ct["c"],VSnackbar:X["a"],VSpacer:G["a"],VTextField:$["a"],VToolbar:Q["a"],VToolbarTitle:tt["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"dummy-bg--wrapper",style:{"background-image":"url("+t.bg}}),a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-form",{ref:"reg_form",staticClass:"fill-height",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-slide-x-transition",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"accent"}},[a("v-toolbar-title",[t._v("Register")]),a("v-spacer")],1),a("v-card-text",{staticStyle:{padding:"20px"}},[a("v-form",[a("v-text-field",{attrs:{required:"",rules:t.emailRules,color:"accent","prepend-icon":"mdi-email",name:"email",label:"Email",type:"text"},model:{value:t.signatory.email,callback:function(e){t.$set(t.signatory,"email",e)},expression:"signatory.email"}}),a("v-text-field",{attrs:{required:"",rules:t.bvnRules,color:"accent","prepend-icon":"mdi-radiobox-blank",counter:"11",name:"bvn",label:"Banking Verification Number",type:"tel"},model:{value:t.signatory.bvn,callback:function(e){t.$set(t.signatory,"bvn",e)},expression:"signatory.bvn"}}),a("v-text-field",{attrs:{required:"",rules:t.passwordRules,color:"accent","prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"},model:{value:t.signatory.password,callback:function(e){t.$set(t.signatory,"password",e)},expression:"signatory.password"}}),a("v-text-field",{attrs:{required:"",rules:t.rePasswordRule,color:"accent","prepend-icon":"lock",name:"password",label:"Password again",id:"repassword",type:"password"},model:{value:t.rePassword,callback:function(e){t.rePassword=e},expression:"rePassword"}})],1)],1),a("v-card-actions",{staticStyle:{padding:"20px"}},[a("v-btn",{staticStyle:{"text-transform":"none"},attrs:{to:"/login",flat:"",color:"white"}},[t._v("I already have an account")]),a("v-spacer"),a("v-btn",{attrs:{loading:t.isLoading,color:"accent"},on:{click:function(e){return t.register()}}},[t._v("ACTIVATE")])],1)],1)],1)],1),a("v-snackbar",{attrs:{color:"pink lighten-1"},model:{value:t.showSnack,callback:function(e){t.showSnack=e},expression:"showSnack"}},[t._v("\n      "+t._s(t.snackText)+"\n      "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.showSnack=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)],1)],1)],1)],1)},pt=[],mt={methods:{register:function(){var t=this;this.$refs.reg_form.validate()&&(this.isLoading=!0,k()({url:"https://bakerrpay.herokuapp.com/api/signatories/".concat(this.signatory.bvn,"/activate"),method:"POST",data:this.signatory,withCredentials:!0}).then(function(e){200==e.status?(t.isLoading=!1,t.$router.push({name:"home"})):(t.isLoading=!1,t.snackText="Something went wrong activating your account, please verify your BVN with your supervisor",t.showSnack=!0)}).catch(function(e){t.snackText="Ooooops! A network error occured, please try again",t.showSnack=!0,t.isLoading=!1}))}},data:function(){var t=this;return{valid:!1,bg:it.a,signatory:{bvn:"",password:"",email:""},showSnack:!1,snackText:null,isLoading:!1,passwordRules:[function(t){return!!t||"Password is requred"},function(t){return t.length>=8||"Password must be at least 8 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],rePassword:"",rePasswordRule:[function(t){return!!t||"Passwords don't match"},function(e){return e==t.signatory.password||"Passwords don't match"}],nameRules:[function(t){return!!t||"Name is required"},function(t){return t.length<=10||"Name must be less than 10 characters"}],bvnRules:[function(t){return!!t||"BVN is required"},function(t){return 11==t.length||"BVN must be 11 characters"}]}},props:{source:String}},ft=mt,ht=(a("cea9"),Object(c["a"])(ft,vt,pt,!1,null,null,null)),gt=ht.exports;d()(ht,{VApp:v["a"],VBtn:I["a"],VCard:P["a"],VCardActions:q["a"],VCardText:q["b"],VContainer:T["a"],VContent:p["a"],VFlex:L["a"],VForm:A["a"],VLayout:C["a"],VSlideXTransition:ct["c"],VSnackbar:X["a"],VSpacer:G["a"],VTextField:$["a"],VToolbar:Q["a"],VToolbarTitle:tt["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-x-transition",[a("v-container",{attrs:{fluid:""}},[a("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-tooltip",{attrs:{slot:"activator",top:""},slot:"activator"},[a("v-btn",{attrs:{slot:"activator",color:"pink lighten-1 white--text",dark:"",small:"",fixed:"",bottom:"",right:"",large:"",fab:""},slot:"activator"},[a("v-icon",[t._v("add")])],1),a("span",[t._v("Add a vendor")])],1),a("v-card",[a("v-toolbar",{attrs:{color:"accent"}},[a("v-toolbar-title",[t._v("ADD NEW VENDOR")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.showDialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("NewVendor",{ref:"new_vendor",attrs:{preset:t.current}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{loading:t.isLoading,flat:"",color:"accent"},on:{click:function(e){return t.retrieve()}}},[t._v("\n                SUBMIT\n              ")])],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.vendors,function(e){return a("v-flex",{key:e.vendor_name,staticStyle:{padding:"10px"},attrs:{xs12:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",{staticStyle:{"margin-top":"10px"},attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-icon",[t._v("mdi-account-box")])],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.vendor_name)}}),a("v-list-tile-sub-title",{staticClass:"overflow-hidden caption"},[t._v(t._s(e.description))]),a("v-list-tile-sub-title",[a("v-icon",{attrs:{small:""}},[t._v("mdi-bank")]),a("strong",[t._v(t._s(" "+e.bank_name+" - "+t.encode(e.account_number)))])],1)],1),a("v-list-tile-action",[a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{attrs:{slot:"activator",color:"white--text",icon:""},slot:"activator"},[a("v-icon",[t._v("mdi-dots-vertical")])],1),a("v-list",t._l(t.actions,function(n,o){return a("v-list-tile",{key:o,on:{click:function(t){return n.action(e._id)}}},[a("v-list-tile-avatar",[a("v-icon",{attrs:{small:""}},[t._v(t._s(n.icon))])],1),a("v-list-tile-title",[t._v(t._s(n.title))])],1)}),1)],1)],1)],1)],1)],1)}),1),a("v-snackbar",{attrs:{color:"pink lighten-1"},model:{value:t.showSnack,callback:function(e){t.showSnack=e},expression:"showSnack"}},[t._v("\n  "+t._s(t.snackText)+"\n  "),a("v-btn",{attrs:{dark:"",flat:"",left:""},on:{click:function(e){t.showSnack=!1}}},[t._v("\n    Close\n  ")])],1)],1)],1)},yt=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"_form",attrs:{"lazy-validation":""},model:{value:t.validVendor,callback:function(e){t.validVendor=e},expression:"validVendor"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:t.reqRules,color:"accent",label:"Vendor name"},model:{value:t.vendor.vendor_name,callback:function(e){t.$set(t.vendor,"vendor_name",e)},expression:"vendor.vendor_name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:t.emailRules,color:"accent",label:"Vendor email"},model:{value:t.vendor.email,callback:function(e){t.$set(t.vendor,"email",e)},expression:"vendor.email"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-combobox",{attrs:{color:"accent",items:t.banks,label:"Bank name",required:"",rules:t.reqRules},on:{change:function(e){return t.resolve()}},model:{value:t.vendor.bank,callback:function(e){t.$set(t.vendor,"bank",e)},expression:"vendor.bank"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{rules:t.acctRules,counter:"10",error:!t.validAccount,loading:t.accountLoading,"error-messages":t.accountErrors,hint:t.vendor.account_name,"persistent-hint":"",disabled:null==t.vendor.bank,color:"accent",label:"Account Number"},on:{keyup:function(e){return t.resolve()}},model:{value:t.vendor.account_number,callback:function(e){t.$set(t.vendor,"account_number",e)},expression:"vendor.account_number"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{rules:t.reqRules,color:"accent",hint:"Other details about this vendor, services provided, etc",label:"Description"},model:{value:t.vendor.description,callback:function(e){t.$set(t.vendor,"description",e)},expression:"vendor.description"}})],1)],1)],1)],1)},xt=[],wt={name:"NewVendor",props:{preset:{type:Object,required:!1}},methods:{collect:function(){if(this.$refs._form.validate())return this.vendor},resolve:function(){var t=this;if(this.vendor.account_name=null,this.validAccount=!1,this.accountErrors=[],null!=this.vendor.account_number&&!(this.vendor.account_number.length<10)){if(this.vendor.account_number.length<10)return this.validAccount=!1,void(this.accountErrors=["Invalid NUBAN account number"]);this.accountLoading=!0,k.a.get("https://bakerrpay.herokuapp.com/api/meta/resolve_account/".concat(this.vendor.account_number,"/").concat(this.vendor.bank.value)).then(function(e){t.accountErrors=[],t.validAccount=!0,t.vendor.account_name=e.data.payload.account_name,t.accountLoading=!1}).catch(function(e){t.validAccount=!1,t.accountLoading=!1,400==e.response.status?t.accountErrors=["Invalid NUBAN account number"]:t.accountErrors=["Couldn't resolve account number, try again"]})}}},watch:{preset:function(t,e){this.vendor=t}},data:function(){return{vendor:{account_number:null},validVendor:!1,isLoading:!1,accountErrors:[],validAccount:!1,accountLoading:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],reqRules:[function(t){return!!t||"This field is required"}],acctRules:[function(t){return!!t||"Invalid NUBAN account number"}],banks:[{text:"Access Bank",value:"044"},{text:"Citibank",value:"023"},{text:"Diamond Bank",value:"063"},{text:"Dynamic Standard Bank",value:""},{text:"Ecobank Nigeria",value:"050"},{text:"Fidelity Bank Nigeria",value:"070"},{text:"First Bank of Nigeria",value:"011"},{text:"First City Monument Bank",value:"214"},{text:"Guaranty Trust Bank",value:"058"},{text:"Heritage Bank Plc",value:"030"},{text:"Jaiz Bank",value:"301"},{text:"Keystone Bank Limited",value:"082"},{text:"Providus Bank Plc",value:"101"},{text:"Polaris Bank",value:"076"},{text:"Stanbic IBTC Bank Nigeria Limited",value:"221"},{text:"Standard Chartered Bank",value:"068"},{text:"Sterling Bank",value:"232"},{text:"Suntrust Bank Nigeria Limited",value:"100"},{text:"Union Bank of Nigeria",value:"032"},{text:"United Bank for Africa",value:"033"},{text:"Unity Bank Plc",value:"215"},{text:"Wema Bank",value:"035"},{text:"Zenith Bank",value:"057"}]}}},_t=wt,Vt=a("a844"),St=Object(c["a"])(_t,kt,xt,!1,null,null,null),Tt=St.exports;d()(St,{VCombobox:S["a"],VContainer:T["a"],VFlex:L["a"],VForm:A["a"],VLayout:C["a"],VTextField:$["a"],VTextarea:Vt["a"]});var Lt={props:{vendors:{type:Array,required:!0}},components:{NewVendor:Tt},methods:{encode:function(t){if(t)return t.slice(0,3)+"******"+t.slice(t.length-3)},removeVend:function(t){alert("remove")},editVend:function(t){var e=this;this.vendors.forEach(function(a){a._id==t&&(e.current=a)}),this.showDialog=!0},blacklist:function(t){alert("Blacklist")},retrieve:function(){var t=this,e=this.$refs.new_vendor.collect();if(e&&e.account_name){try{e.bank_code=e.bank.value,e.bank_name=e.bank.text,delete e.bank}catch(a){}this.isLoading=!0,e.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJzaWctMjBiNzFqZWhqc2hkazF5cyIsImVtYWlsIjoibWVAbHVxbWFuLmNvIiwiYnZuIjoyMjE3NzQ4NjQzOCwidHlwZSI6IlNVUEVSIiwic3RhdHVzIjoiQUNUSVZFIiwibmFtZSI6IkJFTExPIExVS01BTiIsInBhc3N3b3JkIjoiJDJiJDEwJDQxUUtROG1HSTMwc0djbjFaY3dXOWVCMHRTVVk0ZzdYQzlUYW1tVXZoYXA0dmFEbUNRMkxtIiwicGhvbmUiOiIwODA5MTI5MzEzNSIsImlhdCI6MTU1MTAwOTk3MH0.REXOTMlkAM8plV-5-Y3MuHXrVfjAkxeou5okQXDmc38",k.a.post("https://bakerrpay.herokuapp.com/api/vendors",e).then(function(e){t.isLoading=!1,console.log(e),"OK"==e.data.state?(t.showDialog=!1,t.$refs.new_vendor.$refs._form.reset(),t.snackText="New vendor added successfully",t.$emit("reload"),t.showSnack=!0):(t.showDialog=!1,t.$refs.new_vendor.$refs._form.reset(),t.showSnack=!0,t.snackText=e.data.state)}).catch(function(e){t.showSnack=!0,t.snackText="Oooops! An error occured, try again",t.isLoading=!1,console.log(e)})}}},data:function(){return{showDialog:!1,isLoading:!1,snackText:null,showSnack:!1,current:{},actions:[{title:"Remove",icon:"mdi-delete",action:this.removeVend},{title:"Edit",icon:"mdi-pen",action:this.editVend},{title:"Blacklist",icon:"mdi-block-helper",action:this.blacklist}]}}},At=Lt,Ct=a("c954"),$t=a("e449"),Nt=a("3a2f"),Et=Object(c["a"])(At,bt,yt,!1,null,null,null),Rt=Et.exports;d()(Et,{VBtn:I["a"],VCard:P["a"],VCardActions:q["a"],VCardText:q["b"],VContainer:T["a"],VDialog:j["a"],VFlex:L["a"],VIcon:M["a"],VLayout:C["a"],VList:D["a"],VListTile:z["a"],VListTileAction:H["a"],VListTileAvatar:Ct["a"],VListTileContent:J["b"],VListTileSubTitle:J["c"],VListTileTitle:J["d"],VMenu:$t["a"],VSlideXTransition:ct["c"],VSnackbar:X["a"],VSpacer:G["a"],VToolbar:Q["a"],VToolbarTitle:tt["a"],VTooltip:Nt["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-x-transition",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-space-around":"","align-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md7:""}},[a("v-form",{ref:"invoice"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:t.invRules,color:"accent",label:"Invoice number *","append-outer-icon":"mdi-arrow-left-bold"},on:{"click:append-outer":function(e){return t.generateInv()}},model:{value:t.pay.invoice,callback:function(e){t.$set(t.pay,"invoice",e)},expression:"pay.invoice"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{rules:t.reqRules,color:"accent",label:"Who do you want to pay *",items:t.vendors},on:{change:function(e){return t.retrieve()}},scopedSlots:t._u([{key:"item",fn:function(e){return[a("div",[a("v-list-tile",{key:e.item.vendor_name,attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-icon",[t._v("mdi-account-box")])],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.vendor_name)}}),a("v-list-tile-sub-title",[a("v-icon",{attrs:{small:""}},[t._v("mdi-bank")]),a("strong",[t._v(t._s(" "+e.item.bank_name+" - "+t.encode(e.item.account_number)))])],1)],1)],1)],1)]}},{key:"selection",fn:function(e){return[a("div",[a("v-list-tile",{key:e.item.vendor_name,attrs:{avatar:""}},[a("v-list-tile-avatar",[a("v-icon",[t._v("mdi-account-box")])],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.vendor_name)}}),a("v-list-tile-sub-title",[a("v-icon",{attrs:{small:""}},[t._v("mdi-bank")]),a("strong",[t._v(t._s(" "+e.item.bank_name+" - "+t.encode(e.item.account_number)))])],1)],1)],1)],1)]}}]),model:{value:t.pay.vendor,callback:function(e){t.$set(t.pay,"vendor",e)},expression:"pay.vendor"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"How much do you want to pay?",rules:t.amountRules,type:"tel",color:"accent","prepend-icon":"mdi-currency-ngn"},model:{value:t.pay.amount,callback:function(e){t.$set(t.pay,"amount",e)},expression:"pay.amount"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{rules:t.reqRules,color:"accent",counter:"140",label:"What are you paying for? *"},model:{value:t.pay.narration,callback:function(e){t.$set(t.pay,"narration",e)},expression:"pay.narration"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{rules:t.reqRules,color:"accent","item-disabled":["CREDIT/DEBIT CARD"],label:"How do you want to pay",items:t.methods},model:{value:t.pay.source,callback:function(e){t.$set(t.pay,"source",e)},expression:"pay.source"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:t.reqRules,color:"accent",label:"Password",hint:"Authorise payment",name:"password",type:"password"},model:{value:t.pay.password,callback:function(e){t.$set(t.pay,"password",e)},expression:"pay.password"}})],1)],1)],1)],1),a("v-flex",{staticStyle:{"padding-top":"50px"},attrs:{xs12:"","hidden-sm-and-up":""}},[a("v-divider",{attrs:{color:"white"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[t.pay.vendor?a("v-card",{staticStyle:{"margin-bottom":"50px"},attrs:{color:"transparent"}},[a("v-card-text",[a("p",[a("strong",[t._v("RECEPIENT")])]),t._v("Pay "+t._s(t.pay.vendor.vendor_name)),a("br"),a("v-divider",{staticStyle:{"padding-top":"15px"}}),a("p",[a("strong",[t._v("NARRATION")])]),a("span",[t._v(" "+t._s(t.pay.narration)+" ")]),a("p",[a("v-divider")],1),a("p",[t._v("\n                    AMOUNT\n                  ")]),a("v-icon",[t._v("mdi-currency-ngn")]),a("span",{staticClass:"display-2"},[t._v(t._s(t.formatMoney(t.pay.amount))+" ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{loading:t.isLoading,color:"pink lighten-1 white--text"},on:{click:function(e){return t.retrieve()}}},[t._v("\n                   PAY\n                 ")])],1)],1):t._e()],1)],1),a("v-snackbar",{attrs:{color:"pink lighten-1"},model:{value:t.showSnack,callback:function(e){t.showSnack=e},expression:"showSnack"}},[t._v("\n            "+t._s(t.snackText)+"\n            "),a("v-btn",{attrs:{dark:"",flat:"",left:!0},on:{click:function(e){t.snackbar=!1}}},[t._v("\n              Close\n            ")])],1)],1)],1)},It=[],Ot=a("0a0d"),Pt=a.n(Ot),qt=(a("a481"),a("c5f6"),a("e814")),jt=a.n(qt),Ft=(a("6b54"),{props:{vendors:{type:Array,required:!0},preset:{type:Object,required:!1}},created:function(){var t=this,e=this.$route.params;console.log(e),null!==e.who&&""!==e.who&&this.vendors.forEach(function(a){a._id==e.who&&(t.pay.vendor=a)}),this.pay.amount=e.how_much,this.pay.narration=e.why},data:function(){return{pay:{invoice:"",source:"PAYSTACK BALANCE"},showSnack:!1,snackText:null,reqRules:[function(t){return!!t||"This field is required"}],invRules:[function(t){return!!t||"This field is required"},function(t){return!isNaN(t)||"Reference must only contain numbers"}],isLoading:!1,amountRules:[function(t){return!!t||"Amount is required"},function(t){return!isNaN(t)||"Invalid amount"}],methods:["PAYSTACK BALANCE"]}},methods:{formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",r=jt()(t=Math.abs(Number(t)||0).toFixed(e)).toString(),i=r.length>3?r.length%3:0;return o+(i?r.substr(0,i)+n:"")+r.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+n)+(e?a+Math.abs(t-r).toFixed(e).slice(2):"")}catch(s){console.log(s)}},encode:function(t){return t.slice(0,3)+"******"+t.slice(t.length-3)},generateInv:function(){console.log("---------------"),this.pay.invoice=Pt()()},retrieve:function(){var t=this;this.$refs.invoice.validate()&&(this.isLoading=!0,k.a.post("https://bakerrpay.herokuapp.com/api/pay",this.pay,{withCredentials:!0}).then(function(e){t.isLoading=!1,console.log(e.data),t.showSnack=!0,t.snackText="SUCCESS: The transfer has been queued. ",setTimeout(function(){e.data.payload.status&&(t.$emit("reload"),t.$router.push({name:"history"}))},3e3)}).catch(function(e){switch(t.isLoading=!1,t.showSnack=!0,console.log(e.response),e.response.status){case 403:t.snackText="Payment Authorization failed.";break;case 400:t.snackText="Something went wrong with your request, please try again.";break;case"":t.snackText="An error occured, please try again";default:t.snackText=e.response.data.payload.message;break}}))}}}),Mt=Ft,Dt=a("ce7e"),Ut=a("b56d"),zt=Object(c["a"])(Mt,Bt,It,!1,null,null,null),Ht=zt.exports;d()(zt,{VBtn:I["a"],VCard:P["a"],VCardActions:q["a"],VCardText:q["b"],VContainer:T["a"],VDivider:Dt["a"],VFlex:L["a"],VForm:A["a"],VIcon:M["a"],VLayout:C["a"],VListTile:z["a"],VListTileAvatar:Ct["a"],VListTileContent:J["b"],VListTileSubTitle:J["c"],VListTileTitle:J["d"],VSelect:Ut["a"],VSlideXTransition:ct["c"],VSnackbar:X["a"],VSpacer:G["a"],VTextField:$["a"],VTextarea:Vt["a"]});var Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"full-width",attrs:{fluid:""}},[a("v-layout",{attrs:{row:"","justify-start":"","align-start":"",wrap:""}},t._l(t.payments,function(e){return a("v-flex",{key:e._id,staticStyle:{padding:"10px"},attrs:{xs12:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",[a("v-list-tile-avatar",{attrs:{color:"accent"}},[a("v-btn",{attrs:{icon:""},on:{click:function(a){return t.payAgain(e.vendor._id,e.amount,e.narration)}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-redo-variant")])],1)],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"title white--text"},[t._v(t._s("     "+e.vendor.vendor_name))]),a("v-list-tile-sub-title",{attrs:{color:"white--text"}},[t._v(t._s(e.narration))]),a("v-list-tile-sub-title",{staticClass:"subheading white--text"},[a("v-icon",[t._v("mdi-currency-ngn")]),t._v(t._s(t.formatMoney(e.amount)))],1)],1),a("v-list-tile-action",[a("v-list-tile-action-text",[t._v("\n                        "+t._s(e.createdOn.slice(0,10))+"\n                    ")]),a("v-list-tile-action-text",[t._v("\n                      "+t._s(e.signatory.name)+"\n                    ")]),"success"==e.status?a("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle")]):"pending"==e.status.toLowerCase()?a("v-icon",{attrs:{color:"amber"}},[t._v("mdi-radiobox-marked")]):a("v-icon",{attrs:{color:"red"}},[t._v("mdi-close")])],1)],1)],1)],1)}),1)],1)},Yt=[],Wt={props:{payments:{type:Array,required:!0}},data:function(){return{}},methods:{payAgain:function(t,e,a){this.$router.push({name:"pay",params:{who:t,why:a,how_much:e}})},formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",r=jt()(t=Math.abs(Number(t)||0).toFixed(e)).toString(),i=r.length>3?r.length%3:0;return o+(i?r.substr(0,i)+n:"")+r.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+n)+(e?a+Math.abs(t-r).toFixed(e).slice(2):"")}catch(s){console.log(s)}}},mounted:function(){console.log(this.payments)}},Xt=Wt,Gt=Object(c["a"])(Xt,Jt,Yt,!1,null,null,null),Zt=Gt.exports;d()(Gt,{VBtn:I["a"],VContainer:T["a"],VFlex:L["a"],VIcon:M["a"],VLayout:C["a"],VList:D["a"],VListTile:z["a"],VListTileAction:H["a"],VListTileActionText:J["a"],VListTileAvatar:Ct["a"],VListTileContent:J["b"],VListTileSubTitle:J["c"],VListTileTitle:J["d"]}),n["a"].use(h["a"]);var Qt=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:at,redirect:{name:"vendors"},children:[{path:"/vendors",name:"vendors",component:Rt},{path:"/history",name:"history",component:Zt},{path:"/pay/:who?/:how_much?/:why?",name:"pay",component:Ht}]},{path:"/login",name:"login",component:dt},{path:"/register",name:"register",component:gt}]}),Kt=a("9483");Object(Kt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,n["a"].use(o["a"],{iconfont:"mdi",theme:{primary:"#0B141B",secondary:"#004346",accent:"#09BC8A",error:"#ff4d4d"}}),new n["a"]({router:Qt,render:function(t){return t(f)}}).$mount("#app")},"7f24":function(t,e,a){},8494:function(t,e,a){"use strict";var n=a("7f24"),o=a.n(n);o.a},cdad:function(t,e,a){"use strict";var n=a("d8be"),o=a.n(n);o.a},cea9:function(t,e,a){"use strict";var n=a("204b"),o=a.n(n);o.a},d68e:function(t,e,a){t.exports=a.p+"img/bg.03c67f05.png"},d8be:function(t,e,a){}});
//# sourceMappingURL=app.cb7ab184.js.map