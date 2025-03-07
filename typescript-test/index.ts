// Run `npm start` in the terminal

import { User } from "./user";
import { getDiscountedPrice } from "./product";

const user = new User("John", 30);
console.log(user.greet());

// This should calculate a discounted price for a product
const product = { id: 1, name: "Laptop", price: "1000" };
const discount = 20;

// TODO - Fix the typescript error here ---
console.log(`Discounted Price: ${getDiscountedPrice(product, discount)}`);
