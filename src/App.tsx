import styles from "./App.module.css";
import { useEffect } from "react";

import { ExtendedProduct } from "./shared/types";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { populateCartAsync } from "./store/ProductCart/slice";
import { useFormatCurrency } from "./hooks/useFormatCurrency";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const total = useSelector((state: RootState) => state.ProductCart.total);
  const formattedTotal = useFormatCurrency(total).replace("₽", "руб.");
  const products = useSelector(
    (state: RootState) => state.ProductCart.products
  );
  const error = useSelector((state: RootState) => state.ProductCart.error);

  useEffect(() => {
    dispatch(populateCartAsync());
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
                  {products.map((product: ExtendedProduct) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      amount={product.amount}
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
                    <b>Итого:</b> {formattedTotal}
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
