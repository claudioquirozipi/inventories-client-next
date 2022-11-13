import { Dispatch, SetStateAction } from "react";
import { Category } from "../../modules/categories/entities/category.entities";

export interface FilterProductsProps {
  categories: Category[];
  onChange: Dispatch<SetStateAction<Filter>>;
}

export interface Filter {
  text?: string;
  min?: number;
  max?: number;
  categories?: string[];
  availability?: boolean;
}
