const date = new Date()
const newYear = date.getFullYear()
document.querySelector('.yearCurr').innerHTML = newYear

const modDate = new Date(document.lastModified)
document.getElementById('lastMod').innerHTML = modDate
