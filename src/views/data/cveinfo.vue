<template>
  <div class="data-wrapper" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="module box">
      <h2>漏洞详情</h2>

      <el-form ref="form" label-width="100px" :label-position="'left'">
        <div class="label">
          <span class="head">cveId</span>
          <span class="content">{{ info[0] && info[0].cveId }}</span>
        </div>
        <div class="label">
          <span class="head">cvss2</span>
          <span class="content">{{ info[0] && info[0].cvss2 }}</span>
        </div>
        <div class="label">
          <span class="head">cvss2String</span>
          <span class="content">{{ info[0] && info[0].cvss2String }}</span>
        </div>
        <div class="label">
          <span class="head">cvss3</span>
          <span class="content">{{ info[0] && info[0].cvss3 }}</span>
        </div>
        <div class="label">
          <span class="head">cvss3String</span>
          <span class="content">{{ info[0] && info[0].cvss3String }}</span>
        </div>
        <div class="label">
          <span class="head">cwes</span>
          <span class="content">{{ info[0] && info[0].cwes }}</span>
        </div>
        <div class="label">
          <span class="head">cveDescription</span>
          <span class="content">{{ info[0] && info[0].cveDescription }}</span>
        </div>
        <div class="label">
          <span class="head">cpes</span>
          <span class="content">
            <div v-for="item in info[0] && info[0].cpes" :key="item">
              {{ item }}
            </div>
          </span>
        </div>

        <div class="label">
          <span class="head margin-top">patches</span>
          <span class="content">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item
                name="1"
                v-for="item in info[0] && info[0].patches"
                :key="item.url"
              >
                <template slot="title">
                  <div class="blue">{{ item.repo }}</div>
                </template>
                <div class="flex">
                  <span class="blue">owner</span>
                  <span class="word">{{ item.owner }}</span>
                </div>
                <div class="flex">
                  <span class="blue">repo</span>
                  <span class="word">{{ item.repo }}</span>
                </div>
                <div class="flex">
                  <span class="blue">url</span>
                  <span class="word">{{ item.url }}</span>
                </div>
                <div class="flex">
                  <span class="blue">diffFile</span>
                  <span class="word">{{ item.diffFile }}</span>
                </div>
                <div class="flex">
                  <span class="blue">commitMessage</span>
                  <span class="word">{{ item.commitMessage }}</span>
                </div>
                <div class="flex">
                  <span class="blue">files</span>
                  <span class="word">
                    <el-tree
                      :data="item.files"
                      node-key="id"
                      :expand-on-click-node="true"
                      default-expand-all=""
                    >
                      <span class="custom-tree-node" slot-scope="{ data }">
                        <!-- <div class="word">{{ node }}</div> -->
                        <div class="word" v-if="data.path">{{ data.path }}</div>
                        <div class="word" v-if="data.functionName">
                          {{ data.functionName }}
                        </div>
                        <div class="word" v-if="data.label">
                          {{ data.label }}
                        </div>
                      </span>
                    </el-tree>
                  </span>
                </div>
              </el-collapse-item>
            </el-collapse>
          </span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getCVE } from "@/api/cve";
import { tableHeader } from "@/utils/style.js";

export default {
  data() {
    return {
      activeNames: [],
      info: [],
      backgroundColor: tableHeader,
      fullscreenLoading: false,
      listLoading: false,
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      this.hisotry.page.curPage = val;
      this.updateList();
    },
    handleSizeChange(val) {
      this.hisotry.page.size = val;
      this.updateList();
    },
    updateList() {
      this.hisotry.data = [];
      for (
        let i = (this.hisotry.page.curPage - 1) * this.hisotry.page.size;
        i < this.hisotry.page.curPage * this.hisotry.page.size &&
        i < this.resultList.length;
        i++
      )
        this.hisotry.data.push(this.resultList[i]);
    },

    initData() {
      this.clear = [];
      this.fullscreenLoading = false;
      this.getResList();
      this.fileFormData.filelist = [];
      this.fileFormData.ver = "";
      this.fileFormData.groupId = "";
      this.fileFormData.pkgId = "";
      this.fileFormData.link = "";
    },
    getResList() {
      this.listLoading = true;
      getCVE(this.$route.query.cveId)
        .then((res) => {
          this.listLoading = false;
          // console.log(res.data);
          this.info.push(res.data);
          res.data.patches
            .forEach((patch) => {
              patch.files.forEach((item) => {
                item.children = item.functions;
                item.children.forEach((fn) => {
                  fn.children = [];
                });
              });
            })
            .console.log(this.info);
        })
        .catch(() => {
          this.listLoading = false;
        });
    },
    handleInfo(row) {},
  },

  mounted() {
    this.getResList();
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.flex .blue {
  width: 100px;
  margin-top: 16px;
  margin-right: 10px;
}
.flex .word {
  flex: 1;
  margin-top: 16px;
}
.word {
  word-wrap: break-word;
  word-break: break-all;
  display: flex;
  width: 100%;
  /* flex: 1; */
}
.margin-top {
  margin-top: 16px;
}
.blanck {
  width: 30px;
}
.box .content div {
  margin: 0;
}
.data-wrapper {
  padding: 32px;
}
.alter {
  color: #aaa;
  margin: 30px 0;
}
.number {
  float: right;
  line-height: 30px;
  color: #333;
  margin-top: -30px;
}
.state {
  width: 100px;
  overflow: hidden;
}
.el-tag.el-tag--danger {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}
.el-tag {
  background-color: #ecf5ff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}
.el-tag.el-tag--info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}
.match {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
div.notice {
  font-size: 16px;
  color: #e6a23c;
  text-align: right;
  font-weight: 400;
}
.module {
  padding: 32px 32px;
  width: 100%;
}
.module .box div span.msg {
  font-size: 24px;
  color: #333;
}
.module .box div span.number {
  color: #000;
  font-weight: 700;
  font-size: 48px;
}
.label {
  display: flex;
  margin-top: 16px;
}
.label .head {
  width: 150px;
  color: #1767e3;
  font-weight: 500;
  display: inline-block;
  /* width: 100px; */
}
.label .content {
  display: inline-block;
  flex: 1;
  text-align: left;
  color: #000;
  word-wrap: break-word;
  word-break: break-all;
}
div.tittle {
  margin-bottom: 30px;
}
</style>
