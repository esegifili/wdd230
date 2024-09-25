const year = new Date()
const currYear = year.getFullYear()
document.querySelector('.currentYear').innerHTML = currYear

const currDate = new Date(document.lastModified)
document.getElementById('lastModified').innerHTML =
  'Last Modified:' + ' ' + currDate

const burgerBtn = document.querySelector('.menuBtn')
const navLinks = document.querySelector('.menuLinks')

burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  burgerBtn.classList.toggle('open')
})

const darkButton = document.querySelector('.darkBtn')
const main = document.querySelector('main')

darkButton.addEventListener('click', () => {
  main.classList.toggle('dark')
})
