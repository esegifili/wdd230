const myBtn = document.querySelector('#mode')

myBtn.addEventListener('click', () => {
  main.classList.toggle('dark')
  myBtn.classList.toggle('main')
})
