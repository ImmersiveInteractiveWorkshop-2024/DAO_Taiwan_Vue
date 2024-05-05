<template>
  <h1 class="d-none">開始選擇頁面</h1>
  <div id="app">
    <nav class="my-0 d-flex justify-content-between align-items-center">
      <img
        class="logo_sm"
        src="/src/assets/images/logo_small.png"
        alt="logo_sm"
      />
      <div class="w-25 d-flex">
        <router-link class="home-button" to="/home">家</router-link>
      </div>
    </nav>
    <img
      class="w-50 ms-auto"
      src="/src/assets/images/start_signs.png"
      alt="start_signs"
    />
    <div class="text-center lh-lg">
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
    </div>
    <div>
      <div class="w-25 mx-auto pt-5">
        <router-link class="home-button" to="/models"><img class="w-50 mx-auto d-block pt-2 pb-3" src="/src/assets/images/start_arrow.png" alt="arrow"></router-link>
      </div>
    </div>
    <div><img class="w-100" src="/src/assets/images/start_building.png" alt="buildings"></div>
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
  max-width: 576px;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid #cf2c2f;
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
  background-color: #fff;
  outline: 1px solid #cf2c2f;
  height: 100vh;
}
.home-button {
  display: block;
  color: #cf2c2f;
  font-size: 12px;
  padding: 6px 14px;
  border: 1px solid #cf2c2f;
  border-radius: 30px;
  margin-left: auto;
}
.logo_sm {
  width: 60%;
  height: fit-content;
  display: block;
}
</style>
