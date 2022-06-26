<template>
  <div class="main">
    <Header @bascet-show="handlerOverflow"/>
    <div class="main-body">
      <div class="main-item" v-for="(item, index) in prodicts" :key="index">
        <div class="h1 main-header" :id="item.type">{{item.title}}</div>
          <Products :typeProduct="item.type"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      setOverflow: 'auto',
      prodicts: [
        {title:'Пицца', type:'pizza'},
        {title:'Сеты', type:'sets'},
        {title:'Роллы', type:'rolls'},
        {title:'Роллы темпура', type:'tempuraRolls'},
        {title:'Запеченые роллы', type:'bakedRolls'},
        {title:'Закуски фри', type:'french'},
        {title:'Напитки', type:'beverages'}
      ]
    }
  },
  methods: {
    handlerOverflow(event){
      console.log(event)
    }
  }
}
</script>
<style>
.main-body {
    max-width: 1290px;
  background-color: white;
  margin: auto;
  margin-top: 160px;
  border-radius: 4px;
  padding: 32px;
} 
.main-item {
  margin-bottom: 42px;
}
.main-header {
  text-align: center;
}
</style>
