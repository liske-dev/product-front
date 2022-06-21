<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo">Суши Пицца</div>
      <div class="header-menu">
        <button class="header-items">Пицца</button>
        <button class="header-items">Сеты</button>
        <button class="header-items">Роллы</button>
        <button class="header-items">Темпура</button>
        <button class="header-items">Запечёные</button>
        <button class="header-items">Фри</button>
        <button class="header-items">Напитки</button>
        <button class="header-items header-bascet">
          Ваш заказ 
          <img class="header-bascet-logo" src="@/assets/svg/bascet.svg" width="19" height="19" alt="bascet" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
}

.header-bascet {
  position: relative;
  padding-right: 29px;
}

.header-bascet-logo {
  position: absolute;
  top: 10;
  right: 0;
}
</style>
