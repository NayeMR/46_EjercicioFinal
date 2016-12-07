$(document).ready( function(){
	addClase();
	removeClase();
	$('.icon-menu').hide();
	//console.log("HTML LISTO");
	
});
/*Funcion para agregar la clase make*/
function addClase(){
	$('.js-show-make').click(function () {
	   $('.page, .recipe').addClass('make');
	});
}
/*funcion para remover la clase make*/
function removeClase() {
  $('.js-show-recipe').click(function () {
	   $('.page, .recipe').removeClass('make');
	   
	});
}
