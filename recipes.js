var app = angular.module('recipes', []).controller('mainCtrl',mainCtrl);

function mainCtrl ($scope) {
$scope.ingredients = [];
$scope.recipes = [];
$scope.addIngredient = function(food) {
  $scope.ingredients.push({food: food.name});
  console.log('food');
};
$scope.addRecipe = function(food) {
  var newrecipe = [];
  for (var x=0; x<$scope.ingredients.length; x++) {
  newrecipe.push({ing: $scope.ingredients[x].name});
  }
  $scope.recipes.push({name:food.name, ing:$scope.ingredients.food});
};
$scope.findIngredient = function(food) {
  console.log(food);
};
}