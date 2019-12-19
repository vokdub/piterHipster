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
				<!-- <section v-if="formShow" class="form">
					<h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
					<form v-on:submit="sendRequest" onsubmit="return false" method="post">
						<label>Имя и фамилия<input type="text" name="name" id="secondName"></label>
                        <label>Телефон<input type="text" name="tel" id="telephon"></label>
                        <label>E-mail<input type="text" name="E-mail" id="E-mail"></label>
                        <label>Страна<input type="text" name="country" list="country"></label>
                        <datalist id="country">
                            <option value="Россия"></option>
                            <option value="Другая страна"></option>
                        </datalist>
                        <label>Город<input type="text" name="city" list="city"></label>
                        <datalist id="city">
                            <option value="Москва"></option>
                            <option value="Санкт-Петербург"></option>
                            <option value="Новосибирск"></option>
                            <option value="Екатеринбург"></option>
                            <option value="Нижний Новгород"></option>
                            <option value="Казань"></option>
                            <option value="Челябинск"></option>
                            <option value="Омск"></option>
                            <option value="Самара"></option>
                            <option value="Ростов-на-Дону"></option>
                            <option value="Уфа"></option>
                            <option value="Красноярск"></option>
                            <option value="Воронеж"></option>
                            <option value="Пермь"></option>
                            <option value="Волгоград"></option>
                            <option value="Краснодар"></option>
                            <option value="Саратов"></option>
                            <option value="Тюмень"></option>
                            <option value="Тольятти"></option>
                            <option value="Ижевск"></option>
                            <option value="Барнаул"></option>
                            <option value="Ульяновск"></option>
                            <option value="Иркутск"></option>
                            <option value="Хабаровск"></option>
                            <option value="Ярославль"></option>
                            <option value="Владивосток"></option>
                        </datalist>
                        <label>Комментарий к заказу<input class="comment" type="text" name="comment" id="comment"></label>
                        <p><strong>Выберите способ доставки</strong></p>
                        <div>
                        <p><input name="delivery_method" type="radio" value="pochta" class="radio" checked>Почта России<span>300 Р</span></p>
                        <label class="order_text">Индекс<input type="text" name="index" id="index"></label>
                        <label class="order_text">Улица, дом, корпус, квартира<input type="text" name="adress" id="adress"></label>
                        <p><input name="delivery_method" type="radio" value="SDAK" class="radio">СДЭК Россия - До пункта выдачи<span>250 Р</span></p>
                        <label class="order_text not_margin">Адрес пункта выдачи заказов<input type="text" name="SDAK_adress" id="SDAK_adress"></label>
                        <button class="show_on_the_map">Выбрать на карте</button>
                        <p class="not_margin"><input name="delivery_method" type="radio" value="Pickup" class="radio">Самовывоз</p>
                        <p class="small">(Доступен только для жителей Санкт-Петербурга)</p>
                        <input class="style-btn1" type="submit" value="ПОДТВЕРДИТЬ ЗАКАЗ">
                        </div>
					</form>
				</section> -->
				<section v-for="item in items" class="content__choice1 product_info">
					<img src="/image/top/xJ3VEqkWMCw.jpg">
					<div class="content__p">
						<p id="product_name_1">{{item.title}}<span>, черный</span></p>
						<p class="roboto" id="product_size_1">Размер: M</p>
						<p class="price" id="product_price_1"><strong>{{item.price}} Р</strong></p>
					</div>
					<div class="close_icon"><img src="/image/close-icon.png"></div>
				</section>
				<!-- <section class="content__choice2 product_info">
					<img src="/image/top/JgRy_iKVtv4.jpg">
					<div class="content__p">
						<p id="product_name_2">Футболка «With Love»<span>, черный</span></p>
						<p class="roboto" id="product_size_2">Размер: M</p>
						<p class="price" id="product_price_2"><strong>1190 Р</strong></p>
					</div>
					<div class="close_icon"><img src="/image/close-icon.png"></div>
				</section> -->
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
        		<!-- <button >ОФОРМИТЬ ЗАКАЗ</button> -->
        		<nuxt-link to="/order" class="">
        			ОФОРМИТЬ ЗАКАЗ
        		</nuxt-link>		
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
		props: ['totalPrice', 'items']
	};
</script>

<style lang="css" scoped>

</style>
