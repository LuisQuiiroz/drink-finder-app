import { Container } from "react-bootstrap"
import DrinkModal from "./components/DrinkModal"
import DrinksList from "./components/DrinksList"
import FormDrink from "./components/FormDrink"
import CategoriesProvider from "./context/CategoriesProvider"
import DrinksProvider from "./context/drinksProvider"

function App() {

  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drink Finder</h1>
        </header>
        <Container className="mt-5">
          <FormDrink />
          <DrinksList />
          <DrinkModal />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}

export default App
