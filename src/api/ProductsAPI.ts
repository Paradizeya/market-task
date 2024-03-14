import { Product, ProductError } from "@src/shared/types";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts: () => Promise<{
  data: Product[];
  error: ProductError;
}> = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error(
        `The server responded with a status of ${response.status} (${response.statusText})`
      );
    }
    const data = await response.json();
    return {
      data: data,
      error: {
        isError: false,
        errorMessage: "",
      },
    };
  } catch (e) {
    const message = (e as Error).message;
    console.error("Ошибка при получении данных:", message);
    return {
      data: [],
      error: {
        isError: true,
        errorMessage: message,
      },
    };
  }
};
