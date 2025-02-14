const dateMod = new Date(document.lastModified)
document.getElementById('lastModified').innerHTML = dateMod

const menuBtn = document.querySelector('#menu')
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {
  navigation.classList.toggle('show')
  menuBtn.classList.toggle('show')
})

const sun = document.querySelector('#mode')
const main = document.querySelector('main')

sun.addEventListener('click', () => {
  if (sun.textContent.includes('☀')) {
    main.style.background = '#dae0dd'
    sun.textContent = '☽'
    main.style.color = '#000'
  } else {
    main.style.background = '#13181b'
    sun.textContent = '☀'
  }
})
