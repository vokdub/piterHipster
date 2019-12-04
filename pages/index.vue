<template>
	<div>		
		<NavAndBMain></NavAndBMain>
	</div>
</template>

<script>
	import axios from 'axios'

	// import TheHeader from '~/components/TheHeader.vue'
	import NavAndBMain from '@/components/NavAndBMain.vue'
	
	export default{
		head: {
			title: 'PiterHipster - Главная страница',

			meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],

			link: [
			{ rel: 'stylesheet', href: '/css/styleV2.css' }
			]
		},
		components: {
			NavAndBMain		
		},
		data() {
			return{
				
				all: [
				{
					"id": 1,
					"Title": "Щеночки"
				},
				{
					"id": 2,
					"Title": "Котятки"
				},
				{
					"id": 3,
					"Title": "Овечки"
				},
				{
					"id": 4,
					"Title": "Бомжик"
				}
				]
			}
		},
		methods:{

		}
		//REGEN
		// created: function() {
		// 	this.$store.dispatch('getCategories');
		// },
		// computed: {
		// 	all () {
		// 		return this.$store.state.all;
		// 	}
		// }
	}
</script> 

<style>

</style>