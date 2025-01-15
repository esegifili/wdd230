const date = new Date()
const currYear = date.getFullYear()
document.querySelector('.currYear').innerHTML = currYear

const dateMod = new Date(document.lastModified)
document.getElementById('lastModified').innerHTML = dateMod
