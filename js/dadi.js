const dadoUtente = Math.floor(Math.random(0) * 6) + 1;
const dadoComputer = Math.floor(Math.random(0) * 6) + 1;
console.log(dadoUtente, dadoComputer);
const output = document.getElementById("output");

output.innerHTML = ("Dado dell'utente: " + dadoUtente + "  Dado del computer: " + dadoComputer);

if (dadoUtente === dadoComputer) { //se il risultato dei dati è uguale ritenta
    console.log(" Avete ottenuto lo stesso risultato, ritenta!");
    output.innerHTML += ("<strong> Avete ottenuto lo stesso risultato, ritenta!</strong>");
} else if (dadoUtente < dadoComputer) { //se il dado dell'utente è più basso di quello del computer, l'utente ha perso
    console.log("hai perso!");
    output.innerHTML += ("<strong> Peccato hai perso!</strong>");
} else { //se no ha vinto
    console.log("hai vinto!");
    output.innerHTML += ("<strong> Bravissimo hai vinto! </strong>");
}
