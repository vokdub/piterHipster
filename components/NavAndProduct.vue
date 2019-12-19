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
		<main v-if="product[0]">
			<article class="product__imgs">
				<div class="product__main-photo">
					<div class="product__slider" id="slider" ontouchstart="startSwipe(event)" ontouchmove="moveSwipe(event)" ontouchend="endSwipe(event)">
						<img class="slider-photo" id="img" src="/image/tovar1/B2olOmYt3SI.jpg">
						<img class="slider-photo" src="/image/tovar1/lLgoQpmdbz0.jpg">
						<img class="slider-photo" src="/image/tovar1/QuEZuojmw-8.jpg">
						<img class="slider-photo" src="/image/tovar1/VHnBTwoGJjU.jpg">
					</div>
				</div>
				<div class="product__pointer">
				</div>
			</article>
			<article class="product">
				<section class="product__description">
					<div class="product__name">
						<p> {{product[0].title}} </p>
						<p> {{product[0].price}} Р</p>
					</div>
					<div class="product__under-name">
						<div class="sizeAndColor">
							<div class="sizeAndColor__size">
								<p>Размер <span>Таблица размеров</span></p>
								<div>
									<div>S</div>
									<div>M</div>
									<div>L</div>
									<div>XL</div>
									<div>XXL</div>
								</div>
							</div>
							<div class="sizeAndColor__color">
								<p>Цвет</p>
								<div>
									<div class="color_1"></div>
									<div class="color_2"></div>
									<div class="color_3"></div>
								</div>
							</div>
						</div>
						<div class="buyAndPrice">
							<button v-on:click="throwEvent" href="#">В КОРЗИНУ</button>
						</div>
						<div class="product__description-text">
							<ul>
								<li>сделан из 100% хлопка средней плотности с начесом</li>
								<li>мы наносим изображение шелкографией, которая выдерживает до 50-60 стирок при соблюдении рекомендаций по уходу</li>
								<li>доставка по России — 300 руб, по миру зависит от удаленности</li>
							</ul>
						</div>
					</div>
				</section>
				<section class="somthLikeThis">
					<p>Похожие товары</p>
					<div class="somthLikeThis__overflow">
						<div class="somthLikeThis__container">
							<img src="/image/products_like_this/Rectangle%2064.png">
							<img src="/image/products_like_this/Rectangle%2065%20(1).png">
						</div>
					</div>
				</section>
			</article>
		</main>



	</div>
</template>

<script>
	export default {

		name: 'NavAndProduct',

		data() {
			return {

			};
		},
		props: ['product'],
		head: {			   
			
		},
		methods: {
			throwEvent: function () {
				this.$emit('myEvent');
			}
		},
	};


</script>

<style lang="css" scoped>
</style>
