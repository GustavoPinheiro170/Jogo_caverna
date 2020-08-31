const person = document.getElementById("person");

// Resgata posição do personagem
function Posicao(e) {
    const person = this;
    const local = person.getBoundingClientRect();
    console.log('posição x ', local.left, 'posição y', local.top);
    if (local.left >= 750) {
        $('#modal').addClass('block');
    }
}

// Limitando usuario a sair da tela
window.addEventListener('keypress', (e) => {
    const person = document.getElementById("person");
    const local = person.getBoundingClientRect();

    switch (e.key) {
        case 'd':
            if (local.left >= 1214.234375 )  {
                alert('Não saia da tela!!!');
            }
        break;
        case 'a':
            if (local.left < -10.000)  {
                alert('Não saia da tela!!!');
            }
            break;
    }
});


// Comandos básicos do personagem
window.addEventListener('keydown', (e) => {

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

window.addEventListener('keyup', (e) => {
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
        case 's':
            $(person).addClass('stop');
            $(person).removeClass('move');
            $(person).removeClass('up');
            $(person).removeClass('atack');
    }

})

window.addEventListener('keypress', (e) => {
    if (!e.repeat);
    switch (e.key) {
        case ' ':
            $(person).toggleClass('atack');
            break;
    }
})

// iniciando a função
person.addEventListener('click', Posicao);

