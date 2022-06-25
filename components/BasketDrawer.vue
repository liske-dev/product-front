<template>
  <div class="basket-drawer">
    <div class="basket-drawer-layout" @click="handlerClosed"></div>
    <div class="basket-drawer-menu">
      <div class="basket-drawer-header">
        <div class="basket-drawer-title">Обзор корзины</div>
        <button class="basket-drawer-closed" @click="handlerClosed">
          <img src="@/assets/svg/closed.svg" width="19" height="19" alt="bascet" />
        </button>
      </div>
      <div class="basket-drawer-info">
        <div class="basket-drawer-null" v-if="countOfOrders==0">Корзина пуста</div>
        <div class="basket-drawer-full" v-else>
          <div class="basket-drawer-items" v-for="(item, index) in orderList" :key="index">
            <img class="basket-drawer-info-img" :src="item.img"  width="50" height="50"/>
            <div class="basket-drawer-info-item">
              <div class="basket-drawer-info-name">{{item.name}}</div>
              <div class="basket-drawer-info-prise">{{item.prise}}</div>
            </div>
            <button class="basket-drawer-info-closed" @click="handlerDeleteOrder(item.ID)">
              <img src="@/assets/svg/closed.svg" width="12" height="12" alt="bascet" />
            </button>
          </div>
          <div class="basket-drawer-total">
            <div class="basket-drawer-total-title">Подытог:</div>
            <div class="basket-drawer-total-sum">₽{{costAllOrders}}</div>
          </div>
          <div class="basket-drawer-order">
            <button class="basket-drawer-review" @click="$nuxt.$router.replace({ path: '/checkout'})">Просмотр корзины</button>
            <button class="basket-drawer-ordering" @click="$nuxt.$router.replace({ path: '/cart'})">Оформление заказа</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BasketDrawer',
  computed: {
    ...mapGetters(['countOfOrders', 'orderList', 'costAllOrders']),
    },
  methods: {
    handlerClosed() {
      this.$emit('closed-basket-drawer')
    },
    handlerDeleteOrder(id) {
      this.$store.dispatch('deleteOrder', id)
    }
  }
}
</script>
<style scoped>
.basket-drawer {
  background-color: rgba(0,0,0,.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.basket-drawer-layout {
  width: 100%;
  height: 100%;
}
.basket-drawer-menu {
  position: fixed;
  width: 400px;
  background-color:white;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(0);
}
.basket-drawer-header {
  position: relative;
  width: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
}
.basket-drawer-title {
  font-size: 17px;
  font-weight: 700;
  color: rgb(26, 32, 44);
}
.basket-drawer-closed {
  position: absolute;
  top:25px;
  right: 50px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
.basket-drawer-info {
  padding: 25px;
}
.basket-drawer-null {
  font-size: 17px;
  font-weight: 400;
  color: #2D3748;
}
/* .basket-drawer-full {
  display: flex;
} */
.basket-drawer-info-img {
  margin-right: 8px;
}
.basket-drawer-items {
  position: relative;
  display: flex; 
  padding-bottom: 4px;
  margin-bottom: 4px;
  border-bottom: 1px solid #EDF2F7;
}
.basket-drawer-info-item {
  display: flex; 
  flex-direction: column;
  justify-content: space-around;
}
.basket-drawer-info-name {
  font-size: 15px;
  font-weight: 700;
}
.basket-drawer-info-prise {
  font-size: 11px;
  font-weight: 400;
  color: #718096;
}
.basket-drawer-info-closed {
  position: absolute;
  top:5px;
  right:0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
.basket-drawer-total {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 17px;
}
.basket-drawer-total-title {
  font-size: 17px;
  font-weight: 700;
  color: rgb(45, 55, 72);
}
.basket-drawer-total-sum {
  font-size: 17px;
  font-weight: 400;
  color: rgb(45, 55, 72);
}
.basket-drawer-order {
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  margin-bottom: 17px;
}
.basket-drawer-review {
  padding: 6px;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 400;
  border: 0;
  background-color: white;
  color:#2D3748;
  border-radius: 4px;
  height: 40px;
  cursor: pointer;
}
.basket-drawer-review:hover {
  color: #0693e3;
}
.basket-drawer-ordering {
  padding: 6px;
  font-size: 17px;
  font-weight: 400;
  border: 0;
  background-color: #2B6CB0;
  border-radius: 4px;
  color: white;
  height: 40px;
  cursor: pointer;
}
.basket-drawer-ordering:hover {
  background-color: #215387;
  cursor: pointer;
}
</style>