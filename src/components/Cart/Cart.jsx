import React, { useState } from 'react';
import { useAppContext } from '../../context/context';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import './Cart.css';
import { db } from "../../firebaseConfig";

function Cart() {
    const { carrito } = useAppContext();
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [cliente, setCliente] = useState({ nombre: "", email: "", direccion: "" });
    const [ordenId, setOrdenId] = useState(null);

    const totalGeneral = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

    const handleFinalizarCompra = () => {
        setMostrarFormulario(true);
    };

    const handleInputChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.id]: e.target.value,
        });
    };

    const crearOrden = async (cliente, carrito, total) => {
        try {
            const orden = {
                cliente: cliente,
                items: carrito,
                total: total,
                fecha: serverTimestamp(),
            };

            const docRef = await addDoc(collection(db, "orders"), orden);
            console.log("Orden creada con ID:", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Error al crear la orden:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const id = await crearOrden(cliente, carrito, totalGeneral);
            setOrdenId(id);
            console.log("Orden creada con éxito:", id);
        } catch (error) {
            console.error("Error al crear la orden:", error);
        }
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {carrito.length > 0 ? (
                <>
                    <ul className="cart-list">
                        {carrito.map((producto) => (
                            <li key={producto.id} className="cart-item">
                                <h4>{producto.nombre}</h4>
                                <p>Precio: ${producto.precio}</p>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p>Total: ${producto.precio * producto.cantidad}</p>
                            </li>
                        ))}
                    </ul>
                    <h3>Total General: ${totalGeneral}</h3>
                    <button className="btn btn-primary" onClick={handleFinalizarCompra}>
                        Finalizar Compra
                    </button>
                </>
            ) : (
                <p>El carrito está vacío.</p>
            )}

            {mostrarFormulario && (
                <div className="form-container">
                    <h3>Formulario de Compra</h3>
                    {ordenId ? (
                        <p>¡Gracias por tu compra! Tu número de orden es: <b>{ordenId}</b></p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    className="form-control"
                                    value={cliente.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={cliente.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="direccion">Dirección:</label>
                                <input
                                    type="text"
                                    id="direccion"
                                    className="form-control"
                                    value={cliente.direccion}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-success">
                                Confirmar Compra
                            </button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;