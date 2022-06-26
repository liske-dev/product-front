<template>
  <div class="payment">
    <div class="payment-title h2">Детали оплаты</div>
    <form class="payment-form">
      <div class="payment-full-name">
        <div class="payment-full-container">
          <label for="html">Имя</label>
          <input class="payment-name" />
        </div>
        <div class="payment-full-container">
          <label for="html">Фамилия</label>
          <input class="payment-lastname" />
        </div>
      </div>
      <label for="html">Страна/регион</label>
      <input class="payment-country" />
      <label for="html">Адресс</label>
      <div class="payment-address">
        <input class="payment-house" />
        <input class="payment-house-extra" />
      </div>
      <label for="html">Населённый пункт</label>
      <input class="payment-house-locality" />
      <label for="html">Область/район</label>
      <input class="payment-house-region" />
      <label for="html">Телефон</label>
      <input class="payment-house-phone" />
      <div class="payment-extra">
        <div class="payment-extra-title">Детали</div>
        <label for="html">Примечание к заказу (необязательно)</label>
        <textarea name=""></textarea>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Payment",
  
}
</script>
<style scoped>
.payment {
  width: 50%;
  padding-right:32px;
}
.payment-title {
  margin-bottom: 12px;
}
.payment-form {
  display:flex;
  flex-direction: column;
}
input {
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
  height: 22px;
}

input:focus {
  color: #1A202C;
  border-color: #718096;
  box-shadow: 0px 5px 15px -7px rgb(0 0 0 / 10%);
}

.payment-extra {
  display: flex;
  flex-direction: column;
}
.payment-extra-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: rgb(26, 32, 44);
}
.payment-full-name {
  display: flex;
  justify-content: space-between;
}
.payment-full-container{
  width: 248px;
}
.payment-name {
  width: 228px;
}
.payment-lastname {
  width: 228px;
}
.payment-address {
  display: flex;
  flex-direction: column;
}
textarea {
  padding: 8px;
  height: 108px;
  width: calc(100%-16px);
  resize: none;
  color: #1A202C;
  border: 1px solid #CBD5E0;
  border-radius: 4px;
}
textarea:focus {
  color: #1A202C;
  border-color: #718096;
  box-shadow: 0px 5px 15px -7px rgb(0 0 0 / 10%);
}
</style>