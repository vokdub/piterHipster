<template>
	<div>
		<NavAndBBasket></NavAndBBasket>
	</div>
</template>

<script>
	import axios from 'axios'

	// import TheHeader from '~/components/TheHeader.vue'
	import NavAndBBasket from '@/components/NavAndBBasket.vue'
	export default{
		head: {
			title: 'PiterHipster - корзина',
			meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			link: [
			{ rel: 'stylesheet', href: '/css/style_basket.css' }
			]
		},
		components: {
			NavAndBBasket		
		},
		data() {
			return{
			};
		},
	};
</script>

<style lang="css" scoped>
</style>
