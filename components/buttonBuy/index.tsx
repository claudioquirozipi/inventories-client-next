import { useContext } from "react";

import style from "./style.module.css";

const ButtonBuy = () => {
  // const store = useContext(MyContext);
  const store = {
    state: { message: "hola" },
  };

  return store.state.message ? (
    <a
      target="_blank"
      className={style.container}
      rel="noreferrer"
      href={`https://wa.me/${"phoneNumber()"}?text=${store.state.message}`}
    >
      <img src={"/socialmedia/whatsapp.png"} width={70} height={70} />
    </a>
  ) : null;
};

export default ButtonBuy;
