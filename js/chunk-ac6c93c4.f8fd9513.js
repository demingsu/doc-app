(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac6c93c4"],{"2a10":function(e,t,a){"use strict";a("383f")},"2a8b":function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},"383f":function(e,t,a){},"4da2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{showBack:e.isEdit,title:(e.isEdit?"编辑":"新增")+"供应商信息"}},[a("div",{staticClass:"edit-container"},[a("span",{staticClass:"title"},[e._v("基本信息")]),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{name:"材料名字",label:"材料名字",placeholder:"请输入材料名字",rules:e.rules.name},model:{value:e.object.name,callback:function(t){e.$set(e.object,"name",t)},expression:"object.name"}}),a("van-field",{attrs:{name:"地市",label:"地市",clearable:"",readonly:"",placeholder:"请选择地市",rules:e.rules.address},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{size:"small","native-type":"button",type:"primary"},on:{click:function(t){e.show=!0}}},[e._v("选择地市")])]},proxy:!0}]),model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("van-field",{attrs:{name:"详细地址",label:"详细地址",placeholder:"请输入详细地址"},model:{value:e.object.address,callback:function(t){e.$set(e.object,"address",t)},expression:"object.address"}}),a("van-field",{attrs:{name:"信用码",label:"信用码",placeholder:"请输入信用码",rules:e.rules.code},model:{value:e.object.code,callback:function(t){e.$set(e.object,"code",t)},expression:"object.code"}}),a("van-field",{attrs:{name:"联系人",label:"联系人",placeholder:"请输入联系人"},model:{value:e.object.contact,callback:function(t){e.$set(e.object,"contact",t)},expression:"object.contact"}}),a("van-field",{attrs:{name:"联系方式",label:"联系方式",placeholder:"请输入联系方式",rules:e.rules.phone},model:{value:e.object.phone,callback:function(t){e.$set(e.object,"phone",t)},expression:"object.phone"}}),a("van-field",{attrs:{name:"备注",label:"备注",placeholder:"请输入备注"},model:{value:e.object.remark,callback:function(t){e.$set(e.object,"remark",t)},expression:"object.remark"}}),a("div",{staticClass:"btn"},[a("van-button",{attrs:{round:"",block:"",type:"primary","native-type":"submit"}},[e._v("提交")])],1)],1)],1),a("van-popup",{style:{height:"308px"},attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-area",{attrs:{title:"标题","area-list":e.areaList},on:{cancel:function(t){e.show=!1},confirm:e.confirmEvt}})],1)],1)},c=[],s=a("febe"),r=a("2a8b"),o=(a("e186"),a("4c1e"),a("bbe2"),a("fee8"),a("1926"),a("89a8"),a("10dd"),a("96d7")),i=a("edce"),l={data:function(){var e;return e={isEdit:!1,address:"",object:{id:"",name:"",province:"",city:"",county:"",address:"",code:"",contact:"",phone:"",remark:""},rules:{name:[{required:!0,message:"供应商名字必须输入"}],address:[{required:!0,message:"供应商名字必须输入"}],code:[{required:!0,message:"社会信用码必须输入"}],phone:[{validator:function(e){return/^1[3-9]{1}[0-9]{9}$/g.test(e)},message:"联系方式不正确"}]},areaList:o["a"]},Object(r["a"])(e,"isEdit",!1),Object(r["a"])(e,"show",!1),e},created:function(){var e=this.$route.query,t=this.$store.getters["common/getEditData"];if(this.isEdit=!!e.id,this.isEdit){for(var a in this.object)this.object[a]=t[a]||"";this.address=t.province+"/"+t.city+"/"+t.county}},methods:{onSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.address.split("/"),e.object.province=a[0],e.object.city=a[1],e.object.county=a[2],!e.isEdit){t.next=10;break}return t.next=7,Object(i["d"])(e.object);case 7:n=t.sent,t.next=13;break;case 10:return t.next=12,Object(i["a"])(e.object);case 12:n=t.sent;case 13:200===n.code?e.$toast.success("".concat(e.isEdit?"编辑":"新增","供应商信息成功")):e.$toast.fail("".concat(e.isEdit?"编辑":"新增","供应商信息失败"));case 14:case"end":return t.stop()}}),t)})))()},confirmEvt:function(e){this.address=e.reduce((function(e,t){return e.push(t.name),e}),[]).join("/"),this.show=!1}}},u=l,d=(a("2a10"),a("cba8")),b=Object(d["a"])(u,n,c,!1,null,"90d1d9b4",null);t["default"]=b.exports},bbe2:function(e,t,a){"use strict";a("4c1e");var n=a("88d4"),c=a("8735"),s=a("e3f7"),r=a("ce5b"),o=a("97dc"),i=a("bf1f"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=c.Error,d=r(/./.test);n({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var a=s(t,this,e);if(null!==a&&!i(a))throw new u("RegExp exec method returned something other than an Object or null");return!!a}})}}]);
//# sourceMappingURL=chunk-ac6c93c4.f8fd9513.js.map