import { createUser, createItem, addToCart, printCart, cartTotal, removeFromCart } from './functions';

const user = createUser('Joe Schmoe', 25);

const itemA = createItem('Hacky Sack', 10, 'A fun sack that conveniently may be hackied');
const itemB = createItem('Walking Stick', 20, 'Gandalf would be jealous');
const itemC = createItem('Skateboard', 30, 'A wicked skidder');

addToCart(itemA, user);
printCart(user);
console.log('Total:', cartTotal(user));

addToCart(itemB, user);
addToCart(itemC, user);
printCart(user);
console.log('Total:', cartTotal(user));

removeFromCart(itemA, user);
removeFromCart(itemB, user)
removeFromCart(itemC, user)
printCart(user);
console.log('Total:', cartTotal(user));
