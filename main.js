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
