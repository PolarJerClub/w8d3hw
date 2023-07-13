export type Item = {
    id: string;
    name: string;
    price: number;
    description: string;
  };
  
  export type User = {
    id: string;
    name: string;
    age: number;
    cart: Item[];
  };