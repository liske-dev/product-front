export const state = () => ({
  orderList: [],
  similarProducts: [],
  selectedProduct: {}
})

export const getters = {
  countOfOrders: state => {
    return state.orderList.length
  },
  orderList: state => {
    const numberRepet = state.orderList.reduce((acc, item) => {
      acc[item.id] = acc[item.id] ? acc[item.id] + 1 : 1
      return acc;
    }, {})
    const passId = []
    const arrRepet = state.orderList.map(item=>{
      if(Object.keys(numberRepet).includes(item.id) && !passId.includes(item.id)) {
        passId.push(item.id)
        item.numberRepet = numberRepet[item.id]
        return item
      }
    })
    const result = arrRepet.filter(item=> item!==undefined)
    console.log(result)
    return result
  },
  costAllOrders: state => {
    let sum = 0
    for(const elem of state.orderList){
      sum += Number(elem['base-price'])
    }
    return sum
  },
  selectedProduct: state => {
    return state.selectedProduct
  },
  similarProducts: state => {
    return state.similarProducts
  }
}

export const mutations = {
  ADD_ORDER(state, order) {
    state.orderList.push(order)
  },
  ADD_ORDERS(state, orders) {
    state.orderList.push(...orders)
  },
  DELETE_ORDER(state, idOrder) {
    state.orderList = state.orderList.filter(elem => elem.id != idOrder)
  },
  ADD_SELECT_PRODUCT(state, selectProduct) {
    state.selectedProduct = selectProduct
  },
  ADD_SIMILAR_PRODUCTS(state, similiarProduct) {
    state.similarProducts = similiarProduct
  },
  DELETE_SELECT_PRODUCT(state) {
    state.selectedProduct = {}
    console.log('delete selectedProduct')
  },
  DELETE_SIMILAR_PRODUCTS(state) {
    state.similarProducts = {}
    console.log('delete similarProducts')
  }
}

export const actions = {
  addOrder({ commit }, order) {
    commit('ADD_ORDER', order)
  },
  addOrders({commit}, orders){
    commit('ADD_ORDERS', orders)
  },
  deleteOrder({ commit }, idOrder) {
    commit('DELETE_ORDER', idOrder)
  },
  addSelectProduct({ commit }, selectProduct) {
    commit('ADD_SELECT_PRODUCT', selectProduct)
  },
  addSimilarProduct({ commit }, similiarProducts) {
    commit('ADD_SIMILAR_PRODUCTS', similiarProducts)
  },
  deleteSelectProducts({ commit }) {
    commit('DELETE_SELECT_PRODUCT')
    commit('DELETE_SIMILAR_PRODUCTS')
  }
}