(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ee36a5f"],{"22cb":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"g",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"c",(function(){return u})),a.d(e,"e",(function(){return c}));var i=a("b775");function n(t){return Object(i["a"])({url:"/detect/detect",method:"post",data:t})}function r(){return Object(i["a"])({url:"/detect/getDetectRecord",method:"get"})}function o(t){return Object(i["a"])({url:"/detect/getHubDetectResult",method:"get",params:{uuid:t}})}function s(t,e,a,n){return Object(i["a"])({url:"/detect/getFileDetectResult",method:"get",params:{uuid:t,groupID:e,artifactID:a,tag:n}})}function l(t,e,a,n,r,o){return Object(i["a"])({url:"/detect/getFunctionDetectResult",method:"get",params:{uuid:t,groupID:e,artifactID:a,tag:n,gitLocation:r,hubLocation:o}})}function u(t){return Object(i["a"])({url:"/detect/getFileCVEDetectResult",method:"get",params:{uuid:t}})}function c(t,e){return Object(i["a"])({url:"/detect/getFunctionCVEDetectResult",method:"get",params:{uuid:t,location:e}})}},2909:function(t,e,a){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function n(t){if(Array.isArray(t))return i(t)}a.d(e,"a",(function(){return l}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("fb6a"),a("b0c0"),a("ac1f"),a("00b4");function o(t,e){if(t){if("string"===typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return n(t)||r(t)||o(t)||s()}},"4e82":function(t,e,a){"use strict";var i=a("23e7"),n=a("1c0b"),r=a("7b0b"),o=a("d039"),s=a("a640"),l=[],u=l.sort,c=o((function(){l.sort(void 0)})),d=o((function(){l.sort(null)})),f=s("sort"),p=c||!d||!f;i({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?u.call(r(this)):u.call(r(this),n(t))}})},"83e3":function(t,e,a){"use strict";a("f41d")},a7f7:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i={backgroundColor:"#ebf1f7",borderBottom:"1px solid #ebeef5",overflow:"hidden",color:"#1767e3"}},e81a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"analysis-wrapper"},[a("div",{staticClass:"module"},[a("div",{staticClass:"upload"},[a("h2",[t._v("上传文件")]),a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"ruleForm",style:{width:"480px"},attrs:{"label-width":"120px",rules:t.rules,model:t.fileFormData}},[a("el-form-item",{attrs:{label:"待测文件",prop:"filelist"}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"",multiple:!1,"auto-upload":!1,"on-change":t.onChange,"file-list":t.clear}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或"),a("em",[t._v("点击上传")])])])],1),a("el-form-item",{attrs:{label:"项目版本",prop:"ver"}},[a("el-input",{model:{value:t.fileFormData.ver,callback:function(e){t.$set(t.fileFormData,"ver",e)},expression:"fileFormData.ver"}})],1)],1),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("确 定")])],1)]),a("div",{staticClass:"module"},[a("h2",[t._v("检测记录")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingList,expression:"loadingList"}],staticStyle:{width:"100%"},attrs:{data:t.showList,"header-cell-style":t.backgroundColor}},[a("el-table-column",{attrs:{prop:"uuid",label:"id"}}),a("el-table-column",{attrs:{prop:"tag",label:"版本",width:"100px"}}),a("el-table-column",{attrs:{prop:"lastCommit",label:"lastCommit"}}),a("el-table-column",{attrs:{prop:"status",label:"检测状态",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"state"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.status,expression:"scope.row.status == 1"}],staticClass:"el-tag"},[t._v("检测成功 ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:-1==e.row.status,expression:"scope.row.status == -1"}],staticClass:"el-tag el-tag--danger"},[t._v("检测失败")]),a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.row.status,expression:"scope.row.status == 0"}],staticClass:"el-tag el-tag--info"},[t._v("检测中")])])]}}])}),a("el-table-column",{attrs:{prop:"insertTime",label:"检测时间"}}),a("el-table-column",{attrs:{prop:"gitUrl",label:"链接",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{directives:[{name:"show",rawName:"v-show",value:e.row.gitUrl,expression:"scope.row.gitUrl"}],attrs:{icon:"el-icon-link",href:e.row.gitUrl,target:"_blank"}},[t._v("github")])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==e.row.status,expression:"scope.row.status == 1"}],attrs:{type:"primary",size:"mini",plain:""},on:{click:function(a){return t.handleInfo(e.$index,e.row)}}},[t._v("成分")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:1==e.row.status,expression:"scope.row.status == 1"}],attrs:{type:"danger",size:"mini",plain:""},on:{click:function(a){return t.gotocve(e.$index,e.row)}}},[t._v("漏洞")])]}}])})],1),a("el-pagination",{attrs:{"page-size":t.info.page.size,layout:"total, prev, pager, next, sizes","page-sizes":[10,100,1e3,1e4,1e5],total:t.info.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},n=[],r=a("ade3"),o=a("2909"),s=a("5530"),l=(a("4e82"),a("e9c4"),a("22cb")),u=a("a7f7"),c={data:function(){return{offset:0,filelist:[],loading:!1,loadingList:!1,clear:[],showList:[],info:{expandRowKeys:[],page:{total:0,size:10,curPage:1},list:[]},backgroundColor:u["a"],fileFormData:{filelist:[],ver:""},rules:{filelist:[{required:!0,message:"Git项目zip类型压缩包,项目内必须包含.git",trigger:"blur"}],ver:[{required:!0,message:"请输入版本号",trigger:"blur"}]}}},activated:function(){window.scrollTo(0,this.offset)},deactivated:function(){this.offset=window.pageYOffset},mounted:function(){this.getData()},methods:Object(r["a"])({gotocve:function(t,e){this.$router.push({path:"/analysis/cvefile",query:Object(s["a"])({},e)})},handleCurrentChange:function(t){this.info.page.curPage=t,this.updateList()},handleSizeChange:function(t){this.info.page.size=t,this.updateList()},handleInfo:function(t,e){this.$router.push({path:"/analysis/hub",query:Object(s["a"])({},e)})},updateList:function(){this.showList=[];for(var t=(this.info.page.curPage-1)*this.info.page.size;t<this.info.page.curPage*this.info.page.size&&t<this.info.page.total;t++)this.showList.push(this.info.list[t])},getData:function(){var t=this;this.loadingList=!0,Object(l["b"])().then((function(e){var a;e.data.sort((function(t,e){return-new Date(t.insertTime).getTime()+new Date(e.insertTime).getTime()})),t.loadingList=!1,t.info.list=[],(a=t.info.list).push.apply(a,Object(o["a"])(e.data)),t.info.page.total=t.info.list.length,t.updateList()})).catch((function(e){t.loadingList=!1}))},handleEdit:function(t,e){console.log(t,e),this.$router.push({path:"/analysis/function",query:{row:JSON.stringify(e)}})},onChange:function(t,e){this.filelist=e},submitUpload:function(){var t=this;this.loading=!0;var e=new FormData;e.append("file",this.fileFormData.filelist[0].raw),e.append("tag",this.fileFormData.ver),console.log(e),Object(l["a"])(e).then((function(e){t.$message({type:"success",message:"上传成功!"}),t.initData()})).catch((function(e){t.initData()}))},initData:function(){this.clear=[],this.loading=!1,this.getData(),this.fileFormData.filelist=[],this.fileFormData.ver=""},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.submitUpload()}))}},"onChange",(function(t,e){var a=this;this.$set(this.fileFormData,"filelist",e),this.$nextTick((function(){a.$refs["ruleForm"].validateField("filelist")}))}))},d=c,f=(a("83e3"),a("2877")),p=Object(f["a"])(d,i,n,!1,null,"557c6606",null);e["default"]=p.exports},e9c4:function(t,e,a){var i=a("23e7"),n=a("d066"),r=a("d039"),o=n("JSON","stringify"),s=/[\uD800-\uDFFF]/g,l=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,c=function(t,e,a){var i=a.charAt(e-1),n=a.charAt(e+1);return l.test(t)&&!u.test(n)||u.test(t)&&!l.test(i)?"\\u"+t.charCodeAt(0).toString(16):t},d=r((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&i({target:"JSON",stat:!0,forced:d},{stringify:function(t,e,a){var i=o.apply(null,arguments);return"string"==typeof i?i.replace(s,c):i}})},f41d:function(t,e,a){}}]);