const list = document.querySelector('#list')
const input = document.querySelector('#favchap')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const product = input.value
  input.value = ''

  const listItem = document.createElement('li')
  const listText = document.createElement('span')
  const listBtn = document.createElement('button')

  listItem.appendChild(listText)
  listText.textContent = product
  listItem.appendChild(listBtn)
  listBtn.textContent = '❌'
  list.appendChild(listItem)

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem)
  })

  input.focus()
})
