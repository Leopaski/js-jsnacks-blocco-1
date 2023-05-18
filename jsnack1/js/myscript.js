let listNumber =[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];
let finalNumber=0;
for (let i=0;i<listNumber.length;i++ ){
   listNumber[i]= parsInt(prompt('Inserisci un numero da sommare'));
   finalNumber= listNumber[i]+finalNumber;
}
console.log(finalNumber);
