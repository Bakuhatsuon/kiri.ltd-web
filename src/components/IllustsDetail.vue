<template>
  <div>
    <navbar/>
    <div ref="scrollview" @scroll="scrollChange">
      <div class="comment-container" id="comment-container">
        <div class="illusts-container" role="presentation">
          <div class="preview-image-container" v-if="illusts.page > 1">
            <div class="preview-image-position-container">
              <div>
                <div class="preview-image-btn-container">
                  <div aria-label="预览" class="preview-image-btn-box">
                    <div class="preview-image-btn">
                      <span>
                          <span v-html="current_page"></span>
                          /
                          <span v-html="illusts.page"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="background: rgb(255, 255, 255)" v-for="(illusts_url, index) in illusts_show_urls"
               :key="index">
            <div class="pics-container" :style="{'padding-top': notFirstPic(index)}">
              <el-image
                class="single-img-container"
                :src="illusts_url"
                :preview-src-list="illusts_urls">
              </el-image>
              <!--              <img :src="illusts_url.fileUrl" class="single-img-container" alt="www.kiri.ltd">-->
            </div>
          </div>
          <div class="thumb-like-collect-share-btn-box">
            <button type="button" class="expand-button" v-if="expand_button_show" @click="getViewAll">
              <div class="expand-button-box"></div>
              <div class="expand-button-text-box">查看全部</div>
            </button>
            <section class="t-l-c-s-b-section">
              <div class="more-btn-box">
                <button class="more-btn" aria-haspopup="true">
                  <svg class="more-svg">
                    <path d="M16,18 C14.8954305,18 14,17.1045695 14,16 C14,14.8954305 14.8954305,14 16,14
C17.1045695,14 18,14.8954305 18,16 C18,17.1045695 17.1045695,18 16,18 Z M9,18
C7.8954305,18 7,17.1045695 7,16 C7,14.8954305 7.8954305,14 9,14 C10.1045695,14 11,14.8954305 11,16
C11,17.1045695 10.1045695,18 9,18 Z M23,18 C21.8954305,18 21,17.1045695 21,16
C21,14.8954305 21.8954305,14 23,14 C24.1045695,14 25,14.8954305 25,16 C25,17.1045695 24.1045695,18 23,18 Z" transform/>
                  </svg>
                </button>
              </div>
              <div class="share-btn-box">
                <button class="share-btn" aria-haspopup="true">
                  <svg class="share-svg">
                    <path d="M17,9.91842728 L17,18.0042137 C17,18.5564985 16.5522847,19.0042137 16,19.0042137
C15.4477153,19.0042137 15,18.5564985 15,18.0042137 L15,9.91842728 L11.7071068,13.2113205
C11.3165825,13.6018448 10.6834175,13.6018448 10.2928932,13.2113205
C9.90236893,12.8207962 9.90236893,12.1876312 10.2928932,11.7971069 L16,6.09000015 L21.7071068,11.7971069
C22.0976311,12.1876312 22.0976311,12.8207962 21.7071068,13.2113205
C21.3165825,13.6018448 20.6834175,13.6018448 20.2928932,13.2113205 L17,9.91842728 Z
M25,17 L25,24 C25,25.6568542 23.6568542,27 22,27 L10,27 C8.34314575,27 7,25.6568542 7,24 L7,17
C7,16.4477153 7.44771525,16 8,16 C8.55228475,16 9,16.4477153 9,17 L9,24
C9,24.5522847 9.44771525,25 10,25 L22,25 C22.5522847,25 23,24.5522847 23,24 L23,17
C23,16.4477153 23.4477153,16 24,16 C24.5522847,16 25,16.4477153 25,17 Z" transform/>
                  </svg>
                </button>
              </div>
              <div class="like-btn-box">
                <button class="like-btn" @click="like" :disabled="liked">
                  <svg viewBox="0 0 32 32" width="32" height="32"
                       :class="[liked ? 'like-svg-liked' : 'like-svg-unliked']">
                    <defs>
                      <mask id="uid-mask-53">
                        <rect x="0" y="0" width="32" height="32" fill="white"></rect>
                        <path d="M16,11.3317089 C15.0857201,9.28334665 13.0491506,7.5 11,7.5
C8.23857625,7.5 6,9.73857647 6,12.5 C6,17.4386065 9.2519779,21.7268174 15.7559337,25.3646328
C15.9076021,25.4494645 16.092439,25.4494644 16.2441073,25.3646326 C22.7480325,21.7268037 26,17.4385986 26,12.5
C26,9.73857625 23.7614237,7.5 21,7.5 C18.9508494,7.5 16.9142799,9.28334665 16,11.3317089 Z"
                              :class="[liked ? 'like-svg-path-liked' : 'like-svg-path-unliked']"></path>
                      </mask>
                    </defs>
                    <g mask="url(#uid-mask-53)">
                      <path d="
