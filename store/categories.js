import axios from 'axios'

export const state = () => ({
	data: {
		message:{
			results: {
			}
		}
	} //при создании экземпляра еще не существует result, создал вручную
});

export const mutations = {
	SET_DATA(store, arr) {
		store.data = arr.data;
	}
}

export const actions = {
	firstLoad (context) {
		// не получилось вызвать мутацию из экшена
	}
	// fetch ({ store, params }) {
	// 	return axios.get('http://piter-hipster.enhancelab.ru/api/categories/?format=vnd.api%2Bjson')
	// 	.then(response => {
	// 		store.commit('SET_DATA', response.data)
	// 	})
	// }
}