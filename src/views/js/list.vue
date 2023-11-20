<template>
  <div class="analysis-wrapper">
    <div class="module">
      <h2>指纹库概览</h2>
      <div class="box-wrapper">
        <div class="module box">
          <div class="data">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo color-fg-muted mr-2"
            >
              <path
                d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
              ></path>
            </svg>

            {{ maveninfo.num_hub }}<span> 仓库 </span>
          </div>
        </div>
        <div class="boxnull"></div>
        <div class="module box">
          <div class="data">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-tag"
            >
              <path
                d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
              ></path>
            </svg>
            {{ maveninfo.num_ver }}<span> 版本 </span>
          </div>
        </div>
      </div>
      <el-table
        :data="showList"
        style="width: 100%"
        :header-cell-style="backgroundColor"
        v-loading="listLoading"
        row-key="id"
        :expand-row-keys="maveninfo.expandRowKeys"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-card class="box-card">
              <el-table :data="props.row.versions">
                <el-table-column prop="version" label="版本号">
                </el-table-column>
                <el-table-column prop="insert_time" label="上传时间">
                  <template slot-scope="scope">
                    {{
                      formatDate(
                        new Date(Number(scope.row.insert_time)),
                        "yyyy-MM-dd hh:mm:ss"
                      )
                    }}
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </template>
        </el-table-column>

        <el-table-column prop="lib" label="库名"> </el-table-column>
        <el-table-column prop="insert_time" label="上传时间">
          <template slot-scope="scope">
            {{
              formatDate(
                new Date(Number(scope.row.insert_time)),
                "yyyy-MM-dd hh:mm:ss"
              )
            }}
          </template>
        </el-table-column>

        <el-table-column label="操作" width="100px">
          <template slot="header">
            <el-link @click="openAll">操作</el-link>
          </template>
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              plain
              @click="handleExpand(scope.row)"
              >展开</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="maveninfo.page.size"
        layout="total, prev, pager, next, sizes"
        :page-sizes="[10, 100, 1000, 10000, 100000]"
        :total="maveninfo.page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { tableHeader } from "@/utils/style.js";
import { getLibrary } from "@/api/js";
import { formatDate } from "@/utils/time";

export default {
  data() {
    return {
      formatDate: formatDate,
      backgroundColor: tableHeader,
      listLoading: false,
      maveninfo: {
        expandRowKeys: [],
        num_hub: 0,
        num_ver: 0,
        page: {
          total: 0,
          size: 10,
          curPage: 1,
        },
        list: [],
      },
      showList: [
        {
          name: "aaa",
          group: "Apache",
          time: "2023-02-02",
          link: "http://www.baidu.com",
          id: "1",
          child: [
            {
              version: "1.0.0",
              commit: "abcdsdfv",
            },
            {
              version: "2.0.0",
              commit: "abcdsdfv",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.maveninfo.page.curPage = val;
      this.updateList();
    },
    handleSizeChange(val) {
      this.maveninfo.page.size = val;
      this.updateList();
    },
    updateList() {
      this.showList = [];
      for (
        let i = (this.maveninfo.page.curPage - 1) * this.maveninfo.page.size;
        i < this.maveninfo.page.curPage * this.maveninfo.page.size &&
        i < this.maveninfo.page.total;
        i++
      )
        this.showList.push(this.maveninfo.list[i]);
    },
    handleExpand(row) {
      let index = this.maveninfo.expandRowKeys.findIndex((item) => {
        return item == row.id;
      });
      if (index > -1) this.maveninfo.expandRowKeys.splice(index, 1);
      else {
        this.maveninfo.expandRowKeys.push(row.id);
      }
    },
    open(row) {
      let index = this.maveninfo.expandRowKeys.findIndex((item) => {
        return item == row.id;
      });
      if (index > -1) return;
      else {
        this.maveninfo.expandRowKeys.push(row.id);
      }
    },
    openAll() {
      if (this.maveninfo.expandRowKeys.length > 0) {
        this.maveninfo.expandRowKeys = [];
        return;
      }
      this.showList.forEach((item) => {
        this.open(item);
      });
    },
    getData() {
      this.listLoading = true;
      this.maveninfo.list = [];
      this.maveninfo.num_hub = 0;
      this.maveninfo.num_ver = 0;
      getLibrary()
        .then((res) => {
          this.listLoading = false;
          res.data.forEach((item, idx) => {
            item.id = idx;
            this.maveninfo.num_ver += item.versions.length;
            this.maveninfo.num_hub++;
          });
          this.maveninfo.list.push(...res.data);
          this.maveninfo.page.total = res.data.length;
          this.updateList();
        })
        .catch(() => {
          this.listLoading = false;
        });
    },
  },
  activated() {
    this.getData();
  },
};
</script>

<style scoped>
.data {
  margin-top: 16px;
}
</style>