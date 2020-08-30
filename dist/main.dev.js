"use strict";

var person = document.getElementById("person"); // Resgata posição do personagem

function Posicao(e) {
  var person = this;
  var local = person.getBoundingClientRect();
  console.log('posição x ', local.left, 'posição y', local.top);

  if (local.left >= 750) {
    $('#modal').addClass('block');
  }
} // Limitando usuario a sair da tela


window.addEventListener('keypress', function (e) {
  var person = document.getElementById("person");
  var local = person.getBoundingClientRect();

  switch (e.key) {
    case 'd':
      if (local.left >= 1214.234375) {
        alert('Não saia da tela!!!');
      }

      break;

    case 'a':
      if (local.left < -10.000) {
        alert('Não saia da tela!!!');
      }

      break;
  }
}); // Comandos básicos do personagem

window.addEventListener('keydown', function (e) {
  switch (e.key) {
    case 'd':
      $(person).css('margin-left', '+=15px');
      $(person).removeClass('down');
      $(person).addClass('move');
      $(person).removeClass('rotate');
      break;

    case 'a':
      $(person).css('margin-left', '-=15px');
      $(person).removeClass('down');
      $(person).addClass('rotate');
      $(person).addClass('move');
      $(person).removeClass('atack');
      break;

    case 'w':
      $(person).removeClass('down');
      $(person).removeClass('atack');
      break;

    case 's':
      $(person).toggleClass('down');
      $(person).removeClass('atack');
      break;
  }
});
window.addEventListener('keyup', function (e) {
  if (!e.repeat) ;

  switch (e.key) {
    case 'd':
      $(person).removeClass('move');
      $(person).removeClass('up');
      $(person).removeClass('atack');
      $(person).addClass('stop');
      break;

    case 'a':
      $(person).addClass('stop');
      $(person).removeClass('move');
      $(person).removeClass('up');
      $(person).removeClass('atack');
      break;

    case 's':
      $(person).addClass('stop');
      $(person).removeClass('move');
      $(person).removeClass('up');
      $(person).removeClass('atack');
  }
});
window.addEventListener('keypress', function (e) {
  if (!e.repeat) ;

  switch (e.key) {
    case ' ':
      $(person).toggleClass('atack');
      break;
  }
}); // iniciando a função

person.addEventListener('click', Posicao);