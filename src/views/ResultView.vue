<template>
    <h1 class="d-none">結果頁面</h1>
    <div id="app" class="position-relative" ref="appContainer">
      <nav class="my-0 mx-auto d-flex justify-content-between align-items-center ">
      <img class="logo_white " src="/src/assets/images/logo_white.png" alt="logo_white">
      <div class="w-25 d-flex"><router-link class="done-button" to="/home">家</router-link></div>
    </nav>
        <img
          :src="imageSrc"
          class="result-image"
          alt="result-image"
        />

        <img  class="streetlight" src="/src/assets/images/streetlight.png" alt="streetlight">
        <img src="/src/assets/images/toggle-light.png" alt="toggle-light" class="streetlight toggle-light">
        <!-- Toggle Switch -->
        <div class="d-flex flex-column justify-content-between h-100 py-5 result-content">
            <div class="toggle-switch mx-auto" @click="toggleDarkMode">
            <div class="toggle-handle"></div>
            </div>
            <p class="result-text">已點亮您的招牌<br>試著在場景中找到他吧！！</p>
            <div class="d-flex justify-content-between" >
                <a class="upload-button" href="#" @click.prevent="uploadImage">下載</a>
                <a class="upload-button" href="#" @click.prevent="uploadImage">大家ㄉ庫</a>
            </div>
        </div>
    </div>
</template>

<script>
import { io } from 'https://cdn.socket.io/4.7.5/socket.io.esm.min.js'
const socket = io('https://daotaiwanapi.onrender.com', {
  withCredentials: false
})

export default {
  data () {
    return {
      imageSrc: '/src/assets/images/default_image.png', // 預設成果圖片
      resultData: null
    }
  },
  methods: {
    toggleDarkMode () {
      const toggleSwitch = document.querySelector('.toggle-switch')
      toggleSwitch.classList.toggle('active')
      const toggleLight = document.querySelector('.toggle-light')
      toggleLight.classList.toggle('active')
      if (this.resultData) {
        if (toggleSwitch.classList.contains('active')) {
          this.fetchTextureById(this.resultData._id, 'conbon_c', 'light-on')
        } else {
          this.fetchTextureById(this.resultData._id, 'conbon_c', 'light-off')
        }
      }
    },
    fetchTextureById (id, type, event) {
      try {
        socket.emit(event, { _id: id, category: type })
      } catch (error) {
        console.error('開關燈失敗:', error)
      }
    }

  },
  created () {
    // 監聽後端發送的 message 訊號
    socket.on('new-texture', (data) => {
      console.log('伺服器傳送訊息:', data)
      this.resultData = data
    })
    socket.on('light-on', (data) => {
      console.log('伺服器傳送訊息:', data)
      this.resultData = data
    })
    socket.on('light-off', (data) => {
      console.log('伺服器傳送訊息:', data)
      this.resultData = data
    })
  }
}
</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
}
a{
  text-decoration:none;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin:0 auto;
  background-color: #242424;
  outline: 1px solid #CF2C2F;
  padding:0.3rem 0;
  height:100vh;
}
.result-content{
    background-color:#242424;
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
}

nav{
  max-width:576px;
  padding:10px 20px;
  align-items: center;
}
.button-circle{
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 30px;
  height: 30px;
  color: #CF2C2F;
  border: 1px solid #CF2C2F;
  border-radius: 50%;
  margin-right: auto;
  justify-content: center;
}

.done-button{
  color:#fff;
  font-size: 12px;
  padding:6px 14px;
  border:1px solid #fff;
  border-radius:30px;
  margin-left: auto;
}
.logo_white{
  width:60%;
  height:fit-content;
  display: block;
}

.upload-button{
  display:block;
  margin:0 auto;
  padding: 18px 28px;
  font-size:18px;
  background-color:#242424;
  color:#fff;
  border:solid 1px #fff;
  border-radius:43px;
}
.result-image {
  display: block;
  width:72%;
  height:auto;
  margin:0 auto;
  border-radius:33px;
  margin-top:35%;
}
.result-text{
  color:#fff;
  font-size: 20px;
  letter-spacing: 0.3rem;
  text-align:center;
}
.streetlight{
  display: block;
  width:100%;
  position: absolute;
  top:7%;
}
.toggle-light{
    display: none;
    &.active{
        display: block;
    }
}
.toggle-switch {
  width: 50px;
  height: 25px;
  position: relative;
  border: 1px solid #ced4da;
  background-color:#fff ;
  border-radius: 40px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;
  &.active{
    background-color:#FFED5F;
    .toggle-handle{
        background-color:#fff;
    }
  }
}

.toggle-switch .toggle-handle {
    width: 20px;
    height: 20px;
    background-color: #343a40;
    position: absolute;
    top: 10%;
    left: 2px;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
    border-radius: 50%;
}

.toggle-switch.active .toggle-handle {
    transform: translateX(25px);
}
</style>
