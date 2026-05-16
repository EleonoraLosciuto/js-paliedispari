// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente = prompt

isPalindrome(prompt("Inserisci una parola")); // Note: function is declared below (hoisting)

// Parola palindroma = uguale se letta al contrario

function isPalindrome (string) {
    let reverted = string.split("").toReversed().join("");
    let isPalindrome = (string === reverted);
    return console.log (isPalindrome);
};
