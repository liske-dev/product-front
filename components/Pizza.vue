<template>
  <div class="pizza" id="pizza">
    <div class="pizza-title h1">Пицца</div>
    <div class="pizza-body">
      <div class="pizza-items" v-for="(item, index) in items" :key="index">
        <img :src="item.img"/>
        <div class="pizza-info">
          <div class="pizza-name">{{item.name}}</div>
          <div class="pizza-prise">{{item.prise}}</div>
          <div class="pizza-bascet" @click="addOrder(item)">В корзину</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Pizza',
  data(){
    return {
      items: [
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/bolgarskaya_optimized-300x300.png',
          name: 'Ассорти',
          prise: '₽510.00'
        },
      ]
    }
  },
  methods: {
    addOrder(order) {
      this.$store.dispatch('addOrder', order)
    }
  }
}
</script>
<style scoped>
.pizza {
  max-width: 1290px;
  background-color: white;
  margin: auto;
  margin-top: 160px;
  border-radius: 4px;
  padding: 32px;
}
.pizza-title {
  margin-bottom: 20px;
  text-align: center;
}
.pizza-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pizza-items {
  flex: 1 -1;
  padding-top: 18px;
  margin: auto;
  cursor: pointer;
  box-shadow: 0 15px 15px -10px rgb(0 0 0 / 5%);
}

.pizza-info {
  padding: 16px;
}

.pizza-name {
  padding-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
}

.pizza-prise {
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 400;
  color: rgb(45, 55, 72);
}

.pizza-bascet {
  font-size: 12px;
  font-weight: 700;
}
</style>