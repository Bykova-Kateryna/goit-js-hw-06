const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach((category) => {
    console.log('Category:', category.querySelector('h2').textContent);
    console.log('Elements:', category.querySelectorAll('li').length);
});




// const firstCategory = categories.firstElementChild;
// const firstCategoryTitle = firstCategory.querySelector('h2');
// console.log(`Category: ${firstCategoryTitle.textContent}`);

// const firstCategoryList = firstCategory.querySelector('ul');
// const numberOfFirstCategory = firstCategoryList.children.length;
// console.log('Elements:', numberOfFirstCategory);



// const secondCategory = firstCategory.nextElementSibling;
// const secondCategoryTitle = secondCategory.querySelector('h2');
// console.log(`Category: ${secondCategoryTitle.textContent}`);


// const secondCategoryList = secondCategory.querySelector('ul');
// const numberOfSwcondCategory = secondCategoryList.children.length;
// console.log('Elements:', numberOfSwcondCategory);


// const lastCategory = categories.lastElementChild;
// const lastCategoryTitle = lastCategory.querySelector('h2');
// console.log(`Category: ${lastCategoryTitle.textContent}`);

// const lastCategoryList = lastCategory.querySelector('ul');
// const numberOfLastCategory = lastCategoryList.children.length;
// console.log('Elements:', numberOfLastCategory);


