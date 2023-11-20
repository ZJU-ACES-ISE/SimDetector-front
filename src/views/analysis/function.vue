<template>
  <div class="analysis-wrapper">
    <div class="module">
      <h2>检测结果</h2>
      <info :info="infoobj" />
      <el-table
        v-loading="loadingList"
        :header-cell-style="backgroundColor"
        :data="showList"
        style="width: 100%"
        row-key="id"
        :expand-row-keys="info.expandRowKeys"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-card class="box-card">
              <el-table :data="props.row.sameFunctions">
                <el-table-column prop="sameGroupID" label="组名" width="150">
                </el-table-column>
                <el-table-column
                  prop="sameArtifactID"
                  label="匹配包名"
                  width="150"
                >
                </el-table-column>
                <el-table-column prop="sameLocation" label="匹配文件">
                </el-table-column>

                <el-table-column label="代码位置" width="100">
                  <template slot-scope="scope">
                    {{
                      "[" +
                      scope.row.sameStartLine +
                      "," +
                      scope.row.sameEndLine +
                      "]"
                    }}
                  </template>
                </el-table-column>
                <el-table-column prop="similarity" label="相似度/%" width="100">
                  <template slot-scope="scope">
                    {{ Number(scope.row.similarity).toFixed(2) }}
                  </template>
                </el-table-column>
                <el-table-column prop="sameTag" label="版本" width="100">
                </el-table-column>
                <!-- <el-table-column prop="link" label="链接" width="120">
                  <template slot-scope="scope">
                    <el-link icon="el-icon-link" @click="gotolink(scope.row)"
                      >github</el-link
                    >
                  </template>
                </el-table-column> -->
              </el-table>
            </el-card>
          </template>
        </el-table-column>
        <el-table-column label="代码位置" width="100px">
          <template slot-scope="scope">
            {{ "[" + scope.row.startLine + "," + scope.row.endLine + "]" }}
          </template>
        </el-table-column>
        <el-table-column label="原文件名" prop="location"> </el-table-column>
        <el-table-column label="操作" width="100px">
          <template slot="header">
            <el-link @click="openAll">操作</el-link>
          </template>
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              plain
              @click="handleEdit(scope.row)"
              >展开</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getFunctionDetectResult } from "@/api/analys";
import { tableHeader } from "@/utils/style.js";
import info from "./info.vue";
export default {
  components: { info },
  data() {
    return {
      infoobj: {
        number: 0,
      },
      offset: 0,
      loadingList: false,
      showList: [],
      info: {
        expandRowKeys: [],
        page: {
          total: 0,
          size: 10,
          curPage: 1,
        },
        list: [],
      },
      backgroundColor: tableHeader,
    };
  },
  methods: {
    openAll() {
      if (this.info.expandRowKeys.length > 0) {
        this.info.expandRowKeys = [];
        return;
      }
      this.showList.forEach((item) => {
        this.open(item);
      });
    },
    gotolink(row) {
      window.open(row.link);
    },
    handleEdit(row) {
      let index = this.info.expandRowKeys.findIndex((item) => {
        return item == row.id;
      });
      if (index > -1) this.info.expandRowKeys.splice(index, 1);
      else {
        this.info.expandRowKeys.push(row.id);
      }
    },
    open(row) {
      let index = this.info.expandRowKeys.findIndex((item) => {
        return item == row.id;
      });
      if (index > -1) return;
      else {
        this.info.expandRowKeys.push(row.id);
      }
    },
    updateList() {
      this.showList = [];
      for (
        let i = (this.info.page.curPage - 1) * this.info.page.size;
        i < this.info.page.curPage * this.info.page.size &&
        i < this.info.page.total;
        i++
      )
        this.showList.push(this.info.list[i]);
    },
    getData() {
      this.loadingList = true;
      getFunctionDetectResult(
        this.$route.query.uuid,
        this.$route.query.sameGroupID,
        this.$route.query.sameArtifactID,
        this.$route.query.sameTag,
        this.$route.query.location,
        this.$route.query.sameLocation
      )
        .then((res) => {
          this.info.list = [];
          this.infoobj.number = 0;
          res.data.cloneFunctions.forEach((item, idx) => {
            item.id = idx;
            this.infoobj.number += item.sameFunctions.length;
          });
          this.info.list.push(...res.data.cloneFunctions);
          this.info.page.total = this.info.list.length;
          this.updateList();
          this.loadingList = false;
        })
        .catch((res) => {
          this.loadingList = false;
        });
    },
  },
  activated() {
    this.getData();
    this.expandRowKeys = [];
  },
  deactivated() {},
};
</script>

<style scoped>
.openAll {
  position: absolute;
  right: 66px;
  top: 65px;
  z-index: 20;
}
</style>


