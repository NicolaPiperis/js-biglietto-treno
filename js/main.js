// Dichiare le variabili globali
let numeroKm, userEta, prezzoBase, prezzoFinale;

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere 
numeroKm = parseInt(prompt("Quanti chilometri percorrerai?"));
console.log("I Km da percorrere sono : " + numeroKm + "Km");

// Il programma dovrà chiedere all’utente la sua età
userEta = parseInt(prompt("Quanti anni hai?"));
console.log("L'utente ha : " + userEta + "anni");


// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
prezzoBase = (numeroKm * 0.21)
console.log("Il prezzo Base è :" + prezzoBase + "€");


if (userEta < 18) {// Va applicato uno sconto del 20% per i minorenni
    prezzoFinale = prezzoBase * 20 / 100;
}

// Va applicato uno sconto del 40% per gli over 65.
if else (userEta > 65) {
    prezzoFinale = prezzoBase * 40 / 100;
}
console.log("Il prezzo finale è di " + prezzoFinale + "€");
 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio


// Output

  