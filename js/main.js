const emailUtente = prompt("inserisci la tua email: ");
const email = ["classe79@gmail.com", "mariorossi@gmail.com", "giorgiaventurelli@gmail.com", "giuseppeverdi@gmail.com"];

console.log(email);
console.log(emailUtente);
let trovato = false;

for (let i = 0; i < email.length; i++) {
    if (emailUtente === email[i]) {
        trovato = true;
        console.log(email[i] + " hai inserito correttamente la tua email " + i);
    }
}
if (trovato === true) {
    const titleEl = document.querySelector(".title");
    titleEl.innerHTML = "<strong>L'email che hai inserito è corretta!</strong>";
} else {
    alert("L'email cercata non è stata trovata");
}