M21,5.5 C24.8659932,5.5 28,8.63400675 28,12.5 C28,18.2694439 24.2975093,23.1517313 17.2206059,27.1100183
C16.4622493,27.5342993 15.5379984,27.5343235 14.779626,27.110148 C7.70250208,23.1517462 4,18.2694529 4,12.5
C4,8.63400691 7.13400681,5.5 11,5.5 C12.829814,5.5 14.6210123,6.4144028 16,7.8282366
C17.3789877,6.4144028 19.170186,5.5 21,5.5 Z"></path>
                      <path d="M16,11.3317089 C15.0857201,9.28334665 13.0491506,7.5 11,7.5
C8.23857625,7.5 6,9.73857647 6,12.5 C6,17.4386065 9.2519779,21.7268174 15.7559337,25.3646328
C15.9076021,25.4494645 16.092439,25.4494644 16.2441073,25.3646326 C22.7480325,21.7268037 26,17.4385986 26,12.5
C26,9.73857625 23.7614237,7.5 21,7.5 C18.9508494,7.5 16.9142799,9.28334665 16,11.3317089 Z"
                            :class="[liked ? 'like-svg-path-liked' : 'like-svg-path-unliked']"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <a href="javascript:void(0)" data-xztitle="_快速收藏" title="快速收藏"
                 @click="bookmark" :class="[bookmarked ? 'bookmark bookmarkedColor' : 'bookmark']">✩</a>
              <div class="thumb-btn-box">
                <button class="thumb-btn" @click="thumb" :disabled="thumbed">
                  <svg class="thumb-svg" viewBox="0 0 12 12" v-show="!thumbed">
                    <path d="M2,6 C0.8954305,6 0,5.1045695 0,4 C0,2.8954305 0.8954305,2 2,2 C3.1045695,2 4,2.8954305 4,4
C4,5.1045695 3.1045695,6 2,6 Z M10,6 C8.8954305,6 8,5.1045695 8,4 C8,2.8954305 8.8954305,2 10,2
C11.1045695,2 12,2.8954305 12,4 C12,5.1045695 11.1045695,6 10,6 Z M2.1109127,8.8890873
C1.72038841,8.498563 1.72038841,7.86539803 2.1109127,7.47487373
C2.501437,7.08434944 3.13460197,7.08434944 3.52512627,7.47487373
C4.89196129,8.84170876 7.10803871,8.84170876 8.47487373,7.47487373
C8.86539803,7.08434944 9.498563,7.08434944 9.8890873,7.47487373
C10.2796116,7.86539803 10.2796116,8.498563 9.8890873,8.8890873
C7.74120369,11.0369709 4.25879631,11.0369709 2.1109127,8.8890873 Z"/>
                  </svg>
                  <svg class="thumb-svg" viewBox="0 0 12 12" v-show="thumbed" style="color: #0096fa;">
                    <path d="M5,7.08578644 L9.29289322,2.79289322
C9.68341751,2.40236893 10.3165825,2.40236893 10.7071068,2.79289322
C11.0976311,3.18341751 11.0976311,3.81658249 10.7071068,4.20710678 L5,9.91421356 L2.29289322,7.20710678
C1.90236893,6.81658249 1.90236893,6.18341751 2.29289322,5.79289322
C2.68341751,5.40236893 3.31658249,5.40236893 3.70710678,5.79289322 L5,7.08578644 Z">
                    </path>
                  </svg>
                  <span class="thumb-span" :style="{color:(thumbed ? '#0096fa' : '')}">赞!</span>
                </button>
              </div>
            </section>
          </div>
          <div class="illusts-info-box">
            <div class="illusts-info">
              <div class="title-intro-tags-thumb-like-bookmark-view-box">
                <h1 class="title">{{ illusts.title }}</h1>
                <div class="intro-box-out">
                  <div class="intro-box-in">
                    <p class="intro" id="intro"><span v-html="illusts.description"></span></p>
                  </div>
                </div>
                <footer class="tags-box">
                  <ul class="tags-ul">
                    <span v-for="(tag,index) in tags" :key="index">
                      <li class="tag-li">
                        <span class="tag-span">
                          <span>
                            <div class="tag-tip" style="display: inline">
                              <a :class="[index%2===0?'tag':'tag-translated']">{{ tag }}</a>
                              <div class="tooltip_description" style="display:none"
                                   :title="tag">
                                  <span v-html="tag_detail"></span>
                              </div>
                            </div>
                          </span>
                        </span>
                      </li>
                    </span>
                    <li class="tag-li">
                      <button class="add-tag-btn">
                        <svg viewBox="0 0 8 8" width="10" height="10" class="add-tag-svg">
                          <line x1="1" y1="4" x2="7" y2="4"></line>
                          <line x1="4" y1="1" x2="4" y2="7"></line>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </footer>

                <ul class="thumb-like-view-count">
                  <li>
                    <dl role="button" class="thumb-dl">
                      <dt><img
                        src="https://s.pximg.net/www/js/build/ec439768aee773098238b61dc6ae7bc6.svg"
                        width="12" height="12" alt=""></dt>
                      <dd title="赞！">{{ illusts.likeCount }}</dd>
                    </dl>
                  </li>
                  <li>
                    <a href="" @click="bookmark" title="收藏"
                       class="bookmark-link">
                      <dl role="button" class="bookmark-dl">
                        <dt>
                          <svg viewBox="0 0 12 12" width="12" height="12" class="bookmark-svg">
                            <path fill="currentColor" d="
