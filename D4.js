/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(b, h) {
    const result = b * h
    return result
} 

console.log("L'area del rettangolo è:", area(11,12))


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numero1, numero2) {
    const somma = numero1 + numero2
      if (numero1 === numero2 ) {
console.log("il risultato della moltiplicazione è:", somma * 3)
    }
      else {
          console.log("il risultato dell'addizione è:" ,somma)
     }
    return somma
}

crazySum(20, 25)
crazySum(25, 25)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
    const diciannove = 19;
    const differenza = Math.abs(num - diciannove)
    console.log("la differenza assoluta dei due parametri è:", differenza)

    if (num > diciannove) {
        const diffMolt = differenza * 3;
        console.log("La differenza assoluta moltiplicata per 3 è:", diffMolt)
        return diffMolt
    }
    return differenza

}

crazyDiff(30)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    
    if ((n > 20 && n <= 100) || n === 400) {
        return true;
    } 
    return false;
}

console.log(boundary(27)); 
console.log(boundary(500)); 

    

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(epicode) {
    if (!epicode.startsWith("EPICODE")) {
        epicode = "EPICODE " + epicode;
    }
    console.log(epicode);
}

epify("insegna a programmare") 



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numeroPos) {

    const multiplo3 = numeroPos % 3;
    const multiplo7 = numeroPos % 7;

    if (multiplo3 === 0)
        console.log("Il numero '" + numeroPos + "' è multiplo di 3");
    
    if (multiplo7 === 0)
        console.log("Il numero '" + numeroPos + "' è multiplo di 7");
        
}

check3and7(9)
check3and7(21)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const joinString = reverseArray.join("");
    console.log(joinString);
    return joinString;
}

reverseString("EPICODE")


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*
function upperFirst(frase) {
    const parole = frase.split(" ");
    console.log(parole);

    return frase
} 

upperFirst("stringa formata da diverse parole") */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
    const tring = stringa.slice(1,6)
    console.log(tring)
    return stringa.slice
}

cutString("stringa")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
