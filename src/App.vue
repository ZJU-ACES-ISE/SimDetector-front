<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~@/styles/variables.scss";
.module {
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 #eee;
  padding: 32px;
  margin-bottom: 32px;
}
.module h2 {
  /* float: left; */
  /* margin-top: 40px; */

  margin-top: 0px;
}
.module .box {
  padding-top: 16px;
  flex: 1;
  width: 300px;
  display: inline-block;
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  /* vertical-align: middle; */
}
.module .boxnull {
  width: 16px;
}
.module .box span {
  font-size: 20px;
  color: #656d76;
  font-weight: normal;
}
.module svg {
  fill: $main;
  width: 24px;
  height: 24px;
  margin-top: -5px;
  margin-right: 16px;
  /* display: block; */
  vertical-align: middle;
  /* margin: 0 auto; */
}
.box-wrapper {
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
}
.box div.info {
  margin-top: 30px;
  font-size: 24px;
  margin-left: 48px;
}
.module .box div span {
  font-size: 16px;
}
.module .box div.info span {
  font-size: 16px;
}
.box div {
  // margin-top: 16px;
}
.analysis-wrapper {
  padding: 30px;
  min-width: 800px;
  /* overflow: scroll; */
}
</style>
