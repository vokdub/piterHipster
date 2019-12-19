<template>
	<div>
		<NavAndOrder></NavAndOrder>
		
	</div>
</template>

<script>
	import NavAndOrder from '@/components/NavAndOrder.vue'
	
	export default {
		head: {
			title: 'PiterHipster - Главная страница',

			meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],

			link: [
			// { rel: 'stylesheet', href: '/css/style_order.css' }
			]
		},
		components: {
			NavAndOrder		
		},
		data() {
			return {

			};
		},
	};
</script>

<style lang="css" scoped>
</style>
