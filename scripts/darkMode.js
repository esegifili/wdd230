const myBtn = document.querySelector('#mode')
const main = document.querySelector('main')

myBtn.addEventListener('click', () => {
  document.classList.toggle('.dark')
  myBtn.classList.toggle('main')
})
