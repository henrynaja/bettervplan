/*Blendet die Hofdienst Box aus*/
const hofdienst = document.querySelector("table.info  tr:nth-child(2)  td");
if (hofdienst.innerHTML.includes("Hofdienst:")){
  hofdienst.setAttribute("id", "hofdienst")
  document.body.style.setProperty('--main-hofdienst', "none");
}

const footerClass = document.querySelector("footer");
footerClass.innerHTML = "©2019-2025 Musterschule. Pläne bereitgestellt von Untis Stundenplan Software <br><br> <a href=https://github.com/henrynaja/bettervplan>BetterVPlan</a> Version 1.3.4 © 10/2025 by <a href=https://github.com/henrynaja>HenryNaja</a> under <a href=https://www.gnu.org/licenses/gpl-3.0.txt0>GNU GPL 3.0</a>"


/*Color Code zum teilen mit Freunden erstellen*/
/*Dark Mode Button hinzufügen*/
/*
let header = document.createElement('button');
header.textContent = "Dark Mode";
header.id = "darkmode";
header.setAttribute("onclick", "darkMode()");
document.body.appendChild(header);
*/
/*Fügt eigenes Icon für den Tab ein*/ 
const link = document.createElement('link');
link.href = 'https://github.com/henrynaja/bettervplan/blob/e38a3221a8b42ed2d6fd06e74d2dde08926c95bf/icons/bvp.png?raw=true';
link.rel = 'icon';

document.getElementsByTagName('head')[0].appendChild(link);

/*Verbuggten Style der Tabelle zurücksetzen*/
const nodeList = document.querySelectorAll("td");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style = "";
}

/*Default Farben im LocalStorage speichern*/
if (localStorage.getItem("bgColor") == null){
  localStorage.setItem("bgColor", "#010409")
}
/*if (localStorage.getItem("oddColor") == null){
  localStorage.setItem("oddColor", "#0D1117")
}*/
if (localStorage.getItem("evenColor") == null){
  localStorage.setItem("evenColor", "#161B22")
}
if (localStorage.getItem("roomColor") == null){
  localStorage.setItem("roomColor", "#22712E")
}
if (localStorage.getItem("eventColor") == null){
  localStorage.setItem("eventColor", "#1B12B1")
}
if (localStorage.getItem("newColor") == null){
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


document.body.style.setProperty('--main-bg-color', bgColor);

/*Verbesserung der Tabellenbeschriftungen*/
document.querySelector("tr.list:nth-child(2) th:nth-child(2)").innerHTML = "Stunden"
document.querySelector("tr.list:nth-child(2) th:nth-child(3)").innerHTML = "statt Lehrer"
document.querySelector("tr.list:nth-child(2) th:nth-child(4)").innerHTML = "statt Fach"
document.querySelector("tr.list:nth-child(2) th:nth-child(5)").innerHTML = "Lehrer bzw. Vertretung"


document.getElementsByTagName('body')[0].appendChild(script);




const inputColor = document.createElement('input');
inputColor.placeholder = 'Farbe eingeben';
inputColor.id = 'inputColor';
inputColor.setAttribute("onkeydown", "functInputColor()");

document.getElementsByTagName('body')[0].appendChild(inputColor);

