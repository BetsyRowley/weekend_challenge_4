$(document).ready(function() {
  console.log("jquery sourced");

  init();

  $("#submitForm").on("click", postListing);

});

//function init
function init() {
  getListings();
  // displayForm();
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
      $el.append("<h3><span class = 'label label-primary'>For Sale</span></h3>");
      $el.append("<span class = 'glyphicon glyphicon-home'></span>");
      $el.append("<p>Price: $" + response[i].cost.toLocaleString() + "</p>");
      $el.append("<p>" + response[i].sqft + " Sqft</p>");
      $el.append("<p>" + response[i].city + ", MN</p>");
    } else if(response[i].rent) {
      $el.append("<h3><span class = 'label label-success'>For Rent</span></h3>");
      $el.append("<span class = 'glyphicon glyphicon-home'></span>");
      $el.append("<p>$" + Math.round((response[i].rent/12)).toLocaleString() + "/month</p>");
      $el.append("<p>" + response[i].sqft + " Sqft</p>");
      $el.append("<p>" + response[i].city + ", MN</p>");
    } else {
      $el.append("<p>Property Updating</p>");
    }

  }
}

function displayForm() {

  if(value === "rent") {
    $(".rentalForm").toggle("show");
    $(".sellForm").hide();
  } else {
    $(".sellForm").toggle("show");
    $(".rentalForm").hide();
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

function postListing(event) {
  event.preventDefault();
  var listing = {};
  listing.cost = $("#price").val();
  listing.sqft = $("#sqft").val();
  listing.city = $("#city").val();
  $("#price").val("");
  $("#sqft").val("");
  $("#city").val("");
  console.log(listing);
  $.ajax({
    type: "POST",
    url: "/listings",
    data: listing,
    success: function(response) {
      getListings();
      alert("You're new listing has been posted!");
    }
  }); //end of ajax request
}
