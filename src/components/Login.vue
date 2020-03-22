<template>
    <div class="login_bg">
      <el-row>
        <el-col :span="8" :offset="14">
          <div class="login-container">
            <h2 class="title">在线后台管理系统</h2>
            <el-form :model="loginUser" status-icon :rules="rules" ref="loginForm" class="loginForm" label-width="0px">
              <el-form-item>
                <el-input v-model="loginUser.email" prefix-icon="el-icon-user" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="password" v-model="loginUser.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
              </el-form-item>
              <div class="add_actions">
                <el-link type="primary">忘记密码</el-link>
              </div>
              <el-form-item>
                <el-button class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
              </el-form-item>
              <div class="info">
                <p>还没有账号,请先<router-link to="/register">注册?</router-link></p>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data () {
        return {
          loginUser: {
            email: '',
            password: '',
          },
          rules: {
            email: [
              { type: 'email',required: true,message: '邮箱格式不正确', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '密码不能为空', trigger: 'blur' },
              { min: 6, max: 30, message: '长度在2到30个字符之间', trigger: 'blur' }
            ]
          }
        }
      }
    }
</script>

<style scoped>
  .login_bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/static/images/login_bg.png") ;
  }
.login-container{
  padding: 20px 50px 30px 50px;
  margin-top: 150px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
}
.login-container .title {
  margin: 20px;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  color: #e60012;
  font-weight: bold;
}
.login-container .el-form-item__content{
  marigin-left:0;
}
.login-container .add_actions{
  float: right;
  margin: -10px 5px 10px;

}

.login-container .submit_btn{
  width: 100%;
}
.login-container .info {
  width: 100%;
  text-align: center;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
