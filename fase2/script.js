const pergaminho = document.getElementById("pergaminho");
const personagem = document.getElementById('person');
const entrar = document.getElementById('entrar');
// Resgata posição do pergaminho
function Posicao(e) {
    const pergaminho = this;
    const local = personagem.getBoundingClientRect();
    console.log('posição x ', local.left, 'posição y', local.top);
    if (local.left >= 745) {
        $('#modal').addClass('block');
    }
}

pergaminho.addEventListener('click', Posicao);

function x(){
    if(document.getElementById('senha').value == 'luz'){
        alert('Acertou');
    }else{
        alert('Errou')
    }
}

entrar.addEventListener('click', x);
