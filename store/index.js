import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    all: [],
    goods: []
    // id: 0,
    // title: '',
    // description: '',
    // price: '',
    // modifications: {
    //   color: '',
    //   size: ''
    // }    
  },
  mutations: {
    SET_CATEGORIES (state, categories) {
      state.all = categories;
    },
    SET_GOODS (state, goods) {
      state.goods = goods;
    }
  },
  actions: {
    getCategories (context) {
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        context.commit('SET_CATEGORIES', response.data)
      });
    },
    getGoods (context) {
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        context.commit('SET_GOODS', response.data)
        
      console.log(response.data);
      });
    }
  }
})

export default store