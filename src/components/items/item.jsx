import './Item.css';
function Item({ productos }) {

    
    console.log(productos);

    return (
        <div className='card h-100'>
            {productos && (
                <div className="card-body"
                    key={productos.id}>
                    <h3 className="card-title" >{productos.nombre}</h3>
                    <p className="card-text" >${productos.precio}</p>
                    <p className="card-text" >Quedan {productos.stock} disponibles</p>
                    <img className="card-img-top" src={productos.imagen} alt={productos.nombre} />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-custom m-2 ">Agregar al carrito</button>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default Item;