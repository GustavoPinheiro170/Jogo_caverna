"use strict";

var person = document.getElementById("person");
var entrar = document.getElementById('entrar');
var start = document.getElementById("start"); // Resgata posição do personagem

function Posicao(e) {
  var person = this;
  var local = person.getBoundingClientRect();
  console.log('posição x ', local.left, 'posição y', local.top);

  if (local.left >= 750) {
    $('#modal').addClass('block');
  }
}

start.addEventListener('keypress', function (e) {
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

  }
}); // Adiciona classe do passaro

function Bird() {
  $("#bird").addClass('bird');
} // função start e pause


function startPause() {
  $(start).toggleClass('pause');
}

function x() {
  var pass = document.getElementById('senha').value;
  var sucess = document.getElementById('sucess');
  var error = document.getElementById('error');

  if (pass == '178956') {
    console.log(pass);
    sucess.style.display = 'block';
    error.style.display = 'none';
    sucess.innerHTML = 'VOCÊ ACERTOU';
  } else {
    sucess.style.display = 'none';
    error.style.display = 'block';
    error.innerHTML = 'TENTE NOVAMENTE';
  }
}

entrar.addEventListener('click', x);
start.addEventListener('click', startPause); // Comandos básicos do personagem

start.addEventListener('keydown', function (e) {
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
start.addEventListener('keyup', function (e) {
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
start.addEventListener('keypress', function (e) {
  if (!e.repeat) ;

  switch (e.key) {
    case ' ':
      $(person).toggleClass('atack');
      break;
  }
}); // Iniciando as funções

setTimeout(Bird, 15000);
person.addEventListener('click', Posicao);