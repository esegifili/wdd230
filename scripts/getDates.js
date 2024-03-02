let copyear = new Date();
let currentYear = copyear.getFullYear();

let lastMod = new Date(document.lastModified);

document.getElementById("lastMod").innerHTML = "Last modified on : " + lastMod;