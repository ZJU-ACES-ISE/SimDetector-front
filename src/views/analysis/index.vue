<template>
  <div class="analysis-wrapper">
    <div class="module">
      <div class="upload">
        <h2>上传文件</h2>
        <el-form
          ref="ruleForm"
          label-width="120px"
          :rules="rules"
          :model="fileFormData"
          v-loading="loading"
          :style="{ width: '480px' }"
        >
          <el-form-item label="待测文件" prop="filelist">
            <el-upload
              class="upload-demo"
              drag
              action=""
              :multiple="false"
              :auto-upload="false"
              :on-change="onChange"
              :file-list="clear"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
            </el-upload>
          </el-form-item>

          <el-form-item label="项目版本" prop="ver">
            <el-input v-model="fileFormData.ver"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm('ruleForm')" class="button"
          >确 定</el-button
        >
      </div>
    </div>
    <div class="module">
      <h2>检测记录</h2>
      <el-table
        :data="showList"
        style="width: 100%"
        :header-cell-style="backgroundColor"
        v-loading="loadingList"
      >
        <el-table-column prop="uuid" label="id"> </el-table-column>
        <el-table-column prop="tag" label="版本" width="100px">
        </el-table-column>
        <el-table-column prop="lastCommit" label="lastCommit">
        </el-table-column>
        <el-table-column prop="status" label="检测状态" width="120px">
          <template slot-scope="scope">
            <div class="state">
              <span class="el-tag" v-show="scope.row.status == 1"
                >检测成功
              </span>

              <span
                class="el-tag el-tag--danger"
                v-show="scope.row.status == -1"
                >检测失败</span
              >
              <span class="el-tag el-tag--info" v-show="scope.row.status == 0"
                >检测中</span
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="insertTime" label="检测时间"> </el-table-column>
        <el-table-column prop="gitUrl" label="链接" width="100px">
          <template slot-scope="scope">
            <el-link
              v-show="scope.row.gitUrl"
              icon="el-icon-link"
              :href="scope.row.gitUrl"
              target="_blank"
              >github</el-link
            >
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <el-button
              v-show="scope.row.status == 1"
              type="primary"
              size="mini"
              plain
              @click="handleInfo(scope.$index, scope.row)"
              >成分</el-button
            >
            <el-button
              v-show="scope.row.status == 1"
              type="danger"
              size="mini"
              plain
              @click="gotocve(scope.$index, scope.row)"
              >漏洞</el-button
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
import { detect, getDetectRecord } from "@/api/analys";
import { tableHeader } from "@/utils/style.js";

export default {
  data() {
    return {
      offset: 0,
      filelist: [],
      loading: false,
      loadingList: false,
      clear: [],
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
      fileFormData: {
        filelist: [],
        ver: "",
      },
      rules: {
        filelist: [
          {
            required: true,
            message: "Git项目zip类型压缩包,项目内必须包含.git",
            trigger: "blur",
          },
        ],
        ver: [{ required: true, message: "请输入版本号", trigger: "blur" }],
      },
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
    gotocve(index, row) {
      this.$router.push({
        path: "/analysis/cvefile",
        query: {
          ...row,
        },
      });
    },
    handleCurrentChange(val) {
      this.info.page.curPage = val;
      this.updateList();
    },
    handleSizeChange(val) {
      this.info.page.size = val;
      this.updateList();
    },
    handleInfo(index, row) {
      this.$router.push({
        path: "/analysis/hub",
        query: {
          ...row,
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

      getDetectRecord()
        .then((res) => {
          res.data.sort((a, b) => {
            return (
              -new Date(a.insertTime).getTime() +
              new Date(b.insertTime).getTime()
            );
          });
          this.loadingList = false;
          this.info.list = [];
          this.info.list.push(...res.data);
          this.info.page.total = this.info.list.length;
          this.updateList();
        })
        .catch((res) => {
          this.loadingList = false;
        });
    },

    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        path: "/analysis/function",
        query: { row: JSON.stringify(row) },
      });
    },
    onChange(file, list) {
      this.filelist = list;
    },
    submitUpload() {
      this.loading = true;
      let form = new FormData();
      form.append("file", this.fileFormData.filelist[0].raw);
      form.append("tag", this.fileFormData.ver);
      console.log(form);
      detect(form)
        .then((res) => {
          this.$message({
            type: "success",
            message: "上传成功!",
          });
          this.initData();
        })
        .catch((res) => {
          this.initData();
        });
    },
    initData() {
      this.clear = [];
      this.loading = false;
      this.getData();
      this.fileFormData.filelist = [];
      this.fileFormData.ver = "";
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitUpload();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onChange(file, fileList) {
      this.$set(this.fileFormData, "filelist", fileList);
      this.$nextTick(() => {
        this.$refs["ruleForm"].validateField("filelist");
      });
      // this.fileFormData.filelist = fileList;
    },
  },
};
</script>
<style>
</style>
<style scoped>
.result {
  position: relative;
}
.space {
  position: absolute;
  left: 500px;
}

.button {
  margin: 0px 0 0 400px;
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
