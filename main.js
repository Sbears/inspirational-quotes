// $(document).on('ready', function() {






//----------------------------------------------------------------------------------------------

var Quotes = function(quote, author, rating, avgRating){
  this.quote = quote;
  this.author = author;
  this.rating = 0;
  this.avgRating = 0;
};
//console.log("Quotes ", Quotes);
  $(".entry-form").on("submit", function(e) {
    e.preventDefault();
    var quote = $(".form-quote").val();
    var author = $(".form-author").val();

    var oneRow =  new Quotes(quote, author);
    console.log(oneRow);
    $(".quote-table").append(oneRow.render());
    $(".quote, .author").val("");
  });
Quotes.prototype.render = function() {
	this.el = $("#quote-row-tpl")
		.clone()
		.attr("id", null);
//		.addClass("");

  // Set the values to match the data
  this.el.find('.author').text(this.author);
  this.el.find('.quote').text(this.quote);
  this.el.find('.rating').text(this.rating);
  // this.el.find('.avg-rating').text(this.avgRating);
  var quote = this;
  this.el.find(".rate").on("click", function(){
   quote.el.find(".rate").hide();
 //  $(this).after("<input type='number' class='enter-rating'>");
   console.log("second ", this);
 }); 
   // this.el.find(".enter-rating").on("blur", function(){
   //   console.log("blur ", this);
   //   var rating = $(this).val();
   //   console.log("rating ", rating);
   //   quote.el.find(".enter-rating").hide();
   //   quote.el.find(".rate").text(rating).css("color", "black").show();
   //   quote.rating = $(this).val();

   // });
  return this.el;
};

 var testInstance = new Quotes("What's Up?", "Me");
// console.log("testInstance ", testInstance.quote);





 



//-----------------------------------------------------------------------------------------------


// function Apple (type) {
//     this.type = type;
//     this.color = "red";
//     this.getInfo = getAppleInfo;
// }

// // anti-pattern! keep reading...
// function getAppleInfo() {
//     return this.color + ' ' + this.type + ' apple';
// }

// var apple = new Apple('macintosh');
// apple.color = "reddish";
// alert(apple.getInfo());








