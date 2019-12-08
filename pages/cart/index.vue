<template>
	<div>
		<NavAndCart :items = "items" :totalPrice = "totalPrice"></NavAndCart>
	</div>
</template>

<script>
	import axios from 'axios'

	// import TheHeader from '~/components/TheHeader.vue'
	import NavAndCart from '@/components/NavAndCart.vue'
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
			NavAndCart		
		},
		data() {
			return{
			};
		},
		computed: {
			items () {
				return this.$store.state.cart.data[0];
			},

			totalPrice(){
				let tPrice = 0;
				console.log(this.$store.state.cart.data);
				for(var item of this.$store.state.cart.data){
					tPrice += item.price;
				}
				return tPrice;
			}
		}
	};
</script>

<style lang="css" scoped>
</style>
