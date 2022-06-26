<template>
  <div class="product">
    <Header/>
    <div class="product-choice">
      <div class="product-preview">
        <img class="product-preview-img" :src="selectedProduct.images"/>
      </div>
      <div class="product-info">
        <div class="product-title">{{selectedProduct.name}}</div>
        <div class="product-price">₽{{selectedProduct['base-price']}}</div>
        <div class="product-description">{{selectedProduct['short-description']}}</div>
        <div class="product-bascet">
          <input class="product-bascet-quantity" v-model="quantity" type="number" min="1" step="1" max inputmode="numeric"/>
          <button class="product-bascet-button" @click="addOrders(selectedProduct)">В корзину</button>
        </div>
        <div class="product-article">Артикул: {{selectedProduct.articul}}</div>
        <div class="product-category">Категория: {{selectedProduct.categories}}</div>
      </div>
    </div>
    <div class="similar">
      <div class="similar-title h2">Похожие товары</div>
      <div class="similar-body">
        <div v-for="(item, index) in similarProducts" :key="index">
          <img class="similar-img" :src="item.images"/>
          <div class="similar-name">{{item.name}}</div>
          <div class="similar-prise">₽{{item['base-price']}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexProduct',
  computed: {
    ...mapGetters(['selectedProduct', 'similarProducts']),
    },
  data(){
    return {
      quantity: 1,
    }
  },
  // deactivated() {
  //   console.log('!')
  //   this.$store.dispatch('deleteSelectProducts')
  // },
  methods: {
    addOrders(orders){
      this.$store.dispatch('addOrders', Array(Number(this.quantity)).fill(orders))
    }
  }
}
</script>
<style scoped>
.product{
  max-width: 1290px;
  background-color: white;
  margin: auto;
  margin-top: 160px;
  border-radius: 4px;
  padding: 32px;
}
.product-choice {
  display: flex;
}
.product-choice{
  margin-left: 24px;
  margin-right: 24px;
}
.product-preview {
  width: 50%;
  margin:auto;
}
.product-preview-img {
  width: 465px;
  height: 465px;
}
.product-info {
  margin-top: 17px;
  width: 50%;
}
.product-title {
  font-size: 32px;
  font-weight: 700;
}
.product-price {
  font-size: 21px;
  font-weight: 400;
  margin-top: 22px;
  margin-bottom: 22px;
}
.product-description {
  font-size: 17px;
  font-weight: 400;
  margin-top: 17px;
  margin-bottom: 17px;
}
.product-bascet {
  margin-bottom: 34px;
}
.product-bascet-quantity {
  font-weight: 400;
  font-size: 17px;
  line-height: 1.6;
  border: 1px solid #CBD5E0;
  border-radius: 3px;
  font-weight: 400;
  font-size: 17px;
  color: rgb(74, 85, 104);
  height: 40px;
  width: 35px;
  padding-left: 15px;
  padding-right: 10px;
}
.product-bascet-quantity:focus {
  border-color: #718096;
  outline: none;
}
.product-category {
  color: rgb(113, 128, 150);
  font-size: 11px;
  font-weight: 700;
}
.similar-body {
  margin-top: 17px;
}
.similar-body {
  display: flex;
}
.similar-title {
  margin-bottom: 14px;
}
.similar-img {
  width: 300px;
  height: 300px;
}
.similar-name {
  margin-top:16px;
  margin-left:16px;
  margin-bottom:16px;
  font-size: 17px;
  font-weight: 500;
}
.similar-prise {
  margin-left:16px;
  font-size: 14.569px;
  font-weight: 400;
  color: rgb(45, 55, 72);
}
</style>