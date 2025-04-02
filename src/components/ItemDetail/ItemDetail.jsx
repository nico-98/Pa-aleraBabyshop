import './ItemDetail.css';
import ItemConunt from '../ItemCount/ItemCount';

import { useState } from 'react';

function ItemDetail({ productos, volverAlInicio }) {

    const [contador, setContador] = useState(1);

    const { nombre, precio, stock, descripcion, categoria} = productos;

    function agregarAlCarrito(prod) {  
        console.log("Vas Agregar",{...prod, cantidad: contador});
        setContador(1);
    }

    return (
        <div className='card h-100'>
            {productos && (
                <div className="card-body"
                    key={productos.id}>
                    <h3 className="card-title" >{nombre}</h3>
                    <p className="card-text"> <b>{descripcion}</b></p>
                    <p className="card-text" >${precio}</p>
                    <p className="card-text" >Quedan {stock} disponibles</p>
                    <ItemConunt stock={stock} contador={contador} setContador={setContador}/>
                    <p className="card-text" >Categoria: {categoria}</p>
                    <img className="card-img-top" src={productos.imagen} alt={nombre} />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-custom m-2 " onClick={()=>agregarAlCarrito (productos)}>Agregar al carrito</button>
                        <button className="btn btn-primary btn-custom m-2 " onClick={volverAlInicio}>Volver al inicio</button>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default ItemDetail;