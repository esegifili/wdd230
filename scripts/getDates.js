const year = new Date()
const currYear = year.getFullYear()
document.querySelector('.currentYear').innerHTML = currYear

const currDate = new Date(document.lastModified)
document.getElementById('lastModified').innerHTML =
  'Last Modified:' + ' ' + currDate
