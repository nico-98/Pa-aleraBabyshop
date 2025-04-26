import { Button } from 'bootstrap';
import './Item.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function Item({ producto }) {
    if (!producto) {
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {agregarAlCarrito} = useAppContext();

    const { id, nombre, precio, stock, imagen } = producto;

    return (
        <div className="card h-100">
            <div className="card-body" key={id}>
                <h3 className="card-title">{nombre}</h3>
                <p className="card-text">${precio}</p>
                <p className="card-text">Quedan {stock} disponibles</p>
                <img className="card-img-top" src={imagen} alt={nombre} />
                <div className="d-flex justify-content-center">

                    <button className="btn btn-secondary btn-custom m-2" onClick={() => agregarAlCarrito(producto, 1)}>Agregar al carrito</button>
                    
                    <Link to={`/detalle/${id}`}>
                        <button className="btn btn-primary btn-custom m-2">Ver detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;