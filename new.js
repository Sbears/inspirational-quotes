
var Quotes = function(quote, author, rating, avgRating){
  this.quote = quote;
  this.author = author;
  this.rating = "Rate 1-5";
  this.avgRating = "";
 // this.render();
};

//var quoteInstance = new Quotes( "The Constitution is the guide which I never will abandon", "George",5);




Quotes.prototype.render = function() {
	if(!this.el) {
	this.el = $("#quote-row-tpl")
		.clone()
		.attr("id", null);
		this.el.find('.author-tpl').text(this.author);
	  this.el.find('.quote-tpl').text(this.quote);
	  this.el.find('.rate-tpl').text(this.rating);
	  this.el.find('.avg-rating-tpl').text(this.avgRating);

  
		return this.el;
	}
 };

var quoteArray = [];

  $(".entry-form").on("submit", function(e) {
    e.preventDefault();
    var quote = $(this).find(".form-quote").val();
    var author = $(this).find(".form-author").val();

    var oneRow =  new Quotes(quote, author);
 //   console.log(oneRow);

     $(".quote-table").append(oneRow.render());
     $(".form-quote, .form-author").val("");
     quoteArray.push(oneRow);
    console.log(quoteArray);

	});


		var ratingArray = [];


  $(document).on("click", ".rate-tpl", function(){
   $(".rate-tpl").hide();
   $(this).after("<input type='number' class='enter-rating'>");

 });

	   $(document).on("blur", ".enter-rating", function(){
	//     console.log("blur ", this);
	     var rating = $(this).val();
	     console.log("rating ", rating);
	     ratingArray.push(rating);
	     console.log(ratingArray);
	     console.log(quoteArray);

	     // quote.el.find(".enter-rating").hide();
	     // quote.el.find(".rate").text(rating).css("color", "black").show();
	     // quote.rating = $(this).val();

   });


