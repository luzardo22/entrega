
/* Funcion de click en menu me cambia de color a verde */

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) { 
    item.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

const descargaBtn = document.querySelector('.descarga');

descargaBtn.addEventListener('click', function(e) {
  e.preventDefault();
  // Agregar la clase "clicked" al botón de descarga
  descargaBtn.classList.add('clicked');
  //  después de 3 segundos reacciona auque le adicione una transicion
  setTimeout(function() {
    window.open(descargaBtn.querySelector('a').href, '_blank');
  }, 3000);
});
