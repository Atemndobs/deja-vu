(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10,15,16,17,18,19,20],{a0ca:function(a,e,t){var s={"./en-us":"feb4","./en-us.js":"feb4","./nl":"524e","./nl.js":"524e","./pt-br":"bffb","./pt-br.js":"bffb","./vi":"f303","./vi.js":"f303"};function r(a){var e=n(a);return t(e)}function n(a){if(!t.o(s,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return s[a]}r.keys=function(){return Object.keys(s)},r.resolve=n,a.exports=r,r.id="a0ca"},e37c:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"flex flex-center"},[t("q-card",{staticStyle:{width:"400px",padding:"50px"},attrs:{square:""}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[a._v("\n          "+a._s(a.lang.auth.login.login)+"\n        ")])]),t("q-form",{staticClass:"q-gutter-md",on:{submit:a.onSubmit}},[[t("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"300px"}},[t("div",{staticClass:"q-gutter-md"},[t("q-select",{attrs:{options:a.options,label:a.lang.auth.fields.email,rules:a.validations["email"]},model:{value:a.data.body.email,callback:function(e){a.$set(a.data.body,"email","string"===typeof e?e.trim():e)},expression:"data.body.email"}})],1)])],t("q-card-section",[t("q-input",{attrs:{id:"password",type:a.showPassword?"text":"password",label:a.lang.auth.fields.password,rules:a.validations["password"],"lazy-rules":""},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.showPassword?"visibility":"visibility_off"},on:{click:function(e){a.showPassword=!a.showPassword}}})]},proxy:!0}]),model:{value:a.data.body.password,callback:function(e){a.$set(a.data.body,"password",e)},expression:"data.body.password"}}),t("br"),t("q-checkbox",{attrs:{id:"rememberMe",label:a.lang.auth.login.rememberMe},model:{value:a.data.rememberMe,callback:function(e){a.$set(a.data,"rememberMe",e)},expression:"data.rememberMe"}})],1),t("q-card-actions",[t("q-btn",{attrs:{label:a.lang.auth.login.login,color:"primary",loading:a.loading,type:"submit"}})],1)],2),t("router-link",{attrs:{to:"/password/forgot"}},[t("a",[a._v(a._s(a.lang.auth.login.passwordForgot))])]),t("q-card-section",[t("router-link",{attrs:{to:"/verification/resend"}},[t("a",[a._v("resend Verification")])])],1),t("q-card-section",[t("a",[a._v(a._s(a.lang.auth.login.registerMessage)+" ")]),t("q-card-section",{staticClass:"text-center q-pa-sm"},[t("q-btn",{staticClass:"text-grey-6",attrs:{to:"/register"}},[a._v("\n              "+a._s(a.lang.auth.login.register)+"\n            ")])],1)],1)],1)],1)},r=[],n=(t("4160"),t("4fad"),t("d3b7"),t("e6cf"),t("a79d"),t("ac1f"),t("5319"),t("159b"),t("278c")),o=t.n(n),i=t("ded3"),l=t.n(i),d=t("9d46"),c=t("edd5"),u=t("bc3a"),p=t.n(u),g={name:"Login",data:function(){var a=this;return{page:"login",options:[],lang:{auth:{}},data:{body:{email:"bamarktfact@gmail.com",password:"pass1234"},rememberMe:!1,users:[]},loading:!1,validations:{email:[function(e){return!!e||a.lang.auth.validations.required},function(e){return Object(c["a"])(e)||a.lang.auth.validations.email}],username:[function(e){return!!e||a.lang.auth.validations.required}],password:[function(e){return!!e||a.lang.auth.validations.required}]},identifierField:d["http-authentication"].identifierField,showPassword:!1}},watch:{"$q.lang.isoName":function(a){this.__setupLang()}},beforeMount:function(){this.__setupLang()},methods:{__setupLang:function(){var a,e=this.$q.lang.isoName||"en-us";try{a=t("a0ca")("./".concat(e))}catch(s){}void 0!==a&&(this.lang.auth=l()({},a.default.auth))},onSubmit:function(){var a=this;this.loading=!0,this.$auth.login(this.data).then((function(){a.$auth.fetch(),a.$router.replace("/"),a.$store.dispatch("auth/loginCallback")})).catch((function(e){e.response&&(401===e.response.status?(console.log(e.response.data.errors),a.$q.dialog({message:e.response.data.errors.message})):422===e.response.status?(e.response.data.errors.password&&0!==e.response.data.errors.password.length&&a.$q.dialog({message:e.response.data.errors.password[0]}),e.response.data.errors.email&&0!==e.response.data.errors.email.length&&a.$q.dialog({message:e.response.data.errors.email[0]}),e.response.data.errors.username&&0!==e.response.data.errors.username.length?a.$q.dialog({message:e.response.data.errors.username[0]}):a.$q.dialog({message:e.response.data.errors.message})):console.error(e.response))})).finally((function(){a.loading=!1}))},getUsers:function(){var a=this,e="https://atemkeng.com/api/users";p.a.get(e).then((function(e){Object.entries(e.data.data).forEach((function(e){var t=o()(e,2),s=(t[0],t[1]);a.data.users.push(s.email),a.options.push(s.email)}))})).catch((function(a){console.log(a)}))}},mounted:function(){this.getUsers()}},m=g,f=t("2877"),h=Object(f["a"])(m,s,r,!1,null,null,null);e["default"]=h.exports}}]);