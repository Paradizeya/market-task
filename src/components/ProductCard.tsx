import styles from "./styles.module.css";
import { PublicProduct } from "@src/shared/types";
import {
  Button,
  ButtonGroup,
  Card,
  Div,
  IconButton,
  Title,
} from "@vkontakte/vkui";
import { Icon36Delete } from "@vkontakte/icons";

export default function ProductCard({
  title,
  image,
  price,
  description,
}: PublicProduct) {
  return (
    <Card mode="shadow">
      <Div className={styles.card}>
        <img className={styles.cardImg} src={image} alt={title} />
        <div className={styles.cardBody}>
          <Title level="2">{title}</Title>
          <p>{description}</p>
          <b>{price} руб.</b>
          <ButtonGroup stretched align="center" gap="m">
            <Button size="m" appearance="negative">
              -
            </Button>
            <div className={styles.cardAmount}>69</div>
            <Button size="m" appearance="positive">
              +
            </Button>
          </ButtonGroup>
          <IconButton className={styles.cardDelete} label="Удалить">
            <Icon36Delete />
          </IconButton>
        </div>
      </Div>
    </Card>
  );
}
