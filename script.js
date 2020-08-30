const person = document.getElementById("person");
const entrar = document.getElementById('entrar');
let start = document.getElementById("start");
// Resgata posição do personagem
function Posicao(e) {
    const person = this;
    const local = person.getBoundingClientRect();
    // console.log('posição x ', local.left, 'posição y', local.top);
    if (local.left >= 750) {
        $('#modal').addClass('block');
    }
}
// Adiciona classe do passaro
function Bird() {
    $("#bird").addClass('bird');
}

// função start e pause
function startPause(){
    start.innerHTML = 'Pause';
   $(start).toggleClass('pause');

}

function x() {
    const pass = document.getElementById('senha').value;
    const sucess= document.getElementById('sucess');
    const error = document.getElementById('error')
    if (pass == '178956') {
        console.log(pass);
        sucess.style.display ='block';
        error.style.display ='none';
        sucess.innerHTML = 'VOCÊ ACERTOU';
        
    } else {
        sucess.style.display = 'none';
        error.style.display ='block';
        error.innerHTML = 'TENTE NOVAMENTE';
       
    }
}


entrar.addEventListener('click', x);




start.addEventListener('click', startPause);
// Comandos básicos do personagem
start.addEventListener('keydown', (e) => {

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

start.addEventListener('keyup', (e) => {

    
    if (!e.repeat);
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
        case 's' :
            $(person).addClass('stop');
            $(person).removeClass('move');
            $(person).removeClass('up');
            $(person).removeClass('atack');
    }

})

start.addEventListener('keypress', (e) => {
    if (!e.repeat);
    switch (e.key) {
        case ' ':
            $(person).toggleClass('atack');
            break;
    }
})

// Iniciando as funções
setTimeout(Bird, 15000);
person.addEventListener('click', Posicao)