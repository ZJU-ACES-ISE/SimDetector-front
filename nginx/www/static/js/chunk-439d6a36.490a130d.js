(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-439d6a36"],{"146c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"analysis-wrapper"},[i("div",{staticClass:"module"},[i("h2",[t._v("文件级检测结果")]),i("info",{attrs:{number:t.infoobj.number,info:t.infoobj}}),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingList,expression:"loadingList"}],staticStyle:{width:"100%"},attrs:{"expand-row-keys":t.info.expandRowKeys,"row-key":"id","header-cell-style":t.backgroundColor,data:t.showList}},[i("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-card",{staticClass:"box-card"},[i("el-table",{attrs:{data:e.row.sameFiles}},[i("el-table-column",{attrs:{prop:"sameLocation",label:"匹配文件"}}),i("el-table-column",{attrs:{prop:"sameArtifactID",label:"包名",width:"80px"}}),i("el-table-column",{attrs:{prop:"sameGroupID",label:"组名",width:"160px"}}),i("el-table-column",{attrs:{prop:"sameTag",label:"版本号",width:"80px"}}),i("el-table-column",{attrs:{prop:"similarity",label:"相似度 %",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.similarity).toFixed(2))+" ")]}}],null,!0)}),i("el-table-column",{attrs:{label:"操作",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(a){return[i("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(i){return t.handleInfo(a.row,e.row)}}},[t._v("详情")])]}}],null,!0)},[i("template",{slot:"header"},[i("el-link",{on:{click:t.openAll}},[t._v("操作")])],1)],2)],1)],1)]}}])}),i("el-table-column",{attrs:{prop:"location",label:"原文件"}}),i("el-table-column",{attrs:{prop:"linesOfFormatCode",label:"代码长度",width:"100px"}}),i("el-table-column",{attrs:{prop:"length",label:"匹配数",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.sameFiles.length)+" ")]}}])}),i("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(i){return t.handleEdit(e.row)}}},[t._v("展开")])]}}])},[i("template",{slot:"header"},[i("el-link",{on:{click:t.openAll}},[t._v("操作")])],1)],2)],1),i("el-pagination",{attrs:{"page-size":t.info.page.size,layout:"total, prev, pager, next, sizes","page-sizes":[10,100,1e3,1e4,1e5],total:t.info.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},s=[],n=i("2909"),o=i("5530"),l=(i("d3b7"),i("159b"),i("c740"),i("a434"),i("22cb")),r=i("a7f7"),c=i("76bd"),u={components:{info:c["a"]},data:function(){return{infoobj:{number:0},offset:0,loadingList:!1,showList:[],info:{expandRowKeys:[],page:{total:0,size:10,curPage:1},list:[]},backgroundColor:r["a"]}},methods:{handleCurrentChange:function(t){this.info.page.curPage=t,this.updateList()},handleSizeChange:function(t){this.info.page.size=t,this.updateList()},openAll:function(){var t=this;this.info.expandRowKeys.length>0?this.info.expandRowKeys=[]:this.showList.forEach((function(e){t.open(e)}))},open:function(t){var e=this.info.expandRowKeys.findIndex((function(e){return e==t.id}));e>-1||this.info.expandRowKeys.push(t.id)},handleEdit:function(t){var e=this.info.expandRowKeys.findIndex((function(e){return e==t.id}));e>-1?this.info.expandRowKeys.splice(e,1):this.info.expandRowKeys.push(t.id)},handleInfo:function(t,e){this.$router.push({path:"/analysis/function",query:Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.$route.query),t),e)})},updateList:function(){this.showList=[];for(var t=(this.info.page.curPage-1)*this.info.page.size;t<this.info.page.curPage*this.info.page.size&&t<this.info.page.total;t++)this.showList.push(this.info.list[t])},getData:function(){var t=this;this.loadingList=!0,Object(l["d"])(this.$route.query.uuid,this.$route.query.sameGroupID,this.$route.query.sameArtifactID,this.$route.query.sameTag).then((function(e){var i;t.info.list=[],t.infoobj.number=0,e.data.cloneFiles.forEach((function(e,i){e.id=i,t.infoobj.number+=e.sameFiles.length})),(i=t.info.list).push.apply(i,Object(n["a"])(e.data.cloneFiles)),t.info.page.total=t.info.list.length,t.updateList(),t.loadingList=!1,t.infoobj.artifactID=e.data.artifactID,t.infoobj.groupID=e.data.groupID,t.infoobj.tag=e.data.tag})).catch((function(e){t.loadingList=!1}))}},activated:function(){this.info.expandRowKeys=[],this.getData()}},d=u,f=(i("827f"),i("2877")),p=Object(f["a"])(d,a,s,!1,null,"4471c094",null);e["default"]=p.exports},"22cb":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return n})),i.d(e,"g",(function(){return o})),i.d(e,"d",(function(){return l})),i.d(e,"f",(function(){return r})),i.d(e,"c",(function(){return c})),i.d(e,"e",(function(){return u}));var a=i("b775");function s(t){return Object(a["a"])({url:"/detect/detect",method:"post",data:t})}function n(){return Object(a["a"])({url:"/detect/getDetectRecord",method:"get"})}function o(t){return Object(a["a"])({url:"/detect/getHubDetectResult",method:"get",params:{uuid:t}})}function l(t,e,i,s){return Object(a["a"])({url:"/detect/getFileDetectResult",method:"get",params:{uuid:t,groupID:e,artifactID:i,tag:s}})}function r(t,e,i,s,n,o){return Object(a["a"])({url:"/detect/getFunctionDetectResult",method:"get",params:{uuid:t,groupID:e,artifactID:i,tag:s,gitLocation:n,hubLocation:o}})}function c(t){return Object(a["a"])({url:"/detect/getFileCVEDetectResult",method:"get",params:{uuid:t}})}function u(t,e){return Object(a["a"])({url:"/detect/getFunctionCVEDetectResult",method:"get",params:{uuid:t,location:e}})}},2909:function(t,e,i){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function s(t){if(Array.isArray(t))return a(t)}i.d(e,"a",(function(){return r}));i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}i("fb6a"),i("b0c0"),i("ac1f"),i("00b4");function o(t,e){if(t){if("string"===typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return s(t)||n(t)||o(t)||l()}},5952:function(t,e,i){"use strict";i("8283")},"76bd":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isHub,expression:"isHub"}]},[i("div",{staticClass:"box-wrapper"},[i("div",{staticClass:"box module"},[i("div",{staticClass:"tittle"},[t._v("数据统计")]),i("div",{staticClass:"match"},[i("span",{staticClass:"number"},[t._v(" "+t._s(t.number||0)+" ")]),i("span",{staticClass:"msg"},[t._v(" "+t._s(t.msg)+" ")])]),i("div",{staticClass:"notice"},[t._v(t._s(t.msgnotice))])]),i("div",{staticClass:"boxnull"}),i("div",{staticClass:"box module"},[i("div",{staticClass:"tittle"},[t._v("项目信息")]),i("el-form",{ref:"form",attrs:{"label-width":"100px","label-position":"left"}},[i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("待测链接")]),i("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.gitURL))])]),i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("待测版本")]),i("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.tag))])]),i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("commitID")]),i("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.commitID||null))])])])],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFile,expression:"isFile"}]},[i("div",{staticClass:"box-wrapper"},[i("div",{staticClass:"box module"},[i("div",{staticClass:"tittle"},[t._v("数据统计")]),i("div",{staticClass:"match"},[i("span",{staticClass:"number"},[t._v(" "+t._s(t.number||0)+" ")]),i("span",{staticClass:"msg"},[t._v(" "+t._s(t.msg)+" ")])]),i("div",{staticClass:"notice"},[t._v(t._s(t.msgnotice))])]),i("div",{staticClass:"boxnull"}),i("div",{staticClass:"box module"},[i("div",{staticClass:"tittle"},[t._v("项目信息")]),i("el-form",{ref:"form",attrs:{"label-width":"100px","label-position":"left"}},[i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("匹配包名")]),i("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.artifactID))])]),i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("匹配组名")]),i("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.groupID))])]),i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("匹配版本")]),i("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.tag||null))])])])],1)])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFunction,expression:"isFunction"}]},[i("div",{staticClass:"box-wrapper"},[i("div",{staticClass:"box module"},[i("div",{staticClass:"tittle"},[t._v("数据统计")]),i("div",{staticClass:"match"},[i("span",{staticClass:"number"},[t._v(" "+t._s(t.info.number||0)+" ")]),i("span",{staticClass:"msg"},[t._v(" "+t._s(t.msg)+" ")])]),i("div",{staticClass:"notice"},[t._v(t._s(t.msgnotice))])]),i("div",{staticClass:"boxnull"}),i("div",{staticClass:"box module"},[i("div",{staticClass:"tittle"},[t._v("项目信息")]),i("el-form",{ref:"form",attrs:{"label-position":"left"}},[i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("原文件")]),i("span",{staticClass:"content"},[t._v(t._s(this.$route.query.location))])]),i("div",{staticClass:"label"},[i("span",{staticClass:"head"},[t._v("匹配文件")]),i("span",{staticClass:"content"},[t._v(t._s(this.$route.query.sameLocation))])])])],1)])])])},s=[],n=(i("caad"),i("2532"),{props:{number:{require:!0},info:{require:!1}},computed:{isFile:function(){return this.$route.path.includes("/analysis/file")},isHub:function(){return this.$route.path.includes("/analysis/hub")},isFunction:function(){return this.$route.path.includes("/analysis/function")},msg:function(){return this.isFunction?"相似函数":this.isFile?"相似文件":this.isHub?"相似maven仓库":void 0},msgnotice:function(){return this.isHub?"最多匹配10个仓库":this.isFile?"每个待测文件最多匹配10个相似文件":void 0}}}),o=n,l=(i("5952"),i("2877")),r=Object(l["a"])(o,a,s,!1,null,"4f920130",null);e["a"]=r.exports},"827f":function(t,e,i){"use strict";i("9edb")},8283:function(t,e,i){},"9edb":function(t,e,i){},a434:function(t,e,i){"use strict";var a=i("23e7"),s=i("23cb"),n=i("a691"),o=i("50c4"),l=i("7b0b"),r=i("65f0"),c=i("8418"),u=i("1dde"),d=i("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,b=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var i,a,u,d,f,p,g=l(this),C=o(g.length),_=s(t,C),w=arguments.length;if(0===w?i=a=0:1===w?(i=0,a=C-_):(i=w-2,a=b(h(n(e),0),C-_)),C+i-a>m)throw TypeError(v);for(u=r(g,a),d=0;d<a;d++)f=_+d,f in g&&c(u,d,g[f]);if(u.length=a,i<a){for(d=_;d<C-a;d++)f=d+a,p=d+i,f in g?g[p]=g[f]:delete g[p];for(d=C;d>C-a+i;d--)delete g[d-1]}else if(i>a)for(d=C-a;d>_;d--)f=d+a-1,p=d+i-1,f in g?g[p]=g[f]:delete g[p];for(d=0;d<i;d++)g[d+_]=arguments[d+2];return g.length=C-a+i,u}})},a7f7:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a={backgroundColor:"#ebf1f7",borderBottom:"1px solid #ebeef5",overflow:"hidden",color:"#1767e3"}},c740:function(t,e,i){"use strict";var a=i("23e7"),s=i("b727").findIndex,n=i("44d2"),o=i("ae40"),l="findIndex",r=!0,c=o(l);l in[]&&Array(1)[l]((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!c},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(l)}}]);