import './item.css'

function item({productos}) {
    
    console.log

    return (
        <div className='container-productos'>
            {
                productos.map(productos => {
                    return (
                        <div className='card-producto' key={productos.id}>
                            <h3>{productos.nombre}</h3>
                            <p>${productos.precio}</p>
                            <p>Quedan {productos.stock} disponibles</p>
                            <img src={productos.imagen} alt={productos.nombre} />
                            <button>Agregar al carrito</button>
                        </div>
                    );
                })
            }
        </div>
    );
};
 export default item;