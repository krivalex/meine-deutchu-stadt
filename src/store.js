import { createStore } from 'vuex'

const store = createStore({
  state: {
    cards: [
      {
        id: 1,
        number: 1,
        title: 'Роща баума',
        image: require('@/assets/cards/1.png'),
      },
      {
        id: 2,
        number: 2,
        title: 'Дом баума',
        image: require('@/assets/cards/2.png'),
      },
    ],
  },
  mutations: {
    getCards(state, cards) {
      state.cards = cards
    },
  },
  actions: {
    getCards({ commit }) {
      commit('getCards')
    },
  },
})

export default store
