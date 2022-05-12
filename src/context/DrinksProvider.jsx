import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const DrinksContext = createContext();
const DrinksProvider = ({ children }) => {

    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [idDrink, setIdDrink] = useState(null);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setRecipe('')
        const getRecipe = async () => {
            if (!idDrink) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
                const { data } = await axios(url)
                setRecipe(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getRecipe();
    }, [idDrink]);

    const getDrinks = async (search) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.cocktail}&c=${search.category}`
            const { data } = await axios(url)
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleIdDrinkClick = (id) => {
        setIdDrink(id)
    }

    return (
        <DrinksContext.Provider
            value={{
                drinks,
                getDrinks,
                handleModalClick,
                modal,
                handleIdDrinkClick,
                recipe,
                loading
            }}>
            {children}
        </DrinksContext.Provider>
    )
}

export default DrinksProvider