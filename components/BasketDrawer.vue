<template>
  <div class="basket-drawer">
    <div class="basket-drawer-menu">
      <bottom class="basket-drawer-closed" @click="handlerClosed">Closed</bottom>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BasketDrawer',
  methods: {
    handlerClosed() {
      this.$emit('closed-basket-drawer')
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
.basket-drawer-menu {
  position: fixed;
  width: 400px;
  background-color:white;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(0);
}

.basket-drawer-closed {
  cursor: pointer;
}
</style>