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
let message = "Sou programador web, apaixonado por tecnologia e uma pessoa extremamente curiosa, sempre em busca de aprender mais. #BoraAprender"

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
}, 10000)

setTimeout(() => {
    buttonNext.style.opacity = "1"
}, 10500)

menu.addEventListener("click", () => {
    checkboxMenu.checked = false
})

showBox.addEventListener("click", () => {
    emailBox.style.display = "flex"
})

hideBox.addEventListener("click", () => {
    emailBox.style.display = "none"
})