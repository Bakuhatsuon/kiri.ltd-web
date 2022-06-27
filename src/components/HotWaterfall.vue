<template>
  <div>
    <vue-masonry-wall :items="randomImgArr" :options="options">
      <template v-slot:default="{item}">
        <div class="item">
          <img :src="item.original" :alt="item.original" class="random-img" @click="getComment(item.id)">
          <div class="Sxcoo" v-if="item.page > 1">
            <div class="liXhix"></div>
            <div class="hHNegy">
              <div class="kZlOCw">
                <span class="gODLwk">
                  <span class="gbNjFx">
                    <svg viewBox="0 0 9 10" size="9"
                         class="fArvVr">
                      <path d="M8,3 C8.55228475,3 9,3.44771525 9,4 L9,9 C9,9.55228475 8.55228475,10 8,10 L3,10
                          C2.44771525,10 2,9.55228475 2,9 L6,9 C7.1045695,9 8,8.1045695 8,7 L8,3 Z M1,1 L6,1
                          C6.55228475,1 7,1.44771525 7,2 L7,7 C7,7.55228475 6.55228475,8 6,8 L1,8 C0.44771525,8
                          0,7.55228475 0,7 L0,2 C0,1.44771525 0.44771525,1 1,1 Z"
                            transform="">
                      </path>
                    </svg>
                  </span>
                </span>
                <span><a v-html="item.page"></a></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vue-masonry-wall>
    <p style="text-align: center">已经到底啦...</p>
  </div>
</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
import Interceptor from "../assets/script/interceptor";

export default {
  name: 'hot-waterfall',
  components: {VueMasonryWall},
  data() {
    return {
      randomImgArr: [],
      options: {
        width: 300,
        padding: {
          default: 5,
          1: 6,
          2: 8,
        }
      },
      xRestrict: "AllAges"
    }
  },
  methods: {
    getRandomImgArr() {
      const getRandomImgArr = Interceptor('get', '/illusts/topRanking/' + this.xRestrict);
      getRandomImgArr.then((result) => {
        for (let i = 0; i < result.length; i++) {
          this.randomImgArr.push({
            id: `${result[i].id}`,
            original: `${result[i].original}`,
            page: `${result[i].page}`,
            xRestrict: `${result[i].xRestrict}`
          });
        }
      });
      VueMasonryWall.redraw();
    },
    getComment(illustsId) {
      this.$router.push({name: 'IllustsComment', params: {illustsId:illustsId}});
    }
  },
  mounted() {
    this.getRandomImgArr();
  }
}
</script>

<style scoped>
  @import '../assets/css/waterfall.css';
</style>
