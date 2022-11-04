const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((e) => {
    e.addEventListener("click", (e)=>{
        console.log(e.target.textContent)
    })
})

somar.addEventListener("click", (e) => {
    manipulaDados("somar")
})

subtrair.addEventListener("click", (e) => {
    manipulaDados("subtrair")
})

function manipulaDados(operacao) {
    if (operacao === 'subtrair') {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}