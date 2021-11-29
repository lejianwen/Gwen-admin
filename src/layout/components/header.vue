<template>
  <div class="header-logo">
    <img :src="setting.logo" alt="" class="logo">
    <div class="title">{{setting.title}}</div>
  </div>
  <Setting></Setting>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import HeaderMenu from '@/layout/components/menu/index.vue'
  import Setting from '@/layout/components/setting/index.vue'
  import { useAppStore } from '@/store/app'
  import GTags from '@/layout/components/tags/index.vue'

  export default defineComponent({
    name: 'LayerHeader',
    created () {
    },
    components: { HeaderMenu, Setting, GTags },
    watch: {},
    setup (props) {
      const appStore = useAppStore()
      const setting = computed(() => appStore.setting)
      return {
        setting,
      }
    },

  })
</script>

<style scoped lang="scss">

  .header-logo {
    display: flex;
    height: 100%;
    align-items: center;

    .title {
      display: block;
      margin-left: 10px;
    }

    .logo {
      display: block;
      width: 30px;
      height: 30px;
    }
  }


</style>
<style lang="scss">

</style>
