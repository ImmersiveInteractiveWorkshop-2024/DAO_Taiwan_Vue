<template>
  <div>
    <h1 class="d-none">繪製貼圖</h1>
    <div class="d-none" v-if="selectedProduct">
      <h2>選中的物件: {{ selectedProduct.name }}</h2>
      <p>物件描述: {{ selectedProduct.description }}</p>
    </div>
    <div id="app" class="position-relative" ref="appContainer">
      <nav class="my-0 mx-auto d-flex justify-content-between align-items-center ">
      <div class="w-25"><a href="#" class="button-circle"><ion-icon name="chevron-back-outline"></ion-icon></a></div>
      <img class="logo_sm " src="/src/assets/images/logo_small.png" alt="logo_sm">
      <div class="w-25 d-flex"><a class="done-button" href="#" @click.prevent="doneDrawing">完成</a></div>
    </nav>
      <h2>{{ message }}</h2>
      <div class="canvas-container">
    <canvas
      @mousedown="startPainting"
      @mouseup="finishedPainting"
      @mousemove="draw"
      @touchstart="startTouching"
      @touchmove="dragging"
      @touchend="finishDragging"
      id="canvas"
      :width="canvasWidth"
      :height="canvasWidth"
    ></canvas>
    <img
      src="/src/assets/images/conbon_c.png"
      class="overlay-img"
      alt="conbon_c"
    />
  </div>
      <div class="color-picker " v-if="showColorPicker">
        <div
          v-for="color in colors"
          :key="color"
        ><div class="color-box "
          :style="{  backgroundColor: color, outlineColor: color}"
          @click="changeColor(color)"
          :class="{ 'currentColor': color === this.currentColor }"></div></div>
      </div>
      <div class="tool-list d-flex" v-if="showColorPicker">
        <a class="painting-button" @click.prevent="paintingSelect"><i class="fas fa-paint-brush"></i></a>
        <a class="fill-button" @click.prevent="fillCanvas"><i class="fab fa-bitbucket"></i></a>
        <a class="eraser-button" @click.prevent="eraser(true)"><i class="fas fa-eraser"></i></a>
        <a class="clear-button" @click.prevent="clearCanvas"><i class="fas fa-trash"></i></a>
        <a class="save-button" @click.prevent="saveCanvas"><i class="fas fa-save"></i></a>
      </div>
      <div class="d-flex justify-content-center" v-if="!showColorPicker">
        <a class="upload-button" href="#" @click.prevent="uploadImage">確認上傳</a>
      </div>
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'
// 創建Socket.io客戶端連接
import { io } from 'https://cdn.socket.io/4.7.5/socket.io.esm.min.js'
const socket = io('https://daotaiwanapi.onrender.com', {
  withCredentials: false
})
// 監聽後端發送的 message 訊號
socket.on('message', function (data) {
  console.log('伺服器傳送訊息:', data)
})
export default {
  data () {
    return {
      selectedProduct: null,
      message: ' ',
      painting: false,
      canvas: null,
      ctx: null,
      colors: ['#C73232', '#E6A34B', '#EBC352', '#FDF673', '#D4DAAC', '#9BEC58', '#4234E9', '#A0BEBA', '#DDE9F1', '#D59CF9'],
      currentColor: '#C73232',
      backgroundColor: '#FFFFFF',
      appWidth: 0,
      lastX: 0,
      lastY: 0,
      showColorPicker: true,
      canvasEnabled: true
    }
  },
  computed: {
    canvasWidth () {
      // 计算canvas的宽度和高度，使其与#app的宽度相同
      return this.appWidth
    }
  },
  methods: {
    updateAppWidth () {
      this.appWidth = this.$refs.appContainer.offsetWidth
      this.ctx.strokeStyle = this.currentColor
    },
    changeColor (color) {
      this.ctx.strokeStyle = color
      this.currentColor = color
      this.eraser(false)
    },
    clearCanvas () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.backgroundColor = '#FFFFFF'
      this.eraser(false)
    },
    fillCanvas () {
      this.ctx.fillStyle = this.currentColor
      this.backgroundColor = this.currentColor
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    },
    startPainting (e) {
      this.painting = true
      if (e.touches && e.touches.length > 0) {
        this.startTouching(e.touches[0])
      } else {
        this.draw(e)
      }
    },
    draw (e) {
      if (!this.painting || !this.canvasEnabled) return
      const x = e.offsetX || e.touches[0].clientX - this.$refs.canvas.offsetLeft
      const y = e.offsetY || e.touches[0].clientY - this.$refs.canvas.offsetTop
      this.ctx.lineWidth = 10
      this.ctx.lineCap = 'round'
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
    },
    paintingSelect () {
      this.ctx.strokeStyle = this.currentColor
    },
    finishedPainting () {
      this.painting = false
      this.ctx.beginPath()
    },
    startTouching (e) {
      e.preventDefault()
      this.painting = true
      this.ctx.lineWidth = 10
      this.ctx.lineCap = 'round'
      const rect = this.canvas.getBoundingClientRect()
      const setX = e.touches[0].clientX - rect.left// 取得X座標
      const setY = e.touches[0].clientY - rect.top// 取得Y座標
      this.lastX = setX
      this.lastY = setY
    },
    dragging (e) {
      e.preventDefault()
      const rect = this.canvas.getBoundingClientRect()
      const setX = e.touches[0].clientX - rect.left// 取得X座標
      const setY = e.touches[0].clientY - rect.top// 取得Y座標
      if (!this.painting || !this.canvasEnabled) return
      this.ctx.lineWidth = 10
      this.ctx.beginPath()// 路徑開始
      this.ctx.moveTo(this.lastX, this.lastY) // 路徑結束
      this.ctx.lineTo(setX, setY)
      this.ctx.stroke()
      this.lastX = setX
      this.lastY = setY
    },
    finishDragging () {
      this.painting = false
      this.ctx.beginPath()
    },
    eraser (state) {
      if (state) {
        this.ctx.strokeStyle = '#FFFFFF'
      } else {
        this.ctx.strokeStyle = this.currentColor
      }
    },
    saveCanvas () {
      // 創建新 Canvas
      const newCanvas = document.createElement('canvas')
      const newContext = newCanvas.getContext('2d')
      // 設置新 Canvas 的尺寸
      const targetWidth = 1024 // 目標寬度
      const targetHeight = 1024 // 目標高度
      newCanvas.width = targetWidth
      newCanvas.height = targetHeight

      // 繪製原始圖片到新的 canvas
      newContext.drawImage(this.canvas, 0, 0, targetWidth, targetHeight)

      // 轉換成 PNG 格式
      newCanvas.toBlob((blob) => {
        // 使用 FileSaver.js 保存文件
        saveAs(blob, 'canvas_image.png')
      }, 'image/png')
    },
    uploadImage () {
    // 設定目標尺寸為 1024x1024
      const newCanvas = document.createElement('canvas')
      const newContext = newCanvas.getContext('2d')
      newCanvas.width = 1024
      newCanvas.height = 1024

      // 繪製當前畫布到新畫布上
      newContext.drawImage(this.canvas, 0, 0, 1024, 1024)

      // Canvas 轉為 Blob
      newCanvas.toBlob((blob) => {
        const formData = new FormData()
        formData.append('image', blob, 'canvas_image.png')
        formData.append('type', 'conbon_c')
        // 使用 fetch 函数上传 FormData 到 API https://daotaiwanapi.onrender.com/upload
        fetch('https://daotaiwanapi.onrender.com/upload', {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            alert(JSON.stringify(data.message))
            this.$router.push('/result')
          })
          .catch((error) => {
            console.error('Error:', error)
            alert('Failed to upload image')
          })
      }, 'image/png')
    },
    doneDrawing () {
      this.canvasEnabled = false
      this.showColorPicker = false
    }

  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.updateAppWidth() // 初始化更新 app 寬度
    window.addEventListener('resize', this.updateAppWidth) // 監聽窗口大小變化
    this.canvas.height = window.innerWidth * 0.9
    this.canvas.width = 576
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'))
    if (selectedProduct) {
      this.selectedProduct = selectedProduct
    }
    this.$nextTick(() => {
      this.ctx.strokeStyle = this.colors[0]
    })
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.updateAppWidth) // 移除窗口大小變化監聽器
  },
  updated () {
    // 組件更新後重新計算#app的寬度
    this.updateAppWidth()
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
a{
  text-decoration:none;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

#app {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin:0 auto;
  background-color: #fff;
  outline: 1px solid #CF2C2F;
  padding:0.3rem 0;
  height:100vw;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

canvas {
  width:99%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin:0 auto;
  display: block;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: crosshair;
  z-index: 1;

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
  color:#CF2C2F;
  font-size: 12px;
  padding:6px 14px;
  border:1px solid #CF2C2F;
  border-radius:30px;
  margin-left: auto;
}
.logo_sm{
  width:40%;
  height:fit-content;
  margin: 0 auto;
}
.color-box {
  width: 32px;
  height: 32px;
  margin: 14px auto;
  cursor: pointer;
  border-radius: 50%;
}

.color-picker {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(2, 50%);
  flex-wrap: wrap;
  margin: 1rem 1.5rem;
  padding: 10px;
  background:#F8F8F8;
  border-radius: 31px;
}
.color-picker .currentColor{
  position: relative;
}
.color-picker .currentColor::before{
  outline:3px solid;
  outline-color: inherit;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 50%; /* 創建第一個同心圓 */
  transform: translate(-50%, -50%);
}
.tool-list{
  justify-content: space-around;
  border:1px solid #DEDEDE;
  border-radius: 28px;
  padding:0.3rem;
  margin:0.5rem 1.5rem;
  background:#E6E6E6;

}
.tool-list a {
  display: block;
  box-shadow: 0px 3px 3px 0px #00000029;
  margin: 0rem 0.35rem;
  height: 37px;
  width: 37px;
  line-height: 37px;
  border:1px solid #DEDEDE;
  border-radius: 50%;
  background-color: #fff;
  color: #6A6A6A;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}
.upload-button{
  display:block;
  margin:0 auto;
  padding: 18px 28px;
  font-size:18px;
  background-color:#CF2C2F;
  color:#fff;
  border-radius:43px;
}
.tool-list a:hover {
  background-color: #6A6A6A;
  color:#fff;
}
.canvas-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
}

.overlay-img {
  width:100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; /* 確保圖片在 Canvas 上方 */
  pointer-events: none;
}
</style>
