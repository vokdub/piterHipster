<template>
	<div>
		<h1>main</h1>
		<!-- <pre>		{{all}}	</pre> -->
		<p  v-for="elem in all"  v-bind:key="elem.id"  v-bind:title="elem.title">
			{{elem.name}}
		</p>
		<nuxt-link to="/catalog">catalog</nuxt-link>
	</div>
</template>

<script>
	export default{
		created: function() {
			this.$store.dispatch('getCategories');
		},
		computed: {
			all () {
				return this.$store.state.all;
			}
		}
	}
</script> 

<style>

</style>