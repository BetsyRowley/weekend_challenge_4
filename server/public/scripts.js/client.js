$(document).ready(function() {
  console.log("jquery sourced");

  getListings();

});

//function init
function init() {
  getListings();
}

//function eventListeners

//Event Handlers

//DOM Methods

// function appendListings(listings) {
//
// }

//REST Interface

function getListings(){
  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response) {
      // appendListings(response);
      $(".listingContainer").empty();
      for (var i = 0; i < response.length; i++) {
        var $el = $(".listingContainer").children().last();
        $el.append("<p>" + response[i].cost + "</p>");
        $el.append("<p>" + response[i].cost + "</p>");
        $el.append("<p>" + response[i].cost + "</p>");
      }
    }
  }); //end of ajax request
} // end of function
