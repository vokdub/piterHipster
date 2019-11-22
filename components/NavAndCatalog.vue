<template>
	<div>
		<article class="main">
			<div class="left-categories" id="left-categories">
				<nav class="fixed">
					<div>
						<nuxt-link to="" class="">
							Одежда с Петербургом
						</nuxt-link>						
						<hr align="centre" width="80" size="2" color="black">
						<nuxt-link to="" class="">
							Одежда с писателями
						</nuxt-link>						
						<hr align="centre" width="80" size="2" color="black">
						<nuxt-link to="" class="">
							Деревянные значки
						</nuxt-link>						
						<hr align="centre" width="80" size="2" color="black">
						<nuxt-link to="" class="">
							Печатная продукция
						</nuxt-link>						
						<hr align="centre" width="80" size="2" color="black">
						<nuxt-link to="x" class="">
							Акции
						</nuxt-link>
					</div>
				</nav>
			</div>

		</article>
		<article class="main123">
			<div>
				<p class="name">ОДЕЖДА С ПЕТЕРБУРГОМ</p>
				<article class="products">
					<div class="merch" v-for="category in categories" :key="category.id">
						<img src="image/with_St.Petersburg/98S5Ux7r81c.jpg">
						<div class="name_prod1">
							<p>{{category.title}}</p>
							<p>1 190 ₽</p>
						</div>
					</div>
				</article>
			</div>
		</article>
	</div>
</template>

<script>
	export default {

		name: 'NavAndCatalog',

		data() {
			return {

			};
		},
		computed: {
			categories() {
				return this.$store.state.categories.data.message.results;
			}
		},
	};
</script>

<style lang="css" scoped>
</style>
