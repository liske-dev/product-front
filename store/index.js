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
    return state.orderList.reduce(elem =>(4 + Number(elem.prise.slice(1)))
    )
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