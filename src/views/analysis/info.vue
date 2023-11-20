<template>
  <div class="">
    <div v-show="isHub">
      <div class="box-wrapper">
        <div class="box module">
          <div class="tittle">数据统计</div>
          <div class="match">
            <span class="number">
              {{ number || 0 }}
            </span>
            <span class="msg"> {{ msg }} </span>
          </div>
          <div class="notice">{{ msgnotice }}</div>
        </div>
        <div class="boxnull"></div>

        <div class="box module">
          <div class="tittle">项目信息</div>
          <el-form ref="form" label-width="100px" :label-position="'left'">
            <div class="label">
              <span class="head">待测链接</span>
              <span class="content">{{ info && info.gitURL }}</span>
            </div>
            <div class="label">
              <span class="head">待测版本</span>
              <span class="content">{{ info && info.tag }}</span>
            </div>
            <div class="label">
              <span class="head">commitID</span>
              <span class="content">{{ (info && info.commitID) || null }}</span>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div v-show="isFile">
      <div class="box-wrapper">
        <div class="box module">
          <div class="tittle">数据统计</div>

          <div class="match">
            <span class="number">
              {{ number || 0 }}
            </span>
            <span class="msg"> {{ msg }} </span>
          </div>
          <div class="notice">{{ msgnotice }}</div>
        </div>
        <div class="boxnull"></div>
        <div class="box module">
          <div class="tittle">项目信息</div>

          <el-form ref="form" label-width="100px" :label-position="'left'">
            <div class="label">
              <span class="head">匹配包名</span>
              <span class="content">{{ info && info.artifactID }}</span>
            </div>
            <div class="label">
              <span class="head">匹配组名</span>
              <span class="content">{{ info && info.groupID }}</span>
            </div>
            <div class="label">
              <span class="head">匹配版本</span>
              <span class="content">{{ (info && info.tag) || null }}</span>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div v-show="isFunction">
      <div class="box-wrapper">
        <div class="box module">
          <div class="tittle">数据统计</div>

          <div class="match">
            <span class="number">
              {{ info.number || 0 }}
            </span>
            <span class="msg"> {{ msg }} </span>
          </div>
          <div class="notice">{{ msgnotice }}</div>
        </div>
        <div class="boxnull"></div>
        <div class="box module">
          <div class="tittle">项目信息</div>

          <el-form ref="form" :label-position="'left'">
            <div class="label">
              <span class="head">原文件</span>
              <span class="content">{{ this.$route.query.location }}</span>
            </div>
            <div class="label">
              <span class="head">匹配文件</span>
              <span class="content">{{ this.$route.query.sameLocation }}</span>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      require: true,
    },
    info: { require: false },
  },
  computed: {
    isFile() {
      return this.$route.path.includes("/analysis/file");
    },
    isHub() {
      return this.$route.path.includes("/analysis/hub");
    },
    isFunction() {
      return this.$route.path.includes("/analysis/function");
    },
    msg() {
      if (this.isFunction) return "相似函数";
      if (this.isFile) return "相似文件";
      if (this.isHub) return "相似maven仓库";
    },
    msgnotice() {
      if (this.isHub) return "最多匹配10个仓库";
      if (this.isFile) return "每个待测文件最多匹配10个相似文件";
    },
  },
};
</script>

<style scoped>
.match {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
div.notice {
  font-size: 16px;
  color: #e6a23c;
  text-align: right;
  font-weight: 400;
}
.module {
  padding: 32px 32px;
  width: 100%;
}
.module .box div span.msg {
  font-size: 24px;
  color: #333;
}
.module .box div span.number {
  color: #000;
  font-weight: 700;
  font-size: 48px;
}
.label {
  display: flex;
  margin-top: 16px;
}
.label .head {
  width: 100px;
  color: #1767e3;
  font-weight: 500;
  display: inline-block;
  /* width: 100px; */
}
.label .content {
  display: inline-block;
  flex: 1;
  text-align: left;
  color: #000;
  word-wrap: break-word;
  word-break: break-all;
}
div.tittle {
  margin-bottom: 30px;
}
</style>