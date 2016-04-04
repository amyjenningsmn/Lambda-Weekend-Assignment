$(function () {

$.get("http://www.omdbapi.com/?t=the+royal+tenenbaums&y=&plot=short&r=json").done(function(response){
    var royal = response;
    $(".one").append(addMoviesToDom(royal, ".one"));
})

$.get("http://www.omdbapi.com/?t=amelie&y=2001&plot=short&r=json").done(function(response2){
    var amelie = response2;
    $(".two").append(addMoviesToDom(amelie, ".two"));
})

$.get("http://www.omdbapi.com/?t=star+wars+&y=1977&plot=short&r=json").done(function(response3){
    var starWars = response3;
    $(".three").append(addMoviesToDom(starWars, ".three"));
})

$(".btnOne").on("click", function(){
  $(".one").toggle("slow");
});

$(".btnTwo").on("click", function(){
  $(".two").toggle("slow");
});

$(".btnThree").on("click", function(){
  $(".three").toggle("slow");
})

function addMoviesToDom(movieObject, addWhere){
  var poster = movieObject.Poster;
  var plot = movieObject.Plot;
  var genre = movieObject.Genre;
  var year = movieObject.Year;
  var rated = movieObject.Rated;
  var runtime = movieObject.Runtime;
  var director = movieObject.Director;
  var writer = movieObject.Writer;
  var actors = movieObject.Actors;
  var awards = movieObject.Awards;
  var imdbRating = movieObject.imdbRating;
  var imdbVotes = movieObject.imdbVotes;

  $(addWhere).prepend("<img src=" + poster + ">");
  $(addWhere).append("<h3>" + plot + "</h3>");
  $(addWhere).append("<h4>Released in " + year + ", Rated " + rated + ", Runtime of " + runtime + "utes.</h4>");
  $(addWhere).append("<li>Starring: " + actors + "</li>");
  $(addWhere).append("<li>Directed by: " + director + "</li>");
  $(addWhere).append("<li>Awards: " + awards + "</li>");
  $(addWhere).append("<li>IMDb Rating: " + imdbRating + "</li>");
  $(addWhere).append("<li>IMDb Votes: " + imdbVotes + "</li></ul>");
}
// end of doc ready
})
