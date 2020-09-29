<template>
  <div>
    <!-- 登录页头开始 -->
    <mt-header title="登录页面">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 登录页头结束 -->
    <!-- 表单开始 -->
    <div>
      <mt-field label="用户名"
                placeholder="请输入用户名" 
                :attr={maxlength:8}
                v-model="userName"
                @blur.native.capture="checkUserName"></mt-field>
      <mt-field
          label="密码" 
          placeholder="请输入密码" 
          type="password"
          v-model="password"
      ></mt-field>
    </div>
    <!-- 表单结束 -->
    <!--  提交按钮开始-->
    <mt-button 
          type="primary" 
          size="large">登录</mt-button>
    <!--  提交按钮结束-->

  </div>
</template>

<script>
export default {
  data(){
    return{
      userName:"",
      password:""
    }
  },
  methods:{
    checkUserName(){
      let userReg = /^\w{1,8}$/;
      if(userReg.test(this.userName)){
        // console.log("ok")
        return true
      }else{
        // console.log("失败")
        this.$toast({
          message:"用户名不符合",
          postion:"top",
          duration:"1000"
        })
      }
    }
  }
}
</script>

<style>

</style>