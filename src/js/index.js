const botoes = document.querySelectorAll('.question-btn');
botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const item = botao.closest('.faq-item');
        item.classList.toggle('active');
        const icone = botao.querySelector('img');
        if(item.classList.contains('active')) {
            icone.src = './src/images/icon-minus.svg';
        } else {
            icone.src = './src/images/icon-plus.svg';
        }
    });
});