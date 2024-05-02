<template>
  <div>
    <h1>繪製貼圖</h1>
    <div v-if="selectedProduct">
      <h2>選中的物件: {{ selectedProduct.name }}</h2>
      <p>物件描述: {{ selectedProduct.description }}</p>
    </div>
    <nav class="my-0 mx-auto d-flex justify-content-between align-items-center ">
      <a href="#" class="button-circle"><ion-icon name="chevron-back-outline"></ion-icon></a>
      <img class="logo_sm" src="/src/assets/images/logo_small.png" alt="logo_sm">
      <a class="done-button" href="#" @click.prevent="uploadImage">完成</a>
    </nav>
    <div id="app" class="position-relative" ref="appContainer">
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
      <div class="color-picker ">
        <div
          v-for="color in colors"
          :key="color"
        ><div class="color-box "
          :style="{  backgroundColor: color, outlineColor: color}"
          @click="changeColor(color)"
          :class="{ 'currentColor': color === this.currentColor }"></div></div>
      </div>
      <div class="tool-list d-flex">
        <a class="painting-button" @click.prevent="paintingSelect"><i class="fas fa-paint-brush"></i></a>
        <a class="fill-button" @click.prevent="fillCanvas"><i class="fab fa-bitbucket"></i></a>
        <a class="eraser-button" @click.prevent="eraser(true)"><i class="fas fa-eraser"></i></a>
        <a class="clear-button" @click.prevent="clearCanvas"><i class="fas fa-trash"></i></a>
        <a class="save-button" @click.prevent="saveCanvas"><i class="fas fa-save"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'
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
      lastY: 0
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
      if (!this.painting) return
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
      if (!this.painting) return
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
    // 创建一个新的 Canvas 元素并设置尺寸为 1024x1024
      const newCanvas = document.createElement('canvas')
      const newContext = newCanvas.getContext('2d')
      newCanvas.width = 1024
      newCanvas.height = 1024

      // 绘制当前画布内容到新 Canvas 上
      newContext.drawImage(this.canvas, 0, 0, 1024, 1024)

      // 将新 Canvas 转换为 Blob 对象
      newCanvas.toBlob((blob) => {
        // 创建 FormData 对象并添加新的 Blob 对象
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
          })
          .catch((error) => {
            console.error('Error:', error)
            alert('Failed to upload image')
          })
      }, 'image/png')
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
  max-width: 576px;
  margin:0 auto;
  background-color: #fff;
  outline: 1px solid #CF2C2F;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

canvas {
  width:100%;
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
}
.button-circle{
  display: flex;
  align-items: center;
  font-size:20px;
  padding:10px 10px;
  color:#CF2C2F;
  border:1px solid #CF2C2F;
  border-radius:50%;
}

.done-button{
  color:#CF2C2F;
  padding:8px 14px;
  border:1px solid #CF2C2F;
  border-radius:30px;
}
.logo_sm{
  width:150px;
  height:fit-content;
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

.tool-list a:hover {
  background-color: #6A6A6A;
  color:#fff;
}
.canvas-container {
  position: relative;
  width: 100%; /* 确保Canvas和图片都占满父容器 */
  height: 0;
  padding-top: 100%; /* 创建一个宽高比为1:1的容器 */
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
