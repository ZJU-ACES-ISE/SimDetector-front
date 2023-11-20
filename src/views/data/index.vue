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

        <el-form-item label="组名" prop="groupId">
          <el-input v-model="fileFormData.groupId"></el-input>
        </el-form-item>
        <el-form-item label="包名" prop="pkgId">
          <el-input v-model="fileFormData.pkgId"></el-input>
        </el-form-item>
        <el-form-item label="版本" prop="ver">
          <el-input v-model="fileFormData.ver"></el-input>
        </el-form-item>
        <el-form-item label="github链接">
          <el-input v-model="fileFormData.link"></el-input>
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
        <el-table-column prop="hubName" label="包名"> </el-table-column>
        <el-table-column prop="groupId" label="组名"> </el-table-column>
        <el-table-column prop="tag" label="版本号"> </el-table-column>
        <el-table-column prop="gitUrl" label="链接">
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
        <el-table-column prop="status" label="入库状态" width="100px">
          <template slot-scope="scope">
            <div class="state">
              <span class="el-tag" v-show="scope.row.status == 1"
                >入库成功
              </span>

              <span
                class="el-tag el-tag--danger"
                v-show="scope.row.status == -1"
                >入库失败</span
              >
              <span class="el-tag el-tag--info" v-show="scope.row.status == 0"
                >入库中</span
              >
            </div>

            <!-- <transition name="el-fade-in">
              <div v-show="show" class="transition-box">.el-fade-in</div>
            </transition> -->
          </template>
        </el-table-column>
        <el-table-column prop="insertTime" label="上传时间"> </el-table-column>
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
import { insert, getInsertRecord, rebuild } from "@/api/data";
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
        data: [
          {
            name: "aaa",
            group: "Apache",
            time: "2023-02-02",
            version: "1.0.0",
            link: "http://www.baidu.com",
            state: "入库中",
          },
          {
            name: "aaa",
            group: "Apache",
            time: "2023-02-02",
            version: "2.0.0",
            link: "",
            state: "入库成功",
          },
          {
            name: "aaa",
            group: "Apache",
            time: "2023-02-02",
            version: "3.0.0",
            link: "",
            state: "入库失败",
          },
        ],
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
        groupId: "",
        pkgId: "",
        link: "",
      },
      rules: {
        filelist: [
          {
            required: true,
            message: "请选择maven的jar包文件",
            trigger: "blur",
          },
        ],
        ver: [{ required: true, message: "请输入版本号", trigger: "blur" }],
        groupId: [{ required: true, message: "请输入组名", trigger: "blur" }],
        pkgId: [{ required: true, message: "请输入报名", trigger: "blur" }],
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
      form.append("groupID", this.fileFormData.groupId);
      form.append("artifactID", this.fileFormData.pkgId);
      form.append("tag", this.fileFormData.ver);
      form.append("gitURL", this.fileFormData.link);
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
      this.fileFormData.groupId = "";
      this.fileFormData.pkgId = "";
      this.fileFormData.link = "";
    },
    showReset() {
      this.$confirm("此操作将永久删除现有指纹库, 是否继续?", "提示", {
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
      getInsertRecord()
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
