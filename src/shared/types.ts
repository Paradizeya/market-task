export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface ProductError {
  isError: boolean;
  errorMessage: string;
}

//Store

export type ExtendedProduct = Product & {
  amount: number;
};

export interface ProductCart {
  products: ExtendedProduct[];
  total: number;
  error: ProductError;
}
