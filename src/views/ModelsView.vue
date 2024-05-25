<template>
  <h1 class="d-none">模型選擇頁面</h1>
  <div id="app" class="position-relative">
    <nav class="my-0 d-flex justify-content-between align-items-center ">
      <div class="w-25"><router-link class="button-circle" to="/start"><ion-icon name="chevron-back-outline"></ion-icon></router-link></div>
      <div class="w-25 d-flex"></div>
    </nav>
    <div class="text-center">
      <img
        class="logo_sm d-block mx-auto py-4"
        src="/src/assets/images/logo_small.png"
        alt="logo_sm"
      />
      <p>點選招牌進行繪製</p>
    </div>
    <div class="position-relative">
      <div class="position-absolute d-flex sign-container w-100 flex-column">
        <div class="sign-conbon-c w-100"><img  @click="selectProduct('conbon_c')" src="/src/assets/images/models_conbon_c.png" alt=""></div>
        <div class="sign-conbon-v w-100"><img @click="selectProduct('conbon_v')" src="/src/assets/images/models_conbon_v.png" alt=""></div>
        <div class="sign-conbon-h w-100"><img @click="selectProduct('conbon_h')" src="/src/assets/images/models_conbon_h.png" alt=""></div>
        <div class="sign-poster-vu w-100"><img @click="selectProduct('poster_vu')" src="/src/assets/images/models_poster_vu.png" alt=""></div>
        <div class="d-flex">
          <div class="sign-poster-h w-100"><img @click="selectProduct('poster_h')" src="/src/assets/images/models_poster_h.png" alt=""></div>
          <div class="sign-poster-vs w-100"><img @click="selectProduct('poster_vs')" src="/src/assets/images/models_poster_vs.png" alt=""></div>
        </div>
        <div class="sign-conbon-hl w-100"><img @click="selectProduct('conbon_hl')" src="/src/assets/images/models_conbon_hl.png" alt=""></div>
        <div class="d-flex">
          <div class="sign-poster-v w-100"><img @click="selectProduct('poster_v')" src="/src/assets/images/models_poster_v.png" alt=""></div>
          <div class="sign-poster-hs w-100"><img @click="selectProduct('poster_hs')" src="/src/assets/images/models_poster_hs.png" alt=""></div>
        </div>
        <div class="sign-conbon-u w-100"><img @click="selectProduct('conbon_u')" src="/src/assets/images/models_conbon_u.png" alt=""></div>
      </div>
      <img class="w-100" src="/src/assets/images/models_buildings.png" alt="buildings"></div>
  </div>
  <div class="d-none">
    <div class="card" v-for="(product, index) in products" :key="index" :class="{ 'active': selectedProduct === product.id }" @click="selectProduct(product)" style="width: 18rem">
        <img
            class="card-img-top"
            :src="product.image"
            alt="Card image cap"
        />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <p v-if="selectedProduct">您選擇的物件是：{{ selectedProduct}}</p>
  <button class="btn btn-primary" @click="goToDrawingPage">確認選擇物件</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      selectedProduct: null,
      products: [
        { id: 1, name: 'conbon-c' },
        { id: 2, name: 'conbon-v' },
        { id: 3, name: 'conbon-h' },
        { id: 4, name: 'poster-vu' },
        { id: 5, name: 'poster-h' },
        { id: 6, name: 'poster-vs' },
        { id: 7, name: 'conbon-hl' },
        { id: 8, name: 'poster-v' },
        { id: 9, name: 'poster-hs' },
        { id: 10, name: 'conbon-u' }
      ]
    }
  },
  methods: {
    selectProduct (product) {
      this.selectedProduct = product
      // alert(`您選擇了${this.selectedProduct}`)
      localStorage.setItem('selectedProduct', JSON.stringify(product))
      this.$router.push('/drawing')
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
nav {
  position: fixed;
  top:0;
  max-width: 450px; /* 限制寬度不超過 450px */
  width: 100%;
  z-index: 2;
  padding: 10px 20px;
  align-items: center;
}
#app {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  padding:50px 0 0 0;
  outline: 1px solid #cf2c2f;
  color: #CF2C2F;
}

#app:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-image: url('../assets/images/background_texture.png');
  background-repeat: repeat;
  background-position: 50% 0;
  background-size: cover;
  pointer-events:none;
}
.home-button {
  display: block;
  color: #cf2c2f;
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid #cf2c2f;
  border-radius: 30px;
  margin-left: auto;
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

.logo_sm {
  width: 60%;
  display: block;
}
.sign-container{
  outline: #CF2C2F;
  & img:hover{
    opacity: 0%;
    cursor: pointer;
  }
}
.sign-conbon-c{
  background-color:red;
  opacity: 0%;
  & img{
    width:37%;
    margin-left:24%;
  }
}
.sign-conbon-v{
  background-color:red;
  opacity: 0%;
  & img{
    width: 29.5%;
    margin-left: 29%;
    margin-top: 3.5%;
  }
}

.sign-conbon-h{
  background-color:red;
  opacity: 0%;
  & img{
    width: 63%;
    margin-top: 6%;
  }
}
.sign-poster-vu{
  background-color:red;
  opacity: 0%;
  & img{
    width: 23%;
    margin-top: 28%;
    margin-left: 69%;
  }
}
.sign-poster-h{
  background-color:red;
  opacity: 0%;
  & img{
    width: 80%;
    margin-top: 45%;
    margin-left: 15%;
  }
}

.sign-poster-vs{
  background-color:red;
  opacity: 0%;
  & img{
    width: 92%;
    margin-top: 62%;
    margin-left: 6%;
  }
}
.sign-conbon-hl{
  background-color:red;
  opacity: 0%;
  & img{
    width: 80%;
    margin-top: 30%;
    margin-left: 10%;
  }
}
.sign-poster-v{
  background-color:red;
  opacity: 0%;
  & img{
    width: 55%;
    margin-top: 34%;
    margin-left: 27%;
  }
}
.sign-poster-hs{
  background-color:red;
  opacity: 0%;
  & img{
    width: 70%;
    margin-top: 42%;
    margin-left: 18%;
  }
}
.sign-conbon-u{
  background-color:red;
  opacity: 0%;
  & img{
    width: 43%;
    margin-top: 2.5%;
    margin-left: 28%;
  }
}
</style>
