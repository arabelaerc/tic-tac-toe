// Disabled Button for tic-tac-toe view
$(document).ready(function() {
   $("#button-send").prop("disabled", true);
   $('input[type="text"]').keypress(function() {
      if($(this).val() !=="" && $(this).val() !== 0 && $(this).val() !== null ) {
         $("#button-send").prop("disabled", false);
      }else{
        $("#button-send").prop("disabled", true);
      }
   });
   // Set data in tic-tac-toe view
   document.getElementById("play1").innerHTML = localStorage.getItem("playerOne");
   document.getElementById("play2").innerHTML = localStorage.getItem("playerTwo");
});
//function setButtonText( button , cambioTurno ){
//s button.text(cambioTurno);
//}
//var cambioTurno = turno ? 'X' : 'O';
//setButtonText( button, cambioTurno );
//Set Game Icons to table
var turno = 0;
var counter1 = 0;
var counter2 = 0;
var x = '<span class="x">X</span>';
var o = '<span class="o">O</span>';

$(".button-player").click(function( event ){
    var button = $(event.target);
    if (turno%2 == 0){
      button.append(x);
      counter1++;
      $("#counter1").text(counter1);
    }
    else{
      button.append(o);
      counter2++;
      $("#counter2").text(counter2);
    }
    turno = !turno;

    if ($(".one").children().hasClass("x") && $(".two").children().hasClass("x") && $(".three").children().hasClass("x") ||
     $(".four").children().hasClass("x") && $(".five").children().hasClass("x") && $(".six").children().hasClass("x") ||
      $(".seven").children().hasClass("x") && $(".eight").children().hasClass("x") && $(".nine").children().hasClass("x")||
      $(".one").children().hasClass("x") && $(".five").children().hasClass("x") && $(".nine").children().hasClass("x")||
      $(".three").children().hasClass("x") && $(".five").children().hasClass("x") && $(".seven").children().hasClass("x")){
  	    alert('X ganó')
     }
    else if ($(".one").children().hasClass("o") && $(".two").children().hasClass("o") && $(".three").children().hasClass("o") ||
     $(".four").children().hasClass("o") && $(".five").children().hasClass("o") && $(".six").children().hasClass("o") ||
      $(".seven").children().hasClass("o") && $(".eight").children().hasClass("o") && $(".nine").children().hasClass("o")||
      $(".one").children().hasClass("o") && $(".five").children().hasClass("o") && $(".nine").children().hasClass("o")||
      $(".three").children().hasClass("o") && $(".five").children().hasClass("o") && $(".seven").children().hasClass("o")) {
        alert('O ganó')
    }
});


//Get names of players first screen
document.getElementById("button-send").onclick = function(e){
 window.location="second-screen.html";
 e.preventDefault();
 var playerOne = document.getElementById("player1").value;
 var playerTwo = document.getElementById("player2").value;
 window.localStorage.setItem("playerOne",playerOne);
 window.localStorage.setItem("playerTwo",playerTwo);
}
