$(document).ready( function(){
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$('.js-back').hide();
	printNews();
	renderActivities(activities);
	//renderActivities(activitiesArray)
	

});
/*Funcion para agregar parrafo*/
 function  printNews(event){
 	$('#parrafoCallout').text('"NUEVAS RECETAS"');
 }
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for(var i = 0; i < recipesArray.length; i++)
	{
		if(recipesArray[i].highlighted == true){
			//console.log('elemento que lo tiene es: '+ i);
			renderRecipe(recipesArray[i]);
		}
	}
}
/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
//URL PARA LAS RECETAS
function renderRecipe(recipe) {
	//console.log('Voy a pintar la receta: ', recipe);
	
	//elemento adentro del div
	var a = $('<a class="item-recipe" href="#"></a>');
	var spanAttribution = $('<span class="attribution"></span>');
	var spanTitleRecipe = $('<span class="title-recipe"></span>'); 
	spanTitleRecipe.text(recipe.title);
	var spanMetadataRecipe = $('<span class="metadata-recipe"></span>');
	var spanAuthorRecipe = $('<span class="author-recipe"></span>');
	spanAuthorRecipe.text(recipe.source.name);
	var spanBookmarksRecipe = $('<span class="bookmarks-recipe"></span>');
	var sapanIconBookmark = $('<span class="icon-bookmark"></span>');

	//imagen 
	var img = $('<img>');
	img.attr('src', "img/recipes/640x480/"+ recipe.name +".jpg");


	a.append(spanAttribution);

	spanAttribution.append(spanMetadataRecipe);
	spanAttribution.append(spanTitleRecipe);
	spanMetadataRecipe.append(spanAuthorRecipe);
	spanMetadataRecipe.append(spanBookmarksRecipe);
	spanBookmarksRecipe.append(sapanIconBookmark);
	a.append(img);
	//agrega el a al div
	$('.list-recipes').append(a);
}
/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	console.log('activities: ', activities);
	if(activities.length > 0){
		$('.wrapper-message').hide();
	}
}
/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
    
}


