let inventory = [];

function findProductIndex(name) {
  let lowercaseName = name.toLowerCase();
  let index = -1;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === lowercaseName) {
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
  product.name = product.name.toLowerCase();
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

function removeProduct(name, quantity) {
  name = name.toLowerCase();
  let index = findProductIndex(name);
  if (index != -1) {
    if (inventory[index].quantity < quantity) {
      console.log(`Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`);
    }
    else {
      inventory[index].quantity -= quantity;
      console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);
      if (inventory[index].quantity == 0) {
        inventory.splice(index, 1);
      }
    }
  }
  else {
    console.log(`${name} not found`);
  }
}

console.log(removeProduct("FLOUR", 10));