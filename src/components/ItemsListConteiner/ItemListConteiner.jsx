import { useEffect, useState } from 'react';
import './ItemListConteiner.css';
import Item from '../items/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemListContainer({greetings}) {
    const [loading, setLoading] = useState(true);
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState(null);

    useEffect(() => {
        fetchData()
            .then(response => {
                setTodosLosProductos(response);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>{greetings}</h1>
            <div className="container-productos">
                {
                    loading ? (
                        <Loader />
                    ) : (
                        todosLosProductos.length > 0 ? (
                            todosLosProductos.map(el => (
                                <Item key={el.id} productos={el} productosFiltrados={setProductosFiltrados} />
                            ))
                        ) : (
                            <p className="text-center">No hay productos disponibles.</p>
                        )
                    )
                }
            </div>
            <div>
                {
                    productosFiltrados && 
                    <ItemDetail productos={productosFiltrados} volverAlInicio={()=>setProductosFiltrados(null)}/>
                }
            </div>
        </div>
    );
}

export default ItemListContainer;