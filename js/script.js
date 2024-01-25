const userName = prompt("Come ti chiami?");
const userSurname = prompt("Qual'è il tuo cognome?");
const userColor = prompt("Qual'è il tuo colore preferito?");

let pwd = `${userName}${userSurname}${userColor}${23}`;

document.getElementById("name").innerHTML = userName;
document.getElementById("surname").innerHTML = userSurname;
document.getElementById("color").innerHTML = userColor;
document.getElementById("password").innerHTML = pwd;
