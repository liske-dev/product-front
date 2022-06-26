<template>
  <div class="product">
    <div class="product-body">
      <div class="product-items" v-for="(item, index) in items" :key="index">
        <img
          :src="item.images"
          @click="redirectProduct(item)"
        />
        <div class="product-info">
          <div class="product-name">{{ item.name }}</div>
          <div class="product-prise">₽{{ item['base-price'] }}</div>
          <div class="product-bascet" @click="addOrder(item)">В корзину</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",
  props: {
    typeProduct: {
      required: true,
      type: String,
    }
  },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    let httpRequest = false
    if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest()
      if (httpRequest.overrideMimeType) {
        httpRequest.overrideMimeType("text/xml")
      }
    } else if (window.ActiveXObject) {
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP")
      } catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
      }
    }
    if (!httpRequest) {
      alert("Не вышло :( Невозможно создать экземпляр класса XMLHTTP ")
      return false;
    }
    httpRequest.onreadystatechange =  () => {
      this.processingRequest(httpRequest)
    };
    httpRequest.open("GET", `/${this.typeProduct}.csv`, false)
    httpRequest.send(null)
  },
  methods: {
    redirectProduct(selectProduct){
      this.$store.dispatch('addSelectProduct', selectProduct)
      this.$store.dispatch('addSimilarProduct', this.getRandomArrayElement(this.items, 4))
      this.$nuxt.$router.replace({ path: '/product' })
    },
    getRandomArrayElement(arr, numberElem){
      const result = []
      for (let i = 0; i< numberElem; i++ ){
        result.push(arr[Math.floor(Math.random()*arr.length)])
      }
      return result
    },
    processingRequest(httpRequest) {
      if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
          this.items = this.csvToArray(httpRequest.responseText)
        } else {
          console.log("request csv error")
        }
      }
    },
    csvToArray(str, delimiter = ",") {
      const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
      const rows = str.slice(str.indexOf("\n") + 1).split("\n");
      const arr = rows.map(function (row) {
        let flag = true
        let sumElem = ''
        let values = []
        for (const elem of row) {
          switch (elem) {
            case '"':
              flag = !flag
              break
            case delimiter:
              if(flag) {
                values.push(sumElem)
                sumElem = ''
              } else {
                sumElem += elem
              }
              break
            default:
              sumElem += elem
              break
          }
        }
        const el = headers.reduce(function (object, header, index) {
          object[header] = values[index];
          return object;
        }, {});
        return el;
      });
      return arr;
    },
    addOrder(order) {
      this.$store.dispatch('addOrder', order)
    },
  },
};
</script>
<style scoped>
.product-title {
  margin-bottom: 20px;
  text-align: center;
}
.product-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-items {
  flex: 1 -1;
  padding-top: 18px;
  margin: auto;
  cursor: pointer;
  box-shadow: 0 15px 15px -10px rgb(0 0 0 / 5%);
}
img {
  height: 300px;
  width: 300px;
}

.product-info {
  padding: 16px;
}

.product-name {
  padding-top: 8px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
}

.product-prise {
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 400;
  color: rgb(45, 55, 72);
}

.product-bascet {
  font-size: 12px;
  font-weight: 700;
}
</style>