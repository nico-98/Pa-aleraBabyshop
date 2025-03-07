import './App.css'
import ItemListConteiner from './components/ItemsListConteiner/ItemListConteiner'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <ItemListConteiner saludo="Bienvenido" />
    </>
    )
}
export default App
