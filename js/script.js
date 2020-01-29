$(document).ready(
  function(){
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

    // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

    var listaStudenti = [
      {
        'nome' : 'Marco',
        'cognome' : 'Rossi'
      },
      {
        'nome' : 'Andrea',
        'cognome' : 'Bianchi'
      },
      {
        'nome' : 'Francesco',
        'cognome' : 'Verdi'
      },
      {
        'nome' : 'Paolo',
        'cognome' : 'Dipinto'
      }
    ]
    for(var j=0; j < listaStudenti.length; j++){
      var studente = listaStudenti[j];
      console.log(studente.nome + ' '+ studente.cognome);

    }

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

    var newStudente = {
      'nome' : '',
      'cognome' : '',
      'eta' : ''
    }

    // var newNome = prompt('inserisci il tuo nome');
    // console.log(newStudente.nome + newNome);
    // var newCognome = prompt('inserisci il tuo cognome');
    // console.log(newStudente.cognome + newCognome);
    // var newEta = parseInt(prompt('inserisci la tua età'));
    // console.log(newStudente.eta + newEta);
    var newNome = prompt('inserisci il tuo nome');
    newStudente['nome'] = newNome;
    var newCognome = prompt('inserisci il tuo cognome');
    newStudente['cognome'] = newCognome;
    var newEta = parseInt(prompt('inserisci la tua età'));
    newStudente['eta'] = newEta;
    console.log(newStudente);


    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'nome': newNome,
      'cognome': newCognome,
      'eta' : newEta
    };
    var html = template(context);
    $('.list').append(html);





  });
