/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let primo = 3
let secondo = 5

if (primo<secondo) {
  console.log(primo);
} else  {
  console.log(secondo);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 4
if (number!==5) {
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let number1 = 15 
if (number1%5 === 0) {
  console.log('divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
 let numero1 = 4
 let numero2 = 4
 if (numero1===8 || numero2===8) {
  console.log('numero uguale a otto');
 } else if (numero1+=numero2===8) {
  console.log('la loro somma è 8'); 
 } else if (numero1-=numero2===8) {
  console.log('la sottrazione da come risultato 8');
 } else if (numero2-=numero1===8) {
  console.log('la sottrazione da come risultato 8');
 } else {
  console.log('8 non esiste');
 }
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60
let spedizione = 10

if (totalShoppingCart<50) {
  console.log(totalShoppingCart+spedizione);
} else {
  console.log (totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totale = totalShoppingCart*0.2
let totaleconsconto= totalShoppingCart-totale
if (totaleconsconto<50) {
  console.log(totaleconsconto+spedizione);
} else {
  console.log (totalconsconto);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let x = 9 

if (typeof x ==="number") {
  console.log('true');
} else {
  console.log('false');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 15 
if (numero%2 === 0) {
  console.log('pari');
} else {
  console.log('dispari');
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 
  let val = 8
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7 
if (val < 5) {
  console.log('Meno di 5');
} else if (val < 10) {
  console.log('Meno di 10');
} else {
  console.log('Uguale a 10 o maggiore');
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me);

me.city = 'Toronto';
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log('Array');
const numbers = ['1','2','3','4','5','6','7','8','9','10'];
console.log(numbers);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers[11] = 100;
console.log(numbers[11]);