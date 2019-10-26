import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    all: []
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
    increment (state) {
      state.counter++
    },
    saveName (state, message) {
    	state.name = message
    },
    updateSurname (state, value) {
    	state.surname = value
    },
    updateDate (state, value) {
    	state.date = value
    }
  },
  actions: {
    getCategories (context) {
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        context.commit('SET_CATEGORIES', response.data)
        console.log('x '+response.data);
      });
    }
  }
})

export default store