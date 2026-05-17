// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente = uso un prompt - Risultato mostrato con alert

alert(isPalindrome(prompt("Inserisci una parola").toLowerCase())); // Note: function is declared below (hoisting)

// Parola palindroma = uguale se letta al contrario // function will have to return a string after checking a boolean value

function isPalindrome (string) {
    let reverted = string.split("").toReversed().join("");
    let check = (string === reverted);
    if (check) {
        return "la parola é palindroma"
    }
    else {
        return "la parola non é palindroma"
    }
};




//Pari o dispari
//User decide se pari o dispari
//User inserisce un numero da 0 a 5 nel prompt

let userChoice = prompt("Decidi se pari (p) o dispari (d)").toLowerCase();

//Controllo per input errati
if (userChoice === "pari") {userChoice = "p";
} else if (userChoice === "dispari") {userChoice = "d";
} else if (userChoice !== "p" && userChoice !== "d") {
    alert("input non valido: imposto automaticamente pari per il giocatore");
    userChoice = "p";
};

const UserNum = parseInt(prompt("Fai la tua giocata: scegli un numero da 0 a 5"), 10);
const PcNum = rdm(0, 5); //funzione rdm definita sotto (hoisting)
alert(`il computer gioca: ${PcNum}`); 
alert(evenOroddWins(UserNum, PcNum, userChoice)); //funzione evenOrOddWins definita sotto (hoisting)

//Funzione: computer genera un numero random da 0 a 5
function rdm(min, max) // funzione che genera un numero random tra min e max - parametri sono min e max
{ let rdmValue = (min + Math.floor(Math.random() * (max - min + 1)));
    return rdmValue;
};

//Funzione: sommiamo i due numeri e dichiariamo chi ha vinto
function evenOroddWins(num1, num2, user_pref) // funzione che somma due numeri e dichiara chi ha vinto - parametri sono i due numeri da sommare e la scelta del giocatore (pari o dispari)
{   let sum = num1 + num2;
    let isEven = (sum % 2 === 0);
    if ((isEven && user_pref === "p") || (!isEven && user_pref === "d")) {
        return ("You Win :)");
    }
    else {
        return ("You Lost :(");
    }
};
