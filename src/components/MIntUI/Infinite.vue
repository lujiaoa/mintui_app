<template>
  <div
    infinite-scroll-distance="50"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
  >
    <p v-for="(value, k) of i" :key="k">{{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 50,
      busy:false
    };
  },
  methods: {
    loadMore() {
      this.busy=true;
      setTimeout(() => {
        this.i += 30;
        this.busy=false
      }, 5000);
    },
  },
};
</script>

<style>
</style>