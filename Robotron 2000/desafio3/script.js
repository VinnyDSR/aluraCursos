botaoTinta = document.querySelector('[botao-tinta]')
tabela = document.querySelector('[tabela-tintas]')

botaoTinta.addEventListener('click', () => {
    tabela.classList.toggle('hide');
    //tabela.setAttribute("data-lista", "esconder")
})