M9,0.75 C10.6568542,0.75 12,2.09314575 12,3.75 C12,6.68851315 10.0811423,9.22726429 6.24342696,11.3662534
L6.24342863,11.3662564 C6.09210392,11.4505987 5.90790324,11.4505988 5.75657851,11.3662565
C1.9188595,9.22726671 0,6.68851455 0,3.75 C1.1324993e-16,2.09314575 1.34314575,0.75 3,0.75
C4.12649824,0.75 5.33911281,1.60202454 6,2.66822994 C6.66088719,1.60202454 7.87350176,0.75 9,0.75 Z"></path>
                          </svg>
                        </dt>
                        <dd title="收藏">{{ illusts.bookmark }}</dd>
                      </dl>
                    </a></li>
                  <li>
                    <dl role="button" class="view-dl">
                      <dt><img
                        src="https://s.pximg.net/www/js/build/0a4c9bfd385304c0ffe26bd08fab34ba.svg"
                        width="14" height="12" alt=""></dt>
                      <dd title="浏览量">{{ illusts.viewCount }}</dd>
                    </dl>
                  </li>
                </ul>

                <div title="投稿时间" class="submission-time">
                  <span v-html="getDateFormat(illusts.date)"></span>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="comment-container-box">
            <Comment :comments_show="this.comments_show"/>
          </div>

        </div>

        <div class="artist-container">
          <div class="artist-avatar-name-follow-btn-container">
            <img :src="avatar" alt="加载失败" class="rounded-circle"
                 style="width:40px; vertical-align:middle">
            <a style="font-size: 18px; font-weight: bold;">{{ illusts.user }}</a>
            <div class="d-grid mx-auto follow-btn-box">
              <button class="btn btn-info follow-btn" @click="follow" v-show="!followed">+ 加关注</button>
              <button class="btn btn-info follow-btn disabled bg-gradient" v-show="followed">已关注</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from "./Navbar";
import Interceptor from "../assets/script/interceptor";

import Comment from "./Comment"

