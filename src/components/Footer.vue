<template>
  <footer>
    <p>{{copyright}}{{additional}}</p>
  </footer>
</template>

<script>
  export default {
    name: "app-footer",
    data() {
      return{
        copyright:'Copyright 2017 Vue Demo'
      }
    },
    props:{
      additional:{
        type:String
      }
    }
  }
</script>

<style scoped>
  footer{
    background: #222222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
