<template>
  <div id="app">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
    </el-container>


  </div>
</template>

<script>

import Header from './Header'
import SideBar from './SideBar'
export default {
  name: 'Home',
  data(){
    return {}
  },
  components: {
    "app-header":Header,
    "side-bar":SideBar
  }

}
</script>

<style>

</style>
