<template>
  <div class="sets" id="sets">
    <div class="sets-title h1">Сеты</div>
    <div class="sets-body">
      <div class="sets-items" v-for="(item, index) in items" :key="index">
        <img :src="item.img"/>
        <div class="sets-info">
          <div class="sets-name">{{item.name}}</div>
          <div class="sets-prise">{{item.prise}}</div>
          <div class="sets-bascet">В корзину</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Sets',
  data(){
    return {
      items: [
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
        {
          img: 'https://susi.pizza/wp-content/uploads/2022/05/to-chto-nado-scaled-1-300x300.jpg',
          name: 'Ассорти',
          prise: '₽510.00'
        },
      ]
    }
  }
}
</script>
<style scoped>
.sets {
  max-width: 1290px;
  background-color: white;
  margin: auto;
  border-radius: 4px;
  padding: 32px;
}
.sets-title {
  margin-bottom: 20px;
  text-align: center;
}
.sets-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.sets-items {
  flex: 1 -1;
  padding-top: 18px;
  margin: auto;
  cursor: pointer;
  box-shadow: 0 15px 15px -10px rgb(0 0 0 / 5%);
}

.sets-info {
  padding: 16px;
}

.sets-name {
  padding-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
}

.sets-prise {
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 400;
}

.sets-bascet {
  font-size: 12px;
  font-weight: 700;
}
</style>