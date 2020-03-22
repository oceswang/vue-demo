<template>
  <header>
    <el-row class="nav-bar">
      <el-col :span="6">
        <div class="head-logo"></div>

      </el-col>
      <el-col :span="1" :offset="17">
        <el-popover
          placement="bottom"
          width="120"
          trigger="click"
          :popper-class="userMenuClass">
          <el-menu>
            <el-menu-item index="1">
              <el-avatar :size="35" :src="headPic"></el-avatar>
              <span>&nbsp;&nbsp;姓名</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-user"></i>
              <span>账号管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-switch-button"></i>
              <span>注销</span>
            </el-menu-item>
          </el-menu>
          <el-button slot="reference" type="text">
            <el-avatar :size="35" :src="headPic"></el-avatar>
          </el-button>
        </el-popover>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: "app-header",
    data() {
      return {
        headPic: "https://cdn.yonyoucloud.com/pro/yht/5417/3566268/201908/16/156592160744ef6d1914a240d0479e81c700e7e75a.jpg",
        userMenuClass:"user-menu"
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    min-width: 1024px;
    height: 60px;
    background: #fff;
    /* border-bottom:1px solid #e6eaeb; */
    -moz-box-shadow: rgba(0, 0, 0, 0.0980392) 0px 1px 1px; /*firefox*/
    -webkit-box-shadow: rgba(0, 0, 0, 0.0980392) 0px 1px 1px; /*webkit*/
    box-shadow: rgba(0, 0, 0, 0.0980392) 0px 1px 1px; /*opera或ie9*/
    z-index: 2000;
  }

  .head-logo {
    width: 301px;
    height: 60px;
    background: url(/static/images/logo.png?v=4) no-repeat;
    margin-top: 12px;
    margin-left: 10px;
  }

  .user-menu {
    padding: 1px !important;
    margin-top: 5px;
  }

  .user-menu .el-menu {
    border-right: 0px;
  }

  .user-menu .el-menu-item {
    height: 45px;
    line-height: 45px;
  }
</style>
