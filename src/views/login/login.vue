<template>
  <div class="login">
    <el-card class="login-card">
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
          router.push({ path: redirect || '/', replace: true })
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

<style scoped lang="scss">
  .login {
    width: 100vw;
    height: 100vh;
    background-color: #2d3a4b;
    padding-top: 200px;
    box-sizing: border-box;
    .tips {
      font-size: 12px;
      color: #fff;
      margin-left: 60px;
    }

    .login-card {
      width: 500px;
      background-color: #283342;
      color: #fff;
      border: none;
      margin: 0 auto;
      .el-form-item {

        ::v-deep(.el-form-item__label) {
          color: #fff;
        }

        .el-input {

          ::v-deep(.el-input__wrapper) {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: transparent;
          }

          ::v-deep(input) {
            color: #fff;
          }
        }
      }
    }
  }
</style>
