<template>
  <div>
    <div class="h2">Итог корзины</div>
    <div class="cart-total-items">
    <div class="cart-total-item">
      <div class="cart-total-item-product cart-total-item-one h3">Товар</div>
      <div class="cart-total-item-product h3">Цена</div>
      <div class="cart-total-item-product h3">Количество</div>
      <div class="cart-total-item-product h3">Подытог</div>
    </div>
    <div class="cart-total-item" v-for="(item, index) in orderList" :key="index"> 
      <div class="cart-total-item-delete">
        <img class="cart-total-item-delete-img" src="@/assets/svg/closed.svg" width="12" height="12" alt="bascet"  @click="handlerDeleteOrder(item.id)"/>
      </div>
      <div class="cart-total-item-product">
        <img class="cart-total-img" :src="item.images"/>
      </div>
      <div class="cart-total-item-product">{{item.name}}</div>
      <div class="cart-total-item-product">{{item.numberRepet}}</div>
      <div class="cart-total-item-product">{{item.numberRepet * item['base-price']}}</div>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Orderlist',
  computed: {
    ...mapGetters(['orderList']),
  },
  data() {
    return {
      setOverflow: 'auto'
    }
  },
  methods: {
    handlerOverflow(event){
      console.log(event)
    },
    handlerDeleteOrder(id) {
      this.$store.dispatch('deleteOrder', id)
    }
  }
}
</script>
<style scoped>
  .cart-total-item {
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
  .cart-total-item-delete {
    display: flex;
    align-items: center;
  }
  .cart-total-item-delete-img {
    cursor: pointer;
  }
  .cart-total-item-product {
    padding: 9px 12px;
    width: 176px;
  }
  .cart-total-img {
    width: 50px;
    height: 50px;
  }
</style>