<template>
  <div class="cart">
    <Header @bascet-show="handlerOverflow"/>
    <div class="cart-title h1">Корзина</div>
    <div class="cart-orders">
      <div class="cart-entry">
        <div class="cart-total">
          <div class="h2">Итог корзины</div>
          <div class="cart-total-items">
            <div class="cart-total-item cart-total-item-one h3">Товар</div>
            <div class="cart-total-item h3">Цена</div>
            <div class="cart-total-item h3">Количество</div>
            <div class="cart-total-item h3">Подытог</div>
          </div>
        </div>
        <div class="cart-sum">
          <div class="h2">Сумма заказов</div>
        </div>
      </div>
    </div>
    <!-- <Pizza/>
    <Sets/> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      setOverflow: 'auto'
    }
  },
  methods: {
    handlerOverflow(event){
      console.log(event)
    }
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background-color: rgb(247, 250, 252);
  /* overflow:  hidden; */
}
.cart-title {
  display: flex;
  background-color: #edf2f7 ;
  margin-top: 80px;
  height: 200px;
  align-items: center;
  justify-content: space-around;
}
.cart-orders {
  width: 1242px;
  box-shadow: 0px 15px 15px -10px rgb(0 0 0 / 5%);
  border-radius: 4px;
  margin: auto;
  margin-bottom: 80px;
  margin-top: 80px;
}
.cart-entry {
  display: flex;
  background-color: white;
  padding: 32px;
}
.cart-total-items {
  display:flex;
  position: relative;
  width: 782px;
  margin-right: 42px;
  border-bottom: 1px solid #cbd5e0;
  justify-content: flex-end;
}
.cart-total-item-one {
  position: absolute;
  left: 0;
}
.cart-total-item {
  padding: 9px 12px;
  width: 176px;
}
</style>
