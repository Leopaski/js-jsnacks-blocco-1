const oddNumberlist =[];
for (i=0; i<6;i++) {
    const userNumber = parseInt(prompt ('Inserisci un numero'));
    if (userNumber % 2 !=0){
        oddNumberlist.push(userNumber)
    }
    console.log (oddNumberlist);
}
