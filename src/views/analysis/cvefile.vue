<template>
  <div class="analysis-wrapper">
    <div class="module">
      <h2>文件级检测结果</h2>
      <info :number="infoobj.number" :info="infoobj" />

      <!-- <div class="search">
      <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
    </div> -->
      <el-table
        style="width: 100%"
        v-loading="loadingList"
        :header-cell-style="backgroundColor"
        :data="showList"
      >
        <el-table-column prop="location" label="名称">
          <template slot-scope="scope">
            {{ scope.row }}
          </template>
        </el-table-column>

        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              plain
              @click="handleInfo(scope.row)"
              >详情</el-button
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
import { getFileCVEDetectResult } from "@/api/analys";
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

    handleInfo(row) {
      this.$router.push({
        path: "/analysis/cvefn",
        query: {
          ...this.$route.query,
          location: row,
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
      getFileCVEDetectResult(this.$route.query.uuid)
        .then((res) => {
          this.info.list = [];
          this.infoobj.number = 0;

          this.info.list.push(...res.data);
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