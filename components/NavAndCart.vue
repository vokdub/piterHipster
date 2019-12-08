<template>
	<div>
		{{items}}
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
			<article class="content">g
				<section v-if="formShow" class="form">
					<h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
					<form>
						<label>Имя и фамилия<input type="text" name="name" id="secondName"></label>
						<label>Телефон<input type="text" name="tel" id="telephon"></label>
						<label>E-mail<input type="text" name="E-mail" id="E-mail"></label>
						<label>Страна<input type="text" name="country" id="country"></label>
						<label>Город<input type="text" name="city" id="city"></label>
						<label>Комментарий к заказу<input class="comment" type="text" name="comment" id="comment"></label>
						<!-- <input class="style-btn1"  :onclick="sendRequest" type="submit" value="ПОДТВЕРДИТЬ ЗАКАЗ"> -->
						<button >ПОДТВЕРДИТЬ ЗАКАЗ</button>
					</form>
				</section>
				<section class="content__choice1 product_info">
					<img src="image/top/xJ3VEqkWMCw.jpg">
					<div class="content__p">
						<p id="product_name_1">{{items.title}}<span>, черный</span></p>
						<p id="product_size_1">Размер: M</p>
						<p class="price" id="product_price_1"><strong>{{items.price}} Р</strong></p>
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
						<button v-on:click="formShow = !formShow">ОФОРМИТЬ ЗАКАЗ</button>
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
				formShow: false
			};
		},
		methods: {
			// sendRequest: function () {
			// 	// console.log("d");
			// }
		}, 
		props: ['totalPrice', 'items']

	};
</script>

<style lang="css" scoped>
	
</style>
