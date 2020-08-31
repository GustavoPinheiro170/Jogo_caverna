const pergaminho = document.getElementById("pergaminho");
const personagem = document.getElementById('person');
const modal =      document.getElementById("modal");
const entrar =     document.getElementById('entrar');
// Resgata posição do pergaminho
function Posicao(e) {
    const pergaminho = this;
    const local = personagem.getBoundingClientRect();
    console.log('posição x ', local.left, 'posição y', local.top);
    if (local.left >= 745) {
        $('#modal').toggleClass('block');
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

const fechaModal = document.getElementById('fechaModal');

const Modal = () => {
    $('#modal').toggleClass('block');
}

fechaModal.addEventListener("click", Modal);
