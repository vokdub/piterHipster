<template>
  <div>
    <header class="header">
      <div class="slide-win"><img src="image/Burger.png"></div>
      <div class="header__logo logo"><!-- <img src="image/photo_2019-10-30_20-50-35.jpg"> -->
        <a href="index.html">PITER<p>HIPSTER</p></a>
      </div>
      <a class="basket" href="basket.html"><img src="image/shopping109.png"></a>
      <script>
        const tmp = document.querySelector('.slide-win');
        tmp.addEventListener('click', function() {
          console.log('click!!!');
          const sidebar = document.querySelector('.left-categories');
          if(sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
          } else {
            sidebar.classList.add('show');
          }
          console.log(sidebar);
        })
        console.log('test', tmp);
      </script>
    </header>
    
    <nuxt />
    
    <article class="bottom">
      <div class="bottom__container">
        <div class="bottom__info">
          <ul>
            <li><a href="#Brend">О бренде</a></li>
            <li><a href="#Info">Инфо</a></li>
            <li><a href="#Contacts">Контакты</a></li>
          </ul>
        </div>
        <div class="bottom__logo">
          <div class="bottom__tel">
            <img src="image/logo%20(1).png">
            <span>+79819819111</span>
          </div>

          <div class="contact-us">
            <div>
              <img src="image/2%201.png">
              <img class="insta" src="image/insta%201.png">
              <img src="image/1%20992.png">
            </div>
            <button href="#call">Перезвонить мне</button>
          </div>
        </div>
      </div>
    </article>
    <script>
        const tmp = document.querySelector('.slide-win');
        tmp.addEventListener('click', function() {
            console.log('click!!!');
            const sidebar = document.querySelector('.left-categories');
            if(sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            } else {
                sidebar.classList.add('show');
            }
            console.log(sidebar);
        })
        console.log('test', tmp);
      </script>  
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
  background: black;
  color: white;
  border: none;
}
</style>
