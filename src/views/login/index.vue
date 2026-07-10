<template>
  <div :class="['container', { 'sign-up-mode': isSignUpMode }]">
    <div class="forms-container">
      <div class="signin-signup">
        <form class="sign-in-form" @submit.prevent="loginHandle">
          <h2 class="title">登录</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input v-model="name" type="text" placeholder="请输入用户名" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input v-model="password" type="password" placeholder="请输入密码" />
          </div>
          <input type="submit" value="登录" class="btn solid" />
        </form>

        <form class="sign-up-form" @submit.prevent>
          <h2 class="title">注册</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="请输入用户名" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="请输入邮箱" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="请输入密码" />
          </div>
          <input type="submit" class="btn" value="注册" />
          <p class="social-text">或使用社交平台注册</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>还没有账号？</h3>
          <p>切换到注册面板后即可填写注册信息。</p>
          <button type="button" class="btn transparent" @click="isSignUpMode = true">
            去注册
          </button>
        </div>
        <img src="@/source/images/log.svg" class="image" alt="登录插图" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>已经有账号？</h3>
          <p>返回登录面板后可直接输入账号密码登录系统。</p>
          <button type="button" class="btn transparent" @click="isSignUpMode = false">
            去登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/api/system.js'
import { useMsgBox } from '@/hooks/use-msg-box'
import { setToken } from '@/utils/utils'
import { useRouter } from 'vue-router'

const { successMsgBox, errorMsgBox } = useMsgBox()
const name = ref('')
const password = ref('')
const isSignUpMode = ref(false)
const router = useRouter()

function loginHandle() {
  login({
    name: name.value,
    password: password.value
  }).then((res) => {
    if (res.success) {
      successMsgBox('登录成功')
      setToken(res.token)
      router.push('/home')
    } else {
      errorMsgBox(res.msg)
    }
  })
}
</script>

<style lang="sass" scoped>
@import url('./login.sass')
</style>
