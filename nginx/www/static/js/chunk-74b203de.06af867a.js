(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b203de"],{2909:function(t,e,a){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function r(t){if(Array.isArray(t))return i(t)}a.d(e,"a",(function(){return l}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("fb6a"),a("b0c0"),a("ac1f"),a("00b4");function o(t,e){if(t){if("string"===typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return r(t)||n(t)||o(t)||s()}},"637d":function(t,e,a){"use strict";a("c5ac")},"7e1e":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s}));var i=a("b775");function r(t){return Object(i["a"])({url:"/maven/insert",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/maven/rebuild",method:"delete"})}function o(){return Object(i["a"])({url:"/maven/getInsertHub",method:"get"})}function s(){return Object(i["a"])({url:"/maven/getInsertRecord",method:"get"})}},"856d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"data-wrapper"},[a("div",{staticClass:"module"},[a("h2",[t._v("指纹管理")]),a("el-button",{attrs:{type:"primary"},on:{click:t.showReset}},[a("i",{staticClass:"el-icon-refresh-right el-icon--left"}),t._v(" 重置指纹库")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showAdd=!0}}},[a("i",{staticClass:"el-icon-upload el-icon--left"}),t._v("添加指纹")])],1),a("el-dialog",{attrs:{title:"数据入库",visible:t.showAdd,width:"600px"},on:{"update:visible":function(e){t.showAdd=e}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"ruleForm",attrs:{"label-width":"80px",rules:t.rules,model:t.fileFormData}},[a("el-form-item",{attrs:{label:"文件",prop:"filelist"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"",multiple:!1,"auto-upload":!1,"on-change":t.onChange,"file-list":t.clear}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),a("el-form-item",{attrs:{label:"组名",prop:"groupId"}},[a("el-input",{model:{value:t.fileFormData.groupId,callback:function(e){t.$set(t.fileFormData,"groupId",e)},expression:"fileFormData.groupId"}})],1),a("el-form-item",{attrs:{label:"包名",prop:"pkgId"}},[a("el-input",{model:{value:t.fileFormData.pkgId,callback:function(e){t.$set(t.fileFormData,"pkgId",e)},expression:"fileFormData.pkgId"}})],1),a("el-form-item",{attrs:{label:"版本",prop:"ver"}},[a("el-input",{model:{value:t.fileFormData.ver,callback:function(e){t.$set(t.fileFormData,"ver",e)},expression:"fileFormData.ver"}})],1),a("el-form-item",{attrs:{label:"github链接"}},[a("el-input",{model:{value:t.fileFormData.link,callback:function(e){t.$set(t.fileFormData,"link",e)},expression:"fileFormData.link"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.showAdd=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("确 定")])],1)],1),a("div",{staticClass:"module"},[a("h2",[t._v("入库记录")]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.hisotry.data,"header-cell-style":t.backgroundColor}},[a("el-table-column",{attrs:{prop:"hubName",label:"包名"}}),a("el-table-column",{attrs:{prop:"groupId",label:"组名"}}),a("el-table-column",{attrs:{prop:"tag",label:"版本号"}}),a("el-table-column",{attrs:{prop:"gitUrl",label:"链接"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-link",{directives:[{name:"show",rawName:"v-show",value:e.row.gitUrl,expression:"scope.row.gitUrl"}],attrs:{icon:"el-icon-link",href:e.row.gitUrl,target:"_blank"}},[t._v("github")])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"入库状态",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"state"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.status,expression:"scope.row.status == 1"}],staticClass:"el-tag"},[t._v("入库成功 ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:-1==e.row.status,expression:"scope.row.status == -1"}],staticClass:"el-tag el-tag--danger"},[t._v("入库失败")]),a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.row.status,expression:"scope.row.status == 0"}],staticClass:"el-tag el-tag--info"},[t._v("入库中")])])]}}])}),a("el-table-column",{attrs:{prop:"insertTime",label:"上传时间"}})],1),a("el-pagination",{attrs:{"page-size":t.hisotry.page.size,layout:"total, prev, pager, next, sizes","page-sizes":[10,100,1e3,1e4,1e5],total:t.hisotry.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},r=[],n=a("2909"),o=(a("9911"),a("7e1e")),s=a("a7f7"),l={data:function(){return{hisotry:{page:{total:0,size:10,curPage:1},data:[{name:"aaa",group:"Apache",time:"2023-02-02",version:"1.0.0",link:"http://www.baidu.com",state:"入库中"},{name:"aaa",group:"Apache",time:"2023-02-02",version:"2.0.0",link:"",state:"入库成功"},{name:"aaa",group:"Apache",time:"2023-02-02",version:"3.0.0",link:"",state:"入库失败"}]},backgroundColor:s["a"],showAdd:!1,fullscreenLoading:!1,listLoading:!1,resultList:[],loading:!1,clear:[],fileFormData:{filelist:[],ver:"",groupId:"",pkgId:"",link:""},rules:{filelist:[{required:!0,message:"请选择maven的jar包文件",trigger:"blur"}],ver:[{required:!0,message:"请输入版本号",trigger:"blur"}],groupId:[{required:!0,message:"请输入组名",trigger:"blur"}],pkgId:[{required:!0,message:"请输入报名",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;e.submitUpload()}))},handleCurrentChange:function(t){this.hisotry.page.curPage=t,this.updateList()},handleSizeChange:function(t){this.hisotry.page.size=t,this.updateList()},updateList:function(){this.hisotry.data=[];for(var t=(this.hisotry.page.curPage-1)*this.hisotry.page.size;t<this.hisotry.page.curPage*this.hisotry.page.size&&t<this.resultList.length;t++)this.hisotry.data.push(this.resultList[t])},onChange:function(t,e){var a=this;this.$set(this.fileFormData,"filelist",e),this.$nextTick((function(){a.$refs["ruleForm"].validateField("filelist")}))},submitUpload:function(){var t=this;this.loading=!0;var e=new FormData;e.append("file",this.fileFormData.filelist[0].raw),e.append("groupID",this.fileFormData.groupId),e.append("artifactID",this.fileFormData.pkgId),e.append("tag",this.fileFormData.ver),e.append("gitURL",this.fileFormData.link),console.log(e),Object(o["c"])(e).then((function(e){t.$message({type:"success",message:"上传成功!"}),t.initData()})).catch((function(e){t.initData()}))},initData:function(){this.showAdd=!1,this.clear=[],this.loading=!1,this.getResList(),this.fileFormData.filelist=[],this.fileFormData.ver="",this.fileFormData.groupId="",this.fileFormData.pkgId="",this.fileFormData.link=""},showReset:function(){var t=this;this.$confirm("此操作将永久删除现有指纹库, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.fullscreenLoading=!0,Object(o["d"])().then((function(){t.$message({type:"success",message:"删除成功!"}),t.getResList(),t.fullscreenLoading=!1})).catch((function(){t.getResList(),t.fullscreenLoading=!1}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getResList:function(){var t=this;this.listLoading=!0,Object(o["b"])().then((function(e){var a;(t.listLoading=!1,e.data)&&(t.resultList=[],(a=t.resultList).push.apply(a,Object(n["a"])(e.data)),t.hisotry.page.total=t.resultList.length,t.updateList())})).catch((function(){t.listLoading=!1}))}},mounted:function(){this.getResList()}},u=l,c=(a("637d"),a("2877")),d=Object(c["a"])(u,i,r,!1,null,"93e5801e",null);e["default"]=d.exports},"857a":function(t,e,a){var i=a("1d80"),r=/"/g;t.exports=function(t,e,a,n){var o=String(i(t)),s="<"+e;return""!==a&&(s+=" "+a+'="'+String(n).replace(r,"&quot;")+'"'),s+">"+o+"</"+e+">"}},9911:function(t,e,a){"use strict";var i=a("23e7"),r=a("857a"),n=a("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(t){return r(this,"a","href",t)}})},a7f7:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var i={backgroundColor:"#ebf1f7",borderBottom:"1px solid #ebeef5",overflow:"hidden",color:"#1767e3"}},af03:function(t,e,a){var i=a("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},c5ac:function(t,e,a){}}]);