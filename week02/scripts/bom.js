const button = document.querySelector('button')
const input = document.querySelector('#favchap')
const list = documentquerySelector('#list')

button.addEventListener('click', () => {
  const scrip = input.value
  input.value = ''

  const li = document.createElement('li')
  const listText = document.createElement('span')
  const deleteButton = document.createElement('button')

  li.textContent = scrip
  deleteButton.textContent = '❌'
  listText.textContent = scrip
  li.append(deleteButton)
  list.append(li)

  deleteButton.addEventListener('click', () => {
    list.removeChild(li)
  })

  input.focus()
  input.value = ''
})
