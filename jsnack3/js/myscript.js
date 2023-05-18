const oddNumber =[];
for (i=0; i<5;i++) {
    const userNumber = parseInt(prompt ('Inserisci un numero'));
    if (userNumber % 2 !=0){
        oddNumber.push(userNumber)
    }
}
console.log (oddNumber)