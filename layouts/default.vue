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
    <nuxt-link to="/basket" class="basket">
      <img src="/image/shopping109.svg">
    </nuxt-link>
  </header>

  <nuxt />

  <footer class="bottom">
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
      <div class="bottom__logo">
        <div class="bottom__tel">
          <img src="/image/logo%20(1).png">          
          <a href="tel:+1234567890">+79819819111</a>
        </div>

        <div class="contact-us">
          <div>
            <img src="/image/2%201.png">
            <img class="insta" src="/image/insta%201.png">
            <img src="/image/1%20992.png">
          </div>
          <button href="#call">Перезвоните мне</button>
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
