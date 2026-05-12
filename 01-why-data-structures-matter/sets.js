let grocery_list = new Set(['bread', 'milk', 'eggs']);

console.log(grocery_list);

grocery_list.add('eggs');

console.log(grocery_list); // Did not insert 'eggs' again => Set(3) { 'bread', 'milk', 'eggs' }
