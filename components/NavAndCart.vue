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
				<section v-if="formShow" class="form">
					<h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
					<form v-on:submit="sendRequest" onsubmit="return false" method="post">
						<label>Имя и фамилия<input type="text" name="name" id="secondName"></label>
						<label>Телефон<input type="text" name="tel" id="telephon"></label>
						<label>E-mail<input type="text" name="E-mail" id="E-mail"></label>
						<label>Страна<input type="text" name="country" id="country"></label>
						<label>Город<input type="text" name="city" id="city"></label>
						<label>Комментарий к заказу<input class="comment" type="text" name="comment" id="comment"></label>
						<input class="style-btn1"  type="submit" value="ПОДТВЕРДИТЬ ЗАКАЗ"> 
						
					</form>
				</section>
				<section class="content__choice1 product_info">
					<img src="/image/top/xJ3VEqkWMCw.jpg">
					<div class="content__p">
						<p id="product_name_1">{{items.title}}<span>, черный</span></p>
						<p class="roboto" id="product_size_1">Размер: M</p>
						<p class="price" id="product_price_1"><strong>{{items.price}} Р</strong></p>
					</div>
					<div class="close_icon"><img src="/image/close-icon.png"></div>
				</section>
				<section class="content__choice2 product_info">
					<img src="/image/top/JgRy_iKVtv4.jpg">
					<div class="content__p">
						<p id="product_name_2">Футболка «With Love»<span>, черный</span></p>
						<p class="roboto" id="product_size_2">Размер: M</p>
						<p class="price" id="product_price_2"><strong>1190 Р</strong></p>
					</div>
					<div class="close_icon"><img src="/image/close-icon.png"></div>
				</section>
        <!--<div class="content__choice3 product_info"></div>
        <div class="content__choice4 product_info"></div>
        <div class="content__choice5 product_info"></div>
        <div class="content__choice6 product_info"></div>
        <div class="content__choice7 product_info"></div> -->
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
        	<nuxt-link to="/" class="back">
        		<div>ПРОДОЛЖИТЬ ПОКУПКИ</div>
        	</nuxt-link> 
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
	import axios from 'axios'

	export default {
		name: 'NavAndCart',
		data() {
			return {
				formShow: false
			};
		},
		methods: {
			sendRequest: function () {
				const data = {
					'client_name': "vasya",
					'client_last_name': "Тестов",
					'client_middlename': "Тестович",
					'client_phone_number': '+79998034567',
					'delivery_type': 2,
					'delivery_address': "Норильск one love",
					'basket': [
					{"product_id": 1, "product_color": "green", "product_size": "M", "count": 1},
					{"product_id": 1, "product_color": "black", "product_size": "XL", "count": 1}
					]
				};
				axios.post('http://piter-hipster.enhancelab.ru/api/orders/', data)
				.then(response => {			
					console.log(response);
				})
				return false;
			}
		},
		props: ['totalPrice', 'items']

	};
</script>

<style lang="css" scoped>

</style>
