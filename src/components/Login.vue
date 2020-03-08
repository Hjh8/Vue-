<template>
  <div class="login_container">
    <div class="login_box"> 
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="~assets/picture/avatar.jpg">
      </div>

      <!-- 登录框 -->
      <el-form class="login_form" :model="loginmodel" :rules="loginrules" ref="loginref">
        <!-- prop的规则名字要与需要绑定规则的名字一样 -->
        <el-form-item prop="username">
          <!-- prefix-icon表示在左边显示图标 -->
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="loginmodel.username">
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginmodel.password"
            type="password">
          </el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="btnlogin" round>登录</el-button>
          <el-button type="info" @click="resetlogin" round>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 登录表单的数据绑定对象
      loginmodel:{
        username:'admin',
        password:'123456'
      },
      loginrules:{ // 登录表单的验证规则
        username:[
          // 是否必选  不符合规则时的提示信息  鼠标失去标签触发验证
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3到10个字符', trigger:'blur' }
        ],
        password:[
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在6到15个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    resetlogin(){
      this.$refs.loginref.resetFields();
    },
    btnlogin(){
      // 表单验证成功valid为true
      this.$refs.loginref.validate(async valid => {
        // await只能放在async中，且只能修饰promise对象
        //等待await后面的函数执行完毕，异步函数内部再往下执行(即在异步函数内部变成同步操作)
        if(!valid) return;
        // 对返回对象进行解析 
        const {data:res} = await this.$http.post('login',this.loginmodel);
        if(res.meta.status !==200){
          
          return this.$message.error('登录失败！');
        }
        else{
          this.$message.success('登录成功');
          // 1.登录成功之后的token，保存到客户端的sessionStorage中
          //    必须登录之后才可以访问其他API接口
          //    token是持久化的存储机制 session是会话期间的存储机制 所以token应该保存在session里
          window.sessionStorage.setItem('token',res.data.token)
          // 2.导航跳转到后台主页
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  background-image: url('../assets/picture/login_bg.jpg');
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 3px; // 边框圆角
  position: absolute;
  left: 50%;
  top: 50%;
  // 移动向左向上自身的50%
  transform: translate(-50%,-50%);

  .avatar_box{
    height: 130px;
    width: 130px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
     transform: translate(-50%,-30%);
  }

  .btns{
    display: flex;
    justify-content: flex-end;
  }

  .login_form{
    position: absolute;
    bottom:0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>