export default {
  name: "illusts-detail",
  components: {Navbar, Comment},
  data() {
    return {
      pic_id: "",
      user: JSON.parse(localStorage.getItem("user")),
      illustsId: this.$route.params.illustsId,
      illusts: [],
      illusts_urls: [],
      illusts_show_urls: [],
      comments_data: [],
      comments_show: [],
      comments_expand_button: false,
      avatar:require("../assets/img/Deatheach_7207254_avatar.jpg"),
      tags: [],
      tag_detail: '<h1>hello world</h1>',
      current_page: 1,
      expand_button_show: false,
      liked: false,
      bookmarked: false,
      thumbed: false,
      followed: false,
    }
  },
  methods: {
    getIllustsDetail() {
      Interceptor("get", '/illusts/' + this.illustsId)
        .then(response => {
          this.illusts = response.illusts;
          // this.avatar = response.avatar;
          this.illusts_urls = response.illustsUrls;
          if (this.illusts.page === 1) {
            this.illusts_show_urls = this.illusts_urls;
          } else {
            this.expand_button_show = true;
            this.illusts_show_urls.push(this.illusts_urls[0]);
          }
          this.getTagList();
        })
        .catch(() => { // 请求失败处理
          // window.location.href = "error.html";
        })
    },
    getComment() {
      Interceptor("get", '/comment/getComments/' + this.illustsId)
        .then(response => {
          this.comments_data = response.resultObj;
          if (this.comments_data.length >= 2) {
            for (let i = 0; i < this.comments_data.length; i++) {
              this.comments_show.push(this.comments_data[i]);
            }
          } else {
            this.comments_show = this.comments_data;
          }
        })
        .catch(() => { // 请求失败处理
          // window.location.href = "error.html";
        })

    },
    // getUserLiked() {
    //   if (this.user !== null) {
    //     Interceptor("get", '/illusts/user_liked/' + this.pic_id + "/" + this.user.id)
    //       .then((response) => {
    //         if (response.data.resultObj !== 0) {
    //           this.bookmarked = true;
    //           this.liked = true;
    //           this.thumbed = true;
    //         }
    //       })
    //       .catch(() => {
    //         // window.location.href = "error.html";
    //       })
    //   }
    // },
    // getUserFollowed() {
    //   if (this.user !== null) {
    //     Interceptor("get", '/illusts/followed_artist/' + this.user.id + "/" + this.illusts.userId)
    //       .then((response) => {
    //         if (response.data.resultObj !== 0) {
    //           this.followed = true;
    //         }
    //       })
    //       .catch(() => {
    //         // window.location.href = "error.html";
    //       })
    //   }
    // },
    getTagList() {
      let tagList = this.illusts.tags;
      let tags = this.illusts.tags;
      let tagsTransl = this.illusts.tagsTransl;
      if (tagList != null || tags != null || tagsTransl != null) {
        tagList = tagList.split(',');
        if (tags != null) {
          tags = tags.split(',');
        }
        tagsTransl = tagsTransl.split(',');
        for (let i = 0; i < tagList.length - 1; i++) {
          this.tags.push(tags[i]);
          this.tags.push(tagsTransl[i]);
        }
      }
      return this.tags;
    },
    getDateFormat(time, format = 'YY-MM-DD hh:mm:ss') {
      const date = new Date(time);

      const year = date.getFullYear(),
        month = date.getMonth() + 1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
      const preArr = Array.apply(null, Array(10)).map(function (elem, index) {
        return '0' + index;
      });//开个长度为10的数组 格式为 00 01 02 03

      return format.replace(/YY/g, year.toString())
        .replace(/MM/g, preArr[month] || month)
        .replace(/DD/g, preArr[day] || day)
        .replace(/hh/g, preArr[hour] || hour)
        .replace(/mm/g, preArr[min] || min)
        .replace(/ss/g, preArr[sec] || sec);
    },
    getViewAll() {
      this.expand_button_show = false;
      this.illusts_show_urls = this.illusts_urls;
    },
    notFirstPic(index) {
      if (index !== 0) {
        return '30px'
      } else {
        return '0px'
      }
    },
    like() {
      if (this.user != null) {
        this.bookmark();
        Interceptor("get", '/illusts/like/' + this.illusts.id)
          .then(response => {
            response = response.data;
            if (response.message === "喜欢成功") {
              alert(response.message);
              this.liked = true;
            } else {
              alert("失败了，正通知世界树修复...");
            }
          })
          .catch(error => { // 请求失败处理
            console.log(error)
            alert("出现未知异常，正通知世界树修复...");
          })
      } else {
        alert("请先登陆！！！");
        window.location.href = "../login.html";
      }
    },
    bookmark() {
      if (this.user != null) {
        Interceptor("get", '/illusts/bookmark/' + this.user.id + "/" + this.illusts.id)
          .then(response => {
            response = response.data;
            if (response.message === "收藏成功") {
              alert(response.message);
              this.bookmarked = true;
            } else {
              alert("失败了，正通知世界树修复...");
            }
          })
          .catch(error => { // 请求失败处理
            console.log(error)
            alert("出现未知异常，正通知世界树修复...");
          })
      } else {
        alert("请先登陆！！！");
        window.location.href = "../login.html";
      }
    },
    thumb() {
      if (this.user != null) {
        Interceptor("get", '/illusts/thumb/' + this.illusts.id)
          .then(response => {
            response = response.data;
            if (response.message === "点赞成功") {
              this.thumbed = true;
            } else {
              alert("失败了，正通知世界树修复...");
            }
          })
          .catch(error => { // 请求失败处理
            console.log(error)
            alert("出现未知异常，正通知世界树修复...");
          })
      } else {
        alert("请先登陆！！！");
        window.location.href = "../login.html";
      }
    },
    follow() {
      if (this.user != null) {
        Interceptor("get", '/illusts/follow/' + this.user.id + "/" + this.illusts.userId)
          .then(response => {
            response = response.data;
            if (response.message === "点赞成功") {
              this.thumbed = true;
            } else {
              alert("失败了，正通知世界树修复...");
            }
          })
          .catch(error => { // 请求失败处理
            console.log(error)
            alert("出现未知异常，正通知世界树修复...");
          })
      } else {
        alert("请先登陆！！！");
        window.location.href = "../login.html";
      }
    },
    scrollChange(e) {
      // console.log('父滚动条到页面顶部距离', e.target.offsetTop)
      // console.log('相对距离', this.$refs.scrollview.scrollTop)
      // console.log('绝对距离', e.target.offsetTop + this.$refs.scrollview.scrollTop)
      // console.log(this.$refs.scrollview)
    },
  },
  mounted() {
    this.getIllustsDetail();
    this.getComment();
  },
}
</script>

<style scoped>
@import '../assets/css/illustsdetail.css';
</style>
