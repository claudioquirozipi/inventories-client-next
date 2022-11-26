import Link from "next/link";

import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  addProductToShoppingCart,
  removeAllAmountProdcutToShoppingCart,
  removeProdcutToShoppingCart,
} from "../../modules/shoppingcart/shoppingcart.store";
import { CardProductShoppingcartProps } from "./interface";
import { useAppDispatch } from "../../modules/store";
import style from "./style.module.css";

const CardProductShoppingcart = (props: CardProductShoppingcartProps) => {
  const { shoppingCart } = props;
  const { product } = shoppingCart;
  const dispatch = useAppDispatch();

  return (
    <li className={style.card}>
      <img
        className={style.image}
        src={product.images[0]}
        alt={product.title}
        width={110}
        height={110}
      />
      <h2 className={style.title}>
        <Link href={`/${product.title}`}>{product.title}</Link>
      </h2>
      <div className={style.priceContainer}>
        <p className={style.price}>
          Total /S {shoppingCart.amount * shoppingCart.product.price}
        </p>
        <p className={style.price}>/S {product.price}</p>
      </div>
      <div className={style.buttonsContainer}>
        <div className={style.buttonContainer}>
          <div
            className={style.buttonIcon}
            onClick={() => dispatch(removeProdcutToShoppingCart(product))}
          >
            <FontAwesomeIcon icon={faMinus} width="20px" height="20px" />
          </div>
          {shoppingCart.amount}
          <div
            className={style.buttonIcon}
            onClick={() => dispatch(addProductToShoppingCart(product))}
          >
            <FontAwesomeIcon icon={faPlus} width="20px" height="20px" />
          </div>
        </div>
        <div className={style.buttonIcon}>
          <FontAwesomeIcon
            icon={faTrash}
            width="20px"
            height="20px"
            color="var(--error)"
            onClick={() =>
              dispatch(removeAllAmountProdcutToShoppingCart(shoppingCart))
            }
          />
        </div>
      </div>
    </li>
  );
};

export default CardProductShoppingcart;
