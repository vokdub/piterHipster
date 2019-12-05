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
			<article class="content">
				<section class="content__choice1 product_info">
					<img src="image/top/xJ3VEqkWMCw.jpg">
					<div class="content__p">
						<p id="product_name_1">Свитшот «Кутеж и интриги» с Есениным<span>, черный</span></p>
						<p id="product_size_1">Размер: M</p>
						<p class="price" id="product_price_1"><strong>2800 Р</strong></p>
					</div>
					<div class="close_icon"><img src="image/close-icon.png"></div>
				</section>
				<section class="content__choice2 product_info">
					<img src="image/top/JgRy_iKVtv4.jpg">
					<div class="content__p">
						<p id="product_name_2">Футболка «With Love»<span>, черный</span></p>
						<p id="product_size_2">Размер: M</p>
						<p class="price" id="product_price_2"><strong>1190 Р</strong></p>
					</div>
					<div class="close_icon"><img src="image/close-icon.png"></div>    
				</section>
				<hr align="center" width="100%" size="1px" color="black">
				<section class="content__total">
					<div class="content__sum">
						<p><strong>Сумма покупки:</strong></p>
						<p><strong>3180 Р</strong></p>
					</div>
					<div class="content__discount">
						<p><strong>Скидка:</strong></p>
						<p><strong>0 Р</strong></p>
					</div>
					<div class="content__finish">
						<p><strong>Итого:</strong></p>
						<p><strong>{{totalPrice}}</strong></p>
					</div>
					<div class="order">
						<button>ОФОРМИТЬ ЗАКАЗ</button>
					</div>
					<a href="indexV2.html" class="back">
						<button>ПРОДОЛЖИТЬ ПОКУПКИ</button>
					</a>
					<div class="content__promocod">
						<form action="#" method="post">
							<input type="text" name="promocod" id="promo" placeholder="ВВЕДИТЕ ПРОМОКОД">
							<input class="style-btn" type="submit" value="OK">
						</form>
					</div>
				</section>
			</article>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'NavAndCart',
		data() {
			return {
			};
		},
		props: ['totalPrice'],
	};
</script>

<style lang="css" scoped>
</style>
