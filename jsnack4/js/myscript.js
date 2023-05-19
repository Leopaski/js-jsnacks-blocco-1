let number = prompt('inserisci un numero di 4 cifre')
if(!(number>999 && number < 9999)) {
    number= prompt('inserisci un numero di 4 cifre');
}
let sum=0;
for (let i=0; i < number.length; i++){
    sum += parseInt(number.charAt(i));
}
console.log(number)