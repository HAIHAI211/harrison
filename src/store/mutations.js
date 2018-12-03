import * as types from './mutation-types'

// function setStorage (key, data) {
//   wx.setStorage({
//     key: key,
//     data: data
//   })
// }
function getValue (state, obj, keyName) {
  if (obj[keyName] === undefined) {
    return state[keyName]
  }
  return obj[keyName]
}

const mutations = {
  /*
  * state: 当前状态树
  * v: 提交matations时传的参数
  * */
  [types.SET_OPEN_ID] (state, v) {
    state.openId = v
  },
  [types.SET_IS_LOGIN] (state, v) {
    state.isLogin = v
  },
  [types.SET_SYSTEM_INFO] (state, v) {
    state.systemInfo = v
  },
  [types.SET_AUTH_WE_RUN] (state, v) {
    state.authWerun = v
  },
  [types.SET_AUTH_USER_INFO] (state, v) {
    state.authUserInfo = v
  },
  [types.SET_USER_INFO] (state, v) {
    state.openId = getValue(state, v, 'openId')
    state.nickName = getValue(state, v, 'nickName')
    state.gender = getValue(state, v, 'gender')
    state.city = getValue(state, v, 'city')
    state.province = getValue(state, v, 'province')
    state.country = getValue(state, v, 'country')
    state.avatarUrl = getValue(state, v, 'avatarUrl')
    state.contactsName = getValue(state, v, 'contactsName')
    state.telNo = getValue(state, v, 'telNo')
    state.addressArea = getValue(state, v, 'addressArea')
    state.address = getValue(state, v, 'address')
  },
  [types.SET_ADVS] (state, v) {
    state.advs = v
  }
}

export default mutations
