<template>
  <div class='error'>
    <h1 class='error-title link' v-if='error.statusCode === 404'>Страница не найдена</h1>
    <h1 class='error-title link' v-else>Произошла ошибка</h1>
    <NuxtLink class='error-link link' to='/'>Кликни для возврата на главную страницу</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7fafc ;
  height: 100vh;
}
.error-title{
  background-color: white;
  padding: 1rem;
  margin: 1rem;
}
.error-link{
  background-color: white;
  padding: 1rem;
  margin: 1rem;
}
.link {
  text-decoration: none;
  color:#718096;
  font-size: 30px;
}
</style>