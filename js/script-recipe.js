$(document).ready( function(){
	addClase();
	removeClase();
	$('.icon-menu').hide();
	$('.js-back').show();
	clickFlecha()
	//console.log("HTML LISTO");
	//window.location = 'index.html';
	
});
/*Funcion para agregar la clase make y modifica la clase active*/
function addClase(){
	$('.js-show-make').click(function () {
	   $('.page, .recipe').addClass('make');
	   $('.js-show-make').addClass('active');
	   $('.js-show-recipe').removeClass('active'); 
	});
};
/*funcion para remover la clase make y modifica la clase active*/
function removeClase() {
  $('.js-show-recipe').click(function () {
	   $('.page, .recipe').removeClass('make');
	   $('.js-show-recipe').addClass('active'); 
	   $('.js-show-make').removeClass('active'); 
	});
};
function clickFlecha(){
	$('.js-back').click(function(){
		window.location = 'index.html';

	});
};
	
