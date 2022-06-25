<template>
  <div class="product">
    <Header/>
    <div class="product-choice">
      <div class="product-preview">
        <img :src="'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-465x465.png'"/>
      </div>
      <div class="product-info">
        <div class="product-title">Барбекю</div>
        <div class="product-price">₽460.00</div>
        <div class="product-description">Ветчина. охотничьи колбаски, маринованный огурец. соус BBQ . томатный соус, сыр</div>
        <div class="product-bascet">
          <input class="product-bascet-quantity" v-model="quantity" type="number" min="1" step="1" max inputmode="numeric"/>
          <button class="product-bascet-button">В корзину</button>
        </div>
        <div class="product-article">Артикул: 712</div>
        <div class="product-category">Категория: Пицца</div>
      </div>
    </div>
    <div class="similar">
      <div class="similar-title">Похожие товары</div>
      <div class="similar-body">
        <div v-for="(item, index) in items" :key="index">
          <img :src="item.img"/>
          <div class="similar-name">{{item.name}}</div>
          <div class="similar-prise">{{item.prise}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      quantity: 1,
      items: [
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        }
      ]
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
.product-bascet-button {
  height: 42px;
  line-height: 40px;
  padding: 0 13px;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  background-color: #2b6cb0;
  border: 0;
}
.product-article {
  color: rgb(113, 128, 150);
  font-size: 11px;
  font-weight: 700;
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
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 14px;
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