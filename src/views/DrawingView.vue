<template>
  <div>
    <h1 class="d-none">繪製貼圖</h1>
    <div class="d-none " v-if="selectedProduct">
      <h2>選中的物件: {{ selectedProduct.name }}</h2>
      <p>物件描述: {{ selectedProduct.description }}</p>
    </div>
    <div id="app" class="app position-relative" ref="appContainer">
      <nav  class="nav my-0 mx-auto d-flex justify-content-between align-items-center " v-if="showColorPicker">
      <div class="w-25"><a href="#" class="button-circle" @click.prevent="backwardButton"><ion-icon name="chevron-back-outline"></ion-icon></a></div>
      <img class="logo_sm d-none " src="/src/assets/images/logo_small.png" alt="logo_sm">
      <div class="w-25 d-flex"><a class="done-button" href="#" @click.prevent="doneDrawing">完成</a></div>
    </nav>
      <button type="button" class="d-none" id="rotateButton">rotate</button>
      <h2 class="fs-6 d-none" >{{ message }}</h2>
      <div class="landscape-upload-button d-flex justify-content-center mb-5 pb-5 position-fixed" v-if="!showColorPicker && !isLandscape">
        <a class="upload-button " href="#" @click.prevent="uploadImage">確認上傳</a>
      </div>
      <div class="canvas-container">
        <img
      :src='overlayImgSrc (this.selectedProduct)'
      class="overlay-img"
      :class="this.selectedProduct"
      alt="conbon_c"
    />
    <canvas id="canvas"
      @mousedown="startPainting"
      @mouseup="finishedPainting"
      @mousemove="draw"
      @touchstart="startTouching"
      @touchmove="dragging"
      @touchend="finishDragging"
      :width="canvasWidth"
      :height="canvasHeight"
      :style="{ left: canvasLeft ,top:canvasTop}"
    ></canvas>
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
    <div class="tools-container">
      <div class="tool-list d-flex" v-if="showColorPicker">
        <a class="painting-button" @click.prevent="paintingSelect"><i class="fas fa-paint-brush"></i></a>
        <a class="clear-button" @click.prevent="undo"><img src="/src/assets/images/undo.png" alt=""></a>
        <a class="save-button" @click.prevent="redo"><img src="/src/assets/images/redo.png" alt=""></a>
        <a class="fill-button" @click.prevent="fillCanvas"><img src="/src/assets/images/fill-bucket.png" alt=""></a>
        <a class="eraser-button" @click.prevent="eraser(true)"><i class="fas fa-eraser"></i></a>
        <a class="clear-button" @click.prevent="clearCanvas"><i class="fas fa-trash"></i></a>
        <a class="save-button d-none" @click.prevent="saveCanvas"><i class="fas fa-save"></i></a>
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
      <div class="d-flex justify-content-center mb-5 pb-5" v-if="!showColorPicker && isLandscape">
        <a class="upload-button " href="#" @click.prevent="uploadImage">確認上傳</a>
      </div>
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
      canvasLeft: '50%',
      canvasTop: '50%',
      selectedProduct: null,
      message: ' ',
      painting: false,
      canvas: null,
      ctx: null,
      colors: ['#C73232', '#E27200', '#EAC252', '#E8DF00', '#88D04D', '#2E8100', '#04CBF0', '#4234E9', '#9400F2', '#D526C7', '#FFFFFF', '#000000'],
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
          width: 0.8,
          height: 0.8,
          left: '44%',
          top: '50%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240509/conbon_c-201802413-new_conbon_c.png'
        },
        conbon_v: {
          width: 1,
          height: 1,
          left: '50%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240508/conbon_v-072814348-masks_conbon_v.png'
        },
        conbon_h: {
          width: 0.55,
          height: 0.55,
          left: '49.5%',
          top: '40%',
          orientation: 'landscape',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240510/conbon_h-002815715-new_conbon_h.png'
        },
        poster_vu: {
          width: 0.82,
          height: 0.82,
          left: '44%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240508/poster_vu-080911471-masks_poster_vu.png'
        },
        poster_h: {
          width: 0.82,
          height: 0.82,
          left: '44%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240508/poster_h-081819072-models_poster_h.png'
        },
        poster_vs: {
          width: 0.82,
          height: 0.82,
          left: '44%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240509/poster_vs-180239779-models_poster_vs.png'
        },
        conbon_hl: {
          width: 0.82,
          height: 0.82,
          left: '44%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240509/conbon_hl-180254547-models_conbon_hl.png'
        },
        poster_hs: {
          width: 0.82,
          height: 0.82,
          left: '44%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240509/poster_hs-181336719-models_poster_hs.png'
        },
        poster_v: {
          width: 0.82,
          height: 0.82,
          left: '44%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240508/poster_v-082633244-models_poster_v.png'
        },
        conbon_u: {
          width: 0.82,
          height: 0.82,
          left: '44%',
          orientation: 'portrait',
          overlayImg: 'https://storage.googleapis.com/texture-image/20240509/conbon_u-181347300-models_conbon_u.png'
        }
        // 添加更多的產品對應信息
      },
      reloadCount: 0, // 控制重新加载的状态
      orientation: 'portrait'
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
  methods: {
    // 根據 selectedProduct 返回對應的 overlay-img 圖片路徑
    overlayImgSrc (product) {
      console.log('更新遮罩：', product)
      const productData = this.productInfo[product]
      if (productData) {
        this.canvasLeft = productData.left
        this.canvasTop = productData.top
        this.orientation = productData.orientation
        return productData.overlayImg
      }
    },
    checkOrientation () {
    // 获取设备当前的方向
      const mediaQueryList = window.matchMedia('(orientation: landscape)')
      const isDeviceLandscape = mediaQueryList.matches
      if (this.selectedProduct) {
        console.log('方向確認', this.selectedProduct)
        const productOrientation = this.productInfo[this.selectedProduct].orientation

        if ((productOrientation === 'landscape' && !isDeviceLandscape) ||
          (productOrientation === 'portrait' && isDeviceLandscape)) {
          if (productOrientation === 'landscape') {
            this.message = '請旋轉手機至橫向'
            this.showOverlay('請旋轉手機至橫向')
          } else {
            this.message = '請旋轉手機至直向'
            this.showOverlay('請旋轉手機至直向')
          }
        } else {
          if (productOrientation === 'landscape' && this.showColorPicker !== false) {
            // app/nav最大寬度設置100%
            document.querySelector('.app').style.maxWidth = '100%'
            document.querySelector('.nav').style.maxWidth = '100%'
            document.querySelector('.canvas-container').style.paddingTop = '35%'
            document.querySelector('.tools-container').style.display = 'flex'
            document.querySelector('.tools-container').style.position = 'fixed'
            document.querySelector('.tools-container').style.bottom = '0'
            document.querySelector('.tools-container').style.zIndex = '10'
            document.querySelector('.tools-container').classList.add('landscape')
            document.querySelector('.color-picker').classList.add('landscape')
            document.querySelector('.tool-list').classList.add('landscape')
            document.querySelector('.stroke-container').classList.add('landscape')
            document.querySelector('.stroke-width').classList.add('landscape')
          }
          this.hideOverlay()
          this.message = ''
        }
      }
    },
    showOverlay (message) {
    // 創建遮罩元素
      const overlay = document.createElement('div')
      overlay.id = 'overlay' // 加上 id 屬性
      overlay.style.position = 'fixed'
      overlay.style.top = '0'
      overlay.style.left = '0'
      overlay.style.width = '100%'
      overlay.style.height = '100%'
      overlay.style.background = 'rgba(1, 1, 1, 1)'
      overlay.style.color = '#fff'
      overlay.style.display = 'flex'
      overlay.style.alignItems = 'center'
      overlay.style.justifyContent = 'center'
      overlay.style.fontSize = '24px'
      overlay.style.zIndex = '10'
      overlay.innerHTML = message

      // 將遮罩元素加入到 body 中
      document.body.appendChild(overlay)
    },
    hideOverlay () {
      const overlay = document.getElementById('overlay')
      if (overlay) {
        overlay.parentNode.removeChild(overlay)
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
    backwardButton () {
      this.$router.push('/models')
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
      const mediaQueryList = window.matchMedia('(orientation: landscape)')
      mediaQueryList.removeEventListener('change', () => this.checkOrientation())
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
    },
    reloadComponent () {
      if (this.reloadCount < 3) {
        // 这里执行重新加载组件的逻辑
        console.log(this.reloadCount)
        // 重新加载后增加计数器
        this.reloadCount++
        // 使用 $forceUpdate() 方法强制组件重新渲染
        this.$forceUpdate()
        // 获取 canvas 和 overlay-img 元素
        const overlayImgElement = document.querySelector('.overlay-img')
        // 设置新的 z-index 值
        if (overlayImgElement) {
          overlayImgElement.style.zIndex = '3'
          console.log('Reloading...')
        } else {
          console.log('Stopped reloading.')
        }
      }
    }
  },
  mounted () {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.updateAppWidth() // 初始化更新 app 寬度
    window.addEventListener('resize', this.updateAppWidth) // 監聽窗口大小變化
    this.canvas.height = 450 * 0.9
    this.canvas.width = 450 * 0.9
    this.$nextTick(() => {
      this.ctx.strokeStyle = this.colors[0]
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    })

    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'))
    if (selectedProduct) {
      this.selectedProduct = selectedProduct
      this.overlayImgSrc(this.selectedProduct)
    }
    this.checkOrientation()
    document.addEventListener('mousemove', this.handleDragging)
    document.addEventListener('mouseup', this.stopDragging)
    document.addEventListener('touchstart', this.startStrokeDragging)
    document.addEventListener('touchmove', this.handleTouchDragging)
    document.addEventListener('touchend', this.stopDragging)
    this.reloadComponent()
    this.reloadComponent()
    this.reloadComponent()
    this.reloadComponent()
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.updateAppWidth) // 移除窗口大小變化監聽器
    document.removeEventListener('mousemove', this.handleDragging)
    document.removeEventListener('mouseup', this.stopDragging)
    document.removeEventListener('touchmove', this.handleTouchDragging)
    document.removeEventListener('touchend', this.stopDragging)
    const mediaQueryList = window.matchMedia('(orientation: landscape)')
    mediaQueryList.removeEventListener('change', () => this.checkOrientation())
  },
  updated () {
    this.checkOrientation()
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
  touch-action: none;
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
  height: 100dvh;
  touch-action: none;
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
  border-radius: 5px;
  cursor: crosshair;
  z-index: 1;

}
nav{
  position: fixed;
  top:0px;
  z-index:4;
  width: 100%;
  max-width:450px;
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

.done-button{
  color:#CF2C2F;
  font-size: 14px;
  padding:8px 16px;
  border:1px solid #CF2C2F;
  border-radius:30px;
  margin-left: auto;
}
.landscape-upload-button{
  z-index:10;
  top:20px;
  right:20px;
}
.logo_sm{
  width:40%;
  margin: 0 auto;
}
.color-box {
  width: 25px;
  height: 25px;
  margin: 7px auto;
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
  background:#EBEBEB;
  border-radius: 31px;
  &.landscape{
    display: flex;
    width:60%;
    justify-content: space-around;
    padding:10px 18px;
  }
}
.color-picker .currentColor{
  position: relative;
}
.color-picker .currentColor::before{
  outline:2px solid;
  outline-color: inherit;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
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
  &.landscape{
    padding:10px;
    margin: 1rem 0 1rem 1.5rem;
    width: 40%;
  }
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
.tools-container{
  &.landscape{
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index: 10;
    width: 100%;
  }
  position: fixed;
  bottom: 0px;
  z-index: 10;
  width: 100%;
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

.conbon_c {
  width:88.7%;
  position: absolute;
  top: 50%;
  left: 44%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events: none;
}
.conbon_v {
  width:103%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events: none;
}
.conbon_h {
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events: none;
}
.poster_vu {
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events: none;
}
.poster_h {
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events:none;
}
.poster_v{
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events:none;
}
.poster_vs{
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events:none;
}
.conbon_hl{
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events:none;
}
.poster_hs{
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events:none;
}
.conbon_u{
  width:100%;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3; /* 確保圖片在 Canvas 上方 */
  pointer-events:none;
}
.overlay-img{
  position: absolute;
  z-index: 2;
}
.stroke-bar{
  width: 100%;
  display: block;
  position: absolute;
  top:0%;
  right: 0%;
  z-index: 2;
  pointer-events: none;
  height: auto;
}
.stroke-container{
  width: 24px;
  position: absolute;
  transform: translate(-50%, -50%);
  top:50%;
  right: 3%;
  z-index: 3;
  height:218px;
  &.landscape{
    width:20px;
    top:45%;
    height:198px;
  }
}
.stroke-width{
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color:#5C5C5C;
  display: block;
  position: absolute;
  right: 0%;
  top:50%;
  z-index: 3;
  &.landscape{
    transform: translate(-50%, -50%);
    width:24px;
    height: 24px;
    top:50%;
    left:50%;
  }
}
</style>
