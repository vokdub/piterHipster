<template>
	<div>
		<h1>catalog</h1>
		<p  v-for="elem in goods"  v-bind:key="elem.id"  v-bind:title="elem.title">
			{{elem.username}}
		</p>
		<nuxt-link to="/card">catalog</nuxt-link>
	</div>
</template>

<script>
	export default{
		created: function() {
			this.$store.dispatch('getGoods');
		},
		computed: {
			goods () {
				return this.$store.state.goods;
			}
		}
	}
</script> 

<style>
	
</style>