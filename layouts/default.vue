<template>
  <div>
    <header class="header">
      <div class="slide-win">
        <img src="/image/Burger.png">
      </div>
      <div class="header__logo logo">
        <img src="/image/photo_2019-10-30_20-50-35.jpg">
        <nuxt-link to="/" class="">
          <span>PITER</span><span>HIPSTER</span>
        </nuxt-link>
      </div>
      <div class="finderAndBascet">
        <form action="#" method="get">
          <input type="text" name="find" id="find">
          <input class="style-btn" type="submit" value="">
        </form>
        <nuxt-link to="/cart" class="basket">
          <img src="/image/shopping109.svg">
        </nuxt-link>
      </div>
    </header>
    
    <nuxt />

    <footer class="bottom">
      <div class="feedback feedbackall"></div>
      <section class="feedback__form feedbackall">
        <h2>ОБРАТНЫЙ ЗВОНОК</h2>
        <img class="close" src="/image/close-icon.png">
        <form action="#" method="post">
          <label>КАК ВАС ЗОВУТ?<input type="text" name="name" id="name"></label>
          <label>ВАШ ТЕЛЕФОН<input type="text" name="tel" id="tel"></label>
          <input class="style-btn1" type="submit" value="ЗАКАЗАТЬ ЗВОНОК">
        </form>
      </section>
      <div class="bottom__container">
        <div class="bottom__info">
          <ul>
            <li>
              <nuxt-link to="#Brend" class="">
                О бренде
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#Info" class="">
                Инфо
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#Contacts" class="">
                Контакты
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="bottom__logo ">

          <div class="bottom__tel">
            <img src="/image/logo%20(1).png">
            <a href="tel:+79502535013">+7 950 253 50 13</a>
          </div>

          <div class="contact-us">
            <div>
              <img src="/image/2%201.png">
              <img class="insta" src="/image/insta%201.png">
              <img src="/image/1%20992.png">
            </div>
            <button class="java" href="#call">Перезвоните мне</button>
          </div>
        </div>
      </div>
    </footer>  
  </div>
</template>

<style>
h3, a, a:hover{
  color: black;
}
a{
  text-decoration: none;
}
button{
  /*background: black;  зачем это?*/
  color: white;
  border: none;
}
</style>
