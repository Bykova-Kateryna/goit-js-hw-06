const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
ingredients.map((ingredient) => {
  const itemElements = document.createElement('li');
  itemElements.classList.add('item');
  itemElements.textContent = ingredient;
  ingredientsList.append(itemElements)
})

// const elementForList = [];

// for (let i = 0; i < ingredients.length; i += 1){
//   const ingredient = ingredients[i];

//   const itemElements = document.createElement('li');
//   itemElements.classList.add('item');
//   itemElements.textContent = ingredient;

//   elementForList.push(itemElements)
// }

// ingredientsList.append(...elementForList)