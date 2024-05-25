<template>
  <h1 class="d-none">開始選擇頁面</h1>
  <div id="app" class="position-relative">
    <nav class="my-0 d-flex justify-content-center align-items-center">
      <img
        class="logo_sm"
        src="/src/assets/images/logo_small.png"
        alt="logo_sm"
      />
    </nav>
    <img
      class="start-signs ms-auto position-absolute end-0 z-0"
      src="/src/assets/images/start_signs.png"
      alt="start_signs"
    />
    <div class="content text-center w-100 lh-lg position-absolute z-2">
      <p >
        五顏六色的招牌<br />
        各樣活動海報隨處可見
      </p>
      <p>
        不僅僅是人們日常生活的一部分<br />
        同時也展現了臺灣的文化特色
      </p>
      <p>
        在這個空間裡<br />
        留下專屬於你的臺灣街景記憶吧！
      </p>
      <div>
      <div class="w-25 mx-auto pt-5">
        <router-link class="home-button" to="/models"><img class="w-50 mx-auto d-block pt-2 pb-3" src="/src/assets/images/start_arrow.png" alt="arrow"></router-link>
      </div>
    </div>
    </div>
    <div class="position-absolute bottom-0 z-0"><img class="w-100 building-img" src="/src/assets/images/start_building.png" alt="buildings"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
nav {
  position: fixed;
  top:0px;
  z-index:3;
  max-width: 450px; /* 限制寬度不超過 450px */
  width: 100%;
  padding:27px 20px;
  align-items: center;
}
#app {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  outline: 1px solid #cf2c2f;
  height: 100vh;
  height: 100dvh;
  padding:50px 0 5px 0;
}
#app:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-image: url('../assets/images/background_texture.png');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
.home-button {
  display: block;
  color: #cf2c2f;
  font-size: 14px;
  padding: 8px 16px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.146);
  border-radius: 30px;
  margin-left: auto;
  background-color:#fff ;
}
.logo_sm {
  width: 60%;
  display: block;
}
.content {
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.start-signs{
  width:40%;
}
/* .building-img{
  position:fixed;
  bottom:0;
  z-index: 1; */
/* } */
</style>
