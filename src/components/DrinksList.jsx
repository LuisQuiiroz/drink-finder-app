import React from 'react'
import { Row } from 'react-bootstrap';
import { useDrinks } from '../hooks/useDrinks'
import Drink from './Drink';

const DrinksList = () => {
    const { drinks } = useDrinks();
    // if (!drinks) return;
    return (
        <Row className="mt-5">
            {
                !drinks
                    ? <h2>Cocktail not found</h2>
                    : drinks.map(drink => (
                        <Drink
                            key={drink.idDrink}
                            drink={drink}
                        />
                    ))
            }
        </Row>
    )
}

export default DrinksList