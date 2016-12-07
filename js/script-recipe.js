$(document).ready( function(){
	removeClase();
	addClase();
	$('.icon-menu').hide();
	//console.log("HTML LISTO");
	
});
function removeClase() {
  $('.js-show-recipe').click(function () {
	   $('.page, .recipe').removeClass('make');
	   
	});
}
function addClase(){
	$('.js-show-make').click(function () {
	    
	   $('.page, .recipe').addClass('make');
	});
}