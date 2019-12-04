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

		<main class="all">
			<article id="img">
				<section class="all__container-1">
					<div class="all__main">
						<img src="/image/I262EilS-oY.jpg">
					</div>
				</section>
				<section class="all__container-2">
					<div class="border-bottom"><h2>Топ товаров</h2></div>
					<div class="all__title-1">
						<div class="second-slider slider" id="slider" ontouchstart="startSwipe(event)" ontouchmove="moveSwipe(event)" ontouchend="endSwipe(event)">
							<img src="/image/top/xJ3VEqkWMCw.jpg" class="top-1 top">
							<img src="/image/top/JgRy_iKVtv4.jpg" class="top-2 top">
							<img src="/image/top/tQbD-0Hn0Ts.jpg" class="top-3 top">
							<img src="/image/top/xJ3VEqkWMCw.jpg" class="top-4 top"> 
						</div>
					</div>
					<div class="catigories">
						<h2>Каталог товаров</h2>
						<div class="catigories__container">
							<a href="index_catalog.html" class="StPet"><img src="/image/category/piter.jpg"></a>
							<a href="#" class="autors"><img src="/image/category/autors.jpg"></a>
							<a href="#" class="broshi"><img src="/image/category/broshi.jpg"></a>
							<a href="#" class="znachki"><img src="/image/category/derev.jpg"></a>
							<a href="#" class="printed"><img src="/image/category/printed.jpg"></a>
						</div>
					</div>
				</section>
			</article>
		</main>
	</div>
</template>

<script>
	export default {

		name: 'NavAndBMain',

		data() {
			return {

			};
		},
	};
</script>

<style lang="css" scoped>
</style>
