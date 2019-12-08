import axios from 'axios'

export const state = () => ({
	data: []
});

export const mutations = {

	SET_DATA(state, products) {
		state.data = products;
	}
}

export const actions = {

	getProducts (context) {
		return axios.get('http://piter-hipster.enhancelab.ru/api/products/')
		.then(response => {			
			context.commit('SET_DATA', response.data.message.results);
		})
	}
}