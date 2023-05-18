const listNumber =[1,2,3,4,5,6,7,8,9,10];
let finalNumber=0;
for (let i=0;i<listNumber.length;i++ ){
   listNumber[i]= parseInt(prompt('inserisci un numero che vuoi sommare'));
   finalNumber= listNumber[i]+finalNumber;
}
console.log(finalNumber);
