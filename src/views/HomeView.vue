<template>
    <div id="app" >
        <img class="px-4 pt-5 pb-4" src="/src/assets/images/logo_home.png" alt="logo_home">
        <img class="w-100 d-block h-auto" src="/src/assets/images/buildings.png" alt="logo_home">
        <div class="mx-auto"><router-link class="start-button" to="/start">Start !</router-link></div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin:0 auto;
  background-color: #fff;
  outline: 1px solid #CF2C2F;
  padding:0.3rem 0;
  height:100vh;
  height: 100dvh;
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
.start-button{
  text-decoration: none;
  display: block;
  font-size:25px;
  color: #CF2C2F;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.146);
  background-color:#fff ;
  border-radius: 50px;
  padding:12px 40px;
  position: fixed;
  bottom: 15%; /* 距離底部的距離 */
  left: 50%; /* 距離左邊的距離 */
  transform: translateX(-50%); /* 將元素水平置中 */
}
</style>
