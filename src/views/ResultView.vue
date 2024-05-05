<template>
    <h1 class="d-none">結果頁面</h1>
    <div id="app" class="position-relative" ref="appContainer">
      <nav class="my-0 mx-auto d-flex justify-content-between align-items-center ">
      <img class="logo_white " src="/src/assets/images/logo_white.png" alt="logo_white">
      <div class="w-25 d-flex"><router-link class="done-button" to="/drawing">返回</router-link></div>
    </nav>
        <img v-if="this.resultData"
          :src=this.resultData.url
          class="result-image"
          alt="result-image"
        />

        <img  class="streetlight" src="/src/assets/images/streetlight.png" alt="streetlight">
        <img src="/src/assets/images/toggle-light.png" alt="toggle-light" class="streetlight toggle-light">
        <!-- Toggle Switch -->
        <div class="d-flex flex-column justify-content-between h-100 pb-5 pt-2 result-content">
            <div class="toggle-switch mx-auto" @click="toggleDarkMode">
            <div class="toggle-handle"></div>
            </div>
            <p class="result-text pt-3">已點亮您的招牌<br>試著在場景中找到他吧！！</p>
            <div class="d-flex justify-content-between" >
                <a class="upload-button" href="#" @click.prevent="downloadImage">下載</a>
                <router-link class="upload-button" to="/gallery">大家ㄉ庫</router-link>
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
      resultDataReady: false,
      resultImageGet: false,
      resultData: null,
      textureCookie: null,
      textureId: null
    }
  },
  methods: {
    toggleDarkMode () {
      const toggleSwitch = document.querySelector('.toggle-switch')
      toggleSwitch.classList.toggle('active')
      const toggleLight = document.querySelector('.toggle-light')
      toggleLight.classList.toggle('active')
      console.log(this.textureId)
      if (this.resultImageGet != null || this.textureId != null) {
        if (toggleSwitch.classList.contains('active')) {
          this.lightControllById(this.textureId, 'conbon_c', 'light-on')
        } else {
          this.lightControllById(this.textureId, 'conbon_c', 'light-off')
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
      fetch(`https://daotaiwanapi.onrender.com/results/${id}`, {
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
  border-bottom:1px solid #fff;
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
