const nYear = new Date()
const newYear = nYear.getFullYear()
document.querySelector('.yearCurr').innerHTML = newYear

const modDate = new Date(document.lastModified)
document.getElementById('lastMod').innerHTML = modDate
