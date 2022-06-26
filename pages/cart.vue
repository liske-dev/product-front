<template>
  <div class="cart">
    <Header @bascet-show="handlerOverflow"/>
    <div class="cart-title h1">Корзина</div>
    <div class="cart-orders">
      <div class="cart-entry">
        <Orderlist />
        <AmountOrders />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexCart',
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
    }
  }
}
</script>
<style scoped>
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
</style>
