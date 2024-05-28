<template>
  <div id="app">
  <h1 class="d-none">作品集頁面</h1>
  <img class="logo_sm " src="/src/assets/images/logo_small.png" alt="logo_sm">
  <ul class="image-list">
      <li v-for="(item, index) in reversedItems" :key="index" class="image-item">
        <img :src="item.url" alt="商品圖片">
      </li>
    </ul>
    <div class="footer-link">
      <router-link class="upload-button" to="/models">再玩一次</router-link>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {
      items: [] // 存儲從 GET 請求獲取的數據
    }
  },
  computed: {
    reversedItems () {
      // 使用 computed 屬性對數據進行反轉
      return this.items.slice(-30).reverse()
    }
  },
  mounted () {
    axios.get('https://daotaiwanapi.onrender.com/results')
      .then(response => {
        // 成功獲取數據後，將數據存儲到 items 中
        this.items = response.data.data
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin:0 auto;
  outline: 1px solid #CF2C2F;
  padding:0.3rem 0;
  background-image: url('../assets/images/background_texture.png');
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}
.image-list {
  list-style: none;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.logo_sm{
  display: block;
  padding:24px 0;
  width:80%;
  margin: 0 auto;
}
.image-item {
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius:18px;
}

/* 底部固定位置的樣式 */
a{
  text-decoration: none;
  color:#CF2C2F;
}
.footer-link {
  text-decoration: none;
  position: fixed;
  bottom: 25px; /* 距離底部的距離 */
  left: 50%; /* 距離左邊的距離 */
  transform: translateX(-50%); /* 將元素水平置中 */
  color:#CF2C2F;
  font-size: 18px;
  padding:14px 24px;
  border:1px solid #CF2C2F;
  border-radius:30px;
  background-color:#fff;
  margin-left: auto;
}
</style>
