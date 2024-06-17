<template>
    <h1 class="d-none">結果頁面</h1>
    <div id="app" class="position-relative app" ref="appContainer">
      <nav class="my-0 mx-auto d-flex justify-content-between align-items-center ">
      <img  class="logo_white mx-auto pt-3 " src="/src/assets/images/logo_white.png" alt="logo_white">
      <img v-if="false" class="logo_white mx-auto pt-3 " src="/src/assets/images/logo_small.png" alt="logo_red">
      <div class="w-25 d-flex d-none"><router-link class="done-button" to="/home">家</router-link></div>
    </nav>
        <!-- <img v-if="this.resultData"
          :src=this.resultData.url
          class="result-image position-relative"
          alt="result-image"
        /> -->
        <div class="position-relative" >
        <img  class="streetlight" src="/src/assets/images/streetlight.png" alt="streetlight">
        <img src="/src/assets/images/toggle-light.png" alt="toggle-light" class="streetlight toggle-light">
        <!-- <img v-if="true"
          src='/src/assets/images/default_image.png'
          class="result-image position-relative"
          alt="result-image"
        /> -->
        <img v-if="this.resultData"
          :src=this.resultData.url
          class="result-image position-relative"
          alt="result-image"
        />
        <div class="overlay">點選按鈕照亮您的招牌<br>試著在場景中找到他吧！！</div>
        </div>
        <!-- Toggle Switch -->
        <div class="d-flex flex-column justify-content-between h-100 pb-5 pt-2 result-content">
            <div class="toggle-switch mx-auto" @click="toggleDarkMode">
            <div class="toggle-handle"></div>
            </div>
            <p class="result-text pt-3 d-none">點選按鈕照亮您的招牌<br>試著在場景中找到他吧！！</p>
            <div class="d-flex justify-content-between buttons" >
                <a class="upload-button" href="#" @click.prevent="downloadImage"> <img  src="/src/assets/images/cloud_gray.png" alt=""><img v-if="false" src="/src/assets/images/cloud_red.png" alt=""> 下載街景</a>
                <router-link class="upload-button" to="/gallery"><img  src="/src/assets/images/picture_gray.png" alt=""><img v-if="false" src="/src/assets/images/picture_red.png" alt=""> 大家ㄉ庫</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { io } from 'https://cdn.socket.io/4.7.5/socket.io.esm.min.js'
const socket = io(`${import.meta.env.VITE_RENDER_URL}`, {
  withCredentials: false
})

export default {
  data () {
    return {
      resultDataReady: false,
      resultImageGet: false,
      resultData: null,
      textureCookie: null,
      textureId: null,
      lightMode: false,
      message: null,
      intro: true
    }
  },
  methods: {
    toggleDarkMode () {
      const toggleApp = document.querySelector('.app')
      toggleApp.classList.toggle('active')
      this.lightMode = !this.lightMode
      const toggleSwitch = document.querySelector('.toggle-switch')
      toggleSwitch.classList.toggle('active')
      const toggleLight = document.querySelector('.toggle-light')
      toggleLight.classList.toggle('active')
      if (this.intro) {
        const toggleOverlay = document.querySelector('.overlay')
        toggleOverlay.classList.toggle('active')
        this.intro = false
      }
      console.log(this.textureId)
      if (this.resultImageGet != null || this.textureId != null) {
        if (toggleSwitch.classList.contains('active')) {
          this.lightControllById(this.textureId, this.resultData.category, 'light-on')
        } else {
          this.lightControllById(this.textureId, this.resultData.category, 'light-off')
        }
      }
    },
    lightControllById (id, type, event) {
      try {
        socket.emit(event, { _id: id, category: type })
      } catch (error) {
        console.error('開關燈失敗:', error)
      }
    },
    fetchResultImage (id) {
      fetch(`${import.meta.env.VITE_RENDER_URL}/results/${id}`, {
        method: 'GET'
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          this.resultData = data.data[0]
          this.resultImageGet = true
          console.log(this.resultData.url)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
    // 下載圖片
    downloadImage () {
      if (this.resultData) {
        const link = document.createElement('a')
        // link.href = this.resultData.url
        link.href = this.resultData.url
        console.log(link.href)
        link.download = 'DAO-Taiwan-result-image.png'
        fetch(link.href, {
          mode: 'cors'
        })
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob)
            link.href = url
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
          })
          .catch(error => {
            console.error('Error downloading image:', error)
          })
      }
    }

  },
  created () {
    // 監聽後端發送的 message 訊號
    socket.on('result-upload', (data) => {
      console.log('伺服器傳送訊息:', data)
      console.log(this.textureId, data._id)
      if (data != null && this.textureId === data._id) {
        this.fetchResultImage(this.textureId)
        this.resultData = data
      }
    })
    socket.on('light-on', (data) => {
      console.log('伺服器傳送訊息:', data)
    })
    socket.on('light-off', (data) => {
      console.log('伺服器傳送訊息:', data)
    })
  },
  mounted () {
    // 讀取 texture cookie 取得原始 texture image id
    // console.log(document.cookie)
    const cookies = document.cookie.split(';')
    // console.log('cookies length:', cookies.length)
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim().split('=')
      // console.log('cookie:', cookie)
      if (cookie[0] === 'textureCookie') {
        // console.log(`cookie[${i}]:`, cookie)
        this.textureCookie = JSON.parse(cookie[1])
        this.textureId = this.textureCookie._id
        console.log(this.textureId)
        this.fetchResultImage(this.textureId)
        break
      }
    }
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
  padding:50px 0 5px 0;
  height:100vh;
  height: 100dvh;
  // &.active{
  //   background-image: url('/src/assets/images/background_texture.png');
  //   background-repeat: repeat;
  //   background-size: cover;
  // }
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
}

nav{
  position: fixed;
  top:0;
  max-width: 450px;
  width: 100%;
  z-index: 2;
  padding:10px 20px;
  align-items: center;
}
.button-circle{
  display: flex;
  align-items: center;
  font-size: 25px;
  width: 35px;
  height: 35px;
  color: #CF2C2F;
  border: 1px solid #CF2C2F;
  border-radius: 50%;
  margin-right: auto;
  justify-content: center;
}
.overlay {
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 2;
  margin: auto;
  width: 80%;
  height: 69.5%;
  position: absolute;
    top: 30.5%;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(255, 255, 255, 0.8);
    color: #121212;
    text-align: center;
    border-radius: 33px;
    &.active{
       display:none;
    }
}
.done-button{
  color:#CF2C2F;
  font-size: 14px;
  padding:8px 16px;
  border:1px solid #CF2C2F;
  border-radius:30px;
  margin-left: auto;
}
.logo_white{
  width:60%;
  display: block;
}

.upload-button{
  display:block;
  margin:0 auto;
  padding: 18px 28px;
  font-size:18px;
  background-color:#fff;
  color:black;
  border:solid 1px #fff;
  border-radius:43px;
}

// .active{
//   .upload-button{
//     background-color:#fff;
//     color:#E13237;
//     box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.146);
//   }
// }
.result-image {
  display: block;
  width:80%;
  height:auto;
  margin:0 auto;
  border-radius:33px;
  margin-top:35%;
}
.result-text{
  opacity: 0;
  color:#fff;
  font-size: 20px;
  letter-spacing: 0.3rem;
  text-align:center;
}
.streetlight{
  display: block;
  width:100%;
  position: absolute;
  top:0%;
}
.toggle-light{
    display: none;
    &.active{
        display: block;
    }
}
.toggle-switch {
  margin: 20px;
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
.buttons {
    img{
      width:24px;
    }
}

</style>
