(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"7d79":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[r("q-card",{staticClass:"my-card"},[r("q-card-section",[r("q-btn",{attrs:{color:"primary",label:"Get Picture"},on:{click:t.captureImage}}),r("img",{attrs:{src:t.imageSrc}})],1)],1)],1)},n=[],c=(r("96cf"),r("c973")),i=r.n(c),s=r("81c3"),o=s["b"].Camera,u={data:function(){return{imageSrc:""}},methods:{captureImage:function(){var t=this;return i()(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.getPhoto({quality:100,width:400,allowEditing:!0,resultType:s["a"].Uri});case 2:r=e.sent,console.log(r),t.imageSrc=r.webPath;case 5:case"end":return e.stop()}}),e)})))()}}},l=u,m=r("2877"),d=Object(m["a"])(l,a,n,!1,null,null,null);e["default"]=d.exports}}]);