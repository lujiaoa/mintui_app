<template>
  <div class="header">
    <mt-header title="学子问答" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <div slot="right">
        <mt-button icon="more" @click="()=>{this.$router.push('/')}"></mt-button>
      </div>
    </mt-header>
    <div class="num">
      <p v-for="(item,v) of 100" :key="v">{{v}}</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.header .num{
  margin-top: 40px;
}
</style>