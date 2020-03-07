<template>
  <div>
    <el-button type="info" @click="exitlogin">退出</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    exitlogin(){
      window.sessionStorage.clear();
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>