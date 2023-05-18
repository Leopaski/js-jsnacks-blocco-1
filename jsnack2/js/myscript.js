const VIPlist=[
    'Mario Rossi',
    'Fiorella Mannoia',
    'Chuck Norris',
    'Sofia Goggia',
    'Bruce Lee',
    'Martina Smeraldi',
    'Papa Francesco',
    'Madre Teresa',
    'Valentino Rossi',
    'Cristina Avena',
    'Cristiano Malgioglio',
    'Samantha Cristoforetti',
    'Francesco Totti',
    'La mamma di Francesco Totti',
    'Adrien Rabiot',
    'JK Rowling',
    'Dusan Vlahovic',
    'Cristina Girelli',
    'Paulo Dybala',
    'Tania Cagnotto',
    'Gianluigi Buffon',
    'Valentina Vezzali',
]
const findName = prompt('Inserisci il nome dell invitato');
for (i=0; i< VIPlist.length; i++) {
    if(findName==VIPlist[i]){
        console.log('Buonasera signora/signor'+ $ {VIPlist[i].value} + 'la porto al suo tavolo')
    } else {
        console.log('Siamo desolati, ma lei non è stato invitato');
    }
}