const userName = prompt("Come ti chiami?");
const userSurname = prompt("Qual'è il tuo cognome?");
const userColor = prompt("Qual'è il tuo colore preferito?");

let pwd = `${userName}${userSurname}${userColor}23`;

document.getElementById("password").innerHTML = pwd;
