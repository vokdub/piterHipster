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
			console.log(response.data.data.message.results);
			context.commit('SET_DATA', response.data.data.message.results);
		})
	}
}