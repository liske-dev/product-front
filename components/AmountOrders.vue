<template>
  <div class="amount">
    <div class="h2 amount-header">Сумма заказов</div>
    <div>
      <div class="h3 amount-item amount-item-one">
        <div class="amount-item-title">Подытог</div>
        <div class="amount-item-info">₽{{costAllOrders}}</div>
      </div>
      <div class="h3 amount-item">
        <div class="amount-item-title">Итого</div>
        <div class="amount-item-info">₽{{costAllOrders}}</div>
      </div>
      <button class="basket-drawer-ordering" @click="$nuxt.$router.replace({ path: '/checkout'})">Оформить заказ</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AmountOrders',
  computed: {
    ...mapGetters(['costAllOrders']),
  },
}
</script>
<style scoped>
.amount {
  width: 100%;
}
.amount-header {
  margin-bottom: 14px;
}
.amount-item {
  display: flex;
  padding: 9px 12px;
}
.amount-item-one {
  border-bottom: 1px solid #cbd5e0;
}
.amount-item-title {
  width: 50%;
}
.amount-item-info {
  width: 50%;
}
button {
  margin-top: 17px;
  width: 100%;
}
</style>