$(document).on('ready', function() {
	$(".entry-form").on("submit", function(e) {
		e.preventDefault();
		var quote = $(".quote").val();
		var author = $(".author").val();
	console.log(quote);
	console.log(author);

		$(".quote-table").append("<tr><td>" + author + "</td><td>" + quote + "</td><td class='rate'>Rate 1-5</td></tr>")

		$(".quote, .author").val("");
	})

	$(document).on("click", ".rate", function(){

		$(this).hide();
		$(this).after("<input type='number' class='rating'>");
		console.log("second ", this);
	});

  	$(document).on("blur", ".rating", function(){
  		console.log("blur ", this);
  		var rating = $(".rating").val();
  		console.log("rating ", rating);
  		$(".rating").hide();

  		$(".rate").text(rating).show();

  	}) 
});