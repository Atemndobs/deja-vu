(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8,11,12,13,14,15,16],{"8f67":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("q-page",{staticClass:"flex flex-center"},[n("q-card",{staticStyle:{width:"400px",padding:"50px"},attrs:{square:""}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v("\n        "+t._s(t.lang.auth.password.forgot.header)+"\n      ")])]),n("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[n("q-card-section",[n("q-input",{attrs:{id:"email",type:"text",label:t.lang.auth.email,rules:t.validations["email"],"lazy-rules":"",autofocus:""},model:{value:t.data.email,callback:function(a){t.$set(t.data,"email","string"===typeof a?a.trim():a)},expression:"data.email"}})],1),n("q-card-actions",[n("q-btn",{attrs:{label:t.lang.auth.submit,color:"primary",loading:t.loading,type:"submit"}})],1)],1)],1)],1)},i=[],o=(n("d3b7"),n("e6cf"),n("a79d"),n("ded3")),s=n.n(o),r=n("edd5"),u={name:"PasswordForgot",data:function(){var t=this;return{lang:{auth:{}},data:{email:""},loading:!1,validations:{email:[function(a){return!!a||t.lang.auth.validations.required},function(a){return Object(r["a"])(a)||t.lang.auth.validations.email}]}}},mounted:function(){this.$auth.check()&&this.$router.push("/account")},watch:{"$q.lang.isoName":function(t){this.__setupLang()}},beforeMount:function(){this.__setupLang()},methods:{__setupLang:function(){var t,a=this.$q.lang.isoName||"en-us";try{t=n("a0ca")("./".concat(a))}catch(e){}void 0!==t&&(this.lang.auth=s()({},t.default.auth))},onSubmit:function(){var t=this;this.loading=!0,this.$auth.passwordForgot(this.data).then((function(a){t.$q.dialog({message:t.lang.auth.password.forgot.checkEmail}).onOk((function(){t.$router.push("/login")}))})).catch((function(a){t.$q.dialog({message:t.lang.auth.password.forgot.unknownEmail}),console.error(a)})).finally((function(){t.loading=!1}))}}},l=u,c=n("2877"),d=Object(c["a"])(l,e,i,!1,null,null,null);a["default"]=d.exports},a0ca:function(t,a,n){var e={"./en-us":"feb4","./en-us.js":"feb4","./nl":"524e","./nl.js":"524e","./pt-br":"bffb","./pt-br.js":"bffb","./vi":"f303","./vi.js":"f303"};function i(t){var a=o(t);return n(a)}function o(t){if(!n.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}i.keys=function(){return Object.keys(e)},i.resolve=o,t.exports=i,i.id="a0ca"}}]);