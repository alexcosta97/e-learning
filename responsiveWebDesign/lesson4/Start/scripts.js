var menu = document.querySelector('#menu');
var drawer = document.querySelector('#drawer');
var main = document.querySelector('main');

menu.addEventListener('click', function(e){
    drawer.classList.toggle('open');
    e.stopPropagation();
});

main.addEventListener('click', function(e){
    drawer.classList.remove('open');
    e.stopPropagation();
})