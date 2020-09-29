<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="学前端，到学问">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/login" slot="right" class="shortcut">
        登录
      </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        :attr="{ maxlength: 6 }"
        v-model="username"
        @blur.native.capture="checkUsername" 
      ></mt-field>
      <mt-field
        type="password"
        label="密码"
        palceholder="请输入密码"
        :attr="{ maxlength: 8, autocomplete: 'off' }"
        v-model="password"
        @blur.native.capture="checkpassword"
      ></mt-field>
      <mt-field
        type="password"
        label="确认密码"
        palceholder="再次输入密码"
        :attr="{ maxlength: 8, autocomplete: 'off' }"
        v-model="conpassword"
        @blur.native.capture="checkconpassword"
      ></mt-field>
      <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>
    </div>
    <!-- 表单区域结束 -->
      <!-- 测试输入表单显示 -->
    <div class="ex">
      {{username}}
    </div>
    <div class="ex">
      {{password}}
    </div>
    <div class="ex">
      {{conpassword}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      conpassword:''
    }
  },
  methods:{
    checkUsername(){
      let usernameReg = /^\w{1,6}$/;
     if(usernameReg.test(this.username)){
      //  console.log("用户名ok")
      return true
     }else{
      //  console.log("用户名非法")
      this.$toast({
        message:"用户名为必填项",
        position:"top",
        duration:'1000'
      })
      return false
     }
    },
    checkpassword(){
      let passward = /^\w{6,8}$/;
      if(passward.test(this.password)){
        // console.log("密码格式正确")
        return true
      }else{
        this.$toast({
        message:"密码不符合格式，必须为字母与数字的组合体",
        position:"top",
        duration:'1000'
      })
      return false
      }
    },
    checkconpassword(){
      if(this.conpassword==this.password){
        console.log("两次密码一致")
        return true
      }else{
        this.$toast({
        message:"两次密码不一样",
        position:"top",
        duration:'1000'
      })
      return false
      }
    }
    ,
   handle(){
    //  console.log("handle")
    if(this.checkUsername()&& this.checkpassword() && this.checkconpassword()){
      console.log("已将消息提交到服务器")
    }
   }
  }
};
</script>

<style>
.shortcut {
  text-decoration: none;
}
.ex{
  text-align: center;
  font-size: 20px;
  color: red;
}
</style>