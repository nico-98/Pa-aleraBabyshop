import './App.css';
import ItemListConteiner from './components/ItemsListConteiner/ItemListConteiner';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFound from './components/NotFound/NotFound'; // Importa el componente de error 404

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/categoria/:categoria" element={<ItemListConteiner />} />
        <Route path="/detalle/:id" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} /> {}
      </Routes>
    </BrowserRouter>
  );
}

export default App;