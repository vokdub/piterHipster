<template>
	<div>
		<nuxt-link to="/catalog">catalog</nuxt-link>
		<!-- <pre>		{{all}}	    </pre> -->
		<p  v-for="elem in all"  v-bind:key="elem.id"  v-bind:title="elem.title">
			<nuxt-link to="/catalog"> <h3>{{elem.Title}} </h3></nuxt-link>
		</p> 
	</div>
</template>

<script>
	export default{
		head: {
    		title: 'Домашнаяя страница'
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