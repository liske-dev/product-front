<template>
  <div class="main">
    <Header @bascet-show="handlerOverflow"/>
    <Pizza/>
    <Sets/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: #f7fafc ;
  height: 100vh;
  margin: 0;
  /* overflow:  hidden; */
}
</style>
