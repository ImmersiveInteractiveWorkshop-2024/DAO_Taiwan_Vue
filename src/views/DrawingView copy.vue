<template>
  <div>
    <h1 class="d-none">繪製貼圖</h1>
    <div class="d-none " v-if="selectedProduct">
      <h2>選中的物件: {{ selectedProduct.name }}</h2>
      <p>物件描述: {{ selectedProduct.description }}</p>
    </div>
    <div id="app" class="position-relative" ref="appContainer">
      <nav class="my-0 mx-auto d-flex justify-content-between align-items-center " v-if="showColorPicker">
      <div class="w-25"><a href="#" class="button-circle" @click.prevent="homeButton"><ion-icon name="chevron-back-outline"></ion-icon></a></div>
      <img class="logo_sm d-none " src="/src/assets/images/logo_small.png" alt="logo_sm">
      <div class="w-25 d-flex"><a class="done-button" href="#" @click.prevent="doneDrawing">完成</a></div>
    </nav>
      <button type="button" id="rotateButton">rotate</button>
      <h2 class="fs-6 d-none">{{ message }}</h2>
      <div class="canvas-container">
    <canvas
      @mousedown="startPainting"
      @mouseup="finishedPainting"
      @mousemove="draw"
      @touchstart="startTouching"
      @touchmove="dragging"
      @touchend="finishDragging"
      id="canvas"
      :width="canvasWidthtest"
      :height="canvasHeighttest"
    ></canvas>
    <img
      :src="overlayImgSrc (this.selectedProduct)"
      class="overlay-img"
      alt="conbon_c"
    />
    <div class="stroke-container" ref="strokeContainer" v-if="showColorPicker">
    <div class="stroke-width" draggable="true" ref="strokeWidth"
  @mousedown="startDragging"
  @touchstart="startDragging"
  @mousemove="handleDragging"
  @touchmove="handleTouchDragging"
  @mouseup="stopDragging"
  @touchend="stopDragging"></div>
  <img
      src="/src/assets/images/stroke-bar.png"
      class="stroke-bar"
      alt="stroke-bar"
    />
  </div>
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
        <a class="clear-button" @click.prevent="undo"><img src="/src/assets/images/undo.png" alt=""></a>
        <a class="save-button" @click.prevent="redo"><img src="/src/assets/images/redo.png" alt=""></a>
        <a class="fill-button" @click.prevent="fillCanvas"><img src="/src/assets/images/fill-bucket.png" alt=""></a>
        <a class="eraser-button" @click.prevent="eraser(true)"><i class="fas fa-eraser"></i></a>
        <a class="clear-button d-none" @click.prevent="clearCanvas"><i class="fas fa-trash"></i></a>
        <a class="save-button d-none" @click.prevent="saveCanvas"><i class="fas fa-save"></i></a>
      </div>
      <div class="d-flex justify-content-center mb-5 pb-5" v-if="!showColorPicker">
        <a class="upload-button " href="#" @click.prevent="uploadImage">確認上傳</a>
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
      colors: ['#C73232', '#FF00EB', '#D59CF9', '#E6A34B', '#EBC352', '#FDF673', '#D4DAAC', '#A0BEBA', '#9BEC58', '#4234E9', '#FFFFFF', '#000000'],
      currentColor: '#C73232',
      backgroundColor: '#FFFFFF',
      appWidth: 0,
      lastX: 0,
      lastY: 0,
      showColorPicker: true,
      canvasEnabled: true,
      isLandscape: false,
      rotateButton: null,
      history: [],
      redoHistory: [],
      strokeDragging: false,
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      currentLineWidth: 15,
      // 定義不同 selectedProduct 對應的 canvas 寬高和 overlay-img 圖片路徑
      productInfo: {
        conbon_c: {
          width: 0.9,
          height: 0.9,
          overlayImg: 'https://storage.googleapis.com/texture-image/20240508/conbon_c-052259638-conbon_c.png'
        },
        conbon_v: {
          width: 0.5,
          height: 0.9,
          overlayImg: '/src/assets/images/logo_small.png'
        }
        // 添加更多的產品對應信息
      }
    }
  },
  computed: {
    canvasWidthtest () {
      return this.appWidth * 0.9
    },
    canvasHeighttest () {
      return this.appWidth * 0.9
    },
    // 根據 selectedProduct 返回對應的 canvas 寬度
    canvasWidth () {
      if (this.selectedProduct && this.productInfo[this.selectedProduct]) {
        return this.appWidth * this.productInfo[this.selectedProduct].width
      } else {
        return this.appWidth * 0.9 // 默認寬度
      }
    },
    // 根據 selectedProduct 返回對應的 canvas 高度
    canvasHeight () {
      if (this.selectedProduct && this.productInfo[this.selectedProduct]) {
        return this.appWidth * this.productInfo[this.selectedProduct].height
      } else {
        return this.appWidth * 0.9 // 默認高度
      }
    }
  },
  watch: {
  },
  methods: {
    // 根據 selectedProduct 返回對應的 overlay-img 圖片路徑
    overlayImgSrc (product) {
      console.log('更新遮罩：', product)
      console.log(this.productInfo[product])
      if (product && this.productInfo[product]) {
        return this.productInfo[product].overlayImg
      } else {
        return this.productInfo.conbon_c.overlayImg // 默認圖片路徑
      }
    },
    checkOrientation (mediaQueryList) {
      if (mediaQueryList.matches) {
        // 横向模式
        this.message = '您的設備已處於橫向模式'
        this.rotateButton.style.display = 'none'
        this.isLandscape = true
      } else {
        // 纵向模式
        this.message = '請將您的設備切換至横向模式以獲取更好的體驗'
        this.rotateButton.style.display = 'none'
        this.isLandscape = false
      }
    },
    updateOverlayImgSrc () {
      if (this.selectedProduct && this.productInfo[this.selectedProduct]) {
        this.overlayImgSrc = this.productInfo[this.selectedProduct].overlayImg
      } else {
        this.overlayImgSrc = this.productInfo.conbon_c.overlayImg
        console.log('沒有找到其他招牌')
      }
    },
    homeButton () {
      this.$router.push('/home')
    },
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
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.eraser(false)
      alert(`你選擇了${this.selectedProduct}`)
    },
    fillCanvas () {
      this.history.push(this.canvas.toDataURL())
      this.ctx.fillStyle = this.currentColor
      this.backgroundColor = this.currentColor
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      this.history.push(this.canvas.toDataURL())
    },
    startPainting (e) {
      this.painting = true

      if (e.touches && e.touches.length > 0) {
        this.history.push(this.canvas.toDataURL())
        this.startTouching(e.touches[0])
      } else {
        this.history.push(this.canvas.toDataURL())
        this.draw(e)
      }
    },
    draw (e) {
      if (!this.painting || !this.canvasEnabled) return
      const x = e.offsetX || e.touches[0].clientX - this.$refs.canvas.offsetLeft
      const y = e.offsetY || e.touches[0].clientY - this.$refs.canvas.offsetTop
      this.ctx.lineWidth = this.currentLineWidth
      this.ctx.lineCap = 'round'
      this.ctx.lineTo(x, y)
      this.ctx.stroke()
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
    },
    undo () {
      if (this.history.length > 0) {
        this.redoHistory.push(this.history.pop())
        this.restoreCanvas(this.history[this.history.length - 1])
        this.redoHistory.push(this.history.pop())
      }
    },
    // 重做操作
    redo () {
      if (this.redoHistory.length > 0) {
        for (let i = 0; i < 2; i++) {
          if (this.redoHistory.length > 0) {
            const nextState = this.redoHistory.pop()
            this.history.push(nextState)
            this.restoreCanvas(nextState)
          }
        }
      }
    },
    // 恢復畫布狀態
    restoreCanvas (dataURL) {
      const img = new Image()
      img.onload = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img, 0, 0)
      }
      img.src = dataURL
    },
    paintingSelect () {
      this.ctx.strokeStyle = this.currentColor
    },
    finishedPainting () {
      this.painting = false
      this.ctx.beginPath()
      this.history.push(this.canvas.toDataURL())
    },
    startTouching (e) {
      e.preventDefault()
      this.painting = true
      this.history.push(this.canvas.toDataURL())
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
      this.ctx.lineWidth = this.currentLineWidth
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
      this.history.push(this.canvas.toDataURL())
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
        formData.append('type', this.selectedProduct)
        // 使用 fetch 函数上传 FormData 到 API https://daotaiwanapi.onrender.com/upload
        fetch('https://daotaiwanapi.onrender.com/upload', {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            document.cookie = `textureCookie=${JSON.stringify(data.data)}; expires=${new Date(Date.now() + 3600 * 1000).toUTCString()}; path=/`
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
    },
    startDragging (event) {
      this.strokeDragging = true
    },

    // 拖动事件处理函数
    handleDragging (event) {
      if (this.strokeDragging) {
        const containerRect = this.$refs.strokeContainer.getBoundingClientRect()
        const topBound = containerRect.top
        const bottomBound = containerRect.bottom // 考慮 stroke-width 的高度
        let y = event.pageY - this.offsetY
        y = Math.max(topBound, Math.min(y, bottomBound)) // 確保 y 在範圍內

        // 計算 y 值相對於父元素高度的百分比
        const parentHeight = this.$refs.strokeWidth.parentElement.offsetHeight
        const percentageY = (y - topBound) / parentHeight * 100
        // 將 y 值設置為百分比
        this.$refs.strokeWidth.style.top = `${percentageY}%`
        const lineWidth = 5 + (100 - percentageY) / 100 * 25
        // 設置 context 的 lineWidth
        this.currentLineWidth = lineWidth
        console.log(this.currentLineWidth)
      }
    },
    handleTouchDragging (event) {
      if (this.strokeDragging) {
        const containerRect = this.$refs.strokeContainer.getBoundingClientRect()
        const topBound = containerRect.top
        const bottomBound = containerRect.bottom // 考慮 stroke-width 的高度
        let touchY = event.touches[0].clientY - this.offsetY
        touchY = Math.max(topBound, Math.min(touchY, bottomBound))

        // 計算 y 值相對於父元素高度的百分比
        const parentHeight = this.$refs.strokeWidth.parentElement.offsetHeight
        const touchPercentageY = (touchY - topBound) / parentHeight * 100
        // 將 y 值設置為百分比
        this.$refs.strokeWidth.style.top = `${touchPercentageY}%`
        const lineWidth = 5 + (100 - touchPercentageY) / 100 * 25
        // 設置 context 的 lineWidth
        this.currentLineWidth = lineWidth
        console.log(this.currentLineWidth)
      }
    },
    // 结束拖动事件处理函数
    stopDragging () {
      this.strokeDragging = false
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.updateAppWidth() // 初始化更新 app 寬度
    window.addEventListener('resize', this.updateAppWidth) // 監聽窗口大小變化
    this.canvas.height = 450 * 0.9
    this.canvas.width = 450 * 0.9
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'))
    if (selectedProduct) {
      this.selectedProduct = selectedProduct
      this.overlayImgSrc(this.selectedProduct)
    }
    this.$nextTick(() => {
      this.ctx.strokeStyle = this.colors[0]
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    })
    // 监听设备方向变化
    const mediaQueryList = window.matchMedia('(orientation: landscape)')
    this.rotateButton = document.getElementById('rotateButton')
    mediaQueryList.addEventListener('change', () => this.checkOrientation(mediaQueryList))

    // 初始化时检测一次设备方向
    this.checkOrientation(mediaQueryList)

    // 初始化时更新应用宽度
    this.updateAppWidth()
    document.addEventListener('mousemove', this.handleDragging)
    document.addEventListener('mouseup', this.stopDragging)
    document.addEventListener('touchstart', this.startStrokeDragging)
    document.addEventListener('touchmove', this.handleTouchDragging)
    document.addEventListener('touchend', this.stopDragging)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.updateAppWidth) // 移除窗口大小變化監聽器
    document.removeEventListener('mousemove', this.handleDragging)
    document.removeEventListener('mouseup', this.stopDragging)
    document.removeEventListener('touchmove', this.handleTouchDragging)
    document.removeEventListener('touchend', this.stopDragging)
  },
  updated () {
    // 組件更新後重新計算#app的寬度
    this.updateAppWidth()
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 450px;
  margin:0 auto;
  background-color: #fff;
  outline: 1px solid #CF2C2F;
  padding:50px 0 5px 0;
  height:100vh;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

canvas {
  border: #6A6A6A 1px solid;
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
  position: fixed;
  top:0px;
  z-index:3;
  width: 100%;
  max-width:450px;
  padding:10px 20px;
  align-items: center;
  background-color:#fff ;
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
  grid-template-columns: repeat(6, 16.6%);
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
   & img{
    width:20px;
    height:auto;
  }
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
  width:110%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; /* 確保圖片在 Canvas 上方 */
  pointer-events: none;
}
.stroke-bar{
  width: 100%;
  display: block;
  position: absolute;
  top:0%;
  right: 0%;
  z-index: 2;
  pointer-events: none;
}
.stroke-container{
  width: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  top:80%;
  right: 0%;
  z-index: 2;
  height:185px;
}
.stroke-width{
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color:#5C5C5C;
  display: block;
  position: absolute;
  right: 0%;
  top:50%;
  z-index: 3;

}
</style>
