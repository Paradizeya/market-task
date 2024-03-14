export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type PublicProduct = Omit<Product, "category">;

export interface ProductError {
  isError: boolean;
  errorMessage: string;
}
