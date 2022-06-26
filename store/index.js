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
    return state.orderList
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