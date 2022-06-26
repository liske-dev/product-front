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
        <div class="checkout-payment">
          <div class="checkout-payment-title h2">Детали оплаты</div>
          <form class="checkout-payment-form">
            <div class="checkout-payment-full-name">
              <div class="checkout-payment-full-container">
                <label for="html">Имя</label>
                <input class="checkout-payment-name" />
              </div>
              <div class="checkout-payment-full-container">
                <label for="html">Фамилия</label>
                <input class="checkout-payment-lastname" />
              </div>
            </div>
            <label for="html">Страна/регион</label>
            <input class="checkout-payment-country" />
            <label for="html">Адресс</label>
            <div class="checkout-payment-address">
              <input class="checkout-payment-house" />
              <input class="checkout-payment-house-extra" />
            </div>
            <label for="html">Населённый пункт</label>
            <input class="checkout-payment-house-locality" />
            <label for="html">Область/район</label>
            <input class="checkout-payment-house-region" />
            <label for="html">Телефон</label>
            <input class="checkout-payment-house-phone" />
            <div class="checkout-payment-extra">
              <div class="checkout-payment-extra-title">Детали</div>
              <label for="html">Примечание к заказу (необязательно)</label>
              <textarea name=""></textarea>
            </div>
          </form>
        </div>
        <div class="checkout-sum">
          <div class="checkout-sum-title">Ваш заказ</div>
          <div class="checkout-sum-total">
            <div class="checkout-sum-product">Товар</div>
            <div class="checkout-sum-subtotal">Подытог</div>
          </div>
          <div class="checkout-sum-total" v-for="(item, index) in countOfOrders" :key="index">
            <div class="checkout-sum-info">{{item.name}}</div>
            <div class="checkout-sum-info">{{item.prise}}</div>
          </div>
          <div class="checkout-sum-total">
            <div class="checkout-sum-product">Подытог</div>
            <div class="checkout-sum-subtotal">{{countOfOrders}}</div>
          </div>
          <div class="checkout-sum-total">
            <div class="checkout-sum-product">Итог</div>
            <div class="checkout-sum-subtotal">{{countOfOrders}}</div>
          </div>
          <div class="checkout-sum-subinfo">Оплата при доставке</div>
          <div class="checkout-sum-tinyinfo">Оплата наличными при доставке заказа</div>
          <div class="checkout-sum-order">
            <div class="checkout-sum-order-text">Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей политика конфиденциальности.</div>
            <button class="checkout-sum-order-button">Подвердить заказ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['countOfOrders', 'countOfOrders']),
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
<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background-color: rgb(247, 250, 252);
  /* overflow:  hidden; */
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
.checkout-payment {
  width: 50%;
  padding-right:32px;
}
.checkout-sum {
  width: 50%;
  padding-left:32px;
}
.checkout-payment-title {
  margin-bottom: 12px;
}
.checkout-sum-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: rgb(26, 32, 44);
}
.checkout-payment-form {
  display:flex;
  flex-direction: column;
}
input {
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  height: 22px;
}

input:focus {
  color: #1A202C;
  border-color: #718096;
  box-shadow: 0px 5px 15px -7px rgb(0 0 0 / 10%);
}

.checkout-payment-extra {
  display: flex;
  flex-direction: column;
}
.checkout-payment-extra-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: rgb(26, 32, 44);
}
.checkout-payment-full-name {
  display: flex;
  justify-content: space-between;
}
.checkout-payment-full-container{
  width: 248px;
}
.checkout-payment-name {
  width: 228px;
}
.checkout-payment-lastname {
  width: 228px;
}
.checkout-payment-address {
  display: flex;
  flex-direction: column;
}
textarea {
  padding: 8px;
  height: 108px;
  width: calc(100%-16px);
  resize: none;
  color: #1A202C;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
}
textarea:focus {
  color: #1A202C;
  border-color: #718096;
  box-shadow: 0px 5px 15px -7px rgb(0 0 0 / 10%);
}
.checkout-sum-total {
  display: flex;
  border-bottom: 1px solid #cbd5e0;
}
.checkout-sum-product {
  width: 100%;
  padding: 9px 12px;
  color: rgb(45, 55, 72);
  font-size: 15px;
  font-weight: 700;
  color: #2D3748;
}
.checkout-sum-subtotal {
  width: 100%;
  padding: 9px 12px;
  color: rgb(45, 55, 72);
  font-size: 15px;
  font-weight: 700;
  color: #2D3748;
}
.checkout-sum-info{
  width: 100%;
  padding: 9px 12px;
  color: rgb(45, 55, 72);
  font-size: 15px;
  font-weight: 400;
  color: #2D3748;
}
.checkout-sum-subinfo {
  border-radius: 4px;
  background-color: #EDF2F7;
  padding: 8px 15px;
  height: 34px;
  color:rgb(45, 55, 72);
  font-size: 17px;
  font-weight: 700;
  line-height: 34px;
  margin-top: 22px;
}
.checkout-sum-tinyinfo {
  margin: 15px 0;
  font-size: 15px;
  font-weight: 400;
  color: rgb(45, 55, 72);
}
.checkout-sum-order-text {
  margin-top: 32px;
  font-size: 17px;
  font-weight: 400;
  color: rgb(45, 55, 72);
}
a {
  color: #2B6CB0;
  cursor: pointer;
  transition: all .1s linear;
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
