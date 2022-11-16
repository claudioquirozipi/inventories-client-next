// import { config } from "../../utils/config";
import useConfig from "../../modules/config/hooks/config.hooks";
import style from "./style.module.css";

const Footer = () => {
  const { config } = useConfig();
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <h4 className={style.title}>Redes sociales: </h4>

        <ul className={style.containerSocialMedia}>
          {config.socialNetworks.map((sn) => (
            <li key={sn.id}>
              <a href={sn.url} target="_blank" rel="noreferrer">
                <img
                  className={style.imaSocialMedia}
                  src={sn.image}
                  alt={sn.title}
                />
              </a>
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
