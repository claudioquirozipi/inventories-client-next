import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { Product, ProductsResponse } from "../product.interface";
import { apiProduct } from "../service/product.service";

interface ProductContainerProps {
  children: any;
}

export interface ResponseProductContainer {
  product: Product[];
  isLoading: boolean;
  error: any;
}
const ProductContainer = (props: ProductContainerProps) => {
  const { children } = props;

  const { data, isLoading, error } = useQuery<
    AxiosResponse<ProductsResponse[]>
  >(apiProduct.getAll);

  const response: ResponseProductContainer = {
    product: productMapper(data),
    isLoading,
    error,
  };
  return <>{children(response)}</>;
};

const productMapper = (
  data: AxiosResponse<ProductsResponse[], any> | undefined
): Product[] => {
  const newProduct: Product[] =
    data?.data.map((product, i) => ({
      id: i.toString(),
      title: product.title,
      description: "",
      price: product.price,
      stock: product.stock,
      images: product.images.map(
        (p) => `${process.env.NEXT_PUBLIC_UPLOAD_IMAGE}/products/${p}`
      ),
      categories: ["asdf", "asedf"],
    })) || [];
  return newProduct;
};
export default ProductContainer;
