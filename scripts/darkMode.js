const myBtn = document.querySelector('#mode')

const main = document.querySelector('main')

myBtn.addEventListener('click', () => {
  if (myBtn.textContent.includes('☻')) {
    main.style.background = '#000'
    main.style.color = rgba(45, 142, 151, 0.306)

    myBtn.textContent = '☺'
  } else {
    main.style.background = 'whitesmoke'
    main.style.color = 'black'

    myBtn.textContent = '☻'
  }
})
