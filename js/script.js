// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
var studente = {
  'nome' : 'Carlo',
  'cognome' : 'De Rossi',
  'eta' : 20
}

for(var key in studente){
  console.log(key + ' : ' + studente[key]);
}
