<template>
  <div class="data-wrapper" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="module">
      <h2>漏洞管理</h2>
      <el-button type="primary" @click="showReset">
        <i class="el-icon-refresh-right el-icon--left"></i>
        重置漏洞库</el-button
      >
      <el-button type="primary" @click="showAdd"
        ><i class="el-icon-upload el-icon--left"></i>漏洞入库</el-button
      >
    </div>

    <div class="module">
      <h2>入库记录</h2>
      <el-table
        :data="hisotry.data"
        style="width: 100%"
        :header-cell-style="backgroundColor"
        v-loading="listLoading"
      >
        <el-table-column prop="hubName" label="漏洞库">
          <template slot-scope="scope">
            {{ scope.row }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80px">
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
        :page-size="hisotry.page.size"
        layout="total, prev, pager, next, sizes"
        :page-sizes="[10, 100, 1000, 10000, 100000]"
        :total="hisotry.page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { multiInsert, rebuild, getInsertCVE, getCVE } from "@/api/cve";
import { tableHeader } from "@/utils/style.js";

export default {
  data() {
    return {
      hisotry: {
        page: {
          total: 0,
          size: 10,
          curPage: 1,
        },
        data: [],
      },
      backgroundColor: tableHeader,
      fullscreenLoading: false,
      listLoading: false,
    };
  },
  methods: {
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
    showAdd() {
      this.$confirm(
        "此操作将删除现有漏洞库并将后台数据重新入库, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          this.fullscreenLoading = true;
          multiInsert()
            .then(() => {
              this.$message({
                type: "success",
                message: "操作成功!",
              });
              this.getResList();
              this.fullscreenLoading = false;
            })
            .catch(() => {
              this.getResList();
              this.fullscreenLoading = false;
            });
        })

        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    showReset() {
      this.$confirm("此操作将永久删除现有漏洞库, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.fullscreenLoading = true;
          rebuild()
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.getResList();
              this.fullscreenLoading = false;
            })
            .catch(() => {
              this.getResList();
              this.fullscreenLoading = false;
            });
        })

        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    getResList() {
      this.listLoading = true;
      getInsertCVE()
        .then((res) => {
          this.listLoading = false;
          // console.log(res.data);
          if (res.data) {
            this.resultList = [];
            this.resultList.push(...res.data);
            this.hisotry.page.total = this.resultList.length;
            this.updateList();
          }
        })
        .catch(() => {
          this.listLoading = false;
        });
    },
    handleInfo(row) {
      this.$router.push({
        path: "/data/cveinfo",
        query: {
          cveId: row,
        },
      });
    },
  },

  mounted() {
    this.getResList();
  },
};
</script>

<style scoped>
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
</style>
