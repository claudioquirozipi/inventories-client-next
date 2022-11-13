import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { CategoriesResponse } from "../dto/categories-response.dto";
import { apiCategory } from "../service/category.service";

const useCategories = () => {
  const { data, isLoading, error } = useQuery<
    AxiosResponse<CategoriesResponse[]>
  >(apiCategory.getAll);

  return {
    categories: data,
    isLoadingCategories: isLoading,
    errorCategories: error,
  };
};

export default useCategories;
