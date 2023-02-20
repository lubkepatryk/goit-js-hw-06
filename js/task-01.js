const categoriesList = document.querySelectorAll("#categories .item");
const categoriesCount = categoriesList.length;
console.log(`Number of categories: ${categoriesCount}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li");
  const categoryItemCount = categoryItems.length;
  console.log(`Category: ${categoryName} 
Elements: ${categoryItemCount}`);
});
