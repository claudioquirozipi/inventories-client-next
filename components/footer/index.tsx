// import { config } from "../../utils/config";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <h4 className={style.title}>Redes sociales: </h4>

        <ul className={style.containerSocialMedia}>
          {[].map((sm) => (
            <li>
              {/* <a href={sm.url} target="_blank" rel="noreferrer">
                <img
                  className={style.imaSocialMedia}
                  src={`/socialmedia/${sm.name}.png`}
                  alt={sm.name}
                />
              </a> */}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.container}>
        <h4 className={style.title}>Dirección:</h4>
        <p className={style.information}>{"address"}</p>
        <img className={style.map} src="/map.jpg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
