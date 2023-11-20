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
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-card class="box-card">
              <el-table :data="props.row.children">
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
              </el-table>
            </el-card>
          </template>
        </el-table-column>
        <el-table-column label="代码覆盖率" width="100px">
          <template slot-scope="scope">
            {{ scope.row.coverage }}
          </template>
        </el-table-column>
        <el-table-column label="匹配仓库" prop="location">
          <template slot-scope="scope">
            <div class="red" v-if="template.includes(scope.row.hub)">
              {{ scope.row.hub }}
              <span class="blue">{{ findV(scope.row.hub) }}</span>
            </div>
            <div v-else>
              {{ scope.row.hub }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="averdis" label="平均距离">
          <template slot-scope="scope">
            {{ Number(scope.row.children[0].averdis).toFixed(2) }}
          </template>
        </el-table-column>
        <el-table-column prop="lineweightdis" label="加权距离">
          <template slot-scope="scope">
            {{ Number(scope.row.children[0].lineweightdis).toFixed(2) }}
          </template>
        </el-table-column>
        <el-table-column prop="maxweightdis" label="修正距离">
          <template slot-scope="scope">
            {{ Number(scope.row.children[0].maxweightdis).toFixed(2) }}
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
import { tableHeader } from "@/utils/style.js";
import * as cover from "../../assets/json/temp1_adv.json";
export default {
  data() {
    return {
      backgroundColor: tableHeader,

      result: [],
      expandRowKeys: [],
      template: [
        "@vue/babel-helper-vue-jsx-merge-props",
        "@vue/babel-preset-jsx",
        "axios",
        "core-js",
        "devops-ui",
        "js-cookie",
        "lodash-es",
        "md5",
        "streamsaver",
        "vue",
        "vue-loader",
        "vue-router",
        "vue-template-compiler",
        "vuedraggable",
        "vuex",
      ],
      templatev: [
        "@vue/babel-helper-vue-jsx-merge-props@1.0.0",
        "@vue/babel-preset-jsx@1.1.2",
        "axios@0.19.2",
        "core-js@3.6.4",
        "devops-ui@1.5.3",
        "js-cookie@2.2.1",
        "lodash-es@4.17.15",
        "md5@2.3.0",
        "streamsaver@2.0.5",
        "vue@2.7.13",
        "vue-loader@17.0.1",
        "vue-router@3.6.5",
        "vue-template-compiler@2.7.13",
        "vuedraggable@2.24.3",
        "vuex@3.1.3",
      ],
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
      cover.default.forEach((item, index) => {
        let obj = {};
        obj.id = index;
        obj.children = [];
        obj.hub = item.hubname;
        obj.coverage = Number(item.coverage * 100).toFixed(2) + "%";
        obj = { ...item, ...obj };
        // console.log(item);
        item.versionlist.forEach((each, idx) => {
          obj.children.push({
            coverage: Number(each.coverage * 100).toFixed(2) + "%",
            version: decodeURIComponent(each.version),
            ...each,
          });
        });
        this.result.push({ ...obj, hasChildren: true });
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


