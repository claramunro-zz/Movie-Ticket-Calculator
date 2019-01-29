// Business Logic
function Ticket(movie, time, age) {
  this.movie = movie,
  this.time = time,
  this.age = age
}

Ticket.prototype.outputLogic = function(newTicket) {
  if (newTicket.movie != "pokemonIMAX" && newTicket.age === "over55" ) {
    $("#priceOne").show();
    $("#priceTwo").hide();
    $("#priceThree").hide();
    $("#priceFour").hide();
  } else if (newTicket.movie != "pokemonIMAX" && newTicket.age === "under18" && newTicket.time === "am") {
    $("#priceTwo").show();
    $("#priceOne").hide();
    $("#priceThree").hide();
    $("#priceFour").hide();
  } else if (newTicket.movie != "pokemonIMAX" && newTicket.age === "over18" || newTicket.age === "pm") {
    $("#priceThree").show();
    $("#priceTwo").hide();
    $("#priceOne").hide();
    $("#priceFour").hide();
  } else if (newTicket.movie === "pokemonIMAX") {
    $("#priceFour").show();
    $("#priceThree").hide();
    $("#priceTwo").hide();
    $("#priceOne").hide();
  } else {
    $("#priceTwo").show();
    $("#priceOne").hide();
    $("#priceThree").hide();
    $("#priceFour").hide();
  }
}

// User Interface Logic
var ticket = new Ticket();

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("input:radio[name=movie]:checked").val();
    var inputtedTime = $("input:radio[name=time]:checked").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    console.log(newTicket);
    ticket.outputLogic(newTicket);

  });

});