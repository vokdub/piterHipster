<template>
	<div>
		<NavAndProduct></NavAndProduct>
	</div>
</template>

<script>
	import axios from 'axios'

	// import TheHeader from '~/components/TheHeader.vue'
	import NavAndProduct from '@/components/NavAndProduct.vue'
	export default{
		head: {
			title: 'PiterHipster - Свитшот “Санкт-Петербург',
			script: [
			{ src: '/js/slider.js' }
			],
			meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			link: [
			{ rel: 'stylesheet', href: '/css/style_product.css' }
			]
		},
		components: {
			NavAndProduct		
		},
		data() {
			return{
			};
		},
	};
</script>

<style lang="css" scoped>
</style>
