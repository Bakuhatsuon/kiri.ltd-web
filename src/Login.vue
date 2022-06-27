<template>
  <div class="loginPanel shadow-lg">

    <div class="title">
      <span>Login</span>
    </div>

    <!-- 登录面板 -->
    <form id="login">
      <div class="loginForm">
        <form>
          <div class="form-floating mb-3">
            <input v-model="loginForm.username" type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Username">
            <label for="username">账号</label>
            <div id="usernameHelp" class="form-text">账号仅用于登录。</div>
          </div>
          <div class="form-floating">
            <input v-model="loginForm.password" type="password" class="form-control" id="password" placeholder="Password">
            <label for="password">密码</label>
          </div>
          <button type="button" @click="getLogin()" class="btn btn-info w-100" style="margin-bottom: 40px; margin-top: 40px;">登录</button>
        </form>
      </div>
    </form>

  </div>
</template>

<script>
import Interceptor from "./assets/script/interceptor";

export default {
  name: "Login",
  data() {
    return {
      loginForm : {
        username: "if@qq.com",
        password: "123456",
        type: 1
      },
      loginInfo: []
    }
  },
  methods: {
    getLogin() {
      Interceptor("post",'/role/login', this.loginForm)
        .then(response => {
          this.loginInfo = response.resultObj;
          localStorage.setItem("token", this.loginInfo.token);
          localStorage.setItem("user", JSON.stringify(this.loginInfo));
          this.$router.push("/index");
        })
        .catch(response => { // 请求失败处理
          alert("发生不可预知的异常，正通知世界树快速修复");
        });
    }
  }
}
</script>

<style scoped>

</style>

<style>

.loginPanel {
  top: calc(50vh);
  left: calc(50vw);
  width: calc(50vw);
  height: calc(70vh);
  position: absolute;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 6px 6px 10px 3px rgba(0, 0, 0, .3);
  transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  overflow: scroll;
  overflow-x: hidden;
}

.loginPanel .title {
  top: 7%;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 36px;
  font-weight: 600;
  color: #A8EDED;
  position: absolute;
}

.loginPanel .loginForm {
  top: 15%;
  left: 5%;
  background-color: #A8EDED;
  position: absolute;
  display: block;
  height: 50%;
  width: 90%;
  margin-top: 5%;
}
</style>
