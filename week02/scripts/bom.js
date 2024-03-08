const button = document.querySelector('button')
const input = document.querySelector('#favchap')
const list = documentquerySelector('#list')

button.addEventListener('click', () => {
  if (input.value != '') {
    input.value = ''
  }

  const li = document.createElement('li')
  const deleteButton = document.createElement('button')

  li.textContent = input.value
  deleteButton.textContent = '❌'
  li.append(deleteButton)
  list.append(li)

  deleteButton.addEventListener('click', () => {
    list.removeChild(li)
  })

  input.focus()
  input.value = ''
})
