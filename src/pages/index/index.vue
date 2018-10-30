<template>
  <div class="index-page">
    <div class="content">
      <image class="avatar" src="http://img-1255554167.picsh.myqcloud.com/self4.jpg"/>
      <div class="title">我是孙正</div>
      <div class="sub-title">欢迎走进我的世界</div>
      <div class="main">
        <!--<p>-->
          <!--在腾讯、中电等公司做了两年程序员后，我便辞职回家，成为一名homecoder。从此，上下班挤地铁、为了KPI没日夜加班，都与我无关。-->
        <!--</p>-->
        <!--<p>-->
          <!--现在我24岁，在编程的这些年里，我自己学，独立思考。不断尝试利用编程来方便自己和家人的生活。-->
        <!--</p>-->
        <!--<p>-->
          <!--我喜爱美食，热爱旅行，偶尔看看村上春树，现在正在自学吉他。因为老婆爱猫，我也爱屋及乌。-->
        <!--</p>-->
        <!--<p>-->
          <!--如果想做小程序/网站/app/毕设，或想学习编程,加我微信<span class="wechat" @click="copy">{{ wechatNumber }}</span>。-->
        <!--</p>-->
        <!--<p v-for="(item,index) in introduces" :key="index" v-if="introduces.length">{{ item }}</p>-->

        <wxParse :content="content"
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
import { get } from '@/http/api'
export default {
  components: {
    wxParse,
    TabBar
  },
  data () {
    return {
      title: '',
      subTitle: '',
      content: `<p class="index-p">
                  在腾讯、中电等公司做了两年程序员后，我便辞职回家，成为一名homecoder。从此，上下班挤地铁、为了KPI没日夜加班，都与我无关。
                </p>
                <p class="index-p">
                  现在我24岁，在编程的这些年里，我自己学，独立思考。不断尝试利用编程来方便自己和家人的生活。
                </p>
                <p class="index-p">
                  我喜爱美食，热爱旅行，偶尔看看村上春树，现在正在自学吉他。因为老婆爱猫，我也爱屋及乌。
                </p>
                <p class="index-p">
                  如果想做小程序/网站/app/毕设，或想学习编程,加我微信。<a class="index-copy" href="#?data=18981817857">18981817857</a>
                </p>`,
      introduces: null
    }
  },
  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  },
  onReachBottom () {
  },
  mounted () {
    // this.getIntroduces()
    this.getIntroducesByFly()
  },
  methods: {
    preview (src, e) {
      // do something
    },
    navigate (href, e) {
      // do something
      const data = href.substr(7)
      console.log(data)
      this.copy(data)
    },
    getIntroduces () {
      wx.request({
        url: 'http://localhost:8082/football/index/introduce',
        success: (res) => {
          if (res && res.data) {
            this.introduces = res.data
            console.log(this.introduces)
          }
        }
      })
    },
    async getIntroducesByFly () {
      const result = await get({
        url: '/football/index/introduce'
      })
      console.log(result)
    },
    copy (data) {
      wx.setClipboardData({
        data: data,
        success (res) {
          wx.getClipboardData({
            success (res) {
              wx.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
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
