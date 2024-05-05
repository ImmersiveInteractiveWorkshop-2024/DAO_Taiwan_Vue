<template>
    <div id="app" >
        <img class="px-4 pt-5 pb-4" src="/src/assets/images/logo_home.png" alt="logo_home">
        <img class="w-100 d-block h-auto" src="/src/assets/images/buildings.png" alt="logo_home">
        <div class="mx-auto"><router-link class="start-button" to="/start">開始</router-link></div>
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
}
.start-button{
  text-decoration: none;
  display: block;
  font-size:25px;
  color: #CF2C2F;
  border: 1px solid #CF2C2F;
  border-radius: 50px;
  padding:12px 40px;
}
</style>
