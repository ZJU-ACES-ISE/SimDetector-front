<template>
  <div class="analysis-wrapper">
    <div class="module">
      <h2>检测结果</h2>
      <el-table
        :header-cell-style="backgroundColor"
        :data="result"
        style="width: 100%"
        row-key="id"
        :expand-row-keys="expandRowKeys"
        v-loading="loadingList"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-card class="box-card">
              <el-table :data="props.row.versionlist">
                <el-table-column prop="version" label="匹配版本">
                  <template slot-scope="scope">
                    <div
                      class="red"
                      v-if="templatev.includes(scope.row.version)"
                    >
                      {{ scope.row.version }}
                    </div>
                    <div v-else>
                      {{ scope.row.version }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="coverage" label="代码覆盖率">
                  <template slot-scope="scope">
                    {{ Number(scope.row.coverage).toFixed(2) }}
                  </template>
                </el-table-column>
                <el-table-column prop="averdis" label="平均距离">
                  <template slot-scope="scope">
                    {{ Number(scope.row.averdis).toFixed(2) }}
                  </template>
                </el-table-column>
                <el-table-column prop="lineweightdis" label="加权距离">
                  <template slot-scope="scope">
                    {{ Number(scope.row.lineweightdis).toFixed(2) }}
                  </template>
                </el-table-column>
                <el-table-column prop="maxweightdis" label="修正距离">
                  <template slot-scope="scope">
                    {{ Number(scope.row.maxweightdis).toFixed(2) }}
                  </template>
                </el-table-column>
                <el-table-column prop="maxweightdis" label="二次验证/%">
                  <template slot-scope="scope">
                    {{ Number(scope.row.averate).toFixed(2) }}
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </template>
        </el-table-column>
        <el-table-column label="代码覆盖率" width="100px">
          <template slot-scope="scope">
            {{  
            Number(scope.row.coverage).toFixed(2) 
            }}
          </template>
        </el-table-column>
        <el-table-column label="匹配仓库" prop="location">
          <template slot-scope="scope">
            <div class="red" v-if="template.includes(scope.row.hubname)">
              {{ scope.row.hubname }}
              <span class="blue">{{ findV(scope.row.hubname) }}</span>
            </div>
            <div v-else>
              {{ scope.row.hubname }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="averdis" label="平均距离">
          <template slot-scope="scope">
            {{ Number(scope.row.versionlist[0].averdis).toFixed(2) }}
          </template>
        </el-table-column>
        <el-table-column prop="lineweightdis" label="加权距离">
          <template slot-scope="scope">
            {{ Number(scope.row.versionlist[0].lineweightdis).toFixed(2) }}
          </template>
        </el-table-column>
        <el-table-column prop="maxweightdis" label="修正距离">
          <template slot-scope="scope">
            {{ Number(scope.row.versionlist[0].maxweightdis).toFixed(2) }}
          </template>
        </el-table-column>
        <el-table-column prop="maxweightdis" label="lsc">
          <template slot-scope="scope">
            {{ Number(scope.row.versionlist[0].averate).toFixed(2) *100}}
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
import { getDetectResult } from "@/api/js";
import { tableHeader } from "@/utils/style.js";
import { formatDate } from "@/utils/time";
export default {
  data() {
    return {
      formatDate: formatDate,
      backgroundColor: tableHeader,
      result: [],
      expandRowKeys: [],
      template: [],
      templatev: [],
      loadingList: false,

    };
  },
  methods: {
    findV(value) {
      // console.log(value);
      return this.templatev[
        this.template.findIndex((item) => {
          return item == value;
        })
      ];
    },
    openAll() {
      if (this.expandRowKeys.length > 0) {
        this.expandRowKeys = [];
        return;
      }
      this.result.forEach((item) => {
        this.open(item);
      });
    },

    handleEdit(row) {
      let index = this.expandRowKeys.findIndex((item) => {
        return item == row.id;
      });
      if (index > -1) this.expandRowKeys.splice(index, 1);
      else {
        this.expandRowKeys.push(row.id);
      }
    },
    open(row) {
      let index = this.expandRowKeys.findIndex((item) => {
        return item == row.id;
      });
      if (index > -1) return;
      else {
        this.expandRowKeys.push(row.id);
      }
    },
    getData() {
      this.result = [];

      this.loadingList = true;
      getDetectResult(this.$route.query.insert_time)
        .then((res) => {
          this.loadingList = false;
          this.result.push(...res.data);
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
.red {
  color: #f56c6c;
}
.blue {
  padding: 0 16px;
  color: #1676e3;
}
</style>


