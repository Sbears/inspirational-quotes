// $(document).on('ready', function() {


// 	$(document).on("click", ".rate", function(){

// 		$(this).hide();
// 		$(this).after("<input type='number' class='rating'>");
// 		console.log("second ", this);
// 	});

//   	$(document).on("blur", ".rating", function(){
//   		console.log("blur ", this);
//   		var rating = $(".rating").val();
//   		console.log("rating ", rating);
//   		$(".rating").hide();

//   		$(".rate").text(rating).show();

//   	}) 
// });

//----------------------------------------------------------------------------------------------

// var Quotes = function(quote, author, rating, avgRating){
//   this.quote = quote;
//   this.autor = author;
//   this.rating = rating;
//   this.avgRating = avgRating;
// };
// //console.log("Quotes ", Quotes);

// Quotes.prototype.render = function() {
// 	this.el = $("#quote-row-template")
// 		.clone()
// 		.attr("id", null);
// //		.addClass("");

//   // Set the values to match the data
//   this.el.find('.author').text(this.author);
//   this.el.find('.quote').text(this.quote);
//   // this.el.find('.rating').text(this.rating);
//   // this.el.find('.avg-rating').text(this.avgRating);

//   return this.el;		
// };

//  var testInstance = new Quotes("What's Up", "Me");
// // console.log("testInstance ", testInstance.quote);

// console.log( testInstance.render());

// 	$(".entry-form").on("submit", function(e) {
// 		e.preventDefault();
// 		var quote = $(".quote").val();
// 		var author = $(".author").val();
// 	console.log(quote);
// 	console.log(author);

// 		$(".quote-table").append("<tr><td>" + author + "</td><td>" + quote + "</td><td class='rate'>Rate 1-5</td></tr>")

// 		$(".quote, .author").val("");
// 	});

//-----------------------------------------------------------------------------------------------


function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
 
// anti-pattern! keep reading...
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

var apple = new Apple('macintosh');
apple.color = "reddish";
alert(apple.getInfo());








