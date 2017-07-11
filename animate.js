

$(document).ready(function(){
  	$('#title').fadeTo(1500, 1, function() {});
  	$('#subtitle').fadeTo(3000, 1, function() {});
  	// Add smooth scrolling to all links in navbar and footer
  	$(".navbar a, footer a[href='#sonika_page']").on('click', function(event) {
	if (this.hash !== "") {
	  event.preventDefault();
	  // Store hash
	  var hash = this.hash;

	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 900, function(){

	    window.location.hash = hash;
	  });
	}
  });

    var scroll_start = 0;
    var startchange = $('#about');
    var offset = startchange.offset();
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > (offset.top - 60)) {
          $('.navbar').css('background-image', 'url("images/stars.jpg")');
          $('.navbar').css('background-size', 'cover');
       } else {
          $('.navbar').css('background', 'transparent');
       }

	  $(".slideanim").each(function(){
	    var pos = $(this).offset().top;

	    var winTop = $(window).scrollTop();
	    if (pos < winTop + 600) {
	      $(this).addClass("slide");
	    }
	  });

    });

})