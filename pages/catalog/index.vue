<template>
	<div>
		<!-- <nuxt-link to="/catalog">catalog</nuxt-link> -->
		<p  v-for="elem in goods"  v-bind:key="elem.id"  v-bind:Title="elem.Title">
			<nuxt-link to="/card">
				<h3>{{elem.Title}} </h3>
			</nuxt-link>
		</p>
		
	</div>
</template>

<script>
	export default{
		head: {
    		title: 'Каталог'
    	},
		data() {
			return{
				goods: [
        			{
		                "id": 1,
		                "Title": "Ушки корги",
		                "Price": 2000.0,
		                "photos": [
		                    {
		                        "Direction": "dsfgfgsdfgsf",
		                        "alt": "picture"
		                    }
		                ]
		             },
		             {
		                "id": 2,
		                "Title": "Попка корги",
		                "Price": 1000.0,
		                "photos": [
		                    {
		                        "Direction": "dsfgfgsdfgsf",
		                        "alt": "picture"
		                    }
		                ]
		             },
		             {
		                "id": 3,
		                "Title": "Ножка корги",
		                "Price": 200.0,
		                "photos": [
		                    {
		                        "Direction": "dsfgfgsdfgsf",
		                        "alt": "picture"
		                    }
		                ]
		             }
		        ]
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