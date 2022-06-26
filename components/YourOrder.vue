<template>
  <div class="sum">
    <div class="sum-title">Ваш заказ</div>
    <div class="sum-total">
      <div class="sum-product">Товар</div>
      <div class="sum-subtotal">Подытог</div>
    </div>
    <div class="sum-total" v-for="(item, index) in orderList" :key="index">
      <div class="sum-info">{{item.name}} <span>× {{item.numberRepet}}</span></div>
      <div class="sum-info">₽{{item['base-price']}}</div>
    </div>
    <div class="sum-total">
      <div class="sum-product">Подытог</div>
      <div class="sum-subtotal">₽{{costAllOrders}}</div>
    </div>
    <div class="sum-total">
      <div class="sum-product">Итог</div>
      <div class="sum-subtotal">₽{{costAllOrders}}</div>
    </div>
    <div class="sum-subinfo">Оплата при доставке</div>
    <div class="sum-tinyinfo">Оплата наличными при доставке заказа</div>
    <div class="sum-order">
      <div class="sum-order-text">Ваши личные данные будут использоваться для обработки ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных в нашей политика конфиденциальности.</div>
      <button class="sum-order-button">Подвердить заказ</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'YourOrder',
  computed: {
    ...mapGetters(['orderList', 'costAllOrders']),
  },
}
</script>
<style scoped>
  .sum {
    width: 50%;
    padding-left:32px;
  }
  .sum-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
    color: rgb(26, 32, 44);
  }
  .sum-total {
    display: flex;
    border-bottom: 1px solid #cbd5e0;
  }
  .sum-product {
    width: 100%;
    padding: 9px 12px;
    color: rgb(45, 55, 72);
    font-size: 15px;
    font-weight: 700;
    color: #2D3748;
  }
  .sum-subtotal {
    width: 100%;
    padding: 9px 12px;
    color: rgb(45, 55, 72);
    font-size: 15px;
    font-weight: 700;
    color: #2D3748;
  }
  .sum-info{
    width: 100%;
    padding: 9px 12px;
    color: rgb(45, 55, 72);
    font-size: 15px;
    font-weight: 400;
    color: #2D3748;
  }
  .sum-subinfo {
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
  .sum-tinyinfo {
    margin: 15px 0;
    font-size: 15px;
    font-weight: 400;
    color: rgb(45, 55, 72);
  }
  .sum-order-text {
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
  span {
    font-weight: 700;
  }
</style>