angular.module('calculator.services', [])

.factory('Ingredients', function ($http) {
  // Your code here
  
  var ribeye = {
    name: 'Ribeye, Rib Roast',
    category: 'Beef',
    emissions: '39.83',
  };

  var shortRib = {
    name: 'Short Rib',
    category: 'Beef',
    emissions: '18.30',
  };

  var chicken = {
    name: 'Chicken',
    category: 'Poultry',
    emissions: '2.82',
  };

  var potato = {
    name: 'Potato',
    category: 'Vegetables',
    emissions: .22
  };

  var broccoli = {
    name: 'Broccoli',
    category: 'Vegetables',
    emissions: .96
  };

  var pasta = {
    name: 'Pasta',
    category: 'Grain/Legume',
    emissions: 1.01
  };

  var rice = {
    name: 'Rice',
    category: 'Grain/Legume',
    emissions: 2.93
  };

  var transport = {
    shortFlight: 4.78,
    longFlight: 19.10,
    longRoad: .49,
    shortRoad: .05,
    sea: .26
  }

  var ingredDB = {
    ribeye: ribeye,
    shortRib: shortRib,
    chicken: chicken,
    potato: potato,
    broccoli: broccoli,
    pasta: pasta,
    rice: rice 
  };

  var userIngredients = []; 

  var getAll = function() {
    return ingredList;
  }

  var searchIngred = function(name) {
    if(ingredDB[name.toLowerCase()]){
      return ingredDB[name.toLowerCase()];
    } else {
      console.log("Ingredient not in database");
      return null;
    }
  };

  var addIngredient = function (ingred) {
    userIngredients.push(ingred);
  };

  return {
    getAll: getAll,
    searchIngred: searchIngred,
    addIngredient: addIngredient
  };

});

