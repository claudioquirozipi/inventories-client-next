import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const apiCategory = {
  getAll: {
    queryKey: ["categories"],
    queryFn: () => axios.get(`${baseUrl}/categories`),
  },
};
