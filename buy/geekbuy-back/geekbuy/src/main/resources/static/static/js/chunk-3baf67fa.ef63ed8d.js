(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3baf67fa"],{2630:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e._self._c;return t("div",[t("app-head"),t("app-body",[t("div",{staticClass:"release-idle-container"},[t("div",{staticClass:"release-idle-container-title"},[e._v("物品发布")]),t("div",{staticClass:"geek-certification-info"},[t("p",[e._v("我们的Geek认证™服务确保了商品的一致性和质量。专业团队会对商品进行全面检查和测试，确保您的购买安全无忧。")]),t("p",[e._v("通过我们的求购功能，告诉我们您的需求和预算，我们帮您快速找到合适的卖家。")]),t("p",[e._v("Geek回收™提供轻松便捷的电脑配件回收服务，如果您有闲置硬件，我们将为您提供合理价格。")])]),t("div",{staticClass:"release-idle-container-form"},[t("div",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"15px"}},[t("el-select",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"选择服务"},model:{value:e.geekOption,callback:function(t){e.geekOption=t},expression:"geekOption"}},[t("el-option",{attrs:{label:"Geek认证",value:"待认证"}}),t("el-option",{attrs:{label:"Geek回收",value:"Geek回收"}}),t("el-option",{attrs:{label:"无",value:""}})],1),t("el-input",{attrs:{placeholder:"请输入二手物品名称",maxlength:"30","show-word-limit":""},model:{value:e.idleItemInfo.idleName,callback:function(t){e.$set(e.idleItemInfo,"idleName",t)},expression:"idleItemInfo.idleName"}})],1),t("el-input",{staticClass:"release-idle-detiles-text",attrs:{type:"textarea",autosize:"",placeholder:"请输入物品的详细介绍...",maxlength:"1000","show-word-limit":""},model:{value:e.idleItemInfo.idleDetails,callback:function(t){e.$set(e.idleItemInfo,"idleDetails",t)},expression:"idleItemInfo.idleDetails"}}),t("div",{staticClass:"release-idle-place"},[t("div",{staticClass:"release-tip"},[e._v("您的地区")]),t("el-cascader",{staticStyle:{width:"90%"},attrs:{options:e.options,separator:" "},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("div",[t("div",{staticClass:"release-tip"},[e._v("物品类别")]),t("el-select",{attrs:{placeholder:"请选择类别"},model:{value:e.idleItemInfo.idleLabel,callback:function(t){e.$set(e.idleItemInfo,"idleLabel",t)},expression:"idleItemInfo.idleLabel"}},e._l(e.options2,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("div",{staticStyle:{width:"300px"}},[t("div",{staticClass:"release-tip"},[e._v("价格")]),t("el-input-number",{attrs:{precision:2,step:10,max:1e7},model:{value:e.idleItemInfo.idlePrice,callback:function(t){e.$set(e.idleItemInfo,"idlePrice",t)},expression:"idleItemInfo.idlePrice"}},[t("div",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("价格")])])],1)]),t("div",{staticClass:"release-idle-container-picture"},[t("div",{staticClass:"release-idle-container-picture-title"},[e._v("上传二手物品照片，测试图")]),t("el-upload",{attrs:{action:"http://localhost:8080/file/","on-preview":e.fileHandlePreview,"on-remove":e.fileHandleRemove,"on-success":e.fileHandleSuccess,"show-file-list":e.showFileList,limit:10,"on-exceed":e.handleExceed,accept:"image/*",drag:"",multiple:""}},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v("将图片拖到此处，也可以点击上传")])]),t("div",{staticClass:"picture-list"},e._l(e.imgList,(function(i,l){return t("el-image",{staticStyle:{width:"600px",height:"400px","margin-bottom":"2px"},attrs:{fit:"contain",src:i,"preview-src-list":e.imgList}})})),1),t("el-dialog",{attrs:{visible:e.imgDialogVisible},on:{"update:visible":function(t){e.imgDialogVisible=t}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),t("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"30px","margin-bottom":"30px"}},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.releaseButton}},[e._v("确认发布")])],1)],1)]),t("app-foot")],1)],1)},a=[];i("a481");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function o(e,t){if("object"!=s(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=s(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function n(e){var t=o(e,"string");return"symbol"==s(t)?t:String(t)}function r(e,t,i){return t=n(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c=i("6e70"),d=i("4fc4"),p=i("85a9"),m=i("dc58"),u={name:"release",components:{AppHead:c["a"],AppBody:d["a"],AppFoot:p["a"]},data:function(){return r({geekOption:"",idleItemInfo:{idleName:""},imgDialogVisible:!1,dialogImageUrl:"",showFileList:!0,options:m["a"],selectedOptions:[],options2:[{value:1,label:"显卡"},{value:2,label:"主板"},{value:3,label:"CPU"},{value:4,label:"电源"},{value:5,label:"其他"}],imgList:[]},"idleItemInfo",{idleName:"",idleDetails:"",pictureList:"",idlePrice:0,idlePlace:"",idleLabel:""})},methods:{handleChange:function(e){console.log(e),this.idleItemInfo.idlePlace=e[1]},fileHandleRemove:function(e,t){console.log(e,t);for(var i=0;i<this.imgList.length;i++)this.imgList[i]===e.response.data&&this.imgList.splice(i,1)},fileHandlePreview:function(e){console.log(e),this.dialogImageUrl=e.response.data,this.imgDialogVisible=!0},fileHandleSuccess:function(e,t,i){console.log("file:",e,t,i),this.imgList.push(e.data)},releaseButton:function(){var e=this;this.idleItemInfo.pictureList=JSON.stringify(this.imgList),this.geekOption&&"无"!==this.geekOption&&(this.idleItemInfo.idleName="".concat(this.geekOption," - ").concat(this.idleItemInfo.idleName)),console.log(this.idleItemInfo),this.idleItemInfo.idleName&&this.idleItemInfo.idleDetails&&this.idleItemInfo.idlePlace&&this.idleItemInfo.idleLabel&&this.idleItemInfo.idlePrice?this.$api.addIdleItem(this.idleItemInfo).then((function(t){1===t.status_code?(e.$message({message:"发布成功！",type:"success"}),console.log(t.data),e.$router.replace({path:"/details",query:{id:t.data.id}})):e.$message.error("发布失败！"+t.msg)})).catch((function(t){e.$message.error("请填写完整信息")})):this.$message.error("请填写完整信息！")},handleExceed:function(e,t){this.$message.warning("限制10张图片，本次选择了 ".concat(e.length," 张图，共选择了 ").concat(e.length+t.length," 张图"))}}},f=u,g=(i("9b2a"),i("2877")),v=Object(g["a"])(f,l,a,!1,null,"a19a8dba",null);t["default"]=v.exports},"2bbe":function(e,t,i){},"9b2a":function(e,t,i){"use strict";i("2bbe")}}]);