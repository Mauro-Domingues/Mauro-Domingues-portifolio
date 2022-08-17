const bioContainer = document.querySelector(".bio-container")
const buttonNext = document.querySelector(".next")
const bio = document.querySelector(".bio")
const bar = document.querySelector(".bar")
const menu = document.querySelector(".menu")
const checkboxMenu = document.querySelector("#checkbox-menu")
const showBox = document.querySelector(".show-box")
const hideBox = document.querySelector(".hide-box")
const emailBox = document.querySelector(".email-box")

let i = 0
let message = "Sou programador web junior, recentemente finalizando minha formação full stack com a Startse Tech Academy. Sou apaixonado por tecnologia e uma pessoa extremamente curiosa, sempre querendo aprender mais. #BoraAprender"

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
    bar.textContent = ""
    bar.classList.toggle("bar-animation")
}, 14700)

setTimeout(() => {
    buttonNext.style.opacity = "1"
}, 15700)

menu.addEventListener("click", () => {
    checkboxMenu.checked = false
})

showBox.addEventListener("click", () => {
    emailBox.style.display = "flex"
})

hideBox.addEventListener("click", () => {
    emailBox.style.display = "none"
})