function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.games__item__img');
    let botao = gameClicado.querySelector('.games__item__button');

    if (imagem.classList.contains('games__item__img--purchased')) {
        imagem.classList.remove('games__item__img--purchased');
        botao.textContent = 'Comprar';
        botao.classList.remove('games__item__button--return');
    } else {
        imagem.classList.add('games__item__img--purchased');
        botao.textContent = 'Comprado';
        botao.classList.add('games__item__button--return');
    }
}   