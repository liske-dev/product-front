<template>
  <div class="checkout">
    <Header @bascet-show="handlerOverflow"/>
    <div class="checkout-title">Оформление заказа</div>
    <div>
      <div class="checkout-orders">
        <div class="checkout-orders-coupon">
          Оформление заказа не доступно, пока ваша корзина пуста.
        </div>
        <div class="checkout-orders-body">
          <div class="checkout-orders-title h1-grey">Ваша корзина пока пуста</div>
          <button class="product-bascet-button" @click="$nuxt.$router.replace({ path: '/'})">Вернуться в магазин</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexChekout',
  computed: {
    ...mapGetters(['costAllOrders']),
  },
  data() {
    return {
      cupon: false,
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
<style scoped>
.checkout{
  padding-bottom: 80px;
}
.checkout-title {
  display: flex;
  background-color: #edf2f7 ;
  margin-top: 80px;
  height: 200px;
  font-weight: 700;
  font-size: 32px;
  align-items: center;
  justify-content: space-around;
  color: rgb(26, 32, 44);
}

.checkout-orders {
  max-width: 1242px;
  background-color: white;
  padding: 32px;
  box-shadow: 0px 15px 15px -10px rgb(0 0 0 / 5%);
  border-radius: 4px;
  margin: auto;
  margin-bottom: 80px;
  margin-top: 80px;
}
.checkout-orders-coupon {
  padding: 21px 34px;
  margin-bottom: 32px;
  border-left: 5px solid #2B6CB0;
  font-size: 17px;
  font-weight: 400;
  color:rgb(45, 55, 72);
  background-color: rgb(237, 242, 247);
}

.checkout-entry {
  display: flex;
  background-color: white;
}
.checkout-orders-coupon-body {
  padding: 20px;
  margin-bottom: 34px;
  border: 1px solid #b7cde1;
  border-radius: 5px;
}
.checkout-orders-coupon-title {
  margin-bottom: 32px;
  font-size: 17px;
  font-weight: 400;
  color: rgb(45, 55, 72);
}
.checkout-orders-coupon-input {
  display: flex;
}
.checkout-orders-coupon-inner {
  width: 550px;
  margin-right: 64px;
}
.checkout-orders-body {
  text-align: center;
}
.checkout-orders-title {
  margin-top: 80px;
  margin-bottom: 24px;
}
</style>
