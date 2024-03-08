const myBtn = document.querySelector('#mode')

myBtn.addEventListener('click', () => {
  const element = document.main
  element.classList.toggle('dark')
})
