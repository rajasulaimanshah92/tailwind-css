const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {    //kalau ade hidden class di html
        menu.classList.remove('hidden');        //remove hidden class
    } else {
        menu.classList.add('hidden');
    }
})