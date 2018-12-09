<template>
  <div class="article-page">
    <div class="article-wrap">
      <div class="article" v-for="(article,index) in activePage.list" :key="index" @click="toDetailArticlePage(index)">
        <div class="title">{{ article.title }}</div>
        <div class="brief">{{ article.brief }}</div>
        <image class="img" mode="widthFix" :src="article.img"/>
      </div>
    </div>
    <my-loading :state="loadingState"/>
    <tab-bar :active-index="1"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar'
import MyLoading from '@/components/loading'
import {mixinPullToRefresh} from '@/mixin'
export default {
  mixins: [mixinPullToRefresh],
  components: {
    TabBar,
    MyLoading
  },
  data () {
    return {
      apis: ['fetchArticles'],
      listKeyName: 'content',
      pageCountKeyName: 'totalPages'
    }
  },
  methods: {
    toDetailArticlePage (articleId) {
      wx.navigateTo({
        url: `/pages/article/detail/main?id=${articleId}`
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/style/mixin.styl"
  .article-page{
    page()
    .article-wrap{
      padding 0 60rpx
    }
    .article{
      padding 70rpx 0
      .title{
        color #000
        font-size 20px
        letter-spacing 1.2px
        font-weight bold
        padding-bottom 25rpx
      }
      .brief{
        color #313133
        font-size 16px
        font-weight 400
        line-height 1.2
        letter-spacing 1px
        margin-bottom 25rpx
      }
      .img{
        border-radius: 6px
        max-width 100%
        box-shadow: 0 2px 5px rgba(0, 0, 25, 0.2), 0 5px 75px 1px rgba(0, 0, 50, 0.3);
      }
    }
  }
</style>
