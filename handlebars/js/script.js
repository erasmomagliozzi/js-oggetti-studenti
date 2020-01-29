 // fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.
 $(document).ready(function(){
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

$('.invia').click(
  function(){
    var context = {
      messaggio: $('.input').val(),
    }
    var html = template(context);
    $('.mex_utente').append(html);
    setTimeout (myFunction, 1000);
  });


  // ---FUNZIONI
  function myFunction() {
    var context = {
      messaggioPc: 'Okay',
    }
    var html = template(context);
    $('.mex_computer').append(html);
  }





});
