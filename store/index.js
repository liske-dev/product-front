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
  ADD_ORDER(state, payload) {
    state.orderList.push(payload)
  }
}

export const actions = {
  addOrder({ commit }, payload) {
    commit('ADD_ORDER', payload)
  }
}