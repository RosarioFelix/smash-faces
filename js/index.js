'use strict'

$(function() {

const ok = $('#ok').hide();
const fail = $('#fail').hide();
const next = $('#next').hide();

let points = $('#points');
let labo;
let coderPais;
let nombrePais;
let contClick;;
let contador = 0;

function showCoders(coderPais,nombrePais) {
        labo = coderPais[Math.round(Math.random() * coderPais.length)];
        $('img').attr('src', 'fotos/' + nombrePais + '/' + labo.image);
        $('img').attr('alt', "coders-Laboratoria")
        console.log(labo);
      }

$('select').on('change', (e) => {
  const option = $("select").val();
  if(option == '1'){
  showCoders(coderPais = peru , nombrePais = "peru");
} else{
  showCoders(coderPais = mexico ,nombrePais = "mexico");
}
});

 $('#boton').on('click',  (e) => {

    contClick += 1;

    let laboName = labo.name.toUpperCase();
    const inputText = $('input').val().toUpperCase();
    const emptyInput = $("input").val("");

function interval(){ // funcion de interval
    showCoders(coderPais,nombrePais);
    emptyInput;
    contClick = 0;
};

  if (inputText == laboName){
    ok.show();
    fail.hide(); // desaparece  el fail  de los intentos.
    points.text(contador += 5);
    console.log(contador);

    setTimeout(function(){
      interval();
      ok.hide()},1800);

} else if((contClick<= 5) && (inputText != laboName)){
      fail.show()
      emptyInput;
      console.log(contClick)

} else if ((contClick >= 5) && (inputText != laboName)){
      fail.hide()
      next.show()
      points.text(contador -=1);

  setTimeout(function(){
      interval();
      next.hide()},1000);
  }

  });
});
