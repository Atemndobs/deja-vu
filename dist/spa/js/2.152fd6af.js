(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"04b7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"constrain q-pa-md"},[a("div",{staticClass:"row q-col-gutter-lg"},[a("div",{staticClass:"col-12 col-sm-8"},[!t.loadingPosts&&t.posts.length?t._l(t.posts,(function(e,o){return a("q-card",{key:e.id,staticClass:"card-post q-mb-md",attrs:{bordered:"",flat:""}},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:s("63d0")}})])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-bold"}),a("q-item-label",{attrs:{caption:""}},[t._v("\n                    "+t._s(e.location)+"\n                  ")])],1)],1),a("q-separator"),a("q-img",{attrs:{src:e.imageUrl}}),a("q-card-section",[a("q-item-section",[a("q-item-label",{staticClass:"text-bold"}),a("q-item-label",{attrs:{caption:""}},[a("q-item",[a("q-item-section",[a("div",[t._v(t._s(e.caption))]),a("div",{staticClass:"text-caption text-grey"},[t._v(t._s(t._f("niceDate")(e.created_at)))])]),a("q-item-section",[a("div",[t._v(t._s(e.new_comment.comment))]),a("div",{staticClass:"text-caption text-grey"},[t._v(t._s(t._f("niceDate")(e.created_at)))])]),a("q-btn",{attrs:{rounded:"",dense:"",label:0===e.likes.likes_count?"":e.likes.likes_count},on:{click:function(s){return t.submitLike(e)}}},[a("q-icon",{attrs:{name:e.likes.icon_class,color:e.likes.is_liked?"red":"",size:"25px",rounded:""}})],1)],1),t._v("\n\n                    "+t._s(t.commentBox)+"\n                    "),a("div",{staticClass:"row justify-center q-ma-md"},[a("q-input",{staticClass:"col col-sm-6",attrs:{label:"add comment",dense:""},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:(s.preventDefault(),t.addComment(t.commentBox,e))}},model:{value:t.commentBox,callback:function(e){t.commentBox=e},expression:"commentBox"}})],1)],1)],1),a("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[a("q-expansion-item",{attrs:{"expand-separator":"",icon:"eva-message-circle-outline",label:"View Comments",caption:e.comments_count+" comments","default-closed":""}},t._l(e.comments,(function(e,s){return a("q-chat-message",{key:e.id,attrs:{name:e.commenter.name,avatar:e.commenter.photo_url,text:[e.comment],size:"6",stamp:t._f("niceDate")(e.created_at),"text-color":"white","bg-color":"primary"}})})),1)],1)],1)],1)})):t.loadingPosts||t.posts.length?[a("div",{staticClass:"q-pa-md"},[a("q-card",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-skeleton",{attrs:{type:"QAvatar",animation:"fade",size:"40"}})],1),a("q-item-section",[a("q-item-label",[a("q-skeleton",{attrs:{type:"text"}})],1),a("q-item-label",{attrs:{caption:""}},[a("q-skeleton",{attrs:{type:"text"}})],1)],1)],1),a("q-skeleton",{attrs:{height:"200px",square:""}}),a("q-card-actions",{staticClass:"q-gutter-md",attrs:{align:"right"}},[a("q-skeleton",{attrs:{type:"QBtn"}}),a("q-skeleton",{attrs:{type:"QBtn"}})],1)],1)],1)]:[a("h5",{staticClass:"text-center text-grey"},[t._v("\n            No POSTS HERE\n          ")])]],2),a("div",{staticClass:"col-4 large-screen-only"},[a("q-item",{staticClass:"fixed"},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{size:"48px"}},[a("img",{attrs:{src:s("63d0")}})])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-bold"},[t._v("atem__ndobs")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                 "+t._s(this.$auth.user()?this.$auth.user().name:"Atemkeng")+"\n              ")])],1)],1)],1)])])},o=[],n=(s("7db0"),s("c975"),s("d81d"),s("26e9"),s("fb6a"),s("b64b"),s("b178")),i=s("bc3a"),c=s.n(i),r=s("5638"),l={name:"Page",data:function(){return{posts:[],commentBox:"",loadingPosts:!1,totalLikes:"",isLiked:!1,reactionType:"eva-heart-outline",messages:{message:"ATEM",sender:"MAN"}}},filters:{niceDate:function(t){return n["c"].formatDate(t,"MMMM D h:mmA")},reverse:function(t){return t.slice().reverse()}},methods:{getPosts:function(){var t=this;this.loadingPosts=!0,this.$axios.get("".concat("http://localhost:8000/api","/posts")).then((function(e){t.posts=e.data.data.reverse();for(var s=function(){t.posts[a].comments=e.data.data[a].comments.reverse();var s=e.data.data[a].reactions;o=Object.keys(s).map((function(t){return s[t]}));var n=o.find((function(s){return s.reacter_id===t.$auth.user().id&&s.reactant_id===e.data.data[a].id}));n&&(t.posts[a].likes.icon_class="eva-heart",t.posts[a].likes.is_liked=!0)},a=0;a<t.posts.length;a++){var o;s()}t.loadingPosts=!1})).catch((function(e){console.log(e),t.$q.dialog({title:"Error",message:"Oops something went wrong, pls contact Atem"}),t.loadingPosts=!1}))},submitLike:function(t){var e=this;if(!this.$auth.check())return this.$q.dialog({message:"You need to Login Before you can Like"}),this.$router.push("/login"),void console.log({Error:"You need to log in to react to a post"});var s=this.$auth.user().id,a="http://localhost:8000/api/posts/like/"+t.id,o={user_id:s,type:"Like",post:t};c.a.post(a,o).then((function(s){var a=e.posts.indexOf(t),o=s.data.data.likes.reaction_type;"Like"===o?(e.posts[a].likes.icon_class="eva-heart",e.posts[a].likes.is_liked=!0):(e.posts[a].likes.icon_class="eva-heart-outline",e.posts[a].likes.is_liked=!1,e.reactionType="eva-heart-outline"),e.posts[a].likes.likes_count=s.data.data.likes.likes_count,console.log(e.posts[a].likes.likes_count)})).catch((function(t){console.log(t)}))},addComment:function(t,e){var s=this;if(console.log("Post Comment"),!this.$auth.check())return this.$q.dialog({message:"You need to Login Before you can Like"}),this.$router.push("/login"),void console.log({Error:"You need to log in to react to a post"});var a=this.$auth.user().id,o="http://localhost:8000/api/posts/comment/"+e.id,n={user_id:a,comment:t,post:e};c.a.post(o,n).then((function(t){var a=s.posts.indexOf(e);s.posts[a].new_comment=t.data.data.new_comment,s.posts[a].comments_count=t.data.data.comments.length,s.posts[a].comments.unshift(t.data.data.new_comment),s.commentBox="",console.log(t.data.data)})).catch((function(t){console.log(t)}))}},created:function(){},mounted:function(){window.Echo=new r["a"]({broadcaster:"pusher",key:"8643c99a8b00ff38c513",cluster:"eu",forceTLS:!0});var t=r["a"].channel("my-channel");t.listen(".my-event",(function(t){alert(JSON.stringify(t))}))}},m=l,d=(s("7e1a"),s("2877")),u=Object(d["a"])(m,a,o,!1,null,"6d029500",null);e["default"]=u.exports},"144a":function(t,e,s){},"63d0":function(t,e,s){t.exports=s.p+"img/avat_atem.79940818.png"},"7e1a":function(t,e,s){"use strict";s("144a")}}]);