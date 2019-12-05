<template>
	<div>		
		<NavAndBMain :categories = "categories"></NavAndBMain>
	}

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
			}
		},
		methods:{

		},		
		created: function() {
			this.$store.dispatch('categories/getCategories');
		},		
		computed: {
			categories () {
				return this.$store.state.categories.data;
			}
		}
	}
</script> 

<style>

</style>