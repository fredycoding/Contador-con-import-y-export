import { contador } from "./contador.js"
const h1contador = document.getElementById('h1contador')
const bontoncontador = document.getElementById('botoncontador')
let valor = 1
bontoncontador.addEventListener('click', ()=>{
    valor = contador(valor)
    h1contador.textContent = valor       
})

