import styles from "./styles.module.css";
import { ExtendedProduct } from "@src/shared/types";
import {
  Button,
  ButtonGroup,
  Card,
  Div,
  IconButton,
  Title,
} from "@vkontakte/vkui";
import { Icon36Delete } from "@vkontakte/icons";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeProductById,
} from "@src/store/ProductCart/slice";
import { useFormatCurrency } from "@src/hooks/useFormatCurrency";

export default function ProductCard({
  id,
  title,
  image,
  price,
  description,
  amount,
}: ExtendedProduct) {
  const dispatch = useDispatch();

  const formattedPrice = useFormatCurrency(price).replace("₽", "руб.");

  return (
    <Card mode="shadow">
      <Div className={styles.card}>
        <img className={styles.cardImg} src={image} alt={title} />
        <div className={styles.cardBody}>
          <Title level="2">{title}</Title>
          <p>{description}</p>
          <b>{formattedPrice}</b>
          <ButtonGroup stretched align="center" gap="m">
            <Button
              size="m"
              appearance="negative"
              disabled={amount === 1}
              onClick={() => dispatch(decrement(id))}
            >
              -
            </Button>
            <div className={styles.cardAmount}>{amount}</div>
            <Button
              size="m"
              appearance="positive"
              disabled={amount === 10}
              onClick={() => dispatch(increment(id))}
            >
              +
            </Button>
          </ButtonGroup>
          <IconButton
            className={styles.cardDelete}
            label="Удалить"
            onClick={() => dispatch(removeProductById(id))}
          >
            <Icon36Delete />
          </IconButton>
        </div>
      </Div>
    </Card>
  );
}
