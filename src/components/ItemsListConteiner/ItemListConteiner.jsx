import { useEffect, useState } from 'react';
import './itemListConteiner.css';
import Item from '../items/Item';
import Loader from '../Loader/Loader';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        fetchData()
            .then(response => {
                console.log("Datos obtenidos:", response);
                setTodosLosProductos(response.filter(el => el && el.id));
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [categoria]);

    return (
        loading ? (
            <Loader />
        ) : (
            <div>
                <div className="container-productos">
                    {todosLosProductos.length > 0 ? (
                        categoria ? (
                            todosLosProductos
                                .filter(el => el.categoria === categoria)
                                .map(el => <Item key={el.id} producto={el} />)
                        ) : (
                            todosLosProductos.map(el => <Item key={el.id} producto={el} />)
                        )
                    ) : (
                        <p className="text-center">No hay productos disponibles.</p>
                    )}
                </div>
            </div>
        )
    );
}

export default ItemListContainer;