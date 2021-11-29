<template>
  <div class="b">
    首页

    <el-radio-group v-model="sideIsCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  import { defineComponent, ref, onMounted, watch } from 'vue'
  import { useAppStore } from '@/store/app'

  export default defineComponent({
    name: 'Home',
    setup () {

      const app = useAppStore()
      const sideIsCollapse = ref(false)
      sideIsCollapse.value = app.setting.sideIsCollapse
      watch(sideIsCollapse, (val) => {
        console.log(val)
        app.sideCollapse()
      })
      return {
        sideIsCollapse,
      }
    },
  })
</script>

<style scoped lang="scss">
  .b {
    .a {
      color: red;
    }

  }
</style>
