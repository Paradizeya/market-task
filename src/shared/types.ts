export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ProductError {
  isError: boolean;
  errorMessage: string;
}

type PublicProduct = Omit<Product, "category">;

//Store

export type ExtendedProduct = PublicProduct & {
  amount: number;
};

export interface ProductCart {
  products: ExtendedProduct[];
  total: number;
}
