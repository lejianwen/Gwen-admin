<template>
  <div>
    <el-card style="width: 500px;margin: 0 auto;margin-top: 200px">
      <h1>登录</h1>
      <el-form label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary">登录</el-button>
        </el-form-item>
        <span class="tips">用户名密码随便</span>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { defineComponent, reactive } from 'vue'
  import { useUserStore } from '@/store/user'
  import { ElMessage } from 'element-plus'
  import { useRoute, useRouter } from 'vue-router'

  export default defineComponent({
    setup (props) {
      const userStore = useUserStore()
      const route = useRoute()
      const router = useRouter()
      const form = reactive({
        username: '123456',
        password: '123456',
      })
      const redirect = route.query?.redirect
      const login = async () => {
        const res = await userStore.login(form)
        if (res) {
          ElMessage.success('登录成功')
          router.push(redirect || '/')
        }
      }
      return {
        redirect,
        form,
        login,
      }
    },
  })
</script>

<style scoped>
  .tips {
    font-size: 12px;
    color: #666;
    margin-left: 60px;
  }
</style>
