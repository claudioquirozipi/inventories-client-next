import type { NextPage } from "next";
import { useState } from "react";

import { Product } from "../modules/products/product.interface";
import { Filter } from "../components/filter/interface";
import CardProduct from "../components/cardProduct";
import FilterProducts from "../components/filter";
import ButtonBuy from "../components/buttonBuy";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import ProductContainer, {
  ResponseProductContainer,
} from "../modules/products/containers/main.container";
import useCategories from "../modules/categories/hooks/categories.hooks";
import useConfig from "../modules/config/hooks/config.hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../modules/store";

const Home: NextPage<any> = (props) => {
  // const { categories } = props;
  const dispatch = useAppDispatch();
  const shoppingcart = useAppSelector((state) => state.shoppingcart);
  const { categories } = useCategories();
  const { config } = useConfig();

  // const store = useContext(MyContext);

  const [filter, setFilter] = useState<Filter>({});

  function productsFiltered(products: Product[]) {
    const newProducts = products;
    // .filter((p) => (filter.availability ? p.data.availability && p : p))
    // .filter((p) =>
    //   filter.text
    //     ? p.data.title.toLowerCase().includes(filter.text.toLowerCase()) && p
    //     : p
    // )
    // .filter((p) => (filter.min ? filter.min <= p.data.price && p : p))
    // .filter((p) => (filter.max ? filter.max >= p.data.price && p : p))
    // .filter((p) =>
    //   filter.categories?.length
    //     ? stringToArray(p.data.categories).filter((c) =>
    //         filter.categories?.includes(c)
    //       ).length === filter.categories.length && p
    //     : p
    // );
    return products;
    return newProducts;
  }

  return (
    <Layout>
      <h1>
        hola: {shoppingcart.totalAmount} {shoppingcart.totalPrice}
      </h1>

      <ProductContainer>
        {(props: ResponseProductContainer) => (
          <>
            <FilterProducts
              onChange={setFilter}
              categories={categories?.data || []}
            />

            <div className={styles.container}>
              {props.product.map((product, i) => (
                <CardProduct key={i} product={product} />
              ))}
            </div>
            {true ? <ButtonBuy /> : null}
          </>
        )}
      </ProductContainer>
    </Layout>
  );
};

export default Home;
