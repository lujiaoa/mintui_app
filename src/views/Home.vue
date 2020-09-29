<template>
  <div class="home">
    <!-- 顶部导航开始 -->
    <mt-header title="学前端，到学问">
      <div class="login" slot="right">
        <router-link to="/reg">注册</router-link>
        <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航结束-->
    <!-- 顶部选项卡开始 -->
    <div>
      <mt-navbar v-model="active">
        <mt-tab-item
          :id="item.id.toString()"
          v-for="(item, v) of category"
          :key="v"
        >
          {{ item.category_name }}
        </mt-tab-item>
      </mt-navbar>
    </div>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <div
      class="main"
      infinite-scroll-distance="20"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
    >
      <mt-tab-container v-model="active">
        <mt-tab-container-item :id="active.toString()">
          <!-- 单一文章信息开始 -->
          <div
            class="article"
            v-for="(article, index) of articles"
            :key="index"
          >
            <!-- 文章标题 -->
            <div class="article-title">{{ article.subject }}</div>
            <!-- 文章容器 -->
            <div class="article-wrapper">
              <div class="article-image" v-if="article.image != null">
                <img v-lazy="article.image" alt="" />
              </div>
              <div class="desc">
                {{ article.description }}
              </div>
            </div>
          </div>
          <!-- 单一文章信息结束 -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板结束 -->
    <!-- 底部选项卡开始 -->
    <mt-tabbar fixed v-model="tabbar">
      <mt-tab-item id="index">
        首页
        <img
          src="../assets/index.png"
          alt=""
          slot="icon"
          v-show="tabbar != 'index'"
        />
        <img
          src="../assets/index_enable.png"
          alt=""
          slot="icon"
          v-show="tabbar == 'index'"
        />
      </mt-tab-item>
      <mt-tab-item id="me">
        <!-- 不建议直接使用href="/me"   ，有点投机取巧的感觉 ，最好使用监听变量的值，来进行跳转 -->
        我的
        <img src="../assets/me.png" alt="" slot="icon" v-if="tabbar != 'me'" />
        <img src="../assets/me_enable.png" alt="" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
    <!-- <tabbar></tabbar> -->
    <!-- 底部选项卡结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      tabbar: "index",
      category: [],
      articles: [],
      page: 1,
      // 无限滚动开关
      busy: false,
    };
  },
  methods: {
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.axios.get(`/lists?cid=${this.active}&page=${this.page}`).then((res) => {
          let data = res.data.results;
          // 动态处理图片
          data.forEach((item) => {
            // 当收到的图片不为空时处理数据
            if (item.image != null) {
              item.image = require("../assets/articles/" + item.image);
            }
            // 不管图片是否为空，都将数据添加到this.articles
            this.articles.push(item);
          });
          // this.articles=data;
        });
        this.busy = false;
      }, 2000);
    },
  },
  mounted() {
    // 来获取文章分类信息
    this.axios.get("/category").then((result) => {
      // console.log(result.data)
      this.category = result.data.result;
    });
    // 获取默认文章分类下文章数据
    this.axios.get(`/lists?cid=${this.active}&page=1`).then((res) => {
      let data = res.data.results;
      // 动态处理图片
      data.forEach((item) => {
        // 当收到的图片不为空时处理数据
        if (item.image != null) {
          item.image = require("../assets/articles/" + item.image);
        }
        // 不管图片是否为空，都将数据添加到this.articles
        this.articles.push(item);
      });
      // this.articles=data;
    });
  },
  watch: {
    // 监听顶部选项卡
    active() {
      this.axios.get("/lists?cid=" + this.active + "&page=1").then((res) => {
        // console.log('123')
        let data = res.data.results;
        // 动态处理图片
        this.articles = [];
        data.forEach((item) => {
          // 当收到的图片不为空时处理数据
          if (item.image != null) {
            item.image = require("../assets/articles/" + item.image);
          }
          // 不管图片是否为空，都将数据添加到this.articles
          this.articles.push(item);
        });
      });
    },
    // 两个参数，参数1表示新值，参数2表示旧值
    tabbar(value) {
      if (value == "index") {
        this.$router.push("/").catch((e) => {});
      } else {
        this.tabbar = "me";
        this.$router.push("/me").catch((e) => {});
      }
    },
  },
};
</script>
<style>
.home .login a {
  color: #fff;
  text-decoration: none;
  /* padding: 5px 3px; */
  margin-left: 5px;
}
.home .main {
  margin-bottom: 55px;
}
.home .article {
  margin: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #999;
}
.article-title {
  font-size: 16px;
  font-weight: bold;
  color: #1a1a1a;
  line-height: 22px;
  margin-bottom: 10px;
}
.article-wrapper {
  display: flex;
  align-content: center;
}
.article-image > img {
  width: 112px;
  border-radius: 5px;
  margin-right: 15px;
}
.desc {
  overflow: hidden;
  font-size: 15px;
  line-height: 21px;
  height: 63px;
  color: #444;
  font-weight: 400;
  text-overflow: ellipsis;
}
</style>
