import { v4 as uuidv4 } from 'uuid';
import { User, Item } from './types';

export function createUser(name: string, age: number): User {
  return {
    id: uuidv4(),
    name,
    age,
    cart: [],
  };
}

export function createItem(name: string, price: number, description: string): Item {
  return {
    id: uuidv4(),
    name,
    price,
    description,
  };
}

export function addToCart(item: Item, user: User): void {
  user.cart.push(item);
}

export function removeFromCart(item: Item, user: User): void {
  user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}

export function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
  const itemIndex = user.cart.findIndex((cartItem) => cartItem.id === item.id);
  if (itemIndex !== -1) {
    const itemInCart = user.cart[itemIndex];
    if (itemInCart) {
      if (itemInCart.price < quantity) {
        user.cart.splice(itemIndex, 1);
      } else {
        itemInCart.price -= quantity;
      }
    }
  }
}

export function cartTotal(user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
}

export function printCart(user: User): void {
  console.log('Your cart:');
  user.cart.forEach((item) => {
    console.log(`- ${item.name}: $${item.price}`);
  });
}