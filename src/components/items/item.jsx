import './Item.css';
import { Link } from 'react-router-dom';
function Item({ productos}) {

const {id, nombre, precio, stock} = productos;

    function agregarAlCarrito(prod) {  
        console.log("Vas Agregar",{...prod, cantidad: 1});
    }

    console.log(productos)
    return (
        <div className='card h-100'>
            {productos && (
                <div className="card-body"
                    key={productos.id}>
                    <h3 className="card-title" >{nombre}</h3>
                    <p className="card-text" >${precio}</p>
                    <p className="card-text" >Quedan {stock} disponibles</p>
                    <img className="card-img-top" src={productos.imagen} alt={nombre} />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-custom m-2 " onClick={()=>agregarAlCarrito (productos)}>Agregar al carrito</button>
                        <Link to= {`/detalle/${id}`}>
                        <button className="btn btn-primary btn-custom m-2 ">Ver detalle</button>
                        </Link>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default Item;