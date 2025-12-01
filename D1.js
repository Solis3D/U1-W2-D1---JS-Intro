/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* RISPOSTA

Number: variabile di tipo numero, sia decimale che intero. Il programma riconoscerà da solo interi e decimali.

Stringa: variabile di tipo testuale, ovvero una sequenza di caratteri.Può essere scritta con singolo apice (es. 'Giovanni') oppure doppio apice (es. "Giovanni"). E' preferibile il secondo metodo. 
Anche un numero può essere salvato come stringa se viene scritto con gli apici, es. "42". 

Boolean: variabile booleana, cioè che può avere due valori, true o false (vero o falso). 

Null: valore vuoto, nullo. Ovvero si usa per rappresentare assenza intenzionale di valore. 

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Davide";
console.log("Esercizio 2:", "myName =", myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

// metodo 1
let sum = 12 + 20;

console.log("Esercizio 3:", "metodo 1", "Il risultato della somma è", sum);

// metodo 2
let num1 = 12;
let num2 = 20;
let sum2 = num1 + num2;

console.log("Esercizio 3:", "metodo 2", "Il risultato della somma è", sum2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log("Esercizio 4:", "variabile x =", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Aversano";
const numero = 42;

console.log("Esercizio 5:", "myName =", myName, ".", "La costante 'numero' ha il valore:", numero);

// numero = 43;
// console.log("Esercizio 5:", numero);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sub = 4 - x;
console.log("Esercizio 6", "Il risultato della sottrazione è:", sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
let exResult;

console.log("Esercizio 7:", "il risultato è =", name1 !== name2);

if (name1 !== name2) {
  exResult = "Quindi name1 e name2 sono diversi!";
} else {
  exResult = "Quindi name1 e name2 sono uguali!";
}

console.log(exResult);

if (name1 !== name2.toLowerCase()) {
  exResult = "name1 e name2 ora sono diversi!";
} else {
  exResult = "name1 e name2 ora sono uguali!";
}

console.log("Esercizio 7 Extra:", exResult, "perché usando la funzione .toLowerCase(), name1 =", name1, "e name2 =", name2.toLowerCase(), ":)");
