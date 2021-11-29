import { defineStore, acceptHMRUpdate } from 'pinia'
import { info, login } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import { useRouteStore } from '@/store/router'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    nickname: '',
    token: '',
    role: '',
    avatar: '',
    route_names: [],
  }),

  actions: {
    logout () {
      removeToken()
      this.$patch({
        name: '',
        role: {},
      })
    },

    async login (form) {
      const res = await login(form).catch(_ => false)
      if (res) {
        const userData = res.data
        setToken(userData.token)
        this.$patch({
          ...userData,
        })
        if (userData.route_names && userData.route_names.length) {
          useRouteStore().addRoutes(userData.route_names)
        }
        return userData
      } else {
        return false
      }
    },
    async info () {
      const res = await info().catch(_ => false)
      if (res) {
        const userData = res.data
        setToken(userData.token)
        this.$patch({
          ...userData,
        })
        console.log(userData)
        return userData
      }
      return false
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
