<template>
  <div class="analysis-wrapper">
    <div class="module">
      <h2>文件级检测结果</h2>
      <info :number="infoobj.number" :info="infoobj" />

      <!-- <div class="search">
      <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
    </div> -->
      <el-table
        :expand-row-keys="info.expandRowKeys"
        row-key="id"
        style="width: 100%"
        v-loading="loadingList"
        :header-cell-style="backgroundColor"
        :data="showList"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-card class="box-card">
              <el-table :data="props.row.sameFiles">
                <el-table-column prop="sameLocation" label="匹配文件">
                </el-table-column>
                <el-table-column
                  prop="sameArtifactID"
                  label="包名"
                  width="80px"
                >
                </el-table-column>
                <el-table-column prop="sameGroupID" label="组名" width="160px">
                </el-table-column>
                <el-table-column prop="sameTag" label="版本号" width="80px">
                </el-table-column>
                <el-table-column prop="similarity" label="相似度 %" width="80">
                  <template slot-scope="scope">
                    {{ Number(scope.row.similarity).toFixed(2) }}
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="80px">
                  <template slot="header">
                    <el-link @click="openAll">操作</el-link>
                  </template>
                  <template slot-scope="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      plain
                      @click="handleInfo(scope.row, props.row)"
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </template>
        </el-table-column>
        <el-table-column prop="location" label="原文件"> </el-table-column>
        <el-table-column
          prop="linesOfFormatCode"
          label="代码长度"
          width="100px"
        >
        </el-table-column>
        <el-table-column prop="length" label="匹配数" width="100px"
          ><template slot-scope="scope">
            {{ scope.row.sameFiles.length }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px">
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
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="info.page.size"
        layout="total, prev, pager, next, sizes"
        :page-sizes="[10, 100, 1000, 10000, 100000]"
        :total="info.page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getFileDetectResult } from "@/api/analys";
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
    handleCurrentChange(val) {
      this.info.page.curPage = val;
      this.updateList();
    },
    handleSizeChange(val) {
      this.info.page.size = val;
      this.updateList();
    },
    openAll() {
      if (this.info.expandRowKeys.length > 0) {
        this.info.expandRowKeys = [];
        return;
      }
      this.showList.forEach((item) => {
        this.open(item);
      });
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
    handleEdit(row) {
      let index = this.info.expandRowKeys.findIndex((item) => {
        return item == row.id;
      });
      if (index > -1) this.info.expandRowKeys.splice(index, 1);
      else {
        this.info.expandRowKeys.push(row.id);
      }
    },
    handleInfo(same, org) {
      this.$router.push({
        path: "/analysis/function",
        query: {
          ...this.$route.query,
          ...same,
          ...org,
        },
      });
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
      getFileDetectResult(
        this.$route.query.uuid,
        this.$route.query.sameGroupID,
        this.$route.query.sameArtifactID,
        this.$route.query.sameTag
      )
        .then((res) => {
          this.info.list = [];
          this.infoobj.number = 0;
          res.data.cloneFiles.forEach((item, idx) => {
            item.id = idx;
            this.infoobj.number += item.sameFiles.length;
          });
          this.info.list.push(...res.data.cloneFiles);
          this.info.page.total = this.info.list.length;
          this.updateList();
          this.loadingList = false;
          this.infoobj.artifactID = res.data.artifactID;
          this.infoobj.groupID = res.data.groupID;
          this.infoobj.tag = res.data.tag;
        })
        .catch((res) => {
          this.loadingList = false;
        });
    },
  },
  activated() {
    this.info.expandRowKeys = [];
    this.getData();
  },
};
</script>

<style scoped>
.wrapper {
  padding: 30px;
}
.search {
  width: 300px;
  margin: 30px 0;
}
h2 {
  text-align: center;
}
</style>