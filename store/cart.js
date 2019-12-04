import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    cart: {} 
  },
  mutations: {
    SET_ITEM (state, item) {
      if (item.id in state.cart){
        state.cart[item.id].count += 1;
      }
      else{
        state.cart[item.id] = item;
        state.cart[item.id].count = 1;
      }
    },
    REMOVE_ITEM (state, item) {
      if (item.id in state.cart){
        if (state.cart[item.id].count > 1){
          state.cart[item.id].count -= 1;
        }
        else if (state.cart[item.id].count == 1){
          delete state.cart[item.id];
        }
      }      
      else{
        console.log("error");
      }
    }
  },
  actions: {
    setItem (context) {      
        context.commit('SET_ITEM', context);
    },
    removeItem (context) {
        context.commit('REMOVE_ITEM', context);
    },
    // getDescription(context) {
    //   axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then(response => {
    //     context.commit('SET_DESCRIPTION', response.data)
    //   });
    // }
  }
})

export default store