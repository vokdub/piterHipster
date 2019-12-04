<template>
	<div>

		<article class="main">
			<div class="left-categories" id="left-categories">
				<nav class="fixed">
					<div>
						<nuxt-link to="" class="">
							Одежда с Петербургом
						</nuxt-link>						
						<hr align="centre" width="80" size="1" color="black">
						<nuxt-link to="" class="">
							Одежда с писателями
						</nuxt-link>						
						<hr align="centre" width="80" size="1" color="black">
						<nuxt-link to="" class="">
							Деревянные значки
						</nuxt-link>						
						<hr align="centre" width="80" size="1" color="black">
						<nuxt-link to="" class="">
							Печатная продукция
						</nuxt-link>						
						<hr align="centre" width="80" size="1" color="black">
						<nuxt-link to="" class="">
							Акции
						</nuxt-link>
						<hr align="centre" width="80" size="1" color="black">
						<nuxt-link to="" class="">
							О бренде
						</nuxt-link>
					</div>
				</nav>
			</div>
		</article>

		<main class="main123"> 
			<article class="products">
				<h1 class="name">ОДЕЖДА С ПЕТЕРБУРГОМ</h1>
				<section class="products__merch1 merch">
					<img src="/image/with_St.Petersburg/98S5Ux7r81c.jpg">
					<div class="name_prod1 name_prod">
						<p>футболка «With Love»</p>
						<p><strong>1 190 Р</strong></p>
					</div>
				</section>
				<section class="products__merch2 merch">
					<a href="index_product.html">
						<img src="/image/with_St.Petersburg/lLgoQpmdbz0.jpg">
						<div class="name_prod2 name_prod">
							<p>свитшот «Санкт-Петербург</p>
							<p><strong>1 990 Р</strong></p>
						</div>
					</a>
				</section>
				<section class="products__merch3 merch">
					<img src="/image/with_St.Petersburg/oh1EiY9JBJ0.jpg">
					<div class="name_prod3 name_prod">
						<p>футболка «Санкт-Петербург»</p>
						<p><strong>1 190 Р</strong></p>
					</div>
				</section>
				<section class="products__merch4 merch">
					<img src="/image/with_St.Petersburg/vOFnKlvP_IM.jpg">
					<div class="name_prod4 name_prod">
						<p>свитшот «With Love»</p>
						<p><strong>1 990 Р</strong></p>
					</div>
				</section>
			</article>
		</main>	

		<!-- <article class="main123">
			<div>
				<p class="name">ОДЕЖДА С ПЕТЕРБУРГОМ</p>
				<article class="products">
					<div class="merch" v-for="category in categories" :key="category.id">
						<img src="/image/with_St.Petersburg/98S5Ux7r81c.jpg">
						<div class="name_prod1">
							<p>{{category.title}}</p>
							<p>1 190 ₽</p>
						</div>
					</div>
				</article>
			</div>
		</article>  -->
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
