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

const tmp2 = document.querySelector('.java');
const closeFeedBack = document.querySelector('.close');
        tmp2.addEventListener('click', function() {
            console.log('click!!!');
            const sidebar2 = document.querySelector('.feedbackall');
            const sidebar3 = document.querySelector('.feedback__form');
            if(sidebar2.classList.contains('showz')) {
                sidebar2.classList.remove('showz');
                sidebar3.classList.remove('showz');
            } else {
                sidebar2.classList.add('showz');
                sidebar3.classList.add('showz');
            }
            console.log(sidebar2);
        })

        closeFeedBack.addEventListener('click', function() {
            console.log('click123!!!');
            const sidebar2 = document.querySelector('.feedbackall');
            const sidebar3 = document.querySelector('.feedback__form');
            sidebar2.classList.remove('showz');
            sidebar3.classList.remove('showz');
        })