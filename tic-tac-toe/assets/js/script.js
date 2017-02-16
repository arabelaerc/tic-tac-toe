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
//    button.text(cambioTurno);
//}
//Set Game Icons to table
var turno = true;
var counter1 = 0;
var counter2 = 0;

$(".button-player").click(function( event ){
    var button = $(event.target);
    //var cambioTurno = turno ? 'X' : 'O';
    //setButtonText( button, cambioTurno );
    if (turno == true){
      button.text("X");
      counter1++;
      $("#counter1").text(counter1);
    }
    else if (turno == false){
      button.text("O");
      counter2++;
      $("#counter2").text(counter2);
    }else{};

    if ($(".one").val() == 'X' && $(".two").val() == 'X' && $(".three").val() == 'X'){
        alert("win");
    }

    turno = !turno;
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
