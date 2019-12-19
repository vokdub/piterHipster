<template>
	<div>
		<article class="main">
            <div class="left-categories" id="left-categories">
                <nav class="fixed">
                    <div>
                        <a href="">Одежда с Петербургом</a>
                        <hr align="centre" width="80" size="1" color="black">
                        <a href="">Одежда с писателями</a>
                        <hr align="centre" width="80" size="1" color="black">
                        <a href="">Деревянные значки</a>
                        <hr align="centre" width="80" size="1" color="black">
                        <a href="">Печатная продукция</a>
                        <hr align="centre" width="80" size="1" color="black">
                        <a href="">Акции</a>
                        <hr align="centre" width="80" size="1" color="black">
                        <a href="">О бренде</a>
                    </div>
                </nav>
            </div>
        </article>
        
        <main>
            <article>
                <section class="form">
                    <h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
                    <form v-on:submit="sendRequest" onsubmit="return false" method="post">
                        <label>Имя<input v-model="userData.client_name" type="text" name="name" id="firstName"></label>
                        <label>Отчество<input v-model="userData.client_middlename" type="text" name="name" id="middleName"></label>
                        <label>Фамилия<input v-model="userData.client_last_name" type="text" name="name" id="secondName"></label>
                        <label>Телефон<input v-model="userData.client_phone_number" type="text" name="tel" id="telephon"></label>
                        <label>E-mail<input type="text" name="E-mail" id="E-mail"></label>
                        <label>Страна<input type="text" name="country" list="country"></label>
                        <datalist id="country">
                            <option value="Россия"></option> 
                            <option value="Другая страна"></option> 
                        </datalist>
                        <label>Город<input v-model="userData.delivery_address" type="text" name="city" list="city"></label>
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
                            <p> <label><input v-model="userData.delivery_type" name="delivery_method" type="radio" value="1" class="radio" checked>Почта России</label><span>300 Р</span></p>
                            <label class="order_text">Индекс<input type="text" name="index" id="index"></label>
                            <label class="order_text">Улица, дом, корпус, квартира<input type="text" name="adress" id="adress"></label>
                            <p> <label><input v-model="userData.delivery_type" name="delivery_method" type="radio" value="2" class="radio">СДЭК Россия - До пункта выдачи</label><span>250 Р</span></p>
                            <label class="order_text not_margin">Адрес пункта выдачи заказов<input type="text" name="SDAK_adress" id="SDAK_adress"></label>
                            <button class="show_on_the_map">Выбрать на карте</button>
                            <p class="not_margin"> <label><input v-model="userData.delivery_type" name="delivery_method" type="radio" value="3" class="radio">Самовывоз</label></p>
                            <p class="small">(Доступен только для жителей Санкт-Петербурга)</p>
                            <input class="style-btn1" type="submit" value="ПОДТВЕРДИТЬ ЗАКАЗ">
                        </div>
                    </form>
                </section>
                <section class="my_choise">
                    <div><p>ВАШ ЗАКАЗ</p></div>
                    <div class="content__choice1 product_info">
                        <img src="image/top/xJ3VEqkWMCw.jpg">
                        <div class="content__p">
                            <p id="product_name_1">Свитшот «Кутеж и интриги» с Есениным<span>, черный</span></p>
                            <p class="roboto" id="product_size_1">Размер: M</p>
                            <p class="price" id="product_price_1"><strong>2800 Р</strong></p>
                        </div>
                    </div>
                    
                </section>
                <section class="content__total">
                    <div class="content__finish">
                        <p><strong>Итого:</strong></p>
                        <p><strong>3180 Р</strong></p>
                    </div>
                    <a href="basket.html" class="back">
                        <div><strong>РЕДАКТИРОВАТЬ ЗАКАЗ</strong></div>
                    </a>
                </section>
            </article>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {

      name: 'NavAndOrder',

      data() {
        return {
            userData: {
                client_name : "",
                client_last_name : "",
                client_middlename : "",
                client_phone_number : "",
                delivery_type : 2,
                delivery_address : "",
                basket : [
              {product_id: 1, product_color: "green", product_size: "M", count: 1},
              {product_id: 1, product_color: "black", product_size: "XL", count: 1}
              ]
          }
      };
  },
  methods: {
    sendRequest: function () {
        axios.post('http://piter-hipster.enhancelab.ru/api/orders/', this.userData)
        .then(response => {         
            console.log(response);
        })
        return false;
    }
},
};
</script>

<style lang="css" scoped>
</style>
