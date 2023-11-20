<template>
  <div class="data-wrapper" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="module">
      <h2>指纹管理</h2>
      <el-button type="primary" @click="showReset">
        <i class="el-icon-refresh-right el-icon--left"></i>
        重置指纹库</el-button
      >
      <el-button type="primary" @click="showAdd = true"
        ><i class="el-icon-upload el-icon--left"></i>添加指纹</el-button
      >
    </div>

    <el-dialog title="数据入库" :visible.sync="showAdd" width="600px">
      <el-form
        ref="ruleForm"
        label-width="80px"
        :rules="rules"
        :model="fileFormData"
        v-loading="loading"
      >
        <el-form-item label="文件" prop="filelist">
          <el-upload
            class="upload-demo"
            action=""
            :multiple="false"
            :auto-upload="false"
            :on-change="onChange"
            :file-list="clear"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>

        <el-form-item label="库名" prop="lib">
          <el-input v-model="fileFormData.lib"></el-input>
        </el-form-item>
        <el-form-item label="版本" prop="ver">
          <el-input v-model="fileFormData.ver"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showAdd = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <div class="module">
      <h2>入库记录</h2>
      <el-table
        :data="hisotry.data"
        style="width: 100%"
        :header-cell-style="backgroundColor"
        v-loading="listLoading"
      >
        <el-table-column prop="inser_time" label="上传时间">
          <template slot-scope="scope">
            {{
              formatDate(
                new Date(Number(scope.row.insert_time)),
                "yyyy-MM-dd hh:mm:ss"
              )
            }}
          </template>
        </el-table-column>
        <el-table-column prop="lib" label="库名"> </el-table-column>
        <el-table-column prop="version" label="版本号"> </el-table-column>
        <el-table-column prop="state" label="入库状态" width="100px">
          <template slot-scope="scope">
            <div class="state">
              <span class="el-tag" v-show="scope.row.state == 3"
                >入库成功
              </span>

              <span class="el-tag el-tag--danger" v-show="scope.row.state == 2"
                >入库失败</span
              >
              <span class="el-tag el-tag--info" v-show="scope.row.state == 1"
                >入库中</span
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="msg" label="错误信息"> </el-table-column>
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
import { insert, getHistory } from "@/api/js";
import { tableHeader } from "@/utils/style.js";
import { formatDate } from "@/utils/time";

export default {
  data() {
    return {
      formatDate: formatDate,
      hisotry: {
        page: {
          total: 0,
          size: 10,
          curPage: 1,
        },
        data: [],
      },
      backgroundColor: tableHeader,
      showAdd: false,
      fullscreenLoading: false,
      listLoading: false,
      resultList: [],
      loading: false,
      clear: [],
      fileFormData: {
        filelist: [],
        ver: "",
        lib: "",
      },
      rules: {
        filelist: [
          {
            required: true,
            message: "选择文件",
            trigger: "blur",
          },
        ],
        ver: [
          {
            required: true,
            message: "请输入版本号",
            trigger: "blur",
          },
        ],
        lib: [{ required: true, message: "请输入库名", trigger: "blur" }],
      },
    };
  },
  methods: {
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
    onChange(file, fileList) {
      this.$set(this.fileFormData, "filelist", fileList);
      this.$nextTick(() => {
        this.$refs["ruleForm"].validateField("filelist");
      });
      // this.fileFormData.filelist = fileList;
    },
    submitUpload() {
      this.loading = true;

      let form = new FormData();
      form.append("file", this.fileFormData.filelist[0].raw);
      form.append("version", this.fileFormData.ver);
      form.append("hubName", this.fileFormData.lib);
      console.log(form);
      insert(form)
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
      this.showAdd = false;
      this.clear = [];
      this.loading = false;
      this.getResList();
      this.fileFormData.filelist = [];
      this.fileFormData.ver = "";
      this.fileFormData.lib = "";
    },
    showReset() {
      this.$confirm("此操作将永久删除现有指纹库, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      });
    },
    getResList() {
      this.hisotry.data = [];
      getHistory().then((res) => {
        this.hisotry.data.push(...res.data);
        this.hisotry.page.total = res.data.length;
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
