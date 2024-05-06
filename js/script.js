const buttonMenu = document.getElementById('nav-mobile');
const menuMusica = document.getElementById('menu-musica');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  menuMusica.classList.toggle('open-menu');
});

$(function() {
    var btn_movil = $('nav-mobile'),
    menu = $('#menu').find('ul');

    
    btn_movil.on('click', function (e) {
        e.preventDefault();
        var el = $(this);
        el.toggleClass('nav-active');
        menu.toggleClass('open-menu');
    });
});