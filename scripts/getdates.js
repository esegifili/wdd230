const date = new Date()
const currYear = date.getFullYear()
document.querySelector('.currYear').innerHTML = currYear

const dateMod = new Date(document.lastModified)
document.getElementById('lastModified').innerHTML = dateMod

const menuBtn = document.querySelector('#menu')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {
  navigation.classList.toggle('show')
  menuBtn.classList.toggle('show')
})
