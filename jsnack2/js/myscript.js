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
let find=false;
for (i=0; i< VIPlist.length; i++) {
    if(findName === VIPlist[i] && (find==false)){
        console.log('Buonasera signora/signor $ { VIPlist[i] }la porto al suo tavolo')
        find=true;
    } else {
        console.log('Siamo desolati,ma Lei non è stato invitata/o');
    }
}