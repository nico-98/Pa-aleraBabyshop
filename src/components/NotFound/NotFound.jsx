import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Opcional: agrega estilos personalizados

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>Error 404</h1>
            <p>La página que estás buscando no existe.</p>
            <Link to="/">
                <button className="btn btn-secondary my-2">Volver al inicio</button>
            </Link>
        </div>
    );
}

export default NotFound;