(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fddfe490"],{"0370":function(t,e,n){"use strict";n("da30")},"14aa":function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u}));var r=n("b775");function o(t){return Object(r["a"])({url:"/library/register",method:"post",data:t,baseURL:"http://graywolf.top:6101"})}function a(){return Object(r["a"])({url:"/library/getHistory",method:"get",baseURL:"http://graywolf.top:6101/"})}function i(){return Object(r["a"])({url:"/library/getLibrary",method:"get",baseURL:"http://graywolf.top:6101/"})}function l(t){return Object(r["a"])({url:"/detect/upload",method:"post",data:t,baseURL:"http://graywolf.top:6101"})}function s(){return Object(r["a"])({url:"/detect/getDetectRecord",method:"get",baseURL:"http://graywolf.top:6101/"})}function u(t){return Object(r["a"])({url:"/detect/getDetectResult",method:"get",baseURL:"http://graywolf.top:6101/",params:{insert_time:t}})}},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a"),n("b0c0"),n("ac1f"),n("00b4");function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||a(t)||i(t)||l()}},4524:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"analysis-wrapper"},[n("div",{staticClass:"module"},[n("h2",[t._v("检测结果")]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingList,expression:"loadingList"}],staticStyle:{width:"100%"},attrs:{"header-cell-style":t.backgroundColor,data:t.result,"row-key":"id","expand-row-keys":t.expandRowKeys}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-card",{staticClass:"box-card"},[n("el-table",{attrs:{data:e.row.versionlist}},[n("el-table-column",{attrs:{prop:"version",label:"匹配版本"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.templatev.includes(e.row.version)?n("div",{staticClass:"red"},[t._v(" "+t._s(e.row.version)+" ")]):n("div",[t._v(" "+t._s(e.row.version)+" ")])]}}],null,!0)}),n("el-table-column",{attrs:{prop:"coverage",label:"代码覆盖率"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.coverage).toFixed(2))+" ")]}}],null,!0)}),n("el-table-column",{attrs:{prop:"averdis",label:"平均距离"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.averdis).toFixed(2))+" ")]}}],null,!0)}),n("el-table-column",{attrs:{prop:"lineweightdis",label:"加权距离"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.lineweightdis).toFixed(2))+" ")]}}],null,!0)}),n("el-table-column",{attrs:{prop:"maxweightdis",label:"修正距离"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.maxweightdis).toFixed(2))+" ")]}}],null,!0)}),n("el-table-column",{attrs:{prop:"maxweightdis",label:"二次验证/%"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.averate).toFixed(2))+" ")]}}],null,!0)})],1)],1)]}}])}),n("el-table-column",{attrs:{label:"代码覆盖率",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.coverage).toFixed(2))+" ")]}}])}),n("el-table-column",{attrs:{label:"匹配仓库",prop:"location"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.template.includes(e.row.hubname)?n("div",{staticClass:"red"},[t._v(" "+t._s(e.row.hubname)+" "),n("span",{staticClass:"blue"},[t._v(t._s(t.findV(e.row.hubname)))])]):n("div",[t._v(" "+t._s(e.row.hubname)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"averdis",label:"平均距离"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.versionlist[0].averdis).toFixed(2))+" ")]}}])}),n("el-table-column",{attrs:{prop:"lineweightdis",label:"加权距离"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.versionlist[0].lineweightdis).toFixed(2))+" ")]}}])}),n("el-table-column",{attrs:{prop:"maxweightdis",label:"修正距离"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(Number(e.row.versionlist[0].maxweightdis).toFixed(2))+" ")]}}])}),n("el-table-column",{attrs:{prop:"maxweightdis",label:"lsc"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(100*Number(e.row.versionlist[0].averate).toFixed(2))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(n){return t.handleEdit(e.row)}}},[t._v("展开")])]}}])},[n("template",{slot:"header"},[n("el-link",{on:{click:t.openAll}},[t._v("操作")])],1)],2)],1)],1)])},o=[],a=n("2909"),i=(n("c740"),n("d3b7"),n("159b"),n("a434"),n("14aa")),l=n("a7f7"),s=n("cadb"),u={data:function(){return{formatDate:s["a"],backgroundColor:l["a"],result:[],expandRowKeys:[],template:[],templatev:[],loadingList:!1}},methods:{findV:function(t){return this.templatev[this.template.findIndex((function(e){return e==t}))]},openAll:function(){var t=this;this.expandRowKeys.length>0?this.expandRowKeys=[]:this.result.forEach((function(e){t.open(e)}))},handleEdit:function(t){var e=this.expandRowKeys.findIndex((function(e){return e==t.id}));e>-1?this.expandRowKeys.splice(e,1):this.expandRowKeys.push(t.id)},open:function(t){var e=this.expandRowKeys.findIndex((function(e){return e==t.id}));e>-1||this.expandRowKeys.push(t.id)},getData:function(){var t=this;this.result=[],this.loadingList=!0,Object(i["c"])(this.$route.query.insert_time).then((function(e){var n;t.loadingList=!1,(n=t.result).push.apply(n,Object(a["a"])(e.data))})).catch((function(e){t.loadingList=!1}))}},activated:function(){this.getData(),this.expandRowKeys=[]},deactivated:function(){}},d=u,c=(n("0370"),n("2877")),f=Object(c["a"])(d,r,o,!1,null,"d594d2c0",null);e["default"]=f.exports},a434:function(t,e,n){"use strict";var r=n("23e7"),o=n("23cb"),a=n("a691"),i=n("50c4"),l=n("7b0b"),s=n("65f0"),u=n("8418"),d=n("1dde"),c=n("ae40"),f=d("splice"),p=c("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var n,r,d,c,f,p,v=l(this),y=i(v.length),w=o(t,y),_=arguments.length;if(0===_?n=r=0:1===_?(n=0,r=y-w):(n=_-2,r=h(b(a(e),0),y-w)),y+n-r>m)throw TypeError(g);for(d=s(v,r),c=0;c<r;c++)f=w+c,f in v&&u(d,c,v[f]);if(d.length=r,n<r){for(c=w;c<y-r;c++)f=c+r,p=c+n,f in v?v[p]=v[f]:delete v[p];for(c=y;c>y-r+n;c--)delete v[c-1]}else if(n>r)for(c=y-r;c>w;c--)f=c+r-1,p=c+n-1,f in v?v[p]=v[f]:delete v[p];for(c=0;c<n;c++)v[c+w]=arguments[c+2];return v.length=y-r+n,d}})},a7f7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={backgroundColor:"#ebf1f7",borderBottom:"1px solid #ebeef5",overflow:"hidden",color:"#1767e3"}},c740:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,a=n("44d2"),i=n("ae40"),l="findIndex",s=!0,u=i(l);l in[]&&Array(1)[l]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a(l)},cadb:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("2c3e"),n("25f0");function r(t,e){if("string"==typeof t)return t;if(e||(e="yyyy-MM-dd"),!t||null==t)return null;var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var r in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return e}},da30:function(t,e,n){}}]);