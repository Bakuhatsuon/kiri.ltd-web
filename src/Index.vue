<template>
  <div>
    <navbar/>
    <el-switch
      style="display: block; right: calc(10vw); top: calc(12vh); position: absolute; z-index: 1;"
      v-model="xRestrict"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="AllAges"
      inactive-text="R-18"
      @click="switchXRestrict"
    >
    </el-switch>
    <el-tabs v-model="activeName" class="tab-container">
      <el-tab-pane label="今日推荐" name="RandomWaterfall">
        <RandomWaterfall/>
      </el-tab-pane>
      <el-tab-pane label="今日最热" name="HotWaterfall">
        <HotWaterfall/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import RandomWaterfall from "./components/RandomWaterfall";
import HotWaterfall from "./components/HotWaterfall";
export default {
  name: 'index',
  data() {
    return {
      activeName: 'RandomWaterfall',
      xRestrict: "AllAges"
    }
  },
  components: {
    RandomWaterfall,
    HotWaterfall,
    Navbar
  },
  methods: {
    switchXRestrict() {
      alert(this.xRestrict);
    }
  }
}
</script>

<style scoped>
  @import 'assets/css/index.css';
</style>
