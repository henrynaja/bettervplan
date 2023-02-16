
/*Color Code zum teilen mit Freunden erstellen*/
/*Dark Mode Button hinzufügen*/
/*
let header = document.createElement('button');
header.textContent = "Dark Mode";
header.id = "darkmode";
header.setAttribute("onclick", "darkMode()");
document.body.appendChild(header);
*/
const link = document.createElement('link');
link.href = 'https://cdn.discordapp.com/attachments/773914479384985650/1021425143467229194/bvp.png';
link.rel = 'icon';

document.getElementsByTagName('head')[0].appendChild(link);

/*const bildHeader = document.createElement('img');
bildHeader.src = 'https://cdn.discordapp.com/attachments/773914479384985650/1021425143467229194/bvp.png';
bildHeader.alt = 'Better Vertretungsplan Icon im Header';

document.getElementById("titelLinks").appendChild(bildHeader);*/

/*Verbuggten Style der Tabelle zurücksetzen*/
const nodeList = document.querySelectorAll("td");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style = "";
}
function darkMode(){
  console.log()
}
/*Default Farben im LocalStorage speichern*/
if (localStorage.getItem("bgColor") == null){
  console.log("HALLO")
  localStorage.setItem("bgColor", "#010409")
}
/*if (localStorage.getItem("oddColor") == null){
  console.log("HALLO")
  localStorage.setItem("oddColor", "#0D1117")
}*/
if (localStorage.getItem("evenColor") == null){
  console.log("HALLO")
  localStorage.setItem("evenColor", "#161B22")
}
if (localStorage.getItem("roomColor") == null){
  console.log("HALLO")
  localStorage.setItem("roomColor", "#22712E")
}
if (localStorage.getItem("eventColor") == null){
  console.log("HALLO")
  localStorage.setItem("eventColor", "#1B12B1")
}
if (localStorage.getItem("newColor") == null){
  console.log("HALLO")
  localStorage.setItem("newColor", "#E61367")
}
/*Farben*/
let bgColor = localStorage.getItem("bgColor");
let oddColor = localStorage.getItem("oddColor");
let evenColor = localStorage.getItem("evenColor");
let roomColor = localStorage.getItem("roomColor");
let eventColor = localStorage.getItem("eventColor");
let newColor = localStorage.getItem("newColor");
console.log([bgColor, oddColor, evenColor, roomColor, eventColor, newColor])

/*
let titel = "Hallo"
document.title = titel
*/

console.log(getComputedStyle(document.body).getPropertyValue('--main-bg-color'))
document.body.style.setProperty('--main-bg-color', bgColor);

