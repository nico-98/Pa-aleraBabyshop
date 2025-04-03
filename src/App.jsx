import './App.css'
import ItemListConteiner from './components/ItemsListConteiner/ItemListConteiner'
import Navbar from './components/Navbar/Navbar'
import { productos } from './productos'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner/>} />
        <Route path='/categoria/:categoria' element={<ItemListConteiner />} />
        <Route path='/detalle/:id' element={<ItemDetail/>} />
      </Routes>
    </BrowserRouter>
    )
}
export default App
