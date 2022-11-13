import { useContext, useEffect, useState } from "react";

// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardProductShoppingcart from "../cardProductShoppingcart";
// import { DataProduct, MyContext } from "../../utils/store";
// import { config } from "../../utils/config";
import style from "./style.module.css";
import Popup from "../popup";

const ShoppingCart = () => {
  const store = {};
  const [visible, setVisible] = useState(false);

  const phoneNumber = () => "";

  useEffect(() => {
    if (true) {
      setVisible(false);
    }
  }, [store]);

  return (
    <div>
      {true && (
        <div
          onClick={() => setVisible(true)}
          className={style.buttonShoppingcart}
        >
          {/* <FontAwesomeIcon
            icon={faShoppingCart}
            color="var(--contrast)"
            width="20px"
            height="20px"
          /> */}
          <span className={style.totalProductsFloat}>
            {/* {store.state.totalProducts} */}
          </span>
        </div>
      )}
      <Popup
        onClose={() => {
          setVisible((s) => !s);
        }}
        visible={visible}
      >
        <div className={style.container}>
          <div className={style.main}>
            <h3 className={style.title}>Total de productos:</h3>
            <ul className={style.shoppingcartList}>
              {/* {store.state.shoppingCartProducts?.map(
                (sc: DataProduct, i: number) => (
                  <CardProductShoppingcart key={i} product={sc} />
                )
              )} */}
            </ul>
          </div>
          <div className={style.footer}>
            <h4 className={style.titleFooter}>Total a pagar:</h4>
            <a
              target="_blank"
              className={style.buttonFooter}
              rel="noreferrer"
              href={`https://wa.me/${phoneNumber()}?text=${"asd"}`}
            >
              Comprar con Whatsapp
            </a>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ShoppingCart;
