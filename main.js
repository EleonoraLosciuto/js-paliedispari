// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente = uso un prompt

console.log(isPalindrome(prompt("Inserisci una parola"))); // Note: function is declared below (hoisting)

// Parola palindroma = uguale se letta al contrario // function will have to return a boolean value

function isPalindrome (string) {
    let reverted = string.split("").toReversed().join("");
    let check = (string === reverted);
    return check;
};


//Pari o dispari

//User decide se pari o dispari
//User inserisce un numero da 0 a 5 nel prompt

const UserChoice = prompt("Decidi se pari (p) o dispari (d)");
const UserNum = prompt("Fai la tua giocata: scegli un numero da 0 a 5");

//Funzione: computer genera un numero random da 0 a 5


//Funzione: sommiamo i due numeri e dichiariamo chi ha vinto
