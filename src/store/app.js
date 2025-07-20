import { defineStore, acceptHMRUpdate } from 'pinia'
import logo from '@/assets/logo.png'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const langs = {
  'zh-CN': { name: '中文', value: zhCn, sideBarWidth: '210px' },
  'en': { name: 'English', value: en, sideBarWidth: '230px' },
}
const defaultLang = localStorage.getItem('lang') || navigator.language || 'zh-CN'
export const useAppStore = defineStore({
  id: 'App',
  state: () => ({
    setting: {
      title: 'Gwen-Admin',
      sideIsCollapse: false,
      logo,
      locale: langs[defaultLang] ? langs[defaultLang] : langs['en'],
    },
  }),

  actions: {
    sideCollapse () {
      this.setting.sideIsCollapse = !this.setting.sideIsCollapse
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
