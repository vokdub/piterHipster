<template>
	<div>
		<article class="main">
			<div class="left-categories" id="left-categories">
				<nav class="fixed">
					<div>
						<a href="">Одежда с Петербургом</a>
						<hr align="centre" width="80" size="2" color="black">
						<a href="">Одежда с писателями</a>
						<hr align="centre" width="80" size="2" color="black">
						<a href="">Деревянные значки</a>
						<hr align="centre" width="80" size="2" color="black">
						<a href="">Печатная продукция</a>
						<hr align="centre" width="80" size="2" color="black">
						<a href="">Акции</a>
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
