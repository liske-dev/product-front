<template>
  <div class="cart">
    <Header @bascet-show="handlerOverflow"/>
    <div class="cart-title">Корзина</div>
    <div class="cart-orders">
      <div class="cart-entry">
        <div class="cart-total">
          <div class="cart-total-title">Итог корзины</div>
        </div>
        <div class="cart-sum">
          <div class="cart-sum-title">Сумма заказов</div>
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
  font-weight: 700;
  font-size: 32px;
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
.cart-total-title {
  font-size: 28px;
  font-weight: 700;
}
.cart-sum-title {
  font-size: 28px;
  font-weight: 700;
}
</style>
