(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6,11,12,13,14,15,16],{a0ca:function(e,a,t){var s={"./en-us":"feb4","./en-us.js":"feb4","./nl":"524e","./nl.js":"524e","./pt-br":"bffb","./pt-br.js":"bffb","./vi":"f303","./vi.js":"f303"};function r(e){var a=n(e);return t(a)}function n(e){if(!t.o(s,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="a0ca"},e37c:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"flex flex-center"},[t("q-card",{staticStyle:{width:"400px",padding:"50px"},attrs:{square:""}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("\n        "+e._s(e.lang.auth.login.login)+"\n      ")])]),t("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit}},[e._v("\n      "+e._s(e.data.users)+"\n      "),t("q-card-section",["email"===e.identifierField?t("q-input",{attrs:{id:"email",type:"email",label:e.lang.auth.fields.email,rules:e.validations["email"],"lazy-rules":"",autofocus:""},model:{value:e.data.body.email,callback:function(a){e.$set(e.data.body,"email","string"===typeof a?a.trim():a)},expression:"data.body.email"}}):e._e(),"username"===e.identifierField?t("q-input",{attrs:{type:"text",label:e.lang.auth.fields.username,rules:e.validations["username"],"lazy-rules":""},model:{value:e.data.body.username,callback:function(a){e.$set(e.data.body,"username","string"===typeof a?a.trim():a)},expression:"data.body.username"}}):e._e(),t("q-input",{attrs:{id:"password",type:e.showPassword?"text":"password",label:e.lang.auth.fields.password,rules:e.validations["password"],"lazy-rules":""},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.showPassword?"visibility":"visibility_off"},on:{click:function(a){e.showPassword=!e.showPassword}}})]},proxy:!0}]),model:{value:e.data.body.password,callback:function(a){e.$set(e.data.body,"password",a)},expression:"data.body.password"}}),t("br"),t("q-checkbox",{attrs:{id:"rememberMe",label:e.lang.auth.login.rememberMe},model:{value:e.data.rememberMe,callback:function(a){e.$set(e.data,"rememberMe",a)},expression:"data.rememberMe"}})],1),t("q-card-actions",[t("q-btn",{attrs:{label:e.lang.auth.login.login,color:"primary",loading:e.loading,type:"submit"}})],1)],1),t("router-link",{attrs:{to:"/password/forgot"}},[t("a",[e._v(e._s(e.lang.auth.login.passwordForgot))])]),t("q-card-section",[t("router-link",{attrs:{to:"/verification/resend"}},[t("a",[e._v("resend Verification")])])],1),t("q-card-section",[t("a",[e._v(e._s(e.lang.auth.login.registerMessage)+" ")]),t("q-card-section",{staticClass:"text-center q-pa-sm"},[t("q-btn",{staticClass:"text-grey-6",attrs:{to:"/register"}},[e._v("\n            "+e._s(e.lang.auth.login.register)+"\n          ")])],1)],1)],1)],1)},r=[],n=(t("4160"),t("4fad"),t("d3b7"),t("e6cf"),t("a79d"),t("ac1f"),t("5319"),t("159b"),t("278c")),o=t.n(n),i=t("ded3"),l=t.n(i),d=t("9d46"),u=t("edd5"),c=t("bc3a"),p=t.n(c),g={name:"Login",data:function(){var e=this;return{page:"login",lang:{auth:{}},data:{body:{email:"bamarktfact@gmail.com",password:"pass1234"},rememberMe:!1,users:[]},loading:!1,validations:{email:[function(a){return!!a||e.lang.auth.validations.required},function(a){return Object(u["a"])(a)||e.lang.auth.validations.email}],username:[function(a){return!!a||e.lang.auth.validations.required}],password:[function(a){return!!a||e.lang.auth.validations.required}]},identifierField:d["http-authentication"].identifierField,showPassword:!1}},watch:{"$q.lang.isoName":function(e){this.__setupLang()}},beforeMount:function(){this.__setupLang()},methods:{__setupLang:function(){var e,a=this.$q.lang.isoName||"en-us";try{e=t("a0ca")("./".concat(a))}catch(s){}void 0!==e&&(this.lang.auth=l()({},e.default.auth))},onSubmit:function(){var e=this;this.loading=!0,this.$auth.login(this.data).then((function(a){e.$auth.fetch(),e.$router.replace("/"),e.$store.dispatch("auth/loginCallback")})).catch((function(a){a.response&&(401===a.response.status?(console.log(a.response.data.errors),e.$q.dialog({message:a.response.data.errors.message})):422===a.response.status?(a.response.data.errors.password&&0!==a.response.data.errors.password.length&&e.$q.dialog({message:a.response.data.errors.password[0]}),a.response.data.errors.email&&0!==a.response.data.errors.email.length&&e.$q.dialog({message:a.response.data.errors.email[0]}),a.response.data.errors.username&&0!==a.response.data.errors.username.length?e.$q.dialog({message:a.response.data.errors.username[0]}):e.$q.dialog({message:a.response.data.errors.message})):console.error(a.response))})).finally((function(){e.loading=!1}))},getUsers:function(){var e=this,a="https://atemkeng.com/api/users";p.a.get(a).then((function(a){console.log(a),Object.entries(a.data.data).forEach((function(a){var t=o()(a,2),s=(t[0],t[1]);e.data.users.push(s.email)}))})).catch((function(e){console.log(e)}))}},mounted:function(){this.getUsers()}},m=g,f=t("2877"),h=Object(f["a"])(m,s,r,!1,null,null,null);a["default"]=h.exports}}]);