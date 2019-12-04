<template>
	<div>
		<NavAndCatalog></NavAndCatalog>		
	</div>
</template>

<script>
	import axios from 'axios'

	// import TheHeader from '~/components/TheHeader.vue'
	import NavAndCatalog from '~/components/NavAndCatalog.vue'
	export default{
		head: {
			title: 'Каталог',

			meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],

			link: [
			{ rel: 'stylesheet', href: '/css/style_catalog.css' }
			]
		},
		components: {
			NavAndCatalog		
		},
		computed: {
			testdata() {
				return this.$store.state.categories;
			}
		},
		created: function() {
			// this.$store.dispatch('categories/firstLoad');
			// this.$store.commit('categories/SET_DATA', [1,1,1])
			axios.get('http://piter-hipster.enhancelab.ru/api/categories/')
			.then((res) => {
				this.$store.commit('categories/SET_DATA', res.data)
			})
		},
		data() {
			return{
			}
		}

		
		// REGEN
		// created: function() {
		// 	this.$store.dispatch('getGoods');
		// },
		// computed: {
		// 	goods () {
		// 		return this.$store.state.goods;
		// 	}
		// }
	}
</script> 

<style>

</style>