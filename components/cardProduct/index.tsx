import { useContext } from "react";
import Link from "next/link";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { DataProduct, myAction, MyContext } from "../../utils/store";
import { CardProductProps } from "./interface";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "../../modules/store";
import { addProductToShoppingCart } from "../../modules/shoppingcart/shoppingcart.store";

const CardProduct = (props: CardProductProps) => {
  const { product } = props;
  const shoppingcart = useAppSelector((state) => state.shoppingcart);
  const dispatch = useAppDispatch();

  const store: any = {};

  return (
    <div className={`${style.card} ${!product.stock && style.cardDisable}`}>
      <img
        className={style.image}
        src={product.images[0]}
        alt={product.title}
        width={110}
        height={110}
      />

      <ul className={style.chipGroup}>
        {product.categories.map((c, i) => (
          <li key={i} className={style.chip}>
            {c}
          </li>
        ))}
      </ul>
      <h2 className={style.title}>
        <Link href={`/${product.title}`}>{product.title}</Link>
      </h2>

      <p className={style.price}>/S {product.price}</p>

      {product.stock && (
        <>
          {true ? (
            <div className={style.buttonContainer}>
              <div className={style.buttonIcon} onClick={() => {}}>
                <FontAwesomeIcon icon={faMinus} width="20px" height="20px" />
              </div>
              {shoppingcart.shoppingCart.find(
                (sc) => sc.product.id === product.id
              )?.amount || 0}
              <div
                className={style.buttonIcon}
                onClick={() => dispatch(addProductToShoppingCart(product))}
              >
                <FontAwesomeIcon icon={faPlus} width="20px" height="20px" />
              </div>
            </div>
          ) : (
            <button
              className={style.button}
              // onClick={() => store.dispatch(myAction.addProduct(product))}
            >
              Comprar
            </button>
          )}
        </>
      )}
    </div>
  );
  // function printAmount(shoppingCartProducts: DataProduct[]) {
  //   const tempResponse = shoppingCartProducts.filter(
  //     (sp: DataProduct) => sp?.slug === product.slug
  //   )[0]?.amount;
  //   let response = 0;
  //   if (tempResponse) response = tempResponse;
  //   return response;
  // }
  function stringToArray(text: string) {
    const newText = JSON.stringify(text)
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll('"', "");
    return newText.split(",");
  }
};

export default CardProduct;
