const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
for(let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write a for loop that prints out the contents of ingredients:
let n = 0;
while(n <= ingredients.length) {
  console.log(ingredients[n]);
  n += 1;
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let x = ingredients.length - 1; x >= 0; x--) {
  console.log(ingredients[x]);
}