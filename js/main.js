const elBox = dacument.querySelector('.site-header__btn')
const elBtn = dacument.querySelector('.navigation')

elBtn.addEventListener('click', () => {
    elBox.classList.toggle('navigation')
})