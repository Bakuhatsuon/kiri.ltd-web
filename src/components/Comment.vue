<!--评论模块-->
<template>
  <div class="container">
    <div class="comment" v-for="item in comments_show">
      <div class="info">
<!--        <img class="avatar" :src="item.comment.replyFromAvatar" alt="加载失败" width="36" height="36"/>-->
        <img class="avatar" :src="avatar" alt="加载失败" width="36" height="36"/>
        <div class="right">
          <div class="name">{{ item.comment.replyFromName }}</div>
          <div class="date">{{ item.comment.createDate }}</div>
        </div>
      </div>
      <div class="content">{{ item.comment.content }}</div>
      <div class="control">
        <span class="like" :class="{active: item.comment.deleted}" @click="likeClick(item)">
          <i class="iconfont icon-like"></i>
          <span class="like-num">{{ item.comment.likedCount > 0 ? item.comment.likedCount + '人赞' : '赞' }}</span>
        </span>
        <span class="comment-reply" @click="showCommentInput(item)">
          <i class="iconfont icon-comment"></i>
          <span>回复</span>
        </span>
      </div>
      <div class="reply">
        <div class="item" v-for="reply in item.replyComments">
          <div class="reply-content">
            <span class="from-name">{{ reply.replyFromName }}</span><span>: </span>
            <span class="to-name">@{{ reply.replyToName }}</span>
            <span>{{ reply.content }}</span>
          </div>
          <div class="reply-bottom">
            <span>{{ reply.date }}</span>
            <span class="reply-text" @click="showCommentInput(item, reply)">
              <i class="iconfont icon-comment"></i>
              <span>回复</span>
            </span>
          </div>
        </div>
        <div class="write-reply" v-if="item.length > 0" @click="showCommentInput(item)">
          <i class="el-icon-edit"></i>
          <span class="add-comment">添加新评论</span>
        </div>
        <transition name="fade">
          <div class="input-wrapper" v-if="showItemId === item.id">
            <el-input class="gray-bg-input"
                      v-model="inputComment"
                      type="textarea"
                      :rows="3"
                      autofocus
                      placeholder="写下你的评论">
            </el-input>
            <div class="btn-control">
              <span class="cancel" @click="cancel">取消</span>
              <el-button class="btn" type="success" round @click="commitComment">确定</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    comments_show: {
      type: Array,
      required: true
    }
  },
  components: {},
  data() {
    return {
      inputComment: '',
      showItemId: '',
      avatar: require("../assets/img/Deatheach_7207254_avatar.jpg")
    }
  },
  methods: {
    /**
     * 点赞
     */
    likeClick(item) {
      // if (item.isLike === null) {
      //   Vue.$set(item, "isLike", true);
      //   item.likeNum++
      // } else {
      //   if (item.isLike) {
      //     item.likeNum--
      //   } else {
      //     item.likeNum++
      //   }
      //   item.isLike = !item.isLike;
      // }
    },

    /**
     * 点击取消按钮
     */
    cancel() {
      this.showItemId = ''
    },

    /**
     * 提交评论
     */
    commitComment() {
      console.log(this.inputComment);
    },

    /**
     * 点击评论按钮显示输入框
     * item: 当前大评论
     * reply: 当前回复的评论
     */
    showCommentInput(item, reply) {
      // if (reply) {
      //   this.inputComment = "@" + reply.replyfromName + " "
      // } else {
      //   this.inputComment = ''
      // }
      // this.showItemId = item.id
    }
  },
  created() {
    console.log(this.comments_show)
  }
}
</script>

<style scoped>
@import "../assets/css/comment.css";
</style>
