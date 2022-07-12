function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
}
function createMenuItem(name,price,type) {
  console.log(name, price, type)
  return {
    name: name,
    price: price,
    type: type,
  }
}
function addIngredients(food, ingredients) {
    if(!ingredients.includes(food)) {
        ingredients.push(food);
        console.log(food, ingredients)
    return ingredients;
    }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
 price = price * 0.9
 console.log(price)
  return price;
}
function createRecipe(title, ingredients, type){
  recipe = {
  title: title,
  ingredients: ingredients,
  type: type,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


