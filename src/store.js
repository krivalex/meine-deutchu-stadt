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
      {
        id: 3,
        number: 3,
        title: 'Академия Наук',
        image: require('@/assets/cards/3.png'),
      },
      {
        id: 4,
        number: 4,
        title: 'Памятник Г.К. Бельгеру',
        image: require('@/assets/cards/4.png'),
      },
      {
        id: 5,
        number: 5,
        title: 'Немецкий дом',
        image: require('@/assets/cards/5.png'),
      },
      {
        id: 6,
        number: 6,
        title: 'Памятник А.С. Пушкину',
        image: require('@/assets/cards/6.png'),
      },
      {
        id: 7,
        number: 7,
        title: 'Памятник А.С. Пушкину',
        image: require('@/assets/cards/7.png'),
      },
      {
        id: 8,
        number: 8,
        title: 'Памятник А.С. Пушкину',
        image: require('@/assets/cards/8.png'),
      },
      {
        id: 9,
        number: 9,
        title: 'Памятник А.С. Пушкину',
        image: require('@/assets/cards/9.png'),
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
