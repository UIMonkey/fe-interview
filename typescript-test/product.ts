export interface Product {
  id: number;
  name: string;
  price: number;
}

export function getDiscountedPrice(product: Product, discount: number): number {
  return product.price * (1 - discount / 100);
}
