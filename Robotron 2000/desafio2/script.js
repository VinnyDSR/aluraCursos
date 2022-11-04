const elemento = document.querySelector('#calcular')
const resultado = document.querySelector('.resultado')

elemento.addEventListener("click", (e) => {
    resultado.innerHTML = "Fui clicado!"
})