<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <form  class="sign-in-form">
          <h2 class="title">登录</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" v-model="name" placeholder="用户名" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" v-model="password" placeholder="密码" />
          </div>
           <input  @click="loginHandle" value="Login" class="btn solid" />
 
        </form>
        <form action="#" class="sign-up-form">
          <h2 class="title">注册</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" class="btn" value="Sign up" />
          <p class="social-text">Or Sign up with social platforms</p>
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
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button class="btn transparent" id="sign-up-btn">Sign up</button>
        </div>
        <img src="@/source/images/log.svg" class="image" alt="" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button class="btn transparent" id="sign-in-btn">Sign in</button>
        </div>
        <!-- <img src="@/source/images/register.svg" class="image" alt="" /> -->
      </div>
    </div>
  </div>
</template>

 


<script setup >
import { useUserInfo } from '@/store/pinna';
import { login } from '@/api/system.js'
import { ref, onMounted } from "vue"
import { useMsgBox } from '@/hooks/use-msg-box'
import { setToken } from '@/utils/utils';
import { useRouter } from 'vue-router'

const {successMsgBox , errorMsgBox}  = useMsgBox()
const name = ref('')
const password  = ref('')
const router = useRouter()


const userInfo = useUserInfo();

function loginHandle(){
  login({
    name:name.value,
    password:password.value
  }).then(res=>{
    if(res.success){
 
      successMsgBox("登陆成功")
      setToken(res.token)
      router.push('/home')

    }else{
      errorMsgBox(res.msg)
    }

  })
  console.log(login)
  console.log(name.value)
  console.log(password.value)
 

  
}
onMounted(() => {
  // const sign_in_btn = document.querySelector("#sign-in-btn");
  // const sign_up_btn = document.querySelector("#sign-up-btn");
  // const container = document.querySelector(".container");

  // sign_up_btn.addEventListener("click", () => {
  //   container.classList.add("sign-up-mode");
  // });

  // sign_in_btn.addEventListener("click", () => {
  //   container.classList.remove("sign-up-mode");
  // });


  
});
</script>

<style lang="sass" scoped>
@import url('./login.sass')
</style>