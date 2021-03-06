import * as types from './mutation-types'
import {pf, auth} from '@/utils'
import * as api from '@/http/api'

async function reLogin (commit) {
  try {
    console.log('登录')
    const loginResult = await pf('login') // 重新登录
    console.log('loginResult', loginResult)
    try {
      const result = await api.login({ code: loginResult.code }) // 将code发送给后台获取openid
      commit(types.SET_IS_LOGIN, true)
      commit(types.SET_OPEN_ID, result.data.openId)
      console.log('登录成功')
    } catch (e) {
      console.log('获取openid失败', e)
      commit(types.SET_IS_LOGIN, false)
      return Promise.reject(new Error('【self.server】登录失败'))
    }
  } catch (e) {
    console.log('登录失败', e)
    commit(types.SET_IS_LOGIN, false)
    return Promise.reject(new Error('【wx.server】登录失败'))
  }
}
const actions = {
  [types.SET_SYSTEM_INFO] ({commit}) {
    wx.getSystemInfo({
      success (res) {
        commit(types.SET_SYSTEM_INFO, res)
      }
    })
  },
  async LOGIN ({commit, state}) {
    console.log('LOGIN')
    try {
      const checkSessionResult = await pf('checkSession')
      console.log('checkSessionResult', checkSessionResult)
      if (!state.openId) { // 本地openid缓存被清
        console.log('本地openid缓存被清')
        try {
          await reLogin(commit) // 不让reLogin抛出异常，否则会执行下面的【2次登陆】
        } catch (e) {
          return Promise.reject(e)
        }
      } else {
        console.log('session有效且openId存在')
      }
    } catch (e) { // session过期
      console.log('session过期', e)
      await reLogin(commit) // 【2次登录】
    }
  },
  async AUTH_OF_WERUN ({commit}) {
    const isAuthOfWerun = await auth('scope.werun')
    commit(types.SET_AUTH_WE_RUN, isAuthOfWerun)
  },
  async AUTH_OF_USER_INFO ({commit}) {
    const isAuthOfUI = await auth('scope.userInfo')
    commit(types.SET_AUTH_USER_INFO, isAuthOfUI)
  }
}
export default actions
