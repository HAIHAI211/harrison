const state = {
  openId: '',
  isLogin: false,
  systemInfo: null,
  advs: [], // 全部广告位
  authWerun: undefined, // 微信运动权限 undefined true false
  authUserInfo: undefined, // 用户信息权限
  city: '',
  gender: 1, // 1:男 2：女
  avatarUrl: '',
  nickName: '',
  addressArea: '', // 地址（区域）
  address: '', // 详细地址
  country: '', // 国家
  province: '', // 省
  contactsName: '', // 联系人姓名
  telNo: '' // 电话
}
export default state
