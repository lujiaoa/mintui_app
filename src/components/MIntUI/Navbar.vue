<template>
  <div>
    <div>
      <mt-header title="效果测试"></mt-header>
      <!-- 选项卡开始 -->
      <mt-navbar v-model="active">
        <mt-tab-item id="1">jquery</mt-tab-item>
        <mt-tab-item id="2">html5</mt-tab-item>
        <mt-tab-item id="3">css3</mt-tab-item>
        <mt-tab-item id="4">javascript</mt-tab-item>
      </mt-navbar>
      <!-- 选项卡结束 -->
    </div>
    <!-- 主页面板开始 -->
    <div class="main">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1">
          <p v-for="i of 50" :key="i">{{i}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">222</mt-tab-container-item>
        <mt-tab-container-item id="3">333</mt-tab-container-item>
        <mt-tab-container-item id="4">444</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 主页面板结束 -->
    <!-- 底部选项卡开始 -->
    <div class="bottom">
      <mt-tabbar v-model="tabbar" fixed>
        <mt-tab-item id="index"
          >首页
          <img src="../../assets/index.png" alt="" slot="icon"  v-show="tabbar!='index'"/>
          <img src="../../assets/index_enable.png" alt="" slot="icon" v-show="tabbar=='index'"/>
        </mt-tab-item>
        <mt-tab-item id="cart"
          >购物车
          <img src="../../assets/shop.png" alt="" slot="icon" v-show="tabbar!='cart' "/>
          <img src="../../assets/shop_enable.png" alt="" slot="icon" v-show="tabbar=='cart' "/>
        </mt-tab-item>
        <mt-tab-item id="me"
          >我的
          <img src="../../assets/me.png" alt="" slot="icon" v-show="tabbar!='me' "/>
          <img src="../../assets/me_enable.png" alt="" slot="icon" v-show="tabbar=='me' "/>
        </mt-tab-item>
    </mt-tabbar>
    </div>
    
    <!-- 底部选项卡结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      tabbar: "index"
    };
  }
};
</script>

<style>
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.bottom{
  margin-top: 55px;
}
.main{
}
</style>
