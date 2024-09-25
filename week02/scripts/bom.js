const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', () => {
  if (input.value != '') {
  }
  input.focus()

  const listItem = document.createElement('li')
  const delBtn = document.createElement('button')

  listItem.textContent = input.value
  delBtn.textContent = '❌'

  listItem.append(delBtn)
  list.appendChild(listItem)

  delBtn.addEventListener('click', () => {
    list.removeChild(listItem)
    input.focus()
  })

  input.focus()
  input.value = ''
})
