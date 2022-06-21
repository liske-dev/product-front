export const state = () => ({
  orderList: []
})

export const getters = {
  numberOfOrders: state => {
    return state.orderList.length === 0
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