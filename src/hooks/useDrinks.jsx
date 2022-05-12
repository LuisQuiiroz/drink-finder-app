import { useContext } from "react"
import { DrinksContext } from "../context/drinksProvider"

export const useDrinks = () => useContext(DrinksContext);