(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13bfdbc0"],{2810:function(t,e,a){"use strict";a("b06c")},"3e51":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("app-head"),e("app-body",[e("div",{staticStyle:{"min-height":"85vh"}},[e("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.labelName,callback:function(e){t.labelName=e},expression:"labelName"}},[e("el-tab-pane",{attrs:{label:"全部",name:"0"}}),e("el-tab-pane",{attrs:{label:"显卡",name:"1"}}),e("el-tab-pane",{attrs:{label:"主板",name:"2"}}),e("el-tab-pane",{attrs:{label:"CPU",name:"3"}}),e("el-tab-pane",{attrs:{label:"电源",name:"4"}}),e("el-tab-pane",{attrs:{label:"其他",name:"5"}})],1),e("el-button",{staticClass:"extra-button",attrs:{type:"primary",icon:"el-icon-cpu"},on:{click:t.start}},[t._v("不会选二手配件？即刻，启动！")]),e("div",{staticStyle:{margin:"0 20px"}},[e("el-row",{attrs:{gutter:30}},t._l(t.idleList,(function(a,n){return e("el-col",{attrs:{span:6}},[e("div",{staticClass:"idle-card",on:{click:function(e){return t.toDetails(a)}}},[e("el-image",{staticStyle:{width:"100%",height:"160px"},attrs:{src:a.imgUrl,fit:"contain"}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"},[t._v("无图")])])]),e("div",{staticClass:"idle-title"},[t._v("\n                            "+t._s(a.idleName)+"\n                        ")]),e("el-row",{staticStyle:{margin:"5px 10px"}},[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"idle-prive"},[t._v("￥"+t._s(a.idlePrice))])]),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"idle-place"},[t._v(t._s(a.idlePlace))])])],1),e("div",{staticClass:"user-info"},[e("el-image",{staticStyle:{width:"30px",height:"30px"},attrs:{src:a.user.avatar,fit:"contain"}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"},[t._v("无图")])])]),e("div",{staticClass:"user-nickname"},[t._v(t._s(a.user.nickname))])],1)],1)])})),1)],1),e("div",{staticClass:"fenye"},[e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":8,layout:"prev, pager, next, jumper",total:t.totalItem},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1),e("app-foot")],1)],1)},i=[],s=(a("a481"),a("6e70")),l=a("4fc4"),r=a("85a9"),o={name:"index",components:{AppHead:s["a"],AppBody:l["a"],AppFoot:r["a"]},data:function(){return{labelName:"0",idleList:[],currentPage:1,totalItem:1}},created:function(){this.findIdleTiem(1)},watch:{$route:function(t,e){this.labelName=t.query.labelName;var a=parseInt(t.query.page)?parseInt(t.query.page):1;this.currentPage=parseInt(t.query.page)?parseInt(t.query.page):1,this.findIdleTiem(a)}},methods:{start:function(){"/start"!==this.$route.path&&this.$router.push({path:"/start"})},findIdleTiem:function(t){var e=this,a=this.$loading({lock:!0,text:"加载数据中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0)"});this.labelName>0?this.$api.findIdleTiemByLable({idleLabel:this.labelName,page:t,nums:8}).then((function(t){console.log(t);for(var a=t.data.list,n=0;n<a.length;n++){a[n].timeStr=a[n].releaseTime.substring(0,10)+" "+a[n].releaseTime.substring(11,19);var i=JSON.parse(a[n].pictureList);a[n].imgUrl=i.length>0?i[0]:""}e.idleList=a,e.totalItem=t.data.count,console.log(e.totalItem)})).catch((function(t){console.log(t)})).finally((function(){a.close()})):this.$api.findIdleTiem({page:t,nums:8}).then((function(t){console.log(t);for(var a=t.data.list,n=0;n<a.length;n++){a[n].timeStr=a[n].releaseTime.substring(0,10)+" "+a[n].releaseTime.substring(11,19);var i=JSON.parse(a[n].pictureList);a[n].imgUrl=i.length>0?i[0]:""}e.idleList=a,e.totalItem=t.data.count,console.log(e.totalItem)})).catch((function(t){console.log(t)})).finally((function(){a.close()}))},handleClick:function(t,e){console.log(this.labelName),this.$router.replace({query:{page:1,labelName:this.labelName}})},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.$router.replace({query:{page:t,labelName:this.labelName}})},toDetails:function(t){this.$router.push({path:"/details",query:{id:t.id}})}}},c=o,u=(a("4b2e"),a("2877")),p=Object(u["a"])(c,n,i,!1,null,"3406c4f0",null);e["default"]=p.exports},"4b2e":function(t,e,a){"use strict";a("c317")},"4fc4":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("div",{staticClass:"main-content"},[t._t("default")],2)])},i=[],s={name:"PageBody"},l=s,r=(a("c95a"),a("2877")),o=Object(r["a"])(l,n,i,!1,null,"7617c039",null);e["a"]=o.exports},"6e70":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-container"},[e("div",{staticClass:"app-name"},[e("router-link",{attrs:{to:"/"}},[e("b",{staticStyle:{color:"#333"}},[t._v("GeekBuy")])])],1),e("div",{staticClass:"search-container"},[e("el-input",{attrs:{placeholder:"欢迎来到GeekBuy，即刻买！"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchIdle.apply(null,arguments)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchIdle},slot:"append"})],1)],1),e("el-button",{attrs:{type:"primary",icon:"el-icon-s-tools"},on:{click:t.tool}},[t._v("工具")]),e("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.toRelease}},[t._v("即刻发布")]),e("el-button",{attrs:{type:"primary",icon:"el-icon-chat-dot-round"},on:{click:t.toMessage}},[t._v("消息")]),t.isLogin?e("el-dropdown",{attrs:{trigger:"click"}},[e("div",{staticStyle:{cursor:"pointer",display:"flex","align-items":"center"}},[e("div",{staticStyle:{"font-size":"16px",color:"#666","padding-right":"5px"}},[t._v(t._s(t.nicknameValue?t.nicknameValue:t.nickname))]),e("el-avatar",{attrs:{src:t.avatarValue?t.avatarValue:t.avatar}})],1),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("div",{on:{click:t.toMe}},[t._v("个人中心")])]),e("el-dropdown-item",{staticStyle:{color:"red"},attrs:{divided:""}},[e("div",{on:{click:t.loginOut}},[t._v("退出登录")])])],1)],1):e("router-link",{staticClass:"user-name-text",attrs:{to:"/login"}},[t._v("登录")])],1)])},i=[],s=(a("a481"),{name:"Header",props:["searchInput","nicknameValue","avatarValue"],data:function(){return{searchValue:this.searchInput,nickname:"登录",avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",isLogin:!1}},created:function(){var t=this;this.$globalData.userInfo.nickname?(this.nickname=this.$globalData.userInfo.nickname,this.avatar=this.$globalData.userInfo.avatar,this.isLogin=!0):this.$api.getUserInfo().then((function(e){console.log("Header getUserInfo:",e),1===e.status_code&&(t.nickname=e.data.nickname,t.avatar=e.data.avatar,e.data.signInTime=e.data.signInTime.substring(0,10),t.$globalData.userInfo=e.data,t.isLogin=!0)}))},methods:{searchIdle:function(){"/search"!==this.$route.path?this.$router.push({path:"/search",query:{searchValue:this.searchValue}}):(this.$router.replace({path:"/search",query:{searchValue:this.searchValue}}),this.$router.go(0))},toMe:function(){"/me"!==this.$route.path&&this.$router.push({path:"/me"})},toMessage:function(){"/message"!==this.$route.path&&this.$router.push({path:"/message"})},toRelease:function(){"/release"!==this.$route.path&&this.$router.push({path:"/release"})},tool:function(){"/tool"!==this.$route.path&&this.$router.push({path:"/tool"})},loginOut:function(){var t=this;this.$api.logout().then((function(e){1===e.status_code?(t.$globalData.userInfo={},console.log("login out"),"/index"===t.$route.path?t.$router.go(0):t.$router.push({path:"/index"})):t.$message.error("网络或系统异常，退出登录失败！")}))}}}),l=s,r=(a("2810"),a("2877")),o=Object(r["a"])(l,n,i,!1,null,"164415d3",null);e["a"]=o.exports},"85a9":function(t,e,a){"use strict";var n=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"foot-container"},[e("div",{staticClass:"author"},[t._v("© 2023 GeekBuy. All Rights Reserved.")])])}],s={name:"Foot"},l=s,r=(a("a747"),a("2877")),o=Object(r["a"])(l,n,i,!1,null,"17569e24",null);e["a"]=o.exports},a747:function(t,e,a){"use strict";a("f027")},b06c:function(t,e,a){},c317:function(t,e,a){},c95a:function(t,e,a){"use strict";a("ff1e")},f027:function(t,e,a){},ff1e:function(t,e,a){}}]);