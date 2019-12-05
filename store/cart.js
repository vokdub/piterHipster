import axios from 'axios'

export const state = () => ({
    data: [10,22]
});

export const mutations = {
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
}
export const actions = {
    setItem (context) {      
      context.commit('SET_ITEM', context);
    },
    removeItem (context) {
      context.commit('REMOVE_ITEM', context);
    }
}
