export const state = () => ({
  orderList: []
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
      sum += Number(elem.prise.slice(1))
    }
    return sum
  }
}

export const mutations = {
  ADD_ORDER(state, order) {
    state.orderList.push(order)
  },
  DELETE_ORDER(state, idOrder) {
    state.orderList = state.orderList.filter(elem => elem.ID != idOrder)
  }
}

export const actions = {
  addOrder({ commit }, order) {
    commit('ADD_ORDER', order)
  },
  deleteOrder({ commit }, idOrder) {
    commit('DELETE_ORDER', idOrder)
  }
}