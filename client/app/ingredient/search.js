angular.module('calculator.search', [])

.controller('SearchController', function ($scope, Ingredients) {

  $scope.item = {};
  $scope.categories = Ingredients.getCategories();
  $scope.selected = false;
  $scope.found = true;

  $scope.toggleFound = function(){
    if($scope.found === false){
      $scope.found = true;
    } else {
      $scope.found = false;
    }
    console.log($scope.input);
  };

  $scope.setInput = function(newInput){
    $scope.input = newInput;
  };

  $scope.setIngred = function (ingred) {
    if(!ingred){
      $scope.item.ingredient = Ingredients.searchIngred($scope.input);
    } else {
      $scope.item.ingredient = ingred;
    }
    if($scope.item.ingredient === null){
      $scope.toggleFound();
    }
  };

  $scope.reset = function (){
    $scope.item = {};
    $scope.input = '';
  };

  $scope.addToList = function() {
    console.log($scope.item);
    Ingredients.addIngredient($scope.item);
    $scope.reset();
  };

  // $scope.allIngreds = function(){
  //   return Ingredients.allIngredients();
  // };

  $scope.getAllIngreds = function () {
    Ingredients.allIngredients()
      .then(function(ingreds) {
        $scope.allIngreds = ingreds;
        console.log(ingreds);
      }).catch(function(err) {
        console.error(err);
      });
  };

  $scope.getAllIngreds();

  $scope.toggleSelected = function() {
    if($scope.selected === false){
      $scope.selected = true;
    } else {
      $scope.selected = false;
    }
  }
});