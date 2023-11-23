import { dominio } from "./dominio.js"

window.addEventListener('load',async()=>{
    
    const progressBar = document.getElementById('progressBar')
    const route = document.getElementById('route')
    
    progressBar.addEventListener("animationend",async(e)=>{
        window.location.href = dominio + route.innerText
    })
})