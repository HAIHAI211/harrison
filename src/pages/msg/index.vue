<template>
  <div class="msg-page">
    <div class="title" v-if="msgs.length">已有{{ speakerCount }}人留言</div>
    <div class="msg-item-wrap">
      <div class="msg-item" v-for="(msg, index) in msgs" :key="index">
        <div class="header">
          <image class="avatar" :src="hintAvatar"/>
          <div class="header-right">
            <div class="name">{{ msg.name }}</div>
            <div class="info">{{msg.time}}在{{msg.location}}说</div>
          </div>
        </div>
        <div class="content">
          {{ msg.content }}
        </div>
        <div class="footer">
          <div class="praise">
            <span class="iconfont icon-dianzan praise-icon "/>
            <span class="praise-sum">{{ msg.praise }}</span>
          </div>
          <span class="iconfont .icon-message reply-btn"/>
        </div>
      </div>
    </div>
    <div class="add-msg-btn">
      +
    </div>
    <loading v-if="loadingShow"/>
    <tab-bar :active-index="2"></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar'
import Loading from '@/components/loading'
import {sleep} from '@/utils'
import avatar from 'common/img/avatar2.png'
export default {
  data () {
    return {
      loadingShow: false,
      speakerCount: 0,
      msgs: [],
      hintAvatar: avatar,
      fakerBase: [
        {
          name: '1peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '1peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '3peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '4peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '5peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        }
      ],
      fakerNext: [
        {
          name: '6peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '7peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '8peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '9peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        },
        {
          name: '10peace',
          avatar: '',
          time: '前天下午',
          location: '南京',
          praise: 0,
          content: '你好，你的小程序做的很漂亮，你的生活态度我也很欣赏。',
          reply: [
            {
              name: 'harrison',
              avatar: '',
              time: '昨天早上',
              location: '成都',
              content: ''
            }
          ]
        }
      ]
    }
  },
  components: {
    TabBar,
    Loading
  },
  async onPullDownRefresh () { // 下拉刷新
    console.log('onPullDownRefresh')
    await sleep(1200)
    this.msgs = this.fakerBase
    wx.stopPullDownRefresh()
  },
  async onReachBottom () { // 上拉加载
    this.loadingShow = true
    await sleep(1200)
    this.loadingShow = false
    if (this.msgs.length < 10) {
      this.msgs = [...this.fakerBase, ...this.fakerNext]
    }
  },
  async mounted () {
    console.log('mounted')
    await sleep(50)
    wx.startPullDownRefresh()
  },
  onUnload () {
    console.log('onUnload')
    this.msgs = []
  },

  methods: {
  }
}
</script>

<style scoped lang="stylus">
  @import "~common/style/mixin.styl"
  .msg-page{
    page();
    .title{
      font-weight: bold
      font-size 39rpx
      letter-spacing 1.5px
      color #000
      text-align center
      padding-bottom 80rpx
    }
    .msg-item-wrap{
      padding 0 60rpx
      .msg-item{
        background #fefefe
        border-radius 10rpx
        margin-bottom 70rpx
        padding 30rpx 20rpx
        box-shadow: 0 1px 2px rgba(0, 0, 25, 0.1), 0 1px 45px 1px rgba(0, 0, 50, 0.2);
        .header{
          display flex
          align-items center
          margin-bottom 20rpx
          .avatar{
            width 76rpx
            height 76rpx
            border-radius 50%
            margin-right 12rpx
          }
          .header-right{
            display flex
            flex-direction column
            .name{
              font-size 38rpx
              font-weight 300
            }
            .info{
              font-size 28rpx
              font-weight 200
              color #888
            }
          }
        }
        .content{
          color:#393938;
          letter-spacing:2rpx;
          font-size:31rpx;
          line-height:1.5;
        }
        .footer{
          display flex
          align-items center
          justify-content flex-end
          color rgba(62,77,96,.6)
          .praise{
            margin-right 20rpx
            .praise-icon{
              font-size 32rpx
            }
            .praise-sum{
              font-size 32rpx
            }
          }
          .reply-btn{
            font-size 36rpx
          }
        }
      }
    }
    .add-msg-btn{
      position fixed
      display flex
      align-items center
      justify-content center
      font-size 50rpx
      right 30rpx
      bottom 150rpx
      width 100rpx
      height 100rpx
      border-radius 50%
      color #fff
      background #3e4d60
      -webkit-backdrop-filter: blur(6px);
      opacity .6
    }
  }
</style>
