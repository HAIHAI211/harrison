<template>
  <div class="article-page">
    <div class="article-wrap">
      <div class="article" v-for="(article,index) in articles" :key="index" @click="toDetailArticlePage(index)">
        <div class="title">{{ article.title }}</div>
        <div class="brief">{{ article.brief }}</div>
        <image class="img" mode="widthFix" :src="article.img"/>
      </div>
    </div>
    <loading v-if="loadingShow"/>
    <tab-bar :active-index="1"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar'
import Loading from '@/components/loading'
import { sleep } from '@/utils'
export default {
  data () {
    return {
      loadingShow: false,
      articles: [],
      fakerBase: [
        {
          title: '1马尔代夫 蜜月记',
          brief: '跟爱人在8.8号领完证，便计划蜜月旅行。马尔代夫是“上帝抛洒人间的项链”，去马尔代夫最终要的一件事便是选岛，因为马代岛屿众多，每个岛屿的酒店风格和服务态度也是参差不齐，所以只能通过岛屿的星级来判断岛屿的好坏，这样其实有失公允，但也是最省事的判断标准。最终和老婆讨论，选择了维利甘度岛Spa独家酒店。',
          img: 'https://dimg14.c-ctrip.com/images/100p0b0000005r1bh4DBE_R_1024_10000_Q90.jpg'
        },
        {
          title: '2马尔代夫 蜜月记',
          brief: '跟爱人在8.8号领完证，便计划蜜月旅行。马尔代夫是“上帝抛洒人间的项链”，去马尔代夫最终要的一件事便是选岛，因为马代岛屿众多，每个岛屿的酒店风格和服务态度也是参差不齐，所以只能通过岛屿的星级来判断岛屿的好坏，这样其实有失公允，但也是最省事的判断标准。最终和老婆讨论，选择了维利甘度岛Spa独家酒店。',
          img: 'https://dimg14.c-ctrip.com/images/100p0b0000005r1bh4DBE_R_1024_10000_Q90.jpg'
        },
        {
          title: '3马尔代夫 蜜月记',
          brief: '跟爱人在8.8号领完证，便计划蜜月旅行。马尔代夫是“上帝抛洒人间的项链”，去马尔代夫最终要的一件事便是选岛，因为马代岛屿众多，每个岛屿的酒店风格和服务态度也是参差不齐，所以只能通过岛屿的星级来判断岛屿的好坏，这样其实有失公允，但也是最省事的判断标准。最终和老婆讨论，选择了维利甘度岛Spa独家酒店。',
          img: 'https://dimg14.c-ctrip.com/images/100p0b0000005r1bh4DBE_R_1024_10000_Q90.jpg'
        },
        {
          title: '4马尔代夫 蜜月记',
          brief: '跟爱人在8.8号领完证，便计划蜜月旅行。马尔代夫是“上帝抛洒人间的项链”，去马尔代夫最终要的一件事便是选岛，因为马代岛屿众多，每个岛屿的酒店风格和服务态度也是参差不齐，所以只能通过岛屿的星级来判断岛屿的好坏，这样其实有失公允，但也是最省事的判断标准。最终和老婆讨论，选择了维利甘度岛Spa独家酒店。',
          img: 'https://dimg14.c-ctrip.com/images/100p0b0000005r1bh4DBE_R_1024_10000_Q90.jpg'
        },
        {
          title: '5马尔代夫 蜜月记',
          brief: '跟爱人在8.8号领完证，便计划蜜月旅行。马尔代夫是“上帝抛洒人间的项链”，去马尔代夫最终要的一件事便是选岛，因为马代岛屿众多，每个岛屿的酒店风格和服务态度也是参差不齐，所以只能通过岛屿的星级来判断岛屿的好坏，这样其实有失公允，但也是最省事的判断标准。最终和老婆讨论，选择了维利甘度岛Spa独家酒店。',
          img: 'https://dimg14.c-ctrip.com/images/100p0b0000005r1bh4DBE_R_1024_10000_Q90.jpg'
        }
      ],
      fakerNext: [
        {
          title: '6日式装修设计',
          brief: '日式风格即采用木质结构，天然质材也是其最具特色的部分。其空间意识极强，形成-小、精、巧的模式。明晰的线条，纯净的壁画，极赋文化内涵，格调简朴高雅。在空间划分中摒弃曲线，具有较强的几何感。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537714144270&di=3d03d0a84acfa9cb9fcd8ceb99d360ee&imgtype=0&src=http%3A%2F%2Fpic.66zhuang.com%2Farticle%2Fpics%2Fimage%2F2015-08-27%2F2244eabb41379ebfbf8d1445116e05a2.png'
        },
        {
          title: '7日式装修设计',
          brief: '日式风格即采用木质结构，天然质材也是其最具特色的部分。其空间意识极强，形成-小、精、巧的模式。明晰的线条，纯净的壁画，极赋文化内涵，格调简朴高雅。在空间划分中摒弃曲线，具有较强的几何感。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537714144270&di=3d03d0a84acfa9cb9fcd8ceb99d360ee&imgtype=0&src=http%3A%2F%2Fpic.66zhuang.com%2Farticle%2Fpics%2Fimage%2F2015-08-27%2F2244eabb41379ebfbf8d1445116e05a2.png'
        },
        {
          title: '8日式装修设计',
          brief: '日式风格即采用木质结构，天然质材也是其最具特色的部分。其空间意识极强，形成-小、精、巧的模式。明晰的线条，纯净的壁画，极赋文化内涵，格调简朴高雅。在空间划分中摒弃曲线，具有较强的几何感。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537714144270&di=3d03d0a84acfa9cb9fcd8ceb99d360ee&imgtype=0&src=http%3A%2F%2Fpic.66zhuang.com%2Farticle%2Fpics%2Fimage%2F2015-08-27%2F2244eabb41379ebfbf8d1445116e05a2.png'
        },
        {
          title: '9日式装修设计',
          brief: '日式风格即采用木质结构，天然质材也是其最具特色的部分。其空间意识极强，形成-小、精、巧的模式。明晰的线条，纯净的壁画，极赋文化内涵，格调简朴高雅。在空间划分中摒弃曲线，具有较强的几何感。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537714144270&di=3d03d0a84acfa9cb9fcd8ceb99d360ee&imgtype=0&src=http%3A%2F%2Fpic.66zhuang.com%2Farticle%2Fpics%2Fimage%2F2015-08-27%2F2244eabb41379ebfbf8d1445116e05a2.png'
        },
        {
          title: '10日式装修设计',
          brief: '日式风格即采用木质结构，天然质材也是其最具特色的部分。其空间意识极强，形成-小、精、巧的模式。明晰的线条，纯净的壁画，极赋文化内涵，格调简朴高雅。在空间划分中摒弃曲线，具有较强的几何感。',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537714144270&di=3d03d0a84acfa9cb9fcd8ceb99d360ee&imgtype=0&src=http%3A%2F%2Fpic.66zhuang.com%2Farticle%2Fpics%2Fimage%2F2015-08-27%2F2244eabb41379ebfbf8d1445116e05a2.png'
        }
      ]
    }
  },
  async onPullDownRefresh () { // 下拉刷新
    console.log('onPullDownRefresh')
    await sleep(1200)
    this.articles = this.fakerBase
    wx.stopPullDownRefresh()
  },
  async onReachBottom () { // 上拉加载
    console.log('onReachBottom')
    this.loadingShow = true
    await sleep(1200)
    this.loadingShow = false
    if (this.articles.length < 10) {
      this.articles = [...this.fakerBase, ...this.fakerNext]
    }
  },
  async mounted () {
    console.log('mounted')
    await sleep(50)
    wx.startPullDownRefresh()
  },
  onUnload () {
    console.log('onUnload')
    this.articles = []
  },
  components: {
    TabBar,
    Loading
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
