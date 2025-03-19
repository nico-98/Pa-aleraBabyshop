import './App.css'
import ItemListConteiner from './components/ItemsListConteiner/ItemListConteiner'
import Navbar from './components/Navbar/Navbar'
import { productos } from './productos'

function App() {
  return (
    <>
    <Navbar/>
    <ItemListConteiner saludo="Bienvenido" />
    <ItemListConteiner productos={productos} />
    </>
    )
}
export default App
