import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { getProducts } from "./api/ProductsAPI";
import { Product, ProductError } from "./shared/types";
import {
  AppRoot,
  SplitCol,
  SplitLayout,
  Div,
  Group,
  Header,
  CardGrid,
  Card,
} from "@vkontakte/vkui";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<ProductError>({
    isError: false,
    errorMessage: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getProducts();
      setProducts(data);
      setError(error);
    };
    fetchData();
  }, []);

  return (
    <AppRoot>
      <Div>
        <SplitLayout className={styles.wrapper}>
          <SplitCol className={styles.col1}>
            <Group
              mode="card"
              header={<Header mode="primary">Товары в корзине</Header>}
            >
              {error.isError ? (
                <Div
                  className={styles.message}
                >{`Что-то пошло не так! D: \n ${error.errorMessage}`}</Div>
              ) : (
                <CardGrid size="l">
                  {products.map((product: Product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      description={product.description}
                      image={product.image}
                    />
                  ))}
                </CardGrid>
              )}
            </Group>
          </SplitCol>
          <SplitCol className={styles.col2}>
            <Group
              mode="plain"
              className={styles.total}
              header={<Header mode="primary">Сумма</Header>}
            >
              <Div>
                <Card mode="outline">
                  <Div>
                    <b>Итого:</b> {69} руб.
                  </Div>
                </Card>
              </Div>
            </Group>
          </SplitCol>
        </SplitLayout>
      </Div>
    </AppRoot>
  );
}

export default App;
