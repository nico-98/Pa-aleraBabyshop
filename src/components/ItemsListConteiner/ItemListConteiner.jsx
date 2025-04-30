import './ItemListConteiner.css';
import Item from '../items/item';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function ItemListContainer() {
    const { productos, loadingProductos } = useAppContext(); 
    const { categoria } = useParams();

    const productosFiltrados = categoria
        ? productos.filter(producto => producto.categoria === categoria)
        : productos;

    return (
        loadingProductos ? (
            <Loader />
        ) : (
            <div>
                <div className="container-productos">
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map(producto => (
                            <Item key={producto.id} producto={producto} />
                        ))
                    ) : (
                        <p className="text-center">No hay productos disponibles.</p>
                    )}
                </div>
            </div>
        )
    );
}

export default ItemListContainer;