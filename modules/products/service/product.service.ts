import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const apiProduct = {
  getAll: {
    queryKey: ["products"],
    queryFn: () => axios.get(`${baseUrl}/products`),
  },
  getById: (id: string) => ({
    queryKey: ["products", id],
    queryFn: () => axios.get(`${baseUrl}/products/${id}`),
  }),
};
