import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesProvider";

export const useCategories = () => (useContext(CategoriesContext))