const bioContainer = document.querySelector(".bio-container")
const buttonNext = document.querySelector(".next")
const bio = document.querySelector(".bio")

let i = 0
let message = "Sou iniciante na área da programação, recentemente finalizando um curso web full stack com a Startse Tech Academy. Sou apaixonado por tecnologia e uma pessoa extremamente curiosa, sempre querendo aprender mais. #BoraAprender"

setTimeout(() => {
    bioContainer.style.opacity = "1"

    function typing(){
        if (i < message.length){
            bio.textContent += message.charAt(i)
            i++
            setTimeout(typing, 50)
        }
    }typing()
}, 3500)

setTimeout(() => {
    buttonNext.style.opacity = "1"
}, 16000)