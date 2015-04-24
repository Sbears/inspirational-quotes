// $(document).on('ready', function() {






//----------------------------------------------------------------------------------------------

// var Quotes = function(quote, author, rating, avgRating){
//   this.quote = quote;
//   this.author = author;
//   this.rating = 0;
//   this.avgRating = 0;
// };
// //console.log("Quotes ", Quotes);
//   $(".entry-form").on("submit", function(e) {
//     e.preventDefault();
//     var quote = $(".form-quote").val();
//     var author = $(".form-author").val();

//     var oneRow =  new Quotes(quote, author);
//     console.log(oneRow);
//     $(".quote-table").append(oneRow.render());
//     $(".quote, .author").val("");
//   });
// Quotes.prototype.render = function() {
// 	this.el = $("#quote-row-tpl")
// 		.clone()
// 		.attr("id", null);
// //		.addClass("");

//   // Set the values to match the data
//   this.el.find('.author').text(this.author);
//   this.el.find('.quote').text(this.quote);
//   this.el.find('.rating').text(this.rating);
//   // this.el.find('.avg-rating').text(this.avgRating);
//   var quote = this;
//   this.el.find(".rate").on("click", function(){
//    quote.el.find(".rate").hide();
//  //  $(this).after("<input type='number' class='enter-rating'>");
//    console.log("second ", this);
//  }); 
//    // this.el.find(".enter-rating").on("blur", function(){
//    //   console.log("blur ", this);
//    //   var rating = $(this).val();
//    //   console.log("rating ", rating);
//    //   quote.el.find(".enter-rating").hide();
//    //   quote.el.find(".rate").text(rating).css("color", "black").show();
//    //   quote.rating = $(this).val();

//    // });
//   return this.el;
// };

//  var testInstance = new Quotes("What's Up?", "Me");
// // console.log("testInstance ", testInstance.quote);


var Movie = function(title, description){


  this.title = title;
  this.description = description;
  this.render();
};


Movie.prototype.render = function () {

  if(this.el === undefined){
    this.el = $('#movie-tpl')
      .clone()
      .attr('id', null);
  }
  this.el.find('.movie-title').text(this.title);
  this.el.find('.movie-description').text(this.description);
  return this.el;
};

var MovieLibrary = function(name){
  this.name = name;
  this.movies = [];
  this.render();
};


MovieLibrary.prototype.addMovie = function (movie) {


  this.movies.push(movie);

  this.render();
};
//////////////////////////////////////////////////////////////////
MovieLibrary.prototype.render = function () {
  if(this.el === undefined){
    this.el = $('#movie-library-tpl')
      .clone()
      .attr('id', null);

    var originalLibrary = this;
    


    this.el.find('.new-movie-form').on('submit', this.onFormSubmit.bind(this));
  }


  this.el.find('.library-name').text(this.name);


  var movieElements = this.movies.map(function(movie){

    return movie.render();
  });

  this.el.find('.movie-list').append(movieElements);

  return this.el;
};
///////////////////////////////////////////////////////////////


MovieLibrary.prototype.onFormSubmit = function (e) {
  e.preventDefault();
  var movieTitle = $(e.currentTarget).find('[name=movie-title]').val();
  var movieDescription = $(e.currentTarget).find('[name=movie-description]').val();

  var newMovie = new Movie(movieTitle, movieDescription);

  this.addMovie(newMovie);
};

var goonies = new Movie('The Goonies', 'Hey you guyyyyys');

var myLibrary = new MovieLibrary('Great Movies');

myLibrary.addMovie(goonies);

$('body').append(myLibrary.render());

var michaelsLibrary = new MovieLibrary('Michael\'s Library');
$('body').append(michaelsLibrary.render());


 



//-----------------------------------------------------------------------------------------------









