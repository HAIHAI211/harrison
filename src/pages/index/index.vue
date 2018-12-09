<template>
  <div class="index-page">
    <div class="content">
      <image class="avatar" :src="introduce.avatar"/>
      <div class="title">{{ introduce.title }}</div>
      <div class="sub-title">{{ introduce.subTitle }}</div>
      <div class="main">
        <wxParse :content="introduce.content"
                 @preview="preview"
                 @navigate="navigate"
                 :image-prop="imageProp" />
      </div>
    </div>
    <tab-bar/>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar'
import wxParse from 'mpvue-wxparse'
export default {
  components: {
    wxParse,
    TabBar
  },
  data () {
    return {
      introduce: {
        avatar: '',
        title: '',
        subTitle: '',
        content: ''
      }
    }
  },
  async onPullDownRefresh () {
    await this._getIntroducesByFly()
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
  },
  mounted () {
    this._getIntroducesByFly()
  },
  methods: {
    preview (src, e) {
      // do something
    },
    navigate (href, e) {
      // do something
      const data = href.substr(7)
      console.log(href)
      this.utils.copy(data)
    },
    async _getIntroducesByFly () {
      const result = await this.api.fetchSelfIntroduce()
      if (result) {
        this.introduce = result
      }
      console.log(result)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/style/mixin.styl"
  @import url("~mpvue-wxparse/src/wxParse.css");
  .index-page{
    page();
    .content{
      display flex
      flex-direction column
      align-items  center
      &>*{
        flex 0 0 auto
      }
      .avatar{
        width 180rpx
        height 180rpx
        border-radius 50%
        margin 60rpx
        box-shadow:1px 1px 8px #333333
      }
      .title{
        letter-spacing 2px
        font-size 24px
        font-weight bold
      }
      .sub-title{
        letter-spacing 1.5px
        font-size 16px
        color #979798
        margin-bottom 70rpx
      }
      .main{
        margin 0 60rpx
        p{
          color #393938
          letter-spacing 1px
          font-size 16px
          line-height 1.5
          margin-bottom 20rpx
          a.copy{
            color lightcoral
          }
        }
      }
    }
  }
</style>
