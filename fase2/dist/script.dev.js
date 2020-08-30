"use strict";

var pergaminho = document.getElementById("pergaminho");
var personagem = document.getElementById('person');
var entrar = document.getElementById('entrar'); // Resgata posição do pergaminho

function Posicao(e) {
  var pergaminho = this;
  var local = personagem.getBoundingClientRect();
  console.log('posição x ', local.left, 'posição y', local.top);

  if (local.left >= 745) {
    $('#modal').addClass('block');
  }
}

pergaminho.addEventListener('click', Posicao);

function x() {
  if (document.getElementById('senha').value == 'luz') {
    alert('Acertou');
  } else {
    alert('Errou');
  }
}

entrar.addEventListener('click', x);