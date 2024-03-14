const list = document.querySelector('#list')
const input = document.querySelector('#favchap')
const button = document.querySelector('button')

let chaptersArray = getChapterList() || []

chaptersArray.array.forEach(chapter => {
  displayList(chapter)
})

button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value)
    chaptersArray.push(input.value)
    setChapterList()
    input.value = ''
    input.focus()
  }
})

function displayList (item) {
  let li = document.createElement('li')
  let deletebutton = document.createElement('button')
  li.textContent = item
  deletebutton.textContent = '❌'
  deletebutton.classList.add('delete')
  li.append(deletebutton)
  list.append(li)
  deletebutton.addEventListener('click', function () {
    list.removeChild(li)
    deleteChapter(li.textContent)
    input.focus()
  })
}
