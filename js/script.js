const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.menu-container');

hamburger.addEventListener('click', () =>{
    container.classList.toggle('show-menu');

    if(hamburger.classList.contains('show-menu')) {
        hamburger.classList.remove('show-menu')
        document.querySelector('.icon').src = "img/icon-menu.svg";
    }else{
        hamburger.classList.add('show-menu')
        document.querySelector('.icon').src = "img/icon-menu-close.svg";
    };
});
