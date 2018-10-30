<template>
  <div class="article-detail-page">
    <div class="title">{{ title }}</div>
    <div class="info">{{time}}发布,{{readerCount}}人读过</div>
    <div class="content">
      <wxParse :content="content"
               @preview="preview"
               @navigate="navigate"
               :image-prop="imageProp" />
    </div>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
export default {
  components: {
    wxParse
  },
  data () {
    return {
      articleId: '',
      title: '马尔代夫 蜜月记',
      time: '一天前',
      readerCount: 306,
      content: `<p class="article-detail-p">跟爱人在8.8号领完证，便计划蜜月旅行。马尔代夫是“上帝抛洒人间的项链”，去马尔代夫最终要的一件事便是选岛，因为马代岛屿众多，每个岛屿的酒店风格和服务态度也是参差不齐，所以只能通过岛屿的星级来判断岛屿的好坏，这样其实有失公允，但也是最省事的判断标准。最终和老婆讨论，选择了维利甘度岛Spa独家酒店。</p>
                <p class="article-detail-p">日式风格即采用木质结构，天然质材也是其最具特色的部分。其空间意识极强，形成-小、精、巧的模式。明晰的线条，纯净的壁画，极赋文化内涵，格调简朴高雅。</p>
                <img src="https://dimg14.c-ctrip.com/images/100p0b0000005r1bh4DBE_R_1024_10000_Q90.jpg">`,
      imageProp: {
        mode: 'widthFix'
      }
    }
  },
  onLoad (option) {
    console.log('option', option)
    this.articleId = option.id
  },
  methods: {
    preview (src, e) {
      // do something
    },
    navigate (href, e) {
      // do something
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/style/mixin.styl"
  @import url("~mpvue-wxparse/src/wxParse.css");
  .article-detail-page{
    page();
    padding 70rpx 60rpx
    .title{
      font-weight bold
      font-size 25px
    }
    .info{
      font-size 14px
      color #898989
    }
  }
</style>
