import './ItemCount.css';

function ItemCount({ stock, contador, setContador }) {

    function modificarContador(operacion) {
        if (operacion === "+") {
            if (contador < stock) {
                setContador(contador + 1);
            };
        } else {
            if (contador > 1) {
                setContador(contador - 1);
            }
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
            <div className="contador-container">
                <button 
                    className="btn btn-secondary contador-boton" 
                    onClick={() => modificarContador("-")}
                >
                    -
                </button>
                <p>{contador}</p>
                <button 
                    className="btn btn-secondary contador-boton" 
                    onClick={() => modificarContador("+")}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ItemCount;