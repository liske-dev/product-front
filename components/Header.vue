<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo">Суши Пицца</div>
      <div class="header-menu">
        <button class="header-items"><a class="header-href" href="#pizza">Пицца</a></button>
        <button class="header-items"><a class="header-href" href="#sets">Сеты</a></button>
        <button class="header-items">Роллы</button>
        <button class="header-items">Темпура</button>
        <button class="header-items">Запечёные</button>
        <button class="header-items">Фри</button>
        <button class="header-items">Напитки</button>
        <button class="header-items header-bascet" @click="handlerBascetShow">
          Ваш заказ 
          <img class="header-bascet-logo" src="@/assets/svg/bascet.svg" width="19" height="19" alt="bascet" />
          <div class="header-bascet-orders">{{countOfOrders}}</div>
        </button>
      </div>
    </div>
    <BasketDrawer v-show="bascetShow" @closed-basket-drawer="handlerClosedBasketDrawer"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['countOfOrders']),
    },
  data(){
    return {
      bascetShow: false
    }
  },
  methods: {
    handlerBascetShow () {
      this.bascetShow=true
      this.$emit('bascet-show', 'hidden')
    },
    handlerClosedBasketDrawer() {
      this.bascetShow=false
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background-color: white;
}
.header-container {
  display: flex;
  max-width: 1290px;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  background-color: white;
  height: 80px;
}
.header-logo {
  font-size: 26px;
  font-weight: 700;
}
.header-menu {
  display: flex;
}
.header-items {
  padding: 10px;
  font-size: 16px;
  color: #4A5568;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
}
.header-href {
  text-decoration: none;
  color: #4A5568;
}
.header-bascet {
  position: relative;
  padding-right: 45px;
}
.header-bascet-logo {
  position: absolute;
  top: 10px;
  right: 22px;
}
.header-bascet-orders {
  position: absolute;
  font-size: 10px;
  line-height: 21px;
  font-weight: 400;
  top: 10px;
  right: 0;
  border-radius: 50%;
  background-color:#EDF2F7;
  width: 21px;
  height: 21px;
}
</style>
