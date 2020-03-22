<template>
  <div class="side-bar">
    <el-menu background-color="#3b3a3f" text-color="#fff">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>客户管理</span>
        </template>
        <el-menu-item index="2-1">
          <span>客户列表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="3-1">
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <span>角色管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style scoped>
  .side-bar {
    position: fixed;
    overflow: hidden;
    height: 100%;
    width: 182px;
    z-index: 100;
    background-color: #3b3a3f;
  }
  .side-bar .el-menu{
    border: 0px;
  }
</style>
