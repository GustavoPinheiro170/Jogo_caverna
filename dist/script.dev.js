"use strict";

var entrar = document.getElementById('entrar'); // Adiciona classe do passaro

function Bird() {
  $("#bird").addClass('bird');
}

function x() {
  var pass = document.getElementById('senha').value;
  var sucess = document.getElementById('sucess');
  var error = document.getElementById('error');

  if (pass == 'Platão' || pass == 'platão') {
    console.log(pass);
    sucess.style.display = 'block';
    error.style.display = 'none';
    sucess.innerHTML = 'VOCÊ ACERTOU';
    window.location.href = "fase2/index.html";
  } else {
    sucess.style.display = 'none';
    error.style.display = 'block';
    error.innerHTML = 'TENTE NOVAMENTE';
  }
} // Iniciando as funções


setTimeout(Bird, 15000);
entrar.addEventListener('click', x);