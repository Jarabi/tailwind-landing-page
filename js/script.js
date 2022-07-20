const menuBtn = document.querySelector('#menu-btn')
const nav = document.querySelector('#menu')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})