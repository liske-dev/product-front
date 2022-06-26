<template>
  <div class="checkout">
    <Header @bascet-show="handlerOverflow"/>
    <div class="checkout-title">Оформление заказа</div>
    <div class="checkout-orders">
      <div class="checkout-orders-coupon-container">
        <div class="checkout-orders-coupon">
          Есть купон?<a @click="cupon=true"> Нажмите, чтобы ввести код</a>
        </div>
        <div class="checkout-orders-coupon-body" v-if="cupon">
          <div class="checkout-orders-coupon-title">
            Если у вас есть код купона, укажите его ниже.
          </div>
          <div class="checkout-orders-coupon-input">
            <input class="checkout-orders-coupon-inner"/>
            <button class="checkout-orders-coupon-button">Применить купон</button>
          </div>
        </div>
      </div>
      <div class="checkout-entry">
        <Payment />
        <YourOrder />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexChekout',
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
</style>
