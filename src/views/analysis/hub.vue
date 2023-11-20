<template>
  <div class="analysis-wrapper">
    <div class="module">
      <h2>仓库级检测结果</h2>
      <info :number="info.list.length" :info="infoobj" />
      <div class="result">
        <div class="subtitle"></div>

        <el-table
          :data="showList"
          style="width: 100%"
          :header-cell-style="backgroundColor"
          v-loading="loadingList"
        >
          <el-table-column label="组名" prop="sameGroupID"></el-table-column>
          <el-table-column label="包名" prop="sameArtifactID">
          </el-table-column>
          <el-table-column label="版本" prop="sameTag"></el-table-column>
          <el-table-column label="相似度（%）" width="120" prop="similarity">
            <template slot-scope="scope">
              {{ Number(scope.row.similarity).toFixed(2) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100px">
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
    <!-- </div> -->
  </div>
</template>

<script>
import { getHubDetectResult } from "@/api/analys";
import { tableHeader } from "@/utils/style.js";
import info from "./info.vue";
export default {
  components: { info },
  data() {
    return {
      infoobj: {},
      offset: 0,
      filelist: [],
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
  activated() {
    window.scrollTo(0, this.offset);
  },
  deactivated() {
    this.offset = window.pageYOffset;
  },
  mounted() {
    this.getData();
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
      getHubDetectResult(this.$route.query.uuid)
        .then((res) => {
          this.loadingList = false;
          this.info.list = [];
          this.info.list.push(...res.data.sameHubs);
          this.info.page.total = this.info.list.length;
          this.updateList();
          this.infoobj.gitURL = res.data.gitURL;
          this.infoobj.commitID = res.data.commitID;
          this.infoobj.tag = res.data.tag;
        })
        .catch((res) => {
          this.loadingList = false;
        });
    },
    handleInfo(row) {
      this.$router.push({
        path: "/analysis/file",
        query: {
          ...this.$route.query,
          ...row,
        },
      });
    },
  },
};
</script>

<style scoped>
.result {
  position: relative;
}
.space {
  position: absolute;
  left: 500px;
}

.upload {
  padding: 0 0 50px 0;
}
.button {
  margin: 30px 0 0 0;
}
.progress {
  width: 300px;
}
.subtitle {
  font-size: 14px;
  color: #5e6d82;
  line-height: 3em;
  display: flex;
}
.subtitle span {
  flex: 1;
  text-align: left;
}

.title {
  text-align: center;
  /* background-color: #b3c0d1; */
  color: #333;
  line-height: 60px;
  max-width: 800px;
}
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  padding: 24px;
}
h2 {
  text-align: center;
}
</style>