const elBox = document.querySelector('.navigation')
const elBtn = document.querySelector('.site-header__btn')
elBox.style.maxHeight = "0px"
elBtn.addEventListener('click', () => {
    elBox.classList.toggle('navigation')
})