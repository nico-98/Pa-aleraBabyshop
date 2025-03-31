import React, { useState, useEffect } from 'react';
import './ItemListConteiner.css';
import Item from '../items/Item';
import Loader from '../loader/Loader';
import { fetchData } from '../../fetchData';

function ItemListConteiner() {
    const [productos, setProductos] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetchData()
            .then((response) => {
                setProductos(response); 
                setLoading(false); 
            })
            .catch((err) => {
                setError(err.message); 
                setLoading(false); 
            });
    }, []); 


    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Loader />
            </div>
        );
    }


    if (error) {
        return <p className="text-center text-danger">Error: {error}</p>;
    }


    return (
        <div className="container mt-5">
            <div className="row">
                {productos.length > 0 ? (
                    productos.map((el) => (
                        <div className="col-md-4 mb-4" key={el.id}>
                            <Item productos={el} />
                        </div>
                    ))
                ) : (
                    <p className="text-center">No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
}

export default ItemListConteiner;