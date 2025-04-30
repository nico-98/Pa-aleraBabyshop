import './App.css';
import ItemListConteiner from './components/ItemsListConteiner/ItemListConteiner';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFound from './components/NotFound/NotFound';
import { ContextProvider } from './context/context';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/categoria/:categoria" element=    {<ItemListConteiner />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> {}
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;