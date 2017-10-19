var app = angular.module('recipe', []);

app.controller('mainCtrl', function($scope) {
$scope.ingredients = [];
$scope.recipes = [];
$scope.coolrecipes = [];
$scope.addIngredient = function(food) {
  $scope.ingredients.push({ing: food.name});
  food.name = '';
};
$scope.addRecipe = function(food) {
  var newrecipe = [];
  for (var x=0; x<$scope.ingredients.length; x++) {
  newrecipe.push({bob: $scope.ingredients[x].ing});
  }
  $scope.recipes.push({rec:food.name,ing:newrecipe});
  $scope.ingredients.length = 0;
  food.name = '';
};
$scope.findIngredient = function(food) {
  $scope.coolrecipes.length = 0;
  for (var i = 0; i < $scope.recipes.length; i++) {
      for (var j = 0; j < $scope.recipes[i].ing.length; j++) {
	   if ($scope.recipes[i].ing[j].bob == food.name) {
		$scope.coolrecipes.push({name:$scope.recipes[i].rec});
}}}
};
});