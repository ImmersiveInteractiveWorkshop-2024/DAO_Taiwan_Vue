<template>
  <h1>模型選擇頁面</h1>
  <div class="d-flex">
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
  </div>
    <p v-if="selectedProduct">您選擇的物件是：{{ selectedProduct}}</p>
  <button class="btn btn-primary" @click="goToDrawingPage">確認選擇物件</button>
</template>

<script>
export default {
  data () {
    return {
      selectedProduct: null,
      products: [
        { id: 1, name: '物件A', description: '物件A的描述', image: '/src/assets/images/sign-1.jpg' },
        { id: 2, name: '物件B', description: '物件B的描述', image: '/src/assets/images/sign-2.jpg' },
        { id: 3, name: '物件C', description: '物件C的描述', image: '/src/assets/images/sign-3.jpg' },
        { id: 3, name: '物件D', description: '物件C的描述', image: '/src/assets/images/sign-4.jpg' },
        { id: 3, name: '物件E', description: '物件C的描述', image: '/src/assets/images/sign-5.jpg' }
      ]
    }
  },
  methods: {
    selectProduct (product) {
      this.selectedProduct = product.name
      localStorage.setItem('selectedProduct', JSON.stringify(product))
      alert(`您選擇了${this.selectedProduct}`)
    },
    goToDrawingPage () {
      this.$router.push({ name: '繪製貼圖' })
    }
  }
}
</script>
