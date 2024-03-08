const myBtn = document.querySelector('#mode')
const main = document.querySelector('main')

myBtn.addEventListener('click', () => {
  main.classList.toggle('.dark')
  myBtn.classList.toggle('main')
})
