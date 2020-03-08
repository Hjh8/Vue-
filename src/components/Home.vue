<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <span>管理系统</span>
      </div>
      <el-button type="info" @click="exitlogin">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
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

<style lang='less' scoped>
.home-container{
  height: 100%;
}
.el-header{
  background-color:#373D41;
  display: flex;
  justify-content: space-between;
  color:azure;
  font-size: 20px;
  >div{
    display: flex;
    align-items: center;
    span{
      margin-left: 15px;
    };
  }
}
.el-aside{
  background-color: #333744;
}
</style>