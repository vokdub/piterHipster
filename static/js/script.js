document.addEventListener('DOMContentLoaded', function() {
   const tmp = document.querySelector('.slide-win');
   tmp.addEventListener('click', function() {
    console.log('click!!!');
    const sidebar = document.querySelector('.left-categories');
    const top = document.querySelector('.header');
    const bottom = document.querySelector('.bottom__container');
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        top.classList.remove('show1');
        bottom.classList.remove('show2');
    } else {
        sidebar.classList.add('show');
        top.classList.add('show1');
        bottom.classList.add('show2');
    }
    console.log(sidebar);
})
   console.log('test', tmp);
}, false);