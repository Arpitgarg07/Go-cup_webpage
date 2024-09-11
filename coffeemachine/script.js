$('.make-coffee').click( function() {
	$('.machine').addClass('active');
	
	setTimeout(function () { 
		$('.machine').removeClass('active');
	}, 5300);  
});