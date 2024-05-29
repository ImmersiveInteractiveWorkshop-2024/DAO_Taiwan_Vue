<template>
    <div id="app" >
      <img src="/src/assets/images/Home_page/1.png" class="building-img image1" ref="image1" alt="Image 1">
        <img src="/src/assets/images/Home_page/2.png" class="building-img image2" ref="image2" alt="Image 2">
        <img src="/src/assets/images/Home_page/3.png" class="building-img image3" ref="image3" alt="Image 3">
        <img src="/src/assets/images/Home_page/4.png" class="building-img image4" ref="image4" alt="Image 4">
        <img src="/src/assets/images/Home_page/5.png" class="building-img image5" ref="image5" alt="Image 5">
        <img src="/src/assets/images/Home_page/6.png" class="building-img image6" ref="image6" alt="Image 6">
        <img src="/src/assets/images/Home_page/7.png" class="building-img image7" ref="image7" alt="Image 7">
        <img src="/src/assets/images/Home_page/8.png" class="building-img image8" ref="image8" alt="Image 8">
        <div class="container ">
        <img class="px-4 pt-4 pb-4 logo" src="/src/assets/images/logo_home.png" alt="logo_home">
        <!-- <img class="template" src="/src/assets/images/Home_page/位置.png" alt="template"> -->
        <!-- <img class="template" src="/src/assets/images/Home_page/動畫示意位置.png" alt="template"> -->
        <a @click="animateImages" class="start-button">Start !</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    animateImages () {
      this.animateImage(this.$refs.image1, 23, 0, 17, 44, 22)
      this.animateImage(this.$refs.image2, 0, 0, 43, 35, 27)
      this.animateImage(this.$refs.image3, 0, 0, 30, 54, 66)
      this.animateImage(this.$refs.image4, 0, 0, 28, 60, 4)
      this.animateImage(this.$refs.image5, 0, -5, 20, 32, 10)
      this.animateImage(this.$refs.image6, 0, 0, 48, 28, 78)
      this.animateImage(this.$refs.image7, 0, 0, 20, 18, 24)
      this.animateImage(this.$refs.image8, 0, 0, 20, 21, 70)
      this.$refs.image8.addEventListener('transitionend', this.transitionToNextPage)
    },
    animateImage (image, rotationY, rotationZ, width, top, left) {
      image.style.transform = `rotateY(${rotationY}deg)`
      image.style.transform = `rotateZ(${rotationZ}deg)`
      image.style.width = `${width}%`
      image.style.top = `${top}%`
      image.style.left = `${left}%`
    },
    transitionToNextPage () {
      this.$router.push('/start')
    }
  }
}
</script>

<style lang="scss" scoped>
.template{
  position:absolute;
  width:100%;
  left:0%;
  top:0%;
  opacity:50%;
}
#app {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin:0 auto;
  outline: 1px solid #CF2C2F;
  padding:0.3rem 0;
  height:100vh;
  height: 100dvh;
  background-image: url('../assets/images/background_texture.png');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  overflow: hidden;
}

.images-container {
  position: relative;
  width: 100%;
  height: 100px;
}
.building-img{
  width:100%;
}
.image1 {
  width: 17%;
  position: fixed;
  top: 41%;
  left: 12%;
  transition: all 1s ease;
  z-index: 9;
}
.image2 {
  width: 50%;
  position: fixed;
  top: 35%;
  left: 20%;
  transition: all 1s ease;
  z-index: 8;
}
.image3 {
  width: 30%;
  position: fixed;
  top: 50%;
  left: 66%;
  z-index: 7;
  transition: all 1s ease;
}
.image4 {
  width: 33%;
  position: fixed;
  top: 50%;
  left: 0%;
  z-index: 7;
  transition: all 1s ease;
}
.image5 {
  width: 23%;
  position: fixed;
  top: 37%;
  left: 6%;
  z-index: 6;
  transition: all 1s ease;
}
.image6 {
  width: 48%;
  position: fixed;
  top: 39%;
  left: 78%;
  z-index: 5;
  transition: all 1s ease;
}
.image7 {
  width: 28%;
  position: fixed;
  top: 27%;
  left: 22%;
  z-index: 5;
  transition: all 1s ease;
}
.image8 {
  width: 18%;
  position: fixed;
  top: 36%;
  left: 73%;
  z-index: 5;
  transition: all 1s ease;
}
.logo{
  width:83%;
  padding: 7%;
}
.start-button{
  text-decoration: none;
  display: block;
  font-size:25px;
  color: #CF2C2F;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.146);
  background-color:#fff ;
  border-radius: 50px;
  padding:12px 40px;
  position: absolute;
  bottom: 9%; /* 距離底部的距離 */
  left: 50%; /* 距離左邊的距離 */
  transform: translateX(-50%); /* 將元素水平置中 */
  z-index: 10;
}
</style>
