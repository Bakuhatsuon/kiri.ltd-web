<template>
  <div id="navbar" class="header-container">

    <button @click="drawer = true" class="more-button">
      <i class="el-icon-s-unfold" style="font-size: 24px"/>
    </button>

    <img src="../assets/img/kiri.png" alt="logo" class="logo-container" @click="toHome">

    <el-input
      placeholder="搜索"
      v-model="keyword"
      prefix-icon="el-icon-search"
      clearable
      class="search-input">
      <el-button slot="append" icon="el-icon-search" @click="search"/>
      <el-button slot="append" icon="el-icon-camera" @click="searchByImg"/>
    </el-input>

    <div class="avatar-container">
      <el-avatar :src="avatar"/>
    </div>

      <el-drawer
          title="nav"
          :with-header="false"
          :visible.sync="drawer"
          :show-close="showClose"
          close-on-press-escape
          size="17%"
          :direction="direction"
        >
          <button @click="drawer = false" class="close-more-button">
            <i class="el-icon-s-fold" style="font-size: 24px"/>
          </button>
          <img src="../assets/img/kiri.png" alt="logo" class="drawer-logo-container">
        </el-drawer>
  </div>
</template>

<script>
// import saucenao from "../assets/script/saucenao";
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      showClose: false,
      direction: 'ltr',
      keyword: '',
      avatar: 'http://192.168.29.128:80/group1/M00/00/0B/wKgdgGJ6OMWAOjrbAAU7iTNmw7I560.jpg'
    };
  },
  methods: {
    search() {
      let keyword = this.keyword;
      if (keyword != null && keyword !== '' && keyword !== undefined) {
        this.$message({
          message: '您输入的是：' + keyword,
          showClose: true,
          type: 'success'
        })
      } else {
        this.$message({
          message: '未识别到输入内容！',
          showClose: true,
          type: 'error'
        });
      }
    },
    searchByImg() {
      this.$message("功能尚未开放，敬请期待。")
      // saucenao.saucenao();
    },
    toHome() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
@import '../assets/css/navbar.css';
</style>
