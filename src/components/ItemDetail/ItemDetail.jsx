import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './ItemDetail.css';
import { fetchData } from '../../fetchData';
import { useAppContext } from '../../context/context';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(1);

    const { agregarAlCarrito } = useAppContext();


    useEffect(() => {
        fetchData()
            .then(response => {
                const productoAMostrar = response.find(el => el.id === parseInt(id));
                setProducto(productoAMostrar);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [id]);

    return (
        loading ? (
            <Loader />
        ) : (
            <div className="card p-4">
                {producto ? (
                    <>
                        <h3 className="card-header">{producto.nombre}</h3>
                        <div className="card-body">
                            <h5>Precio: <b>${producto.precio}</b></h5>
                            <h5>Categoría: <b>{producto.categoria.toUpperCase()}</b></h5>
                            <p><b>{producto.descripcion}</b></p>
                            <p>Quedan <b>{producto.stock}</b> disponibles</p>
                            <ItemCount stock={producto.stock} contador={contador} setContador={setContador} />
                            <img className="card-img-top" src={producto.imagen} alt={producto.nombre} />
                            <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto, contador)}>Agregar al carrito</button>
                            <Link to="/">
                                <button className="btn btn-secondary my-2">Volver al inicio</button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <p>Producto no encontrado con el id {id}</p>
                )}
            </div>
        )
    );
}

export default ItemDetail;