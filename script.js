let inventory = [
  {
    name: "flour",
    quantity: 10
  }
];

function findProductIndex(name) {
  let lowercaseName = name.toLowerCase();
  let index = -1;
  for (let i = 0; i < inventory.length; i++) {
    if(inventory[i].name.toLowerCase() === lowercaseName){
      index = i;
      break;      
    }    
  }
  return index;
}

console.log(findProductIndex("flour"));
console.log(findProductIndex("FloUr"));
console.log(findProductIndex("Cheese"));

function addProduct(product) {
  let index = findProductIndex(product.name);
  if (index != -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name} quantity updated`);
  }
  else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`);
  }
}

console.log(addProduct({ name: "Beans", quantity: 5 }));