$(document).ready( function(){
	addClase();
	removeClase();
	$('.icon-menu').hide();
	//console.log("HTML LISTO");
	
});
/*Funcion para agregar la clase make y modifica la clase active*/
function addClase(){
	$('.js-show-make').click(function () {
	   $('.page, .recipe').addClass('make');
	   $('.js-show-make').addClass('active');
	   $('.js-show-recipe').removeClass('active'); 
	});
}
/*funcion para remover la clase make y modifica la clase active*/
function removeClase() {
  $('.js-show-recipe').click(function () {
	   $('.page, .recipe').removeClass('make');
	   $('.js-show-recipe').addClass('active'); 
	   $('.js-show-make').removeClass('active'); 
	});
}
