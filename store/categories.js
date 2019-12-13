import axios from 'axios'

export const state = () => ({
	data: [1,2]
});

export const mutations = {
	SET_DATA(state, categories) {
		state.data = categories;
	}
}

export const actions = {
	getCategories (context) {
		return axios.get('http://piter-hipster.enhancelab.ru/api/categories/')
		.then(response => {			
			context.commit('SET_DATA', response.data.message.results)
		})
	}
}