(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{326:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("0bee7084",content,!0,{sourceMap:!1})},335:function(t,e,n){"use strict";n(326)},336:function(t,e,n){var o=n(28)(!1);o.push([t.i,".new-comment{text-align:center}.new-comment .contact-form{margin:30px auto;max-width:600px}.new-comment .controls{margin:30px 0}",""]),t.exports=o},351:function(t,e,n){"use strict";n.r(e);n(42),n(33),n(41),n(17),n(64),n(34),n(65);var o=n(26);n(30);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{postId:{type:String,required:!0}},data:function(){return{message:null,comment:{name:"",text:""}}},methods:{onSubmit:function(){var t=this;this.$store.dispatch("addComment",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({postId:this.postId,published:!1},this.comment)).then((function(){t.message="Submited",t.comment.name="",t.comment.text=""})).catch((function(t){return console.log(t)}))}}},m=c,l=(n(335),n(8)),component=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new-comment"},[n("div",{staticClass:"container"},[t.message?n("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),n("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("AppInput",{attrs:{forName:"name"},model:{value:t.comment.name,callback:function(e){t.$set(t.comment,"name",e)},expression:"comment.name"}},[t._v("Name:")]),t._v(" "),n("AppTextArea",{attrs:{forName:"text"},model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}},[t._v("Text:")]),t._v(" "),n("div",{staticClass:"controls"},[n("AppButton",[t._v("Comment!")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);