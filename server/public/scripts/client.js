$(document).ready(function() {
  console.log("jquery sourced");

  init();

});

//function init
function init() {
  getListings();
}

//function eventListeners

//Event Handlers

//DOM Methods

function appendListings(response) {
  $(".listingContainer").empty();
  for (var i = 0; i < response.length; i++) {
    $(".listingContainer").append("<div class = 'well col-md-3'></div>");
    var $el = $(".listingContainer").children().last();
    if(response[i].cost) {
      $el.append("<p>For Sale</p>");
      $el.append("<p>Cost: $" + response[i].cost.toLocaleString() + "</p>");
    } else if(response[i].rent) {
      $el.append("<p>For Rent</p>");
      $el.append("<p>Rent: $" + response[i].rent.toLocaleString() + "</p>");
    } else {
      $el.append("<p>Property Updating</p>");
    }
    $el.append("<p>" + response[i].sqft + " sqft</p>");
    $el.append("<p>" + response[i].city + ", MN</p>");
  }
}

//REST Interface

function getListings(){

  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response) {
      console.log(response);
      appendListings(response);
    }
  }); //end of ajax request
} // end of function
