<template>
  <div>
    <!-- 底部选项卡开始 -->
    <mt-tabbar fixed v-model="tabbar">
      <mt-tab-item id="index">
        首页
        <img src="../assets/index.png" alt="" slot="icon" v-show="tabbar != 'index' ">
        <img src="../assets/index_enable.png" alt="" slot="icon" v-show="tabbar == 'index' ">
      </mt-tab-item>
      <mt-tab-item id="me">
        <!-- 不建议直接使用href="/me"   ，有点投机取巧的感觉 ，最好使用监听变量的值，来进行跳转 -->
        我的
        <img src="../assets/me.png" alt="" slot="icon" v-if=" tabbar != 'me' ">
        <img src="../assets/me_enable.png" alt=""  slot="icon" v-else >
      </mt-tab-item>
    </mt-tabbar >
    <!-- 底部选项卡结束 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabbar:'index'
    }
  },
  watch:{
    // 两个参数，参数1表示新值，参数2表示旧值
    tabbar(value){
      if(value=='index'){
        this.$router.push("/").catch(e=>{})
      }else{
        this.tabbar="me"
        this.$router.push("/me").catch((e)=>{})
      }
    }
  }
}
</script>

<style>

</style>