(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf057414"],{"22cb":function(t,s,e){"use strict";e.d(s,"a",(function(){return a})),e.d(s,"b",(function(){return n})),e.d(s,"g",(function(){return o})),e.d(s,"d",(function(){return r})),e.d(s,"f",(function(){return c})),e.d(s,"c",(function(){return l})),e.d(s,"e",(function(){return u}));var i=e("b775");function a(t){return Object(i["a"])({url:"/detect/detect",method:"post",data:t})}function n(){return Object(i["a"])({url:"/detect/getDetectRecord",method:"get"})}function o(t){return Object(i["a"])({url:"/detect/getHubDetectResult",method:"get",params:{uuid:t}})}function r(t,s,e,a){return Object(i["a"])({url:"/detect/getFileDetectResult",method:"get",params:{uuid:t,groupID:s,artifactID:e,tag:a}})}function c(t,s,e,a,n,o){return Object(i["a"])({url:"/detect/getFunctionDetectResult",method:"get",params:{uuid:t,groupID:s,artifactID:e,tag:a,gitLocation:n,hubLocation:o}})}function l(t){return Object(i["a"])({url:"/detect/getFileCVEDetectResult",method:"get",params:{uuid:t}})}function u(t,s){return Object(i["a"])({url:"/detect/getFunctionCVEDetectResult",method:"get",params:{uuid:t,location:s}})}},2909:function(t,s,e){"use strict";function i(t,s){(null==s||s>t.length)&&(s=t.length);for(var e=0,i=new Array(s);e<s;e++)i[e]=t[e];return i}function a(t){if(Array.isArray(t))return i(t)}e.d(s,"a",(function(){return c}));e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e("fb6a"),e("b0c0"),e("ac1f"),e("00b4");function o(t,s){if(t){if("string"===typeof t)return i(t,s);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,s):void 0}}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||n(t)||o(t)||r()}},5952:function(t,s,e){"use strict";e("8283")},"76bd":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isHub,expression:"isHub"}]},[e("div",{staticClass:"box-wrapper"},[e("div",{staticClass:"box module"},[e("div",{staticClass:"tittle"},[t._v("数据统计")]),e("div",{staticClass:"match"},[e("span",{staticClass:"number"},[t._v(" "+t._s(t.number||0)+" ")]),e("span",{staticClass:"msg"},[t._v(" "+t._s(t.msg)+" ")])]),e("div",{staticClass:"notice"},[t._v(t._s(t.msgnotice))])]),e("div",{staticClass:"boxnull"}),e("div",{staticClass:"box module"},[e("div",{staticClass:"tittle"},[t._v("项目信息")]),e("el-form",{ref:"form",attrs:{"label-width":"100px","label-position":"left"}},[e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("待测链接")]),e("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.gitURL))])]),e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("待测版本")]),e("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.tag))])]),e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("commitID")]),e("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.commitID||null))])])])],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isFile,expression:"isFile"}]},[e("div",{staticClass:"box-wrapper"},[e("div",{staticClass:"box module"},[e("div",{staticClass:"tittle"},[t._v("数据统计")]),e("div",{staticClass:"match"},[e("span",{staticClass:"number"},[t._v(" "+t._s(t.number||0)+" ")]),e("span",{staticClass:"msg"},[t._v(" "+t._s(t.msg)+" ")])]),e("div",{staticClass:"notice"},[t._v(t._s(t.msgnotice))])]),e("div",{staticClass:"boxnull"}),e("div",{staticClass:"box module"},[e("div",{staticClass:"tittle"},[t._v("项目信息")]),e("el-form",{ref:"form",attrs:{"label-width":"100px","label-position":"left"}},[e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("匹配包名")]),e("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.artifactID))])]),e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("匹配组名")]),e("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.groupID))])]),e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("匹配版本")]),e("span",{staticClass:"content"},[t._v(t._s(t.info&&t.info.tag||null))])])])],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isFunction,expression:"isFunction"}]},[e("div",{staticClass:"box-wrapper"},[e("div",{staticClass:"box module"},[e("div",{staticClass:"tittle"},[t._v("数据统计")]),e("div",{staticClass:"match"},[e("span",{staticClass:"number"},[t._v(" "+t._s(t.info.number||0)+" ")]),e("span",{staticClass:"msg"},[t._v(" "+t._s(t.msg)+" ")])]),e("div",{staticClass:"notice"},[t._v(t._s(t.msgnotice))])]),e("div",{staticClass:"boxnull"}),e("div",{staticClass:"box module"},[e("div",{staticClass:"tittle"},[t._v("项目信息")]),e("el-form",{ref:"form",attrs:{"label-position":"left"}},[e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("原文件")]),e("span",{staticClass:"content"},[t._v(t._s(this.$route.query.location))])]),e("div",{staticClass:"label"},[e("span",{staticClass:"head"},[t._v("匹配文件")]),e("span",{staticClass:"content"},[t._v(t._s(this.$route.query.sameLocation))])])])],1)])])])},a=[],n=(e("caad"),e("2532"),{props:{number:{require:!0},info:{require:!1}},computed:{isFile:function(){return this.$route.path.includes("/analysis/file")},isHub:function(){return this.$route.path.includes("/analysis/hub")},isFunction:function(){return this.$route.path.includes("/analysis/function")},msg:function(){return this.isFunction?"相似函数":this.isFile?"相似文件":this.isHub?"相似maven仓库":void 0},msgnotice:function(){return this.isHub?"最多匹配10个仓库":this.isFile?"每个待测文件最多匹配10个相似文件":void 0}}}),o=n,r=(e("5952"),e("2877")),c=Object(r["a"])(o,i,a,!1,null,"4f920130",null);s["a"]=c.exports},8283:function(t,s,e){},a7f7:function(t,s,e){"use strict";e.d(s,"a",(function(){return i}));var i={backgroundColor:"#ebf1f7",borderBottom:"1px solid #ebeef5",overflow:"hidden",color:"#1767e3"}},b651:function(t,s,e){"use strict";e("c965")},c965:function(t,s,e){},d05a:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"analysis-wrapper"},[e("div",{staticClass:"module"},[e("h2",[t._v("文件级检测结果")]),e("info",{attrs:{number:t.infoobj.number,info:t.infoobj}}),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingList,expression:"loadingList"}],staticStyle:{width:"100%"},attrs:{"header-cell-style":t.backgroundColor,data:t.showList}},[e("el-table-column",{attrs:{prop:"location",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v(" "+t._s(s.row)+" ")]}}])}),e("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(e){return t.handleInfo(s.row)}}},[t._v("详情")])]}}])})],1),e("el-pagination",{attrs:{"page-size":t.info.page.size,layout:"total, prev, pager, next, sizes","page-sizes":[10,100,1e3,1e4,1e5],total:t.info.page.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},a=[],n=e("2909"),o=e("5530"),r=e("22cb"),c=e("a7f7"),l=e("76bd"),u={components:{info:l["a"]},data:function(){return{infoobj:{number:0},offset:0,loadingList:!1,showList:[],info:{expandRowKeys:[],page:{total:0,size:10,curPage:1},list:[]},backgroundColor:c["a"]}},methods:{handleCurrentChange:function(t){this.info.page.curPage=t,this.updateList()},handleSizeChange:function(t){this.info.page.size=t,this.updateList()},handleInfo:function(t){this.$router.push({path:"/analysis/cvefn",query:Object(o["a"])(Object(o["a"])({},this.$route.query),{},{location:t})})},updateList:function(){this.showList=[];for(var t=(this.info.page.curPage-1)*this.info.page.size;t<this.info.page.curPage*this.info.page.size&&t<this.info.page.total;t++)this.showList.push(this.info.list[t])},getData:function(){var t=this;this.loadingList=!0,Object(r["c"])(this.$route.query.uuid).then((function(s){var e;t.info.list=[],t.infoobj.number=0,(e=t.info.list).push.apply(e,Object(n["a"])(s.data)),t.info.page.total=t.info.list.length,t.updateList(),t.loadingList=!1})).catch((function(s){t.loadingList=!1}))}},activated:function(){this.info.expandRowKeys=[],this.getData()}},d=u,f=(e("b651"),e("2877")),p=Object(f["a"])(d,i,a,!1,null,"7250566e",null);s["default"]=p.exports}}]);