(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48e47820"],{"1a91":function(t,e,n){var r=n("8735"),o=n("059b"),c=n("4683"),i=n("5d45"),a=n("ee7c"),f=function(t){if(t&&t.forEach!==i)try{a(t,"forEach",i)}catch(e){t.forEach=i}};for(var u in o)o[u]&&f(r[u]&&r[u].prototype);f(c)},"2a8b":function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},"304d":function(t,e,n){"use strict";var r=n("88d4"),o=n("8735"),c=n("da77"),i=n("e7c5"),a=n("e3f7"),f=n("ce5b"),u=n("9f52"),s=n("3b43"),d=n("84e1"),l=n("9ad2"),b=n("6c75"),p=n("b595"),h=n("97dc"),g=n("bf1f"),m=n("a7b6"),v=n("f7b9"),y=n("25ef"),w=n("ac3c"),O=n("63ef"),j=n("d6be"),S=n("3ffc"),P=n("d9c5"),k=n("b143"),E=n("3580"),x=n("a9c5"),I=n("9bfe"),C=n("ab28"),$=n("f182"),_=n("98fb"),D=n("d94d"),R=n("d78b"),U=n("4b57"),A=n("ef11"),N=n("1b02"),J=n("0684"),L=n("e314"),q=n("8e0c"),F=n("d0ff"),B=n("3cdf"),T=n("a77a"),M=n("2e1d"),Q=n("ef7c"),W=n("34cd").forEach,z=J("hidden"),G="Symbol",H="prototype",K=F("toPrimitive"),V=Q.set,X=Q.getterFor(G),Y=Object[H],Z=o.Symbol,tt=Z&&Z[H],et=o.TypeError,nt=o.QObject,rt=c("JSON","stringify"),ot=$.f,ct=_.f,it=I.f,at=R.f,ft=f([].push),ut=N("symbols"),st=N("op-symbols"),dt=N("string-to-symbol-registry"),lt=N("symbol-to-string-registry"),bt=N("wks"),pt=!nt||!nt[H]||!nt[H].findChild,ht=s&&l((function(){return 7!=k(ct({},"a",{get:function(){return ct(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=ot(Y,e);r&&delete Y[e],ct(t,e,n),r&&t!==Y&&ct(Y,e,r)}:ct,gt=function(t,e){var n=ut[t]=k(tt);return V(n,{type:G,tag:t,description:e}),s||(n.description=e),n},mt=function(t,e,n){t===Y&&mt(st,e,n),y(t);var r=j(e);return y(n),b(ut,r)?(n.enumerable?(b(t,z)&&t[z][r]&&(t[z][r]=!1),n=k(n,{enumerable:P(0,!1)})):(b(t,z)||ct(t,z,P(1,{})),t[z][r]=!0),ht(t,r,n)):ct(t,r,n)},vt=function(t,e){y(t);var n=O(e),r=E(n).concat(St(n));return W(r,(function(e){s&&!a(wt,n,e)||mt(t,e,n[e])})),t},yt=function(t,e){return void 0===e?k(t):vt(k(t),e)},wt=function(t){var e=j(t),n=a(at,this,e);return!(this===Y&&b(ut,e)&&!b(st,e))&&(!(n||!b(this,e)||!b(ut,e)||b(this,z)&&this[z][e])||n)},Ot=function(t,e){var n=O(t),r=j(e);if(n!==Y||!b(ut,r)||b(st,r)){var o=ot(n,r);return!o||!b(ut,r)||b(n,z)&&n[z][r]||(o.enumerable=!0),o}},jt=function(t){var e=it(O(t)),n=[];return W(e,(function(t){b(ut,t)||b(L,t)||ft(n,t)})),n},St=function(t){var e=t===Y,n=it(e?st:O(t)),r=[];return W(n,(function(t){!b(ut,t)||e&&!b(Y,t)||ft(r,ut[t])})),r};if(d||(Z=function(){if(m(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?S(arguments[0]):void 0,e=q(t),n=function(t){this===Y&&a(n,st,t),b(this,z)&&b(this[z],e)&&(this[z][e]=!1),ht(this,e,P(1,t))};return s&&pt&&ht(Y,e,{configurable:!0,set:n}),gt(e,t)},tt=Z[H],A(tt,"toString",(function(){return X(this).tag})),A(Z,"withoutSetter",(function(t){return gt(q(t),t)})),R.f=wt,_.f=mt,D.f=vt,$.f=Ot,x.f=I.f=jt,C.f=St,B.f=function(t){return gt(F(t),t)},s&&(ct(tt,"description",{configurable:!0,get:function(){return X(this).description}}),u||A(Y,"propertyIsEnumerable",wt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),W(E(bt),(function(t){T(t)})),r({target:G,stat:!0,forced:!d},{for:function(t){var e=S(t);if(b(dt,e))return dt[e];var n=Z(e);return dt[e]=n,lt[n]=e,n},keyFor:function(t){if(!v(t))throw et(t+" is not a symbol");if(b(lt,t))return lt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),r({target:"Object",stat:!0,forced:!d,sham:!s},{create:yt,defineProperty:mt,defineProperties:vt,getOwnPropertyDescriptor:Ot}),r({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:jt,getOwnPropertySymbols:St}),r({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(w(t))}}),rt){var Pt=!d||l((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:Pt},{stringify:function(t,e,n){var r=U(arguments),o=e;if((g(e)||void 0!==t)&&!v(t))return p(e)||(e=function(t,e){if(h(o)&&(e=a(o,this,t,e)),!v(e))return e}),r[1]=e,i(rt,null,r)}})}if(!tt[K]){var kt=tt.valueOf;A(tt,K,(function(t){return a(kt,this)}))}M(Z,G),L[z]=!0},"33e6":function(t,e,n){},"3cdf":function(t,e,n){var r=n("d0ff");e.f=r},"597f":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("c93c"),n("304d"),n("5a05"),n("89a8"),n("fb4d"),n("1a91"),n("ca56");var r=n("2a8b");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5d45":function(t,e,n){"use strict";var r=n("34cd").forEach,o=n("fbe3"),c=o("forEach");t.exports=c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},6632:function(t,e,n){var r=n("8735");t.exports=r},7424:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{title:"设置"}},[n("div",{ref:"node",staticClass:"login-container"},[n("div",{staticClass:"header"},[n("img",{attrs:{src:t.photo,alt:""}}),n("i",{on:{click:t.pickImg}})]),n("span",{staticClass:"name"},[t._v(t._s(t.userInfo.name))]),n("ul",[n("li",{on:{click:t.clearCache}},[t._v("清除缓存")]),n("li",{staticClass:"msg",on:{click:function(e){return t.$router.push("/version")}}},[t._v("版本信息")]),n("li",{staticClass:"msg",on:{click:function(e){return t.$router.push("/operate")}}},[t._v("操作指南")])]),n("van-button",{attrs:{block:"",type:"primary"},on:{click:t.quitSystem}},[t._v("退出系统")])],1)])},o=[],c=n("597f"),i=n("febe"),a=(n("e186"),n("10dd"),n("982e")),f=n.n(a),u=n("ab00"),s=function(t){return Object(u["a"])({url:"/base64/upload",method:"POST",data:t})},d=n("d4d6"),l={data:function(){return{photo:""}},computed:{userInfo:function(){return this.$store.getters["common/getUserInfo"]}},created:function(){this.userInfo.photo?this.photo=window.BASE_URL+this.userInfo.photo:this.photo=f.a},methods:{pickImg:function(){var t=this,e=document.createElement("input");e.setAttribute("type","file"),e.onchange=function(){t.$toast.loading({message:"文件上传中...",forbidClick:!0,duration:0});var n=new FileReader;n.onload=function(){var r=document.createElement("canvas"),o=r.getContext("2d"),a=new Image;a.onload=Object(i["a"])(regeneratorRuntime.mark((function n(){var i,f,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.width=256,r.height=256,o.drawImage(a,0,0,a.width,a.height,0,0,256,256),i=r.toDataURL(),console.log(t.photo),console.log(t.photo.length),n.next=8,s({type:"photo",data:i,name:e.files[0].name});case 8:if(f=n.sent,t.$toast.clear(),200===f.code){n.next=13;break}return t.$toast.fail("文件上传失败，请重试"),n.abrupt("return");case 13:return n.next=15,Object(d["g"])({id:t.userInfo.id,photo:f.data});case 15:u=n.sent,200===u.code&&(t.$store.commit("common/mutationUserInfo",Object(c["a"])(Object(c["a"])({},t.userInfo),{},{photo:f.data})),t.photo=window.BASE_URL+t.userInfo.photo);case 17:case"end":return n.stop()}}),n)}))),a.src=n.result},n.readAsDataURL(e.files[0])},e.click()},clearCache:function(){var t=this;this.$dialog.confirm({title:"清除确认",message:"清除信息后，需要重新登录，确定要清除？"}).then((function(){sessionStorage.clear(),localStorage.clear(),t.$router.push("/login")})).catch((function(){}))},quitSystem:function(){window.plus.runtime.quit()}}},b=l,p=(n("f943"),n("cba8")),h=Object(p["a"])(b,r,o,!1,null,"94c97a38",null);e["default"]=h.exports},"982e":function(t,e,n){t.exports=n.p+"img/default-icon.f6977279.png"},"9bfe":function(t,e,n){var r=n("8ad4"),o=n("63ef"),c=n("a9c5").f,i=n("d47f"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return c(t)}catch(e){return i(a)}};t.exports.f=function(t){return a&&"Window"==r(t)?f(t):c(o(t))}},a77a:function(t,e,n){var r=n("6632"),o=n("6c75"),c=n("3cdf"),i=n("98fb").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},c93c:function(t,e,n){var r=n("88d4"),o=n("ac3c"),c=n("3580"),i=n("9ad2"),a=i((function(){c(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return c(o(t))}})},ca56:function(t,e,n){var r=n("88d4"),o=n("3b43"),c=n("0972"),i=n("63ef"),a=n("f182"),f=n("c40a");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),o=a.f,u=c(r),s={},d=0;while(u.length>d)n=o(r,e=u[d++]),void 0!==n&&f(s,e,n);return s}})},d47f:function(t,e,n){var r=n("8735"),o=n("1c34"),c=n("126a"),i=n("c40a"),a=r.Array,f=Math.max;t.exports=function(t,e,n){for(var r=c(t),u=o(e,r),s=o(void 0===n?r:n,r),d=a(f(s-u,0)),l=0;u<s;u++,l++)i(d,l,t[u]);return d.length=l,d}},f943:function(t,e,n){"use strict";n("33e6")},fb4d:function(t,e,n){var r=n("88d4"),o=n("9ad2"),c=n("63ef"),i=n("f182").f,a=n("3b43"),f=o((function(){i(1)})),u=!a||f;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},fbe3:function(t,e,n){"use strict";var r=n("9ad2");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){return 1},1)}))}}}]);
//# sourceMappingURL=chunk-48e47820.1379f1ef.js.map