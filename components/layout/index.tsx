import Head from "next/head";

import { LayoutProps } from "./interface";
import style from "./style.module.css";
import Header from "../header";
import Footer from "../footer";

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className={style.container}>
      <Head>
        <title>Cultura Organica</title>
        <meta name="description" content="Tienda de productos naturales" />
        <link rel="icon" href="/icon.jpeg" />

        <meta property="og:title" content="Cultura Organica" />
        <meta
          property="og:description"
          content="Tienda de productos naturales"
        />
        <meta property="og:image" content="/icon.jpeg" />
      </Head>

      <Header />

      <div className={style.childrenContainer}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
