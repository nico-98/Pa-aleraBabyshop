import './App.css'
import ItemListConteiner from './components/ItemsListConteiner/ItemListConteiner'
import Navbar from './components/Navbar/Navbar'
import { productos } from './productos'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListConteiner productos={productos} />
    </>
    )
}
export default App
